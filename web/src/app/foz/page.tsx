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
 * NUEVO2 — Foz (A Mariña).
 * Eje: A Rapadoira / paseo (playa urbana a pie, más verano) vs ría / marisma (orilla distinta, menos primera fila del veraneo).
 * docs/continuidad-nuevo2.md — método Cudillero.
 */

const RESUMEN_ZONA_NUEVO2 = [
  "A Mariña es la costa de Lugo entre O Vicedo y Ribadeo: Viveiro y su ría, Burela pesquera, Foz, Barreiros y As Catedrais, Ribadeo frente a Asturias. Atlántico abierto, más fresco y gris que las Rías; hospital comarcal y aeropuertos a una hora larga.",
  "Foz es villa de unos diez mil trescientos habitantes en la desembocadura del río Masma, donde se forma la ría de Foz. No es Burela ni Ribadeo: aquí se gana playa urbana dentro del núcleo y bastante autonomía de semana; el hospital sigue en Burela y agosto se nota mucho junto al paseo.",
  "Lo que más cambia la vida diaria es dónde queda la casa: junto a A Rapadoira —playa de arena del propio casco, unida al paseo— o hacia la ría y la marisma —lámina de agua más quieta, orilla distinta, menos primera fila de toallas—. En ambos sitios se vive en Foz; no se vive igual la semana.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Foz reúne unos diez mil trescientos habitantes y se siente villa de verdad: el comercio, el centro de salud, la biblioteca y buena parte del día a día caben en el núcleo, y A Rapadoira —playa de unos trescientos cuarenta metros de arena, pegada al casco— permite meter los pies en el agua andando desde buena parte del núcleo. Quien llega de fuera descubre enseguida que hay que elegir. Junto a A Rapadoira y al paseo se vive la orilla urbana: toalla, mesas de verano y gente en julio y agosto. Hacia la ría del Masma —la entrada de agua que forma la desembocadura— y la marisma, la postal es otra: agua más quieta, puentes y orilla de barcas, con menos sensación de primera fila del veraneo. En pocos minutos se pasa de una forma de vivir Foz a otra, y esa diferencia acaba importando más que la imagen uniforme de «villa de playa» en el mapa.",
  "Un martes de noviembre, en el núcleo, se puede comprar, pasar por la farmacia, ir a la biblioteca y caminar el frente marítimo sin depender de otra villa. Los servicios llegan a 7/10 en nuestra escala —altos para A Mariña— porque el núcleo reúne comercio, atención primaria, farmacia, biblioteca y playa urbana a pie; no llegan a más porque falta instituto de formación profesional y el hospital comarcal no está aquí, sino en Burela. Quien elige A Rapadoira elige playa a pie casi todos los días; lo que no elige es silencio total en agosto. Hacia la ría esa misma mañana es más de marisma y de orilla abierta; el comercio denso sigue cerca en coche corto o andando según la calle, pero la toalla urbana ya no está bajo la ventana.",
  "Sin coche, el núcleo aguanta bien la semana básica —compra, salud primaria, biblioteca, playa—. El Hospital da Mariña —público comarcal en Burela— suele quedar a unos veinte minutos. Los aeropuertos útiles —Asturias alrededor de ochenta minutos; A Coruña, unos ochenta y cinco; Santiago, hacia los ciento diez— piden trayecto. Hay tren de ancho métrico —la antigua FEVE— y la A-8 / N-642 enlazan la costa. Burela cubre la sanidad hospitalaria; Ribadeo, casco indiano y frontera; Foz, a cambio, ofrece villa con playa integrada y ría en el mismo mapa.",
  "Entre julio y agosto cambia sobre todo el ritmo del paseo y de A Rapadoira. El 16 de julio, el Carmen llena el barrio marinero con sardiñada y procesión sobre alfombras florales. El 10 de agosto, San Lourenzo marca otra fecha fuerte. Hacia finales de agosto, la Fiesta Normanda —recreación de desembarco y mercado— concentra gente y ruido en la villa. En temporada la población se dispara y el aparcamiento junto a la playa se disputa. Meses después, en un martes húmedo, el mismo paseo recupera holgura y la villa sigue abierta: no se apaga como un bloque solo de veraneo. No son dos Foz distintos: son dos ritmos que forman parte de vivir aquí todo el año.",
  "También por eso la elección entre A Rapadoira y la ría cambia bastante la vida diaria. Junto a la playa urbana se gana la playa a pie y el paseo delante; agosto se oye y se ve más. Hacia la ría y la marisma se gana otra orilla —más quieta, con puentes y barcas— y menos primera fila de temporada; la playa de arena del casco pide unos minutos más. Esa diferencia de sitio acaba importando mucho más que la postal vista en un mapa.",
] as const;

const CLIMA_NUEVO2 = [
  "Foz supone un cambio climático claro respecto a Mallorca. Hay bastante menos sol, la lluvia aparece con mucha más frecuencia y la humedad se nota en casa. La referencia local ronda 1.900 horas de sol al año, unos cuarenta días despejados y cerca de 1.000 mm de lluvia en unos ciento cuarenta y cinco días —casi la mitad del año—. Mallorca ronda 2.800 horas de sol. La niebla es alta; el viento, medio. También aquí llovizna en julio y agosto. Un día puede empezar gris, abrirse unas horas y volver a pedir abrigo sin que eso resulte excepcional.",
  "La diferencia se nota especialmente en verano. Las medias rondan los 18,5 °C: no pasas el calor de Baleares. En A Rapadoira el agua suele estar entre 17 y 19 °C; la playa del casco está más abrigada que Llas o Peizás —arenales más abiertos del propio municipio, hacia el oeste—, pero el baño sigue siendo fresco. Quien vive junto al paseo lo nota al salir a la orilla; quien vive hacia la ría, al mirar una lámina más quieta bajo cielo cubierto. Un frente gris de noviembre cuenta más que un sábado de sol en A Rapadoira.",
] as const;

const VIVIR_NUEVO2 = [
  "De Mallorca a Foz se llega a una villa con playa dentro del núcleo —o a una casa mirando a la ría—, no a un pueblo mínimo ni a una ciudad. En Mallorca puede ser habitual pensar primero en kilómetros; aquí unos pocos minutos separan A Rapadoira de la marisma —o convierten la misma semana en más ruido de temporada si la ventana da al paseo—. Esa elección modifica decisiones tan sencillas como salir a comprar, ir a la toalla o dejar el coche.",
  "También cambia la relación entre coche, playa y sanidad. En el núcleo gran parte del día a día cabe a pie; el hospital pide Burela a unos veinte minutos. Junto a A Rapadoira la playa queda delante; hacia la ría el coche o una caminata corta unen orilla y comercio. Ir y volver a Mallorca pide trayecto: Asturias ronda ochenta minutos; Santiago, hacia los ciento diez —suele cubrir Palma casi todo el año—. Se oye gallego en la villa; el castellano basta para lo cotidiano.",
  "Y cambia mucho el contraste entre estaciones. Agosto llena A Rapadoira, el Carmen y la Fiesta Normanda; en noviembre la villa sigue abierta —compra, biblioteca, paseo— aunque más quieta en la orilla. Para alguien acostumbrado a Mallorca, donde también existe presión estival, la diferencia está en la escala: el cambio se concentra en una villa de diez mil habitantes y una playa urbana, no en una capital. Vivir aquí todo el año significa aceptar esas dos caras —verano concurrido junto al paseo y meses húmedos con vida local— como partes de una misma vida, no elegir únicamente un sábado de sol en la arena.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "El nombre de Foz viene del latín «fauce»: boca de río. La villa creció en la desembocadura del Masma, donde la ría abre el Cantábrico. Queda así un pueblo que mira a la vez a la playa urbana y a la lámina de agua interior, no solo a un arenal de veraneo. Lo que hoy parece paseo de temporada fue antes una manera de vivir del encuentro entre río y mar: puentes, marisma y un casco que se organizó junto a esa doble orilla. Quien llega solo por A Rapadoira descubre que la identidad de Foz también se sostiene en la ría, con otro ritmo y otra humedad.",
  "San Martiño de Mondoñedo —basílica románica a pocos minutos del núcleo, antigua sede episcopal— añade una capa anterior a la villa moderna. No está en el paseo: conviene ir de propósito, y esa distancia corta ya cuenta como salida. La basílica no sustituye al casco; lo profundiza: explica que el municipio no empezó con el turismo de arena. Quien conoce Foz solo por la playa urbana debe sumar ese patrimonio cercano sin convertirlo en el centro de la semana.",
  "El turismo ha ganado peso sobre el oficio marinero antiguo, y eso se nota en agosto: la población se multiplica y el paseo se llena. Fuera de temporada permanece una base de vecinos y servicios que sostiene la villa cuando se acaba el verano intenso. El Carmen, San Lourenzo y la Fiesta Normanda marcan el calendario que más se oye al vivir junto a la orilla urbana. Quien mire Foz solo por un sábado soleado debe contar también con ese ritmo anual y con la dependencia de Burela para hospital.",
  "Hoy, comprar «en Foz» sigue siendo elegir entre A Rapadoira —playa a pie y verano intenso— o ría y marisma, con otra orilla y menos primera fila de baño. El anuncio no distingue cuál de las dos.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "El mar está siempre cerca en Foz, pero vivir junto a A Rapadoira no es lo mismo que vivir hacia la ría del Masma. A Rapadoira es la playa urbana del casco: arena unida al paseo, usable andando desde buena parte de las calles bajas, con agua que en verano suele rondar los 19–21 °C. La ría es otra orilla del mismo municipio: agua más quieta, marisma, puentes y un ritmo menos de arenal. Quien vive frente a A Rapadoira puede bajar a la arena sin sacar el coche; quien vive hacia la marisma convierte la playa urbana en un trayecto corto. Un martes de junio suele haber sitio; un domingo de agosto el acceso y el aparcamiento se llenan.",
  "Para caminar andando desde A Rapadoira, el paseo hacia Llas —arenal más largo y abierto, del propio municipio— alarga la orilla hacia un Cantábrico menos urbano. Peizás sigue en esa línea de costa. No es un boulevard de ciudad grande: es frente marítimo de villa con viento cuando el mar lo trae, y en agosto el tramo se nota en gente y coches. Desde la marisma ese mismo paseo ya es salida deliberada: hay que acercarse primero a la playa urbana o a Llas.",
  "Cuando el día pide ampliar el mapa, Burela aporta hospital y lonja a unos veinte minutos; Barreiros, playas largas; As Catedrais, arcos de marea a minutos hacia Ribadeo; Ribadeo, casco indiano y ría del Eo. Aquí el día a día pide elegir playa urbana o ría; el hospital, salir. Esa red cercana explica por qué Foz se siente más villa de orilla que pueblo aislado.",
  "En A Rapadoira la orilla queda integrada en la rutina casi todos los días; en la marisma el agua quieta es la orilla cotidiana y la arena de baño pide unos minutos. Esa diferencia describe mejor Foz que contar playas. Burela cubre la sanidad hospitalaria cuando hace falta lo que Foz no tiene dentro.",
] as const;

const CASA_NUEVO2 = [
  "En Foz el sitio concreto pesa más que el nombre: A Rapadoira y el paseo, o ría y marisma. Un anuncio que solo diga «Foz» puede ocultar si la casa da a la playa urbana y al verano, o a una orilla más quieta sin playa debajo.",
  "Predominan pisos y viviendas de villa; hay poca obra nueva y fibra —Sí en la capa de datos; conviene comprobarla en la dirección exacta—. Junto a A Rapadoira notarás salitre, gente de agosto y aparcamiento disputado; hacia la ría, más silencio de orilla y otra humedad.",
  "El precio medio de referencia ronda 1.790 €/m². Con esa media, las columnas A y B de la tabla sitúan viviendas de dos y tres habitaciones según la distancia a la costa. El metro no describe igual un piso frente a A Rapadoira y otro mirando a la marisma.",
  "Antes del precio conviene recorrer la rutina desde la casa: la compra, la playa o la ría, y la salida hacia Burela o el aeropuerto. En agosto, el aparcamiento en el paseo; en noviembre, la luz, la humedad y el ritmo real de la calle. Foz premia elegir bien el lado; castiga comprar solo porque un sábado lucía bien la arena.",
] as const;

const CASA_ADVERTENCIA_MICROZONA =
  "A Rapadoira y la ría no son intercambiables. Una vivienda «en Foz» en el mapa puede significar playa urbana a pie con agosto intenso, o marisma y puente con la toalla a unos minutos. Comparar solo el precio inventa un Foz que no existe.";

const CASA_QUE_CONVIENE_REVISAR =
  "Conviene comprobar el acceso real desde la puerta: recorrido hasta el súper, la playa que se usaría y el hospital de Burela. Junto a A Rapadoira, dónde se deja el coche en agosto y cómo se oye el paseo. También la luz, la orientación, el aislamiento, la ventilación y señales de humedad; en pisos, escaleras o ascensor; la fibra en esa dirección; y cómo se vive esa misma calle un domingo de agosto y un martes de noviembre.";

const CASA_MERCADO_REVENTA =
  "Hay demanda de villa con playa y de vivienda junto a la ría, pero lo que decide es el inmueble concreto. Un acceso sencillo, buen estado, luz y un sitio fácil de explicar —paseo práctico o ría bien situada— amplían el abanico de compradores; una casa muy expuesta al ruido de temporada, difícil de mantener o mal situada respecto a la rutina elegida lo reduce.";

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Referencia municipal; una vivienda concreta puede separarse de la media.";

const CASA_FILA_PRECIOS = {
  municipio: "Foz",
  a2: "151.255 €",
  a3: "209.430 €",
  b2: "122.168 €",
  b3: "169.155 €",
  m2: "1.790 €",
} as const;

const ENCAJA_SI_NUEVO2 = [
  "Foz encaja si atrae una villa donde compra, farmacia y buena parte del día a día caben sin salir del municipio y donde la playa de A Rapadoira —arena del propio casco— queda a pie, o si se prefiere vivir hacia la ría del Masma y la marisma, con otra orilla y menos primera fila de toallas. Hay que elegir dónde se vive porque no se vive igual. Junto a A Rapadoira ganan la playa y el paseo; agosto se nota más. Hacia la ría ganan el agua quieta y más holgura; la toalla urbana pide unos minutos. El Hospital da Mariña está en Burela, a unos veinte minutos. Frente a Mallorca, el verano es mucho más suave, pero el cambio incluye menos sol, más lluvia, niebla y humedad.",
  "También encaja si se tolera el calendario de verano —Carmen, San Lourenzo, Fiesta Normanda— eligiendo bien la calle y no la primera fila del paseo en las semanas más llenas.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Foz encaja peor si el hospital debe quedar a pie: aquí falta —la atención primaria está en la villa, pero el Hospital da Mariña está en Burela a unos veinte minutos— y eso importa porque una urgencia hospitalaria o muchas pruebas piden coche. Tampoco si se busca silencio constante junto a A Rapadoira en agosto: la playa urbana atrae veraneo y el aparcamiento se disputa. Los servicios cotidianos son altos —7/10: comercio, salud primaria, biblioteca y playa en el núcleo— pero ese siete no incluye hospital ni formación profesional completa; la cabecera sanitaria sigue en Burela.",
  "Y si se espera un cielo parecido al de Mallorca, o si se decide solo tras un sábado de sol en A Rapadoira sin probar un noviembre ni un agosto en el paseo, suele llevar a sorpresa.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Antes de decidir, conviene comprobar sobre el terreno la diferencia entre una vivienda junto a A Rapadoira y otra hacia la ría o la marisma. Desde cada casa: una compra sencilla, el trayecto a la orilla que se usaría, y la salida hacia el hospital de Burela y el aeropuerto en hora punta. No para decidir de antemano que una sea mejor, sino para sentir qué intercambio resulta más llevadero.",
  "Merece la pena hacer esa comprobación en agosto en el paseo (aparcamiento, ruido, gente) y un día cubierto de noviembre (luz, humedad, mesas abiertas). Y comprobar el estado de la vivienda, el ascensor si hace falta, y la fibra en la dirección exacta.",
] as const;

const FOTO_COMO_PLAYA = {
  src: "/fotos/a-marina/foz-rapadoira-nuevo.jpg",
  pie: "A Rapadoira: arenal del casco de Foz al atardecer, con el espigón",
} as const;

const FOTO_COMO_VILLA = {
  src: "/fotos/a-marina/foz-villa.jpg",
  pie: "Puerto de Foz: pontones, barcas e iglesia de Santiago al fondo",
} as const;

const FOTO_HISTORIA_BASILICA = {
  src: "/fotos/a-marina/foz-san-martino.jpg",
  pie: "Basílica de San Martiño de Mondoñedo: ábsides románicos en Foz",
} as const;

const FOTO_HISTORIA_MARISMA = {
  src: "/fotos/a-marina/foz-marisma.jpg",
  pie: "Ría de Foz a marea baja: barcas y puente de piedra",
} as const;

const FOTO_MAR_RIA = {
  src: "/fotos/a-marina/foz-ria.jpg",
  pie: "Ría de Foz-Masma en día cubierto: agua quieta y puente al fondo",
} as const;

const FOTO_MAR_PLAYA = {
  src: "/fotos/a-marina/foz-playa.jpg",
  pie: "Desembocadura en Foz: arena ancha, espigón y villa al otro lado",
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

export default function Nuevo2FozPage() {
  const ficha = municipioPorSlug("foz");
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
        <Foto src={FOTO_COMO_PLAYA.src} pie={FOTO_COMO_PLAYA.pie} />
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
        <Foto src={FOTO_HISTORIA_BASILICA.src} pie={FOTO_HISTORIA_BASILICA.pie} />
        <Foto src={FOTO_HISTORIA_MARISMA.src} pie={FOTO_HISTORIA_MARISMA.pie} />
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
        <Foto src={FOTO_MAR_RIA.src} pie={FOTO_MAR_RIA.pie} />
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
          <ConNegrita texto={CASA_NUEVO2[2]} fragmento="1.790 €/m²" />
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
