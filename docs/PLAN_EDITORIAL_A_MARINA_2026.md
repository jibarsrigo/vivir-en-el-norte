# Plan editorial — A Mariña (primer lote de reescritura real)

**Bloque:** CURSOR_19 · **rama:** `revision-2026-09-21` · **HEAD base:** `79d0985`  
**Alcance:** solo auditoría + este documento. **No** reescritura de producto. **No** internet. **No** cambios a JSON/UI/relatos.

**Fuentes usadas:** `web/src/lib/relatos-a-marina.ts`, `web/src/data/municipios-a-marina.json` (capa v15 sincronizada), `docs/AUDITORIA_EDITORIAL_RELATOS_2026.md`, `docs/P0_RESTANTES_POST_PRECIOS_2026.md`, `FichaCapa2026` / `TablaPrecios` (qué ya ve el lector estructurado).

---

## 1. Resumen

A Mariña (8 municipios) es el lote adecuado para la **primera reescritura narrativa real**: mezcla villa caminable, puerto de oficio, costa industrial, dispersión de parroquias y segunda residencia; precios ya saneados en capa; Barreiros como caso de prueba de estacionalidad; contraste fuerte oeste↔este (O Vicedo ↔ Ribadeo).

**Diagnóstico común del relato actual**

| Problema | Patrón |
|---|---|
| Duplicación capa | Notas `servicios X/10`, minutos hospital/aeropuerto, €/m² y A_3hab se repiten en `abrir` + `vivir` + `casa` + `encaja` |
| Clima genérico | Bloque `tiempo` + eco Mallorca casi calcado en los 8 (mismas horas/despejados ±delta) |
| Mallorca | Útil como contraste climático; **repetitiva** en `vivir` + `encaja.si` (reformular / reducir) |
| Vida cotidiana | Escasa escena de café/mercado/biblioteca/deporte; la capa `radioCotidiano` a menudo es más rica que el relato |
| Nombres | Muchos topónimos ya glosados; faltan algunos (PR-G156, San Bartolomé, Lóngara, mercado concreto, etc.) |
| Artefactos de scrub | Frases rotas de precio en `casa` (O Vicedo, Burela, Barreiros) — corregir en reescritura con cifras **solo desde v15** |
| Desalineación numérica | Varias notas de servicios del relato **no coinciden** con `servicios` v15 (ver §7) — Cursor debe reportar conflicto antes de commit |

**Qué debe quedarse solo en capa factual (no en prosa futura)**

- `precioM2`, A/B 2–3 hab, `TablaPrecios`
- Nota `servicios` + chips de autonomía / dependencia coche
- Minutos hospital / aeropuerto / Palma (salvo una mención vivida de tradeoff)
- `casaQueBuscar` / `mercadoReventa` (capa CASA)
- Horas de sol, mm, despejados como lista de cifras (sí: sensación invierno/verano vivida)

**Qué debe vivir solo en relato**

- Escena de apertura identificable
- Martes de noviembre vs agosto (estacionalidad vivida)
- Nombres de lugar glosados la primera vez
- Historia / oficio / industria con impacto al vivir
- Encaja como tradeoff descriptivo (no repetición de chips)

---

## 2. Matriz rápida (8/8)

| Municipio | Brújula (A) | P4 fuerte | Duplicación alta | Nombres a glosar | Vida cotidiana faltante | Reality toll | Mallorca | Casa narrativo útil |
|---|---|---|---|---|---|---|---|---|
| O Vicedo | Extremo oeste aislado, Cantábrico delante | Sí | Muy alta | Parcial | Alta | Coche + servicios mínimos | Repetitiva | Sí (humedad/fibra/acceso) |
| Viveiro | Villa-casco + Covas + Semana Santa | Muy sí | Alta | Bien | Media | Semana Santa + hospital fuera | Repetitiva | Sí (piedra/ascensor) |
| Xove | Arcos/surf + industria Alcoa + parroquias | Sí | Alta | Parcial | Alta (capa tiene biblioteca/piscina no usadas) | Coche + industria | Repetitiva/dato | Sí (dispersión) |
| Cervo | Península San Cibrao + Sargadelos | Muy sí | Alta | Bien | Media | Industria + escala comercial | Repetitiva | Sí (salitre/microzona) |
| Burela | Hospital a pie + lonja/bonito | Sí | Alta | Bien | Media-baja (capa rica) | Ruido puerto / poco “encanto” | Repetitiva | Sí (ruido lonja) |
| Foz | Villa ría/paseo equilibrada | Sí | Alta | Parcial | Media (biblioteca en capa) | Veraneo paseo + hospital 20′ | Repetitiva | Sí (paseo vs marisma) |
| Barreiros | 8 km playa + 2ª residencia + As Catedrais | Muy sí | Alta + prose rota | Parcial | Alta | Vacío enero + coche | Repetitiva | Muy sí (luces enero) |
| Ribadeo | Villa completa frontera + aero 60′ | Muy sí | Alta | Bien | Media-baja | Hospital lejos + precio alto zona | Menos mala (matiza oeste) | Sí (indiano/turismo) |

---

## 3. Fichas editoriales por municipio

### 3.1 O Vicedo

**A. Qué recordar**  
Extremo oeste de A Mariña: costa cantábrica abierta y aislamiento; la semana cabe en el volante (Viveiro/Burela), no en la plaza.

**B. P4 a preservar**

| Elemento | Preservar |
|---|---|
| Ría do Barqueiro como frontera Lugo/A Coruña | concepto + nombre |
| Xilloi, Arealonga, Vidreiro | nombres + papel de orilla diaria |
| Fuciño do Porco (pasarelas/acantilado) | literal escena |
| Estaca de Bares (faro, aves, divisoria Cantábrico/Atlántico) | concepto + dato |
| “Noviembre húmedo vs sábado de sol” / aislamiento | literal/concepto |
| Fibra parcial + humedad/viento en vivienda | concepto |

**C. Duplicación a recortar**  
`servicios 2/10`, dependencia 9/10, hospital 35′, aeropuerto ~100′, cifras sol/lluvia y Mallorca: se repiten en abrir, vivir, casa, encaja. Precio “más bajo” + A_3hab: dejar a TablaPrecios (hoy prosa de `casa` además está **rota**: empieza por coma tras scrub).

**D. Nombres que necesitan explicación**

| Nombre | Qué es / por qué importa / qué se hace | ¿Relato explica? |
|---|---|---|
| Ría do Barqueiro | Lámina de agua frontera provincial | Sí |
| Xilloi / Arealonga / Vidreiro | Playas del municipio | Parcial (listadas; poca escena diferenciada) |
| Fuciño do Porco | Pasarelas sobre acantilado | Sí |
| Estaca de Bares | Cabo/faro extremo norte | Sí |
| PR-G156 (capa `paseoCotidiano` / `radioSalida`) | Sendero costero desde puerto | **No** en relato → glosar o usar en reescritura |
| Hospital da Mariña (Burela) | Comarcal de referencia | Sí (minutos) |

**E. Vida cotidiana faltante** (“mañana libre, no turismo”)

| Tema | Estado |
|---|---|
| Café / compra / mercado | FALTA HECHO/FUENTE (solo “pocas mesas”, súper en Viveiro/Burela) |
| Paseo cotidiano | Parcial (Fuciño/playas); falta tramo PR-G156 del puerto (capa) |
| Biblioteca / cultura | FALTA HECHO/FUENTE |
| Deporte | FALTA HECHO/FUENTE |
| Gestiones | Solo “recados en Viveiro/Burela” |
| Transporte | Capa: apeadero FEVE — relato casi no lo usa (DESEABLE) |
| Salida corta | Bien (Estaca, Viveiro/Covas) |
| Día de lluvia/invierno | Parcial (niebla/aislamiento); falta interior concreto |

**F. Reality toll** (soportado)  
Coche casi diario; servicios mínimos; hospital 35′; aeropuerto ~100′; niebla alta / exposición; fibra parcial; estacionalidad de agosto en orilla.

**G. Mallorca**  
Dato climático útil una vez; eco en vivir + encaja → **reducir/reformular**.

**H. Casa**  
Valor: humedad, viento, acceso invierno, fibra parcial, “anuncio=horizonte / noviembre=aislamiento”. Recortar: €/m², A_3hab, servicios/hospital/avión en bloque casa.

---

### 3.2 Viveiro

**A. Qué recordar**  
Villa de ría con casco amurallado y vida propia en enero; Covas como baño abrigado; Semana Santa como peaje de calendario.

**B. P4 a preservar**

| Elemento | Preservar |
|---|---|
| Porta de Carlos V / muralla | literal |
| Celeiro + merluza del pincho / lonja | literal + concepto |
| Covas (ría abrigada) vs Cantábrico abierto | concepto |
| Semana Santa interés turístico internacional | literal impacto (ruido, calles, aparcamiento) |
| FEVE / Renfe Ancho Métrico hacia Ferrol-Oviedo | concepto |
| Souto da Retorta / Monte San Roque | nombre + concepto |
| Area / Sacido | nombres |
| Microzonas casco vs Covas vs Celeiro (capa) | concepto |

**C. Duplicación**  
Servicios/fibra/hospital 25′/aero 100′/sol Mallorca en abrir+vivir+casa+encaja. €/m² 1.302 y ~152.000 en casa+veredicto → capa. **Nota:** relato dice servicios **6/10**; v15 JSON `servicios: 7` → conflicto a reportar en reescritura.

**D. Nombres**

| Nombre | Explicación | ¿Explica? |
|---|---|---|
| Porta de Carlos V | Arco renacentista de entrada | Sí |
| Celeiro | Puerto/lonja | Sí |
| Covas / Area / Sacido | Playas | Sí / parcial |
| Souto da Retorta | Eucaliptos gigantes | Sí breve |
| Monte San Roque | Mirador | Sí breve |
| Enlace A-8 Cabreiros (capa) | Acceso autovía | **No** |

**E. Vida cotidiana faltante**

| Tema | Estado |
|---|---|
| Café / mercado concreto | FALTA HECHO/FUENTE (hay “mesas/comercio”; no nombre de mercado) |
| Paseo | Bien (casco, Covas) |
| Biblioteca / cultura | FALTA HECHO/FUENTE |
| Deporte | FALTA HECHO/FUENTE |
| Tren utilidad diaria | Parcial (mencionado; no “para qué viaje útil”) |
| Lluvia/invierno interior | Parcial (moho/niebla) |

**F. Reality toll**  
Semana Santa; hospital fuera (25′); aeropuerto lejos; niebla; veraneo Covas; Lugo >1 h (mencionado en no).

**G. Mallorca**  
Repetitiva (tiempo + vivir + encaja.si).

**H. Casa**  
Valor: piedra/casco vs Covas, Semana Santa, salitre suave, ascensor/escaleras. Recortar cifras y chips.

---

### 3.3 Xove

**A. Qué recordar**  
No es villa completa: costa de carácter (Esteiro) + parroquias + peso del complejo industrial San Ciprián/Alcoa en el mismo término.

**B. P4 a preservar**

| Elemento | Preservar |
|---|---|
| Esteiro (arcos, surf) vs Covas (ría) | literal/concepto |
| Portocelo | nombre |
| Faro Punta Roncadoira | nombre |
| Complejo San Ciprián / Alcoa 2026 (aluminio reactivado; alúmina en duda) | concepto + dato (ya en relato; no inventar más) |
| Invierno vacío fuera de orilla | literal |
| Dispersión costa↔parroquias | concepto |

**C. Duplicación**  
Servicios 3/10, hospital 20′, aero 95–105′, clima Mallorca, “fibra parcial” en cascada. Precio: relato ya remite a Idealista/capa (n.d. municipal) — bien; no reintroducir cifra inventada.

**D. Nombres**

| Nombre | Explicación | ¿Explica? |
|---|---|---|
| Esteiro / Portocelo | Playas | Sí |
| San Ciprián / San Cibrao | Complejo industrial (grafías distintas en relato/capa) | Sí (industria); unificar grafía en reescritura con cuidado |
| Punta Roncadoira | Faro | Parcial |
| San Bartolomé (capa `radioCotidiano`) | Núcleo admin/servicios + biblioteca/Centro Cívico + piscina | **No** → clave para vida cotidiana |
| Morás / Lago (capa peaje) | Contexto industrial | **No** |
| Senda Costeira >18 km (capa) | Salida, no paseo diario | **No** |

**E. Vida cotidiana faltante**

| Tema | Estado |
|---|---|
| Café/compra | Solo “hacia Burela/Viveiro” |
| Biblioteca / piscina / gimnasio | **YA SOPORTADO EN REPO (capa)** — relato no lo usa |
| Paseo diario desde núcleo | Capa: núcleo interior; mar exige desplazamiento — relato enfatiza Esteiro sin matizar “desde dónde” |
| Transporte FEVE | Capa sí; relato casi no |

**F. Reality toll**  
Coche; dispersión servicios↔costa; industria visual/económica; fibra parcial; invierno vacío.

**G. Mallorca**  
Dato + repetición; reformular.

**H. Casa**  
Valor: parroquia vs costa, vacío invierno, fibra. Sin media municipal (correcto).

---

### 3.4 Cervo

**A. Qué recordar**  
Municipio de dos tiempos: península San Cibrao (puerto/playas/museo) y Sargadelos (cerámica/Real Fábrica); hospital cerca; industria en el horizonte.

**B. P4 a preservar**

| Elemento | Preservar |
|---|---|
| San Cibrao península / Cubelas / O Torno | literal |
| Museo Provincial do Mar | nombre + concepto |
| Sargadelos / Real Fábrica / río Xunco / Paseo dos Namorados | literal |
| Alcoa / San Ciprián en el término | concepto |
| Microzona: experiencia costera = sobre todo San Cibrao (capa) | concepto |

**C. Duplicación**  
Servicios/hospital 10′/aero/clima/precio 1.210 + ~142k. **Conflicto:** relato `4/10` vs v15 `servicios: 5`.

**D. Nombres** — en general bien glosados. Faltan matices de capa: O Torno–A Atalaia/faro como paseo cotidiano; longitudes de playa no necesarias en prosa.

**E. Vida cotidiana faltante**

| Tema | Estado |
|---|---|
| Café/mercado en San Cibrao | FALTA HECHO/FUENTE (“lo básico”) |
| Cultura (Sargadelos como visita cotidiana vs turismo) | Parcial |
| Deporte | FALTA HECHO/FUENTE |
| Tren San Cibrao | Capa sí; relato no |

**F. Reality toll**  
Industria; comercio grande en Burela; coche fuera de San Cibrao; salitre; fibra parcial.

**G. Mallorca**  
Repetitiva.

**H. Casa**  
Valor: San Cibrao vs Sargadelos vs parroquia; salitre; viento/noviembre. Recortar €/m².

---

### 3.5 Burela

**A. Qué recordar**  
Villa de oficio (bonito/lonja) y **única** con hospital comarcal a pie; funcionalidad antes que piedra monumental.

**B. P4 a preservar**

| Elemento | Preservar |
|---|---|
| Puerto / lonja / bonito del norte | literal |
| Comunidad caboverdiana ligada a la pesca | concepto (no ampliar sin fuente) |
| Hospital da Mariña a ~5′ como dato diferencial | concepto (una vez; no martillar cifras) |
| A Marosa / Ril | nombres |
| “Escuchar un día de lonja antes de comprar primera línea” | literal |
| Capa: biblioteca, auditorio, mercado, deporte, estación | **YA EN REPO** — relato apenas lo usa → incorporar en reescritura sin inventar |

**C. Duplicación**  
Hospital 5′ repetido muchas veces; servicios/fibra/aero; clima. **Conflicto fuerte:** relato `6/10` vs v15 `servicios: 8`. Prosa `casa` con artefacto `000 euros`.

**D. Nombres**  
Cabo Burela (historia) — glosa mínima. Mercado/auditorio (capa) — no en relato.

**E. Vida cotidiana faltante**

| Tema | Estado |
|---|---|
| Mercado / biblioteca / deporte / auditorio | YA SOPORTADO EN CAPA — faltan en relato |
| Café enero | Parcial (“mesas”) |
| Paseo puerto | Bien |

**F. Reality toll**  
Ruido puerto; “falta encanto urbano” (capa `serviciosNota`); aeropuerto no cercano; gris.

**G. Mallorca**  
Repetitiva.

**H. Casa**  
Valor: ruido lonja, salitre, tipología funcional. Recortar precio roto + chips.

---

### 3.6 Foz

**A. Qué recordar**  
Villa de ría y paseo en el centro-este: A Rapadoira usable; veraneo presente pero menor que As Catedrais; patrimonio cercano en San Martiño de Mondoñedo.

**B. P4 a preservar**

| Elemento | Preservar |
|---|---|
| A Rapadoira vs Llas / Peizás | concepto (ría abrigada vs abierto) |
| Marisma + puente | concepto paisaje cotidiano |
| San Martiño de Mondoñedo (basílica / antigua sede) | literal |
| Mondoñedo a ~20′ | nombre + capa histórica |
| Veraneo gallego-castellano en paseo | concepto |
| Contraste con Ribadeo (indiano) / Viveiro (Semana Santa) / Burela (hospital) | concepto |

**C. Duplicación**  
Servicios/hospital 20′/aero 80′/clima/precio 1.790. **Conflictos:** relato servicios `5/10` vs v15 `7`; veredicto cita franja asequible ~152k mientras v15 `A_3hab` ≈ 209.430 (y casa cita ~161k) — alinear solo a capa en reescritura.

**D. Nombres**

| Nombre | ¿Explica? |
|---|---|
| A Rapadoira / Llas / Peizás | Sí |
| San Martiño de Mondoñedo | Sí |
| Marisma | Parcial (paisaje; poca escena de uso) |
| Biblioteca (capa radioCotidiano) | **No** |

**E. Vida cotidiana faltante**

| Tema | Estado |
|---|---|
| Café / mercado concreto | FALTA HECHO/FUENTE |
| Biblioteca activa fuera de verano | YA EN CAPA (`estacionalidad2026`) — no en relato |
| Deporte | FALTA HECHO/FUENTE |
| FEVE | Capa sí; relato no |
| Día lluvia | Parcial (niebla) |

**F. Reality toll**  
Presión vacacional en paseo; hospital 20′; menor autonomía sanitaria que Burela (capa peaje); precio más alto que oeste.

**G. Mallorca**  
Repetitiva.

**H. Casa**  
Valor: paseo vs marisma/afueras; ocupación agosto. Recortar cifras.

---

### 3.7 Barreiros

**A. Qué recordar**  
Costa de playas largas y bloques de los 2000: se entiende en agosto; en enero muchas luces apagadas. As Catedrais a 5′ definen temporada. Caso de prueba de **segunda residencia vs vivir todo el año**.

**B. P4 a preservar**

| Elemento | Preservar |
|---|---|
| ~8 km playas: Arealonga, Altar, Coto, Remior | nombres |
| Bloques apartamentos años 2000 / vacío invierno | literal |
| As Catedrais a ~5′ + afluencia | concepto |
| “Preguntar cuántas luces quedan encendidas en enero” | literal |
| Reinante / San Miguel como orilla/parroquia no casco | concepto |
| Capa: Lóngara, As Pasadas; advertencia microzona dispersa | incorporar con glosa |
| Foto pie “casa de indianos” (crédito visual) | no convertir en historia inventada sin fuente |

**C. Duplicación**  
Servicios 3/10, hospital 25′, aero 70′, clima Mallorca en cascada. `casa` con prosa rota (`000 euros`). Precio: remitir a capa (1.732 v15) sin reescribir cifra hasta entrega ChatGPT alineada.

**D. Nombres**

| Nombre | ¿Explica? |
|---|---|
| As Catedrais | Sí (magnetismo; matiz acceso/Ribadeo) |
| Arealonga / Altar / Coto / Remior | Listados; poca diferenciación |
| Reinante / San Miguel | Parcial |
| Lóngara / As Pasadas (capa) | **No** |

**E. Vida cotidiana faltante**

| Tema | Estado |
|---|---|
| Café/compra en municipio | Solo Foz/Ribadeo a 10–15′ |
| Cultura/deporte locales | FALTA HECHO/FUENTE |
| Transporte FEVE | Capa sí; relato no |
| Invierno | Fuerte (vacío) — preservar |
| Mañana libre no turística | Débil (solo playa/arcos) |

**F. Reality toll**  
Coche; dispersión; estacionalidad extrema; servicios bajos; hospital 25′; fibra parcial. (Aeropuerto 70′ es **ventaja**, no peaje.)

**G. Mallorca**  
Repetitiva; el contraste útil es más **agosto vs enero** que Baleares.

**H. Casa**  
Valor máximo del lote: vecinos estacionales, fibra, humedad, orientación. Arreglar prosa rota; no duplicar TablaPrecios.

---

### 3.8 Ribadeo

**A. Qué recordar**  
Villa más completa y mejor conectada al aeropuerto de Asturias; casco indiano y frontera del Eo; tradeoff: hospital lejos y precio alto de comarca; As Catedrais como imán estacional.

**B. P4 a preservar**

| Elemento | Preservar |
|---|---|
| Casco indiano / Torre dos Moreno | literal |
| Illa Pancha | literal |
| Ría del Eo frente a Castropol | literal |
| Reserva Biosfera del Eo | nombre |
| As Catedrais ~10′ + Os Bloques | concepto |
| A-8 / puente dos Santos (capa) | concepto logística |
| Jarrio (Asturias) vs Hospital da Mariña + aviso Sergas | concepto sanitario (una vez claro) |
| “Probar un día de afluencia hacia los arcos antes de comprar esa calle” | literal |

**C. Duplicación**  
Servicios 7/10 (v15: **8**), aero 60′, hospital 30–35′, clima, precio 1.845 + ~166k. Mucha repetición de “mejor aeropuerto de la comarca”.

**D. Nombres** — bien cubiertos. Capa añade: biblioteca, piscina/gimnasio, PAC/nuevo centro proyectado 2026 — relato no usa equipamientos cotidianos.

**E. Vida cotidiana faltante**

| Tema | Estado |
|---|---|
| Mercado (mencionado genérico) | Parcial — FALTA nombre/día si se quiere escena |
| Biblioteca / piscina | YA EN CAPA — no en relato |
| Paseo villa–ría–puerto | Bien |
| Día lluvia | Parcial |

**F. Reality toll**  
Hospital 30–35′; sin privado cerca; precio alto zona; turismo As Catedrais; clima aún lejos de Mallorca (aunque niebla media vs alta oeste).

**G. Mallorca**  
Más personalizada (compara con O Vicedo); aún reducible en vivir/encaja.

**H. Casa**  
Valor: indiano vs afueras; turismo; humedad. Recortar €/m².

---

## 4. Estructura propuesta de relato (A Mariña)

No hace falta clonar otra zona. Conservar campos actuales del tipo `RelatoMun` (`abrir`, `tiempo`→Frente a Mallorca/Clima, `vivir`, `historia`, `fuera`, `casa`, `encaja`), pero **cambiar el contenido** para no duplicar `FichaCapa2026`.

### 4.1 Orden narrativo recomendado

1. **Abrir / escena** — una imagen del lugar (no lista de chips). Escala humana (habitantes solo si aportan).
2. **Cómo se vive de verdad** — martes noviembre vs agosto; quién vive; coche sí/no **en prosa vivida** (sin repetir la nota 1–10).
3. **Mapa mental** — 2–4 topónimos glosados que organicen el municipio (microzonas).
4. **Mar / paseo vivido** — orilla de diario vs salida; marea/oleaje si ya está en fuentes.
5. **Invierno / verano** — sensación; **una** comparación climática con Mallorca (no tres). Cifras detalladas → capa/clima UI.
6. **Capa cultural / histórica / oficio** — Semana Santa, lonja, Sargadelos, Alcoa, indianos, As Catedrais… impacto al vivir.
7. **Vivienda (cualitativa)** — tipología, humedad, vecinos, microzona; **sin** €/m² ni A/B.
8. **Encaja / no / veredicto** — tradeoffs descriptivos; puede aludir a hospital/avión **una vez** como peaje, no como ficha.

### 4.2 Exclusivo de capa factual

Precio y TablaPrecios; servicios numéricos y Tiene/Falta; autonomía/coche chips; sanidad/aeropuerto/Palma textos 2026; `casaQueBuscar` / `mercadoReventa`; playaCotidiana modo técnico; mapa.

### 4.3 `vivir` (Frente a Mallorca — Vivir)

Mantener los 6 ejes útiles (invierno en casa, sin coche, integración, sanidad práctica, vuelos, tipología), pero **sin** recopiar minutos y sin re-listar sol/horas. Sanidad/vuelos: una frase de consecuencias, no la ficha.

---

## 5. Primer sublote recomendado

| Preferencia inicial | Confirmación auditoría |
|---|---|
| Barreiros + Foz | **Confirmado** |

**Por qué este par**

| Criterio | Barreiros | Foz |
|---|---|---|
| Distintos entre sí | Dispersión / 2ª residencia / playa larga | Villa de ría con autonomía cotidiana |
| Test vida cotidiana | Vacío enero vs mañana libre débil | Paseo/Rapadoira + capa biblioteca |
| Coche / dispersión | Alto | Bajo-medio en núcleo |
| Autonomía | BAJA-MEDIA (capa) | FUERTE (capa) |
| P4 suficiente | Muy alto (luces enero, As Catedrais, bloques 2000) | Alto (marisma, San Martiño, contraste villas) |
| Investigación externa para v1 | **No estrictamente** si se apoya en relato+capa; sí deseable para café/mercado concreto | Igual |

**Alternativa** (si se quiere contraste hospital): Burela + Barreiros. No preferida como primer test porque Burela ya tiene mucho P4 de oficio y el aprendizaje de “recortar capa” se ve mejor en Foz (villa “normal”) + Barreiros (extremo estacional).

**Archivos que tocaría el sublote** (sin tocarlos ahora)

- `web/src/lib/relatos-a-marina.ts` — claves `barreiros` y `foz` únicamente en la primera entrega.

---

## 6. Contrato ChatGPT → Cursor

1. ChatGPT entrega **bloques finales completos** por municipio (campos `RelatoMun` acordados).
2. Cursor **copia el texto exactamente**, salvo escapes/sintaxis TypeScript necesarios.
3. Cursor **no** resume, **no** “mejora” SEO, **no** añade hechos, **no** cambia cifras.
4. Antes de commit, Cursor **reporta conflictos** texto entregado ↔ datos v15 (`servicios`, `precioM2`, A/B, hospitalMin, aeropuertoMin, solHoras, etc.).
5. Si hay conflicto: **no commit** hasta que ChatGPT corrija o se decida explícitamente omitir la cifra (dejarla en capa).
6. Edición **quirúrgica** del archivo; **preservar EOL** (no renormalizar el `.ts` entero).
7. Fotos/pies: no inventar; si se reordenan captions, deben seguir coincidiendo con el archivo real.
8. Commit mensaje acordado en el bloque de implementación (no este).

---

## 7. Necesidades de investigación (no investigar ahora)

Leyenda: **YA** = soportado en repo (capa/relato) · **DES** = deseable no bloqueante · **NEC** = necesario investigar antes de una reescritura ambiciosa de escena cotidiana.

### Por municipio

| Municipio | YA SOPORTADO EN REPO | DESEABLE PERO NO NECESARIO | NECESARIO INVESTIGAR ANTES DE REESCRIBIR |
|---|---|---|---|
| O Vicedo | Playas, Fuciño, Estaca, peajes coche/servicios; PR-G156 en capa | Uso real FEVE apeadero; café concreto | Escena interior día de lluvia (local concreto) si se quiere prosa densa |
| Viveiro | Casco, Celeiro, Covas, Semana Santa, FEVE, Souto/San Roque | Nombre/día de mercado; biblioteca | No bloqueante para v1 si se acepta mercado genérico |
| Xove | Esteiro, Alcoa, capa biblioteca/piscina/San Bartolomé | FEVE utilidad; Morás/Lago en prosa | Unificar experiencia “desde San Bartolomé” vs playa (capa ya lo dice; no hace falta web) |
| Cervo | Sargadelos, San Cibrao, museo, Alcoa | Tren San Cibrao; café local | No bloqueante v1 |
| Burela | Lonja, hospital, playas; capa mercado/biblioteca/deporte/auditorio | Detalle comunidad caboverdiana (no ampliar sin fuente) | No bloqueante si se usa capa para cotidiano |
| Foz | Playas, marisma, San Martiño; capa biblioteca | Nombre mercado; deporte | **No** para sublote v1 |
| Barreiros | Playas, As Catedrais, vacío 2000, microzona capa | Diferenciar Arealonga/Altar/Coto/Remior; Lóngara | **No** para sublote v1 (P4 basta) |
| Ribadeo | Indianos, Eo, Illa Pancha, Jarrio/SERGAS, As Catedrais; capa equipamientos | Día/nombre mercado; estado “nuevo centro proyectado 2026” | Solo si se afirma operativo el centro nuevo — hoy capa dice no operativo |

### Transversal antes de cualquier commit de reescritura

- Alinear **servicios X/10** del relato con v15 (Viveiro, Cervo, Burela, Foz, Ribadeo desalineados hoy).
- Reparar strings rotos de precio en O Vicedo / Burela / Barreiros **sin** inventar: omitir cifra o usar solo v15.
- No reintroducir topes de presupuesto prohibidos por reglas de tono.

---

## 8. Archivos del sublote (referencia)

| Acción futura | Ruta |
|---|---|
| Reescritura prosa | `web/src/lib/relatos-a-marina.ts` (`barreiros`, `foz`) |
| Capa (no tocar en reescritura narrativa) | `web/src/data/municipios-a-marina.json` |
| Zona (solo si se homogeneiza después) | `web/src/components/RelatoAMarina.tsx` |
| Este plan | `docs/PLAN_EDITORIAL_A_MARINA_2026.md` |

---

## 9. Criterio de éxito del primer sublote (para el bloque de implementación)

- Lector entiende Barreiros y Foz **sin** mirar la ficha… y al mirar la ficha **no** siente déjà vu de cifras.
- Topónimos glosados a la primera.
- Reality toll claro sin tono de folleto.
- 0 hechos nuevos no soportados por repo o entrega ChatGPT contrastada.
- Diff quirúrgico; producto fuera de esos dos bloques intacto.
