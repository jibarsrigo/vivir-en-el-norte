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
 * NUEVO2 — Meaño (O Salnés).
 * Texto: Lote_O_Salnes_REVISION_INTEGRAL_CERTIFICADA_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "O Salnés reúne villa histórica, viñedo, costa de ría, isla y ciudad en un espacio muy compacto alrededor de Arousa. Meaño ocupa el interior de viñedos y parroquias; Cambados combina casco histórico, vino y marisqueo; A Illa de Arousa vive rodeada de mar y depende de un único puente; Vilanova mezcla villa, pequeñas playas y parroquias de viñedo; Vilagarcía aporta hospital, tren, puerto y la mayor concentración de servicios. Las distancias son cortas, pero la posibilidad de vivir a pie, el acceso al baño y el peso del coche cambian mucho entre municipios.",
  "Meaño ocupa el interior inmediato entre Cambados, Sanxenxo y la ría. Dena concentra la parte más práctica de la vida cotidiana; Xil, Padrenda, Simes, Cobas y otras parroquias reparten casas y viñedos por un territorio más disperso.",
  "El mar está cerca, pero no organiza la rutina: A Lanzada es una salida frecuente en coche, no una playa cotidiana a pie. La principal diferencia residencial está entre vivir cerca de Dena o ganar terreno y paisaje a cambio de más desplazamientos.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Meaño no tiene un casco que concentre toda la vida municipal. La semana cambia bastante según la vivienda esté en Dena o en una de las parroquias de viñedo.",
  "Dena es el punto más cómodo para una vida práctica. Allí se concentran centro de salud, farmacia, supermercado, colegio, pequeño comercio y bares. Vivir cerca permite encadenar algunos recados sin convertir cada necesidad en un trayecto en coche.",
  "Fuera de Dena, las distancias siguen siendo cortas en kilómetros, pero la rutina se fragmenta. Desde Xil, Simes, Padrenda o Cobas puede ser necesario conducir para comprar, llevar a alguien a una actividad, acudir al centro de salud o enlazar con Cambados, Sanxenxo o Vilagarcía. Una casa puede estar a pocos minutos de todo y, al mismo tiempo, no tener casi nada a pie.",
  "Cambados y Sanxenxo amplían comercio, restauración y servicios. Vilagarcía añade hospital, tren y compras grandes. Desde Dena, el Hospital do Salnés queda aproximadamente a veinte minutos. Esta proximidad a varios municipios reduce la sensación de aislamiento, pero no elimina la necesidad de coche.",
  "La vida es anual y el interior recibe mucha menos presión turística que la costa de Sanxenxo. En julio, San Cristovo de Dena y la Festa do Viño concentran música y actividad durante unos días. En agosto, las fiestas parroquiales añaden verbenas y más coches en lugares que el resto del año pueden ser muy tranquilos.",
  "La elección de vivienda debe comprobarse con recorridos reales. No basta con que un anuncio diga “a diez minutos de Cambados”: importa si para salir hay una carretera estrecha, si el supermercado obliga a desviarse, si la casa pierde sol pronto y si cada recado necesita arrancar el coche.",
] as const;

const CLIMA_NUEVO2 = [
  "Meaño tiene un verano mucho más suave que Mallorca. La media estival ronda los 19,5 °C y la invernal los 10 °C.",
  "La diferencia más importante está en la frecuencia de lluvia y humedad. La referencia climática utilizada para el municipio ronda 1.400 mm anuales y más de cien días con precipitación. Entre otoño e invierno el terreno puede permanecer húmedo durante varios días seguidos.",
  "El valle y las laderas hacen que dos casas cercanas tengan comportamientos distintos. Una orientación abierta al sur puede recibir bastante luz; otra vivienda protegida por vegetación o relieve puede quedarse en sombra antes de lo esperado durante los meses cortos.",
  "El verano permite caminar, trabajar en una parcela o permanecer fuera durante más horas sin el calor persistente de Mallorca. A cambio, el tiempo es menos estable y una semana de vacaciones o de playa no tiene la misma garantía de sol.",
  "En una casa importan más que en Mallorca la ventilación, la entrada real de sol, el estado de cubierta y canalones, el drenaje de la parcela y la capacidad de secar la vivienda después de periodos húmedos.",
] as const;

const VIVIR_NUEVO2 = [
  "Mudarse a Meaño cambia la forma de organizar los recados. El espacio y la tranquilidad pueden aumentar, pero la vida cotidiana se apoya más en desplazamientos cortos por carretera.",
  "Dena reduce bastante ese inconveniente. Fuera de Dena, compra, colegio, actividades, playa y salidas hacia otros municipios suelen repartirse en direcciones distintas.",
  "La playa no forma parte espontánea de la puerta de casa. A Lanzada puede utilizarse con frecuencia porque queda cerca, pero una tarde de baño implica conducir, aparcar y, en verano, asumir tráfico hacia la costa.",
  "El tiempo libre propio del municipio está más ligado a caminos entre viñedos, pequeños cursos de agua, molinos y laderas del Castrove. Quien valore salir de casa hacia un entorno rural puede encontrar aquí una ventaja que no ofrecen las villas más urbanas.",
  "La integración cotidiana también es distinta. La vida de parroquia, las bodegas, las fincas y el gallego tienen más presencia que en un núcleo turístico. Para una persona que prefiera anonimato urbano o actividad continua de calle, el municipio puede sentirse demasiado disperso.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Meaño se formó como un territorio de parroquias, no como una villa que después se extendió. Esa organización sigue siendo visible en la distribución de iglesias, aldeas, fincas y pequeñas carreteras.",
  "San Xoán de Meaño y Santa Eulalia de Xil son ejemplos de la continuidad histórica de esas parroquias. Su presencia ayuda a entender por qué el municipio conserva varios núcleos reconocibles en lugar de un único centro dominante.",
  "Los pazos —antiguas casas señoriales gallegas, normalmente de piedra y vinculadas a propiedades agrícolas— muestran otra capa de esa historia. No son solo edificios aislados: recuerdan una organización del territorio basada en finca, producción agraria y propiedad dispersa.",
  "El Albariño transformó esa agricultura en una economía especializada. Meaño forma parte de la subzona Val do Salnés de la Denominación de Origen Rías Baixas. Las cepas elevadas en emparrado —parras sostenidas por postes para alejarlas de la humedad del suelo— explican buena parte del paisaje actual.",
  "La Festa do Viño y las bodegas mantienen esa actividad dentro de la vida contemporánea. Aquí el viñedo no es únicamente paisaje: condiciona caminos, parcelas, trabajo estacional y el tipo de vivienda que aparece en muchas parroquias.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "Meaño toca la ensenada de Dena, pero no debe venderse como un municipio de playa cotidiana.",
  "A Lanzada queda aproximadamente a diez o doce minutos en coche desde Dena. Es un gran arenal atlántico, abierto al viento y al oleaje. Puede ser una salida frecuente durante buena parte del año, pero no una prolongación peatonal de la vivienda.",
  "La diferencia entre ría y océano importa. La ensenada de Dena pertenece a un paisaje protegido y de marea; A Lanzada ofrece un baño mucho más expuesto. Elegir Meaño no significa tener que renunciar al mar, sino aceptar que el acceso habitual será en coche.",
  "Dentro del municipio, el río da Chanca y sus molinos ofrecen un paseo más coherente con la vida local. Son recorridos de ribera y caminos rurales donde el firme y la humedad pueden variar; no equivalen a un paseo marítimo pavimentado y llano.",
  "Las laderas hacia el Monte Castrove permiten ganar altura y vistas hacia las rías. Son salidas de monte, con pendiente y terreno más irregular. Para alguien que quiera caminar a diario sin desnivel, no sustituyen una senda urbana.",
  "La consecuencia residencial es clara: aquí se puede tener naturaleza inmediata y playa próxima, pero normalmente no se combinan ambas cosas en un mismo recorrido a pie desde casa.",
] as const;

const CASA_NUEVO2 = [
  "Comprar en Meaño significa elegir primero entre proximidad a Dena y vida más rural. Esa decisión pesa más que unos pocos kilómetros de diferencia en el anuncio.",
  "En Dena aparecen pisos y viviendas próximas a los servicios. Un piso bien situado puede permitir hacer compra pequeña, farmacia o centro de salud sin coche. La contrapartida es tener menos parcela y una relación menos directa con el paisaje de viñedo que en otras parroquias.",
  "En Xil, Simes, Padrenda, Cobas y otras zonas rurales predominan casas de piedra, chalés y propiedades con terreno. Se gana jardín, privacidad y espacio para aparcar, pero cada necesidad cotidiana puede exigir coche. Antes de comprar conviene hacer una semana “en seco”: simular compra, salud, colegio, playa y un trayecto hacia Vilagarcía.",
  "En una casa antigua hay que revisar cubierta, canalones, ventilación, aislamiento, carpinterías, saneamiento y señales de humedad. Una pared recién pintada no sustituye comprobar la vivienda después de varios días de lluvia. También conviene preguntar cómo se calienta la casa y cuánto cuesta mantenerla seca en invierno.",
  "La parcela merece una revisión propia. Importan pendiente, drenaje, muros, cierres, árboles, acceso de vehículos y tiempo de mantenimiento. Un terreno grande puede ser una ventaja si se usa; si no, puede convertirse en trabajo y gasto.",
  "La orientación es especialmente importante en laderas y fondos de valle. Hay que observar a qué hora deja de entrar el sol en invierno, no solo dónde está el sur en un plano. Una vivienda luminosa en julio puede tener pocas horas de sol directo en diciembre.",
  "La fibra es parcial y debe comprobarse en la dirección exacta. Para quien trabaje desde casa, una respuesta genérica del municipio no es suficiente.",
  "Precio medio municipal utilizado: 1.013 €/m².",
] as const;

const CASA_ADVERTENCIA_MICROZONA = [
  "Una vivienda anunciada simplemente como “Meaño” puede ofrecer una semana muy distinta según esté junto a Dena, en una parroquia con buen acceso o en una ladera más aislada. El precio debe leerse junto con tiempo de coche, sol de invierno, estado de la casa y mantenimiento de la parcela.",
] as const;

const CASA_MERCADO_REVENTA = [
  "Es un mercado donde la propiedad concreta pesa mucho. Buen acceso, parcela manejable, orientación favorable, vivienda seca y proximidad razonable a Dena amplían el público futuro. Una casa grande pero húmeda, oscura, difícil de mantener o con acceso incómodo puede ser más lenta de vender aunque el precio por metro parezca atractivo.",
] as const;

const ENCAJA_SI_NUEVO2 = [
  "Se busca casa, terreno o viñedo y se acepta que el coche forme parte normal de la semana.",
  "Resulta suficiente tener A Lanzada y Cambados a pocos minutos en lugar de vivir con el mar delante.",
  "Se valora un entorno rural anual, poco dependiente del turismo, y se prefiere espacio exterior a una plaza compacta llena de servicios.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Se quiere resolver gran parte de la semana andando desde casa.",
  "La playa marítima debe quedar a pie o formar parte espontánea de cada tarde.",
  "Una vivienda con humedad, parcela exigente, mala orientación o internet incierto sería una carga difícil de asumir.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Hacer los recados básicos desde la vivienda candidata y contar trayectos reales en coche.",
  "Visitar después de varios días húmedos y revisar luz, cubierta, ventilación, drenaje y accesos.",
  "Probar la carretera hacia A Lanzada en temporada alta.",
  "Medir el trayecto al Hospital do Salnés y a los servicios que se utilizarían cada semana.",
  "Confirmar fibra en la dirección exacta.",
] as const;

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m².";

const CASA_FILA_PRECIOS = {
  municipio: "Meaño",
  a2: "85.599 €",
  a3: "118.521 €",
  b2: "69.137 €",
  b3: "95.729 €",
  m2: "1.013 €/m²",
} as const;

const COMPARA_HREF_NUEVO2 = "/compara/?vs=meano,cambados,a-illa-de-arousa,vilanova-de-arousa,vilagarcia-de-arousa";

const FOTO_COMO_1 = {
  src: "/fotos/o-salnes/meano-emparrado.jpg",
  pie: "Meaño: viñedos en emparrado entre parroquias",
} as const;

const FOTO_COMO_2 = {
  src: "/fotos/o-salnes/meano-dena.jpg",
  pie: "Dena, el núcleo práctico del municipio",
} as const;

const FOTO_HIST_1 = {
  src: "/fotos/o-salnes/meano-iglesia-san-xoan.jpg",
  pie: "San Xoán de Meaño, piedra medieval en el valle",
} as const;

const FOTO_HIST_2 = {
  src: "/fotos/o-salnes/meano-parroquia.jpg",
  pie: "Santa Eulalia de Xil, parroquia entre viñas",
} as const;

const FOTO_MAR_1 = {
  src: "/fotos/o-salnes/meano-castrove.jpg",
  pie: "El Monte Castrove detrás de los viñedos",
} as const;

const FOTO_MAR_2 = {
  src: "/fotos/o-salnes/meano-pazo.jpg",
  pie: "Pazo do Monte en Padrenda, piedra señorial entre parcelas",
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

export default function Nuevo2MeanoPage() {
  const ficha = municipioPorSlug("meano");
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
          <ConNegritas texto={CASA_NUEVO2[7]} fragmentos={["1.013 €/m²"]} />
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
