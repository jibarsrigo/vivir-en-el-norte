import type { RelatoMun } from "@/components/RelatoMunicipio";

const credito = "Fotos: Wikimedia Commons (licencias indicadas en los archivos de origen).";

export const RELATOS_CANTABRIA_OCCIDENTAL: Record<string, RelatoMun> = {
  "san-vicente-de-la-barquera": {
    escala: "Villa marinera de ría",
    abrir: [
      "San Vicente de la Barquera se organiza alrededor de la ría: el puente de la Maza, el castillo y Santa María de los Ángeles forman el frente reconocible de la villa, con los Picos como fondo cuando el cielo lo permite. No es una ciudad costera ni una urbanización de playa; es una villa pequeña donde puerto, casco y estuario siguen dando la escala del día.",
      "La autonomía cotidiana es media-fuerte dentro de la villa: comercio, hostelería y servicios básicos permiten resolver bastante a pie. El coche gana peso para compra de mayor escala, hospital y buena parte de la costa. El hospital práctico está en Sierrallana, fuera del municipio, de modo que la belleza de la ría convive con una logística sanitaria menos inmediata.",
      "Merón y otros arenales están muy próximos, pero no deben describirse como playa urbana pegada a cualquier vivienda. Según la microzona, llegar al baño exige cruce, salida o un desplazamiento corto. La ría, los puentes y el frente de la villa sí forman parte del paseo ordinario con mucha más claridad.",
    ],
    tiempo: [
      "El clima cantábrico se nota sobre todo en la frecuencia de cielos grises, humedad y lluvia repartida durante el año. Frente a Mallorca hay menos continuidad de sol y el verano es más suave; la diferencia útil para elegir vivienda está en cómo responde la casa a humedad, ventilación y calefacción, no en repetir cifras climáticas que ya viven en la capa factual.",
    ],
    vivir: [
      "Un día normal puede transcurrir entre el casco, la compra básica y el paseo de ría sin necesidad de convertir la mañana en una excursión. Para hospital, comercio de mayor escala o explorar la costa el coche vuelve a ser parte de la rutina.",
      "La vida local continúa todo el año, pero el verano cambia la presión sobre Merón, Oyambre, accesos y aparcamiento. La Folía y las celebraciones de la villa añaden momentos de intensidad al calendario. Conviene distinguir esa temporada del funcionamiento mucho más pequeño del resto del año.",
      "El aeropuerto práctico es Santander y la conexión con Palma depende de la programación de temporada. Es una logística posible, no una extensión cotidiana de la villa.",
    ],
    historia: [
      "El castillo del Rey, Santa María de los Ángeles y el puente de la Maza explican una villa asentada sobre el paso de la ría y vinculada al mar. El patrimonio no queda aislado en un recinto monumental: aparece en el recorrido cotidiano entre casco, puerto y estuario.",
      "Oyambre amplía el paisaje hacia dunas, prados y costa abierta. La combinación de ría, Merón y Picos es la imagen más inmediata del lugar, pero vivir aquí significa también aceptar la escala pequeña y la distancia a servicios superiores.",
    ],
    fuera: [
      "El paseo más fácil de repetir es el de la ría, los puentes y el frente de la villa. Merón puede incorporarse con frecuencia si la vivienda está bien situada; Oyambre funciona mejor como ampliación de la costa que como playa diaria garantizada para todo el municipio.",
      "Hacia el este aparecen Comillas y otros destinos patrimoniales; hacia el interior, los Picos amplían mucho el radio de salida. Son posibilidades de fin de semana o de día libre, no sustitutos de la vida ordinaria del casco.",
    ],
    casa: [
      "La elección debe empezar por decidir entre casco y una vivienda más orientada a la costa. En el casco se gana rutina a pie; hacia Merón u otras zonas exteriores se puede ganar proximidad al mar a cambio de más coche.",
      "En cualquier caso conviene revisar humedad, ventilación, aislamiento, calefacción, salitre, accesibilidad y aparcamiento, además de cómo cambia la zona en verano. Los precios y estimaciones quedan en la capa factual y en la tabla.",
    ],
    encaja: {
      si: [
        "Encaja si se valora una villa pequeña con ría y paseo integrados en el día, servicios básicos suficientes y costa muy próxima, aceptando que hospital y parte de las compras requieren desplazamiento.",
        "También si la playa puede ser cotidiana según microzona sin exigir que esté literalmente a la puerta de cualquier vivienda.",
      ],
      no: [
        "Encaja peor si se necesita hospital cercano, comercio urbano amplio o una playa plenamente integrada en todas las zonas residenciales.",
        "También si la presión estival en los accesos costeros pesa más que el atractivo de vivir junto a la ría.",
      ],
      veredicto:
        "San Vicente ofrece una vida de villa marinera muy ligada a la ría y al paisaje, con autonomía razonable en el casco y una costa cercana pero no uniformemente caminable. Su peaje estructural es claro: hospital fuera, más coche al salir de la villa y una diferencia notable entre el verano y el resto del año."
    },
 fotoIdentidad: {
 src: "/fotos/cantabria-occidental/san-vicente-identidad.jpg",
 pie: "San Vicente de la Barquera: casas junto al castillo y la ría — villa entre monte y marea",
 },
 fotosAbrir: [
 { src: "/fotos/cantabria-occidental/san-vicente-villa.jpg", pie: "San Vicente de la Barquera: villa marinera" },
 { src: "/fotos/cantabria-occidental/san-vicente-ria.jpg", pie: "Ría de San Vicente con los Picos al fondo" },
 ],
 fotosHistoria: [
 { src: "/fotos/cantabria-occidental/san-vicente-castillo.jpg", pie: "Castillo de San Vicente de la Barquera" },
 { src: "/fotos/cantabria-occidental/san-vicente-maza.jpg", pie: "Puente de la Maza sobre la ría" },
 ],
 fotosFuera: [
 { src: "/fotos/cantabria-occidental/san-vicente-meron.jpg", pie: "Playa de Merón" },
 { src: "/fotos/cantabria-occidental/san-vicente-oyambre.jpg", pie: "Oyambre, parque natural" },
 ],
 creditoFotos: credito,
  },

  comillas: {
    escala: "Villa modernista junto al mar",
    abrir: [
      "Comillas reúne en muy poco espacio casco histórico, playa y un patrimonio excepcional: El Capricho, Sobrellano y la Universidad Pontificia hacen que la arquitectura forme parte del paisaje cotidiano. La playa queda pegada al núcleo, de modo que aquí sí es razonable pensar en bajar al mar como parte de un día normal.",
      "La contrapartida es una autonomía media y muy estacional. El comercio cotidiano existe, pero la escala es pequeña y el invierno no ofrece la misma densidad de actividad que el verano. Para compras y servicios superiores, hospital incluido, el coche sigue siendo importante.",
      "La topografía también cuenta: entre partes del casco y la costa hay pendientes moderadas. Dos viviendas aparentemente cercanas pueden ofrecer una rutina peatonal distinta.",
    ],
    tiempo: [
      "El año es húmedo y de cielo cambiante, con un verano suave y una diferencia clara respecto al clima más soleado de Mallorca. Para la vivienda importa comprobar orientación, ventilación, calefacción y comportamiento de la humedad; las cifras climáticas detalladas permanecen en la capa factual.",
    ],
    vivir: [
      "En el casco se puede enlazar compra básica, paseo por el centro histórico, parque y frente de playa sin coche. Esa combinación de patrimonio y mar es real también fuera de una visita turística, aunque la oferta comercial se reduce al salir de temporada.",
      "Julio y agosto traen más gente, tráfico y presión de aparcamiento; fuera de temporada la villa pierde mucha intensidad. Esa oscilación es parte de la experiencia residencial y conviene verla tanto en verano como en un día ordinario de invierno.",
      "Sierrallana queda fuera de la villa y el aeropuerto práctico es Santander. Palma depende de la programación concreta, por lo que no debe tratarse como una conexión permanente.",
    ],
    historia: [
      "El Capricho de Gaudí, Sobrellano y la Pontificia explican por qué Comillas tiene una presencia arquitectónica desproporcionada para su tamaño. No son solo visitas aisladas: ordenan vistas, recorridos y la identidad del casco.",
      "Oyambre y el patrimonio cercano amplían el radio de salida, pero la vida diaria sigue concentrada en una villa pequeña entre piedra, pendientes y playa.",
    ],
    fuera: [
      "La playa de Comillas sí puede formar parte del paseo cotidiano. El centro histórico, el parque y el frente de playa permiten una secuencia corta y repetible, aunque algunas calles obligan a contar con la pendiente.",
      "Oyambre y Santillana del Mar funcionan como salidas patrimoniales y de paisaje próximas; no forman parte de la ficha residencial propia de Comillas ni sustituyen sus servicios.",
    ],
    casa: [
      "La ubicación debe comprobarse caminando entre vivienda, centro y playa: una distancia corta sobre el mapa puede incluir pendiente suficiente para cambiar el uso diario. Accesibilidad, aparcamiento, humedad y exposición de la vivienda son preguntas más útiles que una vista bonita en verano.",
      "Es un mercado turístico y caro; las cifras actualizadas quedan en la tabla. En una compra conviene distinguir vivienda pensada para uso anual de producto muy orientado a temporada.",
    ],
    encaja: {
      si: [
        "Encaja si se busca una villa pequeña donde patrimonio y playa estén integrados en la rutina y se acepta una autonomía media.",
        "También si el contraste entre un verano intenso y un invierno mucho más vacío resulta asumible.",
      ],
      no: [
        "Encaja peor si se necesita comercio amplio, hospital próximo o una actividad urbana constante durante todo el año.",
        "También si las pendientes entre casco y costa complican la movilidad cotidiana de la vivienda concreta.",
      ],
      veredicto:
        "Comillas combina como pocos lugares patrimonio y playa a escala caminable, pero esa calidad espacial no elimina sus límites: servicios pequeños, fuerte estacionalidad, pendientes y dependencia del coche para funciones superiores."
    },
 fotoIdentidad: {
 src: "/fotos/cantabria-occidental/comillas-identidad.jpg",
 pie: "Comillas: casas en la ladera bajo la Universidad Pontificia, con el monte detrás",
 },
 fotosAbrir: [
 { src: "/fotos/cantabria-occidental/comillas-capricho.jpg", pie: "El Capricho de Gaudí, Comillas" },
 { src: "/fotos/cantabria-occidental/comillas-sobrellano.jpg", pie: "Palacio de Sobrellano, Comillas" },
 ],
 fotosHistoria: [
 { src: "/fotos/cantabria-occidental/comillas-plaza.jpg", pie: "Plaza de piedra de Comillas" },
 { src: "/fotos/cantabria-occidental/comillas-pontificia.jpg", pie: "Universidad Pontificia de Comillas" },
 ],
 fotosFuera: [
 { src: "/fotos/cantabria-occidental/comillas-playa.jpg", pie: "Playa de Comillas" },
 { src: "/fotos/cantabria-occidental/comillas-villa.jpg", pie: "Comillas: villa modernista" },
 ],
 creditoFotos: credito,
  },

  suances: {
    escala: "Villa costera en dos cotas",
    abrir: [
      "Suances no se entiende como una única superficie llana. El pueblo alto y la zona de La Ribera, La Concha y Los Locos ofrecen experiencias distintas: arriba se concentra parte de la vida de villa; abajo el mar entra mucho más directamente en la rutina.",
      "La autonomía cotidiana es media-fuerte, con servicios básicos y Torrelavega muy próxima para ampliar compras y sanidad. Esa base anual diferencia Suances de enclaves más dependientes de la temporada, aunque el verano aumenta claramente la presión sobre las playas.",
      "La gran pregunta residencial es la microzona. Vivir cerca de La Concha permite integrar playa y paseo; hacerlo en el núcleo alto introduce un desnivel estructural que cambia la caminabilidad.",
    ],
    tiempo: [
      "El clima es húmedo y atlántico, con verano suave y menos continuidad de sol que Mallorca. En vivienda conviene priorizar orientación, ventilación y protección frente a humedad y viento; las cifras detalladas quedan en la capa factual.",
    ],
    vivir: [
      "La Ribera, La Concha, la zona del faro y Los Locos forman un eje costero muy utilizable si se vive abajo. Desde el pueblo alto el mismo recorrido implica pendiente y puede hacer que el coche aparezca más de lo esperado.",
      "La villa mantiene vida fuera del verano y Torrelavega amplía el radio cotidiano sin convertir cada necesidad en un viaje largo. El hospital práctico también está allí, fuera del municipio pero relativamente próximo.",
      "En verano La Concha y Los Locos reciben mucha más afluencia. La vivienda concreta debe probarse pensando en aparcamiento, ruido y recorrido real entre cota alta y baja.",
    ],
    historia: [
      "La ría de San Martín, el puerto y el crecimiento hacia las playas explican una villa que mira al agua desde alturas distintas. Punta del Dichoso y Los Locos añaden el frente más abierto y expuesto del paisaje costero.",
    ],
    fuera: [
      "En zona baja, playa y paseo pueden ser realmente cotidianos: La Concha, La Ribera y el recorrido hacia el faro se enlazan con facilidad. Los Locos añade un carácter más abierto y surfero.",
      "Santillana del Mar y otros destinos próximos amplían las salidas, mientras Torrelavega cumple una función mucho más práctica de servicios y hospital.",
    ],
    casa: [
      "Antes de valorar una vivienda hay que recorrer a pie la distancia entre ella y la costa. Pueblo alto y Ribera no son equivalentes: cambian pendiente, acceso a playa y dependencia del coche.",
      "Revisar accesibilidad, aparcamiento, humedad, orientación y exposición estival. Los precios y totales quedan en la capa factual y la tabla.",
    ],
    encaja: {
      si: [
        "Encaja si se busca una villa con vida anual y playa muy integrada, especialmente escogiendo bien la zona baja.",
        "También si se valora tener Torrelavega y el hospital a un desplazamiento corto sin renunciar al frente costero.",
      ],
      no: [
        "Encaja peor si se exige una caminabilidad uniforme entre pueblo alto y playa.",
        "También si se quiere evitar la presión estival de las zonas de La Concha y Los Locos.",
      ],
      veredicto:
        "Suances combina vida anual y costa mejor que muchos enclaves puramente vacacionales, pero la microzona manda: vivir arriba o abajo cambia de forma real la playa cotidiana, la pendiente y el uso del coche."
    },
 fotoIdentidad: {
 src: "/fotos/cantabria-occidental/suances-identidad.jpg",
 pie: "Suances: casas sobre la bahía y la ría — vivir entre playa y puerto",
 },
 fotosAbrir: [
 { src: "/fotos/cantabria-occidental/suances-villa.jpg", pie: "Suances: villa-playa" },
 { src: "/fotos/cantabria-occidental/suances-concha.jpg", pie: "Playa de La Concha, Suances" },
 ],
 fotosHistoria: [
 { src: "/fotos/cantabria-occidental/suances-puerto.jpg", pie: "Puerto de Suances en la ría" },
 { src: "/fotos/cantabria-occidental/suances-paseo.jpg", pie: "Paseo de Suances" },
 ],
 fotosFuera: [
 { src: "/fotos/cantabria-occidental/suances-locos.jpg", pie: "Playa de Los Locos, Suances" },
 ],
 creditoFotos: credito,
  },

  "liencres-pielagos": {
    escala: "Costa residencial dispersa",
    abrir: [
      "Liencres es una localidad dentro de Piélagos, no un resumen de todo el municipio. Su identidad residencial mezcla casas y urbanizaciones con la proximidad de las dunas, Valdearenas, Canallave y la Costa Quebrada, mientras otras localidades del municipio ofrecen una relación distinta con servicios, tren y costa.",
      "La autonomía cotidiana es media-baja: hay servicios básicos en el entorno, pero vivienda, costa y equipamientos no siempre coinciden a pie. El coche tiene un papel mayor que en una villa compacta.",
      "La gran ventaja logística es la proximidad a Santander, Valdecilla y el aeropuerto. La contrapartida es que vivir cerca geográficamente de las playas no significa necesariamente poder bajar andando de forma urbana y cómoda.",
    ],
    tiempo: [
      "El clima es atlántico, húmedo y cambiante. La vivienda debe valorarse por orientación, ventilación y exposición al viento y la humedad; el contraste con Mallorca es de menor continuidad de sol, sin necesidad de repetir aquí las cifras de la capa factual.",
    ],
    vivir: [
      "La rutina puede resolverse con servicios básicos próximos, pero la dispersión hace que el coche aparezca para compras, costa o equipamientos según la vivienda concreta.",
      "Las dunas y la Costa Quebrada son extraordinarias para caminar, pero funcionan más como salida de naturaleza que como paseo urbano continuo. La experiencia residencial depende mucho de la calle y de la localidad elegida dentro de Piélagos.",
      "Santander amplía de manera muy fuerte el radio cotidiano: hospital, ciudad y aeropuerto quedan próximos. Esa ventaja logística no convierte Liencres en un barrio urbano de Santander.",
    ],
    historia: [
      "El paisaje de dunas y acantilados define la costa de Liencres más que un casco monumental. Valdearenas, Canallave y Costa Quebrada explican una identidad de borde natural junto a una franja residencial vinculada a la bahía de Santander.",
    ],
    fuera: [
      "Las playas pueden ser frecuentes si la vivienda está bien situada, pero la etiqueta correcta es depende de vivienda: muchas casas requieren coche o una caminata no urbana.",
      "Dunas y Costa Quebrada permiten salidas repetibles de naturaleza; Santander, en cambio, cumple la función de ciudad cercana para servicios, cultura y sanidad.",
    ],
    casa: [
      "No usar la media municipal de Piélagos como si describiera automáticamente una vivienda junto a las dunas de Liencres. Hay que comprobar localidad, acceso real a playa, servicios próximos y necesidad de coche.",
      "En casas y adosados revisar humedad, aislamiento, orientación, aparcamiento y recorrido cotidiano. Los precios quedan en la capa factual y la tabla.",
    ],
    encaja: {
      si: [
        "Encaja si se busca un entorno residencial de casas bajas con naturaleza costera próxima y una conexión muy fuerte con Santander.",
        "También si se acepta usar coche para parte de la rutina a cambio de tener hospital y aeropuerto relativamente cerca.",
      ],
      no: [
        "Encaja peor si se busca una villa compacta donde playa, comercio y servicios coincidan siempre a pie.",
        "Tampoco si se pretende que cualquier dato de Piélagos describa exactamente la experiencia de Liencres.",
      ],
      veredicto:
        "Liencres/Piélagos ofrece costa natural y una logística metropolitana muy favorable, pero es un territorio disperso: la calidad cotidiana depende más de la vivienda concreta y de sus recorridos que de la distancia lineal al mar."
    },
 fotoIdentidad: {
 src: "/fotos/cantabria-occidental/liencres-pielagos-identidad.jpg",
 pie: "Liencres–Mortera: casas bajas con el monte detrás",
 },
 fotosAbrir: [
 { src: "/fotos/cantabria-occidental/liencres-urbanizacion.jpg", pie: "Urbanización de casas bajas en Liencres" },
 { src: "/fotos/cantabria-occidental/liencres-dunas.jpg", pie: "Parque Natural de las Dunas de Liencres" },
 ],
 fotosHistoria: [
 { src: "/fotos/cantabria-occidental/liencres-costa-quebrada.jpg", pie: "Costa Quebrada, Liencres" },
 { src: "/fotos/cantabria-occidental/liencres-mortera.jpg", pie: "Mortera, en Piélagos" },
 ],
 fotosFuera: [
 { src: "/fotos/cantabria-occidental/liencres-valdearenas.jpg", pie: "Playa de Valdearenas" },
 { src: "/fotos/cantabria-occidental/liencres-canallave.jpg", pie: "Playa de Canallave, Liencres" },
 ],
 creditoFotos: credito,
  },

  santander: {
    escala: "Ciudad atlántica junto a la bahía",
    abrir: [
      "Santander es una ciudad completa, no una villa con playa. La bahía, Puerto Chico, la Magdalena y el Sardinero permiten vivir el mar dentro de la ciudad, mientras el centro concentra comercio, cultura, sanidad y servicios de una escala que ningún otro lugar cántabro del estudio reproduce.",
      "La autonomía cotidiana es muy alta y puede ser baja la dependencia del coche en barrios centrales bien elegidos. Pero la ciudad tiene cuestas y microzonas muy distintas: centro, Sardinero y periferia cambian playa, pendiente, precio y forma de moverse.",
      "La playa es realmente cotidiana en zonas costeras, no desde cualquier barrio. Elegir vivienda exige decidir si pesa más tener el Sardinero cerca, la vida del centro o una ubicación más periférica.",
    ],
    tiempo: [
      "El clima marítimo trae humedad, lluvia repartida y veranos suaves. Frente a Mallorca hay menos continuidad de sol; en una ciudad con cuestas y fachadas expuestas importa especialmente orientación, aislamiento y recorrido peatonal en días de lluvia. Las cifras permanecen en la capa factual.",
    ],
    vivir: [
      "Aquí una mañana libre no depende del coche: compra, sanidad, cultura, paseo y transporte forman parte de una ciudad activa todo el año. Según barrio, la bahía o el Sardinero pueden incorporarse al recorrido ordinario.",
      "El hospital de Valdecilla y el aeropuerto están integrados en una logística urbana muy favorable. Palma depende de la programación publicada y no debe presentarse como garantía permanente.",
      "El verano aumenta la afluencia en Sardinero y frentes turísticos, pero no sustituye la base anual de la ciudad. El peaje no es falta de servicios sino tráfico, precio y elegir bien entre playa, centro y pendiente.",
    ],
    historia: [
      "La bahía ha organizado la ciudad tanto como sus barrios. Paseo de Pereda, Puerto Chico, Magdalena y Sardinero muestran distintas etapas de una capital marítima que creció entre puerto, veraneo y servicios.",
      "Cabo Mayor amplía el frente costero hacia un paisaje más abierto, mientras el centro mantiene la dimensión administrativa y comercial.",
    ],
    fuera: [
      "El paseo cotidiano puede ir por la bahía y Puerto Chico hacia la Magdalena, o concentrarse en Sardinero según la vivienda. No existe un único paseo residencial válido para toda Santander.",
      "Cabo Mayor y Mataleñas amplían la costa sin salir de la lógica urbana; otras playas y la bahía oriental permiten salidas cercanas sin que la ciudad dependa de ellas para tener vida propia.",
    ],
    casa: [
      "La microzona es decisiva. Centro, Sardinero y barrios periféricos cambian precio, pendiente, playa y necesidad de coche. Una vivienda aparentemente céntrica puede exigir cuestas que alteren la comodidad diaria.",
      "Priorizar ascensor y ausencia de barreras cuando corresponda, orientación, aislamiento, aparcamiento si se necesita coche y recorrido real a servicios. Los precios quedan en la tabla factual.",
    ],
    encaja: {
      si: [
        "Encaja si se busca máxima autonomía cotidiana, sanidad y cultura sin renunciar a una relación urbana real con el mar.",
        "También si se acepta escoger barrio con cuidado para equilibrar playa, centro, cuestas y movilidad.",
      ],
      no: [
        "Encaja peor si se busca escala de pueblo, poco tráfico o una vivienda costera económica.",
        "También si se presupone que toda la ciudad permite bajar andando al Sardinero con la misma facilidad.",
      ],
      veredicto:
        "Santander ofrece la autonomía de una capital con una relación excepcionalmente directa con bahía y playas. Su decisión residencial no es ciudad sí o no, sino qué barrio: esa elección determina mar cotidiano, cuestas, precio y dependencia del coche."
    },
 fotoIdentidad: {
 src: "/fotos/cantabria-occidental/santander-identidad.jpg",
 pie: "Santander: casas de la ciudad frente a la bahía, con los montes detrás",
 },
 fotosAbrir: [
 { src: "/fotos/cantabria-occidental/santander-bahia.jpg", pie: "Bahía de Santander" },
 { src: "/fotos/cantabria-occidental/santander-sardinero.jpg", pie: "El Sardinero, Santander" },
 ],
 fotosHistoria: [
 { src: "/fotos/cantabria-occidental/santander-pereda.jpg", pie: "Paseo de Pereda, Santander" },
 { src: "/fotos/cantabria-occidental/santander-botin.jpg", pie: "Centro Botín, Santander" },
 ],
 fotosFuera: [
 { src: "/fotos/cantabria-occidental/santander-magdalena.jpg", pie: "Península de la Magdalena" },
 { src: "/fotos/cantabria-occidental/santander-cabo-mayor.jpg", pie: "Cabo Mayor, Santander" },
 ],
 creditoFotos: credito,
  },
};
