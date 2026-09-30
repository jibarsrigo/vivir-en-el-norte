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
 * NUEVO2 — Ribeira (Barbanza e Noia).
 * Texto: Barbanza_e_Noia_SEGUNDA_CERTIFICACION_INDEPENDIENTE_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Barbanza e Noia reúne tres paisajes residenciales en una misma península: la orilla norte de la ría de Arousa, el litoral atlántico de Porto do Son y el fondo de la ría de Muros e Noia. Rianxo, Boiro, A Pobra do Caramiñal y Ribeira encadenan villas de Arousa con distinta escala; Porto do Son gira hacia una costa más abierta y Noia funciona como villa histórica y de servicios en la cabecera de la otra ría. La Serra do Barbanza —el macizo montañoso que ocupa el centro de la península— atraviesa el territorio, de modo que en pocos kilómetros se pasa de playas abrigadas y paseos de ría a laderas, monte y arenales expuestos al Atlántico.",
  "Ribeira ocupa el extremo occidental de la ría de Arousa y funciona como centro comarcal. El casco concentra hospital, puerto, comercio y equipamientos; Palmeira, Aguiño, Castiñeiras y otras parroquias añaden núcleos marineros; Corrubedo lleva el municipio hasta la costa atlántica y su gran complejo dunar.",
  "Dentro de Barbanza e Noia es la opción con mayor autonomía cotidiana. Se puede vivir con hospital y buena parte de los servicios a pocos minutos, mientras el paisaje más atlántico exige desplazarse hacia Corrubedo o Aguiño.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Ribeira funciona más como ciudad pequeña que como villa. Hospital, centros de salud, supermercados, mercado, colegios, institutos, biblioteca, auditorio, conservatorio, piscina, comercio y restauración permiten resolver una parte muy amplia de la semana sin salir del municipio.",
  "El puerto pesquero condiciona el centro. La lonja —el edificio donde se subasta y comercializa pescado recién desembarcado—, los barcos y el transporte asociado forman parte del paisaje laboral. Vivir cerca significa aceptar actividad real de puerto, no solo vistas al mar.",
  "Coroso es la playa más fácil de integrar en la rutina del casco. El paseo enlaza zonas urbanas con arena y permite caminar o bañarse sin coger el coche desde muchas calles.",
  "Palmeira, Aguiño y Castiñeiras ofrecen núcleos más pequeños. Allí se puede ganar proximidad al mar o una escala más tranquila, aunque parte de la autonomía peatonal del centro disminuye.",
  "El Hospital do Barbanza está en el municipio y queda aproximadamente a cinco minutos del centro. Es la mayor ventaja sanitaria de toda la zona.",
  "No hay tren. Para Santiago y el aeropuerto se depende de carretera y autobús; el aeropuerto ronda los cincuenta minutos. Esa carencia pesa menos en la semana ordinaria que en viajes frecuentes.",
  "En verano aumentan visitantes, playas y fiestas. La Festa da Dorna, una celebración popular de julio nacida en Ribeira, toma su nombre de la dorna —una embarcación tradicional de pesca de las rías gallegas— y combina peñas, humor, pruebas festivas y actividades relacionadas con embarcaciones. Durante varios días transforma el centro; si se compra vivienda céntrica, conviene conocerla.",
] as const;

const CLIMA_NUEVO2 = [
  "Ribeira mantiene una media estival en torno a 19,5 °C y un invierno próximo a 10 °C.",
  "La referencia climática utilizada la sitúa entre los municipios relativamente menos lluviosos de la zona, alrededor de 1.250 mm y unos 118 días al año. Sigue siendo un clima mucho más húmedo que Mallorca.",
  "El viento cambia bastante dentro del propio municipio. El casco y Coroso miran a una ría más protegida; Corrubedo y Aguiño reciben una influencia atlántica mucho más directa.",
  "Por eso no tiene sentido hablar de “el clima de Ribeira” sin mirar microzona. Una casa orientada al océano puede sufrir más salitre y viento que un piso resguardado en el centro.",
  "El verano es fresco y cómodo para dormir, caminar y hacer vida exterior. El agua varía entre la ría y el Atlántico: Coroso es más calmado; Corrubedo tiene mayor oleaje y exposición.",
] as const;

const VIVIR_NUEVO2 = [
  "Ribeira es el lugar de la zona donde menos concesiones hay que hacer en servicios. Hospital, instituto, cultura, deporte y compras están dentro del municipio.",
  "La contrapartida es que el centro es más funcional que pintoresco. Hay tráfico, puerto y una trama urbana desigual. Quien busque la armonía de una villa histórica puede preferir Noia o A Pobra.",
  "La variedad de costa es una ventaja enorme. Se puede tener playa urbana en Coroso y, en el mismo municipio, conducir a dunas, lagunas y océano abierto en Corrubedo.",
  "El verano aumenta bastante la presión en playas y núcleos costeros, pero la ciudad mantiene actividad propia el resto del año. No depende del turismo para funcionar.",
  "La elección residencial debe distinguir claramente entre centro, Coroso, núcleos marineros y costa atlántica. El municipio es demasiado diverso para que una sola descripción sirva para todas sus viviendas.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Ribeira creció alrededor de la pesca y de un puerto que acabó convirtiéndose en uno de los grandes centros de desembarque de Galicia. La lonja, los muelles y la flota explican mejor la ciudad actual que un casco monumental.",
  "La actividad pesquera generó empleo directo y también conserveras, talleres, transporte, comercio y servicios. Esa red explica por qué Ribeira desarrolló una escala urbana mayor que las villas vecinas.",
  "El Dolmen de Axeitos muestra una historia mucho más antigua. Un dolmen es una tumba megalítica construida con grandes losas de piedra durante la Prehistoria. Axeitos conserva cámara y corredor y se menciona porque demuestra que el territorio estuvo ocupado miles de años antes del crecimiento portuario.",
  "El Castro da Cidá es un asentamiento fortificado de la Edad del Hierro situado en una altura. Un castro era una aldea protegida por defensas; desde su emplazamiento se controlaba visualmente buena parte de la costa.",
  "Corrubedo explica otra parte del municipio. Su parque natural protege una gran duna móvil, playas, marismas y dos lagunas: Carregal, de influencia salina, y Vixán, de agua dulce. Se menciona porque esa costa abierta contrasta radicalmente con el puerto y la ría del centro.",
  "El archipiélago de Sálvora pertenece al municipio y forma parte del Parque Nacional das Illas Atlánticas de Galicia. Sálvora protege la entrada norte de la ría de Arousa y conserva faro, antigua aldea y memoria de naufragios. No es una playa cotidiana: es una salida marítima concreta y regulada.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "Coroso es la playa cotidiana del núcleo. Tiene paseo, arena de ría y agua generalmente más tranquila que la fachada atlántica.",
  "Río Azor, Castiñeiras y Aguiño añaden otras playas y tramos costeros. El carácter cambia progresivamente a medida que se avanza hacia la boca de la ría.",
  "Corrubedo es una salida distinta. El Parque Natural do Complexo Dunar de Corrubedo e Lagoas de Carregal e Vixán protege dunas, lagunas y una larga fachada de playas abiertas al Atlántico. Allí el viento y el oleaje tienen más peso.",
  "El paseo urbano puede prolongarse desde el Malecón y el puerto hacia Coroso y otras zonas costeras. Es el recorrido más fácil de repetir sin coche.",
  "El río Artes ofrece una ruta fluvial más larga, con vegetación de ribera y molinos hasta el entorno de la laguna de Carregal. Es una salida de varias horas, no un paseo urbano corto.",
  "Sálvora requiere barco autorizado o excursión organizada. Su interés reside precisamente en salir del tejido urbano y entender la boca de Arousa desde una isla protegida.",
] as const;

const CASA_NUEVO2 = [
  "Ribeira tiene el mercado más diverso de la zona. Se puede comprar piso en el centro, vivienda cerca de Coroso, casa en Palmeira o Aguiño y propiedad más dispersa cerca de la costa atlántica.",
  "En el centro, la gran ventaja es la autonomía: hospital, mercado, comercio, colegios y servicios pueden quedar a pie. En edificios de distintas décadas conviene revisar ascensor, garaje, aislamiento acústico, fachada, cubierta y derramas comunitarias.",
  "La calle importa mucho. Cerca del puerto hay actividad laboral, camiones y ruido en horarios distintos a los de una calle puramente residencial. Hay que escuchar la vivienda un día laborable con las ventanas abiertas.",
  "Coroso combina ciudad y playa. La proximidad al paseo tiene valor real, pero también puede aumentar el tráfico y el aparcamiento de verano. En primera línea deben revisarse salitre, carpinterías y fachadas.",
  "Palmeira, Castiñeiras o Aguiño ofrecen una vida más marinera y menos urbana. Antes de comprar hay que comprobar qué servicios pueden hacerse andando y cuántos recados obligan a volver al centro.",
  "Corrubedo y otras zonas expuestas al Atlántico requieren atención especial a viento, salitre, cubierta y mantenimiento exterior. Una vista espectacular puede ir acompañada de un desgaste mucho mayor.",
] as const;

const CASA_ADVERTENCIA_MICROZONA = [
  "Centro y Coroso maximizan servicios; Palmeira o Aguiño reducen escala; Corrubedo compra naturaleza atlántica. Son productos residenciales distintos dentro del mismo municipio.",
] as const;

const CASA_MERCADO_REVENTA = [
  "Ribeira tiene la base de compradores más amplia de la zona por hospital, empleo, comercio y servicios. En pisos ayudan ascensor, garaje, luz y buena ubicación. En la costa pesan conservación, acceso, exposición y utilidad anual de la vivienda.",
] as const;

const ENCAJA_SI_NUEVO2 = [
  "Hospital, comercio y servicios completos son prioritarios.",
  "Se quiere playa urbana sin renunciar a una ciudad pequeña activa todo el año.",
  "Tener Corrubedo, Aguiño y Sálvora dentro del mismo municipio añade valor.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Se busca un casco histórico homogéneo y silencioso.",
  "La actividad portuaria o el tráfico son incompatibles con la vivienda deseada.",
  "No se quiere conducir para llegar a la parte más espectacular de la costa atlántica.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Hacer la semana a pie desde el piso candidato.",
  "Escuchar la calle en día laborable cerca del puerto.",
  "Probar Coroso en temporada alta.",
  "Visitar Corrubedo con viento si se compra en la fachada atlántica.",
  "Revisar salitre, aislamiento acústico y estado de comunidad.",
] as const;

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m².";

const CASA_FILA_PRECIOS = {
  municipio: "Ribeira",
  a2: "132.665 €",
  a3: "183.690 €",
  b2: "107.153 €",
  b3: "148.365 €",
  m2: "1.570 €/m²",
} as const;

const COMPARA_HREF_NUEVO2 = "/compara/?vs=ribeira,rianxo,boiro,a-pobra-do-caraminal,porto-do-son,noia";

const FOTO_COMO_1 = {
  src: "/fotos/barbanza-e-noia/ribeira-coroso.jpg",
  pie: "Coroso, playa urbana de Ribeira",
} as const;

const FOTO_COMO_2 = {
  src: "/fotos/barbanza-e-noia/ribeira-axeitos.jpg",
  pie: "Dolmen de Axeitos, tumba megalítica",
} as const;

const FOTO_HIST_1 = {
  src: "/fotos/barbanza-e-noia/ribeira-san-roque.jpg",
  pie: "Puerto y vida marinera de Ribeira",
} as const;

const FOTO_HIST_2 = {
  src: "/fotos/barbanza-e-noia/ribeira-corrubedo.jpg",
  pie: "Dunas y lagunas de Corrubedo",
} as const;

const FOTO_MAR_1 = {
  src: "/fotos/barbanza-e-noia/ribeira-aguiño.jpg",
  pie: "Aguiño, costa hacia el Atlántico",
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

export default function Nuevo2RibeiraPage() {
  const ficha = municipioPorSlug("ribeira");
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
