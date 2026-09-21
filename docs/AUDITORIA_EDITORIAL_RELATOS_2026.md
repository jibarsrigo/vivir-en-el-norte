# Auditoría editorial de relatos vs capa factual 2026

**Bloque:** CURSOR_14 · **rama:** `revision-2026-09-21` · **HEAD base:** `7ea326f`

**Alcance:** solo lectura + este documento. No se reescribe prosa de producto, no se modifica UI ni JSON de fichas, no se usa internet.

---

## 1. Resumen ejecutivo

- Cobertura: **83/83** relatos localizados y auditados (0 ausencias).
- Estructura homogénea en todos: `abrir`, `tiempo`, `vivir`, `historia`, `fuera`, `casa`, `encaja` (si/no/veredicto).
- Prioridad de trabajo editorial (no ranking de municipios): **URGENTE 51** · **ALTA 32** · **MEDIA 0** · **BAJA 0**.
- Lugares con al menos un hallazgo: P0 **51** · P1 **80** · P2 **83** · P3 **23** · P4 **83**.
- El P0 dominante es **precio €/m² del relato vs `precioM2` v15** (cifras históricas en prosa frente a capa/TablaPrecios 2026).
- Los cuatro `precioM2` n.d. (Vilaboa, Xove, Muros de Nalón, Afife-Carreço) **siguen citando cifras concretas** en el relato → P0.
- Deuda metodológica conocida: **A Coruña** (y eco en Oleiros) sol relato **1939** vs ficha **2050**; no corregir aquí.
- Valor a conservar (P4): casi todos los relatos aportan escena, historia, mar/río y Encaja que la capa factual no sustituye.
- Siguiente paso acordado: reescritura por lotes con prosa entregada (ChatGPT) e implementación mecánica (Cursor), sin inventar texto.

---

## 2. Inventario de 83 relatos

### 2.1 Fuentes de prosa

| Archivo | Relatos |
|---|---:|
| `relatos-a-marina.ts` | 8 |
| `relatos-alto-minho.ts` | 8 |
| `relatos-asturias-centro.ts` | 7 |
| `relatos-golfo-artabro-e-ferrol.ts` | 7 |
| `relatos-barbanza-e-noia.ts` | 6 |
| `RelatoMunicipio.tsx (BAIXO)` | 5 |
| `relatos-asturias-oriente.ts` | 5 |
| `relatos-cantabria-occidental.ts` | 5 |
| `relatos-cantabria-oriental.ts` | 5 |
| `relatos-o-salnes.ts` | 5 |
| `relatos-asturias-occidente.ts` | 4 |
| `relatos-o-morrazo.ts` | 4 |
| `relatos-pontevedra-e-sanxenxo.ts` | 4 |
| `relatos-vigo-e-ria.ts` | 4 |
| `relatos-litoral-norte.ts` | 3 |
| `relatos-val-minor.ts` | 3 |

Baixo Miño vive en `RelatoMunicipio.tsx` (`RELATOS_BAIXO_MINO`); el resto en `web/src/lib/relatos-*.ts`.

### 2.2 Por zona

| Zona | Relatos |
|---|---:|
| A Mariña | 8 |
| Alto Minho (PT) | 8 |
| Asturias Centro | 7 |
| Golfo Ártabro e Ferrol | 7 |
| Barbanza e Noia | 6 |
| Asturias Oriente | 5 |
| Baixo Miño | 5 |
| Cantabria Occidental | 5 |
| Cantabria Oriental | 5 |
| O Salnés | 5 |
| Asturias Occidente | 4 |
| O Morrazo | 4 |
| Pontevedra e Sanxenxo | 4 |
| Vigo e ría | 4 |
| Litoral Norte (PT) | 3 |
| Val Miñor | 3 |

### 2.3 Componentes estructurales (83/83)

| Componente | Presente |
|---|---:|
| `abrir` | 83/83 |
| `tiempo` | 83/83 |
| `vivir` | 83/83 |
| `historia` | 83/83 |
| `fuera` | 83/83 |
| `casa` | 83/83 |
| `encaja` | 83/83 |

Componentes compartidos del producto (fuera del objeto relato, pero visibles junto a él): `FichaCapa2026`, `TablaPrecios` / franjas, mapa de ficha, fotos.

Contenido por municipio: prosa específica en cada bloque; plantilla común; Encaja siempre con `si` / `no` / `veredicto`.

Mallorca: **83/83** mencionan Mallorca/Baleares en el texto completo (ver §6).

---

## 3. Tabla por lugar (83/83)

Prioridad = urgencia de revisión del texto, no valoración del municipio.

| # | Municipio | Zona | P0 | P1 | P2 | P3 | P4 | Prioridad | Notas |
|---:|---|---|---|---|---|---|---|---|---|
| 1 | A Guarda | Baixo Miño | — | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | mar/playa también en capa factual; Palma/aeropuerto también en Conexiones (+1) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 2 | Oia | Baixo Miño | — | usa cerca/a un paso | mar/playa también en capa factual; temas CASA también en capa factual | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 3 | O Rosal | Baixo Miño | — | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | mar/playa también en capa factual; Palma/aeropuerto también en Conexiones (+1) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 4 | Tomiño | Baixo Miño | — | usa cerca/a un paso | mar/playa también en capa factual; Palma/aeropuerto también en Conexiones (+1) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 5 | Tui | Baixo Miño | — | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | mar/playa también en capa factual; Palma/aeropuerto también en Conexiones (+1) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 6 | Baiona | Val Miñor | — | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite €/m² ya en TablaPrecios/capa; repite horas de sol (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 7 | Nigrán | Val Miñor | precio relato ~2600 vs ficha 2909 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | lenguaje vago/revisar: tranquilo | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 8 | Gondomar | Val Miñor | precio relato ~1700 vs ficha 1286 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite nota servicios X/10; mar/playa también en capa factual (+2) | lenguaje vago/revisar: tranquilo | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 9 | Vigo | Vigo e ría | — | precio relato ~2700 vs ficha 2591 (desvío); vuelo/Palma puede sonar permanente; capa 2026 matiza (+1) | repite horas de sol; menciona hospital también en capa Sanidad (+3) | lenguaje vago/revisar: bien comunicado | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 10 | Redondela | Vigo e ría | — | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite €/m² ya en TablaPrecios/capa; repite horas de sol (+4) | lenguaje vago/revisar: tranquilo | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 11 | Soutomaior | Vigo e ría | precio relato ~1300 vs ficha 2111 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | lenguaje vago/revisar: tranquilo, todos los servicios | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 12 | Vilaboa | Vigo e ría | precio n.d. en ficha pero relato cita €/m² [1300] | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | lenguaje vago/revisar: tranquilo | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 13 | Cangas | O Morrazo | precio relato ~1750 vs ficha 2157 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; repite nota servicios X/10 (+3) | lenguaje vago/revisar: tranquilo | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 14 | Moaña | O Morrazo | — | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite €/m² ya en TablaPrecios/capa; repite horas de sol (+4) | lenguaje vago/revisar: tranquilo | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 15 | Bueu | O Morrazo | precio relato ~1500 vs ficha 1908 | usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | lenguaje vago/revisar: tranquilo | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 16 | Marín | O Morrazo | — | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite €/m² ya en TablaPrecios/capa; repite horas de sol (+4) | lenguaje vago/revisar: tranquilo | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 17 | Pontevedra | Pontevedra e Sanxenxo | precio relato ~1900 vs ficha 2596 | minutos hospital en prosa (capa 2026 prioriza texto práctico); vuelo/Palma puede sonar permanente; capa 2026 matiza (+1) | repite horas de sol; repite nota servicios X/10 (+3) | lenguaje vago/revisar: tranquilo | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 18 | Poio | Pontevedra e Sanxenxo | — | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite €/m² ya en TablaPrecios/capa; repite horas de sol (+5) | lenguaje vago/revisar: tranquilo | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 19 | Sanxenxo | Pontevedra e Sanxenxo | precio relato ~2900 vs ficha 3351 | minutos hospital en prosa (capa 2026 prioriza texto práctico); vuelo/Palma puede sonar permanente; capa 2026 matiza (+1) | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 20 | O Grove | Pontevedra e Sanxenxo | precio relato ~2300 vs ficha 2500 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | lenguaje vago/revisar: tranquilo | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 21 | Meaño | O Salnés | precio relato ~1350 vs ficha 1013 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 22 | Cambados | O Salnés | — | precio relato ~1500 vs ficha 1432 (desvío); vuelo/Palma puede sonar permanente; capa 2026 matiza (+1) | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 23 | A Illa de Arousa | O Salnés | precio relato ~1900 vs ficha 3012 | vuelo/Palma puede sonar permanente; capa 2026 matiza | repite horas de sol; menciona hospital también en capa Sanidad (+4) | lenguaje vago/revisar: tranquilo | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 24 | Vilanova de Arousa | O Salnés | precio relato ~1350 vs ficha 1969 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 25 | Vilagarcía de Arousa | O Salnés | — | precio relato ~1700 vs ficha 1779 (desvío); vuelo/Palma puede sonar permanente; capa 2026 matiza (+1) | repite horas de sol; menciona hospital también en capa Sanidad (+4) | lenguaje vago/revisar: tranquilo | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 26 | Rianxo | Barbanza e Noia | precio relato ~1200 vs ficha 959 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 27 | Boiro | Barbanza e Noia | — | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite €/m² ya en TablaPrecios/capa; repite horas de sol (+5) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 28 | A Pobra do Caramiñal | Barbanza e Noia | precio relato ~1300 vs ficha 1516 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 29 | Ribeira | Barbanza e Noia | — | precio relato ~1500 vs ficha 1570 (desvío); vuelo/Palma puede sonar permanente; capa 2026 matiza (+1) | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 30 | Porto do Son | Barbanza e Noia | precio relato ~1350 vs ficha 1525 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 31 | Noia | Barbanza e Noia | — | precio relato ~1300 vs ficha 1221 (desvío); vuelo/Palma puede sonar permanente; capa 2026 matiza (+1) | menciona hospital también en capa Sanidad; repite nota servicios X/10 (+3) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 32 | A Coruña | Golfo Ártabro e Ferrol | sol relato 1939 vs ficha 2050 (deuda AEMET conocida) | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite €/m² ya en TablaPrecios/capa; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 33 | Oleiros | Golfo Ártabro e Ferrol | sol relato 1939 vs ficha 2050 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite €/m² ya en TablaPrecios/capa; repite nota servicios X/10 (+3) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 34 | Sada | Golfo Ártabro e Ferrol | — | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite €/m² ya en TablaPrecios/capa; repite nota servicios X/10 (+3) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 35 | Bergondo | Golfo Ártabro e Ferrol | — | usa cerca/a un paso | repite €/m² ya en TablaPrecios/capa; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 36 | Miño | Golfo Ártabro e Ferrol | — | usa cerca/a un paso | repite €/m² ya en TablaPrecios/capa; repite nota servicios X/10 (+3) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 37 | Ares | Golfo Ártabro e Ferrol | — | usa cerca/a un paso | repite €/m² ya en TablaPrecios/capa; repite horas de sol (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 38 | Ferrol | Golfo Ártabro e Ferrol | — | usa cerca/a un paso | repite €/m² ya en TablaPrecios/capa; repite horas de sol (+3) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 39 | O Vicedo | A Mariña | precio relato ~900 vs ficha 1093 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 40 | Viveiro | A Mariña | — | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite €/m² ya en TablaPrecios/capa; repite horas de sol (+5) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 41 | Xove | A Mariña | precio n.d. en ficha pero relato cita €/m² [950] | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 42 | Cervo | A Mariña | — | usa cerca/a un paso | repite €/m² ya en TablaPrecios/capa; repite horas de sol (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 43 | Burela | A Mariña | — | precio relato ~1200 vs ficha 1096 (desvío); usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+3) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 44 | Foz | A Mariña | — | usa cerca/a un paso | repite €/m² ya en TablaPrecios/capa; repite horas de sol (+4) | lenguaje vago/revisar: tranquilo | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 45 | Barreiros | A Mariña | precio relato ~1150 vs ficha 1732 | usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+3) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 46 | Ribadeo | A Mariña | — | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite €/m² ya en TablaPrecios/capa; repite horas de sol (+5) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 47 | Castropol | Asturias Occidente | precio relato ~1050 vs ficha 1295 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 48 | Tapia de Casariego | Asturias Occidente | precio relato ~1350 vs ficha 2200 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 49 | Navia | Asturias Occidente | precio relato ~1100 vs ficha 1384 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 50 | Luarca (Valdés) | Asturias Occidente | precio relato ~1050 vs ficha 1256 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite €/m² ya en TablaPrecios/capa; repite horas de sol (+5) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 51 | Cudillero | Asturias Centro | precio relato ~1400 vs ficha 1636 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; repite nota servicios X/10 (+3) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 52 | Muros de Nalón | Asturias Centro | precio n.d. en ficha pero relato cita €/m² [1100, 1100] | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | lenguaje vago/revisar: tranquilo | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 53 | Soto del Barco | Asturias Centro | — | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite €/m² ya en TablaPrecios/capa; repite horas de sol (+5) | lenguaje vago/revisar: tranquilo | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 54 | Salinas (Castrillón) | Asturias Centro | precio relato ~1700 vs ficha 3226 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 55 | Luanco (Gozón) | Asturias Centro | precio relato ~1800 vs ficha 2379 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; repite nota servicios X/10 (+3) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 56 | Candás (Carreño) | Asturias Centro | precio relato ~1650 vs ficha 1840 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; repite nota servicios X/10 (+3) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 57 | Gijón | Asturias Centro | precio relato ~2300 vs ficha 2696 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; repite nota servicios X/10 (+3) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 58 | Villaviciosa | Asturias Oriente | precio relato ~1500 vs ficha 1864 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 59 | Colunga | Asturias Oriente | — | precio relato ~1700 vs ficha 1774 (desvío); usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 60 | Ribadesella | Asturias Oriente | precio relato ~2200 vs ficha 2632 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 61 | Llanes | Asturias Oriente | precio relato ~2100 vs ficha 2391 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 62 | Ribadedeva | Asturias Oriente | — | precio relato ~1600 vs ficha 1700 (desvío); vuelo/Palma puede sonar permanente; capa 2026 matiza (+1) | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 63 | San Vicente de la Barquera | Cantabria Occidental | precio relato ~2100 vs ficha 3218 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 64 | Comillas | Cantabria Occidental | precio relato ~2400 vs ficha 3722 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | lenguaje vago/revisar: tranquilo | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 65 | Suances | Cantabria Occidental | precio relato ~2000 vs ficha 3000 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 66 | Liencres (Piélagos) | Cantabria Occidental | precio relato ~2000 vs ficha 2227 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 67 | Santander | Cantabria Occidental | precio relato ~2600 vs ficha 3323 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 68 | Ribamontán al Mar | Cantabria Oriental | precio relato ~2300 vs ficha 3535 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | lenguaje vago/revisar: tranquilo | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 69 | Noja | Cantabria Oriental | precio relato ~2300 vs ficha 3296 | vuelo/Palma puede sonar permanente; capa 2026 matiza | repite horas de sol; menciona hospital también en capa Sanidad (+4) | lenguaje vago/revisar: tranquilo | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 70 | Santoña | Cantabria Oriental | precio relato ~1900 vs ficha 2120 | minutos hospital en prosa (capa 2026 prioriza texto práctico); vuelo/Palma puede sonar permanente; capa 2026 matiza (+1) | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 71 | Laredo | Cantabria Oriental | precio relato ~2100 vs ficha 2951 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 72 | Castro-Urdiales | Cantabria Oriental | precio relato ~2400 vs ficha 2861 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 73 | Valença | Alto Minho (PT) | — | usa cerca/a un paso | repite €/m² ya en TablaPrecios/capa; repite horas de sol (+5) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 74 | Vila Nova de Cerveira | Alto Minho (PT) | precio relato ~1500 vs ficha 1339 | usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | lenguaje vago/revisar: tranquilo, todos los servicios | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 75 | Caminha | Alto Minho (PT) | precio relato ~1900 vs ficha 2082 | — | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 76 | Moledo (Caminha) | Alto Minho (PT) | precio relato ~2300 vs ficha 1909 | — | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 77 | Vila Praia de Âncora (Caminha) | Alto Minho (PT) | precio relato ~2000 vs ficha 2692 | usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 78 | Afife-Carreço (Viana) | Alto Minho (PT) | precio n.d. en ficha pero relato cita €/m² [2100, 2100, 2100] | minutos hospital en prosa (capa 2026 prioriza texto práctico); usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 79 | Viana do Castelo | Alto Minho (PT) | precio relato ~2100 vs ficha 2337 | minutos hospital en prosa (capa 2026 prioriza texto práctico); usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | lenguaje vago/revisar: tranquilo | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 80 | Ponte de Lima | Alto Minho (PT) | — | precio relato ~1500 vs ficha 1626 (desvío); usa cerca/a un paso | menciona hospital también en capa Sanidad; repite nota servicios X/10 (+3) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 81 | Esposende | Litoral Norte (PT) | precio relato ~2300 vs ficha 2462 | usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 82 | Póvoa de Varzim | Litoral Norte (PT) | — | precio relato ~2600 vs ficha 2730 (desvío); usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 83 | Vila do Conde | Litoral Norte (PT) | precio relato ~2600 vs ficha 2875 | — | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |

---

## 4. Contradicciones concretas (P0)

Total lugares con P0: **51**.

### 4.1 Precio n.d. en ficha con cifra en relato

| Lugar | Cifra(s) en relato | `precioM2` ficha |
|---|---|---|
| Vilaboa (`vilaboa`) | precio n.d. en ficha pero relato cita €/m² [1300] | n.d. |
| Xove (`xove`) | precio n.d. en ficha pero relato cita €/m² [950] | n.d. |
| Muros de Nalón (`muros-de-nalon`) | precio n.d. en ficha pero relato cita €/m² [1100, 1100] | n.d. |
| Afife-Carreço (Viana) (`afife-carreco`) | precio n.d. en ficha pero relato cita €/m² [2100, 2100, 2100] | n.d. |

### 4.2 Precio relato vs ficha (desvío > 150 €/m²)

| Lugar | Conflicto |
|---|---|
| Nigrán | precio relato ~2600 vs ficha 2909 |
| Gondomar | precio relato ~1700 vs ficha 1286 |
| Soutomaior | precio relato ~1300 vs ficha 2111 |
| Cangas | precio relato ~1750 vs ficha 2157 |
| Bueu | precio relato ~1500 vs ficha 1908 |
| Pontevedra | precio relato ~1900 vs ficha 2596 |
| Sanxenxo | precio relato ~2900 vs ficha 3351 |
| O Grove | precio relato ~2300 vs ficha 2500 |
| Meaño | precio relato ~1350 vs ficha 1013 |
| A Illa de Arousa | precio relato ~1900 vs ficha 3012 |
| Vilanova de Arousa | precio relato ~1350 vs ficha 1969 |
| Rianxo | precio relato ~1200 vs ficha 959 |
| A Pobra do Caramiñal | precio relato ~1300 vs ficha 1516 |
| Porto do Son | precio relato ~1350 vs ficha 1525 |
| O Vicedo | precio relato ~900 vs ficha 1093 |
| Barreiros | precio relato ~1150 vs ficha 1732 |
| Castropol | precio relato ~1050 vs ficha 1295 |
| Tapia de Casariego | precio relato ~1350 vs ficha 2200 |
| Navia | precio relato ~1100 vs ficha 1384 |
| Luarca (Valdés) | precio relato ~1050 vs ficha 1256 |
| Cudillero | precio relato ~1400 vs ficha 1636 |
| Salinas (Castrillón) | precio relato ~1700 vs ficha 3226 |
| Luanco (Gozón) | precio relato ~1800 vs ficha 2379 |
| Candás (Carreño) | precio relato ~1650 vs ficha 1840 |
| Gijón | precio relato ~2300 vs ficha 2696 |
| Villaviciosa | precio relato ~1500 vs ficha 1864 |
| Ribadesella | precio relato ~2200 vs ficha 2632 |
| Llanes | precio relato ~2100 vs ficha 2391 |
| San Vicente de la Barquera | precio relato ~2100 vs ficha 3218 |
| Comillas | precio relato ~2400 vs ficha 3722 |
| Suances | precio relato ~2000 vs ficha 3000 |
| Liencres (Piélagos) | precio relato ~2000 vs ficha 2227 |
| Santander | precio relato ~2600 vs ficha 3323 |
| Ribamontán al Mar | precio relato ~2300 vs ficha 3535 |
| Noja | precio relato ~2300 vs ficha 3296 |
| Santoña | precio relato ~1900 vs ficha 2120 |
| Laredo | precio relato ~2100 vs ficha 2951 |
| Castro-Urdiales | precio relato ~2400 vs ficha 2861 |
| Vila Nova de Cerveira | precio relato ~1500 vs ficha 1339 |
| Caminha | precio relato ~1900 vs ficha 2082 |
| Moledo (Caminha) | precio relato ~2300 vs ficha 1909 |
| Vila Praia de Âncora (Caminha) | precio relato ~2000 vs ficha 2692 |
| Viana do Castelo | precio relato ~2100 vs ficha 2337 |
| Esposende | precio relato ~2300 vs ficha 2462 |
| Vila do Conde | precio relato ~2600 vs ficha 2875 |

### 4.3 Clima

| Lugar | Conflicto | Nota |
|---|---|---|
| A Coruña | sol relato 1939 vs ficha 2050 | Deuda AEMET conocida; no corregir en este bloque |
| Oleiros | sol relato 1939 vs ficha 2050 | Eco de prosa compartida / misma estación; revisar al reescribir |

### 4.4 Playa / hospital / transporte

Tras filtrar negaciones («No encaja si… playa a la puerta»), **no** quedan P0 de playa cotidiana afirmativa contra `playaCotidiana=NO`.

Hospital/aeropuerto: no se detectaron contradicciones nominales directas de nombre de hospital; sí hay P1 de minutos históricos y P2 de duplicación con capa Sanidad/Conexiones.

---

## 5. Lenguaje problemático

Búsqueda sistemática sobre el texto completo del relato. Fragmentos = ventana corta; no son reescrituras.

| Patrón | Nº lugares | Lectura editorial |
|---|---:|---|
| `cerca/paso` | 78 | Muchos usos son distancia útil; parte son «cerca de N» cuantitativo o «a un paso» de frontera. Revisar los que omiten modo/tiempo. |
| `Mallorca` | 63 | Ver §6. |
| `mejor/peor` | 60 | Comparativos editoriales habituales («explica mejor», «encaja mejor»); no ranking de municipios. Podar solo si suena a veredicto absoluto. |
| `turístico` | 42 | Frecuente en fiestas «interés turístico» (neutro) vs carga de veraneo. |
| `tranquilo` | 22 | A menudo útil como contraste estacional; evitar como único argumento. |
| `el estudio` | 6 | Autorreferencia innecesaria; preferir hecho del lugar. |
| `inversión/revaloriz` | 3 | Choca con regla de no promesa de rentabilidad; alinear con `mercadoReventa` factual. |
| `todos los servicios` | 2 | Aparece sobre todo en Encaja negativo (condición). Revisar si suena a check-list. |
| `bien comunicado` | 1 | Abstracción; preferir modo concreto (bus, A-55, tren). |
| `ideal` | 0 | Sin hallazgos en el barrido |
| `perfecto` | 0 | Sin hallazgos en el barrido |
| `jubilado` | 0 | Sin hallazgos en el barrido |
| `presupuesto personal` | 0 | Sin hallazgos en el barrido |

### 5.1 Muestras (lugar + fragmento)

**cerca/paso**

- A Guarda: …éndose al Atlántico—. Portugal está tan cerca que, con el viento a favor, se oyen las…
- Oia: …n otro municipio de Baixo Miño está tan cerca de la puerta. Si se quiere pueblo —plaz…
- O Rosal: …tenía sus horas de molienda. De ahí los cerca de sesenta molinos del Folón y del Picó…
- Tomiño: …o —unos setenta y ocho días despejados, cerca de dos mil cuatrocientas horas de sol—…
- Tui: …, una cafetería con peregrinos, Valença a un paso. Un domingo de agosto en el ensanche: c…
- O Vicedo: …scos de la zona, con máximas habituales cerca de 22 °C y casi ningún día sobre 30 °C:…
- Viveiro: …a. El verano ronda 18,5 °C, con máximas cerca de 22 °C y casi ningún día sobre 30 °C:…
- Xove: …esco frente a Baleares: máximas típicas cerca de 22 °C, casi sin días sobre 30 °C. En…

**todos los servicios**

- Vila Nova de Cerveira: …seguro privado portugués. No encaja si todos los servicios deben estar a pie o si la playa atlánti…
- Soutomaior: …e más cómoda sea Cesantes. No encaja si todos los servicios deben estar a pie. Fuera de Arcade, el…

**bien comunicado**

- Vigo: …quiera más metros suele mirar un barrio bien comunicado algo más lejos del agua, no la primera…

**tranquilo**

- Foz: …a capa histórica del interior. Es villa tranquila y asequible frente a Ribadeo o Viveiro.…
- Vila Nova de Cerveira: …o a unos veinte minutos—, villa fluvial tranquila y culta, no colonia de chalés ni ciudad…
- Viana do Castelo: …ado, tren y comercio. Es ciudad limpia, tranquila y culta: la capital del Alto Minho. Qui…
- Muros de Nalón: …iano sin abandonar la lógica de concejo tranquilo. Muros encaja para quien quiera silenci…
- Soto del Barco: …Soto encaja para quien quiera estuario tranquilo, playa larga y aeropuerto a diez minuto…
- Comillas: …umentos. En invierno la villa queda muy tranquila —casi vacía fuera del núcleo—. Quien se…
- Ribamontán al Mar: …quiera casa baja en zona rural-costera tranquila con Santander enfrente y aeropuerto a q…
- Noja: …l año. De octubre a mayo Noja queda muy tranquila —casi vacía—; el estudio la señala como…

**el estudio**

- Afife-Carreço (Viana): …nte y mar a tres minutos —la escala que el estudio compara con vivir en granito con océano…
- Suances: …un martes de noviembre entiende por qué el estudio la señala como villa con vida todo el a…
- Liencres (Piélagos): …el metro de Santander entenderá por qué el estudio apunta aquí si Cantabria Occidental se…
- Noja: …Noja queda muy tranquila —casi vacía—; el estudio la señala como segunda residencia, no p…
- Esposende: …do Conde encontrará aquí la opción que el estudio elige en la zona. También encaja para q…
- Póvoa de Varzim: …buscan casas bajas en el frente de mar —el estudio lo lista entre lo que no tendrás en Póv…

**inversión/revaloriz**

- Viana do Castelo: …—. Hay obra nueva. Facilidad de venta y revalorización altas —8/10—. Quien se decida a vi…
- Llanes: …villa de destino. Facilidad de venta y revalorización altas en el contexto de la zona ha…
- Ferrol: …limitada. En el centro importan calle, revalorización (conviene mirar la calle y el hist…

---

## 6. Mallorca

- **83/83** relatos mencionan Mallorca y/o Baleares.
- Patrón explícito «Si vienes de Baleares» / «frente a Mallorca»: **63** lugares en el barrido de frase hecha.

### Usos distinguidos

1. **Comparación climática útil** — horas de sol, verano fresco vs calor mallorquín, lluvia invierno. Metodológicamente identificable (bloque `tiempo` / Frente a Mallorca).
2. **Referencia repetitiva** — misma plantilla «Si vienes de Baleares…» en muchos municipios (especialmente A Mariña / lotes claros). Útil como marco, pero intercambiable.
3. **Personalizada** — «vienes de Mallorca/Baleares» como vocativo; no es consejo «para ti» de compra, pero sí marco de lector.
4. **Dato que puede necesitar actualización** — vuelos a Palma presentados sin matiz estacional cuando `palmaDirecta2026` sí lo matiza (P1 frecuente).
5. **Escala comprensible** — agua 16–18 °C vs Mediterráneo; días de calor de valle vs costa. Conservar.

No eliminar nada en este bloque; en reescritura: conservar contraste climatico, recortar plantilla repetida, alinear vuelos con capa 2026.

---

## 7. Casos prioritarios detallados

### Ares (`ares`)

- Zona: Golfo Ártabro e Ferrol · Prioridad: **ALTA** · Archivo: `relatos-golfo-artabro-e-ferrol.ts`
- P0: —
- P1: usa cerca/a un paso
- P2: repite €/m² ya en TablaPrecios/capa; repite horas de sol; repite nota servicios X/10; mar/playa también en capa factual
- P3: —
- P4: estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir; clima editorial
- Lectura: Sin P0 de precio. P1/P2: cerca + repite €/m² y sol. Relato útil de ría/Redes; al reescribir, dejar cifras a capa/TablaPrecios y conservar escena de aldea/ría.

### A Coruña (`a-coruna`)

- Zona: Golfo Ártabro e Ferrol · Prioridad: **URGENTE** · Archivo: `relatos-golfo-artabro-e-ferrol.ts`
- P0: sol relato 1939 vs ficha 2050 (deuda AEMET conocida)
- P1: vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso
- P2: repite €/m² ya en TablaPrecios/capa; menciona hospital también en capa Sanidad; repite nota servicios X/10; mar/playa también en capa factual
- P3: —
- P4: estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir; clima editorial
- Lectura: P0 clima 1939 vs 2050 (deuda conocida). P1 vuelos Palma / cerca. P2 precio+hospital. Conservar ciudad+mar y María Pita; no «arreglar» sol aquí.

### Cudillero (`cudillero`)

- Zona: Asturias Centro · Prioridad: **URGENTE** · Archivo: `relatos-asturias-centro.ts`
- P0: precio relato ~1400 vs ficha 1636
- P1: vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso
- P2: repite horas de sol; repite nota servicios X/10; mar/playa también en capa factual; Palma/aeropuerto también en Conexiones
- P3: —
- P4: estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir; clima editorial
- Lectura: P0 precio ~1400 vs 1636. Pueblo colgado vs El Pito: alto P4. Quitar cifra o alinear; no aplanar el contraste topográfico.

### Barreiros (`barreiros`)

- Zona: A Mariña · Prioridad: **URGENTE** · Archivo: `relatos-a-marina.ts`
- P0: precio relato ~1150 vs ficha 1732
- P1: usa cerca/a un paso
- P2: repite horas de sol; menciona hospital también en capa Sanidad; repite nota servicios X/10; mar/playa también en capa factual
- P3: —
- P4: estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir; clima editorial
- Lectura: P0 precio ~1150 vs 1732 (desvío grande). Relato de ría/playa tranquila; cifra desactualizada es el riesgo principal.

### Sanxenxo (`sanxenxo`)

- Zona: Pontevedra e Sanxenxo · Prioridad: **URGENTE** · Archivo: `relatos-pontevedra-e-sanxenxo.ts`
- P0: precio relato ~2900 vs ficha 3351
- P1: minutos hospital en prosa (capa 2026 prioriza texto práctico); vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso
- P2: repite horas de sol; menciona hospital también en capa Sanidad; repite nota servicios X/10; mar/playa también en capa factual
- P3: —
- P4: estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir; clima editorial
- Lectura: P0 precio ~2900 vs 3351. P1 hospital minutos + Palma. Veraneo intenso = P4; no diluir estacionalidad al limpiar datos.

### Salinas (Castrillón) (`salinas-castrillon`)

- Zona: Asturias Centro · Prioridad: **URGENTE** · Archivo: `relatos-asturias-centro.ts`
- P0: precio relato ~1700 vs ficha 3226
- P1: vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso
- P2: repite horas de sol; menciona hospital también en capa Sanidad; repite nota servicios X/10; mar/playa también en capa factual
- P3: —
- P4: estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir; clima editorial
- Lectura: P0 precio ~1700 vs 3226 (de los mayores desvíos). Villa-paseo + aeropuerto = valor; cifra en prosa induce error fuerte.

### Llanes (`llanes`)

- Zona: Asturias Oriente · Prioridad: **URGENTE** · Archivo: `relatos-asturias-oriente.ts`
- P0: precio relato ~2100 vs ficha 2391
- P1: vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso
- P2: repite horas de sol; menciona hospital también en capa Sanidad; repite nota servicios X/10; mar/playa también en capa factual
- P3: —
- P4: estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir; clima editorial
- Lectura: P0 ~2100 vs 2391. Revalorización citada (lenguaje inversión). Conservar casco/playas; podar promesa de liquidez.

### Ribadesella (`ribadesella`)

- Zona: Asturias Oriente · Prioridad: **URGENTE** · Archivo: `relatos-asturias-oriente.ts`
- P0: precio relato ~2200 vs ficha 2632
- P1: vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso
- P2: repite horas de sol; menciona hospital también en capa Sanidad; repite nota servicios X/10; mar/playa también en capa factual
- P3: —
- P4: estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir; clima editorial
- Lectura: P0 ~2200 vs 2632. Descenso Sella / casco = P4. Alinear precio y minutos sanitarios.

### Moledo (Caminha) (`moledo-caminha`)

- Zona: Alto Minho (PT) · Prioridad: **URGENTE** · Archivo: `relatos-alto-minho.ts`
- P0: precio relato ~2300 vs ficha 1909
- P1: —
- P2: repite horas de sol; menciona hospital también en capa Sanidad; repite nota servicios X/10; mar/playa también en capa factual
- P3: —
- P4: estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir; clima editorial
- Lectura: P0 ~2300 vs 1909 (relato más caro que ficha). Escena pinar/dunas/Ínsua excelente; corregir metro sin tocar atmósfera.

### Vigo (`vigo`)

- Zona: Vigo e ría · Prioridad: **ALTA** · Archivo: `relatos-vigo-e-ria.ts`
- P0: —
- P1: precio relato ~2700 vs ficha 2591 (desvío); vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso
- P2: repite horas de sol; menciona hospital también en capa Sanidad; mar/playa también en capa factual; Palma/aeropuerto también en Conexiones
- P3: lenguaje vago/revisar: bien comunicado
- P4: estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir; clima editorial
- Lectura: Sin P0; P1 desvío precio ~2700 vs 2591 + Palma. «Bien comunicado» P3. Ciudad completa: dejar logística a capa.

### Pontevedra (`pontevedra`)

- Zona: Pontevedra e Sanxenxo · Prioridad: **URGENTE** · Archivo: `relatos-pontevedra-e-sanxenxo.ts`
- P0: precio relato ~1900 vs ficha 2596
- P1: minutos hospital en prosa (capa 2026 prioriza texto práctico); vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso
- P2: repite horas de sol; repite nota servicios X/10; mar/playa también en capa factual; Palma/aeropuerto también en Conexiones
- P3: lenguaje vago/revisar: tranquilo
- P4: estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir; clima editorial
- Lectura: P0 ~1900 vs 2596. Hospital a 5 min en prosa + servicios 10/10 = P1/P2. Casco peatonal = P4.

### Gijón (`gijon`)

- Zona: Asturias Centro · Prioridad: **URGENTE** · Archivo: `relatos-asturias-centro.ts`
- P0: precio relato ~2300 vs ficha 2696
- P1: vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso
- P2: repite horas de sol; repite nota servicios X/10; mar/playa también en capa factual; Palma/aeropuerto también en Conexiones
- P3: —
- P4: estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir; clima editorial
- Lectura: P0 ~2300 vs 2696. Ciudad 10/10; duplica casi toda la capa. Conservar San Lorenzo/Somió como mapa mental.

### Santander (`santander`)

- Zona: Cantabria Occidental · Prioridad: **URGENTE** · Archivo: `relatos-cantabria-occidental.ts`
- P0: precio relato ~2600 vs ficha 3323
- P1: vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso
- P2: repite horas de sol; menciona hospital también en capa Sanidad; repite nota servicios X/10; mar/playa también en capa factual
- P3: —
- P4: estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir; clima editorial
- Lectura: P0 ~2600 vs 3323. Misma lógica ciudad-cantábrica: cifra vieja + escena Sardinero a conservar.

### Viana do Castelo (`viana-do-castelo`)

- Zona: Alto Minho (PT) · Prioridad: **URGENTE** · Archivo: `relatos-alto-minho.ts`
- P0: precio relato ~2100 vs ficha 2337
- P1: minutos hospital en prosa (capa 2026 prioriza texto práctico); usa cerca/a un paso
- P2: repite horas de sol; menciona hospital también en capa Sanidad; repite nota servicios X/10; mar/playa también en capa factual
- P3: lenguaje vago/revisar: tranquilo
- P4: estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir; clima editorial
- Lectura: P0 ~2100 vs 2337. Capital Alto Minho; «tranquilo» + revalorización. Alinear y conservar Santa Luzia/Lima.

### Póvoa de Varzim (`povoa-de-varzim`)

- Zona: Litoral Norte (PT) · Prioridad: **ALTA** · Archivo: `relatos-litoral-norte.ts`
- P0: —
- P1: precio relato ~2600 vs ficha 2730 (desvío); usa cerca/a un paso
- P2: repite horas de sol; menciona hospital también en capa Sanidad; repite nota servicios X/10; mar/playa también en capa factual
- P3: —
- P4: estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir; clima editorial
- Lectura: P1 desvío leve precio. Relato de ciudad balnearia; poca contradicción dura.

### Vila do Conde (`vila-do-conde`)

- Zona: Litoral Norte (PT) · Prioridad: **URGENTE** · Archivo: `relatos-litoral-norte.ts`
- P0: precio relato ~2600 vs ficha 2875
- P1: —
- P2: repite horas de sol; menciona hospital también en capa Sanidad; repite nota servicios X/10; mar/playa también en capa factual
- P3: —
- P4: estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir; clima editorial
- Lectura: P0 ~2600 vs 2875. Alinear metro; conservar carácter conventual/costa.

### Precios n.d. (4)

#### Vilaboa

- `precioM2` ficha: **n.d.**
- Relato cita precio concreto: **sí** → precio n.d. en ficha pero relato cita €/m² [1300]
- Prioridad: **URGENTE** · Archivo: `relatos-vigo-e-ria.ts`
- Acción futura: eliminar o reformular cifra; remitir a Idealista del mes / capa; no inventar metro.

#### Xove

- `precioM2` ficha: **n.d.**
- Relato cita precio concreto: **sí** → precio n.d. en ficha pero relato cita €/m² [950]
- Prioridad: **URGENTE** · Archivo: `relatos-a-marina.ts`
- Acción futura: eliminar o reformular cifra; remitir a Idealista del mes / capa; no inventar metro.

#### Muros de Nalón

- `precioM2` ficha: **n.d.**
- Relato cita precio concreto: **sí** → precio n.d. en ficha pero relato cita €/m² [1100, 1100]
- Prioridad: **URGENTE** · Archivo: `relatos-asturias-centro.ts`
- Acción futura: eliminar o reformular cifra; remitir a Idealista del mes / capa; no inventar metro.

#### Afife-Carreço (Viana)

- `precioM2` ficha: **n.d.**
- Relato cita precio concreto: **sí** → precio n.d. en ficha pero relato cita €/m² [2100, 2100, 2100]
- Prioridad: **URGENTE** · Archivo: `relatos-alto-minho.ts`
- Acción futura: eliminar o reformular cifra; remitir a Idealista del mes / capa; no inventar metro.

---

## 8. Plan de lotes para reescritura (sin ejecutar)

Principio: **ChatGPT entrega prosa** · **Cursor solo pega/valida** · Cursor no resume ni SEO-optimiza.

### Orden sugerido por deuda editorial

1. **Lote 0 — Precios n.d.** (4 lugares): Vilaboa, Xove, Muros de Nalón, Afife-Carreço. Objetivo: quitar cifras inventadas/viejas con ficha n.d.
2. **Lote 1 — Desvíos de precio extremos + ciudades** (Salinas/Castrillón, Comillas, San Vicente, Suances, Ribamontán, Noja, A Illa, Soutomaior, Tapia, Pontevedra, Santander…).
3. **Lote 2 — Asturias Centro + Oriente** (Cudillero, Gijón, Ribadesella, Llanes, …).
4. **Lote 3 — Rías Baixas / Morrazo / Salnés / Barbanza** (Sanxenxo, Cangas, Meaño, …).
5. **Lote 4 — A Mariña + Occidente** (Barreiros, Castropol, Navia, …).
6. **Lote 5 — Portugal** (Alto Minho + Litoral Norte) tras n.d.
7. **Lote 6 — Golfo Ártabro** (A Coruña clima + Ferrol/Oleiros) con regla explícita de no «arreglar» 1939/2050 sin decisión metodológica.
8. **Lote 7 — Pulido P3/lenguaje** (tranquilo, el estudio, revalorización, cerca sin modo) en relatos ya alineados de cifra.

### Cómo evitar que Cursor invente o resuma

- Entregar **texto final por campo** (`abrir[]`, `tiempo[]`, …) listo para pegar.
- Instrucción fija: *sustituir arrays literales; no parafrasear; no acortar Encaja; no tocar fotos.*
- Checklist de hechos a respetar por lugar: `precioM2` o n.d., `solHoras`, `hospitalPractico2026`, `palmaDirecta2026`, `playaCotidiana`+modo, `casaQueBuscar`, `mercadoReventa`.
- Validación: diff solo en archivos de relatos; `qa_master` + `sync --check`; lectura humana de Encaja y de 2 escenas P4.
- Prohibido: generar 83 de golpe; «mejorar claridad» sin texto fuente; mover cifras de capa al relato.

### Conservar P4

Antes de aceptar un lote: listar 3 detalles que no están en capa (topónimo glosado, escena nov/ago, oficio/historia). Si desaparecen en el texto nuevo → rechazar.

---

## 9. Archivos del PRIMER lote únicamente

**Lote 0 — precios n.d. (4 municipios)**

| Lugar | Archivo |
|---|---|
| Vilaboa | `web/src/lib/relatos-vigo-e-ria.ts` |
| Xove | `web/src/lib/relatos-a-marina.ts` |
| Muros de Nalón | `web/src/lib/relatos-asturias-centro.ts` |
| Afife-Carreço | `web/src/lib/relatos-alto-minho.ts` |

Hechos a respetar: `precioM2 = null`/n.d.; no introducir metro nuevo; Idealista del mes como remisión; resto de capa 2026 intacta.

No incluidos en el primer lote: UI, JSON de fichas, mapas, fotos, otros 79 relatos.

---

## Anexo — Conteos rápidos

- P0: 51 · P1: 80 · P2: 83 · P3: 23 · P4: 83
- Prioridades: {'ALTA': 32, 'URGENTE': 51}
- Mallorca (mención cualquier): 83/83
- Artefacto interno de trabajo (no commit): `output/_audit_editorial_rows.json`
- Script de barrido (no commit requerido): `scripts/_audit_editorial_cursor14.py`

