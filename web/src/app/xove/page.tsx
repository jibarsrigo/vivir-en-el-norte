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
 * NUEVO2 — Xove (A Mariña).
 * Eje: San Bartolomé (servicios del núcleo, sin playa a pie) vs costa (Esteiro / Portocelo / Roncadoira).
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "A Mariña es la costa de Lugo entre O Vicedo y Ribadeo: Viveiro y su ría, Burela pesquera, Foz, Barreiros y As Catedrais, Ribadeo frente a Asturias. Atlántico abierto, más fresco y gris que las Rías; hospital comarcal y aeropuertos a una hora larga.",
  "Xove es municipio de costa y parroquias entre Viveiro y Cervo: unos tres mil quinientos habitantes repartidos, sin una villa densa que lo resuelva todo. San Bartolomé concentra el ayuntamiento y varios servicios; Esteiro y Portocelo abren el Cantábrico. En el término pesa además el complejo industrial de San Ciprián, repartido con Cervo. No es Viveiro: aquí se gana orilla abierta y escala dispersa; a cambio, coche casi cada día para unir núcleo y mar.",
  "Lo que más cambia la vida diaria es dónde queda la casa: en San Bartolomé —farmacia, centro médico y equipamientos cerca, playa en coche— o hacia la costa —Esteiro, Portocelo, Roncadoira—, donde el mar está delante y el núcleo pide trayecto. En ambos sitios el Cantábrico está cerca en el mapa; no se vive igual la semana.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Xove reúne unos tres mil quinientos habitantes entre costa y parroquias, y no se siente villa completa: San Bartolomé —parroquia de San Bartolo, capital administrativa del concello— concentra el ayuntamiento, el centro médico, la farmacia, colegios, piscina y gimnasio en el Centro Cívico, pero la playa no queda debajo. Quien llega de fuera descubre enseguida que hay que elegir. En San Bartolomé se pueden hacer gestiones y parte del día a día básico sin tener que salir a Viveiro para cada recado. Hacia Esteiro —playa abierta de arena y oleaje, con arcos de roca y fama de surf— o hacia Portocelo —ensenada más pequeña y abrigada, en la parroquia de San Tirso— la postal es otra: mar delante, pero casi cada recado serio pide el volante hacia el núcleo o hacia Burela y Viveiro. En pocos minutos se pasa de una forma de vivir Xove a otra, y esa diferencia acaba importando más que la imagen uniforme de «costa de A Mariña» en el mapa.",
  "Un martes de noviembre, en San Bartolomé, se puede pasar por la farmacia, el centro médico o el Centro Cívico y sentir un pueblo con vida local, no solo veraneo. Lo que no se encuentra es el comercio grande ni la densidad de mesas de Viveiro: el súper completo y muchas compras piden coche hacia esa villa o hacia Burela. Quien elige el núcleo elige esa comodidad relativa de servicios básicos: lo que no elige es bajar a la playa a pie. En Esteiro o Portocelo esa misma mañana es más de orilla y más dependiente del coche para casi cada recado, incluido el que en San Bartolomé se resuelve cerca.",
  "Sin coche, San Bartolomé aguanta lo esencial del municipio; la costa, casi no. Desde el núcleo, el Hospital da Mariña —público comarcal en Burela— suele quedar a unos veinte minutos; desde las parroquias del interior, algo más. Los aeropuertos útiles —Asturias, Santiago o A Coruña— rondan los noventa y cinco a ciento cinco minutos según ruta. Hay apeadero del tren de ancho métrico y la N-642 / A-8 enlazan la costa, pero quien vive junto a Esteiro o Portocelo suele necesitar el volante para el súper, el hospital y las gestiones. Viveiro y Burela cubren la compra grande y la sanidad comarcal; Xove, a cambio, ofrece playas propias de costa abierta y un núcleo con equipamientos, separados de la orilla.",
  "Entre agosto y noviembre cambia sobre todo el ritmo de la costa. En verano Esteiro y Portocelo reciben toallas, tablas y tráfico hacia la playa; hacia primeros de agosto, las fiestas de San Pedro Fiz junto a Esteiro concentran gente local y verbena. A finales de agosto, San Bartolomé celebra su patrón con sardiñada y verbena. No hay una Semana Santa que corte un casco denso como en Viveiro: el volumen es de playa y temporada. Vivir en primera línea de Esteiro significa semanas más concurridas. Meses después, en un martes húmedo, el mismo arenal vuelve a sentirse vacío y las parroquias, quietas. No son dos Xove distintos: son dos ritmos que forman parte de vivir aquí todo el año.",
  "También por eso la elección entre San Bartolomé y la costa cambia bastante la vida diaria. En el núcleo se tienen servicios básicos cerca a diario, a cambio de coche para la playa y para el comercio grande. En la costa se gana Esteiro o Portocelo en la puerta, a cambio de coche para casi todo lo demás y de un agosto más lleno en los accesos. Esa diferencia de sitio acaba importando mucho más que la postal vista en un mapa.",
] as const;

const CLIMA_NUEVO2 = [
  "Xove no suaviza el salto con Mallorca: menos sol, más días de lluvia y humedad que se nota en casa. La referencia de zona ronda 1.850 horas de sol al año, unos cuarenta días despejados y cerca de 1.100 mm de lluvia en unos ciento cuarenta y ocho días —casi la mitad del año—. Mallorca ronda 2.800 horas de sol. La niebla es alta; el viento, medio —en costa abierta como esta se nota más que en la ría de Viveiro—. También aquí llovizna en julio y agosto. Un día puede empezar gris, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "En verano el contraste se nota aún más. Medias alrededor de 18,5 °C: no pasas el calor de Baleares. En Esteiro o Portocelo el agua suele estar entre 17 y 19 °C, con más oleaje que Covas: baño y surf de Cantábrico abierto, no de ría calmada. Quien vive en San Bartolomé lo nota al salir a la plaza; quien vive hacia la costa, al abrir la ventana al viento. Un frente gris de noviembre cuenta más que un sábado de sol junto a los arcos de roca de Esteiro.",
] as const;

const VIVIR_NUEVO2 = [
  "Llegar de Mallorca a Xove es cambiar de escala: se pasa a un municipio disperso —núcleo con servicios básicos o casa junto al Cantábrico—, no a una villa caminable como Viveiro ni a un pueblo mínimo solo de horizonte como O Vicedo. En Mallorca puede ser habitual pensar primero en kilómetros; aquí unos pocos minutos en coche separan la farmacia de Esteiro —o convierten la misma semana en trayectos si vives en la orilla y necesitas el súper—. Esa elección modifica decisiones tan sencillas como salir a comprar, bajar a la playa o dejar el coche.",
  "También cambia la relación entre coche, costa y villas de apoyo. En San Bartolomé se puede resolver lo esencial del municipio a pie o cerca; el comercio grande y el hospital piden Viveiro o Burela. En la costa el mar queda delante y casi cada cambio de sitio fuera de la playa pide volante. A cambio, el oleaje y el silencio de noviembre son reales. Ir y volver a Mallorca pide trayecto largo: aeropuerto usable alrededor de los cien minutos —Santiago suele cubrir Palma casi todo el año—. Se oye gallego en los núcleos; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. Agosto llena Esteiro y Portocelo de movimiento; en noviembre el mismo tramo recupera vacío y San Bartolomé sigue abierto, aunque más quieto. Para alguien acostumbrado a Mallorca, donde también existe presión estival, la diferencia está en la escala: el cambio se concentra en playas y parroquias, no en una ciudad. Vivir aquí todo el año significa aceptar esas dos caras —núcleo con servicios limitados y costa concurrida en verano— como partes de una misma vida, no elegir únicamente un sábado de sol en Esteiro.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "San Bartolomé no es un casco monumental: es el núcleo administrativo que concentró el ayuntamiento cuando el municipio, con parroquias dispersas, necesitó un centro reconocible de gestiones y comercio básico. Calles, servicios y una escala modesta organizan la vida de quien no vive pegado al Cantábrico. Quien llega buscando villa marinera de postal se equivoca de polo; quien busca autonomía relativa de interior costero, no. Esa herencia administrativa explica por qué «Xove» en el anuncio puede significar San Bartolomé a pie o costa a minutos en coche.",
  "En la costa, Esteiro y Portocelo cuentan otra historia: orilla trabajada por el mar, castros y faro. El faro de Punta Roncadoira marca el Cantábrico abierto y un paisaje de acantilado distinto del abrigo de ría de Viveiro. Portocelo aporta playa y un ritmo más de orilla; Esteiro, otra forma de vivir el mismo municipio. Quien conozca solo San Bartolomé debe sumar esa capa atlántica: no es decorado, es la otra mitad del mapa cotidiano.",
  "El complejo industrial de San Ciprián —refinería de alúmina y fábrica de aluminio, repartido entre Xove y Cervo— añade la capa contemporánea más visible desde fuera: empleo, tráfico, silueta industrial y un debate ambiental que forma parte del entorno. No define por sí solo la vida en San Bartolomé o en Portocelo, pero sí el horizonte y la red de desplazamientos. Vivir en Xove es vivir con esa presencia cerca, no fingir una Mariña solo de faro y arena. El oficio industrial convive con el costero sin fundirse en una sola postal.",
  "Hoy, comprar aquí es elegir entre esas herencias: núcleo con servicios básicos juntos, o costa abierta donde el súper grande y muchas gestiones piden volver a San Bartolomé o salir a Viveiro y Burela. El anuncio municipal no distingue cuál. Quien acepte ese eje interior–costa encuentra un trato claro; quien espere lonja bajo la ventana en San Bartolomé se equivoca de puerta.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar de casi todos los días aquí es Cantábrico abierto, no ría de Covas. Quien vive hacia Esteiro puede bajar a la playa y sentir ola y viento; quien vive en Portocelo tiene otra orilla de arena y acceso; quien vive en San Bartolomé convierte el agua en salida corta en coche. En verano el agua suele rondar los 19–21 °C. Un martes de noviembre el frente respira; un domingo de agosto aparcamiento y acceso cuentan. No hay que vender Xove como si todo el municipio tuviera la misma puerta al mar: el anuncio único oculta esa diferencia de polo.",
  "Para caminar sin organizar una salida larga, la Senda Costeira y el tramo hacia Roncadoira convierten el acantilado y el faro en horizonte: desnivel, viento y Cantábrico, no un boulevard de villa. Desde San Bartolomé ese paseo ya es plan; desde la costa puede ser la tarde ordinaria. El faro no es un adorno: organiza la mirada, el ritmo del viento y la sensación de costa abierta frente a la ría abrigada de Viveiro.",
  "Cuando se quiere ampliar el día, Viveiro aporta casco y Covas; Burela, hospital y lonja; Cervo, San Cibrao y Sargadelos. Xove sostiene costa propia y un núcleo interior; la comarca completa lo que falta en comercio denso o en sanidad hospitalaria. Esa red cercana explica por qué el municipio se siente habitable sin ser capital densa: se vive aquí y se sale a minutos cuando hace falta.",
  "En San Bartolomé el mar forma parte del mapa semanal, no de la puerta; en Esteiro o Portocelo la orilla es la puerta de casa y el comercio serio queda detrás. Esa diferencia describe mejor Xove que contar playas de A Mariña. Elegir polo —interior o costa— pesa más que el nombre del concello en el portal. Quien acepte Cantábrico abierto y coche para parte de la semana encuentra un trato claro.",
] as const;

const CASA_NUEVO2 = [
  "En Xove San Bartolomé y la costa no se parecen en el día a día. Un anuncio que solo diga «Xove» puede ocultar si la casa da al núcleo con farmacia cerca, o a Esteiro o Portocelo sin súper debajo.",
  "Predominan viviendas en parroquias y cerca de la costa; hay poca o ninguna obra nueva y fibra parcial que conviene comprobar dirección a dirección. Junto a la orilla notarás humedad, salitre y gente de agosto; hacia el interior, silencio antes y más coche para todo.",
  "En la capa de datos de esta web no hay un €/m² municipal fiable ahora mismo: la muestra de anuncios en un municipio disperso puede ser escasa y moverse mucho. No inventamos una media. Conviene mirar Idealista del mes en que se busque y comparar el inmueble concreto —estado, acceso, microzona— más que una cifra única.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra, la playa, y la salida hacia Burela, Viveiro o el aeropuerto. En agosto, el aparcamiento en Esteiro; en noviembre, la luz, el viento y la humedad. Xove premia elegir bien el lado; castiga comprar solo porque un sábado lucía bien la playa de Esteiro.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "San Bartolomé y la costa no son intercambiables. Una vivienda «en Xove» en el mapa puede significar farmacia y Centro Cívico cerca sin playa a pie, o Esteiro delante con coche para casi cada recado. El complejo de San Ciprián forma parte del término: conviene situar la casa respecto a esa presencia. Comparar solo un anuncio inventa un Xove que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el súper que se usaría —casi siempre Viveiro o Burela—, el coche y la playa. En la costa, dónde se deja el coche en agosto. También la luz, la orientación, el aislamiento, la ventilación y señales de humedad; la fibra en esa dirección; y cómo se vive esa misma calle un domingo de agosto y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de costa y de vivienda en parroquias, pero lo que decide es el inmueble concreto. Un acceso sencillo, buen estado, luz y un sitio fácil de explicar —núcleo práctico o costa bien situada— amplían el abanico de compradores; una casa muy expuesta, difícil de mantener o mal situada respecto a la rutina elegida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "Sin media municipal fiable en la capa actual. Idealista del mes y el inmueble concreto mandan. A/B no aplican sin €/m² de referencia.";

const CASA_FILA_PRECIOS = {
  municipio: "Xove",
  a2: "n.d.",
  a3: "n.d.",
  b2: "n.d.",
  b3: "n.d.",
  m2: "n.d.",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Xove encaja si atrae vivir junto al mar abierto del Cantábrico en playas del propio municipio —Esteiro, arenal con oleaje y arcos de roca; Portocelo, ensenada más recogida; o el tramo hacia el faro de Punta Roncadoira— o si prefiere el núcleo de San Bartolomé, donde están el ayuntamiento, la farmacia y el Centro Cívico. Esteiro, Portocelo y Roncadoira no son pueblos de al lado: son orillas y parroquias de Xove. Hay que elegir dónde se vive porque las dos experiencias no se mezclan solas. En San Bartolomé gestiones y parte del día a día caben cerca, pero bajar a la playa pide ir en coche. Junto a Esteiro o Portocelo el mar queda delante, pero la compra grande y el Hospital da Mariña se hacen en Viveiro o en Burela, a unos veinte minutos desde el núcleo. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia, niebla y humedad.",
  "También encaja si se acepta la presencia del complejo industrial de San Ciprián en el término —se ve desde parte de la costa— y el verano más lleno en Esteiro, eligiendo bien la calle y no la primera fila del acceso a la playa.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Xove encaja peor si se necesita una villa caminable con comercio amplio, mesas abiertas en enero y un súper completo sin salir del pueblo: aquí faltan —los servicios son 3/10 en nuestra escala— y eso importa porque la compra semanal seria y buena parte del ocio se organizan en Viveiro o en Burela, no en San Bartolomé. Tampoco si el hospital debe quedar a pie: el de Burela está a unos veinte minutos desde el núcleo. Y si se confunde tener farmacia y centro médico en San Bartolomé con poder organizar el día a día sin salir del municipio, suele haber sorpresa: el comercio grande sigue fuera.",
  "Tampoco si se espera un cielo parecido al de Mallorca, si la industria cercana pesa demasiado al elegir casa, o si se decide solo tras un sábado de sol en Esteiro sin probar un noviembre ni el aparcamiento de agosto.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en San Bartolomé y otra hacia Esteiro o Portocelo. Desde cada casa: una compra sencilla —y el trayecto a Viveiro o Burela para la completa—, la playa que se usaría, y la salida hacia el hospital y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en verano en Esteiro (aparcamiento, ruido, gente) y un día cubierto de noviembre (luz, viento, humedad). Situar la casa respecto al complejo de San Ciprián. Y comprobar la fibra y el estado de la vivienda en la dirección exacta.",
] as const;

const FOTO_COMO_NUCLEO = {
  src: "/fotos/a-marina/xove-villa.jpg",
  pie: "San Bartolomé: Casa do Concello de Xove",
} as const;

const FOTO_COMO_COSTA = {
  src: "/fotos/a-marina/xove-playa.jpg",
  pie: "Esteiro: playa abierta al Cantábrico",
} as const;

const FOTO_HISTORIA_FARO = {
  src: "/fotos/a-marina/xove-faro.jpg",
  pie: "Faro de Punta Roncadoira",
} as const;

const FOTO_HISTORIA_CASTRO = {
  src: "/fotos/a-marina/xove-portocelo.jpg",
  pie: "Restos de piedra junto al mar en Xove",
} as const;

const FOTO_MAR_PORTOCELO = {
  src: "/fotos/a-marina/xove-portocelo-playa.jpg",
  pie: "Portocelo: ensenada más recogida",
} as const;

const FOTO_MAR_GRANITO = {
  src: "/fotos/a-marina/xove-parroquia.jpg",
  pie: "Granito y Cantábrico en la costa de Xove",
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

export default function Nuevo2XovePage() {
  const ficha = municipioPorSlug("xove");
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
        {COMO_SE_VIVE_NUEVO2.slice(0, 3).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_COMO_NUCLEO.src} pie={FOTO_COMO_NUCLEO.pie} />
        <Foto src={FOTO_COMO_COSTA.src} pie={FOTO_COMO_COSTA.pie} />
        {COMO_SE_VIVE_NUEVO2.slice(3).map((p) => (
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
        {DE_DONDE_VIENE_NUEVO2.slice(0, 2).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_HISTORIA_FARO.src} pie={FOTO_HISTORIA_FARO.pie} />
        <Foto src={FOTO_HISTORIA_CASTRO.src} pie={FOTO_HISTORIA_CASTRO.pie} />
        {DE_DONDE_VIENE_NUEVO2.slice(2).map((p) => (
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
        <Foto src={FOTO_MAR_PORTOCELO.src} pie={FOTO_MAR_PORTOCELO.pie} />
        <Foto src={FOTO_MAR_GRANITO.src} pie={FOTO_MAR_GRANITO.pie} />
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

        <div className="mt-6 pt-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--tinta-suave)]">
            Precio y bandas
          </p>
          <p className="mt-1 text-[13px] leading-snug text-[var(--tinta-suave)]">
            Sin media municipal fiable en la capa actual; una vivienda concreta manda.
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
