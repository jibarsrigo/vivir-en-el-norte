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
 * NUEVO2 — Ribamontán al Mar (Cantabria Oriental).
 * Eje: Somo / Loredo (playa larga, surf, básicos del municipio) vs Galizano / Langre / interior (casas bajas, más coche; Langre = acantilados).
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Cantabria Oriental es la costa de Trasmiera hasta Bizkaia: playas largas, marismas, villas de veraneo y Castro-Urdiales hacia Bilbao. El sol es de los más bajos de la tabla; la conexión con Bilbao y con Palma desde Castro, de las mejores.",
  "Ribamontán al Mar reúne unos cinco mil quinientos habitantes en pueblos dispersos —Somo, Loredo, Langre, Galizano y otros— frente a la bahía de Santander. No es Noja ni Laredo: aquí se gana costa de casas bajas y playa larga con la capital enfrente; a cambio, los servicios están repartidos y el coche pesa fuera de Somo y Loredo.",
  "Lo que más cambia la vida diaria es dónde queda la casa: en Somo o Loredo —arenal continuo, surf, más comercio del municipio, lancha a Santander cuando opera— o hacia Galizano, Langre u otros núcleos —casas bajas y prados, con la playa grande pidiendo trayecto—. En ambos sitios se vive en Ribamontán; no se vive igual.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Ribamontán al Mar no se siente una sola villa: es un municipio de pueblos. Somo —núcleo junto a la gran playa, con paseo, bares y fama de surf— y Loredo —continuación del mismo arenal hacia el este— concentran la relación más directa con el Cantábrico y buena parte de lo básico del día a día. Quien llega de fuera descubre enseguida que hay que elegir. En Somo se puede bajar a la arena, hacer una compra sencilla y, cuando la lancha opera, cruzar la bahía hacia Santander en unos treinta minutos de trayecto marítimo. Hacia Galizano —pueblo más residencial hacia el este— o Langre —costa de acantilados, no de toalla familiar— la postal es otra: casas bajas y silencio, con el súper y la playa larga pidiendo coche. En pocos minutos se pasa de una forma de vivir Ribamontán a otra.",
  "Un martes de noviembre, en Somo, se puede pasar por una tienda o una farmacia, caminar hacia el paseo y notar el viento de playa abierta. Los servicios llegan a 5/10 en nuestra escala: hay lo básico repartido entre pueblos, pero falta una villa completa con comercio denso; Santander queda a unos veinte o veinticinco minutos por carretera. Quien elige Somo o Loredo elige playa delante o cerca; lo que no elige es autonomía de ciudad. Quien elige Galizano o Langre gana calma y parcela; esa misma mañana la playa pide trayecto.",
  "Sin coche, Ribamontán se queda corto fuera de Somo. El coche enlaza pueblos, playas, Valdecilla y el aeropuerto. El hospital práctico es Valdecilla, en Santander, a unos quince o veinte minutos; Santa Clotilde, privado, queda en un radio similar. El aeropuerto de Santander ronda los quince minutos —vuelos a Palma casi todo el año—. La lancha desde Somo añade una alternativa atractiva cuando funciona; no sustituye el coche el resto de la semana. Ribamontán, a cambio, ofrece costa de casas bajas frente a la capital; no ofrece villa compacta a pie.",
  "En septiembre cambia el ritmo con las fiestas de la Virgen de Latas —hacia el 8 de septiembre, con misa en el santuario, carrozas, romería y, el domingo previo, procesión marítima hacia Santander—. En julio y agosto Somo y Loredo se llenan de tablas, toallas y coches. Meses después, en un martes húmedo, los pueblos recuperan calma: lo básico sigue, pero la playa se nota más vacía. No son dos Ribamontán distintos: son dos ritmos del mismo municipio a lo largo del año.",
  "También por eso la elección entre Somo-Loredo y Galizano-Langre cambia bastante la vida diaria. En Somo se ganan playa y más servicios del municipio; agosto se oye más. Hacia Galizano se gana silencio; la gran playa pide coche. Esa diferencia de pueblo acaba importando más que la media de precios del municipio."
] as const;

const CLIMA_NUEVO2 = [
  "Ribamontán supone un cambio climático claro respecto a Mallorca. Hay bastante menos sol, la lluvia aparece con mucha más frecuencia y la humedad se nota en casa —sobre todo en chalés expuestos al viento de playa—. La referencia local ronda 1.700 horas de sol al año, unos cuarenta días despejados y cerca de 1.150 mm de lluvia en unos ciento cincuenta días. Mallorca ronda 2.800 horas de sol. El viento es medio en el frente abierto; la niebla, baja. También aquí llovizna en julio y agosto. Un día puede empezar gris, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 20 °C: no pasas el calor de Baleares. En Somo el agua suele estar entre 19 y 21 °C; Langre ofrece acantilado y horizonte, no el mismo baño de arenal largo. Quien vive en Somo lo nota al abrir la ventana al Cantábrico; quien vive hacia Galizano, al sacar el coche bajo la lluvia. Un frente gris de noviembre cuenta más que un sábado de sol en Loredo."
] as const;

const VIVIR_NUEVO2 = [
  "De Mallorca a Ribamontán se llega a pueblos de casas bajas frente a Santander —Somo o Loredo, o Galizano más retirado—, no a una villa compacta. En Mallorca puede ser habitual pensar primero en kilómetros entre urbanizaciones; aquí unos pocos minutos separan la playa de un prado interior —o convierten la misma semana en trayectos si vives lejos de Somo—. Esa elección modifica decisiones tan sencillas como bajar a la playa o ir al súper.",
  "También cambia la relación entre coche, costa y hospital. En Somo se resuelve más a pie; fuera, casi todo pide salir. Valdecilla queda a unos quince o veinte minutos. Ir y volver a Mallorca suele pasar por Santander —casi todo el año—, con uno de los trayectos más cortos de la zona. Se oye cántabro y castellano; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. Agosto llena Somo de surf y toallas; Latas llena septiembre; en noviembre los pueblos siguen habitados aunque más quietos. Para alguien acostumbrado a Mallorca, la diferencia está en el sol y en la dispersión: aquí la logística a la capital es buena y el cielo, mucho más gris. Vivir aquí todo el año significa aceptar playa, coche y lluvia como partes de una misma vida."
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Ribamontán no nació como una villa con plaza única: nació como sucesión de pueblos de la antigua Junta de Ribamontán, en la Merindad de Trasmiera. Somo y Loredo fijaron el frente que hoy se ve desde Santander: un arenal continuo de varios kilómetros —con el Puntal de Somo, lengua de dunas que se adentra en la bahía— y un perfil de casas bajas y pinar. Lo que hoy parece destino de surf y veraneo fue antes costa de labranza y de paso frente al agua. Esa dispersión explica mejor el municipio que una postal de un solo casco.",
  "El santuario de Nuestra Señora de Latas —entre Somo y Loredo, documentado ya en 1068 y con edificio actual del siglo XVI— concentra la memoria religiosa compartida de ambos pueblos. Cada septiembre, hacia el día 8, la fiesta de Latas llena el entorno del templo con carrozas, misa y romería; el domingo previo hay procesión marítima hacia Santander. No es un adorno de folleto: es el calendario que todavía une a vecinos de playa cuando el verano ha bajado de intensidad. La lancha entre Somo y Santander —cuando opera— añade otra capa de esa misma relación con la bahía: cruzar el agua en unos treinta minutos, no solo mirarla.",
  "Hacia el este, Langre cuenta otra historia de costa: acantilados, peñas y una orilla más de precipicio que de sombrilla familiar. El monumento a Ismael Hoz recuerda el naufragio del «Elorrio» en 1960 y el carácter bravo de ese litoral. Galizano —nucleo más residencial, con tradición de cantería en la comarca— y otros pueblos del interior completan el mapa de casas bajas y prados sin el mismo comercio de Somo. Quien conozca Ribamontán solo por las tablas de Somo debe sumar Latas, Langre, Galizano y esa vida repartida entre pueblos.",
  "Hoy, comprar «en Ribamontán» sigue siendo elegir entre esas dos lecturas: Somo o Loredo con playa cerca y más movimiento, o pueblos más retirados con más coche para casi cada bajada a la arena. El anuncio municipal no distingue cuál de las dos."
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar está cerca en casi todo Ribamontán, pero no se vive igual desde cualquier casa. En Somo y Loredo el Cantábrico queda delante: arenal largo y abierto, oleaje de surf, paseo, dunas y, en verano, agua que suele rondar los 19–21 °C. No es una cala recogida: es playa grande con viento cuando el frente lo trae, y en agosto el aparcamiento forma parte del plan. Langre —unos minutos hacia el este— cambia de registro: orilla de acantilado y senda, más de mirar y caminar que de tender la toalla en familia. Galizano aporta una playa más pequeña, salida del mismo municipio, no la prolongación peatonal de Somo. Quien vive en Somo puede bajar a la arena; quien vive en Galizano o Langre convierte la gran playa en trayecto. Un martes de junio en Somo suele haber holgura; un domingo de agosto el acceso se llena.",
  "Para caminar andando desde Somo, el paseo junto a la arena y el pinar convierte la orilla en horizonte cotidiano: Santander al otro lado de la bahía cuando el cielo abre, el Puntal hacia el oeste, el oleaje a un lado. No es un boulevard de ciudad: es frente de playa con viento, tramos de arena y, a ratos, gente con tabla. Desde Loredo el mismo arenal continúa hacia el este sin cambiar de lógica. Desde Galizano ese paseo ya pide coche casi siempre; el día a pie se queda en el pueblo y en el jardín.",
  "Langre no es un apéndice de Somo: es costa alta —peñas, precipicio y senda— donde conviene calzado de verdad y no se espera la misma facilidad de aparcamiento que en un paseo urbano. Galizano, más pequeña, permite un baño más contenido. Cuando opera la lancha, Santander deja de ser solo un perfil al otro lado del agua y pasa a ser una salida de ciudad en media hora marítima. Aquí el día a día pide elegir Somo-Loredo o pueblo más retirado; Valdecilla queda a unos quince o veinte minutos por carretera.",
  "En Somo la playa queda a pocos minutos a pie casi todos los días; hacia Galizano el jardín queda delante y la playa pide coche. Esa diferencia describe mejor Ribamontán que contar cuántas playas tiene el municipio. Valdecilla cubre la sanidad hospitalaria cuando hace falta lo que aquí no hay."
] as const;

const CASA_NUEVO2 = [
  "Ribamontán no es una sola villa: es un municipio de pueblos. Vivir en Somo o Loredo —arenal continuo, más comercio del municipio, lancha a Santander cuando opera— no se parece a vivir en Galizano, Langre u otro núcleo más retirado, con casas bajas y coche para casi cada bajada a la arena. Un anuncio que solo diga «Ribamontán al Mar» puede ocultar esa diferencia.",
  "Abundan casas bajas y chalés; la humedad y el viento de costa abierta importan. La fibra es Parcial en la capa de datos; conviene comprobarla dirección a dirección. Hay poca obra nueva.",
  "El precio medio de referencia ronda 3.535 €/m². Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual un chalé en Somo y una casa en Galizano.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra, la playa, y la salida hacia Valdecilla o el aeropuerto. En agosto, el aparcamiento en Somo; en noviembre, la humedad y el viento. Ribamontán premia elegir bien el pueblo; castiga comprar solo la media municipal."
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "Somo-Loredo y Galizano-Langre no son intercambiables. Una vivienda «en Ribamontán» en el mapa puede significar playa a pie, o jardín con coche para bajar a la playa. Comparar solo el precio inventa un municipio que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el súper, Somo o Loredo, Langre, Valdecilla y el aeropuerto. En el frente, salitre, viento y aparcamiento en temporada. Hacia Galizano, dependencia del coche. También la luz, la orientación, el aislamiento, la ventilación y señales de humedad; la fibra en esa dirección; y cómo se vive esa misma calle un domingo de agosto y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de casas bajas cerca de la playa y de Santander, pero lo que decide es el inmueble concreto. Un acceso sencillo a playa o a servicios, buen estado y luz amplían el abanico; una casa mal situada respecto a la rutina elegida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Ribamontán al Mar",
  a2: "298.708 €",
  a3: "413.595 €",
  b2: "241.264 €",
  b3: "334.058 €",
  m2: "3.535 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Ribamontán encaja si atrae Somo o Loredo —playa larga, surf y más básicos del municipio— o si se prefiere Galizano, Langre u otro núcleo, con casas bajas y coche para bajar a la playa. Hay que elegir dónde se vive porque no se vive igual. En Somo se baja a la arena; Santander queda a unos veinte minutos. Hacia Galizano se gana silencio; Valdecilla ronda quince o veinte minutos y el aeropuerto, unos quince. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia y más coche que en una villa compacta.",
  "También encaja si se tolera el calendario —Latas en septiembre, playa llena en agosto— y se comprueba la fibra en la dirección exacta."
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Ribamontán encaja peor si se busca una villa compacta donde playa, comercio y servicios coincidan siempre a pie: aquí falta ese casco único —la vida está repartida en pueblos— y eso importa porque fuera de Somo casi cada cambio de sitio pide coche. Los servicios son 5/10: lo básico repartido, sin comercio de ciudad; Santander cubre lo grande a unos veinte minutos. Tampoco si se interpreta la lancha como transporte diario garantizado todo el año.",
  "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en Somo sin probar un noviembre con lluvia y coche."
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en Somo o Loredo y otra en Galizano o Langre. Desde cada casa: una compra sencilla, el trayecto a la playa, y la salida hacia Valdecilla y el aeropuerto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto en Somo (aparcamiento, gente) y un día cubierto de noviembre en el pueblo elegido (luz, humedad, trayectos). Y comprobar el estado de la vivienda y la fibra en la dirección exacta."
] as const;

const FOTO_COMO_A = {
  src: "/fotos/cantabria-oriental/ribamontan-somo.jpg",
  pie: "Somo: playa y surf en Ribamontán al Mar",
} as const;

const FOTO_COMO_B = {
  src: "/fotos/cantabria-oriental/ribamontan-casas.jpg",
  pie: "Casas bajas y prados en Ribamontán al Mar",
} as const;

const FOTO_HIST_A = {
  src: "/fotos/cantabria-oriental/ribamontan-loredo.jpg",
  pie: "Loredo, continuación del arenal hacia el este",
} as const;

const FOTO_HIST_B = {
  src: "/fotos/cantabria-oriental/ribamontan-langre.jpg",
  pie: "Acantilados de Langre",
} as const;

const FOTO_MAR_A = {
  src: "/fotos/cantabria-oriental/ribamontan-galizano.jpg",
  pie: "Playa de Galizano",
} as const;

const FOTO_MAR_B = {
  src: "/fotos/cantabria-oriental/ribamontan-playa.jpg",
  pie: "Costa abierta de Ribamontán al Mar",
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

export default function Nuevo2RibamontanAlMarPage() {
  const ficha = municipioPorSlug("ribamontan-al-mar");
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
        <Foto src={FOTO_HIST_B.src} pie={FOTO_HIST_B.pie} />
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
        <Foto src={FOTO_MAR_B.src} pie={FOTO_MAR_B.pie} />
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="3.535 €/m²" />
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
