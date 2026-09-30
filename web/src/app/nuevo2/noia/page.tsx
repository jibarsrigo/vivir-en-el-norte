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
 * NUEVO2 — Noia (Barbanza e Noia).
 * Texto: Barbanza_e_Noia_SEGUNDA_CERTIFICACION_INDEPENDIENTE_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Barbanza e Noia reúne tres paisajes residenciales en una misma península: la orilla norte de la ría de Arousa, el litoral atlántico de Porto do Son y el fondo de la ría de Muros e Noia. Rianxo, Boiro, A Pobra do Caramiñal y Ribeira encadenan villas de Arousa con distinta escala; Porto do Son gira hacia una costa más abierta y Noia funciona como villa histórica y de servicios en la cabecera de la otra ría. La Serra do Barbanza —el macizo montañoso que ocupa el centro de la península— atraviesa el territorio, de modo que en pocos kilómetros se pasa de playas abrigadas y paseos de ría a laderas, monte y arenales expuestos al Atlántico.",
  "Noia está al fondo de la ría de Muros e Noia y funciona como villa histórica y comercial para su entorno. El casco concentra mercado, salud, comercio y patrimonio; Testal y Boa acercan la costa y el baño, pero no forman una playa urbana integrada como Barraña en Boiro o Coroso en Ribeira.",
  "Dentro de la zona ofrece una de las mejores vidas de villa a pie y una conexión relativamente rápida con Santiago. El principal peaje es sanitario: para hospital de mayor capacidad el trayecto es claramente más largo que desde los municipios próximos a Ribeira.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Noia tiene un centro compacto con mercado, centro de salud, farmacias, supermercados, colegios, comercio, cafeterías, restaurantes y una trama histórica que se recorre a pie.",
  "El casco antiguo no funciona como un recinto turístico separado. La iglesia gótica de San Martiño y Santa María a Nova —otra iglesia medieval, hoy convertida en museo de lápidas históricas— se mezclan con soportales, plazas, comercio y vida diaria. Eso permite tener patrimonio dentro del recorrido ordinario hacia la compra o el café.",
  "La ría está muy cerca, pero el baño no funciona igual que en una villa con playa urbana. Testal y Boa requieren salir del centro, normalmente en coche o bicicleta según la vivienda.",
  "El municipio tiene buena relación con Santiago. La carretera permite llegar aproximadamente en cuarenta minutos, y la capital gallega completa hospital, universidad, gran comercio y aeropuerto.",
  "La sanidad es el punto débil relativo. Los hospitales de Santiago quedan aproximadamente a cuarenta minutos. Aunque existe atención primaria local, para urgencias hospitalarias o especialidades complejas el desplazamiento pesa.",
  "Noia mantiene vida anual. Comercio, mercado y servicios responden a población local y comarcal. En agosto, las fiestas patronales de San Bartolomeu y la Festa da Empanada —una celebración gastronómica dedicada a la empanada local— aumentan actividad, ruido y aparcamiento en el centro.",
  "Las afueras y parroquias permiten viviendas mayores y más terreno, pero reducen la principal ventaja del municipio: poder resolver una parte muy grande de la semana caminando por una villa compacta.",
] as const;

const CLIMA_NUEVO2 = [
  "Noia comparte el verano suave de la zona, con media cercana a 19,5 °C, y un invierno alrededor de 10 °C.",
  "Es uno de los municipios más húmedos de esta zona. La referencia climática utilizada ronda 1.500 mm de lluvia y unos 128 días al año.",
  "La posición al fondo de la ría favorece días de niebla y sensación húmeda. En invierno la diferencia con Mallorca se percibe tanto por las precipitaciones como por la menor continuidad de luz.",
  "Las casas antiguas del casco, especialmente plantas bajas o fachadas con poco sol, deben revisarse con cuidado. Granito, juntas, ventilación y aislamiento pueden condicionar mucho el confort.",
  "El verano evita el calor sostenido mediterráneo. Testal y Boa ofrecen agua calmada de ría, alrededor de 18–20 °C, pero la marea modifica bastante el paisaje y el tipo de baño.",
] as const;

const VIVIR_NUEVO2 = [
  "Noia permite una vida de villa muy autónoma. Para muchas personas, mercado, compra, salud, colegio, restauración y cultura pueden resolverse a pie.",
  "A diferencia de Arousa, la playa no está integrada en el casco. Vivir en Noia significa separar con más claridad el paseo urbano del día de baño.",
  "Santiago funciona como ciudad de apoyo. Esa proximidad facilita viajes, hospital, compras y aeropuerto, pero obliga a aceptar carretera cada vez que se necesita algo que la villa no ofrece.",
  "El invierno es más húmedo y con más niebla. La ventaja es que el centro sigue vivo y caminable: no depende de que haya buen tiempo para justificar su existencia.",
  "Para quien valore arquitectura, mercado y una trama histórica compacta, Noia ofrece algo diferente de Ribeira. Para quien priorice hospital y playa en el mismo radio cotidiano, pierde claramente.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Noia fue una villa medieval importante vinculada al comercio, al puerto y a la ruta entre la costa y Santiago. Ese pasado explica la densidad de iglesias, casas señoriales y soportales del casco.",
  "San Martiño es una iglesia de los siglos XV–XVI y uno de los ejemplos del llamado gótico marinero, la arquitectura gótica desarrollada en varias villas costeras gallegas durante la Baja Edad Media. Se menciona porque San Martiño es uno de los elementos que dan al centro su carácter actual.",
  "Santa María a Nova es otra iglesia medieval, hoy convertida en museo. Conserva una colección excepcional de lápidas gremiales y nobiliarias. Una lápida gremial es una losa funeraria marcada con símbolos del oficio del difunto —por ejemplo herramientas o signos vinculados a artesanos y comerciantes—. Por eso el conjunto permite entender quién vivía y trabajaba en la Noia de siglos pasados.",
  "El berberecho de la ría forma parte de la economía local. El marisqueo aprovecha bancos intermareales que quedan accesibles con la bajamar; esa actividad explica por qué Testal y otras zonas de la ría son espacios de trabajo además de costa recreativa.",
  "La empanada de maíz, muchas veces rellena de productos de la ría, forma parte de esa cultura alimentaria. La Festa da Empanada, celebrada durante las fiestas de San Bartolomeu, se menciona porque convierte un producto doméstico y local en una de las celebraciones más visibles del verano.",
  "La historia ayuda a leer la villa actual: un centro comercial y administrativo que sigue apoyándose en el mismo cruce entre ría, territorio interior y conexión con Santiago.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El frente de ría permite caminar junto al agua desde el entorno urbano, pero la costa del casco no equivale a una playa de baño.",
  "Testal es uno de los arenales más conocidos. La marea es determinante y el espacio está ligado también al marisqueo. En bajamar quedan extensas superficies intermareales, de modo que la experiencia cambia mucho según la hora.",
  "Boa ofrece otra opción de playa dentro del municipio, también de ría y agua relativamente calmada.",
  "Para costa atlántica abierta hay que salir hacia Porto do Son. Area Longa, Aguieira o As Furnas ofrecen un paisaje y un oleaje completamente diferentes.",
  "El paseo más cotidiano sigue siendo el casco: San Martiño, Santa María a Nova, plazas, soportales, mercado y frente de ría se enlazan sin necesidad de coche.",
  "La Serra do Barbanza queda próxima, pero para rutas de monte hay que salir deliberadamente del centro. Esa separación entre villa y naturaleza hace que Noia sea más urbana en la rutina que Porto do Son.",
] as const;

const CASA_NUEVO2 = [
  "Noia permite elegir entre piso o casa histórica en el casco, vivienda en barrios exteriores y propiedades con más espacio hacia Boa, Barro y otras zonas del municipio.",
  "En el casco la gran compra es la autonomía. Mercado, salud, comercio y restauración pueden quedar a pocos minutos. En un edificio antiguo hay que comprobar ascensor, accesibilidad, aislamiento, cubierta, ventilación y humedad.",
  "Las casas históricas pueden tener muros gruesos y mucho carácter, pero no deben valorarse solo por la piedra. Hay que revisar estructura, saneamiento, instalaciones, carpinterías y cuánto cuesta calentar y secar la vivienda en invierno.",
  "El aparcamiento es un factor real en el centro. Conviene comprobar dónde se deja el coche una noche normal y durante San Bartolomeu o la Festa da Empanada.",
  "Hacia Testal o Boa se gana proximidad a la ría y a playas, pero se pierde parte de la vida peatonal del centro. Antes de comprar hay que hacer el trayecto real hasta mercado, salud y colegios.",
  "Una casa con terreno en las afueras debe revisarse por drenaje, orientación y mantenimiento. El entorno húmedo de la ría hace especialmente importante observar la parcela después de lluvia.",
] as const;

const CASA_ADVERTENCIA_MICROZONA = [
  "El casco compra vida a pie y patrimonio; Testal y Boa acercan agua y baño; las afueras compran espacio. El precio debe leerse junto con humedad, aparcamiento y dependencia de coche.",
] as const;

const CASA_MERCADO_REVENTA = [
  "Noia tiene demanda propia por su papel comarcal y su cercanía a Santiago. En reventa ayudan ubicación caminable, buen estado de rehabilitación, ascensor o accesibilidad y facilidad de aparcamiento. Las casas exteriores dependen más de acceso, parcela y mantenimiento.",
] as const;

const ENCAJA_SI_NUEVO2 = [
  "Se busca una villa histórica con comercio, mercado y vida diaria a pie.",
  "Santiago a unos cuarenta minutos resulta una ventaja suficiente para completar hospital, aeropuerto y servicios.",
  "La playa puede ser una salida corta en vez de estar integrada en el casco.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Hospital de mayor capacidad debe quedar a menos de media hora.",
  "Se quiere bajar andando a una playa de baño desde la mayoría de las calles del centro.",
  "Humedad y rehabilitación de vivienda antigua son problemas que no se quieren asumir.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Hacer una mañana completa a pie desde la vivienda.",
  "Probar Testal con pleamar y bajamar.",
  "Medir el trayecto hospitalario a Santiago.",
  "Visitar una casa histórica después de varios días de lluvia.",
  "Comprobar aparcamiento en agosto si se compra en el casco.",
] as const;

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m².";

const CASA_FILA_PRECIOS = {
  municipio: "Noia",
  a2: "103.175 €",
  a3: "142.857 €",
  b2: "83.333 €",
  b3: "115.385 €",
  m2: "1.221 €/m²",
} as const;

const COMPARA_HREF_NUEVO2 = "/compara/?vs=noia,rianxo,boiro,a-pobra-do-caraminal,ribeira,porto-do-son";

const FOTO_COMO_1 = {
  src: "/fotos/barbanza-e-noia/noia-san-martino.jpg",
  pie: "San Martiño, iglesia gótica de Noia",
} as const;

const FOTO_COMO_2 = {
  src: "/fotos/barbanza-e-noia/noia-casco.jpg",
  pie: "Casco histórico de Noia",
} as const;

const FOTO_HIST_1 = {
  src: "/fotos/barbanza-e-noia/noia-santa-maria.jpg",
  pie: "Santa María a Nova y sus lápidas gremiales",
} as const;

const FOTO_HIST_2 = {
  src: "/fotos/barbanza-e-noia/noia-puerto.jpg",
  pie: "Frente de ría de Noia",
} as const;

const FOTO_MAR_1 = {
  src: "/fotos/barbanza-e-noia/noia-testal.jpg",
  pie: "Testal, playa y banco marisquero de ría",
} as const;

const FOTO_MAR_2 = {
  src: "/fotos/barbanza-e-noia/noia-boa.jpg",
  pie: "Boa, arenal de la ría de Muros e Noia",
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

export default function Nuevo2NoiaPage() {
  const ficha = municipioPorSlug("noia");
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
