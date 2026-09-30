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
 * NUEVO2 — Redondela (Vigo e ría).
 * Texto: Lote_Vigo_e_Ria_4_CERTIFICADOS_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Vigo e ría reúne la gran ciudad de Vigo y varios municipios que se organizan alrededor del fondo de la ría y de la ensenada de San Simón. Vigo concentra hospitales, empleo, universidad, aeropuerto, puerto y servicios urbanos; Redondela combina una villa ferroviaria con Cesantes y Chapela; Soutomaior se reparte entre Arcade y un interior más rural; Vilaboa ocupa la orilla de la ensenada y las laderas que conectan la ría con Pontevedra. En pocos kilómetros se pasa de una vida plenamente urbana a parroquias donde el coche vuelve a ser imprescindible.",
  "Redondela ocupa el fondo oriental de la ría de Vigo. El casco concentra mercado, comercio, colegios, centro de salud y estación; Cesantes abre el municipio hacia la ensenada de San Simón y su playa; Chapela se orienta mucho más hacia Vigo y Rande.",
  "La estación y las carreteras facilitan utilizar Vigo y Pontevedra, pero también introducen ruido e infraestructuras. Vivir en el casco, en Cesantes o en Chapela significa rutinas claramente distintas.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "En la villa se puede resolver una parte importante de la semana andando. Mercado, supermercados, farmacia, cafeterías, colegios, biblioteca y estación quedan relativamente cerca unos de otros.",
  "La estación es especialmente útil porque conecta con Vigo y Pontevedra. Para quien trabaje o haga gestiones en cualquiera de las dos ciudades, el tren puede reducir bastante el uso del coche si la vivienda está cerca.",
  "Cesantes cambia la rutina. Allí aparecen casas, pequeños edificios y una relación mucho más directa con la ensenada. La playa puede quedar a pie desde algunas viviendas, pero esa ventaja no se puede trasladar al municipio entero.",
  "Chapela es distinta tanto de la villa como de Cesantes. Su relación cotidiana con Vigo es mucho más directa, pero también tiene más densidad, tráfico e infraestructuras.",
  "Reboreda, Ventosela y otras parroquias permiten buscar más espacio o casa, pero la semana se dispersa. Una vivienda puede estar a pocos kilómetros del casco y aun así requerir coche para casi todos los recados.",
  "Redondela tiene atención primaria local. Para atención hospitalaria hay que desplazarse al área de Vigo; el trayecto orientativo ronda los veinte minutos desde buena parte del municipio.",
  "El aeropuerto de Vigo queda alrededor de diez minutos en coche desde la referencia utilizada para el municipio. Santiago está bastante más lejos, pero puede ofrecer una programación más estable hacia Palma según temporada.",
  "El comercio, el tren y los colegios mantienen actividad durante todo el año. El Camino Portugués atraviesa la villa y algunas fiestas ocupan el centro durante fechas concretas, pero Redondela no depende del verano para mantener su vida cotidiana.",
  "El ruido debe comprobarse vivienda por vivienda. Una calle puede recibir tren, autopista o tráfico de carretera y otra próxima no. El aislamiento acústico puede importar tanto como la superficie o una terraza.",
] as const;

const CLIMA_NUEVO2 = [
  "Redondela comparte el clima húmedo del fondo de la ría. La media de verano ronda los 20,5 °C y la de invierno, los 9,5 °C.",
  "La diferencia con Mallorca está principalmente en la lluvia y en la continuidad de la humedad. Otoño e invierno pueden mantener suelo, paredes y jardines mojados durante varios días.",
  "La ensenada de San Simón es más protegida que una costa atlántica abierta. Cesantes tiene menos exposición al oleaje que Samil o A Lanzada y su agua puede resultar algo más calmada.",
  "En vivienda, la orientación y el drenaje pesan especialmente en casas y fincas. Una zona muy verde puede ser agradable en verano y mantener poca luz o suelo húmedo en invierno.",
  "El verano es mucho más suave que el mallorquín, pero también tiene menos días de sol asegurado y más cambios de tiempo.",
] as const;

const VIVIR_NUEVO2 = [
  "Redondela permite vivir en una escala pequeña sin quedar desconectado de dos ciudades.",
  "En el casco se puede ir andando a la compra, la farmacia, la estación y buena parte de los servicios. Es la zona donde resulta más fácil reducir el uso diario del coche.",
  "En Cesantes, la playa y la ría entran mucho más en la vida normal, pero aumenta la probabilidad de utilizar coche para servicios.",
  "En Chapela, Vigo puede formar parte de los desplazamientos diarios con mucha facilidad, aunque el entorno sea más denso y esté más atravesado por infraestructuras.",
  "El ruido forma parte de la elección de vivienda. Tren, AP-9 y carreteras no afectan por igual a todas las calles, y una visita de fin de semana puede ocultar lo que se oye una mañana laborable.",
  "Fuera de temporada la villa sigue funcionando. No depende de una segunda residencia masiva para mantener comercio, colegios o estación.",
  "Frente a Mallorca, también cambia la forma de usar el exterior: menos calor sostenido, más días en los que la lluvia condiciona la tarde y mucha más importancia de tener una vivienda seca y bien ventilada.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Los dos grandes viaductos ferroviarios explican por qué el tren forma parte de la imagen y de la vida de Redondela desde el siglo XIX.",
  "El antiguo viaducto a Madrid, denominado hoy viaducto de Ourense en la información municipal, fue inaugurado en 1876. Su estructura metálica y de piedra atraviesa el valle a gran altura y ya no soporta tráfico ferroviario.",
  "El viaducto de la línea Vigo-Pontevedra fue inaugurado en 1884 y sigue integrado en la red ferroviaria. La estación y el tren continúan haciendo útil hoy aquella transformación del siglo XIX.",
  "La isla de San Simón, visible desde Cesantes, tuvo usos muy distintos a lo largo del tiempo: fue monasterio, lazareto y, durante la Guerra Civil y la posguerra, prisión. Hoy se visita mediante actividades y rutas autorizadas.",
  "El estrecho de Rande conecta el municipio con la batalla naval de 1702. El centro de interpretación de Meirande permite entender aquel episodio y el patrimonio de la ría desde el propio lugar.",
  "Las variantes del Camino Portugués confluyen en Redondela. Los peregrinos atraviesan las mismas calles que utilizan a diario vecinos, comercios y servicios del casco.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "Cesantes es la playa más clara para el baño dentro de Redondela.",
  "Es una playa de ensenada, con marea muy visible y agua más calmada que la costa exterior. Desde algunas viviendas de Cesantes se puede llegar andando; desde el casco hay que desplazarse hasta la parroquia.",
  "La bajamar cambia mucho el paisaje: aparecen bancos de arena, fangos y zonas de marisqueo, de modo que el aspecto y la distancia hasta el agua varían bastante a lo largo del día.",
  "En la villa, el río Alvedosa permite recorridos locales y conecta el casco con un paisaje más verde sin exigir una salida larga.",
  "El Camino Portugués es otra posibilidad cotidiana: atraviesa la villa y continúa hacia Cesantes y O Viso. Se puede utilizar un tramo sin plantearlo como una etapa completa.",
  "Monte Penide requiere desplazarse desde la villa. Allí hay mámoas —túmulos funerarios prehistóricos—, petroglifos y vistas sobre la ría, por lo que funciona como salida de monte y patrimonio, no como paseo cotidiano del casco.",
  "La Senda del Agua también recorre el entorno alto entre Vigo y Redondela. Su trazado es prácticamente llano y permite recorridos largos con vistas a Rande, aunque exige llegar hasta sus accesos.",
  "Las visitas a San Simón se realizan en programas y horarios concretos. Son una salida cultural, no transporte habitual ni parte de la rutina diaria.",
] as const;

const CASA_NUEVO2 = [
  "El precio medio de Redondela es bastante inferior al de Vigo, pero casco, Cesantes y Chapela ofrecen viviendas y rutinas muy diferentes.",
  "En el casco predominan pisos de distintas décadas. Vivir cerca del mercado y de la estación puede reducir mucho el uso del coche.",
  "Cesantes, Reboreda y Ventosela ofrecen más casas y pequeños edificios entre fincas. Allí importan acceso, humedad, orientación y distancia real hasta los servicios.",
  "Chapela tiene otra lógica: la proximidad a Vigo puede ser muy útil, pero también aparecen más tráfico, densidad e infraestructuras.",
  "El ruido debe estudiarse como característica física de la vivienda. Tren, AP-9 y carreteras pueden escucharse de manera muy distinta incluso dentro de la misma parroquia.",
  "El precio medio municipal es 1.499 €/m².",
] as const;

const CASA_ADVERTENCIA_MICROZONA = [
  "Redondela villa, Cesantes y Chapela ofrecen rutinas muy diferentes.",
  "En la villa es más fácil vivir cerca de servicios y estación. Cesantes acerca la playa y la ensenada. Chapela facilita los desplazamientos hacia Vigo. En las parroquias interiores suele haber más espacio, pero también más dependencia del coche.",
] as const;

const CASA_QUE_CONVIENE_REVISAR = [
  "Abrir las ventanas en hora punta y esperar al paso de trenes si existen vías próximas.",
  "Hacer a pie desde el portal el recorrido a mercado, farmacia y estación si la vida sin coche es importante.",
  "En Cesantes, recorrer a pie el trayecto hasta la playa y comprobar cómo cambia con la pendiente y la carretera.",
  "En una casa, revisar drenaje, cubierta, saneamiento, muros y sol de invierno.",
  "Hacer el trayecto real hasta Vigo o Pontevedra en el horario que se utilizaría.",
  "Comprobar estacionamiento si la vivienda está en una calle estrecha del casco o en una parroquia con accesos limitados.",
] as const;

const CASA_MERCADO_REVENTA = [
  "Además de la demanda local, Redondela puede interesar a quienes trabajan o utilizan con frecuencia servicios en Vigo y Pontevedra.",
  "En el casco, la proximidad a estación y servicios amplía el público posible.",
  "En Cesantes, una casa con buen acceso, aparcamiento y relación clara con la playa puede diferenciarse, siempre que humedad y ruido estén controlados.",
  "En Chapela pesa especialmente la conexión con Vigo y la calidad concreta de la calle.",
  "Dos viviendas muy próximas pueden tener un atractivo muy distinto si una recibe claramente el ruido del tren, la autopista o una carretera y la otra queda protegida.",
] as const;

const ENCAJA_SI_NUEVO2 = [
  "Encaja si se quiere una villa con mercado, estación y vida anual sin pagar los precios de Vigo.",
  "También si se valora tener Vigo y Pontevedra accesibles en tren o carretera y mantener una escala residencial más pequeña.",
  "Puede encajar especialmente si Cesantes permite incorporar la ría y el baño a la semana desde la vivienda elegida.",
  "Y encaja si se acepta revisar calle por calle el impacto de tren, autopista y carreteras.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Encaja peor si el silencio absoluto es un requisito difícil de negociar.",
  "También si se espera que toda Redondela tenga playa a pie: esa ventaja pertenece sobre todo a Cesantes y a direcciones concretas.",
  "Puede resultar menos adecuada si se quiere una experiencia uniforme entre casco, Chapela y parroquias costeras.",
  "Y encaja peor si se compra una casa sin comprobar humedad, acceso y ruido en una mañana laborable.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Pasar una mañana en el casco y utilizar mercado y estación.",
  "Visitar Cesantes con marea alta y baja para entender el tipo de playa y paisaje.",
  "Escuchar la vivienda con ventanas abiertas cuando haya tráfico y paso de trenes.",
  "Hacer un trayecto real en tren hacia Vigo o Pontevedra.",
  "Conducir al hospital práctico del área de Vigo.",
  "Y visitar la vivienda después de lluvia si se trata de una casa o bajo.",
] as const;

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m².";

const CASA_FILA_PRECIOS = {
  municipio: "Redondela",
  a2: "126.666 €",
  a3: "175.383 €",
  b2: "102.307 €",
  b3: "141.656 €",
  m2: "1.499 €/m²",
} as const;

const FOTO_COMO_1 = {
  src: "/fotos/vigo-e-ria/redondela-cesantes.jpg",
  pie: "Cesantes: playa de la ensenada, agua calmada",
} as const;

const FOTO_HIST_1 = {
  src: "/fotos/vigo-e-ria/redondela-viaduto.jpg",
  pie: "Antiguo viaducto a Madrid, hoy viaducto de Ourense: la vía elevada que define el perfil de Redondela",
} as const;

const FOTO_HIST_2 = {
  src: "/fotos/vigo-e-ria/redondela-san-simon.jpg",
  pie: "La isla de San Simón, antiguo monasterio, lazareto y prisión",
} as const;

const FOTO_MAR_1 = {
  src: "/fotos/vigo-e-ria/redondela-paseo.jpg",
  pie: "Paseo y arena de Cesantes con la marea de la ensenada",
} as const;

const FOTO_MAR_2 = {
  src: "/fotos/vigo-e-ria/redondela-penide.jpg",
  pie: "San Simón desde la orilla: el horizonte cercano de la ría",
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

export default function Nuevo2RedondelaPage() {
  const ficha = municipioPorSlug("redondela");
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
        {MAR_RIO_CAMINO_NUEVO2.slice(2, 5).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_MAR_2.src} pie={FOTO_MAR_2.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(5).map((p) => (
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
          <ConNegritas texto={CASA_NUEVO2[5]} fragmentos={["1.499 €/m²"]} />
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
