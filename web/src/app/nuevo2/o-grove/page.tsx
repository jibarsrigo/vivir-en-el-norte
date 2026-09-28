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
 * NUEVO2 — O Grove (Pontevedra e Sanxenxo).
 * Texto: Lote_Pontevedra_e_Sanxenxo_4_CERTIFICADOS_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "O Grove ocupa una península unida al continente por el istmo de A Lanzada. Esa geografía condiciona casi todo: el mar rodea el municipio, pero toda salida por carretera pasa por el mismo corredor.",
  "La villa de O Grove concentra puerto, lonja, mercado, comercio, centro de salud y buena parte de la vida anual. A Toxa queda unida por puente y tiene una identidad termal y hotelera. San Vicente do Mar y Pedras Negras miran a la costa occidental, con casas, pinares, calas y una relación mucho más directa con el Atlántico.",
  "La principal diferencia residencial está entre vivir en la villa y vivir en la costa exterior. La villa ofrece autonomía cotidiana. San Vicente y otras zonas de costa ofrecen mar y tranquilidad, pero introducen más coche.",
  "O Grove no debe imaginarse como A Toxa ni como una sucesión de playas. Su centro sigue siendo una villa marinera que trabaja con la ría de Arousa.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "La villa funciona todo el año. Hay centro de salud, farmacias, supermercados, mercado, colegios, biblioteca, restauración y puerto.",
  "El mar sigue siendo trabajo visible. Lonja, embarcaciones, bateas y marisqueo forman parte del paisaje cotidiano. En invierno el municipio pierde buena parte del volumen turístico, pero no pierde su base económica ni vecinal.",
  "Desde una vivienda céntrica se puede hacer a pie una parte importante de la semana. Mercado, farmacia, compra y puerto pueden quedar dentro de un radio pequeño.",
  "San Vicente do Mar ofrece otra vida. Allí la costa, las calas y la pasarela de Pedras Negras pueden quedar muy cerca, pero la compra amplia, el centro de salud y muchos servicios exigen coche.",
  "A Toxa vuelve a cambiar la lógica. Balneario, hoteles, golf y paseo bajo pinos crean un entorno muy distinto de la villa y de San Vicente. No es una síntesis del municipio.",
  "La Festa do Marisco transforma O Grove en octubre, no solo en pleno verano. Durante esos días el puerto y el centro reciben mucha más gente y aparcar se complica. El Carmen introduce otro momento de actividad marinera.",
  "El Hospital do Salnés es la referencia práctica, aproximadamente a 30 minutos. Para servicios hospitalarios de otra escala hay que ampliar el desplazamiento hacia Pontevedra. Vigo y Santiago quedan aproximadamente a una hora como referencias aeroportuarias.",
  "El istmo condiciona todos los desplazamientos por carretera hacia el continente. En temporada alta un trayecto sencillo sobre el mapa puede alargarse, de modo que hospital, aeropuerto y compras fuera del municipio deben valorarse también con tráfico real.",
] as const;

const CLIMA_NUEVO2 = [
  "O Grove tiene un verano fresco, con una media cercana a 19,5 °C, y un invierno templado en temperatura, alrededor de 10 °C.",
  "Frente a Mallorca, el cambio principal está en la lluvia, la humedad y el viento. El municipio es relativamente favorable dentro de la costa gallega, pero sigue muy lejos de un clima mediterráneo seco.",
  "La exposición cambia bastante entre la villa y la costa occidental. San Vicente, Con Negro y el entorno abierto al Atlántico reciben más viento y salitre. La villa y las playas orientadas a la ría de Arousa quedan más protegidas.",
  "En una casa entre pinos la humedad del terreno y la sombra pueden importar tanto como el viento. Ventilación, cubierta y drenaje deben revisarse con especial cuidado.",
  "El verano reduce mucho el problema del calor persistente de Mallorca. Las noches suelen ser más frescas y la playa puede utilizarse durante más horas del día, aunque el agua también es más fría.",
] as const;

const VIVIR_NUEVO2 = [
  "O Grove ofrece una relación con el mar mucho más variada de lo que su tamaño sugiere.",
  "En la villa, el mar significa puerto, lonja, paseo y ría. En San Vicente significa calas, costa abierta y pasarela junto a las rocas. En A Toxa significa paisaje termal y hotelero.",
  "La villa permite una rutina bastante autónoma. San Vicente aumenta el coche. Esa diferencia es una de las más importantes del municipio y debe pesar más que una vista desde el anuncio.",
  "El istmo concentra las salidas. Para hospital, compras grandes, aeropuerto o cualquier desplazamiento hacia el continente hay que atravesarlo. En agosto y durante acontecimientos multitudinarios esa condición se hace muy visible.",
  "El marisco no es únicamente una marca turística. La actividad de lonja, marisqueo y bateas continúa fuera de temporada y ayuda a mantener una identidad anual.",
  "Frente a Mallorca, O Grove puede ofrecer una vida exterior muy ligada al mar sin el calor mediterráneo, pero exige aceptar una movilidad más limitada y un invierno húmedo.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "O Grove vivió durante siglos de pesca, marisqueo y aprovechamiento de la ría de Arousa.",
  "Las bateas son una de las huellas contemporáneas más visibles. Estas plataformas flotantes sostienen cuerdas donde se cultiva mejillón y forman parte del paisaje productivo de la ría.",
  "La industria de salazón fue otra pieza importante. En la costa se conservan restos vinculados a esa actividad y rutas como Adro Vello permiten conectar patrimonio, pequeñas calas y antiguos espacios productivos.",
  "A Toxa tomó otro camino. A finales del siglo XIX sus aguas y lodos termales impulsaron el desarrollo del balneario y de una economía turística distinta de la actividad marinera de la villa. El puente construido a comienzos del siglo XX consolidó esa conexión.",
  "La capela de San Caralampio, cubierta exteriormente por conchas de vieira, se convirtió en una de las imágenes más reconocibles de esa isla.",
  "La Festa do Marisco, creada en 1963, transformó en celebración pública una economía que ya existía. Por eso octubre puede ser uno de los momentos más intensos del año incluso después del verano.",
  "La geografía insular antigua también dejó huella en la identidad. O Grove estuvo históricamente separado del continente hasta que los depósitos de arena formaron el istmo de A Lanzada.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "O Grove tiene dos costas con comportamientos distintos.",
  "Hacia la ría de Arousa aparecen playas más protegidas y zonas vinculadas al marisqueo. Raeiros, As Pipas y otros arenales ofrecen una relación más tranquila con el agua.",
  "La costa occidental está más abierta al Atlántico. Area da Cruz, Area Grande, Con Negro y las pequeñas calas de San Vicente reciben más viento y oleaje.",
  "Pedras Negras ofrece uno de los recorridos más fáciles de incorporar a la vida diaria si se reside en San Vicente. La pasarela de madera bordea la costa entre pinos, roca y pequeñas calas. Desde la villa, en cambio, exige desplazamiento previo y funciona como salida.",
  "El mirador de A Siradella permite leer la geografía completa: ría de Arousa, A Toxa, ensenada de O Vao, istmo de A Lanzada y Atlántico. Es una salida corta en coche desde la villa, no un paseo urbano.",
  "La ruta de Adro Vello es lineal y ronda los 3,1 km. Recorre un tramo de costa con pequeñas calas y patrimonio arqueológico, de modo que permite combinar paseo y conocimiento del litoral sin dedicar el día entero.",
  "La ruta del Padre Sarmiento alrededor de la península pertenece a otra escala: su etapa local es larga y exige varias horas. No debe confundirse con el paseo cotidiano.",
  "A Toxa ofrece un recorrido mucho más sencillo bajo pinos y junto a la ría.",
] as const;

const CASA_NUEVO2 = [
  "O Grove exige decidir primero entre villa, A Toxa y costa occidental.",
  "La villa ofrece pisos y viviendas próximas a mercado, puerto y servicios. Es la opción más sencilla para reducir coche.",
  "San Vicente y Pedras Negras concentran casas, chalés y urbanizaciones donde mar y paisaje pueden pesar mucho más. Allí conviene comprobar cuánto depende realmente la semana del coche y cómo funciona la casa durante el invierno.",
  "A Toxa tiene un mercado residencial muy distinto del de la villa y de San Vicente. Sus precios y tipologías no sirven para describir la vivienda corriente del municipio.",
  "En casas entre pinos hay que mirar humedad, ventilación, cubierta y drenaje. Cerca del mar se añaden salitre, viento y mantenimiento de elementos exteriores.",
  "La referencia municipal vigente es 2.500 €/m².",
] as const;

const CASA_ADVERTENCIA_MICROZONA = [
  "Villa de O Grove no equivale a San Vicente/Pedras Negras ni a A Toxa.",
  "La villa maximiza servicios y vida anual. San Vicente maximiza costa y paseo a cambio de coche. A Toxa tiene una lógica hotelera, termal y residencial muy específica.",
] as const;

const CASA_QUE_CONVIENE_REVISAR = [
  "Hacer a pie desde la vivienda los recorridos a mercado, farmacia, centro de salud y puerto.",
  "Si la casa está en San Vicente, conducir hasta la villa en un horario normal y comprobar cuánto se repite ese trayecto durante la semana.",
  "Probar el istmo en temporada alta.",
  "Visitar una casa entre pinos después de lluvia y revisar humedad, drenaje, cubierta y zonas que permanecen en sombra.",
  "En primera línea, comprobar carpinterías, fachada y corrosión por salitre.",
  "Si la pasarela de Pedras Negras justifica la compra, hacer el recorrido real desde la vivienda y comprobar si sería cotidiano o una salida.",
] as const;

const CASA_MERCADO_REVENTA = [
  "O Grove mezcla demanda residencial local con segunda residencia y turismo.",
  "En la villa ayudan la proximidad a servicios, accesibilidad, estado del edificio y aparcamiento.",
  "En San Vicente la venta depende más de costa, parcela, vistas, acceso y facilidad de mantenimiento. Una casa atractiva en verano puede perder público si resulta húmeda, oscura o demasiado dependiente del coche durante el invierno.",
  "A Toxa pertenece a un segmento distinto y no debe generalizarse al municipio.",
  "La facilidad para entrar y salir de la península, especialmente en temporada, también influye en cómo se percibe una vivienda para uso habitual.",
] as const;

const ENCAJA_SI_NUEVO2 = [
  "Encaja si se busca una villa marinera con actividad anual y el mar como parte visible de la vida cotidiana.",
  "También si se quiere elegir entre una rutina caminable en la villa y una vida mucho más costera en San Vicente o Pedras Negras.",
  "Puede encajar especialmente si marisqueo, lonja, calas y paseos junto al Atlántico pesan más que tener hospital o aeropuerto cerca.",
  "Y encaja si se acepta que agosto y la Festa do Marisco cambian el tráfico y la ocupación de un municipio que depende de un único istmo para salir por carretera.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Encaja peor si hospital y aeropuerto deben quedar a pocos minutos.",
  "También si se quiere vivir en la costa exterior sin utilizar el coche con frecuencia.",
  "Puede resultar menos adecuado si la humedad y el mantenimiento de una casa entre pinos son cargas poco deseables.",
  "Y encaja peor si se confunde la experiencia de A Toxa con la vida diaria de la villa o de San Vicente.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Pasar una mañana normal en la villa haciendo compra, farmacia, mercado y puerto a pie.",
  "Dormir una noche en San Vicente si se está considerando una vivienda allí y hacer al día siguiente los recados habituales.",
  "Recorrer Pedras Negras y visitar A Siradella para comprobar qué parte de esa costa se utilizaría realmente.",
  "Conducir por el istmo en verano y durante un periodo de mucha actividad.",
  "Hacer el trayecto real al Hospital do Salnés.",
  "Y visitar la vivienda después de lluvia para comprobar humedad, drenaje, salitre y comportamiento de los espacios exteriores.",
] as const;

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m².";

const CASA_FILA_PRECIOS = {
  municipio: "O Grove",
  a2: "211.250 €",
  a3: "292.500 €",
  b2: "170.625 €",
  b3: "236.250 €",
  m2: "2.500 €/m²",
} as const;

const FOTO_COMO_1 = {
  src: "/fotos/pontevedra-e-sanxenxo/grove-porto.jpg",
  pie: "Puerto y bateas: el mar como trabajo cotidiano",
} as const;

const FOTO_HIST_1 = {
  src: "/fotos/pontevedra-e-sanxenxo/grove-toxa.jpg",
  pie: "A Toxa, isla termal unida por puente a la villa",
} as const;

const FOTO_HIST_2 = {
  src: "/fotos/pontevedra-e-sanxenxo/grove-capela.jpg",
  pie: "Capela de San Caralampio, cubierta de conchas de vieira",
} as const;

const FOTO_MAR_1 = {
  src: "/fotos/pontevedra-e-sanxenxo/grove-siradella.jpg",
  pie: "Monte Siradella, mirador sobre la península y A Lanzada",
} as const;

const FOTO_MAR_2 = {
  src: "/fotos/pontevedra-e-sanxenxo/grove-con-negro.jpg",
  pie: "Con Negro, costa de granito abierta al Atlántico",
} as const;

const CREDITO_FOTOS = "Wikimedia Commons (licencias indicadas en los archivos de origen).";


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

export default function Nuevo2OGrovePage() {
  const ficha = municipioPorSlug("o-grove");
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
            fragmentos={["19,5 °C", "10 °C"]}
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
          <ConNegritas texto={CASA_NUEVO2[5]} fragmentos={["2.500 €/m²"]} />
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
