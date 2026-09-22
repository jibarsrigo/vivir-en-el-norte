import Encaja from "@/components/Encaja";
import Foto from "@/components/Foto";
import TablaPrecios from "@/components/TablaPrecios";
import EnlaceIdealista from "@/components/EnlaceIdealista";
import MunicipiosZonaFin from "@/components/MunicipiosZonaFin";
import { mallorca, type Zona } from "@/lib/zonas";
import { municipiosOMorrazo } from "@/lib/municipios";

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
  Cangas: "Villa marinera y parroquias de costa",
  Moaña: "Villa lineal y parroquias",
  Bueu: "Villa marinera tranquila",
  Marín: "Villa portuaria y costa residencial",
};

export default function RelatoOMorrazo({ zona }: { zona: Zona }) {
  return (
    <article className="mt-8">
      <section>
        <H2>Dónde está</H2>
        <P>
          O Morrazo es la península que separa las rías de Vigo y Pontevedra, dos entradas de mar
          de las Rías Baixas gallegas. Su orilla sur, con Cangas y Moaña, mira hacia Vigo; la norte,
          con Bueu y Marín, se abre hacia Pontevedra y la isla de Ons. En la punta occidental, la
          Costa da Vela —vela en el sentido de vigilar, una costa de atalayas— termina en Cabo Home
          frente a las Illas Cíes.
        </P>
        <P>
          El nombre Morrazo designa la península y la comarca histórica, no una única villa.
          Cangas reúne casco, puerto y parroquias atlánticas como O Hío y Aldán. Moaña es una franja
          urbana frente a Vigo. Bueu vive alrededor de un puerto más pequeño en la ría de
          Pontevedra. Marín, ya pegado a Pontevedra, combina puerto comercial, Escuela Naval y
          playas residenciales hacia Mogor y Aguete.
        </P>
        <P>
          Las distancias engañan porque el agua obliga a escoger ruta. Cangas y Moaña alcanzan Vigo
          en unos veinte minutos de barco; por carretera dependen del corredor y del puente de
          Rande. Bueu mira a Pontevedra por la costa. Marín está a unos diez minutos de esa ciudad.
          La península permite vivir entre dos capitales urbanas, pero no todos sus municipios las
          alcanzan con la misma facilidad.
        </P>
        <Foto
          src="/fotos/o-morrazo/cangas-cabo-home.jpg"
          pie="Cabo Home: la punta de O Morrazo frente a las Illas Cíes"
        />
      </section>

      <section>
        <H2>El tiempo comparado con Baleares</H2>
        <P>
          O Morrazo suma unas {zona.solHoras.toLocaleString("es-ES")} horas de sol y{" "}
          {zona.despejados} días despejados al año. Mallorca ronda{" "}
          {mallorca.solHoras.toLocaleString("es-ES")} horas y {mallorca.despejados} jornadas
          despejadas. La diferencia aparece sobre todo entre noviembre y febrero: aquí se suceden
          frentes, piedra mojada y tardes en las que la terraza deja de ser una habitación segura.
        </P>
        <P>
          Caen unos {zona.lluviaMm.toLocaleString("es-ES")} milímetros repartidos en{" "}
          {zona.lluviaDias} días. Entre octubre y marzo puede llover {zona.lluvia.oct_mar} días al
          mes; el peor tramo es {zona.lluvia.peor}, con {zona.lluvia.peor_n}. No significa lluvia
          continua cada jornada, pero sí suelo húmedo, musgo y la obligación de revisar cubierta,
          ventilación y orientación de una vivienda.
        </P>
        <P>
          El verano devuelve el equilibrio. La media ronda {zona.tempVerano} °C, las máximas
          habituales quedan cerca de 25 °C y solo entre tres y seis días al año superan los 30 °C.
          Las noches refrescan y el calor sostenido de Mallorca desaparece. Cangas y Bueu rondan
          2.300 horas de sol; Moaña baja hacia 2.250. La diferencia entre municipios importa menos
          que la exposición de la casa al norte o a una ladera cerrada.
        </P>
        <P>
          El agua se mueve entre 17 y 20 °C. Las ensenadas de Aldán, Moaña y Marín son más calmadas
          y pueden alcanzar la parte alta de esa franja; Barra, Melide o Cabo Udra sienten más el
          Atlántico. Frente al Mediterráneo se pierde temperatura de baño y se gana un litoral que
          rara vez pasa semanas bajo calor extremo.
        </P>
        <p className="mt-4 max-w-2xl font-semibold text-[var(--calor)]">
          Verano suave: máximas habituales próximas a 25 °C y unos 3–6 días al año por encima de
          30 °C.
        </p>
      </section>

      <section>
        <H2>Cómo se vive</H2>
        <P>
          Un martes de noviembre revela cuatro ritmos. Cangas abre mercado, comercio y embarcadero
          en una villa caminable. Moaña reparte la vida entre paseo, parroquias y barco a Vigo.
          Bueu baja el volumen alrededor de su puerto, pero mantiene compra y colegio. Marín suena a
          puerto comercial y autobús hacia Pontevedra. Ninguna desaparece en invierno: son villas
          de trabajo antes que urbanizaciones estacionales.
        </P>
        <P>
          El coche depende de la dirección exacta. En los cascos de Cangas, Bueu y Marín se resuelve
          la compra diaria a pie. En Aldán, O Hío, Domaio, Cela, Mogor o Aguete —parroquias y núcleos
          fuera de los centros— sirve para enlazar casa, mercado y hospital. El barco reduce esa
          dependencia entre Cangas o Moaña y Vigo, pero no sustituye al coche para una urgencia ni
          para recorrer la península.
        </P>
        <P>
          Agosto llena arenales, carreteras y aparcamientos. Cangas recibe la presión más visible en
          Rodeira, Aldán y los accesos a Nerga y Barra. Moaña reparte bañistas por su costa urbana.
          Bueu suma ferris a Ons y Marín llena Portocelo, Mogor y Aguete, aunque su puerto sigue
          trabajando. Una casa silenciosa en febrero puede quedar junto al camino de una playa muy
          concurrida en verano.
        </P>
        <P>
          La vida social conserva un pie en el mar: lonjas, remo, conserva, puertos deportivos y
          procesiones del Carmen. Vigo entra en la semana de Cangas y Moaña; Pontevedra en la de
          Bueu y, sobre todo, Marín. Esa doble orientación distingue O Morrazo de una comarca con
          una sola cabecera.
        </P>
        <Foto
          src="/fotos/o-morrazo/cangas-villa.jpg"
          pie="El centro de Cangas conserva comercio y vida cotidiana durante el invierno"
        />
      </section>

      <section>
        <H2>Mercados, fiestas y calendario</H2>
        <P>
          Los mercados de Cangas, Bueu, Moaña y Marín sostienen la compra cotidiana con pescado,
          verduras y conversación incluso en invierno. Alrededor están las lonjas y los puertos,
          donde la gastronomía no se reduce a una carta turística: pulpo, mejillón, sardina y
          pescado de ría nacen de una economía todavía visible. Bueu añade el Museo Massó, memoria
          de la conserva y de la navegación.
        </P>
        <P>
          Cangas concentra varios días grandes. La Semana Santa lleva nueve procesiones por el
          casco; el 16 de agosto, la Danza de San Roque ocupa el atrio de O Hío; el último domingo
          del mes, el Cristo del Consuelo llena la villa. Moaña celebra la Virxe do Carme el 16 de
          julio, con procesión y a veces recorrido marítimo, y San Martiño el 11 de noviembre. En
          esas fechas hay música, calles cortadas y aparcamiento difícil cerca de puertos y atrios.
        </P>
        <P>
          Bueu cubre de alfombras florales sus calles durante el Corpus, en fecha variable entre
          mayo y junio, y celebra el Carmen el 16 de julio. Marín prolonga sus fiestas del Carmen
          durante unos diez días, representa la Festa Corsaria el 22 de agosto y lleva la Danza das
          Espadas por las calles el 29 de septiembre. Antes de elegir un piso céntrico conviene
          conocer una noche de ese calendario: participar en él puede ser un privilegio o una
          fuente anual de ruido.
        </P>
      </section>

      <section>
        <H2>Mar, rías y caminos</H2>
        <P>
          Cangas reúne el litoral más diverso. Rodeira es playa urbana; Aldán es una ría pequeña de
          agua quieta; Nerga, Viñó y Barra se abren hacia el océano. Más allá, Cabo Home y el Monte
          Facho de Donón forman la Costa da Vela: tres faros, castro, brezo y las Cíes a pocos
          kilómetros de mar.
        </P>
        <P>
          Moaña ofrece A Xunqueira y O Con junto al paseo, con agua calma frente a Vigo. Desde
          Domaio se sube al Monte Faro, techo de la península con 624 metros y vistas hacia las dos
          rías. Bueu mira a Ons desde Beluso, Area de Bon y Portomaior; Cabo Udra añade una senda
          circular sobre granito y pequeñas calas.
        </P>
        <Foto
          src="/fotos/o-morrazo/bueu-cabo-udra.jpg"
          pie="La antigua batería costera de Cabo Udra domina la orilla norte"
        />
        <P>
          Marín separa el puerto de trabajo y la costa de ocio. Portocelo es la primera playa hacia
          el oeste; Mogor suma petroglifos detrás de la arena; Aguete, puerto deportivo y casas
          bajas; Loira, una ensenada tranquila. Tierra adentro, el Lago de Castiñeiras y
          Cotorredondo ofrecen bosque y miradores entre Marín y Vilaboa.
        </P>
        <P>
          Ons se alcanza en ferry desde Bueu durante la temporada. La isla pertenece al Parque
          Nacional das Illas Atlánticas y conserva aldea, faro y senderos de acantilado. En el lado
          sur, el barco Cangas–Vigo convierte la ría en una calle de agua. Aquí el mar sirve para
          bañarse, caminar, trabajar y viajar.
        </P>
        <Foto
          src="/fotos/o-morrazo/marin-mogor-laberinto.jpg"
          pie="Mogor: un laberinto de la Edad del Bronce junto a las playas de Marín"
        />
        <Foto
          src="/fotos/o-morrazo/zona-morrazo-costa.jpg"
          pie="Costa da Vela: el Morrazo atlántico entre faros, brezo y las Cíes al fondo"
        />
      </section>

      <section>
        <H2>Qué cuesta una casa</H2>
        <P>
          Cangas ronda los 1.750 €/m², Moaña los 1.600 y Bueu y Marín los 1.500. En la franja
          asequible, un piso de tres habitaciones se sitúa aproximadamente en 205.000 euros en
          Cangas, 187.000 en Moaña y 176.000 en Bueu o Marín. Son referencias del estudio, no una
          garantía para cada calle ni para una primera línea.
        </P>
        <P>
          La franja media cambia de forma. En Cangas puede ser una casa desde unos 180.000 euros en
          Aldán u O Hío, con el precio creciendo por vistas, estado y terreno. En Moaña significa
          mejor orientación hacia Vigo o casa en parroquia; en Bueu, Beluso y las laderas; en Marín,
          Mogor y Aguete. Donde el estudio no da una cifra homogénea, no conviene inventarla: se
          comparan reforma, acceso, saneamiento y ruido.
        </P>
        <P>
          Hay fibra en los cuatro municipios. Cangas conserva algo de obra nueva; en Moaña, Bueu y
          Marín es escasa. Una casa de piedra debe visitarse después de lluvia para revisar cubierta
          y humedad. Un piso de puerto necesita otra prueba: ventanas abiertas un día laborable,
          cuando pasan camiones o trabaja la lonja.
        </P>
        <TablaPrecios filas={municipiosOMorrazo} />
        <EnlaceIdealista ambito="zona" zonaId={zona.id} nombre={zona.zona} />
      </section>

      <section>
        <H2>Servicios, hospital, aeropuerto</H2>
        <P>
          Cangas y Marín alcanzan 7/10 en servicios diarios: centro de salud con urgencias,
          supermercados, farmacias, mercado, colegios, institutos y comercio. Moaña queda en 6/10 y
          Bueu en 5/10: cubren la semana básica, pero dependen más de Vigo o Pontevedra para cultura,
          especialistas y compras grandes.
        </P>
        <P>
          Marín tiene la mejor sanidad: Quirónsalud Pontevedra está a unos diez minutos y Montecelo,
          hospital público, a unos diez o quince. Bueu tarda aproximadamente veinticinco o treinta.
          Moaña ronda treinta y Cangas treinta y cinco. La diferencia es estructural: escoger otra
          calle en Cangas no convierte el hospital en cercano.
        </P>
        <P>
          Vigo-Peinador queda entre treinta y cinco y cuarenta y cinco minutos según el municipio,
          con conexión directa a Palma sobre todo en verano. Santiago ofrece el enlace más estable
          durante el año y queda entre cincuenta y cinco y setenta minutos. Marín vuelve a ganar por
          logística; Bueu queda más lejos de Vigo, aunque algo más cerca de Santiago.
        </P>
        <Foto
          src="/fotos/o-morrazo/marin-portocelo.jpg"
          pie="Portocelo: playa de ría a pocos minutos de Pontevedra y del hospital"
        />
      </section>

      <Encaja
        si={[
          "Se quiere un verano claramente más fresco que el de Mallorca y una relación diaria con el mar. Cangas ofrece Rodeira, Aldán y la Costa da Vela; Moaña, paseo y barco a Vigo; Bueu, calma, Cabo Udra y Ons; Marín, playas de ría con Pontevedra y el hospital al lado.",
          "Se acepta escoger entre escalas verdaderamente distintas. Cangas pone primero el litoral y los senderos; Moaña, la conexión con Vigo; Bueu, el silencio de una villa pequeña; Marín, sanidad y servicios. La península permite ajustar la vida sin renunciar por completo a playa, mercado o ciudad.",
        ]}
        no={[
          `Se necesita el cielo de Baleares: O Morrazo tiene unos ${zona.lluviaDias} días de lluvia y ${zona.despejados} días despejados, frente a ${mallorca.despejados} en Mallorca. El invierno exige convivir con humedad y semanas grises, aunque el verano sea suave.`,
          "Se quiere hospital próximo y a la vez la punta más atlántica. Cangas y sus parroquias ofrecen el mejor mar, pero Montecelo queda a unos treinta y cinco minutos. Marín resuelve sanidad y Pontevedra, aunque su centro convive con puerto comercial y no tiene la continuidad marinera de Cangas o Bueu.",
        ]}
        veredicto="Veredicto de zona: Cangas va primero si mar, calas y senderos pesan más que el hospital; Moaña si Vigo forma parte de la semana y el barco debe evitar el coche; Bueu si se busca la villa más tranquila; Marín si mandan hospital, Pontevedra y una vivienda asequible. Para paisaje elegiría Aldán u O Hío después de probar agosto; para equilibrio urbano y sanitario, Mogor o Aguete junto a Marín; para vida frente a Vigo, el entorno caminable del embarcadero de Moaña."
      />

      <MunicipiosZonaFin zonaId={zona.id} municipios={municipiosOMorrazo} escalas={ESCALA} />

      <p className="mt-12 max-w-2xl text-xs text-[var(--tinta-suave)]">
        Fotos: Wikimedia Commons. Consulta la atribución y licencia en cada imagen.
      </p>
    </article>
  );
}
