# Fuentes para reescritura — Barreiros + Foz

**Bloque:** CURSOR_20 · **rama:** `revision-2026-09-21` · **HEAD base:** `9fea248`  
**Alcance:** solo extracción/documentación. **No** reescritura. **No** corrección de incidencias. **No** internet. **No** cambios a producto.

**Origen de citas:** `web/src/lib/relatos-a-marina.ts`, `web/src/data/municipios-a-marina.json`, `docs/PLAN_EDITORIAL_A_MARINA_2026.md`, `docs/AUDITORIA_EDITORIAL_RELATOS_2026.md`, `docs/P0_RESTANTES_POST_PRECIOS_2026.md`.

---

## 1. Reglas

- **Repo only.** Todo lo que sigue sale del repositorio; no hay hechos añadidos en esta extracción.
- **No hechos añadidos** por ChatGPT ni por Cursor en la futura reescritura si no están aquí o en la entrega contrastada.
- **Capa 2026 prevalece** para hechos actuales (precios, servicios, hospital, aeropuerto, clima numérico, autonomía, playa/paseo estructurados).
- **El relato actual es fuente de P4** (escena, topónimos, invierno/verano vividos, tradeoffs), **no autoridad** cuando contradice la capa.
- Distinción tipográfica en este documento:
  - Bloques bajo «CITA LITERAL» = texto del repo.
  - Bloques bajo «AUDITORÍA» = comentario de planificación; no inventan hechos nuevos.

---

## 2. Barreiros

### 2.1 Relato actual completo

> CITA LITERAL — objeto `barreiros` en `web/src/lib/relatos-a-marina.ts` (íntegro, sin resumir).

```ts
barreiros: {
 escala: "Playas y parroquias",
 abrir: [
 "Barreiros se entiende mejor en agosto que en enero. Unos tres mil habitantes repartidos en unos ocho kilómetros de playas —Arealonga, Altar, Coto, Remior— y parroquias con muchos bloques de apartamentos de los años 2000. As Catedrais quedan a unos cinco minutos. En invierno gran parte de esos bloques se vacían: es costa de segunda residencia más que villa de trabajo densa.",
 "Un martes de noviembre los servicios son 3/10 y la fibra, parcial: el coche organiza compra y ocio hacia Foz o Ribadeo. Quien vive aquí todo el año acepta orilla delante y villa de apoyo a diez o quince minutos. El Hospital da Mariña queda a unos veinticinco minutos. El aeropuerto de Asturias anda alrededor de los setenta —de los mejores de la zona tras Ribadeo—.",
 "En verano las playas y As Catedrais concentran afluencia, tráfico y aparcamiento justo: el impacto de vivir aquí es el de temporada alta, no el de una Semana Santa urbana. Quien compre junto a la orilla debe probar agosto; tierra adentro, hacia las parroquias, el silencio vuelve antes —y en enero, de verdad.",
 "Fuera de temporada Barreiros se queda quieto: calles de bloques vacíos, viento y Cantábrico. Si solo conoces un sábado de sol en los arcos, te llevas la imagen de folleto de la costa. Si has visto un martes de noviembre vacío, ya puedes decidir si quieres vivir a esa escala.",
 "Encaja mal como vivienda de todo el año si se necesita comercio y vecinos en enero. Encaja mejor como orilla de playa con Ribadeo o Foz cerca.",
 ],
 tiempo: [
 "Barreiros registra unas 1.920 horas de sol y unos 40 días despejados frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.000 milímetros en unos 143 días. Niebla alta; viento medio. El invierno es gris y vacío en muchos bloques; el verano también llovizna.",
 "El verano ronda 18,5 °C, fresco frente a Baleares. Las playas tienen agua entre 17 y 19 °C; As Catedrais invitan más al paseo entre arcos que al baño largo cuando el Cantábrico está bravo. Conviene probar marea, niebla y un enero quieto, no solo el sol de agosto.",
 ],
 vivir: [
 "El invierno en Barreiros se nota en los bloques de apartamentos: humedad, niebla alta, viento medio y un enero que deja calles quietas y muchas luces apagadas. En Mallorca muchas segundas residencias también se vacían, pero aquí el vacío de temporada define el municipio. Conviene preguntar por la fibra —es parcial—, por cuántas luces quedan encendidas en enero y por rastros de moho, no solo el sol de As Catedrais en agosto.",
 "El día a día sin coche casi no existe: los servicios son 3/10. El coche organiza compra y ocio hacia Foz o Ribadeo, a unos diez o quince minutos. En enero Barreiros se queda quieto —costa de segunda residencia más que villa de trabajo densa—. Quien viva junto a la orilla o cerca de As Catedrais notará afluencia, tráfico y aparcamiento justo en verano; tierra adentro, hacia las parroquias, el silencio vuelve antes —y en enero, de verdad.",
 "Llegar de fuera busca kilómetros de arena y arcos, no casco denso. Se oye gallego en las parroquias; el castellano basta para lo cotidiano, pero la vida social de invierno pasa por Foz o Ribadeo como villa de apoyo, no por vecinos estables en cada portal. Entre semana fuera de temporada manda el vacío; en verano playas y As Catedrais concentran temporada alta. Quien se decida solo tras un sábado de sol sin probar un martes de noviembre vacío se encontrará con otra escala.",
 "La sanidad de urgencia y especialidades no está en el municipio: el Hospital da Mariña queda a unos veinticinco minutos. Empadronarse aquí abre el médico de cabecera local; para hospital se conduce a Burela. Es aceptable en la comarca, no sanidad a pie.",
 "Mantener el vínculo con Mallorca pasa por el aeropuerto de Asturias, alrededor de los setenta minutos —de los mejores de la zona tras Ribadeo—; Santiago-Lavacolla anda hacia los ciento diez. En invierno el trayecto a menudo implica más logística. Conviene mirar el calendario real de vuelos del año: el acceso al avión es de los más razonables de A Mariña, a cambio de aceptar servicios 3/10 en el municipio.",
 "Predominan apartamentos de veraneo y viviendas en parroquias; hay poca obra nueva y fibra parcial. Hay que contar con ocupación de agosto, vacío de invierno, humedad y comunidad de vecinos estacional. Conviene comprobar la línea y el estado de la reforma. En un apartamento con escaleras o sin ascensor hay que imaginar la rutina dentro de diez años; orientación al mar y humedad mueven el precio tanto como los metros.",
 ],
 historia: [
 "As Catedrais —aunque el acceso más famoso se asocie a Ribadeo— marcan el paisaje inmediato: arcos de piedra, marea y una de las costas más fotografiadas de Galicia. Barreiros vive a cinco minutos de ese magnetismo; la afluencia define la temporada.",
 "El urbanismo de bloques de los 2000 explica el carácter de veraneo: plazas de aparcamiento, apartamentos y un invierno que deja calles quietas. Reinante y San Miguel son nombres de orilla y parroquia más que de casco histórico denso: lo que conviene saber es geográfica y de temporada, no de villa señorial.",
 ],
 fuera: [
 "Arealonga, Altar, Coto y Remior ofrecen kilómetros de arena: playa larga de diario cuando el Cantábrico deja. Un martes de junio la toalla cabe; un domingo de agosto, el coche busca cuneta.",
 "As Catedrais, a cinco minutos, son el gran paseo de acantilado y playa: arcos, marea y la foto turística que llena aparcamientos. Vivir cerca significa contar ese volumen en temporada.",
 "Foz cubre villa de ría; Ribadeo, casco indiano y A-8; Burela, hospital. El día a día pide coche casi siempre. Aquí la orilla es el activo; el comercio denso, no.",
 ],
 casa: [
 "Predominan apartamentos de veraneo y viviendas en parroquias; hay poca obra nueva y fibra parcial. Hay que contar con ocupación de agosto, vacío de invierno, humedad y comunidad de vecinos estacional. Conviene preguntar por la línea y por cuántas luces quedan encendidas en enero.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros—; el estado y la orientación al mar mueven el precio.",
 "Los servicios son 3/10. El Hospital da Mariña queda a unos veinticinco minutos. Asturias está a unos setenta; Santiago-Lavacolla, hacia los ciento diez. Quien acepte Foz o Ribadeo como villa de apoyo gana arena y arcos; quien necesite vecinos en enero, mira otra opción.",
 ],
 encaja: {
 si: [
 "Encaja para quien busque kilómetros de arena —Arealonga, Altar, Coto, Remior— y As Catedrais a unos cinco minutos, con el aeropuerto de Asturias alrededor de los setenta minutos —de los mejores de la zona tras Ribadeo— y precio asequible. Un martes de noviembre los servicios son 3/10 y la fibra, parcial: el coche organiza compra y ocio hacia Foz o Ribadeo. Quien acepte esa lógica —orilla de playa con villa de apoyo semanal— y priorice Cantábrico abierto frente a casco denso encontrará aquí unos ocho kilómetros de costa y parroquias. Reinante y San Miguel son nombres de orilla más que de plaza histórica.",
 "El clima sigue lejos de Mallorca: unas mil novecientas veinte horas de sol y unos cuarenta días despejados frente a las dos mil ochocientas horas y ciento veinte jornadas claras de la isla; niebla alta, verano fresco cerca de dieciocho grados y medio. Las playas tienen agua entre diecisiete y diecinueve grados; As Catedrais invitan más al paseo entre arcos que al baño largo cuando el Cantábrico está bravo. En verano playas y arcos concentran afluencia, tráfico y aparcamiento justo. Encaja mejor como orilla de temporada o segunda residencia que como vivienda de todo el año si se necesitan vecinos estables en enero: gran parte de los bloques de apartamentos de los años 2000 bajan mucho el volumen en invierno por la segunda residencia.",
 ],
 no: [
 "No encaja como vivienda de todo el año si se necesitan comercio denso, mesas abiertas en enero y servicios 6/10. Barreiros es costa de veraneo más que villa de trabajo: falta núcleo urbano completo; Foz y Ribadeo quedan a unos diez o quince minutos para lo diario. Viveiro, Burela y Ribadeo cubren vida densa. El Hospital da Mariña está a unos veinticinco minutos —aceptable en la comarca, no a pie—.",
 "Tampoco si agosto junto a As Catedrais debe ser silencioso: la afluencia define la temporada, y quien se decida solo con un sábado de sol sin probar un martes de noviembre vacío se encontrará con calles quietas, fibra parcial y coche para casi todo. El cielo de Baleares no está aquí; el gris de invierno sí.",
 ],
 veredicto:
 "Veredicto: Barreiros es playas y veraneo, no villa completa. Buscaría vivienda con fibra comprobada y acceso claro, lejos del atasco de As Catedrais en agosto, tras probar un martes de noviembre vacío y decidir si Foz o Ribadeo pueden ser la villa de apoyo. Se ganan arena, arcos a cinco minutos y Asturias a unos setenta; se aceptan servicios 3/10, hospital a veinticinco minutos e invierno quieto.",
 },
 fotoIdentidad: {
 src: "/fotos/a-marina/barreiros-identidad.jpg",
 pie: "Barreiros: casas junto al mar, con la sierra detrás",
 },
 fotosAbrir: [
 { src: "/fotos/a-marina/barreiros-catedrais.jpg", pie: "As Catedrais a minutos de Barreiros" },
 { src: "/fotos/a-marina/barreiros-playa.jpg", pie: "Playa larga en Barreiros" },
 ],
 fotosHistoria: [
 { src: "/fotos/a-marina/barreiros-villa.jpg", pie: "Núcleo y escala de Barreiros" },
 { src: "/fotos/a-marina/barreiros-san-miguel.jpg", pie: "San Miguel y orilla en Barreiros" },
 ],
 fotosFuera: [
 { src: "/fotos/a-marina/barreiros-reinante.jpg", pie: "Reinante, playa y costa de Barreiros" },
 { src: "/fotos/a-marina/barreiros-costa.jpg", pie: "Casa de indianos en la costa de Barreiros" },
 ],
 creditoFotos: credito,
 }
```

### 2.2 Datos estructurados 2026

> CITA LITERAL — fila `slug: "barreiros"` en `web/src/data/municipios-a-marina.json` (todos los campos presentes en el JSON).

**Nota de extracción:** los campos `casaQueBuscar` y `mercadoReventa` aparecen **truncados con `...` en el propio JSON del repo**; se copian tal cual.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `146354` |
| `A_3hab` | `202644` |
| `B_2hab` | `118209` |
| `B_3hab` | `163674` |
| `advertenciaMicrozona` | Municipio disperso: comprobar núcleo y distancia real a compra/salud; no trasladar la costa a toda vivienda. |
| `aeropuertoMin` | `70` |
| `aeropuertoPractico2026` | Asturias 92 km · 70 min (Palma: verano); A Coruña 117 km · 90 min (Palma: verano); Santiago 145 km · 110 min (Palma: casi todo el año) Tiempo histórico orientativo: ~70 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Asturias 92 km · 70 min (Palma: verano); A Coruña 117 km · 90 min (Palma: verano); Santiago 145 km · 110 min (Palma: casi todo el año) |
| `autonomiaCotidiana` | BAJA-MEDIA |
| `casaQueBuscar` | Distancia real a farmacia, compra y servicios; acceso fácil, aislamiento y ma... |
| `clase` | Intermedio |
| `comunicaciones` | A-8 / N-634; tren Renfe Ancho Métrico (antigua FEVE) |
| `comunicacionesNota10` | `6` |
| `cubiertos` | `165` |
| `dependenciaCocheTexto` | Alta en buena parte del municipio. |
| `despejados` | `40` |
| `estacionalidad2026` | Más residencial/vacacional y disperso; invierno reduce actividad. |
| `fibra` | Parcial |
| `franja` | A |
| `hospitalMin` | `25` |
| `hospitalPractico2026` | Hospital Público da Mariña, Burela |
| `hospitalPriv` |  |
| `hospitalPub` | 23 km · 25 min · Hospital da Mariña (Burela) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 23 km · 25 min · Hospital da Mariña (Burela); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `81` |
| `lat` | `43.529` |
| `lluviaDias` | `143` |
| `lluviaMm` | `1000` |
| `lon` | `-7.228` |
| `mapa` | 45_barreiros.png |
| `mercadoReventa` | Mercado estrecho o de muestra limitada: la salida depende mucho del producto.... |
| `microzonaPrecio` | `null` |
| `minBano` | `3` |
| `minCosta` | `3` |
| `municipio` | Barreiros |
| `n` | `45` |
| `niebla` | Alta |
| `obraNueva` | Poca |
| `pais` | España |
| `palmaDirecta2026` | Verano / Santiago (casi todo el año) · 110 min La programación aérea es variable; comprobar temporada y horario vigente. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Santiago (casi todo el año) · 110 min |
| `paseoCotidiano` | Arealonga y tramos costeros si se reside cerca; de lo contrario requieren coche. |
| `paseoPendienteTopografia` | `null` |
| `peajeRealidad` | Mucha costa y vivienda posible, pero coche y dispersión son el coste real. |
| `playaBano` | Arealonga / Altar / Coto |
| `playaCotidiana` | DEPENDE VIVIENDA |
| `playaCotidianaModo` | Costa extensa, pero una casa cerca de playa puede quedar lejos de servicios. |
| `precioM2` | `1732` |
| `provincia` | Lugo |
| `radioCotidiano` | Servicios básicos dispersos; la rutina depende mucho de la casa concreta. |
| `radioSalida` | Arealonga (~1,3 km), Lóngara (~800 m), As Pasadas y As Catedrais. |
| `sanidadPrimaria2026` | Atención primaria básica/local |
| `servicios` | `3` |
| `serviciosEstado` | VALIDADO — Galicia |
| `serviciosNota` | Falta: núcleo urbano (Foz / Ribadeo a 10-15 min) |
| `slug` | barreiros |
| `solHoras` | `1920` |
| `tempAgua` | 17-19 |
| `tempInvierno` | `9.5` |
| `tempVerano` | `18.5` |
| `transporteRelevante2026` | A-8 / N-634; tren FEVE Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital Público da Mariña, Burela. |
| `viento` | Media |
| `zona` | A Mariña |

**Campos históricos / auxiliares aún útiles para detectar contradicción con el relato**

| Campo | Valor | Uso |
|---|---|---|
| `servicios` | `3` | Coincide con relato «3/10» |
| `precioM2` | `1732` | Autoridad actual; CURSOR_14 registró P0 histórico ~1150 vs 1732; `casa` tiene prosa rota |
| `A_3hab` / `B_3hab` | `202644` / `163674` | Preferible solo TablaPrecios; no reintroducir en prosa |
| `hospitalMin` | `25` | Relato repite «veinticinco minutos» |
| `aeropuertoMin` | `70` | Relato «setenta» / Asturias |
| `solHoras` / `despejados` / `lluviaDias` / `lluviaMm` | `1920` / `40` / `143` / `1000` | Relato los enumera varias veces |
| `playaBano` | `Arealonga / Altar / Coto` | Relato añade también Remior |
| `fibra` | `Parcial` | Relato insiste; factual |

### 2.3 Plan editorial CURSOR_19

> CITA LITERAL — sección «### 3.7 Barreiros» de `docs/PLAN_EDITORIAL_A_MARINA_2026.md`.

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

**Necesidades de investigación (filas Barreiros + Foz del plan)**

| Municipio | YA SOPORTADO EN REPO | DESEABLE PERO NO NECESARIO | NECESARIO INVESTIGAR ANTES DE REESCRIBIR |
|---|---|---|---|
| Foz | Playas, marisma, San Martiño; capa biblioteca | Nombre mercado; deporte | **No** para sublote v1 |
| Barreiros | Playas, As Catedrais, vacío 2000, microzona capa | Diferenciar Arealonga/Altar/Coto/Remior; Lóngara | **No** para sublote v1 (P4 basta) |

**Transversal (CURSOR_19 §7):**
- Alinear servicios X/10 del relato con v15 (Foz desalineado: relato 5 vs v15 7).
- Reparar strings rotos de precio en Barreiros sin inventar: omitir cifra o usar solo v15.
- No reintroducir topes de presupuesto prohibidos por reglas de tono.


### 2.4 Material P4 a preservar

> AUDITORÍA — extraído del plan CURSOR_19 + lectura del relato; no inventado.

| Elemento | Preservar | Base en repo |
|---|---|---|
| Se entiende mejor en agosto que en enero | literal/concepto | relato `abrir` |
| ~8 km playas Arealonga, Altar, Coto, Remior | nombres | relato; capa lista Arealonga/Altar/Coto (+ Remior solo relato) |
| Bloques apartamentos años 2000 / vacío invierno | literal | relato `abrir`/`historia`/`vivir` |
| As Catedrais a ~5′ + afluencia temporada | concepto | relato + capa `radioSalida` |
| «Preguntar cuántas luces quedan encendidas en enero» | literal | relato `vivir`/`casa` |
| Reinante / San Miguel como orilla/parroquia no casco | concepto | relato `historia` + pies foto |
| Microzona dispersa / no trasladar costa a toda vivienda | concepto | capa `advertenciaMicrozona`, `playaCotidiana` |
| Lóngara, As Pasadas | nombres a glosar | capa `radioSalida` (no en relato) |
| Invierno quieto / segunda residencia vs todo el año | concepto | relato + capa `estacionalidad2026` |
| Foto pie «Casa de indianos…» | no convertir en historia sin fuente | `fotosFuera` pie |

### 2.5 Duplicaciones a evitar

> AUDITORÍA

- `servicios 3/10` repetido en abrir, vivir, casa, encaja, veredicto.
- Hospital ~25′ repetido en abrir, vivir, casa, encaja, veredicto.
- Aeropuerto Asturias ~70′ / Santiago ~110′ repetido (abrir, vivir, casa, encaja, veredicto).
- Cifras sol 1.920 / 40 despejados / Mallorca 2.800 / 120 en `tiempo` + `encaja.si`.
- Fibra parcial martilleada en varios bloques.
- Lista de playas + As Catedrais reiterada en fuera + encaja.
- Chips de coche/apoyo Foz-Ribadeo repetidos (sí narrar una vez como peaje; no como ficha).

### 2.6 Conflictos / incidencias

> AUDITORÍA — señalar, **no corregir** en este bloque.

1. **Prosa de precio rota** en `casa[1]`:  
   `La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros—; el estado y la orientación al mar mueven el precio.`  
   Artefacto de scrub; no es cifra usable.
2. **P0 histórico CURSOR_14** (`docs/AUDITORIA_EDITORIAL_RELATOS_2026.md`): precio relato ~1150 vs ficha 1732; prioridad URGENTE. Tras CURSOR_16 / `P0_RESTANTES_POST_PRECIOS_2026.md`: Barreiros marcado **sin P0 restante de precios**. No reintroducir 1150.
3. **Servicios:** relato 3/10 **coincide** con v15 `servicios: 3`.
4. **«precio asequible»** en `encaja.si` sin cifra: puede sonar a valoración de mercado; la autoridad es `precioM2: 1732` + TablaPrecios.
5. **Remior** aparece en relato; no en `playaBano` de capa (capa: Arealonga/Altar/Coto). Conservar nombre solo como P4 de relato o contrastar; no inventar metros.
6. **Dispersión / coche / segunda residencia — factual vs editorial**
   - **Factual (capa):** `dependenciaCocheTexto` Alta; `autonomiaCotidiana` BAJA-MEDIA; `estacionalidad2026` residencial/vacacional, invierno reduce actividad; `peajeRealidad` coche y dispersión; `advertenciaMicrozona`; `serviciosNota` falta núcleo urbano (Foz/Ribadeo 10-15 min); `fibra` Parcial.
   - **Editorial (relato):** «luces apagadas», «bloques de los 2000», contraste agosto/enero, «villa de apoyo», tono de segunda residencia. Preservar como P4 si no contradice capa.

**Auditoría adicional (CURSOR_14 ficha Barreiros)** — de `docs/AUDITORIA_EDITORIAL_RELATOS_2026.md`:

- P2: repite horas de sol; hospital también en capa; servicios X/10; mar/playa también en capa.
- P4: estructura completa vivir/mar/encaja; historia; Vivir; clima editorial.
- Lectura histórica: «P0 precio ~1150 vs 1732… cifra desactualizada es el riesgo principal.» (El mismo párrafo dice «Relato de ría/playa tranquila», tipología que encaja mejor con Foz; **no usar esa etiqueta** como brújula de Barreiros.)

### 2.7 Hechos no soportados (no inventar)

> AUDITORÍA — deseables/ausentes en repo.

- Nombre/horario de café, bar o mercado municipal concretos.
- Cultura/deporte locales con nombre propio.
- Utilidad cotidiana real del tren FEVE (capa advierte interpretar por utilidad, no existencia nominal).
- Diferenciación detallada Arealonga vs Altar vs Coto vs Remior (longitudes: capa da Arealonga ~1,3 km y Lóngara ~800 m; Remior sin medida en capa).
- Historia de «casa de indianos» más allá del pie de foto.
- Cualquier precio distinto de v15 / Idealista del mes en capa.

---

## 3. Foz

### 3.1 Relato actual completo

> CITA LITERAL — objeto `foz` en `web/src/lib/relatos-a-marina.ts` (íntegro, sin resumir).

```ts
foz: {
    escala: "Villa de ría y playa",
    abrir: [
      "Foz se siente villa de veraneo cantábrica sin alarde. Unos diez mil habitantes: paseo, ría, playas urbanas —A Rapadoira— y abiertas —Llas, Peizás—, marisma y puente sobre el agua. San Martiño de Mondoñedo, a unos cinco minutos, aporta la basílica de San Martiño —antigua sede episcopal, considerada una de las iglesias catedralicias más antiguas de España—; Mondoñedo, a unos veinte, amplía la capa histórica del interior. Es villa tranquila y asequible frente a Ribadeo o Viveiro.",
      "Un martes de noviembre el centro de salud, el súper y el comercio cubren la semana básica. Quien vive aquí es gente local y veraneantes que vuelven al paseo. Los servicios son 5/10 y hay fibra. El Hospital da Mariña queda a unos veinte minutos. El aeropuerto de Asturias anda alrededor de los ochenta minutos; Santiago, hacia los ciento diez. Para lo diario se camina; para el hospital, se conduce.",
      "En verano el paseo, A Rapadoira y las playas abiertas reciben veraneo gallego-castellano: tráfico, toallas y terrazas. El volumen sube sin alcanzar el atasco de As Catedrais en los peores días. Vivir junto al paseo significa contar con semanas más ruidosas; hacia la marisma o el interior, el silencio vuelve antes.",
      "Fuera de agosto Foz vuelve a ser una villa calmada. Primavera y otoño dejan la ría más quieta y el verde intenso. Si solo conoces un sábado de sol, te llevas la imagen de folleto de A Rapadoira. Si has visto un noviembre de niebla, ya puedes decidir si aceptas el gris lucense.",
      "Encaja para quien quiera ría y playa a precio asequible, sin necesitar el casco indiano de Ribadeo ni la Semana Santa de Viveiro.",
    ],
    tiempo: [
      "Foz suma unas 1.900 horas de sol y unos 40 días despejados frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.000 milímetros en unos 145 días. Niebla alta; viento medio. De octubre a marzo el cielo pesa; de junio a septiembre la terraza se usa, aunque también llovizna.",
      "El verano ronda 18,5 °C, fresco frente a Baleares. La ría y A Rapadoira permiten baño más usable que el Cantábrico abierto; Llas y Peizás piden días de mar más llana. El agua anda entre 17 y 19 °C. Conviene probar niebla y un día de temporada en el paseo, no solo el sol de julio.",
    ],
    vivir: [
      "El invierno en Foz se nota en la vivienda junto al paseo o la marisma: humedad, niebla alta y un noviembre gris lucense. En Mallorca muchas viviendas casi no piensan en moho; aquí conviene mirar aislamiento y orientación un día de niebla, no solo el sol de A Rapadoira. La terraza que en agosto parece el centro de la vida se usa menos entre noviembre y febrero.",
      "El día a día sin coche es viable para lo básico: un martes de noviembre el centro de salud, el súper y el comercio cubren la semana; los servicios son 5/10 y hay fibra. En enero Foz vuelve a ser una villa calmada —no se apaga—, pero tampoco es la densidad de Ribadeo. Quien viva junto al paseo o a A Rapadoira notará semanas más ruidosas en verano; hacia la marisma o el interior, el silencio vuelve antes.",
      "Llegar de fuera es habitual: gente local y veraneantes que vuelven al paseo. Se oye gallego en el comercio y en el ayuntamiento; el castellano basta para lo cotidiano. Entre semana manda la villa tranquila; en verano el paseo y las playas reciben veraneo gallego-castellano —tráfico, toallas, terrazas— sin alcanzar el atasco de As Catedrais en los peores días. Si solo buscas el sábado de sol, te llevas la imagen de folleto de A Rapadoira. Si buscas casco indiano o Semana Santa, mira Ribadeo o Viveiro.",
      "La sanidad de urgencia y especialidades no está a pie: el Hospital da Mariña queda a unos veinte minutos. En Foz hay centro de salud para lo diario. Empadronarse aquí abre el médico de cabecera local; para hospital se conduce a Burela. No es el extremo de O Vicedo, pero sí asumir que la sanidad comarcal no está a cinco minutos.",
      "Mantener el vínculo con Mallorca pasa por el aeropuerto de Asturias, alrededor de los ochenta minutos, o Santiago hacia los ciento diez. En invierno el trayecto a menudo implica más logística. Conviene mirar el calendario real de vuelos del año: mejor que el oeste de la comarca, pero no el límite de una hora de Ribadeo.",
      "El entorno del paseo ofrece pisos y viviendas de veraneo; las afueras, más parcela. Hay poca obra nueva y fibra. Junto a la orilla hay que contar con ocupación de agosto y humedad; hacia la marisma, acceso y orientación. Conviene ver un noviembre húmedo, no solo el sol del anuncio. En un piso o casa con escaleras hay que imaginar la rutina dentro de diez años; la terraza útil es la que recibe sol de invierno, no solo la que mira la ría en foto.",
    ],
    historia: [
      "San Martiño de Mondoñedo —a cinco minutos— es el hilo antiguo: basílica vieja, piedra y un relato eclesiástico que precede a la villa de veraneo. Mondoñedo, a unos veinte minutos, amplía la capa histórica del interior lucense.",
      "Foz moderna creció con paseo, ría y temporada: villa cantábrica de ocio y residencia más que de puerto industrial. La marisma y el puente sobre la ría explican el paisaje cotidiano —agua quieta, aves, el contraste con el Cantábrico abierto de Llas—.",
    ],
    fuera: [
      "A Rapadoira es la playa urbana de diario: arena, paseo y ría abrigada a minutos. Un martes de junio cabe la toalla; un domingo de agosto, cuesta aparcar.",
      "Llas y Peizás abren arenales más expuestos: más oleaje, más Cantábrico abierto. El paseo y la ría permiten kilómetros sin coche en días buenos; la marisma añade otra escala de orilla quieta.",
      "San Martiño de Mondoñedo cubre patrimonio cercano. Barreiros y As Catedrais quedan hacia el este; Burela, hospital y lonja hacia el oeste. Aquí la orilla de diario es A Rapadoira; la frontera indiana, Ribadeo.",
    ],
    casa: [
      "El entorno del paseo ofrece pisos y viviendas de veraneo; las afueras, más parcela. Hay poca obra nueva y fibra. Junto a la orilla hay que contar con ocupación de agosto y humedad; hacia la marisma, acceso y orientación. Conviene ver un noviembre húmedo, no solo el sol del anuncio.",
      "Según Idealista (agosto de 2026), el precio medio ronda 1.790 €/m². Tres habitaciones en franja asequible se estiman alrededor de 161.000 euros a partir de ese €/m² —estimación, no anuncio real—. La franja media puede ser piso reformado cerca del paseo o vivienda con más espacio.",
      "Los servicios son 5/10. El Hospital da Mariña queda a unos veinte minutos. Asturias está a unos ochenta; Santiago-Lavacolla, hacia los ciento diez. Quien acepte esa distancia gana ría y precio; quien necesite hospital a pie, mira Burela.",
    ],
    encaja: {
      si: [
        "Encaja para quien quiera villa de ría y playa tranquila en el centro-este de A Mariña: paseo, A Rapadoira —playa urbana—, Llas y Peizás —arenales más abiertos—, marisma y puente sobre la ría, con unos diez mil habitantes y precio según Idealista de agosto de 2026 alrededor de 1.790 €/m². Un martes de noviembre el centro de salud, el súper y el comercio cubren la semana básica; los servicios son 5/10 y hay fibra. San Martiño de Mondoñedo —basílica y antigua sede episcopal, considerada una de las iglesias catedralicias más antiguas de España— queda a unos cinco minutos; Mondoñedo, a unos veinte, amplía la capa histórica del interior. Quien priorice ría usable y veraneo calmado frente al casco indiano de Ribadeo o la Semana Santa de Viveiro encontrará aquí el equilibrio de villa cantábrica de ría.",
        "El clima es el de la Mariña: unas mil novecientas horas de sol y unos cuarenta días despejados frente a las dos mil ochocientas horas y ciento veinte jornadas claras de Mallorca; niebla alta, verano fresco cerca de dieciocho grados y medio. La ría y A Rapadoira permiten baño más usable que el Cantábrico abierto; Llas y Peizás piden días de mar más llana; el agua anda entre diecisiete y diecinueve grados. En verano el paseo y las playas reciben veraneo gallego-castellano —tráfico, toallas, terrazas— sin alcanzar el atasco de As Catedrais en los peores días. Fuera de agosto Foz vuelve a ser una villa calmada. Encaja si has visto un noviembre gris y siga queriendo esa orilla de ría.",
      ],
      no: [
        "No encaja si se busca casco indiano, Semana Santa de interés internacional o hospital a pie. Ribadeo cubre frontera y As Catedrais; Viveiro, muralla y Covas; Burela, el Hospital da Mariña a cinco minutos. Aquí el comarcal queda a unos veinte minutos. Tampoco si se necesita villa de servicios 7/10: Foz resuelve lo básico, no la densidad de Ribadeo.",
        "Tampoco si agosto junto al paseo debe ser silencioso: Foz recibe veraneo en la orilla, y quien viva frente a A Rapadoira notará semanas más ruidosas. El aeropuerto de Asturias anda alrededor de los ochenta minutos; Santiago, hacia los ciento diez —mejor que el oeste de la comarca, pero no el límite de una hora de Ribadeo—. Y si se busca el sol de Baleares, el cielo lucense no lo entrega.",
      ],
      veredicto:
        "Veredicto: Foz es la villa de ría y playa equilibrada del centro-este de A Mariña. Buscaría tres habitaciones caminables a paseo y comercio —franja asequible alrededor de ciento cincuenta y dos mil euros—, fuera del tramo más ocupado de A Rapadoira en agosto, tras probar niebla y un día de temporada en el paseo. Se ganan ría, playas y precio; se aceptan hospital a veinte minutos, aeropuerto a unos ochenta y el gris cantábrico.",
    },
    fotosAbrir: [
      { src: "/fotos/a-marina/foz-ria.jpg", pie: "Ría de Foz" },
      { src: "/fotos/a-marina/foz-playa.jpg", pie: "A Rapadoira u otra playa urbana de Foz" },
    ],
    fotosHistoria: [
      { src: "/fotos/a-marina/foz-villa.jpg", pie: "Villa de Foz hacia el paseo" },
    ],
    fotosFuera: [
      { src: "/fotos/a-marina/foz-paseo.jpg", pie: "Paseo marítimo de Foz" },
      { src: "/fotos/a-marina/foz-marisma.jpg", pie: "Marisma y orilla de la ría en Foz" },
    ],
    creditoFotos: credito,
  }
```

### 3.2 Datos estructurados 2026

> CITA LITERAL — fila `slug: "foz"` en `web/src/data/municipios-a-marina.json`.

**Nota:** `casaQueBuscar` / `mercadoReventa` truncados con `...` en el JSON del repo; se copian tal cual.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `151255` |
| `A_3hab` | `209430` |
| `B_2hab` | `122168` |
| `B_3hab` | `169155` |
| `advertenciaMicrozona` | `null` |
| `aeropuertoMin` | `80` |
| `aeropuertoPractico2026` | Asturias 106 km · 80 min (Palma: verano); A Coruña 116 km · 85 min (Palma: verano); Santiago 146 km · 110 min (Palma: casi todo el año) Tiempo histórico orientativo: ~80 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Asturias 106 km · 80 min (Palma: verano); A Coruña 116 km · 85 min (Palma: verano); Santiago 146 km · 110 min (Palma: casi todo el año) |
| `autonomiaCotidiana` | FUERTE |
| `casaQueBuscar` | Vivienda cómoda y accesible, 2–3 dormitorios, exterior, servicios cotidianos ... |
| `clase` | Intermedio |
| `comunicaciones` | A-8 / N-642; tren Renfe Ancho Métrico (antigua FEVE) |
| `comunicacionesNota10` | `6` |
| `cubiertos` | `165` |
| `dependenciaCocheTexto` | Baja-media en núcleo; coche para hospital y costa más lejana. |
| `despejados` | `40` |
| `estacionalidad2026` | Más vacacional que Burela, pero con servicios y biblioteca activos fuera de verano. |
| `fibra` | Sí |
| `franja` | A |
| `hospitalMin` | `20` |
| `hospitalPractico2026` | Hospital Público da Mariña, Burela |
| `hospitalPriv` |  |
| `hospitalPub` | 17 km · 20 min · Hospital da Mariña (Burela) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 17 km · 20 min · Hospital da Mariña (Burela); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `81` |
| `lat` | `43.569` |
| `lluviaDias` | `145` |
| `lluviaMm` | `1000` |
| `lon` | `-7.256` |
| `mapa` | 44_foz.png |
| `mercadoReventa` | Mercado intermedio: base residencial propia y/o demanda exterior. Priorizar u... |
| `microzonaPrecio` | `null` |
| `minBano` | `3` |
| `minCosta` | `2` |
| `municipio` | Foz |
| `n` | `44` |
| `niebla` | Alta |
| `obraNueva` | Poca |
| `pais` | España |
| `palmaDirecta2026` | Verano / Santiago (casi todo el año) · 110 min La programación aérea es variable; comprobar temporada y horario vigente. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Santiago (casi todo el año) · 110 min |
| `paseoCotidiano` | Rapadoira–Llas y frente marítimo. |
| `paseoPendienteTopografia` | `null` |
| `peajeRealidad` | Playa muy cotidiana a cambio de mayor presión vacacional y menor autonomía sanitaria que Burela. |
| `playaBano` | A Rapadoira / Llas / Peizás |
| `playaCotidiana` | SÍ |
| `playaCotidianaModo` | A Rapadoira (~340 m) es urbana, protegida y conectada al paseo; Llas (~760 m) amplía la caminata. |
| `precioM2` | `1790` |
| `provincia` | Lugo |
| `radioCotidiano` | Núcleo con comercio, salud, biblioteca y servicios; playa integrada en la villa. |
| `radioSalida` | Llas y Peizás permiten pasar de costa urbana a tramos más abiertos/naturales. |
| `sanidadPrimaria2026` | Atención primaria local |
| `servicios` | `7` |
| `serviciosEstado` | VALIDADO — Galicia |
| `serviciosNota` | Tiene: playas urbanas, paseo. Falta: instituto de FP |
| `slug` | foz |
| `solHoras` | `1900` |
| `tempAgua` | 17-19 |
| `tempInvierno` | `9.5` |
| `tempVerano` | `18.5` |
| `transporteRelevante2026` | A-8 / N-642; tren FEVE Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital Público da Mariña, Burela. |
| `viento` | Media |
| `zona` | A Mariña |

**Campos históricos / auxiliares para contradicción**

| Campo | Valor v15 | Relato actual |
|---|---|---|
| `servicios` | `7` | Repite **5/10** (abrir, vivir, casa, encaja) — **conflicto** |
| `precioM2` | `1790` | Relato cita 1.790 (casa, encaja.si) — coincide con capa |
| `A_3hab` | `209430` | `casa` estima ~161.000; **veredicto** «alrededor de ciento cincuenta y dos mil» — **conflicto / cifra antigua** |
| `hospitalMin` | `20` | Relato «veinte minutos» — alineado |
| `aeropuertoMin` | `80` | Relato «ochenta» Asturias — alineado |
| `solHoras` | `1900` | Relato 1.900 — alineado |
| `fibra` | `Sí` | Relato «hay fibra» — alineado |
| `autonomiaCotidiana` | `FUERTE` | Relato describe caminable lo básico — coherente en tono |
| `playaCotidiana` | `SÍ` + modo Rapadoira/Llas | Relato desarrolla — P4 + factual |

### 3.3 Plan editorial CURSOR_19

> CITA LITERAL — sección «### 3.6 Foz» de `docs/PLAN_EDITORIAL_A_MARINA_2026.md`.

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

### 3.4 Material P4 a preservar

> AUDITORÍA

| Elemento | Preservar | Base |
|---|---|---|
| Villa de ría/paseo sin alarde; contraste Ribadeo/Viveiro | concepto | `abrir` |
| A Rapadoira vs Llas / Peizás (abrigada vs abierta) | concepto | relato + capa modo playa |
| Marisma + puente | concepto | `historia`/`fuera` |
| San Martiño de Mondoñedo (basílica / antigua sede) | literal | `abrir`/`historia` |
| Mondoñedo ~20′ | nombre | relato |
| Veraneo gallego-castellano en paseo (menor que As Catedrais) | concepto | `abrir`/`vivir` |
| Noviembre niebla vs sábado de sol en Rapadoira | literal/concepto | `abrir` |
| Tipología paseo vs marisma/afueras | concepto | `vivir`/`casa` |
| Biblioteca activa fuera de verano | concepto a incorporar | capa `radioCotidiano` + `estacionalidad2026` (no en relato) |

### 3.5 Duplicaciones a evitar

> AUDITORÍA

- `servicios 5/10` (además **incorrecto** vs v15 7) en abrir/vivir/casa/encaja.
- Hospital 20′ + aero 80′/110′ repetidos.
- Precio 1.790 €/m² en casa + encaja.si (dejar a TablaPrecios).
- Estimaciones A_3hab inconsistentes en casa (~161k) y veredicto (~152k).
- Clima Mallorca (1.900 h / 40 despejados / 2.800 / 120) en tiempo + encaja.si.
- Lista playas + San Martiño reiterada en abrir + encaja.si.

### 3.6 Conflictos / incidencias

> AUDITORÍA — señalar, no corregir.

1. **Servicios relato 5 vs v15 7** (CURSOR_19). En `encaja.no` además dice «Tampoco si se necesita villa de servicios 7/10: Foz resuelve lo básico…» — choca con la capa que ya asigna 7.
2. **Franja asequible:** veredicto ~152.000 € vs capa `A_3hab` 209.430; casa ~161.000 — no usar ninguna como autoridad narrativa; omitir o alinear solo a v15 si se cita.
3. **P0 precios:** `docs/P0_RESTANTES_POST_PRECIOS_2026.md` marca Foz **sin** P0 restante (el 1.790 del relato coincide con capa). El problema restante es **servicios** + **A_3hab en prosa**, no el €/m².
4. **Auditoría CURSOR_14** (tabla + P3): Foz prioridad ALTA; P1 «cerca/a un paso»; P2 repite €/m² y horas de sol; P3 lenguaje vago «tranquilo» (cita: «Es villa tranquila y asequible frente a Ribadeo o Viveiro»).
5. **Ría / villa / paseo / autonomía — factual vs editorial**
   - **Factual:** `autonomiaCotidiana` FUERTE; `dependenciaCocheTexto` Baja-media en núcleo; `playaCotidiana` SÍ; `paseoCotidiano` Rapadoira–Llas; `radioCotidiano` comercio/salud/biblioteca; `estacionalidad2026` más vacacional que Burela pero servicios/biblioteca activos; `peajeRealidad` playa cotidiana vs presión vacacional y menor autonomía sanitaria que Burela; `serviciosNota` Tiene playas urbanas/paseo, Falta instituto FP.
   - **Editorial:** «sin alarde», «veraneo gallego-castellano», contraste indiano/Semana Santa, «villa calmada» fuera de agosto, marisma con aves. Preservar tono sin contradecir autonomía FUERTE ni servicios 7.

### 3.7 Hechos no soportados (no inventar)

> AUDITORÍA

- Nombre/día de mercado municipal concreto.
- Nombre de café habitual.
- Instalaciones deportivas concretas (FALTA HECHO/FUENTE).
- Utilidad diaria detallada del FEVE (solo existencia en capa + aviso de interpretación).
- Afirmar servicios 5/10 (contradice v15).
- Afirmar A_3hab ~152k o ~161k si no se recalcula desde capa (autoridad: 209430 u omitir).
- Detalle ornitológico de la marisma más allá de «aves» del relato.

---

## 4. Estructura final prevista

> CITA LITERAL — `docs/PLAN_EDITORIAL_A_MARINA_2026.md` §4.

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

---

## 5. Contrato de implementación

> CITA LITERAL — `docs/PLAN_EDITORIAL_A_MARINA_2026.md` §6.

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

**Archivo a editar en la implementación futura (no ahora):** `web/src/lib/relatos-a-marina.ts` — claves `barreiros` y `foz` únicamente.

---

## 6. Checklist para ChatGPT

### Barreiros

- [ ] **Escena** de apertura (agosto vs enero / bloques / orilla) sin chips.
- [ ] **Vida cotidiana** vivida: coche hacia Foz/Ribadeo; vacío enero; sin inventar café/mercado.
- [ ] **Mapa mental:** playas + parroquias + As Catedrais + (opcional) Lóngara/As Pasadas glosados.
- [ ] **Mar/paseo** vivido; marea en arcos; no duplicar `playaCotidiana` técnico.
- [ ] **Invierno/verano:** luces enero vs afluencia; **una** mención Mallorca como sensación, no tabla de horas.
- [ ] **Historia/oficio:** urbanismo 2000 + magnetismo As Catedrais; no inventar indianos.
- [ ] **Casa cualitativa:** fibra parcial, vecinos estacionales, humedad, orientación; **sin** €/m² ni «000 euros».
- [ ] **Tradeoff** Encaja: segunda residencia / todo el año; aero 70′ como ventaja opcional **una vez**.
- [ ] **No duplicar** servicios 3/10, hospital 25′, aero, sol/mm en tres bloques.
- [ ] **No inventar** hechos de §2.7.

### Foz

- [ ] **Escena** villa de ría/paseo (Rapadoira, marisma, puente).
- [ ] **Vida cotidiana:** martes noviembre caminable; usar capa biblioteca si se menciona equipamiento; sin inventar mercado.
- [ ] **Mapa mental:** Rapadoira / Llas-Peizás / marisma / San Martiño.
- [ ] **Mar/paseo** abrigado vs abierto.
- [ ] **Invierno/verano:** niebla vs veraneo paseo; una Mallorca.
- [ ] **Historia:** San Martiño + Foz moderna de temporada (sin hinchar).
- [ ] **Casa cualitativa:** paseo vs marisma; ocupación agosto; **sin** €/m² ni A_3hab inventado.
- [ ] **Tradeoff:** autonomía fuerte vs hospital 20′ vs Ribadeo/Burela/Viveiro; **servicios según v15 (=7)** si se cita nota, o mejor no citar nota.
- [ ] **No duplicar** chips precio/hospital/aero/clima.
- [ ] **No inventar** hechos de §3.7; **no** reponer servicios 5 ni ~152k.

---

## Apéndice — matriz sublote (CURSOR_19 §5)

| Criterio | Barreiros | Foz |
|---|---|---|
| Distintos entre sí | Dispersión / 2ª residencia / playa larga | Villa de ría con autonomía cotidiana |
| Test vida cotidiana | Vacío enero vs mañana libre débil | Paseo/Rapadoira + capa biblioteca |
| Coche / dispersión | Alto | Bajo-medio en núcleo |
| Autonomía | BAJA-MEDIA (capa) | FUERTE (capa) |
| Investigación externa v1 | No estrictamente | No estrictamente |
