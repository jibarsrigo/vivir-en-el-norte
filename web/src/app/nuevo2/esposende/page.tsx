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
 * NUEVO2 — Esposende (Litoral Norte, Portugal).
 * Eje: centro / estuario del Cávado (villa, paseo) vs Ofir–Fão o Apúlia (dunas/urbanización costera; más coche o más nortada según tramo).
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Litoral Norte es la franja atlántica portuguesa entre Esposende y Vila do Conde, ya en la órbita de Porto: el estuario del Cávado, dunas protegidas y ciudades de playa con Metro. El sol es de los más altos de la tabla; el hospital y el avión se organizan hacia Porto y hacia la red hospitalaria de Póvoa de Varzim y Vila do Conde.",
  "Esposende reparte la vida entre el estuario del Cávado —el río que aquí se abre hacia el Atlántico, con paseo, puerto y villa— y las microzonas costeras: Ofir, urbanización entre pinos; Fão, núcleo antiguo en la margen izquierda; y Apúlia, dunas, molinos y playa abierta. El Parque Natural do Litoral Norte envuelve tramos del frente con pasarelas de madera sobre la duna.",
  "Lo que más cambia la vida diaria es dónde queda la casa: en el centro junto al Cávado —villa y paseo a pie— o en Ofir, Fão o Apúlia —dunas o urbanización costera, con más nortada o más coche según el tramo—. En todos esos sitios se vive en Esposende; no se vive igual.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Esposende se siente una villa de estuario y costa, no una ciudad de playa densa como Póvoa de Varzim. Quien vive en el centro junto al Cávado tiene a pie el paseo, el puerto, el comercio básico y la orilla del río, que aquí se ensancha hacia el Atlántico. Quien vive en Ofir, entre pinos y bloques, acerca las playas de Ofir y Suave Mar, pero cambia el peaje del viento y del coche respecto al núcleo. Quien vive en Apúlia, junto a las dunas y los molinos, tiene el Atlántico abierto delante y un aparcamiento más difícil en agosto. Quien llega de fuera no debe confundir el paseo del estuario con la duna de Apúlia.",
  "Un martes de noviembre, en el centro, la villa funciona con mucho menos movimiento que en agosto. En nuestra escala los servicios quedan en 6/10: hay villa completa para el día a día, pero falta hospital en el municipio. Quien elige el Cávado tiene paseo y compra cercana. Quien elige Apúlia u Ofir gana playa; esa misma mañana parte de la compra seria o el hospital ya piden trayecto hacia Póvoa o Vila do Conde.",
  "Sin coche, en el núcleo caben compra sencilla y paseo andando. En Apúlia u Ofir depende de la calle concreta: a veces se baja a la playa a pie y casi todo lo demás pide coche. El hospital práctico es la red de Póvoa de Varzim y Vila do Conde, a unos veinticinco minutos. El aeropuerto de Porto-Sá Carneiro ronda los treinta y cinco minutos. Hay A-28 y bus; aquí no llega el Metro do Porto. Esposende ofrece costa residencial con estuario; no ofrece hospital local ni ciudad-balneario con metro bajo la ventana.",
  "La diferencia entre julio y noviembre se nota al salir de casa. En agosto, hacia finales de mes, las fiestas de la Senhora da Bonança en Fão —con procesión hacia la playa— y, en otros años, la Festa da Cerveja llenan Fão de gente, música y aparcamiento más difícil. En julio y agosto la ocupación de Ofir y Apúlia sube, sopla la nortada de tarde y encontrar sitio cerca de la arena se vuelve más difícil. Meses después, un martes húmedo recupera una escala más residencial. No son dos Esposendes distintos: son dos ritmos del mismo sitio a lo largo del año.",
  "También por eso la elección entre el centro del Cávado y Ofir o Apúlia cambia bastante la vida diaria. En el estuario el paseo y la villa quedan metidos en la rutina, a cambio de menos oleaje bajo la ventana. En Apúlia la duna y el viento forman parte del día; en Ofir, la urbanización entre pinos acerca la playa y aleja un poco el casco. Esa diferencia acaba importando más que la media de precios del concelho.",
] as const;

const CLIMA_NUEVO2 = [
  "Esposende supone un cambio de clima claro respecto a Mallorca: costa llana con unas 2.550 horas de sol —aún por debajo de Mallorca—, lluvia frecuente en invierno y viento alto. La nortada de tarde en verano —viento norte fuerte— se nota sobre todo en Apúlia y Ofir. Un día puede empezar cubierto, abrirse y terminar con viento que pide abrigo.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 20 °C: no pasas el calor de Baleares. El agua suele estar entre 16 y 18 °C. Quien vive junto al estuario lo nota en el paseo del Cávado, con más abrigo que en la duna abierta; quien vive en Apúlia, al salir a la playa con viento. Un enero en el centro cuenta más que un sábado de sol en Ofir.",
] as const;

const VIVIR_NUEVO2 = [
  "Cambiar Mallorca por Esposende no significa únicamente cambiar de clima: se llega a una villa con microzonas muy distintas —Cávado, Ofir, Fão o Apúlia—, no a una ciudad con Metro como Póvoa. En Mallorca puede ser habitual pensar primero en servicios a pie; aquí eso depende del barrio. Esa elección modifica decisiones tan sencillas como bajar a la duna o sacar el coche hacia el hospital.",
  "También cambia el peso del coche. En el centro se resuelve más a pie; el hospital queda fuera, hacia Póvoa o Vila do Conde. Ir y volver a Mallorca suele pasar por Porto, relativamente cerca. Se oye portugués; el ambiente varía entre villa de estuario y urbanización de pinos con veraneo.",
  "Y cambia el contraste entre estaciones. Agosto llena la costa; en noviembre queda una vida anual más quieta. Para alguien acostumbrado a Mallorca, la diferencia está en el viento, el agua fría y en no confundir el estuario con Apúlia. Vivir aquí todo el año significa aceptar nortada, hospital fuera del municipio y elegir bien dónde queda la casa dentro de Esposende.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Esposende se entiende por el Cávado y por el litoral protegido más que por un único monumento. El estuario —el río que se abre al Atlántico— organizó puerto, villa y paseo. En Fão, durante siglos, pesaron la pesca, el sal y la construcción naval: desde el siglo XVI aportaban carabelas pequeñas al comercio de cabotaje, y en el XIX y la primera mitad del XX los astilleros de Fão y Esposende construyeron barcos de pesca y de altura hasta su declive hacia finales de los años cuarenta. Quien conozca solo una foto de molinos en Apúlia debe sumar esa doble cara: río trabajado y océano expuesto.",
  "Ofir cuenta la historia residencial reciente del litoral: urbanización entre pinos, torres y chalés de veraneo y segunda residencia, con el nombre ligado a leyendas de oro en la foz del Cávado. Fão aporta un núcleo antiguo distinto, con casas de brasileiros de torna-viagem en plazas como el Largo do Cortinhal y una escala de villa pequeña elevada en 1976. Apúlia, con molinos sobre la duna, marca el frente abierto al Atlántico. No son la misma forma de vivir bajo el mismo concelho: conviene pisar el paseo del estuario, Ofir y Apúlia antes de firmar.",
  "El Parque Natural do Litoral Norte protege dunas, sapales y pasarelas de madera entre Apúlia y la foz del Cávado: no es un adorno de folleto, condiciona dónde se camina y dónde se construye. Hacia el sur, Póvoa de Varzim y Vila do Conde aportan ciudad de playa, Metro y la red hospitalaria de referencia. Porto organiza el avión. Fuera del centro, Ofir y Apúlia cuentan otra historia cotidiana: más salitre o más coche, menos plaza de villa bajo la ventana.",
  "Hoy, comprar «en Esposende» sigue siendo elegir entre el centro junto al estuario —villa y paseo a pie— u Ofir, Fão o Apúlia —dunas o urbanización costera—. El anuncio del municipio no dice cuál de las dos, ni cómo se siente esa misma calle en enero frente a un sábado de agosto, ni cuánto pesa el hospital fuera. El puerto y la relación histórica con la pesca y el estuario explican el centro mejor que las torres de Ofir: la villa nació mirando al Cávado antes que a la urbanización entre pinos.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El agua en Esposende no es un solo paisaje. En el centro el Cávado organiza el día: paseo, puerto y estuario —el río que se ensancha hacia el Atlántico—. No es como estar solo en una playa de oleaje bajo la ventana: es orilla de río y villa, más abrigada que la duna abierta. En Ofir y Apúlia el Atlántico queda a pocos minutos: dunas, nortada de tarde en verano, agua que suele rondar 16–18 °C. Quien vive solo junto al estuario convierte Apúlia en una salida. Un martes de junio suele haber holgura; un domingo de agosto el aparcamiento junto a la playa se llena.",
  "Para caminar desde el centro, la marginal del Cávado convierte el río y la villa en horizonte cotidiano. Desde Apúlia, las pasarelas de madera del Parque Natural do Litoral Norte —passadiços sobre la duna— convierten el viento en parte del paseo. Desde Ofir, los pinos y el acceso a la playa cambian el peaje: hay sombra y urbanización, pero no la plaza del núcleo. El estuario abriga más que Apúlia abierta: el cuerpo lo nota en cuanto sopla la nortada de tarde.",
  "Para gestiones o hospital, el coche abre el mapa. Póvoa de Varzim y Vila do Conde cubren la red hospitalaria y una ciudad de playa a unos veinticinco minutos. Porto queda cerca por la A-28. Braga queda a unos treinta minutos si se quiere otra escala de ciudad. Aquí el día a día pide elegir estuario u Ofir/Apúlia; el hospital de mayor nivel queda fuera del municipio.",
  "En el centro el paseo queda a pie casi todos los días; en Apúlia la duna queda cerca y parte de la semana pide coche. Esa diferencia describe mejor Esposende que firmar solo por una media o por una foto de molino. Porto organiza el vuelo habitual hacia Palma. Ofir acerca urbanización y sombra de pino; el estuario acerca una orilla más abrigada. Elegir mal el tramo es el error habitual del anuncio genérico.",
] as const;

const CASA_NUEVO2 = [
  "Esposende es una villa y una costa con microzonas distintas. Una casa en el centro junto al Cávado permite paseo y buena parte del día a día andando. Una vivienda en Ofir o Apúlia acerca la playa y cambia el viento, el salitre y el coche. El anuncio que diga solo «Esposende» puede ocultar esa distancia.",
  "En el centro importan la humedad del estuario, el ruido y el aparcamiento. En Ofir y Apúlia pesan la nortada, el salitre y el trayecto real a los servicios. La fibra está señalada como sí; hay obra nueva. Conviene confirmar el edificio o la parcela.",
  "El precio medio de referencia ronda 2.462 €/m². Con esa media, las columnas A y B sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual un piso junto al estuario y un chalé en Apúlia.",
  "Antes del precio conviene recorrer la rutina desde la casa: el paseo del Cávado o la duna, la compra, y la salida hacia Póvoa y Porto. En agosto, la ocupación; en noviembre, el viento y la humedad. Esposende premia elegir bien la microzona; castiga comprar solo la media municipal.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "El centro del Cávado, Ofir y Apúlia no son intercambiables. Una vivienda «en Esposende» puede significar estuario a pie o duna con más coche. Comparar solo el precio inventa un municipio que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta la playa, la compra, el hospital hacia Póvoa o Vila do Conde, y Porto. En Apúlia y Ofir, nortada y aparcamiento en temporada. En el centro, humedad y ritmo de villa. También la luz, el aislamiento y cómo se vive esa misma calle un domingo de agosto y un martes de enero.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de costa residencial cerca de Porto, pero la liquidez depende de la microzona. Un acceso sencillo a la playa o a la villa, buen estado y una explicación clara del tramo amplían el abanico; una casa muy expuesta o mal situada lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Esposende",
  a2: "208.039 €",
  a3: "288.054 €",
  b2: "168.032 €",
  b3: "232.659 €",
  m2: "2.462 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Esposende encaja si atrae una costa residencial con estuario o dunas —Cávado, Ofir o Apúlia— y se elige la microzona con honestidad. Hay que elegir dónde se vive porque no se vive igual. El hospital queda hacia la red de Póvoa de Varzim y Vila do Conde, a unos veinticinco minutos; Porto organiza el vuelo. Frente a Mallorca, el verano es más suave, pero el cambio incluye viento, agua fría y hospital fuera del municipio.",
  "También encaja si se acepta no tener Metro y se prueba un enero en la microzona elegida.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Esposende encaja peor si se necesita hospital en el municipio: aquí falta; la referencia pública mira a Póvoa de Varzim y Vila do Conde a unos veinticinco minutos, y eso importa porque quien espera urgencias locales suele llevarse sorpresa. Tampoco si se espera una ciudad de playa densa con Metro bajo la ventana. Los servicios son 6/10 de villa; falta hospital local.",
  "Tampoco si se decide por una sola foto de duna sin probar el viento y el ritmo de enero en esa calle concreta.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el centro, en Ofir y en Apúlia. Desde cada casa: una compra, una bajada a la playa con viento, y la salida hacia Póvoa y Porto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto —ocupación y aparcamiento— y un día cubierto de noviembre —luz y humedad—. Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
] as const;

const FOTO_COMO_A = {
  src: "/fotos/litoral-norte/esposende-identidad.jpg",
  pie: "Esposende: plaza y casas del centro",
} as const;

const FOTO_COMO_B = {
  src: "/fotos/litoral-norte/esposende-ofir.jpg",
  pie: "Ofir: pinos y urbanización en Esposende",
} as const;

const FOTO_HIST_A = {
  src: "/fotos/litoral-norte/esposende-fao.jpg",
  pie: "Fão: villa antigua en Esposende",
} as const;

const FOTO_MAR_A = {
  src: "/fotos/litoral-norte/esposende-apulia.jpg",
  pie: "Molinos de Apúlia sobre las dunas",
} as const;

const FOTO_MAR_B = {
  src: "/fotos/litoral-norte/esposende-estuario.jpg",
  pie: "Estuario del Cávado en Esposende",
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

export default function Nuevo2EsposendePage() {
  const ficha = municipioPorSlug("esposende");
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="2.462 €/m²" />
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
