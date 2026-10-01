import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
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
 * NUEVO2 — Vilagarcía de Arousa (O Salnés).
 * Texto: Lote_O_Salnes_REVISION_INTEGRAL_CERTIFICADA_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "O Salnés reúne villa histórica, viñedo, costa de ría, isla y ciudad en un espacio muy compacto alrededor de Arousa. Meaño ocupa el interior de viñedos y parroquias; Cambados combina casco histórico, vino y marisqueo; A Illa de Arousa vive rodeada de mar y depende de un único puente; Vilanova mezcla villa, pequeñas playas y parroquias de viñedo; Vilagarcía aporta hospital, tren, puerto y la mayor concentración de servicios. Las distancias son cortas, pero la posibilidad de vivir a pie, el acceso al baño y el peso del coche cambian mucho entre municipios.",
  "Vilagarcía es la ciudad pequeña de O Salnés. El municipio reúne Vilagarcía, Carril y Vilaxoán y concentra hospital, estación, comercio, colegios, puerto y servicios sanitarios.",
  "El centro permite cubrir una parte muy amplia del día a día a pie; Carril añade marisqueo y Cortegada; Vilaxoán conserva un núcleo más marinero. Las parroquias altas ganan terreno y vistas, pero pierden parte de la autonomía urbana.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Vilagarcía es el municipio de O Salnés donde más necesidades pueden resolverse sin salir del propio término municipal. Hospital, centros de salud, farmacias, supermercados, mercado, colegios, institutos, comercio, restauración, puerto y estación forman parte de una ciudad activa durante todo el año.",
  "En el centro, una vivienda bien situada puede permitir hacer a pie mercado, compra, farmacia, colegio, estación y paseo. Esa autonomía cotidiana es una diferencia real frente a las villas más pequeñas de la comarca.",
  "Carril ofrece otra relación con la ciudad. El puerto, los parques de cultivo de almeja y la silueta de Cortegada están delante de casa en muchas calles. El paseo hacia Vilagarcía permite mantener conexión peatonal con el centro, aunque el tiempo exacto depende de la dirección.",
  "Vilaxoán mantiene un núcleo más pequeño y marinero, con puerto propio. Vivir allí no equivale a vivir junto a la estación o el mercado central, aunque se siga dentro del mismo municipio.",
  "En las parroquias y laderas hacia el interior aparecen casas, terreno y vistas. Allí aumenta el coche y parte de la ventaja de Vilagarcía —organizar el día a día andando— se pierde. La dirección concreta importa tanto como el municipio.",
  "El Hospital do Salnés está dentro del término municipal y queda aproximadamente a cinco minutos desde el centro urbano. Para quien valore proximidad sanitaria, es una diferencia muy clara dentro de O Salnés.",
  "La estación conecta con Santiago, Vigo y otros destinos. Los aeropuertos de Vigo y Santiago quedan aproximadamente a cuarenta y cuarenta y cinco minutos por carretera. La programación hacia Palma debe comprobarse por temporada.",
  "En agosto, las fiestas de San Roque cambian el centro durante varios días. La Festa da Auga llena de gente y agua una zona acotada de la ciudad; el Combate Naval es un gran espectáculo pirotécnico en el puerto. En Carril, la Festa da Ameixa añade otra concentración de actividad. Una vivienda próxima a esas zonas debe conocerse también durante las fiestas.",
] as const;

const CLIMA_NUEVO2 = [
  "Vilagarcía tiene un verano fresco, con una media cercana a 19,5 °C, y un invierno alrededor de 10 °C.",
  "La referencia climática utilizada para el municipio ronda 1.450 mm de lluvia al año, algo más que en otros puntos próximos de O Salnés. El cambio respecto a Mallorca se nota en la persistencia de humedad y nubes durante parte del otoño e invierno.",
  "La ría reduce la exposición al oleaje atlántico, pero no evita que los edificios antiguos puedan ser húmedos. Orientación, ventilación y aislamiento siguen siendo decisivos.",
  "En verano el calor sostenido tiene mucho menos peso que en Mallorca. La playa de Compostela y el paseo hacia Carril pueden utilizarse durante muchas horas del día, aunque el agua sea claramente más fría que el Mediterráneo.",
  "En el centro importa también el efecto urbano: un piso alto y soleado puede comportarse de forma muy distinta de una planta baja en una calle con poca ventilación.",
] as const;

const VIVIR_NUEVO2 = [
  "La principal diferencia residencial es logística. Vilagarcía permite vivir junto a la ría sin renunciar a hospital, tren, institutos, mercado y una oferta comercial amplia dentro del mismo municipio.",
  "La vida de ciudad continúa en invierno. Bibliotecas, deporte, comercio y servicios mantienen actividad cuando baja el turismo.",
  "El mar está presente, pero no de la misma manera que en A Illa. Compostela es playa urbana de ría; Carril mezcla paseo, puerto y marisqueo; para océano abierto hay que desplazarse hacia A Lanzada u otros arenales.",
  "La ciudad tiene también una cara portuaria. Algunas calles reciben tráfico, actividad laboral o ruido relacionado con el puerto. Conviene comprobar una vivienda en un día laborable, no solo un domingo.",
  "Para quien venga de Mallorca y no quiera depender demasiado del coche, Vilagarcía ofrece la transición más urbana de O Salnés. La contrapartida es una trama menos homogénea y menos “postal” que Cambados o A Illa.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Vilagarcía de Arousa no nació como una sola villa cerrada: creció soldando núcleos distintos alrededor de la ría. El centro comercial y portuario, Carril con su tradición de almeja y tren, y Vilaxoán con puerto marinero, forman hoy una misma ciudad, pero cada uno conserva una historia y un ritmo distintos. Quien llega pensando en «Vilagarcía» como un bloque homogéneo se equivoca de mapa: comprar o vivir aquí implica decidir qué núcleo se elige y qué distancia queda hasta el paseo, el hospital o el tren.",
  "Carril pesó en el desarrollo moderno más de lo que sugiere su escala. La línea Santiago–Carril, inaugurada en 1873, fue la primera ferroviaria de Galicia y terminaba junto al puerto: unió ría, comercio y movilidad en un momento en que pocas villas atlánticas tenían ese vínculo. Esa herencia se lee todavía en el perfil productivo de la orilla —parques de cultivo, dársena, movimiento de trabajo— y en la idea de que Vilagarcía no es solo veraneo: es ciudad de puerto y de conexión. Quien conozca solo Compostela en agosto debe sumar esa capa de oficio.",
  "Frente a Carril, la isla de Cortegada —integrada en el Parque Nacional das Illas Atlánticas— añade una capa de paisaje y de salida que no se confunde con el paseo urbano. No es un barrio: se alcanza con acceso autorizado y se vive como excursion breve de bosque y orilla, no como prolongación espontánea del día a pie. En el mismo municipio, Vilaxoán mantiene puerto y vivienda marinera con otra escala, más pegada al oficio cotidiano y menos a la densidad comercial del centro.",
  "En el casco, el Pazo de Vista Alegre —antigua casa señorial— y el convento forman un conjunto histórico dentro de una ciudad que creció por comercio, puerto y ferrocarril. No son un museo aislado al margen de la vida: quedan dentro del tejido donde se hace la compra, se espera el tren o se baja al paseo. Esa convivencia de patrimonio y ciudad de servicios explica por qué Vilagarcía funciona como capital práctica de O Salnés para mucha gente de los municipios vecinos.",
  "La Festa da Auga, nacida en 1984 dentro de las fiestas de San Roque, muestra que la identidad local también se construye en el calendario reciente: calles mojadas, multitud y un ritmo que en esos días cambia aparcamiento, ruido y acceso al centro. No sustituye la historia de Carril o Vista Alegre; la completa. Hoy, leer Vilagarcía bien es leer a la vez ciudad de apoyo, núcleos marineros y una temporada que se oye en agosto sin convertir el resto del año en silencio.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "En Vilagarcía el agua está cerca, pero no se vive igual desde el centro que desde Carril o Vilaxoán. La playa de Compostela es el baño urbano más evidente: arena integrada en el paseo, usable andando desde buena parte del casco, con el ritmo de ciudad de ría. En verano el agua suele rondar los 18–21 °C. Un martes de junio suele haber holgura; un domingo de agosto el frente se nota en gente, coches y sombra disputada. Quien vive hacia el interior gana quietud y convierte Compostela en trayecto corto, no en puerta de casa.",
  "Hacia Carril el paseo continúa junto a la ría y el paisaje cambia de registro: puerto, parques marisqueros y la silueta de Cortegada sustituyen parte de la imagen de playa abierta. Allí el agua cotidiana es más de trabajo y de marea que de arena de veraneo: orilla productiva y de estuario, con olores y horarios de cultivo. Quien elige Carril elige esa escena; quien busca solo arena de Compostela se equivoca de microzona.",
  "A Concha y otros tramos del frente urbano permiten caminar junto al agua sin organizar una salida larga. La marea modifica cuánta arena queda visible y cómo se siente el paseo: a marea baja el estuario enseña otra orilla; a marea alta el frente se estrecha y gana brisa. No es un boulevard de ciudad enorme, pero sí una rutina posible casi todos los días si la vivienda queda bien situada respecto al paseo.",
  "Cortegada pide barco autorizado y se vive como salida concreta: senderos de bosque insular, orilla distinta y un tiempo dedicado que no se improvisa entre la compra y el café. No sustituye el paseo de Compostela; lo amplía cuando se quiere otra escala de paisaje dentro del mismo municipio. Confundir isla y playa urbana es el error habitual del visitante de fin de semana.",
  "Cuando el día pide ampliar el mapa, el Monte Xiabre aporta pistas, bosque y vistas sobre la ría; el mirador de Lobeira, ya en Vilanova, añade otra mirada cercana. Ambos piden desplazarse y más tiempo que bajar a Compostela. Para océano abierto, A Lanzada exige coche: Vilagarcía ofrece ría, playa urbana y paseo en la rutina; el Atlántico queda como salida elegida, no como horizonte de cada mañana.",
  "En el centro y Compostela el agua puede entrar en la semana casi todos los días; en Carril manda la ría productiva; en Vilaxoán, el puerto marinero. Esa diferencia describe mejor Vilagarcía que contar playas. El hospital y buena parte de los servicios densos están en la propia ciudad: aquí el dilema no es «sin servicios», sino elegir qué orilla se quiere tener cerca de casa.",
] as const;

const CASA_NUEVO2 = [
  "Comprar en Vilagarcía exige decidir cuánto se valora la autonomía urbana frente a vivienda con más espacio. Centro, Carril, Vilaxoán y parroquias altas ofrecen productos y semanas diferentes.",
  "En el centro predominan pisos de distintas décadas y existe más obra nueva que en muchas villas próximas. Un piso bien situado puede permitir vivir con mercado, estación, comercio, salud y paseo a pie. Conviene revisar ascensor, garaje, orientación, aislamiento acústico y estado de fachadas y cubiertas comunitarias.",
  "La calle concreta pesa mucho. Cerca del puerto o de ejes de tráfico, el ruido puede variar entre fachadas y alturas. Una terraza con vistas no compensa necesariamente una exposición continua a tráfico o actividad laboral si se busca silencio.",
  "Carril mezcla pisos, casas y vivienda marinera. Allí el paseo y la ría pueden formar parte muy directa de la rutina. Conviene revisar humedad, aparcamiento y accesos durante momentos de gran afluencia, además de la distancia real hasta estación, hospital o centro.",
  "Vilaxoán ofrece un entorno más pequeño y marinero. Puede interesar a quien quiera seguir dentro de Vilagarcía sin vivir en el centro, pero hay que comprobar qué servicios quedan a pie y cuántos recados vuelven a requerir coche.",
  "En las parroquias altas aparecen casas con terreno y vistas. Allí importan cubierta, drenaje, acceso, pendiente y mantenimiento de parcela. También hay que medir el tiempo real hasta hospital, estación y compra, porque la ventaja municipal deja de significar autonomía peatonal.",
  "El mercado tiene una base residencial amplia por hospital, tren, comercio, empleo y servicios. En reventa suelen ayudar ascensor, luz, accesibilidad, garaje o aparcamiento razonable y una ubicación que permita organizar el día a día con facilidad.",
  "Precio medio municipal utilizado: 1.779 €/m².",
] as const;

const CASA_ADVERTENCIA_MICROZONA = [
  "El centro maximiza servicios y tren; Carril acerca marisqueo, paseo y Cortegada; Vilaxoán conserva un núcleo marinero; las parroquias altas ganan casa y terreno a cambio de coche. El nombre municipal por sí solo no describe la rutina.",
] as const;

const CASA_MERCADO_REVENTA = [
  "Vilagarcía tiene una base residencial más amplia que las villas pequeñas de la zona. Una vivienda caminable, luminosa y accesible puede atraer a un público diverso. En Carril o Vilaxoán estar junto a la ría añade atractivo; en parroquias pesan más acceso, estado y mantenimiento.",
] as const;

const ENCAJA_SI_NUEVO2 = [
  "Hospital, tren y vida sin coche pesan más que vivir en una villa pequeña o en una isla.",
  "Se quiere mantener playa de ría y paseo dentro de la rutina sin renunciar a comercio, institutos, mercado y servicios urbanos.",
  "Se necesita una ciudad activa todo el año y se acepta una trama urbana menos uniforme que la de Cambados.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Se busca un casco histórico muy compacto y silencioso.",
  "El puerto, el tráfico urbano o la actividad de agosto son inconvenientes difíciles de aceptar.",
  "El objetivo principal es una gran playa atlántica o una vida insular rodeada de calas.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Hacer a pie desde la vivienda mercado, estación, salud y paseo.",
  "Escuchar la calle con ventanas abiertas en un día laborable.",
  "Volver durante San Roque si se compra en el centro.",
  "Recorrer Compostela y Carril para comprobar qué relación con la ría entraría realmente en la semana.",
  "Medir trayectos reales desde Carril, Vilaxoán o parroquias altas hasta hospital y estación.",
  "Revisar aislamiento acústico y estado comunitario en pisos.",
] as const;

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m².";

const CASA_FILA_PRECIOS = {
  municipio: "Vilagarcía de Arousa",
  a2: "150.326 €",
  a3: "208.143 €",
  b2: "121.417 €",
  b3: "168.116 €",
  m2: "1.779 €/m²",
} as const;

const COMPARA_HREF_NUEVO2 = "/compara/?vs=vilagarcia-de-arousa,meano,cambados,a-illa-de-arousa,vilanova-de-arousa";

const FOTO_COMO_1 = {
  src: "/fotos/o-salnes/vilagarcia-paseo.jpg",
  pie: "Vilagarcía y Carril: ciudad, puerto y ría de Arousa",
} as const;

const FOTO_COMO_2 = {
  src: "/fotos/o-salnes/vilagarcia-compostela.jpg",
  pie: "Compostela, playa urbana unida al centro por paseo",
} as const;

const FOTO_HIST_1 = {
  src: "/fotos/o-salnes/vilagarcia-vista-alegre.jpg",
  pie: "Vista Alegre, pazo y convento dentro de la ciudad",
} as const;

const FOTO_HIST_2 = {
  src: "/fotos/o-salnes/vilagarcia-estacion.jpg",
  pie: "El tren mantiene la ventaja histórica de Vilagarcía",
} as const;

const FOTO_MAR_1 = {
  src: "/fotos/o-salnes/vilagarcia-carril.jpg",
  pie: "Carril: puerto, marisqueo y Cortegada al fondo",
} as const;

const FOTO_MAR_2 = {
  src: "/fotos/o-salnes/vilagarcia-cortegada.jpg",
  pie: "Cortegada, isla de laurel frente a Carril",
} as const;

const CREDITO_FOTOS = "Wikimedia Commons (licencias indicadas en los archivos de origen).";


function FilaCasaNuevo2({
  etiqueta,
  cuerpo,
}: {
  etiqueta: string;
  cuerpo: readonly string[];
}) {
  return (
    <div className="border-b border-[var(--linea)] py-3 last:border-b-0">
      <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--tinta-suave)]">
        {etiqueta}
      </p>
      {cuerpo.map((p) => (
        <p key={p.slice(0, 64)} className="mt-1.5 text-[15px] leading-relaxed text-[var(--tinta)]">
          {p}
        </p>
      ))}
    </div>
  );
}

function ConNegritas({ texto, fragmentos }: { texto: string; fragmentos: string[] }) {
  const nodos: ReactNode[] = [];
  let resto = texto;
  fragmentos.forEach((fragmento, idx) => {
    const i = resto.indexOf(fragmento);
    if (i === -1) {
      throw new Error(`Negrita: fragmento no encontrado — ${fragmento.slice(0, 48)}`);
    }
    nodos.push(resto.slice(0, i));
    nodos.push(<strong key={`${idx}-${fragmento.slice(0, 24)}`}>{fragmento}</strong>);
    resto = resto.slice(i + fragmento.length);
  });
  nodos.push(resto);
  return <>{nodos}</>;
}

export default function Nuevo2VilagarciaDeArousaPage() {
  const ficha = municipioPorSlug("vilagarcia-de-arousa");
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
      <CabeceraFichaMunicipio
        ficha={ficha}
        zonaId={z.id}
        zonaNombre={z.zona}
        comparaHref={COMPARA_HREF_NUEVO2}
      />

      <BloqueZonaFicha zonaId={z.id} nombreZona={z.zona} resumen={RESUMEN_ZONA_NUEVO2[0]} />
      {RESUMEN_ZONA_NUEVO2.slice(1).map((p) => (
        <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed text-[var(--tinta)]">
          {p}
        </p>
      ))}

      <MapaMunicipioFicha ficha={ficha} capasPortada={Boolean(ficha.mapa)} />

      <DesplegableNuevo2 titulo="Cómo se vive" varianteTarjetaV1>
        {COMO_SE_VIVE_NUEVO2.map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_COMO_1.src} pie={FOTO_COMO_1.pie} />
        <Foto src={FOTO_COMO_2.src} pie={FOTO_COMO_2.pie} />
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Frente a Mallorca" varianteTarjetaV1>
        <h3 className="mt-1 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Clima
        </h3>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas
            texto={CLIMA_NUEVO2[0]}
            fragmentos={["19,5 °C", "10 °C"]}
          />
        </p>
        {CLIMA_NUEVO2.slice(1).map((p) => (
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
        {DE_DONDE_VIENE_NUEVO2.slice(0, 1).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_HIST_1.src} pie={FOTO_HIST_1.pie} />
        {DE_DONDE_VIENE_NUEVO2.slice(1, 3).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_HIST_2.src} pie={FOTO_HIST_2.pie} />
        {DE_DONDE_VIENE_NUEVO2.slice(3).map((p) => (
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
        <Foto src={FOTO_MAR_1.src} pie={FOTO_MAR_1.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(2, 4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_MAR_2.src} pie={FOTO_MAR_2.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Casa" varianteTarjetaV1>
        {CASA_NUEVO2.slice(0, 7).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={CASA_NUEVO2[7]} fragmentos={["1.779 €/m²"]} />
        </p>
        {CASA_NUEVO2.slice(8).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}

        <EnlaceIdealista ambito="municipio" slug={ficha.slug} nombre={ficha.municipio} />

        <div className="mt-6 pt-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--tinta-suave)]">
            Precio y bandas
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
        <FilaCasaNuevo2 etiqueta="Advertencia de microzona" cuerpo={CASA_ADVERTENCIA_MICROZONA} />
        <FilaCasaNuevo2 etiqueta="Mercado y reventa" cuerpo={CASA_MERCADO_REVENTA} />
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
