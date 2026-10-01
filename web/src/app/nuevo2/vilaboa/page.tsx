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
 * NUEVO2 — Vilaboa (Vigo e ría).
 * Texto: Lote_Vigo_e_Ria_4_CERTIFICADOS_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Vigo e ría reúne la gran ciudad de Vigo y varios municipios que se organizan alrededor del fondo de la ría y de la ensenada de San Simón. Vigo concentra hospitales, empleo, universidad, aeropuerto, puerto y servicios urbanos; Redondela combina una villa ferroviaria con Cesantes y Chapela; Soutomaior se reparte entre Arcade y un interior más rural; Vilaboa ocupa la orilla de la ensenada y las laderas que conectan la ría con Pontevedra. En pocos kilómetros se pasa de una vida plenamente urbana a parroquias donde el coche vuelve a ser imprescindible.",
  "Vilaboa ocupa la orilla de la ensenada de San Simón y las laderas que conectan la ría de Vigo con el entorno de Pontevedra. Dentro de Vigo e ría es el municipio más rural y disperso: no tiene una villa compacta comparable a Vigo, Redondela o Arcade, sino parroquias y pequeños núcleos repartidos entre costa e interior.",
  "Santa Cristina de Cobres y Santo Adrián de Cobres miran hacia la ensenada; Vilaboa concentra ayuntamiento y algunos servicios; Figueirido y Bértola se orientan más hacia Pontevedra. Esa posición permite vivir en un entorno rural sin quedar lejos de núcleos mayores, pero no ofrece un centro capaz de hacer a pie compra y la mayor parte de las gestiones.",
  "La ría está muy presente en el paisaje, aunque costa no significa automáticamente playa cotidiana. Marea, marisma, pequeñas playas y vistas hacia San Simón y Rande explican mejor la relación de Vilaboa con el agua.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "En Vilaboa, vivir en una parroquia u otra cambia mucho la rutina diaria.",
  "Los servicios están repartidos. Hay atención primaria, farmacia, tiendas y bares, pero mercado, compras grandes, instituto, hospital o una oferta cultural amplia suelen llevar hacia Pontevedra, Arcade o Redondela.",
  "Eso hace que el coche forme parte de buena parte de la semana. Incluso una vivienda situada cerca de la N-550 o de la N-554 puede estar bien comunicada sin ser caminable a servicios.",
  "Las parroquias de Cobres ofrecen una vida más vinculada a la ensenada. Desde muchas casas se ven San Simón, Rande y las mareas, pero para comprar o hacer gestiones puede ser necesario conducir.",
  "Figueirido y Bértola permiten apoyarse con facilidad en Pontevedra. En esas zonas la ventaja no es tener un pueblo propio completo, sino volver rápidamente a una vivienda más tranquila después de utilizar servicios urbanos.",
  "Para atención hospitalaria hay que desplazarse a Pontevedra; el trayecto hasta Montecelo ronda los quince minutos como orientación. El aeropuerto de Vigo queda a una distancia parecida.",
  "El transporte público existe, pero no sustituye el coche en todas las parroquias. Antes de comprar hay que comprobar parada, frecuencia y recorrido real desde la vivienda.",
  "La vida cotidiana depende poco del turismo. Durante el Entroido de Cobres, en cambio, las parroquias reciben más actividad porque las madamas y los galáns —las figuras tradicionales del carnaval local— recorren caminos y núcleos con sus trajes y danzas. Desde 2026 la celebración está reconocida como Fiesta de Interés Turístico Nacional.",
] as const;

const CLIMA_NUEVO2 = [
  "Vilaboa tiene un verano mucho más fresco que Mallorca y un invierno bastante más húmedo.",
  "La media estival ronda los 20,5 °C y la invernal, los 9,5 °C. La lluvia anual es alta y el terreno permanece húmedo con frecuencia entre otoño y primavera.",
  "La ensenada protege de parte de la exposición marítima, pero las laderas pueden cambiar mucho de orientación. Una casa mirando al norte o rodeada de vegetación puede perder sol pronto en invierno.",
  "En una vivienda con finca, drenaje y evacuación de agua son cuestiones centrales. Muros, zonas bajas de jardín y entradas en pendiente deben observarse después de varios días de lluvia.",
  "En verano se puede estar fuera durante muchas horas sin el calor sostenido de Mallorca. A cambio, el año tiene más días grises y una temporada más corta para utilizar terrazas y espacios exteriores con regularidad.",
] as const;

const VIVIR_NUEVO2 = [
  "Vilaboa puede ofrecer casa, finca y proximidad por carretera a varios núcleos, pero en buena parte del municipio no permite hacer compra y gestiones andando.",
  "Una casa con finca puede quedar a pocos minutos en coche de Pontevedra o de Arcade y, al mismo tiempo, sentirse rural al llegar. Para quien valore terreno y tranquilidad, esa combinación es una parte importante del atractivo.",
  "La semana, sin embargo, se organiza alrededor del coche. Compra, actividades, hospital, instituto o cultura no están concentrados en una única plaza.",
  "La ensenada forma parte del paisaje ordinario. Desde Cobres se observan mareas, marisqueo y Rande. Eso no significa tener una playa grande para bajar con toalla desde cualquier vivienda.",
  "Las carreteras tienen un doble efecto. Facilitan llegar rápido a Pontevedra o Vigo, pero también introducen ruido en algunas zonas. En una casa con vistas a la ensenada conviene escuchar el entorno en una mañana laborable.",
  "Frente a Mallorca, el mantenimiento de casa y finca aumenta. Humedad, vegetación, cubierta, saneamiento y caminos requieren más atención que una vivienda urbana.",
  "La tranquilidad no implica quedar lejos de todo: Pontevedra, Arcade y el corredor de Vigo quedan a trayectos relativamente cortos desde buena parte del municipio.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "La ensenada de San Simón explica una parte importante de la historia local.",
  "Las Salinas do Ulló comenzaron a explotarse a finales del siglo XVII mediante grandes estanques alimentados por las mareas. La producción de sal cesó a comienzos de la década de 1720 y los antiguos vasos y diques se transformaron con el tiempo en humedal.",
  "Los diques y estanques que todavía se ven recuerdan que este borde de la ensenada se utilizó para controlar las mareas, evaporar agua y obtener sal.",
  "Las parroquias conservaron también agricultura, vid y trabajos vinculados a la ensenada. La dispersión actual de casas y fincas procede en parte de esa organización rural, no de una urbanización reciente alrededor de un casco.",
  "El Entroido de Cobres conserva otra huella comunitaria. Madamas y galáns recorren las parroquias con trajes elaborados y danzas transmitidas durante generaciones. La tradición se documenta al menos desde el siglo XVIII y en 2026 recibió la declaración de Fiesta de Interés Turístico Nacional.",
  "En las zonas altas aparecen además restos prehistóricos, petroglifos y mámoas, señal de una ocupación muy anterior a la organización parroquial actual.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "La costa de Vilaboa es principalmente ensenada.",
  "Las mareas transforman el paisaje: con pleamar el agua ocupa buena parte de la superficie; con bajamar aparecen fangos, canales y zonas de marisqueo.",
  "Deilán y Paredes ofrecen pequeñas playas que pueden servir para un baño próximo cuando marea y condiciones acompañan. No tienen la escala ni los servicios de los grandes arenales de Vigo o Redondela.",
  "Las Salinas do Ulló permiten un paseo llano por uno de los paisajes más propios del municipio. Los antiguos diques y estanques se recorren entre marisma, vegetación y aves. Aquí el interés está en caminar y observar cómo funciona la ensenada, no en buscar un paseo comercial.",
  "Lago Castiñeiras, en la parte alta entre Vilaboa y Marín, cambia por completo el ambiente: bosque, caminos y agua interior. Desde allí se puede continuar hacia Cotorredondo y ganar vistas sobre las rías.",
  "Cotorredondo pertenece a una salida de monte, no a la rutina de todas las parroquias. Requiere desplazarse hasta la zona alta y caminar por pistas y senderos.",
  "Vilaboa permite alternar marisma, pequeñas playas y monte, pero esos lugares están repartidos por el municipio. Antes de valorar una vivienda conviene comprobar cuáles quedarían realmente cerca y cuánto coche exigiría utilizarlos con frecuencia.",
] as const;

const CASA_NUEVO2 = [
  "La vivienda característica de Vilaboa es la casa con finca, la casa de piedra reformada o el chalé disperso en parroquia.",
  "La primera pregunta debe ser práctica: cómo se llega. Hay caminos estrechos, entradas con pendiente y viviendas donde maniobrar todos los días puede ser más incómodo de lo que parece en una visita.",
  "Después vienen agua y humedad. Conviene revisar cubierta, canalones, drenaje, muros, planta baja y zonas de la parcela que permanecen en sombra.",
  "Saneamiento y abastecimiento deben comprobarse en la propiedad concreta. También la cobertura de fibra, que no es homogénea en todo el municipio.",
  "Las vistas hacia San Simón o Rande pueden ser excelentes, pero no compensan por sí solas una mala orientación, ruido de carretera o una rutina demasiado dependiente del coche.",
] as const;

const CASA_ADVERTENCIA_MICROZONA = [
  "Cobres, Vilaboa, Figueirido, Bértola y las zonas altas ofrecen rutinas distintas.",
  "Las parroquias sobre la ensenada ganan paisaje y relación con San Simón. Las más próximas a Pontevedra facilitan servicios y desplazamientos. Las áreas altas ofrecen monte y espacio, pero aumentan distancia y coche.",
] as const;

const CASA_QUE_CONVIENE_REVISAR = [
  "Hacer desde la vivienda una compra normal y comprobar cuánto coche exige.",
  "Recorrer el acceso de noche y con lluvia.",
  "Revisar drenaje, cubierta, canalones, muros y humedad en planta baja.",
  "Comprobar saneamiento, abastecimiento y fibra en la dirección exacta.",
  "Escuchar N-550, N-554 u otras carreteras próximas en horario laborable.",
  "Medir el trayecto real hasta Pontevedra, atención primaria y hospital.",
] as const;

const CASA_MERCADO_REVENTA = [
  "En Vilaboa hay menos vivienda comparable entre sí que en una ciudad llena de pisos similares, de modo que el estado y las características de cada casa pesan mucho en el precio y en una futura venta.",
  "Una casa con buen acceso, parcela manejable, buena orientación y un estado de conservación claro puede interesar a más compradores.",
  "Las vistas pueden atraer, pero pierden valor si la vivienda exige una reforma importante, tiene mala entrada o recibe mucho ruido.",
  "La proximidad a Pontevedra y Vigo ayuda a sostener demanda residencial, especialmente cuando el trayecto cotidiano es sencillo.",
  "Al comparar casas conviene mirar el estado, el acceso y el uso diario que permite cada ubicación, no solo los metros de parcela.",
] as const;

const ENCAJA_SI_NUEVO2 = [
  "Encaja si se quiere casa con terreno y una vida tranquila sin alejarse demasiado de Pontevedra y Vigo.",
  "También si la ensenada, las Salinas do Ulló y el monte aportan suficiente exterior aunque no exista una gran playa cotidiana.",
  "Puede encajar especialmente si se acepta utilizar coche casi todos los días a cambio de espacio y una escala de parroquia.",
  "Y encaja si se está dispuesto a revisar con detalle acceso, humedad, saneamiento y conectividad antes de comprar.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Encaja peor si se necesita hacer compra y gestiones andando desde casa.",
  "También si se quiere un núcleo compacto con mercado, instituto, hospital y oferta cultural concentrados.",
  "Puede resultar menos adecuado si la playa grande a pie es una condición central.",
  "Y encaja peor si se compra únicamente por vistas a la ensenada sin asumir coche, mantenimiento y posibles ruidos de carretera.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Pasar una mañana completa haciendo los recados que se repetirían cada semana.",
  "Conducir a Pontevedra, Arcade y al hospital para saber qué apoyo urbano sería realmente el habitual.",
  "Recorrer las Salinas do Ulló y una de las pequeñas playas de la ensenada para entender qué tipo de relación con el agua ofrece el municipio.",
  "Visitar Lago Castiñeiras o Cotorredondo para comprobar si el monte tendría uso real desde la vivienda.",
  "Volver a la propiedad después de lluvia y observar parcela, muros y accesos.",
  "Y comprobar fibra, saneamiento y abastecimiento antes de dar por buena una casa por su precio o sus vistas.",
] as const;

const FOTO_COMO_1 = {
  src: "/fotos/vigo-e-ria/vilaboa-cobres.jpg",
  pie: "Cobres: casas de ladera mirando al agua calma",
} as const;

const FOTO_HIST_1 = {
  src: "/fotos/vigo-e-ria/vilaboa-ullo.jpg",
  pie: "Salinas de Ulló: antiguos estanques de sal convertidos en humedal",
} as const;

const FOTO_HIST_2 = {
  src: "/fotos/vigo-e-ria/vilaboa-entroido.jpg",
  pie: "Madamas y galáns del Entroido tradicional de Cobres",
} as const;

const FOTO_MAR_1 = {
  src: "/fotos/vigo-e-ria/vilaboa-castineiras.jpg",
  pie: "Lago Castiñeiras, bosque y paseo en la parte alta",
} as const;

const FOTO_MAR_2 = {
  src: "/fotos/vigo-e-ria/vilaboa-cotorredondo.jpg",
  pie: "La ensenada de San Simón desde las orillas de Vilaboa",
} as const;

const CREDITO_FOTOS = "Wikimedia Commons (CC BY-SA).";


function FilaCasaNuevo2({
  etiqueta,
  cuerpo,
}: {
  etiqueta: string;
  cuerpo: readonly string[];
}) {
  return (
    <div className="border-b border-[var(--linea)] py-3 last:border-b-0">
      <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--tinta-suave)]">
        {etiqueta}
      </p>
      {cuerpo.map((p) => (
        <p key={p.slice(0, 64)} className="mt-1.5 text-[15px] leading-relaxed text-[var(--tinta)]">
          {p}
        </p>
      ))}
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

export default function Nuevo2VilaboaPage() {
  const ficha = municipioPorSlug("vilaboa");
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
        <Foto src={FOTO_COMO_1.src} pie={FOTO_COMO_1.pie} />
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Frente a Mallorca" varianteTarjetaV1>
        <h3 className="mt-1 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Clima
        </h3>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          {CLIMA_NUEVO2[0]}
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas
            texto={CLIMA_NUEVO2[1]}
            fragmentos={["20,5 °C", "9,5 °C"]}
          />
        </p>
        {CLIMA_NUEVO2.slice(2).map((p) => (
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
        <Foto src={FOTO_HIST_1.src} pie={FOTO_HIST_1.pie} />
        {DE_DONDE_VIENE_NUEVO2.slice(2, 4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_HIST_2.src} pie={FOTO_HIST_2.pie} />
        {DE_DONDE_VIENE_NUEVO2.slice(4).map((p) => (
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
        <Foto src={FOTO_MAR_1.src} pie={FOTO_MAR_1.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(2, 4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_MAR_2.src} pie={FOTO_MAR_2.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Casa" varianteTarjetaV1>
        {CASA_NUEVO2.map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}

        <EnlaceIdealista ambito="municipio" slug={ficha.slug} nombre={ficha.municipio} />

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
