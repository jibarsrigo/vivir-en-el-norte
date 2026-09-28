import Link from "next/link";
import { notFound } from "next/navigation";
import BloqueZonaFicha from "@/components/BloqueZonaFicha";
import CabeceraFichaMunicipio from "@/components/CabeceraFichaMunicipio";
import EnlaceIdealista from "@/components/EnlaceIdealista";
import MapaMunicipioFicha from "@/components/MapaMunicipioFicha";
import { RELATO_MUNICIPIOS } from "@/components/RelatoMunicipio";
import TablaComparativaZona from "@/components/TablaComparativaZona";
import { municipiosDeZonaFicha, municipioPorSlug, zonaIdDeFicha } from "@/lib/municipios";
import { zonaPorId } from "@/lib/zonas";
import DesplegableNuevo2 from "../cudillero/DesplegableNuevo2";

/**
 * NUEVO2 — Muros de Nalón.
 * Texto: CURSOR_NUEVO2_MUROS_V2_CIERRE_EDITORIAL_Y_VERIFICACION_ASTURIAS_CENTRO_2026-09-25.txt
 */

const RESUMEN_ZONA_NUEVO2 =
  "Asturias Centro reúne formas muy distintas de vivir junto al Cantábrico: desde el puerto en ladera de Cudillero y los núcleos del estuario del Nalón hasta las villas marineras de Luanco y Candás, la playa de Salinas y la escala urbana de Gijón. Avilés y Oviedo completan un territorio en el que costa, ciudades y aeropuerto quedan relativamente próximos, aunque la vida cotidiana cambia mucho según el lugar elegido.";

const COMO_SE_VIVE_NUEVO2 = [
  "Muros de Nalón se entiende mal si se imagina como un único pueblo. El concejo tiene dos núcleos que permiten vidas bastante distintas: Muros, que ejerce de capital municipal, y San Esteban de Pravia, situado junto a la desembocadura del Nalón. Están cerca, pero el paisaje que entra en la rutina cambia mucho entre uno y otro.",
  "Muros concentra la dimensión más administrativa del concejo. Es un núcleo pequeño, separado del frente portuario, desde el que la vida cotidiana se organiza alrededor del propio pueblo y de desplazamientos cortos hacia otros puntos del municipio y del entorno. San Esteban no es simplemente el lugar al que se baja desde Muros para pasear: tiene entidad residencial propia y dispone, igual que Muros, de consultorio sanitario.",
  "La diferencia aparece con claridad al salir de casa. En San Esteban, el Nalón ya es una gran ría a punto de encontrarse con el Cantábrico. El puerto, las embarcaciones, los antiguos cargaderos de carbón y el trazado ferroviario forman parte del escenario cotidiano. Es posible caminar junto a ese frente sin convertirlo en una excursión.",
  "En Muros la relación con el agua funciona de otra manera. El mar está próximo, pero no ocupa el centro de la calle ni aparece una playa urbana al final del núcleo. Aguilar es la referencia de baño más clara y se alcanza por carretera. San Esteban, por su parte, tiene el puerto y la ría inmediatamente presentes, pero tampoco equivale a vivir frente a una gran playa de arena.",
  "Eso hace que el coche pese de forma distinta según la dirección concreta. Ninguno de los dos núcleos debe describirse como aislado ni como autosuficiente. Parte de la vida básica se resuelve dentro del concejo; para hospital, compras amplias y servicios especializados la semana se extiende hacia poblaciones mayores del entorno.",
  "En invierno la diferencia entre Muros y San Esteban sigue siendo visible. San Esteban conserva el paseo junto a la desembocadura y el puerto como una salida corta y repetible. En Muros, la rutina es más de núcleo y los recorridos hacia playa, puerto o costa son más deliberados. Antes de pensar simplemente en «vivir en Muros de Nalón», hay que saber cuál de esas dos geografías entraría realmente en un día normal.",
] as const;

const CLIMA_NUEVO2 = [
  "El cambio respecto a Mallorca se nota menos en una cifra aislada que en la frecuencia con la que el tiempo condiciona el día. En la costa asturiana hay más humedad, más lluvia y más cielos cubiertos, mientras los veranos son generalmente más frescos y el calor intenso tiene menos peso.",
  "Eso cambia la forma de utilizar una vivienda y el exterior. Una terraza deja de ser únicamente un lugar que proteger del sol: importan la orientación, las horas reales de luz, el resguardo y cómo responde la casa después de varios días húmedos. Tender, ventilar o salir a caminar se organiza con una meteorología más cambiante.",
  "El verano permite con más frecuencia caminar o permanecer al aire libre durante las horas centrales sin el calor habitual de Mallorca, pero no garantiza una sucesión estable de días de playa. El Cantábrico introduce nubes, lluvia y cambios rápidos incluso en meses templados.",
] as const;

const VIVIR_NUEVO2 = [
  "También cambia la escala. Muros de Nalón no sustituye la oferta cotidiana de una localidad mallorquina grande: es un concejo pequeño apoyado en núcleos cercanos y en ciudades como Avilés para necesidades de mayor nivel. Vivir aquí significa aceptar que parte de la semana se resuelve fuera.",
  "A cambio, ciertas relaciones con el paisaje pueden ser mucho más inmediatas. En San Esteban no hace falta preparar una salida para caminar junto a una desembocadura, ver el puerto o seguir el comienzo de la antigua plataforma ferroviaria. En Muros, la proximidad de Aguilar y de la costa existe, pero se vive más como destino próximo que como continuación de la calle.",
  "La relación con la playa también cambia. Tener el Cantábrico muy cerca no significa necesariamente salir de casa y llegar andando a una playa urbana. En este concejo conviven puerto, ría, costa alta y playa, pero cada elemento ocupa un radio distinto.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "San Esteban no tiene aspecto de puerto industrial por casualidad. Su posición en la desembocadura del Nalón lo convirtió en una pieza del transporte del carbón asturiano: el ferrocarril llegaba hasta el frente portuario y el mineral se trasladaba mediante tolvas y cargaderos a los barcos.",
  "Esa actividad dejó una forma física muy reconocible. Junto al agua permanecen estructuras industriales y trazados ligados al ferrocarril. No son elementos aislados colocados después para recordar el pasado: explican por qué esta parte del pueblo se organiza de esa manera y por qué el paseo actual tiene un carácter tan distinto al de un paseo marítimo convencional.",
  "Cuando la función carbonera perdió protagonismo, parte de esa infraestructura dejó de servir al trabajo portuario, pero no desapareció del paisaje. El antiguo corredor ferroviario pudo incorporarse a los recorridos peatonales y las estructuras conservadas pasaron a contar físicamente lo que había ocurrido allí.",
  "Por eso el puerto de San Esteban reúne hoy dos tiempos. Sigue siendo la desembocadura que se ve y se recorre desde el pueblo, pero al mismo tiempo permite leer la etapa en que trenes, carbón y barcos organizaban este frente del Nalón. El patrimonio industrial acompaña el paseo.",
  "Muros representa otra formación del concejo. Es la capital municipal y su núcleo no creció como prolongación de ese puerto. La separación entre ambos explica que hoy continúen ofreciendo experiencias residenciales distintas aunque compartan ayuntamiento y estén a poca distancia.",
  "Esta historia importa porque sigue siendo utilizable. En San Esteban, una infraestructura construida para mover carbón ayuda hoy a entender por dónde se camina y qué se ve. El pasado sigue dibujando el recorrido cotidiano.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "San Esteban permite empezar por la opción más sencilla: caminar junto al puerto y la desembocadura. El Nalón ocupa aquí todo el paisaje, con San Juan de la Arena al otro lado, mientras cargaderos y restos ferroviarios recuerdan la función industrial del frente portuario. Este tramo pertenece a la vida cotidiana: puede hacerse como una vuelta corta sin preparar una excursión.",
  "Desde ese mismo entorno aparece otra posibilidad. La Senda Norte aprovecha aproximadamente un kilómetro de la antigua infraestructura ferroviaria y mantiene un recorrido prácticamente llano junto al paisaje industrial y fluvial. Que empiece cerca del puerto no debe confundirse con la ruta costera completa.",
  "La Senda de los Miradores cambia la escala. Desde las inmediaciones de San Esteban comienza la subida hacia el Espíritu Santo mediante escaleras y después el recorrido continúa por la parte alta de la costa. Aparecen acantilados y miradores y existen desvíos hacia pequeñas playas, pero esos descensos no equivalen a tener calas cómodas para un baño cotidiano.",
  "El destino más claro del recorrido es Aguilar. La senda completa es una actividad deliberada, no una prolongación llana del paseo del puerto. Lo residencialmente importante es el cambio de esfuerzo: puerto y primer paseo pueden entrar en cualquier tarde, mientras la costa alta exige tiempo, escaleras y desnivel.",
  "Aguilar ofrece la experiencia de playa más completa del concejo: un arenal de unos 640 metros, de arena fina, con acceso adaptado y aparcamiento regulado durante la temporada de baño. Desde Muros se llega por carretera; desde San Esteban puede convertirse en el final de la caminata costera.",
  "Así aparecen tres relaciones diferentes con el agua: en San Esteban, puerto y ría pueden ser cotidianos; la costa de los miradores es una salida; Aguilar es la playa a la que se va. Vivir cerca de las tres cosas no significa utilizarlas del mismo modo.",
] as const;

const CASA_NUEVO2 = [
  "En Muros de Nalón, una vivienda no se entiende del todo hasta saber en cuál de sus dos núcleos está. Una dirección en Muros y otra en San Esteban pueden pertenecer al mismo concejo y, sin embargo, colocar la vida diaria en escenarios distintos.",
  "En San Esteban, una vivienda bien situada puede incorporar el puerto, la desembocadura y el paseo junto al Nalón a los recorridos habituales. Eso no significa vivir en una playa urbana: Aguilar sigue siendo un destino y la senda de los miradores es una salida con desnivel. Lo que determinadas calles pueden ofrecer es otra cosa: cerrar la puerta y tener la ría y el antiguo frente portuario dentro de una vuelta cotidiana.",
  "En Muros, la vivienda se relaciona primero con el núcleo principal. Aguilar y San Esteban están próximos, pero forman parte de desplazamientos diferentes. Una casa puede ofrecer un acceso cómodo al coche y al resto del territorio sin proporcionar la misma relación inmediata con el agua. Aquí, como en San Esteban, la distancia en kilómetros explica menos que el recorrido que realmente se repetirá durante la semana.",
  "Por eso merece la pena probar una vivienda desde su propia puerta. Hay que recorrer el camino hasta el coche, la compra y el consultorio, y comprobar después cuánto esfuerzo exige llegar a aquello que justificaba la ubicación: puerto, paseo, playa o salida hacia otros servicios. Una casa que parece muy próxima a todo en el mapa puede funcionar de otra manera cuando esos trayectos se repiten.",
  "También importa cómo responde el inmueble al clima atlántico. Luz y orientación, ventilación, aislamiento, estado de fachadas y cubiertas y cualquier señal que aconseje comprobar humedad forman parte de la vivienda tanto como la superficie o las vistas. No se trata de dar por hecho que existe un problema, sino de comprobarlo en la casa concreta y no deducirlo del municipio.",
  "Muros de Nalón tiene además un mercado pequeño. Sin una referencia municipal actual suficientemente sólida, comparar viviendas exige mirar con más atención el producto concreto: ubicación dentro del concejo, acceso, estado, distribución, luz, exterior y aparcamiento cuando resulte necesario. Unos pocos anuncios no bastan para describir todo el mercado.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "Muros y San Esteban no son ubicaciones intercambiables. En San Esteban conviene comprobar si la vivienda permite integrar realmente el puerto y la ría en la vida a pie; en Muros, cuánto coche introducen Aguilar, San Esteban y las necesidades exteriores. «Cerca del mar» no resuelve esa diferencia.";

const CASA_QUE_CONVIENE_REVISAR =
  "Acceso real desde la calle; recorrido hasta coche, compra y consultorio; luz y orientación; ventilación y aislamiento; estado exterior y señales que justifiquen revisar humedad; aparcamiento; y si el paseo, puerto o playa que aparecen próximos en el anuncio forman parte de una rutina sencilla desde esa puerta.";

const CASA_MERCADO_REVENTA =
  "En un mercado pequeño, la utilidad de la vivienda concreta pesa especialmente. Acceso sencillo, distribución aprovechable, buen estado, luz, aparcamiento cuando sea necesario y una ubicación que mantenga sentido residencial pueden ampliar el número de personas para las que una casa resulte práctica en el futuro. No convertir estas características en una previsión de precio ni de plazo de venta.";

const ENCAJA_SI_NUEVO2 = [
  "Muros de Nalón puede encajar si se busca una escala pequeña y se acepta que una parte de las compras, el hospital y los servicios especializados se resolverán fuera del concejo. La cercanía del resto de Asturias Centro permite ampliar ese radio sin convertir Muros o San Esteban en núcleos urbanos.",
  "También puede encajar si interesa una relación con el agua que cambie según el núcleo: puerto y desembocadura incorporados a la rutina en San Esteban; vida de núcleo y costa próxima en Muros; y Aguilar y la senda de los miradores como salidas que amplían ambas experiencias.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Puede encajar peor si se necesita resolver una parte muy amplia de la semana sin coche o sin salir de un núcleo pequeño, o si se espera una oferta urbana de comercio y servicios inmediatamente disponible.",
  "También puede encajar peor si vivir junto al mar significa necesariamente tener una gran playa urbana al final de la calle. San Esteban tiene el agua muy presente, pero es puerto y desembocadura; Muros está cerca de Aguilar, pero no forma una continuidad urbana con la playa.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "La prueba decisiva es tratar Muros y San Esteban como dos candidatos residenciales distintos. En San Esteban, recorrer desde una vivienda real hasta el puerto, la ría y el comienzo de las sendas. En Muros, hacer el mismo ejercicio dentro del núcleo y después comprobar los desplazamientos hacia Aguilar, San Esteban y los servicios exteriores. El nombre municipal es el mismo; la rutina que empieza en cada puerta puede no serlo.",
] as const;

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

      <BloqueZonaFicha zonaId={z.id} nombreZona={z.zona} resumen={RESUMEN_ZONA_NUEVO2} />

      <MapaMunicipioFicha ficha={ficha} capasPortada={Boolean(ficha.mapa)} />

      <DesplegableNuevo2 titulo="Cómo se vive" varianteTarjetaV1>
        {COMO_SE_VIVE_NUEVO2.map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
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
        {DE_DONDE_VIENE_NUEVO2.map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Mar, río y camino" varianteTarjetaV1>
        {MAR_RIO_CAMINO_NUEVO2.map((p) => (
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
    </main>
  );
}
