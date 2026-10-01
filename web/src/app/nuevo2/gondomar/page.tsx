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
 * NUEVO2 — Gondomar (Val Miñor).
 * Texto: Lote_Val_Minor_3_CERTIFICADOS_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Val Miñor reúne tres formas distintas de vivir entre la costa y el interior del valle: Baiona funciona como villa marítima compacta y turística; Nigrán reparte playas, servicios y vivienda entre varias microzonas; Gondomar ocupa el interior, con más casas y terreno y una relación menos inmediata con el mar. Vigo queda lo bastante cerca para completar hospital, empleo, aeropuerto y servicios de mayor escala.",
  "Gondomar ocupa el interior del valle del Miñor. Frente a la bahía de Baiona y las playas de Nigrán, aquí predominan una pequeña villa de servicios, parroquias, casas con finca y laderas hacia la Serra do Galiñeiro.",
  "El núcleo concentra comercio, farmacia y centro de salud; fuera aparecen Mañufe, Donas, Chaín, Vincios o Morgadáns. El mar sigue estando cerca, pero se utiliza como salida hacia Nigrán o Baiona, no como parte inmediata de la puerta de casa.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Gondomar tiene una escala de villa pequeña rodeada de parroquias.",
  "En el núcleo se pueden resolver a pie bastantes necesidades básicas: supermercado, farmacia, centro de salud, comercio y otros servicios cotidianos. No ofrece la variedad urbana de Vigo ni la relación directa con el mar de Baiona o Nigrán.",
  "Fuera de la villa cambia rápidamente la semana. Una casa en Vincios, Morgadáns, Chaín o Donas puede ganar terreno y tranquilidad, pero compra, actividades y ocio empiezan a depender más del coche.",
  "Vigo queda suficientemente cerca para utilizarlo con frecuencia. Para atención hospitalaria de mayor complejidad, el Hospital Álvaro Cunqueiro está aproximadamente a 15 km y unos 15 minutos desde la villa de Gondomar; el aeropuerto de Vigo queda a unos 20 minutos. Son tiempos orientativos y cambian según la parroquia y el tráfico.",
  "La costa queda suficientemente cerca para utilizarla durante una tarde. Praia América es una de las playas más próximas, aproximadamente a 12 minutos desde la villa de Gondomar, aunque el tiempo real cambia según la parroquia y el tráfico.",
  "Vivir fuera de la primera línea permite mantener hospital, ciudad y playa dentro de trayectos relativamente cortos, a cambio de que el coche forme parte de la semana con mucha más frecuencia.",
  "La estacionalidad se nota menos que en la costa. Agosto no transforma Gondomar de la misma manera que Praia América o Baiona. Las fiestas parroquiales producen picos locales, pero la vida anual mantiene un ritmo más estable.",
] as const;

const CLIMA_NUEVO2 = [
  "Gondomar conserva un clima templado, pero su posición interior modifica la experiencia respecto a Baiona y Nigrán.",
  "En verano, la temperatura media ronda los 20,5 °C. El valle puede acumular algo más de calor que la costa inmediata porque recibe menos moderación directa del océano.",
  "Eso no convierte Gondomar en un verano mediterráneo, pero sí hace importante comprobar orientación y exposición solar en una vivienda concreta.",
  "En otoño e invierno aumentan lluvia y humedad. En casas con finca, el comportamiento del terreno, la sombra de la ladera y la ventilación pueden pesar más que una diferencia pequeña de temperatura media.",
  "La orientación es especialmente importante en parroquias donde monte y relieve reducen las horas de sol directo durante parte del invierno.",
  "Frente a Mallorca, el cambio se percibe en la necesidad de gestionar humedad, terreno mojado, vegetación y una casa que debe funcionar bien durante semanas lluviosas.",
] as const;

const VIVIR_NUEVO2 = [
  "En Gondomar es más fácil encontrar casas con parcela, silencio y una relación inmediata con monte y paisaje rural que junto a la primera línea de Baiona o Nigrán.",
  "La contrapartida es el coche. En el núcleo puede reducirse para la vida básica; en las parroquias suele intervenir para compra, actividades, playa y buena parte de la vida social.",
  "La proximidad a Vigo evita que esa dispersión se convierta necesariamente en aislamiento. Hospital y aeropuerto siguen dentro de trayectos relativamente cortos desde muchas zonas del municipio.",
  "La playa funciona como salida y no como paseo espontáneo. Se puede llegar rápidamente a Praia América o continuar hacia otros arenales de Nigrán y Baiona, pero no se baja andando con una toalla desde el centro de Gondomar.",
  "Para alguien que llega desde Mallorca, el cambio más profundo puede ser ese: menos densidad, más parcela y monte, pero una semana organizada alrededor de trayectos cortos en coche.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Gondomar se desarrolló como territorio de valle antes que como núcleo urbano compacto. El río Miñor articula las tierras bajas y las parroquias se distribuyen entre el fondo del valle y las laderas que lo rodean —Vincios, Donas, Chaín, Morgadáns y otras—. Lo que hoy parece municipio de casas de piedra y monte fue antes una red parroquial sin una sola plaza que lo resolviera todo. La villa concentra ayuntamiento y comercio básico; el resto del término pide coche casi siempre. Quien busca un casco amurallado se equivoca de mapa: aquí la historia está repartida.",
  "Las montañas conservan huellas mucho más antiguas. En Vincios, al pie de la Serra do Galiñeiro —cumbres de granito de unos 700 m con vistas a la ría de Vigo y a las Cíes—, la estación rupestre de Auga da Laxe reúne grabados atribuidos al Bronce Inicial, entre el III y el II milenio a. C. Quien sube al monte no hace solo deporte: camina sobre un paisaje ya marcado miles de años antes de la villa actual, con petroglifos junto al camino y áreas de recreo para empezar la ruta.",
  "Otra capa histórica aparece en el Pazo de Gondomar, vinculado a Diego Sarmiento de Acuña, primer conde de Gondomar. El conjunto conserva el rastro de una residencia señorial reforzada y transformada a lo largo de los siglos. Iglesias parroquiales y caminos de valle completan esa lectura dispersa. Quien conozca Gondomar solo por el nombre del pazo debe sumar Galiñeiro, Miñor y la lógica de parroquias que todavía organiza la compra de casa.",
  "Hoy, comprar «en Gondomar» sigue siendo elegir entre villa —más servicios a pie— o parroquias de valle y ladera, con más terreno, más sombra de monte y más coche. El anuncio no distingue cuál de las dos ni cuánta pendiente hay hasta la AG-57.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "Gondomar no tiene costa marítima. El agua cotidiana es el río Miñor y sus afluentes: ribera, vegetación y un ritmo de valle, no de ola atlántica. Desde la villa se puede incorporar esa orilla a paseos cortos. La Ruta de Ánimas ofrece un recorrido lineal de unos 2 km desde Praza Paradela hacia el Parque de Ánimas y continúa junto al Miñor en dirección a Peitieiros. Es una salida muy diferente de las rutas de montaña: empieza prácticamente en la villa, sigue vegetación de ribera y permite caminar sin convertir cada tarde en una salida larga. En invierno esa ribera se nota más húmeda y silenciosa que cualquier postal de verano en Praia América.",
  "La Serra do Galiñeiro cambia por completo el terreno. Desde la zona de Vincios aparecen caminos de monte, granito, desnivel y vistas amplias hacia la ría y las Cíes. Allí el calzado, la pendiente y las condiciones meteorológicas importan mucho más que en el paseo del río. No debe confundirse esa experiencia con el paseo cotidiano de la ribera: son dos registros del mismo municipio, y confundirlos lleva a comprar esperando playa donde hay camino de monte.",
  "Para baño marítimo hay que salir del municipio. Praia América queda aproximadamente a doce minutos desde la referencia municipal; Baiona y Patos amplían las opciones con recorridos algo distintos y, en agosto, más presión de aparcamiento. Vigo queda a unos quince o veinte minutos cuando hace falta hospital o ciudad. Aquí el día a día pide valle; la playa, un trayecto corto pero deliberado.",
  "En la villa el río y los servicios quedan más cerca de la rutina; en las parroquias el monte o la parcela pesan más y la playa siempre implica desplazamiento. Esa diferencia describe mejor Gondomar que fingir que tiene orilla atlántica propia. El Álvaro Cunqueiro cubre la sanidad hospitalaria en Vigo.",
] as const;

const CASA_NUEVO2 = [
  "En Gondomar es frecuente encontrar casas con parcela, aunque en la villa también existen pisos para quien prioriza servicios y menor mantenimiento.",
  "En el núcleo se puede ganar autonomía cotidiana y reducir desplazamientos. En las parroquias aparecen más terreno, privacidad y paisaje, pero aumenta el coche.",
  "Una finca debe evaluarse por algo más que su superficie. Pendiente, drenaje, orientación, cierres, vegetación y acceso determinan cuánto trabajo exige durante el año.",
  "En la casa conviene revisar cubierta, aislamiento, carpinterías, ventilación y señales de humedad. Una planta baja o una fachada con poco sol puede comportarse de forma muy distinta después de varias semanas lluviosas.",
  "Como referencia municipal, Gondomar se sitúa en 1.286 €/m².",
] as const;

const CASA_ADVERTENCIA_MICROZONA = [
  "No tratar la villa y las parroquias como una única experiencia. El núcleo permite una semana más autónoma. Una casa en Vincios, Morgadáns, Chaín o zonas similares puede ofrecer más terreno y silencio, pero hay que medir de nuevo compra, actividades, playa y accesos. La orientación y la topografía añaden otra diferencia incluso entre casas de la misma parroquia.",
] as const;

const CASA_QUE_CONVIENE_REVISAR = [
  "Hacer desde la vivienda los trayectos reales a supermercado, farmacia, centro de salud y salida hacia Vigo.",
  "Conducir también hasta la playa que se utilizaría habitualmente. Doce minutos desde una referencia municipal no significan doce minutos desde cualquier parroquia.",
  "Visitar la finca después de lluvia y observar drenaje, zonas encharcadas, muros, accesos y partes que permanecen en sombra.",
  "Comprobar la orientación a distintas horas, especialmente si la vivienda está cerca de una ladera o rodeada de vegetación.",
  "Verificar fibra en la dirección concreta y no asumir la misma cobertura en todo el municipio.",
  "Si el atractivo principal es una parcela grande, recorrerla entera e imaginar el mantenimiento dentro de varios años.",
] as const;

const CASA_MERCADO_REVENTA = [
  "Gondomar mantiene demanda de vivienda habitual y un precio medio municipal claramente inferior al de Baiona y Nigrán.",
  "Eso no convierte cualquier casa grande en una compra fácil de revender. Acceso, estado, orientación, parcela manejable y distancia a servicios siguen determinando el público potencial.",
  "Una vivienda próxima a la villa puede interesar a quien busca más espacio sin perder demasiada autonomía. En parroquias más dispersas, la casa resulta más atractiva cuando ofrece a cambio del coche una parcela útil, tranquilidad, buenas vistas o una vivienda especialmente cómoda.",
  "Para reventa ayuda especialmente que la propiedad sea fácil de mantener y que los accesos hacia Vigo y el resto del valle sean sencillos.",
] as const;

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m².";

const CASA_FILA_PRECIOS = {
  municipio: "Gondomar",
  a2: "108.667 €",
  a3: "150.462 €",
  b2: "87.770 €",
  b3: "121.527 €",
  m2: "1.286 €/m²",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Encaja si se busca casa, terreno y tranquilidad sin alejar hospital, aeropuerto y Vigo.",
  "También si el mar puede funcionar como salida de una tarde en lugar de estar en la puerta. Praia América y otras playas del valle siguen suficientemente cerca para utilizarlas con frecuencia en coche.",
  "Puede encajar especialmente si se prefiere volver del litoral a una casa más silenciosa y con monte cerca.",
  "Y encaja si se acepta organizar la semana por microzona: núcleo para mayor autonomía o parroquia para ganar espacio y privacidad.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Encaja peor si la razón principal de la mudanza es bajar andando a una playa marítima. Gondomar es interior y no debe venderse como una localidad costera.",
  "Tampoco si se quiere prescindir casi por completo del coche viviendo en una parroquia. Fuera del núcleo, los desplazamientos forman parte de la rutina.",
  "Puede resultar menos adecuado si mantener una finca húmeda, vegetación y cierres es una carga que no se quiere asumir.",
  "Y encaja peor si se busca un verano directamente moderado por el mar y una vida cotidiana organizada alrededor del paseo marítimo.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Pasar una mañana en la villa y otra en la parroquia concreta que se esté considerando. La diferencia de rutina puede ser mayor de lo que sugieren pocos kilómetros.",
  "Hacer los trayectos reales a compra, farmacia, hospital, Vigo y playa desde la vivienda candidata.",
  "Recorrer la finca después de lluvia y comprobar qué partes permanecen húmedas o en sombra.",
  "Caminar junto al Miñor desde la villa y hacer otro día una salida al Galiñeiro. Así se puede comprobar si río y monte ofrecen realmente el tipo de exterior que se busca.",
  "Y si la playa es importante, conducir hasta Praia América con el tráfico que probablemente se encontrará en verano antes de decidir que la distancia es irrelevante.",
] as const;

const FOTO_COMO_VALLE = {
  src: "/fotos/val-minor/gondomar-valle.jpg",
  pie: "Gondomar en el valle del Miñor: villa pequeña, parroquias y monte",
} as const;

const FOTO_COMO_VILLA = {
  src: "/fotos/val-minor/gondomar-villa.jpg",
  pie: "La villa de Gondomar, centro de mercado y servicios para las parroquias",
} as const;

const FOTO_HISTORIA_GALINEIRO = {
  src: "/fotos/val-minor/gondomar-galineiro.jpg",
  pie: "Serra do Galiñeiro: granito y cumbres sobre la parroquia de Vincios",
} as const;

const FOTO_HISTORIA_VINCIOS = {
  src: "/fotos/val-minor/gondomar-vincios.jpg",
  pie: "Vincios, al pie del Galiñeiro: por estos caminos se llega a petroglifos de hace unos cuatro mil años",
} as const;

const FOTO_MAR_RIO = {
  src: "/fotos/val-minor/gondomar-rio-minor.jpg",
  pie: "El Miñor hacia la desembocadura: el río que da nombre al valle",
} as const;

const FOTO_MAR_MORGADANS = {
  src: "/fotos/val-minor/gondomar-morgadans.jpg",
  pie: "Morgadáns y las parroquias altas: casas, fincas y monte lejos del ruido de la costa",
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

export default function Nuevo2GondomarPage() {
  const ficha = municipioPorSlug("gondomar");
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
        {COMO_SE_VIVE_NUEVO2.slice(0, 3).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas
            texto={COMO_SE_VIVE_NUEVO2[3]}
            fragmentos={["15 minutos", "20 minutos"]}
          />
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={COMO_SE_VIVE_NUEVO2[4]} fragmentos={["12 minutos"]} />
        </p>
        {COMO_SE_VIVE_NUEVO2.slice(5).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_COMO_VALLE.src} pie={FOTO_COMO_VALLE.pie} />
        <Foto src={FOTO_COMO_VILLA.src} pie={FOTO_COMO_VILLA.pie} />
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Frente a Mallorca" varianteTarjetaV1>
        <h3 className="mt-1 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Clima
        </h3>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          {CLIMA_NUEVO2[0]}
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={CLIMA_NUEVO2[1]} fragmentos={["20,5 °C"]} />
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
        <Foto src={FOTO_HISTORIA_GALINEIRO.src} pie={FOTO_HISTORIA_GALINEIRO.pie} />
        {DE_DONDE_VIENE_NUEVO2.slice(2, 4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_HISTORIA_VINCIOS.src} pie={FOTO_HISTORIA_VINCIOS.pie} />
        {DE_DONDE_VIENE_NUEVO2.slice(4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Mar, río y camino" varianteTarjetaV1>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[0]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[1]}</p>
        <Foto src={FOTO_MAR_RIO.src} pie={FOTO_MAR_RIO.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[2]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[3]}</p>
        <Foto src={FOTO_MAR_MORGADANS.src} pie={FOTO_MAR_MORGADANS.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(4).map((p) => (
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
          <ConNegritas texto={CASA_NUEVO2[4]} fragmentos={["1.286 €/m²"]} />
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
