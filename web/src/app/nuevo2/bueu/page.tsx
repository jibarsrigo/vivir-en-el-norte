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
 * NUEVO2 — Bueu (O Morrazo).
 * Texto: Lote_O_Morrazo_Cursor_NUEVO2 (1).txt (APROBADO EDITORIALMENTE)
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Bueu ocupa la vertiente norte de O Morrazo, mirando a la ría de Pontevedra y a la isla de Ons.",
  "La villa concentra puerto, mercado, comercio, centro de salud y equipamientos culturales. Beluso prolonga la vida marinera hacia el oeste. Cela y San Martiño ascienden hacia un interior más residencial. Cabo Udra y la costa de Beluso introducen una naturaleza que no está dentro del casco pero sí suficientemente cerca para formar parte habitual del tiempo libre.",
  "Frente a Cangas, Bueu tiene una escala más contenida y no dispone de ferry cotidiano a Vigo. Frente a Marín, está menos integrado en el corredor urbano de Pontevedra. A cambio, puerto, paseo y cultura marítima ocupan el centro de la identidad local.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Un martes de noviembre Bueu sigue siendo una villa de trabajo. Hay mercado, centro de salud, supermercados, colegios, instituto, biblioteca, puerto y restauración. La lonja y las embarcaciones recuerdan que el mar no aparece solo como paisaje.",
  "Desde una vivienda céntrica se puede resolver a pie buena parte de la semana. Compra, farmacia, mercado, café y paseo quedan dentro de un radio pequeño.",
  "La escala comercial es suficiente para la vida básica, pero no sustituye Pontevedra para hospital, gran compra o determinados servicios especializados. La referencia hospitalaria práctica queda aproximadamente a 25–30 minutos.",
  "Beluso cambia la semana. Puerto, playa y casas en ladera introducen una vida más residencial. La distancia a Bueu es corta, pero el coche entra con más facilidad.",
  "Cela y San Martiño permiten ganar terreno y tranquilidad. Allí conviene medir la frecuencia real de desplazamientos hacia la villa, no limitarse a calcular kilómetros.",
  "Banda do Río y el frente portuario integran el agua en la vida del núcleo. Las playas mayores y Cabo Udra son salidas próximas, pero no todas forman parte de una rutina a pie desde el centro.",
  "El verano añade barcos a Ons, más ocupación de playas y más mesas en el puerto. Aun así, Bueu conserva una escala más contenida que los puntos más presionados de Cangas.",
  "Corpus Christi y Carmen cambian temporalmente el centro. Las alfombras florales del Corpus ocupan las calles y convierten una tradición local en una experiencia muy visible para quien vive sobre el recorrido.",
] as const;

const CLIMA_NUEVO2 = [
  "Bueu tiene una media estival alrededor de 20 °C y una media invernal próxima a 10 °C.",
  "Frente a Mallorca, el invierno es mucho más húmedo y gris. Una vivienda que parece luminosa en julio debe comprobarse durante un periodo de lluvia.",
  "El verano es moderado y las playas interiores de la ría suelen ofrecer agua más tranquila que una costa atlántica abierta.",
  "Cabo Udra y las puntas expuestas reciben más viento y salitre que el interior de la villa. Esa diferencia importa en una vivienda próxima al mar.",
  "En edificios antiguos hay que revisar aislamiento, cubierta y ventilación. En casas con terreno, drenaje y orientación.",
] as const;

const VIVIR_NUEVO2 = [
  "Bueu permite una vida pequeña sin convertirse en una localidad estacional.",
  "En el núcleo se puede caminar para resolver compra y servicios. En enero siguen funcionando mercado, puerto, colegios y centro de salud.",
  "La relación con Pontevedra es de apoyo, no de continuidad urbana. Para hospital y servicios mayores se sale por carretera.",
  "La cultura marítima está especialmente presente. Museo Massó, lonja, puerto y la conexión estacional con Ons hacen que la historia del mar siga formando parte de la semana contemporánea.",
  "Para alguien procedente de Mallorca, el principal cambio residencial será el invierno húmedo y una oferta urbana mucho menor, compensados por un verano más suave y una costa cercana de escala tranquila.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "La relación de Bueu con pescado y comercio es muy anterior a la industria conservera moderna. En el municipio se produjeron ánforas en época romana para transportar productos, entre ellos salazones.",
  "La transformación decisiva llegó con la industria de salazón y conserva. La familia Massó desarrolló desde el siglo XIX un complejo industrial que terminó marcando profundamente la villa.",
  "El Museo Massó nació en 1932 dentro de ese universo fabril y hoy ocupa naves de la antigua conservera. Conserva embarcaciones, instrumentos de navegación, documentación, maquinaria y memoria de las actividades conservera, pesquera y ballenera.",
  "La huella actual está alrededor del puerto: Bueu se entiende mejor como lugar de trabajo marítimo que como simple acceso a playas.",
  "Ons añade otra escala histórica y territorial. La isla pertenece administrativamente al municipio y conserva faro, aldea, caminos y memoria de una comunidad insular.",
  "La conexión estacional desde el puerto vuelve esa geografía visible cada verano y refuerza una identidad municipal que se extiende más allá de la península.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "Banda do Río y el frente portuario son el mar cotidiano del núcleo. Permiten caminar junto al agua sin organizar una excursión.",
  "Beluso combina pequeño puerto y playa y queda suficientemente cerca para convertirse en salida habitual desde muchas zonas del municipio.",
  "Area de Bon, Portomaior y Lapamán ofrecen arenales de ría de otra escala. En verano hay que contar con más presión de aparcamiento.",
  "Cabo Udra es la caminata que mejor representa la costa natural próxima. Granito, brezo, antiguas estructuras costeras, calas y vistas hacia Ons permiten una salida de varias horas sin abandonar el municipio.",
  "Ons pertenece a otra categoría. El barco es estacional y la visita requiere dedicar buena parte del día. Una vez allí se puede caminar hacia el faro, playas o el Buraco do Inferno.",
  "Por tanto, la rutina se organiza en tres escalas: puerto y Banda do Río para cada día; Beluso y playas próximas para una tarde; Cabo Udra u Ons para una salida deliberada.",
] as const;

const CASA_NUEVO2 = [
  "La villa ofrece pisos cerca de mercado, puerto y servicios. Es la opción más sencilla para reducir coche.",
  "En edificios de distintas décadas conviene revisar ascensor, aislamiento, cubierta y ventilación. Una vivienda barata en un edificio sin accesibilidad puede limitar mucho la permanencia a largo plazo.",
  "Beluso ofrece casas marineras, viviendas en ladera y algunas parcelas. Allí pesan acceso, orientación y distancia real a la villa.",
  "Cela y San Martiño permiten encontrar más terreno. La contrapartida es una semana más dependiente del coche.",
  "En costa, salitre y humedad deben inspeccionarse físicamente. En una casa, cubierta, drenaje, saneamiento y mantenimiento exterior.",
  "La poca obra nueva hace especialmente importante distinguir una reforma estética de una rehabilitación que haya resuelto aislamiento y humedad.",
  "Como referencia municipal, Bueu se sitúa en 1.908 €/m².",
] as const;

const CASA_ADVERTENCIA_MICROZONA = [
  "Bueu villa, Beluso y las zonas interiores no ofrecen la misma semana.",
  "La villa maximiza servicios y caminabilidad. Beluso acerca puerto, playa y vivienda de costa. Cela y San Martiño permiten ganar terreno a cambio de coche.",
] as const;

const CASA_QUE_CONVIENE_REVISAR = [
  "Hacer andando mercado, farmacia, centro de salud y puerto desde la vivienda candidata.",
  "En un piso antiguo, revisar ascensor, aislamiento, cubierta y ventilación.",
  "En Beluso, comprobar acceso, pendiente y recorrido real hacia la villa.",
  "En una casa, visitar después de lluvia y observar drenaje, muros y zonas en sombra.",
  "En costa, revisar carpinterías y elementos metálicos por salitre.",
  "Si Ons o las playas son parte central de la elección, distinguir lo que puede hacerse a diario de lo que depende de coche o barco estacional.",
] as const;

const CASA_MERCADO_REVENTA = [
  "Bueu tiene una base residencial propia y un atractivo costero reconocible, pero una escala de mercado menor que Cangas o Marín.",
  "En la villa ayudan servicios a pie, accesibilidad y estado del edificio.",
  "En Beluso y las áreas residenciales pesan vistas, acceso, orientación y calidad de la rehabilitación.",
  "Una casa grande con mantenimiento difícil o una reforma pendiente reduce el público futuro.",
  "La cercanía a puerto y playa puede añadir demanda, pero no sustituye una buena accesibilidad.",
] as const;

const ENCAJA_SI_NUEVO2 = [
  "Encaja si se busca una villa marinera contenida, con puerto, mercado y vida anual, y se prefiere esa escala a una conexión metropolitana más intensa.",
  "También si Cabo Udra, Beluso y Ons ofrecen el tipo de costa que se quiere utilizar, distinguiendo paseo diario de excursión.",
  "Puede encajar si Pontevedra puede funcionar como apoyo para hospital y servicios de mayor escala.",
  "Y encaja si se acepta que fuera del núcleo el coche gana importancia.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Encaja peor si se necesita hospital muy próximo o una ciudad grande integrada en la rutina peatonal.",
  "También si se quiere conexión diaria por barco con Vigo o ferrocarril.",
  "Puede resultar menos adecuado si se busca mucha oferta de obra nueva o una gran variedad comercial dentro del municipio.",
  "Y pierde parte de su sentido si se compra en una zona interior esperando conservar la caminabilidad de la villa.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Pasar una jornada completa en la villa y hacer a pie compra, salud, puerto y paseo.",
  "Visitar Beluso si se busca casa o una relación más directa con playa.",
  "Hacer el trayecto real hacia Pontevedra y hospital.",
  "Volver en verano para comprobar presión en playas y aparcamiento.",
  "Recorrer Cabo Udra para saber si ese tipo de costa se utilizaría realmente.",
  "Y visitar la vivienda después de lluvia para comprobar humedad y comportamiento de la parcela o del edificio.",
] as const;

const CASA_LEYENDA_COMPACTA =
  "A: ≤5 min de la costa · B: 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Estimaciones comparativas; conviene contrastarlas con la oferta del momento.";

const CASA_FILA_PRECIOS = {
  municipio: "Bueu",
  a2: "161.226 €",
  a3: "223.236 €",
  b2: "130.221 €",
  b3: "180.306 €",
  m2: "1.908 €/m²",
} as const;

const FOTO_COMO_1 = {
  src: "/fotos/o-morrazo/bueu-puerto.jpg",
  pie: "El puerto, centro de trabajo y paseo",
} as const;

const FOTO_HIST_1 = {
  src: "/fotos/o-morrazo/bueu-masso.jpg",
  pie: "Museo Massó: conserva, navegación y memoria industrial",
} as const;

const FOTO_HIST_2 = {
  src: "/fotos/o-morrazo/bueu-ons.jpg",
  pie: "La isla de Ons, territorio insular del municipio",
} as const;

const FOTO_MAR_1 = {
  src: "/fotos/o-morrazo/bueu-beluso.jpg",
  pie: "Beluso, puerto y playa al oeste de la villa",
} as const;

const FOTO_MAR_2 = {
  src: "/fotos/o-morrazo/bueu-cabo-udra.jpg",
  pie: "Antigua batería costera de Cabo Udra sobre la ría",
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

export default function Nuevo2BueuPage() {
  const ficha = municipioPorSlug("bueu");
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
        <p key={COMO_SE_VIVE_NUEVO2[0].slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          {COMO_SE_VIVE_NUEVO2[0]}
        </p>
        <p key={COMO_SE_VIVE_NUEVO2[1].slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          {COMO_SE_VIVE_NUEVO2[1]}
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={COMO_SE_VIVE_NUEVO2[2]} fragmentos={["25–30 minutos"]} />
        </p>
        <p key={COMO_SE_VIVE_NUEVO2[3].slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          {COMO_SE_VIVE_NUEVO2[3]}
        </p>
        <p key={COMO_SE_VIVE_NUEVO2[4].slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          {COMO_SE_VIVE_NUEVO2[4]}
        </p>
        <p key={COMO_SE_VIVE_NUEVO2[5].slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          {COMO_SE_VIVE_NUEVO2[5]}
        </p>
        <p key={COMO_SE_VIVE_NUEVO2[6].slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          {COMO_SE_VIVE_NUEVO2[6]}
        </p>
        <p key={COMO_SE_VIVE_NUEVO2[7].slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          {COMO_SE_VIVE_NUEVO2[7]}
        </p>
        <Foto src={FOTO_COMO_1.src} pie={FOTO_COMO_1.pie} />
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Frente a Mallorca" varianteTarjetaV1>
        <h3 className="mt-1 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Clima
        </h3>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas
            texto={CLIMA_NUEVO2[0]}
            fragmentos={["20 °C", "10 °C"]}
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
        {DE_DONDE_VIENE_NUEVO2.slice(0, 3).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_HIST_1.src} pie={FOTO_HIST_1.pie} />
        {DE_DONDE_VIENE_NUEVO2.slice(3, 5).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_HIST_2.src} pie={FOTO_HIST_2.pie} />
        {DE_DONDE_VIENE_NUEVO2.slice(5).map((p) => (
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
          <ConNegritas texto={CASA_NUEVO2[6]} fragmentos={["1.908 €/m²"]} />
        </p>

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
