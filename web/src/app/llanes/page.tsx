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
import DesplegableNuevo2 from "@/components/DesplegableNuevo2";

/**
 * NUEVO2 — Llanes (Asturias Oriente).
 * Eje: villa / casco amurallado (puerto, Sablón, servicios a pie) vs pueblos/playas del concejo
 * (Barro, Niembro, Celorio, Poo, Andrín… — playa cerca, coche para la vida de villa).
 * Gulpiyuri / Cuera = salidas.
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Asturias Oriente es la costa donde la montaña cae al mar: Villaviciosa, Colunga, Ribadesella, Llanes y Ribadedeva. Rías, playas entre acantilados, Picos a media hora y el clima más húmedo de la tabla. Hospital en Arriondas o Cabueñes según municipio.",
  "Llanes es villa de unos trece mil habitantes, casco amurallado con puerto y el Sablón —playa urbana junto al centro— a un paso. No es Villaviciosa ni Ribadesella: aquí se gana autonomía de villa con mar en la puerta del casco; a cambio, agosto pesa más y Arriondas queda a unos treinta y cinco minutos.",
  "Lo que más cambia la vida diaria es dónde queda la casa: en la villa —comercio, centro de salud, gestiones a pie, orilla del Sablón— o hacia Barro, Niembro, Celorio, Poo o Andrín —playa cerca, con coche para la vida de villa—. En ambos sitios se vive en el concejo; no se vive igual.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Llanes se siente villa completa: el casco amurallado —calles de piedra, muralla, comercio— concentra súper, farmacia, centro de salud —médico de cabecera y consultas del día a día, no el hospital— y buena parte de la vida cotidiana a pie. Pegado al centro queda el Sablón —arenal urbano junto al puerto—; el Paseo de San Pedro —pradera elevada sobre el acantilado— añade horizonte sin salir del radio de la villa. Quien llega de fuera descubre enseguida que hay que elegir. En la villa se puede comprar, gestionar y bajar a la orilla andando desde buena parte del casco. Hacia Barro, Niembro, Celorio, Poo o Andrín —pueblos del concejo con playa cercana, a pocos minutos en coche— la postal es otra: arena delante o casi, verano más lleno, con el comercio denso quedando en el casco. En pocos minutos se pasa de una forma de vivir Llanes a otra, y esa diferencia acaba importando más que la imagen uniforme de «villa de playas».",
  "Un martes de noviembre, en el casco, se puede hacer compra, pasar por el centro de salud y caminar hacia el puerto o el Sablón. Los servicios llegan a 7/10 en nuestra escala: hay villa completa —comercio, mercado, salud de día a día, vida anual—; no llegan a más porque el hospital no está en el municipio. Quien elige la villa elige autonomía cotidiana y mar urbano; lo que no elige es la calma de un pueblo de playa fuera del casco. Hacia Celorio o Barro esa misma mañana es más de orilla y de calle estrecha; el súper pide volver a la villa.",
  "Sin coche, la villa aguanta bien la semana básica. El hospital práctico es el del Oriente, en Arriondas, a unos treinta y cinco minutos. El aeropuerto de Santander ronda los setenta minutos —Palma casi todo el año—; Asturias, hacia noventa y cinco, suele cubrir Palma sobre todo en verano. Llanes, a cambio, ofrece la villa más densa del oriente turístico: vida propia, playa en el casco y un concejo enorme de salidas.",
  "Entre julio y agosto cambia el ritmo con fuerza. La Magdalena, en julio, anima el casco. San Roque, en agosto —fiesta de interés turístico—, llena la villa con danza prima y fuegos sobre el Sablón: ruido, afluencia y aparcamiento justo semanas enteras. En julio y agosto la población se multiplica; el veraneo madrileño marca calles y pueblos de playa. Meses después, en un martes húmedo, el casco sigue abierto: comercio y puerto no se apagan. No son dos Llanes distintos: son dos ritmos que forman parte de vivir aquí todo el año.",
  "También por eso la elección entre villa y pueblos de playa cambia bastante la vida diaria. En el casco se ganan calles, compra y Sablón cerca; los pueblos piden coche. Hacia Barro, Celorio o Poo se gana la orilla delante o cerca; agosto se nota aún más, y el comercio denso queda en la villa. Esa diferencia de sitio acaba importando mucho más que la postal vista en un mapa.",
] as const;

const CLIMA_NUEVO2 = [
  "Llanes supone un cambio climático claro respecto a Mallorca. Hay bastante menos sol, la lluvia aparece con mucha más frecuencia y la humedad se nota en casa. La referencia local ronda 1.750 horas de sol al año —de las más bajas de la tabla—, unos cuarenta días despejados y cerca de 1.250 mm de lluvia en unos ciento cincuenta y cinco días. Mallorca ronda 2.800 horas de sol. La niebla es baja; el viento, bajo. También aquí llovizna en julio y agosto. Un día puede empezar gris, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 19,5 °C: no pasas el calor de Baleares. En el Sablón o en Torimbia el agua suele estar entre 19 y 21 °C; el baño pide días de mar más llana, pero el Cantábrico como vecino no espera al calendario de vacaciones. Quien vive en el casco lo nota al salir a la calle húmeda; quien vive hacia Celorio o Andrín, al abrir la ventana a la orilla. Un frente gris de noviembre cuenta más que un sábado de sol en el Paseo de San Pedro.",
] as const;

const VIVIR_NUEVO2 = [
  "De Mallorca a Llanes se llega a una villa con vida propia —o a una casa hacia Barro, Celorio o Poo—, no a un pueblo mínimo ni a una ciudad. En Mallorca puede ser habitual pensar primero en kilómetros; aquí unos minutos separan el casco de un pueblo de playa —o convierten la misma semana en trayectos si vives fuera y necesitas el súper—. Esa elección modifica decisiones tan sencillas como salir a comprar, ir a la playa o dejar el coche.",
  "También cambia la relación entre coche, orilla y hospital. En el casco gran parte del día a día cabe a pie y el Sablón queda integrado; Arriondas pide salir. Ir y volver a Mallorca suele pasar por Santander casi todo el año o por Asturias en verano. Se oye asturiano y castellano; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. Agosto llena la villa —San Roque, toallas, tráfico— y los pueblos de playa; en noviembre el casco sigue abierto —compra, mesas, puerto— aunque más quieto. Para alguien acostumbrado a Mallorca, la diferencia está en la escala: el cambio se concentra en una villa amurallada y un concejo de playas con coche, no en una capital. Vivir aquí todo el año significa aceptar esas dos caras —villa cotidiana y presión de agosto— como partes de una misma vida.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Llanes creció como villa amurallada de puerto tras el fuero de Alfonso IX (hacia 1225). El casco de piedra, la muralla medieval —unos 840 m de perímetro en origen; el paño norte se ve bien desde el Sablón— y la dársena organizan la identidad urbana. Las calles estrechas no son decorado: fueron el recinto que concentró comercio y pesca antes de que el veraneo llenara el mapa de playas. Los Cubos de la Memoria —murales de Agustín Ibarrola en los bloques del puerto— marcan la fachada contemporánea hacia el Cantábrico: color sobre hormigón, no un museo al margen.",
  "El Paseo de San Pedro —pradera elevada sobre el acantilado, pegada al casco, impulsada en buena parte con capital indiano— añade la otra capa cotidiana: horizonte, viento y paseo sin salir del radio de la villa. No nació Llanes como destino de treinta playas; esa lectura llegó después, cuando el concejo amplió la vida hacia orillas y pueblos —Barro, Celorio, Poo, Andrín— que hoy pesan tanto en el anuncio como la muralla. Quien solo camina el casco sin bajar al Sablón o sin subir a San Pedro se pierde esa doble escala de villa.",
  "La Sierra del Cuera —cordillera caliza de unos mil trescientos metros que cierra Llanes por el sur— permite salir a rutas de montaña sin alejarse mucho de la villa. Gulpiyuri —playa interior circular, alimentada por el mar a través de la roca, monumento natural— es una rareza geológica a la que se va, no una orilla de diario. Torimbia —arenal abierto entre acantilados— completa la costa más fotografiada del concejo. Quien conozca Llanes solo por el casco debe sumar Cuera, Gulpiyuri y esas salidas: son paisaje y visitas, no autonomía a pie desde cualquier pueblo.",
  "Hoy, comprar «en Llanes» sigue siendo elegir entre villa con autonomía a pie y Sablón cerca, o pueblo de playa con más presión de temporada. El anuncio no dice cuál de las dos.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar está siempre cerca en Llanes, pero vivir en el casco no es lo mismo que vivir en Celorio o Barro. En la villa el agua cotidiana es el Sablón: arenal urbano junto al puerto y a la muralla, usable andando desde buena parte del casco. No es Torimbia ni Gulpiyuri: es playa de pueblo con comercio detrás; en verano el agua suele rondar los 18–20 °C. Torimbia —arenal abierto entre acantilados, hacia el oeste— es otra cosa: Cantábrico abierto, toallas en verano y coche desde el casco. Gulpiyuri —playa circular en el interior, conectada al mar por túneles en la roca— es salida singular, mejor con marea alta, no orilla de diario. Barro, Celorio, Poo o Andrín aportan playa pegada al pueblo, con el súper denso quedando en Llanes. Quien vive en la villa puede caminar el Sablón y el Paseo de San Pedro; quien quiere Torimbia o Gulpiyuri convierte esas orillas en salida. Un martes de junio en el Sablón suele haber holgura; un domingo de agosto en Torimbia o en Barro el acceso se llena.",
  "Para caminar andando desde el casco, el Paseo de San Pedro convierte el acantilado en horizonte: pradera, viento y Cantábrico debajo. No es un boulevard de ciudad grande; es orilla alta de villa. Las calles del casco amurallado alargan ese paseo hacia dentro, con piedra y pendiente distinta a la de la pradera. Desde un pueblo de playa del concejo ese mismo día empieza en la arena y pide coche para la vida de villa.",
  "La Sierra del Cuera aporta rutas sobre la villa; Gulpiyuri y Torimbia ofrecen otra clase de playa —cueva abierta al mar y arenal bajo acantilado—; los Picos quedan hacia cuarenta minutos; Arriondas entra por la sanidad. Aquí el día a día pide elegir villa o pueblo de playa; el hospital, salir a Arriondas.",
  "En la villa el Sablón queda a pie casi todos los días; hacia Celorio, Poo o Andrín la playa queda delante y el comercio denso queda en el casco. Arriondas cubre la sanidad hospitalaria cuando hace falta lo que Llanes no tiene.",
] as const;

const CASA_NUEVO2 = [
  "En Llanes no basta el nombre: villa y casco, o pueblos y playas del concejo. Un anuncio que solo diga «Llanes» puede ocultar si la casa da a calles caminables y al Sablón, o a un acceso de playa con coche para cada recado.",
  "En el casco abundan pisos y casas con humedad de costa; hacia Barro, Celorio o Poo, viviendas más ligadas al veraneo. La fibra es Sí en la capa de datos; conviene comprobarla dirección a dirección. Hay poca obra nueva.",
  "El precio medio de referencia ronda 2.391 €/m². Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual un piso en el casco —donde la referencia local suele ir más alta— y una casa hacia Posada o Pría.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra, el Sablón o la playa del pueblo, y la salida hacia Arriondas o el aeropuerto. En agosto, el aparcamiento en la villa y en los pueblos de playa; en noviembre, la humedad en el casco. Llanes premia elegir bien el polo; castiga comprar solo la postal de muralla.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "La villa y los pueblos de playa no son intercambiables. Una vivienda «en Llanes» en el mapa puede significar comercio y Sablón a pie, o Celorio, Barro o Poo con playa cerca y coche para el súper. Las referencias de microzona —villa más cara; Celorio-Poo-Parres, Posada-Barro y Pría en franjas distintas— confirman que comparar solo el precio inventa una Llanes que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el súper, el Sablón o la playa del pueblo, y Arriondas. En el casco, humedad y salitre. Hacia los pueblos, aparcamiento en temporada y distancia real a servicios. También la luz, la orientación, el aislamiento, la ventilación y señales de humedad; la fibra en esa dirección; y cómo se vive esa misma calle un domingo de agosto —San Roque, afluencia— y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de villa con servicios y de vivienda cerca de playa, pero lo que decide es el inmueble concreto. Un acceso sencillo, buen estado, luz y un sitio fácil de explicar —villa o pueblo de playa bien situado— amplían el abanico de compradores; una casa mal situada respecto a la rutina elegida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Llanes",
  a2: "202.040 €",
  a3: "279.747 €",
  b2: "163.186 €",
  b3: "225.950 €",
  m2: "2.391 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Llanes encaja si atrae una villa amurallada con vida anual, puerto y Sablón delante —comercio y centro de salud a pie— o si se prefiere vivir hacia Barro, Niembro, Celorio, Poo o Andrín, con playa cerca y coche para la vida de villa. Hay que elegir dónde se vive porque no se vive igual. En el casco gran parte del día a día cabe sin salir y el mar urbano queda integrado; hacia los pueblos ganan la orilla y el silencio relativo fuera de temporada, con el comercio denso en la villa. Arriondas queda a unos treinta y cinco minutos. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia y humedad.",
  "También encaja si se tolera el calendario —Magdalena en julio, San Roque en agosto con danza prima y fuegos en el Sablón, y un verano que multiplica la afluencia— eligiendo bien la calle y no solo la primera fila del acceso a la playa.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Llanes encaja peor si se busca calma de villa en julio y agosto: aquí falta —la presión turística es de las más fuertes del oriente— y eso importa porque quien compra solo tras un sábado de sol en el Sablón suele llevarse sorpresa. Tampoco si el hospital debe quedar en el municipio: Arriondas está a unos treinta y cinco minutos. Los servicios cotidianos son altos —7/10: villa con comercio, centro de salud y vida anual, sin hospital propio— pero ese siete no sustituye la cabecera sanitaria de Arriondas.",
  "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras un agosto en Torimbia sin probar un noviembre en el casco.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el casco y otra hacia Barro, Celorio, Poo o Andrín. Desde cada casa: una compra sencilla, el trayecto al Sablón o a la playa del pueblo, y la salida hacia Arriondas y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto en la villa y en un pueblo de playa (aparcamiento, gente, San Roque) y un día cubierto de noviembre en el casco (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
] as const;

const FOTO_COMO_CASCO = {
  src: "/fotos/asturias-oriente/llanes-casco.jpg",
  pie: "Casco amurallado de Llanes",
} as const;

const FOTO_COMO_PUERTO = {
  src: "/fotos/asturias-oriente/llanes-puerto.jpg",
  pie: "Puerto de Llanes",
} as const;

const FOTO_HISTORIA_SAN_PEDRO = {
  src: "/fotos/asturias-oriente/llanes-san-pedro.jpg",
  pie: "Paseo de San Pedro: pradera sobre el acantilado",
} as const;

const FOTO_HISTORIA_CUERA = {
  src: "/fotos/asturias-oriente/llanes-cuera.jpg",
  pie: "Sierra del Cuera sobre Llanes",
} as const;

const FOTO_MAR_GULPIYURI = {
  src: "/fotos/asturias-oriente/llanes-gulpiyuri.jpg",
  pie: "Gulpiyuri: playa interior circular, salida del concejo",
} as const;

const FOTO_MAR_TORIMBIA = {
  src: "/fotos/asturias-oriente/llanes-barro.jpg",
  pie: "Playa de Torimbia, Llanes",
} as const;

const CREDITO_FOTOS =
  "Fotos: Wikimedia Commons (licencias indicadas en los archivos de origen).";

function FilaCasaNuevo2({ etiqueta, cuerpo }: { etiqueta: string; cuerpo: string }) {
  return (
    <div className="border-b border-[var(--linea)] px-4 py-3 last:border-b-0">
      <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--tinta-suave)]">
        {etiqueta}
      </p>
      <p className="mt-1.5 text-[15px] leading-relaxed text-[var(--tinta)]">{cuerpo}</p>
    </div>
  );
}

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

export default function Nuevo2LlanesPage() {
  const ficha = municipioPorSlug("llanes");
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

      <BloqueZonaFicha
        zonaId={z.id}
        nombreZona={z.zona}
        resumen={RESUMEN_ZONA_NUEVO2[0]}
      />
      {RESUMEN_ZONA_NUEVO2.slice(1).map((p) => (
        <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed text-[var(--tinta)]">
          {p}
        </p>
      ))}

      <MapaMunicipioFicha ficha={ficha} capasPortada={Boolean(ficha.mapa)} />

      <DesplegableNuevo2 titulo="Cómo se vive" varianteTarjetaV1>
        {COMO_SE_VIVE_NUEVO2.slice(0, 3).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_COMO_CASCO.src} pie={FOTO_COMO_CASCO.pie} />
        <Foto src={FOTO_COMO_PUERTO.src} pie={FOTO_COMO_PUERTO.pie} />
        {COMO_SE_VIVE_NUEVO2.slice(3).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Frente a Mallorca" varianteTarjetaV1>
        <h3 className="mt-1 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Clima
        </h3>
        {CLIMA_NUEVO2.map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <h3 className="mt-7 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Vivir
        </h3>
        {VIVIR_NUEVO2.map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="De dónde viene" varianteTarjetaV1>
        {DE_DONDE_VIENE_NUEVO2.slice(0, 2).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_HISTORIA_SAN_PEDRO.src} pie={FOTO_HISTORIA_SAN_PEDRO.pie} />
        <Foto src={FOTO_HISTORIA_CUERA.src} pie={FOTO_HISTORIA_CUERA.pie} />
        {DE_DONDE_VIENE_NUEVO2.slice(2).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Mar, río y camino" varianteTarjetaV1>
        {MAR_RIO_CAMINO_NUEVO2.slice(0, 2).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_MAR_GULPIYURI.src} pie={FOTO_MAR_GULPIYURI.pie} />
        <Foto src={FOTO_MAR_TORIMBIA.src} pie={FOTO_MAR_TORIMBIA.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(2).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Casa" varianteTarjetaV1>
        {CASA_NUEVO2.slice(0, 2).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="2.391 €/m²" />
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{CASA_NUEVO2[3]}</p>

        <EnlaceIdealista ambito="municipio" slug={ficha.slug} nombre={ficha.municipio} />

        <div className="mt-6 pt-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--tinta-suave)]">
            Precio y bandas
          </p>
          <p className="mt-1 text-[13px] leading-snug text-[var(--tinta-suave)]">
            Referencia municipal; una vivienda concreta puede separarse de la media.
          </p>
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

        <div className="mt-6 max-w-2xl overflow-hidden rounded-xl border border-[var(--linea)] bg-white">
          <FilaCasaNuevo2 etiqueta="Advertencia de microzona" cuerpo={CASA_ADVERTENCIA_MICROZONA} />
          <FilaCasaNuevo2
            etiqueta="Qué conviene revisar en una vivienda"
            cuerpo={CASA_QUE_CONVIENE_REVISAR}
          />
          <FilaCasaNuevo2 etiqueta="Mercado y reventa" cuerpo={CASA_MERCADO_REVENTA} />
        </div>
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="¿Encaja?" varianteTarjetaV1>
        <h3 className="mt-1 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Encaja si
        </h3>
        {ENCAJA_SI_NUEVO2.map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <h3 className="mt-7 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          No encaja si
        </h3>
        {NO_ENCAJA_SI_NUEVO2.map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <h3 className="mt-7 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Qué comprobar
        </h3>
        {QUE_COMPROBAR_NUEVO2.map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
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

      <p className="mt-8 max-w-3xl text-sm text-[var(--tinta-suave)]">
        Crédito de las fotografías: {CREDITO_FOTOS}
      </p>
    </main>
  );
}
