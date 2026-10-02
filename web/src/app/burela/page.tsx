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
 * NUEVO2 — Burela (A Mariña).
 * Eje: cerca del puerto / lonja (oficio, ruido de trabajo, flota del bonito) vs villa de servicios hacia dentro (hospital, comercio, mercado a pie).
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "A Mariña es la costa de Lugo entre O Vicedo y Ribadeo: Viveiro y su ría, Burela pesquera, Foz, Barreiros y As Catedrais, Ribadeo frente a Asturias. Atlántico abierto, más fresco y gris que las Rías; hospital comarcal y aeropuertos a una hora larga.",
  "Burela es la villa pesquera con más autonomía práctica del tramo: unos nueve mil quinientos habitantes, lonja activa, Hospital da Mariña en el propio municipio y comercio a pie. No es Viveiro ni Ribadeo: aquí se gana sanidad y recados en el mismo núcleo; a cambio, falta casco monumental y cerca del puerto se oye el trabajo de la flota.",
  "Lo que más cambia la vida diaria es dónde queda la casa: cerca del puerto y la lonja —oficio, ruido de dársena, flota del bonito— o hacia dentro de la villa —hospital, mercado, comercio y menos ruido de muelle—. En ambos sitios A Marosa y Ril quedan cerca para el baño; no se vive igual la semana.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Burela reúne unos nueve mil quinientos habitantes en A Mariña central, y se siente villa de trabajo y servicios, no de postal de piedra: el puerto y la lonja —el edificio donde se subasta el pescado al llegar la flota— concentran el oficio del mar, y unos minutos hacia dentro caben el Hospital da Mariña —público comarcal—, el mercado, el súper, farmacias y buena parte de la semana sin salir del municipio. Quien llega de fuera descubre enseguida que hay que elegir. Cerca del puerto se vive el ritmo de barcos, mañana de descarga y ruido de trabajo que no se apaga en septiembre. Hacia el interior de la villa la postal es otra: calles de bloques y comercio, hospital a pocos minutos a pie o en coche corto, y menos olor a dársena. En pocos minutos se pasa de una forma de vivir Burela a otra, y esa diferencia acaba importando más que la imagen uniforme de «villa pesquera» en el mapa.",
  "Un martes de noviembre, hacia dentro, se puede comprar en el mercado, pasar por la farmacia y resolver gestiones sin depender de Viveiro ni de Foz. Las calles están abiertas y hay vida local: los servicios llegan a 8/10 en nuestra escala —alto para A Mariña—. Quien elige esa villa funcional elige autonomía cotidiana: lo que no elige es casco amurallado ni fachada indiana. Cerca del puerto esa misma mañana es más de lonja y de movimiento de flota; el comercio denso sigue cerca, pero el ruido de muelle entra en la casa si la ventana da a la dársena.",
  "Sin coche, la villa aguanta bien la semana básica —compra, centro de salud, hospital, deporte, biblioteca—; el peaje está en el aeropuerto y en las salidas largas por la costa. El Hospital da Mariña queda a unos cinco minutos dentro del municipio. Los aeropuertos útiles —Asturias alrededor de ochenta y cinco minutos; Santiago, hacia los ciento diez— piden trayecto. Hay tren de ancho métrico —la antigua FEVE— y la A-8 / N-642 enlazan la costa. Viveiro aporta casco y mesas de piedra; Ribadeo, frontera e imagen indiana; Burela, a cambio, ofrece hospital propio y una semana que se resuelve sin cruzar a otra villa.",
  "Entre junio y agosto cambia sobre todo el ritmo del puerto y de las playas. Hacia junio, la procesión marítima del Carmen —Virgen del Carmen, patrona de los marineros— concentra gente en el muelle. El primer fin de semana de agosto, la Feira do Bonito —feria del atún blanco, de interés turístico nacional— llena lonja, calles y mesas: ruido, tráfico y afluencia que hay que contar si se vive cerca del puerto. A Marosa —playa abierta al este del núcleo— y Ril —arenal más pequeño hacia el oeste— reciben toallas en julio y agosto. Meses después, en un martes húmedo, la villa sigue abierta: hospital, comercio y flota no dependen del veraneo. No son dos Burela distintos: son dos ritmos que forman parte de vivir aquí todo el año.",
  "También por eso la elección entre el puerto y la villa hacia dentro cambia bastante la vida diaria. Cerca de la lonja se gana el oficio delante y el mar de trabajo en la puerta, a cambio de ruido de dársena y de un agosto más intenso en la Feira do Bonito. Hacia dentro se gana hospital, mercado y calles más quietas a diario, a cambio de menos olor a puerto y de una imagen urbana funcional, no monumental. Esa diferencia de sitio acaba importando mucho más que la postal vista en un mapa.",
] as const;

const CLIMA_NUEVO2 = [
  "Burela no parece Mallorca en el cielo: menos sol, más días de lluvia y una humedad que se nota dentro de casa. La referencia de zona ronda 1.900 horas de sol al año, unos cuarenta días despejados y cerca de 1.000 mm de lluvia en unos ciento cuarenta y cinco días —casi la mitad del año—. Mallorca ronda 2.800 horas de sol. La niebla es alta; el viento, medio. También aquí llovizna en julio y agosto. Un día puede empezar gris, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "En verano el contraste se nota aún más. Medias alrededor de 18,5 °C: no pasas el calor de Baleares. En A Marosa o Ril el agua suele estar entre 17 y 19 °C, con oleaje de Cantábrico abierto: baño cuando el mar deja, no de ría calmada como Covas. Quien vive hacia dentro lo nota al salir a la calle húmeda; quien vive junto al puerto, al abrir la ventana a la dársena. Un frente gris de noviembre cuenta más que un sábado de sol en A Marosa.",
] as const;

const VIVIR_NUEVO2 = [
  "Llegar de Mallorca a Burela es cambiar de escala: se pasa a una villa pesquera con hospital propio —o a una casa junto al puerto—, no a un casco de piedra como Viveiro ni a un pueblo mínimo como O Vicedo. En Mallorca puede ser habitual pensar primero en kilómetros; aquí unos pocos minutos separan la lonja del mercado —o convierten la misma semana en ruido de flota si la ventana da al muelle—. Esa elección modifica decisiones tan sencillas como salir a comprar, dormir con la dársena cerca o dejar el coche.",
  "También cambia la relación entre coche, sanidad y costa. Hacia dentro gran parte del día a día cabe a pie: hospital a unos cinco minutos, comercio y mercado cerca. Cerca del puerto el oficio queda delante y el hospital sigue a pocos minutos, pero el peaje es el ruido de trabajo. A Marosa y Ril cubren el baño a pocos minutos del núcleo. Ir y volver a Mallorca pide trayecto: Asturias ronda ochenta y cinco minutos; Santiago, hacia los ciento diez —suele cubrir Palma casi todo el año—. Se oye gallego en la villa; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. La Feira do Bonito y el Carmen llenan el puerto; agosto llena A Marosa; en noviembre la villa sigue abierta —hospital, comercio, flota— aunque más quieta en la orilla. Para alguien acostumbrado a Mallorca, donde también existe presión estival, la diferencia está en la escala: el cambio se concentra en una villa de oficio y playas cortas, no en una capital. Vivir aquí todo el año significa aceptar esas dos caras —puerto de trabajo y villa funcional hacia dentro— como partes de una misma vida, no elegir únicamente un sábado de sol en A Marosa.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Burela creció alrededor del puerto y de la lonja —el edificio donde se subasta el pescado al llegar la flota—. Esa herencia de oficio organiza el casco más que cualquier monumento de pazo: dársena, tráfico de trabajo, olores de mar y una identidad de villa marinera de A Mariña que no se disfraza de postal dulce. Quien busque solo quietud de veraneo se equivoca de tono; quien busque puerto vivo y servicios de villa, no. El crecimiento moderno giró en torno a esa flota —incluida la de altura— y a los comercios y calles que la sostienen todo el año.",
  "El Hospital da Mariña añade la otra herencia contemporánea: Burela no solo recibe a quien viene por la lonja; también concentra atención sanitaria para buena parte de la comarca. Esa doble función —muelle y hospital— explica tráfico, tipología de servicios y por qué muchos vecinos de Foz, Cervo o Viveiro tienen a Burela en la cabeza cuando hace falta algo más que la farmacia del pueblo. Vivir aquí es vivir en un nodo práctico, no en una aldea dormitorio.",
  "La comunidad caboverdiana ligada históricamente a la pesca forma parte de esa historia reciente: familias, oficios y una capa demográfica que se nota en la vida cotidiana del puerto. No es un dato de folleto; es vecinos y trabajo compartido. El verano aumenta gente en A Mariña, pero el invierno deja la base marinera y residencial que sostiene la villa cuando se acaba agosto. Las fiestas y el ritmo de lonja marcan días de más ruido y movimiento sin convertir todo el año en temporada turística.",
  "Hoy, comprar «en Burela» es decidir entre cercanía al puerto y a los servicios —más vida a pie, más oficio en la escena— o zonas más residenciales hacia dentro, con más quietud y más coche para el muelle. El anuncio no siempre lo dice; la semana sí. Quien elige lonja delante acepta el carácter de trabajo; quien se aleja gana silencio y pierde espontaneidad de frente portuario.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar de casi todos los días aquí puede ser dársena de trabajo o playa abierta, y no es lo mismo desde una vivienda junto al puerto que desde una calle hacia el interior. En el muelle la orilla cotidiana es flota, lonja y Cantábrico de oficio: se camina el frente, se oye el trabajo y el agua no se confunde con un arenal de paseo continuo. A Marosa y Ril —playas del municipio— aportan la arena: en verano el agua suele rondar los 19–21 °C. Un martes de noviembre el puerto manda; un domingo de agosto la costa de A Mariña se llena y el aparcamiento cuenta.",
  "Para caminar sin organizar una salida larga, el frente del puerto es la experiencia más sencilla del municipio: viento de Cantábrico, olor a flota y una escala de villa que no pretende ser ciudad. Quien vive cerca puede incorporar ese paseo casi todos los días; quien vive retirado convierte el mismo gesto en trayecto en coche. Confundir el muelle de trabajo con una playa urbana tipo Salinas es el error habitual del visitante de fin de semana.",
  "Cuando se quiere ampliar el día, Viveiro aporta casco y Covas; Foz, ría y A Rapadoira; Cervo, San Cibrao; As Catedrais o Ribadeo son salidas elegidas de costa y patrimonio. Burela sostiene puerto y playas locales en la rutina; el resto de A Mariña queda a minutos y se vive como ampliación, no como prolongación peatonal del muelle. El hospital en el propio municipio cambia el mapa mental: aquí la costa de trabajo convive con una centralidad sanitaria real.",
  "Cerca del puerto el mar de oficio forma parte de la semana; hacia dentro, A Marosa y Ril son la orilla de arena y piden acercarse. Esa diferencia describe mejor Burela que contar playas de la comarca. Quien acepte lonja, hospital comarcal y salidas de arena cercanas encuentra un pacto claro; quien busque solo quietud de chalé sin muelle se equivoca de villa.",
] as const;

const CASA_NUEVO2 = [
  "En Burela conviene elegir cerca del puerto o villa hacia dentro antes de mirar el precio. Un anuncio que solo diga «Burela» puede ocultar si la casa da a la dársena y a la Feira do Bonito, o al hospital y al mercado con menos ruido de muelle.",
  "Predominan pisos y viviendas de villa funcional; hay poca obra nueva y fibra —Sí en la capa de datos; conviene comprobarla en la dirección exacta—. Junto al puerto notarás ruido de trabajo, salitre y gente de agosto en la feria; hacia dentro, más silencio de calle y hospital cerca.",
  "El precio medio de referencia ronda 1.096 €/m². Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual un piso con ventana a la lonja y otro junto al mercado.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra, el hospital, A Marosa o Ril, y la salida hacia el aeropuerto. En agosto, la Feira do Bonito y el aparcamiento en la playa; en noviembre, la luz, la humedad y el ruido de un día normal de puerto. Burela premia elegir bien el lado; castiga comprar solo la postal de la flota.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "El puerto y la villa hacia dentro no son intercambiables. Una vivienda «en Burela» en el mapa puede significar lonja y ruido de flota cerca, o hospital y mercado a pie con menos dársena en la ventana. Comparar solo el precio inventa un Burela que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el súper y el mercado, el hospital y la playa que se usaría. Cerca del puerto, cómo se oye un día de lonja y la Feira do Bonito. También la luz, la orientación, el aislamiento, la ventilación y señales de humedad; en pisos, escaleras o ascensor; la fibra en esa dirección; y cómo se vive esa misma calle un domingo de agosto y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de villa con servicios y de vivienda cerca del mar, pero lo que decide es el inmueble concreto. Un acceso sencillo, buen estado, luz y un sitio fácil de explicar —villa práctica o puerto bien situado— amplían el abanico de compradores; una casa muy expuesta al ruido de dársena, difícil de mantener o mal situada respecto a la rutina elegida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Burela",
  a2: "92.612 €",
  a3: "128.232 €",
  b2: "74.802 €",
  b3: "103.572 €",
  m2: "1.096 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Burela encaja si atrae una villa donde el hospital, el mercado y el comercio caben en la semana sin salir del municipio —o si se quiere vivir cerca del puerto y de la lonja, con la flota del bonito delante—. Hay que elegir dónde se vive porque no se oye igual la casa. Cerca del puerto ganan el oficio y el ritmo de la dársena; también el ruido de trabajo y, en agosto, la Feira do Bonito. Hacia dentro de la villa el Hospital da Mariña suele quedar a unos cinco minutos, las calles son más quietas y el olor a muelle queda más lejos. El aeropuerto útil pide trayecto: Asturias, alrededor de ochenta y cinco minutos; Santiago, hacia los ciento diez. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia, niebla y humedad.",
  "También encaja si A Marosa y Ril bastan como playas de casi todos los días y se tolera el calendario del puerto —Carmen, Feira do Bonito— eligiendo bien la calle y no la primera fila del muelle.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Burela encaja peor si se busca casco de piedra, muralla o fachada indiana: eso falta aquí —aunque los servicios sean altos, 8/10 en nuestra escala— y importa porque quien quiere esa imagen de villa histórica la encuentra en Viveiro o en Ribadeo, no en Burela. Tampoco si el ruido de puerto y lonja molesta cerca de casa: la flota no es decoración y un día de descarga o de Feira do Bonito se oye.",
  "Y si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en A Marosa sin probar un noviembre ni un día de lonja, suele llevar a sorpresa.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda cerca del puerto y otra hacia dentro de la villa. Desde cada casa: una compra sencilla, el trayecto al hospital, A Marosa o Ril, y la salida hacia el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación un día de lonja o en la Feira do Bonito (ruido, tráfico, gente) y un día cubierto de noviembre (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda, el ascensor si hace falta, y la fibra en la dirección exacta.",
] as const;

const FOTO_COMO_PUERTO = {
  src: "/fotos/a-marina/burela-puerto.jpg",
  pie: "Puerto de Burela desde el mar: flota, lonja verde y villa al fondo",
} as const;

const FOTO_COMO_VILLA = {
  src: "/fotos/a-marina/burela-villa.jpg",
  pie: "Burela hacia dentro: bloques densos y tejados de pizarra",
} as const;

const FOTO_HISTORIA_AYTO = {
  src: "/fotos/a-marina/burela-ayuntamiento.jpg",
  pie: "Casa do Concello de Burela y plaza delante",
} as const;

const FOTO_HISTORIA_PORTO = {
  src: "/fotos/a-marina/burela-porto-real.jpg",
  pie: "Dársena de Burela: pontones, barcas y frente urbano en día gris",
} as const;

const FOTO_MAR_PLAYA = {
  src: "/fotos/a-marina/burela-playa.jpg",
  pie: "A Marosa: arena, rocas y oleaje bajo cielo cubierto",
} as const;

const FOTO_MAR_AMENCER = {
  src: "/fotos/a-marina/burela-amencer.jpg",
  pie: "Amanecer en la costa de Burela: espigón y faro al horizonte",
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

export default function Nuevo2BurelaPage() {
  const ficha = municipioPorSlug("burela");
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
        <Foto src={FOTO_COMO_PUERTO.src} pie={FOTO_COMO_PUERTO.pie} />
        <Foto src={FOTO_COMO_VILLA.src} pie={FOTO_COMO_VILLA.pie} />
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
        <Foto src={FOTO_HISTORIA_AYTO.src} pie={FOTO_HISTORIA_AYTO.pie} />
        <Foto src={FOTO_HISTORIA_PORTO.src} pie={FOTO_HISTORIA_PORTO.pie} />
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
        <Foto src={FOTO_MAR_PLAYA.src} pie={FOTO_MAR_PLAYA.pie} />
        <Foto src={FOTO_MAR_AMENCER.src} pie={FOTO_MAR_AMENCER.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(2).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Casa" varianteTarjetaV1>
        {CASA_NUEVO2.slice(0, 2).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="1.096 €/m²" />
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{CASA_NUEVO2[3]}</p>

        <EnlaceIdealista ambito="municipio" slug={ficha.slug} nombre={ficha.municipio} />

        <div className="mt-6 pt-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--tinta-suave)]">
            Precio y bandas
          </p>
          <p className="mt-1 text-[13px] leading-snug text-[var(--tinta-suave)]">
            Referencia municipal; una vivienda concreta puede separarse de la media.
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
