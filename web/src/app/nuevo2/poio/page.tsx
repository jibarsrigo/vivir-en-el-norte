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
 * NUEVO2 — Poio (Pontevedra e Sanxenxo).
 * Texto: Lote_Pontevedra_e_Sanxenxo_4_CERTIFICADOS_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Poio ocupa la orilla norte de la ría de Pontevedra entre la capital y O Salnés. No tiene un único núcleo que represente al municipio entero. Su forma residencial se reparte entre San Salvador y San Xoán, muy vinculados a Pontevedra; Campelo, con puerto y vida residencial; Combarro, casco histórico junto a la ría; y Raxó y Samieira, que prolongan la costa hacia Sanxenxo.",
  "Esa variedad es su principal atractivo y también su principal riesgo de compra. Una dirección con “Poio” puede significar vivir prácticamente en continuidad con Pontevedra o residir en una ladera donde el coche interviene en casi todos los recados.",
  "El Monte Castrove queda detrás de las parroquias y la ría delante. Entre ambos aparecen más de veinte playas, puertos pequeños, casas con vistas, urbanizaciones y núcleos históricos.",
  "No conviene, por tanto, imaginar Poio como “Combarro”. Combarro es una de sus piezas más conocidas, pero la vida municipal es mucho más amplia.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Poio cambia mucho según la parroquia elegida. La diferencia no está solo en tener más o menos costa: cambia cuánto se puede hacer a pie, cuánto se depende de Pontevedra y cuántas veces entra el coche en una semana normal.",
  "En San Salvador, sobre todo en las zonas próximas a A Barca, Pontevedra funciona casi como parte del barrio. Hospital, comercio, cultura, tren y buena parte de los servicios de la capital quedan a pocos minutos. Se puede vivir fuera de la ciudad y seguir utilizándola a diario sin que cada desplazamiento se convierta en una salida larga.",
  "San Xoán tiene una vida más propia, con ayuntamiento, monasterio y servicios locales. Campelo añade puerto, vivienda y una relación más tranquila con la ría. Desde estas zonas, Pontevedra sigue estando cerca, pero ya no necesariamente forma parte de cada recorrido a pie.",
  "Combarro es otra cosa. Hay vecinos y actividad durante todo el año, pero el casco histórico recibe mucha presión turística. En invierno se recuperan calles mucho más tranquilas; en verano cambian el tráfico, el aparcamiento y la facilidad para moverse por el entorno. Vivir dentro del casco o muy cerca significa aceptar esas dos versiones del mismo lugar.",
  "Raxó permite incorporar más fácilmente el baño y el paseo marítimo a una tarde normal. Puerto, pequeñas playas y vivienda en ladera quedan muy próximos entre sí. La contrapartida aparece al hacer los recados: según dónde esté la casa, la subida, la compra y los desplazamientos hacia Pontevedra hacen que el coche participe mucho más en la semana. En Samieira esa dispersión puede ser todavía mayor.",
  "Esto hace que Poio no tenga una única respuesta a la pregunta «¿puedo vivir sin coche?». Cerca de Pontevedra puede utilizarse poco para la vida básica. En una ladera de Raxó, Samieira o una zona dispersa puede ser necesario todos los días, aunque la playa esté aparentemente cerca.",
  "Para hospital, compras grandes, tren o una oferta cultural más amplia, Pontevedra funciona como apoyo urbano inmediato. La referencia hospitalaria práctica está allí, aproximadamente a diez minutos desde la referencia municipal, aunque el tiempo cambia bastante según la parroquia.",
  "Hay autobús hacia Pontevedra y por el eje costero, pero su utilidad cotidiana depende de la parada, los horarios y la dirección concreta. Antes de comprar conviene comprobar qué trayectos podrían hacerse realmente sin coche.",
  "El aeropuerto de Vigo queda aproximadamente a 25 minutos y Santiago alrededor de 50. Si el enlace con Palma es importante, conviene comprobar la programación vigente.",
] as const;

const CLIMA_NUEVO2 = [
  "Poio tiene un verano suave, con una media aproximada de 20 °C, y un invierno templado en temperatura, alrededor de 10 °C.",
  "La diferencia con Mallorca aparece sobre todo en la humedad y en la cantidad de lluvia durante otoño e invierno. Una vivienda en ladera puede recibir poco sol en determinadas orientaciones y conservar humedad durante más tiempo después de varios días mojados.",
  "La ría protege más que una costa atlántica abierta. Raxó o Combarro no tienen la misma exposición al viento que A Lanzada. Eso favorece un ambiente más resguardado, aunque no elimina salitre ni humedad en viviendas próximas al agua.",
  "En verano, las temperaturas permiten utilizar terrazas, playas y paseos sin el calor persistente de Mallorca. El agua es más fría, pero las pequeñas playas de ría suelen tener una superficie más calmada que los arenales abiertos al Atlántico.",
  "La vivienda debe juzgarse en invierno. Orientación, ventilación, aislamiento, cubierta y drenaje de parcela tienen más importancia de la que suele apreciarse durante una visita soleada.",
] as const;

const VIVIR_NUEVO2 = [
  "Poio exige elegir una relación concreta entre ría y ciudad.",
  "En San Salvador o Lourido, Pontevedra puede formar parte de la rutina diaria. Se puede vivir en un entorno más residencial y seguir utilizando la capital para hospital, compras o cultura con muy poco desplazamiento.",
  "En Combarro, la vida gira mucho más alrededor del casco histórico, el puerto y la presión turística. Tener hórreos y ría delante no es una ventaja neutra: significa también compartir las calles con mucha gente en temporada.",
  "Raxó ofrece otra combinación. La playa puede quedar cerca y el mar entrar con facilidad en una tarde normal, pero la ladera y la distancia a servicios aumentan la dependencia del coche.",
  "Las zonas altas o dispersas permiten encontrar casa, parcela y vistas. Allí el intercambio es más claro: espacio y tranquilidad a cambio de desplazamientos frecuentes.",
  "Frente a Mallorca, también cambia el mantenimiento de la casa. Muros, jardines, cubiertas y fachadas reciben más agua y permanecen húmedos durante más tiempo. En una parcela con pendiente, el drenaje deja de ser un detalle técnico.",
  "La proximidad de Pontevedra evita que esa vida más dispersa se convierta en aislamiento. Esa es una de las características residenciales más fuertes de Poio.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Poio no creció desde una única plaza. Su estructura actual procede de una red de parroquias agrícolas y marineras que conservaron identidades diferentes.",
  "El Mosteiro de San Xoán de Poio representa la dimensión monástica y rural. El conjunto tiene origen medieval y su gran hórreo recuerda el papel de la producción agrícola y del almacenamiento de cereal en un territorio húmedo.",
  "Combarro conserva la huella marinera y agrícola de otra manera. Las casas se acercan a la ría y los hórreos se alinean junto al agua. Un hórreo es un granero elevado que permite ventilar el grano y mantenerlo separado de la humedad del suelo.",
  "El casco también conserva cruceiros, soportales y calles estrechas. Su transformación en uno de los lugares más visitados de las Rías Baixas no borró esa estructura; la convirtió en un espacio donde la vida vecinal y la visita turística tienen que convivir.",
  "A Caeira añade una capa mucho más antigua. Sus petroglifos muestran que las laderas frente a Pontevedra estaban ocupadas y recorridas mucho antes de los núcleos actuales.",
  "La continuidad con Pontevedra es más reciente en su intensidad. Carreteras, vivienda y desplazamientos diarios han hecho que las parroquias orientales funcionen en parte como borde residencial de la ciudad, mientras Combarro, Raxó y Samieira mantienen una identidad más costera.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "Poio dispone de mucha costa, pero la relación con el baño depende de dónde se viva.",
  "Lourido y Cabeceira quedan muy cerca de Pontevedra y permiten una salida corta desde las zonas orientales del municipio. Son playas de ría, más protegidas que los grandes arenales atlánticos.",
  "Combarro ofrece agua y puerto delante del casco, pero no debe confundirse ese paisaje con tener una gran playa urbana.",
  "Raxó sí incorpora pequeñas playas al núcleo. Vivir allí puede permitir bajar andando al agua según la dirección concreta, algo que no se puede generalizar a todo Poio.",
  "La costa permite enlazar paseos y recorridos entre parroquias, pero los tramos no forman una única pasarela litoral continua. Para una caminata larga hay que combinar paseos, caminos locales y algunos tramos urbanos, por lo que conviene conocer de antemano el recorrido.",
  "El Monte Castrove ofrece el contraste. Desde las zonas altas se obtienen vistas amplias sobre la ría y aparecen pistas forestales y caminos con más desnivel. Es una salida deliberada, no el equivalente al paseo llano junto al agua.",
  "La Illa de Tambo introduce otra escala. Está dentro de la ría y las visitas se realizan de forma organizada desde el puerto de Combarro, con control de acceso. Es una salida de patrimonio y naturaleza, no un recurso cotidiano desde cualquier vivienda.",
  "Poio permite así combinar playa de ría, puerto, casco histórico y monte. La clave es que cada una de esas experiencias pertenece a una microzona distinta.",
] as const;

const CASA_NUEVO2 = [
  "El precio medio de Poio reúne viviendas que pertenecen a mercados bastante distintos según la microzona.",
  "En San Salvador y A Caeira aparecen pisos, chalés y viviendas muy vinculadas a Pontevedra. La ventaja es mantener ciudad y hospital cerca sin vivir dentro del centro urbano.",
  "Combarro mezcla vivienda tradicional, pisos y casas en ladera. Dentro del casco histórico importan mucho acceso, aparcamiento, ruido y restricciones derivadas de una trama estrecha y muy visitada.",
  "Campelo tiene un perfil más residencial y portuario, con menos presión turística que Combarro.",
  "Raxó y Samieira ofrecen pisos de costa y casas con vistas. Allí hay que comprobar pendiente, acceso, sol de invierno y dependencia del coche. La vista a la ría puede ser excelente y la vuelta andando desde la playa, incómoda.",
  "Como referencia municipal vigente, Poio se sitúa en 1.887 €/m².",
] as const;

const CASA_ADVERTENCIA_MICROZONA = [
  "San Salvador, Campelo, Combarro, Raxó y las áreas dispersas no deben compararse como si ofrecieran la misma vida.",
  "San Salvador gana por Pontevedra. Campelo ofrece una escala residencial junto al puerto. Combarro aporta patrimonio y ría con fuerte presión turística. Raxó acerca playa y vistas. Las laderas ganan terreno a cambio de coche y pendiente.",
] as const;

const CASA_QUE_CONVIENE_REVISAR = [
  "Hacer desde el portal los recorridos que se repetirían: compra, farmacia, atención primaria y salida hacia Pontevedra.",
  "Si la vivienda está en Combarro, volver un fin de semana de agosto y comprobar tráfico, ruido y aparcamiento.",
  "En Raxó o Samieira, bajar andando hasta la playa y subir de nuevo para medir la pendiente real.",
  "En una casa en ladera, revisar orientación, drenaje, cubierta, muros, saneamiento, acceso y maniobra.",
  "Comprobar cuánto sol recibe la vivienda en invierno y no deducirlo de las vistas.",
  "Si Pontevedra es parte central de la rutina, hacer el trayecto en hora laboral y comprobar qué servicios quedarían realmente a mano.",
] as const;

const CASA_MERCADO_REVENTA = [
  "Poio combina demanda residencial ligada a Pontevedra con demanda costera y turística.",
  "Las viviendas próximas a la capital tienen un mercado fácil de explicar: permiten vivir fuera del centro manteniendo hospital, trabajo y servicios cerca.",
  "Combarro tiene un atractivo muy reconocible, pero una vivienda difícil de aparcar o demasiado expuesta a ruido puede reducir el número de compradores interesados en residir todo el año.",
  "Raxó y Samieira dependen más de vistas, acceso, orientación y cercanía real al agua.",
  "En una futura venta ayudan especialmente un acceso sencillo, buen estado, aparcamiento y una microzona cuya rutina sea clara.",
] as const;

const ENCAJA_SI_NUEVO2 = [
  "Encaja si se quiere vivir junto a la ría sin alejarse de una ciudad completa.",
  "También si se valora poder elegir entre varias formas de residencia: proximidad a Pontevedra, puerto pequeño, casco histórico, playa o casa en ladera.",
  "Puede encajar especialmente si una vivienda con más espacio o vistas pesa más que tener todos los servicios concentrados en una única plaza.",
  "Y encaja si se acepta que la microzona decide el uso del coche: Poio puede ser muy práctico o bastante disperso según la dirección.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Encaja peor si se quiere una experiencia municipal homogénea. Vivir en San Salvador no se parece a hacerlo en Combarro ni en Raxó.",
  "También si la presión turística de verano resulta incompatible con la vida cotidiana y la vivienda está dentro o junto al casco más visitado.",
  "Puede resultar menos adecuado si se quiere prescindir del coche viviendo en una zona alta o dispersa.",
  "Y encaja peor si se compra una casa por sus vistas sin aceptar humedad, pendiente, mantenimiento de parcela y accesos.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Pasar una mañana en San Salvador, otra en Combarro y otra en Raxó antes de comparar viviendas de esas zonas.",
  "Desde cada dirección candidata, hacer una compra, ir a la farmacia y probar el acceso hacia Pontevedra.",
  "Comprobar la playa que se utilizaría realmente y recorrer el trayecto a pie desde casa si esa cercanía justifica el precio.",
  "Volver a Combarro en temporada alta.",
  "Visitar una casa de ladera después de lluvia y comprobar suelo, drenaje y horas de sol.",
  "Y hacer el trayecto al hospital y a la estación de Pontevedra para entender cuánto de la ventaja urbana funciona realmente desde esa microzona.",
] as const;

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m².";

const CASA_FILA_PRECIOS = {
  municipio: "Poio",
  a2: "159.452 €",
  a3: "220.779 €",
  b2: "128.788 €",
  b3: "178.322 €",
  m2: "1.887 €/m²",
} as const;

const FOTO_COMO_1 = {
  src: "/fotos/pontevedra-e-sanxenxo/poio-raxo.jpg",
  pie: "Raxó, parroquia marinera escalonada sobre el agua",
} as const;

const FOTO_HIST_1 = {
  src: "/fotos/pontevedra-e-sanxenxo/poio-mosteiro.jpg",
  pie: "Mosteiro de San Xoán de Poio, centro histórico del municipio",
} as const;

const FOTO_HIST_2 = {
  src: "/fotos/pontevedra-e-sanxenxo/poio-horreos.jpg",
  pie: "Los hórreos de Combarro, graneros elevados frente a la marea",
} as const;

const FOTO_MAR_1 = {
  src: "/fotos/pontevedra-e-sanxenxo/poio-lourido.jpg",
  pie: "Lourido, playa de ría a las puertas de Pontevedra",
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

export default function Nuevo2PoioPage() {
  const ficha = municipioPorSlug("poio");
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
        {MAR_RIO_CAMINO_NUEVO2.slice(0, 5).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_MAR_1.src} pie={FOTO_MAR_1.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(5).map((p) => (
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
          <ConNegritas texto={CASA_NUEVO2[5]} fragmentos={["1.887 €/m²"]} />
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
