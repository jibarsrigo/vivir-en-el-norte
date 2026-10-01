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
 * NUEVO2 — Tomiño (Baixo Miño).
 * Texto: Lote_Baixo_Mino_5_CERTIFICADOS_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Baixo Miño reúne formas muy distintas de vivir en el extremo suroeste de Galicia: A Guarda concentra puerto, comercio y servicios junto a la desembocadura del Miño; Oia ocupa una franja estrecha entre el Atlántico y la sierra de A Groba; O Rosal combina valle, viñedo y ribera; Tomiño se extiende por la vega del Miño; y Tui aporta una pequeña ciudad histórica y fronteriza. Portugal queda al otro lado del río y Vigo funciona como apoyo urbano mayor.",
  "Tomiño ocupa una gran parte de la vega del Miño y es el municipio más extendido y disperso de la zona. Tomiño y O Seixo concentran parte de la vida administrativa y comercial; Goián forma otro núcleo importante junto al río; y el resto se reparte entre parroquias, viveros, casas con finca y monte.",
  "Goián añade una relación directa con Portugal a través de la Ponte da Amizade hacia Vila Nova de Cerveira. En Tomiño, elegir vivienda significa elegir también cuánto coche, río y frontera forman parte de la semana.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Tomiño cambia mucho según dónde se viva. La vida cerca de O Seixo no es la misma que en Goián ni que en una casa rodeada de finca en una parroquia interior.",
  "En el entorno de Tomiño y O Seixo se concentran ayuntamiento, atención primaria, comercio y servicios básicos. Se puede resolver una parte de la rutina sin grandes desplazamientos si la vivienda está bien situada, aunque la escala municipal sigue siendo dispersa.",
  "Goián funciona como un segundo núcleo y tiene una personalidad distinta. Su avenida principal, plaza, equipamientos y servicios se combinan con la proximidad inmediata del Miño. Desde allí la Ponte da Amizade cruza a Vila Nova de Cerveira, de modo que Portugal puede entrar en una semana normal para mercado, restaurantes, compras o paseo.",
  "Fuera de esos núcleos, el coche gana mucho peso. Las distancias no tienen por qué ser grandes, pero se acumulan: compra, colegio, actividades, farmacia o una salida hacia Tui pueden estar en direcciones distintas.",
  "Tui queda cerca para ampliar comercio, gestiones y conexiones de transporte. Para atención hospitalaria de mayor complejidad hay que continuar hacia el área de Vigo; el Hospital Álvaro Cunqueiro queda aproximadamente a 30 km y unos 35 minutos desde el núcleo de referencia.",
  "El transporte público existe, pero no elimina la lógica del coche en un municipio tan extendido. La utilidad concreta depende mucho de la parroquia y del recorrido habitual.",
  "Tomiño mantiene vida propia durante todo el año. Las fiestas locales concentran durante algunos días mucha más actividad en puntos que el resto del año son tranquilos. Entre ellas están San Campio de Figueiró, la Virxe do Alivio, el Lanzo da Cruz, el Entroido y la Festa da Rosca.",
] as const;

const CLIMA_NUEVO2 = [
  "Tomiño está más protegido de la influencia directa del Atlántico que A Guarda u Oia. En verano, la temperatura media ronda los 21 °C, aunque las situaciones cálidas pueden sentirse más en la vega que en la costa abierta.",
  "Para alguien que llega desde Mallorca sigue siendo un verano mucho más verde y húmedo, pero no conviene imaginar todo el norte como una costa permanentemente fresca. En una casa poco ventilada o muy expuesta al sol, una tarde de julio puede ser bastante distinta de la que sugiere la imagen del Miño.",
  "Otoño e invierno cambian el problema. Aumentan la lluvia y la humedad y aparecen nieblas ligadas al valle y al río. Algunas mañanas empiezan con el paisaje cerrado y mejoran después, cuando la niebla levanta.",
  "La combinación de humedad, vivienda unifamiliar y parcela hace importante la orientación. En una casa de planta baja conviene observar cómo entra el sol, cuánto tarda en secar el terreno, qué paredes reciben menos luz y cómo ventilan las habitaciones.",
  "Frente a Mallorca, por tanto, no basta con pensar en temperaturas más bajas. Cambian el agua que recibe la casa, la humedad ambiental, la duración del suelo mojado y la forma de aprovechar el exterior durante el invierno.",
] as const;

const VIVIR_NUEVO2 = [
  "La diferencia cotidiana respecto a Mallorca aparece también en la forma de ocupar el territorio. Tomiño ofrece mucha vivienda con finca y una relación estrecha con el paisaje rural, pero esa amplitud se paga con desplazamientos.",
  "En una dirección bien situada de O Seixo o Goián, parte de la vida puede resolverse cerca. En una parroquia dispersa, el coche puede intervenir varias veces al día. Antes de valorar una casa por sus metros conviene dibujar una semana normal sobre el mapa.",
  "Goián introduce otra posibilidad poco habitual: tener Portugal incorporado a esa rutina. Vila Nova de Cerveira está al otro lado de la Ponte da Amizade y la relación entre ambas orillas es suficientemente directa como para que cruzar la frontera pueda parecerse más a ir al pueblo vecino que a hacer una excursión.",
  "El municipio conserva además una relación productiva visible con la tierra. Fincas, viveros e invernaderos forman parte del paisaje y recuerdan que no se trata de una zona rural convertida únicamente en residencia.",
  "El río ocupa el lugar que en otros municipios tiene el mar. Se puede caminar junto al Miño, usar la playa fluvial de Goián o pasar tiempo en Espazo Fortaleza. Para llegar a una playa marítima hay que desplazarse hacia A Guarda u otros puntos de la costa.",
  "Si la prioridad principal es tener un verano claramente costero y el mar a pie, Tomiño no ofrece esa experiencia. Su combinación es otra: espacio, finca, río y una frontera que puede formar parte de la vida cotidiana.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Tomiño ha sido territorio de paso y frontera mucho antes de que cruzar a Portugal se convirtiera en un gesto cotidiano.",
  "Las iglesias y parroquias conservan una historia anterior a las fortificaciones modernas. Santa María de Tomiño mantiene elementos románicos y recuerda un poblamiento que no nació alrededor de la actual carretera ni del puente internacional.",
  "La frontera adquirió otra forma durante los conflictos entre las coronas hispánica y portuguesa del siglo XVII. A ambos lados del Miño se levantaron sistemas defensivos y la zona de Goián se convirtió en un punto estratégico.",
  "El Forte de San Lourenzo es la huella más visible. Se construyó después del conflicto de Restauración portugués sobre el entorno del anterior Forte da Barca para reforzar la defensa de esta parte del río. Su planta de piedra, casi cuadrada y con baluartes, foso y defensas exteriores, sigue siendo una presencia reconocible junto a la ribera.",
  "Con el tiempo, el río dejó de funcionar principalmente como línea defensiva y volvió a pesar como vía de relación. La Ponte da Amizade, abierta en 2004 entre Goián y Vila Nova de Cerveira, terminó de convertir esa proximidad geográfica en una conexión diaria por carretera y a pie.",
  "El paisaje productivo también ha cambiado. La agricultura tradicional convive hoy con viveros e invernaderos de planta ornamental, especialmente visibles al recorrer el municipio. Esa actividad distingue visualmente Tomiño de los viñedos dominantes de O Rosal.",
  "Las fiestas mantienen otras continuidades. Romerías como San Campio, la Virxe do Alivio, el Lanzo da Cruz y celebraciones ligadas a productos locales siguen reuniendo a vecinos de parroquias que durante el resto del año viven repartidos por un territorio amplio.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "Tomiño no tiene costa marítima. Su agua cotidiana es el Miño, y Goián es el lugar donde esa relación resulta más fácil de incorporar a la semana.",
  "Espazo Fortaleza reúne la fortaleza de San Lourenzo, zonas verdes, parque, embarcadero y playa fluvial junto al río. Es un lugar para ir a caminar, sentarse o pasar una tarde de verano sin salir del municipio.",
  "No tener costa no significa que para cualquier baño haya que conducir hasta el Atlántico. Tomiño dispone de baño fluvial propio; lo que requiere desplazamiento es el baño de mar.",
  "Desde la playa de Goián parte además la Senda do Miño, que continúa río abajo hasta Eiras, ya en O Rosal. Permite convertir la ribera en un recorrido real y no únicamente en un mirador.",
  "Para un paseo cotidiano no es necesario completar toda la senda. El entorno de Espazo Fortaleza permite caminar por terreno básicamente llano junto al Miño, acercarse a la fortificación, seguir un tramo de ribera y regresar cuando convenga. Es una salida mucho más repetible que una ruta de monte.",
  "Tomiño ofrece también recorridos pequeños en otras partes del municipio. La ruta del río Furnia tiene alrededor de 1,6 km y una duración orientativa de una hora; discurre por un entorno de bosque de ribera y en época de lluvia requiere calzado adecuado.",
  "Para una caminata más exigente, el municipio tiene senderos donde el terreno y la pendiente ganan protagonismo. No conviene asumir que una ruta calificada como corta o sencilla será necesariamente un paseo llano: en las zonas interiores aparecen firme irregular y desnivel.",
  "El mar funciona como salida. Area Grande y otras playas de A Guarda quedan aproximadamente a veinte minutos desde partes del municipio, según el punto de partida. Desde una parroquia interior el tiempo puede cambiar, y esa diferencia es otra razón para no tratar Tomiño como una única microzona.",
  "La otra salida cruza la frontera. Cerveira está directamente enfrente de Goián y el puente permite incorporar la orilla portuguesa a paseos, comidas y actividades sin convertir cada cruce en una excursión.",
  "Aquí la decisión no es entre tener agua o no tenerla. Es entre una vida cotidiana organizada alrededor del río y una vida costera con el Atlántico en el umbral.",
] as const;

const CASA_NUEVO2 = [
  "Tomiño ofrece sobre todo vivienda unifamiliar: casas con finca, propiedades dispersas por parroquias y viviendas próximas a pequeños núcleos. La elección de microzona pesa tanto como los metros.",
  "Cerca de O Seixo se gana acceso a servicios y una rutina municipal más sencilla. Goián combina servicios propios con río, Espazo Fortaleza y acceso inmediato a Cerveira. Una casa en una parroquia más dispersa puede ofrecer más terreno y tranquilidad, pero normalmente aumenta la dependencia del coche.",
  "La finca merece una valoración práctica. Importan la pendiente, el drenaje, los cierres, el acceso, el trabajo de mantenimiento y las zonas que permanecen húmedas. Una parcela grande puede ser una ventaja importante o una obligación semanal según cómo se quiera vivir.",
  "En la vivienda conviene revisar cubierta, ventilación, aislamiento, carpinterías y posibles señales de humedad, especialmente en plantas bajas. También importa la orientación: una casa que recibe buen sol de invierno puede comportarse de manera muy distinta a otra situada en una zona más cerrada y húmeda.",
  "Como referencia municipal, Tomiño se sitúa en 1.498 €/m².",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "No tratar Tomiño núcleo, Goián y las parroquias como una única experiencia. Una vivienda próxima a O Seixo puede simplificar servicios; Goián añade el río y Portugal a la rutina; una casa más apartada puede ganar terreno y privacidad a cambio de más coche. Antes de comparar dos precios hay que comparar qué rutina ofrece realmente cada ubicación.";

const CASA_QUE_CONVIENE_REVISAR =
  "Hacer desde la vivienda los desplazamientos que se repetirían durante una semana: compra, farmacia, atención primaria, actividades y salida hacia Tui. En Goián conviene añadir el recorrido hasta el centro del núcleo, Espazo Fortaleza y la Ponte da Amizade. Visitar la casa con tiempo húmedo permite comprobar drenaje, paredes, ventilación y zonas de la parcela que tardan en secar. Una segunda visita en una tarde cálida ayuda a entender exposición solar y comportamiento de las habitaciones en verano. Si la propiedad tiene una finca grande, conviene recorrerla entera y no limitarse a mirar la superficie anunciada. Pendientes, cierres, vegetación, accesos y mantenimiento pueden cambiar mucho el valor práctico de esos metros. La cobertura de fibra debe verificarse en la dirección concreta. También conviene comprobar la situación urbanística de construcciones auxiliares, ampliaciones y cierres si forman parte importante de la propiedad.";

const CASA_MERCADO_REVENTA =
  "Tomiño tiene una base residencial permanente y un producto inmobiliario donde pesan especialmente casa, parcela y acceso por carretera. Para una futura reventa ayudan una ubicación fácil de explicar, buenos accesos, orientación, aparcamiento, estado de la vivienda y una distancia razonable a servicios. Goián añade como rasgos reconocibles el río y la conexión inmediata con Cerveira. Una finca muy exigente, una vivienda con problemas persistentes de humedad o una localización que obligue a largos recorridos para cada necesidad reduce el grupo de compradores potenciales. El terreno aporta valor cuando puede disfrutarse y mantenerse con facilidad; no simplemente porque haya muchos metros.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m².";

const CASA_FILA_PRECIOS = {
  municipio: "Tomiño",
  a2: "126.581 €",
  a3: "175.266 €",
  b2: "102.239 €",
  b3: "141.561 €",
  m2: "1.498 €/m²",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Puede encajar si se busca una casa con finca y se acepta que la contrapartida sea una vida más dispersa y dependiente del coche.",
  "También si el río puede sustituir al mar como paisaje cotidiano. En Goián se puede caminar junto al Miño, utilizar la playa fluvial, pasar tiempo en Espazo Fortaleza y cruzar a Cerveira sin organizar una excursión.",
  "Puede encajar especialmente si cruzar a Portugal resulta atractivo. La Ponte da Amizade hace que la frontera tenga una dimensión práctica: mercado, restaurantes, actividades y paseos pueden quedar al otro lado de un trayecto muy corto.",
  "Y puede encajar si se entiende que Tomiño no es una experiencia única. Elegir bien entre O Seixo, Goián y una parroquia más rural permite ajustar bastante la relación entre servicios, río, terreno y tranquilidad.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Puede encajar peor si el objetivo principal de la mudanza es tener un verano claramente costero y el Atlántico a pie. Tomiño es valle y río; para playa marítima hay que conducir.",
  "También si se quiere organizar el día a día andando desde un único casco compacto. Hay núcleos con servicios, pero el municipio funciona mediante varios centros y muchas viviendas dispersas.",
  "Puede resultar menos adecuado si el coche se quiere reducir al mínimo. Una casa aparentemente cercana en el mapa puede exigir varios desplazamientos diarios cuando se suman compra, actividades y servicios.",
  "Y puede encajar peor si el calor de valle o la humedad de una casa con finca son aspectos poco tolerables. Una visita agradable junto al río no sustituye probar cómo se vive la vivienda en una tarde cálida y después de varios días de lluvia.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Primero hay que decidir qué Tomiño se está buscando. Pasar una mañana en O Seixo y otra en Goián permite entender la diferencia entre un núcleo ligado a los servicios municipales y otro ligado al Miño y a Cerveira.",
  "Desde una vivienda candidata, hacer el recorrido real hasta compra, farmacia, atención primaria y carretera de salida. Cronometrarlo evita que «está todo cerca» o «está en Tomiño» oculten la dispersión.",
  "En Goián conviene caminar desde el núcleo hasta Espazo Fortaleza, recorrer un tramo de la ribera y cruzar la Ponte da Amizade. Así se puede comprobar si Portugal y el Miño serían realmente parte de la semana o solo atractivos ocasionales.",
  "También conviene utilizar la playa fluvial en temporada y conducir otro día hasta una playa marítima habitual. Son dos formas distintas de relacionarse con el agua y la elección de municipio depende bastante de cuál se espera utilizar.",
  "La vivienda debe verse en condiciones diferentes. Una tarde cálida permite comprobar exposición y ventilación; después de lluvia se entienden mejor drenaje, humedad, accesos y parcela.",
  "Si el principal atractivo son los metros de terreno, conviene imaginar su mantenimiento dentro de cinco o diez años. Acceso, pendiente, cierres y trabajo necesario importan tanto como la superficie.",
] as const;

const FOTO_COMO_PONTE = {
  src: "/fotos/baixo-mino/tomino-ponte.jpg",
  pie: "Ponte da Amizade: Goián y Cerveira a dos minutos",
} as const;

const FOTO_HISTORIA_FORTE = {
  src: "/fotos/baixo-mino/tomino-forte.jpg",
  pie: "Forte de San Lourenzo: la frontera en piedra",
} as const;

const FOTO_HISTORIA_VEGA = {
  src: "/fotos/baixo-mino/tomino-vega.jpg",
  pie: "El Miño al atardecer: la orilla cotidiana",
} as const;

const FOTO_MAR_RIO = {
  src: "/fotos/baixo-mino/tomino-rio.jpg",
  pie: "Barcas en el Miño, frente a Cerveira",
} as const;

const FOTO_MAR_PRAIA = {
  src: "/fotos/baixo-mino/tomino-praia-goian.jpg",
  pie: "Paseo fluvial: el río como vida diaria",
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

export default function Nuevo2TominoPage() {
  const ficha = municipioPorSlug("tomino");
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
        {COMO_SE_VIVE_NUEVO2.slice(0, 4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={COMO_SE_VIVE_NUEVO2[4]} fragmentos={["30 km y unos 35 minutos"]} />
        </p>
        {COMO_SE_VIVE_NUEVO2.slice(5).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_COMO_PONTE.src} pie={FOTO_COMO_PONTE.pie} />
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Frente a Mallorca" varianteTarjetaV1>
        <h3 className="mt-1 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Clima
        </h3>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={CLIMA_NUEVO2[0]} fragmentos={["21 °C"]} />
        </p>
        {CLIMA_NUEVO2.slice(1).map((p) => (
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
        {DE_DONDE_VIENE_NUEVO2.slice(0, 3).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={DE_DONDE_VIENE_NUEVO2[3]} fragmentos={["Forte de San Lourenzo"]} />
        </p>
        <Foto src={FOTO_HISTORIA_FORTE.src} pie={FOTO_HISTORIA_FORTE.pie} />
        <Foto src={FOTO_HISTORIA_VEGA.src} pie={FOTO_HISTORIA_VEGA.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={DE_DONDE_VIENE_NUEVO2[4]} fragmentos={["Ponte da Amizade"]} />
        </p>
        {DE_DONDE_VIENE_NUEVO2.slice(5).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Mar, río y camino" varianteTarjetaV1>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={MAR_RIO_CAMINO_NUEVO2[0]} fragmentos={["Miño"]} />
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas
            texto={MAR_RIO_CAMINO_NUEVO2[1]}
            fragmentos={["Espazo Fortaleza", "playa fluvial"]}
          />
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={MAR_RIO_CAMINO_NUEVO2[2]} fragmentos={["baño de mar"]} />
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={MAR_RIO_CAMINO_NUEVO2[3]} fragmentos={["Senda do Miño"]} />
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[4]}</p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={MAR_RIO_CAMINO_NUEVO2[5]} fragmentos={["1,6 km"]} />
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[6]}</p>
        <Foto src={FOTO_MAR_RIO.src} pie={FOTO_MAR_RIO.pie} />
        <Foto src={FOTO_MAR_PRAIA.src} pie={FOTO_MAR_PRAIA.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(7).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Casa" varianteTarjetaV1>
        {CASA_NUEVO2.slice(0, 4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={CASA_NUEVO2[4]} fragmentos={["1.498 €/m²"]} />
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
