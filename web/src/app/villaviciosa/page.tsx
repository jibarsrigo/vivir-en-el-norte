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
 * NUEVO2 — Villaviciosa (Asturias Oriente).
 * Eje: villa / casco (servicios, sidra, autonomía a pie) vs costa (Rodiles / Tazones — playa o pueblo marinero; coche desde el casco).
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Asturias Oriente es la costa donde la montaña cae al mar: Villaviciosa, Colunga, Ribadesella, Llanes y Ribadedeva. Rías, playas entre acantilados, Picos a media hora y el clima más húmedo de la tabla. Hospital en Arriondas o Cabueñes según municipio.",
  "Villaviciosa es villa de unos catorce mil habitantes, capital de la sidra, con casco propio y ría —reserva natural— a un paso. No es Ribadesella ni Llanes: aquí se gana autonomía de villa y Gijón a unos veinticinco minutos; a cambio, la playa de baño no queda bajo la ventana del casco.",
  "Lo que más cambia la vida diaria es dónde queda la casa: en la villa —comercio, centro de salud, gestiones a pie— o hacia Rodiles y Tazones —playa larga o pueblo marinero, con coche para la vida de villa—. En ambos sitios se vive en el concejo; no se vive igual.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Villaviciosa se siente villa comarcal: el casco —Plaza del Ayuntamiento, calles de comercio— concentra súper, farmacia, centro de salud —médico de cabecera y consultas del día a día, no el hospital— y buena parte de la vida cotidiana a pie. Alrededor queda la ría de Villaviciosa —desembocadura ancha protegida como reserva, con paseo y aves—; no es playa de toalla, es lámina de estuario. Quien llega de fuera descubre enseguida que hay que elegir. En la villa se puede comprar, pasar por la farmacia y resolver gestiones andando desde casi cualquier calle del casco. Hacia Rodiles —arenal largo con pinar, ola y surf, a unos doce minutos— o Tazones —pueblo marinero en la boca de la ría, famoso por el desembarco de Carlos V— la postal es otra: costa y verano más lleno, con el comercio denso quedando en el casco. En pocos minutos se pasa de una forma de vivir Villaviciosa a otra, y esa diferencia acaba importando más que la imagen uniforme de «villa de la sidra».",
  "Un martes de noviembre, en el casco, se puede hacer compra, pasar por el centro de salud y caminar hacia la ría. Los servicios llegan a 7/10 en nuestra escala: hay villa de servicios con casco y sidra —comercio, salud de día a día, vida anual—; no llegan a más porque el hospital no está en el municipio. Quien elige la villa elige autonomía cotidiana; lo que no elige es baño de Rodiles debajo de la ventana. Hacia la costa esa misma mañana es más de pinar y de ola; el súper pide volver al casco.",
  "Sin coche, la villa aguanta bien la semana básica. El hospital práctico es Cabueñes, en Gijón, a unos veinticinco minutos; Jove, privado, hacia los treinta. El aeropuerto de Asturias ronda los cuarenta y cinco minutos —Palma sobre todo en verano—; Santander, hacia ciento quince, suele cubrir Palma casi todo el año. Villaviciosa, a cambio, ofrece la villa más práctica del oriente: vida propia y ciudad cerca, con la playa como salida.",
  "Entre agosto y octubre cambia el ritmo. A finales de agosto, el Desembarco de Carlos V llena Tazones y el casco con recreación histórica. El Festival de la Manzana —años impares, hacia octubre— convierte la villa en escaparate de sidra y fruta. Rodiles se llena en verano. Meses después, en un martes húmedo, el casco sigue abierto: comercio y ría no se apagan. No son dos Villaviciosa distintos: son dos ritmos que forman parte de vivir aquí todo el año.",
  "También por eso la elección entre villa y costa cambia bastante la vida diaria. En el casco se ganan calles, compra y ría cerca; Rodiles pide coche. Hacia Rodiles o Tazones se gana la orilla delante o cerca; agosto se nota más, y el comercio denso queda en la villa. Esa diferencia de sitio acaba importando mucho más que la postal vista en un mapa.",
] as const;

const CLIMA_NUEVO2 = [
  "Villaviciosa supone un cambio climático claro respecto a Mallorca. Hay bastante menos sol, la lluvia aparece con mucha más frecuencia y la humedad se nota en casa. La referencia local ronda 1.750 horas de sol al año —de las más bajas de la tabla—, unos cuarenta días despejados y cerca de 1.200 mm de lluvia en unos ciento cincuenta y tres días. Mallorca ronda 2.800 horas de sol. La niebla es media; el viento, bajo. También aquí llovizna en julio y agosto. Un día puede empezar gris, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 19,5 °C: no pasas el calor de Baleares. En Rodiles el agua suele estar entre 19 y 21 °C; la ría ofrece agua quieta para pasear y observar, no el mismo baño de arenal abierto. Quien vive en el casco lo nota al salir a la calle húmeda; quien vive hacia Rodiles, al abrir la ventana al Cantábrico. Un frente gris de noviembre cuenta más que un sábado de sol en el pinar.",
] as const;

const VIVIR_NUEVO2 = [
  "De Mallorca a Villaviciosa se llega a una villa con vida propia —o a una casa hacia Rodiles o Tazones—, no a un pueblo mínimo ni a una ciudad. En Mallorca puede ser habitual pensar primero en kilómetros; aquí unos doce minutos separan el casco de Rodiles —o convierten la misma semana en trayectos si vives en la costa y necesitas el súper—. Esa elección modifica decisiones tan sencillas como salir a comprar, ir a la playa o dejar el coche.",
  "También cambia la relación entre coche, ría y hospital. En el casco gran parte del día a día cabe a pie; Cabueñes pide salir hacia Gijón. La ría queda integrada en la villa; Rodiles no. Ir y volver a Mallorca suele pasar por Asturias en verano o por Santander casi todo el año. Se oye asturiano y castellano; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. Agosto llena Rodiles y el Desembarco; en años impares, octubre llena el Festival de la Manzana. En noviembre el casco sigue abierto —compra, mesas, ría— aunque más quieto. Para alguien acostumbrado a Mallorca, la diferencia está en la escala: el cambio se concentra en una villa de sidra y una costa de salida, no en una capital. Vivir aquí todo el año significa aceptar esas dos caras —villa cotidiana y playa con coche— como partes de una misma vida.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Villaviciosa creció como villa de manzana y sidra en un valle abierto a la ría. Alfonso X fundó la Puebla de Maliayo en 1270; el nombre de Villaviciosa —villa fértil— llegó después. Los llagares —bodegas donde se elabora la sidra natural— no son un adorno del folleto: rodean el casco y siguen marcando el calendario, el olor de la cosecha y buena parte de la identidad civil. La Plaza del Ayuntamiento organiza el centro: comercio, gestiones y el ritmo de una villa que no depende solo del veraneo de playa. Esa autonomía de casco explica por qué aquí se puede hacer mucha semana a pie.",
  "La ría de Villaviciosa —la mayor de Asturias, unos siete kilómetros de lámina protegida como reserva natural— añade la otra capa cotidiana del polo de villa: agua abrigada, aves, marisma a marea baja y paseos que no piden ola. Quien confunde esa lámina con una playa de toalla se equivoca de paisaje: aquí el estuario es para mirar, caminar y vivir el clima húmedo, no para plantar la sombrilla todos los días. La villa queda a un paso de esa orilla; la toalla de Cantábrico abierto, no.",
  "Hacia la costa aparecen otras historias del mismo concejo. Tazones —pueblo marinero en la boca de la ría— guarda la memoria del desembarco de Carlos V en 1517, recreada cada agosto con calles ambientadas y mucha gente. Rodiles —arenal largo con pinar, entre el Puntal y el Cantábrico abierto— concentra el baño y el surf. Valdediós —monasterio prerrománico a unos diez minutos hacia el interior— añade patrimonio sin sustituir la semana del casco. Quien conozca Villaviciosa solo por la sidra debe sumar ría, Tazones, Rodiles y ese patrimonio cercano.",
  "Hoy, comprar «en Villaviciosa» sigue siendo elegir entre villa con autonomía a pie y ría delante, o costa —Rodiles o Tazones— con más presión de temporada y coche para el súper. El anuncio no dice cuál de las dos.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar está cerca en Villaviciosa, pero vivir en el casco no significa bajar andando a una playa de arena. En la villa el agua cotidiana es la ría: desembocadura ancha protegida, canales de marea, marisma y orilla de reserva. No es playa de baño: es estuario. Se puede salir a caminar, oír a las aves y notar la humedad sin que eso equivalga a meterse en el Cantábrico. Rodiles —arenal largo con pinar y ola, a unos doce minutos— es otra cosa del mismo concejo: mar abierto, surf y toallas en verano, con aparcamiento que en agosto forma parte del plan. Tazones aporta el pueblo marinero en la boca de la ría: dársena y calles estrechas, no el mismo baño de Rodiles. En verano el agua suele rondar los 18–20 °C. Quien vive en el casco puede caminar la ría; quien quiere baño convierte Rodiles en salida. Un martes de junio en la ría suele haber holgura; un domingo de agosto en Rodiles el acceso se llena.",
  "Para caminar andando desde el casco, el entorno de ría —paseos, observatorios de aves, orillas de marisma— convierte el estuario en horizonte cercano. No es un boulevard llano de ciudad grande; hay tramos de tierra, humedad bajo los pies y cielo que cambia en media hora. Es orilla de reserva, no de chiringuito. Desde Rodiles ese mismo día empieza en el pinar y la arena, y pide coche para volver al comercio denso de la villa.",
  "Rodiles aporta la ola y el pinar; Tazones, el pueblo marinero y el calendario de Carlos V en agosto; Valdediós, piedra prerrománica; Gijón, hospital Cabueñes y ciudad a unos veinticinco minutos. Aquí el día a día pide elegir villa o costa; el hospital, salir a Cabueñes.",
  "En la villa la ría queda a pie casi todos los días; hacia Rodiles la playa queda delante y el comercio denso queda en el casco. Esa diferencia de agua —estuario abrigado frente a Cantábrico abierto— resume mejor Villaviciosa que una lista de playas. Cabueñes cubre la sanidad hospitalaria cuando hace falta lo que la villa no tiene.",
] as const;

const CASA_NUEVO2 = [
  "En Villaviciosa la villa del casco y la costa hacia Rodiles y Tazones piden ritmos distintos. Un anuncio que solo diga «Villaviciosa» puede ocultar si la casa da a calles caminables, o a un acceso de playa con coche para cada recado.",
  "En el casco abundan pisos y casas con humedad de ría; hacia la costa, viviendas más ligadas al veraneo. La fibra es Sí en la capa de datos; conviene comprobarla dirección a dirección. No hay obra nueva.",
  "El precio medio de referencia ronda 1.864 €/m². Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual un piso en el casco y una casa hacia Rodiles.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra, la ría o Rodiles, y la salida hacia Cabueñes o el aeropuerto. En agosto, el aparcamiento en Rodiles; en noviembre, la humedad en el casco. Villaviciosa premia elegir bien el polo; castiga comprar solo la postal de sidra.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "La villa y la costa no son intercambiables. Una vivienda «en Villaviciosa» en el mapa puede significar comercio y ría a pie sin playa debajo, o Rodiles cerca con coche para el súper. Comparar solo el precio inventa una Villaviciosa que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el súper, la ría o Rodiles, y Cabueñes. En el casco, humedad y niebla. Hacia la costa, aparcamiento en temporada. También la luz, la orientación, el aislamiento, la ventilación y señales de humedad; la fibra en esa dirección; y cómo se vive esa misma calle un domingo de agosto y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de villa con servicios y de vivienda cerca de Rodiles, pero lo que decide es el inmueble concreto. Un acceso sencillo, buen estado, luz y un sitio fácil de explicar —villa o costa bien situada— amplían el abanico de compradores; una casa mal situada respecto a la rutina elegida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Villaviciosa",
  a2: "157.508 €",
  a3: "218.088 €",
  b2: "127.218 €",
  b3: "176.148 €",
  m2: "1.864 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Villaviciosa encaja si atrae una villa con vida anual, sidra y ría delante —comercio y centro de salud a pie— o si se prefiere vivir hacia Rodiles o Tazones, con playa o pueblo marinero y coche para la vida de villa. Hay que elegir dónde se vive porque no se vive igual. En el casco gran parte del día a día cabe sin salir; el baño pide unos doce minutos. Hacia Rodiles ganan la playa y el pinar; el comercio denso queda en la villa. Cabueñes queda a unos veinticinco minutos. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia, humedad y niebla media.",
  "También encaja si se tolera el calendario —Desembarco en agosto, Festival de la Manzana en años impares, Rodiles en verano— eligiendo bien la calle y no solo la primera fila del acceso a la playa.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Villaviciosa encaja peor si la playa de baño debe quedar a pie desde el casco: aquí falta —la ría es cotidiana, pero Rodiles pide coche— y eso importa porque quien confunde ría con toalla suele llevarse sorpresa. Tampoco si el hospital debe quedar en el municipio: Cabueñes está a unos veinticinco minutos. Los servicios cotidianos son altos —7/10: villa con comercio, centro de salud y vida anual, sin hospital propio— pero ese siete no sustituye la cabecera sanitaria de Gijón.",
  "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en Rodiles sin probar un noviembre en el casco.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el casco y otra hacia Rodiles o Tazones. Desde cada casa: una compra sencilla, el trayecto a la ría o a la playa, y la salida hacia Cabueñes y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto en Rodiles (aparcamiento, gente) y un día cubierto de noviembre en el casco (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
] as const;

const FOTO_COMO_VILLA = {
  src: "/fotos/asturias-oriente/villaviciosa-villa.jpg",
  pie: "Ayuntamiento de Villaviciosa en la Plaza del Ayuntamiento",
} as const;

const FOTO_COMO_RIA = {
  src: "/fotos/asturias-oriente/villaviciosa-ria.jpg",
  pie: "Ría de Villaviciosa: lámina abrigada y orilla de reserva",
} as const;

const FOTO_HISTORIA_VALDEDIOS = {
  src: "/fotos/asturias-oriente/villaviciosa-valdedios.jpg",
  pie: "Valdediós: monasterio prerrománico cerca de Villaviciosa",
} as const;

const FOTO_HISTORIA_TAZONES = {
  src: "/fotos/asturias-oriente/villaviciosa-tazones.jpg",
  pie: "Tazones: pueblo marinero en la boca de la ría",
} as const;

const FOTO_MAR_RODILES = {
  src: "/fotos/asturias-oriente/villaviciosa-rodiles.jpg",
  pie: "Rodiles y la ría desde el monte: arenal, pinar y desembocadura",
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

export default function Nuevo2VillaviciosaPage() {
  const ficha = municipioPorSlug("villaviciosa");
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
        <Foto src={FOTO_COMO_VILLA.src} pie={FOTO_COMO_VILLA.pie} />
        <Foto src={FOTO_COMO_RIA.src} pie={FOTO_COMO_RIA.pie} />
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
        <Foto src={FOTO_HISTORIA_VALDEDIOS.src} pie={FOTO_HISTORIA_VALDEDIOS.pie} />
        <Foto src={FOTO_HISTORIA_TAZONES.src} pie={FOTO_HISTORIA_TAZONES.pie} />
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
        <Foto src={FOTO_MAR_RODILES.src} pie={FOTO_MAR_RODILES.pie} />
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="1.864 €/m²" />
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
