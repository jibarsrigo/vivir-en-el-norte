# Fuentes para reescritura — Viveiro + Burela

**Bloque:** CURSOR_22 · **rama:** `revision-2026-09-21` · **HEAD base:** `4bf0bf8`  
**Alcance:** solo extracción/documentación. **No** reescritura. **No** corrección. **No** internet. **No** cambios a producto.

**Origen:** `web/src/lib/relatos-a-marina.ts`, `web/src/data/municipios-a-marina.json`, `docs/PLAN_EDITORIAL_A_MARINA_2026.md`, `docs/AUDITORIA_EDITORIAL_RELATOS_2026.md`, `docs/P0_RESTANTES_POST_PRECIOS_2026.md`.

**Contexto:** piloto Barreiros+Foz ya implementado (CURSOR_21). Este paquete prepara el siguiente sublote: villa histórica/turística (Viveiro) vs núcleo funcional/hospitalario/puerto (Burela).

---

## 1. Reglas

- **Repo only.** Sin hechos añadidos en esta extracción.
- **Capa 2026 prevalece** para hechos actuales (precios, servicios, hospital, aeropuerto, clima numérico, autonomía, playa/paseo).
- **Relato actual = fuente de P4**, no autoridad si contradice la capa.
- **Barreiros/Foz (sección 5)** = referencia de **densidad y nivel editorial** post-piloto, **no** plantilla para copiar frases.
- Tipografía: «CITA LITERAL» = repo · «AUDITORÍA» = planificación (no inventa hechos).

---

## 2. Viveiro

### 2.1 Relato actual completo

> CITA LITERAL — objeto `viveiro` en `web/src/lib/relatos-a-marina.ts` (íntegro).

```ts
viveiro: {
    escala: "Villa de ría con casco",
    abrir: [
      "Viveiro se siente villa de verdad. Unos quince mil habitantes en la Mariña occidental: casco amurallado con la Porta de Carlos V —arco renacentista de entrada—, calles de piedra, el puerto de Celeiro —referencia de merluza del pincho—, ría abrigada y Covas, la playa larga y urbana a pocos minutos. Es la villa con más vida propia todo el año en este tramo oeste de la comarca: mesas abiertas en enero, lonja, comercio y un ritmo que no depende solo del veraneo.",
      "Un martes de noviembre se compra, se va al centro de salud y se camina el casco sin depender de Burela para lo diario. Quien vive aquí es gente local, de pesca y de villa, y veraneantes que vuelven a Covas. Los servicios alcanzan 6/10 en nuestra escala y hay fibra. El Hospital da Mariña queda a unos veinticinco minutos desde el casco. El aeropuerto anda alrededor de los cien minutos según ruta —Santiago-Lavacolla o Asturias, según vuelo—; los enlaces con Palma cambian de temporada, así que conviene comprobar la programación vigente. Para lo diario no hace falta coche; para el hospital y el avión, sí.",
      "El tráfico es de villa casi todo el año. En julio y agosto Covas y el paseo se llenan: más toallas, más coches, más terrazas. El volumen sube, pero no apaga la villa de trabajo: Celeiro sigue siendo puerto de oficio. Quien busque silencio absoluto de invierno lo encontrará hacia las afueras; quien busque café de enero en el casco, también.",
      "La Semana Santa, declarada de interés turístico internacional, corta calles, concentra procesiones, ruido y mucha gente durante varios días: quien viva en el casco debe contarlas como parte del calendario, no como excepción. El resto del año el tren de Renfe Ancho Métrico —la antigua FEVE, vía estrecha hacia Ferrol y Oviedo— y la lonja marcan otro ritmo, más quieto y más local.",
      "Primavera y otoño son buenas épocas para conocerlo: niebla que entra por la ría, eucaliptos del Souto da Retorta, mirador de San Roque. Si solo conoces un sábado soleado, te llevas la imagen de folleto del casco. Si has visto procesiones y un noviembre, ya puedes decidir si de verdad quieres vivir aquí.",
    ],
    tiempo: [
      "Si vienes de Baleares, el cielo pide ojos abiertos. Viveiro suma unas 1.850 horas de sol y unos 40 días despejados frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.150 milímetros en unos 150 días; la llovizna también aparece en verano. Niebla alta; viento medio. Son cifras orientativas de comarca, no la serie de una estación local: la ría suele amansar el viento respecto a la costa abierta de Xove. De octubre a marzo el gris pesa; de junio a septiembre la terraza se usa, aunque no con el cielo de la isla.",
      "El verano ronda 18,5 °C, con máximas cerca de 22 °C y casi ningún día sobre 30 °C: se gana frescura frente al Mediterráneo. Covas tiene agua de ría más usable que el Cantábrico abierto —en verano, en un rango orientativo de verano hacia 17–19 °C como rango orientativo—: baño corto calmado cuando el mar abierto no invita. Conviene probar un frente de niebla y un día de Semana Santa, no solo un sábado de sol en Covas.",
    ],
    vivir: [
      "El invierno en Viveiro se nota en el piso de piedra del casco o junto a Covas: humedad de ría, niebla alta y un cielo de unas 1.850 horas de sol frente a Mallorca. Conviene mirar aislamiento y rastros de moho un frente de niebla de noviembre, no solo un sábado de sol en Covas. La terraza que en agosto parece el centro de la vida se usa menos entre noviembre y febrero; junto a Covas hay que contar con salitre suave de ría y ocupación de agosto.",
      "El día a día sin coche es viable en el casco: un martes de noviembre se compra, se va al centro de salud y se camina sin depender de Burela para lo diario. Los servicios alcanzan 6/10 en nuestra escala y hay fibra. En enero hay mesas abiertas, lonja y comercio —la villa con más vida propia todo el año en este tramo oeste—. Quien busque silencio absoluto lo encontrará hacia las afueras; quien viva en el casco debe contar la Semana Santa —interés turístico internacional— como parte del calendario: procesiones, ruido y aparcamiento difícil varios días.",
      "Llegar de fuera es habitual: gente local, de pesca y de villa, y veraneantes que vuelven a Covas. Se oye gallego en el casco, en Celeiro y en el ayuntamiento; el castellano basta para lo cotidiano. Entre semana manda la villa de trabajo; en julio y agosto sube el volumen en Covas y el paseo. El tren de Renfe Ancho Métrico —la antigua FEVE, vía estrecha hacia Ferrol y Oviedo— marca otro ritmo. Si solo buscas el sábado soleado, te llevas la imagen de folleto del casco. Si buscas vecinos todo el año, también —en escala de villa amurallada, no de capital.",
      "La sanidad de urgencia y especialidades no está a pie: el Hospital da Mariña queda a unos veinticinco minutos desde el casco. En Viveiro hay centro de salud para lo diario. Empadronarse aquí abre el médico de cabecera local; para hospital se conduce a Burela, y conviene comprobar el hospital de referencia que asigna el Sergas según el empadronamiento. No es aislamiento del extremo oeste, pero sí asumir que la sanidad comarcal no está en la misma calle que la Porta de Carlos V.",
      "Mantener el vínculo con Mallorca pasa por un aeropuerto alrededor de los cien minutos según ruta —Santiago-Lavacolla o Asturias, según vuelo—. En invierno el trayecto a menudo implica más logística. Los enlaces con Palma cambian de temporada en temporada: conviene comprobar la programación vigente del año en que se decida, no solo la de agosto en Covas. Para el avión el coche sigue siendo necesario.",
      "El casco ofrece pisos y viviendas de piedra; hacia Covas y las afueras, tipologías más abiertas. Hay poca obra nueva y fibra. En el casco hay que contar con Semana Santa, humedad y aparcamiento; junto a Covas, ocupación de agosto. En un piso con escaleras o sin ascensor hay que imaginar la rutina dentro de diez años; el estado de la reforma importa más que el metro solo. La terraza útil es la que recibe sol de invierno, no solo la que mira la ría en foto.",
    ],
    historia: [
      "La Porta de Carlos V y el recinto amurallado explican Viveiro como villa histórica, no solo como puerto: piedra, arco y calles que concentran el casco. Celeiro sostiene la ficha marinero con la merluza del pincho y la lonja —trabajo que sigue, no un pueblo vacío de foto—.",
      "El Souto da Retorta —eucaliptos gigantes— y el Monte San Roque —mirador— añaden capa de monte cercano: la tarde que no es solo ría. La Semana Santa de interés turístico internacional es el hilo cultural que más impacta al vivir: procesiones, ciudad ocupada y aparcamiento difícil en fechas concretas.",
    ],
    fuera: [
      "Si solo hay tiempo para un baño cerca, ese baño es Covas: arena larga en ría abrigada, a minutos del casco. Un martes de junio puedes tender la toalla con calma; un domingo de agosto el paseo se llena. Area y Sacido completan orillas cuando apetece cambiar de registro.",
      "Celeiro permite una tarde de puerto de trabajo: cajas, olor a mar y el ritmo de quien no cierra la temporada. No es boulevard de veraneo; es lonja.",
      "El Souto da Retorta y San Roque dan paseo y vistas cuando la ría no invita. Burela cubre hospital; As Catedrais y Ribadeo quedan hacia el este en un trayecto más largo. Aquí la orilla de diario es Covas; la ciudad grande, no.",
    ],
    casa: [
      "El casco ofrece pisos y viviendas de piedra; hacia Covas y las afueras, tipologías más abiertas. Hay poca obra nueva y fibra. En el casco hay que contar con Semana Santa, humedad y aparcamiento; junto a Covas, ocupación de agosto y salitre suave de ría.",
      "El precio medio ronda 1.302 €/m² según Idealista (datos de agosto de 2026). Tres habitaciones en la franja asequible salen alrededor de 152.000 euros: es una estimación calculada a partir del €/m², no un anuncio real. La franja media puede ser piso reformado en casco o vivienda con más espacio hacia la orilla: el estado importa más que el metro solo.",
      "Los servicios son 6/10 en nuestra escala. El Hospital da Mariña queda a unos veinticinco minutos desde el casco. Santiago-Lavacolla anda alrededor de los cien minutos según ruta. Quien quiera casco caminable y Covas cerca lo encuentra; quien necesite el hospital en el propio municipio, mira Burela.",
    ],
    encaja: {
      si: [
        "Encaja para quien quiera la villa con más vida propia todo el año en la Mariña occidental: casco amurallado con la Porta de Carlos V —arco renacentista de entrada—, el puerto de Celeiro —referencia de merluza del pincho—, ría abrigada y Covas, la playa larga y urbana a pocos minutos. Un martes de noviembre se compra, se va al centro de salud y se camina el casco sin depender de Burela para lo diario; los servicios alcanzan 6/10 en nuestra escala y hay fibra. Quien priorice mesas abiertas en enero, lonja y un paseo de ría frente a aislamiento extremo (O Vicedo) o industria (Xove/Cervo) encontrará aquí el equilibrio oeste de la comarca. Area y Sacido completan orillas; el Souto da Retorta —eucaliptos gigantes— y el Monte San Roque —mirador— dan tarde de monte cercano.",
        "El clima sigue siendo el de A Mariña, no el de Mallorca: unas mil ochocientas cincuenta horas de sol y unos cuarenta días despejados frente a las dos mil ochocientas horas y ciento veinte jornadas claras de la isla; llovizna también en verano, niebla alta. Son cifras orientativas de comarca, no de una estación local. El verano ronda dieciocho grados y medio, con máximas cerca de veintidós: se gana frescura frente al Mediterráneo y se acepta cielo cubierto frecuente. Covas tiene agua de ría más usable que el Cantábrico abierto —en verano, hacia diecisiete a diecinueve grados—: baño corto calmado cuando el mar abierto no invita. En agosto el paseo y Covas reciben veraneo; el volumen sube, pero no apaga la villa de trabajo. Encaja quien acepte Semana Santa intensa en el casco —interés turístico internacional, procesiones, ruido y aparcamiento difícil varios días— a cambio de esa vida local.",
      ],
      no: [
        "No encaja si el hospital debe quedar a pie o el aeropuerto a una hora. El Hospital da Mariña, en Burela, está a unos veinticinco minutos; el aeropuerto anda alrededor de los cien minutos según ruta —Santiago-Lavacolla o Asturias, según vuelo, con programación de Palma que cambia cada temporada—. Burela tiene el hospital comarcal en el propio municipio, a unos cinco minutos; desde Ribadeo, el aeropuerto de Asturias queda en unos sesenta minutos según ruta. Quien mire Viveiro solo por el casco debe sumar esos trayectos con los ojos abiertos.",
        "Tampoco si se necesita el cielo de Baleares, una ciudad a menos de una hora —Lugo queda a más de una hora— o un agosto silencioso junto a Covas. Aquí mandan niebla, cubierto y verano fresco; la Semana Santa corta calles y concentra mucha gente. Quien se decida solo tras un sábado soleado sin probar noviembre ni las procesiones se llevará una villa distinta de la foto turística.",
      ],
      veredicto:
        "Veredicto: Viveiro es la apuesta villa-casco del oeste de A Mariña. Buscaría tres habitaciones caminables a comercio y a Covas —franja asequible estimada en torno a ciento cincuenta y dos mil euros a partir de los 1.302 €/m² de Idealista en agosto de 2026—, fuera del tramo más ruidoso de Semana Santa, tras probar un noviembre de niebla y un día de afluencia en el casco. Se ganan vida local, ría abrigada y Celeiro; se aceptan hospital a veinticinco minutos, aeropuerto a unos cien según ruta y el cielo gris lucense.",
    },
    fotosAbrir: [
      { src: "/fotos/a-marina/viveiro-casco.jpg", pie: "Casco de Viveiro hacia la ría" },
      { src: "/fotos/a-marina/viveiro-covas.jpg", pie: "Covas, playa larga en ría abrigada" },
    ],
    fotosHistoria: [
      { src: "/fotos/a-marina/viveiro-porta.jpg", pie: "Porta de Carlos V, arco del casco amurallado" },
    ],
    fotosFuera: [
      { src: "/fotos/a-marina/viveiro-celeiro.jpg", pie: "Puerto de Celeiro, lonja y merluza del pincho" },
      { src: "/fotos/a-marina/viveiro-ria.jpg", pie: "Ría de Viveiro desde Covas" },
    ],
    creditoFotos: credito,
  }
```

### 2.2 Datos estructurados 2026

> CITA LITERAL — fila `slug: "viveiro"` en `web/src/data/municipios-a-marina.json`.

**Nota:** si `casaQueBuscar` / `mercadoReventa` terminan en `...`, están truncados **así en el JSON del repo**.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `110019` |
| `A_3hab` | `152334` |
| `B_2hab` | `88862` |
| `B_3hab` | `123039` |
| `advertenciaMicrozona` | Casco/servicios, Covas y Celeiro son experiencias distintas. |
| `aeropuertoMin` | `100` |
| `aeropuertoPractico2026` | Santiago 132 km · 100 min (Palma: casi todo el año); Asturias 142 km · 105 min (Palma: verano); A Coruña 142 km · 105 min (Palma: verano) Tiempo histórico orientativo: ~100 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Santiago 132 km · 100 min (Palma: casi todo el año); Asturias 142 km · 105 min (Palma: verano); A Coruña 142 km · 105 min (Palma: verano) |
| `autonomiaCotidiana` | FUERTE |
| `casaQueBuscar` | Vivienda cómoda y accesible, 2–3 dormitorios, exterior, servicios cotidianos ... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Intermedio |
| `comunicaciones` | A-8 (enlace Cabreiros) / LU-862; tren Renfe Ancho Métrico (antigua FEVE) |
| `comunicacionesNota10` | `5` |
| `cubiertos` | `165` |
| `dependenciaCocheTexto` | Baja-media en núcleo/Covas; coche para hospital y costa exterior. |
| `despejados` | `40` |
| `estacionalidad2026` | Villa comarcal anual con capa turística estival. |
| `fibra` | Sí |
| `franja` | A |
| `hospitalMin` | `25` |
| `hospitalPractico2026` | Hospital Público da Mariña, Burela |
| `hospitalPriv` |  |
| `hospitalPub` | 23 km · 25 min · Hospital da Mariña (Burela) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 23 km · 25 min · Hospital da Mariña (Burela); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `82` |
| `lat` | `43.662` |
| `lluviaDias` | `150` |
| `lluviaMm` | `1150` |
| `lon` | `-7.594` |
| `mapa` | 40_viveiro.png |
| `mercadoReventa` | Mercado intermedio: base residencial propia y/o demanda exterior. Priorizar u... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` |
| `minBano` | `5` |
| `minCosta` | `3` |
| `municipio` | Viveiro |
| `n` | `40` |
| `niebla` | Alta |
| `obraNueva` | Poca |
| `pais` | España |
| `palmaDirecta2026` | Casi todo el año / Santiago (casi todo el año) · 100 min La programación aérea es variable; comprobar temporada y horario vigente. |
| `palmaMasCercano` | Casi todo el año |
| `palmaMejor` | Santiago (casi todo el año) · 100 min |
| `paseoCotidiano` | Ría/casco o paseo de Covas según microzona. |
| `paseoPendienteTopografia` | `null` |
| `peajeRealidad` | Buena vida propia; hospital de referencia fuera y microzona determina si se prioriza casco o playa. |
| `playaBano` | Covas / Area (ría abrigada) |
| `playaCotidiana` | SÍ EN COVAS |
| `playaCotidianaModo` | Covas integra playa y paseo; el casco histórico prioriza servicios y ría. |
| `precioM2` | `1302` |
| `provincia` | Lugo |
| `radioCotidiano` | Villa con comercio y servicios comarcales; Covas suma playa/paseo; Celeiro mantiene puerto pesquero activo. |
| `radioSalida` | Costa exterior y rutas de A Mariña. |
| `sanidadPrimaria2026` | Atención primaria local |
| `servicios` | `7` |
| `serviciosEstado` | VALIDADO — Galicia |
| `serviciosNota` | Tiene: villa histórica completa. Falta: aeropuerto (105 min) |
| `slug` | viveiro |
| `solHoras` | `1850` |
| `tempAgua` | 17-19 |
| `tempInvierno` | `9.5` |
| `tempVerano` | `18.5` |
| `transporteRelevante2026` | A-8 (enlace Cabreiros) / LU-862; tren FEVE Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital Público da Mariña, Burela. |
| `viento` | Media |
| `zona` | A Mariña |

**Campos clave vs relato (para detectar conflicto; no corregir aquí)**

| Campo v15 | Valor | Relato actual (lectura) |
|---|---|---|
| `servicios` | `7` | Repite **6/10** (abrir, vivir, casa, encaja) — **conflicto** |
| `precioM2` | `1302` | Casa/veredicto citan 1.302 €/m² y ~152.000 — alineado con A_3hab≈152334 |
| `A_3hab` | `152334` | Veredicto «ciento cincuenta y dos mil» — coincide aproximadamente |
| `hospitalMin` | `25` | Relato «veinticinco minutos» — alineado |
| `aeropuertoMin` | `100` | Relato «cien minutos» — alineado |
| `solHoras` / `despejados` | `1850` / `40` | Relato enumera varias veces |
| `fibra` | `Sí` | Relato «hay fibra» |
| `autonomiaCotidiana` | `FUERTE` | Relato: casco caminable sin depender de Burela para lo diario — tono coherente |
| `playaCotidiana` | `SÍ EN COVAS` | Relato centra Covas; capa distingue casco vs Covas vs Celeiro |
| `advertenciaMicrozona` | Casco/servicios, Covas y Celeiro distintas | Relato lo sugiere; capa lo formula |
| `estacionalidad2026` | Villa comarcal anual + capa turística estival | + Semana Santa en relato |
| `serviciosNota` | Tiene villa histórica completa; Falta aeropuerto (105 min) | Relato usa 6/10 en vez de 7 |

### 2.3 Plan editorial

> CITA LITERAL — `docs/PLAN_EDITORIAL_A_MARINA_2026.md` §3.2 Viveiro.

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

**Necesidades de investigación (filas Viveiro + Burela)**

| Municipio | YA SOPORTADO EN REPO | DESEABLE PERO NO NECESARIO | NECESARIO INVESTIGAR ANTES DE REESCRIBIR |
|---|---|---|---|
| Viveiro | Casco, Celeiro, Covas, Semana Santa, FEVE, Souto/San Roque | Nombre/día de mercado; biblioteca | No bloqueante para v1 si se acepta mercado genérico |
| Burela | Lonja, hospital, playas; capa mercado/biblioteca/deporte/auditorio | Detalle comunidad caboverdiana (no ampliar sin fuente) | No bloqueante si se usa capa para cotidiano |

**Transversal (CURSOR_19 §7):** alinear servicios X/10 con v15 (Viveiro 6≠7; Burela 6≠8); no reintroducir topes de presupuesto; cifras de precio solo desde v15 o omitir (capa/TablaPrecios).


### 2.4 Material P4 a preservar

> AUDITORÍA — del plan + relato; no inventado.

| Elemento | Preservar | Base |
|---|---|---|
| Porta de Carlos V / casco amurallado | literal | relato |
| Celeiro + merluza del pincho / lonja | literal + concepto | relato |
| Covas (ría abrigada) vs Cantábrico abierto | concepto | relato + capa |
| Semana Santa interés turístico internacional (ruido, calles, aparcamiento) | literal impacto | relato — **no ampliar** fechas/rituales sin fuente |
| FEVE / Renfe Ancho Métrico Ferrol–Oviedo | concepto | relato + capa |
| Souto da Retorta / Monte San Roque | nombre + concepto | relato |
| Area / Sacido | nombres | relato |
| Microzonas casco vs Covas vs Celeiro | concepto | capa `advertenciaMicrozona` |
| Mesas/comercio en enero (villa de trabajo) | concepto | relato + `estacionalidad2026` |

### 2.5 Duplicaciones a evitar

> AUDITORÍA

- `servicios 6/10` (incorrecto vs v15 7) en abrir/vivir/casa/encaja.
- Hospital 25′ + aero ~100′ repetidos como ficha.
- €/m² 1.302 + ~152.000 en casa + veredicto → dejar a TablaPrecios.
- Clima Mallorca (1.850 h / 40 despejados / 2.800 / 120) en tiempo + vivir + encaja.si.
- Fibra / «villa con más vida propia» martilleados.
- Lista Porta/Celeiro/Covas reiterada en abrir + encaja.si.

### 2.6 Conflictos / incidencias

> AUDITORÍA — señalar, **no corregir**.

1. **Servicios relato 6 vs v15 7** (CURSOR_19 / este bloque).
2. **Precio:** €/m² 1.302 alineado con capa; totales ~152k alineados con `A_3hab`. Tras `P0_RESTANTES`: Viveiro **sin** P0 precio restante. Aun así, en reescritura **preferible omitir** cifras (piloto Barreiros/Foz).
3. **Covas vs casco / playa cotidiana:** capa `playaCotidiana: SÍ EN COVAS` + `playaCotidianaModo` + microzona. Relato mezcla bien; no afirmar playa cotidiana desde cualquier calle del casco sin matiz.
4. **Semana Santa:** preservar solo lo ya soportado (interés turístico internacional, procesiones, ruido, aparcamiento varios días). No inventar calendario fino.
5. **Hospital:** capa `hospitalPractico2026` = Hospital Público da Mariña, Burela; minutos 25. Relato alineado en minutos; no citar como ficha repetida.
6. **Estacionalidad/turismo:** villa anual + veraneo Covas + Semana Santa — no reducir a tópico «pueblo de fiesta».
7. **Auditoría CURSOR_14:** prioridad ALTA; P1 vuelo/Palma puede sonar permanente + cerca/a un paso; P2 repite €/m² y horas de sol; P4 estructura completa.

**Factual vs editorial (Viveiro)**

- **Factual:** autonomía FUERTE; dependencia coche baja-media en núcleo/Covas; playa SÍ EN COVAS; hospital fuera; fibra Sí; servicios 7; Semana Santa como peaje de calendario (relato+estudio).
- **Editorial:** tono villa amurallada, merluza del pincho, contraste O Vicedo/Xove-Cervo, «folleto del casco» vs noviembre.

### 2.7 Hechos no soportados (no inventar)

> AUDITORÍA

- Nombre/día concreto de mercado municipal.
- Biblioteca / cultura / deporte con nombre propio (capa no lista biblioteca en Viveiro `radioCotidiano` como en Burela/Foz/Ribadeo — no inventar).
- Utilidad diaria detallada del FEVE más allá de existencia + aviso de interpretación.
- Ampliar Semana Santa (horarios, número de procesiones, impacto por barrio) sin fuente.
- Afirmar servicios 6/10.
- Enlace A-8 Cabreiros solo si se glosa desde capa (está en `comunicaciones` / `transporteRelevante2026`).

---

## 3. Burela

### 3.1 Relato actual completo

> CITA LITERAL — objeto `burela` en `web/src/lib/relatos-a-marina.ts` (íntegro).

```ts
burela: {
 escala: "Villa portuaria pesquera",
 abrir: [
 "Burela no presume de piedra antigua: presume de oficio. Unos nueve mil habitantes en una villa de servicios sin casco histórico monumental —puerto del bonito del norte, lonja, hospital comarcal a pie y playas A Marosa y Ril—. Es la sede del hospital comarcal de A Mariña y una de las villas con vida de trabajo todo el año: cajas, grúas, olor a pescado, el ritmo de quien no cierra la temporada.",
 "Un martes de noviembre se resuelve comercio, centro de salud y recados básicos en el municipio. Quien vive aquí es gente de puerto y de villa funcional; hay una comunidad caboverdiana histórica ligada a la pesca. Los servicios alcanzan 6/10 y hay fibra. El Hospital da Mariña queda a unos cinco minutos —dato que no se replica en ningún otro municipio de la comarca—. El aeropuerto de Asturias anda alrededor de los ochenta y cinco minutos; Santiago, hacia los ciento diez.",
 "En verano A Marosa y Ril reciben toallas y tráfico hacia la orilla. El calendario de villa portuaria y el veraneo animan el paseo; no hay una Semana Santa de impacto internacional como en Viveiro. Vivir junto a la playa o al puerto significa contar con más volumen en agosto; tierra adentro, el ritmo pesquero sigue.",
 "Fuera de agosto Burela es villa de trabajo: mesas, lonja y hospital delante. Primavera y otoño dejan la orilla más quieta. Si solo conoces un sábado de sol, te llevas la imagen de folleto de la playa. Si has visto un día de lonja en marcha, ya puedes decidir si quieres la villa tal cual es.",
 "Encaja para quien priorice hospital a pie y puerto real, no As Catedrais a cinco minutos ni casco indiano.",
 ],
 tiempo: [
 "Burela suma unas 1.900 horas de sol y unos 40 días despejados frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.000 milímetros en unos 145 días. Niebla alta; viento medio. El gris de invierno pesa; también en verano llueve con frecuencia.",
 "El verano ronda 18,5 °C, fresco frente a Baleares. A Marosa y Ril tienen agua entre 17 y 19 °C; el Cantábrico pide días buenos para baño. Foz, a un trayecto corto, ofrece ría más abrigada cuando apetece otra orilla. Conviene probar niebla y un día de puerto activo, no solo el sol de A Marosa.",
 ],
 vivir: [
 "El invierno en Burela se nota en el piso de villa funcional: humedad, niebla alta y un cielo de unas 1.900 horas de sol frente a Mallorca. Conviene mirar aislamiento y rastros de moho un noviembre húmedo, no solo el sol de A Marosa. Junto a la orilla hay que contar con salitre y agosto; cerca del puerto, el ruido de actividad pesquera también en invierno —la lonja no cierra la temporada—.",
 "El día a día sin coche es viable: un martes de noviembre se resuelve comercio, centro de salud y recados básicos en el municipio. Los servicios alcanzan 6/10 y hay fibra. En enero Burela es villa de trabajo —mesas, lonja y hospital delante—, no un bloque vacío de veraneo. Quien viva junto a A Marosa, Ril o al puerto notará más volumen en agosto; tierra adentro, el ritmo pesquero sigue.",
 "Llegar de fuera es habitual: gente de puerto y de villa funcional, con una comunidad caboverdiana histórica ligada a la pesca. Se oye gallego en la lonja y en el ayuntamiento; el castellano basta para lo cotidiano. Entre semana manda el oficio del mar; en verano A Marosa y Ril reciben toallas y tráfico. Quien busque solo piedra antigua mirará otra villa; quien busque vecinos de trabajo todo el año, los encontrará aquí —en escala de villa portuaria, no de casco indiano.",
 "La sanidad de urgencia y especialidades está a pie: el Hospital da Mariña queda a unos cinco minutos —dato que no se replica en ningún otro municipio de la comarca—. Empadronarse aquí abre médico de cabecera y hospital comarcal en el mismo municipio. Es el dato que convierte Burela en sede del hospital comarcal de A Mariña.",
 "Mantener el vínculo con Mallorca pasa por el aeropuerto de Asturias, alrededor de los ochenta y cinco minutos, o Santiago hacia los ciento diez. En invierno el trayecto a menudo implica más logística. Conviene mirar el calendario real de vuelos del año, no solo el sol de A Marosa: el aeropuerto no está a una hora exacta como en Ribadeo.",
 "Predominan pisos y viviendas de villa funcional; hay poca obra nueva y fibra. Junto a la orilla hay que contar con salitre y agosto; cerca del puerto, ruido de actividad pesquera. Conviene escuchar un día de lonja antes de comprar la primera línea. En un piso con escaleras o sin ascensor hay que imaginar la rutina dentro de diez años; el estado de la reforma pesa. La terraza útil es la que recibe sol de invierno, no solo la que mira el Cantábrico en foto.",
 ],
 historia: [
 "El puerto y el bonito del norte explican Burela: villa crecida con la pesca, no con un recinto amurallado. La lonja y la flota son el dato útil; la comunidad caboverdiana histórica liga oficio del mar y demografía contemporánea.",
 "El Hospital da Mariña convierte el municipio en referencia comarcal: sanidad que organiza la costa lucense. Cabo Burela añade horizonte costero. La historia contemporánea es de trabajo marítimo y servicios, no de indianos ni de arcos de Semana Santa.",
 ],
 fuera: [
 "A Marosa y Ril son las playas de diario: arena urbana, Cantábrico y agua fresca. Un martes de junio la toalla cabe; un domingo de agosto, cuesta aparcar.",
 "El paseo y el puerto permiten una tarde de villa pesquera sin coche: lonja, dársena y el mar como oficio. No es una imagen de folleto de muralla; es trabajo a la vista.",
 "Foz amplía ría y A Rapadoira; Cervo, Sargadelos y San Cibrao; Viveiro, casco y Covas. As Catedrais quedan hacia Barreiros y Ribadeo. Aquí la orilla de diario es A Marosa; el hospital, a cinco minutos.",
 ],
 casa: [
 "Predominan pisos y viviendas de villa funcional; hay poca obra nueva y fibra. Junto a la orilla hay que contar con salitre y agosto; cerca del puerto, ruido de actividad pesquera. Conviene escuchar un día de lonja antes de comprar la primera línea.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros. La franja media es piso ampliado o vivienda con mejor orientación; el estado pesa.",
 "Los servicios son 6/10. El hospital queda a unos cinco minutos. Asturias está a unos ochenta y cinco; Santiago-Lavacolla, hacia los ciento diez. Quien acepte villa sin encanto monumental gana sanidad a pie; quien busque piedra antigua, mira Viveiro o Ribadeo.",
 ],
 encaja: {
 si: [
 "Encaja para quien priorice el hospital a pie en A Mariña: el Hospital da Mariña queda a unos cinco minutos, y eso no se replica en ningún otro municipio de la comarca. Burela es villa portuaria pesquera —unos nueve mil habitantes—, lonja, bonito del norte, playas A Marosa y Ril a pocos minutos, sin casco histórico monumental. Un martes de noviembre se resuelve comercio, centro de salud y recados básicos en el municipio; los servicios alcanzan 6/10 y hay fibra. Quien quiera vida de trabajo todo el año, puerto real y sanidad comarcal delante —no piedra antigua ni As Catedrais a cinco minutos— encontrará aquí la villa con el hospital comarcal de la costa lucense. Foz, a un trayecto corto, amplía ría y A Rapadoira cuando apetezca orilla más abrigada.",
 "El clima sigue siendo cantábrico: unas mil novecientas horas de sol y unos cuarenta días despejados frente a las dos mil ochocientas horas y ciento veinte jornadas claras de Mallorca; niebla alta, verano fresco cerca de dieciocho grados y medio. A Marosa y Ril tienen agua entre diecisiete y diecinueve grados; el Cantábrico pide días buenos para baño. En verano las playas reciben toallas y tráfico; el calendario de villa portuaria anima el paseo sin alcanzar el impacto de la Semana Santa de Viveiro. Encaja quien acepte una villa funcional —la ficha misma admite que falta encanto urbano— a cambio de hospital a cinco minutos y precio asequible (; tres habitaciones en franja asequible cerca de ciento cuarenta mil).",
 ],
 no: [
 "No encaja si se busca piedra amurallada, frontera indiana o As Catedrais a cinco minutos. Viveiro cubre casco y Covas; Ribadeo, indianos, ría del Eo y los arcos; Barreiros, playas largas junto a As Catedrais. Burela es oficio y servicios, no foto típica de villa señorial. Tampoco si el ruido de actividad pesquera junto al puerto molesta como vecino cotidiano.",
 "Tampoco si el cielo de Baleares o el aeropuerto a una hora son imprescindibles: el verano es fresco y Asturias queda a unos ochenta y cinco minutos; Santiago-Lavacolla, hacia los ciento diez. Quien se decida solo por el hospital sin probar un noviembre húmedo ni un agosto en A Marosa se llevará la sanidad, pero también el gris y la villa portuaria tal cual es.",
 ],
 veredicto:
 "Veredicto: Burela es la apuesta hospital y puerto de A Mariña. Buscaría tres habitaciones caminables a servicios, fuera del tramo más expuesto al ruido del puerto si molesta, tras probar un noviembre húmedo y un día de lonja en marcha. Se ganan sanidad a cinco minutos, A Marosa, Ril y vida pesquera todo el año; se aceptan casco poco monumental, aeropuerto lejos y el cielo gris de la Mariña.",
 },
 fotosAbrir: [
 { src: "/fotos/a-marina/burela-puerto.jpg", pie: "Puerto de Burela, bonito del norte" },
 { src: "/fotos/a-marina/burela-villa.jpg", pie: "Burela: villa de servicios y pesca" },
 ],
 fotosHistoria: [
 { src: "/fotos/a-marina/burela-lonja.jpg", pie: "Lonja y ambiente portuario de Burela" },
 { src: "/fotos/a-marina/burela-paseo.jpg", pie: "Paseo marítimo de Burela" },
 ],
 fotosFuera: [
 { src: "/fotos/a-marina/burela-playa.jpg", pie: "A Marosa o Ril, playas de Burela" },
 { src: "/fotos/a-marina/burela-costa.jpg", pie: "Orilla urbana de Burela hacia el Cantábrico" },
 ],
 creditoFotos: credito,
 }
```

### 3.2 Datos estructurados 2026

> CITA LITERAL — fila `slug: "burela"`.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `92612` |
| `A_3hab` | `128232` |
| `B_2hab` | `74802` |
| `B_3hab` | `103572` |
| `advertenciaMicrozona` | `null` |
| `aeropuertoMin` | `85` |
| `aeropuertoPractico2026` | Asturias 113 km · 85 min (Palma: verano); A Coruña 111 km · 85 min (Palma: verano); Santiago 147 km · 110 min (Palma: casi todo el año) Tiempo histórico orientativo: ~85 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Asturias 113 km · 85 min (Palma: verano); A Coruña 111 km · 85 min (Palma: verano); Santiago 147 km · 110 min (Palma: casi todo el año) |
| `autonomiaCotidiana` | MUY ALTA |
| `casaQueBuscar` | Vivienda cómoda y accesible, 2–3 dormitorios, exterior, servicios cotidianos ... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Intermedio |
| `comunicaciones` | A-8 / N-642; tren Renfe Ancho Métrico (antigua FEVE); puerto pesquero |
| `comunicacionesNota10` | `6` |
| `cubiertos` | `165` |
| `dependenciaCocheTexto` | Baja para la mayoría de necesidades diarias. |
| `despejados` | `40` |
| `estacionalidad2026` | Vida anual fuerte; actividad cultural/deportiva también fuera del verano. |
| `fibra` | Sí |
| `franja` | A |
| `hospitalMin` | `5` |
| `hospitalPractico2026` | Hospital Público da Mariña, en Burela |
| `hospitalPriv` |  |
| `hospitalPub` | 2 km · 5 min · Hospital da Mariña (Burela) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 2 km · 5 min · Hospital da Mariña (Burela); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `81` |
| `lat` | `43.657` |
| `lluviaDias` | `145` |
| `lluviaMm` | `1000` |
| `lon` | `-7.357` |
| `mapa` | 43_burela.png |
| `mercadoReventa` | Mercado relativamente amplio por demanda residencial permanente y servicios. ... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` |
| `minBano` | `3` |
| `minCosta` | `2` |
| `municipio` | Burela |
| `n` | `43` |
| `niebla` | Alta |
| `obraNueva` | Poca |
| `pais` | España |
| `palmaDirecta2026` | Verano / Santiago (casi todo el año) · 110 min La programación aérea es variable; comprobar temporada y horario vigente. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Santiago (casi todo el año) · 110 min |
| `paseoCotidiano` | Puerto y frente marítimo urbano. |
| `paseoPendienteTopografia` | `null` |
| `peajeRealidad` | Funcionalidad excepcional para su tamaño, con paisaje de puerto de trabajo y menor imagen turística. |
| `playaBano` | A Marosa / Ril |
| `playaCotidiana` | SÍ/PARCIAL |
| `playaCotidianaModo` | Mar y puerto pesquero son cotidianos; la fortaleza principal es la autonomía urbana más que una gran playa-resort. |
| `precioM2` | `1096` |
| `provincia` | Lugo |
| `radioCotidiano` | Hospital, centro de salud, comercio, biblioteca, auditorio, estación, deporte y mercado permiten mucha vida sin salir del núcleo. |
| `radioSalida` | Playas/rutas de A Mariña y otros núcleos costeros. |
| `sanidadPrimaria2026` | Centro de salud local |
| `servicios` | `8` |
| `serviciosEstado` | VALIDADO — Galicia |
| `serviciosNota` | Tiene: hospital comarcal propio, puerto pesquero. Falta: encanto urbano |
| `slug` | burela |
| `solHoras` | `1900` |
| `tempAgua` | 17-19 |
| `tempInvierno` | `9.5` |
| `tempVerano` | `18.5` |
| `transporteRelevante2026` | Ferrocarril Renfe de vía estrecha y bus. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital Público da Mariña, en Burela. |
| `viento` | Media |
| `zona` | A Mariña |

**Campos clave vs relato**

| Campo v15 | Valor | Relato actual |
|---|---|---|
| `servicios` | `8` | Repite **6/10** — **conflicto fuerte** |
| `precioM2` | `1096` | `casa` prosa rota (`000 euros`); encaja.si menciona «cerca de ciento cuarenta mil» — **no usar** sin alinear a `A_3hab` 128232 u omitir |
| `A_3hab` | `128232` | Relato «ciento cuarenta mil» ≈ desvío |
| `hospitalMin` | `5` | Relato «cinco minutos» / sede comarcal — alineado; muy repetido |
| `aeropuertoMin` | `85` | Relato 85 / 110 — alineado |
| `solHoras` | `1900` | Relato enumera |
| `fibra` | `Sí` | Relato sí |
| `autonomiaCotidiana` | `MUY ALTA` | Relato: martes noviembre resuelve comercio/salud — tono coherente; nota 6/10 lo contradice |
| `playaCotidiana` | `SÍ/PARCIAL` | Mar/puerto cotidianos; fortaleza = autonomía urbana más que resort |
| `paseoCotidiano` | Puerto y frente marítimo urbano | Relato A Marosa/Ril + paseo |
| `radioCotidiano` | Hospital, CS, comercio, biblioteca, auditorio, estación, deporte, mercado | **Infrausado en relato** |
| `serviciosNota` | Tiene hospital comarcal propio, puerto; Falta encanto urbano | Relato admite falta encanto |
| `peajeRealidad` | Funcionalidad excepcional; paisaje puerto trabajo; menor imagen turística | Relato coherente |
| `estacionalidad2026` | Vida anual fuerte; cultura/deporte también fuera de verano | Relato enfatiza lonja todo el año |

### 3.3 Plan editorial

> CITA LITERAL — §3.5 Burela.

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

### 3.4 Material P4 a preservar

> AUDITORÍA

| Elemento | Preservar | Base |
|---|---|---|
| Puerto / lonja / bonito del norte | literal | relato |
| Comunidad caboverdiana ligada a la pesca | concepto **sin ampliar** | relato — no inventar demografía |
| Hospital da Mariña a ~5′ como diferencial comarcal | concepto una vez | relato + capa |
| A Marosa / Ril | nombres | relato |
| «Escuchar un día de lonja antes de comprar primera línea» | literal | relato |
| Biblioteca, auditorio, mercado, deporte, estación | incorporar desde capa | `radioCotidiano` — no inventar nombres finos |
| Villa funcional sin casco monumental / falta encanto | concepto | relato + `serviciosNota` |
| Cabo Burela | nombre breve | relato historia |

### 3.5 Duplicaciones a evitar

> AUDITORÍA

- Hospital 5′ martilleado (abrir, vivir, encaja, veredicto).
- `servicios 6/10` incorrecto vs 8.
- Clima Mallorca repetido.
- Aero 85/110 como ficha.
- Precio roto + «ciento cuarenta mil» en encaja.
- Lista lonja/playas/hospital en abrir + encaja.si.

### 3.6 Conflictos / incidencias

> AUDITORÍA — no corregir.

1. **Servicios relato 6 vs v15 8** (CURSOR_19).
2. **Prosa precio rota** en `casa`: `...prosa. 000 euros. La franja media...`
3. **«cerca de ciento cuarenta mil»** en encaja.si vs `A_3hab` 128232 — desvío; omitir o alinear solo a v15.
4. **CURSOR_14:** P0 histórico precio ~1200 vs ficha 1096; `P0_RESTANTES` marca Burela **sin** P0 precio restante tras saneado (capa 1096). No reintroducir 1200.
5. **Hospital da Mariña:** significado cotidiano = sede comarcal a pie / empadronamiento abre cabecera+hospital mismo municipio. No caricaturizar «pueblo hospital».
6. **Puerto/lonja/oficio/caboverdianos:** soportado en relato; **no ampliar** comunidad caboverdiana (CURSOR_19: no ampliar sin fuente).
7. **Playa/paseo:** capa SÍ/PARCIAL + puerto/frente; no vender resort.
8. **Trabajo/industria:** pesca/lonja como realidad estructural; no caricatura de «pueblo feo» ni romanticismo excesivo.
9. **Auditoría CURSOR_14:** ALTA; P1 cerca/a un paso + precio histórico; P2 sol + hospital en capa.

**Factual vs editorial (Burela)**

- **Factual:** autonomía MUY ALTA; dependencia coche baja; hospital 5′; servicios 8; radio cotidiano rico (biblioteca/auditorio/mercado/deporte); playa SÍ/PARCIAL; peaje = funcionalidad vs menor imagen turística.
- **Editorial:** oficio, olor a pescado, «escuchar lonja», contraste Viveiro (piedra) / Ribadeo (indianos) / As Catedrais.

### 3.7 Hechos no soportados (no inventar)

> AUDITORÍA

- Ampliar comunidad caboverdiana (orígenes, barrios, cifras).
- Nombre concreto de mercado/auditorio/club deportivo más allá de la mención genérica de capa.
- Afirmar servicios 6/10.
- Usar prosa `000 euros` o ~140k sin base v15.
- Convertir «falta encanto» en insulto o en promesa de plusvalía.
- Detalle industrial ajeno a la lonja/pesca (no confundir con Alcoa de Xove/Cervo).

---

## 4. Estructura final prevista

> CITA LITERAL — plan §4.

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

## 5. Referencia post-piloto: Barreiros + Foz completos

> CITA LITERAL — objetos **actuales** tras CURSOR_21.  
> **Uso:** densidad, omisión de chips/cifras, tradeoffs vividos, casa cualitativa.  
> **No** copiar frases ni transplantar topónimos.

### 5.1 Barreiros (referencia de nivel)

```ts
barreiros: {
    escala: "Playas y parroquias",
    abrir: [
      "Barreiros se entiende mejor comparando agosto con enero. La costa se estira entre playas como Arealonga, Altar, Coto y Remior, mientras las parroquias y los bloques de apartamentos de los años 2000 reparten la vida en lugar de concentrarla en una villa. As Catedrais quedan a pocos minutos y atraen una parte importante del movimiento de verano. En invierno, muchas ventanas vuelven a quedar oscuras.",
      "Esa diferencia de estación importa más que cualquier imagen de postal. Aquí se puede vivir muy cerca de la arena y, al mismo tiempo, depender del coche para resolver una compra o llegar a una villa con más actividad. Barreiros ofrece costa delante; Foz y Ribadeo funcionan como apoyos habituales para una parte de la rutina."
    ],
    tiempo: [
      "El cambio respecto a Mallorca se nota menos en una cifra aislada que en la forma de usar la casa y la calle: verano fresco, humedad, niebla y más días en los que apetece caminar la costa con chaqueta. En invierno conviene haber visto la vivienda con tiempo gris, porque orientación, aislamiento y ventilación pesan mucho más que en una visita de agosto.",
      "El Cantábrico también marca el ritmo. Hay días de playa y otros en los que Arealonga o los arcos próximos de As Catedrais son, sobre todo, lugares para caminar y mirar el mar. La marea y el estado del agua forman parte de la rutina costera."
    ],
    vivir: [
      "Un martes de noviembre explica Barreiros mejor que un domingo de agosto. Fuera de temporada baja la actividad, algunos bloques quedan con pocas viviendas ocupadas y la dispersión se hace evidente. La vida diaria depende mucho de dónde esté exactamente la casa: estar junto a una playa no significa estar junto a farmacia, compra o servicios.",
      "Sin coche, la autonomía es limitada en buena parte del municipio. Foz y Ribadeo sirven de apoyo para compras, gestiones y una vida urbana algo más completa; para atención hospitalaria también hay que salir del municipio. El tren de ancho métrico existe, pero su mera presencia no sustituye esa lógica cotidiana.",
      "En verano cambia la escena. Las playas y As Catedrais concentran visitantes, tráfico y búsqueda de aparcamiento, mientras las zonas más interiores recuperan antes la calma. Antes de elegir vivienda aquí merece más la pena comparar una semana de agosto con un día corriente de enero que discutir si una parroquia parece tranquila en una visita breve.",
      "Hay una pregunta sencilla que ayuda a leer una casa en Barreiros: cuántas luces quedan encendidas alrededor en enero. A ella se suman otras más prácticas —fibra real, acceso fácil, humedad, aislamiento y distancia efectiva a la compra— que dicen mucho sobre cómo funcionará la vivienda durante todo el año."
    ],
    historia: [
      "El paisaje inmediato está marcado por As Catedrais y por una costa de playas largas, pero el municipio no se organiza alrededor de un gran casco histórico. Reinante y San Miguel ayudan a entender esa geografía de parroquias y orilla: Barreiros es una suma de núcleos y costa más que una plaza central de la que salga todo.",
      "También pesa el crecimiento residencial de las últimas décadas. Los bloques vinculados al veraneo explican parte del contraste entre la actividad de agosto y el silencio de invierno; no es solo una cuestión de clima, sino de cómo se ocupa el territorio."
    ],
    fuera: [
      "Arealonga, Altar, Coto y Remior forman la imagen de playa larga del municipio. Lóngara y As Pasadas amplían ese mapa de salidas costeras. Según dónde esté la vivienda, alguno de esos paseos puede empezar casi desde casa o exigir coger el coche: en un municipio tan extendido, la dirección concreta importa.",
      "As Catedrais son la salida más conocida y también el mejor recordatorio de la estacionalidad: arcos, marea y mucha más afluencia en los días fuertes. Para la vida ordinaria, el mapa se completa hacia Foz y Ribadeo, que aportan la escala de villa que Barreiros no concentra en un único núcleo."
    ],
    casa: [
      "Aquí importa tanto la microzona como la vivienda. Un apartamento próximo al mar puede ofrecer una relación muy directa con la playa y quedar, a la vez, lejos de servicios cotidianos; una casa en parroquia cambia esa relación por espacio y otra dependencia del coche.",
      "En edificios de uso estacional conviene mirar comunidad, ocupación de invierno, accesibilidad y mantenimiento. En cualquier tipología pesan la humedad, la orientación, el aislamiento y la fibra disponible. La referencia de precio y las estimaciones de tamaño quedan en la capa factual y en la tabla; el relato útil es comprobar cómo funciona esa casa concreta en enero y en agosto."
    ],
    encaja: {
      si: [
        "Encaja si lo que se busca es vivir con mucha costa alrededor y se acepta una rutina repartida: playa cerca de casa en algunas microzonas, coche para buena parte de los servicios y Foz o Ribadeo como villas de apoyo. El atractivo está en disponer de arenales y paseos costeros sin necesitar que el municipio funcione como un casco urbano compacto.",
        "También encaja si el contraste estacional no resulta un problema: más movimiento junto a las playas en verano y bastante menos vecindad visible en algunos edificios durante el invierno. Quien valore esa calma debe comprobar antes que no se convierta, para su forma de vivir, en aislamiento."
      ],
      no: [
        "Encaja peor si se quiere salir de casa y resolver casi toda la semana andando, si se necesita mucha actividad alrededor durante todo el año o si el coche debe ser excepcional. La costa extensa no elimina la dispersión.",
        "Tampoco si una vivienda de playa solo convence con el municipio lleno. Barreiros cambia mucho entre agosto y enero, y esa diferencia forma parte de la decisión tanto como la vista al mar."
      ],
      veredicto:
        "Barreiros es una forma dispersa y estacional de vivir A Mariña: mucha orilla, playas y As Catedrais muy presentes, pero sin una villa densa que concentre la rutina. La vivienda adecuada depende menos de una etiqueta municipal que de comprobar acceso, servicios reales, vecinos de invierno, humedad y cuánto coche exige la microzona."
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

### 5.2 Foz (referencia de nivel)

```ts
foz: {
    escala: "Villa de ría y playa",
    abrir: [
      "Foz se organiza alrededor de una relación bastante cotidiana con el agua. A Rapadoira está integrada en la villa y el paseo continúa hacia una costa que se abre en Llas y Peizás; al otro lado del mapa mental aparecen la ría, la marisma y el puente. No hace falta reservar el mar para una excursión: forma parte de un paseo normal.",
      "Fuera del verano sigue funcionando como villa. Comercio, atención primaria, biblioteca y servicios mantienen actividad durante el año, de modo que muchas rutinas básicas pueden resolverse en el núcleo sin coger el coche. Agosto añade veraneantes, terrazas y más presión junto al paseo, pero después Foz vuelve a una escala más calmada sin apagarse."
    ],
    tiempo: [
      "Frente a Mallorca, la diferencia se nota en un verano más fresco y en una vivienda que debe convivir mejor con humedad, niebla y meses grises. Una terraza que parece decisiva en agosto puede usarse de otra manera en invierno; por eso orientación, aislamiento y luz merecen una visita con mal tiempo.",
      "El mar tampoco se vive igual en toda la costa. A Rapadoira ofrece una playa urbana más protegida y unida al paseo; Llas y Peizás abren el horizonte y quedan más expuestas al Cantábrico. Esa transición permite escoger entre una orilla muy cotidiana y una salida algo más abierta sin abandonar el entorno de Foz."
    ],
    vivir: [
      "Un martes de noviembre se puede hacer bastante vida dentro de la villa: compra, centro de salud, biblioteca, comercio y paseo forman parte del radio cotidiano. El coche sigue siendo útil para el hospital y para ampliar la costa o las salidas, pero en el núcleo no organiza cada recado.",
      "La ría ayuda a orientarse. A Rapadoira representa la parte más urbana del mar; Llas y Peizás prolongan la costa hacia espacios más abiertos; la marisma introduce una orilla distinta, más quieta. Esa variedad hace que una mañana libre pueda consistir simplemente en caminar el frente marítimo, sin convertir el día en una excursión.",
      "En verano el paseo y A Rapadoira reciben más gente, tráfico y terrazas. La presión vacacional existe y se nota especialmente junto a la orilla, pero fuera de agosto permanece una base de servicios y vida local. Esa continuidad es una diferencia importante frente a municipios de A Mariña mucho más dependientes de la segunda residencia.",
      "Para necesidades hospitalarias hay que desplazarse a Burela. Esa salida no impide una autonomía cotidiana fuerte dentro de Foz, pero sí marca el límite entre una villa que resuelve bien el día a día y una cabecera sanitaria."
    ],
    historia: [
      "San Martiño de Mondoñedo añade una capa histórica muy próxima: su basílica fue antigua sede episcopal y conecta Foz con una historia anterior a la villa costera moderna. Mondoñedo, algo más hacia el interior, amplía esa lectura histórica de la comarca.",
      "La Foz cotidiana, sin embargo, se entiende mejor por el paseo, la ría y la temporada. La marisma y el puente forman parte del paisaje habitual, mientras las playas explican el crecimiento residencial y el aumento de actividad del verano."
    ],
    fuera: [
      "A Rapadoira es la playa que mejor se integra en una rutina a pie: arena y paseo forman parte del núcleo. Hacia Llas y Peizás la costa se vuelve más abierta y el paseo permite pasar gradualmente de la fachada urbana a otro tipo de Cantábrico.",
      "Para cambiar de registro, San Martiño de Mondoñedo aporta patrimonio cercano y el interior conduce hacia Mondoñedo. En la costa, Barreiros y As Catedrais quedan hacia el este; Burela concentra el hospital hacia el oeste; Ribadeo ofrece otra escala de casco y frontera. Son salidas que complementan Foz, no sustitutos de su vida diaria."
    ],
    casa: [
      "La elección cambia según se mire el paseo, la marisma o las zonas más interiores. Cerca de A Rapadoira se gana acceso inmediato a la orilla y se acepta más movimiento en las semanas fuertes de verano; alejándose del frente marítimo cambia la relación con ruido, aparcamiento y humedad.",
      "En pisos y casas conviene mirar accesibilidad, orientación, aislamiento y cómo se comporta la vivienda en un noviembre húmedo. La capa factual y la tabla concentran precios y estimaciones; aquí la cuestión es si la casa permite aprovechar la autonomía de la villa sin pagar con una ubicación incómoda durante el resto del año."
    ],
    encaja: {
      si: [
        "Encaja si se quiere una villa donde playa y paseo formen parte de la rutina y donde una parte importante de los recados pueda hacerse dentro del núcleo. A Rapadoira, la ría y la marisma dan una relación diaria con el agua; Llas y Peizás permiten abrir el paseo hacia una costa menos urbana.",
        "También encaja si se acepta una temporada de verano más intensa a cambio de que la villa siga teniendo actividad fuera de ella. El equilibrio está en combinar autonomía cotidiana con una costa muy accesible, sabiendo que para hospital y algunas necesidades mayores hay que salir."
      ],
      no: [
        "Encaja peor si se necesita hospital a pie o una ciudad con una oferta mucho más amplia. Foz resuelve bien la escala cotidiana, pero no pretende sustituir las funciones comarcales de Burela ni la dimensión urbana de otros núcleos mayores.",
        "Tampoco si se quiere silencio constante junto al paseo durante agosto o si el clima cantábrico se tolera solo en vacaciones. Para entender Foz conviene haber visto tanto A Rapadoira con actividad de verano como la ría en un día gris de noviembre."
      ],
      veredicto:
        "Foz combina villa, ría y playa con una autonomía cotidiana fuerte para su escala. Su punto de equilibrio está en poder caminar buena parte del día a día y llegar al mar sin convertirlo en excursión, aceptando más presión vacacional en verano y el desplazamiento a Burela para la atención hospitalaria."
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

**Qué imitar del piloto (método, no texto)**

- Abrir con escena, no con lista de minutos/notas.
- Una sola capa de Mallorca como sensación, no tabla de horas.
- Hospital/aeropuerto como **consecuencia** una vez, no ficha.
- Precio → «queda en la capa factual y en la tabla».
- Encaja como tradeoff descriptivo.
- Topónimos glosados; microzona importa.

**Qué no transplantar**

- Frases de luces de enero / Rapadoira / As Catedrais a 5′ como plantilla.
- Estructura de párrafos idéntica palabra por palabra.

---

## 6. Contrato ChatGPT → Cursor

> CITA LITERAL — plan §6.

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

**Archivo futuro (no ahora):** `web/src/lib/relatos-a-marina.ts` — claves `viveiro` y `burela` únicamente.

---

## 7. Checklist para ChatGPT

### Viveiro

- [ ] Escena casco/ría/Celeiro/Covas sin chips.
- [ ] Vida cotidiana enero caminable; Semana Santa como peaje real.
- [ ] Mapa mental: casco / Celeiro / Covas (+ Area/Sacido, Souto/San Roque).
- [ ] Mar: Covas abrigada vs abierto; no afirmar playa desde todo el casco.
- [ ] Invierno/verano: niebla + veraneo; **una** Mallorca.
- [ ] Historia: Porta/muralla + lonja + Semana Santa impacto (sin hinchar).
- [ ] Casa cualitativa: piedra/Covas/ascensor/Semana Santa; **sin** €/m² ni 152k.
- [ ] Tradeoff: autonomía fuerte vs hospital 25′ vs aero lejos — sin nota 6/10.
- [ ] Si se cita servicios, **7** (v15) o mejor omitir nota.
- [ ] No inventar §2.7.

### Burela

- [ ] Escena puerto/lonja/oficio sin caricatura.
- [ ] Vida cotidiana: radio capa (comercio, biblioteca, mercado, deporte, hospital) sin inventar nombres.
- [ ] Mapa: lonja / A Marosa-Ril / hospital.
- [ ] Mar/paseo urbano; SÍ/PARCIAL según capa.
- [ ] Invierno: lonja no cierra; una Mallorca.
- [ ] Historia: pesca + hospital comarcal; caboverdianos **sin ampliar**.
- [ ] Casa: ruido lonja, salitre; **sin** 000 euros ni ~140k inventado.
- [ ] Tradeoff: hospital a pie + funcionalidad vs falta encanto / no As Catedrais.
- [ ] Servicios: **8** si se cita, o omitir; nunca 6.
- [ ] No inventar §3.7.

### Ambos

- [ ] Densidad comparable a referencia Barreiros/Foz (sección 5).
- [ ] Sin jubilados / presupuesto personal / hechos nuevos.
- [ ] Cursor copiará literal; reportará conflictos v15 antes de commit.
