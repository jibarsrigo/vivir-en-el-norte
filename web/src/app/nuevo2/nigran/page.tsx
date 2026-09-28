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
 * NUEVO2 — Nigrán (Val Miñor).
 * Texto: Lote_Val_Minor_3_CERTIFICADOS_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Val Miñor se reparte entre costa y valle. Baiona funciona como villa marítima compacta; Gondomar ocupa el interior; Nigrán queda entre ambos modelos y es el municipio que más depende de la microzona elegida.",
  "No existe un único Nigrán residencial. A Ramallosa concentra comercio y servicios junto al Miñor; Panxón conserva puerto y una pequeña escala marinera; Praia América forma una larga franja residencial junto a la playa; Patos mira a una costa más abierta y ligada al surf.",
  "Tierra adentro aparecen Priegue, Camos, Parada, Chandebrito y otras parroquias donde la experiencia cambia hacia casas, jardines, laderas y coche.",
  "Por eso dos viviendas con la misma dirección municipal pueden ofrecer semanas completamente diferentes. Aquí la microzona no es un matiz: es parte central de la decisión.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Nigrán tiene servicios suficientes para una vida anual sólida, pero están repartidos. Centro de salud, supermercados, farmacias, colegios y equipamientos no forman un único casco continuo.",
  "A Ramallosa es una de las zonas más prácticas para la compra y los servicios. Panxón permite combinar una pequeña vida de núcleo con puerto, paseo y playa. Praia América prioriza la relación con la costa. Patos añade un ambiente distinto, más abierto al océano y muy ligado al surf.",
  "En parroquias interiores se puede ganar casa, jardín y tranquilidad, pero aumenta el papel del coche. No conviene comprar en Priegue o Camos extrapolando la caminabilidad que se ha visto durante una tarde en Panxón.",
  "Vigo está suficientemente cerca para entrar con facilidad en la rutina laboral, sanitaria o comercial. Para atención hospitalaria de mayor complejidad, la referencia práctica está en el área de Vigo; el Hospital Álvaro Cunqueiro queda aproximadamente a 15 km y unos 15 minutos desde la referencia municipal. El aeropuerto de Vigo queda a unos 20 minutos. Son tiempos orientativos y dependen de la microzona y del tráfico.",
  "El verano aumenta claramente la ocupación de las playas y el tráfico de la PO-552. El municipio no se transforma en un único centro saturado porque la actividad está repartida, pero las calles próximas a Praia América, Panxón y Patos sí cambian de ritmo.",
  "San Xoán en Panxón y otras celebraciones estivales introducen además noches de mayor actividad. Una vivienda junto al litoral debe probarse cuando la costa está llena, no únicamente en invierno.",
] as const;

const CLIMA_NUEVO2 = [
  "Nigrán comparte con Baiona un clima marítimo templado. En verano, la temperatura media ronda los 20 °C, con una influencia oceánica que limita el calor persistente del interior.",
  "Frente a Mallorca se nota menos la diferencia por frío extremo que por humedad, lluvia y continuidad del cielo gris durante los meses húmedos.",
  "La costa añade salitre y exposición al viento. Patos, Panxón y Praia América no se comportan exactamente igual porque orientación y protección cambian de un tramo a otro.",
  "El invierno obliga a mirar la vivienda de otra manera. Orientación, aislamiento, ventilación y entrada de sol importan especialmente en casas con jardín y en plantas que permanecen muchas horas en sombra.",
  "En verano, en cambio, la proximidad del mar permite mantener noches y tardes más moderadas que en un clima mediterráneo muy cálido.",
] as const;

const VIVIR_NUEVO2 = [
  "La principal adaptación no es climática sino territorial: Nigrán obliga a saber dónde se quiere vivir antes de decidir qué vivienda se quiere comprar.",
  "En Panxón se puede incorporar puerto, playa y restauración a pie. En Praia América la playa puede dominar la rutina. A Ramallosa favorece compra y servicios. Una parroquia interior puede ofrecer una casa mucho más tranquila, pero sin la misma vida a pie ni la misma relación inmediata con el mar.",
  "La proximidad a Vigo hace posible vivir aquí trabajando o utilizando servicios en la ciudad. Esa ventaja también genera desplazamientos diarios y convierte el acceso por carretera en parte importante de la elección.",
  "En primera línea o muy cerca de la costa, el verano añade aparcamiento, peatones y ruido. En las zonas interiores la presión puede ser mucho menor.",
  "Las casas con jardín exigen además pensar en mantenimiento húmedo: vegetación, drenaje, muros, zonas en sombra y ventilación de plantas bajas.",
  "Para alguien que llega desde Mallorca, Nigrán ofrece un verano marítimo más moderado y mucha costa utilizable, pero a cambio de un invierno más húmedo y una estructura urbana mucho menos compacta.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Nigrán se entiende mejor como suma de parroquias que como crecimiento alrededor de una única plaza.",
  "Panxón conserva una de las huellas históricas más reconocibles. Junto a la costa se encuentra el antiguo arco asociado al templo precedente y, a pocos metros, el Templo Votivo do Mar, proyectado por Antonio Palacios y construido entre 1932 y 1937.",
  "La arquitectura del templo convirtió una referencia religiosa y marinera en uno de los elementos más visibles del paisaje de Panxón.",
  "A Ramallosa conserva otro punto histórico junto al Miñor y recuerda que el valle funcionó durante siglos mediante caminos y pasos entre parroquias antes de que la costa se llenara de urbanizaciones residenciales.",
  "Monteferro incorpora una historia diferente. La península conserva restos y patrimonio militar, petroglifos y el Monumento a la Marina Universal.",
  "El Nigrán actual superpone así poblamiento parroquial, memoria marinera y una fuerte expansión residencial vinculada a las playas y a la proximidad de Vigo.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "La costa de Nigrán no ofrece una única experiencia.",
  "Praia América y Panxón forman una gran bahía de varios kilómetros, con paseo y aguas relativamente protegidas. Para quien vive en esa franja, playa y paseo pueden formar parte de la rutina diaria.",
  "Al otro lado de Monteferro, Patos cambia la exposición. El surf tiene allí mucho más peso y la relación con el océano es distinta de la bahía de Praia América.",
  "Para un paseo cotidiano no hace falta completar ninguna gran ruta. Los tramos de paseo de Praia América y Panxón permiten caminar junto al mar sobre terreno cómodo y regresar cuando convenga.",
  "La Senda Azul es otra cosa. Su recorrido oficial es lineal, de 10 km, parte de A Ramallosa y continúa por Praia América, Panxón y A Madorra antes de ascender hacia Monteferro. La duración orientativa completa es de 3 a 3 horas y media y el tramo final introduce subida y terreno de sendero.",
  "No conviene presentar esos 10 km como si fueran el paseo llano habitual de la playa. Se puede utilizar solo una parte para una salida corta y reservar Monteferro para cuando se quiera más recorrido.",
  "A Ramallosa y la Foz do Miñor añaden marisma y estuario. Hacia el interior aparecen caminos parroquiales y monte, de modo que la variedad de recorridos es grande pero no todos parten de la misma puerta.",
] as const;

const CASA_NUEVO2 = [
  "Nigrán mezcla pisos y apartamentos en las zonas costeras con chalés, adosados y casas con jardín en buena parte del municipio.",
  "Panxón y Praia América permiten pagar por cercanía real al mar y por una rutina costera. A Ramallosa ofrece otra lógica, más vinculada a comercio y servicios. En las parroquias interiores se puede ganar terreno, tranquilidad o vistas a cambio de coche.",
  "La primera pregunta no debería ser cuántos metros tiene la vivienda, sino qué parte de Nigrán se quiere utilizar todos los días.",
  "En la costa conviene revisar salitre, ventilación, orientación, aparcamiento y ruido estival. En una casa con parcela entran además drenaje, cierres, sombra, vegetación y mantenimiento.",
  "Como referencia municipal, Nigrán se sitúa en 2.909 €/m².",
] as const;

const CASA_ADVERTENCIA_MICROZONA = [
  "No trasladar la caminabilidad de Panxón, Praia América o A Ramallosa a todo Nigrán. Panxón combina núcleo y mar. Praia América prioriza playa. A Ramallosa concentra servicios. Las parroquias interiores pueden ofrecer más vivienda y tranquilidad, pero con una semana más dependiente del coche. Antes de comparar dos viviendas hay que comparar primero qué rutina ofrece cada microzona.",
] as const;

const CASA_QUE_CONVIENE_REVISAR = [
  "Hacer desde la dirección concreta los recorridos a supermercado, farmacia, centro de salud y playa que se utilizarían durante una semana normal.",
  "Si se compra cerca de Praia América, Panxón o Patos, volver en un fin de semana de verano y comprobar tráfico, aparcamiento y ruido.",
  "En vivienda costera, revisar carpinterías, cierres y señales de salitre o humedad.",
  "En una casa interior, recorrer la parcela después de lluvia y comprobar drenaje, sombra, pendiente y mantenimiento.",
  "Escuchar la PO-552 y otras carreteras próximas en una hora de tráfico si la vivienda está cerca de un eje principal.",
  "Y, sobre todo, comprobar andando si la playa o los servicios que justifican la elección están realmente a una distancia cotidiana desde esa puerta.",
] as const;

const CASA_MERCADO_REVENTA = [
  "Nigrán tiene un mercado residencial muy condicionado por microzona y cercanía al mar.",
  "Panxón y Praia América cuentan con una demanda costera reconocible, pero precio, ruido, aparcamiento y exposición pueden variar mucho incluso dentro de pocas calles.",
  "A Ramallosa tiene una lógica más práctica y residencial. Las casas interiores compiten por espacio, parcela, orientación y accesos.",
  "Para reventa ayudan una ubicación que pueda explicarse fácilmente, buen acceso, aparcamiento y una relación clara con playa o servicios.",
  "Una vivienda que dependa mucho del coche sin ofrecer a cambio terreno, tranquilidad o vistas suficientes pierde parte de su diferenciación.",
] as const;

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m².";

const CASA_FILA_PRECIOS = {
  municipio: "Nigrán",
  a2: "245.811 €",
  a3: "340.353 €",
  b2: "198.539 €",
  b3: "274.901 €",
  m2: "2.909 €/m²",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Encaja si se quiere una costa muy utilizable manteniendo Vigo y el hospital cerca.",
  "También si se prefiere elegir entre varias formas de vivir: Panxón como pequeño núcleo marítimo, Praia América como franja de playa, A Ramallosa por servicios o una parroquia interior por casa y jardín.",
  "Puede encajar especialmente si la playa debe formar parte de la semana pero no se necesita el casco histórico y compacto de Baiona.",
  "Y encaja si se acepta que esa variedad obliga a estudiar la dirección concreta: Nigrán funciona bien cuando la microzona elegida coincide con la rutina que se quiere tener.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Encaja peor si se busca un único casco donde comercio, plaza, playa y todos los servicios formen una sola experiencia peatonal.",
  "También si se espera poder vivir sin coche desde cualquier punto del municipio. Esa posibilidad existe en algunas microzonas, no en todo Nigrán.",
  "Puede resultar menos adecuado si el silencio de agosto es imprescindible y la vivienda elegida está junto a los principales arenales.",
  "Y encaja peor si el presupuesto obliga a alejarse de la costa cuando la razón principal para elegir Nigrán era precisamente bajar andando a la playa.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Elegir primero la microzona y pasar allí una jornada completa antes de comparar viviendas de partes distintas del municipio.",
  "Hacer andando playa, supermercado, farmacia y café desde la vivienda candidata y medir tiempos reales.",
  "Visitar Praia América o Panxón un sábado de verano si la vivienda depende del atractivo de esa franja.",
  "Si se mira Patos, comprobar directamente exposición al viento, ambiente de surf y funcionamiento de la zona fuera del verano.",
  "En una parroquia interior, conducir la semana probable hacia colegio, compra, Vigo y playa y comprobar cuántos desplazamientos se acumulan.",
  "Finalmente, recorrer un tramo cotidiano del paseo y distinguirlo de la Senda Azul completa: vivir junto a una ruta larga no significa que cada salida deba convertirse en una caminata de diez kilómetros.",
] as const;

const FOTO_COMO_PRAIA_AMERICA = {
  src: "/fotos/val-minor/nigran-praia-america.jpg",
  pie: "Praia América: arena larga y urbanizaciones de casas bajas detrás",
} as const;

const FOTO_COMO_PANXON = {
  src: "/fotos/val-minor/nigran-panxon.jpg",
  pie: "Panxón, la villa marinera de Nigrán, con puerto y vida durante todo el año",
} as const;

const FOTO_HISTORIA_TEMPLO = {
  src: "/fotos/val-minor/nigran-templo-votivo.jpg",
  pie: "Templo Votivo do Mar, la iglesia de Antonio Palacios sobre Panxón",
} as const;

const FOTO_HISTORIA_MONTEFERRO = {
  src: "/fotos/val-minor/nigran-monteferro-monumento.jpg",
  pie: "Monumento a la Marina Universal en la península boscosa de Monteferro",
} as const;

const FOTO_MAR_PATOS = {
  src: "/fotos/val-minor/nigran-patos.jpg",
  pie: "Patos: la playa de surf, abierta al oeste y con las Cíes enfrente",
} as const;

const FOTO_MAR_MONTEFERRO = {
  src: "/fotos/val-minor/nigran-monteferro.jpg",
  pie: "Desde Monteferro: las Illas Cíes cerrando el horizonte de la ría",
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

export default function Nuevo2NigranPage() {
  const ficha = municipioPorSlug("nigran");
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
        {COMO_SE_VIVE_NUEVO2.slice(4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_COMO_PRAIA_AMERICA.src} pie={FOTO_COMO_PRAIA_AMERICA.pie} />
        <Foto src={FOTO_COMO_PANXON.src} pie={FOTO_COMO_PANXON.pie} />
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
        <Foto src={FOTO_HISTORIA_TEMPLO.src} pie={FOTO_HISTORIA_TEMPLO.pie} />
        {DE_DONDE_VIENE_NUEVO2.slice(2, 4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_HISTORIA_MONTEFERRO.src} pie={FOTO_HISTORIA_MONTEFERRO.pie} />
        {DE_DONDE_VIENE_NUEVO2.slice(4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Mar, río y camino" varianteTarjetaV1>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[0]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas
            texto={MAR_RIO_CAMINO_NUEVO2[1]}
            fragmentos={["Praia América", "Panxón"]}
          />
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={MAR_RIO_CAMINO_NUEVO2[2]} fragmentos={["Patos"]} />
        </p>
        <Foto src={FOTO_MAR_PATOS.src} pie={FOTO_MAR_PATOS.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[3]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={MAR_RIO_CAMINO_NUEVO2[4]} fragmentos={["Senda Azul"]} />
        </p>
        <Foto src={FOTO_MAR_MONTEFERRO.src} pie={FOTO_MAR_MONTEFERRO.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(5).map((p) => (
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
          <ConNegritas texto={CASA_NUEVO2[4]} fragmentos={["2.909 €/m²"]} />
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
