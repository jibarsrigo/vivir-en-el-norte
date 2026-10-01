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
 * NUEVO2 — Afife-Carreço — Viana (Alto Minho, Portugal).
 * Eje: cerca de la playa (Afife / Paçô — baño a pie y nortada) vs más hacia el monte o interior de parroquia (granito, viñas en pérgola, coche para playa y compra).
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Alto Minho es el norte de Portugal entre el Miño y Viana do Castelo: fortalezas de río, villas de desembocadura, playas de nortada y una ciudad de apoyo con hospital Santa Luzia. El sol es de los más altos de la tabla; la sanidad y el avión se organizan en clave portuguesa —Porto y Viana—.",
  "Afife y Carreço son parroquias costeras dispersas del concelho de Viana: granito, viñas en pérgola, Serra d'Arga detrás y Atlántico delante. No forman un único núcleo urbano ni equivalen a la ciudad de Viana. Paçô y el faro de Montedor marcan tramos del litoral.",
  "Lo que más cambia la vida diaria es dónde queda la casa: cerca de la playa —baño a minutos andando, con nortada— o más hacia el monte o el interior de la parroquia —granito y viña, con playa y compra pidiendo coche—. En ambos sitios se vive en Afife-Carreço; no se vive igual.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Afife y Carreço no son un pueblo con casco cerrado y plaza mayor donde se resuelva la semana a pie. Son parroquias dispersas del concelho de Viana: casas de piedra, huertas y viñas en pérgola entre la Serra d'Arga y el mar. Quien vive cerca de la playa de Afife o del tramo de Paçô baja a la arena en pocos minutos: delante queda el Atlántico abierto, con dunas y, en verano, nortada de tarde —viento norte fuerte que puede tumbar la sombrilla—. Detrás sube el monte. La playa entra en el día si la casa está bien situada. Más hacia el monte o el interior de la parroquia se gana abrigo y silencio de granito, pero cada bajada a la arena y casi toda la compra piden coche. Quien llega de fuera no debe confundir estas aldeas con la ciudad de Viana ni con la villa de Âncora.",
  "Un martes de noviembre, junto a la orilla, se puede caminar por la playa y por los caminos de duna con mucho menos movimiento que en agosto. En nuestra escala los servicios quedan en 3/10: aquí hay barrio y alguna tienda mínima, pero falta un comercio amplio donde hacer la compra de la semana. Para el súper completo y muchas gestiones hay que desplazarse a Viana —unos diez o quince minutos—; Âncora, hacia el norte, cubre un poco más de villa costera si apetece comprar sin entrar del todo en la ciudad. Quien elige cerca de la playa puede bañarse andando desde casa, pero no organizar el día a día a pie. Quien elige el monte gana calma; esa misma mañana la arena ya pide trayecto.",
  "Sin coche, casi solo se resuelve bajar a la playa si la vivienda queda junto a la orilla. La compra seria, el hospital y casi todo lo demás piden salir: Santa Luzia está en Viana, a unos quince minutos; el aeropuerto de Porto ronda los cincuenta y cinco. Afife-Carreço ofrece monte y mar en el mismo radio; no ofrece supermercado denso bajo la ventana.",
  "La diferencia entre julio y noviembre se nota al salir de casa. En junio, Santo António (hacia el 13) y São João (hacia el 24) mueven Afife con música y gente en la calle; en julio, la Senhora da Lapa (alrededor del 12 al 14) añade romería. En julio y agosto la playa se llena y encontrar aparcamiento junto a la orilla se vuelve más difícil. Meses después, en un martes húmedo, las aldeas recuperan silencio. No son dos Afife distintos: son dos ritmos del mismo sitio a lo largo del año.",
  "También por eso la elección entre cerca de la playa y casa hacia el monte cambia bastante la vida diaria. En la orilla el baño queda metido en la rutina, a cambio de más viento y salitre. Hacia el monte se gana abrigo de granito, pero la playa y la compra piden coche. Esa diferencia acaba importando más que el nombre del concelho en el anuncio.",
] as const;

const CLIMA_NUEVO2 = [
  "Afife-Carreço supone un cambio de clima claro respecto a Mallorca: costa atlántica ventosa con unas 2.500 horas de sol —aún por debajo de Mallorca—, lluvia frecuente en invierno y nortada fuerte de tarde en verano. La humedad y el salitre se notan en casas cerca del mar. Un día puede empezar con niebla de mar, abrirse y terminar con viento que pide abrigo.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 20,5 °C: no pasas el calor de Baleares, pero el viento puede tumbar la sombrilla. El agua suele estar entre 16 y 18 °C. Quien vive junto a Afife o Paçô lo nota al abrir la ventana; quien vive hacia el monte, al bajar a la playa. Un enero en granito cuenta más que un sábado de sol en agosto.",
] as const;

const VIVIR_NUEVO2 = [
  "Cambiar Mallorca por Afife-Carreço no significa únicamente cambiar de clima: se llega a aldeas dispersas entre el monte y el mar, no a una ciudad donde se camine a la farmacia, al súper y al hospital. En Mallorca puede ser habitual pensar primero en servicios a pie; aquí la playa puede quedar cerca y la compra de la semana, casi nunca. Esa elección modifica decisiones tan sencillas como bajar a la arena o sacar el coche hacia Viana.",
  "También cambia el peso del coche. En la orilla se resuelve el baño a pie si la casa lo permite; la compra seria y el hospital piden desplazarse a Viana, y Âncora sirve de apoyo costero con más comercio que estas aldeas. Santa Luzia queda a unos quince minutos. Ir y volver a Mallorca suele pasar por Porto. Se oye portugués de costa; el ambiente es de aldea y veraneo, no de plaza urbana.",
  "Y cambia mucho el contraste entre estaciones. Agosto llena tramos de playa; en noviembre el silencio pesa. Para alguien acostumbrado a Mallorca, la diferencia está en el viento, el agua fría y en no poder organizar el día a día sin salir. Vivir aquí todo el año significa aceptar nortada, coche y dispersión como partes de una misma vida.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Afife y Carreço no se entienden por un casco monumental con plaza mayor: se entienden por parroquias de granito entre la Serra d'Arga y el Atlántico. Durante siglos mandó la labranza y la viña en pérgola; la costa estaba cerca, pero la vida no se organizaba alrededor de un mercado urbano. Paçô es un tramo de playa dentro de ese mismo arco; Areosa queda en el entorno hacia Viana. Quien busque arcos y terrazas de plaza se equivoca de ficha; quien busque piedra, viento y horizonte, no.",
  "El faro de Montedor, en Carreço, marca el litoral con su luz y con molinos de viento en el horizonte: es hito de costa, no decorado de ciudad. Por estos tramos pasa la Ecovia do Litoral Norte: un recorrido de pasarelas de madera y caminos de duna entre Viana y Caminha que permite caminar el frente sin inventar un boulevard. Quien conozca Afife solo por una foto de surf debe sumar el granito, la viña, la nortada y la dependencia histórica de Viana para lo que la aldea no cubre —el súper completo, los especialistas y el ritmo de ciudad—.",
  "Viana do Castelo, a unos diez o quince minutos, aporta el hospital Santa Luzia, el mercado y la ciudad completa. Âncora, hacia el norte, cubre una villa costera con más comercio que estas parroquias. Fuera de la orilla, las casas hacia el monte cuentan otra historia: menos salitre en la ventana, más trayecto a la arena cada mañana, más coche para la compra. La Serra d'Arga —macizo de granito detrás de la costa, con aldeas de piedra y rutas— explica por qué aquí el monte no es solo fondo de postal: forma parte del día cuando se elige vivir hacia arriba.",
  "Hoy, comprar «en Afife-Carreço» sigue siendo elegir entre cerca de la playa —baño a pie, más viento— o vivienda hacia el monte —granito, menos salitre, más coche—. El anuncio del concelho de Viana no dice cuál de las dos, ni cómo se siente esa misma calle en enero frente a un sábado de agosto, ni si la fibra llega a esa parcela, ni cuánto pesa el aparcamiento un domingo de verano junto a Afife.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar está cerca en buena parte de Afife-Carreço, pero no se vive igual desde cualquier casa. En Afife y Paçô el Atlántico puede quedar a pocos minutos: un arenal abierto, dunas, oleaje, nortada de tarde en verano —viento norte que puede tumbar la sombrilla— y agua que suele rondar 16–18 °C. No es como estar en una cala recogida ni tampoco como una bahía de ría: es una playa abierta donde el viento forma parte del plan. Quien vive hacia el monte convierte esa misma playa en trayecto. Un martes de junio suele haber holgura; un domingo de agosto el acceso y el aparcamiento se llenan.",
  "Para caminar desde la orilla, los caminos, las pasarelas de madera (passadiços) y los tramos de la Ecovia do Litoral Norte —recorrido costero entre Viana y Caminha— convierten las dunas y el horizonte en paisaje cotidiano: el faro de Montedor cuando el cielo abre, el oleaje a un lado, el salitre en la cara. No es un paseo de ciudad: es costa con viento y, a ratos, tablas de surf. Desde una casa de monte ese paseo ya pide coche casi siempre; el día a pie se queda en el camino de granito entre viñas.",
  "Para gestiones o otro tipo de orilla, el coche abre el mapa en minutos. Viana aporta el hospital Santa Luzia, el comercio amplio y playas como Praia Norte o Cabedelo —playa de surf al otro lado del Lima—. Âncora ofrece una villa con espigón y más abrigo para el baño. Caminha aporta el estuario del Miño —el río que se ensancha hacia el Atlántico; orilla de paseo, no de oleaje—. Aquí el día a día pide elegir orilla o monte; Santa Luzia queda a unos quince minutos cuando hace falta hospital de mayor nivel.",
  "En la orilla la playa queda a pie casi todos los días si la casa lo permite; hacia el monte el granito queda delante y bajar a la arena pide coche. Esa diferencia describe mejor Afife-Carreço que heredar los servicios de Viana o firmar solo porque el mapa diga «Viana do Castelo». Porto organiza el vuelo habitual hacia Palma; el trayecto ronda los cincuenta y cinco minutos.",
] as const;

const CASA_NUEVO2 = [
  "Afife-Carreço es una aldea entre el monte y el mar, no una plaza de ciudad. Una casa cerca de Afife o Paçô permite bajar a la arena andando —con nortada y salitre incluidos—. Una casa más hacia el monte o el interior de la parroquia gana abrigo de granito, pero convierte cada baño y casi cada compra en trayecto. El anuncio que diga solo «Viana» puede ocultar esa distancia.",
  "En la orilla importan el salitre, el viento, la humedad, el aislamiento y el mantenimiento exterior. Hacia el monte pesan las distancias reales a la playa y a Viana. La fibra está señalada como parcial: hay que confirmarla dirección a dirección. Hay poca obra nueva.",
  "En la capa de datos de esta web no hay un €/m² municipal fiable ahora mismo (n.d. deliberado): la muestra en parroquias dispersas puede ser escasa y moverse mucho. No inventamos una media. Conviene mirar Idealista del mes y comparar el inmueble concreto —estado, acceso, microzona— más que una cifra única.",
  "Antes del precio conviene recorrer la rutina desde la casa: la playa un día de nortada, la compra en Viana o un paseo por Âncora, y la salida hacia Porto. En agosto, la ocupación; en noviembre, el silencio y la humedad. Afife-Carreço premia elegir bien orilla o monte; castiga comprar solo el nombre del concelho.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "Orilla y monte no son intercambiables; tampoco lo son Afife, Carreço y la ciudad de Viana. Una vivienda «en Afife-Carreço» puede significar playa a pie o coche para cada bajada. Comparar solo el precio inventa un municipio que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta la playa, Viana, Santa Luzia y Porto. En la orilla, salitre, viento y aparcamiento en temporada. Hacia el monte, dependencia del coche. También la luz, el aislamiento, la ventilación, la fibra en esa parcela y cómo se vive esa misma calle un domingo de agosto y un martes de enero.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de casa cerca de playa y de granito con terreno, pero el mercado es estrecho. Un acceso sencillo a playa, buen estado y mantenimiento frente al salitre amplían el abanico; una casa mal situada, sin fibra o muy estacional lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "Sin media municipal fiable en la capa actual (n.d. deliberado). Idealista del mes y el inmueble concreto mandan. A/B no aplican sin €/m² de referencia.";

const CASA_FILA_PRECIOS = {
  municipio: "Afife-Carreço (Viana)",
  a2: "n.d.",
  a3: "n.d.",
  b2: "n.d.",
  b3: "n.d.",
  m2: "n.d.",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Afife-Carreço encaja si atrae aldea de granito con playa atlántica cerca —Afife o Paçô, con nortada— o si se prefiere casa más hacia el monte, con viña y coche para bajar a la arena. Hay que elegir dónde se vive porque no se vive igual. Santa Luzia ronda quince minutos; Porto organiza el vuelo habitual. Frente a Mallorca, el verano es más suave, pero el cambio incluye viento fuerte, agua fría y tener que desplazarse a Viana para la compra seria y el hospital, o a Âncora cuando apetece una villa costera con más comercio.",
  "También encaja si se acepta que los servicios locales quedan en 3/10 y se prueba un enero antes de firmar.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Afife-Carreço encaja peor si se necesita comercio diario a pie: aquí falta un súper amplio y una plaza de villa bajo la ventana (servicios 3/10). La compra de la semana y el hospital piden coche hacia Viana; Âncora ayuda para algo de villa costera, pero no sustituye la ciudad. Eso importa porque quien espera organizar el día a día andando suele llevarse sorpresa. Tampoco si el hospital debe quedar al lado de casa sin coche: Santa Luzia está en Viana.",
  "Tampoco si se espera que Afife y Carreço funcionen como un solo pueblo compacto con casco cerrado, o si se decide solo tras un sábado de sol en la playa sin probar un martes de noviembre.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda cerca de la playa y otra hacia el monte. Desde cada casa: una bajada a la playa con viento, una compra en Viana (y, si interesa, un paseo por Âncora), y la salida hacia Porto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto —ocupación y nortada— y un día cubierto de enero —silencio y humedad—. Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
] as const;

const FOTO_COMO_A = {
  src: "/fotos/alto-minho/afife-playa.jpg",
  pie: "Playa de Afife",
} as const;

const FOTO_COMO_B = {
  src: "/fotos/alto-minho/carreco-playa.jpg",
  pie: "Carreço: pasarela de duna y casas en la ladera hacia Montedor",
} as const;

const FOTO_HIST_A = {
  src: "/fotos/alto-minho/carreco-montedor.jpg",
  pie: "Faro de Montedor, Carreço",
} as const;

const FOTO_MAR_A = {
  src: "/fotos/alto-minho/afife-paco.jpg",
  pie: "Paçô y costa en Afife-Carreço",
} as const;

const FOTO_MAR_B = {
  src: "/fotos/alto-minho/afife-passadico.jpg",
  pie: "Passadiço junto a la costa en Afife",
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

export default function Nuevo2AfifeCarrecoPage() {
  const ficha = municipioPorSlug("afife-carreco");
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="n.d." />
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
