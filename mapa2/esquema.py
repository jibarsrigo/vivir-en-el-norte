"""Esquema del MAPA 2.0: ficha de búsqueda, columnas, tipos de dato y reglas cerradas.

Todo lo que aquí figura es la referencia contra la que se valida
``data/municipios.csv``. Si se cambia un criterio acordado, se cambia aquí.
"""
from __future__ import annotations

import math
from dataclasses import dataclass
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
CSV_MAESTRO = RAIZ / "data" / "municipios.csv"
DIR_SALIDA = RAIZ / "output"
DIR_GEO = RAIZ / "data" / "geo"

# --------------------------------------------------------------------------- ficha de búsqueda
FICHA_BUSQUEDA = {
    "Comprador": "Vive en Mallorca; compra en ≤ 6 meses y se traslada a vivir de inmediato. Jubilación a los 63; muchos años con coche.",
    "Presupuesto": "260.000 € máximo, impuestos y gastos aparte. Opción secundaria poco probable: dos viviendas de ~130.000 € con los mismos criterios (posible alquiler vacacional o de larga estancia).",
    "Vivienda": "Piso o casa. 2 dormitorios mínimo (≥ 65 m²), idealmente 3. Vistas abiertas (mar, montaña o ambas), sin edificios delante. Terraza o exterior. Ascensor imprescindible por encima de 1º. Reciente o nueva, sin reforma o mínima. Eficiencia energética deseable. Internet en casa (fibra o similar).",
    "Opcionales": "Garaje, piscina comunitaria, urbanización cerrada, ausencia de ruido: valoran pero no descartan.",
    "Franjas": "A = ≤ 5 min en coche de la costa. B = de 5 a 20-30 min de la costa.",
    "Entorno": "Servicios mínimos (farmacia, centro de salud, supermercado, cafeterías) a ≤ 10-15 min. Vida todo el año; la estacionalidad turística no importa. Tamaño del núcleo indiferente.",
    "Mar": "Costa abierta cerca para pasear; baño a ≤ 30 min en agua apta y tranquila (ría o playa abrigada).",
    "Clima": "Prioridad máxima al sol y a pocos días de lluvia/nublados. Viento y niebla aceptados si son poco frecuentes.",
    "Sanidad y conexiones": "Hospital (público o privado) a ≤ 45-60 min; deseable ≤ 30 min. Aeropuerto entre 1 y 2 h aceptable; deseable ≤ 60 min. Interesa vuelo directo a Palma.",
    "Prioridades": "1 sol · 2 servicios · 3 hospital · 4 aeropuerto. El precio es un límite, no una prioridad.",
    "Obra nueva sobre plano": "Solo con licencia concedida, aval bancario de las cantidades entregadas y promotor con obras terminadas; si no, vivienda terminada nueva o reciente.",
    "Regla": "No se descarta ningún municipio por sol, hospital ni aeropuerto: la tabla muestra las diferencias. España y Portugal fronterizo.",
}

# Umbrales deseables (se destacan, no excluyen)
HOSPITAL_DESEABLE_MIN = 30
HOSPITAL_MAXIMO_MIN = 60
AEROPUERTO_DESEABLE_MIN = 60
AEROPUERTO_MAXIMO_MIN = 120
PRESUPUESTO_EUR = 260_000

# --------------------------------------------------------------------------- tipos de dato
OFICIAL = "OFICIAL"      # normales climáticas AEMET / IPMA, cartografía, geografía, horarios publicados
DERIVADO = "DERIVADO"    # calculado con una regla explícita a partir de otra columna
MERCADO = "MERCADO"      # referencia de mercado (portales inmobiliarios), redondeada
CRITERIO = "CRITERIO"    # escala o categoría asignada con criterios escritos
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
    valores: tuple[str, ...] | None = None


NIVELES = ("Baja", "Media", "Alta")
FIBRA = ("Sí", "Parcial", "No")
OBRA_NUEVA = ("Sí", "Poca", "No")
PALMA = ("Todo el año", "Casi todo el año", "Verano", "No")
PRODUCTO = ("Sí, en ambas franjas", "Sí en B; en A solo 2 hab", "Solo 2 hab", "Difícil")
ORIGEN = ("MAPA 1.0", "MAPA 2.0", "Ampliación")

COLUMNAS: list[Columna] = [
    # ---- Identificación
    Columna("n", "Identificación", "Nº", "", OFICIAL, "Numeración correlativa por zonas, de sur a norte y de oeste a este; Portugal al final.", minimo=1),
    Columna("zona", "Identificación", "Zona", "", OFICIAL, "Zona geográfica del proyecto (ver ZONAS)."),
    Columna("municipio", "Identificación", "Municipio", "", OFICIAL, "Municipio o núcleo (entre paréntesis el municipio cuando el núcleo no coincide)."),
    Columna("provincia", "Identificación", "Provincia", "", OFICIAL, "Provincia (España) o distrito (Portugal)."),
    Columna("pais", "Identificación", "País", "", OFICIAL, "España o Portugal.", valores=("España", "Portugal")),
    Columna("origen", "Identificación", "Origen", "", OFICIAL, "En qué versión entró en la lista.", valores=ORIGEN),
    Columna("lat", "Técnica", "Latitud", "grados", OFICIAL, "Latitud WGS84 del núcleo principal.", minimo=41.0, maximo=44.0),
    Columna("lon", "Técnica", "Longitud", "grados", OFICIAL, "Longitud WGS84 del núcleo principal.", minimo=-9.5, maximo=-2.5),
    # ---- Clima
    Columna("sol_horas_anio", "Clima", "Sol (h/año)", "h", OFICIAL, "Horas de sol anuales. Normales AEMET 1991-2020 / IPMA 1981-2010 de la estación más próxima, ajustadas a la costa. Referencia Palma: ~2.800 h.", minimo=1400, maximo=3000),
    Columna("sol_dias_equiv", "Clima", "Sol (días equiv.)", "d", DERIVADO, "Horas de sol / 8, redondeado.", minimo=175, maximo=375),
    Columna("dias_despejados", "Clima", "Días despejados", "d", OFICIAL, "Días al año con cielo despejado (nubosidad ≤ 1/8). Referencia Palma: ~90.", minimo=20, maximo=150),
    Columna("dias_cubiertos", "Clima", "Días cubiertos", "d", OFICIAL, "Días al año con cielo cubierto (nubosidad ≥ 7/8). Referencia Palma: ~70.", minimo=50, maximo=220),
    Columna("lluvia_dias_anio", "Clima", "Días lluvia/año", "d", OFICIAL, "Días al año con precipitación ≥ 1 mm. Referencia Palma: ~50.", minimo=60, maximo=200),
    Columna("lluvia_mm_anio", "Clima", "Lluvia (mm/año)", "mm", OFICIAL, "Precipitación anual acumulada.", minimo=500, maximo=2500),
    Columna("temp_verano_c", "Clima", "T. verano", "°C", OFICIAL, "Temperatura media junio-agosto.", minimo=15, maximo=26),
    Columna("temp_invierno_c", "Clima", "T. invierno", "°C", OFICIAL, "Temperatura media diciembre-febrero.", minimo=4, maximo=14),
    Columna("humedad_pct", "Clima", "Humedad", "%", OFICIAL, "Humedad relativa media anual.", minimo=60, maximo=95),
    Columna("viento", "Clima", "Viento", "", CRITERIO, "Frecuencia de viento molesto: Baja (ocasional), Media (nortada o sur habitual en verano/otoño), Alta (frecuente gran parte del año).", valores=NIVELES),
    Columna("niebla", "Clima", "Niebla", "", CRITERIO, "Frecuencia de niebla o bruma costera: Baja (rara), Media (algunas mañanas de verano o valle en invierno), Alta (habitual, p. ej. néboa de A Mariña).", valores=NIVELES),
    Columna("clase_clima", "Clima", "Clase clima", "", DERIVADO, "Regla fija sobre sol y días de lluvia (ver CLASES_CLIMA). Clasificación por umbrales, no ranking."),
    # ---- Mar
    Columna("min_costa", "Mar", "Min. costa abierta", "min", DERIVADO, "Minutos en coche desde el núcleo a la costa de mar abierto o paseo marítimo más cercano (para pasear).", minimo=0, maximo=30),
    Columna("playa_bano", "Mar", "Playa de baño", "", OFICIAL, "Playa con agua apta y tranquila para bañarse (ría o abrigada) más cercana."),
    Columna("min_bano", "Mar", "Min. baño", "min", DERIVADO, "Minutos en coche a la playa de baño. Condición del proyecto: ≤ 30.", minimo=0, maximo=30),
    Columna("temp_agua_verano", "Mar", "Agua verano", "°C", OFICIAL, "Temperatura habitual del agua en julio-agosto en la playa de baño."),
    Columna("franja", "Mar", "Franja", "", DERIVADO, "A si el núcleo está a ≤ 5 min de la costa; B si está entre 5 y 30 min.", valores=("A", "B")),
    # ---- Servicios
    Columna("servicios_1_10", "Servicios", "Servicios (1-10)", "1-10", CRITERIO, "1-2 aldea sin comercio diario; 3-4 villa con lo básico (farmacia, centro de salud, supermercado, cafeterías); 5-6 villa completa con institutos y comercio; 7-8 cabecera comarcal; 9-10 ciudad con hospital y todo tipo de servicios.", minimo=1, maximo=10),
    Columna("servicios_nota", "Servicios", "Falta / añade", "", TEXTO, "Qué falta importante o qué añade relevante respecto a la escala."),
    Columna("fibra", "Servicios", "Fibra", "", CRITERIO, "Sí: fibra óptica en el núcleo y en la mayoría del municipio. Parcial: fibra en el casco, parroquias con 4G/5G o satélite. No: sin fibra.", valores=FIBRA),
    Columna("comunicaciones", "Servicios", "Comunicaciones", "", TEXTO, "Vías principales; tren/bus/barco disponibles."),
    # ---- Sanidad
    Columna("hospitales", "Sanidad", "Hospitales (km · min)", "", DERIVADO, "Hospitales con urgencias 24 h a ≤ 60 min, públicos [Púb] y privados [Priv], con km por carretera y minutos; el más cercano primero."),
    Columna("hospital_km", "Sanidad", "Hospital más cercano (km)", "km", DERIVADO, "Kilómetros por carretera al hospital más cercano.", minimo=0, maximo=120),
    Columna("hospital_min", "Sanidad", "Hospital más cercano (min)", "min", DERIVADO, "Minutos en coche al hospital más cercano. Deseable ≤ 30; máximo del proyecto 60.", minimo=0, maximo=90),
    # ---- Aeropuertos
    Columna("aeropuertos", "Aeropuertos", "Aeropuertos (km · min · Palma)", "", DERIVADO, "Los 2-3 aeropuertos más cercanos con km, minutos y si tienen vuelo directo a Palma."),
    Columna("aeropuerto_min", "Aeropuertos", "Aeropuerto más cercano (min)", "min", DERIVADO, "Minutos en coche al aeropuerto más cercano. Deseable ≤ 60; aceptable hasta 120.", minimo=0, maximo=150),
    Columna("palma_mas_cercano", "Aeropuertos", "Palma desde el más cercano", "", OFICIAL, "Vuelo directo a Palma desde el aeropuerto más cercano (horarios publicados 2026).", valores=PALMA),
    Columna("palma_mejor_opcion", "Aeropuertos", "Mejor opción Palma", "", DERIVADO, "Aeropuerto a ≤ 120 min con mejor conexión directa a Palma y minutos hasta él."),
    # ---- Mercado
    Columna("precio_m2_eur", "Mercado", "Precio €/m²", "€/m²", MERCADO, "Precio medio de venta de vivienda usada en el municipio (portales, 2026), redondeado a 50 €.", minimo=500, maximo=5000),
    Columna("A_2hab_eur", "Mercado", "A · 2 hab", "€", DERIVADO, "Franja A (≤ 5 min costa): 2 dormitorios, 65 m², reciente, con vistas y exterior = €/m² × 65 × 1,30, redondeado a 100 €. Vacío si el núcleo está en franja B.", obligatoria=False),
    Columna("A_3hab_eur", "Mercado", "A · 3 hab", "€", DERIVADO, "Franja A: 3 dormitorios, 90 m², mismas condiciones = €/m² × 90 × 1,30.", obligatoria=False),
    Columna("B_2hab_eur", "Mercado", "B · 2 hab", "€", DERIVADO, "Franja B (5-30 min costa, interior del área): 2 dormitorios, 65 m², reciente, vistas abiertas y exterior = €/m² × 65 × 1,05."),
    Columna("B_3hab_eur", "Mercado", "B · 3 hab", "€", DERIVADO, "Franja B: 3 dormitorios, 90 m² = €/m² × 90 × 1,05."),
    Columna("producto_en_presupuesto", "Mercado", "Entra en 260.000 €", "", DERIVADO, "Qué producto cabe en el presupuesto según las columnas A/B.", valores=PRODUCTO),
    Columna("obra_nueva", "Mercado", "Obra nueva", "", CRITERIO, "Sí: promociones recientes o en curso habituales. Poca: alguna promoción puntual. No: prácticamente sin obra nueva.", valores=OBRA_NUEVA),
    Columna("prima_terraza_pct", "Mercado", "+ Terraza", "%", MERCADO, "Sobreprecio habitual por terraza útil.", minimo=0, maximo=30),
    Columna("prima_vistas_mar_pct", "Mercado", "+ Vistas mar", "%", MERCADO, "Sobreprecio habitual por vistas al mar. Vacío en municipios sin vistas al mar posibles.", obligatoria=False, minimo=0, maximo=40),
    Columna("prima_terraza_vistas_pct", "Mercado", "+ Terraza + vistas", "%", MERCADO, "Sobreprecio combinado: entre el mayor de los dos y su suma.", obligatoria=False, minimo=0, maximo=50),
    # ---- Inversión
    Columna("facilidad_venta_1_10", "Inversión", "Facilidad de venta (1-10)", "1-10", CRITERIO, "Liquidez: 1-3 muy pocas operaciones/año; 4-6 mercado local activo; 7-8 demanda estable de fuera; 9-10 demanda urbana continua.", minimo=1, maximo=10),
    Columna("revalorizacion_1_10", "Inversión", "Revalorización esperada (1-10)", "1-10", CRITERIO, "Expectativa a 10 años según demografía, demanda externa, suelo y precio actual. 5 = mantiene valor real.", minimo=1, maximo=10),
    # ---- Operativa
    Columna("dependencia_coche_1_10", "Operativa", "Dependencia coche (1-10)", "1-10", CRITERIO, "10 = coche imprescindible para todo; 1 = vida diaria completa a pie/transporte público.", minimo=1, maximo=10),
    Columna("debilidad_principal", "Operativa", "Debilidad principal", "", TEXTO, "El punto débil más relevante para residencia habitual o jubilación."),
    Columna("comparado_con_mejor", "Operativa", "Comparado con el mejor", "", DERIVADO, "Diferencia frente al mejor valor de la tabla en los cuatro criterios prioritarios: sol, días de lluvia, minutos a hospital y minutos a aeropuerto."),
    Columna("notas", "Operativa", "Notas", "", TEXTO, "Aclaraciones de la fila.", obligatoria=False),
]
COLUMNAS_POR_NOMBRE = {c.nombre: c for c in COLUMNAS}

# --------------------------------------------------------------------------- zonas (orden de la tabla)
ZONAS: list[tuple[str, str, list[str]]] = [
    ("Baixo Miño", "Pontevedra", ["A Guarda", "Oia", "O Rosal", "Tomiño", "Tui"]),
    ("Val Miñor", "Pontevedra", ["Baiona", "Nigrán", "Gondomar"]),
    ("Vigo e ría", "Pontevedra", ["Vigo", "Redondela", "Soutomaior", "Vilaboa"]),
    ("O Morrazo", "Pontevedra", ["Cangas", "Moaña", "Bueu", "Marín"]),
    ("Pontevedra e Sanxenxo", "Pontevedra", ["Pontevedra", "Poio", "Sanxenxo", "O Grove"]),
    ("O Salnés", "Pontevedra", ["Meaño", "Cambados", "A Illa de Arousa", "Vilanova de Arousa", "Vilagarcía de Arousa"]),
    ("Barbanza e Noia", "A Coruña", ["Rianxo", "Boiro", "A Pobra do Caramiñal", "Ribeira", "Porto do Son", "Noia"]),
    ("Golfo Ártabro e Ferrol", "A Coruña", ["A Coruña", "Oleiros", "Sada", "Bergondo", "Miño", "Ares", "Ferrol"]),
    ("A Mariña", "Lugo", ["O Vicedo", "Viveiro", "Xove", "Cervo", "Burela", "Foz", "Barreiros", "Ribadeo"]),
    ("Asturias Occidente", "Asturias", ["Castropol", "Tapia de Casariego", "Navia", "Luarca (Valdés)"]),
    ("Asturias Centro", "Asturias", ["Cudillero", "Muros de Nalón", "Soto del Barco", "Salinas (Castrillón)", "Luanco (Gozón)", "Candás (Carreño)", "Gijón"]),
    ("Asturias Oriente", "Asturias", ["Villaviciosa", "Colunga", "Ribadesella", "Llanes", "Ribadedeva"]),
    ("Cantabria Occidental", "Cantabria", ["San Vicente de la Barquera", "Comillas", "Suances", "Liencres (Piélagos)", "Santander"]),
    ("Cantabria Oriental", "Cantabria", ["Ribamontán al Mar", "Noja", "Santoña", "Laredo", "Castro-Urdiales"]),
    ("Alto Minho (PT)", "Viana do Castelo", ["Valença", "Vila Nova de Cerveira", "Caminha", "Moledo (Caminha)", "Vila Praia de Âncora (Caminha)", "Afife-Carreço (Viana)", "Viana do Castelo", "Ponte de Lima"]),
    ("Litoral Norte (PT)", "Braga / Porto", ["Esposende", "Póvoa de Varzim", "Vila do Conde"]),
]
MUNICIPIOS_ACORDADOS = [m for _, _, ms in ZONAS for m in ms]
ZONA_DE = {m: z for z, _, ms in ZONAS for m in ms}

MAPA_1_0 = {
    "A Guarda", "O Rosal", "Tui", "Redondela", "Pontevedra", "Vilagarcía de Arousa", "Cambados", "Vilanova de Arousa",
    "Foz", "Burela", "Cervo", "Xove", "Viveiro", "O Vicedo", "Barreiros", "Ribadeo",
    "Cudillero", "Muros de Nalón", "Soto del Barco", "Luanco (Gozón)", "Candás (Carreño)", "Villaviciosa", "Llanes",
    "Santoña", "Laredo", "Suances", "Castro-Urdiales",
}
MAPA_2_0 = {
    "Baiona", "Nigrán", "Gondomar", "Tomiño", "Cangas", "Moaña", "Bueu",
    "Caminha", "Moledo (Caminha)", "Vila Praia de Âncora (Caminha)", "Viana do Castelo",
    "Tapia de Casariego", "Castropol", "Navia",
}


def origen_de(municipio: str) -> str:
    if municipio in MAPA_1_0:
        return "MAPA 1.0"
    if municipio in MAPA_2_0:
        return "MAPA 2.0"
    return "Ampliación"


# --------------------------------------------------------------------------- hospitales y aeropuertos
@dataclass(frozen=True)
class Hospital:
    nombre: str
    tipo: str  # Púb / Priv
    lat: float
    lon: float
    pais: str = "España"


HOSPITALES: dict[str, Hospital] = {h.nombre: h for h in [
    Hospital("Álvaro Cunqueiro (Vigo)", "Púb", 42.204, -8.734),
    Hospital("Povisa (Vigo)", "Priv", 42.226, -8.712),
    Hospital("Montecelo (Pontevedra)", "Púb", 42.421, -8.617),
    Hospital("Quirónsalud Pontevedra", "Priv", 42.435, -8.640),
    Hospital("Hospital do Salnés (Vilagarcía)", "Púb", 42.571, -8.749),
    Hospital("CHUS (Santiago)", "Púb", 42.868, -8.565),
    Hospital("HM Rosaleda (Santiago)", "Priv", 42.883, -8.545),
    Hospital("Hospital do Barbanza (Ribeira)", "Púb", 42.575, -8.984),
    Hospital("CHUAC (A Coruña)", "Púb", 43.345, -8.389),
    Hospital("HM Modelo (A Coruña)", "Priv", 43.363, -8.406),
    Hospital("Arquitecto Marcide (Ferrol)", "Púb", 43.494, -8.230),
    Hospital("Juan Cardona (Ferrol)", "Priv", 43.480, -8.222),
    Hospital("Hospital da Mariña (Burela)", "Púb", 43.650, -7.374),
    Hospital("Jarrio (Coaña)", "Púb", 43.535, -6.795),
    Hospital("San Agustín (Avilés)", "Púb", 43.548, -5.924),
    Hospital("HUCA (Oviedo)", "Púb", 43.373, -5.826),
    Hospital("Centro Médico de Asturias (Oviedo)", "Priv", 43.375, -5.870),
    Hospital("Cabueñes (Gijón)", "Púb", 43.525, -5.620),
    Hospital("Hospital de Jove (Gijón)", "Priv", 43.541, -5.700),
    Hospital("Hospital del Oriente (Arriondas)", "Púb", 43.386, -5.187),
    Hospital("Valdecilla (Santander)", "Púb", 43.457, -3.828),
    Hospital("Santa Clotilde (Santander)", "Priv", 43.464, -3.810),
    Hospital("Clínica Mompía (Bezana)", "Priv", 43.437, -3.912),
    Hospital("Sierrallana (Torrelavega)", "Púb", 43.360, -4.060),
    Hospital("Hospital de Laredo", "Púb", 43.404, -3.428),
    Hospital("Cruces (Barakaldo)", "Púb", 43.291, -2.990),
    Hospital("Santa Luzia (Viana do Castelo)", "Púb", 41.707, -8.807, "Portugal"),
    Hospital("Conde de Bertiandos (Ponte de Lima)", "Púb", 41.767, -8.583, "Portugal"),
    Hospital("Hospital de Braga", "Púb", 41.567, -8.397, "Portugal"),
    Hospital("Trofa Saúde Braga", "Priv", 41.544, -8.428, "Portugal"),
    Hospital("Póvoa de Varzim / Vila do Conde", "Púb", 41.383, -8.760, "Portugal"),
    Hospital("São João (Porto)", "Púb", 41.182, -8.601, "Portugal"),
    Hospital("CUF Porto", "Priv", 41.170, -8.640, "Portugal"),
]}


@dataclass(frozen=True)
class Aeropuerto:
    codigo: str
    nombre: str
    lat: float
    lon: float
    palma: str          # categoría PALMA
    palma_detalle: str  # compañías y temporada (horarios publicados 2026)


AEROPUERTOS: dict[str, Aeropuerto] = {a.codigo: a for a in [
    Aeropuerto("VGO", "Vigo", 42.231, -8.627, "Verano", "Vueling ~4/sem jun-sep; Air Nostrum jul-ago"),
    Aeropuerto("SCQ", "Santiago", 42.896, -8.415, "Casi todo el año", "Vueling todo el año salvo semanas de invierno; Ryanair estacional"),
    Aeropuerto("LCG", "A Coruña", 43.302, -8.377, "Verano", "Vueling verano (sin horario confirmado)"),
    Aeropuerto("OVD", "Asturias", 43.563, -6.034, "Verano", "Volotea mar-oct; Vueling jun-sep"),
    Aeropuerto("SDR", "Santander", 43.427, -3.820, "Casi todo el año", "Vueling mar-nov, 2-4/sem"),
    Aeropuerto("BIO", "Bilbao", 43.301, -2.911, "Todo el año", "Vueling y Air Europa, diario"),
    Aeropuerto("OPO", "Porto", 41.248, -8.681, "Verano", "Ryanair mar-oct 7-8/sem; easyJet verano"),
]}
ORDEN_PALMA = {"Todo el año": 0, "Casi todo el año": 1, "Verano": 2, "No": 3}
# Para elegir la "mejor opción Palma": primero conexión anual (todo / casi todo el año), luego el más cercano.
GRUPO_PALMA = {"Todo el año": 0, "Casi todo el año": 0, "Verano": 1, "No": 2}

# Parámetros de tiempo de viaje por carretera a partir de la distancia en línea recta.
FACTOR_KM_HOSPITAL, VEL_HOSPITAL, FIJO_HOSPITAL = 1.30, 60.0, 3
FACTOR_KM_AERO, VEL_AERO, FIJO_AERO = 1.22, 85.0, 5


def haversine_km(lat1: float, lon1: float, lat2: float, lon2: float) -> float:
    r = 6371.0
    p1, p2 = math.radians(lat1), math.radians(lat2)
    dphi = p2 - p1
    dl = math.radians(lon2 - lon1)
    a = math.sin(dphi / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * r * math.asin(math.sqrt(a))


def tiempo_carretera(km_recta: float, factor: float, velocidad: float, fijo: int) -> tuple[int, int]:
    km = km_recta * factor
    minutos = km / velocidad * 60 + fijo
    return int(round(km)), int(round(minutos / 5.0)) * 5


# --------------------------------------------------------------------------- clima
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


# --------------------------------------------------------------------------- mercado
M2_2HAB = 65
M2_3HAB = 90
FACTOR_A = 1.30   # ≤ 5 min costa, reciente, vistas y exterior
FACTOR_B = 1.05   # 5-30 min costa, reciente, vistas abiertas y exterior
MAX_MIN_COSTA_FRANJA_A = 5


def precio_vivienda(precio_m2: float, m2: int, factor: float) -> int:
    return int(round(precio_m2 * factor * m2 / 100.0)) * 100


def franja(min_costa: float) -> str:
    return "A" if min_costa <= MAX_MIN_COSTA_FRANJA_A else "B"


def producto_en_presupuesto(precio_m2: float) -> str:
    a3 = precio_vivienda(precio_m2, M2_3HAB, FACTOR_A)
    a2 = precio_vivienda(precio_m2, M2_2HAB, FACTOR_A)
    b3 = precio_vivienda(precio_m2, M2_3HAB, FACTOR_B)
    b2 = precio_vivienda(precio_m2, M2_2HAB, FACTOR_B)
    if a3 <= PRESUPUESTO_EUR:
        return "Sí, en ambas franjas"
    if b3 <= PRESUPUESTO_EUR and a2 <= PRESUPUESTO_EUR:
        return "Sí en B; en A solo 2 hab"
    if b2 <= PRESUPUESTO_EUR:
        return "Solo 2 hab"
    return "Difícil"


def comparado_con_mejor(sol, lluvia, hosp_min, aero_min, mejor_sol, mejor_lluvia, mejor_hosp, mejor_aero) -> str:
    def d(v, m, unidad, signo_bueno_menor):
        diff = v - m
        if diff == 0:
            return f"= mejor"
        return f"{diff:+d} {unidad}".replace("+", "+").replace("-", "−")

    return (
        f"Sol {d(int(sol), int(mejor_sol), 'h', False)} · Lluvia {d(int(lluvia), int(mejor_lluvia), 'd', True)}"
        f" · Hospital {d(int(hosp_min), int(mejor_hosp), 'min', True)} · Aeropuerto {d(int(aero_min), int(mejor_aero), 'min', True)}"
    )


# --------------------------------------------------------------------------- Portugal: mini resumen
RESUMEN_PORTUGAL = [
    ("NIF y banco", "NIF portugués obligatorio (con representante fiscal mientras no seas residente) y cuenta bancaria en Portugal."),
    ("Impuestos de compra", "IMT progresivo (~4-6 % efectivo en 260.000 € para vivienda habitual) + Imposto do Selo 0,8 % + notaría y registro ~1.000-1.500 €."),
    ("Impuestos anuales", "IMI del 0,3-0,45 % del valor patrimonial tributario; posible exención 3 años para vivienda habitual."),
    ("Proceso", "CPCV (contrato promesa) con señal del 10-20 % y luego escritura ante notario. Revisar caderneta predial, certidão de teor, licença de utilização, ficha técnica y certificado energético."),
    ("Obra nueva", "Exigir licença de construção, CPCV registrado y garantía bancaria de las cantidades; la garantía de obra es de 5 años (10 estructura)."),
    ("Residencia y sanidad", "Tras 3 meses, CRUE en la Câmara Municipal; con él te inscribes en el Centro de Saúde y accedes al SNS. Hasta entonces, Tarjeta Sanitaria Europea solo para urgencias: seguro privado recomendable."),
    ("Fiscalidad personal", "Residente fiscal si > 183 días/año; tributas en Portugal la renta mundial (pensión incluida, con convenio de doble imposición). El régimen NHR ya no admite nuevos pensionistas."),
    ("Alquiler", "Turístico: licencia de Alojamento Local, con restricciones en zonas de contención. Larga estancia: contrato registrado en Finanças, retención 25 % para no residentes."),
    ("Coche", "Se puede circular con matrícula española hasta 183 días; después matricular en Portugal (ISV) o vender."),
]
