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
 * NUEVO2 — A Coruña (Golfo Ártabro e Ferrol).
 * Piloto de continuidad: docs/continuidad-nuevo2.md
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Golfo Ártabro e Ferrol reúne las rías y costa alrededor de A Coruña: la propia ciudad en la península atlántica; Oleiros al este de la ría do Burgo; Sada y Bergondo hacia Betanzos; Miño con playas abiertas; Ares y Redes; y Ferrol al norte. Hospital y aeropuerto de Alvedro quedan cerca. El cielo suele ser más gris y lluvioso que en las Rías Baixas.",
  "A Coruña es la ciudad grande de esa zona: unos 252.000 habitantes en una península donde caben paseo, playas urbanas, casco, comercios y hospital. No es Oleiros —urbanizaciones y chalés alrededor de la capital— ni Sada —villa pequeña de ría—: es una ciudad atlántica de verdad.",
  "Lo que más cambia la vida diaria es el barrio respecto al mar. Junto a Riazor el Atlántico entra en la ventana y el verano se oye; unas calles hacia dentro del ensanche el ritmo es otro: menos sal en la fachada, aparcamiento menos disputado, menos fiesta debajo de casa. Si un día quieres nadar con menos olas, en diez o quince minutos de coche hacia el este estás en Oleiros o Sada.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "A Coruña se siente más grande y más compacta de lo que sugiere el mapa. En la misma península el mar forma parte del día a día desde muchos barrios: lo ves o lo oyes sin convertir cada salida en excursión. Quien llega de fuera descubre enseguida que no todos los barrios se parecen. Junto a Riazor y Orzán —las dos playas urbanas grandes, pegadas al paseo y a los edificios— el Atlántico entra en la ventana, con más viento, más sal en la fachada y más gente en verano. Unas calles hacia dentro del ensanche —las calles más rectas y comerciales del centro moderno— el piso sigue siendo de ciudad, pero el mar se nota menos en la rutina y aparcar suele ser más sencillo. En pocos minutos se pasa de una forma de vivir la ciudad a otra, y esa diferencia acaba importando más que la imagen uniforme de la capital en el mapa.",
  "Un martes de noviembre, si el barrio está bien elegido, se puede hacer la compra, ir al centro de salud o a la farmacia, y tener cerca la universidad o el cine sin salir lejos. En el ensanche eso se nota sobre todo: piso y vida a pie, con el mar a unos minutos si apetece, no necesariamente debajo de la ventana. Quien vive en primera línea junto a Riazor suma el oleaje y el paseo a esa misma semana —también cuando llueve o sopla el norte—. La Ciudad Vieja, el casco histórico de calles más estrechas, añade otra textura, pero el eje que más cambia la rutina sigue siendo orilla frente a interior del centro.",
  "En los barrios del centro bien situados se puede vivir con poco coche: hay bus urbano, y el tren y el AVE permiten llegar a Santiago u otras ciudades sin depender solo de la carretera. El CHUAC —hospital público grande— suele quedar a unos cinco minutos desde el centro; Alvedro, el aeropuerto de A Coruña, a unos diez. Quien vive junto a Riazor nota más el verano y las Fiestas de María Pita —las fiestas grandes de agosto, con semanas de conciertos en la plaza del mismo nombre— si la calle cae en el tramo concurrido; quien vive unas calles hacia dentro suele vivir ese ruido con más distancia.",
  "La diferencia entre agosto y noviembre se nota al salir de casa. En verano aumentan las toallas en Riazor, el tráfico y el movimiento del paseo; las Fiestas de María Pita ocupan buena parte de agosto y San Juan, a finales de junio, enciende hogueras en la orilla. Vivir en primera línea o en el recorrido festivo significa semanas muy movidas. Meses después, en un día gris de invierno, el mismo paseo recupera una escala más holgada y la ciudad sigue siendo de trabajo y de lonja: no se vacía. No son dos A Coruñas distintas: son dos ritmos que forman parte de vivir aquí todo el año.",
  "También por eso la elección entre primera línea —Riazor, Orzán— y el ensanche hacia dentro cambia bastante la vida diaria. Abajo, junto al Atlántico, el mar queda metido en la escena cotidiana, a cambio de viento, sal en ventanas y más exposición al verano y a las fiestas. Unas calles hacia dentro se reduce parte de esa intensidad y gana facilidad de aparcamiento y de silencio relativo, aunque el oleaje deja de estar en la ventana. En pocos minutos se pasa de una forma de vivir A Coruña a otra; esa diferencia de barrio acaba importando mucho más que la imagen uniforme de la ciudad vista en un mapa.",
] as const;

const CLIMA_NUEVO2 = [
  "El salto desde Mallorca se nota en el piso y en la calle: menos sol, más lluvia y una humedad que no se va del todo. La referencia de la ciudad ronda las 1.900 horas de sol al año y cerca de 1.000 mm de lluvia; son valores de zona, no de cada barrio. Mallorca ronda 2.800 horas de sol. También aquí llovizna en julio y agosto. Un día puede empezar gris, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "En verano el contraste se nota aún más. Medias alrededor de 19 °C: no pasas el calor de Baleares. En Riazor u Orzán el agua suele estar entre 16 y 18 °C, con oleaje; unas calles hacia dentro del ensanche ese contraste se vive menos en la toalla y más en la terraza y las ventanas. Un día de viento del norte y un noviembre cuentan más que un sábado de sol en el paseo.",
] as const;

const VIVIR_NUEVO2 = [
  "Cambiar Mallorca por A Coruña no es solo cambiar de clima: se pasa a una ciudad donde se vive sobre todo en un piso, con el mar cerca, y no al estilo de Oleiros, donde lo habitual es una casa baja o un chalé con jardín. En invierno importa hacia qué lado miran las ventanas: un piso muy expuesto al norte junto a Riazor se siente más húmedo y salado; unas calles hacia dentro del ensanche el mismo cielo se nota de otra manera. Esa diferencia física acaba modificando decisiones tan sencillas como abrir la terraza, aparcar o elegir dónde quedarse en agosto.",
  "También cambia la relación entre coche, costa y vida cotidiana. A Coruña permite, si el barrio está bien elegido, hacer compra y gestiones a pie o en bus —algo poco habitual en esta zona del norte—. Vivir junto al Atlántico no equivale, sin embargo, a un baño quieto de ría: el agua es fresca y con oleaje; para orilla más calmada hay que salir hacia Oleiros o Sada. A cambio, el CHUAC y Alvedro quedan en la misma península o a pocos minutos: la escala de capital no significa aislamiento respecto a Mallorca.",
  "Y cambia mucho el contraste entre estaciones. Agosto llena Riazor y el centro de movimiento y de fiestas; en noviembre el mismo paseo recupera holgura y la ciudad sigue abierta: hay lonja, comercios y universidad. Para alguien acostumbrado a Mallorca, donde también existe presión estival, la diferencia está en el clima atlántico y en que el cambio se nota barrio a barrio dentro de la misma península. Vivir aquí todo el año significa aceptar esas dos caras —el verano concurrido en la orilla y los meses húmedos de ciudad que no se vacía— como partes de una misma vida, no elegir únicamente un sábado de sol junto a la Torre.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Subes a la Torre de Hércules —faro romano en uso, el más antiguo del mundo, Patrimonio de la Humanidad— y abajo tienes el Atlántico a los pies. El paseo que la rodea cuenta la ciudad: océano y caserío en el mismo trazo. Esa costa abierta es la misma que condiciona la vida cuando se elige vivir junto a Riazor u Orzán.",
  "La Marina —el frente del puerto en el centro, con la hilera de edificios de galerías: balcones cerrados de cristal blanco frente al viento y la lluvia atlántica— habla de una ciudad que siempre miró al puerto. El casco viejo, a un paso, añade calles históricas. María Pita, la mujer que la ciudad recuerda por la defensa frente a la armada inglesa en 1589, da nombre a la plaza mayor y a las fiestas grandes de agosto: el verano concurrido no es un invento reciente.",
  "Esa misma historia de ciudad abierta al Atlántico explica el otro polo. Unas calles hacia dentro del ensanche —el centro moderno de calles más rectas— se vive otra Coruña: menos oleaje en la ventana, más piso de trabajo y de comercio diario. No es otra ciudad; es la misma península cuando el mar deja de mandar en la fachada.",
  "Riazor y el ensanche hacia dentro no se viven igual. Junto al Atlántico el océano entra en la rutina; unas calles hacia dentro mandan el piso, el aparcamiento y la distancia al ruido. La misma capital, dos casas muy distintas.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar de casi todos los días aquí es Atlántico abierto dentro de la ciudad, no ría calmada. Riazor y Orzán —las dos playas grandes, una junto a la otra, pegadas al paseo y a los edificios— permiten bajar a la arena desde el barrio. El agua suele estar entre 16 y 18 °C en verano, con oleaje; un martes de junio suele haber sitio para la toalla; un domingo de agosto el paseo se llena y cuesta aparcar. Quien vive en primera línea tiene eso debajo de casa; quien vive unas calles hacia dentro del ensanche lo convierte en un paseo corto, no en la ventana.",
  "Para caminar sin organizar una excursión, el paseo marítimo es la experiencia más sencilla: kilómetros a pie o en bici que enlazan Riazor y Orzán con tramos de puerto y la Torre. Es orilla urbana continua, no un paseo de ría quieta. En el frente portuario aparece el dique Barrié de la Maza: un muelle-dique de piedra, distinto del arenal.",
  "Cuando Riazor u Orzán no invitan por viento o por olas, Oza y As Lapas —playas más pequeñas y recogidas dentro del municipio— permiten cambiar de tramo sin salir de la ciudad. La Torre y el Monte de San Pedro ya no son toalla: parque, mirador y horizonte; en San Pedro aún se reconocen restos de una antigua batería de costa. Vas por las vistas, no a bañarte.",
  "Todo esto explica mejor A Coruña que listar playas. En primera línea el Atlántico manda en la semana; en el ensanche hacia dentro el mar es salida elegida a pocos minutos. Si un día se quiere agua más quieta de ría, hay que conducir hacia Oleiros, Sada o Gandarío: esa orilla no está en la propia península urbana.",
] as const;

const CASA_NUEVO2 = [
  "En A Coruña el mercado parte en dos: primera línea —Riazor, Orzán— o ensanche hacia dentro. Un anuncio que solo diga «A Coruña» oculta si el mar entra en la ventana o si el piso vive de calles comerciales y aparcamiento menos disputado.",
  "Lo habitual es vivir en un piso; el chalé con jardín queda más en Oleiros o Sada. Conviene comprobar ascensor, orientación y estado en la dirección exacta. Junto a Riazor notarás sal, viento y gente en verano; unas calles hacia dentro, las fiestas y el aparcamiento se notan de otra manera.",
  "El precio municipal de referencia ronda 3.239 €/m² —de los más altos de la zona—. Con esa media, las columnas A y B sitúan tipologías de dos y tres habitaciones; tres habitaciones en tipologías habituales suben con facilidad. Barrio bajo con vistas a precio medio casi no existe.",
  "Antes del precio conviene recorrer la rutina desde la vivienda: la compra, el paseo o la playa, el hospital o el aeropuerto. Probar un tramo de María Pita o San Juan si la calle cae en el recorrido festivo, y un frente gris de noviembre. Acceso sin barreras y ascensor importan en la rutina larga.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "Riazor–Orzán y el ensanche hacia dentro no son el mismo producto. Una vivienda «con mar cerca» en el mapa puede significar oleaje en la fachada o un paseo de diez minutos. Comparar solo el €/m² inventa una A Coruña uniforme que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: ascensor o barreras, recorrido a pie a súper y paseo, aparcamiento. También la luz, la orientación, el aislamiento y la humedad; en primera línea, la sal en ventanas y metales; y el ruido de verano o de fiestas si la calle cae en el tramo de María Pita o San Juan.";

const CASA_MERCADO_REVENTA =
  "Mercado amplio por demanda residencial permanente. Una vivienda accesible, exterior, con ascensor y ubicación fácil de explicar amplía el público futuro; un piso sin ascensor, oscuro o muy expuesto al ruido festivo lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "A Coruña",
  a2: "273.696 €",
  a3: "378.963 €",
  b2: "221.062 €",
  b3: "306.086 €",
  m2: "3.239 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "A Coruña encaja si atrae la ciudad completa y el mar en el mismo día más que una urbanización silenciosa, aceptando que hay que elegir una forma concreta de vivirla. Junto a Riazor u Orzán el Atlántico entra en la rutina, a cambio de viento, sal y verano más lleno; en el ensanche hacia dentro se gana aparcamiento y distancia al ruido, a cambio de no tener el oleaje en la ventana. Hospital y aeropuerto quedan en la misma ciudad o a pocos minutos. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol y más lluvia y humedad.",
  "También encaja si se acepta el Atlántico abierto como baño de casi todos los días —agua fresca y oleaje— y se reserva la orilla de ría, más quieta, para salidas a Oleiros, Sada o Gandarío. Y si se quiere café, cine, la universidad, el AVE y la lonja en enero sin salir de la península: aquí la vida no depende del verano turístico.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "A Coruña encaja peor si se busca chalé con jardín, calles de urbanización y playa de ría como baño de casi todos los días. Eso está más en Oleiros —Santa Cruz, Mera— o en Sada —Fontán—; aquí hay más densidad, fiestas de María Pita y océano abierto.",
  "También encaja peor si tres habitaciones en tipologías habituales deben quedar en un precio medio de esta zona: el metro de referencia ronda 3.239 €/m² y esa tipología sube con facilidad hacia precios altos. Y si el cielo debe parecerse al de Mallorca, o si se decide solo tras un sábado de sol sin probar un día gris ni el ruido de las fiestas en el centro.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda junto a Riazor u Orzán y otra unas calles hacia dentro del ensanche. Desde cada una: compra a pie, trayecto al tramo de paseo o playa que se usaría, y salida al CHUAC y a Alvedro en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en verano en la orilla (gente, viento, aparcamiento) y un día de frente gris (luz, humedad, terraza). Si la calle cae cerca del recorrido festivo, preguntar por María Pita o San Juan. Y comprobar ascensor y sal en ventanas en la dirección exacta.",
] as const;
const FOTO_COMO_MARINA = {
  src: "/fotos/golfo-artabro-e-ferrol/a-coruna-identidad.jpg",
  pie: "Marina de A Coruña: galerías blancas frente al puerto",
} as const;

const FOTO_COMO_RIAZOR = {
  src: "/fotos/golfo-artabro-e-ferrol/coruna-riazor.jpg",
  pie: "Riazor y Orzán: playa urbana abierta al Atlántico",
} as const;

const FOTO_HISTORIA_HERCULES = {
  src: "/fotos/golfo-artabro-e-ferrol/coruna-hercules.jpg",
  pie: "Torre de Hércules sobre el Atlántico",
} as const;

const FOTO_HISTORIA_CASCO = {
  src: "/fotos/golfo-artabro-e-ferrol/coruna-casco.jpg",
  pie: "Casco viejo de A Coruña",
} as const;

const FOTO_MAR_DIQUE = {
  src: "/fotos/golfo-artabro-e-ferrol/coruna-paseo.jpg",
  pie: "Dique Barrié de la Maza, en el frente portuario",
} as const;

const FOTO_MAR_SAN_PEDRO = {
  src: "/fotos/golfo-artabro-e-ferrol/coruna-san-pedro.jpg",
  pie: "Monte de San Pedro: mirador sobre la ciudad y la costa",
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

export default function Nuevo2ACorunaPage() {
  const ficha = municipioPorSlug("a-coruna");
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
        <Foto src={FOTO_COMO_MARINA.src} pie={FOTO_COMO_MARINA.pie} />
        <Foto src={FOTO_COMO_RIAZOR.src} pie={FOTO_COMO_RIAZOR.pie} />
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
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{DE_DONDE_VIENE_NUEVO2[0]}</p>
        <Foto src={FOTO_HISTORIA_HERCULES.src} pie={FOTO_HISTORIA_HERCULES.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{DE_DONDE_VIENE_NUEVO2[1]}</p>
        <Foto src={FOTO_HISTORIA_CASCO.src} pie={FOTO_HISTORIA_CASCO.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{DE_DONDE_VIENE_NUEVO2[2]}</p>
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Mar, río y camino" varianteTarjetaV1>
        {MAR_RIO_CAMINO_NUEVO2.slice(0, 3).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_MAR_DIQUE.src} pie={FOTO_MAR_DIQUE.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(3, 5).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_MAR_SAN_PEDRO.src} pie={FOTO_MAR_SAN_PEDRO.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[5]}</p>
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Casa" varianteTarjetaV1>
        {CASA_NUEVO2.slice(0, 2).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="3.239 €/m²" />
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
