import Encaja from "@/components/Encaja";
import Foto from "@/components/Foto";
import TablaPrecios from "@/components/TablaPrecios";
import EnlaceIdealista from "@/components/EnlaceIdealista";
import MunicipiosZonaFin from "@/components/MunicipiosZonaFin";
import { municipiosVigoERia } from "@/lib/municipios";
import { mallorca, type Zona } from "@/lib/zonas";

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{children}</p>;
}

const ESCALA: Record<string, string> = {
  Vigo: "Ciudad",
  Redondela: "Villa",
  Soutomaior: "Pueblo y parroquias",
  Vilaboa: "Casas dispersas / parroquias",
};

export default function RelatoVigoERia({ zona }: { zona: Zona }) {
  return (
    <article className="mt-8">
      <section>
        <H2>Dónde está</H2>
        <P>
          Vigo e ría ocupa la gran entrada de mar del sur de Galicia y su fondo más protegido.
          Vigo, la mayor ciudad gallega, sube en anfiteatro desde el puerto y mira hacia las Illas
          Cíes, el archipiélago que cierra la ría por el oeste. Al nordeste, el agua pasa bajo el
          puente de Rande y se abre de nuevo en la ensenada de San Simón, una cubeta tranquila de
          mareas, bancos de arena y marisma. Allí se suceden Redondela, Soutomaior y Vilaboa.
        </P>
        <P>
          Cuatro ayuntamientos contienen cuatro escalas. Vigo es ciudad: hospitales, universidad,
          puerto, cultura, tráfico y barrios muy distintos. Redondela es villa: mercado, estación,
          casco y playa cercana. Soutomaior se reparte entre Arcade —la pequeña villa junto a la
          ría—, el núcleo del castillo y parroquias rurales. Vilaboa no tiene un centro único:
          son casas y aldeas sobre San Simón, con Pontevedra a un cuarto de hora.
        </P>
        <P>
          Los nombres ayudan a no perderse. Ría no significa río, sino un valle costero ocupado por
          el mar. San Simón es tanto la ensenada interior como la isla situada frente a Cesantes.
          Arcade pertenece al municipio de Soutomaior; Cesantes, al de Redondela. Oia puede ser el
          municipio de la costa atlántica o, aquí, una parroquia del suroeste de Vigo. Cobres nombra
          dos parroquias de Vilaboa que miran al agua desde la ladera.
        </P>
        <Foto
          src="/fotos/vigo-e-ria/vigo-ria.jpg"
          pie="La ría desde Vigo: ciudad y puerto antes de que el agua alcance San Simón"
        />
      </section>

      <section>
        <H2>El tiempo comparado con Baleares</H2>
        <P>
          Frente a Baleares, la ruptura no es un invierno helado, sino un invierno mojado. La zona
          suma unos {zona.despejados} días despejados y{" "}
          {zona.solHoras.toLocaleString("es-ES")} horas de sol al año; Mallorca ronda{" "}
          {mallorca.despejados} jornadas despejadas y{" "}
          {mallorca.solHoras.toLocaleString("es-ES")} horas. Vigo, más abierto a la ría, alcanza
          unas 2.350 horas; Redondela, Soutomaior y Vilaboa se quedan alrededor de 2.250.
        </P>
        <P>
          La lluvia ronda {zona.lluviaDias} días y 1.700 milímetros al año. Entre octubre y marzo
          aparecen unos {zona.lluvia.oct_mar} días húmedos cada mes;{" "}
          {zona.lluvia.peor} suele ser el tramo peor, con {zona.lluvia.peor_n}. No siempre llueve
          desde la mañana hasta la noche, pero los frentes se suceden y dejan jardín, muros y
          cubiertas mojados durante semanas. Una casa debe visitarse con agua, no solo con luz de
          septiembre.
        </P>
        <P>
          El verano cambia el balance. La media ronda los 20,5 °C, las máximas habituales se quedan
          en 25–26 °C y las noches bajan hacia 15 °C. Solo unos tres a ocho días al año superan los
          30 °C. En Mallorca, el calor se instala durante semanas; aquí una tarde cálida suele
          terminar con ventana abierta y chaqueta ligera junto a la ría. La contrapartida es que
          incluso julio puede traer un frente y romper dos días de playa.
        </P>
        <P>
          El fondo de San Simón está más resguardado que Samil y O Vao. Tiene poco viento, agua algo
          más templada y niebla generalmente baja, aunque las nubes pueden apoyarse en las laderas.
          Dentro de Vigo, una vivienda alta recibe más aire que una calle encerrada; en Soutomaior,
          el valle del Verdugo conserva algo más de calor y humedad. La orientación concreta pesa
          tanto como la cifra municipal.
        </P>
        <p className="mt-4 max-w-2xl font-semibold text-[var(--calor)]">
          Verano de 25–26 °C y noches frescas; invierno templado, pero con unos 129 días de lluvia.
        </p>
      </section>

      <section>
        <H2>Cómo se vive</H2>
        <P>
          Un martes de noviembre empieza de cuatro maneras. Vigo abre mercados, hospitales,
          facultades, astilleros y oficinas; el tráfico baja hacia el puerto y vuelve a subir por
          las cuestas. Redondela recibe trenes bajo sus dos viaductos y concentra compra, colegio y
          café en una villa reconocible. Arcade mantiene tiendas y restaurantes cerca de la
          estación, mientras las parroquias de Soutomaior despiertan entre bosque y fincas. En
          Vilaboa, la misma mañana exige coche para enlazar casa, consultorio y compra.
        </P>
        <P>
          La ciudad y las parroquias no son dos versiones del mismo retiro. En el centro de Vigo se
          puede vivir sin coche y tener cultura, especialistas y comercio a pie, pero se aceptan
          densidad y pendiente. En Coruxo, Oia o Saiáns —parroquias costeras del suroeste— aparecen
          casas, huertas y vistas a las Cíes, pero la semana depende más del vehículo. Redondela
          ofrece el punto intermedio: villa con tren y parroquias a pocos minutos.
        </P>
        <P>
          Agosto llena Samil, O Vao y Cesantes, y aumenta el tráfico de acceso a las playas. Vigo no
          se vuelve ciudad turística: puerto, industria y hospitales continúan. Redondela conserva
          su vida de villa aunque Cesantes reciba bañistas. Soutomaior concentra su fiesta más
          singular en abril, cuando Arcade celebra la ostra. Vilaboa cambia poco; su litoral de
          marisma y playas pequeñas no convoca una multitud comparable.
        </P>
        <P>
          La mejor logística de la selección atraviesa todo el año. La AP-9 une Vigo y Pontevedra;
          los trenes paran en Vigo, Redondela y Arcade; Peinador queda entre diez y quince minutos
          desde los cuatro centros tomados como referencia. Esa red ahorra trayectos largos, pero
          también produce ruido: vía, autopista, puente de Rande y carreteras nacionales deben
          escucharse desde cada vivienda.
        </P>
        <P>
          Primavera y otoño equilibran la vida exterior. En marzo florecen las camelias del castillo
          de Soutomaior; en mayo se alargan los paseos por Ulló y Cesantes; en octubre vuelve el
          verde intenso y se comprueba si la casa ventila. Un martes mojado de noviembre y un
          domingo soleado de agosto revelan más que una semana de visitas inmobiliarias.
        </P>
        <Foto
          src="/fotos/vigo-e-ria/redondela-villa.jpg"
          pie="Redondela: una villa ferroviaria con vida durante todo el año"
        />
        <Foto
          src="/fotos/vigo-e-ria/zona-rande.jpg"
          pie="El puente de Rande: la AP-9 cruza la ría y une Vigo con O Morrazo"
        />
      </section>

      <section>
        <H2>Fiestas, mercados y cultura</H2>
        <P>
          La primavera abre el calendario en dos orillas. En Vigo, la Reconquista ocupa el Casco
          Vello alrededor del 28 de marzo —a menudo el último fin de semana de marzo o el primero
          de abril— y recuerda la expulsión de las tropas francesas en 1809. En Arcade, la Festa da
          Ostra llega a comienzos de primavera, habitualmente el primer fin de semana de abril,
          aunque conviene consultar la fecha de cada edición. Ambas llenan calles y restaurantes:
          quien viva en sus recorridos encontrará cortes, visitantes y ruido, no una celebración
          confinada en un recinto.
        </P>
        <P>
          Redondela encadena la Festa do Choco el segundo domingo de mayo y la Festa da Coca en
          Corpus. El choco —la sepia de la ensenada— reúne mesas y puestos; la Coca es el dragón
          legendario que sale con la Danza das Espadas y las Penlas. En Vilaboa, el Entroido de
          Cobres lleva desde el siglo XVIII a madamas y galáns por las dos parroquias de Cobres:
          aquí la cultura no se concentra en un casco, sino que recorre caminos y pequeños lugares.
        </P>
        <P>
          El verano vuelve a Vigo más intenso. La Semana Grande ocupa la primera semana de agosto y
          O Marisquiño añade deporte urbano, música y público junto al litoral; en Redondela, el
          Entroido de Verán cierra el penúltimo fin de semana del mes. Mercados urbanos como los de
          Vigo y Redondela sostienen, en cambio, la vida ordinaria durante todo el año. En la mesa,
          la ría se lee con claridad: el choco de Redondela, las ostras de Arcade, el pescado de
          lonja en Vigo y el pulpo que aparece en fiestas y romerías. Conviene visitar la calle
          elegida en un día de mercado y en su fiesta mayor: el mismo portal puede tener dos ritmos
          opuestos.
        </P>
      </section>

      <section>
        <H2>Mar, ría y camino</H2>
        <P>
          Samil es el gran arenal urbano de Vigo: 1,7 kilómetros de arena, paseo, jardines y
          piscinas. O Vao, más al suroeste, conserva dunas y mira al islote de Toralla; Canido es el
          pequeño núcleo marinero contiguo. El agua suele estar entre 17 y 19 °C en agosto, lejos de
          los 25 °C del Mediterráneo mallorquín. Desde el puerto salen barcos hacia las Cíes entre
          primavera y comienzos de otoño, con autorización en fechas de alta demanda.
        </P>
        <P>
          Cesantes pertenece a Redondela y cambia por completo el agua: arena larga, casi sin olas y
          la isla de San Simón enfrente. La ensenada puede alcanzar 18–20 °C en verano. La marea se
          retira mucho y deja bancos visibles; el baño necesita mirar la hora, no solo el cielo. La
          isla fue monasterio, lazareto y prisión, y hoy se visita en rutas y actividades
          autorizadas.
        </P>
        <Foto
          src="/fotos/vigo-e-ria/redondela-cesantes.jpg"
          pie="Cesantes: arena y agua calma frente a la isla de San Simón"
        />
        <P>
          Arcade, en Soutomaior, vive donde el río Verdugo alcanza la ría. Su orilla es pequeña y
          está ligada al marisqueo y a las ostras; para un gran baño se va a Cesantes. El río añade
          senda y el puente histórico de Pontesampaio, paso del Camino Portugués. Sobre el valle,
          el castillo de Soutomaior reúne murallas, bosque y uno de los jardines de camelias más
          conocidos de Galicia.
        </P>
        <Foto
          src="/fotos/vigo-e-ria/soutomaior-castelo.jpg"
          pie="El castillo de Soutomaior: fortaleza, bosque y camelias sobre el valle"
        />
        <P>
          Vilaboa ofrece la ría como humedal. Las Salinas de Ulló son antiguos estanques salineros
          convertidos en marisma, recorridos por una senda llana entre aves y diques. Deilán y
          Paredes son playas pequeñas, dependientes de la marea. En la parte alta, Lago Castiñeiras
          abre caminos de bosque y Cotorredondo mira a la vez hacia las rías de Vigo y Pontevedra.
          Aquí el agua se contempla y se camina tanto como se nada.
        </P>
        <Foto
          src="/fotos/vigo-e-ria/vilaboa-ullo.jpg"
          pie="Las Salinas de Ulló, donde la antigua industria de sal volvió a ser marisma"
        />
      </section>

      <section>
        <H2>Qué cuesta una casa</H2>
        <P>
          Vigo abre una distancia clara: alrededor de 2.700 €/m², frente a 1.450 en Redondela y
          1.300 en Soutomaior y Vilaboa. En la costa suroeste viguesa se pagan las Cíes, la playa y
          el hospital cerca. Un piso de dos habitaciones recientes cerca del mar ronda
          220.000–230.000 euros —la franja asequible de esa orilla—; tres habitaciones o una casa
          con jardín en Coruxo, Oia o Saiáns se van hacia los 300.000 o más.
        </P>
        <P>
          Redondela ofrece más metros por menos: tres habitaciones cerca de Cesantes pueden rondar
          170.000 euros, aunque el ruido cambia mucho según vía y carretera. Soutomaior ofrece
          casas de piedra con terreno aproximadamente entre 120.000 y 200.000. Vilaboa se mueve en
          un intervalo parecido, a menudo entre 130.000 y 200.000 para casa con finca y, en algunos
          puntos, vista a la ensenada.
        </P>
        <P>
          Fuera de Vigo hay poca o ninguna obra nueva. El ahorro debe reservar margen para cubierta,
          drenaje, aislamiento y ventilación. En una parroquia se comprueban además saneamiento,
          acceso y fibra por dirección: «hay fibra en el municipio» no garantiza que llegue a una
          casa al final de un camino. En Redondela y Arcade se añade aislamiento acústico; en
          Vilaboa, horas de sol invernal.
        </P>
        <TablaPrecios filas={municipiosVigoERia} />
        <EnlaceIdealista ambito="zona" zonaId={zona.id} nombre={zona.zona} />
      </section>

      <section>
        <H2>Servicios, hospital, aeropuerto</H2>
        <P>
          Vigo obtiene 10/10 porque no necesita ciudad de referencia: hospitales, universidad,
          mercados, gran comercio, cultura, deporte, tren de alta velocidad y aeropuerto están
          dentro del municipio. Redondela alcanza 7/10: mercado, comercio, centros educativos,
          centro de salud y estación resuelven la semana; Vigo y Pontevedra completan lo que falta.
          Soutomaior baja a 4/10 y concentra lo básico en Arcade. Vilaboa, con 3/10, vive repartida y
          depende del coche.
        </P>
        <P>
          Vigo usa el Álvaro Cunqueiro como hospital público y Povisa como gran centro
          privado-concertado, ambos a unos diez minutos desde muchas zonas de referencia. Desde
          Redondela quedan aproximadamente a veinte. Soutomaior y Vilaboa miran a Montecelo, el
          hospital público de Pontevedra, a unos quince minutos; Quirónsalud Pontevedra cubre la
          alternativa privada en un tiempo parecido.
        </P>
        <P>
          Peinador, el aeropuerto de Vigo, queda a unos diez minutos de Vigo y Redondela y a quince
          de Soutomaior y Vilaboa, según tráfico y parroquia. Su vuelo directo a Palma es
          principalmente estacional. Santiago, a unos sesenta o setenta minutos, mantiene una
          conexión con Palma durante casi todo el año. Porto amplía destinos, pero queda entre hora
          y cuarenta y hora y cincuenta desde el fondo de la ría.
        </P>
        <P>
          La proximidad numérica no elimina las diferencias. Una casa de Vilaboa puede estar a
          quince minutos del hospital y exigir coche para comprar pan; un piso de Vigo puede tener
          especialistas a mano y tardar veinte minutos en cruzar la ciudad en hora punta. La
          logística de esta zona es excelente, pero siempre debe medirse desde el portal concreto.
        </P>
      </section>

      <Encaja
        si={[
          "Se quiere la mejor combinación de hospital, aeropuerto, tren y mar. Vigo resuelve la vida urbana completa y permite buscar costa residencial en Alcabre, Coruxo, Oia o Saiáns; Redondela ofrece villa, estación y Cesantes —la playa tranquila frente a San Simón— por mucho menos dinero.",
          "Se busca casa y calma sin aislarse. Soutomaior permite vivir entre el castillo, el río Verdugo y Arcade con Pontevedra a unos quince minutos. Vilaboa ofrece finca, marisma y vistas sobre la ensenada, también cerca del hospital, si se acepta que parroquia significa coche y servicios dispersos.",
        ]}
        no={[
          `Se necesita el cielo fiable de Baleares. Aquí hay unos ${zona.lluviaDias} días de lluvia y alrededor de 1.700 milímetros al año; el invierno es templado, pero las cubiertas, los muros y el jardín permanecen mojados durante largas secuencias.`,
          "Se imagina que toda la zona permite una vida de pueblo a pie. Solo Redondela funciona claramente como villa compacta; Arcade cubre una escala menor. Vigo es ciudad y las parroquias de Vilaboa o Soutomaior dependen del coche. El ruido de trenes, AP-9 y carreteras también debe comprobarse casa por casa.",
        ]}
        veredicto="Veredicto de zona: Redondela es la recomendación más equilibrada para vivienda amplia, tren, mercado, hospital a unos veinte minutos y baño tranquilo en Cesantes —tres habitaciones cerca de la playa rondan 170.000 euros—. Vigo va primero cuando hospitales, cultura y ciudad completa son irrenunciables; en su costa suroeste lo habitual es un piso de dos habitaciones cerca del mar, no tres ni casa con jardín y vistas a las Cíes. Soutomaior encaja para casa con terreno y un pequeño apoyo urbano en Arcade. Vilaboa ofrece el mayor silencio y paisaje de ensenada, pagando con coche y servicios escasos. Frente a Mallorca, toda la zona cambia sol invernal por lluvia, pero entrega veranos de 25–26 °C: para práctica y villa, Redondela; para ciudad, Vigo; para casa conectada, Soutomaior; para parroquia y finca, Vilaboa."
      />

      <MunicipiosZonaFin zonaId={zona.id} municipios={municipiosVigoERia} escalas={ESCALA} />

      <p className="mt-12 max-w-2xl text-xs text-[var(--tinta-suave)]">
        Fotos: Wikimedia Commons. Consulta la atribución y licencia en cada imagen.
      </p>
    </article>
  );
}
