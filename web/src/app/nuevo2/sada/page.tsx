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
 * NUEVO2 — Sada (Golfo Ártabro e Ferrol).
 * Eje: casco / Fontán (villa a pie) vs tierra adentro (parcela y coche).
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Golfo Ártabro e Ferrol reúne las rías y la costa alrededor de A Coruña: Oleiros al este de la ría do Burgo; Sada y Bergondo hacia Betanzos; Miño con la Praia Grande; Ares y Redes; y Ferrol al norte. El hospital y el aeropuerto de Alvedro quedan cerca. El cielo suele ser más gris y lluvioso que en las Rías Baixas.",
  "Sada es la villa con puerto de esa zona: unos diecisiete mil habitantes en la ría de Betanzos, con casco reconocible, paseo y comercio, a un precio más bajo que Oleiros. No es urbanización repartida ni ciudad: es una villa de ría donde se puede organizar el día a día básica sin entrar cada día en A Coruña.",
  "Lo que más cambia la vida diaria es dónde queda la casa respecto al casco y a Fontán —el frente del puerto deportivo y el paseo—. Junto al puerto puedes comprar, bajar al paseo y acercarte a la playa urbana a pie; tierra adentro ganas parcela y silencio, y casi cada bajada al agua o al súper pide coche.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Sada reúne unos diecisiete mil habitantes en la ría de Betanzos, y se siente villa de verdad: el casco tiene comercio a pie de calle y un frente reconocible en Fontán —el puerto deportivo y el paseo que mucha gente asocia con «vivir en Sada»—. Quien llega de fuera descubre enseguida que hay que elegir. En el casco, cerca de Fontán, se puede hacer la compra, ir al centro de salud y caminar hasta el agua sin convertir cada mañana en un viaje. Tierra adentro —en las calles más alejadas del puerto, donde abundan casas con parcela— el jardín y el silencio ganan, y hace falta sacarlo del garaje para bajar al paseo, a la playa urbana o a muchas gestiones. En pocos minutos se pasa de una forma de vivir Sada a otra, y esa diferencia acaba importando más que la imagen uniforme de la villa en el mapa.",
  "Un martes de noviembre, en el casco, se puede resolver una compra sencilla, pasar por la farmacia y bajar al paseo sin depender de A Coruña para lo diario. Las calles están juntas; hay sensación de villa marina de escala manejable. La capital sigue a unos quince minutos para el hospital, una compra grande o el cine, pero una parte de la semana se resuelve aquí. Quien elige el casco elige esa comodidad a pie: lo que no elige es el silencio de una parcela lejos del verano del paseo.",
  "Sin coche la semana cambia según ese mismo eje. Desde el casco, el CHUAC —hospital público grande de A Coruña— suele quedar a unos quince minutos; Alvedro, el aeropuerto de A Coruña, también alrededor de quince. Hay bus hacia la capital y acceso a la AP-9, pero quien vive tierra adentro suele necesitar el coche casi cada vez que quiere súper, playa o gestiones. A Coruña funciona como ciudad de apoyo para lo que la villa no cubre del todo; Sada, a cambio, ofrece un casco donde la ría y la compra caben en el mismo radio corto.",
  "Entre agosto y noviembre cambia sobre todo el ritmo junto a Fontán y la playa urbana. En verano el veraneo llena el paseo: terrazas, coches buscando hueco, gente en la orilla. A mediados de agosto las fiestas patronales —en honor a Santa María, San Roque y San Mamede— ocupan varios días; el 18 de agosto la Sardiñada, fiesta de interés turístico de Galicia, concentra miles de personas en el arbolado del Curruncho, junto a la playa, con sardinas asadas y fuegos artificiales. Vivir en primera línea del paseo significa semanas ruidosas y aparcamiento disputado. Tierra adentro ese contraste se nota menos. Meses después, en un martes húmedo, el mismo puerto vuelve a sentirse villa tranquila. No son dos Sadas distintas: son dos ritmos que forman parte de vivir aquí todo el año.",
  "También por eso la elección entre el casco junto a Fontán y tierra adentro cambia bastante la vida diaria. Junto al puerto se tiene la compra y el paseo metidos en la escena cotidiana, a cambio de un verano más lleno. Tierra adentro se reduce parte de esa intensidad y gana parcela, pero casi cada bajada al agua pide coche. Esa diferencia de sitio acaba importando mucho más que la imagen uniforme de la villa vista en un mapa.",
] as const;

const CLIMA_NUEVO2 = [
  "Mallorca deja alrededor de 2.800 horas de sol al año; Sada, con la referencia de A Coruña, se mueve cerca de 2.000 horas y unos 1.050 mm de lluvia. Menos luz, más días húmedos y una humedad que se nota en casa. No hay estación propia en la villa. También aquí llovizna en julio y agosto. Un día puede empezar gris, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "En verano el contraste se nota aún más. Medias alrededor de 19 °C: no pasas el calor de Baleares. En la playa urbana de Sada o en Gandarío —arenal largo de ría en Bergondo, a unos minutos— el agua suele estar entre 18 y 20 °C, más usable muchos días en que Riazor, en A Coruña, no invita. Quien vive en el casco lo nota al bajar al paseo; quien vive tierra adentro, al llegar en coche a la orilla. Un frente gris de noviembre cuenta más que un sábado de sol en Fontán.",
] as const;

const VIVIR_NUEVO2 = [
  "Cambiar Mallorca por Sada no es solo cambiar de clima: se pasa a una villa de ría con casco caminable, no a una urbanización repartida como Oleiros ni a una ciudad como A Coruña. En Mallorca puede ser habitual pensar primero en kilómetros; aquí unos pocos cientos de metros separan el súper del paseo si vives en el casco —o convierten la misma semana en trayectos en coche si vives tierra adentro—. Esa elección modifica decisiones tan sencillas como salir a comprar, bajar a la playa o dejar el coche.",
  "También cambia la relación entre coche, costa y ciudad de apoyo. En el casco gran parte del día a día cabe a pie; el hospital y las compras grandes piden A Coruña. Tierra adentro el coche entra casi cada cambio de sitio. A cambio, Alvedro queda a unos quince minutos y Santiago-Lavacolla, con más destinos, a unos cincuenta: la escala de villa no significa aislamiento. Se oye gallego en el comercio; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. Agosto llena Fontán y la playa urbana de movimiento —y las fiestas de San Roque, con la Sardiñada, concentran gente de fuera—; en noviembre el mismo paseo recupera holgura y la villa sigue abierta. Para alguien acostumbrado a Mallorca, donde también existe presión estival, la diferencia está en la escala: el cambio se concentra en un frente de ría y un casco pequeño. Vivir aquí todo el año significa aceptar esas dos caras —el verano concurrido en la orilla y los meses húmedos de villa— como partes de una misma vida, no elegir únicamente un sábado de sol en el puerto.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "El puerto deportivo y el paseo de Fontán cuentan una villa que miró a la ría de Betanzos como ocio y residencia cerca de A Coruña, no solo como oficio de pesca. El casco concentra comercio en un tejido reconocible: esa es la diferencia que se nota al llegar desde Oleiros, donde la vida se reparte en sitios distintos sin una sola calle mayor.",
  "En la punta de Fontán quedan restos del castillo del mismo nombre: una defensa de principios del siglo XVIII, levantada junto a la de Corbeiroa para proteger la bahía y la industria textil de jarcias y lonas —cuerdas y velas para la marina— que se asentó aquí a finales del XVII antes de trasladarse a Ferrol. Hoy el lugar sirve sobre todo de mirador sobre el puerto y la playa de Morazón, y de arranque de paseos por la costa.",
  "Tierra adentro —más lejos del puerto— no hay otro casco histórico que contar: el crecimiento reciente son casas con parcela y calles más abiertas, sin el paseo debajo de la puerta. Sigue siendo Sada, pero la vida diaria ya no gira alrededor del agua. Si se quiere un casco de piedra antiguo sin entrar en A Coruña, Betanzos —villa histórica a un trayecto corto— lo tiene a mano.",
  "Fontán y la parcela interior no se compran igual. Uno arrastra puerto, paseo y verano de villa; el otro, jardín y coche para bajar a la orilla. El anuncio «Sada» solo no basta.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar de casi todos los días aquí es ría —agua más quieta que en el Atlántico abierto—, no Doniños ni Riazor. La playa urbana de Sada forma parte del frente de la villa: quien vive cerca del casco puede bajar entre semana; quien vive tierra adentro lo convierte en un destino corto en coche. Un martes de junio suele haber sitio para la toalla; un domingo de agosto el paseo se llena y cuesta aparcar.",
  "Para caminar sin organizar una salida larga, el paseo de Fontán es la experiencia más sencilla: puerto deportivo, orilla y vistas de la ría. Se camina junto al agua más que tender la toalla en un arenal infinito. Morazón, junto a la punta del castillo, es un arenal pequeño de aguas tranquilas; Cirro completa opciones de baño dentro del radio cercano.",
  "Cuando se quiere más arena, Gandarío —en Bergondo, a unos minutos— amplía el arenal de ría: más de un kilómetro, con agua que en verano suele moverse hacia 18–20 °C. No está debajo de Fontán; es una salida elegida. Si ese día no apetece la playa, Betanzos ofrece calles de piedra a un trayecto corto.",
  "Todo esto explica mejor Sada que contar playas. En el casco la ría manda en la semana; tierra adentro la orilla es salida y el coche abre casi cada bajada. A Coruña queda a unos quince minutos cuando hace falta ciudad, hospital o el contraste de una playa atlántica abierta.",
] as const;

const CASA_NUEVO2 = [
  "En Sada el casco junto a Fontán y la tierra adentro no se viven igual. Un anuncio que solo diga «Sada» puede ocultar si la casa da al paseo y al verano cargado, o a una parcela con más silencio y coche para bajar al agua.",
  "En el casco y el entorno del puerto abundan pisos y viviendas; tierra adentro, más parcela. Junto a la orilla notarás humedad y gente de agosto; tierra adentro, cuántos minutos de verdad hay hasta el súper y el paseo. Hay obra nueva y fibra en buena parte del municipio, pero conviene comprobarlas en la dirección exacta.",
  "El precio medio de referencia ronda 1.714 €/m² —más bajo que Oleiros o A Coruña—. Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa; una casa con buena parcela suele costar más. El metro no describe igual una vivienda junto al paseo de Fontán y otra hacia el interior.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra, el paseo o la playa, y la salida hacia el CHUAC o Alvedro. En agosto, el aparcamiento junto a Fontán; en noviembre, la luz y la humedad. Sada premia elegir bien el lado; castiga comparar casco y tierra adentro como si fueran el mismo producto.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "El casco junto a Fontán y tierra adentro no son intercambiables. Una vivienda «en Sada» en el mapa puede significar súper y paseo a pie con verano lleno, o parcela y coche para bajar a la orilla. Comparar solo el precio inventa una Sada que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el súper, el coche y el paseo o la playa que se usaría. También la luz, la orientación, el aislamiento, la ventilación y señales de humedad; junto a la orilla, la humedad de la ría; y cómo se vive esa misma calle un domingo de agosto —o durante la Sardiñada— y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda residencial y de segunda residencia junto a la ría, pero lo que decide es el inmueble concreto. Un acceso sencillo, buen estado, luz y un sitio fácil de explicar —casco práctico o parcela usable— amplían el abanico de compradores; una casa muy expuesta, difícil de mantener o mal situada respecto a la rutina elegida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Sada",
  a2: "144.833 €",
  a3: "200.538 €",
  b2: "116.981 €",
  b3: "161.973 €",
  m2: "1.714 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Sada encaja si atrae una villa con puerto, paseo y agua de ría, con A Coruña a unos quince minutos para el hospital y la ciudad, aceptando que hay que elegir una forma concreta de vivir el municipio. En el casco junto a Fontán la compra y el paseo quedan a mano, a cambio de un verano más lleno; tierra adentro ganan parcela y silencio, a cambio de coche para bajar a la orilla. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol y más lluvia y humedad.",
  "También encaja si el baño de casi todos los días puede ser de ría —playa urbana o Gandarío a unos minutos— y se tolera el verano activo en Fontán y las fiestas de agosto eligiendo bien la calle, no la primera fila del paseo más ruidosa.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Sada encaja peor si se busca chalé de urbanización costera como en Mera —tramo atlántico de Oleiros— o una ciudad con el hospital a pie: aquí mandan la villa de ría y el CHUAC a unos quince minutos. Tampoco si se necesita el silencio de parroquia en primera línea del paseo en agosto.",
  "Y si el cielo debe parecerse al de Mallorca, o si se decide solo tras un sábado de sol en Fontán sin probar un noviembre ni el aparcamiento de la Sardiñada, suele llevar a sorpresa.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda junto a Fontán o al casco y otra tierra adentro. Desde cada casa: una compra sencilla, el trayecto al paseo o a la playa que se usaría, y la salida hacia el CHUAC y Alvedro en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en verano en el paseo (aparcamiento, ruido, gente) y un día cubierto de noviembre (luz, humedad). Si la calle cae cerca del Curruncho o del recorrido festivo, preguntar por agosto. Y comprobar la fibra y el estado de la vivienda en la dirección exacta.",
] as const;

const FOTO_COMO_PUERTO = {
  src: "/fotos/golfo-artabro-e-ferrol/sada-puerto.jpg",
  pie: "Puerto deportivo de Sada, en Fontán",
} as const;

const FOTO_COMO_VILLA = {
  src: "/fotos/golfo-artabro-e-ferrol/sada-villa.jpg",
  pie: "Villa de Sada junto a la ría de Betanzos",
} as const;

const FOTO_HISTORIA_FONTAN = {
  src: "/fotos/golfo-artabro-e-ferrol/sada-fontan.jpg",
  pie: "Restos del castillo de Fontán sobre la bahía",
} as const;

const FOTO_MAR_PLAYA = {
  src: "/fotos/golfo-artabro-e-ferrol/sada-playa.jpg",
  pie: "Playa urbana de Sada: agua de ría",
} as const;

const FOTO_MAR_GANDARIO = {
  src: "/fotos/golfo-artabro-e-ferrol/sada-gandario.jpg",
  pie: "Gandarío: arenal de ría a unos minutos de Sada",
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

export default function Nuevo2SadaPage() {
  const ficha = municipioPorSlug("sada");
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
        <Foto src={FOTO_COMO_PUERTO.src} pie={FOTO_COMO_PUERTO.pie} />
        <Foto src={FOTO_COMO_VILLA.src} pie={FOTO_COMO_VILLA.pie} />
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
        <Foto src={FOTO_HISTORIA_FONTAN.src} pie={FOTO_HISTORIA_FONTAN.pie} />
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
        <Foto src={FOTO_MAR_PLAYA.src} pie={FOTO_MAR_PLAYA.pie} />
        <Foto src={FOTO_MAR_GANDARIO.src} pie={FOTO_MAR_GANDARIO.pie} />
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="1.714 €/m²" />
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
