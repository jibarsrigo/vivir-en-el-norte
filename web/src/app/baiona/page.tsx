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
import DesplegableNuevo2 from "@/components/DesplegableNuevo2";

/**
 * NUEVO2 — Baiona (Val Miñor).
 * Texto: Lote_Val_Minor_3_CERTIFICADOS_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Val Miñor reúne tres formas distintas de vivir entre la costa y el interior del valle: Baiona funciona como villa marítima compacta y turística; Nigrán reparte playas, servicios y vivienda entre varias microzonas; Gondomar ocupa el interior, con más casas y terreno y una relación menos inmediata con el mar. Vigo queda lo bastante cerca para completar hospital, empleo, aeropuerto y servicios de mayor escala.",
  "Baiona se organiza alrededor de una bahía protegida. El casco histórico baja hacia el puerto y las playas urbanas; Monterreal cierra uno de sus lados y Sabarís prolonga la vida cotidiana hacia A Ramallosa y la desembocadura del Miñor.",
  "Es la parte del valle donde resulta más fácil combinar núcleo reconocible, servicios y mar a pie. Las laderas de Baíña y Belesar cambian esa experiencia hacia casas con más espacio y vistas, pero también más dependencia del coche.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Baiona funciona como una villa real durante todo el año. En el centro el comercio, las farmacias, los colegios, el instituto, la restauración y el puerto cubren buena parte del día a día sin salir del municipio.",
  "Desde una vivienda céntrica se pueden encadenar a pie compra, café, paseo y playa. Sabarís añade supermercados, comercio y mercado y funciona como otro punto práctico del municipio.",
  "La proximidad del mar no convierte toda Baiona en la misma microzona. Vivir junto al casco y A Ribeira es muy distinto de instalarse en una ladera de Baíña o Belesar. En estas últimas se puede ganar jardín, vistas y tranquilidad, pero aparecen pendientes y más coche.",
  "En verano aumentan los visitantes, la ocupación de segundas viviendas, el tráfico y la presión sobre el aparcamiento. Una calle tranquila en febrero puede funcionar de manera completamente distinta en agosto.",
  "A comienzos de marzo, la Festa da Arribada —que conmemora la llegada de la carabela Pinta a Baiona en 1493— transforma el casco durante varios días con actividades, mercado y una afluencia excepcional. Para una vivienda céntrica forma parte del calendario anual, no es solo un acontecimiento para visitantes.",
  "Para atención hospitalaria de mayor complejidad, la referencia práctica está en el área de Vigo. El Hospital Álvaro Cunqueiro queda aproximadamente a 20 km y unos 20 minutos desde la referencia municipal; el aeropuerto de Vigo está aproximadamente a 25 minutos. Son tiempos orientativos y dependen del punto de salida y del tráfico.",
] as const;

const CLIMA_NUEVO2 = [
  "Baiona tiene un clima marítimo templado. En verano, la temperatura media ronda los 20 °C y la proximidad de la bahía limita el calor sostenido que puede sentirse más hacia el interior del valle.",
  "Frente a Mallorca, la diferencia no está únicamente en la temperatura. Hay menos continuidad de cielo despejado, más lluvia y una humedad mucho más presente durante otoño e invierno.",
  "El mar introduce además salitre y viento. Una vivienda junto a la bahía puede tener una temperatura agradable y, al mismo tiempo, exigir más atención a carpinterías, ventilación, cierres y elementos metálicos.",
  "El verano permite utilizar mucho el exterior sin reproducir el calor mediterráneo persistente. En invierno ocurre lo contrario: una terraza que parece una estancia adicional en agosto puede tener un uso mucho más limitado durante semanas húmedas.",
  "La orientación se vuelve decisiva. Dos viviendas próximas pueden comportarse de manera muy diferente según reciban sol de invierno, estén protegidas del viento o permanezcan en sombra buena parte del día.",
] as const;

const VIVIR_NUEVO2 = [
  "Baiona permite incorporar el mar a la rutina con una facilidad poco común. Desde el centro se puede caminar junto al puerto, llegar a pequeñas playas urbanas y rodear Monterreal sin organizar una salida en coche.",
  "Eso también concentra actividad. Vivir sobre una calle de hostelería o muy cerca del paseo implica aceptar más movimiento, especialmente en verano y durante acontecimientos como la Arribada.",
  "Sabarís ofrece una rutina distinta, más orientada a compra, accesos y una relación directa con A Ramallosa y el estuario. No tiene exactamente la misma experiencia urbana que el casco histórico.",
  "En las laderas cambia de nuevo la rutina: más casa, parcela y vistas a cambio de coche y de una relación menos inmediata con el paseo.",
  "La proximidad de Vigo permite utilizar la ciudad para hospital, compras mayores, trabajo o aeropuerto sin vivir dentro de ella. Para alguien que llega desde Mallorca, esa combinación puede ser tan importante como la propia playa.",
  "El mantenimiento de una vivienda marítima merece entrar desde el principio en el presupuesto. Salitre, humedad, orientación y ventilación forman parte de la vida cotidiana tanto como las vistas.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Baiona se entiende como villa fortificada frente a la ría de Vigo: el Monte do Boi, la Fortaleza y el casco histórico organizan la imagen y buena parte de la vida. La llegada de la carabela Pinta en 1493 —noticia del viaje de Colón— convirtió el puerto en un hito de memoria colectiva que todavía se celebra y se explica a quien llega. Quien vea solo chalé y playa de veraneo se pierde esa capa de villa con muralla, calles de piedra y un relato marítimo anterior al turismo moderno.",
  "La Fortaleza de Monterreal —recinto amurallado sobre el promontorio— concentra siglos de defensa y, hoy, un uso hotelero y de paseo que mantiene el perímetro en el mapa cotidiano. No es un museo cerrado al margen: caminar el adarve o rodear el monte es una de las formas de habitar Baiona. El casco, a sus pies, reúne comercio, plazas y una escala de villa que en agosto se llena y en noviembre recupera aire.",
  "Las playas —A Ribeira, Barbeira, A Concheira, Ladeira hacia el sur— añadieron la capa de baño y veraneo que pesa en el mercado inmobiliario. Esa doble identidad (villa histórica + frente de arena) explica tensiones de aparcamiento, precio y ruido estival. El municipio no es solo casco: parroquias y zonas más residenciales hacia el interior o hacia Nigrán cambian la distancia real a la muralla y al agua.",
  "Baiona vivió del mar y del tránsito de la ría mucho antes de convertirse en destino. El puerto deportivo y el movimiento de verano son herederos de esa orientación al agua, aunque el oficio haya cambiado de peso. Las fiestas y el calendario de temporada alta siguen marcando semáforos, terrazas y el ánimo de quien vive todo el año junto al paseo.",
  "Vigo queda cerca como ciudad de hospital, compras amplias y empleo; Val Miñor enlaza con Nigrán y Gondomar en un continuo costero-residencial. Esa red explica por qué Baiona puede sentirse completa en escala de villa y, a la vez, dependiente de trayectos cortos en coche. La historia útil para quien compra es esa: villa con relato propio, no suburbio anónimo, pero inserida en la lógica de área metropolitana de Vigo.",
  "Hoy, comprar «en Baiona» es decidir entre casco y entorno de Fortaleza —piedra, cuesta, agosto intenso— o zonas más residenciales con más coche hasta el paseo. El anuncio no siempre lo aclara; el invierno sí.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "En Baiona el mar está presente, pero no se vive igual en el casco junto al puerto que hacia Ladeira o en una calle retirada. A Ribeira y Barbeira concentran el baño más ligado a la villa: arena cercana, paseo, y en verano agua que suele rondar los 18–21 °C. Un martes de junio permite holgura; un domingo de agosto el acceso y el aparcamiento forman parte del plan. Quien vive arriba hacia la Fortaleza gana vistas y pendiente; quien vive pegado al paseo gana espontaneidad y cede quietud en temporada.",
  "El paseo alrededor del Monte do Boi y la Fortaleza convierte el promontorio en camino cotidiano de viento, piedra y ría. No es un boulevard llano interminable: hay tramos de exposición, curvas y la sensación de villa abierta al agua. Desde ahí la ría de Vigo se lee como escenario, con las Cíes al fondo en los días claros.",
  "Ladeira —arenal más largo hacia el sur— cambia la escala: más playa abierta, más lógica de coche desde el casco según dónde se viva, y un perfil más de día de arena que de plaza de piedra. A Concheira y otros tramos completan el mapa de baño municipal. Confundir todos en una sola «playa de Baiona» borra diferencias de acceso y de exposición.",
  "Para caminar sin salir lejos, el frente de villa y el perímetro de la Fortaleza bastan casi todos los días. Cuando el día pide ampliar, las Cíes exigen barco y plan; Vigo aporta Samil y ciudad; Nigrán, otras playas del Val Miñor. Baiona sostiene mucha orilla propia; el resto es salida elegida.",
  "En el casco el agua y el paseo pueden entrar en la semana andando; hacia Ladeira o zonas residenciales el coche gana peso para repetir el mismo gesto. Esa diferencia describe mejor Baiona que inventariar arenales. El viento de ría y el salitre pesan en terrazas de primera línea: conviene probarlas en día movido, no solo en una tarde dulce de folleto.",
  "Agosto multiplica gente en el casco y en los accesos a playa; noviembre devuelve la villa a una escala más local. Vivir aquí todo el año es aceptar las dos caras sin fingir que la postal de verano sea el clima emocional permanente.",
  "El cierre útil: villa fortificada con baño cercano, ría delante y Vigo a minutos. Elegir microzona —casco, Ladeira, retirado— pesa más que el nombre Baiona en el portal.",
] as const;

const CASA_NUEVO2 = [
  "Baiona combina pisos en el centro y junto a la bahía con vivienda unifamiliar en laderas y parroquias exteriores.",
  "Cerca del casco y de A Ribeira, la ventaja es poder convertir servicios, paseo y mar en recorridos peatonales. Es también donde hay que comprobar mejor ruido, aparcamiento y presión estival.",
  "Sabarís ofrece una rutina más orientada a compra cotidiana, accesos y A Ramallosa. En Baíña o Belesar aparecen más casas y terreno, pero también más pendiente y coche.",
  "En vivienda marítima conviene revisar salitre, carpinterías, cierres de terraza, fachada, ventilación y humedad. En edificios antiguos o muy expuestos, una vista privilegiada no compensa automáticamente un comportamiento incómodo durante el invierno.",
  "Como referencia municipal, Baiona se sitúa en 2.528 €/m².",
] as const;

const CASA_ADVERTENCIA_MICROZONA = [
  "Centro, A Ribeira y Monterreal no representan todo Baiona. Una vivienda céntrica puede ofrecer mar y servicios a pie, pero también más ruido y presión de verano. Sabarís cambia hacia una rutina comercial y de estuario. Las laderas pueden ganar espacio y vistas mientras pierden caminabilidad. Antes de comparar precios conviene comparar qué rutina ofrece realmente cada zona.",
] as const;

const CASA_QUE_CONVIENE_REVISAR = [
  "Hacer andando desde la vivienda los recorridos que se repetirían durante una semana: supermercado, farmacia, centro, paseo y playa.",
  "Volver una noche de verano si la vivienda está cerca de hostelería o del frente marítimo. Ruido y movimiento pueden cambiar mucho respecto a una visita de invierno.",
  "Comprobar aparcamiento y accesos en temporada alta y durante un día de actividad intensa en la villa.",
  "En viviendas próximas al mar, revisar carpinterías, fachada, cierres y elementos metálicos. Buscar también señales de humedad y comprobar ventilación.",
  "Si se elige una ladera, recorrer a pie la pendiente hasta el núcleo y medir cuánto dependería realmente la semana del coche.",
  "Visitar A Ribeira o Barbeira y A Ladeira por separado permite comprobar qué tipo de playa se incorporaría de verdad a la rutina.",
] as const;

const CASA_MERCADO_REVENTA = [
  "Baiona tiene una demanda residencial en la que se mezclan vida anual, costa y segunda residencia.",
  "Para una futura venta ayudan especialmente una ubicación con una ventaja clara —centro o mar realmente caminables—, ascensor cuando corresponde, aparcamiento y un exterior que pueda utilizarse de verdad.",
  "Las vistas pueden aumentar el atractivo, pero una vivienda demasiado expuesta, ruidosa o difícil de aparcar reduce el público potencial.",
  "Las propiedades de ladera compiten con otro mercado: allí pesan acceso, orientación, terreno y facilidad de mantenimiento.",
] as const;

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m².";

const CASA_FILA_PRECIOS = {
  municipio: "Baiona",
  a2: "213.616 €",
  a3: "295.776 €",
  b2: "172.536 €",
  b3: "238.896 €",
  m2: "2.528 €/m²",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Encaja si se quiere que el mar forme parte de una semana normal. Desde las microzonas centrales se puede caminar al puerto, al paseo y a playas urbanas sin convertir cada baño en un desplazamiento.",
  "También si se busca una villa reconocible y activa durante todo el año, manteniendo Vigo suficientemente cerca para hospital, aeropuerto y servicios de mayor escala.",
  "Puede encajar especialmente si un paseo como Monte Boi, la bahía y el casco pesan más que disponer de una vivienda grande por el mismo presupuesto.",
  "Y encaja si se acepta que el atractivo de la villa trae presión turística: el verano lleno y la Arribada forman parte del lugar tanto como un martes tranquilo de invierno.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Encaja peor si el silencio de julio y agosto es una condición esencial. El centro, el paseo y las zonas de playa reciben mucha más actividad en temporada alta.",
  "También si se necesita mucha superficie residencial cerca del mar con un presupuesto contenido. La costa de Baiona es el mercado más caro de Val Miñor después de Nigrán.",
  "Puede resultar menos adecuada si humedad, salitre y mantenimiento marítimo son inconvenientes difíciles de asumir.",
  "Y encaja peor si se compra en una ladera dependiente del coche esperando conservar la misma caminabilidad del centro.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Pasar una jornada sin coche desde la vivienda candidata y comprobar qué parte de la rutina queda realmente a pie.",
  "Volver en una noche de verano y escuchar la calle con ventanas abiertas.",
  "Hacer el recorrido hasta una playa que se utilizaría de verdad, no simplemente hasta el punto más próximo del mar.",
  "Recorrer Monte Boi y el paseo urbano para comprobar si esa relación cotidiana con la costa es una ventaja que realmente se aprovecharía.",
  "Si la vivienda está en Sabarís, Baíña o Belesar, medir de nuevo compra, centro y playa desde esa dirección concreta.",
  "Por último, hacer el trayecto hacia Vigo en una jornada normal y comprobar cómo encajan hospital, trabajo o aeropuerto en la semana real.",
] as const;

const FOTO_COMO_VILLA = {
  src: "/fotos/val-minor/baiona-villa.jpg",
  pie: "Baiona alrededor de su bahía: casco, puerto y la península amurallada de Monterreal",
} as const;

const FOTO_COMO_PASEO = {
  src: "/fotos/val-minor/baiona-paseo.jpg",
  pie: "El paseo marítimo, una calle cotidiana frente a los barcos",
} as const;

const FOTO_HISTORIA_MONTERREAL = {
  src: "/fotos/val-minor/baiona-monterreal.jpg",
  pie: "Fortaleza de Monterreal: tres kilómetros de muralla sobre el mar",
} as const;

const FOTO_HISTORIA_PINTA = {
  src: "/fotos/val-minor/baiona-pinta.jpg",
  pie: "Réplica de la carabela Pinta junto al puerto, memoria de la llegada de 1493",
} as const;

const FOTO_MAR_BARBEIRA = {
  src: "/fotos/val-minor/baiona-barbeira.jpg",
  pie: "Barbeira, la pequeña playa protegida bajo las murallas",
} as const;

const FOTO_MAR_LADEIRA = {
  src: "/fotos/val-minor/baiona-ladeira.jpg",
  pie: "Praia Ladeira: arena larga, paseo y la marisma del Miñor",
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

export default function Nuevo2BaionaPage() {
  const ficha = municipioPorSlug("baiona");
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
          <ConNegritas
            texto={COMO_SE_VIVE_NUEVO2[5]}
            fragmentos={["20 minutos", "25 minutos"]}
          />
        </p>
        <Foto src={FOTO_COMO_VILLA.src} pie={FOTO_COMO_VILLA.pie} />
        <Foto src={FOTO_COMO_PASEO.src} pie={FOTO_COMO_PASEO.pie} />
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Frente a Mallorca" varianteTarjetaV1>
        <h3 className="mt-1 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Clima
        </h3>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={CLIMA_NUEVO2[0]} fragmentos={["20 °C"]} />
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
        <Foto src={FOTO_HISTORIA_MONTERREAL.src} pie={FOTO_HISTORIA_MONTERREAL.pie} />
        {DE_DONDE_VIENE_NUEVO2.slice(2, 4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_HISTORIA_PINTA.src} pie={FOTO_HISTORIA_PINTA.pie} />
        {DE_DONDE_VIENE_NUEVO2.slice(4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Mar, río y camino" varianteTarjetaV1>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas
            texto={MAR_RIO_CAMINO_NUEVO2[0]}
            fragmentos={["A Ribeira", "Barbeira"]}
          />
        </p>
        <Foto src={FOTO_MAR_BARBEIRA.src} pie={FOTO_MAR_BARBEIRA.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[1]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={MAR_RIO_CAMINO_NUEVO2[2]} fragmentos={["Ladeira"]} />
        </p>
        <Foto src={FOTO_MAR_LADEIRA.src} pie={FOTO_MAR_LADEIRA.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(3).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Casa" varianteTarjetaV1>
        {CASA_NUEVO2.slice(0, 4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={CASA_NUEVO2[4]} fragmentos={["2.528 €/m²"]} />
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
