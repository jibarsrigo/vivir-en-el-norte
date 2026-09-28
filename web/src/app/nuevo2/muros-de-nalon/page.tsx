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
 * NUEVO2 — Muros de Nalón.
 * Texto: Lote_Asturias_Centro_4_CERTIFICADOS_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Muros de Nalón es un concejo pequeño organizado alrededor de dos núcleos que ofrecen experiencias residenciales distintas: Muros, la capital municipal, y San Esteban de Pravia, situado junto a la desembocadura del Nalón.",
  "Están cerca, pero no colocan el mismo paisaje ni los mismos recorridos delante de casa. Muros se relaciona primero con su propio núcleo y con desplazamientos cortos hacia otros puntos del concejo. San Esteban vive directamente junto al puerto y la ría.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Muros concentra la dimensión más administrativa del concejo. Es un núcleo pequeño, separado del frente portuario, desde el que la vida cotidiana se organiza alrededor del propio pueblo y de desplazamientos cortos hacia otros puntos del municipio y del entorno.",
  "San Esteban tiene entidad residencial propia y dispone, igual que Muros, de consultorio sanitario. Al salir de casa, el Nalón ya es una gran ría a punto de encontrarse con el Cantábrico. El puerto, las embarcaciones, los antiguos cargaderos de carbón y el trazado ferroviario forman parte del paisaje cotidiano.",
  "En Muros la relación con el agua funciona de otra manera. El mar está próximo, pero no ocupa el centro de la calle ni aparece una playa urbana al final del núcleo. Aguilar es la referencia de baño más clara y se alcanza por carretera. San Esteban tiene el puerto y la ría inmediatamente presentes, pero tampoco equivale a vivir frente a una gran playa de arena.",
  "El coche pesa de forma distinta según la dirección concreta. Parte de la vida básica se resuelve dentro del concejo; para hospital, compras amplias y servicios especializados la semana se extiende hacia poblaciones mayores del entorno.",
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
  "También cambia la relación con la playa. San Esteban tiene el agua delante, pero lo que ofrece de forma inmediata es puerto y ría. Aguilar es el arenal de referencia del concejo y desde Muros se llega por carretera.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "San Esteban no tiene aspecto de puerto industrial por casualidad. Su posición en la desembocadura del Nalón lo convirtió en una pieza del transporte del carbón asturiano: el ferrocarril llegaba hasta el frente portuario y el mineral se trasladaba mediante tolvas y cargaderos a los barcos.",
  "Esa actividad dejó una forma física muy reconocible. Junto al agua permanecen estructuras industriales y trazados ligados al ferrocarril. Explican por qué esta parte del pueblo se organiza de esa manera y por qué el paseo actual tiene un carácter distinto al de un paseo marítimo convencional.",
  "Cuando la función carbonera perdió protagonismo, parte de esa infraestructura dejó de servir al trabajo portuario, pero no desapareció del paisaje. El antiguo corredor ferroviario pudo incorporarse a los recorridos peatonales y las estructuras conservadas pasaron a mostrar físicamente lo que había ocurrido allí.",
  "El puerto de San Esteban sigue siendo la desembocadura que se ve y se recorre desde el pueblo, pero al mismo tiempo conserva la huella de la etapa en que trenes, carbón y barcos organizaban este frente del Nalón.",
  "Muros representa otra formación del concejo. Es la capital municipal y su núcleo no creció como prolongación de ese puerto. La separación entre ambos explica que hoy continúen ofreciendo experiencias residenciales distintas aunque compartan ayuntamiento y estén a poca distancia.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "San Esteban permite empezar por la opción más sencilla: caminar junto al puerto y la desembocadura. El Nalón ocupa aquí todo el paisaje, con San Juan de la Arena al otro lado, mientras cargaderos y restos ferroviarios recuerdan la función industrial del frente portuario. Este tramo puede hacerse como una vuelta corta sin preparar una excursión.",
  "Desde ese mismo entorno aparece otra posibilidad. La Senda Norte aprovecha aproximadamente un kilómetro de la antigua infraestructura ferroviaria y mantiene un recorrido prácticamente llano junto al paisaje industrial y fluvial.",
  "La Senda de los Miradores cambia claramente la escala. La travesía entre San Esteban y Aguilar ronda los 6,35 km y unas dos horas. Desde el puerto se avanza hacia la costa y la subida al entorno del Espíritu Santo obliga a afrontar un tramo importante de escaleras; después continúan los miradores y el recorrido por la parte alta.",
  "No es una prolongación llana del paseo del puerto. Puerto y primer paseo pueden entrar en una tarde corriente; hacer la senda hasta Aguilar exige reservar tiempo y aceptar escaleras y desnivel.",
  "Aguilar ofrece la experiencia de playa más completa del concejo: un arenal de unos 640 metros, de arena fina, con acceso adaptado y aparcamiento regulado durante la temporada de baño. Desde Muros se llega por carretera; desde San Esteban puede convertirse en el final de la caminata costera.",
  "Así aparecen tres relaciones diferentes con el agua: en San Esteban, puerto y ría pueden ser cotidianos; la costa de los miradores es una salida; Aguilar es la playa a la que se va.",
] as const;

const CASA_NUEVO2 = [
  "En Muros de Nalón, una vivienda no se entiende del todo hasta saber en cuál de sus dos núcleos está. Una dirección en Muros y otra en San Esteban pueden pertenecer al mismo concejo y colocar la vida diaria en escenarios distintos.",
  "En San Esteban, una vivienda bien situada puede incorporar el puerto, la desembocadura y el paseo junto al Nalón a los recorridos habituales. Eso no significa vivir en una playa urbana: Aguilar sigue siendo un destino y la senda de los miradores es una salida con desnivel.",
  "En Muros, la vivienda se relaciona primero con el núcleo principal. Aguilar y San Esteban están próximos, pero forman parte de desplazamientos diferentes. Una casa puede ofrecer un acceso cómodo al coche y al resto del territorio sin proporcionar la misma relación inmediata con el agua.",
  "Por eso merece la pena probar una vivienda desde su propia puerta. Hay que recorrer el camino hasta el coche, la compra y el consultorio, y comprobar después cuánto esfuerzo exige llegar a aquello que justificaba la ubicación: puerto, paseo, playa o salida hacia otros servicios.",
  "También importa cómo responde el inmueble al clima atlántico. Luz y orientación, ventilación, aislamiento, estado de fachadas y cubiertas y cualquier señal que aconseje comprobar humedad forman parte de la vivienda tanto como la superficie o las vistas.",
  "Muros de Nalón tiene un mercado pequeño. Para comparar viviendas hay que atender especialmente al producto concreto: ubicación dentro del concejo, acceso, estado, distribución, luz, exterior y aparcamiento cuando resulte necesario.",
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
  "Puede encajar peor si se necesita resolver una parte muy amplia de la semana sin coche o sin salir de un núcleo pequeño, o si se espera una oferta urbana de comercio y servicios inmediatamente disponible.",
  "También puede encajar peor si vivir junto al mar significa necesariamente tener una gran playa urbana al final de la calle. San Esteban tiene el agua muy presente, pero es puerto y desembocadura; Muros está cerca de Aguilar, pero no forma una continuidad urbana con la playa.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Tratar Muros y San Esteban como dos candidatos residenciales distintos. En San Esteban, salir desde una vivienda real y recorrer a pie el consultorio, el puerto, la ría y el comienzo de las sendas. En Muros, hacer el mismo ejercicio dentro del núcleo y después probar los desplazamientos hacia Aguilar y San Esteban. Hacer también el trayecto real hacia el hospital y una compra de mayor escala. Visitar la vivienda con tiempo húmedo y comprobar luz, orientación, ventilación, acceso, aparcamiento y cualquier señal que aconseje revisar humedad.",
] as const;

const FOTO_COMO_VILLA = {
  src: "/fotos/asturias-centro/muros-villa.jpg",
  pie: "Muros de Nalón: villa sobre el estuario",
} as const;

const FOTO_COMO_RIA = {
  src: "/fotos/asturias-centro/muros-ria.jpg",
  pie: "Desembocadura del Nalón desde Muros",
} as const;

const FOTO_HISTORIA_SELGAS = {
  src: "/fotos/asturias-centro/muros-selgas.jpg",
  pie: "Quinta de Selgas, en El Pito",
} as const;

const FOTO_MAR_MIRADORES = {
  src: "/fotos/asturias-centro/muros-miradores.jpg",
  pie: "Miradores de Muros de Nalón",
} as const;

const FOTO_MAR_PASEO = {
  src: "/fotos/asturias-centro/muros-paseo.jpg",
  pie: "Paseo en Muros de Nalón",
} as const;

const FOTO_MAR_NALON = {
  src: "/fotos/asturias-centro/muros-nalon.jpg",
  pie: "Estuario del Nalón",
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
        <Foto src={FOTO_HISTORIA_SELGAS.src} pie={FOTO_HISTORIA_SELGAS.pie} />
        {DE_DONDE_VIENE_NUEVO2.slice(4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Mar, río y camino" varianteTarjetaV1>
        {MAR_RIO_CAMINO_NUEVO2.slice(0, 1).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_MAR_PASEO.src} pie={FOTO_MAR_PASEO.pie} />
        <Foto src={FOTO_MAR_NALON.src} pie={FOTO_MAR_NALON.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(1, 3).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_MAR_MIRADORES.src} pie={FOTO_MAR_MIRADORES.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(3).map((p) => (
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