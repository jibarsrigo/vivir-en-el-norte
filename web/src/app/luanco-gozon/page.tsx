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
 * NUEVO2 — Luanco (Gozón).
 * Texto: Lote_Asturias_Centro_4_CERTIFICADOS_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Asturias Centro reúne formas muy distintas de vivir junto al Cantábrico: desde el puerto en ladera de Cudillero y los núcleos del estuario del Nalón hasta las villas marineras de Luanco y Candás, la playa de Salinas y la escala urbana de Gijón. Avilés y Oviedo completan un territorio en el que costa, ciudades y aeropuerto quedan relativamente próximos, aunque la vida cotidiana cambia mucho según el lugar elegido.",
  "Luanco ocupa la costa oriental de Asturias Centro, entre Avilés y Gijón, y es la capital de Gozón. Frente a la escala urbana de Gijón o a la gran playa de Salinas, aquí la vida se concentra en una villa marinera pequeña donde puerto, playa, comercio y servicios quedan muy próximos.",
  "El resto de Gozón se extiende por una costa y un interior mucho más dispersos. Vivir en Luanco no es lo mismo que vivir en una parroquia rural o junto a otra playa del concejo: la villa permite reducir bastante el coche, mientras fuera de ella aumenta la dependencia de los desplazamientos.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Si se vive bien situado dentro de Luanco, una parte importante de la mañana puede hacerse a pie. La villa tiene centro de salud con Punto de Atención Continuada, varias farmacias, servicios sociales, biblioteca y comercio cotidiano.",
  "El puerto y la playa están dentro de esa misma trama. Se puede hacer un recado, pasar por una farmacia, tomar algo y continuar andando hacia el frente marítimo sin volver al coche. Esa proximidad entre servicios y mar es una de las diferencias más claras entre vivir en Luanco y hacerlo en una zona más dispersa de Gozón.",
  "La biblioteca está en Parque Zapardel y el Museo Marítimo de Asturias añade una opción cultural poco habitual para una villa de este tamaño. El museo explica pesca tradicional, navegación, biología marina y carpintería de ribera, es decir, la construcción artesanal de embarcaciones de madera.",
  "Luanco resuelve bastante para su tamaño, pero no todo. Para atención hospitalaria hay que salir de la villa. El Hospital de Jove, en Gijón, queda aproximadamente a 14 km y unos 15 minutos; el Hospital Universitario San Agustín, en Avilés, a unos 17 km y alrededor de 20 minutos.",
  "El aeropuerto de Asturias queda aproximadamente a 25 km y unos 20 minutos en coche. Dentro de Luanco puede reducirse bastante el uso diario del coche; hospital, aeropuerto y buena parte de las playas y núcleos del resto de Gozón vuelven a exigirlo.",
] as const;

const CLIMA_NUEVO2 = [
  "Frente a Mallorca, Luanco tiene un verano mucho más fresco y bastantes más días húmedos, lluviosos o cubiertos durante el año.",
  "Las referencias del litoral central asturiano sitúan los meses más cálidos alrededor de los 19 °C de media. Para la vida diaria importa más el patrón general: más humedad, más lluvia y menos continuidad de tiempo seco que en Mallorca.",
  "En julio y agosto el calor intenso y persistente pesa mucho menos, pero tampoco se puede contar con una semana entera de tiempo seco y playa. El paseo junto al mar puede seguir formando parte del día cuando cambia el cielo; el baño depende más de las condiciones concretas.",
  "En una vivienda próxima a la costa conviene prestar atención a orientación, viento, aislamiento, ventanas, ventilación y estado exterior. Una terraza o unas vistas abiertas acercan el mar a la casa, pero también pueden aumentar la exposición al tiempo atlántico.",
] as const;

const VIVIR_NUEVO2 = [
  "En Luanco, mar y vida práctica caben dentro de una villa pequeña. Puerto, playa, farmacia, centro de salud, biblioteca y calles comerciales están suficientemente próximos para enlazar varios de esos lugares andando desde una vivienda bien situada.",
  "Para hospital, determinadas compras, servicios especializados o una oferta cultural más amplia hay que desplazarse hacia Avilés o Gijón.",
  "El resto de Gozón funciona de otra manera. Sus playas, núcleos rurales y viviendas dispersas amplían mucho las posibilidades de costa y naturaleza, pero normalmente introducen más coche que el centro de Luanco.",
  "El aeropuerto está a unos veinte minutos en coche. Para viajar a Mallorca hay que comprobar la programación concreta, porque la cercanía al aeropuerto no equivale a disponer de conexión permanente con Palma durante todo el año.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "El puerto ayuda a entender por qué Luanco tiene la forma y la identidad que conserva. Luanco se entiende como capital de Gozón: villa marinera con puerto, museo marítimo y una escala compacta frente al Cantábrico.",
  "Durante siglos, el mar fue trabajo antes de ser paseo. La flota local estuvo vinculada primero a la pesca de la ballena y después a especies como bonito, sardina, caballa, rape y marisco. También hubo industria conservera. Esa actividad explica por qué el puerto no es un elemento añadido a una localidad de playa: está en el origen de la villa marinera que existe hoy. La historia de pesca y de villa explica un casco que mira a la dársena antes que a un ensanche genérico.",
  "La construcción de barcos dejó otra huella. En el entorno de Aramar, una pequeña ensenada próxima a Luanco, todavía quedan restos de antiguos astilleros: naves, gradas donde se construían y botaban embarcaciones y estructuras de protección. Allí se entiende físicamente qué significa la carpintería de ribera que después aparece explicada dentro del Museo Marítimo. El cabo de Peñas añade la capa de faro y acantilado que marca el concejo entero.",
  "En el centro histórico queda también la Torre del Reloj, un edificio público del siglo XVIII que tuvo usos tan distintos como vigilancia, cárcel y almacén. Y junto al mar está la iglesia de Santa María, también del siglo XVIII. El retablo mayor fue pagado por el antiguo gremio de mareantes, la organización de quienes vivían profesionalmente del mar. Las parroquias de Gozón reparte residencia y coche; no todo el concejo es Luanco villa.",
  "En 1948 se fundó aquí el Museo Marítimo de Asturias, que conserva embarcaciones, artes de pesca, cartas náuticas y materiales sobre navegación y fauna marina. Puerto, museo y paseo pertenecen así a una misma historia de pesca, construcción naval y vida junto al Cantábrico. Hoy comprar aquí es decidir entre Luanco a pie o resto de Gozón, con Avilés y Gijón como apoyos urbanos. El anuncio «Gozón» puede ocultar esa diferencia.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "En Luanco hay que distinguir las playas y los paseos que están realmente incorporados a la villa de la costa mucho más extensa de Gozón. El puerto y las playas de Luanco organizan el baño cotidiano de villa.",
  "La playa urbana principal es la playa de Luanco, también llamada Santa Marina. Es un arenal de unos 280 metros situado dentro del propio núcleo, con acceso rodado, duchas, aseos y servicios de salvamento en temporada. No hace falta conducir hasta ella si se vive en el centro. El Cantábrico abierto hacia Peñas cambia viento y exposición respecto a la dársena.",
  "En uno de sus extremos está la iglesia de Santa María, prácticamente al borde del Cantábrico. Se puede recorrer el frente marítimo con la playa a un lado y llegar hasta la iglesia sin abandonar la villa. En verano el agua suele rondar los 19–21 °C; un domingo de agosto el frente se llena.",
  "Cerca del puerto está La Ribera, otra playa urbana. La información turística oficial señala que apenas se utiliza para el baño. Su interés está más en cómo completa el frente marítimo junto al casco antiguo y el puerto que en ofrecer una segunda playa equivalente a Santa Marina. Playas del concejo piden a veces coche según la parroquia.",
  "Desde el entorno de la playa parten escaleras hacia una senda costera. Si se continúa, la ruta puede llegar hasta Bañugues, otra localidad de Gozón situada aproximadamente a cuatro kilómetros. Ahí deja de ser simplemente dar una vuelta por Luanco y pasa a ser una caminata costera más larga. Avilés y Gijón completan ciudad y hospital a minutos.",
  "En otra dirección aparece Aramar, la ensenada donde se conservan vestigios de los antiguos astilleros. Más allá están otras playas y paisajes del concejo, pero ya no deben confundirse con tenerlos delante de casa en Luanco. Elegir Luanco o parroquia describe mejor Gozón que inventariar calas.",
] as const;

const CASA_NUEVO2 = [
  "La referencia disponible para Gozón es de 2.379 €/m² en mayo de 2026. Sirve para situar el mercado del concejo, pero dentro de Gozón hay ubicaciones que ofrecen vidas muy distintas.",
  "Una vivienda en Luanco puede permitir hacer andando compra, farmacia, centro de salud, puerto y playa. Una casa rural o una vivienda próxima a otra playa del concejo puede ofrecer más espacio o naturaleza, pero depender mucho más del coche.",
  "Dentro de Luanco conviene comprobar la dirección concreta antes que dar por buena la etiqueta del municipio. Distancia al centro, pendiente, aparcamiento, ascensor y recorrido real hasta los servicios pueden cambiar bastante la comodidad diaria.",
  "En las viviendas próximas al mar importan además orientación, viento, aislamiento, humedad, ventanas y estado exterior. Las vistas o una terraza pueden aportar valor, pero no compensan por sí solas un acceso incómodo o un edificio mal preparado para vivir todo el año.",
] as const;

const CASA_PRECIO_INTRO =
  "Gozón — referencia municipal: 2.379 €/m² · mayo de 2026";

const CASA_BANDAS_NOTA = [
  "Las cifras utilizan aproximadamente 65 m² para dos dormitorios y 90 m² para tres. Las bandas A y B expresan cercanía a la costa; no garantizan centro de Luanco, vistas, comodidad a pie ni el precio exacto de una vivienda.",
] as const;

const CASA_ADVERTENCIA_MICROZONA = [
  "Si el objetivo es aprovechar la concentración propia de la villa, conviene salir del portal y hacer el recorrido real hasta compra, farmacia, centro de salud, puerto y playa. Una vivienda puede estar en Gozón y cerca del Cantábrico, pero exigir coche para casi todo; otra, dentro de Luanco, puede permitir resolver buena parte de la mañana andando. El aparcamiento merece comprobarse también en verano.",
] as const;

const CASA_QUE_CONVIENE_REVISAR = [
  "Ascensor y barreras, orientación, luz, aislamiento, humedad, ventanas, estado del edificio, terraza, aparcamiento y recorrido real hasta servicios y mar. Si las vistas influyen en el precio, conviene comprobar desde qué habitaciones existen.",
] as const;

const CASA_MERCADO_REVENTA = [
  "La referencia de mayo de 2026 no permite anticipar cómo evolucionará el precio. En una futura venta pueden ayudar características que mantienen la vivienda cómoda para perfiles distintos: ascensor, pocas barreras, buen aislamiento, luz, acceso sencillo y aparcamiento razonable.",
] as const;

const CASA_LEYENDA_COMPACTA =
  "A: ≤5 min de la costa · B: 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Estimaciones comparativas; conviene contrastarlas con la oferta del momento.";

const CASA_FILA_PRECIOS = {
  municipio: "Luanco (Gozón)",
  a2: "201.026 €",
  a3: "278.343 €",
  b2: "162.367 €",
  b3: "224.816 €",
  m2: "2.379 €/m²",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Puede encajar si se busca una villa pequeña donde el mar y una parte importante de la vida diaria estén realmente mezclados.",
  "En Luanco no hace falta salir del pueblo para encontrar centro de salud con atención continuada, farmacias, biblioteca o servicios sociales. Tampoco hace falta salir para llegar al puerto o a la playa urbana.",
  "La relación con el mar tiene además más capas que el baño. Está el puerto actual, la historia pesquera, los restos de construcción naval en Aramar y un Museo Marítimo que explica pesca, navegación, carpintería de ribera y naturaleza marina.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Puede encajar peor si se quiere disponer de hospital dentro de la propia localidad. Luanco tiene atención primaria y continuada, pero para hospital hay que conducir hacia Gijón o Avilés.",
  "Tampoco debe confundirse la villa con todo Gozón. Las otras playas, el paisaje rural y las viviendas más dispersas del concejo pueden ampliar mucho las posibilidades de costa y naturaleza, pero ya no conservan necesariamente la facilidad de hacer a pie la vida descrita aquí.",
  "El verano añade más visitantes. Aparcamiento y movimiento alrededor del centro y de las playas deben comprobarse en ese momento, no deducirse de una visita tranquila fuera de temporada.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Desde una vivienda candidata, hacer a pie una compra cotidiana, pasar por una farmacia y el centro de salud y continuar hacia el puerto y la playa. Recorrer después el frente marítimo hasta la iglesia de Santa María. Si interesa caminar más, subir a la senda costera y avanzar un tramo hacia Bañugues. Probar también el trayecto en coche hacia uno de los hospitales próximos y hacia el aeropuerto. Repetir la visita en verano si el aparcamiento o la tranquilidad de la calle son importantes.",
] as const;

const FOTO_COMO_CASCO = {
  src: "/fotos/asturias-centro/luanco-casco.jpg",
  pie: "Casco de piedra de Luanco",
} as const;

const FOTO_COMO_PUERTO = {
  src: "/fotos/asturias-centro/luanco-puerto.jpg",
  pie: "Puerto de Luanco",
} as const;

const FOTO_HISTORIA_MUSEO = {
  src: "/fotos/asturias-centro/luanco-museo.jpg",
  pie: "Museo Marítimo de Luanco",
} as const;

const FOTO_MAR_PENAS = {
  src: "/fotos/asturias-centro/luanco-penas.jpg",
  pie: "Cabo Peñas, cerca de Luanco",
} as const;

const FOTO_MAR_PLAYA = {
  src: "/fotos/asturias-centro/luanco-playa.jpg",
  pie: "Playa de La Ribera, Luanco",
} as const;

const CREDITO_FOTOS =
  "Fotos: Wikimedia Commons (licencias indicadas en los archivos de origen).";

function FilaCasaNuevo2({
  etiqueta,
  cuerpo,
}: {
  etiqueta: string;
  cuerpo: string | readonly string[];
}) {
  const paragrafos = typeof cuerpo === "string" ? [cuerpo] : cuerpo;
  return (
    <div className="border-b border-[var(--linea)] py-3 last:border-b-0">
      <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--tinta-suave)]">
        {etiqueta}
      </p>
      {paragrafos.map((p) => (
        <p key={p.slice(0, 48)} className="mt-1.5 text-[15px] leading-relaxed text-[var(--tinta)]">
          {p}
        </p>
      ))}
    </div>
  );
}

export default function Nuevo2LuancoGozonPage() {
  const ficha = municipioPorSlug("luanco-gozon");
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
        titulo="Luanco (Gozón)"
      />

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
        {COMO_SE_VIVE_NUEVO2.map((p) => (
          <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_COMO_CASCO.src} pie={FOTO_COMO_CASCO.pie} />
        <Foto src={FOTO_COMO_PUERTO.src} pie={FOTO_COMO_PUERTO.pie} />
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
        <Foto src={FOTO_HISTORIA_MUSEO.src} pie={FOTO_HISTORIA_MUSEO.pie} />
        {DE_DONDE_VIENE_NUEVO2.slice(4).map((p) => (
          <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Mar, río y camino" varianteTarjetaV1>
        {MAR_RIO_CAMINO_NUEVO2.slice(0, 3).map((p) => (
          <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_MAR_PLAYA.src} pie={FOTO_MAR_PLAYA.pie} />
        <Foto src={FOTO_MAR_PENAS.src} pie={FOTO_MAR_PENAS.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(3).map((p) => (
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
          {CASA_BANDAS_NOTA.map((p) => (
            <p key={p.slice(0, 48)} className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--tinta)]">
              {p}
            </p>
          ))}
        </div>

        <EnlaceIdealista ambito="municipio" slug={ficha.slug} nombre={ficha.municipio} />

        <FilaCasaNuevo2 etiqueta="Advertencia de microzona" cuerpo={CASA_ADVERTENCIA_MICROZONA} />
        <FilaCasaNuevo2 etiqueta="Qué conviene revisar" cuerpo={CASA_QUE_CONVIENE_REVISAR} />
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
