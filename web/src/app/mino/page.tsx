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
 * NUEVO2 — Miño (Golfo Ártabro e Ferrol).
 * Piloto de continuidad: docs/continuidad-nuevo2.md
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Golfo Ártabro e Ferrol reúne las rías y la costa alrededor de A Coruña: Oleiros al este de la ría do Burgo; Sada y Bergondo hacia Betanzos; Miño con la Praia Grande; Ares y Redes; y Ferrol al norte. El hospital y el aeropuerto de Alvedro quedan cerca. El cielo suele ser más gris y lluvioso que en las Rías Baixas.",
  "Miño es el municipio de playa larga a precio más bajo de esa zona: alrededor de siete mil habitantes entre el núcleo junto a la Praia Grande, Perbes y la urbanización Costa Miño. No es Oleiros —más servicios y más cerca de A Coruña— ni Sada —villa con puerto—. Aquí se gana el arenal; a cambio, el comercio y las gestiones son más limitados.",
  "Lo que más cambia la vida diaria es dónde queda la casa respecto a la Praia Grande. Cerca del arenal puedes bajar a la playa en unos minutos; en Costa Miño —urbanización de casas bajas y golf de los años 2000— casi cada salida pide coche. En agosto, junto a la orilla hay toallas y ruido; unos minutos más lejos, más silencio.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Lo primero que se nota al llegar es la Praia Grande: más de un kilómetro de arena delante de la ría de Betanzos, con dunas y un paseo que la acompaña. Alrededor viven unas siete mil personas. No hay un centro de pueblo único —esa plaza con bares y tiendas donde en una villa pequeña caben compra y gestiones cotidianas—. Quien llega buscando eso descubre enseguida que hay que elegir. Junto a la Praia Grande —el arenal principal, con el núcleo y el puerto pequeño cerca— se puede bajar a la arena andando y hacer una compra sencilla, a cambio de un verano más lleno. En Costa Miño —urbanización de casas bajas y golf de los años 2000, un poco más retirada— mandan el jardín y las calles ordenadas, y el coche entra casi cada vez que quieres súper, playa o ciudad. En pocos minutos se pasa de una forma de vivir Miño a otra, y esa diferencia acaba importando más que la imagen de las dunas en el mapa.",
  "Un martes de noviembre, cerca del núcleo junto a la Praia Grande, se puede resolver una compra sencilla y bajar a la arena sin convertir la mañana en viaje. Hay comercio suficiente para lo básico; se siente villa marinera de escala reducida. Esa comodidad tiene un límite claro: para un súper grande, el instituto o muchas gestiones hay que salir hacia Pontedeume —villa histórica a unos diez minutos— o hacia A Coruña. Quien elige vivir junto al arenal elige esa cercanía al agua: lo que no elige es la autonomía de Oleiros.",
  "Por eso, sobre todo en Costa Miño o tierra adentro, casi cada cambio de sitio pide ir en coche. Hay apeaderos de tren en Miño y en Perbes, en la línea entre A Coruña y Ferrol: unas pocas frecuencias al día que alivian algunos trayectos, no sustituyen al volante. El CHUAC —hospital público grande de A Coruña— queda a unos veinte minutos; Alvedro, a unos treinta. Pontedeume y las Fragas do Eume —bosque de robles y río a unos quince minutos— funcionan como salidas cercanas de villa y sombra; A Coruña, como apoyo para lo que aquí no se cubre.",
  "La diferencia entre agosto y noviembre se nota sobre todo junto a la Praia Grande. En verano el arenal se llena de toallas y coches; hay aparcamiento de pago en temporada. A finales de junio las fiestas de San Pedro animan el núcleo —verbenas y, en el puerto, la cucaña: un tronco enjabonado sobre el agua por el que hay que avanzar sin caerse—. El 16 de julio la Virgen del Carmen, patrona del municipio, baja en procesión hasta el puerto. Vivir en primera línea significa semanas ruidosas. Unos minutos en Costa Miño, más lejos del arenal, el silencio vuelve antes. Meses después, en un noviembre cubierto, la misma playa recupera holgura. No son dos Miños distintos: son dos ritmos que forman parte de vivir aquí todo el año.",
  "También por eso la elección entre la Praia Grande y Costa Miño cambia bastante la vida diaria. Junto al arenal se tiene la playa metida en la escena cotidiana, a cambio de más verano y de servicios limitados en el propio municipio. En Costa Miño se reduce parte de esa intensidad y gana jardín y calle ancha, pero casi cada cambio de sitio pide coche. En pocos minutos se pasa de una forma de vivir Miño a otra; esa diferencia de sitio acaba importando mucho más que la imagen uniforme de las dunas vista en un mapa.",
] as const;

const CLIMA_NUEVO2 = [
  "Frente a Mallorca, aquí el año se mide más por jornadas húmedas que por días de sol intenso. Hay bastante menos luz, la lluvia aparece con más frecuencia y la humedad se nota en casa. No hay estación propia; la referencia cercana es A Coruña: alrededor de 1.900 horas de sol al año y cerca de 1.000 mm de lluvia. Mallorca ronda 2.800 horas de sol. También aquí llovizna en julio y agosto. Un día puede empezar gris, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "En verano el contraste se nota aún más. Medias alrededor de 19 °C: no pasas el calor de Baleares. En la Praia Grande el agua de la ría invita al baño aunque sigue fresca si vienes del Mediterráneo; en Costa Miño ese contraste se vive más en el jardín y en el coche hasta la arena. Un día de sol fuerte, a unos quince minutos tienes las Fragas do Eume: sombra de robles y río cuando la toalla ya no apetece.",
] as const;

const VIVIR_NUEVO2 = [
  "Cambiar Mallorca por Miño no es solo cambiar de clima: se pasa a un municipio de playa larga y casas —sobre todo junto al arenal o en Costa Miño—, con servicios limitados y coche para lo que aquí no se cubre. En Mallorca puede ser habitual pensar primero en kilómetros; aquí la distancia corta entre la Praia Grande y la urbanización cambia del todo la semana: bajar a la arena a pie o montar en coche para casi todo.",
  "También cambia la relación entre coche, costa y ciudad de apoyo. Miño puede tener la ría muy presente, pero vivir aquí no equivale a comercio denso ni a hospital cerca. Para muchas gestiones hay que salir a Pontedeume o a A Coruña; el tren ocasional alivia, no sustituye. A cambio, la Praia Grande y un precio más razonable que Oleiros están lo bastante cerca para quien busca exactamente arena y casa, sin quedar tan lejos del CHUAC o de Alvedro como para hablar de aislamiento.",
  "Y cambia mucho el contraste entre estaciones. Agosto llena la Praia Grande de toallas y movimiento; en noviembre la misma orilla y Costa Miño recuperan un ritmo mucho más tranquilo. Para alguien acostumbrado a Mallorca, donde también existe presión estival, la diferencia está en la escala: el cambio se concentra en un arenal y una urbanización, no en una ciudad. Vivir aquí todo el año significa aceptar esas dos caras —el verano concurrido junto a la playa y los meses húmedos y silenciosos— como partes de una misma vida, no elegir únicamente un sábado de sol en las dunas.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Hasta 1919 el municipio se llamaba Castro. El nombre recuerda parroquias y castros —poblados antiguos fortificados— antes de que la Praia Grande se convirtiera en el reclamo principal. Hoy no hay un casco monumental denso junto al arenal: lo que más se ve es la playa, el núcleo pequeño y el puerto. Esa es la cara de Miño cuando se elige vivir junto a la Praia Grande. Miño se entiende en la ría de Betanzos: villa de orilla, puente y una escala pequeña frente a A Coruña cercana.",
  "Costa Miño es más reciente: casas bajas y golf de los años 2000, pensadas para quedarse o veranear. No vas a encontrar callejones de piedra ni lonja de pescado; sí jardín, calle ancha y playa cerca, a un precio más razonable que Oleiros. Por eso mucha gente que llega de fuera mira justo aquí —aceptando el coche para casi todo. La historia útil combina paso fluvial, veraneo de ría y dependencia de la red del Golfo Ártabro.",
  "Lo que falta de historia visible en el propio Miño está cerca y completa el radio. Pontedeume, a unos diez minutos, aporta la villa de piedra. Las Fragas do Eume —parque natural de bosque atlántico, a unos quince— son la salida de sombra cuando la playa se queda corta. El tren entre A Coruña y Ferrol, con paradas en Miño y Perbes, enlaza ese territorio desde principios del siglo XX. El casco y el frente de playa de ría organizan buena parte de la imagen contemporánea.",
  "La Praia Grande y Costa Miño no nacieron del mismo impulso: una organiza el baño y el núcleo pequeño; la otra, la parcela y el coche. Quien elige Miño elige cuál de las dos quiere cerca de casa. Hoy comprar aquí es decidir entre cercanía al agua y calles más retiradas, con Sada, Betanzos o A Coruña como apoyos. El anuncio no siempre distingue microzona ni cuánto coche pide la semana.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "Si vienes por la playa, el cuerpo lo nota enseguida: el agua de la ría de Betanzos está más quieta que en Ferrol o en Riazor, aunque sigue fresca y atlántica. La Praia Grande es el arenal principal —más de un kilómetro de arena, con dunas y paseo—. En el extremo sur, junto al núcleo y al puerto, es más fácil de alcanzar a pie; hacia el norte se vuelve más natural. Quien vive cerca convierte eso en rutina; quien vive en Costa Miño lo convierte en un destino corto en coche. Un martes de junio suele haber sitio; un domingo de agosto el aparcamiento de pago se agota pronto. El baño de Miño es de ría: lámina más quieta que el Atlántico abierto de Doniños o Sabón.",
  "Para una orilla más recogida dentro del propio municipio, Perbes ofrece playas más pequeñas y resguardadas, con menos sensación de arenal infinito. Sirve si se quiere menos viento; no si se busca el espacio largo de la Praia Grande. Junto a la Praia Grande, la marisma —terreno húmedo entre río y ría— y el puerto pequeño cierran el frente: borde natural y barcas, no lonja grande. Quien vive junto al arenal puede bajar andando; quien vive retirado convierte la playa en trayecto corto.",
  "Hay tardes en que la toalla ya no apetece. Entonces, a unos quince minutos hacia Pontedeume, las Fragas do Eume te meten bajo robles con el río Eume bajo los pies. No vas a nadar; vas a caminar. En el mismo trayecto, Pontedeume ofrece calles de villa. Ahí el camino forma parte de la experiencia tanto como el baño en la ría. En verano el agua suele rondar los 18–21 °C; en agosto el acceso se nota.",
  "Todo esto explica mejor Miño que contar playas. Junto a la Praia Grande el agua manda en la semana; en Costa Miño la playa es salida elegida y casi cada trayecto —súper, gestiones, bajar al arenal— empieza arrancando el coche. A Coruña queda a unos veinticinco o treinta minutos cuando hace falta lo que la ría no da: una compra grande, cine, o el contraste de Riazor. Sada, Bergondo y A Coruña amplían paseo, ciudad y hospital. Esa red describe mejor Miño que inventariar calas.",
] as const;

const CASA_NUEVO2 = [
  "En Miño la diferencia va de vivir junto a la Praia Grande a vivir en Costa Miño. Un anuncio que solo diga «Miño» puede ocultar si la casa da al arenal y al verano cargado, o a la urbanización de golf con coche para casi todo.",
  "Lo habitual es casa baja o chalé con parcela; en Costa Miño, urbanización de los años 2000. Tienes jardín y vecinos un poco más lejos —y también cubierta, fachada y terreno que cuidar. Junto a la playa notarás sal, humedad y gente de agosto; en la urbanización, cuántos minutos de verdad hay hasta el súper y la arena.",
  "El precio medio de referencia ronda 1.775 €/m² —más bajo que Oleiros o A Coruña—, y esa es parte del atractivo. Con esa media, las columnas A y B sitúan viviendas de dos y tres habitaciones según la distancia a la costa; una casa en Costa Miño con buena parcela suele costar más.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra, la playa, el coche o el tren, y la salida hacia el CHUAC o Alvedro. En agosto, el aparcamiento junto al arenal; en noviembre, la luz y la humedad. Miño premia elegir bien el lado; castiga confundir dunas de folleto con servicios de ciudad.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "Praia Grande y Costa Miño no son intercambiables. Una vivienda «junto a la playa» en el mapa puede significar arena a minutos con verano ruidoso, o jardín y coche para bajar al arenal. Comparar solo el precio inventa un Miño que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el súper, el coche o el tren y la playa que se usaría. También la luz, la orientación, el aislamiento, la ventilación y señales de humedad; junto a la orilla, la sal en ventanas y metales; y cómo se vive esa misma calle un domingo de agosto y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de segunda residencia y de vivienda junto a la playa, pero lo que decide es el inmueble concreto. Un acceso sencillo, buen estado, luz y playa usable amplían el abanico de compradores; una casa muy expuesta, difícil de mantener o lejos de la arena y de los servicios lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Miño",
  a2: "149.988 €",
  a3: "207.675 €",
  b2: "121.144 €",
  b3: "167.738 €",
  m2: "1.775 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Miño encaja si atrae la Praia Grande o Costa Miño a un precio más razonable que Oleiros, aceptando servicios limitados y coche o tren para lo que aquí no se cubre, y aceptando que hay que elegir una forma concreta de vivir el municipio. Junto a la Praia Grande la playa entra en la rutina, a cambio de un verano más lleno; en Costa Miño ganan jardín y calle ancha, a cambio de coche para casi todo. Pontedeume y las Fragas do Eume pueden bastar como salidas cercanas; A Coruña queda para el hospital, las compras grandes y la cultura. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol y más lluvia y humedad.",
  "También encaja si el baño de casi todos los días puede ser de ría —Praia Grande o, más recogido, Perbes— y el verano intenso junto al arenal se tolera eligiendo bien la calle, no la primera fila más ruidosa.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Miño encaja peor si se necesita comercio denso, instituto o servicios de villa completa dentro del propio municipio: aquí lo básico cabe; lo demás pide Pontedeume o A Coruña. Tampoco si el hospital o el aeropuerto deben quedar a unos diez minutos: el CHUAC ronda los veinte y Alvedro, los treinta.",
  "Y si el cielo debe parecerse al de Mallorca, o si se decide solo tras un sábado de sol en las dunas sin probar un noviembre en Costa Miño ni el aparcamiento de agosto, suele llevar a sorpresa.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda junto a la Praia Grande y otra en Costa Miño. Desde cada casa: una compra sencilla, el trayecto a la playa que se usaría, y la salida hacia el CHUAC y Alvedro en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en verano en la Praia Grande (aparcamiento, ruido, gente) y un día cubierto de noviembre (luz, humedad, jardín). Y comprobar la fibra y el estado de la vivienda en la dirección exacta.",
] as const;
const FOTO_COMO_PLAYA = {
  src: "/fotos/golfo-artabro-e-ferrol/mino-praia-grande.jpg",
  pie: "Praia Grande de Miño: arena y dunas",
} as const;

const FOTO_COMO_TREN = {
  src: "/fotos/golfo-artabro-e-ferrol/mino-tren.jpg",
  pie: "Estación de Miño-Castro: el tren hacia A Coruña y Ferrol",
} as const;

const FOTO_HISTORIA_COSTA = {
  src: "/fotos/golfo-artabro-e-ferrol/mino-perbes.jpg",
  pie: "Casas sobre la costa en Miño: urbanización pegada a la playa",
} as const;

const FOTO_MAR_EUME = {
  src: "/fotos/golfo-artabro-e-ferrol/mino-eume.jpg",
  pie: "Fragas do Eume: bosque atlántico a un trayecto corto",
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

export default function Nuevo2MinoPage() {
  const ficha = municipioPorSlug("mino");
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
        <Foto src={FOTO_COMO_PLAYA.src} pie={FOTO_COMO_PLAYA.pie} />
        <Foto src={FOTO_COMO_TREN.src} pie={FOTO_COMO_TREN.pie} />
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
        {DE_DONDE_VIENE_NUEVO2.slice(2).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Mar, río y camino" varianteTarjetaV1>
        {MAR_RIO_CAMINO_NUEVO2.slice(0, 3).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_MAR_EUME.src} pie={FOTO_MAR_EUME.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(3).map((p) => (
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="1.775 €/m²" />
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
