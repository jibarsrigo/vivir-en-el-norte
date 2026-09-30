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
 * NUEVO2 — Vilanova de Arousa (O Salnés).
 * Texto: Lote_O_Salnes_REVISION_INTEGRAL_CERTIFICADA_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "O Salnés reúne villa histórica, viñedo, costa de ría, isla y ciudad en un espacio muy compacto alrededor de Arousa. Meaño ocupa el interior de viñedos y parroquias; Cambados combina casco histórico, vino y marisqueo; A Illa de Arousa vive rodeada de mar y depende de un único puente; Vilanova mezcla villa, pequeñas playas y parroquias de viñedo; Vilagarcía aporta hospital, tren, puerto y la mayor concentración de servicios. Las distancias son cortas, pero la posibilidad de vivir a pie, el acceso al baño y el peso del coche cambian mucho entre municipios.",
  "Vilanova ocupa la ría entre Cambados y Vilagarcía. La villa concentra salud, mercado, supermercados, colegios, puerto y restauración; O Terrón, Ariño y As Sinas acercan el agua; Baión y Caleiro cambian la costa por viñedo y casas con finca.",
  "El núcleo permite una vida bastante autónoma y Vilagarcía queda muy cerca para hospital y tren. En las parroquias exteriores aumenta el coche, aunque se gane espacio y tranquilidad.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Vilanova funciona como una villa pequeña con servicios suficientes para una parte importante de la semana. Centro de salud, farmacias, supermercados, mercado, colegios, cafés y puerto quedan relativamente cerca unos de otros.",
  "El frente marítimo permite caminar sin preparar una salida. Desde el núcleo se puede enlazar puerto, paseo y playas próximas, de modo que la ría entra con facilidad en una tarde normal.",
  "O Terrón combina puerto, arena y vistas hacia A Illa. Ariño ofrece una pequeña playa protegida enlazada con el entorno urbano. As Sinas prolonga la costa residencial hacia Vilagarcía y cambia el casco por una secuencia más lineal de casas, carretera y puntos de baño.",
  "Baión y Caleiro ofrecen otra vida. Aparecen casas con finca, viñedo y más tranquilidad, pero comprar, ir al centro de salud o utilizar el paseo suele exigir coche.",
  "Vilagarcía queda lo bastante cerca para utilizarla con frecuencia. Allí están el Hospital do Salnés, la estación y una oferta comercial más amplia. Desde la villa de Vilanova, el hospital queda aproximadamente a quince minutos.",
  "El aeropuerto de Vigo queda alrededor de cuarenta minutos y Santiago, unos cincuenta. Para Palma conviene comprobar la programación vigente en cada temporada.",
  "Entre agosto y septiembre las fiestas de San Roque, A Pastoriza y San Cipriano ocupan el centro con procesiones, música y otras actividades. La Festa do Mexillón e o Berberecho añade otra cita gastronómica en agosto. El resto del año el núcleo recupera un ritmo mucho más tranquilo.",
] as const;

const CLIMA_NUEVO2 = [
  "Vilanova tiene un verano suave, con media alrededor de 19,5 °C, y un invierno próximo a 10 °C.",
  "La lluvia y la humedad tienen mucha más presencia que en Mallorca. La costa recibe algo de viento y las viviendas próximas a la ría están más expuestas al salitre.",
  "El verano evita buena parte del calor sostenido mediterráneo. Eso facilita caminar o permanecer al aire libre durante horas centrales, aunque el tiempo sea menos estable.",
  "Las playas de ría tienen agua más tranquila que un arenal atlántico abierto, pero bastante más fría que el Mediterráneo. La marea modifica la cantidad de arena disponible y la apariencia de cada playa.",
  "En Baión o Caleiro pesan orientación, ventilación y drenaje. En As Sinas, Ariño u O Terrón conviene mirar además viento, salitre y exposición de fachada.",
] as const;

const VIVIR_NUEVO2 = [
  "Vilanova ofrece una combinación poco extrema: no es una ciudad, pero tampoco obliga a salir para cada necesidad básica. El núcleo permite resolver bastante y Vilagarcía completa lo que falta.",
  "El mar puede entrar en la rutina sin asumir la condición insular de A Illa. Desde la villa se puede caminar junto a la ría o acercarse a una playa pequeña; para hospital o tren basta un desplazamiento corto hacia Vilagarcía.",
  "En As Sinas se gana proximidad al agua, pero la carretera pesa más en la vida cotidiana. Una vivienda con vistas puede estar expuesta a tráfico y depender del coche para compra o salud.",
  "En Baión y Caleiro cambia por completo la relación con el municipio. La vivienda puede ofrecer parcela y viñedo, pero deja de tener sentido describir Vilanova como una villa caminable: esa ventaja pertenece sobre todo al núcleo.",
  "El verano aumenta visitantes y actividad, pero el municipio mantiene una base residencial durante el invierno. Para quien llegue desde Mallorca, el cambio combina verano más suave, más humedad y una vida de ría más tranquila.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Vilanova conserva una relación muy visible con Ramón María del Valle-Inclán, nacido aquí en 1866.",
  "La Casa do Cuadrante, hoy Casa Museo Valle-Inclán, es una antigua residencia familiar de dos plantas situada en el casco. La vivienda fue rehabilitada por el ayuntamiento después de un incendio y hoy mantiene la memoria del escritor dentro de la propia villa.",
  "La torre de Cálogo recuerda el antiguo conjunto religioso de San Cibrán de Cálogo y muestra que la historia del municipio no se concentra únicamente en el frente marítimo actual.",
  "O Terrón mantiene la relación con puerto y marisqueo. Desde la costa se ven bateas —plataformas flotantes donde se cría mejillón— que forman parte del paisaje productivo de Arousa.",
  "Tierra adentro, el Pazo de Baión enlaza una antigua residencia señorial con el viñedo. Hoy el conjunto está ligado a actividad vitivinícola, de manera que esa arquitectura histórica sigue integrada en la economía del territorio.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El paseo del frente marítimo es la salida más fácil de repetir. Se puede caminar junto a la ría, pasar por el puerto y continuar hacia O Terrón o Ariño sin convertirlo en excursión.",
  "Ariño es una pequeña playa protegida conectada con el entorno urbano por paseo. Si se vive en el núcleo, puede formar parte de una tarde normal.",
  "O Terrón combina arena, puerto y vistas hacia A Illa. La presencia de embarcaciones y actividad portuaria la diferencia de una playa aislada.",
  "As Sinas prolonga la costa hacia Vilagarcía. Allí aparecen varios puntos de baño de ría junto a una franja residencial atravesada por carretera. Para una vivienda en esa zona, paseo y playa pueden estar cerca, pero también hay que convivir con tráfico.",
  "La marea modifica mucho el paisaje. Tener el agua delante no significa disponer siempre de la misma cantidad de arena ni del mismo tipo de baño.",
  "El Monte Lobeira, dentro de Vilanova, cambia completamente el terreno. Para llegar hay que desplazarse y después subir hacia un mirador sobre la ría. Es una salida de monte, no una continuación del paseo litoral.",
] as const;

const CASA_NUEVO2 = [
  "Vilanova obliga a distinguir al menos cuatro tipos de compra: piso en la villa, vivienda junto a O Terrón o Ariño, casa en As Sinas y casa con finca en Baión o Caleiro.",
  "En la villa, un piso bien situado permite aprovechar de verdad la principal ventaja del municipio: salud, mercado, compra, colegio, cafés y paseo relativamente próximos. Conviene revisar ascensor, garaje o aparcamiento, orientación y ruido durante las fiestas de agosto y septiembre.",
  "En O Terrón o Ariño se gana proximidad inmediata a la ría. La vivienda debe revisarse por salitre, ventilación, humedad y comportamiento del aparcamiento en verano. Una vista atractiva no compensa una fachada muy castigada o una casa difícil de ventilar.",
  "As Sinas requiere una comprobación diferente. La costa es residencial y permite tener playas cerca, pero la carretera introduce ruido, cruces y tráfico. Hay que caminar el entorno, no solo mirar la distancia al agua en el mapa.",
  "Baión y Caleiro permiten encontrar casas con finca y viñedo. Allí pesan cubierta, drenaje, saneamiento, acceso, orientación y mantenimiento de parcela. También hay que medir cuántas veces por semana se necesitaría coche para ir al núcleo o a Vilagarcía.",
  "El precio debe interpretarse junto con esa diferencia de producto. Un piso caminable en la villa, una casa de costa y una vivienda con finca no compiten por las mismas razones ni tienen los mismos costes de mantenimiento.",
  "Precio medio municipal utilizado: 1.969 €/m².",
] as const;

const CASA_ADVERTENCIA_MICROZONA = [
  "La villa maximiza servicios y paseo; O Terrón y Ariño acercan baño y puerto; As Sinas ofrece costa residencial con carretera; Baión y Caleiro aportan finca y viñedo a cambio de más coche.",
] as const;

const CASA_MERCADO_REVENTA = [
  "Vilanova combina demanda residencial y atractivo de ría. Para una futura venta ayudan una ubicación utilizable todo el año, buen estado, aparcamiento, accesibilidad y una relación clara con paseo, playa o servicios. En costa pesa también la conservación frente al salitre; en parroquia, el acceso y el mantenimiento de la finca.",
] as const;

const ENCAJA_SI_NUEVO2 = [
  "Se quiere una villa pequeña con ría, paseo y servicios básicos sin vivir en una ciudad.",
  "Se valora tener Vilagarcía cerca para hospital, tren y compras grandes.",
  "Una playa de ría y vida anual tranquila pesan más que el carácter monumental de Cambados o la condición insular de A Illa.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Hospital, estación o gran oferta comercial deben estar dentro del propio núcleo.",
  "Las celebraciones de agosto y septiembre deben pasar completamente desapercibidas.",
  "Se compra en una parroquia esperando mantener la misma vida a pie que en la villa.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Hacer una mañana completa sin coche en el núcleo.",
  "Recorrer a pie desde la vivienda hasta Ariño u O Terrón.",
  "Volver durante una noche festiva si se compra en el centro.",
  "Comprobar tráfico y ruido en As Sinas.",
  "Hacer el trayecto real a Vilagarcía y al Hospital do Salnés.",
  "Revisar humedad, salitre o drenaje según la microzona.",
] as const;

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m².";

const CASA_FILA_PRECIOS = {
  municipio: "Vilanova de Arousa",
  a2: "166.381 €",
  a3: "230.373 €",
  b2: "134.384 €",
  b3: "186.071 €",
  m2: "1.969 €/m²",
} as const;

const COMPARA_HREF_NUEVO2 = "/compara/?vs=vilanova-de-arousa,meano,cambados,a-illa-de-arousa,vilagarcia-de-arousa";

const FOTO_COMO_1 = {
  src: "/fotos/o-salnes/vilanova-paseo.jpg",
  pie: "Vilanova: paseo y villa frente a la ría",
} as const;

const FOTO_COMO_2 = {
  src: "/fotos/o-salnes/vilanova-terron.jpg",
  pie: "O Terrón, puerto y playa junto al casco",
} as const;

const FOTO_HIST_1 = {
  src: "/fotos/o-salnes/vilanova-valle-inclan.jpg",
  pie: "Casa do Cuadrante, memoria de Valle-Inclán",
} as const;

const FOTO_HIST_2 = {
  src: "/fotos/o-salnes/vilanova-baion.jpg",
  pie: "Pazo de Baión, señorío y viñedo en la parroquia",
} as const;

const FOTO_MAR_1 = {
  src: "/fotos/o-salnes/vilanova-sinas.jpg",
  pie: "As Sinas, costa residencial de agua calma",
} as const;

const FOTO_MAR_2 = {
  src: "/fotos/o-salnes/vilanova-monte-lobeira.jpg",
  pie: "Monte Lobeira, mirador sobre toda Arousa",
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

export default function Nuevo2VilanovaDeArousaPage() {
  const ficha = municipioPorSlug("vilanova-de-arousa");
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
        {CASA_NUEVO2.slice(0, 6).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={CASA_NUEVO2[6]} fragmentos={["1.969 €/m²"]} />
        </p>
        {CASA_NUEVO2.slice(7).map((p) => (
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
