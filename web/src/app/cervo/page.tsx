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
 * NUEVO2 — Cervo (A Mariña).
 * Eje: San Cibrao (península: puerto, O Torno/Cubelas, paseo, servicios básicos) vs Sargadelos / interior (Real Fábrica, Xunco, sin playa a pie).
 * San Ciprián Alcoa = contexto, no tercer polo.
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "A Mariña es la costa de Lugo entre O Vicedo y Ribadeo: Viveiro y su ría, Burela pesquera, Foz, Barreiros y As Catedrais, Ribadeo frente a Asturias. Atlántico abierto, más fresco y gris que las Rías; hospital comarcal y aeropuertos a una hora larga.",
  "Cervo reúne unos cuatro mil cien a cuatro mil doscientos habitantes entre la península de San Cibrao —también llamada San Ciprián— y el interior de Sargadelos. No es Burela ni Viveiro: aquí se gana mar cotidiano en un núcleo marítimo pequeño, o cerámica y río sin playa debajo; a cambio, el comercio grande pide Burela y el complejo industrial de San Ciprián forma parte del paisaje.",
  "Lo que más cambia la vida diaria es dónde queda la casa: en San Cibrao —puerto, playas de O Torno y Cubelas, paseo y servicios básicos del núcleo— o hacia Sargadelos y el interior —Real Fábrica, río Xunco, Paseo dos Namorados—, donde el Cantábrico ya no es la puerta. En ambos sitios se vive en Cervo; no se vive igual la semana.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Cervo reúne unos cuatro mil cien a cuatro mil doscientos habitantes, y no se siente una sola villa: San Cibrao —península marítima del término, también conocida como San Ciprián— concentra el puerto, el paseo, las playas de O Torno —arenal al abrigo del istmo— y Cubelas —ensenada más pequeña junto al núcleo—, además de farmacia, comercios básicos y la posibilidad de llegar a la orilla andando desde el núcleo. Quien llega de fuera descubre enseguida que hay que elegir. En San Cibrao se puede resolver lo esencial del municipio y meter los pies en el agua el mismo día. Hacia Sargadelos —núcleo interior ligado a la cerámica y a la antigua Real Fábrica, junto al río Xunco— la postal es otra: patrimonio, paseo fluvial y silencio, pero la playa pide coche hacia la península. En pocos minutos se pasa de una forma de vivir Cervo a otra, y esa diferencia acaba importando más que la imagen uniforme de «costa de A Mariña» en el mapa.",
  "Un martes de noviembre, en San Cibrao, se puede pasar por la farmacia, seguir el paseo hacia A Atalaia —punta con faro al final de la península— y sentir un núcleo marítimo con vida local, no solo veraneo. Lo que no se encuentra es el comercio grande: el súper completo y muchas compras piden coche hacia Burela —villa pesquera a unos diez minutos—, donde también está el Hospital da Mariña. Quien elige San Cibrao elige playa y servicios básicos juntos: lo que no elige es autonomía total de compras. En Sargadelos esa misma mañana es más de río y cerámica, y más dependiente del coche para la orilla y para casi cada recado serio.",
  "Sin coche, San Cibrao aguanta la semana básica del núcleo marítimo; Sargadelos y el interior, casi no. Desde Cervo, el Hospital da Mariña —público comarcal en Burela— suele quedar a unos diez minutos; los aeropuertos útiles —Asturias, Santiago o A Coruña— rondan los noventa a ciento cinco minutos según ruta. Hay apeadero del tren de ancho métrico en San Cibrao y la N-642 / A-8 enlazan la costa, pero quien vive hacia Sargadelos suele necesitar el volante para playa, súper y gestiones. Burela cubre la compra grande y la sanidad comarcal; Cervo, a cambio, ofrece San Cibrao con mar delante o Sargadelos con identidad propia, separados en la práctica.",
  "Entre julio y noviembre cambia sobre todo el ritmo de San Cibrao. El 16 de julio, la Virgen del Carmen concentra procesión y gente en el núcleo marítimo. Hacia el segundo sábado de agosto, la Maruxaina —fiesta de interés turístico de Galicia en San Cibrao, con leyenda de sirena, desembarco y verbena— llena calles, paseo y accesos. El sábado siguiente al 16 de agosto, la Queimada Popular de Cervo reúne vecinos alrededor del ritual. Vivir en primera línea de O Torno o junto al paseo significa semanas más concurridas. Meses después, en un martes húmedo, el mismo tramo vuelve a sentirse pueblo marinero quieto. No son dos Cervo distintos: son dos ritmos que forman parte de vivir aquí todo el año.",
  "También por eso la elección entre San Cibrao y Sargadelos cambia bastante la vida diaria. En San Cibrao se tienen playa, paseo y servicios básicos cerca a diario; la compra grande pide Burela y agosto se nota más. En Sargadelos se gana la Real Fábrica, el Xunco y el Paseo dos Namorados —recorrido junto al río—; la toalla y casi cada compra seria piden coche. Esa diferencia de sitio acaba importando mucho más que la postal vista en un mapa.",
] as const;

const CLIMA_NUEVO2 = [
  "Cervo supone un cambio climático claro respecto a Mallorca. Hay bastante menos sol, la lluvia aparece con mucha más frecuencia y la humedad se nota en casa. La referencia local ronda 1.880 horas de sol al año, unos cuarenta días despejados y cerca de 1.050 mm de lluvia en unos ciento cuarenta y seis días —casi la mitad del año—. Mallorca ronda 2.800 horas de sol. En San Cibrao el viento y la niebla se notan más que hacia Sargadelos, más interior. También aquí llovizna en julio y agosto. Un día puede empezar gris, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 18,5 °C: no pasas el calor de Baleares. En O Torno o Cubelas —las playas del propio San Cibrao— el agua suele estar entre 17 y 19 °C. La bahía de la península da algo más de abrigo que una costa totalmente abierta, pero el baño sigue siendo de Cantábrico: fresco y con oleaje cuando el mar lo trae; no es agua calmada de ría. Quien vive en San Cibrao lo nota al abrir la ventana al salitre; quien vive hacia Sargadelos, al salir a un interior más quieto y más lejos del oleaje. Un frente gris de noviembre cuenta más que un sábado de sol en el paseo.",
] as const;

const VIVIR_NUEVO2 = [
  "De Mallorca a Cervo se llega a un municipio de dos ritmos —San Cibrao junto al mar o Sargadelos hacia el interior—, no a una villa caminable como Viveiro ni a un pueblo mínimo solo de horizonte. En Mallorca puede ser habitual pensar primero en kilómetros; aquí unos pocos minutos en coche separan las playas de O Torno del río Xunco —o convierten la misma semana en trayectos si vives en Sargadelos y quieres playa cada tarde—. Esa elección modifica decisiones tan sencillas como salir a comprar, ir a la toalla o dejar el coche.",
  "También cambia la relación entre coche, orilla y villa de apoyo. En San Cibrao se puede resolver lo básico del núcleo a pie y llegar a la playa el mismo día; el comercio grande y el hospital piden Burela a unos diez minutos. En Sargadelos el coche entra casi cada cambio de sitio fuera del paseo del río. A cambio, el silencio del interior y el mar delante en la península son reales. Ir y volver a Mallorca pide trayecto largo: aeropuerto usable alrededor de los noventa a ciento cinco minutos —Santiago suele cubrir Palma casi todo el año—. Se oye gallego en los núcleos; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. Agosto llena San Cibrao con la Maruxaina y las toallas de O Torno; en noviembre el mismo paseo recupera holgura y Sargadelos sigue quieto. Para alguien acostumbrado a Mallorca, donde también existe presión estival, la diferencia está en la escala: el cambio se concentra en una península pequeña y un interior de fábrica, no en una ciudad. Vivir aquí todo el año significa aceptar esas dos caras —San Cibrao concurrido en verano y meses húmedos con Burela como apoyo— como partes de una misma vida, no elegir únicamente un sábado de sol junto al faro.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Sargadelos da a Cervo una identidad que no depende del mar. A finales del siglo XVIII, Antonio Raimundo Ibáñez impulsó aquí la Real Fábrica —cerámica, hierro y un complejo industrial ilustrado junto al río Xunco—. El conjunto histórico fue declarado en 1972; hoy se camina el Paseo dos Namorados entre restos de fábrica, cerámica contemporánea y río. Queda así un polo de patrimonio y oficio, no una urbanización de costa. Cervo se entiende en A Mariña: San Cibrao, Sargadelos y una identidad que mezcla costa, oficio y cerámica histórica.",
  "San Cibrao cuenta la otra historia visible: península habitada, puerto y mar. El Museo Provincial do Mar —en el núcleo marítimo— concentra la memoria de pesca, navegación y costa lucense. El faro de A Atalaia marca el extremo de la punta. Quien mira solo la playa debe sumar ese oficio: San Cibrao no nació como postal de verano. Sargadelos aporta el relato industrial y cultural más reconocible; San Cibrao, el polo costero y portuario.",
  "El complejo industrial de San Ciprián —refinería de alúmina y fábrica de aluminio, repartido entre Cervo y Xove— añade la capa contemporánea de empleo y paisaje. En 2026 Alcoa asumió la propiedad íntegra del conjunto y reactivó la planta de aluminio; la refinería de alúmina seguía condicionada por el coste de la energía. Quien conozca Cervo solo por la playa de O Torno debe contar también con esa industria en el mismo mapa: se ve desde parte de la bahía y no es un detalle lejano. No convierte la fábrica en un tercer sitio donde vivir; sí obliga a situar la casa respecto a ella. El complejo industrial compartido con Xove añade silueta contemporánea al horizonte.",
  "Quien compra aquí elige entre esas herencias: San Cibrao con puerto, playa y servicios básicos juntos, o Sargadelos con cerámica y río sin playa debajo. No es el mismo Cervo en un anuncio genérico. Hoy comprar aquí es decidir entre San Cibrao, Sargadelos u otros núcleos, con Burela cerca para hospital. El anuncio único oculta esas diferencias.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "En San Cibrao el mar de casi todos los días es el Cantábrico frente a la península: agua con oleaje, salitre y una bahía abierta, no una lámina quieta de ría. O Torno y Cubelas son las playas del propio San Cibrao —arenales del núcleo, no pueblos de al lado—. Quien vive ahí puede llegar a ellas andando o en unos minutos; quien vive en Sargadelos las convierte en un trayecto corto en coche. Un martes de junio suele haber sitio para la toalla; un domingo de agosto el paseo y los accesos se llenan. Desde la bahía también se ve al fondo el complejo industrial de San Ciprián: costa e industria en la misma mirada. San Cibrao organiza buena parte del baño y del frente costero del municipio.",
  "Para caminar sin convertir la tarde en plan de coche, el paseo desde O Torno hacia A Atalaia —la punta con el faro al final de la península— convierte la orilla en horizonte. No es un boulevard urbano denso; es costa con viento. En Sargadelos, el Paseo dos Namorados junto al Xunco ofrece otra salida: río, sombra y fábrica, sin playa al final del camino. El Cantábrico aquí es abierto: ola, viento y verano concurrente en accesos.",
  "Cuando se quiere ampliar el día, Burela aporta lonja, comercio amplio y hospital; Xove, las playas de Esteiro y Portocelo; Viveiro, casco y la playa de Covas en su ría. Aquí el día a día pide elegir San Cibrao o Sargadelos; el mar, si se elige San Cibrao, no exige salir del núcleo. En verano el agua suele rondar los 19–21 °C; un martes de noviembre el frente respira.",
  "En San Cibrao la orilla forma parte de la puerta; en Sargadelos el río es la puerta y la playa queda fuera. Burela queda a unos diez minutos cuando hace falta lo que el municipio no cubre. Burela, Xove y Viveiro completan comarca. Elegir polo pesa más que inventariar playas de A Mariña.",
] as const;

const CASA_NUEVO2 = [
  "En Cervo la compra real elige entre San Cibrao y Sargadelos. Un anuncio que solo diga «Cervo» puede ocultar si la casa da al paseo y a O Torno, o al Xunco sin playa debajo.",
  "En San Cibrao abundan viviendas junto al núcleo marítimo; hacia Sargadelos y las parroquias, casas más ligadas al interior. Junto a la orilla notarás humedad, salitre y gente de agosto; hacia el interior, silencio antes y más coche para bajar a la playa. La fibra es parcial: conviene comprobarla dirección a dirección. Hay poca o ninguna obra nueva.",
  "El precio medio de referencia ronda 1.210 €/m². Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual un piso junto a O Torno y una casa cerca de Sargadelos.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra básica, el trayecto a Burela, la playa, y la salida hacia el hospital o el aeropuerto. En agosto, el aparcamiento en San Cibrao; en noviembre, la luz, el viento y la humedad. Cervo premia elegir bien el lado; castiga comprar solo la postal de la península.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "San Cibrao y Sargadelos no son intercambiables. Una vivienda «en Cervo» en el mapa puede significar playa y servicios básicos a pie sin comercio grande, o río y cerámica sin playa debajo. El complejo de San Ciprián forma parte del término: conviene situar la casa respecto a esa presencia. Comparar solo el precio inventa un Cervo que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el súper que se usaría —casi siempre Burela—, el coche y la playa. En San Cibrao, dónde se deja el coche en agosto y cómo se llega al paseo. También la luz, la orientación, el aislamiento, la ventilación y señales de humedad; junto a la orilla, salitre y viento; la fibra en esa dirección; y cómo se vive esa misma calle un domingo de la Maruxaina y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de costa en San Cibrao y de vivienda en el interior, pero lo que decide es el inmueble concreto. Un acceso sencillo, buen estado, luz y un sitio fácil de explicar —península práctica o Sargadelos bien situado— amplían el abanico de compradores; una casa muy expuesta, difícil de mantener o mal situada respecto a la rutina elegida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Cervo",
  a2: "102.245 €",
  a3: "141.570 €",
  b2: "82.583 €",
  b3: "114.345 €",
  m2: "1.210 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Cervo encaja si atrae San Cibrao —la península del municipio, con puerto, las playas de O Torno y Cubelas, paseo y farmacia cerca— o Sargadelos —el núcleo interior de la cerámica, junto al río Xunco y al Paseo dos Namorados, sin playa debajo—. Son dos partes del mismo concello, no villas vecinas. Hay que elegir dónde se vive porque no se vive igual. En San Cibrao se puede llegar a la toalla y resolver lo básico del núcleo andando; la compra grande y el Hospital da Mariña se hacen en Burela, a unos diez minutos. En Sargadelos ganan la Real Fábrica y el paseo del río, pero la playa y casi cada compra seria piden coche. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia, niebla y humedad.",
  "También encaja si se acepta que el complejo de San Ciprián forma parte del paisaje —se ve desde parte de la bahía— y que agosto en San Cibrao se nota más (Maruxaina, Carmen, toallas), eligiendo bien la calle y no la primera fila del paseo.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Cervo encaja peor si se necesita un comercio grande sin salir del municipio: aquí faltan hipermercado y densidad comercial —los servicios son 5/10 en nuestra escala— y eso importa porque la compra semanal amplia y muchas marcas se resuelven en Burela, a unos diez minutos, no en San Cibrao. Tampoco si se supone que cualquier dirección de Cervo tiene la misma relación con el mar que la península: en Sargadelos la playa pide coche. Y si el hospital debe quedar a pie, Burela está cerca pero no debajo.",
  "Tampoco si se espera un cielo parecido al de Mallorca, si la industria cercana pesa demasiado al elegir casa, o si se decide solo tras un sábado de sol en O Torno sin probar un noviembre ni el aparcamiento de la Maruxaina.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en San Cibrao y otra hacia Sargadelos. Desde cada casa: una compra sencilla —y el trayecto a Burela para la completa—, la playa que se usaría, y la salida hacia el hospital y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto en San Cibrao —Maruxaina, aparcamiento, ruido— y un día cubierto de noviembre (luz, viento, humedad). Situar la casa respecto al complejo de San Ciprián. Y comprobar la fibra y el estado de la vivienda en la dirección exacta.",
] as const;

const FOTO_COMO_SANCIBRAO = {
  src: "/fotos/a-marina/cervo-sancibrao.jpg",
  pie: "San Cibrao desde la playa: península, bloques y faro al fondo",
} as const;

const FOTO_COMO_TORNO = {
  src: "/fotos/a-marina/cervo-torno-nuevo.jpg",
  pie: "Monumento a la Paz en O Torno: mina desactivada entre obeliscos",
} as const;

const FOTO_HISTORIA_FABRICA = {
  src: "/fotos/a-marina/cervo-fabrica-sargadelos.jpg",
  pie: "Real Fábrica de Sargadelos: cerámica y piedra junto al Xunco",
} as const;

const FOTO_HISTORIA_PASEO = {
  src: "/fotos/a-marina/cervo-paseo-namorados.jpg",
  pie: "Presa del Paseo dos Namorados en Sargadelos",
} as const;

const FOTO_MAR_PORTO = {
  src: "/fotos/a-marina/cervo-porto-nuevo.jpg",
  pie: "Ensenada de San Cibrao: arena, barcas y espigón",
} as const;

const FOTO_MAR_FARO = {
  src: "/fotos/a-marina/cervo-faro.jpg",
  pie: "Faro de A Atalaia: torre blanca y negra en la punta",
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

export default function Nuevo2CervoPage() {
  const ficha = municipioPorSlug("cervo");
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
        <Foto src={FOTO_COMO_SANCIBRAO.src} pie={FOTO_COMO_SANCIBRAO.pie} />
        <Foto src={FOTO_COMO_TORNO.src} pie={FOTO_COMO_TORNO.pie} />
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
        <Foto src={FOTO_HISTORIA_FABRICA.src} pie={FOTO_HISTORIA_FABRICA.pie} />
        <Foto src={FOTO_HISTORIA_PASEO.src} pie={FOTO_HISTORIA_PASEO.pie} />
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
        <Foto src={FOTO_MAR_PORTO.src} pie={FOTO_MAR_PORTO.pie} />
        <Foto src={FOTO_MAR_FARO.src} pie={FOTO_MAR_FARO.pie} />
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="1.210 €/m²" />
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
