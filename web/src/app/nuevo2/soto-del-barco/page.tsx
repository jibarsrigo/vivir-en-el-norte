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
 * NUEVO2 — Soto del Barco / San Juan de la Arena.
 * Texto: CURSOR_TRANSFERENCIA_NUEVO2_SOTO_SALINAS_LUANCO_MUROS_PENDIENTE_2026-09-25.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Asturias Centro reúne maneras muy distintas de vivir junto al Cantábrico. Hay puertos encajados en la ladera, pequeñas villas marineras, núcleos volcados sobre una gran playa y, al final de la escala, una ciudad como Gijón. Soto del Barco ocupa otra posición: aquí el territorio se organiza alrededor de la desembocadura del Nalón.",
  "Y dentro de un municipio pequeño hay dos vidas distintas. Soto del Barco y San Juan de la Arena no son dos nombres para una misma experiencia. Soto queda algo más hacia el interior, ligado al río y a su papel administrativo; San Juan se acerca hasta la desembocadura, donde aparecen el puerto, las embarcaciones y, al final del pueblo, el Cantábrico.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Una mañana corriente ayuda a entender la diferencia.",
  "En Soto se vive en la capital del concejo, en un núcleo pequeño que, al alejarse del centro, se abre pronto hacia viviendas más dispersas. Hay centro médico, farmacia, biblioteca y polideportivo, además del Ayuntamiento. Para lo básico no hace falta salir inmediatamente del municipio; para compras mayores, hospital u otros servicios, el día acaba extendiéndose hacia fuera.",
  "San Juan de la Arena sorprende por otra razón. Sería fácil imaginarlo como el lugar al que se baja desde Soto para ver el mar, pero vivir allí no funciona así. San Juan tiene vida básica propia: centro médico, farmacia, biblioteca, polideportivo, supermercado y centro social de mayores, además de algunos servicios sociales determinados días.",
  "Eso permite una rutina muy distinta. Se puede salir de casa, hacer una compra o resolver una necesidad básica y después acercarse al puerto sin convertir el paseo en una salida especial. El Nalón ya está ensanchándose antes de llegar al mar; barcos, puerto y desembocadura forman parte del paisaje normal del pueblo.",
  "Soto y San Juan están cerca, pero esa cercanía no los vuelve intercambiables. En Soto, el río acompaña una vida más interior y administrativa. En San Juan, el agua acaba entrando en la rutina: primero la ría y el puerto; después, la playa y el Cantábrico.",
  "Cuando la necesidad supera esa escala pequeña hay que salir. El Hospital San Agustín de Avilés queda aproximadamente a 16 km y unos 20 minutos. El aeropuerto de Asturias está excepcionalmente cerca, en torno a 6 km y unos 10 minutos.",
  "El coche, por tanto, sigue formando parte de la vida. Hace falta para el hospital, compras de mayor escala y muchas salidas. Pero eso no significa que cada mañana en San Juan empiece arrancándolo: una parte apreciable de lo básico puede resolverse en el propio pueblo.",
] as const;

const CLIMA_NUEVO2 = [
  "El cambio respecto a Mallorca se nota sobre todo en verano y en la frecuencia de días húmedos o cubiertos. El verano es bastante más fresco y la lluvia, la humedad, las nubes y las brumas tienen mucha más presencia a lo largo del año.",
  "Las referencias disponibles para esta parte de Asturias sitúan el verano alrededor de los 19 °C de media, con muchas menos horas de sol y bastantes más días de lluvia que Mallorca. Son valores del entorno, no mediciones exclusivas de Soto del Barco.",
  "En la práctica, el calor intenso pesa mucho menos durante el verano, pero el tiempo es menos estable. Hay más días en los que una terraza se utiliza solo a ratos, una caminata depende de cómo evolucione el cielo o la ropa tarda más en secarse.",
  "En una vivienda conviene fijarse especialmente en luz, orientación, ventilación y aislamiento. La diferencia climática no se limita a la temperatura: también cambia la manera de usar la casa y los espacios exteriores durante buena parte del año.",
] as const;

const VIVIR_NUEVO2 = [
  "También cambia lo que significa «vivir junto al mar».",
  "En San Juan, el agua aparece primero como río ancho y puerto. Se puede caminar junto a la desembocadura, ver las embarcaciones y continuar hasta que el Nalón termina y comienza la costa abierta. Los Quebrantos añade la playa, pero no sustituye esa primera relación con el agua.",
  "La escala diaria es pequeña. No hay que salir del pueblo para cada compra o necesidad básica, aunque Pravia y Avilés amplían pronto lo que puede resolverse cerca. Para hospital, comercio de mayor entidad o determinadas gestiones, el coche vuelve a entrar en escena.",
  "El aeropuerto queda, en cambio, sorprendentemente cerca para un lugar de este tamaño. Eso acorta mucho la parte terrestre de un viaje. La conexión con Palma no debe darse por permanente: depende de la programación de cada temporada.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Para entender Soto del Barco hay que mirar el Nalón no como fondo del paisaje, sino como la pieza que organizó el territorio.",
  "Antes de existir el puente actual, cruzar el río significaba hacerlo en barca. Esa antigua travesía quedó incluso en el nombre del concejo y en su escudo. El Camino de Santiago llegaba al embarcadero situado junto al Castillo de San Martín y continuaba por la otra orilla después de atravesar el Nalón.",
  "El castillo estaba allí por una razón. Su posición permitía controlar un punto estratégico de comunicación entre la costa y el interior. El enclave tiene antecedentes desde la Edad del Hierro y durante la Edad Media mantuvo esa función de vigilancia sobre la desembocadura. Soto permaneció ligado a Pravia hasta constituirse como ayuntamiento independiente en el siglo XIX.",
  "Hoy el peregrino ya no puede repetir aquel cruce en barca: al llegar a ese punto tiene que volver hacia la carretera y utilizar el puente. Pero el trazado antiguo explica algo que todavía se ve con claridad sobre el mapa: el río no era una frontera decorativa, sino un paso que había que controlar y atravesar.",
  "San Juan de la Arena cuenta la segunda parte de la historia.",
  "Allí el Nalón deja de ser únicamente camino y se convierte también en trabajo. La pesca, la lonja, la angula y la industria conservera fueron dando forma al núcleo marítimo. El puerto que hoy acompaña un paseo normal pertenece a esa historia económica.",
  "Por eso Soto y San Juan siguen teniendo caracteres distintos aunque compartan municipio. Uno creció alrededor de la administración y de una posición interior sobre el Nalón; el otro, allí donde el río llega al mar y vivir significaba también salir a pescar, descargar en el puerto o trabajar con lo que traía el agua.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "En San Juan no hace falta preparar una excursión para caminar junto al agua.",
  "El recorrido más sencillo empieza en el propio pueblo. El puerto acompaña la desembocadura y permite seguir andando mientras el Nalón se ensancha. Es una salida que puede repetirse cualquier tarde porque forma parte del núcleo, no un destino al que haya que conducir.",
  "Si se continúa hacia la costa, el paisaje cambia. Aparece Los Quebrantos, la única playa del municipio, comunicada directamente con San Juan. Tiene unos 800 metros y continúa con el playón de Bayas hasta formar un arenal de más de tres kilómetros.",
  "Aquí el mar ya no es la ría protegida por el puerto. Es Cantábrico abierto. La playa dispone de acceso sencillo, aparcamiento, carril bici independiente y acceso adaptado al baño, además de servicios estivales. También se utiliza para surf.",
  "Eso permite dos salidas muy distintas desde el mismo pueblo. Una tarde puede bastar con puerto y desembocadura. Otro día se puede seguir hasta Los Quebrantos y caminar por un arenal mucho más abierto.",
  "Tener la playa al lado no significa tener siempre un baño fácil. El estado del Cantábrico importa más que la distancia desde casa y debe comprobarse cada día.",
  "En Soto la relación con el agua es otra. El Nalón sigue estando presente, pero puerto y playa no forman parte inmediata de la vida doméstica como pueden hacerlo en San Juan.",
  "Hay además un camino que cuenta muy bien cuánto ha cambiado el río. El Camino de Santiago todavía conduce hacia el antiguo embarcadero del Castillo de San Martín, pero la barca que permitía continuar directamente hacia la otra orilla ya no existe. Para cruzar hoy hay que volver a la carretera y utilizar el puente.",
] as const;

const CASA_NUEVO2 = [
  "En muchos municipios se puede empezar mirando el precio y después afinar la zona. Aquí conviene hacerlo al revés.",
  "Una vivienda en Soto y otra en San Juan pueden pertenecer al mismo municipio y ofrecer vidas bastante diferentes.",
  "En San Juan merece la pena salir de la vivienda candidata y hacer el recorrido real: compra, farmacia, centro médico, puerto y playa. Una casa bien situada puede reunir buena parte de esa secuencia sin coche.",
  "Soto ofrece otra lógica. Fuera de su pequeño centro, el tejido se vuelve más disperso y una distancia que parece corta en el anuncio puede terminar significando más desplazamientos cotidianos. Allí importa especialmente comprobar desde la puerta de casa cuánto puede hacerse andando y para qué acaba siendo necesario coger el coche.",
] as const;

const CASA_PRECIO_INTRO =
  "La referencia municipal disponible es de 1.185 €/m², correspondiente a abril de 2026. Sirve para situar el orden de magnitud del mercado en ese momento; una vivienda concreta debe contrastarse con la oferta actual.";

const CASA_BANDAS_NOTA =
  "Las bandas permiten comparar con el resto del proyecto, pero no tasar una vivienda concreta. Utilizan aproximadamente 65 m² para dos habitaciones y 90 m² para tres, con las mismas franjas A y B del resto de fichas. Conviene contrastarlas con la oferta real del momento.";

const CASA_ADVERTENCIA_MICROZONA =
  "En San Juan conviene comprobar cuánto cambia la vivienda cuando se pasa de «cerca del puerto» a poder llegar realmente andando a compra, farmacia, centro médico y playa. También importan la exposición al ambiente marítimo, la humedad, el aislamiento y el aparcamiento. En Soto pesan más el acceso desde la vivienda, la dispersión y la frecuencia con la que el coche acaba resolviendo una necesidad que sobre el mapa parecía próxima. La información disponible señala poca obra nueva y cobertura de fibra parcial. Una dirección concreta puede comportarse mejor que otra, así que la conexión debe comprobarse en la vivienda y no darse por garantizada para todo el concejo.";

const CASA_QUE_CONVIENE_REVISAR =
  "Antes de quedarse con las vistas o con el precio, merece la pena comprobar el recorrido diario desde la puerta: compra, farmacia, médico, coche y paseo. Después vienen el estado de reforma, aislamiento, humedad, orientación y luz, barreras o ascensor, aparcamiento y conexión real a internet. En San Juan se añade una pregunta sencilla: ¿la vivienda permite realmente vivir el puerto y la costa andando o solo verlos cerca en el mapa?";

const CASA_MERCADO_REVENTA =
  "La referencia de abril de 2026 mostraba una variación interanual del −6,5 %. Ese dato describe aquel momento y no permite anticipar la evolución posterior. En un mercado pequeño importa especialmente que la vivienda siga siendo práctica para perfiles distintos: acceso sencillo, servicios razonablemente próximos, pocas barreras, buena conexión y ausencia de una reforma pesada pueden facilitar una futura venta. No garantizan ni el precio ni el plazo.";

const CASA_LEYENDA_COMPACTA =
  "A: ≤5 min de la costa · B: 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Estimaciones comparativas; conviene contrastarlas con la oferta del momento.";

const CASA_FILA_PRECIOS = {
  municipio: "Soto del Barco",
  a2: "100.133 €",
  a3: "138.645 €",
  b2: "80.876 €",
  b3: "111.983 €",
  m2: "1.185 €/m²",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Puede encajar si se busca una escala pequeña sin quedar muy lejos de hospital y aeropuerto, y se acepta que para las necesidades de mayor entidad habrá que salir del municipio.",
  "San Juan añade una combinación bastante particular: un pueblo pequeño donde compra básica, médico, farmacia, puerto, desembocadura y playa pueden formar parte de una misma vida diaria. No todo queda a la puerta de cada vivienda, pero tampoco es simplemente el lugar costero de un municipio cuyos servicios están en otra parte.",
  "Soto ofrece la otra posibilidad: vivir algo más retirado de la costa abierta, junto al Nalón y en el núcleo administrativo, manteniendo servicios básicos propios.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Puede encajar peor si se quiere una oferta amplia de comercio, actividades y sanidad dentro del propio pueblo o reducir mucho el uso del coche cuando la necesidad sale de lo básico.",
  "También hay que aceptar el cambio respecto a Mallorca: menos sol, mucha más humedad y lluvia y un verano bastante más fresco. En San Juan, tener Los Quebrantos junto al pueblo tampoco convierte el Cantábrico en una playa de baño previsible.",
  "La vivienda añade otro límite: poca obra nueva, fibra que conviene comprobar dirección por dirección y un mercado de escala pequeña en el que la vivienda concreta pesa más que una media general.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Aquí una visita al «municipio» no basta. Hay que probar dos mañanas distintas.",
  "En Soto, salir desde una vivienda posible y hacer la vida corriente: compra, farmacia, médico, paseo y coche. Ver cuánto se resuelve realmente a pie y cuánto empieza a dispersarse.",
  "En San Juan, hacer exactamente lo mismo y después seguir andando: primero el puerto, luego la desembocadura y finalmente Los Quebrantos. No para comprobar si el paisaje gusta, sino para descubrir cuánto de él entraría de verdad en un martes cualquiera.",
  "Después conviene hacer el trayecto al Hospital San Agustín y al aeropuerto.",
  "Solo entonces «Soto del Barco» deja de ser un nombre administrativo y aparecen las dos vidas que contiene.",
] as const;

const FOTO_COMO_ARENA = {
  src: "/fotos/asturias-centro/soto-arena.jpg",
  pie: "San Juan de la Arena, Soto del Barco",
} as const;

const FOTO_COMO_VILLA = {
  src: "/fotos/asturias-centro/soto-villa.jpg",
  pie: "Soto del Barco hacia el estuario",
} as const;

const FOTO_HISTORIA_CASTILLO = {
  src: "/fotos/asturias-centro/soto-castillo.jpg",
  pie: "Castillo de San Martín, Soto del Barco",
} as const;

const FOTO_MAR_ESTUARIO = {
  src: "/fotos/asturias-centro/soto-estuario.jpg",
  pie: "Estuario del Nalón en Soto del Barco",
} as const;

const FOTO_MAR_PLAYA = {
  src: "/fotos/asturias-centro/soto-playa.jpg",
  pie: "Playa en Soto del Barco",
} as const;

const FOTO_MAR_QUEBRANTOS = {
  src: "/fotos/asturias-centro/soto-quebrantos.jpg",
  pie: "Los Quebrantos, San Juan de la Arena",
} as const;

const CREDITO_FOTOS =
  "Fotos: Wikimedia Commons (licencias indicadas en los archivos de origen).";

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

export default function Nuevo2SotoDelBarcoPage() {
  const ficha = municipioPorSlug("soto-del-barco");
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
      <CabeceraFichaMunicipio
        ficha={ficha}
        zonaId={z.id}
        zonaNombre={z.zona}
        titulo="Soto del Barco / San Juan de la Arena"
      />

      <BloqueZonaFicha
        zonaId={z.id}
        nombreZona={z.zona}
        resumen={RESUMEN_ZONA_NUEVO2[0]}
      />
      <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-[var(--tinta)]">
        {RESUMEN_ZONA_NUEVO2[1]}
      </p>

      <MapaMunicipioFicha ficha={ficha} capasPortada={Boolean(ficha.mapa)} />

      <DesplegableNuevo2 titulo="Cómo se vive" varianteTarjetaV1>
        {COMO_SE_VIVE_NUEVO2.map((p) => (
          <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_COMO_ARENA.src} pie={FOTO_COMO_ARENA.pie} />
        <Foto src={FOTO_COMO_VILLA.src} pie={FOTO_COMO_VILLA.pie} />
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Frente a Mallorca" varianteTarjetaV1>
        <h3 className="mt-1 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Clima
        </h3>
        {CLIMA_NUEVO2.map((p) => (
          <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <h3 className="mt-7 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Vivir
        </h3>
        {VIVIR_NUEVO2.map((p) => (
          <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="De dónde viene" varianteTarjetaV1>
        {DE_DONDE_VIENE_NUEVO2.slice(0, 4).map((p) => (
          <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_HISTORIA_CASTILLO.src} pie={FOTO_HISTORIA_CASTILLO.pie} />
        {DE_DONDE_VIENE_NUEVO2.slice(4).map((p) => (
          <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Mar, río y camino" varianteTarjetaV1>
        {MAR_RIO_CAMINO_NUEVO2.slice(0, 2).map((p) => (
          <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_MAR_ESTUARIO.src} pie={FOTO_MAR_ESTUARIO.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(2, 4).map((p) => (
          <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_MAR_PLAYA.src} pie={FOTO_MAR_PLAYA.pie} />
        <Foto src={FOTO_MAR_QUEBRANTOS.src} pie={FOTO_MAR_QUEBRANTOS.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(4).map((p) => (
          <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Casa" varianteTarjetaV1>
        {CASA_NUEVO2.map((p) => (
          <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}

        <div className="mt-6 pt-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--tinta-suave)]">
            Precio y bandas
          </p>
          <p className="mt-1 max-w-2xl text-[15px] leading-relaxed text-[var(--tinta)]">
            {CASA_PRECIO_INTRO}
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[var(--linea)] bg-white">
            <table className="min-w-[36rem] w-full text-left text-sm">
              <thead className="border-b border-[var(--linea)] bg-[var(--papel)] text-[var(--tinta-suave)]">
                <tr>
                  <th className="px-3 py-2 font-medium">Referencia</th>
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
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--tinta)]">
            {CASA_BANDAS_NOTA}
          </p>
        </div>

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
          <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <h3 className="mt-7 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          No encaja si
        </h3>
        {NO_ENCAJA_SI_NUEVO2.map((p) => (
          <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <h3 className="mt-7 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Qué comprobar
        </h3>
        {QUE_COMPROBAR_NUEVO2.map((p) => (
          <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
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
