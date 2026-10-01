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
 * NUEVO2 — Valença (Alto Minho, Portugal).
 * Eje: fortaleza / intramuros (comercio a pie, muro, fin de semana fronterizo) vs ensanche / fuera del muro (más espacio, menos postal de baluarte).
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Alto Minho es el norte de Portugal entre el Miño y Viana do Castelo: fortalezas de río, villas de desembocadura, playas de nortada y una ciudad de apoyo con hospital Santa Luzia. El sol es de los más altos de la tabla; la sanidad y el avión se organizan en clave portuguesa —Porto y Viana—, no como un apéndice de Vigo.",
  "Valença es una villa fronteriza de unos catorce mil habitantes frente a Tui, con una fortaleza abaluartada viva —comercio intramuros, cafés, muralla— y un ensanche fuera del muro. No es Caminha ni Moledo: aquí se gana frontera vivida y Miño de diario; a cambio, la playa atlántica queda fuera del municipio y el verano de valle aprieta más que en la costa.",
  "Lo que más cambia la vida diaria es dónde queda la casa: dentro de la fortaleza —calles de piedra, tiendas a pie, más presión de fin de semana gallega— o fuera del muro, en el ensanche —más espacio y aparcamiento, con el adarve y el comercio intramuros pidiendo un trayecto corto—. En ambos sitios se vive en Valença; no se vive igual.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Valença no se siente una sola superficie llana. Dentro de la fortaleza (dos recintos abaluartados de los siglos XVII y XVIII, con fosos y puertas) vive un pueblo entero de tiendas, cafés y calles de piedra. El día a día puede organizarse a pie: se compra textil, se come, se pasa por la farmacia y se sube al adarve, el paseo por lo alto de la muralla, a mirar Tui al otro lado del Miño. Fuera del muro, el ensanche tiene calles más anchas, pisos recientes y más fácil aparcar: se gana comodidad de coche y espacio, y se pierde el baluarte debajo de la ventana. Quien llega de fuera descubre enseguida que hay que elegir. En pocos minutos se pasa de una forma de vivir Valença a otra.",
  "Un martes de noviembre, dentro de las murallas, se puede comprar, tomar un café y caminar los baluartes sin sentir que la villa se ha apagado. Los servicios llegan a 6/10 en nuestra escala: hay comercio de fortaleza y lo básico del núcleo; falta playa en el municipio y hospital de mayor nivel aquí mismo. Quien elige la fortaleza tiene muro y frontera a pie, y acepta más movimiento el fin de semana cuando Galicia cruza el puente. Quien elige el ensanche gana holgura; esa misma mañana el comercio denso del muro pide subir o acercarse al recinto.",
  "Sin coche, dentro de la fortaleza caben compra, café y paseo por el adarve andando. Tui queda a unos cinco minutos por el puente internacional y refuerza compra y paseo. Aun así, el coche o el tren enlazan Viana, la costa y Porto. El hospital práctico de mayor nivel es Santa Luzia, en Viana do Castelo, a unos treinta y cinco o cuarenta minutos. Conde de Bertiandos, en Ponte de Lima, forma parte de la red comarcal. El aeropuerto de Vigo ronda los treinta y cinco minutos y ayuda en verano hacia Palma, pero la operativa portuguesa habitual mira a Porto, a unos ochenta minutos. Valença ofrece frontera y muro vivos; no ofrece Atlántico a la puerta.",
  "La diferencia entre agosto y noviembre se nota al salir de casa. En agosto las Festas do Concelho (primera quincena, con música, cortejo y romería al Monte do Faro) y los fines de semana fronterizos llenan mesas; encontrar aparcamiento dentro del muro se vuelve más difícil. Meses después, en un martes húmedo de valle, la fortaleza recupera calma: el comercio sigue, pero el ruido gallego baja. No son dos Valenças distintas: son dos ritmos del mismo sitio a lo largo del año.",
  "También por eso la elección entre vivir dentro de las murallas o en el ensanche cambia bastante la vida diaria. Dentro la calle de piedra y las gestiones quedan metidas en la rutina, a cambio de más movimiento en agosto y el sábado fronterizo. Fuera se gana espacio, pero el paseo por el adarve pide un trayecto corto. Esa diferencia acaba importando más que la media de precios del municipio.",
] as const;

const CLIMA_NUEVO2 = [
  "Cruzar de Mallorca a Valença es cambiar de isla seca a valle del Miño. Hay menos sol continuo —unas 2.400 horas al año frente a las unas 2.800 de Mallorca—, más días de lluvia —unos ciento veinte— y una humedad de río que se nota en casa, sobre todo en viviendas de piedra intramuros. La niebla de mañana es media: a veces el valle amanece cerrado y gana vista a media jornada. El viento es bajo comparado con Moledo. También aquí puede lloviznar en julio. Un día puede empezar gris, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 21 °C y el valle puede sumar bastantes días por encima de 30 °C —más calor que en la costa minhota—. Quien vive intramuros lo nota en la piedra y en las calles estrechas; quien vive en el ensanche, al abrir la terraza al sol de julio. Un frente húmedo de noviembre cuenta más que un sábado soleado en los baluartes.",
] as const;

const VIVIR_NUEVO2 = [
  "Cambiar Mallorca por Valença no significa únicamente cambiar de clima: se llega a una villa fronteriza de muro y puente —fortaleza o ensanche—, no a una ciudad atlántica. En Mallorca puede ser habitual pensar primero en kilómetros entre urbanizaciones; aquí unos pocos cientos de metros deciden si el comercio queda debajo o a un paseo del muro. Esa elección modifica decisiones tan sencillas como bajar a comprar, aparcar un sábado o cruzar a Tui andando.",
  "También cambia el peso del coche respecto a la frontera y al hospital. Dentro de las murallas gran parte del día a día cabe a pie; Tui refuerza sin convertir cada tarde en plan largo. Santa Luzia queda fuera del municipio. Ir y volver a Mallorca suele organizarse por Porto, y a veces por Vigo en temporada. Se oye portugués en el ayuntamiento y en las tiendas; el castellano y el gallego se entienden a menudo en la frontera.",
  "Y cambia mucho el contraste entre estaciones. Agosto y el fin de semana fronterizo llenan el muro; en noviembre la villa sigue abierta aunque más quieta. Para alguien acostumbrado a Mallorca, la diferencia está en la escala y en el valle: aquí el cielo es más gris y el mar no está en la puerta. Vivir aquí todo el año significa aceptar muro, puente y humedad de río como partes de una misma vida.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Valença creció mirando a Tui cuando el Miño era línea de guerra: primero un reduto medieval —foral en el siglo XIII, reforma de D. Afonso III hacia 1262— y después la gran plaza abaluartada de los siglos XVII y XVIII, con más de cinco kilómetros de muralha que hoy se recorre por lo alto. No nació como urbanización de veraneo: nació como plaza fuerte con un pueblo dentro del muro. Esa fortaleza candidata a patrimonio explica mejor el municipio que cualquier postal de río suelta.",
  "El puente internacional de hierro —inaugurado en 1885, de escuela Eiffel— convirtió la frontera en calle cotidiana: carretera y ferrocarril sobre el mismo tramo, con la catedral de Tui enfrente y el Camino Portugués cruzando a mitad de vano. Dentro del muro, el comercio de textil y mantel no es adorno: es oficio vivo que los vecinos de Galicia siguen usando los fines de semana. Quien camine el adarve un martes de enero entenderá por qué el muro no es museo cerrado.",
  "Fuera del recinto, el ensanche y la orilla del Miño cuentan la otra cota de la villa: más espacio, menos foso, la misma frontera. La Ecopista do Minho —antigua vía de tren hacia Monção, llana entre viñedo de Alvarinho y río— sale casi desde la orilla y alarga el paseo sin pedir montaña. Las Festas do Concelho, en agosto, con romería al Monte do Faro, mantienen el calendario cuando el verano ya ha llenado las mesas intramuros. Quien conozca Valença solo por las tiendas del muro debe sumar puente, Ecopista y esa vida fuera del baluarte.",
  "Hoy, comprar «en Valença» sigue siendo elegir entre piso o casa intramuros —piedra, gestiones a pie, más sábado fronterizo— o vivienda fuera del muro —holgura y coche más cómodo—. El anuncio no dice cuál de las dos —ni cómo se siente esa misma calle un martes de niebla frente a un sábado de agosto—.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El agua cotidiana de Valença es el Miño, no el Atlántico. Desde la fortaleza se mira el río ancho y Tui enfrente; se camina el adarve con viento suave de valle, no de nortada oceánica. Eso no es una playa para tender la toalla: es orilla de frontera para pasear, sentarse a un café intramuros y bajar hacia el puente. Quien viva en el ensanche puede tener el río más cerca a pie y el muro a un trayecto corto; quien viva intramuros gana piedra y comercio, con la orilla fluvial a pocos minutos cuesta abajo. Un martes de junio suele haber holgura en los baluartes; un domingo de agosto el aparcamiento dentro del muro forma parte del plan.",
  "Para caminar andando desde la fortaleza, el recorrido del adarve convierte la muralla en horizonte cotidiano: fosos, puertas, Galicia debajo cuando el cielo abre. No es un boulevard de ciudad: es camino de piedra con desnivel suave y, a ratos, grupos que vienen de Tui. Desde el ensanche ese mismo paseo pide acercarse al muro; el día a pie se queda más en acera ancha y en el acceso al puente.",
  "Cuando apetece alargar la tarde sin salir al Atlántico, la Ecopista do Minho —la antigua vía de tren reconvertida en camino llano para andar o ir en bicicleta hacia Monção, entre viñedo de Alvarinho y río— ofrece kilómetros sin cuestas de sierra. Moledo —playa de dunas y pinar, a unos veinticinco minutos— cubre el oleaje y la nortada cuando se quiere mar de verdad; Caminha añade la desembocadura. Aquí el día a día pide elegir si la casa queda dentro de la fortaleza o en el ensanche; Santa Luzia queda a unos treinta y cinco o cuarenta minutos cuando hace falta hospital de mayor nivel.",
  "Dentro de las murallas el comercio y el adarve quedan a pie casi todos los días; en el ensanche el espacio queda delante y el muro pide un paseo corto. Esa diferencia describe mejor Valença que contar playas que no están en el municipio. Santa Luzia cubre la sanidad hospitalaria de referencia cuando aquí no alcanza; Porto organiza el vuelo habitual hacia Palma.",
] as const;

const CASA_NUEVO2 = [
  "En Valença hay una fortaleza abaluartada de verdad —kilómetros de muralla, fosos y un pueblo entero de tiendas y cafés dentro—. Vivir «intramuros» significa piso o casa dentro de ese recinto: piedra, gestiones a pie, más ruido de sábado cuando Galicia cruza el puente. Vivir en el ensanche significa fuera de esas murallas: calles más anchas, más fácil aparcar, y el comercio del muro a un trayecto corto. Un anuncio que solo diga «Valença» puede ocultar cuál de las dos.",
  "Dentro de la fortaleza importan humedad de piedra, accesibilidad, aparcamiento de sábado y ruido de fin de semana fronterizo. En el ensanche pesan orientación al sol de valle, ascensor y distancias reales al muro y a Tui. La fibra está señalada como sí; conviene confirmarla dirección a dirección. Hay algo de obra nueva, sobre todo fuera del recinto histórico.",
  "El precio medio de referencia ronda 1.270 €/m². Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa —aquí la costa atlántica queda fuera; la franja B describe mejor el municipio—. El metro no describe igual un piso dentro de las murallas y uno del ensanche.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra dentro del muro, el cruce a Tui, y la salida hacia Viana o Porto. En agosto, el aparcamiento dentro de la fortaleza; en noviembre, la niebla y la humedad. Valença premia elegir bien el lado del foso; castiga comprar solo la media municipal.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "Intramuros y ensanche no son intercambiables. Una vivienda «en Valença» en el mapa puede significar comercio debajo y muro a un paso, o holgura fuera del recinto con el adarve a un trayecto corto. Comparar solo el precio inventa un municipio que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el comercio intramuros, el puente a Tui, la Ecopista do Minho (el camino llano de la antigua vía de tren), Santa Luzia y el aeropuerto que se vaya a usar. Intramuros, humedad, accesibilidad y aparcamiento de sábado. En el ensanche, orientación de verano y distancia real al muro. También la luz, el aislamiento y cómo se vive esa misma calle un domingo de agosto y un martes de niebla.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de vivienda en villa fronteriza con Tui cerca, pero lo que decide es el inmueble concreto. Un acceso sencillo al muro o al ensanche usable, buen estado y luz amplían el abanico; una casa mal situada respecto a la rutina elegida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Valença",
  a2: "107.315 €",
  a3: "148.590 €",
  b2: "86.678 €",
  b3: "120.015 €",
  m2: "1.270 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Valença encaja si atrae vivir intramuros —comercio a pie, muralla, frontera con Tui a minutos— o si se prefiere el ensanche fuera del muro, con más espacio y el adarve a un paseo corto. Hay que elegir dónde se vive porque no se vive igual. Santa Luzia ronda treinta y cinco o cuarenta minutos; Porto organiza el vuelo habitual. Frente a Mallorca, el verano de valle puede apretar más que la costa minhota, y el cambio incluye menos sol continuo, más humedad de río y playa fuera del municipio.",
  "También encaja si se tolera el calendario —Festas do Concelho en agosto, sábados fronterizos llenos— y se acepta el portugués como idioma de gestiones, con castellano útil en la frontera.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Valença encaja peor si se busca playa atlántica a la puerta: aquí falta —el Miño es orilla de paseo, no arenal de toalla; Moledo queda a unos veinticinco minutos— y eso importa porque quien confunde frontera fluvial con costa abierta suele llevarse sorpresa. Tampoco si el hospital de mayor nivel debe quedar dentro del municipio: Santa Luzia está en Viana. Los servicios son 6/10 —comercio de fortaleza y básicos—; falta playa local y la autonomía de una ciudad grande.",
  "Tampoco si se espera el verano suave de Moledo, o si se decide solo tras un sábado soleado intramuros sin probar un martes de noviembre con niebla de valle.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda intramuros y otra en el ensanche. Desde cada casa: una compra sencilla, el cruce a Tui, y la salida hacia Viana y Porto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto o un sábado fronterizo (aparcamiento, gente) y un día cubierto de noviembre (luz, humedad, niebla). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
] as const;

const FOTO_COMO_A = {
  src: "/fotos/alto-minho/valenca-fortaleza.jpg",
  pie: "Fortaleza de Valença frente a Tui",
} as const;

const FOTO_COMO_B = {
  src: "/fotos/alto-minho/valenca-comercio.jpg",
  pie: "Comercio dentro de la fortaleza de Valença",
} as const;

const FOTO_HIST_A = {
  src: "/fotos/alto-minho/valenca-puente.jpg",
  pie: "Puente internacional entre Valença y Tui",
} as const;

const FOTO_MAR_A = {
  src: "/fotos/alto-minho/valenca-rio.jpg",
  pie: "Miño a la altura de Valença",
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

export default function Nuevo2ValencaPage() {
  const ficha = municipioPorSlug("valenca");
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
        <Foto src={FOTO_COMO_A.src} pie={FOTO_COMO_A.pie} />
        <Foto src={FOTO_COMO_B.src} pie={FOTO_COMO_B.pie} />
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
        <Foto src={FOTO_HIST_A.src} pie={FOTO_HIST_A.pie} />
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
        <Foto src={FOTO_MAR_A.src} pie={FOTO_MAR_A.pie} />
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="1.270 €/m²" />
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
