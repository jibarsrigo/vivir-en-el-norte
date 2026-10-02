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
 * NUEVO2 — Santoña (Cantabria Oriental).
 * Eje: villa / puerto / bahía (comercio, conserva, San Martín a pie) vs Berria (playa larga exterior; coche o salida deliberada).
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Cantabria Oriental es la costa de Trasmiera hasta Bizkaia: playas largas, marismas, villas de veraneo y Castro-Urdiales hacia Bilbao. El sol es de los más bajos de la tabla; la conexión con Bilbao y con Palma desde Castro, de las mejores.",
  "Santoña es una villa de unos once mil habitantes con puerto, industria de anchoas, bahía y el Monte Buciero detrás. No es Noja ni Laredo: aquí se gana vida de trabajo todo el año y precio más asequible; a cambio, la gran playa de Berria no queda debajo del casco y el hospital está en Laredo a unos diez minutos.",
  "Lo que más cambia la vida diaria es el polo: villa y bahía —comercio, puerto, paseo abrigado— o Berria —arenal largo con dunas, más verano, con el casco quedando atrás—. En ambos sitios se vive en Santoña; no se vive igual.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Santoña se siente villa de trabajo de verdad: el casco —calles hacia el puerto, lonja y comercio— concentra farmacia, tiendas, centro de salud —médico de cabecera y consultas del día a día, no el hospital— y buena parte del día a día a pie. La bahía queda delante: agua abrigada, barcas y el olor a conserva que forma parte de la identidad. Quien llega de fuera descubre enseguida que hay que elegir. En la villa se puede comprar, gestionar y pasear el frente portuario andando. Hacia Berria —playa larga de arena y dunas al otro lado del monte, a unos minutos— la postal es otra: Cantábrico abierto, toallas en verano, con el comercio denso quedando en el casco. En pocos minutos se pasa de una forma de vivir Santoña a otra.",
  "Un martes de noviembre, en el casco, se puede hacer la compra, pasar por el centro de salud y seguir hacia el puerto o hacia San Martín —playa más pequeña e integrada en la villa, no el mismo arenal de Berria—. Los servicios llegan a 6/10 en nuestra escala: hay comercio de villa de trabajo; falta el hospital en el municipio —Laredo queda a unos diez minutos—. Quien elige el casco elige autonomía de villa y bahía; lo que no elige es Berria debajo de la ventana.",
  "Sin coche, Santoña aguanta bien la semana del casco. El coche enlaza Berria, Laredo y el aeropuerto. El hospital práctico es el de Laredo, a unos diez minutos; el aeropuerto de Santander ronda los treinta. Monte Buciero —monte que cierra la villa hacia el mar abierto— añade rutas con desnivel cuando se quiere ampliar el día. Santoña, a cambio, ofrece villa viva todo el año; no ofrece hospital dentro ni Berria a pie desde cualquier calle.",
  "En septiembre cambia el ritmo con las fiestas de la Virgen del Puerto —hacia el 8 de septiembre, con procesión marítima, marmite y mucha gente—. En julio y agosto Berria se llena de toallas. Meses después, en un martes húmedo, el casco sigue abierto: la conserva y el comercio de trabajo no dependen solo del veraneo. No son dos Santoña distintas: son dos ritmos del mismo pueblo a lo largo del año.",
  "También por eso la elección entre casco y Berria cambia bastante la vida diaria. En la villa se ganan calles, compra y bahía; la gran playa pide salida. Hacia Berria se gana el arenal largo; agosto se nota más. Esa diferencia de sitio acaba importando más que la postal de anchoas."
] as const;

const CLIMA_NUEVO2 = [
  "Santoña supone un cambio climático claro respecto a Mallorca. Hay bastante menos sol, la lluvia aparece con mucha más frecuencia y la humedad se nota en casa. La referencia local ronda 1.700 horas de sol al año, unos cuarenta días despejados y cerca de 1.150 mm de lluvia en unos ciento cincuenta días. Mallorca ronda 2.800 horas de sol. El viento es medio; la niebla, baja. También aquí llovizna en julio y agosto.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 20 °C: no pasas el calor de Baleares. En Berria el agua suele estar entre 19 y 21 °C; la bahía ofrece orilla abrigada para pasear, no el mismo baño de arenal abierto. Quien vive en el casco lo nota al salir a la calle húmeda; quien vive hacia Berria, al abrir la ventana al Cantábrico. Un frente gris de noviembre cuenta más que un sábado de sol en Berria."
] as const;

const VIVIR_NUEVO2 = [
  "De Mallorca a Santoña se llega a una villa de puerto y conserva —o a una casa hacia Berria—, no a una ciudad. En Mallorca puede ser habitual pensar primero en kilómetros; aquí unos pocos minutos separan el casco de Berria —o convierten la misma semana en trayectos si vives junto a la playa y necesitas el súper—. Esa elección modifica decisiones tan sencillas como salir a comprar o ir a la toalla.",
  "También cambia la relación entre coche, costa y hospital. En el casco gran parte del día a día cabe a pie; Laredo cubre el hospital a unos diez minutos. Ir y volver a Mallorca suele pasar por Santander —casi todo el año—. Se oye cántabro y castellano; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. La Virgen del Puerto llena septiembre; agosto llena Berria; en noviembre el casco sigue vivo porque la villa trabaja. Para alguien acostumbrado a Mallorca, la diferencia está en el sol y en oler a puerto de verdad. Vivir aquí todo el año significa aceptar villa de trabajo y playa de salida como partes de una misma vida."
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Santoña creció al pie del Monte Buciero como villa de puerto y de abrigo. La iglesia de Santa María del Puerto marca el casco; el fuerte de San Martín —fortificación hacia la boca de la bahía— recuerda el control militar del estuario, reforzado también en la Guerra de Independencia. Lo que organiza el empleo y el olor cotidiano no es el folleto: es la industria conservera. Desde finales del siglo XIX y, sobre todo, tras la Primera Guerra Mundial, la anchoa fileteada y en aceite convirtió a Santoña en referencia de salazón; el puerto y las fábricas siguen explicando por qué esta villa no se vacía del todo en noviembre.",
  "El Monte Buciero —macizo calcáreo que cierra Santoña hacia el Cantábrico abierto— cuenta la otra mitad de esa historia: desnivel, encinar, fuertes y baterías, y el faro del Caballo, puesto en marcha en 1863 al final de una bajada de cientos de escalones. No es un paseo llano de villa; es monte sobre el pueblo, con esfuerzo real si se quiere llegar al faro. Quien solo baja al puerto sin subir al Buciero se pierde la escala que define el perfil de Santoña.",
  "Las marismas de Santoña, Victoria y Joyel —parque natural de aves y pasarelas— añadieron la orilla de agua quieta. Berria —arenal largo con dunas al otro lado del monte— completó el veraneo exterior. La Virgen del Puerto, en septiembre, mantiene el calendario marinero cuando el verano de Berria ya ha pasado lo más denso. Quien conozca Santoña solo por la anchoa debe sumar bahía, Buciero, Berria y ese ritmo de villa de trabajo.",
  "Hoy, comprar «en Santoña» sigue siendo elegir entre casco de villa —puerto, comercio y bahía a pie— y costa hacia Berria, con playa larga y coche para la semana del centro. El anuncio no distingue cuál de las dos."
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar está siempre cerca en Santoña, pero vivir junto al puerto no significa tener Berria debajo de la ventana. En el casco el agua cotidiana es la bahía: lámina abrigada, lonja, barcas y paseo. San Martín —playa más pequeña e integrada en la villa, hacia el sur— permite un baño cercano sin ser el arenal exterior. Berria —arenal largo con dunas al otro lado del monte, a unos minutos— es la gran playa abierta: Cantábrico de toalla, oleaje y, en agosto, aparcamiento que forma parte del plan. Las marismas aportan orilla de aves y pasarelas, no baño de oleaje abierto. En verano el agua suele rondar los 19–21 °C. Quien vive en la villa puede caminar bahía y puerto; quien quiere Berria la convierte en salida. Un martes de junio en la bahía suele haber holgura; un domingo de agosto en Berria el acceso se llena.",
  "Para caminar andando desde el casco, el frente de bahía y el puerto convierten el agua en horizonte cercano: olor a conserva y a marea, el Buciero detrás, Laredo a veces visible al otro lado del abra. Subir al Buciero cambia de registro: desnivel, viento de acantilado y, si se baja al faro del Caballo, cientos de escalones de ida y vuelta. No es un boulevard llano; es villa de puerto con monte encima. Desde una casa hacia Berria ese mismo día empieza en el arenal y pide coche para el súper del casco.",
  "Berria aporta el baño de arenal largo, con dunas y acceso que en agosto hay que planear; el Buciero, la senda por encinar y acantilado hasta los faros —el del Caballo con su bajada de escalones no es un paseo cualquiera—; las marismas, el paseo quieto de aves cuando el Cantábrico abierto no apetece. Laredo queda a unos diez minutos si hace falta hospital o La Salvé. Aquí el día a día pide elegir casco o Berria; el hospital, salir a Laredo.",
  "En el casco la bahía queda a pie casi todos los días; hacia Berria la playa larga queda delante y el comercio denso queda en la villa. Esa diferencia describe mejor Santoña que contar playas. El hospital de Laredo cubre la sanidad hospitalaria cuando hace falta lo que aquí no hay."
] as const;

const CASA_NUEVO2 = [
  "En Santoña casco y bahía no son lo mismo que Berria. Un anuncio que solo diga «Santoña» puede ocultar si la casa da a calles caminables y puerto, o a un acceso de playa con coche para cada recado.",
  "En el casco abundan pisos y casas con humedad de bahía y salitre; hacia Berria, tipologías más ligadas al veraneo. La fibra es Sí en la capa de datos; conviene comprobarla dirección a dirección. Hay poca obra nueva.",
  "El precio medio de referencia ronda 2.120 €/m². Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual un piso en el casco y una casa hacia Berria.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra, la bahía o Berria, y la salida hacia Laredo o el aeropuerto. En agosto, el aparcamiento en Berria; en noviembre, la humedad en el casco. Santoña premia elegir bien el polo; castiga comprar solo la postal de anchoas."
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "El casco y Berria no son intercambiables. Una vivienda «en Santoña» en el mapa puede significar comercio y bahía a pie sin arenal largo debajo, o Berria cerca con coche para el súper. Comparar solo el precio inventa una Santoña que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el súper, la bahía o Berria, y Laredo. En el casco, humedad y salitre de puerto. Hacia Berria, aparcamiento en temporada. También la luz, la orientación, el aislamiento, la ventilación y señales de humedad; la fibra; y cómo se vive esa misma calle un domingo de agosto y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de villa de trabajo y de vivienda cerca de Berria, pero lo que decide es el inmueble concreto. Un acceso sencillo, buen estado y un sitio fácil de explicar —casco o Berria bien situada— amplían el abanico; una casa mal situada respecto a la rutina elegida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Santoña",
  a2: "179.140 €",
  a3: "248.040 €",
  b2: "144.690 €",
  b3: "200.340 €",
  m2: "2.120 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Santoña encaja si atrae el casco —puerto, comercio de villa de trabajo y bahía a pie— o si se prefiere vivir hacia Berria, con playa larga y coche para la semana del casco. Hay que elegir dónde se vive porque no se vive igual. En la villa gran parte del día a día cabe; Berria pide salida. El hospital de Laredo queda a unos diez minutos; el aeropuerto de Santander, a unos treinta. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia y humedad.",
  "También encaja si se tolera el calendario —Virgen del Puerto en septiembre, Berria en verano— y el entorno de puerto y conserva."
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Santoña encaja peor si la gran playa abierta debe quedar a pie desde el centro: aquí falta —Berria queda al otro lado del monte; el casco mira a la bahía— y eso importa porque quien confunde villa marinera con arenal debajo suele llevarse sorpresa. Tampoco si el hospital debe quedar dentro del municipio: Laredo está a unos diez minutos. Los servicios son 6/10 —villa con comercio—; falta hospital local. Falta Berria a pie desde cualquier calle: hay que sacar el coche o convertir la playa en una salida deliberada, y eso pesa si se esperaba toalla debajo.",
  "Tampoco si el olor y el ritmo de puerto de trabajo no encajan, o si se decide solo tras un sábado de sol en Berria sin probar un noviembre en el casco."
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el casco y otra hacia Berria. Desde cada casa: una compra sencilla, el trayecto a la bahía o a la playa, y la salida hacia Laredo y el aeropuerto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto en Berria (aparcamiento, gente) y un día cubierto de noviembre en el casco (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda y la fibra en la dirección exacta."
] as const;

const FOTO_COMO_A = {
  src: "/fotos/cantabria-oriental/santona-puerto.jpg",
  pie: "Iglesia de Santa María del Puerto y casco de Santoña",
} as const;

const FOTO_COMO_B = {
  src: "/fotos/cantabria-oriental/santona-identidad.jpg",
  pie: "Santoña: casas frente a la bahía, con el Monte Buciero detrás",
} as const;

const FOTO_HIST_A = {
  src: "/fotos/cantabria-oriental/santona-san-martin.jpg",
  pie: "Fuerte de San Martín, Santoña",
} as const;

const FOTO_HIST_B = {
  src: "/fotos/cantabria-oriental/santona-buciero.jpg",
  pie: "Monte Buciero sobre Santoña",
} as const;

const FOTO_MAR_A = {
  src: "/fotos/cantabria-oriental/santona-berria.jpg",
  pie: "Playa de Berria: arenal largo con dunas",
} as const;

const FOTO_MAR_B = {
  src: "/fotos/cantabria-oriental/santona-marismas.jpg",
  pie: "Marismas de Santoña",
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

export default function Nuevo2SantonaPage() {
  const ficha = municipioPorSlug("santona");
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="2.120 €/m²" />
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
