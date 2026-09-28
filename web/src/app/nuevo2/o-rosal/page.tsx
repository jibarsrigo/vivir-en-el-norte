import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
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
 * NUEVO2 — O Rosal (Baixo Miño).
 * Texto: Lote_Baixo_Mino_5_CERTIFICADOS_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Baixo Miño reúne formas bastante distintas de vivir en el extremo suroeste de Galicia. A Guarda concentra puerto, comercio y servicios junto a la desembocadura del Miño; Oia se extiende entre el Atlántico y la sierra de A Groba; Tomiño ocupa una vega más amplia y dispersa junto al río; y Tui aporta una pequeña ciudad histórica y fronteriza.",
  "O Rosal ocupa una posición intermedia entre esos mundos. Es un municipio de valle, viñedo y pequeños núcleos, encerrado entre la sierra de A Groba, el entorno del monte Santa Trega y el Miño. El mar está cerca, pero no organiza directamente la vida cotidiana como en A Guarda u Oia.",
  "O Calvario funciona como núcleo principal: allí se concentran ayuntamiento, plaza y parte de los servicios. Fuera de él, lugares como San Miguel de Tabagón, As Eiras, Fornelos o Martín cambian la experiencia hacia una vida más dispersa, ligada a carreteras locales, fincas, viñedos y al coche.",
  "La parte oriental del municipio introduce además una relación directa con el agua que no es marítima: el Miño y el Tamuxe ofrecen caminos de ribera, zonas recreativas y baño fluvial. Por eso vivir en O Rosal puede significar tener el centro del pueblo cerca, vivir entre viñas o estar más próximo al río. La dirección concreta importa.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "O Rosal combina un pequeño núcleo donde se pueden resolver bastantes cosas a pie con un territorio residencial mucho más extendido. Esa diferencia es la primera que conviene entender.",
  "En O Calvario hay plaza, comercio básico, farmacia y atención primaria. Vivir cerca permite incorporar parte de los recados a una rutina peatonal y mantener una relación reconocible con un centro. No alcanza la autonomía urbana de Tui ni la concentración comercial de A Guarda, pero tampoco obliga a coger el coche para absolutamente todo.",
  "Fuera del núcleo cambia la escala. Las casas se reparten entre carreteras locales, viñedos y pequeños lugares. Allí el coche gana peso para compra, actividades, gestiones y desplazamientos entre distintas partes del municipio.",
  "A Guarda funciona como apoyo cercano para ampliar comercio y servicios y queda aproximadamente a diez o quince minutos desde buena parte del valle. Para atención hospitalaria de mayor complejidad la referencia práctica está en el área de Vigo; el Álvaro Cunqueiro queda en el orden de 40 km y unos 40 minutos desde el núcleo de referencia.",
  "El autobús permite algunos desplazamientos por la comarca y hacia otros núcleos, pero O Rosal no tiene tren y la dispersión hace que su utilidad dependa mucho de dónde esté la vivienda. Para una casa alejada de O Calvario, disponer de coche simplifica claramente la semana.",
  "El municipio mantiene vida local durante todo el año. En julio, la Feira do Viño transforma durante unos días la Praza do Calvario en un punto de encuentro mucho más concurrido. El resto del año devuelve el protagonismo al ritmo de pueblo, las parroquias, las bodegas, las fincas y los recorridos cotidianos.",
  "O Rosal no funciona como destino de playa que se enciende en verano y se apaga en invierno.",
] as const;

const CLIMA_NUEVO2 = [
  "O Rosal supone un cambio claro frente a Mallorca. El verano es más suave y húmedo, con una temperatura media estival en torno a los 20 °C. Los episodios de calor pueden aparecer, pero no organizan toda la estación como ocurre con mayor facilidad en el Mediterráneo.",
  "La diferencia más evidente llega durante la parte húmeda del año. Otoño e invierno traen más lluvia, más días cubiertos y una humedad ambiental mucho más persistente. El valle permanece verde precisamente porque recibe agua con una regularidad desconocida en buena parte de Mallorca.",
  "O Rosal está algo retirado de la primera línea atlántica y más protegido del viento directo que Oia. Eso cambia la sensación respecto a la costa abierta: menos exposición marina inmediata, pero más protagonismo del valle, las superficies húmedas y la vegetación.",
  "En una vivienda, la consecuencia práctica aparece en orientación, ventilación, aislamiento y entrada de sol. Una casa de piedra o una planta baja rodeada de terreno puede resultar muy agradable y, al mismo tiempo, necesitar especial atención a humedad, cubierta y ventilación durante el invierno.",
  "La visita decisiva no es solo la de una tarde luminosa entre viñedos. Conviene ver cómo entra el sol cuando está bajo, cómo seca la parcela después de varios días húmedos y qué habitaciones conservan más humedad.",
] as const;

const VIVIR_NUEVO2 = [
  "Frente a Mallorca, el cambio de O Rosal no consiste únicamente en pasar de un clima mediterráneo a uno atlántico. Cambia también la relación entre pueblo, casa y territorio.",
  "Aquí es posible vivir rodeado de viñedo o con una pequeña finca sin quedar necesariamente aislado de un núcleo. O Calvario proporciona una referencia cotidiana y A Guarda amplía el radio a pocos minutos. Esa combinación distingue O Rosal tanto de la dispersión costera de Oia como de una pequeña ciudad como Tui.",
  "El coche sigue teniendo un papel importante, sobre todo fuera del núcleo. Pero no todos los desplazamientos son largos: parte de la vida consiste precisamente en unir lugares cercanos del valle, bajar hacia A Guarda o acercarse al Miño y al Tamuxe.",
  "El agua también se vive de otra manera. El océano no está delante de casa, pero la costa de A Guarda queda a un desplazamiento corto y el propio municipio ofrece ribera y baño fluvial. Eso permite alternar valle, río y costa sin que ninguno monopolice la rutina.",
  "La vida social tiene escala local. Plaza, bodegas, fiestas y relaciones vecinales pesan más que una gran oferta de ocio urbano. En julio, la Feira do Viño llena O Calvario de actividad; el resto del año la escala vuelve a ser mucho más pequeña.",
  "Frente a Mallorca, O Rosal cambia servicios concentrados y menor dependencia del coche por una vida de valle con un pequeño centro de referencia, más vivienda con terreno y acceso cercano al río y a la costa. Esa combinación funciona mejor para quien acepta desplazarse más a cambio de espacio y entorno rural.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "O Rosal se entiende a través del agua y del trabajo agrícola. Durante generaciones, viña, maíz y huerta compartieron un territorio en el que los cursos de agua se aprovecharon también para mover molinos.",
  "La expresión más espectacular de ese sistema son los Muíños do Folón e do Picón: 67 molinos hidráulicos, principalmente de los siglos XVII y XVIII, agrupados en dos laderas de la sierra de A Groba. Los canales conducían el agua de unos molinos a otros y permitían aprovechar el desnivel para moler el cereal. Hoy el conjunto está protegido como Bien de Interés Cultural y sigue mostrando físicamente cómo una infraestructura de trabajo podía modelar una montaña entera.",
  "El vino terminó convirtiéndose en otra de las grandes señas del valle. O Rosal forma parte de la Denominación de Origen Rías Baixas y el viñedo continúa siendo paisaje y actividad económica, no únicamente decoración rural. Las parras, bodegas y fincas explican buena parte de lo que se ve al recorrer el municipio.",
  "Otra memoria propia es la de los cabaqueiros, trabajadores que salían temporalmente de O Rosal para fabricar tejas y ladrillos. Su oficio llegó a generar un vocabulario gremial propio, conocido como latín dos cabaqueiros. Un monumento en la Praza do Calvario recuerda todavía esa tradición de trabajo itinerante.",
  "El Miño y la proximidad de Portugal completan esa historia. El valle ha vivido ligado a una frontera que durante mucho tiempo separó economías y que hoy se atraviesa con normalidad. Esa relación ayuda a entender por qué el territorio mira a la vez hacia el río, la costa y los núcleos portugueses de la otra orilla.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "O Rosal no tiene costa marítima, pero sería engañoso resumirlo como un municipio sin agua cotidiana. La experiencia se reparte entre el baño fluvial dentro del propio municipio, los caminos junto al Miño y el Tamuxe y la costa de A Guarda cuando se quiere Atlántico.",
  "Para caminar con frecuencia, el recurso más fácil es el Sendeiro de Pescadores Miño–Tamuxe. Es un recorrido lineal de unos 7,5 km, aproximadamente hora y media, de dificultad baja y con zonas de sombra y descanso. Atraviesa bosque de ribera, juncales y áreas recreativas y pasa por el entorno de San Miguel y el Tamuxe.",
  "No hace falta recorrerlo entero. Desde As Eiras, San Miguel o As Aceñas se puede entrar en el sendero y adaptar la distancia al tiempo disponible. Es una opción mucho más repetible para el día normal que una ruta de montaña.",
  "El municipio tiene además baño fluvial propio. La Praia das Eiras, junto al Miño, dispone de arenal y conecta directamente con el Sendeiro de Pescadores. En As Aceñas, junto al Tamuxe, hay otra zona habilitada para el baño, con sombra, mesas y caminos junto al río.",
  "Eso cambia bastante la comparación con una localidad puramente interior: no hace falta salir de O Rosal cada vez que se quiere estar junto al agua en verano.",
  "Para baño de mar, la lógica es distinta. Area Grande y otras playas de A Guarda quedan aproximadamente a diez o quince minutos según el punto de partida. El Atlántico es por tanto una salida próxima, no el paisaje inmediato de la vivienda.",
  "La gran caminata propia del municipio es otra. La ruta de los Muíños do Folón e do Picón es circular, tiene unos 3,5 km y se recorre aproximadamente en hora y media. La distancia engaña: hay suelo irregular, escalones y pendientes. Se puede subir por una de las laderas y bajar por la otra, atravesando las dos agrupaciones de molinos.",
  "No es el equivalente a un paseo llano después de comer. Es una salida corta pero deliberada, con desnivel y un paisaje muy reconocible de piedra, agua, bosque y vistas sobre el valle.",
  "Entre ambos recorridos aparece una combinación poco habitual: un paseo fluvial fácil para repetir, una ruta de ladera con identidad propia y el Atlántico a pocos minutos en coche. En O Rosal, el mar es salida; el río y el valle pueden entrar mucho más fácilmente en la semana normal.",
] as const;

const CASA_NUEVO2 = [
  "La vivienda típica de O Rosal está más ligada al terreno que a la primera línea: casas de piedra, viviendas unifamiliares, chalés, parcelas y propiedades entre viñedo o pequeños núcleos.",
  "En O Calvario y su entorno se gana cercanía a servicios y una rutina más sencilla. Poder llegar andando a una parte de los recados reduce la dependencia del coche y hace que la experiencia se acerque más a la de un pueblo reconocible.",
  "En lugares como San Miguel de Tabagón o As Eiras cambia el atractivo: aparece una relación más directa con el Miño y el Tamuxe, las áreas recreativas y los caminos de ribera. La contrapartida es medir con precisión dónde quedan los servicios que se utilizarán cada semana.",
  "Las posiciones de ladera o las casas más rurales ofrecen otra experiencia: parcela, vistas sobre el valle y contacto inmediato con viñedo y monte. Allí conviene comprobar accesos, pendiente, orientación y cuánto coche exige realmente la dirección.",
  "En una vivienda antigua, la piedra y el carácter tradicional no sustituyen una buena rehabilitación. Cubierta, carpinterías, ventilación, aislamiento y señales de humedad merecen una revisión detenida. En casas con finca también importan drenaje, muros, cierres y facilidad de mantenimiento del terreno.",
  "La orientación puede marcar una diferencia grande durante el invierno. Una terraza atractiva en verano puede recibir poco sol en los meses húmedos; una casa bien orientada puede aprovechar mucho mejor las horas de luz disponibles.",
  "Como referencia municipal, O Rosal se sitúa en 1.190 €/m².",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "No conviene comparar una vivienda próxima a O Calvario, una casa junto al entorno fluvial de San Miguel o As Eiras y una propiedad en una posición rural o de ladera como si ofrecieran la misma vida. Antes de comparar precios hay que comparar la rutina: posibilidad de hacer recados andando, salida hacia A Guarda, acceso al río, tiempo real de coche, orientación y mantenimiento de la parcela.";

const CASA_QUE_CONVIENE_REVISAR =
  "Desde la dirección concreta, hacer los recorridos que se repetirían durante la semana: compra básica, centro de O Calvario, incorporación a la carretera hacia A Guarda y un paseo que pueda hacerse sin coger el coche. Conviene visitar también después de varios días húmedos. Revisar orientación, entrada de luz, ventilación, cubierta, paredes, carpinterías, drenaje, parcela y zonas que permanezcan mojadas permite entender mejor la vivienda que una visita aislada con buen tiempo. La fibra debe comprobarse en la dirección concreta, especialmente en posiciones más alejadas. En casas rehabilitadas o con construcciones auxiliares también conviene revisar situación urbanística y alcance efectivo de las obras realizadas. Si el atractivo principal es el terreno, hay que imaginar su mantenimiento durante todo el año: accesos, pendientes, cierres, vegetación, agua y tiempo necesario para mantenerlo.";

const CASA_MERCADO_REVENTA =
  "O Rosal combina demanda residencial local con el atractivo de una vivienda de valle relativamente próxima a la costa. En una futura venta puede ayudar que la casa resulte utilizable para perfiles distintos: buen acceso, orientación, estado, aparcamiento y una relación sencilla con O Calvario o las carreteras principales amplían ese grupo. Una vivienda muy dependiente del coche, con humedad difícil de resolver, accesos incómodos o una parcela especialmente exigente puede limitarlo.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m².";

const CASA_FILA_PRECIOS = {
  municipio: "O Rosal",
  a2: "100.555 €",
  a3: "139.230 €",
  b2: "81.218 €",
  b3: "112.455 €",
  m2: "1.190 €/m²",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Puede encajar si se busca una vida de valle con un pequeño núcleo de referencia, viñedo y casas con terreno, y basta con tener el Atlántico a un desplazamiento corto en lugar de delante de la vivienda.",
  "También si se valora poder alternar paisajes sin hacer grandes viajes: paseo junto al Miño o el Tamuxe, baño fluvial dentro del municipio, molinos y monte para caminar con más desnivel y playas de A Guarda cuando se quiere mar.",
  "Y puede encajar si una vivienda unifamiliar con parcela pesa más que disponer de una gran concentración de servicios. O Calvario permite resolver parte de la rutina; A Guarda amplía el radio a pocos minutos y Vigo queda para necesidades de otra escala.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Puede encajar peor si el océano tiene que formar parte del paseo diario desde casa. O Rosal está cerca de la costa, pero su paisaje cotidiano es de valle, río, viñedo y monte.",
  "También si se necesita una vida urbana ampliamente resoluble andando. O Calvario ayuda mucho respecto a una casa completamente dispersa, pero comercio especializado, hospital y muchas actividades siguen requiriendo desplazamiento.",
  "Y puede ser una mala elección si la humedad en una vivienda o el mantenimiento de una parcela resultan cargas poco deseables. Una casa de piedra con terreno puede ser precisamente el atractivo de O Rosal, pero necesita comprobarse como vivienda de todo el año y no solo como imagen rural.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Empezar por O Calvario un día normal. Hacer una compra sencilla, caminar por el núcleo y comprobar qué parte de la rutina podría resolverse realmente sin coche.",
  "Después repetir la prueba desde la vivienda. Medir el trayecto hasta O Calvario, A Guarda y la salida habitual hacia Vigo permite convertir expresiones como «todo está cerca» en una semana concreta.",
  "Si la casa está hacia San Miguel, As Eiras o el entorno del Tamuxe, conviene caminar un tramo del Sendeiro de Pescadores y comprobar si esa proximidad al río entraría realmente en la vida diaria. Si está hacia la ladera, hacer lo mismo con los accesos, la pendiente y el tiempo necesario para bajar al núcleo.",
  "Visitar la Praia das Eiras o As Aceñas permite comprobar qué significa disponer de baño fluvial dentro del municipio. Después conviene conducir hasta una playa habitual de A Guarda. Son dos experiencias distintas y saber cuál se utilizaría más ayuda a elegir microzona.",
  "La vivienda merece al menos una visita después de lluvia. Mirar luz, ventilación, paredes, cubierta, drenaje y terreno en esas condiciones es especialmente útil en un valle húmedo.",
  "Y si el atractivo principal es una casa con viña, huerto o una parcela grande, conviene calcular la rutina que acompaña al paisaje: mantenimiento, desplazamientos, aparcamiento, acceso y servicios primero; vistas y metros de terreno después.",
] as const;

const FOTO_COMO_CONCELLO = {
  src: "/fotos/baixo-mino/rosal-concello.jpg",
  pie: "Casa do concello: el núcleo de O Calvario",
} as const;

const FOTO_COMO_TAMUXE = {
  src: "/fotos/baixo-mino/rosal-tamuxe.jpg",
  pie: "San Miguel de Tabagón: calle de pueblo y puente sobre el Tamuxe",
} as const;

const FOTO_HISTORIA_TABAGON = {
  src: "/fotos/baixo-mino/rosal-tabagon.jpg",
  pie: "Igrexa de San Xoán de Tabagón: piedra de parroquia",
} as const;

const FOTO_HISTORIA_FOLON = {
  src: "/fotos/baixo-mino/rosal-folon-vista.jpg",
  pie: "Muíños do Folón e do Picón: sesenta y siete molinos en cascada",
} as const;

const FOTO_MAR_ALAMEDA = {
  src: "/fotos/baixo-mino/rosal-alameda.jpg",
  pie: "Alameda de San Miguel: paseo entre parra y pueblo",
} as const;

const FOTO_MAR_CRUZ = {
  src: "/fotos/baixo-mino/rosal-calvario-cruz.jpg",
  pie: "Cruceiro en O Calvario: el detalle que marca plaza",
} as const;

const CREDITO_FOTOS = "Wikimedia Commons (CC BY-SA).";

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

function ConNegritas({ texto, fragmentos }: { texto: string; fragmentos: string[] }) {
  const nodos: ReactNode[] = [];
  let resto = texto;
  fragmentos.forEach((fragmento, idx) => {
    const i = resto.indexOf(fragmento);
    if (i === -1) {
      throw new Error(`Negrita: fragmento no encontrado — ${fragmento.slice(0, 48)}`);
    }
    nodos.push(resto.slice(0, i));
    nodos.push(<strong key={`${idx}-${fragmento.slice(0, 24)}`}>{fragmento}</strong>);
    resto = resto.slice(i + fragmento.length);
  });
  nodos.push(resto);
  return <>{nodos}</>;
}

export default function Nuevo2ORosalPage() {
  const ficha = municipioPorSlug("o-rosal");
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

      <BloqueZonaFicha zonaId={z.id} nombreZona={z.zona} resumen={RESUMEN_ZONA_NUEVO2[0]} />
      {RESUMEN_ZONA_NUEVO2.slice(1).map((p) => (
        <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed text-[var(--tinta)]">
          {p}
        </p>
      ))}

      <MapaMunicipioFicha ficha={ficha} capasPortada={Boolean(ficha.mapa)} />

      <DesplegableNuevo2 titulo="Cómo se vive" varianteTarjetaV1>
        {COMO_SE_VIVE_NUEVO2.map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_COMO_CONCELLO.src} pie={FOTO_COMO_CONCELLO.pie} />
        <Foto src={FOTO_COMO_TAMUXE.src} pie={FOTO_COMO_TAMUXE.pie} />
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
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={DE_DONDE_VIENE_NUEVO2[1]} fragmentos={["67 molinos hidráulicos"]} />
        </p>
        <Foto src={FOTO_HISTORIA_TABAGON.src} pie={FOTO_HISTORIA_TABAGON.pie} />
        <Foto src={FOTO_HISTORIA_FOLON.src} pie={FOTO_HISTORIA_FOLON.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{DE_DONDE_VIENE_NUEVO2[2]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          Otra memoria propia es la de los <strong>cabaqueiros</strong>, trabajadores que
          salían temporalmente de O Rosal para fabricar tejas y ladrillos. Su oficio llegó a
          generar un vocabulario gremial propio, conocido como{" "}
          <em>latín dos cabaqueiros</em>. Un monumento en la Praza do Calvario recuerda todavía
          esa tradición de trabajo itinerante.
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{DE_DONDE_VIENE_NUEVO2[4]}</p>
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Mar, río y camino" varianteTarjetaV1>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[0]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas
            texto={MAR_RIO_CAMINO_NUEVO2[1]}
            fragmentos={[
              "Sendeiro de Pescadores Miño–Tamuxe",
              "7,5 km",
              "hora y media",
            ]}
          />
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[2]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={MAR_RIO_CAMINO_NUEVO2[3]} fragmentos={["baño fluvial propio"]} />
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[4]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[5]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas
            texto={MAR_RIO_CAMINO_NUEVO2[6]}
            fragmentos={["Muíños do Folón e do Picón", "3,5 km", "hora y media"]}
          />
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[7]}</p>
        <Foto src={FOTO_MAR_ALAMEDA.src} pie={FOTO_MAR_ALAMEDA.pie} />
        <Foto src={FOTO_MAR_CRUZ.src} pie={FOTO_MAR_CRUZ.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[8]}</p>
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Casa" varianteTarjetaV1>
        {CASA_NUEVO2.slice(0, 6).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={CASA_NUEVO2[6]} fragmentos={["1.190 €/m²"]} />
        </p>

        <EnlaceIdealista ambito="municipio" slug={ficha.slug} nombre={ficha.municipio} />

        <div className="mt-6 pt-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--tinta-suave)]">
            Precio y bandas
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
