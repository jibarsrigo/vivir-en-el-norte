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
 * NUEVO2 — Vigo (Vigo e ría).
 * Texto: Lote_Vigo_e_Ria_4_CERTIFICADOS_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Vigo e ría reúne la gran ciudad de Vigo y varios municipios que se organizan alrededor del fondo de la ría y de la ensenada de San Simón. Vigo concentra hospitales, empleo, universidad, aeropuerto, puerto y servicios urbanos; Redondela combina una villa ferroviaria con Cesantes y Chapela; Soutomaior se reparte entre Arcade y un interior más rural; Vilaboa ocupa la orilla de la ensenada y las laderas que conectan la ría con Pontevedra. En pocos kilómetros se pasa de una vida plenamente urbana a parroquias donde el coche vuelve a ser imprescindible.",
  "Vigo es la pieza urbana de la zona y, al mismo tiempo, un municipio con costa, playas y parroquias residenciales que se alejan mucho de la imagen de una ciudad compacta. Centro, Casco Vello, O Berbés, Ensanche, Travesas y Coia concentran servicios; Alcabre, Coruxo, Oia y Saiáns acercan Samil, O Vao y la costa.",
  "La pendiente y la microzona cambian mucho la vida diaria. Dentro del mismo municipio se puede vivir con gran autonomía peatonal o depender bastante del coche para subir, comprar o llegar a servicios.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Vigo mantiene actividad durante todo el año. Puerto, hospitales, comercio, universidad, industria, colegios y oficinas hacen que enero no dependa de la temporada turística.",
  "En el centro se puede vivir con poca dependencia del coche si la vivienda está bien elegida. Mercados, supermercados, farmacias, restauración, cultura y una red amplia de autobuses permiten resolver gran parte de la semana dentro de la ciudad.",
  "La pendiente cambia mucho lo que significa vivir cerca de algo. Una distancia corta sobre el mapa puede incluir una subida exigente. Antes de valorar una vivienda conviene caminar hasta la compra, la parada de autobús o el aparcamiento y comprobar el desnivel real.",
  "Coia y Travesas ofrecen otra forma de ciudad: bloques residenciales, comercio cotidiano, colegios y buenas conexiones urbanas sin la presión del centro. Bouzas combina vida de barrio, puerto y paseo litoral, pero algunas calles notan actividad portuaria, restauración y celebraciones.",
  "Alcabre cambia la relación con el mar. Samil puede quedar a pocos minutos y aparecen más casas, urbanizaciones y pequeños edificios. En Coruxo, Oia y Saiáns aumenta la posibilidad de jardín, vistas o costa próxima, pero también la necesidad de coche para compras, colegio o actividades si la vivienda queda apartada de los ejes de autobús.",
  "Vigo cuenta con hospitales y centros de salud dentro del propio municipio. El Álvaro Cunqueiro y la red hospitalaria viguesa permiten resolver atención especializada sin desplazarse a otra ciudad.",
  "El aeropuerto de Vigo está dentro del entorno inmediato de la ciudad. La conexión directa con Palma es limitada o estacional, por lo que Santiago sigue siendo una alternativa cuando hace falta más continuidad anual.",
  "El tren y los autobuses amplían las opciones para salir sin coche. Aun así, una vivienda costera mal conectada puede hacer que la semana dependa bastante del vehículo aunque administrativamente se viva en una gran ciudad.",
  "Las fechas de mayor afluencia no afectan por igual a toda la ciudad. Durante la Fiesta de la Reconquista, que recrea en el Casco Vello la expulsión de las tropas francesas de Vigo en 1809, aumentan el público, las actividades y los cortes de tráfico en esa zona. Las fiestas de Bouzas alteran durante varios días el movimiento y el ruido del barrio; en verano se carga más el acceso a las playas, y durante la campaña navideña el centro recibe muchos más visitantes. Antes de comprar conviene saber cuáles de esos periodos afectan realmente a la calle de la vivienda.",
] as const;

const CLIMA_NUEVO2 = [
  "Vigo tiene un verano mucho más suave que Mallorca. La media estival ronda los 20,5 °C y la invernal, los 9,5 °C.",
  "La diferencia mayor aparece entre octubre y marzo. Llueve con mucha más frecuencia, la humedad permanece durante días y el cielo puede encadenar periodos grises que en Mallorca son menos habituales.",
  "El municipio está protegido por la ría, pero la exposición cambia por microzona. La costa de Samil y O Vao recibe brisa y salitre; las laderas interiores pueden estar más resguardadas, aunque una orientación poco favorable puede reducir mucho el sol de invierno.",
  "El verano permite caminar, dormir y utilizar la costa con menos calor nocturno. Samil, O Vao o Canido se pueden disfrutar a horas que en Mallorca resultarían más duras por temperatura.",
  "El agua es claramente más fría. En verano suele rondar aproximadamente los 17–19 °C, por lo que el baño no tiene la misma sensación térmica que en el Mediterráneo.",
  "En vivienda, la inspección de invierno es importante. Ventilación, orientación, carpinterías, aislamiento y posibles condensaciones pesan especialmente en edificios antiguos o en casas de ladera.",
] as const;

const VIVIR_NUEVO2 = [
  "Vigo permite mantener hábitos de ciudad sin renunciar necesariamente al mar, pero obliga a decidir qué parte de esa combinación debe quedar junto a casa.",
  "Si la prioridad es caminar a mercado, restauración, trabajo, cultura y transporte, el centro y los barrios urbanos ofrecen más autonomía. La playa pasa a ser una salida en autobús o coche.",
  "Si la prioridad es bajar con frecuencia a Samil, O Vao o a las pequeñas playas del suroeste, Alcabre, Coruxo y las parroquias costeras acercan el agua, pero la compra amplia, la universidad, parte de la sanidad y muchas actividades vuelven a requerir desplazamiento.",
  "El autobús urbano reduce esa dependencia en bastantes ejes, aunque no corrige todas las cuestas ni la dispersión de las parroquias.",
  "La escala de ciudad también significa tráfico, obras, actividad portuaria y ruido. Una calle tranquila puede cambiar a pocas manzanas de distancia; por eso en Vigo la dirección concreta importa mucho más que el nombre del barrio.",
  "En invierno siguen funcionando hospitales, comercio, universidad, transporte y actividades culturales. Samil y otros paseos costeros también continúan utilizándose cuando el tiempo acompaña, aunque el baño deje de formar parte de la rutina.",
  "Para quien llega desde Mallorca y quiere conservar servicios urbanos completos, el cambio se nota sobre todo en la lluvia, las pendientes y el comportamiento de la vivienda en invierno, más que en la disponibilidad de comercio, sanidad o transporte.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Vigo creció mirando al puerto.",
  "O Berbés fue uno de los barrios ligados a la pesca y al comercio marítimo. Sus soportales y casas recuerdan una ciudad anterior al gran crecimiento industrial.",
  "La relación con el mar es mucho más antigua. En el centro se conservan restos de salinas romanas, vinculadas a la producción de sal necesaria para conservar pescado y otros alimentos.",
  "Durante los siglos XIX y XX el puerto, los astilleros y la industria aceleraron el crecimiento. La implantación de Citroën a finales de los años cincuenta —hoy Stellantis— consolidó una economía industrial que sigue teniendo consecuencias sobre empleo, tráfico y expansión urbana.",
  "La Reconquista de 1809 forma parte de la identidad pública de la ciudad. La expulsión de las tropas napoleónicas se recuerda cada año en el Casco Vello y explica una de las fiestas que más transforma el centro durante varios días.",
  "El Monte do Castro conserva otra capa de la historia. Allí aparecen restos castreños y fortificaciones posteriores en una posición dominante sobre la ría.",
  "La ría conecta también Vigo con la batalla de Rande de 1702 y con la literatura de Julio Verne. No son episodios aislados: ayudan a entender por qué el puerto, el estrecho y las Cíes aparecen de forma constante en la identidad local.",
  "Las Illas Cíes forman parte del municipio y hoy están integradas en el Parque Nacional Marítimo-Terrestre das Illas Atlánticas de Galicia. Su condición protegida limita el acceso y hace que visitarlas sea una salida planificada, no una playa cotidiana más.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "En Vigo se puede elegir entre playa urbana, paseo fluvial, parques junto al agua y salidas de monte sin salir del municipio.",
  "Samil es la playa urbana más conocida. El arenal supera un kilómetro y tiene paseo, jardines, instalaciones deportivas, hostelería y paradas de autobús. Para quien vive en Alcabre puede entrar en una tarde normal; desde el centro exige un desplazamiento corto.",
  "O Vao ofrece otro baño amplio en la costa suroeste y mira hacia Toralla. Canido, Fontaíña y otras playas pequeñas permiten elegir ambientes distintos sin salir del municipio.",
  "La Senda Azul conecta ciudad, río y playas. El tramo del Lagares tiene unos 8,3 km, dificultad baja y alrededor de dos horas de recorrido completo. Se puede acceder desde numerosos puntos y recorrer solo una parte, de modo que puede funcionar como paseo habitual sin necesidad de completarlo entero.",
  "Desde la desembocadura se puede continuar por costa hacia Bouzas o hacia O Vao y Canido. Esa continuidad permite hacer recorridos largos junto al agua sin convertirlos necesariamente en excursión de montaña.",
  "Castrelos es otra pieza cotidiana: parque, jardines y caminos junto al Lagares dentro de la ciudad.",
  "El Monte do Castro permite subir andando desde el centro, pero la pendiente es importante. Monte da Guía ofrece otro mirador urbano sobre Rande desde Teis.",
  "Para una salida más larga, Alba y Cepudo permiten ganar altura sobre la ría. Desde sus miradores se entiende bien la forma de Vigo y la relación entre ciudad, laderas y mar.",
  "Las Cíes requieren barco y, en periodos de alta demanda, autorización. Son una salida de día completo y no equivalen a tener una playa junto a casa.",
] as const;

const CASA_NUEVO2 = [
  "Vigo tiene un mercado residencial muy diverso.",
  "En el centro, Ensanche, Travesas o Coia predominan pisos de distintas décadas. La prioridad suele estar en ascensor, garaje, orientación, ruido y facilidad para hacer la semana andando.",
  "En Bouzas y Alcabre aparecen edificios y casas próximas al litoral. La cercanía a Samil o las vistas hacia las Cíes aumentan el precio y también hacen más importante revisar exposición al salitre, tráfico de verano y aparcamiento.",
  "Coruxo, Oia y Saiáns ofrecen más casas, parcelas y pequeños núcleos. Allí la pregunta principal no es solo cuánto terreno se obtiene, sino cuánto coche exige cada actividad.",
  "En zonas altas hay que comprobar pendiente tanto dentro como fuera de la parcela. Un acceso que parece sencillo en coche puede ser poco amable andando, y una casa con varias plantas puede ser incómoda a largo plazo.",
  "El precio medio municipal es 2.591 €/m².",
] as const;

const CASA_ADVERTENCIA_MICROZONA = [
  "Centro urbano, Coia/Travesas, Bouzas, Alcabre y las parroquias costeras no deben compararse como si ofrecieran la misma vida.",
  "El centro maximiza servicios y transporte. Coia y Travesas combinan vivienda y equipamientos. Bouzas suma paseo y barrio junto al puerto. Alcabre acerca Samil. Coruxo, Oia y Saiáns ganan casa, parcela y costa a cambio de más coche.",
] as const;

const CASA_QUE_CONVIENE_REVISAR = [
  "Caminar desde el portal hasta compra, farmacia, parada de autobús y aparcamiento para comprobar la pendiente real.",
  "Hacer el trayecto a trabajo o actividades en hora punta.",
  "Si la vivienda está cerca de Samil, O Vao o Bouzas, repetir la visita en un día de verano y comprobar aparcamiento y ruido.",
  "En una casa de ladera, revisar acceso, drenaje, muros, cubierta y maniobra de coche.",
  "En edificios antiguos, comprobar ascensor, aislamiento, ventilación y señales de humedad.",
  "Si hay vistas al mar, comprobar qué orientación y horas de sol recibe realmente la vivienda en invierno.",
] as const;

const CASA_MERCADO_REVENTA = [
  "Vigo tiene una base de demanda amplia porque combina empleo, universidad, hospitales, administración, puerto y servicios.",
  "En pisos urbanos suelen ayudar ascensor, garaje, luz y una ubicación que reduzca la dependencia del coche.",
  "En costa, vistas y proximidad a playa amplían el atractivo, pero una vivienda muy ruidosa, sin aparcamiento o con acceso complicado puede perder parte de ese público.",
  "En las parroquias costeras, una futura venta dependerá mucho del tamaño y mantenimiento de la parcela, el estado de la casa, la orientación, el acceso y el tiempo real hasta los servicios. Una vista excelente no compensa automáticamente una rutina incómoda.",
] as const;

const ENCAJA_SI_NUEVO2 = [
  "Encaja si se quiere conservar una ciudad completa y poder decidir cuánto mar entra en la vida diaria.",
  "También si hospital, universidad, aeropuerto, tren, cultura y comercio deben quedar dentro del mismo municipio.",
  "Puede encajar especialmente si se acepta vivir en un barrio urbano para reducir coche y utilizar la costa como salida frecuente.",
  "Y puede encajar si se prefiere una casa cerca de Samil, O Vao o las parroquias del suroeste y se acepta que parte de la semana vuelva a depender del vehículo.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Encaja peor si se busca silencio de pueblo y una escala urbana muy pequeña.",
  "También si las pendientes son un problema importante y la vivienda está en una ladera mal conectada.",
  "Puede resultar menos adecuado si se quiere una casa grande con vistas y playa próxima dentro de un presupuesto contenido.",
  "Y encaja peor si se espera que una vivienda costera mantenga la misma autonomía peatonal que el centro.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Hacer una jornada completa desde la vivienda candidata sin coche si esa autonomía forma parte de la decisión.",
  "Caminar las cuestas que se repetirían cada día.",
  "Probar el autobús que se usaría realmente y no solo comprobar que existe una parada.",
  "Hacer el trayecto al Álvaro Cunqueiro y al aeropuerto en horario normal.",
  "Visitar la zona en invierno con lluvia y en verano con actividad de playa.",
  "Y comprobar desde la vivienda cuánto tarda realmente llegar al paseo o playa que justifica elegir esa microzona.",
] as const;

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m².";

const CASA_FILA_PRECIOS = {
  municipio: "Vigo",
  a2: "218.940 €",
  a3: "303.147 €",
  b2: "176.836 €",
  b3: "244.850 €",
  m2: "2.591 €/m²",
} as const;

const CASA_PRECIO_NOTA_NUEVO2 = [
  "En Vigo la cercanía a costa no describe por sí sola una rutina de playa. Centro, puerto, Bouzas, Alcabre y parroquias costeras pueden quedar cerca del agua y ofrecer relaciones muy distintas con el baño.",
] as const;

const FOTO_COMO_1 = {
  src: "/fotos/vigo-e-ria/vigo-samil.jpg",
  pie: "Samil: playa, paseo y jardines dentro de la ciudad",
} as const;

const FOTO_HIST_1 = {
  src: "/fotos/vigo-e-ria/vigo-berbes.jpg",
  pie: "O Berbés, el antiguo barrio de pescadores junto al puerto",
} as const;

const FOTO_HIST_2 = {
  src: "/fotos/vigo-e-ria/vigo-castro.jpg",
  pie: "Parque do Castro: fortaleza y jardines sobre el centro de Vigo",
} as const;

const FOTO_MAR_1 = {
  src: "/fotos/vigo-e-ria/vigo-o-vao.jpg",
  pie: "O Vao y el islote de Toralla, en la costa suroeste",
} as const;

const FOTO_MAR_2 = {
  src: "/fotos/vigo-e-ria/vigo-cies.jpg",
  pie: "Las Illas Cíes, el archipiélago que cierra la ría por el oeste",
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

export default function Nuevo2VigoPage() {
  const ficha = municipioPorSlug("vigo");
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
          <ConNegritas
            texto={CLIMA_NUEVO2[0]}
            fragmentos={["20,5 °C", "9,5 °C"]}
          />
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
        {DE_DONDE_VIENE_NUEVO2.slice(0, 2).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_HIST_1.src} pie={FOTO_HIST_1.pie} />
        {DE_DONDE_VIENE_NUEVO2.slice(2, 5).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_HIST_2.src} pie={FOTO_HIST_2.pie} />
        {DE_DONDE_VIENE_NUEVO2.slice(5).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Mar, río y camino" varianteTarjetaV1>
        {MAR_RIO_CAMINO_NUEVO2.slice(0, 3).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_MAR_1.src} pie={FOTO_MAR_1.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(3, 6).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_MAR_2.src} pie={FOTO_MAR_2.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(6).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Casa" varianteTarjetaV1>
        {CASA_NUEVO2.slice(0, 5).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={CASA_NUEVO2[5]} fragmentos={["2.591 €/m²"]} />
        </p>
        {CASA_NUEVO2.slice(6).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}

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
            {CASA_PRECIO_NOTA_NUEVO2.map((p) => (
              <p key={p.slice(0, 64)} className="px-3 pb-2 text-xs leading-relaxed text-[var(--tinta-suave)]">
                {p}
              </p>
            ))}
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
