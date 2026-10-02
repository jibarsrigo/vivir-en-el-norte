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
 * NUEVO2 — Ferrol (Golfo Ártabro e Ferrol).
 * Eje: ciudad (Magdalena / ensanche, hospital y servicios a pie) vs costa atlántica (Doniños / San Xurxo, coche y oleaje).
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Golfo Ártabro e Ferrol reúne las rías y la costa alrededor de A Coruña: Oleiros al este de la ría do Burgo; Sada y Bergondo hacia Betanzos; Miño con la Praia Grande; Ares y Redes; y Ferrol al norte. El hospital y el aeropuerto de Alvedro quedan cerca. El cielo suele ser más gris y lluvioso que en las Rías Baixas.",
  "Ferrol es la ciudad naval de esa zona: unos sesenta y cinco mil habitantes —fueron cerca de ochenta o noventa mil hace unas décadas—. No es Oleiros ni Ares: aquí hay hospital en el propio municipio, comercio urbano y el barrio ilustrado de la Magdalena; a cambio, las grandes playas atlánticas —Doniños, San Xurxo— no están a pie desde el centro y el tejido comercial ha perdido brillo.",
  "Lo que más cambia la vida diaria es dónde queda la casa: en la ciudad —Magdalena o ensanche, con hospital y compra a pie— o hacia la costa atlántica —Doniños y San Xurxo, playa brava, viento y coche para casi todo lo urbano—. No se vive igual la semana ni el mes de agosto.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Ferrol reúne unos sesenta y cinco mil habitantes en la ría que lleva su nombre, y se siente ciudad de verdad: el barrio de la Magdalena —ensanche del siglo XVIII, calles rectas y plazas— concentra comercio, bares y el escenario de la Semana Santa; cerca quedan el arsenal militar y los astilleros de Navantia, que siguen marcando empleo y carácter. Quien llega de fuera descubre enseguida que hay que elegir. En la Magdalena o en el ensanche se puede ir andando a la compra, al médico y a gestiones urbanas. Hacia Doniños —playa atlántica con dunas y laguna, a unos diez o quince minutos en coche— o San Xurxo —arenal abierto vecino— la postal es otra: oleaje, viento y salitre, pero sin el súper ni el hospital debajo de casa. En pocos minutos se pasa de una forma de vivir Ferrol a otra, y esa diferencia acaba importando más que la imagen uniforme de «ciudad naval» en el mapa.",
  "Un martes de noviembre, en la Magdalena, se puede organizar el día a día urbana sin salir del municipio: farmacia, comercio, cultura —el Centro Cultural Carvalho Calero mantiene actividad fuera de verano— y el hospital Arquitecto Marcide —público de referencia de Ferrolterra— a unos cinco minutos. Las calles se notan más quietas que en A Coruña; hay locales cerrados y un ritmo de ciudad que ha perdido población durante años, aunque en 2024 y 2025 el padrón ha vuelto a subir un poco. Quien elige el centro elige esa autonomía urbana: lo que no elige es playa atlántica en la puerta. Quien elige Doniños elige la orilla brava y el coche para casi cada recado de ciudad.",
  "Sin coche, la ciudad aguanta muy bien la semana; la costa atlántica, casi no. Desde el centro, Alvedro —aeropuerto de A Coruña— suele quedar a unos treinta y cinco minutos; Santiago-Lavacolla, con más destinos, alrededor de una hora. Hay tren, bus y acceso a la AP-9. Navantia y la Armada traen gente de fuera —alquiler y compra se notan más tensos en los últimos años—, pero el precio de compra sigue siendo de los más bajos entre las ciudades gallegas. Ferrol, a cambio de no ser Oleiros, ofrece hospital, ciudad y metro cuadrado más asequible.",
  "Entre Semana Santa, agosto y noviembre cambia sobre todo el ritmo del centro y de la costa. La Semana Santa ferrolana —de Interés Turístico Internacional, con más de veinte procesiones y cinco cofradías— corta calles de la Magdalena y de Ferrol Vello, concentra gente y, si llueve, puede suspender desfiles. En verano Doniños y San Xurxo se llenan de toallas y coches: eso es salida, no playa cotidiana del ensanche. Vivir en el recorrido de las procesiones significa semanas movidas en primavera; vivir junto a Doniños, verano de aparcamiento y viento. Meses después, en un martes húmedo, el mismo centro vuelve a sentirse ciudad de trabajo naval. No son dos Ferroles distintos: son dos ritmos que forman parte de vivir aquí todo el año.",
  "También por eso la elección entre la ciudad y la costa atlántica cambia bastante la vida diaria. En la Magdalena se tiene el hospital y la compra cerca a diario, a cambio de un comercio más apagado que en A Coruña y de no tener Doniños debajo. Hacia la costa se gana playa brava y horizonte, a cambio de coche para casi todo lo urbano. Esa diferencia de sitio acaba importando mucho más que la postal del arsenal vista en un mapa.",
] as const;

const CLIMA_NUEVO2 = [
  "Quien llega a Ferrol desde Mallorca encuentra otro clima del todo: menos sol, más días de lluvia y humedad que se nota en casa. La referencia de zona ronda 1.950 horas de sol al año y cerca de 1.100 mm de lluvia; el cielo ferrolano se nota de los más grises del golfo. Mallorca ronda 2.800 horas de sol. El viento y la niebla son medios. También aquí llovizna en julio y agosto. Un día puede empezar gris, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "En verano el contraste se nota aún más. Medias alrededor de 19 °C: no pasas el calor de Baleares. En Doniños o San Xurxo el agua atlántica suele estar entre 16 y 18 °C, con oleaje: baño bravo de salida, no de puerta del centro. Quien vive en la Magdalena lo nota al salir a la calle; quien vive hacia la costa, al abrir la ventana al viento. Un frente gris de noviembre cuenta más que un sábado de sol en Doniños.",
] as const;

const VIVIR_NUEVO2 = [
  "Cambiar Mallorca por Ferrol no es solo cambiar de clima: se pasa a una ciudad naval con hospital propio, no a una urbanización como Oleiros ni a una villa pequeña como Ares. En Mallorca puede ser habitual pensar primero en kilómetros; aquí unos pocos minutos separan el súper del hospital si vives en el centro —o convierten la misma semana en trayectos en coche si vives hacia Doniños—. Esa elección modifica decisiones tan sencillas como salir a comprar, bajar a la playa o dejar el coche.",
  "También cambia la relación entre coche, costa y servicios. En la Magdalena gran parte del día a día cabe a pie; las playas atlánticas piden coche. A cambio, el Arquitecto Marcide y el privado Juan Cardona quedan en el propio municipio: eso distingue Ferrol del resto del golfo. Ir y volver a Mallorca: Alvedro a unos treinta y cinco minutos, Santiago-Lavacolla a unos sesenta y cinco. Se oye gallego en el barrio; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. La Semana Santa llena la Magdalena de procesiones; agosto llena Doniños de toallas; en noviembre el centro recupera un ritmo más quieto de ciudad de trabajo. Para alguien acostumbrado a Mallorca, donde también existe presión estival, la diferencia está en la escala y en el tipo de mar: aquí el verano de playa no empieza en la puerta del ensanche. Vivir aquí todo el año significa aceptar esas dos caras —ciudad naval con comercio desigual y Atlántico bravo como salida— como partes de una misma vida, no elegir únicamente un sábado de sol en Doniños.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "En el siglo XVIII, con Carlos III, la villa marinera se convierte en ciudad de nueva planta: primero Esteiro, barrio de obreros del astillero; después, desde 1761, la Magdalena —calles en cuadrícula, casas con galerías, pensada para militares y burguesía—. En 1984 ese barrio fue declarado conjunto histórico-artístico. Queda así una ciudad que mira al puerto y a la Armada, no un chalé de corona. Ferrol se entiende como ciudad arsenal: la Armada, los astilleros y el urbanismo ilustrado del barrio de La Magdalena organizan la identidad.",
  "El arsenal militar y los astilleros —hoy Navantia— organizaron empleo, población y carácter durante siglos. La ciudad llegó a rozar los noventa mil habitantes; el declive industrial explica buena parte del vaciado demográfico posterior. Aun así, las visitas al Arsenal y a Navantia se agotan en Semana Santa, y la carga de trabajo naval vuelve a tensionar alquiler y compra en Ferrolterra. Esa historia industrial y militar explica una escala urbana completa, distinta de las villas de ría vecinas.",
  "En la boca de la ría, el castillo de San Felipe —fortaleza del siglo XVI–XVIII— custodia la entrada frente a La Palma, en el otro lado. Hacia el Atlántico abierto, Cabo Prior y Prioriño cierran el horizonte bravo. Ferrol Vello guarda la trama más antigua, anterior a la Magdalena. La Semana Santa —más de cuatro siglos de cofradías ligadas a gente llegada a trabajar en astilleros y Marina— añade la capa cultural que se ve en las calles cada primavera. El puerto y la ría de Ferrol marcaron empleo, demografía y un carácter de ciudad trabajadora.",
  "Hoy conviven las dos escalas en el mismo municipio: la Magdalena y el ensanche, con ciudad y hospital a mano; y la costa de Doniños o San Xurxo, con playa atlántica y coche para lo urbano. Elegir casa es elegir cuál de esas dos historias se vive cada día. Hoy comprar aquí es decidir barrio —Magdalena, Esteiro, periferia— sabiendo que la ciudad concentra hospital y servicios. El anuncio de zona cambia la semana entera.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar de casi todos los días en el centro no es toalla: es ría, puerto y paseos urbanos. Las grandes playas atlánticas —Doniños, San Xurxo, y A Frouxeira en Valdoviño a un trayecto mayor— piden coche desde la Magdalena. Un martes de junio suele haber sitio en Doniños; un domingo de agosto el acceso se llena. El agua cotidiana es ría de Ferrol: dársena, muelles y una lámina de trabajo antes que de folleto playero.",
  "Doniños es la salida más citada: arenal largo, oleaje, dunas y una laguna detrás. San Xurxo completa el frente atlántico cercano. El agua suele estar entre 16 y 18 °C: más fría y brava que la ría de Ares o Gandarío. Quien vive en la ciudad lo convierte en una tarde elegida; quien vive hacia esas playas lo tiene más cerca, a cambio de viento y salitre en casa. Playas del entorno —Doniños, San Jorge u otras— piden trayecto y se viven como salida.",
  "Para caminar sin convertir la tarde en plan de playa, la Magdalena y el frente de ría bastan: calles rectas, plazas y vistas al arsenal. El castillo de San Felipe y Cabo Prior son salidas de patrimonio y horizonte cuando no apetece pelear con el aparcamiento de agosto en Doniños. Ares y Redes quedan a un trayecto corto hacia el sur si se quiere orilla de ría más abrigada y color de aldea. Caminar el frente urbano permite orilla de ciudad; el Atlántico abierto queda fuera del casco.",
  "Todo esto explica mejor Ferrol que contar playas. En la ciudad la semana gira alrededor del hospital, el comercio y el trabajo naval; en la costa atlántica la orilla es el motivo y el coche abre casi cada recado urbano. A Coruña queda a un trayecto mayor cuando hace falta capital. A Coruña y el área del Golfo amplían mapa. Elegir barrio pesa más que inventariar arenales ajenos.",
] as const;

const CASA_NUEVO2 = [
  "En Ferrol hay que separar ciudad y costa atlántica antes de firmar. Un anuncio que solo diga «Ferrol» puede ocultar si la casa da a la Magdalena o al ensanche —hospital y compra a pie— o a Doniños —playa brava y coche para lo urbano—.",
  "En la Magdalena y el ensanche abundan pisos; hacia Doniños y parroquias de costa, más casas con parcela y precios muy distintos según el inmueble. En el centro conviene mirar calle, ascensor y estado del portal; hacia la costa, viento, salitre y minutos reales hasta el súper. Hay fibra en buena parte de la ciudad; obra nueva, poca.",
  "El precio medio de referencia ronda 1.490 €/m² —de los más bajos entre las ciudades de la zona, lejos de Oleiros o A Coruña—. Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual un piso en la Magdalena y un chalé cerca de Doniños.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra, el hospital, y el trayecto a la playa que se usaría. En Semana Santa, el ruido y los cortes en la Magdalena; en agosto, el aparcamiento en Doniños; en noviembre, la luz y la humedad. Ferrol premia elegir bien el lado; castiga comprar solo por ser «la ciudad barata del golfo».",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "La Magdalena y la costa de Doniños no son intercambiables. Una vivienda «en Ferrol» en el mapa puede significar hospital y comercio a pie con calles más quietas en invierno, o playa atlántica y coche para casi todo lo urbano. Comparar solo el precio inventa un Ferrol que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el súper, el hospital y la playa que se usaría. También la luz, la orientación, el aislamiento, la ventilación y señales de humedad; hacia la costa, el viento y el salitre; en el centro, el estado del edificio y si hay ascensor. Y cómo se vive esa misma calle en Semana Santa, un domingo de agosto en Doniños y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda ligada al naval, a la Armada y a quien busca precio más bajo que en A Coruña, pero lo que decide es el inmueble concreto. Un acceso sencillo, buen estado, luz y un sitio fácil de explicar —piso urbano usable o casa de costa con trayecto claro— amplían el abanico de compradores; una vivienda muy deteriorada, sin ascensor en altura o mal situada respecto a la rutina elegida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Ferrol",
  a2: "125.905 €",
  a3: "174.330 €",
  b2: "101.693 €",
  b3: "140.805 €",
  m2: "1.490 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Ferrol encaja si atrae ciudad naval con hospital en el propio municipio y vivienda más asequible que Oleiros o A Coruña, aceptando que las playas atlánticas son salida en coche, no baño desde el ensanche, y aceptando que hay que elegir una forma concreta de vivir el municipio. En la Magdalena la compra y el hospital quedan a mano, a cambio de un comercio más apagado que en A Coruña; hacia Doniños ganan la playa brava y el horizonte, a cambio de coche para lo urbano. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol y más lluvia y humedad.",
  "También encaja si se tolera la Semana Santa en el centro —procesiones, cortes, gente— y el verano concurrido en Doniños o San Xurxo eligiendo bien la calle, no la primera fila más ruidosa del recorrido festivo o del acceso a la playa.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Ferrol encaja peor si se busca urbanización ordenada tipo Oleiros, villa con playa de ría a pie como Ares, o baño templado de ría como gesto diario desde casa: aquí el Atlántico abierto es salida. Tampoco si el aeropuerto debe quedar a unos diez minutos: Alvedro ronda los treinta y cinco.",
  "Y si el cielo debe parecerse al de Mallorca, o si se decide solo tras un sábado de sol en Doniños sin probar un noviembre en el centro ni la Semana Santa en la Magdalena, suele llevar a sorpresa.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en la Magdalena o el ensanche y otra hacia Doniños o San Xurxo. Desde cada casa: una compra sencilla, el trayecto al hospital o a la playa que se usaría, y la salida hacia Alvedro en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en Semana Santa o en agosto en la costa (aparcamiento, ruido, gente) y un día cubierto de noviembre en el centro (luz, humedad, ambiente comercial). Y comprobar el estado del edificio, el ascensor si hace falta, y la fibra en la dirección exacta.",
] as const;

const FOTO_COMO_MAGDALENA = {
  src: "/fotos/golfo-artabro-e-ferrol/ferrol-magdalena.jpg",
  pie: "Barrio de la Magdalena: ensanche ilustrado",
} as const;

const FOTO_COMO_ARSENAL = {
  src: "/fotos/golfo-artabro-e-ferrol/ferrol-arsenal.jpg",
  pie: "Arsenal y carácter naval de Ferrol",
} as const;

const FOTO_HISTORIA_SAN_FELIPE = {
  src: "/fotos/golfo-artabro-e-ferrol/ferrol-san-felipe.jpg",
  pie: "Castillo de San Felipe en la boca de la ría",
} as const;

const FOTO_HISTORIA_PRIOR = {
  src: "/fotos/golfo-artabro-e-ferrol/ferrol-prior.jpg",
  pie: "Cabo Prior: horizonte atlántico",
} as const;

const FOTO_MAR_DONINOS = {
  src: "/fotos/golfo-artabro-e-ferrol/ferrol-doninos.jpg",
  pie: "Doniños: playa, laguna y oleaje",
} as const;

const FOTO_MAR_SAN_XURXO = {
  src: "/fotos/golfo-artabro-e-ferrol/ferrol-san-xurxo.jpg",
  pie: "San Xurxo: arenal atlántico cerca de Ferrol",
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

export default function Nuevo2FerrolPage() {
  const ficha = municipioPorSlug("ferrol");
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
        <Foto src={FOTO_COMO_MAGDALENA.src} pie={FOTO_COMO_MAGDALENA.pie} />
        <Foto src={FOTO_COMO_ARSENAL.src} pie={FOTO_COMO_ARSENAL.pie} />
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
        <Foto src={FOTO_HISTORIA_SAN_FELIPE.src} pie={FOTO_HISTORIA_SAN_FELIPE.pie} />
        <Foto src={FOTO_HISTORIA_PRIOR.src} pie={FOTO_HISTORIA_PRIOR.pie} />
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
        <Foto src={FOTO_MAR_DONINOS.src} pie={FOTO_MAR_DONINOS.pie} />
        <Foto src={FOTO_MAR_SAN_XURXO.src} pie={FOTO_MAR_SAN_XURXO.pie} />
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="1.490 €/m²" />
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
