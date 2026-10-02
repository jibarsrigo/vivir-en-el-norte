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
 * NUEVO2 — Oleiros (Golfo Ártabro e Ferrol).
 * Piloto de continuidad: docs/continuidad-nuevo2.md
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Golfo Ártabro e Ferrol reúne las rías y la costa alrededor de A Coruña: Oleiros al este de la ría do Burgo; Sada y Bergondo hacia Betanzos; Miño con la Praia Grande; Ares y Redes en la ría de Ares; y Ferrol al norte. El hospital y el aeropuerto de Alvedro quedan cerca. El cielo suele ser más gris y lluvioso que en las Rías Baixas.",
  "Oleiros es el municipio residencial que rodea esa capital por el este: unos 38.700 habitantes en casas bajas y chalés repartidos, no un pueblo donde la vida gire alrededor de una sola calle o plaza mayor con el súper, el bar y la farmacia juntos. Aquí se gana playa o paseo cerca de A Coruña; a cambio, hay que elegir bien en qué lado se vive.",
  "Esa elección es lo que más cambia la vida diaria: Perillo para el súper y las gestiones sin orilla debajo de casa; Santa Cristina y la orilla de ría para bajar a la arena entre semana, a cambio de más coche para lo cotidiano y más verano ruidoso. En agosto, junto a la playa hay toallas y ruido; unos minutos tierra adentro, el silencio vuelve antes.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Oleiros reúne unos 38.700 habitantes, pero la vida no se concentra en un único centro de pueblo —esa plaza mayor con bares, tiendas y ayuntamiento donde en una villa pequeña se resuelve casi todo el día a día—. Creció pegado a A Coruña: casas bajas y chalés repartidos, sin un casco único. Quien llega de fuera descubre enseguida que hay que elegir. En Perillo —el sitio más junto a la capital, con calles más juntas— se puede ir al súper, a la farmacia o al colegio sin entrar cada día en A Coruña, pero la orilla no queda debajo de casa. Hacia Santa Cristina —la playa de ría que mucha gente asocia con «vivir en Oleiros»— el agua y A Coruña al otro lado entran en la escena diaria, a cambio de más coche para la compra y de un verano más lleno. En pocos minutos se pasa de una forma de vivir Oleiros a otra, y esa diferencia acaba importando más que la imagen uniforme del municipio en el mapa.",
  "Un martes de noviembre, en Perillo, se puede ir al súper, a la farmacia, al colegio o a la biblioteca sin convertir cada mañana en una salida a la capital. Las calles están más juntas que en una urbanización aislada; hay sensación de pueblo-ciudad pequeña. La capital sigue a pocos minutos para una compra grande, el cine o el hospital, pero una parte de la semana se resuelve aquí. Quien elige Perillo elige esa comodidad cotidiana: lo que no elige es bajar a la arena al acabar el café.",
  "Sin coche la semana cambia del todo según ese mismo eje. Desde Perillo o desde cerca de Santa Cristina, el CHUAC —hospital público grande de A Coruña— suele quedar a unos diez minutos; Alvedro, el aeropuerto de A Coruña, también alrededor de diez. Hay bus hacia la capital, pero los sitios de Oleiros están lejos unos de otros: quien vive en la orilla suele necesitar el coche para el súper más a menudo que quien vive en Perillo. A Coruña funciona como ciudad de apoyo para la compra grande, la cultura o el hospital, sin que eso quite que la elección Perillo / orilla cambie el día a día.",
  "La diferencia entre agosto y noviembre se nota sobre todo en la orilla. Santa Cristina se llena de toallas y de coches buscando hueco; en San Juan —hogueras a finales de junio— y en las noches de julio y agosto el paseo se oye más. Vivir en primera línea significa semanas ruidosas y aparcamiento disputado. Meses después, en un martes húmedo, la misma ría recupera una escala mucho más tranquila. Unos minutos tierra adentro, o en Perillo, ese contraste se nota menos. No son dos Oleiros distintos: son dos ritmos que forman parte de vivir aquí todo el año.",
  "También por eso la elección entre Perillo y la orilla de ría cambia bastante la vida diaria. En Perillo se tiene la compra y las gestiones más a mano, a cambio de no tener el agua integrada en la puerta de casa. En Santa Cristina el baño y el paseo entran en la rutina, a cambio de más coche para lo cotidiano y de un verano más expuesto al movimiento. En pocos minutos se pasa de una forma de vivir Oleiros a otra; esa diferencia de sitio acaba importando mucho más que la imagen uniforme del municipio visto en un mapa.",
] as const;

const CLIMA_NUEVO2 = [
  "Quien llega de Mallorca nota primero el cielo: mucho menos sol, lluvia más a menudo y humedad que se queda en casa. No hay estación propia; la referencia cercana es A Coruña, a unos diez minutos —alrededor de 1.900 horas de sol al año y cerca de 1.000 mm de lluvia—. Mallorca ronda 2.800 horas de sol. También aquí llovizna en julio y agosto. Un día puede empezar gris, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "En verano el contraste se nota aún más. Las medias rondan los 19 °C, sin el calor fuerte de Baleares. En Santa Cristina el agua de ría invita más al baño que Riazor, en A Coruña; muchos días puedes bañarte o pasear cuando el Atlántico abierto de la capital no apetece. En Perillo ese contraste se vive menos en la orilla y más en la casa y el jardín: la terraza de agosto se usa mucho menos entre noviembre y febrero, y importan la orientación, el aislamiento y la humedad.",
] as const;

const VIVIR_NUEVO2 = [
  "Cambiar Mallorca por Oleiros no es solo cambiar de clima: cambia la escala y la forma de organizar la semana. Se pasa a casas y urbanizaciones repartidas, con A Coruña a minutos para lo que aquí no se cubre. En Mallorca puede ser habitual pensar primero en kilómetros; aquí unos pocos minutos separan dos vidas distintas —Perillo o la orilla— y esa elección modifica decisiones tan sencillas como salir a comprar, bajar a la playa o dejar el coche.",
  "También cambia la relación entre coche, costa y servicios. Oleiros puede tener el mar muy presente, pero vivir aquí no equivale a tener la playa a pie desde cualquier vivienda ni el súper debajo de casa. Para muchas salidas entre sitios, y para hospital o aeropuerto, hace falta sacarlo del garaje. A cambio, A Coruña y Alvedro están lo bastante cerca para que esa escala repartida no signifique aislamiento: se puede vivir en un entorno muy distinto del mallorquín sin quedar lejos de una capital de apoyo ni de los vuelos.",
  "Y cambia mucho el contraste entre estaciones. Agosto llena Santa Cristina de toallas y movimiento; en noviembre la misma orilla recupera un ritmo mucho más tranquilo, y Perillo sigue siendo sobre todo residencial. Para alguien acostumbrado a Mallorca, donde también existe presión turística estival, la diferencia está en la escala: el cambio se concentra en un tramo de ría y urbanizaciones, no en una ciudad entera. Vivir aquí todo el año significa aceptar esas dos caras —el verano concurrido en la orilla y los meses húmedos y tranquilos— como partes de una misma vida, no elegir únicamente la imagen de un sábado de sol en Santa Cristina.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "La Oleiros que se nota al vivir junto a la ría no nació como urbanización de folleto. Durante siglos miró a la bahía y a A Coruña: defender el puerto, cruzar a la capital, vivir de un territorio más rural y costero que el de hoy. En Santa Cruz —la bahía pequeña con el castillo en un islote unido por pasarela— esa historia se ve al andar: el castillo se levantó a finales del siglo XVI, tras el ataque de la Armada inglesa de Francis Drake al puerto de A Coruña, para defender la entrada. Luego tuvo usos civiles —en el siglo XIX, ligado a la familia de Emilia Pardo Bazán— y hoy alberga salas municipales y el CEIDA, el centro de divulgación ambiental de Galicia.",
  "Desde Santa Cruz, con el castillo en el islote y el paseo junto al agua, se entiende una Oleiros residencial pegada a la capital, no una villa marinera densa como Redes ni una ciudad naval como Ferrol. Lo que más se ve al vivir aquí es el crecimiento moderno: casas bajas y urbanizaciones sobre ese territorio antiguo. Perillo, más junto a A Coruña, concentra esa cara cotidiana de súper y calles juntas; Santa Cristina concentra la cara de orilla que mucha gente busca al decir «Oleiros».",
  "Al ir hacia el Atlántico abierto aparece otra capa. Dexo-Serantes, declarado Monumento Natural en el año 2000, protege acantilados e islotes entre el cabo de Mera —punta atlántica del propio municipio— y Lorbé: senda, faro y un paisaje de la Costa Ártabra distinto de la ría calmada. No es el eje de la vivienda diaria para quien elige Perillo o Santa Cristina, pero explica por qué el mismo municipio puede ofrecer, a pocos minutos, una tarde de acantilado cuando la toalla ya no apetece.",
  "Perillo y Santa Cristina no son un mismo producto con otro nombre. Uno concentra la semana a pie; el otro, la orilla de ría. Dexo-Serantes queda como salida de acantilado cuando la toalla ya no apetece. La casa concreta decide qué parte de Oleiros se vive de verdad.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El agua está cerca en Oleiros, pero no todas las orillas se viven igual —y no todas quedan a pie desde cualquier casa—. En la ría, el brazo de mar más cerrado hacia A Coruña, el agua suele estar más quieta: se puede bañar con más calma que en el Atlántico abierto. Santa Cristina es, para mucha gente, esa playa de casi todos los días: arenal y paseo con la capital visible al otro lado. Quien vive cerca puede bajar entre semana; quien vive en Perillo la convierte en un destino corto en coche. Un martes de junio suele haber sitio para la toalla; un domingo de agosto el aparcamiento se agota y hace falta llegar pronto.",
  "Para caminar sin convertir la tarde en plan de coche, Santa Cruz ofrece el paseo corto alrededor del islote del castillo: se camina junto a la ría con A Coruña enfrente, más que tender la toalla. Es el complemento de orilla cuando no apetece la arena. Desde Perillo, ese paseo también pide un desplazamiento breve; no está debajo de la compra cotidiana.",
  "Cuando se quiere otra costa, las playas de Mera y Bastiagueiro —en el tramo de Oleiros que mira más al Atlántico abierto, no a la ría calmada— cambian el baño: más oleaje, más viento, agua menos quieta que en Santa Cristina. Dexo-Serantes ya no es toalla: la senda entre el cabo de Mera y Lorbé pide calzado y tiempo, con el faro y el Aula del Mar —en la antigua casa del farero— como referencias. Aquí el paisaje cuenta tanto como el baño.",
  "Todo esto explica mejor Oleiros que contar cuántas playas tiene. Quien elige la orilla de ría tiene el agua metida en la semana; quien elige Perillo tiene la compra a mano y la playa como salida corta. Para acantilado o costa más abierta hace falta convertir el mar en una tarde elegida —y, con frecuencia, empezar utilizando el coche.",
] as const;

const CASA_NUEVO2 = [
  "En Oleiros conviene separar Perillo y la orilla antes de mirar solo el precio. Un anuncio que solo diga «Oleiros» puede ocultar si la casa da al súper y a calles juntas, o a Santa Cristina con ría y verano cargado. Sin comparar esa rutina, el precio solo no basta.",
  "Lo habitual es chalé o casa baja con parcela; también hay pisos. Tienes jardín y vecinos un poco más lejos —y también cubierta, fachada y terreno que cuidar. En la orilla notarás sal, humedad y gente de agosto; en Perillo, cuántos minutos de verdad hay hasta la playa que se usaría.",
  "El precio medio de referencia ronda 2.605 €/m². Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa; una casa unifamiliar con buena parcela suele costar más. El metro no describe igual una vivienda junto al paseo de Santa Cristina y otra hacia Perillo.",
  "Antes del precio conviene recorrer la rutina desde la casa concreta: la compra, la playa o el paseo, y la salida hacia A Coruña. En agosto, el aparcamiento en la orilla; en noviembre, la luz y la humedad. Oleiros premia elegir bien el lado; castiga comparar Perillo y Santa Cristina como si fueran el mismo producto.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "Perillo y la orilla de ría (Santa Cristina) no son intercambiables. Una vivienda «cerca de todo» en el mapa puede significar súper a pie sin arena debajo, o arena a minutos con más coche para la compra. Comparar solo el precio inventa un Oleiros que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el súper, el coche y la playa o paseo que se usaría. También importan la luz, la orientación, el aislamiento, la ventilación y señales de humedad; en la orilla, la sal en ventanas y metales; y cómo se vive esa misma calle un domingo de agosto y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda residencial alrededor de A Coruña, pero lo que decide es el inmueble concreto. Un acceso sencillo, buen estado, luz y un sitio fácil de explicar —Perillo práctico u orilla usable— amplían el abanico de compradores; una casa muy expuesta, difícil de mantener o mal situada respecto a la rutina elegida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Oleiros",
  a2: "220.123 €",
  a3: "304.785 €",
  b2: "177.791 €",
  b3: "246.173 €",
  m2: "2.605 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Oleiros encaja si atrae vivir en casa baja o urbanización con A Coruña a unos diez minutos, aceptando que hay que elegir una forma concreta de vivir el municipio. En Perillo el súper y las gestiones quedan a mano, a cambio de no tener la orilla debajo de casa; en Santa Cristina el baño y el paseo de ría entran en la rutina, a cambio de usar más el coche para lo cotidiano y de un verano más lleno. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol y más lluvia y humedad.",
  "También encaja si el baño de casi todos los días puede ser de ría —Santa Cristina como referencia— y se acepta que Dexo-Serantes u otras salidas de acantilado quedan como tarde elegida, no como la orilla de diario. Se puede resolver lo básico en el municipio y usar la capital para el hospital, las compras grandes y la cultura.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Oleiros encaja peor si el presupuesto para tres habitaciones o para un chalé debe quedar en un precio medio de esta zona: el metro de referencia ronda 2.605 €/m² y esas tipologías suben con facilidad. Ferrol, Bergondo o Sada suelen bajar el precio; Sada, además, ofrece una villa con puerto.",
  "También encaja peor si se busca un casco gótico, una aldea marinera densa como Redes o una ciudad con el hospital a pie: aquí mandan el chalé, el paseo y la vida residencial alrededor de A Coruña. Y si el cielo debe parecerse al de Mallorca, o si se decide solo tras un sábado soleado en Santa Cristina sin probar un noviembre ni el aparcamiento de agosto, suele llevar a sorpresa.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre Perillo y una vivienda junto a Santa Cristina —o a la orilla que se usaría—. Desde cada casa: una compra sencilla, el trayecto a la playa o al paseo, y la salida hacia A Coruña y al CHUAC en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en verano (aparcamiento, ruido, gente en la orilla) y un día cubierto de noviembre (luz, humedad, jardín). Y comprobar la fibra y el estado de la vivienda en la dirección exacta.",
] as const;

const FOTO_COMO_RIA = {
  src: "/fotos/golfo-artabro-e-ferrol/oleiros-identidad-ria.jpg",
  pie: "Santa Cristina: casas frente a la ría, con el monte detrás",
} as const;

const FOTO_COMO_PERILLO = {
  src: "/fotos/golfo-artabro-e-ferrol/oleiros-perillo.jpg",
  pie: "Perillo: plaza y casas junto a la ría",
} as const;

const FOTO_HISTORIA_CASTILLO = {
  src: "/fotos/golfo-artabro-e-ferrol/oleiros-santa-cruz.jpg",
  pie: "Castillo de Santa Cruz: muralla y garita sobre la ría",
} as const;

const FOTO_MAR_SANTA_CRISTINA = {
  src: "/fotos/golfo-artabro-e-ferrol/oleiros-bastiagueiro.jpg",
  pie: "Santa Cristina: arenal de ría con A Coruña al fondo",
} as const;

const FOTO_MAR_MERA = {
  src: "/fotos/golfo-artabro-e-ferrol/oleiros-mera.jpg",
  pie: "Faro de Mera sobre la costa de Oleiros",
} as const;

const FOTO_MAR_DEXO = {
  src: "/fotos/golfo-artabro-e-ferrol/oleiros-dexo.jpg",
  pie: "Dexo-Serantes: roca y acantilado hacia el Atlántico",
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

export default function Nuevo2OleirosPage() {
  const ficha = municipioPorSlug("oleiros");
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
        {COMO_SE_VIVE_NUEVO2.slice(0, 4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_COMO_RIA.src} pie={FOTO_COMO_RIA.pie} />
        <Foto src={FOTO_COMO_PERILLO.src} pie={FOTO_COMO_PERILLO.pie} />
        {COMO_SE_VIVE_NUEVO2.slice(4).map((p) => (
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
        <Foto src={FOTO_HISTORIA_CASTILLO.src} pie={FOTO_HISTORIA_CASTILLO.pie} />
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
        <Foto src={FOTO_MAR_SANTA_CRISTINA.src} pie={FOTO_MAR_SANTA_CRISTINA.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[2]}</p>
        <Foto src={FOTO_MAR_MERA.src} pie={FOTO_MAR_MERA.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[3]}</p>
        <Foto src={FOTO_MAR_DEXO.src} pie={FOTO_MAR_DEXO.pie} />
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Casa" varianteTarjetaV1>
        {CASA_NUEVO2.slice(0, 2).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="2.605 €/m²" />
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
