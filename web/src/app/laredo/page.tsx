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
 * NUEVO2 — Laredo (Cantabria Oriental).
 * Eje: Puebla Vieja / calles interiores (villa, hospital cerca) vs frente de La Salvé (playa de varios km, bloques, más verano).
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Cantabria Oriental es la costa de Trasmiera hasta Bizkaia: playas largas, marismas, villas de veraneo y Castro-Urdiales hacia Bilbao. El sol es de los más bajos de la tabla; la conexión con Bilbao y con Palma desde Castro, de las mejores.",
  "Laredo es una villa de unos once mil habitantes con La Salvé —playa urbana de varios kilómetros—, Puebla Vieja medieval y hospital comarcal en el propio municipio. No es Noja ni Castro: aquí se gana autonomía fuerte y playa larga a pie si se elige bien; a cambio, el frente de bloques de los años sesenta y setenta marca el paisaje de la orilla.",
  "Lo que más cambia la vida diaria es el barrio: Puebla Vieja y calles interiores —piedra, gestiones, menos primera fila— o el frente de La Salvé —paseo y playa delante, más verano—. En ambos sitios se vive en Laredo; no se vive igual.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Laredo se siente villa completa: el núcleo concentra súper, farmacias, centro de salud y el hospital comarcal a pocos minutos dentro del municipio. La Salvé —arenal urbano de unos cinco kilómetros— forma el frente: paseo largo y casi llano, toallas en verano, bloques de apartamentos de los años sesenta y setenta. Quien llega de fuera descubre enseguida que hay que elegir. En la Puebla Vieja —casco histórico de calles estrechas e iglesia de la Asunción— y en calles más interiores se puede organizar el día a día con menos presión de primera línea. Hacia el frente de La Salvé la postal es otra: arena delante o cerca, más gente en agosto, con el casco viejo quedando unos minutos atrás. En pocos minutos se pasa de una forma de vivir Laredo a otra.",
  "Un martes de noviembre, en el centro, se puede hacer la compra, pasar por el hospital si hace falta y caminar hacia el paseo. Los servicios llegan a 7/10 en nuestra escala: hay villa con lo esencial diario; no falta hospital local. Quien elige Puebla Vieja o interior elige piedra y menos primera fila; lo que no elige es la toalla debajo de todas las ventanas. Quien elige el frente gana La Salvé; esa misma mañana el aparcamiento de verano ya no está, pero el paseo sigue.",
  "Sin coche, Laredo aguanta mucho mejor que Noja o Ribamontán: hospital, comercio y playa en el mismo municipio. El coche enlaza Santoña, Castro y el aeropuerto de Santander —unos treinta y cinco minutos—. Bilbao queda más lejos. Laredo, a cambio, ofrece autonomía de villa con playa enorme; no ofrece el silencio de un pueblo pequeño ni un frente sin bloques.",
  "En agosto cambia el ritmo con la Semana Grande y la Batalla de Flores —último viernes de agosto, desfile de carrozas engalanadas con flores naturales por la Alameda Miramar, Fiesta de Interés Turístico Nacional—. La Salvé se llena de toallas. Meses después, en un martes húmedo, la villa sigue abierta: el hospital y el comercio no dependen solo del veraneo. No son dos Laredo distintas: son dos ritmos de la misma villa a lo largo del año.",
  "También por eso la elección entre Puebla Vieja e interior y el frente de La Salvé cambia bastante la vida diaria. En el casco viejo se ganan calles de piedra y menos primera fila; la playa pide unos minutos. En el frente se gana el paseo y la toalla; agosto se oye más. Esa diferencia de barrio acaba importando más que la postal de cinco kilómetros de arena."
] as const;

const CLIMA_NUEVO2 = [
  "Laredo supone un cambio climático claro respecto a Mallorca. Hay bastante menos sol, la lluvia aparece con mucha más frecuencia y la humedad se nota en casa —sobre todo en primera línea—. La referencia local ronda 1.700 horas de sol al año, unos cuarenta días despejados y cerca de 1.150 mm de lluvia en unos ciento cincuenta días. Mallorca ronda 2.800 horas de sol. El viento es bajo o medio; la niebla, baja. También aquí llovizna en julio y agosto.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 20 °C: no pasas el calor de Baleares. En La Salvé el agua suele estar entre 19 y 21 °C. Quien vive en el frente lo nota al abrir la ventana al Cantábrico; quien vive en la Puebla Vieja, al bajar hacia el paseo bajo la lluvia. Un frente gris de noviembre cuenta más que un sábado de sol en La Salvé."
] as const;

const VIVIR_NUEVO2 = [
  "De Mallorca a Laredo se llega a una villa con hospital y playa larga —frente o Puebla Vieja—, no a una ciudad grande. En Mallorca puede ser habitual pensar primero en kilómetros; aquí unos pocos minutos deciden si la playa queda delante o si gana la piedra del casco. Esa elección modifica decisiones tan sencillas como bajar al paseo o aparcar en la Batalla de Flores.",
  "También cambia la relación entre coche, costa y sanidad. En Laredo el hospital está en el municipio; muchas gestiones caben a pie. Ir y volver a Mallorca suele pasar por Santander —casi todo el año—, a unos treinta y cinco minutos. Se oye cántabro y castellano; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. La Batalla de Flores llena finales de agosto; La Salvé se densifica; en noviembre la villa sigue abierta aunque más quieta en la orilla. Para alguien acostumbrado a Mallorca, la diferencia está en el sol y en el urbanismo de bloques del frente. Vivir aquí todo el año significa aceptar villa completa, playa enorme y verano lleno como partes de una misma vida."
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Laredo creció como villa de fuero —Alfonso VIII, hacia 1200— con un casco alto que todavía se lee en la Puebla Vieja: seis rúas medievales al pie de la iglesia de Santa María de la Asunción, templo gótico del siglo XIII declarado monumento nacional, con el retablo flamenco de la Virgen de Belén en el interior. Quien sube desde el paseo nota el desnivel: no es un casco llano pegado a la arena, sino un núcleo de piedra que miraba al puerto y al comercio marítimo antes de que La Salvé se convirtiera en el frente de veraneo.",
  "Abajo, desde finales del siglo XIX y sobre todo en el boom de los años sesenta, el crecimiento hacia La Salvé —arenal urbano de unos cinco kilómetros— convirtió bloques, paseo y toallas en la otra cara del mismo municipio. El puerto deportivo y el paseo enlazan esas dos lecturas. Laredo no es solo playa: es también cabecera sanitaria de parte de la costa oriental, con el hospital comarcal dentro de la villa. Esa autonomía —comercio, sanidad, orilla— explica por qué la villa no se vacía como un pueblo de segunda residencia pura.",
  "La Batalla de Flores —desde 1908; el último viernes de agosto, desfile de carrozas de flor natural por la Alameda Miramar, Fiesta de Interés Turístico Nacional— marca el calendario de finales de verano tanto como las toallas. Empezó en el agua, con traineras adornadas; al año siguiente pasó a tierra y se quedó. Calles cortadas, gente de fuera y un ruido que no es el de un martes cualquiera. Quien conozca Laredo solo por La Salvé debe sumar Puebla Vieja, hospital y esa fiesta.",
  "Hoy, comprar «en Laredo» sigue siendo elegir entre Puebla Vieja o calles interiores —piedra, gestiones, menos primera fila— y el frente de La Salvé —paseo y playa delante, más verano—. El anuncio no dice cuál de las dos."
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar está siempre cerca en Laredo, pero vivir en el frente de La Salvé no es lo mismo que vivir en la Puebla Vieja. La Salvé —arenal urbano de varios kilómetros, paseo largo y casi llano— es el agua cotidiana de buena parte de los bloques: se puede bajar a la playa andando, con verano de 19–21 °C en el agua y, en agosto, aparcamiento disputado. Desde la Puebla Vieja esa misma playa pide bajar unos minutos de desnivel. El puerto aporta la orilla de dársena y barcos, no el mismo baño de arenal. Quien vive en el frente puede caminar hasta la arena; quien vive en el casco viejo convierte La Salvé en bajada corta. Un martes de junio en el paseo suele haber holgura; un domingo de agosto —y el viernes de la Batalla de Flores— el acceso se llena.",
  "Para caminar andando desde el frente, el paseo de La Salvé convierte la orilla en horizonte largo y llano: arena a un lado, bloques al otro, viento cuando el Cantábrico lo trae. No es un boulevard de capital; es frente de villa-playa a escala grande. Desde la Puebla Vieja el paseo empieza tras bajar: cuestas, rúas estrechas y, abajo, la misma Salvé. Esa diferencia de cota se nota en cada ida a la toalla y en cada vuelta con la compra.",
  "Algunas salidas cercanas amplían el día sin convertir Laredo en otra cosa. Santoña aporta Buciero, bahía y olor a puerto de trabajo; Castro, otra ciudad costera con Bilbao cerca; Santander, capital y Valdecilla si hace falta lo que el hospital comarcal no cubre. Dentro del municipio, el Túnel de la Atalaya y el paseo del Puntal cambian el registro sin sacar el coche lejos. Aquí el día a día pide elegir frente o Puebla Vieja; el hospital queda a pocos minutos, y eso cambia la lógica respecto a Noja o Ribamontán.",
  "En el frente la playa queda delante o casi; en la Puebla Vieja gana la piedra del casco y La Salvé pide unos minutos de bajada. Esa diferencia describe mejor Laredo que contar cinco kilómetros de arena. El hospital de Laredo cubre la sanidad hospitalaria en el propio municipio."
] as const;

const CASA_NUEVO2 = [
  "En Laredo el barrio lo cambia todo: Puebla Vieja e interior, o frente de La Salvé. Un anuncio que solo diga «Laredo» puede ocultar si la casa da a calles de piedra, o a un bloque frente al paseo con más salitre y verano.",
  "En el frente abundan apartamentos de los años sesenta y setenta; en la Puebla Vieja, tipologías más antiguas y pendientes. La fibra es Sí en la capa de datos; conviene comprobarla dirección a dirección. Hay poca obra nueva.",
  "El precio medio de referencia ronda 2.951 €/m². Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual un piso en el frente y uno en el casco viejo.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra, La Salvé, el hospital y la salida hacia el aeropuerto. En agosto, el aparcamiento en el frente; en noviembre, la humedad. Laredo premia elegir bien el barrio; castiga comprar solo la postal de cinco kilómetros de arena."
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "La Puebla Vieja y el frente de La Salvé no son intercambiables. Una vivienda «en Laredo» en el mapa puede significar piedra y hospital cerca sin bloques debajo, o paseo de playa con más verano. Comparar solo el precio inventa una Laredo que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el súper, La Salvé, el hospital y el aeropuerto. En el frente, salitre, ascensor, estado de fachadas y aparcamiento en temporada. En la Puebla Vieja, pendientes y accesibilidad. También la luz, el aislamiento, la ventilación y señales de humedad; la fibra; y cómo se vive esa misma calle un domingo de agosto y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de villa con hospital y de piso frente a La Salvé, pero lo que decide es el inmueble concreto. Un acceso sencillo, buen estado y un barrio fácil de explicar amplían el abanico; una casa mal situada respecto a la rutina elegida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Laredo",
  a2: "249.360 €",
  a3: "345.267 €",
  b2: "201.406 €",
  b3: "278.870 €",
  m2: "2.951 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Laredo encaja si atrae la Puebla Vieja o calles interiores —villa con hospital cerca y menos primera fila— o si se prefiere el frente de La Salvé, con playa larga a pie y más presión de verano. Hay que elegir dónde se vive porque no se vive igual. El hospital está en el municipio; el aeropuerto de Santander ronda los treinta y cinco minutos. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia y el urbanismo de bloques del frente.",
  "También encaja si se tolera el calendario —Batalla de Flores a finales de agosto, La Salvé llena— eligiendo bien la calle."
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Laredo encaja peor si se rechaza el urbanismo de bloques del frente de playa: aquí ese frente existe y pesa en la imagen cotidiana. Tampoco si se busca escala de pueblo pequeño sin tráfico de verano. Los servicios son 7/10 —villa con lo esencial y hospital local—; no falta lo diario, pero sí la calma constante en La Salvé en temporada alta. El peaje no es falta de hospital: es verano lleno y bloques en la orilla.",
  "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en La Salvé sin probar un noviembre en la Puebla Vieja."
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en la Puebla Vieja o interior y otra en el frente de La Salvé. Desde cada casa: una compra sencilla, el trayecto a la playa, el hospital y el aeropuerto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en la Semana Grande de agosto (aparcamiento, gente) y un día cubierto de noviembre (luz, humedad). Y comprobar ascensor, estado de la vivienda y fibra en la dirección exacta."
] as const;

const FOTO_COMO_A = {
  src: "/fotos/cantabria-oriental/laredo-salve.jpg",
  pie: "Playa de La Salvé, Laredo",
} as const;

const FOTO_COMO_B = {
  src: "/fotos/cantabria-oriental/laredo-villa.jpg",
  pie: "Laredo: villa y frente de playa",
} as const;

const FOTO_HIST_A = {
  src: "/fotos/cantabria-oriental/laredo-puebla.jpg",
  pie: "Puebla Vieja de Laredo",
} as const;

const FOTO_HIST_B = {
  src: "/fotos/cantabria-oriental/laredo-asuncion.jpg",
  pie: "Iglesia de la Asunción, Laredo",
} as const;

const FOTO_MAR_A = {
  src: "/fotos/cantabria-oriental/laredo-paseo.jpg",
  pie: "Paseo de Laredo junto a La Salvé",
} as const;

const FOTO_MAR_B = {
  src: "/fotos/cantabria-oriental/laredo-puerto.jpg",
  pie: "Puerto deportivo de Laredo",
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

export default function Nuevo2LaredoPage() {
  const ficha = municipioPorSlug("laredo");
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="2.951 €/m²" />
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
