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
 * NUEVO2 — Marín (O Morrazo).
 * Texto: Lote_O_Morrazo_Cursor_NUEVO2 (1).txt (APROBADO EDITORIALMENTE)
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Marín ocupa el extremo de O Morrazo más próximo a Pontevedra y ofrece una combinación que no se repite exactamente en los otros tres municipios.",
  "El casco es una pequeña ciudad portuaria, compacta y funcional. Puerto comercial y Escuela Naval Militar ocupan una parte decisiva del frente marítimo. Hacia el oeste, Portocelo, Mogor, Aguete y Loira cambian grúas y actividad portuaria por playas, pinares y vivienda residencial.",
  "Por eso Marín contiene dos experiencias que conviene no mezclar: casco para servicios y logística; costa occidental para playa y una vida más residencial.",
  "La proximidad a Pontevedra refuerza la primera. Hospital, comercio y servicios urbanos de mayor escala quedan dentro de desplazamientos cortos.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Un martes de noviembre el centro funciona con mercado, comercio, colegios, institutos, centro de salud, deporte, biblioteca y autobuses frecuentes hacia Pontevedra.",
  "Desde un piso céntrico se puede resolver a pie buena parte de la semana. La relación con Pontevedra es además lo bastante próxima como para incorporarla a trabajo, sanidad, compras o cultura sin convertir cada salida en una excursión.",
  "El puerto introduce una actividad que no desaparece en invierno. Grúas, contenedores, camiones y operaciones portuarias forman parte del paisaje funcional de determinadas calles.",
  "La Escuela Naval Militar añade otra presencia estable y ocupa una porción importante del frente urbano. Marín no tiene un paseo marítimo continuo de ocio delante del casco comparable al de Moaña.",
  "Para playa se sale hacia el oeste. Portocelo es la primera referencia y Mogor queda inmediatamente después. Aguete y Loira prolongan la costa residencial.",
  "Ese desplazamiento es corto, pero cambia la lógica: vivir en el centro no significa bajar directamente a una gran playa desde cualquier portal.",
  "En Aguete o Mogor se puede ganar jardín, tranquilidad y mar, pero la compra y buena parte de los servicios vuelven a requerir coche o bus.",
  "La sanidad es una ventaja funcional importante dentro de O Morrazo. Montecelo queda aproximadamente a 15 minutos desde la referencia municipal y la red de Pontevedra está muy próxima.",
  "Agosto llena las playas y alarga las terrazas, pero puerto, Naval, colegios y proximidad a Pontevedra sostienen una ciudad anual.",
  "El calendario festivo añade varias semanas de intensidad: Carmen en julio, Festa Corsaria en agosto y San Miguel/Danza das Espadas en septiembre. Una vivienda céntrica debe comprobarse también durante actividad, no solo un lunes tranquilo.",
] as const;

const CLIMA_NUEVO2 = [
  "Marín tiene una media estival alrededor de 20 °C y una invernal próxima a 10 °C.",
  "Frente a Mallorca, la principal diferencia es la humedad y la lluvia acumulada durante otoño e invierno. La vivienda necesita funcionar bien durante semanas mojadas.",
  "El verano es mucho más moderado y las playas de la ría ofrecen aguas habitualmente tranquilas, aunque claramente más frescas que el Mediterráneo.",
  "En el casco, la orientación puede ser tan importante como la cercanía al puerto. Una vivienda en sombra puede mantener sensación húmeda incluso sin estar en primera línea.",
  "En la costa occidental se añade salitre. En casas con jardín, drenaje y vegetación forman parte del mantenimiento.",
] as const;

const VIVIR_NUEVO2 = [
  "Marín es la opción más urbana y logística de O Morrazo después de mirar hacia Vigo desde Cangas o Moaña.",
  "El casco permite reducir coche para la vida básica y el bus facilita la relación con Pontevedra.",
  "La playa no desaparece, pero se convierte en salida corta. Para alguien que necesita arena literalmente a la puerta, la dirección concreta importa mucho.",
  "El puerto es una ventaja económica y una posible molestia residencial. Hay que aceptar que parte del frente marítimo trabaja.",
  "La proximidad hospitalaria cambia la tranquilidad logística respecto a Cangas o Bueu. Para quien prevé utilizar especialistas o valora mucho una respuesta sanitaria próxima, esa diferencia puede pesar más que tener el paseo marítimo delante de casa.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Marín creció entre pesca, instituciones históricas y un puerto que fue aumentando de escala.",
  "La industrialización portuaria transformó radicalmente el frente marítimo. Espacios que antes tenían otra relación con la costa pasaron a formar parte de una infraestructura comercial.",
  "La Escuela Naval Militar se instaló en Marín en 1943. Su presencia consolidó una relación institucional con la Armada y ocupó físicamente una parte decisiva de la fachada urbana.",
  "La huella actual es imposible de separar de la vida residencial: puerto y Naval explican empleo, movimientos, cierres y por qué la costa de ocio empieza realmente al oeste del casco.",
  "Mogor conserva otra capa mucho más antigua. Sus petroglifos pertenecen a la Edad del Bronce y la Pedra do Labirinto contiene uno de los pocos motivos laberínticos conocidos en la fachada atlántica europea.",
  "La particularidad es que ese patrimonio no está aislado en un museo urbano: aparece a pocos metros de las playas y forma parte del paisaje que hoy se utiliza para caminar y bañarse.",
  "La memoria de 1809 y la tradición marinera reaparecen en la Festa Corsaria y la Danza das Espadas. La celebración actual mantiene visibles episodios históricos y oficios ligados al mar.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "Portocelo es la primera playa importante al oeste del casco. Tiene arena protegida, pinar y servicios. Desde el centro es una salida corta, no necesariamente un paseo desde cualquier vivienda.",
  "Mogor añade playa y patrimonio rupestre. La posibilidad de combinar baño y visita a los petroglifos hace que el paisaje residencial tenga una profundidad distinta de una simple urbanización costera.",
  "Aguete incorpora playa, puerto deportivo y vivienda de costa. Loira continúa hacia el límite con Bueu con un ambiente más separado del casco.",
  "El corredor litoral permite encadenar Portocelo, Mogor, Aguete, Loira y otros arenales. El Concello está mejorando además el itinerario peatonal y ciclista entre el entorno urbano y Mogor, reforzando esa continuidad.",
  "Para caminar con más desnivel existe el Roteiro dos Cinco Miradoiros, de alrededor de 9 km y dificultad moderada, con unos 222 metros de subida. Es una salida de varias horas, no el paseo cotidiano.",
  "Hacia el interior, Lago de Castiñeiras y Cotorredondo cambian playa por bosque y miradores. El Lameira ofrece una escala fluvial más próxima a la villa.",
  "La separación funcional es clara: centro para servicios y frente portuario; playas occidentales para baño; monte y miradores para una salida deliberada.",
] as const;

const CASA_NUEVO2 = [
  "El casco ofrece pisos cerca de mercado, comercio y autobús. Para una vida sin mucho coche es la opción más sencilla.",
  "Ascensor y accesibilidad importan en edificios de distintas décadas. También aislamiento acústico: la proximidad al puerto debe comprobarse desde la vivienda y no inferirse únicamente por la calle.",
  "Hay que escuchar un lunes laborable. Camiones, operaciones portuarias y tráfico pueden cambiar mucho entre una fachada y otra.",
  "Hacia Portocelo y Mogor aparece vivienda más vinculada a la costa. Aguete y Loira añaden chalés, casas con jardín y una rutina más residencial.",
  "Allí se gana playa y tranquilidad a cambio de más coche para compra, centro y Pontevedra.",
  "En primera línea o cerca del mar conviene revisar salitre, carpinterías y ventilación. En casas, cubierta, drenaje, parcela y accesos.",
  "La orientación sigue siendo decisiva: vistas al mar no garantizan una casa soleada en invierno.",
  "Como referencia municipal, Marín se sitúa en 1.539 €/m².",
] as const;

const CASA_ADVERTENCIA_MICROZONA = [
  "Casco, Portocelo/Mogor y Aguete/Loira no son productos equivalentes.",
  "El centro maximiza servicios y acceso a Pontevedra, pero incorpora puerto y Naval. La costa occidental acerca playa y vivienda residencial, pero aumenta el coche.",
] as const;

const CASA_QUE_CONVIENE_REVISAR = [
  "Desde un piso céntrico, hacer andando mercado, comercio y parada de bus.",
  "Escuchar puerto y tráfico en un día laborable y con ventanas abiertas.",
  "Comprobar ascensor, accesibilidad, aislamiento y ventilación en edificios antiguos.",
  "En costa, revisar carpinterías, metales y señales de salitre.",
  "En una casa, comprobar cubierta, drenaje, parcela y acceso.",
  "Si la playa justifica la compra, hacer el trayecto real desde la vivienda hasta Portocelo, Mogor, Aguete o el arenal que se utilizaría normalmente.",
] as const;

const CASA_MERCADO_REVENTA = [
  "Marín dispone de una base residencial permanente reforzada por puerto, Naval y proximidad a Pontevedra.",
  "En el casco ayudan a la reventa ascensor, accesibilidad, buen aislamiento y facilidad de transporte.",
  "El ruido portuario puede reducir público incluso cuando la ubicación parece muy práctica.",
  "En la costa occidental, playa, parcela y vistas añaden atractivo, pero la propiedad debe conservar accesos y mantenimiento razonables.",
  "La cercanía a Pontevedra y al hospital es una ventaja fácil de explicar a futuros compradores.",
] as const;

const ENCAJA_SI_NUEVO2 = [
  "Encaja si Pontevedra y hospital deben quedar cerca sin renunciar a tener buenas playas a pocos minutos.",
  "También si se valora una ciudad pequeña, anual y funcional más que una villa orientada principalmente al paseo marítimo.",
  "Puede encajar especialmente si se quiere elegir entre piso práctico en el casco y vivienda residencial hacia Mogor o Aguete.",
  "Y encaja si se acepta que el puerto forma parte de la economía y también del paisaje acústico de algunas calles.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Encaja peor si se exige silencio en el centro o una fachada urbana dedicada casi por completo al ocio marítimo.",
  "También si se quiere bajar andando a una gran playa desde cualquier vivienda céntrica.",
  "Puede resultar menos adecuado si la prioridad es una costa más natural y menos portuaria como experiencia diaria.",
  "Y pierde parte de su sentido si se compra en Aguete esperando mantener exactamente la autonomía peatonal del casco.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Pasar un lunes laborable en la calle de la vivienda y escuchar puerto y tráfico.",
  "Hacer a pie la compra y los servicios que se utilizarían desde un piso céntrico.",
  "Probar el bus o el trayecto hacia Pontevedra y Montecelo.",
  "Si se mira la costa occidental, hacer desde la vivienda el recorrido a playa y después a compra y centro.",
  "Visitar una casa después de lluvia para comprobar drenaje, humedad y accesos.",
  "Y recorrer el corredor de Portocelo, Mogor y Aguete para comprobar si esa costa compensa realmente el coche adicional.",
] as const;

const CASA_LEYENDA_COMPACTA =
  "A: ≤5 min de la costa · B: 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Estimaciones comparativas; conviene contrastarlas con la oferta del momento.";

const CASA_FILA_PRECIOS = {
  municipio: "Marín",
  a2: "130.046 €",
  a3: "180.063 €",
  b2: "105.037 €",
  b3: "145.436 €",
  m2: "1.539 €/m²",
} as const;

const FOTO_COMO_1 = {
  src: "/fotos/o-morrazo/marin-escuela-naval.jpg",
  pie: "Escuela Naval Militar, parte decisiva del frente urbano",
} as const;

const FOTO_HIST_1 = {
  src: "/fotos/o-morrazo/marin-mogor-laberinto.jpg",
  pie: "Laberinto de Mogor, petroglifo de la Edad del Bronce",
} as const;

const FOTO_HIST_2 = {
  src: "/fotos/o-morrazo/marin-danza-espadas.jpg",
  pie: "El puerto de Marín, escenario de trabajo y de las fiestas de San Miguel",
} as const;

const FOTO_MAR_1 = {
  src: "/fotos/o-morrazo/marin-portocelo.jpg",
  pie: "Portocelo, primera playa al oeste del casco",
} as const;

const FOTO_MAR_2 = {
  src: "/fotos/o-morrazo/marin-aguete.jpg",
  pie: "Aguete: playa, puerto deportivo y costa residencial",
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

export default function Nuevo2MarinPage() {
  const ficha = municipioPorSlug("marin");
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
        <p key={COMO_SE_VIVE_NUEVO2[2].slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          {COMO_SE_VIVE_NUEVO2[2]}
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
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={COMO_SE_VIVE_NUEVO2[7]} fragmentos={["15 minutos"]} />
        </p>
        <p key={COMO_SE_VIVE_NUEVO2[8].slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          {COMO_SE_VIVE_NUEVO2[8]}
        </p>
        <p key={COMO_SE_VIVE_NUEVO2[9].slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          {COMO_SE_VIVE_NUEVO2[9]}
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
        {DE_DONDE_VIENE_NUEVO2.slice(0, 5).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_HIST_1.src} pie={FOTO_HIST_1.pie} />
        {DE_DONDE_VIENE_NUEVO2.slice(5, 7).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_HIST_2.src} pie={FOTO_HIST_2.pie} />
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Mar, río y camino" varianteTarjetaV1>
        {MAR_RIO_CAMINO_NUEVO2.slice(0, 2).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_MAR_1.src} pie={FOTO_MAR_1.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[2]}</p>
        <Foto src={FOTO_MAR_2.src} pie={FOTO_MAR_2.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(3).map((p) => (
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
          <ConNegritas texto={CASA_NUEVO2[7]} fragmentos={["1.539 €/m²"]} />
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
