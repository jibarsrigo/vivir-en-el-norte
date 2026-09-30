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
 * Texto: Lote_Asturias_Centro_4_CERTIFICADOS_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Asturias Centro reúne formas muy distintas de vivir junto al Cantábrico: desde el puerto en ladera de Cudillero y los núcleos del estuario del Nalón hasta las villas marineras de Luanco y Candás, la playa de Salinas y la escala urbana de Gijón. Avilés y Oviedo completan un territorio en el que costa, ciudades y aeropuerto quedan relativamente próximos, aunque la vida cotidiana cambia mucho según el lugar elegido.",
  "Soto del Barco ocupa la parte occidental de esa zona, alrededor de la desembocadura del Nalón. Dentro de un concejo pequeño hay dos experiencias residenciales muy distintas: Soto del Barco, algo más interior y ligado a los servicios municipales, y San Juan de la Arena, junto al puerto y a la ría antes de que el Nalón llegue al Cantábrico.",
  "Esa posición permite combinar una escala pequeña con Avilés y el aeropuerto relativamente cerca. La elección entre Soto y San Juan cambia cuánto río, puerto y costa entran en la vida diaria y cuánto coche hace falta para los servicios que quedan fuera del concejo.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "En Soto se vive en la capital del concejo, en un núcleo pequeño que, al alejarse del centro, se abre pronto hacia viviendas más dispersas. Hay centro médico, farmacia, biblioteca y polideportivo, además del Ayuntamiento. Para lo básico no hace falta salir inmediatamente del municipio; para compras mayores, hospital u otros servicios, la semana acaba extendiéndose hacia fuera.",
  "San Juan de la Arena tiene vida básica propia: centro médico, farmacia, biblioteca, polideportivo, supermercado y centro social de mayores, además de algunos servicios sociales determinados días. Eso permite resolver una parte apreciable de la rutina dentro del propio pueblo.",
  "Desde muchas viviendas de San Juan se puede hacer una compra o resolver una necesidad básica y después acercarse al puerto andando. El Nalón ya está ensanchándose antes de llegar al mar; barcos, puerto y desembocadura forman parte del paisaje habitual.",
  "Soto y San Juan están cerca, pero no son intercambiables. En Soto, el río acompaña una vida más interior y administrativa. En San Juan, la ría, el puerto y después la playa tienen mucha más presencia en los recorridos cotidianos.",
  "Para hospital, compras grandes y servicios que no existen dentro del concejo hay que desplazarse. El Hospital San Agustín de Avilés queda aproximadamente a 16 km y unos 20 minutos. El aeropuerto de Asturias está excepcionalmente cerca, en torno a 6 km y unos 10 minutos.",
  "El coche sigue formando parte de la vida para hospital, compras de mayor escala y muchas salidas. Eso no impide que en San Juan una parte de las necesidades básicas pueda resolverse sin arrancarlo.",
] as const;

const CLIMA_NUEVO2 = [
  "El cambio respecto a Mallorca se nota sobre todo en verano y en la frecuencia de días húmedos o cubiertos. El verano es bastante más fresco y la lluvia, la humedad, las nubes y las brumas tienen mucha más presencia a lo largo del año.",
  "Las referencias disponibles para esta parte de Asturias sitúan el verano alrededor de los 19 °C de media, con muchas menos horas de sol y bastantes más días de lluvia que Mallorca. Son valores del entorno, no mediciones exclusivas de Soto del Barco.",
  "En la práctica, el calor intenso pesa mucho menos durante el verano, pero el tiempo es menos estable. Hay más días en los que una terraza se utiliza solo a ratos, una caminata depende de cómo evolucione el cielo o la ropa tarda más en secarse.",
  "En una vivienda conviene fijarse especialmente en luz, orientación, ventilación y aislamiento. La diferencia climática no se limita a la temperatura: también cambia la manera de usar la casa y los espacios exteriores durante buena parte del año.",
] as const;

const VIVIR_NUEVO2 = [
  "En San Juan, el agua aparece primero como río ancho y puerto. Se puede caminar junto a la desembocadura, ver las embarcaciones y continuar hasta que el Nalón termina y comienza la costa abierta. Los Quebrantos añade la playa, pero no sustituye esa primera relación con el agua.",
  "En San Juan no hace falta salir del pueblo para cada compra o necesidad básica. Para una oferta comercial mayor, hospital o determinadas gestiones hay que desplazarse hacia Pravia, Avilés u otros núcleos del entorno, y el coche vuelve a formar parte de la semana.",
  "El aeropuerto queda muy cerca para un lugar de este tamaño. Eso acorta mucho la parte terrestre de un viaje. La conexión con Palma no debe darse por permanente: depende de la programación de cada temporada.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Para entender Soto del Barco hay que mirar el Nalón no como fondo del paisaje, sino como una pieza que organizó el territorio.",
  "Antes de existir el puente actual, cruzar el río significaba hacerlo en barca. Esa antigua travesía quedó incluso en el nombre del concejo y en su escudo. El Camino de Santiago llegaba al embarcadero situado junto al Castillo de San Martín y continuaba por la otra orilla después de atravesar el Nalón.",
  "El castillo estaba allí por una razón. Su posición permitía controlar un punto estratégico de comunicación entre la costa y el interior. El enclave tiene antecedentes desde la Edad del Hierro y durante la Edad Media mantuvo esa función de vigilancia sobre la desembocadura. Soto permaneció ligado a Pravia hasta constituirse como ayuntamiento independiente en el siglo XIX.",
  "Hoy el peregrino ya no puede repetir aquel cruce en barca: al llegar a ese punto tiene que volver hacia la carretera y utilizar el puente. El trazado antiguo permite entender hasta qué punto el río condicionaba los desplazamientos.",
  "San Juan de la Arena cuenta la segunda parte de la historia. Allí el Nalón deja de ser únicamente paso y se convierte también en trabajo. La pesca, la lonja, la angula y la industria conservera fueron dando forma al núcleo marítimo. El puerto que hoy acompaña un paseo normal pertenece a esa historia económica.",
  "Por eso Soto y San Juan siguen teniendo caracteres distintos aunque compartan municipio. Uno creció alrededor de la administración y de una posición interior sobre el Nalón; el otro, allí donde el río llega al mar y la actividad portuaria formó parte de la vida local.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "En San Juan no hace falta preparar una excursión para caminar junto al agua. El recorrido más sencillo empieza en el propio pueblo. El puerto acompaña la desembocadura y permite seguir andando mientras el Nalón se ensancha.",
  "Si se continúa hacia la costa aparece Los Quebrantos, la única playa del municipio, comunicada directamente con San Juan. Tiene unos 800 metros y continúa con el playón de Bayas hasta formar un arenal de más de tres kilómetros.",
  "Aquí el mar ya no es la ría protegida por el puerto. Es Cantábrico abierto. La playa dispone de acceso sencillo, aparcamiento, carril bici independiente y acceso adaptado al baño, además de servicios estivales. También se utiliza para surf.",
  "Puerto y desembocadura pueden entrar en un paseo corto; Los Quebrantos permite alargarlo hasta una costa mucho más abierta. Tener la playa al lado no significa tener siempre un baño fácil: el estado del Cantábrico importa más que la distancia desde casa.",
  "En Soto la relación con el agua es distinta. El Nalón sigue estando presente, pero puerto y playa no forman parte inmediata de la vida doméstica como pueden hacerlo en San Juan.",
  "El Camino de Santiago todavía conduce hacia el antiguo embarcadero del Castillo de San Martín, pero la barca que permitía continuar directamente hacia la otra orilla ya no existe. Para cruzar hoy hay que volver a la carretera y utilizar el puente.",
] as const;

const CASA_NUEVO2 = [
  "En este municipio conviene elegir primero entre Soto y San Juan y después comparar viviendas. Una dirección en cada núcleo puede pertenecer al mismo concejo y ofrecer una rutina bastante distinta.",
  "En San Juan merece la pena salir de la vivienda candidata y hacer el recorrido real: compra, farmacia, centro médico, puerto y playa. Una casa bien situada puede reunir buena parte de esa secuencia sin coche.",
  "En Soto, fuera del pequeño centro, las viviendas se vuelven más dispersas y una distancia que parece corta en el anuncio puede terminar significando más desplazamientos cotidianos. Conviene comprobar desde la puerta de casa cuánto puede hacerse andando y para qué acaba siendo necesario coger el coche.",
] as const;

const CASA_PRECIO_INTRO =
  "Referencia municipal: 1.185 €/m² · abril de 2026.";

const CASA_BANDAS_NOTA =
  "Estas cifras son orientativas y no tasan una vivienda concreta. Se calculan con aproximadamente 65 m² para dos habitaciones y 90 m² para tres; las franjas A y B corresponden a la cercanía a la costa indicada en la leyenda.";

const CASA_ADVERTENCIA_MICROZONA =
  "En San Juan conviene comprobar cuánto cambia la vivienda cuando se pasa de «cerca del puerto» a poder llegar realmente andando a compra, farmacia, centro médico y playa. En Soto pesan más el acceso desde la vivienda, la dispersión y la frecuencia con la que el coche acaba resolviendo una necesidad que sobre el mapa parecía próxima. La cobertura de fibra debe comprobarse en la dirección concreta.";

const CASA_QUE_CONVIENE_REVISAR =
  "Recorrido diario desde la puerta, estado de reforma, aislamiento, humedad, orientación y luz, barreras o ascensor, aparcamiento y conexión real a internet. En San Juan hay que comprobar además si puerto y costa forman de verdad parte de la vida a pie desde esa dirección.";

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
  "Puede encajar si se busca vivir en un concejo pequeño sin quedar muy lejos de hospital y aeropuerto, y se acepta salir del municipio para compras grandes, atención hospitalaria y otros servicios que no existen allí.",
  "San Juan añade una combinación particular: un pueblo pequeño donde compra básica, médico, farmacia, puerto, desembocadura y playa pueden formar parte de una misma vida diaria.",
  "Soto ofrece la otra posibilidad: vivir algo más retirado de la costa abierta, junto al Nalón y en el núcleo administrativo, manteniendo servicios básicos propios.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Puede encajar peor si se quiere una oferta amplia de comercio, actividades y sanidad dentro del propio pueblo o reducir mucho el uso del coche cuando la necesidad sale de lo básico.",
  "También hay que aceptar el cambio respecto a Mallorca: menos sol, mucha más humedad y lluvia y un verano bastante más fresco. En San Juan, tener Los Quebrantos junto al pueblo tampoco convierte el Cantábrico en una playa de baño previsible.",
  "También puede encajar peor si se busca mucha obra nueva o se necesita dar por segura la fibra sin comprobar la dirección concreta. En un mercado pequeño, el estado, el acceso y la ubicación de cada vivienda pesan más que una media municipal.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Probar por separado Soto y San Juan. En Soto, salir desde una vivienda posible y hacer la vida corriente: compra, farmacia, médico, paseo y coche. En San Juan, hacer lo mismo y continuar hacia el puerto, la desembocadura y Los Quebrantos. Después conviene hacer el trayecto al Hospital San Agustín y al aeropuerto.",
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
