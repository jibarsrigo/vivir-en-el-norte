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
 * NUEVO2 — Oleiros (Golfo Ártabro e Ferrol).
 * Piloto de continuidad: docs/continuidad-nuevo2.md
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Golfo Ártabro e Ferrol reúne el arco de rías alrededor de A Coruña: Oleiros en la orilla este de la ría do Burgo, Sada y Bergondo hacia Betanzos, Miño con arenales abiertos, Ares y Redes en la ría de Ares, y Ferrol al norte. Ciudad, hospital y aeropuerto de Alvedro quedan cerca; el cielo suele ser de los más cubiertos de las rías gallegas frente a las Rías Baixas.",
  "Oleiros es la corona residencial de ese arco: unos 38.700 habitantes repartidos en microzonas junto a la ría y la costa abierta, no una villa marinera densa con un solo casco. Santa Cruz, Mera, Perillo, Santa Cristina, Bastiagueiro y Dexo-Serantes no ofrecen la misma vida diaria.",
  "La diferencia práctica está en qué orilla o urbanización se elige: quién tiene playa o paseo a minutos andando, quién organiza más trayectos en coche hacia A Coruña, y cuánto peso tiene el veraneo de agosto en la puerta de casa.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Oleiros no se entiende como un pueblo compacto. Es un municipio de núcleos y urbanizaciones —casas bajas, calles amplias, parques, chalés y también pisos en algunos tramos— que creció como prolongación residencial de A Coruña. Quien llega buscando «el centro de Oleiros» se encuentra enseguida con otra pregunta: ¿Santa Cruz, Mera, Perillo, Santa Cristina, Bastiagueiro…?",
  "Perillo concentra buena parte de la continuidad urbana: comercio, servicios y la biblioteca central en un tejido más denso que el de una urbanización aislada. Ahí un martes de noviembre permite resolver súper, farmacia, colegio y gestiones locales sin entrar cada día en A Coruña, aunque la ciudad siga a pocos minutos para compras grandes, cultura y hospital.",
  "Santa Cruz ofrece otra escala: bahía pequeña, paseo, puerto deportivo y el castillo sobre un islote unido por pasarela. Se puede bajar a caminar junto al agua y mirar A Coruña al otro lado de la ría, pero no es una lonja densamente marinera: es un núcleo residencial con paisaje de postal y ritmo de orilla.",
  "Mera combina faro, playas y un núcleo más bajo junto a la costa. Bastiagueiro aporta un arenal más abierto hacia el Atlántico. Santa Cristina, en la ría, es el paseo y el baño abrigado que mucha gente asocia con «vivir en Oleiros». Tierra adentro, hacia urbanizaciones más alejadas de la orilla, el silencio vuelve antes y el coche organiza más trayectos entre casa, playa y ciudad.",
  "En verano cambia el peaje. Santa Cristina, Mera y Bastiagueiro reciben toallas, tráfico y aparcamiento escaso en la orilla; San Juan anima la costa y las noches de julio y agosto suben el volumen junto al paseo. Vivir en primera línea de playa significa contar con semanas ruidosas y plazas disputadas. Quien viva unos minutos tierra adentro nota antes el ritmo residencial del resto del año.",
  "El coche tiene peso medio y muy desigual según microzona. Hay bus frecuente hacia A Coruña por la AC-12 / N-VI y accesos a la AP-9, pero los núcleos están repartidos: una vivienda puede tener el súper a pie y la playa a cinco minutos, y otra necesitar el coche para casi cada cambio de escena. El CHUAC, hospital público de referencia, queda a unos diez minutos desde Perillo o Santa Cristina; el privado HM Modelo, a unos quince. Desde Mera o Dexo el trayecto se alarga y el tráfico de la ría de O Burgo pesa a ciertas horas. Alvedro está a unos diez minutos; Santiago-Lavacolla, con más destinos, a unos cuarenta y cinco.",
  "Fuera de agosto Oleiros recupera un ritmo residencial ordenado, de clase media-alta coruñesa, con vida local y capital cerca. Primavera y otoño dejan Santa Cruz y Dexo más fáciles de disfrutar. Si solo se conoce un sábado de sol en Santa Cristina, la imagen es de folleto; un noviembre cubierto enseña el cielo real del golfo.",
] as const;

const CLIMA_NUEVO2 = [
  "Oleiros no tiene observatorio propio. La referencia cercana son las normales de AEMET en A Coruña —a unos diez minutos—: alrededor de 1.939 horas de sol y unos 49 días despejados en el aeropuerto de Alvedro, y del orden de 1.000 mm de precipitación anual en el observatorio de la ciudad, frente a unas 2.800 horas y 120 jornadas claras en Mallorca. Es de los cielos más cubiertos de las rías gallegas. La llovizna también aparece en julio y agosto.",
  "El verano es suave: medias alrededor de 19 °C, con máximas que raramente sostienen el calor intenso de Baleares. Santa Cristina, Mera y Bastiagueiro ofrecen agua de ría o costa relativamente abrigada, en general más usable muchos días que Riazor en la capital; sigue siendo fresca frente al Mediterráneo, pero permite baños cortos y paseos largos cuando el Atlántico abierto no invita.",
  "Eso cambia la casa y el exterior. Terraza y jardín, que en agosto parecen el centro de la vida, se usan mucho menos entre noviembre y febrero. Orientación, aislamiento, ventilación y rastros de humedad merecen atención: la humedad de ría y la sucesión de jornadas grises pesan más que una cifra de temperatura mínima.",
] as const;

const VIVIR_NUEVO2 = [
  "Cambiar Mallorca por Oleiros no es solo cambiar de cielo: se pasa a una corona residencial repartida, con A Coruña como apoyo urbano a minutos. El día a día sin coche es incompleto si se espera resolverlo todo andando desde un único centro; sí puede ser cómodo dentro de una microzona bien elegida —Perillo para servicios, Santa Cristina o Mera para orilla— a cambio de aceptar desplazamientos entre núcleos.",
  "Llegar de fuera es habitual. Se oye gallego en el ayuntamiento y en el comercio; el castellano basta para lo cotidiano. Entre semana manda el ir y venir hacia A Coruña; en julio y agosto sube el volumen en la orilla. Quien busque solo veraneo encontrará ruido en primera línea; quien busque vecinos todo el año, también, en escala de urbanización ordenada, no de capital densa.",
  "La sanidad primaria se resuelve en el municipio. Urgencias y especialidades, en la ciudad: empadronarse aquí asigna médico de cabecera local y hospital de referencia en el CHUAC. No es aislamiento; es asumir que la gran sanidad está en la capital cercana, al mismo trayecto corto que el aeropuerto.",
  "Mantener el vínculo con Mallorca pasa por Alvedro (Palma sobre todo en verano) o por Santiago-Lavacolla (más destinos casi todo el año). La programación cambia: conviene comprobar temporada y horarios vigentes.",
  "Predominan chalés y casas bajas; también pisos. Hay obra nueva y fibra en buena parte del municipio, pero la fibra no debe darse por sentada en cada dirección. En la orilla pesan salitre, ocupación de agosto y precio; tierra adentro, orientación, parcela y distancia real a playa y súper.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Santa Cruz concentra la huella histórica más visible del municipio. El castillo se levantó a finales del siglo XVI, tras el ataque de la Armada inglesa de Francis Drake al puerto de A Coruña, para reforzar la defensa de la bahía. Está en un islote unido al puerto por una pasarela peatonal: no es un decorado reciente, sino una pieza defensiva que luego pasó por usos civiles —incluida, en el siglo XIX, la propiedad ligada a la familia de Emilia Pardo Bazán— y hoy alberga salas municipales y la sede del CEIDA, el centro de divulgación ambiental de Galicia.",
  "Ese frente de Santa Cruz —castillo, paseo, pequeño puerto— explica una Oleiros que miró siempre a la ría y a la capital, no una villa de lonja densa como Redes o un arsenal como Ferrol. El crecimiento moderno como corona residencial de A Coruña es la capa que más se nota al vivir aquí: urbanizaciones, equipamientos, parques y casas bajas sobre un territorio que antes era más rural y costero.",
  "El otro carácter del municipio está en Dexo-Serantes. Declarado Monumento Natural en el año 2000, protege una franja de acantilados e islotes entre el cabo de Mera y el puerto de Lorbé —del orden de once kilómetros de costa abierta—. Es la Oleiros atlántica y brava, distinta de la ría calmada de Santa Cristina: senda, faro de Mera, Aula del Mar en la antigua casa del farero, y un paisaje que pertenece a la Costa Ártabra y a la Reserva de la Biosfera Mariñas Coruñesas e Terras do Mandeo.",
  "Leer Oleiros hoy es leer esas dos herencias a la vez: la orilla de ría domesticada para residencia y ocio coruñés, y la costa de acantilado que exige caminar y mirar el Atlántico de otra manera. Ninguna sola foto de urbanización cuenta el municipio entero.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "En Oleiros conviene separar playa de ría, playa más abierta, paseo corto y senda de acantilado. No son la misma salida ni el mismo ritmo.",
  "Santa Cristina es la orilla de ría más asociada a la vida diaria: arenal, paseo y agua relativamente abrigada, con A Coruña visible al otro lado. Un martes de junio la toalla cabe; un domingo de agosto el aparcamiento no. Quien viva cerca puede incorporar baño y paseo a la semana; quien viva tierra adentro convierte Santa Cristina en un destino corto en coche.",
  "Santa Cruz ofrece otra relación con el agua: bahía pequeña, paseo alrededor del islote del castillo y puerto deportivo. Sirve para caminar junto a la ría y mirar la ciudad, más que para un arenal amplio de toallas. Es un paseo de escala íntima, repetible, con el castillo como referencia visual.",
  "Mera combina núcleo, playas y el faro sobre la roca. Desde el faro se entiende el golfo: las bocas de las rías y el Atlántico abierto. Bajar a la arena aquí es otra experiencia que Santa Cristina: más costa, menos ría cerrada. Espiñeiro y tramos próximos completan ese tramo marítimo.",
  "Bastiagueiro es la playa mayor y más abierta del municipio: oleaje más presente, más espacio, más uso deportivo y veraniego. Encaja quien quiera arenal amplio; no quien busque la calma de una ensenada de ría. En temporada alta el acceso y el aparcamiento forman parte del plan.",
  "Dexo-Serantes cambia de registro. La senda costera —varios kilómetros entre Mera y Lorbé— recorre acantilados, entrantes y miradores. No es el paseo despues de comer junto al chiringuito: pide calzado, tiempo y aceptar viento. El Aula del Mar, en la antigua casa del farero de Mera, ayuda a situar el espacio natural. Un tramo de unos pocos kilómetros ya es una tarde completa.",
  "A Coruña queda a unos diez minutos para compras grandes, cultura y el contraste de playa urbana atlántica (Riazor). Gandarío, en Bergondo, amplía el arenal de ría templada si se quiere otra orilla. En Oleiros, el mar de diario suele ser Santa Cristina, Mera o Bastiagueiro según la vivienda; Dexo es la salida cuando la ría se queda corta.",
] as const;

const CASA_NUEVO2 = [
  "En Oleiros, comprar casa es decidir primero microzona. Un anuncio que solo diga «Oleiros» puede ocultar si la puerta da a Perillo (servicios y continuidad urbana), a Santa Cristina (ría y verano cargado), a Mera (faro y costa), a Santa Cruz (bahía y castillo) o a una urbanización interior con más silencio y más coche.",
  "Predominan chalés y casas bajas con parcela; también hay pisos. La tipología permite jardín, garaje y separación de vecinos, a cambio de más mantenimiento de cubierta, fachada, cierres y terreno. En la orilla hay que mirar salitre, humedad y ocupación de agosto; tierra adentro, orientación al sol, pendiente de parcela y distancia real al súper y a la playa que se usaría.",
  "El precio municipal de referencia ronda 2.605 €/m². Con esa media, las franjas A/B de la tabla sitúan tipologías de dos y tres habitaciones; una casa unifamiliar en urbanización o con parcela buena suele separarse al alza. El metro no describe igual una vivienda junto al paseo de Santa Cristina y otra hacia el interior.",
  "Antes del precio conviene recorrer la rutina: puerta → coche → compra → playa o paseo → salida hacia A Coruña. En agosto, repetir el ejercicio de aparcamiento en la orilla elegida. En noviembre, mirar luz y humedad en la casa. Oleiros premia el orden residencial; castiga mezclar microzonas como si fueran el mismo producto.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "Santa Cruz, Mera, Perillo, Santa Cristina y Bastiagueiro no son intercambiables. Comparar precio sin comparar rutina (coche, playa, súper, ruido de agosto) inventa un Oleiros que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Acceso real y aparcamiento; recorrido a pie o en coche hasta súper, centro de salud y playa habitual; orientación, luz, ventilación, aislamiento y señales de humedad; estado de cubierta y fachada; parcela y pendientes; salitre en orilla; fibra en la dirección exacta; y cómo se vive esa misma calle un domingo de agosto y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Mercado intermedio-alto de corona residencial: la demanda existe, pero el inmueble concreto pesa. Acceso sencillo, buen estado, luz, aparcamiento y una microzona práctica amplían el abanico de futuros compradores; una casa muy expuesta, difícil de mantener o mal situada respecto a servicios lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Oleiros",
  a2: "220.123 €",
  a3: "304.785 €",
  b2: "177.791 €",
  b3: "246.173 €",
  m2: "2.605 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Puede encajar si se busca urbanización ordenada o casa baja con playa a minutos y A Coruña a unos diez minutos como ciudad de referencia, aceptando que la vida real depende de la microzona —Santa Cruz, Mera, Perillo, Santa Cristina, Bastiagueiro— y no de un Oleiros único.",
  "También si se quiere resolver lo básico (súper, centro de salud, colegio) en el municipio y usar la capital para hospital, compras grandes y cultura, sin vivir en densidad de casco antiguo ni en ciudad naval.",
  "Y si el baño de diario puede ser ría o costa suave (Santa Cristina, Mera, Bastiagueiro) y Dexo-Serantes queda como salida de acantilado cuando apetece otro paisaje.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Puede encajar peor si el presupuesto para tres habitaciones o para un chalé debe quedar en franja media del golfo: el metro de referencia ronda 2.605 €/m² y esas tipologías entran con facilidad en franja cara. Ferrol, Bergondo o Sada suelen bajar el precio; Sada, además, ofrece villa con puerto.",
  "También si se busca casco gótico, aldea marinera densa tipo Redes o ciudad con hospital a pie: aquí mandan el chalé, el paseo y la corona residencial.",
  "Y si el cielo debe parecerse al de Mallorca. La referencia de A Coruña da mucho menos sol y muchos más días cubiertos, con llovizna también en verano. Decidir solo tras un sábado soleado en Santa Cristina, sin probar noviembre ni el aparcamiento de agosto, suele llevar a sorpresa.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Elegir dos o tres microzonas candidatas y tratarlas como sitios distintos. Desde cada vivienda real: compra sencilla, trayecto a la playa o paseo que se usaría, y salida hacia A Coruña y al CHUAC en hora punta.",
  "Pasar una tarde de verano en la orilla elegida (aparcamiento, ruido, ocupación) y visitar la misma casa un día cubierto de noviembre (luz, humedad, jardín).",
  "Caminar un tramo de Dexo-Serantes o subir al faro de Mera si el atractivo incluye costa abierta, no solo ría.",
  "Comprobar fibra, orientación y estado de la vivienda en la dirección exacta; en orilla, salitre y cerramientos.",
] as const;

const FOTO_COMO_RIA = {
  src: "/fotos/golfo-artabro-e-ferrol/oleiros-identidad.jpg",
  pie: "Santa Cristina: casas frente a la ría, con el monte detrás",
} as const;

const FOTO_COMO_PERILLO = {
  src: "/fotos/golfo-artabro-e-ferrol/oleiros-perillo.jpg",
  pie: "Perillo: plaza y tejido residencial junto a la ría",
} as const;

const FOTO_HISTORIA_CASTILLO = {
  src: "/fotos/golfo-artabro-e-ferrol/oleiros-santa-cruz.jpg",
  pie: "Castillo de Santa Cruz: muralla y garita sobre la ría",
} as const;

const FOTO_MAR_SANTA_CRISTINA = {
  src: "/fotos/golfo-artabro-e-ferrol/oleiros-bastiagueiro.jpg",
  pie: "Santa Cristina: arenal de ría con A Coruña al fondo",
} as const;

const FOTO_MAR_MERA = {
  src: "/fotos/golfo-artabro-e-ferrol/oleiros-mera.jpg",
  pie: "Faro de Mera sobre la costa de Oleiros",
} as const;

const FOTO_MAR_DEXO = {
  src: "/fotos/golfo-artabro-e-ferrol/oleiros-dexo.jpg",
  pie: "Dexo-Serantes: roca y acantilado hacia el Atlántico",
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

export default function Nuevo2OleirosPage() {
  const ficha = municipioPorSlug("oleiros");
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
        {COMO_SE_VIVE_NUEVO2.slice(0, 4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_COMO_RIA.src} pie={FOTO_COMO_RIA.pie} />
        <Foto src={FOTO_COMO_PERILLO.src} pie={FOTO_COMO_PERILLO.pie} />
        {COMO_SE_VIVE_NUEVO2.slice(4).map((p) => (
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
        <Foto src={FOTO_HISTORIA_CASTILLO.src} pie={FOTO_HISTORIA_CASTILLO.pie} />
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
        <Foto src={FOTO_MAR_SANTA_CRISTINA.src} pie={FOTO_MAR_SANTA_CRISTINA.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(2, 4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_MAR_MERA.src} pie={FOTO_MAR_MERA.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(4, 6).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_MAR_DEXO.src} pie={FOTO_MAR_DEXO.pie} />
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{MAR_RIO_CAMINO_NUEVO2[6]}</p>
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Casa" varianteTarjetaV1>
        {CASA_NUEVO2.slice(0, 2).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="2.605 €/m²" />
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
