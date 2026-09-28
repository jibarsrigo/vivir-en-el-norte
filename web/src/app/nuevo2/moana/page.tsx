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
 * NUEVO2 — Moaña (O Morrazo).
 * Texto: Lote_O_Morrazo_Cursor_NUEVO2 (1).txt (APROBADO EDITORIALMENTE)
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Moaña ocupa una franja estrecha entre la ría de Vigo y las laderas de O Morrazo. Esa geografía explica casi toda su vida cotidiana: abajo están paseo, playas, puerto, comercio y ferry; al subir aparecen casas, caminos y una dependencia creciente del coche.",
  "Meira, Moaña, Tirán y Domaio no son variaciones menores. La franja central permite una vida bastante autónoma. Domaio queda junto al estrecho de Rande y tiene una relación propia con Vigo y el monte. Las zonas altas de Meira y otras parroquias pueden ganar vistas y terreno mientras pierden caminabilidad.",
  "Frente a Cangas, Moaña ofrece menos contraste entre villa y gran costa atlántica y una relación más continua con la ría de Vigo. Frente a Marín, su conexión marítima con Vigo pesa mucho más.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Moaña se entiende caminando su frente marítimo. El paseo enlaza la franja central desde Meira hacia O Con y reúne playas, mercado, puerto, zonas de estancia y el embarque hacia Vigo.",
  "Un martes de noviembre se puede comprar, ir al centro de salud, pasar por el mercado, caminar junto a la ría y tomar el ferry sin salir de esa franja. Para una vivienda bien situada, el coche puede dejar de ser necesario para una parte importante de la semana.",
  "El ferry es una ventaja funcional fuerte. Vigo queda al otro lado del agua y el barco evita conducir alrededor de la ría cuando el destino y los horarios encajan.",
  "No toda Moaña vive así. Al alejarse de la costa el municipio gana pendiente. Una casa con vistas en Meira alta puede necesitar coche para compra y actividades aunque visualmente parezca muy cerca del centro.",
  "Tirán combina vivienda, pequeñas calas y la playa de O Con con una escala más residencial. Domaio queda separado de la franja central y se relaciona directamente con Rande, el corredor viario y las laderas del Faro de Domaio.",
  "La vida anual es sólida. Mercado, colegios, servicios y ferry siguen funcionando en invierno. El verano añade bañistas y más movimiento en el paseo, pero no transforma el municipio en un destino puramente estacional.",
  "Las fiestas del Carmen llenan puerto y centro en julio. San Martiño y San Xoán tienen efectos más parroquiales. Una vivienda junto a un atrio o a la franja central puede vivir varios calendarios distintos.",
  "La referencia hospitalaria práctica está en el área de Vigo/Pontevedra, con unos 30 minutos orientativos por carretera desde la referencia municipal. El aeropuerto de Vigo queda aproximadamente a 35 minutos.",
] as const;

const CLIMA_NUEVO2 = [
  "Moaña tiene una media estival alrededor de 20 °C y una invernal próxima a 10 °C.",
  "Frente a Mallorca se pierde continuidad de sol y aumenta mucho la lluvia y la humedad. El invierno puede sentirse más por el comportamiento de la vivienda que por temperaturas especialmente bajas.",
  "La ría modera el verano. A Xunqueira y O Con tienen aguas protegidas y la brisa ayuda a evitar calor persistente.",
  "La ladera introduce diferencias importantes. Una vivienda abierta al sur y a la ría puede recibir bastante luz; otra encajada tras el relieve puede perder sol temprano en invierno.",
  "En casas y plantas bajas hay que observar drenaje y ventilación. Cerca del mar se añade salitre; en zonas altas, humedad del terreno y sombra pueden pesar más.",
] as const;

const VIVIR_NUEVO2 = [
  "Moaña permite mirar a Vigo y utilizarlo sin vivir dentro de la ciudad.",
  "En la franja litoral se puede tener mercado, servicios, paseo, playa y ferry dentro de una rutina compacta. Esa combinación es más importante que cualquier lista de equipamientos.",
  "Al subir, la semana cambia. La vista mejora, aparece terreno y disminuye el ruido de la franja urbana, pero coche y pendiente pasan a formar parte de la vida diaria.",
  "La relación con la playa es sencilla en A Xunqueira y O Con: son arenales urbanos de ría que pueden incorporarse a una tarde normal.",
  "El invierno mantiene actividad, pero exige aceptar más lluvia y una casa que funcione bien con humedad. Para alguien procedente de Mallorca, orientación y sol invernal deben evaluarse con especial cuidado.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Moaña actual nació de una red parroquial anterior a la villa lineal que hoy vemos junto al mar.",
  "Meira, Moaña y Domaio estuvieron históricamente ligadas a Cangas. Durante el siglo XIX se configuró el municipio moderno y en 1874 adoptó el nombre de Moaña.",
  "La iglesia de San Martiño conserva la memoria de aquel centro parroquial interior. San Xoán de Tirán ocupa otra posición histórica sobre la costa.",
  "La industrialización marítima y conservera desplazó parte del peso hacia la costa. Meira y Moaña quedaron ligadas a pesca, marisqueo, conserva y posteriormente a una intensa cultura del remo.",
  "El Fisgón recuerda una forma de pesca con fisga y luz y convierte un oficio de la ría en una referencia visible del paseo.",
  "La apertura del puente de Rande transformó la conexión terrestre con Vigo. El ferry, sin embargo, conserva una relación marítima directa que todavía condiciona positivamente la vida cotidiana.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "A Xunqueira es la playa urbana más evidente. Tiene unos 600 metros, arena fina, agua tranquila y acceso directo al paseo marítimo. Desde la franja central puede utilizarse para caminar o bañarse sin coger el coche.",
  "O Con queda hacia Tirán, al final de otro tramo del paseo. Es una playa urbana más pequeña, de unos 150 metros, y vuelve a permitir combinar baño y paseo.",
  "El propio paseo marítimo es probablemente la infraestructura de ocio cotidiano más importante. Recorre el centro urbano desde Meira hacia O Con y permite ver bateas, barcos, mariscadoras, puertos y gente pescando. No es solo un recorrido turístico: forma parte de la calle diaria de Moaña.",
  "Tirán añade pequeñas calas y una costa donde vivienda e iglesia se acercan mucho al agua.",
  "Domaio pertenece a otra escala. Desde allí se asciende hacia el Faro de Domaio, la mayor altura de la península. El recorrido introduce pendiente, monte y vistas sobre Rande y ambas rías; exige una salida deliberada y no debe confundirse con el paseo llano del frente marítimo.",
  "Moaña ofrece así una separación muy clara: paseo y baño de ría para repetir a diario en la franja litoral; monte y miradores cuando se quiere una actividad de varias horas.",
] as const;

const CASA_NUEVO2 = [
  "La primera decisión residencial es altura frente a costa.",
  "En la franja central predominan pisos y edificios de distintas décadas. Allí la ventaja es práctica: mercado, centro de salud, paseo y ferry pueden quedar a pie.",
  "En Tirán y Meira aparecen más casas dentro de una red densa de caminos. Hay que comprobar accesos, pendiente y cuánto coche entra realmente en la semana.",
  "Domaio ofrece chalés y viviendas en ladera con vistas hacia Rande. La vista puede ser espectacular, pero una dirección mal elegida puede alejar compra y servicios cotidianos.",
  "La orientación importa especialmente. Una vivienda soleada sobre la ría y otra en una ladera con sombra pueden tener un comportamiento invernal muy distinto.",
  "En costa conviene revisar salitre, carpinterías y ventilación. En una casa, cubierta, drenaje y humedad del terreno. En cualquier ladera, imaginar las cuestas dentro de diez o veinte años.",
  "Como referencia municipal, Moaña se sitúa en 1.608 €/m².",
] as const;

const CASA_ADVERTENCIA_MICROZONA = [
  "La franja litoral central no representa todo Moaña.",
  "Allí se concentra la mejor autonomía. Meira alta y otras laderas pueden ganar terreno y vistas a cambio de coche. Domaio tiene una lógica propia ligada a Rande y al extremo oriental del municipio.",
] as const;

const CASA_QUE_CONVIENE_REVISAR = [
  "Caminar desde la vivienda hasta mercado, centro de salud, ferry y playa si esos servicios justifican la elección.",
  "Subir después a pie de vuelta a casa para comprobar la pendiente real.",
  "Visitar en invierno o después de lluvia y observar horas de sol, humedad y drenaje.",
  "En primera línea o muy cerca del mar, revisar carpinterías, metales y fachada.",
  "En Domaio o zonas altas, probar el trayecto hacia la franja central y hacia Vigo en una jornada laboral.",
  "En una casa, comprobar accesos y maniobra además del estado de cubierta y parcela.",
] as const;

const CASA_MERCADO_REVENTA = [
  "Moaña tiene una base residencial propia y el ferry añade una ventaja comprensible para personas vinculadas a Vigo.",
  "En la franja central, ascensor, servicios a pie y proximidad al embarque ayudan a ampliar el público futuro.",
  "Las casas en altura compiten mediante vistas, orientación, parcela y facilidad de acceso.",
  "Una propiedad que exige mucho coche sin ofrecer a cambio espacio, tranquilidad o vistas suficientes pierde parte de su diferenciación.",
] as const;

const ENCAJA_SI_NUEVO2 = [
  "Encaja si Vigo forma parte de la semana pero se prefiere vivir en una escala menor y utilizar el ferry cuando sea práctico.",
  "También si paseo y pequeñas playas de ría deben estar integrados en la rutina, especialmente desde la franja central.",
  "Puede encajar si se quiere elegir entre piso caminable junto a servicios y una casa con más vistas y terreno en ladera.",
  "Y encaja si se acepta que esa segunda opción aumenta pendiente y dependencia del coche.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Encaja peor si toda la vida debe resolverse a pie desde una parroquia alta o desde Domaio.",
  "También si se necesita hospital muy próximo dentro del propio municipio.",
  "Puede resultar menos adecuada si se busca la costa atlántica abierta y los grandes arenales naturales como experiencia diaria.",
  "Y pierde parte de su sentido si se compra en altura esperando conservar exactamente la caminabilidad del paseo.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Pasar una jornada sin coche desde la vivienda candidata y comprobar compra, salud, paseo y ferry.",
  "Probar el barco a Vigo en el horario que se utilizaría realmente.",
  "Recorrer A Xunqueira y O Con para comprobar qué playa entraría en la rutina.",
  "Visitar una vivienda en ladera a última hora de una tarde de invierno para observar el sol real.",
  "Hacer el trayecto por carretera hacia Vigo o el hospital en horario laboral.",
  "Y comprobar si las cuestas y accesos seguirían siendo cómodos a largo plazo.",
] as const;

const CASA_LEYENDA_COMPACTA =
  "A: ≤5 min de la costa · B: 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Estimaciones comparativas; conviene contrastarlas con la oferta del momento.";

const CASA_FILA_PRECIOS = {
  municipio: "Moaña",
  a2: "135.876 €",
  a3: "188.136 €",
  b2: "109.746 €",
  b3: "151.956 €",
  m2: "1.608 €/m²",
} as const;

const FOTO_COMO_1 = {
  src: "/fotos/o-morrazo/moana-villa.jpg",
  pie: "Casa consistorial de Moaña y un hórreo de piedra",
} as const;

const FOTO_COMO_2 = {
  src: "/fotos/o-morrazo/moana-xunqueira.jpg",
  pie: "A Borna y la orilla urbana de Moaña frente a la ría",
} as const;

const FOTO_HIST_1 = {
  src: "/fotos/o-morrazo/moana-san-martino.jpg",
  pie: "San Martiño, la parroquia histórica que dio centro al municipio",
} as const;

const FOTO_HIST_2 = {
  src: "/fotos/o-morrazo/moana-fisgon.jpg",
  pie: "El Fisgón recuerda una forma nocturna de pescar en la ría",
} as const;

const FOTO_MAR_1 = {
  src: "/fotos/o-morrazo/moana-tiran.jpg",
  pie: "Tirán: iglesia románica y costa frente a Vigo",
} as const;

const FOTO_MAR_2 = {
  src: "/fotos/o-morrazo/moana-domaio.jpg",
  pie: "Domaio bajo el monte, junto al estrecho de Rande",
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

export default function Nuevo2MoanaPage() {
  const ficha = municipioPorSlug("moana");
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
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={COMO_SE_VIVE_NUEVO2[7]} fragmentos={["30 minutos", "35 minutos"]} />
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
        {DE_DONDE_VIENE_NUEVO2.slice(3, 5).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_HIST_2.src} pie={FOTO_HIST_2.pie} />
        {DE_DONDE_VIENE_NUEVO2.slice(5).map((p) => (
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
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[4]}</p>
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
          <ConNegritas texto={CASA_NUEVO2[6]} fragmentos={["1.608 €/m²"]} />
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
