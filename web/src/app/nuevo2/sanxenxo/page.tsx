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
 * NUEVO2 — Sanxenxo (Pontevedra e Sanxenxo).
 * Texto: Lote_Pontevedra_e_Sanxenxo_4_CERTIFICADOS_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Sanxenxo es el municipio más claramente orientado a playa y temporada de esta zona, pero no se reduce a una franja turística.",
  "La villa de Sanxenxo se organiza alrededor de Silgar y del puerto deportivo. Portonovo conserva puerto pesquero, lonja y un centro propio a poca distancia. Más al oeste aparecen Canelas, Montalvo, Major y A Lanzada; hacia el interior, Vilalonga, Noalla y otras parroquias ofrecen una vida mucho menos peatonal y más dependiente del coche.",
  "La primera decisión residencial es, por tanto, elegir entre Sanxenxo, Portonovo y las parroquias exteriores. Compartir municipio no significa compartir rutina.",
  "Silgar y Portonovo permiten incorporar playa, paseo, compra y hostelería a pie. Las zonas exteriores ganan espacio, tranquilidad o proximidad a otros arenales, pero el coche entra con mucha más facilidad.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Sanxenxo tiene dos ritmos muy visibles: el de la vida anual y el del verano.",
  "En la villa, fuera de temporada siguen funcionando centro de salud, supermercados, colegios, comercio, restauración y puerto. Silgar puede recorrerse con mucha calma en noviembre y volver a estar lleno de peatones en agosto.",
  "Portonovo tiene una base marinera más marcada. La lonja, el puerto pesquero, el mercado y la hostelería mantienen actividad durante todo el año. Para una vivienda bien situada, Baltar, Caneliñas y el centro pueden quedar dentro de recorridos a pie.",
  "En la villa de Sanxenxo, Silgar funciona de manera parecida: playa, paseo, comercio y puerto deportivo pueden integrarse en la misma mañana.",
  "Fuera de ambos núcleos cambia la semana. Montalvo, Noalla, Vilalonga o Areas pueden acercar una playa concreta o permitir una vivienda con más terreno, pero compra, sanidad y actividades se reparten y el coche gana peso.",
  "En verano cambian también los desplazamientos. Un trayecto sencillo en invierno puede convertirse en tráfico, búsqueda de aparcamiento y calles llenas. La diferencia no es solo que haya más gente: cambia el tiempo necesario para hacer cosas normales.",
  "La atención primaria se resuelve en el municipio. Para atención hospitalaria hay que salir de Sanxenxo: Pontevedra queda aproximadamente a veinte o veinticinco minutos desde la referencia municipal y, según el circuito asistencial y la necesidad, también puede intervenir el Hospital do Salnés.",
  "El aeropuerto de Vigo queda aproximadamente a 50 minutos y Santiago alrededor de 55. Para Palma conviene comprobar la programación de temporada, porque esa distancia terrestre no garantiza una conexión directa todo el año.",
  "Sanxenxo sigue siendo un municipio residencial en invierno, pero parte del comercio y de la restauración reduce actividad fuera de temporada. Portonovo suele mostrar mejor que Silgar la continuidad marinera de todo el año.",
] as const;

const CLIMA_NUEVO2 = [
  "Sanxenxo tiene un verano suave, con una media cercana a 19,5 °C. El océano y la ría moderan las temperaturas y reducen mucho el calor persistente de Mallorca.",
  "El invierno es bastante más húmedo. Hay más lluvia, más nubosidad y una necesidad mayor de que la vivienda ventile y reciba sol.",
  "La exposición cambia mucho dentro del municipio. Silgar y algunas playas de ría están relativamente protegidas; Montalvo, Major y A Lanzada reciben una influencia atlántica más directa, con más viento y oleaje.",
  "Eso se nota también en la casa. Primera línea puede significar vistas y paseo inmediato, pero también salitre, viento y mayor desgaste de carpinterías, cierres y fachadas.",
  "En verano la ventaja climática es clara para quien huye del calor balear: se puede caminar o estar en la playa durante más horas del día. La contrapartida es que el agua es bastante más fría que en el Mediterráneo.",
] as const;

const VIVIR_NUEVO2 = [
  "Sanxenxo permite una vida de playa cotidiana de una forma que Pontevedra no ofrece.",
  "En Silgar se puede bajar andando a la arena, recorrer el paseo y enlazar con puerto y comercio. En Portonovo, Baltar y Caneliñas hacen algo parecido alrededor de un núcleo más marinero.",
  "Eso no significa que toda la costa funcione igual. Vivir junto a Montalvo o Major puede acercar una playa espectacular y alejar la compra o el centro de salud.",
  "La mayor adaptación respecto a Mallorca puede ser social y estacional. El verano concentra visitantes, segundas residencias y ocio nocturno. El ruido y el tráfico deben juzgarse como parte de la vivienda, no como un fenómeno externo.",
  "Fuera de temporada la presión desaparece de golpe. Para algunas personas esa calma es una ventaja; para otras, la reducción de comercio y ambiente puede resultar demasiado marcada.",
  "La costa permite cambiar de playa sin salir del municipio: bahía urbana, calas más protegidas y arenales atlánticos. Esa variedad tiene valor real si se usa; si la vida cotidiana termina reducida a coche y aparcamiento, deja de compensar parte del coste de la ubicación.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Sanxenxo creció sobre una base marinera y parroquial que el turismo transformó con enorme intensidad durante el siglo XX.",
  "Portonovo conserva mejor la relación visible con pesca y lonja. El puerto sigue recordando que antes de convertirse en destino de veraneo esta costa trabajaba con el mar.",
  "La villa de Sanxenxo cambió de otra manera. Silgar pasó de playa junto a un pequeño núcleo a frente urbano con paseo, hoteles, apartamentos y uno de los puertos deportivos más importantes de Galicia.",
  "A Lanzada aporta una historia mucho más antigua. Junto al arenal se conservan restos arqueológicos y la ermita de Nosa Señora da Lanzada. El lugar combina paisaje atlántico, ocupación antigua y tradiciones ligadas al baño de las nueve olas.",
  "El resultado actual son varias identidades superpuestas: villa turística, puerto marinero, parroquias interiores y una costa exterior que mantiene espacios mucho menos urbanos.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "En Sanxenxo es fácil distinguir lo cotidiano de la salida deliberada.",
  "Silgar es la playa urbana de la villa. Desde una vivienda céntrica puede utilizarse para un baño, una caminata o una vuelta al final de la tarde sin coger el coche.",
  "Portonovo ofrece Baltar y Caneliñas dentro de su propia trama. Canelas queda inmediatamente después y sigue siendo accesible desde muchas viviendas del núcleo.",
  "El Sendero Azul Sanxenxo–Portonovo enlaza ambos centros pasando por Silgar, Punta Vicaño, Baltar, el puerto de Portonovo y el mirador de Caneliñas. La guía turística municipal sitúa el recorrido en unos 8,6 km; para la vida diaria puede utilizarse solo un tramo y regresar cuando convenga.",
  "Montalvo, Major y A Lanzada cambian de escala. Para muchas viviendas exigen coche y en verano el aparcamiento forma parte de la salida.",
  "A Lanzada es un arenal largo y mucho más expuesto al Atlántico. El sendero azul de su entorno recorre unos 3 km y conecta paisaje, yacimiento y ermita. Aquí el viento, el oleaje y el espacio abierto son muy distintos de Silgar.",
  "La combinación permite elegir entre baño urbano y costa más abierta. El error sería comprar en una parroquia exterior pensando que todas esas playas forman parte de la misma rutina peatonal.",
] as const;

const CASA_NUEVO2 = [
  "Sanxenxo tiene uno de los mercados más caros de la zona y una presencia fuerte de segunda residencia.",
  "Silgar concentra apartamentos, pisos y promociones de precio elevado, con la ventaja de tener playa y paseo a pie. Allí hay que comprobar ruido, aparcamiento, ascensor y exposición al salitre.",
  "Portonovo mezcla vivienda permanente con segunda residencia. Para vivir todo el año puede ofrecer una relación más directa con mercado, lonja y servicios que algunas áreas puramente vacacionales.",
  "Las parroquias exteriores añaden casas, urbanizaciones y viviendas próximas a playas concretas. Su precio puede parecer más razonable que primera línea, pero hay que sumar coche y tiempo hasta servicios.",
  "La microzona tiene además efecto directo sobre el precio. La referencia estructurada sitúa el municipio en 3.351 €/m², pero el núcleo de Sanxenxo puede moverse claramente por encima y Portonovo por debajo de esa media.",
] as const;

const CASA_ADVERTENCIA_MICROZONA = [
  "Sanxenxo villa, Portonovo y las parroquias exteriores no deben compararse solo por precio.",
  "La villa maximiza Silgar, paseo y puerto deportivo. Portonovo suma vida marinera y playas urbanas. Las parroquias pueden ganar tranquilidad, casa o proximidad a un arenal concreto, pero aumentan el coche.",
] as const;

const CASA_QUE_CONVIENE_REVISAR = [
  "Dormir en la zona en agosto si la vivienda está cerca de Silgar, Portonovo o áreas de ocio nocturno.",
  "Hacer a pie los recorridos reales a supermercado, farmacia, centro de salud y playa.",
  "Comprobar aparcamiento en temporada alta.",
  "En primera línea, revisar carpinterías, fachada, cierres, corrosión exterior, ventilación y humedad.",
  "En una vivienda exterior, medir el tiempo real hasta servicios y no solo la distancia hasta la playa.",
  "Comprobar qué negocios permanecen abiertos durante el invierno en la microzona concreta.",
] as const;

const CASA_MERCADO_REVENTA = [
  "Sanxenxo tiene una demanda reconocible ligada a costa, segunda residencia y turismo, además de población permanente.",
  "Silgar y Portonovo tienen ubicaciones fáciles de explicar, pero el precio de entrada es alto y una vivienda con problemas de ruido o aparcamiento puede perder atractivo para uso anual.",
  "En primera línea, ascensor, terraza realmente utilizable, garaje y buen estado del edificio ayudan especialmente.",
  "En las parroquias, una casa debe justificar el mayor uso del coche con espacio, tranquilidad, vistas o acceso claro a una playa.",
  "La demanda turística añade compradores potenciales, pero una futura venta sigue dependiendo de precio, estado, microzona, aparcamiento y facilidad de uso durante todo el año.",
] as const;

const ENCAJA_SI_NUEVO2 = [
  "Encaja si la playa debe formar parte de la rutina diaria y se está dispuesto a pagar más por poder llegar andando a ella.",
  "También si interesa elegir entre una villa de paseo, un núcleo marinero como Portonovo y una costa atlántica más abierta dentro del mismo municipio.",
  "Puede encajar especialmente si se valora un verano mucho más fresco que Mallorca y se acepta compartir la costa con una población estacional muy alta.",
  "Y encaja si la vida anual puede organizarse alrededor de Sanxenxo o Portonovo, sin exigir hospital ni aeropuerto a pocos minutos.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Encaja peor si julio y agosto deben conservar el mismo silencio, tráfico y facilidad de aparcamiento que noviembre.",
  "También si el presupuesto obliga a vivir lejos de la costa cuando la principal razón para elegir el municipio era hacer vida de playa a pie.",
  "Puede resultar menos adecuado si el hospital y el aeropuerto deben quedar muy cerca.",
  "Y encaja peor si el mantenimiento ligado a salitre, humedad y primera línea se quiere reducir al mínimo.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Pasar una jornada completa en Sanxenxo y otra en Portonovo fuera de temporada.",
  "Repetir la visita en agosto y comprobar ruido, tráfico y aparcamiento.",
  "Hacer a pie desde la vivienda candidata supermercado, centro de salud y playa.",
  "Recorrer un tramo del Sendero Azul entre Sanxenxo y Portonovo para comprobar si realmente formaría parte de la rutina.",
  "Visitar A Lanzada con viento y oleaje para distinguirla de las playas urbanas protegidas.",
  "Y hacer el trayecto real hacia el hospital y el aeropuerto antes de dar por asumida la logística.",
] as const;

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m².";

const CASA_FILA_PRECIOS = {
  municipio: "Sanxenxo",
  a2: "283.160 €",
  a3: "392.067 €",
  b2: "228.706 €",
  b3: "316.670 €",
  m2: "3.351 €/m²",
} as const;

const FOTO_COMO_1 = {
  src: "/fotos/pontevedra-e-sanxenxo/sanxenxo-silgar.jpg",
  pie: "Silgar, paseo y playa urbana de Sanxenxo",
} as const;

const FOTO_COMO_2 = {
  src: "/fotos/pontevedra-e-sanxenxo/sanxenxo-portonovo.jpg",
  pie: "Portonovo conserva puerto y vida propia todo el año",
} as const;

const FOTO_HIST_1 = {
  src: "/fotos/pontevedra-e-sanxenxo/sanxenxo-lanzada-ermida.jpg",
  pie: "Ermida da Lanzada, culto y costa sobre un lugar antiguo",
} as const;

const FOTO_HIST_2 = {
  src: "/fotos/pontevedra-e-sanxenxo/sanxenxo-lanzada-castro.jpg",
  pie: "A Lanzada conserva castro y necrópolis junto al mar",
} as const;

const FOTO_MAR_1 = {
  src: "/fotos/pontevedra-e-sanxenxo/sanxenxo-canelas.jpg",
  pie: "Canelas, una de las playas abrigadas de Portonovo",
} as const;

const FOTO_MAR_2 = {
  src: "/fotos/pontevedra-e-sanxenxo/sanxenxo-lanzada.jpg",
  pie: "A Lanzada, dunas y Atlántico en el extremo occidental del municipio",
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

export default function Nuevo2SanxenxoPage() {
  const ficha = municipioPorSlug("sanxenxo");
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
            fragmentos={["19,5 °C"]}
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
        {CASA_NUEVO2.slice(0, 4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={CASA_NUEVO2[4]} fragmentos={["3.351 €/m²"]} />
        </p>
        {CASA_NUEVO2.slice(5).map((p) => (
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
        <FilaCasaNuevo2
          etiqueta="Qué conviene revisar en una vivienda"
          cuerpo={CASA_QUE_CONVIENE_REVISAR}
        />
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
