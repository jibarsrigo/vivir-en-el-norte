# Fuentes para reescribir Cantabria

**Bloque:** CURSOR_30  
**Alcance:** extracción + auditoría documental. **No** reescritura. **No** corrección de producto. **No** internet.  
**Protección (solo lectura):** A Mariña + Asturias Centro/Oriente/Occidente — **no modificar**.  
**NO PLAN_EDITORIAL** para Cantabria (Occidental/Oriental).

**Lugares (10):** San Vicente de la Barquera · Comillas · Suances · Liencres / Piélagos · Santander · Ribamontán al Mar · Noja · Santoña · Laredo · Castro-Urdiales  

**Fuera de alcance:** Santillana del Mar — **no** es lugar del lote; **ausente** del universo 83 / sin slug JSON. Solo puede aparecer como contexto en prosa de Comillas/Suances/SVB.

**Archivos relatos:** `web/src/lib/relatos-cantabria-occidental.ts`, `web/src/lib/relatos-cantabria-oriental.ts`  
**Archivos capa:** `web/src/data/municipios-cantabria-occidental.json`, `web/src/data/municipios-cantabria-oriental.json`

---

## 1. Reglas y jerarquía

1. **Capa estructurada 2026** (JSON Occidental/Oriental) = autoridad para hechos actuales.
2. **Auditorías 2026** (`AUDITORIA_EDITORIAL_RELATOS_2026.md` filas **63–72**, `P0_RESTANTES_POST_PRECIOS_2026.md`) = autoridad sobre problemas detectados.
3. **Relato actual** = P4, escenas, topónimos; **no** autoridad si contradice la capa.
4. **estudio_zonas.md** §13–14 y precios históricos = trazabilidad/contexto; **no** sustituyen 2026.
5. **No internet.** Ausencias se documentan; no se rellenan por intuición.
6. **No** convertir textos truncados `…` (`casaQueBuscar` / `mercadoReventa`) en detalle inventado — marcar **DESEABLE**.
7. Omisiones de €/m², A/B y notas X/10 que viven en FichaCapa2026/TablaPrecios **no** son conflictos si la prosa no las repite.
8. **No existe** plan editorial tipo CURSOR_19 para Cantabria: este paquete construye fichas solo con material ya en repo. **NO PLAN_EDITORIAL.**
9. **Santillana del Mar** no se reescribe: sin sección 2–11 propia.

Estados: `ALINEADO` · `OBSOLETO` · `DUPLICA_CAPA` · `P4_PRESERVAR` · `SOPORTADO_PERO_INFRAUSADO` · `NO_SOPORTADO_NO_INVENTAR` · `REQUIERE_VERIFICACION_EXTERNA`

### Conflictos de precio (AUDITORIA 63–72) — capa prevalece

| # | Lugar | Relato histórico ~€/m² | Capa `precioM2` |
|---|---|---|---|
| 63 | San Vicente de la Barquera | ~2100 | **3218** |
| 64 | Comillas | ~2400 | **3722** |
| 65 | Suances | ~2000 | **3000** |
| 66 | Liencres (Piélagos) | ~2000 | **2227** |
| 67 | Santander | ~2600 | **3323** |
| 68 | Ribamontán al Mar | ~2300 | **3535** |
| 69 | Noja | ~2300 | **3296** |
| 70 | Santoña | ~1900 | **2120** |
| 71 | Laredo | ~2100 | **2951** |
| 72 | Castro-Urdiales | ~2400 | **2861** |

### Extractos de auditoría global (CITA)

Filas n=63–72:

```
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
```

Resumen precios conflicto:

```
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
```

P0 restantes (63–72):

```
| 63 | San Vicente de la Barquera | Cantabria Occidental | no | — |
| 64 | Comillas | Cantabria Occidental | no | — |
| 65 | Suances | Cantabria Occidental | no | — |
| 66 | Liencres (Piélagos) | Cantabria Occidental | no | — |
| 67 | Santander | Cantabria Occidental | no | — |
| 68 | Ribamontán al Mar | Cantabria Oriental | no | — |
| 69 | Noja | Cantabria Oriental | no | — |
| 70 | Santoña | Cantabria Oriental | no | — |
| 71 | Laredo | Cantabria Oriental | no | — |
| 72 | Castro-Urdiales | Cantabria Oriental | no | — |
```

### Confirmación Santillana del Mar

| Chequeo | Resultado |
|---|---|
| ¿Slug en JSON Cantabria Occ/Ori? | **NO** |
| ¿Slug en universo 83 (`encaja_83_municipios.txt`)? | **NO** (slugs 83: 83) |
| Menciones «Santillana» en relatos occidental | 9 (contexto Comillas/Suances/SVB) |
| Menciones en relatos oriental | 0 |
| ¿Sección de reescritura propia? | **NO** |

### Estudio de zonas §13–14 (histórico — NO autoridad 2026)

<details><summary>CITA estudio_zonas.md § Cantabria Occidental</summary>

13. Cantabria Occidental (Cantabria) · San Vicente de la Barquera, Comillas, Suances, Liencres (Piélagos), Santander

La zona

De la ría de San Vicente a la bahía de Santander: playas grandes, acantilados, el Parque Natural de las Dunas de Liencres y la Costa Quebrada, y detrás la primera línea de los Picos. Santander (173.000 hab.) es una capital elegante y de servicios completos, con el hospital Valdecilla (uno de los mejores de España) y el aeropuerto con vuelo a Palma casi todo el año a 10 min del centro. Piélagos (Liencres, Mortera, Boo, Mogro) es el municipio residencial de urbanizaciones de casas bajas de la capital y tiene la tasa de criminalidad más baja de todos los municipios medidos en la tabla (31/1.000; criminalidad convencional 16). Suances es villa-playa junto a Torrelavega; Comillas y San Vicente son villas históricas de veraneo.

Es la zona que mejor cumple hospital, aeropuerto y seguridad de toda la tabla, con el sol más bajo.

Clima mes a mes

| | Oct-Mar | Abr-May | Jun-Sep | Año |
|---|---|---|---|---|
| Días de lluvia al mes | 14-16 | 13-14 | 9-11 | 148-152 |
| Máxima / mínima típica | 13 / 6 °C (ene.) | 17 / 9 °C | 24 / 16 °C (jul.) | |
| Horas de sol al mes | 65-100 | 160-190 | 200-220 | 1.680-1.700 |

Sol 1.680-1.700 h, 38-40 días despejados, 165-168 cubiertos. Lluvia 1.150-1.200 mm en 148-152 días, 9-11 al mes en verano. Verano 20 °C de media, 24 °C de máxima típica, 2-6 días > 30 °C (con viento sur, "ábrego", puntas de 35 °C que duran uno o dos días). Viento medio, niebla baja. Comparado con Mancor: 1.100 h de sol menos; días despejados a un tercio.

Mar y baño

Merón (San Vicente; 4 km), El Rosal, Oyambre (parque natural), Comillas, La Concha, Los Locos y La Ribera (Suances), Valdearenas, Canallave, Portío, Somocuevas (Liencres; dunas y acantilados de la Costa Quebrada), Sardinero, Magdalena y Mataleñas (Santander). Agua 19-21 °C en agosto. Playas grandes, abiertas, con oleaje; para bañarse tranquilo, la bahía de Santander y las playas del Sardinero en días de calma.

Paseos y montaña

Dunas de Liencres y Costa Quebrada (Los Urros; geoparque, senda costera); Cabo Mayor y Mataleñas (Santander); Península de la Magdalena; Punta del Dichoso (Suances); ría de San Martín de la Arena; Santillana del Mar y Altamira (10-15 min desde Suances y Comillas); El Capricho de Gaudí y Sobrellano (Comillas); castillo y puente de la Maza (San Vicente); Oyambre; Picos de Europa a 1 h (Potes, Fuente Dé); Cabárceno (parque de la naturaleza, 20 min desde Santander). Golf: Abra del Pas (Mogro, Piélagos), Santa Marina (San Vicente), Mataleñas y Pedreña (Santander). Balnearios: Puente Viesgo y Liérganes a 30 min.

Servicios y ciudad de referencia

Santander 10/10. Liencres 7/10 (centro de salud, supermercados, farmacias en Liencres y Mortera; Renedo, la capital, y Bezana a 10; Santander a 15). Suances 6/10 (villa con todo lo básico; Torrelavega a 15 con todo). San Vicente 5/10, Comillas 4/10 (villas turísticas de tamaño pequeño). Ciudad de referencia: Santander a 15-20 desde Liencres, 30 desde Suances, 45-55 desde Comillas y San Vicente; Torrelavega (52.000) a 15 desde Suances.

Sanidad

Valdecilla (Santander, público, de referencia nacional): 5 min desde Santander, 15 desde Liencres, 30 desde Suances. Sierrallana (Torrelavega, público): 15 desde Suances, 30 desde Comillas, 40 desde San Vicente. Privados: Clínica Mompía (Bezana) a 10 desde Liencres y 15 desde Suances; Santa Clotilde (Santander) a 5. Cumple el deseable de 30 en Santander, Liencres, Suances y Comillas; San Vicente en 40.

Aeropuertos y Palma

Santander-Seve Ballesteros (Palma casi todo el año) a 10 min desde Santander, 15 desde Liencres, 20 desde Suances, 40 desde Comillas, 45 desde San Vicente. Es, con Bilbao, el mejor acceso a Palma de toda la tabla.

Precios y qué compras con 260.000 €

Suances y Liencres 2.000 €/m² (3 habitaciones franja A 234.000: entra), San Vicente 2.100 (246.000), Comillas 2.400 (281.000: fuera), Santander 2.600 (304.000: fuera; 2 habitaciones 220.000). Obra nueva en Piélagos (municipio en crecimiento) y Santander; poca en el resto. Fibra en los cinco.

Seguridad y ambiente

Piélagos 31/1.000 (mínimo de la tabla), Santander 51 (ciudad), Torrelavega 47, Camargo 54. Población extranjera 6-8 %. Ambiente: Liencres y Mortera residenciales de clase media santanderina, muchas familias y jubilados; Suances villa de veraneo con vida todo el año; Comillas y San Vicente muy turísticas en verano, tranquilas en invierno; Santander ciudad burguesa, limpia y cara.

Parecido con Mancor / Mallorca

Urbanismo de Liencres 4/5 (urbanizaciones de casas bajas junto a dunas y acantilados); clima 1/5; paisaje 3/5 (los Picos al fondo, prados verdes).

Lo que no tendrás

- Sol: 1.700 h y 38-40 días despejados.
- Precio gallego: 2.000-2.600 €/m².
- 3 habitaciones en Comillas o Santander en presupuesto.
- Calma turística en Comillas y San Vicente en verano.
- Hospital cerca desde San Vicente (40).
- Montaña detrás de casa en Liencres y Santander (la costa es llana; los Picos a 1 h).

Municipio a municipio

**San Vicente de la Barquera (nº 63).** 4.000 habitantes; villa marinera con castillo, iglesia gótica, puente de la Maza, ría con los Picos de fondo (la postal más famosa de Cantabria), Merón y Oyambre. Viento medio. Servicios 5/10. Hospital 40. Aeropuerto 45. Precio 2.100: 3 habitaciones 246.000. Poca obra nueva. Para quién: quien quiera esa vista todos los días y acepte hospital y aeropuerto a 40-45.

**Comillas (nº 64).** 2.200 habitantes; villa modernista (El Capricho de Gaudí, Sobrellano, Universidad Pontificia), plaza de piedra, playa a 2 min, Oyambre, Santillana a 15. Servicios 4/10 (comercio pequeño, muy estacional). Hospital 30. Aeropuerto 40. Precio 2.400: 2 habitaciones franja A 203.000, 3 habitaciones 281.000 (fuera). Para quién: quien quiera vivir en una villa-museo cara y muy cuidada; en invierno, muy tranquila.

**Suances (nº 65).** 9.000 habitantes; villa-playa con casco alto (vistas), puerto en la ría, La Concha (larga, familiar), Los Locos (surf), paseo, Punta del Dichoso; Torrelavega a 15 (todo), Santillana a 10, Santander a 30. Servicios 6/10. Hospital Sierrallana 15, Mompía 15. Aeropuerto 20. Precio 2.000: 3 habitaciones franja A 234.000. Poca obra nueva; fibra sí. Para quién: villa con vida todo el año, playa, y todo a 15-20 min.

**Liencres (Piélagos) (nº 66).** Liencres (2.500 hab.) y Mortera, Boo y Mogro forman la costa de Piélagos (27.000 hab. en el municipio): urbanizaciones de casas bajas y adosados, Parque Natural de las Dunas, playas de Valdearenas y Canallave, acantilados de la Costa Quebrada, Abra del Pas (golf), cercanías desde Boo y Mogro a Santander en 20 min. Servicios 7/10. Hospital Valdecilla 15, Mompía 10. Aeropuerto 15. Precio 2.000: 3 habitaciones franja A 234.000; obra nueva sí; fibra sí. Facilidad de venta 8/10. Seguridad 31/1.000, la mejor de la tabla. Para quién: quien priorice seguridad, hospital y vuelo anual a Palma con urbanización de casas bajas junto al mar; a cambio, el sol de Cantabria.

**Santander (nº 67).** 173.000 habitantes; Sardinero, Magdalena, Cabo Mayor, Centro Botín, paseo de Pereda, bahía; ciudad elegante, limpia y ordenada. Servicios 10/10. Hospital 5. Aeropuerto 10. Ferry a Inglaterra e Irlanda. Precio 2.600: 2 habitaciones franja A 220.000. Obra nueva sí. Seguridad 51. Dependencia del coche 2/10. Para quién: quien prefiera ciudad; para ti, la ciudad de referencia de Liencres.

Si yo fuera tú

Liencres o Mortera. Es la mejor combinación de seguridad, hospital y aeropuerto con vuelo anual a Palma de toda la tabla, con una urbanización de casas bajas junto a dunas y acantilados. Lo único que la descarta es el sol: 1.700 horas y 40 días despejados frente a los 2.500 y 78 del Val Miñor.

![Mapa de la zona 14](../output/mapas_zonas/zona_14.png)

</details>

<details><summary>CITA estudio_zonas.md § Cantabria Oriental</summary>

14. Cantabria Oriental (Cantabria) · Ribamontán al Mar, Noja, Santoña, Laredo, Castro-Urdiales

La zona

La costa de Trasmiera y la oriental hasta Bizkaia: Somo y Loredo (7 km de playa, reserva de surf, chalés dispersos de Ribamontán al Mar, lancha a Santander en 30 min), Noja (2.700 habitantes en invierno y 80.000-100.000 en agosto en bloques de apartamentos), Santoña (anchoas, Monte Buciero, Marismas de Santoña), Laredo (5 km de playa, casco medieval y torres de los 60-70) y Castro-Urdiales (34.000 hab., villa medieval convertida en ciudad dormitorio de Bilbao, a 35 min).

Es la zona con el sol más bajo de la tabla y la mejor conectada con Bilbao (aeropuerto con Palma todo el año, hospital de Cruces).

Clima mes a mes

| | Oct-Mar | Abr-May | Jun-Sep | Año |
|---|---|---|---|---|
| Días de lluvia al mes | 14-17 | 13-14 | 9-11 | 150-155 |
| Máxima / mínima típica | 13 / 6 °C (ene.) | 17 / 9 °C | 24 / 16 °C (jul.) | |
| Horas de sol al mes | 65-95 | 160-185 | 200-215 | 1.650-1.700 |

Sol 1.650-1.700 h (el mínimo de la tabla en Castro), 40 días despejados, 165 cubiertos. Lluvia 1.150-1.250 mm en 150-155 días. Verano 20 °C, 2-6 días > 30 °C. Viento medio en Ribamontán, Noja y Santoña; bajo en Laredo y Castro. Niebla baja. Comparado con Mancor: 1.100-1.150 h de sol menos.

Mar y baño

Somo, Loredo, Langre (acantilados; naturista), Galizano (Ribamontán); Ris y Trengandín (Noja); Berria y San Martín (Santoña); La Salvé (Laredo; 5 km); Brazomar y Ostende (Castro), Oriñón e Islares (10 min). Agua 19-21 °C. Playas largas y abiertas; para calma, Laredo y la bahía de Santoña.

Paseos y montaña

Monte Buciero (Santoña; senda al faro del Caballo, 763 escalones); Parque Natural de las Marismas de Santoña, Victoria y Joyel (observatorio de aves, pasarelas); Túnel de la Atalaya (Laredo); senda costera de Cerdigo a Islares y Sonabia (Castro); Real Golf de Pedreña (junto a Ribamontán); Cabárceno a 25 min. Montaña: los Montes de Ordunte y Cerredo (Castro) y la Sierra de Hornijo; los Picos a 1 h 30.

Servicios y ciudad de referencia

Castro 8/10 (ciudad completa con hospital comarcal a 25 y Bilbao a 35), Laredo 7/10 (villa con todo, hospital comarcal), Santoña 6/10, Ribamontán 5/10 (lo básico repartido; Santander a 20-25), Noja 4-5/10 (dimensionada para el verano; en invierno cierra medio comercio). Ciudad: Santander a 20-30 desde Ribamontán, Noja y Santoña; Bilbao a 35-45 desde Castro y Laredo.

Sanidad

Hospital de Laredo (público, comarcal): 5 min desde Laredo, 10 desde Santoña, 20 desde Noja, 25 desde Castro. Valdecilla a 15-20 desde Ribamontán, 40-45 desde Laredo y Castro. Cruces (Barakaldo) a 35-40 desde Castro. Privados: Santa Clotilde (Santander) a 15 desde Ribamontán, 35-45 desde el resto; en Bilbao (Quirónsalud, IMQ) a 40 desde Castro.

Aeropuertos y Palma

Santander (Palma casi todo el año) a 15 min desde Ribamontán, 25 desde Noja, 30 desde Santoña, 35 desde Laredo. Bilbao (Palma todo el año) a 35-40 desde Castro, 50 desde Laredo. Es la única zona de la tabla con vuelo a Palma todo el año a menos de 40 min (desde Castro).

Precios y qué compras con 260.000 €

Santoña 1.900 €/m² (3 habitaciones franja A 222.000), Laredo 2.100 (246.000), Ribamontán y Noja 2.300 (269.000: fuera en primera línea), Castro 2.400 (281.000: fuera; 2 habitaciones 203.000). Obra nueva en Castro; poca en el resto. Fibra en todos menos Ribamontán (parcial).

Seguridad y ambiente

Castro 46/1.000; el resto no medidos; Cantabria 43. Población extranjera 6-8 %. Ambiente: Ribamontán rural-residencial y surfero; Noja y Laredo pueblos de veraneo masivo (Burgos, Bilbao, Madrid) muy tranquilos de octubre a mayo; Santoña villa de trabajo (conserva, pesca, prisión de El Dueso); Castro ciudad de trabajadores de Bilbao.

Parecido con Mancor / Mallorca

2/5. Ribamontán (Loredo, Langre) es lo único con perfil de casas bajas y calma; Laredo y Noja son bloques de veraneo tipo Playa de Palma de los 70.

Lo que no tendrás

- Sol: el mínimo de toda la tabla.
- Casas bajas en Laredo y Noja.
- Vida en Noja de octubre a mayo.
- 3 habitaciones en primera línea de Castro, Noja o Ribamontán.
- Montaña cerca (salvo el Buciero).
- Precios gallegos.

Municipio a municipio

**Ribamontán al Mar (nº 68).** 5.500 habitantes en pueblos dispersos: Somo (surf, paseo, lancha a Santander), Loredo, Langre (acantilados), Galizano, Suesa, Carriazo. Casas bajas, chalés, prados, mucha urbanización de segunda residencia. Servicios 5/10; fibra parcial; coche 7/10. Hospital Valdecilla 15-20, Santa Clotilde 15. Aeropuerto 15. Precio 2.300: 2 habitaciones franja A 194.000. Poca obra nueva. Para quién: quien quiera casa baja en zona rural-costera tranquila con Santander enfrente y aeropuerto a 15.

**Noja (nº 69).** 2.700 habitantes en invierno; Ris y Trengandín (largas, con islotes), marismas de Victoria y Joyel, bloques de apartamentos. Servicios 4/10 fuera de temporada. Hospital Laredo 20. Aeropuerto 25. Precio 2.300. Para quién: segunda residencia; no para vivir todo el año.

**Santoña (nº 70).** 11.000 habitantes; villa marinera con vida propia (anchoas, puerto), Monte Buciero, Berria (larga, dunas), fuerte de San Martín, marismas; lancha a Laredo en verano. Servicios 6/10. Hospital 10. Aeropuerto 30. Precio 1.900: 3 habitaciones franja A 222.000. Poca obra nueva. Para quién: quien quiera villa de trabajo con monte y marismas, más barata que sus vecinas.

**Laredo (nº 71).** 11.000 habitantes; La Salvé (5 km), Puebla Vieja (casco medieval, iglesia de la Asunción), puerto deportivo, paseo; torres de apartamentos de los 60-70 en el frente. Servicios 7/10. Hospital 5. Aeropuerto 35. Precio 2.100: 3 habitaciones 246.000. Dependencia del coche 4/10. Para quién: quien quiera hospital a pie y playa enorme, y no le importe el urbanismo de la playa.

**Castro-Urdiales (nº 72).** 34.000 habitantes; villa medieval (Santa María, castillo-faro, puente), paseo, playas de Brazomar y Ostende, Islares y Oriñón a 10, Bilbao a 35. Servicios 8/10, comunicaciones 8/10. Hospital Laredo 25, Cruces 35. Aeropuerto de Bilbao 35-40 (Palma todo el año). Precio 2.400: 2 habitaciones franja A 203.000; 3 habitaciones 281.000 (fuera). Obra nueva sí. Seguridad 46. Para quién: quien quiera ciudad completa con Bilbao al lado y vuelo a Palma todo el año a 40 min, y acepte el sol más bajo de la tabla y precios vascos crecientes.

Si yo fuera tú

Solo Castro (por Bilbao y el vuelo anual a Palma) o Ribamontán (Loredo, Langre) por casas bajas y calma; y solo si el aeropuerto pasa a ser prioridad. Con sol como prioridad 1, esta zona no.

![Mapa de la zona 15](../output/mapas_zonas/zona_15.png)

</details>

---

## 2. San Vicente de la Barquera

### 2.1 Relato actual completo

> CITA LITERAL — `web/src/lib/relatos-cantabria-occidental.ts` clave `san-vicente-de-la-barquera` (objeto completo).

```ts
san-vicente-de-la-barquera: {
 escala: "Villa marinera y ría",
 abrir: [
 "San Vicente de la Barquera se siente como la imagen que Cantabria enseña al visitante: unos cuatro mil habitantes, villa marinera con castillo sobre la peña, iglesia gótica de Santa María de los Ángeles, el puente de la Maza —el viaducto largo sobre la ría— y, al fondo, los Picos de Europa cuando el cielo abre. La ría no es adorno: es el paisaje de cada tarde. Merón —playa de unos cuatro kilómetros de arena abierta— queda a un paso; Oyambre —parque natural de dunas, prados y orilla batida— completa el arco hacia Comillas. Es orilla de villa y ría, no de ciudad.",
 "Quien vive aquí es gente de la villa, de la lonja y del turismo, y veraneantes que vuelven cada agosto. Un martes de noviembre el casco no se apaga del todo: hay mesas, farmacia, lo básico a pie. Los servicios son 5/10 —villa turística de tamaño pequeño; falta comercio grande y hospital cerca—. Sierrallana, el hospital público de Torrelavega, queda a unos cuarenta minutos; Santa Clotilde, en Santander, hacia los cincuenta y cinco. El aeropuerto de Santander–Seve Ballesteros anda alrededor de los cuarenta y cinco minutos, con Palma casi todo el año. Ese trayecto no se acorta eligiendo otra calle junto a la Maza.",
 "El tráfico es de pueblo casi todo el año. En julio y agosto lo cambia todo: toallas hacia Merón y Oyambre, coches buscando hueco, ruido de temporada y el casco lleno. De octubre a junio San Vicente recupera calma de villa marinera; conviene probar ambas estaciones antes de comprar. Primavera y otoño son buenas épocas para conocerlo: la ría con los Picos al fondo no es solo foto de agosto.",
 "El calendario tiene fechas fijas. La Folía —segunda domingo después de Pascua— saca a la Virgen de la Barquera en procesión marítima entre barcos engalanados: es la fiesta grande de la villa, con música, gente y el puerto como escenario. En septiembre las fiestas de la Virgen de la Barquera vuelven a animar el casco unos días. Quien viva junto al puerto o a la ría debe contarlas como parte del año, no como excepción imprevista.",
 "San Vicente encaja para quien quiera esa vista de ría y Picos todos los días y acepte hospital y aeropuerto a cuarenta o cuarenta y cinco minutos. Si solo conoces un sábado de sol, te llevas la imagen de folleto. Si has visto un noviembre gris, ya puedes decidir si de verdad quieres vivir aquí.",
 ],
 tiempo: [
 "Si vienes de Baleares, notará el cielo más gris y con menos sol que en Mallorca, no tanto el frío del mar. San Vicente suma unas 1.680 a 1.700 horas de sol y unos 38 a 40 días despejados, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.150 a 1.200 milímetros en unos 148 a 152 días —unos nueve a once al mes también en verano—. El viento es medio; la niebla, baja. La diferencia se nota casi toda entre noviembre y febrero: mañanas grises, terraza que se usa la mitad o menos.",
 "El verano ronda 20 °C de media, con máximas habituales alrededor de 24 °C y apenas dos a seis días sobre 30 °C —el ábrego, viento sur, puede dejar puntas cortas de calor de uno o dos días—. Merón y Oyambre tienen agua entre 19 y 21 °C: fresca, a veces con un golpe de frío, nunca tibia como Mallorca a veinticinco. La ría ofrece orilla más abrigada que el Cantábrico abierto. Conviene venir un día de cielo cubierto y un noviembre, no solo un sábado de sol de agosto.",
 ],
 vivir: [
 "El invierno aquí se nota en la casa tanto como en el cielo. Entre noviembre y febrero las mañanas grises pesan, la terraza se usa la mitad o menos y la ría aporta humedad y salitre: conviene preguntar por aislamiento, calefacción y rastros de moho, no solo por la vista de los Picos. Visitar un día de viento y un martes de noviembre enseña más que la foto de agosto junto a la Maza.",
 "El día a día sin coche es posible en el casco: hay mesas, farmacia y lo básico a pie. No hay comercio grande; el resto pide vehículo. Un martes de noviembre la villa no se apaga del todo, pero la densidad es de pueblo marinero, no de ciudad. Quien viva hacia Merón u Oyambre ganará orilla a cambio de depender más del coche para la compra.",
 "Llegar de fuera es habitual: conviven gente de la villa, de la lonja y del turismo, y veraneantes que vuelven cada agosto. Entre semana manda el ritmo de puerto y ría; en julio y agosto lo cambia todo: toallas, tráfico y aparcamiento justo hacia Merón y Oyambre. La Folía y las fiestas de septiembre animan el casco unos días: quien viva junto al puerto debe contarlas. El castellano basta para lo cotidiano; la vida social pasa por vecinos y temporada más que por una plaza de capital.",
 "La sanidad de urgencia y especialidades no está en el municipio. Sierrallana, el hospital público de Torrelavega, queda a unos cuarenta minutos; Santa Clotilde, en Santander, hacia los cincuenta y cinco. En la villa se resuelve lo básico; para pruebas y hospital hay que asumir el trayecto. No es aislamiento extremo: es aceptar que la gran sanidad está en Torrelavega o Santander, no junto a la Maza.",
 "Mantener el vínculo con Mallorca pasa por el avión. Santander–Seve Ballesteros anda alrededor de los cuarenta y cinco minutos, con Palma casi todo el año. Ese trayecto no se acorta eligiendo otra calle de la villa: el coste incluye la logística de ida y vuelta cuando el cielo cantábrico aprieta. Conviene mirar el calendario real de vuelos, no solo el de agosto.",
 "La vivienda típica es piso o casa de villa en el casco, o vivienda hacia Merón u Oyambre con la ría o la playa cerca. Hay poca obra nueva: lo que se compra ya existe y tiene historia de uso; hay fibra. Junto a la orilla hay que contar con ocupación de verano, salitre y humedad de ría. Reforma frente a llave en mano: presupuestar humedad y calefacción, no solo metros y Picos al fondo.",
 ],
 historia: [
 "Antes que la foto de veraneo existió la villa fortificada. El castillo del Rey y la iglesia gótica de Santa María de los Ángeles explican San Vicente: peña sobre la ría, puerto y control del paso. El puente de la Maza —el viaducto sobre el estuario— no es solo foto: une la villa con la orilla de Merón y convierte la desembocadura en paisaje cotidiano. La villa vivió de la pesca, del comercio marítimo y, más tarde, del veraneo que descubrió la ría con los Picos al fondo.",
 "Oyambre —declarado parque natural— añade la capa de duna, prado y costa abierta entre San Vicente y Comillas. El nombre de Barquera habla de barca y oficio; el de Merón, de la playa larga que la gente de la villa usa cuando el Cantábrico lo permite. Lo que conviene saber es de villa, puente y ría, no de ciudad.",
 "Hoy el casco sigue siendo reconocible: calles hacia el puerto, peña del castillo, la Maza como gesto diario. Quien camina la villa un martes de noviembre entiende mejor el sitio que quien solo la conoce desde el mirador de agosto.",
 ],
 fuera: [
 "Si solo hay tiempo para un baño cerca, ese baño es Merón: playa de unos cuatro kilómetros de arena abierta, a un paso de la villa. No es cala abrigada de foto mediterránea de folleto. Es orilla cantábrica con oleaje, viento medio y agua entre 19 y 21 °C. Un martes de junio puedes tener espacio; un domingo de agosto el aparcamiento se queda corto y la gente busca sitio con paciencia. Es playa de temporada y de vecinos, no de resort.",
 "Oyambre —parque natural— amplia el registro: dunas, prados, orilla batida y el horizonte hacia Comillas. La ría, el puente de la Maza y el casco son la tarde de diario cuando el mar abierto no invita: paseo llano, aves, la peña del castillo al fondo. El Rosal, más pequeña, completa la franja de baño cerca de la villa.",
 "Los caminos son la otra mitad del agua. Comillas y Santillana del Mar quedan hacia el este a trayecto corto; los Picos —Potes, Fuente Dé— a unos sesenta minutos cuando el cielo abre. Golf en Santa Marina, junto a San Vicente. Quien priorice ría y Picos cada tarde encontrará aquí el gesto; quien priorice Valdecilla a quince minutos tendrá que mirar Liencres o Santander.",
 ],
 casa: [
 "El modelo de casa aquí no es la urbanización cerrada de Liencres. Es piso o vivienda de villa en el casco, o casa hacia Merón u Oyambre con la ría o la playa cerca. Hay fibra. Hay poca obra nueva: lo que se compra, en general, ya existe y tiene historia de uso. Junto a la orilla hay que contar con ocupación de verano, salitre y humedad de ría.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros; dos habitaciones, cerca de 177.000. La franja media puede ser piso en casco o vivienda algo retirada de la primera línea de Merón. Conviene venir un día de viento y un sábado de agosto en el aparcamiento de la playa, no solo un sábado de sol.",
 "Los servicios son 5/10. Sierrallana queda a unos cuarenta minutos; el privado de referencia, más lejos hacia Santander. Santander–Seve Ballesteros está a unos cuarenta y cinco, con Palma casi todo el año. Eso es San Vicente: mucha foto típica de ría y Picos, y la ciudad grande siempre a un trayecto.",
 ],
 encaja: {
 si: [
 "La foto típica de ría y Picos importa más que tener el hospital a la vuelta de la esquina. San Vicente de la Barquera es villa marinera de unos cuatro mil habitantes: castillo, iglesia gótica, puente de la Maza sobre la ría, Merón —playa de unos cuatro kilómetros— y Oyambre —parque natural—. Quien quiera salir al casco un martes de noviembre, mirar los Picos al fondo y bajar a Merón o a Oyambre cuando el Cantábrico lo permita encontrará aquí orilla de villa y ría, no de ciudad. En julio y agosto la villa se llena de veraneantes: toallas, tráfico, ruido y aparcamiento justo hacia Merón y Oyambre; de octubre a junio recupera calma marinera. Unas 1.700 horas de sol y unos 38 días despejados —frente a las 2.800 horas y 120 jornadas claras de Mallorca— marcan el trato: lluvia frecuente también en verano (unos 9 a 11 días al mes), verano suave alrededor de 20 °C y niebla baja. El agua anda entre 19 y 21 °C; las playas son abiertas, con oleaje. Quien no conozca Cantabria debe probar ese cielo antes de comprar.",
 "Funciona si se aceptan servicios 5/10 —villa turística con lo básico; falta comercio grande y hospital cerca—, Sierrallana en Torrelavega a unos cuarenta minutos y el aeropuerto de Santander alrededor de los cuarenta y cinco, con Palma casi todo el año. Hay fibra; A cambio se gana la vista más citada de Cantabria todos los días. Quien priorice ría, Picos y paseo frente a logística corta, y pruebe un noviembre gris y un agosto lleno, entenderá San Vicente sin inventarse otra villa.",
 ],
 no: [
 "Sierrallana a cuarenta minutos y Seve Ballesteros a cuarenta y cinco no se acortan eligiendo otra calle junto a la Maza. Si la prioridad absoluta es hospital a quince o veinte minutos, Suances o Liencres lo cubren; Santander deja Valdecilla a cinco. San Vicente no compite en esa logística: compite en la foto típica de ría. Tampoco encaja quien necesite servicios 7/10 a pie o comercio denso en enero: aquí lo básico se resuelve en el casco y el coche cubre el resto.",
 "Tampoco si se necesita calma en julio y agosto en primera línea de Merón, o el cielo estable de Baleares. Quien se decida solo tras un sábado de sol de verano, sin probar el aparcamiento de temporada ni un martes de noviembre vacío, se llevará una sorpresa. Si lo que se busca es urbanización de casas bajas junto a dunas con Valdecilla cerca, Liencres; si se busca villa-playa con vida todo el año y hospital a quince, Suances. San Vicente pide aceptar el sol más bajo de la tabla y la distancia sanitaria a cambio de esa orilla.",
 ],
 veredicto:
 "Veredicto: San Vicente encaja como villa marinera y ría —piso o vivienda en casco o hacia Merón, fuera del tramo más ocupado en agosto— sobre todo si la foto de Picos importa más que el hospital cerca. Probar un martes de noviembre y un agosto de temporada antes de comprar. Se ganan Maza, Merón, Oyambre y fibra; se aceptan servicios 5/10, Sierrallana a cuarenta minutos, aeropuerto a cuarenta y cinco y unas 1.700 horas de sol. Quien priorice Valdecilla y vuelo corto, Liencres o Santander; quien priorice villa viva todo el año con playa, Suances.",
 },
 fotoIdentidad: {
 src: "/fotos/cantabria-occidental/san-vicente-identidad.jpg",
 pie: "San Vicente de la Barquera: casas junto al castillo y la ría — villa entre monte y marea",
 },
 fotosAbrir: [
 { src: "/fotos/cantabria-occidental/san-vicente-villa.jpg", pie: "San Vicente de la Barquera: villa marinera" },
 { src: "/fotos/cantabria-occidental/san-vicente-ria.jpg", pie: "Ría de San Vicente con los Picos al fondo" },
 ],
 fotosHistoria: [
 { src: "/fotos/cantabria-occidental/san-vicente-castillo.jpg", pie: "Castillo de San Vicente de la Barquera" },
 { src: "/fotos/cantabria-occidental/san-vicente-maza.jpg", pie: "Puente de la Maza sobre la ría" },
 ],
 fotosFuera: [
 { src: "/fotos/cantabria-occidental/san-vicente-meron.jpg", pie: "Playa de Merón" },
 { src: "/fotos/cantabria-occidental/san-vicente-oyambre.jpg", pie: "Oyambre, parque natural" },
 ],
 creditoFotos: credito,
 }
```

**Señales de auditoría (scan local, sin internet):**

- **X/10** (5 muestras):
  - …sico a pie. Los servicios son 5/10 —villa turística de tamaño pe…
  - …de sol.",  "Los servicios son 5/10. Sierrallana queda a unos cua…
  - …ciona si se aceptan servicios 5/10 —villa turística con lo básic…
  - …caja quien necesite servicios 7/10 a pie o comercio denso en ene…
  - …y fibra; se aceptan servicios 5/10, Sierrallana a cuarenta minut…
- **broken000** (1 muestras):
  - …una media municipal en prosa. 000 euros; dos habitaciones, cerca de 1…
- **precio_narr** (2 muestras):
  - … del mes; aquí no se fija una media municipal en prosa. 000 euros; dos habi…
  - …una media municipal en prosa. 000 euros; dos habitaciones, cerca de 1…
- **clima** (5 muestras):
  - …s gris y con menos sol que en Mallorca, no tanto el frío del mar. Sa…
  - …cente suma unas 1.680 a 1.700 horas de sol y unos 38 a 40 días despejado…
  - …as de sol y unos 38 a 40 días despejados, frente a las 2.800 horas y…
  - …oras y 120 jornadas claras de Mallorca. Caen alrededor de 1.150 a 1.…
  - …rano—. El viento es medio; la niebla, baja. La diferencia se nota …
- **hospital** (5 muestras):
  - …ueño; falta comercio grande y hospital cerca—. Sierrallana, el hospi…
  - …cio grande y hospital cerca—. Sierrallana, el hospital público de Torre…
  - …pital cerca—. Sierrallana, el hospital público de Torrelavega, queda…
  - …ueda a unos cuarenta minutos; Santa Clotilde, en Santander, hacia los cinc…
  - …Picos todos los días y acepte hospital y aeropuerto a cuarenta o cua…
- **Palma** (4 muestras):
  - …cuarenta y cinco minutos, con Palma casi todo el año. Ese trayect…
  - …cuarenta y cinco minutos, con Palma casi todo el año. Ese trayect…
  - … a unos cuarenta y cinco, con Palma casi todo el año. Eso es San …
  - … de los cuarenta y cinco, con Palma casi todo el año. Hay fibra; …
- **Santillana** (1 muestras):
  - …ra mitad del agua. Comillas y Santillana del Mar quedan hacia el este …
- **rank** (1 muestras):
  - …n Vicente pide aceptar el sol más bajo de la tabla y la distancia sa…

### 2.2 Capa 2026 completa

Fuente: `web/src/data/municipios-cantabria-occidental.json` · slug `san-vicente-de-la-barquera`.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `271921` |
| `A_3hab` | `376506` |
| `B_2hab` | `219629` |
| `B_3hab` | `304101` |
| `advertenciaMicrozona` | `null` *(n.d. / ausente)* |
| `aeropuertoMin` | `45` |
| `aeropuertoPractico2026` | Santander 57 km · 45 min (Palma: casi todo el año); Bilbao 147 km · 110 min (Palma: todo el año); Asturias 163 km · 120 min (Palma: verano) Tiempo histórico orientativo: ~45 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Santander 57 km · 45 min (Palma: casi todo el año); Bilbao 147 km · 110 min (Palma: todo el año) |
| `autonomiaCotidiana` | MEDIA-FUERTE |
| `casaQueBuscar` | Vivienda cómoda y accesible, 2–3 dormitorios, exterior, servicios cotidianos ... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Más húmedo / nublado |
| `comunicaciones` | A-8 / N-634 |
| `comunicacionesNota10` | `7` |
| `cubiertos` | `168` |
| `dependenciaCocheTexto` | Baja-media para rutina de villa; coche para hospital y buena parte de la costa. |
| `despejados` | `38` |
| `estacionalidad2026` | Vida local anual con fuerte aumento turístico en verano. |
| `fibra` | Sí |
| `franja` | A |
| `hospitalMin` | `40` |
| `hospitalPractico2026` | Hospital Sierrallana (Torrelavega) como referencia hospitalaria práctica |
| `hospitalPriv` | 55 km · 55 min · Santa Clotilde (Santander) |
| `hospitalPub` | 40 km · 40 min · Sierrallana (Torrelavega) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 36 km · 40 min · Sierrallana (Torrelavega); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `76` |
| `lat` | `43.385` |
| `lluviaDias` | `151` |
| `lluviaMm` | `1200` |
| `lon` | `-4.399` |
| `mapa` | 63_san_vicente_de_la_barquera.png |
| `mercadoReventa` | Mercado intermedio: base residencial propia y/o demanda exterior. Priorizar u... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `8` |
| `minCosta` | `5` |
| `municipio` | San Vicente de la Barquera |
| `n` | `63` |
| `niebla` | Baja |
| `obraNueva` | Poca |
| `pais` | España |
| `palmaDirecta2026` | Santander: Palma figura entre destinos publicados en 2026; programación concreta puede variar por temporada. |
| `palmaMasCercano` | Casi todo el año |
| `palmaMejor` | Santander (casi todo el año) · 45 min |
| `paseoCotidiano` | Ría, puentes y frente de la villa; playas como extensión más larga. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Ría, costa y paisaje muy presentes, a cambio de presión estival y hospital fuera. |
| `playaBano` | Merón / Oyambre |
| `playaCotidiana` | SÍ/PARCIAL |
| `playaCotidianaModo` | El Merón y otros arenales están muy próximos, pero el acceso cotidiano depende de la microzona y del cruce/salida desde la villa. |
| `precioM2` | `3218` |
| `provincia` | Cantabria |
| `radioCotidiano` | Villa pequeña con comercio, hostelería y servicios básicos alrededor de la ría y el casco. |
| `radioSalida` | Oyambre, Gerra y costa occidental; Torrelavega/Sierrallana para hospital y servicios de mayor escala. |
| `sanidadPrimaria2026` | Atención primaria local |
| `servicios` | `5` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | Tiene: villa turística con lo básico. Falta: comercio grande, hospital cerca |
| `slug` | san-vicente-de-la-barquera |
| `solHoras` | `1700` |
| `tempAgua` | 19-21 |
| `tempInvierno` | `10.0` |
| `tempVerano` | `20.0` |
| `transporteRelevante2026` | A-8 / N-634; bus Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital Sierrallana (Torrelavega) como referencia hospitalaria práctica. |
| `viento` | Media |
| `zona` | Cantabria Occidental |

**Highlights capa (autoridad):** autonomia `MEDIA-FUERTE` · playa `SÍ/PARCIAL` · precioM2 `3218` · servicios `5` · hospitalMin `40`.

### 2.3 Auditorías / plan existentes

**NO PLAN_EDITORIAL** para Cantabria Occidental ni Oriental (no hay `PLAN_EDITORIAL_CANTABRIA_*.md` ni equivalente CURSOR_19).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n=63 → claves 63–72):

```
| 63 | San Vicente de la Barquera | Cantabria Occidental | precio relato ~2100 vs ficha 3218 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 63 | San Vicente de la Barquera | Cantabria Occidental | no | — |
```

**estudio_zonas.md** (histórico — **NO** autoridad 2026):

<details><summary>Recorte estudio</summary>

**San Vicente de la Barquera (nº 63).** 4.000 habitantes; villa marinera con castillo, iglesia gótica, puente de la Maza, ría con los Picos de fondo (la postal más famosa de Cantabria), Merón y Oyambre. Viento medio. Servicios 5/10. Hospital 40. Aeropuerto 45. Precio 2.100: 3 habitaciones 246.000. Poca obra nueva. Para quién: quien quiera esa vista todos los días y acepte hospital y aeropuerto a 40-45.

**Comillas (nº 64).** 2.200 habitantes; villa modernista (El Capricho de Gaudí, Sobrellano, Universidad Pontificia), plaza de piedra, playa a 2 min, Oyambre, Santillana a 15. Servicios 4/10 (comercio pequeño, muy estacional). Hospital 30. Aeropuerto 40. Precio 2.400: 2 habitaciones franja A 203.000, 3 habitaciones 281.000 (fuera). Para quién: quien quiera vivir en una villa-museo cara y muy cuidada; en invierno, muy tranquila.

**Suances (nº 65).** 9.000 habitantes; villa-playa con casco 

</details>

### 2.4 Auditoría relato ↔ capa

Estados permitidos: `ALINEADO` · `OBSOLETO` · `DUPLICA_CAPA` · `P4_PRESERVAR` · `SOPORTADO_PERO_INFRAUSADO` · `NO_SOPORTADO_NO_INVENTAR` · `REQUIERE_VERIFICACION_EXTERNA`

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | **5/10** repetido (abrir/casa/encaja) | `servicios` **5**; Tiene: villa turística con lo básico. Falta: comercio grande, hospital cerca | DUPLICA_CAPA | Omitir chip; narrar MEDIA-FUERTE / villa turística con lo básico |
| Precio €/m² | Auditoría ~2100; prosa remite + «000 euros» + total ~177k | `precioM2` **3218** | OBSOLETO | Capa prevalece; omitir cifras/ranking; TablaPrecios |
| Prosa rota «000 euros» | Tras remitir a capa queda fragmento «000 euros» (+ totales sueltos a veces) | Cifras viven en `precioM2` / A/B / TablaPrecios | OBSOLETO | Borrar resto roto; no reponer €/m² históricos en prosa |
| Autonomía / coche | Casco a pie; Merón/Oyambre más coche; comercio grande fuera | `autonomiaCotidiana` **MEDIA-FUERTE**; coche: Baja-media para rutina de villa; coche para hospital y buena parte de la costa. | ALINEADO | Separar casco vs orilla Merón/Oyambre |
| Mar / playa | Merón a un paso; Oyambre; El Rosal | `playaCotidiana` **SÍ/PARCIAL** — El Merón y otros arenales están muy próximos, pero el acceso cotidiano depende de la microzona y del cruce/salida desde la villa. | ALINEADO | SÍ/PARCIAL: no vender playa urbana pegada a toda vivienda |
| Hospital | Sierrallana ~40′; Santa Clotilde ~55′ | `hospitalPractico2026` / `hospitalMin` **40** — Hospital Sierrallana (Torrelavega) como referencia hospitalaria práctica | ALINEADO / DUPLICA_CAPA | Una mención práctica; omitir cascada de minutos |
| Aeropuerto / Palma | Minutos aero + «Palma casi todo el año» (tono permanente posible) | `aeropuertoMin` 45; `palmaDirecta2026` matiza temporada/comprobar | DUPLICA_CAPA / ALINEADO (capa ya dice casi todo el año en aero práctico) | Consecuencia una vez; no martillar minutos+Palma en cascada; no inventar permanente absoluto |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos tiempo→encaja (y a menudo abrir) | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| Santillana (contexto) | Citada en fuera como trayecto este (con Comillas) | No hay fila/capa Santillana en el universo 83 | P4_PRESERVAR (contexto) / NO lugar a reescribir | Puede quedar como salida patrimonial; **no** inventar ficha Santillana |
| Topónimos P4 | Maza, Merón, Oyambre, Folía, Picos, Santa Marina golf | radios + estudio + fotos | P4_PRESERVAR | Glosar función primera vez; Folía = peaje calendario |

### 2.5 P4 / identidad

- **Preservar:** puente de la Maza, ría con Picos, castillo/Santa María, Merón, Oyambre, Folía (procesión marítima).
- **Identidad:** villa marinera de foto típica cantábrica; no ciudad.
- **Peaje identitario:** verano lleno hacia Merón/Oyambre; hospital/aero lejos vs Suances/Liencres.
- Santillana solo como contexto de camino este (no identidad propia a reescribir).

### 2.6 Vida cotidiana soportada

| Elemento | Clasificación | Base repo |
|---|---|---|
| Autonomía | YA SOPORTADO | `MEDIA-FUERTE` |
| Coche | YA SOPORTADO | `Baja-media para rutina de villa; coche para hospital y buena parte de la costa.` |
| Servicios cotidianos | YA SOPORTADO | servicios `5` — Tiene: villa turística con lo básico. Falta: comercio grande, hospital cerca |
| Paseo | YA SOPORTADO | Ría, puentes y frente de la villa; playas como extensión más larga. |
| Pendiente | N/A / null | `null` |
| Microzona | Poco o nada en capa | adv: — / microPrecio: — |
| Compra enero / estacionalidad | YA SOPORTADO en relato+capa | contrastar verano vs noviembre |
| Nombres café / horarios exactos | NO SOPORTADO | — |
| Totales A/B en prosa | NO SOPORTADO (viven en tabla) | A_3hab `376506` / B_3hab `304101` |

### 2.7 Reality toll

- Autonomía **MEDIA-FUERTE** pero comercio grande/hospital fuera
- Hospital Sierrallana ~**40′**; aero ~**45′**
- Playa **SÍ/PARCIAL** (no generalizar)
- Verano: Merón/Oyambre saturados; Folía/septiembre
- Precio capa **3218** (caro vs prosa histórica)
- Servicios **5**

### 2.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | Auditoría ~2100 (histórico prosa/estudio) | **3218** | OBSOLETO — capa prevalece |
| A_3hab / B_3hab | No narrar totales | `376506` / `304101` | TablaPrecios |
| casaQueBuscar / reventa | Cualitativo | Ver tabla capa §N.2 | `casaQueBuscar` truncado `…` → **DESEABLE** texto completo (no bloquea v1); `mercadoReventa` truncado `…` → **DESEABLE** texto completo (no bloquea v1) |
| «000 euros» | Presente tras remitir a capa | — | Borrar resto roto |

### 2.9 Clima: deuda / duplicación (NO correct)

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en `tiempo` + `encaja` (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `san-vicente-de-la-barquera` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_30.**

### 2.10 Mar / playa / paseo

- **playaCotidiana:** `SÍ/PARCIAL`
- **Modo:** El Merón y otros arenales están muy próximos, pero el acceso cotidiano depende de la microzona y del cruce/salida desde la villa.
- **paseoCotidiano:** Ría, puentes y frente de la villa; playas como extensión más larga.
- **pendiente:** `null`
- Separar baño cotidiano vs salidas (Oyambre, Berria, Langre, Buciero, Picos, etc.).
- No contradecir la etiqueta de playa de la capa.

### 2.11 No soportado / no inventar

- €/m² ~2100 histórico; totales ~177k; resto «000 euros»
- Chip 5/10 martilleado
- Playa cotidiana garantizada en toda vivienda
- Palma «permanente» absoluta sin matiz de programación
- Ficha/sección Santillana del Mar
- Nombres de café/farmacia inventados

---

## 3. Comillas

### 3.1 Relato actual completo

> CITA LITERAL — `web/src/lib/relatos-cantabria-occidental.ts` clave `comillas` (objeto completo).

```ts
comillas: {
 escala: "Villa modernista",
 abrir: [
 "Comillas se siente como un museo al aire libre plantado sobre la costa: unos dos mil doscientos habitantes, El Capricho de Gaudí —la villa de cerámica y girasoles—, el palacio de Sobrellano, la Universidad Pontificia en lo alto, plaza de piedra y playa a dos minutos a pie del casco. Oyambre —parque natural— queda cerca; Santillana del Mar y Altamira, a unos quince minutos. Es villa-museo cuidada, no capital de servicios.",
 "Quien vive aquí es gente de la villa, del turismo cultural y veraneantes que vuelven cada verano. Un martes de noviembre el casco puede parecer casi vacío: los servicios son 4/10 —comercio pequeño y muy estacional; falta comercio grande—. Sierrallana, en Torrelavega, queda a unos treinta minutos. El aeropuerto de Santander anda alrededor de los cuarenta minutos, con Palma casi todo el año. Lo diario mínimo se resuelve; el resto pide coche o temporada alta.",
 "Julio y agosto llenan Comillas: casco ocupado, ruido, tráfico y aparcamiento justo hacia la playa y los monumentos. En invierno la villa queda muy tranquila —casi vacía fuera del núcleo—. Quien se decida a vivir aquí debe probar el lleno de temporada y el silencio de un martes de noviembre. Primavera y otoño muestran la piedra sin la multitud.",
 "El calendario tiene fechas fijas. A mediados de julio, las fiestas del Cristo concentran procesión, música y gente en la plaza y el casco: unos días en que la villa-museo deja de ser solo visita y se convierte en fiesta local. El resto del verano el ritmo lo marca el veraneo; el resto del año, el vacío relativo de las calles. Quien viva en el casco debe contar agosto y el Cristo como parte del año.",
 "Comillas encaja para quien quiera vivir en una villa-museo cara y muy cuidada, aceptando comercio estacional y verano lleno. Si solo conoces un sábado soleado, te llevas la imagen de folleto del Capricho. Si has visto un noviembre quieto, ya puedes decidir si de verdad quieres vivir aquí.",
 ],
 tiempo: [
 "Si vienes de Baleares, el contraste es de cielo, no solo de temperatura. Comillas suma unas 1.680 a 1.700 horas de sol y unos 38 a 40 días despejados, lejos de las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.150 a 1.200 milímetros en unos 148 a 152 días. El viento es medio; la niebla, baja. De noviembre a febrero las mañanas grises pesan; de junio a septiembre la terraza se usa cuando el cielo abre.",
 "El verano ronda 20 °C, fresco frente a Baleares. La playa de Comillas y Oyambre tienen agua entre 19 y 21 °C; la orilla es abierta y con oleaje. Un día de lluvia seria no se queda uno mirando el cristal: se espera a que afloje para caminar el casco, o se baja a Torrelavega. Conviene venir un noviembre y un sábado de agosto, no solo el día soleado de la foto turística modernista.",
 ],
 vivir: [
 "El invierno en Comillas se nota sobre todo en el silencio y en la casa. De noviembre a febrero las mañanas grises pesan; la villa queda muy tranquila —casi vacía fuera del núcleo— y la terraza se usa cuando el cielo abre. Humedad de costa y salitre piden aislamiento y calefacción serios: conviene visitar un martes de noviembre, no solo el día soleado de la foto turística modernista.",
 "Sin coche, lo diario mínimo se resuelve en el casco; el resto pide vehículo o temporada alta. Los servicios son 4/10: comercio pequeño y muy estacional; falta comercio grande. Un martes de noviembre el casco puede parecer casi vacío: mesas y tiendas no son las de agosto. La playa queda a dos minutos a pie, pero el súper denso no.",
 "Conviven gente de la villa, turismo cultural y veraneantes que vuelven cada verano. Julio y agosto llenan Comillas: casco ocupado, ruido, tráfico y aparcamiento justo; las fiestas del Cristo a mediados de julio concentran procesión y gente. Entre semana en invierno manda el vacío relativo; en temporada, la cola del Capricho. Quien busque solo museo encontrará visitas; quien busque vecinos todo el año, también —en otra escala que Mallorca—.",
 "No hay hospital en el municipio. Sierrallana, en Torrelavega, queda a unos treinta minutos. Lo diario de farmacia y lo básico se resuelve en villa; para urgencias y especialidades se baja a Torrelavega. Es asumir que la sanidad grande no está en la plaza de piedra.",
 "El aeropuerto de Santander anda alrededor de los cuarenta minutos, con Palma casi todo el año. Ir y volver a Mallorca es viable casi todo el año, pero el peaje es el trayecto cantábrico y el cielo cubierto de invierno: conviene mirar horarios reales, no solo el vuelo de agosto.",
 "El modelo es piso o vivienda de villa en el casco, a menudo con historia de uso; hay poca obra nueva y fibra. En primera línea y en calles de temporada hay que contar con ocupación de agosto y precio alto. Tres habitaciones suelen quedar caras; dos en franja asequible son la orilla más realista. Imaginar la rutina en invierno vacío y en agosto lleno antes de comprar.",
 ],
 historia: [
 "El Capricho de Gaudí, el palacio de Sobrellano y la Universidad Pontificia explican Comillas: villa de mecenazgo del marqués de Comillas en el XIX, convertida en museo al aire libre. No es adorno de brochure: es el carácter del casco —cerámica, piedra, jardines, la Pontificia dominante en la ladera—. El modernismo y el veraneo elegante se mezclaron aquí antes de que el turismo de masas llenara agosto.",
 "La plaza de piedra y las calles hacia la playa completan la ficha de villa cuidada. Santillana del Mar —casco medieval— y la cueva de Altamira quedan a unos quince minutos: capa de patrimonio a un paso, no dentro del municipio. Lo que conviene saber es de arquitectura, mecenazgo y orilla, no de industria.",
 "Hoy Comillas sigue viviendo de esa imagen: visitas al Capricho y a Sobrellano, playa a dos minutos, invierno casi vacío. Quien camina la plaza un martes de noviembre entiende el precio del museo al aire libre mejor que quien solo hace cola en julio.",
 ],
 fuera: [
 "El baño de diario es la playa de Comillas: a dos minutos a pie del casco, arena y Cantábrico abierto, agua entre 19 y 21 °C. Un martes de junio puedes tener espacio; un domingo de agosto el casco y el arenal se llenan juntos. No es bahía tibia: es orilla de oleaje y viento medio.",
 "Oyambre —parque natural hacia San Vicente— amplía dunas, prados y costa batida. El Capricho, Sobrellano y la plaza son el paseo de diario cuando no apetece mar: piedra, jardines, la Pontificia arriba. Santillana del Mar y Altamira quedan a unos quince minutos cuando se busca casco medieval o cueva.",
 "San Vicente de la Barquera —ría, Maza, Merón— queda hacia el oeste a trayecto corto. Quien priorice museo y playa delante encontrará aquí el gesto; quien priorice mesas abiertas en enero y hospital a quince tendrá que mirar Suances.",
 ],
 casa: [
 "El modelo es piso o vivienda de villa en el casco, a menudo con historia de uso; hay poca obra nueva y fibra. En primera línea y en calles de temporada hay que contar con ocupación de agosto y precio. La tipología de tres habitaciones suele quedar por encima de la franja asequible habitual de la tabla; dos habitaciones en franja asequible rondan unos 203.000 euros.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros —fuera de la orilla asequible habitual—. La franja media puede ser piso reformado en casco o vivienda algo retirada de la playa. Conviene probar el aparcamiento de agosto y el silencio de noviembre antes de comprar.",
 "Los servicios son 4/10. Sierrallana queda a unos treinta minutos. Santander–Seve Ballesteros está a unos cuarenta, con Palma casi todo el año. Eso es Comillas: mucha arquitectura y playa delante, y el comercio de invierno siempre escaso.",
 ],
 encaja: {
 si: [
 "La villa-museo a la puerta importa más que tener el súper abierto todo el año. Comillas reúne unos dos mil doscientos habitantes: El Capricho de Gaudí, el palacio de Sobrellano, la Universidad Pontificia, plaza de piedra y playa a dos minutos a pie; Oyambre cerca y Santillana del Mar a unos quince. Quien quiera caminar el casco modernista un martes de noviembre, bajar a la playa en minutos y vivir en un marco de mecenazgo y piedra cuidada encontrará aquí orilla de museo al aire libre, no capital de servicios. En julio y agosto el casco se llena: ruido, tráfico y aparcamiento justo; en invierno queda muy tranquila —casi vacía fuera del núcleo—. Unas 1.700 horas de sol y unos 38 días despejados —frente a las 2.800 horas y 120 de Mallorca— explican el contraste: lluvia frecuente también en verano, verano suave alrededor de 20 °C, niebla baja. El agua anda entre 19 y 21 °C. Quien se decida a vivir aquí debe haber visto ambas estaciones.",
 "Funciona si se aceptan servicios 4/10 —comercio pequeño y muy estacional—, Sierrallana a unos treinta minutos y el aeropuerto de Santander alrededor de los cuarenta, con Palma casi todo el año. Hay fibra; el metro ronda 2.400 euros y es de los más altos de la zona: dos habitaciones en franja asequible andan cerca de 203.000 euros; tres suelen quedar por encima de la orilla habitual del mercado. A cambio se gana arquitectura y playa delante. Quien priorice Capricho, Sobrellano y silencio de invierno frente a villa completa todo el año, y pruebe el vacío de noviembre junto al lleno de agosto, entenderá Comillas sin pedirle lo que no es.",
 ],
 no: [
 "Los servicios 4/10 y el comercio que cierra fuera de temporada no se arreglan eligiendo otra calle junto a la plaza. Si la semana debe resolverse andando con mesas y mercado densos en enero, Suances o Santander cubren ese perfil; Comillas es villa-museo cuidada, no capital. Tampoco encaja quien necesite tres habitaciones en primera línea dentro de la franja asequible habitual del mercado: el precio de villa modernista lo deja fuera con facilidad.",
 "Tampoco si se necesita calma en julio y agosto en el casco, o el cielo de Baleares. Quien se decida solo tras un sábado soleado de verano, sin probar el aparcamiento de temporada ni un noviembre casi vacío, se llevará una villa distinta de la foto turística. Si lo que manda es hospital a quince minutos y playa con vida todo el año, Suances; si mandan casas bajas, Valdecilla y aeropuerto a quince, Liencres. Comillas pide aceptar estacionalidad, metro alto y sol bajo a cambio del modernismo.",
 ],
 veredicto:
 "Veredicto: Comillas encaja como villa modernista —dos habitaciones en casco, o tres algo retiradas de la primera línea de temporada— sobre todo si Capricho, Sobrellano y la playa a dos minutos importan más que el comercio de invierno. Probar un agosto lleno y un noviembre quieto antes de comprar. Se ganan museo al aire libre, Sierrallana a treinta y fibra; se aceptan servicios 4/10, precio alto y unas 1.700 horas de sol. Quien priorice vida diaria todo el año, Suances; quien priorice logística y dunas, Liencres.",
 },
 fotoIdentidad: {
 src: "/fotos/cantabria-occidental/comillas-identidad.jpg",
 pie: "Comillas: casas en la ladera bajo la Universidad Pontificia, con el monte detrás",
 },
 fotosAbrir: [
 { src: "/fotos/cantabria-occidental/comillas-capricho.jpg", pie: "El Capricho de Gaudí, Comillas" },
 { src: "/fotos/cantabria-occidental/comillas-sobrellano.jpg", pie: "Palacio de Sobrellano, Comillas" },
 ],
 fotosHistoria: [
 { src: "/fotos/cantabria-occidental/comillas-plaza.jpg", pie: "Plaza de piedra de Comillas" },
 { src: "/fotos/cantabria-occidental/comillas-pontificia.jpg", pie: "Universidad Pontificia de Comillas" },
 ],
 fotosFuera: [
 { src: "/fotos/cantabria-occidental/comillas-playa.jpg", pie: "Playa de Comillas" },
 { src: "/fotos/cantabria-occidental/comillas-villa.jpg", pie: "Comillas: villa modernista" },
 ],
 creditoFotos: credito,
 }
```

**Señales de auditoría (scan local, sin internet):**

- **X/10** (5 muestras):
  - …casi vacío: los servicios son 4/10 —comercio pequeño y muy estac…
  - …orada alta. Los servicios son 4/10: comercio pequeño y muy estac…
  - …omprar.",  "Los servicios son 4/10. Sierrallana queda a unos tre…
  - …ciona si se aceptan servicios 4/10 —comercio pequeño y muy estac…
  - …",  ],  no: [  "Los servicios 4/10 y el comercio que cierra fuer…
- **broken000** (3 muestras):
  - …nja asequible rondan unos 203.000 euros.",  "La referencia de precio …
  - …una media municipal en prosa. 000 euros —fuera de la orilla asequible…
  - … asequible andan cerca de 203.000 euros; tres suelen quedar por encim…
- **precio_narr** (5 muestras):
  - …ranja asequible rondan unos 203.000 euros.",  "La referencia de precio …
  - … del mes; aquí no se fija una media municipal en prosa. 000 euros —fuera de…
  - …una media municipal en prosa. 000 euros —fuera de la orilla asequible…
  - …ño. Hay fibra; el metro ronda 2.400 euros y es de los más altos de la z…
  - …ja asequible andan cerca de 203.000 euros; tres suelen quedar por encim…
- **clima** (5 muestras):
  - …illas suma unas 1.680 a 1.700 horas de sol y unos 38 a 40 días despejado…
  - …as de sol y unos 38 a 40 días despejados, lejos de las 2.800 horas y…
  - …oras y 120 jornadas claras de Mallorca. Caen alrededor de 1.150 a 1.…
  - … días. El viento es medio; la niebla, baja. De noviembre a febrero…
  - …, también —en otra escala que Mallorca—.",  "No hay hospital en el m…
- **hospital** (5 muestras):
  - …onal; falta comercio grande—. Sierrallana, en Torrelavega, queda a unos…
  - …ala que Mallorca—.",  "No hay hospital en el municipio. Sierrallana,…
  - …hay hospital en el municipio. Sierrallana, en Torrelavega, queda a unos…
  - …ice mesas abiertas en enero y hospital a quince tendrá que mirar Sua…
  - ….",  "Los servicios son 4/10. Sierrallana queda a unos treinta minutos.…
- **Palma** (4 muestras):
  - … de los cuarenta minutos, con Palma casi todo el año. Lo diario m…
  - … de los cuarenta minutos, con Palma casi todo el año. Ir y volver…
  - …ros está a unos cuarenta, con Palma casi todo el año. Eso es Comi…
  - …lrededor de los cuarenta, con Palma casi todo el año. Hay fibra; …
- **Santillana** (4 muestras):
  - …—parque natural— queda cerca; Santillana del Mar y Altamira, a unos qu…
  - …an la ficha de villa cuidada. Santillana del Mar —casco medieval— y la…
  - …rdines, la Pontificia arriba. Santillana del Mar y Altamira quedan a u…
  - …inutos a pie; Oyambre cerca y Santillana del Mar a unos quince. Quien …
- **rank** (1 muestras):
  - …ronda 2.400 euros y es de los más altos de la zona: dos habitaciones…

### 3.2 Capa 2026 completa

Fuente: `web/src/data/municipios-cantabria-occidental.json` · slug `comillas`.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `314509` |
| `A_3hab` | `435474` |
| `B_2hab` | `254027` |
| `B_3hab` | `351729` |
| `advertenciaMicrozona` | `null` *(n.d. / ausente)* |
| `aeropuertoMin` | `40` |
| `aeropuertoPractico2026` | Santander 47 km · 40 min (Palma: casi todo el año); Bilbao 137 km · 100 min (Palma: todo el año) Tiempo histórico orientativo: ~40 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Santander 47 km · 40 min (Palma: casi todo el año); Bilbao 137 km · 100 min (Palma: todo el año) |
| `autonomiaCotidiana` | MEDIA |
| `casaQueBuscar` | Accesibilidad, exterior/terraza y distancia realmente caminable a núcleo y pa... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Más húmedo / nublado |
| `comunicaciones` | A-8 / N-634 |
| `comunicacionesNota10` | `7` |
| `cubiertos` | `168` |
| `dependenciaCocheTexto` | Baja-media en villa; coche para hospital y compras/servicios superiores. |
| `despejados` | `38` |
| `estacionalidad2026` | Estacionalidad turística marcada, aunque conserva vida y patrimonio todo el año. |
| `fibra` | Sí |
| `franja` | A |
| `hospitalMin` | `30` |
| `hospitalPractico2026` | Hospital Sierrallana (Torrelavega) |
| `hospitalPriv` | 45 km · 45 min · Santa Clotilde (Santander) |
| `hospitalPub` | 30 km · 30 min · Sierrallana (Torrelavega) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 25 km · 30 min · Sierrallana (Torrelavega); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `76` |
| `lat` | `43.386` |
| `lluviaDias` | `151` |
| `lluviaMm` | `1200` |
| `lon` | `-4.291` |
| `mapa` | 64_comillas.png |
| `mercadoReventa` | Mercado intermedio con componente turístico/segunda residencia. La liquidez d... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `2` |
| `minCosta` | `2` |
| `municipio` | Comillas |
| `n` | `64` |
| `niebla` | Baja |
| `obraNueva` | Poca |
| `pais` | España |
| `palmaDirecta2026` | Santander: Palma figura entre destinos publicados en 2026; programación concreta puede variar por temporada. |
| `palmaMasCercano` | Casi todo el año |
| `palmaMejor` | Santander (casi todo el año) · 40 min |
| `paseoCotidiano` | Centro histórico, parque y frente de playa/puerto; algunas calles tienen pendiente. |
| `paseoPendienteTopografia` | Pendientes moderadas entre partes del casco y costa; comprobar ubicación de vivienda. |
| `peajeRealidad` | Playa y casco muy integrados, pero precio alto, turismo y menor profundidad de servicios. |
| `playaBano` | Comillas / Oyambre |
| `playaCotidiana` | SÍ |
| `playaCotidianaModo` | Playa de Comillas queda pegada al núcleo y puede formar parte del paseo diario. |
| `precioM2` | `3722` |
| `provincia` | Cantabria |
| `radioCotidiano` | Villa compacta con comercio y servicios básicos; patrimonio y universidad aportan actividad más allá de la playa. |
| `radioSalida` | Oyambre, costa occidental y Torrelavega para servicios/hospital. |
| `sanidadPrimaria2026` | Atención primaria local |
| `servicios` | `4` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | Tiene: villa turística cuidada. Falta: comercio grande (muy estacional) |
| `slug` | comillas |
| `solHoras` | `1700` |
| `tempAgua` | 19-21 |
| `tempInvierno` | `10.0` |
| `tempVerano` | `20.0` |
| `transporteRelevante2026` | CA-131; bus Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital Sierrallana (Torrelavega). |
| `viento` | Media |
| `zona` | Cantabria Occidental |

**Highlights capa (autoridad):** autonomia `MEDIA` · playa `SÍ` · precioM2 `3722` · servicios `4` · hospitalMin `30`.

### 3.3 Auditorías / plan existentes

**NO PLAN_EDITORIAL** para Cantabria Occidental ni Oriental (no hay `PLAN_EDITORIAL_CANTABRIA_*.md` ni equivalente CURSOR_19).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n=64 → claves 63–72):

```
| 64 | Comillas | Cantabria Occidental | precio relato ~2400 vs ficha 3722 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | lenguaje vago/revisar: tranquilo | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 64 | Comillas | Cantabria Occidental | no | — |
```

**estudio_zonas.md** (histórico — **NO** autoridad 2026):

<details><summary>Recorte estudio</summary>

**Comillas (nº 64).** 2.200 habitantes; villa modernista (El Capricho de Gaudí, Sobrellano, Universidad Pontificia), plaza de piedra, playa a 2 min, Oyambre, Santillana a 15. Servicios 4/10 (comercio pequeño, muy estacional). Hospital 30. Aeropuerto 40. Precio 2.400: 2 habitaciones franja A 203.000, 3 habitaciones 281.000 (fuera). Para quién: quien quiera vivir en una villa-museo cara y muy cuidada; en invierno, muy tranquila.

**Suances (nº 65).** 9.000 habitantes; villa-playa con casco alto (vistas), puerto en la ría, La Concha (larga, familiar), Los Locos (surf), paseo, Punta del Dichoso; Torrelavega a 15 (todo), Santillana a 10, Santander a 30. Servicios 6/10. Hospital Sierrallana 15, Mompía 15. Aeropuerto 20. Precio 2.000: 3 habitaciones franja A 234.000. Poca obra nueva; fibra sí. Para quién: villa con vida todo el año, playa, y todo a 15-20 min.

**Liencres (Piélagos) (nº 66).** L

</details>

### 3.4 Auditoría relato ↔ capa

Estados permitidos: `ALINEADO` · `OBSOLETO` · `DUPLICA_CAPA` · `P4_PRESERVAR` · `SOPORTADO_PERO_INFRAUSADO` · `NO_SOPORTADO_NO_INVENTAR` · `REQUIERE_VERIFICACION_EXTERNA`

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | **4/10** repetido | `servicios` **4**; Tiene: villa turística cuidada. Falta: comercio grande (muy estacional) | DUPLICA_CAPA | Omitir chip; narrar MEDIA / comercio estacional |
| Precio €/m² | Auditoría ~2400 vs capa; prosa remite + «000 euros» | `precioM2` **3722** (alto de la zona) | OBSOLETO | Omitir cifra; narrar mercado caro/turístico cualitativo |
| Prosa rota «000 euros» | Tras remitir a capa queda fragmento «000 euros» (+ totales sueltos a veces) | Cifras viven en `precioM2` / A/B / TablaPrecios | OBSOLETO | Borrar resto roto; no reponer €/m² históricos en prosa |
| Autonomía | Casco mínimo a pie; invierno vacío; coche para resto | **MEDIA** — Baja-media en villa; coche para hospital y compras/servicios superiores. | ALINEADO | Preservar invierno vacío / verano lleno |
| Mar / playa | Playa a 2 min del casco; Oyambre cerca | **SÍ** — Playa de Comillas queda pegada al núcleo y puede formar parte del paseo diario. | ALINEADO | SÍ pegada al núcleo; Oyambre = ampliación/salida |
| Pendiente / paseo | Casco + playa; Pontificia arriba | paseo: Centro histórico, parque y frente de playa/puerto; algunas calles tienen pendiente.; pendiente: Pendientes moderadas entre partes del casco y costa; comprobar ubicación de vivienda. | ALINEADO / SOPORTADO_PERO_INFRAUSADO | Advertir pendientes moderadas al elegir vivienda |
| Hospital | Sierrallana ~30′ | `hospitalMin` **30** — Hospital Sierrallana (Torrelavega) | ALINEADO | Una vez; no cascada |
| Aeropuerto / Palma | Minutos aero + «Palma casi todo el año» (tono permanente posible) | `aeropuertoMin` 40; `palmaDirecta2026` matiza temporada/comprobar | DUPLICA_CAPA / ALINEADO (capa ya dice casi todo el año en aero práctico) | Consecuencia una vez; no martillar minutos+Palma en cascada; no inventar permanente absoluto |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos tiempo→encaja (y a menudo abrir) | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| Lenguaje «tranquilo» (P3) | Invierno casi vacío / tranquila (auditoría marca vago) | Estacionalidad capa + relato | P4_PRESERVAR con matiz | Preferir «casi vacía fuera del núcleo» a «tranquilo» genérico |
| Santillana / Altamira | Patrimonio a ~15′ (contexto, no municipio) | Fuera del universo 83 / sin slug | P4_PRESERVAR (contexto) | Salida patrimonial; **no** sección propia |

### 3.5 P4 / identidad

- **Preservar:** Capricho, Sobrellano, Pontificia, plaza de piedra, playa a 2′, Oyambre, fiestas del Cristo.
- **Identidad:** villa-museo modernista cara; invierno casi vacío.
- **Peaje:** servicios 4 / estacionalidad comercio; precio 3722.
- Santillana/Altamira = patrimonio a ~15′ (contexto).

### 3.6 Vida cotidiana soportada

| Elemento | Clasificación | Base repo |
|---|---|---|
| Autonomía | YA SOPORTADO | `MEDIA` |
| Coche | YA SOPORTADO | `Baja-media en villa; coche para hospital y compras/servicios superiores.` |
| Servicios cotidianos | YA SOPORTADO | servicios `4` — Tiene: villa turística cuidada. Falta: comercio grande (muy estacional) |
| Paseo | YA SOPORTADO | Centro histórico, parque y frente de playa/puerto; algunas calles tienen pendiente. |
| Pendiente | YA SOPORTADO | Pendientes moderadas entre partes del casco y costa; comprobar ubicación de vivienda. |
| Microzona | Poco o nada en capa | adv: — / microPrecio: — |
| Compra enero / estacionalidad | YA SOPORTADO en relato+capa | contrastar verano vs noviembre |
| Nombres café / horarios exactos | NO SOPORTADO | — |
| Totales A/B en prosa | NO SOPORTADO (viven en tabla) | A_3hab `435474` / B_3hab `351729` |

### 3.7 Reality toll

- Servicios **4** / comercio muy estacional
- Precio **3722** (de los más altos)
- Pendientes moderadas casco↔costa
- Invierno casi vacío; verano lleno (Cristo/julio)
- Hospital ~**30′**; aero ~**40′**
- Playa **SÍ**

### 3.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | Auditoría ~2400 (histórico prosa/estudio) | **3722** | OBSOLETO — capa prevalece |
| A_3hab / B_3hab | No narrar totales | `435474` / `351729` | TablaPrecios |
| casaQueBuscar / reventa | Cualitativo | Ver tabla capa §N.2 | `casaQueBuscar` truncado `…` → **DESEABLE** texto completo (no bloquea v1); `mercadoReventa` truncado `…` → **DESEABLE** texto completo (no bloquea v1) |
| «000 euros» | Presente tras remitir a capa | — | Borrar resto roto |
| Fiabilidad | Mercado caro/turístico | 3722 | Narrar cualitativo; no ranking inventado |

### 3.9 Clima: deuda / duplicación (NO correct)

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en `tiempo` + `encaja` (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `comillas` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_30.**

### 3.10 Mar / playa / paseo

- **playaCotidiana:** `SÍ`
- **Modo:** Playa de Comillas queda pegada al núcleo y puede formar parte del paseo diario.
- **paseoCotidiano:** Centro histórico, parque y frente de playa/puerto; algunas calles tienen pendiente.
- **pendiente:** Pendientes moderadas entre partes del casco y costa; comprobar ubicación de vivienda.
- Separar baño cotidiano vs salidas (Oyambre, Berria, Langre, Buciero, Picos, etc.).
- No contradecir la etiqueta de playa de la capa.

### 3.11 No soportado / no inventar

- ~2400 / cifras A/B en prosa
- Chip 4/10
- Inventar comercio de invierno denso
- Santillana como municipio del lote
- Palma permanente absoluta

---

## 4. Suances

### 4.1 Relato actual completo

> CITA LITERAL — `web/src/lib/relatos-cantabria-occidental.ts` clave `suances` (objeto completo).

```ts
suances: {
 escala: "Villa-playa",
 abrir: [
 "Suances se siente como la villa que no se apaga fuera de temporada: unos nueve mil habitantes, casco alto con vistas al Cantábrico, puerto en la ría de San Martín de la Arena —la desembocadura entre Suances y Miengo—, La Concha —playa larga y familiar—, Los Locos —orilla de oleaje y surf—, paseo y Punta del Dichoso —el mirador de acantilado—. Torrelavega queda a quince minutos con todo; Santillana del Mar, a diez; Santander, a treinta. Es la villa con vida todo el año de Cantabria Occidental.",
 "Quien vive aquí es gente de la villa, de Torrelavega cercana y veraneantes que vuelven en verano. Un martes de noviembre se camina el casco, se compra en villa y se resuelve el día a día: los servicios alcanzan 6/10 —villa con lo básico; falta hospital en el municipio, pero Torrelavega lo cubre a quince—. Sierrallana y la Clínica Mompía, en Bezana, quedan a unos quince minutos. El aeropuerto de Santander anda alrededor de los veinte minutos, con Palma casi todo el año. Esa logística es de las mejores de la zona.",
 "En verano La Concha y Los Locos reciben toallas, tráfico hacia la playa y algo de ruido de temporada; hacia el casco alto el volumen baja antes. Fuera de agosto Suances sigue siendo villa con mesas y comercio abiertos. Primavera y otoño son buenas épocas para conocerlo: la ría y el paseo no son solo foto de julio.",
 "El calendario tiene fechas fijas. Las fiestas de la Virgen del Carmen —mitad de julio— animan el puerto y el casco con procesión y ambiente marinero; las patronales de San Leandro completan el verano local. Son jornadas de música, gente y aparcamiento justo; quien viva junto a La Concha o al puerto debe contarlas como parte del año. El resto de la semana, fuera de agosto, vuelve la vida de villa.",
 "Suances encaja para quien quiera villa con playa, vida todo el año y hospital y aeropuerto a quince o veinte minutos. Si solo conoces un sábado soleado en La Concha, te llevas la imagen de folleto de la playa. Si has visto un martes de noviembre, ya puedes decidir si quieres la semana resuelta.",
 ],
 tiempo: [
 "Si vienes de Baleares, el cielo es el peaje. Suances suma unas 1.680 a 1.700 horas de sol y unos 38 a 40 días despejados, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.150 a 1.200 milímetros en unos 148 a 152 días; también en verano llueve varios días al mes. El viento es medio; la niebla, baja.",
 "El verano ronda 20 °C, fresco frente a Baleares. La Concha, Los Locos y La Ribera tienen agua entre 19 y 21 °C; la ría de San Martín de la Arena ofrece orilla más abrigada que el Cantábrico abierto en días de mar llana. Conviene venir un día de cielo cubierto y un noviembre, no solo el sábado de oleaje en Los Locos.",
 ],
 vivir: [
 "El invierno en Suances no apaga la villa, pero sí cambia la casa. Lluvia frecuente también en verano, mañanas grises de noviembre a febrero y humedad de ría y orilla: conviene calefacción, ventanas y orientación al sol, no solo vistas al Cantábrico. Una terraza que en julio parece el centro de la vida se usa menos cuando el cielo cubre. Probar un martes gris y un día de nortada ayuda más que mil fotos de La Concha.",
 "El día a día sin coche es más viable que en Comillas o San Vicente: se camina el casco, se compra en villa y los servicios alcanzan 6/10. Torrelavega a quince minutos cubre lo que falta. Quien elija casco alto ganará vistas y cuestas; junto a La Concha, orilla y más ocupación de verano. En enero hay mesas y comercio abiertos: vida de villa, no de museo vacío.",
 "Conviven gente de la villa, de Torrelavega cercana y veraneantes que vuelven en verano. Entre semana manda el ir y venir hacia Torrelavega y Santander; en julio y agosto La Concha y Los Locos reciben toallas, tráfico y algo de ruido —hacia el casco el volumen baja antes—. Las fiestas del Carmen y San Leandro animan puerto y casco unos días. El castellano basta; la vida social pasa por villa y temporada.",
 "No hay hospital en el municipio, pero Sierrallana y la Clínica Mompía, en Bezana, quedan a unos quince minutos: de las mejores logísticas sanitarias de Cantabria Occidental. Empadronarse aquí abre lo diario en villa; para hospital se asume el trayecto corto a Torrelavega o Bezana, no el de San Vicente a cuarenta minutos.",
 "Santander–Seve Ballesteros anda alrededor de los veinte minutos, con Palma casi todo el año: de los accesos aéreos más cómodos de la zona. Ir y volver a Mallorca es más corto que desde San Vicente o Comillas; aun así, el invierno cantábrico pide mirar horarios y logística, no solo el billete de agosto.",
 "El modelo es piso o vivienda de villa en el casco o cerca del paseo; hay poca obra nueva y fibra. No es urbanización de casas bajas como Liencres: es villa compacta con orilla. Junto a La Concha hay que contar con ocupación de verano y salitre; hacia el casco alto, cuestas y vistas. Imaginar la rutina con escaleras y el aparcamiento de temporada antes de comprar.",
 ],
 historia: [
 "El puerto en la ría y el casco alto explican Suances: villa de orilla y de veraneo con vida propia, no solo bloque de playa. La Concha y Los Locos marcan dos temperamentos de orilla —familiar y de surf— en el mismo municipio. La ría de San Martín de la Arena —nombre de la desembocadura— es el paisaje del puerto y del paseo.",
 "La Punta del Dichoso —acantilado y mirador— añade la capa de costa abierta. Santillana del Mar y Altamira quedan a unos diez o quince minutos: patrimonio a un paso. Lo que conviene saber es de villa-playa, ría y veraneo con mesas abiertas en enero, no de museo modernista ni de foto típica de Picos.",
 "Hoy Suances equilibra temporada y semana: Torrelavega cerca, playa delante, casco que no se vacía del todo. Quien camina el casco alto un martes de noviembre entiende por qué el estudio la señala como villa con vida todo el año.",
 ],
 fuera: [
 "Si solo hay tiempo para un baño cerca, ese baño es La Concha: playa larga, familiar, a pie desde el paseo, agua entre 19 y 21 °C. Un martes de junio puedes tener espacio; un domingo de agosto el aparcamiento hacia la orilla se complica. Es playa de diario de villa, no de resort infinito.",
 "Los Locos cubre el otro temperamento: orilla de oleaje y surf, más bruta, para quien busca ola y viento. La Ribera completa el arco junto a la ría. La Punta del Dichoso es el paseo de mirador cuando no apetece toalla: acantilado, horizonte, el Cantábrico abajo.",
 "Santillana del Mar queda a unos diez minutos; Torrelavega, a quince con comercio y hospital; Santander, a treinta. Quien priorice playa, mesas en noviembre y logística corta encontrará aquí el equilibrio de la zona; quien priorice dunas y casas bajas mirará Liencres; quien priorice ría y Picos, San Vicente.",
 ],
 casa: [
 "El modelo es piso o vivienda de villa en el casco o cerca del paseo; hay poca obra nueva y fibra. Junto a La Concha hay que contar con ocupación de verano y salitre; hacia el casco alto, cuestas y vistas. No es urbanización de casas bajas como Liencres: es villa compacta con orilla.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros; dos habitaciones, cerca de 169.000. La franja media puede ser piso en casco o vivienda cerca del paseo, fuera del tramo más ocupado de La Concha en agosto. Conviene probar un día de temporada en la playa y un martes gris.",
 "Los servicios son 6/10. Sierrallana y Mompía quedan a unos quince minutos. Santander–Seve Ballesteros está a unos veinte, con Palma casi todo el año. Eso es Suances: playa delante, semana resuelta, y el sol bajo de Cantabria como peaje.",
 ],
 encaja: {
 si: [
 "La villa con vida todo el año importa más que la foto de Picos o el museo modernista. Suances reúne unos nueve mil habitantes: casco alto con vistas, puerto en la ría de San Martín de la Arena, La Concha —larga, familiar—, Los Locos —surf—, paseo y Punta del Dichoso; Torrelavega a quince minutos con todo, Santillana del Mar a diez y Santander a treinta. Quien quiera caminar el casco un martes de noviembre, comprar en villa y bajar a La Concha o a Los Locos cuando apetezca encontrará aquí ritmo de orilla que no se apaga fuera de temporada. En verano La Concha y Los Locos reciben toallas, tráfico y algo de ruido; hacia el casco el volumen baja antes. Unas 1.680 a 1.700 horas de sol y unos 38 días despejados —frente a las 2.800 horas y 120 de Mallorca— mantienen el cielo cantábrico: lluvia también en julio, verano suave alrededor de 20 °C, agua entre 19 y 21 °C. Quien venga de Baleares debe probar ese gris antes de comprar.",
 "Funciona si se priorizan Sierrallana y la Clínica Mompía a unos quince minutos y el aeropuerto de Santander alrededor de los veinte, con Palma casi todo el año —de las mejores logísticas de la zona—. Los servicios alcanzan 6/10 —villa con lo básico; falta hospital en el municipio, pero Torrelavega lo cubre a quince—. Hay fibra; Quien quiera playa delante, mesas abiertas en noviembre y hospital cerca sin pagar el metro de Santander ni el silencio extremo de Comillas entenderá Suances como el equilibrio de Cantabria Occidental.",
 ],
 no: [
 "Si lo que se busca es urbanización de casas bajas junto a dunas y acantilados —Valdearenas, Canallave, Costa Quebrada—, Suances no lo es: aquí mandan villa, paseo y playa abierta. Liencres cubre ese perfil con Valdecilla a quince y la criminalidad más baja de la tabla. Tampoco encaja quien necesite la foto típica de ría y Picos cada tarde: eso es San Vicente, a costa de hospital a cuarenta minutos.",
 "Tampoco si se necesita calma total en agosto en primera línea de La Concha, o el cielo estable de Mallorca. Quien se decida solo tras un sábado soleado sin probar el aparcamiento de temporada ni un noviembre de cielo cubierto se equivoca de opción. Si la prioridad absoluta es ciudad completa a pie —Valdecilla a cinco, aeropuerto a diez—, Santander; si mandan Capricho y museo, Comillas. Suances pide aceptar cubiertos, lluvia de verano y algo de afluencia en la orilla a cambio de la semana resuelta junto al mar.",
 ],
 veredicto:
 "Veredicto: Suances encaja como villa-playa equilibrada —tres habitaciones en casco o cerca del paseo, fuera del tramo más ocupado de La Concha en agosto— sobre todo si hospital a quince, aeropuerto a veinte y vida de villa en noviembre importan más que la foto típica del oeste. Probar un martes gris y un día de temporada en la playa antes de comprar. Se ganan Concha, Locos, Torrelavega a quince y Seve Ballesteros a veinte; se aceptan, servicios 6/10 y el sol bajo de Cantabria. Quien priorice dunas y seguridad máxima, Liencres; quien priorice ría y Picos, San Vicente.",
 },
 fotoIdentidad: {
 src: "/fotos/cantabria-occidental/suances-identidad.jpg",
 pie: "Suances: casas sobre la bahía y la ría — vivir entre playa y puerto",
 },
 fotosAbrir: [
 { src: "/fotos/cantabria-occidental/suances-villa.jpg", pie: "Suances: villa-playa" },
 { src: "/fotos/cantabria-occidental/suances-concha.jpg", pie: "Playa de La Concha, Suances" },
 ],
 fotosHistoria: [
 { src: "/fotos/cantabria-occidental/suances-puerto.jpg", pie: "Puerto de Suances en la ría" },
 { src: "/fotos/cantabria-occidental/suances-paseo.jpg", pie: "Paseo de Suances" },
 ],
 fotosFuera: [
 { src: "/fotos/cantabria-occidental/suances-locos.jpg", pie: "Playa de Los Locos, Suances" },
 ],
 creditoFotos: credito,
 }
```

**Señales de auditoría (scan local, sin internet):**

- **X/10** (5 muestras):
  - …a día: los servicios alcanzan 6/10 —villa con lo básico; falta h…
  - …illa y los servicios alcanzan 6/10. Torrelavega a quince minutos…
  - …s gris.",  "Los servicios son 6/10. Sierrallana y Mompía quedan …
  - …zona—. Los servicios alcanzan 6/10 —villa con lo básico; falta h…
  - …veinte; se aceptan, servicios 6/10 y el sol bajo de Cantabria. Q…
- **broken000** (1 muestras):
  - …una media municipal en prosa. 000 euros; dos habitaciones, cerca de 1…
- **precio_narr** (2 muestras):
  - … del mes; aquí no se fija una media municipal en prosa. 000 euros; dos habi…
  - …una media municipal en prosa. 000 euros; dos habitaciones, cerca de 1…
- **clima** (5 muestras):
  - …ances suma unas 1.680 a 1.700 horas de sol y unos 38 a 40 días despejado…
  - …as de sol y unos 38 a 40 días despejados, frente a las 2.800 horas y…
  - …oras y 120 jornadas claras de Mallorca. Caen alrededor de 1.150 a 1.…
  - …l mes. El viento es medio; la niebla, baja.",  "El verano ronda 20…
  - …dos de la zona. Ir y volver a Mallorca es más corto que desde San Vi…
- **hospital** (5 muestras):
  - …0 —villa con lo básico; falta hospital en el municipio, pero Torrela…
  - …rrelavega lo cubre a quince—. Sierrallana y la Clínica Mompía, en Bezan…
  - …con playa, vida todo el año y hospital y aeropuerto a quince o veint…
  - …villa y temporada.",  "No hay hospital en el municipio, pero Sierral…
  - …ospital en el municipio, pero Sierrallana y la Clínica Mompía, en Bezan…
- **Palma** (4 muestras):
  - …or de los veinte minutos, con Palma casi todo el año. Esa logísti…
  - …or de los veinte minutos, con Palma casi todo el año: de los acce…
  - …teros está a unos veinte, con Palma casi todo el año. Eso es Suan…
  - … alrededor de los veinte, con Palma casi todo el año —de las mejo…
- **Santillana** (4 muestras):
  - …da a quince minutos con todo; Santillana del Mar, a diez; Santander, a…
  - …ade la capa de costa abierta. Santillana del Mar y Altamira quedan a u…
  - …nte, el Cantábrico abajo.",  "Santillana del Mar queda a unos diez min…
  - …ga a quince minutos con todo, Santillana del Mar a diez y Santander a …

### 4.2 Capa 2026 completa

Fuente: `web/src/data/municipios-cantabria-occidental.json` · slug `suances`.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `253500` |
| `A_3hab` | `351000` |
| `B_2hab` | `204750` |
| `B_3hab` | `283500` |
| `advertenciaMicrozona` | Pueblo alto y zona de La Ribera/La Concha no ofrecen la misma pendiente, playa ni vida andando. |
| `aeropuertoMin` | `20` |
| `aeropuertoPractico2026` | Santander 22 km · 20 min (Palma: casi todo el año); Bilbao 113 km · 85 min (Palma: todo el año) Tiempo histórico orientativo: ~20 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Santander 22 km · 20 min (Palma: casi todo el año); Bilbao 113 km · 85 min (Palma: todo el año) |
| `autonomiaCotidiana` | MEDIA-FUERTE SEGÚN MICROZONA |
| `casaQueBuscar` | Accesibilidad, exterior/terraza y distancia realmente caminable a núcleo y pa... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Más húmedo / nublado |
| `comunicaciones` | A-8 / N-611 |
| `comunicacionesNota10` | `8` |
| `cubiertos` | `168` |
| `dependenciaCocheTexto` | Media y muy dependiente de microzona/topografía. |
| `despejados` | `38` |
| `estacionalidad2026` | Presión turística fuerte en verano; actividad más reducida en invierno. |
| `fibra` | Sí |
| `franja` | A |
| `hospitalMin` | `15` |
| `hospitalPractico2026` | Hospital Sierrallana (Torrelavega) |
| `hospitalPriv` | 15 km · 15 min · Clínica Mompía (Bezana) |
| `hospitalPub` | 15 km · 15 min · Sierrallana (Torrelavega) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 11 km · 15 min · Sierrallana (Torrelavega); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `77` |
| `lat` | `43.433` |
| `lluviaDias` | `152` |
| `lluviaMm` | `1150` |
| `lon` | `-4.045` |
| `mapa` | 65_suances.png |
| `mercadoReventa` | Mercado intermedio con componente turístico/segunda residencia. La liquidez d... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `3` |
| `minCosta` | `3` |
| `municipio` | Suances |
| `n` | `65` |
| `niebla` | Baja |
| `obraNueva` | Poca |
| `pais` | España |
| `palmaDirecta2026` | Santander: Palma figura entre destinos publicados en 2026; programación concreta puede variar por temporada. |
| `palmaMasCercano` | Casi todo el año |
| `palmaMejor` | Santander (casi todo el año) · 20 min |
| `paseoCotidiano` | La Ribera–La Concha–zona del faro/Los Locos. |
| `paseoPendienteTopografia` | Desnivel estructural entre costa y núcleo alto. |
| `peajeRealidad` | Playas excelentes a cambio de pendientes, tráfico estival y una vida cotidiana partida entre cotas. |
| `playaBano` | La Concha / Los Locos |
| `playaCotidiana` | SÍ EN ZONA BAJA |
| `playaCotidianaModo` | La Concha y Los Locos forman parte directa de la vida costera si se reside cerca; desde el pueblo alto interviene el desnivel. |
| `precioM2` | `3000` |
| `provincia` | Cantabria |
| `radioCotidiano` | Comercio y servicios repartidos entre el núcleo alto y la zona marítima. |
| `radioSalida` | Tagle/Ubiarco y Torrelavega para hospital/servicios mayores. |
| `sanidadPrimaria2026` | Atención primaria local |
| `servicios` | `6` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | Tiene: villa con lo básico. Falta: hospital en el municipio (Torrelavega a 15) |
| `slug` | suances |
| `solHoras` | `1680` |
| `tempAgua` | 19-21 |
| `tempInvierno` | `10.0` |
| `tempVerano` | `20.0` |
| `transporteRelevante2026` | CA-132 / A-67; bus Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital Sierrallana (Torrelavega). |
| `viento` | Media |
| `zona` | Cantabria Occidental |

**Highlights capa (autoridad):** autonomia `MEDIA-FUERTE SEGÚN MICROZONA` · playa `SÍ EN ZONA BAJA` · precioM2 `3000` · servicios `6` · hospitalMin `15`.

### 4.3 Auditorías / plan existentes

**NO PLAN_EDITORIAL** para Cantabria Occidental ni Oriental (no hay `PLAN_EDITORIAL_CANTABRIA_*.md` ni equivalente CURSOR_19).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n=65 → claves 63–72):

```
| 65 | Suances | Cantabria Occidental | precio relato ~2000 vs ficha 3000 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 65 | Suances | Cantabria Occidental | no | — |
```

**estudio_zonas.md** (histórico — **NO** autoridad 2026):

<details><summary>Recorte estudio</summary>

**Suances (nº 65).** 9.000 habitantes; villa-playa con casco alto (vistas), puerto en la ría, La Concha (larga, familiar), Los Locos (surf), paseo, Punta del Dichoso; Torrelavega a 15 (todo), Santillana a 10, Santander a 30. Servicios 6/10. Hospital Sierrallana 15, Mompía 15. Aeropuerto 20. Precio 2.000: 3 habitaciones franja A 234.000. Poca obra nueva; fibra sí. Para quién: villa con vida todo el año, playa, y todo a 15-20 min.

**Liencres (Piélagos) (nº 66).** Liencres (2.500 hab.) y Mortera, Boo y Mogro forman la costa de Piélagos (27.000 hab. en el municipio): urbanizaciones de casas bajas y adosados, Parque Natural de las Dunas, playas de Valdearenas y Canallave, acantilados de la Costa Quebrada, Abra del Pas (golf), cercanías desde Boo y Mogro a Santander en 20 min. Servicios 7/10. Hospital Valdecilla 15, Mompía 10. Aeropuerto 15. Precio 2.000: 3 habitaciones franja A 234.000; obra

</details>

### 4.4 Auditoría relato ↔ capa

Estados permitidos: `ALINEADO` · `OBSOLETO` · `DUPLICA_CAPA` · `P4_PRESERVAR` · `SOPORTADO_PERO_INFRAUSADO` · `NO_SOPORTADO_NO_INVENTAR` · `REQUIERE_VERIFICACION_EXTERNA`

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | 6/10 en prosa (si aparece) / villa con lo básico | `servicios` **6**; Tiene: villa con lo básico. Falta: hospital en el municipio (Torrelavega a 15) | DUPLICA_CAPA | Omitir chip; narrar MEDIA-FUERTE SEGÚN MICROZONA |
| Precio €/m² | Auditoría ~2000; prosa remite + «000 euros» | `precioM2` **3000** | OBSOLETO | Capa prevalece; TablaPrecios |
| Prosa rota «000 euros» | Tras remitir a capa queda fragmento «000 euros» (+ totales sueltos a veces) | Cifras viven en `precioM2` / A/B / TablaPrecios | OBSOLETO | Borrar resto roto; no reponer €/m² históricos en prosa |
| Microzona alto vs Ribera | Casco alto + La Concha/Los Locos; desnivel implícito | `advertenciaMicrozona`: Pueblo alto y zona de La Ribera/La Concha no ofrecen la misma pendiente, playa ni vida andando.; playa **SÍ EN ZONA BAJA** | SOPORTADO_PERO_INFRAUSADO | Explicitar pueblo alto ≠ La Ribera/La Concha (pendiente/playa/andando) |
| Mar / playa | La Concha, Los Locos, ría San Martín | **SÍ EN ZONA BAJA** — La Concha y Los Locos forman parte directa de la vida costera si se reside cerca; desde el pueblo alto interviene el desnivel. | ALINEADO | SÍ EN ZONA BAJA; no generalizar desde casco alto |
| Hospital | Sierrallana / Torrelavega ~15′ | `hospitalMin` **15** — Hospital Sierrallana (Torrelavega) | ALINEADO | Ventaja logística de la zona; una mención |
| Aeropuerto / Palma | Minutos aero + «Palma casi todo el año» (tono permanente posible) | `aeropuertoMin` 20; `palmaDirecta2026` matiza temporada/comprobar | DUPLICA_CAPA / ALINEADO (capa ya dice casi todo el año en aero práctico) | Consecuencia una vez; no martillar minutos+Palma en cascada; no inventar permanente absoluto |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos tiempo→encaja (y a menudo abrir) | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| Santillana (contexto) | ~10′ patrimonio | No en 83 | P4_PRESERVAR (contexto) | Salida; no ficha |
| P4 villa todo el año | Mesas en noviembre; contraste Comillas/SVB | autonomía + servicios 6 | P4_PRESERVAR | Preservar «no se apaga» vs peaje verano en playas |

### 4.5 P4 / identidad

- **Preservar:** villa que no se apaga; La Concha / Los Locos / Dichoso; ría San Martín; Torrelavega cerca.
- **Identidad:** equilibrio playa + vida anual de Occidental.
- **Microzona:** casco alto ≠ Ribera (capa).

### 4.6 Vida cotidiana soportada

| Elemento | Clasificación | Base repo |
|---|---|---|
| Autonomía | YA SOPORTADO | `MEDIA-FUERTE SEGÚN MICROZONA` |
| Coche | YA SOPORTADO | `Media y muy dependiente de microzona/topografía.` |
| Servicios cotidianos | YA SOPORTADO | servicios `6` — Tiene: villa con lo básico. Falta: hospital en el municipio (Torrelavega a 15) |
| Paseo | YA SOPORTADO | La Ribera–La Concha–zona del faro/Los Locos. |
| Pendiente | YA SOPORTADO | Desnivel estructural entre costa y núcleo alto. |
| Microzona | YA SOPORTADO / INFRAUSADO | adv: Pueblo alto y zona de La Ribera/La Concha no ofrecen la misma pendiente, playa ni vida andando. / microPrecio: — |
| Compra enero / estacionalidad | YA SOPORTADO en relato+capa | contrastar verano vs noviembre |
| Nombres café / horarios exactos | NO SOPORTADO | — |
| Totales A/B en prosa | NO SOPORTADO (viven en tabla) | A_3hab `351000` / B_3hab `283500` |

### 4.7 Reality toll

- **MEDIA-FUERTE SEGÚN MICROZONA** + desnivel estructural
- Playa **SÍ EN ZONA BAJA** solo zona baja
- Advertencia pueblo alto ≠ Ribera
- Hospital ~**15′** (ventaja); aero ~**20′**
- Precio **3000**
- Verano en La Concha/Los Locos

### 4.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | Auditoría ~2000 (histórico prosa/estudio) | **3000** | OBSOLETO — capa prevalece |
| A_3hab / B_3hab | No narrar totales | `351000` / `283500` | TablaPrecios |
| casaQueBuscar / reventa | Cualitativo | Ver tabla capa §N.2 | `casaQueBuscar` truncado `…` → **DESEABLE** texto completo (no bloquea v1); `mercadoReventa` truncado `…` → **DESEABLE** texto completo (no bloquea v1) |
| «000 euros» | Presente tras remitir a capa | — | Borrar resto roto |

### 4.9 Clima: deuda / duplicación (NO correct)

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en `tiempo` + `encaja` (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `suances` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_30.**

### 4.10 Mar / playa / paseo

- **playaCotidiana:** `SÍ EN ZONA BAJA`
- **Modo:** La Concha y Los Locos forman parte directa de la vida costera si se reside cerca; desde el pueblo alto interviene el desnivel.
- **paseoCotidiano:** La Ribera–La Concha–zona del faro/Los Locos.
- **pendiente:** Desnivel estructural entre costa y núcleo alto.
- Separar baño cotidiano vs salidas (Oyambre, Berria, Langre, Buciero, Picos, etc.).
- No contradecir la etiqueta de playa de la capa.

### 4.11 No soportado / no inventar

- ~2000 / «000 euros»
- Chip 6/10
- Igualar casco alto = La Concha para playa a pie
- Calma garantizada en julio en primera línea
- Palma permanente absoluta

---

## 5. Liencres / Piélagos

### 5.1 Relato actual completo

> CITA LITERAL — `web/src/lib/relatos-cantabria-occidental.ts` clave `liencres-pielagos` (objeto completo).

```ts
liencres-pielagos: {
 escala: "Urbanización junto a dunas",
 abrir: [
 "Liencres no se siente como villa de casco histórico: se siente como la costa residencial de Santander. Liencres —unos dos mil quinientos habitantes— y Mortera, Boo y Mogro forman la orilla de Piélagos —unos veintisiete mil en el municipio—: urbanizaciones de casas bajas y adosados, Parque Natural de las Dunas de Liencres, playas de Valdearenas y Canallave, acantilados de la Costa Quebrada —geoparque, Los Urros—, golf en Abra del Pas —Mogro— y cercanías desde Boo y Mogro a Santander en unos veinte minutos. Es el municipio residencial de la capital.",
 "Quien vive aquí es familia santanderina, gente que trabaja en la bahía y quien buscó casa baja junto al mar sin pagar el metro del Sardinero. Un martes de noviembre se compra en Liencres o Mortera y se resuelve el día a día con coche corto: los servicios alcanzan 7/10 —centro de salud, supermercados, farmacias; Renedo, la capital municipal, y Bezana a unos diez; Santander a unos quince—. Valdecilla queda a unos quince minutos; la Clínica Mompía, a unos diez. El aeropuerto anda alrededor de los quince minutos, con Palma casi todo el año.",
 "En verano Valdearenas y Canallave reciben toallas y tráfico hacia las dunas; el ritmo residencial de Liencres y Mortera se mantiene más estable que el de Comillas o San Vicente. Piélagos registra la tasa de criminalidad más baja de la tabla —31 por mil—: el dato de seguridad más sólido del estudio. Primavera y otoño en la Costa Quebrada son buenas épocas para conocerlo: el acantilado no es solo foto de agosto.",
 "El calendario es más de temporada de playa que de fiesta de casco: el lleno llega con las toallas en Valdearenas y Canallave; el resto del año manda el ritmo de urbanización y cercanías. Quien se decida a vivir aquí debe probar un agosto en las dunas y un martes de noviembre con cielo cubierto. La semana se organiza en coche corto, no a pie de plaza medieval.",
 "Liencres encaja para quien priorice seguridad, hospital y vuelo a Palma con urbanización de casas bajas junto al mar, a cambio del sol de Cantabria. Si solo conoces un sábado soleado en Canallave, te llevas la imagen de folleto de la duna. Si has visto el gris de noviembre, ya puedes decidir si aceptas el precio del cielo gris.",
 ],
 tiempo: [
 "Si vienes de Baleares, el sol es la renuncia explícita. Liencres suma unas 1.680 a 1.700 horas de sol y unos 38 a 40 días despejados, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.150 a 1.200 milímetros en unos 148 a 152 días. El viento es medio en la costa abierta; la niebla, baja. De noviembre a febrero las mañanas grises pesan; de junio a septiembre la terraza se usa cuando abre el cielo.",
 "El verano ronda 20 °C, fresco frente a Baleares. Valdearenas, Canallave, Portío y Somocuevas tienen agua entre 19 y 21 °C; las dunas y la Costa Quebrada invitan al paseo aunque el baño pida días de mar más llana. Conviene venir un día de nortada y un noviembre, no solo el sábado de sol sobre la duna.",
 ],
 vivir: [
 "El invierno en Liencres se nota en el cielo y en la parcela. De noviembre a febrero las mañanas grises pesan; viento medio en costa abierta, salitre y humedad piden aislamiento y calefacción en casas bajas y adosados. La terraza se usa cuando abre el cielo, no como en Mallorca. Visitar un día de nortada y un noviembre cubierto evita firmar solo por la duna de agosto.",
 "El día a día sin coche es limitado: la semana se organiza en coche corto. Se compra en Liencres o Mortera; Renedo y Bezana quedan a unos diez minutos; Santander a unos quince. Los servicios alcanzan 7/10 —centro de salud, súper, farmacia—, pero no es villa compacta a pie de plaza. Cercanías desde Boo y Mogro a Santander en unos veinte minutos ayudan; en enero el ritmo es de urbanización residencial, no de casco lleno de terrazas.",
 "Quien vive aquí es familia santanderina, gente que trabaja en la bahía y quien buscó casa baja junto al mar sin pagar el metro del Sardinero. Entre semana manda el ir y venir hacia Santander; en verano Valdearenas y Canallave reciben toallas y tráfico, pero el ritmo residencial se mantiene más estable que el de Comillas o San Vicente. La vida social pasa por vecinos de urbanización y cercanía a la capital más que por una plaza única.",
 "Valdecilla queda a unos quince minutos; la Clínica Mompía, a unos diez: logística sanitaria de las mejores de la zona. Empadronarse aquí abre cabecera local; para especialidades y hospital se baja a Santander o Bezana en trayecto corto. No es «lejos de todo»: es asumir coche corto hacia la capital sanitaria.",
 "El aeropuerto de Santander anda alrededor de los quince minutos, con Palma casi todo el año: el mejor acceso aéreo junto a la capital misma. Mantener el vínculo con Mallorca es más sencillo que desde San Vicente; aun así, el precio de tener poco sol bajo de Cantabria sigue ahí. Conviene mirar el calendario anual de vuelos.",
 "Predominan casas bajas, adosados y urbanizaciones en Liencres y Mortera; hay obra nueva y fibra. No es piso de casco marinero: es parcela y chalé o adosado. Junto a las dunas hay que contar con viento, salitre y ocupación de playa en verano. Imaginar la rutina dentro de diez años con jardín, coche en la puerta y acceso a Valdearenas un domingo de agosto.",
 ],
 historia: [
 "Las dunas de Liencres y la Costa Quebrada —Los Urros, geoparque— explican el municipio: orilla de parque natural y acantilado, no de casco medieval. El Parque Natural de las Dunas protege el arenal y el pinar entre el Pas y el mar; la senda de la Costa Quebrada enseña la geología rota del Cantábrico. Boo y Mogro añaden la capa de cercanías hacia Santander.",
 "Mortera y las urbanizaciones de casas bajas sitúan Piélagos como extensión residencial de la capital: clase media santanderina, familias, crecimiento con obra nueva. Abra del Pas —campo de golf en Mogro— completa el mapa de ocio. Lo que conviene saber es de dunas, geoparque y municipio dormitorio de bahía, no de villa turística de peña y castillo.",
 "Hoy Liencres y Mortera viven de esa lógica: casa baja, coche corto a Valdecilla y al aeropuerto, playa de parque natural. Quien camina Valdearenas un martes de octubre entiende el sitio mejor que quien solo lo conoce en un domingo de agosto saturado.",
 ],
 fuera: [
 "Si solo hay tiempo para un baño cerca, ese baño es Valdearenas o Canallave: playas del Parque Natural de las Dunas, arena y Cantábrico abierto, agua entre 19 y 21 °C. Un martes de junio puedes tener duna y espacio; un domingo de agosto el acceso se complica. Son playas de parque y de temporada, no de paseo urbano denso.",
 "La Costa Quebrada —senda de acantilado, Los Urros— es el paseo propio cuando no apetece toalla: geología, horizonte, viento. Portío y Somocuevas completan calas y orillas menores. Abra del Pas aporta golf en Mogro para quien lo busque.",
 "Santander queda a unos quince minutos; Cabárceno —parque de la naturaleza—, a trayecto corto desde la capital. Quien priorice casas bajas, seguridad máxima y logística encontrará aquí la apuesta fuerte de la zona; quien priorice villa-playa con casco, Suances; quien priorice ciudad a pie, Santander.",
 ],
 casa: [
 "Predominan casas bajas, adosados y urbanizaciones en Liencres y Mortera; hay obra nueva y fibra. Junto a las dunas hay que contar con viento, salitre y ocupación de playa en verano; la facilidad de venta es alta en el contexto de la zona. No es piso de casco marinero: es parcela y chalé o adosado.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros; dos habitaciones, cerca de 169.000. La franja media puede ser adosado en urbanización o vivienda más cerca de Valdearenas. Conviene comprobar orientación al viento y el acceso a la playa un domingo de agosto.",
 "Los servicios son 7/10. Valdecilla queda a unos quince minutos; Mompía, a unos diez. Santander–Seve Ballesteros está a unos quince, con Palma casi todo el año. Eso es Liencres: la mejor combinación de seguridad, hospital y vuelo de la tabla, a cambio del sol más bajo.",
 ],
 encaja: {
 si: [
 "La mejor combinación de seguridad, hospital y vuelo de la tabla importa más que el sol. Liencres —unos dos mil quinientos habitantes— y Mortera, Boo y Mogro forman la costa de Piélagos —unos veintisiete mil en el municipio—: urbanizaciones de casas bajas y adosados, Parque Natural de las Dunas, Valdearenas y Canallave, acantilados de la Costa Quebrada, golf en Abra del Pas y cercanías desde Boo y Mogro a Santander en unos veinte minutos. Quien quiera casa baja junto al mar, comprar en Liencres o Mortera un martes de noviembre y tener Santander a unos quince encontrará aquí el municipio residencial de la capital, no villa marinera de casco histórico. En verano las dunas reciben toallas y tráfico; el ritmo residencial se mantiene más estable que el de Comillas o San Vicente. Unas 1.700 horas de sol y unos 38 días despejados —frente a las 2.800 horas y 120 de Mallorca— son el peaje: lluvia frecuente también en verano, verano suave alrededor de 20 °C, agua entre 19 y 21 °C, niebla baja. Piélagos registra la tasa de criminalidad más baja de la tabla —31 por mil—.",
 "Funciona si se priorizan Valdecilla a unos quince minutos, la Clínica Mompía a unos diez y el aeropuerto de Santander alrededor de los quince, con Palma casi todo el año. Los servicios alcanzan 7/10 —centro de salud, súper y farmacia en Liencres y Mortera; Renedo y Bezana a unos diez—. Hay fibra y obra nueva; Quien quiera urbanización junto a dunas y acantilados, seguridad máxima y vuelo corto sin pagar el metro de Santander entenderá por qué el estudio apunta aquí si Cantabria Occidental se mira en serio.",
 ],
 no: [
 "Si lo que se busca es villa marinera con castillo y ría —San Vicente— o museo modernista —Comillas—, Liencres no lo es: aquí mandan casas bajas, parque natural y cercanía a la capital. Tampoco encaja quien necesite montaña detrás de casa: la costa es llana; los Picos quedan a unos sesenta minutos. El cielo de Baleares no está aquí: unas 1.700 horas y unos 38 despejados no se negocian eligiendo otra parcela en Mortera.",
 "Tampoco si se necesita calma total en agosto junto a Valdearenas o Canallave: las dunas reciben temporada. Quien se decida solo tras un sábado soleado sin probar un noviembre cubierto ni el tráfico hacia la playa se llevará una sorpresa. Si la prioridad absoluta es caminar ciudad completa —servicios 10/10, Valdecilla a cinco—, Santander; si se busca villa-playa con casco alto y vida propia, Suances. Liencres pide aceptar el sol más bajo de la tabla a cambio de la logística más sólida.",
 ],
 veredicto:
 "Veredicto: Liencres (Piélagos) encaja como la apuesta fuerte de Cantabria Occidental —casa baja o adosado en Liencres o Mortera, con fibra comprobada y acceso claro a Valdearenas o Canallave— sobre todo si seguridad, Valdecilla y Palma a quince minutos importan más que el cielo. Probar un martes de noviembre y un agosto en las dunas antes de comprar. Se ganan criminalidad mínima de la tabla, obra nueva, Mompía a diez y Seve Ballesteros a quince; se aceptan y unas 1.700 horas de sol. Quien priorice ciudad a pie, Santander; quien priorice villa-playa, Suances.",
 },
 fotoIdentidad: {
 src: "/fotos/cantabria-occidental/liencres-pielagos-identidad.jpg",
 pie: "Liencres–Mortera: casas bajas con el monte detrás",
 },
 fotosAbrir: [
 { src: "/fotos/cantabria-occidental/liencres-urbanizacion.jpg", pie: "Urbanización de casas bajas en Liencres" },
 { src: "/fotos/cantabria-occidental/liencres-dunas.jpg", pie: "Parque Natural de las Dunas de Liencres" },
 ],
 fotosHistoria: [
 { src: "/fotos/cantabria-occidental/liencres-costa-quebrada.jpg", pie: "Costa Quebrada, Liencres" },
 { src: "/fotos/cantabria-occidental/liencres-mortera.jpg", pie: "Mortera, en Piélagos" },
 ],
 fotosFuera: [
 { src: "/fotos/cantabria-occidental/liencres-valdearenas.jpg", pie: "Playa de Valdearenas" },
 { src: "/fotos/cantabria-occidental/liencres-canallave.jpg", pie: "Playa de Canallave, Liencres" },
 ],
 creditoFotos: credito,
 }
```

**Señales de auditoría (scan local, sin internet):**

- **X/10** (5 muestras):
  - …corto: los servicios alcanzan 7/10 —centro de salud, supermercad…
  - …uince. Los servicios alcanzan 7/10 —centro de salud, súper, farm…
  - …agosto.",  "Los servicios son 7/10. Valdecilla queda a unos quin…
  - …l año. Los servicios alcanzan 7/10 —centro de salud, súper y far…
  - …ar ciudad completa —servicios 10/10, Valdecilla a cinco—, Santand…
- **broken000** (1 muestras):
  - …una media municipal en prosa. 000 euros; dos habitaciones, cerca de 1…
- **precio_narr** (4 muestras):
  - …aja junto al mar sin pagar el metro del Sardinero. Un martes de novie…
  - …aja junto al mar sin pagar el metro del Sardinero. Entre semana manda…
  - … del mes; aquí no se fija una media municipal en prosa. 000 euros; dos habi…
  - …una media municipal en prosa. 000 euros; dos habitaciones, cerca de 1…
- **clima** (5 muestras):
  - …ncres suma unas 1.680 a 1.700 horas de sol y unos 38 a 40 días despejado…
  - …as de sol y unos 38 a 40 días despejados, frente a las 2.800 horas y…
  - …oras y 120 jornadas claras de Mallorca. Caen alrededor de 1.150 a 1.…
  - …medio en la costa abierta; la niebla, baja. De noviembre a febrero…
  - …ndo abre el cielo, no como en Mallorca. Visitar un día de nortada y …
- **hospital** (5 muestras):
  - …ez; Santander a unos quince—. Valdecilla queda a unos quince minutos; …
  - …ara quien priorice seguridad, hospital y vuelo a Palma con urbanizac…
  - … que por una plaza única.",  "Valdecilla queda a unos quince minutos; …
  - … local; para especialidades y hospital se baja a Santander o Bezana …
  - …ica: casa baja, coche corto a Valdecilla y al aeropuerto, playa de par…
- **Palma** (5 muestras):
  - …or de los quince minutos, con Palma casi todo el año.",  "En vera…
  - …seguridad, hospital y vuelo a Palma con urbanización de casas baj…
  - …or de los quince minutos, con Palma casi todo el año: el mejor ac…
  - …teros está a unos quince, con Palma casi todo el año. Eso es Lien…
  - … alrededor de los quince, con Palma casi todo el año. Los servici…
- **rank** (2 muestras):
  - …de la tabla, a cambio del sol más bajo.",  ],  encaja: {  si: [  "La…
  - … Liencres pide aceptar el sol más bajo de la tabla a cambio de la lo…

### 5.2 Capa 2026 completa

Fuente: `web/src/data/municipios-cantabria-occidental.json` · slug `liencres-pielagos`.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `188182` |
| `A_3hab` | `260559` |
| `B_2hab` | `151993` |
| `B_3hab` | `210452` |
| `advertenciaMicrozona` | Liencres es una localidad dentro de Piélagos; los datos municipales no describen automáticamente su experiencia concreta. |
| `aeropuertoMin` | `15` |
| `aeropuertoPractico2026` | Santander 14 km · 15 min (Palma: casi todo el año); Bilbao 105 km · 80 min (Palma: todo el año) Tiempo histórico orientativo: ~15 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Santander 14 km · 15 min (Palma: casi todo el año); Bilbao 105 km · 80 min (Palma: todo el año) |
| `autonomiaCotidiana` | MEDIA-BAJA |
| `casaQueBuscar` | No comprar solo por vistas o €/m²: comprobar farmacia, compra, acceso, pendie... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Más húmedo / nublado |
| `comunicaciones` | A-67 / N-611; cercanías Boo / Mogro |
| `comunicacionesNota10` | `9` |
| `cubiertos` | `168` |
| `dependenciaCocheTexto` | Media-alta: costa, servicios y vivienda no siempre coinciden. |
| `despejados` | `38` |
| `estacionalidad2026` | Residencial anual con fuerte uso estival de costa. |
| `fibra` | Sí |
| `franja` | A |
| `hospitalMin` | `10` |
| `hospitalPractico2026` | Hospital Universitario Marqués de Valdecilla (Santander) |
| `hospitalPriv` | 10 km · 10 min · Clínica Mompía (Bezana) |
| `hospitalPub` | 15 km · 15 min · Valdecilla (Santander) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 14 km · 15 min · Valdecilla (Santander); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `76` |
| `lat` | `43.448` |
| `lluviaDias` | `150` |
| `lluviaMm` | `1150` |
| `lon` | `-3.958` |
| `mapa` | 66_liencres.png |
| `mercadoReventa` | Mercado intermedio: base residencial propia y/o demanda exterior. Priorizar u... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `5` |
| `minCosta` | `2` |
| `municipio` | Liencres (Piélagos) |
| `n` | `66` |
| `niebla` | Baja |
| `obraNueva` | Sí |
| `pais` | España |
| `palmaDirecta2026` | Santander: Palma figura entre destinos publicados en 2026; programación concreta puede variar por temporada. |
| `palmaMasCercano` | Casi todo el año |
| `palmaMejor` | Santander (casi todo el año) · 15 min |
| `paseoCotidiano` | Paseos locales; Costa Quebrada/dunas son salida de naturaleza más que paseo urbano continuo. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Costa espectacular y proximidad a Santander, pero coche frecuente y menor autonomía local. |
| `playaBano` | Valdearenas / Canallave |
| `playaCotidiana` | DEPENDE VIVIENDA |
| `playaCotidianaModo` | Las playas y el parque dunar son muy próximos geográficamente, pero muchas viviendas requieren coche o una caminata no urbana. |
| `precioM2` | `2227` |
| `provincia` | Cantabria |
| `radioCotidiano` | Servicios básicos locales; para una rutina más completa se depende de otros núcleos de Piélagos/Santander. |
| `radioSalida` | Costa Quebrada, dunas y playas de Valdearenas/Canallave; Santander para servicios superiores. |
| `sanidadPrimaria2026` | Atención primaria en el municipio |
| `servicios` | `7` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | Tiene: centro de salud, súper, farmacia en Liencres y Mortera. Falta: nada esencial diario |
| `slug` | liencres-pielagos |
| `solHoras` | `1700` |
| `tempAgua` | 19-21 |
| `tempInvierno` | `10.0` |
| `tempVerano` | `20.0` |
| `transporteRelevante2026` | CA-231 / A-67; bus a Santander Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital Universitario Marqués de Valdecilla (Santander). |
| `viento` | Media |
| `zona` | Cantabria Occidental |

**Highlights capa (autoridad):** autonomia `MEDIA-BAJA` · playa `DEPENDE VIVIENDA` · precioM2 `2227` · servicios `7` · hospitalMin `10`.

### 5.3 Auditorías / plan existentes

**NO PLAN_EDITORIAL** para Cantabria Occidental ni Oriental (no hay `PLAN_EDITORIAL_CANTABRIA_*.md` ni equivalente CURSOR_19).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n=66 → claves 63–72):

```
| 66 | Liencres (Piélagos) | Cantabria Occidental | precio relato ~2000 vs ficha 2227 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 66 | Liencres (Piélagos) | Cantabria Occidental | no | — |
```

**estudio_zonas.md** (histórico — **NO** autoridad 2026):

<details><summary>Recorte estudio</summary>

**Liencres (Piélagos) (nº 66).** Liencres (2.500 hab.) y Mortera, Boo y Mogro forman la costa de Piélagos (27.000 hab. en el municipio): urbanizaciones de casas bajas y adosados, Parque Natural de las Dunas, playas de Valdearenas y Canallave, acantilados de la Costa Quebrada, Abra del Pas (golf), cercanías desde Boo y Mogro a Santander en 20 min. Servicios 7/10. Hospital Valdecilla 15, Mompía 10. Aeropuerto 15. Precio 2.000: 3 habitaciones franja A 234.000; obra nueva sí; fibra sí. Facilidad de venta 8/10. Seguridad 31/1.000, la mejor de la tabla. Para quién: quien priorice seguridad, hospital y vuelo anual a Palma con urbanización de casas bajas junto al mar; a cambio, el sol de Cantabria.

**Santander (nº 67).** 173.000 habitantes; Sardinero, Magdalena, Cabo Mayor, Centro Botín, paseo de Pereda, bahía; ciudad elegante, limpia y ordenada. Servicios 10/10. Hospital 5. Aeropuerto 10. Ferr

</details>

### 5.4 Auditoría relato ↔ capa

Estados permitidos: `ALINEADO` · `OBSOLETO` · `DUPLICA_CAPA` · `P4_PRESERVAR` · `SOPORTADO_PERO_INFRAUSADO` · `NO_SOPORTADO_NO_INVENTAR` · `REQUIERE_VERIFICACION_EXTERNA`

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | **7/10** repetido | `servicios` **7**; Tiene: centro de salud, súper, farmacia en Liencres y Mortera. Falta: nada esencial diario | DUPLICA_CAPA | Omitir chip; narrar MEDIA-BAJA autonomía + básicos en Liencres/Mortera |
| Precio €/m² | Auditoría ~2000 vs 2227; prosa remite + «000 euros» + «sin pagar metro Sardinero» | `precioM2` **2227** (municipal Piélagos — no = Liencres playa) | OBSOLETO / SOPORTADO_PERO_INFRAUSADO | Usar media municipal con advertencia; no fingir precio de dunas |
| Prosa rota «000 euros» | Tras remitir a capa queda fragmento «000 euros» (+ totales sueltos a veces) | Cifras viven en `precioM2` / A/B / TablaPrecios | OBSOLETO | Borrar resto roto; no reponer €/m² históricos en prosa |
| Advertencia Liencres ≠ Piélagos | Habla Liencres/Mortera/Renedo; riesgo de generalizar municipio | `advertenciaMicrozona`: Liencres es una localidad dentro de Piélagos; los datos municipales no describen automáticamente su experiencia concreta. | SOPORTADO_PERO_INFRAUSADO | Explicitar: datos municipales no describen sola Liencres |
| Mar / playa | Valdearenas, Canallave, dunas, Costa Quebrada | **DEPENDE VIVIENDA** — Las playas y el parque dunar son muy próximos geográficamente, pero muchas viviendas requieren coche o una caminata no urbana. | ALINEADO | DEPENDE VIVIENDA: muchas casas piden coche/caminata no trivial |
| Hospital | Valdecilla ~15′ (relato); capa hist. 10′ | `hospitalMin` **10** — Hospital Universitario Marqués de Valdecilla (Santander) | ALINEADO (matiz minutos) | Narrar Valdecilla cerca; no martillar 10 vs 15 |
| Aeropuerto / Palma | Minutos aero + «Palma casi todo el año» (tono permanente posible) | `aeropuertoMin` 15; `palmaDirecta2026` matiza temporada/comprobar | DUPLICA_CAPA / ALINEADO (capa ya dice casi todo el año en aero práctico) | Consecuencia una vez; no martillar minutos+Palma en cascada; no inventar permanente absoluto |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos tiempo→encaja (y a menudo abrir) | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| P4 dunas / residencial bahía | Urbanización casas bajas; dormitorio Santander | capa + estudio | P4_PRESERVAR | Conservar contraste villa turística vs residencial dunas |

### 5.5 P4 / identidad

- **Preservar:** dunas Valdearenas/Canallave, Costa Quebrada, urbanización casas bajas, cercanía Valdecilla/aero.
- **Identidad:** residencial bahía / no villa turística de peña.
- **Advertencia:** Liencres ≠ todo Piélagos; precio municipal 2227.

### 5.6 Vida cotidiana soportada

| Elemento | Clasificación | Base repo |
|---|---|---|
| Autonomía | YA SOPORTADO | `MEDIA-BAJA` |
| Coche | YA SOPORTADO | `Media-alta: costa, servicios y vivienda no siempre coinciden.` |
| Servicios cotidianos | YA SOPORTADO | servicios `7` — Tiene: centro de salud, súper, farmacia en Liencres y Mortera. Falta: nada esencial diario |
| Paseo | YA SOPORTADO | Paseos locales; Costa Quebrada/dunas son salida de naturaleza más que paseo urbano continuo. |
| Pendiente | N/A / null | `null` |
| Microzona | YA SOPORTADO / INFRAUSADO | adv: Liencres es una localidad dentro de Piélagos; los datos municipales no describen automáticamente su experiencia concreta. / microPrecio: — |
| Compra enero / estacionalidad | YA SOPORTADO en relato+capa | contrastar verano vs noviembre |
| Nombres café / horarios exactos | NO SOPORTADO | — |
| Totales A/B en prosa | NO SOPORTADO (viven en tabla) | A_3hab `260559` / B_3hab `210452` |

### 5.7 Reality toll

- Autonomía **MEDIA-BAJA**; coche media-alta
- Playa **DEPENDE VIVIENDA**
- Liencres ≠ todo Piélagos (advertencia)
- Valdecilla ~**10′**; aero ~**15′**
- Precio municipal **2227** (no = primera línea dunas)
- Residencial/dormitorio bahía

### 5.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | Auditoría ~2000 (histórico prosa/estudio) | **2227** | OBSOLETO — capa prevalece |
| A_3hab / B_3hab | No narrar totales | `260559` / `210452` | TablaPrecios |
| casaQueBuscar / reventa | Cualitativo | Ver tabla capa §N.2 | `casaQueBuscar` truncado `…` → **DESEABLE** texto completo (no bloquea v1); `mercadoReventa` truncado `…` → **DESEABLE** texto completo (no bloquea v1) |
| «000 euros» | Presente tras remitir a capa | — | Borrar resto roto |
| Advertencia precio | Relato «más barato que Sardinero» | Media municipal Piélagos | No fingir metro de dunas Liencres |

### 5.9 Clima: deuda / duplicación (NO correct)

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en `tiempo` + `encaja` (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `liencres-pielagos` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_30.**

### 5.10 Mar / playa / paseo

- **playaCotidiana:** `DEPENDE VIVIENDA`
- **Modo:** Las playas y el parque dunar son muy próximos geográficamente, pero muchas viviendas requieren coche o una caminata no urbana.
- **paseoCotidiano:** Paseos locales; Costa Quebrada/dunas son salida de naturaleza más que paseo urbano continuo.
- **pendiente:** `null`
- Separar baño cotidiano vs salidas (Oyambre, Berria, Langre, Buciero, Picos, etc.).
- No contradecir la etiqueta de playa de la capa.

### 5.11 No soportado / no inventar

- ~2000 como metro de Liencres-playa
- Chip 7/10
- Generalizar todo Piélagos = Liencres
- Playa a la puerta sin mirar vivienda
- Palma permanente absoluta

---

## 6. Santander

### 6.1 Relato actual completo

> CITA LITERAL — `web/src/lib/relatos-cantabria-occidental.ts` clave `santander` (objeto completo).

```ts
santander: {
 escala: "Ciudad de bahía",
 abrir: [
 "Santander se siente como capital cantábrica de bahía: unos ciento setenta y tres mil habitantes, El Sardinero —playas urbanas—, la península de la Magdalena —parque, palacio, costa abrigada—, Cabo Mayor —faro y acantilado—, el Centro Botín —cultura contemporánea sobre el agua—, el paseo de Pereda y la bahía abierta hacia Pedreña. Ciudad elegante, limpia y ordenada, con ferry a Inglaterra e Irlanda. Es la capital de referencia de Liencres y de toda Cantabria Occidental.",
 "Quien vive aquí resuelve casi todo a pie. Un martes de noviembre los servicios alcanzan 10/10: no falta lo esencial de ciudad. Valdecilla —hospital público de referencia nacional— queda a unos cinco minutos; Santa Clotilde, a unos cinco. El aeropuerto anda alrededor de los diez minutos, con Palma casi todo el año —el mejor acceso de la zona—. La dependencia del coche es baja —2/10—. La seguridad ronda 51 por mil, cifra de ciudad.",
 "En verano el Sardinero y la Magdalena reciben veraneantes y algo más de ruido y tráfico; el centro mantiene ritmo de capital todo el año. Primavera y otoño en la bahía son buenas épocas para conocerlo: el paseo de Pereda no es solo foto de agosto. Quien mire Liencres usa Santander como ciudad de hospital, cultura y vuelo a quince minutos.",
 "El calendario de capital tiene citas de verano en el Sardinero y la Magdalena, y ritmo de ciudad el resto del año: comercios, cultura, el Botín, la bahía. Las fiestas de Santiago y el veraneo histórico de la corte dejaron huella de ciudad burguesa; hoy el lleno de playa en agosto convive con el ensanche que no se vacía en enero. Quien se decida a vivir junto al Sardinero debe contar la temporada como parte del año.",
 "Santander encaja para quien prefiera ciudad completa; para quien mire Liencres, es la ciudad de referencia a quince minutos. Si solo conoces un sábado soleado en el Sardinero, te llevas la imagen de folleto de la playa. Si has visto un invierno de cielo cubierto, ya puedes decidir si quieres la capital.",
 ],
 tiempo: [
 "Si vienes de Baleares, ganas logística y pierdes despejados. Santander suma unas 1.680 a 1.700 horas de sol y unos 38 a 40 días despejados, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.150 a 1.200 milímetros en unos 148 a 152 días. El viento es medio; la niebla, baja.",
 "El verano ronda 20 °C, fresco frente a Baleares. El Sardinero, la Magdalena y Mataleñas tienen agua entre 19 y 21 °C; la bahía ofrece orilla más calmada que el Cantábrico abierto en días de mar llana. Conviene venir un noviembre y un día de cubierto, no solo el sábado de sol sobre la Magdalena.",
 ],
 vivir: [
 "El invierno en Santander es de capital cantábrica: cielo cubierto frecuente, lluvia y humedad de bahía. En Mallorca muchas viviendas casi no piensan en calefacción; aquí conviene aislamiento, orientación y moho en armarios. Una terraza al Sardinero que en agosto parece el centro de la vida se usa menos entre noviembre y febrero. Probar un invierno de cielo cubierto evita firmar solo por la Magdalena en sol.",
 "El día a día sin coche es el fuerte de la ciudad: servicios 10/10, dependencia del coche 2/10. Un martes de noviembre se resuelve casi todo a pie —comercio, cultura, el Botín, el paseo de Pereda—. Quien elija primera línea del Sardinero ganará playa y más ocupación de verano; en el ensanche, ritmo de capital que no se vacía en enero.",
 "Conviven residentes de capital, veraneantes en el Sardinero y la Magdalena, y quien usa Santander como ciudad de referencia desde Liencres. Entre semana manda la ciudad; en verano el frente de playa recibe más ruido y tráfico. Las fiestas de Santiago y el veraneo histórico dejaron huella de ciudad burguesa. El castellano basta; la vida social pasa por barrio, cultura y bahía más que por una única plaza de pueblo.",
 "Valdecilla —hospital público de referencia nacional— y Santa Clotilde quedan a unos cinco minutos: la logística sanitaria más completa de Cantabria Occidental. Empadronarse aquí abre cabecera y especialidades en la misma ciudad. No es «hospital lejos»: es ciudad con sanidad a la puerta.",
 "El aeropuerto anda alrededor de los diez minutos, con Palma casi todo el año —el mejor acceso de la zona—. Ir y volver a Mallorca es el trayecto más corto de Cantabria Occidental; el peaje sigue siendo el sol bajo, no la distancia al avión. Conviene mirar horarios del año entero.",
 "El ensanche, el Sardinero y barrios residenciales ofrecen pisos; hay obra nueva y fibra. En primera línea del Sardinero hay que contar con precio y ocupación de verano. Tres habitaciones suelen quedar caras; dos en franja asequible son la orilla más realista. Imaginar ascensor, terraza de invierno y el ritmo de ciudad antes de comprar solo por la playa.",
 ],
 historia: [
 "El paseo de Pereda, la Magdalena y el Sardinero explican Santander: capital burguesa de bahía y de veraneo elegante, reconstruida tras el incendio de 1941 en el centro histórico. El palacio de la Magdalena y el veraneo regio marcaron la imagen de ciudad limpia y de servicios. La capa contemporánea llega con el Centro Botín, sobre la bahía.",
 "Cabo Mayor y Mataleñas cierran el arco de acantilado urbano: faro, senda, orilla abierta. El puerto y el ferry a Inglaterra e Irlanda mantienen la vocación atlántica. Lo que conviene saber es de capital cantábrica, hospital de referencia y bahía caminable, no de villa pequeña.",
 "Hoy Santander es ciudad completa: Valdecilla, aeropuerto a diez minutos, ensanche, Sardinero. Quien camina Pereda un martes de noviembre entiende por qué Liencres la usa como referencia y por qué el metro es el más alto de la zona.",
 ],
 fuera: [
 "Si solo hay tiempo para un baño cerca, ese baño es el Sardinero o la Magdalena: playas urbanas, agua entre 19 y 21 °C, la bahía más calmada en días de mar llana. Un martes de junio puedes tener espacio; un domingo de agosto el frente se llena. Mataleñas añade orilla de acantilado hacia Cabo Mayor.",
 "El paseo de Pereda y la península de la Magdalena son la tarde de diario: bahía, jardines, el Botín como gesto cultural. Cabo Mayor cubre faro y senda cuando se busca horizonte sin toalla.",
 "Liencres y las dunas quedan a unos quince minutos; Cabárceno, a unos veinte. Quien priorice caminar casi toda la semana encontrará aquí la logística más completa; quien priorice casas bajas y seguridad máxima mirará Liencres; quien priorice villa-playa, Suances.",
 ],
 casa: [
 "El ensanche, el Sardinero y barrios residenciales ofrecen pisos; hay obra nueva y fibra. En primera línea del Sardinero hay que contar con precio y ocupación de verano. La tipología de tres habitaciones suele quedar por encima de la franja asequible habitual; dos habitaciones rondan unos 220.000 euros.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros —fuera de la orilla asequible habitual—. La franja media puede ser piso de dos habitaciones en ensanche o cerca del Sardinero. Conviene probar un invierno de cielo cubierto y un agosto en la playa antes de comprar.",
 "Los servicios son 10/10. Valdecilla queda a unos cinco minutos. Santander–Seve Ballesteros está a unos diez, con Palma casi todo el año. Eso es Santander: bahía completa a cambio del metro de capital y del sol bajo de Cantabria.",
 ],
 encaja: {
 si: [
 "La ciudad de bahía completa importa más que la casa baja junto a las dunas. Santander reúne unos ciento setenta y tres mil habitantes: Sardinero, península de la Magdalena, Cabo Mayor, Centro Botín, paseo de Pereda y bahía; capital elegante, limpia y ordenada, con ferry a Inglaterra e Irlanda. Quien quiera resolver casi todo a pie un martes de noviembre —servicios 10/10, dependencia del coche 2/10—, bajar al Sardinero o a la Magdalena y tener Valdecilla a unos cinco minutos encontrará aquí la logística más completa de la zona. En verano el Sardinero y la Magdalena reciben veraneantes y algo más de tráfico; el centro mantiene ritmo de capital todo el año. Unas 1.680 a 1.700 horas de sol y unos 40 días despejados —frente a las 2.800 horas y 120 de Mallorca— siguen siendo el peaje cantábrico: lluvia frecuente, verano suave alrededor de 20 °C, agua entre 19 y 21 °C, niebla baja. La seguridad ronda 51 por mil, cifra de ciudad.",
 "Funciona si se priorizan Valdecilla y Santa Clotilde a unos cinco minutos y el aeropuerto alrededor de los diez, con Palma casi todo el año —el mejor acceso aéreo de Cantabria Occidental—. Hay obra nueva y fibra; el metro ronda 2.600 euros, el más alto de la zona: dos habitaciones en franja asequible andan cerca de 220.000 euros; tres suelen quedar por encima de la orilla habitual. Quien viva en Liencres usa Santander como ciudad de referencia a quince minutos para hospital, cultura y vuelo. Quien prefiera capital caminable frente a urbanización o villa entenderá Santander sin pedirle el precio de Suances.",
 ],
 no: [
 "Si lo que se buscan son casas bajas junto a dunas y acantilados con la criminalidad más baja de la tabla, Santander no lo es: eso es Liencres (Piélagos). Tampoco encaja quien necesite tres habitaciones en primera línea dentro de la franja asequible habitual del mercado: aquí el metro de capital lo deja fuera con facilidad. El cielo de Baleares no está en la bahía: se gana logística, no despejados.",
 "Tampoco si se busca villa marinera pequeña o silencio de noviembre como en Comillas fuera de temporada. Quien se decida solo por el Sardinero en un sábado de sol, sin probar un invierno de cielo cubierto ni el ritmo de ciudad, puede descubrir que la capital no era lo que pedía el día a día. Si mandan playa de villa con hospital a quince y metro más amable, Suances; si mandan dunas y seguridad máxima, Liencres. Santander pide aceptar precio de capital y sol bajo a cambio de caminar casi toda la semana.",
 ],
 veredicto:
 "Veredicto: Santander encaja como ciudad de bahía —dos habitaciones en ensanche o cerca del Sardinero, o como capital de apoyo desde Liencres— sobre todo si Valdecilla a cinco, aeropuerto a diez y servicios 10/10 importan más que el metro bajo. Probar un martes de noviembre y un agosto en la playa antes de comprar. Se ganan bahía, Magdalena, Botín y Palma casi todo el año a diez minutos; se aceptan y unas 1.700 horas de sol. Quien priorice casas bajas y seguridad, Liencres; quien priorice villa-playa, Suances.",
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

**Señales de auditoría (scan local, sin internet):**

- **X/10** (5 muestras):
  - …iembre los servicios alcanzan 10/10: no falta lo esencial de ciud…
  - …ependencia del coche es baja —2/10—. La seguridad ronda 51 por m…
  - …uerte de la ciudad: servicios 10/10, dependencia del coche 2/10. …
  - … 10/10, dependencia del coche 2/10. Un martes de noviembre se re…
  - …omprar.",  "Los servicios son 10/10. Valdecilla queda a unos cinc…
- **broken000** (3 muestras):
  - … habitaciones rondan unos 220.000 euros.",  "La referencia de precio …
  - …una media municipal en prosa. 000 euros —fuera de la orilla asequible…
  - … asequible andan cerca de 220.000 euros; tres suelen quedar por encim…
- **precio_narr** (5 muestras):
  - …os habitaciones rondan unos 220.000 euros.",  "La referencia de precio …
  - … del mes; aquí no se fija una media municipal en prosa. 000 euros —fuera de…
  - …una media municipal en prosa. 000 euros —fuera de la orilla asequible…
  - …nueva y fibra; el metro ronda 2.600 euros, el más alto de la zona: dos …
  - …ja asequible andan cerca de 220.000 euros; tres suelen quedar por encim…
- **clima** (5 muestras):
  - …es, ganas logística y pierdes despejados. Santander suma unas 1.680 …
  - …ander suma unas 1.680 a 1.700 horas de sol y unos 38 a 40 días despejado…
  - …as de sol y unos 38 a 40 días despejados, frente a las 2.800 horas y…
  - …oras y 120 jornadas claras de Mallorca. Caen alrededor de 1.150 a 1.…
  - … días. El viento es medio; la niebla, baja.",  "El verano ronda 20…
- **hospital** (5 muestras):
  - … falta lo esencial de ciudad. Valdecilla —hospital público de referenc…
  - …encial de ciudad. Valdecilla —hospital público de referencia naciona…
  - …— queda a unos cinco minutos; Santa Clotilde, a unos cinco. El aeropuerto …
  - … usa Santander como ciudad de hospital, cultura y vuelo a quince min…
  - …na única plaza de pueblo.",  "Valdecilla —hospital público de referenc…
- **Palma** (5 muestras):
  - …edor de los diez minutos, con Palma casi todo el año —el mejor ac…
  - …edor de los diez minutos, con Palma casi todo el año —el mejor ac…
  - …esteros está a unos diez, con Palma casi todo el año. Eso es Sant…
  - …to alrededor de los diez, con Palma casi todo el año —el mejor ac…
  - …nan bahía, Magdalena, Botín y Palma casi todo el año a diez minut…
- **ferry** (3 muestras):
  - …gante, limpia y ordenada, con ferry a Inglaterra e Irlanda. Es la…
  - …rilla abierta. El puerto y el ferry a Inglaterra e Irlanda mantie…
  - …gante, limpia y ordenada, con ferry a Inglaterra e Irlanda. Quien…
- **rank** (2 muestras):
  - …ncia y por qué el metro es el más alto de la zona.",  ],  fuera: [  …
  - …l metro ronda 2.600 euros, el más alto de la zona: dos habitaciones …

### 6.2 Capa 2026 completa

Fuente: `web/src/data/municipios-cantabria-occidental.json` · slug `santander`.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `280794` |
| `A_3hab` | `388791` |
| `B_2hab` | `226795` |
| `B_3hab` | `314024` |
| `advertenciaMicrozona` | `null` *(n.d. / ausente)* |
| `aeropuertoMin` | `10` |
| `aeropuertoPractico2026` | Santander |
| `aeropuertos` | Santander 5 km · 10 min (Palma: casi todo el año); Bilbao 99 km · 75 min (Palma: todo el año) |
| `autonomiaCotidiana` | MUY ALTA |
| `casaQueBuscar` | Ascensor o acceso sin barreras, exterior, 2–3 dormitorios y servicios andando... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Más húmedo / nublado |
| `comunicaciones` | A-67 / A-8; cercanías; ferry |
| `comunicacionesNota10` | `10` |
| `cubiertos` | `165` |
| `dependenciaCocheTexto` | Baja en barrios centrales bien elegidos; mayor en periferia. |
| `despejados` | `40` |
| `estacionalidad2026` | Ciudad plenamente anual. |
| `fibra` | Sí |
| `franja` | A |
| `hospitalMin` | `5` |
| `hospitalPractico2026` | Hospital Universitario Marqués de Valdecilla |
| `hospitalPriv` | 2 km · 5 min · Santa Clotilde (Santander) |
| `hospitalPub` | 3 km · 5 min · Valdecilla (Santander) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 2 km · 5 min · Valdecilla (Santander); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `75` |
| `lat` | `43.462` |
| `lluviaDias` | `148` |
| `lluviaMm` | `1150` |
| `lon` | `-3.81` |
| `mapa` | 67_santander.png |
| `mercadoReventa` | Mercado relativamente amplio por demanda residencial permanente y servicios. ... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | Centro, Sardinero y barrios periféricos cambian precio, playa, pendiente y necesidad de coche. |
| `minBano` | `5` |
| `minCosta` | `5` |
| `municipio` | Santander |
| `n` | `67` |
| `niebla` | Baja |
| `obraNueva` | Sí |
| `pais` | España |
| `palmaDirecta2026` | Santander: Palma figura entre destinos publicados en 2026; programación concreta puede variar por temporada. |
| `palmaMasCercano` | Casi todo el año |
| `palmaMejor` | Santander (casi todo el año) · 10 min |
| `paseoCotidiano` | Bahía/Puerto Chico–Magdalena–Sardinero según vivienda. |
| `paseoPendienteTopografia` | Ciudad con cuestas: la microzona condiciona mucho la comodidad peatonal. |
| `peajeRealidad` | Máxima autonomía regional y mar urbano a cambio de precio, tráfico, cuestas y diferencias fuertes entre barrios. |
| `playaBano` | El Sardinero |
| `playaCotidiana` | SÍ EN MICROZONAS COSTERAS |
| `playaCotidianaModo` | El Sardinero y otras playas urbanas están integradas en la ciudad; desde el centro comercial la relación con playa depende de barrio. |
| `precioM2` | `3323` |
| `provincia` | Cantabria |
| `radioCotidiano` | Ciudad completa con mercados, comercio, cultura, deporte, sanidad y transporte; barrios centrales permiten resolver casi toda la semana andando. |
| `radioSalida` | Costa cántabra y entorno metropolitano; no necesaria para necesidades ordinarias. |
| `sanidadPrimaria2026` | Red urbana completa |
| `servicios` | `10` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | No falta nada |
| `slug` | santander |
| `solHoras` | `1700` |
| `tempAgua` | 19-21 |
| `tempInvierno` | `10.0` |
| `tempVerano` | `20.0` |
| `transporteRelevante2026` | Bus urbano, ferrocarril y aeropuerto próximo. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital Universitario Marqués de Valdecilla. |
| `viento` | Media |
| `zona` | Cantabria Occidental |

**Highlights capa (autoridad):** autonomia `MUY ALTA` · playa `SÍ EN MICROZONAS COSTERAS` · precioM2 `3323` · servicios `10` · hospitalMin `5`.

### 6.3 Auditorías / plan existentes

**NO PLAN_EDITORIAL** para Cantabria Occidental ni Oriental (no hay `PLAN_EDITORIAL_CANTABRIA_*.md` ni equivalente CURSOR_19).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n=67 → claves 63–72):

```
| 67 | Santander | Cantabria Occidental | precio relato ~2600 vs ficha 3323 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 67 | Santander | Cantabria Occidental | no | — |
```

**estudio_zonas.md** (histórico — **NO** autoridad 2026):

<details><summary>Recorte estudio</summary>

**Santander (nº 67).** 173.000 habitantes; Sardinero, Magdalena, Cabo Mayor, Centro Botín, paseo de Pereda, bahía; ciudad elegante, limpia y ordenada. Servicios 10/10. Hospital 5. Aeropuerto 10. Ferry a Inglaterra e Irlanda. Precio 2.600: 2 habitaciones franja A 220.000. Obra nueva sí. Seguridad 51. Dependencia del coche 2/10. Para quién: quien prefiera ciudad; para ti, la ciudad de referencia de Liencres.

Si yo fuera tú

Liencres o Mortera. Es la mejor combinación de seguridad, hospital y aeropuerto con vuelo anual a Palma de toda la tabla, con una urbanización de casas bajas junto a dunas y acantilados. Lo único que la descarta es el sol: 1.700 horas y 40 días despejados frente a los 2.500 y 78 del Val Miñor.

![Mapa de la zona 14](../output/mapas_zonas/zona_14.png)

14. Cantabria Oriental (Cantabria) · Ribamontán al Mar, Noja, Santoña, Laredo, Castro-Urdiales

La zona

La 

</details>

### 6.4 Auditoría relato ↔ capa

Estados permitidos: `ALINEADO` · `OBSOLETO` · `DUPLICA_CAPA` · `P4_PRESERVAR` · `SOPORTADO_PERO_INFRAUSADO` · `NO_SOPORTADO_NO_INVENTAR` · `REQUIERE_VERIFICACION_EXTERNA`

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | **10/10** / no falta nada | `servicios` **10**; No falta nada | DUPLICA_CAPA | Omitir chip; narrar ciudad completa / MUY ALTA |
| Precio €/m² | Auditoría ~2600 vs 3323; prosa remite + «000 euros» | `precioM2` **3323**; `microzonaPrecio`: Centro, Sardinero y barrios periféricos cambian precio, playa, pendiente y necesidad de coche. | OBSOLETO | Media + barrios; no cifra única como verdad de toda la ciudad |
| Prosa rota «000 euros» | Tras remitir a capa queda fragmento «000 euros» (+ totales sueltos a veces) | Cifras viven en `precioM2` / A/B / TablaPrecios | OBSOLETO | Borrar resto roto; no reponer €/m² históricos en prosa |
| Autonomía ciudad | Ciudad a pie en barrios centrales | **MUY ALTA** — Baja en barrios centrales bien elegidos; mayor en periferia. | ALINEADO | No tratar como villa |
| Mar / playa | Sardinero, Magdalena, bahía | **SÍ EN MICROZONAS COSTERAS** — El Sardinero y otras playas urbanas están integradas en la ciudad; desde el centro comercial la relación con playa depende de barrio. | ALINEADO | SÍ EN MICROZONAS COSTERAS; centro comercial ≠ playa a la puerta |
| Hospital | Valdecilla ~5′ | `hospitalMin` **5** — Hospital Universitario Marqués de Valdecilla | ALINEADO | Ventaja; una mención |
| Aeropuerto / Palma | Minutos aero + «Palma casi todo el año» (tono permanente posible) | `aeropuertoMin` 10; `palmaDirecta2026` matiza temporada/comprobar | DUPLICA_CAPA / ALINEADO (capa ya dice casi todo el año en aero práctico) | Consecuencia una vez; no martillar minutos+Palma en cascada; no inventar permanente absoluto |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos tiempo→encaja (y a menudo abrir) | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| P4 Sardinero / bahía / Botín | Escena ciudad-mar | fotos + radios | P4_PRESERVAR | Conservar mapa mental bahía–Sardinero–Magdalena |

### 6.5 P4 / identidad

- **Preservar:** bahía, Sardinero, Magdalena, Pereda/Botín, Cabo Mayor, ciudad completa.
- **Identidad:** capital cantábrica; microzonas de precio/playa/pendiente.
- **No** aplanar a «villa con playa».

### 6.6 Vida cotidiana soportada

| Elemento | Clasificación | Base repo |
|---|---|---|
| Autonomía | YA SOPORTADO | `MUY ALTA` |
| Coche | YA SOPORTADO | `Baja en barrios centrales bien elegidos; mayor en periferia.` |
| Servicios cotidianos | YA SOPORTADO | servicios `10` — No falta nada |
| Paseo | YA SOPORTADO | Bahía/Puerto Chico–Magdalena–Sardinero según vivienda. |
| Pendiente | YA SOPORTADO | Ciudad con cuestas: la microzona condiciona mucho la comodidad peatonal. |
| Microzona | YA SOPORTADO / INFRAUSADO | adv: — / microPrecio: Centro, Sardinero y barrios periféricos cambian precio, playa, pendiente y necesidad de coche. |
| Compra enero / estacionalidad | YA SOPORTADO en relato+capa | contrastar verano vs noviembre |
| Nombres café / horarios exactos | NO SOPORTADO | — |
| Totales A/B en prosa | NO SOPORTADO (viven en tabla) | A_3hab `388791` / B_3hab `314024` |

### 6.7 Reality toll

- Autonomía **MUY ALTA**; ciudad
- Playa **SÍ EN MICROZONAS COSTERAS**; cuestas según barrio
- microzonaPrecio barrios
- Valdecilla ~**5′**; aero ~**10′**
- Precio **3323**
- Tráfico/afluencia Sardinero

### 6.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | Auditoría ~2600 (histórico prosa/estudio) | **3323** | OBSOLETO — capa prevalece |
| A_3hab / B_3hab | No narrar totales | `388791` / `314024` | TablaPrecios |
| casaQueBuscar / reventa | Cualitativo | Ver tabla capa §N.2 | `casaQueBuscar` truncado `…` → **DESEABLE** texto completo (no bloquea v1); `mercadoReventa` truncado `…` → **DESEABLE** texto completo (no bloquea v1) |
| «000 euros» | Presente tras remitir a capa | — | Borrar resto roto |
| microzonaPrecio | Barrios | Centro, Sardinero y barrios periféricos cambian precio, playa, pendiente y necesidad de coche. | Usar |

### 6.9 Clima: deuda / duplicación (NO correct)

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en `tiempo` + `encaja` (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `santander` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_30.**

### 6.10 Mar / playa / paseo

- **playaCotidiana:** `SÍ EN MICROZONAS COSTERAS`
- **Modo:** El Sardinero y otras playas urbanas están integradas en la ciudad; desde el centro comercial la relación con playa depende de barrio.
- **paseoCotidiano:** Bahía/Puerto Chico–Magdalena–Sardinero según vivienda.
- **pendiente:** Ciudad con cuestas: la microzona condiciona mucho la comodidad peatonal.
- Separar baño cotidiano vs salidas (Oyambre, Berria, Langre, Buciero, Picos, etc.).
- No contradecir la etiqueta de playa de la capa.

### 6.11 No soportado / no inventar

- ~2600 media única para toda la ciudad
- Chip 10/10
- Tratar como villa
- Playa a la puerta desde cualquier barrio
- Palma permanente absoluta

---

## 7. Ribamontán al Mar

### 7.1 Relato actual completo

> CITA LITERAL — `web/src/lib/relatos-cantabria-oriental.ts` clave `ribamontan-al-mar` (objeto completo).

```ts
ribamontan-al-mar: {
 escala: "Casas bajas y surf",
 abrir: [
 "Ribamontán al Mar no se siente como un único casco: se siente como una costa de pueblos dispersos. Unos cinco mil quinientos habitantes repartidos en Somo —surf, paseo, lancha a Santander—, Loredo, Langre —acantilados—, Galizano, Suesa y Carriazo. Casas bajas, chalés, prados y mucha urbanización de segunda residencia. Frente a la bahía, Santander se ve en días claros; la lancha desde Somo corta el agua en unos treinta minutos cuando opera. Es orilla rural-costera, no de bloques de veraneo.",
 "Quien vive aquí es gente de los pueblos, surferos y quien buscó chalé con prado cerca del mar. Un martes de noviembre los servicios son 5/10: lo básico repartido entre parroquias; Santander completa comercio a unos veinte o veinticinco minutos. Valdecilla queda a unos quince o veinte; Santa Clotilde, a unos quince. El aeropuerto de Santander anda alrededor de los quince minutos, con Palma casi todo el año. La fibra es parcial: hay que comprobarla casa por casa.",
 "En verano Somo y Loredo reciben toallas, surf y algo de tráfico hacia la playa; el ritmo residencial de chalés se mantiene más estable que el de Noja. De octubre a mayo la costa se queda en lo suyo: viento, prados, orilla abierta. Primavera y otoño en Langre son buenas épocas para conocerlo: el acantilado no es solo foto de agosto.",
 "El calendario lo marca más la temporada de playa y el surf que una fiesta de plaza única: el lleno llega con Somo y Loredo en julio y agosto; el resto del año manda el silencio de urbanización y parroquia. Quien se decida a vivir aquí debe probar un agosto en la orilla y un martes de noviembre con cielo cubierto y fibra real. La semana se organiza en coche entre pueblos, no a pie de villa densa.",
 "Ribamontán encaja para quien quiera casa baja en zona rural-costera tranquila con Santander enfrente y aeropuerto a quince minutos. Si solo conoces un sábado de sol en Somo, te llevas la imagen de folleto del surf. Si has visto el gris de noviembre, ya puedes decidir si quieres esa calma dispersa.",
 ],
 tiempo: [
 "Si vienes de Baleares, el cielo es el peaje más duro de la tabla oriental. Ribamontán suma unas 1.650 a 1.700 horas de sol y unos 40 días despejados, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.150 a 1.250 milímetros en unos 150 a 155 días. El viento es medio; la niebla, baja. De noviembre a febrero las mañanas grises pesan; de junio a septiembre la terraza se usa cuando abre.",
 "El verano ronda 20 °C, con máximas habituales alrededor de 24 °C y apenas dos a seis días sobre 30 °C. Somo, Loredo, Langre y Galizano tienen agua entre 19 y 21 °C; la orilla es abierta y con oleaje —reserva de surf, no bahía tibia—. Conviene venir un día de cubierto y un noviembre, no solo el sábado de ola en Somo.",
 ],
 vivir: [
 "El invierno en Ribamontán se nota en la casa dispersa y en el cielo. De noviembre a febrero las mañanas grises pesan; viento, salitre y humedad de costa abierta piden aislamiento y calefacción en chalés entre prados. La terraza se usa cuando abre; de octubre a mayo la costa se queda en lo suyo. Visitar un martes de noviembre con fibra real evita firmar solo por Somo en sol.",
 "El día a día sin coche es difícil: la semana se organiza en coche entre Somo, Loredo, Langre, Galizano, Suesa y Carriazo. Los servicios son 5/10 —lo básico repartido entre parroquias—; Santander completa comercio a unos veinte o veinticinco minutos. En enero el ritmo es de urbanización y parroquia, no de villa densa a pie.",
 "Conviven gente de los pueblos, surferos y quien buscó chalé con prado cerca del mar. En verano Somo y Loredo reciben toallas, surf y tráfico; el ritmo de chalés se mantiene más estable que el de Noja. La vida social pasa por parroquia y orilla más que por una plaza única. El castellano basta; la integración es de vecinos dispersos y temporada de playa.",
 "Valdecilla queda a unos quince o veinte minutos; Santa Clotilde, a unos quince. No hay hospital en el municipio: lo diario se reparte entre parroquias y Santander completa el resto. Empadronarse aquí abre cabecera local; para especialidades se asume el trayecto corto a Santander.",
 "Santander–Seve Ballesteros anda alrededor de los quince minutos, con Palma casi todo el año: acceso aéreo cómodo frente a Laredo o Santoña. Ir y volver a Mallorca es viable casi todo el año; el peaje sigue siendo el sol mínimo de la zona oriental, no la distancia al avión.",
 "Predominan casas bajas, chalés y urbanizaciones de segunda residencia; hay poca obra nueva y fibra parcial —hay que comprobarla casa por casa—. No es piso de torre: es parcela y chalé entre prados. En primera línea hay que contar con ocupación de verano, salitre y precio. Tres habitaciones en orilla suelen quedar caras; conviene orientación al viento y acceso a Somo un domingo de agosto.",
 ],
 historia: [
 "Somo, Loredo y Langre explican Ribamontán: parroquias de costa abierta y surf, no un casco medieval único. La lancha a Santander en unos treinta minutos marca la relación con la capital: la bahía como vecina, no como ciudad vivida a pie. El Real Golf de Pedreña queda junto al municipio —capa de ocio de bahía—.",
 "Galizano, Suesa y Carriazo completan la ficha de pueblos dispersos y chalés entre prados. Langre añade acantilado y orilla más bruta —también tramo naturista—. Lo que conviene saber es de orilla residencial y reserva de surf, no de villa industrial ni de bloques de agosto.",
 "Hoy Ribamontán vive de esa lógica: casa baja, coche entre parroquias, playa larga y Santander enfrente. Quien camina el paseo de Somo un martes de octubre entiende el sitio mejor que quien solo lo conoce un domingo de agosto saturado.",
 ],
 fuera: [
 "Si solo hay tiempo para un baño cerca, ese baño es Somo o Loredo: playa larga, oleaje, agua entre 19 y 21 °C, el paseo de Somo como gesto diario. Un martes de junio puedes tener espacio; un domingo de agosto el acceso se complica. Es orilla de surf y de temporada, no de resort de bloques.",
 "Langre cubre acantilado y horizonte más bruto; Galizano amplía orilla hacia el este. El paseo y la lancha a Santander —cuando opera— son la otra mitad del agua: cruzar la bahía en media hora cambia el registro de costa a capital.",
 "El Real Golf de Pedreña queda junto al municipio; Santander, a unos veinte o veinticinco minutos por carretera. Quien priorice chalés, surf y calma frente a Ris o La Salvé en bloques encontrará aquí el perfil; quien priorice hospital a cinco minutos mirará Laredo; quien priorice Bilbao y Palma todo el año, Castro.",
 ],
 casa: [
 "Predominan casas bajas, chalés y urbanizaciones de segunda residencia; hay poca obra nueva y fibra parcial. Junto a la primera línea hay que contar con ocupación de verano, salitre y precio. No es piso de torre: es parcela y chalé entre prados.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros —fuera de la orilla asequible habitual—. Conviene comprobar fibra en esa casa concreta y el acceso a Somo un domingo de agosto.",
 "Los servicios son 5/10. Valdecilla queda a unos quince o veinte minutos. Santander–Seve Ballesteros está a unos quince, con Palma casi todo el año. Eso es Ribamontán: casas bajas y surf a cambio de villa incompleta y sol mínimo.",
 ],
 encaja: {
 si: [
 "Las casas bajas frente a Santander importan más que la villa de bloques. Ribamontán al Mar reúne unos cinco mil quinientos habitantes en pueblos dispersos: Somo —surf, paseo, lancha a Santander—, Loredo, Langre —acantilados—, Galizano, Suesa y Carriazo. Chalés, prados y mucha urbanización de segunda residencia: orilla rural-costera, no de torres de veraneo. Quien quiera casa baja con Somo o Loredo cerca, Santander enfrente a unos veinte o veinticinco minutos y aeropuerto a unos quince encontrará aquí calma residencial y surf, no pueblo de agosto masivo. En verano Somo y Loredo reciben toallas y tráfico hacia la playa; el ritmo de chalés se mantiene más estable que el de Noja. Unas 1.650 a 1.700 horas de sol y unos 40 días despejados —frente a las 2.800 horas y 120 de Mallorca— son el peaje: lluvia frecuente también en verano, verano suave alrededor de 20 °C, agua entre 19 y 21 °C, niebla baja. Quien venga de Baleares debe probar ese cielo cubierto antes de comprar.",
 "Funciona si se aceptan servicios 5/10 —lo básico repartido entre parroquias; Santander completa comercio—, Valdecilla a unos quince o veinte minutos, Santa Clotilde a unos quince y Seve Ballesteros alrededor de los quince, con Palma casi todo el año. La fibra es parcial: hay que comprobarla casa por casa. dos habitaciones en franja asequible andan cerca de 194.000 euros; tres en primera línea suelen quedar caras. Quien priorice chalés, surf y calma frente a Ris o La Salvé en bloques, y pruebe un noviembre gris con fibra real, entenderá Ribamontán sin pedirle villa completa.",
 ],
 no: [
 "Si la semana debe resolverse andando con servicios 7/10 a pie, Ribamontán no encaja: el coche organiza compra y muchos gestos; Laredo o Castro cubren villa o ciudad más densa. Tampoco si se necesita fibra garantizada en toda la parcela: aquí es parcial. Tres habitaciones en primera línea dentro de la orilla asequible habitual del mercado suelen quedar fuera.",
 "Tampoco si se busca el veraneo masivo de bloques —Noja— o la villa de trabajo con monte —Santoña—: aquí mandan casas bajas y surf. El cielo de Baleares no está en Somo: se gana orilla residencial, no despejados. Quien se decida solo tras un sábado de sol de agosto, sin probar el aislamiento de noviembre ni la cobertura de fibra, se llevará una sorpresa. Si lo que manda es hospital a cinco minutos y playa enorme, Laredo; si manda Palma todo el año vía Bilbao, Castro.",
 ],
 veredicto:
 "Veredicto: Ribamontán al Mar encaja como casas bajas y surf —chalé o casa en Loredo o Langre, con fibra comprobada y acceso claro a Somo— sobre todo si calma residencial y aeropuerto a quince importan más que la villa densa. Probar un martes de noviembre y un agosto en la playa antes de comprar. Se ganan orilla frente a Santander y Seve Ballesteros a quince; se aceptan servicios 5/10, fibra parcial, tres habitaciones caras en primera línea y el sol mínimo de la zona. Quien priorice hospital a pie, Laredo; quien priorice Bilbao y Palma todo el año, Castro.",
 },
 fotosAbrir: [
 { src: "/fotos/cantabria-oriental/ribamontan-somo.jpg", pie: "Somo: playa y surf en Ribamontán al Mar" },
 { src: "/fotos/cantabria-oriental/ribamontan-casas.jpg", pie: "Casas bajas y prados en Ribamontán al Mar" },
 ],
 fotosHistoria: [
 { src: "/fotos/cantabria-oriental/ribamontan-loredo.jpg", pie: "Loredo, en Ribamontán al Mar" },
 { src: "/fotos/cantabria-oriental/ribamontan-langre.jpg", pie: "Acantilados de Langre" },
 ],
 fotosFuera: [
 { src: "/fotos/cantabria-oriental/ribamontan-galizano.jpg", pie: "Playa de Galizano" },
 { src: "/fotos/cantabria-oriental/ribamontan-playa.jpg", pie: "Costa abierta de Ribamontán al Mar" },
 ],
 creditoFotos: credito,
 }
```

**Señales de auditoría (scan local, sin internet):**

- **X/10** (5 muestras):
  - …e noviembre los servicios son 5/10: lo básico repartido entre pa…
  - …y Carriazo. Los servicios son 5/10 —lo básico repartido entre pa…
  - …agosto.",  "Los servicios son 5/10. Valdecilla queda a unos quin…
  - …ciona si se aceptan servicios 5/10 —lo básico repartido entre pa…
  - …olverse andando con servicios 7/10 a pie, Ribamontán no encaja: …
- **broken000** (2 muestras):
  - …una media municipal en prosa. 000 euros —fuera de la orilla asequible…
  - … asequible andan cerca de 194.000 euros; tres en primera línea suelen…
- **precio_narr** (3 muestras):
  - … del mes; aquí no se fija una media municipal en prosa. 000 euros —fuera de…
  - …una media municipal en prosa. 000 euros —fuera de la orilla asequible…
  - …ja asequible andan cerca de 194.000 euros; tres en primera línea suelen…
- **clima** (5 muestras):
  - …ontán suma unas 1.650 a 1.700 horas de sol y unos 40 días despejados, fr…
  - …0 horas de sol y unos 40 días despejados, frente a las 2.800 horas y…
  - …oras y 120 jornadas claras de Mallorca. Caen alrededor de 1.150 a 1.…
  - … días. El viento es medio; la niebla, baja. De noviembre a febrero…
  - …redo o Santoña. Ir y volver a Mallorca es viable casi todo el año; e…
- **hospital** (5 muestras):
  - …veinte o veinticinco minutos. Valdecilla queda a unos quince o veinte;…
  - …queda a unos quince o veinte; Santa Clotilde, a unos quince. El aeropuerto…
  - …sos y temporada de playa.",  "Valdecilla queda a unos quince o veinte …
  - …unos quince o veinte minutos; Santa Clotilde, a unos quince. No hay hospit…
  - …otilde, a unos quince. No hay hospital en el municipio: lo diario se…
- **Palma** (5 muestras):
  - …or de los quince minutos, con Palma casi todo el año. La fibra es…
  - …or de los quince minutos, con Palma casi todo el año: acceso aére…
  - …redo; quien priorice Bilbao y Palma todo el año, Castro.",  ],  c…
  - …teros está a unos quince, con Palma casi todo el año. Eso es Riba…
  - … alrededor de los quince, con Palma casi todo el año. La fibra es…
- **ferry** (5 muestras):
  - …artidos en Somo —surf, paseo, lancha a Santander—, Loredo, Langre …
  - …nder se ve en días claros; la lancha desde Somo corta el agua en u…
  - …o un casco medieval único. La lancha a Santander en unos treinta m…
  - … hacia el este. El paseo y la lancha a Santander —cuando opera— so…
  - …dispersos: Somo —surf, paseo, lancha a Santander—, Loredo, Langre …

### 7.2 Capa 2026 completa

Fuente: `web/src/data/municipios-cantabria-oriental.json` · slug `ribamontan-al-mar`.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `298708` |
| `A_3hab` | `413595` |
| `B_2hab` | `241264` |
| `B_3hab` | `334058` |
| `advertenciaMicrozona` | Somo/Loredo concentran la experiencia de playa; Galizano y otras localidades ofrecen otra vida. |
| `aeropuertoMin` | `15` |
| `aeropuertoPractico2026` | Santander 13 km · 15 min (Palma: casi todo el año); Bilbao 92 km · 70 min (Palma: todo el año) Tiempo histórico orientativo: ~15 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Santander 13 km · 15 min (Palma: casi todo el año); Bilbao 92 km · 70 min (Palma: todo el año) |
| `autonomiaCotidiana` | MEDIA |
| `casaQueBuscar` | Accesibilidad, exterior/terraza y distancia realmente caminable a núcleo y pa... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Más húmedo / nublado |
| `comunicaciones` | A-8; lancha Somo–Santander |
| `comunicacionesNota10` | `7` |
| `cubiertos` | `165` |
| `dependenciaCocheTexto` | Media; menor en Somo para rutina básica, mayor para sanidad/compra amplia y otras localidades. |
| `despejados` | `40` |
| `estacionalidad2026` | Muy marcada por turismo y surf en verano, con base residencial anual. |
| `fibra` | Parcial |
| `franja` | B |
| `hospitalMin` | `15` |
| `hospitalPractico2026` | Hospital Universitario Marqués de Valdecilla (Santander), aprox. 15–20 min desde el eje Somo/Loredo. |
| `hospitalPriv` | 15 km · 15 min · Santa Clotilde (Santander) |
| `hospitalPub` | 20 km · 20 min · Valdecilla (Santander) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 14 km · 15 min · Valdecilla (Santander); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `76` |
| `lat` | `43.47` |
| `lluviaDias` | `150` |
| `lluviaMm` | `1150` |
| `lon` | `-3.7` |
| `mapa` | 68_ribamontan_al_mar.png |
| `mercadoReventa` | Mercado intermedio con componente turístico/segunda residencia. La liquidez d... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `8` |
| `minCosta` | `5` |
| `municipio` | Ribamontán al Mar |
| `n` | `68` |
| `niebla` | Baja |
| `obraNueva` | Poca |
| `pais` | España |
| `palmaDirecta2026` | Santander: Palma figura entre destinos publicados en 2026; programación concreta puede variar por temporada. |
| `palmaMasCercano` | Casi todo el año |
| `palmaMejor` | Santander (casi todo el año) · 15 min |
| `paseoCotidiano` | Playa/dunas/pinar Somo–Loredo; recorridos largos y llanos sobre arena/paseo según tramo. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Playa excepcional y acceso marítimo a Santander, pero menor profundidad de servicios y fuerte temporada. |
| `playaBano` | Somo / Loredo |
| `playaCotidiana` | SÍ EN SOMO/LOREDO |
| `playaCotidianaModo` | Gran sistema de playa, dunas y pinar entre Somo y Loredo; Langre es una salida distinta y más abrupta. |
| `precioM2` | `3535` |
| `provincia` | Cantabria |
| `radioCotidiano` | Somo tiene básicos y hostelería; la capacidad cotidiana municipal sigue siendo menor que Santander. |
| `radioSalida` | Santander mediante barco desde Somo y por carretera; Langre/Galizano para costa más abierta. |
| `sanidadPrimaria2026` | Atención primaria en el municipio |
| `servicios` | `5` |
| `serviciosEstado` | VALIDADO — valor exacto recuperado de fuente maestra histórica |
| `serviciosNota` | Tiene: lo básico repartido en pueblos. Falta: villa completa (Santander a 20-25) |
| `slug` | ribamontan-al-mar |
| `solHoras` | `1700` |
| `tempAgua` | 19-21 |
| `tempInvierno` | `10.0` |
| `tempVerano` | `20.0` |
| `transporteRelevante2026` | Barco Somo–Santander, útil para ocio y acceso urbano; no elimina todas las necesidades de coche. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital Universitario Marqués de Valdecilla (Santander), aprox. 15–20 min desde el eje Somo/Loredo.. |
| `viento` | Media |
| `zona` | Cantabria Oriental |

**Highlights capa (autoridad):** autonomia `MEDIA` · playa `SÍ EN SOMO/LOREDO` · precioM2 `3535` · servicios `5` · hospitalMin `15`.

### 7.3 Auditorías / plan existentes

**NO PLAN_EDITORIAL** para Cantabria Occidental ni Oriental (no hay `PLAN_EDITORIAL_CANTABRIA_*.md` ni equivalente CURSOR_19).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n=68 → claves 63–72):

```
| 68 | Ribamontán al Mar | Cantabria Oriental | precio relato ~2300 vs ficha 3535 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | lenguaje vago/revisar: tranquilo | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 68 | Ribamontán al Mar | Cantabria Oriental | no | — |
```

**estudio_zonas.md** (histórico — **NO** autoridad 2026):

<details><summary>Recorte estudio</summary>

**Ribamontán al Mar (nº 68).** 5.500 habitantes en pueblos dispersos: Somo (surf, paseo, lancha a Santander), Loredo, Langre (acantilados), Galizano, Suesa, Carriazo. Casas bajas, chalés, prados, mucha urbanización de segunda residencia. Servicios 5/10; fibra parcial; coche 7/10. Hospital Valdecilla 15-20, Santa Clotilde 15. Aeropuerto 15. Precio 2.300: 2 habitaciones franja A 194.000. Poca obra nueva. Para quién: quien quiera casa baja en zona rural-costera tranquila con Santander enfrente y aeropuerto a 15.

**Noja (nº 69).** 2.700 habitantes en invierno; Ris y Trengandín (largas, con islotes), marismas de Victoria y Joyel, bloques de apartamentos. Servicios 4/10 fuera de temporada. Hospital Laredo 20. Aeropuerto 25. Precio 2.300. Para quién: segunda residencia; no para vivir todo el año.

**Santoña (nº 70).** 11.000 habitantes; villa marinera con vida propia (anchoas, puerto), Monte B

</details>

### 7.4 Auditoría relato ↔ capa

Estados permitidos: `ALINEADO` · `OBSOLETO` · `DUPLICA_CAPA` · `P4_PRESERVAR` · `SOPORTADO_PERO_INFRAUSADO` · `NO_SOPORTADO_NO_INVENTAR` · `REQUIERE_VERIFICACION_EXTERNA`

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | **5/10** + Santander 20–25′ | `servicios` **5**; Tiene: lo básico repartido en pueblos. Falta: villa completa (Santander a 20-25) | DUPLICA_CAPA | Omitir chip; narrar MEDIA / básico repartido |
| Precio €/m² | Auditoría ~2300 vs 3535; «000 euros» + «fuera orilla asequible» | `precioM2` **3535** (alto) | OBSOLETO | Capa cara; no reponer ~2300 |
| Prosa rota «000 euros» | Tras remitir a capa queda fragmento «000 euros» (+ totales sueltos a veces) | Cifras viven en `precioM2` / A/B / TablaPrecios | OBSOLETO | Borrar resto roto; no reponer €/m² históricos en prosa |
| Microzona Somo/Loredo | Pueblos dispersos; Langre distinta | `advertenciaMicrozona`: Somo/Loredo concentran la experiencia de playa; Galizano y otras localidades ofrecen otra vida.; playa **SÍ EN SOMO/LOREDO** | ALINEADO / SOPORTADO_PERO_INFRAUSADO | Somo/Loredo = playa; Galizano/otras = otra vida |
| Lancha / ferry a Santander | Lancha Somo ~30′ cuando opera | No hay campo ferry dedicado en JSON; relato + bahía | P4_PRESERVAR / SOPORTADO_PERO_INFRAUSADO | Conservar como vínculo bahía si se menciona; no inventar horarios |
| Hospital | Valdecilla ~15–20′ (relato/capa) | Hospital Universitario Marqués de Valdecilla (Santander), aprox. 15–20 min desde el eje Somo/Loredo. (`hospitalMin` 15) | ALINEADO | Una vez |
| Aeropuerto / Palma | Minutos aero + «Palma casi todo el año» (tono permanente posible) | `aeropuertoMin` 15; `palmaDirecta2026` matiza temporada/comprobar | DUPLICA_CAPA / ALINEADO (capa ya dice casi todo el año en aero práctico) | Consecuencia una vez; no martillar minutos+Palma en cascada; no inventar permanente absoluto |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos tiempo→encaja (y a menudo abrir) | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| Lenguaje «tranquilo» (P3) | Auditoría marca vago | Estacionalidad residencial | P4_PRESERVAR con matiz | Preferir calma dispersa / segunda residencia a «tranquilo» |

### 7.5 P4 / identidad

- **Preservar:** Somo/Loredo/Langre dispersos; lancha a Santander; surf; chalés/prados.
- **Identidad:** costa rural-costera frente a bahía, no bloques Noja.
- **Microzona:** Somo/Loredo vs Galizano/otras.

### 7.6 Vida cotidiana soportada

| Elemento | Clasificación | Base repo |
|---|---|---|
| Autonomía | YA SOPORTADO | `MEDIA` |
| Coche | YA SOPORTADO | `Media; menor en Somo para rutina básica, mayor para sanidad/compra amplia y otras localidades.` |
| Servicios cotidianos | YA SOPORTADO | servicios `5` — Tiene: lo básico repartido en pueblos. Falta: villa completa (Santander a 20-25) |
| Paseo | YA SOPORTADO | Playa/dunas/pinar Somo–Loredo; recorridos largos y llanos sobre arena/paseo según tramo. |
| Pendiente | N/A / null | `null` |
| Microzona | YA SOPORTADO / INFRAUSADO | adv: Somo/Loredo concentran la experiencia de playa; Galizano y otras localidades ofrecen otra vida. / microPrecio: — |
| Compra enero / estacionalidad | YA SOPORTADO en relato+capa | contrastar verano vs noviembre |
| Nombres café / horarios exactos | NO SOPORTADO | — |
| Totales A/B en prosa | NO SOPORTADO (viven en tabla) | A_3hab `413595` / B_3hab `334058` |

### 7.7 Reality toll

- Autonomía **MEDIA**; coche entre pueblos
- Playa **SÍ EN SOMO/LOREDO**
- Precio **3535** alto; 3hab primera línea caras
- Valdecilla ~15–20′; aero ~**15′**
- Fibra parcial (relato)
- Lancha Somo: cuando opera (no inventar horario)

### 7.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | Auditoría ~2300 (histórico prosa/estudio) | **3535** | OBSOLETO — capa prevalece |
| A_3hab / B_3hab | No narrar totales | `413595` / `334058` | TablaPrecios |
| casaQueBuscar / reventa | Cualitativo | Ver tabla capa §N.2 | `casaQueBuscar` truncado `…` → **DESEABLE** texto completo (no bloquea v1); `mercadoReventa` truncado `…` → **DESEABLE** texto completo (no bloquea v1) |
| «000 euros» | Presente tras remitir a capa | — | Borrar resto roto |

### 7.9 Clima: deuda / duplicación (NO correct)

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en `tiempo` + `encaja` (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `ribamontan-al-mar` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_30.**

### 7.10 Mar / playa / paseo

- **playaCotidiana:** `SÍ EN SOMO/LOREDO`
- **Modo:** Gran sistema de playa, dunas y pinar entre Somo y Loredo; Langre es una salida distinta y más abrupta.
- **paseoCotidiano:** Playa/dunas/pinar Somo–Loredo; recorridos largos y llanos sobre arena/paseo según tramo.
- **pendiente:** `null`
- Separar baño cotidiano vs salidas (Oyambre, Berria, Langre, Buciero, Picos, etc.).
- No contradecir la etiqueta de playa de la capa.

### 7.11 No soportado / no inventar

- ~2300; «000 euros»
- Chip 5/10
- Horarios de lancha inventados
- Igualar Galizano = Somo
- Palma permanente absoluta

---

## 8. Noja

### 8.1 Relato actual completo

> CITA LITERAL — `web/src/lib/relatos-cantabria-oriental.ts` clave `noja` (objeto completo).

```ts
noja: {
 escala: "Veraneo en bloques",
 abrir: [
 "Noja se siente como dos pueblos según el mes: unos dos mil setecientos habitantes de octubre a mayo —y ochenta mil a cien mil en agosto— frente a Ris y Trengandín —playas largas con islotes—, las marismas de Victoria y Joyel y bloques de apartamentos. Es pueblo dimensionado para el verano, no villa con vida propia todo el año.",
 "Quien mira vivir aquí debe honestidad de calendario. Un martes de noviembre los servicios son 4–5/10: dimensionada para el verano; cierra medio comercio. El Hospital de Laredo queda a unos veinte minutos. El aeropuerto de Santander anda alrededor de los veinticinco minutos, con Palma casi todo el año. De octubre a mayo Noja queda muy tranquila —casi vacía—; el estudio la señala como segunda residencia, no para vivir todo el año.",
 "En julio y agosto los bloques se llenan de veraneantes de Burgos, Bilbao y Madrid: ruido, tráfico, toallas y aparcamiento justo hacia Ris y Trengandín. Primavera y otoño muestran las marismas sin la multitud; el invierno muestra el vacío. Si solo conoces un sábado soleado de agosto, te llevas la imagen de folleto de la playa. Si has visto un noviembre vacío, ya puedes decidir si quieres esa segunda residencia.",
 "El calendario lo marca el veraneo masivo: el lleno es julio y agosto; el resto del año, el cierre. Las fiestas locales animan el casco unos días en temporada, pero el hecho útil no es la patronal: es el contraste invierno–agosto. Quien viva en bloque junto a Ris debe contar la saturación de temporada como parte del año, no como excepción.",
 "Noja encaja para quien busque segunda residencia frente a playa larga; no para quien necesite comercio y ritmo de pueblo de octubre a mayo. Quien priorice mesas abiertas en enero mirará Santoña o Laredo.",
 ],
 tiempo: [
 "Si vienes de Baleares, el cielo no compensa el vacío de invierno. Noja suma unas 1.650 a 1.700 horas de sol y unos 40 días despejados, lejos de las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.150 a 1.250 milímetros en unos 150 a 155 días. El viento es medio; la niebla, baja.",
 "El verano ronda 20 °C, fresco frente a Baleares. Ris y Trengandín tienen agua entre 19 y 21 °C; la orilla es abierta y con oleaje. Conviene venir un agosto lleno y un martes de noviembre vacío, no solo el día soleado de la foto turística con islotes.",
 ],
 vivir: [
 "El invierno en Noja es el hecho útil, no un detalle. De octubre a mayo el pueblo queda muy tranquilo —casi vacío—; cierra medio comercio y la casa de bloque enfría con humedad de orilla y salitre. Conviene calefacción y aislamiento serios, y visitar un martes de noviembre vacío, no solo el día soleado de Ris con islotes.",
 "Sin coche, en temporada alta se llega a la playa; el resto del año lo diario se complica: servicios 4–5/10 fuera de temporada, dimensionados para el verano. Un martes de noviembre no hay vida de villa con mesas abiertas como en Santoña o Laredo. Quien mire vivir aquí debe honestidad de calendario: de octubre a mayo Noja no es pueblo completo a pie.",
 "Conviven los pocos residentes de invierno y el veraneo masivo de Burgos, Bilbao y Madrid en julio y agosto: ruido, tráfico, toallas y aparcamiento justo hacia Ris y Trengandín. La integración de año entero es escasa frente a una villa de trabajo; la de temporada es saturación. El estudio la señala como segunda residencia, no para vivir todo el año.",
 "El Hospital de Laredo queda a unos veinte minutos. No hay hospital en el municipio; fuera de temporada tampoco hay comercio denso. Para urgencias y especialidades se asume el trayecto a Laredo. Es logística de segunda casa costera, no de villa sanitaria a pie.",
 "Santander–Seve Ballesteros anda alrededor de los veinticinco minutos, con Palma casi todo el año. Ir y volver a Mallorca es viable, pero el peaje real de Noja no es el avión: es el vacío de invierno frente al lleno de agosto. Conviene mirar ambos antes de comprar como si fuera villa de enero.",
 "Predominan pisos en bloques de apartamentos; hay poca obra nueva y fibra. No es chalé de Loredo ni casco marinero de Santoña: es tipología de veraneo. En primera línea hay que contar con ocupación de agosto y precio. Imaginar la rutina en un bloque casi vacío en noviembre y saturado en agosto antes de comprar.",
 ],
 historia: [
 "Ris, Trengandín y los bloques de apartamentos explican Noja: urbanismo de veraneo frente a playa larga, no casco medieval. Las marismas de Victoria y Joyel —parte del parque natural compartido con Santoña— añaden la capa natural junto al pueblo: aves, pasarelas, agua quieta detrás de los bloques.",
 "El contraste invierno–agosto es el hecho útil: pueblo vacío fuera de temporada y saturado en verano con veraneo de Burgos, Bilbao y Madrid. La historia de vivir aquí es de calendario turístico, no de villa de trabajo ni de chalés dispersos.",
 "Hoy Noja sigue siendo eso: arenal enorme, torres de apartamentos, silencio de noviembre. Quien camina Ris un martes de enero entiende por qué el estudio la aparta de la opción de vivir todo el año.",
 ],
 fuera: [
 "Si solo hay tiempo para un baño en temporada, ese baño es Ris o Trengandín: playas largas con islotes, agua entre 19 y 21 °C, oleaje abierto. Un domingo de agosto el aparcamiento y las toallas lo llenan todo; un martes de junio puedes tener más espacio. Es orilla de veraneo masivo, no de diario de villa.",
 "Las marismas de Victoria y Joyel cubren el paseo de aves y pasarelas cuando no apetece oleaje: otro ambiente, más quieto, detrás del pueblo. Laredo y Santoña quedan a trayecto corto para quien busque villa con mesas en noviembre.",
 "Santander anda alrededor de los veinticinco o treinta minutos. Quien priorice segunda casa frente a arenal enorme encontrará aquí el gesto; quien priorice vida diaria todo el año mirará Santoña o Laredo; quien priorice chalés, Ribamontán.",
 ],
 casa: [
 "Predominan pisos en bloques de apartamentos; hay poca obra nueva y fibra. En primera línea hay que contar con ocupación de agosto y precio. No es chalé de Loredo: es tipología de veraneo.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros —fuera de la orilla asequible habitual—. Conviene probar el vacío de noviembre y el aparcamiento de agosto antes de comprar como si fuera villa de invierno.",
 "Los servicios son 4–5/10 fuera de temporada. El Hospital de Laredo queda a unos veinte minutos. Santander–Seve Ballesteros está a unos veinticinco, con Palma casi todo el año. Eso es Noja: playa larga de temporada a cambio de comercio cerrado de octubre a mayo.",
 ],
 encaja: {
 si: [
 "La playa larga de veraneo pesa solo si se acepta el vacío de invierno. Noja reúne unos dos mil setecientos habitantes de octubre a mayo —y decenas de miles en agosto—: Ris y Trengandín —largas, con islotes—, marismas de Victoria y Joyel y bloques de apartamentos. Es pueblo dimensionado para el verano, no villa con vida propia todo el año. Quien busque segunda residencia frente a arenal enorme, con Hospital de Laredo a unos veinte minutos y aeropuerto de Santander alrededor de los veinticinco, encontrará aquí orilla de bloques, no de chalés. En julio y agosto llega veraneo masivo de Burgos, Bilbao y Madrid: ruido, tráfico, toallas y aparcamiento justo; de octubre a mayo cierra medio comercio y el pueblo queda muy tranquilo —casi vacío—. Unas 1.650 a 1.700 horas de sol y unos 40 días despejados —frente a las 2.800 horas y 120 de Mallorca— mantienen el cielo más bajo de la tabla: lluvia frecuente también en verano, verano suave alrededor de 20 °C, agua entre 19 y 21 °C.",
 "Funciona si se mira con honestidad como base de temporada o segunda casa, no como marco diario de noviembre. Los servicios son 4/10 fuera de temporada —dimensionada para el verano—. Hay fibra; tres habitaciones en primera línea suelen quedar caras. Quien haya probado un agosto lleno y un martes de noviembre vacío, y siga queriendo Ris y Trengandín delante, entenderá Noja sin pedirle mesas abiertas en enero.",
 ],
 no: [
 "No encaja si se quiere vivir todo el año con comercio abierto, casas bajas o vida de villa de trabajo. Santoña cubre villa marinera activa; Ribamontán, chalés y surf; Laredo, hospital a cinco minutos y servicios 7/10. Aquí el estudio la señala como segunda residencia: el invierno no es un detalle, es la mitad del año.",
 "Tampoco si se necesitan tres habitaciones en primera línea dentro de la orilla asequible habitual del mercado, o el cielo de Baleares. Quien se decida solo tras un sábado de sol de agosto, sin probar el cierre de comercio ni el aparcamiento de temporada, se llevará una sorpresa. Si lo que manda es Palma todo el año a menos de cuarenta minutos vía Bilbao, Castro; si mandan casas bajas frente a Santander, Ribamontán.",
 ],
 veredicto:
 "Veredicto: Noja encaja solo como veraneo en bloques —segunda residencia tras probar un agosto lleno y un noviembre vacío—, no como villa para vivir de octubre a mayo. Se ganan Ris, Trengandín y Laredo a veinte minutos; se aceptan servicios 4/10 fuera de temporada, tipología de apartamentos, y el sol bajo de Cantabria Oriental. Quien priorice vida diaria todo el año, Santoña o Laredo; quien priorice chalés, Ribamontán.",
 },
 fotosAbrir: [
 { src: "/fotos/cantabria-oriental/noja-bloques.jpg", pie: "Noja: bloques de apartamentos de veraneo" },
 { src: "/fotos/cantabria-oriental/noja-ris.jpg", pie: "Playa de Ris, Noja" },
 ],
 fotosHistoria: [
 { src: "/fotos/cantabria-oriental/noja-villa.jpg", pie: "Noja fuera de temporada" },
 { src: "/fotos/cantabria-oriental/noja-marismas.jpg", pie: "Marismas de Victoria y Joyel, Noja" },
 ],
 fotosFuera: [
 { src: "/fotos/cantabria-oriental/noja-trengandin.jpg", pie: "Playa de Trengandín, Noja" },
 { src: "/fotos/cantabria-oriental/noja-playa.jpg", pie: "Orilla abierta de Noja" },
 ],
 creditoFotos: credito,
 }
```

**Señales de auditoría (scan local, sin internet):**

- **X/10** (5 muestras):
  - …noviembre los servicios son 4–5/10: dimensionada para el verano;…
  - …ario se complica: servicios 4–5/10 fuera de temporada, dimension…
  - …erno.",  "Los servicios son 4–5/10 fuera de temporada. El Hospit…
  - … noviembre. Los servicios son 4/10 fuera de temporada —dimension…
  - …l a cinco minutos y servicios 7/10. Aquí el estudio la señala co…
- **broken000** (1 muestras):
  - …una media municipal en prosa. 000 euros —fuera de la orilla asequible…
- **precio_narr** (2 muestras):
  - … del mes; aquí no se fija una media municipal en prosa. 000 euros —fuera de…
  - …una media municipal en prosa. 000 euros —fuera de la orilla asequible…
- **clima** (5 muestras):
  - … Noja suma unas 1.650 a 1.700 horas de sol y unos 40 días despejados, le…
  - …0 horas de sol y unos 40 días despejados, lejos de las 2.800 horas y…
  - …oras y 120 jornadas claras de Mallorca. Caen alrededor de 1.150 a 1.…
  - … días. El viento es medio; la niebla, baja.",  "El verano ronda 20…
  - …si todo el año. Ir y volver a Mallorca es viable, pero el peaje real…
- **hospital** (5 muestras):
  - …no; cierra medio comercio. El Hospital de Laredo queda a unos veinte…
  - …ara vivir todo el año.",  "El Hospital de Laredo queda a unos veinte…
  - …a unos veinte minutos. No hay hospital en el municipio; fuera de tem…
  - …4–5/10 fuera de temporada. El Hospital de Laredo queda a unos veinte…
  - …a frente a arenal enorme, con Hospital de Laredo a unos veinte minut…
- **Palma** (4 muestras):
  - … los veinticinco minutos, con Palma casi todo el año. De octubre …
  - … los veinticinco minutos, con Palma casi todo el año. Ir y volver…
  - … está a unos veinticinco, con Palma casi todo el año. Eso es Noja…
  - … sorpresa. Si lo que manda es Palma todo el año a menos de cuaren…
- **rank** (1 muestras):
  - … Mallorca— mantienen el cielo más bajo de la tabla: lluvia frecuente…

### 8.2 Capa 2026 completa

Fuente: `web/src/data/municipios-cantabria-oriental.json` · slug `noja`.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `278512` |
| `A_3hab` | `385632` |
| `B_2hab` | `224952` |
| `B_3hab` | `311472` |
| `advertenciaMicrozona` | `null` *(n.d. / ausente)* |
| `aeropuertoMin` | `25` |
| `aeropuertoPractico2026` | Santander 30 km · 25 min (Palma: casi todo el año); Bilbao 78 km · 60 min (Palma: todo el año) Tiempo histórico orientativo: ~25 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Santander 30 km · 25 min (Palma: casi todo el año); Bilbao 78 km · 60 min (Palma: todo el año) |
| `autonomiaCotidiana` | MEDIA |
| `casaQueBuscar` | Accesibilidad, exterior/terraza y distancia realmente caminable a núcleo y pa... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Más húmedo / nublado |
| `comunicaciones` | A-8 / CA-141 |
| `comunicacionesNota10` | `6` |
| `cubiertos` | `165` |
| `dependenciaCocheTexto` | Baja-media en temporada/núcleo para básicos; coche para hospital y servicios superiores. |
| `despejados` | `40` |
| `estacionalidad2026` | Estacionalidad turística fuerte; diferencia verano-invierno relevante. |
| `fibra` | Sí |
| `franja` | B |
| `hospitalMin` | `20` |
| `hospitalPractico2026` | Hospital de Laredo, aprox. 20 min, hospital público comarcal con urgencias. |
| `hospitalPriv` | 35 km · 35 min · Santa Clotilde (Santander) |
| `hospitalPub` | 20 km · 20 min · Hospital de Laredo |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 16 km · 20 min · Hospital de Laredo; verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `76` |
| `lat` | `43.489` |
| `lluviaDias` | `150` |
| `lluviaMm` | `1150` |
| `lon` | `-3.525` |
| `mapa` | 69_noja.png |
| `mercadoReventa` | Mercado intermedio con componente turístico/segunda residencia. La liquidez d... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `5` |
| `minCosta` | `3` |
| `municipio` | Noja |
| `n` | `69` |
| `niebla` | Baja |
| `obraNueva` | Poca |
| `pais` | España |
| `palmaDirecta2026` | Santander: Palma figura entre destinos publicados en 2026; programación concreta puede variar por temporada. |
| `palmaMasCercano` | Casi todo el año |
| `palmaMejor` | Santander (casi todo el año) · 25 min |
| `paseoCotidiano` | Ris/Trengandín y recorridos hacia marismas; terreno generalmente amable en el núcleo. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Dos playas muy cotidianas a cambio de presión estival y reducción notable de actividad fuera de temporada. |
| `playaBano` | Ris / Trengandín |
| `playaCotidiana` | SÍ |
| `playaCotidianaModo` | Ris y Trengandín ofrecen dos grandes playas directamente vinculadas al núcleo. |
| `precioM2` | `3296` |
| `provincia` | Cantabria |
| `radioCotidiano` | Núcleo con comercio, salud y servicios suficientes para básicos; mucha infraestructura orientada también al visitante. |
| `radioSalida` | Marismas de Victoria/Joyel, Santoña y servicios hospitalarios en Laredo/Santander según necesidad. |
| `sanidadPrimaria2026` | Atención primaria local |
| `servicios` | `4.5` |
| `serviciosEstado` | VALIDADO — valor exacto recuperado de fuente maestra histórica |
| `serviciosNota` | Tiene: dimensionada para el verano. Falta: comercio de invierno (cierra medio) |
| `slug` | noja |
| `solHoras` | `1700` |
| `tempAgua` | 19-21 |
| `tempInvierno` | `10.0` |
| `tempVerano` | `20.0` |
| `transporteRelevante2026` | CA-147 / A-8; bus Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital de Laredo, aprox. 20 min, hospital público comarcal con urgencias.. |
| `viento` | Media |
| `zona` | Cantabria Oriental |

**Highlights capa (autoridad):** autonomia `MEDIA` · playa `SÍ` · precioM2 `3296` · servicios `4.5` · hospitalMin `20`.

### 8.3 Auditorías / plan existentes

**NO PLAN_EDITORIAL** para Cantabria Occidental ni Oriental (no hay `PLAN_EDITORIAL_CANTABRIA_*.md` ni equivalente CURSOR_19).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n=69 → claves 63–72):

```
| 69 | Noja | Cantabria Oriental | precio relato ~2300 vs ficha 3296 | vuelo/Palma puede sonar permanente; capa 2026 matiza | repite horas de sol; menciona hospital también en capa Sanidad (+4) | lenguaje vago/revisar: tranquilo | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 69 | Noja | Cantabria Oriental | no | — |
```

**estudio_zonas.md** (histórico — **NO** autoridad 2026):

<details><summary>Recorte estudio</summary>

**Noja (nº 69).** 2.700 habitantes en invierno; Ris y Trengandín (largas, con islotes), marismas de Victoria y Joyel, bloques de apartamentos. Servicios 4/10 fuera de temporada. Hospital Laredo 20. Aeropuerto 25. Precio 2.300. Para quién: segunda residencia; no para vivir todo el año.

**Santoña (nº 70).** 11.000 habitantes; villa marinera con vida propia (anchoas, puerto), Monte Buciero, Berria (larga, dunas), fuerte de San Martín, marismas; lancha a Laredo en verano. Servicios 6/10. Hospital 10. Aeropuerto 30. Precio 1.900: 3 habitaciones franja A 222.000. Poca obra nueva. Para quién: quien quiera villa de trabajo con monte y marismas, más barata que sus vecinas.

**Laredo (nº 71).** 11.000 habitantes; La Salvé (5 km), Puebla Vieja (casco medieval, iglesia de la Asunción), puerto deportivo, paseo; torres de apartamentos de los 60-70 en el frente. Servicios 7/10. Hospital 5. Aeropuerto 

</details>

### 8.4 Auditoría relato ↔ capa

Estados permitidos: `ALINEADO` · `OBSOLETO` · `DUPLICA_CAPA` · `P4_PRESERVAR` · `SOPORTADO_PERO_INFRAUSADO` · `NO_SOPORTADO_NO_INVENTAR` · `REQUIERE_VERIFICACION_EXTERNA`

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota 4.5 | Prosa puede decir 4/10 o redondear; capa es **4.5** | `servicios` **4.5** (!); Tiene: dimensionada para el verano. Falta: comercio de invierno (cierra medio) | DUPLICA_CAPA / ALINEADO (capa) | Documentar 4.5: verano dimensionado / invierno cierra medio; **no inventar 4 o 5** |
| Precio €/m² | Auditoría ~2300 vs 3296; «000 euros» | `precioM2` **3296** | OBSOLETO | Capa prevalece |
| Prosa rota «000 euros» | Tras remitir a capa queda fragmento «000 euros» (+ totales sueltos a veces) | Cifras viven en `precioM2` / A/B / TablaPrecios | OBSOLETO | Borrar resto roto; no reponer €/m² históricos en prosa |
| Estacionalidad extrema | Oct–mayo casi vacía; verano bloques | MEDIA + nota comercio invierno | ALINEADO / P4_PRESERVAR | Peaje principal: segunda residencia |
| Mar / playa | Ris / Trengandín | **SÍ** — Ris y Trengandín ofrecen dos grandes playas directamente vinculadas al núcleo. | ALINEADO | SÍ dos grandes playas al núcleo |
| Hospital | Laredo ~20′ | `hospitalMin` **20** — Hospital de Laredo, aprox. 20 min, hospital público comarcal con urgencias. | ALINEADO | Una vez |
| Aeropuerto / Palma | Minutos aero + «Palma casi todo el año» (tono permanente posible) | `aeropuertoMin` 25; `palmaDirecta2026` matiza temporada/comprobar | DUPLICA_CAPA / ALINEADO (capa ya dice casi todo el año en aero práctico) | Consecuencia una vez; no martillar minutos+Palma en cascada; no inventar permanente absoluto |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos tiempo→encaja (y a menudo abrir) | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| Lenguaje «tranquilo» (P3) | Invierno vacío | capa estacional | P4_PRESERVAR con matiz | «Casi vacía» > «tranquilo» |

### 8.5 P4 / identidad

- **Preservar:** Ris/Trengandín; verano de bloques vs invierno vacío; marismas.
- **Identidad:** segunda residencia extrema.
- **Nota servicios 4.5:** documentar, no redondear inventando.

### 8.6 Vida cotidiana soportada

| Elemento | Clasificación | Base repo |
|---|---|---|
| Autonomía | YA SOPORTADO | `MEDIA` |
| Coche | YA SOPORTADO | `Baja-media en temporada/núcleo para básicos; coche para hospital y servicios superiores.` |
| Servicios cotidianos | YA SOPORTADO | servicios `4.5` — Tiene: dimensionada para el verano. Falta: comercio de invierno (cierra medio) |
| Paseo | YA SOPORTADO | Ris/Trengandín y recorridos hacia marismas; terreno generalmente amable en el núcleo. |
| Pendiente | N/A / null | `null` |
| Microzona | Poco o nada en capa | adv: — / microPrecio: — |
| Compra enero / estacionalidad | YA SOPORTADO en relato+capa | contrastar verano vs noviembre |
| Nombres café / horarios exactos | NO SOPORTADO | — |
| Totales A/B en prosa | NO SOPORTADO (viven en tabla) | A_3hab `385632` / B_3hab `311472` |

### 8.7 Reality toll

- Servicios **4.5** (4.5) — invierno cierra medio
- Estacionalidad extrema (segunda residencia)
- Playa **SÍ** Ris/Trengandín
- Hospital Laredo ~**20′**
- Precio **3296**
- Autonomía **MEDIA**

### 8.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | Auditoría ~2300 (histórico prosa/estudio) | **3296** | OBSOLETO — capa prevalece |
| A_3hab / B_3hab | No narrar totales | `385632` / `311472` | TablaPrecios |
| casaQueBuscar / reventa | Cualitativo | Ver tabla capa §N.2 | `casaQueBuscar` truncado `…` → **DESEABLE** texto completo (no bloquea v1); `mercadoReventa` truncado `…` → **DESEABLE** texto completo (no bloquea v1) |
| «000 euros» | Presente tras remitir a capa | — | Borrar resto roto |
| Servicios 4.5 | Posible redondeo en prosa | **4.5** literal capa | Documentar; no inventar |

### 8.9 Clima: deuda / duplicación (NO correct)

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en `tiempo` + `encaja` (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `noja` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_30.**

### 8.10 Mar / playa / paseo

- **playaCotidiana:** `SÍ`
- **Modo:** Ris y Trengandín ofrecen dos grandes playas directamente vinculadas al núcleo.
- **paseoCotidiano:** Ris/Trengandín y recorridos hacia marismas; terreno generalmente amable en el núcleo.
- **pendiente:** `null`
- Separar baño cotidiano vs salidas (Oyambre, Berria, Langre, Buciero, Picos, etc.).
- No contradecir la etiqueta de playa de la capa.

### 8.11 No soportado / no inventar

- ~2300; «000 euros»
- Redondear servicios a 4 o 5 ignorando **4.5**
- Prometer vida de villa en enero con comercio abierto
- Palma permanente absoluta

---

## 9. Santoña

### 9.1 Relato actual completo

> CITA LITERAL — `web/src/lib/relatos-cantabria-oriental.ts` clave `santona` (objeto completo).

```ts
santona: {
 escala: "Villa marinera y monte",
 abrir: [
 "Santoña se siente como villa de trabajo con monte detrás: unos once mil habitantes, puerto y anchoas —la conserva como oficio—, Monte Buciero —el monte que cierra la bahía—, Berria —playa larga con dunas—, fuerte de San Martín y marismas; en verano, lancha a Laredo. Es villa de conserva, pesca y ritmo propio —también con la prisión de El Dueso en el paisaje—, no solo foto de veraneo.",
 "Quien vive aquí es gente de la lonja, de la fábrica de anchoas y de la villa. Un martes de noviembre se camina el casco y se resuelve el día a día: los servicios alcanzan 6/10 —villa de trabajo con comercio; falta hospital en el municipio—. El Hospital de Laredo queda a unos diez minutos. El aeropuerto de Santander anda alrededor de los treinta minutos, con Palma casi todo el año. Fuera de agosto Santoña mantiene mesas y oficio.",
 "En verano Berria y el puerto reciben más afluencia; la vida cotidiana de villa marinera se mantiene mejor que en Noja. Primavera y otoño en el Buciero y las marismas son buenas épocas para conocerlo: el monte y las aves no son solo foto de julio. Conviene probar un martes de trabajo y un día de orilla llena.",
 "El calendario tiene fechas fijas de oficio y de fiesta. La temporada de anchoa marca la lonja; las fiestas de la Virgen del Puerto animan el casco y el puerto unos días. La lancha a Laredo en verano convierte la bahía en gesto cotidiano. Quien viva junto a Berria o al puerto debe contar el lleno de temporada y las fiestas como parte del año.",
 "Santoña encaja para quien quiera villa de trabajo con monte y marismas, más asequible que sus vecinas. Si solo conoces Berria en agosto, te llevas la imagen de folleto de la playa. Si has subido al Buciero un martes de noviembre, ya puedes decidir si quieres esa villa de oficio.",
 ],
 tiempo: [
 "Si vienes de Baleares, el cielo es el mismo peaje que en el resto de la oriental. Santoña suma unas 1.650 a 1.700 horas de sol y unos 40 días despejados, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.150 a 1.250 milímetros en unos 150 a 155 días. El viento es medio; la niebla, baja.",
 "El verano ronda 20 °C, fresco frente a Baleares. Berria y San Martín tienen agua entre 19 y 21 °C; la bahía ofrece orilla más calmada que el Cantábrico abierto de Ribamontán. Conviene venir un día de cubierto y un noviembre de lonja, no solo el sábado de sol en Berria.",
 ],
 vivir: [
 "El invierno en Santoña es de villa de oficio, no de bloque vacío. Humedad de bahía, salitre hacia Berria y mañanas grises piden calefacción y aislamiento; la terraza se usa menos entre noviembre y febrero. Probar un martes de lonja y un día cubierto evita firmar solo por Berria en sol.",
 "El día a día sin coche es viable en el casco: se camina, se compra y los servicios alcanzan 6/10 —villa de trabajo con comercio—. Fuera de agosto Santoña mantiene mesas y oficio. Quien viva junto a Berria dependerá más del coche; en el casco, enero tiene vida cotidiana de villa marinera, no de Noja vacía.",
 "Quien vive aquí es gente de la lonja, de la fábrica de anchoas y de la villa. La temporada de anchoa marca el puerto; las fiestas de la Virgen del Puerto animan casco y orilla unos días. En verano Berria recibe más afluencia, pero el ritmo de trabajo se mantiene mejor que en Noja. El Dueso forma parte del paisaje real. El castellano basta; la integración pasa por vecinos de oficio y puerto todo el año.",
 "No hay hospital en el municipio: el Hospital de Laredo queda a unos diez minutos. Empadronarse aquí abre lo diario en villa; para hospital se asume el trayecto corto a Laredo —mejor que desde Noja o Ribamontán hacia Valdecilla más lejos—.",
 "Santander–Seve Ballesteros anda alrededor de los treinta minutos, con Palma casi todo el año. Ir y volver a Mallorca es viable casi todo el año, pero no es el acceso más corto de la tabla oriental —Castro vía Bilbao gana en vuelo anual estable—. Conviene mirar horarios y el trayecto real.",
 "El casco y el entorno de la bahía ofrecen pisos y viviendas de villa; hay poca obra nueva y fibra. No es bloque de Noja ni chalé de Loredo: es villa marinera. Junto a Berria hay que contar con ocupación de verano y salitre; hacia el casco, humedad de bahía. Imaginar la rutina de lonja y de agosto en la orilla antes de comprar.",
 ],
 historia: [
 "Las anchoas, el puerto y el fuerte de San Martín explican Santoña: villa marinera de conserva y pesca, con capa militar en la bahía. El Monte Buciero —senda al faro del Caballo, setecientos sesenta y tres escalones— es el monte de verdad detrás del pueblo: no colina de parque, sino masa verde sobre el agua. La iglesia de Santa María del Puerto marca el centro del casco.",
 "Las Marismas de Santoña, Victoria y Joyel —parque natural, observatorio de aves, pasarelas— completan la ficha de bahía y agua quieta. El Dueso —prisión— forma parte del paisaje real, no de la foto de turismo. Lo que conviene saber es de trabajo, monte y marisma.",
 "Hoy Santoña sigue siendo villa de oficio: lonja, conserva, casco vivo en noviembre. Quien camina el puerto un martes de trabajo entiende por qué el precio es el más amable de la zona oriental.",
 ],
 fuera: [
 "Si solo hay tiempo para un baño cerca, ese baño es Berria: playa larga con dunas, agua entre 19 y 21 °C, más abrigada que el Cantábrico abierto en muchos días. Un martes de junio puedes tener espacio; un domingo de agosto el acceso se complica. San Martín completa orilla de bahía.",
 "El Buciero es el paseo propio: subida al faro del Caballo, escalones, horizonte sobre la bahía. Las marismas aportan pasarelas y aves cuando no apetece oleaje. El puerto y el casco son la tarde de diario de villa marinera.",
 "Laredo queda a lancha en verano o a trayecto corto por carretera —hospital a diez minutos—. Quien priorice monte, marisma y precio encontrará aquí el gesto; quien priorice Bilbao y Palma todo el año mirará Castro; quien priorice Salvé y hospital a pie, Laredo.",
 ],
 casa: [
 "El casco y el entorno de la bahía ofrecen pisos y viviendas de villa; hay poca obra nueva y fibra. Junto a Berria hay que contar con ocupación de verano y salitre; hacia el casco, humedad de bahía. No es bloque de Noja ni chalé de Loredo: es villa marinera.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros; dos habitaciones, cerca de 160.000. Conviene probar un martes de lonja y un agosto en Berria antes de comprar.",
 "Los servicios son 6/10. El Hospital de Laredo queda a unos diez minutos. Santander–Seve Ballesteros está a unos treinta, con Palma casi todo el año. Eso es Santoña: villa de trabajo con monte a cambio del sol bajo y el aeropuerto a media hora.",
 ],
 encaja: {
 si: [
 "La villa de trabajo con monte importa más que el veraneo de bloques. Santoña reúne unos once mil habitantes: puerto y anchoas, Monte Buciero, Berria —larga, dunas—, fuerte de San Martín y marismas; en verano, lancha a Laredo. Es villa de conserva, pesca y ritmo propio —también con la prisión de El Dueso en el paisaje—, no solo foto de agosto. Quien quiera caminar el casco un martes de noviembre, subir al Buciero —senda al faro del Caballo— y bajar a Berria o a las marismas encontrará aquí vida marinera todo el año a precio más bajo que Noja, Laredo o Castro. En verano Berria y el puerto reciben más afluencia; el ritmo de trabajo se mantiene mejor que en Noja. Unas 1.650 a 1.700 horas de sol y unos 40 días despejados —frente a las 2.800 horas y 120 de Mallorca— marcan el trato: lluvia frecuente también en verano, verano suave alrededor de 20 °C, agua entre 19 y 21 °C, niebla baja.",
 "Funciona si se prioriza el Hospital de Laredo a unos diez minutos y se acepta el aeropuerto de Santander alrededor de los treinta, con Palma casi todo el año. Los servicios alcanzan 6/10 —villa de trabajo con comercio; falta hospital en el municipio—. Hay fibra; —el más amable de la zona oriental— y Quien quiera monte, marisma y villa activa frente a bloques vacíos en invierno entenderá Santoña sin inventarse una urbanización de chalés.",
 ],
 no: [
 "Si lo que se buscan son casas bajas rurales como en Loredo o Langre, Santoña no lo es: aquí mandan casco marinero, puerto y Buciero. Tampoco encaja quien necesite Palma todo el año a menos de cuarenta minutos: eso queda en Castro vía Bilbao (~35 min). Santander anda alrededor de los treinta desde aquí —casi todo el año—, no el acceso más corto de la tabla.",
 "Tampoco si se busca calma total de segunda residencia vacía en invierno: aquí hay ritmo de trabajo, conserva y puerto todo el año. El cielo de Baleares no está en Berria. Quien se decida solo por el precio bajo, sin probar un martes de lonja ni un agosto en la orilla, puede descubrir que el carácter industrial-marinero no era lo que pedía. Si mandan hospital a cinco minutos y playa de cinco kilómetros, Laredo; si mandan chalés frente a Santander, Ribamontán.",
 ],
 veredicto:
 "Veredicto: Santoña encaja como villa marinera y monte —tres habitaciones en casco o hacia Berria, fuera del tramo más ocupado en agosto— sobre todo si precio, hospital a diez y Buciero importan más que el veraneo de bloques. Probar un martes de noviembre y una subida al faro del Caballo antes de comprar. Se ganan anchoas, marismas y Laredo a diez minutos; se aceptan el sol bajo de la zona, aeropuerto a treinta y el carácter de villa de trabajo. Quien priorice Bilbao y Palma todo el año, Castro; quien priorice Salvé y hospital a pie, Laredo.",
 },
 fotoIdentidad: {
 src: "/fotos/cantabria-oriental/santona-identidad.jpg",
 pie: "Santoña: casas frente a la bahía, con el Monte Buciero detrás",
 },
 fotosAbrir: [
 { src: "/fotos/cantabria-oriental/santona-berria.jpg", pie: "Playa de Berria, Santoña" },
 { src: "/fotos/cantabria-oriental/santona-puerto.jpg", pie: "Iglesia de Santa María del Puerto, Santoña" },
 ],
 fotosHistoria: [
 { src: "/fotos/cantabria-oriental/santona-san-martin.jpg", pie: "Fuerte de San Martín, Santoña" },
 { src: "/fotos/cantabria-oriental/santona-buciero.jpg", pie: "Monte Buciero sobre Santoña" },
 ],
 fotosFuera: [
 { src: "/fotos/cantabria-oriental/santona-marismas.jpg", pie: "Marismas de Santoña" },
 ],
 creditoFotos: credito,
 }
```

**Señales de auditoría (scan local, sin internet):**

- **X/10** (4 muestras):
  - …a día: los servicios alcanzan 6/10 —villa de trabajo con comerci…
  - …mpra y los servicios alcanzan 6/10 —villa de trabajo con comerci…
  - …omprar.",  "Los servicios son 6/10. El Hospital de Laredo queda …
  - …l año. Los servicios alcanzan 6/10 —villa de trabajo con comerci…
- **broken000** (1 muestras):
  - …una media municipal en prosa. 000 euros; dos habitaciones, cerca de 1…
- **precio_narr** (2 muestras):
  - … del mes; aquí no se fija una media municipal en prosa. 000 euros; dos habi…
  - …una media municipal en prosa. 000 euros; dos habitaciones, cerca de 1…
- **clima** (5 muestras):
  - …ntoña suma unas 1.650 a 1.700 horas de sol y unos 40 días despejados, fr…
  - …0 horas de sol y unos 40 días despejados, frente a las 2.800 horas y…
  - …oras y 120 jornadas claras de Mallorca. Caen alrededor de 1.150 a 1.…
  - … días. El viento es medio; la niebla, baja.",  "El verano ronda 20…
  - …si todo el año. Ir y volver a Mallorca es viable casi todo el año, p…
- **hospital** (5 muestras):
  - …e trabajo con comercio; falta hospital en el municipio—. El Hospital…
  - …hospital en el municipio—. El Hospital de Laredo queda a unos diez m…
  - …uerto todo el año.",  "No hay hospital en el municipio: el Hospital …
  - … hospital en el municipio: el Hospital de Laredo queda a unos diez m…
  - …abre lo diario en villa; para hospital se asume el trayecto corto a …
- **Palma** (5 muestras):
  - …r de los treinta minutos, con Palma casi todo el año. Fuera de ag…
  - …r de los treinta minutos, con Palma casi todo el año. Ir y volver…
  - …esto; quien priorice Bilbao y Palma todo el año mirará Castro; qu…
  - …eros está a unos treinta, con Palma casi todo el año. Eso es Sant…
  - …alrededor de los treinta, con Palma casi todo el año. Los servici…
- **ferry** (4 muestras):
  - …Martín y marismas; en verano, lancha a Laredo. Es villa de conserv…
  - …sco y el puerto unos días. La lancha a Laredo en verano convierte …
  - … marinera.",  "Laredo queda a lancha en verano o a trayecto corto …
  - …Martín y marismas; en verano, lancha a Laredo. Es villa de conserv…
- **rank** (1 muestras):
  - …marinera todo el año a precio más bajo que Noja, Laredo o Castro. En…

### 9.2 Capa 2026 completa

Fuente: `web/src/data/municipios-cantabria-oriental.json` · slug `santona`.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `179140` |
| `A_3hab` | `248040` |
| `B_2hab` | `144690` |
| `B_3hab` | `200340` |
| `advertenciaMicrozona` | `null` *(n.d. / ausente)* |
| `aeropuertoMin` | `30` |
| `aeropuertoPractico2026` | Santander 36 km · 30 min (Palma: casi todo el año); Bilbao 78 km · 60 min (Palma: todo el año) Tiempo histórico orientativo: ~30 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Santander 36 km · 30 min (Palma: casi todo el año); Bilbao 78 km · 60 min (Palma: todo el año) |
| `autonomiaCotidiana` | FUERTE |
| `casaQueBuscar` | Vivienda cómoda y accesible, 2–3 dormitorios, exterior, servicios cotidianos ... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Más húmedo / nublado |
| `comunicaciones` | A-8 / N-634; lancha a Laredo (verano) |
| `comunicacionesNota10` | `7` |
| `cubiertos` | `165` |
| `dependenciaCocheTexto` | Baja para vida de villa; coche para Berria, hospital y salidas. |
| `despejados` | `40` |
| `estacionalidad2026` | Vida anual sólida por pesca/conserva, con turismo añadido en verano. |
| `fibra` | Sí |
| `franja` | B |
| `hospitalMin` | `10` |
| `hospitalPractico2026` | Hospital de Laredo, aprox. 10 min, hospital público comarcal con urgencias. |
| `hospitalPriv` | 40 km · 40 min · Santa Clotilde (Santander) |
| `hospitalPub` | 10 km · 10 min · Hospital de Laredo |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 6 km · 10 min · Hospital de Laredo; verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `76` |
| `lat` | `43.443` |
| `lluviaDias` | `150` |
| `lluviaMm` | `1150` |
| `lon` | `-3.457` |
| `mapa` | 70_santona.png |
| `mercadoReventa` | Mercado intermedio: base residencial propia y/o demanda exterior. Priorizar u... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `8` |
| `minCosta` | `5` |
| `municipio` | Santoña |
| `n` | `70` |
| `niebla` | Baja |
| `obraNueva` | Poca |
| `pais` | España |
| `palmaDirecta2026` | Santander: Palma figura entre destinos publicados en 2026; programación concreta puede variar por temporada. |
| `palmaMasCercano` | Casi todo el año |
| `palmaMejor` | Santander (casi todo el año) · 30 min |
| `paseoCotidiano` | Frente de bahía/puerto; Buciero es una salida con desnivel, no paseo llano diario. |
| `paseoPendienteTopografia` | Monte Buciero implica rutas con desnivel; separarlo del paseo urbano. |
| `peajeRealidad` | Más funcional todo el año que un resort puro; gran playa y hospital no están dentro del radio peatonal central. |
| `playaBano` | Berria |
| `playaCotidiana` | SÍ/PARCIAL |
| `playaCotidianaModo` | San Martín está integrada en la villa; Berria es la gran playa exterior y requiere salida. |
| `precioM2` | `2120` |
| `provincia` | Cantabria |
| `radioCotidiano` | Villa compacta con comercio, mercado, salud y servicios propios; actividad pesquera/conservera sostiene vida anual. |
| `radioSalida` | Monte Buciero, Berria y marismas; Laredo/Santander para determinados servicios hospitalarios. |
| `sanidadPrimaria2026` | Atención primaria local |
| `servicios` | `6` |
| `serviciosEstado` | VALIDADO — valor exacto recuperado de fuente maestra histórica |
| `serviciosNota` | Tiene: villa de trabajo, comercio. Falta: hospital en el municipio |
| `slug` | santona |
| `solHoras` | `1700` |
| `tempAgua` | 19-21 |
| `tempInvierno` | `10.0` |
| `tempVerano` | `20.0` |
| `transporteRelevante2026` | CA-141 / A-8; bus; sin tren Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital de Laredo, aprox. 10 min, hospital público comarcal con urgencias.. |
| `viento` | Media |
| `zona` | Cantabria Oriental |

**Highlights capa (autoridad):** autonomia `FUERTE` · playa `SÍ/PARCIAL` · precioM2 `2120` · servicios `6` · hospitalMin `10`.

### 9.3 Auditorías / plan existentes

**NO PLAN_EDITORIAL** para Cantabria Occidental ni Oriental (no hay `PLAN_EDITORIAL_CANTABRIA_*.md` ni equivalente CURSOR_19).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n=70 → claves 63–72):

```
| 70 | Santoña | Cantabria Oriental | precio relato ~1900 vs ficha 2120 | minutos hospital en prosa (capa 2026 prioriza texto práctico); vuelo/Palma puede sonar permanente; capa 2026 matiza (+1) | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 70 | Santoña | Cantabria Oriental | no | — |
```

**estudio_zonas.md** (histórico — **NO** autoridad 2026):

<details><summary>Recorte estudio</summary>

**Santoña (nº 70).** 11.000 habitantes; villa marinera con vida propia (anchoas, puerto), Monte Buciero, Berria (larga, dunas), fuerte de San Martín, marismas; lancha a Laredo en verano. Servicios 6/10. Hospital 10. Aeropuerto 30. Precio 1.900: 3 habitaciones franja A 222.000. Poca obra nueva. Para quién: quien quiera villa de trabajo con monte y marismas, más barata que sus vecinas.

**Laredo (nº 71).** 11.000 habitantes; La Salvé (5 km), Puebla Vieja (casco medieval, iglesia de la Asunción), puerto deportivo, paseo; torres de apartamentos de los 60-70 en el frente. Servicios 7/10. Hospital 5. Aeropuerto 35. Precio 2.100: 3 habitaciones 246.000. Dependencia del coche 4/10. Para quién: quien quiera hospital a pie y playa enorme, y no le importe el urbanismo de la playa.

**Castro-Urdiales (nº 72).** 34.000 habitantes; villa medieval (Santa María, castillo-faro, puente), paseo, playas de 

</details>

### 9.4 Auditoría relato ↔ capa

Estados permitidos: `ALINEADO` · `OBSOLETO` · `DUPLICA_CAPA` · `P4_PRESERVAR` · `SOPORTADO_PERO_INFRAUSADO` · `NO_SOPORTADO_NO_INVENTAR` · `REQUIERE_VERIFICACION_EXTERNA`

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | 6/10 / villa de trabajo | `servicios` **6**; Tiene: villa de trabajo, comercio. Falta: hospital en el municipio | DUPLICA_CAPA | Omitir chip; narrar FUERTE / villa de trabajo |
| Precio €/m² | Auditoría ~1900 vs 2120 (desvío menor); «000 euros» | `precioM2` **2120** | OBSOLETO | Alinear omitiendo cifra; capa más asequible relativa oriental |
| Prosa rota «000 euros» | Tras remitir a capa queda fragmento «000 euros» (+ totales sueltos a veces) | Cifras viven en `precioM2` / A/B / TablaPrecios | OBSOLETO | Borrar resto roto; no reponer €/m² históricos en prosa |
| Mar / playa | San Martín vs Berria | **SÍ/PARCIAL** — San Martín está integrada en la villa; Berria es la gran playa exterior y requiere salida. | ALINEADO | SÍ/PARCIAL: San Martín integrada; Berria = salida |
| Buciero / pendiente | Monte como salida | paseo: Frente de bahía/puerto; Buciero es una salida con desnivel, no paseo llano diario.; Monte Buciero implica rutas con desnivel; separarlo del paseo urbano. | ALINEADO | No vender Buciero como paseo llano diario |
| Hospital | Laredo ~10′ (también en prosa; P1 minutos) | `hospitalMin` **10** — Hospital de Laredo, aprox. 10 min, hospital público comarcal con urgencias. | DUPLICA_CAPA | Priorizar texto práctico una vez; no cascada de minutos |
| Aeropuerto / Palma | Minutos aero + «Palma casi todo el año» (tono permanente posible) | `aeropuertoMin` 30; `palmaDirecta2026` matiza temporada/comprobar | DUPLICA_CAPA / ALINEADO (capa ya dice casi todo el año en aero práctico) | Consecuencia una vez; no martillar minutos+Palma en cascada; no inventar permanente absoluto |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos tiempo→encaja (y a menudo abrir) | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| P4 anchoas / marisma / trabajo | Identidad industrial-marinera | estudio + relato | P4_PRESERVAR | Conservar contraste Noja veraneo vs Santoña trabajo |

### 9.5 P4 / identidad

- **Preservar:** villa de trabajo, anchoas/lonja, San Martín vs Berria, Buciero, marisma.
- **Identidad:** FUERTE / no resort.
- **Contraste:** Noja veraneo vs Santoña oficio.

### 9.6 Vida cotidiana soportada

| Elemento | Clasificación | Base repo |
|---|---|---|
| Autonomía | YA SOPORTADO | `FUERTE` |
| Coche | YA SOPORTADO | `Baja para vida de villa; coche para Berria, hospital y salidas.` |
| Servicios cotidianos | YA SOPORTADO | servicios `6` — Tiene: villa de trabajo, comercio. Falta: hospital en el municipio |
| Paseo | YA SOPORTADO | Frente de bahía/puerto; Buciero es una salida con desnivel, no paseo llano diario. |
| Pendiente | YA SOPORTADO | Monte Buciero implica rutas con desnivel; separarlo del paseo urbano. |
| Microzona | Poco o nada en capa | adv: — / microPrecio: — |
| Compra enero / estacionalidad | YA SOPORTADO en relato+capa | contrastar verano vs noviembre |
| Nombres café / horarios exactos | NO SOPORTADO | — |
| Totales A/B en prosa | NO SOPORTADO (viven en tabla) | A_3hab `248040` / B_3hab `200340` |

### 9.7 Reality toll

- Autonomía **FUERTE**
- Playa **SÍ/PARCIAL** (San Martín vs Berria salida)
- Buciero = desnivel / salida
- Hospital Laredo ~**10′**
- Precio **2120** (más asequible relativo)
- Industria/lonja: identidad, no peaje oculto a inventar

### 9.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | Auditoría ~1900 (histórico prosa/estudio) | **2120** | OBSOLETO — capa prevalece |
| A_3hab / B_3hab | No narrar totales | `248040` / `200340` | TablaPrecios |
| casaQueBuscar / reventa | Cualitativo | Ver tabla capa §N.2 | `casaQueBuscar` truncado `…` → **DESEABLE** texto completo (no bloquea v1); `mercadoReventa` truncado `…` → **DESEABLE** texto completo (no bloquea v1) |
| «000 euros» | Presente tras remitir a capa | — | Borrar resto roto |

### 9.9 Clima: deuda / duplicación (NO correct)

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en `tiempo` + `encaja` (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `santona` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_30.**

### 9.10 Mar / playa / paseo

- **playaCotidiana:** `SÍ/PARCIAL`
- **Modo:** San Martín está integrada en la villa; Berria es la gran playa exterior y requiere salida.
- **paseoCotidiano:** Frente de bahía/puerto; Buciero es una salida con desnivel, no paseo llano diario.
- **pendiente:** Monte Buciero implica rutas con desnivel; separarlo del paseo urbano.
- Separar baño cotidiano vs salidas (Oyambre, Berria, Langre, Buciero, Picos, etc.).
- No contradecir la etiqueta de playa de la capa.

### 9.11 No soportado / no inventar

- ~1900; «000 euros»
- Chip 6/10
- Berria como playa a pie igual que San Martín
- Buciero = paseo llano diario
- Cascada de minutos hospital

---

## 10. Laredo

### 10.1 Relato actual completo

> CITA LITERAL — `web/src/lib/relatos-cantabria-oriental.ts` clave `laredo` (objeto completo).

```ts
laredo: {
 escala: "Playa larga y hospital",
 abrir: [
 "Laredo se siente como villa con todo y playa enorme delante: unos once mil habitantes, La Salvé —unos cinco kilómetros de arena—, la Puebla Vieja —casco medieval con la iglesia de la Asunción—, puerto deportivo, paseo y torres de apartamentos de los sesenta y setenta en el frente. Es villa con hospital comarcal a cinco minutos, no solo arenal de agosto.",
 "Quien vive aquí resuelve el día a día en villa. Un martes de noviembre los servicios alcanzan 7/10; la dependencia del coche es baja —4/10—. El Hospital de Laredo queda a unos cinco minutos. El aeropuerto de Santander anda alrededor de los treinta y cinco minutos; Bilbao, alrededor de los cincuenta, con Palma todo el año. De octubre a mayo recupera calma de villa; en verano La Salvé recibe veraneo masivo de Burgos, Bilbao y Madrid.",
 "Ruido, tráfico y ocupación del frente marcan julio y agosto; el resto del año el casco y la Puebla Vieja mantienen ritmo. Primavera y otoño en la Atalaya son buenas épocas para conocerlo: el mirador no es solo foto de temporada. Conviene probar agosto y un martes gris.",
 "El calendario tiene fiestas fuertes. La Batalla de Flores —último viernes de agosto— llena Laredo de carrozas, gente y ruido: es la fiesta grande, imposible de ignorar si se vive en el frente. El resto del verano el veraneo masivo ya satura La Salvé. Quien se decida a vivir junto a la playa debe contar agosto como parte del año, no como excepción.",
 "Laredo encaja para quien quiera hospital a pie y playa enorme, y no le importe el urbanismo de torres en la orilla. Si solo conoces un sábado soleado en La Salvé, te llevas la imagen de folleto del arenal. Si has visto un noviembre de villa, ya puedes decidir si aceptas las torres.",
 ],
 tiempo: [
 "Si vienes de Baleares, ganas playa usable y pierdes despejados. Laredo suma unas 1.650 a 1.700 horas de sol y unos 40 días despejados, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.150 a 1.250 milímetros en unos 150 a 155 días. El viento es bajo; la niebla, baja —más abrigado que Ribamontán en ese dato—.",
 "El verano ronda 20 °C, fresco frente a Baleares. La Salvé tiene agua entre 19 y 21 °C; la playa larga y la bahía invitan al baño con más calma que el Cantábrico abierto de Somo. Conviene venir un agosto lleno y un martes gris, no solo el día de sol sobre los cinco kilómetros.",
 ],
 vivir: [
 "El invierno en Laredo es de villa que recupera calma: de octubre a mayo el casco y la Puebla Vieja mantienen ritmo; el frente de La Salvé enfría con salitre y humedad de orilla. Conviene calefacción y aislamiento en torres de los sesenta y setenta. Probar un martes gris y un agosto lleno evita firmar solo por los cinco kilómetros en sol.",
 "El día a día sin coche es de los más fáciles de la oriental: servicios 7/10, dependencia del coche 4/10. Un martes de noviembre se resuelve el día a pie —comercio, Puebla Vieja, paseo—. Quien viva en primera línea de La Salvé ganará playa y más saturación de verano; hacia el casco medieval, más calma de enero.",
 "Conviven residentes de villa y el veraneo masivo de Burgos, Bilbao y Madrid en julio y agosto: ruido, tráfico y ocupación del frente. La Batalla de Flores —último viernes de agosto— llena Laredo de carrozas y gente: imposible de ignorar si se vive en el frente. El castellano basta; la integración pasa por villa todo el año y temporada en la orilla.",
 "El Hospital de Laredo queda a unos cinco minutos: la sanidad a pie es el argumento fuerte del municipio. Empadronarse aquí abre cabecera y hospital comarcal cerca. No es «sanidad en otra ciudad»: es villa con hospital delante.",
 "Santander–Seve Ballesteros anda alrededor de los treinta y cinco minutos (Palma casi todo el año); Bilbao, alrededor de los cincuenta (Palma todo el año). Ir y volver a Mallorca tiene dos vías; Castro gana en tiempo a Bilbao. Conviene mirar ambos aeropuertos según la temporada.",
 "El frente ofrece pisos en torres; la Puebla Vieja, viviendas de casco. Hay poca obra nueva y fibra. No es chalé de Langre: es tipología de villa-playa con bloques. En primera línea de La Salvé hay que contar con ocupación de agosto y salitre. Imaginar el frente saturado y el invierno de villa antes de comprar.",
 ],
 historia: [
 "La Puebla Vieja y la iglesia de la Asunción explican Laredo: casco medieval detrás del frente de torres de los sesenta y setenta. El contraste entre pueblo histórico y urbanismo de playa es el carácter del municipio —no un defecto oculto: es lo que se ve al llegar—.",
 "El Túnel de la Atalaya, el puerto deportivo y el paseo completan capas de orilla y mirador. La Batalla de Flores marca el veraneo en la memoria local. Lo que conviene saber es de villa medieval y veraneo de bloques tipo playa de los setenta.",
 "Hoy Laredo equilibra hospital a pie, Salvé y Puebla Vieja. Quien camina el casco medieval un martes de noviembre entiende la villa; quien solo conoce el frente en agosto conoce solo la mitad.",
 ],
 fuera: [
 "Si solo hay tiempo para un baño cerca, ese baño es La Salvé: unos cinco kilómetros de arena, agua entre 19 y 21 °C, paseo delante. Un martes de junio puedes tener espacio; un domingo de agosto el frente se satura. Es playa de villa y de temporada masiva a la vez.",
 "La Puebla Vieja cubre el paseo de casco a pie: piedra, Asunción, calles que no son torre. El Túnel de la Atalaya aporta mirador sobre la bahía cuando no apetece toalla. El puerto deportivo completa la orilla urbana.",
 "Santoña queda a trayecto corto; Bilbao, a unos cuarenta y cinco minutos. Quien priorice sanidad a cinco minutos y arenal largo encontrará aquí el gesto; quien priorice chalés mirará Ribamontán; quien priorice Bilbao y Palma todo el año a menos de cuarenta, Castro.",
 ],
 casa: [
 "El frente ofrece pisos en torres; la Puebla Vieja, viviendas de casco. Hay poca obra nueva y fibra. En primera línea de La Salvé hay que contar con ocupación de agosto y salitre. No es chalé de Langre: es tipología de villa-playa con bloques.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros; dos habitaciones, cerca de 177.000. La franja media puede ser piso algo retirado del frente más ocupado. Conviene probar agosto en La Salvé y un noviembre de villa antes de comprar.",
 "Los servicios son 7/10. El Hospital de Laredo queda a unos cinco minutos. Santander–Seve Ballesteros está a unos treinta y cinco; Bilbao, a unos cincuenta. Eso es Laredo: hospital a pie y playa enorme a cambio del urbanismo de torres y del sol bajo.",
 ],
 encaja: {
 si: [
 "La playa enorme con hospital a pie importa más que las casas bajas. Laredo reúne unos once mil habitantes: La Salvé —unos cinco kilómetros—, Puebla Vieja —casco medieval, iglesia de la Asunción—, puerto deportivo, paseo y torres de apartamentos de los sesenta y setenta en el frente. Quien quiera resolver el día a día en villa un martes de noviembre —servicios 7/10, dependencia del coche 4/10—, caminar la Puebla Vieja y tener el Hospital de Laredo a unos cinco minutos encontrará aquí orilla de villa con todo, no de chalés dispersos. En verano La Salvé recibe veraneo masivo de Burgos, Bilbao y Madrid: ruido, tráfico y ocupación del frente; de octubre a mayo recupera calma de villa. Unas 1.650 a 1.700 horas de sol y unos 40 días despejados —frente a las 2.800 horas y 120 de Mallorca— mantienen el peaje: lluvia frecuente también en verano, verano suave alrededor de 20 °C, viento bajo, agua entre 19 y 21 °C. Quien se decida a vivir junto a La Salvé debe haber visto agosto y un martes gris.",
 "Funciona si se aceptan las torres del frente a cambio de hospital comarcal a cinco minutos y playa usable casi a la puerta. El aeropuerto de Santander anda alrededor de los treinta y cinco minutos (Palma casi todo el año); Bilbao, alrededor de los cincuenta (Palma todo el año). Hay fibra; Quien priorice sanidad a pie y arenal largo frente a urbanismo de casas bajas entenderá Laredo sin pedirle el perfil de Ribamontán.",
 ],
 no: [
 "Si lo que se buscan son chalés y calma rural-costera, Laredo no lo es: el frente es de torres de veraneo tipo playa de los setenta. Ribamontán cubre casas bajas; Santoña, villa marinera con monte. Tampoco encaja quien necesite calma en agosto en primera línea de La Salvé: la temporada llena el arenal.",
 "Tampoco si se necesita Palma todo el año a menos de cuarenta minutos: desde Laredo Bilbao anda alrededor de cincuenta; Castro deja ese vuelo a unos treinta y cinco o cuarenta. El cielo de Baleares no está aquí. Quien se decida solo tras un sábado soleado sin probar el tráfico de agosto ni el invierno de villa se equivoca de opción. Si mandan precio más bajo y Buciero, Santoña; si manda ciudad hacia Bilbao, Castro.",
 ],
 veredicto:
 "Veredicto: Laredo encaja como playa larga y hospital —tres habitaciones en casco o algo retiradas del frente más ocupado de La Salvé— sobre todo si sanidad a cinco minutos y servicios 7/10 importan más que el urbanismo de torres. Probar un agosto lleno y un noviembre de villa antes de comprar. Se ganan Salvé, Puebla Vieja y hospital a pie; se aceptan, afluencia de verano y el sol bajo de Cantabria Oriental. Quien priorice chalés, Ribamontán; quien priorice Bilbao y Palma todo el año, Castro.",
 },
 fotoIdentidad: {
 src: "/fotos/cantabria-oriental/laredo-identidad.jpg",
 pie: "Laredo: casas del pueblo junto a la playa, con el monte Buciero enfrente",
 },
 fotosAbrir: [
 { src: "/fotos/cantabria-oriental/laredo-salve.jpg", pie: "Playa de La Salvé, Laredo" },
 { src: "/fotos/cantabria-oriental/laredo-villa.jpg", pie: "Laredo: villa y frente de playa" },
 ],
 fotosHistoria: [
 { src: "/fotos/cantabria-oriental/laredo-puebla.jpg", pie: "Puebla Vieja de Laredo" },
 { src: "/fotos/cantabria-oriental/laredo-asuncion.jpg", pie: "Iglesia de la Asunción, Laredo" },
 ],
 fotosFuera: [
 { src: "/fotos/cantabria-oriental/laredo-paseo.jpg", pie: "Paseo de Laredo" },
 { src: "/fotos/cantabria-oriental/laredo-puerto.jpg", pie: "Puerto deportivo de Laredo" },
 ],
 creditoFotos: credito,
 }
```

**Señales de auditoría (scan local, sin internet):**

- **X/10** (5 muestras):
  - …iembre los servicios alcanzan 7/10; la dependencia del coche es …
  - …ependencia del coche es baja —4/10—. El Hospital de Laredo queda…
  - …les de la oriental: servicios 7/10, dependencia del coche 4/10. …
  - …s 7/10, dependencia del coche 4/10. Un martes de noviembre se re…
  - …omprar.",  "Los servicios son 7/10. El Hospital de Laredo queda …
- **broken000** (1 muestras):
  - …una media municipal en prosa. 000 euros; dos habitaciones, cerca de 1…
- **precio_narr** (2 muestras):
  - … del mes; aquí no se fija una media municipal en prosa. 000 euros; dos habi…
  - …una media municipal en prosa. 000 euros; dos habitaciones, cerca de 1…
- **clima** (5 muestras):
  - … ganas playa usable y pierdes despejados. Laredo suma unas 1.650 a 1…
  - …aredo suma unas 1.650 a 1.700 horas de sol y unos 40 días despejados, fr…
  - …0 horas de sol y unos 40 días despejados, frente a las 2.800 horas y…
  - …oras y 120 jornadas claras de Mallorca. Caen alrededor de 1.150 a 1.…
  - …5 días. El viento es bajo; la niebla, baja —más abrigado que Ribam…
- **hospital** (5 muestras):
  - …{  escala: "Playa larga y hospital",  abrir: [  "Laredo se sient…
  - …ta en el frente. Es villa con hospital comarcal a cinco minutos, no …
  - … del coche es baja —4/10—. El Hospital de Laredo queda a unos cinco …
  - …redo encaja para quien quiera hospital a pie y playa enorme, y no le…
  - …emporada en la orilla.",  "El Hospital de Laredo queda a unos cinco …
- **Palma** (5 muestras):
  - …rededor de los cincuenta, con Palma todo el año. De octubre a may…
  - … los treinta y cinco minutos (Palma casi todo el año); Bilbao, al…
  - …, alrededor de los cincuenta (Palma todo el año). Ir y volver a M…
  - …ntán; quien priorice Bilbao y Palma todo el año a menos de cuaren…
  - … los treinta y cinco minutos (Palma casi todo el año); Bilbao, al…
- **rank** (1 muestras):
  - …a de opción. Si mandan precio más bajo y Buciero, Santoña; si manda …

### 10.2 Capa 2026 completa

Fuente: `web/src/data/municipios-cantabria-oriental.json` · slug `laredo`.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `249360` |
| `A_3hab` | `345267` |
| `B_2hab` | `201406` |
| `B_3hab` | `278870` |
| `advertenciaMicrozona` | `null` *(n.d. / ausente)* |
| `aeropuertoMin` | `35` |
| `aeropuertoPractico2026` | Santander 40 km · 35 min (Palma: casi todo el año); Bilbao 64 km · 50 min (Palma: todo el año) Tiempo histórico orientativo: ~35 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Santander 40 km · 35 min (Palma: casi todo el año); Bilbao 64 km · 50 min (Palma: todo el año) |
| `autonomiaCotidiana` | MUY ALTA |
| `casaQueBuscar` | Vivienda cómoda y accesible, 2–3 dormitorios, exterior, servicios cotidianos ... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Más húmedo / nublado |
| `comunicaciones` | A-8 / N-634 |
| `comunicacionesNota10` | `8` |
| `cubiertos` | `165` |
| `dependenciaCocheTexto` | Baja para gran parte de la rutina si se vive bien situado. |
| `despejados` | `40` |
| `estacionalidad2026` | Vida anual con presión turística/residencial fuerte en verano. |
| `fibra` | Sí |
| `franja` | A |
| `hospitalMin` | `5` |
| `hospitalPractico2026` | Hospital de Laredo, en la propia localidad, hospital público con urgencias. |
| `hospitalPriv` | 45 km · 45 min · Santa Clotilde (Santander) |
| `hospitalPub` | 2 km · 5 min · Hospital de Laredo |
| `hospitalReferencia2026` | Hospital Universitario Marqués de Valdecilla (Santander) para mayor complejidad cuando corresponda. |
| `humedad` | `76` |
| `lat` | `43.41` |
| `lluviaDias` | `150` |
| `lluviaMm` | `1150` |
| `lon` | `-3.416` |
| `mapa` | 71_laredo.png |
| `mercadoReventa` | Mercado relativamente amplio por demanda residencial permanente y servicios. ... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `4` |
| `minCosta` | `4` |
| `municipio` | Laredo |
| `n` | `71` |
| `niebla` | Baja |
| `obraNueva` | Poca |
| `pais` | España |
| `palmaDirecta2026` | Santander: Palma figura entre destinos publicados en 2026; programación concreta puede variar por temporada. |
| `palmaMasCercano` | Casi todo el año |
| `palmaMejor` | Santander (casi todo el año) · 35 min |
| `paseoCotidiano` | Paseo de La Salvé y frente marítimo, largo y prácticamente llano. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Playa, hospital y servicios se combinan muy bien; verano y tejido residencial vacacional cambian mucho el ambiente. |
| `playaBano` | La Salvé |
| `playaCotidiana` | SÍ |
| `playaCotidianaModo` | La Salvé es una playa urbana de varios kilómetros integrada en la vida de la villa. |
| `precioM2` | `2951` |
| `provincia` | Cantabria |
| `radioCotidiano` | Villa con comercio, salud y servicios comarcales; el hospital refuerza autonomía sanitaria. |
| `radioSalida` | Santoña, costa oriental y Santander/Bilbao para escala mayor. |
| `sanidadPrimaria2026` | Atención primaria local |
| `servicios` | `7` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | Tiene: villa con todo, hospital comarcal. Falta: nada esencial diario |
| `slug` | laredo |
| `solHoras` | `1700` |
| `tempAgua` | 19-21 |
| `tempInvierno` | `10.0` |
| `tempVerano` | `20.0` |
| `transporteRelevante2026` | A-8 / N-634; bus ALSA Santander–Bilbao Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital de Laredo, en la propia localidad, hospital público con urgencias.. |
| `viento` | Baja |
| `zona` | Cantabria Oriental |

**Highlights capa (autoridad):** autonomia `MUY ALTA` · playa `SÍ` · precioM2 `2951` · servicios `7` · hospitalMin `5`.

### 10.3 Auditorías / plan existentes

**NO PLAN_EDITORIAL** para Cantabria Occidental ni Oriental (no hay `PLAN_EDITORIAL_CANTABRIA_*.md` ni equivalente CURSOR_19).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n=71 → claves 63–72):

```
| 71 | Laredo | Cantabria Oriental | precio relato ~2100 vs ficha 2951 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 71 | Laredo | Cantabria Oriental | no | — |
```

**estudio_zonas.md** (histórico — **NO** autoridad 2026):

<details><summary>Recorte estudio</summary>

**Laredo (nº 71).** 11.000 habitantes; La Salvé (5 km), Puebla Vieja (casco medieval, iglesia de la Asunción), puerto deportivo, paseo; torres de apartamentos de los 60-70 en el frente. Servicios 7/10. Hospital 5. Aeropuerto 35. Precio 2.100: 3 habitaciones 246.000. Dependencia del coche 4/10. Para quién: quien quiera hospital a pie y playa enorme, y no le importe el urbanismo de la playa.

**Castro-Urdiales (nº 72).** 34.000 habitantes; villa medieval (Santa María, castillo-faro, puente), paseo, playas de Brazomar y Ostende, Islares y Oriñón a 10, Bilbao a 35. Servicios 8/10, comunicaciones 8/10. Hospital Laredo 25, Cruces 35. Aeropuerto de Bilbao 35-40 (Palma todo el año). Precio 2.400: 2 habitaciones franja A 203.000; 3 habitaciones 281.000 (fuera). Obra nueva sí. Seguridad 46. Para quién: quien quiera ciudad completa con Bilbao al lado y vuelo a Palma todo el año a 40 min, y acepte e

</details>

### 10.4 Auditoría relato ↔ capa

Estados permitidos: `ALINEADO` · `OBSOLETO` · `DUPLICA_CAPA` · `P4_PRESERVAR` · `SOPORTADO_PERO_INFRAUSADO` · `NO_SOPORTADO_NO_INVENTAR` · `REQUIERE_VERIFICACION_EXTERNA`

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | 7/10 / villa con todo + hospital | `servicios` **7**; Tiene: villa con todo, hospital comarcal. Falta: nada esencial diario | DUPLICA_CAPA | Omitir chip; narrar MUY ALTA |
| Precio €/m² | Auditoría ~2100 vs 2951; «000 euros» | `precioM2` **2951** | OBSOLETO | Capa prevalece |
| Prosa rota «000 euros» | Tras remitir a capa queda fragmento «000 euros» (+ totales sueltos a veces) | Cifras viven en `precioM2` / A/B / TablaPrecios | OBSOLETO | Borrar resto roto; no reponer €/m² históricos en prosa |
| Mar / playa | La Salvé varios km | **SÍ** — La Salvé es una playa urbana de varios kilómetros integrada en la vida de la villa. | ALINEADO | SÍ playa urbana integrada |
| Hospital en el pueblo | Hospital de Laredo en localidad | `hospitalMin` **5** — Hospital de Laredo, en la propia localidad, hospital público con urgencias. | ALINEADO | Ventaja diferencial oriental; una mención |
| Aeropuerto / Palma | Minutos aero + «Palma casi todo el año» (tono permanente posible) | `aeropuertoMin` 35; `palmaDirecta2026` matiza temporada/comprobar | DUPLICA_CAPA / ALINEADO (capa ya dice casi todo el año en aero práctico) | Consecuencia una vez; no martillar minutos+Palma en cascada; no inventar permanente absoluto |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos tiempo→encaja (y a menudo abrir) | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| P4 Salvé / Puebla Vieja | Playa larga + casco | fotos + capa | P4_PRESERVAR | Conservar villa completa + playa |

### 10.5 P4 / identidad

- **Preservar:** La Salvé larga, Puebla Vieja, hospital en villa, autonomía MUY ALTA.
- **Identidad:** villa completa oriental con playa urbana.

### 10.6 Vida cotidiana soportada

| Elemento | Clasificación | Base repo |
|---|---|---|
| Autonomía | YA SOPORTADO | `MUY ALTA` |
| Coche | YA SOPORTADO | `Baja para gran parte de la rutina si se vive bien situado.` |
| Servicios cotidianos | YA SOPORTADO | servicios `7` — Tiene: villa con todo, hospital comarcal. Falta: nada esencial diario |
| Paseo | YA SOPORTADO | Paseo de La Salvé y frente marítimo, largo y prácticamente llano. |
| Pendiente | N/A / null | `null` |
| Microzona | Poco o nada en capa | adv: — / microPrecio: — |
| Compra enero / estacionalidad | YA SOPORTADO en relato+capa | contrastar verano vs noviembre |
| Nombres café / horarios exactos | NO SOPORTADO | — |
| Totales A/B en prosa | NO SOPORTADO (viven en tabla) | A_3hab `345267` / B_3hab `278870` |

### 10.7 Reality toll

- Autonomía **MUY ALTA**
- Playa **SÍ** Salvé
- Hospital **en la villa** (~**5′**)
- Precio **2951**
- Verano afluencia Salvé
- Aero ~**35′**

### 10.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | Auditoría ~2100 (histórico prosa/estudio) | **2951** | OBSOLETO — capa prevalece |
| A_3hab / B_3hab | No narrar totales | `345267` / `278870` | TablaPrecios |
| casaQueBuscar / reventa | Cualitativo | Ver tabla capa §N.2 | `casaQueBuscar` truncado `…` → **DESEABLE** texto completo (no bloquea v1); `mercadoReventa` truncado `…` → **DESEABLE** texto completo (no bloquea v1) |
| «000 euros» | Presente tras remitir a capa | — | Borrar resto roto |

### 10.9 Clima: deuda / duplicación (NO correct)

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en `tiempo` + `encaja` (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `laredo` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_30.**

### 10.10 Mar / playa / paseo

- **playaCotidiana:** `SÍ`
- **Modo:** La Salvé es una playa urbana de varios kilómetros integrada en la vida de la villa.
- **paseoCotidiano:** Paseo de La Salvé y frente marítimo, largo y prácticamente llano.
- **pendiente:** `null`
- Separar baño cotidiano vs salidas (Oyambre, Berria, Langre, Buciero, Picos, etc.).
- No contradecir la etiqueta de playa de la capa.

### 10.11 No soportado / no inventar

- ~2100; «000 euros»
- Chip 7/10
- Calma absoluta en agosto en Salvé
- Palma permanente absoluta

---

## 11. Castro-Urdiales

### 11.1 Relato actual completo

> CITA LITERAL — `web/src/lib/relatos-cantabria-oriental.ts` clave `castro-urdiales` (objeto completo).

```ts
castro-urdiales: {
 escala: "Ciudad hacia Bilbao",
 abrir: [
 "Castro-Urdiales se siente como villa medieval convertida en ciudad dormitorio de Bilbao: unos treinta y cuatro mil habitantes, Santa María de la Asunción —iglesia gótica sobre la peña—, castillo-faro, puente medieval, paseo, playas de Brazomar y Ostende, Islares y Oriñón a unos diez minutos, y Bilbao a unos treinta y cinco. Es ciudad completa con orilla, no villa pequeña de silencio.",
 "Quien vive aquí resuelve casi todo en ciudad. Un martes de noviembre los servicios alcanzan 8/10; las comunicaciones, 8/10. El Hospital de Laredo queda a unos veinticinco minutos; Cruces —Barakaldo—, a unos treinta y cinco. El aeropuerto de Bilbao anda alrededor de treinta y cinco o cuarenta minutos, con Palma todo el año —el acceso más rápido de la tabla a ese vuelo—. Hay obra nueva. La seguridad ronda 46 por mil.",
 "En verano Brazomar y Ostende reciben más afluencia; el ritmo de ciudad de trabajadores de Bilbao se mantiene todo el año. Primavera y otoño en la senda costera hacia Islares son buenas épocas para conocerlo. Quien se quede a vivir aquí acepta el sol más bajo de la tabla y precios vascos crecientes.",
 "El calendario mezcla fiestas de villa —Coso Blanco y patronales animan el casco unos días— con el ritmo diario hacia Bilbao. El lleno de playa en agosto convive con el ensanche que no se vacía en enero. Quien viva junto a Brazomar debe contar la temporada; quien viva de cara a la A-8, el tráfico de trabajadores.",
 "Castro encaja para quien quiera ciudad completa con Bilbao al lado y vuelo a Palma todo el año a unos cuarenta minutos. Si solo conoces un sábado soleado en Brazomar, te llevas la imagen de folleto de la playa. Si has visto un noviembre cubierto, ya puedes decidir si aceptas el precio de tener poco sol.",
 ],
 tiempo: [
 "Si vienes de Baleares, aquí el peaje de cielo es el más duro de toda la tabla. Castro suma unas 1.650 a 1.700 horas de sol —el mínimo— y unos 40 días despejados, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.150 a 1.250 milímetros en unos 150 a 155 días. El viento es bajo; la niebla, baja.",
 "El verano ronda 20 °C, fresco frente a Baleares. Brazomar, Ostende, Oriñón e Islares tienen agua entre 19 y 21 °C; la orilla combina bahía urbana y costa abierta a diez minutos. Conviene venir un noviembre cubierto y un día de trabajadores, no solo el sábado de sol en Ostende.",
 ],
 vivir: [
 "El invierno en Castro es de ciudad que no se vacía: el ensanche mantiene ritmo; el peaje es el sol mínimo de toda la tabla —unas 1.650 horas— y mañanas cubiertas. Humedad de orilla y salitre en Brazomar u Ostende piden calefacción y aislamiento. Probar un noviembre cubierto evita firmar solo por Ostende en sol.",
 "El día a día sin coche es viable en ciudad: servicios 8/10, comunicaciones 8/10. Un martes de noviembre se resuelve casi todo en casco y ensanche. Quien viva de cara a la A-8 notará el tráfico de trabajadores hacia Bilbao; junto a Brazomar, más afluencia de verano. En enero el ritmo es de ciudad dormitorio, no de villa vacía.",
 "Castro es villa medieval convertida en ciudad dormitorio de Bilbao: conviven residentes locales y quienes trabajan en la capital vizcaína. Entre semana manda el ir y venir; en verano Brazomar y Ostende reciben más afluencia; Coso Blanco y patronales animan el casco unos días. El castellano basta; la integración pasa por ciudad y metro hacia Bilbao más que por silencio de noviembre como en Comillas.",
 "El Hospital de Laredo queda a unos veinticinco minutos; Cruces —Barakaldo—, a unos treinta y cinco. No es hospital a cinco minutos como Laredo: es elegir entre comarcal cantábrico y hospital de la red vizcaína. Empadronarse aquí abre lo diario en ciudad; para especialidades se asume uno de esos trayectos.",
 "El aeropuerto de Bilbao anda alrededor de treinta y cinco o cuarenta minutos, con Palma todo el año —el acceso más rápido de la tabla oriental a ese vuelo—. Ir y volver a Mallorca es más estable que depender solo de Santander. El peaje sigue siendo el sol mínimo, no la falta de avión.",
 "El casco y el ensanche ofrecen pisos; hay obra nueva y fibra. En primera línea hay que contar con precio y ocupación de verano. Tres habitaciones suelen quedar caras; dos en franja asequible son la orilla más realista. Imaginar el tráfico hacia Bilbao y un agosto en Brazomar antes de comprar.",
 ],
 historia: [
 "Santa María, el castillo-faro y el puente explican Castro: villa medieval de orilla —Flaviobriga en la capa romana— convertida en ciudad. El casco histórico no es adorno: es el núcleo delante del ensanche hacia Bilbao. La peña de la iglesia y el faro son el gesto que la gente fotografía; el dormitorio de trabajadores es el gesto que se vive de lunes a viernes.",
 "Brazomar, Ostende y la senda costera de Cerdigo a Islares y Sonabia completan el arco de paseo y acantilado. Los Montes de Ordunte y Cerredo añaden monte cerca. Lo que conviene saber es de villa medieval y ciudad dormitorio.",
 "Hoy Castro equilibra casco, ensanche, Bilbao a treinta y cinco y Palma todo el año a unos cuarenta. Quien camina el paseo un martes de noviembre entiende la ciudad; quien solo conoce Brazomar en agosto conoce solo la orilla.",
 ],
 fuera: [
 "Si solo hay tiempo para un baño cerca, ese baño es Brazomar u Ostende: orilla urbana, agua entre 19 y 21 °C, paseo delante. Un martes de junio puedes tener espacio; un domingo de agosto hay más gente. Oriñón e Islares —a unos diez minutos— amplían costa abierta y acantilado.",
 "El casco —Santa María, castillo-faro, puente— y el paseo son la tarde de diario. La senda de Cerdigo a Islares y Sonabia cubre el gesto de costa cuando no apetece toalla urbana.",
 "Bilbao anda alrededor de treinta y cinco minutos; Cruces, también hacia media hora larga. Quien priorice ciudad, Bilbao cerca y vuelo anual estable encontrará aquí la logística oriental más potente; quien priorice chalés mirará Ribamontán; quien priorice hospital a cinco minutos, Laredo.",
 ],
 casa: [
 "El casco y el ensanche ofrecen pisos; hay obra nueva y fibra. En primera línea hay que contar con precio y ocupación de verano. La tipología de tres habitaciones suele quedar por encima de la franja asequible habitual; dos habitaciones rondan unos 203.000 euros.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros —fuera de la orilla asequible habitual—. La franja media puede ser piso de dos habitaciones o vivienda algo retirada de Brazomar. Conviene probar un noviembre cubierto y el tráfico hacia Bilbao antes de comprar.",
 "Los servicios son 8/10. Laredo queda a unos veinticinco minutos; Cruces, a unos treinta y cinco. Bilbao–aeropuerto está a unos treinta y cinco o cuarenta, con Palma todo el año. Eso es Castro: ciudad hacia Bilbao a cambio del sol mínimo de la tabla y del metro alto.",
 ],
 encaja: {
 si: [
 "Bilbao y el vuelo a Palma todo el año importan más que el sol. Castro-Urdiales reúne unos treinta y cuatro mil habitantes: villa medieval —Santa María, castillo-faro, puente—, paseo, Brazomar y Ostende, Islares y Oriñón a unos diez minutos, y Bilbao a unos treinta y cinco. Es ciudad completa convertida en dormitorio de trabajadores de Bilbao, no villa pequeña de silencio. Quien quiera resolver casi todo en ciudad un martes de noviembre —servicios 8/10, comunicaciones 8/10—, caminar el casco y el paseo y tener Cruces a unos treinta y cinco minutos encontrará aquí la logística oriental más potente. En verano Brazomar y Ostende reciben más afluencia; el ritmo de ciudad se mantiene todo el año. Unas 1.650 horas de sol —el mínimo de la tabla— y unos 40 días despejados —frente a las 2.800 horas y 120 de Mallorca— son el peaje más duro: lluvia frecuente (unos 155 días), verano suave alrededor de 20 °C, viento bajo, agua entre 19 y 21 °C. Hay obra nueva; la seguridad ronda 46 por mil.",
 "Funciona si se acepta el Hospital de Laredo a unos veinticinco minutos a cambio del aeropuerto de Bilbao alrededor de los treinta y cinco o cuarenta, con Palma todo el año —el acceso más rápido de la tabla a ese vuelo—. Hay fibra; el metro ronda 2.400 euros y tira a precios vascos crecientes: dos habitaciones en franja asequible andan cerca de 203.000 euros; tres suelen quedar por encima de la orilla habitual. Quien priorice ciudad, Bilbao cerca y vuelo anual estable frente a chalés o villa de conserva entenderá Castro sin pedirle el cielo de Mallorca.",
 ],
 no: [
 "Si lo que se buscan son casas bajas de Ribamontán o villa marinera de trabajo a precio más amable, como Santoña, Castro no lo es: aquí mandan ciudad dormitorio, ensanche y metro alto. Tampoco encaja quien necesite tres habitaciones en primera línea dentro de la franja asequible habitual del mercado: el precio lo deja fuera con facilidad.",
 "Tampoco si se necesita el cielo de Baleares o villa pequeña sin ritmo de ciudad hacia Bilbao. Quien se decida solo tras un sábado soleado en Brazomar, sin probar un noviembre cubierto ni el tráfico de trabajadores, se llevará una sorpresa. Si mandan hospital a cinco minutos y Salvé, Laredo; si mandan chalés y Santander enfrente, Ribamontán. Castro pide aceptar el sol mínimo de toda la tabla y precios crecientes a cambio de Bilbao y Palma todo el año.",
 ],
 veredicto:
 "Veredicto: Castro-Urdiales encaja como ciudad hacia Bilbao —dos habitaciones en casco o ensanche, o tres algo retiradas de la primera línea— sobre todo si Bilbao a treinta y cinco y Palma todo el año a unos cuarenta importan más que el sol. Probar un martes de noviembre y un agosto en Brazomar antes de comprar. Se ganan ciudad 8/10, obra nueva, Cruces a treinta y cinco y el mejor acceso a Palma de la tabla; se aceptan, ~1.650 horas de sol y tres habitaciones caras en orilla. Quien priorice casas bajas, Ribamontán; quien priorice hospital a pie, Laredo.",
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

**Señales de auditoría (scan local, sin internet):**

- **X/10** (5 muestras):
  - …iembre los servicios alcanzan 8/10; las comunicaciones, 8/10. El…
  - …zan 8/10; las comunicaciones, 8/10. El Hospital de Laredo queda …
  - …s viable en ciudad: servicios 8/10, comunicaciones 8/10. Un mart…
  - …ervicios 8/10, comunicaciones 8/10. Un martes de noviembre se re…
  - …omprar.",  "Los servicios son 8/10. Laredo queda a unos veintici…
- **broken000** (3 muestras):
  - … habitaciones rondan unos 203.000 euros.",  "La referencia de precio …
  - …una media municipal en prosa. 000 euros —fuera de la orilla asequible…
  - … asequible andan cerca de 203.000 euros; tres suelen quedar por encim…
- **precio_narr** (5 muestras):
  - …os habitaciones rondan unos 203.000 euros.",  "La referencia de precio …
  - … del mes; aquí no se fija una media municipal en prosa. 000 euros —fuera de…
  - …una media municipal en prosa. 000 euros —fuera de la orilla asequible…
  - …o—. Hay fibra; el metro ronda 2.400 euros y tira a precios vascos creci…
  - …ja asequible andan cerca de 203.000 euros; tres suelen quedar por encim…
- **clima** (5 muestras):
  - …astro suma unas 1.650 a 1.700 horas de sol —el mínimo— y unos 40 días de…
  - …ol —el mínimo— y unos 40 días despejados, frente a las 2.800 horas y…
  - …oras y 120 jornadas claras de Mallorca. Caen alrededor de 1.150 a 1.…
  - …5 días. El viento es bajo; la niebla, baja.",  "El verano ronda 20…
  - …l a ese vuelo—. Ir y volver a Mallorca es más estable que depender s…
- **hospital** (5 muestras):
  - … las comunicaciones, 8/10. El Hospital de Laredo queda a unos veinti…
  - …a a unos veinticinco minutos; Cruces —Barakaldo—, a unos treinta y…
  - …mbre como en Comillas.",  "El Hospital de Laredo queda a unos veinti…
  - …a a unos veinticinco minutos; Cruces —Barakaldo—, a unos treinta y…
  - …a unos treinta y cinco. No es hospital a cinco minutos como Laredo: …
- **Palma** (5 muestras):
  - …cinco o cuarenta minutos, con Palma todo el año —el acceso más rá…
  - … con Bilbao al lado y vuelo a Palma todo el año a unos cuarenta m…
  - …cinco o cuarenta minutos, con Palma todo el año —el acceso más rá…
  - …e, Bilbao a treinta y cinco y Palma todo el año a unos cuarenta. …
  - …einta y cinco o cuarenta, con Palma todo el año. Eso es Castro: c…
- **rank** (1 muestras):
  - …de a vivir aquí acepta el sol más bajo de la tabla y precios vascos …
- **Cruces** (5 muestras):
  - …a a unos veinticinco minutos; Cruces —Barakaldo—, a unos treinta y…
  - …a a unos veinticinco minutos; Cruces —Barakaldo—, a unos treinta y…
  - …r de treinta y cinco minutos; Cruces, también hacia media hora lar…
  - …a a unos veinticinco minutos; Cruces, a unos treinta y cinco. Bilb…
  - …r el casco y el paseo y tener Cruces a unos treinta y cinco minuto…

### 11.2 Capa 2026 completa

Fuente: `web/src/data/municipios-cantabria-oriental.json` · slug `castro-urdiales`.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `241755` |
| `A_3hab` | `334737` |
| `B_2hab` | `195263` |
| `B_3hab` | `270365` |
| `advertenciaMicrozona` | `null` *(n.d. / ausente)* |
| `aeropuertoMin` | `35` |
| `aeropuertoPractico2026` | Bilbao 42 km · 35 min (Palma: todo el año); Santander 64 km · 50 min (Palma: casi todo el año) Tiempo histórico orientativo: ~35 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Bilbao 42 km · 35 min (Palma: todo el año); Santander 64 km · 50 min (Palma: casi todo el año) |
| `autonomiaCotidiana` | FUERTE |
| `casaQueBuscar` | Vivienda cómoda y accesible, 2–3 dormitorios, exterior, servicios cotidianos ... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Más húmedo / nublado |
| `comunicaciones` | A-8; Bilbao a 35 min |
| `comunicacionesNota10` | `8` |
| `cubiertos` | `165` |
| `dependenciaCocheTexto` | Baja-media en núcleo; coche/bus para hospital y metrópoli. |
| `despejados` | `40` |
| `estacionalidad2026` | Ciudad residencial anual con aumento estival. |
| `fibra` | Sí |
| `franja` | A |
| `hospitalMin` | `25` |
| `hospitalPractico2026` | Hospital de Laredo, aprox. 25 min, hospital público de referencia práctica dentro de Cantabria. |
| `hospitalPriv` | 40 km · 40 min · Quirónsalud / IMQ (Bilbao) |
| `hospitalPub` | 25 km · 25 min · Hospital de Laredo |
| `hospitalReferencia2026` | Valdecilla (Santander) como gran referencia cántabra; Cruces/Barakaldo puede ser geográficamente próximo, pero no confundir proximidad con adscripción sanitaria. |
| `humedad` | `76` |
| `lat` | `43.384` |
| `lluviaDias` | `155` |
| `lluviaMm` | `1250` |
| `lon` | `-3.219` |
| `mapa` | 72_castro_urdiales.png |
| `mercadoReventa` | Mercado relativamente amplio por demanda residencial permanente y servicios. ... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `5` |
| `minCosta` | `4` |
| `municipio` | Castro-Urdiales |
| `n` | `72` |
| `niebla` | Baja |
| `obraNueva` | Sí |
| `pais` | España |
| `palmaDirecta2026` | Bilbao es el aeropuerto práctico principal; conexión con Palma estructuralmente más útil que Santander desde Castro. Comprobar programación vigente. |
| `palmaMasCercano` | Todo el año |
| `palmaMejor` | Bilbao (todo el año) · 35 min |
| `paseoCotidiano` | Puerto, casco, Brazomar y frente marítimo. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Mucha vida propia y costa, pero precio alto y dependencia de carretera para conexiones mayores. |
| `playaBano` | Brazomar / Ostende |
| `playaCotidiana` | SÍ/PARCIAL |
| `playaCotidianaModo` | Brazomar y pequeñas playas/calas se integran en el frente urbano según barrio. |
| `precioM2` | `2861` |
| `provincia` | Cantabria |
| `radioCotidiano` | Ciudad pequeña con comercio, salud, cultura y servicios suficientes para una rutina muy autónoma. |
| `radioSalida` | Bilbao y costa oriental; conexiones metropolitanas por carretera/bus. |
| `sanidadPrimaria2026` | Atención primaria local |
| `servicios` | `8` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | Tiene: ciudad completa. Falta: nada esencial diario |
| `slug` | castro-urdiales |
| `solHoras` | `1650` |
| `tempAgua` | 19-21 |
| `tempInvierno` | `10.0` |
| `tempVerano` | `20.0` |
| `transporteRelevante2026` | Bus interurbano relevante hacia Bilbao y Cantabria; sin ferrocarril. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital de Laredo, aprox. 25 min, hospital público de referencia práctica dentro de Cantabria.. |
| `viento` | Baja |
| `zona` | Cantabria Oriental |

**Highlights capa (autoridad):** autonomia `FUERTE` · playa `SÍ/PARCIAL` · precioM2 `2861` · servicios `8` · hospitalMin `25`.

### 11.3 Auditorías / plan existentes

**NO PLAN_EDITORIAL** para Cantabria Occidental ni Oriental (no hay `PLAN_EDITORIAL_CANTABRIA_*.md` ni equivalente CURSOR_19).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n=72 → claves 63–72):

```
| 72 | Castro-Urdiales | Cantabria Oriental | precio relato ~2400 vs ficha 2861 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 72 | Castro-Urdiales | Cantabria Oriental | no | — |
```

**estudio_zonas.md** (histórico — **NO** autoridad 2026):

<details><summary>Recorte estudio</summary>

**Castro-Urdiales (nº 72).** 34.000 habitantes; villa medieval (Santa María, castillo-faro, puente), paseo, playas de Brazomar y Ostende, Islares y Oriñón a 10, Bilbao a 35. Servicios 8/10, comunicaciones 8/10. Hospital Laredo 25, Cruces 35. Aeropuerto de Bilbao 35-40 (Palma todo el año). Precio 2.400: 2 habitaciones franja A 203.000; 3 habitaciones 281.000 (fuera). Obra nueva sí. Seguridad 46. Para quién: quien quiera ciudad completa con Bilbao al lado y vuelo a Palma todo el año a 40 min, y acepte el sol más bajo de la tabla y precios vascos crecientes.

Si yo fuera tú

Solo Castro (por Bilbao y el vuelo anual a Palma) o Ribamontán (Loredo, Langre) por casas bajas y calma; y solo si el aeropuerto pasa a ser prioridad. Con sol como prioridad 1, esta zona no.

![Mapa de la zona 15](../output/mapas_zonas/zona_15.png)

15. Alto Minho (Portugal) · Valença, Vila Nova de Cerveira, Cami

</details>

### 11.4 Auditoría relato ↔ capa

Estados permitidos: `ALINEADO` · `OBSOLETO` · `DUPLICA_CAPA` · `P4_PRESERVAR` · `SOPORTADO_PERO_INFRAUSADO` · `NO_SOPORTADO_NO_INVENTAR` · `REQUIERE_VERIFICACION_EXTERNA`

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | 8/10 / ciudad completa | `servicios` **8**; Tiene: ciudad completa. Falta: nada esencial diario | DUPLICA_CAPA | Omitir chip; narrar FUERTE |
| Precio €/m² | Auditoría ~2400 vs 2861; «000 euros» | `precioM2` **2861** | OBSOLETO | Capa prevalece |
| Prosa rota «000 euros» | Tras remitir a capa queda fragmento «000 euros» (+ totales sueltos a veces) | Cifras viven en `precioM2` / A/B / TablaPrecios | OBSOLETO | Borrar resto roto; no reponer €/m² históricos en prosa |
| Mar / playa | Brazomar / frente urbano | **SÍ/PARCIAL** — Brazomar y pequeñas playas/calas se integran en el frente urbano según barrio. | ALINEADO | SÍ/PARCIAL según barrio |
| Hospital | Laredo ~25′ (capa). **No** asignar Cruces como hospital de referencia Cantabria | `hospitalMin` **25** — Hospital de Laredo, aprox. 25 min, hospital público de referencia práctica dentro de Cantabria. | ALINEADO / NO_SOPORTADO_NO_INVENTAR (Cruces) | Mantener Laredo como referencia práctica en Cantabria; Bilbao/Cruces solo si capa lo soporta (hoy no como hospitalPractico) |
| Aeropuerto / Palma vía Bilbao | Bilbao práctico; Palma todo el año en aero práctico | `aeropuertoMin` 35; Bilbao 42 km · 35 min (Palma: todo el año); Santander 64 km · 50 min (Palma: casi todo el año) Tiempo histórico orientativo: ~35 min. Usar como orientación de acceso, no como tiempo garantizado.; palma: Bilbao es el aeropuerto práctico principal; conexión con Palma estructuralmente más útil que Santander desde Castro. Comprobar programación vigente. | ALINEADO | Diferencial vs resto Cantabria (Bilbao); no inventar |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos tiempo→encaja (y a menudo abrir) | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| P4 puerto / frontera vizcaína | Ciudad costera hacia Bilbao | capa + estudio | P4_PRESERVAR | Conservar doble atracción Cantabria/Bizkaia sin inventar hospital Cruces |

### 11.5 P4 / identidad

- **Preservar:** puerto/casco, Brazomar, orientación Bilbao, servicios 8.
- **Identidad:** FUERTE frontera vizcaína.
- **No inventar:** hospital Cruces como referencia práctica Cantabria (capa = Laredo ~25′).

### 11.6 Vida cotidiana soportada

| Elemento | Clasificación | Base repo |
|---|---|---|
| Autonomía | YA SOPORTADO | `FUERTE` |
| Coche | YA SOPORTADO | `Baja-media en núcleo; coche/bus para hospital y metrópoli.` |
| Servicios cotidianos | YA SOPORTADO | servicios `8` — Tiene: ciudad completa. Falta: nada esencial diario |
| Paseo | YA SOPORTADO | Puerto, casco, Brazomar y frente marítimo. |
| Pendiente | N/A / null | `null` |
| Microzona | Poco o nada en capa | adv: — / microPrecio: — |
| Compra enero / estacionalidad | YA SOPORTADO en relato+capa | contrastar verano vs noviembre |
| Nombres café / horarios exactos | NO SOPORTADO | — |
| Totales A/B en prosa | NO SOPORTADO (viven en tabla) | A_3hab `334737` / B_3hab `270365` |

### 11.7 Reality toll

- Autonomía **FUERTE**; servicios **8**
- Playa **SÍ/PARCIAL**
- Hospital Laredo ~**25′** — **no inventar Cruces**
- Aero práctico Bilbao ~**35′**; Palma vía Bilbao
- Precio **2861**
- Doble órbita Cantabria/Bizkaia

### 11.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | Auditoría ~2400 (histórico prosa/estudio) | **2861** | OBSOLETO — capa prevalece |
| A_3hab / B_3hab | No narrar totales | `334737` / `270365` | TablaPrecios |
| casaQueBuscar / reventa | Cualitativo | Ver tabla capa §N.2 | `casaQueBuscar` truncado `…` → **DESEABLE** texto completo (no bloquea v1); `mercadoReventa` truncado `…` → **DESEABLE** texto completo (no bloquea v1) |
| «000 euros» | Presente tras remitir a capa | — | Borrar resto roto |

### 11.9 Clima: deuda / duplicación (NO correct)

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en `tiempo` + `encaja` (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `castro-urdiales` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_30.**

### 11.10 Mar / playa / paseo

- **playaCotidiana:** `SÍ/PARCIAL`
- **Modo:** Brazomar y pequeñas playas/calas se integran en el frente urbano según barrio.
- **paseoCotidiano:** Puerto, casco, Brazomar y frente marítimo.
- **pendiente:** `null`
- Separar baño cotidiano vs salidas (Oyambre, Berria, Langre, Buciero, Picos, etc.).
- No contradecir la etiqueta de playa de la capa.

### 11.11 No soportado / no inventar

- ~2400; «000 euros»
- Chip 8/10
- **Asignar Hospital de Cruces** como referencia práctica Cantabria (capa = Laredo ~25′)
- Inventar playa SÍ plena sin matiz PARCIAL
- Palma permanente sin el marco Bilbao de la capa

---



## 12. Referencia editorial final

> Relatos **ya reescritos / aprobados** (Asturias + A Mariña) usados solo como referencia de densidad, omisión de chips/€, tradeoffs y microzonas.  
> **No** plantilla de frases ni topónimos. **No** modificar estos archivos.

### gijon

> CITA LITERAL — `web/src/lib/relatos-asturias-centro.ts` clave `gijon`.

```ts
gijon: {
    escala: "Ciudad cantábrica frente al mar",
    abrir: [
      "Gijón no funciona como una villa costera ampliada, sino como una ciudad completa con el mar integrado en su estructura. San Lorenzo y el Muro, Cimavilla y Poniente forman parte de la vida urbana junto a barrios, comercio, cultura, sanidad y transporte.",
      "La autonomía cotidiana es muy alta. En los barrios centrales se puede resolver gran parte de la semana sin coche; en zonas residenciales como Somió cambian distancias y dependencia. La microzona importa por precio, acceso y relación con la playa, pero no altera el carácter urbano de Gijón.",
    ],
    tiempo: [
      "Frente a Mallorca, Gijón ofrece veranos mucho más frescos y un año más húmedo y gris. En primera línea pesan salitre, viento y exposición; en cualquier barrio, luz, aislamiento y ventilación siguen siendo cuestiones prácticas durante los meses húmedos.",
      "San Lorenzo y Poniente son playas urbanas reales. El baño depende del Cantábrico y de la marea, pero el paseo marítimo y la relación con el agua permanecen incluso cuando no apetece entrar al mar.",
    ],
    vivir: [
      "Una mañana normal puede unir recados, comercio y servicios con un tramo del Muro, Cimavilla o el paseo hacia el Piles. No hace falta convertir esa rutina en turismo: la costa está insertada en una ciudad que funciona durante todo el año.",
      "La sanidad hospitalaria está dentro del propio sistema urbano, con Cabueñes y Jove como referencias. El aeropuerto de Asturias exige desplazamiento fuera de la ciudad; los vuelos a Palma dependen de la programación.",
      "Ferrocarril y autobús amplían las conexiones, pero el relato no necesita prometer frecuencias concretas. Dentro de Gijón, la diferencia principal está entre barrios caminables y zonas residenciales donde el coche gana peso.",
      "El verano llena más San Lorenzo y el centro, pero no redefine la ciudad. Gijón mantiene comercio, cultura, universidad y servicios durante todo el año. El peaje de esa funcionalidad es aceptar tráfico, densidad y un mercado de vivienda muy desigual por barrios.",
    ],
    historia: [
      "Cimavilla y el cerro de Santa Catalina recuerdan el origen marítimo de la ciudad, mientras el crecimiento urbano ha extendido esa relación con el mar a un frente mucho mayor.",
      "San Lorenzo y el Muro son infraestructura cotidiana además de imagen urbana. Poniente añade otra playa y otro paseo, y los parques completan una ciudad donde costa y espacio público están conectados.",
    ],
    fuera: [
      "El propio frente urbano ofrece kilómetros de paseo sin necesidad de salir de Gijón. Cuando se quiere cambiar de escala aparecen la costa oriental y occidental, pero no son necesarias para tener mar en la semana.",
      "Somió ofrece una experiencia residencial distinta, con casas y más dependencia del coche. Es una microzona a valorar por sí misma, no una representación de cómo se vive en los barrios centrales.",
    ],
    casa: [
      "En el centro y barrios consolidados pesan ascensor, accesibilidad, luz, ruido, aislamiento y distancia real a servicios. Cerca del mar se añaden salitre y exposición; en Somió, acceso y coche.",
      "Precio y estimaciones quedan en la capa factual. Gijón exige comparar barrios y calles, no aplicar una media de ciudad a viviendas con rutinas completamente diferentes.",
    ],
    encaja: {
      si: [
        "Encaja si se quiere combinar ciudad completa con playa y paseo marítimo cotidianos, manteniendo sanidad, comercio y cultura dentro del mismo sistema urbano.",
        "También si se prefiere poder elegir entre una rutina muy peatonal en barrios centrales y otra más residencial en microzonas exteriores.",
      ],
      no: [
        "Encaja peor si se busca la escala y el silencio de una villa pequeña o si tráfico y densidad urbana pesan más que la autonomía que ofrecen.",
        "Tampoco si se pretende encontrar una única experiencia de vivienda: Gijón cambia mucho entre primera línea, barrios interiores y Somió.",
      ],
      veredicto:
        "Gijón es una ciudad completa con el Cantábrico incorporado a la vida diaria. Ofrece la mayor autonomía urbana de este bloque y playa a pie en buena parte del centro; a cambio, exige elegir bien barrio y vivienda para gestionar precio, tráfico, densidad y exposición marítima."
    },
 fotosAbrir: [
 { src: "/fotos/asturias-centro/gijon-san-lorenzo.jpg", pie: "Playa de San Lorenzo, Gijón" },
 { src: "/fotos/asturias-centro/gijon-cimavilla.jpg", pie: "Cimadevilla, Gijón" },
 ],
 fotosHistoria: [
 { src: "/fotos/asturias-centro/gijon-paseo.jpg", pie: "Paseo del Muro, Gijón" },
 { src: "/fotos/asturias-centro/gijon-cervigon.jpg", pie: "Senda del Cervigón, Gijón" },
 ],
 fotosFuera: [
 { src: "/fotos/asturias-centro/gijon-poniente.jpg", pie: "Playa de Poniente, Gijón" },
 { src: "/fotos/asturias-centro/gijon-somio.jpg", pie: "Somió, Gijón" },
 ],
 creditoFotos: credito,
  }
```
### llanes

> CITA LITERAL — `web/src/lib/relatos-asturias-oriente.ts` clave `llanes`.

```ts
llanes: {
    escala: "Villa fuerte dentro de un concejo muy amplio",
    abrir: [
      "Llanes puede engañar por el nombre: la villa es compacta, con casco, puerto, servicios y playas próximas, pero el concejo se extiende por decenas de núcleos y playas con rutinas muy diferentes. Vivir en Llanes villa no es lo mismo que vivir en Celorio, Barro, Posada o Pría.",
      "La autonomía es fuerte dentro de la villa y cae al salir de ella. Esa distinción afecta al coche, al precio, a la playa cotidiana y a la facilidad para resolver la semana.",
    ],
    tiempo: [
      "Frente a Mallorca, el oriente asturiano ofrece un verano fresco y un año mucho más húmedo y gris. Cerca del mar pesan salitre y exposición; hacia el interior cambian viento, acceso y dependencia del coche.",
      "En la villa, Sablón y otras orillas permiten integrar el mar en la rutina. Muchas de las playas famosas del concejo requieren desplazamiento aunque compartan municipio, así que ‘Llanes’ no equivale automáticamente a playa a pie.",
    ],
    vivir: [
      "Una mañana en la villa puede unir casco, puerto, recados y el Paseo de San Pedro. La capa recoge además un itinerario fácil de unos 7,6 kilómetros que permite ampliar el paseo sin convertirlo en una jornada de montaña.",
      "Fuera de la villa, el coche gana peso rápidamente. Celorio, Poo, Barro, Posada y Pría deben entenderse como microzonas con accesos, precios y relaciones con el mar propias.",
      "El hospital práctico está en Arriondas. Para volar hay que elegir entre Asturias y Santander según ruta y programación; Palma no debe tratarse como una conexión fija.",
      "El verano transforma Llanes con mucha más afluencia. La villa mantiene servicios y vida propia, pero aparcamiento, tráfico y ocupación cambian; en pueblos de playa el efecto puede ser todavía más marcado.",
    ],
    historia: [
      "El casco amurallado, el puerto y los Cubos de la Memoria concentran la identidad urbana de Llanes. El Paseo de San Pedro añade una pradera elevada sobre el Cantábrico que funciona como paseo cotidiano además de mirador.",
      "El concejo amplía esa identidad hacia playas, pueblos y la Sierra del Cuera. Gulpiyuri y los bufones de Pría son salidas singulares, no elementos de la rutina peatonal de la villa.",
    ],
    fuera: [
      "Desde la villa se puede vivir el mar sin coche; para recorrer buena parte de las playas y pueblos del concejo sí hace falta. Esa diferencia debe estar clara antes de comparar viviendas.",
      "Cuera y Picos amplían el mapa hacia la montaña. Arriondas entra por la sanidad y Santander o Asturias por el aeropuerto, recordando que el paisaje cercano no implica la misma proximidad logística.",
    ],
    casa: [
      "En la villa conviene buscar acceso, servicios, paseo, exterior y aparcamiento según necesidad. En pueblos y playas, comprobar carretera, distancia real a servicios, humedad y funcionamiento fuera de temporada.",
      "El precio cambia por microzona y la capa 2026 ya distingue varias. No deben prometerse revalorizaciones ni usar una media del concejo como si describiera por igual villa, Celorio, Posada o Pría.",
    ],
    encaja: {
      si: [
        "Encaja si se valora una villa con autonomía fuerte, casco y paseo marítimo, y se quiere además un concejo enorme de playas y montaña para ampliar el día.",
        "También si se está dispuesto a escoger microzona con precisión y aceptar que fuera de la villa el coche forma parte estructural de la rutina.",
      ],
      no: [
        "Encaja peor si se quiere que cualquier dirección del concejo permita resolver la semana andando o si la presión turística de verano resulta incompatible con la vivienda.",
        "Tampoco si hospital y aeropuerto deben quedar muy próximos o si se compra una vivienda de playa suponiendo que tendrá la misma vida anual que la villa.",
      ],
      veredicto:
        "Llanes ofrece dos escalas: una villa fuerte y caminable, con mar y paseo cotidianos, y un concejo muy disperso de pueblos, playas y montaña. Su atractivo exige precisión al elegir microzona, porque coche, precio, estacionalidad y servicios cambian mucho en pocos kilómetros."
    },
 fotoIdentidad: {
 src: "/fotos/asturias-oriente/llanes-identidad.jpg",
 pie: "Llanes: casas con galerías sobre el puerto — vivir pegado al Cantábrico",
 },
 fotosAbrir: [
 { src: "/fotos/asturias-oriente/llanes-casco.jpg", pie: "Casco amurallado de Llanes" },
 { src: "/fotos/asturias-oriente/llanes-puerto.jpg", pie: "Puerto de Llanes" },
 ],
 fotosHistoria: [
 { src: "/fotos/asturias-oriente/llanes-san-pedro.jpg", pie: "Paseo de San Pedro, Llanes" },
 { src: "/fotos/asturias-oriente/llanes-cuera.jpg", pie: "Sierra del Cuera sobre Llanes" },
 ],
 fotosFuera: [
 { src: "/fotos/asturias-oriente/llanes-gulpiyuri.jpg", pie: "Playa de Gulpiyuri" },
 { src: "/fotos/asturias-oriente/llanes-barro.jpg", pie: "Playa de Torimbia, Llanes" },
 ],
 creditoFotos: credito,
  }
```
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

---

## 13. Matriz final

| Lugar | Autonomía | Coche | Estacionalidad | Mar cotidiano | Paseo | Hospital | Aeropuerto | Precio/fiabilidad | P4 principal | Reality toll principal | Conflicto viejo principal | Invest. externa obligatoria v1 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| San Vicente de la Barquera | MEDIA-FUERTE | Baja-media para rutina de villa; coche p | estacional | SÍ/PARCIAL | Ría, puentes y frente de la villa; playa | 40′ | aero 45′ | 3218 vs ~2100 | Ría+Maza+Picos+Folía | Hospital/aero lejos; verano Merón; precio 3218 | precio~2100≠3218; chips X/10; clima cascada | **NO** |
| Comillas | MEDIA | Baja-media en villa; coche para hospital | estacional | SÍ | Centro histórico, parque y frente de pla | 30′ | aero 40′ | 3722 vs ~2400 | Villa-museo Capricho/Sobrellano | Serv 4; invierno vacío; precio 3722 | precio~2400≠3722; chips X/10; clima cascada | **NO** |
| Suances | MEDIA-FUERTE SEGÚN MICROZONA | Media y muy dependiente de microzona/top | estacional | SÍ EN ZONA BAJA | La Ribera–La Concha–zona del faro/Los Lo | 15′ | aero 20′ | 3000 vs ~2000 | Villa anual + microzona alto/Ribera | Desnivel; playa solo zona baja | precio~2000≠3000; chips X/10; clima cascada | **NO** |
| Liencres / Piélagos | MEDIA-BAJA | Media-alta: costa, servicios y vivienda  | estacional | DEPENDE VIVIENDA | Paseos locales; Costa Quebrada/dunas son | 10′ | aero 15′ | 2227 vs ~2000 | Dunas + Liencres≠Piélagos | Coche; playa depende vivienda; media municipal | precio~2000≠2227; chips X/10; clima cascada | **NO** |
| Santander | MUY ALTA | Baja en barrios centrales bien elegidos; | estacional | SÍ EN MICROZONAS COSTERAS | Bahía/Puerto Chico–Magdalena–Sardinero s | 5′ | aero 10′ | 3323 vs ~2600 | Ciudad-mar + barrios | Precio/barrio; tráfico Sardinero | precio~2600≠3323; chips X/10; clima cascada | **NO** |
| Ribamontán al Mar | MEDIA | Media; menor en Somo para rutina básica, | estacional | SÍ EN SOMO/LOREDO | Playa/dunas/pinar Somo–Loredo; recorrido | 15′ | aero 15′ | 3535 vs ~2300 | Somo/Loredo + lancha | Coche entre pueblos; precio 3535; fibra parcial | precio~2300≠3535; chips X/10; clima cascada | **NO** |
| Noja | MEDIA | Baja-media en temporada/núcleo para bási | estacional | SÍ | Ris/Trengandín y recorridos hacia marism | 20′ | aero 25′ | 3296 vs ~2300 | 2.ª residencia Ris/Trengandín | Serv 4.5 invierno; estacionalidad | precio~2300≠3296; chips X/10; clima cascada | **NO** |
| Santoña | FUERTE | Baja para vida de villa; coche para Berr | estacional | SÍ/PARCIAL | Frente de bahía/puerto; Buciero es una s | 10′ | aero 30′ | 2120 vs ~1900 | Trabajo + San Martín/Berria | Berria salida; minutos hosp en prosa | precio~1900≠2120; chips X/10; clima cascada | **NO** |
| Laredo | MUY ALTA | Baja para gran parte de la rutina si se  | estacional | SÍ | Paseo de La Salvé y frente marítimo, lar | 5′ | aero 35′ | 2951 vs ~2100 | Salvé + hospital en villa | Verano Salvé; precio 2951 | precio~2100≠2951; chips X/10; clima cascada | **NO** |
| Castro-Urdiales | FUERTE | Baja-media en núcleo; coche/bus para hos | estacional | SÍ/PARCIAL | Puerto, casco, Brazomar y frente marítim | 25′ | aero 35′ | 2861 vs ~2400 | Puerto + eje Bilbao | Hosp Laredo 25′ (no Cruces); precio 2861 | precio~2400≠2861; chips X/10; clima cascada | **NO** |

### Investigación externa (clasificación)

| Tema | Clase | Nota |
|---|---|---|
| Noja `servicios` **4.5** (no entero) | **Documentar** | No redondear; narrar verano vs invierno cierra medio |
| Texto completo `casaQueBuscar` / `mercadoReventa` truncados `…` | **DESEABLE** | Relato cualitativo sin string completo |
| Lancha Somo horarios exactos | **NO NECESARIA** | Mencionar «cuando opera» sin inventar |
| Hospital Cruces para Castro | **NO SOPORTADO** | Capa = Laredo ~25′; no inventar |
| Corregir metodología despejados/cubiertos | **NO NECESARIA** en este bloque | Deuda marcada; no inventar |
| **Obligatoria para v1** | — | **NONE** (ninguna de las 10) |

---

## 14. Contrato de reescritura

- ChatGPT redactará los **10** objetos finales (claves Occidental + Oriental listadas arriba) en un solo paquete.
- **Capa 2026 prevalece** sobre prosa vieja.
- Precio, servicios X/10 (incluido Noja **4.5**), A/B, textos hospital/aero/Palma detallados se quedan en capa factual / TablaPrecios / FichaCapa2026.
- Cursor copiará **literalmente** después (solo indentación/escapes/coma).
- Conflicto factual **nuevo** texto↔capa ⇒ **parar**, no corregir por iniciativa, no commit.
- Edición quirúrgica; preservar EOL (CRLF) del `.ts`.
- **No** personalizar para jubilados ni presupuesto personal; **no** nombrar tope 260.000 €.
- **Proteger** A Mariña + Asturias (Centro/Oriente/Occidente): no tocar esos relatos/JSON/UI.
- Archivos de implementación futura: solo `relatos-cantabria-occidental.ts` y `relatos-cantabria-oriental.ts` (las 10 claves).
- **Santillana del Mar:** no crear objeto ni sección; solo contexto si la prosa ajena lo necesita.
- Castro: **no** inventar Hospital de Cruces como referencia práctica Cantabria.

---

## Apéndice — Inventario de archivos fuente

| Rol | Ruta |
|---|---|
| Relatos Occidental | `web/src/lib/relatos-cantabria-occidental.ts` |
| Relatos Oriental | `web/src/lib/relatos-cantabria-oriental.ts` |
| Capa JSON Occidental | `web/src/data/municipios-cantabria-occidental.json` |
| Capa JSON Oriental | `web/src/data/municipios-cantabria-oriental.json` |
| Auditoría editorial | `docs/AUDITORIA_EDITORIAL_RELATOS_2026.md` (63–72) |
| P0 precios | `docs/P0_RESTANTES_POST_PRECIOS_2026.md` |
| Estudio (histórico) | `docs/estudio_zonas.md` §13–14 |
| Plan editorial Cantabria | **NO EXISTE** (NO PLAN_EDITORIAL) |
| Referencia Asturias Centro | `relatos-asturias-centro.ts` — gijon |
| Referencia Asturias Oriente | `relatos-asturias-oriente.ts` — llanes |
| Referencia A Mariña | `relatos-a-marina.ts` — ribadeo |
| Referencia Asturias Occidente | `relatos-asturias-occidente.ts` — luarca-valdes |
| Universo 83 | `output/encaja_83_municipios.txt` |
