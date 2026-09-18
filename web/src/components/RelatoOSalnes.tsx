import Encaja from "@/components/Encaja";
import Foto from "@/components/Foto";
import TablaPrecios from "@/components/TablaPrecios";
import EnlaceIdealista from "@/components/EnlaceIdealista";
import MunicipiosZonaFin from "@/components/MunicipiosZonaFin";
import { mallorca, type Zona } from "@/lib/zonas";
import { municipiosOSalnes } from "@/lib/municipios";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{children}</p>;
}

const ESCALA: Record<string, string> = {
  Meaño: "Parroquias de viñedo",
  Cambados: "Villa histórica",
  "A Illa de Arousa": "Isla y villa marinera",
  "Vilanova de Arousa": "Villa y parroquias",
  "Vilagarcía de Arousa": "Ciudad pequeña",
};

export default function RelatoOSalnes({ zona }: { zona: Zona }) {
  return (
    <article className="mt-8">
      <section>
        <H2>Dónde está</H2>
        <P>
          O Salnés es el valle bajo que se abre entre el Monte Castrove y el Monte Xiabre hacia la
          ría de Arousa, la mayor de las Rías Baixas. Una ría es un valle fluvial inundado por el
          mar: aquí forma una lámina protegida, llena de bateas —plataformas flotantes donde se cría
          mejillón—, puertos y bancos de marisqueo. El río Umia cruza el sur de la comarca antes de
          llegar a esa agua.
        </P>
        <P>
          Meaño ocupa las laderas de viñedo próximas a Sanxenxo. Cambados es la villa histórica y
          capital simbólica del Albariño. A Illa de Arousa es una isla de siete kilómetros unida
          por puente. Vilanova combina villa marinera y parroquias vitícolas. Vilagarcía es la
          ciudad de servicios, con hospital, puerto y tren. O Salnés nombra el valle y la comarca,
          no un municipio único.
        </P>
        <P>
          Pontevedra queda a unos veinticinco o treinta minutos desde el centro de la comarca;
          Santiago, a unos cuarenta y cinco o cincuenta. Vilagarcía sirve como cabecera práctica,
          pero su escala portuaria no sustituye el casco peatonal y cultural de Pontevedra. La
          ventaja es otra: ningún municipio queda lejos del hospital comarcal y todos tienen la ría
          o una playa a un trayecto corto.
        </P>
        <Foto src="/fotos/o-salnes/cambados-fefinans.jpg" pie="Cambados: granito, Albariño y la ría de Arousa" />
      </section>

      <section>
        <H2>El tiempo comparado con Baleares</H2>
        <P>
          O Salnés suma unas {zona.solHoras.toLocaleString("es-ES")} horas de sol y{" "}
          {zona.despejados} días despejados al año. Mallorca ronda{" "}
          {mallorca.solHoras.toLocaleString("es-ES")} horas y {mallorca.despejados} jornadas
          claras. La diferencia se concentra en invierno: de octubre a marzo llueve{" "}
          {zona.lluvia.oct_mar} días al mes y diciembre puede alcanzar {zona.lluvia.peor_n}.
        </P>
        <P>
          Caen unos {zona.lluviaMm.toLocaleString("es-ES")} milímetros en {zona.lluviaDias} días.
          Es una de las franjas más secas de las Rías Baixas, aunque sigue duplicando ampliamente
          los días de lluvia de Mallorca. Cambados, A Illa y Vilanova rondan 1.350 milímetros;
          Meaño sube a 1.400 y Vilagarcía a 1.450. La piedra, las cubiertas y la ventilación deben
          comprobarse después de un frente, no solo con sol.
        </P>
        <P>
          El verano compensa: la media ronda {zona.tempVerano} °C, las máximas habituales 25 o
          26 °C y solo entre tres y ocho días al año superan los 30 °C. Frente al calor sostenido
          balear se gana sueño fresco. A Illa y Vilanova reciben más viento; Meaño, Cambados y
          Vilagarcía quedan más abrigados.
        </P>
        <P>
          La ría alcanza unos 18-20 °C en verano y suele estar calma. Sigue lejos del agua templada
          de Mallorca, pero facilita baños cortos en O Bao, As Sinas o Compostela. A Lanzada, al
          sur de la comarca, ya es Atlántico abierto: más oleaje y agua próxima a 17-20 °C.
        </P>
        <p className="mt-4 max-w-2xl font-semibold text-[var(--calor)]">
          Verano suave: máximas habituales de 25–26 °C y pocas jornadas por encima de 30 °C.
        </p>
      </section>

      <section>
        <H2>Cómo se vive</H2>
        <P>
          Un martes de noviembre muestra cinco escalas. Cambados abre mercado y comercio dentro de
          una villa caminable. Vilagarcía añade hospital, estación y compras de ciudad pequeña.
          Vilanova baja el volumen junto al paseo. A Illa queda recogida tras el puente, con puerto
          y tiendas básicas. Meaño se reparte entre Dena y parroquias donde el coche enlaza casa,
          bodega y recados.
        </P>
        <P>
          El coche no pesa igual en todas partes. En el centro de Vilagarcía se puede vivir sin él
          y en Cambados se resuelve la semana básica andando. Vilanova y A Illa permiten caminar
          dentro de sus núcleos, pero dependen de Vilagarcía para especialistas y compra grande.
          En Meaño, salvo en Dena, conducir forma parte de casi cada jornada.
        </P>
        <P>
          Agosto llena la comarca. La Festa do Albariño desborda Cambados; las playas y el puente
          cargan A Illa; San Roque y la Festa da Auga ocupan Vilagarcía; Vilanova encadena fiestas
          hasta septiembre. Meaño conserva más silencio entre viñas, aunque las carreteras hacia
          A Lanzada y Sanxenxo reciben tráfico.
        </P>
        <P>
          Quien vive aquí trabaja en servicios, vino, marisqueo, conserva, puertos y pequeñas
          industrias. No es una costa cerrada fuera de temporada. Cambia la cantidad de gente y el
          ruido, pero mercado, hospital, tren, bodegas y barcos siguen funcionando en enero.
        </P>
        <Foto src="/fotos/o-salnes/zona-bateas-arousa.jpg" pie="Bateas de mejillón en la ría de Arousa" />
      </section>

      <section>
        <H2>Mar, ría y caminos</H2>
        <P>
          A Illa ofrece el baño más inmediato: O Bao junto al puente, Area da Secada al noroeste y
          las calas de Carreirón en la punta sur. Carreirón es parque natural de pinar, dunas,
          marisma y senderos llanos. Vilanova suma As Sinas, A Braña y O Terrón, playas de ría con
          marea visible y poca ola.
        </P>
        <P>
          Vilagarcía tiene Compostela y A Concha dentro del tejido urbano, unidas por paseo hacia
          Carril. Frente a Carril está Cortegada, isla de bosque de laurel que se visita con guía y
          pertenece al Parque Nacional das Illas Atlánticas. Cambados vive una orilla de paseo,
          bateas y marisqueo; sus pequeñas playas no sustituyen a As Sinas o A Lanzada para un baño
          largo.
        </P>
        <Foto src="/fotos/o-salnes/cambados-san-sadurnino.jpg" pie="Torre de San Sadurniño: piedra sobre la ría en Cambados" />
        <P>
          Los montes son lomas, no alta montaña. Lobeira mira la ría desde el límite entre Vilanova
          y Vilagarcía; Xiabre alcanza 641 metros detrás de la ciudad; Castrove cierra Meaño por el
          sur. La ruta del Umia sigue el río, y los caminos de viñedo enlazan pazos y bodegas.
          Cuando se quiere océano abierto, A Lanzada queda a diez minutos de Meaño y unos veinte
          desde Cambados.
        </P>
        <Foto src="/fotos/o-salnes/meano-umia.jpg" pie="El Umia atraviesa el valle antes de llegar a la ría" />
      </section>

      <section>
        <H2>Mercados, fiestas y calendario</H2>
        <P>
          Cambados concentra mercado, bodegas y restauración alrededor de Fefiñáns y la Calzada. La
          primera semana de agosto, la Festa do Albariño llena la villa con casetas, conciertos y
          visitantes hasta culminar el primer domingo. En Meaño, la Festa do Viño ocupa un fin de
          semana de mediados de julio; Dena celebra San Cristovo alrededor del día 10.
        </P>
        <P>
          A Illa dedica varios días de julio al Carmen, San Ramón y San Roque, con procesión
          marítima, verbenas y fuegos. Vilanova enlaza San Roque el 16 de agosto, A Pastoriza el 8
          de septiembre y San Cipriano el 16. Son calendarios que cortan calles, llenan los puertos
          y llevan música junto a viviendas normalmente tranquilas.
        </P>
        <P>
          Vilagarcía celebra San Roque durante unos diez días. El 16 de agosto, la Festa da Auga
          convierte el centro en una zona húmeda multitudinaria; después llegan el Combate Naval y
          las carrozas. Carril celebra su almeja y Vilanova el mejillón y el berberecho. Vino,
          almeja, mejillón y conserva son gastronomía, pero también los oficios que organizan el
          paisaje y la semana.
        </P>
        <Foto src="/fotos/o-salnes/meano-emparrado.jpg" pie="Emparrados de Albariño: el paisaje productivo de O Salnés" />
      </section>

      <section>
        <H2>Qué cuesta una casa</H2>
        <P>
          Meaño y Vilanova rondan 1.350 €/m²; Cambados, 1.500; Vilagarcía, 1.700; A Illa, 1.900 por
          la escasez de suelo. En la franja asequible, tres habitaciones se sitúan aproximadamente
          en 158.000 euros en Meaño y Vilanova, 176.000 en Cambados, 199.000 en Vilagarcía y
          222.000 en A Illa.
        </P>
        <P>
          La franja media cambia de forma: casa de piedra con viñedo en Meaño, vivienda reformada
          en Cambados, piso con terraza en A Illa, casa hacia Baión o Caleiro en Vilanova, u obra
          reciente en Vilagarcía. El estudio sitúa casas de piedra con finca en Meaño alrededor de
          150.000-230.000 euros; en los demás casos pesan demasiado estado, vistas y parcela para
          convertir una media en promesa.
        </P>
        <P>
          Vilagarcía conserva obra nueva; en Cambados, A Illa y Vilanova es escasa y en Meaño casi
          inexistente. La fibra llega bien salvo en parte de las parroquias de Meaño. En costa se
          revisan salitre y viento; entre viñas, cubierta, humedad, saneamiento y acceso.
        </P>
        <TablaPrecios filas={municipiosOSalnes} />
        <EnlaceIdealista ambito="zona" zonaId={zona.id} nombre={zona.zona} />
      </section>

      <section>
        <H2>Servicios, hospital, aeropuerto</H2>
        <P>
          Vilagarcía alcanza 8/10 en servicios: hospital, centros de salud, estación, mercado,
          supermercados, colegios, institutos y comercio. Cambados llega a 6/10; Vilanova, 5/10; A
          Illa, 4/10; Meaño, 3/10. Servicios significa vida diaria dentro del municipio, no la
          distancia al hospital.
        </P>
        <P>
          El Hospital do Salnés queda a cinco minutos de Vilagarcía, quince de Cambados y Vilanova
          y unos veinte de Meaño y A Illa. Quirónsalud Pontevedra está a veinte minutos de Meaño,
          veinticinco de Cambados y alrededor de treinta o treinta y cinco del resto. Toda la zona
          cumple un acceso razonable al hospital público.
        </P>
        <P>
          Vigo-Peinador queda entre treinta y cuarenta minutos, con enlace directo a Palma sobre
          todo en verano. Santiago está entre cuarenta y cinco y cincuenta y cinco y ofrece la
          conexión más estable durante el año. Vilagarcía añade tren directo a Santiago en unos
          veinticinco minutos y servicios de larga distancia.
        </P>
        <Foto src="/fotos/o-salnes/illa-puente.jpg" pie="El puente de A Illa: la comarca también se vive en isla" />
      </section>

      <Encaja
        si={[
          "Se quiere verano mucho más suave que en Mallorca, agua de ría calma y una comarca que conserva vida todo el año. Cambados aporta villa e historia; A Illa, playas a pie; Vilanova, costa asequible; Vilagarcía, hospital y tren; Meaño, piedra y viñedo.",
          "Se valora poder escoger escala sin alejarse del hospital. Incluso desde la isla o las parroquias de Meaño, el Hospital do Salnés queda alrededor de veinte minutos; Santiago y su enlace con Palma están a menos de una hora.",
        ]}
        no={[
          `Se necesita el cielo de Baleares: O Salnés tiene ${zona.lluviaDias} días de lluvia y ${zona.despejados} despejados, frente a ${mallorca.lluviaDias} y ${mallorca.despejados} en Mallorca. El verano es luminoso, pero el invierno exige convivir con humedad y semanas grises.`,
          "Se busca a la vez océano abierto, gran ciudad y vida sin coche. La ría es protegida; A Lanzada requiere desplazamiento. Vilagarcía da servicios sin el encanto de Cambados, mientras Meaño da paisaje y casa a cambio de conducir.",
        ]}
        veredicto="Veredicto de zona: Cambados es la elección más equilibrada por villa, mercado, historia y hospital a quince minutos. Vilanova va primero si pesan precio y baño tranquilo; A Illa si mar y senderos deben empezar a pie; Vilagarcía si mandan hospital, tren y servicios; Meaño si se quiere casa entre viñas y se acepta coche. Antes de elegir, probaría un noviembre húmedo y la semana festiva de agosto de la calle concreta."
      />

      <MunicipiosZonaFin zonaId={zona.id} municipios={municipiosOSalnes} escalas={ESCALA} />

      <p className="mt-12 max-w-2xl text-xs text-[var(--tinta-suave)]">
        Fotos: Wikimedia Commons. Consulta la atribución y licencia en cada imagen.
      </p>
    </article>
  );
}
