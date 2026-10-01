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
 * NUEVO2 — Boiro (Barbanza e Noia).
 * Texto: Barbanza_e_Noia_SEGUNDA_CERTIFICACION_INDEPENDIENTE_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Barbanza e Noia reúne tres paisajes residenciales en una misma península: la orilla norte de la ría de Arousa, el litoral atlántico de Porto do Son y el fondo de la ría de Muros e Noia. Rianxo, Boiro, A Pobra do Caramiñal y Ribeira encadenan villas de Arousa con distinta escala; Porto do Son gira hacia una costa más abierta y Noia funciona como villa histórica y de servicios en la cabecera de la otra ría. La Serra do Barbanza —el macizo montañoso que ocupa el centro de la península— atraviesa el territorio, de modo que en pocos kilómetros se pasa de playas abrigadas y paseos de ría a laderas, monte y arenales expuestos al Atlántico.",
  "Boiro ocupa una posición central en la orilla norte de Arousa. El núcleo urbano concentra comercio, mercado, salud y equipamientos; Barraña funciona como gran playa y paseo cotidiano; Escarabote, Abanqueiro y otras parroquias acercan puerto, costa o vivienda con terreno.",
  "Dentro de la zona es una de las opciones más equilibradas entre autonomía diaria, playa y precio. No ofrece hospital propio ni tren, pero permite hacer compra y buena parte de las gestiones sin desplazarse a Ribeira o Santiago.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Boiro tiene suficiente tamaño para que la vida no dependa de una única calle. Mercado, supermercados, pequeño comercio, centro de salud, colegios, biblioteca, Casa da Cultura y complejo deportivo cubren buena parte del día a día dentro del núcleo.",
  "Barraña cambia mucho cómo se vive el municipio. Es una playa larga de ría unida al casco por paseo, de modo que caminar, correr o bajar a la arena puede formar parte de la rutina y no solo del fin de semana.",
  "Escarabote y Abanqueiro acercan la vida al agua y a núcleos marineros. En otras parroquias aparecen casas con terreno y una relación más rural con la sierra. La contrapartida es que el coche entra antes en los recados.",
  "El Hospital do Barbanza, en Ribeira, queda aproximadamente a veinte minutos. Santiago ronda los cuarenta y cinco minutos y concentra aeropuerto, hospital de referencia y servicios de ciudad.",
  "La autovía AG-11, la vía rápida que recorre buena parte del Barbanza, facilita los desplazamientos longitudinales por la península. Aun así, la utilidad de una vivienda debe medirse por su acceso real a esa carretera y no solo por una distancia dibujada en el mapa.",
  "En verano la playa y las fiestas aumentan tráfico, terrazas y dificultad de aparcamiento. Barraña y Carragueiros reciben más presión que en invierno, mientras las zonas interiores mantienen un ritmo más tranquilo.",
  "La ventaja es que Boiro no se apaga en enero. El comercio y los servicios responden a una población estable, no únicamente al veraneo. Para residencia anual, esa continuidad es más importante que la oferta turística de agosto.",
] as const;

const CLIMA_NUEVO2 = [
  "Boiro tiene veranos suaves, con una media alrededor de 19,5 °C, y un invierno templado en temperatura, próximo a 10 °C.",
  "La referencia climática utilizada sitúa la precipitación alrededor de 1.350 mm anuales repartidos en unos 120 días. La diferencia con Mallorca aparece sobre todo entre octubre y marzo: más humedad, más días cubiertos y más necesidad de ventilar y calentar la vivienda.",
  "La orilla de Arousa está relativamente protegida, por lo que el viento suele ser menor que en Porto do Son o Corrubedo. Sin embargo, una vivienda muy próxima a la costa recibe salitre y una casa hacia la sierra puede tener menos sol de tarde.",
  "El agua de Barraña y Carragueiros ronda aproximadamente 18–20 °C en verano. Es fresca frente al Mediterráneo y la marea condiciona la anchura de arena disponible.",
  "Para la vivienda conviene observar cubierta, orientación y ventilación. Dos casas situadas a pocos kilómetros pueden tener experiencias de invierno distintas según altura, sombra y exposición.",
] as const;

const VIVIR_NUEVO2 = [
  "Boiro permite mantener playa dentro de la vida diaria sin renunciar a mercado, deporte y servicios básicos. Esa combinación es probablemente su rasgo residencial más claro.",
  "No hay una gran ciudad detrás de cada esquina. Para especialistas médicos, ciertos trámites o compras grandes se usa Ribeira o Santiago. El coche sigue siendo necesario, pero no para cada recado si se vive en el núcleo.",
  "El verano aumenta la ocupación de la costa, pero el municipio no gira exclusivamente alrededor del turista. En invierno siguen colegio, comercio, mercado y vida de barrio.",
  "La proximidad de la Serra do Barbanza añade monte y rutas a pocos minutos. Se puede pasar de un paseo llano junto a Barraña a pistas y miradores sin realizar un viaje largo.",
  "En una parroquia rural la experiencia cambia: la vivienda puede ser mayor y más barata por metro, pero una tarde con compra, actividad infantil y paseo por Barraña implica encadenar varios trayectos.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Boiro conserva uno de los conjuntos arqueológicos más útiles para entender la ocupación antigua de la ría: los Castros de Neixón.",
  "Un castro es un poblado fortificado de la Edad del Hierro. En Neixón se conservan restos de asentamientos levantados en una pequeña península frente a Arousa. Se mencionan porque muestran que la costa ya se utilizaba para vivir de agricultura, pesca y marisqueo muchos siglos antes de la villa actual.",
  "El Centro Arqueolóxico do Barbanza, situado junto al yacimiento, ayuda a interpretar esas viviendas, defensas y objetos encontrados. No es solo un museo separado del paisaje: permite mirar la propia península entendiendo por qué se eligió ese lugar.",
  "En la sierra aparecen mámoas. Una mámoa es un túmulo funerario prehistórico que cubría una cámara de piedra. Su presencia demuestra una ocupación humana todavía anterior a los castros y explica por qué el interior del municipio también forma parte del patrimonio.",
  "La villa moderna creció con pesca, marisqueo, conserva, comercio y servicios. Esa economía explica mejor el Boiro actual que un único monumento: un núcleo que funciona durante todo el año y una costa que sigue siendo productiva además de recreativa.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "Barraña es la referencia cotidiana. Es una playa de ría larga, con paseo y equipamientos, suficientemente próxima al núcleo para que caminar junto al agua pueda convertirse en hábito diario.",
  "Carragueiros ofrece otra playa amplia y protegida. Mañóns, A Retorta y otros arenales amplían las opciones sin salir del municipio. La marea y el aparcamiento de agosto cambian mucho la experiencia.",
  "No son playas de océano abierto. El agua está más protegida y el oleaje suele ser menor que en la costa de Porto do Son o Corrubedo. Quien busque surf o mar bravo debe cruzar hacia la fachada atlántica.",
  "El estuario del río Beluso y otras zonas húmedas ofrecen recorridos de ribera y observación de naturaleza. Son salidas más tranquilas y menos urbanas que Barraña.",
  "Hacia el interior, la Serra do Barbanza introduce pendiente, pistas y paisaje de monte. A Curota, ya asociada sobre todo a A Pobra, sirve como gran mirador comarcal; desde esa altura se entiende físicamente la relación entre Arousa, la sierra y el Atlántico.",
  "Para residencia importa distinguir paseo y excursión: Barraña puede usarse cada día desde el casco; la sierra requiere salir deliberadamente y las parroquias costeras cambian la necesidad de coche.",
] as const;

const CASA_NUEVO2 = [
  "Boiro ofrece dos compras bastante distintas: piso o vivienda urbana cerca de servicios y Barraña, o casa con terreno en parroquias como Abanqueiro, Cespón, Bealo y otras zonas interiores.",
  "En el núcleo, la ventaja es la autonomía. Mercado, supermercados, salud, colegio y paseo pueden quedar cerca. En pisos antiguos conviene revisar ascensor, garaje, aislamiento, fachada comunitaria y comportamiento de la vivienda en días húmedos.",
  "Cerca de Barraña o Escarabote la ría entra más directamente en la rutina. A cambio hay que comprobar salitre, viento, tráfico y aparcamiento en verano. Una vivienda a “tres minutos de la playa” puede estar junto a una carretera con bastante movimiento.",
  "En Abanqueiro y Cespón aparecen más casas con parcela. Antes de comprar conviene medir acceso, pendiente, drenaje, saneamiento, cubierta, horas de sol y tiempo real hasta supermercado, centro de salud y playa.",
  "Una casa de piedra o una vivienda grande rehabilitada puede exigir gasto de calefacción y mantenimiento superior al de un piso. El estado de cubierta y la ventilación importan más que una reforma cosmética reciente.",
  "La fibra está extendida, pero en una dirección rural concreta conviene verificar disponibilidad real si el teletrabajo es imprescindible.",
] as const;

const CASA_ADVERTENCIA_MICROZONA = [
  "El casco maximiza servicios; Barraña maximiza paseo y playa; Escarabote y Abanqueiro acercan vida marinera; las parroquias interiores compran terreno y silencio a cambio de coche.",
] as const;

const CASA_MERCADO_REVENTA = [
  "Boiro tiene una base residencial estable y suficiente variedad de producto. En reventa ayudan accesibilidad, ascensor o aparcamiento en pisos, cercanía real a servicios y buen estado. En casas pesan más acceso, parcela manejable, orientación y reforma técnicamente sólida.",
] as const;

const ENCAJA_SI_NUEVO2 = [
  "Se busca una villa de tamaño medio donde compra, salud, colegio y playa puedan encajar en la misma semana.",
  "Barraña como paseo y playa cotidiana pesa más que vivir frente al Atlántico abierto.",
  "Se acepta desplazarse unos veinte minutos para hospital.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Se necesita tren o gran ciudad dentro del municipio.",
  "El océano con oleaje es una prioridad diaria.",
  "Se compra una casa en parroquia esperando mantener vida peatonal.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Hacer la ruta real vivienda–mercado–centro de salud–Barraña.",
  "Visitar la costa en un domingo fuerte de agosto.",
  "Revisar humedad, cubierta, ventilación y salitre según microzona.",
  "Medir el trayecto al Hospital do Barbanza.",
  "Confirmar fibra en la dirección concreta si es necesaria para trabajar.",
] as const;

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m².";

const CASA_FILA_PRECIOS = {
  municipio: "Boiro",
  a2: "110.357 €",
  a3: "152.802 €",
  b2: "89.135 €",
  b3: "123.417 €",
  m2: "1.306 €/m²",
} as const;

const COMPARA_HREF_NUEVO2 = "/compara/?vs=boiro,rianxo,a-pobra-do-caraminal,ribeira,porto-do-son,noia";

const FOTO_COMO_1 = {
  src: "/fotos/barbanza-e-noia/boiro-barraña.jpg",
  pie: "Barraña, el arenal grande de Boiro",
} as const;

const FOTO_COMO_2 = {
  src: "/fotos/barbanza-e-noia/boiro-neixon.jpg",
  pie: "Castros de Neixón sobre la península",
} as const;

const FOTO_HIST_1 = {
  src: "/fotos/barbanza-e-noia/boiro-paseo.jpg",
  pie: "Paseo marítimo de Boiro",
} as const;

const FOTO_HIST_2 = {
  src: "/fotos/barbanza-e-noia/boiro-carragueiros.jpg",
  pie: "Carragueiros, playa recogida de ría",
} as const;

const FOTO_MAR_1 = {
  src: "/fotos/barbanza-e-noia/boiro-sierra.jpg",
  pie: "La Serra do Barbanza detrás de Boiro",
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

export default function Nuevo2BoiroPage() {
  const ficha = municipioPorSlug("boiro");
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
        {MAR_RIO_CAMINO_NUEVO2.slice(0, 4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_MAR_1.src} pie={FOTO_MAR_1.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Casa" varianteTarjetaV1>
        {CASA_NUEVO2.map((p) => (
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
