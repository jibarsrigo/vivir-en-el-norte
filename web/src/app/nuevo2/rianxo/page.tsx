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
 * NUEVO2 — Rianxo (Barbanza e Noia).
 * Texto: Barbanza_e_Noia_SEGUNDA_CERTIFICACION_INDEPENDIENTE_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Barbanza e Noia reúne tres paisajes residenciales en una misma península: la orilla norte de la ría de Arousa, el litoral atlántico de Porto do Son y el fondo de la ría de Muros e Noia. Rianxo, Boiro, A Pobra do Caramiñal y Ribeira encadenan villas de Arousa con distinta escala; Porto do Son gira hacia una costa más abierta y Noia funciona como villa histórica y de servicios en la cabecera de la otra ría. La Serra do Barbanza —el macizo montañoso que ocupa el centro de la península— atraviesa el territorio, de modo que en pocos kilómetros se pasa de playas abrigadas y paseos de ría a laderas, monte y arenales expuestos al Atlántico.",
  "Rianxo ocupa el extremo oriental de esta zona, cerca de la desembocadura del río Ulla —que entra en el fondo de la ría de Arousa— y de Padrón. Es una villa pequeña de ría: el casco, el puerto y playas como Tanxil quedan muy próximos entre sí, mientras parroquias como Taragoña, Asados o Araño abren una vida más dispersa.",
  "Dentro de Barbanza e Noia es una de las opciones más próximas a Santiago y una de las menos urbanas. Se gana una relación cotidiana con la ría y un centro caminable; se acepta que el hospital comarcal y los servicios de mayor escala queden fuera.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Rianxo permite resolver una parte importante de la semana dentro del casco. Centro de salud, farmacias, supermercado, colegio, biblioteca, pequeños comercios, bares y el paseo de la ría quedan en un radio cómodo si se vive cerca del centro.",
  "El puerto no es solo paisaje. Barcos, marisqueo y trabajo ligado al agua forman parte de la mañana. Por la tarde el mismo frente sirve para caminar, sentarse en la plaza o continuar hacia Tanxil y A Torre. Esa superposición entre trabajo y paseo es una de las claves de la villa.",
  "Fuera del núcleo cambia bastante la rutina. Taragoña, Asados, Leiro, Araño y otras parroquias pueden ofrecer casa, terreno y más tranquilidad, pero el coche entra antes en la compra, la escuela, el centro de salud o una salida a la playa.",
  "El Hospital do Barbanza, en Ribeira, queda aproximadamente a treinta minutos. Para servicios de mayor escala, Santiago también entra en la vida práctica: ronda los cuarenta minutos por carretera y concentra hospital terciario, grandes compras, universidad y aeropuerto.",
  "Padrón queda más cerca y puede resolver recados o conexiones sin necesidad de llegar a Santiago. Esa posición hace que Rianxo tenga un pie en el Barbanza y otro en el corredor del Ulla.",
  "El verano añade veraneantes y más coches, especialmente junto a las playas y el puerto. Las Festas da Guadalupe, las grandes fiestas de septiembre de Rianxo dedicadas a la Virxe de Guadalupe, ocupan calles y plazas durante varios días con música y actos populares; quien compre en el centro debe conocer ese calendario real y no medir el ruido solo en invierno.",
  "Fuera de temporada la villa conserva actividad. No hay una gran industria turística que desaparezca en octubre: quedan pesca, comercio, colegio, hostelería local y vida vecinal. Para alguien que busque una costa habitada todo el año, eso pesa más que el número de restaurantes de agosto.",
] as const;

const CLIMA_NUEVO2 = [
  "Rianxo tiene un verano mucho más suave que Mallorca. La media estival utilizada para esta ficha ronda 19,5 °C y la invernal, 10 °C.",
  "La diferencia importante no es un invierno extremo, sino la humedad y la frecuencia de lluvia. La referencia climática utilizada ronda 1.400 mm anuales y unos 125 días de precipitación.",
  "La ría de Arousa protege del oleaje oceánico directo y el viento suele ser menor que en la costa atlántica exterior. Eso no impide que una vivienda de piedra o una planta baja mal ventilada resulte húmeda en invierno.",
  "La Serra do Barbanza se levanta al oeste y condiciona el horizonte. En algunas ubicaciones puede reducir el sol de tarde durante los meses cortos, por lo que conviene observar la vivienda a distintas horas y no deducir la luminosidad solo por la orientación del plano.",
  "En verano se gana sueño fresco y menos necesidad de climatización. A cambio, una semana de playa depende más del tiempo y el agua de la ría, alrededor de 18–20 °C en época estival, es claramente más fría que el Mediterráneo.",
] as const;

const VIVIR_NUEVO2 = [
  "El cambio principal es de escala. Rianxo ofrece una villa donde puerto, plaza, pequeño comercio y playa pueden quedar integrados en la misma rutina, pero no una ciudad con especialistas, grandes superficies o tren.",
  "La playa sí puede ser cotidiana. Tanxil y A Torre permiten bajar al agua sin convertir el baño en una excursión si se vive en el núcleo.",
  "La vida cultural local tiene un peso poco habitual para una villa de este tamaño. La memoria de Castelao, Manuel Antonio y Rafael Dieste no se limita a placas: aparece en rutas, espacios culturales y programación; en el caso de Manuel Antonio, su casa natal funciona además como Casa Museo.",
  "Quien llegue desde Mallorca debe aceptar un invierno más húmedo y con menos horas de terraza. A cambio se gana una costa menos orientada al turismo estacional y una vida de barrio que continúa en enero.",
  "En las parroquias el equilibrio cambia: más espacio y silencio, pero menos vida a pie. El atractivo de una casa con terreno debe compararse con el número de trayectos diarios que realmente requerirá.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Rianxo está ligado al mar desde mucho antes de convertirse en una villa culturalmente conocida. Puerto, marisqueo y navegación explican por qué el núcleo creció mirando a la ría y por qué el frente marítimo sigue siendo lugar de trabajo además de paseo.",
  "El nombre más conocido asociado al municipio es Alfonso Daniel Rodríguez Castelao, nacido aquí en 1886. Fue médico de formación, dibujante, escritor y político, y se convirtió en una de las figuras centrales del galleguismo cultural y político del siglo XX. Se menciona porque su memoria forma parte visible de la identidad local y porque su obra ayudó a fijar una determinada imagen de la sociedad gallega.",
  "Manuel Antonio, también nacido en Rianxo, fue un poeta de vanguardia de comienzos del siglo XX. Su libro «De catro a catro», escrito desde la experiencia marinera, renovó la poesía gallega. Su casa funciona hoy como espacio cultural, de modo que el vínculo entre literatura y puerto puede recorrerse físicamente.",
  "Rafael Dieste fue escritor, dramaturgo y ensayista, igualmente nacido en Rianxo. La coincidencia de estos autores en una villa pequeña explica que la literatura aparezca con tanta frecuencia en la programación y en la forma en que el municipio se presenta a sí mismo.",
  "El Hórreo do Araño muestra la otra cara histórica del municipio. Un hórreo es un granero tradicional elevado del suelo para conservar cereal; el de Araño destaca por su longitud y se conserva en una parroquia rural, lejos del frente portuario. Se menciona porque ayuda a entender que Rianxo no es solo villa marinera y literaria: también es un territorio de aldeas, agricultura y arquitectura tradicional.",
  "Esa mezcla sigue visible hoy: el casco concentra puerto, plaza y cultura; pocos kilómetros tierra adentro aparecen hórreos, fincas y aldeas. La historia sirve para entender esa doble condición, no solo para enumerar monumentos.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "Tanxil es la playa más fácil de integrar en la vida del casco. Tiene agua de ría, generalmente más calmada que el Atlántico abierto, y puede alcanzarse prolongando el paseo desde el frente urbano.",
  "A Torre añade otro arenal próximo. En ambos casos la marea cambia mucho la anchura de la playa y el agua sigue siendo fresca incluso en verano. Son playas útiles para un baño de tarde, no equivalentes a un gran arenal oceánico.",
  "El paseo de A Ribeira funciona como recorrido cotidiano: terreno urbano, prácticamente llano y sin necesidad de coche desde buena parte del centro. Continuarlo hacia la costa de Taragoña convierte el paseo en una salida más larga.",
  "El río Te nace en el interior y atraviesa un paisaje de vegetación, molinos y caminos antes de llegar hacia la ría. El ayuntamiento mantiene rutas ambientales por su entorno. Se menciona porque ofrece un paseo de sombra y agua dulce distinto del frente marítimo.",
  "Para desnivel y vistas hay que subir hacia montes como el Pico Muralla o desplazarse hacia la Serra do Barbanza. Ahí cambian firme y pendiente: son salidas de monte, no extensiones del paseo urbano.",
  "La consecuencia residencial es sencilla: en el casco se puede tener ría y paseo dentro de la semana; una vivienda rural puede ganar monte y parcela, pero normalmente obliga a conducir para recuperar esa misma proximidad al agua y a los servicios.",
] as const;

const CASA_NUEVO2 = [
  "Comprar en Rianxo significa elegir entre una villa caminable junto al puerto y las playas, o una vivienda con más terreno en las parroquias.",
  "En el casco aparecen pisos de distintas décadas, pequeñas casas y viviendas tradicionales. La principal ventaja es práctica: poder caminar al centro de salud, supermercado, plaza, puerto y paseo. Conviene comprobar ascensor, accesibilidad, aparcamiento y aislamiento acústico si la vivienda está junto a las calles que concentran fiestas.",
  "Cerca de Tanxil o A Torre se gana playa cotidiana. Ahí deben revisarse salitre, ventilación y exposición al viento además del estado normal del edificio. Una terraza con vista a la ría puede exigir más mantenimiento del que sugiere una visita de verano.",
  "En Taragoña, Asados, Leiro, Araño y otras parroquias aparecen más casas con parcela. El comprador gana espacio, jardín y posibilidades de aparcamiento, pero debe simular la semana real: compra, colegio, centro de salud, playa y salida hacia Santiago o Ribeira.",
  "En una casa de piedra hay que revisar cubierta, canalones, carpinterías, aislamiento, ventilación, saneamiento y señales de humedad. La mejor visita no es después de tres días de sol, sino después de lluvia continuada.",
  "En una finca importan acceso, pendiente, drenaje, muros, cierres, arbolado y horas de mantenimiento. Una propiedad grande puede resultar barata por metro cuadrado y cara de sostener.",
  "La fibra está disponible en el núcleo, pero si el trabajo remoto condiciona la compra conviene confirmar la dirección exacta en parroquias.",
] as const;

const CASA_ADVERTENCIA_MICROZONA = [
  "El casco, Tanxil y las parroquias no compran la misma rutina. Antes de valorar el precio hay que decidir si pesa más hacer vida a pie, bajar andando a la playa o disponer de parcela.",
] as const;

const CASA_MERCADO_REVENTA = [
  "Rianxo tiene una base residencial propia y una demanda exterior moderada. En reventa suelen ayudar ubicación caminable, vivienda seca, luz, accesibilidad y aparcamiento. En casa rural pesan especialmente acceso, estado de rehabilitación y mantenimiento razonable del terreno.",
] as const;

const ENCAJA_SI_NUEVO2 = [
  "Se busca una villa pequeña de ría donde centro, puerto y playa puedan formar parte de la misma jornada a pie.",
  "Cultura local, vida anual y proximidad razonable a Santiago pesan más que disponer de una ciudad completa.",
  "Se acepta conducir aproximadamente media hora para hospital comarcal.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Hospital y especialistas deben quedar a pocos minutos.",
  "Se busca una gran playa atlántica con oleaje en la puerta.",
  "Una casa en parroquia se compra esperando conservar la misma autonomía peatonal del casco.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Hacer una mañana de recados a pie desde la vivienda.",
  "Caminar hasta Tanxil o A Torre y comprobar la marea.",
  "Probar el trayecto al Hospital do Barbanza y a Santiago.",
  "Visitar después de lluvia y revisar humedad, luz y ventilación.",
  "Comprobar aparcamiento y ruido durante las principales fiestas si se compra en el centro.",
] as const;

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m².";

const CASA_FILA_PRECIOS = {
  municipio: "Rianxo",
  a2: "81.036 €",
  a3: "112.203 €",
  b2: "65.452 €",
  b3: "90.626 €",
  m2: "959 €/m²",
} as const;

const COMPARA_HREF_NUEVO2 = "/compara/?vs=rianxo,boiro,a-pobra-do-caraminal,ribeira,porto-do-son,noia";

const FOTO_COMO_1 = {
  src: "/fotos/barbanza-e-noia/rianxo-villa.jpg",
  pie: "Rianxo: villa de piedra al fondo de la ría de Arousa",
} as const;

const FOTO_COMO_2 = {
  src: "/fotos/barbanza-e-noia/rianxo-tanxil.jpg",
  pie: "Tanxil, playa urbana de agua calma",
} as const;

const FOTO_HIST_1 = {
  src: "/fotos/barbanza-e-noia/rianxo-castelao.jpg",
  pie: "Memoria de Castelao en la villa natal",
} as const;

const FOTO_HIST_2 = {
  src: "/fotos/barbanza-e-noia/rianxo-puerto.jpg",
  pie: "Puerto de Rianxo, orilla de trabajo",
} as const;

const FOTO_MAR_1 = {
  src: "/fotos/barbanza-e-noia/rianxo-paseo.jpg",
  pie: "Paseo junto a la ría en Rianxo",
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

export default function Nuevo2RianxoPage() {
  const ficha = municipioPorSlug("rianxo");
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
