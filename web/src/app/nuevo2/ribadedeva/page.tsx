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
 * NUEVO2 — Ribadedeva (Asturias Oriente).
 * Eje: Colombres (núcleo, casonas indianas, Archivo/Quinta Guadalupe, servicios mínimos)
 * vs costa / La Franca (playa entre acantilados; coche desde Colombres).
 * Bustio/Tina Mayor = ría frontera; Unquera/Llanes = apoyo servicios.
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Asturias Oriente es la costa donde la montaña cae al mar: Villaviciosa, Colunga, Ribadesella, Llanes y Ribadedeva. Rías, playas entre acantilados, Picos a media hora y el clima más húmedo de la tabla. Hospital en Arriondas, Cabueñes o Sierrallana según municipio.",
  "Ribadedeva es concejo de unos mil ochocientos habitantes, con capital en Colombres —núcleo de casonas indianas y Archivo de Indianos—, frontera con Cantabria y playa en La Franca. No es Llanes ni Ribadesella: aquí se gana escala pequeña, patrimonio indiano y Santander a unos cincuenta y cinco minutos; a cambio, el comercio grande y la playa de baño no quedan bajo la ventana del núcleo.",
  "Lo que más cambia la vida diaria es dónde queda la casa: en Colombres —básicos, Quinta Guadalupe, gestiones mínimas— o hacia la costa y La Franca —playa entre acantilados, con coche para la semana del núcleo—. Bustio y la ría de Tina Mayor añaden la orilla de frontera. En todos esos sitios se vive en Ribadedeva; no se vive igual.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Ribadedeva es un concejo pequeño: unas mil ochocientas personas repartidas entre varios núcleos. La capital es Colombres, un pueblo de calles con casonas de colores —casas grandes que levantaron quienes emigraron a América y volvieron con dinero— y con la Quinta Guadalupe, el palacete donde está el Archivo de Indianos y el Museo de la Emigración. Ahí hay farmacia, tiendas pequeñas y el centro de salud, pero no un comercio denso de villa. Quien llega de fuera descubre enseguida que hay que elegir dónde vivir. En Colombres se puede hacer un recado corto y pasear entre esas fachadas; la playa no queda debajo de la ventana. Hacia La Franca —playa de arena entre acantilados, a unos diez minutos en coche— la vida es otra: mar abierto, más gente en verano, y el pueblo capital queda hacia el interior. Bustio —pueblo junto a la ría de Tina Mayor, donde el río Deva desemboca y Asturias toca Cantabria— ofrece orilla de agua quieta, barcas y paseo; no es una playa de arena donde tender la toalla. En pocos minutos se pasa de una forma de vivir Ribadedeva a otra.",
  "Un martes de noviembre en Colombres —ese pueblo capital— se puede comprar algo pequeño, pasar por el centro de salud —médico de cabecera y consultas del día a día, no el hospital— y caminar hasta la Quinta Guadalupe. Los servicios llegan a 3/10 en nuestra escala: hay lo básico en Colombres y un poco más en Unquera —pueblo de Cantabria a unos cinco minutos, con algo de comercio de apoyo—. No llegan a más porque falta un súper amplio, más tiendas y gestiones de villa; Llanes queda a unos quince minutos. Ese tres no describe un pueblo vacío: describe un municipio donde la semana mínima se sostiene, pero la semana completa pide coche. Quien elige Colombres elige calles de casonas e identidad indiana; lo que no elige es playa a pie ni autonomía de villa. Quien elige La Franca gana el arenal y el acantilado; esa misma mañana el súper serio pide Unquera o Llanes.",
  "Sin coche, Ribadedeva no cubre bien la semana. El coche enlaza Colombres con La Franca, con Unquera, con Llanes y con el hospital. El hospital práctico es Sierrallana, en Torrelavega, a unos cuarenta y cinco minutos; el privado de Jove, en Gijón, queda hacia los cincuenta y cinco. El aeropuerto de Santander ronda los cincuenta y cinco minutos —vuelos a Palma casi todo el año, la mejor conexión de la zona—; el de Asturias queda mucho más lejos. A cambio, aquí hay frontera, patrimonio indiano y playa de salida; no hay vida de villa completa.",
  "En agosto cambia el ritmo. Las fiestas de la Asunción y Sacramental en Colombres —día grande hacia el sábado siguiente al 15 de agosto— llenan el pueblo de verbena, gente y ruido. La Franca se llena de toallas y coches. Meses después, en un martes húmedo, Colombres recupera calma: lo básico sigue abierto, pero la costa se nota más vacía. No son dos pueblos distintos: son dos ritmos del mismo concejo a lo largo del año.",
  "También por eso la elección entre Colombres y la costa cambia bastante la vida diaria. En Colombres se ganan las casonas, el Archivo y los recados mínimos a pie; ir a la playa pide coche. Hacia La Franca se gana el arenal entre acantilados; agosto se nota más, y el comercio denso queda en Unquera o en Llanes. Esa diferencia de sitio acaba importando más que la postal de Indianos vista en un mapa.",
] as const;

const CLIMA_NUEVO2 = [
  "Ribadedeva supone un cambio climático claro respecto a Mallorca. Hay bastante menos sol, la lluvia aparece con mucha más frecuencia y la humedad se nota en casa —sobre todo en casonas antiguas—. La referencia local ronda 1.700 horas de sol al año —de las más bajas de la tabla—, unos cuarenta días despejados y cerca de 1.300 mm de lluvia en unos ciento cincuenta y cinco días. Mallorca ronda 2.800 horas de sol. La niebla es baja; el viento, bajo. También aquí llovizna en julio y agosto. Un día puede empezar gris, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 19,5 °C: no pasas el calor de Baleares. En La Franca el agua suele estar entre 19 y 21 °C; Tina Mayor ofrece lámina de ría para pasear, no el mismo baño de arenal abierto. Quien vive en Colombres lo nota al salir a la calle húmeda; quien vive hacia la costa, al abrir la ventana al Cantábrico. Un frente gris de noviembre cuenta más que un sábado de sol en La Franca.",
] as const;

const VIVIR_NUEVO2 = [
  "De Mallorca a Ribadedeva se llega a un núcleo pequeño con casonas indianas —o a una casa hacia La Franca—, no a una villa completa ni a una ciudad. En Mallorca puede ser habitual pensar primero en kilómetros; aquí unos diez minutos separan Colombres de La Franca —o convierten la misma semana en trayectos si vives en la costa y necesitas el súper—. Esa elección modifica decisiones tan sencillas como salir a comprar, ir a la playa o dejar el coche.",
  "También cambia la relación entre coche, frontera y hospital. En Colombres se resuelve poco a pie; casi todo lo demás pide salir. Sierrallana queda a unos cuarenta y cinco minutos hacia Torrelavega. Unquera y Llanes cubren lo que el municipio no tiene. Ir y volver a Mallorca suele pasar por Santander —casi todo el año— mejor que por Asturias. Se oye asturiano y castellano; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. Agosto llena la Asunción en Colombres y las toallas en La Franca; en noviembre el núcleo sigue abierto aunque más quieto. Para alguien acostumbrado a Mallorca, la diferencia está en la escala: el cambio se concentra en un concejo pequeño de frontera, no en una capital. Vivir aquí todo el año significa aceptar esas dos caras —núcleo indiano cotidiano y playa con coche— como partes de una misma vida.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Ribadedeva se entiende mejor mirando Colombres, la capital del concejo. Entre finales del XIX y los años treinta del XX muchos vecinos emigraron a América —sobre todo a México—; al volver, construyeron las casonas de colores que todavía organizan las calles. Manuel Ibáñez, conde de Ribadedeva, impulsó cementerio, aguas, plaza y consistorio; la Quinta Guadalupe —palacete que hoy aloja el Archivo de Indianos y el Museo de la Emigración— no es un museo al margen: forma parte del paseo cotidiano. Quien compra aquí no compra solo un muro antiguo: compra un pueblo pequeño organizado alrededor de esa herencia, con servicios mínimos y sin playa debajo de la ventana.",
  "La frontera añade otra historia del mismo concejo. Bustio mira a la ría de Tina Mayor —desembocadura del río Deva compartida con Cantabria— y Unquera queda a un paso. Ribadedeva no nació como destino de playa compacta; La Franca —arenal entre acantilados hacia el oeste, en la desembocadura del río Cabra, límite con Llanes— llegó como lugar de baño (en el XIX hubo incluso balneario costeado por indianos). Vivir en Colombres y vivir cerca de La Franca no es lo mismo: en uno se resuelve lo mínimo a pie y la playa pide trayecto; en el otro se gana orilla y se pierde el pueblo de casonas como centro de cada día.",
  "Cerca de la costa está la cueva del Pindal: cavidad con pinturas paleolíticas que se visita con guía. Hacia el interior, a unos veinte minutos, el Desfiladero de La Hermida —garganta del río Deva— abre el camino hacia los Picos de Europa. Son salidas de un día, no autonomía de villa: el comercio grande pide Llanes o Unquera; el hospital, Sierrallana. Quien conozca Ribadedeva solo por la playa debe contar también con las casonas, la ría de frontera y esa salida de desfiladero.",
  "Hoy, comprar «en Ribadedeva» sigue siendo elegir entre pueblo de casonas con básicos mínimos o costa con más presión de verano. El anuncio no dice cuál de las dos.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "En Colombres el agua cotidiana no es playa: el pueblo queda un poco hacia el interior, con casonas y el Cantábrico cerca en el mapa pero lejos de la puerta. La Franca —arenal entre acantilados, a unos diez minutos— es la playa de baño del concejo: mar abierto, toallas en verano, coche casi siempre y aparcamiento que en agosto forma parte del plan; frente a ella, el Castrón de Santiuste. Bustio y Tina Mayor ofrecen la ría de frontera: agua abrigada, barcas y orilla compartida con Cantabria; se camina y se mira, no se planta la sombrilla como en La Franca. En verano el agua suele rondar los 18–20 °C. Quien vive en Colombres convierte La Franca en salida; quien vive cerca de la playa gana orilla y pierde el pueblo capital a pie. Un martes de junio en La Franca suele haber holgura; un domingo de agosto el acceso se llena.",
  "Para caminar andando desde Colombres, las calles de casonas, la plaza y el entorno de la Quinta Guadalupe convierten el patrimonio en horizonte cercano. No es un paseo largo de villa grande; es un pueblo pequeño con piedra y color delante. Hacia Tina Mayor el paseo cambia: ría, frontera y otra humedad. Hacia La Franca hace falta coche casi siempre.",
  "El Pindal aporta la cueva con visita guiada; La Franca, el baño entre acantilados; el Desfiladero de La Hermida, la garganta del Deva hacia los Picos a unos veinte minutos; Llanes, villa y comercio; Unquera, apoyo fronterizo; Santander, aeropuerto. Aquí el día a día pide elegir Colombres o costa; el hospital, salir a Sierrallana.",
  "En Colombres el patrimonio queda a pie casi todos los días; hacia La Franca la playa queda delante y el comercio denso queda fuera. Esa diferencia describe mejor Ribadedeva que contar una sola playa. Sierrallana cubre la sanidad hospitalaria cuando hace falta lo que aquí no hay.",
] as const;

const CASA_NUEVO2 = [
  "En Ribadedeva Colombres y la costa hacia La Franca piden rutinas distintas. Un anuncio que solo diga «Ribadedeva» puede ocultar si la casa da a calles de casonas caminables, o a un acceso de playa con coche para cada recado.",
  "En Colombres abundan casonas y viviendas con humedad de clima cantábrico; hacia la costa, tipologías más ligadas al veraneo. La fibra es Parcial en la capa de datos; conviene comprobarla dirección a dirección. No hay obra nueva.",
  "El precio medio de referencia ronda 1.700 €/m². Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual una casona en Colombres y una casa hacia La Franca.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra mínima, La Franca o Tina Mayor, Unquera o Llanes, y la salida hacia Sierrallana o Santander. En agosto, el aparcamiento en La Franca; en noviembre, la humedad en la casona. Ribadedeva premia elegir bien el polo; castiga comprar solo la postal de Indianos.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "Colombres y la costa no son intercambiables. Una vivienda «en Ribadedeva» en el mapa puede significar casonas y básicos a pie sin playa debajo, o La Franca cerca con coche para el súper. Comparar solo el precio inventa un Ribadedeva que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta la compra mínima, La Franca o Bustio, Unquera o Llanes, y Sierrallana. En Colombres, humedad, reforma y mantenimiento de casona. Hacia la costa, aparcamiento en temporada y salitre. También la luz, la orientación, el aislamiento, la ventilación y señales de humedad; la fibra en esa dirección; y cómo se vive esa misma calle un domingo de agosto y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de vivienda con identidad indiana y de casa cerca de La Franca, pero el mercado es estrecho. Un acceso sencillo, buen estado, luz y un sitio fácil de explicar —núcleo o costa bien situada— amplían el abanico de compradores; una casa mal situada respecto a la rutina elegida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Ribadedeva",
  a2: "143.650 €",
  a3: "198.900 €",
  b2: "116.025 €",
  b3: "160.650 €",
  m2: "1.700 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Ribadedeva encaja si atrae un núcleo pequeño con casonas indianas y Archivo delante —básicos y centro de salud en Colombres— o si se prefiere vivir hacia La Franca, con playa entre acantilados y coche para la semana del núcleo y de Llanes. Hay que elegir dónde se vive porque no se vive igual. En Colombres se resuelve poco sin salir; la playa pide unos diez minutos. Hacia La Franca ganan el arenal y el acantilado; el comercio grande queda en Llanes a unos quince minutos o en Unquera. Sierrallana queda a unos cuarenta y cinco minutos; Santander, a unos cincuenta y cinco. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia y humedad en casa.",
  "También encaja si se tolera el calendario —Asunción y Sacramental en agosto, La Franca en verano— eligiendo bien la calle y no solo la primera fila del acceso a la playa.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Ribadedeva encaja peor si la playa de baño debe quedar a pie desde el pueblo capital: aquí falta —Colombres queda hacia el interior; La Franca pide coche— y eso importa porque quien confunde las casonas indianas con arena delante suele llevarse sorpresa. Tampoco si el hospital debe quedar cerca: Sierrallana está a unos cuarenta y cinco minutos. Los servicios cotidianos son bajos —3/10: básicos en Colombres y Unquera, sin comercio grande; Llanes a quince minutos— y ese tres no sustituye una villa completa ni la cabecera sanitaria de Torrelavega. Falta súper amplio, más tiendas y gestiones de escala mayor: hay que sacar el coche hacia Unquera o Llanes, y eso pesa cada semana.",
  "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en La Franca sin probar un noviembre en Colombres.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en Colombres y otra hacia La Franca o Bustio. Desde cada casa: una compra sencilla, el trayecto a la playa o a la ría, y la salida hacia Llanes, Sierrallana y Santander en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto en La Franca (aparcamiento, gente) y un día cubierto de noviembre en Colombres (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda —sobre todo en casona— y la fibra en la dirección exacta.",
] as const;

const FOTO_COMO_COLOMBRES = {
  src: "/fotos/asturias-oriente/ribadedeva-colombres.jpg",
  pie: "Colombres, capital de Ribadedeva: calles y casonas indianas",
} as const;

const FOTO_COMO_GUADALUPE = {
  src: "/fotos/asturias-oriente/ribadedeva-guadalupe.jpg",
  pie: "Quinta Guadalupe: Archivo de Indianos en Colombres",
} as const;

const FOTO_HISTORIA_PINDAL = {
  src: "/fotos/asturias-oriente/ribadedeva-pindal.jpg",
  pie: "Cueva del Pindal: cavidad paleolítica junto a la costa",
} as const;

const FOTO_HISTORIA_HERMIDA = {
  src: "/fotos/asturias-oriente/ribadedeva-hermida.jpg",
  pie: "Desfiladero de La Hermida: garganta del Deva hacia los Picos",
} as const;

const FOTO_MAR_FRANCA = {
  src: "/fotos/asturias-oriente/ribadedeva-franca.jpg",
  pie: "Playa de La Franca: arenal entre acantilados",
} as const;

const FOTO_MAR_FRONTERA = {
  src: "/fotos/asturias-oriente/ribadedeva-frontera.jpg",
  pie: "Tina Mayor: ría frontera Asturias–Cantabria en Bustio",
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

export default function Nuevo2RibadedevaPage() {
  const ficha = municipioPorSlug("ribadedeva");
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
        <Foto src={FOTO_COMO_COLOMBRES.src} pie={FOTO_COMO_COLOMBRES.pie} />
        <Foto src={FOTO_COMO_GUADALUPE.src} pie={FOTO_COMO_GUADALUPE.pie} />
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
        <Foto src={FOTO_HISTORIA_PINDAL.src} pie={FOTO_HISTORIA_PINDAL.pie} />
        <Foto src={FOTO_HISTORIA_HERMIDA.src} pie={FOTO_HISTORIA_HERMIDA.pie} />
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
        <Foto src={FOTO_MAR_FRANCA.src} pie={FOTO_MAR_FRANCA.pie} />
        <Foto src={FOTO_MAR_FRONTERA.src} pie={FOTO_MAR_FRONTERA.pie} />
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="1.700 €/m²" />
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
