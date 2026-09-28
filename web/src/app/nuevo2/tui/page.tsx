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
 * NUEVO2 — Tui (Baixo Miño).
 * Texto: Lote_Baixo_Mino_5_CERTIFICADOS_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Baixo Miño termina hacia el interior con una escala distinta. A Guarda es villa marítima; Oia, costa dispersa; O Rosal, valle y viña; Tomiño, vega y parroquias. Tui funciona como la pequeña ciudad de la comarca.",
  "Está construida sobre el Miño frente a Valença. El casco histórico sube desde el río hacia la catedral; alrededor aparecen ensanche, comercio, equipamientos y barrios residenciales. La A-55 y el puente internacional añaden una dimensión logística que no tienen los municipios de la costa.",
  "La diferencia residencial más importante está entre vivir dentro o junto al casco, instalarse en el ensanche o salir hacia parroquias y laderas próximas al Monte Aloia.",
  "En el centro se gana autonomía andando. En el ensanche aparecen calles más anchas, ascensor, aparcamiento y vivienda más reciente. Fuera de ese radio se gana espacio y verde, pero vuelve a crecer el papel del coche.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Tui concentra la mayor autonomía cotidiana de Baixo Miño. Comercio, supermercados, farmacia, atención primaria, biblioteca, teatro, conservatorio, piscina y otros servicios caben dentro de una ciudad pequeña.",
  "El casco histórico añade una vida urbana poco habitual en la zona: calles empedradas, plazas, cafeterías, patrimonio y el paso constante del Camino Portugués. No depende únicamente del verano para tener movimiento.",
  "La topografía importa. La ciudad histórica asciende desde el Miño hacia la catedral y algunas calles tienen pendientes claras. Una vivienda situada pocos cientos de metros más arriba o abajo puede cambiar bastante la comodidad de los recorridos diarios.",
  "El ensanche ofrece otra semana: calles más anchas, edificios más recientes, supermercados y mejor relación con el coche. Conviene, sin embargo, comprobar el ruido de la A-55 según la calle.",
  "Valença está al otro lado del río. Cruzar a Portugal forma parte de la vida normal para compras, paseo, restauración y actividades de la Eurocidade; no necesita plantearse como una excursión ocasional.",
  "Tui dispone además de ferrocarril y conexión directa por carretera hacia Vigo y Portugal. La utilidad del transporte público depende del horario concreto, pero la combinación de tren, autovía y servicios locales la diferencia del resto de la comarca.",
  "Para atención hospitalaria de mayor complejidad, la referencia práctica está en el área de Vigo, aproximadamente a 25 km y unos 30 minutos. El aeropuerto de Vigo queda aproximadamente a 25 minutos.",
  "Las fiestas de San Telmo alteran durante varios días la vida del centro con actividades, música, procesiones y ocupación de calles. Vivir dentro del casco implica aceptar esa intensidad como parte del calendario local.",
] as const;

const CLIMA_NUEVO2 = [
  "Tui está en el valle del Miño y no recibe la moderación directa del Atlántico de A Guarda u Oia.",
  "En verano, la temperatura media ronda los 21 °C. Los episodios cálidos pueden sentirse más que en la punta costera, especialmente en viviendas con mucha exposición solar o poca ventilación.",
  "El invierno sigue siendo templado en temperatura, pero la humedad, la lluvia y las nieblas del río cambian la sensación de casa. Algunas mañanas el valle amanece cerrado y gana visibilidad a medida que avanza el día.",
  "En el casco antiguo la piedra añade otra variable. Una vivienda histórica puede tener mucho carácter y al mismo tiempo necesitar una revisión seria de ventilación, aislamiento, carpinterías y humedad.",
  "En el ensanche importan más la orientación, la exposición solar, la eficiencia del edificio y el posible ruido de tráfico.",
  "Frente a Mallorca se pierde continuidad de cielo seco y terraza invernal; a cambio se gana un paisaje mucho más verde y estaciones más marcadas. En verano, sin embargo, Tui no ofrece el mismo alivio térmico que la costa atlántica.",
] as const;

const VIVIR_NUEVO2 = [
  "Tui permite reducir el coche más que los demás municipios de Baixo Miño si se elige bien la vivienda. Desde casco y ensanche pueden quedar a pie buena parte de la compra, servicios y actividades.",
  "Eso no elimina el coche de la semana. Sigue siendo útil para hospital, costa, algunas parroquias y salidas de ocio, pero deja de ser imprescindible para cada gesto pequeño.",
  "Valença amplía además el radio cotidiano sin necesidad de recurrir a Vigo. La frontera introduce comercio, restauración y actividades portuguesas dentro de una escala muy próxima.",
  "El Camino Portugués mantiene paso de gente durante buena parte del año y añade actividad al casco. Quien quiera silencio absoluto debe elegir calle con cuidado; quien valore una ciudad pequeña con vida exterior puede verlo como ventaja.",
  "Mantener conexión con Mallorca resulta logísticamente más sencillo que desde la punta de A Guarda porque el aeropuerto de Vigo queda más cerca. Aun así, la disponibilidad de vuelos directos depende de temporada y calendario.",
  "El peaje frente a los municipios costeros es claro: aquí el agua cotidiana es el Miño y no el océano. Para playa marítima hay que conducir.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Tui fue una ciudad importante mucho antes de convertirse en un pequeño centro comarcal. Su posición sobre el Miño explica tanto su desarrollo como su carácter defensivo.",
  "El conjunto histórico asciende desde el río hasta la Catedral de Santa María, cuya construcción comenzó en el siglo XII y culminó con su consagración en 1225. Su aspecto de fortaleza recuerda que una catedral en una ciudad fronteriza debía cumplir también una función defensiva.",
  "Las calles que la rodean conservan iglesias, conventos, casas históricas y huellas de las distintas comunidades que pasaron por la ciudad. Tui fue además una de las antiguas capitales provinciales del Reino de Galicia.",
  "El Camino Portugués atraviesa el casco después de entrar desde Portugal y mantiene viva una función histórica de paso que todavía se percibe en las calles.",
  "El puente internacional de finales del siglo XIX convirtió la relación con Valença en una conexión física permanente por carretera y ferrocarril. Hoy las dos ciudades cooperan además como Eurocidade, pero la relación cotidiana entre ambas orillas es anterior a esa estructura administrativa.",
  "La ciudad actual mezcla así tres capas que siguen siendo visibles: sede histórica y religiosa, frontera sobre el Miño y pequeña ciudad de servicios.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "Tui no tiene costa marítima, pero eso no significa que no tenga baño fluvial.",
  "Areeiros, en Guillarei, y O Penedo, en Caldelas, son las principales zonas habituales de baño fluvial del municipio y se acondicionan en temporada. Antes de bañarse conviene comprobar los avisos municipales y el estado sanitario vigente, porque pueden existir restricciones temporales.",
  "No deben confundirse con la ribera inmediatamente bajo el casco. La información turística municipal señala que A Mariña, junto al paseo fluvial, no es apta para el baño. El paseo urbano junto al río y las playas fluviales cumplen funciones distintas.",
  "El paseo cotidiano puede empezar bajo el casco. La ribera permite caminar en terreno llano con el Miño y Portugal enfrente, mientras el recorrido por la ciudad histórica añade cuestas, piedra y escaleras según la calle elegida.",
  "El Monte Aloia cambia por completo el terreno. Es el primer parque natural declarado en Galicia y ofrece una red de senderos, bosque y miradores sobre el valle. Es una salida de monte, no una prolongación llana del paseo urbano.",
  "La costa queda aproximadamente a 25 minutos, con opciones como Cesantes o Area Grande según destino y tráfico.",
  "Valença añade otra dirección de paseo. Cruzar el puente permite pasar del casco gallego a la fortaleza portuguesa sin convertir el cambio de país en una excursión de día entero.",
  "Tui ofrece, por tanto, río para paseo y baño fluvial cuando las condiciones sanitarias lo permiten, monte muy próximo y mar como salida deliberada.",
] as const;

const CASA_NUEVO2 = [
  "Tui ofrece una variedad residencial mayor que otros municipios de Baixo Miño.",
  "En el ensanche aparecen pisos recientes o relativamente modernos, con ascensor y servicios próximos. Cerca del casco se puede mantener una vida muy peatonal sin asumir necesariamente las limitaciones de una vivienda histórica.",
  "Dentro del casco, el atractivo está en la arquitectura y en tener la ciudad antigua en la puerta. A cambio hay que mirar con especial atención accesibilidad, pendientes, aparcamiento, humedad y eficiencia de edificios antiguos.",
  "Las parroquias y laderas próximas al Aloia ofrecen casa y más verde, pero cambian la relación con servicios y coche.",
  "La proximidad de la A-55 es una ventaja logística y puede convertirse en un defecto acústico. No basta con medir kilómetros hasta Vigo: hay que escuchar la vivienda con tráfico en distintas horas.",
  "Como referencia municipal, Tui se sitúa en 1.541 €/m².",
] as const;

const CASA_ADVERTENCIA_MICROZONA = [
  "En Tui la cota y la relación con la A-55 pueden importar tanto como la distancia lineal al centro. Casco, ensanche y parroquias no ofrecen la misma experiencia. Una vivienda histórica puede estar muy cerca de todo y exigir más esfuerzo por pendientes o accesibilidad; un piso del ensanche puede simplificar ascensor y aparcamiento; una casa exterior gana terreno a cambio de coche.",
] as const;

const CASA_QUE_CONVIENE_REVISAR = [
  "Hacer andando desde la vivienda los recorridos habituales hasta supermercado, farmacia, centro, paseo y otros servicios. En el casco conviene repetirlos pensando en lluvia y en movilidad futura, no solo en una tarde de paseo.",
  "Si la vivienda está cerca de la A-55, visitarla en varias franjas horarias y escuchar terraza, dormitorios y ventanas abiertas.",
  "En vivienda histórica, revisar humedad, ventilación, aislamiento, carpinterías y accesibilidad. La piedra y el carácter arquitectónico no sustituyen una inspección del comportamiento real de la casa en invierno.",
  "En el ensanche, comprobar orientación, exposición de verano, ascensor, garaje y gastos de comunidad.",
  "Si el río pesa en la decisión, diferenciar paseo fluvial de baño: visitar Areeiros u O Penedo y comprobar los avisos municipales y el estado sanitario vigente antes de bañarse.",
  "Hacer también el trayecto real hacia el hospital y el aeropuerto, y comprobar qué horarios de tren serían útiles para la rutina concreta.",
] as const;

const CASA_MERCADO_REVENTA = [
  "Tui tiene una demanda residencial apoyada por servicios, conexiones y su papel de pequeña ciudad comarcal.",
  "Para reventa ayudan especialmente ascensor, aparcamiento, cercanía peatonal a servicios y una ubicación que no sufra demasiado ruido de la autovía.",
  "El casco histórico tiene un producto más específico: arquitectura y ubicación pueden aportar atractivo, pero accesibilidad, humedad, rehabilitación y aparcamiento reducen el público potencial si están mal resueltos.",
  "Las casas de parroquia compiten en otro mercado. Allí pesan terreno, acceso, mantenimiento y tiempo real hasta el núcleo.",
  "La ventaja estructural de Tui es que no depende únicamente de costa o segunda residencia para explicar su demanda: servicios, frontera y conexiones sostienen una base residencial propia.",
] as const;

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m².";

const CASA_FILA_PRECIOS = {
  municipio: "Tui",
  a2: "130.215 €",
  a3: "180.297 €",
  b2: "105.173 €",
  b3: "145.625 €",
  m2: "1.541 €/m²",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Encaja si se quiere la mayor autonomía cotidiana de Baixo Miño sin pasar a una ciudad grande. Comercio, servicios, actividades y buena parte de la rutina pueden resolverse dentro de una escala pequeña.",
  "También si Portugal debe formar parte de la semana. Valença está enfrente y el puente permite incorporar compras, paseo y restauración al día a día.",
  "Puede encajar especialmente si hospital, aeropuerto y conexiones hacia Vigo pesan más que tener el Atlántico en la puerta. Tui reduce esos trayectos respecto a la punta de la comarca.",
  "Y encaja si se valora poder elegir entre piso reciente en el ensanche, vivienda histórica cerca del casco o casa más verde hacia las parroquias, entendiendo que cada opción cambia la dependencia del coche.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Encaja peor si la razón principal de la mudanza es tener un verano claramente costero y playa marítima a pie. Tui es ciudad de río y el océano requiere desplazamiento.",
  "Tampoco si se busca el silencio de una aldea. El casco tiene peregrinos, actividad, fiestas y vida urbana; el ensanche añade tráfico y la proximidad de la A-55 puede introducir ruido.",
  "Puede resultar menos adecuada si se quieren evitar por completo pendientes. El casco histórico está construido sobre una ladera y la cota de la vivienda cambia la caminabilidad.",
  "Y encaja peor si el calor de valle es incompatible con lo que se busca. El verano es más cálido que en la punta atlántica de A Guarda u Oia.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Pasar una jornada normal moviéndose a pie entre la vivienda candidata, compra, centro y ribera. La autonomía de Tui es una ventaja real solo si la microzona permite aprovecharla.",
  "Recorrer las pendientes del casco desde la vivienda y repetir mentalmente el trayecto con bolsas, lluvia o movilidad reducida. Pocos metros en el mapa pueden equivaler a una diferencia importante de cota.",
  "Si se mira el ensanche, escuchar la A-55 a distintas horas. Una conexión excelente por carretera pierde parte de su valor si domina acústicamente la terraza o el dormitorio.",
  "Visitar Areeiros u O Penedo, comprobando antes los avisos municipales y el estado sanitario vigente, y después hacer una salida a la costa. Así se comprueba si el Miño cubre la relación cotidiana con el agua o si el mar acabará siendo una necesidad frecuente.",
  "Probar también Valença a pie y comprobar si esa conexión se incorporaría de verdad a la semana.",
  "Por último, hacer el trayecto al hospital y al aeropuerto y revisar horarios útiles de tren. Tui destaca precisamente por logística; conviene verificar que esas ventajas funcionan para la rutina concreta.",
] as const;

const FOTO_COMO_ALAMEDA = {
  src: "/fotos/baixo-mino/tui-alameda.jpg",
  pie: "La alameda: el paseo urbano de la villa",
} as const;

const FOTO_HISTORIA_CATEDRAL = {
  src: "/fotos/baixo-mino/catedral-tui.jpg",
  pie: "Catedral de Santa María: fortaleza arriba del casco",
} as const;

const FOTO_HISTORIA_PONTE = {
  src: "/fotos/baixo-mino/tui-ponte.jpg",
  pie: "Puente internacional: hierro sobre el Miño hacia Valença",
} as const;

const FOTO_MAR_VALENCA = {
  src: "/fotos/baixo-mino/tui-valenca.jpg",
  pie: "Valença vista desde Tui: la otra orilla a pie",
} as const;

const FOTO_MAR_ALOIA = {
  src: "/fotos/baixo-mino/tui-aloia.jpg",
  pie: "Desde el Monte Aloia: la vega, el río y los pueblos",
} as const;

const CREDITO_FOTOS = "Wikimedia Commons (CC BY-SA).";

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

export default function Nuevo2TuiPage() {
  const ficha = municipioPorSlug("tui");
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
        {COMO_SE_VIVE_NUEVO2.slice(0, 6).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas
            texto={COMO_SE_VIVE_NUEVO2[6]}
            fragmentos={["25 km y unos 30 minutos", "25 minutos"]}
          />
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{COMO_SE_VIVE_NUEVO2[7]}</p>
        <Foto src={FOTO_COMO_ALAMEDA.src} pie={FOTO_COMO_ALAMEDA.pie} />
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Frente a Mallorca" varianteTarjetaV1>
        <h3 className="mt-1 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Clima
        </h3>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{CLIMA_NUEVO2[0]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={CLIMA_NUEVO2[1]} fragmentos={["21 °C"]} />
        </p>
        {CLIMA_NUEVO2.slice(2).map((p) => (
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
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{DE_DONDE_VIENE_NUEVO2[0]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={DE_DONDE_VIENE_NUEVO2[1]} fragmentos={["Catedral de Santa María"]} />
        </p>
        <Foto src={FOTO_HISTORIA_CATEDRAL.src} pie={FOTO_HISTORIA_CATEDRAL.pie} />
        {DE_DONDE_VIENE_NUEVO2.slice(2, 4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={DE_DONDE_VIENE_NUEVO2[4]} fragmentos={["puente internacional"]} />
        </p>
        <Foto src={FOTO_HISTORIA_PONTE.src} pie={FOTO_HISTORIA_PONTE.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{DE_DONDE_VIENE_NUEVO2[5]}</p>
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Mar, río y camino" varianteTarjetaV1>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[0]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={MAR_RIO_CAMINO_NUEVO2[1]} fragmentos={["Areeiros", "O Penedo"]} />
        </p>
        {MAR_RIO_CAMINO_NUEVO2.slice(2, 4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_MAR_VALENCA.src} pie={FOTO_MAR_VALENCA.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={MAR_RIO_CAMINO_NUEVO2[4]} fragmentos={["Monte Aloia"]} />
        </p>
        <Foto src={FOTO_MAR_ALOIA.src} pie={FOTO_MAR_ALOIA.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={MAR_RIO_CAMINO_NUEVO2[5]} fragmentos={["25 minutos"]} />
        </p>
        {MAR_RIO_CAMINO_NUEVO2.slice(6).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Casa" varianteTarjetaV1>
        {CASA_NUEVO2.slice(0, 5).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={CASA_NUEVO2[5]} fragmentos={["1.541 €/m²"]} />
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
