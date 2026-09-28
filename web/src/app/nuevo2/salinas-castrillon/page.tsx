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
 * NUEVO2 — Salinas (Castrillón).
 * Texto: CURSOR_TRANSFERENCIA_NUEVO2_SOTO_SALINAS_LUANCO_MUROS_PENDIENTE_2026-09-25.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Salinas está en la costa central de Asturias, dentro del municipio de Castrillón y muy cerca de Avilés. Para entender cómo sería vivir aquí conviene separar desde el principio tres lugares que cumplen funciones distintas.",
  "Salinas es el núcleo costero de esta ficha: las viviendas llegan hasta una gran playa abierta al Cantábrico. Piedras Blancas, situada tierra adentro a pocos minutos, es la capital de Castrillón y concentra parte de los servicios municipales. Avilés es ya una ciudad: allí aparecen más comercio, cultura, gestiones y el hospital público de referencia cercano.",
  "Esa disposición explica buena parte de la vida en Salinas. Se puede vivir en un núcleo pequeño y salir andando a una playa extensa, pero sin quedar aislado: cuando hace falta algo que Salinas no ofrece, se amplía la vida primero hacia Piedras Blancas y después hacia Avilés. El mar está a pie; una parte de los servicios, a pocos minutos de coche.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Una mañana normal puede empezar sin decidir adónde ir. Se sale de casa y, desde buena parte del núcleo, basta caminar hacia el frente marítimo para llegar a una playa larga y abierta. No es una playa del municipio a la que haya que conducir: para una vivienda bien situada en Salinas puede ser el lugar donde se camina antes de comer o al final de la tarde.",
  "Eso cambia el papel del mar. No hace falta que sea verano ni que apetezca bañarse. La playa también sirve simplemente para salir de casa, andar junto al Cantábrico y regresar. Vivir cerca del paseo convierte algo que en otros lugares sería una salida en una posibilidad corriente del día.",
  "La vida práctica no es tan autosuficiente como podría sugerir esa facilidad. Salinas permite resolver necesidades cotidianas, pero parte de los servicios de Castrillón están en Piedras Blancas, la capital municipal situada tierra adentro. Para necesidades de mayor escala aparece Avilés, una ciudad próxima donde se amplían mucho el comercio, las gestiones, la cultura y la atención sanitaria.",
  "Las distancias hacen que esa dependencia sea relativamente llevadera. El Hospital Universitario San Agustín, el hospital público de Avilés, queda aproximadamente a 5 km y unos 10 minutos en coche. El aeropuerto de Asturias, que concentra los vuelos comerciales de la región, está a unos 8 km y también alrededor de 10 minutos. Hay además autobús frecuente hacia Avilés.",
  "Por eso un día en Salinas puede tener dos escalas. Para caminar junto al mar no hace falta arrancar el coche. Para el hospital, determinadas compras o servicios que no están en el núcleo, sí habrá que salir, pero Avilés queda lo bastante cerca para que esos desplazamientos formen parte de una rutina normal y no de una jornada entera.",
  "En verano cambia una pieza importante. La misma playa que el resto del año funciona como paseo cotidiano atrae más gente, aumenta el movimiento junto al mar y hace más difícil aparcar. Vivir cerca ofrece entonces una ventaja muy concreta: se puede ir andando cuando otros necesitan llegar en coche. El reverso es vivir también cerca de esa mayor actividad estival.",
] as const;

const CLIMA_NUEVO2 = [
  "Mudarse desde Mallorca a Salinas significa cambiar claramente la manera en que el tiempo interviene en el día. El verano es bastante más fresco y la lluvia, la humedad y los cielos cubiertos tienen mucha más presencia durante el año.",
  "Las referencias climáticas para esta parte de la costa central asturiana rondan las 1.800 horas de sol anuales, unos 148 días de lluvia y una temperatura media estival próxima a 19 °C. Son valores aproximados de esta zona de Asturias, no mediciones exclusivas del núcleo de Salinas.",
  "La consecuencia se entiende mejor fuera de la tabla. En verano se evita buena parte del calor persistente de Mallorca, pero julio y agosto ya no garantizan una cadena de días secos y soleados. Habrá más jornadas en las que el paseo siga siendo posible pero el baño o la terraza dejen de marcar el día.",
  "Para una vivienda junto al mar, el clima tampoco termina en la temperatura. Humedad, viento y exposición al Cantábrico hacen importantes la orientación, el aislamiento, las ventanas y el estado de las fachadas. Una casa próxima a la playa permite utilizarla mucho; esa misma proximidad obliga a mirar con atención cómo está preparado el edificio para pasar allí todo el año.",
] as const;

const VIVIR_NUEVO2 = [
  "También cambia la geografía de la vida diaria.",
  "En Salinas se puede tener una gran playa andando y, al mismo tiempo, necesitar desplazarse unos minutos para completar determinados servicios. Piedras Blancas funciona como la capital municipal cercana. Avilés aporta lo que requiere una ciudad de mayor tamaño, incluido el hospital.",
  "No son lugares que haya que visitar para conocer la zona: forman parte de cómo funciona vivir en Salinas. Una compra o un paseo pueden quedarse en el propio núcleo; una necesidad administrativa o determinada compra puede llevar a Piedras Blancas; hospital, cultura o una oferta comercial más amplia empujan hacia Avilés.",
  "El aeropuerto está también aproximadamente a diez minutos. Esa proximidad reduce mucho el trayecto terrestre cuando toca viajar. Para volar a Palma, sin embargo, hay que comprobar la programación de cada temporada: estar cerca del aeropuerto no significa disponer de esa conexión durante todo el año.",
  "Frente a Mallorca, por tanto, no se cambia únicamente sol por lluvia. Se cambia también una manera de usar la costa: aquí una playa cantábrica extensa puede estar integrada en el día mientras parte de la vida práctica se reparte entre varios núcleos muy próximos.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Salinas no tiene la forma de una antigua villa marinera apiñada alrededor de un puerto. Su desarrollo está mucho más ligado a vivir y veranear junto a una gran playa.",
  "Eso todavía se reconoce en el paisaje construido. Junto al arenal aparecen viviendas de épocas distintas: casas y chalés, pero también edificios de mayor altura cerca del frente marítimo. El núcleo fue creciendo paralelo a una costa que no quedaba a las afueras, sino delante de las propias calles.",
  "La playa, sin embargo, no desemboca en una costa interminablemente residencial. Hacia uno de sus extremos aparece El Espartal, un sistema de dunas protegido. Allí el espacio construido pierde protagonismo y entre el núcleo y el mar aparece una franja de arena, dunas y vegetación.",
  "Si se continúa en la misma dirección se llega al entorno de San Juan de Nieva, junto a la entrada de la ría de Avilés. Una ría es aquí el brazo de agua por el que el mar penetra hacia Avilés; alrededor de esa entrada se desarrollaron instalaciones portuarias e industriales.",
  "Esa cercanía explica algo esencial de Salinas. Su historia residencial junto a la playa y el desarrollo industrial de Avilés no pertenecen a territorios separados. Están uno al lado del otro. Todavía hoy basta caminar desde el núcleo hacia El Espartal y continuar hacia la ría para ver cómo un paisaje de playa y dunas termina encontrándose con puerto e industria.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "La relación cotidiana con el mar empieza en la playa de Salinas, el gran arenal situado directamente frente al núcleo. Su longitud permite usarla de varias maneras: bajar para bañarse cuando las condiciones acompañan, caminar junto al agua o simplemente hacer un tramo y volver a casa.",
  "Eso es importante porque elimina un desplazamiento. Para quien vive cerca del frente marítimo, no hay que coger el coche para «ir a la costa»: ya se está viviendo junto a ella.",
  "Si se camina hacia el extremo próximo a Avilés, los edificios van quedando atrás y aparece El Espartal. Es un sistema de dunas protegido situado junto a la propia playa. Una pasarela permite recorrer parte de este espacio sin avanzar directamente por la arena. No es una excursión distante: prolonga el paseo que empieza en Salinas.",
  "Seguir caminando cambia otra vez lo que se encuentra. Hacia San Juan de Nieva, la costa abierta empieza a convertirse en la entrada de la ría de Avilés. El agua ya no se contempla únicamente como Cantábrico abierto: se entra en el corredor marítimo que conduce hacia Avilés y empiezan a verse instalaciones del puerto y de la industria.",
  "Así puede desarrollarse una sola salida: se sale entre viviendas y cafeterías, se camina junto a una playa abierta, se continúa entre las dunas protegidas de El Espartal y se termina frente a una ría donde aparecen puerto e industria.",
  "Ese cambio de paisaje es una de las cosas que hacen reconocible a Salinas. No es una sucesión de costa cada vez más salvaje. Naturaleza, vivienda e infraestructura están muy cerca. El atractivo de poder enlazar playa y dunas andando tiene como contrapunto que, al avanzar hacia la ría, el paisaje industrial de Avilés entra también en la experiencia.",
  "Para bañarse, la ventaja de vivir aquí es la distancia: una vivienda bien situada puede tener el arenal realmente a pie. El límite lo pone el propio Cantábrico. Estar cerca del agua todos los días no significa encontrar todos los días las mismas condiciones de baño.",
] as const;

const CASA_NUEVO2 = [
  "En Salinas, el primer error al buscar vivienda sería escribir simplemente «Castrillón» en el presupuesto y pensar que ya se sabe cuánto cuesta vivir junto a esta playa.",
  "Castrillón es todo el municipio. Salinas es solo uno de sus núcleos y tiene un mercado claramente más caro.",
  "En agosto de 2026, el conjunto de Castrillón estaba en 2.241 €/m². Piedras Blancas, la capital situada tierra adentro, aparecía alrededor de 1.984 €/m². Salinas alcanzaba 3.226 €/m². Es decir, la referencia de Salinas estaba aproximadamente un 44 % por encima de la media municipal.",
  "La diferencia tiene una consecuencia directa. Si lo que se quiere comprar es la posibilidad de salir del portal y bajar andando a la playa de Salinas, utilizar únicamente la media de Castrillón haría parecer esa vida bastante más barata de lo que indica el mercado del propio núcleo.",
] as const;

const CASA_PRECIO_REFS = [
  "Castrillón — referencia municipal: 2.241 €/m² · agosto de 2026",
  "Salinas — referencia del lugar descrito: 3.226 €/m² · agosto de 2026",
] as const;

const CASA_BANDAS_NOTA =
  "Las estimaciones utilizan el precio de Salinas porque esta página describe precisamente la experiencia de vivir allí. Para poder comparar todos los lugares del proyecto se toma como referencia una vivienda de unos 65 m² con dos dormitorios y otra de unos 90 m² con tres. Las franjas A y B expresan cercanía a la costa; no indican calidad, vistas ni el precio exacto de un inmueble.";

const CASA_ADVERTENCIA_MICROZONA =
  "Incluso dentro de Salinas, decir «cerca de la playa» no basta. Hay que salir del portal y comprobar el recorrido. Una vivienda puede permitir llegar al paseo en pocos minutos por calles sencillas; otra puede estar igualmente cerca sobre el mapa pero relacionarse peor con la compra cotidiana, el coche o el acceso al frente marítimo. La altura del piso también cambia lo que se compra. Cerca de la playa hay edificios altos y la proximidad al agua no garantiza una vista abierta: orientación, planta y edificios situados delante pueden convertir dos viviendas de la misma calle en experiencias muy diferentes. Después está el edificio. Junto al Cantábrico conviene mirar especialmente aislamiento, carpinterías, ventilación, humedad, salitre y estado de la fachada. Una terraza próxima al mar tiene un valor cotidiano evidente; si la vivienda está muy expuesta o mal aislada, esa misma posición puede exigir más mantenimiento y hacer menos cómoda una parte del año.";

const CASA_QUE_CONVIENE_REVISAR =
  "Antes de entrar en la vivienda, conviene hacer la vida que tendría que soportar. Caminar hasta la playa. Ir al lugar donde se compraría lo cotidiano. Volver al portal. Comprobar dónde se deja el coche y cuánto de ese recorrido seguiría siendo cómodo dentro de unos años. Dentro importan ascensor y barreras, luz, orientación, aislamiento, humedad, ventanas, estado del edificio y reformas pendientes. Si el anuncio vende vistas al mar, hay que comprobarlas desde la estancia que realmente se utilizará cada día, no únicamente desde una esquina de la terraza o desde la fotografía más favorable. Después merece la pena volver a la misma calle en un momento de mucha ocupación estival. La playa seguirá estando igual de cerca; el tráfico, el movimiento y la facilidad para aparcar pueden ser distintos.";

const CASA_MERCADO_REVENTA =
  "Que Salinas sea bastante más cara que Piedras Blancas y que la media de Castrillón demuestra que el mercado distingue la localización. No demuestra que una vivienda vaya a subir de precio en el futuro. Para una eventual reventa ayudan características que hacen la casa utilizable por más personas: ascensor, acceso sencillo, buen estado, luz, aislamiento, aparcamiento razonable y una relación verdaderamente cómoda con la playa y los servicios. Aquí el coste de elegir lugar se ve con especial claridad. Se puede comprar en otras partes de Castrillón por referencias sensiblemente menores. Lo que se paga de más en Salinas es, entre otras cosas, la posibilidad de que esa gran playa deje de ser un sitio cercano y pase a formar parte de la vida al salir de casa.";

const CASA_LEYENDA_COMPACTA =
  "A: ≤5 min de la costa · B: 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Estimaciones comparativas; conviene contrastarlas con la oferta del momento.";

const CASA_FILA_PRECIOS = {
  municipio: "Salinas (Castrillón)",
  a2: "272.597 €",
  a3: "377.442 €",
  b2: "220.495 €",
  b3: "305.360 €",
  m2: "3.226 €/m²",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Puede encajar si se quiere que el mar forme parte del día sin depender del coche. En una vivienda bien situada se puede salir andando, llegar a una playa extensa y prolongar el paseo hasta las dunas de El Espartal.",
  "También si interesa vivir a escala de núcleo costero sin alejarse demasiado de servicios de ciudad. Avilés está muy cerca; su hospital público queda aproximadamente a diez minutos en coche y el aeropuerto de Asturias, también. Salinas permite así mantener la playa delante sin convertir una visita al hospital o un viaje en avión en un desplazamiento largo.",
  "La combinación característica es esa: playa cotidiana y escala residencial, con una ciudad, un hospital y un aeropuerto a pocos minutos.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Puede encajar peor si se quiere resolver prácticamente toda la vida andando dentro del mismo núcleo. Para parte de los servicios habrá que ir a Piedras Blancas o Avilés.",
  "También si se busca una costa visualmente alejada de industria e infraestructuras. Al caminar desde Salinas hacia las dunas y continuar hasta la entrada de la ría de Avilés, empiezan a aparecer puerto e instalaciones industriales. Esa proximidad forma parte del lugar.",
  "El verano añade más movimiento y presión de aparcamiento junto a la playa. Y la vivienda tiene otro peaje muy claro: comprar en Salinas cuesta sensiblemente más que comprar en Piedras Blancas o tomar como referencia la media de Castrillón.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "La visita debería empezar dejando el coche aparcado junto a la vivienda candidata.",
  "Primero hay que hacer la vida pequeña: salir del portal, ir hasta donde se compraría lo cotidiano, bajar a la playa y regresar. Ese recorrido permite saber si «vivir junto al mar» funciona realmente desde esa dirección concreta.",
  "Después conviene continuar andando por la costa. El paseo lleva desde el frente habitado de Salinas hacia las dunas protegidas de El Espartal. Si se sigue en dirección a San Juan de Nieva, el paisaje cambia de nuevo y aparecen la entrada de la ría, el puerto y la industria de Avilés. En una sola caminata se comprueban así uno de los grandes atractivos del lugar y uno de sus principales contrapuntos.",
  "Luego toca probar lo que no se puede hacer andando: ir a Piedras Blancas para entender qué parte de la vida municipal queda allí y conducir hasta Avilés y el Hospital San Agustín para comprobar cuánto pesan realmente esos desplazamientos.",
  "Y queda una última visita útil: la misma calle en un día de alta ocupación veraniega. Entonces se puede comprobar qué ocurre con el aparcamiento y el movimiento alrededor de la playa.",
  "Al terminar, la pregunta ya no es simplemente «¿me gusta Salinas?». Es mucho más concreta: ¿me compensa pagar el precio propio de Salinas para tener esta playa en mi vida diaria, aceptando que algunos servicios están fuera, que el verano trae más movimiento y que hacia la ría el paisaje natural convive con puerto e industria?",
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
    </main>
  );
}
