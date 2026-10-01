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
 * NUEVO2 — Santander (Cantabria Occidental).
 * Eje: centro / bahía (Pereda, Puerto Chico, servicios de capital a pie)
 * vs El Sardinero (playas urbanas, veraneo, más presión estival; centro queda un trayecto).
 * Magdalena / Cabo Mayor = salidas dentro de la ciudad.
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Cantabria Occidental va de la ría de San Vicente a la bahía de Santander: villas de veraneo, dunas de Liencres, Costa Quebrada y una capital con hospital Valdecilla y aeropuerto a pocos minutos. El sol es de los más bajos de la tabla; la logística hacia Palma, de las mejores.",
  "Santander es la capital: unos ciento setenta y tres mil habitantes, bahía, El Sardinero, Valdecilla y aeropuerto a unos diez minutos del centro. No es Liencres ni Suances: aquí se gana ciudad completa —comercio, cultura, sanidad—; a cambio, el precio es alto y hay que elegir barrio: el centro no es lo mismo que vivir junto a las playas del Sardinero.",
  "Lo que más cambia la vida diaria es el barrio: centro y bahía —Paseo de Pereda, Puerto Chico, gestiones y mesas a pie— o El Sardinero —Primera y Segunda playa, más verano, con el centro quedando un trayecto—. En ambos sitios se vive en Santander; no se vive igual.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Santander se siente ciudad de verdad, no villa con playa. El centro —alrededor del Paseo de Pereda, los Jardines de Pereda y Puerto Chico— concentra comercio, oficinas, cultura y buena parte del día a día a pie: súper, farmacias, gestiones y el ritmo de una capital que no cierra en enero. La bahía queda delante: lámina abrigada, barcos y horizonte hacia la otra orilla. Quien llega de fuera descubre enseguida que hay que elegir barrio. En el centro se puede comprar, gestionar y pasear la bahía andando desde buena parte de las calles. Hacia El Sardinero —barrio de playas urbanas al este, con la Primera y la Segunda playa, hoteles y paseo— la postal es otra: arena delante o cerca, más veraneo, con el comercio denso del centro quedando un trayecto en bus o coche. En pocos minutos se pasa de una forma de vivir Santander a otra.",
  "Un martes de noviembre, en el centro, se puede hacer la compra, pasar por una farmacia, entrar en una librería o bajar al Paseo de Pereda sin sacar el coche. Los servicios llegan a 10/10 en nuestra escala: no falta lo esencial de ciudad. El hospital Valdecilla —público de referencia— queda a unos cinco minutos; el aeropuerto, a unos diez. Quien elige el centro elige autonomía urbana y bahía; lo que no elige es la toalla debajo de la ventana. Quien elige El Sardinero gana playa urbana; esa misma mañana el centro pide trayecto.",
  "Sin coche, Santander aguanta mucho mejor que cualquier villa de la zona: bus, calles caminables en el centro y servicios completos. Aun así, hay cuestas —la ciudad no es plana— y el coche o el bus enlazan Sardinero, Cabo Mayor y los barrios altos. Valdecilla cubre la sanidad hospitalaria dentro de la propia ciudad; Santa Clotilde aporta privado. El aeropuerto de Santander —Seve Ballesteros— ronda los diez minutos —vuelos a Palma casi todo el año—. Liencres queda a unos quince minutos como costa residencial; el ferry añade Inglaterra e Irlanda. Santander, a cambio, ofrece capital completa; no ofrece el silencio de un pueblo ni un precio de costa gallega.",
  "En julio cambia el ritmo: los Baños de Ola —fiesta de tipismo playero a principios de mes en el Sardinero— y la Semana Grande —alrededor de Santiago, a mediados y finales de julio, con chupinazo, peñas, conciertos y fuegos— llenan calles y playas. El Sardinero se nota más lleno. Meses después, en un martes húmedo, el centro sigue vivo: comercios abiertos, bahía gris, menos toallas. No son dos Santander distintas: son dos ritmos de la misma ciudad a lo largo del año.",
  "También por eso la elección entre centro y Sardinero cambia bastante la vida diaria. En el centro se ganan gestiones, cultura y paseo de bahía; la playa de arena pide salir hacia el este. En El Sardinero se ganan la Primera y la Segunda playa; agosto se oye más, y el centro queda un trayecto. Esa diferencia de barrio acaba importando más que la imagen uniforme de «capital con playa».",
] as const;

const CLIMA_NUEVO2 = [
  "Santander supone un cambio climático claro respecto a Mallorca. Hay bastante menos sol, la lluvia aparece con mucha más frecuencia y la humedad se nota en casa —sobre todo en fachadas orientadas al mar—. La referencia local ronda 1.700 horas de sol al año, unos cuarenta días despejados y cerca de 1.150 mm de lluvia en unos ciento cuarenta y ocho días. Mallorca ronda 2.800 horas de sol. El viento es medio; la niebla, baja. También aquí llovizna en julio y agosto. Un día puede empezar gris, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 20 °C: no pasas el calor de Baleares. En El Sardinero el agua suele estar entre 19 y 21 °C; la bahía ofrece orilla más abrigada para pasear, no el mismo baño de playa abierta. Quien vive en el centro lo nota al salir al Paseo de Pereda con lluvia; quien vive en el Sardinero, al abrir la ventana al Cantábrico. Un frente gris de noviembre cuenta más que un sábado de sol en la Primera playa.",
] as const;

const VIVIR_NUEVO2 = [
  "De Mallorca a Santander se llega a una capital atlántica —centro o Sardinero—, no a un pueblo. En Mallorca puede ser habitual pensar primero en kilómetros entre urbanizaciones; aquí unos pocos barrios cambian por completo si la playa queda debajo o si el hospital y el comercio están a pie. Esa elección modifica decisiones tan sencillas como salir a comprar, ir a la toalla o subir una cuesta con bolsas.",
  "También cambia la relación entre coche, costa y sanidad. En el centro gran parte del día a día cabe andando; Valdecilla queda cerca. En El Sardinero la playa queda cerca y el centro pide bus o coche. Ir y volver a Mallorca suele pasar por el aeropuerto de Santander —casi todo el año—, a unos diez minutos. Se oye cántabro y castellano; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. Julio llena Baños de Ola y Semana Grande; el Sardinero se densifica; en noviembre el centro sigue abierto aunque más quieto en la orilla. Para alguien acostumbrado a Mallorca, la diferencia está en el sol y en la humedad, no en la falta de servicios. Vivir aquí todo el año significa aceptar ciudad completa, cuestas y cielo gris como partes de una misma vida.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Santander creció como puerto y capital de bahía. El Paseo de Pereda y Puerto Chico organizan el frente histórico: comercio, lonja antigua y la lámina de agua que separa la ciudad de la otra orilla. No es un decorado reciente: es el eje por el que la ciudad miró al mar mientras se convertía en capital administrativa. José María de Pereda fijó en la literatura esa relación con el puerto y con el habla local; el paseo que lleva su nombre sigue siendo el lugar donde la ciudad se enseña a sí misma frente al agua.",
  "El Sardinero añadió la otra historia: veraneo burgués y baños de ola anunciados ya a mediados del siglo XIX. La visita de Isabel II en 1861 impulsó el destino; Alfonso XIII y el Palacio de la Magdalena —regalo de la ciudad, inaugurado en 1912— consolidaron Santander como corte de verano. Casino, Hotel Real y chalets dibujaron el barrio de playa. Quien solo conoce el centro sin bajar al Sardinero se pierde esa mitad de ciudad hecha para la toalla y el paseo de jardines.",
  "La Península de la Magdalena —parque, palacio y costa abrigada—, Cabo Mayor —faro y acantilados al norte— y el Centro Botín —edificio de Renzo Piano sobre la bahía— muestran capas distintas del mismo término: patrimonio real, costa abierta y cultura contemporánea. Los Baños de Ola —fiesta de interés turístico regional que rememora aquellos veranos— y la Semana Grande de julio marcan el calendario. Quien conozca Santander solo por la Primera playa debe sumar Pereda, Magdalena, Valdecilla y el aeropuerto a unos diez minutos.",
  "Hoy, comprar «en Santander» sigue siendo elegir entre centro con bahía y servicios a pie o El Sardinero con playa delante. El anuncio no dice cuál de las dos —ni cuánta cuesta hay entre barrio y barrio—.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar está siempre cerca en Santander, pero vivir en Pereda no es lo mismo que vivir en El Sardinero. En el centro el agua cotidiana es la bahía: orilla abrigada, paseo, barcos y el Paseo de Pereda. No es una playa de toalla: es lámina urbana para caminar y mirar. El Sardinero —Primera y Segunda playa— es otra cosa del mismo municipio: arenales urbanos abiertos al Cantábrico, toallas en verano, paseo y más viento; en el agua suelen rondar los 19–21 °C. La Magdalena aporta costa de parque y bahía; Cabo Mayor y Mataleñas, acantilado y faro hacia el norte. Quien vive en el centro puede caminar la bahía; quien quiere baño de arenal convierte El Sardinero en salida o en barrio. Un martes de junio en Pereda suele haber holgura; un domingo de agosto en la Primera playa el paseo se llena.",
  "Para caminar andando desde el centro, el frente de bahía —Pereda, Puerto Chico, hacia la Magdalena— convierte el agua en horizonte cotidiano. No es un paseo llano perfecto: hay tramos y desniveles según el barrio, y las cuestas de Santander forman parte de la caminata. Desde El Sardinero el paseo es de playa y jardines; el centro queda detrás, a un trayecto que en agosto se nota en el tráfico y en el aparcamiento.",
  "Cabo Mayor aporta faro y acantilado; Liencres, dunas y Costa Quebrada a unos quince minutos; el interior, Cabárceno o los Picos a aproximadamente una hora. Aquí el día a día pide elegir centro o Sardinero; el hospital, Valdecilla dentro de la ciudad.",
  "En el centro la bahía queda a pie casi todos los días; en El Sardinero la playa queda delante y el comercio denso del centro queda un trayecto. Esa diferencia describe mejor Santander que contar playas. Valdecilla cubre la sanidad hospitalaria en el propio municipio.",
] as const;

const CASA_NUEVO2 = [
  "En Santander el barrio lo decide casi todo: centro y bahía, o El Sardinero. Un anuncio que solo diga «Santander» puede ocultar si la casa da a calles caminables y gestiones a pie, o a paseo de playa con trayecto al centro.",
  "En el centro abundan pisos con humedad atlántica y, a menudo, cuestas; en El Sardinero, tipologías más ligadas al veraneo y al paseo. La fibra es Sí en la capa de datos; conviene comprobarla dirección a dirección. Hay obra nueva.",
  "El precio medio de referencia ronda 3.323 €/m². Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual un piso en el centro y uno frente a la Primera playa.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra, la bahía o El Sardinero, Valdecilla y el aeropuerto. En agosto, el aparcamiento en el Sardinero; en noviembre, la humedad y las cuestas. Santander premia elegir bien el barrio; castiga comprar solo la postal de bahía.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "El centro y El Sardinero no son intercambiables. Una vivienda «en Santander» en el mapa puede significar comercio y bahía a pie sin arena debajo, o playa urbana con trayecto al centro. Comparar solo el precio inventa una Santander que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el súper, la bahía o El Sardinero, Valdecilla y el aeropuerto. En el centro, cuestas, humedad y aparcamiento. En El Sardinero, salitre, presión de verano y distancia real a gestiones. También ascensor si hace falta, la luz, la orientación, el aislamiento, la ventilación y señales de humedad; la fibra en esa dirección; y cómo se vive esa misma calle un domingo de agosto y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de capital con playa y de vivienda en El Sardinero, pero lo que decide es el inmueble concreto. Un acceso sencillo, buen estado, luz y un barrio fácil de explicar —centro o Sardinero bien situado— amplían el abanico de compradores; una casa mal situada respecto a la rutina elegida o muy expuesta al pico de julio lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Santander",
  a2: "280.794 €",
  a3: "388.791 €",
  b2: "226.795 €",
  b3: "314.024 €",
  m2: "3.323 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Santander encaja si atrae el centro —bahía, comercio, cultura y Valdecilla a pocos minutos a pie o en trayecto corto— o si se prefiere El Sardinero, con la Primera y la Segunda playa delante o cerca y más presión de verano. Hay que elegir dónde se vive porque no se vive igual. En el centro cabe la vida de capital; la playa de arena pide salir al este. En El Sardinero ganan las toallas; el centro queda un trayecto. El aeropuerto ronda los diez minutos. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia, humedad y precio de capital.",
  "También encaja si se tolera el calendario —Baños de Ola y Semana Grande en julio— eligiendo bien la calle y no solo la primera fila del Sardinero.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Santander encaja peor si se busca escala de pueblo o poco tráfico: aquí es ciudad —servicios 10/10, no falta comercio ni hospital— y eso importa porque el peaje es precio, cuestas y movimiento urbano, no la falta de servicios. Tampoco si se presupone que desde cualquier barrio se baja andando al Sardinero con la misma facilidad: el centro tiene bahía, no necesariamente arena debajo. Falta el silencio de villa pequeña; quien lo necesite encontrará mejor encaje en Liencres o Suances, a cambio de menos autonomía urbana.",
  "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en la Primera playa sin probar un noviembre con lluvia y cuestas.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el centro y otra en El Sardinero. Desde cada casa: una compra sencilla, el trayecto a la bahía o a la playa, Valdecilla y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en julio o agosto en El Sardinero (aparcamiento, gente, Semana Grande) y un día cubierto de noviembre en el centro (luz, humedad, cuestas). Y comprobar ascensor, estado de la vivienda y fibra en la dirección exacta.",
] as const;

const FOTO_COMO_BAHIA = {
  src: "/fotos/cantabria-occidental/santander-bahia.jpg",
  pie: "Bahía de Santander desde el frente urbano",
} as const;

const FOTO_COMO_SARDINERO = {
  src: "/fotos/cantabria-occidental/santander-sardinero.jpg",
  pie: "El Sardinero: playas urbanas de Santander",
} as const;

const FOTO_HISTORIA_PEREDA = {
  src: "/fotos/cantabria-occidental/santander-pereda.jpg",
  pie: "Paseo de Pereda, frente de bahía en el centro",
} as const;

const FOTO_HISTORIA_BOTIN = {
  src: "/fotos/cantabria-occidental/santander-botin.jpg",
  pie: "Centro Botín, sobre la bahía de Santander",
} as const;

const FOTO_MAR_MAGDALENA = {
  src: "/fotos/cantabria-occidental/santander-magdalena.jpg",
  pie: "Península de la Magdalena",
} as const;

const FOTO_MAR_CABO = {
  src: "/fotos/cantabria-occidental/santander-cabo-mayor.jpg",
  pie: "Cabo Mayor: faro y acantilados al norte de Santander",
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

export default function Nuevo2SantanderPage() {
  const ficha = municipioPorSlug("santander");
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
        <Foto src={FOTO_COMO_BAHIA.src} pie={FOTO_COMO_BAHIA.pie} />
        <Foto src={FOTO_COMO_SARDINERO.src} pie={FOTO_COMO_SARDINERO.pie} />
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
        <Foto src={FOTO_HISTORIA_PEREDA.src} pie={FOTO_HISTORIA_PEREDA.pie} />
        <Foto src={FOTO_HISTORIA_BOTIN.src} pie={FOTO_HISTORIA_BOTIN.pie} />
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
        <Foto src={FOTO_MAR_MAGDALENA.src} pie={FOTO_MAR_MAGDALENA.pie} />
        <Foto src={FOTO_MAR_CABO.src} pie={FOTO_MAR_CABO.pie} />
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="3.323 €/m²" />
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
