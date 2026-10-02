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
import DesplegableNuevo2 from "@/components/DesplegableNuevo2";

/**
 * NUEVO2 — Muros de Nalón.
 * Texto: Lote_Asturias_Centro_4_CERTIFICADOS_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Asturias Centro reúne formas muy distintas de vivir junto al Cantábrico: desde el puerto en ladera de Cudillero y los núcleos del estuario del Nalón hasta las villas marineras de Luanco y Candás, la playa de Salinas y la escala urbana de Gijón. Avilés y Oviedo completan un territorio en el que costa, ciudades y aeropuerto quedan relativamente próximos, aunque la vida cotidiana cambia mucho según el lugar elegido.",
  "Muros de Nalón ocupa el tramo occidental de Asturias Centro junto a la desembocadura del Nalón, entre Cudillero y el entorno de Soto del Barco. Dentro de un concejo muy pequeño, Muros y San Esteban de Pravia ofrecen dos formas de vida distintas.",
  "Muros es la capital municipal y se organiza como un pequeño núcleo interior; San Esteban se abre directamente al puerto y a la ría. La costa y la playa están cerca, pero no se viven igual desde ambos lugares, y Avilés sigue funcionando como apoyo para hospital, compras grandes y otros servicios.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Muros es la capital municipal y concentra el ayuntamiento y parte de los servicios del concejo. Está separado del frente portuario, de modo que la vida diaria se organiza alrededor del propio pueblo y de desplazamientos cortos hacia San Esteban y otros núcleos del entorno.",
  "San Esteban tiene entidad residencial propia y dispone, igual que Muros, de consultorio sanitario. Al salir de casa, el Nalón ya es una gran ría a punto de encontrarse con el Cantábrico. El puerto, las embarcaciones, los antiguos cargaderos de carbón y el trazado ferroviario forman parte del paisaje cotidiano.",
  "En Muros el agua se vive de otra manera. El mar está próximo, pero no ocupa el centro de la calle ni aparece una playa urbana al final del núcleo. Aguilar es la referencia de baño más clara y se alcanza por carretera. San Esteban tiene el puerto y la ría inmediatamente presentes, pero tampoco equivale a vivir frente a una gran playa de arena.",
  "Parte de la vida básica se resuelve dentro del concejo. Para hospital, compras grandes y servicios especializados hay que desplazarse a poblaciones mayores del entorno, y la frecuencia con la que se necesita el coche cambia según la dirección concreta.",
  "En invierno la diferencia entre Muros y San Esteban sigue siendo visible. San Esteban conserva el paseo junto a la desembocadura y el puerto como una salida corta y repetible. En Muros, los recorridos hacia playa, puerto o costa son más deliberados.",
] as const;

const CLIMA_NUEVO2 = [
  "El cambio respecto a Mallorca se nota menos en una cifra aislada que en la frecuencia con la que el tiempo condiciona el día. En la costa asturiana hay más humedad, más lluvia y más cielos cubiertos, mientras los veranos son generalmente más frescos y el calor intenso tiene menos peso.",
  "Eso cambia la forma de utilizar una vivienda y el exterior. En una terraza importan la orientación, las horas reales de luz, el resguardo y cómo responde la casa después de varios días húmedos. Tender, ventilar o salir a caminar se organiza con una meteorología más cambiante.",
  "El verano permite con más frecuencia caminar o permanecer al aire libre durante las horas centrales sin el calor habitual de Mallorca, pero no garantiza una sucesión estable de días de playa. El Cantábrico introduce nubes, lluvia y cambios rápidos incluso en meses templados.",
] as const;

const VIVIR_NUEVO2 = [
  "Muros de Nalón es un concejo pequeño. Parte de la compra, el hospital y los servicios especializados se resuelven fuera, sobre todo en poblaciones mayores del entorno. El coche forma por ello parte normal de la semana.",
  "En San Esteban, el puerto y la desembocadura están al alcance de un paseo corto desde muchas viviendas del núcleo. En Muros, Aguilar y la costa quedan cerca, pero normalmente se incorporan al día mediante un desplazamiento específico.",
  "También cambia cómo se llega a la playa. San Esteban tiene el agua delante, pero lo que ofrece de forma inmediata es puerto y ría. Aguilar es el arenal de referencia del concejo y desde Muros se llega por carretera.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "San Esteban no tiene aspecto de puerto industrial por casualidad. Su posición en la desembocadura del Nalón lo convirtió en una pieza del transporte del carbón asturiano: el ferrocarril llegaba hasta el frente portuario y el mineral se trasladaba mediante tolvas y cargaderos a los barcos. Muros de Nalón se entiende en el estuario del Nalón: villa alta y San Esteban / San Juan de la Arena como polo de río y puerto.",
  "Esa actividad dejó una forma física muy reconocible. Junto al agua permanecen estructuras industriales y trazados ligados al ferrocarril. Explican por qué esta parte del pueblo se organiza de esa manera y por qué el paseo actual tiene un carácter distinto al de un paseo marítimo convencional. La historia de oficio fluvial y marinero explica dos ritmos dentro del mismo concejo.",
  "Cuando la función carbonera perdió protagonismo, parte de esa infraestructura dejó de servir al trabajo portuario, pero no desapareció del paisaje. El antiguo corredor ferroviario pudo incorporarse a los recorridos peatonales y las estructuras conservadas pasaron a mostrar físicamente lo que había ocurrido allí. El casco de Muros conserva escala de villa en altura; la Arena concentra orilla trabajada.",
  "El puerto de San Esteban sigue siendo la desembocadura que se ve y se recorre desde el pueblo, pero al mismo tiempo conserva la huella de la etapa en que trenes, carbón y barcos organizaban este frente del Nalón. La cercanía a Avilés y Cudillero sitúa el municipio en la red de Asturias Centro.",
  "Muros tuvo un desarrollo distinto al de San Esteban. Es la capital municipal y su núcleo no creció como prolongación del puerto. Esa separación ayuda a explicar por qué hoy ofrecen rutinas diferentes aunque compartan ayuntamiento y estén a poca distancia. Hoy comprar aquí es decidir entre Muros villa o Arena, sabiendo que el anuncio único mezcla cuestas y orilla. Hospital en Avilés a minutos.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "San Esteban de Pravia —el núcleo del concejo que se abre al agua— permite la salida más sencilla: bajar al muelle y caminar junto al puerto y a la desembocadura del Nalón. El río llega aquí ensanchado en ría, con barcos, restos de cargaderos de carbón y el horizonte del Cantábrico al fondo. Es un paseo corto, repetible entre semana, sin convertir la tarde en excursión. El agua cotidiana puede ser ría del Nalón o desembocadura hacia el Cantábrico.",
  "Al otro lado de la misma ría se ve San Juan de la Arena (L'Arena), en el concejo vecino de Soto del Barco. No pertenece a Muros de Nalón: es la orilla de enfrente, puerto y villa pesquera enfrentados a San Esteban. Desde el muelle se reconoce el contraste de las dos márgenes; para llegar allí hace falta rodear por carretera o puente, porque el Nalón corta el paso a pie. San Esteban y la Arena organizan el frente de trabajo y de paseo fluvial.",
  "Desde el entorno del puerto arranca la Senda Norte: un tramo que reutiliza aproximadamente un kilómetro de la antigua vía del ferrocarril carbonero. El firme es casi llano, paralelo a la ría y al paisaje industrial. Sirve como paseo suave —ideal cuando se quiere estar junto al agua sin subir cuestas— y enlaza con otros recorridos costeros del concejo. Playas cercanas del entorno piden trayecto corto según la vivienda.",
  "La Senda de los Miradores es otra cosa. Une San Esteban con la playa de Aguilar en unos 6,35 km y alrededor de dos horas. Sale del puerto, pasa cerca de playas menores (Garrunchos y otras calas) y sube al mirador del Espíritu Santo por un tramo exigente de escaleras —del orden de cuatrocientos peldaños—. Arriba, la costa se ve de frente: desembocadura, orilla de San Juan y el Cantábrico abierto. Después el camino sigue por la parte alta, con miradores sucesivos, hasta bajar a Aguilar. En verano el agua suele rondar los 19–21 °C.",
  "No es la misma experiencia que el paseo del muelle. El puerto y la Senda Norte caben en una tarde corriente; la Senda de los Miradores pide tiempo, calzado y ganas de desnivel. Quien viva en San Esteban puede empezar andando; quien viva en Muros suele acercarse en coche al puerto o a un tramo intermedio. Cudillero y Avilés amplían mapa de costa y ciudad.",
  "Aguilar es el arenal de referencia del concejo: unos 640 metros de arena fina, acceso adaptado y aparcamiento regulado en temporada de baño. No es una playa urbana pegada al casco de Muros: desde la capital municipal se llega por carretera; desde San Esteban puede ser el final de la caminata costera. Es el sitio donde el concejo ofrece baño y arenal completo, distinto del puerto (ría y trabajo marítimo) y distinto de los miradores (acantilado y vista). Un martes de noviembre el estuario respira; en verano el acceso se nota más.",
  "Quedan así tres maneras de vivir el agua en el mismo municipio: en San Esteban, puerto y ría como paisaje diario; la Senda Norte y los miradores como salidas a pie con distinta dureza; Aguilar como la playa a la que se va a bañarse o a pasar la tarde. Elegir Muros o Arena pesa más que el nombre del concejo.",
] as const;

const CASA_NUEVO2 = [
  "En Muros de Nalón, una vivienda no se entiende del todo hasta saber en cuál de sus dos núcleos está. Una dirección en Muros y otra en San Esteban pueden pertenecer al mismo concejo y colocar la vida diaria en escenarios distintos.",
  "En San Esteban, una vivienda bien situada puede incorporar el puerto, la desembocadura y el paseo junto al Nalón a los recorridos habituales. Eso no significa vivir en una playa urbana: Aguilar sigue siendo un destino y la senda de los miradores es una salida con desnivel.",
  "En Muros, la vivienda se relaciona primero con el núcleo principal. Aguilar y San Esteban están próximos, pero forman parte de desplazamientos diferentes. Una casa puede ofrecer un acceso cómodo al coche y al resto del territorio sin proporcionar la misma relación inmediata con el agua.",
  "Por eso merece la pena probar una vivienda desde su propia puerta. Hay que recorrer el camino hasta el coche, la compra y el consultorio, y comprobar después cuánto esfuerzo exige llegar a aquello que justificaba la ubicación: puerto, paseo, playa o salida hacia otros servicios.",
  "También importa cómo responde el inmueble al clima atlántico. Luz y orientación, ventilación, aislamiento, estado de fachadas y cubiertas y cualquier señal que aconseje comprobar humedad forman parte de la vivienda tanto como la superficie o las vistas.",
  "Muros de Nalón tiene un mercado pequeño. Al comparar viviendas pesan especialmente la ubicación dentro del concejo, el acceso, el estado, la distribución, la luz, el espacio exterior y el aparcamiento cuando resulte necesario.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "Muros y San Esteban no son ubicaciones intercambiables. En San Esteban conviene comprobar si la vivienda permite integrar realmente el puerto y la ría en la vida a pie; en Muros, cuánto coche introducen Aguilar, San Esteban y las necesidades exteriores.";

const CASA_QUE_CONVIENE_REVISAR =
  "Acceso real desde la calle; recorrido hasta coche, compra y consultorio; luz y orientación; ventilación y aislamiento; estado exterior y señales que justifiquen revisar humedad; aparcamiento; y si el paseo, puerto o playa que aparecen próximos en el anuncio forman parte de una rutina sencilla desde esa puerta.";

const CASA_MERCADO_REVENTA =
  "En un mercado pequeño, la vivienda concreta pesa mucho. Acceso sencillo, distribución aprovechable, buen estado, luz, aparcamiento cuando sea necesario y una ubicación práctica pueden hacerla útil para más perfiles en el futuro. Ninguna de esas características permite anticipar el precio ni el plazo de una futura venta.";

const ENCAJA_SI_NUEVO2 = [
  "Muros de Nalón puede encajar si se busca un concejo pequeño y se acepta que parte de las compras, el hospital y los servicios especializados se resolverán fuera.",
  "También si interesa elegir entre dos relaciones distintas con el agua: en San Esteban, puerto y desembocadura pueden entrar en el paseo diario; en Muros, la vida se organiza primero alrededor del núcleo y Aguilar y San Esteban quedan como destinos próximos.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Puede encajar peor si se necesita cubrir una parte muy amplia del día a día sin coche o sin salir de un núcleo pequeño, o si se espera una oferta urbana de comercio y servicios inmediatamente disponible.",
  "También puede encajar peor si vivir junto al mar significa necesariamente tener una gran playa urbana al final de la calle. San Esteban tiene el agua muy presente, pero es puerto y desembocadura; Muros está cerca de Aguilar, pero no forma una continuidad urbana con la playa.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Tratar Muros y San Esteban como dos candidatos residenciales distintos. En San Esteban, salir desde una vivienda real y recorrer a pie el consultorio, el puerto, la ría y el comienzo de las sendas. En Muros, hacer el mismo ejercicio dentro del núcleo y después probar los desplazamientos hacia Aguilar y San Esteban. Hacer también el trayecto real hacia el hospital y una compra de mayor escala. Visitar la vivienda con tiempo húmedo y comprobar luz, orientación, ventilación, acceso, aparcamiento y cualquier señal que aconseje revisar humedad.",
] as const;

const FOTO_COMO_VILLA = {
  src: "/fotos/asturias-centro/muros-identidad-selgas.jpg",
  pie: "San Esteban (Muros de Nalón): casas del puerto frente al estuario",
} as const;

const FOTO_COMO_RIA = {
  src: "/fotos/asturias-centro/muros-ria.jpg",
  pie: "Desembocadura del Nalón desde Muros",
} as const;

const FOTO_MAR_NALON = {
  src: "/fotos/asturias-centro/muros-nalon.jpg",
  pie: "Estuario del Nalón hacia la desembocadura",
} as const;

const CREDITO_FOTOS =
  "Fotos: Wikimedia Commons (licencias indicadas en los archivos de origen).";

function FilaCasaNuevo2({ etiqueta, cuerpo }: { etiqueta: string; cuerpo: string }) {
  return (
    <div className="border-b border-[var(--linea)] px-4 py-3 last:border-b-0">
      <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--tinta-suave)]">
        {etiqueta}
      </p>
      <p className="mt-1.5 text-[15px] leading-relaxed text-[var(--tinta)]">{cuerpo}</p>
    </div>
  );
}

export default function Nuevo2MurosDeNalonPage() {
  const ficha = municipioPorSlug("muros-de-nalon");
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

      <BloqueZonaFicha
        zonaId={z.id}
        nombreZona={z.zona}
        resumen={RESUMEN_ZONA_NUEVO2[0]}
      />
      {RESUMEN_ZONA_NUEVO2.slice(1).map((p) => (
        <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed text-[var(--tinta)]">
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
        <Foto src={FOTO_COMO_VILLA.src} pie={FOTO_COMO_VILLA.pie} />
        <Foto src={FOTO_COMO_RIA.src} pie={FOTO_COMO_RIA.pie} />
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Frente a Mallorca" varianteTarjetaV1>
        <h3 className="mt-1 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Clima
        </h3>
        {CLIMA_NUEVO2.map((p) => (
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
        {DE_DONDE_VIENE_NUEVO2.slice(0, 4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
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
        <Foto src={FOTO_MAR_NALON.src} pie={FOTO_MAR_NALON.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(2).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Casa" varianteTarjetaV1>
        {CASA_NUEVO2.map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}

        <EnlaceIdealista ambito="municipio" slug={ficha.slug} nombre={ficha.municipio} />

        <div className="mt-6 max-w-2xl overflow-hidden rounded-xl border border-[var(--linea)] bg-white">
          <FilaCasaNuevo2 etiqueta="Advertencia de microzona" cuerpo={CASA_ADVERTENCIA_MICROZONA} />
          <FilaCasaNuevo2
            etiqueta="Qué conviene revisar en una vivienda"
            cuerpo={CASA_QUE_CONVIENE_REVISAR}
          />
          <FilaCasaNuevo2 etiqueta="Mercado y reventa" cuerpo={CASA_MERCADO_REVENTA} />
        </div>
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