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
 * NUEVO2 — Viana do Castelo (Alto Minho, Portugal).
 * Eje: casco / río Lima (ciudad a pie, Santa Luzia, mercado) vs Cabedelo u orilla atlántica (playa/surf; trayecto o puente respecto al centro).
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Alto Minho es el norte de Portugal entre el Miño y Viana do Castelo: fortalezas de río, villas de desembocadura, playas de nortada y una ciudad de apoyo con hospital Santa Luzia. El sol es de los más altos de la tabla; la sanidad y el avión se organizan en clave portuguesa —Porto y Viana—.",
  "Viana do Castelo es la ciudad de referencia del Alto Minho: Praça da República, puente Eiffel sobre el Lima, buque-hospital Gil Eannes, mercado y el monte de Santa Luzia —basílica y mirador— cerrando el horizonte. No es una villa de dunas: es una ciudad con río, mar y hospital propios.",
  "Lo que más cambia la vida diaria es dónde queda la casa: en el casco junto al Lima —ciudad a pie, servicios densos— o hacia Cabedelo u orilla atlántica —playa y surf, con el centro pidiendo trayecto o puente—. En ambos sitios se vive en Viana; no se vive igual.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Viana se siente una ciudad completa, no una colonia de chalés. Quien vive en el casco junto al Lima puede hacer a pie el mercado, el comercio, los restaurantes, el paseo de río y, a pocos minutos, llegar al Hospital de Santa Luzia. El puente Eiffel y el Gil Eannes anclan el frente fluvial. Más hacia Cabedelo —playa atlántica al otro lado del estuario— o hacia franjas costeras, la playa queda a pocos minutos andando y el casco pide trayecto. Quien llega de fuera no debe confundir «vivir en Viana» con tener Cabedelo bajo la ventana.",
  "Un martes de noviembre, en el casco, la ciudad funciona: no depende de agosto. Los servicios llegan a 9/10 —no falta nada en la escala cotidiana—. Quien elige el centro puede hacer compra y gestiones sin depender del coche. Quien elige Cabedelo gana playa; esa misma mañana el mercado serio pide cruzar o conducir.",
  "Sin coche, en el casco bien situado caben compra, mercado y buena parte de las gestiones andando. El tren y el bus ayudan; Cabedelo no siempre se resuelve andando sin plan. El hospital práctico está en la propia ciudad. El aeropuerto de Porto ronda los cincuenta minutos. Viana ofrece ciudad y hospital; la playa atlántica cotidiana depende de microzona.",
  "La diferencia entre julio y noviembre se nota sobre todo en el frente de playa y en los días de fiesta. Hacia el 20 de agosto, la Romaria de Nossa Senhora da Agonia (feriado municipal, procisión al mar, gigantes y afluencia de todo el Minho) llena calles y Ribeira; encontrar aparcamiento se vuelve más difícil. En el casco la vida anual se mantiene el resto del año. Meses después, un martes húmedo muestra ciudad abierta, no colonia vacía. No son dos Vianas distintas: son dos ritmos según barrio y temporada.",
  "También por eso la elección entre casco y Cabedelo cambia bastante la vida diaria. En el centro el Lima y los servicios quedan metidos en la rutina. En Cabedelo la playa queda a pocos minutos andando, a cambio de más coche o trayecto al mercado. Esa diferencia acaba importando más que la media de precios de la ciudad.",
] as const;

const CLIMA_NUEVO2 = [
  "Viana supone un cambio de clima claro respecto a Mallorca: costa y estuario con unas 2.500 horas de sol —aún por debajo de Mallorca—, lluvia frecuente en invierno y nortada en la franja atlántica. En el casco el río trae humedad; en Cabedelo, viento y salitre. Un día puede empezar cubierto y terminar con viento de tarde.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 20,5 °C: no pasas el calor de Baleares. El agua suele estar entre 16 y 18 °C. Quien vive en el casco lo nota en el paseo del Lima; quien vive en Cabedelo, en la playa abierta. Un enero en el centro cuenta más que un sábado de sol en Santa Luzia.",
] as const;

const VIVIR_NUEVO2 = [
  "Cambiar Mallorca por Viana no significa únicamente cambiar de clima: se llega a una ciudad portuguesa completa —casco o Cabedelo—, no a una villa sin hospital. En Mallorca puede ser habitual pensar primero en playa a pie; aquí la playa atlántica cotidiana depende del barrio. Esa elección modifica decisiones tan sencillas como bajar a Cabedelo o ir al mercado andando.",
  "También cambia el peso del coche. En el casco se resuelve casi todo a pie; Santa Luzia está cerca. Ir y volver a Mallorca suele pasar por Porto. Se oye portugués de ciudad; el ambiente es anual, con verano más lleno en la costa.",
  "Y cambia el contraste entre estaciones. Agosto llena playas; el casco no se apaga en noviembre. Para alguien acostumbrado a Mallorca, la diferencia está en menos sol continuo, más humedad y en elegir bien entre río y Atlántico. Vivir aquí todo el año significa aceptar ciudad minhota con microzonas distintas bajo el mismo nombre.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Viana do Castelo se entiende por su papel de ciudad de río y mar: puerto histórico, Praça da República, comercio y una escala que sostiene hospital, cultura y mercado. El puente Eiffel sobre el Lima —estructura metálica del siglo XIX asociada a la escuela Eiffel— convierte el estuario en escena cotidiana, no solo en postal. Quien conozca Viana solo por Santa Luzia debe sumar esa vida de ciudad fluvial y marinera a la vez. Conviene recordar fechas y oficios locales: no basta la foto de fin de semana para entender por qué la gente se queda en invierno.",
  "El monte de Santa Luzia —basílica, funicular y mirador; citania en el entorno— cierra el horizonte sobre la ciudad: es hito religioso y de vista, no un barrio más. El buque-hospital Gil Eannes, amarrado como museo, recuerda la vocación marítima y sanitaria del puerto. No es inventario de atracciones: es memoria de oficio y ciudad que miraba al Atlántico y al Lima.",
  "Cabedelo, al otro lado del estuario, cuenta otra historia residencial: playa de surf y kite, más exposición al viento, menos plaza de piedra bajo la ventana. Praia Norte aporta piscinas de marea y frente urbano distinto. Confundir casco y Cabedelo es el error habitual del visitante de fin de semana.",
  "Hoy, comprar «en Viana» sigue siendo elegir entre casco / río —ciudad a pie, Santa Luzia cerca— o Cabedelo / orilla atlántica —playa cerca, más trayecto al centro—. El anuncio de ciudad no dice cuál de las dos —ni cómo se siente esa misma calle en enero frente a un sábado de agosto, ni cuánto pesa el puente o el coche hacia Cabedelo—. La Praça da República y el tejido comercial del casco explican por qué Viana sostiene vida anual sin depender solo del mirador: es ciudad de mercado y oficina, no solo de visita. El funicular a Santa Luzia convierte la subida en algo cotidiano cuando se quiere vista, no en una excursión excepcional.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El agua en Viana no es un solo paisaje. En el casco el Lima organiza el día: paseo fluvial, puente, estuario —río que se ensancha hacia el Atlántico—. No es una playa de oleaje bajo la ventana del centro: es río y ciudad. Quien vive en Cabedelo tiene Atlántico abierto a pocos minutos: surf, viento, agua 16–18 °C. Quien vive solo en el casco convierte Cabedelo en salida. Un martes de junio suele haber holgura en playa; un domingo de agosto el acceso se llena. Esa lectura de orilla concreta —qué agua, qué viento, qué aparcamiento— pesa más que el nombre del municipio en el anuncio.",
  "Para caminar andando desde el casco, la marginal del Lima y el centro convierten río y piedra en horizonte cotidiano. Santa Luzia pide subida o funicular cuando se quiere vista. Desde Cabedelo el paseo es de duna y oleaje; el casco queda al otro lado del estuario.",
  "Para gestiones o otro tipo de orilla, la ciudad cubre casi todo: hospital, mercado, cultura. Ponte de Lima aporta valle y Ecovia a unos veinticinco o treinta minutos. Âncora y Caminha amplían costa hacia el norte. Aquí el día a día pide elegir casco o Cabedelo; Santa Luzia cubre la sanidad de referencia en la propia ciudad.",
  "En el casco los servicios quedan a pie casi todos los días; en Cabedelo la playa queda a pocos minutos andando y el mercado serio pide trayecto. Esa diferencia describe mejor Viana que firmar solo por la media de precios o por una foto de la basílica. Porto organiza el vuelo habitual hacia Palma. Praia Norte, con piscinas de marea cuando el Atlántico aprieta, ofrece otra forma de baño urbano distinta de Cabedelo. Quien viva en el casco puede usarlas como salida corta; quien viva en Cabedelo las convierte en opción, no en puerta. El estuario del Lima pide leer mareas y viento antes de inventar un plan de playa desde cualquier barrio.",
] as const;

const CASA_NUEVO2 = [
  "Viana es una ciudad con microzonas distintas. Un piso en el casco junto al Lima permite compra, gestiones y ocio diario andando —con humedad de río incluida—. Una casa o piso hacia Cabedelo acerca la playa y aleja parte del comercio denso. El anuncio que diga solo «Viana do Castelo» puede ocultar esa distancia.",
  "En el casco importan accesibilidad, ruido, luz y aparcamiento. En Cabedelo pesan salitre, viento y trayecto real al centro. La fibra está señalada como sí; hay obra nueva. Conviene confirmar el edificio concreto.",
  "El precio medio de referencia ronda 2.337 €/m². Con esa media, las columnas A y B sitúan viviendas de dos y tres habitaciones según la distancia a la costa —aquí la franja A describe mejor orilla y zonas próximas—. El metro no describe igual un piso de casco y uno en Cabedelo.",
  "Antes del precio conviene recorrer la rutina desde la casa: el mercado, Cabedelo o Praia Norte, y la salida hacia Porto. En agosto, la ocupación en playa; en noviembre, la luz y la humedad. Viana premia elegir bien el barrio; castiga comprar solo la media municipal.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "Casco y Cabedelo no son intercambiables. Una vivienda «en Viana» puede significar ciudad a pie sin playa atlántica bajo la ventana, o playa cerca con trayecto al mercado. Comparar solo el precio inventa una ciudad que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta mercado, hospital, Cabedelo y Porto. En el casco, aparcamiento y ruido. En Cabedelo, salitre, viento y trayecto. También la luz, el aislamiento y cómo se vive esa misma calle un domingo de agosto y un martes de enero.";

const CASA_MERCADO_REVENTA =
  "Hay demanda amplia por ciudad con hospital y playa cercana. Un acceso sencillo a servicios o a playa, buen estado y explicación clara del barrio amplían el abanico; una casa mal situada o difícil de mantener lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Viana do Castelo",
  a2: "197.477 €",
  a3: "273.429 €",
  b2: "159.500 €",
  b3: "220.847 €",
  m2: "2.337 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Viana encaja si atrae ciudad completa con el Lima o con Cabedelo según se elija —servicios densos, Santa Luzia cerca, playa como microzona—. Hay que elegir dónde se vive porque no se vive igual. Porto organiza el vuelo habitual. Frente a Mallorca, el verano es más suave, pero el cambio incluye menos sol continuo, más humedad y viento en la costa.",
  "También encaja si se acepta densidad urbana frente a villa quieta y se prueba un enero en el barrio elegido.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Viana encaja peor si se busca aldea de granito sin tráfico ni bloques: aquí hay ciudad —servicios 9/10— y eso importa porque quien espera silencio de Afife suele llevarse sorpresa. Tampoco si se espera playa atlántica a pie desde cualquier piso del casco: Cabedelo y Praia Norte dependen de microzona.",
  "Tampoco si se decide solo tras un sábado soleado en Santa Luzia sin probar un martes de noviembre en la calle concreta.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el casco y otra hacia Cabedelo. Desde cada casa: una compra, una bajada a la playa que se usaría, y la salida hacia Porto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto (ocupación en playa) y un día cubierto de noviembre (luz, humedad, mesas). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
] as const;

const FOTO_COMO_A = {
  src: "/fotos/alto-minho/viana-santa-luzia.jpg",
  pie: "Basílica de Santa Luzia sobre Viana do Castelo",
} as const;

const FOTO_COMO_B = {
  src: "/fotos/alto-minho/viana-eiffel.jpg",
  pie: "Puente Eiffel sobre el Lima, Viana",
} as const;

const FOTO_HIST_A = {
  src: "/fotos/alto-minho/viana-gil-eannes.jpg",
  pie: "Buque-hospital Gil Eannes, Viana",
} as const;

const FOTO_MAR_A = {
  src: "/fotos/alto-minho/viana-cabedelo.jpg",
  pie: "Cabedelo, al otro lado del Lima",
} as const;

const FOTO_MAR_B = {
  src: "/fotos/alto-minho/viana-praia-norte.jpg",
  pie: "Praia Norte, Viana do Castelo",
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

export default function Nuevo2VianaDoCasteloPage() {
  const ficha = municipioPorSlug("viana-do-castelo");
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="2.337 €/m²" />
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
