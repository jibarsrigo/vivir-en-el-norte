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
 * NUEVO2 — Oia (Baixo Miño).
 * Texto: Lote_Baixo_Mino_5_CERTIFICADOS_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Baixo Miño reúne formas muy distintas de vivir en el extremo suroeste de Galicia: A Guarda concentra puerto, comercio y servicios junto a la desembocadura del Miño; Oia ocupa una franja estrecha entre el Atlántico y la sierra de A Groba; O Rosal combina valle, viñedo y ribera; Tomiño se extiende por la vega del Miño; y Tui aporta una pequeña ciudad histórica y fronteriza. Portugal queda al otro lado del río y Vigo funciona como apoyo urbano mayor.",
  "Oia ocupa la parte más atlántica y dispersa de la zona, con unos 18 km de costa y pequeños núcleos entre el mar y la sierra. Santa María de Oia concentra el monasterio y O Arrabal; Viladesuso y Mougás continúan por el corredor litoral; Burgueira y Loureza quedan hacia el interior.",
  "La diferencia residencial está en cuánto Atlántico entra realmente en la rutina: vivir junto al corredor costero no se parece a hacerlo en los valles interiores, aunque todo pertenezca al mismo municipio.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Oia no ofrece una vida de centro urbano compacto. La rutina se reparte entre pequeños núcleos y la PO-552 funciona como eje práctico de buena parte del municipio. Elegir casa significa, por tanto, elegir también qué parte de esa geografía entrará en el día normal.",
  "Santa María es la opción que permite una relación más inmediata con el núcleo histórico: monasterio, O Arrabal, costa y Camino Portugués pasan por el mismo pequeño ámbito. O Arrabal conserva calles estrechas, pequeñas plazas y casas tradicionales alrededor del monasterio. Es un lugar donde se puede salir andando a mirar el mar o recorrer el barrio sin convertir cada paseo en un desplazamiento en coche.",
  "Viladesuso y Mougás funcionan de otra manera. Son núcleos costeros más extendidos a lo largo del eje viario. Se mantiene muy cerca el Atlántico y se gana una posición cómoda para moverse hacia Baiona, pero la experiencia es menos la de bajar a un centro compacto que la de enlazar puntos repartidos por carretera.",
  "Burgueira y Loureza introducen otra Oia: valles interiores, monte y núcleos rurales separados del corredor litoral. Allí vivir en el mismo municipio no significa tener el mar incorporado de la misma forma a la puerta de casa.",
  "Hay servicios básicos dentro del municipio: centro de salud, farmacia, colegios, escuela infantil y servicios municipales. Eso permite resolver una parte de la rutina sin salir de Oia, pero no convierte al municipio en autosuficiente para todas las compras, gestiones o necesidades sanitarias.",
  "Para compras, gestiones o servicios que no se resuelven dentro del municipio, A Guarda queda hacia el sur y Baiona hacia el norte. Desde Santa María de Oia ambos están aproximadamente a unos veinte minutos en coche, aunque el tiempo cambia según el núcleo de salida. Para una oferta urbana mucho mayor hay que continuar hacia Vigo.",
  "La atención primaria se resuelve en el municipio. Para atención hospitalaria de mayor complejidad la referencia práctica está en el área de Vigo; el Hospital Álvaro Cunqueiro queda aproximadamente a 40 km y unos 40 minutos desde el núcleo de referencia. Son tiempos orientativos que cambian con el punto de salida y el tráfico.",
  "Hay autobús por el corredor costero y conexiones hacia Baiona, Nigrán y Vigo, pero en un municipio tan disperso el coche sigue teniendo un peso alto en la rutina. La dirección concreta importa mucho: una vivienda puede quedar a pocos minutos en coche de varios servicios y, al mismo tiempo, no tener casi ninguno concentrado a una distancia cómoda para ir andando.",
] as const;

const CLIMA_NUEVO2 = [
  "Oia supone un cambio claro respecto a Mallorca. El verano es bastante más suave y la idea de calor estable durante semanas pierde protagonismo. En esta parte de la costa gallega, julio y agosto se mueven aproximadamente alrededor de los 20 °C de temperatura media, lejos de un verano mediterráneo dominado por el calor.",
  "La segunda diferencia es la humedad. El año está mucho más marcado por la llegada de frentes atlánticos, lluvia y alternancia de jornadas húmedas y abiertas. Eso no significa vivir bajo lluvia continua: significa que terraza, paseo y vida exterior dependen más del tiempo del día y menos de una larga temporada de estabilidad casi garantizada.",
  "En Oia se añade una circunstancia local decisiva: el municipio está directamente expuesto al Atlántico y encajado contra la sierra de A Groba. En la franja litoral, viento, humedad salina y exposición de la fachada occidental pueden importar tanto como la temperatura media. Dos casas separadas por poca distancia pueden funcionar de manera distinta si una queda muy abierta al océano y otra más protegida.",
  "Eso cambia la vivienda. Una visita de verano con las ventanas abiertas dice poco sobre cómo funcionará una casa en enero. Orientación, entrada de luz, ventilación, aislamiento, cubierta, carpinterías y signos de humedad merecen atención.",
  "También cambia la manera de planificar el exterior. El verano permite mucha vida fuera sin el calor fuerte de Mallorca, pero el año invita menos a dar por supuesto que playa, terraza o paseo funcionarán siempre con tiempo estable. Un día templado y cubierto, sin embargo, puede seguir siendo perfectamente utilizable para caminar por la costa o el monte.",
] as const;

const VIVIR_NUEVO2 = [
  "El cambio no termina en el clima. Oia ofrece mucha costa pero poca ciudad. En la vida diaria hay que distinguir qué puede resolverse en el propio núcleo y para qué será necesario conducir hacia A Guarda, Baiona o Vigo.",
  "También cambia cómo se vive el mar. Aquí el Atlántico puede estar delante de la ventana y, sin embargo, no existir debajo de casa una gran playa de arena en la que instalar espontáneamente una tarde de baño. La costa de Oia es abierta y rocosa; sus pequeños espacios de baño, las mareas y las pozas interiores obligan a relacionarse con el agua de otra manera.",
  "El coche adquiere por eso un papel importante. No necesariamente hace falta cogerlo para salir a caminar si la vivienda está junto al Camino o en Santa María, pero aparece con facilidad para compras mayores, determinados servicios, playas más cómodas o actividades situadas en otra parroquia.",
  "Mar, monte y pequeños núcleos rurales están muy juntos físicamente. Desde la costa se puede pasar en pocos kilómetros de las casas junto al Atlántico a pistas y caminos de la sierra de A Groba. Esa proximidad no elimina la dispersión: forma parte de ella.",
  "El Camino Portugués de la Costa añade además un ritmo propio. Los peregrinos atraviesan unos veinte kilómetros del municipio y pasan por varios de sus núcleos. Su presencia da movimiento a determinados tramos y negocios, sobre todo en temporada, pero Oia continúa siendo un municipio pequeño cuando esa circulación baja.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "La forma actual de Oia empieza mucho antes del monasterio. En sus montes aparecen petroglifos —grabados realizados sobre la roca— y asentamientos antiguos que muestran una ocupación humana muy anterior a la configuración de los núcleos actuales. En A Cabeciña, sobre Mougás, esas huellas prehistóricas forman parte todavía del paisaje.",
  "Pero el elemento que explica mejor la forma de Santa María es el monasterio. La primera referencia escrita es de 1137, cuando aparecen unidos tres pequeños monasterios de la zona; en 1185 la comunidad quedó vinculada a la orden del Císter. La iglesia medieval y las ampliaciones posteriores crearon junto al mar un gran conjunto religioso que no quedó aislado: a su alrededor creció O Arrabal, el pequeño barrio de calles, plazas y casas tradicionales que todavía acompaña al monasterio.",
  "Su posición frente al Atlántico tampoco fue solamente contemplativa. Durante la Edad Moderna el conjunto se fortificó y dispuso de artillería para defender este tramo de costa frente a incursiones marítimas. De ahí procede la historia de los llamados «monjes artilleros». Las murallas y la propia posición del monasterio frente al agua se entienden mejor sabiendo que aquel borde marítimo era también un frente que había que vigilar y defender.",
  "La relación entre comunidad y territorio continuó tierra adentro. En la sierra de A Groba pervive la tradición de los curros y la Rapa das Bestas: caballos que viven libres en el monte son reunidos periódicamente para su manejo y cuidado. Esa práctica muestra una relación ganadera con los montes que todavía forma parte de la identidad del municipio.",
  "El Camino Portugués de la Costa superpone hoy otra línea al territorio. Recorre la franja atlántica y vuelve a conectar los pequeños núcleos entre sí a pie. Por eso en Oia conviven huellas prehistóricas, monásticas, rurales y jacobeas sin que ninguna explique por sí sola todo el municipio.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "En Oia hay que separar tres experiencias: tener el Atlántico delante, poder caminar junto a él y disponer de un lugar cómodo para bañarse. No son equivalentes.",
  "Para caminar con frecuencia, el recurso más sencillo en la franja litoral es aprovechar tramos del Camino Portugués de la Costa. El itinerario atraviesa unos 20 km del municipio; no hace falta recorrer una etapa completa para incorporarlo a la rutina. Desde Santa María se puede salir por el Camino, caminar en una dirección y regresar por el mismo trazado.",
  "El recorrido no es un paseo marítimo urbano continuo. Combina caminos y tramos ligados al corredor litoral y continúa hacia Mougás y Cabo Silleiro. Puede servir como paseo repetible precisamente porque permite adaptar la distancia; lo que no ofrece es la regularidad de un paseo marítimo ancho, protegido y equipado de principio a fin. La exposición al sol, al viento y al tiempo atlántico forma parte del recorrido.",
  "Si se quiere monte, cambia la escala. Las rutas de Oia incorporan pistas, caminos y desnivel por la sierra y funcionan mejor como salidas deliberadas que como el paseo inmediato de después de comer.",
  "El baño marítimo es más condicionado. La playa de Santa María está justo frente al monasterio, pero es pequeña y depende mucho de la marea. En bajamar aparecen arena, cantos y roca; cuando sube el agua, la playa queda casi completamente cubierta. Vivir al lado permite acercarse al agua andando, pero no equivale a tener una playa amplia y estable disponible a cualquier hora.",
  "Aquí hay que mirar no solo el tiempo sino también la marea y el estado del Atlántico. El propio carácter rocoso y abierto de esta costa hace que «tener playa delante» no describa suficientemente la experiencia de baño.",
  "Oia ofrece además baño de agua dulce. En Mougás, el río Peito desciende entre roca y vegetación formando cascadas y pozas naturales. Su aspecto y caudal cambian con la lluvia; no funcionan como una piscina ni como sustituto automático de la playa, sino como un lugar natural al que se va expresamente.",
  "Según dónde se viva, un tramo del Camino costero puede entrar en el paseo habitual; las rutas de monte requieren dedicar más tiempo; la pequeña playa de Santa María depende mucho de la marea; y las pozas de Mougás exigen desplazarse expresamente. En Oia es más fácil tener el océano presente cada día que disponer de una playa amplia y previsible para el baño.",
] as const;

const CASA_NUEVO2 = [
  "En Oia, mirar vivienda significa decidir primero qué parte del municipio se quiere habitar.",
  "La oferta está muy marcada por casas independientes, viviendas de piedra, chalés y propiedades con terreno. Eso permite encontrar espacio exterior, vistas abiertas y separación de vecinos, pero también traslada al propietario más mantenimiento de cubierta, fachada, parcela, cierres y accesos.",
  "La franja Santa María–Viladesuso–Mougás permite mantener el Atlántico muy presente y facilita el acceso a la PO-552. Dentro de ella, sin embargo, una casa en O Arrabal no funciona igual que un chalet disperso junto a la carretera. La primera puede permitir salir andando al pequeño núcleo histórico y al Camino; la segunda puede ofrecer parcela, aparcamiento y vistas más abiertas a cambio de depender más del coche para casi cualquier recado.",
  "Burgueira y Loureza cambian de nuevo el equilibrio. Allí la casa puede relacionarse más con valle y monte que con la costa inmediata. Un anuncio que solo diga «Oia» oculta por tanto una diferencia residencial importante.",
  "En primera línea o en posiciones muy expuestas al oeste conviene mirar más allá de la vista al mar. Carpinterías, cubierta, fachadas, ventilación y señales de humedad merecen inspección detenida; el ambiente marino añade además exposición salina a elementos metálicos exteriores. En una casa antigua de piedra hay que comprobar qué parte del atractivo material viene acompañada de una rehabilitación efectiva y qué parte queda todavía por resolver.",
  "También importa la carretera. Una vivienda junto a la PO-552 puede simplificar enormemente las salidas hacia A Guarda o Baiona, pero hay que comprobar ruido, seguridad de entrada y salida, posibilidad real de aparcar y cómo se camina por el entorno. Una casa algo más apartada puede ganar tranquilidad y perder facilidad para resolver la rutina.",
  "Como referencia municipal, Oia se sitúa alrededor de 1.370 €/m².",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "La experiencia cambia mucho por parroquia y por la distancia real a los servicios. No comparar una casa de O Arrabal, una vivienda costera en Mougás y una propiedad interior en Loureza como si fueran tres versiones del mismo producto. Antes del precio hay que comparar la rutina: compra cotidiana, coche, paseo, costa y salida hacia los núcleos de apoyo.";

const CASA_QUE_CONVIENE_REVISAR =
  "Hacer desde la casa los recorridos que realmente se repetirían: llegar al coche, comprar algo, incorporarse a la PO-552 si procede y salir andando durante media hora. Revisar orientación, luz, ventilación, cubierta, humedades, carpinterías, corrosión exterior, estado de muros, parcela, pendientes, accesos y aparcamiento. La fibra no debe darse por supuesta en una vivienda concreta. En rehabilitación, conviene comprobar además la situación urbanística y el alcance real de las obras antes de valorar el precio como una oportunidad.";

const CASA_MERCADO_REVENTA =
  "Oia tiene un mercado pequeño en el que el inmueble concreto pesa especialmente. Una futura venta dependerá de cuántos perfiles puedan utilizar cómodamente la vivienda: acceso sencillo, buen estado, luz, aparcamiento y una relación práctica con carretera y servicios pueden ampliar ese grupo; una propiedad muy expuesta, difícil de mantener o dependiente de una rehabilitación compleja puede reducirlo.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m².";

const CASA_FILA_PRECIOS = {
  municipio: "Oia",
  a2: "115.765 €",
  a3: "160.290 €",
  b2: "93.503 €",
  b3: "129.465 €",
  m2: "1.370 €/m²",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Puede encajar si se busca vivir con el Atlántico y la montaña muy presentes sin necesitar una localidad urbana alrededor. Oia ofrece una escala pequeña, mucha naturaleza inmediata y varias formas de caminar sin que todas exijan convertir el día en una excursión.",
  "También si una casa con terreno, una vivienda tradicional o un chalet pesan más que disponer de una gran oferta de pisos y servicios a pie. La dispersión permite elegir entre costa, pequeños núcleos e interior, pero implica también menos servicios concentrados y más dependencia del coche.",
  "Y puede encajar si se acepta una relación atlántica con el mar: costa muy presente, pequeñas zonas de baño, mareas, roca y posibilidad de combinar océano con pozas de agua dulce, en lugar de esperar una gran playa urbana como centro de la vida cotidiana.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Puede encajar peor si se necesita organizar el día a día andando desde un único centro. Hay servicios locales, pero comercio amplio, determinados trámites, atención hospitalaria y muchas actividades obligan a ampliar el radio.",
  "También si depender del coche para una parte importante de la vida diaria resulta un problema. El autobús ofrece conexiones útiles por la costa y hacia Vigo, pero la dispersión del municipio hace que no todas las viviendas tengan la misma relación con esas paradas ni con los horarios.",
  "Y si la expectativa principal es salir de casa a una playa amplia, arenosa y utilizable con independencia de la marea, Santa María puede decepcionar pese a tener el Atlántico literalmente delante. Oia ofrece mucha costa; eso no significa ofrecer la misma experiencia de playa que Mallorca.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "La primera comprobación debería empezar en la vivienda, no en el monasterio. Dejar el coche donde realmente se dejaría cada día y hacer a pie una compra sencilla, un paseo y el regreso. Después conducir hasta el lugar donde se resolverían compras mayores y comprobar cuánto pesa ese trayecto cuando deja de ser una excursión y se convierte en rutina.",
  "Conviene repetir la prueba desde microzonas distintas. Una vivienda en Santa María u O Arrabal permite comprobar qué significa tener el pequeño núcleo histórico y el Camino cerca. Otra en Viladesuso o Mougás muestra una relación más directa con la carretera y con Baiona. Hacia Burgueira o Loureza cambia el mar por una posición más interior.",
  "También merece una visita con lluvia o después de varios días húmedos. No para juzgar Oia por el peor tiempo, sino para mirar la casa en las condiciones en las que orientación, ventilación, cubierta, acceso y humedad dejan de ser conceptos abstractos.",
  "Para comprobar el mar, conviene caminar desde la posible vivienda hasta el tramo costero que realmente se utilizaría y visitar Santa María con la marea en dos estados diferentes. Así se ve inmediatamente por qué estar muy cerca del océano y disponer de una playa cotidiana no son exactamente lo mismo.",
] as const;

const FOTO_COMO_MOSTEIRO = {
  src: "/fotos/baixo-mino/oia-mosteiro.jpg",
  pie: "Mosteiro de Santa María de Oia: piedra entre sierra y océano",
} as const;

const FOTO_COMO_COSTA = {
  src: "/fotos/baixo-mino/oia-costa.jpg",
  pie: "La costa atlántica hacia Oia: oleaje y aldeas",
} as const;

const FOTO_HISTORIA_LADO = {
  src: "/fotos/baixo-mino/oia-mosteiro-lado.jpg",
  pie: "El monasterio visto desde tierra: el corazón de las parroquias",
} as const;

const FOTO_HISTORIA_FACHADA = {
  src: "/fotos/baixo-mino/oia-fachada.jpg",
  pie: "Fachada barroca del monasterio",
} as const;

const FOTO_MAR_PEIRAO = {
  src: "/fotos/baixo-mino/oia-peirao.jpg",
  pie: "Peirao de Oia: el Atlántico se mira más que se nada",
} as const;

const FOTO_MAR_GROBA = {
  src: "/fotos/baixo-mino/oia-groba-cabalos.jpg",
  pie: "Garranos en la Serra da Groba, sobre Mougás",
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

export default function Nuevo2OiaPage() {
  const ficha = municipioPorSlug("oia");
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
      <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-[var(--tinta)]">
        {RESUMEN_ZONA_NUEVO2[1]}
      </p>

      <MapaMunicipioFicha ficha={ficha} capasPortada={Boolean(ficha.mapa)} />

      <DesplegableNuevo2 titulo="Cómo se vive" varianteTarjetaV1>
        {COMO_SE_VIVE_NUEVO2.map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_COMO_MOSTEIRO.src} pie={FOTO_COMO_MOSTEIRO.pie} />
        <Foto src={FOTO_COMO_COSTA.src} pie={FOTO_COMO_COSTA.pie} />
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
          <ConNegrita
            texto={DE_DONDE_VIENE_NUEVO2[1]}
            fragmento="La primera referencia escrita es de 1137, cuando aparecen unidos tres pequeños monasterios de la zona; en 1185 la comunidad quedó vinculada a la orden del Císter."
          />
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{DE_DONDE_VIENE_NUEVO2[2]}</p>
        <Foto src={FOTO_HISTORIA_LADO.src} pie={FOTO_HISTORIA_LADO.pie} />
        <Foto src={FOTO_HISTORIA_FACHADA.src} pie={FOTO_HISTORIA_FACHADA.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{DE_DONDE_VIENE_NUEVO2[3]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{DE_DONDE_VIENE_NUEVO2[4]}</p>
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Mar, río y camino" varianteTarjetaV1>
        {MAR_RIO_CAMINO_NUEVO2.slice(0, 7).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_MAR_PEIRAO.src} pie={FOTO_MAR_PEIRAO.pie} />
        <Foto src={FOTO_MAR_GROBA.src} pie={FOTO_MAR_GROBA.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[7]}</p>
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Casa" varianteTarjetaV1>
        {CASA_NUEVO2.slice(0, 6).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita texto={CASA_NUEVO2[6]} fragmento="1.370 €/m²" />
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
