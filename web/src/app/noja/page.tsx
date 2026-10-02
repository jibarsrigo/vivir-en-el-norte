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
 * NUEVO2 — Noja (Cantabria Oriental).
 * Eje: primera línea junto a Ris o Trengandín (playa a pie, bloques, verano intenso) vs calles más retiradas del núcleo (menos toalla debajo; mismo invierno vacío).
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Cantabria Oriental es la costa de Trasmiera hasta Bizkaia: playas largas, marismas, villas de veraneo y Castro-Urdiales hacia Bilbao. El sol es de los más bajos de la tabla; la conexión con Bilbao y con Palma desde Castro, de las mejores.",
  "Noja es una villa de playa de unos dos mil setecientos habitantes en invierno —y muchas más personas en agosto— entre Ris y Trengandín, con las marismas de Victoria y Joyel al lado. No es Santoña ni Laredo: aquí se gana arena delante del núcleo; a cambio, el comercio está dimensionado para el verano y en invierno se reduce de verdad.",
  "Lo que más cambia la vida diaria es la calle: primera línea junto a Ris o Trengandín —toalla y paseo a pie, más ruido de temporada— o más retirada dentro del mismo núcleo —menos arena debajo, mismo invierno quieto—. En ambos sitios se vive en Noja; no se vive igual.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Noja se siente villa de playa de verdad: el núcleo queda entre Ris —arenal largo hacia el oeste— y Trengandín —arenal largo hacia el este, con islotes a la vista—. El terreno es relativamente llano; bajar a la arena desde buena parte del casco no pide una cuesta fuerte. Quien llega de fuera descubre enseguida que hay que elegir la calle. Junto a Ris o Trengandín se puede meter los pies en el agua andando y vivir el verano con la toalla cerca. Unas calles más hacia dentro —o hacia las marismas de Victoria y Joyel, lámina de agua dulce y salobre protegida— la postal es otra: menos primera fila de veraneo, mismos bloques y mismo comercio que se reduce cuando acaba agosto. En pocos minutos se pasa de una forma de vivir Noja a otra.",
  "Un martes de noviembre, en Noja, se puede hacer una compra sencilla si el comercio que queda abierto lo permite, pasar por la farmacia y caminar hacia Ris o hacia las marismas. Los servicios rondan 4 o 5 sobre 10 en nuestra escala: la villa está pensada para el verano; en invierno cierra buena parte de la oferta. Ese número no describe un pueblo fantasma vacío del todo: describe un lugar donde la semana mínima puede sostenerse, pero la semana completa pide coche hacia Laredo o Santander. Quien elige primera línea elige playa a pie; lo que no elige es vida de villa igual en enero que en agosto.",
  "Sin coche, Noja aguanta el radio corto del núcleo y se queda corta para hospital y comercio serio. El hospital práctico es el de Laredo, a unos veinte minutos; el aeropuerto de Santander ronda los veinticinco. Santoña queda cerca si apetece otra villa de trabajo. Noja, a cambio, ofrece playa integrada; no ofrece hospital cerca ni comercio denso todo el año.",
  "En julio cambia el ritmo con las fiestas del Carmen —alrededor del 16 de julio, con procesión, marmita y romería—. En agosto la población se multiplica: bloques llenos, tráfico y toallas en Ris y Trengandín. Meses después, en un martes húmedo, Noja recupera una escala mucho más pequeña: lo básico que queda abierto sigue, pero muchas mesas y tiendas de verano ya no están. No son dos Noja distintas: son dos ritmos del mismo pueblo a lo largo del año.",
  "También por eso la elección entre primera línea y calle retirada cambia bastante la vida diaria. Junto a la playa se gana la toalla; agosto se oye más. Más adentro se gana algo de distancia al ruido; el invierno vacío sigue siendo el mismo. Esa diferencia de calle acaba importando más que la postal de dos playas."
] as const;

const CLIMA_NUEVO2 = [
  "Vivir en Noja tras Mallorca es cambiar de cielo. Hay bastante menos sol, la lluvia aparece con mucha más frecuencia y la humedad se nota en casa —sobre todo en apartamentos cerrados parte del año—. La referencia local ronda 1.700 horas de sol al año, unos cuarenta días despejados y cerca de 1.150 mm de lluvia en unos ciento cincuenta días. Mallorca ronda 2.800 horas de sol. El viento es medio; la niebla, baja. También aquí llovizna en julio y agosto.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 20 °C: no pasas el calor de Baleares. En Ris y Trengandín el agua suele estar entre 19 y 21 °C. Quien vive en primera línea lo nota al abrir la ventana al Cantábrico; quien vive más retirado, al caminar hacia la playa bajo la lluvia. Un frente gris de noviembre cuenta más que un sábado de sol en agosto."
] as const;

const VIVIR_NUEVO2 = [
  "De Mallorca a Noja se llega a una villa de playa entre dos arenales —o a un piso más retirado del mismo núcleo—, no a una ciudad. En Mallorca puede ser habitual pensar primero en kilómetros; aquí unos pocos cientos de metros deciden si la playa queda debajo o a un paseo. Esa elección modifica decisiones tan sencillas como bajar a la arena o aparcar en agosto.",
  "También cambia la relación entre coche, costa y hospital. En el núcleo se resuelve lo mínimo a pie en temporada; el hospital pide Laredo a unos veinte minutos. Ir y volver a Mallorca suele pasar por Santander —casi todo el año—. Se oye cántabro y castellano; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. Agosto multiplica la población; en noviembre la villa se queda pequeña de verdad. Para alguien acostumbrado a Mallorca, la diferencia no es solo el clima: es aceptar un invierno con mucho menos comercio. Vivir aquí todo el año significa aceptar esas dos caras —verano lleno e invierno vacío— como partes de una misma vida."
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Noja aparece documentada ya en el siglo X —la primera referencia escrita se sitúa en 927— y durante siglos se articuló alrededor de iglesias y barrios de Trasmiera, no alrededor de un gran monumento único. En 1644 el Privilegio de Vara la eximió de la Junta de Siete Villas y le dio potestad de villa. Lo que transforma de verdad el Noja contemporáneo es más reciente: Ris y Trengandín —dos playas largas que abrazan el núcleo— convirtieron el baño y el veraneo en la razón de ser del pueblo moderno. Los bloques de apartamentos no son un defecto oculto: son la forma en que creció esa demanda a lo largo del siglo XX.",
  "Antes de los bloques, Noja ya tenía otra orilla: las marismas de Victoria y Joyel, hoy dentro del parque natural compartido con el entorno de Santoña. Detrás de Trengandín, Victoria conserva el molino de mareas del siglo XVII —restaurado como centro de interpretación— y un paisaje de agua quieta, aves y pasarelas. Joyel, hacia el oeste junto a Ris, añade el mismo registro de marisma. Quien solo mira los bloques desde la carretera se pierde esa lámina abrigada, distinta del Cantábrico de toalla.",
  "El Carmen, hacia el 16 de julio —procesión, marmita y romería—, mantiene el vínculo marinero cuando el verano ya ha empezado a llenar Ris y Trengandín. En agosto la población se multiplica; en noviembre el mismo pueblo se queda pequeño de verdad. Quien conozca Noja solo por un sábado de sol debe sumar el invierno real, las marismas y la dependencia de Laredo para el hospital.",
  "Hoy, comprar «en Noja» sigue siendo elegir entre primera línea de playa —Ris o Trengandín a pie— y una calle más retirada del mismo núcleo, con menos arena debajo y el mismo comercio de invierno reducido. El anuncio no dice cómo se siente esa calle en noviembre."
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar está siempre cerca en Noja, pero vivir junto a Ris no es lo mismo que vivir unas calles más adentro. Ris —arenal largo hacia el oeste, de más de un kilómetro— y Trengandín —arenal largo hacia el este, con peñas e islotes a la vista y aguas a menudo más calmadas— forman el frente cotidiano: se puede bajar a la playa andando desde buena parte de las calles cercanas. En verano el agua suele rondar los 19–21 °C; en agosto el aparcamiento y el acceso forman parte del plan. Las marismas de Victoria y Joyel ofrecen otra orilla: agua abrigada, aves y paseo, no el mismo baño de arenal abierto. Quien vive en primera línea baja a la arena en pocos minutos; quien vive más retirado la convierte en paseo corto. Un martes de junio suele haber holgura; un domingo de agosto el acceso se llena.",
  "Para caminar andando desde el núcleo, el terreno es relativamente llano: entre Ris y Trengandín se puede recorrer el frente sin la cuesta fuerte de otras villas del norte. El viento del Cantábrico, cuando llega, no es el mismo que el aire quieto de la marisma. Hacia Victoria o Joyel el paisaje cambia de registro —pasarelas, lámina de marea, silencio de aves— sin salir del radio corto del pueblo. No es un boulevard de ciudad grande; es villa de playa llana con dos caras de agua.",
  "Algunas salidas cercanas amplían el día sin convertir Noja en otra cosa. Santoña aporta villa de trabajo, puerto y el Monte Buciero —con desnivel real si se quiere llegar al faro—; Laredo, hospital y La Salvé a unos veinte minutos; Santander, capital. Desde Noja esas salidas piden coche, pero quedan en un radio razonable: no son un viaje a otra comarca. Aquí el día a día pide elegir calle respecto a la playa; el hospital, salir a Laredo.",
  "En primera línea la playa queda delante o casi; más retirado, el invierno vacío sigue siendo el peaje del mismo pueblo. Esa diferencia describe mejor Noja que contar dos playas y unas marismas. El hospital de Laredo cubre la sanidad hospitalaria cuando hace falta lo que aquí no hay."
] as const;

const CASA_NUEVO2 = [
  "En Noja unos metros de calle cambian la vida: primera línea de Ris o Trengandín, o más retirada. Un anuncio que solo diga «Noja» puede ocultar si la casa da a la arena, o a un bloque interior con el mismo invierno quieto.",
  "Abundan apartamentos y tipologías de veraneo; conviene comprobar vecinos permanentes, ventilación y humedad fuera de temporada. La fibra es Sí en la capa de datos; conviene comprobarla dirección a dirección. Hay poca obra nueva.",
  "El precio medio de referencia ronda 3.296 €/m². Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual un piso frente a Ris y otro más retirado.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra en noviembre, la playa en agosto, y la salida hacia Laredo o el aeropuerto. Noja premia elegir bien la calle; castiga comprar solo la postal de verano."
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "Primera línea y calle retirada no son intercambiables. Una vivienda «en Noja» en el mapa puede significar toalla debajo, o bloque interior con el mismo comercio de invierno reducido. Comparar solo el precio inventa una Noja que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el súper que permanece abierto en noviembre, Ris o Trengandín, Laredo y el aeropuerto. En primera línea, salitre, ruido de agosto y aparcamiento. También vecinos permanentes, ventilación, humedad, aislamiento; la fibra; y cómo se vive esa misma calle un domingo de agosto y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de segunda residencia y de piso cerca de la playa, pero el mercado depende mucho de la temporada. Un acceso sencillo, buen estado y un edificio que funcione en invierno amplían el abanico; una casa pensada solo para agosto lo reduce para quien busca vivir todo el año.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Noja",
  a2: "278.512 €",
  a3: "385.632 €",
  b2: "224.952 €",
  b3: "311.472 €",
  m2: "3.296 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Noja encaja si atrae playa a pie entre Ris y Trengandín —arenales largos desde el núcleo— o si se prefiere una calle más retirada del mismo pueblo, con menos primera fila y el mismo invierno quieto. Hay que elegir dónde se vive porque no se vive igual. El hospital de Laredo queda a unos veinte minutos; el aeropuerto de Santander, a unos veinticinco. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia y un invierno con mucho menos comercio.",
  "También encaja si se tolera el calendario —Carmen en julio, población multiplicada en agosto— y se acepta mirar la villa en noviembre antes de comprar."
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Noja encaja peor si se necesita la misma densidad comercial todo el año: aquí falta —servicios alrededor de 4 o 5 sobre 10: dimensionada para el verano; en invierno cierra buena parte— y eso importa porque la semana de enero no se parece a la de agosto. Tampoco si el hospital debe quedar cerca: Laredo está a unos veinte minutos. Falta comercio de invierno amplio: hay que sacar el coche, y eso pesa si se esperaba villa viva doce meses.",
  "Tampoco si se quiere evitar la presión de bloques y tráfico de agosto, o si se decide solo tras un sábado de sol sin probar un martes de noviembre."
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en primera línea y otra más retirada. Desde cada casa: una compra en noviembre, el trayecto a Ris o Trengandín, y la salida hacia Laredo y el aeropuerto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto (aparcamiento, gente) y un día cubierto de noviembre (mesas abiertas, humedad, silencio). Y comprobar el estado de la vivienda y la fibra en la dirección exacta."
] as const;

const FOTO_COMO_A = {
  src: "/fotos/cantabria-oriental/noja-bloques.jpg",
  pie: "Noja: bloques de apartamentos de veraneo",
} as const;

const FOTO_COMO_B = {
  src: "/fotos/cantabria-oriental/noja-ris.jpg",
  pie: "Playa de Ris, Noja",
} as const;

const FOTO_HIST_A = {
  src: "/fotos/cantabria-oriental/noja-villa.jpg",
  pie: "Noja fuera de temporada",
} as const;

const FOTO_HIST_B = {
  src: "/fotos/cantabria-oriental/noja-marismas.jpg",
  pie: "Marismas de Victoria y Joyel, junto a Noja",
} as const;

const FOTO_MAR_A = {
  src: "/fotos/cantabria-oriental/noja-trengandin.jpg",
  pie: "Playa de Trengandín, Noja",
} as const;

const FOTO_MAR_B = {
  src: "/fotos/cantabria-oriental/noja-playa.jpg",
  pie: "Orilla abierta de Noja",
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

export default function Nuevo2NojaPage() {
  const ficha = municipioPorSlug("noja");
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="3.296 €/m²" />
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
