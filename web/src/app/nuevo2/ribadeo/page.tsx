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
 * NUEVO2 — Ribadeo (A Mariña).
 * Eje: casco / ría del Eo (villa indiana, autonomía a pie) vs costa atlántica / accesos a As Catedrais (arcos, presión turística; no playa a pie desde el centro).
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "A Mariña es la costa de Lugo entre O Vicedo y Ribadeo: Viveiro y su ría, Burela pesquera, Foz, Barreiros y As Catedrais, Ribadeo frente a Asturias. Atlántico abierto, más fresco y gris que las Rías; hospital comarcal y aeropuertos a una hora larga.",
  "Ribadeo es villa de unos diez mil habitantes en la ría del Eo, frontera con Asturias. No es Foz ni Barreiros: aquí se gana casco indiano, comercio a pie y ría cotidiana; a cambio, las playas atlánticas —incluida As Catedrais— piden salida y el hospital queda fuera del municipio.",
  "Lo que más cambia la vida diaria es dónde queda la casa: en el casco o junto a la ría —puerto, calles, servicios— o hacia la costa atlántica y los accesos a As Catedrais —arcos de piedra, marea y más presión de visitantes en temporada—. En ambos sitios se vive en Ribadeo; no se vive igual la semana.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Ribadeo reúne unos diez mil habitantes y se siente villa completa: el casco —Praza de España, Torre dos Moreno, calles con casas de indianos— concentra comercio, farmacias, biblioteca, deporte y buena parte del día a día a pie. Abajo queda el puerto en la ría del Eo —la lámina de agua que separa Galicia de Asturias—; al otro lado se ve Castropol. Quien llega de fuera descubre enseguida que hay que elegir. En el casco se puede comprar, pasear y resolver gestiones a pie. Hacia As Catedrais —Praia de Augas Santas, arcos de piedra abiertos con marea baja, a unos diez o doce minutos en coche— la postal es otra: destino famoso, aparcamiento y gente en temporada, sin ser la playa que aparece al salir andando del centro. En pocos minutos se pasa de una forma de vivir Ribadeo a otra, y esa diferencia acaba importando más que la imagen uniforme de «pueblo de As Catedrais» en el mapa.",
  "Un martes de noviembre, en el casco, se puede hacer compra, pasar por el centro de salud y caminar hacia el puerto o hacia Illa Pancha —islote con faro unido a tierra por una pasarela, al final de la costa del municipio—. Los servicios llegan a 8/10 en nuestra escala: altos para A Mariña. Quien elige el casco elige autonomía cotidiana; lo que no elige es playa atlántica debajo de la ventana. Hacia los accesos de As Catedrais esa misma mañana es más de costa abierta; el comercio denso pide volver a la villa.",
  "Sin coche, la villa aguanta bien la semana básica. El hospital queda fuera: la referencia práctica habitual es el Hospital da Mariña en Burela; la capa de datos también cita Jarrio —en Coaña, Asturias— a unos treinta minutos. Conviene comprobar el circuito actual. El aeropuerto de Asturias suele quedar alrededor de sesenta minutos —mejor situado que desde el oeste de A Mariña—; Santiago, hacia los ciento veinte. Hay tren de ancho métrico y el puente dos Santos —viaducto de la A-8 sobre la ría— conecta con Asturias. Ribadeo, a cambio, ofrece frontera usable y una villa que no depende solo del turismo de los arcos.",
  "Entre julio y septiembre cambia sobre todo el ritmo de As Catedrais y del casco en fiestas. El segundo fin de semana de julio, Ribadeo Indiano llena calles con recreación de época. El Carmen concentra procesión marítima. Hacia el 8 de septiembre, las fiestas de Santa María do Campo —Semana Grande, con el desfile del Coco y la Coca— animan la villa y cierran con fuegos sobre la ría. En temporada, los accesos a As Catedrais se saturan. Meses después, en un martes húmedo, el casco sigue abierto: comercio y ría no se apagan. No son dos Ribadeo distintos: son dos ritmos que forman parte de vivir aquí todo el año.",
  "También por eso la elección entre casco y costa atlántica cambia bastante la vida diaria. En el casco se ganan calles, compra y ría cerca; la playa de arcos pide coche. Hacia As Catedrais se gana la costa famosa delante o cerca; agosto se nota más en tráfico y gente, y el comercio denso queda en la villa. Esa diferencia de sitio acaba importando mucho más que la postal vista en un mapa.",
] as const;

const CLIMA_NUEVO2 = [
  "Ribadeo supone un cambio climático claro respecto a Mallorca. Hay bastante menos sol, la lluvia aparece con mucha más frecuencia y la humedad se nota en casa. La referencia local ronda 1.950 horas de sol al año, unos cuarenta días despejados y cerca de 1.000 mm de lluvia en unos ciento cuarenta días —casi la mitad del año—. Mallorca ronda 2.800 horas de sol. La niebla es media —algo menos pesada que en el extremo oeste de A Mariña—; el viento, medio. También aquí llovizna en julio y agosto. Un día puede empezar gris, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 18,5 °C: no pasas el calor de Baleares. En As Catedrais o en Os Bloques —otra orilla atlántica del municipio— el agua suele estar entre 17 y 19 °C. La ría ofrece agua más quieta para mirar y pasear, no el mismo baño de arenal abierto. Quien vive en el casco lo nota al salir a la calle húmeda; quien vive hacia la costa atlántica, al abrir la ventana al oleaje. Un frente gris de noviembre cuenta más que un sábado de sol bajo los arcos.",
] as const;

const VIVIR_NUEVO2 = [
  "De Mallorca a Ribadeo se llega a una villa de frontera con casco propio —o a una casa hacia As Catedrais—, no a un pueblo mínimo ni a una ciudad grande. En Mallorca puede ser habitual pensar primero en kilómetros; aquí unos pocos minutos separan la Praza de España del puerto —o convierten la misma semana en trayectos si vives cerca de los arcos y necesitas el súper—. Esa elección modifica decisiones tan sencillas como salir a comprar, ir a la ría o dejar el coche.",
  "También cambia la relación entre coche, ría y hospital. En el casco gran parte del día a día cabe a pie; el hospital pide salir hacia Burela o, según circuito, hacia Jarrio en Asturias. La ría y el puerto quedan integrados en la villa; As Catedrais no. Ir y volver a Mallorca suele ser más sencillo aquí que en el oeste de A Mariña: Asturias ronda sesenta minutos; Santiago, hacia los ciento veinte —suele cubrir Palma casi todo el año—. Se oye gallego en la villa; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. Julio y septiembre llenan Ribadeo Indiano, el Carmen y la Semana Grande; As Catedrais concentran visitantes en marea baja de temporada. En noviembre el casco sigue abierto —compra, mesas, ría— aunque más quieto. Para alguien acostumbrado a Mallorca, donde también existe presión estival, la diferencia está en la escala: el cambio se concentra en una villa de frontera y un destino de arcos, no en una capital. Vivir aquí todo el año significa aceptar esas dos caras —villa cotidiana y costa famosa saturada en verano— como partes de una misma vida, no elegir únicamente la foto de As Catedrais.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Quienes regresaron de América levantaron en Ribadeo casas llamativas —Torre dos Moreno, barrio de San Roque— y dejaron una villa de prestigio comercial junto al puerto. La Praza de España concentra ayuntamiento, iglesia y convento. Esa capa de emigración y comercio es la que organiza el casco; As Catedrais vinieron después como imán natural, no como origen de la villa.",
  "La ría del Eo y el puente dos Santos —abierto en 1987 y desdoblado después para la autovía— convirtieron Asturias en vecina cotidiana: Castropol queda al otro lado del agua. Illa Pancha —faro en el islote— marca el final de la costa del municipio hacia el Cantábrico abierto.",
  "As Catedrais —Praia de Augas Santas— añadieron el gran imán natural del siglo XXI: arcos, marea y cupos de acceso en temporada. Forman parte del término, pero no sustituyen la vida del casco. Quien conozca Ribadeo solo por esa playa debe contar también con la villa que funciona cuando desaparecen las colas.",
  "Quien compra aquí elige entre esas herencias: casco y ría con autonomía a pie, o costa atlántica cerca de As Catedrais con más presión de temporada. No es el mismo Ribadeo en un anuncio genérico.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El agua de casi todos los días en el casco es la ría del Eo: la desembocadura ancha del río Eo entre Galicia y Asturias, agua abrigada con puerto, miradores y orilla frente a Castropol. No es playa atlántica de arcos: es lámina de ría, barcos y paseo desde la villa. As Catedrais —Praia de Augas Santas— es otra cosa del mismo municipio: costa abierta, arcos de piedra que solo se ven bien con marea baja, y afluencia que en temporada pide cupo y coche desde el casco. Quien vive junto a la Praza de España puede bajar al puerto andando o en un trayecto corto; quien vive hacia los arcos convierte la villa en destino de coche para la compra. Un martes de junio en la ría suele haber holgura; un domingo de agosto en As Catedrais el acceso se llena.",
  "Para caminar sin convertir la tarde en plan de coche, el tramo villa–puerto–Illa Pancha convierte la costa del municipio en horizonte: pasarela, faro y ola abierta. No es un boulevard llano de ciudad grande; hay desnivel entre el casco alto y el puerto —hay ascensor panorámico que une ambos—.",
  "Cuando se quiere ampliar el día, Castropol aporta la orilla asturiana; Barreiros, playas largas; Foz, villa y A Rapadoira; Burela, hospital. Aquí el día a día pide elegir casco o costa atlántica; el hospital, salir.",
  "En el casco la ría forma parte de la puerta; hacia As Catedrais los arcos son la puerta y el comercio denso queda fuera. Burela o Jarrio cubren la sanidad hospitalaria cuando hace falta lo que Ribadeo no tiene.",
] as const;

const CASA_NUEVO2 = [
  "En Ribadeo el casco junto a la ría y la costa hacia As Catedrais no se parecen. Un anuncio que solo diga «Ribadeo» puede ocultar si la casa da a calles caminables y al puerto, o a un acceso saturado en temporada de arcos.",
  "En el casco abundan pisos y casas con escaleras o ascensor a comprobar; hacia la costa, viviendas más ligadas al veraneo. Junto a la ría notarás humedad y salitre; en el casco alto, pendientes. La fibra es Sí en la capa de datos; conviene comprobarla dirección a dirección. Hay poca obra nueva.",
  "El precio medio de referencia ronda 1.845 €/m². Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual un piso en el casco y una casa cerca de As Catedrais.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra, la ría o los arcos, y la salida hacia el hospital o el aeropuerto de Asturias. En agosto, el aparcamiento en As Catedrais; en noviembre, la luz y la humedad en el casco. Ribadeo premia elegir bien el lado; castiga comprar solo la postal de los arcos.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "El casco y la costa de As Catedrais no son intercambiables. Una vivienda «en Ribadeo» en el mapa puede significar comercio y ría a pie sin playa atlántica debajo, o arcos cerca con coche para casi cada recado de villa. Comparar solo el precio inventa un Ribadeo que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el súper, el puerto o As Catedrais, y el hospital. En el casco, escaleras, ascensor y desnivel hasta el puerto. Hacia los arcos, aparcamiento y ruido en temporada. También la luz, la orientación, el aislamiento, la ventilación y señales de humedad; la fibra en esa dirección; y cómo se vive esa misma calle un domingo de agosto y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de villa con servicios y de vivienda cerca de As Catedrais, pero lo que decide es el inmueble concreto. Un acceso sencillo, buen estado, luz y un sitio fácil de explicar —casco práctico o costa bien situada— amplían el abanico de compradores; una casa muy expuesta al turismo de temporada, difícil de mantener o mal situada respecto a la rutina elegida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Ribadeo",
  a2: "155.903 €",
  a3: "215.865 €",
  b2: "125.921 €",
  b3: "174.353 €",
  m2: "1.845 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Ribadeo encaja si atrae una villa con casco indiano, comercio a pie y ría del Eo delante —puerto, miradores, frontera con Asturias— o si se quiere vivir más cerca de As Catedrais —Praia de Augas Santas, arcos de piedra del propio municipio—. Hay que elegir dónde se vive porque no se vive igual. En el casco gran parte del día a día cabe sin salir; la playa atlántica pide coche. Hacia As Catedrais ganan los arcos; el comercio denso y buena parte de la vida anual quedan en la villa. El hospital está fuera —Burela o, según circuito, Jarrio en Asturias—. El aeropuerto de Asturias suele quedar alrededor de sesenta minutos. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia, humedad y niebla media.",
  "También encaja si se tolera el calendario de verano —Ribadeo Indiano, Carmen, Semana Grande, colas en As Catedrais— eligiendo bien la calle y no la primera fila del acceso a los arcos.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Ribadeo encaja peor si el hospital debe quedar en el propio municipio: aquí falta —aunque los servicios cotidianos sean altos, 8/10— y eso importa porque urgencias hospitalarias y muchas pruebas piden trayecto a Burela o a Jarrio. Tampoco si se quiere una playa atlántica de baño integrada a pie en el casco: la ría es cotidiana; As Catedrais no. Y si se confunde la fama de los arcos con la vida de la villa, suele haber sorpresa.",
  "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en As Catedrais sin probar un noviembre en el casco ni un agosto en los accesos.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el casco o junto a la ría y otra hacia As Catedrais. Desde cada casa: una compra sencilla, el trayecto al puerto o a los arcos, y la salida hacia el hospital y el aeropuerto de Asturias en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en temporada en As Catedrais (aparcamiento, cupos, gente) y un día cubierto de noviembre en el casco (luz, humedad, mesas abiertas). Y comprobar escaleras o ascensor, el estado de la vivienda y la fibra en la dirección exacta.",
] as const;

const FOTO_COMO_VILLA = {
  src: "/fotos/a-marina/ribadeo-identidad.jpg",
  pie: "Ribadeo desde el puente: villa en la ladera y puerto en la ría del Eo",
} as const;

const FOTO_COMO_PUERTO = {
  src: "/fotos/a-marina/ribadeo-puerto.jpg",
  pie: "Puerto de Ribadeo: dársena, pontones y caserío subiendo la cuesta",
} as const;

const FOTO_HISTORIA_ADUANA = {
  src: "/fotos/a-marina/ribadeo-villa.jpg",
  pie: "Edificio de la Aduana en Ribadeo: arcos de granito y banderas",
} as const;

const FOTO_HISTORIA_PUENTE = {
  src: "/fotos/a-marina/ribadeo-puente.jpg",
  pie: "Puente dos Santos sobre la ría: enlace de Ribadeo con Asturias",
} as const;

const FOTO_MAR_ILLA = {
  src: "/fotos/a-marina/ribadeo-ilha-pancha.jpg",
  pie: "Illa Pancha: faro blanco y negro en el islote al final de la costa",
} as const;

const FOTO_MAR_CATEDRAIS = {
  src: "/fotos/a-marina/ribadeo-catedrais.jpg",
  pie: "As Catedrais: arco de piedra y agua turquesa a marea baja",
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

export default function Nuevo2RibadeoPage() {
  const ficha = municipioPorSlug("ribadeo");
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
        <Foto src={FOTO_COMO_VILLA.src} pie={FOTO_COMO_VILLA.pie} />
        <Foto src={FOTO_COMO_PUERTO.src} pie={FOTO_COMO_PUERTO.pie} />
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
        <Foto src={FOTO_HISTORIA_ADUANA.src} pie={FOTO_HISTORIA_ADUANA.pie} />
        <Foto src={FOTO_HISTORIA_PUENTE.src} pie={FOTO_HISTORIA_PUENTE.pie} />
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
        <Foto src={FOTO_MAR_ILLA.src} pie={FOTO_MAR_ILLA.pie} />
        <Foto src={FOTO_MAR_CATEDRAIS.src} pie={FOTO_MAR_CATEDRAIS.pie} />
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="1.845 €/m²" />
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
