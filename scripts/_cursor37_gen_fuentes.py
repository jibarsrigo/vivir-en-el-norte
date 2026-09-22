# -*- coding: utf-8 -*-
"""CURSOR_37 — generate docs/FUENTES_REESCRITURA_ZONAS_2026.md (audit package)."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT_MD = ROOT / "docs" / "FUENTES_REESCRITURA_ZONAS_2026.md"

inv = json.loads((ROOT / "output/_cursor37_inventory.json").read_text(encoding="utf-8"))
matrix = json.loads((ROOT / "output/_cursor37_matrix.json").read_text(encoding="utf-8"))
prices = json.loads((ROOT / "output/_cursor37_price_conflicts.json").read_text(encoding="utf-8"))
by_zona = {r["id"]: r for r in inv["inventory"]}
prices_by_z: dict[str, list] = {}
for p in prices:
    prices_by_z.setdefault(p["zona"], []).append(p)

# Condensed semantic notes (from human+agent audit CURSOR_37) — authoritative for CURSOR_38
NOTES = {
    "baixo-mino": {
        "estado": "PRECIO_RANK_OBSOLETO · CLIMA_OK · P4_FUERTE",
        "contradicciones": [
            "Gradiente narrativo «Tomiño más asequible… Oia la más cara» contradice capa: A Guarda 1117 < O Rosal 1190 < Oia 1370 < Tomiño 1498 < Tui 1541."
        ],
        "agregados": [
            "«Vigo a media hora o tres cuartos» como si fuera uniforme; tiempos reales ~25–50′ según pueblo."
        ],
        "duplicaciones": [
            "Clima vía {zona.*} (bien). Sin €/m² hardcodeados (bien — TablaPrecios)."
        ],
        "generalizaciones": ["Portugal como hábito semanal: OK si no se promete para aldeas sin puente cercano."],
        "p4": [
            "Frontera Miño / Portugal a cinco minutos",
            "Valle (O Rosal) vs punta atlántica (A Guarda/Oia)",
            "Calor de vega Tui/Tomiño vs costa fresca",
            "Villa vs disperso (escala)",
            "Folón, Santa Trega, Aloia, Groba",
            "Noviembre vs agosto en Area Grande",
        ],
        "cotidiana": "A Guarda/Tui a pie; Oia/Tomiño coche; O Rosal núcleo O Calvario + parras.",
        "precio": "No inventar media de zona. Corregir ranking o volver a cualitativo + TablaPrecios. No citar totales fuera de tabla.",
        "sanidad": "Cunqueiro ~25–50′; Peinador Palma verano / Santiago resto — alinear con capa municipal, sin cascada de minutos.",
        "mar": "Area Grande, Camposancos (estuario), O Muíño/Areeiros — glosar; no atribuir playa oceánica a todo el valle.",
        "clima": "compatible (bindings zona). Interior heat = editorial. despejados/cubiertos = deuda metodológica transversal (no corregir aquí).",
        "eliminar": ["Ranking de precios falso", "Minutos hospital/aero demasiado precisos si no están en capa"],
        "conservar": ["Mapa mental frontera", "Contraste valle/punta", "Encaja calor vs hospital", "Fotos/pies"],
        "no_inventar": ["Media €/m² de zona", "Nuevas playas", "Frecuencias de ferry/bus"],
        "v1_p4": "V1 conserva escena frontera y escala; datos de precio/clima de V1 no son autoridad 2026.",
        "resultado": "LISTA_CURSOR38 · excepción precio-rank",
    },
    "val-minor": {
        "estado": "PRECIOS_HARD_OBSOLETOS · CLIMA_OK · P4_FUERTE",
        "contradicciones": [
            "Nigrán ~2600 / Baiona ~2500 / Gondomar ~1700 vs capa 2909 / 2528 / 1286."
        ],
        "agregados": ["No fabricar media de los tres."],
        "duplicaciones": ["€/m² en prosa + TablaPrecios; clima vía zona OK."],
        "generalizaciones": [],
        "p4": [
            "Triple escala villa / urbanización-parroquia / valle",
            "Bahía vs Serra da Groba / Galiñeiro",
            "Vigo-en-la-semana",
            "Agosto Baiona 12k→~40k",
            "Patos/Panxón/América/Monteferro",
        ],
        "cotidiana": "Baiona caminable; Nigrán/Gondomar más coche; humidex valle.",
        "precio": "Retirar 2600/2500/1700; dejar franjas cualitativas + tabla.",
        "sanidad": "Peinador 20–25′; Palma estacional — capa.",
        "mar": "Bahía abrigada vs olas Patos — conservar contraste.",
        "clima": "compatible",
        "eliminar": ["Cifras €/m² hard", "Notas tipo «alrededor de 6/10» si no se alinean con capa servicios"],
        "conservar": ["Triple escala", "Encaja", "Fiestas Arribada/San Xoán como peaje"],
        "no_inventar": ["Media zona", "«Los tres se viven a pie»"],
        "v1_p4": "Conservar contraste bahía/monte; no reimportar precios V1.",
        "resultado": "LISTA_CURSOR38",
    },
    "vigo-e-ria": {
        "estado": "ND_VILABOA_INVENTADO · PRECIOS_OBSOLETOS · CLIMA_OK",
        "contradicciones": [
            "«1.300 en Soutomaior y Vilaboa»: Soutomaior capa 2111; Vilaboa precioM2 null.",
            "Vigo ~2700 vs 2591 (desvío).",
        ],
        "agregados": ["mm 1700 hard duplica zona.lluviaMm."],
        "duplicaciones": ["€/m² + totales derivados; x/10 servicios en prosa."],
        "generalizaciones": ["Peinador 10–15′ desde «los cuatro» — OK con matiz parroquia."],
        "p4": [
            "Cuatro escalas ciudad/villa/castillo-río/parroquia-marisma",
            "Cíes/Samil vs Cesantes vs Ulló",
            "Rande/AP-9 como peaje",
            "Redondela como equilibrio",
            "Vilaboa = coche + ensenada",
        ],
        "cotidiana": "Vigo resuelve sin coche en muchos barrios; Vilaboa/Soutomaior coche.",
        "precio": "PROHIBIDO citar €/m² de Vilaboa. Actualizar o retirar Vigo/Soutomaior hardcodes.",
        "sanidad": "Cunqueiro vs Montecelo — contraste territorial útil.",
        "mar": "Playa urbana ≠ playa de ría ≠ marisma.",
        "clima": "compatible (zona + sol mun hard alineados). Golfo-style 1939 N/A aquí.",
        "eliminar": ["Cualquier precio Vilaboa", "Soutomaior 1300", "Totales inventados"],
        "conservar": ["Cuatro escalas", "Encaja", "San Simón"],
        "no_inventar": ["Media zona", "Mercado Vilaboa"],
        "v1_p4": "Escalas y Rande; precios V1 obsoletos.",
        "resultado": "LISTA_CURSOR38 · excepción ND Vilaboa (aislada, no bloqueante)",
    },
    "o-morrazo": {
        "estado": "PRECIOS_OBSOLETOS · CLIMA_OK · P4_FUERTE",
        "contradicciones": [
            "Cangas ~1750 vs 2157; Bueu ~1500 vs 1908; Moaña/Marín ≈ OK."
        ],
        "agregados": ["Totales 3hab derivados de €/m² obsoletos."],
        "duplicaciones": ["€/m² + clima zona."],
        "generalizaciones": [],
        "p4": [
            "Doble cabecera Vigo/Pontevedra",
            "Barco vs puente",
            "Cangas mar vs Marín hospital",
            "Costa da Vela / Aldán / Cabo Udra / Ons",
            "Agosto en parroquias",
        ],
        "cotidiana": "Centros más autónomos; parroquias coche; barco reduce Vigo para Cangas/Moaña.",
        "precio": "Retirar ladder 1750/1600/1500 y totales.",
        "sanidad": "Montecelo vs proximidad Marín — conservar trade-off sin minutos falsos.",
        "mar": "Ría vs costa exterior — no unificar.",
        "clima": "compatible",
        "eliminar": ["€/m² hard", "Totales derivados"],
        "conservar": ["Dual orientation", "Encaja", "Topónimos mar"],
        "no_inventar": ["Media zona", "Frecuencias ferry"],
        "v1_p4": "Peninsula identity; precios V1 no.",
        "resultado": "LISTA_CURSOR38",
    },
    "pontevedra-e-sanxenxo": {
        "estado": "PRECIOS_OBSOLETOS · MM_MUN_NO_JUSTIFICADOS · P4_MEDIO",
        "contradicciones": [
            "Pontevedra ~1900 vs 2596; Sanxenxo ~2900 vs 3351; O Grove ~2300 vs 2500; Poio ~1900 ≈ 1887."
        ],
        "agregados": [
            "mm municipales Sanxenxo 1300 / Grove 1250 / Pontevedra 1600 — no están en zonas.json; no inventar."
        ],
        "duplicaciones": ["€/m² + totales; clima zona + mm hard."],
        "generalizaciones": ["«Solo la capital prescinde del coche» — razonable."],
        "p4": [
            "Ciudad vs resort",
            "Poio como compromiso",
            "A Lanzada / istmo O Grove",
            "Agosto Sanxenxo",
            "Hospital vs playa",
        ],
        "cotidiana": "Pontevedra caminable; costa exterior estacional y coche.",
        "precio": "Retirar hard €/m² y totales; TablaPrecios.",
        "sanidad": "Montecelo / Salnés para Grove — capa.",
        "mar": "Ría Lérez vs costa abierta Silgar–Lanzada.",
        "clima": "zona compatible; mm mun → needs decision (retirar salvo fuente).",
        "eliminar": ["€ hard", "mm mun sin fuente", "Totales"],
        "conservar": ["Contraste ciudad/resort", "Encaja «no suma perfecta»"],
        "no_inventar": ["Media lluvia zona más fina que zona.lluviaMm", "Media precio"],
        "v1_p4": "Estructura ciudad/costa; cifras V1 fuera.",
        "resultado": "LISTA_CURSOR38",
    },
    "o-salnes": {
        "estado": "PRECIOS_GRAVES · ILLA_SUBESTIMADA · CLIMA_ZONA_OK",
        "contradicciones": [
            "Meaño/Vilanova ~1350 vs 1013/1969; A Illa ~1900 vs 3012; Cambados/Vilagarcía ≈."
        ],
        "agregados": ["Escalera mm mun 1350–1450 no justificada."],
        "duplicaciones": ["€/m² + totales + clima."],
        "generalizaciones": ["No presentar Meaño como playa cotidiana (capa NO)."],
        "p4": [
            "Albariño / valle",
            "Illa puente",
            "Vilagarcía cabecera vs Cambados villa",
            "Cinco escalas martes",
            "A Lanzada como salida no como playa de Meaño",
        ],
        "cotidiana": "Vilagarcía/Cambados más autónomos; Meaño coche fuera de Dena.",
        "precio": "Retirar TODO hard €; Illa especialmente.",
        "sanidad": "Hospital do Salnés — capa.",
        "mar": "Ría ≠ océano; Illa vs valle.",
        "clima": "compatible zona; mm mun retirar.",
        "eliminar": ["Ladder €", "mm mun", "Totales"],
        "conservar": ["Cinco escalas", "Encaja", "Albariño"],
        "no_inventar": ["Media zona", "Meaño=playa"],
        "v1_p4": "Identidad vinícola/ría; precios V1 no.",
        "resultado": "LISTA_CURSOR38",
    },
    "barbanza-e-noia": {
        "estado": "PRECIOS_OBSOLETOS · MM_RIBEIRA_DUDOSO · P4_FUERTE",
        "contradicciones": [
            "Rianxo 1200 vs 959; Porto do Son 1350 vs 1525; resto desvíos varios."
        ],
        "agregados": ["«Ribeira 1250 mm, resto 1350» — no respaldado por zonas.json (1350)."],
        "duplicaciones": ["€/m² + totales."],
        "generalizaciones": ["Noia hospital → CHUS, no Barbanza — ya matizado; no unificar."],
        "p4": [
            "Monte + mar",
            "Arousa calm vs Corrubedo/Baroña atlántico",
            "Noia vs Barbanza hospital fork",
            "Seis escalas",
            "Franja relativamente asequible de Rías Baixas (cualitativo)",
        ],
        "cotidiana": "Ribeira densa; Porto do Son coche; Boiro/A Pobra equilibrio.",
        "precio": "Retirar ladder; no media zona.",
        "sanidad": "Santiago 40–50′ / Palma casi todo el año — fuerza de zona (capa).",
        "mar": "Ría vs atlántico vs sierra.",
        "clima": "compatible zona; Ribeira mm → needs decision.",
        "eliminar": ["€ hard", "Ribeira 1250 mm sin fuente"],
        "conservar": ["Identidad monte+mar", "Encaja Boiro/A Pobra"],
        "no_inventar": ["Media precio", "Hospital único para los seis"],
        "v1_p4": "Geografía; cifras V1 fuera.",
        "resultado": "LISTA_CURSOR38",
    },
    "golfo-artabro-e-ferrol": {
        "estado": "CLIMA_1939_ZONA_VS_2050_MUN · PRECIOS_ALINEADOS · P4_FUERTE",
        "contradicciones": [
            "zonas.json solHoras=1939 (Alvedro) vs municipios 1950–2050; prosa renderiza 1939 vía {zona.solHoras}."
        ],
        "agregados": [
            "No promediar 1939↔2050. Decisión CURSOR_38/clima: mantener Alvedro etiquetado O rebasar fila zona — NO inventar media."
        ],
        "duplicaciones": ["Precios Idealista ago-2026 alinean capa (excepción positiva). Totales A/B derivados OK si se etiquetan."],
        "generalizaciones": ["No atribuir playa Coruña a Oleiros/Sada sin microzona."],
        "p4": [
            "Ciudad atlántica vs Ferrol arsenal",
            "Oleiros microzonas (Santa Cruz/Mera/Perillo)",
            "Ría vs Doniños (salida)",
            "Doble polo Coruña/Ferrol",
            "Alvedro vs Lavacolla",
        ],
        "cotidiana": "Coruña/Ferrol autónomos; Bergondo/Miño más coche; Oleiros microzona.",
        "precio": "Mantener alineación o derivar solo de TablaPrecios; no inventar.",
        "sanidad": "CHUAC / Arquitecto Marcide — contrastes.",
        "mar": "Orzán ≠ ría ≠ Doniños.",
        "clima": "needs decision (1939 zona vs 2050 mun). despejados 49 deuda metodológica.",
        "eliminar": ["Cualquier eco de «2050 en prosa municipal» mezclado sin etiqueta", "Cascadas sol"],
        "conservar": ["Etiqueta Alvedro si se mantiene 1939", "Microzonas Oleiros", "Encaja"],
        "no_inventar": ["Media sol zona", "Unificar playas"],
        "v1_p4": "Identidad golfo; cifras clima V1 no autoridad.",
        "resultado": "LISTA_CURSOR38 · excepción clima Golfo (aislada, no bloqueante)",
    },
    "a-marina": {
        "estado": "ND_XOVE_INVENTADO · ALGUNOS_€_OK · SERVICIOS_X10_DESFASADOS",
        "contradicciones": [
            "Xove ~950 con precioM2 null.",
            "Barreiros ~1150 vs 1732; O Vicedo ~900 vs 1093.",
            "Servicios x/10 en prosa ≠ capa (Ribadeo 7 vs 8, etc.).",
        ],
        "agregados": ["No media € zona. «~1800 Foz+Ribadeo» banda cualitativa OK si no se fija."],
        "duplicaciones": ["Viveiro/Cervo/Foz/Ribadeo € alinean; oeste no."],
        "generalizaciones": ["As Catedrais ≠ playa cotidiana de villa Ribadeo."],
        "p4": [
            "Tres rías + Catedrais",
            "Alcoa San Ciprián",
            "Semana Santa Viveiro",
            "Oeste industrial vs este costa media",
            "Frontera Eo",
            "Hospital en Burela",
        ],
        "cotidiana": "Villas más autónomas; Barreiros/Xove/Vicedo coche; FEVE nominal.",
        "precio": "PROHIBIDO € Xove. Actualizar o retirar oeste. Conservar este si sigue = capa.",
        "sanidad": "Hospital da Mariña; Jarrio convenio Ribadeo — capa.",
        "mar": "Ría vs cantábrico abierto vs Catedrais peaje agosto.",
        "clima": "compatible bindings; temp extremos editorial → needs decision si se cifran.",
        "eliminar": ["€ Xove", "€ oeste obsoletos", "Lista servicios x/10 desfasada"],
        "conservar": ["Geografía tres rías", "Alcoa peaje", "Encaja"],
        "no_inventar": ["Xove €", "Media zona", "Hospital privado «más cercano» sin capa"],
        "v1_p4": "Catedrais/ría; precios V1 selectivos.",
        "resultado": "LISTA_CURSOR38 · excepción ND Xove",
    },
    "asturias-occidente": {
        "estado": "PRECIOS_OBSOLETOS · TAPIA_GRAVE · CLIMA_OK",
        "contradicciones": [
            "Tapia 1350 vs 2200; Castropol 1050 vs 1295; Navia 1100 vs 1384; Luarca 1300 vs 1256."
        ],
        "agregados": ["«Franja asequible» ya no vale para Tapia."],
        "duplicaciones": ["€ + totales 3hab."],
        "generalizaciones": [],
        "p4": [
            "Villa blanca Luarca",
            "Surf Tapia",
            "Eo/Ribadeo apoyo Castropol",
            "Puerto de Vega",
            "Indianos",
            "Jarrio como ancla",
        ],
        "cotidiana": "Cuatro villas distintas; coche entre ellas; invierno fino.",
        "precio": "Retirar todos los hard €/totales.",
        "sanidad": "Jarrio minutos ≈ capa; aeropuerto Asturias — capa.",
        "mar": "Penarronda/Frexulfe/Vega — conservar.",
        "clima": "compatible; niebla jerárquica → needs decision vs campos mun.",
        "eliminar": ["€ hard", "Totales"],
        "conservar": ["Cuatro escalas", "Encaja", "Topónimos"],
        "no_inventar": ["Media zona", "Niebla sin soporte"],
        "v1_p4": "Identidad villas; precios fuera.",
        "resultado": "LISTA_CURSOR38",
    },
    "asturias-centro": {
        "estado": "ND_MUROS_INVENTADO · SALINAS_GRAVE · CLIMA_OK",
        "contradicciones": [
            "Muros ~1100 con precioM2 null.",
            "Salinas 1700 vs 3226; Luanco 1800 vs 2379; Gijón 2300 vs 2696; Cudillero 1400 vs 1636.",
        ],
        "agregados": ["Franja mm 1000–1150 vs zona 1050 — banda floja."],
        "duplicaciones": ["€ + totales; muchos x/10."],
        "generalizaciones": ["Avilés como ancla logística (fuera de zona) OK como contexto."],
        "p4": [
            "Cudillero vs El Pito",
            "Salinas + aeropuerto",
            "San Lorenzo / Peñas",
            "Aboño/Avilés aire",
            "Logística HUCA/Avilés/Gijón",
            "Estuario Muros/Soto",
        ],
        "cotidiana": "Gijón ciudad; Salinas villa-playa; Cudillero foto vs vivir arriba.",
        "precio": "PROHIBIDO € Muros. Retirar Salinas 1700 y resto hard.",
        "sanidad": "Minutos ≈ capa; Palma verano Asturias.",
        "mar": "Cudillero playa no generalizable — ya matizado.",
        "clima": "compatible; ábrego/spikes → needs decision.",
        "eliminar": ["€ Muros", "Todo hard €", "Totales"],
        "conservar": ["Tesis logística", "Peaje industria", "Encaja"],
        "no_inventar": ["Muros €", "Media zona"],
        "v1_p4": "Logística; precios fuera.",
        "resultado": "LISTA_CURSOR38 · excepción ND Muros",
    },
    "asturias-oriente": {
        "estado": "PRECIOS_OBSOLETOS · CLIMA_OK · P4_FUERTE",
        "contradicciones": [
            "Villaviciosa 1500 vs 1864; Ribadesella 2200 vs 2632; Llanes 2100 vs 2391."
        ],
        "agregados": [],
        "duplicaciones": ["€ + totales."],
        "generalizaciones": [],
        "p4": [
            "Montaña al mar (Sueve/Cuera/Picos)",
            "Sella peaje",
            "Gulpiyuri / Fitu",
            "Indianos / Lastres",
            "Agosto Llanes/Ribadesella ×5–8",
            "Frontera Colombres",
        ],
        "cotidiana": "Villas; Villaviciosa sin playa en villa (Rodiles ~12′).",
        "precio": "Retirar hard €.",
        "sanidad": "Preferir orden capa (p.ej. Llanes Palma vía Santander mejor que solo Asturias).",
        "mar": "Calas vs ría Villaviciosa.",
        "clima": "compatible",
        "eliminar": ["€ hard", "Totales"],
        "conservar": ["Paisaje", "Peaje agosto", "Encaja"],
        "no_inventar": ["Media zona", "Sanidad privada sin capa"],
        "v1_p4": "Paisaje oriente; precios fuera.",
        "resultado": "LISTA_CURSOR38",
    },
    "cantabria-occidental": {
        "estado": "PRECIOS_MUY_OBSOLETOS · CLIMA_OK · LOGISTICA_FUERTE",
        "contradicciones": [
            "Comillas 2400 vs 3722; Santander 2600 vs 3323; SVB/Suances/Liencres desvíos fuertes."
        ],
        "agregados": ["Ranking «mejor hospital+aero+seguridad» — cualitativo; criminalidad Piélagos needs decision."],
        "duplicaciones": ["€ + totales."],
        "generalizaciones": ["Santillana/Altamira salida OK, no municipio 83."],
        "p4": [
            "Valdecilla + Seve + Palma casi todo el año",
            "Dunas Liencres / Costa Quebrada",
            "Oyambre / Capricho",
            "Suances villa-playa",
            "Santander bahía",
            "Agosto peaje Comillas/SVB",
        ],
        "cotidiana": "Capital vs villas turísticas invierno fino.",
        "precio": "Retirar todos hard €; Liencres relativo menos caro en capa.",
        "sanidad": "Valdecilla / Seve — conservar tesis sin minutos de más.",
        "mar": "Ría SVB vs dunas vs Sardinero.",
        "clima": "compatible; ábrego → needs decision.",
        "eliminar": ["€ hard", "Totales", "Stats criminalidad sin fuente"],
        "conservar": ["Tesis logística", "Dunas", "Encaja"],
        "no_inventar": ["Media zona", "Índices seguridad"],
        "v1_p4": "Bahía/dunas; precios fuera.",
        "resultado": "LISTA_CURSOR38",
    },
    "cantabria-oriental": {
        "estado": "PRECIOS_OBSOLETOS · BILBAO_PALMA_OK · P4_FUERTE",
        "contradicciones": [
            "Laredo 2100 vs 2951; Ribamontán/Noja 2300 vs 3535/3296; Castro 2400 vs 2861."
        ],
        "agregados": [],
        "duplicaciones": ["€ + totales."],
        "generalizaciones": ["Cruces usable ≠ adscripción — tensar prosa."],
        "p4": [
            "Santoña trabajo/anchoas vs Noja resort vacío oct–mayo",
            "Lancha Somo",
            "Buciero",
            "Salvé + hospital Laredo",
            "Castro–Bilbao 35′ Palma todo el año",
        ],
        "cotidiana": "Noja estacional fuerte; Santoña año; Castro dormitorio Bizkaia.",
        "precio": "Retirar hard €; Santoña relativo más contenido (2120).",
        "sanidad": "Laredo / Valdecilla / Bilbao — capa; no vender Cruces como circuito cantábrico por defecto.",
        "mar": "Surf chalets vs puerto vs Salvé.",
        "clima": "compatible (Castro 1650 mínimo tabla).",
        "eliminar": ["€ hard", "Totales"],
        "conservar": ["Contraste Noja/Santoña", "Bilbao/Palma", "Encaja"],
        "no_inventar": ["Media zona", "Cruces default"],
        "v1_p4": "Identidad oriental; precios fuera.",
        "resultado": "LISTA_CURSOR38",
    },
    "alto-minho": {
        "estado": "ND_AFIFE_INVENTADO · RANKING_MOLEDO_FALSO · CLIMA_OK",
        "contradicciones": [
            "Afife-Carreço 2100 con precioM2 null.",
            "«Moledo el más caro 2300» vs capa Moledo 1909 < Âncora 2692 < Viana 2337.",
        ],
        "agregados": ["Claims seguridad/coste vida PT — needs decision / no capa."],
        "duplicaciones": ["€ + totales (incl. Afife)."],
        "generalizaciones": ["Valença/Cerveira/PdL sin playa marítima — capa."],
        "p4": [
            "Sol + granito + monte (Arga)",
            "Nortada",
            "Âncora abrigado",
            "Fortaleza Valença / pie en dos países",
            "Camino / Feiras Novas",
            "Seguro privado portugués",
            "Mar frío 16–18",
        ],
        "cotidiana": "Viana cabecera; Afife coche; río vs océano.",
        "precio": "PROHIBIDO € Afife. Retirar ranking Moledo; actualizar resto.",
        "sanidad": "Santa Luzia / Bertiandos; Palma Porto verano + Santiago a menudo mejor — no subjugar Santiago.",
        "mar": "Miño vs océano; frío; nortada terraza.",
        "clima": "compatible; mm interior hard → needs decision.",
        "eliminar": ["€ Afife", "Moledo-as-dearest", "Totales"],
        "conservar": ["Tesis sol+granito", "Nortada", "Encaja"],
        "no_inventar": ["Afife €", "Fiscalidad NHR cerrada", "Media zona"],
        "v1_p4": "Granito/Camino; precios fuera.",
        "resultado": "LISTA_CURSOR38 · excepción ND Afife",
    },
    "litoral-norte": {
        "estado": "PRECIOS_OBSOLETOS · LLUVIA_HARD_DESFASADA · CLIMA_SOL_OK",
        "contradicciones": [
            "Esposende 2300 vs 2462; Póvoa/Vila 2600 vs 2730/2875.",
            "Hard «1200–1300 mm / 105–108 días / julio–agosto ~2 días» vs zona lluvia.verano 3–5.",
        ],
        "agregados": ["Scores «parecido Mallorca 2/5–3/5» editoriales."],
        "duplicaciones": ["€ + totales; mm hard."],
        "generalizaciones": [],
        "p4": [
            "Máximo sol tabla (~2550)",
            "Porto 15–35′",
            "Costa llana sin monte",
            "Nortada",
            "Mar frío",
            "Tres escalas ciudad-balneario",
        ],
        "cotidiana": "Más autónomas que aldeas Minho; coche baja en capa.",
        "precio": "Retirar hard €/totales.",
        "sanidad": "Hospital Esposende: prosa Póvoa/Vila vs capa vaga — needs decision; no inventar.",
        "mar": "Llano atlántico; sin Arga detrás.",
        "clima": "sol/despejados compatible; mm/días hard obsolete/needs decision.",
        "eliminar": ["€ hard", "mm/días hard contradictorios", "Scores 2/5 sin base"],
        "conservar": ["Tesis sol+Porto", "Nortada", "Encaja Palma solo verano"],
        "no_inventar": ["Media zona", "Hospital preciso sin capa"],
        "v1_p4": "Sol/Porto; cifras lluvia V1 no.",
        "resultado": "LISTA_CURSOR38",
    },
}


def bullets(xs: list[str]) -> str:
    if not xs:
        return "- (ninguno material)\n"
    return "".join(f"- {x}\n" for x in xs)


def main() -> None:
    lines: list[str] = []
    a = lines.append

    a("# Fuentes para reescribir las 16 zonas (2026)\n")
    a("**Bloque:** CURSOR_37 — auditoría + paquete de implementación. **No** reescribe relatos de zona.\n")
    a("**No** modifica relatos municipales 83/83 ni V1 99/99.\n")
    a("**Autoridad factual:** capa municipal 2026 (`municipios-*.json` / v15 sync) + campos clima de `zonas.json` cuando se usen con etiqueta.\n")
    a("**No** inventar medias de zona, rankings, ni precios para n.d. (Vilaboa, Xove, Muros de Nalón, Afife-Carreço).\n")
    a("**Clima:** despejados/cubiertos = NO AUTO (ver `docs/AUDITORIA_CLIMA_V15_WEB.md`). Este bloque **no corrige** clima.\n")
    a("**Siguiente:** CURSOR_38 implementa las 16 en un macrobloque usando este documento.\n")
    a("\n---\n\n")

    a("## 1. Precondición (CURSOR_37)\n\n")
    a("- Rama: `revision-2026-09-21`\n")
    a("- HEAD de partida esperado: `3f98b0b` (Rewrite remaining Galicia narratives)\n")
    a("- main: `7302494` intacta\n")
    a("- Municipios actuales: 83/83 coherentes post CURSOR_36\n")
    a("- V1: 83 municipios + 16 zonas = 99/99\n")
    a("- QA previo: qa_master OK · sync --check OK · qa_v1 OK · build 207 OK\n")
    a("\n---\n\n")

    a("## 2. Universo 16/16\n\n")
    a("| # | id | nombre | n mun | relato | V1 | match nombres |\n|---|---|---|---:|---|---|---|\n")
    for i, row in enumerate(inv["inventory"], 1):
        a(
            f"| {i} | `{row['id']}` | {row['nombre']} | {row['n_mun']} | `{row['relato']}` | `{row['v1']}` | {row['municipios_match']} |\n"
        )
    a(f"\n**Cobertura municipios:** {inv['n_municipios_json']}/83 · solo_zonas={inv['names_only_in_zonas']} · solo_json={inv['names_only_in_mun_json']} · dups={inv['duplicate_names_zonas']}\n")
    a(f"**`web/public/data/zonas.json` idéntico a `web/src/data/zonas.json`:** {inv['public_zonas_json_identical']}\n")
    a("\n---\n\n")

    a("## 3. Arquitectura / fuentes\n\n")
    a("### Relatos de zona (producto actual)\n")
    a("- Un componente React por zona: `web/src/components/Relato*.tsx` (16).\n")
    a("- Router: `web/src/app/zona/[id]/page.tsx` → switch `RelatoZona`.\n")
    a("- **No** existen `lib/relatos-zona-*.ts`. Los `lib/relatos-*.ts` son **municipales** (protegidos).\n")
    a("- Widgets habituales: `TablaPrecios`, `EnlaceIdealista`, `Encaja`, `MunicipiosZonaFin`, `Foto`, mapas cabecera.\n")
    a("- Clima en prosa: casi siempre interpola `{zona.solHoras|despejados|cubiertos|lluvia*}` desde `zonas.json`.\n")
    a("- Precios: muchas zonas **hardcodean** €/m² municipales obsoletos además de la tabla.\n\n")
    a("### Datos\n")
    a("- `web/src/data/zonas.json` (+ copia `web/public/data/zonas.json`): clima agregado + lista nombres municipios + mallorca.\n")
    a("- `web/src/data/municipios-{zonaId}.json`: capa 2026 completa (precios, sanidad, Palma, playa, coche…).\n")
    a("- V1 zonas: `web/src/data/v1/zonas/{id}.json` (+ sources `v1/sources/zonas/{id}.tsx.txt`).\n")
    a("- Guía clima: `docs/AUDITORIA_CLIMA_V15_WEB.md`, `docs/PROPAGACION_MASTER_V15_A_WEB.md`.\n")
    a("- Estudio: `docs/estudio_zonas.md` (contexto; no autoridad frente a 2026).\n\n")
    a("### Artefactos de esta auditoría\n")
    a("- `output/_cursor37_inventory.json`, `_cursor37_matrix.json`, `_cursor37_price_conflicts.json` (trabajo; no staging obligatorio).\n")
    a("- Scripts: `scripts/_cursor37_inventory.py`, `_cursor37_price_scan.py`.\n")
    a("\n---\n\n")

    a("## 4. Secciones por zona (16/16)\n\n")
    for i, row in enumerate(inv["inventory"], 1):
        zid = row["id"]
        n = NOTES[zid]
        a(f"### 4.{i} {row['nombre']} (`{zid}`)\n\n")
        a(f"**Municipios:** {', '.join(row['municipios_capa'])}\n\n")
        a(f"**Estado factual:** {n['estado']}\n\n")
        a(f"**Resultado auditoría:** {n['resultado']}\n\n")
        a("**Clima zona (`zonas.json`):** ")
        c = row["clima_zona"]
        a(
            f"solHoras={c['solHoras']}, despejados={c['despejados']}, cubiertos={c['cubiertos']}, "
            f"lluviaDias={c['lluviaDias']}, lluviaMm={c['lluviaMm']}, tempVerano={c['tempVerano']}, "
            f"clase={c['clase']}, calorAprieta={c['calorAprieta']}\n\n"
        )
        a(f"**solHoras municipales (set):** {row['solHoras_municipales_set']}\n\n")
        a("**Precios capa:**\n")
        for p in row["precios_capa"]:
            val = "n.d." if p["nd"] else p["precioM2"]
            a(f"- {p['nombre']} (`{p['slug']}`): {val}\n")
        a("\n**Conflictos precio detectados (scan vs capa):**\n")
        pz = prices_by_z.get(zid, [])
        if not pz:
            a("- (sin pares nombre↔€/m² parseados; puede haber ranking cualitativo — ver contradicciones)\n")
        else:
            for p in pz:
                a(
                    f"- {p['status']}: narrativo {p['narrativo']} vs capa {p['capa']} ({p['nombre']})\n"
                )
        a("\n#### Contradicciones (A)\n")
        a(bullets(n["contradicciones"]))
        a("\n#### Agregados dudosos (B)\n")
        a(bullets(n["agregados"]))
        a("\n#### Duplicaciones obsoletas (C)\n")
        a(bullets(n["duplicaciones"]))
        a("\n#### Generalizaciones territoriales (D)\n")
        a(bullets(n["generalizaciones"]))
        a("\n#### P4 a conservar (J)\n")
        a(bullets(n["p4"]))
        a(f"\n#### Vida cotidiana / estructura\n\n{n['cotidiana']}\n\n")
        a(f"#### Precio / vivienda\n\n{n['precio']}\n\n")
        a(f"#### Sanidad / conexiones\n\n{n['sanidad']}\n\n")
        a(f"#### Mar / río / playa / paseo\n\n{n['mar']}\n\n")
        a(f"#### Clima\n\n{n['clima']}\n\n")
        a("#### Qué eliminar\n")
        a(bullets(n["eliminar"]))
        a("\n#### Qué conservar\n")
        a(bullets(n["conservar"]))
        a("\n#### Qué NO inventar\n")
        a(bullets(n["no_inventar"]))
        a(f"\n#### V1\n\nArchivo: `{row['v1']}`. {n['v1_p4']}\n\n")
        a("---\n\n")

    a("## 5. Matriz resumen 16/16\n\n")
    a("| zona | n | precios_scan≠OK | vilaboa€ | 1939 | clima | resultado |\n|---|---:|---:|---|---|---|---|\n")
    for m in matrix:
        zid = m["id"]
        bad = sum(1 for p in prices_by_z.get(zid, []) if p["status"] != "OK")
        a(
            f"| `{zid}` | {m['n_mun']} | {bad} | {m['vilaboa_price']} | zona_sol={m['sol_zona']} | "
            f"{NOTES[zid]['clima'].split('.')[0]} | {NOTES[zid]['resultado']} |\n"
        )
    a("\n---\n\n")

    a("## 6. Deudas transversales\n\n")
    a("1. **Precios hardcodeados en relatos de zona:** casi todas las zonas (excepto Baixo sin € y Golfo bien alineado) arrastran €/m² municipales pre-v15. CURSOR_38 debe **retirarlos** o regenerarlos solo desde capa/TablaPrecios — **sin** inventar media de zona.\n")
    a("2. **n.d. municipales:** Vilaboa, Xove, Muros de Nalón, Afife-Carreço — hoy aparecen € inventados en prosa de zona (Vigo, A Mariña, Asturias Centro, Alto Minho). **Prohibido** perpetuar.\n")
    a("3. **Clima despejados/cubiertos:** NO AUTO; no corregir metodología en 37/38 salvo decisión explícita posterior (`AUDITORIA_CLIMA_V15_WEB.md` opciones A–D).\n")
    a("4. **Golfo 1939 vs 2050:** `zonas.json` 1939 (Alvedro) ≠ mun 2050. Decisión etiquetada; no promediar.\n")
    a("5. **mm / días hard municipales** en varias zonas Rías Baixas / Litoral Norte: retirar si no hay fuente.\n")
    a("6. **Servicios x/10 en prosa de zona:** a menudo desfasados vs capa `servicios` — preferir cualitativo o alinear.\n")
    a("7. **Totales € vivienda** derivados de €/m² obsoleto: retirar con el €/m².\n")
    a("8. **V1:** inmutable; útil solo como P4/escena; nunca autoridad factual 2026.\n")
    a("9. **Municipales 83:** protegidos; CURSOR_38 no los toca.\n")
    a("\n---\n\n")

    a("## 7. Contrato de reescritura CURSOR_38\n\n")
    a("1. Un solo macrobloque para las **16** zonas.\n")
    a("2. Seguir estructura de sección existente (Dónde está → Tiempo → Cómo se vive → Mar… → Casa+TablaPrecios → Encaja → MunicipiosZonaFin).\n")
    a("3. Relato de zona = mapa mental + contrastes internos + P4; **no** concatenar fichas municipales.\n")
    a("4. Hechos estructurados: capa mun + `zonas.json` clima con honestidad metodológica.\n")
    a("5. Retirar €/m² narrativos obsoletos; no inventar agregados; n.d. = n.d.\n")
    a("6. Conservar fotos/pies/escalas locales salvo corrección factual mínima.\n")
    a("7. Mantener enlace actual↔V1 en página de zona.\n")
    a("8. No main / no merge / no deploy.\n")
    a("9. Excepciones aisladas (no parten el macrobloque): ND Vilaboa/Xove/Muros/Afife; clima Golfo 1939; despejados/cubiertos.\n")
    a("10. Investigación externa: **no obligatoria** para v1 de CURSOR_38 si se omite lo no soportado.\n")
    a("\n---\n\n")

    a("## 8. Archivos que CURSOR_38 podrá modificar\n\n")
    for row in inv["inventory"]:
        a(f"- `{row['relato']}`\n")
    a("\nOpcional solo si una decisión de clima lo exige (fuera del default): `web/src/data/zonas.json` + `web/public/data/zonas.json` — **no** por iniciativa para «arreglar» despejados.\n")
    a("\nScripts auxiliares de implementación OK si son reutilizables.\n")
    a("\n---\n\n")

    a("## 9. Archivos protegidos (CURSOR_38)\n\n")
    a("- Todos los relatos municipales: `web/src/components/RelatoMunicipio.tsx` + `web/src/lib/relatos-*.ts`\n")
    a("- `web/src/data/v1/**` (99 entradas)\n")
    a("- `web/src/data/municipios-*.json` / master XLSX/CSV\n")
    a("- UI de producto salvo bug bloqueante documentado (preferencia: no tocar)\n")
    a("\n---\n\n")

    a("## 10. Decisión CURSOR_38\n\n")
    a("**Implementación 16/16 en un macrobloque: SÍ.**\n\n")
    a("Excepciones aisladas (no bloquean el lote):\n")
    a("- n.d. precio en prosa de zona (Vilaboa, Xove, Muros, Afife)\n")
    a("- Golfo sol 1939 vs mun 2050 (decisión etiquetada)\n")
    a("- despejados/cubiertos (deuda metodológica global)\n")
    a("\nInvestigación externa obligatoria: **no**.\n")
    a("\nFIN CURSOR_37 PACKAGE\n")

    OUT_MD.write_text("".join(lines), encoding="utf-8")
    print("WROTE", OUT_MD, "chars", len("".join(lines)))


if __name__ == "__main__":
    main()
