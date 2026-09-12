"""Genera las dos hojas de MAPA 2.0 a partir del CSV validado.

    output/mapa_2_0_mapa.png   Hoja 1: mapa numerado, leyenda, zonas, ficha de búsqueda, aeropuertos-Palma y resumen Portugal
    output/mapa_2_0_tabla.png  Hoja 2: tabla maestra completa (83 municipios × todas las columnas)

Uso:
    python -m mapa2.render            # escribe ambas hojas
    python -m mapa2.render --dpi 90   # versión más ligera
    python -m mapa2.render --solo mapa|tabla
    python -m mapa2.render --pdf        # además, output/mapa_2_0_mapa.pdf y output/mapa_2_0_tabla.pdf (vectoriales)
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


def generar_mapa(df, dpi: int, salida=None, formato: str = "png"):
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
             "Hoja 2 · Tabla maestra completa", fontsize=16, color=GRIS, va="center")
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
    fig.text(1 - margen / ancho_fig, 0.35 / alto_fig, "MAPA 2.0 · hoja 1 de 2 · base de datos validada fila a fila (mapa2/validar.py)",
             fontsize=10.5, color=GRIS, va="center", ha="right")

    E.DIR_SALIDA.mkdir(exist_ok=True)
    salida = salida or (E.DIR_SALIDA / f"mapa_2_0_mapa.{formato}")
    fig.savefig(salida, dpi=dpi, facecolor=FONDO)
    plt.close(fig)
    return salida


# ----------------------------------------------------------------------------- hoja 2: tabla

# (columna, cabecera, ancho en pulgadas, alineación, formato)
TABLA = [
    ("n", "Nº", 0.55, "center", "badge"),
    ("municipio", "Municipio", 2.55, "left", "bold"),
    ("provincia", "Provincia /\ndistrito", 1.35, "left", "txt"),
    ("origen", "Origen", 1.0, "center", "txt_s"),
    ("sol_horas_anio", "Sol\n(h/año · d)", 1.4, "center", "sol"),
    ("dias_despejados", "Días\ndespej.", 0.75, "center", "int"),
    ("dias_cubiertos", "Días\ncubiertos", 0.8, "center", "int"),
    ("lluvia_dias_anio", "Lluvia\n(días)", 0.75, "center", "int"),
    ("lluvia_mm_anio", "Lluvia\n(mm)", 0.75, "center", "int"),
    ("temp_verano_c", "Temp.\nver. / inv.", 1.2, "center", "temp"),
    ("humedad_pct", "Hum.\n(%)", 0.7, "center", "pct"),
    ("viento", "Viento", 0.8, "center", "nivel"),
    ("niebla", "Niebla", 0.8, "center", "nivel"),
    ("clase_clima", "Clase clima", 1.6, "center", "clase"),
    ("min_costa", "Min.\ncosta", 0.7, "center", "int"),
    ("playa_bano", "Playa de baño", 2.4, "left", "txt_s"),
    ("min_bano", "Min.\nbaño", 0.65, "center", "int"),
    ("temp_agua_verano", "Agua\nverano", 0.75, "center", "txt"),
    ("franja", "Franja", 0.65, "center", "franja"),
    ("servicios_1_10", "Servicios\n(1-10)", 0.85, "center", "escala"),
    ("servicios_nota", "Servicios: qué falta / qué añade", 3.9, "left", "txt_s"),
    ("fibra", "Fibra", 0.75, "center", "fibra"),
    ("comunicaciones", "Comunicaciones", 3.1, "left", "txt_s"),
    ("hospitales", "Hospitales con urgencias a ≤ 60 min  [Púb] / [Priv] · km · min", 4.9, "left", "lista"),
    ("hospital_km", "Hosp.\nkm", 0.7, "center", "int"),
    ("hospital_min", "Hosp.\nmin", 0.75, "center", "hosp_min"),
    ("aeropuertos", "Aeropuertos a ≤ 120 min · km · min · vuelo a Palma", 4.5, "left", "lista"),
    ("aeropuerto_min", "Aerop.\nmin", 0.75, "center", "aero_min"),
    ("palma_mas_cercano", "Palma desde\nel más cercano", 1.35, "center", "palma"),
    ("palma_mejor_opcion", "Mejor opción\nPalma", 2.35, "left", "txt_s"),
    ("precio_m2_eur", "Precio\n€/m²", 0.9, "center", "eur"),
    ("A_2hab_eur", "A · 2 hab\n65 m²", 1.1, "center", "eur"),
    ("A_3hab_eur", "A · 3 hab\n90 m²", 1.1, "center", "eur"),
    ("B_2hab_eur", "B · 2 hab\n65 m²", 1.1, "center", "eur"),
    ("B_3hab_eur", "B · 3 hab\n90 m²", 1.1, "center", "eur"),
    ("producto_en_presupuesto", "Entra en\n260.000 €", 2.05, "center", "producto"),
    ("obra_nueva", "Obra\nnueva", 0.75, "center", "obra"),
    ("prima_terraza_pct", "+ Terraza", 0.8, "center", "prima"),
    ("prima_vistas_mar_pct", "+ Vistas\nmar", 0.8, "center", "prima"),
    ("prima_terraza_vistas_pct", "+ Terraza\n+ vistas", 0.8, "center", "prima"),
    ("facilidad_venta_1_10", "Facilidad\nventa", 0.85, "center", "escala"),
    ("revalorizacion_1_10", "Revaloriz.\nesperada", 0.9, "center", "escala"),
    ("dependencia_coche_1_10", "Depend.\ncoche", 0.85, "center", "escala_inv"),
    ("debilidad_principal", "Debilidad principal", 4.0, "left", "txt_s"),
    ("comparado_con_mejor", "Comparado con el mejor de la tabla\n(sol · lluvia · hospital · aeropuerto)", 3.5, "left", "txt_s"),
    ("notas", "Notas", 3.7, "left", "txt_s"),
]
BLOQUES = [
    ("IDENTIFICACIÓN", "n", "origen", "#3d5a8a"),
    ("CLIMA", "sol_horas_anio", "clase_clima", "#2f7fb5"),
    ("MAR", "min_costa", "franja", "#2a8f8f"),
    ("SERVICIOS", "servicios_1_10", "comunicaciones", "#3b8c5a"),
    ("SANIDAD", "hospitales", "hospital_min", "#b03a3a"),
    ("AEROPUERTOS Y PALMA", "aeropuertos", "palma_mejor_opcion", "#4b5fa8"),
    ("MERCADO  (A = ≤ 5 min costa ×1,30 · B = 5-30 min ×1,05 · 2 hab 65 m² · 3 hab 90 m²)", "precio_m2_eur", "prima_terraza_vistas_pct", "#b0662b"),
    ("INVERSIÓN", "facilidad_venta_1_10", "revalorizacion_1_10", "#a83c3c"),
    ("OPERATIVA", "dependencia_coche_1_10", "notas", "#5b6472"),
]
ANCHO_COL = {t[0]: t[2] for t in TABLA}
ANCHO_TABLA = sum(ANCHO_COL.values())
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


def lineas_celda(col: str, v, fmt: str) -> list[str]:
    ancho = ANCHO_COL[col] - 0.16
    if fmt == "lista":
        return envolver_lista(v, ancho, FS_S)
    if fmt == "txt_s":
        return envolver(v, ancho, FS_S)
    return [str(v)]


def alto_fila(f) -> float:
    n_max = 1
    for col, _, _, _, fmt in TABLA:
        if fmt in ("lista", "txt_s"):
            n_max = max(n_max, len(lineas_celda(col, f[col], fmt)))
    return max(ALTO_FILA_MIN, n_max * PASO_LINEA_S + 0.14)


def pastilla(ax, xc, yc, ancho, texto, color, fontsize=9.5):
    ax.add_patch(FancyBboxPatch((xc - ancho / 2, yc - 0.135), ancho, 0.27, boxstyle="round,pad=0.01,rounding_size=0.07",
                                facecolor=color, edgecolor="none"))
    ax.text(xc, yc, texto, fontsize=fontsize, weight="bold", color="white", ha="center", va="center")


def dibujar_tabla(ax, df, altos: list[float], alto_total: float):
    ax.set_xlim(0, ANCHO_TABLA)
    ax.set_ylim(alto_total, 0)
    ax.axis("off")
    x_ini, x = {}, 0.0
    for col, _, ancho, _, _ in TABLA:
        x_ini[col] = x
        x += ancho

    for titulo, c0, c1, color in BLOQUES:
        x0, x1 = x_ini[c0], x_ini[c1] + ANCHO_COL[c1]
        ax.add_patch(Rectangle((x0, 0), x1 - x0, 0.4, facecolor=color, edgecolor="white", linewidth=1.5))
        ax.text((x0 + x1) / 2, 0.2, titulo, fontsize=11, weight="bold", color="white", ha="center", va="center")
    for col, cab, ancho, _, _ in TABLA:
        x0 = x_ini[col]
        ax.add_patch(Rectangle((x0, 0.4), ancho, ALTO_CABECERA - 0.4, facecolor="#e6ecf3", edgecolor="white", linewidth=1.5))
        fs = 9.5 if ancho >= 1.0 else 8.6
        lineas = []
        for parte in cab.split("\n"):
            lineas += envolver(parte, ancho - 0.1, fs)
        ax.text(x0 + ancho / 2, 0.4 + (ALTO_CABECERA - 0.4) / 2, "\n".join(lineas), fontsize=fs, weight="bold", color=AZUL,
                ha="center", va="center", linespacing=1.15)

    y = ALTO_CABECERA
    zona_actual = None
    for i, (_, f) in enumerate(df.iterrows()):
        if f["zona"] != zona_actual:
            zona_actual = f["zona"]
            ns = df.loc[df["zona"] == zona_actual, "n"].astype(int)
            prov = next(pz for z, pz, _ in E.ZONAS if z == zona_actual)
            ax.add_patch(Rectangle((0, y), ANCHO_TABLA, ALTO_ZONA, facecolor="#31445f", edgecolor="white", linewidth=0.8))
            ax.text(0.15, y + ALTO_ZONA / 2, f"ZONA · {zona_actual.upper()}   ·   {prov}   ·   Nº {ns.min()}-{ns.max()}   ·   {len(ns)} municipios",
                    fontsize=11, weight="bold", color="white", va="center")
            y += ALTO_ZONA
        h = altos[i]
        yc = y + h / 2
        n = int(f["n"])
        fondo = "#ffffff" if i % 2 == 0 else "#f3f5f8"
        if f["pais"] == "Portugal":
            fondo = "#fdf3e7" if i % 2 == 0 else "#f9ebdb"
        ax.add_patch(Rectangle((0, y), ANCHO_TABLA, h, facecolor=fondo, edgecolor="#dde3ea", linewidth=0.6))

        for col, _, ancho, alin, fmt in TABLA:
            x0 = x_ini[col]
            xt = x0 + 0.08 if alin == "left" else x0 + ancho / 2
            v = f[col]
            kw = dict(fontsize=FS_TXT, color=TINTA, ha=alin, va="center")
            if fmt == "badge":
                ax.scatter([x0 + ancho / 2], [yc], s=330, color=E.COLOR_CLASE[f["clase_clima"]],
                           edgecolor="#111111" if destacado(f) else "white", linewidth=1.8 if destacado(f) else 1.2, zorder=4)
                ax.text(x0 + ancho / 2, yc, str(n), fontsize=9, weight="bold", color="white", ha="center", va="center", zorder=5)
            elif fmt == "bold":
                ax.text(xt, yc, str(v), weight="bold", **kw)
            elif fmt == "txt":
                ax.text(xt, yc, "—" if _vacio(v) else str(v), **kw)
            elif fmt in ("txt_s", "lista"):
                lineas = lineas_celda(col, v, fmt)
                y_txt = yc - (len(lineas) - 1) * PASO_LINEA_S / 2
                for linea in lineas:
                    ax.text(xt, y_txt, linea, fontsize=FS_S, color=TINTA if not _vacio(v) else GRIS, ha=alin, va="center")
                    y_txt += PASO_LINEA_S
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
            elif fmt == "franja":
                ax.text(xt, yc, str(v), weight="bold", color=AZUL if v == "A" else "#7a5a2e", fontsize=FS_TXT, ha="center", va="center")
            elif fmt in ("hosp_min", "aero_min"):
                umbral = E.HOSPITAL_DESEABLE_MIN if fmt == "hosp_min" else E.AEROPUERTO_DESEABLE_MIN
                if int(v) <= umbral:
                    ax.add_patch(Rectangle((x0 + 0.03, y + 0.03), ancho - 0.06, h - 0.06, facecolor=DESTACADO, edgecolor="none"))
                    ax.text(xt, yc, str(int(v)), weight="bold", color="#1d6b2f", fontsize=FS_TXT, ha="center", va="center")
                else:
                    ax.text(xt, yc, str(int(v)), **kw)
        y += h

    for _, c0, _, _ in BLOQUES[1:]:
        ax.plot([x_ini[c0], x_ini[c0]], [0, alto_total], color="#b7c1cd", linewidth=1.2)
    ax.add_patch(Rectangle((0, 0), ANCHO_TABLA, alto_total, fill=False, edgecolor="#9aa4b1", linewidth=1.2))


def generar_tabla(df, dpi: int, salida=None, formato: str = "png"):
    margen = 0.45
    ancho_fig = ANCHO_TABLA + 2 * margen
    alto_titulo = 1.7
    alto_pie = 2.1
    altos = [alto_fila(f) for _, f in df.iterrows()]
    alto_total = ALTO_CABECERA + sum(altos) + ALTO_ZONA * len(E.ZONAS)
    alto_fig = alto_titulo + alto_total + alto_pie
    fig = plt.figure(figsize=(ancho_fig, alto_fig), dpi=dpi, facecolor=FONDO)

    fig.text(margen / ancho_fig, 1 - 0.5 / alto_fig, "MAPA 2.0 · TABLA MAESTRA", fontsize=40, weight="bold", color=AZUL, va="center")
    fig.text((margen + 12.6) / ancho_fig, 1 - 0.5 / alto_fig,
             f"{len(df)} municipios · {len(E.ZONAS)} zonas · {len(TABLA)} columnas visibles · hoja 2 de 2",
             fontsize=22, weight="bold", color=TINTA, va="center")
    fig.text(margen / ancho_fig, 1 - 1.15 / alto_fig,
             "Orden por zonas de sur a norte y de oeste a este; Portugal al final (filas en tono naranja). Nº = círculo del mapa (color = clase clima; borde negro = hospital ≤ 30 min y aeropuerto ≤ 60 min). "
             "Celdas verdes en «Hosp. min» y «Aerop. min» = dentro de lo deseable. Sin rankings: colores por umbrales fijos.",
             fontsize=13.5, color=GRIS, va="center")

    ax = fig.add_axes([margen / ancho_fig, alto_pie / alto_fig, ANCHO_TABLA / ancho_fig, alto_total / alto_fig])
    dibujar_tabla(ax, df, altos, alto_total)

    tipos = {
        E.OFICIAL: "normales climáticas AEMET / IPMA, geografía, horarios publicados",
        E.DERIVADO: "calculado con una regla explícita del esquema (mapa2/esquema.py)",
        E.MERCADO: "referencia de portales inmobiliarios 2026, redondeada",
        E.CRITERIO: "escala o categoría asignada con criterios escritos en el diccionario",
        E.TEXTO: "descripción cualitativa",
    }
    en_tabla = {t[0] for t in TABLA}
    y = alto_pie - 0.25
    ax_pie = fig.add_axes([margen / ancho_fig, 0, ANCHO_TABLA / ancho_fig, alto_pie / alto_fig])
    ax_pie.set_xlim(0, ANCHO_TABLA)
    ax_pie.set_ylim(0, alto_pie)
    ax_pie.axis("off")
    ax_pie.text(0, y, "TIPO DE DATO POR COLUMNA", fontsize=12, weight="bold", color=AZUL, va="center")
    y -= 0.3
    for tipo, desc in tipos.items():
        cols = [c.etiqueta.replace("\n", " ") for c in E.COLUMNAS if c.tipo == tipo and c.nombre in en_tabla]
        ax_pie.text(0, y, f"{tipo} — {desc}: ", fontsize=10.5, weight="bold", color=TINTA, va="center")
        ax_pie.text(9.2, y, ", ".join(cols) + ".", fontsize=10.5, color=GRIS, va="center")
        y -= 0.27
    y -= 0.08
    reglas = (
        f"Reglas: sol (d) = h/8 · clase clima: {'; '.join(f'{n} = {r}' for n, r, _ in E.CLASES_CLIMA)} · franja A si costa ≤ {E.MAX_MIN_COSTA_FRANJA_A} min · "
        f"precios A = €/m² × m² × {E.FACTOR_A:.2f}, B = €/m² × m² × {E.FACTOR_B:.2f} (redondeo 100 €) · «—» = no aplicable (columnas A vacías en franja B; vistas al mar vacías sin mar visible) · "
        "km y min por carretera estimados desde la distancia en línea recta con factores fijos y correcciones manuales en rías y frontera · "
        "hospitales de otro país marcados «fuera del SNS» y no cuentan como más cercano · Comparado con el mejor: diferencia frente al mejor valor de la tabla (− peor en sol; + peor en lluvia, hospital y aeropuerto)."
    )
    for linea in textwrap.wrap(reglas, width=int(ANCHO_TABLA / (10.5 * 0.0079))):
        ax_pie.text(0, y, linea, fontsize=10.5, color=GRIS, va="center")
        y -= 0.26

    E.DIR_SALIDA.mkdir(exist_ok=True)
    salida = salida or (E.DIR_SALIDA / f"mapa_2_0_tabla.{formato}")
    fig.savefig(salida, dpi=dpi, facecolor=FONDO)
    plt.close(fig)
    return salida


# ----------------------------------------------------------------------------- composición

def generar(dpi: int = 110, solo: str | None = None, formatos: tuple[str, ...] = ("png",)) -> list:
    df = cargar()
    estructura, filas = validar(df)
    errores = len(estructura) + sum(len(f.errores) for f in filas)
    if errores:
        raise SystemExit(f"La tabla tiene {errores} errores de validación; corrige data/municipios.csv antes de renderizar.")
    salidas = []
    for formato in formatos:
        if solo in (None, "mapa"):
            salidas.append(generar_mapa(df, dpi, formato=formato))
        if solo in (None, "tabla"):
            salidas.append(generar_tabla(df, dpi, formato=formato))
    return salidas


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--dpi", type=int, default=110)
    ap.add_argument("--solo", choices=("mapa", "tabla"))
    ap.add_argument("--pdf", action="store_true", help="además del PNG, escribe PDF vectorial (ideal para móvil: zoom sin pérdida)")
    args = ap.parse_args(argv)
    for ruta in generar(dpi=args.dpi, solo=args.solo, formatos=("png", "pdf") if args.pdf else ("png",)):
        print(f"Imagen escrita en {ruta.relative_to(E.RAIZ)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
