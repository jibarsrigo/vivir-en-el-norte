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
 * NUEVO2 — Ponte de Lima (Alto Minho, Portugal).
 * Eje: casco junto al puente / plaza (villa a pie, Ecovia, feria)
 * vs quinta o periferia del valle (más espacio, más coche; mar fuera).
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Alto Minho es el norte de Portugal entre el Miño y Viana do Castelo: fortalezas de río, villas de desembocadura, playas de nortada y una ciudad de apoyo con hospital Santa Luzia. El sol es de los más altos de la tabla; la sanidad y el aeropuerto se organizan en clave portuguesa —Porto y Viana—.",
  "Ponte de Lima es una villa de interior minhoto sobre el río Lima: puente de piedra, plaza de la feria, jardines y unas tres mil personas en el núcleo (unas cuarenta y cuatro mil en el concelho). Aquí se gana piedra, río y la autonomía de una villa; a cambio, no hay playa atlántica en el municipio y el verano de valle es más cálido que en la costa.",
  "Lo que más cambia la vida diaria es dónde queda la casa: en el casco junto al puente y la plaza —feria, comercio y Ecovia a pie— o en una quinta o periferia del valle —más espacio y silencio, con la villa y casi todo pidiendo coche—. En ambos sitios se vive en Ponte de Lima; no se vive igual.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Ponte de Lima no se siente una ciudad ni una colonia de playa. El casco se entiende al cruzar el puente de piedra sobre el Lima: calles de villa, plaza de la feria, alameda de plátanos y un paseo fluvial llano. Si se vive cerca, mercado, farmacia, café y la Ecovia do Lima (vía verde peatonal y ciclista junto al río) quedan en el mismo radio a pie. Más lejos, en quinta o periferia del valle, se gana terreno y silencio, pero la plaza y casi cada gestión ya piden coche. Quien llega de fuera descubre enseguida que el mar no está aquí: Cabedelo, en Viana, queda a unos veinticinco minutos.",
  "Un martes de noviembre, en el casco, se puede caminar el puente y la plaza sin sentir que la villa se ha cerrado. Los servicios llegan a 6/10 en nuestra escala: hay villa completa para su tamaño; falta playa en el municipio. Quien elige el casco tiene piedra y río cerca, y renuncia al silencio de una quinta. Quien elige la periferia gana espacio; esa misma mañana la feria pide trayecto.",
  "Sin coche, en el casco caben mercado, farmacia y café andando. Aun así, el coche enlaza Viana, la costa y Porto. El Hospital Conde de Bertiandos cubre atención básica en la propia villa, a unos cinco minutos; para mayor complejidad, Santa Luzia en Viana queda a unos veinticinco o treinta minutos. El aeropuerto de Porto ronda los cincuenta y cinco minutos. Ponte de Lima ofrece villa y río; no ofrece playa atlántica ni hospital de alta complejidad en casa.",
  "La diferencia entre septiembre y noviembre se nota al salir de casa. Las Feiras Novas (hacia mediados de septiembre, fiesta y feria en torno a Nossa Senhora das Dores, con varios días de afluencia nacional) llenan la villa de gente, ruido y aparcamiento difícil. De mayo a octubre, el Festival Internacional de Jardins añade visitantes junto a la Ecovia. Meses después, en un martes de niebla de valle, el puente recupera calma. No son dos Pontes distintas: son dos ritmos del mismo sitio a lo largo del año.",
  "También por eso la elección entre el casco junto al puente y una quinta o periferia cambia bastante la vida diaria. En el casco la plaza y el río quedan metidos en la rutina, a cambio de más movimiento en feria. Fuera se gana espacio, pero la villa pide coche. Esa diferencia acaba importando más que firmar solo por la postal del puente.",
] as const;

const CLIMA_NUEVO2 = [
  "Ponte de Lima supone un cambio de clima claro respecto a Mallorca, y distinto de la costa de Âncora o Afife: aquí manda el valle interior. Hay unas 2.400 horas de sol —aún por debajo de Mallorca—, unos ciento veinte días de lluvia y niebla alta en invierno. El verano es más cálido que en la orilla atlántica: medias alrededor de 21,5 °C y bastantes días por encima de 30 °C. Un día puede empezar con niebla sobre el Lima, abrirse y volver a pedir abrigo sin que eso resulte excepcional.",
  "La diferencia se nota especialmente en verano e invierno. En julio y agosto el valle puede pedir sombra a mediodía de un modo que la costa no exige; en diciembre y enero la niebla marca las mañanas. No hay agua de playa en el municipio: el Lima es río para pasear, no para tender la toalla en una playa oceánica. Quien vive en el casco lo nota al abrir la ventana al puente; quien vive en quinta, al sacar el coche bajo la niebla. Un noviembre en el valle cuenta más que un sábado de sol en las Feiras Novas.",
] as const;

const VIVIR_NUEVO2 = [
  "Cambiar Mallorca por Ponte de Lima no significa únicamente cambiar de clima: se llega a una villa de río y valle —casco junto al puente o quinta más retirada—, no a una playa ni a una ciudad como Viana. En Mallorca puede ser habitual pensar primero en kilómetros entre urbanizaciones; aquí unos pocos minutos separan la plaza de una quinta donde ya hace falta coche para casi todo. Esa elección modifica decisiones tan sencillas como bajar a la feria o ir a Cabedelo.",
  "También cambia el peso del coche respecto a la costa y al hospital. En el casco gran parte del día a día cabe a pie; la playa atlántica y la alta complejidad sanitaria piden salir a Viana. Ir y volver a Mallorca suele pasar por Porto. Se oye portugués de villa; el ambiente es anual, con septiembre muy lleno.",
  "Y cambia mucho el contraste entre estaciones. Las Feiras Novas llenan la villa; en noviembre la niebla y el silencio pesan. Para alguien acostumbrado a Mallorca, la diferencia está en el calor de valle, la ausencia de mar a la puerta y en no confundir el Lima con el Atlántico. Vivir aquí todo el año significa aceptar puente, feria, niebla y trayecto a la costa como partes de una misma vida.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Ponte de Lima se entiende por el puente antes que por el nombre. En el siglo I, en tiempos de Augusto, los romanos levantaron un puente en el itinerario XIX entre Braga (Bracara Augusta) y Astorga; esa obra fijó el punto de cruce del Lima a unos veinticinco kilómetros del Atlántico. La leyenda del río Lethes —el olvido— cuenta que los soldados temían cruzar y Decius Brutus pasó primero para demostrar que la memoria seguía. Quien conozca la villa solo por la feria debe sumar ese origen: el puente hizo el lugar.",
  "La villa como burgo nace el 4 de marzo de 1125, cuando D. Teresa otorgó foral al Lugar de Ponte y protegió a quienes vinieran a la feria: es la primera referencia documental conocida a una feria en el territorio que después sería Portugal. La población se concentró en la margen izquierda del Lima. Piedra, mercado y río organizaron la vida secular durante siglos. No nació como playa: nació como paso y feria de valle.",
  "En 1826, tras petición de los vecinos, D. Pedro IV autorizó prolongar las fiestas de Nossa Senhora das Dores en tres días de feria: nacieron las Feiras Novas, hoy de impacto nacional hacia septiembre. El Festival Internacional de Jardins (mayo–octubre) y las Lagoas de Bertiandos e São Pedro d'Arcos —humedales protegidos a poca distancia, con Ecovia que une villa y lagunas— completan el mapa contemporáneo. Fuera del casco, quintas y viñedo de Loureiro cuentan otra cota: más espacio, más coche, mismo valle con calor de verano y niebla de invierno.",
  "Hoy, comprar «en Ponte de Lima» sigue siendo elegir entre casco junto al puente —villa a pie— o quinta / periferia —holgura y trayectos—. El anuncio del concelho no dice cuál de las dos, ni cómo se siente esa misma calle en Feiras Novas frente a un martes de niebla, ni cuánto pesa Cabedelo cuando apetece mar.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El agua cotidiana de Ponte de Lima es el río Lima, no el Atlántico. Se cruza el puente de piedra, se camina la alameda y la Ecovia do Lima (paseo llano peatonal y ciclista junto al río) y se siente el valle. No hay playa de oleaje en el municipio: quien quiera playa oceánica va a Cabedelo, en Viana, a unos veinticinco minutos. Quien vive en el casco puede bajar al río andando; quien vive en quinta convierte puente y Ecovia en trayecto. Un martes de junio suele haber holgura; un día de Feiras Novas el centro se llena.",
  "Para caminar andando desde el casco, el puente, la plaza y la orilla convierten el Lima en horizonte cotidiano: se cruza la piedra, se mira el agua y se vuelve a casa a pie. El desnivel es suave en la franja fluvial; las estatuas de Decius Brutus y los soldados recuerdan la leyenda del olvido. Desde una quinta ese mismo paseo ya pide coche casi siempre; el día a pie se queda en el jardín y los caminos del valle, con el puente como horizonte lejano.",
  "Las Lagoas de Bertiandos e São Pedro d'Arcos abren humedal protegido y la Ecovia das Lagoas (unos nueve kilómetros que enlazan la villa con Fontão pasando por Bertiandos). El Festival de Jardins se visita junto al río de mayo a octubre. Viana aporta hospital de mayor nivel y Cabedelo; Braga queda a unos cincuenta minutos. Aquí el día a día pide elegir casco o quinta; el mar no entra en la puerta.",
  "En el casco el Lima queda a pocos minutos a pie casi todos los días; en la periferia el jardín queda delante y el puente pide coche. Esa diferencia describe mejor Ponte de Lima que venderla como costa minhota. Conde de Bertiandos cubre lo básico en la villa; Santa Luzia, en Viana, la complejidad; Porto organiza el vuelo habitual hacia Palma.",
] as const;

const CASA_NUEVO2 = [
  "En Ponte de Lima el puente y la plaza no quedan igual de cerca desde cualquier puerta. Una casa en el casco permite cruzar el Lima andando, hacer la feria y usar la Ecovia a pie. Una quinta o vivienda en la periferia del valle gana terreno y silencio, pero convierte cada bajada a la villa —y la salida a Cabedelo— en trayecto. El anuncio que diga solo «Ponte de Lima» puede ocultar esa distancia real.",
  "En el casco importan humedad de río, aparcamiento en Feiras Novas y accesibilidad de piedra. En quinta pesan orientación, aislamiento, niebla de valle y distancias reales a Viana. La fibra está señalada como sí; conviene confirmarla. Hay poca obra nueva.",
  "El precio medio de referencia ronda 1.626 €/m². Con esa media, las columnas A y B sitúan viviendas de dos y tres habitaciones según la distancia a la costa (aquí la costa deseada suele ser Cabedelo, no la orilla del Lima). El metro no describe igual un piso junto al puente y una quinta.",
  "Antes del precio conviene recorrer la rutina desde la casa: el puente, la plaza, Cabedelo y la salida hacia Porto. En septiembre, las Feiras Novas; en noviembre, la niebla. Ponte de Lima premia elegir bien respecto al casco; castiga comprar como si el valle entero fuera igual.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "Casco junto al puente y quinta / periferia no son intercambiables. Una vivienda «en Ponte de Lima» puede significar plaza a pie o coche para casi todo. Comparar solo el precio inventa un municipio que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el puente, la plaza, Cabedelo, Santa Luzia y Porto. En el casco, humedad y aparcamiento de feria. Fuera, dependencia del coche y niebla de valle. También la luz, el aislamiento y cómo se vive esa misma calle en Feiras Novas y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de villa histórica de río, pero lo que decide es el inmueble concreto. Un acceso sencillo al casco o a la quinta deseada, buen estado y luz amplían el abanico; una casa mal situada respecto a la rutina elegida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; aquí «costa» suele leerse como Cabedelo (Viana). Una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Ponte de Lima",
  a2: "137.397 €",
  a3: "190.242 €",
  b2: "110.975 €",
  b3: "153.657 €",
  m2: "1.626 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Ponte de Lima encaja si atrae villa de río con puente y plaza a pie —feria, Ecovia y vida diaria a pie— o si se prefiere quinta o periferia del valle, con más espacio y coche para la villa. Hay que elegir dónde se vive porque no se vive igual. Conde de Bertiandos queda cerca; Santa Luzia y Cabedelo, en Viana, a unos veinticinco minutos; Porto organiza el vuelo. Frente a Mallorca, el verano de valle es más cálido que la costa, con niebla de invierno.",
  "También encaja si se acepta no tener playa atlántica en el municipio y se tolera el calendario de Feiras Novas sin firmar solo por un sábado de sol en el puente.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Ponte de Lima encaja peor si se busca playa atlántica a la puerta: aquí falta —el Lima es río de paseo, no arenal de oleaje; Cabedelo queda a unos veinticinco minutos— y eso importa porque quien compra «Minho» pensando en playa debajo suele llevarse sorpresa. Tampoco si el hospital de mayor nivel debe quedar dentro del municipio: Santa Luzia está en Viana. Los servicios son 6/10 —villa completa—; falta playa local y la autonomía de una ciudad grande.",
  "Tampoco si el calor de valle en julio-agosto o la niebla de diciembre-enero resultan incompatibles, o si se decide solo tras Feiras Novas sin probar un martes de noviembre.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el casco y otra en quinta o periferia. Desde cada casa: una compra en la plaza, un paseo por el puente y la Ecovia, y la salida hacia Cabedelo o Porto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en Feiras Novas (afluencia) y un día de niebla en noviembre (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
] as const;

const FOTO_COMO_A = {
  src: "/fotos/alto-minho/ponte-puente.jpg",
  pie: "Puente de piedra sobre el Lima, Ponte de Lima",
} as const;

const FOTO_COMO_B = {
  src: "/fotos/alto-minho/ponte-calles.jpg",
  pie: "Calles del casco de Ponte de Lima",
} as const;

const FOTO_HIST_A = {
  src: "/fotos/alto-minho/ponte-villa.jpg",
  pie: "Ponte de Lima: villa sobre el Lima",
} as const;

const FOTO_HIST_B = {
  src: "/fotos/alto-minho/ponte-jardines.jpg",
  pie: "Jardines y orilla del Lima en Ponte de Lima",
} as const;

const FOTO_MAR_A = {
  src: "/fotos/alto-minho/ponte-rio.jpg",
  pie: "Río Lima a su paso por Ponte de Lima",
} as const;

const FOTO_MAR_B = {
  src: "/fotos/alto-minho/ponte-bertiandos-humedal.jpg",
  pie: "Lagoas de Bertiandos al amanecer, Ponte de Lima",
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

export default function Nuevo2PonteDeLimaPage() {
  const ficha = municipioPorSlug("ponte-de-lima");
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="1.626 €/m²" />
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
