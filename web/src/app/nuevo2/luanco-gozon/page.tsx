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
 * NUEVO2 — Luanco (Gozón).
 * Texto: CURSOR_TRANSFERENCIA_NUEVO2_SOTO_SALINAS_LUANCO_MUROS_PENDIENTE_2026-09-25.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Luanco está en la costa central de Asturias y es la capital de Gozón, un concejo que se extiende mucho más allá de la villa. Esa diferencia importa: esta página describe la experiencia de vivir en Luanco, donde casas, comercios, servicios, puerto y playa se concentran en un espacio relativamente pequeño. No describe automáticamente la vida en una vivienda rural de Gozón ni junto a cualquiera de las otras playas del concejo.",
  "La villa ocupa una pequeña ensenada abierta al Cantábrico. El puerto queda integrado en el núcleo y, a su lado, el frente marítimo enlaza con la playa urbana y con calles donde siguen estando buena parte de los servicios cotidianos. Esa proximidad permite algo bastante concreto: una mañana puede encadenar compra, farmacia, café, biblioteca, puerto y paseo junto al mar sin que cada cosa exija un desplazamiento en coche. El centro de salud, varias farmacias, la biblioteca y otros servicios están en la propia villa.",
  "Fuera de Luanco cambia la escala. Gozón continúa por una costa y un interior más dispersos, con otras playas y núcleos donde el coche adquiere más peso. Elegir «Gozón» y elegir «Luanco» no garantiza, por tanto, la misma vida cotidiana.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Una mañana en Luanco no tiene por qué organizarse alrededor del coche.",
  "Dentro de la villa hay centro de salud con Punto de Atención Continuada, es decir, atención sanitaria primaria que se prolonga más allá de la consulta ordinaria; también dispone de fisioterapia y odontología. Hay varias farmacias, servicios sociales y biblioteca municipal. Para una parte importante de la vida básica no hace falta salir a otra localidad.",
  "Eso importa porque esos servicios comparten una escala pequeña con el mar. Se puede salir a hacer un recado, pasar por una farmacia o sentarse a tomar algo y continuar hacia el puerto o la playa sin transformar el paseo en una excursión. El agua no aparece después de abandonar el pueblo: está metida en él.",
  "La biblioteca está en Parque Zapardel, dentro de Luanco. Y hay otra posibilidad poco habitual para un núcleo de este tamaño: el Museo Marítimo de Asturias. No es simplemente un museo que casualmente está aquí. Explica la relación histórica de Luanco con el mar mediante pesca tradicional, carpintería de ribera —la construcción artesanal de embarcaciones de madera—, navegación y biología marina, además de conservar archivo y cartografía. En un día en que el tiempo no invita a estar horas fuera, permite continuar esa relación con el mar bajo techo.",
  "Así, tener una mañana libre no significa únicamente «ir a la playa». Puede significar hacer una compra, caminar hasta el puerto, seguir junto al agua, entrar en la biblioteca o pasar un rato en el museo. Esa mezcla de vida práctica y vida marítima dentro de la misma villa es una de las características más claras de Luanco.",
  "Hay, sin embargo, un límite importante. Luanco tiene centro de salud; no tiene hospital. Para atención hospitalaria hay que salir de la villa. El Hospital de Jove, en Gijón, aparece aproximadamente a 14 km y unos 15 minutos; el Hospital Universitario San Agustín, en Avilés, a unos 17 km y alrededor de 20 minutos.",
  "El aeropuerto de Asturias queda aproximadamente a 25 km y unos 20 minutos en coche. Para la rutina local se puede reducir bastante el uso del coche si se vive bien situado dentro de Luanco; para hospital, aeropuerto y buena parte de lo que ofrece el resto de Gozón, vuelve a ser necesario.",
] as const;

const CLIMA_NUEVO2 = [
  "El traslado desde Mallorca se nota pronto en la forma de organizar el día. El verano es mucho más fresco y la lluvia, la humedad y los cielos cubiertos tienen bastante más presencia durante el año.",
  "Las referencias climáticas utilizadas para esta parte de la costa asturiana rondan las 1.850 horas de sol anuales, unos 145 días de lluvia y una temperatura media estival próxima a 19 °C. Son valores de referencia territorial, no mediciones exclusivas del centro de Luanco.",
  "La consecuencia es sencilla. En julio o agosto es mucho menos frecuente vivir pendiente de un calor intenso y persistente, pero tampoco se puede dar por supuesto que una semana estival será una sucesión de días secos de playa. El paseo junto al mar sigue estando ahí cuando el cielo cambia; el baño depende mucho más del día concreto.",
  "En una vivienda próxima a la costa, además, humedad, viento, orientación y exposición al Cantábrico importan durante todo el año. Una terraza o unas vistas abiertas aportan una relación directa con el mar, pero hacen especialmente importante comprobar aislamiento, ventanas y estado exterior del edificio.",
] as const;

const VIVIR_NUEVO2 = [
  "La diferencia con Mallorca no es solo meteorológica. En Luanco cambia también la escala a la que pueden convivir mar y vida práctica.",
  "No hace falta elegir entre pasar la mañana junto al agua o resolver un recado sencillo. Puerto, playa, farmacia, centro de salud, biblioteca y calles comerciales pertenecen a la misma villa. Eso permite que el mar aparezca entre actividades ordinarias, no únicamente al final de un desplazamiento.",
  "La otra cara es la escala. Luanco resuelve bastante para su tamaño, pero no ofrece las posibilidades de una ciudad. Para un hospital hay que salir. Lo mismo ocurre con determinadas compras, servicios o actividades que requieren desplazarse hacia Avilés o Gijón.",
  "El aeropuerto está a unos veinte minutos en coche. Para viajar a Mallorca hay que comprobar la programación concreta: la cercanía al aeropuerto no equivale a disponer de una conexión permanente con Palma durante todo el año.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "El puerto ayuda a entender por qué Luanco tiene la forma y la identidad que conserva.",
  "Durante siglos, el mar fue trabajo antes de ser paseo. La flota local estuvo vinculada primero a la pesca de la ballena y después a especies como bonito, sardina, caballa, rape y marisco. También hubo industria conservera. Esa actividad explica por qué el puerto no es un elemento añadido a una localidad de playa: está en el origen de la villa marinera que existe hoy.",
  "La construcción de barcos dejó otra huella. En el entorno de Aramar, una pequeña ensenada próxima a Luanco, todavía quedan restos de antiguos astilleros: naves, gradas donde se construían y botaban embarcaciones y estructuras de protección. Allí se entiende físicamente qué significa la carpintería de ribera que después aparece explicada dentro del Museo Marítimo.",
  "En el centro histórico queda también la Torre del Reloj, un edificio público del siglo XVIII que tuvo usos tan distintos como vigilancia, cárcel y almacén. Y junto al mar está la iglesia de Santa María, también del siglo XVIII. Su posición no es casual dentro de esta historia: el retablo mayor fue pagado por el antiguo gremio de mareantes, la organización de quienes vivían profesionalmente del mar.",
  "La relación marítima no quedó encerrada en esos edificios. En 1948 se fundó aquí el Museo Marítimo de Asturias, que conserva embarcaciones, artes de pesca, cartas náuticas y materiales sobre navegación y fauna marina. Lo que hoy se ve como puerto, museo y paseo pertenece así a una misma historia: pesca, construcción naval y vida junto al Cantábrico.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "En Luanco hay que distinguir las playas y los paseos que están realmente incorporados a la villa de la costa mucho más extensa de Gozón.",
  "La playa urbana principal es la playa de Luanco, también llamada Santa Marina. Es un arenal de unos 280 metros situado dentro del propio núcleo, con acceso rodado, duchas, aseos y servicios de salvamento en temporada. No hace falta conducir hasta ella si se vive en el centro: forma parte del frente marítimo del pueblo.",
  "En uno de sus extremos está la iglesia de Santa María, prácticamente al borde del Cantábrico. No aparece aquí solo por su valor histórico: funciona también como una referencia física del paseo. Se puede recorrer el frente marítimo con la playa a un lado y llegar hasta la iglesia sin abandonar la villa.",
  "Cerca del puerto está La Ribera, otra playa urbana. Su función actual no es exactamente la misma: la información turística oficial señala que apenas se utiliza para el baño. Su interés está más en cómo completa el frente marítimo junto al casco antiguo y el puerto que en ofrecer una segunda playa equivalente a Santa Marina.",
  "El paseo puede prolongarse. Desde el entorno de la playa parten escaleras hacia una senda costera; cerca del comienzo hay un pequeño parque sobre el mar y, si se decide continuar, la ruta puede llegar hasta Bañugues, otra localidad de Gozón situada aproximadamente a cuatro kilómetros. Ahí cambia la función: deja de ser simplemente dar una vuelta por Luanco y se convierte en una caminata costera deliberada.",
  "En otra dirección aparece Aramar, la ensenada donde se conservan vestigios de los antiguos astilleros. Llegar allí permite pasar del Luanco actual a un paisaje que todavía muestra dónde se construían y botaban barcos durante los siglos XIX y XX.",
  "Más allá están otras playas y paisajes del concejo, pero ya no deben confundirse con tenerlos delante de casa en Luanco. Vivir en la villa permite incorporar puerto, paseo y playa urbana al día; explorar el resto de la costa de Gozón significa ampliar esa vida mediante salidas específicas y, en muchos casos, coche.",
] as const;

const CASA_NUEVO2 = [
  "Buscar vivienda aquí exige empezar por una distinción: el dato disponible es de Gozón, no una medición exclusiva del núcleo de Luanco.",
  "El último precio publicado disponible para Gozón es de 2.379 €/m² en mayo de 2026. No hay dato para julio-agosto, de modo que no corresponde actualizarlo por extrapolación ni presentarlo como si describiera con precisión el mercado actual de cada calle de Luanco.",
  "Esto importa especialmente porque Gozón contiene realidades residenciales distintas. Una vivienda dentro de Luanco puede permitir hacer andando compra, farmacia, playa, puerto, biblioteca y centro de salud. Una casa rural del mismo concejo o una vivienda próxima a otra playa puede ofrecer más espacio y naturaleza, pero perder esa concentración. Compartir municipio no significa comprar la misma vida.",
] as const;

const CASA_PRECIO_INTRO =
  "Referencia disponible — Gozón: 2.379 €/m² · mayo de 2026";

const CASA_BANDAS_NOTA = [
  "Las cifras son referencias comparativas construidas a partir del último precio municipal disponible. Utilizan aproximadamente 65 m² para dos dormitorios y 90 m² para tres. Las bandas A y B expresan relación geográfica con la costa; no garantizan que una vivienda esté en el centro de Luanco, tenga vistas, resulte cómoda andando ni se encuentre realmente a esos precios.",
  "Aquí esa cautela es especialmente importante: 2.379 €/m² describe Gozón y no permite afirmar por sí solo cuánto cuesta una vivienda concreta que reúna centro de Luanco, playa andando, ascensor, terraza o vistas.",
] as const;

const CASA_ADVERTENCIA_MICROZONA = [
  "En Luanco, una diferencia pequeña sobre el mapa puede cambiar bastante la vida de la casa.",
  "Si el objetivo es aprovechar la concentración propia de la villa, conviene salir del portal y hacer el recorrido real hasta compra, farmacia, centro de salud, puerto y playa. Una vivienda puede estar en Gozón y cerca del Cantábrico, pero exigir coche para casi todo; otra, dentro de Luanco, puede permitir resolver buena parte de la mañana andando.",
  "También hay que separar ver el mar de vivir cómodamente junto al mar. Una vivienda alta o expuesta puede ofrecer vistas, pero orientación, viento, aislamiento, humedad, ascensor y facilidad de acceso determinan cómo funciona durante todo el año.",
  "El aparcamiento merece comprobarse fuera de una visita rápida. Luanco recibe más presión en verano, y una calle que resulta sencilla en temporada baja puede funcionar de otra manera cuando aumenta la ocupación.",
] as const;

const CASA_QUE_CONVIENE_REVISAR = [
  "Antes de estudiar demasiado el interior del piso, conviene probar el exterior.",
  "Salir andando hasta una compra cotidiana y una farmacia. Continuar hasta el puerto y la playa. Hacer el camino de vuelta. Pasar por el centro de salud. La pregunta es si esa secuencia que distingue a Luanco existe realmente desde esa vivienda o solo desde una parte de la villa.",
  "Dentro importan ascensor y barreras, orientación, luz, aislamiento, humedad, ventanas, estado del edificio, terraza y aparcamiento. Si las vistas forman parte importante del precio, hay que comprobar desde qué habitaciones existen y qué puede interrumpirlas.",
  "Después conviene repetir la visita en un momento de mayor ocupación estival. La posición de la casa no cambia, pero sí pueden hacerlo tráfico, aparcamiento y movimiento en las calles próximas al mar.",
] as const;

const CASA_MERCADO_REVENTA = [
  "El último dato disponible es municipal y además corresponde a mayo, no a agosto. Por eso no permite deducir una evolución precisa del mercado de Luanco ni anticipar qué hará el precio.",
  "En una futura venta pueden resultar especialmente útiles las características que mantienen cómoda una vivienda con el paso del tiempo: ascensor, pocas barreras, buen aislamiento, luz, acceso sencillo, aparcamiento razonable y servicios que realmente puedan alcanzarse a pie.",
  "En Luanco hay además una diferencia que conviene proteger al comprar: una vivienda que permita unir vida cotidiana y mar andando ofrece algo distinto de una casa situada en otra parte de Gozón. Esa diferencia debe comprobarse portal por portal, no suponerse a partir del nombre del concejo.",
] as const;

const CASA_LEYENDA_COMPACTA =
  "A: ≤5 min de la costa · B: 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Estimaciones comparativas; conviene contrastarlas con la oferta del momento.";

const CASA_FILA_PRECIOS = {
  municipio: "Luanco (Gozón)",
  a2: "201.026 €",
  a3: "278.343 €",
  b2: "162.367 €",
  b3: "224.816 €",
  m2: "2.379 €/m²",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Puede encajar si se busca una villa pequeña donde el mar y una parte importante de la vida diaria estén realmente mezclados.",
  "En Luanco no hace falta salir del pueblo para encontrar centro de salud con atención continuada, farmacias, biblioteca o servicios sociales. Tampoco hace falta salir para llegar al puerto o a la playa urbana. Esa proximidad permite una mañana que pase de un recado al paseo marítimo y del puerto a un café sin depender continuamente del coche.",
  "La relación con el mar tiene además más capas que el baño. Está el puerto actual, la historia pesquera, los restos de construcción naval en Aramar y un Museo Marítimo que explica pesca, navegación, carpintería de ribera y naturaleza marina. El mar aparece como paisaje, paseo, historia y actividad cultural.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Puede encajar peor si se quiere disponer de hospital dentro de la propia localidad. Luanco tiene atención primaria y continuada, pero para hospital hay que conducir hacia Gijón o Avilés.",
  "Tampoco debe confundirse la villa con todo Gozón. Las otras playas, el paisaje rural y las viviendas más dispersas del concejo pueden ampliar mucho las posibilidades de costa y naturaleza, pero ya no conservan necesariamente la facilidad de hacer a pie la vida descrita aquí.",
  "El verano añade otro contraste: una villa costera que permite disfrutar del mar durante todo el año recibe también más visitantes en temporada. Aparcamiento y movimiento alrededor del centro y de las playas deben comprobarse en ese momento, no deducirse de una visita tranquila fuera de temporada.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "La prueba más útil empieza dejando el coche junto a una vivienda candidata.",
  "Desde allí, hacer una mañana normal: ir hasta una tienda o una farmacia, pasar por el centro de salud y continuar hacia el puerto. Después recorrer el frente marítimo hasta la playa de Luanco y la iglesia de Santa María. Así se comprueba si servicios y mar pertenecen de verdad a la misma vida desde esa dirección concreta.",
  "Otro día puede prolongarse el paseo. Desde el extremo de la playa, subir por las escaleras que dan acceso a la senda costera y avanzar un tramo hacia Bañugues. Eso permite distinguir entre el paseo cotidiano dentro de Luanco y una caminata más larga por la costa.",
  "También conviene acercarse a Aramar para ver los restos de los antiguos astilleros y entender que la relación de Luanco con el mar no empezó con la playa turística.",
  "Después hay que probar lo que queda fuera: conducir hasta uno de los hospitales próximos y comprobar el trayecto hacia el aeropuerto.",
  "Al terminar, debería quedar resuelta una pregunta concreta: si la vivienda permite realmente aprovechar lo que distingue a Luanco —hacer vida básica a pie y encontrarse con puerto, playa e historia marítima dentro de esa misma escala— o si, pese a llevar una dirección de Gozón, obliga a vivir de otra manera.",
] as const;

function FilaCasaNuevo2({
  etiqueta,
  cuerpo,
}: {
  etiqueta: string;
  cuerpo: string | readonly string[];
}) {
  const paragrafos = typeof cuerpo === "string" ? [cuerpo] : cuerpo;
  return (
    <div className="border-b border-[var(--linea)] py-3 last:border-b-0">
      <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--tinta-suave)]">
        {etiqueta}
      </p>
      {paragrafos.map((p) => (
        <p key={p.slice(0, 48)} className="mt-1.5 text-[15px] leading-relaxed text-[var(--tinta)]">
          {p}
        </p>
      ))}
    </div>
  );
}

export default function Nuevo2LuancoGozonPage() {
  const ficha = municipioPorSlug("luanco-gozon");
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
        titulo="Luanco (Gozón)"
      />

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
          <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
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
        {DE_DONDE_VIENE_NUEVO2.map((p) => (
          <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Mar, río y camino" varianteTarjetaV1>
        {MAR_RIO_CAMINO_NUEVO2.map((p) => (
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
          <p className="mt-1 max-w-2xl text-[15px] leading-relaxed text-[var(--tinta)]">
            {CASA_PRECIO_INTRO}
          </p>
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
          {CASA_BANDAS_NOTA.map((p) => (
            <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--tinta)]">
              {p}
            </p>
          ))}
        </div>

        <EnlaceIdealista ambito="municipio" slug={ficha.slug} nombre={ficha.municipio} />

        <FilaCasaNuevo2 etiqueta="Advertencia de microzona" cuerpo={CASA_ADVERTENCIA_MICROZONA} />
        <FilaCasaNuevo2 etiqueta="Qué conviene revisar" cuerpo={CASA_QUE_CONVIENE_REVISAR} />
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
    </main>
  );
}
