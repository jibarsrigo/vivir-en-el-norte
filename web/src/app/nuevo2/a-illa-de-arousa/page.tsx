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
 * NUEVO2 — A Illa de Arousa (O Salnés).
 * Texto: Lote_O_Salnes_REVISION_INTEGRAL_CERTIFICADA_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "O Salnés reúne villa histórica, viñedo, costa de ría, isla y ciudad en un espacio muy compacto alrededor de Arousa. Meaño ocupa el interior de viñedos y parroquias; Cambados combina casco histórico, vino y marisqueo; A Illa de Arousa vive rodeada de mar y depende de un único puente; Vilanova mezcla villa, pequeñas playas y parroquias de viñedo; Vilagarcía aporta hospital, tren, puerto y la mayor concentración de servicios. Las distancias son cortas, pero la posibilidad de vivir a pie, el acceso al baño y el peso del coche cambian mucho entre municipios.",
  "A Illa de Arousa es el municipio insular de la zona. O Xufre concentra puerto y actividad; O Campo y O Cantiño forman parte de la trama residencial; Carreirón reúne pinares, marisma, senderos y calas en el extremo sur.",
  "Dentro de la isla se puede estar cerca de puerto, playa y servicios básicos. Para hospital, compras grandes, tren y otros servicios hay que cruzar el puente hacia el continente, que concentra toda salida por carretera.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "A Illa permite hacer a pie una parte de la vida cotidiana que en otros municipios dispersos de O Salnés exige coche. Centro de salud, farmacias, tiendas pequeñas, colegio, puerto, biblioteca, Casa do Mar y otros equipamientos quedan dentro de pocos kilómetros.",
  "O Xufre es uno de los puntos de actividad más claros. Puerto, trabajo ligado al mar y restauración conviven con vivienda. Vivir cerca significa tener movimiento durante todo el año, no únicamente en verano.",
  "O Campo, O Cantiño y otras zonas residenciales distribuyen la vida fuera del puerto. Desde muchas direcciones se puede caminar hasta una playa pequeña, hacer una compra básica y volver a casa sin utilizar el coche.",
  "Esa autonomía tiene un límite muy concreto: el puente. Para un supermercado grande, determinados servicios, estación de tren o atención hospitalaria hay que salir hacia Vilanova y Vilagarcía. El Hospital do Salnés queda aproximadamente a veinte minutos.",
  "El puente no debe presentarse como una desventaja absoluta. En condiciones normales facilita una conexión rápida con el continente. La cuestión residencial es otra: no existe una segunda salida por carretera, de modo que cualquier retención de verano o incidencia afecta a todos los desplazamientos.",
  "En invierno la isla se vuelve mucho más tranquila, pero no queda vacía. Pesca, marisqueo, puerto, colegio y servicios mantienen vida local. Para quien valore mucha actividad cultural, gran comercio o variedad constante de restaurantes, la oferta puede resultar pequeña fuera de temporada.",
  "En verano aumentan residentes temporales, visitantes, coches y presión de aparcamiento. Las Festas do Carme, alrededor del 16 de julio, incluyen verbenas y procesión marítima; a finales de agosto la Festa da Ameixa Roxa añade otro momento de afluencia.",
] as const;

const CLIMA_NUEVO2 = [
  "A Illa tiene un verano suave, con media alrededor de 19,5 °C, y un invierno templado en temperatura, próximo a 10 °C.",
  "La diferencia con Mallorca está en la humedad, la lluvia y el viento. La exposición insular hace que algunas calles y fachadas reciban más viento que una villa protegida en el fondo de la ría.",
  "El agua de Arousa ronda aproximadamente 18–20 °C en verano. Es bastante más fría que el Mediterráneo, pero muchas playas y calas están protegidas del oleaje fuerte.",
  "El salitre forma parte del mantenimiento. Carpinterías, herrajes, persianas, barandillas, fachadas y vehículos pueden deteriorarse antes si la vivienda está muy expuesta.",
  "En invierno una terraza abierta puede tener un uso muy distinto del que sugiere en julio. Conviene comprobar dirección del viento, horas de sol y posibilidad de ventilar sin enfriar o humedecer en exceso la vivienda.",
] as const;

const VIVIR_NUEVO2 = [
  "La gran diferencia es que el mar puede formar parte de la vida diaria sin organizar una excursión. Según la vivienda, se puede caminar al puerto, a una playa o a un tramo de costa después de hacer un recado.",
  "La isla es pequeña, pero no completamente peatonal. Ir de un extremo a otro sigue siendo más cómodo en coche o bicicleta, y una vivienda alejada de O Xufre o de las tiendas puede depender más del vehículo de lo que parece en un mapa.",
  "El continente funciona como extensión práctica de la semana. Vilanova cubre necesidades próximas; Vilagarcía añade hospital, tren y compras grandes. La clave es aceptar que una parte de la vida ocurre al otro lado del puente.",
  "El invierno exige estar cómodo con una comunidad pequeña y una actividad de calle más limitada. Quien necesite variedad urbana continua puede sentir la isla demasiado cerrada; quien valore tranquilidad y mar inmediato puede encontrar justamente ahí su atractivo.",
  "En verano ocurre lo contrario. La costa permite repartir el baño por muchos puntos, pero las carreteras y aparcamientos reciben más presión. Elegir una vivienda con plaza o aparcamiento razonable puede cambiar bastante la experiencia.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "A Illa estuvo durante siglos vinculada administrativamente a Vilanova de Arousa y dependía del barco para la comunicación cotidiana con el continente.",
  "El puente, inaugurado en septiembre de 1985, cambió esa relación. Dejó de ser necesario desplazarse por mar para cualquier salida y la isla quedó conectada directamente por carretera.",
  "La autonomía municipal llegó el 1 de enero de 1997. Esa fecha es reciente y ayuda a entender por qué la identidad local sigue teniendo un componente insular tan fuerte.",
  "La economía moderna se construyó alrededor de pesca, marisqueo y conserva. La isla llegó a tener numerosas fábricas de pescado, y el trabajo industrial —con una participación femenina especialmente importante— dejó una huella que hoy se explica en el Centro de Interpretación da Conserva.",
  "El Faro de Punta Cabalo, en el norte, recuerda la relación con la navegación. En el sur, Carreirón muestra la otra cara del litoral: marisma, pinar, dunas y calas protegidas.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "O Bao es uno de los arenales más largos y queda junto al acceso del puente. Su agua es de ría, con marea visible y un baño generalmente más protegido que en una playa atlántica abierta.",
  "Area da Secada, Cabodeiro, Camaxe y otras pequeñas playas permiten elegir orientación y ambiente. No todas tienen los mismos servicios ni el mismo aparcamiento, algo importante si se pretende utilizarlas a diario.",
  "Carreirón es la salida natural más completa. Los caminos son mayoritariamente llanos y atraviesan pinar, marisma y pequeñas calas. Se puede hacer una vuelta corta o dedicar varias horas al extremo sur sin necesidad de una caminata de montaña.",
  "O Xufre y el paseo permiten una relación más urbana con el agua. Allí el mar se mezcla con barcos, trabajo y restauración, no únicamente con baño.",
  "Punta Cabalo, en el norte, añade costa rocosa y faro. Es una salida distinta de Carreirón y muestra cuánto cambia el paisaje dentro de pocos kilómetros.",
  "La ventaja residencial es real: según la dirección, playa, puerto y paseo pueden formar parte de una tarde normal. La contrapartida es que cualquier necesidad hospitalaria o comercial de mayor tamaño obliga a abandonar esa red peatonal y cruzar el puente.",
] as const;

const CASA_NUEVO2 = [
  "A Illa exige mirar la vivienda con criterios distintos a una villa continental. Aquí el precio no compra solo metros: compra también proximidad al mar, escasez de suelo y una logística condicionada por el puente.",
  "En la trama urbana predominan pisos bajos y casas entre calles estrechas. Vivir cerca de O Xufre puede favorecer compra básica, puerto y servicios a pie, pero conviene escuchar la zona durante un día de trabajo y durante el verano, porque movimiento y aparcamiento cambian.",
  "Las casas marineras y viviendas antiguas pueden tener mucho carácter, pero requieren revisar especialmente ventilación, cubierta, salitre y humedad. Reformar una vivienda junto al mar puede implicar más mantenimiento de carpinterías, fachadas y elementos metálicos que una casa interior.",
  "Los chalés y viviendas con pequeña parcela aportan espacio exterior, pero la tierra es escasa y una buena orientación no debe darse por hecha. Una terraza puede recibir mucho viento aunque tenga vistas excelentes.",
  "La microzona cambia la rutina. Cerca de O Bao o Carreirón se gana acceso a playa y naturaleza; cerca de O Xufre se gana vida de puerto y servicios; próximo al puente se facilita cualquier salida al continente. Ninguna de esas ventajas es universal para toda la isla.",
  "El aparcamiento merece comprobarse en agosto, no solo en invierno. También hay que medir el tiempo real hasta el puente desde la vivienda, porque una dirección tranquila en el extremo de la isla añade minutos a cualquier salida hacia hospital o tren.",
  "Precio medio municipal utilizado: 3.012 €/m².",
] as const;

const CASA_ADVERTENCIA_MICROZONA = [
  "La isla es pequeña, pero O Xufre, el entorno del puente, O Bao y las zonas próximas a Carreirón no ofrecen la misma semana. Hay que decidir si pesa más poder salir rápido al continente, tener servicios a pie o bajar con facilidad a playa y sendero.",
] as const;

const CASA_MERCADO_REVENTA = [
  "La escasez de suelo y el atractivo insular sostienen un mercado propio. En una futura venta ayudan buen estado, ventilación, aparcamiento, acceso sencillo y una ventaja clara de ubicación. Una vivienda muy expuesta al viento, húmeda, sin aparcamiento o incómoda para salir de la isla puede reducir el número de compradores aunque esté cerca del mar.",
] as const;

const ENCAJA_SI_NUEVO2 = [
  "El mar debe formar parte de la vida diaria y se quiere poder caminar al puerto, a una playa o a un sendero.",
  "Se acepta una vida muy tranquila en invierno y que hospital, compras grandes y otros servicios se resuelvan en el continente.",
  "Calas, ría y pinar pesan más que disponer de una ciudad completa dentro del municipio.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Hospital, gran comercio o tren deben quedar dentro del propio municipio.",
  "Depender de un único puente para todas las salidas por carretera genera demasiada incomodidad.",
  "El presupuesto es ajustado o viento, salitre y presión estival serían inconvenientes difíciles de asumir.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Hacer una jornada completa sin coche dentro de la isla.",
  "Cruzar el puente en una tarde fuerte de verano y en un día laboral ordinario.",
  "Visitar la vivienda con viento y después de lluvia.",
  "Comprobar aparcamiento en temporada alta.",
  "Recorrer desde la vivienda el trayecto real a O Xufre, playa habitual y puente.",
  "Hacer el trayecto al Hospital do Salnés.",
] as const;

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m².";

const CASA_FILA_PRECIOS = {
  municipio: "A Illa de Arousa",
  a2: "254.514 €",
  a3: "352.404 €",
  b2: "205.569 €",
  b3: "284.634 €",
  m2: "3.012 €/m²",
} as const;

const COMPARA_HREF_NUEVO2 = "/compara/?vs=a-illa-de-arousa,meano,cambados,vilanova-de-arousa,vilagarcia-de-arousa";

const FOTO_COMO_1 = {
  src: "/fotos/o-salnes/illa-porto-xufre.jpg",
  pie: "O Xufre, puerto de trabajo y centro marinero",
} as const;

const FOTO_COMO_2 = {
  src: "/fotos/o-salnes/illa-punta-cabalo.jpg",
  pie: "Punta Cabalo, faro en la costa norte",
} as const;

const FOTO_HIST_1 = {
  src: "/fotos/o-salnes/illa-conserva.jpg",
  pie: "A Illa: villa, puerto y memoria de la conserva",
} as const;

const FOTO_HIST_2 = {
  src: "/fotos/o-salnes/illa-parque-carreiron.jpg",
  pie: "Carreirón: pinar, marisma y calas en la punta sur",
} as const;

const FOTO_MAR_1 = {
  src: "/fotos/o-salnes/illa-o-bao.jpg",
  pie: "O Bao, el arenal largo junto al puente",
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

export default function Nuevo2AIllaDeArousaPage() {
  const ficha = municipioPorSlug("a-illa-de-arousa");
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
        {CASA_NUEVO2.slice(0, 6).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={CASA_NUEVO2[6]} fragmentos={["3.012 €/m²"]} />
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
