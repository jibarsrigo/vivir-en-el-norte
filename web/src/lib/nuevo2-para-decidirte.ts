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
  "oia": {
    encajaSi: [
      "Puede encajar si se busca vivir con el Atlántico y la montaña muy presentes sin necesitar una localidad urbana alrededor. Oia ofrece una escala pequeña, mucha naturaleza inmediata y varias formas de caminar sin que todas exijan convertir el día en una excursión.",
      "También si una casa con terreno, una vivienda tradicional o un chalet pesan más que disponer de una gran oferta de pisos y servicios a pie. La dispersión permite elegir entre costa, pequeños núcleos e interior, pero implica también menos servicios concentrados y más dependencia del coche.",
      "Y puede encajar si se acepta una relación atlántica con el mar: costa muy presente, pequeñas zonas de baño, mareas, roca y posibilidad de combinar océano con pozas de agua dulce, en lugar de esperar una gran playa urbana como centro de la vida cotidiana.",
    ],
    encajaNo: [
      "Puede encajar peor si se necesita resolver casi toda la semana andando desde un único centro. Hay servicios locales, pero comercio amplio, determinados trámites, atención hospitalaria y muchas actividades obligan a ampliar el radio.",
      "También si depender del coche para una parte importante de la vida diaria resulta un problema. El autobús ofrece conexiones útiles por la costa y hacia Vigo, pero la dispersión del municipio hace que no todas las viviendas tengan la misma relación con esas paradas ni con los horarios.",
      "Y si la expectativa principal es salir de casa a una playa amplia, arenosa y utilizable con independencia de la marea, Santa María puede decepcionar pese a tener el Atlántico literalmente delante. Oia ofrece mucha costa; eso no significa ofrecer la misma experiencia de playa que Mallorca.",
    ],
    queComprobar: [
      "La primera comprobación debería empezar en la vivienda, no en el monasterio. Dejar el coche donde realmente se dejaría cada día y hacer a pie una compra sencilla, un paseo y el regreso. Después conducir hasta el lugar donde se resolverían compras mayores y comprobar cuánto pesa ese trayecto cuando deja de ser una excursión y se convierte en rutina.",
      "Conviene repetir la prueba desde microzonas distintas. Una vivienda en Santa María u O Arrabal permite comprobar qué significa tener el pequeño núcleo histórico y el Camino cerca. Otra en Viladesuso o Mougás muestra una relación más directa con la carretera y con Baiona. Hacia Burgueira o Loureza cambia el mar por una posición más interior.",
      "También merece una visita con lluvia o después de varios días húmedos. No para juzgar Oia por el peor tiempo, sino para mirar la casa en las condiciones en las que orientación, ventilación, cubierta, acceso y humedad dejan de ser conceptos abstractos.",
      "Para comprobar el mar, conviene caminar desde la posible vivienda hasta el tramo costero que realmente se utilizaría y visitar Santa María con la marea en dos estados diferentes. Así se ve inmediatamente por qué estar muy cerca del océano y disponer de una playa cotidiana no son exactamente lo mismo.",
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
  "tomino": {
    encajaSi: [
      "Puede encajar si se busca una casa con finca y se acepta que la contrapartida sea una vida más dispersa y dependiente del coche.",
      "También si el río puede sustituir al mar como paisaje cotidiano. En Goián se puede caminar junto al Miño, utilizar la playa fluvial, pasar tiempo en Espazo Fortaleza y cruzar a Cerveira sin organizar una excursión.",
      "Puede encajar especialmente si cruzar a Portugal resulta atractivo. La Ponte da Amizade hace que la frontera tenga una dimensión práctica: mercado, restaurantes, actividades y paseos pueden quedar al otro lado de un trayecto muy corto.",
      "Y puede encajar si se entiende que Tomiño no es una experiencia única. Elegir bien entre O Seixo, Goián y una parroquia más rural permite ajustar bastante la relación entre servicios, río, terreno y tranquilidad.",
    ],
    encajaNo: [
      "Puede encajar peor si el objetivo principal de la mudanza es tener un verano claramente costero y el Atlántico a pie. Tomiño es valle y río; para playa marítima hay que conducir.",
      "También si se quiere resolver casi toda la semana andando desde un único casco compacto. Hay núcleos con servicios, pero el municipio funciona mediante varios centros y muchas viviendas dispersas.",
      "Puede resultar menos adecuado si el coche se quiere reducir al mínimo. Una casa aparentemente cercana en el mapa puede exigir varios desplazamientos diarios cuando se suman compra, actividades y servicios.",
      "Y puede encajar peor si el calor de valle o la humedad de una casa con finca son aspectos poco tolerables. Una visita agradable junto al río no sustituye probar cómo se vive la vivienda en una tarde cálida y después de varios días de lluvia.",
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
      "Encaja peor si el hospital especializado debe quedar muy cerca. El área de Vigo está aproximadamente a 45 minutos y esa distancia no cambia de manera sustancial eligiendo otra calle de A Guarda.",
      "Tampoco si el viento marítimo y el salitre se consideran inconvenientes difíciles de asumir. La exposición forma parte de vivir en la punta y puede afectar tanto al uso de una terraza como al mantenimiento de la vivienda.",
      "Puede resultar menos adecuada si se necesita una ciudad grande para la rutina diaria o conexiones metropolitanas inmediatas. A Guarda tiene autonomía de villa, no escala urbana.",
    ],
    queComprobar: [
      "Pasar un día completo en el núcleo sin coche y comprobar cuánto de la rutina real puede resolverse andando desde la vivienda candidata.",
      "Volver con viento y observar terraza, ventanas, ruido y exposición. En una vivienda frente al mar, esa segunda visita es tan importante como la primera.",
      "Probar Area Grande y O Muíño por separado. Una mira al Atlántico abierto y la otra a la desembocadura; saber cuál se usaría realmente ayuda a elegir microzona.",
      "Recorrer el acceso al área hospitalaria de Vigo y una salida hacia Vigo en condiciones normales. La posición en la punta es parte estructural de la decisión.",
      "Si la vivienda está en Camposancos o en una ladera, medir también el trayecto a mercado, farmacia y compra cotidiana y no extrapolar la caminabilidad del centro a todo el municipio.",
      "Finalmente, visitar en un día fuerte de verano para comprobar aparcamiento, tráfico y ruido antes de asumir que la tranquilidad del resto del año será idéntica en agosto.",
    ],
  },
  "tui": {
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
      "Y encaja peor si el calor de valle es incompatible con lo que se busca. El verano es más cálido que en la punta atlántica de A Guarda u Oia.",
    ],
    queComprobar: [
      "Pasar una jornada normal moviéndose a pie entre la vivienda candidata, compra, centro y ribera. La autonomía de Tui es una ventaja real solo si la microzona permite aprovecharla.",
      "Recorrer las pendientes del casco desde la vivienda y repetir mentalmente el trayecto con bolsas, lluvia o movilidad reducida. Pocos metros en el mapa pueden equivaler a una diferencia importante de cota.",
      "Si se mira el ensanche, escuchar la A-55 a distintas horas. Una conexión excelente por carretera pierde parte de su valor si domina acústicamente la terraza o el dormitorio.",
      "Visitar Areeiros u O Penedo, comprobando antes los avisos municipales y el estado sanitario vigente, y después hacer una salida a la costa. Así se comprueba si el Miño cubre la relación cotidiana con el agua o si el mar acabará siendo una necesidad frecuente.",
      "Probar también Valença a pie y comprobar si esa conexión se incorporaría de verdad a la semana.",
      "Por último, hacer el trayecto al hospital y al aeropuerto y revisar horarios útiles de tren. Tui destaca precisamente por logística; conviene verificar que esas ventajas funcionan para la rutina concreta.",
    ],
  },
  "baiona": {
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
      "Y encaja peor si se compra en una ladera dependiente del coche esperando conservar la misma caminabilidad del centro.",
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
  "nigran": {
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
      "Y encaja peor si el presupuesto obliga a alejarse de la costa cuando la razón principal para elegir Nigrán era precisamente bajar andando a la playa.",
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
  "gondomar": {
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
  "cangas": {
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
      "Y encaja peor si se compra lejos de la villa pero se espera conservar la misma autonomía peatonal del mercado y el ferry.",
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
  "moana": {
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
      "Y encaja peor si se compra en altura pero se espera conservar la misma caminabilidad de la franja del paseo.",
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
  "bueu": {
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
      "Y encaja peor si se compra en una zona interior pero se espera conservar la misma caminabilidad de la villa.",
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
  "marin": {
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
      "Y encaja peor si se compra en Aguete pero se espera mantener la misma autonomía peatonal del casco.",
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
  "soto-del-barco": {
    encajaSi: [
      "Puede encajar si se busca vivir en un concejo pequeño sin quedar muy lejos de hospital y aeropuerto, y se acepta salir del municipio para compras grandes, atención hospitalaria y otros servicios que no existen allí.",
      "San Juan añade una combinación particular: un pueblo pequeño donde compra básica, médico, farmacia, puerto, desembocadura y playa pueden formar parte de una misma vida diaria.",
      "Soto ofrece la otra posibilidad: vivir algo más retirado de la costa abierta, junto al Nalón y en el núcleo administrativo, manteniendo servicios básicos propios.",
    ],
    encajaNo: [
      "Puede encajar peor si se quiere una oferta amplia de comercio, actividades y sanidad dentro del propio pueblo o reducir mucho el uso del coche cuando la necesidad sale de lo básico.",
      "También hay que aceptar el cambio respecto a Mallorca: menos sol, mucha más humedad y lluvia y un verano bastante más fresco. En San Juan, tener Los Quebrantos junto al pueblo tampoco convierte el Cantábrico en una playa de baño previsible.",
      "También puede encajar peor si se busca mucha obra nueva o se necesita dar por segura la fibra sin comprobar la dirección concreta. En un mercado pequeño, el estado, el acceso y la ubicación de cada vivienda pesan más que una media municipal.",
    ],
    queComprobar: [
      "Probar por separado Soto y San Juan. En Soto, salir desde una vivienda posible y hacer la vida corriente: compra, farmacia, médico, paseo y coche. En San Juan, hacer lo mismo y continuar hacia el puerto, la desembocadura y Los Quebrantos. Después conviene hacer el trayecto al Hospital San Agustín y al aeropuerto.",
    ],
  },

  "salinas-castrillon": {
    encajaSi: [
      "Puede encajar si se quiere tener una playa extensa y un paseo marítimo a pie desde casa sin renunciar a la cercanía de una ciudad.",
      "También si resulta útil vivir en un núcleo pequeño y completar determinados servicios en Piedras Blancas o Avilés. El Hospital San Agustín y el aeropuerto quedan aproximadamente a diez minutos en coche.",
      "Salinas combina así playa cotidiana con accesos rápidos a servicios urbanos, siempre que se acepte que no toda la semana se resuelve dentro del propio núcleo.",
    ],
    encajaNo: [
      "Puede encajar peor si se quiere resolver prácticamente toda la vida andando dentro del mismo núcleo, porque parte de los servicios exige desplazarse a Piedras Blancas o Avilés.",
      "También si se busca una costa alejada visualmente de puerto e industria. Hacia San Juan de Nieva, el paseo desde Salinas acaba acercándose a la entrada de la ría y al paisaje portuario-industrial de Avilés.",
      "El verano trae más movimiento y presión de aparcamiento junto a la playa. Además, comprar en Salinas tiene una referencia sensiblemente más alta que Piedras Blancas o el conjunto de Castrillón.",
    ],
    queComprobar: [
      "Desde una vivienda candidata, hacer a pie el recorrido hasta la compra habitual y la playa. Continuar después hacia El Espartal y, si interesa, hacia San Juan de Nieva. Probar también en coche los trayectos a Piedras Blancas, Avilés y el Hospital San Agustín. Volver a la misma calle en un momento de alta ocupación veraniega. En la vivienda, revisar orientación, luz, aislamiento, humedad, salitre, fachada y ventanas.",
    ],
  },
  "luanco-gozon": {
    encajaSi: [
      "Puede encajar si se busca una villa pequeña donde el mar y una parte importante de la vida diaria estén realmente mezclados.",
      "En Luanco no hace falta salir del pueblo para encontrar centro de salud con atención continuada, farmacias, biblioteca o servicios sociales. Tampoco hace falta salir para llegar al puerto o a la playa urbana.",
      "La relación con el mar tiene además más capas que el baño. Está el puerto actual, la historia pesquera, los restos de construcción naval en Aramar y un Museo Marítimo que explica pesca, navegación, carpintería de ribera y naturaleza marina.",
    ],
    encajaNo: [
      "Puede encajar peor si se quiere disponer de hospital dentro de la propia localidad. Luanco tiene atención primaria y continuada, pero para hospital hay que conducir hacia Gijón o Avilés.",
      "Tampoco debe confundirse la villa con todo Gozón. Las otras playas, el paisaje rural y las viviendas más dispersas del concejo pueden ampliar mucho las posibilidades de costa y naturaleza, pero ya no conservan necesariamente la facilidad de hacer a pie la vida descrita aquí.",
      "El verano añade más visitantes. Aparcamiento y movimiento alrededor del centro y de las playas deben comprobarse en ese momento, no deducirse de una visita tranquila fuera de temporada.",
    ],
    queComprobar: [
      "Desde una vivienda candidata, hacer a pie una compra cotidiana, pasar por una farmacia y el centro de salud y continuar hacia el puerto y la playa. Recorrer después el frente marítimo hasta la iglesia de Santa María. Si interesa caminar más, subir a la senda costera y avanzar un tramo hacia Bañugues. Probar también el trayecto en coche hacia uno de los hospitales próximos y hacia el aeropuerto. Repetir la visita en verano si el aparcamiento o la tranquilidad de la calle son importantes.",
    ],
  },
  "muros-de-nalon": {
    encajaSi: [
      "Muros de Nalón puede encajar si se busca un concejo pequeño y se acepta que parte de las compras, el hospital y los servicios especializados se resolverán fuera.",
      "También si interesa elegir entre dos relaciones distintas con el agua: en San Esteban, puerto y desembocadura pueden entrar en el paseo diario; en Muros, la vida se organiza primero alrededor del núcleo y Aguilar y San Esteban quedan como destinos próximos.",
    ],
    encajaNo: [
      "Puede encajar peor si se necesita resolver una parte muy amplia de la semana sin coche o sin salir de un núcleo pequeño, o si se espera una oferta urbana de comercio y servicios inmediatamente disponible.",
      "También puede encajar peor si vivir junto al mar significa necesariamente tener una gran playa urbana al final de la calle. San Esteban tiene el agua muy presente, pero es puerto y desembocadura; Muros está cerca de Aguilar, pero no forma una continuidad urbana con la playa.",
    ],
    queComprobar: [
      "Tratar Muros y San Esteban como dos candidatos residenciales distintos. En San Esteban, salir desde una vivienda real y recorrer a pie el consultorio, el puerto, la ría y el comienzo de las sendas. En Muros, hacer el mismo ejercicio dentro del núcleo y después probar los desplazamientos hacia Aguilar y San Esteban. Hacer también el trayecto real hacia el hospital y una compra de mayor escala. Visitar la vivienda con tiempo húmedo y comprobar luz, orientación, ventilación, acceso, aparcamiento y cualquier señal que aconseje revisar humedad.",
    ],
  },
  "pontevedra": {
    encajaSi: [
      "Encaja si se quiere una ciudad pequeña donde gran parte de la semana pueda hacerse andando y donde hospital, tren, comercio y cultura formen parte de la misma escala urbana.",
      "También si el paseo junto al río puede cubrir la necesidad cotidiana de exterior y basta con desplazarse cuando se quiere playa de mar.",
      "Puede encajar especialmente si se valora una ciudad plenamente activa durante todo el año, sin depender del calendario turístico para que haya servicios y vida en la calle.",
      "Y encaja si la proximidad al hospital y a las conexiones de Vigo y Santiago pesa más que vivir literalmente junto a un arenal.",
    ],
    encajaNo: [
      "Encaja peor si el motivo principal de la mudanza es bajar andando a una playa marítima desde casa. El Lérez y la ría están integrados en la ciudad, pero la arena de baño queda fuera del centro.",
      "También si se busca una vivienda amplia con terreno sin aumentar el uso del coche. Esa combinación pertenece más a las parroquias que a la ciudad compacta.",
      "Puede resultar menos adecuada si se quiere una vida completamente silenciosa en las calles centrales durante las grandes fiestas.",
      "Y encaja peor si la lluvia y la humedad invernal son aspectos difíciles de asumir en una vivienda urbana de piedra o con poca orientación solar.",
    ],
    queComprobar: [
      "Pasar un día entero desde la vivienda sin coche: compra, farmacia, mercado, centro, estación y paseo del Lérez.",
      "Recorrer la zona por la noche si la vivienda está cerca de hostelería o plazas.",
      "Hacer un tramo de la senda del Lérez y comprobar si ese tipo de paseo cubriría realmente la necesidad cotidiana de naturaleza.",
      "Conducir hasta la playa que se utilizaría habitualmente y repetir el trayecto en temporada alta.",
      "Hacer el recorrido real al hospital y a la estación.",
      "Y volver a la vivienda con lluvia para comprobar luz, ventilación, accesos y sensación interior.",
    ],
  },
  "poio": {
    encajaSi: [
      "Encaja si se quiere vivir junto a la ría sin alejarse de una ciudad completa.",
      "También si se valora poder elegir entre varias formas de residencia: proximidad a Pontevedra, puerto pequeño, casco histórico, playa o casa en ladera.",
      "Puede encajar especialmente si una vivienda con más espacio o vistas pesa más que tener todos los servicios concentrados en una única plaza.",
      "Y encaja si se acepta que la microzona decide el uso del coche: Poio puede ser muy práctico o bastante disperso según la dirección.",
    ],
    encajaNo: [
      "Encaja peor si se quiere una experiencia municipal homogénea. Vivir en San Salvador no se parece a hacerlo en Combarro ni en Raxó.",
      "También si la presión turística de verano resulta incompatible con la vida cotidiana y la vivienda está dentro o junto al casco más visitado.",
      "Puede resultar menos adecuado si se quiere prescindir del coche viviendo en una zona alta o dispersa.",
      "Y encaja peor si se compra una casa por sus vistas sin aceptar humedad, pendiente, mantenimiento de parcela y accesos.",
    ],
    queComprobar: [
      "Pasar una mañana en San Salvador, otra en Combarro y otra en Raxó antes de comparar viviendas de esas zonas.",
      "Desde cada dirección candidata, hacer una compra, ir a la farmacia y probar el acceso hacia Pontevedra.",
      "Comprobar la playa que se utilizaría realmente y recorrer el trayecto a pie desde casa si esa cercanía justifica el precio.",
      "Volver a Combarro en temporada alta.",
      "Visitar una casa de ladera después de lluvia y comprobar suelo, drenaje y horas de sol.",
      "Y hacer el trayecto al hospital y a la estación de Pontevedra para entender cuánto de la ventaja urbana funciona realmente desde esa microzona.",
    ],
  },
  "sanxenxo": {
    encajaSi: [
      "Encaja si la playa debe formar parte de la rutina diaria y se está dispuesto a pagar más por poder llegar andando a ella.",
      "También si interesa elegir entre una villa de paseo, un núcleo marinero como Portonovo y una costa atlántica más abierta dentro del mismo municipio.",
      "Puede encajar especialmente si se valora un verano mucho más fresco que Mallorca y se acepta compartir la costa con una población estacional muy alta.",
      "Y encaja si la vida anual puede organizarse alrededor de Sanxenxo o Portonovo, sin exigir hospital ni aeropuerto a pocos minutos.",
    ],
    encajaNo: [
      "Encaja peor si julio y agosto deben conservar el mismo silencio, tráfico y facilidad de aparcamiento que noviembre.",
      "También si el presupuesto obliga a vivir lejos de la costa cuando la principal razón para elegir el municipio era hacer vida de playa a pie.",
      "Puede resultar menos adecuado si el hospital y el aeropuerto deben quedar muy cerca.",
      "Y encaja peor si el mantenimiento ligado a salitre, humedad y primera línea se quiere reducir al mínimo.",
    ],
    queComprobar: [
      "Pasar una jornada completa en Sanxenxo y otra en Portonovo fuera de temporada.",
      "Repetir la visita en agosto y comprobar ruido, tráfico y aparcamiento.",
      "Hacer a pie desde la vivienda candidata supermercado, centro de salud y playa.",
      "Recorrer un tramo del Sendero Azul entre Sanxenxo y Portonovo para comprobar si realmente formaría parte de la rutina.",
      "Visitar A Lanzada con viento y oleaje para distinguirla de las playas urbanas protegidas.",
      "Y hacer el trayecto real hacia el hospital y el aeropuerto antes de dar por asumida la logística.",
    ],
  },
  "o-grove": {
    encajaSi: [
      "Encaja si se busca una villa marinera con actividad anual y el mar como parte visible de la vida cotidiana.",
      "También si se quiere elegir entre una rutina caminable en la villa y una vida mucho más costera en San Vicente o Pedras Negras.",
      "Puede encajar especialmente si marisqueo, lonja, calas y paseos junto al Atlántico pesan más que tener hospital o aeropuerto cerca.",
      "Y encaja si se acepta que agosto y la Festa do Marisco cambian el tráfico y la ocupación de un municipio que depende de un único istmo para salir por carretera.",
    ],
    encajaNo: [
      "Encaja peor si hospital y aeropuerto deben quedar a pocos minutos.",
      "También si se quiere vivir en la costa exterior sin utilizar el coche con frecuencia.",
      "Puede resultar menos adecuado si la humedad y el mantenimiento de una casa entre pinos son cargas poco deseables.",
      "Y encaja peor si se confunde la experiencia de A Toxa con la vida diaria de la villa o de San Vicente.",
    ],
    queComprobar: [
      "Pasar una mañana normal en la villa haciendo compra, farmacia, mercado y puerto a pie.",
      "Dormir una noche en San Vicente si se está considerando una vivienda allí y hacer al día siguiente los recados habituales.",
      "Recorrer Pedras Negras y visitar A Siradella para comprobar qué parte de esa costa se utilizaría realmente.",
      "Conducir por el istmo en verano y durante un periodo de mucha actividad.",
      "Hacer el trayecto real al Hospital do Salnés.",
      "Y visitar la vivienda después de lluvia para comprobar humedad, drenaje, salitre y comportamiento de los espacios exteriores.",
    ],
  },
  "vigo": {
    encajaSi: [
      "Encaja si se quiere conservar una ciudad completa y poder decidir cuánto mar entra en la vida diaria.",
      "También si hospital, universidad, aeropuerto, tren, cultura y comercio deben quedar dentro del mismo municipio.",
      "Puede encajar especialmente si se acepta vivir en un barrio urbano para reducir coche y utilizar la costa como salida frecuente.",
      "Y puede encajar si se prefiere una casa cerca de Samil, O Vao o las parroquias del suroeste y se acepta que parte de la semana vuelva a depender del vehículo.",
    ],
    encajaNo: [
      "Encaja peor si se busca silencio de pueblo y una escala urbana muy pequeña.",
      "También si las pendientes son un problema importante y la vivienda está en una ladera mal conectada.",
      "Puede resultar menos adecuado si se quiere una casa grande con vistas y playa próxima dentro de un presupuesto contenido.",
      "Y encaja peor si se espera que una vivienda costera mantenga la misma autonomía peatonal que el centro.",
    ],
    queComprobar: [
      "Hacer una jornada completa desde la vivienda candidata sin coche si esa autonomía forma parte de la decisión.",
      "Caminar las cuestas que se repetirían cada día.",
      "Probar el autobús que se usaría realmente y no solo comprobar que existe una parada.",
      "Hacer el trayecto al Álvaro Cunqueiro y al aeropuerto en horario normal.",
      "Visitar la zona en invierno con lluvia y en verano con actividad de playa.",
      "Y comprobar desde la vivienda cuánto tarda realmente llegar al paseo o playa que justifica elegir esa microzona.",
    ],
  },
  "redondela": {
    encajaSi: [
      "Encaja si se quiere una villa con mercado, estación y vida anual sin pagar los precios de Vigo.",
      "También si se valora tener Vigo y Pontevedra accesibles en tren o carretera y mantener una escala residencial más pequeña.",
      "Puede encajar especialmente si Cesantes permite incorporar la ría y el baño a la semana desde la vivienda elegida.",
      "Y encaja si se acepta revisar calle por calle el impacto de tren, autopista y carreteras.",
    ],
    encajaNo: [
      "Encaja peor si el silencio absoluto es un requisito difícil de negociar.",
      "También si se espera que toda Redondela tenga playa a pie: esa ventaja pertenece sobre todo a Cesantes y a direcciones concretas.",
      "Puede resultar menos adecuada si se quiere una experiencia uniforme entre casco, Chapela y parroquias costeras.",
      "Y encaja peor si se compra una casa sin comprobar humedad, acceso y ruido en una mañana laborable.",
    ],
    queComprobar: [
      "Pasar una mañana en el casco y utilizar mercado y estación.",
      "Visitar Cesantes con marea alta y baja para entender el tipo de playa y paisaje.",
      "Escuchar la vivienda con ventanas abiertas cuando haya tráfico y paso de trenes.",
      "Hacer un trayecto real en tren hacia Vigo o Pontevedra.",
      "Conducir al hospital práctico del área de Vigo.",
      "Y visitar la vivienda después de lluvia si se trata de una casa o bajo.",
    ],
  },
  "soutomaior": {
    encajaSi: [
      "Encaja si se quiere una escala de pueblo con tren y servicios concentrados en Arcade.",
      "También si una casa con terreno interesa más que poder hacer toda la semana andando y se acepta utilizar coche desde el interior.",
      "Puede encajar especialmente si Pontevedra y Vigo deben estar cerca sin vivir dentro de ninguna de las dos ciudades.",
      "Y encaja si ría, río, castillo y bosque bastan aunque no exista una gran playa urbana propia.",
    ],
    encajaNo: [
      "Encaja peor si todos los servicios deben quedar a pie desde una casa de parroquia.",
      "También si una gran playa propia forma parte central de la decisión.",
      "Puede resultar menos adecuado si se quiere fibra garantizada sin comprobar la dirección concreta.",
      "Y encaja peor si la vivienda rural se compra por terreno y silencio sin asumir mantenimiento, humedad y desplazamientos.",
    ],
    queComprobar: [
      "Pasar una mañana normal en Arcade y hacer a pie los recados principales.",
      "Utilizar la estación y comprobar horarios que encajen con la rutina real.",
      "Recorrer el entorno del Verdugo y del peirao para entender qué tipo de agua entra en la vida diaria.",
      "Visitar el castillo y comprobar si sería realmente una salida repetible desde la vivienda.",
      "Hacer el trayecto a hospital y compras grandes.",
      "Y visitar cualquier casa rural después de varios días de lluvia.",
    ],
  },
  "vilaboa": {
    encajaSi: [
      "Encaja si se quiere casa con terreno y una vida tranquila sin alejarse demasiado de Pontevedra y Vigo.",
      "También si la ensenada, las Salinas do Ulló y el monte aportan suficiente exterior aunque no exista una gran playa cotidiana.",
      "Puede encajar especialmente si se acepta utilizar coche casi todos los días a cambio de espacio y una escala de parroquia.",
      "Y encaja si se está dispuesto a revisar con detalle acceso, humedad, saneamiento y conectividad antes de comprar.",
    ],
    encajaNo: [
      "Encaja peor si se necesita resolver la semana andando desde casa.",
      "También si se quiere un núcleo compacto con mercado, instituto, hospital y oferta cultural concentrados.",
      "Puede resultar menos adecuado si la playa grande a pie es una condición central.",
      "Y encaja peor si se compra únicamente por vistas a la ensenada sin asumir coche, mantenimiento y posibles ruidos de carretera.",
    ],
    queComprobar: [
      "Pasar una mañana completa haciendo los recados que se repetirían cada semana.",
      "Conducir a Pontevedra, Arcade y al hospital para saber qué apoyo urbano sería realmente el habitual.",
      "Recorrer las Salinas do Ulló y una de las pequeñas playas de la ensenada para entender qué tipo de relación con el agua ofrece el municipio.",
      "Visitar Lago Castiñeiras o Cotorredondo para comprobar si el monte tendría uso real desde la vivienda.",
      "Volver a la propiedad después de lluvia y observar parcela, muros y accesos.",
      "Y comprobar fibra, saneamiento y abastecimiento antes de dar por buena una casa por su precio o sus vistas.",
    ],
  },
  "meano": {
    encajaSi: [
      "Se busca casa, terreno o viñedo y se acepta que el coche forme parte normal de la semana.",
      "Resulta suficiente tener A Lanzada y Cambados a pocos minutos en lugar de vivir con el mar delante.",
      "Se valora un entorno rural anual, poco dependiente del turismo, y se prefiere espacio exterior a una plaza compacta llena de servicios.",
    ],
    encajaNo: [
      "Se quiere resolver gran parte de la semana andando desde casa.",
      "La playa marítima debe quedar a pie o formar parte espontánea de cada tarde.",
      "Una vivienda con humedad, parcela exigente, mala orientación o internet incierto sería una carga difícil de asumir.",
    ],
    queComprobar: [
      "Hacer los recados básicos desde la vivienda candidata y contar trayectos reales en coche.",
      "Visitar después de varios días húmedos y revisar luz, cubierta, ventilación, drenaje y accesos.",
      "Probar la carretera hacia A Lanzada en temporada alta.",
      "Medir el trayecto al Hospital do Salnés y a los servicios que se utilizarían cada semana.",
      "Confirmar fibra en la dirección exacta.",
    ],
  },

  "cambados": {
    encajaSi: [
      "Se busca una villa histórica donde mercado, comercio, salud, restauración y paseo puedan formar parte de la semana a pie.",
      "El mar puede vivirse como ría, marea y marisqueo sin exigir una gran playa urbana delante de casa.",
      "El vino, el patrimonio y la actividad de todo el año pesan más que una experiencia de resort.",
    ],
    encajaNo: [
      "La playa de arena a pie es una condición esencial.",
      "El silencio durante la primera semana de agosto es imprescindible en una vivienda céntrica.",
      "Se busca mucha obra nueva o una casa amplia con terreno sin utilizar coche.",
    ],
    queComprobar: [
      "Pasar un día completo a pie desde la vivienda candidata.",
      "Volver durante la Festa do Albariño si la vivienda está cerca de Fefiñáns, A Calzada o recorridos de gran actividad.",
      "Revisar humedad, cubierta y ventilación después de lluvia en casas antiguas.",
      "Comprobar aparcamiento y ascensor en pisos céntricos.",
      "Hacer el trayecto real al Hospital do Salnés y a la playa que se usaría con frecuencia.",
    ],
  },

  "a-illa-de-arousa": {
    encajaSi: [
      "El mar debe formar parte de la vida diaria y se quiere poder caminar al puerto, a una playa o a un sendero.",
      "Se acepta una vida muy tranquila en invierno y que hospital, compras grandes y otros servicios se resuelvan en el continente.",
      "Calas, ría y pinar pesan más que disponer de una ciudad completa dentro del municipio.",
    ],
    encajaNo: [
      "Hospital, gran comercio o tren deben quedar dentro del propio municipio.",
      "Depender de un único puente para todas las salidas por carretera genera demasiada incomodidad.",
      "El presupuesto es ajustado o viento, salitre y presión estival serían inconvenientes difíciles de asumir.",
    ],
    queComprobar: [
      "Hacer una jornada completa sin coche dentro de la isla.",
      "Cruzar el puente en una tarde fuerte de verano y en un día laboral ordinario.",
      "Visitar la vivienda con viento y después de lluvia.",
      "Comprobar aparcamiento en temporada alta.",
      "Recorrer desde la vivienda el trayecto real a O Xufre, playa habitual y puente.",
      "Hacer el trayecto al Hospital do Salnés.",
    ],
  },

  "vilanova-de-arousa": {
    encajaSi: [
      "Se quiere una villa pequeña con ría, paseo y servicios básicos sin vivir en una ciudad.",
      "Se valora tener Vilagarcía cerca para hospital, tren y compras grandes.",
      "Una playa de ría y vida anual tranquila pesan más que el carácter monumental de Cambados o la condición insular de A Illa.",
    ],
    encajaNo: [
      "Hospital, estación o gran oferta comercial deben estar dentro del propio núcleo.",
      "Las celebraciones de agosto y septiembre deben pasar completamente desapercibidas.",
      "Se compra en una parroquia esperando mantener la misma vida a pie que en la villa.",
    ],
    queComprobar: [
      "Hacer una mañana completa sin coche en el núcleo.",
      "Recorrer a pie desde la vivienda hasta Ariño u O Terrón.",
      "Volver durante una noche festiva si se compra en el centro.",
      "Comprobar tráfico y ruido en As Sinas.",
      "Hacer el trayecto real a Vilagarcía y al Hospital do Salnés.",
      "Revisar humedad, salitre o drenaje según la microzona.",
    ],
  },

  "vilagarcia-de-arousa": {
    encajaSi: [
      "Hospital, tren y vida sin coche pesan más que vivir en una villa pequeña o en una isla.",
      "Se quiere mantener playa de ría y paseo dentro de la rutina sin renunciar a comercio, institutos, mercado y servicios urbanos.",
      "Se necesita una ciudad activa todo el año y se acepta una trama urbana menos uniforme que la de Cambados.",
    ],
    encajaNo: [
      "Se busca un casco histórico muy compacto y silencioso.",
      "El puerto, el tráfico urbano o la actividad de agosto son inconvenientes difíciles de aceptar.",
      "El objetivo principal es una gran playa atlántica o una vida insular rodeada de calas.",
    ],
    queComprobar: [
      "Hacer a pie desde la vivienda mercado, estación, salud y paseo.",
      "Escuchar la calle con ventanas abiertas en un día laborable.",
      "Volver durante San Roque si se compra en el centro.",
      "Recorrer Compostela y Carril para comprobar qué relación con la ría entraría realmente en la semana.",
      "Medir trayectos reales desde Carril, Vilaxoán o parroquias altas hasta hospital y estación.",
      "Revisar aislamiento acústico y estado comunitario en pisos.",
    ],
  },

  "rianxo": {
    encajaSi: [
      "Se busca una villa pequeña de ría donde centro, puerto y playa puedan formar parte de la misma jornada a pie.",
      "Cultura local, vida anual y proximidad razonable a Santiago pesan más que disponer de una ciudad completa.",
      "Se acepta conducir aproximadamente media hora para hospital comarcal.",
    ],
    encajaNo: [
      "Hospital y especialistas deben quedar a pocos minutos.",
      "Se busca una gran playa atlántica con oleaje en la puerta.",
      "Una casa en parroquia se compra esperando conservar la misma autonomía peatonal del casco.",
    ],
    queComprobar: [
      "Hacer una mañana de recados a pie desde la vivienda.",
      "Caminar hasta Tanxil o A Torre y comprobar la marea.",
      "Probar el trayecto al Hospital do Barbanza y a Santiago.",
      "Visitar después de lluvia y revisar humedad, luz y ventilación.",
      "Comprobar aparcamiento y ruido durante las principales fiestas si se compra en el centro.",
    ],
  },
  "boiro": {
    encajaSi: [
      "Se busca una villa de tamaño medio donde compra, salud, colegio y playa puedan encajar en la misma semana.",
      "Barraña como paseo y playa cotidiana pesa más que vivir frente al Atlántico abierto.",
      "Se acepta desplazarse unos veinte minutos para hospital.",
    ],
    encajaNo: [
      "Se necesita tren o gran ciudad dentro del municipio.",
      "El océano con oleaje es una prioridad diaria.",
      "Se compra una casa en parroquia esperando mantener vida peatonal.",
    ],
    queComprobar: [
      "Hacer la ruta real vivienda–mercado–centro de salud–Barraña.",
      "Visitar la costa en un domingo fuerte de agosto.",
      "Revisar humedad, cubierta, ventilación y salitre según microzona.",
      "Medir el trayecto al Hospital do Barbanza.",
      "Confirmar fibra en la dirección concreta si es necesaria para trabajar.",
    ],
  },
  "a-pobra-do-caraminal": {
    encajaSi: [
      "Se busca villa pequeña con hospital comarcal muy próximo.",
      "Se quiere alternar ría, playa y monte sin grandes desplazamientos.",
      "Cultura local y vida anual importan más que disponer del comercio de una ciudad.",
    ],
    encajaNo: [
      "Se necesita gran oferta comercial dentro del propio núcleo.",
      "Una casa en ladera no puede depender del coche.",
      "Viento, humedad o mantenimiento de una finca inclinada serían problemas importantes.",
    ],
    queComprobar: [
      "Hacer la semana a pie desde una vivienda del casco.",
      "Probar Cabío en agosto y medir aparcamiento.",
      "Recorrer el trayecto al Hospital do Barbanza.",
      "Visitar casas de ladera después de lluvia y comprobar drenaje y sol.",
      "Escuchar el centro durante las principales fiestas antes de comprar.",
    ],
  },
  "ribeira": {
    encajaSi: [
      "Hospital, comercio y servicios completos son prioritarios.",
      "Se quiere playa urbana sin renunciar a una ciudad pequeña activa todo el año.",
      "Tener Corrubedo, Aguiño y Sálvora dentro del mismo municipio añade valor.",
    ],
    encajaNo: [
      "Se busca un casco histórico homogéneo y silencioso.",
      "La actividad portuaria o el tráfico son incompatibles con la vivienda deseada.",
      "No se quiere conducir para llegar a la parte más espectacular de la costa atlántica.",
    ],
    queComprobar: [
      "Hacer la semana a pie desde el piso candidato.",
      "Escuchar la calle en día laborable cerca del puerto.",
      "Probar Coroso en temporada alta.",
      "Visitar Corrubedo con viento si se compra en la fachada atlántica.",
      "Revisar salitre, aislamiento acústico y estado de comunidad.",
    ],
  },
  "porto-do-son": {
    encajaSi: [
      "El Atlántico, las playas y el paisaje pesan más que vivir en una villa muy completa.",
      "Se acepta utilizar coche con frecuencia y comprobar servicios desde la dirección concreta.",
      "Se valora tener Baroña, Enxa, humedales y una costa extensa dentro del mismo municipio.",
    ],
    encajaNo: [
      "La semana debe resolverse andando.",
      "Fibra garantizada y comercio amplio son imprescindibles.",
      "Viento, oleaje y mantenimiento costero serían un problema constante.",
    ],
    queComprobar: [
      "Hacer todos los recados desde la vivienda candidata.",
      "Visitar con viento y después de lluvia.",
      "Probar la playa habitual con distintos estados de marea y mar.",
      "Confirmar fibra en la dirección exacta.",
      "Medir el trayecto real al Hospital do Barbanza.",
      "Revisar tráfico y aparcamiento en agosto.",
    ],
  },
  "noia": {
    encajaSi: [
      "Se busca una villa histórica con comercio, mercado y vida diaria a pie.",
      "Santiago a unos cuarenta minutos resulta una ventaja suficiente para completar hospital, aeropuerto y servicios.",
      "La playa puede ser una salida corta en vez de estar integrada en el casco.",
    ],
    encajaNo: [
      "Hospital de mayor capacidad debe quedar a menos de media hora.",
      "Se quiere bajar andando a una playa de baño desde la mayoría de las calles del centro.",
      "Humedad y rehabilitación de vivienda antigua son problemas que no se quieren asumir.",
    ],
    queComprobar: [
      "Hacer una mañana completa a pie desde la vivienda.",
      "Probar Testal con pleamar y bajamar.",
      "Medir el trayecto hospitalario a Santiago.",
      "Visitar una casa histórica después de varios días de lluvia.",
      "Comprobar aparcamiento en agosto si se compra en el casco.",
    ],
  },
  "oleiros": {
    encajaSi: [
      "Oleiros encaja si atrae vivir en casa baja o urbanización con A Coruña a unos diez minutos, aceptando que hay que elegir una forma concreta de vivir el municipio. En Perillo el súper y las gestiones quedan a mano, a cambio de no tener la orilla debajo de casa; en Santa Cristina el baño y el paseo de ría entran en la rutina, a cambio de usar más el coche para lo cotidiano y de un verano más lleno. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol y más lluvia y humedad.",
      "También encaja si el baño de casi todos los días puede ser de ría —Santa Cristina como referencia— y se acepta que Dexo-Serantes u otras salidas de acantilado quedan como tarde elegida, no como la orilla de diario. Se puede resolver lo básico en el municipio y usar la capital para el hospital, las compras grandes y la cultura.",
    ],
    encajaNo: [
      "Oleiros encaja peor si el presupuesto para tres habitaciones o para un chalé debe quedar en un precio medio de esta zona: el metro de referencia ronda 2.605 €/m² y esas tipologías suben con facilidad. Ferrol, Bergondo o Sada suelen bajar el precio; Sada, además, ofrece una villa con puerto.",
      "También encaja peor si se busca un casco gótico, una aldea marinera densa como Redes o una ciudad con el hospital a pie: aquí mandan el chalé, el paseo y la vida residencial alrededor de A Coruña. Y si el cielo debe parecerse al de Mallorca, o si se decide solo tras un sábado soleado en Santa Cristina sin probar un noviembre ni el aparcamiento de agosto, suele llevar a sorpresa.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre Perillo y una vivienda junto a Santa Cristina —o a la orilla que se usaría—. Desde cada casa: una compra sencilla, el trayecto a la playa o al paseo, y la salida hacia A Coruña y al CHUAC en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en verano (aparcamiento, ruido, gente en la orilla) y un día cubierto de noviembre (luz, humedad, jardín). Y comprobar la fibra y el estado de la vivienda en la dirección exacta.",
    ],
  },
  "a-coruna": {
    encajaSi: [
      "A Coruña encaja si atrae la ciudad completa y el mar en el mismo día más que una urbanización silenciosa, aceptando que hay que elegir una forma concreta de vivirla. Junto a Riazor u Orzán el Atlántico entra en la rutina, a cambio de viento, sal y verano más lleno; en el ensanche hacia dentro se gana aparcamiento y distancia al ruido, a cambio de no tener el oleaje en la ventana. Hospital y aeropuerto quedan en la misma ciudad o a pocos minutos. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol y más lluvia y humedad.",
      "También encaja si se acepta el Atlántico abierto como baño de casi todos los días —agua fresca y oleaje— y se reserva la orilla de ría, más quieta, para salidas a Oleiros, Sada o Gandarío. Y si se quiere café, cine, la universidad, el AVE y la lonja en enero sin salir de la península: aquí la vida no depende del verano turístico.",
    ],
    encajaNo: [
      "A Coruña encaja peor si se busca chalé con jardín, calles de urbanización y playa de ría como baño de casi todos los días. Eso está más en Oleiros —Santa Cruz, Mera— o en Sada —Fontán—; aquí hay más densidad, fiestas de María Pita y océano abierto.",
      "También encaja peor si tres habitaciones en tipologías habituales deben quedar en un precio medio de esta zona: el metro de referencia ronda 3.239 €/m² y esa tipología sube con facilidad hacia precios altos. Y si el cielo debe parecerse al de Mallorca, o si se decide solo tras un sábado de sol sin probar un día gris ni el ruido de las fiestas en el centro.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda junto a Riazor u Orzán y otra unas calles hacia dentro del ensanche. Desde cada una: compra a pie, trayecto al tramo de paseo o playa que se usaría, y salida al CHUAC y a Alvedro en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en verano en la orilla (gente, viento, aparcamiento) y un día de frente gris (luz, humedad, terraza). Si la calle cae cerca del recorrido festivo, preguntar por María Pita o San Juan. Y comprobar ascensor y sal en ventanas en la dirección exacta.",
    ],
  },
  "mino": {
    encajaSi: [
      "Miño encaja si atrae la Praia Grande o Costa Miño a un precio más razonable que Oleiros, aceptando servicios limitados y coche o tren para lo que aquí no se cubre, y aceptando que hay que elegir una forma concreta de vivir el municipio. Junto a la Praia Grande la playa entra en la rutina, a cambio de un verano más lleno; en Costa Miño ganan jardín y calle ancha, a cambio de coche para casi todo. Pontedeume y las Fragas do Eume pueden bastar como salidas cercanas; A Coruña queda para el hospital, las compras grandes y la cultura. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol y más lluvia y humedad.",
      "También encaja si el baño de casi todos los días puede ser de ría —Praia Grande o, más recogido, Perbes— y el verano intenso junto al arenal se tolera eligiendo bien la calle, no la primera fila más ruidosa.",
    ],
    encajaNo: [
      "Miño encaja peor si se necesita comercio denso, instituto o servicios de villa completa dentro del propio municipio: aquí lo básico cabe; lo demás pide Pontedeume o A Coruña. Tampoco si el hospital o el aeropuerto deben quedar a unos diez minutos: el CHUAC ronda los veinte y Alvedro, los treinta.",
      "Y si el cielo debe parecerse al de Mallorca, o si se decide solo tras un sábado de sol en las dunas sin probar un noviembre en Costa Miño ni el aparcamiento de agosto, suele llevar a sorpresa.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda junto a la Praia Grande y otra en Costa Miño. Desde cada casa: una compra sencilla, el trayecto a la playa que se usaría, y la salida hacia el CHUAC y Alvedro en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en verano en la Praia Grande (aparcamiento, ruido, gente) y un día cubierto de noviembre (luz, humedad, jardín). Y comprobar la fibra y el estado de la vivienda en la dirección exacta.",
    ],
  },
  "sada": {
    encajaSi: [
      "Sada encaja si atrae una villa con puerto, paseo y agua de ría, con A Coruña a unos quince minutos para el hospital y la ciudad, aceptando que hay que elegir una forma concreta de vivir el municipio. En el casco junto a Fontán la compra y el paseo quedan a mano, a cambio de un verano más lleno; tierra adentro ganan parcela y silencio, a cambio de coche para bajar a la orilla. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol y más lluvia y humedad.",
      "También encaja si el baño de casi todos los días puede ser de ría —playa urbana o Gandarío a unos minutos— y se tolera el verano activo en Fontán y las fiestas de agosto eligiendo bien la calle, no la primera fila del paseo más ruidosa.",
    ],
    encajaNo: [
      "Sada encaja peor si se busca chalé de urbanización costera como en Mera —tramo atlántico de Oleiros— o una ciudad con el hospital a pie: aquí mandan la villa de ría y el CHUAC a unos quince minutos. Tampoco si se necesita el silencio de parroquia en primera línea del paseo en agosto.",
      "Y si el cielo debe parecerse al de Mallorca, o si se decide solo tras un sábado de sol en Fontán sin probar un noviembre ni el aparcamiento de la Sardiñada, suele llevar a sorpresa.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda junto a Fontán o al casco y otra tierra adentro. Desde cada casa: una compra sencilla, el trayecto al paseo o a la playa que se usaría, y la salida hacia el CHUAC y Alvedro en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en verano en el paseo (aparcamiento, ruido, gente) y un día cubierto de noviembre (luz, humedad). Si la calle cae cerca del Curruncho o del recorrido festivo, preguntar por agosto. Y comprobar la fibra y el estado de la vivienda en la dirección exacta.",
    ],
  },
  "bergondo": {
    encajaSi: [
      "Bergondo encaja si atrae casa con jardín, calma y ría cercana a un precio más bajo que Oleiros o Sada, aceptando coche casi cada día y servicios repartidos, y aceptando que hay que elegir una forma concreta de vivir el municipio. Junto a Gandarío la playa entra en la rutina, a cambio de un verano más lleno; tierra adentro ganan parcela y silencio, a cambio de coche para bajar a la orilla y para comprar. Sada y Betanzos cubren comercio y casco; A Coruña, hospital y ciudad. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol y más lluvia y humedad.",
      "También encaja si el baño de casi todos los días puede ser de ría —Gandarío o Pedrido— y se tolera el verano activo en la orilla eligiendo bien la calle, no la primera fila más ruidosa del arenal.",
    ],
    encajaNo: [
      "Bergondo encaja peor si se busca villa compacta con súper y paseo a pie, como Sada, o urbanización ordenada tipo Oleiros: aquí no hay un centro peatonal único y los servicios están repartidos entre parroquias, Sada y Betanzos. Tampoco si se necesita playa asegurada andando desde cualquier dirección, o el hospital a unos diez minutos: el CHUAC ronda los veinte.",
      "Y si el cielo debe parecerse al de Mallorca, o si se decide solo tras un sábado de sol en Gandarío sin probar un noviembre ni la ruta real a farmacia y súper, suele llevar a sorpresa.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda junto a Gandarío y otra tierra adentro —por ejemplo hacia Guísamo o A Senra—. Desde cada casa: una compra sencilla, el trayecto a la playa que se usaría, y la salida hacia el CHUAC y Alvedro en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en verano en Gandarío (aparcamiento, ruido, gente) y un día cubierto de noviembre (luz, humedad, jardín). Y comprobar la fibra y el estado de la vivienda en la dirección exacta.",
    ],
  },
  "ares": {
    encajaSi: [
      "Ares encaja si atrae una villa pequeña con playa de ría a pie, o la aldea de Redes, aceptando Ferrol a unos veinte minutos para el hospital y el comercio grande, y aceptando que hay que elegir una forma concreta de vivir el municipio. En la villa la compra básica y el paseo quedan a mano, a cambio de un verano más lleno; en Redes ganan las fachadas de colores y el puerto en la puerta, a cambio de coche para el súper y de calles muy concurridas en agosto. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol y más lluvia y humedad.",
      "También encaja si el baño de casi todos los días puede ser de ría —playa urbana, Redes o Chanteiro— y se tolera el verano activo y las fiestas del Carmen y de San Roque eligiendo bien la calle, no la primera fila más ruidosa del paseo.",
    ],
    encajaNo: [
      "Ares encaja peor si se necesita hospital cerca, aeropuerto a minutos o comercio grande a pie: aquí la villa es cómoda y el resto queda en Ferrol o A Coruña. Tampoco si se busca urbanización ordenada tipo Oleiros, o si se confunde la caminabilidad de la villa con Redes —donde no hay supermercado—.",
      "Y si el cielo debe parecerse al de Mallorca, o si se decide solo tras un sábado de sol en las casas de colores sin probar un noviembre ni el aparcamiento de agosto, suele llevar a sorpresa.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en la villa de Ares y otra en Redes. Desde cada casa: una compra sencilla, el trayecto a la playa que se usaría, y la salida hacia el hospital de Ferrol y Alvedro en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en verano en la playa urbana o en Redes (aparcamiento, ruido, gente) y un día cubierto de noviembre (luz, humedad). Si la casa cae en Redes, recorrer a pie desde el aparcamiento del borde. Y comprobar la fibra y el estado de la vivienda en la dirección exacta.",
    ],
  },
  "ferrol": {
    encajaSi: [
      "Ferrol encaja si atrae ciudad naval con hospital en el propio municipio y vivienda más asequible que Oleiros o A Coruña, aceptando que las playas atlánticas son salida en coche, no baño desde el ensanche, y aceptando que hay que elegir una forma concreta de vivir el municipio. En la Magdalena la compra y el hospital quedan a mano, a cambio de un comercio más apagado que en A Coruña; hacia Doniños ganan la playa brava y el horizonte, a cambio de coche para lo urbano. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol y más lluvia y humedad.",
      "También encaja si se tolera la Semana Santa en el centro —procesiones, cortes, gente— y el verano concurrido en Doniños o San Xurxo eligiendo bien la calle, no la primera fila más ruidosa del recorrido festivo o del acceso a la playa.",
    ],
    encajaNo: [
      "Ferrol encaja peor si se busca urbanización ordenada tipo Oleiros, villa con playa de ría a pie como Ares, o baño templado de ría como gesto diario desde casa: aquí el Atlántico abierto es salida. Tampoco si el aeropuerto debe quedar a unos diez minutos: Alvedro ronda los treinta y cinco.",
      "Y si el cielo debe parecerse al de Mallorca, o si se decide solo tras un sábado de sol en Doniños sin probar un noviembre en el centro ni la Semana Santa en la Magdalena, suele llevar a sorpresa.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en la Magdalena o el ensanche y otra hacia Doniños o San Xurxo. Desde cada casa: una compra sencilla, el trayecto al hospital o a la playa que se usaría, y la salida hacia Alvedro en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en Semana Santa o en agosto en la costa (aparcamiento, ruido, gente) y un día cubierto de noviembre en el centro (luz, humedad, ambiente comercial). Y comprobar el estado del edificio, el ascensor si hace falta, y la fibra en la dirección exacta.",
    ],
  },
  "o-vicedo": {
    encajaSi: [
      "O Vicedo encaja si atrae vivir con el mar cerca en un pueblo muy pequeño: el núcleo junto a la ría do Barqueiro, o la costa abierta hacia Xilloi y Arealonga —playas del propio municipio— y el paseo de Fuciño do Porco. Xilloi, Arealonga y Fuciño no son villas de al lado: son orillas y tramos de costa de O Vicedo. Hay que elegir dónde se vive porque no se vive igual. En el núcleo quedan el puerto y una compra mínima cerca, pero el pueblo es mínimo y casi todo lo demás se hace en Viveiro. En la costa abierta el horizonte queda delante, pero el súper serio pide Viveiro (unos veinte minutos) y el Hospital da Mariña, en Burela, unos treinta y cinco. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia, niebla alta y humedad.",
      "También encaja si el baño de casi todos los días puede ser de Cantábrico fresco —o de orilla de ría más recogida— y se tolera el verano más lleno en las playas abiertas, eligiendo bien la calle y no la primera fila del acceso a Xilloi o a Fuciño.",
    ],
    encajaNo: [
      "O Vicedo encaja peor si se necesita hospital cerca, aeropuerto a minutos o comercio a pie todo el año: aquí los servicios son mínimos —2/10 en nuestra escala— y eso importa porque la compra seria, muchas gestiones y la sanidad comarcal quedan en Viveiro o en Burela. Tampoco si se busca una villa caminable como Viveiro o Ribadeo, o si se confunde la quietud del núcleo con poder vivir la semana sin salir: el súper completo sigue fuera.",
      "Y si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en Fuciño sin probar un noviembre ni el aparcamiento de agosto, suele llevar a sorpresa.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el núcleo junto a la ría y otra hacia Xilloi, Arealonga o Fuciño. Desde cada casa: una compra sencilla —y el trayecto a Viveiro para la completa—, la playa que se usaría, y la salida hacia el hospital de Burela y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en verano en Xilloi o en el acceso a Fuciño (aparcamiento, ruido, gente) y un día cubierto de noviembre (luz, niebla, humedad). Y comprobar la fibra y el estado de la vivienda en la dirección exacta.",
    ],
  },
  "viveiro": {
    encajaSi: [
      "Viveiro encaja si atrae una villa de ría con vida propia todo el año: el casco caminable —compra y mesas cerca— o Covas, con la playa delante. Hay que elegir dónde se vive porque no se vive igual. En el casco la semana cotidiana se resuelve cerca; la Semana Santa llena calles y cambia el ritmo. En Covas ganan la arena y el paseo, pero el comercio denso pide cruzar al casco y agosto se nota más en los accesos. El Hospital da Mariña queda en Burela, a unos veinticinco minutos; el aeropuerto útil, alrededor de cien. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia, niebla y humedad.",
      "También encaja si el baño de casi todos los días puede ser de ría —Covas, Area o Sacido— y se tolera la Semana Santa en el casco y el verano en Covas, eligiendo bien la calle y no la primera fila del recorrido festivo o del paseo.",
    ],
    encajaNo: [
      "Viveiro encaja peor si se necesita hospital a pie o aeropuerto a minutos: aquí la villa es cómoda para la semana, pero el hospital está en Burela y el aeropuerto a una hora larga. Tampoco si se busca el aislamiento extremo de O Vicedo, o si se confunde la caminabilidad del casco con Covas —donde el comercio denso pide cruzar—.",
      "Y si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en la Porta de Carlos V sin probar un noviembre ni la Semana Santa, suele llevar a sorpresa.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el casco y otra en Covas. Desde cada casa: una compra sencilla, el trayecto a la playa que se usaría, y la salida hacia el hospital de Burela y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en Semana Santa o en agosto en Covas (aparcamiento, ruido, gente) y un día cubierto de noviembre en el casco (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda, el ascensor si hace falta, y la fibra en la dirección exacta.",
    ],
  },
  "xove": {
    encajaSi: [
      "Xove encaja si atrae vivir junto al mar abierto del Cantábrico en playas del propio municipio —Esteiro, arenal con oleaje y arcos de roca; Portocelo, ensenada más recogida; o el tramo hacia el faro de Punta Roncadoira— o si prefiere el núcleo de San Bartolomé, donde están el ayuntamiento, la farmacia y el Centro Cívico. Esteiro, Portocelo y Roncadoira no son pueblos de al lado: son orillas y parroquias de Xove. Hay que elegir dónde se vive porque las dos experiencias no se mezclan solas. En San Bartolomé se resuelven gestiones y parte de la semana cerca, pero bajar a la playa pide ir en coche. Junto a Esteiro o Portocelo el mar queda delante, pero la compra grande y el Hospital da Mariña se hacen en Viveiro o en Burela, a unos veinte minutos desde el núcleo. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia, niebla y humedad.",
      "También encaja si se acepta la presencia del complejo industrial de San Ciprián en el término —se ve desde parte de la costa— y el verano más lleno en Esteiro, eligiendo bien la calle y no la primera fila del acceso a la playa.",
    ],
    encajaNo: [
      "Xove encaja peor si se necesita una villa caminable con comercio amplio, mesas abiertas en enero y un súper completo sin salir del pueblo: aquí faltan —los servicios son 3/10 en nuestra escala— y eso importa porque la compra semanal seria y buena parte del ocio se organizan en Viveiro o en Burela, no en San Bartolomé. Tampoco si el hospital debe quedar a pie: el de Burela está a unos veinte minutos desde el núcleo. Y si se confunde tener farmacia y centro médico en San Bartolomé con poder vivir toda la semana sin salir del municipio, suele haber sorpresa: el comercio grande sigue fuera.",
      "Tampoco si se espera un cielo parecido al de Mallorca, si la industria cercana pesa demasiado al elegir casa, o si se decide solo tras un sábado de sol en Esteiro sin probar un noviembre ni el aparcamiento de agosto.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en San Bartolomé y otra hacia Esteiro o Portocelo. Desde cada casa: una compra sencilla —y el trayecto a Viveiro o Burela para la completa—, la playa que se usaría, y la salida hacia el hospital y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en verano en Esteiro (aparcamiento, ruido, gente) y un día cubierto de noviembre (luz, viento, humedad). Situar la casa respecto al complejo de San Ciprián. Y comprobar la fibra y el estado de la vivienda en la dirección exacta.",
    ],
  },
  "cervo": {
    encajaSi: [
      "Cervo encaja si atrae San Cibrao —la península del municipio, con puerto, las playas de O Torno y Cubelas, paseo y farmacia cerca— o Sargadelos —el núcleo interior de la cerámica, junto al río Xunco y al Paseo dos Namorados, sin playa debajo—. Son dos partes del mismo concello, no villas vecinas. Hay que elegir dónde se vive porque no se vive igual. En San Cibrao se puede llegar a la playa y resolver lo básico del núcleo sin montar un viaje; la compra grande y el Hospital da Mariña se hacen en Burela, a unos diez minutos. En Sargadelos ganan la Real Fábrica y el paseo del río, pero la playa y casi cada compra seria piden coche. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia, niebla y humedad.",
      "También encaja si se acepta que el complejo de San Ciprián forma parte del paisaje —se ve desde parte de la bahía— y que agosto en San Cibrao se nota más (Maruxaina, Carmen, gente en la playa), eligiendo bien la calle y no la primera fila del paseo.",
    ],
    encajaNo: [
      "Cervo encaja peor si se necesita un comercio grande sin salir del municipio: aquí faltan hipermercado y densidad comercial —los servicios son 5/10 en nuestra escala— y eso importa porque la compra semanal amplia y muchas marcas se resuelven en Burela, a unos diez minutos, no en San Cibrao. Tampoco si se supone que cualquier dirección de Cervo tiene la misma relación con el mar que la península: en Sargadelos la playa pide coche. Y si el hospital debe quedar a pie, Burela está cerca pero no debajo.",
      "Tampoco si se espera un cielo parecido al de Mallorca, si la industria cercana pesa demasiado al elegir casa, o si se decide solo tras un sábado de sol en O Torno sin probar un noviembre ni el aparcamiento de la Maruxaina.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en San Cibrao y otra hacia Sargadelos. Desde cada casa: una compra sencilla —y el trayecto a Burela para la completa—, la playa que se usaría, y la salida hacia el hospital y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en agosto en San Cibrao —Maruxaina, aparcamiento, ruido— y un día cubierto de noviembre (luz, viento, humedad). Situar la casa respecto al complejo de San Ciprián. Y comprobar la fibra y el estado de la vivienda en la dirección exacta.",
    ],
  },
  "burela": {
    encajaSi: [
      "Burela encaja si atrae una villa donde el hospital, el mercado y el comercio caben en la semana sin salir del municipio —o si se quiere vivir cerca del puerto y de la lonja, con la flota del bonito delante—. Hay que elegir dónde se vive porque no se oye igual la casa. Cerca del puerto ganan el oficio y el ritmo de la dársena; también el ruido de trabajo y, en agosto, la Feira do Bonito. Hacia dentro de la villa el Hospital da Mariña suele quedar a unos cinco minutos, las calles son más quietas y el olor a muelle queda más lejos. El aeropuerto útil pide trayecto: Asturias, alrededor de ochenta y cinco minutos; Santiago, hacia los ciento diez. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia, niebla y humedad.",
      "También encaja si A Marosa y Ril bastan como playas de casi todos los días y se tolera el calendario del puerto —Carmen, Feira do Bonito— eligiendo bien la calle y no la primera fila del muelle.",
    ],
    encajaNo: [
      "Burela encaja peor si se busca casco de piedra, muralla o fachada indiana: eso falta aquí —aunque los servicios sean altos, 8/10 en nuestra escala— y importa porque quien quiere esa imagen de villa histórica la encuentra en Viveiro o en Ribadeo, no en Burela. Tampoco si el ruido de puerto y lonja molesta cerca de casa: la flota no es decoración y un día de descarga o de Feira do Bonito se oye.",
      "Y si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en A Marosa sin probar un noviembre ni un día de lonja, suele llevar a sorpresa.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda cerca del puerto y otra hacia dentro de la villa. Desde cada casa: una compra sencilla, el trayecto al hospital, A Marosa o Ril, y la salida hacia el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación un día de lonja o en la Feira do Bonito (ruido, tráfico, gente) y un día cubierto de noviembre (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda, el ascensor si hace falta, y la fibra en la dirección exacta.",
    ],
  },
  "foz": {
    encajaSi: [
      "Foz encaja si atrae una villa donde se puede resolver buena parte de la semana sin salir del municipio y donde la playa de A Rapadoira —arena del propio casco— queda a pie, o si se prefiere vivir hacia la ría del Masma y la marisma, con otra orilla y menos primera fila de verano en la playa. Hay que elegir dónde se vive porque no se vive igual. Junto a A Rapadoira ganan la playa y el paseo; agosto se nota más. Hacia la ría ganan el agua quieta y más holgura; la playa urbana pide unos minutos. El Hospital da Mariña está en Burela, a unos veinte minutos. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia, niebla y humedad.",
      "También encaja si se tolera el calendario de verano —Carmen, San Lourenzo, Fiesta Normanda— eligiendo bien la calle y no la primera fila del paseo en las semanas más llenas.",
    ],
    encajaNo: [
      "Foz encaja peor si el hospital debe quedar a pie: aquí falta —la atención primaria está en la villa, pero el Hospital da Mariña está en Burela a unos veinte minutos— y eso importa porque una urgencia hospitalaria o muchas pruebas piden coche. Tampoco si se busca silencio constante junto a A Rapadoira en agosto: la playa urbana atrae veraneo y el aparcamiento se disputa. Los servicios cotidianos son altos —7/10: comercio, salud primaria, biblioteca y playa en el núcleo— pero ese siete no incluye hospital ni formación profesional completa; la cabecera sanitaria sigue en Burela.",
      "Y si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en A Rapadoira sin probar un noviembre ni un agosto en el paseo, suele llevar a sorpresa.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda junto a A Rapadoira y otra hacia la ría o la marisma. Desde cada casa: una compra sencilla, el trayecto a la orilla que se usaría, y la salida hacia el hospital de Burela y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en agosto en el paseo (aparcamiento, ruido, gente) y un día cubierto de noviembre (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda, el ascensor si hace falta, y la fibra en la dirección exacta.",
    ],
  },
  "barreiros": {
    encajaSi: [
      "Barreiros encaja si atrae vivir con playas largas del propio municipio delante —Arealonga, Altar, Coto u otras— o si prefiere San Cosme de Barreiros, la capital del concello, más interior. Hay que elegir dónde se vive porque no se vive igual. En la costa ganan la arena y el horizonte; la compra seria y buena parte de los servicios se hacen en Foz o en Ribadeo, a unos diez o quince minutos. En San Cosme hay más sensación de pueblo pequeño; la playa pide coche. As Catedrais —en el término de Ribadeo— quedan a pocos minutos desde Reinante. El hospital está en Burela, a unos veinticinco minutos. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia, niebla y humedad.",
      "También encaja si se tolera el contraste entre un agosto lleno en la costa y un noviembre con pocas luces en muchos bloques, eligiendo bien la calle y no solo la primera fila del acceso a la playa.",
    ],
    encajaNo: [
      "Barreiros encaja peor si se necesita salir de casa y resolver casi toda la semana andando: aquí faltan comercio denso, farmacia y servicios juntos en un núcleo —los servicios son 3/10 en nuestra escala— y eso importa porque la compra semanal seria y buena parte de la vida urbana se organizan en Foz o en Ribadeo. Tampoco si el hospital debe quedar cerca a pie: Burela está a unos veinticinco minutos. Y si se confunde tener playa delante con autonomía cotidiana, suele haber sorpresa.",
      "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en As Catedrais sin probar un noviembre ni el aparcamiento de agosto en Arealonga.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda junto a Arealonga o Reinante y otra hacia San Cosme. Desde cada casa: una compra sencilla —y el trayecto a Foz o Ribadeo para la completa—, la playa que se usaría, y la salida hacia el hospital de Burela y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en agosto en la costa o en el acceso a As Catedrais (aparcamiento, ruido, gente) y un día cubierto de noviembre (luz, humedad, luces encendidas alrededor). Y comprobar la fibra y el estado de la vivienda en la dirección exacta.",
    ],
  },
  "ribadeo": {
    encajaSi: [
      "Ribadeo encaja si atrae una villa con casco indiano, comercio a pie y ría del Eo delante —puerto, miradores, frontera con Asturias— o si se quiere vivir más cerca de As Catedrais —Praia de Augas Santas, arcos de piedra del propio municipio—. Hay que elegir dónde se vive porque no se vive igual. En el casco se resuelve mucha semana sin salir; la playa atlántica pide coche. Hacia As Catedrais ganan los arcos; el comercio denso y buena parte de la vida anual quedan en la villa. El hospital está fuera —Burela o, según circuito, Jarrio en Asturias—. El aeropuerto de Asturias suele quedar alrededor de sesenta minutos. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia, humedad y niebla media.",
      "También encaja si se tolera el calendario de verano —Ribadeo Indiano, Carmen, Semana Grande, colas en As Catedrais— eligiendo bien la calle y no la primera fila del acceso a los arcos.",
    ],
    encajaNo: [
      "Ribadeo encaja peor si el hospital debe quedar en el propio municipio: aquí falta —aunque los servicios cotidianos sean altos, 8/10— y eso importa porque urgencias hospitalarias y muchas pruebas piden trayecto a Burela o a Jarrio. Tampoco si se quiere una playa atlántica de baño integrada a pie en el casco: la ría es cotidiana; As Catedrais no. Y si se confunde la fama de los arcos con la vida de la villa, suele haber sorpresa.",
      "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en As Catedrais sin probar un noviembre en el casco ni un agosto en los accesos.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el casco o junto a la ría y otra hacia As Catedrais. Desde cada casa: una compra sencilla, el trayecto al puerto o a los arcos, y la salida hacia el hospital y el aeropuerto de Asturias en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en temporada en As Catedrais (aparcamiento, cupos, gente) y un día cubierto de noviembre en el casco (luz, humedad, mesas abiertas). Y comprobar escaleras o ascensor, el estado de la vivienda y la fibra en la dirección exacta.",
    ],
  },
  castropol: {
    encajaSi: [
      "Castropol encaja si atrae un pueblo blanco sobre la ría del Eo —agua abrigada frente a Ribadeo— o si se prefiere Figueras, el núcleo marinero del mismo concejo con puerto y astilleros. Hay que elegir dónde se vive porque no se vive igual. En la villa ganan el mirador y la quietud; la compra seria y buena parte de los servicios se hacen en Ribadeo. En Figueras gana el puerto; el súper denso sigue fuera. El Hospital de Jarrio queda a unos treinta minutos. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia, niebla alta y humedad.",
      "También encaja si se tolera el calendario de verano —Santiago en la villa, Carmen en Figueras, Penarronda en temporada— eligiendo bien la calle y no solo la primera fila del acceso a la playa.",
    ],
    encajaNo: [
      "Castropol encaja peor si se necesita resolver casi toda la semana andando sin salir del concejo: aquí faltan comercio grande y densidad de servicios —los servicios son 3/10 en nuestra escala: hay centro de salud y lo básico, pero la compra semanal seria pide Ribadeo— y eso importa porque sin coche la semana se estrecha. Tampoco si el hospital debe quedar cerca a pie: Jarrio está a unos treinta minutos. Y si se confunde la belleza de la ría con autonomía cotidiana, suele haber sorpresa.",
      "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol sobre el promontorio sin probar un noviembre de niebla ni un agosto en Figueras o Penarronda.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en Castropol villa y otra en Figueras. Desde cada casa: una compra sencilla —y el trayecto a Ribadeo para la completa—, la ría o el puerto, y la salida hacia Jarrio y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en agosto en Figueras o Penarronda (aparcamiento, gente) y un día cubierto de noviembre en la villa (niebla, humedad, luces encendidas). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
    ],
  },
  "tapia-de-casariego": {
    encajaSi: [
      "Tapia encaja si atrae una villa marinera compacta con puerto, faro y compra a pie, o si se quiere vivir más cerca de las playas de Anguileiro, Represas o Serantes —ola y costa abierta del propio municipio—. Hay que elegir dónde se vive porque no se vive igual. En el casco se resuelve mucha semana sin salir; la playa pide unos minutos. Hacia las playas ganan la ola y el horizonte; el comercio denso queda en la villa. El Hospital de Jarrio queda a unos veinte minutos. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia, niebla alta y humedad.",
      "También encaja si se tolera el calendario de verano —Carmen en julio, surf y gente en la playa en agosto— eligiendo bien la calle y no la primera fila del acceso a Anguileiro.",
    ],
    encajaNo: [
      "Tapia encaja peor si el hospital debe quedar a pie: aquí falta —aunque los servicios cotidianos lleguen a 6/10: villa con paseo, comercio y centro de salud, sin FP ni hospital propio— y eso importa porque urgencias hospitalarias piden Jarrio a unos veinte minutos. Tampoco si se busca silencio constante junto al puerto en julio: el Carmen llena muelle y calles. Y si se confunde tener playa cerca con una villa sin presión de verano, suele haber sorpresa.",
      "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en Anguileiro sin probar un noviembre de niebla ni un Carmen en el casco.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el casco o junto al puerto y otra hacia Anguileiro. Desde cada casa: una compra sencilla, el trayecto al muelle o a la playa, y la salida hacia Jarrio y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en julio en el Carmen o en Anguileiro (aparcamiento, gente) y un día cubierto de noviembre en el casco (niebla, humedad, mesas abiertas). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
    ],
  },
  navia: {
    encajaSi: [
      "Navia encaja si atrae una villa de servicios junto a su ría —comercio, centro de salud, cine, gestiones a pie— con el Hospital de Jarrio a unos diez minutos, o si se prefiere Puerto de Vega, el núcleo marinero del concejo a unos cinco minutos. Hay que elegir dónde se vive porque no se vive igual. En la villa se resuelve mucha semana sin salir; Frexulfe y Barayo piden salida corta. En Vega gana el puerto; el comercio amplio queda en Navia. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia, humedad y niebla media.",
      "También encaja si se tolera el calendario —Las Barcas en agosto, Las Telayas en Vega en septiembre— eligiendo bien la calle y no solo la primera fila del muelle en fiestas.",
    ],
    encajaNo: [
      "Navia encaja peor si se busca la playa integrada al casco como en Tapia: aquí la ría es cotidiana; Frexulfe y Barayo son salidas, y la playa de Navia pide unos minutos según la vivienda. Tampoco si el hospital debe quedar dentro del municipio: Jarrio está cerca —unos diez minutos— pero no a pie en la villa. Los servicios cotidianos llegan a 6/10 —villa completa para el occidente, sin hospital propio— y eso importa porque lo hospitalario sigue pidiendo coche corto. Y si se confunde la postal de Puerto de Vega con la autonomía de la villa, suele haber sorpresa.",
      "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en Frexulfe sin probar un noviembre en la villa ni unas Telayas en Vega.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en la villa de Navia y otra en Puerto de Vega. Desde cada casa: una compra sencilla, el trayecto a la ría o al puerto, y la salida hacia Jarrio y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en agosto en Las Barcas o en septiembre en Las Telayas (aparcamiento, gente) y un día cubierto de noviembre en la villa (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
    ],
  },
  "luarca-valdes": {
    encajaSi: [
      "Luarca encaja si atrae la villa blanca con puerto, río Negro y playas 1ª y 2ª en la zona baja, o si se prefiere vivir en cota alta hacia la Atalaya —faro, cementerio, ermita— u otras partes de Valdés. Hay que elegir dónde se vive porque no se vive igual. Abajo se resuelve mucha semana a pie; arriba ganan las vistas y el coche pesa más. El Hospital de Jarrio queda a unos veinte minutos; el aeropuerto de Asturias, hacia cuarenta. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia, humedad y niebla media.",
      "También encaja si se tolera el calendario de agosto —Rosario con saleo, San Timoteo— eligiendo bien la calle y no la primera fila del puerto en las semanas más llenas.",
    ],
    encajaNo: [
      "Luarca encaja peor si se necesitan recorridos llanos entre casa, compra y mar: aquí la topografía manda —los servicios llegan a 6/10 en la villa, pero una casa en cota alta convierte cada trayecto en cuesta— y eso importa porque el mapa miente sobre el esfuerzo. Tampoco si el hospital debe quedar a pie: Jarrio está a unos veinte minutos. Y si se confunde la belleza de la Atalaya con poder vivir toda la semana sin bajar, suele haber sorpresa.",
      "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en el faro sin probar un noviembre en la zona baja ni un agosto de fiestas.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en la zona baja y otra en cota alta o en el resto de Valdés. Desde cada casa: una compra sencilla, el trayecto al puerto o a la Atalaya, y la salida hacia Jarrio y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en agosto en el Rosario o San Timoteo (aparcamiento, gente) y un día cubierto de noviembre abajo (luz, humedad, mesas abiertas). Y comprobar escaleras, ascensor, el estado de la vivienda y la fibra en la dirección exacta.",
    ],
  },
  villaviciosa: {
    encajaSi: [
      "Villaviciosa encaja si atrae una villa con vida anual, sidra y ría delante —comercio y centro de salud a pie— o si se prefiere vivir hacia Rodiles o Tazones, con playa o pueblo marinero y coche para la semana de villa. Hay que elegir dónde se vive porque no se vive igual. En el casco se resuelve mucha semana sin salir; el baño pide unos doce minutos. Hacia Rodiles ganan la playa y el pinar; el comercio denso queda en la villa. Cabueñes queda a unos veinticinco minutos. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia, humedad y niebla media.",
      "También encaja si se tolera el calendario —Desembarco en agosto, Festival de la Manzana en años impares, Rodiles en verano— eligiendo bien la calle y no solo la primera fila del acceso a la playa.",
    ],
    encajaNo: [
      "Villaviciosa encaja peor si la playa de baño debe quedar a pie desde el casco: aquí falta —la ría es cotidiana, pero Rodiles pide coche— y eso importa porque quien confunde ría con playa de baño suele llevarse sorpresa. Tampoco si el hospital debe quedar en el municipio: Cabueñes está a unos veinticinco minutos. Los servicios cotidianos son altos —7/10: villa con comercio, centro de salud y vida anual, sin hospital propio— pero ese siete no sustituye la cabecera sanitaria de Gijón.",
      "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en Rodiles sin probar un noviembre en el casco.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el casco y otra hacia Rodiles o Tazones. Desde cada casa: una compra sencilla, el trayecto a la ría o a la playa, y la salida hacia Cabueñes y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en agosto en Rodiles (aparcamiento, gente) y un día cubierto de noviembre en el casco (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
    ],
  },
  colunga: {
    encajaSi: [
      "Colunga encaja si atrae un concejo pequeño con el núcleo de servicios básicos —farmacia, tiendas, centro de salud a pie— o si se prefiere Lastres, el pueblo colgado sobre el puerto con pendientes fuertes y más verano en la calle. Hay que elegir dónde se vive porque no se vive igual. En el núcleo se resuelve lo esencial sin tanta cuesta; el puerto y la playa piden unos minutos. En Lastres ganan el muelle y las vistas; cada trayecto corto mezcla desnivel, y el comercio grande queda fuera. El Hospital del Oriente, en Arriondas, queda a unos veinte minutos. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia y humedad.",
      "También encaja si se tolera el calendario de julio —Loreto en el núcleo, Carmen en Lastres, La Griega y La Isla en temporada— eligiendo bien la calle y no solo la primera fila del mirador.",
    ],
    encajaNo: [
      "Colunga encaja peor si se necesita resolver casi toda la semana andando sin salir del concejo: aquí faltan comercio grande e instituto amplio —los servicios son 4/10 en nuestra escala: hay básicos en el núcleo y Lastres como polo marinero, pero la compra semanal seria y buena parte de la oferta escolar piden Villaviciosa o Ribadesella— y eso importa porque sin coche la semana se estrecha. Tampoco si el hospital debe quedar en el municipio: Arriondas está a unos veinte minutos. Y si se elige Lastres sin aceptar pendientes fuertes en el día a día, suele haber sorpresa.",
      "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en el mirador de San Roque sin probar un noviembre húmedo ni un julio de Carmen en las calles empinadas.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en Colunga núcleo y otra en Lastres. Desde cada casa: un recado sencillo, el trayecto al puerto o a La Griega, y la salida hacia Arriondas y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en julio o agosto en Lastres o La Griega (aparcamiento, gente, cuestas) y un día cubierto de noviembre en el núcleo (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
    ],
  },
  ribadesella: {
    encajaSi: [
      "Ribadesella encaja si atrae una villa con ría y puerto delante —comercio, mercado, cine y centro de salud a pie— o si se prefiere vivir en Santa Marina, con playa urbana, paseo y casas de Indianos al otro lado del puente. Hay que elegir dónde se vive porque no se vive igual. En el casco se resuelve mucha semana sin salir; la playa pide cruzar. En Santa Marina ganan la arena y el paseo; el comercio denso queda en el casco. El Hospital del Oriente, en Arriondas, queda a unos veinte minutos. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia y humedad.",
      "También encaja si se tolera el calendario —Descenso el primer sábado de agosto, verano lleno en Santa Marina— eligiendo bien la calle y no solo la primera fila del paseo o del acceso a la ría ese día.",
    ],
    encajaNo: [
      "Ribadesella encaja peor si se necesita calma constante en agosto: aquí falta —el Descenso y el veraneo llenan casco, puente y Santa Marina con tráfico, ruido y multitud— y eso importa porque quien compra solo tras un sábado de sol en el paseo suele llevarse sorpresa. Tampoco si el hospital debe quedar en el municipio: Arriondas está a unos veinte minutos. Los servicios cotidianos son altos —7/10: villa completa con mercado y cine, sin hospital propio— pero ese siete no sustituye la cabecera sanitaria de Arriondas.",
      "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras el Descenso o un agosto en Santa Marina sin probar un noviembre en el casco.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el casco y otra en Santa Marina. Desde cada casa: una compra sencilla, el trayecto a la ría o a la playa, y la salida hacia Arriondas y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en agosto —idealmente el entorno del Descenso o un domingo en Santa Marina (aparcamiento, gente)— y un día cubierto de noviembre en el casco (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
    ],
  },
  llanes: {
    encajaSi: [
      "Llanes encaja si atrae una villa amurallada con vida anual, puerto y Sablón delante —comercio y centro de salud a pie— o si se prefiere vivir hacia Barro, Niembro, Celorio, Poo o Andrín, con playa cerca y coche para la semana de villa. Hay que elegir dónde se vive porque no se vive igual. En el casco se resuelve mucha semana sin salir y el mar urbano queda integrado; hacia los pueblos ganan la orilla y el silencio relativo fuera de temporada, con el comercio denso en la villa. Arriondas queda a unos treinta y cinco minutos. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia y humedad.",
      "También encaja si se tolera el calendario —Magdalena en julio, San Roque en agosto con danza prima y fuegos en el Sablón, y un verano que multiplica la afluencia— eligiendo bien la calle y no solo la primera fila del acceso a la playa.",
    ],
    encajaNo: [
      "Llanes encaja peor si se busca calma de villa en julio y agosto: aquí falta —la presión turística es de las más fuertes del oriente— y eso importa porque quien compra solo tras un sábado de sol en el Sablón suele llevarse sorpresa. Tampoco si el hospital debe quedar en el municipio: Arriondas está a unos treinta y cinco minutos. Los servicios cotidianos son altos —7/10: villa con comercio, centro de salud y vida anual, sin hospital propio— pero ese siete no sustituye la cabecera sanitaria de Arriondas.",
      "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras un agosto en Torimbia sin probar un noviembre en el casco.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el casco y otra hacia Barro, Celorio, Poo o Andrín. Desde cada casa: una compra sencilla, el trayecto al Sablón o a la playa del pueblo, y la salida hacia Arriondas y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en agosto en la villa y en un pueblo de playa (aparcamiento, gente, San Roque) y un día cubierto de noviembre en el casco (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
    ],
  },
  ribadedeva: {
    encajaSi: [
      "Ribadedeva encaja si atrae un núcleo pequeño con casonas indianas y Archivo delante —básicos y centro de salud en Colombres— o si se prefiere vivir hacia La Franca, con playa entre acantilados y coche para la semana del núcleo y de Llanes. Hay que elegir dónde se vive porque no se vive igual. En Colombres se resuelve poco sin salir; la playa pide unos diez minutos. Hacia La Franca ganan el arenal y el acantilado; el comercio grande queda en Llanes a unos quince minutos o en Unquera. Sierrallana queda a unos cuarenta y cinco minutos; Santander, a unos cincuenta y cinco. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia y humedad en casa.",
      "También encaja si se tolera el calendario —Asunción y Sacramental en agosto, La Franca en verano— eligiendo bien la calle y no solo la primera fila del acceso a la playa.",
    ],
    encajaNo: [
      "Ribadedeva encaja peor si la playa de baño debe quedar a pie desde el pueblo capital: aquí falta —Colombres queda hacia el interior; La Franca pide coche— y eso importa porque quien confunde las casonas indianas con arena delante suele llevarse sorpresa. Tampoco si el hospital debe quedar cerca: Sierrallana está a unos cuarenta y cinco minutos. Los servicios cotidianos son bajos —3/10: básicos en Colombres y Unquera, sin comercio grande; Llanes a quince minutos— y ese tres no sustituye una villa completa ni la cabecera sanitaria de Torrelavega. Falta súper amplio, más tiendas y gestiones de escala mayor: hay que sacar el coche hacia Unquera o Llanes, y eso pesa cada semana.",
      "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en La Franca sin probar un noviembre en Colombres.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en Colombres y otra hacia La Franca o Bustio. Desde cada casa: una compra sencilla, el trayecto a la playa o a la ría, y la salida hacia Llanes, Sierrallana y Santander en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en agosto en La Franca (aparcamiento, gente) y un día cubierto de noviembre en Colombres (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda —sobre todo en casona— y la fibra en la dirección exacta.",
    ],
  },
  "san-vicente-de-la-barquera": {
    encajaSi: [
"San Vicente encaja si atrae el casco junto a la ría —castillo, puente de la Maza, básicos y paseo de estuario a pie— o si se prefiere vivir hacia Merón, con playa abierta y coche para la semana de la villa. Hay que elegir dónde se vive porque no se vive igual. En el casco se resuelve lo básico sin salir; la playa de arena pide unos minutos. Hacia Merón ganan el arenal y el oleaje; el comercio denso queda en el pueblo. Sierrallana queda a unos cuarenta minutos; el aeropuerto de Santander, a unos cuarenta y cinco. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia y humedad en casa.",
  "También encaja si se tolera el calendario —La Folía en primavera, Merón y Oyambre en verano— eligiendo bien la calle y no solo la primera fila del acceso a la playa.",
    ],
    encajaNo: [
"San Vicente encaja peor si la playa de arena debe quedar a pie desde cualquier casa del casco: aquí la ría es orilla de estuario para pasear, no arenal de baño; Merón pide trayecto. Tampoco si el hospital debe quedar cerca: Sierrallana está a unos cuarenta minutos. Los servicios cotidianos son medios-bajos —5/10: villa con lo básico, sin comercio grande— y ese cinco no sustituye Torrelavega ni Santander. Falta súper amplio y gestiones de escala mayor: hay que sacar el coche, y eso pesa cada semana si se espera autonomía de ciudad.",
  "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en Merón sin probar un noviembre en el casco.",
    ],
    queComprobar: [
"Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el casco y otra hacia Merón. Desde cada casa: una compra sencilla, el trayecto a la ría o a la playa, y la salida hacia Sierrallana y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto en Merón (aparcamiento, gente) y un día cubierto de noviembre en el casco (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
    ],
  },
  comillas: {
    encajaSi: [
"Comillas encaja si atrae el casco bajo —plaza, comercio pequeño y playa a pocos minutos a pie— o si se prefiere la ladera, con Sobrellano, Capricho o Pontificia cerca y cuestas para bajar a la playa. Hay que elegir dónde se vive porque no se vive igual. Abajo se resuelve lo mínimo y se baja a la arena; arriba ganan las vistas y el silencio. Sierrallana queda a unos treinta minutos; el aeropuerto de Santander, a unos cuarenta. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia, humedad y un invierno muy quieto.",
  "También encaja si se tolera el calendario —Santo Cristo del Amparo en julio, playa llena en agosto— eligiendo bien la calle y no solo la primera fila del arenal.",
    ],
    encajaNo: [
"Comillas encaja peor si se necesita comercio amplio todo el año: aquí falta —servicios 4/10: villa cuidada pero pequeña y muy estacional— y eso importa porque en noviembre muchas mesas y tiendas de verano ya no sostienen la semana. Tampoco si el hospital debe quedar cerca: Sierrallana está a unos treinta minutos. Falta súper amplio y gestiones de escala mayor: hay que sacar el coche hacia Torrelavega o Santander, y eso pesa cada semana si se espera autonomía de villa completa.",
  "Tampoco si las pendientes entre ladera y playa complican el día a día, o si se decide solo tras un sábado de sol en agosto sin probar un martes de noviembre.",
    ],
    queComprobar: [
"Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el casco bajo y otra en la ladera. Desde cada casa: una compra sencilla, el trayecto a la playa, y la salida hacia Sierrallana y el aeropuerto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto en la playa (aparcamiento, gente) y un día cubierto de noviembre en el casco (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
    ],
  },
  suances: {
    encajaSi: [
"Suances encaja si atrae el pueblo alto —villa con básicos a pie y vistas— o si se prefiere La Concha y La Ribera, con playa y paseo delante o casi y más presión de verano. Hay que elegir dónde se vive porque no se vive igual. Arriba se resuelve mucha semana; la playa pide bajar. Abajo ganan la playa y el paseo; Torrelavega cubre hospital y comercio grande a unos quince minutos. El aeropuerto de Santander queda a unos veinte. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia y humedad.",
  "También encaja si se tolera el calendario —Carmen en julio, La Concha llena en agosto— eligiendo bien la calle y no solo la primera fila del arenal.",
    ],
    encajaNo: [
"Suances encaja peor si se exige caminar igual de fácil entre pueblo alto y playa: aquí la pendiente es estructural y eso importa porque quien compra «cerca de todo» en el mapa puede encontrarse una cuesta cada mañana. Tampoco si el hospital debe quedar dentro del municipio: Sierrallana está a unos quince minutos. Los servicios son 6/10 —villa con lo básico—; falta hospital local y comercio de ciudad: hay que sacar el coche hacia Torrelavega, y eso pesa si se esperaba autonomía completa a pie.",
  "Tampoco si se quiere evitar la presión estival de La Concha y Los Locos, o si se decide solo tras un sábado de sol sin probar un noviembre en el pueblo alto.",
    ],
    queComprobar: [
"Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el pueblo alto y otra en La Concha. Desde cada casa: una compra sencilla, el trayecto a la playa, y la salida hacia Sierrallana y el aeropuerto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto en La Concha (aparcamiento, gente) y un día cubierto de noviembre arriba (luz, humedad, cuestas). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
    ],
  },
  "liencres-pielagos": {
    encajaSi: [
"Liencres encaja si atrae casas bajas junto a dunas y playas —Valdearenas o Canallave cerca— o si se prefiere Mortera y urbanización más retirada, con jardín y coche para la playa. Hay que elegir dónde se vive porque no se vive igual. Cerca de las dunas se gana la playa; agosto se nota en los accesos. Hacia Mortera se gana silencio; Valdecilla queda a unos quince minutos y el aeropuerto, a unos quince. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia y más coche que en una villa compacta.",
  "También encaja si se valora la seguridad y la logística hacia Palma por Santander, aceptando que la vida diaria está repartida entre localidades y no concentrada en un casco único.",
    ],
    encajaNo: [
"Liencres encaja peor si se busca una villa compacta donde playa, comercio y servicios coincidan siempre a pie: aquí falta ese casco único —la vida está dispersa en urbanizaciones— y eso importa porque casi cada cambio de sitio puede pedir coche. Los servicios son 7/10 —súper, farmacia y centro de salud en Liencres y Mortera—; no falta lo esencial diario, pero sí la sensación de pueblo caminable. Tampoco si se presupone que cualquier dato de Piélagos describe exactamente la calle de Liencres junto a las dunas.",
  "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en Valdearenas sin probar un noviembre con lluvia y coche.",
    ],
    queComprobar: [
"Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda junto a las dunas de Liencres y otra en Mortera. Desde cada casa: una compra sencilla, el trayecto a Valdearenas o Canallave, y la salida hacia Valdecilla y el aeropuerto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto en las playas (aparcamiento, gente) y un día cubierto de noviembre en la urbanización (luz, humedad, trayectos). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
    ],
  },
  santander: {
    encajaSi: [
"Santander encaja si atrae el centro —bahía, comercio, cultura y Valdecilla a pocos minutos a pie o en trayecto corto— o si se prefiere El Sardinero, con la Primera y la Segunda playa delante o cerca y más presión de verano. Hay que elegir dónde se vive porque no se vive igual. En el centro se resuelve la semana de capital; la playa de arena pide salir al este. En El Sardinero gana la playa; el centro queda un trayecto. El aeropuerto ronda los diez minutos. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia, humedad y precio de capital.",
  "También encaja si se tolera el calendario —Baños de Ola y Semana Grande en julio— eligiendo bien la calle y no solo la primera fila del Sardinero.",
    ],
    encajaNo: [
"Santander encaja peor si se busca escala de pueblo o poco tráfico: aquí es ciudad —servicios 10/10, no falta comercio ni hospital— y eso importa porque el peaje es precio, cuestas y movimiento urbano, no la falta de servicios. Tampoco si se presupone que desde cualquier barrio se baja andando al Sardinero con la misma facilidad: el centro tiene bahía, no necesariamente arena debajo. Falta el silencio de villa pequeña; quien lo necesite encontrará mejor encaje en Liencres o Suances, a cambio de menos autonomía urbana.",
  "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en la Primera playa sin probar un noviembre con lluvia y cuestas.",
    ],
    queComprobar: [
"Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el centro y otra en El Sardinero. Desde cada casa: una compra sencilla, el trayecto a la bahía o a la playa, Valdecilla y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en julio o agosto en El Sardinero (aparcamiento, gente, Semana Grande) y un día cubierto de noviembre en el centro (luz, humedad, cuestas). Y comprobar ascensor, estado de la vivienda y fibra en la dirección exacta.",
    ],
  },
  "ribamontan-al-mar": {
    encajaSi: [
"Ribamontán encaja si atrae Somo o Loredo —playa larga, surf y más básicos del municipio— o si se prefiere Galizano, Langre u otro núcleo, con casas bajas y coche para la playa. Hay que elegir dónde se vive porque no se vive igual. En Somo se baja a la arena; Santander queda a unos veinte minutos. Hacia Galizano se gana silencio; Valdecilla ronda quince o veinte minutos y el aeropuerto, unos quince. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia y más coche que en una villa compacta.",
  "También encaja si se tolera el calendario —Latas en septiembre, playa llena en agosto— y se comprueba la fibra en la dirección exacta.",
    ],
    encajaNo: [
"Ribamontán encaja peor si se busca una villa compacta donde playa, comercio y servicios coincidan siempre a pie: aquí falta ese casco único —la vida está repartida en pueblos— y eso importa porque fuera de Somo casi cada cambio de sitio pide coche. Los servicios son 5/10: lo básico repartido, sin comercio de ciudad; Santander cubre lo grande a unos veinte minutos. Tampoco si se interpreta la lancha como transporte diario garantizado todo el año.",
  "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en Somo sin probar un noviembre con lluvia y coche.",
    ],
    queComprobar: [
"Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en Somo o Loredo y otra en Galizano o Langre. Desde cada casa: una compra sencilla, el trayecto a la playa, y la salida hacia Valdecilla y el aeropuerto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto en Somo (aparcamiento, gente) y un día cubierto de noviembre en el pueblo elegido (luz, humedad, trayectos). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
    ],
  },
  noja: {
    encajaSi: [
"Noja encaja si atrae playa a pie entre Ris y Trengandín —arenales largos desde el núcleo— o si se prefiere una calle más retirada del mismo pueblo, con menos primera fila y el mismo invierno quieto. Hay que elegir dónde se vive porque no se vive igual. El hospital de Laredo queda a unos veinte minutos; el aeropuerto de Santander, a unos veinticinco. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia y un invierno con mucho menos comercio.",
  "También encaja si se tolera el calendario —Carmen en julio, población multiplicada en agosto— y se acepta mirar la villa en noviembre antes de comprar.",
    ],
    encajaNo: [
"Noja encaja peor si se necesita la misma densidad comercial todo el año: aquí falta —servicios alrededor de 4 o 5 sobre 10: dimensionada para el verano; en invierno cierra buena parte— y eso importa porque la semana de enero no se parece a la de agosto. Tampoco si el hospital debe quedar cerca: Laredo está a unos veinte minutos. Falta comercio de invierno amplio: hay que sacar el coche, y eso pesa si se esperaba villa viva doce meses.",
  "Tampoco si se quiere evitar la presión de bloques y tráfico de agosto, o si se decide solo tras un sábado de sol sin probar un martes de noviembre.",
    ],
    queComprobar: [
"Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en primera línea y otra más retirada. Desde cada casa: una compra en noviembre, el trayecto a Ris o Trengandín, y la salida hacia Laredo y el aeropuerto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto (aparcamiento, gente) y un día cubierto de noviembre (mesas abiertas, humedad, silencio). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
    ],
  },
  santona: {
    encajaSi: [
"Santoña encaja si atrae el casco —puerto, comercio de villa de trabajo y bahía a pie— o si se prefiere vivir hacia Berria, con playa larga y coche para la semana del casco. Hay que elegir dónde se vive porque no se vive igual. En la villa se resuelve mucha semana; Berria pide salida. El hospital de Laredo queda a unos diez minutos; el aeropuerto de Santander, a unos treinta. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia y humedad.",
  "También encaja si se tolera el calendario —Virgen del Puerto en septiembre, Berria en verano— y el entorno de puerto y conserva.",
    ],
    encajaNo: [
"Santoña encaja peor si la gran playa abierta debe quedar a pie desde el centro: aquí falta —Berria queda al otro lado del monte; el casco mira a la bahía— y eso importa porque quien confunde villa marinera con arenal debajo suele llevarse sorpresa. Tampoco si el hospital debe quedar dentro del municipio: Laredo está a unos diez minutos. Los servicios son 6/10 —villa con comercio—; falta hospital local. Falta Berria a pie desde cualquier calle: hay que sacar el coche o convertir la playa en una salida deliberada, y eso pesa si se esperaba playa debajo.",
  "Tampoco si el olor y el ritmo de puerto de trabajo no encajan, o si se decide solo tras un sábado de sol en Berria sin probar un noviembre en el casco.",
    ],
    queComprobar: [
"Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el casco y otra hacia Berria. Desde cada casa: una compra sencilla, el trayecto a la bahía o a la playa, y la salida hacia Laredo y el aeropuerto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto en Berria (aparcamiento, gente) y un día cubierto de noviembre en el casco (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
    ],
  },
  laredo: {
    encajaSi: [
"Laredo encaja si atrae la Puebla Vieja o calles interiores —villa con hospital cerca y menos primera fila— o si se prefiere el frente de La Salvé, con playa larga a pie y más presión de verano. Hay que elegir dónde se vive porque no se vive igual. El hospital está en el municipio; el aeropuerto de Santander ronda los treinta y cinco minutos. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia y el urbanismo de bloques del frente.",
  "También encaja si se tolera el calendario —Batalla de Flores a finales de agosto, La Salvé llena— eligiendo bien la calle.",
    ],
    encajaNo: [
"Laredo encaja peor si se rechaza el urbanismo de bloques del frente de playa: aquí ese frente existe y pesa en la imagen cotidiana. Tampoco si se busca escala de pueblo pequeño sin tráfico de verano. Los servicios son 7/10 —villa con lo esencial y hospital local—; no falta lo diario, pero sí la calma constante en La Salvé en temporada alta. El peaje no es falta de hospital: es verano lleno y bloques en la orilla.",
  "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en La Salvé sin probar un noviembre en la Puebla Vieja.",
    ],
    queComprobar: [
"Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en la Puebla Vieja o interior y otra en el frente de La Salvé. Desde cada casa: una compra sencilla, el trayecto a la playa, el hospital y el aeropuerto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en la Semana Grande de agosto (aparcamiento, gente) y un día cubierto de noviembre (luz, humedad). Y comprobar ascensor, estado de la vivienda y fibra en la dirección exacta.",
    ],
  },
  "castro-urdiales": {
    encajaSi: [
"Castro encaja si atrae el casco —Santa María, castillo-faro, puerto y comercio de ciudad a pie— o si se prefiere Brazomar u Ostende, con playa urbana cerca y más presión de verano en la orilla. Hay que elegir dónde se vive porque no se vive igual. Bilbao queda a unos treinta y cinco minutos; el aeropuerto de Bilbao, a unos treinta y cinco o cuarenta, con Palma todo el año. El hospital práctico es Laredo a unos veinticinco minutos. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye el sol más bajo de la tabla, más lluvia y humedad.",
  "También encaja si se tolera el calendario —Coso Blanco a inicios de verano— y se valora el eje metropolitano de Bilbao.",
    ],
    encajaNo: [
"Castro encaja peor si se busca el sol más alto de la tabla: aquí falta —unas 1.650 horas, de las mínimas— y eso importa porque el cielo gris pesa más que en otras costas del norte. Tampoco si el hospital debe quedar dentro del municipio: Laredo está a unos veinticinco minutos. Los servicios son 8/10 —ciudad completa para el día a día—; no falta comercio, pero sí hospital local. Quien necesite pueblo pequeño sin eje de Bilbao encontrará mejor encaje en otros municipios de la zona.",
  "Tampoco si se presupone que desde cualquier barrio se baja andando a Brazomar igual, o si se decide solo tras un sábado de sol sin probar un noviembre con lluvia.",
    ],
    queComprobar: [
"Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el casco y otra en Brazomar u Ostende. Desde cada casa: una compra sencilla, el trayecto al puerto o a la playa, Laredo y Bilbao en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en julio (Coso Blanco, gente) y un día cubierto de noviembre (luz, humedad). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
    ],
  },
  valenca: {
    encajaSi: [
      "Valença encaja si atrae vivir intramuros —comercio a pie, muralla, frontera con Tui a minutos— o si se prefiere el ensanche fuera del muro, con más espacio y el adarve a un paseo corto. Hay que elegir dónde se vive porque no se vive igual. Santa Luzia ronda treinta y cinco o cuarenta minutos; Porto organiza el vuelo habitual. Frente a Mallorca, el verano de valle puede apretar más que la costa minhota, y el cambio incluye menos sol continuo, más humedad de río y playa fuera del municipio.",
      "También encaja si se tolera el calendario —Festas do Concelho en agosto, sábados fronterizos llenos— y se acepta el portugués como idioma de gestiones, con castellano útil en la frontera.",
    ],
    encajaNo: [
      "Valença encaja peor si se busca playa atlántica a la puerta: aquí falta —el Miño es orilla de paseo, no arenal de baño; Moledo queda a unos veinticinco minutos— y eso importa porque quien confunde frontera fluvial con costa abierta suele llevarse sorpresa. Tampoco si el hospital de mayor nivel debe quedar dentro del municipio: Santa Luzia está en Viana. Los servicios son 6/10 —comercio de fortaleza y básicos—; falta playa local y autonomía de ciudad grande.",
      "Tampoco si se espera el verano suave de Moledo, o si se decide solo tras un sábado soleado intramuros sin probar un martes de noviembre con niebla de valle.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda intramuros y otra en el ensanche. Desde cada casa: una compra sencilla, el cruce a Tui, y la salida hacia Viana y Porto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en agosto o un sábado fronterizo (aparcamiento, gente) y un día cubierto de noviembre (luz, humedad, niebla). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
    ],
  },
  "vila-nova-de-cerveira": {
    encajaSi: [
      "Cerveira encaja si atrae el casco junto al Miño —paseo, praia fluvial, villa a pie y Goián al puente— o si se prefiere una casa más retirada, con más espacio y coche para el río. Hay que elegir dónde se vive porque no se vive igual. Santa Luzia ronda treinta y cinco minutos; Porto organiza el vuelo habitual. Frente a Mallorca, el cambio incluye menos sol continuo, más humedad de valle y océano fuera de la puerta.",
      "También encaja si se tolera el calendario —feria de los sábados, Bienal en años impares, Festa da História en agosto— y la escala pequeña de villa no se confunde con ciudad completa.",
    ],
    encajaNo: [
      "Cerveira encaja peor si se busca playa atlántica cotidiana: aquí falta —el agua de diario es el Miño; Moledo queda a unos veinte minutos— y eso importa porque quien confunde praia fluvial con dunas abiertas suele llevarse sorpresa. Tampoco si el hospital debe quedar dentro del municipio: Santa Luzia está en Viana. Los servicios son 5/10 —villa básica—; falta gran comercio y autonomía de ciudad.",
      "Tampoco si se decide solo tras un fin de semana de Bienal sin probar un martes gris de río en noviembre.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el casco y otra fuera del núcleo. Desde cada casa: una compra sencilla, el puente a Goián, y la salida hacia Viana y Porto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en feria o Bienal (afluencia) y un día cubierto de noviembre (luz, humedad). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
    ],
  },
  caminha: {
    encajaSi: [
      "Caminha encaja si atrae el casco junto a la desembocadura —plaza, Torre, villa a pie junto al Miño ensanchado— o si se prefiere una zona más retirada del mismo municipio, con más espacio y coche para la plaza y para Moledo. Hay que elegir dónde se vive porque no se vive igual. Santa Luzia ronda treinta minutos; Porto organiza el vuelo habitual. Frente a Mallorca, el verano es más suave, pero el cambio incluye menos sol continuo, más humedad y agua atlántica fría.",
      "También encaja si se distingue Caminha de Moledo y Âncora y se tolera el calendario de agosto sin confundir la orilla del estuario —río que se abre al mar— con las dunas de oleaje.",
    ],
    encajaNo: [
      "Caminha encaja peor si se busca playa atlántica larga a la puerta del casco: aquí falta —la experiencia oceánica plena está en Moledo o Âncora y suele pedir salida— y eso importa porque quien compra «desembocadura» pensando en playa debajo suele llevarse sorpresa. Tampoco si el hospital debe quedar dentro del municipio: Santa Luzia está en Viana. Los servicios son 5/10 —villa histórica—; falta hospital local y autonomía de ciudad.",
      "Tampoco si se interpreta el ferry a A Guarda como transporte diario garantizado, o si se decide solo tras un sábado de sol sin probar un noviembre en el casco.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el casco y otra más retirada. Desde cada casa: una compra sencilla, el trayecto a la ribera del Miño o a Moledo, y la salida hacia Viana y Porto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en agosto (afluencia hacia las playas) y un día cubierto de noviembre (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
    ],
  },
  "moledo-caminha": {
    encajaSi: [
      "Moledo encaja si atrae playa atlántica a la puerta (dunas, pinar, nortada) o si se prefiere una casa más retirada, con menos exposición y coche para la playa. Hay que elegir dónde se vive porque no se vive igual. Santa Luzia ronda veinticinco minutos; Porto organiza el vuelo habitual. Frente a Mallorca, el verano es más suave, pero el cambio incluye viento fuerte de tarde, agua fría y tener que salir a Caminha o Âncora para la compra seria.",
      "También encaja si se acepta apoyarse en Caminha o Âncora para la compra y se prueba un enero antes de firmar.",
    ],
    encajaNo: [
      "Moledo encaja peor si se necesita comercio diario a pie: aquí falta —servicios 3/10; la compra seria queda en Caminha o Âncora— y eso importa porque quien espera plaza de villa bajo la ventana suele llevarse sorpresa. Tampoco si el hospital debe quedar al lado: Santa Luzia está en Viana. Falta autonomía cotidiana densa: hay que sacar el coche, y eso pesa si se esperaba resolver la semana andando.",
      "Tampoco si la nortada, el salitre y el invierno más vacío resultan incompatibles, o si se decide solo tras un sábado de sol en la playa sin probar un martes de noviembre.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el frente y otra más retirada. Desde cada casa: una bajada a la playa con viento, una compra en Caminha, y la salida hacia Viana y Porto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en agosto (ocupación, nortada) y un día cubierto de enero (silencio, humedad, salitre). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
    ],
  },
  "vila-praia-de-ancora": {
    encajaSi: [
      "Âncora encaja si atrae villa con playa y puerto a pie —paseo, mercado básico, playa metida en la mañana— o si se prefiere una casa más retirada hacia el valle del Âncora, con más espacio y coche para la playa. Hay que elegir dónde se vive porque no se vive igual. Santa Luzia ronda veinte minutos; Porto organiza el vuelo habitual. Frente a Mallorca, el verano es más suave, pero el cambio incluye menos sol continuo, más humedad y agua atlántica fría.",
      "También encaja si se distingue Âncora de Moledo y de la plaza de Caminha, y se tolera el calendario de São João y agosto sin firmar solo por un sábado de sol.",
    ],
    encajaNo: [
      "Âncora encaja peor si se busca silencio de colonia de chalés sin núcleo: aquí falta —en el frente hay villa, comercio y afluencia de agosto— y eso importa porque quien compra «playa» pensando en pinar vacío suele llevarse sorpresa. Tampoco si el hospital debe quedar dentro del municipio: Santa Luzia está en Viana. Los servicios son 6/10 —villa con vida anual—; falta hospital local y autonomía de ciudad.",
      "Tampoco si se espera el oleaje abierto de Moledo sin espigón, o si se decide solo tras un día perfecto de verano sin probar un martes de noviembre en el paseo.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el frente y otra más retirada hacia el valle. Desde cada casa: una bajada a la playa con viento, una compra en el núcleo, y la salida hacia Viana y Porto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en agosto (ocupación, aparcamiento) y un día cubierto de noviembre (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
    ],
  },
  "afife-carreco": {
    encajaSi: [
      "Afife-Carreço encaja si atrae aldea de granito con playa atlántica cerca —Afife o Paçô, con nortada— o si se prefiere casa más hacia el monte, con viña y coche para bajar a la arena. Hay que elegir dónde se vive porque no se vive igual. Santa Luzia ronda quince minutos; Porto organiza el vuelo habitual. Frente a Mallorca, el verano es más suave, pero el cambio incluye viento fuerte, agua fría y tener que desplazarse a Viana para la compra seria y el hospital, o a Âncora cuando apetece una villa costera con más comercio.",
      "También encaja si se acepta que los servicios locales quedan en 3/10 y se prueba un enero antes de firmar.",
    ],
    encajaNo: [
      "Afife-Carreço encaja peor si se necesita comercio diario a pie: aquí falta un súper amplio y una plaza de villa bajo la ventana (servicios 3/10). La compra de la semana y el hospital piden coche hacia Viana; Âncora ayuda para algo de villa costera, pero no sustituye la ciudad. Eso importa porque quien espera resolver la semana andando suele llevarse sorpresa. Tampoco si el hospital debe quedar al lado de casa sin coche: Santa Luzia está en Viana.",
      "Tampoco si se espera que Afife y Carreço funcionen como un solo pueblo compacto con casco cerrado, o si se decide solo tras un sábado de sol en la playa sin probar un martes de noviembre.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda cerca de la playa y otra hacia el monte. Desde cada casa: una bajada a la playa con viento, una compra en Viana (y, si interesa, un paseo por Âncora), y la salida hacia Porto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en agosto —ocupación y nortada— y un día cubierto de enero —silencio y humedad—. Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
    ],
  },
  "viana-do-castelo": {
    encajaSi: [
      "Viana encaja si atrae ciudad completa junto al Lima —Praça, mercado, hospital Santa Luzia a pie o cerca— o si se prefiere Cabedelo u orilla atlántica, con playa a la puerta y coche hacia el casco. Hay que elegir dónde se vive porque no se vive igual. Porto organiza el vuelo habitual. Frente a Mallorca, el verano es más suave, pero el cambio incluye menos sol continuo, más humedad y agua atlántica fría.",
      "También encaja si se tolera la semana de la Romaria da Agonia en agosto y se distingue el centro fluvial de la playa de Cabedelo.",
    ],
    encajaNo: [
      "Viana encaja peor si se busca silencio de aldea sin tráfico urbano: aquí falta —es ciudad con servicios 9/10, movimiento y una romería que llena agosto— y eso importa porque quien compra «costa minhota» pensando en quietud de Afife suele llevarse sorpresa. Tampoco si se espera playa atlántica debajo de cualquier ventana: en el centro manda el Lima, no el oleaje.",
      "Tampoco si se decide solo tras un día de sol en Santa Luzia o Cabedelo sin probar un martes de noviembre en el barrio concreto.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el centro y otra en Cabedelo o Praia Norte. Desde cada casa: una compra en la Praça, una bajada al Lima o a la playa, y la salida hacia Porto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en la semana de la Agonia (agosto) y un día cubierto de noviembre (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
    ],
  },
  "ponte-de-lima": {
    encajaSi: [
      "Ponte de Lima encaja si atrae villa de río con puente y plaza a pie —feria, Ecovia, autonomía cotidiana— o si se prefiere quinta o periferia del valle, con más espacio y coche para la villa. Hay que elegir dónde se vive porque no se vive igual. Conde de Bertiandos queda cerca; Santa Luzia y Cabedelo, en Viana, a unos veinticinco minutos; Porto organiza el vuelo. Frente a Mallorca, el verano de valle es más cálido que la costa, con niebla de invierno.",
      "También encaja si se acepta no tener playa atlántica en el municipio y se tolera el calendario de Feiras Novas sin firmar solo por un sábado de sol en el puente.",
    ],
    encajaNo: [
      "Ponte de Lima encaja peor si se busca playa atlántica a la puerta: aquí falta —el Lima es río de paseo, no arenal de oleaje; Cabedelo queda a unos veinticinco minutos— y eso importa porque quien compra «Minho» pensando en playa debajo suele llevarse sorpresa. Tampoco si el hospital de mayor nivel debe quedar dentro del municipio: Santa Luzia está en Viana. Los servicios son 6/10 —villa completa—; falta playa local y autonomía de ciudad grande.",
      "Tampoco si el calor de valle en julio-agosto o la niebla de diciembre-enero resultan incompatibles, o si se decide solo tras Feiras Novas sin probar un martes de noviembre.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el casco y otra en quinta o periferia. Desde cada casa: una compra en la plaza, un paseo por el puente y la Ecovia, y la salida hacia Cabedelo o Porto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en Feiras Novas (afluencia) y un día de niebla en noviembre (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
    ],
  },
  esposende: {
    encajaSi: [
      "Esposende encaja si atrae una costa residencial con estuario o dunas —Cávado, Ofir o Apúlia— y se elige la microzona con honestidad. Hay que elegir dónde se vive porque no se vive igual. El hospital queda hacia la red de Póvoa de Varzim y Vila do Conde, a unos veinticinco minutos; Porto organiza el vuelo. Frente a Mallorca, el verano es más suave, pero el cambio incluye viento, agua fría y hospital fuera del municipio.",
      "También encaja si se acepta no tener Metro y se prueba un enero en la microzona elegida.",
    ],
    encajaNo: [
      "Esposende encaja peor si se necesita hospital en el municipio: aquí falta; la referencia pública mira a Póvoa de Varzim y Vila do Conde a unos veinticinco minutos, y eso importa porque quien espera urgencias locales suele llevarse sorpresa. Tampoco si se espera una ciudad de playa densa con Metro bajo la ventana. Los servicios son 6/10 de villa; falta hospital local.",
      "Tampoco si se decide por una sola foto de duna sin probar el viento y el ritmo de enero en esa calle concreta.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el centro, en Ofir y en Apúlia. Desde cada casa: una compra, una bajada a la playa con viento, y la salida hacia Póvoa y Porto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en agosto —ocupación y aparcamiento— y un día cubierto de noviembre —luz y humedad—. Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
    ],
  },
  "povoa-de-varzim": {
    encajaSi: [
      "Póvoa encaja si atrae una ciudad-balneario con playa urbana a pie —o calles más retiradas con el mismo invierno de ciudad—. Hay que elegir dónde se vive porque no se vive igual. El hospital queda a unos cinco minutos; Porto organiza el vuelo a unos veinte. Frente a Mallorca, el verano es más suave, pero el cambio incluye densidad de bloques, viento, agua fría y menos sol continuo.",
      "También encaja si se acepta el precio y la ocupación de agosto en el paseo sin buscar el silencio de una aldea o de las dunas de Esposende.",
    ],
    encajaNo: [
      "Póvoa encaja peor si se busca quietud de duna o villa minhota: aquí hay ciudad densa (servicios 8/10) y eso importa porque quien espera Afife o un pinar suele llevarse sorpresa. No falta comercio ni Metro; falta silencio de aldea y casas bajas en primera línea. Tampoco si molesta el frente de bloques y el verano lleno en el paseo.",
      "Tampoco si se decide solo tras un sábado de sol en la terraza sin probar un martes de noviembre en la calle concreta.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el frente y otra más retirada. Desde cada casa: una bajada al paseo con viento, una compra, y la salida en Metro o coche hacia Porto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en agosto —ocupación y aparcamiento— y un día cubierto de noviembre —luz y humedad—. Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
    ],
  },
  "vila-do-conde": {
    encajaSi: [
      "Vila do Conde encaja si atrae una villa histórica con playa cercana —casco del Ave o Azurara— y se elige el barrio con honestidad. Hay que elegir dónde se vive porque no se vive igual. El hospital queda a unos diez minutos; Porto organiza el vuelo a unos quince. Frente a Mallorca, el verano es más suave, pero el cambio incluye viento, agua fría, precio alto y menos sol continuo.",
      "También encaja si se acepta la escala metropolitana —Metro, A-28, veraneo de Porto— y se prueba un enero en el barrio elegido.",
    ],
    encajaNo: [
      "Vila do Conde encaja peor si se busca una aldea quieta lejos de Porto: aquí hay villa costera metropolitana (servicios 8/10) y eso importa porque quien espera el silencio de Afife suele llevarse sorpresa. No falta comercio ni Metro; falta quietud de interior minhoto y distancia real a la aglomeración de Porto. Tampoco si el precio del metro cuadrado resulta incompatible con lo que se busca.",
      "Tampoco si se decide solo tras un sábado de sol en Azurara sin probar un martes de noviembre en el casco o en la calle concreta.",
    ],
    queComprobar: [
      "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el casco y otra en Azurara. Desde cada casa: una compra, una bajada a la playa, y la salida hacia Porto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
      "Merece la pena hacer esa comprobación en agosto —ocupación y aparcamiento— y un día cubierto de noviembre —luz y humedad—. Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
    ],
  },

};

export function paraDecidirteNuevo2(
  slug: string,
): ParaDecidirteNuevo2 | undefined {
  return NUEVO2_PARA_DECIDIRTE[slug];
}
