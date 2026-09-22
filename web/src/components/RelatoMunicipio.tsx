import Link from "next/link";
import Image from "next/image";
import Encaja from "@/components/Encaja";
import Foto from "@/components/Foto";
import TablaComparativaZona from "@/components/TablaComparativaZona";
import EnlaceIdealista from "@/components/EnlaceIdealista";
import { municipiosDeZonaFicha, type FichaMunicipio } from "@/lib/municipios";
import { rutaPublica } from "@/lib/ruta-publica";
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
  /**
   * Foto de identidad: casas del pueblo + mar/ría/monte en el mismo encuadre.
   * Se muestra arriba del relato (una sola vez; si coincide con otra foto, no se repite abajo).
   */
  fotoIdentidad?: FotoRelato;
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

function Fotos({ items, omitSrc }: { items: FotoRelato[]; omitSrc?: string }) {
  if (!items.length) return null;
  const seen = new Set<string>();
  if (omitSrc) seen.add(omitSrc);
  const unicas = items.filter((f) => {
    if (seen.has(f.src)) return false;
    seen.add(f.src);
    return true;
  });
  if (!unicas.length) return null;
  return (
    <>
      {unicas.map((f) => (
        <Foto key={f.src} src={f.src} pie={f.pie} />
      ))}
    </>
  );
}

/** Hero de ficha: casas + entorno (mar/ría/monte), para imaginar vivir ahí. */
function FotoIdentidad({ foto }: { foto: FotoRelato }) {
  return (
    <figure className="mt-6 overflow-hidden rounded-xl border border-[var(--linea)] bg-white">
      <Image
        src={rutaPublica(foto.src)}
        alt={foto.pie}
        width={1600}
        height={1000}
        className="h-auto w-full"
        priority
      />
      <figcaption className="px-3 py-2 text-sm text-[var(--tinta-suave)]">{foto.pie}</figcaption>
    </figure>
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
      "A Guarda se siente más grande de lo que sugiere el mapa: lonja, mercado, farmacia, biblioteca y un frente litoral donde el oficio del puerto no cierra la temporada. El casco baja hacia la dársena; detrás, siempre, el Monte Santa Trega —castro, mirador y la desembocadura del Miño abriéndose al Atlántico—. Portugal queda a la vista: Caminha al otro lado; el ferry, cuando opera, corta el estuario.",
      "Un martes de noviembre se resuelve mucha vida a pie en el núcleo. En julio y agosto la PO-552 se atasca y el verano añade visitantes, pero la villa no depende de esa afluencia para funcionar. Quien vive aquí es gente local, vecinos de oficio y quien vuelve en agosto; no es una urbanización plantada sobre el paisaje.",
      "El calendario tiene días que cambian el sonido del puerto. El primer fin de semana de julio la Festa da Langosta lleva el emblema marino a las mesas; hacia mediados de mes la Virxe do Carme baja en procesión hasta los barcos. En la segunda semana de agosto la Festa do Monte sube peñas y bandas al Santa Trega. Quien viva junto al puerto o en el camino del monte debe contarlas como parte de la semana, no como excepción imprevista.",
    ],
    tiempo: [
      "Frente a Mallorca, A Guarda es atlántica de punta: más cielo gris y humedad entre noviembre y febrero, verano fresco con brisa y nortada que se nota en casa. La diferencia no está tanto en el termómetro de enero como en cuántos días la terraza deja de ser extensión segura de la vivienda.",
    ],
    vivir: [
      "El invierno se nota en el salitre, la nortada y la lluvia seria más que en el frío seco. Conviene orientación de terraza —hacia el Miño o el puerto, no a la esquina más abierta al Atlántico—, aislamiento y rastros de humedad. Un día de viento fuerte enseña más que un sábado soleado en Area Grande.",
      "Sin coche, el núcleo cubre mercado, farmacia, compra básica y paseo portuario. FUERTE autonomía cotidiana no significa vivir sin volante: coche para hospital especializado del área de Vigo y para algunas salidas costeras. En enero hay lonja, mercadillo y calle abierta; en agosto, tráfico y aparcamiento corto.",
      "Se oye gallego en el mercado y en la lonja; el castellano basta para lo diario. Entre semana manda el ritmo de puerto; en fiestas y verano crecen ruido y coches. Mantener el vínculo con Mallorca pasa por avión: Vigo y Porto suelen servir en temporada de verano; Santiago ofrece más continuidad el resto del año. Conviene mirar el calendario real, no asumir un enlace permanente desde Peinador.",
      "La tipología habitual es piso en edificio bajo con terraza al río o a la dársena, o chalé en laderas hacia Camposancos. El peaje de la punta es escala pequeña y hospital especializado fuera; el atractivo, mar y oficio sin apagar la villa en invierno.",
    ],
    historia: [
      "Antes que la villa existió el castro del Santa Trega: poblado de la Edad del Hierro con casas de piedra, museo arqueológico, ermita y mirador sobre la boca del Miño. El nombre de A Guarda habla de vigilar esa desembocadura. Abajo, el Castelo de Santa Cruz recuerda otra frontera del siglo XVII.",
      "Durante siglos se vivió de la pesca; desde el XIX, también de la emigración a América y de casas de indianos que todavía marcan algunas calles. El Museo do Mar, al final del paseo, cuenta el oficio; Camposancos, parroquia del estuario, completa el mapa hacia Portugal.",
    ],
    fuera: [
      "El paseo cotidiano une puerto y frente litoral; Area Grande es la cala cercana de arena abrigada, utilizable según microzona, no un gran arenal urbano de folleto. Hacia Camposancos, O Muíño cambia el registro: agua de estuario, Portugal enfrente, sin olas.",
      "Subir al Santa Trega es la salida deliberada que explica la punta: castro, mirador y desembocadura. La senda litoral hacia Oia y, tierra adentro, los molinos del Folón en O Rosal amplían el radio cuando se quiere otra tarde.",
    ],
    casa: [
      "Conviene vivienda cómoda y accesible, con exterior usable y distancia real a pie a mercado y puerto. La terraza al Miño o a la dársena suele vivir mejor que la más expuesta a la nortada.",
      "Camposancos y las laderas ofrecen otra microzona: más río y frontera, más coche para algunos recados. Los precios quedan en la capa factual; aquí importa tipología y exposición al viento.",
    ],
    encaja: {
      si: [
        "Encaja si mar, puerto y villa abierta todo el año pesan más que tener el hospital especializado a la vuelta de la esquina. El día a día cabe a pie en el núcleo; Santa Trega y Portugal forman parte del mapa mental.",
        "También si se acepta el verano con tráfico en la PO-552 y las fiestas del puerto y del monte como ruido puntual, y se entiende Area Grande como baño de microzona, no como playa infinita.",
      ],
      no: [
        "Encaja peor si la prioridad absoluta es sanidad de alta complejidad sin desplazamiento: hay que salir al área de Vigo. Tampoco si se busca silencio absoluto de agosto o se decide solo tras un sábado soleado, sin probar nortada ni noviembre.",
        "Tampoco si se necesita ciudad grande a un cuarto de hora: Vigo sigue siendo trayecto, no umbral.",
      ],
      veredicto:
        "A Guarda combina autonomía fuerte de villa marinera con mar y oficio en la boca del Miño. Su peaje es hospital especializado fuera y presión estival en la carretera de costa; quien priorice punta atlántica y calle abierta en enero encontrará aquí más vida propia que en un destino que solo se enciende en agosto."
    },
    fotoIdentidad: {
      src: "/fotos/baixo-mino/a-guarda-identidad.jpg",
      pie: "A Guarda: casas del paseo, Atlántico delante y el monte detrás — así se vive en la punta",
    },
    fotosAbrir: [
      { src: "/fotos/baixo-mino/a-guarda-villa.jpg", pie: "La villa pegada al Atlántico, con el Monte Santa Trega detrás" },
      { src: "/fotos/baixo-mino/a-guarda-paseo.jpg", pie: "Paseo marítimo y casas de costa: el día a día frente al océano" },
    ],
    fotosHistoria: [
      { src: "/fotos/baixo-mino/a-guarda-castro.jpg", pie: "Castro de Santa Trega: poblado de piedra de hace dos mil años sobre la desembocadura" },
      { src: "/fotos/baixo-mino/a-guarda-porto.jpg", pie: "Puerto de A Guarda: el mar como oficio, no como foto de turismo" },
    ],
    fotosFuera: [
      { src: "/fotos/baixo-mino/a-guarda-costa.jpg", pie: "Costa atlántica hacia Area Grande, la playa de diario" },
      { src: "/fotos/baixo-mino/a-guarda-camposancos.jpg", pie: "Camposancos, parroquia del estuario, con Caminha (Portugal) al otro lado" },
    ],
    creditoFotos: "Fotos: Wikimedia Commons (CC BY-SA).",
  },

  oia: {
    escala: "Casas dispersas entre sierra y océano",
    abrir: [
      "Oia no es un pueblo con plaza que lo reúna todo. Son parroquias —Oia, Mougás, Viladesuso, Pedornes, Burgueira, Loureza, Torroña— colgadas entre la Serra da Groba y el Atlántico. Se vive en aldea: océano delante, sierra detrás, y un monasterio de piedra plantado frente al mar que organiza la imagen más reconocible del municipio.",
      "La autonomía cotidiana es baja-media y la dependencia del coche, alta. Un martes de noviembre se pueden recorrer kilómetros sin cruzarse con nadie salvo el viento; el súper grande y el instituto están en Baiona o A Guarda. Tener costa no equivale a playa cotidiana desde cualquier vivienda: el baño y el paseo cambian mucho por parroquia.",
      "Hay semanas en que la sierra rompe el silencio. El lunes después de Pentecostés, la Virxe do Mar reúne parroquias junto al océano. Entre mayo y junio, los curros de Valga, Torroña y Mougás bajan los caballos de la Groba; en agosto llegan las «moscas». Carretera, polvo y voces ocupan entonces un paisaje que el resto del año parece vacío.",
    ],
    tiempo: [
      "El cielo es de costa atlántica abierta: más gris y humedad en invierno que en Mallorca, verano fresco y viento que pesa más que el termómetro. Un noviembre en aldea dice más que un agosto soleado junto al monasterio.",
    ],
    vivir: [
      "El invierno se siente en la soledad de la casa tanto como en la lluvia. Piedra o chalé con vistas pueden retener humedad si fallan aislamiento y ventilación. Visitar la aldea concreta un día gris enseña más que el anuncio de horizonte.",
      "Sin coche no hay rutina completa: compra, médico e instituto piden volante. Los servicios básicos dependen de la parroquia; centro de salud, farmacia y aula municipal no sustituyen un núcleo compacto. En enero las aldeas se vacían; en agosto hay más coches en la PO-552, pero el carácter disperso no cambia.",
      "Llegar de fuera suele ser decisión deliberada: silencio y paisaje a cambio de distancia. Se oye gallego en las parroquias; la vida social pasa por vecindario, no por calle mayor. Para ir y volver a Mallorca, Vigo y Porto suelen servir en verano; Santiago aporta más continuidad. El trayecto empieza en la aldea concreta, no en un casco inexistente.",
      "El peaje es paisaje atlántico a cambio de dispersión. Quien confunda Oia con villa de bahía se equivocará de municipio.",
    ],
    historia: [
      "Todo gira alrededor del monasterio de Santa María de Oia: comunidad documentada desde el siglo XII, Císter frente al océano, piedra y oleaje en la misma imagen. Desamortizado en el XIX, hoy el conjunto es privado; iglesia y claustro se ven desde la senda litoral.",
      "Cuando el monasterio se cerró, quedó el mapa actual: aldeas, sierra y océano. En la Cabeciña de Mougás hay petroglifos; arriba pervive la ganadería comunal de los curros. Los nombres —Mougás, Torroña, Valga— nombran lugares distintos, no barrios de un único casco.",
    ],
    fuera: [
      "Los paseos costeros existen según parroquia; no hay continuidad urbana que una un paseo marítimo único. Praia de Mougás es pequeña y batida: se va a mirar y a sentir el oleaje más que a un baño largo de resort. Para arena abrigada mucha gente baja a Baiona.",
      "La senda litoral —Camino Portugués de la Costa— y el Alto da Groba —meseta de brezo y garranos— son las salidas que explican Oia. Monasterio, costa y sierra se recorren con desplazamientos frecuentes entre parroquias.",
    ],
    casa: [
      "Lo habitual es casa aislada de piedra o chalé con vistas. No comprar solo por el horizonte: comprobar farmacia, compra, acceso y pendiente reales desde esa dirección.",
      "La fibra es parcial y debe verificarse vivienda a vivienda. La experiencia cambia mucho por parroquia; dos anuncios con «vistas al mar» pueden describir vidas cotidianas distintas.",
    ],
    encaja: {
      si: [
        "Encaja si se busca océano salvaje y silencio y se acepta coche para casi todo lo que no sea mirar el mar. Monasterio, senda litoral y Groba están cerca de la puerta; el súper grande, no.",
        "También si se entiende que el baño cómodo puede quedar en Baiona y que noviembre vacía las aldeas sin convertir eso en fallo del municipio.",
      ],
      no: [
        "Encaja peor si se necesita plaza, comercio continuo y vida resoluble andando un martes de enero. Tampoco si el hospital del área de Vigo o el instituto fuera resultan inasumibles.",
        "Tampoco si se decide solo en agosto soleado, sin haber visto el silencio y la dependencia del volante en invierno.",
      ],
      veredicto:
        "Oia ofrece Atlántico y sierra a cambio de dispersión y coche. No es villa compacta ni playa cotidiana generalizable; es la opción de quien quiere horizonte bruto y ha comprobado un noviembre en la parroquia concreta donde piensa vivir."
    },
    fotoIdentidad: {
      src: "/fotos/baixo-mino/oia-identidad.jpg",
      pie: "Oia: casas junto al monasterio, Atlántico delante y la sierra detrás",
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
    escala: "Valle de viña con núcleo en O Calvario",
    abrir: [
      "O Rosal es valle interior entre parras altas, casas de piedra y monte detrás: la Serra da Groba a un lado, el Santa Trega al otro. En O Calvario —el núcleo— hay plaza, comercio básico e iglesia; alrededor, parroquias como Tabagón, San Miguel o Eiras con huerto y viña. No es punta atlántica: es paisaje fluvial y rural a unos minutos de A Guarda.",
      "La autonomía es media-baja. En el núcleo se resuelve farmacia, súper pequeño y atención primaria; fuera, el coche gana peso. La costa y el baño requieren desplazamiento: aquí no hay playa marina cotidiana. Agosto no satura como la punta; el invierno es húmedo y verde, con parras desnudas.",
      "A mediados de julio la Feira do Viño do Rosal llena la Praza do Calvario de bodegas y visitantes; después, las Festas do Pilar devuelven el calendario a lo parroquial. Esos días traen música, coches buscando hueco y mesas llenas; las casas dispersas recuperan pronto su silencio.",
    ],
    tiempo: [
      "El valle siente el invierno más en humedad de paredes que en frío seco, y el verano más suave que el fondo del Miño. Frente a Mallorca se pierde continuidad de sol sobre todo de noviembre a febrero; de junio a septiembre la terraza vuelve a usarse. Las cifras quedan en la capa factual.",
    ],
    vivir: [
      "Conviene tocar paredes en noviembre, preguntar por aislamiento y mirar moho. El Folón con lluvia fina se vuelve musgo y cascada; esa misma humedad entra en casa si la orientación y la ventilación fallan.",
      "En O Calvario se puede hacer bastante a pie; en las parroquias el coche une finca, viña y pueblo. A Guarda cubre lonja y compra más amplia. En enero el valle mantiene ritmo local limitado; no es vacío total ni ciudad.",
      "Hay poca llegada de veraneo masivo: gente local, ritmo de plaza y bodega. Se oye gallego en O Calvario; el castellano basta para lo diario. Para Mallorca, Vigo y Porto suelen servir en verano; Santiago aporta más continuidad. El hospital práctico queda en el Álvaro Cunqueiro, en Vigo: la consecuencia es trayecto deliberado, no sanidad a la puerta.",
      "Buenas rutas y paisaje a cambio de menos vida resoluble andando. Quien busque solo playa se aburrirá; quien busque valle con mar a rato corto, no.",
    ],
    historia: [
      "Valle agrícola de viña, huerta y molinos comunales. Los Muíños do Folón e Picón —decenas de molinos escalonados en dos regueros— son Bien de Interés Cultural y explican el trabajo del agua en la ladera. O Rosal da nombre al valle y a una subzona de Rías Baixas: la parra es economía, no decorado.",
      "Tierra de emigración, frontera con Portugal y oficios de temporada. Lugares que cuentan el municipio: O Calvario, los molinos y los miradores hacia el Miño.",
    ],
    fuera: [
      "El paseo propio no es marítimo: es rural y fluvial. Folón-Picón es salida con desnivel más que paseo llano diario; la Senda dos Pescadores acompaña el Miño. Area Grande u O Muíño, en A Guarda, cubren el baño cuando apetece y se vuelve al valle al atardecer.",
      "Portugal —Caminha, Vila Nova de Cerveira— queda cerca por puente. El mar es salida; la vida diaria es plaza, parra y monte.",
    ],
    casa: [
      "Lo habitual es casa de piedra con parra y huerto, o chalé en ladera orientada al sur en las parroquias. Poca obra nueva; fibra parcial en zonas altas.",
      "Conviene comprobar acceso real a O Calvario, humedad de noviembre y cuánto tarda el coche a la costa un domingo de agosto. Tipología de valle, no de primera línea.",
    ],
    encaja: {
      si: [
        "Encaja si valle, viña y ritmo de pueblo pesan más que el océano en el umbral. Folón, pistas entre parras y A Guarda a rato corto bastan como mapa de ocio.",
        "También si se acepta coche fuera del núcleo, hospital en Vigo y una escala de servicios limitada pero viva todo el año.",
      ],
      no: [
        "Encaja peor si hace falta playa marina cotidiana o ciudad a un cuarto de hora. Tampoco si la humedad de noviembre o la fibra parcial en parroquias altas se descubren solo después de firmar.",
        "Tampoco si se necesita la autonomía peatonal de A Guarda o Tui: aquí el núcleo ayuda, pero no concentra tanto.",
      ],
      veredicto:
        "O Rosal es la opción de valle de Baixo Miño: parra, O Calvario y Folón a cambio de mar como salida y menos vida andando. Encaja quien prioriza paisaje interior y acepta A Guarda y Vigo como apoyos; no quien necesita océano o hospital en el umbral."
    },
    fotoIdentidad: {
      src: "/fotos/baixo-mino/o-rosal-identidad.jpg",
      pie: "O Rosal: casas de San Miguel de Tabagón junto al puente del Tamuxe, con el valle detrás",
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
    escala: "Vega del Miño: núcleo, Goián y parroquias",
    abrir: [
      "Tomiño se extiende por la vega del Miño con una advertencia clara: no tratar Tomiño núcleo, Goián y el resto de parroquias como una sola experiencia. Goián mira al río frente a Vila Nova de Cerveira; el puente de la Amizade convierte Portugal en costumbre semanal. Tierra adentro pesan fincas, invernaderos de planta ornamental y distancias que el coche cose.",
      "La autonomía es media y la dependencia del coche, media-alta. Goián y Seixo concentran servicios propios; el municipio no es localidad de playa marina. La relación cotidiana es con el río: ribera, fortaleza de San Lourenzo, parque y actividades de agua dulce.",
      "El calendario une lo que el caserío dispersa. San Campio de Figueiró a finales de julio atrae romeros de Galicia y Portugal; la Virxe do Alivio llena Tomiño en septiembre. El Lanzo da Cruz cruza el Miño tras la Pascua; el Entroido y la Festa da Rosca marcan otros picos de tráfico y mesas largas en lugares que el resto del año se reparten entre fincas.",
    ],
    tiempo: [
      "En la vega el verano aprieta más que en la punta atlántica: vuelve una versión suave del calor que muchos dejan atrás al salir de Mallorca. Otoño e invierno traen nieblas de río que levantan a media mañana. Conviene probar julio antes de enamorarse solo de los metros de finca.",
    ],
    vivir: [
      "El invierno se siente en niebla y humedad de planta baja. Conviene aislamiento, ventilación y no firmar solo con sol de anuncio. Un día de niebla y otro de calor de valle describen mejor la casa.",
      "Goián resuelve lo básico; Cerveira multiplica feria y mesa al otro lado del puente. Desde las fincas el coche abre la semana. En enero la frontera sigue abierta; no hay paseo compacto de villa marina.",
      "Conviven gente local, trabajo de viveros y quien busca casa con terreno. Se oye gallego a ambos lados del Miño. Hospital práctico en el Álvaro Cunqueiro: trayecto asumible frente a la punta, pero no sanidad intramuros. Para Mallorca, Vigo queda más cerca; Porto y Santiago completan según temporada. Ningún enlace debe darse por permanente.",
      "Espacio y río a cambio de dispersión. Quien confunda todo Tomiño con Goián se llevará una sorpresa de distancias.",
    ],
    historia: [
      "Tierra de frontera: el Forte de San Lourenzo de Goián se levantó en el siglo XVII cuando el Miño volvió a ser línea de guerra. Iglesias románicas como Santa María de Tomiño recuerdan una historia anterior; el puente de la Amizade terminó de coser las dos orillas en la vida diaria.",
      "Los viveros cambiaron el paisaje reciente: invernaderos donde otros municipios muestran parras. La rosca tomiñesa y las fiestas de río cuentan una economía doméstica y fronteriza.",
    ],
    fuera: [
      "El paseo cotidiano es la ribera en Goián: fortaleza, parque y Portugal enfrente. No hay playa marina en el municipio; Area Grande o la ría de Vigo quedan como salidas. La Ecopista do Minho y el Monte Aloia amplían el mapa fluvial y de monte.",
      "El sábado de Cerveira —feria al otro lado del puente— define Tomiño tanto como cualquier arenal lejano. El agua de diario es el Miño ancho.",
    ],
    casa: [
      "Lo habitual es casa con finca en la vega: poco piso compacto, poca urbanización de costa. Fibra parcial, dirección a dirección.",
      "Elegir Goián no es lo mismo que elegir una parroquia del fondo del valle. Conviene medir calor de julio, niebla de noviembre y distancia real a servicios antes de quedarse solo con la foto del río.",
    ],
    encaja: {
      si: [
        "Encaja si finca, río y Portugal cotidiano pesan más que el Atlántico a la puerta. Goián con Cerveira ofrece frontera vivida; el hospital queda más cerca que desde A Guarda.",
        "También si se acepta dispersión, coche y un verano de vega más cálido, y se ha distinguido bien la microzona.",
      ],
      no: [
        "Encaja peor si se huye del calor mediterráneo y se encuentra de nuevo en julio. Tampoco si la playa marina debe estar en el umbral o si la niebla de río no cabe en la rutina.",
        "Tampoco si se espera villa de paseo compacto: aquí el mapa se reparte entre núcleos y fincas.",
      ],
      veredicto:
        "Tomiño ofrece espacio, Miño y frontera con Cerveira a cambio de dispersión y verano de vega. Encaja quien elige Goián con ojos abiertos al calor y a las distancias; no quien necesita mar fresco o un casco único que lo resuelva todo andando."
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
    escala: "Ciudad pequeña frente a Valença",
    abrir: [
      "Tui se entiende desde el Miño: casco empedrado con catedral arriba, soportales y judería; ensanche con comercio, instituto y pisos más recientes; Valença —villa amurallada portuguesa— al otro lado del puente. El Camino Portugués trae peregrinos todo el año y mantiene mesas abiertas en enero. No es ciudad costera: es ciudad fluvial de frontera.",
      "La autonomía cotidiana es fuerte. Mercado de San Antonio, farmacia, biblioteca, teatro, conservatorio y piscina caben en una ciudad pequeña; el tren Vigo–Porto y la A-55 añaden opciones. El coche sigue útil para costa y hospital de alta complejidad. En el casco, las cuestas importan: la cota de la vivienda cambia la caminabilidad.",
      "La semana mayor culmina con San Telmo tras la Pascua: procesiones, feria, música y el meixón en las mesas. El Entroido cierra con el Enterro do Bacallau; las romerías del Aloia llevan la vida urbana al monte. Vivir en el casco esas fechas significa calle ocupada y ruido hasta tarde.",
    ],
    tiempo: [
      "El invierno trae niebla de río y humedad de granito; el verano de valle calienta más que la punta atlántica. Frente a Mallorca se pierde cielo limpio en invierno y se recupera algo del calor que muchos querían dejar atrás. Quien priorice verano fresco debería mirar la costa.",
    ],
    vivir: [
      "En vivienda antigua conviene aislamiento y ventilación; en el ensanche, medir ruido de la A-55 según la calle. Una mañana de niebla y una tarde de julio describen dos Tui distintas.",
      "Sin coche se resuelve más que en el resto de Baixo Miño: casco, ensanche y Valença a pie. El tren y el bus existen; su utilidad real depende del trayecto, no del nombre de la línea. En enero hay peregrinos y comercio; en agosto, calor de valle y escape hacia playas de salida.",
      "Conviven vecinos de año entero y quien trabaja con la frontera. Se oyen gallego, castellano y portugués en la misma semana. Hospitales del área de Vigo: primaria en Tui, especialidades y urgencias mayores fuera. Para Mallorca, Vigo queda cerca en verano; Santiago aporta más continuidad. Comprobar temporada, no asumir vuelo fijo.",
      "Sin playa inmediata y con pendientes en el casco: ese es el peaje. A cambio, la logística más completa de la comarca.",
    ],
    historia: [
      "Tude fue ciudad romana, sede episcopal y una de las capitales históricas de Galicia. La catedral de Santa María —románico y gótico hechos también fortaleza— domina el casco con almenas y el claustro medieval completo. Desde la muralla se ve el Miño y Valença.",
      "El Camino Portugués entra en Galicia por aquí. El puente internacional de 1886 y la Eurocidade con Valença convierten la frontera en calle. Conventos, judería y los peixiños de améndoa de las Clarisas cuentan una ciudad de río, clausura y paso.",
    ],
    fuera: [
      "El paseo cotidiano sube al casco y al adarve, o baja llano por la ribera hasta el puente de hierro. No hay playa marina en el municipio; Cesantes o Area Grande quedan como salidas. El Monte Aloia —primer parque natural de Galicia— es el domingo de pinar y mirador sobre la vega.",
      "Valença no es excursión: es la otra mitad de la semana. La Ecopista Valença–Monção amplía el río hacia viña de Alvarinho cuando se quiere camino largo y llano.",
    ],
    casa: [
      "Hay obra nueva en el ensanche: piso con ascensor cerca del casco, no necesariamente pegado a la piedra medieval. También casas en parroquias de la ladera del Aloia: más verde, más coche.",
      "La precisión importa: cerca del casco sin el zumbido de la A-55 en la terraza. Fibra sí. Tipología de ciudad pequeña fluvial, no de primera línea.",
    ],
    encaja: {
      si: [
        "Encaja si ciudad pequeña, Valença a pie, tren y acceso a Vigo pesan más que el mar en la puerta. Primaria local y hospitales del área de Vigo a trayecto corto hacen de Tui la base logística de Baixo Miño.",
        "También si se acepta calor de valle en julio, pendientes del casco según cota, y playa como salida de media hora.",
      ],
      no: [
        "Encaja peor si el verano fresco de costa es la razón de mudarse, o si el océano debe estar a un paseo. Tampoco si se firma junto a la autovía sin haber oído el tráfico a distintas horas.",
        "Tampoco si se busca silencio de aldea sin vida urbana: O Rosal está más cerca en espíritu.",
      ],
      veredicto:
        "Tui ofrece casco, Valença y conexiones a cambio de río en lugar de playa y un verano de valle más cálido. Encaja quien prioriza autonomía de ciudad pequeña y frontera vivida; no quien necesita Atlántico en el umbral o silencio de parroquia."
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

  const identidad = r.fotoIdentidad ?? r.fotosAbrir[0];
  const omitIdentidad = identidad?.src;

  return (
    <article className="mt-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">{r.escala}</p>
      {identidad ? <FotoIdentidad foto={identidad} /> : null}

      <h2 className="mt-6 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
        Cómo se vive
      </h2>
      <Parrafos textos={r.abrir} />
      <Fotos items={r.fotosAbrir} omitSrc={omitIdentidad} />

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
      <Fotos items={r.fotosHistoria} omitSrc={omitIdentidad} />

      <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
        Mar, río y camino
      </h2>
      <Parrafos textos={r.fuera} />
      <Fotos items={r.fotosFuera} omitSrc={omitIdentidad} />

      <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">Casa</h2>
      <Parrafos textos={r.casa} />
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
