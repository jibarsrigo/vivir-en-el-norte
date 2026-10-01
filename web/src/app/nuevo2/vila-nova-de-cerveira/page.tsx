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
 * NUEVO2 — Vila Nova de Cerveira (Alto Minho, Portugal).
 * Eje: casco fluvial (Miño, praia fluvial, villa a pie, Goián al puente) vs fuera del casco / ladera (más espacio, coche para casi todo).
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Alto Minho es el norte de Portugal entre el Miño y Viana do Castelo: fortalezas de río, villas de desembocadura, playas de nortada y una ciudad de apoyo con hospital Santa Luzia. El sol es de los más altos de la tabla; la sanidad y el avión se organizan en clave portuguesa —Porto y Viana—.",
  "Vila Nova de Cerveira es una villa fluvial de unos nueve mil habitantes frente a Goián, con castillo, Aquamuseu, praia de río y calendario de arte. No es Valença ni Caminha: aquí se gana Miño cuidado y puente a Galicia; a cambio, el Atlántico queda como salida y el comercio es de villa pequeña, no de ciudad.",
  "Lo que más cambia la vida diaria es dónde queda la casa: en el casco junto al río —paseo, praia fluvial, gestiones a pie, más afluencia en feria y Bienal— o fuera del casco, hacia ladera o ensanche retirado —más espacio y silencio, con el Miño y la compra pidiendo coche—. En ambos sitios se vive en Cerveira; no se vive igual.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Cerveira no se siente una urbanización de chalés ni una ciudad completa. El casco se asoma al Miño con calles de villa, el castillo cerca y el puente de la Amizade hacia Goián, la villa gallega al otro lado, a unos dos minutos. Se pasa por la farmacia, se compra el pan, se toma un café y se baja al paseo fluvial sin sacar el coche. Fuera del núcleo, hacia ladera o viviendas más retiradas, se gana parcela y calma, pero casi cada compra o bajada al río pide sacar el coche. Quien llega de fuera descubre enseguida que hay que elegir la cota respecto al agua.",
  "Un martes de noviembre, en el casco, se puede caminar la orilla, cruzar a Goián a comprar o pasear, y notar que la villa no se ha apagado del todo. Los servicios llegan a 5/10 en nuestra escala: hay lo básico de villa cuidada; falta gran superficie y hospital aquí mismo. Quien elige el casco tiene río y gestiones cerca, y no tiene la autonomía de Valença o de Viana. Quien elige fuera del casco gana silencio; esa misma mañana el súper serio puede pedir bajar o salir.",
  "Sin coche, en el casco farmacia, pan, café y paseo fluvial quedan cerca andando. Goián refuerza la feria de los sábados a dos minutos por el puente. Aun así, el coche enlaza Viana, Moledo y Porto. El hospital práctico es Santa Luzia, en Viana do Castelo, a unos treinta y cinco minutos. El aeropuerto de Vigo ronda los cuarenta y cinco minutos; Porto, unos setenta. Cerveira ofrece Miño y arte a escala de villa; no ofrece océano a la puerta.",
  "La diferencia entre verano y noviembre se nota al salir de casa. En los veranos de años impares la Bienal Internacional de Arte (desde 1978, de las más antiguas de la península en su tipo) llena exposiciones, visitas y mesas durante semanas; en agosto la Festa da História recrea feria medieval en el casco; los sábados la feria de fruta, ropa y artesanía atrae también a vecinos de Baixo Miño, y encontrar aparcamiento en el casco se vuelve más difícil. Meses después, en un martes húmedo, el río recupera calma. No son dos Cerveiras distintas: son dos ritmos del mismo sitio a lo largo del año.",
  "También por eso la elección entre casco fluvial y fuera del núcleo cambia bastante la vida diaria. Junto al río el paseo y la villa quedan metidos en la rutina, a cambio de más movimiento en feria o Bienal. Fuera se gana espacio, pero el Miño pide trayecto. Esa diferencia acaba importando más que la media de precios del municipio.",
] as const;

const CLIMA_NUEVO2 = [
  "Cerveira supone un cambio de clima claro respecto a Mallorca, pero distinto del de Moledo: aquí manda el valle del Miño, no la nortada oceánica. Hay menos sol continuo —unas 2.450 horas frente a las unas 2.800 de Mallorca—, lluvia frecuente —unos ciento dieciocho días— y humedad de río que se nota en casa. La niebla de mañana es media. El viento es bajo. Un día puede empezar cerrado sobre el agua, abrirse a mediodía y volver a pedir abrigo sin que eso resulte excepcional.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 20,5 °C: más suave que Valença en muchos días, pero sin el alivio constante de la costa abierta. Quien vive junto al río lo nota al pasear la praia fluvial; quien vive retirado, al sacar el coche bajo la lluvia. Un frente gris de noviembre cuenta más que un fin de semana de Bienal con sol.",
] as const;

const VIVIR_NUEVO2 = [
  "Cambiar Mallorca por Cerveira no significa únicamente cambiar de clima: se llega a una villa fluvial pequeña —casco junto al Miño o casa más retirada—, no a una capital. En Mallorca puede ser habitual pensar primero en kilómetros; aquí unos pocos minutos separan el paseo del río de una ladera con jardín. Esa elección modifica decisiones tan sencillas como bajar a la praia fluvial o ir a la feria del sábado.",
  "También cambia el peso del coche respecto a la frontera y al hospital. En el casco se resuelve más a pie y Goián refuerza; fuera, casi todo pide salir. Santa Luzia queda a unos treinta y cinco minutos. Ir y volver a Mallorca suele pasar por Porto; Vigo queda como apoyo geográfico de frontera. Se oye portugués; Galicia enfrente se camina y se entiende en muchas gestiones cotidianas.",
  "Y cambia mucho el contraste entre estaciones. La Bienal y agosto llenan el casco; en noviembre la villa sigue habitada aunque más quieta. Para alguien acostumbrado a Mallorca, la diferencia está en la escala: aquí el arte y el río pesan más que el océano. Vivir aquí todo el año significa aceptar villa pequeña, puente y humedad de Miño como partes de una misma vida.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Cerveira nació como plaza de frontera sobre el Miño: castillo medieval para vigilar la orilla frente a Galicia, foral de D. Dinis en 1321 —el Día del Municipio sigue el 1 de octubre— y, siglos después, refuerzos hacia la vecina fortaleza de Goián cuando el río todavía era línea de guerra. No nació como colonia de arte ni como urbanización de veraneo: nació como villa de río y de defensa. Quien camine el casco un martes de enero verá esa piedra antes que cualquier cartel de exposición.",
  "El Aquamuseu do Rio Minho —abierto en 2005 en el Parque do Castelinho, con charca interpretativa y visita al oficio de la pesca fluvial— convirtió el agua en lectura cotidiana: no es un adorno de fin de semana, es el museo que cuenta por qué el Miño manda aquí. El puente de la Amizade hizo de Goián continuación a pie o en coche de dos minutos, no plan de día entero. Quien conozca Cerveira solo por una foto de Bienal debe sumar castillo, Aquamuseu, feria del sábado y esa frontera suave.",
  "La Bienal Internacional de Arte, desde 1978 —nacida de los Encontros Internacionais cuando Jaime Isidoro llevó la creación contemporánea a una villa minhota—, añadió la capa que hoy se ve en calles y salas. En años impares el calendario se estira con exposiciones y mesas llenas; en años pares quedan la villa, el río y la feria. El Alto do Cervo —mirador sobre la vega— completa la lectura cuando se quiere altura sin salir lejos. Fuera del casco, la ladera cuenta otra historia: más silencio, menos puerta al agua, más coche para casi cada gestión del día.",
  "Hoy, comprar «en Cerveira» sigue siendo elegir entre casco fluvial con villa a pie o vivienda más retirada con más coche. El anuncio no dice cuál de las dos —ni cómo se siente esa misma calle en noviembre frente a una semana de Bienal, ni cuánto pesa Goián en la compra real—.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El agua cotidiana de Cerveira es el Miño, no el Atlántico. Desde el casco la praia fluvial —orilla acondicionada en temporada, agua de río más templada que el océano, Galicia enfrente— y el paseo llano junto al agua meten el río en el día a día: se baja, se camina, se siente el valle. No es playa de dunas ni de nortada: es baño y paseo de frontera cuando las condiciones lo permiten. Quien vive retirado convierte esa orilla en trayecto. Un martes de junio suele haber holgura; un sábado de feria o un día de Bienal el casco y el aparcamiento se llenan.",
  "Para caminar andando desde el casco, la Ecopista do Rio Minho —antigua vía de tren reconvertida en camino llano para andar o ir en bicicleta junto al río— y el frente fluvial ofrecen terreno amable: poco desnivel, sombra a ratos bajo los árboles, el agua a un lado y, a ratos, pescadores o gente de Goián cruzando. No es costa de oleaje: es río ancho con viento suave de valle. Desde una casa en ladera ese paseo ya pide coche casi siempre; el día a pie se queda en el jardín y en la vista, no en la orilla.",
  "Si se quiere altura o mar, el trayecto cuenta. El Alto do Cervo —mirador sobre la vega del Miño, a pocos minutos de subida desde el casco— cambia la vista sin pedir sierra seria. Moledo —a unos veinte minutos— cubre dunas, pinar y oleaje cuando se quiere Atlántico de verdad. Valença añade la fortaleza y el comercio dentro de sus murallas. Aquí el día a día pide elegir casco o fuera del núcleo; Santa Luzia, en Viana, queda a unos treinta y cinco minutos cuando hace falta hospital de mayor nivel.",
  "En el casco el río queda a pocos minutos a pie casi todos los días; fuera, el jardín queda delante y la praia fluvial pide coche. Esa diferencia describe mejor Cerveira que contar playas oceánicas que no están en la puerta. Santa Luzia cubre la sanidad de referencia cuando aquí no alcanza; Porto organiza el vuelo habitual hacia Palma.",
] as const;

const CASA_NUEVO2 = [
  "En Cerveira la diferencia práctica es si la casa permite bajar al Miño andando —casco, praia fluvial, feria del sábado a pie— o si cada bajada al río y cada compra piden coche porque se vive en ladera o ensanche retirado. Un anuncio que solo diga «Vila Nova de Cerveira» puede ocultar esa distancia real al agua y al comercio de villa.",
  "En el casco importan humedad de río, aparcamiento en feria o Bienal, y accesibilidad. Fuera pesan orientación, aislamiento y dependencia del coche. La fibra está señalada como sí; conviene confirmarla. Hay poca obra nueva.",
  "El precio medio de referencia ronda 1.339 €/m². Con esa media, las columnas A y B sitúan viviendas de dos y tres habitaciones según la distancia a la costa —el Atlántico queda fuera; la franja B describe mejor el municipio—. El metro no describe igual un piso junto al Miño y una casa en ladera.",
  "Antes del precio conviene recorrer la rutina desde la casa: la feria del sábado, el puente a Goián, y la salida hacia Viana o Porto. En agosto o Bienal, la afluencia del casco; en noviembre, la humedad. Cerveira premia elegir bien la cota respecto al río; castiga comprar solo la media.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "Casco fluvial y vivienda retirada no son intercambiables. Una vivienda «en Cerveira» puede significar praia fluvial a pie, o jardín con coche para casi cada bajada al río. Comparar solo el precio inventa un municipio que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el casco, la praia fluvial, Goián, Santa Luzia y el aeropuerto que se vaya a usar. En el casco, humedad y aparcamiento de feria o Bienal. Fuera, dependencia del coche. También la luz, el aislamiento y cómo se vive esa misma calle un martes de noviembre y una semana de exposición.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de villa fluvial cuidada entre Tui y Caminha, pero lo que decide es el inmueble concreto. Un acceso sencillo al río o al casco usable, buen estado y luz amplían el abanico; una casa mal situada respecto a la rutina elegida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Vila Nova de Cerveira",
  a2: "113.146 €",
  a3: "156.663 €",
  b2: "91.387 €",
  b3: "126.536 €",
  m2: "1.339 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Cerveira encaja si atrae el casco junto al Miño —paseo, praia fluvial, villa a pie y Goián al puente— o si se prefiere una casa más retirada, con más espacio y coche para el río. Hay que elegir dónde se vive porque no se vive igual. Santa Luzia ronda treinta y cinco minutos; Porto organiza el vuelo habitual. Frente a Mallorca, el cambio incluye menos sol continuo, más humedad de valle y océano fuera de la puerta.",
  "También encaja si se tolera el calendario —feria de los sábados, Bienal en años impares, Festa da História en agosto— y la escala pequeña de villa no se confunde con ciudad completa.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Cerveira encaja peor si se busca playa atlántica cotidiana: aquí falta —el agua de diario es el Miño; Moledo queda a unos veinte minutos— y eso importa porque quien confunde praia fluvial con dunas abiertas suele llevarse sorpresa. Tampoco si el hospital debe quedar dentro del municipio: Santa Luzia está en Viana. Los servicios son 5/10 —villa básica—; falta gran comercio y autonomía de ciudad.",
  "Tampoco si se decide solo tras un fin de semana de Bienal sin probar un martes gris de río en noviembre.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el casco y otra fuera del núcleo. Desde cada casa: una compra sencilla, el puente a Goián, y la salida hacia Viana y Porto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en feria o Bienal (afluencia) y un día cubierto de noviembre (luz, humedad). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
] as const;

const FOTO_COMO_A = {
  src: "/fotos/alto-minho/cerveira-villa.jpg",
  pie: "Vila Nova de Cerveira sobre el Miño",
} as const;

const FOTO_COMO_B = {
  src: "/fotos/alto-minho/vila-nova-de-cerveira-identidad.jpg",
  pie: "Casas junto al Miño en Vila Nova de Cerveira",
} as const;

const FOTO_HIST_A = {
  src: "/fotos/alto-minho/cerveira-arte.jpg",
  pie: "Arte y villa en Vila Nova de Cerveira",
} as const;

const FOTO_HIST_B = {
  src: "/fotos/alto-minho/cerveira-aquamuseu.jpg",
  pie: "Aquamuseu de Vila Nova de Cerveira",
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

export default function Nuevo2VilaNovaDeCerveiraPage() {
  const ficha = municipioPorSlug("vila-nova-de-cerveira");
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="1.339 €/m²" />
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
