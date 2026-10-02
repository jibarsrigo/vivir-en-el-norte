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
 * NUEVO2 — Póvoa de Varzim (Litoral Norte, Portugal).
 * Eje: frente marítimo / paseo (playa urbana a pie, densidad) vs calles más retiradas del núcleo o periferia (menos salitre; mismo invierno de ciudad).
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Litoral Norte es la franja atlántica portuguesa entre Esposende y Vila do Conde, ya en la órbita de Porto: el estuario del Cávado, dunas protegidas y ciudades de playa con Metro. El sol es de los más altos de la tabla; el hospital y el avión se organizan hacia Porto y hacia la red hospitalaria de Póvoa de Varzim y Vila do Conde.",
  "Póvoa de Varzim es una ciudad-balneario con paseo marítimo largo, frente de bloques, casino como hito urbano y puerto pesquero que sigue siendo de trabajo. Mercado, comercio y la línea B del Metro do Porto dan una autonomía muy alta. No es una villa de casas bajas: es una ciudad de playa con vida anual.",
  "Lo que más cambia la vida diaria es dónde queda la casa: en el frente marítimo —playa y paseo a pie, más densidad— o en calles más retiradas del núcleo o de la periferia —menos salitre, mismo invierno de ciudad—. En ambos sitios se vive en Póvoa; no se vive igual.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Póvoa de Varzim se siente una ciudad-balneario, no una aldea de dunas. Quien vive en el frente marítimo baja al paseo y a la playa urbana en pocos minutos: bloques junto al mar, terraza, oleaje y, en verano, más ruido y gente. El puerto pesquero recuerda que el mar también es oficio. Más retirado, hacia calles interiores o hacia la periferia, se gana algo de abrigo y menos salitre, pero bajar a la arena pide más minutos a pie o un trayecto corto. Quien llega de fuera no debe esperar el silencio de Esposende ni la piedra de Vila do Conde: aquí manda la ciudad de playa.",
  "Un martes de noviembre la ciudad funciona: no depende de agosto. En nuestra escala los servicios llegan a 8/10: el comercio, el mercado y la farmacia sostienen una vida diaria completa; no falta lo básico bajo una nota de ciudad. Quien elige el frente tiene la playa metida en la mañana. Quien elige una calle más retirada gana calma relativa; esa misma mañana el paseo pide caminar o conducir un poco más.",
  "Sin coche, en el núcleo bien situado la compra, el paseo y buena parte de las gestiones caben a pie o con el Metro do Porto (línea B hacia el área metropolitana). El hospital de la red Póvoa–Vila do Conde queda a unos cinco minutos. El aeropuerto de Porto-Sá Carneiro ronda los veinte minutos. Póvoa ofrece ciudad y playa juntas; no ofrece quietud de pinar ni casas bajas en primera línea.",
  "La diferencia entre julio y noviembre se nota sobre todo en el frente. El 29 de junio, São Pedro es fiesta municipal: hay música, gente en la calle y más movimiento en el paseo. A finales de mayo, la romería de Nossa Senhora da Saúde sube hacia São Félix —el monte-mirador al este de la ciudad— y concentra afluencia, tráfico y aparcamiento más difícil alrededor del santuario. En julio y agosto suben la ocupación y el uso del paseo, y encontrar sitio cerca de la playa se vuelve más difícil. Meses después, un martes húmedo muestra una ciudad abierta, no una colonia vacía. No son dos Póvoas distintas: son dos ritmos del mismo sitio a lo largo del año.",
  "También por eso la elección entre el frente y las calles retiradas cambia bastante la vida diaria. En el frente la playa queda metida en la rutina, a cambio de más densidad y salitre. Fuera se gana algo de abrigo, pero el paseo pide más pasos. Esa diferencia acaba importando más que la media de precios de la ciudad.",
] as const;

const CLIMA_NUEVO2 = [
  "Póvoa supone un cambio de clima claro respecto a Mallorca: frente atlántico urbano con unas 2.550 horas de sol —aún por debajo de Mallorca—, lluvia frecuente en invierno y viento en el paseo. La humedad marina se nota en pisos de primera línea. Un día puede empezar cubierto y terminar con viento de tarde junto a la arena.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 20 °C: no pasas el calor de Baleares. El agua suele estar entre 16 y 18 °C. Quien vive en el frente lo nota al abrir la ventana; quien vive más retirado, al bajar al paseo. Un enero en la ciudad cuenta más que un sábado de sol en la terraza.",
] as const;

const VIVIR_NUEVO2 = [
  "Cambiar Mallorca por Póvoa no significa únicamente cambiar de clima: se llega a una ciudad-balneario con Metro —en el frente o más retirada—, no a una villa minhota ni a una aldea de dunas. En Mallorca puede ser habitual pensar primero en una cala; aquí la playa es urbana y densa, con bloques y paseo. Esa elección modifica decisiones tan sencillas como bajar a la arena o buscar una calle más quieta.",
  "También cambia el peso del coche. En el núcleo el Metro y el paseo ayudan a organizar el día a día; el hospital queda a unos cinco minutos. Vila do Conde, al sur, aporta casco histórico y desembocadura del Ave si apetece otra escala de piedra. Esposende, al norte, aporta dunas y estuario del Cávado. Ir y volver a Mallorca suele pasar por Porto, a unos veinte minutos del aeropuerto. Se oye portugués de ciudad marinera; el ambiente es anual, no solo de veraneo.",
  "Y cambia el contraste entre estaciones. Agosto llena el frente; el resto del año la ciudad no se apaga. Para alguien acostumbrado a Mallorca, la diferencia está en menos sol continuo, más viento, agua fría y más densidad urbana. Vivir aquí todo el año significa aceptar una ciudad de playa con peaje de precio y de ocupación estival en el paseo.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Póvoa de Varzim se entiende por su transformación en ciudad-balneario a lo largo del siglo XX, sin olvidar que el mar organizó antes el oficio. El puerto pesquero no es solo postal: convive a poca distancia con el paseo, los bloques y el casino. Quien conozca solo una terraza de primera línea debe sumar esa doble raíz de pesca y baño. La memoria de mareantes, trajes y siglas de la cultura pescadora sigue presente en la identidad local aunque el frente se haya vuelto balneario.",
  "El Casino da Póvoa, abierto en 1934, marca el siglo del veraneo y del ocio urbano junto al Atlántico: es hito de ciudad, no decorado de aldea. El paseo marítimo largo —uno de los más citados de Portugal— convirtió el baño y el caminar junto al mar en rutina pública. El Metro do Porto (línea B) ata la ciudad al área metropolitana: no es un detalle menor para quien viene de Mallorca pensando que el coche será obligatorio cada día. La autonomía urbana creció con mercado, comercio y la red hospitalaria compartida con Vila do Conde. No es una villa de piedra minhota: es una ciudad costera del distrito de Porto.",
  "Vila do Conde, al sur, aporta casco histórico, acueducto y desembocadura del Ave. Esposende, al norte, aporta dunas, Parque Natural y estuario del Cávado con otra escala. Fuera del frente, las calles retiradas cuentan otra historia cotidiana: menos salitre en la ventana, más minutos hasta la arena, mismo invierno de ciudad. Hacia el norte del concelho, Estela y el golf de links junto al mar amplían el mapa sin sustituir la pregunta del barrio.",
  "Hoy, comprar «en Póvoa» sigue siendo elegir entre el frente marítimo —playa a pie, más densidad— o calles más retiradas —menos salitre, mismo invierno de ciudad—. El anuncio de ciudad no dice cuál de las dos, ni cómo se siente esa misma calle en enero frente a un sábado de agosto, ni cuánto pesa el aparcamiento en temporada. El casino y el frente de bloques cuentan el veraneo del XX; el puerto cuenta el oficio. Mezclar ambas lecturas evita firmar solo por la terraza.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar está delante en el frente de Póvoa: playa urbana larga (tramos como Redonda, Salgueira o Lagoa según el punto del paseo), oleaje, viento y agua que suele rondar 16–18 °C. No es como estar en una duna quieta de parque natural: es una ciudad que mira al Atlántico abierto. Quien vive más retirado convierte ese paseo en más trayecto. Un martes de junio suele haber holgura; un domingo de agosto el frente se llena y encontrar aparcamiento cerca de la arena se vuelve más difícil.",
  "Para caminar desde el frente, el paseo marítimo convierte bloques, arena y horizonte en rutina cotidiana: se pueden recorrer kilómetros llanos con el Atlántico a un lado. El puerto pesquero añade oficio y movimiento a poca distancia. Desde una calle retirada ese mismo paseo pide más minutos a pie o un trayecto corto. Quien viva lejos del paseo debe cronometrar la bajada real, no la del anuncio.",
  "Para gestiones o otra orilla, la propia ciudad cubre casi todo: compra, mercado y hospital a radio corto. Vila do Conde, a minutos hacia el sur, aporta casco, Santa Clara y paseo junto al Ave. Esposende aporta dunas, molinos de Apúlia y el Cávado. Porto y el aeropuerto quedan cerca por Metro y por carretera. Aquí el día a día pide elegir frente o retirada; el Metro acorta Porto, pero no inventa playa bajo cualquier ventana.",
  "En el frente la playa queda a pie casi todos los días; más retirado el salitre baja y bajar a la arena pide más pasos. Esa diferencia describe mejor Póvoa que firmar solo por la media de precios o por una foto del casino. Porto organiza el vuelo habitual hacia Palma. Hacia el norte, Estela y otras orillas del concelho amplían arena con otro peaje de acceso y de viento. No todo el litoral de Póvoa es el mismo bloque bajo la ventana.",
] as const;

const CASA_NUEVO2 = [
  "Póvoa es una ciudad de playa con tipologías densas. Un piso en el frente permite bajar al paseo andando, con salitre, viento y verano lleno incluidos. Una vivienda más retirada gana algo de abrigo, pero alarga la bajada a la playa. El anuncio que diga solo «Póvoa de Varzim» puede ocultar esa distancia.",
  "En el frente importan el salitre, el ruido, el aislamiento y el aparcamiento en temporada. Más retirado pesan las distancias reales al paseo y al Metro. La fibra está señalada como sí; hay obra nueva. Conviene confirmar el edificio concreto.",
  "El precio medio de referencia ronda 2.730 €/m². Con esa media, las columnas A y B sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual un piso de primera línea y uno retirado.",
  "Antes del precio conviene recorrer la rutina desde la casa: el paseo, la compra, el Metro y la salida hacia el aeropuerto. En agosto, la ocupación; en noviembre, la humedad. Póvoa premia elegir bien el frente o la retirada; castiga comprar solo la media municipal.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "El frente marítimo y las calles retiradas no son intercambiables. Una vivienda «en Póvoa» puede significar playa bajo la ventana o varios minutos hasta el paseo. Comparar solo el precio inventa una ciudad que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta la playa, el Metro, el hospital y el aeropuerto. En el frente, salitre, ruido y aparcamiento en temporada. Fuera, distancia real al paseo. También la luz, el aislamiento y cómo se vive esa misma calle un domingo de agosto y un martes de enero.";

const CASA_MERCADO_REVENTA =
  "Hay demanda amplia por ciudad con playa y Metro. Un acceso sencillo al paseo, buen estado y una explicación clara del barrio amplían el abanico; una casa mal situada o ruidosa lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Póvoa de Varzim",
  a2: "230.685 €",
  a3: "319.410 €",
  b2: "186.323 €",
  b3: "257.985 €",
  m2: "2.730 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Póvoa encaja si atrae una ciudad-balneario con playa urbana a pie —o calles más retiradas con el mismo invierno de ciudad—. Hay que elegir dónde se vive porque no se vive igual. El hospital queda a unos cinco minutos; Porto organiza el vuelo a unos veinte. Frente a Mallorca, el verano es más suave, pero el cambio incluye densidad de bloques, viento, agua fría y menos sol continuo.",
  "También encaja si se acepta el precio y la ocupación de agosto en el paseo sin buscar el silencio de una aldea o de las dunas de Esposende.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Póvoa encaja peor si se busca quietud de duna o villa minhota: aquí hay ciudad densa (servicios 8/10) y eso importa porque quien espera Afife o un pinar suele llevarse sorpresa. No falta comercio ni Metro; falta silencio de aldea y casas bajas en primera línea. Tampoco si molesta el frente de bloques y el verano lleno en el paseo.",
  "Tampoco si se decide solo tras un sábado de sol en la terraza sin probar un martes de noviembre en la calle concreta.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el frente y otra más retirada. Desde cada casa: una bajada al paseo con viento, una compra, y la salida en Metro o coche hacia Porto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto —ocupación y aparcamiento— y un día cubierto de noviembre —luz y humedad—. Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
] as const;

const FOTO_COMO_A = {
  src: "/fotos/litoral-norte/povoa-playa.jpg",
  pie: "Frente de playa en Póvoa de Varzim",
} as const;

const FOTO_COMO_B = {
  src: "/fotos/litoral-norte/zona-povoa.jpg",
  pie: "Paseo y ciudad en Póvoa de Varzim",
} as const;

const FOTO_HIST_A = {
  src: "/fotos/litoral-norte/povoa-estela.jpg",
  pie: "Estela y memoria marinera en Póvoa",
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

export default function Nuevo2PovoaDeVarzimPage() {
  const ficha = municipioPorSlug("povoa-de-varzim");
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="2.730 €/m²" />
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
