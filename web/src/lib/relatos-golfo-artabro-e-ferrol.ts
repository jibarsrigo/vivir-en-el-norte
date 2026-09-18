import type { RelatoMun } from "@/components/RelatoMunicipio";

const credito = "Fotos: Wikimedia Commons (licencias indicadas en los archivos de origen).";

export const RELATOS_GOLFO_ARTABRO_E_FERROL: Record<string, RelatoMun> = {
  "a-coruna": {
    escala: "Ciudad atlántica compacta",
    abrir: [
      "A Coruña reúne unos doscientos cincuenta mil habitantes en una península atlántica: Torre de Hércules —faro romano patrimonio de la humanidad—, paseo marítimo de unos trece kilómetros, casco viejo, Marina con galerías de cristal, Riazor y Orzán frente al oleaje, y el Monte de San Pedro como mirador. Es ciudad compacta y muy caminable: la dependencia del coche ronda 2/10.",
      "Un martes de noviembre se resuelve comercio, centro de salud, farmacia, universidad, cine y restauración sin salir lejos. Los servicios alcanzan 10/10. El CHUAC —Complejo Hospitalario Universitario de A Coruña— queda a unos cinco minutos; los privados HM Modelo, Quirónsalud y San Rafael, en el mismo rango corto. Alvedro, el aeropuerto, está a unos diez minutos.",
      "Las fiestas de María Pita, en torno a agosto, llenan el centro con actos, música y mucha gente: cortes, ruido y aparcamiento difícil en las calles del recorrido. San Juan enciende hogueras en la orilla; las noches de junio animan Riazor y el paseo. Vivir junto al tramo festivo o a la primera línea significa contar con semanas de volumen alto.",
      "El resto del año A Coruña es capital de trabajo y de costa: lonja de ambiente, AVE a Madrid y vida todo el año. Encaja para quien quiera ciudad completa junto al mar, no urbanización residencial a diez minutos.",
    ],
    tiempo: [
      "A Coruña suma unas 2.050 horas de sol y 50 días despejados, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.000 milímetros en unos 128 días; de octubre a marzo llueve con frecuencia y la llovizna también aparece en verano. El viento y la niebla son medios.",
      "El verano ronda 19 °C, con máximas habituales alrededor de 23 °C y uno o dos días por encima de 30 °C. Es mucho más suave que Baleares. Riazor y Orzán tienen agua atlántica entre 16 y 18 °C, con oleaje; Oza y As Lapas ofrecen tramos más recogidos.",
    ],
    historia: [
      "La Torre de Hércules es el faro en uso más antiguo del mundo y el emblema de la ciudad: piedra romana, reconstrucciones posteriores y el Atlántico a los pies. El paseo que la rodea explica mejor A Coruña que cualquier folleto: ciudad y océano en el mismo trazo.",
      "La Marina y el casco viejo hablan de comercio, pesca y galerías acristaladas que protegen del viento. María Pita —heroína de la defensa frente a la armada inglesa en 1589— da nombre a la plaza y a las fiestas mayores. Hoy el relato útil es el de una capital atlántica compacta que no se vacía en invierno.",
    ],
    fuera: [
      "Riazor y Orzán son las playas urbanas: arena, oleaje y agua fresca. Oza y As Lapas completan opciones más abrigadas. El paseo marítimo permite kilómetros a pie sin coche.",
      "El Monte de San Pedro ofrece baterías, mirador y césped sobre la ciudad. Para ría más templada se conduce a Oleiros o Gandarío; para bosque atlántico, hacia las Fragas do Eume desde Miño o Pontedeume.",
    ],
    casa: [
      "El ensanche y el casco ofrecen pisos de distintas décadas; hay obra nueva y fibra. Cerca de Riazor importan ruido, salitre y ocupación de verano; en el centro, aparcamiento y fiestas.",
      "El precio medio ronda 2.600 €/m², el más alto de la zona. Dos habitaciones en la franja asequible se sitúan alrededor de 220.000 euros; tres habitaciones en tipologías habituales suben hacia los 290.000 y quedan en la franja cara. Barrio bajo con vistas a precio medio casi no existe.",
      "Los servicios son 10/10. El CHUAC queda a unos cinco minutos. Alvedro, con vuelo a Palma en verano, está a unos diez; Santiago-Lavacolla, con enlace casi todo el año, a unos cincuenta.",
    ],
    encaja: {
      si: [
        "Encaja si se quiere ciudad atlántica completa: hospital, comercio, cultura y mar a pie, con dependencia baja del coche. La Torre, el paseo y Riazor bastan para una semana sin forzar trayectos.",
        "También encaja para quien valore AVE, universidad y servicios 10/10 más que una urbanización silenciosa a diez minutos en Oleiros.",
      ],
      no: [
        "No encaja si se busca chalé con jardín, calles de urbanización y playa de ría calmada como baño de diario. Oleiros y Sada cubren ese perfil; aquí mandan densidad y Atlántico abierto.",
        "Tampoco si tres habitaciones en primera línea deben quedar en franja media: el metro de A Coruña es el más caro del arco y esa tipología sube rápido.",
      ],
      veredicto:
        "Veredicto: A Coruña es la capital de referencia del golfo, no la urbanización residencial. Buscaría piso caminable a paseo y servicios, fuera del tramo más ruidoso de María Pita y San Juan, tras probar un frente de invierno. Se ganan ciudad y mar juntos; se acepta precio alto y agua atlántica fresca.",
    },
    fotosAbrir: [
      { src: "/fotos/golfo-artabro-e-ferrol/coruna-hercules.jpg", pie: "Torre de Hércules sobre el Atlántico" },
      { src: "/fotos/golfo-artabro-e-ferrol/coruna-paseo.jpg", pie: "Paseo marítimo de A Coruña" },
    ],
    fotosHistoria: [
      { src: "/fotos/golfo-artabro-e-ferrol/coruna-marina.jpg", pie: "Marina de A Coruña y sus galerías" },
      { src: "/fotos/golfo-artabro-e-ferrol/coruna-casco.jpg", pie: "Casco viejo de A Coruña" },
    ],
    fotosFuera: [
      { src: "/fotos/golfo-artabro-e-ferrol/coruna-riazor.jpg", pie: "Riazor, playa urbana atlántica" },
      { src: "/fotos/golfo-artabro-e-ferrol/coruna-san-pedro.jpg", pie: "Monte de San Pedro, mirador sobre la ciudad" },
    ],
    creditoFotos: credito,
  },

  oleiros: {
    escala: "Urbanizaciones y playas de ría",
    abrir: [
      "Oleiros reparte unos treinta y ocho mil habitantes en núcleos residenciales junto al mar: Santa Cruz —castillo en un islote, paseo y puerto—, Mera —faro, playas y pueblo bajo—, Perillo y Santa Cristina —paseo de la ría—, Bastiagueiro y el Monumento Natural de Dexo-Serantes, con acantilados y senda costera. Es el municipio con más parques y equipamientos por habitante de Galicia: casas bajas, calles limpias, chalés.",
      "Un martes de noviembre el centro de salud, el súper, el colegio y el comercio cubren la semana básica sin entrar cada día en A Coruña. Los servicios alcanzan 7/10. El CHUAC queda a unos diez minutos; HM Modelo, a unos quince. Alvedro está a unos diez. A Coruña, la ciudad de referencia, a unos diez minutos del centro.",
      "En verano las verbenas y el veraneo llenan Santa Cristina, Mera y Bastiagueiro con toallas, tráfico y aparcamiento escaso en la orilla. San Juan anima la costa; las noches de julio y agosto suben el volumen junto al paseo. Vivir en primera línea de playa significa contar con semanas ruidosas; tierra adentro, hacia las urbanizaciones, el silencio vuelve antes.",
      "Fuera de agosto Oleiros recupera ritmo residencial ordenado, de clase media-alta coruñesa, con vida local y ciudad cerca. Encaja para quien quiera exactamente urbanización con playa a diez minutos de una capital, y acepte el cielo más gris de las rías.",
    ],
    tiempo: [
      "Oleiros registra unas 2.050 horas de sol y 50 días despejados, lejos de las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.000 milímetros en unos 128 días. El viento es medio; la niebla, baja. La llovizna también aparece en verano.",
      "El verano ronda 19 °C, con máximas alrededor de 23 °C y muy pocos días sobre 30 °C. Santa Cristina, Mera y Bastiagueiro tienen agua de ría o costa suave más usable que Riazor; sigue siendo fresca frente a Baleares, pero calmada para baños cortos y paseos largos.",
    ],
    historia: [
      "Santa Cruz concentra el relato señorial y defensivo: el castillo sobre un islote, el paseo y el puerto deportivo convierten el núcleo en una postal vivida, no en un decorado. Oleiros creció como corona residencial de A Coruña, no como villa marinera densa.",
      "Dexo-Serantes protege acantilados y una senda de unos diez kilómetros: el otro carácter del municipio, más bravo que la ría de Santa Cristina. El urbanismo moderno —parques, equipamientos, casas bajas— es la capa que explica por qué aquí se siente «urbanización con playa» más que pueblo antiguo.",
    ],
    fuera: [
      "Santa Cristina ofrece paseo y baño de ría; Mera y Espiñeiro, arena y faro; Bastiagueiro, oleaje suave. Son playas de diario a minutos de casa en muchos núcleos.",
      "La senda de Dexo-Serantes permite caminar acantilado y costa abierta. A Coruña queda a diez minutos para compras grandes, cultura y hospital; Gandarío, en Bergondo, amplía el arenal de ría templada.",
    ],
    casa: [
      "Predominan chalés y casas bajas en urbanización; también pisos en algunos núcleos. Hay obra nueva y fibra. En la orilla pesan salitre, ocupación de agosto y precio; tierra adentro, orientación y parcela.",
      "El precio medio ronda 2.500 €/m². Dos habitaciones en la franja asequible se sitúan alrededor de 211.000 euros; tres habitaciones en tipologías habituales suben hacia los 290.000 y entran en franja cara. Una casa en urbanización parte a menudo de cifras altas.",
      "Los servicios son 7/10. El CHUAC queda a unos diez minutos. Alvedro está a unos diez, con Palma en verano; Santiago-Lavacolla, a unos cuarenta y cinco o cincuenta.",
    ],
    encaja: {
      si: [
        "Encaja si se busca urbanización ordenada, segura y con playa a diez minutos de A Coruña y del CHUAC. Santa Cruz, Mera o Santa Cristina dan el modelo residencial más claro del golfo.",
        "También encaja para quien acepte 50 días despejados al año y un metro caro a cambio de calles limpias, equipamientos y ciudad cerca sin vivir en densidad urbana.",
      ],
      no: [
        "No encaja si tres habitaciones en primera línea deben quedar en franja media, o si se necesita el precio de Ferrol o Bergondo. Oleiros es la corona cara del arco.",
        "Tampoco si se quiere villa histórica densa o aldea marinera como Redes. Aquí manda el chalé y el paseo, no el casco gótico ni el puerto pesquero.",
      ],
      veredicto:
        "Veredicto: Oleiros es la apuesta urbanización-playa del golfo. Buscaría vivienda en Mera o Santa Cruz fuera del tramo más ocupado de agosto, tras comprobar sol real en noviembre. Se ganan orden, playa y A Coruña a diez minutos; se aceptan precio alto y cielo gris.",
    },
    fotosAbrir: [
      { src: "/fotos/golfo-artabro-e-ferrol/oleiros-santa-cruz.jpg", pie: "Santa Cruz: castillo en islote y paseo" },
      { src: "/fotos/golfo-artabro-e-ferrol/oleiros-mera.jpg", pie: "Mera, faro y playa en Oleiros" },
    ],
    fotosHistoria: [
      { src: "/fotos/golfo-artabro-e-ferrol/oleiros-santa-cristina.jpg", pie: "Santa Cristina, paseo de ría" },
      { src: "/fotos/golfo-artabro-e-ferrol/oleiros-perillo.jpg", pie: "Perillo, núcleo residencial junto a la ría" },
    ],
    fotosFuera: [
      { src: "/fotos/golfo-artabro-e-ferrol/oleiros-dexo.jpg", pie: "Dexo-Serantes: acantilados y senda costera" },
      { src: "/fotos/golfo-artabro-e-ferrol/oleiros-bastiagueiro.jpg", pie: "Bastiagueiro, playa de oleaje suave" },
    ],
    creditoFotos: credito,
  },

  sada: {
    escala: "Villa con puerto de ría",
    abrir: [
      "Sada reúne unos diecisiete mil habitantes en la ría de Betanzos: villa con puerto deportivo en Fontán, paseo, playa urbana de agua más templada que el Atlántico abierto, comercio y centro de salud. Gandarío —arenal largo de ría— queda a unos cinco minutos. Es la alternativa a Oleiros con metro algo más amable y carácter de villa, no solo de urbanización.",
      "Un martes de noviembre se compra, se va al médico de cabecera y se camina al paseo sin depender de A Coruña para lo diario. Los servicios alcanzan 7/10. El CHUAC queda a unos quince minutos; Alvedro, a unos quince. La ciudad, a unos quince minutos.",
      "En verano el veraneo y las fiestas locales llenan el puerto, el paseo y la playa urbana con música, terrazas y tráfico. Gandarío recibe toallas y coches en las cunetas. Vivir junto a Fontán o a la orilla significa contar con semanas de ruido y aparcamiento difícil; tierra adentro el volumen baja.",
      "Fuera de agosto Sada recupera ritmo de villa de trabajo y residencia. Encaja para quien quiera puerto, agua de ría y A Coruña cerca, pagando menos que en Oleiros.",
    ],
    tiempo: [
      "Sada suma unas 2.000 horas de sol y 50 días despejados, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.050 milímetros en unos 130 días. Viento y niebla son bajos frente a la costa abierta de Ferrol.",
      "El verano ronda 19 °C, con máximas alrededor de 23 °C. La playa urbana y Gandarío tienen agua de ría hacia 18-20 °C en los mejores tramos: de las franjas más templadas de la zona, aunque sigue lejos del Mediterráneo balear.",
    ],
    historia: [
      "El puerto de Fontán y el paseo explican Sada moderna: villa que miró a la ría de Betanzos como ocio y residencia coruñesa, no solo como oficio de bajura. El tejido urbano concentra comercio y servicios en un casco reconocible.",
      "Gandarío y la cercanía a Betanzos —casco histórico a un trayecto corto— añaden capa comarcal: ría templada, fiestas fluviales cercanas como Os Caneiros y una orilla más abrigada que Riazor. La historia útil aquí es geográfica y residencial.",
    ],
    fuera: [
      "La playa urbana de Sada es el baño de diario; Cirro completa opciones. Gandarío, a cinco minutos, ofrece el arenal largo de ría con espacio para tender la toalla.",
      "El paseo y Fontán permiten una tarde sin coche. A Coruña cubre compras grandes y cultura; Betanzos, casco histórico; Oleiros, otra franja de urbanización y senda de Dexo.",
    ],
    casa: [
      "El casco y el entorno del puerto ofrecen pisos y viviendas; las afueras, más parcela. Hay obra nueva y fibra. Junto a la orilla pesan ocupación de agosto y humedad; hacia el interior, acceso y orientación.",
      "El precio medio ronda 2.100 €/m². Dos habitaciones en la franja asequible se sitúan alrededor de 177.000 euros; tres habitaciones, alrededor de 246.000. Es más asequible que Oleiros o A Coruña, dentro aún de la mitad alta de la zona.",
      "Los servicios son 7/10. El CHUAC queda a unos quince minutos. Alvedro está a unos quince; Santiago-Lavacolla, a unos cincuenta.",
    ],
    encaja: {
      si: [
        "Encaja si se quiere villa con puerto, playa de ría templada y A Coruña a quince minutos, con servicios 7/10 y un metro más amable que Oleiros.",
        "También encaja para quien valore Gandarío cerca y acepte veraneo en la orilla a cambio de no vivir en densidad de capital.",
      ],
      no: [
        "No encaja si se busca el orden de chalé de Oleiros al mismo nivel de equipamientos por habitante, o el precio bajo de Ferrol. Sada es villa de ría en franja media-alta.",
        "Tampoco si agosto junto al puerto debe ser silencioso: Fontán y Gandarío reciben temporada.",
      ],
      veredicto:
        "Veredicto: Sada es el equilibrio villa-puerto del arco este. Buscaría tres habitaciones caminables a paseo y comercio, fuera del tramo más ruidoso de Fontán en agosto. Se ganan ría templada y ciudad cerca; se acepta pagar más que en Bergondo o Miño.",
    },
    fotosAbrir: [
      { src: "/fotos/golfo-artabro-e-ferrol/sada-puerto.jpg", pie: "Puerto deportivo de Sada" },
    ],
    fotosHistoria: [
      { src: "/fotos/golfo-artabro-e-ferrol/sada-villa.jpg", pie: "Villa de Sada junto a la ría" },
      { src: "/fotos/golfo-artabro-e-ferrol/sada-fontan.jpg", pie: "Restos del castillo de Fontán en Sada" },
    ],
    fotosFuera: [
      { src: "/fotos/golfo-artabro-e-ferrol/sada-playa.jpg", pie: "Playa urbana de Sada, agua de ría" },
      { src: "/fotos/golfo-artabro-e-ferrol/sada-gandario.jpg", pie: "Gandarío, arenal cercano a Sada" },
    ],
    creditoFotos: credito,
  },

  bergondo: {
    escala: "Parroquias residenciales de ría",
    abrir: [
      "Bergondo reparte unos siete mil habitantes en parroquias residenciales y rurales junto a la ría de Betanzos. Gandarío —playa larga de ría con agua hacia 18-20 °C— y Pedrido quedan a unos cinco minutos; el pazo de Mariñán y el monasterio de San Salvador marcan el patrimonio; Betanzos, con casco histórico, está a unos diez minutos.",
      "Un martes de noviembre la vida es local y dispersa. Los servicios son 4/10 y la dependencia del coche, alta —alrededor de 8/10—: el súper completo, Betanzos o A Coruña organizan muchos recados. El CHUAC queda a unos veinte minutos; Alvedro, a unos quince. La fibra es parcial.",
      "En verano Gandarío y Pedrido reciben veraneo con tráfico y aparcamiento justo. Cerca, Betanzos celebra Os Caneiros —fiesta fluvial en el río Mandeo— con afluencia, música y cortes en fechas concretas. Quien viva hacia la orilla notará el volumen de agosto; hacia las parroquias interiores, el silencio vuelve antes.",
      "Bergondo no pretende ser villa completa: ofrece jardín, ría templada y calma a quince o veinte minutos de A Coruña. Encaja para quien acepte coche casi cada día.",
    ],
    tiempo: [
      "Bergondo registra unas 2.000 horas de sol y 50 días despejados, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.050 milímetros en unos 130 días. La niebla es media; el viento, bajo.",
      "El verano ronda 19 °C, fresco frente a Baleares. Gandarío y Pedrido tienen agua de ría de las más templadas de la tabla, hacia 18-20 °C: baño corto usable cuando el Atlántico de Ferrol o Riazor no invita.",
    ],
    historia: [
      "El pazo de Mariñán —casa solariega gallega de piedra con finca y jardines hacia la ría— es el emblema señorial de Bergondo. Se visita y se entiende como paisaje cuidado, no solo como monumento cerrado.",
      "El monasterio de San Salvador añade capa religiosa y de piedra. Betanzos, a diez minutos, aporta el casco histórico comarcal y Os Caneiros. La historia útil aquí es de ría residencial: pazo, monasterio y orilla, sin densidad urbana.",
    ],
    fuera: [
      "Gandarío es el arenal grande de diario: espacio, agua de ría y poca ola frente al océano abierto. Pedrido completa el baño a pocos minutos.",
      "Mariñán y el monasterio sirven para una tarde de patrimonio. Betanzos cubre casco y mesas; A Coruña, compras y hospital; las Fragas do Eume quedan hacia Pontedeume y Miño.",
    ],
    casa: [
      "Predominan casas con jardín y terreno en parroquias; hay poca obra nueva y fibra parcial que debe comprobarse en la dirección. Pesan humedad, acceso y distancia real a un súper.",
      "El precio medio ronda 1.700 €/m². Tres habitaciones en la franja asequible se sitúan alrededor de 199.000 euros. Una casa con terreno puede moverse aproximadamente entre 200.000 y cifras altas según reforma y parcela.",
      "Los servicios son 4/10. El CHUAC queda a unos veinte minutos. Alvedro está a unos quince; Santiago-Lavacolla, a unos cuarenta y cinco o cincuenta.",
    ],
    encaja: {
      si: [
        "Encaja si se quiere casa con jardín en zona rural-residencial tranquila, con Gandarío a cinco minutos y A Coruña a quince o veinte. El precio baja respecto a Oleiros y Sada.",
        "También encaja para quien valore pazo, monasterio y Betanzos cerca, y acepte coche y servicios mínimos en el municipio.",
      ],
      no: [
        "No encaja si la semana debe hacerse andando o si la fibra estable es imprescindible. Sada y Oleiros cubren esa prioridad.",
        "Tampoco si se busca villa con puerto denso o ciudad naval. Bergondo es parroquia y ría, no capital.",
      ],
      veredicto:
        "Veredicto: Bergondo es la apuesta jardín-ría del arco. Buscaría casa con terreno lejos del tramo más ocupado de Gandarío en agosto, con fibra comprobada y acceso claro en invierno. Se ganan calma y agua templada; se acepta coche y servicios 4/10.",
    },
    fotosAbrir: [
      { src: "/fotos/golfo-artabro-e-ferrol/bergondo-marinan.jpg", pie: "Pazo de Mariñán hacia la ría" },
      { src: "/fotos/golfo-artabro-e-ferrol/bergondo-gandario.jpg", pie: "Gandarío, playa larga de ría en Bergondo" },
    ],
    fotosHistoria: [
      { src: "/fotos/golfo-artabro-e-ferrol/bergondo-pazo.jpg", pie: "Jardines y piedra del pazo de Mariñán" },
      { src: "/fotos/golfo-artabro-e-ferrol/bergondo-monasterio.jpg", pie: "Monasterio de San Salvador de Bergondo" },
    ],
    fotosFuera: [
      { src: "/fotos/golfo-artabro-e-ferrol/bergondo-pedrido.jpg", pie: "Pedrido, orilla de ría" },
      { src: "/fotos/golfo-artabro-e-ferrol/bergondo-ria.jpg", pie: "Ría de Betanzos desde Bergondo" },
    ],
    creditoFotos: credito,
  },

  mino: {
    escala: "Praia Grande y parroquias",
    abrir: [
      "Miño reúne unos seis mil habitantes entre la Praia Grande —más de un kilómetro de arena con dunas y paseo—, Perbes y la urbanización Costa Miño: casas bajas y campo de golf construidos en los años 2000. Pontedeume, villa histórica, y las Fragas do Eume —bosque atlántico y parque natural— quedan a cinco o quince minutos.",
      "Un martes de noviembre los servicios son 4/10 y la fibra, parcial: el coche organiza compra, salud y ocio hacia Pontedeume o A Coruña. El CHUAC queda a unos veinte minutos; Alvedro, a unos treinta. El invierno baja el volumen en la urbanización y en la playa.",
      "En verano Praia Grande y Costa Miño reciben veraneo, tráfico hacia el arenal y ocupación en el entorno del golf. Las fiestas locales y las noches de terraza animan el núcleo; quien viva junto a la playa grande notará aparcamiento y ruido en fechas concretas. Tierra adentro, hacia las parroquias, el silencio vuelve antes.",
      "Miño ofrece el modelo urbanización-playa a precio más razonable que Oleiros, a cambio de servicios mínimos en el municipio. Encaja para quien quiera arena larga y golf con A Coruña a unos veinticinco o treinta minutos.",
    ],
    tiempo: [
      "Miño suma unas 2.000 horas de sol y 50 días despejados, lejos de las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.050 milímetros en unos 130 días. Viento y niebla son bajos frente a Ferrol.",
      "El verano ronda 19 °C, suave frente a Baleares. Praia Grande y Perbes permiten baño de ría-costa; el agua es más usable que Doniños, aunque sigue fresca. Las Fragas do Eume dan sombra de bosque cuando aprieta el sol en la playa.",
    ],
    historia: [
      "Costa Miño es el relato reciente: urbanización de casas bajas y golf pensada para residencia y veraneo, no un casco medieval. Praia Grande organiza el tiempo libre desde que el municipio miró a la orilla como activo principal.",
      "Pontedeume y las Fragas do Eume —a quince minutos— añaden la capa antigua y natural: villa de piedra y bosque atlántico de roble y ribera. El tren de cercanías enlaza con A Coruña y da una alternativa parcial al coche en algunos trayectos.",
    ],
    fuera: [
      "Praia Grande es el arenal de diario: dunas, paseo y espacio. Perbes completa opciones más recogidas. El campo de golf de Costa Miño marca el ocio de la urbanización.",
      "Las Fragas do Eume ofrecen rutas de bosque a un trayecto corto. Pontedeume cubre villa y mesas; A Coruña, hospital y compras; Betanzos y Gandarío quedan hacia el oeste de la ría.",
    ],
    casa: [
      "Predominan casas en Costa Miño y viviendas en parroquias; hay poca obra nueva y fibra parcial. Pesan humedad, ocupación de verano junto a la playa y distancia real a un súper.",
      "El precio medio ronda 1.600 €/m². Tres habitaciones en la franja asequible se sitúan alrededor de 187.000 euros. Una casa en Costa Miño puede moverse aproximadamente entre 200.000 y 280.000 según reforma, parcela y vistas.",
      "Los servicios son 4/10. El CHUAC queda a unos veinte minutos. Alvedro está a unos treinta; Santiago-Lavacolla, a unos cincuenta.",
    ],
    encaja: {
      si: [
        "Encaja si se quiere urbanización con golf y Praia Grande a precio más razonable que Oleiros, aceptando servicios mínimos y coche. Las Fragas do Eume amplían el tiempo libre hacia el bosque.",
        "También encaja para quien valore Pontedeume cerca y A Coruña a media hora, sin pagar el metro de Santa Cruz o Mera.",
      ],
      no: [
        "No encaja si la vida diaria debe resolverse andando o si el invierno exige comercio denso en el municipio. Oleiros y Sada cubren esa prioridad.",
        "Tampoco si se busca ciudad naval o aldea de colores como Redes. Miño es playa grande y parroquia, no Ferrol ni Ares.",
      ],
      veredicto:
        "Veredicto: Miño es la apuesta Praia Grande-golf del golfo. Buscaría casa en Costa Miño o cerca del arenal, con fibra comprobada, tras probar un martes de noviembre. Se ganan arena y precio más amable; se aceptan servicios 4/10 y coche.",
    },
    fotosAbrir: [
      { src: "/fotos/golfo-artabro-e-ferrol/mino-praia-grande.jpg", pie: "Praia Grande de Miño: arena y dunas" },
      { src: "/fotos/golfo-artabro-e-ferrol/mino-villa.jpg", pie: "Castro de Loios, patrimonio junto a Miño" },
    ],
    fotosHistoria: [
      { src: "/fotos/golfo-artabro-e-ferrol/mino-costa.jpg", pie: "Costa Miño: urbanización y costa" },
      { src: "/fotos/golfo-artabro-e-ferrol/mino-tren.jpg", pie: "Tren de cercanías en el entorno de Miño" },
    ],
    fotosFuera: [
      { src: "/fotos/golfo-artabro-e-ferrol/mino-perbes.jpg", pie: "Perbes, playa recogida de Miño" },
      { src: "/fotos/golfo-artabro-e-ferrol/mino-eume.jpg", pie: "Fragas do Eume, bosque atlántico cercano" },
    ],
    creditoFotos: credito,
  },

  ares: {
    escala: "Villa de ría y Redes",
    abrir: [
      "Ares reúne unos seis mil habitantes en la ría de Ares: villa pequeña con playa urbana, y Redes —aldea marinera de casas de colores, una de las más fotografiadas de Galicia—. Seselle y Chanteiro miran hacia A Coruña. Mugardos, villa vecina de la misma ría, completa el paisaje de orilla.",
      "Un martes de noviembre hay lo básico, pero los servicios rondan 5/10 y la fibra es parcial: el coche organiza muchos recados hacia Ferrol —a unos veinticinco minutos— o A Coruña —a unos treinta o cuarenta—. El hospital de referencia está en Ferrol; Alvedro, a unos cuarenta y cinco.",
      "En verano Redes, la playa urbana y Chanteiro reciben visitantes, tráfico estrecho y aparcamiento justo. Las fiestas locales animan la villa; vivir en Redes o junto a la orilla significa contar con días de gente y ruido en temporada. Fuera del núcleo marinero, el volumen baja.",
      "Ares no es capital ni urbanización completa: ofrece encanto de ría y aldea a cambio de depender de Ferrol o A Coruña para gran parte de la semana. Encaja para quien priorice paisaje sobre servicios.",
    ],
    tiempo: [
      "Ares registra unas 1.950 horas de sol y 50 días despejados, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.100 milímetros en unos 132 días. Viento y niebla son medios.",
      "El verano ronda 19 °C, suave frente a Baleares. La playa urbana, Seselle y Chanteiro permiten baño de ría; el agua es más abrigada que Doniños, aunque sigue fresca. Los días de cielo gris piden paciencia igual que en el resto del golfo.",
    ],
    historia: [
      "Redes es el relato visual del municipio: casas de colores pegadas a la orilla, escala de aldea marinera y un paseo que se entiende sin explicación larga. Creció con el oficio del mar en la ría de Ares, no con ensanche moderno.",
      "La villa de Ares y las playas de Seselle y Chanteiro —frente a la silueta de A Coruña— completan un mapa de ría trabajada y residencial. La historia útil es la de una orilla pequeña que conserva carácter cuando Oleiros apuesta por la urbanización.",
    ],
    fuera: [
      "La playa urbana de Ares es el baño de diario; Seselle y Chanteiro amplían arena con vistas a la ciudad. Redes se recorre a pie: puerto mínimo, color y orilla.",
      "Ferrol cubre hospital, comercio denso y playas atlánticas; A Coruña, capital y CHUAC. Mugardos permite otra tarde de ría vecina.",
    ],
    casa: [
      "Hay viviendas en la villa, en Redes y en parroquias; poca obra nueva y fibra parcial. En Redes pesan humedad, acceso estrecho y ocupación de verano; en el resto, distancia real a un súper.",
      "El precio medio ronda 1.500 €/m². Tres habitaciones en la franja asequible se sitúan alrededor de 176.000 euros. El estado de la reforma y las vistas a la ría mueven el precio final.",
      "Los servicios son 5/10. El Arquitecto Marcide y el Juan Cardona, en Ferrol, quedan a unos veinticinco minutos. Alvedro está a unos cuarenta y cinco; Santiago-Lavacolla, a unos sesenta y cinco o setenta y cinco.",
    ],
    encaja: {
      si: [
        "Encaja si se quiere aldea de ría con encanto —Redes— y playas frente a A Coruña, aceptando coche y tener gran parte de la vida en Ferrol o en la capital.",
        "También encaja para quien priorice paisaje y precio más amable que Oleiros o Sada, y acepte servicios limitados en el municipio.",
      ],
      no: [
        "No encaja si hospital, súper grande y aeropuerto deben quedar a quince minutos. Ferrol y A Coruña están a media hora o más.",
        "Tampoco si se busca urbanización ordenada tipo Mera o Costa Miño. Ares es villa pequeña y aldea marinera, no corona residencial.",
      ],
      veredicto:
        "Veredicto: Ares es la apuesta Redes-ría del golfo. Buscaría vivienda fuera del cuello de botella de Redes en agosto, con fibra comprobada, tras probar un invierno húmedo. Se ganan color y orilla; se aceptan coche, hospital en Ferrol y aeropuerto lejos.",
    },
    fotosAbrir: [
      { src: "/fotos/golfo-artabro-e-ferrol/ares-redes.jpg", pie: "Casa modernista en Redes, aldea de Ares" },
      { src: "/fotos/golfo-artabro-e-ferrol/ares-villa-ria.jpg", pie: "Ares frente a su ría, villa y orilla" },
    ],
    fotosHistoria: [
      { src: "/fotos/golfo-artabro-e-ferrol/ares-seselle.jpg", pie: "Seselle, orilla frente a A Coruña" },
      { src: "/fotos/golfo-artabro-e-ferrol/ares-chanteiro.jpg", pie: "Chanteiro, playa de la ría de Ares" },
    ],
    fotosFuera: [
      { src: "/fotos/golfo-artabro-e-ferrol/ares-playa.jpg", pie: "Playa urbana de Ares" },
      { src: "/fotos/golfo-artabro-e-ferrol/ares-ria.jpg", pie: "Ría de Ares desde la orilla" },
    ],
    creditoFotos: credito,
  },

  ferrol: {
    escala: "Ciudad naval",
    abrir: [
      "Ferrol reúne unos sesenta y cuatro mil habitantes —fueron cerca de noventa mil— en una ciudad ilustrada de arsenal y astilleros: el barrio de la Magdalena, el arsenal militar, Navantia, el castillo de San Felipe y, a quince minutos, las playas atlánticas de Doniños y San Xurxo. Cabo Prior cierra el horizonte bravo. Es ciudad naval en declive demográfico y comercial, con sanidad a pie.",
      "Un martes de noviembre se puede ir andando a comercio, centro de salud y servicios urbanos. Los servicios alcanzan 9/10 sobre el papel, con tejido comercial en retroceso. El hospital público Arquitecto Marcide y el privado Juan Cardona quedan a unos cinco minutos. Alvedro está a unos treinta y cinco.",
      "La Semana Santa, de interés turístico, corta calles y concentra procesiones, ruido y gente en fechas concretas. El calendario naval y las fiestas locales marcan el año; en verano Doniños y San Xurxo reciben toallas y tráfico hacia la costa abierta. Una vivienda en el centro o junto al recorrido procesional debe probar ese tramo.",
      "Ferrol no es la urbanización limpia de Oleiros: es ciudad de trabajo naval, precio bajo y playas frías. Encaja solo si mandan metro asequible y hospital a pie, no el modelo residencial del arco este.",
    ],
    tiempo: [
      "Ferrol suma unas 1.950 horas de sol y 45 días despejados, el extremo más gris de la zona frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.100 milímetros en unos 132 días. Niebla y viento son medios.",
      "El verano ronda 19 °C, fresco frente a Baleares. Doniños, San Xurxo y A Frouxeira —hacia Valdoviño— tienen agua atlántica entre 16 y 18 °C, con oleaje: de las playas más frías y bravas de la tabla.",
    ],
    historia: [
      "El barrio de la Magdalena es el ensanche ilustrado: calles rectas, plazas y una ciudad pensada junto al arsenal. El arsenal y los astilleros —hoy Navantia— organizaron empleo, población y carácter durante siglos; el declive industrial explica parte del vaciado demográfico.",
      "El castillo de San Felipe custodia la boca de la ría; Cabo Prior y Prioriño miran al Atlántico abierto. La Semana Santa ferrolana añade capa cultural de interés turístico. La historia útil es naval y urbana, no de villa marinera pequeña.",
    ],
    fuera: [
      "Doniños ofrece arenal, laguna y oleaje; San Xurxo continúa la costa brava. El agua es fría; los días de mar llana invitan al baño, los de nortada, al paseo.",
      "San Felipe y Cabo Prior son las salidas de patrimonio y horizonte. A Coruña queda a unos cuarenta minutos; Ares y Redes, a un trayecto corto hacia el sur de la ría.",
    ],
    casa: [
      "El ensanche y la Magdalena ofrecen pisos; las afueras, viviendas con más espacio. Hay fibra; la obra nueva es limitada. En el centro importan calle, revalorización y comercio cercano; hacia la costa, viento y salitre.",
      "El precio medio ronda 1.200 €/m², el más bajo de la zona. Tres habitaciones en la franja asequible se sitúan alrededor de 140.000 euros. La facilidad de revalorización es de las más bajas de la tabla: conviene elegir calle con cuidado.",
      "Los servicios son 9/10 sobre el papel. Hospital público y privado quedan a unos cinco minutos. Alvedro está a unos treinta y cinco; Santiago-Lavacolla, a unos sesenta y cinco o setenta y cinco.",
    ],
    encaja: {
      si: [
        "Encaja si precio bajo y sanidad a pie pesan más que urbanización ordenada o revalorización. La Magdalena, el arsenal y Doniños dan ciudad y Atlántico sin el metro de Oleiros.",
        "También encaja para quien acepte una ciudad en declive comercial a cambio de hospital a cinco minutos y playas bravas cerca.",
      ],
      no: [
        "No encaja si se busca el modelo residencial de Mera, Santa Cruz o Costa Miño, o un mercado inmobiliario al alza. Ferrol gana por precio, no por ese perfil.",
        "Tampoco si el baño de diario debe ser agua de ría templada: Gandarío y Sada están en otro registro; aquí el Atlántico frío manda.",
      ],
      veredicto:
        "Veredicto: Ferrol es la elección de precio y hospital del norte del golfo. Buscaría piso en la Magdalena o ensanche, fuera del recorrido más ruidoso de Semana Santa, tras comprobar calle y entorno comercial. Se ganan sanidad a pie y metro bajo; se aceptan playas frías, cielo gris y una ciudad en declive.",
    },
    fotosAbrir: [
      { src: "/fotos/golfo-artabro-e-ferrol/ferrol-magdalena.jpg", pie: "Barrio de la Magdalena, ensanche ilustrado" },
      { src: "/fotos/golfo-artabro-e-ferrol/ferrol-arsenal.jpg", pie: "Arsenal y carácter naval de Ferrol" },
    ],
    fotosHistoria: [
      { src: "/fotos/golfo-artabro-e-ferrol/ferrol-san-felipe.jpg", pie: "Castillo de San Felipe en la boca de la ría" },
      { src: "/fotos/golfo-artabro-e-ferrol/ferrol-prior.jpg", pie: "Cabo Prior, horizonte atlántico" },
    ],
    fotosFuera: [
      { src: "/fotos/golfo-artabro-e-ferrol/ferrol-doninos.jpg", pie: "Doniños: playa, laguna y oleaje" },
      { src: "/fotos/golfo-artabro-e-ferrol/ferrol-san-xurxo.jpg", pie: "San Xurxo, arenal atlántico cerca de Ferrol" },
    ],
    creditoFotos: credito,
  },
};
