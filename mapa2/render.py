"""Genera la imagen MAPA 2.0 (mapa + tabla maestra) a partir del CSV validado.

Uso:
    python -m mapa2.render            # escribe output/mapa_2_0.png
    python -m mapa2.render --dpi 90   # versión más ligera
"""
from __future__ import annotations

import argparse
import sys
import textwrap

import geopandas as gpd
import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt  # noqa: E402
from matplotlib.patches import Circle, FancyBboxPatch, Rectangle  # noqa: E402

from . import esquema as E  # noqa: E402
from .validar import cargar, validar  # noqa: E402

AZUL = "#1f3c68"
GRIS = "#5b6472"
MAR = "#d6e9f5"
FONDO = "#f6f8fb"

COLOR_PROVINCIA = {
    "Pontevedra": "#f6e6a3", "La Coruña": "#efe4bf", "Orense": "#efe4bf", "Lugo": "#f4d78a",
    "Asturias": "#cfe4b5", "Cantabria": "#d8cfe9", "Viana do Castelo": "#f7d2ad", "Braga": "#f3dcc4",
    "Porto": "#f3dcc4", "Bizkaia": "#e6e6e6",
}
CIUDADES = [
    ("Vigo", 42.231, -8.712), ("Santiago", 42.880, -8.545), ("A Coruña", 43.362, -8.411), ("Lugo", 43.010, -7.556),
    ("Ourense", 42.336, -7.864), ("Oviedo", 43.362, -5.849), ("Gijón", 43.532, -5.661), ("Santander", 43.462, -3.810),
    ("Bilbao", 43.263, -2.935), ("Porto", 41.158, -8.629), ("Braga", 41.551, -8.428),
]
AEROPUERTOS = [
    ("Vigo", 42.231, -8.627), ("Asturias", 43.563, -6.034), ("Santander", 43.427, -3.820),
    ("Bilbao", 43.301, -2.911), ("Oporto", 41.248, -8.681),
]
HOSPITALES = [
    ("Álvaro Cunqueiro", 42.204, -8.734), ("Montecelo", 42.421, -8.617), ("Salnés", 42.571, -8.749),
    ("Mariña", 43.650, -7.374), ("HUCA", 43.373, -5.826), ("Arriondas", 43.386, -5.187), ("Jarrio", 43.535, -6.795),
    ("Laredo", 43.404, -3.428), ("Sierrallana", 43.360, -4.060), ("Cruces", 43.291, -2.990), ("Viana do Castelo", 41.707, -8.807),
]
# Posición del círculo numerado (lon, lat); el punto real queda unido por una línea.
POS_ETIQUETA = {
    1: (-9.25, 41.95), 2: (-8.65, 41.84), 3: (-8.42, 42.07), 4: (-8.42, 42.26), 5: (-8.42, 42.46),
    6: (-9.10, 42.66), 7: (-9.10, 42.46), 8: (-9.10, 42.56),
    9: (-7.14, 43.90), 10: (-7.26, 43.90), 11: (-7.38, 43.90), 12: (-7.50, 43.90), 13: (-7.62, 43.90), 14: (-7.74, 43.90),
    15: (-7.02, 43.90), 16: (-6.90, 43.90),
    17: (-6.30, 43.90), 18: (-6.18, 43.90), 19: (-6.06, 43.90), 20: (-5.86, 43.90), 21: (-5.74, 43.90),
    22: (-5.435, 43.80), 23: (-4.755, 43.75), 24: (-3.56, 43.74), 25: (-3.36, 43.72), 26: (-4.045, 43.75), 27: (-3.12, 43.66),
    28: (-9.25, 42.10), 29: (-9.25, 42.22), 30: (-8.63, 42.04), 31: (-8.50, 41.94),
    32: (-9.10, 42.14), 33: (-9.10, 42.24), 34: (-9.10, 42.34),
    35: (-9.25, 41.84), 36: (-9.25, 41.73), 37: (-9.25, 41.62), 38: (-9.25, 41.51),
    39: (-6.66, 43.90), 40: (-6.78, 43.90), 41: (-6.54, 43.90),
}
EXTENSION = (-9.62, -2.72, 41.12, 44.02)  # lon_min, lon_max, lat_min, lat_max

# Definición de la tabla: (columna, cabecera, ancho en pulgadas, alineación, formato)
TABLA = [
    ("n", "Nº", 0.62, "center", "badge"),
    ("municipio", "Municipio", 3.05, "left", "bold"),
    ("provincia", "Provincia", 1.65, "left", "txt"),
    ("comarca", "Comarca", 1.95, "left", "txt"),
    ("sol_horas_anio", "Sol\n(h/año · d)", 1.75, "center", "sol"),
    ("lluvia_dias_anio", "Lluvia\n(días/año)", 1.05, "center", "int"),
    ("lluvia_mm_anio", "Lluvia\n(mm/año)", 1.05, "center", "int"),
    ("temp_verano_c", "Temp.\nverano / inv.", 1.45, "center", "temp"),
    ("humedad_pct", "Humedad\n(%)", 1.0, "center", "pct"),
    ("servicios_1_10", "Servicios\n(1-10)", 1.0, "center", "escala"),
    ("hospital_referencia", "Hospital referencia", 3.2, "left", "txt"),
    ("min_hospital", "Min.\nhospital", 0.85, "center", "int"),
    ("aeropuerto_principal", "Aeropuerto\nprincipal", 1.2, "left", "txt"),
    ("min_aeropuerto", "Min.\naeropuerto", 0.95, "center", "int"),
    ("comunicaciones", "Comunicaciones", 4.9, "left", "txt_s"),
    ("precio_m2_eur", "Precio\n€/m²", 1.05, "center", "eur"),
    ("viv_2hab_5min_eur", "2 hab\n≤5 min playa", 1.45, "center", "eur"),
    ("viv_2hab_20_30min_eur", "2 hab\n20-30 min playa", 1.45, "center", "eur"),
    ("viv_3hab_5min_eur", "3 hab\n≤5 min playa", 1.45, "center", "eur"),
    ("viv_3hab_20_30min_eur", "3 hab\n20-30 min playa", 1.45, "center", "eur"),
    ("prima_terraza_pct", "+ Terraza", 0.95, "center", "prima"),
    ("prima_vistas_mar_pct", "+ Vistas\nmar", 0.95, "center", "prima"),
    ("prima_terraza_vistas_pct", "+ Terraza\n+ vistas", 0.95, "center", "prima"),
    ("facilidad_venta_1_10", "Facilidad\nventa (1-10)", 1.3, "center", "escala"),
    ("revalorizacion_1_10", "Revaloriz.\nesperada (1-10)", 1.45, "center", "escala"),
    ("dependencia_coche_1_10", "Depend.\ncoche (1-10)", 1.3, "center", "escala_inv"),
    ("debilidad_principal", "Debilidad principal", 5.7, "left", "txt_s"),
]
BLOQUES = [
    ("IDENTIFICACIÓN", "n", "comarca", "#3d5a8a"),
    ("CLIMA", "sol_horas_anio", "humedad_pct", "#2f7fb5"),
    ("SERVICIOS Y ACCESIBILIDAD", "servicios_1_10", "comunicaciones", "#3b8c5a"),
    ("MERCADO INMOBILIARIO  (2 hab = 65 m² · 3 hab = 90 m²)", "precio_m2_eur", "viv_3hab_20_30min_eur", "#b0662b"),
    ("EXTRAS SOBRE PRECIO BASE", "prima_terraza_pct", "prima_terraza_vistas_pct", "#8a5a9e"),
    ("INVERSIÓN", "facilidad_venta_1_10", "revalorizacion_1_10", "#a83c3c"),
    ("OPERATIVA", "dependencia_coche_1_10", "debilidad_principal", "#5b6472"),
]

ANCHO_TABLA = sum(c[2] for c in TABLA)
MARGEN = 0.45
ANCHO_FIG = ANCHO_TABLA + 2 * MARGEN
ALTO_TITULO = 1.9
ALTO_MAPA = 18.0
ALTO_FILA = 0.43
ALTO_CABECERA = 1.35
ALTO_PIE = 1.15


def _vacio(v) -> bool:
    return v is None or v != v or (isinstance(v, str) and not v.strip())


def fmt_eur(v) -> str:
    return "—" if _vacio(v) else f"{int(v):,} €".replace(",", ".")


def color_escala(v: float, invertir: bool = False) -> str:
    x = 11 - v if invertir else v
    if x >= 7:
        return "#2e9e44"
    if x >= 4:
        return "#e2a72e"
    return "#d9542b"


# ----------------------------------------------------------------------------- mapa

def dibujar_mapa(ax, df):
    lon0, lon1, lat0, lat1 = EXTENSION
    ax.set_facecolor(MAR)
    prov = gpd.read_file(E.DIR_GEO / "provincias_norte.geojson")
    for _, p in prov.iterrows():
        gpd.GeoSeries([p.geometry]).plot(
            ax=ax, color=COLOR_PROVINCIA.get(p["name"], "#ececec"), edgecolor="white", linewidth=0.9,
        )
    paises = gpd.read_file(E.DIR_GEO / "paises_norte.geojson")
    paises.boundary.plot(ax=ax, color="#7d8590", linewidth=1.3)

    ax.text(-8.05, 42.72, "GALICIA", fontsize=26, weight="bold", color="#6b5d1e", ha="center", alpha=0.85)
    ax.text(-6.0, 43.18, "ASTURIAS", fontsize=26, weight="bold", color="#3f6b2c", ha="center", alpha=0.85)
    ax.text(-4.05, 43.22, "CANTABRIA", fontsize=24, weight="bold", color="#5a4a80", ha="center", alpha=0.85)
    ax.text(-8.35, 41.42, "PORTUGAL", fontsize=24, weight="bold", color="#8a4f1f", ha="center", alpha=0.85)
    ax.text(-5.3, 43.93, "Mar Cantábrico", fontsize=20, style="italic", color="#3f6f9c", ha="center")
    ax.text(-9.35, 43.15, "Océano\nAtlántico", fontsize=20, style="italic", color="#3f6f9c", ha="center")

    for nombre, lat, lon in CIUDADES:
        ax.plot(lon, lat, marker="s", ms=7, color="#2b2f36", zorder=5)
        ax.text(lon + 0.05, lat + 0.02, nombre, fontsize=13, color="#2b2f36", zorder=5)
    for nombre, lat, lon in HOSPITALES:
        ax.plot(lon, lat, marker="P", ms=13, color="#d9302e", mec="white", mew=1.2, zorder=6)
    for nombre, lat, lon in AEROPUERTOS:
        ax.text(lon, lat, "✈", fontsize=22, color="#1f3c68", ha="center", va="center", zorder=6)
        ax.text(lon, lat - 0.09, f"Aeropuerto {nombre}", fontsize=10.5, color="#1f3c68", ha="center", va="top", zorder=6)

    for _, f in df.iterrows():
        n = int(f["n"])
        lon, lat = float(f["lon"]), float(f["lat"])
        elon, elat = POS_ETIQUETA[n]
        color = E.COLOR_CLASE[f["clase_clima"]]
        ax.plot([lon, elon], [lat, elat], color="#4a4f57", linewidth=0.9, zorder=7, alpha=0.8)
        ax.plot(lon, lat, marker="o", ms=6, color="#22262c", mec="white", mew=0.8, zorder=8)
        ax.scatter([elon], [elat], s=640, color=color, edgecolor="white", linewidth=1.6, zorder=9)
        ax.text(elon, elat, str(n), fontsize=12.5, weight="bold", color="white", ha="center", va="center", zorder=10)

    ax.set_xlim(lon0, lon1)
    ax.set_ylim(lat0, lat1)
    ax.set_aspect(1.36)
    ax.set_xticks([])
    ax.set_yticks([])
    for s in ax.spines.values():
        s.set_edgecolor("#9aa4b1")

    # Escala gráfica (100 km ≈ 1,23° de longitud a 43° N)
    x0, y0 = -3.55, 41.32
    for i, km in enumerate((0, 25, 50, 75, 100)):
        x = x0 + km / 100 * 1.23
        if i < 4:
            ax.add_patch(Rectangle((x, y0), 0.3075, 0.05, facecolor="black" if i % 2 == 0 else "white", edgecolor="black", zorder=9))
        ax.text(x, y0 + 0.08, f"{km}" + (" km" if km == 100 else ""), fontsize=11, ha="center")


def dibujar_leyenda(ax, df, ancho_in: float, alto_in: float):
    """Panel lateral. Las coordenadas del eje son pulgadas (x desde la izquierda, y desde arriba)."""
    ax.set_xlim(0, ancho_in)
    ax.set_ylim(alto_in, 0)
    ax.axis("off")
    ax.add_patch(FancyBboxPatch((0.1, 0.1), ancho_in - 0.2, alto_in - 0.2, boxstyle="round,pad=0.02,rounding_size=0.3",
                                facecolor="white", edgecolor="#c8d0da", linewidth=1.4))
    x0, xi, xt = 0.5, 0.95, 1.45
    y = 0.65
    ax.text(x0, y, "LEYENDA DEL MAPA", fontsize=19, weight="bold", color=AZUL, va="center")
    y += 0.75
    for nombre, regla, color in E.CLASES_CLIMA:
        n_mun = int((df["clase_clima"] == nombre).sum())
        ax.scatter([xi], [y + 0.12], s=520, color=color, edgecolor="white", linewidth=1.5, zorder=3)
        ax.text(xt, y, f"{nombre}  ({n_mun} municipios)", fontsize=15, weight="bold", color="#2b2f36", va="center")
        ax.text(xt, y + 0.32, regla, fontsize=12.5, color=GRIS, va="center")
        y += 0.82
    y += 0.1
    ax.plot(xi, y, marker="P", ms=15, color="#d9302e", mec="white", mew=1.2)
    ax.text(xt, y, "Hospital de referencia (11)", fontsize=14.5, color="#2b2f36", va="center")
    y += 0.48
    ax.text(xi, y, "✈", fontsize=21, color=AZUL, ha="center", va="center")
    ax.text(xt, y, "Aeropuerto principal (5)", fontsize=14.5, color="#2b2f36", va="center")
    y += 0.48
    ax.plot(xi, y, marker="s", ms=9, color="#2b2f36")
    ax.text(xt, y, "Ciudad de referencia", fontsize=14.5, color="#2b2f36", va="center")
    y += 0.6
    ax.text(x0, y, "Círculo numerado = municipio (Nº de la tabla); la línea lo une con su ubicación real.",
            fontsize=12.5, color=GRIS, va="center")
    y += 0.85
    ax.text(x0, y, "ESCALAS 1-10 DE LA TABLA", fontsize=16, weight="bold", color=AZUL, va="center")
    y += 0.6
    for color, texto in (("#2e9e44", "7-10 favorable"), ("#e2a72e", "4-6 intermedio"), ("#d9542b", "1-3 desfavorable")):
        ax.add_patch(Rectangle((xi - 0.25, y - 0.16), 0.5, 0.32, facecolor=color))
        ax.text(xt, y, texto, fontsize=14, color="#2b2f36", va="center")
        y += 0.5
    ax.text(x0, y, "Dependencia del coche: 10 = coche imprescindible; se colorea invertida (verde = poca dependencia).",
            fontsize=12.5, color=GRIS, va="center")
    y += 0.85
    ax.text(x0, y, "TIPO DE DATO POR COLUMNA", fontsize=16, weight="bold", color=AZUL, va="center")
    y += 0.6
    tipos = {
        E.OFICIAL: "normales climáticas AEMET / IPMA, geografía",
        E.DERIVADO: "calculado con una regla explícita del esquema",
        E.MERCADO: "referencia de portales inmobiliarios 2026",
        E.CRITERIO: "escala 1-10 con criterios escritos",
        E.TEXTO: "descripción cualitativa",
    }
    en_tabla = {t[0] for t in TABLA}
    ancho_chars = int((ancho_in - x0 - 0.3) / 0.083)
    for tipo, desc in tipos.items():
        cols = [c.etiqueta.replace("\n", " ") for c in E.COLUMNAS if c.tipo == tipo and c.nombre in en_tabla]
        lineas = textwrap.wrap(f"{tipo} — {desc}: {', '.join(cols)}.", width=ancho_chars)
        for j, linea in enumerate(lineas):
            ax.text(x0, y, linea, fontsize=11.5, color="#2b2f36" if j == 0 else GRIS, va="center")
            y += 0.31
        y += 0.15

    # Asignaciones acordadas, expresadas con el Nº de la tabla
    y += 0.3
    ax.text(x0, y, "HOSPITALES Y AEROPUERTOS ASIGNADOS (Nº de municipio)", fontsize=16, weight="bold", color=AZUL, va="center")
    y += 0.6
    num = dict(zip(df["municipio"], df["n"].astype(int)))
    y_h = y
    for hosp, muns in E.HOSPITALES_ACORDADOS.items():
        nums = ", ".join(str(num[m]) for m in muns)
        ax.text(x0, y_h, f"{hosp}:", fontsize=11.5, weight="bold", color="#2b2f36", va="center")
        ax.text(x0 + 3.6, y_h, nums, fontsize=11.5, color=GRIS, va="center")
        y_h += 0.28
    x_a = ancho_in * 0.62
    y_a = y
    for aero, muns in E.AEROPUERTOS_ACORDADOS.items():
        nums = ", ".join(str(num[m]) for m in muns)
        lineas = textwrap.wrap(nums, width=int((ancho_in - x_a - 2.2) / 0.083))
        ax.text(x_a, y_a, f"✈ {aero}:", fontsize=11.5, weight="bold", color="#2b2f36", va="center")
        for linea in lineas:
            ax.text(x_a + 1.7, y_a, linea, fontsize=11.5, color=GRIS, va="center")
            y_a += 0.3


# ----------------------------------------------------------------------------- tabla

def dibujar_tabla(ax, df):
    ax.set_xlim(0, ANCHO_TABLA)
    n_filas = len(df)
    alto_total = ALTO_CABECERA + n_filas * ALTO_FILA
    ax.set_ylim(alto_total, 0)
    ax.axis("off")

    x_ini = {}
    x = 0.0
    for col, _, ancho, _, _ in TABLA:
        x_ini[col] = x
        x += ancho

    # Cabecera de bloques
    for titulo, c0, c1, color in BLOQUES:
        x0 = x_ini[c0]
        x1 = x_ini[c1] + dict((t[0], t[2]) for t in TABLA)[c1]
        ax.add_patch(Rectangle((x0, 0), x1 - x0, 0.42, facecolor=color, edgecolor="white", linewidth=1.5))
        ax.text((x0 + x1) / 2, 0.21, titulo, fontsize=11.5, weight="bold", color="white", ha="center", va="center")
    # Cabecera de columnas
    for col, cab, ancho, alin, _ in TABLA:
        x0 = x_ini[col]
        ax.add_patch(Rectangle((x0, 0.42), ancho, ALTO_CABECERA - 0.42, facecolor="#e6ecf3", edgecolor="white", linewidth=1.5))
        ax.text(x0 + ancho / 2, 0.42 + (ALTO_CABECERA - 0.42) / 2, cab, fontsize=10, weight="bold", color=AZUL,
                ha="center", va="center", linespacing=1.15)

    for i, (_, f) in enumerate(df.iterrows()):
        y0 = ALTO_CABECERA + i * ALTO_FILA
        yc = y0 + ALTO_FILA / 2
        n = int(f["n"])
        anadido = f["municipio"] not in E.ORIGINALES_MAPA_1
        fondo = ("#eef6e6" if i % 2 == 0 else "#f6faf1") if anadido else ("#ffffff" if i % 2 == 0 else "#f3f5f8")
        ax.add_patch(Rectangle((0, y0), ANCHO_TABLA, ALTO_FILA, facecolor=fondo, edgecolor="#dde3ea", linewidth=0.6))
        if n in (28,):
            ax.plot([0, ANCHO_TABLA], [y0, y0], color="#3b8c5a", linewidth=2.2)

        for col, _, ancho, alin, fmt in TABLA:
            x0 = x_ini[col]
            xt = x0 + 0.08 if alin == "left" else x0 + ancho / 2
            v = f[col]
            kw = dict(fontsize=11, color="#22262c", ha=alin, va="center")
            if fmt == "badge":
                color = E.COLOR_CLASE[f["clase_clima"]]
                ax.add_patch(Circle((x0 + ancho / 2, yc), 0.165, facecolor=color, edgecolor="white", linewidth=1.2))
                ax.text(x0 + ancho / 2, yc, str(n), fontsize=10.5, weight="bold", color="white", ha="center", va="center")
            elif fmt == "bold":
                ax.text(xt, yc, str(v), weight="bold", **kw)
            elif fmt == "txt":
                ax.text(xt, yc, str(v), **kw)
            elif fmt == "txt_s":
                kw["fontsize"] = 9.3
                ax.text(xt, yc, str(v), **kw)
            elif fmt == "sol":
                ax.text(xt, yc, f"{int(v):,} h · {int(f['sol_dias_equiv'])} d".replace(",", "."), **kw)
            elif fmt == "int":
                ax.text(xt, yc, "—" if _vacio(v) else f"{int(v)}", **kw)
            elif fmt == "temp":
                ax.text(xt, yc, f"{f['temp_verano_c']:.1f}° / {f['temp_invierno_c']:.1f}°", **kw)
            elif fmt == "pct":
                ax.text(xt, yc, f"{int(v)} %", **kw)
            elif fmt == "eur":
                ax.text(xt, yc, fmt_eur(v), **kw)
            elif fmt == "prima":
                ax.text(xt, yc, "—" if _vacio(v) else f"+{int(v)} %", **kw)
            elif fmt in ("escala", "escala_inv"):
                color = color_escala(float(v), invertir=(fmt == "escala_inv"))
                ax.add_patch(FancyBboxPatch((x0 + ancho / 2 - 0.2, yc - 0.15), 0.4, 0.3, boxstyle="round,pad=0.01,rounding_size=0.08",
                                            facecolor=color, edgecolor="none"))
                ax.text(x0 + ancho / 2, yc, str(int(v)), fontsize=10.5, weight="bold", color="white", ha="center", va="center")

    # Líneas verticales de separación de bloques
    for _, c0, _, color in BLOQUES[1:]:
        ax.plot([x_ini[c0], x_ini[c0]], [0, alto_total], color="#b7c1cd", linewidth=1.2)
    ax.add_patch(Rectangle((0, 0), ANCHO_TABLA, alto_total, fill=False, edgecolor="#9aa4b1", linewidth=1.2))


# ----------------------------------------------------------------------------- composición

def generar(dpi: int = 120, salida=None):
    df = cargar()
    estructura, filas = validar(df)
    errores = len(estructura) + sum(len(f.errores) for f in filas)
    if errores:
        raise SystemExit(f"La tabla tiene {errores} errores de validación; corrige data/municipios.csv antes de renderizar.")

    alto_tabla = ALTO_CABECERA + len(df) * ALTO_FILA
    alto_fig = ALTO_TITULO + ALTO_MAPA + 0.35 + alto_tabla + ALTO_PIE
    fig = plt.figure(figsize=(ANCHO_FIG, alto_fig), dpi=dpi, facecolor=FONDO)

    def ejes(x_in, y_top_in, w_in, h_in):
        return fig.add_axes([x_in / ANCHO_FIG, 1 - (y_top_in + h_in) / alto_fig, w_in / ANCHO_FIG, h_in / alto_fig])

    # Título
    fig.text(MARGEN / ANCHO_FIG, 1 - 0.55 / alto_fig, "MAPA 2.0", fontsize=44, weight="bold", color=AZUL, va="center")
    fig.text((MARGEN + 4.9) / ANCHO_FIG, 1 - 0.55 / alto_fig,
             "41 MUNICIPIOS DEL NORTE DE ESPAÑA Y NORTE DE PORTUGAL A MENOS DE 30 MINUTOS DE UNA PLAYA",
             fontsize=27, weight="bold", color="#2b2f36", va="center")
    fig.text(MARGEN / ANCHO_FIG, 1 - 1.25 / alto_fig,
             "Tabla maestra completa · Compra de vivienda · Residencia habitual · Jubilación · Calidad de vida · Potencial inmobiliario",
             fontsize=18, color=GRIS, va="center")
    fig.text(1 - MARGEN / ANCHO_FIG, 1 - 0.55 / alto_fig,
             f"{len(df)} municipios · {len(TABLA)} columnas · 27 del MAPA 1.0 + 14 añadidos (filas en verde)",
             fontsize=15, color=GRIS, va="center", ha="right")
    fig.text(1 - MARGEN / ANCHO_FIG, 1 - 1.25 / alto_fig,
             "Sin rankings: los colores solo aplican umbrales fijos documentados en el esquema",
             fontsize=15, color=GRIS, va="center", ha="right")

    # Mapa y leyenda
    ancho_mapa = ALTO_MAPA * (EXTENSION[1] - EXTENSION[0]) / (EXTENSION[3] - EXTENSION[2]) / 1.36
    ax_mapa = ejes(MARGEN, ALTO_TITULO, ancho_mapa, ALTO_MAPA)
    dibujar_mapa(ax_mapa, df)
    ancho_ley = ANCHO_TABLA - ancho_mapa - 0.4
    ax_ley = ejes(MARGEN + ancho_mapa + 0.4, ALTO_TITULO, ancho_ley, ALTO_MAPA)
    dibujar_leyenda(ax_ley, df, ancho_ley, ALTO_MAPA)

    # Tabla
    ax_tabla = ejes(MARGEN, ALTO_TITULO + ALTO_MAPA + 0.35, ANCHO_TABLA, alto_tabla)
    dibujar_tabla(ax_tabla, df)

    # Pie
    pie = (
        "Fuentes: normales climáticas AEMET (1991-2020) e IPMA (1981-2010) de la estación más próxima; tiempos de desplazamiento en coche sin tráfico; "
        "precios medios de vivienda usada en portales inmobiliarios (Idealista, Fotocasa, Idealista PT), 2026, redondeados. "
        "Las viviendas de referencia se derivan del €/m² con reglas fijas (costa ×1,10; interior 20-30 min ×0,75). "
        "«—» = no aplicable (núcleo sin playa a ≤ 5 min o municipio sin costa). Hospitales y aeropuertos: asignación acordada del proyecto."
    )
    fig.text(MARGEN / ANCHO_FIG, 0.55 / alto_fig, pie, fontsize=11, color=GRIS, va="center", wrap=True)
    fig.text(1 - MARGEN / ANCHO_FIG, 0.2 / alto_fig, "MAPA 2.0 · base de datos validada fila a fila (mapa2/validar.py)",
             fontsize=11, color=GRIS, va="center", ha="right")

    E.DIR_SALIDA.mkdir(exist_ok=True)
    salida = salida or (E.DIR_SALIDA / "mapa_2_0.png")
    fig.savefig(salida, dpi=dpi, facecolor=FONDO)
    plt.close(fig)
    return salida


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--dpi", type=int, default=120)
    args = ap.parse_args(argv)
    ruta = generar(dpi=args.dpi)
    print(f"Imagen escrita en {ruta.relative_to(E.RAIZ)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
