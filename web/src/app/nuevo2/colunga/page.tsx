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
 * NUEVO2 — Colunga (Asturias Oriente).
 * Eje: Colunga núcleo (servicios básicos) vs Lastres (pueblo colgado sobre el puerto, pendientes fuertes).
 * La Griega / MUJA / Fitu = salidas; no tercer polo.
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Asturias Oriente es la costa donde la montaña cae al mar: Villaviciosa, Colunga, Ribadesella, Llanes y Ribadedeva. Rías, playas entre acantilados, Picos a media hora y el clima más húmedo de la tabla. Hospital en Arriondas o Cabueñes según municipio.",
  "Colunga es un concejo de unos tres mil doscientos habitantes: el núcleo concentra lo básico; Lastres —pueblo marinero colgado sobre el puerto, a pocos minutos— es otra forma de vivir el mismo mapa. No es Villaviciosa ni Ribadesella: aquí no hay villa completa a pie; el paisaje y la costa compensan, pero piden coche.",
  "Lo que más cambia la vida diaria es dónde queda la casa: en Colunga núcleo —recados cortos, centro de salud, menos pendiente— o en Lastres —puerto, vistas y cuestas fuertes—. La Griega, el MUJA y el Fitu son salidas cercanas; no un tercer sitio donde se resuelva la semana. En ambos núcleos se vive en el concejo; no se vive igual.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Colunga reparte unos tres mil doscientos habitantes entre el núcleo municipal, Lastres y parroquias. Quien llega de fuera descubre enseguida que hay que elegir. En Colunga núcleo —el caserío interior donde se concentran farmacia, tiendas pequeñas y centro de salud: el médico de cabecera y las consultas del día a día, no el hospital— la semana es más llana y práctica. En Lastres —pueblo marinero colgado sobre el puerto, con casas blancas en ladera y pendientes fuertes entre el muelle y las calles altas— la postal es otra: mar delante, cuestas en cada trayecto corto, y más presión de verano. En pocos minutos se pasa de una forma de vivir Colunga a otra, y esa diferencia acaba importando más que la imagen uniforme de «costa del Sueve».",
  "Un martes de noviembre, en el núcleo, se puede hacer un recado corto, pasar por el centro de salud y seguir andando por las calles del pueblo. Los servicios llegan a 4/10 en nuestra escala: hay lo básico en Colunga y el pequeño núcleo marinero de Lastres —farmacia, tiendas, salud de día a día—, pero falta comercio grande e instituto amplio; la compra semanal seria y buena parte de la oferta escolar piden salir hacia Villaviciosa o Ribadesella. Quien elige el núcleo elige menos pendiente y más rutina de pueblo; lo que no elige es autonomía de villa. En Lastres esa misma mañana es más de puerto y de cuesta; el súper denso sigue fuera.",
  "Sin coche, el núcleo aguanta poco más que lo esencial; Lastres aún menos si hay que subir y bajar. El hospital práctico es el Hospital del Oriente, en Arriondas —villa comarcal hacia el interior—, a unos veinte minutos; Jove, privado en Gijón, hacia los cuarenta y cinco. El aeropuerto de Asturias ronda los sesenta minutos —Palma sobre todo en verano—; Santander, hacia ciento cinco, suele cubrir Palma casi todo el año. Colunga, a cambio, ofrece Lastres, La Griega y el Sueve cerca, con la semana partida entre núcleos.",
  "Entre julio y agosto cambia el ritmo. En Colunga, las fiestas de Loreto —patronales de julio— llenan el núcleo con procesión y verbena. En Lastres, el Carmen —también en julio, con procesión marítima— concentra gente en el puerto y las calles empinadas. La Griega —arenal con huellas de dinosaurio a pocos minutos— y La Isla —playa de bahía hacia el oeste del concejo— añaden toallas y aparcamiento. Meses después, en un martes húmedo, el núcleo vuelve a su escala pequeña; Lastres se queda más quieto, con las mismas cuestas. No son dos Colunga distintos: son dos ritmos que forman parte de vivir aquí todo el año.",
  "También por eso la elección entre núcleo y Lastres cambia bastante la vida diaria. En Colunga se ganan calles más manejables y lo básico cerca; el mar de puerto pide unos minutos hacia Lastres. En Lastres se gana el puerto delante o cerca; agosto se nota más, y cada compra o gestión suele mezclar cuesta y coche. Esa diferencia de sitio acaba importando mucho más que la postal vista en un mapa.",
] as const;

const CLIMA_NUEVO2 = [
  "Colunga supone un cambio climático claro respecto a Mallorca. Hay bastante menos sol, la lluvia aparece con mucha más frecuencia y la humedad se nota en casa. La referencia local ronda 1.750 horas de sol al año —de las más bajas de la tabla—, unos cuarenta días despejados y cerca de 1.200 mm de lluvia en unos ciento cincuenta y tres días. Mallorca ronda 2.800 horas de sol. La niebla es baja; el viento, bajo —la Sierra del Sueve, la montaña que cierra el concejo hacia el interior, protege—. También aquí llovizna en julio y agosto. Un día puede empezar gris, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 19,5 °C: no pasas el calor de Baleares. En La Griega o La Isla el agua suele estar entre 19 y 21 °C. Quien vive en el núcleo lo nota al salir a la calle húmeda; quien vive en Lastres, al abrir la ventana al Cantábrico desde la ladera. Un frente gris de noviembre cuenta más que un sábado de sol sobre el puerto.",
] as const;

const VIVIR_NUEVO2 = [
  "De Mallorca a Colunga se llega a un concejo partido en dos núcleos —pueblo con básicos o Lastres colgado sobre el puerto—, no a una villa completa ni a una ciudad. En Mallorca puede ser habitual pensar primero en kilómetros; aquí unos pocos minutos separan Colunga de Lastres —o convierten la misma semana en trayectos si vives en la ladera y necesitas el súper—. Esa elección modifica decisiones tan sencillas como salir a comprar, bajar al puerto o dejar el coche.",
  "También cambia la relación entre coche, pendiente y sanidad. En el núcleo se resuelve lo básico a pie; Lastres pide piernas y, a menudo, coche para ampliar la semana. El hospital pide salir hacia Arriondas. Ir y volver a Mallorca suele pasar por Asturias en verano o por Santander casi todo el año. Se oye asturiano y castellano; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. Julio llena Loreto en el núcleo y el Carmen en Lastres; La Griega y La Isla concentran bañistas. En noviembre el núcleo se queda en su escala; Lastres, más quieto, con las mismas cuestas y más humedad en las fachadas al mar. Para alguien acostumbrado a Mallorca, la diferencia está en la escala: el cambio se concentra en un concejo pequeño partido en dos ritmos, no en una capital. Vivir aquí todo el año significa aceptar esas dos caras —básicos en el núcleo y puerto con pendiente— como partes de una misma vida.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Colunga creció como concejo agrícola e interior frente a una costa de acantilado: el núcleo concentra la vida civil —ayuntamiento, tiendas básicas, centro de salud— mientras la identidad marinera más fuerte quedó en Lastres, el pueblo colgado sobre el puerto. En el siglo XVI Lastres fue el mayor núcleo del concejo, con pesca, salazón y caza de ballena; un temporal destruyó instalaciones portuarias y el auge se frenó hasta restauraciones posteriores. No son dos municipios: son dos herencias del mismo mapa, y conviene leerlas así desde el primer anuncio.",
  "Lastres conserva la relación visible entre muelle y ladera. Las casas blancas suben desde el agua siguiendo la pendiente; el mirador de San Roque —ermita y terraza sobre el pueblo y el Cantábrico— resume esa verticalidad. Quien vive aquí no solo gana vistas: gana cuestas, aparcamiento justo en temporada y un verano que se oye en las calles empinadas. No es un barrio del núcleo: es otro polo del mismo concejo, con esfuerzo real en cada ida y vuelta al puerto.",
  "El MUJA —Museo del Jurásico de Asturias, inaugurado en 2004 entre Colunga y Lastres, con tres cúpulas hacia la costa— y las huellas de dinosaurio en la playa de La Griega —icnitas de saurópodo de hasta 1,25 m, de las mayores del Jurásico— conectan el municipio con el patrimonio paleontológico. Detrás, la Sierra del Sueve y el Mirador del Fitu —altozano con vista de mar y montaña— explican por qué aquí se puede pasar del acantilado a la sierra en el mismo día. Son capas de salida y de paisaje, no de autonomía cotidiana: el comercio grande sigue fuera.",
  "Hoy, comprar «en Colunga» sigue siendo elegir entre núcleo con básicos y menos pendiente, o Lastres con puerto y cuestas. El anuncio no dice cuál de las dos.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El agua cotidiana depende del polo. En Lastres el puerto y la orilla de trabajo están abajo, al pie de las casas: muelle, bahía y olor a mar, no una playa urbana ancha de toallas. La Griega —arenal cercano con rasante donde se ven las huellas de dinosaurio, a pocos minutos entre Lastres y Colunga— y La Isla —bahía con peñascos hacia el oeste— son salidas de baño, no la prolongación peatonal de cada vivienda del núcleo. En verano el agua suele rondar los 18–20 °C. Quien vive en Colunga convierte la playa en trayecto corto; quien vive en Lastres gana el puerto y sigue necesitando coche o piernas fuertes para La Griega. Un martes de junio en el puerto suele haber holgura; un domingo de agosto en La Griega el acceso se llena.",
  "Para caminar andando desde Lastres, el mirador de San Roque y las calles empinadas convierten la ladera en horizonte: escalones, respiración distinta a la del núcleo y el Cantábrico debajo. En Colunga el paseo es más de pueblo interior: el mar queda cerca en el mapa, no bajo la ventana de todas las casas. La senda hacia La Griega pide calzado de verdad y atención a la marea si se quiere ver bien el yacimiento.",
  "El MUJA y La Griega aportan museo y playa en un radio corto; el Fitu y el Sueve cambian la escala hacia sierra y mirador. Villaviciosa y Ribadesella cubren comercio más amplio; Arriondas, el hospital. Aquí el día a día pide elegir núcleo o Lastres; la playa y el museo, convertirlos en salida elegida.",
  "En el núcleo lo básico queda a pie; en Lastres el puerto queda abajo y la cuesta, también. Esa diferencia de cuerpo —calle llana frente a ladera sobre el muelle— resume mejor Colunga que una lista de playas. Arriondas y las villas vecinas cubren lo que el concejo no tiene a pie.",
] as const;

const CASA_NUEVO2 = [
  "En Colunga el núcleo municipal y Lastres no se viven igual. Un anuncio que solo diga «Colunga» puede ocultar si la casa da a calles manejables con básicos cerca, o a una ladera sobre el puerto con pendientes fuertes y más ruido de temporada.",
  "En el núcleo abundan casas y pisos de pueblo con menos desnivel; en Lastres, viviendas ligadas a la cuesta, la humedad marina y el aparcamiento complicado en verano. La fibra es Parcial en la capa de datos; conviene comprobarla dirección a dirección. No hay obra nueva.",
  "El precio medio de referencia ronda 1.774 €/m². Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual un piso en el núcleo y una casa en Lastres.",
  "Antes del precio conviene recorrer la rutina desde la casa: el recado en el núcleo, el puerto o la cuesta en Lastres, La Griega o La Isla, y la salida hacia Arriondas o el aeropuerto. En agosto, el aparcamiento en la costa; en noviembre, la humedad en fachadas al mar. Colunga premia elegir bien el polo; castiga comprar solo la postal de pueblo colgado.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "Colunga núcleo y Lastres no son intercambiables. Una vivienda «en Colunga» en el mapa puede significar básicos y menos pendiente sin puerto debajo, o Lastres con vistas y cuestas fuertes. Comparar solo el precio inventa un Colunga que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta lo básico del núcleo o hasta el puerto en Lastres, el trayecto a La Griega, y la salida hacia Arriondas. En Lastres, pendiente, aparcamiento y humedad marina. En el núcleo, coche para playa y compra amplia. También la luz, la orientación, el aislamiento, la ventilación y señales de humedad; la fibra en esa dirección; y cómo se vive esa misma calle un domingo de agosto y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de Lastres con vistas y de vivienda en el núcleo con acceso sencillo, pero lo que decide es el inmueble concreto. Un acceso manejable, buen estado, luz y un sitio fácil de explicar —núcleo o Lastres bien situada— amplían el abanico de compradores; una casa muy empinada, húmeda o mal situada respecto a la rutina elegida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Colunga",
  a2: "149.903 €",
  a3: "207.558 €",
  b2: "121.076 €",
  b3: "167.643 €",
  m2: "1.774 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Colunga encaja si atrae un concejo pequeño con el núcleo de servicios básicos —farmacia, tiendas, centro de salud a pie— o si se prefiere Lastres, el pueblo colgado sobre el puerto con pendientes fuertes y más verano en la calle. Hay que elegir dónde se vive porque no se vive igual. En el núcleo se resuelve lo esencial sin tanta cuesta; el puerto y la playa piden unos minutos. En Lastres ganan el muelle y las vistas; cada trayecto corto mezcla desnivel, y el comercio grande queda fuera. El Hospital del Oriente, en Arriondas, queda a unos veinte minutos. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia y humedad.",
  "También encaja si se tolera el calendario de julio —Loreto en el núcleo, Carmen en Lastres, La Griega y La Isla en temporada— eligiendo bien la calle y no solo la primera fila del mirador.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Colunga encaja peor si se necesita organizar el día a día andando sin salir del concejo: aquí faltan comercio grande e instituto amplio —los servicios son 4/10 en nuestra escala: hay básicos en el núcleo y Lastres como polo marinero, pero la compra semanal seria y buena parte de la oferta escolar piden Villaviciosa o Ribadesella— y eso importa porque sin coche la semana se estrecha. Tampoco si el hospital debe quedar en el municipio: Arriondas está a unos veinte minutos. Y si se elige Lastres sin aceptar pendientes fuertes en el día a día, suele haber sorpresa.",
  "Tampoco si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en el mirador de San Roque sin probar un noviembre húmedo ni un julio de Carmen en las calles empinadas.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda en Colunga núcleo y otra en Lastres. Desde cada casa: un recado sencillo, el trayecto al puerto o a La Griega, y la salida hacia Arriondas y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en julio o agosto en Lastres o La Griega (aparcamiento, gente, cuestas) y un día cubierto de noviembre en el núcleo (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda y la fibra en la dirección exacta.",
] as const;

const FOTO_COMO_LASTRES = {
  src: "/fotos/asturias-oriente/colunga-lastres.jpg",
  pie: "Lastres: casas blancas colgadas sobre el puerto y la ladera",
} as const;

const FOTO_COMO_MIRADOR = {
  src: "/fotos/asturias-oriente/colunga-mirador.jpg",
  pie: "Ermita de San Roque en el mirador sobre Lastres",
} as const;

const FOTO_HISTORIA_MUJA = {
  src: "/fotos/asturias-oriente/colunga-muja.jpg",
  pie: "MUJA: Museo del Jurásico de Asturias, en Colunga",
} as const;

const FOTO_HISTORIA_SUEVE = {
  src: "/fotos/asturias-oriente/colunga-sueve.jpg",
  pie: "Sierra del Sueve sobre Colunga; el MUJA en la colina",
} as const;

const FOTO_MAR_GRIEGA = {
  src: "/fotos/asturias-oriente/colunga-griega.jpg",
  pie: "Huellas de dinosaurio en la rasante de La Griega",
} as const;

const FOTO_MAR_ISLA = {
  src: "/fotos/asturias-oriente/colunga-isla.jpg",
  pie: "Playa de La Isla, con el Sueve al fondo",
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

export default function Nuevo2ColungaPage() {
  const ficha = municipioPorSlug("colunga");
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
        <Foto src={FOTO_COMO_LASTRES.src} pie={FOTO_COMO_LASTRES.pie} />
        <Foto src={FOTO_COMO_MIRADOR.src} pie={FOTO_COMO_MIRADOR.pie} />
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
        <Foto src={FOTO_HISTORIA_MUJA.src} pie={FOTO_HISTORIA_MUJA.pie} />
        <Foto src={FOTO_HISTORIA_SUEVE.src} pie={FOTO_HISTORIA_SUEVE.pie} />
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
        <Foto src={FOTO_MAR_GRIEGA.src} pie={FOTO_MAR_GRIEGA.pie} />
        <Foto src={FOTO_MAR_ISLA.src} pie={FOTO_MAR_ISLA.pie} />
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="1.774 €/m²" />
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
