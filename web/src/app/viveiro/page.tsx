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
 * NUEVO2 — Viveiro (A Mariña).
 * Eje: casco amurallado (comercio a pie, Semana Santa) vs Covas (playa y paseo de ría, verano lleno).
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "A Mariña es la costa de Lugo entre O Vicedo y Ribadeo: Viveiro y su ría, Burela pesquera, Foz, Barreiros y As Catedrais, Ribadeo frente a Asturias. Atlántico abierto, más fresco y gris que las Rías; hospital comarcal y aeropuertos a una hora larga.",
  "Viveiro es la villa con más vida propia todo el año en el tramo oeste: unos quince mil habitantes, casco amurallado, el puerto de Celeiro —lonja y merluza del pincho— y Covas, la playa larga al otro lado de la ría. No es O Vicedo ni Burela: aquí se gana comercio y mesas en enero; a cambio, la Semana Santa llena el casco y el hospital queda en Burela.",
  "Lo que más cambia la vida diaria es dónde queda la casa: en el casco —compra, centro de salud y calles de piedra a pie— o en Covas —arena, paseo y verano más lleno—. En ambos sitios la ría está cerca; no se vive igual la Semana Santa ni el mes de agosto.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Viveiro reúne unos quince mil habitantes en la Mariña occidental, y se siente villa de verdad: el casco amurallado concentra comercio, mesas y calles de piedra alrededor de la Porta de Carlos V —arco renacentista de entrada, también llamado Castelo da Ponte—, y en unos minutos a pie caben el centro de salud, farmacias, súper y el ritmo de quien no cierra en enero. Quien llega de fuera descubre enseguida que hay que elegir. En el casco se puede organizar el día a día básica a pie. En Covas —playa larga de arena fina en ría abrigada, al otro lado del puente sobre el Landro— la postal es otra: toalla, paseo y horizonte de bahía, pero el comercio denso del casco queda un trayecto corto en coche o a pie más largo. En pocos minutos se pasa de una forma de vivir Viveiro a otra, y esa diferencia acaba importando más que la imagen uniforme de «villa de ría» en el mapa.",
  "Un martes de noviembre, en el casco, se puede comprar, pasar por la farmacia y caminar sin depender de Burela para lo diario. Las calles están juntas y hay mesas abiertas: es la villa con más vida propia del tramo oeste. Celeiro —puerto pesquero activo al este de la ría, con lonja y barcos— sostiene el oficio del mar todo el año. Quien elige el casco elige esa comodidad de villa: lo que no elige es el silencio de una urbanización solo de verano. En Covas esa misma mañana es más de orilla y de coches para el súper si no se baja al casco.",
  "Sin coche, el casco aguanta bien la semana básica; Covas, bastante si se acepta cruzar hacia el centro para la compra grande. Desde Viveiro, el Hospital da Mariña —público comarcal en Burela— suele quedar a unos veinticinco minutos; los aeropuertos útiles —Santiago, A Coruña o Asturias— alrededor de los cien minutos según ruta. Hay tren de ancho métrico —la antigua FEVE— y enlace a la A-8 por Cabreiros, pero quien vive en Covas o en parroquias exteriores suele necesitar el volante para hospital, avión o salidas más largas. Burela cubre la sanidad comarcal; Viveiro, a cambio, ofrece villa caminable y ría en el mismo municipio.",
  "Entre agosto y noviembre cambia sobre todo el ritmo del casco y de Covas. La Semana Santa —declarada de interés turístico internacional— corta calles, concentra procesiones, ruido y mucha gente durante varios días: quien viva en el casco debe contarlas como parte del calendario, no como excepción. En julio y agosto Covas y el paseo se llenan de toallas, coches y terrazas; Celeiro sigue siendo puerto de trabajo. Vivir en primera línea del casco o junto al paseo de Covas significa semanas más ruidosas. Meses después, en un martes húmedo, el mismo casco vuelve a sentirse villa de comercio local. No son dos Viveiro distintos: son dos ritmos que forman parte de vivir aquí todo el año.",
  "También por eso la elección entre el casco y Covas cambia bastante la vida diaria. En el casco se tiene la compra y las mesas cerca a diario, a cambio de la Semana Santa intensa y de un verano que también se nota en el centro. En Covas se gana la playa y el paseo en la puerta, a cambio de más ocupación en agosto y de un trayecto corto al comercio denso. Esa diferencia de sitio acaba importando mucho más que la postal vista en un mapa.",
] as const;

const CLIMA_NUEVO2 = [
  "En Viveiro el clima respecto a Mallorca se siente distinto desde la primera semana: menos sol, más días de lluvia y humedad que se nota en casa. La referencia de zona ronda 1.850 horas de sol al año, unos cuarenta días despejados y cerca de 1.150 mm de lluvia en unos ciento cincuenta días —casi la mitad del año—. Mallorca ronda 2.800 horas de sol. La niebla es alta; el viento, medio —la ría suele amansar un poco el viento respecto a la costa abierta de Xove—. También aquí llovizna en julio y agosto. Un día puede empezar gris, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "En verano el contraste se nota aún más. Medias alrededor de 18,5 °C: no pasas el calor de Baleares. En Covas el agua de ría suele estar entre 17 y 19 °C: más usable que el Cantábrico abierto cuando el oleaje no invita. Quien vive en el casco lo nota al salir a la calle húmeda; quien vive en Covas, al abrir la ventana a la bahía. Un frente gris de noviembre cuenta más que un sábado de sol en el paseo.",
] as const;

const VIVIR_NUEVO2 = [
  "Llegar de Mallorca a Viveiro es cambiar de escala: se pasa a una villa de ría con casco caminable —o a Covas, con playa delante—, no a un pueblo mínimo como O Vicedo ni a una ciudad. En Mallorca puede ser habitual pensar primero en kilómetros; aquí unos pocos minutos separan el súper del paseo si vives en el casco —o convierten la misma semana en cruces hacia el centro si vives en Covas—. Esa elección modifica decisiones tan sencillas como salir a comprar, bajar a la playa o dejar el coche.",
  "También cambia la relación entre coche, costa y hospital. En el casco gran parte del día a día cabe a pie; Burela pide coche para urgencias y especialidades. En Covas el mar queda debajo y el comercio denso un poco más lejos. A cambio, la villa no se apaga en enero. Ir y volver a Mallorca pide trayecto largo: aeropuerto usable alrededor de los cien minutos —Santiago suele cubrir Palma casi todo el año—. Se oye gallego en el casco y en Celeiro; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. La Semana Santa llena el casco de procesiones; agosto llena Covas de toallas; en noviembre el mismo centro recupera holgura y sigue abierto. Para alguien acostumbrado a Mallorca, donde también existe presión estival, la diferencia está en la escala: el cambio se concentra en una villa y una playa de ría, no en una capital. Vivir aquí todo el año significa aceptar esas dos caras —casco con fiesta intensa y Covas con verano concurrido— como partes de una misma vida, no elegir únicamente un sábado de sol en la Porta de Carlos V.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Tras el incendio de 1540, la villa levantó la Porta de Carlos V —arco plateresco terminado hacia 1554, también llamado Porta da Vila— como símbolo de reconstrucción y de orgullo urbano. El casco amurallado, las calles comerciales y una escala de villa con feria y comercio organizaron la vida mucho antes del veraneo de Covas. Quien llega solo por la playa descubre que Viveiro se sostiene primero como villa de piedra y mercado. Esa herencia explica autonomía cotidiana fuerte en el centro.",
  "Celeiro sostiene la otra historia visible: puerto de oficio, lonja y merluza del pincho. El 25 de julio, por Santiago, hay ambiente de fiesta y movimiento portuario que se nota al vivir cerca. Celeiro no es un barrio decorativo: es el polo marinero del municipio, con olores, horarios y tráfico distintos del casco monumental. Quien compre allí elige oficio delante; quien compre en el casco elige plaza y comercio.",
  "La Semana Santa añade la capa que más impacta al vivir en el casco: interés turístico internacional desde 2013, cofradías, procesiones y ocupación hotelera que alteran calles, ruido y aparcamiento en fechas concretas. No es un detalle de folleto: es un pico anual que hay que conocer antes de elegir vivienda junto al recorrido. El resto del año la villa recupera ritmo local. Esa oscilación forma parte del trato de vivir en el centro.",
  "Hoy, comprar aquí es elegir entre esas herencias: casco con comercio y Semana Santa juntos, o Covas con playa delante y verano lleno, o Celeiro con lonja. El anuncio dice «Viveiro» en los tres casos. Quien acepte villa, puerto y arenal repartidos encuentra un mapa claro; quien espere silencio absoluto en primera línea de Covas en agosto se equivoca de temporada.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar de casi todos los días aquí es ría —agua más quieta que en el Cantábrico abierto—, no Xilloi ni Doniños. Quien vive en el casco camina frente de ría y convierte Covas en salida corta; quien vive en Covas tiene el arenal delante y el súper denso del casco detrás. En verano el agua suele rondar los 19–21 °C. Un martes de noviembre la ría respira; un domingo de agosto Covas se llena. Celeiro añade la orilla de trabajo: dársena y lonja, no playa de baño. Tres puertas distintas al agua dentro del mismo concello.",
  "Para caminar sin convertir la tarde en plan organizado, el casco y el frente de ría son la experiencia más sencilla: calles, puentes y lámina abrigada. Covas ofrece el baño de arena más claro del municipio, con un perfil de veraneo que en temporada altera aparcamiento y ritmo. Desde Celeiro el paseo portuario impone otro ritmo, de oficio y de merluza. Quien confunda los tres polos compra a ciegas.",
  "Cuando se quiere otra salida dentro del municipio, el Monte San Roque abre la vista de toda la ría; el Souto da Retorta aporta bosque de eucaliptos monumentales. Ambas piden desplazarse y más tiempo que bajar a Covas. Burela cubre hospital; Xove y Cervo amplían costa abierta de Cantábrico. Viveiro sostiene villa y ría; el resto de A Mariña completa el mapa a minutos.",
  "En el casco la ría forma parte de la semana sin ser playa de puerta; en Covas la orilla es la puerta de casa y el súper serio queda en la villa; en Celeiro manda el puerto. Esa diferencia describe mejor Viveiro que inventariar playas de A Mariña. Elegir polo pesa más que el nombre en el portal. Quien acepte Semana Santa en el casco y agosto en Covas como picos del año encuentra el trato completo de villa, arenal y lonja en un solo municipio.",
] as const;

const CASA_NUEVO2 = [
  "En Viveiro el casco y Covas no ofrecen la misma semana. Un anuncio que solo diga «Viveiro» puede ocultar si la casa da a calles de piedra y a la Semana Santa, o al paseo de Covas y al verano cargado.",
  "En el casco abundan pisos y viviendas de piedra; en Covas, tipologías más abiertas junto a la playa. Junto a la ría notarás humedad; en el casco, además, aparcamiento y ruido en Semana Santa; en Covas, ocupación de agosto. Hay fibra y poca obra nueva.",
  "El precio medio de referencia ronda 1.302 €/m² —por encima de O Vicedo, por debajo de Ribadeo—. Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual un piso junto a la Porta de Carlos V y una vivienda frente a Covas.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra, la playa, y la salida hacia el hospital de Burela o el aeropuerto. En Semana Santa, el casco; en agosto, Covas; en noviembre, la luz y la humedad. Viveiro premia elegir bien el lado; castiga comprar solo la postal del arco.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "El casco y Covas no son intercambiables. Una vivienda «en Viveiro» en el mapa puede significar súper y mesas a pie con Semana Santa intensa, o playa delante con verano lleno y un trayecto corto al comercio denso. Celeiro añade otra rutina de puerto. Comparar solo el precio inventa un Viveiro que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el súper que se usaría, el coche y la playa. En el casco, cómo se vive la calle en Semana Santa; en Covas, el aparcamiento de agosto. También la luz, la orientación, el aislamiento, la ventilación y señales de humedad; en pisos antiguos, escaleras o ascensor; la fibra en esa dirección; y cómo se siente esa misma casa un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de villa todo el año y de veraneo junto a Covas, pero lo que decide es el inmueble concreto. Un acceso sencillo, buen estado, luz y un sitio fácil de explicar —casco práctico o Covas bien situada— amplían el abanico de compradores; una casa muy expuesta, difícil de mantener o mal situada respecto a la rutina elegida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Viveiro",
  a2: "110.019 €",
  a3: "152.334 €",
  b2: "88.862 €",
  b3: "123.039 €",
  m2: "1.302 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Viveiro encaja si atrae una villa de ría con vida propia todo el año: el casco caminable —compra y mesas cerca— o Covas, con la playa delante. Hay que elegir dónde se vive porque no se vive igual. En el casco la semana cotidiana se resuelve cerca; la Semana Santa llena calles y cambia el ritmo. En Covas ganan la arena y el paseo, pero el comercio denso pide cruzar al casco y agosto se nota más en los accesos. El Hospital da Mariña queda en Burela, a unos veinticinco minutos; el aeropuerto útil, alrededor de cien. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia, niebla y humedad.",
  "También encaja si el baño de casi todos los días puede ser de ría —Covas, Area o Sacido— y se tolera la Semana Santa en el casco y el verano en Covas, eligiendo bien la calle y no la primera fila del recorrido festivo o del paseo.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Viveiro encaja peor si se necesita hospital a pie o aeropuerto a minutos: aquí la villa es cómoda para la semana, pero el hospital está en Burela y el aeropuerto a una hora larga. Tampoco si se busca el aislamiento extremo de O Vicedo, o si se confunde la caminabilidad del casco con Covas —donde el comercio denso pide cruzar—.",
  "Y si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en la Porta de Carlos V sin probar un noviembre ni la Semana Santa, suele llevar a sorpresa.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el casco y otra en Covas. Desde cada casa: una compra sencilla, el trayecto a la playa que se usaría, y la salida hacia el hospital de Burela y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en Semana Santa o en agosto en Covas (aparcamiento, ruido, gente) y un día cubierto de noviembre en el casco (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda, el ascensor si hace falta, y la fibra en la dirección exacta.",
] as const;

const FOTO_COMO_CASCO = {
  src: "/fotos/a-marina/viveiro-porta.jpg",
  pie: "Porta de Carlos V: entrada al casco de Viveiro",
} as const;

const FOTO_COMO_COVAS = {
  src: "/fotos/a-marina/viveiro-covas.jpg",
  pie: "Covas: playa de ría y Os Castelos",
} as const;

const FOTO_HISTORIA_CELEIRO = {
  src: "/fotos/a-marina/viveiro-celeiro.jpg",
  pie: "Puerto de Celeiro desde la orilla",
} as const;

const FOTO_HISTORIA_VISTA = {
  src: "/fotos/a-marina/viveiro-casco.jpg",
  pie: "Viveiro y la ría desde el monte",
} as const;

const FOTO_MAR_RIA = {
  src: "/fotos/a-marina/viveiro-ria.jpg",
  pie: "Ría de Viveiro hacia Covas",
} as const;

const FOTO_MAR_MIRADOR = {
  src: "/fotos/a-marina/viveiro-identidad.jpg",
  pie: "Mirador sobre la ría de Viveiro",
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

export default function Nuevo2ViveiroPage() {
  const ficha = municipioPorSlug("viveiro");
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
        <Foto src={FOTO_COMO_CASCO.src} pie={FOTO_COMO_CASCO.pie} />
        <Foto src={FOTO_COMO_COVAS.src} pie={FOTO_COMO_COVAS.pie} />
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
        <Foto src={FOTO_HISTORIA_CELEIRO.src} pie={FOTO_HISTORIA_CELEIRO.pie} />
        <Foto src={FOTO_HISTORIA_VISTA.src} pie={FOTO_HISTORIA_VISTA.pie} />
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
        <Foto src={FOTO_MAR_RIA.src} pie={FOTO_MAR_RIA.pie} />
        <Foto src={FOTO_MAR_MIRADOR.src} pie={FOTO_MAR_MIRADOR.pie} />
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="1.302 €/m²" />
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
