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
 * NUEVO2 — Vila Praia de Âncora — Caminha (Alto Minho, Portugal).
 * Eje: frente marítimo / villa junto a playa y puerto (marginal, playa, mercado a pie) vs casas más retiradas hacia el valle del Âncora o interior (menos salitre, más coche a la playa).
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Alto Minho es el norte de Portugal entre el Miño y Viana do Castelo: fortalezas de río, villas de desembocadura, playas de nortada y una ciudad de apoyo con hospital Santa Luzia. El sol es de los más altos de la tabla; la sanidad y el avión se organizan en clave portuguesa —Porto y Viana—.",
  "Âncora es una villa costera del concelho de Caminha: playa abrigada por el espigón, puerto, marginal y Forte da Lagarteira. No es como Moledo —dunas y pinar abiertos— ni como la plaza de Caminha junto al estuario del Miño: aquí se gana Atlántico y un poco de villa a la vez.",
  "Lo que más cambia la vida diaria es dónde queda la casa: en el frente marítimo —playa, paseo y mercado cerca— o más retirada hacia el valle del Âncora —menos salitre, con la playa pidiendo trayecto—. En ambos sitios se vive en Âncora; no se vive igual.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Âncora se siente una villa de orilla, no una colonia de chalés. Quien vive junto a la marginal baja a la playa en pocos minutos: delante queda el arenal abrigado por el espigón de Lagarteira, el puerto pequeño y el paseo; detrás, calles de comercio básico y tren de la Linha do Minho. La playa entra en el día sin ser solo postal de verano. Más retirado, hacia el valle del Âncora o calles interiores, se gana algo de abrigo y menos salitre, pero bajar a la playa y muchos recados ya piden coche. Quien llega de fuera no debe confundir Âncora con Moledo ni heredar solo la plaza de Caminha.",
  "Un martes de noviembre, en el frente, se puede caminar el paseo y la orilla con mucho menos movimiento que en agosto. Los servicios llegan a 6/10: hay villa con vida todo el año, mercado y tren; falta hospital en el municipio. Quien elige el frente tiene playa y compra básica delante. Quien elige más retirado gana calma; esa misma mañana la arena pide trayecto.",
  "Sin coche, en el frente se resuelven baño, paseo y parte de la compra. Gestiones mayores y casi todo lo demás piden Caminha o Viana. El hospital práctico es Santa Luzia, en Viana do Castelo, a unos veinte minutos. El aeropuerto de Porto ronda los sesenta minutos. Âncora ofrece villa y playa juntas; no ofrece ciudad completa.",
  "La diferencia entre julio y noviembre se nota al salir de casa. En junio, hacia el día de São João, el Parque y la Avenida Dr. Ramos Pereira se llenan de marchas, música y sardinas durante varios días; en julio y agosto crece el veraneo y encontrar aparcamiento junto a la playa se vuelve más difícil. Meses después, en un martes húmedo, el frente recupera ritmo de villa: hay mesas y gente local, pero sin la presión de agosto. No son dos Âncoras distintas: son dos ritmos del mismo sitio a lo largo del año.",
  "También por eso la elección entre frente marítimo y casa más retirada cambia bastante la vida diaria. En el frente la playa y el paseo quedan metidos en la rutina, a cambio de más viento y verano lleno. Fuera se gana abrigo, pero la arena y parte de la compra piden coche. Esa diferencia acaba importando más que la media de precios del concelho.",
] as const;

const CLIMA_NUEVO2 = [
  "Âncora supone un cambio de clima claro respecto a Mallorca: costa atlántica con unas 2.500 horas de sol —aún por debajo de Mallorca—, lluvia frecuente en invierno y nortada —viento norte fuerte de tarde, de junio a agosto— que se nota en la playa y en la terraza. La humedad y el salitre llegan a casa si se vive cerca del frente. Un día puede empezar con niebla de mar, abrirse y terminar con viento que pide abrigo.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 20,5 °C: no pasas el calor de Baleares, pero el viento puede impedir la terraza quieta. El agua suele estar entre 16 y 18 °C; el espigón abriga el baño más que en Moledo abierto. Quien vive en el frente lo nota al abrir la ventana; quien vive retirado, al bajar al arenal. Un enero en el paseo cuenta más que un sábado de sol en agosto.",
] as const;

const VIVIR_NUEVO2 = [
  "Cambiar Mallorca por Âncora no significa únicamente cambiar de clima: se llega a una villa de playa y puerto —frente o más retirada—, no a un pinar sin núcleo ni a la ciudad de Viana. En Mallorca puede ser habitual pensar primero en servicios a pie; aquí la playa puede estar cerca y la compra seria, a menudo, también en el frente, pero el hospital no. Esa elección modifica decisiones tan sencillas como bajar a la arena o ir a Santa Luzia.",
  "También cambia el peso del coche respecto a la costa y al hospital. En el frente se resuelven el baño y parte del día a día andando; Santa Luzia queda a unos veinte minutos. Ir y volver a Mallorca suele pasar por Porto. Se oye portugués; el ambiente es de villa marinera con veraneo, no de colonia vacía en enero.",
  "Y cambia mucho el contraste entre estaciones. Agosto llena la marginal; en noviembre queda vida local sin el mismo ruido. Para alguien acostumbrado a Mallorca, la diferencia está en el viento, el agua fría y en aceptar que Viana cubre hospital y escala. Vivir aquí todo el año significa aceptar nortada, temporada marcada y tren como apoyo, no como sustituto total del coche.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Âncora no nació con el nombre que lleva hoy. La freguesía se documenta desde el siglo X como Gontinhães —parroquia de Santa Marinha, villa rústica más resguardada tierra adentro— porque la orilla abierta sufría ataques y quedaba expuesta al oleaje y a las incursiones. La población vivía del interior y bajaba al mar solo cuando hacía falta. Solo en 1924 adoptó el nombre oficial de Vila Praia de Âncora, cuando el baño de mar y el núcleo junto al portinho ya habían ganado peso sobre la antigua Gontinhães. Quien conozca el sitio solo por la postal de playa debe sumar ese origen: primero se vivió lejos del oleaje; después la villa bajó al mar y cambió de nombre.",
  "El Forte da Lagarteira —también llamado Forte de Âncora— se levantó sobre la roca en la margen derecha de la foz del río Âncora. Se inició hacia 1690, en el reinado de Pedro II, como parte de la defensa de la costa al sur de la desembocadura del Miño, junto al Forte do Cão en Gelfa. Protegía el portinho donde solo entraban barcas de pescadores y algunas lanchas de Galicia y Caminha cuando el mar lo permitía. En el siglo XIX ese abrigo llegó a llamarse «porto do ouro» por el dinero que movía la pesca estacional. La piedra del fuerte sigue marcando el horizonte del frente: no es decorado de veraneo, es memoria de puerto vigilado y de una comunidad que vivía del mar con riesgo.",
  "Fuera del frente, el valle del río Âncora cuenta otra historia. El agua sube hacia la Serra d'Arga —macizo de granito y aldeas de piedra que cierra el horizonte por el este—, con caminos de monte, caballos sueltos en temporada y un silencio que no se parece al del paseo marítimo. Gelfa, al sur, añade pinar, dunas y el Forte do Cão en el mismo arco costero; Moledo y Caminha quedan cerca pero no heredan la misma rutina. Quien vive retirado hacia el valle o el interior hereda menos salitre en la ventana y más trayecto cada vez que quiere el puerto o la playa. No es la misma Âncora que la del espigón.",
  "Hoy, comprar «en Âncora» sigue siendo elegir entre frente marítimo —playa y villa a pie— o casa más retirada hacia el valle —holgura y coche—. El anuncio del concelho de Caminha no dice cuál de las dos, ni cómo se siente esa misma calle en enero frente a un sábado de São João, ni cuánto pesa el salitre en una vivienda de primera línea.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar está delante en casi todo Âncora, pero no se vive igual desde cualquier casa. En el frente el Atlántico queda a pocos minutos: la arena se alarga delante del paseo, el puerto guarda las barcas y el espigón de Lagarteira parte el oleaje y deja un tramo más abrigado para bañarse. El agua suele rondar 16–18 °C. No es como una cala mediterránea ni como la duna abierta de Moledo: es una playa de villa donde el viento entra, pero el muro de piedra cambia el cuerpo en el agua y permite un baño más manejable que en la costa totalmente expuesta. Quien vive más retirado hacia el valle convierte esa misma playa en trayecto. Un martes de junio suele haber holgura; un domingo de agosto el acceso y el aparcamiento se llenan.",
  "Para caminar andando desde el frente, el paseo junto al puerto y la orilla convierten el mar en horizonte cotidiano: se baja a la arena, se mira el fuerte sobre la roca y se vuelve a casa a pie. El desnivel es suave en la franja litoral; el salitre y el viento forman parte del paseo, y la compra sencilla queda en el mismo radio. Desde una casa retirada ese mismo recorrido ya pide coche casi siempre; el día a pie se queda en aceras interiores y lejos del oleaje, aunque el jardín gane silencio.",
  "Gelfa, a pocos minutos al sur, abre pinar y dunas con el Forte do Cão vigilando la foz; Moledo, hacia el norte, aporta dunas más expuestas y nortada más fuerte; Caminha ofrece la plaza y la desembocadura del Miño —el río que se ensancha hacia el Atlántico— cuando apetece otra orilla. El valle del Âncora hacia la Serra d'Arga cambia del todo el registro: monte de granito, aldeas de piedra y un silencio que no se parece al del paseo. Aquí el día a día pide elegir frente o retirada; Santa Luzia, en Viana, queda a unos veinte minutos cuando hace falta hospital de mayor nivel.",
  "En el frente la playa queda a pie casi todos los días; hacia el valle el jardín queda delante y bajar a la playa pide coche. Esa diferencia describe mejor Âncora que heredar los servicios de Caminha o firmar solo por una media del concelho. Santa Luzia cubre la sanidad de referencia cuando aquí no alcanza; Porto organiza el vuelo habitual hacia Palma.",
] as const;

const CASA_NUEVO2 = [
  "Âncora es una villa de playa y puerto, no solo un pinar. Una casa en el frente marítimo permite bajar a la arena y al paseo andando —con nortada y verano lleno incluidos—. Una casa más retirada hacia el valle del Âncora gana algo de abrigo, pero convierte cada baño en trayecto. El anuncio que diga solo «Caminha» o «Âncora» puede ocultar esa distancia.",
  "En el frente importan el salitre, el viento, la humedad, el aislamiento y el aparcamiento en temporada. Más retirado pesan las distancias reales a la playa y al núcleo. La fibra está señalada como sí; conviene confirmarla. Hay poca obra nueva.",
  "El precio medio de referencia ronda 2.692 €/m². Con esa media, las columnas A y B sitúan viviendas de dos y tres habitaciones según la distancia a la costa —aquí la franja A describe mejor el frente—. El metro no describe igual un piso junto a la marginal y una casa retirada.",
  "Antes del precio conviene recorrer la rutina desde la casa: la playa un día de nortada, la compra en el núcleo, y la salida hacia Viana o Porto. En agosto, la ocupación; en noviembre, la luz y la humedad. Âncora premia elegir bien el frente; castiga comprar solo la media del concelho.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "Frente marítimo y casa retirada no son intercambiables; tampoco lo son Âncora, Moledo y la villa de Caminha. Una vivienda «en Âncora» puede significar playa a pie o coche para cada bajada. Comparar solo el precio inventa un municipio que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta la playa, el mercado, Santa Luzia y Porto. En el frente, salitre, viento y aparcamiento en temporada. Fuera, dependencia del coche. También la luz, el aislamiento, la ventilación y cómo se vive esa misma calle un domingo de agosto y un martes de enero.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de casa cerca de playa y villa, pero el mercado es más estrecho que en Viana. Un acceso sencillo a playa, buen estado y mantenimiento frente al salitre amplían el abanico; una casa mal situada o muy estacional lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Vila Praia de Âncora (Caminha)",
  a2: "227.474 €",
  a3: "314.964 €",
  b2: "183.729 €",
  b3: "254.394 €",
  m2: "2.692 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Âncora encaja si atrae villa con playa y puerto a pie —paseo, mercado básico, playa metida en la mañana— o si se prefiere una casa más retirada hacia el valle del Âncora, con más espacio y coche para la playa. Hay que elegir dónde se vive porque no se vive igual. Santa Luzia ronda veinte minutos; Porto organiza el vuelo habitual. Frente a Mallorca, el verano es más suave, pero el cambio incluye menos sol continuo, más humedad y agua atlántica fría.",
  "También encaja si se distingue Âncora de Moledo y de la plaza de Caminha, y se tolera el calendario de agosto sin firmar solo por un sábado de sol.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Âncora encaja peor si se busca silencio de colonia de chalés sin núcleo: aquí falta —en el frente hay villa, comercio y afluencia de agosto— y eso importa porque quien compra «playa» pensando en pinar vacío suele llevarse sorpresa. Tampoco si el hospital debe quedar dentro del municipio: Santa Luzia está en Viana. Los servicios son 6/10 —villa con vida anual—; falta hospital local y la autonomía de una ciudad completa.",
  "Tampoco si se espera el oleaje abierto de Moledo sin espigón, o si se decide solo tras un día perfecto de verano sin probar un martes de noviembre en el paseo.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el frente y otra más retirada hacia el valle. Desde cada casa: una bajada a la playa con viento, una compra en el núcleo, y la salida hacia Viana y Porto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto (ocupación, aparcamiento) y un día cubierto de noviembre (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
] as const;

const FOTO_COMO_A = {
  src: "/fotos/alto-minho/ancora-playa.jpg",
  pie: "Playa abrigada de Vila Praia de Âncora",
} as const;

const FOTO_COMO_B = {
  src: "/fotos/alto-minho/ancora-barcas.jpg",
  pie: "Barcas y frente de Vila Praia de Âncora",
} as const;

const FOTO_HIST_A = {
  src: "/fotos/alto-minho/ancora-lagarteira.jpg",
  pie: "Fortaleza de Lagarteira, Âncora",
} as const;

const FOTO_HIST_B = {
  src: "/fotos/alto-minho/zona-ancora.jpg",
  pie: "Frente marítimo de Vila Praia de Âncora",
} as const;

const FOTO_MAR_A = {
  src: "/fotos/alto-minho/ancora-playa-norte.jpg",
  pie: "Orilla norte hacia el espigón de Âncora",
} as const;

const FOTO_MAR_B = {
  src: "/fotos/alto-minho/ancora-tren.jpg",
  pie: "Estación y entorno ferroviario en Âncora",
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

export default function Nuevo2VilaPraiaDeAncoraPage() {
  const ficha = municipioPorSlug("vila-praia-de-ancora");
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
        <Foto src={FOTO_HIST_B.src} pie={FOTO_HIST_B.pie} />
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="2.692 €/m²" />
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
