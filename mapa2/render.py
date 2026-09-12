"""Genera las tres hojas de MAPA 2.0 a partir del CSV validado.

    output/mapa_2_0_mapa.png    Hoja 1: mapa numerado, leyenda, zonas, ficha de búsqueda, aeropuertos-Palma y resumen Portugal
    output/mapa_2_0_tabla.png   Hoja 2: tabla maestra (83 municipios, columnas de decisión)
    output/mapa_2_0_tabla2.png  Hoja 3: tabla 2, comparativa frente al mejor, Palma, presupuesto, sobreprecios y detalle

Uso:
    python -m mapa2.render              # escribe las tres hojas en PNG
    python -m mapa2.render --pdf        # además, un PDF vectorial por hoja y output/mapa_2_0_completo.pdf (3 páginas)
    python -m mapa2.render --solo mapa|tabla|tabla2
    python -m mapa2.render --dpi 90     # versión más ligera
"""
from __future__ import annotations

import argparse
import sys
import textwrap

import geopandas as gpd
import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt  # noqa: E402
from matplotlib.patches import FancyBboxPatch, Rectangle  # noqa: E402

from . import esquema as E  # noqa: E402
from .validar import cargar, validar  # noqa: E402

AZUL = "#1f3c68"
GRIS = "#5b6472"
TINTA = "#22262c"
MAR = "#d6e9f5"
FONDO = "#f6f8fb"
VERDE = "#2e9e44"
VERDE_CLARO = "#8fc43f"
AMBAR = "#e2a72e"
ROJO = "#d9542b"
DESTACADO = "#dff3e3"   # fondo de celda para hospital ≤ 30 min / aeropuerto ≤ 60 min

COLOR_PROVINCIA = {
    "Pontevedra": "#f6e6a3", "La Coruña": "#efe4bf", "Orense": "#efe4bf", "Lugo": "#f4d78a",
    "Asturias": "#cfe4b5", "Cantabria": "#d8cfe9", "Viana do Castelo": "#f7d2ad", "Braga": "#f3dcc4",
    "Porto": "#f3dcc4", "Bizkaia": "#e6e6e6",
}
CIUDADES = [
    ("Santiago", 42.880, -8.545), ("Lugo", 43.010, -7.556), ("Ourense", 42.336, -7.864), ("Oviedo", 43.362, -5.849),
    ("Bilbao", 43.263, -2.935), ("Porto", 41.158, -8.629), ("Braga", 41.551, -8.428),
]
EXTENSION = (-10.2, -2.7, 41.1, 44.3)  # lon_min, lon_max, lat_min, lat_max
ASPECTO = 1.36
ANCHO_MAPA_IN = 19.4
ALTO_MAPA_IN = ANCHO_MAPA_IN * (EXTENSION[3] - EXTENSION[2]) * ASPECTO / (EXTENSION[1] - EXTENSION[0])

# Raíles de etiquetas: los círculos numerados se alinean fuera de la costa y una línea los une con su ubicación real.
RAILES_NORTE = (44.03, 44.20)     # latitudes; para municipios con lat ≥ LAT_NORTE
RAILES_OESTE = (-9.5, -9.82)      # longitudes; costa atlántica gallega y portuguesa
RAIL_ESTE = -7.9                  # longitud; municipios interiores (franja B del Miño, ría de Vigo, Pontevedra)
LAT_NORTE = 43.2
LON_INTERIOR = -8.66
PASO_LAT, PASO_LON = 0.105, 0.14
TAM_BADGE = 430


def _vacio(v) -> bool:
    return v is None or v != v or (isinstance(v, str) and not v.strip())


def fmt_eur(v) -> str:
    return "—" if _vacio(v) else f"{int(v):,} €".replace(",", ".")


def fmt_int(v) -> str:
    return "—" if _vacio(v) else f"{int(v)}"


def color_escala(v: float, invertir: bool = False) -> str:
    x = 11 - v if invertir else v
    if x >= 7:
        return VERDE
    if x >= 4:
        return AMBAR
    return ROJO


def envolver(texto: str, ancho_in: float, fontsize: float) -> list[str]:
    if _vacio(texto):
        return ["—"]
    chars = max(6, int(ancho_in / (fontsize * 0.0079)))
    return textwrap.wrap(str(texto), width=chars) or ["—"]


def envolver_lista(texto: str, ancho_in: float, fontsize: float) -> list[str]:
    """Texto con elementos separados por «;»: cada elemento empieza en su propia línea."""
    if _vacio(texto):
        return ["—"]
    lineas = []
    for parte in str(texto).split(";"):
        lineas += envolver(parte.strip(), ancho_in, fontsize)
    return lineas


def distribuir(objetivos: list[float], paso: float, lo: float, hi: float) -> list[float]:
    """Separa valores ordenados al menos «paso», manteniéndolos cerca de su objetivo y dentro de [lo, hi]."""
    pos = list(objetivos)
    if not pos:
        return pos
    for i in range(1, len(pos)):
        pos[i] = max(pos[i], pos[i - 1] + paso)
    exceso = pos[-1] - hi
    if exceso > 0:
        pos = [p - exceso for p in pos]
    for i in range(len(pos) - 2, -1, -1):
        pos[i] = min(pos[i], pos[i + 1] - paso)
    if pos[0] < lo:
        d = lo - pos[0]
        pos = [p + d for p in pos]
        for i in range(1, len(pos)):
            pos[i] = max(pos[i], pos[i - 1] + paso)
    return pos


def posiciones_etiquetas(df) -> dict[int, tuple[float, float]]:
    lon0, lon1, lat0, lat1 = EXTENSION
    norte, oeste, este = [], [], []
    for _, f in df.iterrows():
        t = (int(f["n"]), float(f["lat"]), float(f["lon"]))
        if t[1] >= LAT_NORTE:
            norte.append(t)
        elif t[2] > LON_INTERIOR:
            este.append(t)
        else:
            oeste.append(t)
    pos = {}
    norte.sort(key=lambda t: t[2])
    for k, rail in enumerate(RAILES_NORTE):
        sub = norte[k::2]
        xs = distribuir([t[2] for t in sub], PASO_LON, lon0 + 0.3, lon1 - 0.25)
        for t, x in zip(sub, xs):
            pos[t[0]] = (x, rail)
    oeste.sort(key=lambda t: t[1])
    for k, rail in enumerate(RAILES_OESTE):
        sub = oeste[k::2]
        ys = distribuir([t[1] for t in sub], PASO_LAT, lat0 + 0.2, LAT_NORTE + 0.15)
        for t, y in zip(sub, ys):
            pos[t[0]] = (rail, y)
    este.sort(key=lambda t: t[1])
    ys = distribuir([t[1] for t in este], PASO_LAT, lat0 + 0.3, 43.0)
    for t, y in zip(este, ys):
        pos[t[0]] = (RAIL_ESTE, y)
    return pos


def destacado(f) -> bool:
    return int(f["hospital_min"]) <= E.HOSPITAL_DESEABLE_MIN and int(f["aeropuerto_min"]) <= E.AEROPUERTO_DESEABLE_MIN


# ----------------------------------------------------------------------------- hoja 1: mapa

def dibujar_mapa(ax, df):
    lon0, lon1, lat0, lat1 = EXTENSION
    ax.set_facecolor(MAR)
    prov = gpd.read_file(E.DIR_GEO / "provincias_norte.geojson")
    for _, p in prov.iterrows():
        gpd.GeoSeries([p.geometry]).plot(ax=ax, color=COLOR_PROVINCIA.get(p["name"], "#ececec"), edgecolor="white", linewidth=0.9)
    paises = gpd.read_file(E.DIR_GEO / "paises_norte.geojson")
    paises.boundary.plot(ax=ax, color="#7d8590", linewidth=1.3)

    ax.text(-7.9, 42.85, "GALICIA", fontsize=26, weight="bold", color="#6b5d1e", ha="center", alpha=0.8)
    ax.text(-6.0, 43.12, "ASTURIAS", fontsize=26, weight="bold", color="#3f6b2c", ha="center", alpha=0.8)
    ax.text(-4.05, 43.15, "CANTABRIA", fontsize=24, weight="bold", color="#5a4a80", ha="center", alpha=0.8)
    ax.text(-8.2, 41.35, "PORTUGAL", fontsize=24, weight="bold", color="#8a4f1f", ha="center", alpha=0.8)
    ax.text(-5.3, 43.82, "Mar Cantábrico", fontsize=18, style="italic", color="#3f6f9c", ha="center")
    ax.text(-9.15, 43.55, "Océano\nAtlántico", fontsize=18, style="italic", color="#3f6f9c", ha="center")

    for nombre, lat, lon in CIUDADES:
        ax.plot(lon, lat, marker="s", ms=7, color="#2b2f36", zorder=5)
        ax.text(lon + 0.05, lat + 0.02, nombre, fontsize=12, color="#2b2f36", zorder=5)
    for h in E.HOSPITALES.values():
        if h.tipo == "Púb":
            ax.plot(h.lon, h.lat, marker="P", ms=12, color="#d9302e", mec="white", mew=1.1, zorder=6)
        else:
            ax.plot(h.lon, h.lat, marker="P", ms=9, color="#8a3fa0", mec="white", mew=1.0, zorder=6)
    for a in E.AEROPUERTOS.values():
        ax.text(a.lon, a.lat, "✈", fontsize=21, color=AZUL, ha="center", va="center", zorder=6)
        ax.text(a.lon, a.lat - 0.085, f"{a.nombre} · Palma: {a.palma.lower()}", fontsize=9.5, color=AZUL, ha="center", va="top", zorder=6,
                bbox=dict(boxstyle="round,pad=0.15", facecolor="white", edgecolor="none", alpha=0.75))

    pos = posiciones_etiquetas(df)
    for _, f in df.iterrows():
        n = int(f["n"])
        lon, lat = float(f["lon"]), float(f["lat"])
        elon, elat = pos[n]
        color = E.COLOR_CLASE[f["clase_clima"]]
        ax.plot([lon, elon], [lat, elat], color="#4a4f57", linewidth=0.75, zorder=7, alpha=0.75)
        ax.plot(lon, lat, marker="o", ms=5, color=TINTA, mec="white", mew=0.7, zorder=8)
        borde = "#111111" if destacado(f) else "white"
        ax.scatter([elon], [elat], s=TAM_BADGE, color=color, edgecolor=borde, linewidth=1.6 if borde == "white" else 2.2, zorder=9)
        ax.text(elon, elat, str(n), fontsize=9.5, weight="bold", color="white", ha="center", va="center", zorder=10)

    ax.set_xlim(lon0, lon1)
    ax.set_ylim(lat0, lat1)
    ax.set_aspect(ASPECTO)
    ax.set_xticks([])
    ax.set_yticks([])
    for s in ax.spines.values():
        s.set_edgecolor("#9aa4b1")

    # Escala gráfica (100 km ≈ 1,23° de longitud a 43° N)
    x0, y0 = -3.55, 41.27
    for i, km in enumerate((0, 25, 50, 75, 100)):
        x = x0 + km / 100 * 1.23
        if i < 4:
            ax.add_patch(Rectangle((x, y0), 0.3075, 0.05, facecolor="black" if i % 2 == 0 else "white", edgecolor="black", zorder=9))
        ax.text(x, y0 + 0.08, f"{km}" + (" km" if km == 100 else ""), fontsize=11, ha="center")


class Panel:
    """Dibujo en pulgadas dentro de un eje: x desde la izquierda, y desde arriba."""

    def __init__(self, ax, ancho: float, alto: float, titulo: str | None = None):
        self.ax, self.ancho, self.alto = ax, ancho, alto
        ax.set_xlim(0, ancho)
        ax.set_ylim(alto, 0)
        ax.axis("off")
        ax.add_patch(FancyBboxPatch((0.08, 0.08), ancho - 0.16, alto - 0.16, boxstyle="round,pad=0.02,rounding_size=0.25",
                                    facecolor="white", edgecolor="#c8d0da", linewidth=1.3))
        self.x0 = 0.42
        self.y = 0.62
        if titulo:
            self.titulo(titulo)

    def titulo(self, texto: str, fontsize: float = 17):
        self.ax.text(self.x0, self.y, texto, fontsize=fontsize, weight="bold", color=AZUL, va="center")
        self.y += 0.62

    def subtitulo(self, texto: str):
        self.y += 0.1
        self.ax.text(self.x0, self.y, texto, fontsize=13.5, weight="bold", color=AZUL, va="center")
        self.y += 0.45

    def parrafo(self, etiqueta: str | None, texto: str, fontsize: float = 11.5, sangria: float = 0.0, paso: float = 0.27):
        ancho = self.ancho - self.x0 - 0.35 - sangria
        if etiqueta:
            full = f"{etiqueta}: {texto}"
            lineas = envolver(full, ancho, fontsize)
            primera = lineas[0]
            corte = len(etiqueta) + 1
            t = self.ax.text(self.x0 + sangria, self.y, primera[:corte], fontsize=fontsize, weight="bold", color=TINTA, va="center")
            # el resto de la primera línea se dibuja a continuación de la etiqueta, midiendo su anchura real
            bb = t.get_window_extent(renderer=self.ax.figure.canvas.get_renderer())
            x_fin = self.ax.transData.inverted().transform((bb.x1, bb.y0))[0]
            self.ax.text(x_fin + 0.05, self.y, primera[corte:].lstrip(), fontsize=fontsize, color=TINTA, va="center")
            self.y += paso
            for linea in lineas[1:]:
                self.ax.text(self.x0 + sangria, self.y, linea, fontsize=fontsize, color=TINTA, va="center")
                self.y += paso
        else:
            for linea in envolver(texto, ancho, fontsize):
                self.ax.text(self.x0 + sangria, self.y, linea, fontsize=fontsize, color=TINTA, va="center")
                self.y += paso
        self.y += 0.08


def altura_parrafos(items: list[tuple[str, str]], ancho_panel: float, fontsize: float = 11.5, paso: float = 0.27) -> float:
    ancho = ancho_panel - 0.42 - 0.35
    total = 0.0
    for etiqueta, texto in items:
        total += paso * len(envolver(f"{etiqueta}: {texto}", ancho, fontsize)) + 0.08
    return total


def dibujar_leyenda(ax, df, ancho: float, alto: float):
    p = Panel(ax, ancho, alto, "LEYENDA DEL MAPA")
    xi, xt = p.x0 + 0.42, p.x0 + 0.95
    for nombre, regla, color in E.CLASES_CLIMA:
        n_mun = int((df["clase_clima"] == nombre).sum())
        ax.scatter([xi], [p.y + 0.1], s=430, color=color, edgecolor="white", linewidth=1.5, zorder=3)
        ax.text(xt, p.y, f"{nombre}  ({n_mun} municipios)", fontsize=13.5, weight="bold", color=TINTA, va="center")
        ax.text(xt, p.y + 0.28, regla, fontsize=11, color=GRIS, va="center")
        p.y += 0.64
    ax.scatter([xi], [p.y], s=430, color="#b9bfc7", edgecolor="#111111", linewidth=2.2, zorder=3)
    n_dest = int(sum(destacado(f) for _, f in df.iterrows()))
    ax.text(xt, p.y, f"Borde negro = hospital ≤ {E.HOSPITAL_DESEABLE_MIN} min y aeropuerto ≤ {E.AEROPUERTO_DESEABLE_MIN} min ({n_dest} municipios)",
            fontsize=12, weight="bold", color=TINTA, va="center")
    p.y += 0.42
    ax.plot(xi, p.y, marker="P", ms=13, color="#d9302e", mec="white", mew=1.1)
    ax.text(xt, p.y, f"Hospital público con urgencias ({sum(h.tipo == 'Púb' for h in E.HOSPITALES.values())})", fontsize=12.5, color=TINTA, va="center")
    p.y += 0.36
    ax.plot(xi, p.y, marker="P", ms=10, color="#8a3fa0", mec="white", mew=1.0)
    ax.text(xt, p.y, f"Hospital privado con urgencias ({sum(h.tipo == 'Priv' for h in E.HOSPITALES.values())})", fontsize=12.5, color=TINTA, va="center")
    p.y += 0.36
    ax.text(xi, p.y, "✈", fontsize=19, color=AZUL, ha="center", va="center")
    ax.text(xt, p.y, f"Aeropuerto ({len(E.AEROPUERTOS)}) y situación del vuelo directo a Palma", fontsize=12.5, color=TINTA, va="center")
    p.y += 0.36
    ax.plot(xi, p.y, marker="s", ms=8, color=TINTA)
    ax.text(xt, p.y, "Ciudad de referencia", fontsize=12.5, color=TINTA, va="center")
    p.y += 0.36
    ax.plot(xi, p.y, marker="o", ms=6, color=TINTA, mec="white")
    ax.text(xt, p.y, "Ubicación real del núcleo; la línea lo une con su círculo numerado (Nº de la tabla)", fontsize=12, color=GRIS, va="center")
    p.y += 0.55

    p.subtitulo("ZONAS (Nº de la tabla · provincia · municipios)")
    num = dict(zip(df["municipio"], df["n"].astype(int)))
    mitad = (len(E.ZONAS) + 1) // 2
    ancho_col = (ancho - 2 * p.x0) / 2
    y_ini = p.y
    for k, (zona, prov, muns) in enumerate(E.ZONAS):
        col, fila = divmod(k, mitad)
        x, y = p.x0 + col * ancho_col, y_ini + fila * 0.47
        ns = [num[m] for m in muns]
        ax.text(x, y, f"{ns[0]}-{ns[-1]}", fontsize=12, weight="bold", color=AZUL, va="center")
        ax.text(x + 0.7, y, zona, fontsize=12, weight="bold", color=TINTA, va="center")
        ax.text(x + 0.7, y + 0.24, f"{prov} · {len(muns)} municipios", fontsize=10.5, color=GRIS, va="center")
    p.y = y_ini + mitad * 0.47 + 0.1
    cuenta = df["origen"].value_counts()
    p.parrafo(None, "Origen de los municipios: " + " · ".join(f"{o} ({int(cuenta.get(o, 0))})" for o in E.ORIGEN)
                    + ". Ampliación = añadidos en esta versión por cumplir la ficha.", fontsize=10.5, paso=0.25)


def dibujar_ficha(ax, ancho: float, alto: float):
    p = Panel(ax, ancho, alto, "FICHA DE BÚSQUEDA (criterios acordados)")
    for etiqueta, texto in E.FICHA_BUSQUEDA.items():
        p.parrafo(etiqueta, texto)


def dibujar_portugal(ax, ancho: float, alto: float):
    p = Panel(ax, ancho, alto, "COMPRAR EN PORTUGAL · mini resumen")
    for etiqueta, texto in E.RESUMEN_PORTUGAL:
        p.parrafo(etiqueta, texto)


def dibujar_aeropuertos(ax, ancho: float, alto: float):
    p = Panel(ax, ancho, alto, "AEROPUERTOS Y VUELO DIRECTO A PALMA")
    color_palma = {"Todo el año": VERDE, "Casi todo el año": VERDE_CLARO, "Verano": AMBAR, "No": ROJO}
    for a in sorted(E.AEROPUERTOS.values(), key=lambda a: (E.ORDEN_PALMA[a.palma], a.nombre)):
        ax.add_patch(FancyBboxPatch((p.x0, p.y - 0.14), 1.55, 0.28, boxstyle="round,pad=0.01,rounding_size=0.06",
                                    facecolor=color_palma[a.palma], edgecolor="none"))
        ax.text(p.x0 + 0.775, p.y, a.palma, fontsize=10, weight="bold", color="white", ha="center", va="center")
        ax.text(p.x0 + 1.7, p.y, f"{a.nombre} ({a.codigo})", fontsize=12.5, weight="bold", color=TINTA, va="center")
        p.y += 0.28
        for linea in envolver(a.palma_detalle, ancho - p.x0 - 2.0, 10.5):
            ax.text(p.x0 + 1.7, p.y, linea, fontsize=10.5, color=GRIS, va="center")
            p.y += 0.24
        p.y += 0.14
    p.y += 0.05
    p.parrafo(None, "Horarios publicados en 2026; las temporadas cambian cada año y conviene comprobarlas antes de decidir. "
                    "En la tabla, «Mejor opción Palma» elige primero el aeropuerto con conexión anual y, entre ellos, el más cercano.", fontsize=10.5, paso=0.25)


def figura_mapa(df, dpi: int):
    margen, hueco = 0.45, 0.4
    ancho_ley = 10.4
    ancho_fig = margen * 2 + ANCHO_MAPA_IN + hueco + ancho_ley
    alto_titulo = 1.75

    # Paneles inferiores: ficha, aeropuertos-Palma y Portugal
    ancho_util = ancho_fig - 2 * margen - 2 * hueco
    w_ficha, w_aero = ancho_util * 0.40, ancho_util * 0.24
    w_pt = ancho_util - w_ficha - w_aero
    h_ficha = 1.0 + altura_parrafos(list(E.FICHA_BUSQUEDA.items()), w_ficha)
    h_pt = 1.0 + altura_parrafos(E.RESUMEN_PORTUGAL, w_pt)
    h_aero = 1.0 + sum(0.28 + 0.24 * len(envolver(a.palma_detalle, w_aero - 2.42, 10.5)) + 0.14 for a in E.AEROPUERTOS.values()) + 0.9
    alto_inferior = max(h_ficha, h_pt, h_aero) + 0.2
    alto_pie = 0.75
    alto_fig = alto_titulo + ALTO_MAPA_IN + hueco + alto_inferior + alto_pie

    fig = plt.figure(figsize=(ancho_fig, alto_fig), dpi=dpi, facecolor=FONDO)

    def ejes(x_in, y_top_in, w_in, h_in):
        return fig.add_axes([x_in / ancho_fig, 1 - (y_top_in + h_in) / alto_fig, w_in / ancho_fig, h_in / alto_fig])

    fig.text(margen / ancho_fig, 1 - 0.5 / alto_fig, "MAPA 2.0", fontsize=42, weight="bold", color=AZUL, va="center")
    fig.text((margen + 4.7) / ancho_fig, 1 - 0.5 / alto_fig,
             f"{len(df)} MUNICIPIOS DEL NORTE DE ESPAÑA Y NORTE DE PORTUGAL A ≤ 30 MIN DE UNA PLAYA DE BAÑO",
             fontsize=25, weight="bold", color=TINTA, va="center")
    fig.text(margen / ancho_fig, 1 - 1.2 / alto_fig,
             "Hoja 1 · Mapa numerado por zonas, ficha de búsqueda, aeropuertos con vuelo a Palma y resumen para comprar en Portugal  ·  "
             "Hoja 2 · Tabla maestra  ·  Hoja 3 · Tabla 2: comparativa, Palma, presupuesto, sobreprecios y detalle", fontsize=16, color=GRIS, va="center")
    fig.text(1 - margen / ancho_fig, 1 - 0.5 / alto_fig, f"{len(E.ZONAS)} zonas · {len(df)} municipios · {len(E.COLUMNAS)} columnas",
             fontsize=15, color=GRIS, va="center", ha="right")
    fig.text(1 - margen / ancho_fig, 1 - 1.2 / alto_fig, "Sin rankings: los colores solo aplican umbrales fijos documentados en el esquema",
             fontsize=15, color=GRIS, va="center", ha="right")

    dibujar_mapa(ejes(margen, alto_titulo, ANCHO_MAPA_IN, ALTO_MAPA_IN), df)
    dibujar_leyenda(ejes(margen + ANCHO_MAPA_IN + hueco, alto_titulo, ancho_ley, ALTO_MAPA_IN), df, ancho_ley, ALTO_MAPA_IN)

    y_inf = alto_titulo + ALTO_MAPA_IN + hueco
    dibujar_ficha(ejes(margen, y_inf, w_ficha, alto_inferior), w_ficha, alto_inferior)
    dibujar_aeropuertos(ejes(margen + w_ficha + hueco, y_inf, w_aero, alto_inferior), w_aero, alto_inferior)
    dibujar_portugal(ejes(margen + w_ficha + hueco + w_aero + hueco, y_inf, w_pt, alto_inferior), w_pt, alto_inferior)

    fig.text(margen / ancho_fig, 0.35 / alto_fig,
             "Cartografía: Natural Earth 10m. Clima: normales AEMET 1991-2020 / IPMA 1981-2010 de la estación más próxima. "
             "Tiempos en coche sin tráfico. Hospitales con urgencias 24 h, públicos y privados. Vuelos: horarios publicados 2026.",
             fontsize=10.5, color=GRIS, va="center")
    fig.text(1 - margen / ancho_fig, 0.35 / alto_fig, "MAPA 2.0 · hoja 1 de 3 · base de datos validada fila a fila (mapa2/validar.py)",
             fontsize=10.5, color=GRIS, va="center", ha="right")

    return fig


# ----------------------------------------------------------------------------- hojas 2 y 3: tablas

# (columna, cabecera, ancho en pulgadas, alineación, formato)
TABLA = [
    ("n", "Nº", 0.5, "center", "badge"),
    ("municipio", "Municipio", 1.3, "left", "bold_wrap"),
    ("sol_horas_anio", "Sol\n(h/año · d)", 1.3, "center", "sol"),
    ("dias_despejados", "Días\ndespej.", 0.7, "center", "int"),
    ("dias_cubiertos", "Días\ncubiertos", 0.75, "center", "int"),
    ("lluvia_dias_anio", "Lluvia\n(días)", 0.7, "center", "int"),
    ("lluvia_mm_anio", "Lluvia\n(mm)", 0.7, "center", "int"),
    ("temp_verano_c", "Temp.\nver. / inv.", 1.15, "center", "temp"),
    ("humedad_pct", "Hum.\n(%)", 0.65, "center", "pct"),
    ("viento", "Viento", 0.75, "center", "nivel"),
    ("niebla", "Niebla", 0.75, "center", "nivel"),
    ("min_costa", "Costa abierta\nfranja · min coche", 1.25, "center", "costa"),
    ("playa_bano", "Playa de baño\n(agua tranquila y apta)", 2.2, "left", "txt_s"),
    ("min_bano", "Baño\nmin coche", 0.75, "center", "int"),
    ("temp_agua_verano", "Agua\n°C jul-ago", 0.8, "center", "txt"),
    ("servicios_1_10", "Servicios\n(1-10)", 0.8, "center", "escala"),
    ("servicios_nota", "Servicios: qué falta / qué añade", 3.3, "left", "txt_s"),
    ("fibra", "Fibra", 0.7, "center", "fibra"),
    ("comunicaciones_1_10", "Comunic.\n(1-10)", 0.8, "center", "escala"),
    ("hospital_pub", "Hospital público\nkm · min coche", 1.9, "left", "hosp"),
    ("hospital_priv", "Hospital privado\nkm · min coche", 1.9, "left", "hosp_priv"),
    ("aeropuertos", "Aeropuertos ≤ 2 h\nkm · min · vuelo a Palma", 3.45, "left", "aero"),
    ("precio_m2_eur", "Precio\n€/m²", 0.85, "center", "eur"),
    ("A_2hab_eur", "A · 2 hab\n65 m²", 1.05, "center", "eur"),
    ("A_3hab_eur", "A · 3 hab\n90 m²", 1.05, "center", "eur"),
    ("B_2hab_eur", "B · 2 hab\n65 m²", 1.05, "center", "eur"),
    ("B_3hab_eur", "B · 3 hab\n90 m²", 1.05, "center", "eur"),
    ("obra_nueva", "Obra\nnueva", 0.7, "center", "obra"),
    ("facilidad_venta_1_10", "Facilidad\nventa", 0.8, "center", "escala"),
    ("revalorizacion_1_10", "Revaloriz.\nesperada", 0.85, "center", "escala"),
    ("dependencia_coche_1_10", "Depend.\ncoche", 0.8, "center", "escala_inv"),
    ("debilidad_principal", "Puntos débiles y observaciones", 6.6, "left", "txt_s"),
]
BLOQUES = [
    ("IDENTIFICACIÓN", "n", "municipio", "#3d5a8a"),
    ("CLIMA", "sol_horas_anio", "niebla", "#2f7fb5"),
    ("MAR", "min_costa", "temp_agua_verano", "#2a8f8f"),
    ("SERVICIOS", "servicios_1_10", "comunicaciones_1_10", "#3b8c5a"),
    ("SANIDAD", "hospital_pub", "hospital_priv", "#b03a3a"),
    ("AEROPUERTOS", "aeropuertos", "aeropuertos", "#4b5fa8"),
    ("MERCADO  (A ≤ 5 min costa · B 5-30 min)", "precio_m2_eur", "obra_nueva", "#b0662b"),
    ("INVERSIÓN", "facilidad_venta_1_10", "revalorizacion_1_10", "#a83c3c"),
    ("OPERATIVA", "dependencia_coche_1_10", "debilidad_principal", "#5b6472"),
]

# Tabla 2: comparativa frente al mejor, Palma, presupuesto, sobreprecios y detalle
TABLA2 = [
    ("n", "Nº", 0.5, "center", "badge"),
    ("municipio", "Municipio", 1.6, "left", "bold_wrap"),
    ("provincia", "Provincia /\ndistrito", 1.3, "left", "txt"),
    ("origen", "Origen", 1.0, "center", "txt_s"),
    ("clase_clima", "Clase clima", 1.6, "center", "clase"),
    ("d_sol", "Sol\nvs. mejor", 0.95, "center", "delta"),
    ("d_lluvia", "Lluvia\nvs. mejor", 0.95, "center", "delta"),
    ("d_hosp", "Hospital\nvs. mejor", 0.95, "center", "delta"),
    ("d_aero", "Aeropuerto\nvs. mejor", 1.0, "center", "delta"),
    ("palma_mas_cercano", "Palma desde el\naerop. más cercano", 1.45, "center", "palma"),
    ("palma_mejor_opcion", "Mejor opción Palma\n(conexión anual primero)", 2.3, "left", "txt_s"),
    ("producto_en_presupuesto", "Qué entra en\n260.000 €", 2.05, "center", "producto"),
    ("prima_terraza_pct", "+ Terraza", 0.8, "center", "prima"),
    ("prima_vistas_mar_pct", "+ Vistas\nmar", 0.8, "center", "prima"),
    ("prima_terraza_vistas_pct", "+ Terraza\n+ vistas", 0.85, "center", "prima"),
    ("comunicaciones", "Comunicaciones (detalle)", 3.0, "left", "txt_s"),
    ("hospitales", "Todos los hospitales con urgencias a ≤ 60 min\n[Púb] / [Priv] · km · min", 4.4, "left", "lista"),
]
BLOQUES2 = [
    ("IDENTIFICACIÓN", "n", "origen", "#3d5a8a"),
    ("COMPARADO CON EL MEJOR DE LA TABLA", "clase_clima", "d_aero", "#2f7fb5"),
    ("VUELO A PALMA", "palma_mas_cercano", "palma_mejor_opcion", "#4b5fa8"),
    ("PRESUPUESTO Y SOBREPRECIOS", "producto_en_presupuesto", "prima_terraza_vistas_pct", "#b0662b"),
    ("DETALLE", "comunicaciones", "hospitales", "#5b6472"),
]

FS_TXT, FS_S = 10.5, 8.6
PASO_LINEA_S = 0.155
ALTO_FILA_MIN = 0.48
ALTO_ZONA = 0.36
ALTO_CABECERA = 1.5
COLOR_NIVEL = {"Baja": VERDE, "Media": AMBAR, "Alta": ROJO}
COLOR_FIBRA = {"Sí": VERDE, "Parcial": AMBAR, "No": ROJO}
COLOR_OBRA = {"Sí": VERDE, "Poca": AMBAR, "No": ROJO}
COLOR_PALMA = {"Todo el año": VERDE, "Casi todo el año": VERDE_CLARO, "Verano": AMBAR, "No": ROJO}
COLOR_PRODUCTO = {"Sí, en ambas franjas": VERDE, "Sí en B; en A solo 2 hab": VERDE_CLARO, "Solo 2 hab": AMBAR, "Difícil": ROJO}
PALMA_CORTO = {"Todo el año": "todo el año", "Casi todo el año": "casi todo el año", "Verano": "solo verano", "No": "sin vuelo"}


def lineas_aero(v: str) -> list[str]:
    lineas = []
    for parte in str(v).split(";"):
        parte = parte.strip()
        nombre, resto = parte.split(" ", 1)
        km_min, palma = resto.split(" (Palma: ")
        lineas.append(f"{nombre} {km_min} · Palma {PALMA_CORTO.get(palma.rstrip(')').capitalize(), palma.rstrip(')'))}")
    return lineas


def lineas_celda(col: str, v, fmt: str, ancho_col: float) -> list[str]:
    ancho = ancho_col - 0.16
    if fmt == "lista":
        return envolver_lista(v, ancho, FS_S)
    if fmt == "txt_s":
        return envolver(v, ancho, FS_S)
    if fmt == "bold_wrap":
        return envolver(v, ancho, FS_TXT)
    if fmt == "aero":
        return lineas_aero(v)
    if fmt in ("hosp", "hosp_priv"):
        if _vacio(v):
            return ["—"]
        km_min, nombre = str(v).split(" · ", 1)[0] + " · " + str(v).split(" · ", 2)[1], str(v).split(" · ", 2)[2]
        return [km_min] + envolver(nombre, ancho, FS_S)
    return [str(v)]


def alto_fila(f, tabla) -> float:
    n_max = 1
    for col, _, ancho, _, fmt in tabla:
        if fmt in ("lista", "txt_s", "bold_wrap", "aero", "hosp", "hosp_priv"):
            n_max = max(n_max, len(lineas_celda(col, f[col], fmt, ancho)))
    return max(ALTO_FILA_MIN, n_max * PASO_LINEA_S + 0.14)


def pastilla(ax, xc, yc, ancho, texto, color, fontsize=9.5):
    ax.add_patch(FancyBboxPatch((xc - ancho / 2, yc - 0.135), ancho, 0.27, boxstyle="round,pad=0.01,rounding_size=0.07",
                                facecolor=color, edgecolor="none"))
    ax.text(xc, yc, texto, fontsize=fontsize, weight="bold", color="white", ha="center", va="center")


def fmt_delta(v: float, unidad: str) -> str:
    v = int(v)
    if v == 0:
        return "= mejor"
    return f"{v:+d} {unidad}".replace("-", "−")


def preparar_deltas(df):
    df = df.copy()
    df["d_sol"] = df["sol_horas_anio"] - df["sol_horas_anio"].max()
    df["d_lluvia"] = df["lluvia_dias_anio"] - df["lluvia_dias_anio"].min()
    df["d_hosp"] = df["hospital_min"] - df["hospital_min"].min()
    df["d_aero"] = df["aeropuerto_min"] - df["aeropuerto_min"].min()
    return df


UNIDAD_DELTA = {"d_sol": "h", "d_lluvia": "d", "d_hosp": "min", "d_aero": "min"}


def dibujar_tabla(ax, df, tabla, bloques, altos: list[float], alto_total: float):
    ancho_col = {t[0]: t[2] for t in tabla}
    ancho_tabla = sum(ancho_col.values())
    ax.set_xlim(0, ancho_tabla)
    ax.set_ylim(alto_total, 0)
    ax.axis("off")
    x_ini, x = {}, 0.0
    for col, _, ancho, _, _ in tabla:
        x_ini[col] = x
        x += ancho

    for titulo, c0, c1, color in bloques:
        x0, x1 = x_ini[c0], x_ini[c1] + ancho_col[c1]
        ax.add_patch(Rectangle((x0, 0), x1 - x0, 0.4, facecolor=color, edgecolor="white", linewidth=1.5))
        ax.text((x0 + x1) / 2, 0.2, titulo, fontsize=10.5, weight="bold", color="white", ha="center", va="center")
    for col, cab, ancho, _, _ in tabla:
        x0 = x_ini[col]
        ax.add_patch(Rectangle((x0, 0.4), ancho, ALTO_CABECERA - 0.4, facecolor="#e6ecf3", edgecolor="white", linewidth=1.5))
        fs = 9.5 if ancho >= 1.0 else 8.4
        lineas = []
        for parte in cab.split("\n"):
            lineas += envolver(parte, ancho - 0.08, fs)
        ax.text(x0 + ancho / 2, 0.4 + (ALTO_CABECERA - 0.4) / 2, "\n".join(lineas), fontsize=fs, weight="bold", color=AZUL,
                ha="center", va="center", linespacing=1.15)

    y = ALTO_CABECERA
    zona_actual = None
    for i, (_, f) in enumerate(df.iterrows()):
        if f["zona"] != zona_actual:
            zona_actual = f["zona"]
            ns = df.loc[df["zona"] == zona_actual, "n"].astype(int)
            prov = next(pz for z, pz, _ in E.ZONAS if z == zona_actual)
            pais = "Portugal" if f["pais"] == "Portugal" else {"Pontevedra": "Galicia", "A Coruña": "Galicia", "Lugo": "Galicia"}.get(prov, prov)
            ax.add_patch(Rectangle((0, y), ancho_tabla, ALTO_ZONA, facecolor="#31445f", edgecolor="white", linewidth=0.8))
            ax.text(0.15, y + ALTO_ZONA / 2,
                    f"ZONA · {zona_actual.upper()}   ·   {prov}" + (f" ({pais})" if pais != prov else "") + f"   ·   Nº {ns.min()}-{ns.max()}   ·   {len(ns)} municipios",
                    fontsize=11, weight="bold", color="white", va="center")
            y += ALTO_ZONA
        h = altos[i]
        yc = y + h / 2
        n = int(f["n"])
        fondo = "#ffffff" if i % 2 == 0 else "#f3f5f8"
        if f["pais"] == "Portugal":
            fondo = "#fdf3e7" if i % 2 == 0 else "#f9ebdb"
        ax.add_patch(Rectangle((0, y), ancho_tabla, h, facecolor=fondo, edgecolor="#dde3ea", linewidth=0.6))

        for col, _, ancho, alin, fmt in tabla:
            x0 = x_ini[col]
            xt = x0 + 0.08 if alin == "left" else x0 + ancho / 2
            v = f[col]
            kw = dict(fontsize=FS_TXT, color=TINTA, ha=alin, va="center")

            def lineas_texto(lineas, fs=FS_S, color=TINTA, weight="normal", paso=PASO_LINEA_S, primera_bold=False, fs_primera=None):
                y_txt = yc - (len(lineas) - 1) * paso / 2
                for j, linea in enumerate(lineas):
                    ax.text(xt, y_txt, linea, fontsize=(fs_primera or fs) if (primera_bold and j == 0) else fs, color=color,
                            weight="bold" if (primera_bold and j == 0) else weight, ha=alin, va="center")
                    y_txt += paso

            if fmt == "badge":
                ax.scatter([x0 + ancho / 2], [yc], s=330, color=E.COLOR_CLASE[f["clase_clima"]],
                           edgecolor="#111111" if destacado(f) else "white", linewidth=1.8 if destacado(f) else 1.2, zorder=4)
                ax.text(x0 + ancho / 2, yc, str(n), fontsize=9, weight="bold", color="white", ha="center", va="center", zorder=5)
            elif fmt == "bold_wrap":
                lineas_texto(lineas_celda(col, v, fmt, ancho), fs=FS_TXT, weight="bold", paso=0.19)
            elif fmt == "txt":
                ax.text(xt, yc, "—" if _vacio(v) else str(v), **kw)
            elif fmt in ("txt_s", "lista"):
                lineas_texto(lineas_celda(col, v, fmt, ancho), color=TINTA if not _vacio(v) else GRIS)
            elif fmt == "sol":
                ax.text(xt, yc, f"{int(v):,} h · {int(f['sol_dias_equiv'])} d".replace(",", "."), **kw)
            elif fmt == "int":
                ax.text(xt, yc, fmt_int(v), **kw)
            elif fmt == "temp":
                ax.text(xt, yc, f"{f['temp_verano_c']:.1f}° / {f['temp_invierno_c']:.1f}°", **kw)
            elif fmt == "pct":
                ax.text(xt, yc, f"{int(v)} %", **kw)
            elif fmt == "eur":
                ax.text(xt, yc, fmt_eur(v), **kw)
            elif fmt == "prima":
                ax.text(xt, yc, "—" if _vacio(v) else f"+{int(v)} %", **kw)
            elif fmt in ("escala", "escala_inv"):
                pastilla(ax, x0 + ancho / 2, yc, 0.4, str(int(v)), color_escala(float(v), invertir=(fmt == "escala_inv")))
            elif fmt == "nivel":
                pastilla(ax, x0 + ancho / 2, yc, ancho - 0.14, str(v), COLOR_NIVEL[v], 9)
            elif fmt == "fibra":
                pastilla(ax, x0 + ancho / 2, yc, ancho - 0.14, str(v), COLOR_FIBRA[v], 9)
            elif fmt == "obra":
                pastilla(ax, x0 + ancho / 2, yc, ancho - 0.14, str(v), COLOR_OBRA[v], 9)
            elif fmt == "palma":
                pastilla(ax, x0 + ancho / 2, yc, ancho - 0.12, str(v), COLOR_PALMA[v], 8.6)
            elif fmt == "producto":
                pastilla(ax, x0 + ancho / 2, yc, ancho - 0.12, str(v), COLOR_PRODUCTO[v], 8.6)
            elif fmt == "clase":
                pastilla(ax, x0 + ancho / 2, yc, ancho - 0.12, str(v), E.COLOR_CLASE[v], 8.6)
            elif fmt == "costa":
                ax.text(xt, yc, f"{f['franja']} · {int(v)} min", weight="bold",
                        color=AZUL if f["franja"] == "A" else "#7a5a2e", fontsize=FS_TXT, ha="center", va="center")
            elif fmt == "delta":
                d = int(v)
                color = "#1d6b2f" if d == 0 else TINTA
                ax.text(xt, yc, fmt_delta(d, UNIDAD_DELTA[col]), fontsize=FS_TXT, color=color, weight="bold" if d == 0 else "normal",
                        ha="center", va="center")
            elif fmt in ("hosp", "hosp_priv"):
                if _vacio(v):
                    ax.text(xt, yc, "—", color=GRIS, fontsize=FS_TXT, ha="left", va="center")
                else:
                    mins = int(str(v).split(" · ")[1].split(" ")[0])
                    if fmt == "hosp" and mins <= E.HOSPITAL_DESEABLE_MIN:
                        ax.add_patch(Rectangle((x0 + 0.03, y + 0.03), ancho - 0.06, h - 0.06, facecolor=DESTACADO, edgecolor="none"))
                    lineas_texto(lineas_celda(col, v, fmt, ancho), primera_bold=True, fs_primera=FS_TXT)
            elif fmt == "aero":
                if int(f["aeropuerto_min"]) <= E.AEROPUERTO_DESEABLE_MIN:
                    ax.add_patch(Rectangle((x0 + 0.03, y + 0.03), ancho - 0.06, h - 0.06, facecolor=DESTACADO, edgecolor="none"))
                lineas = lineas_celda(col, v, fmt, ancho)
                mejor = str(f["palma_mejor_opcion"]).split(" (")[0]
                lineas = [("★ " if l.startswith(mejor + " ") else "   ") + l for l in lineas]
                lineas_texto(lineas, primera_bold=True)
        y += h

    for _, c0, _, _ in bloques[1:]:
        ax.plot([x_ini[c0], x_ini[c0]], [0, alto_total], color="#b7c1cd", linewidth=1.2)
    ax.add_patch(Rectangle((0, 0), ancho_tabla, alto_total, fill=False, edgecolor="#9aa4b1", linewidth=1.2))


def parrafos_pie(ax, x0: float, ancho: float, y: float, items: list[tuple[str, str]], fontsize: float = 10.5, paso: float = 0.25) -> float:
    """Escribe párrafos «Etiqueta: texto» de arriba abajo (y decreciente) desde x0 y devuelve la y final."""
    renderer = ax.figure.canvas.get_renderer()
    for etiqueta, texto in items:
        lineas = envolver(f"{etiqueta}: {texto}", ancho - 0.2, fontsize)
        corte = len(etiqueta) + 1
        t = ax.text(x0, y, lineas[0][:corte], fontsize=fontsize, weight="bold", color=TINTA, va="center")
        bb = t.get_window_extent(renderer=renderer)
        x_fin = ax.transData.inverted().transform((bb.x1, bb.y0))[0]
        ax.text(x_fin + 0.05, y, lineas[0][corte:].lstrip(), fontsize=fontsize, color=GRIS, va="center")
        y -= paso
        for linea in lineas[1:]:
            ax.text(x0, y, linea, fontsize=fontsize, color=GRIS, va="center")
            y -= paso
        y -= 0.06
    return y


def altura_pie(items: list[tuple[str, str]], ancho: float, fontsize: float = 10.5, paso: float = 0.25) -> float:
    return sum(paso * len(envolver(f"{e}: {t}", ancho - 0.2, fontsize)) + 0.06 for e, t in items)


def pie_tabla_1(df) -> list[tuple[str, str]]:
    pt = df["prima_terraza_pct"]
    pv = df["prima_vistas_mar_pct"].dropna()
    ptv = df["prima_terraza_vistas_pct"].dropna()
    caros = ", ".join(df.loc[df["prima_vistas_mar_pct"] == pv.max(), "municipio"].head(8))
    return [
        ("Costa abierta (franja · min)", f"minutos en coche desde el núcleo hasta la costa de mar abierto o paseo marítimo más cercano (para pasear). "
         f"Franja A = a ≤ {E.MAX_MIN_COSTA_FRANJA_A} min; franja B = entre 5 y 30 min (valle interior, fondo de ría o ciudad sin playa). La razón de cada franja B está en «Puntos débiles y observaciones»."),
        ("Playa de baño · Baño min · Agua", "playa más cercana con agua apta y tranquila para bañarse (ría o playa abrigada), los minutos en coche hasta ella (condición del proyecto: ≤ 30) y la temperatura habitual del agua en julio-agosto."),
        ("Comunicaciones (1-10)", "9-10 autopista o autovía inmediata + tren/metro + aeropuerto cerca; 7-8 autopista a ≤ 10 min y tren o bus frecuente; 5-6 autopista a 10-20 min o solo tren regional; 3-4 solo carretera nacional/comarcal y bus; 1-2 aislado. El detalle de vías y trenes está en la tabla 2."),
        ("Hospitales", "hospital con urgencias 24 h más cercano del propio país, público y privado, con km por carretera y minutos en coche (estimados con factores fijos y correcciones en rías y frontera). "
         f"Celda verde = público a ≤ {E.HOSPITAL_DESEABLE_MIN} min. «—» = ningún privado a ≤ {E.HOSPITAL_MAXIMO_MIN} min. La lista completa de hospitales por municipio está en la tabla 2."),
        ("Aeropuertos", f"los 2-3 aeropuertos a ≤ 120 min, con km, minutos y situación del vuelo directo a Palma (horarios 2026). Celda verde = el más cercano a ≤ {E.AEROPUERTO_DESEABLE_MIN} min. "
         "★ = mejor opción para volar a Palma (primero conexión anual, luego el más cercano)."),
        ("Precios A / B", f"referencia = €/m² medio del municipio × m² × factor: A (≤ 5 min costa, reciente, vistas y exterior) ×{E.FACTOR_A:.2f}; B (5-30 min, reciente, vistas abiertas) ×{E.FACTOR_B:.2f}; "
         "2 hab = 65 m², 3 hab = 90 m²; redondeo a 100 €. «—» en A cuando el núcleo está en franja B. Qué entra en 260.000 € se detalla en la tabla 2."),
        ("Sobreprecios habituales (no incluidos en los precios A/B)", f"terraza útil +{int(pt.min())} a +{int(pt.max())} %; vistas al mar +{int(pv.min())} a +{int(pv.max())} %; terraza y vistas juntas +{int(ptv.min())} a +{int(ptv.max())} %. "
         f"Los más altos se dan en primera línea urbana y turística ({caros}); no hay prima de vistas al mar en Tui, Tomiño, Valença, Vila Nova de Cerveira y Ponte de Lima. Valor por municipio en la tabla 2."),
        ("Escalas 1-10", "verde 7-10, ámbar 4-6, rojo 1-3. Dependencia del coche se colorea invertida (verde = poca dependencia). Viento y niebla: Baja / Media / Alta. Fibra: Sí (núcleo y mayoría del municipio) / Parcial (solo casco) / No."),
        ("Puntos débiles y observaciones", "primero el juicio principal; después «Además:» con los hechos de la propia fila que juegan en contra (hospital, aeropuerto, Palma, sol y lluvia frente al mejor de la tabla, viento/niebla, fibra, obra nueva, presupuesto, servicios, coche, liquidez)."),
    ]


def pie_tabla_2(df) -> list[tuple[str, str]]:
    return [
        ("Comparado con el mejor", f"diferencia frente al mejor valor de toda la tabla: sol {int(df['sol_horas_anio'].max()):,} h, lluvia {int(df['lluvia_dias_anio'].min())} días, "
         f"hospital {int(df['hospital_min'].min())} min, aeropuerto {int(df['aeropuerto_min'].min())} min. Signo − en sol = menos sol; signo + en lluvia, hospital y aeropuerto = peor. «= mejor» = es el mejor de la tabla.".replace(",", ".")),
        ("Clase clima", " · ".join(f"{n} = {r}" for n, r, _ in E.CLASES_CLIMA) + ". Clasificación por umbrales fijos, no ranking."),
        ("Palma", "situación del vuelo directo (horarios publicados 2026): Bilbao todo el año; Santiago y Santander casi todo el año; Vigo, A Coruña, Asturias y Porto solo en verano. La mejor opción elige primero conexión anual y, entre ellas, la más cercana."),
        ("Qué entra en 260.000 €", "según los precios de referencia A/B de la tabla maestra: «Sí, en ambas franjas» si 3 hab en A ≤ 260.000 €; «Sí en B; en A solo 2 hab»; «Solo 2 hab»; «Difícil» si ni 2 hab en B entra."),
        ("Sobreprecios", "porcentaje habitual sobre el precio base por terraza útil, por vistas al mar y por ambas (referencia de mercado 2026, redondeada). «—» = municipio sin vistas al mar posibles."),
        ("Hospitales", f"todos los hospitales con urgencias 24 h a ≤ {E.HOSPITAL_MAXIMO_MIN} min (máximo 4), públicos [Púb] y privados [Priv], ordenados por minutos. «fuera del SNS» = hospital de otro país: útil en urgencia vital, pero no cubre la asistencia ordinaria."),
    ]


def figura_tabla(df, dpi: int, tabla, bloques, titulo: str, subtitulo: str, pie: list[tuple[str, str]], hoja: str, tipos_en_pie: bool):
    margen = 0.45
    ancho_tabla = sum(t[2] for t in tabla)
    ancho_fig = ancho_tabla + 2 * margen
    alto_titulo = 1.7
    altos = [alto_fila(f, tabla) for _, f in df.iterrows()]
    alto_total = ALTO_CABECERA + sum(altos) + ALTO_ZONA * len(E.ZONAS)

    # el pie va en dos columnas y se mide antes de crear la figura definitiva
    fs_pie = 10.5
    ancho_col_pie = (ancho_tabla - 0.6) / 2
    mitad = (len(pie) + 1) // 2
    col_izq, col_der = pie[:mitad], pie[mitad:]
    alto_parrafos = max(altura_pie(col_izq, ancho_col_pie, fs_pie), altura_pie(col_der, ancho_col_pie, fs_pie))
    alto_pie = 0.62 + alto_parrafos + (0.4 + 5 * 0.27 + 0.1 if tipos_en_pie else 0) + 0.35
    alto_fig = alto_titulo + alto_total + alto_pie
    fig = plt.figure(figsize=(ancho_fig, alto_fig), dpi=dpi, facecolor=FONDO)

    fig.text(margen / ancho_fig, 1 - 0.5 / alto_fig, titulo, fontsize=36, weight="bold", color=AZUL, va="center")
    fig.text(1 - margen / ancho_fig, 1 - 0.5 / alto_fig, f"{len(df)} municipios · {len(E.ZONAS)} zonas · {len(tabla)} columnas · {hoja}",
             fontsize=18, weight="bold", color=TINTA, va="center", ha="right")
    for j, linea in enumerate(envolver(subtitulo, ancho_tabla, 13)):
        fig.text(margen / ancho_fig, 1 - (1.05 + j * 0.3) / alto_fig, linea, fontsize=13, color=GRIS, va="center")

    ax = fig.add_axes([margen / ancho_fig, alto_pie / alto_fig, ancho_tabla / ancho_fig, alto_total / alto_fig])
    dibujar_tabla(ax, df, tabla, bloques, altos, alto_total)

    ax_pie = fig.add_axes([margen / ancho_fig, 0, ancho_tabla / ancho_fig, alto_pie / alto_fig])
    ax_pie.set_xlim(0, ancho_tabla)
    ax_pie.set_ylim(0, alto_pie)
    ax_pie.axis("off")
    y = alto_pie - 0.3
    ax_pie.text(0, y, "CÓMO LEER LAS COLUMNAS", fontsize=12, weight="bold", color=AZUL, va="center")
    y -= 0.32
    y_izq = parrafos_pie(ax_pie, 0, ancho_col_pie, y, col_izq, fs_pie)
    y_der = parrafos_pie(ax_pie, ancho_col_pie + 0.6, ancho_col_pie, y, col_der, fs_pie)
    y = min(y_izq, y_der)
    if tipos_en_pie:
        tipos = {
            E.OFICIAL: "normales climáticas AEMET / IPMA, geografía, horarios publicados",
            E.DERIVADO: "calculado con una regla explícita del esquema (mapa2/esquema.py)",
            E.MERCADO: "referencia de portales inmobiliarios 2026, redondeada",
            E.CRITERIO: "escala o categoría asignada con criterios escritos en el diccionario",
            E.TEXTO: "descripción cualitativa",
        }
        en_tabla = {t[0] for t in tabla}
        y -= 0.1
        ax_pie.text(0, y, "TIPO DE DATO POR COLUMNA", fontsize=12, weight="bold", color=AZUL, va="center")
        y -= 0.3
        for tipo, desc in tipos.items():
            cols = [c.etiqueta.replace("\n", " ") for c in E.COLUMNAS if c.tipo == tipo and c.nombre in en_tabla]
            ax_pie.text(0, y, f"{tipo} — {desc}: ", fontsize=10.5, weight="bold", color=TINTA, va="center")
            ax_pie.text(8.6, y, ", ".join(cols) + ".", fontsize=10.5, color=GRIS, va="center")
            y -= 0.27
    return fig


def figura_tabla_1(df, dpi: int):
    return figura_tabla(
        df, dpi, TABLA, BLOQUES, "MAPA 2.0 · TABLA MAESTRA",
        "Orden por zonas de sur a norte y de oeste a este; Portugal al final (filas en tono naranja). Nº = círculo del mapa (color = clase clima; borde negro = hospital ≤ 30 min y aeropuerto ≤ 60 min). "
        "Celdas verdes = hospital público ≤ 30 min o aeropuerto ≤ 60 min. Sin rankings: colores por umbrales fijos. La comparativa, el vuelo a Palma, el presupuesto y los sobreprecios están en la tabla 2 (hoja 3).",
        pie_tabla_1(df), "hoja 2 de 3", tipos_en_pie=True,
    )


def figura_tabla_2(df, dpi: int):
    return figura_tabla(
        preparar_deltas(df), dpi, TABLA2, BLOQUES2, "MAPA 2.0 · TABLA 2 · COMPARATIVA Y DETALLE",
        "Qué se pierde frente al mejor municipio de la tabla en los cuatro criterios prioritarios (sol, lluvia, hospital, aeropuerto), situación del vuelo a Palma, qué entra en 260.000 €, sobreprecios "
        "por terraza y vistas, y el detalle de comunicaciones y de todos los hospitales a ≤ 60 min. Mismo orden y numeración que la tabla maestra.",
        pie_tabla_2(df), "hoja 3 de 3", tipos_en_pie=False,
    )


# ----------------------------------------------------------------------------- composición

HOJAS = {
    "mapa": ("mapa_2_0_mapa", figura_mapa),
    "tabla": ("mapa_2_0_tabla", figura_tabla_1),
    "tabla2": ("mapa_2_0_tabla2", figura_tabla_2),
}


def generar(dpi: int = 110, solo: str | None = None, pdf: bool = False) -> list:
    from matplotlib.backends.backend_pdf import PdfPages

    df = cargar()
    estructura, filas = validar(df)
    errores = len(estructura) + sum(len(f.errores) for f in filas)
    if errores:
        raise SystemExit(f"La tabla tiene {errores} errores de validación; corrige data/municipios.csv antes de renderizar.")
    E.DIR_SALIDA.mkdir(exist_ok=True)
    salidas = []
    completo = PdfPages(E.DIR_SALIDA / "mapa_2_0_completo.pdf") if (pdf and solo is None) else None
    for clave, (nombre, funcion) in HOJAS.items():
        if solo not in (None, clave):
            continue
        fig = funcion(df, dpi)
        ruta = E.DIR_SALIDA / f"{nombre}.png"
        fig.savefig(ruta, dpi=dpi, facecolor=FONDO)
        salidas.append(ruta)
        if pdf:
            ruta_pdf = E.DIR_SALIDA / f"{nombre}.pdf"
            fig.savefig(ruta_pdf, facecolor=FONDO)
            salidas.append(ruta_pdf)
            if completo is not None:
                completo.savefig(fig, facecolor=FONDO)
        plt.close(fig)
    if completo is not None:
        completo.close()
        salidas.append(E.DIR_SALIDA / "mapa_2_0_completo.pdf")
    return salidas


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--dpi", type=int, default=110)
    ap.add_argument("--solo", choices=tuple(HOJAS))
    ap.add_argument("--pdf", action="store_true", help="además del PNG, escribe PDF vectorial por hoja y el PDF completo (3 páginas)")
    args = ap.parse_args(argv)
    for ruta in generar(dpi=args.dpi, solo=args.solo, pdf=args.pdf):
        print(f"Escrito {ruta.relative_to(E.RAIZ)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
