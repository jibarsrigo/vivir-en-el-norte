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
 * NUEVO2 — A Pobra do Caramiñal (Barbanza e Noia).
 * Texto: Barbanza_e_Noia_SEGUNDA_CERTIFICACION_INDEPENDIENTE_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Barbanza e Noia reúne tres paisajes residenciales en una misma península: la orilla norte de la ría de Arousa, el litoral atlántico de Porto do Son y el fondo de la ría de Muros e Noia. Rianxo, Boiro, A Pobra do Caramiñal y Ribeira encadenan villas de Arousa con distinta escala; Porto do Son gira hacia una costa más abierta y Noia funciona como villa histórica y de servicios en la cabecera de la otra ría. La Serra do Barbanza —el macizo montañoso que ocupa el centro de la península— atraviesa el territorio, de modo que en pocos kilómetros se pasa de playas abrigadas y paseos de ría a laderas, monte y arenales expuestos al Atlántico.",
  "A Pobra do Caramiñal queda entre Boiro y Ribeira, con la ría de Arousa delante y A Curota —la montaña-mirador que domina esta parte de la Serra do Barbanza— inmediatamente detrás. El casco reúne mercado, salud, cultura, puerto y paseo; las playas de Cabío, Lombiña y A Corna amplían el baño; hacia el valle del río Pedras, conocido por sus pozas y cascadas entre granito, y hacia la sierra aparecen casas más dispersas.",
  "Dentro de la zona ofrece una combinación poco común: tamaño de villa, hospital comarcal a unos diez minutos y acceso muy rápido tanto a playa de ría como a monte. La contrapartida es una oferta comercial menor que Ribeira y más coche si se vive en ladera.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "A Pobra tiene un casco suficientemente compacto para hacer buena parte de la semana andando. Mercado, centro de salud, farmacias, biblioteca, el Museo Valle-Inclán —dedicado al escritor Ramón María del Valle-Inclán y situado en la histórica Torre de Bermúdez—, el Cine-Teatro Elma, pequeño comercio, restauración y el frente marítimo quedan próximos.",
  "El puerto y el paseo forman parte del mismo tejido urbano. Os Areos y el borde de la ría acercan el agua al centro, mientras las playas más claras para un baño prolongado —Cabío, Lombiña o A Corna— requieren un desplazamiento corto.",
  "La proximidad del Hospital do Barbanza es una ventaja residencial importante. Desde el núcleo se llega aproximadamente en diez minutos, una diferencia clara respecto a Rianxo, Porto do Son o Noia.",
  "Ribeira completa compras, hospital y una oferta urbana mayor. La relación es tan cercana que algunas necesidades pueden resolverse allí sin que se sienta como un viaje largo.",
  "Hacia las laderas de A Curota y Río Pedras cambia la vida. Aparecen casas con vistas, terreno y mucha más naturaleza inmediata, pero el coche entra en prácticamente todos los recados.",
  "En verano la costa, Cabío y el centro reciben más visitantes. Procesiones, verbenas y actividades culturales aumentan ruido y aparcamiento en fechas concretas. Una vivienda en el centro debe medirse también durante esas semanas.",
  "Fuera de temporada la villa mantiene actividad. No funciona como una urbanización vacacional: mercado, colegio, cultura y puerto siguen presentes, y esa continuidad es una de sus fortalezas como residencia anual.",
] as const;

const CLIMA_NUEVO2 = [
  "La media estival ronda 19,5 °C y la invernal unos 10 °C. El verano es mucho menos caluroso que Mallorca y las noches suelen ser más frescas.",
  "La referencia climática utilizada sitúa la lluvia alrededor de 1.350 mm en unos 120 días al año. El cambio más notable frente a Mallorca es la continuidad de humedad y nubes en otoño e invierno.",
  "La costa de Arousa está protegida, pero A Pobra registra más exposición al viento que Rianxo o Boiro en algunas orientaciones. La posición de la casa respecto a la ría y la sierra importa.",
  "A Curota se eleva con rapidez detrás del casco. En laderas y valles puede haber diferencias claras de sombra, escorrentía y ventilación a muy poca distancia.",
  "La consecuencia para una vivienda es concreta: revisar orientación, cubierta, canalones, drenaje y ventilación resulta tan importante como las vistas.",
] as const;

const VIVIR_NUEVO2 = [
  "A Pobra permite vivir a una escala pequeña sin quedar lejos de hospital. Para una residencia permanente, esa combinación reduce uno de los principales peajes de las villas pequeñas.",
  "La playa no siempre empieza en la puerta del casco, pero Cabío, Lombiña y A Corna quedan suficientemente cerca para usarlas con frecuencia.",
  "El monte entra con la misma facilidad que el mar. Río Pedras y A Curota permiten pasar de paseo marítimo a agua dulce, granito y vistas en pocos minutos.",
  "La vida cultural tiene un anclaje local fuerte gracias a la relación con Valle-Inclán, el Museo, el teatro y la programación municipal. No convierte la villa en una ciudad, pero añade actividad más allá del verano.",
  "Una casa en ladera puede ofrecer una imagen espectacular de la ría y, al mismo tiempo, obligar a coger el coche para comprar pan. Esa diferencia entre paisaje y autonomía debe medirse antes de decidir.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "A Pobra do Caramiñal se formó a partir de dos antiguos núcleos, A Pobra do Deán y O Caramiñal, que terminaron unidos. Esa doble procedencia ayuda a entender una villa con varios focos históricos en vez de un único centro monumental.",
  "La Torre de Bermúdez es un edificio señorial del siglo XVI y hoy alberga el Museo Valle-Inclán. Se menciona porque conecta la arquitectura histórica del casco con Ramón María del Valle-Inclán, uno de los escritores españoles más importantes del cambio entre los siglos XIX y XX.",
  "Valle-Inclán pasó parte de su vida vinculado a A Pobra y situó ambientes gallegos en muchas de sus obras. El museo conserva esa relación y explica por qué su nombre aparece de forma recurrente en la vida cultural local.",
  "Un pazo es una antigua casa señorial gallega, normalmente de piedra y vinculada a una finca. La presencia de pazos y casas históricas recuerda que el municipio combinó propiedad rural, comercio y actividad marítima.",
  "La otra gran explicación del lugar es geográfica. A Curota es una montaña-mirador de la Serra do Barbanza que domina Arousa; desde sus alturas se entiende cómo la villa quedó comprimida entre mar y sierra.",
  "Río Pedras baja desde esa sierra formando pozas y cascadas sobre granito. Se menciona porque no es solo un atractivo natural: muestra cómo la montaña aporta agua dulce y relieve a una villa que desde el paseo parece exclusivamente marítima.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "Cabío es una de las playas más utilizables del municipio. Tiene arena, pinar y agua de ría relativamente calmada. En verano el aparcamiento puede convertirse en el principal límite práctico.",
  "Lombiña y A Corna amplían las posibilidades de baño. La marea modifica la anchura de arena y el agua ronda aproximadamente 18–20 °C en verano.",
  "El paseo y el puerto permiten caminar junto al agua desde el propio casco sin preparar una salida. Es el recorrido cotidiano más sencillo y llano.",
  "El río Pedras ofrece una experiencia completamente distinta: pozas y cascadas de agua dulce entre granito. El acceso y el baño requieren más cuidado que una playa urbana; las rocas pueden ser resbaladizas y el caudal cambia con la lluvia.",
  "A Curota es una salida de monte y mirador, no un paseo urbano. La carretera gana mucha altura en pocos kilómetros y desde arriba se observan Arousa y buena parte de la península.",
  "Vivir aquí permite alternar tres tipos de agua y terreno —paseo de ría, playa y río de montaña—, pero solo el primero está integrado de forma inmediata en el núcleo.",
] as const;

const CASA_NUEVO2 = [
  "A Pobra ofrece pisos y casas en el casco, vivienda próxima a la costa y chalés o casas con finca en las laderas.",
  "En el centro, la principal ventaja es poder caminar a mercado, salud, cultura, restauración y paseo. En edificios antiguos conviene revisar ascensor, accesibilidad, cubierta comunitaria, aislamiento y humedad.",
  "Las viviendas próximas al puerto y al frente de ría deben revisarse por salitre y ruido. Hay calles muy tranquilas a pocos minutos de otras con más tráfico o actividad; la dirección concreta importa más que la etiqueta “centro”.",
  "Cabío y otras zonas próximas a playa pueden resultar muy atractivas como residencia, pero conviene visitarlas en agosto para entender ocupación, aparcamiento y movimiento real.",
  "Hacia Río Pedras o las laderas aparecen casas con parcela y vistas. La compra debe incluir una revisión de pendiente, muros, escorrentía, acceso de vehículos y horas de sol. Una vista abierta no garantiza una finca fácil de mantener.",
  "En una casa de piedra hay que revisar cubierta, drenaje, ventilación, saneamiento y aislamiento. La humedad puede proceder tanto de lluvia como del terreno de una ladera.",
] as const;

const CASA_ADVERTENCIA_MICROZONA = [
  "El casco compra autonomía; Cabío compra playa; las laderas compran vistas, parcela y monte. Esas tres ventajas no suelen reunirse en la misma vivienda.",
] as const;

const CASA_MERCADO_REVENTA = [
  "La proximidad al Hospital do Barbanza y la condición de villa anual amplían la base residencial. En reventa ayudan accesibilidad, buen estado, aparcamiento y cercanía a servicios. En ladera pesan especialmente acceso, orientación, drenaje y facilidad de mantenimiento.",
] as const;

const ENCAJA_SI_NUEVO2 = [
  "Se busca villa pequeña con hospital comarcal muy próximo.",
  "Se quiere alternar ría, playa y monte sin grandes desplazamientos.",
  "Cultura local y vida anual importan más que disponer del comercio de una ciudad.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Se necesita gran oferta comercial dentro del propio núcleo.",
  "Una casa en ladera no puede depender del coche.",
  "Viento, humedad o mantenimiento de una finca inclinada serían problemas importantes.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Hacer la semana a pie desde una vivienda del casco.",
  "Probar Cabío en agosto y medir aparcamiento.",
  "Recorrer el trayecto al Hospital do Barbanza.",
  "Visitar casas de ladera después de lluvia y comprobar drenaje y sol.",
  "Escuchar el centro durante las principales fiestas antes de comprar.",
] as const;

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m².";

const CASA_FILA_PRECIOS = {
  municipio: "A Pobra do Caramiñal",
  a2: "128.102 €",
  a3: "177.372 €",
  b2: "103.467 €",
  b3: "143.262 €",
  m2: "1.516 €/m²",
} as const;

const COMPARA_HREF_NUEVO2 = "/compara/?vs=a-pobra-do-caraminal,rianxo,boiro,ribeira,porto-do-son,noia";

const FOTO_COMO_1 = {
  src: "/fotos/barbanza-e-noia/pobra-casco.jpg",
  pie: "Casco de piedra de A Pobra do Caramiñal",
} as const;

const FOTO_COMO_2 = {
  src: "/fotos/barbanza-e-noia/pobra-curota.jpg",
  pie: "A Curota, mirador sobre las rías",
} as const;

const FOTO_HIST_1 = {
  src: "/fotos/barbanza-e-noia/pobra-torre-bermudez.jpg",
  pie: "Torre de Bermúdez y Museo Valle-Inclán",
} as const;

const FOTO_HIST_2 = {
  src: "/fotos/barbanza-e-noia/pobra-puerto.jpg",
  pie: "Puerto de A Pobra",
} as const;

const FOTO_MAR_1 = {
  src: "/fotos/barbanza-e-noia/pobra-pozas.jpg",
  pie: "Pozas de Río Pedras, agua dulce entre granito",
} as const;

const FOTO_MAR_2 = {
  src: "/fotos/barbanza-e-noia/pobra-cabio.jpg",
  pie: "Cabío, playa de ría bajo pinar",
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

export default function Nuevo2APobraDoCaraminalPage() {
  const ficha = municipioPorSlug("a-pobra-do-caraminal");
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
        {DE_DONDE_VIENE_NUEVO2.slice(0, 2).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_HIST_1.src} pie={FOTO_HIST_1.pie} />
        {DE_DONDE_VIENE_NUEVO2.slice(2, 4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_HIST_2.src} pie={FOTO_HIST_2.pie} />
        {DE_DONDE_VIENE_NUEVO2.slice(4).map((p) => (
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
