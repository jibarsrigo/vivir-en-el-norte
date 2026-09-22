# Fuentes para reescribir Portugal

**Bloque:** CURSOR_32  
**Alcance:** extracción + auditoría documental. **No** reescritura. **No** corrección de producto. **No** internet.  
**Protección (solo lectura):** A Mariña **8/8** + Asturias **16/16** + Cantabria **10/10** = **34** fingerprints — **no modificar**.  
**NO PLAN_EDITORIAL** Portugal.

**Lugares (11):** Valença · Vila Nova de Cerveira · Caminha · Moledo · Vila Praia de Âncora · Afife-Carreço · Viana do Castelo · Ponte de Lima · Esposende · Póvoa de Varzim · Vila do Conde  

**Archivos relatos:** `web/src/lib/relatos-alto-minho.ts`, `web/src/lib/relatos-litoral-norte.ts`  
**Archivos capa:** `web/src/data/municipios-alto-minho.json`, `web/src/data/municipios-litoral-norte.json`

**Excepción aislada:** Valença (hospital práctico vs Conde; aero Porto vs Vigo) — documentada; no bloquea los otros 10.

---

## 1. Reglas y jerarquía

1. **Capa estructurada 2026** (JSON Alto Minho / Litoral Norte) = autoridad para hechos actuales.
2. **Auditorías 2026** (`AUDITORIA_EDITORIAL_RELATOS_2026.md` filas **73–83**, `P0_RESTANTES_POST_PRECIOS_2026.md`) = autoridad sobre problemas detectados.
3. **Relato actual** = P4, escenas, topónimos; **no** autoridad si contradice la capa.
4. **estudio_zonas.md** §15–16 y precios históricos = trazabilidad/contexto; **no** sustituyen 2026.
5. **No internet.** Ausencias se documentan; no se rellenan por intuición.
6. **No** convertir textos truncados `…` (`casaQueBuscar` / `mercadoReventa`) en detalle inventado — marcar **DESEABLE**.
7. Omisiones de €/m², A/B y notas X/10 que viven en FichaCapa2026/TablaPrecios **no** son conflictos si la prosa no las repite.
8. **No existe** plan editorial tipo CURSOR_19 para Portugal: este paquete construye fichas solo con material ya en repo. **NO PLAN_EDITORIAL.**
9. **Separación LOCAL vs COMUN_PORTUGAL (obligatoria):**
   - **LOCAL:** vida cotidiana, servicios, sanidad práctica del pueblo, transporte, playa/río/paseo, coche, estacionalidad, vivienda, microzona, aeropuerto/Palma local, P4 y peajes locales.
   - **COMUN_PORTUGAL:** residencia/CRUE, NIF, fiscalidad (p. ej. régimen cerrado 2024), sanidad transfronteriza/S1, coche/matriculación nacional, Seguridad Social, trámites nacionales, banca/telefonía, seguro privado genérico, tarjeta europea/española, Cunqueiro no residente, Trofa/SNS genéricos.
   - Lo **COMUN** no se repetirá once veces en reescritura. Si aparece: marcar `COMUN_PORTUGAL`, conservar solo consecuencia local, **no corregir** aquí, **no** investigar, **no** consejo legal/fiscal.
10. Macro-batch reduce viajes; **no** reduce controles: auditar **11/11** individualmente. Conflicto real → aislar excepción y continuar.

Estados: `ALINEADO` · `OBSOLETO` · `DUPLICA_CAPA` · `P4_PRESERVAR` · `SOPORTADO_PERO_INFRAUSADO` · `NO_SOPORTADO_NO_INVENTAR` · `REQUIERE_VERIFICACION_EXTERNA` · `COMUN_PORTUGAL`

### Conflictos de precio (AUDITORIA 73–83) — capa prevalece; Afife null

| # | Lugar | Relato histórico ~€/m² | Capa `precioM2` |
|---|---|---|---|
| 73 | Valença | None / ~1300 prosa | **1270** |
| 74 | Vila Nova de Cerveira | ~1500 | **1339** |
| 75 | Caminha | ~1900 | **2082** |
| 76 | Moledo (Caminha) | ~2300 | **1909** |
| 77 | Vila Praia de Âncora | ~2000 | **2692** |
| 78 | Afife-Carreço | ~2100 (auditoría; capa null) | `null` |
| 79 | Viana do Castelo | ~2100 | **2337** |
| 80 | Ponte de Lima | ~1500 | **1626** |
| 81 | Esposende | ~2300 | **2462** |
| 82 | Póvoa de Varzim | ~2600 | **2730** |
| 83 | Vila do Conde | ~2600 | **2875** |

### Extractos de auditoría global (CITA)

Filas n=73–83:

```
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
```

P0 restantes (73–83):

```
| 73 | Valença | Alto Minho (PT) | no | — |
| 74 | Vila Nova de Cerveira | Alto Minho (PT) | no | — |
| 75 | Caminha | Alto Minho (PT) | no | — |
| 76 | Moledo (Caminha) | Alto Minho (PT) | no | — |
| 77 | Vila Praia de Âncora (Caminha) | Alto Minho (PT) | no | — |
| 78 | Afife-Carreço (Viana) | Alto Minho (PT) | no | — |
| 79 | Viana do Castelo | Alto Minho (PT) | no | — |
| 80 | Ponte de Lima | Alto Minho (PT) | no | — |
| 81 | Esposende | Litoral Norte (PT) | no | — |
| 82 | Póvoa de Varzim | Litoral Norte (PT) | no | — |
| 83 | Vila do Conde | Litoral Norte (PT) | no | — |
```

### Estudio de zonas §15–16 (histórico — NO autoridad 2026)

<details><summary>CITA estudio_zonas.md §15 Alto Minho</summary>

15. Alto Minho (Portugal) · Valença, Vila Nova de Cerveira, Caminha, Moledo, Vila Praia de Âncora, Afife-Carreço, Viana do Castelo, Ponte de Lima

La zona

El norte de Portugal entre el Miño y Viana do Castelo (90.000 hab.), con la Serra d'Arga (825 m) plantada entre el río y el mar. En la costa, aldeas de granito entre el monte y la playa (Afife, Carreço, Areosa), villas de veraneo elegante (Moledo, Vila Praia de Âncora), la desembocadura del Miño (Caminha) y la ciudad de Viana, con la basílica de Santa Luzia sobre ella. En el río, la fortaleza de Valença frente a Tui y la villa de artistas de Cerveira. En el interior, Ponte de Lima, la villa más antigua de Portugal, con su puente romano-medieval sobre el Lima.

Portugal está entre los cinco-siete países más seguros del mundo (Global Peace Index) y su norte es la región más tranquila del país. Los portugueses entienden el castellano y muchos lo hablan. El coste de vida (restaurantes, vino, pescado, servicios, seguros) es inferior al de Galicia; la cesta del supermercado, parecida (Mercadona, Lidl, Continente, Pingo Doce). La sanidad pública es más lenta y hay que contar con seguro privado; el régimen fiscal ventajoso para pensionistas (RNH) se cerró en 2024.

Clima mes a mes

| | Oct-Mar | Abr-May | Jun-Sep | Año |
|---|---|---|---|---|
| Días de lluvia al mes | 12-15 | 9-11 | 2-5 | 112-120 |
| Máxima / mínima típica | 14 / 5 °C (ene.) | 20 / 10 °C | 25 / 15 °C (jul., costa) · 29-30 / 14 °C (Ponte de Lima) | |
| Horas de sol al mes | 110-150 | 220-250 | 290-320 | 2.400-2.500 |

Sol 2.500 h en la costa (Caminha, Moledo, Âncora, Afife, Viana), 2.400-2.450 en el río y el interior; 78-80 días despejados, 108-112 cubiertos: el mejor cielo de la tabla junto con el Litoral Norte. Lluvia 1.450 mm en la costa (112-115 días), 1.600-1.700 en el interior (118-120). Verano en la costa 20,5 °C, 3-6 días > 30 °C; en Ponte de Lima y Valença 21-21,5 °C, 20-25 días > 30 °C (el verano de Mancor) y niebla alta de valle en invierno (Ponte de Lima). Viento: alto en la costa (la "nortada", viento norte fuerte por las tardes de junio a agosto, marcado en Moledo, Afife y Viana), bajo en el río. Comparado con Mancor: 300-400 h de sol menos; julio y agosto casi tan secos como en Mallorca (2-3 días de lluvia); invierno con 13-15 días de lluvia al mes.

Mar y baño

Playas atlánticas abiertas y ventosas, con el agua más fría de la tabla (16-18 °C en agosto): Moledo (dunas, pinar, Forte da Ínsua enfrente), Vila Praia de Âncora (con tramo abrigado por el espigón: la mejor para bañarse con calma), Gelfa, Afife (surf), Paçô y Carreço, Praia Norte (Viana; piscinas de marea), Cabedelo (Viana; surf, kite). Foz do Minho (Caminha; estuario, más templado). Praias fluviales en Cerveira y Ponte de Lima. Para bañarse en agua templada, cruzar a Cesantes o a la ría de Vigo (40-60 min desde Valença).

Paseos y montaña

Serra d'Arga (Santo João d'Arga, aldeas de piedra, caballos, ruta desde Âncora, Caminha o Carreço); Monte de Santa Luzia (Viana; basílica, funicular, citania celta; una de las vistas de mar más citadas de Portugal); farol y molinos de Montedor (Carreço); Camino Portugués de la Costa (pasa por todos los pueblos costeros); Ecovia do Litoral Norte (pasarelas de madera Viana-Caminha); Ecopista do Minho (Valença-Monção, 15 km llanos); Ecovia do Lima y Lagoas de Bertiandos (Ponte de Lima); Fortaleza de Valença (paseo por los baluartes); Alto do Cervo (Cerveira). Termas de Monção y Melgaço a 30-45 min desde Valença; Gerês a 1 h 15 desde Ponte de Lima. Golf: Axis Golfe Ponte de Lima. Es una zona con monte de verdad detrás de casa en toda la costa (Arga) y de granito: la más parecida a la Tramuntana en material.

Servicios y ciudad de referencia

Viana do Castelo 9/10 (ciudad completa: comercio, hospital, tren, cultura, mercado, paseo). Valença 6/10 (comercio en la fortaleza, Tui a 5). Vila Praia de Âncora 6/10 (villa con vida todo el año). Ponte de Lima 6/10 (villa completa). Cerveira 5/10, Caminha 5/10. Moledo 3/10, Afife-Carreço 3/10 (aldeas; Viana o Âncora a 10-15). Ciudad de referencia: Viana a 10-15 desde Afife-Carreço, 20 desde Âncora, 30 desde Caminha y Cerveira, 25-30 desde Ponte de Lima; Braga (190.000) a 50 desde Ponte de Lima y Viana; Porto a 1 h.

Sanidad

Hospital de Santa Luzia (Viana, público, ULSAM): 5 min desde Viana, 15 desde Afife-Carreço, 20 desde Âncora, 25 desde Moledo, 30 desde Caminha. Hospital Conde de Bertiandos (Ponte de Lima, público, comarcal): 5 desde Ponte de Lima, 35 desde Cerveira, 40 desde Valença. Privados: Trofa Saúde en Braga (40 desde Ponte de Lima, 50 desde Viana, 60 desde Afife); CUF Porto a 1 h. Desde Valença y Cerveira, Álvaro Cunqueiro (Vigo) queda a 35-45 min, pero como no residente en España solo para urgencias con la tarjeta europea o pagando. Recomendación: seguro privado portugués (100-150 €/mes a los 63) con red en Viana, Braga y Porto.

Aeropuertos y Palma

Porto-Sá Carneiro (Palma en verano; más de 80 destinos directos) a 50 min desde Viana, 55 desde Afife y Ponte de Lima, 60 desde Caminha, Moledo y Âncora, 75 desde Cerveira. Vigo a 35 desde Valença y 45 desde Cerveira (Palma en verano). Santiago (Palma casi todo el año) a 90-115.

Precios y qué compras con 260.000 €

Valença 1.300 €/m², Cerveira y Ponte de Lima 1.500, Caminha 1.900, Vila Praia de Âncora 2.000, Afife-Carreço y Viana 2.100, Moledo 2.300. 3 habitaciones franja A: Caminha 222.000, Âncora 234.000, Afife y Viana 246.000 (entran), Moledo 269.000 (fuera). Casa de granito rehabilitada con terreno en Afife, Carreço o Areosa 200.000-280.000. En el interior (franja B), 3 habitaciones por 120.000-140.000 y quintas con viñedo desde 200.000. Obra nueva en Viana y Valença; poca en el resto; ninguna en Moledo. Fibra en todos (Afife-Carreço parcial). Impuestos de compra: IMT (unos 4-6 % efectivo en 260.000 € para vivienda habitual) + Imposto do Selo 0,8 % + notaría y registro.

Seguridad y ambiente

Sin tasa municipal comparable; Portugal registra menos delitos por habitante que España y el distrito de Viana es de los más tranquilos del país. Población extranjera baja (3-5 %; en Viana algo de comunidad brasileña y de jubilados europeos). Ambiente: aldeas y villas muy cuidadas, gente mayor y familias, veraneo de Porto y Braga en Moledo y Âncora en agosto, Camino de Santiago todo el año; tráfico ligero salvo la N-13 en verano.

Parecido con Mancor / Mallorca

Afife-Carreço 4/5: aldea de granito con la sierra encima, viñas en pérgola, huertas, y el mar a 3 min; una ciudad completa (Viana) a 10-15 min, como Inca. Ponte de Lima 3/5 en pueblo (piedra, plaza, río), pero con el calor y la niebla que no quieres. Viana ciudad 3/5 como "Inca ideal".

Lo que no tendrás

- Agua de mar templada (16-18 °C) ni tardes de terraza sin nortada de junio a agosto en la costa.
- Hospital privado a menos de 40-60 min; sanidad pública española.
- Vuelo a Palma todo el año a menos de 90 min.
- Régimen fiscal especial para pensionistas.
- Verano suave en Ponte de Lima y Valença (20-25 días > 30 °C).
- Casas bajas en el centro de Viana (bloques); sí en las freguesias.
- Trámites y papeleo en tu idioma (NIF, CRUE, Finanças, matriculación del coche).

Municipio a municipio

**Valença (nº 73).** 14.000 habitantes; fortaleza abaluartada del siglo XVII con comercio dentro (textil, restaurantes), Tui a 5 min por el puente, Ecopista do Minho, tren a Porto y a Vigo (Celta). Interior: franja B (Moledo a 25). Verano cálido (21 °C, 20 días > 30 °C), niebla media. Servicios 6/10, comunicaciones 8/10. Hospital Ponte de Lima 40; Vigo 35 (con las limitaciones dichas). Aeropuerto de Vigo 35. Precio 1.300: 3 habitaciones 123.000. Poca obra nueva. Para quién: quien quiera vivir con un pie en cada país por muy poco dinero y acepte calor de verano y playa a 25.

**Vila Nova de Cerveira (nº 74).** 9.000 habitantes; villa cuidada sobre el Miño frente a Goián (puente), castillo, Bienal de Arte, Aquamuseu, praia fluvial, Alto do Cervo (mirador). Franja B (Moledo a 20). Servicios 5/10. Hospital 35. Aeropuerto de Vigo 45, Porto 75. Precio 1.500: 3 habitaciones 142.000. Para quién: quien quiera villa fluvial tranquila y culta, entre Tui y Caminha.

**Caminha (nº 75).** 16.000 habitantes en el concelho; plaza histórica (Torre do Relógio, iglesia matriz), desembocadura del Miño con el pinar y el fuerte de la Ínsua, ferry a A Guarda, Serra d'Arga detrás. Playas de Foz do Minho y Moledo a 5 min. Viento medio. Servicios 5/10. Hospital 30. Aeropuerto 60. Precio 1.900: 3 habitaciones franja A 222.000. Poca obra nueva. Para quién: quien quiera villa histórica en la boca del Miño con Galicia enfrente.

**Moledo (Caminha) (nº 76).** 1.500 habitantes; el veraneo tradicional de la burguesía de Porto: chalés entre pinos, playa larga con dunas y viento (kite, surf), el fuerte de la Ínsua y Santa Trega enfrente. Viento alto. Servicios 3/10; coche 7/10. Hospital 25. Aeropuerto 60. Precio 2.300 (el más caro de la zona): 2 habitaciones franja A 194.000; 3 habitaciones 269.000 (fuera). Sin obra nueva. Para quién: quien quiera pinar, playa y ambiente elegante y tranquilo, y no le moleste el viento de las tardes.

**Vila Praia de Âncora (Caminha) (nº 77).** 5.000 habitantes; villa marinera con puerto, fortaleza de Lagarteira, playa con tramo abrigado por el espigón (la mejor para bañarse de la zona), Gelfa (pinar y dunas), mercado, tren (Viana 20 min, Porto 1 h 30), Serra d'Arga por el valle del Âncora. Viento medio. Servicios 6/10. Hospital 20. Aeropuerto 60. Precio 2.000: 3 habitaciones franja A 234.000. Poca obra nueva; fibra sí. Para quién: quien quiera villa con vida todo el año, servicios a pie y playa abrigada, a 20 min de Viana.

**Afife-Carreço (Viana) (nº 78).** Afife (1.500 hab.) y Carreço (1.800), con Areosa a continuación, son las freguesias del norte de Viana: aldeas de granito entre la Serra d'Arga y el mar, viñas en pérgola, huertas, molinos y faro de Montedor, playas de Afife (surf) y Paçô a 3 min, apeaderos de tren. Viento alto en la playa, bajo en la aldea (protegida por la ladera). Servicios 3/10; coche 7/10; fibra parcial. Hospital Viana 15. Aeropuerto 55. Precio 2.100: 3 habitaciones franja A 246.000; casa de granito con terreno 200.000-280.000. Poca obra nueva. Para quién: el que quiera Mancor con el mar a 3 min y Viana a 10-15 como Inca. Mi elección en Portugal.

**Viana do Castelo (nº 79).** 90.000 habitantes en el concelho (40.000 en la ciudad); Santa Luzia, Praça da República, puente Eiffel, buque-hospital Gil Eannes, paseo del Lima, Praia Norte con piscinas, Cabedelo (surf) al otro lado del río, mercado, tren, comercio. Ciudad limpia, tranquila y culta. Servicios 9/10. Hospital 5. Aeropuerto de Porto 50. Precio 2.100: 3 habitaciones franja A 246.000; obra nueva sí. Facilidad de venta 8/10, revalorización 8/10. Dependencia del coche 3/10. Para quién: quien prefiera ciudad pequeña completa; para ti, la ciudad de referencia de Afife-Carreço.

**Ponte de Lima (nº 80).** 44.000 habitantes en el concelho (3.000 en la villa); puente romano-medieval, plaza de la feria, Feiras Novas (septiembre), Festival de Jardines, Ecovia do Lima, Lagoas de Bertiandos, viñedo de Loureiro, golf. Interior: franja B (Cabedelo a 25). Verano caluroso (21,5 °C, 20-25 días > 30 °C), niebla alta en invierno. Servicios 6/10. Hospital a 5 (comarcal). Aeropuerto 55. Precio 1.500: 3 habitaciones 142.000; quinta con viñedo 200.000-300.000. Para quién: la villa más bonita del interior, para quien no le importe el calor de julio-agosto ni la niebla de diciembre-enero, y tenga el mar a 25.

Si yo fuera tú

Afife, Carreço o Areosa (aldea de granito con monte y mar, Viana a 10-15) o Vila Praia de Âncora (villa con servicios y playa abrigada). Es mi tercera opción de toda la tabla, con la sanidad privada y el papeleo portugués como precio, y el viento de las tardes de verano como sorpresa a comprobar en persona en julio.

![Mapa de la zona 16](../output/mapas_zonas/zona_16.png)

</details>

<details><summary>CITA estudio_zonas.md §16 Litoral Norte</summary>

16. Litoral Norte (Portugal) · Esposende, Póvoa de Varzim, Vila do Conde

La zona

La costa llana al norte de Porto: Esposende (34.000 hab.; Ofir entre pinos, Apúlia con sus molinos sobre las dunas, el estuario del Cávado y el Parque Natural do Litoral Norte), Póvoa de Varzim (63.000; ciudad-balneario con casino, paseo y bloques en primera línea) y Vila do Conde (80.000; casco histórico con el acueducto y el convento de Santa Clara, astilleros históricos, Azurara). El metro de Porto (línea B) llega a Póvoa y Vila do Conde; la A28 lleva a Porto en 30-40 min; el aeropuerto de Sá Carneiro está a 15-35.

Es la zona con más sol de toda la tabla y el mejor aeropuerto para viajar en la jubilación. Le falta montaña, casas bajas en los frentes de mar y agua templada.

Clima mes a mes

| | Oct-Mar | Abr-May | Jun-Sep | Año |
|---|---|---|---|---|
| Días de lluvia al mes | 11-14 | 8-10 | 2-4 | 105-108 |
| Máxima / mínima típica | 14 / 5 °C (ene.) | 20 / 10 °C | 25 / 15 °C (jul.) | |
| Horas de sol al mes | 120-150 | 230-260 | 300-330 | 2.550 |

Sol 2.550 h, 85 días despejados, 105 cubiertos: el máximo de la tabla. Lluvia 1.200-1.300 mm en 105-108 días (los menos días de la tabla), con julio y agosto casi secos (2 días). Verano 20 °C, máximas de 25 °C, 3-6 días > 30 °C. Viento alto (nortada de tarde de junio a agosto). Niebla media (nieblas de mar por la mañana en verano). Comparado con Mancor: 250 h de sol menos, 50 días de lluvia más (de octubre a abril), verano igual de seco pero 5 °C más fresco.

Mar y baño

Ofir y Esposende (estuario del Cávado, la única agua abrigada), Apúlia, Fão, Cepães, Praia da Póvoa (Redonda, Salgueira, Lagoa), Vila do Conde, Azurara (surf), Mindelo (reserva ornitológica). Agua 16-18 °C en agosto: fría. Mar abierto, olas y viento de tarde. Para bañarse con calma, el estuario de Esposende y las piscinas.

Paseos y montaña

Parque Natural do Litoral Norte (pasarelas de madera sobre dunas, 16 km entre Apúlia y la Foz do Cávado); molinos de Apúlia; paseo marítimo de Póvoa (uno de los más largos de Portugal) y de Vila do Conde; acueducto y Santa Clara; Nau Quinhentista; reserva de Mindelo; Estela Golf (Póvoa, links junto al mar). Montaña: no; las sierras de Rates y Franqueira son colinas de 300-400 m. Gerês a 1 h 30.

Servicios y ciudad de referencia

Póvoa 8/10 y Vila do Conde 8/10 (ciudades completas con hospital, metro, mercado, comercio, cultura); Esposende 6/10 (villa completa; Braga a 30 con todo). Ciudad de referencia: la propia en Póvoa y Vila do Conde; Porto (230.000, área de 1,7 millones) a 40 min en coche o 60-70 en metro; Braga a 30 desde Esposende.

Sanidad

Hospital Póvoa de Varzim / Vila do Conde (público, comarcal): 5 min desde Póvoa, 10 desde Vila do Conde, 25 desde Esposende. Hospital de Braga (público, de referencia) a 30 desde Esposende. Privados: CUF Porto a 30 desde Vila do Conde y 35 desde Póvoa; Trofa Saúde Braga a 40 desde Esposende; hospitales de Porto (São João, Santo António) a 40. Seguro privado recomendable, como en el Alto Minho.

Aeropuertos y Palma

Porto-Sá Carneiro a 15 min desde Vila do Conde, 20 desde Póvoa, 35 desde Esposende: Palma en verano y más de 80 destinos directos todo el año. Santiago (Palma casi todo el año) a 2 h.

Precios y qué compras con 260.000 €

Esposende 2.300 €/m², Póvoa y Vila do Conde 2.600. 2 habitaciones franja A: 194.000-220.000 (entran); 3 habitaciones: Esposende 269.000 (justo fuera; entra a 5-10 min de la playa), Póvoa y Vila do Conde 304.000 (fuera). Obra nueva en los tres (mucha en Póvoa y Vila do Conde). Fibra en los tres.

Seguridad y ambiente

Portugal, país muy seguro; el área de Porto tiene más incidencia que el Minho pero muy inferior a Palma. Población extranjera creciente en el área metropolitana (brasileños, sobre todo), 5-8 %. Ambiente: Póvoa y Vila do Conde son ciudades de playa vivas todo el año, con mucho veraneante de Porto en agosto; Esposende es residencial y familiar. Tráfico: la A28 hacia Porto se congestiona en hora punta.

Parecido con Mancor / Mallorca

2/5 en general (llanura, bloques, viento). 3/5 en Ofir y Apúlia (casas bajas entre pinos y dunas, tipo Sa Ràpita o Es Trenc).

Lo que no tendrás

- Montaña detrás.
- Casas bajas en el frente de mar de Póvoa y Vila do Conde.
- Agua de mar templada ni tarde de terraza sin viento en verano.
- 3 habitaciones en primera línea dentro de 260.000 €.
- Hospital privado a menos de 30-40 min.
- Vuelo a Palma todo el año.
- Sanidad pública española.

Municipio a municipio

**Esposende (nº 81).** 34.000 habitantes en el concelho; Esposende villa (estuario, paseo, puerto), Ofir (urbanización de veraneo de Braga entre pinos, torres de los 70 y chalés), Fão (villa antigua), Apúlia (molinos, dunas, playa), Marinhas. Parque Natural do Litoral Norte. Viento alto. Servicios 6/10. Hospital Póvoa 25, Braga 30. Aeropuerto 35. Precio 2.300: 2 habitaciones franja A 194.000; 3 habitaciones 269.000 (entra a 5-10 min). Obra nueva sí. Para quién: la opción residencial y tranquila del Litoral Norte, con Braga y Porto a 30-40. Mi elección en la zona.

**Póvoa de Varzim (nº 82).** 63.000 habitantes; ciudad de playa con casino, paseo marítimo largo, puerto pesquero, mercado, metro a Porto, Estela Golf a 10 min. Servicios 8/10. Hospital 5. Aeropuerto 20. Precio 2.600: 2 habitaciones franja A 220.000; obra nueva abundante. Facilidad de venta 9/10. Dependencia del coche 3/10. Para quién: quien quiera ciudad de playa con metro y aeropuerto a 20 min; el urbanismo del frente es de bloques.

**Vila do Conde (nº 83).** 80.000 habitantes; casco histórico (Santa Clara, acueducto de 999 arcos, Alfândega, Nau), río Ave, playas de Vila do Conde y Azurara, Mindelo a 10, metro y A28. Servicios 8/10, comunicaciones 9/10. Hospital 10; CUF Porto 30. Aeropuerto 15 (el más rápido de toda la tabla junto a Vigo y A Coruña). Precio 2.600: 2 habitaciones franja A 220.000; obra nueva sí. Dependencia del coche 3/10. Para quién: quien quiera ciudad histórica con el aeropuerto a un cuarto de hora y Porto a media hora.

Si yo fuera tú

Esposende (Ofir o Apúlia) si quieres el máximo sol de la tabla y el mejor aeropuerto para viajar, y aceptas que la montaña quede lejos, el mar esté frío y el viento sople por las tardes de verano.

---

</details>

---

## 2. Valença

> **EXCEPCIÓN AISLADA (Valença):** hospital prosa enfatiza Conde de Bertiandos ~40′ mientras `hospitalPractico2026` = Santa Luzia (Viana); aero prosa Vigo ~35′ primario vs `aeropuertoPractico2026` = Porto. Documentar OBSOLETO/DUPLICA; **no corregir producto aquí**. Continuar con los otros 10.

### 2.1 Relato actual completo

> CITA LITERAL — `web/src/lib/relatos-alto-minho.ts` clave `valenca` (objeto completo).

```ts
valenca: {
    escala: "Fortaleza frente a Tui",
    abrir: [
      "Valença se siente, al cruzar el puente desde Tui, como una villa que ha aprendido a vivir en dos países a la vez. Unos catorce mil habitantes: fortaleza abaluartada del siglo XVII con dos recintos, fosos y puertas, y dentro un pueblo entero de comercio —textil, manteles, restaurantes, cafés— al que los gallegos llegan los fines de semana como quien va al mercado. Tui queda a cinco minutos; el tren Celta une Vigo y Porto; la Ecopista do Minho —antigua vía de tren hacia Monção, quince kilómetros llanos entre viñedo de Alvarinho y el río— sale casi desde la orilla. No es orilla atlántica: es interior de franja B. Moledo, la playa larga de dunas y pinar, anda alrededor de los veinticinco minutos.",
      "Quien vive aquí es gente local, comerciantes de la fortaleza, vecinos que cruzan a Galicia por pan o por papeleo, y quien busca precio de valle con un pie en cada país. No es colonia de veraneo plantada sobre el paisaje. Un martes de noviembre se camina por los baluartes, se compra dentro de los muros y se resuelve el día a día en escala de villa: servicios 6/10, comunicaciones 8/10. Para lo diario —farmacia, súper, café— no hace falta coche si se elige bien el piso. Para el hospital Conde de Bertiandos, en Ponte de Lima, sí: unos cuarenta minutos. Álvaro Cunqueiro, en Vigo, queda a unos treinta y cinco, pero como no residente en España solo sirve para urgencias con la tarjeta europea o pagando.",
      "El verano del valle cambia el ritmo. Media alrededor de 21 °C y unos veinte días por encima de 30 °C: el calor que en Caminha o Âncora casi no aparece. En invierno, niebla media de río que levanta a media mañana. Hay poca obra nueva; fibra sí. El tráfico es de villa casi todo el año; los fines de semana fronterizos llenan el aparcamiento de la fortaleza y las mesas. Quien busque silencio absoluto de enero lo encontrará en las calles laterales; quien busque el café abierto también. Las dos cosas conviven aquí.",
      "El calendario marca agosto con fiestas locales —ruido, afluencia, mesas ocupadas dentro de los muros— y la llegada constante de quien cruza desde Tui. Primavera y otoño son buenas épocas para conocerlo: la Ecopista entre viña, el Miño ancho, Galicia enfrente sin aduana. Si solo conoces un sábado de sol en la fortaleza, te llevas la imagen de folleto. Si has visto un julio de valle y un martes gris de noviembre, ya puedes decidir si de verdad quieres vivir aquí.",
      "Valença no promete playa a la puerta. Promete frontera vivida, tren, muro y precio bajo a cambio de calor estival y Atlántico a veinticinco minutos. Quien acepte ese trato entenderá el sitio al primer puente.",
    ],
    tiempo: [
      "Si vienes de Baleares, notará el cielo más gris y con menos sol que en Mallorca, más que un cambio de frío. Valença suma unas 2.400 a 2.450 horas de sol y unos 78 a 80 días despejados, frente a las 2.800 horas y 120 jornadas claras de Mallorca. La diferencia se nota casi toda entre noviembre y febrero: mañanas de valle, terraza que se usa la mitad. Caen alrededor de 1.600 a 1.700 milímetros en unos 118 a 120 días. Cuando llueve, llueve de verdad. El viento es bajo junto al río; la niebla, media.",
      "El verano ronda 21 °C de media, con unos veinte días sobre 30 °C —calor de valle, no de costa minhota—. Julio y agosto mojan poco: dos o tres días de lluvia al mes, casi tan secos como en Mallorca, pero el termómetro aprieta de otro modo. La playa atlántica queda a unos veinticinco minutos (Moledo); el agua allí anda entre 16 y 18 °C en agosto. Conviene venir un julio caluroso y un noviembre de niebla, no solo un sábado soleado dentro de los muros.",
    ],
    vivir: [
      "El invierno en Valença se nota en la niebla media de río que levanta a media mañana y en la humedad de valle. De noviembre a febrero la terraza se usa la mitad; conviene aislamiento, calefacción y orientación al sol, no solo el piso dentro de los muros. Visitar un martes gris de noviembre y un julio de valle evita firmar solo por la foto de fortaleza.",
      "Sin coche, lo diario —farmacia, súper, café— se resuelve si se elige bien el piso: servicios 6/10, comunicaciones 8/10. Tui queda a cinco minutos por el puente. Para el hospital y la gran superficie hace falta vehículo. En enero la villa sigue abierta —comercio intramuros, café—; los fines de semana fronterizos llenan aparcamiento y mesas.",
      "Se vive en dos países a la vez: gente local, comerciantes de la fortaleza, vecinos que cruzan a Galicia por pan o papeleo. El portugués manda en ayuntamiento y comercio; el castellano y el gallego se oyen a menudo —los gallegos llegan los fines de semana como quien va al mercado—. Entre semana manda la villa; en agosto, fiestas y afluencia dentro de los muros. La integración pasa por frontera permeable y ritmo de eurociudad, no por colonia de veraneo.",
      "La sanidad pide matiz portugués. El hospital Conde de Bertiandos, en Ponte de Lima, queda a unos cuarenta minutos; Álvaro Cunqueiro, en Vigo, a unos treinta y cinco, pero como no residente en España solo sirve para urgencias con la tarjeta europea o pagando. Hay que contar con seguro privado portugués —Trofa Saúde, en Braga, alrededor de cincuenta minutos—. La sanidad pública portuguesa es más lenta: no es la tarjeta española de diario.",
      "El aeropuerto de Vigo está a unos treinta y cinco minutos —Palma en verano—; el tren Celta une Vigo y Porto. Ir y volver a Mallorca suele depender más del verano vía Vigo; el resto del año pide mirar conexiones y Porto. El régimen fiscal especial para residentes extranjeros se cerró en 2024: no hay que contar con él.",
      "Dentro de la fortaleza y en el ensanche hay pisos y viviendas de villa; hay poca obra nueva y fibra. El modelo no es urbanización cerrada: es piso con acceso al puente o casa de villa con el muro cerca. En verano hay que contar con calor de valle y ocupación de fin de semana fronterizo. Comprobar aparcamiento un sábado dentro de los muros antes de comprar.",
    ],
    historia: [
      "La fortaleza explica Valença mejor que cualquier folleto. Plaza fuerte abaluartada de los siglos XVII y XVIII —dos recintos, adarves, fosos— levantada frente a Tui cuando el Miño era línea de guerra. Hoy se recorre por lo alto de las murallas con Galicia debajo y el comercio intramuros como oficio vivo: toallas, sábanas, manteles, mesas. El puente internacional de hierro de 1886 —escuela de Eiffel, el mismo gesto que une Tui y Valença— convirtió la frontera en eurociudad cotidiana: se cruza a pie, en bici o en coche sin sentir aduana.",
      "El tren Celta a Vigo y Porto y la Ecopista do Minho hacia Monção completan la ficha fluvial: antigua vía convertida en camino llano entre Alvarinho y río. Lo que conviene saber no es lista de fechas; es fortaleza, comercio y frontera permeable. Quien camine los baluartes un martes de enero entenderá por qué los gallegos siguen viniendo: no es museo, es villa dentro del muro.",
    ],
    fuera: [
      "Los baluartes y el comercio intramuros son la tarde de diario: se sube al adarve, se mira Tui —la ciudad episcopal gallega al otro lado del Miño—, se baja a un café dentro de las puertas. Tui queda a cinco minutos por el puente; el paseo fluvial gallego y la catedral quedan al otro lado como refuerzo de calle y mesa.",
      "La Ecopista do Minho —quince kilómetros llanos Valença–Monção, antigua vía de tren entre viñedo y río— es el paseo propio cuando no se quiere coche. Al final, en Monção, hay termas municipales a unos veinticinco minutos. Moledo y Caminha andan alrededor de veinte o veinticinco minutos cuando apetezca Atlántico: dunas, pinar, desembocadura.",
      "Vigo queda a unos treinta y cinco minutos: ciudad grande, aeropuerto, lo que la villa no resuelve. Quien viva aquí acepta el río como paisaje de diario y el mar como escapada corta. No es fallo de Valença: es la honestidad del interior minhoto.",
    ],
    casa: [
      "Dentro de la fortaleza y en el ensanche hay pisos y viviendas de villa; hay poca obra nueva y fibra. El modelo no es urbanización cerrada: es piso con acceso claro al puente o casa de villa con el muro cerca. En verano hay que contar con calor de valle y ocupación de fin de semana fronterizo; conviene comprobar aparcamiento un sábado dentro de los muros.",
      "El precio medio ronda 1.300 €/m² —el más asequible de la zona—. Tres habitaciones se sitúan alrededor de 123.000 euros. Quien mire obra reciente encontrará algo; quien mire solo primera línea de río deberá aceptar humedad y niebla de mañana.",
      "Los servicios son 6/10: comercio de fortaleza y Tui a cinco cubren mucho; hospital y gran superficie, no. Ponte de Lima queda a unos cuarenta minutos; Vigo —solo urgencias si no se reside en España—, a unos treinta y cinco. El aeropuerto de Vigo está a unos treinta y cinco —Palma en verano—. Hay que contar con seguro privado portugués. Conviene probar un julio de valle y un martes de noviembre antes de comprar.",
    ],
    encaja: {
      si: [
        "Encaja si la frontera vivida importa más que la orilla atlántica a la puerta. Valença es fortaleza abaluartada frente a Tui: se camina por los baluartes, se compra dentro de los muros y se cruza el puente en unos cinco minutos hacia la catedral gallega. Un martes de noviembre la villa sigue abierta —comercio, café, Ecopista do Minho hacia Monção—, y el tren Celta une Vigo y Porto sin convertir el día en expedición. Quien quiera un pie en cada país, río Miño como paisaje de diario y precio de interior —alrededor de 1.300 €/m², el más asequible de la zona— encontrará aquí una escala de villa, no de aldea aislada. Los servicios alcanzan 6/10; las comunicaciones, 8/10.",
        "También encaja para quien acepte vivir el año entero junto al río y reservar el mar para la tarde: Moledo queda a unos veinticinco minutos. Frente a Mallorca se pierden cielo limpio —unas 2.400 horas de sol frente a 2.800— y se reciben alrededor de 1.600 milímetros en unos 120 días; a cambio, el invierno es templado por el valle y la vida no depende de agosto. Hay que contar con seguro privado portugués: la sanidad pública portuguesa es más lenta, y el hospital de referencia queda a unos treinta y cinco minutos.",
      ],
      no: [
        "No encaja si se busca el verano suave de la costa minhota. En el valle las máximas estivales aprietan: media alrededor de 21 °C y unos veinte días al año por encima de 30 °C —el calor que en A Guarda o Caminha casi no aparece—. Tampoco si la playa debe quedar a pie: aquí no hay orilla atlántica en el municipio. Quien se decida solo tras un fin de semana soleado sin probar un julio de valle se llevará una sorpresa distinta de la foto de fortaleza.",
        "Tampoco encaja si se necesita hospital español de uso habitual. Álvaro Cunqueiro, en Vigo, queda a unos treinta y cinco minutos, pero como no residente en España solo sirve para urgencias con la tarjeta europea o pagando. El privado de referencia —Trofa Saúde, en Braga— anda alrededor de los cincuenta minutos. El régimen fiscal especial para residentes extranjeros se cerró en 2024: no hay que contar con él.",
      ],
      veredicto:
        "Veredicto: Valença es la apuesta frontera-río del Alto Minho —fortaleza, Tui a cinco y precio bajo a cambio de calor de valle y mar a veinticinco minutos—. Buscaría tres habitaciones en villa o ensanche con acceso claro al puente, tras probar un julio caluroso y un martes de noviembre dentro de los muros. Se ganan ~1.300 €/m², tren Celta, Ecopista y Galicia enfrente; se aceptan unos veinte días de calor fuerte, playa fuera del municipio, hospital a unos treinta y cinco minutos y seguro privado portugués. Si mandan baño atlántico y verano fresco, miraría Caminha o Âncora; si hay que contar con dos países y presupuesto de interior, Valença justifica el trayecto al mar.",
    },
    fotosAbrir: [
      { src: "/fotos/alto-minho/valenca-fortaleza.jpg", pie: "Fortaleza de Valença frente a Tui" },
      { src: "/fotos/alto-minho/valenca-comercio.jpg", pie: "Comercio dentro de la fortaleza de Valença" },
    ],
    fotosHistoria: [
      { src: "/fotos/alto-minho/valenca-puente.jpg", pie: "Puente entre Valença y Tui" },
    ],
    fotosFuera: [
      { src: "/fotos/alto-minho/valenca-rio.jpg", pie: "Miño a la altura de Valença" },
    ],
    creditoFotos: credito,
  }
```

**Señales de auditoría (scan local, sin internet):**

- **X/10** (5 muestras):
  - …en escala de villa: servicios 6/10, comunicaciones 8/10. Para lo…
  - …ervicios 6/10, comunicaciones 8/10. Para lo diario —farmacia, sú…
  - …elige bien el piso: servicios 6/10, comunicaciones 8/10. Tui que…
  - …ervicios 6/10, comunicaciones 8/10. Tui queda a cinco minutos po…
  - …a.",       "Los servicios son 6/10: comercio de fortaleza y Tui …
- **broken000** (1 muestras):
  - …es se sitúan alrededor de 123.000 euros. Quien mire obra reciente enc…
- **precio_narr** (5 muestras):
  - …       "El precio medio ronda 1.300 €/m² —el más asequible de la zo…
  - …"El precio medio ronda 1.300 €/m² —el más asequible de la zona—…
  - …ones se sitúan alrededor de 123.000 euros. Quien mire obra reciente enc…
  - …cio de interior —alrededor de 1.300 €/m², el más asequible de la zo…
  - …interior —alrededor de 1.300 €/m², el más asequible de la zona—…
- **clima** (5 muestras):
  - …casi no aparece. En invierno, niebla media de río que levanta a me…
  - …s gris y con menos sol que en Mallorca, más que un cambio de frío. V…
  - …lença suma unas 2.400 a 2.450 horas de sol y unos 78 a 80 días despejado…
  - …as de sol y unos 78 a 80 días despejados, frente a las 2.800 horas y…
  - …oras y 120 jornadas claras de Mallorca. La diferencia se nota casi t…
- **hospital** (5 muestras):
  - …e elige bien el piso. Para el hospital Conde de Bertiandos, en Ponte…
  - …ien el piso. Para el hospital Conde de Bertiandos, en Ponte de Lima, sí: unos c…
  - …unos cuarenta minutos. Álvaro Cunqueiro, en Vigo, queda a unos treint…
  - …inutos por el puente. Para el hospital y la gran superficie hace fal…
  - …idad pide matiz portugués. El hospital Conde de Bertiandos, en Ponte…
- **Palma** (2 muestras):
  - …unos treinta y cinco minutos —Palma en verano—; el tren Celta une…
  - … está a unos treinta y cinco —Palma en verano—. Hay que contar co…
- **fiscal** (4 muestras):
  - … mirar conexiones y Porto. El régimen fiscal especial para residentes extr…
  - …ara residentes extranjeros se cerró en 2024: no hay que contar con él.", …
  - … de los cincuenta minutos. El régimen fiscal especial para residentes extr…
  - …ara residentes extranjeros se cerró en 2024: no hay que contar con él.", …
- **seguro** (5 muestras):
  - …os treinta y cinco, pero como no residente en España solo sirve para urg…
  - …o sirve para urgencias con la tarjeta europea o pagando.",       "El verano…
  - …os treinta y cinco, pero como no residente en España solo sirve para urg…
  - …o sirve para urgencias con la tarjeta europea o pagando. Hay que contar con…
  - …o pagando. Hay que contar con seguro privado portugués —Trofa Saúde, en Br…
- **frontera** (5 muestras):
  - …  escala: "Fortaleza frente a Tui",     abrir: [       "Valença…
  - …te, al cruzar el puente desde Tui, como una villa que ha aprend…
  - …ana como quien va al mercado. Tui queda a cinco minutos; el tre…
  - …rtaleza, vecinos que cruzan a Galicia por pan o por papeleo, y quie…
  - …onstante de quien cruza desde Tui. Primavera y otoño son buenas…
- **metro_tren** (5 muestras):
  - …Tui queda a cinco minutos; el tren Celta une Vigo y Porto; la Ecopista…
  - …tren hacia Monção, quince kilómetros llanos entre viñedo de Alvar…
  - …lrededor de 1.600 a 1.700 milímetros en unos 118 a 120 días. Cuan…
  - …omo en Mallorca, pero el termómetro aprieta de otro modo. La play…
  - …minutos —Palma en verano—; el tren Celta une Vigo y Porto. Ir y volver…
- **sol** (3 muestras):
  - …ío. Valença suma unas 2.400 a 2.450 horas de sol y unos 78 a 80 días despejado…
  - ….450 horas de sol y unos 78 a 80 días despejados, frente a las 2.800 horas y…
  - …se pierden cielo limpio —unas 2.400 horas de sol frente a 2.800— y se reciben …

### 2.2 Capa 2026 completa

Fuente: `web/src/data/municipios-alto-minho.json` · slug `valenca`.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `107315` |
| `A_3hab` | `148590` |
| `B_2hab` | `86678` |
| `B_3hab` | `120015` |
| `advertenciaMicrozona` | `null` *(n.d. / ausente)* |
| `aeropuertoMin` | `35` |
| `aeropuertoPractico2026` | Porto |
| `aeropuertos` | Vigo 42 km · 35 min (Palma: verano); Porto 106 km · 80 min (Palma: verano); Santiago 120 km · 90 min (Palma: casi todo el año) |
| `autonomiaCotidiana` | MEDIA-FUERTE |
| `casaQueBuscar` | Vivienda cómoda y accesible, 2–3 dormitorios, exterior, servicios cotidianos ... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Más favorable |
| `comunicaciones` | A-3 / N-13; tren Celta Vigo–Porto |
| `comunicacionesNota10` | `8` |
| `cubiertos` | `112` |
| `dependenciaCocheTexto` | Baja-media en núcleo; coche/tren para costa, hospital y servicios superiores. |
| `despejados` | `78` |
| `estacionalidad2026` | Ciudad fronteriza con vida anual. |
| `fibra` | Sí |
| `franja` | B |
| `hospitalMin` | `35` |
| `hospitalPractico2026` | Hospital de Santa Luzia, Viana do Castelo, para atención médico-quirúrgica de mayor nivel |
| `hospitalPriv` | 50 km · 50 min · Trofa Saúde (Braga) |
| `hospitalPub` | 40 km · 40 min · Conde de Bertiandos (Ponte de Lima) |
| `hospitalReferencia2026` | ULSAM / Hospital de Santa Luzia (Viana do Castelo) |
| `humedad` | `78` |
| `lat` | `42.03` |
| `lluviaDias` | `120` |
| `lluviaMm` | `1600` |
| `lon` | `-8.645` |
| `mapa` | 73_valenca.png |
| `mercadoReventa` | Mercado intermedio: base residencial propia y/o demanda exterior. Priorizar u... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `25` |
| `minCosta` | `25` |
| `municipio` | Valença |
| `n` | `73` |
| `niebla` | Media |
| `obraNueva` | Sí |
| `pais` | Portugal |
| `palmaDirecta2026` | Porto: Palma observada en la operativa de 2026; rutas y frecuencias cambian por temporada, comprobar antes de viajar. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Santiago (casi todo el año) · 90 min |
| `paseoCotidiano` | Fortaleza y ribera/ecopista del Miño; terreno relativamente amable en el núcleo. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Muy práctica para relación transfronteriza, pero sin mar y con hospital de mayor capacidad en Viana. |
| `playaBano` | Moledo |
| `playaCotidiana` | NO |
| `playaCotidianaModo` | Relación cotidiana con el Miño, no con playa marina. |
| `precioM2` | `1270` |
| `provincia` | Viana do Castelo |
| `radioCotidiano` | Pequeña ciudad fronteriza con comercio y servicios básicos; la fortaleza y el núcleo permiten bastante rutina a pie si se vive céntrico. |
| `radioSalida` | Tui al otro lado del Miño y Viana/Braga/Porto para mayor escala; costa requiere desplazamiento. |
| `sanidadPrimaria2026` | Cuidados de saúde primários locales |
| `servicios` | `6` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | Tiene: comercio en la fortaleza, Tui a 5. Falta: playa en el municipio |
| `slug` | valenca |
| `solHoras` | `2400` |
| `tempAgua` | 16-19 |
| `tempInvierno` | `9.5` |
| `tempVerano` | `21.0` |
| `transporteRelevante2026` | Linha do Minho; durante obras ADIF 2026–27 puede haber sustituciones/alteraciones en servicios internacionales. Tui/Vigo no equivalen a cobertura sanitaria portuguesa. |
| `urgenciasPAC2026` | Urgência básica en Monção como recurso regional; confirmar circuito SNS vigente |
| `viento` | Baja |
| `zona` | Alto Minho (PT) |

**Highlights capa (autoridad):** autonomia `MEDIA-FUERTE` · playa `NO` · precioM2 `1270` · servicios `6` · hospitalMin `35` · aeroMin `35`.

### 2.3 Auditorías / plan existentes

**NO PLAN_EDITORIAL** específico Portugal (no hay `PLAN_EDITORIAL_PORTUGAL_*.md`).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n=73 → claves 73–83):

```
| 73 | Valença | Alto Minho (PT) | — | usa cerca/a un paso | repite €/m² ya en TablaPrecios/capa; repite horas de sol (+5) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 73 | Valença | Alto Minho (PT) | no | — |
```

**estudio_zonas.md** (histórico — **NO** autoridad 2026):

<details><summary>Recorte estudio</summary>

**Valença (nº 73).** 14.000 habitantes; fortaleza abaluartada del siglo XVII con comercio dentro (textil, restaurantes), Tui a 5 min por el puente, Ecopista do Minho, tren a Porto y a Vigo (Celta). Interior: franja B (Moledo a 25). Verano cálido (21 °C, 20 días > 30 °C), niebla media. Servicios 6/10, comunicaciones 8/10. Hospital Ponte de Lima 40; Vigo 35 (con las limitaciones dichas). Aeropuerto de Vigo 35. Precio 1.300: 3 habitaciones 123.000. Poca obra nueva. Para quién: quien quiera vivir con un pie en cada país por muy poco dinero y acepte calor de verano y playa a 25.

**Vila Nova de Cerveira (nº 74).** 9.000 habitantes; villa cuidada sobre el Miño frente a Goián (puente), castillo, Bienal de Arte, Aquamuseu, praia fluvial, Alto do Cervo (mirador). Franja B (Moledo a 20). Servicios 5/10. Hospital 35. Aeropuerto de Vigo 45, Porto 75. Precio 1.500: 3 habitaciones 142.000. Para quién:

</details>

### 2.4 Auditoría relato ↔ capa

Estados permitidos: `ALINEADO` · `OBSOLETO` · `DUPLICA_CAPA` · `P4_PRESERVAR` · `SOPORTADO_PERO_INFRAUSADO` · `NO_SOPORTADO_NO_INVENTAR` · `REQUIERE_VERIFICACION_EXTERNA` · `COMUN_PORTUGAL`

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | Chip X/10 repetido en abrir/casa/encaja | `servicios` **6**; Tiene: comercio en la fortaleza, Tui a 5. Falta: playa en el municipio | DUPLICA_CAPA | Omitir chip; narrar autonomía cualitativa |
| Precio €/m² | Relato aún ~1.300 €/m² + 123k (OBSOLETO/DUPLICA) pese a capa 1270 | `precioM2` **1270** | OBSOLETO / DUPLICA_CAPA | Capa prevalece; quitar 1.300/123k; TablaPrecios |
| Prosa rota «000 euros» | Tras remitir a capa queda fragmento «000 euros» (+ totales sueltos a veces) | Cifras viven en `precioM2` / A/B / TablaPrecios | OBSOLETO | Borrar resto roto; no reponer €/m² históricos en prosa |
| Hospital — EXCEPCIÓN AISLADA | Énfasis Conde de Bertiandos ~40′ (también Cunqueiro urgencias) | `hospitalPractico2026`=Hospital de Santa Luzia, Viana do Castelo, para atención médico-quirú…; `hospitalPub`=40 km · 40 min · Conde de Bertiandos (Ponte de Li… | OBSOLETO / DUPLICA_CAPA | **EXCEPCIÓN AISLADA:** alinear prosa con hospital práctico (Santa Luzia Viana); no inventar; marcar investigación en matriz |
| Aeropuerto — EXCEPCIÓN AISLADA | Vigo ~35′ como primario + Palma verano | `aeropuertoPractico2026`=**Porto**; `aeropuertoMin` 35 | OBSOLETO / DUPLICA_CAPA | **EXCEPCIÓN AISLADA:** Porto como práctico; Vigo puede quedar como apoyo frontera documentado, no como primario contra capa |
| Autonomía / frontera | Villa a pie; Tui 5′; coche hospital/gran superficie | `autonomiaCotidiana` **MEDIA-FUERTE**; Baja-media en núcleo; coche/tren para costa, hospital y servicios superiores. | ALINEADO | Preservar frontera vivida; Miño≠playa |
| Mar / playa | Sin playa en municipio; Moledo ~25′ | `playaCotidiana` **NO** — Relación cotidiana con el Miño, no con playa marina. | ALINEADO | NO marítimo; río Miño cotidiano |
| Aeropuerto / Palma | Minutos aero + «Palma en verano» (tono permanente posible) | `aeropuertoMin` 35; `aeropuertoPractico2026`=Porto; `palmaDirecta2026` matiza | DUPLICA_CAPA / ALINEADO (matiz temporada) | Consecuencia una vez; no martillar minutos+Palma; no inventar permanente absoluto |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos tiempo→encaja (y a menudo abrir) | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| COMUN_PORTUGAL (fiscal / seguro / tarjeta / Cunqueiro) | Bloques repetidos: régimen fiscal cerrado 2024; seguro privado; tarjeta europea/española; SNS lento | Hecho nacional — no capa municipal | COMUN_PORTUGAL | Extraer a doc común; conservar solo consecuencia local; **no corregir** aquí |
| P4 fortaleza / Tui / Ecopista | Fortaleza, puente, Ecopista, Celta | radios + estudio + fotos | P4_PRESERVAR | Glosar función; no consejo administrativo frontera |

### 2.5 P4 / identidad

- **Preservar:** fortaleza abaluartada, comercio intramuros, puente a Tui, Ecopista do Minho, tren Celta.
- **Identidad:** villa frontera-río (Miño), no orilla atlántica.
- **Peaje:** calor de valle; playa fuera (~Moledo 25′); hospital/aero según capa (ver excepción).
- **Frontera:** cotidiana Galicia; sin consejo administrativo/fiscal.

### 2.6 Vida cotidiana soportada

| Elemento | Clasificación | Base repo |
|---|---|---|
| Autonomía | YA SOPORTADO | `MEDIA-FUERTE` |
| Coche | YA SOPORTADO | `Baja-media en núcleo; coche/tren para costa, hospital y servicios superiores.` |
| Servicios cotidianos | YA SOPORTADO | servicios `6` — Tiene: comercio en la fortaleza, Tui a 5. Falta: playa en el municipio |
| Paseo | YA SOPORTADO | Fortaleza y ribera/ecopista del Miño; terreno relativamente amable en el núcleo. |
| Pendiente | N/A / null | `null` |
| Microzona | Poco o nada en capa | adv: — / microPrecio: — |
| Compra enero / estacionalidad | YA SOPORTADO en relato+capa | Ciudad fronteriza con vida anual. |
| Transporte relevante | YA SOPORTADO | Linha do Minho; durante obras ADIF 2026–27 puede haber sustituciones/alteraciones en serv… |
| Nombres café / horarios exactos | NO SOPORTADO | — |
| Totales A/B en prosa | NO SOPORTADO (viven en tabla) | A_3hab `148590` / B_3hab `120015` |
| Burocracia nacional (fiscal/NIF/CRUE) | COMUN_PORTUGAL | No repetir 11×; ver §13 |

### 2.7 Reality toll

- Autonomía **MEDIA-FUERTE**; frontera Tui cotidiana
- Hospital prosa Conde ~40′ vs práctico Santa Luzia (**EXCEPCIÓN**)
- Aero prosa Vigo vs práctico **Porto** (**EXCEPCIÓN**)
- Playa **NO** (Miño ≠ Atlántico)
- Precio capa **1270** (prosa ~1300 OBSOLETO)
- Servicios **6**; calor valle / niebla

### 2.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | Auditoría ~1300 (histórico prosa/estudio) | **1270** | OBSOLETO — capa prevalece |
| A_3hab / B_3hab | No narrar totales | `148590` / `120015` | TablaPrecios |
| casaQueBuscar / reventa | Cualitativo | Ver tabla capa | `casaQueBuscar` truncado `…` → **DESEABLE** texto completo (no bloquea v1); `mercadoReventa` truncado `…` → **DESEABLE** texto completo (no bloquea v1) |
| «000 euros» | Presente tras remitir a capa (varios) | — | Borrar resto roto |
| Cifras vivas en prosa | ~1.300 €/m² + ~123.000 | capa 1270 | **OBSOLETO/DUPLICA** — quitar |

### 2.9 Clima: deuda / duplicación (NO correct)

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en `tiempo` + `encaja` (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `valenca` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_32.**

### 2.10 Mar / río / playa / paseo

- **playaCotidiana:** `NO`
- **Modo:** Relación cotidiana con el Miño, no con playa marina.
- **paseoCotidiano:** Fortaleza y ribera/ecopista del Miño; terreno relativamente amable en el núcleo.
- **pendiente:** `null`
- Miño / fortaleza = cotidiano; Atlántico = salida (Moledo).
- No contradecir la etiqueta de playa de la capa.

### 2.11 Frontera / España

- **Hecho:** eurociudad con Tui (puente ~5′); comercio fronterizo.
- **Cotidiano vs salida:** Galicia enfrente es rutina; Cunqueiro = urgencias no residente (COMUN_PORTUGAL).
- **No:** asumir exenciones fiscales/sanitarias por proximidad; no consejo NIF/CRUE aquí.

### 2.12 COMUN_PORTUGAL (local excerpts — NO correct)

- **fiscal cerrado 2024** → COMUN_PORTUGAL: …l año pide mirar conexiones y Porto. El régimen fiscal especial para residentes extranjeros se cerró en 2024: no h…
- **seguro privado portugués** → COMUN_PORTUGAL: …a europea o pagando. Hay que contar con seguro privado portugués —Trofa Saúde, en Braga, alrededor de cincuenta minutos—. …
- **tarjeta europea / no residente / Cunqueiro** → COMUN_PORTUGAL: …Lima, sí: unos cuarenta minutos. Álvaro Cunqueiro, en Vigo, queda a unos treinta y cinco, pero como no reside…
- **tarjeta española de diario** → COMUN_PORTUGAL: …blica portuguesa es más lenta: no es la tarjeta española de diario.",       "El aeropuerto de Vigo está a unos trein…
- **Trofa Saúde** → COMUN_PORTUGAL: …ue contar con seguro privado portugués —Trofa Saúde, en Braga, alrededor de cincuenta minutos—. La sanida…
- **SNS / público más lento** → COMUN_PORTUGAL: …ga, alrededor de cincuenta minutos—. La sanidad pública portuguesa es más lenta: no es la tarjeta española de diario.",       …

**Tratamiento:** marcar, no corregir; extraer a §13; conservar solo consecuencia local (minutos hospital/aero/coche).

### 2.13 No soportado / no inventar

- ~1.300 €/m² y ~123k en prosa (capa 1270)
- Chip 6/10 / 8/10 martilleado
- Playa atlántica en el municipio
- Hospital práctico = solo Conde sin matizar capa Santa Luzia (**excepción a documentar**)
- Aero práctico = solo Vigo contra capa Porto (**excepción**)
- Palma permanente absoluta
- Consejo fiscal/NIF/CRUE
- Nombres de café inventados

---

## 3. Vila Nova de Cerveira

### 3.1 Relato actual completo

> CITA LITERAL — `web/src/lib/relatos-alto-minho.ts` clave `vila-nova-de-cerveira` (objeto completo).

```ts
vila-nova-de-cerveira: {
 escala: "Villa fluvial y arte",
 abrir: [
 "Vila Nova de Cerveira se siente, al cruzar el puente de la Amizade desde Goián, como una villa que ha hecho del río y del arte su carácter. Unos nueve mil habitantes: casco cuidado sobre el Miño, castillo, Aquamuseu —museo del río y de la pesca fluvial—, praia fluvial, Alto do Cervo —mirador sobre la vega— y, en los veranos de los años impares, la Bienal de Arte que llena calles y salas. Frente, Galicia: Goián a dos minutos por el puente. Entre Tui y Caminha, Cerveira es franja B —Moledo a unos veinte minutos—, villa fluvial tranquila y culta, no colonia de chalés ni ciudad completa.",
 "Quien vive aquí es gente local, artistas y quien busca orilla de río con calendario cultural. Un martes de noviembre se camina el casco, se cruza a Goián a comprar o a pasear, y el Miño sigue ancho y manso. Los servicios alcanzan 5/10: villa con carácter, sin gran comercio. El hospital Conde de Bertiandos queda a unos treinta y cinco minutos. El aeropuerto de Vigo anda alrededor de los cuarenta y cinco; Porto, alrededor de los setenta y cinco. Para lo diario el coche ayuda; para el puente a Galicia, no siempre hace falta.",
 "En verano la praia fluvial y el puente reciben más afluencia; la vida de villa de arte se mantiene mejor que el de Moledo o Âncora en agosto. La Bienal marca el calendario: exposición, visitas, mesas llenas unas semanas. Los sábados, la feria —fruta, ropa, artesanía— atrae también a medio Baixo Miño desde el otro lado. Quien busque silencio absoluto de enero lo encontrará en las calles laterales; quien busque café y río también.",
 "Primavera y otoño son buenas épocas para conocerlo: el Alto do Cervo con la vega verde, el paseo fluvial, Goián enfrente sin aduana. Si solo conoces un fin de semana de Bienal, te llevas la impresión de la exposición. Si has visto un martes gris de río y un sábado de feria, ya puedes decidir si de verdad quieres vivir aquí. Hay poca obra nueva; fibra sí.",
 "Cerveira no promete Atlántico a la puerta. Promete Miño, puente, arte y calma de villa a cambio de servicios medios y mar a veinte minutos. Quien acepte ese trato entenderá el sitio al primer cruce hacia Goián.",
 ],
 tiempo: [
 "Si vienes de Baleares, notará el cielo más gris y con menos sol que en Mallorca. Cerveira suma unas 2.400 a 2.450 horas de sol y unos 78 a 80 días despejados, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.600 a 1.700 milímetros en unos 118 a 120 días. El viento es bajo en el río; la humedad, de vega. De noviembre a febrero la terraza se usa la mitad; de junio a septiembre, casi siempre.",
 "El verano en el valle calienta más que en la costa abierta de Moledo o Âncora, aunque sigue lejos del julio balear sostenido. La praia fluvial ofrece baño de río; Moledo queda a unos veinte minutos con agua atlántica de 16 a 18 °C. Julio y agosto llueven poco —dos a cinco días al mes—, pero el termómetro de valle no es el de la nortada costera. Conviene probar un martes de río y un fin de semana de afluencia, no solo un día de exposición.",
 ],
 vivir: [
 "El invierno en Cerveira es de vega: humedad de río, mañanas grises y terraza que se usa la mitad entre noviembre y febrero. Conviene aislamiento y calefacción en casa de villa junto al Miño. Probar un martes gris de río evita firmar solo por un fin de semana de Bienal.",
 "Sin coche, el casco y el puente a Goián permiten paseo y parte de la compra; para lo demás el coche ayuda. Los servicios son 5/10: villa con carácter, sin gran comercio. En enero hay café y río; el silencio de calles laterales convive con la calma de villa fluvial, no con el vacío de colonia de verano.",
 "Conviven gente local, artistas y quien busca orilla de río con calendario cultural. El portugués es la lengua de la villa; Galicia está a dos minutos por el puente de la Amizade —Goián— y los sábados la feria atrae también a medio Baixo Miño. La Bienal en veranos impares llena calles y mesas unas semanas. La integración pasa por río, arte y frontera permeable.",
 "El hospital Conde de Bertiandos queda a unos treinta y cinco minutos. Hay que contar con seguro privado portugués —Trofa Saúde, Braga, alrededor de cincuenta y cinco minutos—. No hay sanidad pública española de uso habitual: se vive en Portugal, con público más lento y privado de referencia en Braga.",
 "Vigo–aeropuerto anda alrededor de los cuarenta y cinco minutos; Porto, alrededor de los setenta y cinco —Palma en verano vía esos aeropuertos—. Ir y volver a Mallorca pide mirar Vigo en temporada y Porto el resto; no es acceso a quince minutos. El régimen fiscal especial para residentes extranjeros se cerró en 2024.",
 "El casco y el entorno del río ofrecen viviendas de villa; hay poca obra nueva y fibra. El modelo es casa o piso de villa con el Miño cerca, no urbanización cerrada. Junto al río hay que contar con humedad y ocupación de fin de semana. Probar un sábado de feria y un martes vacío antes de comprar.",
 ],
 historia: [
 "El castillo y la orilla explican Cerveira: villa fluvial fortificada frente a Galicia, con el puente de la Amizade como gesto cotidiano hacia Goián. La Bienal de Arte —verano de los años impares— convirtió el casco en escena: esculturas, visitas, un calendario que no depende solo del sol. El Aquamuseu cuenta el oficio del río —pesca, barcas, agua dulce— en un país donde el Miño es frontera y despensa a la vez.",
 "El Alto do Cervo —mirador sobre la vega— y la praia fluvial completan la ficha de orilla y monte suave. Lo que conviene saber es de villa culta sobre el Miño: no lista seca de monumentos, sino castillo, arte y frontera permeable. Quien cruce el puente un sábado de feria entenderá por qué Goián y Cerveira funcionan como un solo gesto.",
 ],
 fuera: [
 "El casco, el castillo y la praia fluvial —baño de río, orilla mansa, mesas en temporada— son la tarde de diario. Goián queda al otro lado del puente de la Amizade: paseo fluvial gallego, refuerzo de compra, Portugal y Galicia en el mismo aliento.",
 "El Alto do Cervo aporta mirador sobre la vega del Miño: el sitio al que llevarías a una visita cuando el cielo limpia. Caminha y Moledo andan alrededor de veinte minutos cuando apetezca desembocadura y dunas; Valença, cerca por el río hacia el norte.",
 "No hay playa atlántica en el municipio. Quien quiera océano acepta el trayecto corto a Moledo —arenal largo, pinar, Forte da Ínsua delante—. No es fallo de Cerveira: es la honestidad de la villa fluvial.",
 ],
 casa: [
 "El casco y el entorno del río ofrecen viviendas de villa; hay poca obra nueva y fibra. El modelo es casa o piso de villa con el Miño cerca, no urbanización cerrada. Junto al río hay que contar con humedad y ocupación de fin de semana; conviene comprobar un sábado de feria y un martes vacío.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros. Quien busque metros y calma fluvial encontrará más holgura que en Moledo o Âncora; quien busque primera línea de Atlántico, no.",
 "Los servicios son 5/10. El hospital queda a unos treinta y cinco minutos. Vigo–aeropuerto está a unos cuarenta y cinco; Porto, a unos setenta y cinco. Hay que contar con seguro privado portugués —Trofa Saúde, Braga, alrededor de cincuenta y cinco minutos—. Conviene probar Bienal o feria y un noviembre de río antes de comprar.",
 ],
 encaja: {
 si: [
 "Encaja si se quiere vivir el año entero junto al Miño en una villa culta, no en una colonia de verano. Vila Nova de Cerveira ofrece casco cuidado, castillo, Aquamuseu, praia fluvial y la Bienal de Arte en los veranos impares; Goián, en Galicia, queda al otro lado del puente de la Amizade. Un martes de noviembre se camina el río y se cruza a comprar o a pasear sin depender de agosto. Quien priorice orilla fluvial, arte y calma entre Tui y Caminha frente a nortada y dunas encontrará aquí una escala reconocible. Los servicios alcanzan 5/10: villa con carácter, sin gran comercio.",
 "También encaja para quien acepte el Atlántico como escapada corta —Moledo a unos veinte minutos— y valore el verano de río frente al calor sostenido de Mallorca. En la costa minhota las máximas habituales se quedan cerca de 20,5 °C; aquí el valle calienta algo más, pero sigue lejos del julio balear. Llueven alrededor de 1.600 milímetros en unos 118 días: hay que aceptar invierno húmedo. El hospital de referencia queda a unos treinta y cinco minutos; conviene seguro privado portugués.",
 ],
 no: [
 "No encaja si todos los servicios deben estar a pie o si la playa atlántica ha de abrir la puerta de casa. Falta comercio grande; Moledo y Caminha cubren el baño de océano. Tampoco si el hospital debe quedar a menos de media hora: treinta y cinco minutos al público de referencia es el dato, no una excepción de una calle.",
 "Tampoco encaja si se busca el régimen fiscal especial para residentes extranjeros —cerrado en 2024— o un privado cercano: Trofa Saúde, en Braga, anda alrededor de los cincuenta y cinco minutos. Quien se decida solo tras un fin de semana de Bienal, sin probar un martes gris de río, se llevará una villa distinta de la exposición.",
 ],
 veredicto:
 "Veredicto: Vila Nova de Cerveira es villa fluvial y arte —Miño, puente a Goián y cultura a cambio de servicios medios y mar a veinte minutos—. Buscaría tres habitaciones hacia el casco o el río, tras probar un martes de noviembre y un fin de semana de exposición o de praia fluvial llena. Se ganan, frontera cotidiana y calendario cultural; se aceptan servicios 5/10, aeropuerto a unos cuarenta y cinco minutos (Vigo) y seguro privado portugués. Si mandan playa abrigada y mercado a pie, Âncora encaja mejor; si hay que contar con río, arte y precio de interior, Cerveira es coherente.",
 },
 fotoIdentidad: {
 src: "/fotos/alto-minho/vila-nova-de-cerveira-identidad.jpg",
 pie: "Vila Nova de Cerveira: casas junto al Miño, con el monte y el estuario",
 },
 fotosAbrir: [
 { src: "/fotos/alto-minho/cerveira-villa.jpg", pie: "Vila Nova de Cerveira sobre el Miño" },
 ],
 fotosHistoria: [
 { src: "/fotos/alto-minho/cerveira-arte.jpg", pie: "Arte y villa en Vila Nova de Cerveira" },
 { src: "/fotos/alto-minho/cerveira-aquamuseu.jpg", pie: "Aquamuseu de Vila Nova de Cerveira" },
 ],
 fotosFuera: [],
 creditoFotos: credito,
 }
```

**Señales de auditoría (scan local, sin internet):**

- **X/10** (5 muestras):
  - …manso. Los servicios alcanzan 5/10: villa con carácter, sin gran…
  - …oche ayuda. Los servicios son 5/10: villa con carácter, sin gran…
  - …co, no.",  "Los servicios son 5/10. El hospital queda a unos tre…
  - …cible. Los servicios alcanzan 5/10: villa con carácter, sin gran…
  - …ultural; se aceptan servicios 5/10, aeropuerto a unos cuarenta y…
- **broken000** (1 muestras):
  - …una media municipal en prosa. 000 euros. Quien busque metros y calma …
- **precio_narr** (2 muestras):
  - … del mes; aquí no se fija una media municipal en prosa. 000 euros. Quien bu…
  - …una media municipal en prosa. 000 euros. Quien busque metros y calma …
- **clima** (5 muestras):
  - …s gris y con menos sol que en Mallorca. Cerveira suma unas 2.400 a 2…
  - …veira suma unas 2.400 a 2.450 horas de sol y unos 78 a 80 días despejado…
  - …as de sol y unos 78 a 80 días despejados, frente a las 2.800 horas y…
  - …oras y 120 jornadas claras de Mallorca. Caen alrededor de 1.600 a 1.…
  - …s aeropuertos—. Ir y volver a Mallorca pide mirar Vigo en temporada …
- **hospital** (5 muestras):
  - …rácter, sin gran comercio. El hospital Conde de Bertiandos queda a u…
  - …in gran comercio. El hospital Conde de Bertiandos queda a unos treinta y cinco …
  - … y frontera permeable.",  "El hospital Conde de Bertiandos queda a u…
  - …ra permeable.",  "El hospital Conde de Bertiandos queda a unos treinta y cinco …
  - …con seguro privado portugués —Trofa Saúde, Braga, alrededor de ci…
- **Palma** (1 muestras):
  - …dedor de los setenta y cinco —Palma en verano vía esos aeropuerto…
- **fiscal** (3 muestras):
  - …s acceso a quince minutos. El régimen fiscal especial para residentes extr…
  - …ara residentes extranjeros se cerró en 2024.",  "El casco y el entorno de…
  - …Tampoco encaja si se busca el régimen fiscal especial para residentes extr…
- **seguro** (4 muestras):
  - …o minutos. Hay que contar con seguro privado portugués —Trofa Saúde, Braga…
  - …a y cinco. Hay que contar con seguro privado portugués —Trofa Saúde, Braga…
  - …nta y cinco minutos; conviene seguro privado portugués.",  ],  no: [  "No …
  - …enta y cinco minutos (Vigo) y seguro privado portugués. Si mandan playa ab…
- **frontera** (5 muestras):
  - …el puente de la Amizade desde Goián, como una villa que ha hecho …
  - …llena calles y salas. Frente, Galicia: Goián a dos minutos por el p…
  - …les y salas. Frente, Galicia: Goián a dos minutos por el puente. …
  - … minutos por el puente. Entre Tui y Caminha, Cerveira es franja…
  - …e camina el casco, se cruza a Goián a comprar o a pasear, y el Mi…
- **metro_tren** (4 muestras):
  - …lrededor de 1.600 a 1.700 milímetros en unos 118 a 120 días. El v…
  - …co días al mes—, pero el termómetro de valle no es el de la norta…
  - …rosa. 000 euros. Quien busque metros y calma fluvial encontrará m…
  - …lueven alrededor de 1.600 milímetros en unos 118 días: hay que ac…
- **sol** (2 muestras):
  - …a. Cerveira suma unas 2.400 a 2.450 horas de sol y unos 78 a 80 días despejado…
  - ….450 horas de sol y unos 78 a 80 días despejados, frente a las 2.800 horas y…

### 3.2 Capa 2026 completa

Fuente: `web/src/data/municipios-alto-minho.json` · slug `vila-nova-de-cerveira`.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `113146` |
| `A_3hab` | `156663` |
| `B_2hab` | `91387` |
| `B_3hab` | `126536` |
| `advertenciaMicrozona` | `null` *(n.d. / ausente)* |
| `aeropuertoMin` | `45` |
| `aeropuertoPractico2026` | Porto |
| `aeropuertos` | Vigo 57 km · 45 min (Palma: verano); Porto 94 km · 70 min (Palma: verano); Santiago 134 km · 100 min (Palma: casi todo el año) |
| `autonomiaCotidiana` | MEDIA |
| `casaQueBuscar` | Vivienda cómoda y accesible, 2–3 dormitorios, exterior, servicios cotidianos ... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Más favorable |
| `comunicaciones` | N-13; puente a Goián |
| `comunicacionesNota10` | `7` |
| `cubiertos` | `108` |
| `dependenciaCocheTexto` | Media; rutina básica local, coche/tren para servicios mayores y costa. |
| `despejados` | `80` |
| `estacionalidad2026` | Vida local anual con turismo cultural/fluvial moderado. |
| `fibra` | Sí |
| `franja` | B |
| `hospitalMin` | `35` |
| `hospitalPractico2026` | Hospital de Santa Luzia, Viana do Castelo |
| `hospitalPriv` | 55 km · 55 min · Trofa Saúde (Braga) |
| `hospitalPub` | 35 km · 35 min · Conde de Bertiandos (Ponte de Lima) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 30 km · 35 min · Conde de Bertiandos (Ponte de Lima); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `77` |
| `lat` | `41.94` |
| `lluviaDias` | `118` |
| `lluviaMm` | `1600` |
| `lon` | `-8.743` |
| `mapa` | 74_vila_nova_de_cerveira.png |
| `mercadoReventa` | Mercado intermedio: base residencial propia y/o demanda exterior. Priorizar u... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `20` |
| `minCosta` | `20` |
| `municipio` | Vila Nova de Cerveira |
| `n` | `74` |
| `niebla` | Media |
| `obraNueva` | Poca |
| `pais` | Portugal |
| `palmaDirecta2026` | Porto: Palma observada en la operativa de 2026; rutas y frecuencias cambian por temporada, comprobar antes de viajar. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Santiago (casi todo el año) · 100 min |
| `paseoCotidiano` | Ecopista do Rio Minho: recorrido llano junto al río, adecuado para paseo cotidiano y bicicleta. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Miño y paseo excelente a cambio de escala pequeña y ausencia de playa marina cotidiana. |
| `playaBano` | Moledo |
| `playaCotidiana` | NO MARÍTIMA |
| `playaCotidianaModo` | Vida fluvial; el Atlántico no está integrado en el núcleo. |
| `precioM2` | `1339` |
| `provincia` | Viana do Castelo |
| `radioCotidiano` | Villa pequeña con comercio, equipamientos culturales y servicios básicos junto al Miño. |
| `radioSalida` | Valença/Tui y Viana; costa atlántica requiere desplazamiento. |
| `sanidadPrimaria2026` | Cuidados de saúde primários locales |
| `servicios` | `5` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | Tiene: villa cuidada, arte. Falta: comercio grande |
| `slug` | vila-nova-de-cerveira |
| `solHoras` | `2450` |
| `tempAgua` | 16-18 |
| `tempInvierno` | `10.0` |
| `tempVerano` | `20.5` |
| `transporteRelevante2026` | Linha do Minho y ecopista fluvial. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital de Santa Luzia, Viana do Castelo. |
| `viento` | Baja |
| `zona` | Alto Minho (PT) |

**Highlights capa (autoridad):** autonomia `MEDIA` · playa `NO MARÍTIMA` · precioM2 `1339` · servicios `5` · hospitalMin `35` · aeroMin `45`.

### 3.3 Auditorías / plan existentes

**NO PLAN_EDITORIAL** específico Portugal (no hay `PLAN_EDITORIAL_PORTUGAL_*.md`).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n=74 → claves 73–83):

```
| 74 | Vila Nova de Cerveira | Alto Minho (PT) | precio relato ~1500 vs ficha 1339 | usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | lenguaje vago/revisar: tranquilo, todos los servicios | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 74 | Vila Nova de Cerveira | Alto Minho (PT) | no | — |
```

**estudio_zonas.md** (histórico — **NO** autoridad 2026):

<details><summary>Recorte estudio</summary>

**Vila Nova de Cerveira (nº 74).** 9.000 habitantes; villa cuidada sobre el Miño frente a Goián (puente), castillo, Bienal de Arte, Aquamuseu, praia fluvial, Alto do Cervo (mirador). Franja B (Moledo a 20). Servicios 5/10. Hospital 35. Aeropuerto de Vigo 45, Porto 75. Precio 1.500: 3 habitaciones 142.000. Para quién: quien quiera villa fluvial tranquila y culta, entre Tui y Caminha.

**Caminha (nº 75).** 16.000 habitantes en el concelho; plaza histórica (Torre do Relógio, iglesia matriz), desembocadura del Miño con el pinar y el fuerte de la Ínsua, ferry a A Guarda, Serra d'Arga detrás. Playas de Foz do Minho y Moledo a 5 min. Viento medio. Servicios 5/10. Hospital 30. Aeropuerto 60. Precio 1.900: 3 habitaciones franja A 222.000. Poca obra nueva. Para quién: quien quiera villa histórica en la boca del Miño con Galicia enfrente.

**Moledo (Caminha) (nº 76).** 1.500 habitantes; el veraneo 

</details>

### 3.4 Auditoría relato ↔ capa

Estados permitidos: `ALINEADO` · `OBSOLETO` · `DUPLICA_CAPA` · `P4_PRESERVAR` · `SOPORTADO_PERO_INFRAUSADO` · `NO_SOPORTADO_NO_INVENTAR` · `REQUIERE_VERIFICACION_EXTERNA` · `COMUN_PORTUGAL`

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | Chip X/10 repetido en abrir/casa/encaja | `servicios` **5**; Tiene: villa cuidada, arte. Falta: comercio grande | DUPLICA_CAPA | Omitir chip; narrar autonomía cualitativa |
| Precio €/m² | Auditoría/estudio ~1500; prosa puede citar cifras o remitir + «000 euros» | `precioM2` **1339** | OBSOLETO | Capa prevalece; omitir cifras; TablaPrecios |
| Prosa rota «000 euros» | Tras remitir a capa queda fragmento «000 euros» (+ totales sueltos a veces) | Cifras viven en `precioM2` / A/B / TablaPrecios | OBSOLETO | Borrar resto roto; no reponer €/m² históricos en prosa |
| Autonomía / río | Villa fluvial; praia fluvial ≠ Atlántico | **MEDIA**; playa **NO MARÍTIMA** | ALINEADO | No confundir praia fluvial con mar |
| Hospital | Conde ~35′; Trofa Braga | `hospitalPractico2026`=Hospital de Santa Luzia, Viana do Castelo | ALINEADO / DUPLICA_CAPA | Una mención práctica; no cascada |
| Aeropuerto / Palma | Minutos aero + «Palma en verano» (tono permanente posible) | `aeropuertoMin` 45; `aeropuertoPractico2026`=Porto; `palmaDirecta2026` matiza | DUPLICA_CAPA / ALINEADO (matiz temporada) | Consecuencia una vez; no martillar minutos+Palma; no inventar permanente absoluto |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos tiempo→encaja (y a menudo abrir) | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| COMUN_PORTUGAL (fiscal / seguro / tarjeta / Cunqueiro) | Bloques repetidos: régimen fiscal cerrado 2024; seguro privado; tarjeta europea/española; SNS lento | Hecho nacional — no capa municipal | COMUN_PORTUGAL | Extraer a doc común; conservar solo consecuencia local; **no corregir** aquí |
| P4 Bienal / Miño / Goián | Arte, puente, río | capa + estudio | P4_PRESERVAR | Solo identidad soportada en repo |

### 3.5 P4 / identidad

- **Preservar:** Miño frente a Goián, Bienal/Aquamuseu, praia fluvial, Alto do Cervo.
- **Identidad:** villa fluvial culta; mar = salida (~Moledo 20′).
- **Peaje:** servicios medios; hospital fuera.

### 3.6 Vida cotidiana soportada

| Elemento | Clasificación | Base repo |
|---|---|---|
| Autonomía | YA SOPORTADO | `MEDIA` |
| Coche | YA SOPORTADO | `Media; rutina básica local, coche/tren para servicios mayores y costa.` |
| Servicios cotidianos | YA SOPORTADO | servicios `5` — Tiene: villa cuidada, arte. Falta: comercio grande |
| Paseo | YA SOPORTADO | Ecopista do Rio Minho: recorrido llano junto al río, adecuado para paseo cotidiano y bici… |
| Pendiente | N/A / null | `null` |
| Microzona | Poco o nada en capa | adv: — / microPrecio: — |
| Compra enero / estacionalidad | YA SOPORTADO en relato+capa | Vida local anual con turismo cultural/fluvial moderado. |
| Transporte relevante | YA SOPORTADO | Linha do Minho y ecopista fluvial. |
| Nombres café / horarios exactos | NO SOPORTADO | — |
| Totales A/B en prosa | NO SOPORTADO (viven en tabla) | A_3hab `156663` / B_3hab `126536` |
| Burocracia nacional (fiscal/NIF/CRUE) | COMUN_PORTUGAL | No repetir 11×; ver §13 |

### 3.7 Reality toll

- Autonomía **MEDIA**
- Playa **NO MARÍTIMA** (fluvial / no marítima)
- Hospital ~**35′**; aero ~**45′**
- Precio **1339**
- Bienal/afluencia vs noviembre vacío

### 3.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | Auditoría ~1500 (histórico prosa/estudio) | **1339** | OBSOLETO — capa prevalece |
| A_3hab / B_3hab | No narrar totales | `156663` / `126536` | TablaPrecios |
| casaQueBuscar / reventa | Cualitativo | Ver tabla capa | `casaQueBuscar` truncado `…` → **DESEABLE** texto completo (no bloquea v1); `mercadoReventa` truncado `…` → **DESEABLE** texto completo (no bloquea v1) |
| «000 euros» | Presente tras remitir a capa (varios) | — | Borrar resto roto |

### 3.9 Clima: deuda / duplicación (NO correct)

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en `tiempo` + `encaja` (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `vila-nova-de-cerveira` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_32.**

### 3.10 Mar / río / playa / paseo

- **playaCotidiana:** `NO MARÍTIMA`
- **Modo:** Vida fluvial; el Atlántico no está integrado en el núcleo.
- **paseoCotidiano:** Ecopista do Rio Minho: recorrido llano junto al río, adecuado para paseo cotidiano y bicicleta.
- **pendiente:** `null`
- Praia fluvial ≠ mar; Moledo = salida.
- No contradecir la etiqueta de playa de la capa.

### 3.11 Frontera / España

- **Hecho:** puente a Goián; Miño frontera.
- **Cotidiano:** cruce documentado en relato; no inventar frecuencias.
- **No:** burocracia nacional repetida.

### 3.12 COMUN_PORTUGAL (local excerpts — NO correct)

- **fiscal cerrado 2024** → COMUN_PORTUGAL: …esto; no es acceso a quince minutos. El régimen fiscal especial para residentes extranjeros se cerró en 2024.",  "…
- **seguro privado portugués** → COMUN_PORTUGAL: …nta y cinco minutos. Hay que contar con seguro privado portugués —Trofa Saúde, Braga, alrededor de cincuenta y cinco minut…
- **Trofa Saúde** → COMUN_PORTUGAL: …ue contar con seguro privado portugués —Trofa Saúde, Braga, alrededor de cincuenta y cinco minutos—. No h…
- **SNS / público más lento** → COMUN_PORTUGAL: … uso habitual: se vive en Portugal, con público más lento y privado de referencia en Braga.",  "Vigo–aeropuerto anda …

**Tratamiento:** marcar, no corregir; extraer a §13; conservar solo consecuencia local (minutos hospital/aero/coche).

### 3.13 No soportado / no inventar

- ~1500 como cifra vigente
- Chip 5/10
- Praia fluvial = playa oceánica
- Palma permanente
- Burocracia nacional repetida

---

## 4. Caminha

### 4.1 Relato actual completo

> CITA LITERAL — `web/src/lib/relatos-alto-minho.ts` clave `caminha` (objeto completo).

```ts
caminha: {
 escala: "Villa en la boca del Miño",
 abrir: [
 "Caminha se siente más frontera que mapa. Unos dieciséis mil habitantes en el concelho: plaza histórica con la Torre do Relógio —resto de la muralla medieval— y la iglesia matriz, desembocadura del Miño con el pinar hacia el Forte da Ínsua —fuerte del siglo XVII sobre un islote en la boca del río—, ferry estacional a A Guarda y Serra d'Arga —825 m de granito y aldeas de piedra— detrás. Playas de Foz do Minho —estuario, agua más templada— y Moledo a unos cinco minutos. Galicia está enfrente: no es metáfora; se ve.",
 "Quien vive aquí es gente local, peregrinos del Camino Portugués de la Costa que cruzan la villa todo el año, y veraneantes que vuelven cuando el estuario se llena. Un martes de noviembre se camina la plaza, se mira A Guarda al otro lado y se resuelve parte del día a día en escala de villa: servicios 5/10. El Hospital de Santa Luzia —Viana— queda a unos treinta minutos. El aeropuerto de Porto anda alrededor de los sesenta —Palma en verano—. Para la plaza y el café no hace falta coche; para el hospital y el súper grande, sí.",
 "En verano Foz do Minho, el pinar y el ferry reciben más afluencia: ruido, aparcamiento justo, mesas ocupadas. El viento es medio. Hay poca obra nueva; fibra sí. El tráfico de la N-13 se nota en temporada; el resto del año es villa de desembocadura. Quien busque silencio de enero lo encontrará; quien busque terraza abierta también, con el río abriéndose al Atlántico delante.",
 "El Camino Portugués de la Costa pasa por la villa: mochilas, sellos, un flujo de gente que no para en noviembre. Primavera y otoño son buenas épocas para conocerlo: Arga verde, estuario sin saturación, ferry cuando opera. Si solo conoces un sábado soleado en la Torre do Relógio, te llevas la imagen de folleto. Si has visto viento medio y un día de desembocadura llena, ya puedes decidir si de verdad quieres vivir aquí.",
 "Caminha no promete ciudad completa ni hospital a cinco minutos. Promete boca del Miño, Galicia enfrente y playa a cinco a cambio de servicios medios y mar frío. Quien acepte ese trato entenderá el sitio al primer paseo hacia el pinar de la Ínsua.",
 ],
 tiempo: [
 "Si vienes de Baleares, el cielo de Caminha es de los más limpios de la tabla. Suma unas 2.500 horas de sol y unos 78 a 80 días despejados —junto con el Litoral Norte, el mejor registro del estudio—, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.450 milímetros en unos 112 a 115 días. El viento es medio: la nortada se nota, sin el golpe de Moledo. De noviembre a febrero la terraza se usa menos; de junio a septiembre, casi siempre.",
 "El verano en la costa ronda 20,5 °C, con tres a seis días sobre 30 °C: fresco frente al calor sostenido de Mallorca. Foz do Minho —estuario, más templado— y Moledo tienen agua entre 16 y 18 °C en agosto. Julio y agosto llueven poco —dos a cinco días—, pero el invierno moja de verdad. Conviene venir un día de viento y un noviembre, no solo un sábado de sol en la plaza.",
 ],
 vivir: [
 "El invierno en Caminha moja de verdad: alrededor de 1.450 milímetros y terraza que se usa menos de noviembre a febrero. Humedad de desembocadura, salitre hacia Foz do Minho y viento medio piden aislamiento y calefacción. Probar un día de viento y un noviembre evita firmar solo por la Torre do Relógio en sol.",
 "Sin coche, la plaza y el café se resuelven a pie; para el hospital y el súper grande hace falta vehículo. Los servicios son 5/10. En enero la villa de desembocadura sigue abierta; el Camino Portugués de la Costa aporta mochilas todo el año. Quien viva junto a Foz do Minho notará más afluencia de verano; en el casco, ritmo de plaza histórica.",
 "Conviven gente local, peregrinos del Camino y veraneantes que vuelven cuando el estuario se llena. El portugués manda; Galicia está enfrente —se ve— y el ferry estacional a A Guarda convierte el otro país en gesto cotidiano. La integración pasa por frontera vivida, plaza y Camino, no por colonia cerrada entre pinos.",
 "El Hospital de Santa Luzia —Viana— queda a unos treinta minutos. Hay que contar con seguro privado portugués —Trofa Saúde, Braga, alrededor de sesenta minutos—. No hay hospital en el municipio ni sanidad pública española de diario: se asume Portugal, público más lento y privado de referencia lejos.",
 "Porto–Sá Carneiro anda alrededor de los sesenta minutos —Palma en verano—. Ir y volver a Mallorca suele concentrarse en temporada vía Porto; el trayecto no es el de Vila do Conde a quince minutos. Conviene mirar el calendario real. El régimen fiscal especial para residentes extranjeros se cerró en 2024.",
 "El casco y el entorno de la desembocadura ofrecen viviendas de villa; hay poca obra nueva y fibra. El modelo es piso o casa de villa, no urbanización cerrada. Junto a Foz do Minho hay que contar con salitre, viento y ocupación de verano. Orientación y un día de afluencia en la boca del río antes de comprar.",
 ],
 historia: [
 "La Torre do Relógio, la iglesia matriz y la plaza explican Caminha: villa histórica en la boca del Miño, puerta de entrada y de vigilancia cuando el río era frontera de guerra. El Forte da Ínsua —isla fortificada del siglo XVII frente a la desembocadura— marca ese oficio de guardar la boca; hoy es paseo y foto turística por el pinar cuando la marea y el acceso lo permiten. El ferry a A Guarda convierte Galicia en gesto cotidiano: se mira el otro país y, cuando opera el barco, se corta el estuario en minutos.",
 "La Serra d'Arga detrás completa la ficha de río, mar y monte: aldeas de piedra, caballos, rutas desde el concelho. El Camino Portugués de la Costa añade mochilas todo el año. Lo que conviene saber es de villa de desembocadura: torre, fuerte, plaza y frontera permeable, no lista seca de fechas.",
 ],
 fuera: [
 "La plaza, Foz do Minho —playa de estuario a unos minutos del casco, agua más mansa que el Atlántico abierto— y el pinar hacia el Forte da Ínsua son la tarde de diario. El ferry a A Guarda corta el estuario cuando opera: Portugal y Galicia en el mismo aliento.",
 "Moledo queda a unos cinco minutos: arenal largo, dunas, nortada, kite y surf. Arga se sube desde el concelho —Santo João d'Arga, aldeas de granito— cuando apetezca monte detrás del mar. Viana anda alrededor de treinta minutos: ciudad, hospital, comercio.",
 "La Ecovia do Litoral Norte —pasarelas de madera hacia el sur— y el Camino de costa completan los caminos. Quien viva aquí tiene desembocadura a la puerta y océano a cinco minutos; el baño cómodo de ría gallega queda más lejos, hacia Cesantes, si algún día se busca agua más templada.",
 ],
 casa: [
 "El casco y el entorno de la desembocadura ofrecen viviendas de villa; hay poca obra nueva y fibra. El modelo es piso o casa de villa, no urbanización cerrada. Junto a Foz do Minho hay que contar con salitre, viento y ocupación de verano; conviene la orientación y probar un día de afluencia en la boca del río.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros. Quien busque primera línea de estuario pagará el paisaje; quien se retire unas calles ganará calma de noviembre.",
 "Los servicios son 5/10. Santa Luzia —Viana— queda a unos treinta minutos. Porto–Sá Carneiro está a unos sesenta. Hay que contar con seguro privado portugués —Trofa Saúde, Braga, alrededor de sesenta minutos—. Conviene probar un martes de plaza y un día de desembocadura llena antes de comprar.",
 ],
 encaja: {
 si: [
 "Encaja si se quiere villa histórica en la boca del Miño con Galicia enfrente todo el año, no solo en agosto. La plaza —Torre do Relógio, iglesia matriz—, el pinar hacia el Forte da Ínsua y el ferry estacional a A Guarda convierten la frontera en gesto cotidiano: se mira el otro país y, cuando opera el barco, se corta el estuario en minutos. Foz do Minho y Moledo quedan a unos cinco minutos; la Serra d'Arga cierra el horizonte por detrás. Un martes de noviembre se camina la plaza sin depender del veraneo. Quien priorice desembocadura, Camino Portugués de la Costa y sol de costa —unas 2.500 horas, de las mejores de la tabla— frente a ciudad completa encontrará aquí una villa reconocible.",
 "También encaja para quien acepte el Atlántico frío y un verano fresco frente a Mallorca. Las máximas costeras rondan 20,5 °C, con pocos días sobre 30 °C; el agua anda entre 16 y 18 °C en agosto —Foz do Minho, de estuario, algo más templada—. Llueven alrededor de 1.450 milímetros en unos 112 días: el invierno moja de verdad. Los servicios son 5/10; Santa Luzia, en Viana, queda a unos treinta minutos. Hay que contar con seguro privado portugués.",
 ],
 no: [
 "No encaja si se necesitan servicios densos a pie, agua de mar templada o hospital a menos de media hora. Falta hospital en el municipio; el privado de referencia —Trofa Saúde, Braga— anda alrededor de los sesenta minutos. Tampoco si el silencio de agosto junto a Foz do Minho es condición: desembocadura y ferry reciben afluencia en temporada.",
 "Tampoco encaja si se busca el régimen fiscal especial para residentes extranjeros —cerrado en 2024— o un aeropuerto a menos de una hora: Porto queda a unos sesenta minutos. Quien se decida solo tras un sábado soleado en la plaza, sin probar viento medio ni un día de desembocadura llena, se llevará una villa distinta.",
 ],
 veredicto:
 "Veredicto: Caminha es villa de desembocadura —plaza histórica, Ínsua y ferry a A Guarda a cambio de servicios medios y mar frío—. Buscaría tres habitaciones hacia el casco o Foz do Minho, fuera del tramo más ocupado en agosto, tras probar un martes de noviembre y un día de afluencia en la boca del río. Se ganan Galicia enfrente, playas a cinco minutos y; se aceptan servicios 5/10, agua a 16–18 °C, hospital a unos treinta minutos y seguro privado portugués. Si mandan playa abrigada y mercado a pie, Âncora; si hay que contar con aldea de granito y Viana a quince, Afife-Carreço; si la foto típica es río y torre frente a Portugal, Caminha justifica la escala.",
 },
 fotosAbrir: [
 { src: "/fotos/alto-minho/caminha-plaza.jpg", pie: "Plaza histórica de Caminha" },
 { src: "/fotos/alto-minho/caminha-torre.jpg", pie: "Torre do Relógio, Caminha" },
 ],
 fotosHistoria: [
 { src: "/fotos/alto-minho/caminha-iglesia.jpg", pie: "Iglesia matriz de Caminha" },
 ],
 fotosFuera: [],
 creditoFotos: credito,
 }
```

**Señales de auditoría (scan local, sin internet):**

- **X/10** (5 muestras):
  - …en escala de villa: servicios 5/10. El Hospital de Santa Luzia —…
  - …a vehículo. Los servicios son 5/10. En enero la villa de desembo…
  - …iembre.",  "Los servicios son 5/10. Santa Luzia —Viana— queda a …
  - … de verdad. Los servicios son 5/10; Santa Luzia, en Viana, queda…
  - …nutos y; se aceptan servicios 5/10, agua a 16–18 °C, hospital a …
- **broken000** (1 muestras):
  - …una media municipal en prosa. 000 euros. Quien busque primera línea d…
- **precio_narr** (2 muestras):
  - … del mes; aquí no se fija una media municipal en prosa. 000 euros. Quien bu…
  - …una media municipal en prosa. 000 euros. Quien busque primera línea d…
- **clima** (5 muestras):
  - … de la tabla. Suma unas 2.500 horas de sol y unos 78 a 80 días despejado…
  - …as de sol y unos 78 a 80 días despejados —junto con el Litoral Norte…
  - …oras y 120 jornadas claras de Mallorca. Caen alrededor de 1.450 milí…
  - … frente al calor sostenido de Mallorca. Foz do Minho —estuario, más …
  - …lma en verano—. Ir y volver a Mallorca suele concentrarse en tempora…
- **hospital** (5 muestras):
  - … de villa: servicios 5/10. El Hospital de Santa Luzia —Viana— queda …
  - …ervicios 5/10. El Hospital de Santa Luzia —Viana— queda a unos treinta …
  - … no hace falta coche; para el hospital y el súper grande, sí.",  "En…
  - …no promete ciudad completa ni hospital a cinco minutos. Promete boca…
  - …é se resuelven a pie; para el hospital y el súper grande hace falta …
- **Palma** (2 muestras):
  - …nda alrededor de los sesenta —Palma en verano—. Para la plaza y e…
  - …dedor de los sesenta minutos —Palma en verano—. Ir y volver a Mal…
- **fiscal** (3 muestras):
  - … mirar el calendario real. El régimen fiscal especial para residentes extr…
  - …ara residentes extranjeros se cerró en 2024.",  "El casco y el entorno de…
  - …Tampoco encaja si se busca el régimen fiscal especial para residentes extr…
- **seguro** (4 muestras):
  - …a minutos. Hay que contar con seguro privado portugués —Trofa Saúde, Braga…
  - …s sesenta. Hay que contar con seguro privado portugués —Trofa Saúde, Braga…
  - …a minutos. Hay que contar con seguro privado portugués.",  ],  no: [  "No …
  - …ital a unos treinta minutos y seguro privado portugués. Si mandan playa ab…
- **frontera** (5 muestras):
  - …ir: [  "Caminha se siente más frontera que mapa. Unos dieciséis mil …
  - …n islote en la boca del río—, ferry estacional a A Guarda y Serra…
  - … del río—, ferry estacional a A Guarda y Serra d'Arga —825 m de gran…
  - … Moledo a unos cinco minutos. Galicia está enfrente: no es metáfora…
  - …e se camina la plaza, se mira A Guarda al otro lado y se resuelve pa…
- **metro_tren** (3 muestras):
  - …. Caen alrededor de 1.450 milímetros en unos 112 a 115 días. El v…
  - …erdad: alrededor de 1.450 milímetros y terraza que se usa menos d…
  - …lueven alrededor de 1.450 milímetros en unos 112 días: el inviern…
- **sol** (2 muestras):
  - …impios de la tabla. Suma unas 2.500 horas de sol y unos 78 a 80 días despejado…
  - ….500 horas de sol y unos 78 a 80 días despejados —junto con el Litoral Norte…

### 4.2 Capa 2026 completa

Fuente: `web/src/data/municipios-alto-minho.json` · slug `caminha`.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `175929` |
| `A_3hab` | `243594` |
| `B_2hab` | `142097` |
| `B_3hab` | `196749` |
| `advertenciaMicrozona` | Caminha villa, Moledo y Vila Praia de Âncora son experiencias distintas aunque compartan concelho. |
| `aeropuertoMin` | `60` |
| `aeropuertoPractico2026` | Porto |
| `aeropuertos` | Vigo 78 km · 60 min (Palma: verano); Porto 87 km · 65 min (Palma: verano); Santiago 145 km · 105 min (Palma: casi todo el año) |
| `autonomiaCotidiana` | MEDIA-FUERTE |
| `casaQueBuscar` | Accesibilidad, exterior/terraza y distancia realmente caminable a núcleo y pa... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Más favorable |
| `comunicaciones` | N-13; ferry a A Guarda |
| `comunicacionesNota10` | `7` |
| `cubiertos` | `108` |
| `dependenciaCocheTexto` | Baja-media en villa; coche/tren para playa y hospital. |
| `despejados` | `80` |
| `estacionalidad2026` | Vida anual con aumento turístico fuerte en verano. |
| `fibra` | Sí |
| `franja` | A |
| `hospitalMin` | `30` |
| `hospitalPractico2026` | Hospital de Santa Luzia, Viana do Castelo |
| `hospitalPriv` | 60 km · 60 min · Trofa Saúde (Braga) |
| `hospitalPub` | 30 km · 30 min · Santa Luzia (Viana) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 25 km · 30 min · Santa Luzia (Viana do Castelo); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `77` |
| `lat` | `41.875` |
| `lluviaDias` | `112` |
| `lluviaMm` | `1450` |
| `lon` | `-8.838` |
| `mapa` | 75_caminha.png |
| `mercadoReventa` | Mercado intermedio con componente turístico/segunda residencia. La liquidez d... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `5` |
| `minCosta` | `5` |
| `municipio` | Caminha |
| `n` | `75` |
| `niebla` | Media |
| `obraNueva` | Poca |
| `pais` | Portugal |
| `palmaDirecta2026` | Porto: Palma observada en la operativa de 2026; rutas y frecuencias cambian por temporada, comprobar antes de viajar. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Santiago (casi todo el año) · 105 min |
| `paseoCotidiano` | Frente del estuario, casco y ribera. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Villa histórica y estuario muy agradables; playa oceánica y hospital no están en el mismo radio cotidiano. |
| `playaBano` | Foz do Minho / Moledo |
| `playaCotidiana` | PARCIAL |
| `playaCotidianaModo` | La villa vive estuario/río; la gran experiencia de playa está en Moledo/Âncora y suele implicar salida. |
| `precioM2` | `2082` |
| `provincia` | Viana do Castelo |
| `radioCotidiano` | Villa de Caminha con mercado/comercio y servicios básicos en la desembocadura del Minho. |
| `radioSalida` | Moledo y Âncora para playa; Viana para hospital y servicios superiores. |
| `sanidadPrimaria2026` | Cuidados de saúde primários locales |
| `servicios` | `5` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | Tiene: villa histórica. Falta: hospital en el municipio |
| `slug` | caminha |
| `solHoras` | `2500` |
| `tempAgua` | 16-18 |
| `tempInvierno` | `10.0` |
| `tempVerano` | `20.5` |
| `transporteRelevante2026` | Linha do Minho. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital de Santa Luzia, Viana do Castelo. |
| `viento` | Media |
| `zona` | Alto Minho (PT) |

**Highlights capa (autoridad):** autonomia `MEDIA-FUERTE` · playa `PARCIAL` · precioM2 `2082` · servicios `5` · hospitalMin `30` · aeroMin `60`.

### 4.3 Auditorías / plan existentes

**NO PLAN_EDITORIAL** específico Portugal (no hay `PLAN_EDITORIAL_PORTUGAL_*.md`).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n=75 → claves 73–83):

```
| 75 | Caminha | Alto Minho (PT) | precio relato ~1900 vs ficha 2082 | — | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 75 | Caminha | Alto Minho (PT) | no | — |
```

**estudio_zonas.md** (histórico — **NO** autoridad 2026):

<details><summary>Recorte estudio</summary>

**Caminha (nº 75).** 16.000 habitantes en el concelho; plaza histórica (Torre do Relógio, iglesia matriz), desembocadura del Miño con el pinar y el fuerte de la Ínsua, ferry a A Guarda, Serra d'Arga detrás. Playas de Foz do Minho y Moledo a 5 min. Viento medio. Servicios 5/10. Hospital 30. Aeropuerto 60. Precio 1.900: 3 habitaciones franja A 222.000. Poca obra nueva. Para quién: quien quiera villa histórica en la boca del Miño con Galicia enfrente.

**Moledo (Caminha) (nº 76).** 1.500 habitantes; el veraneo tradicional de la burguesía de Porto: chalés entre pinos, playa larga con dunas y viento (kite, surf), el fuerte de la Ínsua y Santa Trega enfrente. Viento alto. Servicios 3/10; coche 7/10. Hospital 25. Aeropuerto 60. Precio 2.300 (el más caro de la zona): 2 habitaciones franja A 194.000; 3 habitaciones 269.000 (fuera). Sin obra nueva. Para quién: quien quiera pinar, playa y ambiente 

</details>

### 4.4 Auditoría relato ↔ capa

Estados permitidos: `ALINEADO` · `OBSOLETO` · `DUPLICA_CAPA` · `P4_PRESERVAR` · `SOPORTADO_PERO_INFRAUSADO` · `NO_SOPORTADO_NO_INVENTAR` · `REQUIERE_VERIFICACION_EXTERNA` · `COMUN_PORTUGAL`

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | Chip X/10 repetido en abrir/casa/encaja | `servicios` **5**; Tiene: villa histórica. Falta: hospital en el municipio | DUPLICA_CAPA | Omitir chip; narrar autonomía cualitativa |
| Precio €/m² | Auditoría/estudio ~1900; prosa puede citar cifras o remitir + «000 euros» | `precioM2` **2082** | OBSOLETO | Capa prevalece; omitir cifras; TablaPrecios |
| Prosa rota «000 euros» | Tras remitir a capa queda fragmento «000 euros» (+ totales sueltos a veces) | Cifras viven en `precioM2` / A/B / TablaPrecios | OBSOLETO | Borrar resto roto; no reponer €/m² históricos en prosa |
| Microzona núcleo ≠ Moledo/Âncora | Habla villa/desembocadura; riesgo absorber vecinos | `advertenciaMicrozona`: Caminha villa, Moledo y Vila Praia de Âncora son experiencias distintas aunque compartan concelho. | SOPORTADO_PERO_INFRAUSADO | Explicitar: Caminha villa ≠ Moledo ≠ Âncora |
| Mar / estuario | Foz do Minho / ferry A Guarda; playas a 5′ | **PARCIAL** — La villa vive estuario/río; la gran experiencia de playa está en Moledo/Âncora … | ALINEADO | Estuario/Coura ≠ mar abierto; ferry solo si soporte |
| Hospital | Santa Luzia ~30′ | `hospitalMin` **30** — Hospital de Santa Luzia, Viana do Castelo | ALINEADO / DUPLICA_CAPA | Una vez |
| Aeropuerto / Palma | Minutos aero + «Palma en verano» (tono permanente posible) | `aeropuertoMin` 60; `aeropuertoPractico2026`=Porto; `palmaDirecta2026` matiza | DUPLICA_CAPA / ALINEADO (matiz temporada) | Consecuencia una vez; no martillar minutos+Palma; no inventar permanente absoluto |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos tiempo→encaja (y a menudo abrir) | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| COMUN_PORTUGAL (fiscal / seguro / tarjeta / Cunqueiro) | Bloques repetidos: régimen fiscal cerrado 2024; seguro privado; tarjeta europea/española; SNS lento | Hecho nacional — no capa municipal | COMUN_PORTUGAL | Extraer a doc común; conservar solo consecuencia local; **no corregir** aquí |

### 4.5 P4 / identidad

- **Preservar:** plaza/Torre do Relógio, Foz do Minho, Ínsua, ferry A Guarda, Serra d'Arga detrás.
- **Identidad:** villa de desembocadura; **≠** Moledo/Âncora.
- **Peaje:** servicios 5; mar frío; hospital Viana.

### 4.6 Vida cotidiana soportada

| Elemento | Clasificación | Base repo |
|---|---|---|
| Autonomía | YA SOPORTADO | `MEDIA-FUERTE` |
| Coche | YA SOPORTADO | `Baja-media en villa; coche/tren para playa y hospital.` |
| Servicios cotidianos | YA SOPORTADO | servicios `5` — Tiene: villa histórica. Falta: hospital en el municipio |
| Paseo | YA SOPORTADO | Frente del estuario, casco y ribera. |
| Pendiente | N/A / null | `null` |
| Microzona | YA SOPORTADO / INFRAUSADO | adv: Caminha villa, Moledo y Vila Praia de Âncora son experiencias distint… / microPrecio: — |
| Compra enero / estacionalidad | YA SOPORTADO en relato+capa | Vida anual con aumento turístico fuerte en verano. |
| Transporte relevante | YA SOPORTADO | Linha do Minho. |
| Nombres café / horarios exactos | NO SOPORTADO | — |
| Totales A/B en prosa | NO SOPORTADO (viven en tabla) | A_3hab `243594` / B_3hab `196749` |
| Burocracia nacional (fiscal/NIF/CRUE) | COMUN_PORTUGAL | No repetir 11×; ver §13 |

### 4.7 Reality toll

- Autonomía **MEDIA-FUERTE**; advertencia microzona
- Playa **PARCIAL** (PARCIAL)
- Hospital ~**30′**; Porto ~**60′**
- Precio **2082**
- Estuario ≠ Moledo/Âncora

### 4.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | Auditoría ~1900 (histórico prosa/estudio) | **2082** | OBSOLETO — capa prevalece |
| A_3hab / B_3hab | No narrar totales | `243594` / `196749` | TablaPrecios |
| casaQueBuscar / reventa | Cualitativo | Ver tabla capa | `casaQueBuscar` truncado `…` → **DESEABLE** texto completo (no bloquea v1); `mercadoReventa` truncado `…` → **DESEABLE** texto completo (no bloquea v1) |
| «000 euros» | Presente tras remitir a capa (varios) | — | Borrar resto roto |
| Microzona precio | No absorber Moledo/Âncora | advertencia capa | Separar mercados |

### 4.9 Clima: deuda / duplicación (NO correct)

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en `tiempo` + `encaja` (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `caminha` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_32.**

### 4.10 Mar / río / playa / paseo

- **playaCotidiana:** `PARCIAL`
- **Modo:** La villa vive estuario/río; la gran experiencia de playa está en Moledo/Âncora y suele implicar salida.
- **paseoCotidiano:** Frente del estuario, casco y ribera.
- **pendiente:** `null`
- Estuario Miño/Coura ≠ océano abierto; Foz vs playas vecinas.
- No contradecir la etiqueta de playa de la capa.

### 4.11 Frontera / España

- **Hecho:** ferry a A Guarda; desembocadura compartida.
- **Cotidiano:** ferry como apoyo si opera (sin horarios inventados).
- **No:** absorber identidad Moledo/Âncora.

### 4.12 COMUN_PORTUGAL (local excerpts — NO correct)

- **fiscal cerrado 2024** → COMUN_PORTUGAL: …. Conviene mirar el calendario real. El régimen fiscal especial para residentes extranjeros se cerró en 2024.",  "…
- **seguro privado portugués** → COMUN_PORTUGAL: …nos treinta minutos. Hay que contar con seguro privado portugués —Trofa Saúde, Braga, alrededor de sesenta minutos—. No ha…
- **Trofa Saúde** → COMUN_PORTUGAL: …ue contar con seguro privado portugués —Trofa Saúde, Braga, alrededor de sesenta minutos—. No hay hospita…
- **SNS / público más lento** → COMUN_PORTUGAL: … española de diario: se asume Portugal, público más lento y privado de referencia lejos.",  "Porto–Sá Carneiro anda a…

**Tratamiento:** marcar, no corregir; extraer a §13; conservar solo consecuencia local (minutos hospital/aero/coche).

### 4.13 No soportado / no inventar

- ~1900 vigente
- Igualar Caminha = Moledo = Âncora
- Horarios ferry inventados
- Chip 5/10
- Palma permanente

---

## 5. Moledo (Caminha)

### 5.1 Relato actual completo

> CITA LITERAL — `web/src/lib/relatos-alto-minho.ts` clave `moledo-caminha` (objeto completo).

```ts
moledo-caminha: {
 escala: "Pinar y playa elegante",
 abrir: [
 "Moledo se siente, entre pinos y dunas, como el veraneo que Porto inventó para sí mismo. Unos mil quinientos habitantes: chalés entre pinos, playa larga con dunas y viento —kite, surf—, Forte da Ínsua delante y Monte Santa Trega —el monte redondo de A Guarda— al otro lado del Miño. Es freguesia de Caminha, no villa con comercio completo. La orilla abre el día; el súper, no.",
 "Quien vive aquí es veraneo tradicional, vecinos de temporada larga y quien busca Atlántico a dos minutos con ambiente cuidado. Un martes de noviembre la calma entre chalés es real: servicios 3/10, coche 7/10. El Hospital de Santa Luzia —Viana— queda a unos veinticinco minutos. El aeropuerto de Porto anda alrededor de los sesenta —Palma en verano—. Para la playa no hace falta volante; para casi todo lo demás, sí. Caminha o Âncora cubren la compra diaria.",
 "En verano la nortada de tarde —junio a agosto— marca las terrazas: viento norte fuerte que apaga la conversación al aire libre y llena la orilla de velas y tablas. Kite y surf no son foto típica; son oficio de la tarde. Sin obra nueva; fibra sí. El tráfico de acceso se nota en agosto; el resto del año es colonia entre pinos. Quien busque silencio de enero lo encontrará; quien busque terraza sin viento en julio, no.",
 "Primavera y otoño son buenas épocas para conocerlo: dunas sin saturación, pinar, Ínsua enfrente. Si solo conoces un sábado de sol entre pinos, te llevas la imagen de folleto. Si has visto un julio con nortada y un martes vacío de noviembre, ya puedes decidir si de verdad quieres vivir aquí. Moledo es la orilla más escénica de la zona y también la más cara.",
 "No promete mercado a pie ni tres habitaciones baratas junto al mar. Promete pinar, dunas e Ínsua a cambio de viento, precio alto y servicios mínimos. Quien acepte ese trato entenderá el sitio a la primera tarde de nortada.",
 ],
 tiempo: [
 "Si vienes de Baleares, el cielo limpia y el viento corrige. Moledo suma unas 2.500 horas de sol y unos 78 a 80 días despejados —junto con el Litoral Norte, el mejor cielo de la tabla—, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.450 milímetros en unos 112 a 115 días. El viento es alto: la nortada de tarde de junio a agosto no es detalle fino; es el clima de la terraza.",
 "El verano en la costa ronda 20,5 °C, con tres a seis días sobre 30 °C: fresco frente al calor balear. El agua anda entre 16 y 18 °C en agosto —la más fría de la tabla—. La orilla es abierta, con dunas y oleaje. Julio y agosto llueven poco; el invierno moja. Conviene venir un día de nortada y un noviembre entre pinos, no solo un sábado de sol.",
 ],
 vivir: [
 "El invierno en Moledo es silencio entre pinos y humedad de duna: la terraza se usa menos; salitre y nortada residual piden calefacción y ventanas serias. Un martes vacío de noviembre entre chalés enseña más que un sábado de sol. La colonia elegante enfría por dentro si la casa no está preparada.",
 "Sin coche, solo la playa está a dos minutos; para casi todo lo demás el vehículo es obligatorio —servicios 3/10, coche 7/10—. Caminha o Âncora cubren la compra diaria. En enero la calma entre chalés es real; no hay mercado a pie ni lonja de diario. Quien se quede a vivir aquí acepta la orilla como centro y el coche como llave del resto.",
 "Quien vive aquí es veraneo tradicional de Porto, vecinos de temporada larga y quien busca Atlántico cuidado. El portugués manda; Galicia —Santa Trega— se ve al otro lado del Miño. En verano kite, surf y nortada de tarde marcan la orilla; la integración de año entero es más de colonia residencial que de villa con plaza. Quien busque solo agosto encontrará viento; quien busque vecinos en enero, también —en otra escala—.",
 "El Hospital de Santa Luzia —Viana— queda a unos veinticinco minutos. Hay que contar con seguro privado portugués —Trofa Saúde, Braga, alrededor de sesenta minutos—. No hay sanidad a pie ni pública española de diario: se asume Portugal y el trayecto a Viana o Braga.",
 "Porto–Sá Carneiro anda alrededor de los sesenta minutos —Palma en verano—. Ir y volver a Mallorca depende del verano vía Porto y de la logística de colonia sin comercio. El régimen fiscal especial para residentes extranjeros se cerró en 2024.",
 "Predominan chalés entre pinos; no hay obra nueva y hay fibra. El modelo es casa de colonia, no piso de villa compacta. En primera línea hay que contar con nortada, salitre y precio —el más caro de la zona—. Tres habitaciones suelen quedar fuera de la orilla asequible; conviene retirarse del frente más ventoso y probar una tarde de julio con viento.",
 ],
 historia: [
 "Los chalés entre pinos y el veraneo de Porto explican Moledo: colonia elegante de costa, no casco medieval. Aquí lo que conviene saber es de ocio burgués plantado sobre dunas, de casas que miran el Atlántico y de un oficio de playa —kite, surf— que llegó después y se quedó. El Forte da Ínsua —isla fortificada en la desembocadura— y Santa Trega enfrente marcan la foto típica de boca del Miño: Portugal y Galicia en el mismo horizonte.",
 "No hay torre de villa ni lonja de diario. Hay pinar, dunas y una orilla que Porto eligió cuando buscaba verano con estilo. Quien camine la playa un martes de enero entenderá el silencio; quien la vea en agosto con nortada entenderá el precio del paisaje.",
 ],
 fuera: [
 "La playa de Moledo —arenal largo, dunas, oleaje, nortada de tarde en verano— es la tarde de diario, a dos minutos. El pinar abriga los chalés; las dunas abrigan la mirada. El Forte da Ínsua queda enfrente, en la boca del río: fuerte del siglo XVII sobre islote, foto típica de desembocadura.",
 "Caminha anda a pocos minutos: plaza, torre, refuerzo de villa. Âncora y Viana, a trayecto corto hacia el sur. Santa Trega —castro y mirador de A Guarda— se ve al otro lado del Miño cuando el cielo limpia.",
 "No hay mercado a pie ni paseo de ciudad. Hay océano abierto y, si se quiere baño más abrigado, el espigón de Âncora a un trayecto corto. Quien viva aquí acepta la orilla como centro y el coche como llave del resto.",
 ],
 casa: [
 "Predominan chalés entre pinos; no hay obra nueva y hay fibra. El modelo es casa de colonia, no piso de villa compacta. En primera línea hay que contar con nortada, salitre y precio —el más caro de la zona—. Conviene retirarse del frente más ventoso y probar una tarde de julio con viento.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros —fuera de la orilla asequible habitual de la zona—. Quien necesite tres habitaciones baratas junto al mar deberá mirar otra opción.",
 "Los servicios son 3/10. Santa Luzia —Viana— queda a unos veinticinco minutos. Porto–Sá Carneiro está a unos sesenta. Hay que contar con seguro privado portugués. Conviene comprobar Caminha o Âncora para la compra diaria y firmar solo tras nortada y noviembre.",
 ],
 encaja: {
 si: [
 "Encaja si pinar, dunas y playa larga deben abrir el día, no reservarse al fin de semana. Moledo es el veraneo elegante de Porto entre pinos: orilla abierta, Forte da Ínsua delante, Santa Trega al otro lado del Miño. Un martes de noviembre la calma entre chalés es real; en verano kite y surf llenan la arena. Quien priorice Atlántico a dos minutos, ambiente cuidado y sol de costa —unas 2.500 horas— frente a villa con comercio completo encontrará aquí la foto típica más cara de la zona. El verano costero ronda 20,5 °C frente al calor sostenido de Mallorca; el agua, entre 16 y 18 °C, es la más fría de la tabla.",
 "También encaja para quien acepte coche para casi todo y valore hospital a unos veinticinco minutos (Santa Luzia, Viana). Los servicios son 3/10: Caminha o Âncora cubren la compra diaria. Llueven alrededor de 1.450 milímetros en unos 112 días; el viento es alto —nortada de tarde de junio a agosto—. Hay que contar con seguro privado portugués: el privado de referencia en Braga anda alrededor de los sesenta minutos.",
 ],
 no: [
 "No encaja si se necesitan tres habitaciones en la franja asequible habitual junto a la orilla: esa tipología se sitúa hacia los 269.000 euros y queda fuera de la orilla asequible de la zona. Dos habitaciones en franja asequible rondan unos 194.000. Tampoco si la tarde de terraza sin viento es condición de junio a agosto: la nortada marca Moledo.",
 "Tampoco encaja si se buscan servicios a pie, obra nueva o el régimen fiscal especial para residentes extranjeros —cerrado en 2024—. Quien se decida solo tras un sábado de sol entre pinos, sin probar un julio con nortada ni un martes vacío de noviembre, se llevará una colonia distinta de la foto turística.",
 ],
 veredicto:
 "Veredicto: Moledo es pinar y playa elegante —dunas e Ínsua a cambio de viento, precio alto y servicios mínimos—. Buscaría dos habitaciones o chalé retirado de la primera línea más ventosa, tras probar nortada de tarde y un noviembre entre pinos. Se ganan Atlántico a dos minutos y el cielo más limpio de la zona; se aceptan, servicios 3/10, mar a 16–18 °C, aeropuerto a unos sesenta minutos y seguro privado portugués. Si mandan villa con mercado y espigón abrigado, Âncora; si hay que contar con granito, monte y Viana a quince, Afife-Carreço; si la prioridad es la orilla más escénica y se acepta el viento, Moledo.",
 },
 fotoIdentidad: {
 src: "/fotos/alto-minho/moledo-identidad.jpg",
 pie: "Moledo: casas junto al paseo y la playa, con el monte detrás",
 },
 fotosAbrir: [
 { src: "/fotos/alto-minho/moledo-playa.jpg", pie: "Playa de Moledo: dunas y Atlántico" },
 ],
 fotosHistoria: [
 { src: "/fotos/alto-minho/moledo-insua.jpg", pie: "Forte da Ínsua frente a Moledo" },
 ],
 fotosFuera: [],
 creditoFotos: credito,
 }
```

**Señales de auditoría (scan local, sin internet):**

- **X/10** (5 muestras):
  - …tre chalés es real: servicios 3/10, coche 7/10. El Hospital de S…
  - …s real: servicios 3/10, coche 7/10. El Hospital de Santa Luzia —…
  - …ulo es obligatorio —servicios 3/10, coche 7/10—. Caminha o Âncor…
  - …atorio —servicios 3/10, coche 7/10—. Caminha o Âncora cubren la …
  - …opción.",  "Los servicios son 3/10. Santa Luzia —Viana— queda a …
- **broken000** (2 muestras):
  - …una media municipal en prosa. 000 euros —fuera de la orilla asequible…
  - …ología se sitúa hacia los 269.000 euros y queda fuera de la orilla as…
- **precio_narr** (3 muestras):
  - … del mes; aquí no se fija una media municipal en prosa. 000 euros —fuera de…
  - …una media municipal en prosa. 000 euros —fuera de la orilla asequible…
  - …ipología se sitúa hacia los 269.000 euros y queda fuera de la orilla as…
- **clima** (5 muestras):
  - …rrige. Moledo suma unas 2.500 horas de sol y unos 78 a 80 días despejado…
  - …as de sol y unos 78 a 80 días despejados —junto con el Litoral Norte…
  - …oras y 120 jornadas claras de Mallorca. Caen alrededor de 1.450 milí…
  - …lma en verano—. Ir y volver a Mallorca depende del verano vía Porto …
  - … frente al calor sostenido de Mallorca; el agua, entre 16 y 18 °C, e…
- **hospital** (5 muestras):
  - …ervicios 3/10, coche 7/10. El Hospital de Santa Luzia —Viana— queda …
  - …0, coche 7/10. El Hospital de Santa Luzia —Viana— queda a unos veintici…
  - …bién —en otra escala—.",  "El Hospital de Santa Luzia —Viana— queda …
  - …a escala—.",  "El Hospital de Santa Luzia —Viana— queda a unos veintici…
  - …con seguro privado portugués —Trofa Saúde, Braga, alrededor de se…
- **Palma** (2 muestras):
  - …nda alrededor de los sesenta —Palma en verano—. Para la playa no …
  - …dedor de los sesenta minutos —Palma en verano—. Ir y volver a Mal…
- **fiscal** (3 muestras):
  - …a de colonia sin comercio. El régimen fiscal especial para residentes extr…
  - …ara residentes extranjeros se cerró en 2024.",  "Predominan chalés entre …
  - …vicios a pie, obra nueva o el régimen fiscal especial para residentes extr…
- **seguro** (4 muestras):
  - …o minutos. Hay que contar con seguro privado portugués —Trofa Saúde, Braga…
  - …s sesenta. Hay que contar con seguro privado portugués. Conviene comprobar…
  - …a agosto—. Hay que contar con seguro privado portugués: el privado de refe…
  - …erto a unos sesenta minutos y seguro privado portugués. Si mandan villa co…
- **frontera** (4 muestras):
  - …ta Trega —el monte redondo de A Guarda— al otro lado del Miño. Es fr…
  - … cuidado. El portugués manda; Galicia —Santa Trega— se ve al otro l…
  - … de boca del Miño: Portugal y Galicia en el mismo horizonte.",  "No…
  - …ta Trega —castro y mirador de A Guarda— se ve al otro lado del Miño …
- **metro_tren** (2 muestras):
  - …. Caen alrededor de 1.450 milímetros en unos 112 a 115 días. El v…
  - …lueven alrededor de 1.450 milímetros en unos 112 días; el viento …
- **sol** (2 muestras):
  - …nto corrige. Moledo suma unas 2.500 horas de sol y unos 78 a 80 días despejado…
  - ….500 horas de sol y unos 78 a 80 días despejados —junto con el Litoral Norte…

### 5.2 Capa 2026 completa

Fuente: `web/src/data/municipios-alto-minho.json` · slug `moledo-caminha`.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `161311` |
| `A_3hab` | `223353` |
| `B_2hab` | `130289` |
| `B_3hab` | `180401` |
| `advertenciaMicrozona` | Moledo es una microzona costera de Caminha: no trasladar a ella automáticamente servicios/precio de todo el concelho. |
| `aeropuertoMin` | `60` |
| `aeropuertoPractico2026` | Porto |
| `aeropuertos` | Vigo 78 km · 60 min (Palma: verano); Porto 83 km · 65 min (Palma: verano); Santiago 150 km · 110 min (Palma: casi todo el año) |
| `autonomiaCotidiana` | BAJA-MEDIA |
| `casaQueBuscar` | Acceso cómodo, aislamiento frente a exposición atlántica y distancia real a c... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Más favorable |
| `comunicaciones` | N-13 |
| `comunicacionesNota10` | `7` |
| `cubiertos` | `108` |
| `dependenciaCocheTexto` | Media-alta fuera de la rutina mínima; tren ayuda pero no sustituye todos los desplazamientos. |
| `despejados` | `80` |
| `estacionalidad2026` | Marcadamente residencial/turística, con mayor reducción de actividad fuera de verano. |
| `fibra` | Sí |
| `franja` | A |
| `hospitalMin` | `25` |
| `hospitalPractico2026` | Hospital de Santa Luzia, Viana do Castelo |
| `hospitalPriv` | 60 km · 60 min · Trofa Saúde (Braga) |
| `hospitalPub` | 25 km · 25 min · Santa Luzia (Viana) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 20 km · 25 min · Santa Luzia (Viana do Castelo); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `77` |
| `lat` | `41.84` |
| `lluviaDias` | `112` |
| `lluviaMm` | `1450` |
| `lon` | `-8.868` |
| `mapa` | 76_moledo.png |
| `mercadoReventa` | Mercado estrecho o de muestra limitada: la salida depende mucho del producto.... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `2` |
| `minCosta` | `2` |
| `municipio` | Moledo (Caminha) |
| `n` | `76` |
| `niebla` | Media |
| `obraNueva` | No |
| `pais` | Portugal |
| `palmaDirecta2026` | Porto: Palma observada en la operativa de 2026; rutas y frecuencias cambian por temporada, comprobar antes de viajar. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Santiago (casi todo el año) · 110 min |
| `paseoCotidiano` | Frente de playa y costa; exposición a viento/oleaje forma parte de la experiencia. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Playa atlántica a la puerta a cambio de menor autonomía, exposición oceánica y estacionalidad. |
| `playaBano` | Moledo |
| `playaCotidiana` | SÍ |
| `playaCotidianaModo` | Playa atlántica larga y expuesta directamente ligada a la localidad. |
| `precioM2` | `1909` |
| `provincia` | Viana do Castelo |
| `radioCotidiano` | Pequeña localidad residencial/turística; básicos limitados comparados con Caminha. |
| `radioSalida` | Caminha para más servicios, Viana para hospital; costa y monte próximos. |
| `sanidadPrimaria2026` | Atención primaria mediante red del concelho |
| `servicios` | `3` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | Tiene: veraneo elegante. Falta: comercio diario (Caminha / Âncora) |
| `slug` | moledo-caminha |
| `solHoras` | `2500` |
| `tempAgua` | 16-18 |
| `tempInvierno` | `10.0` |
| `tempVerano` | `20.5` |
| `transporteRelevante2026` | Estación de la Linha do Minho. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital de Santa Luzia, Viana do Castelo. |
| `viento` | Alta |
| `zona` | Alto Minho (PT) |

**Highlights capa (autoridad):** autonomia `BAJA-MEDIA` · playa `SÍ` · precioM2 `1909` · servicios `3` · hospitalMin `25` · aeroMin `60`.

### 5.3 Auditorías / plan existentes

**NO PLAN_EDITORIAL** específico Portugal (no hay `PLAN_EDITORIAL_PORTUGAL_*.md`).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n=76 → claves 73–83):

```
| 76 | Moledo (Caminha) | Alto Minho (PT) | precio relato ~2300 vs ficha 1909 | — | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 76 | Moledo (Caminha) | Alto Minho (PT) | no | — |
```

**estudio_zonas.md** (histórico — **NO** autoridad 2026):

<details><summary>Recorte estudio</summary>

**Moledo (Caminha) (nº 76).** 1.500 habitantes; el veraneo tradicional de la burguesía de Porto: chalés entre pinos, playa larga con dunas y viento (kite, surf), el fuerte de la Ínsua y Santa Trega enfrente. Viento alto. Servicios 3/10; coche 7/10. Hospital 25. Aeropuerto 60. Precio 2.300 (el más caro de la zona): 2 habitaciones franja A 194.000; 3 habitaciones 269.000 (fuera). Sin obra nueva. Para quién: quien quiera pinar, playa y ambiente elegante y tranquilo, y no le moleste el viento de las tardes.

**Vila Praia de Âncora (Caminha) (nº 77).** 5.000 habitantes; villa marinera con puerto, fortaleza de Lagarteira, playa con tramo abrigado por el espigón (la mejor para bañarse de la zona), Gelfa (pinar y dunas), mercado, tren (Viana 20 min, Porto 1 h 30), Serra d'Arga por el valle del Âncora. Viento medio. Servicios 6/10. Hospital 20. Aeropuerto 60. Precio 2.000: 3 habitaciones franja A

</details>

### 5.4 Auditoría relato ↔ capa

Estados permitidos: `ALINEADO` · `OBSOLETO` · `DUPLICA_CAPA` · `P4_PRESERVAR` · `SOPORTADO_PERO_INFRAUSADO` · `NO_SOPORTADO_NO_INVENTAR` · `REQUIERE_VERIFICACION_EXTERNA` · `COMUN_PORTUGAL`

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | Chip X/10 repetido en abrir/casa/encaja | `servicios` **3**; Tiene: veraneo elegante. Falta: comercio diario (Caminha / Âncora) | DUPLICA_CAPA | Omitir chip; narrar autonomía cualitativa |
| Precio €/m² | Auditoría/estudio ~2300; prosa puede citar cifras o remitir + «000 euros» | `precioM2` **1909** | OBSOLETO | Capa prevalece; omitir cifras; TablaPrecios |
| Prosa rota «000 euros» | Tras remitir a capa queda fragmento «000 euros» (+ totales sueltos a veces) | Cifras viven en `precioM2` / A/B / TablaPrecios | OBSOLETO | Borrar resto roto; no reponer €/m² históricos en prosa |
| Ficha propia / autonomía | Colonia pinar; servicios 3; coche alto | **BAJA-MEDIA** (BAJA-MEDIA); playa **SÍ** | ALINEADO | No absorber servicios de Caminha villa; playa SÍ |
| Advertencia microzona | Riesgo trasladar precio/servicios del concelho | Moledo es una microzona costera de Caminha: no trasladar a ella automáticamente servicios/precio de… | SOPORTADO_PERO_INFRAUSADO | Preservar ficha propia Moledo |
| Hospital | Santa Luzia ~25′ | `hospitalMin` **25** | ALINEADO / DUPLICA_CAPA | Una vez |
| Aeropuerto / Palma | Minutos aero + «Palma en verano» (tono permanente posible) | `aeropuertoMin` 60; `aeropuertoPractico2026`=Porto; `palmaDirecta2026` matiza | DUPLICA_CAPA / ALINEADO (matiz temporada) | Consecuencia una vez; no martillar minutos+Palma; no inventar permanente absoluto |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos tiempo→encaja (y a menudo abrir) | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| COMUN_PORTUGAL (fiscal / seguro / tarjeta / Cunqueiro) | Bloques repetidos: régimen fiscal cerrado 2024; seguro privado; tarjeta europea/española; SNS lento | Hecho nacional — no capa municipal | COMUN_PORTUGAL | Extraer a doc común; conservar solo consecuencia local; **no corregir** aquí |
| P4 Ínsua / nortada / pinar | Dunas, Ínsua, nortada | capa + estudio | P4_PRESERVAR | Ínsua/Santa Tecla = paisaje/salida |

### 5.5 P4 / identidad

- **Preservar:** pinar, dunas, Ínsua, nortada, ficha propia.
- **Identidad:** colonia elegante / playa SÍ; autonomía BAJA-MEDIA.
- **Peaje:** servicios 3; coche; precio alto relativo histórico.

### 5.6 Vida cotidiana soportada

| Elemento | Clasificación | Base repo |
|---|---|---|
| Autonomía | YA SOPORTADO | `BAJA-MEDIA` |
| Coche | YA SOPORTADO | `Media-alta fuera de la rutina mínima; tren ayuda pero no sustituye todos los desplazamientos.` |
| Servicios cotidianos | YA SOPORTADO | servicios `3` — Tiene: veraneo elegante. Falta: comercio diario (Caminha / Âncora) |
| Paseo | YA SOPORTADO | Frente de playa y costa; exposición a viento/oleaje forma parte de la experiencia. |
| Pendiente | N/A / null | `null` |
| Microzona | YA SOPORTADO / INFRAUSADO | adv: Moledo es una microzona costera de Caminha: no trasladar a ella autom… / microPrecio: — |
| Compra enero / estacionalidad | YA SOPORTADO en relato+capa | Marcadamente residencial/turística, con mayor reducción de actividad fuera de v… |
| Transporte relevante | YA SOPORTADO | Estación de la Linha do Minho. |
| Nombres café / horarios exactos | NO SOPORTADO | — |
| Totales A/B en prosa | NO SOPORTADO (viven en tabla) | A_3hab `223353` / B_3hab `180401` |
| Burocracia nacional (fiscal/NIF/CRUE) | COMUN_PORTUGAL | No repetir 11×; ver §13 |

### 5.7 Reality toll

- Autonomía **BAJA-MEDIA** (BAJA-MEDIA)
- Playa **SÍ** (SÍ)
- Nortada / salitre; servicios **3**
- Hospital ~**25′**; aero ~**60′**
- Precio **1909**

### 5.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | Auditoría ~2300 (histórico prosa/estudio) | **1909** | OBSOLETO — capa prevalece |
| A_3hab / B_3hab | No narrar totales | `223353` / `180401` | TablaPrecios |
| casaQueBuscar / reventa | Cualitativo | Ver tabla capa | `casaQueBuscar` truncado `…` → **DESEABLE** texto completo (no bloquea v1); `mercadoReventa` truncado `…` → **DESEABLE** texto completo (no bloquea v1) |
| «000 euros» | Presente tras remitir a capa (varios) | — | Borrar resto roto |

### 5.9 Clima: deuda / duplicación (NO correct)

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en `tiempo` + `encaja` (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `moledo-caminha` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_32.**

### 5.10 Mar / río / playa / paseo

- **playaCotidiana:** `SÍ`
- **Modo:** Playa atlántica larga y expuesta directamente ligada a la localidad.
- **paseoCotidiano:** Frente de playa y costa; exposición a viento/oleaje forma parte de la experiencia.
- **pendiente:** `null`
- Playa SÍ a la puerta; exposición/nortada.
- No contradecir la etiqueta de playa de la capa.

### 5.11 Frontera / España

- **Hecho:** Ínsua / Santa Tecla paisaje frente a Galicia.
- **Cotidiano:** vista/salida; no aduana diaria tipo Valença.

### 5.12 COMUN_PORTUGAL (local excerpts — NO correct)

- **fiscal cerrado 2024** → COMUN_PORTUGAL: …a logística de colonia sin comercio. El régimen fiscal especial para residentes extranjeros se cerró en 2024.",  "…
- **seguro privado portugués** → COMUN_PORTUGAL: …veinticinco minutos. Hay que contar con seguro privado portugués —Trofa Saúde, Braga, alrededor de sesenta minutos—. No ha…
- **Trofa Saúde** → COMUN_PORTUGAL: …ue contar con seguro privado portugués —Trofa Saúde, Braga, alrededor de sesenta minutos—. No hay sanidad…

**Tratamiento:** marcar, no corregir; extraer a §13; conservar solo consecuencia local (minutos hospital/aero/coche).

### 5.13 No soportado / no inventar

- ~2300 vigente
- Autonomía de villa Caminha
- Chip 3/10 martilleado
- Calma de terraza sin nortada en julio
- Palma permanente

---

## 6. Vila Praia de Âncora

### 6.1 Relato actual completo

> CITA LITERAL — `web/src/lib/relatos-alto-minho.ts` clave `vila-praia-de-ancora` (objeto completo).

```ts
vila-praia-de-ancora: {
 escala: "Villa marinera abrigada",
 abrir: [
 "Vila Praia de Âncora se siente más villa de verdad que foto de verano. Unos cinco mil habitantes: puerto pesquero, fortaleza de Lagarteira —baluarte del siglo XVII junto a la orilla—, playa con tramo abrigado por el espigón —la mejor para bañarse con calma de la zona—, Gelfa —pinar y dunas hacia el sur—, mercado, tren —Viana en unos veinte minutos, Porto en hora y media— y Serra d'Arga por el valle del Âncora. Aquí el mar no es solo horizonte: es lonja, paseo y baño usable.",
 "Quien vive aquí es gente local, familias y veraneantes de Porto y Braga que vuelven en agosto. Un martes de noviembre se resuelve el día a día en villa: servicios 6/10, fibra, mesas y mercado sin depender de la temporada. El Hospital de Santa Luzia —Viana— queda a unos veinte minutos. El aeropuerto de Porto anda alrededor de los sesenta —Palma en verano—. Para farmacia, súper y café no hace falta coche si se elige el casco; para el hospital, sí.",
 "En verano Porto y Braga llenan la orilla: ruido, tráfico, afluencia unas semanas. El viento es medio —menos duro que en Moledo—. Hay poca obra nueva; fibra sí. El vida de villa se mantiene todo el año; agosto lo desborda, no lo inventa. Quien busque silencio absoluto de agosto junto al espigón se llevará una sorpresa; quien busque café de enero, no.",
 "El calendario marca el veraneo de interior portugués y el Camino de costa. Primavera y otoño son buenas épocas para conocerlo: Gelfa sin saturación, Arga por el valle, tren a Viana. Si solo conoces un día de espigón en calma, te llevas la imagen de folleto de la playa. Si has visto agosto y un martes gris, ya puedes decidir si de verdad quieres vivir aquí.",
 "Âncora no promete ciudad 9/10 ni aldea de silencio total. Promete villa marinera con playa abrigada, mercado y tren a cambio de afluencia de agosto y mar frío. Quien acepte ese trato entenderá el sitio al primer paseo de puerto.",
 ],
 tiempo: [
 "Si vienes de Baleares, el cielo de Âncora limpia casi como el mejor de la tabla. Suma unas 2.500 horas de sol y unos 78 a 80 días despejados, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.450 milímetros en unos 112 a 115 días. El viento es medio: la nortada se nota, sin el golpe de Moledo o Afife en primera línea.",
 "El verano en la costa ronda 20,5 °C, con tres a seis días sobre 30 °C: fresco frente al calor balear. El agua anda entre 16 y 18 °C; el espigón abriga el tramo mejor para bañarse con calma de la zona —oleaje menor, orilla usable—. Julio y agosto llueven poco; el invierno moja. Conviene probar agosto lleno y un martes gris, no solo un mediodía de espigón en calma.",
 ],
 vivir: [
 "El invierno en Âncora moja, pero la villa no se apaga: humedad de orilla, salitre y terraza que se usa menos de noviembre a febrero. Conviene calefacción y aislamiento en piso o casa de villa. Probar un martes gris evita firmar solo por un mediodía de espigón en calma.",
 "Sin coche, farmacia, súper y café se resuelven en el casco —servicios 6/10, fibra—; para el hospital hace falta vehículo. En enero hay mesas y mercado sin depender de la temporada. Quien viva junto al espigón notará más agosto; hacia el casco, vida cotidiana de villa marinera todo el año. El tren a Viana en unos veinte minutos ayuda.",
 "Conviven gente local, familias y veraneantes de Porto y Braga que vuelven en agosto. El portugués manda; el Camino de costa trae un flujo constante de peregrinos. En verano Porto y Braga llenan la orilla: ruido, tráfico, afluencia unas semanas. La integración pasa por lonja, mercado y villa abierta en enero, no por colonia de pinos.",
 "El Hospital de Santa Luzia —Viana— queda a unos veinte minutos. Hay que contar con seguro privado portugués —Trofa Saúde, Braga, alrededor de cincuenta y cinco minutos—. Sanidad diaria en villa; hospital y privado de referencia fuera. No hay tarjeta española de uso habitual.",
 "Porto–Sá Carneiro anda alrededor de los sesenta minutos —Palma en verano—. Ir y volver a Mallorca suele pasar por Porto en temporada; el tren facilita Viana y la capital del norte. El régimen fiscal especial para residentes extranjeros se cerró en 2024.",
 "El casco y el entorno del puerto ofrecen viviendas de villa; hay poca obra nueva y fibra. El modelo es piso o casa de villa, no chalé de colonia abierta. En primera línea hay que contar con ocupación de agosto y salitre. Imaginar agosto lleno y enero de mercado antes de comprar.",
 ],
 historia: [
 "El puerto, la fortaleza de Lagarteira y el mercado explican Âncora: villa marinera con vida propia, no solo colonia de toalla. Lagarteira —fuerte costero del XVII— recuerda que esta orilla también se vigilaba; hoy el puerto sigue siendo oficio y paseo. El tren a Viana y Porto marca la conexión: se baja a la estación y la ciudad o la capital del norte quedan a un trayecto sin convertir el día en expedición.",
 "Gelfa —pinar y dunas al sur— y el valle del Âncora hacia la Serra d'Arga completan la ficha de orilla y monte. El Camino Portugués de la Costa pasa cerca. Lo que conviene saber es de villa abrigada: puerto, fuerte, mercado y espigón, no lista seca de monumentos.",
 ],
 fuera: [
 "El puerto, la playa del espigón —tramo abrigado, el baño más calmado del Alto Minho costero— y el paseo son la tarde de diario. Se entra al agua sin pelear tanto con el Atlántico abierto; el frío, eso sí, permanece: 16 a 18 °C en agosto.",
 "Gelfa cubre pinar y dunas: paseo de arena y sombra cuando el frente del espigón se llena. Arga se sube por el valle del Âncora —aldeas de piedra, rutas, caballos— cuando apetezca monte detrás del mar. Viana queda a unos veinte minutos en tren o coche: hospital, comercio, cultura.",
 "Moledo anda cerca hacia el norte si se quiere orilla más abierta y ventosa. Quien viva aquí tiene baño usable a dos minutos y ciudad completa a veinte; el silencio de agosto, no.",
 ],
 casa: [
 "El casco y el entorno del puerto ofrecen viviendas de villa; hay poca obra nueva y fibra. El modelo es piso o casa de villa, no chalé de colonia abierta. En primera línea hay que contar con ocupación de agosto y salitre; conviene algo retirado del frente más lleno y probar un día de afluencia.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros. Quien busque equilibrio de costa —servicios y playa— encontrará aquí más coherencia que en Moledo; quien busque precio de interior, no.",
 "Los servicios son 6/10. Santa Luzia —Viana— queda a unos veinte minutos. Porto–Sá Carneiro está a unos sesenta. Hay que contar con seguro privado portugués —Trofa Saúde, Braga, alrededor de cincuenta y cinco minutos—. Conviene firmar tras un martes de noviembre y un agosto en la orilla.",
 ],
 encaja: {
 si: [
 "Encaja si se quiere villa marinera con vida todo el año —puerto, mercado, tren— y la mejor playa abrigada de la zona a dos minutos. Vila Praia de Âncora resuelve el martes de noviembre a pie: servicios 6/10, fibra, mesas y lonja sin depender de agosto. El espigón abriga el tramo de baño más calmado del Alto Minho costero; Gelfa añade pinar y dunas; la Serra d'Arga se sube por el valle del Âncora. Viana queda a unos veinte minutos en tren o coche. Quien priorice orilla usable, escala de villa y sol de costa —unas 2.500 horas— frente a aldea 3/10 encontrará aquí el equilibrio más completo de la costa minhota.",
 "También encaja para quien acepte mar frío y verano fresco frente a Mallorca. Las máximas costeras rondan 20,5 °C, con pocos días sobre 30 °C; el agua anda entre 16 y 18 °C aunque el espigón quite oleaje. Llueven alrededor de 1.450 milímetros en unos 112 días. Santa Luzia queda a unos veinte minutos; conviene seguro privado portugués —Trofa Saúde, Braga, alrededor de cincuenta y cinco minutos—.",
 ],
 no: [
 "No encaja si el silencio de agosto es condición esencial. Porto y Braga llenan la orilla: ruido, tráfico y afluencia unas semanas. Tampoco si se necesita agua templada o tres habitaciones muy por debajo de la franja asequible de orilla —alrededor de 234.000 euros—.",
 "Tampoco encaja si se busca el régimen fiscal especial para residentes extranjeros —cerrado en 2024— o aeropuerto a menos de una hora: Porto queda a unos sesenta minutos. Quien se decida solo tras un día de espigón en calma, sin probar agosto ni un martes gris, se llevará una villa distinta.",
 ],
 veredicto:
 "Veredicto: Vila Praia de Âncora es la villa marinera abrigada del Alto Minho —puerto, mercado y espigón a cambio de veraneo de agosto y mar frío—. Buscaría tres habitaciones hacia el casco o algo retiradas del frente más ocupado, tras probar un martes de noviembre y un día de afluencia en la orilla. Se ganan playa abrigada, servicios 6/10, tren y hospital a unos veinte minutos; se aceptan, agua a 16–18 °C y seguro privado portugués. Si mandan granito, monte y silencio de aldea, Afife-Carreço; si hay que contar con ciudad completa, Viana; si la prioridad es vivir junto al mar con recados a pie, Âncora es la opción más coherente de la costa.",
 },
 fotosAbrir: [
 { src: "/fotos/alto-minho/ancora-playa.jpg", pie: "Playa abrigada de Vila Praia de Âncora" },
 ],
 fotosHistoria: [
 { src: "/fotos/alto-minho/ancora-lagarteira.jpg", pie: "Fortaleza de Lagarteira, Âncora" },
 ],
 fotosFuera: [],
 creditoFotos: credito,
 }
```

**Señales de auditoría (scan local, sin internet):**

- **X/10** (5 muestras):
  - …día a día en villa: servicios 6/10, fibra, mesas y mercado sin d…
  - …",  "Âncora no promete ciudad 9/10 ni aldea de silencio total. P…
  - …uelven en el casco —servicios 6/10, fibra—; para el hospital hac…
  - …or, no.",  "Los servicios son 6/10. Santa Luzia —Viana— queda a …
  - …de noviembre a pie: servicios 6/10, fibra, mesas y lonja sin dep…
- **broken000** (2 muestras):
  - …una media municipal en prosa. 000 euros. Quien busque equilibrio de c…
  - …e de orilla —alrededor de 234.000 euros—.",  "Tampoco encaja si se bu…
- **precio_narr** (3 muestras):
  - … del mes; aquí no se fija una media municipal en prosa. 000 euros. Quien bu…
  - …una media municipal en prosa. 000 euros. Quien busque equilibrio de c…
  - …ble de orilla —alrededor de 234.000 euros—.",  "Tampoco encaja si se bu…
- **clima** (5 muestras):
  - … de la tabla. Suma unas 2.500 horas de sol y unos 78 a 80 días despejado…
  - …as de sol y unos 78 a 80 días despejados, frente a las 2.800 horas y…
  - …oras y 120 jornadas claras de Mallorca. Caen alrededor de 1.450 milí…
  - …lma en verano—. Ir y volver a Mallorca suele pasar por Porto en temp…
  - …frío y verano fresco frente a Mallorca. Las máximas costeras rondan …
- **hospital** (5 muestras):
  - … depender de la temporada. El Hospital de Santa Luzia —Viana— queda …
  - … la temporada. El Hospital de Santa Luzia —Viana— queda a unos veinte m…
  - …si se elige el casco; para el hospital, sí.",  "En verano Porto y Br…
  - …rvicios 6/10, fibra—; para el hospital hace falta vehículo. En enero…
  - … por colonia de pinos.",  "El Hospital de Santa Luzia —Viana— queda …
- **Palma** (2 muestras):
  - …nda alrededor de los sesenta —Palma en verano—. Para farmacia, sú…
  - …dedor de los sesenta minutos —Palma en verano—. Ir y volver a Mal…
- **fiscal** (3 muestras):
  - …na y la capital del norte. El régimen fiscal especial para residentes extr…
  - …ara residentes extranjeros se cerró en 2024.",  "El casco y el entorno de…
  - …Tampoco encaja si se busca el régimen fiscal especial para residentes extr…
- **seguro** (5 muestras):
  - …e minutos. Hay que contar con seguro privado portugués —Trofa Saúde, Braga…
  - …o de referencia fuera. No hay tarjeta española de uso habitual.",  "Porto–Sá…
  - …s sesenta. Hay que contar con seguro privado portugués —Trofa Saúde, Braga…
  - …unos veinte minutos; conviene seguro privado portugués —Trofa Saúde, Braga…
  - …se aceptan, agua a 16–18 °C y seguro privado portugués. Si mandan granito,…
- **metro_tren** (2 muestras):
  - …. Caen alrededor de 1.450 milímetros en unos 112 a 115 días. El v…
  - …lueven alrededor de 1.450 milímetros en unos 112 días. Santa Luzi…
- **sol** (2 muestras):
  - … mejor de la tabla. Suma unas 2.500 horas de sol y unos 78 a 80 días despejado…
  - ….500 horas de sol y unos 78 a 80 días despejados, frente a las 2.800 horas y…

### 6.2 Capa 2026 completa

Fuente: `web/src/data/municipios-alto-minho.json` · slug `vila-praia-de-ancora`.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `227474` |
| `A_3hab` | `314964` |
| `B_2hab` | `183729` |
| `B_3hab` | `254394` |
| `advertenciaMicrozona` | `null` *(n.d. / ausente)* |
| `aeropuertoMin` | `60` |
| `aeropuertoPractico2026` | Porto |
| `aeropuertos` | Porto 79 km · 60 min (Palma: verano); Vigo 85 km · 65 min (Palma: verano); Santiago 154 km · 115 min (Palma: casi todo el año) |
| `autonomiaCotidiana` | MEDIA-FUERTE |
| `casaQueBuscar` | Accesibilidad, exterior/terraza y distancia realmente caminable a núcleo y pa... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Más favorable |
| `comunicaciones` | N-13; tren Viana–Porto |
| `comunicacionesNota10` | `8` |
| `cubiertos` | `108` |
| `dependenciaCocheTexto` | Media; tren ayuda para Caminha/Viana, coche para necesidades dispersas. |
| `despejados` | `80` |
| `estacionalidad2026` | Vida local anual con fuerte capa estival. |
| `fibra` | Sí |
| `franja` | A |
| `hospitalMin` | `20` |
| `hospitalPractico2026` | Hospital de Santa Luzia, Viana do Castelo |
| `hospitalPriv` | 55 km · 55 min · Trofa Saúde (Braga) |
| `hospitalPub` | 20 km · 20 min · Santa Luzia (Viana) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 16 km · 20 min · Santa Luzia (Viana do Castelo); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `77` |
| `lat` | `41.813` |
| `lluviaDias` | `112` |
| `lluviaMm` | `1450` |
| `lon` | `-8.861` |
| `mapa` | 77_vila_praia_de_ancora.png |
| `mercadoReventa` | Mercado intermedio con componente turístico/segunda residencia. La liquidez d... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `2` |
| `minCosta` | `2` |
| `municipio` | Vila Praia de Âncora (Caminha) |
| `n` | `77` |
| `niebla` | Media |
| `obraNueva` | Poca |
| `pais` | Portugal |
| `palmaDirecta2026` | Porto: Palma observada en la operativa de 2026; rutas y frecuencias cambian por temporada, comprobar antes de viajar. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Santiago (casi todo el año) · 115 min |
| `paseoCotidiano` | Marginal, puerto y playa; recorrido llano en la franja litoral. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Buen equilibrio entre playa y núcleo, pero mercado pequeño/estacional y hospital en Viana. |
| `playaBano` | Vila Praia de Âncora |
| `playaCotidiana` | SÍ |
| `playaCotidianaModo` | Gran playa atlántica y frente marítimo integrados en el núcleo. |
| `precioM2` | `2692` |
| `provincia` | Viana do Castelo |
| `radioCotidiano` | Núcleo costero con comercio básico, restauración, puerto y servicios suficientes para una rutina más autónoma que Moledo. |
| `radioSalida` | Caminha y Viana para servicios superiores; costa norte/sur. |
| `sanidadPrimaria2026` | Atención primaria en la red local/concelhia |
| `servicios` | `6` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | Tiene: villa con vida todo el año, mercado, tren. Falta: hospital en el municipio |
| `slug` | vila-praia-de-ancora |
| `solHoras` | `2500` |
| `tempAgua` | 16-18 |
| `tempInvierno` | `10.0` |
| `tempVerano` | `20.5` |
| `transporteRelevante2026` | Estación de la Linha do Minho. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital de Santa Luzia, Viana do Castelo. |
| `viento` | Media |
| `zona` | Alto Minho (PT) |

**Highlights capa (autoridad):** autonomia `MEDIA-FUERTE` · playa `SÍ` · precioM2 `2692` · servicios `6` · hospitalMin `20` · aeroMin `60`.

### 6.3 Auditorías / plan existentes

**NO PLAN_EDITORIAL** específico Portugal (no hay `PLAN_EDITORIAL_PORTUGAL_*.md`).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n=77 → claves 73–83):

```
| 77 | Vila Praia de Âncora (Caminha) | Alto Minho (PT) | precio relato ~2000 vs ficha 2692 | usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 77 | Vila Praia de Âncora (Caminha) | Alto Minho (PT) | no | — |
```

**estudio_zonas.md** (histórico — **NO** autoridad 2026):

<details><summary>Recorte estudio</summary>

**Vila Praia de Âncora (Caminha) (nº 77).** 5.000 habitantes; villa marinera con puerto, fortaleza de Lagarteira, playa con tramo abrigado por el espigón (la mejor para bañarse de la zona), Gelfa (pinar y dunas), mercado, tren (Viana 20 min, Porto 1 h 30), Serra d'Arga por el valle del Âncora. Viento medio. Servicios 6/10. Hospital 20. Aeropuerto 60. Precio 2.000: 3 habitaciones franja A 234.000. Poca obra nueva; fibra sí. Para quién: quien quiera villa con vida todo el año, servicios a pie y playa abrigada, a 20 min de Viana.

**Afife-Carreço (Viana) (nº 78).** Afife (1.500 hab.) y Carreço (1.800), con Areosa a continuación, son las freguesias del norte de Viana: aldeas de granito entre la Serra d'Arga y el mar, viñas en pérgola, huertas, molinos y faro de Montedor, playas de Afife (surf) y Paçô a 3 min, apeaderos de tren. Viento alto en la playa, bajo en la aldea (protegida por la lade

</details>

### 6.4 Auditoría relato ↔ capa

Estados permitidos: `ALINEADO` · `OBSOLETO` · `DUPLICA_CAPA` · `P4_PRESERVAR` · `SOPORTADO_PERO_INFRAUSADO` · `NO_SOPORTADO_NO_INVENTAR` · `REQUIERE_VERIFICACION_EXTERNA` · `COMUN_PORTUGAL`

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | Chip X/10 repetido en abrir/casa/encaja | `servicios` **6**; Tiene: villa con vida todo el año, mercado, tren. Falta: hospital en … | DUPLICA_CAPA | Omitir chip; narrar autonomía cualitativa |
| Precio €/m² | Auditoría/estudio ~2000; prosa puede citar cifras o remitir + «000 euros» | `precioM2` **2692** | OBSOLETO | Capa prevalece; omitir cifras; TablaPrecios |
| Prosa rota «000 euros» | Tras remitir a capa queda fragmento «000 euros» (+ totales sueltos a veces) | Cifras viven en `precioM2` / A/B / TablaPrecios | OBSOLETO | Borrar resto roto; no reponer €/m² históricos en prosa |
| Villa propia / playa abrigada | Espigón, puerto, mercado, tren | playa **SÍ**; autonomía **MEDIA-FUERTE** | ALINEADO | No absorber P4 Moledo/Afife |
| Hospital | Santa Luzia ~20′ | `hospitalMin` **20** | ALINEADO / DUPLICA_CAPA | Una vez |
| Aeropuerto / Palma | Minutos aero + «Palma en verano» (tono permanente posible) | `aeropuertoMin` 60; `aeropuertoPractico2026`=Porto; `palmaDirecta2026` matiza | DUPLICA_CAPA / ALINEADO (matiz temporada) | Consecuencia una vez; no martillar minutos+Palma; no inventar permanente absoluto |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos tiempo→encaja (y a menudo abrir) | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| COMUN_PORTUGAL (fiscal / seguro / tarjeta / Cunqueiro) | Bloques repetidos: régimen fiscal cerrado 2024; seguro privado; tarjeta europea/española; SNS lento | Hecho nacional — no capa municipal | COMUN_PORTUGAL | Extraer a doc común; conservar solo consecuencia local; **no corregir** aquí |

### 6.5 P4 / identidad

- **Preservar:** puerto, Lagarteira, espigón abrigado, mercado, tren, Gelfa, valle Âncora→Arga.
- **Identidad:** villa marinera abrigada del Alto Minho.
- **Peaje:** agosto lleno; mar frío.

### 6.6 Vida cotidiana soportada

| Elemento | Clasificación | Base repo |
|---|---|---|
| Autonomía | YA SOPORTADO | `MEDIA-FUERTE` |
| Coche | YA SOPORTADO | `Media; tren ayuda para Caminha/Viana, coche para necesidades dispersas.` |
| Servicios cotidianos | YA SOPORTADO | servicios `6` — Tiene: villa con vida todo el año, mercado, tren. Falta: hospital en el municipio |
| Paseo | YA SOPORTADO | Marginal, puerto y playa; recorrido llano en la franja litoral. |
| Pendiente | N/A / null | `null` |
| Microzona | Poco o nada en capa | adv: — / microPrecio: — |
| Compra enero / estacionalidad | YA SOPORTADO en relato+capa | Vida local anual con fuerte capa estival. |
| Transporte relevante | YA SOPORTADO | Estación de la Linha do Minho. |
| Nombres café / horarios exactos | NO SOPORTADO | — |
| Totales A/B en prosa | NO SOPORTADO (viven en tabla) | A_3hab `314964` / B_3hab `254394` |
| Burocracia nacional (fiscal/NIF/CRUE) | COMUN_PORTUGAL | No repetir 11×; ver §13 |

### 6.7 Reality toll

- Autonomía **MEDIA-FUERTE**
- Playa **SÍ** abrigada
- Hospital ~**20′**; aero ~**60′**
- Precio **2692** (alto)
- Agosto veraneo interior

### 6.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | Auditoría ~2000 (histórico prosa/estudio) | **2692** | OBSOLETO — capa prevalece |
| A_3hab / B_3hab | No narrar totales | `314964` / `254394` | TablaPrecios |
| casaQueBuscar / reventa | Cualitativo | Ver tabla capa | `casaQueBuscar` truncado `…` → **DESEABLE** texto completo (no bloquea v1); `mercadoReventa` truncado `…` → **DESEABLE** texto completo (no bloquea v1) |
| «000 euros» | Presente tras remitir a capa (varios) | — | Borrar resto roto |

### 6.9 Clima: deuda / duplicación (NO correct)

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en `tiempo` + `encaja` (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `vila-praia-de-ancora` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_32.**

### 6.10 Mar / río / playa / paseo

- **playaCotidiana:** `SÍ`
- **Modo:** Gran playa atlántica y frente marítimo integrados en el núcleo.
- **paseoCotidiano:** Marginal, puerto y playa; recorrido llano en la franja litoral.
- **pendiente:** `null`
- Espigón abriga baño; Gelfa = ampliación.
- No contradecir la etiqueta de playa de la capa.

### 6.11 Frontera / España

- **Hecho:** costa minhota; Galicia más lejana que Caminha/Valença.
- Frontera menos estructural; no forzar.

### 6.12 COMUN_PORTUGAL (local excerpts — NO correct)

- **fiscal cerrado 2024** → COMUN_PORTUGAL: …cilita Viana y la capital del norte. El régimen fiscal especial para residentes extranjeros se cerró en 2024.",  "…
- **seguro privado portugués** → COMUN_PORTUGAL: …unos veinte minutos. Hay que contar con seguro privado portugués —Trofa Saúde, Braga, alrededor de cincuenta y cinco minut…
- **tarjeta española de diario** → COMUN_PORTUGAL: …l y privado de referencia fuera. No hay tarjeta española de uso habitual.",  "Porto–Sá Carneiro anda alrededor de lo…
- **Trofa Saúde** → COMUN_PORTUGAL: …ue contar con seguro privado portugués —Trofa Saúde, Braga, alrededor de cincuenta y cinco minutos—. Sani…

**Tratamiento:** marcar, no corregir; extraer a §13; conservar solo consecuencia local (minutos hospital/aero/coche).

### 6.13 No soportado / no inventar

- ~2000 vigente (capa 2692)
- Chip 6/10
- Silencio de agosto garantizado
- Palma permanente

---

## 7. Afife-Carreço

### 7.1 Relato actual completo

> CITA LITERAL — `web/src/lib/relatos-alto-minho.ts` clave `afife-carreco` (objeto completo).

```ts
afife-carreco: {
 escala: "Aldea de granito entre monte y mar",
 abrir: [
 "Afife —unos mil quinientos habitantes— y Carreço —unos mil ochocientos—, con Areosa a continuación, se sienten como el pueblo donde el Alto Minho más se parece a vivir en granito con océano cerca. Son las freguesias del norte de Viana: aldeas de piedra entre la Serra d'Arga —825 m, caballos, aldeas de monte— y el mar, viñas en pérgola, huertas, molinos y faro de Montedor en Carreço, playas de Afife —surf, orilla abierta— y Paçô a unos tres minutos, apeaderos de tren hacia Viana.",
 "Quien vive aquí es gente local, quien busca casa de piedra con terreno y quien acepta aldea sin comercio completo. Un martes de noviembre la aldea es silencio de granito: servicios 3/10, coche 7/10, fibra parcial. El Hospital de Santa Luzia —Viana— queda a unos quince minutos. El aeropuerto de Porto anda alrededor de los cincuenta y cinco —Palma en verano—. Para la playa casi no hace falta volante; para el súper, la farmacia grande y las mesas, Viana o Âncora a diez o quince minutos abren la semana.",
 "En la playa el viento es alto —nortada de tarde—; en la aldea, bajo: la ladera protege. Hay poca obra nueva. Agosto llena más la orilla que las calles de piedra; el invierno vacía el ruido y deja humedad de monte. Quien busque bloques y café a la puerta deberá mirar Viana; quien busque granito, viña y mar a tres minutos entenderá Afife-Carreço al primer paseo entre pérgolas.",
 "Primavera y otoño son buenas épocas para conocerlo: Arga verde, Paçô sin saturación, faro de Montedor con la costa abierta. Si solo conoces un día de sol en la playa, te llevas la imagen de folleto del océano. Si has visto nortada en la orilla y un noviembre vacío en la aldea, ya puedes decidir si de verdad quieres vivir aquí. Es la elección del estudio en Portugal para quien quiera monte detrás y mar cerca con ciudad completa a quince minutos.",
 "No promete servicios a pie ni fibra garantizada en toda parcela. Promete aldea de granito, Arga detrás y Paçô a tres a cambio de coche y escala 3/10. Quien acepte ese trato entenderá el sitio como quien reconoce una textura dejada atrás.",
 ],
 tiempo: [
 "Si vienes de Baleares, el cielo limpia y el viento enseña dos caras. Afife-Carreço suma unas 2.500 horas de sol y unos 78 a 80 días despejados —junto con el Litoral Norte, el mejor cielo de la tabla—, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.450 milímetros en unos 112 a 115 días. En la playa el viento es alto; en la aldea, bajo —protegida por la ladera—.",
 "El verano en la costa ronda 20,5 °C, con tres a seis días sobre 30 °C: fresco frente al calor balear. Afife y Paçô tienen agua entre 16 y 18 °C; la orilla es abierta, con surf. Julio y agosto llueven poco; el invierno moja. Conviene probar nortada en la playa y un noviembre en la aldea, no solo un mediodía de sol en Paçô.",
 ],
 vivir: [
 "El invierno en Afife-Carreço es humedad de monte y silencio de granito: el ruido se vacía y la casa de piedra pide calefacción, aislamiento y vigilancia de moho. En la aldea el viento es bajo —la ladera protege—; junto a la playa, nortada y salitre. Probar un noviembre vacío en la aldea evita firmar solo por Paçô en sol.",
 "Sin coche no se resuelve la semana: servicios 3/10, coche 7/10. Para la playa casi no hace falta volante; para súper, farmacia grande y mesas, Viana o Âncora a diez o quince minutos. Hay apeaderos de tren hacia Viana. En enero la aldea es silencio de piedra, no plaza de terrazas.",
 "Quien vive aquí es gente local y quien busca casa de piedra con terreno. El portugués manda en freguesia y ayuntamiento; la escala es de aldea agrícola entre Arga y el mar, no de ciudad. Agosto llena más la orilla que las calles de piedra. La integración pasa por vecinos de granito y viña en pérgola, no por bloques ni colonia de Porto.",
 "El Hospital de Santa Luzia —Viana— queda a unos quince minutos: de los mejores tiempos sanitarios de la costa minhota. Hay que contar con seguro privado portugués —Trofa Saúde, Braga, alrededor de cincuenta minutos—. Empadronarse aquí abre lo diario lejos; el hospital de referencia está en Viana, no en la aldea.",
 "Porto–Sá Carneiro anda alrededor de los cincuenta y cinco minutos —Palma en verano—. Ir y volver a Mallorca es más corto que desde Caminha o Moledo; aun así no es el cuarto de hora de Vila do Conde. El régimen fiscal especial para residentes extranjeros se cerró en 2024.",
 "Predominan casas de granito con terreno; hay poca obra nueva y fibra parcial —hay que comprobarla parcela a parcela—. El modelo es rehabilitación de piedra o casa baja en aldea, no piso de ensanche. Imaginar escaleras de piedra, humedad de monte y acceso a Paçô un día de nortada antes de comprar.",
 ],
 historia: [
 "El granito, las viñas en pérgola y las huertas explican Afife-Carreço: freguesias agrícolas entre Arga y el Atlántico, no villa de bloques ni colonia de chalés. La piedra no es decoración: es muro, casa y oficio de monte. El faro y los molinos de Montedor —Carreço— marcan la costa: luz para los barcos, memoria de viento y cereal junto al océano.",
 "Areosa a continuación y los apeaderos de tren completan la ficha de aldea y conexión con Viana: se baja al andén y la ciudad del Lima queda a un gesto corto. Lo que conviene saber es de piedra, monte y mar a tres minutos —la escala que el estudio compara con vivir en granito con océano cerca—, no lista de monumentos urbanos.",
 ],
 fuera: [
 "Afife y Paçô —playas abiertas a unos tres minutos, surf, nortada— son la tarde de mar; la aldea, la de diario entre granito y viña en pérgola. Se baja a la orilla cuando apetece y se vuelve al silencio de piedra al atardecer.",
 "Montedor cubre faro y molinos: el paseo de costa cuando se quiere mirar el Atlántico desde la piedra, no solo desde la toalla. Viana queda a unos 10–15 minutos: mercado, hospital, comercio, Santa Luzia. Arga se sube desde Carreço; Âncora, a trayecto corto hacia el norte si se busca espigón abrigado.",
 "No hay lonja ni plaza compacta de villa. Hay monte detrás, océano delante y coche en medio. Quien viva aquí acepta ese triángulo; quien lo descubra solo en agosto soleado, no.",
 ],
 casa: [
 "Predominan casas de granito con terreno; hay poca obra nueva y fibra parcial —hay que comprobarla parcela a parcela—. El modelo es rehabilitación de piedra o casa baja en aldea, no piso de ensanche. Junto a la playa hay que contar con nortada y salitre; en la aldea, humedad de monte. Conviene orientar y probar noviembre.",
 "No hay una media municipal homogénea actual en la que anclarse: el mercado es de aldea y anuncio a anuncio —conviene mirar Idealista del mes—. Quien busque metros y piedra encontrará más verdad aquí que en un bloque de Viana; quien busque precio de Valença, no.",
 "Los servicios son 3/10. Santa Luzia —Viana— queda a unos quince minutos. Porto–Sá Carneiro está a unos cincuenta y cinco. Hay que contar con seguro privado portugués —Trofa Saúde, Braga, alrededor de cincuenta minutos—. Conviene firmar tras fibra comprobada, nortada en la orilla y un martes de noviembre en la aldea.",
 ],
 encaja: {
 si: [
 "Encaja si se quiere aldea de granito entre la Serra d'Arga y el mar, con Viana a diez o quince minutos como ciudad completa. Afife, Carreço y Areosa ofrecen viña en pérgola, huertas, molinos, faro de Montedor y playas de Afife y Paçô a unos tres minutos —surf, orilla abierta—. Un martes de noviembre la aldea es silencio de piedra; el coche organiza la semana (servicios 3/10), pero Santa Luzia queda a unos quince minutos y hay apeaderos de tren. Quien priorice monte detrás, mar cerca y sol de costa —unas 2.500 horas— frente a bloques de veraneo encontrará aquí la escala más parecida a vivir en granito con océano a tres minutos.",
 "También encaja para quien acepte verano fresco frente a Mallorca y mar atlántico frío. Las máximas costeras rondan 20,5 °C; el agua, 16–18 °C. En la playa el viento es alto; en la aldea, bajo —protegida por la ladera—. Llueven alrededor de 1.450 milímetros en unos 112 días. La fibra es parcial: hay que comprobarla parcela a parcela. Conviene seguro privado portugués; Trofa Saúde, en Braga, anda alrededor de los cincuenta minutos.",
 ],
 no: [
 "No encaja si la semana debe resolverse andando o si se necesita fibra garantizada en toda la parcela. Falta comercio: Viana o Âncora cubren súper y mesas a diez o quince minutos. Tampoco si se busca agua templada o hospital privado a menos de cuarenta minutos.",
 "Tampoco encaja si se busca el régimen fiscal especial para residentes extranjeros —cerrado en 2024— o tres habitaciones baratas de ciudad en aldea de granito. Quien se decida solo tras un día de sol en Paçô, sin probar nortada en la playa ni un noviembre vacío en la aldea, se llevará otra vida.",
 ],
 veredicto:
 "Veredicto: Afife-Carreço es aldea de granito entre monte y mar —Arga detrás, Paçô a tres y Viana a quince a cambio de coche y servicios mínimos—. Buscaría casa de granito con terreno en Afife, Carreço o Areosa, con fibra comprobada y acceso claro a la playa, tras probar un martes de noviembre y un julio con nortada en la orilla. Se ganan costa de granito, hospital a unos quince minutos y aeropuerto a unos cincuenta y cinco; se aceptan servicios 3/10, mar a 16–18 °C y seguro privado portugués. Si mandan villa con mercado y espigón, Âncora; si hay que contar con ciudad 9/10, Viana; si la prioridad es granito, monte y mar en el mismo gesto, esta es la elección del estudio en Portugal.",
 },
 fotoIdentidad: {
 src: "/fotos/alto-minho/afife-carreco-identidad.jpg",
 pie: "Afife–Carreço: casa entre pinos con el Atlántico al fondo",
 },
 fotosAbrir: [
 { src: "/fotos/alto-minho/afife-aldea.jpg", pie: "Afife: aldea de granito" },
 { src: "/fotos/alto-minho/afife-playa.jpg", pie: "Playa de Afife" },
 ],
 fotosHistoria: [
 { src: "/fotos/alto-minho/carreco-montedor.jpg", pie: "Faro de Montedor, Carreço" },
 ],
 fotosFuera: [],
 creditoFotos: credito,
 }
```

**Señales de auditoría (scan local, sin internet):**

- **X/10** (5 muestras):
  - …ilencio de granito: servicios 3/10, coche 7/10, fibra parcial. E…
  - …ranito: servicios 3/10, coche 7/10, fibra parcial. El Hospital d…
  - …es a cambio de coche y escala 3/10. Quien acepte ese trato enten…
  - …resuelve la semana: servicios 3/10, coche 7/10. Para la playa ca…
  - …semana: servicios 3/10, coche 7/10. Para la playa casi no hace f…
- **precio_narr** (1 muestras):
  - …bar noviembre.",  "No hay una media municipal homogénea actual en la que an…
- **clima** (5 muestras):
  - …Afife-Carreço suma unas 2.500 horas de sol y unos 78 a 80 días despejado…
  - …as de sol y unos 78 a 80 días despejados —junto con el Litoral Norte…
  - …oras y 120 jornadas claras de Mallorca. Caen alrededor de 1.450 milí…
  - …lma en verano—. Ir y volver a Mallorca es más corto que desde Caminh…
  - …acepte verano fresco frente a Mallorca y mar atlántico frío. Las máx…
- **hospital** (5 muestras):
  - …coche 7/10, fibra parcial. El Hospital de Santa Luzia —Viana— queda …
  - …fibra parcial. El Hospital de Santa Luzia —Viana— queda a unos quince m…
  - …s ni colonia de Porto.",  "El Hospital de Santa Luzia —Viana— queda …
  - … de Porto.",  "El Hospital de Santa Luzia —Viana— queda a unos quince m…
  - …con seguro privado portugués —Trofa Saúde, Braga, alrededor de ci…
- **Palma** (2 muestras):
  - …dor de los cincuenta y cinco —Palma en verano—. Para la playa cas…
  - …os cincuenta y cinco minutos —Palma en verano—. Ir y volver a Mal…
- **fiscal** (3 muestras):
  - … de hora de Vila do Conde. El régimen fiscal especial para residentes extr…
  - …ara residentes extranjeros se cerró en 2024.",  "Predominan casas de gran…
  - …Tampoco encaja si se busca el régimen fiscal especial para residentes extr…
- **seguro** (4 muestras):
  - …a minhota. Hay que contar con seguro privado portugués —Trofa Saúde, Braga…
  - …a y cinco. Hay que contar con seguro privado portugués —Trofa Saúde, Braga…
  - …a parcela a parcela. Conviene seguro privado portugués; Trofa Saúde, en Br…
  - …vicios 3/10, mar a 16–18 °C y seguro privado portugués. Si mandan villa co…
- **metro_tren** (5 muestras):
  - …— y Paçô a unos tres minutos, apeaderos de tren hacia Viana.",  "Qui…
  - …. Caen alrededor de 1.450 milímetros en unos 112 a 115 días. En l…
  - … a diez o quince minutos. Hay apeaderos de tren hacia Viana. En ener…
  - … "Areosa a continuación y los apeaderos de tren completan la ficha d…
  - …alista del mes—. Quien busque metros y piedra encontrará más verd…
- **sol** (2 muestras):
  - …aras. Afife-Carreço suma unas 2.500 horas de sol y unos 78 a 80 días despejado…
  - ….500 horas de sol y unos 78 a 80 días despejados —junto con el Litoral Norte…

### 7.2 Capa 2026 completa

Fuente: `web/src/data/municipios-alto-minho.json` · slug `afife-carreco`.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `null` *(n.d. / ausente)* |
| `A_3hab` | `null` *(n.d. / ausente)* |
| `B_2hab` | `null` *(n.d. / ausente)* |
| `B_3hab` | `null` *(n.d. / ausente)* |
| `advertenciaMicrozona` | Afife y Carreço son parroquias costeras dispersas; no son un único núcleo urbano ni equivalen a Viana ciudad. |
| `aeropuertoMin` | `55` |
| `aeropuertoPractico2026` | Porto |
| `aeropuertos` | Porto 74 km · 55 min (Palma: verano); Vigo 92 km · 70 min (Palma: verano); Santiago 158 km · 115 min (Palma: casi todo el año) |
| `autonomiaCotidiana` | BAJA-MEDIA |
| `casaQueBuscar` | No comprar solo por vistas o €/m²: comprobar farmacia, compra, acceso, pendie... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Más favorable |
| `comunicaciones` | N-13; apeaderos de tren |
| `comunicacionesNota10` | `7` |
| `cubiertos` | `108` |
| `dependenciaCocheTexto` | Alta para vida cotidiana completa. |
| `despejados` | `80` |
| `estacionalidad2026` | Residencial anual con fuerte componente vacacional costero. |
| `fibra` | Parcial |
| `franja` | A |
| `hospitalMin` | `15` |
| `hospitalPractico2026` | Hospital de Santa Luzia, Viana do Castelo |
| `hospitalPriv` | 50 km · 50 min · Trofa Saúde (Braga) |
| `hospitalPub` | 15 km · 15 min · Santa Luzia (Viana) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 11 km · 15 min · Santa Luzia (Viana do Castelo); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `77` |
| `lat` | `41.775` |
| `lluviaDias` | `112` |
| `lluviaMm` | `1450` |
| `lon` | `-8.86` |
| `mapa` | 78_afife_carreco.png |
| `mercadoReventa` | Mercado estrecho o de muestra limitada: la salida depende mucho del producto.... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `3` |
| `minCosta` | `3` |
| `municipio` | Afife-Carreço (Viana) |
| `n` | `78` |
| `niebla` | Media |
| `obraNueva` | Poca |
| `pais` | Portugal |
| `palmaDirecta2026` | Porto: Palma observada en la operativa de 2026; rutas y frecuencias cambian por temporada, comprobar antes de viajar. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Santiago (casi todo el año) · 115 min |
| `paseoCotidiano` | Caminos y costa según ubicación; no asumir una marginal urbana continua. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Atlántico y espacio a cambio de dispersión y coche. |
| `playaBano` | Afife / Paçô |
| `playaCotidiana` | DEPENDE VIVIENDA |
| `playaCotidianaModo` | Costa y playas muy próximas en algunas viviendas, pero la dispersión puede exigir coche incluso viviendo 'junto al mar'. |
| `precioM2` | `null` *(n.d. / ausente)* |
| `provincia` | Viana do Castelo |
| `radioCotidiano` | Básicos locales y vivienda dispersa; para compras/servicios amplios se depende de Viana. |
| `radioSalida` | Playas atlánticas, Viana y Serra d'Arga/entorno rural. |
| `sanidadPrimaria2026` | Atención primaria mediante red de Viana/concelho |
| `servicios` | `3` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | Tiene: aldeas. Falta: comercio (Viana o Âncora a 10-15) |
| `slug` | afife-carreco |
| `solHoras` | `2500` |
| `tempAgua` | 16-18 |
| `tempInvierno` | `10.0` |
| `tempVerano` | `20.5` |
| `transporteRelevante2026` | Linha do Minho con apeaderos/estaciones locales según parroquia. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital de Santa Luzia, Viana do Castelo. |
| `viento` | Alta |
| `zona` | Alto Minho (PT) |

**Highlights capa (autoridad):** autonomia `BAJA-MEDIA` · playa `DEPENDE VIVIENDA` · precioM2 `None` · servicios `3` · hospitalMin `15` · aeroMin `55`.

### 7.3 Auditorías / plan existentes

**NO PLAN_EDITORIAL** específico Portugal (no hay `PLAN_EDITORIAL_PORTUGAL_*.md`).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n=78 → claves 73–83):

```
| 78 | Afife-Carreço (Viana) | Alto Minho (PT) | precio n.d. en ficha pero relato cita €/m² [2100, 2100, 2100] | minutos hospital en prosa (capa 2026 prioriza texto práctico); usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 78 | Afife-Carreço (Viana) | Alto Minho (PT) | no | — |
```

**estudio_zonas.md** (histórico — **NO** autoridad 2026):

<details><summary>Recorte estudio</summary>

**Afife-Carreço (Viana) (nº 78).** Afife (1.500 hab.) y Carreço (1.800), con Areosa a continuación, son las freguesias del norte de Viana: aldeas de granito entre la Serra d'Arga y el mar, viñas en pérgola, huertas, molinos y faro de Montedor, playas de Afife (surf) y Paçô a 3 min, apeaderos de tren. Viento alto en la playa, bajo en la aldea (protegida por la ladera). Servicios 3/10; coche 7/10; fibra parcial. Hospital Viana 15. Aeropuerto 55. Precio 2.100: 3 habitaciones franja A 246.000; casa de granito con terreno 200.000-280.000. Poca obra nueva. Para quién: el que quiera Mancor con el mar a 3 min y Viana a 10-15 como Inca. Mi elección en Portugal.

**Viana do Castelo (nº 79).** 90.000 habitantes en el concelho (40.000 en la ciudad); Santa Luzia, Praça da República, puente Eiffel, buque-hospital Gil Eannes, paseo del Lima, Praia Norte con piscinas, Cabedelo (surf) al otro lado del rí

</details>

### 7.4 Auditoría relato ↔ capa

Estados permitidos: `ALINEADO` · `OBSOLETO` · `DUPLICA_CAPA` · `P4_PRESERVAR` · `SOPORTADO_PERO_INFRAUSADO` · `NO_SOPORTADO_NO_INVENTAR` · `REQUIERE_VERIFICACION_EXTERNA` · `COMUN_PORTUGAL`

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | Chip X/10 repetido en abrir/casa/encaja | `servicios` **3**; Tiene: aldeas. Falta: comercio (Viana o Âncora a 10-15) | DUPLICA_CAPA | Omitir chip; narrar autonomía cualitativa |
| Precio €/m² — n.d. obligatorio | Auditoría histórica ~2100 / estudio 2.100; prosa actual ya evita €/m² (Idealista anuncio a anuncio) | `precioM2` **`null`** | ALINEADO (capa null) / NO_SOPORTADO_NO_INVENTAR (reponer 2100) | **NUNCA** restaurar 2100 ni usar media Viana; cero cifras vivienda municipales; Idealista del mes |
| Dispersión Afife ≠ Carreço ≠ Viana | Dos freguesias + Areosa | `advertenciaMicrozona`: Afife y Carreço son parroquias costeras dispersas; no son un único núcleo urbano ni equivalen a Via… | ALINEADO / SOPORTADO_PERO_INFRAUSADO | No equivaler a Viana ciudad |
| Mar / playa | Paçô/Afife a ~3′; DEPENDE VIVIENDA | **DEPENDE VIVIENDA** — Costa y playas muy próximas en algunas viviendas, pero la dispersión puede exig… | ALINEADO | Playa sí cerca pero no toda vivienda |
| Hospital | Santa Luzia ~15′ | `hospitalMin` **15** | ALINEADO / DUPLICA_CAPA | Ventaja costa; una mención |
| Aeropuerto / Palma | Minutos aero + «Palma en verano» (tono permanente posible) | `aeropuertoMin` 55; `aeropuertoPractico2026`=Porto; `palmaDirecta2026` matiza | DUPLICA_CAPA / ALINEADO (matiz temporada) | Consecuencia una vez; no martillar minutos+Palma; no inventar permanente absoluto |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos tiempo→encaja (y a menudo abrir) | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| COMUN_PORTUGAL (fiscal / seguro / tarjeta / Cunqueiro) | Bloques repetidos: régimen fiscal cerrado 2024; seguro privado; tarjeta europea/española; SNS lento | Hecho nacional — no capa municipal | COMUN_PORTUGAL | Extraer a doc común; conservar solo consecuencia local; **no corregir** aquí |
| P4 Montedor / Arga / Paçô | Faro, monte, playa | capa + estudio | P4_PRESERVAR | Glosar función; no catálogo |

### 7.5 P4 / identidad

- **Preservar:** granito, Arga, Montedor, Paçô/Afife, viñas en pérgola, apeaderos.
- **Identidad:** aldea monte+mar; **precio n.d.**
- **Peaje:** coche; servicios 3; fibra parcial.

### 7.6 Vida cotidiana soportada

| Elemento | Clasificación | Base repo |
|---|---|---|
| Autonomía | YA SOPORTADO | `BAJA-MEDIA` |
| Coche | YA SOPORTADO | `Alta para vida cotidiana completa.` |
| Servicios cotidianos | YA SOPORTADO | servicios `3` — Tiene: aldeas. Falta: comercio (Viana o Âncora a 10-15) |
| Paseo | YA SOPORTADO | Caminos y costa según ubicación; no asumir una marginal urbana continua. |
| Pendiente | N/A / null | `null` |
| Microzona | YA SOPORTADO / INFRAUSADO | adv: Afife y Carreço son parroquias costeras dispersas; no son un único nú… / microPrecio: — |
| Compra enero / estacionalidad | YA SOPORTADO en relato+capa | Residencial anual con fuerte componente vacacional costero. |
| Transporte relevante | YA SOPORTADO | Linha do Minho con apeaderos/estaciones locales según parroquia. |
| Nombres café / horarios exactos | NO SOPORTADO | — |
| Totales A/B en prosa | NO SOPORTADO (viven en tabla) | A_3hab `None` / B_3hab `None` |
| Burocracia nacional (fiscal/NIF/CRUE) | COMUN_PORTUGAL | No repetir 11×; ver §13 |

### 7.7 Reality toll

- Autonomía **BAJA-MEDIA**; coche alto
- Playa **DEPENDE VIVIENDA**
- Precio **`null` / n.d.** — no 2100
- Hospital ~**15′**; aero ~**55′**
- Fibra parcial; dispersión Afife/Carreço

### 7.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | Auditoría histórica ~2100 / estudio 2.100; prosa actual **omite** €/m² y remite a Idealista anuncio a anuncio | **`null` (n.d.)** | **OBLIGATORIO n.d.** — documentar ambos estados; **nunca** restaurar 2100 ni media Viana |
| A_3hab / B_3hab | No narrar totales municipales | `None` / `None` | Si null, no inventar |
| casaQueBuscar / reventa | Cualitativo aldea/piedra | Ver tabla capa | `casaQueBuscar` truncado `…` → **DESEABLE** texto completo (no bloquea v1); `mercadoReventa` truncado `…` → **DESEABLE** texto completo (no bloquea v1) |
| Cifras vivienda | Cero cifras €/m² en prosa | — | Mantener omisión |

### 7.9 Clima: deuda / duplicación (NO correct)

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en `tiempo` + `encaja` (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `afife-carreco` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_32.**

### 7.10 Mar / río / playa / paseo

- **playaCotidiana:** `DEPENDE VIVIENDA`
- **Modo:** Costa y playas muy próximas en algunas viviendas, pero la dispersión puede exigir coche incluso viviendo 'junto al mar'.
- **paseoCotidiano:** Caminos y costa según ubicación; no asumir una marginal urbana continua.
- **pendiente:** `null`
- Paçô/Afife cerca; DEPENDE VIVIENDA.
- No contradecir la etiqueta de playa de la capa.

### 7.11 Frontera / España

- Frontera España no es eje cotidiano; Viana/Porto mandan.
- No inventar ventaja gallega.

### 7.12 COMUN_PORTUGAL (local excerpts — NO correct)

- **fiscal cerrado 2024** → COMUN_PORTUGAL: … el cuarto de hora de Vila do Conde. El régimen fiscal especial para residentes extranjeros se cerró en 2024.",  "…
- **seguro privado portugués** → COMUN_PORTUGAL: …de la costa minhota. Hay que contar con seguro privado portugués —Trofa Saúde, Braga, alrededor de cincuenta minutos—. Emp…
- **Trofa Saúde** → COMUN_PORTUGAL: …ue contar con seguro privado portugués —Trofa Saúde, Braga, alrededor de cincuenta minutos—. Empadronarse…

**Tratamiento:** marcar, no corregir; extraer a §13; conservar solo consecuencia local (minutos hospital/aero/coche).

### 7.13 No soportado / no inventar

- **Reponer €/m² 2100** o media Viana
- Chip 3/10
- Tratar como un solo núcleo urbano
- Fibra garantizada en toda parcela
- Palma permanente

---

## 8. Viana do Castelo

### 8.1 Relato actual completo

> CITA LITERAL — `web/src/lib/relatos-alto-minho.ts` clave `viana-do-castelo` (objeto completo).

```ts
viana-do-castelo: {
 escala: "Ciudad del Lima",
 abrir: [
 "Viana do Castelo se siente ciudad pequeña completa junto al Lima y al Atlántico. Unos noventa mil habitantes en el concelho —unos cuarenta mil en la ciudad—: basílica de Santa Luzia sobre el monte —funicular, citania celta, una de las vistas de mar más citadas de Portugal—, Praça da República, puente Eiffel sobre el río, buque-hospital Gil Eannes amarrado como museo, paseo del Lima, Praia Norte con piscinas de marea, Cabedelo —surf, kite— al otro lado del río, mercado, tren y comercio. Es ciudad limpia, tranquila y culta: la capital del Alto Minho.",
 "Quien vive aquí es gente local, familias, algo de comunidad brasileña y europea, y quien busca hospital cerca sin mudarse a Porto. Un martes de noviembre se resuelve casi todo en ciudad: servicios 9/10, dependencia del coche baja —3/10—. El Hospital de Santa Luzia queda a unos cinco minutos. El aeropuerto de Porto anda alrededor de los cincuenta —Palma en verano; más de ochenta destinos directos—. Para lo diario no hace falta volante en el centro; para Praia Norte o Cabedelo, a veces sí.",
 "En verano Praia Norte y Cabedelo reciben más afluencia; el ritmo de ciudad se mantiene todo el año —no se apaga en enero—. Hay obra nueva. Facilidad de venta y revalorización altas —8/10—. Quien se decida a vivir el centro acepta bloques; en las freguesias hay casas bajas. El tráfico es de ciudad pequeña; la N-13 y el frente de playa se notan en agosto.",
 "El calendario marca cultura, mercado y nortada costera de tarde. Primavera y otoño son buenas épocas para conocerlo: Santa Luzia sin cola, paseo del Lima, Gil Eannes. Si solo conoces la vista desde la basílica, te llevas la imagen de folleto. Si has visto un martes laborable y una tarde de nortada en Praia Norte, ya puedes decidir si de verdad quieres vivir aquí.",
 "Viana no promete aldea de granito ni colonia entre pinos. Promete ciudad 9/10, hospital a cinco y Atlántico urbano a cambio de bloques en el casco y mar frío. Para quien mire Afife-Carreço o Âncora, es la ciudad de referencia.",
 ],
 tiempo: [
 "Si vienes de Baleares, el cielo de Viana limpia con el mejor registro costero de la zona. Suma unas 2.500 horas de sol y unos 78 a 80 días despejados, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.450 milímetros en unos 112 a 115 días. El viento es alto en la costa —nortada de tarde de junio a agosto—; en el casco interior se nota menos.",
 "El verano en la costa ronda 20,5 °C, con tres a seis días sobre 30 °C: fresco frente al calor balear. Praia Norte y Cabedelo tienen agua entre 16 y 18 °C; las piscinas de marea de Praia Norte abrigan el baño urbano. Julio y agosto llueven poco; el invierno moja. Conviene probar nortada en la orilla y un noviembre de ciudad, no solo la vista desde Santa Luzia.",
 ],
 vivir: [
 "El invierno en Viana es de ciudad que no se apaga: el casco mantiene ritmo; la humedad atlántica y la lluvia piden calefacción y aislamiento en pisos de bloque. En Praia Norte hay que contar con salitre y nortada residual. Probar un noviembre de ciudad evita firmar solo por la vista desde Santa Luzia.",
 "Sin coche, el centro resuelve casi todo —servicios 9/10, dependencia del coche 3/10—. Un martes de noviembre hay mercado, comercio, café y paseo del Lima. Para Praia Norte o Cabedelo a veces hace falta vehículo. En enero el ritmo de capital del Alto Minho sigue; no es colonia que cierra.",
 "Conviven gente local, familias, algo de comunidad brasileña y europea, y quien busca hospital cerca sin mudarse a Porto. El portugués manda; hay apertura a quien llega de fuera, con escala de ciudad pequeña culta. En verano Praia Norte y Cabedelo reciben más afluencia; entre semana manda la ciudad. La integración pasa por barrio, mercado y Santa Luzia más que por aldea de granito.",
 "El Hospital de Santa Luzia queda a unos cinco minutos: la sanidad a pie es el argumento fuerte. Hay que contar con seguro privado portugués —Trofa Saúde, Braga, alrededor de cincuenta minutos—, porque el público portugués es más lento. No hay tarjeta española de uso habitual; sí hospital comarcal delante.",
 "Porto–Sá Carneiro anda alrededor de los cincuenta minutos —Palma en verano; más de ochenta destinos directos—. Ir y volver a Mallorca es viable vía Porto en temporada; el resto del año pide mirar conexiones. El régimen fiscal especial para residentes extranjeros se cerró en 2024.",
 "En el centro predominan pisos en bloques; en las freguesias, casas bajas. Hay obra nueva y fibra. El modelo urbano pide ascensor y calle; el de freguesía, más terreno y coche. En primera línea de Praia Norte hay que contar con ocupación de verano, salitre y nortada. Imaginar bloque en enero y orilla en agosto antes de comprar.",
 ],
 historia: [
 "Santa Luzia explica Viana mejor que cualquier folleto: basílica de principios del XX sobre el monte, funicular, citania celta —poblado castreño excavado en la ladera— y mirador sobre el Lima abriéndose al Atlántico. Abajo, la Praça da República y el casco cuentan la ciudad mercantil y marinera; el puente Eiffel —hierro, siglo XIX— une las dos orillas del río con el mismo gesto de escuela francesa que se ve en otras bocas del norte.",
 "El buque-hospital Gil Eannes —ahora museo flotante— añade memoria marítima: un barco que fue hospital de la flota bacaladera y hoy se visita amarrado. El paseo del Lima, Praia Norte y Cabedelo completan el arco de río y océano. Lo que conviene saber es de ciudad culta, puerto y mirador: Santa Luzia, Eiffel, Gil Eannes, no lista seca de fechas.",
 ],
 fuera: [
 "Santa Luzia —basílica, funicular, citania, mirador—, la Praça da República y el paseo del Lima son la tarde de diario en ciudad. Se camina, se toma café, se mira el río sin pedir coche para cada gesto.",
 "Praia Norte cubre baño urbano con piscinas de marea: orilla de ciudad, abrigo de piedra frente al oleaje, agua fría de Atlántico. Cabedelo queda al otro lado del río —surf, kite, arenal más abierto—. Afife-Carreço anda a unos 10–15 minutos hacia el norte cuando apetezca granito y aldea.",
 "La Ecovia do Litoral Norte —pasarelas hacia Caminha— y el Camino de costa completan los caminos. Quien viva aquí tiene ciudad y mar en el mismo concelho; el silencio de aldea, no.",
 ],
 casa: [
 "En el centro predominan pisos en bloques; en las freguesias, casas bajas. Hay obra nueva y fibra. El modelo urbano pide ascensor y calle; el de freguesía, más terreno y coche. En primera línea de Praia Norte hay que contar con ocupación de verano, salitre y nortada; conviene orientación y probar una tarde de viento.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros. Quien busque casas bajas deberá mirar freguesías o Afife-Carreço; quien busque hospital a cinco y comercio denso, el ensanche o un buen piso de ciudad.",
 "Los servicios son 9/10. Santa Luzia queda a unos cinco minutos. Porto–Sá Carneiro está a unos cincuenta. Hay que contar con seguro privado portugués —Trofa Saúde, Braga, alrededor de cincuenta minutos—. Conviene firmar tras un martes laborable y un agosto en Praia Norte.",
 ],
 encaja: {
 si: [
 "Encaja si se quiere ciudad pequeña completa junto al Lima y al Atlántico, con vida todo el año. Viana do Castelo resuelve casi todo a pie o en trayecto corto: servicios 9/10, mercado, tren, comercio, Santa Luzia —basílica, funicular, citania—, paseo del Lima, Praia Norte con piscinas de marea y Cabedelo al otro lado del río. El Hospital de Santa Luzia queda a unos cinco minutos; Porto–Sá Carneiro, a unos cincuenta —Palma en verano y muchos destinos directos—. Quien priorice hospital cercano, cultura y sol de costa —unas 2.500 horas— frente a aldea o colonia de chalés encontrará aquí la capital del Alto Minho.",
 "También encaja como ciudad de referencia para quien viva en Afife-Carreço o Âncora y quiera mesas, especialistas y agenda urbana sin mudarse a Porto. El verano costero ronda 20,5 °C frente al calor de Mallorca; el agua, 16–18 °C. Llueven alrededor de 1.450 milímetros en unos 115 días; el viento es alto en la orilla —nortada de tarde—. Conviene seguro privado portugués: Trofa Saúde, Braga, anda alrededor de los cincuenta minutos.",
 ],
 no: [
 "No encaja si se buscan casas bajas en el casco central: ahí mandan bloques. Las freguesias ofrecen escala más baja. Tampoco si se necesita agua templada o un agosto silencioso en Praia Norte y Cabedelo: la afluencia sube en temporada.",
 "Tampoco encaja si se busca el régimen fiscal especial para residentes extranjeros —cerrado en 2024— o hospital privado a menos de cuarenta minutos. Quien se decida solo con la vista desde Santa Luzia, sin probar un martes de noviembre ni una tarde de nortada en Praia Norte, se llevará una ciudad distinta de la foto turística.",
 ],
 veredicto:
 "Veredicto: Viana do Castelo es la ciudad del Lima —9/10, hospital a cinco y Atlántico urbano a cambio de bloques en el centro y mar frío—. Buscaría tres habitaciones en freguesía o piso en ensanche con acceso al paseo, tras probar un martes laborable y un agosto en Praia Norte. Se ganan ciudad completa, Santa Luzia y; se aceptan agua a 16–18 °C, nortada costera y seguro privado portugués. Si mandan granito y monte, Afife-Carreço; si villa marinera abrigada, Âncora; si la prioridad es resolver la semana sin coche y con hospital delante, Viana no tiene rival en la zona.",
 },
 fotosAbrir: [
 { src: "/fotos/alto-minho/viana-santa-luzia.jpg", pie: "Basílica de Santa Luzia sobre Viana do Castelo" },
 ],
 fotosHistoria: [
 { src: "/fotos/alto-minho/viana-eiffel.jpg", pie: "Puente Eiffel sobre el Lima, Viana" },
 { src: "/fotos/alto-minho/viana-gil-eannes.jpg", pie: "Buque-hospital Gil Eannes, Viana" },
 ],
 fotosFuera: [
 { src: "/fotos/alto-minho/viana-praia-norte.jpg", pie: "Praia Norte, Viana do Castelo" },
 { src: "/fotos/alto-minho/viana-cabedelo.jpg", pie: "Cabedelo, al otro lado del Lima" },
 ],
 creditoFotos: credito,
 }
```

**Señales de auditoría (scan local, sin internet):**

- **X/10** (5 muestras):
  - …asi todo en ciudad: servicios 9/10, dependencia del coche baja —…
  - …, dependencia del coche baja —3/10—. El Hospital de Santa Luzia …
  - …venta y revalorización altas —8/10—. Quien se decida a vivir el …
  - …a entre pinos. Promete ciudad 9/10, hospital a cinco y Atlántico…
  - …resuelve casi todo —servicios 9/10, dependencia del coche 3/10—.…
- **broken000** (1 muestras):
  - …una media municipal en prosa. 000 euros. Quien busque casas bajas deb…
- **precio_narr** (2 muestras):
  - … del mes; aquí no se fija una media municipal en prosa. 000 euros. Quien bu…
  - …una media municipal en prosa. 000 euros. Quien busque casas bajas deb…
- **clima** (5 muestras):
  - …o de la zona. Suma unas 2.500 horas de sol y unos 78 a 80 días despejado…
  - …as de sol y unos 78 a 80 días despejados, frente a las 2.800 horas y…
  - …oras y 120 jornadas claras de Mallorca. Caen alrededor de 1.450 milí…
  - …inos directos—. Ir y volver a Mallorca es viable vía Porto en tempor…
  - …da 20,5 °C frente al calor de Mallorca; el agua, 16–18 °C. Llueven a…
- **hospital** (5 muestras):
  - …il en la ciudad—: basílica de Santa Luzia sobre el monte —funicular, ci…
  - …te Eiffel sobre el río, buque-hospital Gil Eannes amarrado como muse…
  - …leña y europea, y quien busca hospital cerca sin mudarse a Porto. Un…
  - …cia del coche baja —3/10—. El Hospital de Santa Luzia queda a unos c…
  - …e baja —3/10—. El Hospital de Santa Luzia queda a unos cinco minutos. E…
- **Palma** (3 muestras):
  - …a alrededor de los cincuenta —Palma en verano; más de ochenta des…
  - …dor de los cincuenta minutos —Palma en verano; más de ochenta des…
  - …á Carneiro, a unos cincuenta —Palma en verano y muchos destinos d…
- **fiscal** (3 muestras):
  - …año pide mirar conexiones. El régimen fiscal especial para residentes extr…
  - …ara residentes extranjeros se cerró en 2024.",  "En el centro predominan …
  - …Tampoco encaja si se busca el régimen fiscal especial para residentes extr…
- **seguro** (5 muestras):
  - …to fuerte. Hay que contar con seguro privado portugués —Trofa Saúde, Braga…
  - …ortugués es más lento. No hay tarjeta española de uso habitual; sí hospital …
  - …cincuenta. Hay que contar con seguro privado portugués —Trofa Saúde, Braga…
  - … —nortada de tarde—. Conviene seguro privado portugués: Trofa Saúde, Braga…
  - …a 16–18 °C, nortada costera y seguro privado portugués. Si mandan granito …
- **metro_tren** (2 muestras):
  - …. Caen alrededor de 1.450 milímetros en unos 112 a 115 días. El v…
  - …lueven alrededor de 1.450 milímetros en unos 115 días; el viento …
- **sol** (2 muestras):
  - …costero de la zona. Suma unas 2.500 horas de sol y unos 78 a 80 días despejado…
  - ….500 horas de sol y unos 78 a 80 días despejados, frente a las 2.800 horas y…

### 8.2 Capa 2026 completa

Fuente: `web/src/data/municipios-alto-minho.json` · slug `viana-do-castelo`.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `197477` |
| `A_3hab` | `273429` |
| `B_2hab` | `159500` |
| `B_3hab` | `220847` |
| `advertenciaMicrozona` | `null` *(n.d. / ausente)* |
| `aeropuertoMin` | `50` |
| `aeropuertoPractico2026` | Porto |
| `aeropuertos` | Porto 62 km · 50 min (Palma: verano); Vigo 99 km · 75 min (Palma: verano) |
| `autonomiaCotidiana` | MUY ALTA |
| `casaQueBuscar` | Ascensor o acceso sin barreras, exterior, 2–3 dormitorios y servicios andando... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Más favorable |
| `comunicaciones` | A-28 / N-13; tren |
| `comunicacionesNota10` | `9` |
| `cubiertos` | `108` |
| `dependenciaCocheTexto` | Baja en centro bien situado; mayor para playas/parroquias exteriores. |
| `despejados` | `80` |
| `estacionalidad2026` | Ciudad plenamente anual. |
| `fibra` | Sí |
| `franja` | A |
| `hospitalMin` | `5` |
| `hospitalPractico2026` | Hospital de Santa Luzia, en Viana do Castelo |
| `hospitalPriv` | 50 km · 50 min · Trofa Saúde (Braga) |
| `hospitalPub` | 3 km · 5 min · Santa Luzia (Viana) |
| `hospitalReferencia2026` | Hospital de Santa Luzia / ULSAM |
| `humedad` | `77` |
| `lat` | `41.694` |
| `lluviaDias` | `115` |
| `lluviaMm` | `1450` |
| `lon` | `-8.831` |
| `mapa` | 79_viana_do_castelo.png |
| `mercadoReventa` | Mercado relativamente amplio por demanda residencial permanente y servicios. ... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | Centro histórico, Cabedelo y parroquias costeras no comparten la misma relación con playa, servicios ni precio. |
| `minBano` | `5` |
| `minCosta` | `3` |
| `municipio` | Viana do Castelo |
| `n` | `79` |
| `niebla` | Media |
| `obraNueva` | Sí |
| `pais` | Portugal |
| `palmaDirecta2026` | Porto: Palma observada en la operativa de 2026; rutas y frecuencias cambian por temporada, comprobar antes de viajar. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Porto (verano) · 50 min |
| `paseoCotidiano` | Marginal del Lima, centro y ecovia; Cabedelo como extensión según vivienda/modo. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Autonomía, hospital y cultura propios; la playa atlántica cotidiana depende de microzona. |
| `playaBano` | Praia Norte / Cabedelo |
| `playaCotidiana` | DEPENDE MICROZONA |
| `playaCotidianaModo` | La ciudad vive río/estuario; Cabedelo aporta playa atlántica próxima pero separada del centro por el Lima. |
| `precioM2` | `2337` |
| `provincia` | Viana do Castelo |
| `radioCotidiano` | Ciudad regional con mercado, comercio, cultura, sanidad, deporte y restauración suficientes para una vida muy autónoma. |
| `radioSalida` | Cabedelo/costa, Ponte de Lima y resto del Alto Minho; muchas necesidades no requieren salida. |
| `sanidadPrimaria2026` | Red urbana de cuidados primários |
| `servicios` | `9` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | No falta nada |
| `slug` | viana-do-castelo |
| `solHoras` | `2500` |
| `tempAgua` | 16-18 |
| `tempInvierno` | `10.0` |
| `tempVerano` | `20.5` |
| `transporteRelevante2026` | Linha do Minho y bus urbano/interurbano. |
| `urgenciasPAC2026` | Urgência médico-cirúrgica hospitalaria |
| `viento` | Alta |
| `zona` | Alto Minho (PT) |

**Highlights capa (autoridad):** autonomia `MUY ALTA` · playa `DEPENDE MICROZONA` · precioM2 `2337` · servicios `9` · hospitalMin `5` · aeroMin `50`.

### 8.3 Auditorías / plan existentes

**NO PLAN_EDITORIAL** específico Portugal (no hay `PLAN_EDITORIAL_PORTUGAL_*.md`).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n=79 → claves 73–83):

```
| 79 | Viana do Castelo | Alto Minho (PT) | precio relato ~2100 vs ficha 2337 | minutos hospital en prosa (capa 2026 prioriza texto práctico); usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | lenguaje vago/revisar: tranquilo | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 79 | Viana do Castelo | Alto Minho (PT) | no | — |
```

**estudio_zonas.md** (histórico — **NO** autoridad 2026):

<details><summary>Recorte estudio</summary>

**Viana do Castelo (nº 79).** 90.000 habitantes en el concelho (40.000 en la ciudad); Santa Luzia, Praça da República, puente Eiffel, buque-hospital Gil Eannes, paseo del Lima, Praia Norte con piscinas, Cabedelo (surf) al otro lado del río, mercado, tren, comercio. Ciudad limpia, tranquila y culta. Servicios 9/10. Hospital 5. Aeropuerto de Porto 50. Precio 2.100: 3 habitaciones franja A 246.000; obra nueva sí. Facilidad de venta 8/10, revalorización 8/10. Dependencia del coche 3/10. Para quién: quien prefiera ciudad pequeña completa; para ti, la ciudad de referencia de Afife-Carreço.

**Ponte de Lima (nº 80).** 44.000 habitantes en el concelho (3.000 en la villa); puente romano-medieval, plaza de la feria, Feiras Novas (septiembre), Festival de Jardines, Ecovia do Lima, Lagoas de Bertiandos, viñedo de Loureiro, golf. Interior: franja B (Cabedelo a 25). Verano caluroso (21,5 °C, 20-25 día

</details>

### 8.4 Auditoría relato ↔ capa

Estados permitidos: `ALINEADO` · `OBSOLETO` · `DUPLICA_CAPA` · `P4_PRESERVAR` · `SOPORTADO_PERO_INFRAUSADO` · `NO_SOPORTADO_NO_INVENTAR` · `REQUIERE_VERIFICACION_EXTERNA` · `COMUN_PORTUGAL`

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | Chip X/10 repetido en abrir/casa/encaja | `servicios` **9**; No falta nada | DUPLICA_CAPA | Omitir chip; narrar autonomía cualitativa |
| Precio €/m² | Auditoría/estudio ~2100; prosa puede citar cifras o remitir + «000 euros» | `precioM2` **2337** | OBSOLETO | Capa prevalece; omitir cifras; TablaPrecios |
| Prosa rota «000 euros» | Tras remitir a capa queda fragmento «000 euros» (+ totales sueltos a veces) | Cifras viven en `precioM2` / A/B / TablaPrecios | OBSOLETO | Borrar resto roto; no reponer €/m² históricos en prosa |
| Ciudad / microzonas playa | Ciudad completa; playa depende microzona | autonomía **MUY ALTA**; playa **DEPENDE MICROZONA** | ALINEADO | No aplanar a villa; Santa Luzia = salida/pendiente |
| Hospital en ciudad | Santa Luzia ~5′ | `hospitalMin` **5** | ALINEADO | Ventaja; una mención |
| Aeropuerto / Palma | Minutos aero + «Palma en verano» (tono permanente posible) | `aeropuertoMin` 50; `aeropuertoPractico2026`=Porto; `palmaDirecta2026` matiza | DUPLICA_CAPA / ALINEADO (matiz temporada) | Consecuencia una vez; no martillar minutos+Palma; no inventar permanente absoluto |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos tiempo→encaja (y a menudo abrir) | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| COMUN_PORTUGAL (fiscal / seguro / tarjeta / Cunqueiro) | Bloques repetidos: régimen fiscal cerrado 2024; seguro privado; tarjeta europea/española; SNS lento | Hecho nacional — no capa municipal | COMUN_PORTUGAL | Extraer a doc común; conservar solo consecuencia local; **no corregir** aquí |

### 8.5 P4 / identidad

- **Preservar:** Santa Luzia, Praça, puente Eiffel, Gil Eannes, Lima, Praia Norte/Cabedelo.
- **Identidad:** ciudad completa de referencia del Alto Minho.
- **Peaje:** playa depende microzona; no catálogo turístico.

### 8.6 Vida cotidiana soportada

| Elemento | Clasificación | Base repo |
|---|---|---|
| Autonomía | YA SOPORTADO | `MUY ALTA` |
| Coche | YA SOPORTADO | `Baja en centro bien situado; mayor para playas/parroquias exteriores.` |
| Servicios cotidianos | YA SOPORTADO | servicios `9` — No falta nada |
| Paseo | YA SOPORTADO | Marginal del Lima, centro y ecovia; Cabedelo como extensión según vivienda/modo. |
| Pendiente | N/A / null | `null` |
| Microzona | YA SOPORTADO / INFRAUSADO | adv: — / microPrecio: Centro histórico, Cabedelo y parroquias costeras … |
| Compra enero / estacionalidad | YA SOPORTADO en relato+capa | Ciudad plenamente anual. |
| Transporte relevante | YA SOPORTADO | Linha do Minho y bus urbano/interurbano. |
| Nombres café / horarios exactos | NO SOPORTADO | — |
| Totales A/B en prosa | NO SOPORTADO (viven en tabla) | A_3hab `273429` / B_3hab `220847` |
| Burocracia nacional (fiscal/NIF/CRUE) | COMUN_PORTUGAL | No repetir 11×; ver §13 |

### 8.7 Reality toll

- Autonomía **MUY ALTA** (ciudad)
- Playa **DEPENDE MICROZONA**
- Hospital ~**5′** en ciudad
- Aero Porto ~**50′**
- Precio **2337**

### 8.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | Auditoría ~2100 (histórico prosa/estudio) | **2337** | OBSOLETO — capa prevalece |
| A_3hab / B_3hab | No narrar totales | `273429` / `220847` | TablaPrecios |
| casaQueBuscar / reventa | Cualitativo | Ver tabla capa | `casaQueBuscar` truncado `…` → **DESEABLE** texto completo (no bloquea v1); `mercadoReventa` truncado `…` → **DESEABLE** texto completo (no bloquea v1) |
| «000 euros» | Presente tras remitir a capa (varios) | — | Borrar resto roto |

### 8.9 Clima: deuda / duplicación (NO correct)

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en `tiempo` + `encaja` (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `viana-do-castelo` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_32.**

### 8.10 Mar / río / playa / paseo

- **playaCotidiana:** `DEPENDE MICROZONA`
- **Modo:** La ciudad vive río/estuario; Cabedelo aporta playa atlántica próxima pero separada del centro por el Lima.
- **paseoCotidiano:** Marginal del Lima, centro y ecovia; Cabedelo como extensión según vivienda/modo.
- **pendiente:** `null`
- Praia Norte/Cabedelo según microzona; Lima paseo.
- No contradecir la etiqueta de playa de la capa.

### 8.11 Frontera / España

- Ciudad portuguesa de referencia; frontera no define el día a día.
- No mezclar con Valença.

### 8.12 COMUN_PORTUGAL (local excerpts — NO correct)

- **fiscal cerrado 2024** → COMUN_PORTUGAL: …resto del año pide mirar conexiones. El régimen fiscal especial para residentes extranjeros se cerró en 2024.",  "…
- **seguro privado portugués** → COMUN_PORTUGAL: …el argumento fuerte. Hay que contar con seguro privado portugués —Trofa Saúde, Braga, alrededor de cincuenta minutos—, por…
- **tarjeta española de diario** → COMUN_PORTUGAL: … público portugués es más lento. No hay tarjeta española de uso habitual; sí hospital comarcal delante.",  "Porto–Sá…
- **Trofa Saúde** → COMUN_PORTUGAL: …ue contar con seguro privado portugués —Trofa Saúde, Braga, alrededor de cincuenta minutos—, porque el pú…
- **SNS / público más lento** → COMUN_PORTUGAL: …ededor de cincuenta minutos—, porque el público portugués es más lento. No hay tarjeta española de uso habitual; sí hospital comar…

**Tratamiento:** marcar, no corregir; extraer a §13; conservar solo consecuencia local (minutos hospital/aero/coche).

### 8.13 No soportado / no inventar

- ~2100 vigente
- Chip 9/10
- Playa a la puerta desde cualquier barrio
- Catálogo turístico sin peaje
- Palma permanente

---

## 9. Ponte de Lima

### 9.1 Relato actual completo

> CITA LITERAL — `web/src/lib/relatos-alto-minho.ts` clave `ponte-de-lima` (objeto completo).

```ts
ponte-de-lima: {
 escala: "Villa romana sobre el Lima",
 abrir: [
 "Ponte de Lima se siente, al cruzar el puente de piedra, como la villa que el interior del Minho enseña cuando quiere ser hermosa. Unos cuarenta y cuatro mil habitantes en el concelho —unos tres mil en la villa—: puente romano-medieval sobre el Lima, plaza de la feria, Feiras Novas en septiembre —feria grande: ruido, afluencia, aparcamiento justo—, Festival de Jardines, Ecovia do Lima, Lagoas de Bertiandos —humedales protegidos—, viñedo de Loureiro y golf. Es interior de franja B: Cabedelo, la playa de surf de Viana, anda alrededor de los veinticinco minutos.",
 "Quien vive aquí es gente local, familias del valle y quien busca villa de piedra con hospital cerca. Un martes de noviembre se camina el puente y la plaza: servicios 6/10. El Hospital Conde de Bertiandos —comarcal— queda a unos cinco minutos. El aeropuerto de Porto anda alrededor de los cincuenta y cinco —Palma en verano—. Para la villa compacta no hace falta coche; para el mar y Braga, sí.",
 "En verano el valle calienta: media alrededor de 21,5 °C y unos 20 a 25 días por encima de 30 °C —el calor que en Caminha o Âncora casi no aparece—. En invierno, niebla alta de valle que levanta tarde. Las Feiras Novas de septiembre llenan la villa como pocas fiestas del norte: hay que contarlas como parte del calendario, no como excepción. Quien busque verano suave de costa deberá mirar el Atlántico; quien busque piedra, río y feria entenderá Ponte de Lima.",
 "En primavera merece la pena el Festival de Jardines; otoño, la Ecovia y las Lagoas sin calor. Si solo conoces un día de puente en sol, te llevas la imagen de folleto. Si has visto julio de valle y un martes de niebla, ya puedes decidir si de verdad quieres vivir aquí. Fibra sí; poca obra nueva en el casco.",
 "Ponte de Lima no promete orilla atlántica a la puerta. Promete la villa más antigua de Portugal —fuero del XII—, puente, feria y hospital a cinco a cambio de calor estival, niebla y mar a veinticinco minutos. Quien acepte ese trato entenderá el sitio al primer cruce de piedra sobre el Lima.",
 ],
 tiempo: [
 "Si vienes de Baleares, el valle pide otra paciencia. Ponte de Lima suma unas 2.400 a 2.450 horas de sol y unos 78 a 80 días despejados, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.600 a 1.700 milímetros en unos 118 a 120 días. El viento es bajo; la niebla, alta de valle en invierno —mañanas blancas que tardan en abrirse—.",
 "El verano ronda 21,5 °C, con unos 20 a 25 días sobre 30 °C: el termómetro aprieta en julio y agosto, lejos del fresco costero de 20,5 °C. La praia fluvial ofrece baño de río; Cabedelo queda a unos veinticinco minutos con agua atlántica de 16 a 18 °C. Julio y agosto llueven poco, pero el calor de valle no es el de Mallorca en el mismo sentido: aquí vuelve el verano que muchos querían dejar. Conviene probar julio caluroso y un diciembre de niebla.",
 ],
 vivir: [
 "El invierno en Ponte de Lima es niebla alta de valle que levanta tarde: mañanas blancas, humedad de río y terraza que se usa poco. Conviene calefacción, aislamiento y orientación al sol en casa de villa o quinta. Probar un martes de niebla y un julio caluroso evita firmar solo por el puente en sol de primavera.",
 "Sin coche, la villa compacta se resuelve a pie —servicios 6/10—; para el mar y Braga hace falta vehículo. Un martes de noviembre se camina el puente y la plaza. Las Feiras Novas de septiembre llenan la villa: ruido, afluencia, aparcamiento justo. En enero hay vida de villa de piedra, no de costa vacía.",
 "Quien vive aquí es gente local y familias del valle. El portugués manda; la escala es de villa interior minhota —feria, jardines, Loureiro—, no de frontera con gallego a la puerta como Valença. La integración pasa por plaza, Ecovia y calendario de feria. Si solo conoces el Festival de Jardines, te llevas la imagen de folleto. Si has visto julio de valle, ya puedes decidir si de verdad quieres vivir aquí.",
 "El Hospital Conde de Bertiandos —comarcal— queda a unos cinco minutos: dato raro y valioso en la zona. Hay que contar con seguro privado portugués —Trofa Saúde, Braga, a unos cuarenta minutos, de los mejores tiempos privados del Alto Minho—. Sanidad comarcal delante; privado de referencia en Braga. No hay tarjeta española de diario.",
 "Porto–Sá Carneiro anda alrededor de los cincuenta y cinco minutos —Palma en verano—. Ir y volver a Mallorca pasa por Porto; Cabedelo a veinticinco minutos cubre el mar, no el avión. El régimen fiscal especial para residentes extranjeros se cerró en 2024.",
 "El casco y el entorno del río ofrecen viviendas de villa; hay fibra. El modelo es piso o casa de villa, y quintas con viñedo de Loureiro cuando el terreno pesa. En el valle hay que contar con calor de julio–agosto, niebla de invierno y humedad. Imaginar ambas estaciones y las Feiras Novas antes de comprar.",
 ],
 historia: [
 "El puente romano-medieval y la plaza de la feria explican Ponte de Lima: la villa más antigua de Portugal —fuero en el siglo XII—, capa romana sobre el Lima y feria viva. La leyenda del río del olvido —soldados que no querían cruzar— sigue en la ficha local; la piedra del puente sigue en el gesto diario. Las Feiras Novas de septiembre y el Festival de Jardines marcan el calendario con afluencia real: no son notas al margen.",
 "La Ecovia do Lima, las Lagoas de Bertiandos —paisaje protegido de humedal— y el viñedo de Loureiro completan la ficha de río y verde. Axis Golfe queda en el concelho; el Gerês, a hora y cuarto. Lo que conviene saber es de villa romana, feria y valle del Lima: puente, plaza y agua, no lista seca de fechas.",
 ],
 fuera: [
 "El puente, la plaza y la Ecovia do Lima —paseo llano junto al río— son la tarde de diario. Se cruza la piedra, se mira el agua, se vuelve al café de villa sin pedir océano para cada gesto.",
 "Las Lagoas de Bertiandos cubren paseo de naturaleza: humedales, aves, sombra cuando el valle aprieta. Cabedelo y Viana andan alrededor de veinticinco o treinta minutos cuando apetezca Atlántico —surf, ciudad, Praia Norte—. Axis Golfe Ponte de Lima queda en el concelho; el Parque Nacional da Peneda-Gerês, a unos 1 h 15.",
 "No hay playa de mar en el municipio. Quien quiera océano acepta el trayecto; quien quiera río y jardín, no. Esa es la honestidad del interior minhoto.",
 ],
 casa: [
 "El casco y el entorno del río ofrecen viviendas de villa; hay fibra. El modelo es piso o casa de villa, y quintas con viñedo de Loureiro cuando el terreno pesa: desde unos 200.000–300.000 euros. En el valle hay que contar con calor de julio–agosto, niebla de invierno y humedad; conviene orientación y probar ambas estaciones.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros. Quien busque precio de interior y piedra encontrará holgura frente a Moledo o Âncora; quien busque primera línea de Atlántico, no.",
 "Los servicios son 6/10. El hospital comarcal queda a unos cinco minutos —dato raro y valioso en la zona—. Porto–Sá Carneiro está a unos cincuenta y cinco. Hay que contar con seguro privado portugués —Trofa Saúde, Braga, a unos cuarenta minutos, de los mejores tiempos privados del Alto Minho—. Conviene firmar tras un julio de valle y un martes de niebla.",
 ],
 encaja: {
 si: [
 "Encaja si se quiere la villa más antigua de Portugal sobre el Lima —puente romano-medieval, plaza de la feria, Festival de Jardines, Ecovia y Lagoas de Bertiandos— con vida de villa todo el año y hospital comarcal a unos cinco minutos. Un martes de noviembre se camina el puente y la plaza; los servicios alcanzan 6/10. Quien priorice río, piedra y precio de interior frente a nortada atlántica encontrará aquí escala reconocible; las quintas con viñedo de Loureiro añaden terreno cuando el presupuesto lo permite. Cabedelo queda a unos veinticinco minutos cuando apetezca mar.",
 "También encaja para quien acepte el año entero junto al río y reserve el océano para la tarde. Porto–Sá Carneiro anda alrededor de los cincuenta y cinco minutos. Llueven alrededor de 1.700 milímetros en unos 120 días; la niebla de valle es alta en invierno. Conviene seguro privado portugués: Trofa Saúde, Braga, queda a unos cuarenta minutos —de los mejores tiempos privados de la zona—.",
 ],
 no: [
 "No encaja si se busca el verano suave de la costa minhota. Aquí el valle calienta: media alrededor de 21,5 °C y unos veinte a veinticinco días al año por encima de 30 °C —el calor que en Caminha o Âncora casi no aparece—. Tampoco si la playa debe quedar a pie: no hay orilla atlántica en el municipio. Las Feiras Novas de septiembre llenan la villa: ruido, afluencia y aparcamiento justo.",
 "Tampoco encaja si se busca el régimen fiscal especial para residentes extranjeros —cerrado en 2024— o un diciembre sin niebla de valle. Quien se decida solo tras un día de jardines en primavera, sin probar julio caluroso ni un martes de niebla, se llevará una villa distinta de la foto turística del puente.",
 ],
 veredicto:
 "Veredicto: Ponte de Lima es villa romana de interior —puente, feria y hospital a cinco a cambio de calor de valle, niebla y mar a veinticinco minutos—. Buscaría tres habitaciones en villa o quinta con acceso al puente, tras probar un julio de valle y un diciembre de niebla. Se ganan, Ecovia, Loureiro y el comarcal delante; se aceptan 20–25 días de calor fuerte, aeropuerto a unos cincuenta y cinco minutos y seguro privado portugués. Si mandan verano fresco y Atlántico a pie, Âncora o Afife-Carreço; si hay que contar con piedra, río y precio de interior con sanidad cerca, Ponte de Lima es la apuesta del valle del Lima.",
 },
 fotosAbrir: [
 { src: "/fotos/alto-minho/ponte-villa.jpg", pie: "Ponte de Lima: villa sobre el Lima" },
 ],
 fotosHistoria: [
 { src: "/fotos/alto-minho/ponte-jardines.jpg", pie: "Jardines y orilla del Lima en Ponte de Lima" },
 ],
 fotosFuera: [
 { src: "/fotos/alto-minho/ponte-bertiandos.jpg", pie: "Lagoas de Bertiandos, Ponte de Lima" },
 ],
 creditoFotos: credito,
 }
```

**Señales de auditoría (scan local, sin internet):**

- **X/10** (4 muestras):
  - … puente y la plaza: servicios 6/10. El Hospital Conde de Bertian…
  - … se resuelve a pie —servicios 6/10—; para el mar y Braga hace fa…
  - …co, no.",  "Los servicios son 6/10. El hospital comarcal queda a…
  - …plaza; los servicios alcanzan 6/10. Quien priorice río, piedra y…
- **broken000** (2 muestras):
  - … pesa: desde unos 200.000–300.000 euros. En el valle hay que contar c…
  - …una media municipal en prosa. 000 euros. Quien busque precio de inter…
- **precio_narr** (3 muestras):
  - …no pesa: desde unos 200.000–300.000 euros. En el valle hay que contar c…
  - … del mes; aquí no se fija una media municipal en prosa. 000 euros. Quien bu…
  - …una media municipal en prosa. 000 euros. Quien busque precio de inter…
- **clima** (5 muestras):
  - …asi no aparece—. En invierno, niebla alta de valle que levanta tar…
  - …julio de valle y un martes de niebla, ya puedes decidir si de verd…
  - …co a cambio de calor estival, niebla y mar a veinticinco minutos. …
  - … Lima suma unas 2.400 a 2.450 horas de sol y unos 78 a 80 días despejado…
  - …as de sol y unos 78 a 80 días despejados, frente a las 2.800 horas y…
- **hospital** (5 muestras):
  - …ien busca villa de piedra con hospital cerca. Un martes de noviembre…
  - … la plaza: servicios 6/10. El Hospital Conde de Bertiandos —comarcal…
  - …: servicios 6/10. El Hospital Conde de Bertiandos —comarcal— queda a unos cinco…
  - …ero del XII—, puente, feria y hospital a cinco a cambio de calor est…
  - …ad quieres vivir aquí.",  "El Hospital Conde de Bertiandos —comarcal…
- **Palma** (2 muestras):
  - …dor de los cincuenta y cinco —Palma en verano—. Para la villa com…
  - …os cincuenta y cinco minutos —Palma en verano—. Ir y volver a Mal…
- **fiscal** (3 muestras):
  - …cubre el mar, no el avión. El régimen fiscal especial para residentes extr…
  - …ara residentes extranjeros se cerró en 2024.",  "El casco y el entorno de…
  - …Tampoco encaja si se busca el régimen fiscal especial para residentes extr…
- **seguro** (5 muestras):
  - …n la zona. Hay que contar con seguro privado portugués —Trofa Saúde, Braga…
  - …e referencia en Braga. No hay tarjeta española de diario.",  "Porto–Sá Carne…
  - …a y cinco. Hay que contar con seguro privado portugués —Trofa Saúde, Braga…
  - …es alta en invierno. Conviene seguro privado portugués: Trofa Saúde, Braga…
  - …s cincuenta y cinco minutos y seguro privado portugués. Si mandan verano f…
- **frontera** (1 muestras):
  - …a, jardines, Loureiro—, no de frontera con gallego a la puerta como …
- **metro_tren** (3 muestras):
  - …lrededor de 1.600 a 1.700 milímetros en unos 118 a 120 días. El v…
  - … 25 días sobre 30 °C: el termómetro aprieta en julio y agosto, le…
  - …lueven alrededor de 1.700 milímetros en unos 120 días; la niebla …
- **sol** (2 muestras):
  - …nte de Lima suma unas 2.400 a 2.450 horas de sol y unos 78 a 80 días despejado…
  - ….450 horas de sol y unos 78 a 80 días despejados, frente a las 2.800 horas y…

### 9.2 Capa 2026 completa

Fuente: `web/src/data/municipios-alto-minho.json` · slug `ponte-de-lima`.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `137397` |
| `A_3hab` | `190242` |
| `B_2hab` | `110975` |
| `B_3hab` | `153657` |
| `advertenciaMicrozona` | `null` *(n.d. / ausente)* |
| `aeropuertoMin` | `55` |
| `aeropuertoPractico2026` | Porto |
| `aeropuertos` | Porto 71 km · 55 min (Palma: verano); Vigo 85 km · 65 min (Palma: verano); Santiago 154 km · 115 min (Palma: casi todo el año) |
| `autonomiaCotidiana` | FUERTE |
| `casaQueBuscar` | Vivienda cómoda y accesible, 2–3 dormitorios, exterior, servicios cotidianos ... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Más favorable |
| `comunicaciones` | A-27 / N-201 |
| `comunicacionesNota10` | `7` |
| `cubiertos` | `112` |
| `dependenciaCocheTexto` | Baja-media en centro; coche para costa y servicios superiores. |
| `despejados` | `78` |
| `estacionalidad2026` | Villa anual con turismo cultural, ferias y romerías como capa adicional. |
| `fibra` | Sí |
| `franja` | B |
| `hospitalMin` | `5` |
| `hospitalPractico2026` | Hospital Conde de Bertiandos para atención básica; Santa Luzia (Viana) para mayor complejidad |
| `hospitalPriv` | 40 km · 40 min · Trofa Saúde (Braga) |
| `hospitalPub` | 2 km · 5 min · Conde de Bertiandos (Ponte de Lima) |
| `hospitalReferencia2026` | ULSAM / Santa Luzia |
| `humedad` | `79` |
| `lat` | `41.767` |
| `lluviaDias` | `120` |
| `lluviaMm` | `1700` |
| `lon` | `-8.584` |
| `mapa` | 80_ponte_de_lima.png |
| `mercadoReventa` | Mercado intermedio: base residencial propia y/o demanda exterior. Priorizar u... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | Centro de la villa puede cotizar por encima del promedio municipal; no mezclar sin explicación. |
| `minBano` | `25` |
| `minCosta` | `25` |
| `municipio` | Ponte de Lima |
| `n` | `80` |
| `niebla` | Alta |
| `obraNueva` | Poca |
| `pais` | Portugal |
| `palmaDirecta2026` | Porto: Palma observada en la operativa de 2026; rutas y frecuencias cambian por temporada, comprobar antes de viajar. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Santiago (casi todo el año) · 115 min |
| `paseoCotidiano` | Ecovia/ribera del Lima y puente histórico; paseo llano y extensible. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Paseo fluvial y vida de villa excelentes, pero sin mar y con hospital de alta complejidad en Viana. |
| `playaBano` | Cabedelo (Viana) |
| `playaCotidiana` | NO |
| `playaCotidianaModo` | Vida fluvial en el Lima; no es localidad de playa marina. |
| `precioM2` | `1626` |
| `provincia` | Viana do Castelo |
| `radioCotidiano` | Villa muy completa para su escala: comercio, mercado, cultura, servicios y paseo fluvial. |
| `radioSalida` | Viana para hospital de mayor capacidad y costa; Braga/Porto para mayor escala. |
| `sanidadPrimaria2026` | Cuidados de saúde primários locales |
| `servicios` | `6` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | Tiene: villa completa. Falta: playa en el municipio |
| `slug` | ponte-de-lima |
| `solHoras` | `2400` |
| `tempAgua` | 16-18 |
| `tempInvierno` | `9.0` |
| `tempVerano` | `21.5` |
| `transporteRelevante2026` | A-27 / A-3; bus Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | Hospital Conde de Bertiandos dispone de urgência básica según red regional |
| `viento` | Baja |
| `zona` | Alto Minho (PT) |

**Highlights capa (autoridad):** autonomia `FUERTE` · playa `NO` · precioM2 `1626` · servicios `6` · hospitalMin `5` · aeroMin `55`.

### 9.3 Auditorías / plan existentes

**NO PLAN_EDITORIAL** específico Portugal (no hay `PLAN_EDITORIAL_PORTUGAL_*.md`).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n=80 → claves 73–83):

```
| 80 | Ponte de Lima | Alto Minho (PT) | — | precio relato ~1500 vs ficha 1626 (desvío); usa cerca/a un paso | menciona hospital también en capa Sanidad; repite nota servicios X/10 (+3) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 80 | Ponte de Lima | Alto Minho (PT) | no | — |
```

**estudio_zonas.md** (histórico — **NO** autoridad 2026):

<details><summary>Recorte estudio</summary>

**Ponte de Lima (nº 80).** 44.000 habitantes en el concelho (3.000 en la villa); puente romano-medieval, plaza de la feria, Feiras Novas (septiembre), Festival de Jardines, Ecovia do Lima, Lagoas de Bertiandos, viñedo de Loureiro, golf. Interior: franja B (Cabedelo a 25). Verano caluroso (21,5 °C, 20-25 días > 30 °C), niebla alta en invierno. Servicios 6/10. Hospital a 5 (comarcal). Aeropuerto 55. Precio 1.500: 3 habitaciones 142.000; quinta con viñedo 200.000-300.000. Para quién: la villa más bonita del interior, para quien no le importe el calor de julio-agosto ni la niebla de diciembre-enero, y tenga el mar a 25.

Si yo fuera tú

Afife, Carreço o Areosa (aldea de granito con monte y mar, Viana a 10-15) o Vila Praia de Âncora (villa con servicios y playa abrigada). Es mi tercera opción de toda la tabla, con la sanidad privada y el papeleo portugués como precio, y el viento de las t

</details>

### 9.4 Auditoría relato ↔ capa

Estados permitidos: `ALINEADO` · `OBSOLETO` · `DUPLICA_CAPA` · `P4_PRESERVAR` · `SOPORTADO_PERO_INFRAUSADO` · `NO_SOPORTADO_NO_INVENTAR` · `REQUIERE_VERIFICACION_EXTERNA` · `COMUN_PORTUGAL`

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | Chip X/10 repetido en abrir/casa/encaja | `servicios` **6**; Tiene: villa completa. Falta: playa en el municipio | DUPLICA_CAPA | Omitir chip; narrar autonomía cualitativa |
| Precio €/m² | Auditoría/estudio ~1500; prosa puede citar cifras o remitir + «000 euros» | `precioM2` **1626** | OBSOLETO | Capa prevalece; omitir cifras; TablaPrecios |
| Prosa rota «000 euros» | Tras remitir a capa queda fragmento «000 euros» (+ totales sueltos a veces) | Cifras viven en `precioM2` / A/B / TablaPrecios | OBSOLETO | Borrar resto roto; no reponer €/m² históricos en prosa |
| Interior / río Lima — NO mar | Puente, feria, Ecovia; Cabedelo ~25′ salida | playa **NO** (NO) | ALINEADO | Río Lima cotidiano; no inventar playa marina |
| Hospital | Conde en villa ~5′; Santa Luzia complejidad | `hospitalPractico2026`=Hospital Conde de Bertiandos para atención básica; Santa Luzia (Viana) para may… | ALINEADO | Comarcal vs complejidad; una vez |
| Aeropuerto / Palma | Minutos aero + «Palma en verano» (tono permanente posible) | `aeropuertoMin` 55; `aeropuertoPractico2026`=Porto; `palmaDirecta2026` matiza | DUPLICA_CAPA / ALINEADO (matiz temporada) | Consecuencia una vez; no martillar minutos+Palma; no inventar permanente absoluto |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos tiempo→encaja (y a menudo abrir) | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| COMUN_PORTUGAL (fiscal / seguro / tarjeta / Cunqueiro) | Bloques repetidos: régimen fiscal cerrado 2024; seguro privado; tarjeta europea/española; SNS lento | Hecho nacional — no capa municipal | COMUN_PORTUGAL | Extraer a doc común; conservar solo consecuencia local; **no corregir** aquí |
| P4 puente / Feiras Novas / Loureiro | Identidad villa interior | capa + estudio | P4_PRESERVAR | Solo soporte repo |

### 9.5 P4 / identidad

- **Preservar:** puente romano-medieval, Feiras Novas, Ecovia/Lagoas, Loureiro.
- **Identidad:** villa interior río Lima — **NO mar**.
- **Peaje:** calor valle; niebla invierno; mar = salida.

### 9.6 Vida cotidiana soportada

| Elemento | Clasificación | Base repo |
|---|---|---|
| Autonomía | YA SOPORTADO | `FUERTE` |
| Coche | YA SOPORTADO | `Baja-media en centro; coche para costa y servicios superiores.` |
| Servicios cotidianos | YA SOPORTADO | servicios `6` — Tiene: villa completa. Falta: playa en el municipio |
| Paseo | YA SOPORTADO | Ecovia/ribera del Lima y puente histórico; paseo llano y extensible. |
| Pendiente | N/A / null | `null` |
| Microzona | YA SOPORTADO / INFRAUSADO | adv: — / microPrecio: Centro de la villa puede cotizar por encima del p… |
| Compra enero / estacionalidad | YA SOPORTADO en relato+capa | Villa anual con turismo cultural, ferias y romerías como capa adicional. |
| Transporte relevante | YA SOPORTADO | A-27 / A-3; bus Interpretar por utilidad cotidiana real, no por mera existencia nominal d… |
| Nombres café / horarios exactos | NO SOPORTADO | — |
| Totales A/B en prosa | NO SOPORTADO (viven en tabla) | A_3hab `190242` / B_3hab `153657` |
| Burocracia nacional (fiscal/NIF/CRUE) | COMUN_PORTUGAL | No repetir 11×; ver §13 |

### 9.7 Reality toll

- Autonomía **FUERTE**
- Playa **NO** — río Lima, NO mar
- Hospital ~**5′** comarcal
- Aero ~**55′**
- Precio **1626**; calor/niebla valle

### 9.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | Auditoría ~1500 (histórico prosa/estudio) | **1626** | OBSOLETO — capa prevalece |
| A_3hab / B_3hab | No narrar totales | `190242` / `153657` | TablaPrecios |
| casaQueBuscar / reventa | Cualitativo | Ver tabla capa | `casaQueBuscar` truncado `…` → **DESEABLE** texto completo (no bloquea v1); `mercadoReventa` truncado `…` → **DESEABLE** texto completo (no bloquea v1) |
| «000 euros» | Presente tras remitir a capa (varios) | — | Borrar resto roto |

### 9.9 Clima: deuda / duplicación (NO correct)

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en `tiempo` + `encaja` (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `ponte-de-lima` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_32.**

### 9.10 Mar / río / playa / paseo

- **playaCotidiana:** `NO`
- **Modo:** Vida fluvial en el Lima; no es localidad de playa marina.
- **paseoCotidiano:** Ecovia/ribera del Lima y puente histórico; paseo llano y extensible.
- **pendiente:** `null`
- **NO mar**; río Lima / Ecovia; Cabedelo salida.
- No contradecir la etiqueta de playa de la capa.

### 9.11 Frontera / España

*(No es eje frontera Galicia–Portugal de rutina; omitir o solo salida ocasional si el relato lo menciona.)*

### 9.12 COMUN_PORTUGAL (local excerpts — NO correct)

- **fiscal cerrado 2024** → COMUN_PORTUGAL: …o minutos cubre el mar, no el avión. El régimen fiscal especial para residentes extranjeros se cerró en 2024.",  "…
- **seguro privado portugués** → COMUN_PORTUGAL: … valioso en la zona. Hay que contar con seguro privado portugués —Trofa Saúde, Braga, a unos cuarenta minutos, de los mejo…
- **tarjeta española de diario** → COMUN_PORTUGAL: … privado de referencia en Braga. No hay tarjeta española de diario.",  "Porto–Sá Carneiro anda alrededor de los cinc…
- **Trofa Saúde** → COMUN_PORTUGAL: …ue contar con seguro privado portugués —Trofa Saúde, Braga, a unos cuarenta minutos, de los mejores tiemp…

**Tratamiento:** marcar, no corregir; extraer a §13; conservar solo consecuencia local (minutos hospital/aero/coche).

### 9.13 No soportado / no inventar

- ~1500 vigente
- Inventar playa marina cotidiana
- Chip 6/10
- Palma permanente
- Cascada minutos hospital

---

## 10. Esposende

### 10.1 Relato actual completo

> CITA LITERAL — `web/src/lib/relatos-litoral-norte.ts` clave `esposende` (objeto completo).

```ts
esposende: {
 escala: "Villa y dunas residenciales",
 abrir: [
 "Esposende se siente, al llegar por la A28 desde Porto, como la costa llana que Braga eligió para veranear entre pinos. Unos treinta y cuatro mil habitantes en el concelho: villa en el estuario del Cávado —paseo, puerto, mesas abiertas—, Ofir —urbanización de veraneo entre pinos, torres de los setenta y chalés—, Fão —villa antigua al sur del río—, Apúlia —molinos sobre las dunas, playa abierta— y Marinhas. El Parque Natural do Litoral Norte cubre pasarelas de madera sobre dunas a lo largo de unos dieciséis kilómetros entre Apúlia y la Foz do Cávado. No es ciudad-balneario de bloques: es villa y dunas residenciales con el Atlántico a pocos minutos.",
 "Quien vive aquí es gente local, familias de Braga y Porto que volvieron a quedarse, y quien busca calma frente a la primera línea de Póvoa. Un martes de noviembre se camina el estuario, se compra en la villa y se resuelve el día a día sin pedir un paseo de hormigón: servicios 6/10. El hospital comarcal de Póvoa / Vila do Conde queda a unos veinticinco minutos; el de Braga, a unos treinta. El aeropuerto de Porto–Sá Carneiro anda alrededor de los treinta y cinco —Palma en verano; más de ochenta destinos directos—. Para lo diario en casco o Ofir el coche ayuda; para el estuario a pie, no siempre hace falta.",
 "El tráfico es de costa llana casi todo el año. En julio y agosto lo cambia todo: Ofir y Apúlia reciben el veraneo de Braga y Porto, el aparcamiento se queda corto junto a las pasarelas y la nortada de tarde —viento norte fuerte de junio a agosto— marca terrazas y toallas. Hay obra nueva y fibra. Quien busque silencio absoluto de enero lo encontrará entre pinos; quien busque café en la villa también. Las dos cosas conviven aquí.",
 "La semana tiene rutinas claras: paseo del estuario, supermercado y centro de salud en la villa, pasarelas del parque cuando el cielo limpia. Primavera y otoño son buenas épocas para conocerlo: las dunas sin gentío, Fão con vida de villa antigua, el Cávado ancho. Si solo conoces un sábado de sol en Apúlia, te llevas la imagen de folleto. Si has visto un julio con nortada y un martes gris de noviembre, ya puedes decidir si de verdad quieres vivir aquí.",
 "El verano, sin embargo, tiene días que desbordan esa calma residencial. Fiestas locales y el veraneo llenan Ofir, Apúlia y el paseo con música, tráfico y afluencia unas semanas. Vivir junto a la playa o al estuario significa contar con noches más ruidosas y coches en las cunetas; hacia Marinhas o las calles interiores de la villa, el volumen baja. Quien se quede a vivir aquí acepta villa y dunas a cambio del máximo sol de la tabla y Braga y Porto a treinta–cuarenta minutos.",
 ],
 tiempo: [
 "Si vienes de Baleares, notará más viento y un cielo más gris que en Mallorca, más que un cambio de frío. Esposende suma unas 2.550 horas de sol y unos 85 días despejados —el máximo de la tabla—, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.200 a 1.300 milímetros en unos 105 a 108 días: los menos días de lluvia de la comparación, con julio y agosto casi secos —unos dos días al mes—. La diferencia de cielo se nota casi toda entre noviembre y abril; de junio a septiembre la terraza se usa, aunque la nortada de tarde pide abrigo o resguardo.",
 "El verano ronda 20 °C, con máximas alrededor de 25 °C y tres a seis días sobre 30 °C: mucho más fresco que el julio mallorquín sostenido. El estuario del Cávado ofrece la única agua abrigada de la zona; el Atlántico abierto anda entre 16 y 18 °C en agosto —frío, con olas—. El viento es alto; la niebla, media —nieblas de mar por la mañana en verano—. Conviene venir un día de nortada y un noviembre, no solo un sábado de sol en Ofir.",
 ],
 vivir: [
 "El invierno en Esposende pide acostumbrarse a un cielo más gris y a una casa más húmeda: de noviembre a abril la terraza se usa la mitad; niebla de mar, humedad y salitre en Ofir o Apúlia piden aislamiento y calefacción. Un martes gris de noviembre entre pinos enseña más que un sábado de sol. La colonia residencial enfría por dentro si la vivienda no está preparada.",
 "Sin coche, el estuario y parte de la villa se resuelven a pie; en Ofir el coche ayuda casi siempre. Los servicios son 6/10 —comercio y centro de salud en el casco; hospital fuera—. En enero hay café en la villa y silencio entre pinos; no es frente de bloques que vive solo de agosto. Quien elija Marinhas o calles interiores ganará menos ruido de temporada.",
 "Conviven gente local, familias de Braga y Porto que volvieron a quedarse, y quien busca calma frente a Póvoa. El portugués manda; la escala es de costa llana minhota con veraneo de interior. Julio y agosto llenan Ofir y Apúlia; la nortada de tarde marca terrazas. La integración pasa por villa, dunas y vecinos de urbanización, no por casino ni metro.",
 "El hospital comarcal de Póvoa / Vila do Conde queda a unos veinticinco minutos; el de Braga, a unos treinta; Trofa Saúde Braga, hacia los cuarenta. Hay que contar con seguro privado portugués —el público es más lento; no hay sanidad pública española de uso habitual—. Empadronarse aquí abre lo diario en villa; el hospital está fuera.",
 "Porto–Sá Carneiro anda alrededor de los treinta y cinco minutos —Palma en verano; más de ochenta destinos directos—. Ir y volver a Mallorca es más cómodo que desde el Alto Minho costero; conviene mirar el calendario de temporada. El régimen fiscal especial para residentes extranjeros no aplica como ventaja: se vive en Portugal.",
 "En la villa y en Ofir–Apúlia hay pisos, chalés entre pinos y torres de los setenta; hay obra nueva y fibra. El modelo es vivienda residencial con duna o estuario cerca, no solo bloque de frente. En primera línea hay que contar con nortada, salitre y ocupación de verano. Tres habitaciones suelen pedir cinco–diez minutos hasta la playa; comprobar una tarde de viento antes de comprar.",
 ],
 historia: [
 "El estuario del Cávado explica Esposende mejor que cualquier bloque de primera línea: villa de desembocadura, puerto y orilla dulce-salada mucho antes del veraneo entre pinos. Fão —villa antigua al sur del río— conserva trama de piedra y memoria de paso; la villa de Esposende creció mirando la boca del Cávado, no como ciudad-balneario inventada de golpe.",
 "Ofir nació como colonia de veraneo de Braga: torres de los setenta, chalés bajo pinar, la idea de costa residencial sin el paseo de bloques de Póvoa. Apúlia marca la otra imagen típica: molinos de viento sobre las dunas —imagen que resume el Parque Natural do Litoral Norte— y playa abierta al Atlántico. Marinhas y el paseo de la villa completan un relato de costa llana: estuario, dunas protegidas y veraneo entre pinos, no casino ni metro.",
 ],
 fuera: [
 "Si solo hay tiempo para un baño cerca, ese baño puede ser Ofir —arena junto a pinos y urbanización— o Apúlia —playa abierta, molinos detrás—. El agua atlántica anda entre 16 y 18 °C: fresca, a veces con un golpe de frío, nunca tibia como Mallorca. Un martes de junio puedes tener casi toda la arena; un domingo de agosto el aparcamiento junto a las pasarelas se queda corto. Es playa de diario residencial, no de resort de bloques.",
 "El estuario del Cávado cambia el registro: agua más abrigada, paseo de villa, puerto, la sensación de río abriéndose al océano. Ahí se baña quien no quiere pelear con la nortada abierta. Las pasarelas del Parque Natural —unos dieciséis kilómetros entre Apúlia y la Foz do Cávado— son la tarde llana sobre dunas: madera, viento, aves, sin pedir un paseo de hormigón.",
 "Fão aporta villa antigua a pocos minutos. Póvoa queda alrededor de veinticinco minutos hacia el sur —casino, metro, más ciudad—; Braga, unos treinta hacia el interior; Porto, unos treinta–cuarenta. Las sierras de Rates y Franqueira son colinas de 300–400 m; Gerês anda a hora y media. Quien viva aquí acepta dunas y estuario como paisaje de diario y la montaña real como escapada.",
 ],
 casa: [
 "En la villa y en Ofir–Apúlia hay pisos, chalés entre pinos y torres de los setenta; hay obra nueva y fibra. El modelo no es solo bloque de frente: es vivienda residencial con duna o estuario cerca. En primera línea hay que contar con nortada, salitre y ocupación de verano; conviene comprobar una tarde de viento fuerte, no solo un sábado de sol.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros. Tres habitaciones rondan 269.000 euros —fuera de la orilla asequible habitual; entran a unos cinco–diez minutos de la playa—. Quien mire solo primera línea abierta al Atlántico deberá aceptar viento y precio; quien acepte un poco de distancia gana pinos y calma.",
 "Los servicios son 6/10: villa completa para lo diario; hospital fuera. Póvoa a unos veinticinco minutos; Braga, a unos treinta; Trofa Saúde Braga, hacia los cuarenta. Porto–Sá Carneiro está a unos treinta y cinco. Hay que contar con seguro privado portugués —el público es más lento; no hay sanidad pública española de uso habitual—. Conviene probar nortada y un noviembre antes de comprar.",
 ],
 encaja: {
 si: [
 "El Atlántico a pocos minutos importa más que la ciudad-balneario de bloques. Aquí el día a día es villa en el estuario del Cávado —paseo, puerto— más Ofir entre pinos —urbanización de veraneo de Braga, torres de los setenta y chalés— y Apúlia —molinos sobre las dunas, playa abierta—. Las pasarelas del Parque Natural do Litoral Norte —unos dieciséis kilómetros entre Apúlia y la Foz do Cávado— dan la tarde de diario sin pedir un paseo de hormigón. El agua abierta anda entre dieciséis y dieciocho grados en agosto: fría, con olas y viento de tarde; para bañarse con calma queda el estuario o la piscina. A cambio se gana el máximo sol de la tabla —unas 2.550 horas, unos ochenta y cinco días despejados— y Braga y Porto a treinta–cuarenta minutos. Quien quiera calma residencial frente a la primera línea de Póvoa o Vila do Conde encontrará aquí la opción que el estudio elige en la zona.",
 "También encaja para quien acepte servicios de villa 6/10 —comercio y centro de salud en el casco; hospital fuera— a cambio de dunas, pinos y un metro. Dos habitaciones en franja asequible rondan 194.000 euros; tres habitaciones entran si se aceptan cinco–diez minutos hasta la playa. Porto–Sá Carneiro queda a unos treinta y cinco minutos: Palma en verano y más de ochenta destinos directos. Fibra sí; obra nueva sí.",
 ],
 no: [
 "No encaja si el mar debe estar templado como en Mallorca o si la terraza de junio a agosto debe usarse sin nortada: el viento de tarde es alto y no se arregla eligiendo otra calle en Ofir. Tampoco si se buscan casas bajas en un frente de ciudad, montaña detrás —aquí solo hay colinas de Rates y Franqueira a 300–400 m; Gerês a hora y media— o servicios 8/10 a pie como en Póvoa y Vila do Conde: Braga cubre lo que la villa no da, a unos treinta minutos.",
 "La sanidad no es la tarjeta española de diario. El hospital comarcal Póvoa / Vila do Conde queda a unos veinticinco minutos; el de Braga, a unos treinta; Trofa Saúde Braga, hacia los cuarenta. En Portugal el público es más lento y el estudio recomienda seguro privado —como en el Alto Minho—; no hay sanidad pública española de uso habitual. Quien se decida solo tras un sábado de sol en Apúlia, sin probar un julio con nortada ni un martes de noviembre en villa, se llevará una sorpresa.",
 ],
 veredicto:
 "Veredicto de quien mira la costa llana al norte de Porto: Esposende encaja como villa y dunas residenciales —tres habitaciones a cinco–diez minutos de la playa en Ofir o Apúlia, o piso hacia el estuario, no en la esquina más abierta al Atlántico— sobre todo si el máximo sol, el parque natural y la calma frente a los bloques importan más que el hospital a pie y el metro. Comprobar la nortada de tarde y un noviembre antes de comprar. Se ganan, estuario abrigado, Braga y Porto a 30–40 y Sá Carneiro a treinta y cinco; se aceptan servicios 6/10, mar frío 16–18 °C, sin montaña y seguro privado portugués en lugar de la tarjeta española.",
 },
 fotoIdentidad: {
 src: "/fotos/litoral-norte/esposende-identidad.jpg",
 pie: "Esposende: plaza y casas del centro, con la iglesia matriz al fondo",
 },
 fotosAbrir: [
 { src: "/fotos/litoral-norte/esposende-ofir.jpg", pie: "Ofir: pinos y urbanización en Esposende" },
 ],
 fotosHistoria: [
 { src: "/fotos/litoral-norte/esposende-fao.jpg", pie: "Fão: villa antigua en Esposende" },
 { src: "/fotos/litoral-norte/esposende-apulia.jpg", pie: "Molinos de Apúlia sobre las dunas" },
 ],
 fotosFuera: [
 { src: "/fotos/litoral-norte/esposende-estuario.jpg", pie: "Estuario del Cávado en Esposende" },
 { src: "/fotos/litoral-norte/esposende-dunas.jpg", pie: "Dunas y pasarelas del Parque Natural do Litoral Norte" },
 ],
 creditoFotos: credito,
 }
```

**Señales de auditoría (scan local, sin internet):**

- **X/10** (5 muestras):
  - … paseo de hormigón: servicios 6/10. El hospital comarcal de Póvo…
  - …si siempre. Los servicios son 6/10 —comercio y centro de salud e…
  - … calma.",  "Los servicios son 6/10: villa completa para lo diari…
  - …ien acepte servicios de villa 6/10 —comercio y centro de salud e…
  - …s a hora y media— o servicios 8/10 a pie como en Póvoa y Vila do…
- **broken000** (3 muestras):
  - …una media municipal en prosa. 000 euros. Tres habitaciones rondan 269…
  - … Tres habitaciones rondan 269.000 euros —fuera de la orilla asequible…
  - …n franja asequible rondan 194.000 euros; tres habitaciones entran si …
- **precio_narr** (5 muestras):
  - …ca. Caen alrededor de 1.200 a 1.300 milímetros en unos 105 a 108 …
  - … del mes; aquí no se fija una media municipal en prosa. 000 euros. Tres hab…
  - …una media municipal en prosa. 000 euros. Tres habitaciones rondan 269…
  - …s. Tres habitaciones rondan 269.000 euros —fuera de la orilla asequible…
  - … en franja asequible rondan 194.000 euros; tres habitaciones entran si …
- **clima** (5 muestras):
  - …to y un cielo más gris que en Mallorca, más que un cambio de frío. E…
  - …ío. Esposende suma unas 2.550 horas de sol y unos 85 días despejados —el…
  - …0 horas de sol y unos 85 días despejados —el máximo de la tabla—, fr…
  - …oras y 120 jornadas claras de Mallorca. Caen alrededor de 1.200 a 1.…
  - … olas—. El viento es alto; la niebla, media —nieblas de mar por la…
- **hospital** (5 muestras):
  - … hormigón: servicios 6/10. El hospital comarcal de Póvoa / Vila do C…
  - … centro de salud en el casco; hospital fuera—. En enero hay café en …
  - …o por casino ni metro.",  "El hospital comarcal de Póvoa / Vila do C…
  - … el de Braga, a unos treinta; Trofa Saúde Braga, hacia los cuaren…
  - …í abre lo diario en villa; el hospital está fuera.",  "Porto–Sá Carn…
- **Palma** (3 muestras):
  - …dedor de los treinta y cinco —Palma en verano; más de ochenta des…
  - … los treinta y cinco minutos —Palma en verano; más de ochenta des…
  - …unos treinta y cinco minutos: Palma en verano y más de ochenta de…
- **fiscal** (1 muestras):
  - …l calendario de temporada. El régimen fiscal especial para residentes extr…
- **seguro** (5 muestras):
  - … cuarenta. Hay que contar con seguro privado portugués —el público es más …
  - …a y cinco. Hay que contar con seguro privado portugués —el público es más …
  - …utos.",  "La sanidad no es la tarjeta española de diario. El hospital comarc…
  - …lento y el estudio recomienda seguro privado —como en el Alto Minho—; no h…
  - … frío 16–18 °C, sin montaña y seguro privado portugués en lugar de la tarj…
- **metro_tren** (5 muestras):
  - …e se siente, al llegar por la A28 desde Porto, como la costa ll…
  - …o largo de unos dieciséis kilómetros entre Apúlia y la Foz do Cáv…
  - …lrededor de 1.200 a 1.300 milímetros en unos 105 a 108 días: los …
  - …rbanización, no por casino ni metro.",  "El hospital comarcal de …
  - …neo entre pinos, no casino ni metro.",  ],  fuera: [  "Si solo ha…
- **sol** (2 muestras):
  - … de frío. Esposende suma unas 2.550 horas de sol y unos 85 días despejados —el…
  - …nas 2.550 horas de sol y unos 85 días despejados —el máximo de la tabla—, fr…

### 10.2 Capa 2026 completa

Fuente: `web/src/data/municipios-litoral-norte.json` · slug `esposende`.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `208039` |
| `A_3hab` | `288054` |
| `B_2hab` | `168032` |
| `B_3hab` | `232659` |
| `advertenciaMicrozona` | Esposende ciudad, Ofir/Fão y Apúlia ofrecen relaciones distintas entre servicios, playa y estuario. |
| `aeropuertoMin` | `35` |
| `aeropuertoPractico2026` | Porto |
| `aeropuertos` | Porto 40 km · 35 min (Palma: verano); Vigo 113 km · 85 min (Palma: verano) |
| `autonomiaCotidiana` | MEDIA-FUERTE |
| `casaQueBuscar` | Accesibilidad, exterior/terraza y distancia realmente caminable a núcleo y pa... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Más favorable |
| `comunicaciones` | A-28 / N-13 |
| `comunicacionesNota10` | `8` |
| `cubiertos` | `105` |
| `dependenciaCocheTexto` | Media; núcleo resoluble, coche para parte de playas y servicios superiores. |
| `despejados` | `85` |
| `estacionalidad2026` | Vida anual con presión costera fuerte en verano. |
| `fibra` | Sí |
| `franja` | A |
| `hospitalMin` | `25` |
| `hospitalPractico2026` | Hospital de Barcelos/Viana/Braga según circuito y especialidad; verificar red vigente antes de publicar detalle operativo |
| `hospitalPriv` | 40 km · 40 min · Trofa Saúde (Braga) |
| `hospitalPub` | 25 km · 25 min · Hospital Póvoa / Vila do Conde |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 22 km · 25 min · Póvoa de Varzim / Vila do Conde; verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `78` |
| `lat` | `41.532` |
| `lluviaDias` | `108` |
| `lluviaMm` | `1300` |
| `lon` | `-8.783` |
| `mapa` | 81_esposende.png |
| `mercadoReventa` | Mercado intermedio con componente turístico/segunda residencia. La liquidez d... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `5` |
| `minCosta` | `3` |
| `municipio` | Esposende |
| `n` | `81` |
| `niebla` | Media |
| `obraNueva` | Sí |
| `pais` | Portugal |
| `palmaDirecta2026` | Porto: Palma observada en la operativa de 2026; rutas y frecuencias cambian por temporada, comprobar antes de viajar. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Porto (verano) · 35 min |
| `paseoCotidiano` | Marginal del Cávado y recorridos del litoral/parque natural. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Costa y estuario con buena escala urbana, pero servicios hospitalarios de mayor nivel fuera y microzonas muy distintas. |
| `playaBano` | Ofir / Apúlia |
| `playaCotidiana` | SÍ/PARCIAL SEGÚN MICROZONA |
| `playaCotidianaModo` | Costa atlántica muy próxima; desde el centro la relación inmediata es también estuario/río y las playas dependen de tramo. |
| `precioM2` | `2462` |
| `provincia` | Braga |
| `radioCotidiano` | Ciudad pequeña con comercio, servicios y frente del Cávado; suficiente autonomía básica. |
| `radioSalida` | Ofir/Apúlia y parque litoral; Braga/Barcelos/Viana para mayor escala. |
| `sanidadPrimaria2026` | Cuidados de saúde primários locales |
| `servicios` | `6` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | Tiene: villa completa. Falta: hospital en el municipio (Póvoa a 25) |
| `slug` | esposende |
| `solHoras` | `2550` |
| `tempAgua` | 16-18 |
| `tempInvierno` | `10.0` |
| `tempVerano` | `20.0` |
| `transporteRelevante2026` | A-28 / N-13; bus Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital de Barcelos/Viana/Braga según circuito y especialidad; verificar red vigente antes de publicar detalle operativo. |
| `viento` | Alta |
| `zona` | Litoral Norte (PT) |

**Highlights capa (autoridad):** autonomia `MEDIA-FUERTE` · playa `SÍ/PARCIAL SEGÚN MICROZONA` · precioM2 `2462` · servicios `6` · hospitalMin `25` · aeroMin `35`.

### 10.3 Auditorías / plan existentes

**NO PLAN_EDITORIAL** específico Portugal (no hay `PLAN_EDITORIAL_PORTUGAL_*.md`).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n=81 → claves 73–83):

```
| 81 | Esposende | Litoral Norte (PT) | precio relato ~2300 vs ficha 2462 | usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 81 | Esposende | Litoral Norte (PT) | no | — |
```

**estudio_zonas.md** (histórico — **NO** autoridad 2026):

<details><summary>Recorte estudio</summary>

**Esposende (nº 81).** 34.000 habitantes en el concelho; Esposende villa (estuario, paseo, puerto), Ofir (urbanización de veraneo de Braga entre pinos, torres de los 70 y chalés), Fão (villa antigua), Apúlia (molinos, dunas, playa), Marinhas. Parque Natural do Litoral Norte. Viento alto. Servicios 6/10. Hospital Póvoa 25, Braga 30. Aeropuerto 35. Precio 2.300: 2 habitaciones franja A 194.000; 3 habitaciones 269.000 (entra a 5-10 min). Obra nueva sí. Para quién: la opción residencial y tranquila del Litoral Norte, con Braga y Porto a 30-40. Mi elección en la zona.

**Póvoa de Varzim (nº 82).** 63.000 habitantes; ciudad de playa con casino, paseo marítimo largo, puerto pesquero, mercado, metro a Porto, Estela Golf a 10 min. Servicios 8/10. Hospital 5. Aeropuerto 20. Precio 2.600: 2 habitaciones franja A 220.000; obra nueva abundante. Facilidad de venta 9/10. Dependencia del coche 3/10. Par

</details>

### 10.4 Auditoría relato ↔ capa

Estados permitidos: `ALINEADO` · `OBSOLETO` · `DUPLICA_CAPA` · `P4_PRESERVAR` · `SOPORTADO_PERO_INFRAUSADO` · `NO_SOPORTADO_NO_INVENTAR` · `REQUIERE_VERIFICACION_EXTERNA` · `COMUN_PORTUGAL`

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | Chip X/10 repetido en abrir/casa/encaja | `servicios` **6**; Tiene: villa completa. Falta: hospital en el municipio (Póvoa a 25) | DUPLICA_CAPA | Omitir chip; narrar autonomía cualitativa |
| Precio €/m² | Auditoría/estudio ~2300; prosa puede citar cifras o remitir + «000 euros» | `precioM2` **2462** | OBSOLETO | Capa prevalece; omitir cifras; TablaPrecios |
| Prosa rota «000 euros» | Tras remitir a capa queda fragmento «000 euros» (+ totales sueltos a veces) | Cifras viven en `precioM2` / A/B / TablaPrecios | OBSOLETO | Borrar resto roto; no reponer €/m² históricos en prosa |
| Cávado ≠ Atlántico | Estuario abrigado vs playa abierta Apúlia/Ofir | playa **SÍ/PARCIAL SEGÚN MICROZONA**; micro: Esposende ciudad, Ofir/Fão y Apúlia ofrecen relaciones distintas entre servicio… | ALINEADO / SOPORTADO_PERO_INFRAUSADO | Separar estuario / océano / microzonas |
| Transporte — no inventar tren | Relato A28; capa A-28/bus | `transporteRelevante2026`=A-28 / N-13; bus Interpretar por utilidad cotidiana real, no por mera existenci…; `comunicaciones`=A-28 / N-13 | ALINEADO | **NO** inventar tren; Metro no es de Esposende |
| Hospital | Póvoa ~25′; Braga ~30′; Trofa | `hospitalMin` **25** — Hospital de Barcelos/Viana/Braga según circuito y especialidad; verif… | ALINEADO / DUPLICA_CAPA | Una vez; capa práctica matiza circuitos |
| Aeropuerto / Palma | Minutos aero + «Palma en verano» (tono permanente posible) | `aeropuertoMin` 35; `aeropuertoPractico2026`=Porto; `palmaDirecta2026` matiza | DUPLICA_CAPA / ALINEADO (matiz temporada) | Consecuencia una vez; no martillar minutos+Palma; no inventar permanente absoluto |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos tiempo→encaja (y a menudo abrir) | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| COMUN_PORTUGAL (fiscal / seguro / tarjeta / Cunqueiro) | Bloques repetidos: régimen fiscal cerrado 2024; seguro privado; tarjeta europea/española; SNS lento | Hecho nacional — no capa municipal | COMUN_PORTUGAL | Extraer a doc común; conservar solo consecuencia local; **no corregir** aquí |

### 10.5 P4 / identidad

- **Preservar:** Cávado/estuario, Ofir, Apúlia/molinos, Parque Natural, A-28.
- **Identidad:** costa llana residencial norte de Porto.
- **Peaje:** hospital fuera; nortada; **no inventar tren**.

### 10.6 Vida cotidiana soportada

| Elemento | Clasificación | Base repo |
|---|---|---|
| Autonomía | YA SOPORTADO | `MEDIA-FUERTE` |
| Coche | YA SOPORTADO | `Media; núcleo resoluble, coche para parte de playas y servicios superiores.` |
| Servicios cotidianos | YA SOPORTADO | servicios `6` — Tiene: villa completa. Falta: hospital en el municipio (Póvoa a 25) |
| Paseo | YA SOPORTADO | Marginal del Cávado y recorridos del litoral/parque natural. |
| Pendiente | N/A / null | `null` |
| Microzona | YA SOPORTADO / INFRAUSADO | adv: Esposende ciudad, Ofir/Fão y Apúlia ofrecen relaciones distintas entr… / microPrecio: — |
| Compra enero / estacionalidad | YA SOPORTADO en relato+capa | Vida anual con presión costera fuerte en verano. |
| Transporte relevante | YA SOPORTADO | A-28 / N-13; bus Interpretar por utilidad cotidiana real, no por mera existencia nominal … |
| Nombres café / horarios exactos | NO SOPORTADO | — |
| Totales A/B en prosa | NO SOPORTADO (viven en tabla) | A_3hab `288054` / B_3hab `232659` |
| Burocracia nacional (fiscal/NIF/CRUE) | COMUN_PORTUGAL | No repetir 11×; ver §13 |

### 10.7 Reality toll

- Autonomía **MEDIA-FUERTE**
- Playa **SÍ/PARCIAL SEGÚN MICROZONA**; Cávado ≠ Atlántico
- Transporte A-28/bus — **sin tren inventado**
- Hospital ~**25′**; aero ~**35′**
- Precio **2462**; nortada

### 10.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | Auditoría ~2300 (histórico prosa/estudio) | **2462** | OBSOLETO — capa prevalece |
| A_3hab / B_3hab | No narrar totales | `288054` / `232659` | TablaPrecios |
| casaQueBuscar / reventa | Cualitativo | Ver tabla capa | `casaQueBuscar` truncado `…` → **DESEABLE** texto completo (no bloquea v1); `mercadoReventa` truncado `…` → **DESEABLE** texto completo (no bloquea v1) |
| «000 euros» | Presente tras remitir a capa (varios) | — | Borrar resto roto |

### 10.9 Clima: deuda / duplicación (NO correct)

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en `tiempo` + `encaja` (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `esposende` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_32.**

### 10.10 Mar / río / playa / paseo

- **playaCotidiana:** `SÍ/PARCIAL SEGÚN MICROZONA`
- **Modo:** Costa atlántica muy próxima; desde el centro la relación inmediata es también estuario/río y las playas dependen de tramo.
- **paseoCotidiano:** Marginal del Cávado y recorridos del litoral/parque natural.
- **pendiente:** `null`
- Cávado estuario ≠ Atlántico Apúlia/Ofir.
- No contradecir la etiqueta de playa de la capa.

### 10.11 Frontera / España

*(No es eje frontera Galicia–Portugal de rutina; omitir o solo salida ocasional si el relato lo menciona.)*

### 10.12 COMUN_PORTUGAL (local excerpts — NO correct)

- **fiscal cerrado 2024** → COMUN_PORTUGAL: …ne mirar el calendario de temporada. El régimen fiscal especial para residentes extranjeros no aplica como ventaja…
- **seguro privado portugués** → COMUN_PORTUGAL: … hacia los cuarenta. Hay que contar con seguro privado portugués —el público es más lento; no hay sanidad pública española…
- **tarjeta española de diario** → COMUN_PORTUGAL: …reinta minutos.",  "La sanidad no es la tarjeta española de diario. El hospital comarcal Póvoa / Vila do Conde queda…
- **Trofa Saúde** → COMUN_PORTUGAL: …o minutos; el de Braga, a unos treinta; Trofa Saúde Braga, hacia los cuarenta. Hay que contar con seguro …
- **SNS / público más lento** → COMUN_PORTUGAL: …contar con seguro privado portugués —el público es más lento; no hay sanidad pública española de uso habitual—. Empadron…

**Tratamiento:** marcar, no corregir; extraer a §13; conservar solo consecuencia local (minutos hospital/aero/coche).

### 10.13 No soportado / no inventar

- ~2300 vigente
- **Inventar tren** (capa A-28/bus)
- Confundir Cávado = Atlántico
- Chip 6/10
- Palma permanente

---

## 11. Póvoa de Varzim

### 11.1 Relato actual completo

> CITA LITERAL — `web/src/lib/relatos-litoral-norte.ts` clave `povoa-de-varzim` (objeto completo).

```ts
povoa-de-varzim: {
 escala: "Ciudad-balneario",
 abrir: [
 "Póvoa de Varzim se siente, al bajar del metro o de la A28, como la ciudad de playa que Porto inventó a media hora de sí misma. Unos sesenta y tres mil habitantes: casino, uno de los paseos marítimos más largos de Portugal, puerto pesquero, mercado, metro —línea B— hasta Porto y Estela Golf —links junto al mar— a unos diez minutos. El frente es de bloques en primera línea: no hay casas bajas mirando al Atlántico. Es ciudad-balneario atlántica con capa de veraneo y de trabajo de mar, viva todo el año.",
 "Quien vive aquí es gente local, quien trabaja en Porto y vuelve por la noche, y veraneantes que llenan el paseo en agosto. Un martes de noviembre se resuelve casi todo en ciudad: mercado, centro de salud, comercio, colegio, café frente al mar. Los servicios alcanzan 8/10; la dependencia del coche, 3/10; la facilidad de venta, 9/10. El hospital comarcal queda a unos cinco minutos. El aeropuerto de Porto–Sá Carneiro anda alrededor de los veinte —Palma en verano; más de ochenta destinos directos—. Para lo diario no hace falta coche si se elige bien el piso; para Estela o una escapada a Esposende, sí.",
 "El tráfico es de ciudad costera casi todo el año. En julio y agosto lo cambia todo: el veraneante de Porto llena el paseo con ruido, afluencia y aparcamiento difícil; la nortada de tarde —viento norte fuerte— marca terrazas y toallas. Hay obra nueva abundante y fibra. Quien busque silencio absoluto de enero lo encontrará unas calles atrás del frente; quien busque el café abierto también. Las dos cosas conviven aquí, y eso es raro en una ciudad de bloques.",
 "La semana tiene rutinas claras: paseo, mercado, metro, puerto. Primavera y otoño son buenas épocas para conocerlo: el Atlántico sin gentío, el casino sin cola de agosto, Porto a media hora sin la A28 saturada. Si solo conoces un día de sol en Redonda, te llevas la imagen de folleto. Si has visto un agosto lleno y un martes gris de noviembre, ya puedes decidir si de verdad quieres vivir aquí.",
 "El verano, sin embargo, tiene días que desbordan esa calma urbana. Fiestas locales y el veraneo de Porto ocupan el frente unas semanas: música, tráfico, toallas. Vivir en primera línea del paseo significa contar con ruido nocturno y viento; unas calles hacia el interior, el volumen baja. Póvoa no promete dunas residenciales: promete ciudad de playa con metro y aeropuerto a veinte minutos a cambio de urbanismo de bloques.",
 ],
 tiempo: [
 "Si vienes de Baleares, el cielo pide menos paciencia que en Galicia húmeda, pero el viento pide más. Póvoa suma unas 2.550 horas de sol y unos 85 días despejados —el máximo de la tabla—, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.200 a 1.300 milímetros en unos 105 a 108 días; julio y agosto mojan poco —unos dos días—. De noviembre a abril la terraza se usa la mitad; de junio a septiembre, casi siempre, si la nortada lo permite.",
 "El verano ronda 20 °C, con máximas alrededor de 25 °C y tres a seis días sobre 30 °C: fresco frente al julio mallorquín. Praia da Póvoa —Redonda, Salgueira, Lagoa— tiene agua entre 16 y 18 °C: mar abierto, olas y viento de tarde. No es Mallorca tibia; es Atlántico que despierta. Conviene probar una tarde de nortada y un noviembre, no solo un sábado de sol en el paseo.",
 ],
 vivir: [
 "El invierno en Póvoa es de ciudad-balneario que no cierra: de noviembre a abril la terraza se usa la mitad; salitre, nortada residual y humedad de frente piden calefacción en pisos de bloque. Unas calles atrás del frente el viento baja. Probar un martes gris evita firmar solo por Redonda en sol.",
 "Sin coche, lo diario se resuelve si se elige bien el piso —servicios 8/10, dependencia del coche 3/10—: mercado, centro de salud, comercio, café frente al mar, metro línea B hasta Porto. En enero hay ritmo de ciudad; en agosto el paseo se llena de veraneantes de Porto. Quien viva en primera línea ganará mar y más ruido; hacia el interior, más calma.",
 "Conviven gente local, quien trabaja en Porto y vuelve por la noche, y veraneantes de agosto. El portugués manda; la escala es de ciudad atlántica metropolitana, no de aldea. La integración pasa por barrio, mercado, puerto pesquero y metro, con mucho Porto en temporada. Quien busque solo silencio de dunas deberá mirar Esposende.",
 "El hospital comarcal queda a unos cinco minutos; CUF Porto anda hacia los treinta y cinco. Hay que contar con seguro privado portugués —como en el Alto Minho—, porque el público es más lento. No hay sanidad pública española de diario: se vive en Portugal con comarcal a pie.",
 "Porto–Sá Carneiro anda alrededor de los veinte minutos —Palma en verano; más de ochenta destinos directos—. Ir y volver a Mallorca es de los trayectos más cortos de toda la tabla. Conviene mirar horarios de temporada y el resto del año.",
 "En el frente predominan bloques; hay obra nueva abundante y fibra. No hay casas bajas mirando al Atlántico. El modelo es piso con terraza al mar o unas calles atrás, más abrigado del viento y del ruido de agosto. Tres habitaciones suelen quedar caras; dos en franja asequible son la orilla más realista. Probar agosto lleno y noviembre antes de comprar.",
 ],
 historia: [
 "El casino, el paseo y el puerto pesquero explican Póvoa: ciudad-balneario atlántica que creció entre ocio de veraneo y oficio de mar. La lonja y los barcos no son decorado; el frente de bloques y el paseo largo son la capa que Porto puso encima cuando la costa se convirtió en extensión metropolitana.",
 "El metro —línea B— marca la conexión: no es villa aislada, es ciudad de playa enganchada a Porto. Estela Golf —links junto al mar a unos diez minutos— completa la ficha de costa llana: ocio, viento, arena. Lo que conviene saber aquí es de balneario, pesca y ciudad viva todo el año, no de casco conventual ni de dunas protegidas.",
 ],
 fuera: [
 "Si solo hay tiempo para un baño cerca, ese baño es Praia da Póvoa —Redonda, Salgueira, Lagoa—. Arena urbana, agua entre 16 y 18 °C, olas y nortada de tarde. Un martes de junio puedes caminar el paseo casi solo; un domingo de agosto el frente se llena de Porto. Es playa de ciudad, no de cala escondida.",
 "El paseo marítimo —uno de los más largos de Portugal— es la tarde de diario: hormigón, viento, mar a un lado, bloques al otro. El puerto pesquero añade olor a lonja y ritmo de trabajo. Estela Golf queda a unos diez minutos: links junto al mar cuando apetezca otro ambiente.",
 "Vila do Conde anda a trayecto corto por la A28 o el metro —casco histórico, Ave, Azurara—. Esposende, alrededor de veinticinco minutos hacia el norte —dunas, pinos, estuario—. Porto, unos treinta–cuarenta. Quien viva aquí acepta Atlántico urbano de diario y dunas o historia como escapada corta.",
 ],
 casa: [
 "En el frente predominan bloques; hay obra nueva abundante y fibra. El modelo no es chalé entre pinos: es piso con terraza al mar o unas calles atrás, más abrigado del viento y del ruido de agosto. En primera línea hay que contar con ocupación estival, salitre y nortada; conviene comprobar una tarde de viento y un sábado lleno.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros. Tres habitaciones rondan 304.000 euros —fuera de la orilla asequible habitual—. Quien busque tres habitaciones dentro de esa orilla deberá mirar Esposende un poco retirado de la playa, no este frente.",
 "Los servicios son 8/10: hospital a unos cinco minutos, mercado, comercio, metro. Porto–Sá Carneiro está a unos veinte. CUF Porto anda hacia los treinta y cinco. Hay que contar con seguro privado portugués. Conviene probar agosto y un noviembre antes de comprar.",
 ],
 encaja: {
 si: [
 "La ciudad de playa completa importa más que las dunas residenciales. Póvoa reúne casino, uno de los paseos marítimos más largos de Portugal, puerto pesquero, mercado, metro —línea B— hasta Porto y Estela Golf —links junto al mar— a unos diez minutos. Los servicios alcanzan 8/10; la dependencia del coche, 3/10; la facilidad de venta, 9/10. El hospital comarcal Póvoa / Vila do Conde queda a unos cinco minutos; Porto–Sá Carneiro, a unos veinte —Palma en verano y más de ochenta destinos directos—. Quien quiera bañarse mira Praia da Póvoa —Redonda, Salgueira, Lagoa—: agua entre dieciséis y dieciocho grados, mar abierto, olas y nortada de tarde. No es Mallorca tibia; es Atlántico que despierta. A cambio, un martes de noviembre se resuelve casi todo en ciudad sin pedir Braga ni Esposende.",
 "También encaja para quien acepte urbanismo de bloques en primera línea a cambio de metro, hospital a cinco y vida de ciudad-balneario todo el año —con mucho veraneante de Porto en agosto—. dos habitaciones en franja asequible, alrededor de 220.000 euros. Obra nueva abundante y fibra. Frente a Esposende se gana escala urbana; se pierde calma de pinos y dunas.",
 ],
 no: [
 "No encaja si se buscan casas bajas en el frente de mar —el estudio lo lista entre lo que no tendrás en Póvoa y Vila do Conde— o tres habitaciones dentro de la orilla asequible habitual: esa tipología ronda 304.000 euros y queda fuera. Tampoco si la montaña debe quedar detrás de casa, si el agua debe templarse o si la terraza de junio a agosto debe usarse sin viento: la nortada de tarde marca el paseo y no se negocia eligiendo otra planta del bloque.",
 "La sanidad pública española de diario no aplica: se vive en Portugal. El comarcal está a cinco minutos y CUF Porto hacia los treinta y cinco; el estudio recomienda seguro privado portugués —como en el Alto Minho—, porque el público es más lento. Quien se decida solo tras un día de sol en el paseo, sin probar un agosto lleno de Porto ni un martes de noviembre, se llevará una sorpresa. Si lo que manda es duna y pinos, Esposende; si casco histórico y aeropuerto a quince, Vila do Conde.",
 ],
 veredicto:
 "Veredicto de quien mira la costa metropolitana: Póvoa de Varzim encaja como ciudad-balneario —dos habitaciones en franja asequible o piso algo retirado del frente más ocupado en agosto, no la primera línea más ruidosa del paseo— sobre todo si metro, hospital a cinco y Sá Carneiro a veinte importan más que casas bajas y silencio de dunas. Probar un paseo lleno de verano y un noviembre antes de comprar. Se ganan servicios 8/10, venta fácil y Porto a media hora; se aceptan bloques,, mar frío 16–18 °C, nortada y seguro privado portugués en lugar de la tarjeta española.",
 },
 fotosAbrir: [
 { src: "/fotos/litoral-norte/zona-povoa.jpg", pie: "Póvoa de Varzim: ciudad-balneario frente al Atlántico" },
 ],
 fotosHistoria: [],
 fotosFuera: [
 { src: "/fotos/litoral-norte/povoa-playa.jpg", pie: "Praia da Póvoa: Redonda y orilla atlántica" },
 { src: "/fotos/litoral-norte/povoa-estela.jpg", pie: "Estela Golf, links junto al mar en Póvoa" },
 ],
 creditoFotos: credito,
 }
```

**Señales de auditoría (scan local, sin internet):**

- **X/10** (5 muestras):
  - …l mar. Los servicios alcanzan 8/10; la dependencia del coche, 3/…
  - …10; la dependencia del coche, 3/10; la facilidad de venta, 9/10.…
  - … 3/10; la facilidad de venta, 9/10. El hospital comarcal queda a…
  - …elige bien el piso —servicios 8/10, dependencia del coche 3/10—:…
  - …s 8/10, dependencia del coche 3/10—: mercado, centro de salud, c…
- **broken000** (4 muestras):
  - …una media municipal en prosa. 000 euros. Tres habitaciones rondan 304…
  - … Tres habitaciones rondan 304.000 euros —fuera de la orilla asequible…
  - …a asequible, alrededor de 220.000 euros. Obra nueva abundante y fibra…
  - …tual: esa tipología ronda 304.000 euros y queda fuera. Tampoco si la …
- **precio_narr** (5 muestras):
  - …ca. Caen alrededor de 1.200 a 1.300 milímetros en unos 105 a 108 …
  - … del mes; aquí no se fija una media municipal en prosa. 000 euros. Tres hab…
  - …una media municipal en prosa. 000 euros. Tres habitaciones rondan 304…
  - …s. Tres habitaciones rondan 304.000 euros —fuera de la orilla asequible…
  - …nja asequible, alrededor de 220.000 euros. Obra nueva abundante y fibra…
- **clima** (5 muestras):
  - …de más. Póvoa suma unas 2.550 horas de sol y unos 85 días despejados —el…
  - …0 horas de sol y unos 85 días despejados —el máximo de la tabla—, fr…
  - …oras y 120 jornadas claras de Mallorca. Caen alrededor de 1.200 a 1.…
  - …olas y viento de tarde. No es Mallorca tibia; es Atlántico que despi…
  - …inos directos—. Ir y volver a Mallorca es de los trayectos más corto…
- **hospital** (5 muestras):
  - … facilidad de venta, 9/10. El hospital comarcal queda a unos cinco m…
  - …eberá mirar Esposende.",  "El hospital comarcal queda a unos cinco m…
  - …l queda a unos cinco minutos; CUF Porto anda hacia los treinta …
  - ….",  "Los servicios son 8/10: hospital a unos cinco minutos, mercado…
  - … Carneiro está a unos veinte. CUF Porto anda hacia los treinta …
- **Palma** (3 muestras):
  - …anda alrededor de los veinte —Palma en verano; más de ochenta des…
  - …ededor de los veinte minutos —Palma en verano; más de ochenta des…
  - …o–Sá Carneiro, a unos veinte —Palma en verano y más de ochenta de…
- **seguro** (5 muestras):
  - …a y cinco. Hay que contar con seguro privado portugués —como en el Alto Mi…
  - …a y cinco. Hay que contar con seguro privado portugués. Conviene probar ag…
  - … cinco; el estudio recomienda seguro privado portugués —como en el Alto Mi…
  - … mar frío 16–18 °C, nortada y seguro privado portugués en lugar de la tarj…
  - …vado portugués en lugar de la tarjeta española.",  },  fotosAbrir: [  { src:…
- **frontera** (1 muestras):
  - …o pide menos paciencia que en Galicia húmeda, pero el viento pide m…
- **metro_tren** (5 muestras):
  - …arzim se siente, al bajar del metro o de la A28, como la ciudad d…
  - …e, al bajar del metro o de la A28, como la ciudad de playa que …
  - …al, puerto pesquero, mercado, metro —línea B— hasta Porto y Estel…
  - …tinas claras: paseo, mercado, metro, puerto. Primavera y otoño so…
  - …to, Porto a media hora sin la A28 saturada. Si solo conoces un …
- **sol** (2 muestras):
  - …nto pide más. Póvoa suma unas 2.550 horas de sol y unos 85 días despejados —el…
  - …nas 2.550 horas de sol y unos 85 días despejados —el máximo de la tabla—, fr…

### 11.2 Capa 2026 completa

Fuente: `web/src/data/municipios-litoral-norte.json` · slug `povoa-de-varzim`.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `230685` |
| `A_3hab` | `319410` |
| `B_2hab` | `186323` |
| `B_3hab` | `257985` |
| `advertenciaMicrozona` | `null` *(n.d. / ausente)* |
| `aeropuertoMin` | `20` |
| `aeropuertoPractico2026` | Porto |
| `aeropuertos` | Porto 20 km · 20 min (Palma: verano); Vigo 128 km · 95 min (Palma: verano) |
| `autonomiaCotidiana` | MUY ALTA |
| `casaQueBuscar` | Ascensor o acceso sin barreras, exterior, 2–3 dormitorios y servicios andando... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Más favorable |
| `comunicaciones` | A-28; metro línea B a Porto |
| `comunicacionesNota10` | `9` |
| `cubiertos` | `105` |
| `dependenciaCocheTexto` | Baja en zona urbana bien situada. |
| `despejados` | `85` |
| `estacionalidad2026` | Ciudad plenamente anual, aunque el frente de playa gana intensidad en verano. |
| `fibra` | Sí |
| `franja` | A |
| `hospitalMin` | `5` |
| `hospitalPractico2026` | Hospital Póvoa de Varzim–Vila do Conde / red metropolitana según servicio |
| `hospitalPriv` | 35 km · 35 min · CUF Porto |
| `hospitalPub` | 3 km · 5 min · Hospital Póvoa / Vila do Conde |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 1 km · 5 min · Póvoa de Varzim / Vila do Conde; verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `78` |
| `lat` | `41.383` |
| `lluviaDias` | `105` |
| `lluviaMm` | `1200` |
| `lon` | `-8.763` |
| `mapa` | 82_povoa_de_varzim.png |
| `mercadoReventa` | Mercado relativamente amplio por demanda residencial permanente y servicios. ... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `3` |
| `minCosta` | `1` |
| `municipio` | Póvoa de Varzim |
| `n` | `82` |
| `niebla` | Media |
| `obraNueva` | Sí |
| `pais` | Portugal |
| `palmaDirecta2026` | Porto: Palma observada en la operativa de 2026; rutas y frecuencias cambian por temporada, comprobar antes de viajar. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Porto (verano) · 20 min |
| `paseoCotidiano` | Marginal marítima de varios kilómetros, llana y muy utilizable a diario. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Playa, paseo y autonomía urbana juntos; mayor densidad, precio y ambiente metropolitano que Alto Minho. |
| `playaBano` | Praia da Póvoa |
| `playaCotidiana` | SÍ |
| `playaCotidianaModo` | Largo frente de playas urbanas directamente integrado en la ciudad. |
| `precioM2` | `2730` |
| `provincia` | Porto |
| `radioCotidiano` | Ciudad costera completa: mercado, comercio, salud, cultura, restauración y servicios permiten vivir gran parte de la semana andando. |
| `radioSalida` | Porto y área metropolitana; costa norte como extensión. |
| `sanidadPrimaria2026` | Red urbana de cuidados primários |
| `servicios` | `8` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | No falta nada |
| `slug` | povoa-de-varzim |
| `solHoras` | `2550` |
| `tempAgua` | 16-18 |
| `tempInvierno` | `10.0` |
| `tempVerano` | `20.0` |
| `transporteRelevante2026` | Metro do Porto: conexión estructural con área metropolitana y aeropuerto mediante transbordo/red. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital Póvoa de Varzim–Vila do Conde / red metropolitana según servicio. |
| `viento` | Alta |
| `zona` | Litoral Norte (PT) |

**Highlights capa (autoridad):** autonomia `MUY ALTA` · playa `SÍ` · precioM2 `2730` · servicios `8` · hospitalMin `5` · aeroMin `20`.

### 11.3 Auditorías / plan existentes

**NO PLAN_EDITORIAL** específico Portugal (no hay `PLAN_EDITORIAL_PORTUGAL_*.md`).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n=82 → claves 73–83):

```
| 82 | Póvoa de Varzim | Litoral Norte (PT) | — | precio relato ~2600 vs ficha 2730 (desvío); usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 82 | Póvoa de Varzim | Litoral Norte (PT) | no | — |
```

**estudio_zonas.md** (histórico — **NO** autoridad 2026):

<details><summary>Recorte estudio</summary>

**Póvoa de Varzim (nº 82).** 63.000 habitantes; ciudad de playa con casino, paseo marítimo largo, puerto pesquero, mercado, metro a Porto, Estela Golf a 10 min. Servicios 8/10. Hospital 5. Aeropuerto 20. Precio 2.600: 2 habitaciones franja A 220.000; obra nueva abundante. Facilidad de venta 9/10. Dependencia del coche 3/10. Para quién: quien quiera ciudad de playa con metro y aeropuerto a 20 min; el urbanismo del frente es de bloques.

**Vila do Conde (nº 83).** 80.000 habitantes; casco histórico (Santa Clara, acueducto de 999 arcos, Alfândega, Nau), río Ave, playas de Vila do Conde y Azurara, Mindelo a 10, metro y A28. Servicios 8/10, comunicaciones 9/10. Hospital 10; CUF Porto 30. Aeropuerto 15 (el más rápido de toda la tabla junto a Vigo y A Coruña). Precio 2.600: 2 habitaciones franja A 220.000; obra nueva sí. Dependencia del coche 3/10. Para quién: quien quiera ciudad histórica con 

</details>

### 11.4 Auditoría relato ↔ capa

Estados permitidos: `ALINEADO` · `OBSOLETO` · `DUPLICA_CAPA` · `P4_PRESERVAR` · `SOPORTADO_PERO_INFRAUSADO` · `NO_SOPORTADO_NO_INVENTAR` · `REQUIERE_VERIFICACION_EXTERNA` · `COMUN_PORTUGAL`

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | Chip X/10 repetido en abrir/casa/encaja | `servicios` **8**; No falta nada | DUPLICA_CAPA | Omitir chip; narrar autonomía cualitativa |
| Precio €/m² | Auditoría/estudio ~2600; prosa puede citar cifras o remitir + «000 euros» | `precioM2` **2730** | OBSOLETO | Capa prevalece; omitir cifras; TablaPrecios |
| Prosa rota «000 euros» | Tras remitir a capa queda fragmento «000 euros» (+ totales sueltos a veces) | Cifras viven en `precioM2` / A/B / TablaPrecios | OBSOLETO | Borrar resto roto; no reponer €/m² históricos en prosa |
| Metro do Porto | Metro línea B; autonomía urbana | `transporteRelevante2026`=Metro do Porto: conexión estructural con área metropolitana y aeropuerto median… | ALINEADO | Solo como capa; **no** coche-cero en periferia |
| Mar / paseo | Paseo largo; bloques frente | playa **SÍ**; paseo Marginal marítima de varios kilómetros, llana y m… | ALINEADO | Ciudad-balneario; no casas bajas en frente |
| Hospital | Comarcal ~5′ | `hospitalMin` **5** | ALINEADO | Ventaja |
| Aeropuerto / Palma | Minutos aero + «Palma en verano» (tono permanente posible) | `aeropuertoMin` 20; `aeropuertoPractico2026`=Porto; `palmaDirecta2026` matiza | DUPLICA_CAPA / ALINEADO (matiz temporada) | Consecuencia una vez; no martillar minutos+Palma; no inventar permanente absoluto |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos tiempo→encaja (y a menudo abrir) | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| COMUN_PORTUGAL (fiscal / seguro / tarjeta / Cunqueiro) | Bloques repetidos: régimen fiscal cerrado 2024; seguro privado; tarjeta europea/española; SNS lento | Hecho nacional — no capa municipal | COMUN_PORTUGAL | Extraer a doc común; conservar solo consecuencia local; **no corregir** aquí |

### 11.5 P4 / identidad

- **Preservar:** paseo largo, casino, puerto, Metro B, hospital a 5′.
- **Identidad:** ciudad-balneario bloques; vida anual + verano Porto.
- **Peaje:** densidad/precio; Metro ≠ coche-cero periferia.

### 11.6 Vida cotidiana soportada

| Elemento | Clasificación | Base repo |
|---|---|---|
| Autonomía | YA SOPORTADO | `MUY ALTA` |
| Coche | YA SOPORTADO | `Baja en zona urbana bien situada.` |
| Servicios cotidianos | YA SOPORTADO | servicios `8` — No falta nada |
| Paseo | YA SOPORTADO | Marginal marítima de varios kilómetros, llana y muy utilizable a diario. |
| Pendiente | N/A / null | `null` |
| Microzona | Poco o nada en capa | adv: — / microPrecio: — |
| Compra enero / estacionalidad | YA SOPORTADO en relato+capa | Ciudad plenamente anual, aunque el frente de playa gana intensidad en verano. |
| Transporte relevante | YA SOPORTADO | Metro do Porto: conexión estructural con área metropolitana y aeropuerto mediante transbo… |
| Nombres café / horarios exactos | NO SOPORTADO | — |
| Totales A/B en prosa | NO SOPORTADO (viven en tabla) | A_3hab `319410` / B_3hab `257985` |
| Burocracia nacional (fiscal/NIF/CRUE) | COMUN_PORTUGAL | No repetir 11×; ver §13 |

### 11.7 Reality toll

- Autonomía **MUY ALTA**
- Playa **SÍ**; paseo largo
- Metro B soportado — no coche-cero periferia
- Hospital ~**5′**; aero ~**20′**
- Precio **2730**

### 11.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | Auditoría ~2600 (histórico prosa/estudio) | **2730** | OBSOLETO — capa prevalece |
| A_3hab / B_3hab | No narrar totales | `319410` / `257985` | TablaPrecios |
| casaQueBuscar / reventa | Cualitativo | Ver tabla capa | `casaQueBuscar` truncado `…` → **DESEABLE** texto completo (no bloquea v1); `mercadoReventa` truncado `…` → **DESEABLE** texto completo (no bloquea v1) |
| «000 euros» | Presente tras remitir a capa (varios) | — | Borrar resto roto |

### 11.9 Clima: deuda / duplicación (NO correct)

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en `tiempo` + `encaja` (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `povoa-de-varzim` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_32.**

### 11.10 Mar / río / playa / paseo

- **playaCotidiana:** `SÍ`
- **Modo:** Largo frente de playas urbanas directamente integrado en la ciudad.
- **paseoCotidiano:** Marginal marítima de varios kilómetros, llana y muy utilizable a diario.
- **pendiente:** `null`
- Paseo/playa urbana; bloques frente.
- No contradecir la etiqueta de playa de la capa.

### 11.11 Frontera / España

*(No es eje frontera Galicia–Portugal de rutina; omitir o solo salida ocasional si el relato lo menciona.)*

### 11.12 COMUN_PORTUGAL (local excerpts — NO correct)

- **seguro privado portugués** → COMUN_PORTUGAL: …los treinta y cinco. Hay que contar con seguro privado portugués —como en el Alto Minho—, porque el público es más lento. …
- **tarjeta española de diario** → COMUN_PORTUGAL: …seguro privado portugués en lugar de la tarjeta española.",  },  fotosAbrir: [  { src: "/fotos/litoral-norte/zona-po…
- **SNS / público más lento** → COMUN_PORTUGAL: …gués —como en el Alto Minho—, porque el público es más lento. No hay sanidad pública española de diario: se vive en Port…

**Tratamiento:** marcar, no corregir; extraer a §13; conservar solo consecuencia local (minutos hospital/aero/coche).

### 11.13 No soportado / no inventar

- ~2600 vigente
- Coche-cero en periferia por Metro
- Casas bajas en primera línea
- Chip 8/10
- Palma permanente

---

## 12. Vila do Conde

### 12.1 Relato actual completo

> CITA LITERAL — `web/src/lib/relatos-litoral-norte.ts` clave `vila-do-conde` (objeto completo).

```ts
vila-do-conde: {
 escala: "Ciudad histórica junto al aeropuerto",
 abrir: [
 "Vila do Conde se siente, al cruzar el Ave o al bajar del metro, como la ciudad histórica que guarda la puerta de Porto hacia el norte. Unos ochenta mil habitantes: casco con el convento de Santa Clara, el acueducto de 999 arcos, la Alfândega y la Nau Quinhentista —réplica de nao del siglo XVI—, río Ave, playas de Vila do Conde y Azurara, Mindelo —reserva ornitológica— a unos diez minutos, metro —línea B— y A28. Los astilleros históricos marcan la memoria de una villa que construyó barcos cuando el Atlántico era oficio, no solo foto de turismo.",
 "Quien vive aquí es gente local, quien trabaja en Porto y vuelve por la A28, y quien busca casco monumental con aeropuerto a un cuarto de hora. Un martes de noviembre se camina el casco, se compra en ciudad y se resuelve el día a día sin depender del veraneo: servicios 8/10; comunicaciones 9/10; dependencia del coche 3/10. El hospital comarcal queda a unos diez minutos; CUF Porto, a unos treinta. El aeropuerto de Porto–Sá Carneiro anda alrededor de los quince —el más rápido de toda la tabla, junto a Vigo y A Coruña: Palma en verano y más de ochenta destinos—. Para el casco y el Ave no hace falta coche; para Mindelo o la hora punta hacia Porto, sí.",
 "El tráfico es de ciudad casi todo el año. En julio y agosto lo cambia todo: Azurara y el paseo reciben más afluencia, la A28 se congestiona hacia Porto en hora punta y la nortada de tarde marca la terraza. Hay obra nueva y fibra. Quien busque silencio absoluto de enero lo encontrará en calles laterales del casco; quien busque café junto al Ave también. El ritmo de ciudad histórica se mantiene mejor que el de un frente solo de bloques.",
 "La semana tiene rutinas claras: Santa Clara, acueducto, mercado, metro, orilla del Ave. Primavera y otoño son buenas épocas para conocerlo: el casco sin gentío de agosto, Mindelo con aves, Azurara con menos tablas. Si solo conoces Santa Clara un día de sol, te llevas la imagen de folleto del monumento. Si has visto un agosto en Azurara y un martes gris junto al río, ya puedes decidir si de verdad quieres vivir aquí.",
 "El verano, sin embargo, tiene días que desbordan esa calma monumental. Fiestas locales y el veraneo llenan playa y paseo unas semanas. Vivir en el frente de Azurara significa contar con ruido y viento; hacia el casco histórico, el volumen baja a cambio de calles de piedra y turismo de día. Vila do Conde no promete dunas de Ofir: promete historia, Ave y el aeropuerto a quince minutos a cambio de bloques en el frente y mar frío.",
 ],
 tiempo: [
 "Si vienes de Baleares, el sol pide menos renuncia que en el norte gallego húmedo, pero el Atlántico pide más abrigo. Vila do Conde suma unas 2.550 horas de sol y unos 85 días despejados —el máximo de la tabla—, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.200 a 1.300 milímetros en unos 105 a 108 días; julio y agosto casi secos. La niebla de mar por la mañana y la nortada de tarde marcan el verano tanto como el termómetro.",
 "El verano ronda 20 °C, con máximas alrededor de 25 °C y tres a seis días sobre 30 °C. Las playas de Vila do Conde y Azurara —surf— tienen agua entre 16 y 18 °C: mar abierto y viento de tarde. Frente a Mallorca se gana sueño fresco y se pierde agua tibia. Conviene probar nortada y un noviembre en el casco, no solo un sábado soleado junto al acueducto.",
 ],
 vivir: [
 "El invierno en Vila do Conde es de ciudad histórica que mantiene ritmo: niebla de mar por la mañana, lluvia y humedad del Ave piden calefacción y aislamiento. En el frente de Azurara hay que contar con salitre y nortada; hacia el casco, calles de piedra más abrigadas. Probar un martes gris junto al río evita firmar solo por Santa Clara en sol.",
 "Sin coche, el casco y el Ave se resuelven a pie —servicios 8/10, dependencia del coche 3/10—; metro línea B y A28 cubren Porto. Para Mindelo o la hora punta hacia Porto hace falta vehículo. En enero hay café junto al Ave; el ritmo no se apaga fuera de temporada como en un frente solo de bloques.",
 "Conviven gente local, quien trabaja en Porto y vuelve por la A28, y turismo de día en el casco. El portugués manda; la escala es de ciudad monumental con puerta al aeropuerto. En verano Azurara se llena; entre semana manda el ir y venir metropolitano. La integración pasa por casco, Ave y metro, no por dunas de Ofir.",
 "El hospital comarcal queda a unos diez minutos; CUF Porto, a unos treinta. Hay que contar con seguro privado portugués —público más lento, como en el Alto Minho—. No hay tarjeta española de diario. Empadronarse aquí abre ciudad; el privado de referencia está en Porto.",
 "Porto–Sá Carneiro anda alrededor de los quince minutos —el más rápido de toda la tabla, junto a Vigo y A Coruña: Palma en verano y más de ochenta destinos—. Ir y volver a Mallorca es el acceso aéreo más cómodo del estudio. Conviene mirar temporada y conexiones del resto del año.",
 "En el casco y el ensanche hay pisos; en el frente, bloques. Hay obra nueva y fibra. No hay casas bajas en el frente de mar. El modelo puede ser piso hacia el Ave con acceso al casco, o vivienda en Azurara con más viento y más agosto. Tres habitaciones suelen quedar caras; dos en franja asequible son la orilla más realista. Probar Azurara en temporada y un noviembre en el casco antes de comprar.",
 ],
 historia: [
 "Santa Clara, el acueducto de 999 arcos, la Alfândega y la Nau Quinhentista explican Vila do Conde: ciudad histórica de río y mar, con capa conventual y de astilleros. El Ave marca la orilla urbana; los barcos que aquí se construyeron unieron la villa al Atlántico de oficio mucho antes del metro y de la A28.",
 "Azurara añade la costa de surf; Mindelo —reserva ornitológica a unos diez minutos— la capa de naturaleza en costa llana. Lo que conviene saber no es lista seca de monumentos: es convento, acueducto, nao y astilleros en una ciudad que hoy mira a Porto por carretera y por raíl, con el aeropuerto a un cuarto de hora.",
 ],
 fuera: [
 "El casco —acueducto, Santa Clara, Nau Quinhentista— y el paseo junto al Ave son la tarde de diario: piedra, río, mesas cuando el tiempo acompaña. No hace falta coche para sentir ciudad histórica; el agua dulce del Ave cambia el registro del Atlántico abierto.",
 "Azurara cubre el baño y el surf: arena, olas, agua entre 16 y 18 °C, nortada de tarde. Un martes de junio puedes tener más calma; en agosto el frente se llena. Mindelo queda a unos diez minutos: reserva ornitológica, pasarelas, otro ritmo de costa llana sin bloques.",
 "Póvoa anda a trayecto corto —paseo largo, casino, hospital a cinco—. Porto–Sá Carneiro, a unos quince; Porto ciudad, a media hora. Quien viva aquí acepta historia y Ave de diario, Atlántico en Azurara y la metrópoli como refuerzo, no como paisaje de la ventana.",
 ],
 casa: [
 "En el casco y el ensanche hay pisos; en el frente, bloques. Hay obra nueva y fibra. El modelo puede ser piso hacia el Ave con acceso al casco, o vivienda en el frente de Azurara con más viento y más agosto. En primera línea hay que contar con ocupación estival, salitre y nortada; conviene comprobar ambos.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros. Tres habitaciones rondan 304.000 euros —fuera de la orilla asequible habitual—. Quien busque tres habitaciones dentro de esa orilla deberá aceptar distancia a la playa o mirar Esposende.",
 "Los servicios son 8/10; comunicaciones, 9/10. El hospital queda a unos diez minutos; CUF Porto, a unos treinta. Porto–Sá Carneiro está a unos quince. Hay que contar con seguro privado portugués. Conviene probar Azurara en temporada y un noviembre en el casco antes de comprar.",
 ],
 encaja: {
 si: [
 "El aeropuerto a un cuarto de hora importa más que la calma de dunas. Vila do Conde reúne casco histórico —convento de Santa Clara, acueducto de 999 arcos, Alfândega, Nau Quinhentista—, río Ave, playas de Vila do Conde y Azurara —surf—, Mindelo —reserva ornitológica— a unos diez minutos, metro —línea B— y A28. Los servicios alcanzan 8/10; las comunicaciones, 9/10; la dependencia del coche, 3/10. El hospital comarcal queda a unos diez minutos; Porto–Sá Carneiro, a unos quince —el acceso más rápido de toda la tabla junto a Vigo y A Coruña: Palma en verano y más de ochenta destinos—. Quien quiera ciudad monumental con Porto a media hora y el Ave como orilla urbana encontrará aquí el marco: un martes de noviembre se camina el casco; el ritmo no se apaga fuera de temporada.",
 "También encaja para quien priorice historia y conexiones frente a Ofir y Apúlia: se aceptan bloques en el frente y mar abierto a dieciséis–dieciocho grados —frío, con nortada de tarde— a cambio de acueducto, metro y el mejor vuelo de la zona. dos habitaciones en franja asequible, alrededor de 220.000 euros. Obra nueva y fibra. CUF Porto anda alrededor de treinta minutos.",
 ],
 no: [
 "No encaja si se buscan casas bajas en el frente de mar —igual que en Póvoa: el frente es de bloques— o tres habitaciones dentro de la orilla asequible habitual: esa tipología ronda 304.000 euros y queda fuera. Tampoco si el agua debe templarse, si la terraza de verano debe usarse sin viento o si la montaña debe quedar detrás: Gerês sigue a hora y media; aquí mandan río, playa y A28.",
 "El hospital privado no está a la vuelta de la esquina —CUF Porto hacia los treinta— y la sanidad pública española de diario no aplica: se vive en Portugal, con comarcal a diez minutos y la recomendación del estudio de seguro privado portugués —público más lento, como en el Alto Minho—. Quien se decida solo por Santa Clara un día de sol, sin probar un agosto en Azurara ni la A28 en hora punta hacia Porto, se llevará una sorpresa. Si lo que manda es duna y pinos, Esposende; si paseo largo, casino y hospital a cinco, Póvoa.",
 ],
 veredicto:
 "Veredicto de quien mira la puerta de Porto: Vila do Conde encaja como ciudad histórica junto al aeropuerto —dos habitaciones en franja asequible o piso hacia el casco con acceso al Ave, fuera del frente más ocupado en agosto— sobre todo si Sá Carneiro a quince, metro y comunicaciones 9/10 importan más que dunas residenciales. Probar Azurara en temporada y un noviembre en el casco antes de comprar. Se ganan Santa Clara, acueducto, hospital a diez y Porto a media hora; se aceptan, bloques en el frente, mar frío 16–18 °C, nortada y seguro privado portugués en lugar de la tarjeta española.",
 },
 fotosAbrir: [
 { src: "/fotos/litoral-norte/vila-casco.jpg", pie: "Casco histórico de Vila do Conde" },
 { src: "/fotos/litoral-norte/vila-acueducto.jpg", pie: "Acueducto de Vila do Conde" },
 ],
 fotosHistoria: [
 { src: "/fotos/litoral-norte/vila-santa-clara.jpg", pie: "Convento de Santa Clara, Vila do Conde" },
 { src: "/fotos/litoral-norte/vila-nau.jpg", pie: "Nau Quinhentista en Vila do Conde" },
 ],
 fotosFuera: [
 { src: "/fotos/litoral-norte/vila-azurara.jpg", pie: "Azurara: playa de surf junto a Vila do Conde" },
 ],
 creditoFotos: credito,
 }
```

**Señales de auditoría (scan local, sin internet):**

- **X/10** (5 muestras):
  - …pender del veraneo: servicios 8/10; comunicaciones 9/10; depende…
  - …ervicios 8/10; comunicaciones 9/10; dependencia del coche 3/10. …
  - …s 9/10; dependencia del coche 3/10. El hospital comarcal queda a…
  - …se resuelven a pie —servicios 8/10, dependencia del coche 3/10—;…
  - …s 8/10, dependencia del coche 3/10—; metro línea B y A28 cubren …
- **broken000** (4 muestras):
  - …una media municipal en prosa. 000 euros. Tres habitaciones rondan 304…
  - … Tres habitaciones rondan 304.000 euros —fuera de la orilla asequible…
  - …a asequible, alrededor de 220.000 euros. Obra nueva y fibra. CUF Port…
  - …tual: esa tipología ronda 304.000 euros y queda fuera. Tampoco si el …
- **precio_narr** (5 muestras):
  - …ca. Caen alrededor de 1.200 a 1.300 milímetros en unos 105 a 108 …
  - … del mes; aquí no se fija una media municipal en prosa. 000 euros. Tres hab…
  - …una media municipal en prosa. 000 euros. Tres habitaciones rondan 304…
  - …s. Tres habitaciones rondan 304.000 euros —fuera de la orilla asequible…
  - …nja asequible, alrededor de 220.000 euros. Obra nueva y fibra. CUF Port…
- **clima** (5 muestras):
  - …Vila do Conde suma unas 2.550 horas de sol y unos 85 días despejados —el…
  - …0 horas de sol y unos 85 días despejados —el máximo de la tabla—, fr…
  - …oras y 120 jornadas claras de Mallorca. Caen alrededor de 1.200 a 1.…
  - …julio y agosto casi secos. La niebla de mar por la mañana y la nor…
  - …o y viento de tarde. Frente a Mallorca se gana sueño fresco y se pie…
- **hospital** (5 muestras):
  - …ependencia del coche 3/10. El hospital comarcal queda a unos diez mi…
  - …al queda a unos diez minutos; CUF Porto, a unos treinta. El aer…
  - … no por dunas de Ofir.",  "El hospital comarcal queda a unos diez mi…
  - …al queda a unos diez minutos; CUF Porto, a unos treinta. Hay qu…
  - …o corto —paseo largo, casino, hospital a cinco—. Porto–Sá Carneiro, …
- **Palma** (3 muestras):
  - …bla, junto a Vigo y A Coruña: Palma en verano y más de ochenta de…
  - …bla, junto a Vigo y A Coruña: Palma en verano y más de ochenta de…
  - …abla junto a Vigo y A Coruña: Palma en verano y más de ochenta de…
- **seguro** (5 muestras):
  - …s treinta. Hay que contar con seguro privado portugués —público más lento,…
  - …omo en el Alto Minho—. No hay tarjeta española de diario. Empadronarse aquí …
  - …os quince. Hay que contar con seguro privado portugués. Conviene probar Az…
  - … recomendación del estudio de seguro privado portugués —público más lento,…
  - … mar frío 16–18 °C, nortada y seguro privado portugués en lugar de la tarj…
- **metro_tren** (5 muestras):
  - … cruzar el Ave o al bajar del metro, como la ciudad histórica que…
  - …ológica— a unos diez minutos, metro —línea B— y A28. Los astiller…
  - …ez minutos, metro —línea B— y A28. Los astilleros históricos ma…
  - …baja en Porto y vuelve por la A28, y quien busca casco monument…
  - …seo reciben más afluencia, la A28 se congestiona hacia Porto en…
- **sol** (2 muestras):
  - …rigo. Vila do Conde suma unas 2.550 horas de sol y unos 85 días despejados —el…
  - …nas 2.550 horas de sol y unos 85 días despejados —el máximo de la tabla—, fr…

### 12.2 Capa 2026 completa

Fuente: `web/src/data/municipios-litoral-norte.json` · slug `vila-do-conde`.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `242938` |
| `A_3hab` | `336375` |
| `B_2hab` | `196219` |
| `B_3hab` | `271688` |
| `advertenciaMicrozona` | `null` *(n.d. / ausente)* |
| `aeropuertoMin` | `15` |
| `aeropuertoPractico2026` | Porto |
| `aeropuertos` | Porto 16 km · 15 min (Palma: verano); Vigo 135 km · 100 min (Palma: verano) |
| `autonomiaCotidiana` | MUY ALTA |
| `casaQueBuscar` | Ascensor o acceso sin barreras, exterior, 2–3 dormitorios y servicios andando... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Más favorable |
| `comunicaciones` | A-28; metro línea B; aeropuerto 15 min |
| `comunicacionesNota10` | `9` |
| `cubiertos` | `105` |
| `dependenciaCocheTexto` | Baja en núcleo bien situado. |
| `despejados` | `85` |
| `estacionalidad2026` | Ciudad anual; verano intensifica playa sin definir toda la actividad. |
| `fibra` | Sí |
| `franja` | A |
| `hospitalMin` | `10` |
| `hospitalPractico2026` | Hospital Póvoa de Varzim–Vila do Conde / red metropolitana según servicio |
| `hospitalPriv` | 30 km · 30 min · CUF Porto |
| `hospitalPub` | 8 km · 10 min · Hospital Póvoa / Vila do Conde |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 5 km · 10 min · Póvoa de Varzim / Vila do Conde; verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `78` |
| `lat` | `41.353` |
| `lluviaDias` | `105` |
| `lluviaMm` | `1200` |
| `lon` | `-8.744` |
| `mapa` | 83_vila_do_conde.png |
| `mercadoReventa` | Mercado relativamente amplio por demanda residencial permanente y servicios. ... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | Núcleo urbano puede superar el promedio municipal; costa y parroquias interiores no son equivalentes. |
| `minBano` | `5` |
| `minCosta` | `3` |
| `municipio` | Vila do Conde |
| `n` | `83` |
| `niebla` | Media |
| `obraNueva` | Sí |
| `pais` | Portugal |
| `palmaDirecta2026` | Porto: Palma observada en la operativa de 2026; rutas y frecuencias cambian por temporada, comprobar antes de viajar. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Porto (verano) · 15 min |
| `paseoCotidiano` | Marginal llana, desembocadura y frente de playa; recorridos largos sin gran desnivel. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Buen equilibrio entre playa, paseo y servicios, a cambio de precio elevado y mayor integración metropolitana. |
| `playaBano` | Vila do Conde / Azurara |
| `playaCotidiana` | SÍ |
| `playaCotidianaModo` | Playas y desembocadura del Ave quedan integradas en el tejido urbano costero. |
| `precioM2` | `2875` |
| `provincia` | Porto |
| `radioCotidiano` | Ciudad costera con comercio, salud, cultura y servicios suficientes para una rutina muy autónoma. |
| `radioSalida` | Porto y Póvoa; otras playas y parroquias del concelho. |
| `sanidadPrimaria2026` | Red urbana de cuidados primários |
| `servicios` | `8` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | No falta nada |
| `slug` | vila-do-conde |
| `solHoras` | `2550` |
| `tempAgua` | 16-18 |
| `tempInvierno` | `10.0` |
| `tempVerano` | `20.0` |
| `transporteRelevante2026` | Metro do Porto conecta con el área metropolitana. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital Póvoa de Varzim–Vila do Conde / red metropolitana según servicio. |
| `viento` | Alta |
| `zona` | Litoral Norte (PT) |

**Highlights capa (autoridad):** autonomia `MUY ALTA` · playa `SÍ` · precioM2 `2875` · servicios `8` · hospitalMin `10` · aeroMin `15`.

### 12.3 Auditorías / plan existentes

**NO PLAN_EDITORIAL** específico Portugal (no hay `PLAN_EDITORIAL_PORTUGAL_*.md`).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n=83 → claves 73–83):

```
| 83 | Vila do Conde | Litoral Norte (PT) | precio relato ~2600 vs ficha 2875 | — | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 83 | Vila do Conde | Litoral Norte (PT) | no | — |
```

**estudio_zonas.md** (histórico — **NO** autoridad 2026):

<details><summary>Recorte estudio</summary>

**Vila do Conde (nº 83).** 80.000 habitantes; casco histórico (Santa Clara, acueducto de 999 arcos, Alfândega, Nau), río Ave, playas de Vila do Conde y Azurara, Mindelo a 10, metro y A28. Servicios 8/10, comunicaciones 9/10. Hospital 10; CUF Porto 30. Aeropuerto 15 (el más rápido de toda la tabla junto a Vigo y A Coruña). Precio 2.600: 2 habitaciones franja A 220.000; obra nueva sí. Dependencia del coche 3/10. Para quién: quien quiera ciudad histórica con el aeropuerto a un cuarto de hora y Porto a media hora.

Si yo fuera tú

Esposende (Ofir o Apúlia) si quieres el máximo sol de la tabla y el mejor aeropuerto para viajar, y aceptas que la montaña quede lejos, el mar esté frío y el viento sople por las tardes de verano.

---

Cierre: si yo fuera tú, en orden

1. **Val Miñor (Gondomar, Nigrán, Baiona).** El máximo sol de España en la tabla, hospital y aeropuerto a 15-25, Vigo a 20,

</details>

### 12.4 Auditoría relato ↔ capa

Estados permitidos: `ALINEADO` · `OBSOLETO` · `DUPLICA_CAPA` · `P4_PRESERVAR` · `SOPORTADO_PERO_INFRAUSADO` · `NO_SOPORTADO_NO_INVENTAR` · `REQUIERE_VERIFICACION_EXTERNA` · `COMUN_PORTUGAL`

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | Chip X/10 repetido en abrir/casa/encaja | `servicios` **8**; No falta nada | DUPLICA_CAPA | Omitir chip; narrar autonomía cualitativa |
| Precio €/m² | Auditoría/estudio ~2600; prosa puede citar cifras o remitir + «000 euros» | `precioM2` **2875** | OBSOLETO | Capa prevalece; omitir cifras; TablaPrecios |
| Prosa rota «000 euros» | Tras remitir a capa queda fragmento «000 euros» (+ totales sueltos a veces) | Cifras viven en `precioM2` / A/B / TablaPrecios | OBSOLETO | Borrar resto roto; no reponer €/m² históricos en prosa |
| Río Ave / mar / Metro | Casco, Azurara, Ave ≠ solo playa | playa **SÍ**; transporte Metro do Porto conecta con el área metropolitana. | ALINEADO | Separar río/mar; Metro solo soporte; no coche-cero periferia |
| Hospital / aero | Comarcal ~10′; Sá Carneiro ~15′ | hosp `10`′; aero `15`′ | ALINEADO | Mejor aero de tabla; una mención |
| Aeropuerto / Palma | Minutos aero + «Palma en verano» (tono permanente posible) | `aeropuertoMin` 15; `aeropuertoPractico2026`=Porto; `palmaDirecta2026` matiza | DUPLICA_CAPA / ALINEADO (matiz temporada) | Consecuencia una vez; no martillar minutos+Palma; no inventar permanente absoluto |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos tiempo→encaja (y a menudo abrir) | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| COMUN_PORTUGAL (fiscal / seguro / tarjeta / Cunqueiro) | Bloques repetidos: régimen fiscal cerrado 2024; seguro privado; tarjeta europea/española; SNS lento | Hecho nacional — no capa municipal | COMUN_PORTUGAL | Extraer a doc común; conservar solo consecuencia local; **no corregir** aquí |

### 12.5 P4 / identidad

- **Preservar:** Santa Clara, acueducto, Ave, Azurara, Metro, aero 15′.
- **Identidad:** ciudad histórica puerta de Porto — propia, no apéndice de Póvoa.
- **Peaje:** bloques frente; mar frío; A28 hora punta.

### 12.6 Vida cotidiana soportada

| Elemento | Clasificación | Base repo |
|---|---|---|
| Autonomía | YA SOPORTADO | `MUY ALTA` |
| Coche | YA SOPORTADO | `Baja en núcleo bien situado.` |
| Servicios cotidianos | YA SOPORTADO | servicios `8` — No falta nada |
| Paseo | YA SOPORTADO | Marginal llana, desembocadura y frente de playa; recorridos largos sin gran desnivel. |
| Pendiente | N/A / null | `null` |
| Microzona | YA SOPORTADO / INFRAUSADO | adv: — / microPrecio: Núcleo urbano puede superar el promedio municipal… |
| Compra enero / estacionalidad | YA SOPORTADO en relato+capa | Ciudad anual; verano intensifica playa sin definir toda la actividad. |
| Transporte relevante | YA SOPORTADO | Metro do Porto conecta con el área metropolitana. |
| Nombres café / horarios exactos | NO SOPORTADO | — |
| Totales A/B en prosa | NO SOPORTADO (viven en tabla) | A_3hab `336375` / B_3hab `271688` |
| Burocracia nacional (fiscal/NIF/CRUE) | COMUN_PORTUGAL | No repetir 11×; ver §13 |

### 12.7 Reality toll

- Autonomía **MUY ALTA**
- Playa **SÍ**; Ave vs mar
- Metro + aero **15′**
- Hospital ~**10′**
- Precio **2875**

### 12.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | Auditoría ~2600 (histórico prosa/estudio) | **2875** | OBSOLETO — capa prevalece |
| A_3hab / B_3hab | No narrar totales | `336375` / `271688` | TablaPrecios |
| casaQueBuscar / reventa | Cualitativo | Ver tabla capa | `casaQueBuscar` truncado `…` → **DESEABLE** texto completo (no bloquea v1); `mercadoReventa` truncado `…` → **DESEABLE** texto completo (no bloquea v1) |
| «000 euros» | Presente tras remitir a capa (varios) | — | Borrar resto roto |

### 12.9 Clima: deuda / duplicación (NO correct)

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en `tiempo` + `encaja` (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `vila-do-conde` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_32.**

### 12.10 Mar / río / playa / paseo

- **playaCotidiana:** `SÍ`
- **Modo:** Playas y desembocadura del Ave quedan integradas en el tejido urbano costero.
- **paseoCotidiano:** Marginal llana, desembocadura y frente de playa; recorridos largos sin gran desnivel.
- **pendiente:** `null`
- Ave ≠ mar; Azurara/playa según zona.
- No contradecir la etiqueta de playa de la capa.

### 12.11 Frontera / España

*(No es eje frontera Galicia–Portugal de rutina; omitir o solo salida ocasional si el relato lo menciona.)*

### 12.12 COMUN_PORTUGAL (local excerpts — NO correct)

- **seguro privado portugués** → COMUN_PORTUGAL: …rto, a unos treinta. Hay que contar con seguro privado portugués —público más lento, como en el Alto Minho—. No hay tarjet…
- **tarjeta española de diario** → COMUN_PORTUGAL: …s lento, como en el Alto Minho—. No hay tarjeta española de diario. Empadronarse aquí abre ciudad; el privado de ref…
- **SNS / público más lento** → COMUN_PORTUGAL: …ue contar con seguro privado portugués —público más lento, como en el Alto Minho—. No hay tarjeta española de diario.…

**Tratamiento:** marcar, no corregir; extraer a §13; conservar solo consecuencia local (minutos hospital/aero/coche).

### 12.13 No soportado / no inventar

- ~2600 vigente
- Coche-cero periferia por Metro
- Confundir Ave = playa
- Chip 8/10 / 9/10
- Palma permanente

---



## 13. Información común Portugal detectada (COMUN_PORTUGAL)

> Extraído **solo del repo** (11 relatos). **No** corregir. **No** investigar. Trabajo futuro: doc común + consecuencia local.

| Tema | Texto actual (snip) | Lugares | Fuente repo | Local/común | Riesgo | Tratamiento futuro |
|---|---|---|---|---|---|---|
| Régimen fiscal especial cerrado 2024 | …r conexiones y Porto. El régimen fiscal especial para residentes extranjeros se cerró en 2024:… | Valença, Vila Nova de Cerveira, Caminha, Moledo (Caminha), Vila Praia de Âncora, Afife-Carreço, Viana do Castelo, Ponte de Lima, Esposende | `relatos-alto-minho.ts / relatos-litoral-norte.ts` | **COMÚN** | Repetición 11× hincha relatos; desfase si cambia norma | **Extraer a doc común**; no repetir 11×; conservar solo consecuencia local (minutos/trayecto); **no corregir** en CURSOR_32 |
| Seguro privado portugués | …ando. Hay que contar con seguro privado portugués —Trofa Saúde, en Braga, alrededor de cincuenta minut… | Valença, Vila Nova de Cerveira, Caminha, Moledo (Caminha), Vila Praia de Âncora, Afife-Carreço, Viana do Castelo, Ponte de Lima, Esposende, Póvoa de Varzim, Vila do Conde | `relatos-alto-minho.ts / relatos-litoral-norte.ts` | **COMÚN** | Repetición 11× hincha relatos; desfase si cambia norma | **Extraer a doc común**; no repetir 11×; conservar solo consecuencia local (minutos/trayecto); **no corregir** en CURSOR_32 |
| Tarjeta europea / no residente / Cunqueiro | …cuarenta minutos. Álvaro Cunqueiro, en Vigo, queda a unos treinta y cinco, pero como no r… | Valença | `relatos-alto-minho.ts / relatos-litoral-norte.ts` | **COMÚN** | Repetición 11× hincha relatos; desfase si cambia norma | **Extraer a doc común**; no repetir 11×; conservar solo consecuencia local (minutos/trayecto); **no corregir** en CURSOR_32 |
| Tarjeta española de diario | …a es más lenta: no es la tarjeta española de diario.",       "El aeropuerto de Vigo está a unos … | Valença, Vila Praia de Âncora, Viana do Castelo, Ponte de Lima, Esposende, Póvoa de Varzim, Vila do Conde | `relatos-alto-minho.ts / relatos-litoral-norte.ts` | **COMÚN** | Repetición 11× hincha relatos; desfase si cambia norma | **Extraer a doc común**; no repetir 11×; conservar solo consecuencia local (minutos/trayecto); **no corregir** en CURSOR_32 |
| Trofa Saúde | …eguro privado portugués —Trofa Saúde, en Braga, alrededor de cincuenta minutos—. La sani… | Valença, Vila Nova de Cerveira, Caminha, Moledo (Caminha), Vila Praia de Âncora, Afife-Carreço, Viana do Castelo, Ponte de Lima, Esposende | `relatos-alto-minho.ts / relatos-litoral-norte.ts` | **COMÚN** | Repetición 11× hincha relatos; desfase si cambia norma | **Extraer a doc común**; no repetir 11×; conservar solo consecuencia local (minutos/trayecto); **no corregir** en CURSOR_32 |
| SNS / público más lento | …e cincuenta minutos—. La sanidad pública portuguesa es más lenta: no es la tarjeta española de diario.",  … | Valença, Vila Nova de Cerveira, Caminha, Viana do Castelo, Esposende, Póvoa de Varzim, Vila do Conde | `relatos-alto-minho.ts / relatos-litoral-norte.ts` | **COMÚN** | Repetición 11× hincha relatos; desfase si cambia norma | **Extraer a doc común**; no repetir 11×; conservar solo consecuencia local (minutos/trayecto); **no corregir** en CURSOR_32 |
| CUF Porto | …da a unos cinco minutos; CUF Porto anda hacia los treinta y cinco. Hay que contar con seg… | Póvoa de Varzim, Vila do Conde | `relatos-alto-minho.ts / relatos-litoral-norte.ts` | **COMÚN** | Repetición 11× hincha relatos; desfase si cambia norma | **Extraer a doc común**; no repetir 11×; conservar solo consecuencia local (minutos/trayecto); **no corregir** en CURSOR_32 |
| Papeleo / empadronarse (contexto) | … a Galicia por pan o por papeleo, y quien busca precio de valle con un pie en cada país… | Valença, Afife-Carreço, Esposende, Vila do Conde | `relatos-alto-minho.ts / relatos-litoral-norte.ts` | **COMÚN** | Repetición 11× hincha relatos; desfase si cambia norma | **Extraer a doc común**; no repetir 11×; conservar solo consecuencia local (minutos/trayecto); **no corregir** en CURSOR_32 |

**Regla de reescritura futura:** un bloque común (o enlace) + en cada pueblo solo lo que cambia el día a día (minutos a Trofa/Santa Luzia/CUF, si Cunqueiro es realista por frontera, etc.).

---

## 14. Referencia editorial

> Relatos **ya reescritos / aprobados** usados solo como referencia de densidad, omisión de chips/€, tradeoffs y microzonas.  
> **No** plantilla de frases ni topónimos. **No** modificar estos archivos.  
> Referencias CURSOR_32: **Ribadeo**, **Luarca/Valdés**, **Santander**, **Castro-Urdiales**.

### ribadeo

> CITA LITERAL — `web/src/lib/relatos-a-marina.ts` clave `ribadeo`.

```ts
ribadeo: {
    escala: "Villa de frontera y As Catedrais",
    abrir: [
      "Ribadeo funciona primero como villa y después como destino. El casco indiano, el puerto y la ría del Eo forman el escenario cotidiano; al otro lado está Castropol y, cruzando el puente dos Santos, Asturias deja de ser una excursión para convertirse en parte del mapa mental. As Catedrais pertenecen a otro radio: son una salida, no la playa que aparece al bajar andando desde el centro.",
      "Un martes de noviembre se puede resolver mucha vida dentro de la villa. Comercio, atención primaria, farmacias, biblioteca, piscina y gimnasio sostienen actividad durante todo el año. En verano aumenta la presión turística, sobre todo en los accesos a As Catedrais, pero Ribadeo no depende de esa temporada para funcionar."
    ],
    tiempo: [
      "Frente a Mallorca, Ribadeo sigue siendo cantábrico: verano fresco, humedad y muchos más días grises, aunque la niebla pesa algo menos que en el extremo occidental de A Mariña. En una vivienda del casco o próxima a la ría conviene comprobar luz, ventilación y aislamiento durante tiempo húmedo, no solo en agosto.",
      "La ría es el agua cotidiana de la villa. Puerto, miradores y paseo permiten vivirla sin coger el coche; para las playas atlánticas, incluida As Catedrais, hay que salir. Esa diferencia evita confundir tener mucha costa alrededor con tener una playa marítima urbana a la puerta."
    ],
    vivir: [
      "La autonomía cotidiana es fuerte. El centro concentra comercio y servicios suficientes para que el coche no organice cada recado, y una mañana libre puede alternar calles del casco, biblioteca o deporte con el paseo hacia la ría y el puerto. Esa vida anual es una diferencia importante frente a municipios más dispersos de A Mariña.",
      "La frontera se usa, no solo se contempla. La ría del Eo y el puente dos Santos conectan visual y prácticamente Galicia con Asturias; la A-8 refuerza esa posición. El tren de ancho métrico existe, aunque su utilidad concreta debe valorarse sin asumir que sustituye al coche para todos los desplazamientos.",
      "La sanidad hospitalaria obliga a salir de la villa. La capa práctica sitúa el Hospital da Mariña en Burela y conserva Jarrio como referencia histórica próxima, por lo que no conviene simplificar la asignación sanitaria por la mera cercanía asturiana. La consecuencia para la vida diaria es que la atención primaria está en Ribadeo y el hospital requiere desplazamiento.",
      "El aeropuerto de Asturias queda claramente mejor situado aquí que desde el oeste de A Mariña, aunque los vuelos directos a Palma son estacionales y la programación debe comprobarse. Es una ventaja logística real sin necesidad de repetir kilómetros y minutos en cada sección.",
      "As Catedrais cambian el verano. Los arcos y la marea atraen mucha más afluencia que un día ordinario en la ría; vivir en un acceso afectado por ese movimiento exige haber probado la zona durante temporada alta, no solo haber visitado la playa una vez."
    ],
    historia: [
      "El casco indiano explica una parte importante de la personalidad urbana. La Torre dos Moreno y las casas vinculadas a quienes regresaron de América hablan de una villa con historia comercial y de prestigio, no únicamente de un punto de paso hacia una playa famosa.",
      "Illa Pancha, el puerto y la ría del Eo completan esa identidad de frontera marítima. La Reserva de la Biosfera del Eo da contexto al paisaje compartido con Asturias; As Catedrais añaden el gran imán natural, pero no sustituyen la vida de la villa."
    ],
    fuera: [
      "Para el día a día, el paseo villa–ría–puerto y los miradores permiten salir de casa y caminar junto al agua. Illa Pancha amplía esa relación costera. Os Bloques añade otra referencia de orilla, mientras las playas atlánticas quedan fuera del radio peatonal normal del centro.",
      "As Catedrais son una salida deliberada: marea, arcos y mucha más presión de visitantes en fechas fuertes. Castropol ofrece al otro lado de la ría otra escala de villa; hacia el oeste, Barreiros y Foz amplían playas y paseo."
    ],
    casa: [
      "En el casco pesan accesibilidad, ascensor o escaleras, estado de la reforma, humedad y luz. Cerca de la ría cambian vistas y exposición; en las salidas hacia la costa atlántica conviene comprobar cuánto tráfico estacional afecta realmente a la calle.",
      "La vivienda debe elegirse pensando en la ventaja principal de Ribadeo —una villa bastante autónoma— sin pagar con una microzona que obligue a usar el coche para lo que se quería hacer andando. Precio y estimaciones quedan en la capa factual y en la tabla."
    ],
    encaja: {
      si: [
        "Encaja si se valora una villa con actividad anual, bastante autonomía a pie y una relación cotidiana con la ría, además de una conexión sencilla con Asturias. Casco, comercio, servicios y paseo pueden formar parte de la misma rutina.",
        "También encaja si As Catedrais se entienden como una salida extraordinaria y no como la definición completa del municipio. Ribadeo conserva vida propia cuando desaparece la afluencia de los arcos."
      ],
      no: [
        "Encaja peor si el hospital debe estar en el propio municipio o si se quiere una playa atlántica de baño integrada a pie en la villa. La ría es cotidiana; el hospital y las playas abiertas están fuera de ese radio.",
        "Tampoco si la presión turística de verano en los accesos a As Catedrais resulta incompatible con la vivienda elegida. La calle concreta importa mucho más que la fama general de la villa."
      ],
      veredicto:
        "Ribadeo combina una autonomía cotidiana fuerte con casco indiano, puerto y ría del Eo, y suma una conexión especialmente práctica con Asturias. Su peaje está en salir para hospital y playas atlánticas y en gestionar la presión estacional de As Catedrais; por eso conviene distinguir siempre la villa cotidiana del gran destino turístico cercano."
    },
    fotosAbrir: [
      { src: "/fotos/a-marina/ribadeo-catedrais.jpg", pie: "As Catedrais, a unos diez minutos de Ribadeo" },
      { src: "/fotos/a-marina/ribadeo-villa.jpg", pie: "Casco indiano de Ribadeo" },
    ],
    fotosHistoria: [
      { src: "/fotos/a-marina/ribadeo-ilha-pancha.jpg", pie: "Illa Pancha, faro en el islote" },
      { src: "/fotos/a-marina/ribadeo-puente.jpg", pie: "Puente sobre la ría del Eo" },
    ],
    fotosFuera: [
      { src: "/fotos/a-marina/ribadeo-puerto.jpg", pie: "Puerto de Ribadeo" },
      { src: "/fotos/a-marina/ribadeo-paseo.jpg", pie: "Paseo y orilla en Ribadeo" },
    ],
    creditoFotos: credito,
  }
```
### luarca-valdes

> CITA LITERAL — `web/src/lib/relatos-asturias-occidente.ts` clave `luarca-valdes`.

```ts
luarca-valdes: {
    escala: "Villa blanca entre puerto y laderas",
    abrir: [
      "Luarca concentra una imagen muy reconocible: puerto, río Negro, puentes y casas blancas encajados entre laderas. Esa belleza tiene una consecuencia práctica inmediata: la cota importa. La zona baja reúne buena parte del comercio, los servicios y el paseo; subir hacia la Atalaya, el cementerio o viviendas altas cambia la caminabilidad aunque la distancia sobre el mapa parezca corta.",
      "Fuera del verano sigue funcionando como villa comarcal. Se puede hacer bastante vida a pie si la vivienda está bien situada en la zona baja, mientras las cotas altas y otras partes de Valdés aumentan la dependencia del coche. Hablar de Luarca no equivale a describir todo el concejo."
    ],
    tiempo: [
      "El contraste con Mallorca aparece en un verano fresco, humedad y muchos más días grises. Cerca del puerto también cuentan el salitre y la exposición; en casas antiguas o indianas conviene revisar aislamiento, galerías, ventilación y mantenimiento antes de dejarse llevar por la fachada.",
      "Las playas primera y segunda están junto a la villa, pero que sean cotidianas depende de la cota de la vivienda. El mar puede quedar muy cerca en horizontal y exigir una subida importante al volver: aquí distancia y facilidad para caminar no son lo mismo."
    ],
    vivir: [
      "En la zona baja una mañana puede enlazar mercado, comercio, farmacia, puerto y los puentes del río Negro sin necesidad de coche. Esa autonomía cambia al subir de cota, por lo que dos viviendas separadas por poca distancia pueden producir rutinas muy distintas.",
      "El paseo ordinario discurre por el puerto y la parte baja. La Atalaya, el cementerio, la ermita y el faro amplían ese recorrido con subida; son parte esencial de la imagen de Luarca, pero no deben describirse como si fueran una prolongación llana del paseo.",
      "Para atención hospitalaria hay que desplazarse a Jarrio. El aeropuerto de Asturias queda relativamente accesible dentro de la escala occidental, aunque las conexiones con Palma dependen de la programación de temporada. El tren de ancho métrico forma parte de las comunicaciones, sin que eso convierta cualquier vivienda en bien conectada a pie con el ferrocarril.",
      "El verano añade visitantes al puerto, las playas y los miradores, mientras la base comercial y de servicios continúa fuera de temporada. Esa vida anual permite distinguir la villa de un enclave puramente vacacional, pero una casa junto al frente más visitado vivirá agosto de manera distinta a otra en una calle menos expuesta."
    ],
    historia: [
      "El río Negro atraviesa el casco y sus puentes cosen las dos orillas. Sobre la villa, la Atalaya reúne cementerio, ermita y vistas al Cantábrico; el faro completa una silueta que explica buena parte de la identidad de Luarca.",
      "Las casas de Indianos añaden otra capa: arquitectura ligada al retorno de América, atractiva pero también exigente cuando se convierte en vivienda. En el resto de Valdés, lugares como Otur, Cueva o Cadavedo recuerdan que el concejo es bastante más amplio que la villa blanca."
    ],
    fuera: [
      "El puerto y la zona baja permiten un paseo cotidiano fácil de integrar en la rutina. Las playas primera y segunda están próximas, aunque su comodidad real depende de dónde esté la casa y de la pendiente que haya que salvar.",
      "Subir hacia la Atalaya y el cementerio cambia el esfuerzo y también la perspectiva. Para ampliar el día aparecen los Jardines de la Fonte Baxa, los miradores y Cabo Busto; Otur, Cueva y Cadavedo son salidas por la costa de Valdés, no extensiones caminables de cualquier vivienda en Luarca."
    ],
    casa: [
      "La primera pregunta no es solo casco o afueras, sino a qué cota está la vivienda. En la zona baja se aprovechan mejor comercio, puerto y servicios a pie; en barrios altos o viviendas exteriores el coche y las pendientes pueden cambiar por completo la rutina.",
      "En pisos y casas blancas conviene revisar humedad, accesibilidad y orientación. En viviendas indianas se añade el mantenimiento de una tipología más compleja. Los precios y estimaciones quedan en la capa factual y en la tabla; aquí importa comprobar acceso, escaleras, aparcamiento y recorrido real hasta los servicios."
    ],
    encaja: {
      si: [
        "Encaja si se busca una villa con vida anual donde puerto, comercio y paseo puedan formar parte de la rutina, y se elige la vivienda entendiendo bien la topografía. En la zona baja la autonomía cotidiana es fuerte y el mar está integrado en el paisaje urbano.",
        "También encaja si las pendientes no impiden disfrutar de la Atalaya, el faro y los miradores como extensiones del paseo, y si se acepta salir en coche para explorar el resto de Valdés o llegar al hospital."
      ],
      no: [
        "Encaja peor si se necesita una caminabilidad uniforme y sin cuestas. Una vivienda alta puede estar muy cerca del puerto sobre el mapa y resultar mucho menos cómoda en la práctica; esa diferencia no se corrige con una descripción genérica de Luarca.",
        "Tampoco si se espera que todo Valdés funcione como la zona baja de la villa o que Palma sea una conexión permanente. Microzona, pendiente y logística de temporada forman parte de la decisión."
      ],
      veredicto:
        "Luarca combina una villa comarcal activa con un paisaje de puerto y laderas muy reconocible. Su gran variable cotidiana es la topografía: bien situada en la zona baja permite mucha vida a pie; en cotas altas cambia el esfuerzo y la dependencia del coche. Entender esa diferencia es más útil que tratar toda Luarca o todo Valdés como una sola experiencia."
    },
    fotosAbrir: [
      { src: "/fotos/asturias-occidente/luarca-puerto.jpg", pie: "Puerto de Luarca" },
      { src: "/fotos/asturias-occidente/luarca-casco.jpg", pie: "Casco blanco de Luarca" },
    ],
    fotosHistoria: [
      { src: "/fotos/asturias-occidente/luarca-cementerio.jpg", pie: "Camino y acantilado sobre Luarca" },
    ],
    fotosFuera: [
      { src: "/fotos/asturias-occidente/luarca-faro.jpg", pie: "Faro de Luarca" },
      { src: "/fotos/asturias-occidente/luarca-playa.jpg", pie: "Playa de Luarca" },
    ],
    creditoFotos: credito,
  }
```
### santander

> CITA LITERAL — `web/src/lib/relatos-cantabria-occidental.ts` clave `santander`.

```ts
santander: {
    escala: "Ciudad atlántica junto a la bahía",
    abrir: [
      "Santander es una ciudad completa, no una villa con playa. La bahía, Puerto Chico, la Magdalena y el Sardinero permiten vivir el mar dentro de la ciudad, mientras el centro concentra comercio, cultura, sanidad y servicios de una escala que ningún otro lugar cántabro del estudio reproduce.",
      "La autonomía cotidiana es muy alta y puede ser baja la dependencia del coche en barrios centrales bien elegidos. Pero la ciudad tiene cuestas y microzonas muy distintas: centro, Sardinero y periferia cambian playa, pendiente, precio y forma de moverse.",
      "La playa es realmente cotidiana en zonas costeras, no desde cualquier barrio. Elegir vivienda exige decidir si pesa más tener el Sardinero cerca, la vida del centro o una ubicación más periférica.",
    ],
    tiempo: [
      "El clima marítimo trae humedad, lluvia repartida y veranos suaves. Frente a Mallorca hay menos continuidad de sol; en una ciudad con cuestas y fachadas expuestas importa especialmente orientación, aislamiento y recorrido peatonal en días de lluvia. Las cifras permanecen en la capa factual.",
    ],
    vivir: [
      "Aquí una mañana libre no depende del coche: compra, sanidad, cultura, paseo y transporte forman parte de una ciudad activa todo el año. Según barrio, la bahía o el Sardinero pueden incorporarse al recorrido ordinario.",
      "El hospital de Valdecilla y el aeropuerto están integrados en una logística urbana muy favorable. Palma depende de la programación publicada y no debe presentarse como garantía permanente.",
      "El verano aumenta la afluencia en Sardinero y frentes turísticos, pero no sustituye la base anual de la ciudad. El peaje no es falta de servicios sino tráfico, precio y elegir bien entre playa, centro y pendiente.",
    ],
    historia: [
      "La bahía ha organizado la ciudad tanto como sus barrios. Paseo de Pereda, Puerto Chico, Magdalena y Sardinero muestran distintas etapas de una capital marítima que creció entre puerto, veraneo y servicios.",
      "Cabo Mayor amplía el frente costero hacia un paisaje más abierto, mientras el centro mantiene la dimensión administrativa y comercial.",
    ],
    fuera: [
      "El paseo cotidiano puede ir por la bahía y Puerto Chico hacia la Magdalena, o concentrarse en Sardinero según la vivienda. No existe un único paseo residencial válido para toda Santander.",
      "Cabo Mayor y Mataleñas amplían la costa sin salir de la lógica urbana; otras playas y la bahía oriental permiten salidas cercanas sin que la ciudad dependa de ellas para tener vida propia.",
    ],
    casa: [
      "La microzona es decisiva. Centro, Sardinero y barrios periféricos cambian precio, pendiente, playa y necesidad de coche. Una vivienda aparentemente céntrica puede exigir cuestas que alteren la comodidad diaria.",
      "Priorizar ascensor y ausencia de barreras cuando corresponda, orientación, aislamiento, aparcamiento si se necesita coche y recorrido real a servicios. Los precios quedan en la tabla factual.",
    ],
    encaja: {
      si: [
        "Encaja si se busca máxima autonomía cotidiana, sanidad y cultura sin renunciar a una relación urbana real con el mar.",
        "También si se acepta escoger barrio con cuidado para equilibrar playa, centro, cuestas y movilidad.",
      ],
      no: [
        "Encaja peor si se busca escala de pueblo, poco tráfico o una vivienda costera económica.",
        "También si se presupone que toda la ciudad permite bajar andando al Sardinero con la misma facilidad.",
      ],
      veredicto:
        "Santander ofrece la autonomía de una capital con una relación excepcionalmente directa con bahía y playas. Su decisión residencial no es ciudad sí o no, sino qué barrio: esa elección determina mar cotidiano, cuestas, precio y dependencia del coche."
    },
 fotoIdentidad: {
 src: "/fotos/cantabria-occidental/santander-identidad.jpg",
 pie: "Santander: casas de la ciudad frente a la bahía, con los montes detrás",
 },
 fotosAbrir: [
 { src: "/fotos/cantabria-occidental/santander-bahia.jpg", pie: "Bahía de Santander" },
 { src: "/fotos/cantabria-occidental/santander-sardinero.jpg", pie: "El Sardinero, Santander" },
 ],
 fotosHistoria: [
 { src: "/fotos/cantabria-occidental/santander-pereda.jpg", pie: "Paseo de Pereda, Santander" },
 { src: "/fotos/cantabria-occidental/santander-botin.jpg", pie: "Centro Botín, Santander" },
 ],
 fotosFuera: [
 { src: "/fotos/cantabria-occidental/santander-magdalena.jpg", pie: "Península de la Magdalena" },
 { src: "/fotos/cantabria-occidental/santander-cabo-mayor.jpg", pie: "Cabo Mayor, Santander" },
 ],
 creditoFotos: credito,
  }
```
### castro-urdiales

> CITA LITERAL — `web/src/lib/relatos-cantabria-oriental.ts` clave `castro-urdiales`.

```ts
castro-urdiales: {
    escala: "Ciudad costera en el eje de Bilbao",
    abrir: [
      "Castro-Urdiales tiene escala de ciudad pequeña y una doble orientación: puerto y costa cántabra por un lado, y una relación cotidiana muy fuerte con el eje de Bilbao por otro. El casco, Santa María, el castillo-faro y el puente forman un frente histórico que se enlaza con el paseo marítimo.",
      "La autonomía cotidiana es fuerte: comercio y servicios permiten resolver la rutina en el núcleo con una dependencia baja-media del coche. Para hospital, la referencia práctica de la capa es Laredo; no debe sustituirse por Cruces por simple proximidad metropolitana.",
      "Brazomar y otras playas o calas se integran en el frente urbano según barrio, pero la etiqueta correcta es parcial: no toda vivienda tiene la misma relación caminable con el baño.",
    ],
    tiempo: [
      "El clima es marítimo, húmedo y de verano suave, con menos continuidad de sol que Mallorca. En el frente costero conviene revisar salitre, ventilación, aislamiento y exposición. Las cifras detalladas quedan en la capa factual.",
    ],
    vivir: [
      "Puerto, casco, comercio y paseo permiten una vida urbana anual que no depende del verano. La conexión por carretera y autobús con el área de Bilbao amplía empleo, compras y aeropuerto sin borrar la autonomía propia de Castro.",
      "El hospital práctico sigue siendo Laredo según la capa 2026. El aeropuerto útil puede ser Bilbao y la conexión con Palma debe entenderse dentro de su programación, no como una propiedad de Castro.",
      "El verano añade visitantes al frente marítimo y a las playas, pero la ciudad mantiene una base residencial y de servicios durante el resto del año.",
    ],
    historia: [
      "Santa María, el castillo-faro y el puente forman una de las siluetas históricas más reconocibles de la costa oriental. El puerto explica el origen marítimo; el crecimiento residencial posterior explica la fuerte relación actual con Bizkaia.",
      "Esa doble órbita es parte de la identidad: Castro no es solo destino de playa ni solo ciudad dormitorio, sino una ciudad costera con vida propia y conexiones metropolitanas.",
    ],
    fuera: [
      "El puerto, el casco y el frente hacia Brazomar permiten paseos cotidianos sin salir de la ciudad. La playa puede integrarse mucho en algunos barrios y menos en otros.",
      "Oriñón, Islares y otros tramos de costa amplían el radio de salida. Bilbao añade una dimensión metropolitana para cultura, compras y aeropuerto, pero no sustituye los servicios básicos de Castro.",
    ],
    casa: [
      "La vivienda debe valorarse por barrio: distancia real al casco y al mar, aparcamiento, ruido de ejes de salida y facilidad para enlazar con Bilbao pueden cambiar la rutina.",
      "En primera línea o zonas expuestas revisar salitre, aislamiento, ventilación y mantenimiento. Los precios actualizados quedan en la capa factual y la tabla.",
    ],
    encaja: {
      si: [
        "Encaja si se busca una ciudad costera con servicios propios y una conexión muy fuerte con Bilbao, sin renunciar a puerto y paseo marítimo.",
        "También si se acepta que hospital y algunas funciones metropolitanas están fuera y que la playa cotidiana depende del barrio.",
      ],
      no: [
        "Encaja peor si se quiere una villa pequeña y aislada de una dinámica metropolitana.",
        "Tampoco si se presupone que Cruces es el hospital práctico asignado o que todas las zonas residenciales tienen playa a pie.",
      ],
      veredicto:
        "Castro-Urdiales combina autonomía urbana, patrimonio marítimo y acceso al eje de Bilbao. Su lectura residencial correcta mantiene dos matices: el hospital práctico de la capa está en Laredo y la relación cotidiana con la playa cambia según el barrio."
    },
 fotosAbrir: [
 { src: "/fotos/cantabria-oriental/castro-villa.jpg", pie: "Castro-Urdiales: villa medieval" },
 { src: "/fotos/cantabria-oriental/castro-paseo.jpg", pie: "Paseo de Castro-Urdiales" },
 ],
 fotosHistoria: [
 { src: "/fotos/cantabria-oriental/castro-santa-maria.jpg", pie: "Iglesia de Santa María, Castro-Urdiales" },
 ],
 fotosFuera: [
 { src: "/fotos/cantabria-oriental/castro-brazomar.jpg", pie: "Playa de Brazomar, Castro-Urdiales" },
 { src: "/fotos/cantabria-oriental/castro-ostende.jpg", pie: "Playa de Ostende, Castro-Urdiales" },
 ],
 creditoFotos: credito,
  }
```

---

## 15. Matriz final (11/11)

| Lugar | Autonomía | Coche | Estacionalidad | Mar/río cotidiano | Paseo | Hospital | Aeropuerto | Palma | Precio/fiabilidad | Microzona | P4 | Reality toll | Frontera | COMUN_PORTUGAL | Conflicto viejo | Investigación externa obligatoria v1 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Valença | MEDIA-FUERTE | Baja-media en núcleo; coche/tren p… | Ciudad fronteriza con vida an… | NO | Fortaleza y ribera/ecopista del Mi… | 35′ | Porto | Porto: Palma observada en la operativa … | 1270 vs ~1300 | — | Fortaleza+Tui+Ecopista | EXC hosp/aero; calor valle; precio 1270 vs ~1300 prosa | SÍ eje Tui | fiscal/seguro/tarjeta | ~1300≠1270; chips; clima | SÍ — hosp práctico vs Conde; aero Porto vs Vigo |
| Vila Nova de Cerveira | MEDIA | Media; rutina básica local, coche/… | Vida local anual con turismo … | NO MARÍTIMA | Ecopista do Rio Minho: recorrido l… | 35′ | Porto | Porto: Palma observada en la operativa … | 1339 vs ~1500 | — | Miño+Bienal+fluvial | Serv 5; mar salida; precio 1339 | SÍ Goián | fiscal/seguro/tarjeta | ~1500≠1339; chips; clima | **NO** |
| Caminha | MEDIA-FUERTE | Baja-media en villa; coche/tren pa… | Vida anual con aumento turíst… | PARCIAL | Frente del estuario, casco y riber… | 30′ | Porto | Porto: Palma observada en la operativa … | 2082 vs ~1900 | Caminha villa, Moledo y Vila Praia de Â… | Desembocadura+Ínsua+ferry | Microzona≠Moledo/Âncora; precio 2082 | SÍ ferry A Guarda | fiscal/seguro/tarjeta | ~1900≠2082; chips; clima | **NO** |
| Moledo (Caminha) | BAJA-MEDIA | Media-alta fuera de la rutina míni… | Marcadamente residencial/turí… | SÍ | Frente de playa y costa; exposició… | 25′ | Porto | Porto: Palma observada en la operativa … | 1909 vs ~2300 | Moledo es una microzona costera de Cami… | Pinar+dunas+nortada | Auto BAJA-MEDIA; nortada; precio 1909 | vista/salida | fiscal/seguro/tarjeta | ~2300≠1909; chips; clima | **NO** |
| Vila Praia de Âncora | MEDIA-FUERTE | Media; tren ayuda para Caminha/Via… | Vida local anual con fuerte c… | SÍ | Marginal, puerto y playa; recorrid… | 20′ | Porto | Porto: Palma observada en la operativa … | 2692 vs ~2000 | — | Espigón+puerto+tren | Agosto; precio 2692 | débil | fiscal/seguro/tarjeta | ~2000≠2692; chips; clima | **NO** |
| Afife-Carreço | BAJA-MEDIA | Alta para vida cotidiana completa. | Residencial anual con fuerte … | DEPENDE VIVIENDA | Caminos y costa según ubicación; n… | 15′ | Porto | Porto: Palma observada en la operativa … | null n.d. vs ~2100 | Afife y Carreço son parroquias costeras… | Granito+Arga+Paçô | precio null n.d.; coche; serv 3 | no eje | fiscal/seguro/tarjeta | hist~2100 vs null; chips; clima | **NO** |
| Viana do Castelo | MUY ALTA | Baja en centro bien situado; mayor… | Ciudad plenamente anual. | DEPENDE MICROZONA | Marginal del Lima, centro y ecovia… | 5′ | Porto | Porto: Palma observada en la operativa … | 2337 vs ~2100 | Centro histórico, Cabedelo y parroquias… | Ciudad+Santa Luzia+Lima | Playa microzona; precio 2337 | no eje | fiscal/seguro/tarjeta | ~2100≠2337; chips; clima | **NO** |
| Ponte de Lima | FUERTE | Baja-media en centro; coche para c… | Villa anual con turismo cultu… | NO | Ecovia/ribera del Lima y puente hi… | 5′ | Porto | Porto: Palma observada en la operativa … | 1626 vs ~1500 | Centro de la villa puede cotizar por en… | Puente+río Lima (NO mar) | NO mar; calor/niebla; 1626 | no | fiscal/seguro/tarjeta | ~1500≠1626; chips; clima | **NO** |
| Esposende | MEDIA-FUERTE | Media; núcleo resoluble, coche par… | Vida anual con presión coster… | SÍ/PARCIAL SEGÚN MICROZONA | Marginal del Cávado y recorridos d… | 25′ | Porto | Porto: Palma observada en la operativa … | 2462 vs ~2300 | Esposende ciudad, Ofir/Fão y Apúlia ofr… | Cávado+Ofir+Apúlia | No tren; Cávado≠Atlántico; 2462 | no | fiscal/seguro/tarjeta | ~2300≠2462; chips; clima | **NO** |
| Póvoa de Varzim | MUY ALTA | Baja en zona urbana bien situada. | Ciudad plenamente anual, aunq… | SÍ | Marginal marítima de varios kilóme… | 5′ | Porto | Porto: Palma observada en la operativa … | 2730 vs ~2600 | — | Paseo+Metro+balneario | Metro≠coche0; bloques; 2730 | no | fiscal/seguro/tarjeta | ~2600≠2730; chips; clima | **NO** |
| Vila do Conde | MUY ALTA | Baja en núcleo bien situado. | Ciudad anual; verano intensif… | SÍ | Marginal llana, desembocadura y fr… | 10′ | Porto | Porto: Palma observada en la operativa … | 2875 vs ~2600 | Núcleo urbano puede superar el promedio… | Santa Clara+Ave+aero15′ | Metro≠coche0; precio 2875 | no | fiscal/seguro/tarjeta | ~2600≠2875; chips; clima | **NO** |

### Investigación externa (clasificación)

| Tema | Clase | Nota |
|---|---|---|
| Valença hospital práctico (Santa Luzia) vs prosa Conde ~40′ | **OBLIGATORIA V1** (excepción aislada) | Alinear con capa práctico; documentar `hospitalPub` Conde |
| Valença aero práctico Porto vs prosa Vigo primario | **OBLIGATORIA V1** (excepción aislada) | Porto manda; Vigo como apoyo frontera si se menciona |
| Afife `precioM2` null | **Documentar** | Nunca reponer 2100 / media Viana |
| Texto completo `casaQueBuscar` / `mercadoReventa` truncados `…` | **DESEABLE** | Relato cualitativo sin string completo |
| Horarios ferry Caminha / frecuencias tren/Metro | **NO NECESARIA** | «Cuando opera» / sin inventar |
| Corregir metodología despejados/cubiertos | **NO NECESARIA** | Deuda marcada; no inventar |
| Burocracia nacional (fiscal/NIF/CRUE/S1) | **Aparte (COMUN_PORTUGAL)** | No bloquea v1 local |
| **Obligatoria para v1 (resto 10)** | — | **NONE** fuera de Valença excepción |

---

## 16. Contrato de reescritura

- ChatGPT redactará los **11** objetos finales (claves Alto Minho + Litoral Norte) en un solo paquete.
- **Capa 2026 prevalece** sobre prosa vieja.
- Precio, servicios X/10, A/B, textos hospital/aero/Palma detallados se quedan en capa factual / TablaPrecios / FichaCapa2026.
- **Afife-Carreço:** `precioM2` permanece **`null` / n.d.** — cero cifras €/m² municipales.
- **COMUN_PORTUGAL** no se repite 11×; consecuencia local sí.
- **Valença:** excepción hospital/aero aislada — resolver en reescritura alineada a capa práctico; no tocar los otros 10 por ese conflicto.
- Cursor copiará **literalmente** después (solo indentación/escapes/coma).
- Conflicto factual **nuevo** texto↔capa ⇒ **parar**, no corregir por iniciativa, no commit.
- Edición quirúrgica; preservar EOL (CRLF) del `.ts`.
- **No** personalizar para jubilados ni presupuesto personal; **no** nombrar tope 260.000 €.
- **Proteger** A Mariña 8 + Asturias 16 + Cantabria 10 (34): no tocar esos relatos/JSON/UI.
- Archivos de implementación futura: solo `relatos-alto-minho.ts` y `relatos-litoral-norte.ts` (las 11 claves).
- Controles específicos: Caminha≠Moledo/Âncora; Moledo ficha propia playa SÍ; Ponte NO mar; Esposende sin tren inventado; Póvoa/Vila do Conde Metro≠coche-cero periferia.

---

## Apéndice — Inventario de archivos fuente

| Rol | Ruta |
|---|---|
| Relatos Alto Minho | `web/src/lib/relatos-alto-minho.ts` |
| Relatos Litoral Norte | `web/src/lib/relatos-litoral-norte.ts` |
| Capa JSON Alto Minho | `web/src/data/municipios-alto-minho.json` |
| Capa JSON Litoral Norte | `web/src/data/municipios-litoral-norte.json` |
| Auditoría editorial | `docs/AUDITORIA_EDITORIAL_RELATOS_2026.md` (73–83) |
| P0 precios | `docs/P0_RESTANTES_POST_PRECIOS_2026.md` |
| Estudio (histórico) | `docs/estudio_zonas.md` §15–16 |
| Plan editorial Portugal | **NO EXISTE** (NO PLAN_EDITORIAL) |
| Referencia A Mariña | `relatos-a-marina.ts` — ribadeo |
| Referencia Asturias Occidente | `relatos-asturias-occidente.ts` — luarca-valdes |
| Referencia Cantabria Occidental | `relatos-cantabria-occidental.ts` — santander |
| Referencia Cantabria Oriental | `relatos-cantabria-oriental.ts` — castro-urdiales |
