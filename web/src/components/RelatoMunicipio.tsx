import Link from "next/link";
import Encaja from "@/components/Encaja";
import Foto from "@/components/Foto";
import TablaPrecios from "@/components/TablaPrecios";
import TablaComparativaZona from "@/components/TablaComparativaZona";
import EnlaceIdealista from "@/components/EnlaceIdealista";
import { municipiosDeZonaFicha, type FichaMunicipio } from "@/lib/municipios";
import { RELATOS_VAL_MINOR } from "@/lib/relatos-val-minor";
import { RELATOS_VIGO_E_RIA } from "@/lib/relatos-vigo-e-ria";
import { RELATOS_O_MORRAZO } from "@/lib/relatos-o-morrazo";
import { RELATOS_PONTEVEDRA_E_SANXENXO } from "@/lib/relatos-pontevedra-e-sanxenxo";
import { RELATOS_O_SALNES } from "@/lib/relatos-o-salnes";
import { RELATOS_BARBANZA_E_NOIA } from "@/lib/relatos-barbanza-e-noia";
import { RELATOS_GOLFO_ARTABRO_E_FERROL } from "@/lib/relatos-golfo-artabro-e-ferrol";
import { RELATOS_A_MARINA } from "@/lib/relatos-a-marina";
import { RELATOS_ASTURIAS_OCCIDENTE } from "@/lib/relatos-asturias-occidente";
import { RELATOS_ASTURIAS_CENTRO } from "@/lib/relatos-asturias-centro";
import { RELATOS_ASTURIAS_ORIENTE } from "@/lib/relatos-asturias-oriente";
import { RELATOS_CANTABRIA_OCCIDENTAL } from "@/lib/relatos-cantabria-occidental";
import { RELATOS_CANTABRIA_ORIENTAL } from "@/lib/relatos-cantabria-oriental";
import { RELATOS_ALTO_MINHO } from "@/lib/relatos-alto-minho";
import { RELATOS_LITORAL_NORTE } from "@/lib/relatos-litoral-norte";

type FotoRelato = { src: string; pie: string };

export type RelatoMun = {
  escala: string;
  abrir: string[];
  /** Clima frente a Mallorca (antes «El tiempo comparado con Baleares»). */
  tiempo: string[];
  /**
   * Vivir frente a Mallorca: invierno en casa, coche, integración, sanidad práctica,
   * vuelos a Palma, tipología de vivienda. Opcional mientras se rellena pueblo a pueblo.
   */
  vivir?: string[];
  historia: string[];
  fuera: string[];
  casa: string[];
  encaja: { si: string[]; no: string[]; veredicto: string };
  fotosAbrir: FotoRelato[];
  fotosHistoria: FotoRelato[];
  fotosFuera: FotoRelato[];
  creditoFotos: string;
};

function Parrafos({ textos }: { textos: string[] }) {
  return (
    <>
      {textos.map((p) => (
        <p key={p.slice(0, 56)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          {p}
        </p>
      ))}
    </>
  );
}

function Fotos({ items }: { items: FotoRelato[] }) {
  if (!items.length) return null;
  const seen = new Set<string>();
  const unicas = items.filter((f) => {
    if (seen.has(f.src)) return false;
    seen.add(f.src);
    return true;
  });
  return (
    <>
      {unicas.map((f) => (
        <Foto key={f.src} src={f.src} pie={f.pie} />
      ))}
    </>
  );
}

/**
 * Relatos de municipio publicados.
 * Fuente: docs/estudio_zonas.md + datos de ficha.
 * Tono: prosa que explica y transporta; sin listas secas.
 */
const RELATOS_BAIXO_MINO: Record<string, RelatoMun> = {
  "a-guarda": {
    escala: "Villa marinera en la boca del Miño",
    abrir: [
      "A Guarda se siente más grande de lo que el mapa promete. Diez mil habitantes, y sin embargo hay lonja, mercado municipal, mercadillo semanal, restaurantes abiertos en enero y un paseo marítimo donde se sale a tomar café sin mirar el calendario. El casco baja en cuesta hasta el puerto: las casas de los marineros, de colores desgastados por la sal, dan a la dársena; detrás, siempre, el Monte Santa Trega, redondo, como si la villa hubiera crecido a su sombra y no pudiera olvidarlo —arriba hay castro, mirador y la boca del Miño entregándose al Atlántico—. Portugal está tan cerca que, con el viento a favor, se oyen las campanas de Caminha, la villa portuguesa al otro lado de la desembocadura. No es una frase bonita: es distancia real. El Miño se estrecha, el otro país está a la vista, y el barco estacional —cuando opera— corta el estuario en minutos.",
      "Quien vive aquí es gente local, vecinos de toda la vida, y veraneantes que vuelven cada agosto. No es una urbanización de foráneos plantada sobre el paisaje. En invierno el puerto sigue trabajando: cajas, grúas, olor a pescado fresco, el ritmo de quien no cierra la temporada. Las terrazas del paseo no se vacían del todo, aunque el noroeste se nota en la cara. La villa está en la punta, donde el río entrega el agua al Atlántico y el viento entra sin pedir permiso. Para lo diario —farmacia, súper, mercado, colegio— no hace falta coche. Para el hospital Álvaro Cunqueiro, en Vigo, sí: unos cuarenta y cinco minutos. Ese dato no se arregla eligiendo otra calle.",
      "El tráfico es de pueblo casi todo el año. Julio y agosto cambian la música: la PO-552, carretera de costa de dos carriles, se convierte en un hilo lento entre faros y aparcamientos llenos. Quien busque silencio absoluto de invierno lo encontrará; quien busque el café de enero también. Las dos cosas conviven aquí, y eso es raro.",
      "La semana tiene anclas: lonja, mercado municipal, mercadillo, el paseo marítimo al café sin mirar el calendario. Portugal no es escapada excepcional —Caminha, la villa portuguesa al otro lado de la desembocadura, a la vista; el barco estacional cuando opera—. Primavera y otoño merecen su visita: en mayo el Monte Santa Trega se pone imposible de verde; en octubre empieza el aprendizaje de la lluvia seria. Quien solo conozca agosto se quedará con la foto bonita de la punta; quien haya visto un noviembre decidirá —o no— si quiere vivir aquí.",
      "El verano, sin embargo, tiene días que desbordan esa calma. El primer fin de semana de julio la Festa da Langosta lleva el emblema del puerto a las mesas; hacia el 15 y el 16, la Virxe do Carme baja en procesión hasta los barcos. En la segunda semana de agosto llega la Festa do Monte: peñas y bandas suben al Santa Trega en una celebración que se remonta a 1913. Son jornadas de música, tráfico y mucha gente; quien viva junto al puerto o en el camino del monte debe contarlas como parte del calendario, no como una excepción imprevista.",
    ],
    tiempo: [
      "Si vienes de Baleares, notará el cielo más gris y con menos sol que en Mallorca, no tanto el frío. En enero las máximas y mínimas se parecen a las de la isla —el mar templa la punta—, pero aquí hay unos setenta y cinco días despejados al año frente a los ciento veinte de Mallorca, y unas dos mil cuatrocientas cincuenta horas de sol frente a las dos mil ochocientas. La diferencia se come casi toda entre noviembre y febrero: mañanas grises, terraza que se usa la mitad o menos. De junio a septiembre, en cambio, la terraza se usa.",
      "La lluvia es otra conversación: unos ciento dieciocho días al año; de octubre a marzo, trece a dieciséis al mes. Cuando llueve, llueve de verdad —no el chaparrón breve que pasa y deja el asfalto humeando—. El verano en esta punta es la promesa que muchos buscan: máximas alrededor de veinticinco grados, noches frescas cerca de quince, apenas unos cinco días al año por encima de treinta. El viento es medio: la nortada entra sin pedir permiso. Conviene venir un día de nortada y un noviembre, no solo un sábado de sol de agosto.",
    ],
    vivir: [
      "El invierno en A Guarda no se nota tanto en el termómetro como en la casa y en el viento. En Mallorca muchas viviendas casi no piensan en calefacción ni en humedad; aquí la punta aporta salitre, nortada y lluvia seria de octubre a marzo. Conviene preguntar por aislamiento, orientación de la terraza —al Miño o al puerto, no a la esquina más abierta al Atlántico— y rastros de moho. Visitar el piso un día de viento fuerte y un noviembre vale más que un sábado de sol en Area Grande.",
      "El día a día sin coche funciona en el casco: farmacia, súper, mercado, colegio y paseo marítimo caben a pie. En enero hay lonja, mercadillo y terrazas que no se vacían del todo. Portugal está a la vista —Caminha al otro lado— y el barco estacional, cuando opera, corta el estuario. No es una urbanización de foráneos: es villa de oficio que no cierra la temporada, aunque el hospital sí exija coche.",
      "Llegar de fuera es menos dominante que en otras costas: conviven vecinos de toda la vida y veraneantes que vuelven en agosto. Se oye gallego en el mercado y en la lonja; el castellano basta para lo cotidiano. Entre semana manda el ritmo de puerto; en julio y agosto la PO-552 se convierte en un hilo lento. Quien busque solo veraneo se quedará con la foto bonita de la punta; quien busque vecinos todo el año, también los encontrará —con otra escala que Mallorca.",
      "La sanidad de urgencia y especialidades no está en la villa: el hospital público Álvaro Cunqueiro, en Vigo, queda a unos cuarenta y cinco minutos; el privado Povisa, hacia los cincuenta. En A Guarda hay centro de salud con urgencias, farmacias y servicios de semana. Empadronarse abre el médico de cabecera local; para especialistas se baja a Vigo. Ese dato no se arregla eligiendo otra calle del puerto.",
      "Mantener el vínculo con Mallorca pasa por el avión. Vigo-Peinador está a unos cincuenta minutos; Porto, cerca de hora y media. El relato no detalla un vuelo directo estable a Palma desde Peinador en invierno: conviene mirar el calendario real y contar también Santiago como alternativa cuando el enlace lo pida. El coste no es solo el billete, sino la logística de punta cuando el cielo atlántico aprieta.",
      "El modelo habitual es piso en edificio bajo con terraza al Miño o al puerto, o chalé en las laderas hacia Camposancos. Hay fibra y poca obra nueva: lo que se compra ya tiene historia de uso. La terraza útil es la que mira al río o a la dársena, no la más expuesta a la nortada. Conviene presupuestar humedad, ventanas y calefacción, y comprobar el aparcamiento de Area Grande cuando la villa se llena.",
    ],
    historia: [
      "Antes que la villa existió el castro del Santa Trega, hace más de dos mil años: un poblado fortificado de la Edad del Hierro con decenas de casas circulares de piedra, algunas reconstruidas con techo de paja, que se recorren por callejuelas entre los muros. Es el castro más visitado de Galicia. Arriba hay museo arqueológico, ermita y un mirador desde el que se ve el Miño abriéndose al océano, la costa portuguesa hasta Viana y, en días claros, las Cíes. El nombre de A Guarda habla precisamente de guardar y vigilar esta boca del río. Abajo, el Castelo de Santa Cruz recuerda otra frontera: levantado en el siglo XVII, fue tomado por Portugal en 1665.",
      "Durante siglos se vivió de la pesca. Desde el XIX, también de la emigración a Puerto Rico: muchos guardeses volvieron y dejaron casas de indianos con palmeras y galerías que todavía se ven en la Praza do Reló y en la carretera de Camposancos —un lujo traído de lejos, plantado en la misma costa que los había empujado a marchar—. Camposancos guarda una memoria mucho más oscura: su antiguo colegio jesuita fue campo de concentración franquista entre 1937 y 1939, conocido por los presos como la «puerta del infierno». Hoy el puerto sigue siendo el corazón. El Museo do Mar, instalado en una reconstrucción de una antigua atalaya al final del paseo, cuenta ese oficio; la rosca de yema, dulce guardés de masa y huevo, cuenta la villa desde la mesa. También la explican la Torre do Reló del XVIII, la iglesia de Santa María y Camposancos, la parroquia del estuario, donde el río ya es otra cosa.",
    ],
    fuera: [
      "Si solo hay tiempo para un baño cerca, ese baño es Area Grande. Queda a pie desde el casco: poco más de un kilómetro, cuatro minutos andando cuesta abajo hacia el océano. No es una playa infinita de postal mediterránea. Es una cala de arena fina, abrigada entre rocas, con paseo de madera y el Santa Trega detrás como telón. El agua en agosto anda entre diecisiete y diecinueve grados: fresca, a veces con mordisco, nunca tibia como Mallorca a veinticinco. Se entra, se nada un rato, se sale con la piel despabilada. Un martes de junio puedes tener casi toda la arena; un domingo de agosto el aparcamiento junto al paseo se queda corto y la gente busca sitio con paciencia. Es playa de diario —de vecinos, de toalla conocida—, no de resort.",
      "Un poco más adentro, hacia Camposancos, el paisaje cambia de registro. O Muíño —tres kilómetros, seis minutos— ya no mira al Atlántico abierto: mira el estuario. Arena, agua plana, Portugal enfrente, merendero bajo los pinos, el embarcadero del barco a Caminha. Sin olas. Más templada. Es el sitio donde se lleva a quien no quiere pelear con el océano, o donde se viene a merendar con el río ancho delante y la sensación de frontera sin aduana. Más al norte, Praia da Lamiña es pequeña, entre rocas: un sitio de mirar, de oír el golpe del agua, más que de tender la toalla y quedarse la tarde.",
      "Los caminos son la otra mitad del agua. El paseo de todos los días va del puerto a Camposancos: cuatro kilómetros llanos, asfalto y pasarela, el mar a un lado y las casas al otro. Subir al Santa Trega —una hora a pie desde el pueblo o diez minutos en coche hasta arriba— es el sitio al que llevarías a cualquier visita: castro, museo, ermita, mirador sobre la desembocadura. La senda litoral hacia Oia es el Camino Portugués de la Costa: océano a la izquierda, Serra da Groba a la derecha, tramos de madera sobre las rocas. Cualquier tramo de cinco o seis kilómetros es una tarde. Los molinos del Folón, en O Rosal, quedan a unos diez minutos: piedra, musgo y el sonido del agua cuando llueve fino.",
    ],
    casa: [
      "El modelo de casa aquí no es la urbanización cerrada. Es piso en edificio bajo —años noventa a dos mil diez— con terraza al Miño o al puerto, o un chalé en las laderas hacia Camposancos, con Portugal delante. Hay fibra. Hay poca obra nueva: lo que se compra, en general, ya existe y tiene historia de uso.",
      "El viento marca la diferencia más que el plano del piso. La punta está expuesta al noroeste; un día de nortada se siente en los huesos si la terraza mira al sitio equivocado. Conviene la terraza al río o al puerto, no la esquina más abierta al Atlántico. Quien compre debería venir un día de viento fuerte, no solo un sábado de sol de agosto, y comprobar el aparcamiento de Area Grande cuando la villa se llena.",
      "El precio ronda mil cuatrocientos cincuenta euros el metro. Un piso reciente de tres habitaciones con vistas al Miño puede andar cerca de ciento setenta mil. El hospital público está a cuarenta y cinco minutos; el privado, hacia los cincuenta. Vigo-Peinador, unos cincuenta minutos; Porto, cerca de hora y media. Servicios de villa —supermercados, mercado, escuelas, piscina cubierta, urgencias del centro de salud— sí; hospital y gran superficie, no. Eso es A Guarda: mucho mar y mucho oficio, y la ciudad grande siempre a un trayecto.",
    ],
    encaja: {
      si: [
        "El mar a pocos minutos importa más que tener el hospital a la vuelta de la esquina. La playa de diario es Area Grande: una cala de arena fina a pie desde el casco, cuesta abajo hacia el océano, con el monte detrás. A seis minutos en coche hacia Camposancos está O Muíño, playa del estuario —agua plana, sin olas, Portugal enfrente—. Quien quiera salir a caminar el paseo marítimo que une el puerto con Camposancos (unos cuatro kilómetros llanos, el mar a un lado), bajar a la lonja del puerto, tomar café en enero y sentir el Atlántico como vecino encontrará aquí una villa que no se apaga fuera de temporada. Si hay tiempo libre para la costa, para subir al Monte Santa Trega —el monte redondo que corona la villa, con castro de piedra y mirador sobre la desembocadura del Miño— y para mirar Portugal al otro lado del río, A Guarda lo paga con creces: el día a día cabe a pie en el casco; el paisaje no pide coche para cada gesto pequeño.",
        "Funciona especialmente bien como complemento de una casa en el valle interior —O Rosal, a unos diez minutos tierra adentro, entre parras y monte—: la punta para el mar y el oficio del puerto; el valle para el silencio verde. Quien acepte esa lógica de dos orillas entenderá el sitio sin forzar una sola vivienda a resolverlo todo.",
      ],
      no: [
        "El hospital público Álvaro Cunqueiro, en Vigo, está a unos cuarenta y cinco minutos; el privado Povisa, hacia los cincuenta. Eso no se arregla eligiendo otra calle ni un piso más cerca del puerto. Si la prioridad absoluta es sanidad a media hora o menos, esta punta no encaja: hay que mirar Tui —ciudad pequeña río arriba, con el hospital más cerca— o aceptar el trayecto con los ojos abiertos.",
        "El viento del noroeste —la nortada— marca la punta. Quien se decida solo con un sábado de sol de agosto, sin probar un día de viento fuerte ni el aparcamiento junto a la playa de Area Grande cuando la villa se llena, se llevará una sorpresa. Tampoco encaja si se busca casa única y se necesita ciudad grande a un cuarto de hora: Vigo sigue a unos cincuenta minutos.",
      ],
      veredicto:
        "Veredicto de quien conoce la comarca: A Guarda encaja como villa de mar y oficio —piso con terraza al río Miño o al puerto, cerca del paseo marítimo, no en la esquina más abierta al Atlántico— sobre todo si el mar cerca y el tiempo para recorrerlo importan más que el hospital. Como casa única solo si se acepta Vigo y el hospital Álvaro Cunqueiro a tres cuartos de hora. Mejor complemento de una casa en el valle (O Rosal) que única apuesta. Comprobar la nortada y un sábado de agosto en Area Grande antes de firmar.",
    },
    fotosAbrir: [
      { src: "/fotos/baixo-mino/a-guarda-villa.jpg", pie: "La villa pegada al Atlántico, con el Monte Santa Trega detrás" },
      { src: "/fotos/baixo-mino/a-guarda-paseo.jpg", pie: "Paseo marítimo y casas de costa: el día a día frente al océano" },
    ],
    fotosHistoria: [
      { src: "/fotos/baixo-mino/a-guarda-castro.jpg", pie: "Castro de Santa Trega: poblado de piedra de hace dos mil años sobre la desembocadura" },
      { src: "/fotos/baixo-mino/a-guarda-porto.jpg", pie: "Puerto de A Guarda: el mar como oficio, no como postal" },
    ],
    fotosFuera: [
      { src: "/fotos/baixo-mino/a-guarda-costa.jpg", pie: "Costa atlántica hacia Area Grande, la playa de diario" },
      { src: "/fotos/baixo-mino/a-guarda-camposancos.jpg", pie: "Camposancos, parroquia del estuario, con Caminha (Portugal) al otro lado" },
    ],
    creditoFotos: "Fotos: Wikimedia Commons (CC BY-SA).",
  },

  oia: {
    escala: "Casas dispersas",
    abrir: [
      "Oia no es un pueblo con plaza. Son siete parroquias —unas tres mil personas— colgadas entre la Serra da Groba y el Atlántico: Oia, Mougás, Viladesuso, Pedornes, Burgueira, Loureza, Torroña. Se vive en aldea, con el océano delante y la sierra detrás. Al atardecer el sol se mete en el agua; en noviembre, el silencio pesa de verdad. Quien está aquí es gente de toda la vida, quien buscó ese silencio a propósito, y veraneantes en las casas de la costa.",
      "En invierno las aldeas se vacían. El bar de Mougás y el de Oia son casi el único sitio donde hay gente. Un martes de noviembre puedes recorrer kilómetros sin cruzarte con nadie salvo el viento. No hay urbanización ni calle de casas bajas; el modelo es casa aislada de piedra o chalé con vistas. El coche es obligatorio para todo: supermercado, médico, instituto. La PO-552 pasa pegada a la costa; hay tramos donde el motor y el oleaje se mezclan. La fibra es parcial: hay que comprobarla casa por casa, no darla por hecha porque el vecino la tenga.",
      "Un domingo de agosto trae más coches en la carretera y más luces en las casas de costa, pero el carácter no cambia: sigue sin haber plaza que haga de centro. Esto no se parece a un pueblo compacto mallorquín —plaza, súper, farmacia, ciudad a cinco minutos—. Aquí el paisaje es salvaje y se paga en soledad, distancia y dependencia del volante. Quien lo entienda de antemano no se llevará una sorpresa en noviembre. Quien lo descubra en agosto soleado se decidirá sin conocer el invierno.",
      "Hay semanas en que la sierra rompe el silencio. El lunes después de Pentecostés, la Virxe do Mar —también llamada fiesta de Delamar— reúne a las parroquias junto al océano. Entre mayo y junio, los curros de Valga, Torroña y Mougás bajan los caballos de la Serra da Groba para la gaxada, el trabajo comunal de reunirlos, cortarles las crines y marcarlos; en agosto llegan las celebraciones llamadas «moscas», también ligadas a los caballos. Carretera, polvo, voces y animales ocupan entonces un paisaje que el resto del año parece vacío.",
    ],
    tiempo: [
      "El cielo de Oia es el de la costa atlántica abierta: unos setenta y cinco días despejados, dos mil cuatrocientas cincuenta horas de sol, ciento dieciocho de lluvia. Respecto a Baleares pierdes sol sobre todo en invierno; el verano, en cambio, se estrecha la diferencia. Máximas de julio alrededor de veinticinco grados, noches frescas, apenas cinco días al año por encima de treinta —el calor que se deja atrás casi desaparece aquí, no como en el fondo del Miño.",
      "El viento y el oleaje marcan más que la cifra del termómetro. La PO-552 y el océano se oyen juntos; la niebla es baja. Un día de lluvia seria no se queda uno mirando el cristal: se baja a Baiona o a A Guarda, o se espera a que el chaparrón afloje para caminar la senda. Quien solo conozca agosto se quedará con la foto bonita del horizonte; quien haya visto un noviembre en aldea decidirá —o no— si acepta ese silencio.",
    ],
    vivir: [
      "El invierno en Oia se siente en la soledad de la casa tanto como en el termómetro. En Mallorca muchas viviendas casi no piensan en calefacción ni en humedad; aquí el Atlántico abierto y la Serra da Groba mantienen lluvia, viento y aire húmedo. Una casa aislada de piedra o un chalé con vistas puede retener moho si la ventilación y el aislamiento fallan. Visitar un noviembre en aldea —kilómetros sin cruzarse con nadie salvo el viento— vale más que un agosto soleado junto al monasterio.",
      "El día a día sin coche no existe: el coche es obligatorio para supermercado, médico e instituto. En invierno los bares de Mougás y Oia son casi el único sitio con gente; no hay plaza que haga de centro. En enero las aldeas se vacían. Quien elija Oia elige paisaje salvaje a cambio de dependencia total del volante —otra escala que cualquier pueblo compacto mallorquín.",
      "Llegar de fuera suele ser una decisión deliberada: gente de toda la vida, quien buscó silencio a propósito y veraneantes en las casas de costa. Se oye gallego en las parroquias; el castellano basta para lo básico, pero la vida social pasa por aldea y vecindario, no por una calle mayor. Entre semana el silencio pesa; en agosto hay más coches en la PO-552, pero el carácter no cambia. Quien busque integración de plaza y terrazas no la encontrará aquí.",
      "La sanidad de urgencia y especialidades no está en el municipio: el hospital Álvaro Cunqueiro queda a unos cuarenta minutos; el súper grande y el instituto, en Baiona o A Guarda, a quince o veinte. En Oia hay consultorio, una farmacia y tiendas de pueblo. Empadronarse abre lo local; para todo lo demás se conduce. No es aislamiento total: es asumir que la gran sanidad y la compra grande están fuera de la puerta.",
      "Mantener el vínculo con Mallorca pasa por el avión desde fuera del municipio. Vigo queda a unos cuarenta y cinco minutos; el relato no fija un aeropuerto a cinco minutos. Conviene mirar el calendario real de vuelos desde Peinador o Santiago y contar el trayecto desde la aldea concreta. En invierno la logística importa más que en agosto.",
      "Lo que encontrarás es casa aislada: piedra o chalé con vistas. No hay obra nueva; la fibra es parcial y debe comprobarse casa por casa. El anuncio habla de horizonte; el invierno habla de soledad y de coche para el pan. En una vivienda con escaleras o desniveles hay que imaginar la rutina dentro de diez años, y presupuestar humedad, cubierta y calefacción además del paisaje.",
    ],
    historia: [
      "Todo gira alrededor del monasterio. Su comunidad está documentada desde 1137 y se incorporó al Císter en 1185; desde allí los monjes roturaron la ladera, plantaron viña y organizaron las aldeas que hoy son las parroquias. Santa María de Oia está plantada directamente frente al mar: es el único monasterio de la orden en Europa a pie de océano. Piedra y oleaje en la misma imagen. En 1624 los llamados «monjes artilleros» rechazaron a cañonazos un ataque de piratas turcos. Desamortizado en 1835 y declarado monumento histórico-artístico en 1931 —hoy Bien de Interés Cultural—, el conjunto es privado; iglesia y claustro se ven desde la senda litoral.",
      "Cuando el monasterio se cerró, el municipio quedó más o menos como lo ves: aldeas, sierra, océano. En la Cabeciña de Mougás hay petroglifos; arriba pervive la ganadería comunal de los curros. Hasta los nombres dibujan el territorio: Oia da nombre a la parroquia costera y al municipio; Mougás, Torroña y Valga nombran aldeas y montes de la Groba, no barrios de un único casco.",
    ],
    fuera: [
      "Praia de Mougás, a unos ocho minutos, no es una playa de toalla y sombrilla. Es pequeña, de arena y cantos, batida por el oleaje de verdad: el ruido del mar lo llena todo. Se va a mirar, a sentir el viento, a mojarse los pies. Nadar aquí es para quien busca esa brusquedad atlántica, no el baño largo y calmado del Mediterráneo. El acceso desde la carretera es fácil; el carácter del agua, no. Un martes de junio puedes estar casi solo ante las olas; un domingo de agosto hay más coches aparcados, pero el carácter no se vuelve de resort.",
      "Para bañarse de verdad, mucha gente baja a Baiona: unos dieciocho minutos, arena fina, bahía abrigada —otro mundo, ya en la comarca vecina—. No es un fallo de Oia: es la honestidad del Atlántico abierto. Quien quiera baño largo y agua más amable tiene que aceptar ese trayecto, igual que quien vive en el valle de O Rosal acepta unos diez minutos hasta Area Grande, la cala de arena de A Guarda. La diferencia es que aquí el océano está en la puerta; el baño cómodo, no.",
      "La senda litoral pasa por la puerta de las aldeas: pasarela de madera sobre las rocas, pista, el océano siempre a un lado; es el Camino Portugués de la Costa (la ruta jacobea que sigue la orilla). Cualquier tramo de cinco o seis kilómetros es una tarde. Subir al Alto da Groba —unos veinte minutos en coche por Torroña, una de las parroquias de monte— abre meseta de brezo sin árboles, caballos sueltos (garranos), el océano a un lado y el valle del Miño al otro. En mayo y junio, los curros de Mougás y Torroña bajan esos caballos a un cercado de piedra: polvo, gritos, tradición que todavía ocurre. Es el espectáculo del año, y explica mejor el municipio que cualquier anuncio.",
    ],
    casa: [
      "Lo que encontrarás es casa aislada en aldea: piedra o chalé con vistas. No hay obra nueva. El precio del metro es de los más altos de la zona —alrededor de mil seiscientos euros—, porque aquí se paga el paisaje, no los servicios. Fibra parcial: hay que preguntar por la línea en esa casa concreta, no en el pueblo en abstracto. El anuncio habla de vistas; el invierno habla de soledad y de coche para el pan.",
      "Los servicios son los de una aldea: consultorio, una farmacia, tiendas de pueblo, bares. El supermercado grande y el instituto están en Baiona o A Guarda, quince o veinte minutos. El hospital Álvaro Cunqueiro, unos cuarenta. Vigo, unos cuarenta y cinco. Aquí se compra silencio y horizonte; no se compra la vida diaria a pie de casa. Quien lo entienda se decidirá con los ojos abiertos. Quien lo descubra en agosto soleado, no.",
    ],
    encaja: {
      si: [
        "Lo que se busca es vivir frente al océano salvaje —horizonte, oleaje, la Serra da Groba (la sierra de brezo detrás de las aldeas) a la espalda— y se tiene tiempo y ganas de asumir lo que eso cuesta: soledad de noviembre, aldeas vacías entre semana, el coche para el supermercado, el médico y casi todo lo que no sea mirar el mar. Si el silencio no pesa y el paisaje es la razón de mudarse, Oia es el tramo más bruto y más honesto de la comarca.",
        "Quien priorice playa de baño largo y calmado ya sabe que bajará a Baiona —villa de bahía abrigada, unos dieciocho minutos al norte, ya en la comarca vecina—. Quien priorice mirar el Atlántico y caminar la senda litoral (el Camino Portugués de la Costa: pasarela de madera y pista junto al océano) o subir a la meseta de la Groba —caballos sueltos, océano a un lado y valle al otro— encontrará aquí lo que en ningún otro municipio de Baixo Miño está tan cerca de la puerta.",
      ],
      no: [
        "Si se quiere pueblo —plaza, súper, farmacia a pie, gente en la calle un martes de enero—, Oia no lo es. Son siete parroquias dispersas sin un centro que una. El hospital público Álvaro Cunqueiro, en Vigo, a unos cuarenta minutos, y el súper grande a quince o veinte (Baiona o A Guarda) no se negocian eligiendo otra aldea. Tampoco encaja quien necesite vida diaria sin volante: aquí el coche abre la semana.",
        "Quien descubra el sitio solo en agosto soleado se quedará con la foto bonita del horizonte y descubrirá en noviembre el precio. Si el tiempo libre se quiere gastar en calle y café compacto, mejor A Guarda (villa de puerto) u O Rosal (valle con plaza); si se quiere mar a la puerta sin soledad, tampoco es este pueblo.",
      ],
      veredicto:
        "Veredicto: Oia no es la opción de quien busca pueblo compacto ni hospital cerca. Es la de quien quiere océano y silencio y acepta pagarlos en distancia, fibra a comprobar casa por casa y un invierno que vacía las aldeas. Solo si eso es exactamente lo que se busca —y se ha visto un noviembre—; si no, mirar A Guarda (mar con villa) o el valle de O Rosal.",
    },
    fotosAbrir: [
      { src: "/fotos/baixo-mino/oia-mosteiro.jpg", pie: "Mosteiro de Santa María de Oia: piedra entre sierra y océano" },
      { src: "/fotos/baixo-mino/oia-costa.jpg", pie: "La costa atlántica hacia Oia: oleaje y aldeas" },
    ],
    fotosHistoria: [
      { src: "/fotos/baixo-mino/oia-mosteiro-lado.jpg", pie: "El monasterio visto desde tierra: el corazón de las parroquias" },
      { src: "/fotos/baixo-mino/oia-fachada.jpg", pie: "Fachada barroca del monasterio" },
    ],
    fotosFuera: [
      { src: "/fotos/baixo-mino/oia-peirao.jpg", pie: "Peirao de Oia: el Atlántico se mira más que se nada" },
      { src: "/fotos/baixo-mino/oia-groba-cabalos.jpg", pie: "Garranos en la Serra da Groba, sobre Mougás" },
    ],
    creditoFotos: "Fotos: Wikimedia Commons (CC BY-SA).",
  },

  "o-rosal": {
    escala: "Pueblo compacto y casas dispersas",
    abrir: [
      "O Rosal es un valle interior de unos seis mil habitantes, a diez minutos de A Guarda. Se vive entre parras altas —se pasa andando por debajo—, casas de piedra y el monte detrás: la Serra da Groba (meseta de brezo y caballos) a un lado, el Monte Santa Trega (el monte redondo sobre A Guarda y la desembocadura) al otro. En O Calvario, el núcleo del municipio, hay plaza, bares e iglesia; alrededor, las parroquias de Tabagón, San Miguel, Eiras, As Eiras: casas con huerto y viña. Es el municipio de la comarca que más se parece a un pueblo de interior mediterráneo en ritmo: gente local, pocos foráneos, poco tráfico, agosto sin llenarse.",
      "No hay urbanización. El modelo es casa de piedra rehabilitada o chalé de los dos mil en ladera, con vistas al valle o al Miño. En invierno el valle se queda en lo suyo: húmedo, verde, parras desnudas, olor a tierra mojada. Lo diario —farmacia, súper pequeño, centro de salud— está en el pueblo; el resto, en A Guarda a diez minutos. La fibra es parcial: en las parroquias altas hay que comprobarla casa por casa.",
      "Aquí el paisaje importa más que la logística. Quien venga buscando eso —valle, parra, plaza donde se conocen, mar a un cuarto de hora— entenderá el sitio en la primera tarde. Quien venga buscando ciudad a cinco minutos, no.",
      "A mediados de julio, la Feira do Viño do Rosal concentra en la Praza do Calvario bodegas, copas y visitantes; desde 2016 es Fiesta de Interés Turístico de Galicia. Las Festas do Pilar devuelven después la celebración al calendario parroquial. O Calvario —«el Calvario» en gallego y núcleo principal del municipio— deja entonces de ser solo el lugar de los recados: hay música, coches buscando hueco y mesas llenas, mientras las casas dispersas recuperan pronto su silencio.",
    ],
    tiempo: [
      "O Rosal comparte el cielo de la comarca —unos setenta y cinco días despejados, dos mil cuatrocientas cincuenta horas de sol— pero el valle lo siente distinto a la punta. Respecto a Baleares pierdes sol sobre todo en invierno; de junio a septiembre la terraza se usa. La lluvia, de octubre a marzo, es seria: trece a dieciséis días al mes, y cuando cae empapa el circuito de molinos del Folón —piedra y regueros en la ladera— y deja el valle en musgo.",
      "El verano aquí es más suave que en Tui o Tomiño: no es el fondo del Miño que devuelve el calor. Las noches refrescan; el calor extremo casi no llega. La niebla es baja. Lo que sí hay es humedad de noviembre en las paredes: conviene tocarla con la mano al visitar una casa, no solo mirar el plano un sábado de sol.",
    ],
    vivir: [
      "El invierno en O Rosal se siente en las paredes más que en el termómetro. En Mallorca muchas casas casi no piensan en calefacción ni en humedad; en este valle interior la lluvia empapa el Folón, deja musgo y mantiene el aire húmedo entre parras desnudas. Conviene tocar las paredes en noviembre, preguntar por aislamiento y mirar rastros de moho. Visitar la casa un día de lluvia seria vale más que el sol de abril del anuncio.",
      "El día a día sin coche funciona en O Calvario: plaza, farmacia, súper pequeño y centro de salud. En las parroquias de Tabagón, San Miguel o Eiras el coche une huerto, viña y pueblo. En enero el valle se queda en lo suyo —húmedo, verde, olor a tierra mojada— y O Calvario mantiene bares e iglesia. El resto —supermercado grande, lonja— está en A Guarda a diez minutos.",
      "Llegar de fuera es menos frecuente que en la punta: hay gente local, pocos foráneos, poco tráfico. Se oye gallego en la plaza y en las bodegas; el castellano basta para lo cotidiano. Entre semana manda el ritmo de pueblo; en julio la Feira do Viño do Rosal llena O Calvario, pero agosto no satura como la costa. Quien busque solo veraneo de playa se aburrirá; quien busque vecinos de valle, los encontrará.",
      "La sanidad de urgencia y especialidades no está en el municipio: el hospital Álvaro Cunqueiro queda a unos cuarenta minutos; Vigo, alrededor de cuarenta. En O Rosal hay centro de salud y farmacia para lo diario; A Guarda cubre más. Empadronarse abre el médico de cabecera local; para especialistas se conduce. Es valle con mar a diez minutos, no ciudad sanitaria.",
      "Mantener el vínculo con Mallorca pasa por el avión desde fuera. El relato sitúa Vigo alrededor de cuarenta minutos; conviene mirar vuelos desde Peinador o Santiago y el calendario real hacia Palma, no solo el de agosto. El coste incluye el trayecto desde el valle cuando el cielo atlántico aprieta.",
      "Lo habitual es casa de piedra con parra y huerto, o chalé de los dos mil en ladera orientada al sur. Poca obra nueva; fibra parcial en las parroquias altas. La terraza útil es la que recibe sol de invierno; conviene presupuestar humedad, ventanas y calefacción, y comprobar la fibra en esa dirección concreta —no en el pueblo en abstracto—.",
    ],
    historia: [
      "Valle agrícola desde siempre: viña, maíz, huerta, y molinos comunales donde cada casa tenía sus horas de molienda. De ahí los cerca de sesenta molinos del Folón y del Picón, levantados sobre todo en el siglo XVIII y escalonados en dos regueros que bajan por la ladera, declarados Bien de Interés Cultural. Se recorren en un circuito de cuatro o cinco kilómetros entre pequeñas cascadas y viñedo, con el valle abajo. El nombre de O Rosal —el rosal— acabó nombrando tanto este valle como el municipio constituido en 1847.",
      "Tierra de emigración a América, de contrabando con Portugal en la posguerra y de cabaqueiros: tejeros que marchaban por temporadas y crearon un habla gremial propia, el latín dos cabaqueiros, para entenderse sin ser entendidos. Desde los años ochenta el vino cambió el paisaje. O Rosal es subzona de la D.O. Rías Baixas y sus blancos deben reunir al menos un setenta por ciento de Albariño y Loureira; la parra no es postal, sino economía viva. Lugares que explican el valle: los molinos, la plaza de O Calvario y los miradores hacia el Miño.",
    ],
    fuera: [
      "En el municipio no hay playa de mar: O Rosal es valle interior. Eso no significa vivir lejos del agua. Area Grande —la cala de arena fina de A Guarda, playa de diario— queda a unos diez minutos; O Muíño, la playa del estuario en Camposancos (agua plana, Portugal enfrente), a unos doce. Se baja a la costa cuando apetece y se vuelve al valle al atardecer, con las parras y el monte detrás —un ritmo que muchos buscan sin saber nombrarlo. Un martes de junio puedes tener la cala casi para ti; un domingo de agosto hay que contar el aparcamiento, y luego el regreso al valle sabe a alivio.",
      "El paseo propio —el que no se encuentra igual en otra parte— es el circuito de los Muíños do Folón e do Picón: sesenta y siete molinos de agua en dos regueros que bajan la ladera. Con lluvia fina el sitio se vuelve casi de cuento: musgo, cascadas, el sonido del agua entre la piedra. Con chaparrón cerrado, mejor otro plan: un café en la plaza de O Calvario, o bajar a A Guarda. El Monte Santa Trega —castro y mirador sobre la desembocadura— está a unos doce minutos. También se camina entre las parras del propio valle, por pistas de tierra, cuando el sol de tarde entra entre las hojas.",
      "Portugal está cerca: Caminha (villa portuguesa en la desembocadura) y Vila Nova de Cerveira (frente a Goián) a un cuarto de hora o poco más, según el puente. No hace falta convertirlo en excursión: un sábado cualquiera se cruza, se vuelve con pan o con fruta, y el valle sigue siendo el centro. Aquí el mar es salida; la vida diaria es plaza, parra y monte detrás.",
    ],
    casa: [
      "Lo que encontrarás es casa de piedra con parra y huerto, o chalé de los dos mil en ladera orientada al sur, en Tabagón, San Miguel o Eiras, con vistas al valle o al Miño. Poca obra nueva. El metro ronda mil trescientos cincuenta euros; una casa rehabilitada con terreno puede entrar entre ciento treinta y ciento ochenta mil —margen de verdad respecto a la costa. El anuncio enseña el sol de abril; conviene ver también un noviembre húmedo.",
      "Conviene comprobar tres cosas que el anuncio no cuenta: la fibra en esa casa concreta, la humedad de las paredes en noviembre —el valle es húmedo—, y cuánto tarda el coche a Area Grande un domingo de agosto. El hospital Álvaro Cunqueiro está a unos cuarenta minutos; Vigo, también alrededor de cuarenta. Los servicios del pueblo cubren lo básico; A Guarda cubre el resto. Quien acepte esa distancia gana el valle.",
    ],
    encaja: {
      si: [
        "Se busca valle —parras altas, casas de piedra, monte detrás, plaza donde se conocen— y el mar a unos diez minutos basta: no hace falta tenerlo en la puerta. Quien tenga tiempo para el circuito de los Muíños do Folón e do Picón (sesenta y siete molinos de agua en cascada por la ladera, a unos siete minutos del pueblo), para las pistas entre viña, para bajar a Area Grande —la cala de arena de A Guarda, playa de diario— cuando apetece y volver al atardecer al silencio del valle encontrará aquí el ritmo que muchos de la comarca buscan sin saber nombrarlo. Agosto no satura; el invierno es húmedo pero vivo en O Calvario, el núcleo con plaza, bares e iglesia.",
        "Se acepta el hospital público Álvaro Cunqueiro, en Vigo, a unos cuarenta minutos, y A Guarda a diez para supermercado grande y lonja. A cambio se gana paisaje, precio más amable que la costa y una escala —pueblo compacto en O Calvario más casas en las parroquias (Tabagón, San Miguel, Eiras)— que se parece a lo que muchos dejaron atrás en textura de piedra y monte, no en clima de verano extremo.",
      ],
      no: [
        "Si hace falta hospital a media hora o ciudad a un cuarto de hora, O Rosal no lo da: eso es Tui (ciudad pequeña río arriba), o aceptar el trayecto a Vigo. Tampoco encaja quien necesite playa a la puerta todos los días sin coche: el mar está a unos diez minutos (Area Grande u O Muíño, la playa del estuario en Camposancos), pero es salida, no umbral.",
        "La humedad de noviembre y la fibra parcial en las parroquias altas no son detalles del anuncio. Quien se decida solo con con sol de abril, sin tocar paredes ni preguntar por la línea en esa casa, se lleva una sorpresa. Si el calor de valle es lo que se huye, aquí casi no vuelve; el problema sería otro —humedad y distancia al hospital de Vigo—.",
      ],
      veredicto:
        "Veredicto: O Rosal es la opción de valle de Baixo Miño. Encaja si el paisaje y el ritmo de pueblo importan más que hospital y ciudad cerca, y si diez minutos al mar bastan. Casa de piedra o chalé orientado al sur en las parroquias de Tabagón, San Miguel o Eiras; comprobar fibra, humedad de noviembre y el trayecto a la playa de Area Grande un domingo de agosto. Quien priorice sanidad a treinta minutos, mirar Tui; quien priorice mar a la puerta, A Guarda.",
    },
    fotosAbrir: [
      { src: "/fotos/baixo-mino/rosal-concello.jpg", pie: "Casa do concello: el núcleo de O Calvario" },
      { src: "/fotos/baixo-mino/rosal-tamuxe.jpg", pie: "San Miguel de Tabagón: calle de pueblo y puente sobre el Tamuxe" },
    ],
    fotosHistoria: [
      { src: "/fotos/baixo-mino/rosal-tabagon.jpg", pie: "Igrexa de San Xoán de Tabagón: piedra de parroquia" },
      { src: "/fotos/baixo-mino/rosal-folon-vista.jpg", pie: "Muíños do Folón e do Picón: sesenta y siete molinos en cascada" },
    ],
    fotosFuera: [
      { src: "/fotos/baixo-mino/rosal-alameda.jpg", pie: "Alameda de San Miguel: paseo entre parra y pueblo" },
      { src: "/fotos/baixo-mino/rosal-calvario-cruz.jpg", pie: "Cruceiro en O Calvario: el detalle que marca plaza" },
    ],
    creditoFotos: "Fotos: Wikimedia Commons (CC BY-SA).",
  },

  tomino: {
    escala: "Casas dispersas",
    abrir: [
      "Tomiño es un municipio de unos trece mil habitantes extendido por la vega del Miño, con Goián como núcleo, frente a Vila Nova de Cerveira. El río aquí es ancho y manso; se cruza a Portugal en dos minutos por el puente de la Amizade. Quien vive aquí es gente local, trabajadores de los viveros —Tomiño es la capital gallega de la planta ornamental; se ven los invernaderos desde la carretera— y quien busca casa grande barata. Goián tiene lo básico; Cerveira, al otro lado, el mercado de los sábados y más restaurantes: los dos lados funcionan como uno.",
      "En julio y agosto el valle aprieta: media de unos veintiún grados y quince o veinte días por encima de treinta. Es el calor que muchos dejan atrás al venir del Mediterráneo —y aquí, en la vega, vuelve. En otoño e invierno, nieblas de río que levantan a media mañana: el mundo se borra un rato y luego reaparece. El modelo es casa con finca en la vega; poco piso, ninguna urbanización. Fibra parcial. El coche hace falta para la playa —unos veinte minutos— y para Tui —unos quince—.",
      "Un sábado cualquiera explica mejor el sitio que cualquier folleto: por la mañana cruzas a Cerveira, vuelves con fruta y pan, por la tarde el río está quieto y los invernaderos brillan al sol. No es villa de paseo compacto. Es vega, finca y frontera cotidiana. Quien busque plaza y calle junta debería mirar O Rosal o A Guarda; quien busque metros y Portugal a dos minutos entenderá Goián al primer puente.",
      "El calendario une lo que el caserío dispersa. El último fin de semana de julio, San Campio de Figueiró atrae romeros de Galicia y Portugal con exvotos; hacia el 13 de septiembre, la Virxe do Alivio llena Tomiño. Después del Lunes de Pascua, el Lanzo da Cruz cruza el Miño entre Sobrada y la portuguesa Cristelo para bendecir las barcas; en Entroido, el Venres de Foliada pone música y disfraces en la calle, y a finales de noviembre la Festa da Rosca celebra el dulce local. Esos días traen campanas, tráfico y mesas largas a lugares que el resto del año se reparten entre fincas.",
    ],
    tiempo: [
      "Tomiño es donde el clima de la comarca cambia de promesa. El cielo —unos setenta y ocho días despejados, cerca de dos mil cuatrocientas horas de sol— se parece al resto del Baixo Miño; el verano, no. En julio y agosto la vega aprieta: media alrededor de veintiún grados y quince o veinte días por encima de treinta, con puntas altas cuando la ola de calor se cuela río arriba. Es una versión suave de lo que muchos dejan atrás en Baleares —y aquí vuelve.",
      "En otoño e invierno, nieblas de río que levantan a media mañana: el mundo se borra un rato y luego reaparece. La lluvia de octubre a marzo es seria, como en toda la zona. Quien huya del calor y elija la finca barata de la vega debería probar una semana de julio antes de firmar. El anuncio enseña metros; julio enseña el valle.",
    ],
    vivir: [
      "El invierno en Tomiño se siente en la niebla de río tanto como en la humedad de la casa. En Mallorca muchas viviendas casi no piensan en calefacción ni en moho; en la vega del Miño las mañanas de otoño e invierno borran el mundo hasta media mañana y dejan el aire húmedo. Conviene preguntar por aislamiento, ventilación y rastros de moho en planta baja. Visitar la finca un día de niebla y otro de sol bajo vale más que el anuncio de metros.",
      "El día a día sin coche es limitado: Goián tiene lo básico —centro de salud, farmacias, supermercado, bares—, pero Cerveira, al otro lado del puente, multiplica mercado y mesa. Desde las fincas de la vega el coche abre la semana. En enero la frontera sigue siendo cotidiana: se cruza a Portugal un sábado cualquiera. No es villa de paseo compacto; es vega, invernaderos y río.",
      "Llegar de fuera suele buscar metros y precio: conviven gente local, trabajadores de los viveros y quien buscaba casa grande. Se oye gallego en Goián y al otro lado; el castellano basta para lo cotidiano. Entre semana manda el ritmo de frontera y viveros; en julio y agosto la vega aprieta con calor. Quien busque solo calma de costa se equivocará de municipio.",
      "La sanidad de urgencia y especialidades no está en el municipio: el hospital Álvaro Cunqueiro queda a unos treinta y cinco minutos; Vigo, a unos treinta. En Goián hay centro de salud y farmacias para lo diario. Empadronarse abre el médico de cabecera local; para especialistas se baja a Vigo. Es mejor tiempo que desde A Guarda, pero no es sanidad a la vuelta de la esquina.",
      "Mantener el vínculo con Mallorca pasa por el avión desde fuera. El relato sitúa Vigo a unos treinta minutos; conviene mirar Peinador y Santiago y el calendario real de vuelos a Palma. En invierno la logística pesa más: niebla, trayecto y posibles escalas.",
      "Lo habitual es casa con finca en la vega: poco piso, ninguna urbanización. Fibra parcial, casa por casa. El anuncio habla de metros; julio habla de calor (quince o veinte días por encima de treinta); noviembre, de niebla. Conviene presupuestar humedad, calefacción y ventilación, e imaginar la rutina con escaleras o distancias de parcela dentro de diez años.",
    ],
    historia: [
      "Tierra de frontera: el Forte de San Lourenzo de Goián se levantó entre 1671 y 1673, cuando Portugal se había separado de la Monarquía Hispánica y el Miño volvió a ser línea de guerra. Después llegaron siglos de agricultura en la vega. Iglesias románicas como Santa María de Tomiño y Santa María de Tebra recuerdan una historia anterior a los fuertes; el Camino de Nosa Señora do Norte enlaza hoy esas parroquias y santuarios. El nombre de Tomiño se aplica al municipio y a su parroquia central; Goián, junto al puente, es otro de sus núcleos.",
      "Desde hace unas décadas, los viveros cambiaron el paisaje: invernaderos, trabajo y planta ornamental allí donde O Rosal muestra parras. La rosca tomiñesa —masa dulce trenzada, ligada a hornos y fiestas— pertenece a esa economía doméstica que ahora celebra su propia feria. El puente de la Amizade, abierto en 2004, terminó de unir las dos orillas. La fortaleza de San Lourenzo, el paseo del Miño y el mercado de los sábados de Cerveira explican un lugar donde la frontera no es decorado, sino costumbre semanal.",
    ],
    fuera: [
      "No hay playa de mar en el municipio: Tomiño mira al río. Area Grande —cala de arena en A Guarda— queda a unos veinte minutos; Cesantes, por autopista, a media hora. Cesantes es arena larga en el fondo de la ría de Vigo, frente a la isla de San Simón, sin oleaje, agua entre dieciocho y veinte grados: la opción más cómoda desde aquí para un baño largo, sin la brusquedad del Atlántico abierto. Un domingo de agosto hay que contar el trayecto; un martes de junio, no.",
      "El paseo fluvial de Goián es llano, junto al río, con la fortaleza de San Lourenzo a un lado y Vila Nova de Cerveira (Portugal) enfrente: se camina y se siente la frontera como algo cotidiano, no como postal. La Ecopista do Minho —antigua vía de tren portuguesa entre Valença y Monção, quince kilómetros llanos entre viña de Alvarinho— queda a unos diez minutos cruzando hacia Tui. El Monte Aloia, primer parque natural de Galicia (pinar y miradores sobre la vega), a unos veinte. Aquí el agua que se vive cada día es el río ancho; el mar es una salida, no la puerta de casa.",
      "El sábado grande suele ser Cerveira: feria, fruta, ropa, el puente de la Amizade —el que une Goián con Portugal— como quien va al mercado del pueblo de al lado, aunque el pueblo sea otro país. Eso define Tomiño más que cualquier playa lejana. Quien busque villa de paseo compacto se aburrirá; quien busque vega, finca y Portugal a dos minutos entenderá el ritmo al primer puente.",
    ],
    casa: [
      "Lo que encontrarás es casa con finca en la vega: el euro por metro más bajo de la zona, alrededor de mil cien. Eso tienta. También hay que aceptar el verano cálido de valle y las nieblas de río. Fibra parcial: otra vez, casa por casa. El anuncio habla de metros; julio habla de calor; noviembre, de niebla que borra el Miño hasta media mañana.",
      "Goián tiene centro de salud, farmacias, supermercado, bares; Cerveira, a dos minutos, multiplica la mesa y el sábado. El hospital Álvaro Cunqueiro está a unos treinta y cinco minutos; Vigo, a unos treinta. Quien busque solo precio y metros lo encontrará. Quien huya del calor de julio debería mirar O Rosal antes: el paisaje sin ese verano de vega.",
    ],
    encaja: {
      si: [
        "La finca grande y el precio bajo son innegociables, y se acepta probar una semana de julio en la vega antes de firmar. Quien quiera metros, Portugal a dos minutos por el puente de la Amizade (el puente que une Goián con Vila Nova de Cerveira), y tiempo para el río Miño —paseo fluvial, barcas, Cerveira los sábados con su feria al otro lado— puede entender Goián, el núcleo de Tomiño. Aquí la orilla cotidiana es el río ancho, no el Atlántico en la puerta. El hospital público Álvaro Cunqueiro, en Vigo, a unos treinta y cinco minutos, es mejor tiempo que desde A Guarda; la playa de mar (Area Grande en A Guarda, o Cesantes en la ría de Vigo) queda a unos veinte o treinta minutos.",
        "Si el presupuesto obliga a casa con terreno y se elige Goián —no las parroquias del fondo más cerrado del valle—, con ojos abiertos al calor de julio y a las nieblas de río de otoño, Tomiño puede ser la puerta de entrada a la comarca.",
      ],
      no: [
        "El calor de julio y agosto —quince o veinte días por encima de treinta grados— es justo lo que muchos dejan atrás al venir del Mediterráneo. Aquí, en la vega del Miño, vuelve. O Rosal (valle de parras, a unos minutos) da paisaje y tranquilidad sin ese verano; A Guarda, mar fresco en la punta. Si huir del calor es la razón de mudarse, Tomiño no encaja.",
        "Tampoco si la playa de mar tiene que estar a la puerta o si la niebla de río de otoño e invierno —que borra el Miño hasta media mañana— no cabe en el día a día. La finca barata tienta; el verano y la distancia al baño real cobran después.",
      ],
      veredicto:
        "Veredicto: Tomiño no es la primera opción si el calor de valle o el mar lejos pesan. Encaja solo si la casa con finca y el precio son la prioridad, se prueba julio, y se elige Goián con Cerveira (Portugal, al otro lado del puente) como refuerzo de mercado y mesa. Quien busque valle sin ese verano, O Rosal; quien busque mar, A Guarda; quien busque hospital más cerca, Tui.",
    },
    fotosAbrir: [
      { src: "/fotos/baixo-mino/tomino-vega2.jpg", pie: "La vega del Miño: río, pueblo y monte" },
      { src: "/fotos/baixo-mino/tomino-ponte.jpg", pie: "Ponte da Amizade: Goián y Cerveira a dos minutos" },
    ],
    fotosHistoria: [
      { src: "/fotos/baixo-mino/tomino-forte.jpg", pie: "Forte de San Lourenzo: la frontera en piedra" },
      { src: "/fotos/baixo-mino/tomino-vega.jpg", pie: "El Miño al atardecer: la orilla cotidiana" },
    ],
    fotosFuera: [
      { src: "/fotos/baixo-mino/tomino-rio.jpg", pie: "Barcas en el Miño, frente a Cerveira" },
      { src: "/fotos/baixo-mino/tomino-praia-goian.jpg", pie: "Paseo fluvial: el río como vida diaria" },
    ],
    creditoFotos: "Fotos: Wikimedia Commons (CC BY-SA).",
  },

  tui: {
    escala: "Ciudad pequeña frente a Portugal",
    abrir: [
      "Tui es una ciudad pequeña de unos diecisiete mil habitantes sobre el Miño, frente a Valença —la villa amurallada portuguesa al otro lado del río—. Tiene casco de verdad —calles empedradas, soportales, catedral arriba, conventos, judería medieval— y un ensanche con supermercados, instituto y pisos nuevos. El Camino Portugués (la ruta de Santiago que entra por Portugal) le da un goteo de peregrinos todo el año: hay cafeterías abiertas en enero, no solo en agosto. Quien vive aquí es gente local, funcionarios, vecinos que se quedan el año entero; no es una urbanización de veraneantes.",
      "En verano el valle calienta: media de unos veintiún grados, quince o veinte días por encima de treinta —el calor que muchos dejan atrás—. En invierno hay mañanas de niebla de río que levantan a media mañana. El Monte Aloia —primer parque natural de Galicia, pinar y miradores— está encima del pueblo; Portugal, al otro lado del puente internacional, a pie. Es el único de la zona con tren —regional a Vigo y a Porto, aunque pocos trenes— y con la autovía A-55 a cinco minutos: Vigo en veinticinco. El mar, a unos veinticinco minutos (Cesantes en la ría, o Area Grande en A Guarda). Quien priorice hospital y ciudad pequeña lo notará al primer día; quien priorice playa a la puerta, también.",
      "Un martes de noviembre en el casco: piedra mojada, una cafetería con peregrinos, Valença a un paso. Un domingo de agosto en el ensanche: calor de valle, el supermercado lleno, la A-55 como escape a Cesantes —playa larga de arena en el fondo de la ría de Vigo, sin olas—. Las dos Tui existen; elegir calle es elegir cuál de las dos pesa más en tu semana.",
      "La semana mayor empieza en Semana Santa y culmina el lunes siguiente al Lunes de Pascua con San Telmo, Fiesta de Interés Turístico de Galicia desde 2003. Es el tramo más lleno del año: procesiones, feria, música y el meixón —la angula del Miño— en las mesas. El Entroido termina con el Enterro do Bacallau, entierro burlesco del bacalao, y las romerías del Aloia llevan después la vida urbana al monte. Vivir en el casco durante esas fechas significa aceptar calle ocupada y ruido hasta tarde; también participar en el calendario que cose la ciudad.",
    ],
    tiempo: [
      "Tui comparte el sol de la comarca —cerca de setenta y ocho días despejados— y el invierno templado del Miño, pero el verano es otra conversación. En julio el valle calienta: media alrededor de veintiún grados, quince o veinte días por encima de treinta, con puntas altas en las olas de calor. Respecto a Baleares pierdes cielo limpio en invierno; en verano, en cambio, recuperas algo del calor que muchos querían dejar atrás.",
      "Las mañanas de niebla de río borran el mundo hasta media mañana y luego lo devuelven: no es drama, es el clima de frontera fluvial. La lluvia de octubre a marzo es seria. Quien priorice hospital y ciudad pequeña lo notará al primer día; quien priorice verano fresco y playa a la puerta, también —y entonces Tui no es la opción.",
    ],
    vivir: [
      "El invierno en Tui se siente en la niebla de río y en la humedad del granito. En Mallorca muchas casas casi no piensan en calefacción ni en moho; aquí las mañanas borran el valle hasta media mañana y la piedra del casco conserva humedad. Conviene preguntar por aislamiento y ventilación, sobre todo en vivienda antigua. Visitar un piso del ensanche un día de niebla y otro soleado vale más que el plano del anuncio.",
      "El día a día sin coche funciona mejor que en el resto de Baixo Miño: casco, ensanche, supermercados, instituto, cafeterías y Valença a pie por el puente. En enero hay peregrinos del Camino Portugués y mesas abiertas. El tren regional y la A-55 añaden opciones, aunque el coche sigue útil para playa y parroquias. No es una urbanización vacía: es ciudad pequeña abierta todo el año.",
      "Llegar de fuera es habitual entre funcionarios y vecinos que se quedan el año entero; no es urbanización de veraneantes. Se oye gallego y castellano en el casco; Portugal enfrente forma parte de la semana. Entre semana manda la vida urbana; en julio el valle calienta y el ensanche se llena. Quien busque solo silencio de aldea preferirá O Rosal; quien busque integración de ciudad pequeña, Tui.",
      "La sanidad de urgencia y especialidades no está en el municipio, pero es la más cercana de la comarca: Álvaro Cunqueiro y Povisa quedan a unos treinta minutos. En Tui hay centro de salud con urgencias y farmacias. Empadronarse abre el médico de cabecera local; para hospital se va a Vigo. Quien priorice sanidad y ciudad pequeña lo notará al primer día.",
      "Mantener el vínculo con Mallorca pasa por el avión. Vigo-Peinador está a unos veinticinco minutos. Conviene mirar el calendario real de vuelos a Palma —verano y resto del año— y contar también Santiago cuando el enlace lo pida. El coste no es solo el billete: es la logística desde una ciudad de frontera fluvial.",
      "Aquí sí hay obra nueva: el modelo habitual es piso reciente con ascensor en el ensanche, cerca del casco pero en calles más anchas. También hay casas en las parroquias de la ladera del Aloia. Conviene medir ruido de la A-55 según la calle y presupuestar calefacción moderna frente a piedra medieval húmeda. La terraza útil es la que no recibe solo el zumbido de la autovía.",
    ],
    historia: [
      "Tude fue ciudad romana, capital del reino suevo en el siglo VI y sede episcopal desde entonces; el nombre actual conserva aquella forma antigua. En la Edad Media fue una de las siete capitales del Reino de Galicia y mantuvo esa condición provincial hasta la reforma de 1833. La catedral de Santa María comenzó hacia 1120 y fue consagrada en 1225: templo románico y gótico hecho también fortaleza, con almenas, torres y el único claustro medieval completo de las catedrales gallegas. Desde la torre y la muralla se ve el Miño y Valença. Alrededor quedan Santo Domingo, San Bartolomeu de Rebordáns y la antigua judería.",
      "El Camino Portugués entra en Galicia por Tui y atraviesa ese casco antes de seguir hacia Compostela. El puente internacional de 1886 la unió por hierro a Valença; desde 2012 ambas forman una Eurocidade, cooperación formal para una relación cotidiana mucho más antigua. Se cruza a pie hacia las murallas abaluartadas y los cafés del fin de semana. En el convento de las Clarisas, los peixiños de améndoa —dulces de almendra con forma de pez— salen por el torno y cuentan en pequeño esa ciudad de río, clausura y frontera.",
    ],
    fuera: [
      "No hay playa de mar en el municipio: Tui es ciudad de río. Cesantes queda a unos veinticinco minutos —arena larga en el fondo de la ría de Vigo, frente a la isla de San Simón, sin olas, agua entre dieciocho y veinte grados—. Area Grande, la cala de A Guarda, a media hora. En el propio Miño, Areeiros es playa fluvial: agua de río, no de mar; en verano se usa y se entiende que aquí la orilla cotidiana es otra. Quien necesite el océano a la puerta debería mirar A Guarda u Oia; quien acepte el trayecto gana la ciudad pequeña.",
      "El paseo del casco sube por calles empedradas hasta la catedral y recorre el adarve —el camino sobre la muralla— con el Miño y Valença debajo: piedra, pendiente, Portugal a la vista. El paseo fluvial es llano, bajo la catedral, hasta el puente de hierro de 1886. El Monte Aloia —ocho kilómetros, quince minutos— es el primer parque natural de Galicia: pinar, mesas, miradores sobre la vega; el paseo del domingo. Cruzando el puente hacia Portugal, la Ecopista Valença–Monção empieza a dos kilómetros: quince kilómetros llanos entre viña de Alvarinho; al final, en Monção, unas termas municipales.",
      "Valença no es excursión: es la otra mitad de la semana. Villa portuguesa amurallada, tiendas de toallas y manteles, cafés dentro de la fortaleza. Un sábado cualquiera se cruza a pie; un martes de lluvia también. Esa frontera permeable explica Tui tanto como la catedral: se vive con Portugal enfrente, no como postal al fondo.",
    ],
    casa: [
      "Aquí sí hay obra nueva, y eso cambia la conversación. El modelo habitual es un piso nuevo o reciente, con ascensor, en el ensanche: edificios de las últimas décadas, cerca del casco pero ya en calles más anchas, con supermercado a mano e instituto cerca. No es lo mismo vivir pegado a la piedra medieval que vivir a cinco minutos andando de ella, con parking y calefacción moderna. También hay quien busca casa en las parroquias de la ladera del Aloia: más verde, más silencio, el monte encima, y el casco abajo para cuando apetece.",
      "La precisión importa: «cerca del casco, no pegado a la A-55». La autovía da Vigo en veinticinco minutos y eso es un lujo; también mete ruido según la calle. Quien compre debería visitar a distintas horas y notar si el zumbido entra por la terraza. Una mañana de niebla de noviembre cuenta otra historia: el valle se borra y luego reaparece. Fibra sí, de verdad. El metro ronda mil doscientos cincuenta euros; un piso nuevo de tres habitaciones puede andar cerca de ciento veinte mil.",
      "Los servicios son los mejores de la comarca: centro de salud con urgencias, farmacias, supermercados grandes —incluido uno a la salida hacia la A-55—, comercio, cafeterías, instituto, conservatorio, tren, Valença enfrente. Falta hospital y cine: eso está en Vigo, a media hora. El Álvaro Cunqueiro y Povisa, unos treinta minutos. Vigo-Peinador, veinticinco. Quien elija Tui elige ciudad pequeña y logística; a cambio acepta el mar a veinticinco minutos y el calor de valle en julio.",
    ],
    encaja: {
      si: [
        "El hospital público Álvaro Cunqueiro, en Vigo, a unos treinta minutos; la ciudad pequeña —casco empedrado, comercio, tren regional, Valença (Portugal) a pie por el puente internacional, autovía A-55 a Vigo en veinticinco minutos— importan más que tener el mar a la puerta. Quien tenga tiempo para el casco, para el Monte Aloia los domingos (el primer parque natural de Galicia, pinar y miradores sobre la vega, a unos quince minutos), para cruzar a Valença y usar la villa como base encontrará en Tui la logística más completa de Baixo Miño. El mar queda a unos veinticinco minutos: Cesantes (playa larga en la ría de Vigo, sin olas) o Area Grande (cala de A Guarda). Es salida, no umbral.",
        "Hay obra nueva y fibra de verdad: quien busque piso reciente con ascensor en el ensanche —las calles más anchas junto al casco, no la piedra medieval misma—, cerca del centro y no pegado a la autovía A-55, puede resolver aquí lo que en Oia (aldeas sin súper) o Tomiño (finca y calor de vega) no hay.",
      ],
      no: [
        "El calor de julio en el fondo del Miño —quince o veinte días por encima de treinta grados— es una versión suave de lo que muchos querían dejar atrás. Si el verano fresco de costa es la razón de venir, Tui no: mirar A Guarda u Oia, en la punta atlántica. Tampoco encaja si el mar tiene que estar a un paseo: aquí la orilla cotidiana es el río Miño, no el océano.",
        "La A-55 da Vigo cerca y también ruido según la calle del ensanche. Quien no compruebe el zumbido ni una mañana de niebla de noviembre —cuando el valle se borra hasta media mañana— se decidirá sin conocer el invierno. Si se busca silencio de valle sin ciudad, O Rosal (parras y plaza, tierra adentro) está más cerca en espíritu.",
      ],
      veredicto:
        "Veredicto: Tui encaja si lo que más pesa es tener hospital a unos treinta minutos, ciudad pequeña con comercio y tren, y Portugal (Valença) a un paso por el puente —y se acepta que el mar no está a la puerta (Cesantes o Area Grande, unos veinticinco minutos) ni el verano es fresco como en A Guarda u Oia. Se puede encontrar piso nuevo en el ensanche, cerca del casco: es la zona práctica de la villa (supermercados, instituto, calles anchas), con la catedral y el casco empedrado a unos minutos a pie. Si se elige piso junto a la autovía A-55, puede haber ruido de tráfico; conviene visitar a distintas horas y preguntar. En julio el valle calienta —quince o veinte días por encima de treinta grados—, más que en A Guarda o Oia, donde el Atlántico refresca: si se viene huyendo del calor mediterráneo, Tui no es la opción; si lo que pesa es sanidad, conexiones y Valença a pie, es la opción logística de la comarca. Conviene comprobar también las mañanas de niebla de río, que borran el paisaje hasta media mañana.",
    },
    fotosAbrir: [
      { src: "/fotos/baixo-mino/tui-catedral-casco.jpg", pie: "Tui sobre el Miño: casco y catedral desde el puente" },
      { src: "/fotos/baixo-mino/tui-alameda.jpg", pie: "La alameda: el paseo urbano de la villa" },
    ],
    fotosHistoria: [
      { src: "/fotos/baixo-mino/catedral-tui.jpg", pie: "Catedral de Santa María: fortaleza arriba del casco" },
      { src: "/fotos/baixo-mino/tui-ponte.jpg", pie: "Puente internacional: hierro sobre el Miño hacia Valença" },
    ],
    fotosFuera: [
      { src: "/fotos/baixo-mino/tui-valenca.jpg", pie: "Valença vista desde Tui: la otra orilla a pie" },
      { src: "/fotos/baixo-mino/tui-aloia.jpg", pie: "Desde el Monte Aloia: la vega, el río y los pueblos" },
    ],
    creditoFotos: "Fotos: Wikimedia Commons (CC BY-SA).",
  },
};

export const RELATO_MUNICIPIOS: Record<string, RelatoMun> = {
  ...RELATOS_BAIXO_MINO,
  ...RELATOS_VAL_MINOR,
  ...RELATOS_VIGO_E_RIA,
  ...RELATOS_O_MORRAZO,
  ...RELATOS_PONTEVEDRA_E_SANXENXO,
  ...RELATOS_O_SALNES,
  ...RELATOS_BARBANZA_E_NOIA,
  ...RELATOS_GOLFO_ARTABRO_E_FERROL,
  ...RELATOS_A_MARINA,
  ...RELATOS_ASTURIAS_OCCIDENTE,
  ...RELATOS_ASTURIAS_CENTRO,
  ...RELATOS_ASTURIAS_ORIENTE,
  ...RELATOS_CANTABRIA_OCCIDENTAL,
  ...RELATOS_CANTABRIA_ORIENTAL,
  ...RELATOS_ALTO_MINHO,
  ...RELATOS_LITORAL_NORTE,
};

export default function RelatoMunicipio({
  ficha,
  zonaId,
}: {
  ficha: FichaMunicipio;
  zonaId: string;
}) {
  const r = RELATO_MUNICIPIOS[ficha.slug];
  if (!r) return null;
  const vecinos = municipiosDeZonaFicha(zonaId);
  const escalas = Object.fromEntries(
    vecinos.map((m) => {
      const relato = RELATO_MUNICIPIOS[m.slug];
      return [m.municipio, relato?.escala ?? ""] as const;
    }),
  );

  return (
    <article className="mt-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">{r.escala}</p>

      <h2 className="mt-6 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
        Cómo se vive
      </h2>
      <Parrafos textos={r.abrir} />
      <Fotos items={r.fotosAbrir} />

      <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
        Frente a Mallorca
      </h2>
      <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
        Clima
      </h3>
      <Parrafos textos={r.tiempo} />
      {r.vivir && r.vivir.length > 0 ? (
        <>
          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
            Vivir
          </h3>
          <Parrafos textos={r.vivir} />
        </>
      ) : null}

      <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
        De dónde viene
      </h2>
      <Parrafos textos={r.historia} />
      <Fotos items={r.fotosHistoria} />

      <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
        Mar, río y camino
      </h2>
      <Parrafos textos={r.fuera} />
      <Fotos items={r.fotosFuera} />

      <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">Casa</h2>
      <Parrafos textos={r.casa} />
      <TablaPrecios filas={[ficha]} />
      <EnlaceIdealista ambito="municipio" slug={ficha.slug} nombre={ficha.municipio} />

      <Encaja si={r.encaja.si} no={r.encaja.no} veredicto={r.encaja.veredicto} />

      <section className="mt-12 max-w-3xl">
        <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
          Más pueblos de{" "}
          <Link href={`/zona/${zonaId}/`} className="underline-offset-2 hover:underline">
            {ficha.zona}
          </Link>
        </h2>
        <TablaComparativaZona
          municipios={vecinos}
          zonaId={zonaId}
          slugActual={ficha.slug}
          escalas={escalas}
        />
      </section>

      <p className="mt-12 max-w-2xl text-xs text-[var(--tinta-suave)]">{r.creditoFotos}</p>
    </article>
  );
}
