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
 * NUEVO2 — Comillas (Cantabria Occidental).
 * Eje: casco bajo / playa a pie (plaza, comercio pequeño, arenal pegado)
 * vs ladera alta (Pontificia, Sobrellano, Capricho — vistas y pendientes; la playa pide bajar).
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Cantabria Occidental va de la ría de San Vicente a la bahía de Santander: villas de veraneo, dunas de Liencres, Costa Quebrada y una capital con hospital Valdecilla y aeropuerto a pocos minutos. El sol es de los más bajos de la tabla; la logística hacia Palma, de las mejores.",
  "Comillas es una villa de unos dos mil doscientos habitantes donde el patrimonio modernista —El Capricho de Gaudí, el Palacio de Sobrellano, la Universidad Pontificia— convive con una playa pegada al casco. No es San Vicente ni Suances: aquí se gana arquitectura y arena a poca distancia; a cambio, el comercio es pequeño y muy estacional, y el metro cuadrado es de los más caros de la zona.",
  "Lo que más cambia la vida diaria es la cota: cerca de la plaza y de la playa —rutina a pie, verano lleno— o más arriba en la ladera —vistas, pendientes, y bajar para la toalla o la compra—. En ambos sitios se vive en Comillas; no se vive igual.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Comillas se siente villa pequeña y cuidada: el casco —plaza de piedra, calles estrechas, comercios de escala mínima— concentra farmacia, tiendas básicas y buena parte de la semana local. Pegada al núcleo queda la playa de Comillas —arenal urbano al que se baja en pocos minutos desde buena parte del casco bajo—. Quien llega de fuera descubre enseguida que hay que elegir la cota. Abajo se puede comprar lo esencial, pasear la plaza y meter los pies en el agua andando. Más arriba, hacia el Palacio de Sobrellano —mansión neogótica del marqués de Comillas—, El Capricho —edificio de Gaudí con cerámica y torrecilla— o la Universidad Pontificia —edificio enorme en ladera—, la postal es otra: vistas y patrimonio delante, pero pendientes en cada trayecto corto y la playa ya no queda debajo de la ventana. En pocos minutos de desnivel se pasa de una forma de vivir Comillas a otra.",
  "Un martes de noviembre, en el casco bajo, se puede hacer una compra pequeña, pasar por la farmacia y bajar hacia la playa o el paseo. Los servicios llegan a 4/10 en nuestra escala: hay lo básico de villa turística cuidada, pero falta comercio grande y mucha oferta cierra o se reduce fuera de temporada. Ese cuatro no es un pueblo vacío en invierno: es una villa donde la semana mínima cabe y la semana completa pide coche hacia Torrelavega o Santander. Quien elige el casco bajo elige playa y plaza a pie; lo que no elige es autonomía de villa grande. Quien elige la ladera gana vistas y silencio; esa misma mañana la compra y la playa piden bajar.",
  "Sin coche, Comillas aguanta el radio corto del casco y se queda corta para casi todo lo demás. El coche enlaza la villa con Oyambre —playa y dunas del parque natural, a pocos minutos—, con Santillana del Mar, con Torrelavega y con el hospital. El hospital práctico es Sierrallana, a unos treinta minutos; el aeropuerto de Santander ronda los cuarenta. San Vicente queda cerca si apetece otra ría; Santander, como capital. Comillas, a cambio, ofrece patrimonio y playa en poco espacio; no ofrece hospital cerca ni comercio denso todo el año.",
  "En julio cambia el ritmo: las fiestas del Santo Cristo del Amparo —hacia mediados de mes, con procesión, verbenas y mucha gente— llenan calles y muelle. En agosto llegan también la romería de San Esteban en el Monte Corona —primer domingo— y el Día del Indiano —última semana, con ambiente de veraneo y mercado—. La playa se llena de toallas. Meses después, en un martes húmedo, el casco recupera calma: lo básico sigue, pero muchas mesas de verano ya no están. No son dos Comillas distintas: son dos ritmos del mismo pueblo a lo largo del año.",
  "También por eso la elección entre casco bajo y ladera cambia bastante la vida diaria. Abajo se ganan plaza, playa y compra mínima a pie; agosto se oye más. Arriba se ganan vistas y patrimonio; cada bajada a la toalla o al súper cuenta la pendiente. Esa diferencia de cota acaba importando más que la postal del Capricho.",
] as const;

const CLIMA_NUEVO2 = [
  "Vivir en Comillas tras Mallorca es cambiar de cielo de verdad. Hay bastante menos sol, la lluvia aparece con mucha más frecuencia y la humedad se nota en casa —sobre todo en piedra antigua—. La referencia local ronda 1.700 horas de sol al año, unos treinta y ocho días despejados y cerca de 1.200 mm de lluvia en unos ciento cincuenta y un días. Mallorca ronda 2.800 horas de sol. El viento es medio; la niebla, baja. También aquí llovizna en julio y agosto. Un día puede empezar gris, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 20 °C: no pasas el calor de Baleares. En la playa de Comillas el agua suele estar entre 19 y 21 °C. Quien vive abajo lo nota al bajar a la arena húmeda; quien vive en la ladera, al abrir la ventana al Cantábrico con pendiente debajo. Un frente gris de noviembre cuenta más que un sábado de sol en la playa.",
] as const;

const VIVIR_NUEVO2 = [
  "De Mallorca a Comillas se llega a una villa pequeña donde el patrimonio y la playa caben en el mismo radio —o a una casa más arriba en la ladera—, no a una ciudad. En Mallorca puede ser habitual pensar primero en kilómetros; aquí unos pocos cientos de metros pueden incluir una cuesta que cambia si apetece bajar a comprar o a la toalla. Esa diferencia física modifica decisiones tan sencillas como salir con bolsas o aparcar en agosto.",
  "También cambia la relación entre coche, costa y hospital. En el casco bajo se resuelve lo mínimo a pie; casi todo lo demás pide salir. Sierrallana queda a unos treinta minutos. Ir y volver a Mallorca suele pasar por Santander —casi todo el año—. Se oye cántabro y castellano; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. Julio y agosto llenan fiestas, playa y mesas; en noviembre la villa sigue abierta aunque mucho más quieta. Para alguien acostumbrado a Mallorca, la diferencia está en la escala: el cambio se concentra en una villa-museo pequeña, no en una capital. Vivir aquí todo el año significa aceptar esas dos caras —verano intenso e invierno vacío— como partes de una misma vida.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Comillas no se entiende solo como pueblo de playa. A finales del siglo XIX el marqués de Comillas —Antonio López y su linaje, indianos enriquecidos en Cuba— impulsó un programa arquitectónico desproporcionado para el tamaño de la villa: el Palacio de Sobrellano (hacia 1882–1888, Joan Martorell), la capilla-panteón y, poco después, el encargo a Gaudí del Capricho (1883–1885) para Máximo Díaz de Quijano. Esas piezas no quedaron al margen: ordenan vistas, recorridos y la identidad que todavía se ve al subir la ladera. El veraneo de Alfonso XII en la zona reforzó ese mismo impulso de villa de piedra y horizonte.",
  "La Universidad Pontificia —edificio neogótico en alto, antiguo seminario cedido al Papa León XIII para formar sacerdotes de España, América y Filipinas— remató esa imagen. Abajo, la plaza y las calles del casco siguieron siendo el centro civil y comercial, mucho más modesto que los palacios: ahí se compra el pan y se hace la semana corta. Quien camina solo entre Capricho y Sobrellano sin bajar a la plaza se pierde la Comillas donde se vive el día a día. El puerto, de tradición ballenera y luego mineralera, completa el casco bajo junto a la playa.",
  "La playa pegada al casco convirtió el veraneo en parte de la historia cotidiana, no solo en visita. Oyambre —playa y dunas del parque natural, a pocos minutos hacia el oeste, con la ría de La Rabia cerca— y Santillana del Mar —villa medieval a unos quince minutos— añadieron salidas de costa y patrimonio vecino. El Día del Indiano, a finales de agosto, recuerda el vínculo con América cuando las calles se visten de blanco y el verano todavía pesa. Quien conozca Comillas solo por el Capricho debe sumar plaza, playa, pendiente y ese calendario.",
  "Hoy, comprar «en Comillas» sigue siendo elegir entre casco bajo con playa a pie o ladera con patrimonio y cuestas. El anuncio no dice cuál de las dos.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar está siempre cerca en Comillas, pero vivir en la ladera no es lo mismo que vivir en el casco bajo. Abajo, el agua cotidiana es la playa de Comillas: arenal urbano pegado al pueblo, usable andando desde buena parte de las calles bajas. No es Oyambre: es playa de villa, con el casco detrás y, en verano, agua que suele rondar los 19–21 °C. Oyambre —playa y dunas del parque natural, a pocos minutos hacia el oeste— es otra cosa: costa abierta protegida, toallas en verano, coche desde muchas casas y aparcamiento que en agosto forma parte del plan. Quien vive abajo puede bajar a la arena sin sacar el coche; quien vive en la ladera convierte esa misma playa en bajada con pendiente. Un martes de junio en la playa de Comillas suele haber holgura; un domingo de agosto el acceso y el aparcamiento se llenan.",
  "Para caminar andando desde el casco bajo, la plaza, las calles de piedra y el frente de playa caben en un radio corto. No es un paseo llano de ciudad grande: entre la plaza y la orilla hay tramos en pendiente, y subir hacia Sobrellano, el Capricho o la Pontificia cambia el esfuerzo de cada ida y vuelta. Es villa de dos cotas. Desde la ladera, el mismo día empieza con la vista y pide bajar para la toalla y para buena parte de la compra.",
  "Oyambre aporta otra playa y la ría de La Rabia; Santillana, patrimonio medieval; San Vicente, ría y castillo; Torrelavega, hospital Sierrallana y comercio a unos treinta minutos. Aquí el día a día pide elegir casco bajo o ladera; el hospital, salir a Sierrallana.",
  "En el casco bajo la playa queda a pocos minutos a pie; en la ladera el patrimonio queda cerca y la playa pide bajar. Esa diferencia describe mejor Comillas que contar monumentos. Sierrallana cubre la sanidad hospitalaria cuando hace falta lo que aquí no hay.",
] as const;

const CASA_NUEVO2 = [
  "En Comillas la cota marca el día a día: casco bajo junto a la playa, o ladera hacia Sobrellano y la Pontificia. Un anuncio que solo diga «Comillas» puede ocultar si la casa da a calles caminables y a la arena, o a una pendiente que convierte cada compra en esfuerzo.",
  "En el casco abundan pisos y casas con humedad de costa; en la ladera, tipologías con más vistas y más desnivel. La fibra es Sí en la capa de datos; conviene comprobarla dirección a dirección. Hay poca obra nueva.",
  "El precio medio de referencia ronda 3.722 €/m². Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual un piso junto a la playa y una casa bajo la Pontificia.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra, la playa, y la salida hacia Torrelavega o el aeropuerto. En agosto, el aparcamiento en el casco; en noviembre, la humedad y las mesas cerradas. Comillas premia elegir bien la cota; castiga comprar solo la postal del Capricho.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "El casco bajo y la ladera no son intercambiables. Una vivienda «en Comillas» en el mapa puede significar playa y plaza a pie, o vistas con pendiente para cada recado. Comparar solo el precio inventa una Comillas que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el súper mínimo, la playa y Sierrallana. En el casco, humedad y presión de agosto. En la ladera, pendientes, aparcamiento y distancia real a la toalla. También la luz, la orientación, el aislamiento, la ventilación y señales de humedad; la fibra en esa dirección; y cómo se vive esa misma calle un domingo de agosto y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de villa con patrimonio y de vivienda cerca de la playa, pero el mercado es caro y estrecho. Un acceso sencillo, buen estado, luz y un sitio fácil de explicar —casco bajo o ladera bien situada— amplían el abanico de compradores; una casa mal situada respecto a la rutina elegida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Comillas",
  a2: "314.509 €",
  a3: "435.474 €",
  b2: "254.027 €",
  b3: "351.729 €",
  m2: "3.722 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Comillas encaja si atrae el casco bajo —plaza, comercio pequeño y playa a pocos minutos a pie— o si se prefiere la ladera, con Sobrellano, Capricho o Pontificia cerca y cuestas para bajar a la playa. Hay que elegir dónde se vive porque no se vive igual. Abajo se resuelve lo mínimo y se baja a la arena; arriba ganan las vistas y el silencio. Sierrallana queda a unos treinta minutos; el aeropuerto de Santander, a unos cuarenta. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia, humedad y un invierno muy quieto.",
  "También encaja si se tolera el calendario —Santo Cristo del Amparo en julio, playa llena en agosto— eligiendo bien la calle y no solo la primera fila del arenal.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Comillas encaja peor si se necesita comercio amplio todo el año: aquí falta —servicios 4/10: villa cuidada pero pequeña y muy estacional— y eso importa porque en noviembre muchas mesas y tiendas de verano ya no sostienen la semana. Tampoco si el hospital debe quedar cerca: Sierrallana está a unos treinta minutos. Falta súper amplio y gestiones de escala mayor: hay que sacar el coche hacia Torrelavega o Santander, y eso pesa cada semana si se espera autonomía de villa completa.",
  "Tampoco si las pendientes entre ladera y playa complican el día a día, o si se decide solo tras un sábado de sol en agosto sin probar un martes de noviembre.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el casco bajo y otra en la ladera. Desde cada casa: una compra sencilla, el trayecto a la playa, y la salida hacia Sierrallana y el aeropuerto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto en la playa (aparcamiento, gente) y un día cubierto de noviembre en el casco (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
] as const;

const FOTO_COMO_CAPRICHO = {
  src: "/fotos/cantabria-occidental/comillas-capricho.jpg",
  pie: "El Capricho de Gaudí, en la ladera de Comillas",
} as const;

const FOTO_COMO_SOBRELLANO = {
  src: "/fotos/cantabria-occidental/comillas-sobrellano.jpg",
  pie: "Palacio de Sobrellano, Comillas",
} as const;

const FOTO_HISTORIA_PLAZA = {
  src: "/fotos/cantabria-occidental/comillas-plaza.jpg",
  pie: "Plaza de piedra del casco de Comillas",
} as const;

const FOTO_HISTORIA_PONTIFICIA = {
  src: "/fotos/cantabria-occidental/comillas-pontificia.jpg",
  pie: "Universidad Pontificia, en alto sobre Comillas",
} as const;

const FOTO_MAR_PLAYA = {
  src: "/fotos/cantabria-occidental/comillas-playa.jpg",
  pie: "Playa de Comillas: arenal pegado al casco",
} as const;

const FOTO_MAR_VILLA = {
  src: "/fotos/cantabria-occidental/comillas-villa.jpg",
  pie: "Comillas: villa hacia la costa",
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

export default function Nuevo2ComillasPage() {
  const ficha = municipioPorSlug("comillas");
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
        <Foto src={FOTO_COMO_CAPRICHO.src} pie={FOTO_COMO_CAPRICHO.pie} />
        <Foto src={FOTO_COMO_SOBRELLANO.src} pie={FOTO_COMO_SOBRELLANO.pie} />
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
        <Foto src={FOTO_HISTORIA_PLAZA.src} pie={FOTO_HISTORIA_PLAZA.pie} />
        <Foto src={FOTO_HISTORIA_PONTIFICIA.src} pie={FOTO_HISTORIA_PONTIFICIA.pie} />
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
        <Foto src={FOTO_MAR_VILLA.src} pie={FOTO_MAR_VILLA.pie} />
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="3.722 €/m²" />
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
