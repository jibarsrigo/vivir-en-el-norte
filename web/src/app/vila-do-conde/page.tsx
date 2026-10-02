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
 * NUEVO2 — Vila do Conde (Litoral Norte, Portugal).
 * Eje: casco / desembocadura del Ave (historia, paseo, servicios a pie) vs Azurara u orilla atlántica más de playa (playa delante; menos villa de piedra bajo la ventana).
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Litoral Norte es la franja atlántica portuguesa entre Esposende y Vila do Conde, ya en la órbita de Porto: el estuario del Cávado, dunas protegidas y ciudades de playa con Metro. El sol es de los más altos de la tabla; el hospital y el avión se organizan hacia Porto y hacia la red hospitalaria de Póvoa de Varzim y Vila do Conde.",
  "Vila do Conde combina un casco histórico junto a la desembocadura del Ave —acueducto, convento de Santa Clara, memoria naval— con playas y Azurara hacia el Atlántico. Metro, comercio y la red hospitalaria con Póvoa dan una autonomía alta. No es solo un frente de bloques: es una villa de piedra abierta al mar.",
  "Lo que más cambia la vida diaria es dónde queda la casa: en el casco junto al Ave —historia y servicios a pie— o en Azurara u otra orilla de playa —arena delante, menos plaza de piedra bajo la ventana—. En ambos sitios se vive en Vila do Conde; no se vive igual.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Vila do Conde se siente una villa histórica abierta al mar, no solo un balneario de bloques. Quien vive en el casco junto a la desembocadura del Ave —el río que aquí se abre al Atlántico— camina piedra, paseo y comercio. El acueducto y el convento de Santa Clara marcan el horizonte. Quien vive en Azurara o en una orilla de playa acerca la arena y aleja parte del casco. Quien llega de fuera no debe confundir la plaza de piedra con el frente atlántico de Azurara.",
  "Un martes de noviembre, en el casco, la villa funciona. En nuestra escala los servicios llegan a 8/10: hay comercio, mercado y vida diaria completa; no falta lo básico de ciudad. Quien elige el casco tiene historia y compra cerca. Quien elige Azurara gana la playa; esa misma mañana parte del casco pide trayecto.",
  "Sin coche, en el núcleo bien situado la compra y buena parte de las gestiones caben cerca; el Metro do Porto ayuda hacia el área metropolitana. El hospital de la red Póvoa–Vila do Conde queda a unos diez minutos. El aeropuerto de Porto-Sá Carneiro ronda los quince minutos: es de los accesos más rápidos de toda la tabla. Vila do Conde ofrece villa y playa; no ofrece el silencio de una aldea minhota.",
  "La diferencia entre julio y noviembre se nota en la playa y en el calendario. Los días 23 y 24 de junio, São João llena la villa con música, hogueras y gente en la calle: hay más ruido y aparcamiento más difícil. El primer domingo de agosto, la fiesta del Senhor dos Navegantes en Caxinas —barrio marinero al norte del casco— concentra procesión, afluencia y tráfico en esa orilla. En julio y agosto suben la ocupación y el uso del frente, y encontrar sitio cerca de la arena se vuelve más difícil. Meses después, un martes húmedo muestra un casco vivo. No son dos Vilas distintas: son dos ritmos del mismo sitio a lo largo del año.",
  "También por eso la elección entre el casco y Azurara cambia bastante la vida diaria. En el casco la piedra y el Ave quedan metidos en la rutina. En Azurara la playa queda delante, a cambio de menos plaza histórica bajo la ventana. Esa diferencia acaba importando más que la media de precios.",
] as const;

const CLIMA_NUEVO2 = [
  "Vila do Conde supone un cambio de clima claro respecto a Mallorca: costa atlántica con unas 2.550 horas de sol —aún por debajo de Mallorca—, lluvia frecuente en invierno y viento. La humedad se nota en casas cerca del frente. Un día puede empezar cubierto y terminar con viento de tarde en la desembocadura o en Azurara.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 20 °C: no pasas el calor de Baleares. El agua suele estar entre 16 y 18 °C. Quien vive en el casco lo nota en el paseo del Ave; quien vive en Azurara, en la playa. Un enero en el casco cuenta más que un sábado de sol en la orilla.",
] as const;

const VIVIR_NUEVO2 = [
  "Cambiar Mallorca por Vila do Conde no significa únicamente cambiar de clima: se llega a una villa histórica con playa —casco o Azurara—, no a una ciudad solo de bloques como el frente más denso de Póvoa. En Mallorca puede ser habitual pensar primero en una cala; aquí el Ave y el Atlántico se reparten según el barrio. Esa elección modifica decisiones tan sencillas como pasear el casco o bajar a la arena.",
  "También cambia el peso del coche. En el núcleo el Metro y el paseo ayudan; el hospital queda a unos diez minutos. Póvoa, al norte, aporta ciudad-balneario más densa, casino y un frente de paseo distinto si se quiere otra escala. Ir y volver a Mallorca suele pasar por Porto, a unos quince minutos del aeropuerto. Se oye portugués; el ambiente mezcla piedra y veraneo.",
  "Y cambia el contraste entre estaciones. Agosto llena la playa; el casco no se apaga en noviembre. Para alguien acostumbrado a Mallorca, la diferencia está en menos sol continuo, más viento, agua fría y en elegir bien entre el Ave y el Atlántico. Vivir aquí todo el año significa aceptar una villa costera metropolitana con peaje de precio.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Vila do Conde se entiende por su papel de villa naval y de desembocadura. El convento de Santa Clara, fundado en 1318, marca el poder religioso sobre el Ave; el casco de piedra no es decorado: es oficio, villa y memoria de navegación. Durante siglos pesaron los astilleros y la construcción naval: Vila do Conde miró al mar para construir y salir. Quien conozca solo la playa debe sumar esa historia de villa antes que de balneario.",
  "El acueducto de Santa Clara, terminado en 1714, atraviesa el paisaje con cientos de arcos y lleva la mirada desde el convento hacia la villa: es infraestructura histórica visible, no un adorno de postal. En la desembocadura, la Nau Quinhentista —réplica botada en 2007— recuerda los barcos de la época de los Descubrimientos y el orgullo local por la construcción naval. La desembocadura del Ave —el río que se abre al Atlántico— organizó puerto, paseo y relación con el mar. El Metro y la cercanía del aeropuerto de Porto modernizan la autonomía sin borrar el casco. Subir y bajar calles de piedra entra en la rutina aunque el Ave esté cerca.",
  "Azurara, hacia la orilla atlántica, cuenta la capa más de playa y veraneo: arena, viento y menos plaza de piedra bajo la ventana. Caxinas, al norte, aporta un barrio marinero con fiesta propia. Póvoa, más al norte, aporta ciudad-balneario densa. Esposende aporta dunas y el Cávado. Fuera del casco, Azurara cuenta otra historia cotidiana: más playa, menos acueducto bajo la ventana, más ritmo de orilla.",
  "Hoy, comprar «en Vila do Conde» sigue siendo elegir entre el casco junto al Ave —historia y servicios a pie— o Azurara / playa —arena delante—. El anuncio de ciudad no dice cuál de las dos, ni cómo se siente esa misma calle en enero frente a un sábado de agosto, ni cuánto pesa el aparcamiento en temporada. Santa Clara y el acueducto cierran la postal, pero el Ave como desembocadura trabajada es el hilo. Quien compre solo por playa sin pisar el casco un martes pierde media ficha.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El agua en Vila do Conde reparte estuario y Atlántico. En el casco el Ave organiza el día: desembocadura —el río que se ensancha hacia el mar—, paseo y piedra. No es como estar solo en una playa de oleaje bajo la ventana: es orilla de río y villa. En Azurara y en otras franjas de playa el Atlántico queda delante: arena, viento, agua que suele rondar 16–18 °C. Quien vive solo en el casco convierte la playa en una salida corta. Un martes de junio suele haber holgura; un domingo de agosto el frente se llena y encontrar aparcamiento cerca de la arena se vuelve más difícil.",
  "Para caminar desde el casco, el paseo y la orilla del Ave convierten el río y la villa en horizonte cotidiano. El acueducto y Santa Clara marcan la subida visual. Desde Azurara el paseo es de playa urbana: se baja a la arena con más facilidad y el casco pide más minutos. Azurara acerca la playa; el casco acerca el acueducto: firmar sin probar ambos es el error habitual.",
  "Para gestiones o otra escala, la propia ciudad cubre casi todo. Póvoa, a minutos hacia el norte, aporta frente denso, casino y otra lectura de ciudad-balneario. Hacia el sur, Mindelo y la reserva ornitológica amplían el mapa natural si se quiere otra salida. Porto y el aeropuerto quedan muy cerca. Aquí el día a día pide elegir casco o Azurara; el hospital de la red local queda a unos diez minutos.",
  "En el casco la villa queda a pie casi todos los días; en Azurara la playa queda delante y el casco pide más trayecto. Esa diferencia describe mejor Vila do Conde que firmar solo por la media de precios. Porto organiza el vuelo habitual hacia Palma. Azurara ofrece playa urbana con el casco a poca distancia; otras orillas del concelho cambian el peaje de viento y de aparcamiento. El Ave en la desembocadura permite un paseo de río y mar a la vez cuando la marea y el día acompañan. Elegir casco o Azurara decide si el agua cotidiana es piedra con estuario o arena con frente atlántico.",
] as const;

const CASA_NUEVO2 = [
  "Vila do Conde es villa y playa con microzonas distintas. Una casa en el casco junto al Ave permite piedra y servicios a pie. Una vivienda en Azurara acerca la playa y aleja parte del casco. El anuncio que diga solo «Vila do Conde» puede ocultar esa distancia.",
  "En el casco importan la accesibilidad, la humedad, el ruido y el aparcamiento. En Azurara pesan el salitre, el viento y el trayecto real al casco. La fibra está señalada como sí; hay obra nueva. Conviene confirmar el edificio o la parcela.",
  "El precio medio de referencia ronda 2.875 €/m². Con esa media, las columnas A y B sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual un piso de casco y uno en Azurara.",
  "Antes del precio conviene recorrer la rutina desde la casa: el casco, la playa, el Metro y la salida hacia el aeropuerto. En agosto, la ocupación; en noviembre, la humedad. Vila do Conde premia elegir bien casco o Azurara; castiga comprar solo la media municipal.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "El casco del Ave y Azurara no son intercambiables. Una vivienda «en Vila do Conde» puede significar piedra a pie o playa delante con más trayecto al casco. Comparar solo el precio inventa un municipio que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el casco, la playa, el hospital, el Metro y el aeropuerto. En Azurara, salitre y aparcamiento en temporada. En el casco, ruido y acceso. También la luz, el aislamiento y cómo se vive esa misma calle un domingo de agosto y un martes de enero.";

const CASA_MERCADO_REVENTA =
  "Hay demanda alta por cercanía a Porto y playa. Un acceso sencillo al casco o a la orilla, buen estado y una explicación clara del barrio amplían el abanico; una casa mal situada o muy cara sin sentido de microzona lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Vila do Conde",
  a2: "242.938 €",
  a3: "336.375 €",
  b2: "196.219 €",
  b3: "271.688 €",
  m2: "2.875 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Vila do Conde encaja si atrae una villa histórica con playa cercana —casco del Ave o Azurara— y se elige el barrio con honestidad. Hay que elegir dónde se vive porque no se vive igual. El hospital queda a unos diez minutos; Porto organiza el vuelo a unos quince. Frente a Mallorca, el verano es más suave, pero el cambio incluye viento, agua fría, precio alto y menos sol continuo.",
  "También encaja si se acepta la escala metropolitana —Metro, A-28, veraneo de Porto— y se prueba un enero en el barrio elegido.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Vila do Conde encaja peor si se busca una aldea quieta lejos de Porto: aquí hay villa costera metropolitana (servicios 8/10) y eso importa porque quien espera el silencio de Afife suele llevarse sorpresa. No falta comercio ni Metro; falta quietud de interior minhoto y distancia real a la aglomeración de Porto. Tampoco si el precio del metro cuadrado resulta incompatible con lo que se busca.",
  "Tampoco si se decide solo tras un sábado de sol en Azurara sin probar un martes de noviembre en el casco o en la calle concreta.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el casco y otra en Azurara. Desde cada casa: una compra, una bajada a la playa, y la salida hacia Porto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto —ocupación y aparcamiento— y un día cubierto de noviembre —luz y humedad—. Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
] as const;

const FOTO_COMO_A = {
  src: "/fotos/litoral-norte/vila-casco.jpg",
  pie: "Casco de Vila do Conde junto al Ave",
} as const;

const FOTO_COMO_B = {
  src: "/fotos/litoral-norte/vila-azurara.jpg",
  pie: "Azurara y frente de playa en Vila do Conde",
} as const;

const FOTO_HIST_A = {
  src: "/fotos/litoral-norte/vila-acueducto.jpg",
  pie: "Acueducto de Vila do Conde",
} as const;

const FOTO_MAR_A = {
  src: "/fotos/litoral-norte/vila-santa-clara.jpg",
  pie: "Santa Clara sobre la desembocadura del Ave",
} as const;

const FOTO_MAR_B = {
  src: "/fotos/litoral-norte/vila-nau.jpg",
  pie: "Memoria naval en Vila do Conde",
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

export default function Nuevo2VilaDoCondePage() {
  const ficha = municipioPorSlug("vila-do-conde");
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
        <Foto src={FOTO_COMO_A.src} pie={FOTO_COMO_A.pie} />
        <Foto src={FOTO_COMO_B.src} pie={FOTO_COMO_B.pie} />
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
        <Foto src={FOTO_HIST_A.src} pie={FOTO_HIST_A.pie} />
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
        <Foto src={FOTO_MAR_A.src} pie={FOTO_MAR_A.pie} />
        <Foto src={FOTO_MAR_B.src} pie={FOTO_MAR_B.pie} />
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="2.875 €/m²" />
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
