# Continuidad NUEVO2

Documento corto y vivo. Si más adelante hace falta ampliarlo, se amplía.
Fecha de acuerdo: 2026-09-30. **Muros de Nalón** queda cerrado como referencia reciente de ajustes (Casa en cuadro, Mar explicado, fotos sin duplicar).

## Autoridad si chocan fuentes

1. Lo que diga Jose en el chat.
2. Este documento.
3. Referencias de prosa: **Cudillero** (más mimo) → **Gijón** / **Candás** → resto NUEVO2 ya montado.
4. Paquetes Desktop / manifiesto antiguo / chat5: contexto e historial de errores; no mandan sobre (1)–(3).

## Objetivo editorial

Cada ficha debe permitir imaginar vivir allí con información verdadera:

**verdad + explicación + imaginación residencial.**

Los datos informan; el relato transporta. Sin “habla indio”. Sin explicar en el texto público cómo está escrita la ficha.

**Lector ajeno:** alguien que no conoce el pueblo debe entender cada frase a la primera. Si un nombre de lugar aparece, hay que situarlo (qué es, dónde queda respecto a lo ya dicho, cómo se vive). Nombrar sin detallar = fallo.

### Experiencia (palabra de Jose; no diluir)

Narramos la **experiencia** de descubrir y vivir en un sitio —no solo lo describimos. Ambiente, sensaciones, detalle de cada lugar; ganas de seguir leyendo porque el texto te lleva. Datos sí, pero no cargados: el dato sirve a la experiencia.

---

### Por qué se vuelve a fallar (leer antes de escribir)

Jose ha pedido esto muchas veces (ChatGPT y Cursor). La documentación corta listaba reglas y **aún así** se generaba texto “correcto” pero lejos de Cudillero. Causas reales:

1. **Completitud gana a densación.** Se intenta cubrir todos los sitios / todos los temas Vivir (médico, vuelos, tipología…) y se pierde el eje. Cudillero cubre **menos** y profundiza **más**.
2. **Inventario disfrazado de prosa.** «Hay X, Y y Z», o el mismo truco entre rayas («—castillo, paseo, puerto—»). Suena a folleto.
3. **Checklist interno filtrado al texto.** El agente “marca casillas” (clima, servicios, hospital, playas) en lugar de escribir una escena que las contenga.
4. **Releer Cudillero de memoria**, no párrafo a párrafo, antes de escribir.
5. **El checklist del doc era suave** (“¿suena a Cudillero?”) sin test concreto de eje único y de lectora ajena.

**Si el borrador no pasa el test de abajo, no se da por escrito.** No parchear con una frase: rehacer el apartado.

---

### Cómo generar la prosa — método Cudillero (obligatorio; no negociable)

**Fuente canónica:** `web/src/app/nuevo2/cudillero/page.tsx` — releer **Cómo se vive + Vivir + Encaja** enteros antes de redactar cualquier ficha nueva.

#### El esqueleto de «Cómo se vive» (5 párrafos; no 7–8)

| # | Qué hace Cudillero | Obligación |
|---|---|---|
| 1 | Imagen de cuerpo (anfiteatro, cuestas, bolsas) + **eje binario** (abajo vs El Pito) | Una sola elección A vs B. No cinco sitios. **Poca raya tipográfica:** Cudillero casi no usa «—…—» en este bloque; prefiere frase nueva o dos puntos. No meter inventarios entre rayas. |
| 2 | Martes de noviembre en el polo cotidiano | Escena vivida; servicios dentro de la escena |
| 3 | Coche / hospital / apoyo (Avilés) | Datos dentro del hilo, no lista de minutos suelta («a unos X minutos», no «—unos X minutos—») |
| 4 | Agosto vs noviembre = dos ritmos del **mismo** sitio | Misma frase-cierre tipo «no son dos X distintos» |
| 5 | Vuelve al eje: qué se gana / a cambio de qué | Cierra el apartado |

#### El esqueleto de «Vivir» (3 párrafos; no 5–6)

| # | Qué hace Cudillero |
|---|---|
| 1 | Cambio de escala vs Mallorca (cuerpo / metros vs kilómetros) |
| 2 | Coche, costa y ciudad de apoyo — misma tesis |
| 3 | Contraste de estaciones — misma tesis |

Médico, vuelos, tipología de casa **entran dentro** de esos tres párrafos si hacen falta. No son apartados.

#### «De dónde viene» / «Mar» / «Casa» (mismo eje)

- **Historia (~4):** origen del polo A → profundizar A → historia del polo B → cierre que reenlace el eje. **Prohibido** abrir todas las fichas con la misma plantilla («X se entiende mejor desde Y que desde un folleto de urbanización / barrios»). **Prohibido** cerrar todas con «Esas dos imágenes siguen permitiendo leer X hoy» o abrir el polo B con «Y cuenta la otra cara/historia». Empezar y cerrar por el hecho local (como Cudillero), no por una frase-marco repetible entre municipios. **Densidad (obligatoria, no opcional):** cada párrafo aporta hechos locales (fechas, oficios, edificios, topografía, calendario). No bastan cuatro frases cortas de inventario. **Umbral práctico:** el bloque completo suele rondar **≥ ~1.700–2.000 caracteres** (Cudillero ~2.500); si un párrafo intermedio queda en dos frases genéricas, **rehacer el apartado**, no parchear. En lote: misma densidad que escribiendo el municipio solo.
- **Mar (~4):** tesis (mar cerca ≠ lo mismo desde cualquier casa) → paseo/baño del polo cotidiano → 1–2 salidas elegidas con camino → cierre (mejor que contar playas). Misma densidad que Cudillero: camino, desnivel, aparcamiento, qué se siente al caminar — no tres líneas por párrafo. **Umbral práctico:** bloque **≥ ~1.700–2.000 caracteres** (Cudillero ~2.500); los párrafos 2–3 deben narrar el paseo (desnivel, viento, acceso), no listar salidas. Si se acorta por lote, parar.
- **Casa:** advertencia = el eje A vs B; prosa y «qué comprobar» = rutina desde cada polo. Sin tour de cinco microzonas. **Prohibido** abrir todas con la misma plantilla («Comprar casa en X es decidir primero… / la relación con…»). Empezar por el hecho local concreto (qué hay: murallas, playa, pendiente…) y explicar en castellano llano qué implica cada polo — sin jerga opaca («intramuros», «relación con el muro») sin decir antes que hay una fortaleza/muralla y qué se vive dentro o fuera.
- **Clima (~2):** como Cudillero; el contraste con Mallorca puede aterrizar en el eje (orilla vs interior), no en un catálogo de playas. **No** abrir todas con «X supone un cambio de cielo claro respecto a Mallorca».
- **Prohibido plantilla «sin montar un viaje»** (y clones: «sin montar una excursión», «sin montar una excursión larga»). Afecta a **Cómo se vive** y a **Mar** («Para caminar sin montar…»). Variar por villa: andando desde casa, a pie, sin sacar el coche para cada recado, dentro del radio del casco, sin convertir la tarde en plan de coche / en plan organizado, etc. Cada villa con su frase; no clonar la misma muletilla en un lote.
- **Prohibido plantilla Mar §3:** no clonar «Algunas salidas merecen el trayecto porque el camino pesa tanto como el baño» (ni «…porque el camino pesa» / «…porque cambian de registro» como muletilla de lote). Cada villa abre el párrafo de salidas con el hecho local (Langre, Ecopista, ferry…). Si un término (Ecopista, intramuros, adarve…) aparece en un apartado, **glosarlo en ese apartado** la primera vez: qué es, no asumir que el lector recuerda otra sección.

#### Reglas que no se doblan

1. **Un eje, no un mapa.** Antes de escribir: escribir en una línea «A vs B». Si no cabe en una línea, el eje no está claro.
2. **Cuerpo primero, dato después.** Pendiente, bolsas, toalla, viento, sal — antes que el número.
3. **Al nombrar un sitio, detallarlo.** Qué es, dónde queda respecto a lo ya dicho, cómo se siente vivir ahí. Un topónimo suelto es error.
4. **Prohibido el inventario y el «habla indio».** «Hay bahía, paseo, puerto» → escena. También: «hay arenal largo»; listas telegráficas tras dos puntos («ocupación, kite, aparcamiento más difícil»). Preferir frase completa.
4b. **Rayas = glosa del término, no de otra cosa.** Si se escribe «estuario —…—», lo entre rayas debe explicar **qué es un estuario**. Prohibido poner ahí plaza/comercio como si definieran la palabra.
4c. **Pocas rayas en «Cómo se vive».** Cudillero casi no las usa: escribe frase nueva o usa dos puntos. Evitar el patrón «En el casco —A, B, C— la semana…». Preferir: «En el casco hay A, B y C. La semana…». Los minutos van en el hilo («a unos treinta minutos»), no entre rayas.
4d. **Prohibido «gesto mínimo» / «fuera del gesto…».** Decir qué se puede a pie y qué pide coche (playa sí; compra en Caminha no). Evitar también «aguanta mal/mejor» sin concretar.
5. **Claridad para ajeno.** Sin jerga opaca; glosar la primera vez (cucaña, CHUAC, Alvedro…). Sin «esta ficha», «el trato», «núcleos» sin explicar. Sin fórmulas internas tipo «plaza que lo resuelva todo»: decir qué se echa en falta (no hay un centro de pueblo con súper, bar y farmacia juntos; la vida está repartida). Preferir lo concreto a metáforas repetidas: no «el coche tiene bastante peso / adquiere peso» — mejor «hace falta sacarlo del garaje», «casi cada trayecto pide ir en coche», «sin coche la semana cambia». Tampoco metáforas literarias opacas («esa historia se pisa», «el agua deja de mandar en la fachada», «casco segundo», «añade piedra comarcal», «cuando apetece casco antiguo», «ese arco», «la compra suele pedir Sada», «recorrido peatonal», «la semana no se sostiene», «las dos formas» sin decir cuáles, «Cantábrico de península / de carácter», «no ría de Covas» sin explicar qué es Covas, «orilla de estuario, no toalla», «amplían el mapa hacia prehistoria y montaña», «capas de paisaje»): decir qué se ve, qué falta y a dónde se va en castellano llano. Si se habla de una ría o estuario, explicar que es orilla de agua abrigada para pasear, no playa de arena para tender la toalla. Si se habla de una cueva o un desfiladero, decir qué se visita y a cuántos minutos, no «prehistoria y montaña». Al nombrar un pueblo capital (Colombres, Lastres…), repetir en castellano llano qué es la primera veces del bloque si el párrafo puede leerse solo. Al nombrar una playa o costa (Mera, Bastiagueiro, O Torno, Cubelas…), decir qué es y dónde queda respecto a lo ya dicho; no asumir que el nombre basta ni que «bajar» se entiende si no hay cuesta. Si se abre con «la diferencia entre agosto y noviembre», la siguiente frase debe decir en qué consiste (ruido, gente, aparcamiento…), no solo dónde se nota. **Clima:** no clonar «En X el contraste con Mallorca no es de matiz»; variar la apertura como Cudillero.
6. **Hilo causal.** «Por eso», «a cambio», «también por eso» — el párrafo siguiente nace del anterior.
7. **Encaja / Qué comprobar** repiten el **mismo** eje A vs B. Volcar a `nuevo2-para-decidirte`.
   - **Prohibido taquigrafía de Encaja:** no «aceptando X… a cambio de Y… a cambio de Z»; no etiquetas opacas («Cantábrico de carácter», «postal de los arcos», «sumar esa presencia con los ojos abiertos»). Decir qué es cada sitio (playa del municipio / parroquia / faro — no asumir que el nombre basta), qué se gana, qué se pierde y a dónde se va en castellano llano, como Cudillero.

#### Test obligatorio (antes de «lista para lectura»)

**Guion operativo (checks):** `docs/nuevo2-checklist-prosa.md` — **pasarlo entero**. Regla Cursor: `.cursor/rules/nuevo2-checklist-prosa.mdc`.

Resumen rápido (no sustituye al guion):

- [ ] ¿Un ajeno entiende el párrafo 1 sin Wikipedia ni mapa?
- [ ] ¿El eje A vs B cabe en una frase?
- [ ] ¿Cómo se vive tiene ~5 párrafos y Vivir ~3 (no un checklist)?
- [ ] ¿Pocas rayas en Cómo se vive (estilo Cudillero)?
- [ ] ¿Cada topónimo / término técnico se glosa donde aparece?
- [ ] ¿Hay muletillas de lote (Mar §3, Casa §1, clima idéntico)? → reescribir.
- [ ] ¿«De dónde» y «Mar» ≥ ~1.700 caracteres con hechos, no inventario corto?
- [ ] ¿Al lado de Cudillero, el ritmo es el mismo (densar, no cubrir)?

Homogeneización: aplicar el guion a los municipios **método Cudillero** listados en ese doc; lotes CERTIFICADOS solo con orden expresa.

**Ejes del piloto Golfo (fijados):**

- **Oleiros:** Perillo (súper, calles juntas, sin orilla debajo) vs orilla de ría (Santa Cristina como playa de casi todos los días; el resto de orilla se menciona solo si aporta a ese polo).
- **A Coruña:** primera línea / Riazor–Orzán (mar en la ventana, verano ruidoso) vs ensanche hacia dentro (menos mar, más aparcamiento, menos fiesta).
- **Miño:** junto a la Praia Grande vs Costa Miño (urbanización, coche para casi todo).
- **Sada:** casco / Fontán (villa a pie, puerto y paseo) vs tierra adentro (parcela y coche para bajar a la orilla).
- **Bergondo:** junto a Gandarío / orilla de ría vs parroquia tierra adentro (parcela, silencio, coche para playa y compra).
- **Ares:** villa de Ares (playa urbana y servicios a pie) vs Redes (aldea marinera de colores, sin súper, verano muy lleno).
- **Ferrol:** ciudad / Magdalena–ensanche (hospital y servicios a pie) vs costa atlántica (Doniños / San Xurxo, coche y oleaje).

**Ejes A Mariña (en curso):**

- **O Vicedo:** núcleo junto a la ría do Barqueiro (servicios mínimos, orilla recogida) vs costa abierta (Xilloi / Arealonga / Fuciño do Porco — postal, verano lleno, coche para casi todo).
- **Viveiro:** casco amurallado (comercio a pie, Semana Santa) vs Covas (playa y paseo de ría, verano lleno). Celeiro entra como puerto de oficio, no como tercer polo.
- **Xove:** San Bartolomé (servicios del núcleo, sin playa a pie) vs costa (Esteiro / Portocelo / Roncadoira). San Ciprián = contexto industrial, no tercer polo.
- **Cervo:** San Cibrao (península: puerto, playas O Torno/Cubelas, paseo, servicios básicos del núcleo marítimo) vs Sargadelos / interior (cerámica Real Fábrica, río Xunco, Paseo dos Namorados, sin playa a pie). San Ciprián Alcoa = contexto, no tercer polo.
- **Burela:** cerca del puerto / lonja (oficio, ruido de trabajo, flota del bonito) vs villa de servicios hacia dentro (hospital, comercio, mercado a pie, menos ruido de dársena). A Marosa / Ril = playa de diario, no tercer polo.
- **Foz:** A Rapadoira / paseo (playa urbana a pie, agosto intenso) vs ría / marisma (orilla distinta, menos primera fila del veraneo).
- **Barreiros:** costa (Arealonga / Reinante / San Miguel) vs San Cosme / interior (capital administrativa, sin villa densa). As Catedrais = salida cercana en término de Ribadeo, no tercer polo.
- **Ribadeo:** casco / ría del Eo (villa indiana, autonomía a pie) vs costa atlántica / As Catedrais (arcos, presión turística; no playa a pie desde el centro).

**Ejes Asturias Occidente (en curso):**

- **Castropol:** Castropol villa (pueblo blanco en el promontorio, ría delante, servicios mínimos; Ribadeo de apoyo) vs Figueras (núcleo marinero, puerto y astilleros). Penarronda = salida de playa, no tercer polo.
- **Tapia de Casariego:** casco / puerto (villa marinera compacta a pie) vs orilla de playa / Anguileiro–Represas–Serantes (surf, verano más lleno).
- **Navia:** villa de Navia (servicios, ría, autonomía cotidiana; Jarrio cerca) vs Puerto de Vega (núcleo marinero). Frexulfe / Barayo / Coaña = salidas.
- **Luarca (Valdés):** zona baja / puerto (caminable, playas 1ª y 2ª) vs cotas altas / Atalaya / resto de Valdés (pendientes, coche).

**Ejes Asturias Oriente (en curso):**

- **Villaviciosa:** villa / casco (servicios, sidra, autonomía a pie) vs costa (Rodiles / Tazones — playa o pueblo marinero; coche desde el casco).
- **Colunga:** Colunga núcleo (servicios básicos) vs Lastres (pueblo colgado, puerto, pendientes). La Griega / MUJA / Fitu = salidas.
- **Ribadesella:** casco / ría del Sella vs Santa Marina (playa urbana, indianos). Vega / Tito Bustillo = salidas.
- **Llanes:** villa amurallada (casco, puerto, Sablón) vs pueblos/playas del concejo (Barro, Celorio, Poo…). Gulpiyuri / Cuera = salidas.
- **Ribadedeva:** Colombres (indianos, servicios mínimos) vs costa / La Franca. Bustio / Unquera / Llanes = apoyo.

**Ejes Cantabria Occidental (en curso):**

- **San Vicente de la Barquera:** casco / ría (puente de la Maza, básicos a pie) vs Merón / Oyambre (playa abierta, verano).
- **Comillas:** casco bajo / playa a pie vs ladera alta (Pontificia, Sobrellano, Capricho — pendientes).
- **Suances:** pueblo alto (villa) vs La Concha / La Ribera (playa a pie). Los Locos = salida.
- **Liencres (Piélagos):** cerca de dunas / Valdearenas–Canallave vs Mortera / urbanización más retirada (coche para playa).
- **Santander:** centro / bahía (Pereda, servicios) vs El Sardinero (playas urbanas). Magdalena / Cabo Mayor = salidas.

**Ejes Cantabria Oriental (en curso):**

- **Ribamontán al Mar:** Somo / Loredo (playa larga, surf, básicos del municipio) vs Galizano / Langre / interior (casas bajas, más coche; Langre = acantilados).
- **Noja:** primera línea junto a Ris o Trengandín (playa a pie, bloques, verano intenso) vs calles más retiradas del núcleo (menos toalla debajo; mismo invierno vacío).
- **Santoña:** villa / puerto / bahía (comercio, conserva, San Martín a pie) vs Berria (playa larga exterior; coche o salida deliberada).
- **Laredo:** Puebla Vieja / calles interiores (villa, hospital cerca) vs frente de La Salvé (playa de varios km, bloques, más verano).
- **Castro-Urdiales:** casco / puerto (Santa María, castillo-faro, servicios de ciudad a pie) vs Brazomar / Ostende (playas urbanas; Bilbao como eje metropolitano de apoyo).

**Ejes Alto Minho PT (en curso):**

- **Valença:** fortaleza / intramuros (comercio a pie, muro, fin de semana fronterizo) vs ensanche / fuera del muro (más espacio, menos postal de baluarte).
- **Vila Nova de Cerveira:** casco fluvial (Miño, praia fluvial, villa a pie, Goián al puente) vs fuera del casco / ladera (más espacio, coche para casi todo).
- **Caminha:** casco junto a la desembocadura / estuario del Miño —río que se ensancha y se abre al Atlántico; orilla para pasear, no playa de oleaje— (plaza, Torre, villa a pie) vs ensanche o zona más alejada (más coche para plaza y para Moledo). Moledo y Âncora = fichas propias, no tercer polo.
- **Moledo (Caminha):** frente de playa / pinar junto a la arena vs casas más retiradas hacia el interior o hacia Caminha (menos salitre, más coche a la toalla).
- **Vila Praia de Âncora:** frente marítimo / villa junto a playa y puerto (marginal, toalla, mercado a pie) vs casas más retiradas hacia el valle del Âncora o interior (menos salitre, más coche a la playa).
- **Afife-Carreço:** cerca de la playa (Afife / Paçô — toalla y nortada) vs más hacia el monte o interior de parroquia (granito, viñas en pérgola, coche para playa y compra).
- **Viana do Castelo:** casco / río Lima (ciudad a pie, Santa Luzia, mercado) vs Cabedelo u orilla atlántica (playa/surf; trayecto o puente respecto al centro).
- **Ponte de Lima:** casco junto al puente / plaza (villa a pie, Ecovia, feria) vs quinta o periferia del valle (más espacio, más coche; mar fuera).

**Ejes Litoral Norte PT (en curso):**

- **Esposende:** centro / estuario del Cávado (villa, paseo) vs Ofir–Fão o Apúlia (dunas/urbanización costera; más coche o más nortada según tramo).
- **Póvoa de Varzim:** frente marítimo / paseo (playa urbana a pie, densidad) vs calles más retiradas del núcleo o periferia (menos salitre; mismo invierno de ciudad).
- **Vila do Conde:** casco / desembocadura del Ave (historia, paseo, servicios a pie) vs Azurara u orilla atlántica más de playa (toalla delante; menos “villa de piedra” bajo la ventana).

Referencias: **Cudillero** → **Gijón** / **Candás**. Nunca un “modelo Miño” por encima de Cudillero.

### Errores ya cometidos (no repetir)

- Andamiaje («esta ficha», «el trato», «tesis», «la puerta» opaca).
- Fórmulas internas sin glosa («plaza que lo resuelva todo», «un solo centro», «intramuros», «relación con el muro») sin decir qué implica: ¿hay muralla? ¿plaza mayor con bares y tiendas? ¿casco caminable? Decirlo en castellano concreto.
- Paralelos rotos («la toalla cabe; el aparcamiento no»).
- **Inventario** («Hay bahía, paseo, puerto…»; también entre rayas: «—castillo, paseo, puerto—»). Reescribir como escena.
- **Tour de sitios** en un solo párrafo (cinco barrios / cinco playas nombrados sin vivir ninguno).
- **Vivir-checklist** (párrafo médico + párrafo vuelos + párrafo tipología).
- **Muletillas de lote:** «Algunas salidas merecen el trayecto porque el camino pesa tanto como el baño»; «Comprar casa en X es decidir primero…»; Ecopista / topónimo sin glosa en el apartado donde aparece.
- Jerga sin glosa; pies de foto falsos; clima tipo informe AEMET.
- Documentar la regla y generar igual: **fallo del agente**, no del lector.

## Contrato de ficha de municipio (NUEVO2)

Orden tras título / comparar:

1. Cuadro **Zona** (`BloqueZonaFicha`) — igual que Muros y el resto NUEVO2: párrafo de comarca en el cuadro + 1–2 párrafos debajo con el encaje de **este** municipio + enlace Detalles a `/zona/{id}/`.
2. **Mapa** del municipio (`MapaMunicipioFicha`, capas portada).
3. Relato en desplegables:
   - Cómo se vive
   - Frente a Mallorca (Clima + Vivir)
   - De dónde viene
   - Mar, río y camino
   - Casa
   - ¿Encaja?
4. **Más pueblos de {zona}** + `TablaComparativaZona`.
5. Crédito de fotos.

### Encaja

Siempre:

- **Encaja si**
- **No encaja si**
- **Qué comprobar** ← lo que antes llamábamos Veredicto; no inventar un Veredicto aparte.

Volcar Encaja a `nuevo2-para-decidirte` al implementar.

### Mar, río y camino

No basta nombrar. Cada sitio debe situarse: qué es, qué lo diferencia, qué paseo o uso permite imaginar. Norma cerrada tras revisión de Muros; aplica a **todas** las fichas nuevas.

### Casa

Seguir el patrón de **Cudillero / Gijón / Candás** (y Oia/Muros para bandas + Idealista cuando existan): prosa de vivir la casa y la microzona; Idealista; precios A/B literales del mercado cuando haya dato fiable (sin inventar tabla). Bloques Advertencia / Qué conviene / Mercado: **dentro de Casa**, preferible en cuadro separado del enlace Idealista (como en Muros).

### Fotos

- Pie = contenido real. Sin stand-ins ni el mismo hash dos veces en la misma página (ni entre municipios de la zona salvo misma escena deliberada).
- Preferir omitir un slot a rellenar mal.
- Ideal: la foto aparece en el apartado que habla de esa escena.
- **Colocación (al enriquecer / plantilla 13):** situar cada foto **justo antes o justo después** de que el texto nombre esa escena o topónimo, para dar **visión real** de lo leído — no agrupar al final del bloque ni desligar pie y frase.
- En el piloto: lo más práctico (V1/CURRENT/Wikimedia si encaja). **Pasada fuerte de fotos al final del proyecto** (cantidad, leyendas, colocación).

## Páginas de zona

Misma línea editorial que los municipios (preguntas reales, topónimos explicados, prosa que transporte).  
Se escriben **después** de cerrar los municipios de esa comarca.

## Flujo de calidad

Investigar → escribir → checklist interno (lector cero, suficiencia por apartado, factual, fotos) → **«lista para tu lectura»**.  
**«Certificada»** solo cuando Jose lo diga.  
No declarar cerrado por impresión. Misma profundidad en lote que en municipio suelto; si la calidad cae, parar y avisar.

Error puntual de dato → corregir el hecho, no reescribir toda la ficha.

## Pendiente (calidad de lectura — en curso antes del cutover)

Orden acordado (Jose, post-83 municipios; cutover después):

1. **Auditoría plena de errores de este chat** — inventario en `docs/nuevo2-auditoria-errores-chat.md` + JSON `output/_v1_tmp/audit_chat_errores.json`. Corregir patrones en fichas NUEVO2 (muletillas Casa/Mar, «toalla» metafórica, indio/telegráfico, densidad hist/mar). Incluir nota cadencias CERTIFICADOS vs Cudillero si aporta.
2. **Homogeneización** — misma pasada: checklist `docs/nuevo2-checklist-prosa.md` en lotes método Cudillero primero; CERTIFICADOS solo si el patrón también aparece ahí y molesta al leer.
3. **Páginas de zona** al estándar homogéneo (tras municipios). Hoy las zonas viven en `/zona/[id]` (CURRENT); hay que decidir/montar relato NUEVO2 de zona por comarca (mapas + 6 fotos + prosa).

**Estado (2026-10-02) — cutover NUEVO2→CURRENT hecho:**

- Muletillas + densidad hist/mar municipios: **0** en escáner.
- Fotos: **0 dups** en las 16 zonas.
- **V2** conserva el CURRENT previo (`current-freeze-2026-10-02`): **83 municipios + 16 zonas**. Pie: V1 | V2.
- **CURRENT** = antiguo NUEVO2: fichas en `/{slug}/`, zonas en `/zona/{id}/`.
- `/nuevo2/…` y `/zona/{id}/{slug}/` redirigen a las rutas canónicas.

**Cutover:** hecho. Portada, busca y compara apuntan a CURRENT.

### Otros pendientes (no cutover)

- **Compara:** Encaja ya vía PARA; Clima/Vivir/fotoIdentidad pueden seguir leyendo CURRENT. Revisar más adelante.
- **Clima — lluvia (al reescribir Frente a Mallorca → Clima):** dejar claro que en invierno (aprox. octubre–febrero/marzo) suelen ser **~15 o más días de lluvia al mes**; en el año, **alrededor de la mitad de los días** (usar cifra de zona / `docs/estudio_zonas.md`, p. ej. Golfo ~128–132; no inventar). Y que en muchos días no es un chaparrón corto, sino **horas y horas de llovizna** (lluvia floja pero persistente) y cielo cubierto — en experiencia vivida, no solo mm anuales.
- **No encaja si — servicios que faltan (al revisar Encaja en todos los municipios):** en **No encaja si** hay que **explicar qué servicios faltan** en ese municipio (o quedan fuera / lejos) y **por qué importan** para la vida diaria — no solo «faltan servicios» o la nota 2/10 suelta. Decir qué echa en falta (súper completo, hospital, mesas en enero, comercio a pie…) y qué implica (coche a la villa X, trayecto Y minutos, dependencia…). Aplica a **todos** los municipios; al reescribir o pasar Encaja, completar si falta.
- **Enlaces útiles del municipio (decidir formato; no implementar aún):** bloque curado de **links interesantes** por pueblo — webs de turismo / excursiones, páginas oficiales o locales con más info, galerías o rutas para acercarse al sitio y a lo que ofrece (no inventario genérico ni SEO). Al retomar: **valorar si merece apartado propio** (p. ej. «Para acercarte» / «Enlaces») **o integrar** en uno existente (cierre del relato, Mar/camino, créditos de fotos, desplegable junto a Encaja). Criterio: poco volumen, enlaces reales y útiles para decidir / imaginar la vida allí; no hinchar la ficha ni duplicar Idealista.
- **Fotos plantilla 13 (aparcado):** ver `.cursor/rules/fichas-zona-municipio.mdc`. Al retomar: además de huecos y unicidad, **colocar fotos justo antes/después del topónimo nombrado** en la prosa para visión real del texto.
- **Mapa de portada — CCAA / navegación (ideas; no implementar aún):** Jose no termina de gustarle la navegación actual por **desplegables debajo del mapa**. Ideas a valorar juntas (pueden combinarse):
  1. **Vista por comunidad autónoma en el mismo marco:** pulsar el **nombre de la CCAA** en el mapa actual → el mapa cambia a uno **solo de esa comunidad**, **mismo tamaño** que el mapa anterior; si caben visualmente todos los nombres de municipios/zonas, podría ser **alternativa al zoom** actual.
  2. **Página / mapa por CCAA** (Galicia, Asturias, Cantabria, Norte de Portugal…): todos los municipios de esa comunidad en un mapa navegable + links. **Idea nueva (2026-10):** en la ficha de municipio, bajo el nombre ya aparece la CCAA → ese texto podría ser **enlace** que abre ese mapa de toda la CCAA (misma entrada desde portada y desde ficha).
  3. Los desplegables inferiores: **sustituirlos** por mapas de CCAA, o **integrarlos** con esa navegación cartográfica (no solo listas colapsables). Criterio al retomar: menos fatiga al navegar la portada; probar si la vista CCAA a tamaño fijo resuelve legibilidad mejor que el zoom.
  4. **Zonas en la portada — duda de Jose:** sensación de que los nombres de zona «sobran» / poca gente los usa como etiqueta cotidiana. **Criterio acordado al retomar (opinión agente, pendiente de OK):** la CCAA es la capa de orientación primaria (todo el mundo la entiende); la **zona** sigue siendo útil por debajo como agrupación editorial (comparar pueblos vecinos, clima/precios, «Más pueblos de…», estudio), pero **no tiene por qué ser el eje de los desplegables de portada**. No borrar zonas del modelo de datos; sí cuestionar si merecen listas colapsables en inicio o solo vivir en ficha/compara/páginas de zona.

## Orden de trabajo restante

Piloto (calidad primero):

1. **Oleiros**
2. A Coruña
3. Miño  

Si el piloto pasa: zonas enteras, sin bajar profundidad.

| Zona | Municipios |
|---|---|
| Golfo Ártabro e Ferrol | A Coruña, Oleiros, Sada, Bergondo, Miño, Ares, Ferrol |
| A Mariña | O Vicedo, Viveiro, Xove, Cervo, Burela, Foz, Barreiros, Ribadeo |
| Asturias Occidente | Castropol, Tapia de Casariego, Navia, Luarca (Valdés) |
| Asturias Oriente | Villaviciosa, Colunga, Ribadesella, Llanes, Ribadedeva |
| Cantabria Occidental | San Vicente de la Barquera, Comillas, Suances, Liencres (Piélagos), Santander |
| Cantabria Oriental | Ribamontán al Mar, Noja, Santoña, Laredo, Castro-Urdiales |
| Alto Minho (PT) | Valença, Vila Nova de Cerveira, Caminha, Moledo, Vila Praia de Âncora, Afife-Carreço, Viana do Castelo, Ponte de Lima — **fichas NUEVO2 montadas** |
| Litoral Norte (PT) | Esposende, Póvoa de Varzim, Vila do Conde — **fichas NUEVO2 montadas** |

**Generación de municipios NUEVO2:** cerrada en lo listado arriba (incluye Portugal). Lo siguiente, cuando Jose lo pida: **auditoría plena de errores de este chat** (ver Pendiente PRIMERO) y páginas de zona.
