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
 * NUEVO2 — Ares (Golfo Ártabro e Ferrol).
 * Eje: villa de Ares (playa y servicios a pie) vs Redes (aldea marinera, verano lleno, sin súper).
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Golfo Ártabro e Ferrol reúne las rías y la costa alrededor de A Coruña: Oleiros al este de la ría do Burgo; Sada y Bergondo hacia Betanzos; Miño con la Praia Grande; Ares y Redes; y Ferrol al norte. El hospital y el aeropuerto de Alvedro quedan cerca. El cielo suele ser más gris y lluvioso que en las Rías Baixas.",
  "Ares es la villa pequeña de la ría de Ares: unos seis mil habitantes todo el año, con playa urbana pegada al casco y, a unos pocos kilómetros, Redes —aldea marinera de casas de colores, una de las más fotografiadas de Galicia—. No es Oleiros ni Sada: aquí se gana orilla vivida y escala íntima; a cambio, el hospital y el comercio grande quedan en Ferrol.",
  "Lo que más cambia la vida diaria es dónde queda la casa: en la villa de Ares —paseo, playa y compra básica a pie— o en Redes —fachadas de colores junto al puerto, calles estrechas y verano muy lleno—. En ambos sitios se vive junto a la ría; no se vive igual la semana ni el mes de agosto.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Ares reúne unos seis mil habitantes en la ría que lleva su nombre, y se siente villa pequeña de verdad: el casco baja hasta la playa urbana —unos novecientos cincuenta metros de arena de ría, con paseo— y en unos minutos a pie caben el centro de salud, farmacias, biblioteca, mercado y bares. Quien llega de fuera descubre enseguida que hay que elegir. En la villa se puede bajar a la playa, hacer una compra sencilla y hacer compra y gestiones a pie. En Redes —aldea marinera de la parroquia de Caamouco, a unos cuatro kilómetros, con casas de colores pegadas a la dársena— la postal es otra: el oficio del mar se lee en las fachadas y en el puerto, pero no hay supermercado ni banco; el coche se deja en un aparcamiento al borde y se entra a pie. En pocos minutos se pasa de una forma de vivir Ares a otra, y esa diferencia acaba importando más que la imagen uniforme de «aldea bonita» en el mapa.",
  "Un martes de noviembre, en la villa, se puede resolver una compra sencilla, pasar por la farmacia y bajar al paseo sin depender de Ferrol para lo diario. Las calles están juntas y el terreno es llano: se camina y se pedalea con facilidad. Ferrol —ciudad naval a unos veinte minutos— cubre el hospital, el súper grande y mucha oferta; A Coruña queda alrededor de media hora. Quien elige la villa elige esa comodidad junto al agua: lo que no elige es el silencio de una aldea sin comercio. En Redes esa misma mañana es más quieta y más dependiente del coche para casi cada recado.",
  "Sin coche, la villa aguanta bastante bien la semana básica; Redes, casi no. Desde Ares, el hospital Arquitecto Marcide —público de referencia en Ferrol— suele quedar a unos veinticinco minutos; Alvedro, el aeropuerto de A Coruña, alrededor de cuarenta y cinco; Santiago-Lavacolla, con más destinos, cerca de una hora y cuarto. Hay bus y acceso a la AC-133 y a la AP-9, pero quien vive en Redes o en parroquias exteriores suele necesitar el volante para súper, gestiones o salir de la aldea. Ferrol funciona como ciudad de apoyo; Ares, a cambio, ofrece una villa donde la ría y la compra básica caben en el mismo radio corto.",
  "Entre agosto y noviembre cambia sobre todo el ritmo de la orilla. En verano la población se multiplica —puede pasar de unos seis mil a cerca de dieciocho mil—: la playa urbana, Redes y Chanteiro —playa de ría en la parroquia de Cervás, con vistas hacia A Coruña— se llenan de toallas, coches y gente. El 16 de julio, en Redes, las fiestas del Carmen bajan la Virgen al mar en procesión con barcos; en la villa, las Fiestas del Mar y San Roque, hacia mediados de agosto, concentran conciertos y fuegos en el centro. El martes de Pentecostés el Voto de Chanteiro —romería hasta la ermita, festivo local— llena esa playa de comida y gente. Vivir en primera línea de la villa o en Redes significa semanas ruidosas y aparcamiento disputado. Meses después, en un martes húmedo, el mismo paseo vuelve a sentirse villa pequeña. No son dos Ares distintos: son dos ritmos que forman parte de vivir aquí todo el año.",
  "También por eso la elección entre la villa y Redes cambia bastante la vida diaria. En la villa se tiene la playa y la compra básica cerca a diario, a cambio de un verano más lleno. En Redes se gana la aldea de colores y el puerto en la puerta, a cambio de coche para el súper y de un agosto muy concurrido en calles estrechas. Esa diferencia de sitio acaba importando mucho más que la postal vista en un mapa.",
] as const;

const CLIMA_NUEVO2 = [
  "En Ares, frente a Mallorca, se nota enseguida el salto: menos sol, más días de lluvia y humedad dentro de casa. No hay estación propia; la referencia de zona ronda 1.950 horas de sol al año y cerca de 1.100 mm de lluvia. Mallorca ronda 2.800 horas de sol. El viento y la niebla son medios. También aquí llovizna en julio y agosto. Un día puede empezar gris, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "En verano el contraste se nota aún más. Medias alrededor de 19 °C: no pasas el calor de Baleares. En la playa urbana, en Redes o en Chanteiro el agua de ría suele estar entre 17 y 19 °C: más abrigada que Doniños, en Ferrol, aunque sigue fresca si vienes del Mediterráneo. Quien vive en la villa lo nota al bajar al paseo; quien vive en Redes, al salir a la dársena. Un frente gris de noviembre cuenta más que un sábado de sol en las fachadas de colores.",
] as const;

const VIVIR_NUEVO2 = [
  "Cambiar Mallorca por Ares no es solo cambiar de clima: se pasa a una villa de ría pequeña —o a una aldea marinera— con Ferrol a unos veinte minutos, no a una urbanización como Oleiros ni a una ciudad. En Mallorca puede ser habitual pensar primero en kilómetros; aquí unos pocos minutos separan el súper del paseo si vives en la villa —o convierten la misma semana en trayectos en coche si vives en Redes—. Esa elección modifica decisiones tan sencillas como salir a comprar, bajar a la playa o dejar el coche.",
  "También cambia la relación entre coche, costa y ciudad de apoyo. En la villa gran parte del día a día cabe a pie; el hospital y las compras grandes piden Ferrol. En Redes el coche entra casi cada cambio de sitio fuera de la aldea. A cambio, la orilla queda muy cerca y el terreno es llano. Ir y volver a Mallorca pide más trayecto que desde Oleiros: Alvedro a unos cuarenta y cinco minutos, Santiago-Lavacolla a unos setenta y cinco. Se oye gallego en la villa y en Redes; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. Agosto llena la playa urbana y Redes de movimiento —y las fiestas del Carmen y de San Roque concentran gente de fuera—; en noviembre el mismo paseo recupera holgura y la villa sigue abierta, aunque más quieta. Para alguien acostumbrado a Mallorca, donde también existe presión estival, la diferencia está en la escala: el cambio se concentra en una villa pequeña y una aldea, no en una ciudad. Vivir aquí todo el año significa aceptar esas dos caras —el verano concurrido en la orilla y los meses húmedos de villa— como partes de una misma vida, no elegir únicamente un sábado de sol en Redes.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "La villa creció con el mar: pesca, sal y, desde el siglo XVIII, el impulso de comerciantes catalanes en la sardina. En el barrio de O Porto, junto al agua, se asentó en la Baja Edad Media una comunidad judía dedicada al comercio de la sal; queda memoria de aquella sinagoga en un dintel con estrella de David. De ahí una villa que mira a la dársena, no un ensanche repartido.",
  "Redes es otra historia, más de aldea que de villa. El nombre viene de las redes de pesca que se tendían a secar entre punta Mourón y la playa do Río Sandeu, en la parroquia de Caamouco. Hoy la pesca comercial ha desaparecido, pero las casas de colores, la Praza do Pedregal junto al puerto y la batería de Redes —fortificación de costa construida entre 1757 y 1773, restaurada— siguen contando un oficio de ría. En julio, la procesión marítima del Carmen lo hace visible otra vez.",
  "Más arriba y hacia Cervás, la historia es de señorío y romería. Fernán Pérez de Andrade «o Bo» mandó construir en 1393 el monasterio de Santa Catalina de Montefaro; en Chanteiro dejó la ermita de la Merced, destino del Voto. En 1719 desembarcaron ingleses en el arenal de Chanteiro. Seselle y Chanteiro miran hacia la silueta de A Coruña: la misma ría, otro tramo de costa. A finales de agosto, Ares Indiano recuerda a quienes emigraron a Cuba.",
  "Quien compra aquí elige entre esas herencias: villa con playa y servicios juntos, o aldea de colores donde el súper queda fuera. No es el mismo Ares en un anuncio genérico.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar de casi todos los días aquí es ría —agua más quieta que en el Atlántico abierto—, no Doniños ni Riazor. La playa urbana de Ares forma parte del frente de la villa: quien vive en el casco puede bajar entre semana; quien vive en Redes o en parroquias exteriores lo convierte en un destino corto en coche o, desde Redes, en otra orilla de la misma bahía. Un martes de junio suele haber sitio para la toalla; un domingo de agosto el paseo se llena y cuesta aparcar.",
  "Para caminar sin organizar una salida larga, el paseo de la villa es la experiencia más sencilla: arena, orilla y casas a un lado. En Redes se camina entre fachadas de colores hasta la dársena y, subiendo, hacia la punta das Modias y la batería. Se camina junto al agua más que tender la toalla en un arenal infinito.",
  "Cuando se quiere otra orilla dentro del municipio, Seselle y Chanteiro abren vistas hacia A Coruña: playas de ría más abiertas al horizonte de la ciudad. Chanteiro concentra además la romería del Voto. Mugardos —villa marinera vecina— completa paseos por la misma ría. Ferrol aporta ciudad y, como salida de contraste, las playas atlánticas bravas a un trayecto mayor.",
  "Todo esto explica mejor Ares que contar playas. En la villa la ría forma parte de la semana; en Redes la orilla es la puerta de casa y el súper queda fuera. Ferrol y A Coruña quedan a unos veinte y treinta minutos cuando hace falta lo que la villa no cubre.",
] as const;

const CASA_NUEVO2 = [
  "En Ares hay que mirar antes villa o Redes. Un anuncio que solo diga «Ares» puede ocultar si la casa da al paseo y al verano cargado de la villa, o a las calles estrechas de Redes sin supermercado debajo.",
  "En la villa abundan pisos y viviendas cerca del paseo; en Redes, casas entre medianeras con fachada cuidada y acceso peatonal desde el aparcamiento del borde. Junto a la orilla notarás humedad y gente de agosto; en Redes, además, calles estrechas y ocupación de verano. La fibra es parcial: conviene comprobarla en la dirección exacta. Hay poca obra nueva.",
  "El precio medio de referencia ronda 1.841 €/m² —por debajo de Oleiros o A Coruña, por encima de Bergondo o Ferrol—. Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual un piso junto a la playa urbana y una casa en Redes.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra, la playa, y la salida hacia el hospital de Ferrol o Alvedro. En agosto, el aparcamiento en la villa y en Redes; en noviembre, la luz y la humedad. Ares premia elegir bien el lado; castiga comprar solo la postal de las fachadas de colores.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "La villa de Ares y Redes no son intercambiables. Una vivienda «en Ares» en el mapa puede significar súper y playa a pie con verano lleno, o aldea de colores sin comercio y coche para casi cada recado. Comparar solo el precio inventa un Ares que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el súper que se usaría, el coche y la playa. En Redes, dónde se deja el coche y cómo se llega a pie a la casa. También la luz, la orientación, el aislamiento, la ventilación y señales de humedad; junto a la orilla, la humedad de la ría; la fibra en esa dirección; y cómo se vive esa misma calle un domingo de agosto —o durante el Carmen en Redes— y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de veraneo y de vivienda junto a la ría, pero lo que decide es el inmueble concreto. Un acceso sencillo, buen estado, luz y un sitio fácil de explicar —villa práctica o aldea bien situada— amplían el abanico de compradores; una casa muy expuesta, difícil de mantener o mal situada respecto a la rutina elegida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Ares",
  a2: "155.565 €",
  a3: "215.397 €",
  b2: "125.648 €",
  b3: "173.975 €",
  m2: "1.841 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Ares encaja si atrae una villa pequeña con playa de ría a pie, o la aldea de Redes, aceptando Ferrol a unos veinte minutos para el hospital y el comercio grande, y aceptando que hay que elegir una forma concreta de vivir el municipio. En la villa la compra básica y el paseo quedan a mano, a cambio de un verano más lleno; en Redes ganan las fachadas de colores y el puerto en la puerta, a cambio de coche para el súper y de calles muy concurridas en agosto. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol y más lluvia y humedad.",
  "También encaja si el baño de casi todos los días puede ser de ría —playa urbana, Redes o Chanteiro— y se tolera el verano activo y las fiestas del Carmen y de San Roque eligiendo bien la calle, no la primera fila más ruidosa del paseo.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Ares encaja peor si se necesita hospital cerca, aeropuerto a minutos o comercio grande a pie: aquí la villa es cómoda y el resto queda en Ferrol o A Coruña. Tampoco si se busca urbanización ordenada tipo Oleiros, o si se confunde la caminabilidad de la villa con Redes —donde no hay supermercado—.",
  "Y si el cielo debe parecerse al de Mallorca, o si se decide solo tras un sábado de sol en las casas de colores sin probar un noviembre ni el aparcamiento de agosto, suele llevar a sorpresa.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en la villa de Ares y otra en Redes. Desde cada casa: una compra sencilla, el trayecto a la playa que se usaría, y la salida hacia el hospital de Ferrol y Alvedro en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en verano en la playa urbana o en Redes (aparcamiento, ruido, gente) y un día cubierto de noviembre (luz, humedad). Si la casa cae en Redes, recorrer a pie desde el aparcamiento del borde. Y comprobar la fibra y el estado de la vivienda en la dirección exacta.",
] as const;

const FOTO_COMO_REDES = {
  src: "/fotos/golfo-artabro-e-ferrol/ares-redes.jpg",
  pie: "Redes: casas de colores junto al puerto",
} as const;

const FOTO_COMO_VILLA = {
  src: "/fotos/golfo-artabro-e-ferrol/ares-villa-ria.jpg",
  pie: "Villa de Ares frente a su ría",
} as const;

const FOTO_HISTORIA_SESELLE = {
  src: "/fotos/golfo-artabro-e-ferrol/ares-seselle.jpg",
  pie: "Seselle: orilla de Ares frente a A Coruña",
} as const;

const FOTO_HISTORIA_CHANTEIRO = {
  src: "/fotos/golfo-artabro-e-ferrol/ares-chanteiro.jpg",
  pie: "Chanteiro: playa de romería y de ría",
} as const;

const FOTO_MAR_PLAYA = {
  src: "/fotos/golfo-artabro-e-ferrol/ares-playa.jpg",
  pie: "Playa urbana de Ares: arena de ría en la villa",
} as const;

const FOTO_MAR_RIA = {
  src: "/fotos/golfo-artabro-e-ferrol/ares-ria.jpg",
  pie: "Ría de Ares desde la orilla",
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

export default function Nuevo2AresPage() {
  const ficha = municipioPorSlug("ares");
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
        <Foto src={FOTO_COMO_REDES.src} pie={FOTO_COMO_REDES.pie} />
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
        <Foto src={FOTO_HISTORIA_SESELLE.src} pie={FOTO_HISTORIA_SESELLE.pie} />
        <Foto src={FOTO_HISTORIA_CHANTEIRO.src} pie={FOTO_HISTORIA_CHANTEIRO.pie} />
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
        <Foto src={FOTO_MAR_RIA.src} pie={FOTO_MAR_RIA.pie} />
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="1.841 €/m²" />
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
