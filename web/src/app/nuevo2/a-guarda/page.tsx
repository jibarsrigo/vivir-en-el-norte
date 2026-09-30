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
 * NUEVO2 — A Guarda (Baixo Miño).
 * Texto: Lote_Baixo_Mino_5_CERTIFICADOS_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Baixo Miño reúne formas muy distintas de vivir en el extremo suroeste de Galicia: A Guarda concentra puerto, comercio y servicios junto a la desembocadura del Miño; Oia ocupa una franja estrecha entre el Atlántico y la sierra de A Groba; O Rosal combina valle, viñedo y ribera; Tomiño se extiende por la vega del Miño; y Tui aporta una pequeña ciudad histórica y fronteriza. Portugal queda al otro lado del río y Vigo funciona como apoyo urbano mayor.",
  "A Guarda ocupa la punta donde el Miño llega al Atlántico. Dentro de Baixo Miño es el lugar donde puerto, comercio, playas, paseo y servicios cotidianos quedan más concentrados alrededor de un núcleo reconocible.",
  "El Monte Santa Trega cierra el paisaje por detrás y Camposancos prolonga el municipio hacia el estuario. Vivir en el centro, en Camposancos o en las laderas del monte cambia la relación con el coche, las vistas, el baño y los servicios.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "A Guarda funciona como una villa pequeña que conserva actividad durante todo el año. Puerto, mercado, comercio, farmacias, colegios, cafeterías y paseo permiten que una parte importante de la rutina se concentre dentro del casco.",
  "Eso la diferencia de los municipios más dispersos de Baixo Miño. Vivir cerca del centro o del puerto permite salir andando para muchas necesidades ordinarias y dejar el coche para hospital, compras de mayor escala o desplazamientos fuera del municipio.",
  "El puerto sigue dando a la villa una identidad de trabajo y no solo de ocio. La relación con el mar se ve en la dársena, la lonja, los barcos y el movimiento diario del frente portuario.",
  "En verano aumentan los visitantes, el tráfico y la presión sobre el aparcamiento, especialmente en los accesos a playas y durante las fiestas. La PO-552 concentra buena parte de los desplazamientos de la costa y conviene conocerla también en agosto, no únicamente fuera de temporada.",
  "Portugal está a la vista desde la desembocadura, pero no existe actualmente un cruce directo operativo por ferry. El ferry A Guarda–Caminha está fuera de servicio desde octubre de 2021; para cruzar por carretera, la conexión práctica pasa por la Ponte da Amizade entre Goián y Vila Nova de Cerveira. Esto hace que Caminha esté visualmente muy cerca y, sin embargo, requiera un rodeo por tierra.",
  "Para atención hospitalaria de mayor complejidad la referencia práctica está en el área de Vigo. El Hospital Álvaro Cunqueiro queda aproximadamente a 45 km y unos 45 minutos. Esa distancia es uno de los límites claros de vivir en la punta.",
  "Varias celebraciones alteran durante algunos días la rutina del verano. La Festa da Langosta, las fiestas marineras de la Virxe do Carme y, sobre todo, la Festa do Monte atraen más gente, música y tráfico. Para una vivienda junto al puerto o en los accesos al Santa Trega forman parte del calendario anual.",
] as const;

const CLIMA_NUEVO2 = [
  "A Guarda es uno de los puntos más atlánticos de Baixo Miño. El mar modera las temperaturas, de modo que el cambio respecto a Mallorca se percibe tanto en la luz, la lluvia y el viento como en el termómetro.",
  "En verano, la temperatura media ronda los 19,5 °C. La cercanía del océano limita el calor persistente del fondo del valle, pero introduce brisa y días en los que el viento puede condicionar playa, terraza o paseo.",
  "El invierno es templado en temperatura y claramente más húmedo que el balear. La lluvia se concentra especialmente entre otoño e invierno y la sensación de casa depende mucho de orientación, ventilación y exposición al viento.",
  "En una vivienda frente al Atlántico, una terraza espectacular en una visita tranquila puede comportarse de otra manera con nortada. La protección de huecos, el aislamiento y la orientación importan más que una diferencia pequeña de metros cuadrados.",
  "Frente a Mallorca también cambia la continuidad del exterior. Hay menos garantía de terraza utilizable durante los meses húmedos, pero el verano evita buena parte del calor nocturno mediterráneo.",
] as const;

const VIVIR_NUEVO2 = [
  "La gran diferencia cotidiana es que aquí el mar puede formar parte de una semana normal sin necesidad de coger el coche. Puerto, paseo y playas están integrados en la escala municipal.",
  "Eso no significa que cualquier vivienda tenga la misma relación con el agua. El casco y el puerto favorecen una rutina peatonal; Camposancos acerca el estuario; una vivienda más elevada puede ganar vistas y tranquilidad pero introducir pendientes y desplazamientos.",
  "La humedad y el salitre forman parte del mantenimiento. En pisos y casas próximos al frente marítimo conviene mirar carpinterías, cierres, fachadas, ventilación y rastros de condensación, no únicamente el estado visual de una terraza.",
  "A Guarda tiene vida propia en invierno, pero sigue siendo una villa pequeña. Para hospital especializado, determinados servicios y parte de las conexiones de larga distancia hay que salir hacia Vigo y el resto de la provincia.",
  "Mantener relación frecuente con Mallorca exige asumir también esa posición periférica. Los aeropuertos quedan fuera del municipio y la programación directa a Palma cambia según temporada; la logística del trayecto forma parte del cálculo residencial.",
  "La escala compacta permite, a cambio, comprar una vivienda desde la que mercado, café, puerto y paseo formen parte del recorrido a pie.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Antes de la villa portuaria, el Monte Santa Trega ya dominaba la desembocadura. Su castro conserva el rastro de un gran asentamiento de la Edad del Hierro situado en una posición excepcional sobre el Miño y el Atlántico.",
  "Desde arriba se entiende por qué este lugar fue estratégico durante siglos: el río, la costa gallega y Portugal quedan reunidos en una sola vista.",
  "La condición fronteriza volvió a dejar huella en la Edad Moderna. El Castelo de Santa Cruz pertenece al sistema defensivo levantado en el siglo XVII durante los conflictos con Portugal y todavía marca una parte del tejido urbano.",
  "La pesca terminó dando a la villa buena parte de su forma moderna. El puerto, la actividad marinera y las construcciones vinculadas a familias que emigraron y regresaron conviven en un casco donde la historia no queda aislada en un monumento.",
  "El Santa Trega, el puerto y Camposancos resumen tres capas distintas del municipio: asentamiento antiguo y control de la desembocadura; oficio marítimo; y vida en el estuario frente a Portugal.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "En A Guarda se puede elegir entre baño atlántico, agua de estuario y paseo junto al puerto sin salir del municipio.",
  "Area Grande es playa marítima abierta al Atlántico. Es una opción de baño próxima a la villa, con arena y servicios estivales, pero conserva el carácter de costa oceánica: agua fresca, exposición al mar y condiciones que pueden cambiar con viento y oleaje.",
  "O Muíño, en Camposancos, ocupa la desembocadura del Miño. Allí el paisaje es de estuario: Portugal enfrente y una relación con el agua diferente de la costa abierta.",
  "Las dos son playas reales de baño y no deben confundirse entre sí. Para decidir vivienda importa saber si se busca el Atlántico inmediato o una orilla más ligada al río.",
  "El Sendero Azul une O Muíño y Area Grande a lo largo de casi toda la costa de A Guarda, atravesando el puerto. El recorrido oficial se presenta como una ruta lineal de unos 5,6 km y permite pasar del estuario al océano abierto sin necesidad de convertirlo en una ruta de monte.",
  "Para un paseo cotidiano más corto, el frente portuario y marítimo permite caminar sin completar todo ese recorrido. El terreno es mucho más amable junto al agua que en la subida hacia el Santa Trega.",
  "Subir al Monte Santa Trega es otra experiencia. Desde la villa se gana desnivel; arriba esperan castro, museo, ermita y miradores. Es una salida de monte y patrimonio, no el paseo llano de todos los días.",
  "El puerto puede formar parte de la rutina diaria; Area Grande ofrece baño atlántico; Camposancos abre la desembocadura del Miño; y el Monte Santa Trega queda inmediatamente detrás de la villa.",
] as const;

const CASA_NUEVO2 = [
  "A Guarda ofrece sobre todo piso en edificios de escala pequeña o media dentro de la villa y vivienda unifamiliar hacia zonas como Camposancos y las laderas próximas al Santa Trega.",
  "En el núcleo, la ventaja principal es la autonomía cotidiana. Una vivienda bien situada puede dejar mercado, farmacia, comercio, puerto y paseo dentro de recorridos peatonales.",
  "Hacia Camposancos aumenta el peso de las vistas, la parcela y el estuario. También conviene medir mejor las distancias reales a compra y servicios, porque pocos kilómetros pueden cambiar la frecuencia con la que se utiliza el coche.",
  "En primera exposición marítima importan especialmente viento y salitre. Carpinterías, cierres de terraza, fachada y elementos metálicos merecen una revisión cuidadosa. En plantas bajas y viviendas antiguas hay que añadir ventilación y posibles humedades.",
  "Como referencia municipal, A Guarda se sitúa en 1.117 €/m².",
] as const;

const CASA_ADVERTENCIA_MICROZONA = [
  "No es lo mismo comprar en el casco y bajar andando al puerto que elegir Camposancos o una vivienda elevada hacia el Santa Trega. El casco favorece servicios y paseo cotidiano. Camposancos cambia la relación hacia el estuario y Portugal. Las zonas elevadas pueden ofrecer mejores vistas y más tranquilidad, pero conviene medir pendientes, viento y dependencia del coche.",
] as const;

const CASA_QUE_CONVIENE_REVISAR = [
  "Visitar la vivienda con viento. Una terraza frente al océano debe probarse cuando la costa está expuesta, no únicamente en una tarde tranquila.",
  "Revisar carpinterías, cierres, fachada y elementos metálicos por la exposición a salitre. En vivienda antigua, comprobar además aislamiento, ventilación y señales de humedad.",
  "Hacer andando los recorridos que se pretenden incorporar a la semana: mercado, farmacia, puerto, paseo y compra cotidiana. Si la vivienda está en Camposancos o en una zona elevada, repetir el ejercicio desde allí.",
  "Comprobar el aparcamiento y los accesos durante un día fuerte de verano. La experiencia de agosto puede ser muy distinta de la de noviembre.",
  "Si la playa forma parte de la decisión, probar tanto Area Grande como O Muíño. Son dos baños propios del municipio, pero ofrecen experiencias diferentes.",
] as const;

const CASA_MERCADO_REVENTA = [
  "A Guarda tiene una base residencial anual y una identidad reconocible como villa marítima. Para reventa ayudan especialmente una ubicación fácil de explicar, proximidad a servicios, ascensor cuando el edificio lo necesita, aparcamiento y un exterior realmente utilizable.",
  "Las vistas aportan atractivo, pero no compensan por sí solas una exposición incómoda al viento, una terraza poco aprovechable o problemas de humedad y salitre.",
  "En vivienda unifamiliar, acceso, mantenimiento y distancia al núcleo pesan junto con parcela y paisaje. Una casa muy dependiente del coche compite con un mercado distinto al de un piso desde el que se resuelve la semana andando.",
] as const;

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m².";

const CASA_FILA_PRECIOS = {
  municipio: "A Guarda",
  a2: "94.387 €",
  a3: "130.689 €",
  b2: "76.235 €",
  b3: "105.557 €",
  m2: "1.117 €/m²",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Encaja si se busca una villa marítima donde el agua forme parte de la rutina y no únicamente de las excursiones. Puerto, paseo, Area Grande y el estuario de Camposancos permiten vivir varias formas de costa dentro del mismo municipio.",
  "También si importa poder resolver bastante vida diaria andando. Una vivienda bien situada en el núcleo deja comercio, mercado, farmacia, cafés y paseo dentro de una escala pequeña.",
  "Puede encajar especialmente si se valora un verano atlántico más fresco que el del fondo del Miño y se acepta a cambio más viento, lluvia invernal y mantenimiento ligado al salitre.",
  "Y encaja si el Monte Santa Trega, el puerto y Portugal enfrente pesan más que tener hospital especializado o una gran ciudad a pocos minutos.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Encaja peor si el hospital especializado debe quedar muy cerca. El área de Vigo está aproximadamente a 45 minutos y esa distancia no cambia de manera sustancial eligiendo otra calle de A Guarda.",
  "Tampoco si el viento marítimo y el salitre se consideran inconvenientes difíciles de asumir. La exposición forma parte de vivir en la punta y puede afectar tanto al uso de una terraza como al mantenimiento de la vivienda.",
  "Puede resultar menos adecuada si se necesita una ciudad grande para la rutina diaria o conexiones metropolitanas inmediatas. A Guarda tiene autonomía de villa, no escala urbana.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Pasar un día completo en el núcleo sin coche y comprobar cuánto de la rutina real puede resolverse andando desde la vivienda candidata.",
  "Volver con viento y observar terraza, ventanas, ruido y exposición. En una vivienda frente al mar, esa segunda visita es tan importante como la primera.",
  "Probar Area Grande y O Muíño por separado. Una mira al Atlántico abierto y la otra a la desembocadura; saber cuál se usaría realmente ayuda a elegir microzona.",
  "Recorrer el acceso al área hospitalaria de Vigo y una salida hacia Vigo en condiciones normales. La posición en la punta es parte estructural de la decisión.",
  "Si la vivienda está en Camposancos o en una ladera, medir también el trayecto a mercado, farmacia y compra cotidiana y no extrapolar la caminabilidad del centro a todo el municipio.",
  "Finalmente, visitar en un día fuerte de verano para comprobar aparcamiento, tráfico y ruido antes de asumir que la tranquilidad del resto del año será idéntica en agosto.",
] as const;

const FOTO_COMO_VILLA = {
  src: "/fotos/baixo-mino/a-guarda-villa.jpg",
  pie: "La villa pegada al Atlántico, con el Monte Santa Trega detrás",
} as const;

const FOTO_COMO_PASEO = {
  src: "/fotos/baixo-mino/a-guarda-paseo.jpg",
  pie: "Paseo marítimo y casas de costa: el día a día frente al océano",
} as const;

const FOTO_HISTORIA_CASTRO = {
  src: "/fotos/baixo-mino/a-guarda-castro.jpg",
  pie: "Castro de Santa Trega: poblado de piedra de hace dos mil años sobre la desembocadura",
} as const;

const FOTO_HISTORIA_PORTO = {
  src: "/fotos/baixo-mino/a-guarda-porto.jpg",
  pie: "Puerto de A Guarda: el mar como oficio, no como foto de turismo",
} as const;

const FOTO_MAR_COSTA = {
  src: "/fotos/baixo-mino/a-guarda-costa.jpg",
  pie: "Costa atlántica hacia Area Grande, la playa de diario",
} as const;

const FOTO_MAR_CAMPOSANCOS = {
  src: "/fotos/baixo-mino/a-guarda-camposancos.jpg",
  pie: "Camposancos, parroquia del estuario, con Caminha (Portugal) al otro lado",
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

export default function Nuevo2AGuardaPage() {
  const ficha = municipioPorSlug("a-guarda");
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
        {COMO_SE_VIVE_NUEVO2.slice(0, 5).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={COMO_SE_VIVE_NUEVO2[5]} fragmentos={["45 km y unos 45 minutos"]} />
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{COMO_SE_VIVE_NUEVO2[6]}</p>
        <Foto src={FOTO_COMO_VILLA.src} pie={FOTO_COMO_VILLA.pie} />
        <Foto src={FOTO_COMO_PASEO.src} pie={FOTO_COMO_PASEO.pie} />
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Frente a Mallorca" varianteTarjetaV1>
        <h3 className="mt-1 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Clima
        </h3>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{CLIMA_NUEVO2[0]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={CLIMA_NUEVO2[1]} fragmentos={["19,5 °C"]} />
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
        {DE_DONDE_VIENE_NUEVO2.slice(0, 2).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_HISTORIA_CASTRO.src} pie={FOTO_HISTORIA_CASTRO.pie} />
        {DE_DONDE_VIENE_NUEVO2.slice(2, 4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_HISTORIA_PORTO.src} pie={FOTO_HISTORIA_PORTO.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{DE_DONDE_VIENE_NUEVO2[4]}</p>
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Mar, río y camino" varianteTarjetaV1>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[0]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={MAR_RIO_CAMINO_NUEVO2[1]} fragmentos={["Area Grande"]} />
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={MAR_RIO_CAMINO_NUEVO2[2]} fragmentos={["O Muíño"]} />
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[3]}</p>
        <Foto src={FOTO_MAR_COSTA.src} pie={FOTO_MAR_COSTA.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(4, 6).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={MAR_RIO_CAMINO_NUEVO2[6]} fragmentos={["Monte Santa Trega"]} />
        </p>
        <Foto src={FOTO_MAR_CAMPOSANCOS.src} pie={FOTO_MAR_CAMPOSANCOS.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[7]}</p>
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Casa" varianteTarjetaV1>
        {CASA_NUEVO2.slice(0, 4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={CASA_NUEVO2[4]} fragmentos={["1.117 €/m²"]} />
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
