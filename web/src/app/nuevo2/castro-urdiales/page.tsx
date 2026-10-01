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
 * NUEVO2 — Castro-Urdiales (Cantabria Oriental).
 * Eje: casco / puerto (Santa María, castillo-faro, servicios de ciudad a pie) vs Brazomar / Ostende (playas urbanas; Bilbao como eje metropolitano de apoyo).
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Cantabria Oriental es la costa de Trasmiera hasta Bizkaia: playas largas, marismas, villas de veraneo y Castro-Urdiales hacia Bilbao. El sol es de los más bajos de la tabla; la conexión con Bilbao y con Palma desde Castro, de las mejores.",
  "Castro-Urdiales es una ciudad costera de unos treinta y cuatro mil habitantes: casco medieval con Santa María, castillo-faro y puente, playas en Brazomar y Ostende, y Bilbao a unos treinta y cinco minutos. No es Laredo ni Santoña: aquí se gana escala de ciudad y el mejor acceso de la zona a Bilbao y a Palma todo el año; a cambio, el sol es de los más bajos de la tabla y el hospital práctico sigue siendo Laredo a unos veinticinco minutos.",
  "Lo que más cambia la vida diaria es el barrio: casco y puerto —piedra, paseo, comercio a pie— o Brazomar y Ostende —playa urbana cerca, más residencial de orilla—. En ambos sitios se vive en Castro; no se vive igual.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Castro-Urdiales se siente ciudad pequeña de verdad: el casco —Santa María de la Asunción, el castillo-faro y el puente medieval sobre la dársena— concentra comercio, gestiones y buena parte del día a día a pie. El puerto y el paseo marítimo enlazan esa silueta histórica con la vida cotidiana. Quien llega de fuera descubre enseguida que hay que elegir. En el casco se puede comprar, gestionar y pasear el frente portuario andando. Hacia Brazomar —playa urbana al este del centro— o Ostende —otra playa del frente costero— la postal es otra: arena más cerca de la vivienda, verano más lleno en la orilla, con el casco monumental quedando un trayecto corto. En pocos minutos se pasa de una forma de vivir Castro a otra.",
  "Un martes de noviembre, en el casco, se puede hacer la compra, pasar por una farmacia y seguir hacia el puerto. Los servicios llegan a 8/10 en nuestra escala: hay ciudad completa para el día a día; no falta lo esencial. El hospital práctico es el de Laredo, a unos veinticinco minutos —no sustituir por Cruces solo por proximidad a Bilbao—. Quien elige el casco elige piedra y autonomía urbana; lo que no elige es la toalla debajo de todas las ventanas. Quien elige Brazomar gana playa más cerca; esa misma mañana el casco pide unos minutos.",
  "Sin coche, Castro aguanta bien el radio urbano. El coche o el autobús enlazan Bilbao —unos treinta y cinco minutos—, Laredo y el aeropuerto de Bilbao —unos treinta y cinco o cuarenta minutos, con Palma casi todo el año—. Santander queda más lejos. Oriñón e Islares —playas hacia el este, a unos diez minutos— añaden otras orillas sin sustituir el frente urbano. Castro, a cambio, ofrece ciudad costera con Bilbao al lado; no ofrece el sol alto de otras zonas ni hospital dentro del municipio.",
  "En junio y julio cambia el ritmo con la Semana Grande y el Coso Blanco —desfile de carrozas con confeti, hacia principios de julio—. El frente marítimo se nota más lleno. Meses después, en un martes húmedo, la ciudad sigue abierta: comercio y empleo no dependen solo del veraneo. No son dos Castro distintas: son dos ritmos de la misma ciudad a lo largo del año.",
  "También por eso la elección entre casco y Brazomar-Ostende cambia bastante la vida diaria. En el casco se ganan Santa María, puerto y gestiones a pie; la playa pide unos minutos. Hacia Brazomar se gana la toalla más cerca; agosto se oye más en la orilla. Esa diferencia de barrio acaba importando más que la postal del castillo-faro."
] as const;

const CLIMA_NUEVO2 = [
  "Castro supone un cambio climático claro respecto a Mallorca —y de los más marcados de la tabla en horas de sol—. Hay bastante menos sol, la lluvia aparece con mucha más frecuencia y la humedad se nota en casa. La referencia local ronda 1.650 horas de sol al año, unos cuarenta días despejados y cerca de 1.250 mm de lluvia en unos ciento cincuenta y cinco días. Mallorca ronda 2.800 horas de sol. El viento es bajo; la niebla, baja. También aquí llovizna en julio y agosto.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 20 °C: no pasas el calor de Baleares. En Brazomar el agua suele estar entre 19 y 21 °C. Quien vive en el casco lo nota al salir al puerto con lluvia; quien vive en Brazomar, al abrir la ventana al Cantábrico. Un frente gris de noviembre cuenta más que un sábado de sol en Ostende."
] as const;

const VIVIR_NUEVO2 = [
  "De Mallorca a Castro se llega a una ciudad costera con Bilbao cerca —casco o Brazomar—, no a un pueblo. En Mallorca puede ser habitual pensar primero en kilómetros entre urbanizaciones; aquí unos pocos barrios deciden si la playa queda cerca o si gana el casco medieval. Esa elección modifica decisiones tan sencillas como bajar a la playa o subir al puerto.",
  "También cambia la relación entre coche, costa y metrópoli. En el casco gran parte del día a día cabe a pie; Bilbao amplía empleo, compras y aeropuerto a unos treinta y cinco minutos. El hospital práctico sigue siendo Laredo a unos veinticinco. Ir y volver a Mallorca suele pasar por Bilbao —todo el año—. Se oye cántabro, castellano y, a menudo, euskera en el entorno; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. El Coso Blanco llena el inicio del verano; el frente se densifica; en noviembre la ciudad sigue abierta. Para alguien acostumbrado a Mallorca, la diferencia está en el sol —aquí es mínimo— y en vivir con Bilbao como horizonte. Vivir aquí todo el año significa aceptar ciudad costera, cielo gris y eje metropolitano como partes de una misma vida."
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Castro-Urdiales creció como villa portuaria con fuero medieval —Alfonso VIII, 1173— y una silueta que todavía organiza el paseo: Santa María de la Asunción —iglesia gótica del siglo XIII sobre la roca—, el castillo de Santa Ana convertido en faro desde 1853, el puente medieval y la ermita de Santa Ana sobre el peñón. Ese frente no es decorado de postal: es el origen del casco, del puerto y de la identidad que se ve al llegar. En 1296 la villa fue capital de la Hermandad de las Villas de la Marina de Castilla; siglos después, el vínculo con Bizkaia —empleo, compras, aeropuerto— se convirtió en la otra mitad de su historia contemporánea.",
  "El crecimiento residencial del siglo XX hacia Brazomar y Ostende explica la ciudad actual, mucho más grande que el casco medieval: playas urbanas, bloques y una lógica de ciudad costera que ya no cabe en las rúas junto a Santa María. Ostende, de forma artificial más reciente, y Brazomar, arenal urbano consolidado, añadieron la orilla de baño del día a día según barrio. Quien solo fotografía el castillo-faro sin recorrer Brazomar se pierde la escala real en la que se vive.",
  "El Coso Blanco —primer viernes de julio, desfile de carrozas con confeti y noche larga— marca el calendario de inicio de verano tanto como las toallas. La ciudad no depende solo del veraneo: el empleo y el eje de Bilbao sostienen noviembre. Quien conozca Castro solo por la silueta del puerto debe sumar Brazomar, Ostende y ese contraste entre casco y playa urbana.",
  "Hoy, comprar «en Castro» sigue siendo elegir entre casco y puerto —piedra, gestiones y paseo a pie— y Brazomar u Ostende —playa urbana cerca, más presión de verano en la orilla—. El anuncio no dice cuál de las dos, ni cuánto pesa Bilbao en la semana real de cada barrio."
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar está siempre cerca en Castro, pero vivir junto a Santa María no significa tener Brazomar debajo de la ventana. En el casco el agua cotidiana es el puerto y el paseo: dársena, piedra, puente y horizonte. Brazomar —playa urbana al este— y Ostende —otra playa del frente, de forma más recogida— son las orillas de baño del día a día según barrio: arena, oleaje moderado de villa, toallas en verano y, en temporada, aparcamiento disputado. En el agua suelen rondar los 19–21 °C. Oriñón e Islares —playas hacia el este, a unos diez minutos— añaden otras orillas sin sustituir el frente urbano. Quien vive en el casco puede caminar el puerto; quien quiere Brazomar la convierte en salida corta o en barrio. Un martes de junio en el paseo suele haber holgura; un domingo de agosto en Brazomar el acceso se llena.",
  "Para caminar andando desde el casco, el puerto, el puente y el paseo hacia Brazomar convierten la orilla en horizonte cercano: desnivel suave entre peñón y frente, viento de dársena, gente en el paseo. No es un boulevard de capital grande; es frente de ciudad costera con piedra y playa en el mismo radio. Desde Brazomar ese mismo día empieza en la arena y pide unos minutos para el comercio denso del casco.",
  "Oriñón e Islares —playas hacia el este, a unos diez minutos— aportan otra costa, más abierta y menos urbana que Brazomar; Bilbao aporta metrópoli, compras y aeropuerto a unos treinta y cinco minutos; Laredo, el hospital de referencia a unos veinticinco. Aquí el día a día pide elegir casco o Brazomar-Ostende; el hospital, salir a Laredo. Quien confunde proximidad a Bilbao con hospital dentro del municipio se equivoca de escala.",
  "En el casco el puerto queda a pie casi todos los días; hacia Brazomar la playa queda delante o casi y el comercio denso del casco queda un trayecto corto. Esa diferencia describe mejor Castro que contar playas. El hospital de Laredo cubre la sanidad hospitalaria de referencia cuando hace falta lo que Castro no tiene dentro."
] as const;

const CASA_NUEVO2 = [
  "En Castro el barrio lo decide casi todo: casco y puerto, o Brazomar y Ostende. Un anuncio que solo diga «Castro-Urdiales» puede ocultar si la casa da a calles caminables junto a Santa María, o a un acceso de playa con más verano.",
  "En el casco abundan pisos y casas con humedad de costa; hacia Brazomar, tipologías más residenciales de orilla. La fibra es Sí en la capa de datos; conviene comprobarla dirección a dirección. Hay obra nueva.",
  "El precio medio de referencia ronda 2.861 €/m². Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual un piso en el casco y uno frente a Brazomar.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra, el puerto o la playa, Laredo y el aeropuerto de Bilbao. En agosto, el aparcamiento en Brazomar; en noviembre, la humedad. Castro premia elegir bien el barrio; castiga comprar solo la postal del castillo-faro."
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "El casco y Brazomar-Ostende no son intercambiables. Una vivienda «en Castro» en el mapa puede significar comercio y puerto a pie sin arena debajo, o playa cerca con trayecto al casco. Comparar solo el precio inventa una Castro que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el súper, el puerto o Brazomar, Laredo y Bilbao. En el casco, pendientes, humedad y salitre. Hacia la playa, aparcamiento en temporada. También la luz, el aislamiento, la ventilación y señales de humedad; la fibra; y cómo se vive esa misma calle un domingo de agosto y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de ciudad costera con Bilbao cerca y de vivienda junto a Brazomar, pero lo que decide es el inmueble concreto. Un acceso sencillo, buen estado y un barrio fácil de explicar amplían el abanico; una casa mal situada respecto a la rutina elegida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Castro-Urdiales",
  a2: "241.755 €",
  a3: "334.737 €",
  b2: "195.263 €",
  b3: "270.365 €",
  m2: "2.861 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Castro encaja si atrae el casco —Santa María, castillo-faro, puerto y comercio de ciudad a pie— o si se prefiere Brazomar u Ostende, con playa urbana cerca y más presión de verano en la orilla. Hay que elegir dónde se vive porque no se vive igual. Bilbao queda a unos treinta y cinco minutos; el aeropuerto de Bilbao, a unos treinta y cinco o cuarenta, con Palma todo el año. El hospital práctico es Laredo a unos veinticinco minutos. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye el sol más bajo de la tabla, más lluvia y humedad.",
  "También encaja si se tolera el calendario —Coso Blanco a inicios de verano— y se valora el eje metropolitano de Bilbao."
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Castro encaja peor si se busca el sol más alto de la tabla: aquí falta —unas 1.650 horas, de las mínimas— y eso importa porque el cielo gris pesa más que en otras costas del norte. Tampoco si el hospital debe quedar dentro del municipio: Laredo está a unos veinticinco minutos. Los servicios son 8/10 —ciudad completa para el día a día—; no falta comercio, pero sí hospital local. Quien necesite pueblo pequeño sin eje de Bilbao encontrará mejor encaje en otros municipios de la zona.",
  "Tampoco si se presupone que desde cualquier barrio se baja andando a Brazomar igual, o si se decide solo tras un sábado de sol sin probar un noviembre con lluvia."
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el casco y otra en Brazomar u Ostende. Desde cada casa: una compra sencilla, el trayecto al puerto o a la playa, Laredo y Bilbao en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en julio (Coso Blanco, gente) y un día cubierto de noviembre (luz, humedad). Y comprobar el estado de la vivienda y la fibra en la dirección exacta."
] as const;

const FOTO_COMO_A = {
  src: "/fotos/cantabria-oriental/castro-villa.jpg",
  pie: "Castro-Urdiales: villa medieval junto al puerto",
} as const;

const FOTO_COMO_B = {
  src: "/fotos/cantabria-oriental/castro-paseo.jpg",
  pie: "Paseo de Castro-Urdiales",
} as const;

const FOTO_HIST_A = {
  src: "/fotos/cantabria-oriental/castro-santa-maria.jpg",
  pie: "Iglesia de Santa María y castillo-faro, Castro-Urdiales",
} as const;

const FOTO_HIST_B = {
  src: "/fotos/cantabria-oriental/zona-castro.jpg",
  pie: "Silueta de Castro-Urdiales desde la costa",
} as const;

const FOTO_MAR_A = {
  src: "/fotos/cantabria-oriental/castro-brazomar.jpg",
  pie: "Playa de Brazomar, Castro-Urdiales",
} as const;

const FOTO_MAR_B = {
  src: "/fotos/cantabria-oriental/castro-ostende.jpg",
  pie: "Playa de Ostende, Castro-Urdiales",
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

export default function Nuevo2CastroUrdialesPage() {
  const ficha = municipioPorSlug("castro-urdiales");
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="2.861 €/m²" />
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
