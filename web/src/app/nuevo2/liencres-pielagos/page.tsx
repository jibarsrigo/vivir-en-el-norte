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
 * NUEVO2 — Liencres (Piélagos) (Cantabria Occidental).
 * Eje: Liencres cerca de dunas / Valdearenas–Canallave (playa y naturaleza cerca)
 * vs Mortera / urbanización más retirada (casa baja, jardín, coche para playa y parte de la semana).
 * Piélagos = municipio; Liencres = localidad costera. No confundir media municipal con una calle.
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Cantabria Occidental va de la ría de San Vicente a la bahía de Santander: villas de veraneo, dunas de Liencres, Costa Quebrada y una capital con hospital Valdecilla y aeropuerto a pocos minutos. El sol es de los más bajos de la tabla; la logística hacia Palma, de las mejores.",
  "Liencres es una localidad de Piélagos —municipio de unos veintisiete mil habitantes que también incluye Mortera, Boo y Mogro—: urbanizaciones de casas bajas junto al Parque Natural de las Dunas, con playas en Valdearenas y Canallave. No es Suances ni Santander: aquí se gana seguridad, hospital y aeropuerto cerca con vivienda de casas bajas; a cambio, la vida no es de villa compacta y el coche pesa más.",
  "Lo que más cambia la vida diaria es dónde queda la casa: cerca de las dunas y las playas de Liencres —arena y naturaleza a poca distancia, más verano en los accesos— o hacia Mortera y otras urbanizaciones más retiradas —jardín y silencio, con coche para la playa y parte de la compra—. En ambos sitios se vive en Piélagos; no se vive igual.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Liencres no se siente una villa con plaza única: es una franja residencial de casas bajas y adosados dentro de Piélagos, con el Parque Natural de las Dunas —arenales, pinares y acantilados protegidos— al lado. Quien llega de fuera descubre enseguida que hay que elegir. Cerca de Valdearenas —playa larga de arena fina junto a las dunas— o de Canallave —arenal más recogido hacia los acantilados— se puede bajar a la playa con más facilidad, a cambio de más gente en verano y de un entorno muy ligado a la costa. Hacia Mortera —localidad vecina de urbanizaciones y casas con jardín, un poco más hacia el interior del municipio— la postal es otra: más silencio y parcela, con la playa y a veces la compra pidiendo coche. En pocos minutos se pasa de una forma de vivir Piélagos a otra.",
  "Un martes de noviembre, en Liencres, se puede pasar por el centro de salud, entrar en un súper o una farmacia —los hay en Liencres y en Mortera— y seguir la mañana sin salir del municipio. Los servicios llegan a 7/10 en nuestra escala: hay lo esencial del día a día; no falta nada crítico para la semana básica, aunque la vida está repartida entre localidades y no concentrada en un casco de villa. Quien elige cerca de las dunas elige playa y naturaleza cerca; lo que no elige es calle de pueblo con todo debajo. Quien elige Mortera gana jardín y calma; esa misma mañana la playa pide trayecto.",
  "El coche pesa más que en una villa compacta. Enlaza urbanizaciones, playas, Bezana y Santander. El hospital práctico es Valdecilla, en Santander, a unos quince minutos; la clínica privada de Mompía, en Bezana, queda a unos diez. El aeropuerto de Santander ronda los quince minutos —vuelos a Palma casi todo el año, de los mejores accesos de toda la tabla—. Boo y Mogro aportan cercanías de tren hacia la capital. Liencres, a cambio, ofrece dunas y logística; no ofrece la autonomía a pie de un casco antiguo.",
  "En julio cambia el ritmo con las fiestas de Santiago en Liencres —hacia el 25 de julio, con misa, verbena y gente en las plazas—. En agosto llega la Fiesta del Turista —último tramo del mes— y las playas de Valdearenas y Canallave se llenan de toallas y coches. Meses después, en un martes húmedo, las urbanizaciones recuperan calma: el súper sigue, pero los accesos a las dunas se notan más vacíos. No son dos Liencres distintas: son dos ritmos del mismo municipio a lo largo del año.",
  "También por eso la elección entre cerca de las dunas y Mortera cambia bastante la vida diaria. Junto a Valdearenas se gana la playa cerca; agosto se nota en el aparcamiento. Hacia Mortera se gana parcela y silencio; la playa pide coche. Esa diferencia de sitio acaba importando más que la media de precios de todo Piélagos.",
] as const;

const CLIMA_NUEVO2 = [
  "Pasar de Mallorca a Liencres es cambiar de cielo. Hay bastante menos sol, la lluvia aparece con mucha más frecuencia y la humedad se nota en casa. La referencia local ronda 1.700 horas de sol al año, unos treinta y ocho días despejados y cerca de 1.150 mm de lluvia en unos ciento cincuenta días. Mallorca ronda 2.800 horas de sol. El viento es medio en la costa abierta; la niebla, baja. También aquí llovizna en julio y agosto. Un día puede empezar gris, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 20 °C: no pasas el calor de Baleares. En Valdearenas el agua suele estar entre 19 y 21 °C; la Costa Quebrada —acantilados y peñascos hacia el oeste— añade horizonte y viento, no el mismo baño de arenal. Quien vive junto a las dunas lo nota al abrir la ventana al Cantábrico; quien vive hacia Mortera, al sacar el coche bajo la lluvia. Un frente gris de noviembre cuenta más que un sábado de sol en Valdearenas.",
] as const;

const VIVIR_NUEVO2 = [
  "De Mallorca a Liencres se llega a casas bajas y urbanizaciones junto a dunas —o a Mortera, un poco más retirada—, no a una villa con plaza única. En Mallorca puede ser habitual pensar primero en kilómetros; aquí la distancia corta al mar no siempre es andando por acera urbana: a menudo hay tramos de carretera o aparcamiento antes de la arena. Esa diferencia modifica decisiones tan sencillas como bajar a la playa o ir al súper.",
  "También cambia la relación entre coche, costa y ciudad. Valdecilla y el aeropuerto quedan cerca; Santander cubre lo que el municipio no tiene. Ir y volver a Mallorca suele pasar por Santander —casi todo el año—, con uno de los trayectos más cortos de la tabla. Se oye cántabro y castellano; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. Julio y agosto llenan playas y fiestas locales; en noviembre las urbanizaciones siguen habitadas aunque más quietas. Para alguien acostumbrado a Mallorca, la diferencia está en el sol y en la forma de moverse: aquí la logística es excelente y el cielo, mucho más gris. Vivir aquí todo el año significa aceptar dunas, coche y lluvia como partes de una misma vida.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Liencres no creció como villa amurallada: creció como borde residencial de la bahía de Santander junto a un paisaje de dunas y acantilados. El Parque Natural de las Dunas de Liencres —declarado en 1986 sobre unas 195 hectáreas de dunas, pinar y playas; ampliado en 2021 como Dunas de Liencres y Costa Quebrada— protege ese frente. El pinar se plantó a mediados del siglo XX para fijar las dunas móviles. Ese paisaje explica por qué tanta gente busca casa aquí sin buscar un casco medieval: la postal es arena, pino y Cantábrico, no plaza mayor.",
  "Valdearenas —playa larga de arena fina junto a las dunas— y Canallave —arenal más orientado al noroeste, muy usado por el surf— fijaron la costa de baño. Más al oeste, la Costa Quebrada —acantilados, plataformas de abrasión, calas como Portío, La Arnía o Somocuevas, hoy leídas también como geoparque— añadió la costa de caminar y de mirar, distinta del arenal familiar. Quien confunde las dos espera toalla donde a menudo hay precipicio y senda.",
  "Mortera, Boo y otros núcleos de Piélagos completan el mapa municipal: más urbanización, tren en algunos puntos y una lógica de municipio grande, no de pueblo único. La seguridad —de las tasas más bajas de la tabla— y la proximidad a Santander (Valdecilla y aeropuerto a unos quince minutos) explican el atractivo residencial tanto como las dunas. Quien conozca Liencres solo por Valdearenas debe sumar Costa Quebrada, Mortera y esa dependencia de la capital.",
  "Hoy, comprar «en Liencres» o «en Piélagos» sigue siendo elegir entre cerca de dunas y playa o urbanización más retirada con más coche. El anuncio municipal no distingue cuál de las dos —ni si la casa permite bajar a Valdearenas andando o pide trayecto cada día—.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar está cerca en Liencres, pero no se vive igual desde cualquier urbanización. Valdearenas —playa larga junto a las dunas— y Canallave —arenal más recogido hacia los acantilados— son las orillas de baño cotidianas: arena, oleaje, pinar detrás y, en agosto, aparcamiento que forma parte del plan. En verano el agua suele rondar los 19–21 °C. No todas las casas permiten llegar andando por un paseo urbano continuo; muchas piden coche o una caminata por carretera. La Costa Quebrada —acantilados y peñas hacia el oeste— es otra experiencia: senda, viento y horizonte, no una playa de arena para tender la toalla en familia. Quien vive junto a las dunas convierte la playa en salida corta; quien vive en Mortera la convierte en trayecto. Un martes de junio en Valdearenas suele haber holgura; un domingo de agosto el acceso se llena.",
  "Para caminar andando cerca de las dunas, las pasarelas y sendas del parque convierten la orilla en horizonte de arena y pinar. No es un boulevard de villa: es naturaleza costera pegada a urbanizaciones, con viento cuando el Cantábrico lo trae. Hacia Portío, La Arnía o Somocuevas el camino pide calzado de verdad y atención al acantilado. Desde Mortera ese mismo paisaje ya pide coche casi siempre.",
  "Santander aporta ciudad, Valdecilla y cultura a unos quince minutos; Suances, otra villa-playa; el aeropuerto, el vuelo a Palma casi todo el año. Hacia Portío o La Arnía el camino pide atención al acantilado y no espera la misma facilidad de aparcamiento que Valdearenas. Aquí el día a día pide elegir cerca de la playa o más retirado; el hospital, Valdecilla.",
  "Cerca de las dunas la playa queda a pocos minutos casi todos los días; hacia Mortera el jardín queda delante y la playa pide coche. Esa diferencia describe mejor Liencres que contar playas de Piélagos. Valdecilla cubre la sanidad hospitalaria cuando hace falta lo que aquí no hay dentro del núcleo.",
] as const;

const CASA_NUEVO2 = [
  "En Liencres conviene saber si la casa queda cerca de dunas y playas, o hacia Mortera y urbanización más retirada. Un anuncio que solo diga «Piélagos» o «Liencres» puede ocultar si la casa da a un acceso razonable a Valdearenas, o a un jardín con coche para cada bajada a la arena.",
  "Abundan casas bajas y adosados con jardín; la humedad atlántica y el viento de costa importan. La fibra es Sí en la capa de datos; conviene comprobarla dirección a dirección. Hay obra nueva en el municipio.",
  "El precio medio de referencia ronda 2.227 €/m². Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual una casa junto a las dunas y otra en Mortera.",
  "Antes del precio conviene recorrer la rutina desde la casa: el súper, Valdearenas o Canallave, y la salida hacia Valdecilla o el aeropuerto. En agosto, el aparcamiento en las playas; en noviembre, la humedad y el viento. Liencres premia elegir bien la calle; castiga comprar solo la media municipal.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "Liencres junto a las dunas y Mortera no son intercambiables. Una vivienda «en Piélagos» en el mapa puede significar playa cerca, o jardín con coche para bajar a la playa. Comparar solo el precio inventa un municipio que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el súper, Valdearenas o Canallave, Valdecilla y el aeropuerto. Junto a la costa, salitre, viento y aparcamiento en temporada. Hacia Mortera, dependencia del coche. También la luz, la orientación, el aislamiento, la ventilación y señales de humedad; la fibra en esa dirección; y cómo se vive esa misma calle un domingo de agosto y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda fuerte de casas bajas cerca de Santander y de la costa, y la facilidad de reventa suele ser buena. Aun así, lo que decide es el inmueble concreto: un acceso sencillo a playa o a servicios, buen estado y luz amplían el abanico; una casa mal situada respecto a la rutina elegida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Liencres (Piélagos)",
  a2: "188.182 €",
  a3: "260.559 €",
  b2: "151.993 €",
  b3: "210.452 €",
  m2: "2.227 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Liencres encaja si atrae casas bajas junto a dunas y playas —Valdearenas o Canallave cerca— o si se prefiere Mortera y urbanización más retirada, con jardín y coche para bajar a la playa. Hay que elegir dónde se vive porque no se vive igual. Cerca de las dunas se gana la playa; agosto se nota en los accesos. Hacia Mortera se gana silencio; Valdecilla queda a unos quince minutos y el aeropuerto, a unos quince. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia y más coche que en una villa compacta.",
  "También encaja si se valora la seguridad y la logística hacia Palma por Santander, aceptando que la vida diaria está repartida entre localidades y no concentrada en un casco único.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Liencres encaja peor si se busca una villa compacta donde playa, comercio y servicios coincidan siempre a pie: aquí falta ese casco único —la vida está dispersa en urbanizaciones— y eso importa porque casi cada cambio de sitio puede pedir coche. Los servicios son 7/10 —súper, farmacia y centro de salud en Liencres y Mortera—; no falta lo esencial diario, pero sí la sensación de pueblo caminable. Tampoco si se presupone que cualquier dato de Piélagos describe exactamente la calle de Liencres junto a las dunas.",
  "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en Valdearenas sin probar un noviembre con lluvia y coche.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda junto a las dunas de Liencres y otra en Mortera. Desde cada casa: una compra sencilla, el trayecto a Valdearenas o Canallave, y la salida hacia Valdecilla y el aeropuerto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto en las playas (aparcamiento, gente) y un día cubierto de noviembre en la urbanización (luz, humedad, trayectos). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
] as const;

const FOTO_COMO_URB = {
  src: "/fotos/cantabria-occidental/liencres-urbanizacion.jpg",
  pie: "Urbanización de casas bajas en Liencres",
} as const;

const FOTO_COMO_DUNAS = {
  src: "/fotos/cantabria-occidental/liencres-dunas.jpg",
  pie: "Parque Natural de las Dunas de Liencres",
} as const;

const FOTO_HISTORIA_COSTA = {
  src: "/fotos/cantabria-occidental/liencres-costa-quebrada.jpg",
  pie: "Costa Quebrada: acantilados junto a Liencres",
} as const;

const FOTO_HISTORIA_MORTERA = {
  src: "/fotos/cantabria-occidental/liencres-mortera.jpg",
  pie: "Mortera, en el municipio de Piélagos",
} as const;

const FOTO_MAR_VALDE = {
  src: "/fotos/cantabria-occidental/liencres-valdearenas.jpg",
  pie: "Playa de Valdearenas, Liencres",
} as const;

const FOTO_MAR_CANAL = {
  src: "/fotos/cantabria-occidental/liencres-canallave.jpg",
  pie: "Playa de Canallave, Liencres",
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

export default function Nuevo2LiencresPielagosPage() {
  const ficha = municipioPorSlug("liencres-pielagos");
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
        <Foto src={FOTO_COMO_URB.src} pie={FOTO_COMO_URB.pie} />
        <Foto src={FOTO_COMO_DUNAS.src} pie={FOTO_COMO_DUNAS.pie} />
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
        <Foto src={FOTO_HISTORIA_COSTA.src} pie={FOTO_HISTORIA_COSTA.pie} />
        <Foto src={FOTO_HISTORIA_MORTERA.src} pie={FOTO_HISTORIA_MORTERA.pie} />
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
        <Foto src={FOTO_MAR_VALDE.src} pie={FOTO_MAR_VALDE.pie} />
        <Foto src={FOTO_MAR_CANAL.src} pie={FOTO_MAR_CANAL.pie} />
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="2.227 €/m²" />
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
