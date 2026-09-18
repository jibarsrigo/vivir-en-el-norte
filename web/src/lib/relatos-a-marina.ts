import type { RelatoMun } from "@/components/RelatoMunicipio";

const credito = "Fotos: Wikimedia Commons (licencias indicadas en los archivos de origen).";

export const RELATOS_A_MARINA: Record<string, RelatoMun> = {
  "o-vicedo": {
    escala: "Villa marinera atlántica",
    abrir: [
      "O Vicedo reúne unos mil setecientos habitantes en el extremo oeste de A Mariña, junto a la ría do Barqueiro —la lámina de agua que separa Lugo de A Coruña en esta punta—. Xilloi, Arealonga y Vidreiro son las playas; Fuciño do Porco —pasarelas sobre el acantilado— y Estaca de Bares, a unos veinte minutos, cierran el horizonte más atlántico de la comarca.",
      "Un martes de noviembre la vida es mínima. Los servicios son 2/10 —los más bajos de la tabla— y la dependencia del coche ronda 9/10: el súper completo, Viveiro o Burela organizan muchos recados. El Hospital da Mariña, en Burela, queda a unos treinta y cinco minutos. El aeropuerto más usable anda alrededor de los cien minutos.",
      "En verano las playas y Fuciño do Porco reciben visitantes, tráfico estrecho y aparcamiento justo en los días claros. No hay una fiesta mayor de interés turístico que corte el casco como en Viveiro; el volumen viene del veraneo y de quien busca costa abierta. Quien viva junto a la orilla notará agosto; hacia el interior, el silencio vuelve antes.",
      "Fuera de temporada O Vicedo es retiro aislado junto al mar: pocas mesas, poco comercio y mucho Cantábrico. Encaja solo para quien priorice precio y paisaje frente a servicios y aeropuerto.",
    ],
    tiempo: [
      "O Vicedo suma unas 1.850 horas de sol y 40 días despejados, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.150 milímetros en unos 150 días. La niebla es alta; el viento, medio. También en verano llueve con frecuencia.",
      "El verano ronda 18 °C, el más fresco de la zona, con máximas habituales alrededor de 22 °C y casi ningún día sobre 30 °C. El agua anda entre 17 y 19 °C; el mar abierto es bravo. Las playas invitan más al paseo que al baño largo cuando sopla el Cantábrico.",
    ],
    historia: [
      "La ría do Barqueiro y el oficio del mar explican O Vicedo mejor que un casco monumental: villa marinera pequeña en el extremo lucense, con la mirada puesta en acantilados y arenales. Fuciño do Porco convierte el acantilado en paseo contemporáneo sobre pasarelas.",
      "Estaca de Bares —el punto más septentrional de la península Ibérica, a unos veinte minutos— añade capa geográfica: faro, viento y migración de aves. La historia útil aquí es de costa extrema, no de villa amurallada ni de frontera indiana.",
    ],
    fuera: [
      "Xilloi, Arealonga y Vidreiro son las orillas de diario: arena, oleaje y agua fresca. Fuciño do Porco permite caminar el acantilado sin perder el horizonte.",
      "Estaca de Bares amplía la tarde hacia el cabo. Viveiro, a un trayecto corto hacia el este, cubre casco, comercio y ría abrigada cuando el Atlántico no invita.",
    ],
    casa: [
      "Predominan viviendas modestas y casas hacia las parroquias; hay poca o ninguna obra nueva y fibra parcial que debe comprobarse. Pesan humedad, viento, acceso y distancia real a un súper.",
      "El precio medio ronda 900 €/m², el más bajo de la zona. Tres habitaciones en la franja asequible se sitúan alrededor de 105.000 euros. El estado de la reforma y las vistas al mar mueven el precio final.",
      "Los servicios son 2/10. El Hospital da Mariña queda a unos treinta y cinco minutos. Asturias, A Coruña o Santiago andan alrededor de los cien minutos según ruta.",
    ],
    encaja: {
      si: [
        "Encaja si se busca el precio más bajo de A Mariña con Cantábrico delante y se acepta aislamiento: coche casi cada día, servicios mínimos y aeropuerto lejos.",
        "También encaja para quien valore Fuciño do Porco y Estaca de Bares cerca, y no necesite villa completa ni hospital a media hora.",
      ],
      no: [
        "No encaja si la semana debe resolverse andando o si el hospital y el aeropuerto deben quedar cerca. Viveiro, Burela o Ribadeo cubren esa prioridad.",
        "Tampoco si se necesita cielo estable tipo Baleares: aquí mandan niebla, cubierto y verano fresco extremo.",
      ],
      veredicto:
        "Veredicto: O Vicedo es el extremo aislado de A Mariña. Buscaría vivienda con fibra comprobada y acceso claro en invierno, lejos del cuello de botella de agosto en las playas. Se ganan precio y costa atlántica; se aceptan servicios 2/10, hospital a treinta y cinco minutos y cielo gris.",
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
  },

  viveiro: {
    escala: "Villa de ría con casco",
    abrir: [
      "Viveiro reúne unos quince mil habitantes en la Mariña occidental: casco amurallado con la Porta de Carlos V —arco renacentista de entrada—, puerto de Celeiro —referencia de merluza del pincho—, ría abrigada y la playa de Covas, larga y urbana. Es la única opción con vida propia todo el año en este tramo oeste de la comarca.",
      "Un martes de noviembre se compra, se va al centro de salud y se camina el casco sin depender de Burela para lo diario. Los servicios alcanzan 6/10. El Hospital da Mariña queda a unos veinticinco minutos. El aeropuerto anda alrededor de los cien minutos —Santiago o Asturias según vuelo—.",
      "La Semana Santa, declarada de interés turístico internacional, corta calles, concentra procesiones, ruido y mucha gente durante varios días: quien viva en el casco debe contar con afluencia y aparcamiento difícil en esas fechas. En agosto Covas y el paseo reciben veraneo; el volumen sube, pero no apaga la villa de trabajo.",
      "El resto del año Viveiro es villa de pesca, comercio y ría: mesas abiertas, lonja y tren de vía estrecha hacia Ferrol y Oviedo. Encaja para quien quiera casco y vida local, y acepte cielo de Mariña y aeropuerto lejos.",
    ],
    tiempo: [
      "Viveiro suma unas 1.850 horas de sol y 40 días despejados, lejos de las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.150 milímetros en unos 150 días. Niebla alta; viento medio. La llovizna también aparece en verano.",
      "El verano ronda 18,5 °C, con máximas alrededor de 22 °C y casi ningún día sobre 30 °C. Covas tiene agua de ría más usable que el Cantábrico abierto —hacia 17-19 °C—: baño corto calmado cuando el océano no invita.",
    ],
    historia: [
      "La Porta de Carlos V y el recinto amurallado explican Viveiro como villa histórica, no solo como puerto: piedra, arco y calles que concentran el casco. Celeiro sostiene el relato marinero con la merluza del pincho y la lonja.",
      "El Souto da Retorta —eucaliptos gigantes— y el Monte San Roque —mirador— añaden capa de monte cercano. La Semana Santa de interés turístico internacional es el hilo cultural que más impacta al vivir: procesiones y ciudad ocupada en fechas concretas.",
    ],
    fuera: [
      "Covas es la playa de diario: arena larga en ría abrigada. Area y Sacido completan opciones. Celeiro permite una tarde de puerto de trabajo.",
      "El Souto da Retorta y San Roque dan paseo y vistas. Burela cubre hospital; As Catedrais y Ribadeo quedan hacia el este en un trayecto más largo.",
    ],
    casa: [
      "El casco ofrece pisos y viviendas de piedra; hacia Covas y las afueras, tipologías más abiertas. Hay poca obra nueva y fibra. En el casco pesan Semana Santa y humedad; junto a Covas, ocupación de agosto y salitre suave de ría.",
      "El precio medio ronda 1.250 €/m². Tres habitaciones en la franja asequible se sitúan alrededor de 146.000 euros. La franja media puede ser piso reformado en casco o vivienda con más espacio hacia la orilla.",
      "Los servicios son 6/10. El Hospital da Mariña queda a unos veinticinco minutos. Santiago-Lavacolla, con Palma casi todo el año, anda alrededor de los cien minutos.",
    ],
    encaja: {
      si: [
        "Encaja si se quiere la villa con vida todo el año en la Mariña occidental: casco, Covas, Celeiro y servicios 6/10, a precio todavía muy asequible frente a las Rías Baixas.",
        "También encaja para quien acepte Semana Santa intensa en el casco y aeropuerto a unos cien minutos a cambio de ría abrigada y mesas abiertas en enero.",
      ],
      no: [
        "No encaja si el hospital debe quedar a pie o el aeropuerto a una hora. Burela cubre sanidad; Ribadeo, Asturias a sesenta minutos.",
        "Tampoco si se necesita el cielo de Baleares o una ciudad a menos de una hora. Aquí mandan niebla, cubierto y Lugo a más de una hora.",
      ],
      veredicto:
        "Veredicto: Viveiro es la apuesta villa-casco del oeste de A Mariña. Buscaría tres habitaciones caminables a comercio y Covas, fuera del tramo más ruidoso de Semana Santa, tras probar un noviembre de niebla. Se ganan vida local y ría; se aceptan aeropuerto lejos y verano fresco.",
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
  },

  xove: {
    escala: "Costa y parroquias",
    abrir: [
      "Xove reparte unos tres mil trescientos habitantes entre costa y parroquias en A Mariña. Esteiro —playa de arcos de roca y surf— y Portocelo marcan la orilla; tierra adentro el hábitat se dispersa. En el término pesa la planta de Alcoa en San Cibrao —aluminio—, con la incertidumbre laboral que arrastra la industria.",
      "Un martes de noviembre los servicios son 3/10: el coche organiza compra, salud y ocio hacia Burela o Viveiro. El Hospital da Mariña queda a unos veinte minutos. El aeropuerto anda alrededor de los noventa o ciento cinco minutos según destino.",
      "En verano Esteiro y Portocelo reciben surfistas, toallas y tráfico hacia la costa. No hay una fiesta de interés turístico internacional que corte un casco denso: el volumen es de playa y temporada. Quien viva junto a la orilla notará agosto; hacia las parroquias, el silencio vuelve antes.",
      "Xove no pretende ser villa completa: ofrece costa cantábrica y precio bajo a cambio de coche y servicios mínimos. Encaja poco para quien busque vida diaria densa.",
    ],
    tiempo: [
      "Xove registra unas 1.850 horas de sol y 40 días despejados, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.100 milímetros en unos 148 días. Niebla alta; viento medio.",
      "El verano ronda 18,5 °C, fresco frente a Baleares. Esteiro tiene agua entre 17 y 19 °C, con más oleaje que Covas: playa de arcos y surf más que de baño calmado de ría.",
    ],
    historia: [
      "Esteiro —con sus arcos de roca— es el relato visual del municipio: costa trabajada por el mar, no un casco monumental. Portocelo completa la orilla de oficio y veraneo ligero.",
      "La planta de Alcoa en San Cibrao —compartida en el paisaje industrial con Cervo— explica empleo, población y tensión económica reciente. La historia útil aquí es industrial y costera, no de villa amurallada.",
    ],
    fuera: [
      "Esteiro es la playa de carácter: arcos, surf y Cantábrico abierto. Portocelo ofrece otra orilla a pocos minutos.",
      "Burela cubre hospital y lonja; Viveiro, casco y Covas; Cervo, Sargadelos y San Cibrao. As Catedrais quedan más al este.",
    ],
    casa: [
      "Predominan viviendas en parroquias y cerca de la costa; hay poca obra nueva y fibra parcial. Pesan humedad, viento, acceso y distancia real a un súper.",
      "El precio medio ronda 950 €/m², de los más bajos de la zona. Tres habitaciones en tipologías modestas quedan en franja muy asequible; el estado de la reforma pesa más que una media única.",
      "Los servicios son 3/10. El Hospital da Mariña queda a unos veinte minutos. Asturias anda alrededor de los noventa y cinco minutos; Santiago, hacia los ciento cinco.",
    ],
    encaja: {
      si: [
        "Encaja si se quiere costa de arcos y surf a precio muy bajo, aceptando coche, servicios 3/10 y un invierno vacío fuera de la orilla.",
        "También encaja para quien tenga Burela o Viveiro cerca como villa de apoyo y no necesite casco propio denso.",
      ],
      no: [
        "No encaja si se busca villa caminable con mercado y vida todo el año. Viveiro y Ribadeo cubren ese perfil.",
        "Tampoco si la industria cercana o la incertidumbre de Alcoa pesan en la decisión de vivir: el paisaje laboral es parte del municipio.",
      ],
      veredicto:
        "Veredicto: Xove es costa y parroquias, no villa completa. Buscaría vivienda con acceso claro y fibra comprobada, lejos del tramo más ocupado de Esteiro en agosto. Se ganan precio y Cantábrico; se aceptan coche, servicios mínimos y cielo gris.",
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
  },

  cervo: {
    escala: "Costa y cerámica",
    abrir: [
      "Cervo reúne unos cuatro mil habitantes entre San Cibrao —península con puerto, Museo Provincial do Mar, playas de Cubelas y O Torno— y Sargadelos, la referencia de cerámica gallega junto a la ruta del río Xunco. Es costa e industria: Alcoa en el paisaje, hospital cerca y casco menos denso que Viveiro o Ribadeo.",
      "Un martes de noviembre los servicios son 4/10: lo básico en el municipio; Burela, a unos diez minutos, completa comercio y hospital. El Hospital da Mariña queda a unos diez minutos —de los mejores tiempos de la zona—. El aeropuerto anda alrededor de los noventa o ciento cinco minutos.",
      "En verano San Cibrao y las playas reciben veraneo con tráfico hacia Cubelas y O Torno. El calendario local anima la costa; no rivaliza con la Semana Santa de Viveiro en impacto sobre un casco histórico. Quien viva en la península notará agosto; hacia Sargadelos y el interior, el volumen baja.",
      "Cervo encaja sobre todo por San Cibrao y la cercanía al hospital, no por villa completa ni aeropuerto cercano.",
    ],
    tiempo: [
      "Cervo suma unas 1.880 horas de sol y 40 días despejados, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.050 milímetros en unos 146 días. Niebla alta; viento medio.",
      "El verano ronda 18,5 °C, fresco frente a Baleares. Cubelas y O Torno tienen agua entre 17 y 19 °C; el Cantábrico abierto pide días de mar llana para un baño cómodo.",
    ],
    historia: [
      "Sargadelos es el hilo cultural del municipio: la Real Fábrica y la cerámica gallega de diseño reconocible, con la ruta del río Xunco y el Paseo dos Namorados. No es un adorno: es la marca que saca a Cervo del mapa solo industrial.",
      "San Cibrao aporta puerto, Museo Provincial do Mar y la península habitada frente al Cantábrico. Alcoa explica la capa laboral reciente. La historia útil junta cerámica, mar e industria.",
    ],
    fuera: [
      "Cubelas y O Torno son las playas de la península. El museo y el puerto de San Cibrao permiten una tarde sin salir lejos.",
      "Sargadelos y la ruta del Xunco dan paseo y visita. Burela cubre hospital a diez minutos; Viveiro, casco y Covas; Esteiro, en Xove, arcos y surf.",
    ],
    casa: [
      "Hay viviendas en San Cibrao, en el entorno de Sargadelos y en parroquias; poca obra nueva y fibra parcial. En la península pesan salitre y ocupación de verano; hacia el interior, acceso y humedad.",
      "El precio medio ronda 1.000 €/m². Tres habitaciones en tipologías modestas quedan en franja asequible; reforma y vistas al mar mueven el precio.",
      "Los servicios son 4/10. El Hospital da Mariña queda a unos diez minutos. Asturias anda alrededor de los noventa minutos; Santiago, hacia los ciento cinco.",
    ],
    encaja: {
      si: [
        "Encaja si mandan San Cibrao, Sargadelos y el hospital a unos diez minutos, con precio bajo y costa delante.",
        "También encaja para quien acepte servicios 4/10 y coche para muchos recados a cambio de no vivir tan lejos del comarcal como en O Vicedo o Ribadeo.",
      ],
      no: [
        "No encaja si se busca casco amurallado o villa de frontera completa. Viveiro y Ribadeo cubren ese carácter.",
        "Tampoco si el aeropuerto debe quedar a una hora o si la industria cercana molesta: aquí Alcoa forma parte del paisaje.",
      ],
      veredicto:
        "Veredicto: Cervo es costa, cerámica y hospital cerca. Buscaría vivienda en San Cibrao o cerca de Sargadelos, con fibra comprobada, tras probar un agosto en la península. Se ganan Cubelas, Sargadelos y Burela a diez minutos; se aceptan servicios limitados y cielo de Mariña.",
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
  },

  burela: {
    escala: "Villa portuaria pesquera",
    abrir: [
      "Burela reúne unos nueve mil habitantes en una villa de servicios sin casco histórico monumental: puerto del bonito del norte, lonja, hospital comarcal a pie y playas A Marosa y Ril. Es la capital sanitaria de A Mariña y una de las villas con vida de trabajo todo el año.",
      "Un martes de noviembre se resuelve comercio, centro de salud y recados básicos en el municipio. Los servicios alcanzan 6/10. El Hospital da Mariña queda a unos cinco minutos. El aeropuerto de Asturias anda alrededor de los ochenta y cinco minutos; Santiago, hacia los ciento diez.",
      "En verano A Marosa y Ril reciben toallas y tráfico hacia la orilla. El calendario de villa portuaria y el veraneo animan el paseo; no hay una Semana Santa de impacto internacional como en Viveiro. Vivir junto a la playa o al puerto significa contar con más volumen en agosto; tierra adentro, el ritmo de trabajo pesquero sigue.",
      "Burela encaja para quien priorice hospital a pie y puerto real, no piedra antigua ni As Catedrais a cinco minutos.",
    ],
    tiempo: [
      "Burela suma unas 1.900 horas de sol y 40 días despejados, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.000 milímetros en unos 145 días. Niebla alta; viento medio.",
      "El verano ronda 18,5 °C, fresco frente a Baleares. A Marosa y Ril tienen agua entre 17 y 19 °C; el Cantábrico pide días buenos para baño. Foz, a un trayecto corto, ofrece ría más abrigada.",
    ],
    historia: [
      "El puerto y el bonito del norte explican Burela: villa crecida con la pesca, no con un recinto amurallado. La lonja y la flota son el relato útil; hay una comunidad caboverdiana histórica ligada al oficio del mar.",
      "El Hospital da Mariña convierte el municipio en referencia comarcal. Cabo Burela añade horizonte costero. La historia contemporánea es de trabajo marítimo y servicios, no de indianos ni de arcos de Semana Santa.",
    ],
    fuera: [
      "A Marosa y Ril son las playas de diario. El paseo y el puerto permiten una tarde de villa pesquera sin coche.",
      "Foz amplía ría y A Rapadoira; Cervo, Sargadelos y San Cibrao; Viveiro, casco y Covas. As Catedrais quedan hacia Barreiros y Ribadeo.",
    ],
    casa: [
      "Predominan pisos y viviendas de villa funcional; hay poca obra nueva y fibra. Junto a la orilla pesan salitre y agosto; cerca del puerto, ruido de actividad pesquera.",
      "El precio medio ronda 1.200 €/m². Tres habitaciones en la franja asequible se sitúan alrededor de 140.000 euros. La franja media es piso ampliado o vivienda con mejor orientación; el estado pesa.",
      "Los servicios son 6/10. El hospital queda a unos cinco minutos. Asturias está a unos ochenta y cinco; Santiago-Lavacolla, hacia los ciento diez.",
    ],
    encaja: {
      si: [
        "Encaja si el hospital a pie manda en A Mariña y se acepta una villa portuaria sin casco histórico, con lonja, bonito y precio asequible.",
        "También encaja para quien quiera servicios 6/10 y playa cerca, sin pagar el metro de las Rías Baixas ni depender de un pueblo vacío en invierno.",
      ],
      no: [
        "No encaja si se busca piedra amurallada, frontera indiana o As Catedrais a cinco minutos. Viveiro y Ribadeo cubren ese carácter.",
        "Tampoco si el cielo de Baleares o el aeropuerto a una hora son imprescindibles: aquí el verano es fresco y Asturias queda a unos ochenta y cinco minutos.",
      ],
      veredicto:
        "Veredicto: Burela es la apuesta hospital y puerto de A Mariña. Buscaría tres habitaciones caminables a servicios, fuera del tramo más expuesto al ruido del puerto si molesta, tras probar un noviembre húmedo. Se ganan sanidad a cinco minutos y vida pesquera; se aceptan casco poco monumental y aeropuerto lejos.",
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
  },

  foz: {
    escala: "Villa de ría y playa",
    abrir: [
      "Foz reúne unos diez mil habitantes en una villa de veraneo cantábrica con paseo, ría, playas urbanas —A Rapadoira— y abiertas —Llas, Peizás—. San Martiño de Mondoñedo, a unos cinco minutos, aporta la catedral más antigua de España en el relato cercano. Es villa tranquila y barata frente a Ribadeo o Viveiro.",
      "Un martes de noviembre el centro de salud, el súper y el comercio cubren la semana básica. Los servicios son 5/10. El Hospital da Mariña queda a unos veinte minutos. El aeropuerto de Asturias anda alrededor de los ochenta minutos; Santiago, hacia los ciento diez.",
      "En verano el paseo, A Rapadoira y las playas abiertas reciben veraneo gallego-castellano: tráfico, toallas y terrazas. El volumen sube sin alcanzar el cuello de botella de As Catedrais en los peores días. Vivir junto al paseo significa contar con semanas más ruidosas; hacia la marisma o el interior, el silencio vuelve antes.",
      "Fuera de agosto Foz recupera ritmo de villa calmada. Encaja para quien quiera ría y playa a precio asequible, sin necesitar el casco indiano de Ribadeo.",
    ],
    tiempo: [
      "Foz suma unas 1.900 horas de sol y 40 días despejados, lejos de las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.000 milímetros en unos 145 días. Niebla alta; viento medio.",
      "El verano ronda 18,5 °C, fresco frente a Baleares. La ría y A Rapadoira permiten baño más usable que el Cantábrico abierto; Llas y Peizás piden días de mar más llana. El agua anda entre 17 y 19 °C.",
    ],
    historia: [
      "San Martiño de Mondoñedo —a cinco minutos— es el hilo antiguo: catedral vieja, piedra y un relato eclesiástico que precede a la villa de veraneo. Mondoñedo, a unos veinte minutos, amplía la capa histórica del interior.",
      "Foz moderna creció con paseo, ría y temporada: villa cantábrica de ocio y residencia más que de puerto industrial. La marisma y el puente sobre la ría explican el paisaje cotidiano.",
    ],
    fuera: [
      "A Rapadoira es la playa urbana; Llas y Peizás abren arenales más expuestos. El paseo y la ría permiten kilómetros sin coche en días buenos.",
      "San Martiño de Mondoñedo cubre patrimonio cercano. Barreiros y As Catedrais quedan hacia el este; Burela, hospital y lonja hacia el oeste.",
    ],
    casa: [
      "El entorno del paseo ofrece pisos y viviendas de veraneo; las afueras, más parcela. Hay poca obra nueva y fibra. Junto a la orilla pesan ocupación de agosto y humedad; hacia la marisma, acceso y orientación.",
      "El precio medio ronda 1.300 €/m². Tres habitaciones en la franja asequible se sitúan alrededor de 152.000 euros. La franja media puede ser piso reformado cerca del paseo o vivienda con más espacio.",
      "Los servicios son 5/10. El Hospital da Mariña queda a unos veinte minutos. Asturias está a unos ochenta; Santiago-Lavacolla, hacia los ciento diez.",
    ],
    encaja: {
      si: [
        "Encaja si se quiere villa de ría y playa tranquila, con paseo, A Rapadoira y precio asequible, aceptando hospital a veinte minutos y cielo gris.",
        "También encaja para quien valore San Martiño de Mondoñedo cerca y un verano fresco frente al calor balear, sin necesitar Ribadeo o Viveiro.",
      ],
      no: [
        "No encaja si se busca casco indiano, Semana Santa de interés internacional o hospital a pie. Ribadeo, Viveiro y Burela cubren esas prioridades.",
        "Tampoco si agosto junto al paseo debe ser silencioso: Foz recibe veraneo en la orilla.",
      ],
      veredicto:
        "Veredicto: Foz es la villa de ría y playa equilibrada del centro-este de A Mariña. Buscaría tres habitaciones caminables a paseo y comercio, fuera del tramo más ocupado de A Rapadoira en agosto. Se ganan ría y precio; se aceptan aeropuerto a unos ochenta minutos y niebla frecuente.",
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
  },

  barreiros: {
    escala: "Playas y parroquias",
    abrir: [
      "Barreiros reparte unos tres mil habitantes en unos ocho kilómetros de playas —Arealonga, Altar, Coto, Remior— y parroquias con muchos bloques de apartamentos de los años 2000. As Catedrais quedan a unos cinco minutos. En invierno gran parte de esos bloques se vacían: es costa de segunda residencia más que villa de trabajo densa.",
      "Un martes de noviembre los servicios son 3/10 y la fibra, parcial: el coche organiza compra y ocio hacia Foz o Ribadeo. El Hospital da Mariña queda a unos veinticinco minutos. El aeropuerto de Asturias anda alrededor de los setenta minutos —de los mejores de la zona tras Ribadeo—.",
      "En verano las playas y As Catedrais concentran afluencia, tráfico y aparcamiento justo: el impacto de vivir aquí es el de temporada alta, no el de una Semana Santa urbana. Quien firme junto a la orilla debe probar agosto; tierra adentro, hacia las parroquias, el silencio vuelve antes.",
      "Barreiros encaja mal como vivienda de todo el año si se necesita comercio y vecinos en enero. Encaja mejor como orilla de playa con Ribadeo o Foz cerca.",
    ],
    tiempo: [
      "Barreiros registra unas 1.920 horas de sol y 40 días despejados, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.000 milímetros en unos 143 días. Niebla alta; viento medio.",
      "El verano ronda 18,5 °C, fresco frente a Baleares. Las playas tienen agua entre 17 y 19 °C; As Catedrais invitan más al paseo entre arcos que al baño largo cuando el Cantábrico está bravo.",
    ],
    historia: [
      "As Catedrais —aunque el acceso más famoso se asocie a Ribadeo— marcan el paisaje inmediato: arcos de piedra, marea y una de las costas más fotografiadas de Galicia. Barreiros vive a cinco minutos de ese magnetismo.",
      "El urbanismo de bloques de los 2000 explica el carácter de veraneo: plazas de aparcamiento, apartamentos y un invierno que deja calles quietas. Reinante y San Miguel son nombres de orilla y parroquia más que de casco histórico denso.",
    ],
    fuera: [
      "Arealonga, Altar, Coto y Remior ofrecen kilómetros de arena. As Catedrais, a cinco minutos, son el gran paseo de acantilado y playa.",
      "Foz cubre villa de ría; Ribadeo, casco indiano y A-8; Burela, hospital. El día a día pide coche casi siempre.",
    ],
    casa: [
      "Predominan apartamentos de veraneo y viviendas en parroquias; hay poca obra nueva y fibra parcial. Pesan ocupación de agosto, vacío de invierno, humedad y comunidad de vecinos estacional.",
      "El precio medio ronda 1.150 €/m². Tres habitaciones en tipologías de apartamento o vivienda modesta quedan en franja asequible; el estado y la orientación al mar mueven el precio.",
      "Los servicios son 3/10. El Hospital da Mariña queda a unos veinticinco minutos. Asturias está a unos setenta; Santiago-Lavacolla, hacia los ciento diez.",
    ],
    encaja: {
      si: [
        "Encaja si se busca playa larga y As Catedrais a cinco minutos, con Asturias a unos setenta, aceptando invierno vacío y coche para casi todo.",
        "También encaja como segunda residencia o para quien tenga Foz o Ribadeo como villa de apoyo semanal.",
      ],
      no: [
        "No encaja como vivienda de todo el año si se necesitan comercio denso, vecinos estables en enero y servicios 6/10. Viveiro, Burela y Ribadeo cubren esa prioridad.",
        "Tampoco si agosto junto a As Catedrais debe ser silencioso: la afluencia define la temporada.",
      ],
      veredicto:
        "Veredicto: Barreiros es playas y veraneo, no villa completa. Buscaría vivienda con fibra comprobada y acceso claro, lejos del cuello de botella de As Catedrais en agosto, tras probar un martes de noviembre vacío. Se ganan arena y precio; se aceptan servicios 3/10 e invierno quieto.",
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
  },

  ribadeo: {
    escala: "Villa de frontera y As Catedrais",
    abrir: [
      "Ribadeo reúne unos diez mil habitantes en la villa más completa de A Mariña: casco indiano con la Torre dos Moreno, puerto, Illa Pancha —faro en un islote—, ría del Eo frente a Castropol —Asturias— y As Catedrais a unos diez minutos. La A-8 pasa cerca. Es la única opción de la comarca con aeropuerto a una hora y villa caminable densa.",
      "Un martes de noviembre se resuelve comercio, mercado y centro de salud a pie. Los servicios alcanzan 7/10. El Hospital da Mariña queda a unos treinta y cinco minutos; Jarrio, en Asturias, a unos treinta —la tarjeta gallega remite a Burela—. El aeropuerto de Asturias está a unos sesenta minutos.",
      "En verano As Catedrais, el paseo y la ría reciben afluencia, tráfico y aparcamiento justo. El veraneo anima el casco; no hay una Semana Santa de impacto internacional como en Viveiro, pero la temporada turística se nota en la orilla y en los accesos a los arcos. Vivir junto al recorrido hacia As Catedrais significa contar con semanas de volumen alto.",
      "Fuera de agosto Ribadeo es villa de frontera con mesas abiertas, puerto y Castropol enfrente. Encaja para quien quiera la mejor logística de A Mariña sin salir del cielo gris lucense.",
    ],
    tiempo: [
      "Ribadeo suma unas 1.950 horas de sol y 40 días despejados —el extremo algo menos duro de la zona—, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.000 milímetros en unos 140 días. La niebla es media aquí; el viento, medio.",
      "El verano ronda 18,5 °C, fresco frente a Baleares. As Catedrais y Os Bloques tienen agua entre 17 y 19 °C; la ría del Eo ofrece orilla más recogida. Sigue lejos del Mediterráneo, pero el paseo compensa muchos días de baño corto.",
    ],
    historia: [
      "El casco indiano —casas de quien volvió de América con fortuna— y la Torre dos Moreno explican Ribadeo como villa de prestigio costero, no solo como puerto. Illa Pancha añade faro y postal sobre el Cantábrico.",
      "La ría del Eo frente a Castropol y la Reserva de la Biosfera del Eo marcan la frontera Galicia-Asturias. As Catedrais son el gran magnetismo natural a diez minutos. La historia útil junta indianos, ría y acantilado.",
    ],
    fuera: [
      "As Catedrais son el paseo imprescindible: arcos, marea y costa abierta. Illa Pancha y el puerto completan la tarde sin alejarse.",
      "Castropol, enfrente, ofrece la orilla asturiana. Foz y Barreiros amplían playas; Burela cubre el hospital comarcal gallego.",
    ],
    casa: [
      "El casco ofrece pisos y viviendas indianas o reformadas; las afueras, más espacio. Hay poca obra nueva y fibra. En el centro pesan turismo de verano y humedad; hacia As Catedrais, acceso y ocupación de temporada.",
      "El precio medio ronda 1.400 €/m², el más alto de A Mariña y aún asequible frente a otras costas. Tres habitaciones en la franja asequible se sitúan alrededor de 164.000 euros.",
      "Los servicios son 7/10. Jarrio queda a unos treinta minutos; Burela, a unos treinta y cinco. El aeropuerto de Asturias está a unos sesenta, con Palma en verano; Santiago-Lavacolla, hacia los ciento veinte.",
    ],
    encaja: {
      si: [
        "Encaja si se quiere la villa más completa de A Mariña: servicios 7/10, As Catedrais a diez minutos, frontera con Asturias y aeropuerto a unos sesenta minutos.",
        "También encaja para quien acepte el cielo lucense a cambio de casco indiano, ría del Eo y el mejor acceso a Palma en verano de la comarca.",
      ],
      no: [
        "No encaja si el hospital gallego debe quedar a quince minutos o si se necesita privado en la comarca. Burela está a unos treinta y cinco; no hay privado cerca.",
        "Tampoco si se busca el sol de Baleares: Ribadeo mejora un poco el gris de O Vicedo, pero sigue lejos de Mallorca en despejados y verano.",
      ],
      veredicto:
        "Veredicto: Ribadeo es la elección si A Mariña se mira en serio. Buscaría tres habitaciones en casco o cerca del paseo, fuera del cuello de botella hacia As Catedrais en agosto, tras probar niebla y un día de afluencia en los arcos. Se ganan villa completa y Asturias a una hora; se aceptan hospital lejos y clima cantábrico.",
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
  },
};
