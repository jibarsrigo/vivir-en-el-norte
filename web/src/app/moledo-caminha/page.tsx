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
 * NUEVO2 — Moledo — Caminha (Alto Minho, Portugal).
 * Eje: frente de playa / pinar junto a la arena (baño a pie y nortada) vs casas más retiradas hacia el interior o hacia Caminha (menos salitre, más coche a la playa).
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Alto Minho es el norte de Portugal entre el Miño y Viana do Castelo: fortalezas de río, villas de desembocadura, playas de nortada y una ciudad de apoyo con hospital Santa Luzia. El sol es de los más altos de la tabla; la sanidad y el avión se organizan en clave portuguesa —Porto y Viana—.",
  "Moledo es la microzona costera del concelho de Caminha: una playa larga, dunas, el Pinhal do Camarido y nortada, con el Forte da Ínsua en el horizonte. No es la villa de Caminha ni Âncora: aquí se gana el Atlántico a la puerta; a cambio, el comercio diario es delgado y el coche pesa fuera de la rutina mínima.",
  "Lo que más cambia la vida diaria es dónde queda la casa: en el frente de playa o pinar junto a la arena —playa, viento y salitre cerca— o más retirada hacia el interior o hacia Caminha —menos exposición, con la playa pidiendo trayecto—. En ambos sitios se vive en Moledo; no se vive igual.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Moledo no se siente una villa con plaza mayor donde se resuelva la semana a pie. Quien vive junto a la orilla baja a la arena en pocos minutos: delante queda un arenal abierto al Atlántico, detrás el pinar del Camarido con casas y chalés entre los pinos, y al norte se dibuja la Ínsua cuando el cielo abre. La playa entra en el día: se oye la nortada de tarde en verano (viento norte fuerte que puede tumbar la sombrilla) y el salitre llega a la ventana. Más retirado, hacia calles interiores o hacia la villa de Caminha, se gana algo de abrigo y menos salitre, pero bajar a la playa y muchos recados ya piden coche. Quien llega de fuera descubre enseguida que no debe heredar el comercio ni las gestiones de Caminha.",
  "Un martes de noviembre, en el frente, se puede caminar el pinar y la orilla con mucho menos movimiento que en agosto. Los servicios llegan a 3/10 en nuestra escala: hay veraneo residencial y poca red de comercio diario; Caminha y Âncora cubren la compra seria. Quien elige el frente tiene la playa a pocos minutos andando y renuncia a organizar el día a día como en una villa. Quien elige más retirado gana calma; esa misma mañana la arena pide trayecto.",
  "Sin coche, en Moledo casi solo se resuelve bajar a la playa a pie. La compra seria, muchas gestiones y casi todo lo demás piden trayecto a Caminha o a Âncora. El tren de la Linha do Minho ayuda, pero no sustituye todos los desplazamientos. El hospital práctico es Santa Luzia, en Viana do Castelo, a unos veinticinco minutos. El aeropuerto de Porto ronda los sesenta y cinco minutos. Moledo ofrece dunas y pinar; no ofrece supermercado denso a pie.",
  "La diferencia entre julio y noviembre se nota al salir de casa. En julio y agosto suben la ocupación, el windsurf y el kite cuando sopla la nortada, y encontrar aparcamiento se vuelve más difícil. Meses después, en un martes húmedo, el frente recupera silencio: muchas casas se notan más vacías. No son dos Moledos distintos: son dos ritmos del mismo sitio a lo largo del año.",
  "También por eso la elección entre frente de playa y casa más retirada cambia bastante la vida diaria. En el frente la playa y el horizonte quedan metidos en la rutina, a cambio de más viento y salitre. Fuera se gana abrigo, pero la arena y casi cada compra piden coche. Esa diferencia acaba importando más que la media de precios del concelho.",
] as const;

const CLIMA_NUEVO2 = [
  "Moledo supone un cambio de clima claro respecto a Mallorca, y distinto del valle de Valença: aquí manda la costa abierta. Hay unas 2.500 horas de sol —aún por debajo de Mallorca—, lluvia frecuente en invierno y una nortada —viento norte fuerte de tarde, de junio a agosto— que marca el cuerpo en la playa y en la terraza. La humedad y el salitre se notan en casa. Un día puede empezar con niebla de mar, abrirse y terminar con viento que pide abrigo sin que eso resulte excepcional.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 20,5 °C: no pasas el calor de Baleares, pero el viento puede impedir la terraza quieta. El agua suele estar entre 16 y 18 °C. Quien vive en el frente lo nota al abrir la ventana al Atlántico; quien vive retirado, al bajar al arenal. Un enero en el pinar cuenta más que un sábado de sol en agosto.",
] as const;

const VIVIR_NUEVO2 = [
  "Cambiar Mallorca por Moledo no significa únicamente cambiar de clima: se llega a una microzona de playa y pinar —frente o más retirada—, no a la plaza de Caminha. En Mallorca puede ser habitual pensar primero en servicios a pie; aquí la playa está cerca y la compra seria, a menudo, no. Esa elección modifica decisiones tan sencillas como bajar a la arena o ir al súper.",
  "También cambia el peso del coche respecto a la costa y al hospital. En el frente se resuelve el baño a pie; casi todo lo demás pide Caminha, Âncora o Viana. Santa Luzia queda a unos veinticinco minutos. Ir y volver a Mallorca suele pasar por Porto. Se oye portugués; el ambiente es de veraneo residencial más que de villa de mercado diario.",
  "Y cambia mucho el contraste entre estaciones. Agosto llena el arenal; en noviembre el silencio pesa. Para alguien acostumbrado a Mallorca, la diferencia está en el viento, el agua fría y en no poder organizar el día a día sin salir a Caminha o Âncora. Vivir aquí todo el año significa aceptar nortada, coche y temporada marcada como partes de una misma vida.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Moledo no se entiende por un casco monumental: se entiende por el paso de freguesía agrícola —antes se usaba el sargaço como abono y la labranza mandaba más que el baño— a estancia balnearia del siglo XX. La estación de la Linha do Minho y la carretera facilitaron que, desde finales del XIX y sobre todo desde la Primera República, el baño de mar organizara casas junto al areal y al Pinhal do Camarido. No nació como plaza de torre: nació como orilla que aprendió a recibir veraneo de Porto y de familias que volvían cada agosto.",
  "Durante décadas, la Comisión de Iniciativa y después la Junta de Turismo intentaron ordenar hotel, balnearios y campos junto al pinar; parte de esos planes se ejecutó a medias, pero el carácter quedó: chalés entre pinos, paseo de playa, sociabilidad de verano y un invierno mucho más quieto. Quien conozca Moledo solo por una foto de kite debe sumar ese origen de estancia balnearia, la dependencia histórica del tren y de la N-13, y la diferencia clara respecto a la villa de Caminha.",
  "En el horizonte, el Forte da Ínsua —convento franciscano desde 1392, fortaleza abaluartada de 1649–1652 con faro posterior— marca la desembocadura y la defensa de la boca del Miño; se asocia visualmente a Moledo aunque la administración lo vincule a Cristelo. Caminha villa, a pocos minutos, aporta la piedra, el mercado y el comercio que aquí no hay. Fuera del frente, las casas más retiradas cuentan otra historia: menos postal de duna, menos salitre en la ventana, más trayecto a la arena cada mañana.",
  "Hoy, comprar «en Moledo» sigue siendo elegir entre frente de playa o pinar junto a la arena —playa a pie, más viento— o vivienda más retirada —menos salitre, más coche—. El anuncio del concelho no dice cuál de las dos —ni cómo se siente esa misma calle en enero frente a un sábado de agosto, ni cuánto pesa Caminha en la compra real—.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar está delante en casi todo Moledo, pero no se vive igual desde cualquier casa. En el frente el Atlántico queda a pocos minutos: un arenal largo, dunas, oleaje, nortada de tarde en verano —viento norte que puede tumbar la sombrilla— y agua que suele rondar 16–18 °C. No es como estar en una cala recogida ni tampoco como una bahía de ría: es una playa abierta donde el viento forma parte del plan. Quien vive más retirado convierte esa misma playa en trayecto. Un martes de junio suele haber holgura; un domingo de agosto el acceso y el aparcamiento se llenan.",
  "Para caminar andando desde el frente, el pinar del Camarido y el paseo de orilla convierten dunas y sombra en horizonte cotidiano: la Ínsua al norte cuando el cielo abre, el oleaje a un lado, el salitre en la cara. No es un boulevard de ciudad: es costa con viento, tramos de arena y, a ratos, tablas y cometas. Desde una casa retirada ese paseo ya pide coche casi siempre; el día a pie se queda en el jardín entre pinos.",
  "Para gestiones o otro tipo de orilla, el coche abre el mapa en minutos. Caminha aporta plaza, estuario y compras a poca distancia —el contraste con el silencio del pinar se nota enseguida—. Âncora ofrece playa más abrigada por el espigón de Lagarteira y un poco más de villa marinera. Viana aporta hospital Santa Luzia y ciudad completa. Aquí el día a día pide elegir frente o retirada; Santa Luzia queda a unos veinticinco minutos cuando hace falta hospital de mayor nivel.",
  "En el frente la playa queda a pie casi todos los días; hacia el interior el jardín queda delante y bajar a la playa pide coche. Esa diferencia describe mejor Moledo que heredar los servicios de Caminha o firmar solo por una media del concelho. Santa Luzia cubre la sanidad de referencia cuando aquí no alcanza; Porto organiza el vuelo habitual hacia Palma.",
] as const;

const CASA_NUEVO2 = [
  "Moledo es playa y pinar, no una plaza de villa. Una casa en primera línea o entre el Pinhal do Camarido permite bajar a la arena andando —con nortada y salitre incluidos—. Una casa más retirada hacia el interior o hacia Caminha gana algo de abrigo, pero convierte cada baño y muchas compras en trayecto. El anuncio que diga solo «Caminha» o «Moledo» puede ocultar esa distancia, y no debe asumirse el comercio de la villa.",
  "En el frente importan salitre, viento, humedad, aislamiento y mantenimiento exterior. Más retirado pesan distancias reales a la playa y a Caminha. La fibra está señalada como sí; conviene confirmarla. No hay obra nueva relevante.",
  "El precio medio de referencia ronda 1.909 €/m². Con esa media, las columnas A y B sitúan viviendas de dos y tres habitaciones según la distancia a la costa —aquí la franja A describe mejor el frente—. El metro no describe igual un chalé junto a la duna y una casa retirada.",
  "Antes del precio conviene recorrer la rutina desde la casa: la playa un día de nortada, la compra en Caminha, y la salida hacia Viana o Porto. En agosto, la ocupación; en noviembre, el silencio y la humedad. Moledo premia elegir bien el frente; castiga comprar solo la media del concelho.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "Frente de playa y casa retirada no son intercambiables; tampoco lo son Moledo y la villa de Caminha. Una vivienda «en Moledo» puede significar playa a pie o coche para cada bajada. Comparar solo el precio inventa un municipio que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta la playa, Caminha, Santa Luzia y Porto. En el frente, salitre, viento y aparcamiento en temporada. Fuera, dependencia del coche. También la luz, el aislamiento, la ventilación y cómo se vive esa misma calle un domingo de agosto y un martes de enero.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de casa cerca de dunas y pinar, pero el mercado es más estrecho que en una villa completa. Un acceso sencillo a playa, buen estado y mantenimiento frente al salitre amplían el abanico; una casa mal situada o muy estacional lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Moledo (Caminha)",
  a2: "161.311 €",
  a3: "223.353 €",
  b2: "130.289 €",
  b3: "180.401 €",
  m2: "1.909 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Moledo encaja si atrae playa atlántica a la puerta (dunas, pinar, nortada) o si se prefiere una casa más retirada, con menos exposición y coche para bajar a la playa. Hay que elegir dónde se vive porque no se vive igual. Santa Luzia ronda veinticinco minutos; Porto organiza el vuelo habitual. Frente a Mallorca, el verano es más suave, pero el cambio incluye viento fuerte de tarde, agua fría y tener que salir a Caminha o Âncora para la compra seria.",
  "También encaja si se acepta apoyarse en Caminha o Âncora para la compra y se prueba un enero antes de firmar.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Moledo encaja peor si se necesita comercio diario a pie: aquí falta —servicios 3/10; la compra seria queda en Caminha o Âncora— y eso importa porque quien espera plaza de villa bajo la ventana suele llevarse sorpresa. Tampoco si el hospital debe quedar al lado: Santa Luzia está en Viana. Falta poder hacer compra y gestiones a pie: hay que sacar el coche, y eso pesa si se esperaba hacerlo andando.",
  "Tampoco si la nortada, el salitre y el invierno más vacío resultan incompatibles, o si se decide solo tras un sábado de sol en la playa sin probar un martes de noviembre.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el frente y otra más retirada. Desde cada casa: una bajada a la playa con viento, una compra en Caminha, y la salida hacia Viana y Porto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto (ocupación, nortada) y un día cubierto de enero (silencio, humedad, salitre). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
] as const;

const FOTO_COMO_A = {
  src: "/fotos/alto-minho/moledo-playa.jpg",
  pie: "Playa de Moledo: dunas y Atlántico",
} as const;

const FOTO_COMO_B = {
  src: "/fotos/alto-minho/moledo-identidad.jpg",
  pie: "Casas junto al paseo y la playa en Moledo",
} as const;

const FOTO_HIST_A = {
  src: "/fotos/alto-minho/moledo-insua.jpg",
  pie: "Forte da Ínsua frente a Moledo",
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

export default function Nuevo2MoledoCaminhaPage() {
  const ficha = municipioPorSlug("moledo-caminha");
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="1.909 €/m²" />
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
