import Link from "next/link";
import { notFound } from "next/navigation";
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
 * NUEVO2 — Salinas (Castrillón).
 * Texto: Lote_Asturias_Centro_4_CERTIFICADOS_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Asturias Centro reúne formas muy distintas de vivir junto al Cantábrico: desde el puerto en ladera de Cudillero y los núcleos del estuario del Nalón hasta las villas marineras de Luanco y Candás, la playa de Salinas y la escala urbana de Gijón. Avilés y Oviedo completan un territorio en el que costa, ciudades y aeropuerto quedan relativamente próximos, aunque la vida cotidiana cambia mucho según el lugar elegido.",
  "Salinas ocupa la parte costera de Castrillón, inmediatamente al oeste de Avilés. Dentro de la misma zona, su rasgo más claro es poder vivir junto a una gran playa abierta al Cantábrico y mantener al mismo tiempo Piedras Blancas, Avilés y el aeropuerto a pocos minutos.",
  "Salinas es el núcleo costero; Piedras Blancas, tierra adentro, es la capital municipal y concentra parte de los servicios; Avilés completa hospital, comercio, cultura y gestiones. Esa proximidad permite tener el mar a pie sin exigir que toda la vida cotidiana se resuelva dentro del propio núcleo.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Desde buena parte de Salinas se puede llegar andando al frente marítimo. Para una vivienda bien situada, la playa puede formar parte de la rutina: salir a caminar antes de comer, acercarse al mar al final de la tarde o recorrer un tramo del paseo sin necesidad de coger el coche.",
  "Esa cercanía sigue teniendo valor fuera del verano. Aunque no sea día de baño, el frente marítimo permite incorporar un paseo junto al Cantábrico a una tarde corriente. En verano se añade el baño, pero también llegan más visitantes, más tráfico y más presión de aparcamiento cerca de la playa.",
  "Para la vida cotidiana, Salinas resuelve una parte de las necesidades sin salir del núcleo, pero no todas. El entorno Raíces–Salinas dispone de consultorio de atención primaria; Piedras Blancas queda a pocos minutos y concentra el centro de salud y parte de los servicios municipales. Avilés amplía mucho más las posibilidades de comercio, gestiones, cultura y atención hospitalaria.",
  "El Hospital Universitario San Agustín queda aproximadamente a 5 km y unos 10 minutos en coche. El aeropuerto de Asturias está a unos 8 km y también alrededor de 10 minutos. Hay además autobús frecuente hacia Avilés. Hospital, ciudad y aeropuerto quedan lo bastante cerca para incorporarlos a la organización normal de la semana.",
  "La elección de calle importa. Vivir cerca del paseo permite hacer a pie una parte de la vida que atrae de Salinas; otras direcciones pueden seguir estando cerca del mar pero depender más del coche para compra, aparcamiento o servicios.",
  "En verano esa diferencia se hace más visible. Poder bajar andando a la playa evita buscar aparcamiento cuando aumenta la ocupación, pero vivir junto al frente marítimo significa también convivir con más movimiento durante la temporada alta.",
] as const;

const CLIMA_NUEVO2 = [
  "Mudarse desde Mallorca a Salinas supone un verano bastante más fresco y muchos más días húmedos, lluviosos o cubiertos a lo largo del año.",
  "En el entorno de Avilés y Castrillón, los meses más cálidos rondan los 19 °C de media y la humedad es alta, con lluvias repartidas a lo largo del año. Salinas comparte ese patrón costero.",
  "En julio y agosto el calor intenso y persistente pesa mucho menos que en Mallorca, pero tampoco se puede contar con una sucesión estable de días secos y soleados. Habrá jornadas buenas para caminar junto al mar en las que el baño o una tarde larga de terraza resulten menos apetecibles.",
  "En una vivienda próxima a la playa importan también la humedad, el viento y la exposición al Cantábrico. Orientación, aislamiento, carpinterías y estado de la fachada pueden marcar una diferencia importante entre dos pisos que sobre el mapa parecen igual de bien situados.",
] as const;

const VIVIR_NUEVO2 = [
  "En Salinas una parte de la vida diaria puede resolverse dentro del propio núcleo y combinarse con playa y paseo a pie. Para algunos servicios municipales o compras concretas hay que desplazarse a Piedras Blancas; Avilés amplía mucho más el radio con hospital, comercio y oferta cultural.",
  "Piedras Blancas y Avilés están lo bastante cerca para utilizarlas durante la semana sin hacer un desplazamiento largo. Salinas, sin embargo, no resuelve todo por sí sola: algunos servicios y compras siguen llevando a uno de esos dos núcleos.",
  "El aeropuerto está aproximadamente a diez minutos. Esa cercanía acorta mucho el trayecto terrestre cuando toca viajar. Para volar a Palma hay que comprobar la programación de cada temporada, porque la cercanía al aeropuerto no garantiza esa conexión durante todo el año.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Salinas no tiene la forma de una antigua villa marinera apiñada alrededor de un puerto. Su desarrollo está mucho más ligado a vivir y veranear junto a una gran playa.",
  "Eso todavía se reconoce en el paisaje construido. Junto al arenal aparecen viviendas de épocas distintas: casas y chalés, pero también edificios de mayor altura cerca del frente marítimo. El núcleo fue creciendo paralelo a una costa que no quedaba a las afueras, sino delante de las propias calles.",
  "Hacia uno de los extremos de la playa aparece El Espartal, un sistema de dunas protegido. Allí el espacio construido pierde protagonismo y entre el núcleo y el mar aparece una franja de arena, dunas y vegetación.",
  "Si se continúa en la misma dirección se llega al entorno de San Juan de Nieva, junto a la entrada de la ría de Avilés. Alrededor de esa entrada se desarrollaron instalaciones portuarias e industriales.",
  "La proximidad entre esos paisajes sigue siendo visible hoy. Caminando desde Salinas hacia El Espartal y continuando hacia la ría se pasa del frente residencial y la playa a las dunas y después al entorno portuario-industrial de Avilés.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "La playa de Salinas está directamente frente al núcleo y es el paseo más fácil de incorporar a la vida diaria. Quien vive cerca del frente marítimo puede bajar andando, recorrer un tramo junto al agua y volver a casa sin organizar una salida ni buscar aparcamiento.",
  "El baño depende de las condiciones del Cantábrico. Tener el arenal a pocos minutos permite aprovechar los días buenos, pero la cercanía no convierte el mar en una zona de baño previsible todos los días.",
  "Hacia el extremo próximo a Avilés, el frente urbano va dejando paso a El Espartal. Una pasarela permite recorrer parte de este espacio y prolongar a pie el paseo que empieza en Salinas.",
  "Si se continúa hacia San Juan de Nieva, vuelve a cambiar el paisaje. La costa abierta da paso a la entrada de la ría de Avilés y empiezan a aparecer el puerto y las instalaciones industriales.",
  "Playa, dunas protegidas y paisaje portuario-industrial están, por tanto, muy cerca entre sí. Un paseo corto puede quedarse en el arenal; una caminata más larga permite comprobar cómo cambia la costa al acercarse a la ría.",
] as const;

const CASA_NUEVO2 = [
  "Buscar vivienda en Salinas exige separar el precio del núcleo costero del conjunto de Castrillón. En agosto de 2026, Castrillón estaba en 2.241 €/m² y Piedras Blancas alrededor de 1.984 €/m², mientras Salinas alcanzaba 3.226 €/m².",
  "La diferencia es relevante porque comprar en Salinas significa pagar por una ubicación donde la playa puede quedar a pie y Avilés, Piedras Blancas y el aeropuerto están a pocos minutos. La media de Castrillón no representa bien el coste de esa ubicación concreta.",
  "Dentro del propio Salinas tampoco basta con medir metros hasta el mar. Conviene comprobar desde el portal el recorrido hasta la playa, la compra cotidiana y el coche. Planta, orientación y edificios situados delante cambian además la luz y las vistas incluso dentro de una misma calle.",
  "En los edificios próximos al Cantábrico hay que revisar aislamiento, carpinterías, ventilación, humedad, salitre, fachada y reformas pendientes. Una terraza o unas vistas abiertas pueden aportar mucho, pero la exposición al mar también puede aumentar las necesidades de mantenimiento.",
] as const;

const CASA_PRECIO_REFS = [
  "Castrillón: 2.241 €/m² · agosto de 2026",
  "Salinas: 3.226 €/m² · agosto de 2026",
] as const;

const CASA_BANDAS_NOTA =
  "Las estimaciones utilizan el precio medio de Salinas y aproximadamente 65 m² para dos dormitorios y 90 m² para tres. Las franjas A y B expresan cercanía a la costa; no indican calidad, vistas ni el precio exacto de una vivienda.";

const CASA_ADVERTENCIA_MICROZONA =
  "Incluso dentro de Salinas, «cerca de la playa» puede significar cosas distintas. Hay que comprobar desde el portal el recorrido hasta el paseo, la compra cotidiana y el coche. La planta, la orientación y los edificios situados delante cambian la luz y las vistas.";

const CASA_QUE_CONVIENE_REVISAR =
  "Ascensor y barreras, luz, orientación, aislamiento, humedad, ventanas, estado de fachada, salitre, reformas pendientes y aparcamiento. Si las vistas influyen en el precio, hay que comprobarlas desde las estancias que realmente se utilizarán.";

const CASA_MERCADO_REVENTA =
  "La diferencia de precio entre Salinas, Piedras Blancas y el conjunto de Castrillón muestra que la ubicación tiene un peso claro en el mercado, pero no permite anticipar cómo evolucionará el precio. Para una futura venta ayudan características que mantienen la vivienda cómoda para perfiles distintos: ascensor, acceso sencillo, buen estado, luz, aislamiento y aparcamiento razonable.";

const CASA_LEYENDA_COMPACTA =
  "A: ≤5 min de la costa · B: 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Estimaciones comparativas; conviene contrastarlas con la oferta del momento.";

const CASA_FILA_PRECIOS = {
  municipio: "Salinas (Castrillón)",
  a2: "272.597 €",
  a3: "377.442 €",
  b2: "220.175 €",
  b3: "304.857 €",
  m2: "3.226 €/m²",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Puede encajar si se quiere tener una playa extensa y un paseo marítimo a pie desde casa sin renunciar a la cercanía de una ciudad.",
  "También si resulta útil vivir en un núcleo pequeño y completar determinados servicios en Piedras Blancas o Avilés. El Hospital San Agustín y el aeropuerto quedan aproximadamente a diez minutos en coche.",
  "Salinas combina así playa cotidiana con accesos rápidos a servicios urbanos, siempre que se acepte que no toda la semana se resuelve dentro del propio núcleo.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Puede encajar peor si se quiere resolver prácticamente toda la vida andando dentro del mismo núcleo, porque parte de los servicios exige desplazarse a Piedras Blancas o Avilés.",
  "También si se busca una costa alejada visualmente de puerto e industria. Hacia San Juan de Nieva, el paseo desde Salinas acaba acercándose a la entrada de la ría y al paisaje portuario-industrial de Avilés.",
  "El verano trae más movimiento y presión de aparcamiento junto a la playa. Además, comprar en Salinas tiene una referencia sensiblemente más alta que Piedras Blancas o el conjunto de Castrillón.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Desde una vivienda candidata, hacer a pie el recorrido hasta la compra habitual y la playa. Continuar después hacia El Espartal y, si interesa, hacia San Juan de Nieva. Probar también en coche los trayectos a Piedras Blancas, Avilés y el Hospital San Agustín. Volver a la misma calle en un momento de alta ocupación veraniega. En la vivienda, revisar orientación, luz, aislamiento, humedad, salitre, fachada y ventanas.",
] as const;

const FOTO_COMO_PLAYA = {
  src: "/fotos/asturias-centro/salinas-playa.jpg",
  pie: "Playa de Salinas",
} as const;

const FOTO_COMO_PASEO = {
  src: "/fotos/asturias-centro/salinas-paseo.jpg",
  pie: "Paseo de Salinas",
} as const;

const FOTO_HISTORIA_ANCLAS = {
  src: "/fotos/asturias-centro/salinas-anclas.jpg",
  pie: "Museo de Anclas, Peñona de Salinas",
} as const;

const FOTO_HISTORIA_CHALETS = {
  src: "/fotos/asturias-centro/salinas-chalets.jpg",
  pie: "Casas bajas y chalés en Salinas",
} as const;

const FOTO_MAR_DUNAS = {
  src: "/fotos/asturias-centro/salinas-dunas.jpg",
  pie: "El Espartal desde el paseo, Salinas",
} as const;

const FOTO_MAR_AVILES = {
  src: "/fotos/asturias-centro/salinas-aviles.jpg",
  pie: "Avilés, a minutos de Salinas",
} as const;

const CREDITO_FOTOS =
  "Fotos: Wikimedia Commons (licencias indicadas en los archivos de origen).";

function FilaCasaNuevo2({ etiqueta, cuerpo }: { etiqueta: string; cuerpo: string }) {
  return (
    <div className="border-b border-[var(--linea)] py-3 last:border-b-0">
      <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--tinta-suave)]">
        {etiqueta}
      </p>
      <p className="mt-1.5 text-[15px] leading-relaxed text-[var(--tinta)]">{cuerpo}</p>
    </div>
  );
}

export default function Nuevo2SalinasCastrillonPage() {
  const ficha = municipioPorSlug("salinas-castrillon");
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
      />

      <BloqueZonaFicha
        zonaId={z.id}
        nombreZona={z.zona}
        resumen={RESUMEN_ZONA_NUEVO2[0]}
      />
      <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-[var(--tinta)]">
        {RESUMEN_ZONA_NUEVO2[1]}
      </p>
      <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-[var(--tinta)]">
        {RESUMEN_ZONA_NUEVO2[2]}
      </p>

      <MapaMunicipioFicha ficha={ficha} capasPortada={Boolean(ficha.mapa)} />

      <DesplegableNuevo2 titulo="Cómo se vive" varianteTarjetaV1>
        {COMO_SE_VIVE_NUEVO2.map((p) => (
          <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_COMO_PLAYA.src} pie={FOTO_COMO_PLAYA.pie} />
        <Foto src={FOTO_COMO_PASEO.src} pie={FOTO_COMO_PASEO.pie} />
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Frente a Mallorca" varianteTarjetaV1>
        <h3 className="mt-1 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Clima
        </h3>
        {CLIMA_NUEVO2.map((p) => (
          <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <h3 className="mt-7 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Vivir
        </h3>
        {VIVIR_NUEVO2.map((p) => (
          <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="De dónde viene" varianteTarjetaV1>
        {DE_DONDE_VIENE_NUEVO2.slice(0, 2).map((p) => (
          <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_HISTORIA_CHALETS.src} pie={FOTO_HISTORIA_CHALETS.pie} />
        <Foto src={FOTO_HISTORIA_ANCLAS.src} pie={FOTO_HISTORIA_ANCLAS.pie} />
        {DE_DONDE_VIENE_NUEVO2.slice(2).map((p) => (
          <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Mar, río y camino" varianteTarjetaV1>
        {MAR_RIO_CAMINO_NUEVO2.slice(0, 3).map((p) => (
          <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_MAR_DUNAS.src} pie={FOTO_MAR_DUNAS.pie} />
        <Foto src={FOTO_MAR_AVILES.src} pie={FOTO_MAR_AVILES.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(3).map((p) => (
          <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Casa" varianteTarjetaV1>
        {CASA_NUEVO2.map((p) => (
          <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}

        <div className="mt-6 pt-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--tinta-suave)]">
            Precio y bandas
          </p>
          {CASA_PRECIO_REFS.map((p) => (
            <p key={p} className="mt-1 max-w-2xl text-[15px] leading-relaxed text-[var(--tinta)]">
              {p}
            </p>
          ))}
          <div className="mt-4 overflow-x-auto rounded-xl border border-[var(--linea)] bg-white">
            <table className="min-w-[36rem] w-full text-left text-sm">
              <thead className="border-b border-[var(--linea)] bg-[var(--papel)] text-[var(--tinta-suave)]">
                <tr>
                  <th className="px-3 py-2 font-medium">Referencia</th>
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
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--tinta)]">
            {CASA_BANDAS_NOTA}
          </p>
        </div>

        <EnlaceIdealista ambito="municipio" slug={ficha.slug} nombre={ficha.municipio} />

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
          <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <h3 className="mt-7 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          No encaja si
        </h3>
        {NO_ENCAJA_SI_NUEVO2.map((p) => (
          <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <h3 className="mt-7 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Qué comprobar
        </h3>
        {QUE_COMPROBAR_NUEVO2.map((p) => (
          <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
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
