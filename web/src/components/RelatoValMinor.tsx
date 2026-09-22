import Encaja from "@/components/Encaja";
import Foto from "@/components/Foto";
import TablaPrecios from "@/components/TablaPrecios";
import EnlaceIdealista from "@/components/EnlaceIdealista";
import MunicipiosZonaFin from "@/components/MunicipiosZonaFin";
import { mallorca, type Zona } from "@/lib/zonas";
import { municipiosValMinor } from "@/lib/municipios";

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
  Baiona: "Villa",
  Nigrán: "Urbanización y parroquias",
  Gondomar: "Pueblo de valle y casas dispersas",
};

export default function RelatoValMinor({ zona }: { zona: Zona }) {
  return (
    <article className="mt-8">
      <section>
        <H2>Dónde está</H2>
        <P>
          Val Miñor es el valle del río Miñor, en el sur de la provincia de Pontevedra. El agua
          baja desde la Serra do Galiñeiro —una sierra de granito que alcanza unos setecientos
          metros— y desde la Serra da Groba —la meseta de brezo y caballos situada sobre Baiona—
          hasta la bahía. Al oeste, las Illas Cíes, el archipiélago protegido que cierra la ría de
          Vigo, permanecen en el horizonte. Al nordeste queda Vigo, la ciudad de casi trescientos
          mil habitantes que aporta hospital, aeropuerto, grandes comercios y vida urbana.
        </P>
        <P>
          Tres municipios construyen tres escalas distintas. Baiona es una villa amurallada con
          casco de piedra, puerto y playa a pie. Nigrán es una sucesión residencial de parroquias,
          playas y urbanizaciones de casas bajas. Gondomar es el interior: una pequeña villa
          rodeada por parroquias de piedra, fincas y monte. Entre sus centros hay pocos minutos; la
          diferencia importante no es la distancia, sino si se quiere calle, urbanización o valle.
        </P>
        <P>
          Un apunte de nombres ayuda a leer el mapa. Baiona designa la villa y también todo su
          municipio; Nigrán no es una sola calle continua, sino el ayuntamiento que reúne núcleos
          como Panxón, A Ramallosa y Priegue; Gondomar nombra la villa del fondo del valle y un
          territorio mucho más disperso alrededor. El Miñor es el río que los enlaza antes de
          abrirse en la Foz do Miñor, el estuario de la bahía.
        </P>
        <Foto
          src="/fotos/val-minor/baiona-villa.jpg"
          pie="Baiona: villa de piedra, puerto y playa a pie"
        />
      </section>

      <section>
        <H2>El tiempo comparado con Baleares</H2>
        <P>
          Si vienes de Baleares, el cambio no está tanto en el frío como en la luz. Val Miñor suma
          unos {zona.despejados} días despejados al año, frente a {mallorca.despejados} en Mallorca,
          y unas {zona.solHoras.toLocaleString("es-ES")} horas de sol frente a{" "}
          {mallorca.solHoras.toLocaleString("es-ES")}. El mar suaviza el invierno, pero de noviembre
          a febrero hay más cielo gris, más humedad y más días en los que la terraza deja de ser
          una habitación de la casa.
        </P>
        <P>
          La lluvia marca la diferencia: unos {zona.lluviaDias} días al año. Entre octubre y marzo
          se mueve alrededor de {zona.lluvia.oct_mar} días al mes; el peor tramo es{" "}
          {zona.lluvia.peor}, con {zona.lluvia.peor_n}. En Mallorca, los mismos meses rondan{" "}
          {mallorca.lluvia.oct_mar}. Aquí no siempre cae agua todo el día, pero la sucesión de
          frentes empapa el jardín, saca musgo en los muros y obliga a revisar orientación,
          ventilación y humedades antes de comprar una casa.
        </P>
        <P>
          El verano compensa buena parte de ese invierno. Junto a la bahía, las máximas habituales
          se quedan en veinticinco o veintiséis grados y las noches refrescan. Lo normal es contar
          apenas entre tres y ocho días por encima de 30 °C, más probables hacia Gondomar que en
          Baiona o Nigrán. No es el julio sostenido de Mallorca. La contrapartida atlántica aparece
          algunas mañanas: niebla en el estuario o nubes bajas apoyadas en la Groba y el Galiñeiro,
          que a menudo levantan antes del mediodía.
        </P>
        <P>
          La costa recibe brisa y cambia rápido; el fondo del valle retiene algo más de calor y
          humedad. Esa diferencia de pocos kilómetros importa: una casa alta y ventilada sobre
          Nigrán no se siente igual que una finca cerrada junto al río en Gondomar. Conviene visitar
          la vivienda con lluvia y volver una mañana de niebla, no decidir solo por una tarde de
          agosto.
        </P>
        <p className="mt-4 max-w-2xl font-semibold text-[var(--calor)]">
          Verano suave junto a la bahía: máximas de 25–26 °C y, según el punto, unos 3–8 días al año
          por encima de 30 °C.
        </p>
      </section>

      <section>
        <H2>Cómo se vive</H2>
        <P>
          Un martes de noviembre enseña el lugar mejor que una foto de turismo. En Baiona hay persianas
          abiertas, mercado, puerto y gente haciendo recados por el casco; la villa baja el volumen,
          pero no desaparece. En Nigrán la vida se reparte entre A Ramallosa, Panxón y las
          parroquias: colegio, supermercado, gimnasio y coche entre casas bajas. En Gondomar el
          centro reúne plaza, comercio y café, mientras a pocos minutos empiezan las pistas entre
          fincas, muros de piedra y monte.
        </P>
        <P>
          En agosto cambia sobre todo la costa. Baiona pasa de unos doce mil habitantes a cerca de
          cuarenta mil: se llenan terrazas y playas, el tráfico entra despacio y aparcar exige
          paciencia. Praia América y Panxón concentran el verano de Nigrán; hacia el interior, la
          vida mantiene un ritmo más estable. Gondomar nota visitantes y segundas residencias, pero
          sigue siendo valle y conserva mejor el silencio.
        </P>
        <P>
          Vigo forma parte de la semana. Mucha gente trabaja allí y vuelve por la AG-57 o la
          carretera de la costa; el trayecto puede ser corto sobre el mapa y crecer en hora punta.
          Esa cercanía permite vivir en casa con jardín sin renunciar a hospital, universidad,
          comercio grande o cultura urbana. También significa que la elección de parroquia debe
          considerar el acceso real a la autovía, no solo los kilómetros al centro.
        </P>
        <P>
          La escala decide la rutina. Baiona es villa: casco reconocible, paseo, mercado, cafés y
          playa accesibles a pie si se vive cerca del centro. Nigrán es urbanización y parroquias:
          una red residencial agradable, pero con varios centros y bastante dependencia del coche.
          Gondomar es valle y disperso: una pequeña villa para resolver lo diario y casas separadas
          por fincas en el resto del municipio. No son tres versiones del mismo pueblo.
        </P>
        <P>
          Primavera y otoño son los meses más equilibrados. Hay playa para caminar, monte sin calor
          y terrazas cuando abre el cielo. En invierno pesan la humedad y las tardes cortas; en
          verano, la presión turística de la bahía. Quien pruebe un martes de noviembre y un domingo
          de agosto entenderá mejor el año completo que quien encadene miradores durante una semana
          de julio.
        </P>
        <Foto
          src="/fotos/val-minor/baiona-monterreal.jpg"
          pie="Monterreal: muralla, pinos y bahía alrededor de la villa"
        />
      </section>

      <section>
        <H2>Mercados, fiestas y calendario</H2>
        <P>
          El año no reparte la multitud por igual. El primer fin de semana de marzo, la Arribada
          recuerda en Baiona la entrada de la Pinta el 1 de marzo de 1493 y reúne a decenas de
          miles de personas entre representaciones y puestos. Durante esos días hay calles
          cortadas, ruido y aparcamiento difícil; en julio y agosto, la presión ya no cabe en un
          fin de semana y se extiende por el paseo, las playas y la carretera de la costa.
        </P>
        <P>
          En Nigrán, la noche de San Xoán en Panxón —del 23 al 24 de junio— enciende hogueras junto
          al mar; el 1 de agosto, San Fiz lleva la fiesta a Praia América. Gondomar concentra sus
          patronales del 10 al 12 de julio, dedicadas a San Cristóbal, San Benito y San Antonio,
          pero conserva además celebraciones de parroquia como San Roque en Morgadáns. Son fechas
          que convierten durante unas horas una costa residencial o una plaza tranquila en espacio
          de verbena.
        </P>
        <P>
          Los mercados semanales de Sabarís y Gondomar sostienen otra clase de calendario: compra,
          conversación y puestos que forman parte de la vida ordinaria, no de la temporada
          turística. En la mesa, el valle y la bahía se entienden juntos: pescado y marisco de
          Baiona y Panxón, verdura y producto de gondomarés, y el recuerdo de que las Cíes —
          visibles desde toda la comarca— marcan el horizonte tanto como el menú. Para elegir casa
          conviene visitar ambos ritmos: una mañana de mercado y una noche de fiesta, además del
          domingo de agosto en que la bahía está llena.
        </P>
      </section>

      <section>
        <H2>Mar, río y camino</H2>
        <P>
          Barbeira es la pequeña playa urbana pegada a la península de Monterreal, el recinto
          amurallado que protege el puerto de Baiona. Ladeira es la playa larga que sale de la villa
          hacia el estuario. Las dos permiten bajar andando desde buena parte de Baiona, aunque el
          agua atlántica —habitualmente entre diecisiete y veinte grados en verano— no tiene la
          temperatura del Mediterráneo.
        </P>
        <P>
          Praia América es el gran arco de arena de Nigrán; el nombre actual sustituyó al antiguo
          Areal de Lourido y hoy identifica la playa familiar y residencial de la bahía. Panxón es
          la parroquia marinera contigua, con puerto, arenal y el Templo Votivo do Mar. Patos, ya
          mirando al océano abierto, significa olas, surf y más viento. En pocos kilómetros se pasa
          del baño protegido al mar expuesto.
        </P>
        <Foto
          src="/fotos/val-minor/nigran-praia-america.jpg"
          pie="Praia América: el gran arenal protegido de Nigrán"
        />
        <P>
          Monteferro es la península boscosa que separa Panxón y Patos: pistas bajo pinos, restos
          militares y vistas hacia las Cíes. La Foz do Miñor —foz significa desembocadura— es el
          estuario donde el río se mezcla con la marea, con marisma, aves y paseo entre A Ramallosa
          y la bahía. No es una playa de baño; es el paisaje de agua tranquila que une Nigrán,
          Baiona y el valle.
        </P>
        <Foto
          src="/fotos/val-minor/nigran-monteferro.jpg"
          pie="Monteferro: pinar entre la bahía y el Atlántico abierto"
        />
        <P>
          Hacia dentro manda el Galiñeiro, el cordal granítico que cierra Gondomar por el este. Su
          nombre identifica sierra, cumbres y rutas con vistas al valle y a la ría. Al oeste, la
          Groba ofrece brezo, caballos y pistas altas sobre Baiona. Entre ambos quedan caminos
          fluviales junto al Miñor, parroquias de piedra y paseos que empiezan a pocos minutos de
          casa. Aquí el mar no sustituye al monte: se usan los dos.
        </P>
        <Foto
          src="/fotos/val-minor/gondomar-galineiro.jpg"
          pie="Serra do Galiñeiro: granito y vistas sobre el valle"
        />
      </section>

      <section>
        <H2>Qué cuesta una casa</H2>
        <P>
          El precio sigue la cercanía a la bahía y la tipología, no un metro cuadrado único para
          los tres. Una casa caminable a Praia América, Panxón o el casco de Baiona suele situarse
          en la orilla tensa del mercado; una vivienda interior con reforma, acceso estrecho o
          humedad puede aflojar. Los números vivos están en la tabla.
        </P>
        <P>
          En Nigrán el presupuesto compra equilibrio entre Vigo, playa y vivienda residencial, a
          cambio de una de las ubicaciones más demandadas de la ría. En Baiona paga villa, paseo y
          mar, con menos oferta de casa independiente cerca del casco. Gondomar estira hacia finca,
          silencio y metros, a cambio de coche y de revisar con cuidado drenaje, orientación,
          saneamiento, pozo y estado de la cubierta.
        </P>
        <P>
          La fibra está bien extendida en los centros y en muchas parroquias, pero una dirección
          vecina no garantiza otra. En una casa dispersa se comprueba por portal antes de reservar,
          igual que el saneamiento y el acceso. El presupuesto sensato deja margen para
          deshumidificación, cubierta, canalones y aislamiento: en clima atlántico una reforma
          bonita no siempre es una reforma seca.
        </P>
        <TablaPrecios filas={municipiosValMinor} />
        <EnlaceIdealista ambito="zona" zonaId={zona.id} nombre={zona.zona} />
      </section>

      <section>
        <H2>Servicios, hospital, aeropuerto</H2>
        <P>
          Baiona cubre la vida diaria de villa —centro de salud, farmacias, supermercados,
          mercado, colegios y hostelería—, con mucha oferta pero también estacionalidad. Nigrán
          destaca por continuidad residencial, centros educativos, comercio y acceso rápido a
          Vigo. Gondomar resuelve compra, farmacia, colegio, deporte y gestiones en la villa, pero
          desde las parroquias el coche forma parte del servicio.
        </P>
        <P>
          El hospital público de referencia es el Álvaro Cunqueiro, en Vigo. Desde buena parte de
          Nigrán y Gondomar queda a unos quince o veinte minutos; desde Baiona, algo más según
          tráfico y acceso. Es una ventaja fuerte frente a comarcas más aisladas: hay vida de valle
          o costa sin renunciar a un hospital grande, aunque no esté dentro de los tres municipios.
        </P>
        <P>
          Vigo-Peinador queda aproximadamente a veinte o veinticinco minutos desde el centro del
          valle y algo más desde Baiona. Sus conexiones con Palma son sobre todo estacionales. Para
          viajar a Baleares durante todo el año, Santiago suele ser la referencia más estable,
          aunque obliga a cerca de hora y cuarto de carretera; Porto amplía alternativas si encajan
          horarios y aparcamiento.
        </P>
        <P>
          Vigo aporta también grandes superficies, universidad, especialistas, tren y una agenda
          cultural que el valle no pretende duplicar. La pregunta práctica es si se acepta hacer ese
          trayecto cuando toca. Desde Nigrán se integra con facilidad; desde Gondomar depende mucho
          de la parroquia; desde Baiona el verano puede añadir tráfico a una distancia que el mapa
          presenta como corta.
        </P>
        <Foto
          src="/fotos/val-minor/gondomar-valle.jpg"
          pie="Gondomar: villa pequeña, fincas y parroquias en el fondo del valle"
        />
      </section>

      <Encaja
        si={[
          "Se busca una casa con silencio sin quedar lejos de Vigo: Gondomar pone finca, valle y monte a unos quince o veinte minutos del hospital Álvaro Cunqueiro, siempre que se acepte el coche y se revise la humedad casa por casa. El Galiñeiro —la sierra granítica del este— y la Groba —la meseta de brezo y caballos sobre Baiona— convierten el paseo y el monte en parte de la semana.",
          "Importa combinar mar y servicios. Nigrán ofrece el equilibrio más directo: Praia América —el gran arenal protegido—, Panxón —la parroquia marinera—, Patos —la playa de surf— y Vigo cerca. Baiona encaja si pesa más una villa reconocible, con casco de piedra, puerto, Barbeira y Ladeira a pie, y se acepta la presión de agosto.",
        ]}
        no={[
          `Se necesita sol de Baleares y una terraza utilizable casi todos los días del invierno. Aquí hay unos ${zona.lluviaDias} días de lluvia al año, niebla ocasional en el estuario y humedad que exige mirar orientación, cubierta y ventilación antes de mirar la cocina.`,
          "Se quiere pueblo compacto y vida completa a pie, pero se elige una parroquia de Nigrán o una casa dispersa de Gondomar. Baiona sí funciona como villa; Nigrán funciona como red residencial; Gondomar, fuera de su pequeño centro, como valle de fincas. La escala cambia la dependencia del coche.",
        ]}
        veredicto="Veredicto de zona: Gondomar responde a quien prioriza casa, terreno y silencio sin perder Vigo —eligiendo bien la parroquia y comprobando humedad, acceso y fibra—. Nigrán ofrece playa, servicios y hospital cerca en una red residencial densa, con un mercado más tenso. Baiona entrega villa de verdad —puerto y playa a pie—, con el peaje del precio y un agosto que multiplica la población. Tres escalas distintas: valle de fincas, urbanización-parroquia y villa marinera; conviene probarlas en noviembre, no solo en agosto."
      />

      <MunicipiosZonaFin zonaId={zona.id} municipios={municipiosValMinor} escalas={ESCALA} />

      <p className="mt-12 max-w-2xl text-xs text-[var(--tinta-suave)]">
        Fotos: Wikimedia Commons. Consulta la atribución y licencia en cada imagen.
      </p>
    </article>
  );
}
