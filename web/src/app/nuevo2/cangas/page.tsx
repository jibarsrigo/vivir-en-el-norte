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
 * NUEVO2 — Cangas (O Morrazo).
 * Texto: Lote_O_Morrazo_4_CERTIFICADOS_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "O Morrazo es una península entre las rías de Vigo y Pontevedra, pero no ofrece una única forma de vivir junto al mar. Cangas y Moaña miran principalmente a Vigo y mantienen conexiones marítimas con la ciudad; Bueu se abre hacia la ría de Pontevedra y Ons; Marín combina ciudad portuaria, proximidad a Pontevedra y una costa de playas al oeste. Vigo y Pontevedra funcionan como apoyos urbanos distintos según el municipio.",
  "Cangas reúne dentro del mismo municipio la villa de la ría de Vigo, la ensenada de Aldán y la costa atlántica de O Hío. La villa concentra mercado, comercio, puerto y ferry; Aldán tiene un núcleo más pequeño alrededor de su ensenada; O Hío se prolonga hacia Nerga, Barra, Donón y la Costa da Vela.",
  "Darbo y otras zonas de ladera añaden vivienda residencial entre esas piezas. Una dirección en Cangas puede significar bajar andando al mercado y al barco o depender del coche para casi todos los recados.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "La villa mantiene actividad durante todo el año. La plaza de abastos, los supermercados, las farmacias, los colegios, el instituto, la restauración y el pequeño comercio siguen funcionando fuera del verano; la dársena conserva actividad y el ferry mantiene Vigo al otro lado de la ría como destino cotidiano, no únicamente turístico.",
  "Desde una vivienda céntrica se puede encadenar a pie compra, café, centro de salud, puerto, paseo y embarque. Esa autonomía es una de las ventajas prácticas de Cangas: permite vivir en una villa marítima y utilizar Vigo sin conducir siempre alrededor de la ría.",
  "El ferry no elimina el coche para todo. Para hospital, determinadas compras, actividades en las parroquias y buena parte de las playas exteriores hay que organizar otros desplazamientos. La atención hospitalaria práctica queda fuera del municipio, en el área de Vigo o Pontevedra según el circuito asistencial.",
  "Rodeira introduce playa dentro de la vida urbana. Puede utilizarse para caminar o bañarse sin convertir la tarde en una excursión. Areamilla queda al otro lado del casco. Para Nerga, Barra, Melide o buena parte de Aldán, en cambio, la relación cotidiana depende de la microzona y normalmente entra el coche.",
  "En Aldán la rutina es más pequeña y residencial. Puerto, ensenada y playas próximas pueden quedar muy cerca, pero la compra amplia y muchos servicios se resuelven mejor en coche. En O Hío la dispersión aumenta todavía más: se gana acceso a una costa excepcional a cambio de carreteras locales y menos autonomía peatonal.",
  "El verano altera especialmente las salidas hacia las playas. Nerga, Barra y Costa da Vela reciben mucha más presión de tráfico y aparcamiento. Una casa que parece aislada y tranquila en febrero puede estar en una ruta muy utilizada en agosto.",
  "La villa, sin embargo, no se apaga al terminar la temporada. Mercado, colegios, comercio, pesca y ferry sostienen actividad anual. Esa continuidad distingue Cangas de una localidad de segunda residencia pura.",
  "Algunas celebraciones ocupan temporalmente las calles. Durante Semana Santa y las fiestas del Cristo del Consuelo aumenta la actividad en el centro. En O Hío, la tradicional Danza de San Roque concentra la celebración en la parroquia. Vivir junto a esos recorridos significa aceptar algunos días de ruido, calles ocupadas y aparcamiento difícil.",
  "Para aeropuerto, Vigo queda aproximadamente a 40 minutos como referencia orientativa de acceso. Santiago es más lejano, pero puede resultar útil según la programación aérea vigente.",
] as const;

const CLIMA_NUEVO2 = [
  "Cangas tiene una media estival próxima a 20 °C y una media invernal alrededor de 10 °C. Frente a Mallorca, la diferencia cotidiana aparece menos en un frío extremo que en la lluvia, la humedad y la menor continuidad del cielo despejado.",
  "El verano es claramente más moderado. Las noches tienden a refrescar y el calor persistente mediterráneo pesa mucho menos. Para quien llega buscando poder caminar o dormir sin semanas de temperaturas altas sostenidas, el cambio es importante.",
  "El invierno exige mirar la vivienda de otra manera. Una terraza orientada a la ría puede utilizarse mucho en verano y pasar semanas con un uso reducido durante periodos húmedos. Aislamiento, ventilación y entrada de sol importan más de lo que sugiere una visita estival.",
  "La costa tampoco es homogénea. Aldán queda más protegida; Costa da Vela y las playas exteriores reciben una exposición atlántica mucho mayor. Viento, salitre y sensación térmica cambian entre ambas orillas del municipio.",
  "En una casa de piedra o una planta baja conviene comprobar humedad después de varios días de lluvia. En primera línea o zonas muy expuestas, carpinterías, cierres y metales necesitan atención por salitre.",
] as const;

const VIVIR_NUEVO2 = [
  "Dentro de Cangas, vivir junto al mar significa cosas distintas según la microzona.",
  "En la villa, mar es puerto, ferry, paseo y Rodeira dentro de la rutina. En Aldán es una ensenada más pequeña y residencial. En O Hío puede significar tener una playa espectacular cerca pero depender del coche para comprar.",
  "La conexión marítima con Vigo es una ventaja real para trabajo, gestiones u ocio cuando horarios y destino encajan. No debe confundirse con disponer de toda la infraestructura de Vigo dentro del municipio.",
  "Fuera de temporada la villa conserva mercado, comercio, colegios, pesca y ferry. En las áreas de costa más dispersas se nota más la diferencia entre verano e invierno.",
  "El mantenimiento de una vivienda atlántica forma parte de la adaptación: humedad, salitre, ventilación, vegetación y drenaje sustituyen parte de las preocupaciones de calor y sequedad propias de Mallorca.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Cangas creció de cara a la pesca y a la ría. El casco se formó alrededor de calles estrechas, viviendas marineras y espacios vinculados al puerto. Esa estructura sigue siendo visible hoy en la concentración de comercio y vida peatonal junto al frente marítimo.",
  "La iglesia de Santiago, antigua colegiata, conserva partes construidas en los siglos XV y XVI. En 1617 un ataque de piratas berberiscos destruyó buena parte del núcleo. La reconstrucción posterior no borró la relación compacta entre iglesia, calles y puerto que todavía organiza la villa.",
  "O Hío cuenta otra historia territorial. Su célebre cruceiro, tallado por Ignacio Cerviño en 1872, convirtió el atrio parroquial en una de las imágenes más reconocibles del municipio. La Danza de San Roque mantiene allí una tradición que sigue ocupando físicamente el espacio de la parroquia.",
  "Más al oeste, el Monte Facho de Donón conserva un castro y un santuario galaico-romano relacionado con el dios Berobreo. Su posición elevada no es casual: desde allí se dominan Costa da Vela, Cíes y océano.",
  "La huella actual de esas capas es territorial: villa marinera compacta en una orilla; parroquias históricas y caminos hacia una costa mucho más abierta en la otra.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "Rodeira es el baño que con mayor facilidad puede repetirse desde la villa. Está integrada en la franja urbana y permite bajar a la arena, caminar junto al agua o bañarse sin organizar el día alrededor del coche.",
  "Areamilla ofrece otra pequeña playa próxima al casco, aunque su posición al otro lado de la villa cambia el recorrido según dónde se viva.",
  "Aldán es otra experiencia. Menduíña, Areacova y otras playas de la ensenada ofrecen agua más protegida. Para una vivienda situada en Aldán pueden formar parte de la semana normal; desde el centro de Cangas ya son una salida.",
  "Nerga, Viñó y Barra abren el municipio hacia una costa más natural. Barra mantiene tradición naturista. El acceso en verano y el aparcamiento forman parte práctica de la experiencia.",
  "La Costa da Vela y Cabo Home requieren dedicar más tiempo que un paseo por la villa. Desde Donón se puede caminar entre brezo y granito hacia los faros, con las Cíes ocupando el horizonte. Hay terreno natural, desnivel y exposición; no es la continuación del paseo urbano de Cangas.",
  "El Monte Facho añade subida y patrimonio arqueológico. Es una salida deliberada para caminar y mirar ambas vertientes de la península.",
  "Cangas permite combinar rutinas distintas: paseo y baño urbano junto a la villa; ensenada y playas próximas en Aldán; y costa atlántica y senderos cuando se quiere dedicar más tiempo.",
] as const;

const CASA_NUEVO2 = [
  "La villa ofrece principalmente pisos en edificios bajos y medianos. Una vivienda bien situada puede permitir mercado, farmacia, paseo y ferry a pie, reduciendo mucho el uso cotidiano del coche.",
  "En el centro conviene revisar ascensor, accesibilidad y ruido de calle. Las fiestas y el movimiento estival afectan unas calles mucho más que otras.",
  "Rodeira y el frente de ría añaden valor por proximidad al agua, pero exigen revisar salitre, orientación y exposición. Una terraza con vistas no compensa automáticamente una vivienda húmeda o demasiado castigada por el ambiente marino.",
  "Darbo introduce pisos recientes, casas y vivienda en ladera. Allí la pendiente y el recorrido hasta el centro deben probarse físicamente.",
  "Aldán y O Hío ofrecen casas bajas, piedra, parcelas y vistas. El error típico es comprar la imagen de costa y descubrir después que compra, colegio o servicios exigen varios trayectos diarios en coche.",
  "En una casa hay que revisar cubierta, drenaje, saneamiento, ventilación, accesos y estado de muros. Las carreteras locales y entradas estrechas pueden ser más determinantes que unos metros extra de parcela.",
  "Como referencia municipal, Cangas se sitúa en 2.157 €/m².",
] as const;

const CASA_ADVERTENCIA_MICROZONA = [
  "Villa de Cangas no equivale a Aldán ni a O Hío.",
  "La villa maximiza servicios, paseo y ferry. Aldán cambia hacia ensenada y una escala menor. O Hío acerca la costa atlántica y las playas más naturales, pero aumenta la dependencia del coche.",
] as const;

const CASA_QUE_CONVIENE_REVISAR = [
  "Hacer a pie desde el portal los recorridos a mercado, farmacia, centro de salud, ferry y playa que formarían parte de la semana.",
  "Si la vivienda está en la villa, volver una noche de verano o durante una celebración importante y escuchar la calle.",
  "En costa, revisar carpinterías, metales, fachada, ventilación y señales de humedad.",
  "En Aldán u O Hío, conducir hasta compra y servicios en un horario normal y medir cuántos trayectos se acumulan.",
  "En una casa, revisar cubierta, saneamiento, drenaje, acceso y maniobra.",
  "Si la playa es el argumento principal de compra, hacer el recorrido real hasta la que se utilizaría habitualmente en vez de medir únicamente la distancia al mar.",
] as const;

const CASA_MERCADO_REVENTA = [
  "Cangas combina demanda residencial anual, atractivo costero y conexión marítima con Vigo.",
  "En la villa ayudan a una futura venta el ascensor cuando corresponde, los servicios a pie, el acceso sencillo al ferry y una ubicación desde la que la rutina se entienda con facilidad.",
  "En Aldán y O Hío el mercado cambia: pesan estado de la casa, parcela manejable, acceso, orientación y cercanía real a una playa utilizable.",
  "Las vistas pueden ampliar el atractivo, pero una propiedad difícil de mantener o excesivamente dependiente del coche reduce el público futuro.",
] as const;

const ENCAJA_SI_NUEVO2 = [
  "Encaja si el mar debe formar parte de una semana normal y se valora poder elegir entre playa urbana, ensenada tranquila y costa atlántica dentro del mismo municipio.",
  "También si se quiere una villa anual con mercado, comercio y ferry a Vigo, aceptando que hospital y determinados servicios de mayor escala quedan fuera.",
  "Puede encajar especialmente si el paseo cotidiano y Rodeira se combinan con salidas deliberadas a Aldán, O Hío o Costa da Vela.",
  "Y encaja si se entiende que la mejor microzona depende de la rutina: villa para autonomía; parroquias exteriores para ganar costa natural, casa o terreno.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Encaja peor si el hospital debe quedar a pocos minutos o si todos los servicios especializados deben estar dentro del municipio.",
  "También si el silencio de agosto es imprescindible en una vivienda situada en las rutas hacia las playas más demandadas.",
  "Puede resultar menos adecuado si se quiere una casa de costa sin aceptar mantenimiento atlántico, carreteras locales y dependencia del coche.",
  "Y encaja peor si se compra lejos de la villa pero se espera conservar la misma autonomía peatonal del mercado y el ferry.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Pasar una jornada sin coche desde una vivienda de la villa y comprobar qué parte del día a día queda realmente a pie.",
  "Probar el ferry a Vigo si esa conexión es una razón importante para elegir Cangas.",
  "Visitar la microzona candidata en un fin de semana de verano y comprobar tráfico y aparcamiento.",
  "Hacer el recorrido real hasta la playa que se utilizaría con frecuencia.",
  "Si se mira Aldán u O Hío, conducir también hasta compra, centro de salud y salida hacia el corredor do Morrazo.",
  "Y visitar la vivienda después de lluvia para comprobar humedad, drenaje y comportamiento de los exteriores.",
] as const;

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m².";

const CASA_FILA_PRECIOS = {
  municipio: "Cangas",
  a2: "182.267 €",
  a3: "252.369 €",
  b2: "147.215 €",
  b3: "203.837 €",
  m2: "2.157 €/m²",
} as const;

const FOTO_COMO_1 = {
  src: "/fotos/o-morrazo/cangas-villa.jpg",
  pie: "Cangas: villa, puerto y ría de Vigo",
} as const;

const FOTO_COMO_2 = {
  src: "/fotos/o-morrazo/cangas-rodeira.jpg",
  pie: "Rodeira, la playa urbana junto al paseo",
} as const;

const FOTO_HIST_1 = {
  src: "/fotos/o-morrazo/cangas-hio-cruceiro.jpg",
  pie: "Cruceiro de O Hío, relato barroco tallado en piedra",
} as const;

const FOTO_HIST_2 = {
  src: "/fotos/o-morrazo/cangas-facho.jpg",
  pie: "Monte Facho de Donón: castro, santuario y horizonte atlántico",
} as const;

const FOTO_MAR_1 = {
  src: "/fotos/o-morrazo/cangas-aldan.jpg",
  pie: "Aldán: una ría pequeña de playas tranquilas",
} as const;

const FOTO_MAR_2 = {
  src: "/fotos/o-morrazo/cangas-cabo-home.jpg",
  pie: "Cabo Home y la Costa da Vela frente a las Cíes",
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

export default function Nuevo2CangasPage() {
  const ficha = municipioPorSlug("cangas");
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
        <p key={COMO_SE_VIVE_NUEVO2[0].slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          {COMO_SE_VIVE_NUEVO2[0]}
        </p>
        <p key={COMO_SE_VIVE_NUEVO2[1].slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          {COMO_SE_VIVE_NUEVO2[1]}
        </p>
        <p key={COMO_SE_VIVE_NUEVO2[2].slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          {COMO_SE_VIVE_NUEVO2[2]}
        </p>
        <p key={COMO_SE_VIVE_NUEVO2[3].slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          {COMO_SE_VIVE_NUEVO2[3]}
        </p>
        <p key={COMO_SE_VIVE_NUEVO2[4].slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          {COMO_SE_VIVE_NUEVO2[4]}
        </p>
        <p key={COMO_SE_VIVE_NUEVO2[5].slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          {COMO_SE_VIVE_NUEVO2[5]}
        </p>
        <p key={COMO_SE_VIVE_NUEVO2[6].slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          {COMO_SE_VIVE_NUEVO2[6]}
        </p>
        <p key={COMO_SE_VIVE_NUEVO2[7].slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          {COMO_SE_VIVE_NUEVO2[7]}
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={COMO_SE_VIVE_NUEVO2[8]} fragmentos={["40 minutos"]} />
        </p>
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
            fragmentos={["20 °C", "10 °C"]}
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
        {DE_DONDE_VIENE_NUEVO2.slice(0, 3).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_HIST_1.src} pie={FOTO_HIST_1.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{DE_DONDE_VIENE_NUEVO2[3]}</p>
        <Foto src={FOTO_HIST_2.src} pie={FOTO_HIST_2.pie} />
        {DE_DONDE_VIENE_NUEVO2.slice(4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Mar, río y camino" varianteTarjetaV1>
        {MAR_RIO_CAMINO_NUEVO2.slice(0, 3).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_MAR_1.src} pie={FOTO_MAR_1.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(3, 5).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_MAR_2.src} pie={FOTO_MAR_2.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(5).map((p) => (
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
          <ConNegritas texto={CASA_NUEVO2[6]} fragmentos={["2.157 €/m²"]} />
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
