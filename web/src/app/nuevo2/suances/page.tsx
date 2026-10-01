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
 * NUEVO2 — Suances (Cantabria Occidental).
 * Eje: pueblo alto (villa, vistas, pendiente) vs Ribera / La Concha (playa y paseo a pie).
 * Los Locos = salida de surf; Torrelavega = apoyo.
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Cantabria Occidental va de la ría de San Vicente a la bahía de Santander: villas de veraneo, dunas de Liencres, Costa Quebrada y una capital con hospital Valdecilla y aeropuerto a pocos minutos. El sol es de los más bajos de la tabla; la logística hacia Palma, de las mejores.",
  "Suances es una villa-playa de unos nueve mil habitantes, con casco en alto, puerto en la ría de San Martín y arenales en La Concha y Los Locos. No es Comillas ni Santander: aquí se gana vida anual de villa y playa muy usable; a cambio, hay que elegir entre la cota alta y la orilla, y Torrelavega cubre hospital y comercio grande a unos quince minutos.",
  "Lo que más cambia la vida diaria es la cota: pueblo alto —comercio de villa, vistas, cuestas hasta la arena— o La Ribera y La Concha —paseo y playa delante o casi, más verano—. En ambos sitios se vive en Suances; no se vive igual.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Suances no se siente una sola superficie llana. Arriba, el pueblo alto —calles de villa, comercios, centro de salud— concentra buena parte del día a día a pie: farmacia, tiendas y el ritmo de quien no depende solo del veraneo. Abajo, La Ribera y La Concha —arenal largo y familiar junto a la ría de San Martín de la Arena— meten el mar en la rutina: paseo, toalla y puerto cerca. Quien llega de fuera descubre enseguida que hay que elegir la cota. En el pueblo alto se puede comprar y gestionar; la playa pide bajar por pendiente o en coche. En La Concha la postal es otra: arena delante o a un paseo corto, verano más lleno, con el comercio denso quedando arriba. En pocos minutos de desnivel se pasa de una forma de vivir Suances a otra.",
  "Un martes de noviembre, en el pueblo alto, se puede hacer la compra, pasar por el centro de salud —médico de cabecera y consultas del día a día, no el hospital— y seguir por las calles de villa. Los servicios llegan a 6/10 en nuestra escala: hay lo básico de villa con vida todo el año; falta el hospital en el municipio —Sierrallana queda a unos quince minutos en Torrelavega— y el comercio de ciudad. Quien elige el pueblo alto elige autonomía de villa y vistas; lo que no elige es la toalla debajo de la ventana. Quien elige La Concha gana playa y paseo; esa misma mañana el súper serio puede pedir subir o salir a Torrelavega.",
  "Sin coche, Suances se sostiene mejor que muchas villas de veraneo: hay vida anual y Torrelavega cerca. Aun así, el coche enlaza las dos cotas, las playas y el hospital. El hospital práctico es Sierrallana, a unos quince minutos; la clínica privada de Mompía, en Bezana, queda en un radio similar. El aeropuerto de Santander ronda los veinte minutos —vuelos a Palma casi todo el año—. Santillana del Mar queda a unos diez minutos como salida de patrimonio. Suances, a cambio, ofrece villa y playa; no ofrece hospital dentro del municipio.",
  "En julio cambia el ritmo con las fiestas del Carmen —alrededor del 16 de julio, con procesión terrestre y marítima desde el muelle, verbenas y mucha gente—. La Concha y Los Locos —playa más abierta y de oleaje, usada por surfistas— se llenan de toallas y coches. Meses después, en un martes húmedo, el pueblo alto recupera calma: el comercio básico sigue, pero la orilla se nota más vacía. No son dos Suances distintas: son dos ritmos del mismo pueblo a lo largo del año.",
  "También por eso la elección entre pueblo alto y La Concha cambia bastante la vida diaria. Arriba se ganan calles de villa y compra; la playa pide pendiente. Abajo se ganan paseo y toalla; agosto se oye más. Esa diferencia de cota acaba importando más que la postal de bahía.",
] as const;

const CLIMA_NUEVO2 = [
  "Suances supone un cambio de clima claro respecto a Mallorca. Hay bastante menos sol, la lluvia aparece con mucha más frecuencia y la humedad se nota en casa. La referencia local ronda 1.680 horas de sol al año, unos treinta y ocho días despejados y cerca de 1.150 mm de lluvia en unos ciento cincuenta y dos días. Mallorca ronda 2.800 horas de sol. El viento es medio; la niebla, baja. También aquí llovizna en julio y agosto. Un día puede empezar gris, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 20 °C: no pasas el calor de Baleares. En La Concha el agua suele estar entre 19 y 21 °C; Los Locos aporta más ola y más viento. Quien vive arriba lo nota al bajar la cuesta con lluvia; quien vive abajo, al abrir la ventana al Cantábrico. Un frente gris de noviembre cuenta más que un sábado de sol en La Concha.",
] as const;

const VIVIR_NUEVO2 = [
  "De Mallorca a Suances se llega a una villa-playa con dos cotas —pueblo alto o La Concha—, no a una ciudad. En Mallorca puede ser habitual pensar primero en kilómetros; aquí unos pocos cientos de metros pueden incluir una pendiente que decide si la playa es puerta o salida. Esa diferencia modifica decisiones tan sencillas como salir a comprar, bajar a la playa o aparcar en julio.",
  "También cambia la relación entre coche, costa y hospital. En el pueblo alto gran parte del día a día cabe a pie; la playa pide bajar. En La Concha la orilla queda cerca y Torrelavega cubre lo que falta a unos quince minutos. Ir y volver a Mallorca suele pasar por Santander —casi todo el año—. Se oye cántabro y castellano; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. El Carmen llena julio; agosto llena La Concha y Los Locos; en noviembre la villa sigue abierta aunque más quieta. Para alguien acostumbrado a Mallorca, la diferencia está en la escala: el cambio se concentra en una villa de dos cotas, no en una capital. Vivir aquí todo el año significa aceptar esas dos caras —pueblo alto cotidiano y orilla con más presión— como partes de una misma vida.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Suances creció mirando a la ría de San Martín de la Arena: puerto abajo, casas subiendo la ladera y, con el tiempo, un frente de playa que convirtió el baño en parte de la identidad. No nació como urbanización de toallas: nació como villa de puerto y de altura. A finales del XIX la Real Compañía Asturiana de Minas canalizó la ría y ganó terreno al mar; a partir de 1880 aparecieron las primeras construcciones junto a la orilla y el veraneo de Torrelavega empezó a fijar el perfil que hoy se ve en La Concha y La Ribera.",
  "La Concha —arenal largo y familiar junto al puerto— y La Ribera organizaron el veraneo cotidiano. Los Locos —playa más expuesta al oleaje, al otro lado hacia Punta del Dichoso, con bajada por escaleras desde el acantilado— añadió la costa de surf y de horizonte abierto. En 1904 el castillo de Ceruti se alzó sobre ese mismo acantilado y marcó el despertar turístico de la villa. El faro y la punta marcan el final del paseo cuando se quiere alargar la orilla sin salir del municipio.",
  "Torrelavega, a unos quince minutos hacia el interior, y Santillana del Mar, a unos diez, completan la historia práctica: una ciudad de servicios y hospital Sierrallana, y una villa medieval de visita. El Carmen —procesión marítima hacia el 16 de julio— mantiene el vínculo con la gente de la mar cuando el verano ya ha llenado La Concha. Quien conozca Suances solo por La Concha debe sumar pueblo alto, ría, Los Locos, el faro y ese calendario.",
  "Hoy, comprar «en Suances» sigue siendo elegir entre pueblo alto con villa a pie o La Concha con playa delante. El anuncio no dice cuál de las dos —ni cuánta pendiente hay entre una y otra, ni cómo se siente esa misma calle en noviembre frente a un sábado de julio—.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar está siempre cerca en Suances, pero vivir en el pueblo alto no es lo mismo que vivir en La Concha. Abajo, el agua cotidiana es La Concha y La Ribera: arenal familiar, ría de San Martín al lado, puerto cerca y, en verano, agua que suele rondar los 19–21 °C. Se puede bajar a la playa andando desde buena parte de las calles bajas; en agosto el paseo y el aparcamiento forman parte del plan. Desde el pueblo alto esa misma playa pide pendiente o coche. Los Locos —arenal más abierto hacia Punta del Dichoso, con ola usada por surfistas y acceso por escaleras desde el acantilado— es otra salida del mismo municipio: más viento, más oleaje, no la playa familiar de La Concha. Un martes de junio en La Concha suele haber holgura; un domingo de agosto el paseo se llena.",
  "Para caminar andando desde abajo, el paseo de La Concha hacia el faro y la punta convierte la orilla en horizonte cercano. No es un boulevard de ciudad grande; es frente de villa-playa con viento cuando el Cantábrico lo trae. Desde arriba, ese mismo paseo ya es bajada deliberada: la cuesta se nota en cada ida a la toalla y en cada vuelta con la compra. Hacia Los Locos el registro cambia otra vez: escaleras, acantilado y oleaje más vivo.",
  "Santillana aporta patrimonio medieval a unos diez minutos; Torrelavega, hospital Sierrallana y comercio a unos quince; Santander, capital y aeropuerto a unos veinte. Los Locos, si se quiere ola y acantilado, pide la bajada de escaleras desde la punta. Aquí el día a día pide elegir pueblo alto o La Concha; el hospital, salir a Sierrallana.",
  "En el pueblo alto la villa queda a pie para la semana corta; en La Concha la playa queda delante y el súper denso puede pedir subir o salir. Esa diferencia describe mejor Suances que contar playas. Sierrallana cubre la sanidad hospitalaria cuando hace falta lo que aquí no hay.",
] as const;

const CASA_NUEVO2 = [
  "En Suances la cota lo cambia todo: pueblo alto o La Concha / La Ribera. Un anuncio que solo diga «Suances» puede ocultar si la casa da a calles de villa caminables, o a paseo de playa con pendiente hacia el súper.",
  "Arriba abundan pisos y casas con vistas y humedad atlántica; abajo, tipologías más ligadas al paseo y al veraneo. La fibra es Sí en la capa de datos; conviene comprobarla dirección a dirección. Hay poca obra nueva.",
  "El precio medio de referencia ronda 3.000 €/m². Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual un piso en el pueblo alto y una casa frente a La Concha.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra, la playa, y la salida hacia Torrelavega o el aeropuerto. En agosto, el aparcamiento en La Concha; en noviembre, la humedad y la cuesta. Suances premia elegir bien la cota; castiga comprar solo la postal de bahía.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "El pueblo alto y La Concha no son intercambiables. Una vivienda «en Suances» en el mapa puede significar comercio de villa a pie sin arena debajo, o paseo de playa con coche o cuesta para el súper. Comparar solo el precio inventa una Suances que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el súper, La Concha o Los Locos, y Sierrallana. Arriba, pendientes y humedad. Abajo, salitre, aparcamiento en temporada y distancia real a servicios. También la luz, la orientación, el aislamiento, la ventilación y señales de humedad; la fibra en esa dirección; y cómo se vive esa misma calle un domingo de agosto y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de villa con vida anual y de vivienda cerca de La Concha, pero lo que decide es el inmueble concreto. Un acceso sencillo, buen estado, luz y un sitio fácil de explicar —pueblo alto o orilla bien situada— amplían el abanico de compradores; una casa mal situada respecto a la rutina elegida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Suances",
  a2: "253.500 €",
  a3: "351.000 €",
  b2: "204.750 €",
  b3: "283.500 €",
  m2: "3.000 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Suances encaja si atrae el pueblo alto —villa con básicos a pie y vistas— o si se prefiere La Concha y La Ribera, con playa y paseo delante o casi y más presión de verano. Hay que elegir dónde se vive porque no se vive igual. Arriba gran parte del día a día cabe; la playa pide bajar. Abajo ganan la toalla y el paseo; Torrelavega cubre hospital y comercio grande a unos quince minutos. El aeropuerto de Santander queda a unos veinte. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia y humedad.",
  "También encaja si se tolera el calendario —Carmen en julio, La Concha llena en agosto— eligiendo bien la calle y no solo la primera fila del arenal.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Suances encaja peor si se exige caminar igual de fácil entre pueblo alto y playa: aquí la pendiente es estructural y eso importa porque quien compra «cerca de todo» en el mapa puede encontrarse una cuesta cada mañana. Tampoco si el hospital debe quedar dentro del municipio: Sierrallana está a unos quince minutos. Los servicios son 6/10 —villa con lo básico—; falta hospital local y comercio de ciudad: hay que sacar el coche hacia Torrelavega, y eso pesa si se esperaba autonomía completa a pie.",
  "Tampoco si se quiere evitar la presión estival de La Concha y Los Locos, o si se decide solo tras un sábado de sol sin probar un noviembre en el pueblo alto.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el pueblo alto y otra en La Concha. Desde cada casa: una compra sencilla, el trayecto a la playa, y la salida hacia Sierrallana y el aeropuerto. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto en La Concha (aparcamiento, gente) y un día cubierto de noviembre arriba (luz, humedad, cuestas). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
] as const;

const FOTO_COMO_VILLA = {
  src: "/fotos/cantabria-occidental/suances-villa.jpg",
  pie: "Suances: villa sobre la bahía y la ría",
} as const;

const FOTO_COMO_CONCHA = {
  src: "/fotos/cantabria-occidental/suances-concha.jpg",
  pie: "Playa de La Concha, Suances",
} as const;

const FOTO_HISTORIA_PUERTO = {
  src: "/fotos/cantabria-occidental/suances-puerto.jpg",
  pie: "Puerto de Suances en la ría de San Martín",
} as const;

const FOTO_HISTORIA_PASEO = {
  src: "/fotos/cantabria-occidental/suances-paseo.jpg",
  pie: "Paseo de Suances hacia la orilla",
} as const;

const FOTO_MAR_LOCOS = {
  src: "/fotos/cantabria-occidental/suances-locos.jpg",
  pie: "Playa de Los Locos: arenal abierto y de oleaje",
} as const;

const FOTO_MAR_IDENTIDAD = {
  src: "/fotos/cantabria-occidental/suances-identidad.jpg",
  pie: "Suances: casas sobre la bahía",
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

export default function Nuevo2SuancesPage() {
  const ficha = municipioPorSlug("suances");
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
        <Foto src={FOTO_COMO_VILLA.src} pie={FOTO_COMO_VILLA.pie} />
        <Foto src={FOTO_COMO_CONCHA.src} pie={FOTO_COMO_CONCHA.pie} />
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
        <Foto src={FOTO_HISTORIA_PUERTO.src} pie={FOTO_HISTORIA_PUERTO.pie} />
        <Foto src={FOTO_HISTORIA_PASEO.src} pie={FOTO_HISTORIA_PASEO.pie} />
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
        <Foto src={FOTO_MAR_LOCOS.src} pie={FOTO_MAR_LOCOS.pie} />
        <Foto src={FOTO_MAR_IDENTIDAD.src} pie={FOTO_MAR_IDENTIDAD.pie} />
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="3.000 €/m²" />
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
