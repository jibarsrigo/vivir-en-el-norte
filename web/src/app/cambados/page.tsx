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
 * NUEVO2 — Cambados (O Salnés).
 * Texto: Lote_O_Salnes_REVISION_INTEGRAL_CERTIFICADA_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "O Salnés reúne villa histórica, viñedo, costa de ría, isla y ciudad en un espacio muy compacto alrededor de Arousa. Meaño ocupa el interior de viñedos y parroquias; Cambados combina casco histórico, vino y marisqueo; A Illa de Arousa vive rodeada de mar y depende de un único puente; Vilanova mezcla villa, pequeñas playas y parroquias de viñedo; Vilagarcía aporta hospital, tren, puerto y la mayor concentración de servicios. Las distancias son cortas, pero la posibilidad de vivir a pie, el acceso al baño y el peso del coche cambian mucho entre municipios.",
  "Cambados es la villa histórica de la zona. Fefiñáns concentra plaza, pazo e iglesia; Santo Tomé mantiene una relación más marinera con la ría; Corvillón, Vilariño y Castrelo se extienden entre bodegas y viñedos.",
  "El casco permite resolver bastante a pie y mantener el paseo de ría dentro de la rutina. La costa inmediata es más de marea y marisqueo que de gran playa urbana, mientras las parroquias ganan casa y finca a cambio de más coche.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Cambados funciona como una villa durante todo el año, no solo como destino de vino y patrimonio. En el casco se concentran mercado, centro de salud, farmacias, supermercados, colegios, instituto, comercio y restauración.",
  "Vivir cerca de Fefiñáns o de las calles centrales permite encadenar muchos recados a pie. La plaza monumental no queda separada de la vida diaria: forma parte del mismo tejido de calles donde se compra, se toma algo o se va al mercado.",
  "Santo Tomé cambia el tono. Está más pegado a la ría y conserva una relación marinera visible. La marea, los bancos de marisqueo y el paseo forman parte del paisaje cotidiano, pero no debe confundirse esa proximidad al agua con tener una gran playa urbana de baño.",
  "Corvillón, Vilariño y Castrelo permiten encontrar casas, fincas y viñedos a muy poca distancia del centro. La ganancia es espacio y tranquilidad; la contrapartida es que compra, instituto, salud o una cena en el casco dejan de estar necesariamente a pie.",
  "El Hospital do Salnés queda aproximadamente a quince minutos. Vigo ronda los treinta y cinco minutos y Santiago, unos cincuenta. La cercanía de Vilagarcía reduce la necesidad de una ciudad grande para hospital o compras de mayor tamaño.",
  "La Festa do Albariño transforma el centro durante la primera semana de agosto. No es una actividad localizada en un recinto cerrado: ocupa calles y plazas con casetas, conciertos y mucha afluencia. Una vivienda céntrica debe conocerse durante esos días si el ruido nocturno o el aparcamiento son importantes.",
  "San Cristovo y el Carmen de Santo Tomé añaden otros momentos festivos. Fuera de esas fechas, la villa recupera un ritmo mucho más ordinario, con vida propia y actividad económica vinculada al vino, el comercio y la ría.",
] as const;

const CLIMA_NUEVO2 = [
  "Cambados tiene un verano mucho más suave que Mallorca. La media estival ronda los 19,5 °C y la invernal los 10 °C.",
  "La referencia climática utilizada para el municipio ronda 1.350 mm de lluvia al año. La diferencia con Mallorca se nota menos en el frío extremo que en la frecuencia de días húmedos, cubiertos o de lluvia durante otoño e invierno.",
  "La ría protege del oleaje atlántico directo, pero no elimina la humedad. Las viviendas de granito y los edificios antiguos pueden conservar sensación húmeda si tienen poca ventilación o reciben poco sol.",
  "El verano permite caminar y utilizar terrazas durante más horas sin calor persistente. El agua de la ría es más fría que el Mediterráneo y la marea modifica mucho la apariencia del frente marítimo.",
  "En una vivienda del casco conviene valorar luz natural, ventilación, cubierta y aislamiento con el mismo cuidado que el carácter arquitectónico. Una fachada bonita no garantiza una casa confortable en enero.",
] as const;

const VIVIR_NUEVO2 = [
  "Cambados permite una vida bastante caminable si se elige bien el casco. Mercado, salud, comercio, colegios, cafés y paseo pueden formar parte de la misma mañana.",
  "La relación con el mar es de ría, marea y trabajo. El agua está delante, pero no funciona como una gran playa urbana. Para un baño de arena más claro hay que desplazarse a otros puntos de la comarca.",
  "El vino tampoco es solo una actividad turística. Bodegas, viñedos, vendimia y negocios vinculados al Albariño forman parte del municipio durante todo el año.",
  "El verano introduce más visitantes y el Albariño altera claramente el centro durante unos días. El resto del año la villa sigue abierta y mantiene suficiente actividad para no depender del veraneo.",
  "En las parroquias aparece una versión distinta de Cambados: más terreno, más silencio y más casa, pero también más coche. La diferencia entre vivir a cinco minutos del centro y poder llegar andando a él debe comprobarse sobre el terreno.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Cambados se entiende como villa histórica de O Salnés frente a la ría de Arousa: Fefiñáns, Santo Tomé y el tejido de plazas y pazos organizan una identidad de piedra y vino que no se reduce a una playa. El conjunto de Fefiñáns —plaza, pazo, iglesia de San Bieito— concentra la imagen más reconocible: escala de villa, no de ciudad, con comercio y paseo que todavía permiten mucha vida a pie en el casco. Quien llega solo por el albariño de etiqueta se pierde el peso de ese centro caminable.",
  "Santo Tomé aporta la cara más marinera: cercanía a la ría, oficio ligado al marisqueo y al agua, y una atmósfera distinta de la plaza monumental. No es un barrio decorativo: es otro polo dentro del mismo municipio. Detrás, Corvillón, Vilariño o Castrelo abren el mapa de viñedo y parroquia, donde la casa entre cepas pide coche para la compra seria del casco.",
  "La historia del vino —albariño, bodegas, Rías Baixas— atraviesa la economía y el paisaje. No es un añadido turístico reciente del todo: es una forma de ocupar el territorio que se ve en muros, caminos y en el calendario de fiestas y vendimia. El Pazo de Fefiñáns y otras casas señoriales recuerdan que la villa acumuló poder agrario y comercial antes del veraneo moderno.",
  "Cambados vivió también de la ría: marisqueo, tráfico de Arousa y una relación cotidiana con la orilla que cambia según la marea. Esa capa marinera convive con la monumental sin fundirse: se puede vivir mirando más a la plaza o más al agua. Las fiestas y el verano aumentan afluencia; el resto del año la villa sostiene una base de servicios que la diferencia de parroquias puramente residenciales.",
  "Hoy, comprar «en Cambados» es decidir entre casco de Fefiñáns —piedra, autonomía a pie, agosto más lleno— Santo Tomé —más ría— o viñedo, con más quietud y más coche. El anuncio municipal raramente lo detalla; la semana lo deja claro.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "En Cambados el agua cercana es de ría de Arousa, no de océano abierto tipo A Lanzada. Desde Santo Tomé y tramos del frente la lámina, los bateas y la marea organizan la escena: olor a marisco, orilla trabajada y un horizonte de ría que cambia con el día. El baño existe en playas locales de escala modesta; no hay que esperar un arenal atlántico interminable bajo la ventana del pazo.",
  "Caminar el casco y bajar hacia la orilla permite encadenar plaza, comercio y agua en un radio corto si se vive bien situado. El terreno es más amable que una villa de acantilado, pero las distancias engañan cuando se elige casa entre viñedos: lo que en mapa parece «junto a Cambados» puede pedir coche para repetir el mismo paseo cada tarde.",
  "Cuando el día pide ampliar, A Illa de Arousa aporta isla y puente; O Grove y A Lanzada, océano y dunas; Vilagarcía, ciudad y hospital; el mirador de Lobeira, vistas. Cambados sostiene villa y ría en la rutina; el Atlántico abierto queda como salida elegida.",
  "Un martes de noviembre el frente de ría respira; un domingo de agosto el casco y los accesos se notan. La presión no alcanza siempre la de Baiona, pero existe. Quien quiera silencio absoluto en primera línea de plaza se equivoca de temporada.",
  "En Fefiñáns manda la piedra y el paseo de villa; en Santo Tomé, la ría; en el viñedo, la parcela y el coche. Esa diferencia describe mejor Cambados que inventariar playas. El albariño está en el paisaje; el agua, en la elección de microzona. Probar un día de semana y un sábado de verano en la misma calle evita comprar solo con la imagen de la plaza vacía.",
  "El cierre útil: villa histórica con ría cerca y océano a trayecto. Elegir casco, Santo Tomé o cepas pesa más que la marca Cambados en el portal. Vilagarcía cubre hospital y ciudad de apoyo a minutos; A Lanzada cubre el Atlántico cuando se quiere ola y duna de propósito.",
] as const;

const CASA_NUEVO2 = [
  "En Cambados, comprar en el casco, en Santo Tomé o en una parroquia de viñedo significa comprar formas de vida bastante distintas.",
  "En Fefiñáns y las calles centrales predominan pisos y casas entre medianeras. La ventaja es poder ir andando al mercado, al comercio, al centro de salud y a buena parte de la restauración. La contrapartida aparece en edificios antiguos sin ascensor, calles con poco aparcamiento y viviendas que durante la Festa do Albariño pueden recibir bastante más ruido y movimiento del que muestran en una visita de invierno.",
  "En Santo Tomé aparecen casas y pequeños edificios más próximos a la ría y al antiguo barrio marinero. Allí conviene distinguir entre tener el agua cerca y tener una playa de baño: la costa inmediata es sobre todo paseo, marea y marisqueo. También hay que comprobar exposición a humedad y salitre, aparcamiento y cuánto se hace realmente a pie hasta el centro.",
  "En Corvillón, Vilariño o Castrelo aparecen más casas con parcela entre viñedos. Se gana espacio, jardín y tranquilidad, pero la compra, el centro de salud, el instituto o una salida al casco suelen introducir más coche. Antes de pagar por terreno conviene comprobar acceso, pendiente, drenaje y cuánto mantenimiento exigirá la finca.",
  "En una casa de piedra, la apariencia exterior no basta para saber cómo se vivirá en invierno. Hay que revisar cubierta, ventilación, aislamiento, carpinterías, saneamiento y señales de humedad. Si es posible, una visita después de varios días de lluvia resulta mucho más útil que una visita soleada.",
  "En un piso del centro importan ascensor, distribución, orientación, aislamiento acústico y posibilidad real de aparcar. La cercanía a Fefiñáns puede ser una ventaja para vivir a pie, pero también aumenta la exposición a las semanas de mayor actividad.",
  "Precio medio municipal utilizado: 1.432 €/m².",
] as const;

const CASA_ADVERTENCIA_MICROZONA = [
  "Fefiñáns y el centro favorecen vida a pie; Santo Tomé acerca la ría; Corvillón, Vilariño y Castrelo ofrecen más parcela y viñedo. El precio debe compararse junto con ruido de agosto, aparcamiento, humedad y necesidad diaria de coche.",
] as const;

const CASA_MERCADO_REVENTA = [
  "Cambados tiene demanda residencial propia y un atractivo reconocible ligado a la villa, el vino y la ría. En una futura venta ayudan ubicación caminable, ascensor cuando corresponda, buen estado, luz y aparcamiento razonable. En las parroquias pesan más el acceso, la orientación, la calidad de la rehabilitación y un terreno que no resulte excesivamente difícil de mantener.",
] as const;

const ENCAJA_SI_NUEVO2 = [
  "Se busca una villa histórica donde mercado, comercio, salud, restauración y paseo puedan formar parte de la semana a pie.",
  "El mar puede vivirse como ría, marea y marisqueo sin exigir una gran playa urbana delante de casa.",
  "El vino, el patrimonio y la actividad de todo el año pesan más que una experiencia de resort.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "La playa de arena a pie es una condición esencial.",
  "El silencio durante la primera semana de agosto es imprescindible en una vivienda céntrica.",
  "Se busca mucha obra nueva o una casa amplia con terreno sin utilizar coche.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Pasar un día completo a pie desde la vivienda candidata.",
  "Volver durante la Festa do Albariño si la vivienda está cerca de Fefiñáns, A Calzada o recorridos de gran actividad.",
  "Revisar humedad, cubierta y ventilación después de lluvia en casas antiguas.",
  "Comprobar aparcamiento y ascensor en pisos céntricos.",
  "Hacer el trayecto real al Hospital do Salnés y a la playa que se usaría con frecuencia.",
] as const;

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m².";

const CASA_FILA_PRECIOS = {
  municipio: "Cambados",
  a2: "121.004 €",
  a3: "167.544 €",
  b2: "97.734 €",
  b3: "135.324 €",
  m2: "1.432 €/m²",
} as const;

const COMPARA_HREF_NUEVO2 = "/compara/?vs=cambados,meano,a-illa-de-arousa,vilanova-de-arousa,vilagarcia-de-arousa";

const FOTO_COMO_1 = {
  src: "/fotos/o-salnes/cambados-santo-tome.jpg",
  pie: "Santo Tomé, barrio marinero frente a Arousa",
} as const;

const FOTO_COMO_2 = {
  src: "/fotos/o-salnes/cambados-santa-marina.jpg",
  pie: "Santa Mariña Dozo, arcos góticos abiertos al cielo",
} as const;

const FOTO_HIST_1 = {
  src: "/fotos/o-salnes/cambados-san-sadurnino.jpg",
  pie: "San Sadurniño, torre defensiva en la marea",
} as const;

const FOTO_HIST_2 = {
  src: "/fotos/o-salnes/cambados-pastora.jpg",
  pie: "A Pastora mira sobre villa, viñedos y ría",
} as const;

const FOTO_MAR_1 = {
  src: "/fotos/o-salnes/cambados-pazo-interior.jpg",
  pie: "Pazo de Fefiñáns: granito y memoria del Albariño",
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

export default function Nuevo2CambadosPage() {
  const ficha = municipioPorSlug("cambados");
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
          <ConNegritas texto={CASA_NUEVO2[6]} fragmentos={["1.432 €/m²"]} />
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
