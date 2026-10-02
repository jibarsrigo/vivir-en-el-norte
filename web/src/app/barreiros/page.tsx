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
 * NUEVO2 — Barreiros (A Mariña).
 * Eje: cerca de la costa (Arealonga / Reinante / San Miguel) vs San Cosme / interior (capital administrativa, sin villa densa).
 * As Catedrais = salida cercana (término de Ribadeo), no tercer polo.
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "A Mariña es la costa de Lugo entre O Vicedo y Ribadeo: Viveiro y su ría, Burela pesquera, Foz, Barreiros y As Catedrais, Ribadeo frente a Asturias. Atlántico abierto, más fresco y gris que las Rías; hospital comarcal y aeropuertos a una hora larga.",
  "Barreiros reúne unos tres mil habitantes repartidos en parroquias entre Foz y Ribadeo, con kilómetros de playa y sin una villa densa que lo resuelva todo. No es Foz ni Ribadeo: aquí se gana orilla larga delante de casa en muchas microzonas; a cambio, coche casi cada día y dependencia de esas villas para la compra seria.",
  "Lo que más cambia la vida diaria es dónde queda la casa: junto a la costa —Arealonga, Reinante, San Miguel de Reinante— o hacia San Cosme de Barreiros —capital del concello, más interior—. En ambos sitios As Catedrais quedan a pocos minutos; no se vive igual la semana.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Barreiros reúne unos tres mil habitantes y no se siente una sola villa: la costa se estira en playas largas —Arealonga, arenal de más de un kilómetro; Altar; Coto; Remior— y las parroquias reparten la vida. San Cosme de Barreiros —capital administrativa del concello— concentra el ayuntamiento, pero no un comercio denso como Foz. Quien llega de fuera descubre enseguida que hay que elegir. Junto a Arealonga o en San Miguel de Reinante —parroquia costera con acceso a A Pasada y a parte de Arealonga— se vive con la arena cerca y el coche para casi cada recado serio. Tierra adentro, hacia San Cosme, la postal es otra: más pueblo administrativo y menos toalla debajo; Foz o Ribadeo siguen haciendo falta para la semana completa. En pocos minutos se pasa de una forma de vivir Barreiros a otra, y esa diferencia acaba importando más que la imagen uniforme de «costa junto a As Catedrais» en el mapa.",
  "Un martes de noviembre, cerca de la playa, se puede caminar la orilla con holgura; para comprar en serio hace falta ir a Foz —villa con playa urbana a unos diez o quince minutos— o a Ribadeo. Los servicios son 3/10 en nuestra escala: faltan un núcleo urbano completo. Quien elige la costa elige arena delante; lo que no elige es autonomía cotidiana. En San Cosme esa misma mañana es más de gestiones locales y de pueblo pequeño; la playa pide trayecto y las villas de apoyo siguen fuera.",
  "Sin coche, buena parte del municipio no aguanta la semana. El Hospital da Mariña —público comarcal en Burela— suele quedar a unos veinticinco minutos. Los aeropuertos útiles —Asturias alrededor de setenta minutos; Santiago, hacia los ciento diez— piden trayecto. Hay apeaderos del tren de ancho métrico en San Cosme y en Reinante, y la A-8 / N-634 enlazan la costa, pero el día a día de compra y salud primaria útil se organiza hacia Foz o Ribadeo. Barreiros, a cambio, ofrece kilómetros de playa y parroquias donde el invierno deja muchas ventanas apagadas.",
  "Entre julio y agosto cambia sobre todo el ritmo de la costa y de As Catedrais —Praia de Augas Santas, en el término de Ribadeo, a pocos minutos desde Reinante—. El tercer fin de semana de julio, la romería del Carmen en San Miguel de Reinante concentra gente junto a Arealonga; en esa playa suele haber también concurso de castillos de arena. Hacia el 24 de agosto, San Bartolo —conocido como fiesta del veraneante— llena el litoral cerca de San Cosme. En septiembre, San Cosme celebra su patrón. Meses después, en un martes húmedo, muchos bloques de apartamentos vuelven a quedar con pocas luces. No son dos Barreiros distintos: son dos ritmos que forman parte de vivir aquí todo el año.",
  "También por eso la elección entre la costa y San Cosme cambia bastante la vida diaria. Junto a Arealonga o Reinante se gana la playa delante; casi cada compra seria pide Foz o Ribadeo, y agosto se nota en accesos y aparcamiento. Hacia San Cosme se gana la capital del concello y algo más de pueblo; la toalla y las villas de apoyo siguen pidiendo coche. Esa diferencia de sitio acaba importando mucho más que la postal vista en un mapa.",
] as const;

const CLIMA_NUEVO2 = [
  "Barreiros supone un cambio climático claro respecto a Mallorca. Hay bastante menos sol, la lluvia aparece con mucha más frecuencia y la humedad se nota en casa. La referencia local ronda 1.920 horas de sol al año, unos cuarenta días despejados y cerca de 1.000 mm de lluvia en unos ciento cuarenta y tres días —casi la mitad del año—. Mallorca ronda 2.800 horas de sol. La niebla es alta; el viento, medio. También aquí llovizna en julio y agosto. Un día puede empezar gris, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 18,5 °C: no pasas el calor de Baleares. En Arealonga o Altar el agua suele estar entre 17 y 19 °C, con oleaje de costa abierta. Quien vive junto a la playa lo nota al abrir la ventana al salitre; quien vive hacia San Cosme, al salir a un interior más quieto y más lejos del oleaje. Un frente gris de noviembre cuenta más que un sábado de sol en Arealonga.",
] as const;

const VIVIR_NUEVO2 = [
  "De Mallorca a Barreiros se llega a un municipio disperso —casa junto a la playa o cerca de San Cosme—, no a una villa caminable como Foz o Ribadeo. En Mallorca puede ser habitual pensar primero en kilómetros; aquí unos pocos minutos en coche separan Arealonga de San Cosme —o convierten la misma semana en trayectos si vives en la orilla y necesitas el súper—. Esa elección modifica decisiones tan sencillas como salir a comprar, ir a la toalla o dejar el coche.",
  "También cambia la relación entre coche, costa y villas de apoyo. En la costa el mar queda delante y casi cada cambio de sitio fuera de la playa pide volante. En San Cosme hay más sensación de pueblo pequeño, pero Foz y Ribadeo siguen cubriendo la compra seria y buena parte de los servicios. El hospital pide Burela a unos veinticinco minutos. Ir y volver a Mallorca pide trayecto: Asturias ronda setenta minutos; Santiago, hacia los ciento diez —suele cubrir Palma casi todo el año—. Se oye gallego en las parroquias; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. Agosto llena Arealonga y los accesos a As Catedrais; en noviembre muchas calles de apartamentos quedan más vacías y San Cosme sigue quieto. Para alguien acostumbrado a Mallorca, donde también existe presión estival, la diferencia está en la escala: el cambio se concentra en playas y parroquias, no en una ciudad. Vivir aquí todo el año significa aceptar esas dos caras —costa concurrida en verano y meses húmedos con pocas luces alrededor— como partes de una misma vida, no elegir únicamente un sábado de sol en la arena.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Barreiros no se organiza alrededor de un casco monumental: es una suma de parroquias —San Cosme, San Miguel de Reinante, Santiago de Reinante, Benquerencia y otras— y de orilla. San Cosme concentra el ayuntamiento y una lógica de pueblo; Reinante y San Miguel explican la costa habitada. Queda así un municipio de playas y núcleos dispersos, no una plaza de la que salga toda la semana. Lo que hoy parece «costa de As Catedrais» en el mapa fue antes una red parroquial con carretera y cantón, no una villa única con comercio denso bajo la ventana.",
  "Las casas de indianos —viviendas de quienes regresaron de América— salpican la costa y algunas carreteras: fachadas llamativas que hablan de dinero de emigración, no de un único barrio como en Ribadeo. Conviene verlas como capa del paisaje y del mantenimiento, no como promesa de villa señorial. Esa huella explica parte del atractivo visual sin explicar la vida diaria: el súper denso y el hospital siguen fuera, en Foz, Ribadeo o Burela.",
  "As Catedrais —Praia de Augas Santas, en el municipio de Ribadeo— han convertido el tramo en destino: arcos de piedra, marea y mucha afluencia en temporada. Desde Reinante quedan a pocos minutos, y eso pesa en el tráfico y en la idea que se tiene del sitio. Arealonga, Altar, Coto y Remior —playas del propio Barreiros— sostienen la orilla cotidiana sin ser los arcos famosos. Quien mire Barreiros solo por As Catedrais debe contar también con la dispersión y el invierno vacío de muchos bloques de veraneo.",
  "Hoy, comprar «en Barreiros» sigue siendo elegir entre costa con playa delante —y coche para casi todo lo demás— o San Cosme, con más pueblo y la arena a un trayecto. El anuncio municipal no distingue cuál de las dos.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar de casi todos los días aquí es Cantábrico de playa larga, no ría urbana. Arealonga, Altar, Coto y Remior permiten cambiar de tramo sin salir de Barreiros: arena abierta, viento y, en verano, agua que suele rondar los 19–21 °C. Quien vive hacia Arealonga o Reinante puede llegar a la orilla entre semana andando o en un trayecto mínimo; quien vive en San Cosme convierte esa misma playa en destino corto en coche. Un martes de junio suele haber sitio; un domingo de agosto el acceso se llena y el aparcamiento forma parte del plan.",
  "Para caminar andando cerca de la costa, el paseo une tramos entre playas y, hacia el este, enlaza con el entorno de As Catedrais cuando la marea y el horario lo permiten. No es un boulevard de villa densa: es costa con viento, dunas bajas y, en temporada, gente que viene por los arcos. Desde San Cosme ese paseo ya es salida deliberada: hay que bajar a la orilla antes de empezar a andar. El viento y la marea cambian el tramo de un día a otro más que cualquier inventario de nombres.",
  "Cuando el día pide ampliar el mapa, Foz aporta villa y A Rapadoira a unos diez minutos; Ribadeo, casco indiano y ría del Eo; Burela, hospital comarcal. Aquí el día a día pide coche para compra y gestiones; el mar, si se elige la costa, puede quedar mucho más cerca de la puerta que el súper. Esa asimetría define el municipio mejor que la postal de los arcos.",
  "En Arealonga o Reinante la orilla queda integrada en la rutina casi todos los días; en San Cosme el pueblo es el centro corto y la playa queda fuera. Esa diferencia describe mejor Barreiros que contar playas del mapa. Foz y Ribadeo quedan a unos diez o quince minutos cuando hace falta lo que el municipio no cubre a pie.",
] as const;

const CASA_NUEVO2 = [
  "En Barreiros el anuncio importa menos que saber si la casa mira a la costa o a San Cosme / interior. Un anuncio que solo diga «Barreiros» puede ocultar si la casa da a Arealonga sin súper debajo, o a la capital del concello sin playa a pie.",
  "Abundan apartamentos de veraneo junto a la costa y casas en parroquias; hay poca obra nueva y fibra parcial que conviene comprobar dirección a dirección. Junto a la orilla notarás humedad, salitre y gente de agosto; tierra adentro, más silencio y más coche para bajar a la playa.",
  "El precio medio de referencia ronda 1.732 €/m². Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual un piso frente a Arealonga y una casa cerca de San Cosme.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra en Foz o Ribadeo, la playa, y la salida hacia Burela o el aeropuerto. En agosto, el aparcamiento en la costa; en noviembre, cuántas luces quedan encendidas alrededor. Barreiros premia elegir bien el lado; castiga comprar solo la postal de As Catedrais.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "La costa y San Cosme no son intercambiables. Una vivienda «en Barreiros» en el mapa puede significar playa delante con coche para casi cada recado, o capital del concello sin playa debajo. As Catedrais están cerca, pero en el término de Ribadeo. Comparar solo el precio inventa un Barreiros que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el súper que se usaría —casi siempre Foz o Ribadeo—, el coche y la playa. En la costa, dónde se deja el coche en agosto y cómo se oye el acceso a As Catedrais. También la luz, la orientación, el aislamiento, la ventilación y señales de humedad; en bloques de veraneo, ocupación de invierno y comunidad; la fibra en esa dirección; y cómo se vive esa misma calle un domingo de agosto y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de costa y de segunda residencia, pero lo que decide es el inmueble concreto. Un acceso sencillo, buen estado, luz y un sitio fácil de explicar —playa práctica o San Cosme bien situado— amplían el abanico de compradores; una casa muy expuesta, difícil de mantener o mal situada respecto a la rutina elegida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Barreiros",
  a2: "146.354 €",
  a3: "202.644 €",
  b2: "118.209 €",
  b3: "163.674 €",
  m2: "1.732 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Barreiros encaja si atrae vivir con playas largas del propio municipio delante —Arealonga, Altar, Coto u otras— o si prefiere San Cosme de Barreiros, la capital del concello, más interior. Hay que elegir dónde se vive porque no se vive igual. En la costa ganan la arena y el horizonte; la compra seria y buena parte de los servicios se hacen en Foz o en Ribadeo, a unos diez o quince minutos. En San Cosme hay más sensación de pueblo pequeño; la playa pide coche. As Catedrais —en el término de Ribadeo— quedan a pocos minutos desde Reinante. El hospital está en Burela, a unos veinticinco minutos. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia, niebla y humedad.",
  "También encaja si se tolera el contraste entre un agosto lleno en la costa y un noviembre con pocas luces en muchos bloques, eligiendo bien la calle y no solo la primera fila del acceso a la playa.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Barreiros encaja peor si se necesita salir de casa y organizar el día a día andando: aquí faltan comercio denso, farmacia y servicios juntos en un núcleo —los servicios son 3/10 en nuestra escala— y eso importa porque la compra semanal seria y buena parte de la vida urbana se organizan en Foz o en Ribadeo. Tampoco si el hospital debe quedar cerca a pie: Burela está a unos veinticinco minutos. Y si se confunde tener playa delante con autonomía cotidiana, suele haber sorpresa.",
  "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en As Catedrais sin probar un noviembre ni el aparcamiento de agosto en Arealonga.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda junto a Arealonga o Reinante y otra hacia San Cosme. Desde cada casa: una compra sencilla —y el trayecto a Foz o Ribadeo para la completa—, la playa que se usaría, y la salida hacia el hospital de Burela y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto en la costa o en el acceso a As Catedrais (aparcamiento, ruido, gente) y un día cubierto de noviembre (luz, humedad, luces encendidas alrededor). Y comprobar la fibra y el estado de la vivienda en la dirección exacta.",
] as const;

const FOTO_COMO_PLAYA = {
  src: "/fotos/a-marina/barreiros-arealonga-nuevo.jpg",
  pie: "Arealonga: bahía y playa larga de Barreiros vista desde la costa",
} as const;

const FOTO_COMO_ALTAR = {
  src: "/fotos/a-marina/barreiros-altar-nuevo.jpg",
  pie: "Praia do Altar en Barreiros, con Foz al fondo al otro lado de la orilla",
} as const;

const FOTO_HISTORIA_INDIANA = {
  src: "/fotos/a-marina/barreiros-indiana-nuevo.jpg",
  pie: "Casa de indianos en Barreiros: torre y fachada de emigración",
} as const;

const FOTO_HISTORIA_CATEDRAIS = {
  src: "/fotos/a-marina/barreiros-catedrais.jpg",
  pie: "As Catedrais (Augas Santas, Ribadeo): arcos y gente a marea baja, a minutos de Reinante",
} as const;

const FOTO_MAR_SAN_MIGUEL = {
  src: "/fotos/a-marina/barreiros-san-miguel.jpg",
  pie: "Costa de San Miguel de Reinante: playa, caserío y sierra al fondo",
} as const;

const FOTO_MAR_ROCAS = {
  src: "/fotos/a-marina/barreiros-playa.jpg",
  pie: "Acantilado estratificado en la costa de Barreiros, con arcoíris tras la lluvia",
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

export default function Nuevo2BarreirosPage() {
  const ficha = municipioPorSlug("barreiros");
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
        <Foto src={FOTO_COMO_PLAYA.src} pie={FOTO_COMO_PLAYA.pie} />
        <Foto src={FOTO_COMO_ALTAR.src} pie={FOTO_COMO_ALTAR.pie} />
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
        <Foto src={FOTO_HISTORIA_INDIANA.src} pie={FOTO_HISTORIA_INDIANA.pie} />
        <Foto src={FOTO_HISTORIA_CATEDRAIS.src} pie={FOTO_HISTORIA_CATEDRAIS.pie} />
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
        <Foto src={FOTO_MAR_SAN_MIGUEL.src} pie={FOTO_MAR_SAN_MIGUEL.pie} />
        <Foto src={FOTO_MAR_ROCAS.src} pie={FOTO_MAR_ROCAS.pie} />
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="1.732 €/m²" />
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
