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
 * NUEVO2 — Luarca (Valdés) (Asturias Occidente).
 * Eje: zona baja / puerto (caminable, comercio, playas 1ª y 2ª) vs cotas altas / Atalaya / resto de Valdés (pendientes, coche, más quietud).
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Asturias Occidente es la franja verde entre la ría del Eo —frente a Ribadeo— y Cabo Busto: Castropol, Tapia de Casariego, Navia y Luarca. Costa auténtica, hospital en Jarrio y aeropuerto de Asturias a cuarenta–setenta y cinco minutos.",
  "Luarca es la capital del concejo de Valdés —unos cuatro mil quinientos habitantes en la villa, unos doce mil en todo el concejo—: villa blanca entre puerto, río Negro y laderas. No es Navia ni Tapia: aquí pesan el anfiteatro de casas blancas y el aeropuerto más cercano de la zona; a cambio, la cota de la casa cambia la caminabilidad aunque el mapa diga «cerca».",
  "Lo que más cambia la vida diaria es dónde queda la casa: en la zona baja —puerto, comercio, paseo, playas 1ª y 2ª a pie o casi— o en cotas altas hacia la Atalaya —cementerio, ermita y faro en el promontorio— u otras partes de Valdés. En ambos sitios se vive en el concejo; no se vive igual la semana.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Luarca se siente villa blanca encajada en un valle abierto al Cantábrico: el puerto y la zona baja —calles junto al río Negro, que cruza el casco con varios puentes— concentran comercio, mercado, centro de salud y buena parte del día a día a pie. Las casas blancas de pizarra suben por las laderas como un graderío. Quien llega de fuera descubre enseguida que hay que elegir. Abajo se puede comprar, bajar al puerto y llegar a las playas 1ª y 2ª —arenales junto a la villa— andando desde buena parte del casco. Arriba, hacia la Atalaya —promontorio con cementerio, ermita de la Virgen de la Blanca y faro— la postal es otra: vistas y silencio, pero cuestas que convierten una distancia corta en esfuerzo diario. En el resto de Valdés —Otur, Cueva, Cadavedo— la semana pide coche casi siempre. En pocos minutos de desnivel se pasa de una forma de vivir Luarca a otra, y esa diferencia acaba importando más que la imagen uniforme de «villa blanca» en el mapa.",
  "Un martes de noviembre, en la zona baja, se puede hacer compra, pasar por el centro de salud y caminar el puerto. Los servicios llegan a 6/10 en nuestra escala: hay villa completa con comercio y primaria; no llegan a más porque el tren de ancho métrico no queda a pie desde cualquier dirección y el hospital no está en la villa. Quien elige la zona baja elige autonomía peatonal; lo que no elige es una casa sin cuestas si mira hacia arriba. En una cota alta esa misma mañana es más de mirador y de coche para el súper.",
  "Sin coche, la zona baja aguanta bien la semana básica. El Hospital de Jarrio queda a unos veinte minutos; el aeropuerto de Asturias, hacia cuarenta —el mejor tiempo de Asturias Occidente—. Hay A-8. Luarca, a cambio, ofrece belleza y logística aérea mejores que Castropol o Tapia, con una topografía que condiciona cada dirección.",
  "Entre agosto y finales de mes cambia el ritmo de la villa. Las fiestas del Rosario —hacia el 15 de agosto, con saleo marítimo: la Virgen embarcada y sirenas en el puerto— llenan muelle y calles. San Timoteo —hacia el 22 de agosto, romería con vuelta a la villa bajo agua lanzada desde los balcones— anima peñas y verbenas. Meses después, en un martes húmedo, la zona baja sigue abierta: comercio y puerto no se apagan. No son dos Luarca distintos: son dos ritmos que forman parte de vivir aquí todo el año.",
  "También por eso la elección entre zona baja y cotas altas cambia bastante la vida diaria. Abajo se ganan calles, compra y puerto cerca; la Atalaya pide subida. Arriba se ganan vistas y más quietud; casi cada recado pide bajar o sacar el coche. Esa diferencia de cota acaba importando mucho más que la postal vista en un mapa.",
] as const;

const CLIMA_NUEVO2 = [
  "Luarca supone un cambio climático claro respecto a Mallorca. Hay bastante menos sol, la lluvia aparece con mucha más frecuencia y la humedad se nota en casa. La referencia local ronda 1.850 horas de sol al año, unos cuarenta y dos días despejados y cerca de 1.050 mm de lluvia en unos ciento cuarenta y cinco días. Mallorca ronda 2.800 horas de sol. La niebla es media; el viento, medio. También aquí llovizna en julio y agosto. Un día puede empezar gris, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 18,5 °C: no pasas el calor de Baleares. En las playas 1ª y 2ª, o en Otur y Cueva, el agua suele estar entre 18 y 20 °C. Quien vive abajo lo nota al salir a la calle húmeda junto al puerto; quien vive en cota alta, al abrir la ventana al acantilado. Un frente gris de noviembre cuenta más que un sábado de sol en el faro.",
] as const;

const VIVIR_NUEVO2 = [
  "De Mallorca a Luarca se llega a una villa blanca con puerto propio —o a una casa en ladera o en el resto de Valdés—, no a un pueblo mínimo ni a una ciudad. En Mallorca puede ser habitual pensar primero en kilómetros; aquí unos pocos minutos de mapa pueden esconder bastante desnivel entre el puerto y la Atalaya. Esa elección modifica decisiones tan sencillas como salir a comprar, ir a la playa o dejar el coche.",
  "También cambia la relación entre coche, cuestas y hospital. En la zona baja gran parte del día a día cabe a pie; el hospital pide salir hacia Jarrio. El aeropuerto de Asturias —hacia cuarenta minutos— facilita ir y volver a Mallorca mejor que desde el resto de la zona, con Palma sobre todo en verano. Se oye asturiano y castellano; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. Agosto llena el Rosario y San Timoteo; en noviembre la zona baja sigue abierta aunque más quieta. Para alguien acostumbrado a Mallorca, la diferencia está en la escala: el cambio se concentra en una villa de laderas y un concejo amplio, no en una capital. Vivir aquí todo el año significa aceptar esas dos caras —villa caminable abajo y cuestas arriba— como partes de una misma vida.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Luarca se asentó donde el río Negro encuentra el Cantábrico: puerto pesquero abajo y caserío blanco subiendo las laderas del valle. La villa blanca no nació como decorado; nació de acomodar el oficio del mar a un suelo con poco llano. La Carta Puebla de 1270 protegió la actividad portuaria, y el Camino de la Costa atravesó la capital con hospitales de peregrinos. Lo que hoy parece graderío de tejados fue antes una manera de vivir del abrigo: muelle, puentes sobre el Negro y calles que ascienden entre casas de pizarra.",
  "Sobre el promontorio, la Atalaya reunió cementerio, ermita de la Virgen de la Blanca y faro —la luz en la punta de Focicón data de 1862—. Allí nació la Semana Santa luarquesa: la Real Hermandad del Buen Jesús Nazareno se fundó en 1695, y el Jueves Santo la subida del Nazareno hacia la capilla sigue llenando cuestas y miradas. No es folklore de folleto: es un calendario que se oye y se camina al vivir cerca del casco. Quien solo fotografía el faro sin subir en Semana Santa se pierde esa capa de identidad.",
  "El siglo XIX añadió otra huella visible. El puerto facilitó la emigración ultramarina; quienes regresaron de América —las casas de indianos— levantaron casonas eclécticas, sobre todo en Villar y Barcellina, y financiaron equipamientos. El resto de Valdés —Otur, Cueva, Cadavedo, Cabo Busto— recuerda que el concejo es más amplio que la villa: playas, sendas y núcleos que piden coche. El Rosario y San Timoteo, en agosto, marcan el verano cuando el puerto ya vibra. Quien conozca Luarca solo por la postal blanca debe sumar Atalaya, indianos y mapa comarcal.",
  "Hoy, comprar «en Luarca» o «en Valdés» sigue siendo elegir entre zona baja caminable —puerto, compra y playas 1ª y 2ª a pie— o ladera y resto del concejo, con más vistas y más coche. El anuncio no dice cuál de las dos ni cuánta cuesta hay entre una y otra.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar está siempre cerca en Luarca, pero vivir en la zona baja no es lo mismo que vivir hacia la Atalaya. Abajo el agua cotidiana es el puerto y el río Negro: dársena abrigada, puentes, orilla de villa y las playas 1ª y 2ª —arenales junto al casco— a las que se puede llegar andando desde buena parte de las calles bajas. No es Cadavedo: es mar de villa, con flota, paseo y, en agosto, aparcamiento disputado. En verano el agua suele rondar los 19–21 °C. Desde una cota alta el Cantábrico se ve, pero bajar a la arena o al súper pide cuestas o coche. Un martes de junio en el puerto suele haber holgura; un domingo de agosto la zona baja se llena.",
  "Para caminar andando desde abajo, el paseo del puerto convierte la villa en horizonte cercano: muelle, puentes sobre el Negro y calles blancas que suben enseguida. Subir a la Atalaya —faro, cementerio, ermita de la Virgen de la Blanca— amplía esa tarde con desnivel real: no es una prolongación llana del muelle. El viento de promontorio no es el mismo que el de la dársena, y la ida y la vuelta se notan en las piernas si se repiten cada día. Quien vive arriba convierte ese mismo paseo en bajada deliberada antes de empezar a andar junto al agua.",
  "Cuando el día pide ampliar el mapa, Otur, Cueva o Cadavedo aportan otras playas del concejo, cada una con su acceso y su exposición al oleaje; Cabo Busto añade senda y acantilado; Navia, villa de servicios; Jarrio, hospital a unos veinte minutos. Aquí el día a día pide elegir cota dentro de Luarca; el hospital, salir a Coaña. El resto de Valdés no se recorre a pie desde el casco: es mapa de coche aunque el Cantábrico siga a la vista.",
  "En la zona baja el puerto queda integrado en la rutina casi todos los días; en cota alta las vistas quedan delante y el comercio denso queda abajo. Esa diferencia describe mejor Luarca que contar playas de Valdés. Jarrio cubre la sanidad hospitalaria cuando hace falta lo que la villa no tiene dentro.",
] as const;

const CASA_NUEVO2 = [
  "En Luarca la cuesta decide casi tanto como el precio: zona baja y puerto, o cotas altas y resto de Valdés. Un anuncio que solo diga «Luarca» puede ocultar si la casa da a calles caminables, o a una cuesta que se repite varias veces al día.",
  "Abajo abundan pisos y casas con humedad de puerto; arriba, viviendas con vistas y más dependencia del coche. La fibra es Sí en la capa de datos; conviene comprobarla dirección a dirección. Hay poca obra nueva. Las casas de indianos pueden ser atractivas y exigentes de reforma.",
  "El precio medio de referencia ronda 1.256 €/m². Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual un piso en la zona baja y una casa en ladera.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra, el puerto o la Atalaya, y la salida hacia Jarrio o el aeropuerto. En agosto, el aparcamiento en fiestas; en noviembre, la luz y la humedad abajo. Luarca premia elegir bien la cota; castiga comprar solo la postal del faro.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "La zona baja y las cotas altas no son intercambiables. Una vivienda «en Luarca» en el mapa puede significar comercio y puerto a pie, o vistas con coche para casi cada recado. Comparar solo el precio inventa una Luarca que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el súper, el puerto o la Atalaya, y Jarrio. Abajo, humedad y ruido de fiestas en agosto. Arriba, pendientes, aparcamiento y esfuerzo diario. También la luz, la orientación, el aislamiento, la ventilación y señales de humedad; la fibra en esa dirección; y cómo se vive esa misma calle un domingo de agosto y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de villa blanca y de vistas, pero lo que decide es el inmueble concreto. Un acceso sencillo, buen estado, luz y un sitio fácil de explicar —zona baja práctica o ladera bien situada— amplían el abanico de compradores; una casa de difícil acceso o mal mantenida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Luarca (Valdés)",
  a2: "106.132 €",
  a3: "146.952 €",
  b2: "85.722 €",
  b3: "118.692 €",
  m2: "1.256 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Luarca encaja si atrae la villa blanca con puerto, río Negro y playas 1ª y 2ª en la zona baja, o si se prefiere vivir en cota alta hacia la Atalaya —faro, cementerio, ermita— u otras partes de Valdés. Hay que elegir dónde se vive porque no se vive igual. Abajo gran parte del día a día cabe a pie; arriba ganan las vistas y el coche pesa más. El Hospital de Jarrio queda a unos veinte minutos; el aeropuerto de Asturias, hacia cuarenta. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia, humedad y niebla media.",
  "También encaja si se tolera el calendario de agosto —Rosario con saleo, San Timoteo— eligiendo bien la calle y no la primera fila del puerto en las semanas más llenas.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Luarca encaja peor si se necesitan recorridos llanos entre casa, compra y mar: aquí la topografía manda —los servicios llegan a 6/10 en la villa, pero una casa en cota alta convierte cada trayecto en cuesta— y eso importa porque el mapa miente sobre el esfuerzo. Tampoco si el hospital debe quedar a pie: Jarrio está a unos veinte minutos. Y si se confunde la belleza de la Atalaya con poder vivir toda la semana sin bajar, suele haber sorpresa.",
  "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en el faro sin probar un noviembre en la zona baja ni un agosto de fiestas.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en la zona baja y otra en cota alta o en el resto de Valdés. Desde cada casa: una compra sencilla, el trayecto al puerto o a la Atalaya, y la salida hacia Jarrio y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto en el Rosario o San Timoteo (aparcamiento, gente) y un día cubierto de noviembre abajo (luz, humedad, mesas abiertas). Y comprobar escaleras, ascensor, el estado de la vivienda y la fibra en la dirección exacta.",
] as const;

const FOTO_COMO_PUERTO = {
  src: "/fotos/asturias-occidente/luarca-puerto.jpg",
  pie: "Puerto de Luarca: barcas de colores y caserío blanco subiendo la ladera",
} as const;

const FOTO_COMO_CASCO = {
  src: "/fotos/asturias-occidente/luarca-casco.jpg",
  pie: "Luarca desde arriba: puerto en el valle y casas blancas en anfiteatro",
} as const;

const FOTO_HISTORIA_FARO = {
  src: "/fotos/asturias-occidente/luarca-faro.jpg",
  pie: "Faro de Luarca en la Atalaya: edificio blanco y Cantábrico al fondo",
} as const;

const FOTO_MAR_PLAYA = {
  src: "/fotos/asturias-occidente/luarca-playa.jpg",
  pie: "Cala de Luarca: arena oscura, ola suave y acantilado bajo cielo cubierto",
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

export default function Nuevo2LuarcaPage() {
  const ficha = municipioPorSlug("luarca-valdes");
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
        <Foto src={FOTO_COMO_CASCO.src} pie={FOTO_COMO_CASCO.pie} />
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
        <Foto src={FOTO_HISTORIA_FARO.src} pie={FOTO_HISTORIA_FARO.pie} />
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="1.256 €/m²" />
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
