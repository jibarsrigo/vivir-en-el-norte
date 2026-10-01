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
 * NUEVO2 — Bergondo (Golfo Ártabro e Ferrol).
 * Eje: junto a Gandarío / orilla de ría vs parroquia tierra adentro.
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Golfo Ártabro e Ferrol reúne las rías y la costa alrededor de A Coruña: Oleiros al este de la ría do Burgo; Sada y Bergondo hacia Betanzos; Miño con la Praia Grande; Ares y Redes; y Ferrol al norte. El hospital y el aeropuerto de Alvedro quedan cerca. El cielo suele ser más gris y lluvioso que en las Rías Baixas.",
  "Bergondo es el municipio de parcela y ría a precio más bajo de esta zona: unos siete mil habitantes en parroquias residenciales junto a la ría de Betanzos. No es villa con casco como Sada ni urbanización ordenada como Oleiros: aquí mandan el jardín, el coche y la proximidad a A Coruña, Sada o Betanzos.",
  "Lo que más cambia la vida diaria es dónde queda la casa respecto a Gandarío —la playa larga de ría del municipio—. Cerca de la orilla se puede bajar a la playa con frecuencia, a cambio de un verano más lleno; tierra adentro ganan silencio y parcela, y casi cada bajada a la playa o al súper hace falta ir en coche.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Bergondo reúne unos siete mil habitantes en parroquias junto a la ría de Betanzos, y no pretende ser villa completa: no hay un centro de pueblo con súper, farmacia y bar juntos donde se resuelva casi toda la semana a pie. Quien llega de fuera descubre enseguida que hay que elegir. Junto a Gandarío —playa larga de ría, con más de un kilómetro de arena y agua que en verano suele moverse hacia 18–20 °C— se puede bajar a la playa andando desde muchas casas de la orilla, a cambio de veraneo y aparcamiento disputado. Tierra adentro —en parroquias como Guísamo o A Senra, donde abundan casas con jardín— el silencio y la parcela ganan, y hace falta sacarlo del garaje para la playa, la compra o muchas gestiones. En pocos minutos se pasa de una forma de vivir Bergondo a otra, y esa diferencia acaba importando más que la imagen uniforme del municipio en el mapa.",
  "Un martes de noviembre, cerca de la orilla, se puede bajar a Gandarío con holgura; para una compra sencilla hay que ir a Sada —villa con puerto a un trayecto corto— o a Betanzos —villa histórica a unos diez minutos—. La biblioteca está en A Senra y el centro de salud en Guísamo: no quedan juntos, así que no se puede hacer a pie el recorrido completo de la semana. Quien elige la orilla elige tener la ría cerca; lo que no elige es poder vivir sin salir del municipio para lo diario. Tierra adentro esa misma mañana es jardín húmedo y coche casi desde el primer recado.",
  "Sin coche, tanto junto a Gandarío como tierra adentro, la semana diaria se complica mucho: casi cada recado pide ir en coche. Desde buena parte del municipio, el CHUAC —hospital público grande de A Coruña— suele quedar a unos veinte minutos; Alvedro, el aeropuerto de A Coruña, alrededor de quince. Hay bus y acceso a la N-VI y a la AP-9, pero quien vive aquí suele necesitar el volante para súper, playa o gestiones. Sada y Betanzos cubren comercio y casco; A Coruña, hospital y ciudad. Bergondo, a cambio, ofrece parcela y ría cercana a un precio más bajo que Oleiros o Sada.",
  "Entre agosto y noviembre cambia sobre todo el ritmo junto a Gandarío y Pedrido —ensenada de ría junto al puente do Pedrido—. En verano el veraneo llena la orilla: toallas, coches en la cuneta, gente en el agua. Hacia el 25 de julio las fiestas de Santiago en Pedrido-Moruxo animan esa misma costa; a mediados de agosto, cerca, Betanzos celebra Os Caneiros —fiesta fluvial en el río Mandeo— con afluencia y cortes. Vivir en primera línea de Gandarío significa semanas más ruidosas. Tierra adentro ese contraste se nota menos. Meses después, en un martes húmedo, la misma ría vuelve a sentirse parroquia tranquila. No son dos Bergondos distintos: son dos ritmos que forman parte de vivir aquí todo el año.",
  "También por eso la elección entre la orilla de Gandarío y la parroquia tierra adentro cambia bastante la vida diaria. Junto a la playa se tiene la ría cerca a diario, a cambio de un verano más lleno y de seguir dependiendo del coche para comprar. Tierra adentro se reduce parte de esa intensidad y gana jardín, pero casi cada bajada al agua hace falta ir en coche. Esa diferencia de sitio acaba importando mucho más que la imagen uniforme del municipio vista en un mapa.",
] as const;

const CLIMA_NUEVO2 = [
  "Vivir en Bergondo tras Mallorca es aceptar menos luz y más humedad, sobre todo en casas con jardín. No hay estación propia; la referencia cercana es A Coruña: alrededor de 2.000 horas de sol al año y cerca de 1.050 mm de lluvia. Mallorca ronda 2.800 horas de sol. Al fondo de la ría la niebla se nota más que en la orilla abierta. También aquí llovizna en julio y agosto.",
  "En verano el contraste se nota aún más. Medias alrededor de 19 °C: no pasas el calor de Baleares. En Gandarío el agua de ría invita al baño aunque sigue fresca si vienes del Mediterráneo. Quien vive junto a la orilla lo nota al bajar a la arena; quien vive tierra adentro, al llegar en coche. Un frente gris de noviembre cuenta más que un sábado de sol en el pazo de Mariñán.",
] as const;

const VIVIR_NUEVO2 = [
  "Cambiar Mallorca por Bergondo no es solo cambiar de clima: se pasa a parroquias con parcela junto a la ría, no a una villa caminable como Sada ni a una ciudad como A Coruña. En Mallorca puede ser habitual pensar primero en kilómetros; aquí unos pocos minutos separan Gandarío de una casa tierra adentro —y esa elección modifica si la playa entra en la semana o si casi cada salida empieza en el garaje—.",
  "También cambia la relación entre coche, costa y servicios. Bergondo puede tener la ría muy presente, pero vivir aquí no equivale a tener el súper debajo de casa ni la playa a pie desde cualquier dirección. Para compra, salud o hospital hace falta sacarlo del garaje. A cambio, Alvedro queda a unos quince minutos y Santiago-Lavacolla, con más destinos, a unos cuarenta y cinco: la escala de parroquia no significa aislamiento. Se oye gallego en los núcleos y en Betanzos; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. Agosto llena Gandarío de toallas y movimiento; en noviembre la misma orilla y las parroquias interiores recuperan holgura. Para alguien acostumbrado a Mallorca, donde también existe presión estival, la diferencia está en la escala: el cambio se concentra en un arenal de ría y casas con jardín, no en una ciudad. Vivir aquí todo el año significa aceptar esas dos caras —el verano concurrido en la orilla y los meses húmedos de parcela— como partes de una misma vida, no elegir únicamente un sábado de sol en Gandarío.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "El pazo de Mariñán —casa solariega gallega de piedra con finca y jardines hacia la ría de Betanzos— es el emblema señorial del municipio. Hoy pertenece a la Diputación de A Coruña y se visita como paisaje cuidado: la imagen que mucha gente asocia con Bergondo cuando busca calma y verde, no un casco denso de villa.",
  "El monasterio de San Salvador de Bergondo añade piedra y oficio religioso en la parroquia del mismo nombre, lejos del veraneo de Gandarío. Junto a la orilla, la historia reciente es más de residencia y playa que de lonja: Gandarío y Pedrido organizan el ocio de ría; el puente do Pedrido marca el paso sobre el agua hacia el otro lado de la bahía.",
  "Tierra adentro —más lejos de Gandarío— la vida es de parroquia: Guísamo con el centro de salud, A Senra con la biblioteca, casas con jardín y carretera. No es otro municipio distinto: es el mismo Bergondo, pero sin la playa debajo de casa. Si se quiere un casco de piedra o la fiesta fluvial de Os Caneiros sin entrar en A Coruña, Betanzos —villa histórica a un trayecto corto— lo tiene a mano.",
  "Mariñán y Gandarío no cuentan el mismo Bergondo. Uno invita a jardín y calma; el otro, a arena de ría con verano lleno. La casa concreta decide cuál de los dos se lleva a diario.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar de casi todos los días aquí es ría —agua más quieta que en el Atlántico abierto—, no Doniños ni Riazor. Gandarío es el arenal principal del municipio: largo, de ría, con agua que en verano suele estar entre 18 y 20 °C. Quien vive cerca puede bajar entre semana; quien vive tierra adentro lo convierte en un destino corto en coche. Un martes de junio suele haber sitio para la toalla; un domingo de agosto la cuneta se llena y hace falta llegar pronto.",
  "Para una orilla más recogida, Pedrido —ensenada junto al puente do Pedrido— ofrece menos sensación de arenal infinito. O Regueiro completa salidas de costa en puntos concretos: no son un derecho peatonal desde cualquier casa del municipio. Se camina junto a la ría más que tender la toalla en un espacio interminable.",
  "Cuando no apetece pelear con el aparcamiento de agosto, el pazo de Mariñán sirve de tarde de jardín y vistas de ría. Betanzos aporta calles de piedra; Sada, paseo y puerto a un trayecto corto. A Coruña queda a unos quince o veinte minutos cuando hace falta ciudad, hospital o el contraste de una playa atlántica abierta.",
  "Todo esto explica mejor Bergondo que contar playas. Junto a Gandarío la ría manda en la semana; tierra adentro la orilla es salida elegida y el coche abre casi cada bajada —también hacia el súper—. No inventar una villa ni una playa andando desde cualquier dirección.",
] as const;

const CASA_NUEVO2 = [
  "En Bergondo la diferencia real está entre vivir junto a Gandarío o en una parroquia tierra adentro. Un anuncio que solo diga «Bergondo» puede ocultar si la casa da a la playa y al verano cargado, o a una parcela con más silencio y coche para casi todo.",
  "Lo habitual es casa con jardín y terreno; poca sensación de núcleo único. Junto a la orilla notarás humedad y gente de agosto; tierra adentro, cuántos minutos de verdad hay hasta Gandarío, el súper en Sada o Betanzos, y el centro de salud en Guísamo. La fibra es parcial: conviene comprobarla en la dirección exacta. Hay poca obra nueva.",
  "El precio medio de referencia ronda 1.484 €/m² —más bajo que Oleiros, A Coruña o Sada—. Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa; una casa con buena parcela suele costar más. El metro no describe igual una vivienda junto a Gandarío y otra hacia el interior.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra, la playa, y la salida hacia el CHUAC o Alvedro. En agosto, el aparcamiento junto a Gandarío; en noviembre, la luz, la niebla y la humedad del jardín. Bergondo premia elegir bien el lado; castiga comparar orilla y parroquia interior como si fueran el mismo producto.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "La orilla de Gandarío y la parroquia tierra adentro no son intercambiables. Una vivienda «en Bergondo» en el mapa puede significar playa a minutos con verano lleno, o parcela y coche para bajar a la orilla y para comprar. Comparar solo el precio inventa un Bergondo que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el súper que se usaría, el coche y Gandarío o Pedrido. También la luz, la orientación, el aislamiento, la ventilación y señales de humedad; junto a la orilla, la humedad de la ría; la fibra en esa dirección; y cómo se vive esa misma calle un domingo de agosto y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda residencial y de segunda residencia junto a la ría, pero lo que decide es el inmueble concreto. Un acceso sencillo, buen estado, luz y un sitio fácil de explicar —orilla usable o parcela con trayecto claro— amplían el abanico de compradores; una casa muy expuesta, difícil de mantener o mal situada respecto a la rutina elegida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Bergondo",
  a2: "125.398 €",
  a3: "173.628 €",
  b2: "101.283 €",
  b3: "140.238 €",
  m2: "1.484 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Bergondo encaja si atrae casa con jardín, calma y ría cercana a un precio más bajo que Oleiros o Sada, aceptando coche casi cada día y servicios repartidos, y aceptando que hay que elegir una forma concreta de vivir el municipio. Junto a Gandarío la playa entra en la rutina, a cambio de un verano más lleno; tierra adentro ganan parcela y silencio, a cambio de coche para bajar a la orilla y para comprar. Sada y Betanzos cubren comercio y casco; A Coruña, hospital y ciudad. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol y más lluvia y humedad.",
  "También encaja si el baño de casi todos los días puede ser de ría —Gandarío o Pedrido— y se tolera el verano activo en la orilla eligiendo bien la calle, no la primera fila más ruidosa del arenal.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Bergondo encaja peor si se busca villa compacta con súper y paseo a pie, como Sada, o urbanización ordenada tipo Oleiros: aquí no hay un centro peatonal único y los servicios están repartidos entre parroquias, Sada y Betanzos. Tampoco si se necesita playa asegurada andando desde cualquier dirección, o el hospital a unos diez minutos: el CHUAC ronda los veinte.",
  "Y si el cielo debe parecerse al de Mallorca, o si se decide solo tras un sábado de sol en Gandarío sin probar un noviembre ni la ruta real a farmacia y súper, suele llevar a sorpresa.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda junto a Gandarío y otra tierra adentro —por ejemplo hacia Guísamo o A Senra—. Desde cada casa: una compra sencilla, el trayecto a la playa que se usaría, y la salida hacia el CHUAC y Alvedro en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en verano en Gandarío (aparcamiento, ruido, gente) y un día cubierto de noviembre (luz, humedad, jardín). Y comprobar la fibra y el estado de la vivienda en la dirección exacta.",
] as const;

const FOTO_COMO_GANDARIO = {
  src: "/fotos/golfo-artabro-e-ferrol/bergondo-gandario.jpg",
  pie: "Gandarío: playa larga de ría en Bergondo",
} as const;

const FOTO_COMO_IDENTIDAD = {
  src: "/fotos/golfo-artabro-e-ferrol/bergondo-identidad.jpg",
  pie: "Casas junto a la ría de Betanzos y el puente do Pedrido",
} as const;

const FOTO_HISTORIA_PAZO = {
  src: "/fotos/golfo-artabro-e-ferrol/bergondo-pazo.jpg",
  pie: "Jardines y piedra del pazo de Mariñán",
} as const;

const FOTO_HISTORIA_MONASTERIO = {
  src: "/fotos/golfo-artabro-e-ferrol/bergondo-monasterio.jpg",
  pie: "Monasterio de San Salvador de Bergondo",
} as const;

const FOTO_MAR_PEDRIDO = {
  src: "/fotos/golfo-artabro-e-ferrol/bergondo-pedrido.jpg",
  pie: "Pedrido: orilla de ría junto al puente",
} as const;

const FOTO_MAR_RIA = {
  src: "/fotos/golfo-artabro-e-ferrol/bergondo-ria.jpg",
  pie: "Ría de Betanzos desde Bergondo",
} as const;

const CREDITO_FOTOS =
  "Fotos: Wikimedia Commons (licencias indicadas en los archivos de origen).";

function FilaCasaNuevo2({ etiqueta, cuerpo }: { etiqueta: string; cuerpo: string }) {
  return (
    <div className="border-b border-[var(--linea)] px-4 py-3 last:border-b-0">
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

export default function Nuevo2BergondoPage() {
  const ficha = municipioPorSlug("bergondo");
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
        {COMO_SE_VIVE_NUEVO2.slice(0, 3).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_COMO_GANDARIO.src} pie={FOTO_COMO_GANDARIO.pie} />
        <Foto src={FOTO_COMO_IDENTIDAD.src} pie={FOTO_COMO_IDENTIDAD.pie} />
        {COMO_SE_VIVE_NUEVO2.slice(3).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
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
        {DE_DONDE_VIENE_NUEVO2.slice(0, 2).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_HISTORIA_PAZO.src} pie={FOTO_HISTORIA_PAZO.pie} />
        <Foto src={FOTO_HISTORIA_MONASTERIO.src} pie={FOTO_HISTORIA_MONASTERIO.pie} />
        {DE_DONDE_VIENE_NUEVO2.slice(2).map((p) => (
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
        <Foto src={FOTO_MAR_PEDRIDO.src} pie={FOTO_MAR_PEDRIDO.pie} />
        <Foto src={FOTO_MAR_RIA.src} pie={FOTO_MAR_RIA.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(2).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Casa" varianteTarjetaV1>
        {CASA_NUEVO2.slice(0, 2).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="1.484 €/m²" />
        </p>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{CASA_NUEVO2[3]}</p>

        <EnlaceIdealista ambito="municipio" slug={ficha.slug} nombre={ficha.municipio} />

        <div className="mt-6 pt-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--tinta-suave)]">
            Precio y bandas
          </p>
          <p className="mt-1 text-[13px] leading-snug text-[var(--tinta-suave)]">
            Referencia municipal; una vivienda concreta puede separarse de la media.
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

        <div className="mt-6 max-w-2xl overflow-hidden rounded-xl border border-[var(--linea)] bg-white">
          <FilaCasaNuevo2 etiqueta="Advertencia de microzona" cuerpo={CASA_ADVERTENCIA_MICROZONA} />
          <FilaCasaNuevo2
            etiqueta="Qué conviene revisar en una vivienda"
            cuerpo={CASA_QUE_CONVIENE_REVISAR}
          />
          <FilaCasaNuevo2 etiqueta="Mercado y reventa" cuerpo={CASA_MERCADO_REVENTA} />
        </div>
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
