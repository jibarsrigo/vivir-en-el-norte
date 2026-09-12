"""Esquema del MAPA 2.0: columnas acordadas, tipos de dato y asignaciones cerradas.

Todo lo que aquí figura es la referencia contra la que se valida
``data/municipios.csv``. Si se cambia un criterio acordado, se cambia aquí.
"""
from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
CSV_MAESTRO = RAIZ / "data" / "municipios.csv"
DIR_SALIDA = RAIZ / "output"
DIR_GEO = RAIZ / "data" / "geo"

# Tipos de dato. Cada columna lleva exactamente uno, para no mezclar
# datos medidos con estimaciones sin decirlo.
OFICIAL = "OFICIAL"      # normales climáticas AEMET / IPMA, cartografía, geografía
DERIVADO = "DERIVADO"    # calculado con una regla explícita a partir de otra columna
MERCADO = "MERCADO"      # referencia de mercado (portales inmobiliarios), redondeada
CRITERIO = "CRITERIO"    # escala 1-10 asignada con criterios escritos
TEXTO = "TEXTO"          # descripción cualitativa


@dataclass(frozen=True)
class Columna:
    nombre: str
    bloque: str
    etiqueta: str
    unidad: str
    tipo: str
    definicion: str
    obligatoria: bool = True
    minimo: float | None = None
    maximo: float | None = None


COLUMNAS: list[Columna] = [
    # ---- Identificación
    Columna("n", "Identificación", "Nº", "", OFICIAL, "Numeración fija 1-41 en el orden acordado (27 del MAPA 1.0 + 14 añadidos).", minimo=1, maximo=41),
    Columna("municipio", "Identificación", "Municipio", "", OFICIAL, "Nombre oficial del municipio o núcleo (entre paréntesis el municipio cuando el núcleo no coincide)."),
    Columna("provincia", "Identificación", "Provincia", "", OFICIAL, "Provincia (España) o distrito (Portugal)."),
    Columna("comarca", "Identificación", "Comarca", "", OFICIAL, "Comarca oficial o de uso común."),
    Columna("pais", "Identificación", "País", "", OFICIAL, "España o Portugal."),
    # ---- Técnicas (no forman parte de la tabla acordada; sirven para el mapa y la condición principal)
    Columna("lat", "Técnica", "Latitud", "grados", OFICIAL, "Latitud WGS84 del núcleo principal.", minimo=41.0, maximo=44.0),
    Columna("lon", "Técnica", "Longitud", "grados", OFICIAL, "Longitud WGS84 del núcleo principal.", minimo=-9.5, maximo=-2.5),
    Columna("min_playa", "Técnica", "Min. a playa", "min", DERIVADO, "Minutos en coche desde el núcleo principal a la playa de mar más cercana. Condición del proyecto: ≤ 30.", minimo=0, maximo=30),
    # ---- Clima
    Columna("sol_horas_anio", "Clima", "Sol (h/año)", "h", OFICIAL, "Horas de sol anuales. Normales AEMET 1991-2020 / IPMA 1981-2010 de la estación más próxima, ajustadas a la costa.", minimo=1400, maximo=3000),
    Columna("sol_dias_equiv", "Clima", "Sol (días equiv.)", "d", DERIVADO, "Horas de sol / 8 (jornada solar de 8 h), redondeado.", minimo=175, maximo=375),
    Columna("lluvia_dias_anio", "Clima", "Días lluvia/año", "d", OFICIAL, "Días al año con precipitación ≥ 1 mm. Normales AEMET / IPMA.", minimo=60, maximo=200),
    Columna("lluvia_mm_anio", "Clima", "Lluvia (mm/año)", "mm", OFICIAL, "Precipitación anual acumulada. Complementa a los días de lluvia: la costa cantábrica tiene más días pero menos mm que el Baixo Miño.", minimo=500, maximo=2500),
    Columna("temp_verano_c", "Clima", "T. verano", "°C", OFICIAL, "Temperatura media junio-agosto.", minimo=15, maximo=26),
    Columna("temp_invierno_c", "Clima", "T. invierno", "°C", OFICIAL, "Temperatura media diciembre-febrero.", minimo=4, maximo=14),
    Columna("humedad_pct", "Clima", "Humedad", "%", OFICIAL, "Humedad relativa media anual.", minimo=60, maximo=95),
    Columna("clase_clima", "Clima", "Clase clima", "", DERIVADO, "Regla fija sobre sol y días de lluvia (ver CLASES_CLIMA). Es una clasificación por umbrales, no un ranking."),
    # ---- Servicios y accesibilidad
    Columna("servicios_1_10", "Servicios", "Servicios (1-10)", "1-10", CRITERIO, "1-2 aldea sin comercio diario; 3-4 villa con lo básico; 5-6 villa con centro de salud, institutos y comercio completo; 7-8 cabecera comarcal; 9-10 ciudad con hospital y todo tipo de servicios.", minimo=1, maximo=10),
    Columna("hospital_referencia", "Servicios", "Hospital referencia", "", OFICIAL, "Hospital asignado en el proyecto (ver HOSPITALES_ACORDADOS)."),
    Columna("min_hospital", "Servicios", "Min. a hospital", "min", DERIVADO, "Minutos en coche al hospital de referencia, sin tráfico.", minimo=0, maximo=60),
    Columna("aeropuerto_principal", "Servicios", "Aeropuerto principal", "", OFICIAL, "Aeropuerto asignado en el proyecto (ver AEROPUERTOS_ACORDADOS)."),
    Columna("min_aeropuerto", "Servicios", "Min. a aeropuerto", "min", DERIVADO, "Minutos en coche al aeropuerto principal, sin tráfico.", minimo=0, maximo=150),
    Columna("comunicaciones", "Servicios", "Comunicaciones", "", TEXTO, "Vías principales; tren/bus/barco disponibles."),
    # ---- Mercado inmobiliario
    Columna("precio_m2_eur", "Mercado", "Precio €/m²", "€/m²", MERCADO, "Precio medio de venta de vivienda usada en el municipio (portales inmobiliarios, 2026), redondeado a 50 €.", minimo=500, maximo=5000),
    Columna("viv_2hab_5min_eur", "Mercado", "2 hab ≤5 min playa", "€", DERIVADO, "Vivienda de 2 dormitorios (65 m²) en la franja costera del propio municipio (≤ 5 min a playa): precio_m2 × 1,10 × 65, redondeado a 100 €. Vacío si el núcleo no tiene playa a ≤ 5 min.", obligatoria=False),
    Columna("viv_2hab_20_30min_eur", "Mercado", "2 hab 20-30 min playa", "€", DERIVADO, "Vivienda de 2 dormitorios (65 m²) en el interior del área de influencia (20-30 min a playa): precio_m2 × 0,75 × 65, redondeado a 100 €."),
    Columna("viv_3hab_5min_eur", "Mercado", "3 hab ≤5 min playa", "€", DERIVADO, "Vivienda de 3 dormitorios (90 m²) en la franja costera: precio_m2 × 1,10 × 90, redondeado a 100 €. Vacío si el núcleo no tiene playa a ≤ 5 min.", obligatoria=False),
    Columna("viv_3hab_20_30min_eur", "Mercado", "3 hab 20-30 min playa", "€", DERIVADO, "Vivienda de 3 dormitorios (90 m²) en el interior del área de influencia: precio_m2 × 0,75 × 90, redondeado a 100 €."),
    Columna("prima_terraza_pct", "Mercado", "+ Terraza", "%", MERCADO, "Sobreprecio habitual por terraza útil sobre el precio base.", minimo=0, maximo=30),
    Columna("prima_vistas_mar_pct", "Mercado", "+ Vistas mar", "%", MERCADO, "Sobreprecio habitual por vistas al mar. Vacío en municipios sin costa (Tui, Tomiño).", obligatoria=False, minimo=0, maximo=40),
    Columna("prima_terraza_vistas_pct", "Mercado", "+ Terraza + vistas", "%", MERCADO, "Sobreprecio combinado. Debe estar entre el mayor de los dos y su suma.", obligatoria=False, minimo=0, maximo=50),
    # ---- Inversión
    Columna("facilidad_venta_1_10", "Inversión", "Facilidad de venta (1-10)", "1-10", CRITERIO, "Liquidez del mercado: 1-3 muy pocas operaciones/año, meses de venta; 4-6 mercado local activo; 7-8 demanda estable de fuera de la comarca; 9-10 demanda urbana/metropolitana continua.", minimo=1, maximo=10),
    Columna("revalorizacion_1_10", "Inversión", "Revalorización esperada (1-10)", "1-10", CRITERIO, "Expectativa a 10 años según demografía, demanda externa, suelo disponible y precio actual relativo. 5 = mantiene valor real.", minimo=1, maximo=10),
    # ---- Operativa
    Columna("dependencia_coche_1_10", "Operativa", "Dependencia coche (1-10)", "1-10", CRITERIO, "10 = coche imprescindible para todo; 1 = vida diaria completa a pie/transporte público. Considera compacidad del núcleo, tren/bus y distancia a hospital.", minimo=1, maximo=10),
    Columna("debilidad_principal", "Operativa", "Debilidad principal", "", TEXTO, "El punto débil más relevante para residencia habitual o jubilación."),
    Columna("notas", "Operativa", "Notas", "", TEXTO, "Aclaraciones de la fila (alternativas, vacíos justificados).", obligatoria=False),
]

COLUMNAS_POR_NOMBRE = {c.nombre: c for c in COLUMNAS}

# Columnas acordadas que se muestran en la tabla de la imagen (las técnicas no).
COLUMNAS_TABLA = [c.nombre for c in COLUMNAS if c.bloque not in ("Técnica",) and c.nombre not in ("pais", "notas", "sol_dias_equiv", "clase_clima")]

# Orden y nombres exactos de los 41 municipios acordados.
MUNICIPIOS_ACORDADOS = [
    "A Guarda", "O Rosal", "Tui", "Redondela", "Pontevedra", "Vilagarcía de Arousa", "Cambados", "Vilanova de Arousa",
    "Foz", "Burela", "Cervo", "Xove", "Viveiro", "O Vicedo", "Barreiros", "Ribadeo",
    "Cudillero", "Muros de Nalón", "Soto del Barco", "Luanco (Gozón)", "Candás (Carreño)", "Villaviciosa", "Llanes",
    "Santoña", "Laredo", "Suances", "Castro-Urdiales",
    "Baiona", "Nigrán", "Gondomar", "Tomiño", "Cangas", "Moaña", "Bueu",
    "Caminha", "Moledo (Caminha)", "Vila Praia de Âncora (Caminha)", "Viana do Castelo",
    "Tapia de Casariego", "Castropol", "Navia",
]
ORIGINALES_MAPA_1 = set(MUNICIPIOS_ACORDADOS[:27])

HOSPITALES_ACORDADOS = {
    "Álvaro Cunqueiro (Vigo)": ["A Guarda", "O Rosal", "Tui", "Redondela", "Baiona", "Nigrán", "Gondomar", "Tomiño", "Cangas", "Moaña"],
    "Montecelo (Pontevedra)": ["Pontevedra", "Bueu"],
    "Hospital do Salnés (Vilagarcía)": ["Vilagarcía de Arousa", "Cambados", "Vilanova de Arousa"],
    "Hospital da Mariña (Burela)": ["Foz", "Burela", "Cervo", "Xove", "Viveiro", "O Vicedo", "Barreiros", "Ribadeo"],
    "HUCA (Oviedo)": ["Cudillero", "Muros de Nalón", "Soto del Barco", "Luanco (Gozón)", "Candás (Carreño)", "Villaviciosa"],
    "Hospital de Arriondas (Oriente)": ["Llanes"],
    "Hospital de Jarrio (Coaña)": ["Tapia de Casariego", "Castropol", "Navia"],
    "Hospital de Laredo": ["Santoña", "Laredo"],
    "Hospital Sierrallana (Torrelavega)": ["Suances"],
    "Cruces (Barakaldo) / Laredo": ["Castro-Urdiales"],
    "Hospital de Viana do Castelo (ULSAM)": ["Caminha", "Moledo (Caminha)", "Vila Praia de Âncora (Caminha)", "Viana do Castelo"],
}

AEROPUERTOS_ACORDADOS = {
    "Vigo": [
        "A Guarda", "O Rosal", "Tui", "Redondela", "Pontevedra", "Vilagarcía de Arousa", "Cambados", "Vilanova de Arousa",
        "Baiona", "Nigrán", "Gondomar", "Tomiño", "Cangas", "Moaña", "Bueu",
    ],
    "Asturias": [
        "Foz", "Burela", "Cervo", "Xove", "Viveiro", "O Vicedo", "Barreiros", "Ribadeo",
        "Cudillero", "Muros de Nalón", "Soto del Barco", "Luanco (Gozón)", "Candás (Carreño)", "Villaviciosa", "Llanes",
        "Tapia de Casariego", "Castropol", "Navia",
    ],
    "Santander": ["Santoña", "Laredo", "Suances"],
    "Bilbao": ["Castro-Urdiales"],
    "Oporto": ["Caminha", "Moledo (Caminha)", "Vila Praia de Âncora (Caminha)", "Viana do Castelo"],
}

HOSPITAL_DE = {m: h for h, ms in HOSPITALES_ACORDADOS.items() for m in ms}
AEROPUERTO_DE = {m: a for a, ms in AEROPUERTOS_ACORDADOS.items() for m in ms}

# Clasificación climática por umbrales (leyenda del mapa).
CLASES_CLIMA = [
    ("Más favorable", "sol ≥ 2.400 h y ≤ 120 días de lluvia", "#2e9e44"),
    ("Favorable", "sol ≥ 2.200 h y ≤ 130 días de lluvia", "#8fc43f"),
    ("Intermedio", "sol ≥ 1.850 h", "#f2b52d"),
    ("Más húmedo / nublado", "sol < 1.850 h", "#e8642c"),
]
COLOR_CLASE = {nombre: color for nombre, _, color in CLASES_CLIMA}


def clase_clima(sol_horas: float, lluvia_dias: float) -> str:
    if sol_horas >= 2400 and lluvia_dias <= 120:
        return "Más favorable"
    if sol_horas >= 2200 and lluvia_dias <= 130:
        return "Favorable"
    if sol_horas >= 1850:
        return "Intermedio"
    return "Más húmedo / nublado"


# Parámetros de las viviendas de referencia.
M2_2HAB = 65
M2_3HAB = 90
FACTOR_COSTA = 1.10      # franja ≤ 5 min a playa sobre la media municipal
FACTOR_INTERIOR = 0.75   # franja 20-30 min a playa sobre la media municipal
MAX_MIN_PLAYA_COSTA = 5  # a partir de aquí el núcleo no tiene franja costera propia


def precio_vivienda(precio_m2: float, m2: int, factor: float) -> int:
    return int(round(precio_m2 * factor * m2 / 100.0)) * 100
