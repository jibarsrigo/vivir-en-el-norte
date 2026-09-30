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
      "Puede encajar especialmente si la relación con Portugal resulta atractiva. La Ponte da Amizade hace que la frontera tenga una dimensión práctica: mercado, restaurantes, actividades y paseos pueden quedar al otro lado de un trayecto muy corto.",
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
      "Y encaja si la relación con ría, río, castillo y bosque es suficiente aunque no exista una gran playa urbana propia.",
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
      "Puede encajar si se busca urbanización ordenada o casa baja con playa a minutos y A Coruña a unos diez minutos como ciudad de referencia, aceptando que la vida real depende de la microzona —Santa Cruz, Mera, Perillo, Santa Cristina, Bastiagueiro— y no de un Oleiros único.",
      "También si se quiere resolver lo básico (súper, centro de salud, colegio) en el municipio y usar la capital para hospital, compras grandes y cultura, sin vivir en densidad de casco antiguo ni en ciudad naval.",
      "Y si el baño de diario puede ser ría o costa suave (Santa Cristina, Mera, Bastiagueiro) y Dexo-Serantes queda como salida de acantilado cuando apetece otro paisaje.",
    ],
    encajaNo: [
      "Puede encajar peor si el presupuesto para tres habitaciones o para un chalé debe quedar en franja media del golfo: el metro de referencia ronda 2.605 €/m² y esas tipologías entran con facilidad en franja cara. Ferrol, Bergondo o Sada suelen bajar el precio; Sada, además, ofrece villa con puerto.",
      "También si se busca casco gótico, aldea marinera densa tipo Redes o ciudad con hospital a pie: aquí mandan el chalé, el paseo y la corona residencial.",
      "Y si el cielo debe parecerse al de Mallorca. La referencia de A Coruña da mucho menos sol y muchos más días cubiertos, con llovizna también en verano. Decidir solo tras un sábado soleado en Santa Cristina, sin probar noviembre ni el aparcamiento de agosto, suele llevar a sorpresa.",
    ],
    queComprobar: [
      "Elegir dos o tres microzonas candidatas y tratarlas como sitios distintos. Desde cada vivienda real: compra sencilla, trayecto a la playa o paseo que se usaría, y salida hacia A Coruña y al CHUAC en hora punta.",
      "Pasar una tarde de verano en la orilla elegida (aparcamiento, ruido, ocupación) y visitar la misma casa un día cubierto de noviembre (luz, humedad, jardín).",
      "Caminar un tramo de Dexo-Serantes o subir al faro de Mera si el atractivo incluye costa abierta, no solo ría.",
      "Comprobar fibra, orientación y estado de la vivienda en la dirección exacta; en orilla, salitre y cerramientos.",
    ],
  },

};

export function paraDecidirteNuevo2(
  slug: string,
): ParaDecidirteNuevo2 | undefined {
  return NUEVO2_PARA_DECIDIRTE[slug];
}
