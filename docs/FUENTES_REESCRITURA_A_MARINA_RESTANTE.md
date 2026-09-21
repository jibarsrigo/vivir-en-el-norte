# Fuentes para cerrar A Mariña

**Bloque:** CURSOR_24 · **rama:** `revision-2026-09-21` · **HEAD base:** `4a63add`  
**Alcance:** extracción + auditoría documental. **No** reescritura. **No** corrección de producto. **No** internet.

**Pendientes (este paquete):** O Vicedo · Xove · Cervo · Ribadeo  
**Protegidos (no tocar):** Barreiros · Foz · Viveiro · Burela

---

## 1. Reglas y jerarquía de fuentes

1. **Capa 2026 / JSON** prevalece para hechos actuales (precios, servicios, hospital, aeropuerto, autonomía, playa/paseo, radios).
2. **Relato actual** = fuente de P4 (escena, topónimos, oficio, tradeoffs), no autoridad si contradice la capa.
3. **Xove `precioM2` = null (n.d.):** conservar n.d.; **prohibido** derivar A/B o reponer 950 histórico.
4. **Omisiones de cifras** que viven en FichaCapa2026/TablaPrecios **no** son conflictos.
5. **Barreiros/Foz/Viveiro/Burela** (§6) = referencia de densidad/tono/separación relato–capa; **no** plantilla mecánica de frases.
6. Tipografía: CITA LITERAL = repo · AUDITORÍA = planificación.

Estados de auditoría: `ALINEADO` · `OBSOLETO` · `DUPLICA_CAPA` · `P4_PRESERVAR` · `SOPORTADO_PERO_INFRAUSADO` · `NO_SOPORTADO_NO_INVENTAR`.

---

## 2. O Vicedo

### 2.1 Relato actual completo

> CITA LITERAL — objeto `o-vicedo` en `relatos-a-marina.ts`.

```ts
o-vicedo: {
 escala: "Villa marinera cantábrica",
 abrir: [
 "O Vicedo se siente en la punta del mapa. Unos mil setecientos habitantes en el extremo oeste de A Mariña, junto a la ría do Barqueiro —la lámina de agua que aquí separa Lugo de A Coruña—. El casco es pequeño; la mirada, enorme: Xilloi, Arealonga y Vidreiro abren arena al Cantábrico; Fuciño do Porco —pasarelas de madera sobre el acantilado— convierte el precipicio en paseo; a unos veinte o treinta minutos según ruta, Estaca de Bares —uno de los extremos septentrionales de la península Ibérica y la divisoria clásica entre Cantábrico y Atlántico— cierra el horizonte con faro, viento y migración de aves. No es villa de plaza densa: es costa cantábrica extrema con nombre de pueblo.",
 "Un martes de noviembre la vida es mínima. Quien vive aquí busca silencio y mar delante, no comercio a la vuelta de la esquina. Los servicios son 2/10 en nuestra escala —la nota más baja de la comarca; es metodología propia de esta web, no un indicador oficial— y la dependencia del coche ronda 9/10: el súper completo, muchas mesas y los recados serios organizan Viveiro o Burela. El Hospital da Mariña, en Burela, queda a unos treinta y cinco minutos desde el núcleo de O Vicedo. El aeropuerto usable anda alrededor de los cien minutos según ruta —Santiago, A Coruña o Asturias—. Eso no se arregla eligiendo otra calle junto a Xilloi.",
 "El tráfico es de aldea casi todo el año. En los días claros de verano las playas y Fuciño do Porco reciben visitantes, coches en calles estrechas y aparcamiento justo. No hay una fiesta mayor de interés turístico que corte el casco como la Semana Santa de Viveiro: el volumen viene del veraneo y de quien busca costa abierta. Quien viva junto a la orilla notará agosto; hacia el interior, el silencio vuelve antes.",
 "Fuera de temporada O Vicedo es retiro aislado: pocas mesas, poco comercio y mucho Cantábrico. Primavera y otoño son buenas épocas para conocerlo —verde intenso, niebla que entra de golpe—. Si solo conoces un sábado de sol, te llevas la imagen de folleto del horizonte. Si has visto un noviembre húmedo, ya puedes decidir si quieres el aislamiento.",
 "El resto del año la villa no es completa. Encaja solo para quien priorice precio y paisaje frente a servicios y aeropuerto, y acepte que la semana cabe en el volante.",
 ],
 tiempo: [
 "Si vienes de Baleares, notarás el cielo más gris y con menos sol que en Mallorca. O Vicedo suma unas 1.850 horas de sol y unos 40 días despejados frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.150 milímetros en unos 150 días: la lluvia de octubre a marzo es seria, y también en verano caen 7–10 días al mes. La niebla es alta —esta costa lucense es de las más brumosas de Galicia—; el viento, medio. Son cifras orientativas del conjunto de A Mariña, no la serie de una estación local: en el extremo oeste, tan expuesto, la niebla y el viento suelen pesar algo más que en el tramo de Ribadeo.",
 "El verano ronda 18 °C, de los más frescos de la zona, con máximas habituales cerca de 22 °C y casi ningún día sobre 30 °C: se gana frescura frente al Mediterráneo y se acepta un cielo que también llovizna en julio. En verano el agua suele moverse entre 17 y 19 °C, como rango orientativo; el mar abierto es bravo. Las playas invitan más al paseo que al baño largo cuando sopla el Cantábrico. Conviene venir un día de niebla y un noviembre, no solo un sábado de sol de agosto.",
 ],
 vivir: [
 "El invierno en O Vicedo se nota en la casa: humedad, niebla alta —esta costa lucense es de las más brumosas de Galicia—, viento medio y un cielo de unas 1.850 horas de sol frente a Mallorca. Conviene preguntar por aislamiento, orientación y rastros de moho un noviembre húmedo, no solo un sábado de sol en Xilloi. El jardín o la terraza que en agosto parecen el centro de la vida se usan la mitad o menos entre noviembre y febrero; el anuncio enseña horizonte, noviembre enseña aislamiento.",
 "El día a día sin coche casi no existe: los servicios son 2/10 en nuestra escala —la nota más baja de la comarca— y la dependencia del coche ronda 9/10. Un martes de noviembre la vida es mínima; el súper completo, muchas mesas y los recados serios organizan Viveiro o Burela. En enero O Vicedo es retiro aislado: pocas mesas, poco comercio y mucho Cantábrico. Quien viva junto a la orilla notará agosto en las playas y en Fuciño do Porco; hacia el interior, el silencio vuelve antes.",
 "Llegar de fuera busca silencio y mar delante, no comercio a la vuelta de la esquina. Se oye gallego en la villa pequeña; el castellano basta para lo cotidiano, pero la vida social pasa por escala de aldea y ritmos de costa extrema, no por una plaza densa. Entre semana manda el volante; en verano las playas y Fuciño do Porco reciben visitantes y aparcamiento justo. Si solo buscas el horizonte de un sábado de sol, te llevas la imagen de folleto de la costa. Si buscas vecinos densos en enero, mira Viveiro.",
 "La sanidad de urgencia y especialidades no está en el municipio: el Hospital da Mariña, en Burela, queda a unos treinta y cinco minutos desde el núcleo de O Vicedo, y algo más desde las parroquias del interior. Empadronarse aquí abre el médico de cabecera local; para hospital se conduce, y conviene comprobar el hospital de referencia que asigna el Sergas según el empadronamiento. Eso no se arregla eligiendo otra calle junto a Xilloi: es asumir que la sanidad comarcal está lejos del extremo oeste.",
 "Mantener el vínculo con Mallorca pasa por un aeropuerto usable alrededor de los cien minutos según ruta —Santiago, A Coruña o Asturias—. En invierno el trayecto a menudo implica más logística y escalas. Los enlaces con Palma cambian de temporada en temporada, así que conviene comprobar la programación vigente del año en que se decida, no solo la de agosto en la orilla: el coste no es solo el billete, sino el volante hasta la terminal.",
 "Predominan viviendas modestas y casas hacia las parroquias; hay poca o ninguna obra nueva y fibra parcial que debe comprobarse dirección a dirección. Hay que contar con humedad, viento, acceso en invierno y la distancia real a un súper. En una casa con escaleras o acceso difícil en invierno hay que imaginar la rutina dentro de diez años; conviene presupuestar humedad, ventanas y calefacción, no solo las vistas al Cantábrico.",
 ],
 historia: [
 "La ría do Barqueiro y el oficio del mar explican O Vicedo mejor que un casco monumental: villa marinera pequeña en el extremo lucense, con la mirada puesta en acantilados y arenales. Fuciño do Porco es la capa contemporánea —pasarelas que permiten caminar el precipicio sin perder el horizonte— y cuenta el sitio como paisaje vivo, no como museo.",
 "Estaca de Bares, a unos veinte o treinta minutos según ruta, añade una capa geográfica que pocos municipios pueden igualar: faro, cabo, viento y aves migratorias en uno de los extremos septentrionales de la península, donde suele situarse la divisoria entre Cantábrico y Atlántico. Lo que conviene saber aquí es de costa extrema y ría de frontera provincial, no de villa amurallada ni de casas de indianos.",
 ],
 fuera: [
 "Si solo hay tiempo para una orilla cerca, Xilloi, Arealonga o Vidreiro son el baño —y el paseo— de diario: arena, oleaje y agua fresca a pocos minutos. Un martes de junio puedes tener casi toda la playa; un domingo de agosto el aparcamiento se queda corto. Es costa de vecinos y de toalla de siempre cuando sopla menos, no de resort.",
 "Fuciño do Porco convierte el acantilado en tarde: pasarelas, precipicio y Cantábrico delante. No es un paseo de boulevard; es horizonte con barandilla. Cuando el océano no invita al baño, este tramo sigue siendo salida.",
 "Estaca de Bares amplía la jornada hacia el cabo. Viveiro, a un trayecto corto hacia el este, cubre casco, comercio y Covas —ría abrigada— cuando el Cantábrico abierto no deja meterse. Aquí el mar está en la puerta; la villa completa, no.",
 ],
 casa: [
 "El modelo no es urbanización. Predominan viviendas modestas y casas hacia las parroquias; hay poca o ninguna obra nueva y fibra parcial que debe comprobarse dirección a dirección. Hay que contar con humedad, viento, acceso en invierno y la distancia real a un súper.",
 ", de los más bajos de la zona, pero es una cifra orientativa: en un municipio de mil setecientos habitantes la muestra de anuncios publicados puede ser escasa y moverse mucho de un mes a otro, así que conviene mirar Idealista del mes en que se busque. Tres habitaciones en la franja asequible salen alrededor de 105.000 euros; es una estimación calculada a partir del €/m², no un anuncio real. El estado de la reforma y las vistas al mar mueven el precio final más que una media única: el anuncio enseña horizonte; noviembre enseña aislamiento.",
 "Los servicios son 2/10 en nuestra escala. El Hospital da Mariña queda a unos treinta y cinco minutos desde el núcleo. Asturias, A Coruña o Santiago andan alrededor de los cien minutos según ruta. Quien acepte coche casi cada día gana costa cantábrica y uno de los metros más asequibles de A Mariña; quien necesite mesas en enero a pie, no.",
 ],
 encaja: {
 si: [
 "Encaja para quien quiera el Cantábrico delante casi a pie —Xilloi, Arealonga y Vidreiro a pocos minutos; Fuciño do Porco, las pasarelas sobre el acantilado, como paseo de tarde— y acepte que la vida diaria no cabe en la villa. Un martes de noviembre aquí es retiro mínimo: el súper completo, el comercio y muchas mesas viven en Viveiro o Burela; el coche organiza la semana (dependencia alta, cerca de nueve sobre diez). Quien priorice precio —de los más bajos de A Mariña, como cifra orientativa— y costa cantábrica extrema frente a villa caminable encontrará el sitio: Estaca de Bares, uno de los extremos septentrionales de la península, a unos veinte o treinta minutos según ruta, cierra el horizonte con faro, viento y migración de aves. El mar es bravo; las playas invitan más al paseo que al baño largo cuando sopla el Cantábrico.",
 "El clima pide ojos abiertos si se viene de Mallorca: unas mil ochocientas cincuenta horas de sol y unos cuarenta días despejados frente a las dos mil ochocientas horas y ciento veinte jornadas claras de la isla; caen alrededor de mil ciento cincuenta milímetros en unos ciento cincuenta días, con niebla alta. Son cifras orientativas de comarca, no de una estación local. El verano ronda dieciocho grados —de los más frescos de la zona—, con máximas habituales cerca de veintidós y casi ningún día sobre treinta: se gana frescura frente al calor mediterráneo y se acepta un cielo gris que también llovizna en julio. En agosto las playas y Fuciño do Porco reciben visitantes y aparcamiento justo; hacia el interior el silencio vuelve antes. Encaja si has probado un noviembre húmedo y sigues queriendo esa orilla.",
 ],
 no: [
 "No encaja si la semana debe resolverse andando o si el hospital y el aeropuerto pesan como prioridad. Los servicios son 2/10 en nuestra escala —la nota más baja de la comarca—; el Hospital da Mariña, en Burela, queda a unos treinta y cinco minutos desde el núcleo; el aeropuerto usable anda alrededor de los cien minutos según ruta (Santiago, A Coruña o Asturias). Eso no se arregla eligiendo otra calle junto a Xilloi. Viveiro cubre casco y comercio; Burela tiene el hospital comarcal en el propio municipio; Ribadeo es la villa con más servicios de la comarca y la mejor conectada con el aeropuerto de Asturias.",
 "Tampoco si se necesita el cielo estable de Baleares o una villa con mesas y mercado en enero sin coche. Aquí mandan niebla, cubierto y verano fresco extremo; fuera de temporada hay pocas mesas y poco comercio. Quien se decida solo tras un sábado de sol de agosto, sin probar el aislamiento de noviembre ni el atasco de las playas en temporada, se llevará una sorpresa.",
 ],
 veredicto:
 "Veredicto: O Vicedo es el extremo aislado de A Mariña —precio y Cantábrico a cambio de servicios mínimos—. Buscaría vivienda con fibra comprobada (es parcial), acceso claro en invierno y orientación que aguante viento y humedad, lejos del atasco de agosto en Xilloi o Fuciño do Porco. Se ganan costa cantábrica y uno de los metros más asequibles de la zona; se aceptan coche casi cada día, hospital a treinta y cinco minutos, aeropuerto a unos cien según ruta y un cielo que no es el de Mallorca.",
 },
 fotoIdentidad: {
 src: "/fotos/a-marina/o-vicedo-identidad.jpg",
 pie: "O Vicedo: casas junto a la ría, con el monte detrás",
 },
 fotosAbrir: [
 { src: "/fotos/a-marina/vicedo-villa.jpg", pie: "O Vicedo: villa marinera en el extremo occidental" },
 { src: "/fotos/a-marina/vicedo-puerto.jpg", pie: "Puerto y orilla de trabajo en O Vicedo" },
 ],
 fotosHistoria: [
 { src: "/fotos/a-marina/vicedo-faro.jpg", pie: "Faro y horizonte hacia Estaca de Bares" },
 { src: "/fotos/a-marina/vicedo-ria.jpg", pie: "Ría do Barqueiro junto a O Vicedo" },
 ],
 fotosFuera: [
 { src: "/fotos/a-marina/vicedo-playa.jpg", pie: "Playa atlántica en O Vicedo" },
 { src: "/fotos/a-marina/vicedo-costa.jpg", pie: "Costa y acantilados de O Vicedo" },
 ],
 creditoFotos: credito,
 }
```

### 2.2 Capa 2026 completa

> CITA LITERAL — fila `slug: "o-vicedo"` en `municipios-a-marina.json`.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `92359` |
| `A_3hab` | `127881` |
| `B_2hab` | `74597` |
| `B_3hab` | `103289` |
| `advertenciaMicrozona` | `null` *(n.d. / ausente)* |
| `aeropuertoMin` | `100` |
| `aeropuertoPractico2026` | A Coruña 135 km · 100 min (Palma: verano); Santiago 135 km · 100 min (Palma: casi todo el año); Asturias 156 km · 115 min (Palma: verano) Tiempo histórico orientativo: ~100 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | A Coruña 135 km · 100 min (Palma: verano); Santiago 135 km · 100 min (Palma: casi todo el año); Asturias 156 km · 115 min (Palma: verano) |
| `autonomiaCotidiana` | BAJA |
| `casaQueBuscar` | Vivienda cómoda y accesible, 2–3 dormitorios, exterior, servicios cotidianos ... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Intermedio |
| `comunicaciones` | LU-862; tren Renfe Ancho Métrico (antigua FEVE) (apeadero) |
| `comunicacionesNota10` | `3` |
| `cubiertos` | `165` |
| `dependenciaCocheTexto` | Alta para compras amplias, hospital y muchas gestiones. |
| `despejados` | `40` |
| `estacionalidad2026` | Escala pequeña y mayor dependencia externa fuera de verano. |
| `fibra` | Parcial |
| `franja` | A |
| `hospitalMin` | `35` |
| `hospitalPractico2026` | Hospital Público da Mariña, Burela |
| `hospitalPriv` |  |
| `hospitalPub` | 35 km · 35 min · Hospital da Mariña (Burela) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 35 km · 35 min · Hospital da Mariña (Burela); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `83` |
| `lat` | `43.734` |
| `lluviaDias` | `150` |
| `lluviaMm` | `1150` |
| `lon` | `-7.676` |
| `mapa` | 39_o_vicedo.png |
| `mercadoReventa` | Mercado estrecho o de muestra limitada: la salida depende mucho del producto.... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `5` |
| `minCosta` | `2` |
| `municipio` | O Vicedo |
| `n` | `39` |
| `niebla` | Alta |
| `obraNueva` | No |
| `pais` | España |
| `palmaDirecta2026` | Verano / Santiago (casi todo el año) · 100 min La programación aérea es variable; comprobar temporada y horario vigente. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Santiago (casi todo el año) · 100 min |
| `paseoCotidiano` | Primer tramo del PR-G156 desde el puerto puede funcionar como paseo diario; ruta completa es salida. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Costa muy próxima a cambio de servicios mínimos y coche. |
| `playaBano` | Xilloi / Arealonga / Vidreiro |
| `playaCotidiana` | SÍ/PARCIAL |
| `playaCotidianaModo` | Arealonga y pequeñas playas pueden ser cercanas según vivienda; servicios siguen siendo escasos. |
| `precioM2` | `1093` |
| `provincia` | Lugo |
| `radioCotidiano` | Núcleo muy pequeño con servicios básicos; capacidad cotidiana limitada. |
| `radioSalida` | Arealonga y PR-G156 hacia Vidreiro, Castro, Caolín, Xilloi y Area Grande. |
| `sanidadPrimaria2026` | Atención primaria básica/local |
| `servicios` | `2` |
| `serviciosEstado` | VALIDADO — Galicia |
| `serviciosNota` | Falta: casi todo (Viveiro a 20 min) |
| `slug` | o-vicedo |
| `solHoras` | `1850` |
| `tempAgua` | 17-19 |
| `tempInvierno` | `9.5` |
| `tempVerano` | `18.0` |
| `transporteRelevante2026` | LU-862; tren FEVE (apeadero) Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital Público da Mariña, Burela. |
| `viento` | Media |
| `zona` | A Mariña |

### 2.3 Plan editorial

> CITA LITERAL — CURSOR_19.

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

### 2.4 Auditoría relato ↔ capa

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Precio / franja asequible | casa empieza por coma; ~105.000; «de los más bajos» | `precioM2` 1093; A_3hab 127881 | OBSOLETO | Omitir cifras; capa/TablaPrecios. No usar prosa rota ni 900 histórico CURSOR_14 |
| Servicios 2/10 | Repetido abrir/vivir/casa/encaja | `servicios` 2 — coincide | DUPLICA_CAPA | Omitir nota numérica; narrar aislamiento/recados en Viveiro-Burela |
| Dependencia coche ~9/10 | Repetido | `dependenciaCocheTexto` Alta; autonomía BAJA | DUPLICA_CAPA / ALINEADO | Una mención vivida de volante; sin nota 9/10 |
| Hospital 35′ / aero ~100′ | Repetidos como ficha | hospitalMin 35; aeropuertoMin 100 | DUPLICA_CAPA | Consecuencia una vez, sin martillar minutos |
| Playas Xilloi/Arealonga/Vidreiro | Listadas + orilla diaria | playaBano mismos; playaCotidiana SÍ/PARCIAL | P4_PRESERVAR | Glosar; matizar según vivienda (capa) |
| Fuciño do Porco | Pasarelas/acantilado | radioSalida PR-G156 hacia… | P4_PRESERVAR | Preservar escena literal |
| Estaca de Bares | Faro/aves/divisoria 20–30′ | No campo específico; salida regional | P4_PRESERVAR | Concepto ya en relato; no inventar datos nuevos |
| PR-G156 desde puerto | Ausente | paseoCotidiano / radioSalida | SOPORTADO_PERO_INFRAUSADO | Incorporar glosado si se describe paseo diario |
| FEVE apeadero | Casi ausente | transporteRelevante2026 + aviso utilidad | SOPORTADO_PERO_INFRAUSADO | Mencionar existencia sin promesa de utilidad diaria |
| Clima Mallorca cifras | 1850 h / 40 despejados repetidos | solHoras 1850 etc. | DUPLICA_CAPA | Sensación cualitativa una vez |
| Café/mercado/biblioteca local | No | radioCotidiano: núcleo pequeño, capacidad limitada | NO_SOPORTADO_NO_INVENTAR | No inventar; narrar dependencia externa |
| Noviembre vs sábado sol / aislamiento | Fuerte | estacionalidad / peajeRealidad | P4_PRESERVAR | Preservar contraste |

**CURSOR_14:** URGENTE; P0 precio ~900 vs 1093; P2 sol+hospital. **P0_RESTANTES:** sin P0 precio restante (capa 1093). Prosa `casa` sigue rota (coma + 105.000).

### 2.5 P4 a preservar

Extremo oeste aislado: Fuciño + playas + Estaca; noviembre vs folleto; volante hacia Viveiro/Burela.

(Detalle tabular en §2.3 B.)

### 2.6 Vida cotidiana soportada

Pregunta guía: *Ya vivo aquí. Tengo toda la mañana libre. ¿Qué puedo hacer sin convertirlo en turismo?*

| Elemento | Clasificación | Base repo |
|---|---|---|
| Paseo playas Xilloi/Arealonga/Vidreiro | YA SOPORTADO | relato + playaCotidiana |
| Fuciño do Porco | YA SOPORTADO | relato |
| Primer tramo PR-G156 desde puerto | SOPORTADO PERO FALTA EN RELATO | paseoCotidiano / radioSalida |
| Compra/súper en municipio | YA SOPORTADO (limitado) | radio: capacidad limitada; relato Viveiro/Burela |
| Café/mercado/biblioteca con nombre | NO SOPORTADO | — |
| FEVE apeadero | SOPORTADO PERO FALTA EN RELATO | transporte (sin utilidad garantizada) |
| Estaca de Bares / Viveiro-Covas | YA SOPORTADO (salida) | relato |
| Día lluvia interior concreto | NO SOPORTADO | solo niebla/aislamiento |

### 2.7 Duplicaciones a eliminar

- servicios 2/10, coche 9/10, hospital 35′, aero 100′
- clima Mallorca cifras en cascada
- precio/franja en casa (rota) + encaja
- lista playas/Fuciño/Estaca reiterada

### 2.8 No soportado / no inventar

- Café/mercado/biblioteca/deporte con nombre
- Precio 900 histórico o prosa `casa` rota como actualidad
- Utilidad diaria garantizada del FEVE
- Interior concreto día de lluvia
## 3. Xove

### 3.1 Relato actual completo

> CITA LITERAL — objeto `xove` en `relatos-a-marina.ts`.

```ts
xove: {
 escala: "Costa y parroquias",
 abrir: [
 "Xove no es una villa completa. Unos tres mil trescientos habitantes repartidos entre costa y parroquias en A Mariña: Esteiro —playa de arcos de roca y surf— y Portocelo marcan la orilla; tierra adentro el hábitat se dispersa entre casas y núcleos pequeños. En el término pesa el complejo industrial de San Ciprián —refinería de alúmina y fábrica de aluminio—, que se reparte entre Xove y el vecino Cervo: en 2026 Alcoa asumió la propiedad íntegra del conjunto y reactivó la planta de aluminio en abril, mientras sigue apuntando dudas de viabilidad en la refinería de alúmina por el coste de la energía. No es un detalle lejano: es paisaje y empleo.",
 "Un martes de noviembre los servicios son 3/10 en nuestra escala: el coche organiza compra, salud y ocio hacia Burela o Viveiro. Quien vive aquí busca orilla abierta y precio contenido, no mercado a pie. El Hospital da Mariña queda a unos veinte minutos desde el núcleo de Xove, más desde las parroquias del interior. El aeropuerto anda entre noventa y cinco y ciento cinco minutos según destino y ruta. La fibra es parcial: hay que comprobarla casa por casa.",
 "En verano Esteiro y Portocelo reciben surfistas, toallas y tráfico hacia la costa. No hay una fiesta de interés turístico internacional que corte un casco denso: el volumen es de playa y temporada. Quien viva junto a la orilla notará agosto; hacia las parroquias, el silencio vuelve antes —y en invierno, de verdad.",
 "Fuera de temporada Xove se queda en lo suyo: costa cantábrica, parroquias quietas y dependencia del volante. Si solo conoces un sábado de sol en Esteiro, te llevas la imagen de folleto de los arcos. Si has visto un noviembre vacío, ya puedes decidir si quieres vivir a esa escala.",
 "Encaja poco para quien busque vida diaria densa; encaja mejor para quien tenga Burela o Viveiro como apoyo semanal y priorice oleaje y precio.",
 ],
 tiempo: [
 "Xove registra unas 1.850 horas de sol y unos 40 días despejados frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.100 milímetros en unos 148 días. Niebla alta; viento medio. Son cifras orientativas de comarca, no la serie de una estación local: en costa abierta como esta el viento se nota más que en las rías. El gris de invierno pesa; la llovizna también aparece en julio.",
 "El verano ronda 18,5 °C, fresco frente a Baleares: máximas típicas cerca de 22 °C, casi sin días sobre 30 °C. En verano el agua de Esteiro suele moverse entre 17 y 19 °C, como rango orientativo, con más oleaje que Covas: playa de arcos y surf más que de baño calmado de ría. Conviene probar nortada y niebla, no solo un día de mar llana.",
 ],
 vivir: [
 "El invierno en Xove se nota en las parroquias y cerca de la costa: humedad, niebla alta, viento medio y un noviembre vacío fuera de la orilla. En Mallorca muchas viviendas casi no piensan en moho; aquí conviene mirar aislamiento y rastros de humedad un día de nortada, no solo un sábado de sol en Esteiro. El anuncio habla de vistas; el invierno habla de vacío fuera de la playa.",
 "El día a día sin coche casi no existe: los servicios son 3/10 en nuestra escala y la fibra es parcial. El coche organiza compra, salud y ocio hacia Burela o Viveiro. En enero Xove se queda en lo suyo —costa cantábrica y parroquias quietas—; no hay mercado denso a pie. Quien viva junto a Esteiro o Portocelo notará agosto con surfistas, toallas y tráfico; hacia las parroquias, el silencio vuelve antes —y en invierno, de verdad.",
 "Llegar de fuera busca orilla abierta y precio contenido, no villa completa. Se oye gallego en los núcleos; el castellano basta para lo cotidiano, pero la vida social pasa por escala dispersa y por Burela o Viveiro como apoyo. Entre semana manda el volante; en verano Esteiro y Portocelo reciben temporada de playa. Quien mire Xove solo por los arcos debe sumar el complejo de San Ciprián —repartido entre Xove y Cervo, en manos de Alcoa desde 2026, con la fábrica de aluminio reactivada en abril de ese año y la refinería de alúmina bajo dudas de viabilidad por el coste energético— con los ojos abiertos: industria y costa en el mismo término.",
 "La sanidad de urgencia y especialidades no está en el municipio: el Hospital da Mariña queda a unos veinte minutos desde el núcleo de Xove, más desde las parroquias. Empadronarse aquí abre el médico de cabecera local; para hospital se conduce a Burela, y conviene comprobar el hospital de referencia que asigna el Sergas según el empadronamiento. Veinte minutos es un trayecto más corto que desde O Vicedo, pero no es sanidad a la vuelta de la esquina.",
 "Mantener el vínculo con Mallorca pasa por un aeropuerto a entre noventa y cinco y ciento cinco minutos según destino y ruta —Asturias o Santiago—. En invierno el trayecto a menudo implica más logística. Los enlaces con Palma cambian de temporada: conviene comprobar la programación vigente del año en que se decida, no solo el día de mar llana en Esteiro.",
 "Predominan viviendas en parroquias y cerca de la costa; hay poca obra nueva y fibra parcial. Hay que contar con humedad, viento, acceso y distancia real a un súper. Conviene comprobar la línea casa por casa. En una casa con escaleras o acceso difícil en invierno hay que imaginar la rutina dentro de diez años; el estado de la reforma importa más que una media única.",
 ],
 historia: [
 "Esteiro —con sus arcos de roca— es la ficha visual del municipio: costa trabajada por el mar, no un casco monumental. Portocelo completa la orilla de oficio y veraneo ligero. Lo que conviene saber se lee en la piedra y el oleaje, no en murallas.",
 "El complejo de San Ciprián —refinería de alúmina y fábrica de aluminio, repartido entre Xove y Cervo— explica empleo, población y la tensión económica de los últimos años. En 2026 Alcoa pasó a ser propietaria única del conjunto y volvió a poner en marcha la planta de aluminio en abril, aunque la propia compañía sigue señalando que la refinería de alúmina tiene un problema de viabilidad mientras la energía cueste lo que cuesta. Quien mire Xove solo por los arcos debe sumar esa capa laboral con los ojos abiertos: industria y costa en el mismo término.",
 ],
 fuera: [
 "Esteiro es la playa de carácter: arcos, surf y Cantábrico abierto. Un martes de junio puedes estar casi solo ante las olas; un domingo de agosto hay más coches y más tablas. Nadar aquí es para quien busca brusquedad; Covas, en Viveiro, ofrece otra lógica de ría.",
 "Portocelo ofrece otra orilla a pocos minutos: más de oficio y de temporada ligera que una foto interminable de turismo. El faro de Punta Roncadoira marca horizonte cuando se camina la costa.",
 "Burela cubre hospital y lonja; Viveiro, casco y Covas; Cervo, Sargadelos y San Cibrao. As Catedrais quedan más al este. Aquí el día a día pide coche; el mar, no.",
 ],
 casa: [
 "Predominan viviendas en parroquias y cerca de la costa; hay poca obra nueva y fibra parcial. Hay que contar con humedad, viento, acceso y distancia real a un súper. El anuncio habla de vistas; el invierno habla de vacío fuera de la orilla.",
 "No hay una media municipal homogénea actual en la que anclarse: en un municipio disperso de tres mil habitantes la muestra de anuncios suele ser escasa y moverse de un mes a otro, así que conviene mirar Idealista del mes en que se busque. El estado de la reforma importa más que cualquier media única.",
 "Los servicios son 3/10 en nuestra escala. El Hospital da Mariña queda a unos veinte minutos desde el núcleo. Asturias anda alrededor de los noventa y cinco minutos; Santiago, hacia los ciento cinco, según ruta. Quien acepte esa lógica gana arcos y precio; quien necesite villa caminable, mira Viveiro.",
 ],
 encaja: {
 si: [
 "Encaja para quien quiera costa cantábrica de carácter —Esteiro, playa de arcos de roca y surf; Portocelo a pocos minutos— a presupuesto contenido frente a villas de casco y acepte que el municipio no es villa completa. Un martes de noviembre los servicios son 3/10 en nuestra escala: el coche organiza compra, salud y ocio hacia Burela o Viveiro. Quien tenga una de esas villas como apoyo semanal y priorice orilla abierta, oleaje y parroquias quietas frente a casco amurallado encontrará aquí una escala dispersa entre costa y tierra adentro. El Hospital da Mariña queda a unos veinte minutos desde el núcleo —un trayecto más corto que desde O Vicedo—; el aeropuerto, entre noventa y cinco y ciento cinco minutos según destino y ruta.",
 "El clima es el de A Mariña: unas mil ochocientas cincuenta horas de sol y unos cuarenta días despejados frente a las dos mil ochocientas horas y ciento veinte jornadas claras de Mallorca; niebla alta, lluvia frecuente, verano fresco alrededor de dieciocho grados y medio. Son cifras orientativas de comarca, no de una estación local. En verano el agua de Esteiro suele moverse entre diecisiete y diecinueve grados, con más oleaje que Covas: playa de arcos y surf más que de baño calmado de ría. En verano Esteiro y Portocelo reciben surfistas, toallas y tráfico hacia la costa; hacia las parroquias el silencio vuelve antes. Encaja si has visto un invierno vacío fuera de la orilla y sigues queriendo esos arcos delante.",
 ],
 no: [
 "No encaja si se busca villa caminable con mercado, mesas en enero y vida densa todo el año. Xove no lo es: falta comercio grande y la semana pide coche. Viveiro y Ribadeo cubren ese perfil; Burela, el hospital comarcal en el propio municipio y la lonja. Tampoco si el hospital debe quedar a quince minutos o menos: veinte minutos a Burela es razonable para la comarca, pero no es sanidad a la vuelta de la esquina.",
 "Tampoco si la industria cercana pesa en la decisión de vivir. El complejo de San Ciprián se reparte entre Xove y Cervo y forma parte del municipio, no es un detalle lejano: desde 2026 es íntegramente de Alcoa, la fábrica de aluminio volvió a producir en abril de ese año y la refinería de alúmina sigue en cuestión por el coste de la energía, así que conviene seguir la actualidad del complejo antes de comprar. Y si se necesita el cielo de Baleares o un agosto silencioso junto a Esteiro, mejor mirar otra orilla: aquí el gris de invierno y la temporada de surf definen el año.",
 ],
 veredicto:
 "Veredicto: Xove es costa y parroquias, no villa completa. Buscaría vivienda con acceso claro y fibra comprobada (es parcial), lejos del tramo más ocupado de Esteiro en agosto, tras probar un martes de noviembre vacío y aceptar que Burela o Viveiro cubren muchos recados. Se ganan precio, arcos y Cantábrico; se aceptan coche, servicios 3/10, cielo gris y un complejo industrial en el término cuyo futuro conviene seguir de cerca.",
 },
 fotosAbrir: [
 { src: "/fotos/a-marina/xove-villa.jpg", pie: "Xove: núcleos entre costa y parroquias" },
 { src: "/fotos/a-marina/xove-playa.jpg", pie: "Esteiro, playa de arcos y surf" },
 ],
 fotosHistoria: [
 { src: "/fotos/a-marina/xove-portocelo.jpg", pie: "Portocelo, orilla de Xove" },
 { src: "/fotos/a-marina/xove-parroquia.jpg", pie: "Parroquia y escala dispersa en Xove" },
 ],
 fotosFuera: [
 { src: "/fotos/a-marina/xove-faro.jpg", pie: "Faro de Punta Roncadoira en la costa de Xove" },
 ],
 creditoFotos: credito,
 }
```

### 3.2 Capa 2026 completa

> CITA LITERAL — fila `slug: "xove"` en `municipios-a-marina.json`.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `null` *(n.d. / ausente)* |
| `A_3hab` | `null` *(n.d. / ausente)* |
| `B_2hab` | `null` *(n.d. / ausente)* |
| `B_3hab` | `null` *(n.d. / ausente)* |
| `advertenciaMicrozona` | `null` *(n.d. / ausente)* |
| `aeropuertoMin` | `95` |
| `aeropuertoPractico2026` | Asturias 128 km · 95 min (Palma: verano); Santiago 139 km · 105 min (Palma: casi todo el año); A Coruña 149 km · 110 min (Palma: verano) Tiempo histórico orientativo: ~95 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Asturias 128 km · 95 min (Palma: verano); Santiago 139 km · 105 min (Palma: casi todo el año); A Coruña 149 km · 110 min (Palma: verano) |
| `autonomiaCotidiana` | BAJA-MEDIA |
| `casaQueBuscar` | Vivienda cómoda y accesible, 2–3 dormitorios, exterior, servicios cotidianos ... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Intermedio |
| `comunicaciones` | A-8 / N-642; tren Renfe Ancho Métrico (antigua FEVE) |
| `comunicacionesNota10` | `5` |
| `cubiertos` | `165` |
| `dependenciaCocheTexto` | Alta para vivir simultáneamente servicios y costa. |
| `despejados` | `40` |
| `estacionalidad2026` | Vida local/industrial anual. |
| `fibra` | Parcial |
| `franja` | A |
| `hospitalMin` | `20` |
| `hospitalPractico2026` | Hospital Público da Mariña, Burela |
| `hospitalPriv` |  |
| `hospitalPub` | 15 km · 20 min · Hospital da Mariña (Burela) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 15 km · 20 min · Hospital da Mariña (Burela); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `82` |
| `lat` | `43.684` |
| `lluviaDias` | `148` |
| `lluviaMm` | `1100` |
| `lon` | `-7.512` |
| `mapa` | 41_xove.png |
| `mercadoReventa` | Mercado estrecho o de muestra limitada: la salida depende mucho del producto.... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `5` |
| `minCosta` | `5` |
| `municipio` | Xove |
| `n` | `41` |
| `niebla` | Alta |
| `obraNueva` | No |
| `pais` | España |
| `palmaDirecta2026` | Verano / Santiago (casi todo el año) · 105 min La programación aérea es variable; comprobar temporada y horario vigente. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Santiago (casi todo el año) · 105 min |
| `paseoCotidiano` | Paseos locales; Senda Costeira es salida deliberada. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Costa potente y equipamientos básicos, pero separados espacialmente; contexto industrial de Morás/Lago. |
| `playaBano` | Esteiro / Portocelo |
| `playaCotidiana` | NO DESDE NÚCLEO |
| `playaCotidianaModo` | El núcleo principal es interior; el mar exige desplazamiento. |
| `precioM2` | `null` *(n.d. / ausente)* |
| `provincia` | Lugo |
| `radioCotidiano` | San Bartolomé concentra administración y servicios; biblioteca/Centro Cívico y piscina/gimnasio. |
| `radioSalida` | Costa: Morás, Portocelo, Roncadoira y Senda Costeira >18 km; Portocelo es pequeña playa abrigada. |
| `sanidadPrimaria2026` | Atención primaria local |
| `servicios` | `3` |
| `serviciosEstado` | VALIDADO — Galicia |
| `serviciosNota` | Falta: comercio grande (Viveiro / Burela) |
| `slug` | xove |
| `solHoras` | `1850` |
| `tempAgua` | 17-19 |
| `tempInvierno` | `9.0` |
| `tempVerano` | `18.5` |
| `transporteRelevante2026` | A-8 / N-642; tren FEVE Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital Público da Mariña, Burela. |
| `viento` | Media |
| `zona` | A Mariña |

### 3.3 Plan editorial

> CITA LITERAL — CURSOR_19.

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

### 3.4 Auditoría relato ↔ capa

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Precio municipal | casa remite a Idealista sin media (bien) / histórico 950 en CURSOR_14 | `precioM2` **null** (n.d.); A/B null | ALINEADO (actual) / OBSOLETO (histórico) | **Conservar n.d.** No derivar A/B ni reintroducir 950 |
| Servicios 3/10 | Repetido | `servicios` 3 — coincide | DUPLICA_CAPA | Omitir nota; narrar apoyo Burela/Viveiro |
| Autonomía / coche | Sin coche casi no existe | BAJA-MEDIA; dependencia Alta; playa NO DESDE NÚCLEO | ALINEADO | Enfatizar separación núcleo↔costa |
| San Bartolomé + biblioteca/piscina | Ausente en relato | radioCotidiano: San Bartolomé admin + biblioteca/Centro Cívico + piscina/gimnasio | SOPORTADO_PERO_INFRAUSADO | Glosar San Bartolomé como núcleo de servicios; no inventar horarios |
| Esteiro / Portocelo / Roncadoira | Presentes | playaBano Esteiro/Portocelo; radioSalida Morás/Portocelo/Roncadoira/Senda | P4_PRESERVAR | Arcos/surf como carácter; no playa cotidiana desde núcleo |
| Alcoa / San Ciprián 2026 | Propiedad íntegra, aluminio abril, alúmina en duda | peajeRealidad / estacionalidad industria Morás/Lago; advertencia no detalla Alcoa 2026 | P4_PRESERVAR | Preservar solo hechos ya en relato; no inferir empleo/humo/salud |
| Hospital 20′ / aero 95–105′ | Repetidos | hospitalMin 20; aeropuertoMin 95 | DUPLICA_CAPA | Consecuencia una vez |
| Fibra parcial | Repetida | fibra Parcial | ALINEADO / DUPLICA_CAPA | Una mención cualitativa |
| Senda Costeira >18 km | Ausente | radioSalida | SOPORTADO_PERO_INFRAUSADO | Salida deliberada, no paseo diario |
| Café/mercado denso | No | Falta comercio grande (nota) | NO_SOPORTADO_NO_INVENTAR | No inventar |

**CURSOR_14:** URGENTE; P0 n.d. pero relato citaba 950. **P0_RESTANTES:** sin P0 precio (relato actual ya remite a Idealista/capa sin media). Mantener **n.d.**

### 3.5 P4 a preservar

Costa de carácter (Esteiro) + parroquias + peso Alcoa/San Ciprián; núcleo servicios ≠ orilla.

(Detalle tabular en §3.3 B.)

### 3.6 Vida cotidiana soportada

Pregunta guía: *Ya vivo aquí. Tengo toda la mañana libre. ¿Qué puedo hacer sin convertirlo en turismo?*

| Elemento | Clasificación | Base repo |
|---|---|---|
| Rutina en San Bartolomé (admin/servicios) | SOPORTADO PERO FALTA EN RELATO | radioCotidiano |
| Biblioteca / Centro Cívico / piscina-gimnasio | SOPORTADO PERO FALTA EN RELATO | radioCotidiano |
| Esteiro/Portocelo (con coche desde núcleo) | YA SOPORTADO | relato + playa NO DESDE NÚCLEO |
| Senda Costeira | SOPORTADO PERO FALTA EN RELATO | radioSalida (salida) |
| Compra grande | YA SOPORTADO (fuera) | serviciosNota Viveiro/Burela |
| Café concreto | NO SOPORTADO | — |
| Convivir con industria San Ciprián | YA SOPORTADO | relato + peaje |

### 3.7 Duplicaciones a eliminar

- servicios 3/10, hospital 20′, aero 95–105′
- clima Mallorca
- fibra parcial martilleada
- Alcoa párrafo repetido vivir+historia+encaja.no

### 3.8 No soportado / no inventar

- Cualquier `precioM2` o A/B inventado (capa n.d.)
- 950 histórico
- Horarios biblioteca/piscina
- Inferencias de salud/empleo por Alcoa no escritas ya
- Café/mercado denso local
## 4. Cervo

### 4.1 Relato actual completo

> CITA LITERAL — objeto `cervo` en `relatos-a-marina.ts`.

```ts
cervo: {
    escala: "Costa y cerámica",
    abrir: [
      "Cervo vive en dos tiempos a la vez. Unos cuatro mil habitantes entre San Cibrao —península con puerto, Museo Provincial do Mar, playas de Cubelas y O Torno— y Sargadelos, la referencia de cerámica gallega junto a la ruta del río Xunco. Es costa e industria: el complejo de San Ciprián —el nombre con que se conoce la refinería de alúmina y la fábrica de aluminio de San Cibrao, repartidas entre Cervo y Xove— está aquí mismo, con el hospital cerca y un casco menos denso que Viveiro o Ribadeo. Quien busca aquí no busca muralla: busca península, oficio y la Real Fábrica como marca del municipio.",
      "Un martes de noviembre los servicios son 4/10 en nuestra escala: lo básico en el municipio; Burela, a unos diez minutos, completa comercio y hospital. Quien vive en San Cibrao siente puerto y Cantábrico; quien mira hacia Sargadelos, piedra, cerámica y paseo. El Hospital da Mariña queda a unos diez minutos desde San Cibrao —de los trayectos más cortos de la comarca—. El aeropuerto anda entre noventa y ciento cinco minutos según destino y ruta. Fibra parcial: comprobar dirección.",
      "En verano San Cibrao y las playas reciben veraneo con tráfico hacia Cubelas y O Torno. El calendario local anima la costa; no rivaliza con la Semana Santa de Viveiro en impacto sobre un casco histórico. Quien viva en la península notará agosto; hacia Sargadelos y el interior, el volumen baja antes.",
      "Fuera de temporada Cervo recupera ritmo de costa trabajada e industria cercana. Primavera y otoño dejan el Paseo dos Namorados y la ruta del Xunco más quietos. Si solo conoces un sábado de sol en Cubelas, te llevas la imagen de folleto de la península. Si has visto niebla y lonja, ya puedes decidir si quieres ese conjunto.",
      "Encaja sobre todo por San Cibrao y la cercanía al hospital, no por villa completa ni aeropuerto cercano.",
    ],
    tiempo: [
      "Cervo suma unas 1.880 horas de sol y unos 40 días despejados frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.050 milímetros en unos 146 días. Niebla alta; viento medio. El invierno es húmedo y gris; el verano también llovizna con frecuencia.",
      "El verano ronda 18,5 °C, fresco frente a Baleares. Cubelas y O Torno tienen agua entre 17 y 19 °C; el Cantábrico abierto pide días de mar llana para un baño cómodo. Se gana frescura; se acepta cielo de Mariña. Conviene probar un frente de niebla, no solo un agosto claro en la península.",
    ],
    vivir: [
      "El invierno en Cervo se nota en San Cibrao y hacia Sargadelos: humedad, niebla alta, viento medio y un cielo de unas 1.880 horas de sol frente a Mallorca. Conviene mirar aislamiento, salitre en la península y rastros de moho un día de niebla, no solo un agosto claro en Cubelas. La terraza o el balcón de verano se usan menos entre noviembre y febrero.",
      "El día a día sin coche es incompleto: los servicios son 4/10 —lo básico en el municipio—; Burela, a unos diez minutos, completa comercio y hospital. Quien vive en San Cibrao siente puerto y Cantábrico; quien mira hacia Sargadelos, piedra, cerámica y paseo. En enero Cervo recupera ritmo de costa trabajada e industria cercana; no es villa amurallada densa. Quien viva en la península notará agosto en Cubelas y O Torno; hacia Sargadelos y el interior, el volumen baja antes.",
      "Llegar de fuera busca península, oficio y la Real Fábrica, no muralla. Se oye gallego en San Cibrao y en Sargadelos; el castellano basta para lo cotidiano. Entre semana manda el coche hacia Burela para muchos recados; en verano la costa recibe veraneo. Quien mire Cervo solo por las playas debe sumar el complejo de San Ciprián —repartido entre Cervo y Xove—: en 2026 Alcoa asumió la propiedad íntegra, reinició el aluminio en abril y sigue señalando dudas de viabilidad en la refinería de alúmina por el coste energético.",
      "La sanidad de urgencia y especialidades está cerca: el Hospital da Mariña queda a unos diez minutos —de los mejores tiempos de la zona—. Empadronarse aquí abre el médico de cabecera local; para el comarcal se conduce un trayecto corto a Burela. No es hospital a pie como en Burela, pero sí asumir una sanidad comarcal mucho más cercana que en O Vicedo o Ribadeo.",
      "Mantener el vínculo con Mallorca pasa por un aeropuerto alrededor de los noventa o ciento cinco minutos —Asturias o Santiago—. En invierno el trayecto a menudo implica más logística. Conviene mirar el calendario real de vuelos del año, no solo el sol de la península en agosto.",
      "Hay viviendas en San Cibrao, en el entorno de Sargadelos y en parroquias; poca obra nueva y fibra parcial. En la península hay que contar con salitre y ocupación de verano; hacia el interior, acceso y humedad. Conviene ver un día de viento y un noviembre, no solo el sol de la foto típica. En una casa con escaleras o parcela en desnivel hay que imaginar la rutina dentro de diez años; reforma y vistas al mar mueven el precio.",
    ],
    historia: [
      "Sargadelos es el hilo cultural del municipio: la Real Fábrica y la cerámica gallega de diseño reconocible, con la ruta del río Xunco y el Paseo dos Namorados. No es un adorno: es la marca que saca a Cervo del mapa solo industrial y explica visitas que no son solo de playa.",
      "San Cibrao aporta puerto, Museo Provincial do Mar y la península habitada frente al Cantábrico: la ficha marinera y la de la costa vivida. El complejo de San Ciprián —refinería de alúmina y planta de aluminio, entre Cervo y Xove— explica empleo y tensión económica: Alcoa es propietaria íntegra desde 2026, el aluminio volvió en abril y la refinería sigue bajo dudas de viabilidad por la energía.",
    ],
    fuera: [
      "Cubelas y O Torno son las playas de la península: arena, Cantábrico y aparcamiento justo en los días buenos de agosto. Un martes de junio la orilla se respira; un domingo de temporada, no.",
      "El museo y el puerto de San Cibrao permiten una tarde sin salir lejos: oficio, dársena y el mar como trabajo. No hace falta convertir cada salida en excursión.",
      "Sargadelos y la ruta del Xunco dan paseo y visita de cerámica. Burela cubre hospital a diez minutos; Viveiro, casco y Covas; Esteiro, en Xove, arcos y surf. Aquí la orilla de diario es la península; la villa densa, Burela o Viveiro.",
    ],
    casa: [
      "Hay viviendas en San Cibrao, en el entorno de Sargadelos y en parroquias; poca obra nueva y fibra parcial. En la península hay que contar con salitre y ocupación de verano; hacia el interior, acceso y humedad. Conviene ver un día de viento y un noviembre, no solo el sol de la foto típica.",
      "Según Idealista (agosto de 2026), el precio medio ronda 1.210 €/m². Tres habitaciones en tipologías modestas quedan en franja asequible —alrededor de 142.000 euros, estimación a partir del €/m²—; reforma y vistas al mar mueven el precio.",
      "Los servicios son 4/10. El Hospital da Mariña queda a unos diez minutos. Asturias anda alrededor de los noventa; Santiago, hacia los ciento cinco. Quien priorice sanidad cerca y Costa de San Cibrao lo entiende; quien busque casco amurallado, mira Viveiro.",
    ],
    encaja: {
      si: [
        "Encaja para quien mande San Cibrao —la península con puerto, Museo Provincial do Mar y las playas de Cubelas y O Torno— y la cercanía al Hospital da Mariña a unos diez minutos, de los mejores tiempos de la zona. Un martes de noviembre los servicios son 4/10: lo básico en el municipio; Burela, a unos diez minutos, completa comercio y sanidad. Quien valore también Sargadelos —la Real Fábrica y la cerámica gallega de diseño reconocible, con la ruta del río Xunco y el Paseo dos Namorados— encontrará un municipio de costa e industria con precio contenido frente a Ribadeo o Viveiro, no un casco amurallado ni una frontera indiana. El aeropuerto anda alrededor de los noventa a ciento cinco minutos.",
        "El clima sigue lejos de Mallorca: unas mil ochocientas ochenta horas de sol y unos cuarenta días despejados frente a las dos mil ochocientas horas y ciento veinte jornadas claras de la isla; niebla alta, verano fresco cerca de dieciocho grados y medio. Cubelas y O Torno tienen agua entre diecisiete y diecinueve grados; el Cantábrico abierto pide días de mar llana para un baño cómodo. En verano la península recibe veraneo con tráfico hacia las playas; hacia Sargadelos y el interior el volumen baja. Encaja quien acepte coche para muchos recados a cambio de no vivir tan lejos del comarcal como en O Vicedo o Ribadeo.",
      ],
      no: [
        "No encaja si se busca casco amurallado, Semana Santa de interés internacional o villa de frontera completa. Viveiro y Ribadeo cubren ese carácter; Cervo ofrece península, cerámica e industria. Tampoco si el aeropuerto debe quedar a una hora: Asturias anda alrededor de los noventa minutos; Santiago, hacia los ciento cinco. Los servicios 4/10 no sustituyen un súper y un mercado densos a pie todos los días.",
        "Tampoco si el complejo industrial de San Ciprián —propiedad íntegra de Alcoa desde 2026, aluminio reactivado en abril y refinería de alúmina aún en cuestión por el coste energético— molesta como vecina visual y económica. Aquí la industria forma parte del municipio, junto al Museo do Mar y las playas. Y si se necesita el cielo estable de Baleares o un agosto silencioso en Cubelas, mejor probar otro tramo: niebla, cubierto y temporada de costa definen el año.",
      ],
      veredicto:
        "Veredicto: Cervo es costa, cerámica y hospital cerca. Buscaría vivienda en San Cibrao o cerca de Sargadelos, con fibra comprobada (es parcial), tras probar un agosto en la península y un día de niebla. Se ganan Cubelas, O Torno, Sargadelos y Burela a unos diez minutos; se aceptan servicios limitados, coche para el comercio grande, cielo de Mariña y el complejo de San Ciprián —Cervo/Xove, Alcoa 2026— en el horizonte.",
    },
    fotoIdentidad: {
      src: "/fotos/a-marina/cervo-identidad.jpg",
      pie: "Cervo: casas del pueblo frente al mar",
    },
    fotosAbrir: [
      { src: "/fotos/a-marina/cervo-sargadelos.jpg", pie: "Sargadelos: cerámica y Real Fábrica en Cervo" },
      { src: "/fotos/a-marina/cervo-villa.jpg", pie: "Cervo y el entorno de San Cibrao" },
    ],
    fotosHistoria: [
      { src: "/fotos/a-marina/cervo-faro.jpg", pie: "Faro y península de San Cibrao" },
      { src: "/fotos/a-marina/cervo-puerto.jpg", pie: "San Cibrao: la planta de aluminio frente al mar" },
    ],
    fotosFuera: [
      { src: "/fotos/a-marina/cervo-costa.jpg", pie: "Istmo y costa de San Cibrao en Cervo" },
    ],
    creditoFotos: credito,
  }
```

### 4.2 Capa 2026 completa

> CITA LITERAL — fila `slug: "cervo"` en `municipios-a-marina.json`.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `102245` |
| `A_3hab` | `141570` |
| `B_2hab` | `82583` |
| `B_3hab` | `114345` |
| `advertenciaMicrozona` | La experiencia costera descrita corresponde sobre todo a San Cibrao, no al conjunto de Cervo. |
| `aeropuertoMin` | `90` |
| `aeropuertoPractico2026` | Asturias 120 km · 90 min (Palma: verano); Santiago 144 km · 105 min (Palma: casi todo el año); A Coruña 156 km · 115 min (Palma: verano) Tiempo histórico orientativo: ~90 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Asturias 120 km · 90 min (Palma: verano); Santiago 144 km · 105 min (Palma: casi todo el año); A Coruña 156 km · 115 min (Palma: verano) |
| `autonomiaCotidiana` | MEDIA |
| `casaQueBuscar` | Vivienda cómoda y accesible, 2–3 dormitorios, exterior, servicios cotidianos ... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Intermedio |
| `comunicaciones` | A-8 / N-642; tren Renfe Ancho Métrico (antigua FEVE) (San Cibrao) |
| `comunicacionesNota10` | `5` |
| `cubiertos` | `165` |
| `dependenciaCocheTexto` | Media; baja en San Cibrao para rutina, mayor fuera. |
| `despejados` | `40` |
| `estacionalidad2026` | Vida anual con actividad industrial próxima. |
| `fibra` | Parcial |
| `franja` | A |
| `hospitalMin` | `10` |
| `hospitalPractico2026` | Hospital Público da Mariña, Burela |
| `hospitalPriv` |  |
| `hospitalPub` | 5 km · 10 min · Hospital da Mariña (Burela) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 5 km · 10 min · Hospital da Mariña (Burela); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `82` |
| `lat` | `43.67` |
| `lluviaDias` | `146` |
| `lluviaMm` | `1050` |
| `lon` | `-7.411` |
| `mapa` | 42_cervo.png |
| `mercadoReventa` | Mercado intermedio: base residencial propia y/o demanda exterior. Priorizar u... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `5` |
| `minCosta` | `5` |
| `municipio` | Cervo |
| `n` | `42` |
| `niebla` | Alta |
| `obraNueva` | No |
| `pais` | España |
| `palmaDirecta2026` | Verano / Santiago (casi todo el año) · 105 min La programación aérea es variable; comprobar temporada y horario vigente. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Santiago (casi todo el año) · 105 min |
| `paseoCotidiano` | O Torno–A Atalaia/faro y frente de San Cibrao. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Mar cotidiano en San Cibrao, con escala de servicios pequeña y presencia industrial de Alcoa. |
| `playaBano` | Cubelas / O Torno (San Cibrao) |
| `playaCotidiana` | SÍ EN SAN CIBRAO |
| `playaCotidianaModo` | O Torno (~578 m) y Cubelas (~240 m) son playas protegidas con paseo. |
| `precioM2` | `1210` |
| `provincia` | Lugo |
| `radioCotidiano` | San Cibrao reúne pequeño núcleo marítimo, servicios y puerto; otras áreas municipales son distintas. |
| `radioSalida` | Otros tramos de A Mariña y servicios/hospital en Burela. |
| `sanidadPrimaria2026` | Atención primaria local |
| `servicios` | `5` |
| `serviciosEstado` | VALIDADO — Galicia |
| `serviciosNota` | Tiene: San Cibrao con playas. Falta: comercio grande (Burela a 10 min) |
| `slug` | cervo |
| `solHoras` | `1880` |
| `tempAgua` | 17-19 |
| `tempInvierno` | `9.5` |
| `tempVerano` | `18.5` |
| `transporteRelevante2026` | A-8 / N-642; tren FEVE (San Cibrao) Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital Público da Mariña, Burela. |
| `viento` | Media |
| `zona` | A Mariña |

### 4.3 Plan editorial

> CITA LITERAL — CURSOR_19.

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

### 4.4 Auditoría relato ↔ capa

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios 4/10 | Repetido abrir/vivir/casa/encaja | `servicios` **5** | OBSOLETO | Nunca 4; omitir nota o usar 5 solo si hace falta |
| Precio 1.210 / ~142k | casa + encaja | precioM2 1210; A_3hab 141570 | DUPLICA_CAPA | Omitir; capa/tabla |
| San Cibrao vs resto municipio | Península vs Sargadelos narrados | advertenciaMicrozona: experiencia costera sobre todo San Cibrao; playa SÍ EN SAN CIBRAO | ALINEADO / P4_PRESERVAR | No trasladar mar cotidiano a todo Cervo |
| Cubelas / O Torno / paseo faro | Presentes | playaCotidianaModo + paseo O Torno–A Atalaia | P4_PRESERVAR | Glosar |
| Sargadelos / Real Fábrica / Xunco / Paseo dos Namorados | Presentes | No campos numéricos; relato+historia | P4_PRESERVAR | Qué es/por qué importa; no inventar visitas/horarios |
| Museo Provincial do Mar | Presente | radioCotidiano San Cibrao núcleo marítimo | P4_PRESERVAR | Preservar |
| Alcoa / San Ciprián | Detalle 2026 en relato | peajeRealidad menciona Alcoa | P4_PRESERVAR | Hechos ya escritos; no exagerar efectos |
| Hospital ~10′ | Repetido | hospitalMin 10 | DUPLICA_CAPA | Consecuencia una vez (ventaja vs O Vicedo) |
| Autonomía MEDIA / coche | Día a día incompleto; Burela 10′ | autonomia MEDIA; dependencia Media | ALINEADO | Narrar sin nota 4/10 |
| FEVE San Cibrao | Casi ausente | transporteRelevante2026 | SOPORTADO_PERO_INFRAUSADO | Existencia sin promesa |
| Café/mercado concreto | «lo básico» | serviciosNota falta comercio grande | NO_SOPORTADO_NO_INVENTAR | No inventar |

**CURSOR_14:** ALTA; P2 €/m²+sol. **P0_RESTANTES:** sin P0 precio. Conflicto vivo: servicios 4 vs 5.

### 4.5 P4 a preservar

Dos tiempos: San Cibrao (península/mar) y Sargadelos (cerámica); hospital cerca; industria en horizonte.

(Detalle tabular en §4.3 B.)

### 4.6 Vida cotidiana soportada

Pregunta guía: *Ya vivo aquí. Tengo toda la mañana libre. ¿Qué puedo hacer sin convertirlo en turismo?*

| Elemento | Clasificación | Base repo |
|---|---|---|
| Paseo San Cibrao / Cubelas / O Torno | YA SOPORTADO | relato + capa |
| Museo do Mar / puerto | YA SOPORTADO | relato |
| Sargadelos / Xunco / Paseo dos Namorados | YA SOPORTADO | relato |
| Compra grande / Burela 10′ | YA SOPORTADO | relato + capa |
| FEVE San Cibrao | SOPORTADO PERO FALTA EN RELATO | transporte |
| Café/mercado con nombre | NO SOPORTADO | — |
| Biblioteca/deporte con nombre | NO SOPORTADO | — |

### 4.7 Duplicaciones a eliminar

- servicios **4/10** (incorrecto), hospital 10′, aero
- precio 1210/~142k
- clima Mallorca
- San Cibrao/Sargadelos/Alcoa reiterados

### 4.8 No soportado / no inventar

- Servicios 4/10
- Efectos industriales no soportados (salud, despidos futuros)
- Café/mercado/deporte con nombre
- Afirmar mar cotidiano fuera de San Cibrao
## 5. Ribadeo

### 5.1 Relato actual completo

> CITA LITERAL — objeto `ribadeo` en `relatos-a-marina.ts`.

```ts
ribadeo: {
    escala: "Villa de frontera y As Catedrais",
    abrir: [
      "Ribadeo se siente una de las villas más completas de A Mariña. Unos diez mil habitantes: casco indiano con la Torre dos Moreno, puerto, Illa Pancha —faro en un islote—, ría del Eo frente a Castropol —Asturias— y As Catedrais a unos diez minutos. La A-8 pasa cerca. Es una de las opciones de la comarca con mejor acceso al aeropuerto de Asturias —unos sesenta minutos según ruta— y villa caminable densa: mercado, comercio y mesas que no se apagan en enero.",
      "Un martes de noviembre se resuelve comercio, mercado y centro de salud a pie. Quien vive aquí es gente de frontera —Galicia y Asturias a la vista— y de villa señorial costera. Los servicios alcanzan 7/10 y hay fibra. El Hospital da Mariña queda a unos treinta y cinco minutos; Jarrio, en Asturias, a unos treinta —conviene comprobar en el Sergas el hospital de referencia según empadronamiento—. El aeropuerto de Asturias está a unos sesenta minutos.",
      "En verano As Catedrais, el paseo y la ría reciben afluencia, tráfico y aparcamiento justo. El veraneo anima el casco; no hay una Semana Santa de impacto internacional como en Viveiro, pero la temporada turística se nota en la orilla y en los accesos a los arcos. Vivir junto al recorrido hacia As Catedrais significa contar con semanas de volumen alto.",
      "Fuera de agosto Ribadeo es villa de frontera con mesas abiertas, puerto y Castropol enfrente. Primavera y otoño dejan la ría más quieta y el casco indiano más fácil de disfrutar. Si solo conoces los arcos un sábado de sol, te llevas la imagen de folleto. Si has visto niebla y un día de afluencia, ya puedes decidir si aceptas la logística real.",
      "Encaja para quien quiera la mejor logística de A Mariña sin salir del cielo gris lucense.",
    ],
    tiempo: [
      "Ribadeo suma unas 1.950 horas de sol y unos 40 días despejados —el extremo algo menos duro de la zona— frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.000 milímetros en unos 140 días. La niebla es media aquí; el viento, medio. Mejora un poco el gris de O Vicedo, pero sigue lejos de Baleares.",
      "El verano ronda 18,5 °C, fresco frente a Baleares. As Catedrais y Os Bloques tienen agua entre 17 y 19 °C; la ría del Eo ofrece orilla más recogida. Sigue lejos del Mediterráneo, pero el paseo compensa muchos días de baño corto. Conviene probar marea en los arcos y un noviembre, no solo el sol de agosto.",
    ],
    vivir: [
      "El invierno en Ribadeo se nota en el piso del casco indiano o hacia la ría: humedad, niebla media —algo menos dura que en O Vicedo— y un cielo que sigue lejos de Mallorca. Conviene mirar aislamiento y rastros de moho un noviembre, no solo el sol de As Catedrais en agosto. La terraza que en verano parece el centro de la vida se usa menos entre noviembre y febrero; en el centro hay que contar con turismo de verano y humedad.",
      "El día a día sin coche es de los más fáciles de A Mariña: un martes de noviembre se resuelve comercio, mercado y centro de salud a pie. Los servicios alcanzan 7/10 y hay fibra. En enero Ribadeo es villa de frontera con mesas abiertas, puerto y Castropol enfrente —no se apaga—. Quien viva junto al recorrido hacia As Catedrais debe contar con semanas de afluencia, tráfico y aparcamiento justo en verano.",
      "Llegar de fuera es habitual: gente de frontera —Galicia y Asturias a la vista— y de villa señorial costera. Se oye gallego en el casco y en el mercado; el castellano basta para lo cotidiano. Entre semana manda la villa caminable; en verano As Catedrais, el paseo y la ría reciben temporada turística. Si solo buscas los arcos de un sábado de sol, te llevas la imagen de folleto. Si buscas vecinos todo el año, también —en escala de villa completa, no de bloque vacío de veraneo.",
      "La sanidad de urgencia y especialidades no está a quince minutos: Jarrio, en Asturias, queda a unos treinta; el Hospital da Mariña, en Burela, a unos treinta y cinco —conviene comprobar en el Sergas el hospital de referencia según empadronamiento—. En Ribadeo hay centro de salud para lo diario. Empadronarse aquí abre el médico de cabecera local; para hospital comarcal gallego se conduce a Burela. No hay privado cerca (Lugo u Oviedo a más de una hora y cuarto). Quien mire Ribadeo solo por As Catedrais debe sumar ese trayecto sanitario con los ojos abiertos.",
      "Mantener el vínculo con Mallorca pasa por el aeropuerto de Asturias, a unos sesenta minutos, —conviene comprobar la programación de vuelos a Palma—; Santiago-Lavacolla anda hacia los ciento veinte. Es una de las opciones con mejor acceso al aeropuerto de Asturias —unos sesenta minutos según ruta—. En invierno el trayecto a menudo implica más logística o ir a Santiago. Conviene mirar el calendario real de vuelos del año, no solo el de agosto en los arcos.",
      "El casco ofrece pisos y viviendas indianas o reformadas; las afueras, más espacio. Hay poca obra nueva y fibra. En el centro hay que contar con turismo de verano y humedad; hacia As Catedrais, acceso y ocupación de temporada. Conviene probar un día de afluencia hacia los arcos antes de comprar esa calle. En un piso con escaleras o sin ascensor hay que imaginar la rutina dentro de diez años; la terraza útil es la que recibe sol de invierno, no solo la que mira la ría del Eo en foto.",
    ],
    historia: [
      "El casco indiano —casas de quien volvió de América con fortuna— y la Torre dos Moreno explican Ribadeo como villa de prestigio costero, no solo como puerto. Illa Pancha añade faro y foto típica sobre el Cantábrico: piedra, islote y océano en la misma imagen.",
      "La ría del Eo frente a Castropol y la Reserva de la Biosfera del Eo marcan la frontera Galicia-Asturias vivida, no decorada. As Catedrais son el gran magnetismo natural a diez minutos. Lo que conviene saber junta indianos, ría y acantilado.",
    ],
    fuera: [
      "As Catedrais son el paseo imprescindible: arcos, marea y costa abierta. Un martes de junio con marea buena se entiende el sitio; un domingo de agosto el aparcamiento y las sendas se llenan. Vivir cerca significa contar ese volumen.",
      "Illa Pancha y el puerto completan la tarde sin alejarse: faro, dársena y casco a minutos. Os Bloques amplían orilla cuando apetece otra arena.",
      "Castropol, enfrente, ofrece la orilla asturiana. Foz y Barreiros amplían playas; Burela cubre el hospital comarcal gallego. Aquí la orilla de diario puede ser ría o arcos; la sanidad a pie, no.",
    ],
    casa: [
      "El casco ofrece pisos y viviendas indianas o reformadas; las afueras, más espacio. Hay poca obra nueva y fibra. En el centro hay que contar con turismo de verano y humedad; hacia As Catedrais, acceso y ocupación de temporada. Conviene probar un día de afluencia hacia los arcos antes de comprar esa calle.",
      "Según Idealista (agosto de 2026), el precio medio ronda 1.845 €/m², de los más altos de A Mariña. Tres habitaciones en franja asequible se estiman alrededor de 166.000 euros a partir de ese €/m² —estimación, no anuncio real—.",
      "Los servicios son 7/10. Jarrio queda a unos treinta minutos; Burela, a unos treinta y cinco. El aeropuerto de Asturias está a unos sesenta, —conviene comprobar la programación de vuelos a Palma—; Santiago-Lavacolla, hacia los ciento veinte. Quien priorice villa completa y vuelo a una hora lo entiende; quien necesite hospital a quince minutos, mira Burela o Cervo.",
    ],
    encaja: {
      si: [
        "Encaja para quien quiera una villa densa y caminable en A Mariña: casco indiano con la Torre dos Moreno, puerto, Illa Pancha —faro en un islote—, ría del Eo frente a Castropol —Asturias—, As Catedrais a unos diez minutos y la A-8 cerca. Un martes de noviembre se resuelve comercio, mercado y centro de salud a pie; los servicios alcanzan 7/10 y hay fibra. Es una de las opciones con mejor acceso al aeropuerto de Asturias —unos sesenta minutos según ruta; conviene comprobar la programación de vuelos a Palma— y villa caminable densa. Quien priorice logística, frontera y arcos de piedra frente a hospital a cinco minutos encontrará aquí uno de los accesos más cortos al aeropuerto de Asturias en la costa lucense sin salir del cielo de Mariña. Os Bloques completan orilla; la Reserva de la Biosfera del Eo marca el paisaje de frontera.",
        "El clima mejora un poco el extremo oeste —unas mil novecientas cincuenta horas de sol, niebla media aquí frente a alta en O Vicedo— pero sigue lejos de Mallorca: unos cuarenta días despejados frente a ciento veinte; alrededor de mil milímetros en unos ciento cuarenta días. El verano ronda dieciocho grados y medio: se gana frescura frente al Mediterráneo y se acepta cielo cantábrico. As Catedrais y Os Bloques tienen agua entre diecisiete y diecinueve grados; la ría del Eo ofrece orilla más recogida. En verano arcos, paseo y ría reciben afluencia y aparcamiento justo; fuera de agosto Ribadeo es villa de frontera con mesas abiertas y Castropol enfrente. Encaja quien acepte ese gris a cambio de casco, ría y el mejor vuelo de la comarca.",
      ],
      no: [
        "No encaja si el hospital gallego debe quedar a quince minutos o si se necesita privado en la comarca. Jarrio, en Asturias, queda a unos treinta minutos; el Hospital da Mariña, en Burela, a unos treinta y cinco —conviene comprobar en el Sergas el hospital de referencia según empadronamiento—. No hay privado cerca (Lugo u Oviedo a más de una hora y cuarto). Burela cubre sanidad a pie; Cervo, a unos diez minutos del comarcal. Quien mire Ribadeo solo por As Catedrais debe sumar ese trayecto sanitario con los ojos abiertos.",
        "Tampoco si se busca el sol de Baleares: Ribadeo suaviza un poco el gris de O Vicedo, pero sigue lejos de Mallorca en despejados y calor de verano. Y si agosto hacia As Catedrais debe ser silencioso, mejor otra calle: la temporada turística se nota en la orilla y en los accesos a los arcos. El precio es el más alto de A Mariña —la referencia actual está en la capa factual y en Idealista del mes— y aún asequible frente a otras costas, pero no el metro de O Vicedo.",
      ],
      veredicto:
        "Veredicto: Ribadeo es la elección si A Mariña se mira en serio. Buscaría tres habitaciones en casco o cerca del paseo —franja asequible alrededor de ciento sesenta y cuatro mil euros—, fuera del atasco de coches hacia As Catedrais en agosto, tras probar niebla y un día de afluencia en los arcos. Se ganan villa completa, Illa Pancha, ría del Eo y Asturias a una hora; se aceptan hospital a media hora larga, clima cantábrico y el metro más alto de la zona.",
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

### 5.2 Capa 2026 completa

> CITA LITERAL — fila `slug: "ribadeo"` en `municipios-a-marina.json`.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `155903` |
| `A_3hab` | `215865` |
| `B_2hab` | `125921` |
| `B_3hab` | `174353` |
| `advertenciaMicrozona` | `null` *(n.d. / ausente)* |
| `aeropuertoMin` | `60` |
| `aeropuertoPractico2026` | Asturias 78 km · 60 min (Palma: verano); A Coruña 135 km · 100 min (Palma: verano); Santiago 161 km · 120 min (Palma: casi todo el año) Tiempo histórico orientativo: ~60 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Asturias 78 km · 60 min (Palma: verano); A Coruña 135 km · 100 min (Palma: verano); Santiago 161 km · 120 min (Palma: casi todo el año) |
| `autonomiaCotidiana` | FUERTE |
| `casaQueBuscar` | Vivienda cómoda y accesible, 2–3 dormitorios, exterior, servicios cotidianos ... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Intermedio |
| `comunicaciones` | A-8 / N-634 / N-640; tren Renfe Ancho Métrico (antigua FEVE); puente dos Santos |
| `comunicacionesNota10` | `7` |
| `cubiertos` | `165` |
| `dependenciaCocheTexto` | Baja para vida de villa; coche para hospital y playas atlánticas. |
| `despejados` | `40` |
| `estacionalidad2026` | Villa comarcal anual; As Catedrais añade turismo estacional. |
| `fibra` | Sí |
| `franja` | A |
| `hospitalMin` | `30` |
| `hospitalPractico2026` | Hospital Público da Mariña, Burela |
| `hospitalPriv` |  |
| `hospitalPub` | 30 km · 30 min · Jarrio (Coaña) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 30 km · 30 min · Jarrio (Coaña); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `80` |
| `lat` | `43.537` |
| `lluviaDias` | `140` |
| `lluviaMm` | `1000` |
| `lon` | `-7.041` |
| `mapa` | 46_ribadeo.png |
| `mercadoReventa` | Mercado relativamente amplio por demanda residencial permanente y servicios. ... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `5` |
| `minCosta` | `5` |
| `municipio` | Ribadeo |
| `n` | `46` |
| `niebla` | Media |
| `obraNueva` | Poca |
| `pais` | España |
| `palmaDirecta2026` | Verano / Santiago (casi todo el año) · 120 min La programación aérea es variable; comprobar temporada y horario vigente. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Santiago (casi todo el año) · 120 min |
| `paseoCotidiano` | Villa–ría–puerto y miradores. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Mucha autonomía y ría diaria, pero hospital y playa atlántica están fuera. |
| `playaBano` | Os Bloques / As Catedrais (con marea) |
| `playaCotidiana` | NO MARÍTIMA DESDE VILLA |
| `playaCotidianaModo` | Ría/puerto sí son cotidianos; las playas atlánticas requieren salida. |
| `precioM2` | `1845` |
| `provincia` | Lugo |
| `radioCotidiano` | Villa con comercio, salud/PAC, farmacias, biblioteca, piscina/gimnasio y servicios comarcales. |
| `radioSalida` | As Catedrais y playas atlánticas; la villa cotidiana mira a la ría del Eo. |
| `sanidadPrimaria2026` | Centro de salud/PAC local; nuevo centro proyectado en 2026, no operativo |
| `servicios` | `8` |
| `serviciosEstado` | VALIDADO — Galicia |
| `serviciosNota` | Tiene: villa señorial completa, puerto. Falta: hospital (30-35 min) |
| `slug` | ribadeo |
| `solHoras` | `1950` |
| `tempAgua` | 17-19 |
| `tempInvierno` | `9.5` |
| `tempVerano` | `18.5` |
| `transporteRelevante2026` | A-8 / N-634 / N-640; tren FEVE; puente dos Santos Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital Público da Mariña, Burela. |
| `viento` | Media |
| `zona` | A Mariña |

### 5.3 Plan editorial

> CITA LITERAL — CURSOR_19.

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

### 5.4 Auditoría relato ↔ capa

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios 7/10 | Repetido | `servicios` **8** | OBSOLETO | Nunca 7; omitir o 8 |
| Precio 1.845 / ~166k / veredicto ~164k | casa/encaja/veredicto | precioM2 1845; A_3hab 215865 | OBSOLETO / DUPLICA_CAPA | Omitir totales; capa. ~164–166k no cuadran con A_3hab |
| Casco indiano / Torre dos Moreno / Illa Pancha | Presentes | radioCotidiano villa completa | P4_PRESERVAR | Preservar sin catálogo turístico |
| Ría del Eo / Castropol / Reserva Biosfera | Presentes | radioSalida; peaje ría diaria vs playa atlántica fuera | P4_PRESERVAR | Frontera vivida |
| As Catedrais ~10′ / Os Bloques | Magnetismo + afluencia | playaCotidiana NO MARÍTIMA DESDE VILLA; modo ría/puerto cotidianos | ALINEADO / P4_PRESERVAR | Separar vida cotidiana (ría) de salida (arcos) |
| Biblioteca / piscina/gimnasio / PAC | Ausentes o genéricos | radioCotidiano rico; sanidadPrimaria menciona centro proyectado 2026 no operativo | SOPORTADO_PERO_INFRAUSADO | Usar genéricos capa; **no** afirmar centro nuevo operativo |
| Hospital Jarrio 30′ / Mariña 35′ | Repetido + aviso Sergas | hospitalMin 30 Jarrio; hospitalPractico Mariña Burela; referencia histórica Jarrio | ALINEADO / DUPLICA_CAPA | Una explicación clara SERGAS; sin ficha repetida |
| Autonomía FUERTE / aero 60′ | Presente | autonomia FUERTE; aeropuertoMin 60 | ALINEADO / DUPLICA_CAPA | Tradeoff: mejor aero vs hospital lejos / precio alto zona |
| Mercado concreto día/nombre | «mercado» genérico | radio menciona comercio; sin nombre | NO_SOPORTADO_NO_INVENTAR | No inventar |
| A-8 / puente dos Santos | A-8 en abrir; puente en fotos/capa | comunicaciones / transporte | SOPORTADO_PERO_INFRAUSADO | Logística breve |

**CURSOR_14:** ALTA; P1 Palma; P2 €/m²+sol. **P0_RESTANTES:** sin P0 precio. Conflicto vivo: servicios 7 vs 8; totales A_3hab desalineados en prosa.

### 5.5 P4 a preservar

Villa completa frontera Eo + indianos; ría cotidiana vs As Catedrais como salida; mejor aero de comarca.

(Detalle tabular en §5.3 B.)

### 5.6 Vida cotidiana soportada

Pregunta guía: *Ya vivo aquí. Tengo toda la mañana libre. ¿Qué puedo hacer sin convertirlo en turismo?*

| Elemento | Clasificación | Base repo |
|---|---|---|
| Comercio / mercado genérico / CS a pie | YA SOPORTADO | relato + autonomia FUERTE |
| Paseo villa–ría–puerto / Illa Pancha | YA SOPORTADO | relato + paseoCotidiano |
| Biblioteca / piscina-gimnasio | SOPORTADO PERO FALTA EN RELATO | radioCotidiano |
| As Catedrais / Os Bloques | YA SOPORTADO (salida) | no cotidianos desde villa |
| Castropol enfrente | YA SOPORTADO | relato |
| Nombre/día mercado | NO SOPORTADO | — |
| Nuevo centro salud 2026 operativo | NO SOPORTADO | capa: proyectado, no operativo |

### 5.7 Duplicaciones a eliminar

- servicios **7/10** (incorrecto), aero 60′, hospital 30–35′
- precio 1845 y totales inconsistentes
- clima Mallorca
- «mejor aeropuerto» martilleado
- lista indianos/Catedrais/Eo en abrir+encaja

### 5.8 No soportado / no inventar

- Servicios 7/10
- Totales ~164–166k como A_3hab
- Centro de salud nuevo ya operativo
- Nombre/día de mercado
- Convertir As Catedrais en playa cotidiana de la villa


## 6. Referencia post-piloto

> CITA LITERAL — objetos actuales tras CURSOR_21/23.  
> Uso: densidad, omisión de chips, tradeoffs, casa cualitativa. **No** copiar frases ni topónimos.

### barreiros

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

### foz

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

### viveiro

```ts
viveiro: {
    escala: "Villa de ría con casco",
    abrir: [
      "Viveiro se entiende mejor como tres piezas que conviven: el casco amurallado, el puerto de Celeiro y Covas al otro lado de la ría. La Porta de Carlos V da entrada a una villa histórica que sigue teniendo comercio y vida propia; Celeiro recuerda que aquí el mar es también trabajo; Covas añade una playa larga y un paseo que en verano adquieren mucho más protagonismo.",
      "Esa combinación evita que el municipio dependa de una sola temporada. Un martes de enero el casco sigue funcionando como villa, mientras julio y agosto cargan más actividad sobre Covas. La diferencia importante no es elegir entre pueblo turístico o pueblo de trabajo, sino decidir en cuál de esas microzonas encaja mejor la rutina diaria."
    ],
    tiempo: [
      "Frente a Mallorca, Viveiro cambia la manera de usar la calle y la vivienda: más humedad y niebla, verano fresco y muchos más días en los que una terraza deja de ser el centro de la casa. Conviene ver un piso con tiempo gris y comprobar luz, ventilación y aislamiento, especialmente en edificios de piedra o cerca de la ría.",
      "El agua también se vive de otra manera. Covas ofrece la orilla más cotidiana y abrigada; Area y Sacido permiten cambiar de playa, mientras la costa exterior abre otro registro. Aquí el mar puede formar parte de una tarde normal sin que todos los días sean días de baño."
    ],
    vivir: [
      "En el casco se puede resolver buena parte de la semana andando: compra, atención primaria, comercio y paseo caben en una escala de villa. Covas combina esa vida próxima con playa y paseo; Celeiro organiza otra rutina alrededor del puerto. Para el hospital y para ampliar la costa hace falta salir de ese radio cotidiano.",
      "La Semana Santa cambia de verdad el funcionamiento del casco durante varios días. Las procesiones, la afluencia y las dificultades de aparcamiento no son una anécdota para quien viva allí, sino una parte concreta del calendario. En verano el cambio se desplaza sobre todo hacia Covas, con más ocupación, coches y terrazas.",
      "El tren de ancho métrico forma parte de las comunicaciones del municipio, aunque su existencia no debe confundirse con resolver por sí solo los desplazamientos cotidianos. Para vuelos y atención hospitalaria la logística sigue dependiendo en buena medida del coche y de salir de Viveiro.",
      "Una mañana libre no exige convertir el día en excursión. Se puede recorrer el casco, cruzar hacia la ría y Covas o cambiar el paseo por el Souto da Retorta y el Monte San Roque, donde el municipio pasa de piedra y puerto a monte cercano. Esa variedad es una de las formas más claras de entender su escala."
    ],
    historia: [
      "La Porta de Carlos V y el recinto amurallado explican la condición de villa histórica. No son solo un fondo monumental: concentran calles y vida urbana en una parte del municipio muy distinta de la fachada residencial de Covas.",
      "Celeiro aporta la otra historia visible, la del puerto y la lonja, con la merluza del pincho ligada a un oficio que continúa. La Semana Santa añade una capa cultural que, a diferencia de un monumento, altera durante unos días el uso normal de calles y aparcamiento."
    ],
    fuera: [
      "Covas es la playa que mejor se integra en la vida ordinaria si se reside en esa parte del municipio: arena, paseo y ría quedan unidos. Area y Sacido amplían las opciones cuando apetece otra orilla, pero no conviene trasladar esa facilidad automáticamente a cualquier vivienda del casco o de Celeiro.",
      "El Souto da Retorta, conocido por sus grandes eucaliptos, y el Monte San Roque, como mirador, ofrecen salidas cercanas cuando el plan no es playa. Hacia el este, el resto de A Mariña amplía costa y servicios; para atención hospitalaria, Burela forma parte de ese mapa práctico."
    ],
    casa: [
      "En el casco pesan el estado de la reforma, la humedad, las escaleras o el ascensor y cómo afectan la Semana Santa y el aparcamiento a la calle concreta. En Covas cambian las preguntas: ocupación de verano, salitre, orientación y distancia real a los servicios que se usarán durante el invierno.",
      "Casco, Covas y Celeiro no son versiones intercambiables de Viveiro. Una vivienda puede ganar playa y paseo o ganar proximidad al centro y al comercio; por eso la microzona importa más que una impresión general del municipio. Los precios y estimaciones quedan en la capa factual y en la tabla."
    ],
    encaja: {
      si: [
        "Encaja si se busca una villa con vida anual y varios registros a poca distancia: casco histórico para la rutina urbana, Celeiro como puerto de trabajo y Covas para incorporar ría, playa y paseo al día a día. La autonomía cotidiana es fuerte sin necesitar que Viveiro funcione como una ciudad grande.",
        "También encaja si se acepta que verano y Semana Santa cambien temporalmente algunas calles sin vaciar el resto del año. El atractivo está precisamente en combinar actividad local, mar y patrimonio sin que todo dependa del veraneo."
      ],
      no: [
        "Encaja peor si se necesita hospital en el propio municipio, aeropuerto próximo o una vivienda que funcione igual en agosto que en noviembre. Esos desplazamientos y la diferencia estacional forman parte de la vida real, aunque el núcleo resuelva bien muchas necesidades ordinarias.",
        "Tampoco si la humedad, la niebla o varios días de calles muy ocupadas durante la Semana Santa pesan más que la posibilidad de vivir en un casco histórico con ría y playa cercanas."
      ],
      veredicto:
        "Viveiro combina una villa histórica que funciona todo el año con puerto de oficio y una Covas más marítima y estacional. Su equilibrio depende mucho de escoger bien entre casco, Celeiro y Covas: se gana autonomía cotidiana y variedad de paseos, mientras hospital, aeropuerto y algunas salidas quedan fuera del radio inmediato."
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

### burela

```ts
burela: {
    escala: "Villa portuaria pesquera",
    abrir: [
      "Burela se explica mejor por lo que hace que por lo que enseña. El puerto y la lonja sitúan el trabajo del mar en primer plano, mientras el Hospital da Mariña y una red de comercio, mercado, biblioteca, auditorio, deporte y transporte dan al núcleo una funcionalidad poco habitual para su tamaño. No necesita un casco monumental para tener vida propia.",
      "Un martes de noviembre esa diferencia se nota más que en agosto: hay recados, servicios, actividad sanitaria y puerto sin esperar a la temporada de playa. A Marosa y Ril añaden mar a esa rutina, pero la fortaleza de Burela no es funcionar como un destino de playa, sino permitir que gran parte del día cotidiano ocurra dentro de la propia villa."
    ],
    tiempo: [
      "Frente a Mallorca, la casa y la calle se usan con otro ritmo: verano fresco, humedad, niebla y más jornadas grises. Cerca del mar conviene mirar orientación, aislamiento, ventilación y salitre; cerca del puerto, además, hay que entender que la actividad no desaparece cuando termina agosto.",
      "A Marosa y Ril permiten incorporar el Cantábrico a un paseo normal, aunque el baño depende más del día y del estado del mar que en una costa mediterránea. El frente marítimo sirve tanto para caminar como para recordar que aquí la orilla es también un lugar de trabajo."
    ],
    vivir: [
      "La vida diaria puede concentrarse mucho en el núcleo. Centro de salud, hospital, comercio, mercado, biblioteca, auditorio, estación y deporte forman un radio de servicios que reduce la necesidad de coger el coche para cada recado. Esa autonomía es uno de los rasgos más claros de Burela.",
      "El hospital cambia especialmente la geografía cotidiana: la atención hospitalaria está en el propio municipio, en vez de convertirse de entrada en un desplazamiento a otra villa. No hace falta repetir sus minutos en cada apartado para entender la consecuencia práctica: sanidad y vida urbana comparten el mismo mapa.",
      "El puerto introduce el peaje contrario. La lonja y la actividad pesquera son parte estructural de Burela, no decoración marítima; una vivienda próxima debe valorarse también un día de trabajo, con su movimiento y su ruido. La presencia histórica de una comunidad caboverdiana ligada a la pesca forma parte de esa historia contemporánea, sin necesidad de convertirla en una etiqueta sobre toda la villa.",
      "En verano A Marosa y Ril reciben más gente y la orilla gana actividad, pero Burela no se apaga al terminar la temporada. La cultura, el deporte, los servicios y el trabajo mantienen una base anual fuerte. Para el aeropuerto y para ampliar las salidas por A Mariña sí hace falta asumir desplazamientos fuera del núcleo."
    ],
    historia: [
      "El puerto, la lonja y el bonito del norte explican mejor Burela que una secuencia de monumentos. La villa ha construido buena parte de su identidad alrededor del oficio pesquero, y ese trabajo continúa visible en el presente.",
      "El Hospital da Mariña añade otra función comarcal muy concreta: Burela no solo recibe a quien viene por el puerto o por sus servicios, sino también por la sanidad. Cabo Burela completa el mapa costero, mientras la historia local reciente queda ligada sobre todo al mar, al trabajo y a los servicios."
    ],
    fuera: [
      "A Marosa y Ril son las referencias de playa, pero el paseo cotidiano puede seguir también el puerto y el frente marítimo. La experiencia cambia según el tramo: arena y baño en unos momentos, dársena y actividad pesquera en otros.",
      "Para variar de paisaje, Foz amplía ría y paseo; Cervo y San Cibrao cambian la relación entre industria, patrimonio y costa; Viveiro aporta casco histórico y Covas. Son salidas próximas dentro de A Mariña, mientras Burela conserva como ventaja propia poder volver a una villa muy funcional."
    ],
    casa: [
      "En Burela la vivienda debe leerse con el mapa de actividad delante. Cerca del puerto conviene escuchar una jornada de lonja antes de comprar; junto a la orilla pesan salitre y movimiento de verano. En otras calles, la ventaja puede ser llegar andando a una parte muy amplia de los servicios.",
      "En pisos y viviendas de una villa funcional importan accesibilidad, ascensor o escaleras, orientación, aislamiento y estado de la reforma. La capa factual y la tabla concentran precios y estimaciones; el relato útil es comprobar qué se gana en autonomía y qué ruido o exposición acepta la microzona concreta."
    ],
    encaja: {
      si: [
        "Encaja si se valora poder resolver mucha vida ordinaria dentro de una villa pequeña: sanidad, comercio, mercado, biblioteca, auditorio, deporte y transporte se suman a un puerto que mantiene actividad durante todo el año. A Marosa y Ril permiten además que el mar no quede reservado para una excursión.",
        "También encaja si se prefiere funcionalidad a imagen monumental. Burela no necesita parecer Viveiro o Ribadeo para tener identidad: su carácter está en el puerto de trabajo, la lonja y una escala urbana con servicios comarcales."
      ],
      no: [
        "Encaja peor si se busca ante todo un casco histórico de piedra, una fachada urbana especialmente monumental o una costa concebida como paisaje turístico. El puerto de trabajo y una imagen más funcional forman parte del lugar, no son algo que desaparezca al elegir otra calle.",
        "Tampoco si molesta la actividad pesquera cerca de casa o si el aeropuerto debe quedar muy próximo. La gran autonomía cotidiana reduce muchos desplazamientos, pero no elimina los viajes para volar ni convierte toda la costa en una playa-resort."
      ],
      veredicto:
        "Burela concentra mucha vida práctica en poca escala: hospital, servicios, puerto y frente marítimo funcionan durante todo el año. A cambio ofrece menos imagen monumental y exige escoger vivienda entendiendo el ruido del puerto, el salitre y la calle concreta. Su diferencia está en la funcionalidad cotidiana, no en competir con las postales históricas de otras villas."
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

**Método a imitar:** escena sin chips; Mallorca una vez cualitativa; hospital/aero como consecuencia; precio → capa/tabla; Encaja descriptivo; microzonas.

---

## 7. Estructura editorial de cierre

> CITA LITERAL — CURSOR_19 §4. Puede adaptarse por municipio **sin** plantilla rígida.

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

## 8. Contrato ChatGPT → Cursor

> Base CURSOR_19 §6, ampliada a **cuatro** objetos en una entrega.

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

**Específico CURSOR_24**

- ChatGPT entrega los **cuatro** objetos finales completos (`o-vicedo`, `xove`, `cervo`, `ribadeo`) en un solo paquete.
- Cursor copia literalmente (solo escapes/indentación/coma).
- Cursor **no** resume, SEO, añade hechos ni cambia cifras.
- Conflicto factual nuevo texto↔v15 ⇒ **parar**, no corregir, no commit.
- Edición quirúrgica; preservar EOL; no tocar Barreiros/Foz/Viveiro/Burela ni JSON/UI.
- Archivo: `web/src/lib/relatos-a-marina.ts` — solo esas cuatro claves.

---

## 9. Matriz final

| Municipio | Autonomía | Coche | Estacionalidad | Mar cotidiano | Paseo | Realidad estructural | P4 principal | Conflicto viejo principal | Invest. externa obligatoria v1 |
|---|---|---|---|---|---|---|---|---|---|
| O Vicedo | BAJA | Alta | Verano orilla / invierno aislado | SÍ/PARCIAL | Playas + Fuciño; PR-G156 infrausado | Extremo oeste / servicios mínimos | Fuciño–Estaca–aislamiento | Prosa precio rota + chips | **NO** |
| Xove | BAJA-MEDIA | Alta | Local/industrial anual; playa verano | NO DESDE NÚCLEO | Costa con coche; Senda=salida | Alcoa/San Ciprián + parroquias | Esteiro + industria + San Bartolomé | Precio n.d. (no inventar) | **NO** |
| Cervo | MEDIA | Media | Anual + industria; verano península | SÍ EN SAN CIBRAO | O Torno–faro | Dos tiempos San Cibrao/Sargadelos | Península + cerámica | Servicios 4≠5 | **NO** |
| Ribadeo | FUERTE | Baja en villa | Anual + turismo Catedrais | NO marítima desde villa (sí ría) | Villa–ría–puerto | Frontera Eo / indianos / aero 60′ | Eo + indianos; Catedrais=salida | Servicios 7≠8; totales precio | **NO** |

**Investigación externa obligatoria v1:** ninguna de las cuatro. El repo basta para relatos honestos al nivel del piloto si se usan radios/capa y se omiten cifras/conflictos marcados.
