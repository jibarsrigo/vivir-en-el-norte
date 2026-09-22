# Fuentes para reescribir las 16 zonas (2026)
**Bloque:** CURSOR_37 — auditoría + paquete de implementación. **No** reescribe relatos de zona.
**No** modifica relatos municipales 83/83 ni V1 99/99.
**Autoridad factual:** capa municipal 2026 (`municipios-*.json` / v15 sync) + campos clima de `zonas.json` cuando se usen con etiqueta.
**No** inventar medias de zona, rankings, ni precios para n.d. (Vilaboa, Xove, Muros de Nalón, Afife-Carreço).
**Clima:** despejados/cubiertos = NO AUTO (ver `docs/AUDITORIA_CLIMA_V15_WEB.md`). Este bloque **no corrige** clima.
**Siguiente:** CURSOR_38 implementa las 16 en un macrobloque usando este documento.

---

## 1. Precondición (CURSOR_37)

- Rama: `revision-2026-09-21`
- HEAD de partida esperado: `3f98b0b` (Rewrite remaining Galicia narratives)
- main: `7302494` intacta
- Municipios actuales: 83/83 coherentes post CURSOR_36
- V1: 83 municipios + 16 zonas = 99/99
- QA previo: qa_master OK · sync --check OK · qa_v1 OK · build 207 OK

---

## 2. Universo 16/16

| # | id | nombre | n mun | relato | V1 | match nombres |
|---|---|---|---:|---|---|---|
| 1 | `baixo-mino` | Baixo Miño | 5 | `web/src/components/RelatoBaixoMino.tsx` | `web/src/data/v1/zonas/baixo-mino.json` | True |
| 2 | `val-minor` | Val Miñor | 3 | `web/src/components/RelatoValMinor.tsx` | `web/src/data/v1/zonas/val-minor.json` | True |
| 3 | `vigo-e-ria` | Vigo e ría | 4 | `web/src/components/RelatoVigoERia.tsx` | `web/src/data/v1/zonas/vigo-e-ria.json` | True |
| 4 | `o-morrazo` | O Morrazo | 4 | `web/src/components/RelatoOMorrazo.tsx` | `web/src/data/v1/zonas/o-morrazo.json` | True |
| 5 | `pontevedra-e-sanxenxo` | Pontevedra e Sanxenxo | 4 | `web/src/components/RelatoPontevedraESanxenxo.tsx` | `web/src/data/v1/zonas/pontevedra-e-sanxenxo.json` | True |
| 6 | `o-salnes` | O Salnés | 5 | `web/src/components/RelatoOSalnes.tsx` | `web/src/data/v1/zonas/o-salnes.json` | True |
| 7 | `barbanza-e-noia` | Barbanza e Noia | 6 | `web/src/components/RelatoBarbanzaENoia.tsx` | `web/src/data/v1/zonas/barbanza-e-noia.json` | True |
| 8 | `golfo-artabro-e-ferrol` | Golfo Ártabro e Ferrol | 7 | `web/src/components/RelatoGolfoArtabroEFerrol.tsx` | `web/src/data/v1/zonas/golfo-artabro-e-ferrol.json` | True |
| 9 | `a-marina` | A Mariña | 8 | `web/src/components/RelatoAMarina.tsx` | `web/src/data/v1/zonas/a-marina.json` | True |
| 10 | `asturias-occidente` | Asturias Occidente | 4 | `web/src/components/RelatoAsturiasOccidente.tsx` | `web/src/data/v1/zonas/asturias-occidente.json` | True |
| 11 | `asturias-centro` | Asturias Centro | 7 | `web/src/components/RelatoAsturiasCentro.tsx` | `web/src/data/v1/zonas/asturias-centro.json` | True |
| 12 | `asturias-oriente` | Asturias Oriente | 5 | `web/src/components/RelatoAsturiasOriente.tsx` | `web/src/data/v1/zonas/asturias-oriente.json` | True |
| 13 | `cantabria-occidental` | Cantabria Occidental | 5 | `web/src/components/RelatoCantabriaOccidental.tsx` | `web/src/data/v1/zonas/cantabria-occidental.json` | True |
| 14 | `cantabria-oriental` | Cantabria Oriental | 5 | `web/src/components/RelatoCantabriaOriental.tsx` | `web/src/data/v1/zonas/cantabria-oriental.json` | True |
| 15 | `alto-minho` | Alto Minho (PT) | 8 | `web/src/components/RelatoAltoMinho.tsx` | `web/src/data/v1/zonas/alto-minho.json` | True |
| 16 | `litoral-norte` | Litoral Norte (PT) | 3 | `web/src/components/RelatoLitoralNorte.tsx` | `web/src/data/v1/zonas/litoral-norte.json` | True |

**Cobertura municipios:** 83/83 · solo_zonas=[] · solo_json=[] · dups=[]
**`web/public/data/zonas.json` idéntico a `web/src/data/zonas.json`:** True

---

## 3. Arquitectura / fuentes

### Relatos de zona (producto actual)
- Un componente React por zona: `web/src/components/Relato*.tsx` (16).
- Router: `web/src/app/zona/[id]/page.tsx` → switch `RelatoZona`.
- **No** existen `lib/relatos-zona-*.ts`. Los `lib/relatos-*.ts` son **municipales** (protegidos).
- Widgets habituales: `TablaPrecios`, `EnlaceIdealista`, `Encaja`, `MunicipiosZonaFin`, `Foto`, mapas cabecera.
- Clima en prosa: casi siempre interpola `{zona.solHoras|despejados|cubiertos|lluvia*}` desde `zonas.json`.
- Precios: muchas zonas **hardcodean** €/m² municipales obsoletos además de la tabla.

### Datos
- `web/src/data/zonas.json` (+ copia `web/public/data/zonas.json`): clima agregado + lista nombres municipios + mallorca.
- `web/src/data/municipios-{zonaId}.json`: capa 2026 completa (precios, sanidad, Palma, playa, coche…).
- V1 zonas: `web/src/data/v1/zonas/{id}.json` (+ sources `v1/sources/zonas/{id}.tsx.txt`).
- Guía clima: `docs/AUDITORIA_CLIMA_V15_WEB.md`, `docs/PROPAGACION_MASTER_V15_A_WEB.md`.
- Estudio: `docs/estudio_zonas.md` (contexto; no autoridad frente a 2026).

### Artefactos de esta auditoría
- `output/_cursor37_inventory.json`, `_cursor37_matrix.json`, `_cursor37_price_conflicts.json` (trabajo; no staging obligatorio).
- Scripts: `scripts/_cursor37_inventory.py`, `_cursor37_price_scan.py`.

---

## 4. Secciones por zona (16/16)

### 4.1 Baixo Miño (`baixo-mino`)

**Municipios:** A Guarda, Oia, O Rosal, Tomiño, Tui

**Estado factual:** PRECIO_RANK_OBSOLETO · CLIMA_OK · P4_FUERTE

**Resultado auditoría:** LISTA_CURSOR38 · excepción precio-rank

**Clima zona (`zonas.json`):** solHoras=2400, despejados=75, cubiertos=115, lluviaDias=120, lluviaMm=1500, tempVerano=20.0, clase=Más favorable, calorAprieta=julio–agosto

**solHoras municipales (set):** [2350, 2400, 2450]

**Precios capa:**
- A Guarda (`a-guarda`): 1117
- Oia (`oia`): 1370
- O Rosal (`o-rosal`): 1190
- Tomiño (`tomino`): 1498
- Tui (`tui`): 1541

**Conflictos precio detectados (scan vs capa):**
- (sin pares nombre↔€/m² parseados; puede haber ranking cualitativo — ver contradicciones)

#### Contradicciones (A)
- Gradiente narrativo «Tomiño más asequible… Oia la más cara» contradice capa: A Guarda 1117 < O Rosal 1190 < Oia 1370 < Tomiño 1498 < Tui 1541.

#### Agregados dudosos (B)
- «Vigo a media hora o tres cuartos» como si fuera uniforme; tiempos reales ~25–50′ según pueblo.

#### Duplicaciones obsoletas (C)
- Clima vía {zona.*} (bien). Sin €/m² hardcodeados (bien — TablaPrecios).

#### Generalizaciones territoriales (D)
- Portugal como hábito semanal: OK si no se promete para aldeas sin puente cercano.

#### P4 a conservar (J)
- Frontera Miño / Portugal a cinco minutos
- Valle (O Rosal) vs punta atlántica (A Guarda/Oia)
- Calor de vega Tui/Tomiño vs costa fresca
- Villa vs disperso (escala)
- Folón, Santa Trega, Aloia, Groba
- Noviembre vs agosto en Area Grande

#### Vida cotidiana / estructura

A Guarda/Tui a pie; Oia/Tomiño coche; O Rosal núcleo O Calvario + parras.

#### Precio / vivienda

No inventar media de zona. Corregir ranking o volver a cualitativo + TablaPrecios. No citar totales fuera de tabla.

#### Sanidad / conexiones

Cunqueiro ~25–50′; Peinador Palma verano / Santiago resto — alinear con capa municipal, sin cascada de minutos.

#### Mar / río / playa / paseo

Area Grande, Camposancos (estuario), O Muíño/Areeiros — glosar; no atribuir playa oceánica a todo el valle.

#### Clima

compatible (bindings zona). Interior heat = editorial. despejados/cubiertos = deuda metodológica transversal (no corregir aquí).

#### Qué eliminar
- Ranking de precios falso
- Minutos hospital/aero demasiado precisos si no están en capa

#### Qué conservar
- Mapa mental frontera
- Contraste valle/punta
- Encaja calor vs hospital
- Fotos/pies

#### Qué NO inventar
- Media €/m² de zona
- Nuevas playas
- Frecuencias de ferry/bus

#### V1

Archivo: `web/src/data/v1/zonas/baixo-mino.json`. V1 conserva escena frontera y escala; datos de precio/clima de V1 no son autoridad 2026.

---

### 4.2 Val Miñor (`val-minor`)

**Municipios:** Baiona, Nigrán, Gondomar

**Estado factual:** PRECIOS_HARD_OBSOLETOS · CLIMA_OK · P4_FUERTE

**Resultado auditoría:** LISTA_CURSOR38

**Clima zona (`zonas.json`):** solHoras=2500, despejados=78, cubiertos=110, lluviaDias=115, lluviaMm=1400, tempVerano=20.0, clase=Más favorable, calorAprieta=None

**solHoras municipales (set):** [2450, 2500]

**Precios capa:**
- Baiona (`baiona`): 2528
- Nigrán (`nigran`): 2909
- Gondomar (`gondomar`): 1286

**Conflictos precio detectados (scan vs capa):**
- CONTRADICCION: narrativo 2600 vs capa 2909 (Nigrán)
- OK: narrativo 2500 vs capa 2528 (Baiona)

#### Contradicciones (A)
- Nigrán ~2600 / Baiona ~2500 / Gondomar ~1700 vs capa 2909 / 2528 / 1286.

#### Agregados dudosos (B)
- No fabricar media de los tres.

#### Duplicaciones obsoletas (C)
- €/m² en prosa + TablaPrecios; clima vía zona OK.

#### Generalizaciones territoriales (D)
- (ninguno material)

#### P4 a conservar (J)
- Triple escala villa / urbanización-parroquia / valle
- Bahía vs Serra da Groba / Galiñeiro
- Vigo-en-la-semana
- Agosto Baiona 12k→~40k
- Patos/Panxón/América/Monteferro

#### Vida cotidiana / estructura

Baiona caminable; Nigrán/Gondomar más coche; humidex valle.

#### Precio / vivienda

Retirar 2600/2500/1700; dejar franjas cualitativas + tabla.

#### Sanidad / conexiones

Peinador 20–25′; Palma estacional — capa.

#### Mar / río / playa / paseo

Bahía abrigada vs olas Patos — conservar contraste.

#### Clima

compatible

#### Qué eliminar
- Cifras €/m² hard
- Notas tipo «alrededor de 6/10» si no se alinean con capa servicios

#### Qué conservar
- Triple escala
- Encaja
- Fiestas Arribada/San Xoán como peaje

#### Qué NO inventar
- Media zona
- «Los tres se viven a pie»

#### V1

Archivo: `web/src/data/v1/zonas/val-minor.json`. Conservar contraste bahía/monte; no reimportar precios V1.

---

### 4.3 Vigo e ría (`vigo-e-ria`)

**Municipios:** Vigo, Redondela, Soutomaior, Vilaboa

**Estado factual:** ND_VILABOA_INVENTADO · PRECIOS_OBSOLETOS · CLIMA_OK

**Resultado auditoría:** LISTA_CURSOR38 · excepción ND Vilaboa (aislada, no bloqueante)

**Clima zona (`zonas.json`):** solHoras=2250, despejados=72, cubiertos=118, lluviaDias=129, lluviaMm=1700, tempVerano=20.5, clase=Favorable, calorAprieta=None

**solHoras municipales (set):** [2250, 2350]

**Precios capa:**
- Vigo (`vigo`): 2591
- Redondela (`redondela`): 1499
- Soutomaior (`soutomaior`): 2111
- Vilaboa (`vilaboa`): n.d.

**Conflictos precio detectados (scan vs capa):**
- (sin pares nombre↔€/m² parseados; puede haber ranking cualitativo — ver contradicciones)

#### Contradicciones (A)
- «1.300 en Soutomaior y Vilaboa»: Soutomaior capa 2111; Vilaboa precioM2 null.
- Vigo ~2700 vs 2591 (desvío).

#### Agregados dudosos (B)
- mm 1700 hard duplica zona.lluviaMm.

#### Duplicaciones obsoletas (C)
- €/m² + totales derivados; x/10 servicios en prosa.

#### Generalizaciones territoriales (D)
- Peinador 10–15′ desde «los cuatro» — OK con matiz parroquia.

#### P4 a conservar (J)
- Cuatro escalas ciudad/villa/castillo-río/parroquia-marisma
- Cíes/Samil vs Cesantes vs Ulló
- Rande/AP-9 como peaje
- Redondela como equilibrio
- Vilaboa = coche + ensenada

#### Vida cotidiana / estructura

Vigo resuelve sin coche en muchos barrios; Vilaboa/Soutomaior coche.

#### Precio / vivienda

PROHIBIDO citar €/m² de Vilaboa. Actualizar o retirar Vigo/Soutomaior hardcodes.

#### Sanidad / conexiones

Cunqueiro vs Montecelo — contraste territorial útil.

#### Mar / río / playa / paseo

Playa urbana ≠ playa de ría ≠ marisma.

#### Clima

compatible (zona + sol mun hard alineados). Golfo-style 1939 N/A aquí.

#### Qué eliminar
- Cualquier precio Vilaboa
- Soutomaior 1300
- Totales inventados

#### Qué conservar
- Cuatro escalas
- Encaja
- San Simón

#### Qué NO inventar
- Media zona
- Mercado Vilaboa

#### V1

Archivo: `web/src/data/v1/zonas/vigo-e-ria.json`. Escalas y Rande; precios V1 obsoletos.

---

### 4.4 O Morrazo (`o-morrazo`)

**Municipios:** Cangas, Moaña, Bueu, Marín

**Estado factual:** PRECIOS_OBSOLETOS · CLIMA_OK · P4_FUERTE

**Resultado auditoría:** LISTA_CURSOR38

**Clima zona (`zonas.json`):** solHoras=2300, despejados=72, cubiertos=120, lluviaDias=125, lluviaMm=1525, tempVerano=20.0, clase=Favorable, calorAprieta=None

**solHoras municipales (set):** [2250, 2300]

**Precios capa:**
- Cangas (`cangas`): 2157
- Moaña (`moana`): 1608
- Bueu (`bueu`): 1908
- Marín (`marin`): 1539

**Conflictos precio detectados (scan vs capa):**
- CONTRADICCION: narrativo 1750 vs capa 2157 (Cangas)
- OK: narrativo 1600 vs capa 1608 (Moaña)

#### Contradicciones (A)
- Cangas ~1750 vs 2157; Bueu ~1500 vs 1908; Moaña/Marín ≈ OK.

#### Agregados dudosos (B)
- Totales 3hab derivados de €/m² obsoletos.

#### Duplicaciones obsoletas (C)
- €/m² + clima zona.

#### Generalizaciones territoriales (D)
- (ninguno material)

#### P4 a conservar (J)
- Doble cabecera Vigo/Pontevedra
- Barco vs puente
- Cangas mar vs Marín hospital
- Costa da Vela / Aldán / Cabo Udra / Ons
- Agosto en parroquias

#### Vida cotidiana / estructura

Centros más autónomos; parroquias coche; barco reduce Vigo para Cangas/Moaña.

#### Precio / vivienda

Retirar ladder 1750/1600/1500 y totales.

#### Sanidad / conexiones

Montecelo vs proximidad Marín — conservar trade-off sin minutos falsos.

#### Mar / río / playa / paseo

Ría vs costa exterior — no unificar.

#### Clima

compatible

#### Qué eliminar
- €/m² hard
- Totales derivados

#### Qué conservar
- Dual orientation
- Encaja
- Topónimos mar

#### Qué NO inventar
- Media zona
- Frecuencias ferry

#### V1

Archivo: `web/src/data/v1/zonas/o-morrazo.json`. Peninsula identity; precios V1 no.

---

### 4.5 Pontevedra e Sanxenxo (`pontevedra-e-sanxenxo`)

**Municipios:** Pontevedra, Poio, Sanxenxo, O Grove

**Estado factual:** PRECIOS_OBSOLETOS · MM_MUN_NO_JUSTIFICADOS · P4_MEDIO

**Resultado auditoría:** LISTA_CURSOR38

**Clima zona (`zonas.json`):** solHoras=2350, despejados=71, cubiertos=120, lluviaDias=122, lluviaMm=1400, tempVerano=19.8, clase=Favorable, calorAprieta=None

**solHoras municipales (set):** [2250, 2300, 2400]

**Precios capa:**
- Pontevedra (`pontevedra`): 2596
- Poio (`poio`): 1887
- Sanxenxo (`sanxenxo`): 3351
- O Grove (`o-grove`): 2500

**Conflictos precio detectados (scan vs capa):**
- DESVIO: narrativo 2300 vs capa 2500 (O Grove)

#### Contradicciones (A)
- Pontevedra ~1900 vs 2596; Sanxenxo ~2900 vs 3351; O Grove ~2300 vs 2500; Poio ~1900 ≈ 1887.

#### Agregados dudosos (B)
- mm municipales Sanxenxo 1300 / Grove 1250 / Pontevedra 1600 — no están en zonas.json; no inventar.

#### Duplicaciones obsoletas (C)
- €/m² + totales; clima zona + mm hard.

#### Generalizaciones territoriales (D)
- «Solo la capital prescinde del coche» — razonable.

#### P4 a conservar (J)
- Ciudad vs resort
- Poio como compromiso
- A Lanzada / istmo O Grove
- Agosto Sanxenxo
- Hospital vs playa

#### Vida cotidiana / estructura

Pontevedra caminable; costa exterior estacional y coche.

#### Precio / vivienda

Retirar hard €/m² y totales; TablaPrecios.

#### Sanidad / conexiones

Montecelo / Salnés para Grove — capa.

#### Mar / río / playa / paseo

Ría Lérez vs costa abierta Silgar–Lanzada.

#### Clima

zona compatible; mm mun → needs decision (retirar salvo fuente).

#### Qué eliminar
- € hard
- mm mun sin fuente
- Totales

#### Qué conservar
- Contraste ciudad/resort
- Encaja «no suma perfecta»

#### Qué NO inventar
- Media lluvia zona más fina que zona.lluviaMm
- Media precio

#### V1

Archivo: `web/src/data/v1/zonas/pontevedra-e-sanxenxo.json`. Estructura ciudad/costa; cifras V1 fuera.

---

### 4.6 O Salnés (`o-salnes`)

**Municipios:** Meaño, Cambados, A Illa de Arousa, Vilanova de Arousa, Vilagarcía de Arousa

**Estado factual:** PRECIOS_GRAVES · ILLA_SUBESTIMADA · CLIMA_ZONA_OK

**Resultado auditoría:** LISTA_CURSOR38

**Clima zona (`zonas.json`):** solHoras=2350, despejados=70, cubiertos=120, lluviaDias=118, lluviaMm=1350, tempVerano=19.5, clase=Favorable, calorAprieta=None

**solHoras municipales (set):** [2300, 2350]

**Precios capa:**
- Meaño (`meano`): 1013
- Cambados (`cambados`): 1432
- A Illa de Arousa (`a-illa-de-arousa`): 3012
- Vilanova de Arousa (`vilanova-de-arousa`): 1969
- Vilagarcía de Arousa (`vilagarcia-de-arousa`): 1779

**Conflictos precio detectados (scan vs capa):**
- DESVIO: narrativo 1500 vs capa 1432 (Cambados)
- DESVIO: narrativo 1700 vs capa 1779 (Vilagarcía)

#### Contradicciones (A)
- Meaño/Vilanova ~1350 vs 1013/1969; A Illa ~1900 vs 3012; Cambados/Vilagarcía ≈.

#### Agregados dudosos (B)
- Escalera mm mun 1350–1450 no justificada.

#### Duplicaciones obsoletas (C)
- €/m² + totales + clima.

#### Generalizaciones territoriales (D)
- No presentar Meaño como playa cotidiana (capa NO).

#### P4 a conservar (J)
- Albariño / valle
- Illa puente
- Vilagarcía cabecera vs Cambados villa
- Cinco escalas martes
- A Lanzada como salida no como playa de Meaño

#### Vida cotidiana / estructura

Vilagarcía/Cambados más autónomos; Meaño coche fuera de Dena.

#### Precio / vivienda

Retirar TODO hard €; Illa especialmente.

#### Sanidad / conexiones

Hospital do Salnés — capa.

#### Mar / río / playa / paseo

Ría ≠ océano; Illa vs valle.

#### Clima

compatible zona; mm mun retirar.

#### Qué eliminar
- Ladder €
- mm mun
- Totales

#### Qué conservar
- Cinco escalas
- Encaja
- Albariño

#### Qué NO inventar
- Media zona
- Meaño=playa

#### V1

Archivo: `web/src/data/v1/zonas/o-salnes.json`. Identidad vinícola/ría; precios V1 no.

---

### 4.7 Barbanza e Noia (`barbanza-e-noia`)

**Municipios:** Rianxo, Boiro, A Pobra do Caramiñal, Ribeira, Porto do Son, Noia

**Estado factual:** PRECIOS_OBSOLETOS · MM_RIBEIRA_DUDOSO · P4_FUERTE

**Resultado auditoría:** LISTA_CURSOR38

**Clima zona (`zonas.json`):** solHoras=2225, despejados=65, cubiertos=125, lluviaDias=121, lluviaMm=1350, tempVerano=19.5, clase=Favorable, calorAprieta=None

**solHoras municipales (set):** [2150, 2200, 2250]

**Precios capa:**
- Rianxo (`rianxo`): 959
- Boiro (`boiro`): 1306
- A Pobra do Caramiñal (`a-pobra-do-caraminal`): 1516
- Ribeira (`ribeira`): 1570
- Porto do Son (`porto-do-son`): 1525
- Noia (`noia`): 1221

**Conflictos precio detectados (scan vs capa):**
- CONTRADICCION: narrativo 1200 vs capa 959 (Rianxo)
- CONTRADICCION: narrativo 1300 vs capa 1516 (A Pobra)
- OK: narrativo 1350 vs capa 1306 (Boiro)
- DESVIO: narrativo 1500 vs capa 1570 (Ribeira)

#### Contradicciones (A)
- Rianxo 1200 vs 959; Porto do Son 1350 vs 1525; resto desvíos varios.

#### Agregados dudosos (B)
- «Ribeira 1250 mm, resto 1350» — no respaldado por zonas.json (1350).

#### Duplicaciones obsoletas (C)
- €/m² + totales.

#### Generalizaciones territoriales (D)
- Noia hospital → CHUS, no Barbanza — ya matizado; no unificar.

#### P4 a conservar (J)
- Monte + mar
- Arousa calm vs Corrubedo/Baroña atlántico
- Noia vs Barbanza hospital fork
- Seis escalas
- Franja relativamente asequible de Rías Baixas (cualitativo)

#### Vida cotidiana / estructura

Ribeira densa; Porto do Son coche; Boiro/A Pobra equilibrio.

#### Precio / vivienda

Retirar ladder; no media zona.

#### Sanidad / conexiones

Santiago 40–50′ / Palma casi todo el año — fuerza de zona (capa).

#### Mar / río / playa / paseo

Ría vs atlántico vs sierra.

#### Clima

compatible zona; Ribeira mm → needs decision.

#### Qué eliminar
- € hard
- Ribeira 1250 mm sin fuente

#### Qué conservar
- Identidad monte+mar
- Encaja Boiro/A Pobra

#### Qué NO inventar
- Media precio
- Hospital único para los seis

#### V1

Archivo: `web/src/data/v1/zonas/barbanza-e-noia.json`. Geografía; cifras V1 fuera.

---

### 4.8 Golfo Ártabro e Ferrol (`golfo-artabro-e-ferrol`)

**Municipios:** A Coruña, Oleiros, Sada, Bergondo, Miño, Ares, Ferrol

**Estado factual:** CLIMA_1939_ZONA_VS_2050_MUN · PRECIOS_ALINEADOS · P4_FUERTE

**Resultado auditoría:** LISTA_CURSOR38 · excepción clima Golfo (aislada, no bloqueante)

**Clima zona (`zonas.json`):** solHoras=1939, despejados=49, cubiertos=150, lluviaDias=130, lluviaMm=1014, tempVerano=19.0, clase=Intermedio, calorAprieta=None

**solHoras municipales (set):** [1950, 2000, 2050]

**Precios capa:**
- A Coruña (`a-coruna`): 3239
- Oleiros (`oleiros`): 2605
- Sada (`sada`): 1714
- Bergondo (`bergondo`): 1484
- Miño (`mino`): 1775
- Ares (`ares`): 1841
- Ferrol (`ferrol`): 1490

**Conflictos precio detectados (scan vs capa):**
- OK: narrativo 3239 vs capa 3239 (A Coruña)

#### Contradicciones (A)
- zonas.json solHoras=1939 (Alvedro) vs municipios 1950–2050; prosa renderiza 1939 vía {zona.solHoras}.

#### Agregados dudosos (B)
- No promediar 1939↔2050. Decisión CURSOR_38/clima: mantener Alvedro etiquetado O rebasar fila zona — NO inventar media.

#### Duplicaciones obsoletas (C)
- Precios Idealista ago-2026 alinean capa (excepción positiva). Totales A/B derivados OK si se etiquetan.

#### Generalizaciones territoriales (D)
- No atribuir playa Coruña a Oleiros/Sada sin microzona.

#### P4 a conservar (J)
- Ciudad atlántica vs Ferrol arsenal
- Oleiros microzonas (Santa Cruz/Mera/Perillo)
- Ría vs Doniños (salida)
- Doble polo Coruña/Ferrol
- Alvedro vs Lavacolla

#### Vida cotidiana / estructura

Coruña/Ferrol autónomos; Bergondo/Miño más coche; Oleiros microzona.

#### Precio / vivienda

Mantener alineación o derivar solo de TablaPrecios; no inventar.

#### Sanidad / conexiones

CHUAC / Arquitecto Marcide — contrastes.

#### Mar / río / playa / paseo

Orzán ≠ ría ≠ Doniños.

#### Clima

needs decision (1939 zona vs 2050 mun). despejados 49 deuda metodológica.

#### Qué eliminar
- Cualquier eco de «2050 en prosa municipal» mezclado sin etiqueta
- Cascadas sol

#### Qué conservar
- Etiqueta Alvedro si se mantiene 1939
- Microzonas Oleiros
- Encaja

#### Qué NO inventar
- Media sol zona
- Unificar playas

#### V1

Archivo: `web/src/data/v1/zonas/golfo-artabro-e-ferrol.json`. Identidad golfo; cifras clima V1 no autoridad.

---

### 4.9 A Mariña (`a-marina`)

**Municipios:** O Vicedo, Viveiro, Xove, Cervo, Burela, Foz, Barreiros, Ribadeo

**Estado factual:** ND_XOVE_INVENTADO · ALGUNOS_€_OK · SERVICIOS_X10_DESFASADOS

**Resultado auditoría:** LISTA_CURSOR38 · excepción ND Xove

**Clima zona (`zonas.json`):** solHoras=1890, despejados=40, cubiertos=165, lluviaDias=146, lluviaMm=1025, tempVerano=18.5, clase=Intermedio, calorAprieta=None

**solHoras municipales (set):** [1850, 1880, 1900, 1920, 1950]

**Precios capa:**
- O Vicedo (`o-vicedo`): 1093
- Viveiro (`viveiro`): 1302
- Xove (`xove`): n.d.
- Cervo (`cervo`): 1210
- Burela (`burela`): 1096
- Foz (`foz`): 1790
- Barreiros (`barreiros`): 1732
- Ribadeo (`ribadeo`): 1845

**Conflictos precio detectados (scan vs capa):**
- OK: narrativo 1302 vs capa 1302 (Viveiro)
- CONTRADICCION: narrativo 1150 vs capa 1732 (Barreiros)

#### Contradicciones (A)
- Xove ~950 con precioM2 null.
- Barreiros ~1150 vs 1732; O Vicedo ~900 vs 1093.
- Servicios x/10 en prosa ≠ capa (Ribadeo 7 vs 8, etc.).

#### Agregados dudosos (B)
- No media € zona. «~1800 Foz+Ribadeo» banda cualitativa OK si no se fija.

#### Duplicaciones obsoletas (C)
- Viveiro/Cervo/Foz/Ribadeo € alinean; oeste no.

#### Generalizaciones territoriales (D)
- As Catedrais ≠ playa cotidiana de villa Ribadeo.

#### P4 a conservar (J)
- Tres rías + Catedrais
- Alcoa San Ciprián
- Semana Santa Viveiro
- Oeste industrial vs este costa media
- Frontera Eo
- Hospital en Burela

#### Vida cotidiana / estructura

Villas más autónomas; Barreiros/Xove/Vicedo coche; FEVE nominal.

#### Precio / vivienda

PROHIBIDO € Xove. Actualizar o retirar oeste. Conservar este si sigue = capa.

#### Sanidad / conexiones

Hospital da Mariña; Jarrio convenio Ribadeo — capa.

#### Mar / río / playa / paseo

Ría vs cantábrico abierto vs Catedrais peaje agosto.

#### Clima

compatible bindings; temp extremos editorial → needs decision si se cifran.

#### Qué eliminar
- € Xove
- € oeste obsoletos
- Lista servicios x/10 desfasada

#### Qué conservar
- Geografía tres rías
- Alcoa peaje
- Encaja

#### Qué NO inventar
- Xove €
- Media zona
- Hospital privado «más cercano» sin capa

#### V1

Archivo: `web/src/data/v1/zonas/a-marina.json`. Catedrais/ría; precios V1 selectivos.

---

### 4.10 Asturias Occidente (`asturias-occidente`)

**Municipios:** Castropol, Tapia de Casariego, Navia, Luarca (Valdés)

**Estado factual:** PRECIOS_OBSOLETOS · TAPIA_GRAVE · CLIMA_OK

**Resultado auditoría:** LISTA_CURSOR38

**Clima zona (`zonas.json`):** solHoras=1925, despejados=40, cubiertos=165, lluviaDias=139, lluviaMm=1000, tempVerano=18.5, clase=Intermedio, calorAprieta=None

**solHoras municipales (set):** [1850, 1900, 1950]

**Precios capa:**
- Castropol (`castropol`): 1295
- Tapia de Casariego (`tapia-de-casariego`): 2200
- Navia (`navia`): 1384
- Luarca (Valdés) (`luarca-valdes`): 1256

**Conflictos precio detectados (scan vs capa):**
- CONTRADICCION: narrativo 1050 vs capa 1295 (Castropol)
- CONTRADICCION: narrativo 1100 vs capa 1384 (Navia)
- OK: narrativo 1300 vs capa 1256 (Luarca)
- CONTRADICCION: narrativo 1350 vs capa 2200 (Tapia)

#### Contradicciones (A)
- Tapia 1350 vs 2200; Castropol 1050 vs 1295; Navia 1100 vs 1384; Luarca 1300 vs 1256.

#### Agregados dudosos (B)
- «Franja asequible» ya no vale para Tapia.

#### Duplicaciones obsoletas (C)
- € + totales 3hab.

#### Generalizaciones territoriales (D)
- (ninguno material)

#### P4 a conservar (J)
- Villa blanca Luarca
- Surf Tapia
- Eo/Ribadeo apoyo Castropol
- Puerto de Vega
- Indianos
- Jarrio como ancla

#### Vida cotidiana / estructura

Cuatro villas distintas; coche entre ellas; invierno fino.

#### Precio / vivienda

Retirar todos los hard €/totales.

#### Sanidad / conexiones

Jarrio minutos ≈ capa; aeropuerto Asturias — capa.

#### Mar / río / playa / paseo

Penarronda/Frexulfe/Vega — conservar.

#### Clima

compatible; niebla jerárquica → needs decision vs campos mun.

#### Qué eliminar
- € hard
- Totales

#### Qué conservar
- Cuatro escalas
- Encaja
- Topónimos

#### Qué NO inventar
- Media zona
- Niebla sin soporte

#### V1

Archivo: `web/src/data/v1/zonas/asturias-occidente.json`. Identidad villas; precios fuera.

---

### 4.11 Asturias Centro (`asturias-centro`)

**Municipios:** Cudillero, Muros de Nalón, Soto del Barco, Salinas (Castrillón), Luanco (Gozón), Candás (Carreño), Gijón

**Estado factual:** ND_MUROS_INVENTADO · SALINAS_GRAVE · CLIMA_OK

**Resultado auditoría:** LISTA_CURSOR38 · excepción ND Muros

**Clima zona (`zonas.json`):** solHoras=1800, despejados=42, cubiertos=165, lluviaDias=148, lluviaMm=1050, tempVerano=19.0, clase=Más húmedo / nublado, calorAprieta=None

**solHoras municipales (set):** [1780, 1800, 1850]

**Precios capa:**
- Cudillero (`cudillero`): 1636
- Muros de Nalón (`muros-de-nalon`): n.d.
- Soto del Barco (`soto-del-barco`): 1185
- Salinas (Castrillón) (`salinas-castrillon`): 3226
- Luanco (Gozón) (`luanco-gozon`): 2379
- Candás (Carreño) (`candas-carreno`): 1840
- Gijón (`gijon`): 2696

**Conflictos precio detectados (scan vs capa):**
- ND_INVENTADO: narrativo 1100 vs capa None (Muros)
- OK: narrativo 1200 vs capa 1185 (Soto)
- CONTRADICCION: narrativo 1400 vs capa 1636 (Cudillero)
- DESVIO: narrativo 1650 vs capa 1840 (Candás)
- CONTRADICCION: narrativo 1700 vs capa 3226 (Salinas)
- CONTRADICCION: narrativo 2300 vs capa 2696 (Gijón)

#### Contradicciones (A)
- Muros ~1100 con precioM2 null.
- Salinas 1700 vs 3226; Luanco 1800 vs 2379; Gijón 2300 vs 2696; Cudillero 1400 vs 1636.

#### Agregados dudosos (B)
- Franja mm 1000–1150 vs zona 1050 — banda floja.

#### Duplicaciones obsoletas (C)
- € + totales; muchos x/10.

#### Generalizaciones territoriales (D)
- Avilés como ancla logística (fuera de zona) OK como contexto.

#### P4 a conservar (J)
- Cudillero vs El Pito
- Salinas + aeropuerto
- San Lorenzo / Peñas
- Aboño/Avilés aire
- Logística HUCA/Avilés/Gijón
- Estuario Muros/Soto

#### Vida cotidiana / estructura

Gijón ciudad; Salinas villa-playa; Cudillero foto vs vivir arriba.

#### Precio / vivienda

PROHIBIDO € Muros. Retirar Salinas 1700 y resto hard.

#### Sanidad / conexiones

Minutos ≈ capa; Palma verano Asturias.

#### Mar / río / playa / paseo

Cudillero playa no generalizable — ya matizado.

#### Clima

compatible; ábrego/spikes → needs decision.

#### Qué eliminar
- € Muros
- Todo hard €
- Totales

#### Qué conservar
- Tesis logística
- Peaje industria
- Encaja

#### Qué NO inventar
- Muros €
- Media zona

#### V1

Archivo: `web/src/data/v1/zonas/asturias-centro.json`. Logística; precios fuera.

---

### 4.12 Asturias Oriente (`asturias-oriente`)

**Municipios:** Villaviciosa, Colunga, Ribadesella, Llanes, Ribadedeva

**Estado factual:** PRECIOS_OBSOLETOS · CLIMA_OK · P4_FUERTE

**Resultado auditoría:** LISTA_CURSOR38

**Clima zona (`zonas.json`):** solHoras=1750, despejados=40, cubiertos=168, lluviaDias=153, lluviaMm=1250, tempVerano=19.5, clase=Más húmedo / nublado, calorAprieta=None

**solHoras municipales (set):** [1700, 1750]

**Precios capa:**
- Villaviciosa (`villaviciosa`): 1864
- Colunga (`colunga`): 1774
- Ribadesella (`ribadesella`): 2632
- Llanes (`llanes`): 2391
- Ribadedeva (`ribadedeva`): 1700

**Conflictos precio detectados (scan vs capa):**
- CONTRADICCION: narrativo 1500 vs capa 1864 (Villaviciosa)
- DESVIO: narrativo 1600 vs capa 1700 (Ribadedeva)
- DESVIO: narrativo 1700 vs capa 1774 (Colunga)
- CONTRADICCION: narrativo 2100 vs capa 2391 (Llanes)
- CONTRADICCION: narrativo 2200 vs capa 2632 (Ribadesella)

#### Contradicciones (A)
- Villaviciosa 1500 vs 1864; Ribadesella 2200 vs 2632; Llanes 2100 vs 2391.

#### Agregados dudosos (B)
- (ninguno material)

#### Duplicaciones obsoletas (C)
- € + totales.

#### Generalizaciones territoriales (D)
- (ninguno material)

#### P4 a conservar (J)
- Montaña al mar (Sueve/Cuera/Picos)
- Sella peaje
- Gulpiyuri / Fitu
- Indianos / Lastres
- Agosto Llanes/Ribadesella ×5–8
- Frontera Colombres

#### Vida cotidiana / estructura

Villas; Villaviciosa sin playa en villa (Rodiles ~12′).

#### Precio / vivienda

Retirar hard €.

#### Sanidad / conexiones

Preferir orden capa (p.ej. Llanes Palma vía Santander mejor que solo Asturias).

#### Mar / río / playa / paseo

Calas vs ría Villaviciosa.

#### Clima

compatible

#### Qué eliminar
- € hard
- Totales

#### Qué conservar
- Paisaje
- Peaje agosto
- Encaja

#### Qué NO inventar
- Media zona
- Sanidad privada sin capa

#### V1

Archivo: `web/src/data/v1/zonas/asturias-oriente.json`. Paisaje oriente; precios fuera.

---

### 4.13 Cantabria Occidental (`cantabria-occidental`)

**Municipios:** San Vicente de la Barquera, Comillas, Suances, Liencres (Piélagos), Santander

**Estado factual:** PRECIOS_MUY_OBSOLETOS · CLIMA_OK · LOGISTICA_FUERTE

**Resultado auditoría:** LISTA_CURSOR38

**Clima zona (`zonas.json`):** solHoras=1700, despejados=38, cubiertos=168, lluviaDias=151, lluviaMm=1150, tempVerano=20.0, clase=Más húmedo / nublado, calorAprieta=None

**solHoras municipales (set):** [1680, 1700]

**Precios capa:**
- San Vicente de la Barquera (`san-vicente-de-la-barquera`): 3218
- Comillas (`comillas`): 3722
- Suances (`suances`): 3000
- Liencres (Piélagos) (`liencres-pielagos`): 2227
- Santander (`santander`): 3323

**Conflictos precio detectados (scan vs capa):**
- CONTRADICCION: narrativo 2400 vs capa 3722 (Comillas)
- CONTRADICCION: narrativo 2600 vs capa 3323 (Santander)

#### Contradicciones (A)
- Comillas 2400 vs 3722; Santander 2600 vs 3323; SVB/Suances/Liencres desvíos fuertes.

#### Agregados dudosos (B)
- Ranking «mejor hospital+aero+seguridad» — cualitativo; criminalidad Piélagos needs decision.

#### Duplicaciones obsoletas (C)
- € + totales.

#### Generalizaciones territoriales (D)
- Santillana/Altamira salida OK, no municipio 83.

#### P4 a conservar (J)
- Valdecilla + Seve + Palma casi todo el año
- Dunas Liencres / Costa Quebrada
- Oyambre / Capricho
- Suances villa-playa
- Santander bahía
- Agosto peaje Comillas/SVB

#### Vida cotidiana / estructura

Capital vs villas turísticas invierno fino.

#### Precio / vivienda

Retirar todos hard €; Liencres relativo menos caro en capa.

#### Sanidad / conexiones

Valdecilla / Seve — conservar tesis sin minutos de más.

#### Mar / río / playa / paseo

Ría SVB vs dunas vs Sardinero.

#### Clima

compatible; ábrego → needs decision.

#### Qué eliminar
- € hard
- Totales
- Stats criminalidad sin fuente

#### Qué conservar
- Tesis logística
- Dunas
- Encaja

#### Qué NO inventar
- Media zona
- Índices seguridad

#### V1

Archivo: `web/src/data/v1/zonas/cantabria-occidental.json`. Bahía/dunas; precios fuera.

---

### 4.14 Cantabria Oriental (`cantabria-oriental`)

**Municipios:** Ribamontán al Mar, Noja, Santoña, Laredo, Castro-Urdiales

**Estado factual:** PRECIOS_OBSOLETOS · BILBAO_PALMA_OK · P4_FUERTE

**Resultado auditoría:** LISTA_CURSOR38

**Clima zona (`zonas.json`):** solHoras=1700, despejados=40, cubiertos=165, lluviaDias=150, lluviaMm=1150, tempVerano=20.0, clase=Más húmedo / nublado, calorAprieta=None

**solHoras municipales (set):** [1650, 1700]

**Precios capa:**
- Ribamontán al Mar (`ribamontan-al-mar`): 3535
- Noja (`noja`): 3296
- Santoña (`santona`): 2120
- Laredo (`laredo`): 2951
- Castro-Urdiales (`castro-urdiales`): 2861

**Conflictos precio detectados (scan vs capa):**
- CONTRADICCION: narrativo 1900 vs capa 2120 (Santoña)
- CONTRADICCION: narrativo 2100 vs capa 2951 (Laredo)
- CONTRADICCION: narrativo 2300 vs capa 3535 (Ribamontán)

#### Contradicciones (A)
- Laredo 2100 vs 2951; Ribamontán/Noja 2300 vs 3535/3296; Castro 2400 vs 2861.

#### Agregados dudosos (B)
- (ninguno material)

#### Duplicaciones obsoletas (C)
- € + totales.

#### Generalizaciones territoriales (D)
- Cruces usable ≠ adscripción — tensar prosa.

#### P4 a conservar (J)
- Santoña trabajo/anchoas vs Noja resort vacío oct–mayo
- Lancha Somo
- Buciero
- Salvé + hospital Laredo
- Castro–Bilbao 35′ Palma todo el año

#### Vida cotidiana / estructura

Noja estacional fuerte; Santoña año; Castro dormitorio Bizkaia.

#### Precio / vivienda

Retirar hard €; Santoña relativo más contenido (2120).

#### Sanidad / conexiones

Laredo / Valdecilla / Bilbao — capa; no vender Cruces como circuito cantábrico por defecto.

#### Mar / río / playa / paseo

Surf chalets vs puerto vs Salvé.

#### Clima

compatible (Castro 1650 mínimo tabla).

#### Qué eliminar
- € hard
- Totales

#### Qué conservar
- Contraste Noja/Santoña
- Bilbao/Palma
- Encaja

#### Qué NO inventar
- Media zona
- Cruces default

#### V1

Archivo: `web/src/data/v1/zonas/cantabria-oriental.json`. Identidad oriental; precios fuera.

---

### 4.15 Alto Minho (PT) (`alto-minho`)

**Municipios:** Valença, Vila Nova de Cerveira, Caminha, Moledo (Caminha), Vila Praia de Âncora (Caminha), Afife-Carreço (Viana), Viana do Castelo, Ponte de Lima

**Estado factual:** ND_AFIFE_INVENTADO · RANKING_MOLEDO_FALSO · CLIMA_OK

**Resultado auditoría:** LISTA_CURSOR38 · excepción ND Afife

**Clima zona (`zonas.json`):** solHoras=2500, despejados=80, cubiertos=108, lluviaDias=114, lluviaMm=1450, tempVerano=20.5, clase=Más favorable, calorAprieta=julio–agosto

**solHoras municipales (set):** [2400, 2450, 2500]

**Precios capa:**
- Valença (`valenca`): 1270
- Vila Nova de Cerveira (`vila-nova-de-cerveira`): 1339
- Caminha (`caminha`): 2082
- Moledo (Caminha) (`moledo-caminha`): 1909
- Vila Praia de Âncora (Caminha) (`vila-praia-de-ancora`): 2692
- Afife-Carreço (Viana) (`afife-carreco`): n.d.
- Viana do Castelo (`viana-do-castelo`): 2337
- Ponte de Lima (`ponte-de-lima`): 1626

**Conflictos precio detectados (scan vs capa):**
- DESVIO: narrativo 1500 vs capa 1339 (Cerveira)
- DESVIO: narrativo 1900 vs capa 2082 (Caminha)

#### Contradicciones (A)
- Afife-Carreço 2100 con precioM2 null.
- «Moledo el más caro 2300» vs capa Moledo 1909 < Âncora 2692 < Viana 2337.

#### Agregados dudosos (B)
- Claims seguridad/coste vida PT — needs decision / no capa.

#### Duplicaciones obsoletas (C)
- € + totales (incl. Afife).

#### Generalizaciones territoriales (D)
- Valença/Cerveira/PdL sin playa marítima — capa.

#### P4 a conservar (J)
- Sol + granito + monte (Arga)
- Nortada
- Âncora abrigado
- Fortaleza Valença / pie en dos países
- Camino / Feiras Novas
- Seguro privado portugués
- Mar frío 16–18

#### Vida cotidiana / estructura

Viana cabecera; Afife coche; río vs océano.

#### Precio / vivienda

PROHIBIDO € Afife. Retirar ranking Moledo; actualizar resto.

#### Sanidad / conexiones

Santa Luzia / Bertiandos; Palma Porto verano + Santiago a menudo mejor — no subjugar Santiago.

#### Mar / río / playa / paseo

Miño vs océano; frío; nortada terraza.

#### Clima

compatible; mm interior hard → needs decision.

#### Qué eliminar
- € Afife
- Moledo-as-dearest
- Totales

#### Qué conservar
- Tesis sol+granito
- Nortada
- Encaja

#### Qué NO inventar
- Afife €
- Fiscalidad NHR cerrada
- Media zona

#### V1

Archivo: `web/src/data/v1/zonas/alto-minho.json`. Granito/Camino; precios fuera.

---

### 4.16 Litoral Norte (PT) (`litoral-norte`)

**Municipios:** Esposende, Póvoa de Varzim, Vila do Conde

**Estado factual:** PRECIOS_OBSOLETOS · LLUVIA_HARD_DESFASADA · CLIMA_SOL_OK

**Resultado auditoría:** LISTA_CURSOR38

**Clima zona (`zonas.json`):** solHoras=2550, despejados=85, cubiertos=105, lluviaDias=105, lluviaMm=1200, tempVerano=20.0, clase=Más favorable, calorAprieta=None

**solHoras municipales (set):** [2550]

**Precios capa:**
- Esposende (`esposende`): 2462
- Póvoa de Varzim (`povoa-de-varzim`): 2730
- Vila do Conde (`vila-do-conde`): 2875

**Conflictos precio detectados (scan vs capa):**
- DESVIO: narrativo 2300 vs capa 2462 (Esposende)

#### Contradicciones (A)
- Esposende 2300 vs 2462; Póvoa/Vila 2600 vs 2730/2875.
- Hard «1200–1300 mm / 105–108 días / julio–agosto ~2 días» vs zona lluvia.verano 3–5.

#### Agregados dudosos (B)
- Scores «parecido Mallorca 2/5–3/5» editoriales.

#### Duplicaciones obsoletas (C)
- € + totales; mm hard.

#### Generalizaciones territoriales (D)
- (ninguno material)

#### P4 a conservar (J)
- Máximo sol tabla (~2550)
- Porto 15–35′
- Costa llana sin monte
- Nortada
- Mar frío
- Tres escalas ciudad-balneario

#### Vida cotidiana / estructura

Más autónomas que aldeas Minho; coche baja en capa.

#### Precio / vivienda

Retirar hard €/totales.

#### Sanidad / conexiones

Hospital Esposende: prosa Póvoa/Vila vs capa vaga — needs decision; no inventar.

#### Mar / río / playa / paseo

Llano atlántico; sin Arga detrás.

#### Clima

sol/despejados compatible; mm/días hard obsolete/needs decision.

#### Qué eliminar
- € hard
- mm/días hard contradictorios
- Scores 2/5 sin base

#### Qué conservar
- Tesis sol+Porto
- Nortada
- Encaja Palma solo verano

#### Qué NO inventar
- Media zona
- Hospital preciso sin capa

#### V1

Archivo: `web/src/data/v1/zonas/litoral-norte.json`. Sol/Porto; cifras lluvia V1 no.

---

## 5. Matriz resumen 16/16

| zona | n | precios_scan≠OK | vilaboa€ | 1939 | clima | resultado |
|---|---:|---:|---|---|---|---|
| `baixo-mino` | 5 | 0 | False | zona_sol=2400 | compatible (bindings zona) | LISTA_CURSOR38 · excepción precio-rank |
| `val-minor` | 3 | 1 | False | zona_sol=2500 | compatible | LISTA_CURSOR38 |
| `vigo-e-ria` | 4 | 0 | True | zona_sol=2250 | compatible (zona + sol mun hard alineados) | LISTA_CURSOR38 · excepción ND Vilaboa (aislada, no bloqueante) |
| `o-morrazo` | 4 | 1 | False | zona_sol=2300 | compatible | LISTA_CURSOR38 |
| `pontevedra-e-sanxenxo` | 4 | 1 | False | zona_sol=2350 | zona compatible; mm mun → needs decision (retirar salvo fuente) | LISTA_CURSOR38 |
| `o-salnes` | 5 | 2 | False | zona_sol=2350 | compatible zona; mm mun retirar | LISTA_CURSOR38 |
| `barbanza-e-noia` | 6 | 3 | False | zona_sol=2225 | compatible zona; Ribeira mm → needs decision | LISTA_CURSOR38 |
| `golfo-artabro-e-ferrol` | 7 | 0 | False | zona_sol=1939 | needs decision (1939 zona vs 2050 mun) | LISTA_CURSOR38 · excepción clima Golfo (aislada, no bloqueante) |
| `a-marina` | 8 | 1 | False | zona_sol=1890 | compatible bindings; temp extremos editorial → needs decision si se cifran | LISTA_CURSOR38 · excepción ND Xove |
| `asturias-occidente` | 4 | 3 | False | zona_sol=1925 | compatible; niebla jerárquica → needs decision vs campos mun | LISTA_CURSOR38 |
| `asturias-centro` | 7 | 5 | False | zona_sol=1800 | compatible; ábrego/spikes → needs decision | LISTA_CURSOR38 · excepción ND Muros |
| `asturias-oriente` | 5 | 5 | False | zona_sol=1750 | compatible | LISTA_CURSOR38 |
| `cantabria-occidental` | 5 | 2 | False | zona_sol=1700 | compatible; ábrego → needs decision | LISTA_CURSOR38 |
| `cantabria-oriental` | 5 | 3 | False | zona_sol=1700 | compatible (Castro 1650 mínimo tabla) | LISTA_CURSOR38 |
| `alto-minho` | 8 | 2 | False | zona_sol=2500 | compatible; mm interior hard → needs decision | LISTA_CURSOR38 · excepción ND Afife |
| `litoral-norte` | 3 | 1 | False | zona_sol=2550 | sol/despejados compatible; mm/días hard obsolete/needs decision | LISTA_CURSOR38 |

---

## 6. Deudas transversales

1. **Precios hardcodeados en relatos de zona:** casi todas las zonas (excepto Baixo sin € y Golfo bien alineado) arrastran €/m² municipales pre-v15. CURSOR_38 debe **retirarlos** o regenerarlos solo desde capa/TablaPrecios — **sin** inventar media de zona.
2. **n.d. municipales:** Vilaboa, Xove, Muros de Nalón, Afife-Carreço — hoy aparecen € inventados en prosa de zona (Vigo, A Mariña, Asturias Centro, Alto Minho). **Prohibido** perpetuar.
3. **Clima despejados/cubiertos:** NO AUTO; no corregir metodología en 37/38 salvo decisión explícita posterior (`AUDITORIA_CLIMA_V15_WEB.md` opciones A–D).
4. **Golfo 1939 vs 2050:** `zonas.json` 1939 (Alvedro) ≠ mun 2050. Decisión etiquetada; no promediar.
5. **mm / días hard municipales** en varias zonas Rías Baixas / Litoral Norte: retirar si no hay fuente.
6. **Servicios x/10 en prosa de zona:** a menudo desfasados vs capa `servicios` — preferir cualitativo o alinear.
7. **Totales € vivienda** derivados de €/m² obsoleto: retirar con el €/m².
8. **V1:** inmutable; útil solo como P4/escena; nunca autoridad factual 2026.
9. **Municipales 83:** protegidos; CURSOR_38 no los toca.

---

## 7. Contrato de reescritura CURSOR_38

1. Un solo macrobloque para las **16** zonas.
2. Seguir estructura de sección existente (Dónde está → Tiempo → Cómo se vive → Mar… → Casa+TablaPrecios → Encaja → MunicipiosZonaFin).
3. Relato de zona = mapa mental + contrastes internos + P4; **no** concatenar fichas municipales.
4. Hechos estructurados: capa mun + `zonas.json` clima con honestidad metodológica.
5. Retirar €/m² narrativos obsoletos; no inventar agregados; n.d. = n.d.
6. Conservar fotos/pies/escalas locales salvo corrección factual mínima.
7. Mantener enlace actual↔V1 en página de zona.
8. No main / no merge / no deploy.
9. Excepciones aisladas (no parten el macrobloque): ND Vilaboa/Xove/Muros/Afife; clima Golfo 1939; despejados/cubiertos.
10. Investigación externa: **no obligatoria** para v1 de CURSOR_38 si se omite lo no soportado.

---

## 8. Archivos que CURSOR_38 podrá modificar

- `web/src/components/RelatoBaixoMino.tsx`
- `web/src/components/RelatoValMinor.tsx`
- `web/src/components/RelatoVigoERia.tsx`
- `web/src/components/RelatoOMorrazo.tsx`
- `web/src/components/RelatoPontevedraESanxenxo.tsx`
- `web/src/components/RelatoOSalnes.tsx`
- `web/src/components/RelatoBarbanzaENoia.tsx`
- `web/src/components/RelatoGolfoArtabroEFerrol.tsx`
- `web/src/components/RelatoAMarina.tsx`
- `web/src/components/RelatoAsturiasOccidente.tsx`
- `web/src/components/RelatoAsturiasCentro.tsx`
- `web/src/components/RelatoAsturiasOriente.tsx`
- `web/src/components/RelatoCantabriaOccidental.tsx`
- `web/src/components/RelatoCantabriaOriental.tsx`
- `web/src/components/RelatoAltoMinho.tsx`
- `web/src/components/RelatoLitoralNorte.tsx`

Opcional solo si una decisión de clima lo exige (fuera del default): `web/src/data/zonas.json` + `web/public/data/zonas.json` — **no** por iniciativa para «arreglar» despejados.

Scripts auxiliares de implementación OK si son reutilizables.

---

## 9. Archivos protegidos (CURSOR_38)

- Todos los relatos municipales: `web/src/components/RelatoMunicipio.tsx` + `web/src/lib/relatos-*.ts`
- `web/src/data/v1/**` (99 entradas)
- `web/src/data/municipios-*.json` / master XLSX/CSV
- UI de producto salvo bug bloqueante documentado (preferencia: no tocar)

---

## 10. Decisión CURSOR_38

**Implementación 16/16 en un macrobloque: SÍ.**

Excepciones aisladas (no bloquean el lote):
- n.d. precio en prosa de zona (Vilaboa, Xove, Muros, Afife)
- Golfo sol 1939 vs mun 2050 (decisión etiquetada)
- despejados/cubiertos (deuda metodológica global)

Investigación externa obligatoria: **no**.

FIN CURSOR_37 PACKAGE
