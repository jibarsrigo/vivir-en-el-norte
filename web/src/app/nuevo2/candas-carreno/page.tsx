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
 * NUEVO2 — montaje local solo para Candás (Carreño).
 * Aislado de current y V1. No sustituye ninguna página publicada.
 * Texto: CURSOR_NUEVO2_CANDAS_CORRECCION_INTEGRAL_POST_REAUDITORIA_2026-09-25.txt
 */

const RESUMEN_ZONA_NUEVO2 =
  "Asturias Centro reúne formas muy distintas de vivir junto al Cantábrico: desde el puerto en ladera de Cudillero y los núcleos del estuario del Nalón hasta las villas marineras de Luanco y Candás, la playa de Salinas y la escala urbana de Gijón. Avilés y Oviedo completan un territorio en el que costa, ciudades y aeropuerto quedan relativamente próximos, aunque la vida cotidiana cambia mucho según el lugar elegido.";

const COMO_SE_VIVE_NUEVO2 = [
  "Candás es la capital marinera de Carreño: una villa compacta en la que puerto, playa de La Palmera, comercio, centro de salud y buena parte de la vida cotidiana quedan próximos. No tiene la escala de Gijón, pero tampoco obliga a salir de la villa para resolver cada día. La combinación más característica es poder hacer vida de villa junto al mar y usar Gijón como apoyo, no como condición para cada rutina.",
  "Un martes de noviembre se puede comprar, ir a la farmacia o al centro de salud, entrar en la biblioteca o la Casa de Cultura, hacer deporte y terminar la tarde en el Teatro Prendes sin convertir el día en turismo. El teatro mantiene actividad también fuera del verano y está muy cerca del apeadero ferroviario; el Museo Antón añade otra pieza cultural que abre igualmente en temporada de invierno. Eso da a Candás una vida propia que no depende solo de playa, puerto y terrazas.",
  "A pie se resuelve buena parte de la villa. Para una escala mayor de comercio, cultura o servicios, Gijón y Avilés amplían el radio cotidiano. El ferrocarril y los autobuses interurbanos son alternativas reales para determinados desplazamientos, aunque vivir en Carreño no elimina la utilidad del coche para la costa exterior, el medio rural y servicios de mayor escala. El aeropuerto de Asturias queda fuera del concejo y la conexión con Palma debe comprobarse según la programación de las fechas concretas.",
  "La atención primaria está en el propio Centro de Salud de Candás, que atiende a la capital y parte de la zona rural y asume las urgencias del municipio en su ámbito extrahospitalario. Para atención hospitalaria hay que salir de Candás. El mapa sanitario del Principado sitúa Carreño en el distrito Gijón Oeste-Carreño, con el Hospital de Jove como centro de referencia. La distancia y el tiempo reales dependen de la dirección de salida y del tráfico, y la referencia formal no debe confundirse con cualquier hospital que resulte próximo para un desplazamiento concreto.",
  "En verano La Palmera, el puerto y las terrazas reciben mucha más gente y el aparcamiento se vuelve más competido. Fuera de temporada reaparece con claridad la escala local: vecinos, comercio, tren, cultura y servicios de una villa que sigue funcionando. Agosto aumenta el volumen; noviembre no convierte Candás en un decorado vacío.",
  "Hay una condición territorial que no conviene esconder: al oeste, el corredor de Aboño y el borde industrial entre Carreño y Gijón forman parte del contexto real de algunas zonas del concejo. No debe afirmarse que una calle concreta tendrá mala calidad del aire según sople el viento sin medición específica. Sí conviene que quien estudie una vivienda hacia ese sector compruebe sobre el terreno paisaje, actividad industrial, tráfico y condiciones ambientales de la microzona.",
] as const;

const CLIMA_NUEVO2 = [
  "Frente a Mallorca, Candás implica un cambio claro de luz y régimen de lluvia. La costa central asturiana tiene veranos mucho más frescos y un año más húmedo y nuboso; para la comparación climática conviene usar una referencia costera próxima y documentada, no fingir una precisión meteorológica propia de Candás que la fuente disponible no ofrece. En Palma, las normales de AEMET rondan 2.756–2.779 horas de sol al año según observatorio; la diferencia práctica al mudarse al Cantábrico está en menos calor estival, bastante menos sol y lluvia repartida durante muchos más días del año.",
  "En verano la diferencia térmica se nota especialmente. La referencia costera utilizada para esta comparación, Asturias Aeropuerto, ronda los 18,8 °C de media en agosto, frente a 25,1 °C en Palma Aeropuerto. La Palmera sigue siendo una playa de uso cotidiano, pero el baño no tiene la misma duración ni la misma regularidad que en Mallorca. En una vivienda muy próxima al mar conviene contar además con salitre, humedad y exposición.",
] as const;

const VIVIR_NUEVO2 = [
  "Mudarse desde Mallorca a Candás cambia sobre todo la escala y la forma de relacionarse con el mar. Aquí la playa, el puerto, el centro de salud, el comercio y parte de la cultura caben en una villa pequeña; para ampliar opciones aparecen Gijón y Avilés. El resultado no es aislamiento, pero tampoco la oferta continua de una ciudad grande.",
  "La movilidad también cambia. Dentro de Candás se puede hacer mucho andando y el tren permite resolver algunos desplazamientos hacia Gijón sin coche; para la costa exterior de Carreño, determinadas compras o servicios de mayor escala y muchos recorridos rurales, el coche sigue siendo útil. Mantener el vínculo con Mallorca exige además desplazarse al aeropuerto de Asturias y comprobar la programación real de Palma para cada viaje.",
  "En verano aumenta la ocupación de playa, terrazas y aparcamiento, pero la vida local no desaparece cuando termina agosto. El cambio respecto a Mallorca no es dejar de vivir junto al mar, sino hacerlo con un clima más cantábrico y desde una villa mucho más pequeña.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Candás se entiende desde el puerto. La actividad marinera y comercial está documentada desde hace siglos y el puerto llegó a tener un peso importante en la costa asturiana. Pesca, construcción y reparación de barcos y vida portuaria fueron dando forma a una villa que no nació como extensión residencial de Gijón. El mar fue primero trabajo y estructura urbana; después se convirtió también en paseo y paisaje cotidiano.",
  "En el siglo XIX, el volumen de pesca impulsó con fuerza la industria conservera. Candás llegó a concentrar numerosas fábricas y la conserva convirtió una parte importante del trabajo ligado al mar en actividad industrial dentro de la villa, con una presencia especialmente relevante del trabajo femenino en las fábricas. Esa capa se explica hoy en el Espacio Expositivo Entre-Latas, ligado al proyecto del futuro Ecomuseo de la Conserva de Asturias en la antigua fábrica Ortiz. El Museo Antón representa otra continuidad local: conserva y difunde la obra del escultor candasín Antonio Rodríguez García, “Antón”, y funciona como centro municipal dedicado a la escultura.",
  "El puerto, las calles que suben desde él y el promontorio de San Antonio conservan esa relación física entre villa y mar. El faro y el paseo pertenecen hoy a una experiencia mucho más recreativa, pero se apoyan en una geografía y una historia marítimas anteriores al turismo.",
  "Para quien llega a vivir, esa historia explica por qué Candás conserva una identidad de villa propia a pesar de su proximidad a Gijón: puerto, cultura local y pasado conservero siguen dando una lectura distinta a la de un simple núcleo residencial de la costa metropolitana.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "La Palmera es la playa urbana de Candás: unos 240 metros de arena junto a la villa, con paseo marítimo, accesos urbanizados y servicios de temporada. Desde el centro y el puerto no exige organizar una excursión ni coger el coche. Aquí sí puede hablarse de playa cotidiana: se puede bajar a la orilla como parte de un paseo normal y seguir usando el frente marítimo aunque no sea día de baño.",
  "Desde el puerto, el paseo continúa hacia La Palmera y puede prolongarse en dirección a Perlora. El tramo urbano es sencillo y Perlora queda a una escala que permite convertir la salida en un paseo habitual: la información municipal sitúa el puerto de Candás a unos 25 minutos caminando junto al mar desde Perlora. Al continuar por la costa el relieve deja de ser tan uniforme como el paseo de la villa. Carranques, en Perlora, funciona ya como una salida costera ampliada: tiene zonas verdes y transporte público próximo, incluido apeadero ferroviario, pero sus accesos peatonales no equivalen a la accesibilidad urbana de La Palmera; hay una escalera y dos rampas que la información municipal no considera accesibles.",
  "Hacia el otro lado, el promontorio de San Antonio y el faro introducen subida respecto al puerto. Es una salida corta que cambia rápidamente la altura y la vista sobre la costa sin exigir abandonar Candás. Para recorridos más largos hay que comprobar el estado real de los tramos antes de asumir continuidad por la costa: la Vía Verde El Tranqueru, tramo Perlora-Xivares de la Senda Costera E-9, figura actualmente cerrada por desprendimientos. Por eso no debe presentarse hoy como una prolongación utilizable sin esa advertencia.",
  "Luanco y otras partes del Cabo Peñas amplían las posibilidades cuando se quiere salir de la rutina inmediata. Para caminar junto al mar no hace falta salir de Candás; para convertir el paseo en una ruta costera larga sí cambia la escala y conviene planificar recorrido y regreso.",
] as const;

const CASA_NUEVO2 = [
  "En Candás predominan pisos y viviendas de villa; la obra nueva es limitada y la fibra está disponible. Cerca del puerto y La Palmera se gana acceso inmediato al mar y al centro, pero conviene revisar salitre, humedad, ruido estival, orientación, luz, ascensor y aparcamiento. En calles con pendiente o edificios antiguos, la comodidad de acceso puede pesar tanto como estar unos minutos más cerca de la playa.",
  "La microzona no funciona aquí como en una ciudad grande, pero sigue importando. Centro, puerto y entorno de La Palmera permiten resolver mucho andando; otras posiciones dentro de Carreño cambian la relación con la villa, el tren, el coche y la costa. Hacia el sector de Aboño, además, debe comprobarse personalmente la relación de la vivienda con el corredor industrial y viario sin convertir una referencia general de calidad del aire en una predicción para una calle concreta.",
  "Como referencia de oferta, Carreño se situaba en 1.840 €/m² en agosto de 2026. Idealista registraba para ese mes una variación interanual del +0,5 %. Esa evolución sirve para situar el mercado, no para anticipar lo que hará el precio. La referencia municipal tampoco describe por sí sola una vivienda concreta en Candás: proximidad a playa y puerto, estado del edificio, ascensor, exterior, garaje y vistas pueden separar mucho un inmueble de la media.",
  "El mercado tiene una base residencial propia y también demanda vinculada a costa y proximidad a Gijón, pero eso no garantiza cómo ni cuándo se venderá una vivienda concreta. Para una futura venta, accesibilidad, buen estado, luz, servicios caminables y una ubicación fácil de explicar a distintos perfiles pueden ampliar el público potencial. En una villa compacta, una vivienda práctica protege mejor su utilidad que una vista atractiva acompañada de un acceso incómodo.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "En Candás, centro, puerto y entorno de La Palmera concentran la relación peatonal con playa, comercio y servicios. Otras localizaciones de Carreño pueden cambiar bastante la dependencia del coche y la relación con la costa; hacia Aboño conviene comprobar además el contexto industrial y viario real de la dirección.";

const CASA_QUE_CONVIENE_REVISAR =
  "Ascensor o acceso sin barreras, pendiente desde la calle, luz y orientación, aislamiento, humedad y salitre cerca del mar, ruido y aparcamiento en verano, estado del edificio y recorrido real a compra, centro de salud, tren y playa.";

const CASA_MERCADO_REVENTA =
  "Mercado intermedio con base residencial propia y atractivo costero próximo a Gijón. Una vivienda accesible, exterior, bien mantenida y con servicios caminables puede ampliar el público potencial de una futura venta; la variación reciente del precio no debe leerse como previsión.";

const CASA_LEYENDA_COMPACTA =
  "A: ≤5 min de la costa · B: 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Estimaciones comparativas; conviene contrastarlas con la oferta del momento.";

const CASA_FILA_PRECIOS = {
  municipio: "Candás (Carreño)",
  a2: "155.480 €",
  a3: "215.280 €",
  b2: "125.580 €",
  b3: "173.880 €",
  m2: "1.840 €/m²",
} as const;

const ENCAJA_SI_NUEVO2 =
  "Candás puede encajar si atrae una villa pequeña donde playa, puerto, compra, atención primaria, cultura y tren caben en un radio manejable, y si tener Gijón cerca se entiende como ampliación de posibilidades más que como dependencia para cada día. La Palmera permite una relación muy inmediata con el mar y la villa mantiene actividad fuera del verano; a cambio, la escala de servicios es menor que la de una ciudad y para hospital, oferta especializada, costa exterior y parte de los desplazamientos el radio se amplía.";

const NO_ENCAJA_SI_NUEVO2 =
  "Puede encajar peor si se busca una vivienda costera completamente desligada del contexto industrial y viario, si se necesita resolver todo sin salir nunca de la villa o si el cambio de luz, lluvia y temperatura respecto a Mallorca pesa más que la frescura del verano. Dentro del propio concejo, vivir junto al centro y La Palmera no equivale a elegir una localización rural o próxima al corredor de Aboño.";

const VEREDICTO_NUEVO2 =
  "Antes de decidir, conviene hacer tres pruebas muy concretas: vivir un día laborable fuera del verano y resolver a pie compra, salud, tren y paseo; recorrer desde una vivienda candidata la pendiente real hasta el centro y La Palmera; y, si se estudia una dirección hacia el oeste del concejo, comprobar personalmente el contexto industrial, viario y ambiental de esa microzona.";

/** Inspección: puerto y villa sobre el abrigo. */
const FOTO_COMO_PUERTO = {
  src: "/fotos/asturias-centro/candas-puerto.jpg",
  pie: "Puerto de Candás",
} as const;

/** Inspección: frente urbano junto a La Palmera. */
const FOTO_COMO_VILLA = {
  src: "/fotos/asturias-centro/candas-villa.jpg",
  pie: "Candás: villa marinera de Carreño",
} as const;

/** Inspección: Faro de Candás / San Antonio. */
const FOTO_HISTORIA_FARO = {
  src: "/fotos/asturias-centro/candas-faro.jpg",
  pie: "Faro de Candás",
} as const;

/** Inspección: La Palmera y el frente urbano. */
const FOTO_MAR_PLAYA = {
  src: "/fotos/asturias-centro/candas-playa.jpg",
  pie: "Playa de La Palmera, Candás",
} as const;

/** Inspección: puerto, Palmera y prolongación costera. */
const FOTO_MAR_PASEO = {
  src: "/fotos/asturias-centro/candas-paseo.jpg",
  pie: "Puerto y La Palmera desde la costa",
} as const;

/** Inspección: promontorio de San Antonio y faro (subida). */
const FOTO_MAR_SAN_ANTONIO = {
  src: "/fotos/_candidatas/asturias-centro/candas-carreno/mar-faro-san-antonio.jpg",
  pie: "Promontorio de San Antonio, Candás",
} as const;

/** Inspección: calle y tipología residencial de villa. */
const FOTO_CASA_CALLE = {
  src: "/fotos/_candidatas/asturias-centro/candas-carreno/casa-avd-ladreda.jpg",
  pie: "Avenida en Candás",
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

export default function Nuevo2CandasCarrenoPage() {
  const ficha = municipioPorSlug("candas-carreno");
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
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita
            texto={COMO_SE_VIVE_NUEVO2[0]}
            fragmento="La combinación más característica es poder hacer vida de villa junto al mar y usar Gijón como apoyo, no como condición para cada rutina."
          />
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{COMO_SE_VIVE_NUEVO2[1]}</p>
        <Foto src={FOTO_COMO_PUERTO.src} pie={FOTO_COMO_PUERTO.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{COMO_SE_VIVE_NUEVO2[2]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{COMO_SE_VIVE_NUEVO2[3]}</p>
        <Foto src={FOTO_COMO_VILLA.src} pie={FOTO_COMO_VILLA.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita
            texto={COMO_SE_VIVE_NUEVO2[4]}
            fragmento="Agosto aumenta el volumen; noviembre no convierte Candás en un decorado vacío."
          />
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{COMO_SE_VIVE_NUEVO2[5]}</p>
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Frente a Mallorca" varianteTarjetaV1>
        <h3 className="mt-1 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Clima
        </h3>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita
            texto={CLIMA_NUEVO2[0]}
            fragmento="menos calor estival, bastante menos sol y lluvia repartida durante muchos más días del año"
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
            fragmento="El cambio respecto a Mallorca no es dejar de vivir junto al mar, sino hacerlo con un clima más cantábrico y desde una villa mucho más pequeña."
          />
        </p>
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="De dónde viene" varianteTarjetaV1>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita
            texto={DE_DONDE_VIENE_NUEVO2[0]}
            fragmento="El mar fue primero trabajo y estructura urbana; después se convirtió también en paseo y paisaje cotidiano."
          />
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{DE_DONDE_VIENE_NUEVO2[1]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{DE_DONDE_VIENE_NUEVO2[2]}</p>
        <Foto src={FOTO_HISTORIA_FARO.src} pie={FOTO_HISTORIA_FARO.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita
            texto={DE_DONDE_VIENE_NUEVO2[3]}
            fragmento="puerto, cultura local y pasado conservero siguen dando una lectura distinta a la de un simple núcleo residencial de la costa metropolitana."
          />
        </p>
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Mar, río y camino" varianteTarjetaV1>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita
            texto={MAR_RIO_CAMINO_NUEVO2[0]}
            fragmento="Aquí sí puede hablarse de playa cotidiana: se puede bajar a la orilla como parte de un paseo normal y seguir usando el frente marítimo aunque no sea día de baño."
          />
        </p>
        <Foto src={FOTO_MAR_PLAYA.src} pie={FOTO_MAR_PLAYA.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[1]}</p>
        <Foto src={FOTO_MAR_PASEO.src} pie={FOTO_MAR_PASEO.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[2]}</p>
        <Foto src={FOTO_MAR_SAN_ANTONIO.src} pie={FOTO_MAR_SAN_ANTONIO.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita
            texto={MAR_RIO_CAMINO_NUEVO2[3]}
            fragmento="Para caminar junto al mar no hace falta salir de Candás; para convertir el paseo en una ruta costera larga sí cambia la escala y conviene planificar recorrido y regreso."
          />
        </p>
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Casa" varianteTarjetaV1>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita
            texto={CASA_NUEVO2[0]}
            fragmento="la comodidad de acceso puede pesar tanto como estar unos minutos más cerca de la playa"
          />
        </p>
        <Foto src={FOTO_CASA_CALLE.src} pie={FOTO_CASA_CALLE.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{CASA_NUEVO2[1]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{CASA_NUEVO2[2]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita
            texto={CASA_NUEVO2[3]}
            fragmento="En una villa compacta, una vivienda práctica protege mejor su utilidad que una vista atractiva acompañada de un acceso incómodo."
          />
        </p>

        <EnlaceIdealista ambito="municipio" slug={ficha.slug} nombre={ficha.municipio} />

        <div className="mt-6 pt-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--tinta-suave)]">
            Precio y bandas
          </p>
          <p className="mt-1 text-[13px] leading-snug text-[var(--tinta-suave)]">
            Referencia municipal; una vivienda concreta puede separarse mucho de la media según
            ubicación, edificio y relación con el centro/playa.
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
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{ENCAJA_SI_NUEVO2}</p>
        <h3 className="mt-7 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          No encaja si
        </h3>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{NO_ENCAJA_SI_NUEVO2}</p>
        <h3 className="mt-7 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Veredicto
        </h3>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{VEREDICTO_NUEVO2}</p>
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
