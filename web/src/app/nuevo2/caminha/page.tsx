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
 * NUEVO2 — Caminha (Alto Minho, Portugal).
 * Eje: casco junto a la desembocadura / estuario del Miño (plaza, Torre, villa a pie) vs ensanche o zona más alejada (más coche para plaza y para Moledo).
 * Estuario = tramo donde el Miño se ensancha y se abre al Atlántico (orilla de río hacia el mar, no playa de oleaje).
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Alto Minho es el norte de Portugal entre el Miño y Viana do Castelo: fortalezas de río, villas de desembocadura, playas de nortada y una ciudad de apoyo con hospital Santa Luzia. El sol es de los más altos de la tabla; la sanidad y el avión se organizan en clave portuguesa —Porto y Viana—.",
  "Caminha es la villa de la desembocadura: unos dieciséis mil habitantes en el concelho, plaza histórica, Torre do Relógio e iglesia matriz. Aquí el Miño se ensancha y se abre al Atlántico: eso es el estuario —orilla de río ancho hacia el mar, para pasear y a veces bañarse con agua más recogida; no es la playa de oleaje de Moledo—. No es Moledo ni Âncora: aquí se gana piedra de villa y esa orilla de desembocadura; a cambio, la gran playa oceánica suele pedir salida y el hospital queda en Viana.",
  "Lo que más cambia la vida diaria es dónde queda la casa: en el casco junto a esa orilla —plaza, comercio de villa, ribera a pie— o en un ensanche más alejado del centro —más espacio, con la plaza y Moledo pidiendo coche—. En ambos sitios se vive en Caminha; no se vive igual. Moledo y Âncora, aunque compartan concelho, merecen lectura propia.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Caminha no se siente una colonia de chalés ni un apéndice de Moledo. El casco es villa de piedra junto a la desembocadura: la plaza, la Torre do Relógio (antiguo torreón de la cerca medieval, con reloj desde el siglo XVII) y calles donde el Miño ya se ve ancho hacia el mar. El día a día puede organizarse a pie: se hace mercado, se pasa por la farmacia, se toma un café y se baja a la ribera. Más lejos del centro, en ensanche o calles retiradas, se gana holgura, pero la plaza y la gran playa oceánica de Moledo piden trayecto. Quien llega de fuera descubre enseguida que hay que elegir dónde se vive dentro del mismo concelho.",
  "Un martes de noviembre, en el casco, se puede caminar la plaza y bajar a la ribera del Miño sin sentir que la villa se ha cerrado del todo. Los servicios llegan a 5/10 en nuestra escala: hay vida de villa histórica; falta hospital en el municipio y el comercio denso de Viana. Quien elige el casco tiene piedra y desembocadura cerca, y no tiene la toalla de Moledo debajo de la ventana. Quien elige más retirado gana espacio; esa misma mañana la compra del casco pide coche.",
  "Sin coche, en el casco plaza, mercado, farmacia y ribera quedan cerca andando. Aun así, el coche o el tren de la Linha do Minho enlazan Moledo, Âncora, Viana y Porto. El hospital práctico es Santa Luzia, en Viana do Castelo, a unos treinta minutos. El aeropuerto de Porto ronda los sesenta y cinco minutos; Vigo queda más lejos que desde Valença. El ferry hacia A Guarda, cuando opera, recuerda Galicia enfrente; no sustituye el coche el resto de la semana. Caminha ofrece desembocadura y plaza; no ofrece hospital local.",
  "La diferencia entre agosto y noviembre se nota al salir de casa. En agosto crecen las fiestas del concelho (Santa Rita hacia el segundo fin de semana, entre otras) y aumenta quien baja a Moledo o Âncora; encontrar aparcamiento cerca de las playas se vuelve más difícil. Meses después, en un martes húmedo, el casco recupera calma: las mesas siguen, pero la ribera de la desembocadura se nota más vacía. No son dos Caminhas distintas: son dos ritmos del mismo sitio a lo largo del año.",
  "También por eso la elección entre el casco junto a la desembocadura y una zona más retirada cambia bastante la vida diaria. En el casco la plaza y la ribera quedan metidas en la rutina, a cambio de más movimiento en agosto. Fuera se gana espacio, pero Moledo y la plaza piden coche. Esa diferencia acaba importando más que mezclar Caminha con Moledo en una sola idea.",
] as const;

const CLIMA_NUEVO2 = [
  "En Caminha el contraste con Mallorca se nota primero en la desembocadura: humedad, viento medio y un cielo atlántico más abierto que el valle interior, pero lejos del sol seco de Baleares. Hay unas 2.500 horas de sol —aún por debajo de las unas 2.800 de Mallorca—, unos ciento doce días de lluvia y una humedad que se nota en casa cerca del agua. La niebla es media. Un día puede empezar gris sobre el Miño ensanchado, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 20,5 °C: no pasas el calor de Mallorca. El agua del Atlántico cerca suele estar entre 16 y 18 °C; la orilla del estuario —ese tramo donde el río se abre al mar— se siente más recogida que el oleaje de Moledo. Quien vive en el casco lo nota al abrir la ventana al río ancho; quien vive retirado, al sacar el coche bajo la lluvia. Un frente gris de noviembre cuenta más que un sábado de sol en la plaza.",
] as const;

const VIVIR_NUEVO2 = [
  "Cambiar Mallorca por Caminha no significa únicamente cambiar de clima: se llega a una villa de desembocadura —casco junto al Miño ensanchado o ensanche más retirado—, no a una playa-pinar. En Mallorca puede ser habitual pensar primero en kilómetros entre urbanizaciones; aquí unos pocos minutos separan la plaza de una calle donde ya hace falta coche para casi todo. Esa elección modifica decisiones tan sencillas como bajar a la ribera o ir a Moledo.",
  "También cambia el peso del coche respecto a la costa y al hospital. En el casco gran parte del día a día cabe a pie; la gran playa oceánica y Santa Luzia piden salir. Ir y volver a Mallorca suele pasar por Porto. Se oye portugués de villa; Galicia —A Guarda al otro lado del Miño— forma parte del horizonte y del ferry cuando opera.",
  "Y cambia mucho el contraste entre estaciones. Agosto llena el concelho hacia las playas; en noviembre la villa sigue abierta aunque más quieta. Para alguien acostumbrado a Mallorca, la diferencia está en el agua fría y en no confundir la plaza de Caminha con las dunas de Moledo. Vivir aquí todo el año significa aceptar desembocadura, verano lleno y lluvia como partes de una misma vida.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Caminha creció en la boca del Miño como villa amurallada: D. Afonso III mandó la cerca medieval —concluida hacia 1260, con trece torres y otras tantas puertas— y de aquel sistema queda hoy la Torre do Relógio, antiguo torreón principal y puerta hacia Viana, con reloj mecánico desde 1673 y museo del centro histórico desde 2008. No nació como urbanización de veraneo: nació como plaza fuerte de desembocadura. Quien suba a la torre un martes de enero entenderá por qué el casco manda más que cualquier lista de playas del concelho.",
  "La iglesia matriz —Nossa Senhora da Assunção, obras desde 1488 con maestros vizcaínos y gallegos, mezcla de gótico, manuelino y renacimiento, torre de fachada hacia 1556— marca la riqueza de una póvoa marítima que pudo costear un templo mayor. La Capela dos Mareantes, de 1511, recuerda el oficio de la mar en piedra. Quien conozca Caminha solo por el ferry a A Guarda debe sumar plaza, torre e iglesia como el centro de la vida anual, no como decorado de veraneo.",
  "Frente a la desembocadura, el Forte da Ínsua —isla rocosa fortificada entre 1649 y 1652 sobre un convento franciscano de 1392— cierra el horizonte defensivo de la boca del río y se mira desde la orilla cuando el cielo abre. Galicia enfrente —A Guarda y el Monte Santa Trega— forma parte de esa misma lectura de frontera. Fuera del casco, el ensanche y las carreteras hacia Moledo o Âncora cuentan otra cota: más coche, menos piedra de villa bajo la ventana. La Serra d'Arga, detrás, añade monte y aldeas de granito cuando se quiere salir sin confundir la villa de Caminha con Moledo.",
  "Hoy, comprar «en Caminha» sigue siendo elegir entre casco junto a la desembocadura —villa a pie— o zona más retirada —holgura y trayectos—. El anuncio del concelho no dice cuál de las dos —ni si la casa permite vivir la plaza o solo usarla en coche, ni cómo se siente esa misma calle en noviembre—.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El agua cotidiana de Caminha es el estuario del Miño: el tramo final donde el río se ensancha y se mezcla con el Atlántico, con la Ínsua dibujada enfrente y Galicia al otro lado. Se pasea por una orilla ancha, se siente el viento y, en sitios como Foz do Minho, se puede bañar con agua más recogida que en el oleaje abierto —no es tender la toalla en Moledo, ni debe venderse como si lo fuera—. Quien vive en el casco puede bajar a esa ribera andando; quien vive retirado convierte desembocadura y playa oceánica en trayecto. Un martes de junio suele haber holgura; un domingo de agosto el acceso a Moledo se llena de coches.",
  "Para caminar andando desde el casco, esa orilla de desembocadura y las calles de piedra convierten el Miño ensanchado en horizonte cotidiano: torre, matriz, ribera, el ferry hacia A Guarda cuando opera. No es un paseo de pinar: es villa sobre el agua con desnivel suave entre plaza y orilla. Desde el ensanche ese paseo ya pide coche casi siempre; el día a pie se queda en aceras más nuevas y lejos del agua.",
  "Hacia la costa o el monte el registro cambia del todo. Moledo —a unos cinco minutos— aporta dunas, el Pinhal do Camarido —pinar denso junto a la playa— y nortada; Âncora, playa más abrigada por el espigón de Lagarteira y vida de villa marinera; la Serra d'Arga, monte y aldeas de piedra en media hora. Aquí el día a día pide elegir casco o zona retirada; Santa Luzia, en Viana, queda a unos treinta minutos cuando hace falta hospital de mayor nivel.",
  "En el casco la ribera del estuario queda a pocos minutos a pie casi todos los días; fuera, el jardín queda delante y la playa de Moledo pide coche. Esa diferencia describe mejor Caminha que mezclar villa, Moledo y Âncora en una sola postal. Santa Luzia cubre la sanidad de referencia cuando aquí no alcanza; Porto organiza el vuelo habitual hacia Palma.",
] as const;

const CASA_NUEVO2 = [
  "En Caminha no basta el nombre del concelho. Una casa junto a la plaza y a la ribera del Miño —Torre do Relógio, gestiones a pie, desembocadura delante— no se vive igual que un piso en ensanche o más hacia Moledo, donde la plaza y muchas compras ya piden coche. Tampoco debe confundirse el mercado de la villa con el de Moledo. El anuncio que solo diga «Caminha» puede ocultar esa distancia real.",
  "En el casco importan humedad de la desembocadura, aparcamiento de verano y accesibilidad de piedra. Más retirado pesan orientación, aislamiento y distancias reales a Moledo y a Viana. La fibra está señalada como sí; conviene confirmarla. Hay poca obra nueva.",
  "El precio medio de referencia ronda 2.082 €/m². Con esa media, las columnas A y B sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual un piso junto a la plaza y uno hacia Moledo.",
  "Antes del precio conviene recorrer la rutina desde la casa: la plaza, la ribera, Moledo y la salida hacia Viana o Porto. En agosto, la afluencia; en noviembre, la humedad. Caminha premia elegir bien respecto al casco; castiga comprar como si todo el concelho fuera igual.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "Casco junto a la desembocadura y zona retirada no son intercambiables; tampoco lo son Caminha villa y Moledo. Una vivienda «en Caminha» puede significar plaza a pie o coche para casi todo. Comparar solo el precio inventa un municipio que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta la plaza, la ribera del Miño, Moledo, Santa Luzia y Porto. En el casco, humedad y aparcamiento de verano. Fuera, dependencia del coche. También la luz, el aislamiento y cómo se vive esa misma calle un domingo de agosto y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de villa histórica en la desembocadura, pero lo que decide es el inmueble concreto. Un acceso sencillo al casco o a la costa deseada, buen estado y luz amplían el abanico; una casa mal situada respecto a la rutina elegida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Caminha",
  a2: "175.929 €",
  a3: "243.594 €",
  b2: "142.097 €",
  b3: "196.749 €",
  m2: "2.082 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Caminha encaja si atrae el casco junto a la desembocadura —plaza, Torre, villa a pie junto al Miño ensanchado— o si se prefiere una zona más retirada del mismo municipio, con más espacio y coche para la plaza y para Moledo. Hay que elegir dónde se vive porque no se vive igual. Santa Luzia ronda treinta minutos; Porto organiza el vuelo habitual. Frente a Mallorca, el verano es más suave, pero el cambio incluye menos sol continuo, más humedad y agua atlántica fría.",
  "También encaja si se distingue Caminha de Moledo y Âncora y se tolera el calendario de agosto sin confundir la orilla del estuario —río que se abre al mar— con las dunas de oleaje.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Caminha encaja peor si se busca playa atlántica larga a la puerta del casco: aquí falta —la experiencia oceánica plena está en Moledo o Âncora y suele pedir salida— y eso importa porque quien compra «desembocadura» pensando en playa debajo suele llevarse sorpresa. Tampoco si el hospital debe quedar dentro del municipio: Santa Luzia está en Viana. Los servicios son 5/10 —villa histórica—; falta hospital local y la autonomía de una ciudad completa.",
  "Tampoco si se interpreta el ferry a A Guarda como transporte diario garantizado, o si se decide solo tras un sábado de sol sin probar un noviembre en el casco.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el casco y otra más retirada. Desde cada casa: una compra sencilla, el trayecto a la ribera del Miño o a Moledo, y la salida hacia Viana y Porto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto (afluencia hacia las playas) y un día cubierto de noviembre (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
] as const;

const FOTO_COMO_A = {
  src: "/fotos/alto-minho/caminha-plaza.jpg",
  pie: "Plaza histórica de Caminha",
} as const;

const FOTO_COMO_B = {
  src: "/fotos/alto-minho/caminha-torre.jpg",
  pie: "Torre do Relógio, Caminha",
} as const;

const FOTO_HIST_A = {
  src: "/fotos/alto-minho/caminha-iglesia.jpg",
  pie: "Iglesia matriz de Caminha",
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

export default function Nuevo2CaminhaPage() {
  const ficha = municipioPorSlug("caminha");
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="2.082 €/m²" />
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
