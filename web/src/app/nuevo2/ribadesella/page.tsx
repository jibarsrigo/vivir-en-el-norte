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
 * NUEVO2 — Ribadesella (Asturias Oriente).
 * Eje: casco / ría del Sella (comercio a pie, puerto) vs Santa Marina (playa urbana, paseo, casas de Indianos al otro lado del puente).
 * Vega = salida; Tito Bustillo = historia/salida.
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Asturias Oriente es la costa donde la montaña cae al mar: Villaviciosa, Colunga, Ribadesella, Llanes y Ribadedeva. Rías, playas entre acantilados, Picos a media hora y el clima más húmedo de la tabla. Hospital en Arriondas o Cabueñes según municipio.",
  "Ribadesella es villa de unos cinco mil setecientos habitantes entre la desembocadura del Sella y la playa de Santa Marina. No es Llanes ni Villaviciosa: aquí casco, puerto y playa urbana pueden entrar en la misma mañana; a cambio, el verano —y el Descenso— se notan con fuerza.",
  "Lo que más cambia la vida diaria es dónde queda la casa: en el casco junto a la ría —comercio, mercado, puerto a pie— o al otro lado del puente, en Santa Marina —paseo, toalla y casas de Indianos—. En ambos sitios se vive en Ribadesella; no se vive igual.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Ribadesella se siente villa compacta partida por el agua: el casco —soportales, calles de comercio, lonja y puerto en la ría del Sella— concentra súper, farmacia, centro de salud —médico de cabecera y consultas del día a día, no el hospital—, mercado y cine. Al otro lado del puente queda Santa Marina —playa urbana larga con paseo y casas de Indianos, las mansiones de quienes volvieron de América—. Quien llega de fuera descubre enseguida que hay que elegir. En el casco se puede comprar, gestionar y oír el puerto dentro del radio de las calles del casco. En Santa Marina la postal es otra: arena delante o cerca, verano más lleno, el comercio denso quedando al cruzar. En pocos minutos se pasa de una forma de vivir Ribadesella a otra, y esa diferencia acaba importando más que la imagen uniforme de «villa del Sella».",
  "Un martes de noviembre, en el casco, se puede hacer compra, pasar por el centro de salud y bajar al puerto o caminar la orilla de la ría. Los servicios llegan a 7/10 en nuestra escala: hay villa completa —comercio, mercado, cine, salud de día a día—; no llegan a más porque el hospital no está en el municipio. Quien elige el casco elige autonomía cotidiana a pie; lo que no elige es arena debajo de la ventana. En Santa Marina esa misma mañana es más de paseo frente al Cantábrico; el súper pide volver al casco o cruzar el puente.",
  "Sin coche, la villa aguanta bien la semana básica. El Hospital del Oriente —público comarcal en Arriondas— queda a unos veinte minutos; el privado Jove, en Gijón, hacia los cincuenta y cinco. El aeropuerto de Asturias ronda los setenta y cinco minutos —Palma sobre todo en verano—; Santander, hacia noventa, suele cubrir Palma casi todo el año. Ribadesella, a cambio, ofrece villa y playa urbana en el mismo radio, con Picos a media hora como salida.",
  "El primer sábado de agosto cambia el ritmo de golpe. El Descenso Internacional del Sella —carrera de piragüismo que baja desde Arriondas hasta Ribadesella— llena ría, puente, casco y accesos: tráfico, ruido, multitud y aparcamiento imposible durante el día grande y el entorno de la fiesta. El resto del verano ya multiplica población en Santa Marina y en el casco. Meses después, en un martes húmedo, la villa sigue abierta: comercio y ría no se apagan. No son dos Ribadesella distintos: son dos ritmos que forman parte de vivir aquí todo el año.",
  "También por eso la elección entre casco y Santa Marina cambia bastante la vida diaria. En el casco se ganan calles, compra y puerto cerca; la playa pide cruzar el puente. En Santa Marina se gana el paseo y la playa delante o cerca; agosto se nota más, y el comercio denso queda al otro lado. Vega —arenal abierto a unos diez minutos— y Tito Bustillo —cueva paleolítica en el municipio— son salidas del mismo concejo, no un tercer polo de la semana. Esa diferencia de sitio acaba importando más que la postal vista en un mapa.",
] as const;

const CLIMA_NUEVO2 = [
  "Ribadesella supone un cambio climático claro respecto a Mallorca. Hay bastante menos sol, la lluvia aparece con mucha más frecuencia y la humedad se nota en casa. La referencia local ronda 1.750 horas de sol al año —de las más bajas de la tabla—, unos cuarenta días despejados y cerca de 1.250 mm de lluvia en unos ciento cincuenta y tres días. Mallorca ronda 2.800 horas de sol. La niebla es baja; el viento, bajo. También aquí llovizna en julio y agosto. Un día puede empezar gris, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 19,5 °C: no pasas el calor de Baleares. En Santa Marina el agua suele estar entre 19 y 21 °C; la ría ofrece orilla abrigada para pasear, no el mismo baño de arenal abierto. Quien vive en el casco lo nota al salir a la calle húmeda; quien vive en Santa Marina, al abrir la ventana al Cantábrico. Un frente gris de noviembre cuenta más que un sábado de sol en el paseo.",
] as const;

const VIVIR_NUEVO2 = [
  "De Mallorca a Ribadesella se llega a una villa con ría y playa urbana a un puente de distancia —o a una casa en Santa Marina—, no a un pueblo mínimo ni a una ciudad. En Mallorca puede ser habitual pensar primero en kilómetros; aquí cruzar el puente separa el casco de la toalla —o convierte la misma semana en trayectos cortos si vives en Santa Marina y necesitas el súper denso—. Esa elección modifica decisiones tan sencillas como salir a comprar, ir a la playa o dejar el coche.",
  "También cambia la relación entre coche, mar y hospital. En el casco gran parte del día a día cabe a pie; Arriondas pide salir para lo hospitalario. Santa Marina queda integrada en la villa; Vega y Tito Bustillo no. Ir y volver a Mallorca suele pasar por Asturias en verano o por Santander casi todo el año. Se oye asturiano y castellano; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. Agosto llena Santa Marina y el Descenso convierte un sábado en otra villa; en noviembre el casco sigue abierto —compra, mesas, ría— aunque más quieto. Para alguien acostumbrado a Mallorca, la diferencia está en la escala: el cambio se concentra en una villa partida por el Sella, no en una capital. Vivir aquí todo el año significa aceptar esas dos caras —semana de casco y orilla saturada en verano— como partes de una misma vida.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Ribadesella creció en la desembocadura del Sella: villa de ría con puerto, casco de soportales y un puente que une dos orillas. El Sella —río que baja desde los Picos y se abre aquí al Cantábrico— organizó la vida medieval: pesca, sal, ballena y comercio fluvial. Una orilla es casco y dársena; la otra, Santa Marina. Quien confunde las dos compra mal. La identidad no nace solo de la playa; nace de ese cruce entre río, mar y villa de trabajo.",
  "Santa Marina añadió el frente de baño y el paseo con casas de Indianos —mansiones de quienes emigraron a América y volvieron con fortuna a finales del XIX y principios del XX—. No es un barrio lejano del casco: es la otra cara caminable de la misma villa, con más salitre, más toallas en agosto y otra presión de aparcamiento. El puente no es un detalle turístico: es el umbral entre dos maneras de vivir Ribadesella. Cruzarlo a pie cambia el registro en pocos minutos.",
  "La cueva de Tito Bustillo —arte paleolítico en el macizo de Ardines, Patrimonio de la Humanidad, visita guiada— añade prehistoria como salida cultural, no como rutina de martes. Vega —playa abierta a unos diez minutos hacia el oeste— aporta otra capa de costa sin sustituir Santa Marina. El Descenso Internacional del Sella —primer sábado de agosto, piraguas desde Arriondas hasta aquí, fiesta de interés turístico internacional— es el pico del año: calles llenas, ruido y un día que no se parece al resto del calendario. Quien mire Ribadesella solo por ese sábado debe contar también con la villa que funciona cuando se acaba agosto.",
  "Hoy, comprar «en Ribadesella» sigue siendo elegir entre casco y puerto con autonomía a pie, o Santa Marina con playa delante y más presión de temporada. El anuncio no dice cuál de las dos.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar está siempre cerca en Ribadesella, pero vivir en el casco no es lo mismo que vivir en Santa Marina. En el casco el agua cotidiana es la ría del Sella: desembocadura ancha, puerto, orilla abrigada y el puente hacia la playa. No es solo postal de piragua: es lámina cotidiana donde se oye el trabajo del muelle y se ve el río abrirse al Cantábrico. Santa Marina —arenal urbano con paseo al otro lado— es otra cosa del mismo radio: mar abierto, toallas en verano y casas de Indianos de fondo; en el agua suelen rondar los 18–20 °C. Vega —playa abierta a unos diez minutos— es salida, no puerta de la semana. Quien vive en el casco puede caminar ría y puerto; quien quiere baño convierte Santa Marina en orilla a pie o Vega en trayecto corto. Un martes de junio en la ría suele haber holgura; un domingo de agosto en Santa Marina el paseo se llena.",
  "Para caminar andando desde el casco, el frente de ría, el puente y el paseo de Santa Marina convierten orilla y playa en horizonte cercano. No es un boulevard llano de ciudad grande: hay que cruzar el agua o rodearla, y el viento de estuario no es el mismo que el de la playa abierta. Es villa partida por el río. Desde Santa Marina ese mismo día empieza en la arena y pide unos minutos para el comercio del casco.",
  "Tito Bustillo aporta la cueva; Vega, otra playa; Arriondas, el hospital a unos quince minutos; los Picos, montaña a media hora; Llanes, otra villa del oriente. Aquí el día a día pide elegir casco o Santa Marina; el hospital, salir a Arriondas.",
  "En el casco la ría queda a pie casi todos los días; en Santa Marina la playa queda delante y el comercio denso del casco queda al otro lado del puente. Vega y Tito Bustillo amplían el día sin sustituir ese eje. Arriondas cubre la sanidad hospitalaria cuando hace falta lo que Ribadesella no tiene.",
] as const;

const CASA_NUEVO2 = [
  "En Ribadesella el puente separa dos maneras de vivir: casco y ría, o Santa Marina. Un anuncio que solo diga «Ribadesella» puede ocultar si la casa da a calles caminables y puerto, o a paseo de playa con más salitre y ocupación de verano.",
  "En el casco abundan pisos y casas con humedad de ría; en Santa Marina, viviendas ligadas al paseo y a tipologías de Indianos o de veraneo. La fibra es Sí en la capa de datos; conviene comprobarla dirección a dirección. Hay poca obra nueva.",
  "El precio medio de referencia ronda 2.632 €/m². Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual un piso en el casco y una casa frente a Santa Marina.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra, la ría o la playa, y la salida hacia Arriondas o el aeropuerto. En agosto, el aparcamiento en Santa Marina y el día del Descenso; en noviembre, la humedad en el casco. Ribadesella premia elegir bien el polo; castiga comprar solo la postal del Sella.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "El casco y Santa Marina no son intercambiables. Una vivienda «en Ribadesella» en el mapa puede significar comercio y puerto a pie sin arena debajo, o paseo de playa con coche o puente para el súper denso. Comparar solo el precio inventa una Ribadesella que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el súper, la ría o Santa Marina, y la salida hacia Arriondas. En el casco, humedad de estuario. En Santa Marina, salitre, aparcamiento en temporada y el impacto del Descenso si la calle queda en el recorrido. También la luz, la orientación, el aislamiento, la ventilación y señales de humedad; la fibra en esa dirección; y cómo se vive esa misma calle un domingo de agosto y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de villa con servicios y de vivienda cerca de Santa Marina, pero lo que decide es el inmueble concreto. Un acceso sencillo, buen estado, luz y un sitio fácil de explicar —casco o Santa Marina bien situada— amplían el abanico de compradores; una casa mal situada respecto a la rutina elegida o muy expuesta al pico de agosto lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Ribadesella",
  a2: "222.404 €",
  a3: "307.944 €",
  b2: "179.634 €",
  b3: "248.724 €",
  m2: "2.632 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Ribadesella encaja si atrae una villa con ría y puerto delante —comercio, mercado, cine y centro de salud a pie— o si se prefiere vivir en Santa Marina, con playa urbana, paseo y casas de Indianos al otro lado del puente. Hay que elegir dónde se vive porque no se vive igual. En el casco gran parte del día a día cabe sin salir; la playa pide cruzar. En Santa Marina ganan la arena y el paseo; el comercio denso queda en el casco. El Hospital del Oriente, en Arriondas, queda a unos veinte minutos. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia y humedad.",
  "También encaja si se tolera el calendario —Descenso el primer sábado de agosto, verano lleno en Santa Marina— eligiendo bien la calle y no solo la primera fila del paseo o del acceso a la ría ese día.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Ribadesella encaja peor si se necesita calma constante en agosto: aquí falta —el Descenso y el veraneo llenan casco, puente y Santa Marina con tráfico, ruido y multitud— y eso importa porque quien compra solo tras un sábado de sol en el paseo suele llevarse sorpresa. Tampoco si el hospital debe quedar en el municipio: Arriondas está a unos veinte minutos. Los servicios cotidianos son altos —7/10: villa completa con mercado y cine, sin hospital propio— pero ese siete no sustituye la cabecera sanitaria de Arriondas.",
  "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras el Descenso o un agosto en Santa Marina sin probar un noviembre en el casco.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el casco y otra en Santa Marina. Desde cada casa: una compra sencilla, el trayecto a la ría o a la playa, y la salida hacia Arriondas y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto —idealmente el entorno del Descenso o un domingo en Santa Marina (aparcamiento, gente)— y un día cubierto de noviembre en el casco (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
] as const;

const FOTO_COMO_PUERTO = {
  src: "/fotos/asturias-oriente/ribadesella-puerto.jpg",
  pie: "Puerto de Ribadesella en la ría del Sella",
} as const;

const FOTO_COMO_SANTA_MARINA = {
  src: "/fotos/asturias-oriente/ribadesella-santa-marina.jpg",
  pie: "Paseo y playa de Santa Marina, al otro lado del puente",
} as const;

const FOTO_HISTORIA_INDIANOS = {
  src: "/fotos/asturias-oriente/ribadesella-indianos.jpg",
  pie: "Casas de Indianos en el paseo de Santa Marina",
} as const;

const FOTO_HISTORIA_TITO = {
  src: "/fotos/asturias-oriente/ribadesella-tito.jpg",
  pie: "Entorno de la cueva de Tito Bustillo, Ribadesella",
} as const;

const FOTO_MAR_SELLA = {
  src: "/fotos/asturias-oriente/ribadesella-sella.jpg",
  pie: "Ría del Sella en Ribadesella",
} as const;

const FOTO_MAR_VEGA = {
  src: "/fotos/asturias-oriente/ribadesella-vega.jpg",
  pie: "Playa de Vega, salida a unos diez minutos de Ribadesella",
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

export default function Nuevo2RibadesellaPage() {
  const ficha = municipioPorSlug("ribadesella");
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
        <Foto src={FOTO_COMO_SANTA_MARINA.src} pie={FOTO_COMO_SANTA_MARINA.pie} />
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
        <Foto src={FOTO_HISTORIA_INDIANOS.src} pie={FOTO_HISTORIA_INDIANOS.pie} />
        <Foto src={FOTO_HISTORIA_TITO.src} pie={FOTO_HISTORIA_TITO.pie} />
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
        <Foto src={FOTO_MAR_SELLA.src} pie={FOTO_MAR_SELLA.pie} />
        <Foto src={FOTO_MAR_VEGA.src} pie={FOTO_MAR_VEGA.pie} />
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="2.632 €/m²" />
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
