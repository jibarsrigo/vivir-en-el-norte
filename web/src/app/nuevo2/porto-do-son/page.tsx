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
 * NUEVO2 — Porto do Son (Barbanza e Noia).
 * Texto: Barbanza_e_Noia_SEGUNDA_CERTIFICACION_INDEPENDIENTE_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Barbanza e Noia reúne tres paisajes residenciales en una misma península: la orilla norte de la ría de Arousa, el litoral atlántico de Porto do Son y el fondo de la ría de Muros e Noia. Rianxo, Boiro, A Pobra do Caramiñal y Ribeira encadenan villas de Arousa con distinta escala; Porto do Son gira hacia una costa más abierta y Noia funciona como villa histórica y de servicios en la cabecera de la otra ría. La Serra do Barbanza —el macizo montañoso que ocupa el centro de la península— atraviesa el territorio, de modo que en pocos kilómetros se pasa de playas abrigadas y paseos de ría a laderas, monte y arenales expuestos al Atlántico.",
  "Porto do Son ocupa la fachada norte y occidental de la península, entre la ría de Muros e Noia y el Atlántico. No funciona como una única villa: Porto do Son y Portosín tienen servicios y puertos propios, mientras numerosas parroquias y playas se distribuyen a lo largo de casi treinta kilómetros de costa.",
  "Dentro de la zona es la opción más claramente atlántica y una de las más dependientes de la dirección concreta. Se puede vivir con mar inmediato en un núcleo o en una casa aislada junto a una playa, pero esas dos elecciones no ofrecen la misma autonomía cotidiana.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "El municipio tiene dos núcleos especialmente importantes: Porto do Son y Portosín. Ambos disponen de vida propia, pero ninguno alcanza la oferta comercial y sanitaria de Ribeira o Noia.",
  "Porto do Son concentra ayuntamiento, mercado, centro de salud, biblioteca, hostelería y un frente marítimo compacto. Vivir cerca permite resolver algunos recados andando y mantener el mar dentro de la rutina.",
  "Portosín combina puerto pesquero, puerto deportivo, centro de salud, biblioteca y servicios básicos. Su posición al fondo de la ría lo hace más protegido que las playas abiertas del sur.",
  "Fuera de esos núcleos aparecen casas dispersas, pequeñas aldeas y vivienda próxima a playas. Allí la vida puede ser extraordinariamente tranquila, pero el coche organiza compra, salud, colegio y muchas actividades.",
  "El Hospital do Barbanza queda aproximadamente a veinticinco minutos desde una referencia central. Esa cifra puede variar bastante desde el norte o el sur del municipio, por lo que debe comprobarse desde la vivienda exacta.",
  "Noia queda cerca para compras y servicios; Ribeira añade hospital y mayor escala comercial. Santiago y su aeropuerto rondan los cincuenta minutos desde una referencia central.",
  "El verano altera la costa. Portosín, Aguieira, Area Longa y otros arenales reciben visitantes y más tráfico. En invierno la misma carretera puede quedar muy tranquila. Comprar aquí sin conocer ambas estaciones da una imagen incompleta.",
] as const;

const CLIMA_NUEVO2 = [
  "Porto do Son mantiene una media estival cercana a 19,5 °C y un invierno alrededor de 10 °C.",
  "La referencia climática utilizada ronda 1.300 mm de lluvia y unos 122 días al año. La humedad es alta y la niebla tiene algo más de presencia que en la fachada de Arousa.",
  "El viento es una diferencia importante. Playas atlánticas abiertas como Area Longa y As Furnas pueden recibir oleaje y viento fuertes, mientras Portosín queda más protegido por la ría.",
  "El agua atlántica ronda aproximadamente 17–19 °C en verano. Además de ser más fría que Mallorca, el estado del mar decide si una playa resulta apropiada para bañarse o simplemente para caminar y mirar.",
  "Para una vivienda importan mucho la orientación y el abrigo. Una casa aparentemente idéntica puede ser confortable o muy expuesta dependiendo de si recibe directamente los vientos dominantes.",
] as const;

const VIVIR_NUEVO2 = [
  "Aquí el mar es más protagonista y menos domesticado. En varias zonas se vive frente a una costa abierta donde viento, oleaje y estado del mar cambian la actividad del día.",
  "La recompensa es un acceso excepcional a playas y paisaje. La costa municipal acumula numerosos arenales, desde playas relativamente protegidas hasta tramos muy expuestos.",
  "La contrapartida es logística. No hay un único centro que concentre todas las necesidades y una vivienda aislada puede convertir cada recado en coche.",
  "Portosín y Porto do Son reducen bastante ese inconveniente. Elegir uno de esos núcleos puede ser más importante para la calidad de vida que estar cien metros más cerca de una playa.",
  "En invierno se necesita estar cómodo con menos actividad de calle y con temporales. Para alguien que busque silencio, paseo y océano, eso puede ser exactamente lo deseado; para quien necesite vida urbana continua, puede resultar demasiado tranquilo.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "El Castro de Baroña es el gran referente histórico del municipio. Un castro era un poblado fortificado de la Edad del Hierro. Baroña se levantó sobre una península rocosa unida a tierra por un istmo —una franja estrecha de tierra—, con murallas y viviendas circulares de piedra.",
  "Se menciona porque el emplazamiento explica de forma directa cómo aquellas comunidades utilizaban una costa difícil: defensa natural, acceso a recursos marinos y control visual del entorno. No es un monumento colocado junto al mar; su posición forma parte de la historia.",
  "Portosín creció alrededor de la pesca. Su puerto sigue teniendo actividad marinera y deportiva, y la sardina y el jurel forman parte de la identidad pesquera local.",
  "As Furnas es una playa atlántica con formaciones rocosas, piscinas naturales y fuerte oleaje. También está ligada a la biografía de Ramón Sampedro: allí sufrió en 1968 el accidente que le causó tetraplejia, y su posterior lucha pública por el derecho a morir alcanzó repercusión internacional. Se menciona porque ese episodio convirtió un lugar físico del municipio en parte de una historia social mucho más amplia.",
  "El Monte Enxa es un mirador de 539 metros sobre la ría de Muros e Noia. Desde allí se entiende la geografía que organiza todo el municipio: sierra muy próxima al mar, núcleos encajados en la costa y una transición continua entre ría y océano.",
  "Las lagunas de Xuño y Muro son humedales costeros protegidos situados detrás de playas y dunas e incluidos en Red Natura 2000, la red europea de espacios naturales protegidos. Se mencionan porque muestran que esta costa no es solo una sucesión de arenales: contiene sistemas lagunares y zonas de gran valor ecológico.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "Area Longa, a los pies del castro de Baroña, es un arenal abierto con fuerte oleaje y bastante viento. No debe describirse como una playa de baño fácil todos los días.",
  "Aguieira es extensa y ofrece otra experiencia, mientras Coira queda más ligada a Portosín. As Furnas combina arena, roca y piscinas naturales, pero la bravura del mar exige especial prudencia.",
  "El municipio ofrece muchas playas, pero “tener playa cerca” no significa siempre “tener baño seguro”. Hay que aprender qué orientación y qué estado del mar funcionan para cada arenal.",
  "Portosín y Porto do Son permiten paseos de puerto y frente litoral más sencillos. Son alternativas útiles en días de viento en que una playa abierta no invita a permanecer en la arena.",
  "El Monte Enxa exige subir y gana mucha altura. El mirador está a 539 metros y ofrece una salida de monte con vistas de la ría. No sustituye al paseo costero, pero amplía mucho el terreno disponible.",
  "Las lagunas de Xuño y Muro y rutas hacia ríos, molinos y pequeños saltos de agua añaden humedal y bosque a la costa. Para vivienda, esto significa que la naturaleza inmediata puede ser excepcional, pero la movilidad cotidiana sigue dependiendo de dónde esté exactamente la casa.",
] as const;

const CASA_NUEVO2 = [
  "Porto do Son es uno de los municipios donde menos sirve comprar “por municipio” sin estudiar la microzona. Porto do Son, Portosín, una casa próxima a Aguieira y una vivienda aislada junto a una playa atlántica producen semanas completamente diferentes.",
  "En Porto do Son aparecen pisos y casas próximas a servicios básicos. La ventaja es poder hacer parte de los recados a pie y mantener puerto y paseo cerca.",
  "Portosín ofrece pisos, casas y vivienda de costa alrededor de dos puertos. Hay que comprobar ruido y tráfico de verano, además de aparcamiento y salitre.",
  "Las casas dispersas junto a playas pueden ofrecer vistas y silencio extraordinarios. A cambio, hay que medir distancia real a supermercado, centro de salud, colegio y carretera principal. Una casa a cinco minutos del mar puede estar a veinte de una compra práctica.",
  "En toda vivienda expuesta al Atlántico deben revisarse cubierta, anclajes, carpinterías, sellados, fachadas y elementos metálicos. Viento y salitre aceleran el mantenimiento.",
  "La fibra es parcial. Para teletrabajo no basta preguntar si “hay fibra en Porto do Son”: hay que verificar la dirección exacta.",
  "En parcelas rurales pesan acceso, drenaje, pendiente, cierres y vegetación. Después de un temporal es cuando mejor se detecta si la vivienda está realmente protegida.",
] as const;

const CASA_ADVERTENCIA_MICROZONA = [
  "Porto do Son y Portosín tienen vida propia; una vivienda aislada junto a una playa puede cambiar totalmente la dependencia del coche y la exposición al viento.",
] as const;

const CASA_MERCADO_REVENTA = [
  "El atractivo de costa sostiene demanda, pero la vivienda concreta manda. Una casa bien protegida, con acceso sencillo, buena conexión y playa utilizable tiene más público que una propiedad espectacular pero aislada, húmeda o muy expuesta.",
] as const;

const ENCAJA_SI_NUEVO2 = [
  "El Atlántico, las playas y el paisaje pesan más que vivir en una villa muy completa.",
  "Se acepta utilizar coche con frecuencia y comprobar servicios desde la dirección concreta.",
  "Se valora tener Baroña, Enxa, humedales y una costa extensa dentro del mismo municipio.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "La semana debe resolverse andando.",
  "Fibra garantizada y comercio amplio son imprescindibles.",
  "Viento, oleaje y mantenimiento costero serían un problema constante.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Hacer todos los recados desde la vivienda candidata.",
  "Visitar con viento y después de lluvia.",
  "Probar la playa habitual con distintos estados de marea y mar.",
  "Confirmar fibra en la dirección exacta.",
  "Medir el trayecto real al Hospital do Barbanza.",
  "Revisar tráfico y aparcamiento en agosto.",
] as const;

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m².";

const CASA_FILA_PRECIOS = {
  municipio: "Porto do Son",
  a2: "128.863 €",
  a3: "178.425 €",
  b2: "104.081 €",
  b3: "144.113 €",
  m2: "1.525 €/m²",
} as const;

const COMPARA_HREF_NUEVO2 = "/compara/?vs=porto-do-son,rianxo,boiro,a-pobra-do-caraminal,ribeira,noia";

const FOTO_COMO_1 = {
  src: "/fotos/barbanza-e-noia/son-baroña.jpg",
  pie: "Castro de Baroña sobre el Atlántico",
} as const;

const FOTO_COMO_2 = {
  src: "/fotos/barbanza-e-noia/son-area-longa.jpg",
  pie: "Area Longa, arenal atlántico",
} as const;

const FOTO_HIST_1 = {
  src: "/fotos/barbanza-e-noia/son-portosin.jpg",
  pie: "Portosín, puerto pesquero y deportivo",
} as const;

const FOTO_HIST_2 = {
  src: "/fotos/barbanza-e-noia/son-villa.jpg",
  pie: "Núcleo de Porto do Son",
} as const;

const FOTO_MAR_1 = {
  src: "/fotos/barbanza-e-noia/son-furnas.jpg",
  pie: "As Furnas, playa atlántica y costa rocosa",
} as const;

const FOTO_MAR_2 = {
  src: "/fotos/barbanza-e-noia/son-enxa.jpg",
  pie: "Monte Enxa, mirador de la ría de Muros e Noia",
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

export default function Nuevo2PortoDoSonPage() {
  const ficha = municipioPorSlug("porto-do-son");
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
