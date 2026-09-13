"""Mapas de zona para el estudio detallado (docs/estudio_zonas.md).

Un mapa por zona, todos con el mismo formato: mapa ampliado de la zona con los
municipios numerados, hospitales, aeropuertos, autopistas, ciudades de referencia y
los lugares que se nombran en el texto (playas, montes, paseos, balnearios); un
localizador del norte peninsular; la lista de municipios; y la leyenda común.

Uso:  python -m mapa2.mapas_zona            -> output/mapas_zonas/zona_XX.png
"""
from __future__ import annotations

import math
from dataclasses import dataclass, field
from pathlib import Path

import geopandas as gpd
import matplotlib

matplotlib.use("Agg")
import matplotlib.patheffects  # noqa: E402
import matplotlib.pyplot as plt  # noqa: E402
import pandas as pd  # noqa: E402
from matplotlib.lines import Line2D  # noqa: E402
from matplotlib.patches import Rectangle  # noqa: E402

from . import esquema as E  # noqa: E402

RAIZ = Path(__file__).resolve().parent.parent
DIR_SALIDA = RAIZ / "output" / "mapas_zonas"

# --------------------------------------------------------------------------- estilo
COL_MAR = "#dbe9f3"
COL_ESPANA = "#f1f0e8"
COL_PORTUGAL = "#efe6d6"
COL_BORDE = "#9a9a9a"
COL_AUTOPISTA = "#d9534f"
COL_CARRETERA = "#8c8c8c"
COL_FERRY = "#2a6fb0"
COL_HOSP_PUB = "#c62828"
COL_HOSP_PRIV = "#ad1457"
COL_AERO = "#37474f"
COL_PLAYA = "#1e6fb8"
COL_MONTE = "#2e7d32"
COL_PASEO = "#558b2f"
COL_BALNEARIO = "#6a1b9a"
COL_CIUDAD = "#212121"
COL_LUGAR = "#5d4037"

# Tamaño homogéneo: 17 cm x 12,5 cm (media hoja A4 con márgenes) a 220 ppp.
ANCHO_IN, ALTO_IN, PPP = 6.7, 4.9, 220


# --------------------------------------------------------------------------- lugares
@dataclass
class Lugar:
    nombre: str
    lat: float
    lon: float
    tipo: str  # playa | monte | paseo | balneario | ciudad | lugar | golf
    dx: float = 0.0  # desplazamiento de la etiqueta en puntos
    dy: float = 0.0
    ha: str = "left"


@dataclass
class Ferry:
    nombre: str
    a: tuple[float, float]
    b: tuple[float, float]


@dataclass
class Zona:
    bbox: tuple[float, float, float, float] | None = None  # lon_min, lat_min, lon_max, lat_max
    lugares: list[Lugar] = field(default_factory=list)
    ferries: list[Ferry] = field(default_factory=list)
    etiquetas_mun: dict[str, tuple[float, float, str]] = field(default_factory=dict)  # (dx, dy, ha)


# Ciudades de referencia (se dibujan las que caen dentro del mapa de cada zona).
CIUDADES = [
    Lugar("Vigo", 42.237, -8.722, "ciudad"),
    Lugar("Pontevedra", 42.431, -8.644, "ciudad"),
    Lugar("Santiago", 42.878, -8.545, "ciudad"),
    Lugar("A Coruña", 43.362, -8.411, "ciudad"),
    Lugar("Ferrol", 43.484, -8.233, "ciudad"),
    Lugar("Lugo", 43.010, -7.556, "ciudad"),
    Lugar("Ourense", 42.336, -7.864, "ciudad"),
    Lugar("Oviedo", 43.362, -5.849, "ciudad"),
    Lugar("Gijón", 43.532, -5.661, "ciudad"),
    Lugar("Avilés", 43.556, -5.925, "ciudad"),
    Lugar("Santander", 43.462, -3.810, "ciudad"),
    Lugar("Torrelavega", 43.353, -4.047, "ciudad"),
    Lugar("Bilbao", 43.263, -2.935, "ciudad"),
    Lugar("Tui", 42.047, -8.645, "ciudad"),
    Lugar("Valença", 42.030, -8.645, "ciudad"),
    Lugar("Caminha", 41.875, -8.838, "ciudad"),
    Lugar("Viana do Castelo", 41.694, -8.831, "ciudad"),
    Lugar("Braga", 41.551, -8.427, "ciudad"),
    Lugar("Porto", 41.158, -8.629, "ciudad"),
    Lugar("Vilagarcía", 42.597, -8.765, "ciudad"),
    Lugar("Ribeira", 42.558, -8.992, "ciudad"),
    Lugar("Betanzos", 43.281, -8.212, "ciudad"),
    Lugar("Pontedeume", 43.407, -8.171, "ciudad"),
    Lugar("Mondoñedo", 43.428, -7.363, "ciudad"),
    Lugar("Arriondas", 43.387, -5.188, "ciudad"),
    Lugar("Santillana del Mar", 43.389, -4.107, "ciudad"),
    Lugar("Laredo", 43.412, -3.412, "ciudad"),
]

# Autopistas y autovías (trazado esquemático por puntos de paso) y carreteras principales.
# (tipo, puntos de paso, índice del punto donde va el rótulo; -1 = sin rótulo)
VIAS: dict[str, tuple] = {
    "AP-9": ("autopista", [(42.05, -8.64), (42.16, -8.62), (42.235, -8.68), (42.29, -8.65), (42.43, -8.64),
                            (42.60, -8.64), (42.74, -8.66), (42.88, -8.55), (43.08, -8.40), (43.33, -8.40),
                            (43.28, -8.22), (43.40, -8.17), (43.48, -8.20)]),
    "A-55": ("autopista", [(42.23, -8.70), (42.16, -8.62), (42.05, -8.64)]),
    "AG-57": ("autopista", [(42.20, -8.72), (42.11, -8.76), (42.115, -8.84)]),
    "A-52": ("autopista", [(42.16, -8.62), (42.18, -8.50), (42.33, -7.86)]),
    "AG-41": ("autopista", [(42.43, -8.66), (42.42, -8.75), (42.40, -8.81)]),
    "AG-11": ("autopista", [(42.73, -8.67), (42.65, -8.79), (42.65, -8.88), (42.56, -8.98)]),
    "AG-64": ("autopista", [(43.48, -8.20), (43.30, -7.68)]),
    "A-6": ("autopista", [(43.33, -8.40), (43.28, -8.22), (43.01, -7.55), (42.55, -6.60)]),
    "A-8": ("autopista", [(43.17, -7.76), (43.43, -7.36), (43.53, -7.05), (43.53, -6.72), (43.52, -6.53), (43.50, -6.30), (43.53, -6.15),
                           (43.55, -5.92), (43.52, -5.66), (43.48, -5.43), (43.46, -5.06), (43.42, -4.76),
                           (43.39, -4.52), (43.35, -4.05), (43.43, -3.85), (43.41, -3.42), (43.38, -3.22),
                           (43.26, -2.93)]),
    "A-66": ("autopista", [(43.36, -5.85), (43.45, -5.80), (43.52, -5.66)]),
    "A-66b": ("autopista", [(43.45, -5.80), (43.55, -5.92)]),
    "A-67": ("autopista", [(43.35, -4.05), (43.00, -4.14)]),
    "A28": ("autopista", [(41.87, -8.83), (41.69, -8.83), (41.53, -8.78), (41.38, -8.76), (41.18, -8.65)]),
    "A3": ("autopista", [(42.02, -8.64), (41.77, -8.58), (41.55, -8.43), (41.20, -8.60)]),
    "A27": ("autopista", [(41.69, -8.80), (41.76, -8.60)]),
    "PO-552": ("carretera", [(42.20, -8.78), (42.14, -8.82), (42.115, -8.85), (42.05, -8.89), (41.95, -8.88), (41.90, -8.87)], 4),
    "PO-325": ("carretera", [(42.22, -8.75), (42.19, -8.80), (42.14, -8.82)]),
    "N-13": ("carretera", [(41.87, -8.84), (41.81, -8.86), (41.69, -8.83)], -1),
    "N-634": ("carretera", [(43.55, -7.03), (43.53, -6.95)]),
}

# Lugares nombrados en el texto, por zona.
ZONAS: dict[str, Zona] = {
    "Baixo Miño": Zona(
        bbox=(-9.00, 41.78, -8.42, 42.33),
        lugares=[
            Lugar("Monte Santa Trega", 41.893, -8.872, "monte", -4, -9, "right"),
            Lugar("Area Grande", 41.918, -8.879, "playa", -4, 2, "right"),
            Lugar("O Muíño", 41.870, -8.856, "playa", 4, -8),
            Lugar("Praia de Mougás", 42.053, -8.887, "playa", -4, 0, "right"),
            Lugar("Monasterio de Oia", 42.007, -8.879, "lugar", -4, -8, "right"),
            Lugar("Muíños do Folón", 41.965, -8.826, "paseo", -4, 0, "right"),
            Lugar("Serra da Groba", 42.075, -8.815, "monte", 4, 0),
            Lugar("Monte Aloia", 42.078, -8.678, "monte", 4, 0),
            Lugar("Goián · paseo fluvial", 41.953, -8.760, "paseo", 4, -8),
            Lugar("Ecopista do Minho", 42.06, -8.56, "paseo", 4, -8),
            Lugar("Moledo", 41.845, -8.868, "playa", 4, -6),
            Lugar("Vila Praia de Âncora", 41.813, -8.865, "playa", 4, -6),
            Lugar("Cesantes", 42.298, -8.630, "playa", 4, 0),
            Lugar("Senda litoral", 42.03, -8.895, "paseo", -4, 0, "right"),
            Lugar("Baiona", 42.118, -8.851, "lugar", 4, 3),
            Lugar("Termas de Monção", 42.078, -8.482, "balneario", 4, -8),
        ],
        ferries=[Ferry("ferry A Guarda-Caminha", (41.898, -8.870), (41.876, -8.842))],
        etiquetas_mun={"A Guarda": (-9, 4, "right"), "Oia": (9, 0, "left"), "O Rosal": (9, -1, "left"),
                       "Tomiño": (9, 0, "left"), "Tui": (9, 4, "left")},
    ),
    "Val Miñor": Zona(
        bbox=(-8.98, 42.02, -8.52, 42.32),
        lugares=[
            Lugar("Praia Ladeira", 42.108, -8.836, "playa", -4, -8, "right"),
            Lugar("Barbeira", 42.122, -8.852, "playa", -4, 2, "right"),
            Lugar("Praia América", 42.136, -8.821, "playa", 4, -8),
            Lugar("Panxón", 42.145, -8.823, "playa", 4, 0),
            Lugar("Patos", 42.156, -8.832, "playa", -4, 2, "right"),
            Lugar("Monteferro", 42.145, -8.840, "monte", -4, -8, "right"),
            Lugar("Foz do Miñor", 42.120, -8.818, "paseo", 4, 2),
            Lugar("Serra do Galiñeiro", 42.152, -8.720, "monte", 4, 0),
            Lugar("Alto da Groba", 42.085, -8.805, "monte", 4, -8),
            Lugar("Virxe da Rocha", 42.100, -8.855, "paseo", -4, 0, "right"),
            Lugar("Vincios", 42.130, -8.745, "lugar", 4, -8),
            Lugar("Priegue", 42.163, -8.792, "lugar", 4, 2),
            Lugar("Illas Cíes", 42.215, -8.905, "lugar", -4, 0, "right"),
            Lugar("Samil", 42.210, -8.777, "playa", 4, 0),
            Lugar("Golf Peinador", 42.228, -8.640, "golf", 4, 0),
            Lugar("Golf Domaio", 42.296, -8.655, "golf", 4, 0),
            Lugar("Mondariz (balneario)", 42.228, -8.460, "balneario", -4, 0, "right"),
            Lugar("Cesantes", 42.298, -8.630, "playa", -4, 4, "right"),
        ],
        ferries=[Ferry("ferry Baiona-Cíes (verano)", (42.120, -8.850), (42.213, -8.900))],
        etiquetas_mun={"Baiona": (-9, -3, "right"), "Nigrán": (9, 3, "left"), "Gondomar": (9, -3, "left")},
    ),
}


# --------------------------------------------------------------------------- utilidades
def _bbox_auto(puntos: list[tuple[float, float]], margen: float = 0.25) -> tuple[float, float, float, float]:
    lats = [p[0] for p in puntos]
    lons = [p[1] for p in puntos]
    dlat = max(lats) - min(lats) or 0.2
    dlon = max(lons) - min(lons) or 0.2
    return (min(lons) - dlon * margen - 0.05, min(lats) - dlat * margen - 0.04,
            max(lons) + dlon * margen + 0.05, max(lats) + dlat * margen + 0.04)


def _ajustar_bbox(bbox, ancho_in, alto_in):
    """Ensancha el bbox para que llene los ejes sin deformar (aspecto 1/cos(lat))."""
    lon0, lat0, lon1, lat1 = bbox
    latm = (lat0 + lat1) / 2
    k = math.cos(math.radians(latm))
    ancho_geo = (lon1 - lon0) * k
    alto_geo = lat1 - lat0
    objetivo = ancho_in / alto_in
    if ancho_geo / alto_geo < objetivo:
        extra = (alto_geo * objetivo - ancho_geo) / k / 2
        lon0, lon1 = lon0 - extra, lon1 + extra
    else:
        extra = (ancho_geo / objetivo - alto_geo) / 2
        lat0, lat1 = lat0 - extra, lat1 + extra
    return lon0, lat0, lon1, lat1


def _dentro(lat, lon, bbox, margen=0.0):
    return bbox[0] + margen <= lon <= bbox[2] - margen and bbox[1] + margen <= lat <= bbox[3] - margen


_GEO: dict[str, gpd.GeoDataFrame] = {}


def _geo(nombre: str) -> gpd.GeoDataFrame:
    if nombre not in _GEO:
        _GEO[nombre] = gpd.read_file(E.DIR_GEO / f"{nombre}.geojson")
    return _GEO[nombre]


def _base(ax, bbox, detalle: bool, df_zona: pd.DataFrame | None = None):
    ax.set_facecolor(COL_MAR)
    if detalle:
        # Límites municipales (GADM 4.1) recortados a la ventana: costa mucho más fiel.
        for nombre, color in (("municipios_es_norte", COL_ESPANA), ("municipios_pt_norte", COL_PORTUGAL)):
            capa = _geo(nombre).cx[bbox[0] - 0.2:bbox[2] + 0.2, bbox[1] - 0.2:bbox[3] + 0.2]
            if len(capa):
                capa.plot(ax=ax, color=color, edgecolor="#c9c9c9", linewidth=0.25)
        if df_zona is not None and len(df_zona):
            es = _geo("municipios_es_norte")
            pt = _geo("municipios_pt_norte")
            puntos = gpd.GeoDataFrame(geometry=gpd.points_from_xy(df_zona["lon"], df_zona["lat"]), crs=es.crs)
            for capa in (es, pt):
                poligonos = capa[capa.geometry.apply(lambda g: puntos.geometry.within(g).any())]
                if len(poligonos):
                    poligonos.plot(ax=ax, color="#fff1bf", edgecolor="#c79a1a", linewidth=0.7, zorder=2)
        _geo("provincias_norte").boundary.plot(ax=ax, color=COL_BORDE, linewidth=0.5, linestyle=(0, (3, 2)), zorder=2.5)
        _geo("paises_norte").boundary.plot(ax=ax, color="#6d6d6d", linewidth=0.7, zorder=2.6)
    else:
        for _, fila in _geo("paises_norte").iterrows():
            color = COL_PORTUGAL if "portugal" in str(fila.get("ADMIN", "")).lower() else COL_ESPANA
            gpd.GeoSeries([fila.geometry]).plot(ax=ax, color=color, edgecolor=COL_BORDE, linewidth=0.4)
    ax.set_xlim(bbox[0], bbox[2])
    ax.set_ylim(bbox[1], bbox[3])
    ax.set_aspect(1 / math.cos(math.radians((bbox[1] + bbox[3]) / 2)))
    ax.set_xticks([])
    ax.set_yticks([])
    for lado in ax.spines.values():
        lado.set_edgecolor("#777")
        lado.set_linewidth(0.6)


def _vias(ax, bbox):
    for nombre, datos in VIAS.items():
        tipo, puntos = datos[0], datos[1]
        idx = datos[2] if len(datos) > 2 else len(puntos) // 2
        lats = [p[0] for p in puntos]
        lons = [p[1] for p in puntos]
        if not any(_dentro(la, lo, bbox) for la, lo in zip(lats, lons)):
            continue
        if tipo == "autopista":
            ax.plot(lons, lats, color="white", linewidth=2.6, solid_capstyle="round", zorder=3)
            ax.plot(lons, lats, color=COL_AUTOPISTA, linewidth=1.5, solid_capstyle="round", zorder=3.1)
        else:
            ax.plot(lons, lats, color=COL_CARRETERA, linewidth=0.9, zorder=3, linestyle=(0, (4, 1.5)))
        # Etiqueta en el punto medio si cae dentro.
        if idx < 0:
            continue
        la, lo = puntos[idx]
        if _dentro(la, lo, bbox, 0.02):
            ax.annotate(nombre.replace("b", ""), (lo, la), fontsize=5.2, color=COL_AUTOPISTA if tipo == "autopista" else COL_CARRETERA,
                        ha="center", va="center", zorder=6,
                        bbox=dict(boxstyle="round,pad=0.15", fc="white", ec="none", alpha=0.85))


MARCADOR = {
    "playa": dict(marker="v", color=COL_PLAYA, s=22),
    "monte": dict(marker="^", color=COL_MONTE, s=30),
    "paseo": dict(marker="D", color=COL_PASEO, s=16),
    "balneario": dict(marker="h", color=COL_BALNEARIO, s=30),
    "golf": dict(marker="P", color="#00897b", s=26),
    "ciudad": dict(marker="s", color=COL_CIUDAD, s=22),
    "lugar": dict(marker="o", color=COL_LUGAR, s=12),
}


def _punto(ax, lugar: Lugar, tam_texto: float, negrita=False):
    m = MARCADOR[lugar.tipo]
    ax.scatter([lugar.lon], [lugar.lat], marker=m["marker"], c=m["color"], s=m["s"], zorder=7,
               edgecolors="white", linewidths=0.5)
    ax.annotate(lugar.nombre, (lugar.lon, lugar.lat), xytext=(lugar.dx or (4 if lugar.ha == "left" else -4), lugar.dy),
                textcoords="offset points", fontsize=tam_texto, ha=lugar.ha, va="center", zorder=8,
                color=m["color"] if lugar.tipo != "ciudad" else COL_CIUDAD,
                fontweight="bold" if negrita else "normal", style="italic" if lugar.tipo in ("playa", "paseo", "monte", "balneario", "golf") else "normal",
                path_effects=[matplotlib.patheffects.withStroke(linewidth=1.6, foreground="white")])


def _hospitales(ax, bbox):
    for h in E.HOSPITALES.values():
        if not _dentro(h.lat, h.lon, bbox, 0.01):
            continue
        pub = h.tipo.startswith("P\u00fab")
        color = COL_HOSP_PUB if pub else COL_HOSP_PRIV
        ax.scatter([h.lon], [h.lat], marker="s", c="white", s=46, zorder=7, edgecolors=color, linewidths=1.1)
        ax.text(h.lon, h.lat, "H", fontsize=5.2, ha="center", va="center", color=color, fontweight="bold", zorder=8)
        nombre = h.nombre.split(" (")[0]
        ax.annotate(nombre, (h.lon, h.lat), xytext=(5, -6), textcoords="offset points", fontsize=4.8,
                    color=color, zorder=8, path_effects=[matplotlib.patheffects.withStroke(linewidth=1.4, foreground="white")])


def _aeropuertos(ax, bbox):
    for a in E.AEROPUERTOS.values():
        if not _dentro(a.lat, a.lon, bbox, 0.01):
            continue
        ax.scatter([a.lon], [a.lat], marker="^", c=COL_AERO, s=52, zorder=7, edgecolors="white", linewidths=0.6)
        ax.annotate(f"Aeropuerto {a.nombre}", (a.lon, a.lat), xytext=(6, 4), textcoords="offset points", fontsize=5.4,
                    color=COL_AERO, fontweight="bold", zorder=8,
                    path_effects=[matplotlib.patheffects.withStroke(linewidth=1.4, foreground="white")])


def _municipios(ax, df_zona: pd.DataFrame, etiquetas: dict):
    for _, f in df_zona.iterrows():
        color = E.COLOR_CLASE.get(f["clase_clima"], "#666")
        ax.scatter([f["lon"]], [f["lat"]], marker="o", c=color, s=150, zorder=9, edgecolors="black", linewidths=0.8)
        ax.text(f["lon"], f["lat"], str(int(f["n"])), fontsize=6.2, ha="center", va="center", color="white",
                fontweight="bold", zorder=10)
        dx, dy, ha = etiquetas.get(f["municipio"], (9, 0, "left"))
        nombre = f["municipio"].split(" (")[0]
        ax.annotate(nombre, (f["lon"], f["lat"]), xytext=(dx, dy), textcoords="offset points", fontsize=6.6,
                    fontweight="bold", ha=ha, va="center", zorder=10,
                    path_effects=[matplotlib.patheffects.withStroke(linewidth=2, foreground="white")])


def _localizador(ax, bbox_zona, df_zona):
    bbox = (-9.6, 40.9, -2.3, 43.95)
    _base(ax, bbox, detalle=False)
    ax.add_patch(Rectangle((bbox_zona[0], bbox_zona[1]), bbox_zona[2] - bbox_zona[0], bbox_zona[3] - bbox_zona[1],
                           fill=True, facecolor="#ffd54f", alpha=0.45, edgecolor="#e65100", linewidth=1.2, zorder=5))
    ax.scatter(df_zona["lon"], df_zona["lat"], s=6, c="#e65100", zorder=6)
    for c in ("Vigo", "A Coruña", "Oviedo", "Santander", "Bilbao", "Porto"):
        l = next(x for x in CIUDADES if x.nombre == c)
        ax.scatter([l.lon], [l.lat], s=4, c="#333", zorder=6)
        ax.annotate(c, (l.lon, l.lat), xytext=(2, 2), textcoords="offset points", fontsize=4.2, color="#333")
    ax.text(-7.9, 41.15, "PORTUGAL", fontsize=4.5, color="#8d6e63", ha="center")
    ax.text(-5.9, 42.6, "ESPAÑA", fontsize=4.5, color="#777", ha="center")
    ax.set_title("Dónde está la zona", fontsize=6, pad=2, color="#444")


def _leyenda(ax):
    ax.axis("off")
    filas = [
        (Line2D([], [], marker="o", color="w", markerfacecolor="#2e9e44", markeredgecolor="black", markersize=7), "Municipio de la tabla (nº = fila; color = clima: verde más sol, naranja más nublado)"),
        (Rectangle((0, 0), 1, 1, facecolor="#fff1bf", edgecolor="#c79a1a", linewidth=0.7), "Término municipal de la zona"),
        (Line2D([], [], marker="s", color="w", markerfacecolor="white", markeredgecolor=COL_HOSP_PUB, markersize=7, markeredgewidth=1.2), "Hospital público (H rojo) · privado (H granate)"),
        (Line2D([], [], marker="^", color="w", markerfacecolor=COL_AERO, markersize=7), "Aeropuerto"),
        (Line2D([], [], color=COL_AUTOPISTA, linewidth=1.6), "Autopista / autovía"),
        (Line2D([], [], color=COL_CARRETERA, linewidth=1.0, linestyle=(0, (4, 1.5))), "Carretera principal"),
        (Line2D([], [], color=COL_FERRY, linewidth=1.0, linestyle=(0, (1, 1.5))), "Barco de pasajeros"),
        (Line2D([], [], marker="v", color="w", markerfacecolor=COL_PLAYA, markersize=6), "Playa o zona de baño"),
        (Line2D([], [], marker="^", color="w", markerfacecolor=COL_MONTE, markersize=7), "Monte, sierra o mirador"),
        (Line2D([], [], marker="D", color="w", markerfacecolor=COL_PASEO, markersize=5), "Paseo o ruta"),
        (Line2D([], [], marker="h", color="w", markerfacecolor=COL_BALNEARIO, markersize=7), "Balneario / termas"),
        (Line2D([], [], marker="P", color="w", markerfacecolor="#00897b", markersize=7), "Campo de golf"),
        (Line2D([], [], marker="s", color="w", markerfacecolor=COL_CIUDAD, markersize=5), "Ciudad o villa de referencia"),
        (Line2D([], [], marker="o", color="w", markerfacecolor=COL_LUGAR, markersize=4), "Otro lugar nombrado en el texto"),
    ]
    leg = ax.legend([f[0] for f in filas], [f[1] for f in filas], loc="center", ncol=3, fontsize=5.3,
                    frameon=False, handlelength=1.6, columnspacing=1.0, handletextpad=0.5, borderaxespad=0)
    for t in leg.get_texts():
        t.set_color("#333")


def _lista_municipios(ax, df_zona, zona, provincia):
    ax.axis("off")
    ax.text(0, 1.0, f"{zona} ({provincia})", fontsize=6.6, fontweight="bold", va="top", color="#0b3d5c", transform=ax.transAxes)
    y = 0.86
    for _, f in df_zona.iterrows():
        color = E.COLOR_CLASE.get(f["clase_clima"], "#666")
        ax.scatter([0.035], [y], s=52, c=color, edgecolors="black", linewidths=0.6, transform=ax.transAxes, clip_on=False)
        ax.text(0.035, y, str(int(f["n"])), fontsize=4.6, ha="center", va="center", color="white", fontweight="bold", transform=ax.transAxes)
        ax.text(0.1, y, f["municipio"], fontsize=5.6, va="center", transform=ax.transAxes)
        ax.text(0.98, y, f"{int(f['sol_horas_anio'])} h · {int(f['hospital_min'])}' H · {int(f['aeropuerto_min'])}' ✈",
                fontsize=4.6, va="center", ha="right", color="#555", transform=ax.transAxes)
        y -= 0.105
    ax.text(0, max(y - 0.02, 0.0), "horas de sol · minutos a hospital · minutos a aeropuerto", fontsize=4.2, color="#777",
            va="top", transform=ax.transAxes)


# --------------------------------------------------------------------------- mapa de zona
def mapa_zona(zona: str, df: pd.DataFrame, destino: Path) -> Path:
    provincia = next(p for z, p, _ in E.ZONAS if z == zona)
    df_zona = df[df["zona"] == zona].copy()
    cfg = ZONAS.get(zona, Zona())
    puntos = [(la, lo) for la, lo in zip(df_zona["lat"], df_zona["lon"])]
    puntos += [(l.lat, l.lon) for l in cfg.lugares]
    bbox = cfg.bbox or _bbox_auto(puntos)

    fig = plt.figure(figsize=(ANCHO_IN, ALTO_IN), dpi=PPP)
    ax = fig.add_axes([0.005, 0.175, 0.655, 0.815])
    bbox = _ajustar_bbox(bbox, 0.655 * ANCHO_IN, 0.815 * ALTO_IN)
    _base(ax, bbox, detalle=True, df_zona=df_zona)
    _vias(ax, bbox)
    for fe in cfg.ferries:
        ax.plot([fe.a[1], fe.b[1]], [fe.a[0], fe.b[0]], color=COL_FERRY, linewidth=1.0, linestyle=(0, (1, 1.5)), zorder=4)
    tam = 5.4
    for c in CIUDADES:
        if _dentro(c.lat, c.lon, bbox, 0.02) and c.nombre not in set(df_zona["municipio"]) and not any(
                c.nombre == l.nombre for l in cfg.lugares):
            _punto(ax, c, tam, negrita=True)
    for l in cfg.lugares:
        if _dentro(l.lat, l.lon, bbox, 0.005):
            _punto(ax, l, tam)
    _hospitales(ax, bbox)
    _aeropuertos(ax, bbox)
    _municipios(ax, df_zona, cfg.etiquetas_mun)
    # Rótulos de país si el mapa toca Portugal.
    if bbox[1] < 42.15 and bbox[0] < -8.1:
        ax.text(bbox[2] - (bbox[2] - bbox[0]) * 0.02, bbox[1] + 0.012, "PORTUGAL",
                fontsize=6, color="#8d6e63", ha="right", va="bottom", zorder=6, fontweight="bold",
                path_effects=[matplotlib.patheffects.withStroke(linewidth=1.5, foreground="white")])
    # Escala aproximada (10 km).
    latm = (bbox[1] + bbox[3]) / 2
    km_por_grado_lon = 111.32 * math.cos(math.radians(latm))
    x0 = bbox[0] + (bbox[2] - bbox[0]) * 0.03
    y0 = bbox[3] - (bbox[3] - bbox[1]) * 0.04
    ax.plot([x0, x0 + 10 / km_por_grado_lon], [y0, y0], color="black", linewidth=1.6, zorder=9)
    ax.text(x0 + 5 / km_por_grado_lon, y0 - (bbox[3] - bbox[1]) * 0.012, "10 km", fontsize=5, ha="center", va="top", zorder=9)

    ax_loc = fig.add_axes([0.675, 0.60, 0.32, 0.39])
    _localizador(ax_loc, bbox, df_zona)
    ax_lista = fig.add_axes([0.68, 0.19, 0.31, 0.38])
    _lista_municipios(ax_lista, df_zona, zona, provincia)
    ax_leg = fig.add_axes([0.0, 0.0, 1.0, 0.16])
    _leyenda(ax_leg)

    destino.parent.mkdir(parents=True, exist_ok=True)
    fig.savefig(destino, dpi=PPP, facecolor="white")
    plt.close(fig)
    return destino


def nombre_fichero(indice: int) -> str:
    return f"zona_{indice:02d}.png"


def generar_todos(df: pd.DataFrame | None = None) -> list[Path]:
    import matplotlib.patheffects  # noqa: F401  (asegura el submódulo)

    if df is None:
        df = pd.read_csv(E.CSV_MAESTRO, sep=";", encoding="utf-8")
    salidas = []
    for i, (zona, _, _) in enumerate(E.ZONAS, start=1):
        salidas.append(mapa_zona(zona, df, DIR_SALIDA / nombre_fichero(i)))
        print(f"  {salidas[-1].relative_to(RAIZ)}  ({zona})")
    return salidas


if __name__ == "__main__":
    import matplotlib.patheffects  # noqa: F401

    generar_todos()
