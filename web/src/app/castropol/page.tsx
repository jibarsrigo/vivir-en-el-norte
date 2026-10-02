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
 * NUEVO2 — Castropol (Asturias Occidente).
 * Eje: Castropol villa (pueblo blanco en el promontorio, ría delante, servicios mínimos) vs Figueras (núcleo marinero con puerto y astilleros, al otro lado de la ensenada).
 * Penarronda = playa de dunas hacia Tapia, salida; no tercer polo.
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Asturias Occidente es la franja verde entre la ría del Eo —frente a Ribadeo— y Cabo Busto: Castropol, Tapia de Casariego, Navia y Luarca. Costa auténtica, hospital en Jarrio y aeropuerto de Asturias a cuarenta–setenta y cinco minutos.",
  "Castropol es un concejo pequeño: la villa blanca se asoma a la ría del Eo desde un promontorio; Figueras, al otro lado de la ensenada, es el núcleo marinero con puerto y astilleros. No es Tapia ni Navia: aquí la ría manda y el comercio amplio pide Ribadeo, a unos diez minutos.",
  "Lo que más cambia la vida diaria es dónde queda la casa: en Castropol villa —calles pequeñas, miradores a la ría, escala mínima— o en Figueras —puerto, trabajo de orilla, otra rutina—. En ambos sitios se vive en el concejo; no se vive igual la semana.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Castropol reúne unos tres mil cuatrocientos habitantes repartidos entre la villa blanca del promontorio, Figueras y parroquias. Quien llega de fuera descubre enseguida que hay que elegir. En Castropol villa las casas blancas se amontonan sobre la ría del Eo —la desembocadura ancha del río Eo entre Asturias y Galicia—; al otro lado se ve Ribadeo. Hay farmacia, centro de salud —el médico de cabecera y las consultas del día a día, no el hospital— y lo básico, pero no un súper denso ni vida de villa completa. En Figueras —núcleo marinero al otro lado de la misma ensenada, con puerto y astilleros— la semana huele más a muelle y a oficio; el Palacio de Peñalba —casa señorial junto a la orilla— marca otra escala del mismo concejo. En pocos minutos se pasa de una forma de vivir Castropol a otra, y esa diferencia acaba importando más que la postal uniforme de «pueblo blanco sobre la ría».",
  "Un martes de noviembre, en la villa, se puede hacer un recado corto, pasar por el centro de salud y mirar la ría desde un mirador. Los servicios llegan a 3/10 en nuestra escala: hay centro de salud y comercio mínimo en el núcleo, pero falta el comercio grande —la compra semanal seria suele hacerse en Ribadeo, a unos cinco o diez minutos por el puente—. Quien elige la villa elige quietud y paisaje de estuario; lo que no elige es autonomía cotidiana plena. En Figueras esa misma mañana es más de orilla trabajada; Ribadeo sigue siendo el apoyo para muchas gestiones.",
  "Sin coche, la villa aguanta poco más que lo esencial. El Hospital de Jarrio —público comarcal en Coaña— queda a unos treinta minutos; el aeropuerto de Asturias, hacia setenta y cinco. Hay A-8 y tren de ancho métrico en Vegadeo, cercano. Castropol, a cambio, ofrece frontera usable con Galicia y una ría que entra en la ventana si la casa mira al agua.",
  "Entre julio y agosto cambia el ritmo. Hacia el 25 de julio, las fiestas de Santiago llenan la villa con procesión y verbena. En Figueras, el Carmen —procesión marítima por la ría, a menudo en agosto— concentra gente en el puerto. Penarronda —playa de dunas compartida hacia Tapia, a unos diez minutos— añade toallas y aparcamiento en temporada. Meses después, en un martes húmedo, la villa vuelve a su escala pequeña: menos mesas, más niebla. No son dos Castropol distintos: son dos ritmos que forman parte de vivir aquí todo el año.",
  "También por eso la elección entre villa y Figueras cambia bastante la vida diaria. En la villa se ganan miradores y silencio de promontorio; la compra amplia pide Ribadeo. En Figueras se gana el puerto delante o cerca; agosto se nota más en el muelle, y el súper denso sigue fuera. Esa diferencia de sitio acaba importando mucho más que la postal vista en un mapa.",
] as const;

const CLIMA_NUEVO2 = [
  "Castropol supone un cambio climático claro respecto a Mallorca. Hay bastante menos sol, la lluvia aparece con mucha más frecuencia y la humedad se nota en casa. La referencia local ronda 1.950 horas de sol al año, unos cuarenta días despejados y cerca de 1.000 mm de lluvia en unos ciento treinta y ocho días. Mallorca ronda 2.800 horas de sol. La niebla es alta —de las más pesadas de la zona—; el viento, medio. También aquí llovizna en julio y agosto. Un día puede empezar gris, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 18,5 °C: no pasas el calor de Baleares. En Penarronda el agua suele estar entre 18 y 20 °C; la ría ofrece agua más quieta para mirar y pasear, no el mismo baño de arenal abierto. Quien vive en la villa lo nota al salir a la calle húmeda; quien vive en Figueras, al abrir la ventana al puerto. Un frente gris de noviembre cuenta más que un sábado de sol sobre la ría.",
] as const;

const VIVIR_NUEVO2 = [
  "De Mallorca a Castropol se llega a un pueblo pequeño de frontera con ría delante —o a Figueras, con puerto—, no a una villa completa ni a una ciudad. En Mallorca puede ser habitual pensar primero en kilómetros; aquí unos pocos minutos separan la villa de Figueras —o convierten la misma semana en trayectos a Ribadeo para la compra—. Esa elección modifica decisiones tan sencillas como salir a comprar, ir al hospital o dejar el coche.",
  "También cambia la relación entre coche, ría y sanidad. En la villa se resuelve poco a pie más allá de lo básico; Ribadeo cubre comercio y gestiones. El hospital pide salir hacia Jarrio. Ir y volver a Mallorca suele pasar por el aeropuerto de Asturias —hacia setenta y cinco minutos— o por Santiago —hacia las dos horas, con Palma casi todo el año—. Se oye asturiano y castellano en la calle; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. Julio llena Santiago en la villa y el Carmen en Figueras; Penarronda concentra bañistas. En noviembre la villa se queda en su escala: niebla, humedad y menos luces. Para alguien acostumbrado a Mallorca, la diferencia está en la escala: el cambio se concentra en un pueblo de ría y un apoyo gallego a diez minutos, no en una capital. Vivir aquí todo el año significa aceptar esas dos caras —quietud de promontorio y dependencia de Ribadeo— como partes de una misma vida.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Castropol se asentó en el promontorio que domina la ría del Eo: villa blanca de frontera, con la iglesia de Santiago y calles que miran al agua hacia Ribadeo. La identidad no nace de una playa atlántica famosa, sino de esa posición frente a Galicia y del comercio histórico de estuario. Lo que hoy parece postal de pueblo blanco fue antes una manera de controlar y vivir la desembocadura: miradores, pendiente entre orilla y plaza, y una escala pequeña que nunca pretendió ser capital densa. Quien llega solo por la silueta descubre enseguida lo delgado del comercio a pie.",
  "Figueras creció al otro lado de la misma ensenada como núcleo marinero: puerto, oficio y, desde 1925, los Astilleros Gondán como continuidad industrial de una tradición de ribera. El Palacete Peñalba —chalets modernistas de 1912, arquitectura indiana junto a la orilla— marca otra escala del mismo concejo. Figueras tuvo jurisdicción propia hasta que en 1826 quedó integrada en Castropol; hoy es, de hecho, el núcleo más poblado del municipio. Quien conoce solo el promontorio debe sumar ese polo de muelle: no es un barrio de la villa, es otra forma de vivir el Eo.",
  "La Reserva de la Biosfera Río Eo, Oscos e Terras de Burón amplía el mapa hacia ría e interior. Penarronda —arenal de dunas entre Castropol y Tapia— añade la capa de costa abierta cuando se quiere ola y arena. Santiago en la villa y el Carmen en Figueras marcan el verano en dos calendarios distintos. Quien mire Castropol solo por la postal blanca debe contar también con Figueras, con Penarronda y con la dependencia cotidiana de Ribadeo para la compra amplia.",
  "Hoy, comprar «en Castropol» sigue siendo elegir entre villa de mirador —quietud y escala mínima— o Figueras, con puerto y oficio. El anuncio no distingue cuál de las dos ni cuánto coche pide la semana.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar está cerca en Castropol, pero vivir en el promontorio no es lo mismo que vivir en Figueras. En la villa el agua cotidiana es la ría del Eo: desembocadura ancha entre Asturias y Galicia, lámina abrigada con barcas, marisma a marea baja y Ribadeo enfrente. No es playa atlántica de dunas: es estuario, miradores y orilla quieta, con desnivel entre calles altas y agua. Penarronda —arenal de dunas hacia Tapia, a unos diez minutos— es otra cosa del mismo mapa costero: ola abierta, verano más lleno y coche desde la villa. En verano el agua suele rondar los 19–21 °C. Quien vive en el promontorio puede mirar la ría cada día; quien quiere baño de playa convierte Penarronda en salida. Un martes de junio en la ría suele haber holgura; un domingo de agosto en Penarronda el acceso se llena.",
  "Para caminar andando desde la villa, los miradores y el frente de ría convierten el estuario en horizonte: no es un boulevard llano de ciudad; hay pendiente entre las calles altas y el agua, y el viento de desembocadura cambia según la marea. En Figueras el paseo del puerto hace lo mismo a otra escala, con astillero, muelle y casas hacia la orilla trabajada. Cruzar a Ribadeo por el Puente de los Santos añade casco y comercio, pero ya es salida deliberada de apoyo, no la prolongación peatonal del promontorio.",
  "Cuando el día pide ampliar sin ir muy lejos, Tapia aporta puerto y surf; Navia, villa de servicios; Jarrio, hospital a unos treinta minutos por la A-8. Aquí el día a día pide elegir villa o Figueras; el hospital y la compra grande, salir. Penarronda y la reserva del Eo amplían el mapa natural sin sustituir esa elección de núcleo.",
  "En la villa la ría queda en la ventana casi todos los días; en Figueras el puerto queda integrado en la rutina y el súper denso sigue en Ribadeo. Esa diferencia describe mejor Castropol que contar playas. Ribadeo y Jarrio cubren lo que el concejo no tiene a pie.",
] as const;

const CASA_NUEVO2 = [
  "En Castropol no es lo mismo la villa del promontorio que Figueras. Un anuncio que solo diga «Castropol» puede ocultar si la casa da a miradores de ría con comercio mínimo, o a un puerto con más ruido de orilla.",
  "En la villa abundan casas y pisos con desnivel y humedad de estuario; en Figueras, viviendas más ligadas al muelle. La fibra es parcial en la capa de datos; conviene comprobarla dirección a dirección. No hay obra nueva.",
  "El precio medio de referencia ronda 1.295 €/m². Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual un piso en el promontorio y una casa en Figueras.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra en Ribadeo, la ría o el puerto, y la salida hacia Jarrio o el aeropuerto. En agosto, el aparcamiento en Penarronda; en noviembre, la niebla y la humedad en la villa. Castropol premia elegir bien el núcleo; castiga comprar solo la postal blanca.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "Castropol villa y Figueras no son intercambiables. Una vivienda «en Castropol» en el mapa puede significar mirador de ría con servicios mínimos, o puerto marinero con otra rutina. Comparar solo el precio inventa un Castropol que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta lo básico del núcleo, el trayecto a Ribadeo para la compra, y la salida hacia Jarrio. En la villa, desnivel y niebla. En Figueras, ruido de puerto en temporada. También la luz, la orientación, el aislamiento, la ventilación y señales de humedad; la fibra en esa dirección; y cómo se vive esa misma calle un domingo de agosto y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de vistas a la ría y de vivienda en Figueras, pero lo que decide es el inmueble concreto. Un acceso sencillo, buen estado, luz y un sitio fácil de explicar —villa o Figueras bien situada— amplían el abanico de compradores; una casa muy húmeda, difícil de mantener o mal situada respecto a Ribadeo lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Castropol",
  a2: "109.428 €",
  a3: "151.515 €",
  b2: "88.384 €",
  b3: "122.378 €",
  m2: "1.295 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Castropol encaja si atrae un pueblo blanco sobre la ría del Eo —agua abrigada frente a Ribadeo— o si se prefiere Figueras, el núcleo marinero del mismo concejo con puerto y astilleros. Hay que elegir dónde se vive porque no se vive igual. En la villa ganan el mirador y la quietud; la compra seria y buena parte de los servicios se hacen en Ribadeo. En Figueras gana el puerto; el súper denso sigue fuera. El Hospital de Jarrio queda a unos treinta minutos. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia, niebla alta y humedad.",
  "También encaja si se tolera el calendario de verano —Santiago en la villa, Carmen en Figueras, Penarronda en temporada— eligiendo bien la calle y no solo la primera fila del acceso a la playa.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Castropol encaja peor si se necesita organizar el día a día andando sin salir del concejo: aquí faltan comercio grande y densidad de servicios —los servicios son 3/10 en nuestra escala: hay centro de salud y lo básico, pero la compra semanal seria pide Ribadeo— y eso importa porque sin coche la semana se estrecha. Tampoco si el hospital debe quedar cerca a pie: Jarrio está a unos treinta minutos. Y si se confunde la belleza de la ría con autonomía cotidiana, suele haber sorpresa.",
  "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol sobre el promontorio sin probar un noviembre de niebla ni un agosto en Figueras o Penarronda.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en Castropol villa y otra en Figueras. Desde cada casa: una compra sencilla —y el trayecto a Ribadeo para la completa—, la ría o el puerto, y la salida hacia Jarrio y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto en Figueras o Penarronda (aparcamiento, gente) y un día cubierto de noviembre en la villa (niebla, humedad, luces encendidas). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
] as const;

const FOTO_COMO_IDENTIDAD = {
  src: "/fotos/asturias-occidente/castropol-identidad.jpg",
  pie: "Castropol: pueblo blanco en el promontorio sobre la ría del Eo",
} as const;

const FOTO_COMO_RIA = {
  src: "/fotos/asturias-occidente/castropol-ria.jpg",
  pie: "Ría del Eo: Castropol al fondo, agua abrigada y orilla de estuario",
} as const;

const FOTO_HISTORIA_VILLA = {
  src: "/fotos/asturias-occidente/castropol-villa.jpg",
  pie: "Atardecer sobre la ría del Eo desde el entorno de Castropol",
} as const;

const FOTO_HISTORIA_ORILLA = {
  src: "/fotos/asturias-occidente/castropol-figueras.jpg",
  pie: "Castropol desde el agua: caserío blanco, orilla y dársena de trabajo",
} as const;

const FOTO_MAR_PENARRONDA = {
  src: "/fotos/asturias-occidente/castropol-penarronda.jpg",
  pie: "Penarronda: arenal de dunas y ola abierta hacia Tapia",
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

export default function Nuevo2CastropolPage() {
  const ficha = municipioPorSlug("castropol");
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
        <Foto src={FOTO_COMO_IDENTIDAD.src} pie={FOTO_COMO_IDENTIDAD.pie} />
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
        <Foto src={FOTO_HISTORIA_VILLA.src} pie={FOTO_HISTORIA_VILLA.pie} />
        <Foto src={FOTO_HISTORIA_ORILLA.src} pie={FOTO_HISTORIA_ORILLA.pie} />
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
        <Foto src={FOTO_MAR_PENARRONDA.src} pie={FOTO_MAR_PENARRONDA.pie} />
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="1.295 €/m²" />
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
