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
import DesplegableNuevo2 from "../cudillero/DesplegableNuevo2";

/**
 * NUEVO2 — Tapia de Casariego (Asturias Occidente).
 * Eje: casco / puerto (villa marinera compacta, compra y servicios a pie) vs orilla de playa / Anguileiro–Represas (surf, verano más lleno).
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Asturias Occidente es la franja verde entre la ría del Eo —frente a Ribadeo— y Cabo Busto: Castropol, Tapia de Casariego, Navia y Luarca. Costa auténtica, hospital en Jarrio y aeropuerto de Asturias a cuarenta–setenta y cinco minutos.",
  "Tapia de Casariego es villa marinera de unos tres mil ochocientos habitantes: puerto, casco cuidado e isla del faro. No es Castropol ni Navia: aquí el mar abierto y el surf entran en la semana; a cambio, el hospital queda fuera y el verano se nota más que en una villa solo de servicios.",
  "Lo que más cambia la vida diaria es dónde queda la casa: junto al casco y al puerto —calles, compra, dársena a pie— o hacia las playas de Anguileiro, Represas o Serantes —ola, toallas, más presión en agosto—. En ambos sitios se vive en Tapia; no se vive igual la semana.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Tapia de Casariego se siente villa pequeña y marina: el casco —Plaza de la Constitución, calles hacia el puerto— concentra comercio, farmacia, centro de salud y buena parte del día a día a pie. Abajo queda la dársena; frente a ella, la isla del faro —islote unido por un espigón, con el faro blanco que marca la entrada—. Quien llega de fuera descubre enseguida que hay que elegir. Junto al puerto se puede comprar, pasear y oír el trabajo de la flota andando desde el casco. Hacia Anguileiro, Represas o Serantes —playas de arena y roca a pocos minutos, con ola usada por surfistas— la postal es otra: costa abierta, verano más lleno, menos plaza de villa debajo de la ventana. En pocos minutos se pasa de una forma de vivir Tapia a otra, y esa diferencia acaba importando más que la imagen uniforme de «villa de surf» en el mapa.",
  "Un martes de noviembre, en el casco, se puede hacer compra, pasar por el centro de salud y bajar al puerto o hacia el faro. Los servicios llegan a 6/10 en nuestra escala: hay villa marinera con paseo, comercio y centro de salud —médico de cabecera y consultas del día a día, no hospital— suficientes para mucha semana; no llegan a más porque falta instituto de formación profesional y el hospital no está aquí. Quien elige el casco elige autonomía relativa a pie; lo que no elige es silencio total en julio. Hacia las playas esa misma mañana es más de ola y de niebla sobre el Cantábrico; el comercio denso pide volver al casco.",
  "Sin coche, la villa aguanta bien la semana básica. El Hospital de Jarrio —en Coaña— queda a unos veinte minutos; el aeropuerto de Asturias, hacia setenta. Hay A-8 y bus. Tapia, a cambio, ofrece mar y paseo muy integrados para su tamaño, con un mercado ya más demandado que Castropol o Navia.",
  "Entre julio y mediados de mes cambia sobre todo el ritmo del casco. Las fiestas del Carmen —día grande hacia el 16 de julio, con procesión marinera, Salve y sirenas en el puerto— llenan calles y muelle. El verano de surf y playa añade aparcamiento justo en Anguileiro y en el paseo. Meses después, en un martes húmedo, el casco sigue abierto: comercio y puerto no se apagan, aunque la niebla pese. No son dos Tapia distintos: son dos ritmos que forman parte de vivir aquí todo el año.",
  "También por eso la elección entre casco y orilla de playa cambia bastante la vida diaria. En el casco se ganan calles, compra y puerto cerca; la ola pide unos minutos. Hacia Anguileiro se gana la playa delante o cerca; agosto se nota más en gente y coches, y el súper queda en la villa. Esa diferencia de sitio acaba importando mucho más que la postal vista en un mapa.",
] as const;

const CLIMA_NUEVO2 = [
  "Tapia supone un cambio climático claro respecto a Mallorca. Hay bastante menos sol, la lluvia aparece con mucha más frecuencia y la humedad se nota en casa. La referencia local ronda 1.950 horas de sol al año, unos cuarenta días despejados y cerca de 950 mm de lluvia en unos ciento treinta y ocho días. Mallorca ronda 2.800 horas de sol. La niebla es alta; el viento, medio. También aquí llovizna en julio y agosto. Un día puede empezar gris, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 18,5 °C: no pasas el calor de Baleares. En Anguileiro o Serantes el agua suele estar entre 18 y 20 °C; el puerto ofrece abrigo, no el mismo baño de playa abierta. Quien vive en el casco lo nota al salir a la calle húmeda; quien vive hacia la orilla, al abrir la ventana al oleaje. Un frente gris de noviembre cuenta más que un sábado de sol en la playa.",
] as const;

const VIVIR_NUEVO2 = [
  "De Mallorca a Tapia se llega a una villa marinera compacta —o a una casa hacia las playas—, no a un pueblo mínimo ni a una ciudad. En Mallorca puede ser habitual pensar primero en kilómetros; aquí unos pocos minutos separan la Plaza de la Constitución del puerto —o convierten la misma semana en trayectos cortos si vives hacia Anguileiro y necesitas el súper—. Esa elección modifica decisiones tan sencillas como salir a comprar, ir a la ola o dejar el coche.",
  "También cambia la relación entre coche, mar y hospital. En el casco gran parte del día a día cabe a pie; el hospital pide salir hacia Jarrio. Las playas quedan integradas en el radio de la villa; no hace falta una excursión larga, pero sí elegir calle. Ir y volver a Mallorca suele pasar por el aeropuerto de Asturias —hacia setenta minutos— con Palma sobre todo en verano. Se oye asturiano y castellano; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. Julio llena el Carmen y las playas; en noviembre el casco sigue abierto aunque más quieto y con niebla. Para alguien acostumbrado a Mallorca, la diferencia está en la escala: el cambio se concentra en una villa pequeña de puerto y surf, no en una capital. Vivir aquí todo el año significa aceptar esas dos caras —villa cotidiana y orilla saturada en verano— como partes de una misma vida.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Tapia no nació como villa de tablas: nació como abrigo de pesca y comercio en el extremo occidental asturiano. El fondeadero ya sirvió en época romana; en la Baja Edad Media entró la caza de ballena, y el oficio del mar siguió organizando el casco alrededor de la dársena. Lo que hoy parece postal de ola abierta fue antes una manera de vivir del puerto: calles cortas hacia el muelle, Plaza de la Constitución como centro civil y la casa consistorial como ancla administrativa. Quien llega solo por el surf descubre que la identidad cotidiana todavía se sostiene en esa villa compacta junto al agua.",
  "El siglo XIX dejó la silueta que más se reconoce desde fuera. Fernando Fernández, marqués de Casariego, impulsó malecones y puerto hacia 1870, además de edificios públicos que fijaron la escala de la villa. El faro de la Isla de Tapia —faro blanco sobre un islote unido a tierra por el espigón de Entreíslas— entró en servicio el 1 de septiembre de 1859 y sigue marcando la entrada marítima: es el faro más occidental de Asturias y el único del Principado asentado en una isla. Quien camina el espigón no hace una visita de museo: recorre el mismo eje de abrigo y horizonte que ha definido Tapia durante más de siglo y medio.",
  "Anguileiro —también llamada La Grande o playa de Los Campos—, Represas y Serantes añadieron la costa de arena, roca y ola. Desde los años sesenta el surf convirtió ese frente en destino; el Murallón —muro de cantería impulsado en el XIX para contener la arena— recuerda que la villa ya luchaba con el Cantábrico antes de las tablas. El Carmen —hacia el 16 de julio, con procesión marinera, Salve y sirenas en el puerto— mantiene el calendario del oficio cuando el verano todavía no ha llenado del todo Anguileiro. Quien conozca Tapia solo por la ola debe sumar puerto, faro, plaza y ese ritmo de fiesta.",
  "Hoy, comprar «en Tapia» sigue siendo elegir entre casco y puerto —compra, farmacia y dársena a pie— o orilla hacia las playas, con más presión de temporada y el comercio denso detrás, en la villa. El anuncio municipal no distingue cuál de las dos.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar está siempre cerca en Tapia, pero vivir junto a la Plaza de la Constitución no es lo mismo que vivir hacia Anguileiro. En el casco el agua cotidiana es el puerto: dársena abrigada, barcas, olor a flota y el paseo hacia la isla del faro. No es un arenal de baño cotidiano todo el día: es orilla de trabajo y de abrigo, con el Cantábrico entrando por el espigón. Anguileiro, Represas y Serantes —playas de arena y roca a pocos minutos a pie o en coche corto según la calle— son otra cosa del mismo municipio: costa abierta, oleaje, surf y, en agosto, aparcamiento que forma parte del plan. En verano el agua suele rondar los 19–21 °C. Quien vive junto a la plaza puede bajar al muelle andando; quien quiere baño de arenal convierte Anguileiro en salida corta. Un martes de junio en el puerto suele haber holgura; un domingo de agosto en Anguileiro el acceso se llena.",
  "Para caminar andando desde el casco, el frente portuario y el Sendero Azul hacia el Murallón, As Furadas y A Ribeiría convierten la villa en horizonte de piedra, ola y niebla. No es un boulevard de ciudad grande: es costa de villa pequeña, con tramos de espigón y viento cuando el Cantábrico lo trae. Desde una casa más pegada a Anguileiro ese mismo día empieza en la playa y pide volver al casco para la compra seria.",
  "Cuando el día pide ampliar el mapa sin ir muy lejos, Penarronda aporta dunas hacia Castropol; Figueras, ría del Eo; Navia, villa de servicios; Jarrio, hospital comarcal a unos veinte minutos. Aquí el día a día pide elegir casco o playa; el hospital, salir a Coaña.",
  "En el casco el puerto queda integrado en la rutina casi todos los días; hacia Anguileiro la ola queda delante y el comercio denso queda en la villa. Esa diferencia describe mejor Tapia que contar playas de surf. Jarrio cubre la sanidad hospitalaria cuando hace falta lo que Tapia no tiene dentro.",
] as const;

const CASA_NUEVO2 = [
  "En Tapia conviene mirar si la casa da al casco y al puerto, o a la orilla hacia las playas. Un anuncio que solo diga «Tapia» puede ocultar si la casa da a calles caminables y al muelle, o a un acceso más lleno en temporada de surf.",
  "En el casco abundan pisos y casas con salitre y humedad; hacia la costa, viviendas más expuestas al viento. La fibra es Sí en la capa de datos; conviene comprobarla dirección a dirección. Hay poca obra nueva.",
  "El precio medio de referencia ronda 2.200 €/m² —el más alto de la zona occidental—. Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual un piso junto al puerto y una casa hacia Anguileiro.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra, el puerto o la playa, y la salida hacia Jarrio o el aeropuerto. En julio, el aparcamiento en el Carmen y en Anguileiro; en noviembre, la niebla y la humedad en el casco. Tapia premia elegir bien la calle; castiga comprar solo la postal de surf.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "El casco y la orilla de playa no son intercambiables. Una vivienda «en Tapia» en el mapa puede significar comercio y puerto a pie sin ola debajo, o playa cerca con más presión de verano. Comparar solo el precio inventa una Tapia que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el súper, el puerto o Anguileiro, y Jarrio. En el casco, salitre y ruido de fiesta en julio. Hacia las playas, aparcamiento y viento. También la luz, la orientación, el aislamiento, la ventilación y señales de humedad; la fibra en esa dirección; y cómo se vive esa misma calle un domingo de agosto y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de villa marinera y de segunda residencia cerca de la ola, pero lo que decide es el inmueble concreto. Un acceso sencillo, buen estado, luz y un sitio fácil de explicar —casco práctico o playa bien situada— amplían el abanico de compradores; una casa muy expuesta al turismo de temporada o mal situada respecto a la rutina elegida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Tapia de Casariego",
  a2: "185.900 €",
  a3: "257.400 €",
  b2: "150.150 €",
  b3: "207.900 €",
  m2: "2.200 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Tapia encaja si atrae una villa marinera compacta con puerto, faro y compra a pie, o si se quiere vivir más cerca de las playas de Anguileiro, Represas o Serantes —ola y costa abierta del propio municipio—. Hay que elegir dónde se vive porque no se vive igual. En el casco gran parte del día a día cabe sin salir; la playa pide unos minutos. Hacia las playas ganan la ola y el horizonte; el comercio denso queda en la villa. El Hospital de Jarrio queda a unos veinte minutos. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia, niebla alta y humedad.",
  "También encaja si se tolera el calendario de verano —Carmen en julio, surf y toallas en agosto— eligiendo bien la calle y no la primera fila del acceso a Anguileiro.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Tapia encaja peor si el hospital debe quedar a pie: aquí falta —aunque los servicios cotidianos lleguen a 6/10: villa con paseo, comercio y centro de salud, sin FP ni hospital propio— y eso importa porque urgencias hospitalarias piden Jarrio a unos veinte minutos. Tampoco si se busca silencio constante junto al puerto en julio: el Carmen llena muelle y calles. Y si se confunde tener playa cerca con una villa sin presión de verano, suele haber sorpresa.",
  "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en Anguileiro sin probar un noviembre de niebla ni un Carmen en el casco.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el casco o junto al puerto y otra hacia Anguileiro. Desde cada casa: una compra sencilla, el trayecto al muelle o a la playa, y la salida hacia Jarrio y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en julio en el Carmen o en Anguileiro (aparcamiento, gente) y un día cubierto de noviembre en el casco (niebla, humedad, mesas abiertas). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
] as const;

const FOTO_COMO_PUERTO = {
  src: "/fotos/asturias-occidente/tapia-puerto.jpg",
  pie: "Puerto de Tapia: dársena abrigada, barcas y casas sobre la orilla",
} as const;

const FOTO_COMO_CASCO = {
  src: "/fotos/asturias-occidente/tapia-casco.jpg",
  pie: "Ayuntamiento de Tapia en la Plaza de la Constitución",
} as const;

const FOTO_HISTORIA_FARO = {
  src: "/fotos/asturias-occidente/tapia-faro.jpg",
  pie: "Faro de Tapia en el islote: ola y espigón en día de mar gruesa",
} as const;

const FOTO_MAR_PASEO = {
  src: "/fotos/asturias-occidente/tapia-paseo.jpg",
  pie: "Camino hacia la cala: piedra, prado y arenal bajo cielo cubierto",
} as const;

const FOTO_MAR_ACANTILADO = {
  src: "/fotos/asturias-occidente/tapia-playa.jpg",
  pie: "Casas sobre el acantilado de Tapia de noche, con reflejos en el agua",
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

export default function Nuevo2TapiaPage() {
  const ficha = municipioPorSlug("tapia-de-casariego");
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
        <Foto src={FOTO_COMO_PUERTO.src} pie={FOTO_COMO_PUERTO.pie} />
        <Foto src={FOTO_COMO_CASCO.src} pie={FOTO_COMO_CASCO.pie} />
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
        <Foto src={FOTO_HISTORIA_FARO.src} pie={FOTO_HISTORIA_FARO.pie} />
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
        <Foto src={FOTO_MAR_PASEO.src} pie={FOTO_MAR_PASEO.pie} />
        <Foto src={FOTO_MAR_ACANTILADO.src} pie={FOTO_MAR_ACANTILADO.pie} />
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="2.200 €/m²" />
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
