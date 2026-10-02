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
 * NUEVO2 — San Vicente de la Barquera (Cantabria Occidental).
 * Eje: casco / ría (villa a pie, puente de la Maza, castillo, básicos)
 * vs costa abierta (Merón / Oyambre — playa, verano lleno, coche desde muchas casas).
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Cantabria Occidental va de la ría de San Vicente a la bahía de Santander: villas de veraneo, dunas de Liencres, Costa Quebrada y una capital con hospital Valdecilla y aeropuerto a pocos minutos. El sol es de los más bajos de la tabla; la logística hacia Palma, de las mejores.",
  "San Vicente de la Barquera es una villa marinera de unos cuatro mil habitantes: castillo, iglesia gótica, puente de la Maza sobre la ría y playas cercanas en Merón y Oyambre. No es Comillas ni Suances: aquí se gana la postal de ría con los Picos al fondo cuando el cielo lo permite; a cambio, el hospital y el aeropuerto quedan a unos cuarenta y cuarenta y cinco minutos.",
  "Lo que más cambia la vida diaria es dónde queda la casa: en el casco junto a la ría —comercio básico, paseo de estuario, gestiones de villa— o hacia Merón y la costa abierta —arena delante o casi, más verano, con el súper denso quedando en el pueblo—. En ambos sitios se vive en San Vicente; no se vive igual.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "San Vicente de la Barquera se siente villa pequeña de verdad: el casco —calles hacia el puerto, el castillo del Rey arriba y la iglesia de Santa María de los Ángeles— concentra farmacia, tiendas básicas, centro de salud —médico de cabecera y consultas del día a día, no el hospital— y buena parte del día a día a pie. Abajo queda la ría: lámina de agua abrigada, puentes y barcas; el puente de la Maza —pasarela larga sobre el estuario— une orillas y marca la postal cuando, al fondo, se ven los Picos de Europa. Quien llega de fuera descubre enseguida que hay que elegir. En el casco se puede comprar lo esencial, bajar a la orilla de la ría y oír el puerto andando desde buena parte de las calles. Hacia Merón —arenal largo a unos pocos minutos— o hacia Oyambre —playa y dunas dentro del parque natural, un poco más al este— la postal es otra: Cantábrico abierto, toallas en verano, aparcamiento disputado, con el comercio del casco quedando atrás. En pocos minutos se pasa de una forma de vivir San Vicente a otra.",
  "Un martes de noviembre, en el casco, se puede hacer una compra sencilla, pasar por el centro de salud y seguir andando hacia la ría o cruzar hacia el puente de la Maza. Los servicios llegan a 5/10 en nuestra escala: hay lo básico de villa turística —farmacia, tiendas, hostelería que no cierra del todo en enero—, pero falta comercio grande y el hospital queda fuera. Quien elige el casco elige rutina de villa y orilla de estuario a pie; lo que no elige es una playa de arena debajo de la ventana ni autonomía de ciudad. Hacia Merón esa misma mañana es más de viento y de oleaje; el súper serio pide volver al pueblo.",
  "Sin coche, San Vicente aguanta la semana corta del casco y se queda corto para casi todo lo demás. El coche enlaza la villa con Merón, con Oyambre, con Torrelavega y con el hospital. El hospital práctico es Sierrallana, en Torrelavega, a unos cuarenta minutos; el privado de Santa Clotilde, en Santander, queda hacia los cincuenta y cinco. El aeropuerto de Santander ronda los cuarenta y cinco minutos —vuelos a Palma casi todo el año—. Comillas queda cerca si apetece otra villa; Santander, más lejos, como capital. San Vicente, a cambio, ofrece ría, castillo y playa de salida; no ofrece hospital cerca ni comercio de ciudad.",
  "En abril cambia el ritmo con La Folía: fiesta marinera el segundo domingo después de Pascua, con misa, procesión hasta el muelle y procesión marítima de la Virgen de la Barquera entre barcos de la villa. Calles llenas, ruido y gente que no es la de un martes cualquiera. En julio y agosto Merón y Oyambre se llenan de toallas y coches. Meses después, en un martes húmedo, el casco recupera escala pequeña: lo básico sigue abierto, pero la costa se nota más vacía. No son dos San Vicente distintos: son dos ritmos del mismo pueblo a lo largo del año.",
  "También por eso la elección entre casco y costa cambia bastante la vida diaria. En el casco se ganan calles, compra básica y paseo de ría; la playa de arena pide coche o un trayecto deliberado. Hacia Merón se gana el arenal abierto; agosto se nota más, y el comercio denso queda en la villa. Esa diferencia de sitio acaba importando más que la postal de ría con los Picos al fondo.",
] as const;

const CLIMA_NUEVO2 = [
  "San Vicente supone un cambio climático claro respecto a Mallorca. Hay bastante menos sol, la lluvia aparece con mucha más frecuencia y la humedad se nota en casa. La referencia local ronda 1.700 horas de sol al año, unos treinta y ocho días despejados y cerca de 1.200 mm de lluvia en unos ciento cincuenta y un días. Mallorca ronda 2.800 horas de sol. El viento es medio; la niebla, baja. También aquí llovizna en julio y agosto. Un día puede empezar gris, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 20 °C: no pasas el calor de Baleares. En Merón el agua suele estar entre 19 y 21 °C; la ría ofrece orilla abrigada para pasear, no el mismo baño de arenal abierto. Quien vive en el casco lo nota al salir a la calle húmeda; quien vive hacia la costa, al abrir la ventana al Cantábrico. Un frente gris de noviembre cuenta más que un sábado de sol en Merón.",
] as const;

const VIVIR_NUEVO2 = [
  "De Mallorca a San Vicente se llega a una villa marinera pequeña —casco y ría, o casa hacia Merón—, no a una ciudad. En Mallorca puede ser habitual pensar primero en kilómetros; aquí unos pocos minutos separan el puente de la Maza de Merón —o convierten la misma semana en trayectos si vives junto a la playa y necesitas el súper—. Esa elección modifica decisiones tan sencillas como salir a comprar, ir a la toalla o dejar el coche.",
  "También cambia la relación entre coche, costa y hospital. En el casco se resuelve lo básico a pie; casi todo lo demás pide salir. Sierrallana queda a unos cuarenta minutos hacia Torrelavega. Ir y volver a Mallorca suele pasar por Santander —casi todo el año—. Se oye cántabro y castellano; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. La Folía llena la villa en primavera; agosto llena Merón y Oyambre; en noviembre el casco sigue abierto aunque más quieto. Para alguien acostumbrado a Mallorca, la diferencia está en la escala: el cambio se concentra en una villa pequeña de ría, no en una capital. Vivir aquí todo el año significa aceptar esas dos caras —casco cotidiano y playa con más presión— como partes de una misma vida.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "San Vicente creció como una de las Cuatro Villas de la Costa: Alfonso VIII le concedió fuero en 1210 y el puerto —pesca, cofradía, paso sobre la ría— organizó la vida mucho antes de que la postal de Picos se hiciera famosa. El castillo del Rey —fortaleza de los siglos XIII–XIV sobre el promontorio— y la iglesia de Santa María de los Ángeles —templo gótico en alto, monumento desde 1931— no son adornos de folleto: ordenan el perfil que se ve al llegar y las calles que suben desde el agua. La Puebla Vieja, amurallada, sigue esa lógica de abrigo y altura. Lo que hoy parece escenario fue antes una manera de vivir del mar y del control del estuario.",
  "El puente de la Maza —obra de piedra iniciada en el siglo XV sobre un paso anterior de madera; en su época llegó a tener docenas de arcos— explica la otra mitad de esa historia: unir orillas, cruzar la marea y dejar que la ría forme parte del día. Quien camina desde el casco hacia el puente no hace una visita de museo: recorre el mismo eje que ha marcado la villa durante siglos. Junto a la entrada, el antiguo convento de San Luis —donde la tradición sitúa la estancia enferma del futuro Carlos I en 1517— añade otra capa de ese mismo camino de llegada. El puerto abajo y las casas hacia arriba siguen la lógica de abrigo y pendiente.",
  "Hacia el este, Merón —arenal largo de varios kilómetros, abierto al Cantábrico, con tramos como El Puntal o El Rosal— y Oyambre —playa y dunas del parque natural— añadieron la costa de baño y de veraneo. No sustituyen al casco: son salidas del mismo municipio. La Folía —fiesta de la Virgen de la Barquera, segundo domingo después de Pascua, con procesión marítima— mantiene viva la identidad marinera cuando el verano todavía no ha llenado las playas. Quien conozca San Vicente solo por la foto de ría y Picos debe sumar castillo, puente, Merón, Oyambre y ese calendario.",
  "Hoy, comprar «en San Vicente» sigue siendo elegir entre casco y ría —básicos y estuario a pie— o costa hacia Merón, con playa abierta y más presión de temporada. El anuncio no distingue cuál de las dos.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar está siempre cerca en San Vicente, pero vivir junto al puerto no significa bajar andando a una playa de arena. En el casco el agua cotidiana es la ría: lámina abrigada, barcas, orilla de paseo y el puente de la Maza cruzando el estuario. No es arenal para tender la toalla: es agua de puerto y de marea, con olor a mar y, cuando el cielo abre, los Picos al fondo. Merón —arenal largo a unos pocos minutos— es otra cosa del mismo municipio: Cantábrico abierto, oleaje, surf, toallas en verano y aparcamiento que en agosto forma parte del plan. Oyambre —playa y dunas del parque natural, un poco más al este— añade costa protegida, no la prolongación peatonal de cada vivienda del casco. En verano el agua suele rondar los 19–21 °C. Quien vive en la villa puede caminar la ría; quien quiere baño de arenal convierte Merón u Oyambre en salida. Un martes de junio en la ría suele haber holgura; un domingo de agosto en Merón el acceso se llena.",
  "Para caminar andando desde el casco, el frente de ría, los puentes y las calles hacia el castillo convierten la villa en horizonte cercano: desnivel entre el muelle y las calles altas, viento de estuario, tejados y muralla. No es un paseo llano de ciudad grande. Hacia Merón ese mismo día cambia de registro: arena larga, oleaje y, en temporada, gente y coches disputando el acceso. El viento de playa abierta no es el mismo que el de la ría.",
  "Merón y Oyambre aportan el baño; Comillas, otra villa con patrimonio a pocos minutos; Torrelavega, hospital Sierrallana y comercio; los Picos, montaña a aproximadamente una hora cuando el cielo lo permite. Aquí el día a día pide elegir casco o costa; el hospital, salir a Sierrallana a unos cuarenta minutos.",
  "En el casco la ría queda a pie casi todos los días; hacia Merón la playa queda delante y el comercio denso queda en la villa. Esa diferencia describe mejor San Vicente que contar playas. Sierrallana cubre la sanidad hospitalaria cuando hace falta lo que aquí no hay.",
] as const;

const CASA_NUEVO2 = [
  "En San Vicente el casco junto a la ría y la costa hacia Merón marcan semanas distintas. Un anuncio que solo diga «San Vicente de la Barquera» puede ocultar si la casa da a calles caminables y al estuario, o a un acceso de playa con coche para cada recado.",
  "En el casco abundan pisos y casas con humedad de ría y salitre; hacia Merón, tipologías más ligadas al veraneo. La fibra es Sí en la capa de datos; conviene comprobarla dirección a dirección. Hay poca obra nueva.",
  "El precio medio de referencia ronda 3.218 €/m². Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual un piso en el casco y una casa frente a Merón.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra, la ría o la playa, y la salida hacia Torrelavega o el aeropuerto. En agosto, el aparcamiento en Merón; en noviembre, la humedad en el casco. San Vicente premia elegir bien el polo; castiga comprar solo la postal de ría y Picos.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "El casco y la costa no son intercambiables. Una vivienda «en San Vicente» en el mapa puede significar comercio y ría a pie sin arena debajo, o Merón cerca con coche para el súper. Comparar solo el precio inventa un San Vicente que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el súper, la ría o Merón, y la salida hacia Sierrallana. En el casco, humedad de estuario y pendientes hacia el castillo. Hacia Merón, salitre, aparcamiento en temporada y distancia real a servicios. También la luz, la orientación, el aislamiento, la ventilación y señales de humedad; la fibra en esa dirección; y cómo se vive esa misma calle un domingo de agosto y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de villa con ría y de vivienda cerca de Merón, pero lo que decide es el inmueble concreto. Un acceso sencillo, buen estado, luz y un sitio fácil de explicar —casco o costa bien situada— amplían el abanico de compradores; una casa mal situada respecto a la rutina elegida o muy expuesta al pico de agosto lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "San Vicente de la Barquera",
  a2: "271.921 €",
  a3: "376.506 €",
  b2: "219.629 €",
  b3: "304.101 €",
  m2: "3.218 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "San Vicente encaja si atrae el casco junto a la ría —castillo, puente de la Maza, básicos y paseo de estuario a pie— o si se prefiere vivir hacia Merón, con playa abierta y coche para la semana de la villa. Hay que elegir dónde se vive porque no se vive igual. En el casco se resuelve lo básico sin salir; la playa de arena pide unos minutos. Hacia Merón ganan el arenal y el oleaje; el comercio denso queda en el pueblo. Sierrallana queda a unos cuarenta minutos; el aeropuerto de Santander, a unos cuarenta y cinco. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia y humedad en casa.",
  "También encaja si se tolera el calendario —La Folía en primavera, Merón y Oyambre en verano— eligiendo bien la calle y no solo la primera fila del acceso a la playa.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "San Vicente encaja peor si la playa de arena debe quedar a pie desde cualquier casa del casco: aquí la ría es orilla de estuario para pasear, no arenal de toalla; Merón pide trayecto. Tampoco si el hospital debe quedar cerca: Sierrallana está a unos cuarenta minutos. Los servicios cotidianos son medios-bajos —5/10: villa con lo básico, sin comercio grande— y ese cinco no sustituye Torrelavega ni Santander. Falta súper amplio y gestiones de escala mayor: hay que sacar el coche, y eso pesa cada semana si se espera autonomía de ciudad.",
  "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en Merón sin probar un noviembre en el casco.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en el casco y otra hacia Merón. Desde cada casa: una compra sencilla, el trayecto a la ría o a la playa, y la salida hacia Sierrallana y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto en Merón (aparcamiento, gente) y un día cubierto de noviembre en el casco (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
] as const;

const FOTO_COMO_VILLA = {
  src: "/fotos/cantabria-occidental/san-vicente-villa.jpg",
  pie: "San Vicente de la Barquera: villa marinera junto a la ría",
} as const;

const FOTO_COMO_RIA = {
  src: "/fotos/cantabria-occidental/san-vicente-ria.jpg",
  pie: "Ría de San Vicente: estuario con los Picos al fondo cuando el cielo abre",
} as const;

const FOTO_HISTORIA_CASTILLO = {
  src: "/fotos/cantabria-occidental/san-vicente-castillo.jpg",
  pie: "Castillo del Rey, sobre el casco de San Vicente",
} as const;

const FOTO_HISTORIA_MAZA = {
  src: "/fotos/cantabria-occidental/san-vicente-maza.jpg",
  pie: "Puente de la Maza: pasarela sobre la ría",
} as const;

const FOTO_MAR_MERON = {
  src: "/fotos/cantabria-occidental/san-vicente-meron.jpg",
  pie: "Playa de Merón: arenal abierto al Cantábrico",
} as const;

const FOTO_MAR_OYAMBRE = {
  src: "/fotos/cantabria-occidental/san-vicente-oyambre.jpg",
  pie: "Oyambre: playa y dunas del parque natural",
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

export default function Nuevo2SanVicenteDeLaBarqueraPage() {
  const ficha = municipioPorSlug("san-vicente-de-la-barquera");
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
        <Foto src={FOTO_COMO_RIA.src} pie={FOTO_COMO_RIA.pie} />
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
        <Foto src={FOTO_HISTORIA_CASTILLO.src} pie={FOTO_HISTORIA_CASTILLO.pie} />
        <Foto src={FOTO_HISTORIA_MAZA.src} pie={FOTO_HISTORIA_MAZA.pie} />
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
        <Foto src={FOTO_MAR_MERON.src} pie={FOTO_MAR_MERON.pie} />
        <Foto src={FOTO_MAR_OYAMBRE.src} pie={FOTO_MAR_OYAMBRE.pie} />
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="3.218 €/m²" />
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
