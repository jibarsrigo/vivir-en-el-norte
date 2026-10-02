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
 * NUEVO2 — O Vicedo (A Mariña).
 * Eje: núcleo junto a la ría do Barqueiro vs costa abierta (Xilloi / Arealonga / Fuciño).
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "A Mariña es la costa de Lugo entre O Vicedo y Ribadeo: Viveiro y su ría, Burela pesquera, Foz, Barreiros y As Catedrais, Ribadeo frente a Asturias. Atlántico abierto, más fresco y gris que las Rías; hospital comarcal y aeropuertos a una hora larga.",
  "O Vicedo cierra el extremo oeste de esa costa, junto a la ría do Barqueiro —la lámina de agua que aquí separa Lugo de A Coruña—. Unos mil quinientos cincuenta habitantes; el casco es pequeño; la mirada, enorme. No es Viveiro ni Ribadeo: aquí se gana Cantábrico delante y uno de los metros más asequibles de la comarca; a cambio, servicios mínimos y coche casi cada día.",
  "Lo que más cambia la vida diaria es dónde queda la casa: en el núcleo junto a la ría —puerto pequeño, compra básica limitada, orilla más recogida— o hacia la costa abierta —Xilloi, Arealonga, Fuciño do Porco—, donde el horizonte es de postal y el verano llena aparcamientos. En ambos sitios el mar está cerca; no se vive igual la semana ni el mes de agosto.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "O Vicedo reúne unos mil quinientos cincuenta habitantes en el extremo oeste de A Mariña, y se siente pueblo pequeño de verdad: el núcleo baja hasta un puerto modesto junto a la ría do Barqueiro —la entrada de agua que marca la frontera con la provincia de A Coruña— y en unos minutos a pie caben lo esencial de una villa mínima: algún comercio, farmacia si está abierta, y la sensación de que la semana grande se organiza fuera. Quien llega de fuera descubre enseguida que hay que elegir. En el núcleo se puede bajar a la orilla de ría, resolver un recado sencillo y sentir el pueblo andando. Hacia Xilloi —arenal abierto al Cantábrico, a pocos minutos en coche— o hacia Arealonga —playa larga de arena fina en la misma costa— la postal es otra: dunas, oleaje y horizonte, pero casi cada compra pide el volante. En pocos minutos se pasa de una forma de vivir O Vicedo a otra, y esa diferencia acaba importando más que la imagen uniforme de «costa bonita» en el mapa.",
  "Un martes de noviembre, en el núcleo, se puede comprar pan o algo básico y bajar al puerto sin depender de Viveiro para lo más corto del día. Las calles están quietas y el tráfico es de aldea. Viveiro —villa amurallada a unos veinte minutos hacia el este— cubre el súper completo, muchas mesas y el comercio serio; Burela, un poco más lejos, el Hospital da Mariña. Quien elige el núcleo elige esa comodidad relativa junto al agua: lo que no elige es un pueblo con vida densa en enero. Hacia Xilloi o Arealonga esa misma mañana es más aislada y más dependiente del coche para casi cada recado, incluido el que en el núcleo se resuelve a pie.",
  "Sin coche, el núcleo aguanta apenas la semana mínima; la costa abierta, casi no. Desde O Vicedo, el Hospital da Mariña —público comarcal en Burela— suele quedar a unos treinta y cinco minutos; los aeropuertos útiles —Santiago, A Coruña o Asturias— alrededor de los cien minutos según ruta. Hay apeadero del tren de ancho métrico —la antigua FEVE— y la LU-862 recorre la costa, pero quien vive junto a Xilloi o en parroquias exteriores suele necesitar el volante para súper, gestiones o salir del arenal. Viveiro funciona como villa de apoyo; O Vicedo, a cambio, ofrece Cantábrico delante y una escala donde el aislamiento forma parte del trato.",
  "Entre agosto y noviembre cambia sobre todo el ritmo de la orilla. En verano las playas abiertas y Fuciño do Porco —pasarelas de madera sobre el acantilado de Punta Socastro, en la parroquia de Suegos— reciben visitantes, coches en accesos estrechos y aparcamiento justo. No hay una fiesta mayor que corte el casco como la Semana Santa de Viveiro: el volumen viene del veraneo y de quien busca costa abierta. El Carmen, hacia junio, y San Esteban, a primeros de agosto, concentran gente local; el resto del verano manda la toalla. Vivir en primera línea de Xilloi o junto al acceso a Fuciño significa semanas más ruidosas. Meses después, en un martes húmedo, el mismo tramo vuelve a sentirse extremo aislado. No son dos O Vicedo distintos: son dos ritmos que forman parte de vivir aquí todo el año.",
  "También por eso la elección entre el núcleo y la costa abierta cambia bastante la vida diaria. En el núcleo se tiene la ría y lo básico cerca a diario, a cambio de un pueblo mínimo y de salir a Viveiro para casi todo lo demás. En la costa abierta se gana el horizonte de Xilloi o Arealonga y el paseo de Fuciño, a cambio de coche para el súper y de un agosto más concurrido en los accesos. Esa diferencia de sitio acaba importando mucho más que la postal vista en un mapa.",
] as const;

const CLIMA_NUEVO2 = [
  "O Vicedo se distancia de Mallorca en el cielo, no en un detalle: menos sol, más días de lluvia y una humedad que se nota en casa. La referencia de zona ronda 1.850 horas de sol al año, unos cuarenta días despejados y cerca de 1.150 mm de lluvia en unos ciento cincuenta días —casi la mitad del año—. Mallorca ronda 2.800 horas de sol. La niebla es alta —esta costa lucense es de las más brumosas de Galicia—; el viento, medio. También aquí llovizna en julio y agosto. Un día puede empezar gris, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "En verano el contraste se nota aún más. Medias alrededor de 18 °C —de las más frescas de A Mariña—: no pasas el calor de Baleares. En Xilloi, Arealonga o Vidreiro el agua suele estar entre 17 y 19 °C, con oleaje de Cantábrico abierto: baño bravo cuando el mar deja, no de puerta del núcleo. Quien vive junto a la ría lo nota al bajar al puerto; quien vive hacia la costa abierta, al abrir la ventana al viento. Un frente gris de noviembre cuenta más que un sábado de sol en Fuciño.",
] as const;

const VIVIR_NUEVO2 = [
  "Pasar de Mallorca a O Vicedo es cambiar de escala: se llega a un pueblo mínimo de costa extrema —o a una casa cerca de un arenal abierto—, no a una villa completa como Viveiro ni a una urbanización ordenada. En Mallorca puede ser habitual pensar primero en kilómetros; aquí unos pocos minutos separan el puerto del horizonte de Xilloi —o convierten la misma semana en trayectos en coche si vives lejos del núcleo—. Esa elección modifica decisiones tan sencillas como salir a comprar, bajar a la playa o dejar el coche.",
  "También cambia la relación entre coche, costa y villa de apoyo. En el núcleo se puede resolver lo mínimo a pie; el súper completo y el hospital piden Viveiro o Burela. En la costa abierta el coche entra casi cada cambio de sitio fuera de la playa. A cambio, el Cantábrico queda muy cerca y el silencio de noviembre es real. Ir y volver a Mallorca pide trayecto largo: aeropuerto usable alrededor de los cien minutos según ruta —Santiago suele cubrir Palma casi todo el año—. Se oye gallego en el pueblo; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. Agosto llena Xilloi, Arealonga y Fuciño de movimiento; en noviembre el mismo tramo recupera holgura y el pueblo sigue abierto, aunque más quieto —pocas mesas, poco comercio—. Para alguien acostumbrado a Mallorca, donde también existe presión estival, la diferencia está en la escala: el cambio se concentra en un extremo aislado, no en una ciudad. Vivir aquí todo el año significa aceptar esas dos caras —el verano concurrido en la costa abierta y los meses húmedos de pueblo mínimo— como partes de una misma vida, no elegir únicamente un sábado de sol en las pasarelas.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "La ría do Barqueiro y el oficio del mar explican el núcleo mejor que un casco monumental: pueblo marinero pequeño en el extremo lucense, con la mirada puesta en agua y frontera provincial. Hasta 1952 la capitalidad municipal estuvo en Riobarba —parroquia del interior—; ese año pasó al lugar de Vicedo, en la parroquia de San Estebo, y el municipio tomó ese nombre. Queda así un pueblo que mira al puerto y a la ría, no un ensanche repartido. O Vicedo se entiende como municipio de A Mariña occidental: costa abierta, núcleos pequeños y una escala menor que Viveiro o Ribadeo.",
  "Hacia el interior, las parroquias guardan otra capa. En Cabanas —al sur del término—, la iglesia de Santa María es uno de los templos que mandó edificar Fernán Pérez de Andrade «o Bo» en la Mariña. En Negradas, San Miguel conserva traza románica. Son piezas de señorío y parroquia, no de villa turística: ayudan a entender por qué el municipio se siente repartido entre costa y monte. La historia útil mezcla oficio de costa, parroquias y la atracción reciente de acantilado y playa.",
  "En la costa abierta, Fuciño do Porco es la capa contemporánea: pasarelas sobre el acantilado de Punta Socastro que convierten el precipicio en paseo sin perder el horizonte. A unos veinte o treinta minutos según ruta, ya en A Coruña, Estaca de Bares —faro, cabo y paso de aves en uno de los extremos septentrionales de la península— cierra el mapa con viento y migración. Lo que conviene saber aquí es de costa extrema y ría de frontera, no de villa amurallada. El carácter disperso explica dependencia del coche y de villas vecinas para parte de los servicios.",
  "Quien compra aquí elige entre esas herencias: núcleo con ría y servicios mínimos juntos, o costa abierta donde el súper queda fuera y el verano llena los accesos. No es el mismo O Vicedo en un anuncio genérico. Hoy comprar aquí es decidir entre orilla y núcleo interior, aceptando que Burela o Viveiro cubren hospital y parte del comercio denso.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar de casi todos los días aquí puede ser ría o Cantábrico abierto, y no es lo mismo desde cualquier casa. Quien vive en el núcleo baja a una orilla más recogida —playas pequeñas junto al puerto, como Fomento o Vidreiro— y camina el primer tramo del PR-G156, la senda costera homologada que sale del puerto. Quien vive hacia Xilloi o Arealonga convierte el arenal abierto en destino corto: arena, oleaje y agua fresca. Un martes de junio suele haber sitio para la toalla; un domingo de agosto el aparcamiento se queda corto. El mar es Cantábrico abierto: acantilado, playas y viento, no ría abrigada de Covas.",
  "Para caminar sin organizar una salida larga, el tramo desde el puerto es la experiencia más sencilla del núcleo: orilla, dársena y casas a un lado. En la costa abierta se camina entre dunas hacia el horizonte, o se sube a Fuciño do Porco: pasarelas, precipicio y Cantábrico delante. No es un paseo de boulevard; es horizonte con barandilla. Quien vive junto a la orilla puede bajar con trayecto corto; quien vive retirado convierte el agua en plan.",
  "Cuando se quiere ampliar el día, Estaca de Bares añade faro y cabo a un trayecto mayor. Viveiro aporta Covas —playa larga en ría abrigada— cuando el Cantábrico abierto no deja meterse. Aquí el mar está en la puerta; la villa completa, no. En verano el agua suele rondar los 19–21 °C; en agosto los accesos se notan.",
  "En el núcleo la ría forma parte de la semana; en la costa abierta la orilla es la puerta de casa y el súper queda fuera. Viveiro y Burela quedan a unos veinte y treinta y cinco minutos cuando hace falta lo que el pueblo no cubre. Viveiro, Xove y Burela completan el mapa. Elegir costa o interior pesa más que el nombre O Vicedo.",
] as const;

const CASA_NUEVO2 = [
  "En O Vicedo el núcleo y la costa abierta no ofrecen la misma semana. Un anuncio que solo diga «O Vicedo» puede ocultar si la casa da al puerto y a la ría, o a Xilloi, Arealonga o el acceso a Fuciño sin comercio debajo.",
  "En el núcleo abundan viviendas modestas cerca del casco; hacia las parroquias y la costa abierta, casas más dispersas con vistas y más dependencia del coche. Junto a la orilla notarás humedad, salitre y gente de agosto; en el interior, silencio antes. La fibra es parcial: conviene comprobarla en la dirección exacta. Hay poca o ninguna obra nueva.",
  "El precio medio de referencia ronda 1.093 €/m² —de los más bajos de A Mariña—. Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa. En un municipio pequeño la muestra de anuncios puede ser escasa y moverse mucho de un mes a otro: el metro no describe igual un piso junto al puerto y una casa frente a Xilloi.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra, la playa, y la salida hacia Viveiro, el hospital de Burela o el aeropuerto. En agosto, el aparcamiento en Xilloi o Fuciño; en noviembre, la luz, la niebla y la humedad. O Vicedo premia elegir bien el lado; castiga comprar solo la postal del horizonte.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "El núcleo junto a la ría y la costa abierta no son intercambiables. Una vivienda «en O Vicedo» en el mapa puede significar puerto y compra básica mínima a pie, o arenal de Xilloi sin comercio y coche para casi cada recado. Comparar solo el precio inventa un O Vicedo que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el súper que se usaría —casi siempre Viveiro—, el coche y la playa. En la costa abierta, dónde se deja el coche en agosto y cómo se llega a pie a la casa. También la luz, la orientación, el aislamiento, la ventilación y señales de humedad; junto a la orilla, salitre y viento; la fibra en esa dirección; y cómo se vive esa misma calle un domingo de agosto —o en el acceso a Fuciño— y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de veraneo y de vivienda junto a la costa, pero lo que decide es el inmueble concreto. Un acceso sencillo, buen estado, luz y un sitio fácil de explicar —núcleo práctico o costa bien situada— amplían el abanico de compradores; una casa muy expuesta, difícil de mantener o mal situada respecto a la rutina elegida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "O Vicedo",
  a2: "92.359 €",
  a3: "127.881 €",
  b2: "74.597 €",
  b3: "103.289 €",
  m2: "1.093 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "O Vicedo encaja si atrae vivir con el mar cerca en un pueblo muy pequeño: el núcleo junto a la ría do Barqueiro, o la costa abierta hacia Xilloi y Arealonga —playas del propio municipio— y el paseo de Fuciño do Porco. Xilloi, Arealonga y Fuciño no son villas de al lado: son orillas y tramos de costa de O Vicedo. Hay que elegir dónde se vive porque no se vive igual. En el núcleo quedan el puerto y una compra mínima cerca, pero el pueblo es mínimo y casi todo lo demás se hace en Viveiro. En la costa abierta el horizonte queda delante, pero el súper serio pide Viveiro (unos veinte minutos) y el Hospital da Mariña, en Burela, unos treinta y cinco. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia, niebla alta y humedad.",
  "También encaja si el baño de casi todos los días puede ser de Cantábrico fresco —o de orilla de ría más recogida— y se tolera el verano más lleno en las playas abiertas, eligiendo bien la calle y no la primera fila del acceso a Xilloi o a Fuciño.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "O Vicedo encaja peor si se necesita hospital cerca, aeropuerto a minutos o comercio a pie todo el año: aquí los servicios son mínimos —2/10 en nuestra escala— y eso importa porque la compra seria, muchas gestiones y la sanidad comarcal quedan en Viveiro o en Burela. Tampoco si se busca una villa caminable como Viveiro o Ribadeo, o si se confunde la quietud del núcleo con poder vivir la semana sin salir: el súper completo sigue fuera.",
  "Y si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en Fuciño sin probar un noviembre ni el aparcamiento de agosto, suele llevar a sorpresa.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el núcleo junto a la ría y otra hacia Xilloi, Arealonga o Fuciño. Desde cada casa: una compra sencilla —y el trayecto a Viveiro para la completa—, la playa que se usaría, y la salida hacia el hospital de Burela y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en verano en Xilloi o en el acceso a Fuciño (aparcamiento, ruido, gente) y un día cubierto de noviembre (luz, niebla, humedad). Y comprobar la fibra y el estado de la vivienda en la dirección exacta.",
] as const;

const FOTO_COMO_NUCLEO = {
  src: "/fotos/a-marina/vicedo-villa.jpg",
  pie: "Núcleo de O Vicedo junto a la ría do Barqueiro",
} as const;

const FOTO_COMO_COSTA = {
  src: "/fotos/a-marina/vicedo-horizonte.jpg",
  pie: "Arealonga y la ría do Barqueiro desde el mirador",
} as const;

const FOTO_HISTORIA_RIA = {
  src: "/fotos/a-marina/vicedo-ria.jpg",
  pie: "Casa y campos mirando a la ría do Barqueiro",
} as const;

const FOTO_HISTORIA_FUCINO = {
  src: "/fotos/a-marina/vicedo-faro.jpg",
  pie: "Fuciño do Porco: Punta Socastro sobre el Cantábrico",
} as const;

const FOTO_MAR_RIA = {
  src: "/fotos/a-marina/vicedo-barqueiro.jpg",
  pie: "Boca de la ría do Barqueiro a marea baja",
} as const;

const FOTO_MAR_COSTA = {
  src: "/fotos/a-marina/vicedo-costa.jpg",
  pie: "Pasarelas de Fuciño do Porco sobre el acantilado",
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

export default function Nuevo2OVicedoPage() {
  const ficha = municipioPorSlug("o-vicedo");
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
        <Foto src={FOTO_HISTORIA_RIA.src} pie={FOTO_HISTORIA_RIA.pie} />
        <Foto src={FOTO_HISTORIA_FUCINO.src} pie={FOTO_HISTORIA_FUCINO.pie} />
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
        <Foto src={FOTO_MAR_COSTA.src} pie={FOTO_MAR_COSTA.pie} />
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="1.093 €/m²" />
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
