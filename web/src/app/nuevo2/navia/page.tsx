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
 * NUEVO2 — Navia (Asturias Occidente).
 * Eje: villa de Navia (servicios, ría, autonomía cotidiana) vs Puerto de Vega (núcleo marinero compacto, otra escala).
 * Frexulfe / Barayo / Coaña = salidas; no tercer polo.
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Asturias Occidente es la franja verde entre la ría del Eo —frente a Ribadeo— y Cabo Busto: Castropol, Tapia de Casariego, Navia y Luarca. Costa auténtica, hospital en Jarrio y aeropuerto de Asturias a cuarenta–setenta y cinco minutos.",
  "Navia es villa de unos ocho mil quinientos habitantes junto a la desembocadura del río Navia. No es Tapia ni Luarca: aquí pesan más los servicios y el hospital cercano en Jarrio; a cambio, la playa no está tan integrada como en Tapia y el encanto marinero más concentrado queda en Puerto de Vega, a unos cinco minutos.",
  "Lo que más cambia la vida diaria es dónde queda la casa: en la villa de Navia —comercio, ría, gestiones a pie— o en Puerto de Vega —puerto pequeño, calles marineras, otra semana—. En ambos sitios se vive en el concejo; no se vive igual.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Navia se siente villa comarcal: el casco junto a la ría —desembocadura del río Navia en el Cantábrico, con dársena y paseo— concentra comercio, mercado, centro de salud, cine y buena parte de la semana sin salir. Quien llega de fuera descubre enseguida que hay que elegir. En la villa se puede comprar, gestionar y pasear la orilla del río; la playa de Navia —arenal junto a la desembocadura, separado del canal por un espigón— queda a pocos minutos según la calle, no siempre debajo de la ventana. Puerto de Vega —núcleo marinero a unos cinco minutos hacia el este, con puerto propio y calles apretadas al mar— es otra forma de vivir el mismo concejo: más postal de pueblo marinero, menos densidad de servicios de villa. En pocos minutos se pasa de una a otra, y esa diferencia acaba importando más que la imagen uniforme de «Navia» en el mapa.",
  "Un martes de noviembre, en la villa, se puede hacer compra, pasar por el centro de salud y caminar el frente de ría. Los servicios llegan a 6/10 en nuestra escala: hay villa completa para el occidente —comercio, centro de salud, mercado, cine—; el hospital comarcal no está dentro, pero Jarrio queda a unos diez minutos, el mejor tiempo de la zona. Quien elige la villa elige autonomía cotidiana; lo que no elige es el casco marinero más concentrado de Puerto de Vega. En Vega esa misma mañana es más de muelle y de escala pequeña; el súper denso y muchas gestiones piden Navia.",
  "Sin coche, la villa aguanta bien la semana básica. Jarrio queda a unos diez minutos; el aeropuerto de Asturias, hacia cincuenta y cinco. Hay A-8 y tren de ancho métrico. Navia, a cambio, ofrece la base práctica del occidente: menos encanto de postal que Luarca, más autonomía sanitaria que Castropol.",
  "Entre agosto y septiembre cambia el ritmo. Las fiestas de Nuestra Señora de la Barca y San Roque —hacia mediados de agosto, con procesión marítima por la ría— llenan dársena y calles. En Puerto de Vega, Las Telayas —hacia el 8 de septiembre, patronales de Nuestra Señora de la Atalaya, con jira a Frexulfe— concentran gente en el núcleo marinero. Frexulfe —playa y monumento natural hacia el este— y Barayo —reserva natural hacia Valdés— añaden salidas de costa. Meses después, en un martes húmedo, la villa sigue abierta: comercio y servicios no dependen del verano. No son dos Navia distintos: son dos ritmos que forman parte de vivir aquí todo el año.",
  "También por eso la elección entre villa y Puerto de Vega cambia bastante la vida diaria. En la villa se ganan compra, gestiones y ría cerca; el pueblo marinero más concentrado pide unos minutos. En Vega se gana el puerto delante; agosto y Las Telayas se notan más, y el comercio amplio queda en Navia. Esa diferencia de sitio acaba importando mucho más que la postal vista en un mapa.",
] as const;

const CLIMA_NUEVO2 = [
  "Navia supone un cambio climático claro respecto a Mallorca. Hay bastante menos sol, la lluvia aparece con mucha más frecuencia y la humedad se nota en casa. La referencia local ronda 1.900 horas de sol al año, unos cuarenta días despejados y cerca de 1.000 mm de lluvia en unos ciento cuarenta días. Mallorca ronda 2.800 horas de sol. La niebla es media —algo menos pesada que en Tapia o Castropol—; el viento, medio. También aquí llovizna en julio y agosto. Un día puede empezar gris, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 18,5 °C: no pasas el calor de Baleares. En la playa de Navia, Frexulfe o Barayo el agua suele estar entre 18 y 20 °C; la ría ofrece agua más quieta para pasear, no el mismo baño de arenal abierto. Quien vive en la villa lo nota al salir a la calle húmeda; quien vive en Puerto de Vega, al abrir la ventana al puerto. Un frente gris de noviembre cuenta más que un sábado de sol en Frexulfe.",
] as const;

const VIVIR_NUEVO2 = [
  "De Mallorca a Navia se llega a una villa de servicios junto a su ría —o a Puerto de Vega, más marinero—, no a un pueblo mínimo ni a una ciudad. En Mallorca puede ser habitual pensar primero en kilómetros; aquí unos pocos minutos separan el casco de la playa o de Vega —o convierten la misma semana en trayectos si vives en Vega y necesitas el súper—. Esa elección modifica decisiones tan sencillas como salir a comprar, ir al hospital o dejar el coche.",
  "También cambia la relación entre coche, ría y sanidad. En la villa gran parte del día a día cabe a pie; Jarrio queda a unos diez minutos, el acceso hospitalario más corto de la zona. Las playas y Puerto de Vega piden un desplazamiento corto, no una excursión larga. Ir y volver a Mallorca suele pasar por el aeropuerto de Asturias —hacia cincuenta y cinco minutos— con Palma sobre todo en verano. Se oye asturiano y castellano; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. Agosto llena Las Barcas en Navia; septiembre, Las Telayas en Vega. En noviembre la villa sigue abierta —compra, cine, ría— aunque más quieta. Para alguien acostumbrado a Mallorca, la diferencia está en la escala: el cambio se concentra en una villa comarcal y un pueblo marinero cercano, no en una capital. Vivir aquí todo el año significa aceptar esas dos caras —villa práctica y Vega festiva— como partes de una misma vida.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Navia creció como villa de río y desembocadura: la ría que lleva su nombre organiza el casco, el comercio y buena parte de la vida anual. Hay huellas castreñas en el entorno y una Carta Puebla de Alfonso X en 1270 que fija la villa medieval; el Camino de la Costa y un antiguo hospital de peregrinos añadieron tránsito y oficio mucho antes del veraneo. Lo que hoy parece una capital comarcal de servicios fue antes una manera de vivir del estuario: calles hacia la orilla, mercado y gestiones en un radio corto. Quien llega solo por Frexulfe descubre que la identidad práctica de Navia se sostiene en esa villa de ría.",
  "Puerto de Vega sostiene la otra historia visible del concejo, a unos siete kilómetros. Fue puerto ballenero —contratos documentados desde el XVII— y en el XVIII llegó a concentrar un comercio marítimo desproporcionado para el tamaño del muelle, con aduana temprana. Allí murió Jovellanos en 1811; la iglesia de Santa Marina y la capilla de la Atalaya siguen anclando el perfil marinero. Las Telayas —fiesta propia de Vega— marcan un calendario distinto del de la capital. No es un barrio de Navia: es otro polo con puerto delante y villa de servicios detrás.",
  "El castro de Coaña —poblado fortificado de la Edad del Hierro con corros de piedra, en el concejo vecino, a unos cinco minutos— añade una capa anterior al mapa cotidiano. Frexulfe —playa amplia hacia el este, monumento natural— y Barayo —arenal y reserva hacia Valdés— abren la costa natural sin sustituir la ría como orilla diaria de la villa. Las casas de americanos —quien regresó de América con capital— dejaron fachadas y equipamientos en Navia y en Vega. Quien conozca Navia solo por el casco debe sumar Vega, Coaña y esas salidas de costa.",
  "Hoy, comprar «en Navia» sigue siendo elegir entre villa junto a la ría —autonomía a pie para mucha semana— o Puerto de Vega, con otra escala marinera y el comercio amplio a unos minutos en coche. El anuncio no distingue cuál de las dos.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar está cerca en Navia, pero vivir en la villa no es lo mismo que vivir en Puerto de Vega. En el casco el agua cotidiana es la ría: desembocadura del río, dársena, paseo y lámina abrigada frente a las calles. No es Frexulfe: es orilla de estuario, con marea, barcas y el ritmo de villa. La playa de Navia —junto al espigón de la desembocadura— queda a unos minutos según la vivienda: más cerca que Frexulfe, menos integrada que el paseo de ría. Frexulfe —arenal amplio declarado monumento natural— y Barayo —reserva hacia Valdés— son salidas de costa abierta, con más carácter de tarde elegida. En verano el agua suele rondar los 19–21 °C. Quien vive en el casco puede caminar la ría; quien vive en Vega tiene el puerto delante y la villa de servicios a un trayecto corto. Un martes de junio en la ría suele haber holgura; un domingo de agosto en Frexulfe el acceso se nota.",
  "Para caminar andando desde la villa, el frente de ría convierte el estuario en horizonte cercano: puentes, orilla y viento de desembocadura. En Vega, el paseo del muelle hace lo mismo a otra escala, con casas hacia el abrigo y menos comercio denso. La Senda Costa Naviega enlaza tramos de playa y núcleos cuando se quiere alargar el día sin salir del mapa comarcal; no sustituye el paseo corto de cada polo.",
  "Cuando el día pide ampliar sin ir muy lejos, el castro de Coaña aporta patrimonio; Tapia, puerto y surf; Luarca, villa blanca; Jarrio, hospital a unos diez minutos. Aquí el día a día pide elegir villa o Vega; el hospital, un trayecto corto a Coaña.",
  "En la villa la ría queda integrada en la rutina casi todos los días; en Vega el puerto es la orilla cotidiana y el comercio amplio queda en Navia. Esa diferencia describe mejor el concejo que contar playas. Jarrio cubre la sanidad hospitalaria cuando hace falta lo que el municipio no tiene dentro.",
] as const;

const CASA_NUEVO2 = [
  "En Navia hay dos rutinas distintas: villa junto a la ría, o Puerto de Vega. Un anuncio que solo diga «Navia» puede ocultar si la casa da a calles de servicios y paseo, o a un núcleo marinero con otra rutina.",
  "En la villa abundan pisos y casas con humedad de ría; en Vega, viviendas más ligadas al puerto. La fibra es Sí en la capa de datos; conviene comprobarla dirección a dirección. Hay poca obra nueva.",
  "El precio medio de referencia ronda 1.384 €/m². Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual un piso en la villa y una casa en Puerto de Vega.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra, la ría o el puerto de Vega, y la salida hacia Jarrio o el aeropuerto. En agosto, el aparcamiento en Las Barcas; en septiembre, Las Telayas en Vega; en noviembre, la luz y la humedad en la villa. Navia premia elegir bien el polo; castiga comprar solo la postal de Frexulfe.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "La villa de Navia y Puerto de Vega no son intercambiables. Una vivienda «en Navia» en el mapa puede significar comercio y ría a pie, o pueblo marinero con coche para el súper. Comparar solo el precio inventa una Navia que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el súper, la ría o el puerto de Vega, y Jarrio. En la villa, humedad y ruido de fiestas en agosto. En Vega, aparcamiento en Las Telayas. También la luz, la orientación, el aislamiento, la ventilación y señales de humedad; la fibra en esa dirección; y cómo se vive esa misma calle un domingo de agosto y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de villa práctica y de Puerto de Vega, pero lo que decide es el inmueble concreto. Un acceso sencillo, buen estado, luz y un sitio fácil de explicar —villa o Vega bien situada— amplían el abanico de compradores; una casa mal situada respecto a la rutina elegida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Navia",
  a2: "116.948 €",
  a3: "161.928 €",
  b2: "94.458 €",
  b3: "130.788 €",
  m2: "1.384 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Navia encaja si atrae una villa de servicios junto a su ría —comercio, centro de salud, cine, gestiones a pie— con el Hospital de Jarrio a unos diez minutos, o si se prefiere Puerto de Vega, el núcleo marinero del concejo a unos cinco minutos. Hay que elegir dónde se vive porque no se vive igual. En la villa gran parte del día a día cabe sin salir; Frexulfe y Barayo piden salida corta. En Vega gana el puerto; el comercio amplio queda en Navia. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia, humedad y niebla media.",
  "También encaja si se tolera el calendario —Las Barcas en agosto, Las Telayas en Vega en septiembre— eligiendo bien la calle y no solo la primera fila del muelle en fiestas.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Navia encaja peor si se busca la playa integrada al casco como en Tapia: aquí la ría es cotidiana; Frexulfe y Barayo son salidas, y la playa de Navia pide unos minutos según la vivienda. Tampoco si el hospital debe quedar dentro del municipio: Jarrio está cerca —unos diez minutos— pero no a pie en la villa. Los servicios cotidianos llegan a 6/10 —villa completa para el occidente, sin hospital propio— y eso importa porque lo hospitalario sigue pidiendo coche corto. Y si se confunde la postal de Puerto de Vega con la autonomía de la villa, suele haber sorpresa.",
  "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en Frexulfe sin probar un noviembre en la villa ni unas Telayas en Vega.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en la villa de Navia y otra en Puerto de Vega. Desde cada casa: una compra sencilla, el trayecto a la ría o al puerto, y la salida hacia Jarrio y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto en Las Barcas o en septiembre en Las Telayas (aparcamiento, gente) y un día cubierto de noviembre en la villa (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
] as const;

const FOTO_COMO_VILLA = {
  src: "/fotos/asturias-occidente/navia-villa.jpg",
  pie: "Navia desde la orilla opuesta: villa junto a la ría y monte detrás",
} as const;

const FOTO_COMO_RIA = {
  src: "/fotos/asturias-occidente/navia-ria.jpg",
  pie: "Desembocadura del Navia: espigón, playa y canal de la ría",
} as const;

const FOTO_HISTORIA_COANA = {
  src: "/fotos/asturias-occidente/navia-coana.jpg",
  pie: "Castro de Coaña: corros de piedra de la Edad del Hierro, a minutos de Navia",
} as const;

const FOTO_MAR_PLAYA = {
  src: "/fotos/asturias-occidente/navia-playa.jpg",
  pie: "Costa abierta del entorno de Navia: arenal en cala entre monte y ola",
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

export default function Nuevo2NaviaPage() {
  const ficha = municipioPorSlug("navia");
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
        <Foto src={FOTO_HISTORIA_COANA.src} pie={FOTO_HISTORIA_COANA.pie} />
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
        <Foto src={FOTO_MAR_PLAYA.src} pie={FOTO_MAR_PLAYA.pie} />
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="1.384 €/m²" />
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
