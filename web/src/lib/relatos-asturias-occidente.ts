import type { RelatoMun } from "@/components/RelatoMunicipio";

const credito = "Fotos: Wikimedia Commons (licencias indicadas en los archivos de origen).";

export const RELATOS_ASTURIAS_OCCIDENTE: Record<string, RelatoMun> = {
  castropol: {
    escala: "Pueblo de ría y frontera",
    abrir: [
      "Castropol se asoma a la ría del Eo desde un núcleo pequeño, con Ribadeo visible al otro lado del agua. La ría forma parte del día a día; la playa abierta, en cambio, depende de la microzona y suele implicar una salida. Figueras añade otro núcleo marinero dentro del concejo y Penarronda aporta la costa de dunas hacia Tapia.",
      "La escala es reducida y la autonomía cotidiana también. En Castropol villa hay servicios básicos; para comercio más amplio, gestiones y una parte de la semana Ribadeo funciona como apoyo natural al otro lado de la ría. Fuera de los núcleos, el coche gana todavía más peso."
    ],
    tiempo: [
      "El cambio respecto a Mallorca se nota en un clima más húmedo, con más días grises y niebla frecuente. El verano es fresco y la vivienda debe funcionar bien cuando la terraza deja de ser el centro de la casa: orientación, aislamiento, ventilación y señales de humedad merecen una visita con mal tiempo.",
      "La ría y el Cantábrico abierto ofrecen experiencias distintas. El frente del Eo permite convivir con el agua de forma cotidiana; Penarronda y otras playas de costa abierta son salidas en las que el estado del mar importa más para el baño."
    ],
    vivir: [
      "Una mañana normal puede empezar caminando el frente de la ría, hacer una compra básica en el núcleo y terminar cruzando hacia Ribadeo si hace falta más comercio. Esa dependencia no convierte Castropol en un lugar aislado, pero sí obliga a distinguir entre tener una villa enfrente y tener sus servicios dentro del propio municipio.",
      "La sanidad primaria está disponible localmente; para atención hospitalaria la referencia práctica es Jarrio, fuera del municipio. El tren de ancho métrico en Vegadeo forma parte del mapa de comunicaciones, pero su existencia no debe confundirse con una alternativa capaz de sustituir el coche en la rutina.",
      "El verano añade visitantes a la ría, Figueras y las playas, mientras el resto del año recupera una escala mucho más pequeña. Esa diferencia estacional importa especialmente al elegir vivienda: el promontorio de Castropol, Figueras y las parroquias no ofrecen la misma relación con servicios, aparcamiento o coche.",
      "El aeropuerto de Asturias exige un trayecto largo y las conexiones con Palma dependen de la programación de temporada. Para una vida con viajes frecuentes conviene contar esa logística como parte de la rutina, no como una nota secundaria."
    ],
    historia: [
      "La imagen más reconocible es la del núcleo blanco sobre la ría del Eo. Más que un gran casco monumental, Castropol ofrece una posición de frontera: Asturias en esta orilla, Ribadeo y Galicia enfrente, y el estuario organizando el paisaje.",
      "Figueras aporta una identidad propia dentro del concejo, con su relación marinera, los astilleros y el palacio de Peñalba. La Reserva de la Biosfera Río Eo, Oscos e Terras de Burón amplía esa lectura hacia la ría y el interior."
    ],
    fuera: [
      "El paseo cotidiano más claro es el frente de la ría y el puerto según el núcleo en el que se viva. Es una relación de estuario: agua cercana y Ribadeo como horizonte, distinta de tener una gran playa urbana al salir de casa.",
      "Penarronda es una salida de playa abierta y dunas hacia Tapia. Figueras permite cambiar de núcleo sin salir del concejo; Ribadeo añade casco y comercio; y los Oscos y la sierra de la Bobia abren el mapa hacia el interior cuando se busca otra escala de paisaje."
    ],
    casa: [
      "Aquí la dirección concreta pesa mucho. Castropol villa y Figueras no deben tratarse como la misma experiencia, y una vivienda en parroquia puede aumentar claramente la dependencia del coche. Antes de comprar conviene comprobar acceso, aparcamiento, fibra real y distancia efectiva a los servicios que se usarán cada semana.",
      "En viviendas expuestas a la ría importan humedad, orientación, ventilación y aislamiento. La capa factual y la tabla concentran precios y estimaciones; el relato útil es comprobar si esa casa funciona en un día de niebla y durante el invierno, no solo si tiene buenas vistas en verano."
    ],
    encaja: {
      si: [
        "Encaja si se busca una escala pequeña con la ría como paisaje cotidiano y se acepta que una parte relevante de la vida práctica se apoye en Ribadeo y en el coche. El atractivo está en vivir frente al Eo, con Castropol o Figueras como núcleo y la costa abierta disponible como salida.",
        "También encaja si la calma fuera de temporada resulta valiosa y no se necesita que comercio, hospital y aeropuerto estén integrados en la propia villa. La clave es elegir microzona sabiendo exactamente qué se puede hacer a pie y qué obliga a desplazarse."
      ],
      no: [
        "Encaja peor si se quiere resolver casi toda la semana andando dentro del mismo núcleo, si el coche debe ser excepcional o si se necesita hospital cercano. Castropol tiene una autonomía menor que una villa comarcal y esa diferencia es estructural.",
        "Tampoco si una vivienda convence solo por la vista de agosto. La humedad, la niebla, la ocupación de invierno, la fibra y la distancia real a los servicios pesan tanto como la ría en la decisión cotidiana."
      ],
      veredicto:
        "Castropol es una forma pequeña y fronteriza de vivir junto al Eo: ría cotidiana, Ribadeo como apoyo y una costa que se disfruta más por tramos que desde una gran playa urbana. La elección depende mucho de la microzona y de aceptar coche y desplazamientos a cambio de esa escala de estuario."
    },
    fotoIdentidad: {
      src: "/fotos/asturias-occidente/castropol-identidad.jpg",
      pie: "Castropol: pueblo blanco sobre la ría del Eo, con monte detrás — así se vive mirando a Figueras",
    },
    fotosAbrir: [
      { src: "/fotos/asturias-occidente/castropol-villa.jpg", pie: "Castropol: pueblo blanco sobre la ría" },
      { src: "/fotos/asturias-occidente/castropol-ria.jpg", pie: "Ría del Eo desde Castropol" },
    ],
    fotosHistoria: [
      { src: "/fotos/asturias-occidente/castropol-figueras.jpg", pie: "Figueras: astilleros y orilla del concejo" },
    ],
    fotosFuera: [
      { src: "/fotos/asturias-occidente/castropol-penarronda.jpg", pie: "Penarronda, playa de dunas cerca de Castropol" },
    ],
    creditoFotos: credito,
  },

  "tapia-de-casariego": {
    escala: "Villa marinera de surf",
    abrir: [
      "Tapia de Casariego concentra bastante vida en poca distancia: casco marinero, puerto, faro, paseo y playas enlazadas con la villa. Anguileiro, Represas y Serantes hacen que el mar no sea solo una salida de fin de semana; forma parte de una mañana corriente, tanto para caminar como para entrar al agua cuando el Cantábrico lo permite.",
      "Fuera del verano sigue funcionando como villa. La rutina básica puede resolverse en el núcleo y el coche tiene un papel menor que en municipios más dispersos, aunque vuelve a ser necesario para el hospital y para ampliar el radio de salidas. Agosto añade presión sobre playas, aparcamiento y orilla sin convertir Tapia en un lugar exclusivamente estacional."
    ],
    tiempo: [
      "El contraste con Mallorca está en un verano más fresco, humedad, niebla frecuente y más días de cielo cerrado. Una vivienda junto al mar debe juzgarse también con viento y bruma: orientación, aislamiento y exposición al salitre cambian mucho la experiencia entre agosto y enero.",
      "Las playas son de Cantábrico abierto y el estado del mar manda. El surf forma parte de la identidad local, pero para un baño tranquilo no todos los días son iguales. La piscina de agua de mar añade otra pieza al frente costero sin necesidad de convertir cada salida al agua en una excursión."
    ],
    vivir: [
      "Un martes de noviembre se puede caminar del casco al puerto, seguir hacia el faro y la costa, resolver compras y atención primaria y volver sin organizar el día alrededor del coche. Esa continuidad a pie es una de las diferencias prácticas de Tapia frente a municipios occidentales más dispersos.",
      "Anguileiro y las playas próximas permiten incorporar mar y surf a la rutina. En verano ese mismo frente recibe más visitantes y coches; vivir muy pegado a la orilla significa aceptar una temporada más intensa que en calles interiores.",
      "Para atención hospitalaria hay que desplazarse a Jarrio. El aeropuerto de Asturias queda también fuera de la rutina inmediata y las conexiones con Palma son de programación variable, de modo que viajar exige mirar la temporada real y no dar por permanente una ruta de verano.",
      "Ribadeo y Navia amplían comercio y servicios a una distancia de salida corta. Tapia, sin embargo, no necesita esas villas para cada gesto cotidiano: su autonomía es suficiente para que el casco mantenga vida durante el año."
    ],
    historia: [
      "El puerto y la isla del faro explican mejor Tapia que una lista de monumentos. La escala es la de una villa marinera compacta, con calles que vuelven una y otra vez hacia la dársena y el frente costero.",
      "El surf añade una capa contemporánea a esa identidad. Anguileiro, Represas y Serantes no son solo nombres de playa: explican por qué la relación con el Cantábrico se ve en la vida diaria y por qué el verano cambia el ritmo de la orilla."
    ],
    fuera: [
      "El paseo puerto–faro–costa puede formar parte de una mañana normal. La piscina de agua de mar y las playas próximas amplían ese recorrido, mientras Anguileiro ofrece la relación más directa entre villa, arena y surf.",
      "Penarronda cambia el paisaje hacia dunas y Castropol; la ruta costera hacia Figueras acerca la ría del Eo. Navia queda como villa de apoyo hacia el este y Ribadeo como otra escala urbana hacia el oeste, pero ninguna de esas salidas sustituye el paseo cotidiano de Tapia."
    ],
    casa: [
      "En el casco y cerca del puerto conviene comprobar accesibilidad, orientación y distancia realmente caminable a compra y playa. Junto a la orilla pesan salitre, niebla, viento y el movimiento de verano; unas calles hacia dentro pueden cambiar bastante esa exposición.",
      "El mercado tiene componente turístico y de segunda residencia, por lo que no conviene extrapolar una vivienda a todo el municipio. Los precios y estimaciones quedan en la capa factual y en la tabla; en la visita importan más estado, accesibilidad y funcionamiento fuera de temporada."
    ],
    encaja: {
      si: [
        "Encaja si se quiere una villa pequeña donde puerto, paseo y playa formen parte de la rutina y donde buena parte del día a día pueda hacerse dentro del núcleo. El coche sigue siendo útil, pero no organiza cada recado.",
        "También encaja si se acepta que el verano intensifique el uso de las playas y el aparcamiento. Fuera de esa temporada queda una base local suficiente para que Tapia siga siendo villa y no únicamente destino de costa."
      ],
      no: [
        "Encaja peor si se necesita hospital en el propio municipio, una oferta urbana amplia o conexiones aéreas inmediatas. Para esas funciones hay que salir de Tapia.",
        "Tampoco si la niebla, el salitre y un Cantábrico que no garantiza baño tranquilo cada día restan demasiado valor a tener el mar tan integrado. La vivienda debe funcionar con bruma y en invierno, no solo junto a una playa llena de agosto."
      ],
      veredicto:
        "Tapia combina casco marinero, puerto y una relación especialmente directa con el mar. Su equilibrio está en poder hacer bastante vida a pie y tener playas y paseo incorporados a la villa, aceptando una temporada de verano más intensa y desplazamientos para hospital, aeropuerto y servicios de mayor escala."
    },
    fotosAbrir: [
      { src: "/fotos/asturias-occidente/tapia-puerto.jpg", pie: "Puerto de Tapia de Casariego" },
      { src: "/fotos/asturias-occidente/tapia-casco.jpg", pie: "Casco marinero de Tapia" },
    ],
    fotosHistoria: [
      { src: "/fotos/asturias-occidente/tapia-faro.jpg", pie: "Faro e isla frente a Tapia" },
      { src: "/fotos/asturias-occidente/tapia-paseo.jpg", pie: "Paseo costero de Tapia" },
    ],
    fotosFuera: [
      { src: "/fotos/asturias-occidente/tapia-playa.jpg", pie: "Playa de Tapia hacia el Cantábrico" },
    ],
    creditoFotos: credito,
  },

  navia: {
    escala: "Villa de servicios en su ría",
    abrir: [
      "Navia se entiende mejor por lo que permite hacer un martes que por una sola imagen de postal. La villa concentra comercio, mercado, atención primaria y cine, con la ría y su paseo dentro de la rutina. El agua está presente en el núcleo; para una experiencia de playa más clara hay que contar con un pequeño desplazamiento.",
      "Esa combinación le da una autonomía cotidiana fuerte para la escala de la zona. El coche sirve para ampliar el mapa hacia la costa, Puerto de Vega o el hospital, pero buena parte de la semana puede resolverse en la propia villa."
    ],
    tiempo: [
      "Frente a Mallorca, Navia ofrece un verano más fresco y una vivienda sometida a más humedad y días grises. En una visita conviene mirar orientación, aislamiento y cómo responde la casa cerca de la ría cuando el tiempo no acompaña, no solo el uso de una terraza en agosto.",
      "La ría es el agua cotidiana; Frexulfe y Barayo pertenecen a otro tipo de salida, más abierta al Cantábrico. Esa diferencia evita confundir vivir junto al estuario con tener una gran playa integrada en cada parte de la villa."
    ],
    vivir: [
      "Una mañana corriente puede encadenar compra, mercado, centro de salud, paseo de ría y alguna gestión sin salir de Navia. Incluso el cine forma parte de esa escala de villa comarcal. En invierno esa base sigue funcionando y evita que la vida diaria dependa de la temporada turística.",
      "El Hospital de Jarrio queda fuera del núcleo pero muy próximo en la lógica comarcal. Para la rutina sanitaria básica está la atención primaria local; para hospital hay que desplazarse. La A-8 facilita las salidas y el tren de ancho métrico existe en el mapa de comunicaciones, aunque su presencia no garantiza que sustituya al coche en cada trayecto.",
      "El verano añade movimiento en la costa y en lugares próximos como Puerto de Vega, Frexulfe y Barayo. Dentro de Navia permanece una vida de comercio y servicios menos dependiente de esa afluencia, lo que diferencia la villa de enclaves más estacionales.",
      "El aeropuerto de Asturias requiere un desplazamiento y las conexiones con Palma dependen de la programación. Es una logística razonablemente accesible dentro del occidente asturiano, pero sigue siendo una salida planificada, no una infraestructura integrada en el día a día."
    ],
    historia: [
      "La ría y el papel de villa comarcal explican Navia mejor que un gran monumento central. El casco funciona como lugar de servicios, comercio y paseo, con la autovía conectando rápidamente el resto de la costa occidental.",
      "Puerto de Vega aporta, a corta distancia, otra imagen del municipio: un núcleo marinero más concentrado alrededor del puerto. El castro de Coaña añade una salida histórica cercana y recuerda que el mapa cotidiano de Navia se extiende también al entorno inmediato."
    ],
    fuera: [
      "Para una mañana sin plan especial basta el paseo de la ría y el frente urbano. La playa requiere algo más de desplazamiento que en Tapia, de modo que conviene separar el agua que acompaña la vida diaria del día que se organiza alrededor de la arena.",
      "Puerto de Vega ofrece una salida marinera corta. Frexulfe y Barayo abren la costa hacia espacios más naturales, mientras el castro de Coaña cambia mar por patrimonio. Son extensiones de la vida en Navia, no sustitutos de una villa que ya resuelve bastante por sí misma."
    ],
    casa: [
      "En el casco y junto al paseo se gana acceso a servicios y una rutina caminable; cerca de la ría hay que mirar humedad, orientación y comportamiento de la vivienda en invierno. Hacia las afueras cambian el acceso a pie y la necesidad de coche.",
      "La capa factual y la tabla concentran precios y estimaciones. Para la vivienda concreta pesan más accesibilidad, estado, luz y distancia efectiva a comercio y paseo, además de comprobar que la ubicación permite aprovechar la autonomía que distingue a Navia."
    ],
    encaja: {
      si: [
        "Encaja si se valora una villa que resuelva bien la semana: comercio, mercado, atención primaria, paseo y vida anual dentro del núcleo, con Jarrio y la costa próxima como desplazamientos cortos cuando hacen falta.",
        "También encaja si se prefiere tener una base cotidiana sólida y reservar Puerto de Vega, Frexulfe, Barayo o Coaña para salidas. La ría aporta agua al día a día sin exigir que toda la identidad del lugar dependa de una playa."
      ],
      no: [
        "Encaja peor si se quiere salir de casa directamente a una gran playa o si la prioridad es que el paisaje más espectacular esté concentrado en el propio casco. Parte de la costa más abierta y de los núcleos marineros del entorno exige desplazarse.",
        "Tampoco si se necesita hospital dentro de la villa o aeropuerto inmediato. Navia reduce esas distancias dentro de la escala occidental, pero no elimina la logística comarcal."
      ],
      veredicto:
        "Navia funciona como una villa comarcal práctica junto a su ría: mucha autonomía cotidiana, hospital próximo fuera del núcleo y una costa que se amplía con pequeñas salidas. Su identidad está menos en una postal única que en poder resolver la semana y tener Puerto de Vega, Frexulfe, Barayo y Coaña alrededor."
    },
    fotosAbrir: [
      { src: "/fotos/asturias-occidente/navia-ria.jpg", pie: "Ría de Navia y frente de la villa" },
      { src: "/fotos/asturias-occidente/navia-villa.jpg", pie: "Navia: villa de servicios junto a la ría" },
    ],
    fotosHistoria: [
      { src: "/fotos/asturias-occidente/navia-vega.jpg", pie: "Puerto de Vega, núcleo marinero del concejo" },
    ],
    fotosFuera: [
      { src: "/fotos/asturias-occidente/navia-playa.jpg", pie: "Costa y playa en el entorno de Navia" },
      { src: "/fotos/asturias-occidente/navia-coana.jpg", pie: "Castro de Coaña, cerca de Navia" },
    ],
    creditoFotos: credito,
  },

  "luarca-valdes": {
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
  },
};
