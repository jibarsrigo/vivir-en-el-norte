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
 * NUEVO2 — montaje local solo para Gijón (localhost / visor Cursor).
 * Aislado de current y V1. No sustituye ninguna página publicada.
 * Texto: CURSOR_NUEVO2_GIJON_CORRECCION_INTEGRAL_POST_AUDITORIA_2026-09-25.txt
 */

const RESUMEN_ZONA_NUEVO2_GIJON =
  "Asturias Centro reúne formas muy distintas de vivir junto al Cantábrico: desde el puerto en ladera de Cudillero y los núcleos del estuario del Nalón hasta las villas marineras de Luanco y Candás, la playa de Salinas y la escala urbana de Gijón. Avilés y Oviedo completan un territorio en el que costa, ciudades y aeropuerto quedan relativamente próximos, aunque la vida cotidiana cambia mucho según el lugar elegido.";

const COMO_SE_VIVE_NUEVO2 = [
  "Gijón reúne unos doscientos setenta mil habitantes: San Lorenzo con el paseo del Muro, Cimavilla —el barrio antiguo sobre el cerro—, Poniente, parques, universidad, cultura y comercio. Es una ciudad de mar completa y abierta, no una villa costera ampliada. El Cantábrico no queda al final de una excursión: acompaña el paseo urbano, la compra y la tarde de cualquier martes.",
  "Un martes de noviembre se puede desayunar fuera, hacer la compra, caminar por San Lorenzo aunque no sea día de baño, entrar en una biblioteca o un Centro Municipal Integrado, ir al cine, al teatro, a una exposición o a una piscina y cenar fuera sin que la ciudad dependa de la temporada turística. La red de Centros Municipales Integrados y bibliotecas ayuda a repartir esa vida cotidiana por los barrios. En las zonas centrales bien elegidas, buena parte de esos recorridos puede hacerse andando o en transporte público.",
  "La sanidad hospitalaria forma parte del propio sistema urbano, pero no conviene resumirla como una sola chincheta. El Hospital Universitario de Cabueñes queda en el sector oriental y el Hospital de Jove en el oeste, de modo que la proximidad real depende del barrio y del servicio. Ferrocarril y autobuses amplían las conexiones. Para el aeropuerto de Asturias hay que salir de la ciudad; el trayecto en coche ronda aproximadamente la media hora según origen y tráfico. La conexión directa con Palma depende de la programación de cada temporada y conviene comprobarla para las fechas concretas del viaje.",
  "En verano San Lorenzo y Poniente reciben más afluencia: toallas, paseo lleno, más tráfico y mayor presión sobre el aparcamiento. El resto del año Gijón mantiene ritmo de ciudad: familias, gente que trabaja aquí, estudiantes y quienes eligieron una urbe junto al mar frente a una villa pequeña. Las estaciones cambian la densidad de la playa más que el funcionamiento urbano. En el sector occidental, hacia Xivares y Aboño, la presencia industrial y energética forma parte también del paisaje y del contexto ambiental de esa parte del municipio.",
  "La vida social es de ciudad —barrios, asociaciones y calle—, no de una sola plaza. Se oye asturiano en la vida cotidiana, pero el castellano basta para desenvolverse. Esa escala permite tener actividad durante todo el año, aunque a cambio aparecen tráfico, densidad y ruido en determinadas zonas que no forman parte de la experiencia de una villa pequeña.",
  "La dirección concreta cambia mucho la rutina. Cerca de San Lorenzo pueden coincidir playa, paseo, comercio, cafés y servicios a pie; en Somió y otras zonas residenciales exteriores aparecen casas bajas, más espacio o más tranquilidad, pero el coche gana peso. Gijón no ofrece una única manera de vivir junto al mar: barrio, calle y vivienda determinan cuánto de la ciudad y de la costa entra realmente en el día a día.",
] as const;

const CLIMA_NUEVO2 = [
  "Frente a Mallorca, Gijón ofrece veranos mucho más frescos y un año bastante más húmedo y con menos sol. Las normales climatológicas de AEMET para Gijón sitúan la referencia histórica en torno a 1.720 horas de sol al año, unos 34 días despejados, cerca de 970 milímetros de precipitación y unos 121 días anuales con al menos 1 mm de lluvia. Más que un invierno extremo, el cambio cotidiano está en la luz, la frecuencia de la lluvia, la humedad y el cielo cubierto.",
  "La temperatura media de agosto ronda los 19,7 °C en esa serie histórica. El agua de las playas urbanas sigue siendo claramente más fresca que en Baleares y muchos días la orilla sirve más para caminar que para bañarse. En una vivienda muy expuesta al mar conviene contar además con salitre y viento y revisar bien aislamiento, ventilación y humedad.",
] as const;

const VIVIR_NUEVO2 = [
  "Mudarse desde Mallorca a Gijón cambia menos la posibilidad de resolver la semana que la forma de hacerlo: aquí playa urbana, comercio, sanidad, cultura, deporte y transporte pueden formar parte de una misma ciudad, mientras el cambio más visible está en el clima, la escala urbana y la relación cotidiana con el Cantábrico. El verano es mucho más suave, con menos sol y más humedad, pero la ciudad no depende de la temporada de playa para mantener actividad.",
  "También cambia la relación entre vivienda, mar y coche. En barrios centrales puede resolverse buena parte de la semana andando o en transporte público y San Lorenzo puede entrar en la rutina sin preparar una salida. En Somió y otras zonas exteriores se gana otra escala residencial, pero vuelve a pesar más el coche. Para mantener el vínculo con Mallorca hay que contar además con el desplazamiento al aeropuerto de Asturias y comprobar la programación real de Palma en las fechas de cada viaje.",
  "La estacionalidad se ve sobre todo en la ocupación del frente marítimo. Agosto puede llenar San Lorenzo y Poniente; noviembre no vacía Gijón. Para quien viene de una isla muy turística, esa continuidad importa: cambia el tiempo de playa, pero no desaparece la ciudad.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Cimavilla —el barrio antiguo sobre el cerro de Santa Catalina— y el carácter portuario ayudan a entender el origen marítimo de Gijón. La pequeña península queda entre San Lorenzo y el puerto, con calles estrechas y subida hacia el cerro. Ese núcleo histórico sigue dentro de la ciudad cotidiana: no es una pieza separada del Gijón actual.",
  "La ciudad creció mucho más allá de Cimavilla. Desde el siglo XIX, la industrialización y el desarrollo portuario cambiaron su escala y extendieron la ciudad hacia nuevos barrios y áreas de trabajo. El crecimiento del puerto de El Musel y la actividad industrial del oeste forman parte de ese proceso: Gijón fue dejando de ser una población marítima concentrada alrededor de su núcleo antiguo para convertirse en una ciudad portuaria e industrial mucho más extensa.",
  "San Lorenzo y el Muro muestran otra parte de esa transformación: el frente marítimo quedó incorporado a la ciudad y a su espacio público, mientras Poniente añadió otro frente urbano al oeste. El crecimiento posterior produjo piezas residenciales muy distintas, desde el centro y el ensanche hasta áreas de casas bajas como Somió.",
  "Lo que queda para quien llega a vivir es esa superposición: playa urbana, barrio antiguo, ensanche, puerto, huella industrial y zonas residenciales de otra escala dentro del mismo municipio. La historia explica por qué Gijón reúne hoy escenas urbanas tan distintas.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "San Lorenzo, el paseo del Muro y Cimavilla pueden formar parte de una tarde de diario desde buena parte de la ciudad central. San Lorenzo ocupa el frente oriental del centro urbano: el baño depende del Cantábrico y de la marea, pero la relación con la orilla continúa cuando no apetece entrar al agua. Poniente amplía la playa urbana hacia el oeste, con otro ritmo de paseo y baño.",
  "El recorrido puede empezar entre edificios y cafés, seguir el Muro y llegar al Piles, el río que desemboca en el extremo oriental de San Lorenzo. Hasta ahí domina el paseo urbano; a partir del Piles la costa puede prolongarse hacia parques y el sector oriental. En Gijón, un paseo urbano puede ir convirtiéndose poco a poco en una caminata costera sin necesidad de empezar el día cogiendo el coche.",
  "La Senda del Cervigón prolonga esa salida hacia el este, pero ya no debe imaginarse como una simple continuación llana del Muro: el recorrido gana longitud y aparecen tramos de costa con subidas y bajadas. El cerro de Santa Catalina ofrece una alternativa más corta y central, aunque la subida desde Cimavilla introduce pendiente. El Parque de Isabel la Católica puede incorporarse con facilidad a un paseo del sector oriental; el Jardín Botánico Atlántico es más bien una salida específica dentro del municipio y dispone de conexión en autobús.",
  "Cuando apetece cambiar de escala, Candás y Luanco ofrecen villas marineras cercanas, pero ya suponen salir de Gijón. Esa salida es opcional: para incorporar playa, paseo y mar a una semana normal no hace falta abandonar el municipio.",
] as const;

const CASA_NUEVO2 = [
  "Hay pisos de ciudad, obra nueva y fibra; en Somió aparecen también chalés y casas bajas. Junto a San Lorenzo hay que contar con precio, afluencia y salitre, además de ruido, orientación, luz y exposición. En el centro y los barrios consolidados pesan también ascensor, accesibilidad, aislamiento y distancia real a los servicios. En Somió y otras zonas exteriores cambian el acceso y la relación con el coche. En Gijón, buscar casa empieza por elegir barrio y calle, no por aplicar una media municipal.",
  "La ubicación debe comprobarse como una rutina, no solo como una distancia al mar. Una vivienda próxima a San Lorenzo puede poner playa, paseo, comercio y cafés a pie; otra dirección puede acercar más a Cabueñes, Jove, una salida por carretera o una zona residencial tranquila. Playa, hospital, aparcamiento, transporte y servicios no tienen por qué quedar todos dentro del mismo radio cómodo. Conviene recorrer desde la puerta los trayectos que realmente se harán cada semana.",
  "Como referencia de oferta, Gijón se situaba en 2.696 €/m² en agosto de 2026. Idealista señalaba para ese mismo mes una variación interanual del +7,1 %, pero también indica un cambio de metodología desde julio de 2026, por lo que esa evolución debe leerse con cautela y no como una previsión. La media municipal oculta diferencias importantes: Centro rondaba 3.371 €/m², Este 3.137, Somió-Cabueñes 2.953, Oeste 2.021 y el periurbano 1.878 €/m². Son referencias de oferta, no el precio exacto de una vivienda concreta, y explican por qué primera línea, Somió y una zona periférica no deben tratarse como el mismo mercado.",
  "Gijón tiene una base residencial permanente y un mercado más amplio y diverso que una villa pequeña, pero eso no garantiza cómo ni cuándo se venderá una vivienda concreta. Para una futura venta, una vivienda exterior, accesible, con ascensor cuando sea necesario y bien conectada con servicios puede interesar a un público más amplio que una propiedad muy particular o incómoda para la vida diaria. Aquí la microzona forma parte de la vivienda tanto como sus metros.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "Centro, La Arena/San Lorenzo, Somió-Cabueñes, Oeste y las áreas periurbanas pueden cambiar mucho el precio, la relación con la playa, el aparcamiento y la dependencia del coche. La media municipal no sustituye la comprobación de barrio y calle.";

const CASA_QUE_CONVIENE_REVISAR =
  "Ascensor o acceso sin barreras, luz y orientación, aislamiento, ruido, salitre y exposición si está cerca del mar, aparcamiento cuando sea necesario y recorrido real a compra, transporte y servicios.";

const CASA_MERCADO_REVENTA =
  "Mercado residencial amplio y permanente, pero muy desigual por barrios. Una vivienda exterior, accesible y bien conectada con servicios puede ampliar el público potencial de una futura venta; la subida reciente del precio no debe leerse como una previsión.";

const CASA_LEYENDA_COMPACTA =
  "A: ≤5 min de la costa · B: 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Estimaciones comparativas; conviene contrastarlas con la oferta del momento.";

const CASA_FILA_PRECIOS = {
  municipio: "Gijón",
  a2: "227.812 €",
  a3: "315.432 €",
  b2: "184.002 €",
  b3: "254.772 €",
  m2: "2.696 €/m²",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Gijón encaja si atrae la idea de vivir en una ciudad completa con el Cantábrico incorporado a la semana. En barrios bien elegidos, playa, paseo, compra, cultura, deporte, transporte y servicios pueden convivir sin depender constantemente del coche. San Lorenzo no actúa solo como paisaje: puede entrar en la rutina diaria aunque ese día no sea de baño.",
  "También encaja si se valora poder elegir entre experiencias residenciales muy distintas dentro del mismo municipio. Cerca del frente urbano se gana inmediatez con playa, paseo y servicios, aceptando más densidad, tráfico, ruido y precios altos; en Somió y otras áreas exteriores puede haber más espacio y tranquilidad, pero cambia la relación peatonal con la ciudad. Frente a Mallorca, el verano es mucho más fresco, pero a cambio hay menos sol y mucha más presencia de lluvia y humedad.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Gijón encaja peor si se busca la escala, el silencio y la lectura sencilla de una villa pequeña. Aquí hay tráfico, barrios muy diferentes, zonas de mayor densidad y un mercado de vivienda en el que la media municipal dice poco sobre una dirección concreta. Vivir “en Gijón” no garantiza por sí solo tener playa, hospital, aparcamiento y todos los servicios dentro del mismo radio cómodo.",
  "Tampoco encaja igual si cuesta aceptar el cambio de luz y clima respecto a Mallorca o si se quiere vivir en una zona residencial exterior y tranquila sin asumir que el coche puede ganar peso. La ciudad permite resolver mucho dentro de su propio tejido, pero primera línea, barrios interiores y Somió responden de manera distinta a la misma idea de vivir junto al Cantábrico.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene probar Gijón como ciudad y no solo como paseo marítimo. Desde una vivienda candidata, recorrer a pie la compra, una parada de transporte y los servicios que realmente se usarían; después hacer el mismo ejercicio hacia San Lorenzo si el mar forma parte de la razón para mudarse. Esa prueba muestra si la relación entre playa y ciudad que promete el mapa existe de verdad desde esa dirección.",
  "También merece la pena comparar al menos dos zonas con lógicas distintas y hacerlo fuera de un día perfecto de verano. Hay que comprobar ruido, tráfico, aparcamiento, luz, exposición al mar y cuánto coche aparece en la rutina, y situar Cabueñes y Jove respecto a la vivienda sin asumir una proximidad idéntica para toda la ciudad. En Gijón, recorrer barrios explica más que comparar solo metros cuadrados y distancia a la playa.",
] as const;

/** Inspección visual: paseo del Muro junto a San Lorenzo (no arenal). */
const FOTO_COMO_SAN_LORENZO = {
  src: "/fotos/asturias-centro/gijon-san-lorenzo.jpg",
  pie: "Paseo del Muro, San Lorenzo",
} as const;

/** Inspección visual: fachada residencial / calle cotidiana. */
const FOTO_COMO_CALLE = {
  src: "/fotos/_candidatas/asturias-centro/gijon/vivir-calle.jpg",
  pie: "Calle Santa Ana, Gijón",
} as const;

/** Inspección visual: Cimavilla y cerro de Santa Catalina. */
const FOTO_HISTORIA_CIMAVILLA = {
  src: "/fotos/asturias-centro/gijon-cimavilla.jpg",
  pie: "Cimavilla, Gijón",
} as const;

/** Inspección visual: Paseo del Muro / frente marítimo urbano. */
const FOTO_HISTORIA_PASEO = {
  src: "/fotos/asturias-centro/gijon-paseo.jpg",
  pie: "Paseo del Muro, Gijón",
} as const;

/** Inspección visual: La Escalerona / San Lorenzo; distinta de la del Muro en Cómo. */
const FOTO_MAR_ESCALERONA = {
  src: "/fotos/_candidatas/asturias-centro/gijon/mar-escalerona.jpg",
  pie: "La Escalerona, San Lorenzo",
} as const;

/** Inspección visual: playa urbana con El Musel al fondo = Poniente. */
const FOTO_MAR_PONIENTE = {
  src: "/fotos/asturias-centro/gijon-poniente.jpg",
  pie: "Playa de Poniente, Gijón",
} as const;

/** Inspección visual: costa oriental / acantilado hacia la ciudad. */
const FOTO_MAR_CERVIGON = {
  src: "/fotos/asturias-centro/gijon-cervigon.jpg",
  pie: "Senda del Cervigón, Gijón",
} as const;

/** Inspección visual: villa / tejido residencial de Somió. */
const FOTO_CASA_SOMIO = {
  src: "/fotos/asturias-centro/gijon-somio.jpg",
  pie: "Somió, Gijón",
} as const;

/** Inspección visual: calle y tipología urbana consolidada. */
const FOTO_CASA_URBANA = {
  src: "/fotos/_candidatas/asturias-centro/gijon/casa-cimavilla-calle.jpg",
  pie: "Calle en Cimavilla",
} as const;

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

/** Solo tipografía: envuelve un fragmento literal ya presente en `texto`. */
function ConNegrita({ texto, fragmento }: { texto: string; fragmento: string }) {
  const i = texto.indexOf(fragmento);
  if (i === -1) {
    throw new Error(`Negrita: fragmento no encontrado — ${fragmento.slice(0, 48)}`);
  }
  return (
    <>
      {texto.slice(0, i)}
      <strong>{fragmento}</strong>
      {texto.slice(i + fragmento.length)}
    </>
  );
}

export default function Nuevo2GijonPage() {
  const ficha = municipioPorSlug("gijon");
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

      <BloqueZonaFicha zonaId={z.id} nombreZona={z.zona} resumen={RESUMEN_ZONA_NUEVO2_GIJON} />

      <MapaMunicipioFicha ficha={ficha} capasPortada={Boolean(ficha.mapa)} />

      <DesplegableNuevo2 titulo="Cómo se vive" varianteTarjetaV1>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita
            texto={COMO_SE_VIVE_NUEVO2[0]}
            fragmento="El Cantábrico no queda al final de una excursión"
          />
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{COMO_SE_VIVE_NUEVO2[1]}</p>
        <Foto src={FOTO_COMO_SAN_LORENZO.src} pie={FOTO_COMO_SAN_LORENZO.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{COMO_SE_VIVE_NUEVO2[2]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{COMO_SE_VIVE_NUEVO2[3]}</p>
        <Foto src={FOTO_COMO_CALLE.src} pie={FOTO_COMO_CALLE.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{COMO_SE_VIVE_NUEVO2[4]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita
            texto={COMO_SE_VIVE_NUEVO2[5]}
            fragmento="barrio, calle y vivienda determinan cuánto de la ciudad y de la costa entra realmente en el día a día"
          />
        </p>
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Frente a Mallorca" varianteTarjetaV1>
        <h3 className="mt-1 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Clima
        </h3>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita
            texto={CLIMA_NUEVO2[0]}
            fragmento="el cambio cotidiano está en la luz, la frecuencia de la lluvia, la humedad y el cielo cubierto"
          />
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{CLIMA_NUEVO2[1]}</p>
        <h3 className="mt-7 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Vivir
        </h3>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{VIVIR_NUEVO2[0]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{VIVIR_NUEVO2[1]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita
            texto={VIVIR_NUEVO2[2]}
            fragmento="Agosto puede llenar San Lorenzo y Poniente; noviembre no vacía Gijón"
          />
        </p>
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="De dónde viene" varianteTarjetaV1>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita
            texto={DE_DONDE_VIENE_NUEVO2[0]}
            fragmento="Ese núcleo histórico sigue dentro de la ciudad cotidiana"
          />
        </p>
        <Foto src={FOTO_HISTORIA_CIMAVILLA.src} pie={FOTO_HISTORIA_CIMAVILLA.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{DE_DONDE_VIENE_NUEVO2[1]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{DE_DONDE_VIENE_NUEVO2[2]}</p>
        <Foto src={FOTO_HISTORIA_PASEO.src} pie={FOTO_HISTORIA_PASEO.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita
            texto={DE_DONDE_VIENE_NUEVO2[3]}
            fragmento="La historia explica por qué Gijón reúne hoy escenas urbanas tan distintas"
          />
        </p>
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Mar, río y camino" varianteTarjetaV1>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[0]}</p>
        <Foto src={FOTO_MAR_PONIENTE.src} pie={FOTO_MAR_PONIENTE.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita
            texto={MAR_RIO_CAMINO_NUEVO2[1]}
            fragmento="un paseo urbano puede ir convirtiéndose poco a poco en una caminata costera"
          />
        </p>
        <Foto src={FOTO_MAR_ESCALERONA.src} pie={FOTO_MAR_ESCALERONA.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[2]}</p>
        <Foto src={FOTO_MAR_CERVIGON.src} pie={FOTO_MAR_CERVIGON.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita texto={MAR_RIO_CAMINO_NUEVO2[3]} fragmento="Esa salida es opcional" />
        </p>
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Casa" varianteTarjetaV1>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita
            texto={CASA_NUEVO2[0]}
            fragmento="buscar casa empieza por elegir barrio y calle"
          />
        </p>
        <Foto src={FOTO_CASA_URBANA.src} pie={FOTO_CASA_URBANA.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{CASA_NUEVO2[1]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{CASA_NUEVO2[2]}</p>
        <Foto src={FOTO_CASA_SOMIO.src} pie={FOTO_CASA_SOMIO.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita
            texto={CASA_NUEVO2[3]}
            fragmento="la microzona forma parte de la vivienda tanto como sus metros"
          />
        </p>

        <EnlaceIdealista ambito="municipio" slug={ficha.slug} nombre={ficha.municipio} />

        <div className="mt-6 pt-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--tinta-suave)]">
            Precio y bandas
          </p>
          <p className="mt-1 text-[13px] leading-snug text-[var(--tinta-suave)]">
            Referencia municipal; una vivienda concreta puede separarse mucho de la media según
            barrio y calle.
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
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{ENCAJA_SI_NUEVO2[0]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{ENCAJA_SI_NUEVO2[1]}</p>
        <h3 className="mt-7 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          No encaja si
        </h3>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{NO_ENCAJA_SI_NUEVO2[0]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{NO_ENCAJA_SI_NUEVO2[1]}</p>
        <h3 className="mt-7 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Qué comprobar
        </h3>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{QUE_COMPROBAR_NUEVO2[0]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{QUE_COMPROBAR_NUEVO2[1]}</p>
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
