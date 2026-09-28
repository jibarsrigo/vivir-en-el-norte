/**
 * Bloques «Para decidirte» de fichas NUEVO2 (Encaja si / No encaja si / Qué comprobar).
 * Fuente única para Compara durante la transición CURRENT → NUEVO2.
 * No duplicar este texto en ComparaCliente: resolver en filaCompara.
 *
 * Añadir una entrada al migrar un municipio a NUEVO2 con esos bloques.
 * Si el slug está en NUEVO2_MUNICIPIO_SLUGS pero aún no hay entrada aquí,
 * Compara usa el relato CURRENT (veredicto como fallback de Qué comprobar).
 */
export type ParaDecidirteNuevo2 = {
  encajaSi: readonly string[];
  encajaNo: readonly string[];
  queComprobar: readonly string[];
};

export const NUEVO2_PARA_DECIDIRTE: Readonly<
  Record<string, ParaDecidirteNuevo2>
> = {
  cudillero: {
    encajaSi: [
      "Cudillero encaja si atrae la idea de vivir en un municipio pequeño donde el Cantábrico y el puerto forman parte constante del paisaje, con una parte de la vida diaria resolviéndose en la propia villa y Avilés como apoyo para lo que exige una escala mayor. El aeropuerto de Asturias queda también cerca, de modo que esa pequeña escala no significa quedar aislado. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye también bastante menos sol y mucha más presencia de lluvia y humedad durante el año.",
      "También encaja si se acepta que elegir vivienda aquí significa elegir una forma concreta de vivir Cudillero. En el anfiteatro el puerto queda mucho más integrado en la escena diaria, pero pesan las pendientes, las escaleras y el movimiento de visitantes; en una zona más alta como El Pito disminuye parte de esa dificultad física y aumenta la facilidad de acceso en coche, aunque el puerto deja de estar de la misma manera a la puerta de casa. Esa diferencia de microzona permite escoger entre experiencias residenciales bastante distintas dentro del mismo municipio.",
    ],
    encajaNo: [
      "Cudillero encaja peor si se busca una vida muy caminable, con recorridos cómodos y llanos entre casa, servicios, coche y mar. Las distancias pueden parecer pequeñas en el mapa y resultar muy distintas cuando incluyen cuestas o escaleras; además, vivir junto al Cantábrico no garantiza tener una playa cotidiana a la que bajar andando desde cualquier vivienda. Para enlazar distintas partes del concejo, llegar a determinados arenales o resolver necesidades de mayor escala, el coche adquiere bastante peso.",
      "Tampoco encaja igual si cuesta aceptar el cambio respecto a Mallorca en luz, lluvia y humedad, o si incomoda que el ritmo del núcleo varíe tanto entre un agosto concurrido y los meses húmedos y tranquilos. Y una casa con buenas vistas puede perder atractivo residencial si para llegar a ella hay que repetir varias veces al día un acceso incómodo. Aquí la contrapartida principal no es una cifra concreta de servicios o kilómetros: es cómo la topografía y la ubicación terminan entrando en la rutina.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre visitar Cudillero y vivir en una vivienda concreta. Hay que subir realmente las pendientes y recorrer el trayecto que se repetiría entre esa casa, la compra y el coche: comprobar escaleras, acceso, dónde se aparca y cómo sería volver cargado. Bajar al puerto puede resultar sencillo; la prueba residencial está también en la vuelta.",
      "Merece la pena hacer esa comprobación tanto en el anfiteatro como en una zona más alta como El Pito. No para decidir de antemano que una sea mejor que otra, sino para comprobar qué intercambio resulta más llevadero: tener el puerto mucho más integrado en la vida diaria a cambio de pendientes, escaleras y mayor movimiento, o facilitar parte del acceso cotidiano aceptando una relación más dependiente del coche.",
    ],
  },
  gijon: {
    encajaSi: [
      "Gijón encaja si atrae la idea de vivir en una ciudad completa con el Cantábrico incorporado a la semana. En barrios bien elegidos, playa, paseo, compra, cultura, deporte, transporte y servicios pueden convivir sin depender constantemente del coche. San Lorenzo no actúa solo como paisaje: puede entrar en la rutina diaria aunque ese día no sea de baño.",
      "También encaja si se valora poder elegir entre experiencias residenciales muy distintas dentro del mismo municipio. Cerca del frente urbano se gana inmediatez con playa, paseo y servicios, aceptando más densidad, tráfico, ruido y precios altos; en Somió y otras áreas exteriores puede haber más espacio y tranquilidad, pero cambia la relación peatonal con la ciudad. Frente a Mallorca, el verano es mucho más fresco, pero a cambio hay menos sol y mucha más presencia de lluvia y humedad.",
    ],
    encajaNo: [
      "Gijón encaja peor si se busca la escala, el silencio y la lectura sencilla de una villa pequeña. Aquí hay tráfico, barrios muy diferentes, zonas de mayor densidad y un mercado de vivienda en el que la media municipal dice poco sobre una dirección concreta. Vivir “en Gijón” no garantiza por sí solo tener playa, hospital, aparcamiento y todos los servicios dentro del mismo radio cómodo.",
      "Tampoco encaja igual si cuesta aceptar el cambio de luz y clima respecto a Mallorca o si se quiere vivir en una zona residencial exterior y tranquila sin asumir que el coche puede ganar peso. La ciudad permite resolver mucho dentro de su propio tejido, pero primera línea, barrios interiores y Somió responden de manera distinta a la misma idea de vivir junto al Cantábrico.",
    ],
    queComprobar: [
      "Antes de decidir, conviene probar Gijón como ciudad y no solo como paseo marítimo. Desde una vivienda candidata, recorrer a pie la compra, una parada de transporte y los servicios que realmente se usarían; después hacer el mismo ejercicio hacia San Lorenzo si el mar forma parte de la razón para mudarse. Esa prueba muestra si la relación entre playa y ciudad que promete el mapa existe de verdad desde esa dirección.",
      "También merece la pena comparar al menos dos zonas con lógicas distintas y hacerlo fuera de un día perfecto de verano. Hay que comprobar ruido, tráfico, aparcamiento, luz, exposición al mar y cuánto coche aparece en la rutina, y situar Cabueñes y Jove respecto a la vivienda sin asumir una proximidad idéntica para toda la ciudad. En Gijón, recorrer barrios explica más que comparar solo metros cuadrados y distancia a la playa.",
    ],
  },
  "candas-carreno": {
    encajaSi: [
      "Candás puede encajar si atrae una villa pequeña donde playa, puerto, compra, atención primaria, cultura y tren caben en un radio manejable, y si tener Gijón cerca se entiende como ampliación de posibilidades más que como dependencia para cada día. La Palmera permite una relación muy inmediata con el mar y la villa mantiene actividad fuera del verano; a cambio, la escala de servicios es menor que la de una ciudad y para hospital, oferta especializada, costa exterior y parte de los desplazamientos el radio se amplía.",
    ],
    encajaNo: [
      "Puede encajar peor si se busca una vivienda costera completamente desligada del contexto industrial y viario, si se necesita resolver todo sin salir nunca de la villa o si el cambio de luz, lluvia y temperatura respecto a Mallorca pesa más que la frescura del verano. Dentro del propio concejo, vivir junto al centro y La Palmera no equivale a elegir una localización rural o próxima al corredor de Aboño.",
    ],
    queComprobar: [
      "Antes de decidir, conviene hacer tres pruebas muy concretas: vivir un día laborable fuera del verano y resolver a pie compra, salud, tren y paseo; recorrer desde una vivienda candidata la pendiente real hasta el centro y La Palmera; y, si se estudia una dirección hacia el oeste del concejo, comprobar personalmente el contexto industrial, viario y ambiental de esa microzona.",
    ],
  },
  oia: {
    encajaSi: [
      "Puede encajar si se busca vivir con el Atlántico y la montaña muy presentes sin necesitar una localidad urbana alrededor. Oia ofrece una escala pequeña, mucha naturaleza inmediata y varias formas de caminar sin que todas exijan convertir el día en una excursión.",
      "También si una casa con terreno, una vivienda tradicional o un chalet pesan más que disponer de una gran oferta de pisos y servicios a pie. La dispersión permite elegir entre costa, pequeños núcleos e interior, pero esa libertad espacial forma parte del intercambio.",
      "Y puede encajar si se acepta una relación atlántica con el mar: costa muy presente, pequeñas zonas de baño, mareas, roca y posibilidad de combinar océano con pozas de agua dulce, en lugar de esperar una gran playa urbana como centro de la vida cotidiana.",
    ],
    encajaNo: [
      "Puede encajar peor si se necesita resolver casi toda la semana andando desde un único centro. Hay servicios locales, pero comercio amplio, determinados trámites, atención hospitalaria y muchas actividades obligan a ampliar el radio.",
      "También si depender del coche para una parte importante de la vida diaria resulta un problema. El autobús ofrece conexiones útiles por la costa y hacia Vigo, pero la dispersión del municipio hace que no todas las viviendas tengan la misma relación con esas paradas ni con los horarios.",
      "Y si la expectativa principal es salir de casa a una playa amplia, arenosa y utilizable con independencia de la marea, Santa María puede decepcionar pese a tener el Atlántico literalmente delante. Oia ofrece mucha costa; eso no significa ofrecer la misma experiencia de playa que Mallorca.",
    ],
    queComprobar: [
      "La primera comprobación debería empezar en la vivienda, no en el monasterio. Dejar el coche donde realmente se dejaría cada día y hacer a pie una compra sencilla, un paseo y el regreso. Después conducir hasta el lugar donde se resolverían compras mayores y comprobar cuánto pesa ese trayecto cuando deja de ser una excursión y se convierte en rutina.",
      "Conviene repetir la prueba desde dos microzonas distintas. Una vivienda en Santa María u O Arrabal permite comprobar qué significa tener el pequeño núcleo histórico y el Camino cerca. Otra en Viladesuso o Mougás muestra una relación más directa con la carretera y con Baiona. Una tercera hacia Burgueira o Loureza cambia el mar por una posición más interior.",
      "También merece una visita con lluvia o después de varios días húmedos. No para juzgar Oia por el peor tiempo, sino para mirar la casa en las condiciones en las que orientación, ventilación, cubierta, acceso y humedad dejan de ser conceptos abstractos.",
      "Para comprobar el mar, hay que hacer dos pruebas distintas: caminar desde la posible vivienda hasta el tramo costero que realmente se utilizaría y visitar Santa María con la marea en dos estados diferentes. Así se ve inmediatamente por qué estar muy cerca del océano y disponer de una playa cotidiana no son la misma cosa.",
      "Y si la casa atrae sobre todo por las vistas, conviene hacer el recorrido inverso: mirar primero acceso, aparcamiento, exposición, mantenimiento y servicios; dejar la vista para el final. En Oia, una panorámica atlántica puede ser una parte magnífica de la vivienda, pero no sustituye la comprobación de cómo funcionará esa dirección durante todo el año.",
    ],
  },
  "o-rosal": {
    encajaSi: [
      "Puede encajar si se busca una vida de valle con un pequeño núcleo de referencia, viñedo y casas con terreno, y basta con tener el Atlántico a un desplazamiento corto en lugar de delante de la vivienda.",
      "También si se valora poder alternar paisajes sin hacer grandes viajes: paseo junto al Miño o el Tamuxe, baño fluvial dentro del municipio, molinos y monte para caminar con más desnivel y playas de A Guarda cuando se quiere mar.",
      "Y puede encajar si una vivienda unifamiliar con parcela pesa más que disponer de una gran concentración de servicios. O Calvario permite resolver parte de la rutina; A Guarda amplía el radio a pocos minutos y Vigo queda para necesidades de otra escala.",
    ],
    encajaNo: [
      "Puede encajar peor si el océano tiene que formar parte del paseo diario desde casa. O Rosal está cerca de la costa, pero su paisaje cotidiano es de valle, río, viñedo y monte.",
      "También si se necesita una vida urbana ampliamente resoluble andando. O Calvario ayuda mucho respecto a una casa completamente dispersa, pero comercio especializado, hospital y muchas actividades siguen requiriendo desplazamiento.",
      "Y puede ser una mala elección si la humedad en una vivienda o el mantenimiento de una parcela resultan cargas poco deseables. Una casa de piedra con terreno puede ser precisamente el atractivo de O Rosal, pero necesita comprobarse como vivienda de todo el año y no solo como imagen rural.",
    ],
    queComprobar: [
      "Empezar por O Calvario un día normal. Hacer una compra sencilla, caminar por el núcleo y comprobar qué parte de la rutina podría resolverse realmente sin coche.",
      "Después repetir la prueba desde la vivienda. Medir el trayecto hasta O Calvario, A Guarda y la salida habitual hacia Vigo permite convertir expresiones como «todo está cerca» en una semana concreta.",
      "Si la casa está hacia San Miguel, As Eiras o el entorno del Tamuxe, conviene caminar un tramo del Sendeiro de Pescadores y comprobar si esa proximidad al río entraría realmente en la vida diaria. Si está hacia la ladera, hacer lo mismo con los accesos, la pendiente y el tiempo necesario para bajar al núcleo.",
      "Visitar la Praia das Eiras o As Aceñas permite comprobar qué significa disponer de baño fluvial dentro del municipio. Después conviene conducir hasta una playa habitual de A Guarda. Son dos experiencias distintas y saber cuál se utilizaría más ayuda a elegir microzona.",
      "La vivienda merece al menos una visita después de lluvia. Mirar luz, ventilación, paredes, cubierta, drenaje y terreno en esas condiciones es especialmente útil en un valle húmedo.",
      "Y si el atractivo principal es una casa con viña, huerto o una parcela grande, conviene calcular la rutina que acompaña al paisaje: mantenimiento, desplazamientos, aparcamiento, acceso y servicios primero; vistas y metros de terreno después.",
    ],
  },
  tomino: {
    encajaSi: [
      "Puede encajar si se busca una casa con finca y se acepta que la contrapartida sea una vida más dispersa y dependiente del coche.",
      "También si el río puede sustituir al mar como paisaje cotidiano. En Goián se puede caminar junto al Miño, utilizar la playa fluvial, pasar tiempo en Espazo Fortaleza y cruzar a Cerveira sin organizar una excursión.",
      "Puede encajar especialmente si la relación con Portugal resulta atractiva. La Ponte da Amizade hace que la frontera tenga una dimensión práctica: mercado, restaurantes, actividades y paseos pueden quedar al otro lado de un trayecto muy corto.",
      "Y puede encajar si se entiende que Tomiño no es una experiencia única. Elegir bien entre O Seixo, Goián y una parroquia más rural permite ajustar bastante la relación entre servicios, río, terreno y tranquilidad.",
    ],
    encajaNo: [
      "Puede encajar peor si el objetivo principal de la mudanza es tener un verano claramente costero y el Atlántico a pie. Tomiño es valle y río; para playa marítima hay que conducir.",
      "También si se quiere resolver casi toda la semana andando desde un único casco compacto. Hay núcleos con servicios, pero el municipio funciona mediante varios centros y muchas viviendas dispersas.",
      "Puede resultar menos adecuado si el coche se quiere reducir al mínimo. Una casa aparentemente cercana en el mapa puede exigir varios desplazamientos diarios cuando se suman compra, actividades y servicios.",
      "Y conviene pensarlo especialmente si el calor de valle o la humedad de una casa con finca son aspectos poco tolerables. Una visita agradable junto al río no sustituye probar cómo se vive la vivienda en una tarde cálida y después de varios días de lluvia.",
    ],
    queComprobar: [
      "Primero hay que decidir qué Tomiño se está buscando. Pasar una mañana en O Seixo y otra en Goián permite entender la diferencia entre un núcleo ligado a los servicios municipales y otro ligado al Miño y a Cerveira.",
      "Desde una vivienda candidata, hacer el recorrido real hasta compra, farmacia, atención primaria y carretera de salida. Cronometrarlo evita que «está todo cerca» o «está en Tomiño» oculten la dispersión.",
      "En Goián conviene caminar desde el núcleo hasta Espazo Fortaleza, recorrer un tramo de la ribera y cruzar la Ponte da Amizade. Así se puede comprobar si Portugal y el Miño serían realmente parte de la semana o solo atractivos ocasionales.",
      "También conviene utilizar la playa fluvial en temporada y conducir otro día hasta una playa marítima habitual. Son dos formas distintas de relacionarse con el agua y la elección de municipio depende bastante de cuál se espera utilizar.",
      "La vivienda debe verse en condiciones diferentes. Una tarde cálida permite comprobar exposición y ventilación; después de lluvia se entienden mejor drenaje, humedad, accesos y parcela.",
      "Si el principal atractivo son los metros de terreno, conviene imaginar su mantenimiento dentro de cinco o diez años. Acceso, pendiente, cierres y trabajo necesario importan tanto como la superficie.",
    ],
  },
  "a-guarda": {
    encajaSi: [
      "Encaja si se busca una villa marítima donde el agua forme parte de la rutina y no únicamente de las excursiones. Puerto, paseo, Area Grande y el estuario de Camposancos permiten vivir varias formas de costa dentro del mismo municipio.",
      "También si importa poder resolver bastante vida diaria andando. Una vivienda bien situada en el núcleo deja comercio, mercado, farmacia, cafés y paseo dentro de una escala pequeña.",
      "Puede encajar especialmente si se valora un verano atlántico más fresco que el del fondo del Miño y se acepta a cambio más viento, lluvia invernal y mantenimiento ligado al salitre.",
      "Y encaja si el Monte Santa Trega, el puerto y Portugal enfrente pesan más que tener hospital especializado o una gran ciudad a pocos minutos.",
    ],
    encajaNo: [
      "Encaja peor si el hospital especializado debe quedar muy cerca. El Álvaro Cunqueiro está aproximadamente a 45 minutos y esa distancia no cambia de manera sustancial eligiendo otra calle de A Guarda.",
      "Tampoco si el viento marítimo y el salitre se consideran inconvenientes difíciles de asumir. La exposición forma parte de vivir en la punta y puede afectar tanto al uso de una terraza como al mantenimiento de la vivienda.",
      "Puede resultar menos adecuada si se necesita una ciudad grande para la rutina diaria o conexiones metropolitanas inmediatas. A Guarda tiene autonomía de villa, no escala urbana.",
    ],
    queComprobar: [
      "Pasar un día completo en el núcleo sin coche y comprobar cuánto de la rutina real puede resolverse andando desde la vivienda candidata.",
      "Volver con viento y observar terraza, ventanas, ruido y exposición. En una vivienda frente al mar, esa segunda visita es tan importante como la primera.",
      "Probar Area Grande y O Muíño por separado. Una mira al Atlántico abierto y la otra a la desembocadura; saber cuál se usaría realmente ayuda a elegir microzona.",
      "Recorrer el acceso al hospital y una salida hacia Vigo en condiciones normales. La posición en la punta es parte estructural de la decisión.",
      "Si la vivienda está en Camposancos o en una ladera, medir también el trayecto a mercado, farmacia y compra cotidiana y no extrapolar la caminabilidad del centro a todo el municipio.",
      "Finalmente, visitar en un día fuerte de verano para comprobar aparcamiento, tráfico y ruido antes de asumir que la tranquilidad del resto del año será idéntica en agosto.",
    ],
  },
  tui: {
    encajaSi: [
      "Encaja si se quiere la mayor autonomía cotidiana de Baixo Miño sin pasar a una ciudad grande. Comercio, servicios, actividades y buena parte de la rutina pueden resolverse dentro de una escala pequeña.",
      "También si Portugal debe formar parte de la semana. Valença está enfrente y el puente permite incorporar compras, paseo y restauración al día a día.",
      "Puede encajar especialmente si hospital, aeropuerto y conexiones hacia Vigo pesan más que tener el Atlántico en la puerta. Tui reduce esos trayectos respecto a la punta de la comarca.",
      "Y encaja si se valora poder elegir entre piso reciente en el ensanche, vivienda histórica cerca del casco o casa más verde hacia las parroquias, entendiendo que cada opción cambia la dependencia del coche.",
    ],
    encajaNo: [
      "Encaja peor si la razón principal de la mudanza es tener un verano claramente costero y playa marítima a pie. Tui es ciudad de río y el océano requiere desplazamiento.",
      "Tampoco si se busca el silencio de una aldea. El casco tiene peregrinos, actividad, fiestas y vida urbana; el ensanche añade tráfico y la proximidad de la A-55 puede introducir ruido.",
      "Puede resultar menos adecuada si se quieren evitar por completo pendientes. El casco histórico está construido sobre una ladera y la cota de la vivienda cambia la caminabilidad.",
      "Y conviene descartarla si el calor de valle es incompatible con lo que se busca. El verano es más cálido que en la punta atlántica de A Guarda u Oia.",
    ],
    queComprobar: [
      "Pasar una jornada normal moviéndose a pie entre la vivienda candidata, compra, centro y ribera. La autonomía de Tui es una ventaja real solo si la microzona permite aprovecharla.",
      "Recorrer las pendientes del casco desde la vivienda y repetir mentalmente el trayecto con bolsas, lluvia o movilidad reducida. Pocos metros en el mapa pueden equivaler a una diferencia importante de cota.",
      "Si se mira el ensanche, escuchar la A-55 a distintas horas. Una conexión excelente por carretera pierde parte de su valor si domina acústicamente la terraza o el dormitorio.",
      "Visitar una playa fluvial real —Areeiros u O Penedo— y después hacer una salida a la costa. Así se comprueba si el Miño cubre la relación cotidiana con el agua o si el mar acabará siendo una necesidad frecuente.",
      "Probar también Valença a pie y comprobar si esa conexión se incorporaría de verdad a la semana.",
      "Por último, hacer el trayecto al hospital y al aeropuerto y revisar horarios útiles de tren. Tui destaca precisamente por logística; conviene verificar que esas ventajas funcionan para la rutina concreta.",
    ],
  },
  baiona: {
    encajaSi: [
      "Encaja si se quiere que el mar forme parte de una semana normal. Desde las microzonas centrales se puede caminar al puerto, al paseo y a playas urbanas sin convertir cada baño en un desplazamiento.",
      "También si se busca una villa reconocible y activa durante todo el año, manteniendo Vigo suficientemente cerca para hospital, aeropuerto y servicios de mayor escala.",
      "Puede encajar especialmente si un paseo como Monte Boi, la bahía y el casco pesan más que disponer de una vivienda grande por el mismo presupuesto.",
      "Y encaja si se acepta que el atractivo de la villa trae presión turística: el verano lleno y la Arribada forman parte del lugar tanto como un martes tranquilo de invierno.",
    ],
    encajaNo: [
      "Encaja peor si el silencio de julio y agosto es una condición esencial. El centro, el paseo y las zonas de playa reciben mucha más actividad en temporada alta.",
      "También si se necesita mucha superficie residencial cerca del mar con un presupuesto contenido. La costa de Baiona es el mercado más caro de Val Miñor después de Nigrán.",
      "Puede resultar menos adecuada si humedad, salitre y mantenimiento marítimo son inconvenientes difíciles de asumir.",
      "Y pierde parte de su sentido si se termina comprando en una ladera dependiente del coche esperando conservar exactamente la caminabilidad del centro.",
    ],
    queComprobar: [
      "Pasar una jornada sin coche desde la vivienda candidata y comprobar qué parte de la rutina queda realmente a pie.",
      "Volver en una noche de verano y escuchar la calle con ventanas abiertas.",
      "Hacer el recorrido hasta una playa que se utilizaría de verdad, no simplemente hasta el punto más próximo del mar.",
      "Recorrer Monte Boi y el paseo urbano para comprobar si esa relación cotidiana con la costa es una ventaja que realmente se aprovecharía.",
      "Si la vivienda está en Sabarís, Baíña o Belesar, medir de nuevo compra, centro y playa desde esa dirección concreta.",
      "Por último, hacer el trayecto hacia Vigo en una jornada normal y comprobar cómo encajan hospital, trabajo o aeropuerto en la semana real.",
    ],
  },
  nigran: {
    encajaSi: [
      "Encaja si se quiere una costa muy utilizable manteniendo Vigo y el hospital cerca.",
      "También si se prefiere elegir entre varias formas de vivir: Panxón como pequeño núcleo marítimo, Praia América como franja de playa, A Ramallosa por servicios o una parroquia interior por casa y jardín.",
      "Puede encajar especialmente si la playa debe formar parte de la semana pero no se necesita el casco histórico y compacto de Baiona.",
      "Y encaja si se acepta que esa variedad obliga a estudiar la dirección concreta: Nigrán funciona bien cuando la microzona elegida coincide con la rutina que se quiere tener.",
    ],
    encajaNo: [
      "Encaja peor si se busca un único casco donde comercio, plaza, playa y todos los servicios formen una sola experiencia peatonal.",
      "También si se espera poder vivir sin coche desde cualquier punto del municipio. Esa posibilidad existe en algunas microzonas, no en todo Nigrán.",
      "Puede resultar menos adecuado si el silencio de agosto es imprescindible y la vivienda elegida está junto a los principales arenales.",
      "Y puede no compensar si el presupuesto obliga a alejarse de la costa pero la razón principal para elegir Nigrán era precisamente bajar andando a la playa.",
    ],
    queComprobar: [
      "Elegir primero la microzona y pasar allí una jornada completa antes de comparar viviendas de partes distintas del municipio.",
      "Hacer andando playa, supermercado, farmacia y café desde la vivienda candidata y medir tiempos reales.",
      "Visitar Praia América o Panxón un sábado de verano si la vivienda depende del atractivo de esa franja.",
      "Si se mira Patos, comprobar directamente exposición al viento, ambiente de surf y funcionamiento de la zona fuera del verano.",
      "En una parroquia interior, conducir la semana probable hacia colegio, compra, Vigo y playa y comprobar cuántos desplazamientos se acumulan.",
      "Finalmente, recorrer un tramo cotidiano del paseo y distinguirlo de la Senda Azul completa: vivir junto a una ruta larga no significa que cada salida deba convertirse en una caminata de diez kilómetros.",
    ],
  },
  gondomar: {
    encajaSi: [
      "Encaja si se busca casa, terreno y tranquilidad sin alejar hospital, aeropuerto y Vigo.",
      "También si el mar puede funcionar como salida de una tarde en lugar de estar en la puerta. Praia América y otras playas del valle siguen suficientemente cerca para utilizarlas con frecuencia en coche.",
      "Puede encajar especialmente si se prefiere volver del litoral a una casa más silenciosa y con monte cerca.",
      "Y encaja si se acepta organizar la semana por microzona: núcleo para mayor autonomía o parroquia para ganar espacio y privacidad.",
    ],
    encajaNo: [
      "Encaja peor si la razón principal de la mudanza es bajar andando a una playa marítima. Gondomar es interior y no debe venderse como una localidad costera.",
      "Tampoco si se quiere prescindir casi por completo del coche viviendo en una parroquia. Fuera del núcleo, los desplazamientos forman parte de la rutina.",
      "Puede resultar menos adecuado si mantener una finca húmeda, vegetación y cierres es una carga que no se quiere asumir.",
      "Y encaja peor si se busca un verano directamente moderado por el mar y una vida cotidiana organizada alrededor del paseo marítimo.",
    ],
    queComprobar: [
      "Pasar una mañana en la villa y otra en la parroquia concreta que se esté considerando. La diferencia de rutina puede ser mayor de lo que sugieren pocos kilómetros.",
      "Hacer los trayectos reales a compra, farmacia, hospital, Vigo y playa desde la vivienda candidata.",
      "Recorrer la finca después de lluvia y comprobar qué partes permanecen húmedas o en sombra.",
      "Caminar junto al Miñor desde la villa y hacer otro día una salida al Galiñeiro. Así se puede comprobar si río y monte ofrecen realmente el tipo de exterior que se busca.",
      "Y si la playa es importante, conducir hasta Praia América con el tráfico que probablemente se encontrará en verano antes de decidir que la distancia es irrelevante.",
    ],
  },
  cangas: {
    encajaSi: [
      "Encaja si el mar debe formar parte de una semana normal y se valora poder elegir entre playa urbana, ensenada tranquila y costa atlántica dentro del mismo municipio.",
      "También si se quiere una villa anual con mercado, comercio y ferry a Vigo, aceptando que hospital y determinados servicios de mayor escala quedan fuera.",
      "Puede encajar especialmente si el paseo cotidiano y Rodeira se combinan con salidas deliberadas a Aldán, O Hío o Costa da Vela.",
      "Y encaja si se entiende que la mejor microzona depende de la rutina: villa para autonomía; parroquias exteriores para ganar costa natural, casa o terreno.",
    ],
    encajaNo: [
      "Encaja peor si el hospital debe quedar a pocos minutos o si todos los servicios especializados deben estar dentro del municipio.",
      "También si el silencio de agosto es imprescindible en una vivienda situada en las rutas hacia las playas más demandadas.",
      "Puede resultar menos adecuado si se quiere una casa de costa sin aceptar mantenimiento atlántico, carreteras locales y dependencia del coche.",
      "Y pierde parte de su sentido si se compra lejos de la villa esperando conservar exactamente la autonomía peatonal del mercado y el ferry.",
    ],
    queComprobar: [
      "Pasar una jornada sin coche desde una vivienda de la villa y comprobar qué parte de la semana queda realmente a pie.",
      "Probar el ferry a Vigo si esa conexión es una razón importante para elegir Cangas.",
      "Visitar la microzona candidata en un fin de semana de verano y comprobar tráfico y aparcamiento.",
      "Hacer el recorrido real hasta la playa que se utilizaría con frecuencia.",
      "Si se mira Aldán u O Hío, conducir también hasta compra, centro de salud y salida hacia el corredor do Morrazo.",
      "Y visitar la vivienda después de lluvia para comprobar humedad, drenaje y comportamiento de los exteriores.",
    ],
  },
  moana: {
    encajaSi: [
      "Encaja si Vigo forma parte de la semana pero se prefiere vivir en una escala menor y utilizar el ferry cuando sea práctico.",
      "También si paseo y pequeñas playas de ría deben estar integrados en la rutina, especialmente desde la franja central.",
      "Puede encajar si se quiere elegir entre piso caminable junto a servicios y una casa con más vistas y terreno en ladera.",
      "Y encaja si se acepta que esa segunda opción aumenta pendiente y dependencia del coche.",
    ],
    encajaNo: [
      "Encaja peor si toda la vida debe resolverse a pie desde una parroquia alta o desde Domaio.",
      "También si se necesita hospital muy próximo dentro del propio municipio.",
      "Puede resultar menos adecuada si se busca la costa atlántica abierta y los grandes arenales naturales como experiencia diaria.",
      "Y pierde parte de su sentido si se compra en altura esperando conservar exactamente la caminabilidad del paseo.",
    ],
    queComprobar: [
      "Pasar una jornada sin coche desde la vivienda candidata y comprobar compra, salud, paseo y ferry.",
      "Probar el barco a Vigo en el horario que se utilizaría realmente.",
      "Recorrer A Xunqueira y O Con para comprobar qué playa entraría en la rutina.",
      "Visitar una vivienda en ladera a última hora de una tarde de invierno para observar el sol real.",
      "Hacer el trayecto por carretera hacia Vigo o el hospital en horario laboral.",
      "Y comprobar si las cuestas y accesos seguirían siendo cómodos a largo plazo.",
    ],
  },
  bueu: {
    encajaSi: [
      "Encaja si se busca una villa marinera contenida, con puerto, mercado y vida anual, y se prefiere esa escala a una conexión metropolitana más intensa.",
      "También si Cabo Udra, Beluso y Ons ofrecen el tipo de costa que se quiere utilizar, distinguiendo paseo diario de excursión.",
      "Puede encajar si Pontevedra puede funcionar como apoyo para hospital y servicios de mayor escala.",
      "Y encaja si se acepta que fuera del núcleo el coche gana importancia.",
    ],
    encajaNo: [
      "Encaja peor si se necesita hospital muy próximo o una ciudad grande integrada en la rutina peatonal.",
      "También si se quiere conexión diaria por barco con Vigo o ferrocarril.",
      "Puede resultar menos adecuado si se busca mucha oferta de obra nueva o una gran variedad comercial dentro del municipio.",
      "Y pierde parte de su sentido si se compra en una zona interior esperando conservar la caminabilidad de la villa.",
    ],
    queComprobar: [
      "Pasar una jornada completa en la villa y hacer a pie compra, salud, puerto y paseo.",
      "Visitar Beluso si se busca casa o una relación más directa con playa.",
      "Hacer el trayecto real hacia Pontevedra y hospital.",
      "Volver en verano para comprobar presión en playas y aparcamiento.",
      "Recorrer Cabo Udra para saber si ese tipo de costa se utilizaría realmente.",
      "Y visitar la vivienda después de lluvia para comprobar humedad y comportamiento de la parcela o del edificio.",
    ],
  },
  marin: {
    encajaSi: [
      "Encaja si Pontevedra y hospital deben quedar cerca sin renunciar a tener buenas playas a pocos minutos.",
      "También si se valora una ciudad pequeña, anual y funcional más que una villa orientada principalmente al paseo marítimo.",
      "Puede encajar especialmente si se quiere elegir entre piso práctico en el casco y vivienda residencial hacia Mogor o Aguete.",
      "Y encaja si se acepta que el puerto forma parte de la economía y también del paisaje acústico de algunas calles.",
    ],
    encajaNo: [
      "Encaja peor si se exige silencio en el centro o una fachada urbana dedicada casi por completo al ocio marítimo.",
      "También si se quiere bajar andando a una gran playa desde cualquier vivienda céntrica.",
      "Puede resultar menos adecuado si la prioridad es una costa más natural y menos portuaria como experiencia diaria.",
      "Y pierde parte de su sentido si se compra en Aguete esperando mantener exactamente la autonomía peatonal del casco.",
    ],
    queComprobar: [
      "Pasar un lunes laborable en la calle de la vivienda y escuchar puerto y tráfico.",
      "Hacer a pie la compra y los servicios que se utilizarían desde un piso céntrico.",
      "Probar el bus o el trayecto hacia Pontevedra y Montecelo.",
      "Si se mira la costa occidental, hacer desde la vivienda el recorrido a playa y después a compra y centro.",
      "Visitar una casa después de lluvia para comprobar drenaje, humedad y accesos.",
      "Y recorrer el corredor de Portocelo, Mogor y Aguete para comprobar si esa costa compensa realmente el coche adicional.",
    ],
  },
};

export function paraDecidirteNuevo2(
  slug: string,
): ParaDecidirteNuevo2 | undefined {
  return NUEVO2_PARA_DECIDIRTE[slug];
}
