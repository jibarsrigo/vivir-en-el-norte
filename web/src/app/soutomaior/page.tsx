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
 * NUEVO2 — Soutomaior (Vigo e ría).
 * Texto: Lote_Vigo_e_Ria_4_CERTIFICADOS_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Vigo e ría reúne la gran ciudad de Vigo y varios municipios que se organizan alrededor del fondo de la ría y de la ensenada de San Simón. Vigo concentra hospitales, empleo, universidad, aeropuerto, puerto y servicios urbanos; Redondela combina una villa ferroviaria con Cesantes y Chapela; Soutomaior se reparte entre Arcade y un interior más rural; Vilaboa ocupa la orilla de la ensenada y las laderas que conectan la ría con Pontevedra. En pocos kilómetros se pasa de una vida plenamente urbana a parroquias donde el coche vuelve a ser imprescindible.",
  "Soutomaior ocupa el fondo de la ría y el valle del Verdugo. Arcade, junto a la desembocadura, concentra estación, salud, comercio y buena parte de la vida cotidiana; Soutomaior y las parroquias interiores se reparten entre casas, fincas, bosque y viñedo.",
  "En Arcade se pueden resolver bastantes recados a pie. En el interior aumenta el coche. Pontevedra, Redondela y Vigo quedan relativamente cerca, pero los servicios municipales siguen concentrándose sobre todo en Arcade.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Arcade concentra la parte más caminable de la vida diaria en Soutomaior.",
  "En el núcleo se puede ir andando a centro de salud, farmacia, alimentación, biblioteca, bares y estación. Para una vivienda céntrica, el coche puede quedar reservado para compras grandes, hospital o actividades fuera del municipio.",
  "La estación conecta Arcade con Vigo y Pontevedra y permite incorporar el tren a desplazamientos que, desde una parroquia interior, se harían normalmente en coche.",
  "El interior funciona de otra manera. Las casas y fincas alrededor de Soutomaior, Moreira u otras zonas rurales ofrecen más espacio y silencio, pero comprar, llevar niños a actividades o ir al centro de salud puede exigir coche casi a diario.",
  "Para hospital, compras grandes y servicios especializados, Pontevedra es el apoyo urbano más próximo. El trayecto hasta Montecelo ronda los quince minutos como orientación.",
  "El aeropuerto de Vigo también queda relativamente cerca, con un trayecto orientativo de unos quince minutos. La conexión directa con Palma varía por temporada, y Santiago sirve como alternativa cuando se necesita más continuidad anual.",
  "Arcade mantiene comercio, estación y servicios durante todo el año. El primer fin de semana de abril, la Festa da Ostra concentra mucha más gente y actividad alrededor del peirao durante unos días.",
  "La fibra no debe darse por hecha en todo el municipio. En una casa rural o una dirección apartada conviene comprobar cobertura fija real antes de firmar.",
] as const;

const CLIMA_NUEVO2 = [
  "Soutomaior tiene un verano suave y un invierno húmedo. La media estival ronda los 20,5 °C y la invernal, los 9,5 °C.",
  "La lluvia es más frecuente y abundante que en Mallorca. El valle del Verdugo y las laderas mantienen vegetación y suelo húmedo durante buena parte del invierno.",
  "En una casa con finca, drenaje, orientación y cubierta tienen mucho peso. Una parcela puede conservar agua en zonas sombrías durante días después de una sucesión de lluvias.",
  "La ensenada suaviza temperaturas cerca de Arcade, mientras las zonas interiores pueden sentirse algo más húmedas y resguardadas.",
  "El verano reduce mucho el problema del calor sostenido. La contrapartida es una temporada exterior menos larga y más dependiente de la lluvia.",
] as const;

const VIVIR_NUEVO2 = [
  "En Soutomaior, la rutina cambia mucho según se viva en Arcade o en una parroquia interior.",
  "Si se reside en el núcleo, compra, salud, estación y parte del ocio pueden hacerse sin coche. Esa autonomía disminuye rápidamente al entrar en las parroquias.",
  "En Arcade la ría entra en la vida diaria a través del peirao, la desembocadura y la actividad marisquera. No ofrece, sin embargo, una gran playa urbana comparable con Cesantes.",
  "La Festa da Ostra recuerda la importancia del cultivo y la venta de ostras en Arcade. Durante el primer fin de semana de abril el peirao recibe mucha más gente y actividad; el resto del año recupera un ritmo local.",
  "El castillo y sus jardines forman una salida próxima que se puede repetir, pero no sustituyen la vida ordinaria del núcleo. Para quien resida en el interior sí pueden quedar integrados en paseos y recorridos locales.",
  "Frente a Mallorca, la vida en casa exige prestar más atención a humedad, cubierta y exterior. A cambio, disponer de finca, bosque o jardín puede ser compatible con estar a poca distancia de dos ciudades.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Soutomaior no se explica como villa marinera de primera línea: se explica como municipio de interior de ría, con el castillo y el Lérez/Verdugo marcando el paisaje y Vigo y Pontevedra como ciudades de apoyo cercanas. El Castelo de Soutomaior —fortaleza medieval ampliada y restaurada, con jardines y un perfil reconocible— concentra buena parte de la identidad visible: no es un adorno turístico aislado, es el ancla histórica del nombre. Quien llega buscando playa atlántica a pie se equivoca de ficha; quien busca piedra, ribera y quietud relativa, no.",
  "La historia del castillo atraviesa linajes, conflictos y usos posteriores que lo devolvieron al mapa público. Visitarlo es entender por qué el municipio mira más al valle y a la defensa de paso que al oficio de lonja. Alrededor, parroquias y núcleos dispersos sostienen una vida de coche: la escala no es de casco denso con súper bajo la ventana, sino de casas y pequeñas agrupaciones entre verde y pendientes suaves hacia la ría interior.",
  "Arcade aporta otra capa: núcleo con más actividad cotidiana y una relación más directa con la ría de Vigo en su tramo interior, donde el agua es lámina de estuario y no océano abierto. Esa diferencia dentro del mismo municipio importa al comprar: Arcade no es el castillo, y el castillo no es Arcade. El anuncio «Soutomaior» puede ocultar cuál de los dos polos se elige y cuántos minutos quedan hasta la compra seria o hasta Vigo.",
  "El municipio creció a la sombra de las dinámicas de Vigo y Pontevedra: residencia, trayecto laboral y fin de semana en un territorio más barato o más verde que la primera línea de Val Miñor o del Morrazo. Esa historia reciente de «vivir cerca de la ciudad sin vivir en ella» pesa tanto como la medieval. Quien ignore esa dependencia práctica se llevará sorpresa el primer invierno de gestiones y hospital.",
  "El calendario local y las visitas al castillo marcan picos de afluencia sin convertir Soutomaior en destino de masificación costera. Fuera de esos días, el ritmo es de municipio residencial y rural-periurbano. Hoy, leer Soutomaior bien es leer castillo + Arcade + coche hacia la ciudad: tres piezas, no una postal única.",
  "Comprar aquí sigue siendo decidir entre cercanía a Arcade —más vida diaria y ría interior— o entornos más dispersos hacia el castillo y las parroquias, con más quietud y más trayectos. El portal no siempre lo dice; la semana sí.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "En Soutomaior el agua cercana es de ría interior, no de playa atlántica famosa. Desde Arcade la lámina de la ría de Vigo se siente como orilla de estuario: marea, orilla trabajada o de paseo según el tramo, y una luz distinta de la costa abierta. No hay que confundirla con Samil ni con las playas de Nigrán: aquí el baño cotidiano, si existe, es otra experiencia, más de agua abrigada y menos de ola oceánica.",
  "El castillo y su entorno ofrecen paseo de jardín, sombra y vistas de valle más que de espuma. Es una salida de patrimonio y verde que puede entrar en la semana si se vive cerca; no sustituye un arenal. Quien necesite mar de arena abierta tendrá que salir en coche hacia Val Miñor, Vigo o el Morrazo.",
  "Caminar por la ribera o por sendas del municipio pide aceptar desnivel suave, tramos de coche entre núcleos y la lógica de un mapa disperso. Un martes de noviembre el silencio es parte del atractivo; un domingo soleado de primavera pueden aparecer visitas al castillo y más movimiento en accesos. La presión no es la de Baiona en agosto, pero tampoco es cero.",
  "Cuando el día pide ampliar, Redondela aporta frente de ría y puentes; Vigo, ciudad y hospital; Pontevedra, otra capital cercana; Cesantes u otras orillas de ría se alcanzan en trayectos cortos. Soutomaior se entiende mejor como base residencial con salidas elegidas que como municipio donde el baño abre la puerta cada mañana.",
  "En Arcade la ría puede formar parte del horizonte diario; hacia el castillo mandan piedra, jardín y valle. Esa diferencia describe mejor el municipio que inventar una costa que no tiene. El coche enlaza ambas y enlaza la ciudad: sin él, la semana se encoge.",
  "Para océano abierto hay que salir. Eso no invalida Soutomaior: lo define. Quien acepta ría interior, castillo y proximidad a Vigo encuentra un trato claro; quien esperaba Area Grande o Samil bajo la ventana eligió mal el mapa.",
  "El cierre útil es simple: aquí el agua cotidiana es de estuario y de salida; el Atlántico es plan. El castillo ancla la visita; Arcade ancla más la vida. Elegir entre ambos pesa más que el nombre del concello en el anuncio.",
] as const;

const CASA_NUEVO2 = [
  "La vivienda cambia mucho entre Arcade y las parroquias interiores.",
  "En Arcade predominan pisos y pequeños edificios próximos a comercio, estación y servicios. Para vivir todo el año, ascensor, aparcamiento y aislamiento frente al ruido de la N-550 o el tren pueden pesar mucho.",
  "En el interior predominan casas, chalés y fincas. Allí hay que mirar acceso, saneamiento, cubierta, drenaje, orientación y mantenimiento de parcela.",
  "Una casa con terreno puede dar más espacio por el mismo presupuesto, pero conviene calcular cuántos desplazamientos diarios exigirá. Si compra, actividades y consultas requieren coche, esa dependencia forma parte del coste real de vivir allí.",
  "La fibra es parcial según dirección, por lo que conviene verificar cobertura en la vivienda exacta.",
  "El precio medio municipal es 2.111 €/m².",
] as const;

const CASA_ADVERTENCIA_MICROZONA = [
  "Arcade y el interior no deben compararse como si ofrecieran la misma autonomía.",
  "Arcade concentra servicios y estación. Las parroquias ofrecen casa, finca y tranquilidad, pero aumentan el coche.",
] as const;

const CASA_QUE_CONVIENE_REVISAR = [
  "Desde un piso de Arcade, hacer andando compra, farmacia, centro de salud y estación.",
  "Escuchar tren y N-550 con las ventanas abiertas si la vivienda queda cerca.",
  "En una casa, revisar drenaje, cubierta, muros, orientación, saneamiento y acceso.",
  "Comprobar la fibra fija en la dirección exacta.",
  "Hacer el trayecto real a Pontevedra y Montecelo en el horario habitual.",
  "Si se vive junto al río o en una cota baja, consultar la situación de la parcela respecto a zonas inundables antes de comprar.",
] as const;

const CASA_MERCADO_REVENTA = [
  "Arcade puede interesar tanto a quien quiere utilizar el tren como a quien necesita servicios cotidianos cerca y desplazarse con frecuencia hacia Pontevedra o Vigo.",
  "Un piso accesible, bien aislado y caminable a los servicios puede interesar a perfiles muy distintos.",
  "En las casas rurales pesan mucho más las características concretas de la propiedad. Buen acceso, una parcela manejable, cubierta en buen estado, buena orientación y conexión a internet pueden ampliar el número de compradores interesados.",
  "Una finca grande pero difícil de mantener o una casa con mucho coche diario puede reducir compradores futuros.",
] as const;

const ENCAJA_SI_NUEVO2 = [
  "Encaja si se quiere una escala de pueblo con tren y servicios concentrados en Arcade.",
  "También si una casa con terreno interesa más que poder hacer compra y gestiones andando y se acepta utilizar coche desde el interior.",
  "Puede encajar especialmente si Pontevedra y Vigo deben estar cerca sin vivir dentro de ninguna de las dos ciudades.",
  "Y encaja si ría, río, castillo y bosque bastan aunque no exista una gran playa urbana propia.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Encaja peor si todos los servicios deben quedar a pie desde una casa de parroquia.",
  "También si una gran playa propia forma parte central de la decisión.",
  "Puede resultar menos adecuado si se quiere fibra garantizada sin comprobar la dirección concreta.",
  "Y encaja peor si la vivienda rural se compra por terreno y silencio sin asumir mantenimiento, humedad y desplazamientos.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Pasar una mañana normal en Arcade y hacer a pie los recados principales.",
  "Utilizar la estación y comprobar horarios que encajen con la rutina real.",
  "Recorrer el entorno del Verdugo y del peirao para entender qué tipo de agua entra en la vida diaria.",
  "Visitar el castillo y comprobar si sería realmente una salida repetible desde la vivienda.",
  "Hacer el trayecto a hospital y compras grandes.",
  "Y visitar cualquier casa rural después de varios días de lluvia.",
] as const;

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m².";

const CASA_FILA_PRECIOS = {
  municipio: "Soutomaior",
  a2: "178.380 €",
  a3: "246.987 €",
  b2: "144.076 €",
  b3: "199.490 €",
  m2: "2.111 €/m²",
} as const;

const FOTO_COMO_1 = {
  src: "/fotos/vigo-e-ria/soutomaior-castelo.jpg",
  pie: "Ventanales y piedra del castillo entre el bosque",
} as const;

const FOTO_HIST_1 = {
  src: "/fotos/vigo-e-ria/soutomaior-torres.jpg",
  pie: "La fortaleza vinculada a Pedro Madruga, señores de la Galicia medieval",
} as const;

const FOTO_HIST_2 = {
  src: "/fotos/vigo-e-ria/soutomaior-pontesampaio.jpg",
  pie: "Pontesampaio: orilla y puente histórico sobre el río Verdugo",
} as const;

const FOTO_MAR_1 = {
  src: "/fotos/vigo-e-ria/soutomaior-verdugo.jpg",
  pie: "El Verdugo cerca de Pontesampaio, antes de encontrarse con la ría",
} as const;

const FOTO_MAR_2 = {
  src: "/fotos/vigo-e-ria/soutomaior-camelias.jpg",
  pie: "Jardines del castillo: camelias y sombra de invierno gallego",
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

export default function Nuevo2SoutomaiorPage() {
  const ficha = municipioPorSlug("soutomaior");
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
        {COMO_SE_VIVE_NUEVO2.map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_COMO_1.src} pie={FOTO_COMO_1.pie} />
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Frente a Mallorca" varianteTarjetaV1>
        <h3 className="mt-1 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Clima
        </h3>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas
            texto={CLIMA_NUEVO2[0]}
            fragmentos={["20,5 °C", "9,5 °C"]}
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
        {CASA_NUEVO2.slice(0, 5).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={CASA_NUEVO2[5]} fragmentos={["2.111 €/m²"]} />
        </p>
        {CASA_NUEVO2.slice(6).map((p) => (
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
