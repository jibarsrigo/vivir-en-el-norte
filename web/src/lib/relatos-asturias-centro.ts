import type { RelatoMun } from "@/components/RelatoMunicipio";

const credito = "Fotos: Wikimedia Commons (licencias indicadas en los archivos de origen).";

export const RELATOS_ASTURIAS_CENTRO: Record<string, RelatoMun> = {
  cudillero: {
    escala: "Puerto en anfiteatro y concejo disperso",
    abrir: [
      "Cudillero tiene dos experiencias que conviene no mezclar. Abajo, el puerto y el anfiteatro de casas forman el núcleo más reconocible, pero también concentran cuestas, escaleras y movimiento turístico. Arriba, El Pito ofrece una relación más llana con la vivienda y cambia bastante la rutina.",
      "La autonomía cotidiana es media-baja. El pequeño núcleo cubre lo básico, mientras una compra amplia y buena parte de los servicios empujan hacia Avilés. El coche cose puerto, vivienda, playas y ciudad de apoyo; vivir ‘cerca’ en el mapa no significa necesariamente moverse con facilidad a pie.",
    ],
    tiempo: [
      "Frente a Mallorca, el cambio importante no es un frío extremo sino un clima mucho más húmedo, gris y fresco. En una casa del anfiteatro importan luz, ventilación y aislamiento; en noviembre las escaleras mojadas y la orientación pesan bastante más que en una visita de verano.",
      "El Cantábrico está siempre próximo, pero las playas de baño no son una extensión peatonal generalizable del núcleo. Aguilar y Concha de Artedo son salidas cortas; la playa del Silencio y Cabo Vidio pertenecen ya a una tarde de costa.",
    ],
    vivir: [
      "Una mañana normal puede empezar en el puerto y continuar por los miradores, sabiendo que aquí pasear implica desnivel. La compra básica se resuelve a pequeña escala; para ampliar recados y servicios aparece Avilés. El tren de ancho métrico y la carretera forman parte de las comunicaciones, sin convertir el concejo en una vida sin coche.",
      "La diferencia entre agosto y noviembre es visible. El turismo ocupa mucho más el anfiteatro en temporada y fuera de ella baja la actividad. Antes de elegir una vivienda conviene probar tanto el acceso cotidiano con lluvia como el aparcamiento y el movimiento de un día fuerte de verano.",
      "El hospital práctico está fuera, en San Agustín de Avilés, y el aeropuerto de Asturias queda relativamente próximo. La conexión aérea con Palma depende de programación y temporada; la ventaja estable es tener el aeropuerto cerca, no disponer de un vuelo concreto todo el año.",
      "El Pito merece mirarse como microzona propia: permite evitar parte de la pendiente del puerto, aunque aumenta la lógica de desplazarse en coche. Esa elección entre anfiteatro y cota más cómoda cambia más la experiencia diaria que una descripción genérica de ‘vivir en Cudillero’.",
    ],
    historia: [
      "El anfiteatro portuario resume la identidad de Cudillero: casas adaptadas a una ladera muy marcada y una relación histórica con el puerto. La misma topografía que produce su imagen más conocida es una condición física de la vida cotidiana.",
      "El Pito añade otra capa, más llana y vinculada al patrimonio indiano, mientras Cabo Vidio abre el concejo hacia una costa de acantilado y faro. Son escenarios distintos dentro de un municipio que no funciona como una única villa compacta.",
    ],
    fuera: [
      "Aguilar y Concha de Artedo son las referencias de baño, pero requieren salir del núcleo según la vivienda. La playa del Silencio y Cabo Vidio amplían el mapa cuando apetece una salida de costa abierta.",
      "Avilés cumple la función práctica que Cudillero no intenta asumir: comercio amplio, hospital y mayor oferta urbana. Esa proximidad ayuda, pero no elimina la dependencia del coche ni las escaleras del núcleo portuario.",
    ],
    casa: [
      "En el anfiteatro hay que mirar acceso real, número de escaleras, luz, aislamiento, humedad y posibilidad de aparcar. Una distancia corta sobre el plano puede ser incómoda a pie. En El Pito cambian la pendiente y el acceso, pero también la relación inmediata con el puerto.",
      "La vivienda debe probarse en invierno y en temporada alta. Precio y estimaciones quedan en la capa factual; en el relato importa distinguir una casa atractiva para visitar de otra que funcione bien cada día.",
    ],
    encaja: {
      si: [
        "Encaja si el puerto y la costa pesan mucho y se acepta que la vida práctica combine un núcleo pequeño con coche y apoyo de Avilés. La recompensa es una relación muy directa con un paisaje portuario singular.",
        "También si se está dispuesto a elegir microzona por accesibilidad y no solo por vistas: El Pito y el anfiteatro pueden producir rutinas completamente distintas.",
      ],
      no: [
        "Encaja peor si se necesita una semana muy autónoma a pie, una topografía sencilla o playa de baño integrada en cualquier vivienda del núcleo.",
        "Tampoco si el movimiento turístico del verano o una casa con muchas escaleras se convierten en un problema cotidiano.",
      ],
      veredicto:
        "Cudillero ofrece un puerto extraordinariamente reconocible a cambio de una topografía exigente y autonomía limitada. La decisión se juega en la microzona: anfiteatro si se aceptan cuestas y actividad turística; cotas más cómodas como El Pito si se prioriza acceso, siempre con Avilés y el coche formando parte de la semana."
    },
    fotoIdentidad: {
      src: "/fotos/asturias-centro/cudillero-pueblo.jpg",
      pie: "Pueblo colgado de Cudillero",
    },
    fotosAbrir: [
      { src: "/fotos/asturias-centro/cudillero-puerto.jpg", pie: "Puerto de Cudillero" },
    ],
 fotosHistoria: [
 { src: "/fotos/asturias-centro/cudillero-vidio.jpg", pie: "Cabo Vidio, cerca de Cudillero" },
 { src: "/fotos/asturias-centro/cudillero-pito.jpg", pie: "El Pito, arriba de Cudillero" },
 ],
 fotosFuera: [
 { src: "/fotos/asturias-centro/cudillero-playa.jpg", pie: "Playa cerca de Cudillero" },
 { src: "/fotos/asturias-centro/cudillero-cuesta.jpg", pie: "Calles en cuesta de Cudillero" },
 ],
 creditoFotos: credito,
  },

  "muros-de-nalon": {
    escala: "Estuario, miradores y San Esteban",
    abrir: [
      "Muros de Nalón vive alrededor de la desembocadura del Nalón, pero no toda la experiencia está en el mismo punto. El núcleo de Muros, la Ruta de los Miradores y San Esteban de Pravia forman piezas distintas de una vida pequeña, ligada al estuario y con bastante dependencia del coche.",
      "La autonomía cotidiana es media-baja. Hay básicos locales, pero para una compra amplia y más servicios pesan Avilés y Pravia. La playa de Aguilar es una salida, no una playa urbana integrada en el núcleo, y el precio municipal actual se mantiene como no disponible en la capa 2026.",
    ],
    tiempo: [
      "Frente a Mallorca, aquí pesan más la humedad, los días grises y la niebla del entorno de la desembocadura. Orientación, ventilación y aislamiento merecen comprobarse durante una semana húmeda, especialmente en viviendas próximas al estuario.",
      "El agua cotidiana es sobre todo el Nalón y su paisaje. Para bañarse hay que cambiar de escenario y salir hacia la costa; tener el estuario delante no equivale a tener una playa de baño a pie.",
    ],
    vivir: [
      "Una mañana puede dedicarse a caminar por el entorno del Nalón o enlazar parte de los miradores, teniendo presente que el recorrido no es un paseo completamente llano. San Esteban ofrece otra relación con el río, más portuaria, y merece tratarse como microzona propia.",
      "La compra grande y muchos recados requieren coche. Esa dependencia es parte estructural del municipio, no una incidencia de temporada. A cambio, el aeropuerto de Asturias queda muy accesible y Avilés está suficientemente cerca para ampliar servicios.",
      "El hospital práctico está fuera, en San Agustín de Avilés. Para Palma, la programación desde Asturias es variable; lo estable es la buena accesibilidad al aeropuerto, no una conexión aérea permanente.",
      "El verano aporta más movimiento hacia costa y miradores, pero Muros conserva una escala pequeña. San Esteban, el núcleo y las viviendas más dispersas no deben juzgarse como si ofrecieran exactamente la misma rutina.",
    ],
    historia: [
      "La desembocadura del Nalón organiza el paisaje y explica la relación entre Muros y San Esteban. Los miradores permiten leer el estuario desde arriba; el antiguo frente portuario de San Esteban lo hace desde la orilla.",
      "La cercanía de El Pito y la Quinta de Selgas añade patrimonio indiano al mapa comarcal, pero la identidad cotidiana de Muros sigue siendo la de un municipio pequeño alrededor del Nalón.",
    ],
    fuera: [
      "Aguilar es la referencia de playa, pero pertenece al mapa de salida. Los miradores ofrecen otra forma de acercarse al mar y al estuario, con desnivel y sin necesidad de convertir cada paseo en una excursión larga.",
      "Avilés y Pravia completan comercio y servicios. Esa red próxima hace viable la escala pequeña de Muros, aunque obliga a asumir el coche para una parte relevante de la semana.",
    ],
    casa: [
      "Conviene distinguir Muros de San Esteban y comprobar acceso, humedad, orientación, fibra y facilidad para resolver recados. La proximidad visual al estuario no garantiza una rutina peatonal completa.",
      "La capa 2026 no ofrece un precio municipal actual fiable. No debe reconstruirse con cifras antiguas ni describirse el municipio como ‘barato’ a partir de ellas; la comparación debe hacerse casa por casa y por microzona.",
    ],
    encaja: {
      si: [
        "Encaja si se busca una escala pequeña junto al Nalón y se acepta apoyarse en coche, Avilés y Pravia para completar la semana.",
        "También si se valora más el estuario, San Esteban y los miradores que tener una playa de baño urbana junto a casa.",
      ],
      no: [
        "Encaja peor si se quiere comercio amplio a pie, una playa cotidiana integrada en el núcleo o un paseo siempre llano.",
        "Tampoco si se necesita una referencia municipal de precio robusta antes de explorar viviendas concretas: el dato actual se mantiene como n.d.",
      ],
      veredicto:
        "Muros de Nalón ofrece estuario y escala pequeña con una logística sorprendentemente cómoda hacia aeropuerto y Avilés. El peaje es una autonomía limitada, bastante coche y una geografía donde miradores, San Esteban y playa son experiencias distintas; además, el precio municipal actual debe tratarse como no disponible."
    },
 fotoIdentidad: {
 src: "/fotos/asturias-centro/muros-de-nalon-identidad.jpg",
 pie: "San Esteban (Muros de Nalón): casas del puerto frente al estuario, con el monte detrás",
 },
 fotosAbrir: [
 { src: "/fotos/asturias-centro/muros-miradores.jpg", pie: "Miradores de Muros de Nalón" },
 { src: "/fotos/asturias-centro/muros-ria.jpg", pie: "Desembocadura del Nalón desde Muros" },
 ],
 fotosHistoria: [
 { src: "/fotos/asturias-centro/muros-villa.jpg", pie: "Muros de Nalón: villa sobre el estuario" },
 { src: "/fotos/asturias-centro/muros-selgas.jpg", pie: "Quinta de Selgas, en El Pito" },
 ],
 fotosFuera: [
 { src: "/fotos/asturias-centro/muros-paseo.jpg", pie: "Paseo en Muros de Nalón" },
 { src: "/fotos/asturias-centro/muros-nalon.jpg", pie: "Estuario del Nalón" },
 ],
 creditoFotos: credito,
  },

  "soto-del-barco": {
    escala: "Nalón, núcleo y San Juan de la Arena",
    abrir: [
      "Soto del Barco cambia mucho según se viva en el núcleo o en San Juan de la Arena. El primero organiza servicios y conexiones; el segundo se acerca a la desembocadura, al puerto y a Los Quebrantos. Hablar del concejo como una sola experiencia borra precisamente su diferencia más útil.",
      "La autonomía es media: hay básicos, pero Avilés amplía comercio y servicios. El coche sigue siendo importante, aunque el aeropuerto de Asturias queda muy próximo y la posición junto al Nalón facilita moverse por el centro-occidente asturiano.",
    ],
    tiempo: [
      "Frente a Mallorca, la humedad y el cielo cantábrico cambian la forma de usar la vivienda. Cerca del estuario conviene revisar ventilación, aislamiento y orientación; en invierno el río y la costa se sienten de otra manera que durante una visita de verano.",
      "Los Quebrantos aporta playa cotidiana de forma parcial, sobre todo para quien vive en San Juan de la Arena. Desde Soto núcleo la relación con el mar exige desplazarse: la microzona determina si la playa forma parte de una tarde normal o de una salida.",
    ],
    vivir: [
      "En San Juan una mañana puede seguir la ribera y el puerto y acercarse a Los Quebrantos. En Soto la rutina se organiza de otro modo, alrededor del núcleo y de los desplazamientos. Esa separación debe comprobarse antes de elegir vivienda.",
      "Para una compra amplia y una oferta mayor aparece Avilés. El hospital práctico también está fuera, en San Agustín, mientras el aeropuerto queda especialmente cerca. Palma depende de la programación estacional.",
      "El verano activa más la zona de playa, pero el municipio mantiene vida anual. No hace falta convertir esa estacionalidad en un problema absoluto: importa sobre todo si la casa está en San Juan, en Soto o en una zona dispersa.",
      "La desembocadura del Nalón ofrece un paisaje cotidiano distinto de una villa de playa compacta. Aquí la vida funciona por piezas y el coche sirve para conectarlas.",
    ],
    historia: [
      "San Juan de la Arena conserva una identidad marinera ligada a la desembocadura y a las angulas, mientras el castillo de San Martín recuerda el control histórico de este paso del Nalón.",
      "El estuario es el hilo común entre las distintas microzonas. No convierte Soto y San Juan en el mismo lugar, pero explica por qué puerto, río y costa aparecen juntos en el mapa municipal.",
    ],
    fuera: [
      "Los Quebrantos es la salida natural hacia el Cantábrico y puede ser realmente cotidiana desde San Juan. Desde otras partes del concejo exige desplazamiento.",
      "Avilés amplía comercio, hospital y vida urbana. Muros y San Esteban, al otro lado del sistema del Nalón, completan un mapa de estuario que se entiende mejor recorriéndolo que mirando solo distancias.",
    ],
    casa: [
      "La primera pregunta es si la vivienda está en Soto, San Juan o una zona intermedia. Acceso, fibra, humedad y cuánto coche exige cada recado cambian con esa elección.",
      "Los precios y estimaciones quedan en la capa factual. El relato debe ayudar a distinguir microzonas y funcionamiento cotidiano, no repetir medias o totales de vivienda.",
    ],
    encaja: {
      si: [
        "Encaja si se acepta una vida repartida y se valora tener estuario, playa y aeropuerto muy accesibles sin necesitar una gran villa turística.",
        "San Juan encaja especialmente con quien quiere puerto y Los Quebrantos dentro de una rutina más marítima; Soto ofrece otra relación, más de núcleo y conexiones.",
      ],
      no: [
        "Encaja peor si se espera tener playa, comercio amplio y servicios superiores todos en el mismo radio peatonal.",
        "Tampoco si se compra pensando en ‘Soto del Barco’ sin comprobar la microzona: Soto y San Juan producen semanas distintas.",
      ],
      veredicto:
        "Soto del Barco combina una posición logística cómoda con dos experiencias claras: núcleo y conexiones en Soto, estuario y playa en San Juan de la Arena. La autonomía es intermedia y el coche sigue contando; la elección de microzona determina cuánto mar entra realmente en la vida diaria."
    },
    fotosAbrir: [
      { src: "/fotos/asturias-centro/soto-arena.jpg", pie: "San Juan de la Arena, Soto del Barco" },
      { src: "/fotos/asturias-centro/soto-villa.jpg", pie: "Soto del Barco hacia el estuario" },
    ],
    fotosHistoria: [
      { src: "/fotos/asturias-centro/soto-castillo.jpg", pie: "Castillo de San Martín, Soto del Barco" },
      { src: "/fotos/asturias-centro/soto-estuario.jpg", pie: "Estuario del Nalón en Soto del Barco" },
    ],
    fotosFuera: [
      { src: "/fotos/asturias-centro/soto-playa.jpg", pie: "Playa en Soto del Barco" },
      { src: "/fotos/asturias-centro/soto-quebrantos.jpg", pie: "Los Quebrantos, San Juan de la Arena" },
    ],
    creditoFotos: credito,
  },

  "salinas-castrillon": {
    escala: "Villa-playa y concejo de servicios repartidos",
    abrir: [
      "Salinas es una de las experiencias más claramente marítimas de Asturias Centro: paseo, playa y El Espartal forman parte de la vida de la villa. Pero Castrillón no se reduce a Salinas. Piedras Blancas concentra otra parte de los servicios y maneja una lógica residencial y de precios distinta.",
      "La autonomía cotidiana es media-fuerte según microzona. En Salinas se puede hacer mucha vida a pie junto al mar; para ciertos servicios aparece Piedras Blancas y, muy cerca, Avilés. Esa red funciona bien, pero obliga a distinguir playa, capital municipal y ciudad de apoyo.",
    ],
    tiempo: [
      "Frente a Mallorca, el verano es mucho más fresco y el año más húmedo y gris. Junto a la playa importan viento, salitre, aislamiento y orientación; una vivienda luminosa y protegida puede cambiar mucho la experiencia del invierno.",
      "El Espartal no es una playa de excursión: desde Salinas forma parte de la rutina, junto al paseo y las dunas. Esa ventaja no debe trasladarse automáticamente a cualquier vivienda de Castrillón.",
    ],
    vivir: [
      "Una mañana en Salinas puede resolverse caminando por el paseo, la playa y el entorno dunar. La Peñona y el Museo de Anclas forman parte de ese frente cotidiano. Para gestiones y oferta adicional, Piedras Blancas y Avilés amplían el radio sin exigir grandes desplazamientos.",
      "Hospital y aeropuerto están especialmente próximos. Esa logística es una fortaleza estructural de la zona, aunque los vuelos concretos a Palma sigan dependiendo de temporada y programación.",
      "El verano aumenta ocupación, tráfico y presión de aparcamiento junto a la playa. Fuera de temporada queda una base residencial real; no es un núcleo que desaparezca en invierno.",
      "La proximidad de la actividad industrial de Avilés también forma parte del territorio. No hace falta atribuir efectos no documentados: basta saber que industria, viento y microzona deben mirarse junto con playa y paseo.",
    ],
    historia: [
      "Salinas creció como frente residencial ligado a la playa, mientras El Espartal conserva un sistema dunar que da continuidad al litoral. La Peñona y el Museo de Anclas añaden una referencia reconocible al paseo.",
      "Piedras Blancas recuerda que el municipio funciona con más de un centro. La vida de playa de Salinas y la vida administrativa y de servicios del concejo se complementan, pero no son intercambiables.",
    ],
    fuera: [
      "El Espartal y el paseo son cotidianos desde Salinas. Bahínas y otras playas del concejo amplían el mapa, mientras Avilés ofrece casco, comercio y servicios urbanos muy cerca.",
      "La ventaja de Castrillón está en esa combinación: mar a pie en Salinas y una red de servicios próxima. El precio de esa posición es que la microzona importa mucho y la franja de Salinas soporta una prima clara.",
    ],
    casa: [
      "En Salinas conviene buscar accesibilidad, ascensor o ausencia de barreras, buena orientación, exterior y aparcamiento cuando sea necesario. Salitre, viento y ocupación de verano también deben comprobarse.",
      "El mercado de Salinas no debe confundirse con Piedras Blancas ni con el conjunto de Castrillón. Precio y estimaciones se muestran en la capa factual; la casa concreta debe juzgarse por microzona y funcionamiento anual.",
    ],
    encaja: {
      si: [
        "Encaja si se quiere que playa y paseo formen parte real de la semana y se valora tener hospital, aeropuerto, Avilés y servicios del concejo muy próximos.",
        "También si se acepta que Salinas paga esa combinación con un mercado más exigente y con más movimiento en verano.",
      ],
      no: [
        "Encaja peor si se busca el mismo nivel de precio y tranquilidad en primera línea que en las zonas interiores del concejo.",
        "Tampoco si la proximidad del entorno industrial de Avilés pesa demasiado en la elección o si se pretende que toda vivienda de Castrillón tenga la vida peatonal de Salinas.",
      ],
      veredicto:
        "Salinas combina playa y paseo realmente cotidianos con una logística muy fuerte hacia hospital, aeropuerto y Avilés. Su peaje está en el precio, la presión estival y una microzona que no debe confundirse con Piedras Blancas ni con el resto de Castrillón."
    },
 fotoIdentidad: {
 src: "/fotos/asturias-centro/salinas-castrillon-identidad.jpg",
 pie: "Salinas: casas y chalés frente al Cantábrico, con el cabo detrás",
 },
 fotosAbrir: [
 { src: "/fotos/asturias-centro/salinas-playa.jpg", pie: "Playa de Salinas" },
 { src: "/fotos/asturias-centro/salinas-paseo.jpg", pie: "Paseo de Salinas" },
 ],
 fotosHistoria: [
 { src: "/fotos/asturias-centro/salinas-anclas.jpg", pie: "Museo de Anclas, Peñona de Salinas" },
 { src: "/fotos/asturias-centro/salinas-chalets.jpg", pie: "Casas bajas y chalés en Salinas" },
 ],
 fotosFuera: [
 { src: "/fotos/asturias-centro/salinas-dunas.jpg", pie: "El Espartal desde el paseo, Salinas" },
 { src: "/fotos/asturias-centro/salinas-aviles.jpg", pie: "Avilés, a minutos de Salinas" },
 ],
 creditoFotos: credito,
  },

  "luanco-gozon": {
    escala: "Villa marinera y costa de Peñas",
    abrir: [
      "Luanco concentra la parte más autónoma de Gozón: puerto, casco, servicios y playas urbanas forman una villa marítima que funciona todo el año. Fuera de ella, el concejo se abre hacia Xagó, Cabo Peñas y núcleos más dispersos, donde el coche gana importancia.",
      "La diferencia importa al buscar vivienda. En Luanco se puede hacer bastante vida andando; vivir en Gozón no significa necesariamente tener la misma autonomía ni las playas urbanas a la puerta.",
    ],
    tiempo: [
      "Frente a Mallorca, el clima es más húmedo, gris y fresco, con viento y salitre relevantes cerca del frente marítimo. Orientación, aislamiento y ventilación merecen tanta atención como las vistas.",
      "La Ribera y Aramar permiten que el mar entre de verdad en la rutina de Luanco. Xagó y Cabo Peñas son otra cosa: costa abierta y salidas que amplían el día, normalmente con desplazamiento.",
    ],
    vivir: [
      "Una mañana en la villa puede enlazar puerto, frente marítimo, playa y equipamientos locales como el Museo Marítimo. Esa proximidad sostiene una autonomía fuerte dentro de Luanco, aunque la oferta mayor siga estando en Avilés y Gijón.",
      "El hospital está fuera de la villa. Las fuentes internas manejan referencias próximas hacia Avilés y Gijón sin una única cifra completamente uniforme, así que la conclusión útil es no prometer un minuto exacto: la atención hospitalaria exige desplazamiento, pero queda dentro del área central.",
      "El aeropuerto de Asturias también queda a una distancia práctica; los vuelos a Palma dependen de programación. Para la costa exterior, el coche sigue siendo la herramienta normal.",
      "El verano aumenta la ocupación vacacional, pero Luanco conserva vida anual. Cabo Peñas, Xagó y el resto de Gozón pertenecen al mapa de salida, no a la misma experiencia peatonal del casco.",
    ],
    historia: [
      "El puerto y el casco de piedra explican la identidad marinera de Luanco. El Museo Marítimo refuerza esa relación con los oficios y la navegación sin convertir la villa en un decorado turístico.",
      "Cabo Peñas lleva el municipio a otra escala: faro, acantilados y costa abierta. Es una referencia territorial de Gozón y una salida natural desde Luanco.",
    ],
    fuera: [
      "La Ribera y Aramar son playas de villa; Xagó ofrece dunas y una costa más abierta. Cabo Peñas completa el mapa cuando se quiere caminar o mirar el Cantábrico fuera del núcleo.",
      "Avilés y Gijón amplían comercio, sanidad y cultura. La posición entre ambas ciudades ayuda a que Luanco pueda conservar escala pequeña sin quedar aislada.",
    ],
    casa: [
      "En la villa conviene medir distancia real a servicios y paseo, accesibilidad, aparcamiento, orientación y exposición al salitre. Fuera de Luanco aumenta la importancia del acceso y del coche.",
      "Precio y estimaciones quedan en la capa factual. La distinción clave para vivienda es Luanco frente al resto de Gozón, no una media que trate todo el concejo como una única microzona.",
    ],
    encaja: {
      si: [
        "Encaja si se busca una villa marinera donde puerto, paseo y playa puedan formar parte de una mañana normal, con ciudades mayores relativamente próximas.",
        "También si Cabo Peñas y la costa exterior se valoran como salidas cercanas y se acepta usar coche para ellas.",
      ],
      no: [
        "Encaja peor si se quiere hospital dentro del municipio o si se pretende vivir en cualquier punto de Gozón con la autonomía peatonal de Luanco.",
        "Tampoco si la mayor ocupación del verano resulta incompatible con la vivienda elegida junto al frente marítimo.",
      ],
      veredicto:
        "Luanco ofrece una autonomía fuerte de villa, con puerto, playas y paseo integrados, mientras Gozón añade la costa abierta de Xagó y Cabo Peñas. La contrapartida es salir para hospital y oferta urbana mayor y distinguir cuidadosamente la villa de las zonas más dispersas del concejo."
    },
 fotosAbrir: [
 { src: "/fotos/asturias-centro/luanco-casco.jpg", pie: "Casco de piedra de Luanco" },
 { src: "/fotos/asturias-centro/luanco-puerto.jpg", pie: "Puerto de Luanco" },
 ],
 fotosHistoria: [
 { src: "/fotos/asturias-centro/luanco-museo.jpg", pie: "Museo Marítimo de Luanco" },
 { src: "/fotos/asturias-centro/luanco-penas.jpg", pie: "Cabo Peñas, cerca de Luanco" },
 ],
 fotosFuera: [
 { src: "/fotos/asturias-centro/luanco-playa.jpg", pie: "Playa de La Ribera, Luanco" },
 ],
 creditoFotos: credito,
  },

  "candas-carreno": {
    escala: "Villa marinera conectada con Gijón",
    abrir: [
      "Candás funciona como una villa marinera con vida propia y una conexión estrecha con Gijón. Puerto, centro y playa quedan próximos, mientras el tren de ancho métrico añade una alternativa al coche para moverse por el eje costero.",
      "La autonomía cotidiana es fuerte para su tamaño. Comercio y equipamientos locales permiten resolver bastante semana dentro de la villa; Gijón amplía oferta sin convertir Candás en un simple dormitorio.",
    ],
    tiempo: [
      "Frente a Mallorca, aquí el año es más húmedo y fresco y el verano menos caluroso. Cerca del puerto y las playas conviene mirar salitre, viento, orientación y ventilación antes que quedarse solo con la cercanía al agua.",
      "Palmera y Carranques permiten una relación cotidiana o parcial con el baño según la vivienda; Xivares amplía la costa hacia el oeste. El mar forma parte de la villa, no únicamente de una excursión.",
    ],
    vivir: [
      "Una mañana puede transcurrir entre el puerto, el frente marítimo y el centro. La biblioteca y el Teatro Prendes amplían la vida local más allá del paseo, y el tren permite pensar algunos desplazamientos hacia Gijón sin depender siempre del coche.",
      "La capa 2026 sitúa la capacidad de servicios por encima de la que reflejaba el relato antiguo. No hace falta convertirlo en una nota numérica: la consecuencia es que Candás mantiene una rutina anual bastante completa para una villa de esta escala.",
      "La sanidad hospitalaria está fuera. Las fuentes internas conservan una discrepancia entre un tiempo histórico corto y la referencia práctica hacia Cabueñes; por eso el relato no fija un minuto único. Para hospital hay que salir, con Gijón como parte natural del mapa.",
      "Aboño es el peaje territorial que no debe ocultarse. La actividad industrial al oeste forma parte del entorno y puede importar al elegir microzona; no es necesario atribuirle efectos concretos que las fuentes no documenten.",
    ],
    historia: [
      "Puerto y faro mantienen la identidad marinera de Candás, mientras equipamientos culturales como el Museo Antón forman parte de una villa que conserva actividad más allá del verano.",
      "La cercanía de Aboño introduce la otra cara del litoral de Carreño: costa habitada, comunicaciones e industria conviven en pocos kilómetros.",
    ],
    fuera: [
      "Palmera y Carranques son las referencias inmediatas de playa; Xivares amplía el mapa costero. Gijón queda suficientemente conectado para convertirse en salida habitual de comercio, cultura y sanidad.",
      "El tren es útil como conexión existente, pero no conviene prometer frecuencias o tiempos que la capa no documenta. La ventaja es disponer de otra opción además de la carretera.",
    ],
    casa: [
      "En Candás conviene comprobar accesibilidad, distancia real al centro y al mar, aparcamiento, salitre y orientación. Hacia el oeste debe mirarse también la relación concreta de la vivienda con el entorno industrial.",
      "Precio y estimaciones quedan en la capa factual. La vivienda se entiende mejor por calle y microzona que mediante antiguas medias narrativas.",
    ],
    encaja: {
      si: [
        "Encaja si se busca una villa pequeña con puerto, playa, servicios propios y conexión práctica con Gijón, sin necesitar vivir dentro de una gran ciudad.",
        "También si se valora poder alternar coche y tren para parte de los desplazamientos y mantener una rutina anual local.",
      ],
      no: [
        "Encaja peor si la cercanía de Aboño resulta incompatible con la vivienda buscada o si el hospital debe estar dentro de la propia villa.",
        "Tampoco si se espera que toda la costa de Carreño tenga la misma autonomía peatonal que el centro de Candás.",
      ],
      veredicto:
        "Candás combina una autonomía local fuerte con puerto, playa y conexión ferroviaria hacia Gijón. Su principal contrapartida es la convivencia territorial con Aboño y la necesidad de salir para hospital y oferta de gran ciudad; por eso la microzona concreta importa."
    },
 fotosAbrir: [
 { src: "/fotos/asturias-centro/candas-puerto.jpg", pie: "Puerto de Candás" },
 { src: "/fotos/asturias-centro/candas-villa.jpg", pie: "Candás: villa marinera de Carreño" },
 ],
 fotosHistoria: [
 { src: "/fotos/asturias-centro/candas-faro.jpg", pie: "Faro de Candás" },
 { src: "/fotos/asturias-centro/candas-paseo.jpg", pie: "Paseo en Candás" },
 ],
 fotosFuera: [
 { src: "/fotos/asturias-centro/candas-playa.jpg", pie: "Playa en Candás" },
 { src: "/fotos/asturias-centro/candas-palmera.jpg", pie: "Costa de Candás hacia el Pedrero" },
 ],
 creditoFotos: credito,
  },

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
  },
};
