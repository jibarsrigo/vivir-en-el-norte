"""Mapa detallado + ficha visual de cada municipio para el estudio (docs/estudio_zonas.md).

Formato homogéneo (un tercio de página A4): a la izquierda el término municipal con lo que
tiene dentro según OpenStreetMap (playas, puerto, tren, centro de salud, farmacias,
supermercados, miradores, montes, monumentos, mercado, golf, termas) más las carreteras;
a la derecha la ficha con lo que no se puede dibujar (sol, lluvia, verano, mar, hospital,
aeropuerto, servicios, precio) comparado con Mancor; abajo la leyenda común.

Uso:  python -m mapa2.mapas_municipio ["A Guarda" ...]   -> output/mapas_municipios/NN_slug.png
"""
from __future__ import annotations

import json
import math
import sys
from pathlib import Path

import geopandas as gpd
import matplotlib

matplotlib.use("Agg")
import matplotlib.patheffects as pe  # noqa: E402
import matplotlib.pyplot as plt  # noqa: E402
import pandas as pd  # noqa: E402
from matplotlib.lines import Line2D  # noqa: E402
from matplotlib.patches import Rectangle  # noqa: E402
from shapely.geometry import Point  # noqa: E402

from . import esquema as E  # noqa: E402
from . import mapas_zona as MZ  # noqa: E402
from . import osm  # noqa: E402

RAIZ = Path(__file__).resolve().parent.parent
DIR_SALIDA = RAIZ / "output" / "mapas_municipios"
ANCHO_IN, ALTO_IN, PPP = 6.7, 3.15, 220

MANCOR = {"sol": 2800, "despejados": 120, "lluvia_dias": 58, "lluvia_mm": 600, "dias_30": 37, "verano": 25.5}

HALO = [pe.withStroke(linewidth=1.6, foreground="white")]

# Lugares que OSM no tiene o que conviene forzar (nombre, lat, lon, tipo).
EXTRAS: dict[str, list[tuple[str, float, float, str]]] = {
    "A Guarda": [("Barco a Caminha", 41.876, -8.862, "puerto"), ("Camposancos", 41.880, -8.865, "lugar"),
                 ("Paseo marítimo", 41.895, -8.876, "paseo")],
    "Oia": [("Senda litoral", 42.03, -8.888, "paseo"), ("Curros de Mougás", 42.06, -8.86, "paseo"),
            ("Mosteiro de Oia", 42.001, -8.879, "historico"), ("Praia de Mougás", 42.053, -8.887, "playa"),
            ("Mougás", 42.052, -8.874, "lugar"), ("Viladesuso", 42.030, -8.872, "lugar"), ("Pedornes", 41.985, -8.875, "lugar")],
    "O Rosal": [("O Calvario", 41.935, -8.836, "lugar")],
    "Tomiño": [("Paseo fluvial", 41.950, -8.758, "paseo"), ("Puente a Cerveira", 41.943, -8.752, "lugar"),
               ("Goián", 41.953, -8.762, "lugar")],
    "Tui": [("Paseo fluvial", 42.043, -8.648, "paseo"), ("Puente internacional", 42.038, -8.646, "lugar"),
            ("Ecopista (Valença)", 42.032, -8.632, "paseo")],
}

ESTILO = {
    "playa": dict(marker="v", color=MZ.COL_PLAYA, s=20, etiqueta=True, cursiva=True),
    "puerto": dict(marker="s", color="#0d47a1", s=26, etiqueta=True, texto="⚓"),
    "tren": dict(marker="s", color="#212121", s=26, etiqueta=True, texto="T"),
    "salud": dict(marker="s", color=MZ.COL_HOSP_PUB, s=30, etiqueta=True, texto="+"),
    "hospital": dict(marker="s", color=MZ.COL_HOSP_PUB, s=40, etiqueta=True, texto="H"),
    "farmacia": dict(marker="P", color="#2e7d32", s=12, etiqueta=False),
    "supermercado": dict(marker="s", color="#ef6c00", s=10, etiqueta=False),
    "mirador": dict(marker="^", color=MZ.COL_MONTE, s=18, etiqueta=True, cursiva=True, hueco=True),
    "cima": dict(marker="^", color=MZ.COL_MONTE, s=26, etiqueta=True, cursiva=True),
    "historico": dict(marker="*", color="#6d4c41", s=34, etiqueta=True),
    "museo": dict(marker="D", color="#6d4c41", s=12, etiqueta=True),
    "golf": dict(marker="P", color="#00897b", s=24, etiqueta=True),
    "termas": dict(marker="h", color=MZ.COL_BALNEARIO, s=26, etiqueta=True),
    "mercado": dict(marker="D", color="#ef6c00", s=16, etiqueta=True),
    "paseo": dict(marker="D", color=MZ.COL_PASEO, s=16, etiqueta=True, cursiva=True),
    "lugar": dict(marker="o", color="#333", s=8, etiqueta=True),
    "aeropuerto": dict(marker="^", color=MZ.COL_AERO, s=40, etiqueta=True),
}
# Orden de prioridad para las etiquetas (primero las más importantes).
ORDEN = ["aeropuerto", "hospital", "salud", "tren", "puerto", "historico", "playa", "paseo", "cima", "lugar", "termas", "golf",
         "mercado", "museo", "mirador", "farmacia", "supermercado"]


class Etiquetador:
    """Coloca etiquetas probando varias posiciones y descarta las que solapan con otras ya puestas."""

    OFFSETS = [(3.5, 0, "left"), (-3.5, 0, "right"), (0, 4.5, "center"), (0, -4.5, "center"), (3.5, 4, "left"), (3.5, -4, "left"),
               (-3.5, 4, "right"), (-3.5, -4, "right")]

    def __init__(self, fig, ax):
        self.fig, self.ax = fig, ax
        self.renderer = fig.canvas.get_renderer()
        self.cajas: list = []
        self.ax_caja = ax.get_window_extent(self.renderer)

    def reservar(self, artista):
        self.cajas.append(artista.get_window_extent(self.renderer).expanded(1.05, 1.15))

    def reservar_punto(self, x, y, radio_px):
        from matplotlib.transforms import Bbox

        px, py = self.ax.transData.transform((x, y))
        self.cajas.append(Bbox.from_extents(px - radio_px, py - radio_px, px + radio_px, py + radio_px))

    def poner(self, texto, xy, obligatoria=False, **kw):
        for dx, dy, ha in self.OFFSETS:
            a = self.ax.annotate(texto, xy, xytext=(dx, dy), textcoords="offset points", ha=ha,
                                 va="center" if dy == 0 else ("bottom" if dy > 0 else "top"), **kw)
            caja = a.get_window_extent(self.renderer)
            if not self.ax_caja.contains(caja.x0, caja.y0) or not self.ax_caja.contains(caja.x1, caja.y1):
                a.remove()
                continue
            if any(caja.overlaps(c) for c in self.cajas):
                a.remove()
                continue
            self.cajas.append(caja.expanded(1.05, 1.15))
            return a
        if obligatoria:
            a = self.ax.annotate(texto, xy, xytext=(3.5, 0), textcoords="offset points", ha="left", va="center", **kw)
            self.cajas.append(a.get_window_extent(self.renderer))
            return a
        return None


def _poligono(f: pd.Series):
    capa = "municipios_pt_norte" if f["pais"] == "Portugal" else "municipios_es_norte"
    g = MZ._geo(capa)
    d = g[g.geometry.contains(Point(f["lon"], f["lat"]))]
    return d.iloc[0].geometry if len(d) else None


def _nombre_gadm(fila) -> str:
    import re

    for k in ("NAME_4", "NAME_2"):
        if k in fila and isinstance(fila[k], str):
            n = re.sub(r"(?<=[a-záéíóúñç])(?=[A-ZÁÉÍÓÚÑ])", " ", fila[k])  # GADM pega las palabras: "OPorriño"
            n = re.sub(r"^([OA])(?=[A-ZÁÉÍÓÚÑ])", r"\1 ", n)
            n = re.sub(r"(?<=[a-záéíóúñç])(dela|dos|das|del|de|do|da|e|y)(?= [A-ZÁÉÍÓÚÑ])", lambda m: " " + m.group(1).replace("dela", "de la"), n)
            return n
    return ""


def _vecinos(ax, bbox, propio):
    for capa, color in (("municipios_es_norte", MZ.COL_ESPANA), ("municipios_pt_norte", MZ.COL_PORTUGAL)):
        g = MZ._geo(capa).cx[bbox[0] - 0.05:bbox[2] + 0.05, bbox[1] - 0.05:bbox[3] + 0.05]
        if not len(g):
            continue
        g.plot(ax=ax, color=color, edgecolor="#bdbdbd", linewidth=0.4)
        ventana = gpd.GeoSeries([Point(bbox[0], bbox[1]).buffer(0)]).total_bounds  # noqa: F841
        from shapely.geometry import box

        caja = box(*bbox)
        for _, fila in g.iterrows():
            if fila.geometry.equals(propio):
                continue
            rec = fila.geometry.intersection(caja)
            if rec.is_empty or rec.area < caja.area * 0.03:
                continue
            p = rec.representative_point()
            ax.annotate(_nombre_gadm(fila), (p.x, p.y), fontsize=4.6, color="#8a8a8a", ha="center", va="center",
                        style="italic", zorder=3)
    gpd.GeoSeries([propio]).plot(ax=ax, color="#fff1bf", edgecolor="#c79a1a", linewidth=1.0, zorder=2)
    MZ._geo("frontera_es_pt").plot(ax=ax, color="#6d6d6d", linewidth=0.9, zorder=2.6)


def _vias(ax, datos, bbox):
    from shapely.geometry import LineString, box

    caja = box(*bbox)
    mejores: dict[str, tuple[float, tuple[float, float]]] = {}
    estilo = {
        "motorway": (MZ.COL_AUTOPISTA, 1.5, "-", 4),
        "trunk": (MZ.COL_AUTOPISTA, 1.2, "-", 4),
        "primary": ("#e0973a", 0.9, "-", 3.5),
        "secondary": ("#9e9e9e", 0.55, "-", 3),
        "rail": ("#424242", 0.6, (0, (3, 2)), 3.2),
    }
    for v in datos["vias"]:
        clase = v["clase"]
        if clase not in estilo:
            continue
        color, lw, ls, z = estilo[clase]
        xs = [c[0] for c in v["coords"]]
        ys = [c[1] for c in v["coords"]]
        if clase in ("motorway", "trunk"):
            ax.plot(xs, ys, color="white", linewidth=lw + 1.1, zorder=z - 0.05, solid_capstyle="round")
        ax.plot(xs, ys, color=color, linewidth=lw, linestyle=ls, zorder=z, solid_capstyle="round")
        ref = v["ref"].split(";")[0].strip()
        if ref and clase in ("motorway", "trunk", "primary") and len(v["coords"]) >= 2:
            seg = LineString(v["coords"]).intersection(caja)
            if seg.is_empty:
                continue
            if seg.length > mejores.get(ref, (0, None))[0]:
                p = seg.interpolate(0.5, normalized=True) if seg.geom_type == "LineString" else seg.representative_point()
                mejores[ref] = (seg.length, (p.x, p.y))
    for ref, (_, (x, y)) in mejores.items():
        ax.annotate(ref, (x, y), fontsize=4.4, color="#555", ha="center", va="center", zorder=6,
                    bbox=dict(boxstyle="round,pad=0.12", fc="white", ec="none", alpha=0.85))


def _puntos(ax, datos, bbox, f, poligono, et: Etiquetador):
    vistos: set[tuple[str, str]] = set()
    puntos = [dict(p) for p in datos["puntos"]]
    for nombre, la, lo, tipo in EXTRAS.get(f["municipio"], []):
        puntos.append({"tipo": tipo, "nombre": nombre, "lat": la, "lon": lo, "dentro": True, "ele": ""})
    # Cimas: solo las cinco más altas con nombre, para no llenar el mapa de triángulos.
    cimas = sorted([p for p in puntos if p["tipo"] == "cima" and p.get("nombre")],
                   key=lambda p: -float(p.get("ele") or 0))
    descartar = {id(p) for p in cimas[5:]}
    puntos = [p for p in puntos if id(p) not in descartar]
    puntos.sort(key=lambda p: ORDEN.index(p["tipo"]) if p["tipo"] in ORDEN else 0)
    centro = Point(f["lon"], f["lat"])
    for p in puntos:
        if not MZ._dentro(p["lat"], p["lon"], bbox, 0.004):
            continue
        tipo, nombre = p["tipo"], (p["nombre"] or "").strip()
        st = ESTILO.get(tipo)
        if not st:
            continue
        # Fuera del término solo lo que orienta: playas, puertos, tren, sanidad, pueblos, montes con nombre.
        if not p["dentro"] and tipo in ("farmacia", "supermercado", "mirador", "museo", "mercado", "historico"):
            continue
        if tipo in ("mirador", "cima", "historico", "museo", "lugar", "golf", "termas") and not nombre:
            continue
        if tipo == "lugar" and Point(p["lon"], p["lat"]).distance(centro) < 0.012:
            continue
        clave = (tipo, nombre.lower()) if nombre else (tipo, f"{p['lat']:.3f},{p['lon']:.3f}")
        if clave in vistos:
            continue
        vistos.add(clave)
        if st.get("hueco"):
            ax.scatter([p["lon"]], [p["lat"]], marker=st["marker"], facecolors="white", edgecolors=st["color"], s=st["s"],
                       linewidths=0.7, zorder=7)
        else:
            ax.scatter([p["lon"]], [p["lat"]], marker=st["marker"], c=st["color"], s=st["s"], zorder=7,
                       edgecolors="white", linewidths=0.4)
        if st.get("texto"):
            ax.text(p["lon"], p["lat"], st["texto"], fontsize=4.2, ha="center", va="center", color="white", fontweight="bold", zorder=8)
        if st.get("etiqueta") and nombre:
            etiqueta = nombre
            if tipo == "cima" and p.get("ele"):
                etiqueta += f" ({p['ele']} m)"
            if tipo == "salud":
                etiqueta = "Centro de salud" if "sa" in nombre.lower() else nombre
            if len(etiqueta) > 30:
                etiqueta = etiqueta[:28] + "…"
            et.poner(etiqueta, (p["lon"], p["lat"]), fontsize=4.8, color=st["color"], zorder=8, path_effects=HALO,
                     style="italic" if st.get("cursiva") else "normal")


def _municipio(ax, f, et: Etiquetador):
    color = E.COLOR_CLASE.get(f["clase_clima"], "#666")
    ax.scatter([f["lon"]], [f["lat"]], marker="o", c=color, s=170, zorder=9, edgecolors="black", linewidths=0.8)
    et.reservar_punto(f["lon"], f["lat"], 7 * PPP / 72)
    ax.text(f["lon"], f["lat"], str(int(f["n"])), fontsize=6.4, ha="center", va="center", color="white", fontweight="bold", zorder=10)
    a = ax.annotate(f["municipio"].split(" (")[0], (f["lon"], f["lat"]), xytext=(9, 0), textcoords="offset points", fontsize=7,
                    fontweight="bold", ha="left", va="center", zorder=10, path_effects=[pe.withStroke(linewidth=2, foreground="white")])
    et.reservar(a)


def _escala(ax, bbox):
    latm = (bbox[1] + bbox[3]) / 2
    kmg = 111.32 * math.cos(math.radians(latm))
    ancho_km = (bbox[2] - bbox[0]) * kmg
    km = 5 if ancho_km > 22 else 2
    x0 = bbox[0] + (bbox[2] - bbox[0]) * 0.03
    y0 = bbox[3] - (bbox[3] - bbox[1]) * 0.05
    ax.plot([x0, x0 + km / kmg], [y0, y0], color="black", linewidth=1.5, zorder=9)
    ax.text(x0 + km / kmg / 2, y0 - (bbox[3] - bbox[1]) * 0.015, f"{km} km", fontsize=4.8, ha="center", va="top", zorder=9)


def _conteo(datos, poligono, municipio: str) -> dict[str, int]:
    cerca = poligono.buffer(0.004)  # el término más ~400 m (puertos y playas caen fuera de la costa GADM)
    c: dict[str, int] = {}
    vistos = set()
    puntos = list(datos["puntos"]) + [{"tipo": t, "nombre": n, "lat": la, "lon": lo, "dentro": True}
                                       for n, la, lo, t in EXTRAS.get(municipio, [])]
    for p in puntos:
        if not cerca.contains(Point(p["lon"], p["lat"])):
            continue
        nombre = (p["nombre"] or "").lower()
        clave = (p["tipo"], nombre) if nombre else (p["tipo"], round(p["lat"], 3), round(p["lon"], 3))
        if clave in vistos:
            continue
        vistos.add(clave)
        if p["tipo"] in ("farmacia", "supermercado", "salud", "hospital", "tren", "puerto", "playa", "mirador", "golf", "termas", "mercado", "museo"):
            if p["tipo"] in ("playa", "mirador") and not nombre:
                continue
            if p["tipo"] not in ("playa", "puerto", "mirador") and not p.get("dentro"):
                continue
            c[p["tipo"]] = c.get(p["tipo"], 0) + 1
    return c


def _num(v, dec=0):
    try:
        x = float(v)
    except (TypeError, ValueError):
        return "—"
    s = f"{x:,.{dec}f}".replace(",", "X").replace(".", ",").replace("X", ".")
    return s


def _barra(ax, y, valor, referencia, maximo, color, texto_ref):
    ax.add_patch(Rectangle((0.0, y - 0.011), 1.0, 0.022, transform=ax.transAxes, facecolor="#eceff1", edgecolor="none"))
    ax.add_patch(Rectangle((0.0, y - 0.011), min(valor / maximo, 1.0), 0.022, transform=ax.transAxes, facecolor=color, edgecolor="none"))
    xr = min(referencia / maximo, 1.0)
    ax.plot([xr, xr], [y - 0.02, y + 0.02], color="#212121", linewidth=1.0, transform=ax.transAxes)
    ax.text(min(xr, 0.995), y - 0.026, texto_ref, fontsize=3.9, ha="right" if xr > 0.8 else "center", va="top", color="#212121",
            transform=ax.transAxes)


def _ficha(ax, f, conteo):
    ax.axis("off")
    sub = f"{f['provincia']} · {f['pais']} · franja {f['franja']} ({int(f['min_costa'])} min al mar)"
    ax.text(0, 1.0, f"{int(f['n'])} · {f['municipio']}", fontsize=8.2, fontweight="bold", color="#0b3d5c", va="top", transform=ax.transAxes)
    ax.text(0, 0.935, sub, fontsize=5.4, color="#555", va="top", transform=ax.transAxes)

    filas = []
    filas.append(("☀", f"Sol {_num(f['sol_horas_anio'])} h/año · {int(f['dias_despejados'])} días despejados · {int(f['dias_cubiertos'])} cubiertos", "#b26a00"))
    filas.append(("barra_sol", None, None))
    filas.append(("☂", f"Lluvia {int(f['lluvia_dias_anio'])} días · {_num(f['lluvia_mm_anio'])} mm (Mancor 58 días · 600 mm)", "#1565c0"))
    filas.append(("barra_lluvia", None, None))
    filas.append(("°", f"Verano {_num(f['temp_verano_c'], 1)} °C de media · invierno {_num(f['temp_invierno_c'], 1)} °C · humedad {int(f['humedad_pct'])} % · viento {str(f['viento']).lower()} · niebla {str(f['niebla']).lower()}", "#6d4c41"))
    filas.append(("~", f"Baño: {f['playa_bano']} · {int(f['min_bano'])} min · agua {f['temp_agua_verano']} °C", MZ.COL_PLAYA))
    filas.append(("H", f"Hospital público {f['hospital_pub']}", MZ.COL_HOSP_PUB))
    filas.append(("H", f"Privado {f['hospital_priv']}", MZ.COL_HOSP_PRIV))
    aero = str(f["aeropuertos"]).split(";")[0].strip()
    filas.append(("✈", f"{aero} · mejor a Palma: {f['palma_mejor_opcion']}", MZ.COL_AERO))
    filas.append(("✓", f"Servicios {int(f['servicios_1_10'])}/10 · fibra {str(f['fibra']).lower()} · comunicaciones {int(f['comunicaciones_1_10'])}/10 · coche {int(f['dependencia_coche_1_10'])}/10", "#2e7d32"))
    nota = str(f["servicios_nota"]).strip()
    if nota and nota.lower() != "nan":
        filas.append(("", nota, "#555"))
    fr = "A" if str(f["franja"]).startswith("A") else "B"
    filas.append(("€", f"{_num(f['precio_m2_eur'])} €/m² · 2 hab. franja {fr} {_num(f[f'{fr}_2hab_eur'])} € · 3 hab. {_num(f[f'{fr}_3hab_eur'])} € · obra nueva {str(f['obra_nueva']).lower()}", "#0b3d5c"))
    partes = []
    etiquetas = {"playa": ("playa con nombre", "playas con nombre"), "farmacia": ("farmacia", "farmacias"),
                 "supermercado": ("supermercado", "supermercados"), "salud": ("centro de salud", "centros de salud"),
                 "hospital": ("hospital", "hospitales"), "tren": ("estación de tren", "estaciones de tren"),
                 "puerto": ("puerto o embarcadero", "puertos o embarcaderos"), "mirador": ("mirador", "miradores"),
                 "golf": ("campo de golf", "campos de golf"), "termas": ("termas", "termas"), "mercado": ("mercado", "mercados"),
                 "museo": ("museo", "museos")}
    for k in ("playa", "puerto", "tren", "salud", "hospital", "farmacia", "supermercado", "mercado", "mirador", "museo", "golf", "termas"):
        if conteo.get(k):
            n = conteo[k]
            partes.append(f"{n} {etiquetas[k][0] if n == 1 else etiquetas[k][1]}")
    for k, txt in (("tren", "sin tren"), ("puerto", "sin puerto"), ("salud", "sin centro de salud")):
        if not conteo.get(k):
            partes.append(txt)
    filas.append(("◎", "En el término (OSM): " + " · ".join(partes) + ".", "#555"))

    import textwrap

    # Espaciado adaptativo: todas las filas deben caber entre y=0.87 y y=0.0.
    preparadas = []
    for icono, texto, color in filas:
        if icono.startswith("barra"):
            preparadas.append((icono, None, None, 2.0))
        else:
            lineas = textwrap.wrap(texto, 66)
            preparadas.append((icono, lineas, color, 1.0 + 0.72 * (len(lineas) - 1)))
    total = sum(u for *_, u in preparadas)
    unidad = min(0.052, 0.87 / total)
    y = 0.87
    for icono, lineas, color, unidades in preparadas:
        if icono == "barra_sol":
            _barra(ax, y - 0.004, float(f["sol_horas_anio"]), MANCOR["sol"], 3000, "#f2b52d", "Mancor 2.800 h")
        elif icono == "barra_lluvia":
            _barra(ax, y - 0.004, float(f["lluvia_dias_anio"]), MANCOR["lluvia_dias"], 200, "#64b5f6", "Mancor 58 días")
        else:
            ax.text(0.0, y, icono, fontsize=6.2, color=color, va="top", ha="left", fontweight="bold", transform=ax.transAxes)
            for i, l in enumerate(lineas):
                ax.text(0.05, y - i * unidad * 0.72, l, fontsize=5.4, color="#222" if icono != "" else "#555", va="top",
                        transform=ax.transAxes)
        y -= unidades * unidad


def _leyenda(ax):
    ax.axis("off")
    filas = [
        (Line2D([], [], marker="o", color="w", markerfacecolor="#2e9e44", markeredgecolor="black", markersize=6), "Municipio (nº de fila)"),
        (Rectangle((0, 0), 1, 1, facecolor="#fff1bf", edgecolor="#c79a1a", linewidth=0.7), "Término municipal"),
        (Line2D([], [], marker="o", color="w", markerfacecolor="#333", markersize=3), "Pueblo, parroquia o barrio"),
        (Line2D([], [], marker="v", color="w", markerfacecolor=MZ.COL_PLAYA, markersize=5), "Playa"),
        (Line2D([], [], marker="s", color="w", markerfacecolor="#0d47a1", markersize=5), "Puerto o embarcadero"),
        (Line2D([], [], marker="s", color="w", markerfacecolor="#212121", markersize=5), "Estación de tren"),
        (Line2D([], [], marker="s", color="w", markerfacecolor=MZ.COL_HOSP_PUB, markersize=5), "Centro de salud / hospital"),
        (Line2D([], [], marker="P", color="w", markerfacecolor="#2e7d32", markersize=4), "Farmacia"),
        (Line2D([], [], marker="s", color="w", markerfacecolor="#ef6c00", markersize=3.5), "Supermercado"),
        (Line2D([], [], marker="D", color="w", markerfacecolor="#ef6c00", markersize=4), "Mercado"),
        (Line2D([], [], marker="^", color="w", markerfacecolor="white", markeredgecolor=MZ.COL_MONTE, markersize=5), "Mirador"),
        (Line2D([], [], marker="^", color="w", markerfacecolor=MZ.COL_MONTE, markersize=5), "Monte o cima"),
        (Line2D([], [], marker="*", color="w", markerfacecolor="#6d4c41", markersize=6), "Monumento (castro, castillo, monasterio…)"),
        (Line2D([], [], marker="D", color="w", markerfacecolor="#6d4c41", markersize=3.5), "Museo"),
        (Line2D([], [], marker="D", color="w", markerfacecolor=MZ.COL_PASEO, markersize=4), "Paseo o ruta"),
        (Line2D([], [], marker="P", color="w", markerfacecolor="#00897b", markersize=5), "Golf"),
        (Line2D([], [], marker="h", color="w", markerfacecolor=MZ.COL_BALNEARIO, markersize=5), "Termas / balneario"),
        (Line2D([], [], color=MZ.COL_AUTOPISTA, linewidth=1.5), "Autopista / autovía"),
        (Line2D([], [], color="#e0973a", linewidth=1.0), "Carretera principal"),
        (Line2D([], [], color="#424242", linewidth=0.7, linestyle=(0, (3, 2))), "Ferrocarril"),
    ]
    leg = ax.legend([a for a, _ in filas], [b for _, b in filas], loc="upper center", ncol=5, fontsize=4.8, frameon=False,
                    handlelength=1.4, columnspacing=0.9, handletextpad=0.4, borderaxespad=0)
    for t in leg.get_texts():
        t.set_color("#333")
    ax.text(0.5, 0.02, "Fondo: límites municipales GADM 4.1 · elementos: © colaboradores de OpenStreetMap (ODbL) · datos de la ficha: tabla maestra MAPA 2.0",
            fontsize=3.8, color="#888", ha="center", va="bottom", transform=ax.transAxes)


def mapa_municipio(f: pd.Series, destino: Path) -> Path:
    poligono = _poligono(f)
    if poligono is None:
        raise RuntimeError(f"Sin término municipal para {f['municipio']}")
    datos = osm.descargar(f["municipio"], f["lat"], f["lon"], f["pais"])
    minx, miny, maxx, maxy = poligono.bounds
    dx, dy = max(maxx - minx, 0.08), max(maxy - miny, 0.06)
    bbox = (minx - dx * 0.12, miny - dy * 0.12, maxx + dx * 0.12, maxy + dy * 0.12)

    fig = plt.figure(figsize=(ANCHO_IN, ALTO_IN), dpi=PPP)
    ax = fig.add_axes([0.005, 0.20, 0.55, 0.79])
    bbox = MZ._ajustar_bbox(bbox, 0.55 * ANCHO_IN, 0.79 * ALTO_IN)
    ax.set_facecolor(MZ.COL_MAR)
    _vecinos(ax, bbox, poligono)
    ax.set_xlim(bbox[0], bbox[2])
    ax.set_ylim(bbox[1], bbox[3])
    ax.set_aspect(1 / math.cos(math.radians((bbox[1] + bbox[3]) / 2)))
    _vias(ax, datos, bbox)
    et = Etiquetador(fig, ax)
    _municipio(ax, f, et)
    _puntos(ax, datos, bbox, f, poligono, et)
    _escala(ax, bbox)
    ax.set_xticks([])
    ax.set_yticks([])
    for lado in ax.spines.values():
        lado.set_edgecolor("#777")
        lado.set_linewidth(0.6)

    ax_f = fig.add_axes([0.575, 0.20, 0.42, 0.79])
    _ficha(ax_f, f, _conteo(datos, poligono, f["municipio"]))
    ax_l = fig.add_axes([0.0, 0.0, 1.0, 0.19])
    _leyenda(ax_l)
    destino.parent.mkdir(parents=True, exist_ok=True)
    fig.savefig(destino, dpi=PPP, facecolor="white")
    plt.close(fig)
    return destino


def nombre_fichero(f: pd.Series) -> str:
    return f"{int(f['n']):02d}_{osm.slug(f['municipio'])}.png"


def generar(nombres: list[str] | None = None) -> list[Path]:
    df = pd.read_csv(E.CSV_MAESTRO, sep=";", encoding="utf-8")
    if nombres:
        df = df[df["municipio"].isin(nombres)]
    salidas = []
    for _, f in df.iterrows():
        salidas.append(mapa_municipio(f, DIR_SALIDA / nombre_fichero(f)))
        print(f"  {salidas[-1].relative_to(RAIZ)}")
    return salidas


if __name__ == "__main__":
    generar(sys.argv[1:] or None)
