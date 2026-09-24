import Link from "next/link";
import { notFound } from "next/navigation";
import BloqueZonaFicha from "@/components/BloqueZonaFicha";
import CabeceraFichaMunicipio from "@/components/CabeceraFichaMunicipio";
import EnlaceIdealista from "@/components/EnlaceIdealista";
import Foto from "@/components/Foto";
import MapaMunicipioFicha from "@/components/MapaMunicipioFicha";
import { RELATO_MUNICIPIOS } from "@/components/RelatoMunicipio";
import TablaComparativaZona from "@/components/TablaComparativaZona";
import { municipiosDeZonaFicha, municipioPorSlug, zonaIdDeFicha } from "@/lib/municipios";
import { zonaPorId } from "@/lib/zonas";
import DesplegableNuevo2 from "./DesplegableNuevo2";

/**
 * NUEVO2 — montaje local solo para Cudillero (localhost / visor Cursor).
 * Aislado de current y V1. No sustituye ninguna página publicada.
 */

/** Fotos del apartado «Cómo se vive» (pueblo colgado = solo cabecera). */
const FOTOS_COMO_SE_VIVE_V1 = [
  { src: "/fotos/asturias-centro/cudillero-puerto.jpg", pie: "Puerto de Cudillero" },
  {
    src: "/fotos/asturias-centro/cudillero-casas-escalonadas.jpg",
    pie: "Casas escalonadas sobre la plaza del puerto",
  },
] as const;

/** Frente a Mallorca — tras el primer párrafo de Clima / Vivir. */
const FOTO_CLIMA_NUEVO2 = {
  src: "/fotos/asturias-centro/cudillero-identidad.jpg",
  pie: "Plaza del puerto en un día húmedo",
} as const;

const FOTO_VIVIR_NUEVO2 = {
  src: "/fotos/asturias-centro/cudillero-calle-cuesta-vivienda.jpg",
  pie: "Calle en cuesta hacia el ayuntamiento",
} as const;

/** Casa — tipología anfiteatro vs El Pito. */
const FOTO_CASA_ANFITEATRO = {
  src: "/fotos/asturias-centro/cudillero-casa-cerca.jpg",
  pie: "Casas del anfiteatro, de cerca",
} as const;

const FOTO_CASA_EL_PITO = {
  src: "/fotos/asturias-centro/cudillero-el-pito-escuelas.jpg",
  pie: "El Pito: terreno más abierto (Escuelas Selgas)",
} as const;

/** Texto introductorio de Zona — solo Nuevo2 Cudillero (no compartir vía resumenZona). */
const RESUMEN_ZONA_NUEVO2_CUDILLERO =
  "Asturias Centro reúne formas muy distintas de vivir junto al Cantábrico: desde el puerto en ladera de Cudillero y los núcleos del estuario del Nalón hasta las villas marineras de Luanco y Candás, la playa de Salinas y la escala urbana de Gijón. Avilés y Oviedo completan un territorio en el que costa, ciudades y aeropuerto quedan relativamente próximos, aunque la vida cotidiana cambia mucho según el lugar elegido.";

const COMO_SE_VIVE_NUEVO2 = [
  "Cudillero reúne unos cinco mil habitantes en el concejo, pero el pueblo que se reconoce desde el puerto tiene una escala mucho menor. Las casas forman un anfiteatro sobre el agua, con calles en cuesta y tejados a distintas alturas. Quien llega de día encuentra el casco lleno de visitantes; quien se queda a vivir descubre que esas mismas pendientes cuentan al hacer la compra, al volver con bolsas o al subir a casa una tarde de lluvia. Arriba, El Pito cambia bastante la rutina: el terreno es más llano y el acceso en coche resulta más sencillo, aunque el puerto deja de estar integrado de la misma manera en la puerta de casa.",
  "Un martes de noviembre el puerto respira a otro ritmo. La villa no se queda reducida a los negocios para visitantes: hay supermercado, farmacia y centro de salud, y la Casa de Cultura Juan Selgas y la biblioteca añaden posibilidades para una tarde corriente también fuera del verano. Se puede hacer la compra, parar a tomar un café o comer en la villa y pasar por la biblioteca sin tener que convertir cada mañana en una salida en coche. Eso permite resolver una parte de la vida diaria sin salir de Cudillero, aunque aquí la distancia engaña: tener la compra, la farmacia o la biblioteca relativamente cerca no significa que el recorrido sea cómodo si entre la puerta de casa y esos servicios hay cuestas y escaleras. Para compras, gestiones y servicios que exceden esa escala aparece Avilés como ciudad de apoyo.",
  "El coche tiene por eso bastante peso en la vida cotidiana, especialmente para enlazar distintas partes del concejo o desplazarse a Avilés. No es, sin embargo, la única forma de moverse: Cudillero dispone también de autobús y tren de ancho métrico. Para la atención hospitalaria hay que salir. El hospital público San Agustín, en Avilés, queda a unos veinticinco minutos y unos 25 kilómetros. El aeropuerto de Asturias está todavía más cerca, aproximadamente a quince minutos y unos 11 kilómetros. La conexión directa con Palma existe en temporada de verano; fuera de ella depende de la programación disponible.",
  "La diferencia entre agosto y noviembre se nota también al salir de casa. En verano aumentan los visitantes, el tráfico entra por calles estrechas y encontrar aparcamiento puede resultar más difícil. Hay conversaciones en la calle, coches buscando hueco y mucho más movimiento alrededor del anfiteatro. Meses después, en una tarde húmeda de invierno, el mismo puerto recupera una escala mucho más tranquila y las cuestas se hacen más presentes. No son dos Cudilleros distintos: son dos ritmos que forman parte de vivir aquí durante todo el año.",
  "También por eso la elección entre el anfiteatro y una zona más alta como El Pito cambia bastante la vida diaria. Abajo se tiene el puerto mucho más metido en la escena cotidiana, a cambio de pendientes, escaleras y una mayor exposición al movimiento de los visitantes. Arriba se reduce parte de esa dificultad física, pero gana peso la lógica de entrar y salir en coche. En pocos minutos se pasa de una forma de vivir Cudillero a otra, y esa diferencia de microzona acaba importando mucho más que la imagen uniforme que puede dar el municipio visto en un mapa.",
] as const;

const CLIMA_NUEVO2 = [
  "Cudillero supone un cambio climático claro respecto a Mallorca. Hay bastante menos sol, la lluvia aparece con mucha más frecuencia y la humedad tiene mucho más peso durante el año. La referencia costera cercana del aeropuerto de Asturias ronda las 1.700 horas de sol y algo más de 1.000 mm de precipitación anual; son valores de una estación próxima, no mediciones de Cudillero, pero ayudan a dimensionar el salto desde el clima mucho más seco y luminoso de Mallorca. Aquí un día puede empezar gris, abrirse durante unas horas y volver a pedir paraguas sin que eso resulte excepcional.",
  "La diferencia se nota especialmente en verano. Junto a esta parte de la costa asturiana, julio y agosto se mueven en torno a los 18–19 °C de media, con máximas medias alrededor de 22 °C en la referencia del aeropuerto. Frente a un verano mallorquín en el que el calor condiciona a qué hora apetece caminar o permanecer al sol, en Cudillero es más fácil encontrar temperaturas suaves en pleno agosto, pero también lluvia, humedad y cambios de tiempo. El invierno tampoco se define por un frío extremo: la influencia marítima suaviza las temperaturas, mientras que la menor luminosidad y la sucesión de jornadas húmedas marcan mucho más la diferencia con Mallorca.",
] as const;

const VIVIR_NUEVO2 = [
  "Cambiar Mallorca por Cudillero no significa únicamente cambiar de clima; cambia también la escala y la forma de organizar la vida. Se pasa a un municipio pequeño, con un núcleo construido en pendiente y una ciudad como Avilés funcionando como apoyo para parte de las compras, gestiones y servicios. En Mallorca puede ser habitual pensar primero en kilómetros; aquí unos pocos cientos de metros pueden incluir una cuesta o varias escaleras. Esa diferencia física acaba modificando decisiones tan sencillas como salir a comprar, volver a casa cargado o elegir dónde dejar el coche.",
  "También cambia la relación entre coche, costa y vida cotidiana. Cudillero tiene el mar constantemente presente, pero vivir junto al Cantábrico no equivale a tener una playa integrada en la rutina a pie desde cualquier vivienda. Para muchas salidas, para enlazar distintas partes del concejo o para acudir a servicios de mayor escala, el coche adquiere más peso. A cambio, Avilés y el aeropuerto de Asturias están suficientemente próximos para que esa pequeña escala no signifique aislamiento: se puede vivir en un entorno muy distinto del mallorquín sin quedar lejos de una ciudad de apoyo ni de las conexiones aéreas.",
  "Y cambia mucho el contraste entre estaciones. Agosto llena el puerto de visitantes y movimiento; en noviembre el mismo anfiteatro recupera un ritmo mucho más tranquilo. Para alguien acostumbrado a Mallorca, donde también existe una fuerte presión turística estival, la diferencia no está simplemente en que Cudillero tenga temporada alta, sino en la escala del lugar: el cambio se concentra en un núcleo mucho más pequeño y se percibe con especial intensidad. Vivir aquí durante todo el año significa aceptar esas dos caras —el verano concurrido y los meses húmedos y tranquilos— como partes de una misma vida, no elegir únicamente la imagen de Cudillero que aparece en agosto.",
] as const;

/** Fotos de «De dónde viene» (sin Cabo Vidio: trasladado a «Mar, río y camino»). */
const FOTO_DE_DONDE_VIENE_PITO = {
  src: "/fotos/asturias-centro/cudillero-pito.jpg",
  pie: "El Pito, arriba de Cudillero",
} as const;

const FOTO_DE_DONDE_VIENE_QUINTA = {
  src: "/fotos/asturias-centro/cudillero-quinta-selgas.jpg",
  pie: "Quinta de Selgas, en El Pito",
} as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "El anfiteatro de Cudillero no nació como un decorado frente al mar. La villa se asentó en el profundo barranco excavado por el río Piñera antes de desembocar en el Cantábrico, y las casas fueron ocupando las laderas alrededor del pequeño abrigo portuario, siguiendo las curvas de nivel como un graderío. Ahí está el origen de la imagen que todavía define el pueblo: puerto abajo, tejados superpuestos y calles que ascienden entre las casas. Lo que hoy parece una forma urbana excepcional fue antes una manera de acomodar una comunidad marinera a un terreno con muy poco espacio llano.",
  "El puerto aparece ya en la primera referencia documental conocida de la villa, de 1285, y durante siglos la pesca fue una de las actividades que dieron identidad a Cudillero. De esa tradición procede también el nombre de pixuetos con el que se conoce a los habitantes de la villa vinculados históricamente al mundo pesquero. El abrigo fue transformándose a medida que crecía la actividad: las obras de mejora comenzaron a finales del siglo XVIII y, después de distintas ampliaciones, el nuevo puerto quedó terminado en 1984. Cudillero había dejado de pertenecer a Pravia mucho antes, en 1837, cuando se constituyó definitivamente como concejo independiente. El puerto actual es por tanto la última capa de una relación con el mar que empezó muchos siglos antes.",
  "Al subir hacia El Pito aparece una historia distinta. Allí, lejos del caserío apretado del anfiteatro, los hermanos Fortunato y Ezequiel de Selgas promovieron desde finales del siglo XIX un conjunto de palacio, jardines y colecciones artísticas que terminó extendiéndose a la iglesia-panteón y a las escuelas. El palacete comenzó a construirse en 1883; las escuelas, levantadas décadas después, fueron concebidas para ofrecer enseñanza moderna y gratuita a niños y niñas de las localidades próximas. La Quinta de Selgas no es, por tanto, solamente una gran residencia rodeada de jardines: forma parte de un proyecto cultural y social que dejó en El Pito una huella muy diferente de la tradición pesquera del puerto.",
  "Esas dos imágenes siguen permitiendo leer Cudillero hoy. Abajo, el anfiteatro conserva la forma que dieron el barranco, el puerto y generaciones ligadas a la pesca. Arriba, El Pito conserva la huella patrimonial de los Selgas en un terreno mucho más abierto. En pocos minutos se pasa de casas escalonadas frente al Cantábrico a jardines, palacio, iglesia y antiguas escuelas: dos paisajes que explican por caminos distintos cómo se fue formando el Cudillero actual.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar está siempre cerca en Cudillero, pero vivir junto al puerto no significa bajar andando a una playa cotidiana. El Cantábrico ronda aproximadamente los 19–21 °C en verano, bastante menos que el Mediterráneo mallorquín, y el estado del mar importa tanto como la temperatura: los días de mar calmada son los más sencillos para un baño cómodo. Concha de Artedo ofrece una salida de baño dentro del propio concejo; Aguilar queda también cerca, pero pertenece a Muros de Nalón. Son playas a las que se va, no una prolongación peatonal del casco. En verano hay que contar además con el aparcamiento como parte del plan: en Concha de Artedo está regulado durante la temporada de socorrismo.",
  "Para caminar sin organizar una excursión, la experiencia empieza en la propia villa. Desde el puerto se puede recorrer el anfiteatro y subir por calles, escaleras y miradores hacia las zonas altas, con el Cantábrico apareciendo entre tejados a medida que se gana altura. Es un paseo muy ligado a Cudillero, pero no un paseo marítimo largo y llano: aquí una distancia corta en el mapa puede esconder bastante desnivel. Para convertir la caminata en playa, bosque o costa de acantilados, normalmente hay que desplazarse antes a otro punto del concejo.",
  "Algunas de esas salidas merecen el desplazamiento precisamente porque el camino forma parte de la experiencia. En Vallina el acceso final es a pie por una pista que pasa junto a antiguos molinos y pequeñas cascadas antes de alcanzar el arenal. Concha de Artedo permite cambiar de registro: desde Lamuño existe un recorrido entre pinar, robles, castaños, pequeños núcleos rurales y la costa, con una pasarela de madera atravesando la zona húmeda situada detrás de la playa. El Silencio vuelve a ser otra cosa: una cala protegida por acantilados a la que se llega mediante unos 500 metros a pie y numerosas escaleras. Aquí el paisaje pesa tanto como el baño.",
  "Más hacia el oeste, Cabo Vidio ya no es una salida de playa, sino de costa alta. El faro se asoma a los acantilados abiertos al Cantábrico y alrededor del cabo hay recorridos cortos entre miradores; para una caminata mucho más larga, la ruta Entrecabos enlaza el faro con la playa del Silencio a lo largo de unos 10 kilómetros. Todo esto explica mejor Cudillero que contar simplemente cuántas playas tiene: desde la villa se sale directamente a caminar entre puerto, calles y miradores; para alternar ese paseo con arenales, bosque y grandes acantilados hay que convertir el mar en una salida elegida y, con frecuencia, empezar utilizando el coche.",
] as const;

/** Foto V1 de «Mar, río y camino» (`fotosFuera`); identidad de arenal no documentada de forma inequívoca. */
const FOTO_MAR_PLAYA_CERCA = {
  src: "/fotos/asturias-centro/cudillero-playa.jpg",
  pie: "Playa cerca de Cudillero",
} as const;

/** Wikimedia Commons: File:Asturias Cudillero calle ni.jpg — calle en pendiente del núcleo. */
const FOTO_MAR_CALLES_CUESTA = {
  src: "/fotos/asturias-centro/cudillero-calles-cuesta.jpg",
  pie: "Calles en cuesta de Cudillero",
} as const;

/** Wikimedia Commons: File:Beach playa de silencio.jpg — Playa del Silencio. */
const FOTO_MAR_PLAYA_SILENCIO = {
  src: "/fotos/asturias-centro/cudillero-playa-silencio.jpg",
  pie: "Playa del Silencio, en el concejo de Cudillero",
} as const;

/** Trasladada desde «De dónde viene» (mismo archivo y atribución; pie corregido a «en el concejo»). */
const FOTO_MAR_CABO_VIDIO = {
  src: "/fotos/asturias-centro/cudillero-vidio.jpg",
  pie: "Cabo Vidio, en el concejo de Cudillero",
} as const;

/** Casa — textos cerrados (CURSOR_NUEVO2_CUDILLERO_CASA_CERRADA_v2). */
const CASA_ADVERTENCIA_MICROZONA =
  "El anfiteatro portuario es muy pendiente: una vivienda que parece estar «cerca» en el mapa puede exigir muchas escaleras. En zonas más altas como El Pito el acceso puede resultar más sencillo, aunque el coche gana peso en la vida diaria.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: escaleras, pendiente y recorrido hasta el coche y los servicios. También importan la luz y la orientación, además del aislamiento, la ventilación y posibles señales de humedad.";

const CASA_MERCADO_REVENTA =
  "Mercado de tamaño intermedio, con vivienda habitual y demanda exterior. Una vivienda con buen acceso, pocas barreras, luz y servicios cómodos puede resultar más fácil de encajar en una futura venta que otra más espectacular pero con muchas escaleras, mantenimiento o un acceso complicado.";

const CASA_LEYENDA_COMPACTA =
  "A: ≤5 min de la costa · B: 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Estimaciones comparativas; conviene contrastarlas con la oferta del momento.";

/** Valores exactos de municipios-asturias-centro.json (visualización cerrada del TXT). */
const CASA_FILA_PRECIOS = {
  municipio: "Cudillero",
  a2: "138.242 €",
  a3: "191.412 €",
  b2: "111.657 €",
  b3: "154.602 €",
  m2: "1.636 €/m²",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Cudillero encaja si atrae la idea de vivir en un municipio pequeño donde el Cantábrico y el puerto forman parte constante del paisaje, con una parte de la vida diaria resolviéndose en la propia villa y Avilés como apoyo para lo que exige una escala mayor. El aeropuerto de Asturias queda también cerca, de modo que esa pequeña escala no significa quedar aislado. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye también bastante menos sol y mucha más presencia de lluvia y humedad durante el año.",
  "También encaja si se acepta que elegir vivienda aquí significa elegir una forma concreta de vivir Cudillero. En el anfiteatro el puerto queda mucho más integrado en la escena diaria, pero pesan las pendientes, las escaleras y el movimiento de visitantes; en una zona más alta como El Pito disminuye parte de esa dificultad física y aumenta la facilidad de acceso en coche, aunque el puerto deja de estar de la misma manera a la puerta de casa. Esa diferencia de microzona permite escoger entre experiencias residenciales bastante distintas dentro del mismo municipio.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Cudillero encaja peor si se busca una vida muy caminable, con recorridos cómodos y llanos entre casa, servicios, coche y mar. Las distancias pueden parecer pequeñas en el mapa y resultar muy distintas cuando incluyen cuestas o escaleras; además, vivir junto al Cantábrico no garantiza tener una playa cotidiana a la que bajar andando desde cualquier vivienda. Para enlazar distintas partes del concejo, llegar a determinados arenales o resolver necesidades de mayor escala, el coche adquiere bastante peso.",
  "Tampoco encaja igual si cuesta aceptar el cambio respecto a Mallorca en luz, lluvia y humedad, o si incomoda que el ritmo del núcleo varíe tanto entre un agosto concurrido y los meses húmedos y tranquilos. Y una casa con buenas vistas puede perder atractivo residencial si para llegar a ella hay que repetir varias veces al día un acceso incómodo. Aquí la contrapartida principal no es una cifra concreta de servicios o kilómetros: es cómo la topografía y la ubicación terminan entrando en la rutina.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre visitar Cudillero y vivir en una vivienda concreta. Hay que subir realmente las pendientes y recorrer el trayecto que se repetiría entre esa casa, la compra y el coche: comprobar escaleras, acceso, dónde se aparca y cómo sería volver cargado. Bajar al puerto puede resultar sencillo; la prueba residencial está también en la vuelta.",
  "Merece la pena hacer esa comprobación tanto en el anfiteatro como en una zona más alta como El Pito. No para decidir de antemano que una sea mejor que otra, sino para comprobar qué intercambio resulta más llevadero: tener el puerto mucho más integrado en la vida diaria a cambio de pendientes, escaleras y mayor movimiento, o facilitar parte del acceso cotidiano aceptando una relación más dependiente del coche.",
] as const;

/** Fila compacta al estilo FichaCapa2026. */
function FilaCasaNuevo2({ etiqueta, cuerpo }: { etiqueta: string; cuerpo: string }) {
  return (
    <div className="border-b border-[var(--linea)] py-3 last:border-b-0">
      <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--tinta-suave)]">
        {etiqueta}
      </p>
      <p className="mt-1.5 text-[15px] leading-relaxed text-[var(--tinta)]">{cuerpo}</p>
    </div>
  );
}

/** Solo tipografía: envuelve un fragmento literal ya presente en `texto`. */
function ConNegrita({ texto, fragmento }: { texto: string; fragmento: string }) {
  const i = texto.indexOf(fragmento);
  if (i === -1) {
    throw new Error(`Negrita: fragmento no encontrado — ${fragmento.slice(0, 48)}`);
  }
  return (
    <>
      {texto.slice(0, i)}
      <strong>{fragmento}</strong>
      {texto.slice(i + fragmento.length)}
    </>
  );
}

export default function Nuevo2CudilleroPage() {
  const ficha = municipioPorSlug("cudillero");
  if (!ficha) notFound();
  const zonaId = zonaIdDeFicha(ficha);
  const z = zonaPorId(zonaId);
  if (!z) notFound();

  const vecinos = municipiosDeZonaFicha(zonaId);
  const escalas = Object.fromEntries(
    vecinos.map((m) => {
      const relato = RELATO_MUNICIPIOS[m.slug];
      return [m.municipio, relato?.escala ?? ""] as const;
    }),
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <CabeceraFichaMunicipio ficha={ficha} zonaId={z.id} zonaNombre={z.zona} />

      <BloqueZonaFicha zonaId={z.id} nombreZona={z.zona} resumen={RESUMEN_ZONA_NUEVO2_CUDILLERO} />

      <MapaMunicipioFicha ficha={ficha} capasPortada={Boolean(ficha.mapa)} />

      <DesplegableNuevo2 titulo="Cómo se vive" varianteTarjetaV1>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita
            texto={COMO_SE_VIVE_NUEVO2[0]}
            fragmento="esas mismas pendientes cuentan al hacer la compra"
          />
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita
            texto={COMO_SE_VIVE_NUEVO2[1]}
            fragmento="resolver una parte de la vida diaria sin salir de Cudillero"
          />
        </p>
        <Foto src={FOTOS_COMO_SE_VIVE_V1[0].src} pie={FOTOS_COMO_SE_VIVE_V1[0].pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{COMO_SE_VIVE_NUEVO2[2]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{COMO_SE_VIVE_NUEVO2[3]}</p>
        <Foto src={FOTOS_COMO_SE_VIVE_V1[1].src} pie={FOTOS_COMO_SE_VIVE_V1[1].pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita
            texto={COMO_SE_VIVE_NUEVO2[4]}
            fragmento="En pocos minutos se pasa de una forma de vivir Cudillero a otra"
          />
        </p>
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Frente a Mallorca" varianteTarjetaV1>
        <h3 className="mt-1 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Clima
        </h3>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita
            texto={CLIMA_NUEVO2[0]}
            fragmento="Hay bastante menos sol, la lluvia aparece con mucha más frecuencia y la humedad tiene mucho más peso durante el año."
          />
        </p>
        <Foto src={FOTO_CLIMA_NUEVO2.src} pie={FOTO_CLIMA_NUEVO2.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{CLIMA_NUEVO2[1]}</p>
        <h3 className="mt-7 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Vivir
        </h3>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita
            texto={VIVIR_NUEVO2[0]}
            fragmento="aquí unos pocos cientos de metros pueden incluir una cuesta o varias escaleras"
          />
        </p>
        <Foto src={FOTO_VIVIR_NUEVO2.src} pie={FOTO_VIVIR_NUEVO2.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita
            texto={VIVIR_NUEVO2[1]}
            fragmento="vivir junto al Cantábrico no equivale a tener una playa integrada en la rutina a pie desde cualquier vivienda"
          />
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{VIVIR_NUEVO2[2]}</p>
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="De dónde viene" varianteTarjetaV1>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita
            texto={DE_DONDE_VIENE_NUEVO2[0]}
            fragmento="una manera de acomodar una comunidad marinera a un terreno con muy poco espacio llano"
          />
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{DE_DONDE_VIENE_NUEVO2[1]}</p>
        <Foto src={FOTO_DE_DONDE_VIENE_PITO.src} pie={FOTO_DE_DONDE_VIENE_PITO.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{DE_DONDE_VIENE_NUEVO2[2]}</p>
        <Foto src={FOTO_DE_DONDE_VIENE_QUINTA.src} pie={FOTO_DE_DONDE_VIENE_QUINTA.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita
            texto={DE_DONDE_VIENE_NUEVO2[3]}
            fragmento="dos paisajes que explican por caminos distintos cómo se fue formando el Cudillero actual"
          />
        </p>
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Mar, río y camino" varianteTarjetaV1>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita
            texto={MAR_RIO_CAMINO_NUEVO2[0]}
            fragmento="vivir junto al puerto no significa bajar andando a una playa cotidiana"
          />
        </p>
        <Foto src={FOTO_MAR_PLAYA_CERCA.src} pie={FOTO_MAR_PLAYA_CERCA.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita
            texto={MAR_RIO_CAMINO_NUEVO2[1]}
            fragmento="no un paseo marítimo largo y llano"
          />
        </p>
        <Foto src={FOTO_MAR_CALLES_CUESTA.src} pie={FOTO_MAR_CALLES_CUESTA.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[2]}</p>
        <Foto src={FOTO_MAR_PLAYA_SILENCIO.src} pie={FOTO_MAR_PLAYA_SILENCIO.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita
            texto={MAR_RIO_CAMINO_NUEVO2[3]}
            fragmento="hay que convertir el mar en una salida elegida"
          />
        </p>
        <Foto src={FOTO_MAR_CABO_VIDIO.src} pie={FOTO_MAR_CABO_VIDIO.pie} />
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Casa" varianteTarjetaV1>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          En Cudillero, una casa que enamora al verla desde el puerto puede contar una historia
          bastante distinta cuando hay que vivir en ella todos los días. En el anfiteatro, una
          distancia corta sobre el plano puede esconder una subida fuerte, tramos de escaleras o un
          acceso incómodo con la compra. Antes que las vistas conviene comprobar el recorrido real
          desde la puerta hasta el coche, el puerto y los servicios cotidianos:{" "}
          <strong>bajar es una cosa; volver a casa, otra</strong>. También importan la luz y la
          orientación, el aislamiento y la humedad, y si aparcar resulta razonable tanto en
          invierno como cuando aumenta la ocupación en verano. La topografía es aquí parte de la
          vivienda, no simplemente del paisaje.
        </p>
        <Foto src={FOTO_CASA_ANFITEATRO.src} pie={FOTO_CASA_ANFITEATRO.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          El Pito plantea una lógica diferente. La pendiente y el acceso cambian respecto al
          anfiteatro y resulta más fácil encontrar una relación cómoda con el coche, pero se pierde
          la inmediatez del puerto y de las calles del pueblo marinero. No son dos maneras
          equivalentes de comprar «en Cudillero»: una vivienda puede privilegiar el escenario y la
          proximidad al puerto y otra una vida diaria más sencilla. Por eso merece la pena recorrer
          la ubicación como se haría cualquier día —desde el coche, con la compra o bajo la
          lluvia— y no decidir únicamente por lo atractiva que resulte durante una visita.
        </p>
        <Foto src={FOTO_CASA_EL_PITO.src} pie={FOTO_CASA_EL_PITO.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          Como referencia de mercado, Cudillero se sitúa alrededor de 1.636 €/m². En esa misma
          referencia, el precio anunciado había subido un 9,8 % en los doce meses hasta agosto de
          2026. Esa evolución sirve para situar el momento del mercado, no para anticipar cómo
          seguirá el precio. Es una media orientativa: no describe por igual una vivienda en el
          anfiteatro, otra en El Pito o una casa en otro núcleo del concejo. En un mercado de esta
          escala importa especialmente el
          inmueble concreto. El acceso, las barreras, la luz, el aislamiento, el mantenimiento y la
          relación práctica con los servicios pueden influir tanto en la comodidad durante los años
          de uso como en el número de personas a las que podría interesar la vivienda si algún día
          hubiera que venderla. En Cudillero, una casa con demasiadas escaleras puede ser un buen
          ejemplo de vivienda atractiva que conviene examinar con especial cuidado.
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          Aquí la compra no consiste solo en decidir cuánto pagar por metro cuadrado. Consiste en
          comprobar si el encanto que se ve desde fuera sigue funcionando cuando se vuelve a casa
          con bolsas, cuando llueve, cuando hay que aparcar o cuando esas escaleras se recorren
          varias veces al día. En Cudillero,{" "}
          <strong>
            acceso y ubicación forman parte de la casa tanto como sus metros, sus vistas o su
            terraza
          </strong>
          .
        </p>

        <EnlaceIdealista ambito="municipio" slug={ficha.slug} nombre={ficha.municipio} />

        <div className="mt-6 pt-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--tinta-suave)]">
            Precio y bandas
          </p>
          <p className="mt-1 text-[13px] leading-snug text-[var(--tinta-suave)]">
            Referencia municipal; una vivienda concreta puede separarse de la media.
          </p>
          {/* Tabla local Nuevo2: misma apariencia que TablaPrecios, leyenda compacta propia. */}
          <div className="mt-4 overflow-x-auto rounded-xl border border-[var(--linea)] bg-white">
            <table className="min-w-[36rem] w-full text-left text-sm">
              <thead className="border-b border-[var(--linea)] bg-[var(--papel)] text-[var(--tinta-suave)]">
                <tr>
                  <th className="px-3 py-2 font-medium">Municipio</th>
                  <th className="px-3 py-2 font-medium">A · 2 hab</th>
                  <th className="px-3 py-2 font-medium">A · 3 hab</th>
                  <th className="px-3 py-2 font-medium">B · 2 hab</th>
                  <th className="px-3 py-2 font-medium">B · 3 hab</th>
                  <th className="px-3 py-2 font-medium">€/m²</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--linea)]">
                <tr>
                  <th className="px-3 py-2.5 font-medium text-[var(--acento)]">
                    {CASA_FILA_PRECIOS.municipio}
                  </th>
                  <td className="px-3 py-2.5 tabular-nums">{CASA_FILA_PRECIOS.a2}</td>
                  <td className="px-3 py-2.5 tabular-nums">{CASA_FILA_PRECIOS.a3}</td>
                  <td className="px-3 py-2.5 tabular-nums">{CASA_FILA_PRECIOS.b2}</td>
                  <td className="px-3 py-2.5 tabular-nums">{CASA_FILA_PRECIOS.b3}</td>
                  <td className="px-3 py-2.5 tabular-nums">{CASA_FILA_PRECIOS.m2}</td>
                </tr>
              </tbody>
            </table>
            <p className="px-3 py-2 text-xs leading-relaxed text-[var(--tinta-suave)]">
              {CASA_LEYENDA_COMPACTA}
            </p>
          </div>
        </div>
        <FilaCasaNuevo2 etiqueta="Advertencia de microzona" cuerpo={CASA_ADVERTENCIA_MICROZONA} />
        <FilaCasaNuevo2
          etiqueta="Qué conviene revisar en una vivienda"
          cuerpo={CASA_QUE_CONVIENE_REVISAR}
        />
        <FilaCasaNuevo2 etiqueta="Mercado y reventa" cuerpo={CASA_MERCADO_REVENTA} />
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="¿Encaja?" varianteTarjetaV1>
        <h3 className="mt-1 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Encaja si
        </h3>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{ENCAJA_SI_NUEVO2[0]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{ENCAJA_SI_NUEVO2[1]}</p>
        <h3 className="mt-7 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          No encaja si
        </h3>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{NO_ENCAJA_SI_NUEVO2[0]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{NO_ENCAJA_SI_NUEVO2[1]}</p>
        <h3 className="mt-7 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Qué comprobar
        </h3>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{QUE_COMPROBAR_NUEVO2[0]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{QUE_COMPROBAR_NUEVO2[1]}</p>
      </DesplegableNuevo2>

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
    </main>
  );
}
