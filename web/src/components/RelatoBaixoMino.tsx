import Encaja from "@/components/Encaja";
import Foto from "@/components/Foto";
import TablaPrecios from "@/components/TablaPrecios";
import EnlaceIdealista from "@/components/EnlaceIdealista";
import MunicipiosZonaFin from "@/components/MunicipiosZonaFin";
import { mallorca, type Zona } from "@/lib/zonas";
import { municipiosBaixoMino } from "@/lib/municipios";

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">{children}</h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{children}</p>;
}

const ESCALA: Record<string, string> = {
  "A Guarda": "Villa",
  Oia: "Casas dispersas",
  "O Rosal": "Pueblo compacto y casas dispersas",
  Tomiño: "Casas dispersas",
  Tui: "Villa",
};

export default function RelatoBaixoMino({ zona }: { zona: Zona }) {
  return (
    <article className="mt-8">
      <section>
        <H2>Dónde está</H2>
        <P>
          La esquina suroeste de Galicia: el último tramo del Miño antes de entrar en el Atlántico,
          con Portugal en la otra orilla. Mirando al mar, A Guarda —una villa de pescadores apretada
          en la punta— y Oia, una hilera de aldeas entre la sierra y las rocas. Tierra adentro, el
          valle de O Rosal (viñedo, molinos de agua, casas de piedra), las vegas de Tomiño con Goián
          asomado a Portugal, y Tui, la ciudad pequeña que se mira en Valença, la villa amurallada
          portuguesa al otro lado del río. Detrás, la Serra da Groba —meseta de brezo y caballos
          salvajes— y el Monte Aloia, primer parque natural de Galicia, sobre Tui; sobre A Guarda,
          el Monte Santa Trega, monte redondo con castro y mirador, balcón de la desembocadura.
        </P>
        <P>
          Esta frontera se fijó en el siglo XII. Durante quinientos años el Miño fue línea de
          guerra: por eso hay fortalezas a los dos lados. Hoy se cruza en coche, en bici o a pie
          por tres puentes y un barco. Portugal a cinco minutos multiplica lo que hay a mano:
          Valença los sábados (comercio dentro de la fortaleza), Vila Nova de Cerveira al otro lado
          de Goián (feria y paseo fluvial), Caminha y las playas de Vila Praia de Âncora, un poco más
          al sur.
        </P>
        <P>
          Un apunte de escala, porque aquí un ayuntamiento de diez o dieciocho mil habitantes no se
          siente como un pueblo mallorquín de mil y pico. Allí el casco es compacto: plaza, súper,
          farmacia, y se va andando al bar. Aquí mucha gente vive en casas con finca, a doscientos
          o cuatrocientos metros. A Guarda y Tui son villas: casco, comercio, paseo. O Rosal tiene
          un núcleo compacto —O Calvario— y alrededor casas entre parras. Tomiño y Oia se viven
          sobre todo en disperso. Quien no entienda esa diferencia llegará pensando en «pueblo» y
          encontrará otra cosa: paisaje, sí; calle que una la vida diaria, no siempre.
        </P>
      </section>

      <section>
        <H2>El tiempo comparado con Baleares</H2>
        <P>
          Si vienes de Baleares, el cuerpo tarda unas semanas en recalibrar. No porque el invierno
          sea más frío —en enero las máximas y mínimas se parecen mucho a las de la isla; el mar
          templa—, sino porque el cielo se comporta distinto. Aquí hay unos {zona.despejados} días
          despejados al año; en Mallorca, {mallorca.despejados}. El sol suma{" "}
          {zona.solHoras.toLocaleString("es-ES")} horas frente a las{" "}
          {mallorca.solHoras.toLocaleString("es-ES")} de allí. La diferencia se come casi toda entre
          noviembre y febrero: mañanas grises, terraza que se usa la mitad o menos. De junio a
          septiembre, en cambio, la diferencia se estrecha. En verano la terraza se usa. El cuerpo
          lo nota.
        </P>
        <P>
          La lluvia es otra conversación. Unos {zona.lluviaDias} días al año; de octubre a marzo,
          alrededor de {zona.lluvia.oct_mar} días al mes —el peor tramo, {zona.lluvia.peor}, con{" "}
          {zona.lluvia.peor_n}. En Mallorca, en esos mismos meses, rondan {mallorca.lluvia.oct_mar}.
          Y cuando llueve aquí, llueve de verdad: no el chaparrón breve que pasa y deja el asfalto
          humeando, sino el agua que empapa el valle, que deja los molinos del Folón —en O Rosal—
          en musgo y que te enseña, si miras bien las paredes en noviembre, si esa casa aguanta la
          humedad o no.
        </P>
        <P>
          El verano en la costa —A Guarda, Oia— es otra promesa: máximas alrededor de veinticinco
          grados, noches frescas cerca de quince. En Mallorca, julio aprieta hacia los treinta y
          hay decenas de días por encima de treinta. En la punta atlántica, el calor que se deja
          atrás casi desaparece: apenas unos cinco días al año cruzan esa raya. En el valle, no.
          Tui y Tomiño devuelven quince o veinte días por encima de treinta, con puntas de
          treinta y seis o treinta y ocho cuando la ola de calor se cuela río arriba. Quien huye
          del calor y elige el fondo del Miño se encontrará, en julio, con una versión suave de lo
          que quería olvidar.
        </P>
        <P>
          El viento es medio en A Guarda —la punta está expuesta al noroeste— y bajo en el valle.
          La niebla es baja en la costa; en Tui y Tomiño, mañanas de niebla de río que borran el
          mundo hasta media mañana y luego lo devuelven. No es drama. Es el clima de frontera
          atlántica, y conviene vivirlo un noviembre antes de firmar.
        </P>
        <p className="mt-4 max-w-2xl font-semibold text-[var(--calor)]">
          El calor aprieta en julio y agosto en el interior (Tui, Tomiño). En A Guarda y Oia, unos
          cinco días al año por encima de 30 °C.
        </p>
      </section>

      <section>
        <H2>Cómo se vive</H2>
        <P>
          Un martes de noviembre en A Guarda: el puerto trabaja. Hay cajas, olor a lonja, alguien
          que grita una medida. En el paseo hay café; no es temporada alta y sin embargo la villa
          no se ha apagado. El viento de noroeste se nota en la cara si caminas hacia la punta. En
          O Rosal, ese mismo martes, el valle está húmedo y verde, las parras desnudas, la plaza de
          O Calvario con cuatro conocidos que no necesitan presentarse. En Oia las aldeas se
          quedan en lo suyo: un bar encendido, el océano de fondo, y el coche preparado porque el
          súper grande no está a la vuelta de la esquina. En Goián, la niebla puede haber tapado el
          Miño al despertar; a media mañana Cerveira reaparece al otro lado del puente. En Tui, el
          Camino sigue soltando peregrinos aunque sea noviembre: una cafetería abierta, una calle
          empedrada mojada, Valença a un paso.
        </P>
        <P>
          Un domingo de agosto cambia el mapa sin mover los pueblos. A Guarda se llena en Area
          Grande; el parking junto al paseo se queda corto; la PO-552, dos carriles de costa, va
          lenta entre quien baja a la playa y quien vuelve con arena. O Rosal no se satura: sigue
          siendo valle, parra, ritmo de siempre. Tui calienta en el fondo del río —el calor de
          valle que en la costa casi no existe— y el goteo del Camino no para. Tomiño, en la vega,
          siente ese mismo calor; Goián se llena un poco más los sábados porque medio Baixo Miño
          cruza a la feria de Cerveira. Oia mira el Atlántico con más gente en las casas de costa,
          pero el silencio de las aldeas interiores no desaparece del todo.
        </P>
        <P>
          Entre noviembre y agosto está el año de verdad —el que decide si uno se queda—. Un día
          laborable cualquiera no es postal: es farmacia, pan, colegio, centro de salud, el súper
          o el mercado, y la pregunta de si eso se hace a pie o en coche. En A Guarda y en Tui se
          puede bajar andando a casi todo lo diario; en O Calvario también, si vives cerca de la
          plaza. En Tomiño y en Oia el volante abre la semana: el pan puede estar cerca, el
          instituto o el súper grande no. Quien venga de un pueblo compacto mallorquín —plaza,
          comercio, ciudad a cinco minutos— notará esa diferencia antes que el color del cielo.
        </P>
        <P>
          Portugal no es escapada de fin de semana especial: es costumbre. Cruzar a Valença a
          comprar toallas o a tomar un café dentro de la fortaleza; bajar a Cerveira el sábado por
          la feria; mirar Caminha desde Camposancos como quien mira el pueblo de enfrente. La
          frontera se siente en la mesa, en el precio de algunas cosas, en el idioma mezclado de
          los bares. Quien viva aquí acabará teniendo «su» orilla portuguesa del mismo modo que
          tiene su bar.
        </P>
        <P>
          La semana tiene también sus anclas. A Guarda conserva mercado diario; Tui, mercadillo
          los jueves; Cerveira, la gran feria de los sábados al otro lado del puente. Después
          llega el calendario mayor: el vino de O Rosal a mediados de julio, los curros de la
          Groba entre mayo y junio, San Telmo en Tui desde Semana Santa hasta el lunes siguiente
          al Lunes de Pascua. No es una costa de urbanización cerrada ni de temporada que se apaga
          en octubre. El modelo es piso en villa o casa de piedra con terreno. Vigo —hospital,
          gran comercio, aeropuerto— está a media hora o tres cuartos: hay que aceptarlo o no
          firmar. No está a la vuelta del campanario.
        </P>
        <P>
          Primavera y otoño merecen su propio párrafo. En mayo el valle se pone casi imposible de
          verde, la Groba suelta los garranos hacia los curros, y el Atlántico aún muerde si te
          metes. En octubre empieza el aprendizaje de la lluvia seria: no el chaparrón breve, sino
          el agua que empapa el circuito de molinos del Folón, en O Rosal, y te enseña, si miras bien
          las paredes, si esa casa aguanta
          la humedad. Quien solo conozca agosto firmará el paisaje; quien haya visto un octubre y
          un noviembre firmará la vida.
        </P>
        <P>
          Al final la pregunta que importa más que el sol es esta: ¿quieres calle que una, o
          paisaje que rodea? Compacto se siente el casco de A Guarda, el de Tui, O Calvario.
          Disperso —finca, parra, cientos de metros— es otra vida, aunque el padrón diga seis mil
          o trece mil. Las dos son Baixo Miño. No son intercambiables. Elegir pueblo aquí es elegir
          escala, no solo código postal.
        </P>
        <Foto src="/fotos/baixo-mino/a-guarda-villa.jpg" pie="A Guarda: villa de puerto que no se apaga en invierno" />
      </section>

      <section>
        <H2>Mar, río y camino</H2>
        <P>
          Aquí el paseo cuenta tanto como nadar. Quien llega pensando en el Mediterráneo —agua a
          veinticinco grados, bahía quieta, toalla sin prisa— necesita un momento para entender el
          Atlántico gallego: en agosto el agua de la costa abierta anda entre diecisiete y diecinueve
          grados. Se aguanta con bañador, sí; no es el baño largo y cálido de Mallorca. Donde el mar
          se mete en ría o estuario, el cuerpo lo nota más templado y las olas desaparecen.
        </P>
        <P>
          Area Grande, en A Guarda, es la playa de diario de la punta. Queda a pie desde el casco:
          poco más de un kilómetro, cuatro minutos andando cuesta abajo hacia el océano. Es una
          cala de arena fina, abrigada entre rocas, con el Monte Santa Trega detrás como telón. En un
          martes de junio puedes tener casi toda la arena; un domingo de agosto el aparcamiento
          junto al paseo marítimo se queda corto y hay que buscar sitio con paciencia. Es playa de gente
          local, de baño corto y de vuelta al café del puerto.
        </P>
        <P>
          Un poco más adentro, hacia Camposancos (la parroquia del estuario en A Guarda), O Muíño
          cambia el registro por completo: es la playa del estuario —agua plana, Portugal enfrente
          (Caminha a la vista) y merendero bajo los pinos—. Tres kilómetros, seis minutos. Sin olas,
          más templada, ideal si lo que se busca es meterse sin pelear con el Atlántico. Más al
          norte, en Oia, Praia de Mougás es otra historia: arena y cantos, oleaje de verdad, el
          ruido del mar llenándolo todo. Se va a mirar, a sentir el viento, no a nadar como en una
          piscina natural. Quien quiera baño calmado desde Oia suele bajar a Baiona: unos dieciocho
          minutos, bahía abrigada, arena fina.
        </P>
        <P>
          Desde Tui o Goián, mucha gente mira a Cesantes, en la ría de Vigo: arena larga, sin
          oleaje, agua entre dieciocho y veinte grados, media hora en coche. Y siempre queda
          Portugal —Moledo, Vila Praia de Âncora— a unos tres cuartos de hora, o el barco estacional
          A Guarda–Caminha cuando opera. En Tui, además, Areeiros es playa de río: el Miño, no el
          mar; en verano se usa.
        </P>
        <Foto src="/fotos/baixo-mino/oia-mosteiro.jpg" pie="Oia, donde el océano se mira más que se nada" />
        <Foto
          src="/fotos/baixo-mino/zona-goian-forte.jpg"
          pie="Goián: la fortaleza de San Lourenzo mira al Miño y a Portugal"
        />
        <P>
          Los caminos son la otra mitad del agua. Subir al Santa Trega —una hora a pie desde A
          Guarda o diez minutos en coche— es salir al castro de casas circulares y al mirador sobre
          la desembocadura, con Caminha al otro lado. La senda litoral une A Guarda, Oia y Baiona:
          el Atlántico a un lado, la Serra da Groba al otro; cualquier tramo de cinco o seis
          kilómetros es una tarde. En O Rosal, el circuito de los molinos del Folón y del Picón baja
          entre piedra, musgo y cascadas.           La Groba abre meseta y caballos; el Monte Aloia, sobre Tui, es el
          paseo del domingo. Goián y Tui tienen su paseo fluvial; cruzando el puente, la Ecopista
          Valença–Monção sigue el río hacia el interior de Portugal.
        </P>
      </section>

      <section>
        <H2>Mercados, fiestas y mesa</H2>
        <P>
          La mesa cuenta cómo se vive tanto como el clima. A Guarda tiene mercado diario y
          mercadillo semanal: pescado, verdura, el ritmo de una villa que no depende del turista.
          Tui abre su mercado de abastos y celebra el mercadillo de los jueves. El sábado grande
          suele ser Cerveira —a dos minutos de Goián—: fruta, ropa, comida y artesanía; medio Baixo
          Miño cruza el puente como quien va al mercado del pueblo de al lado, aunque el pueblo sea
          otro país. En Valença, dentro de la fortaleza, las tiendas y los cafés esperan todos los
          días: el fin de semana gallego tiene costumbre de orilla portuguesa.
        </P>
        <P>
          El año se oye antes de verse. A Guarda abre julio con la Festa da Langosta, lleva la
          Virxe do Carme al puerto hacia el 15 y el 16 y sube con peñas y bandas al Santa Trega en
          la segunda semana de agosto. Oia reúne a las parroquias en la Virxe do Mar, el lunes
          después de Pentecostés, y baja los caballos de la Groba en los curros. O Rosal llena O
          Calvario con su Feira do Viño a mediados de julio. Tomiño enlaza San Campio de Figueiró,
          la Virxe do Alivio y el Lanzo da Cruz que atraviesa el río hacia Cristelo. Tui reserva su
          semana mayor para San Telmo. En muchas romerías suenan treboadas: grupos de bombos,
          tambores y gaitas cuyo estruendo acompaña la marcha y avisa desde lejos. Son días de
          calles ocupadas, aparcamiento difícil y sobremesas largas; también la medida más clara
          de una comarca que todavía se reúne.
        </P>
        <P>
          En el plato están la langosta de A Guarda, la lamprea del Miño en temporada y el vino de
          O Rosal, mezcla de Albariño y Loureira que en su subzona debe sumar al menos un setenta
          por ciento. Aparecen también la rosca de yema guardesa, la rosca tomiñesa y los peixiños
          de améndoa que las Clarisas de Tui venden por el torno. Al otro lado esperan bacalao,
          arroz de marisco y Alvarinho de Monção. Enero conserva lonja, café y mercado; agosto
          añade visitantes sin borrar a los vecinos. Esa continuidad sostiene la comarca fuera
          del folleto.
        </P>
      </section>

      <section>
        <H2>Monte</H2>
        <P>
          El Santa Trega, trescientos cuarenta y un metros, cae sobre la desembocadura como un
          balcón natural: castro de casas circulares, ermita, mirador, el Miño abriéndose al
          océano. Se sube en una hora a pie desde A Guarda o en diez minutos en coche hasta
          arriba; es el sitio al que llevarías a cualquier visita. La Serra da Groba es otra
          escala: meseta de brezo y tojo, garranos sueltos, el océano a un lado y el valle al otro.
          En mayo y junio, los curros de Mougás y Torroña bajan los caballos a un cercado de piedra:
          polvo, gritos, tradición que todavía ocurre.
        </P>
        <P>
          El Monte Aloia, primer parque natural de Galicia, es el paseo del domingo de Tui: pinar,
          mesas, miradores sobre la vega, Valença enfrente. Quien viva en la comarca acabará
          teniendo un monte «suyo» —Santa Trega, Groba o Aloia— del mismo modo que en otros sitios
          se tiene un bar. El monte aquí no es escapada excepcional; es parte de la semana.
        </P>
        <Foto src="/fotos/baixo-mino/a-guarda-castro.jpg" pie="Monte Santa Trega: el balcón de la desembocadura" />
        <Foto
          src="/fotos/baixo-mino/zona-tui-catedral.jpg"
          pie="Tui: la catedral y el casco sobre el Miño, frente a Valença"
        />
      </section>

      <section>
        <H2>Día de lluvia</H2>
        <P>
          De octubre a marzo llueve muchos días al mes —trece a dieciséis, según el tramo—. Un día
          así no se queda uno mirando el cristal si ha entendido la comarca: se cruza a Valença
          (murallas, café, comercio dentro de la fortaleza), a Cerveira, o se baja a Vigo en unos
          cuarenta minutos a los recados que aquí no hay. En casa, la humedad de noviembre se nota
          en las paredes; conviene tocarla con la mano al visitar, no solo mirar el plano.
        </P>
        <P>
          El Folón, con lluvia fina, se vuelve musgo y regueros: casi mejor que con sol seco. Con
          chaparrón cerrado, mejor otro plan —un café en O Calvario, el paseo bajo los soportales
          de Tui, Portugal a un puente—. La lluvia aquí no es defecto del folleto; es el precio del
          verde. Quien la acepte vivirá el valle. Quien la negocie solo en agosto firmará a ciegas.
        </P>
        <Foto src="/fotos/baixo-mino/rosal-folon-vista.jpg" pie="Muíños do Folón: aún más vivos con lluvia fina" />
      </section>

      <section>
        <H2>Calma</H2>
        <P>
          La calma aquí no es silencio absoluto. Tiene caras, y conviene conocerlas antes de
          enamorar del paisaje. En Oia, la carretera de la costa —la PO-552— pasa tan pegada al
          mar que en algunos tramos el motor y el oleaje se mezclan: no es ruido de ciudad, es el
          roce continuo de quien vive junto a una vía de dos carriles. En Tui, la A-55 es un
          regalo si quieres Vigo en veinticinco minutos; también es un zumbido si eliges mal la
          calle del ensanche y la terraza mira hacia la autovía. En la punta de A Guarda, lo que
          entra por la ventana no es tráfico: es la nortada, el viento que limpia la dársena y a
          veces te obliga a cerrar la terraza.
        </P>
        <P>
          Agosto tiene otra música. Area Grande —la cala de arena de A Guarda— se llena, el
          aparcamiento junto al paseo marítimo se queda
          corto y la carretera de costa se atasca entre quien va a la playa y quien vuelve con
          arena en los zapatos. Ese mismo día, O Rosal sigue siendo valle: parras, poca cola, el
          ritmo de siempre. Quien busque agosto quieto no debería mirar solo el mapa de playas;
          debería preguntarse en qué valle quiere despertar.
        </P>
        <P>
          Y luego está la escala —lo más fácil de malentender—. Compacto se siente O Calvario, el
          casco de A Guarda o el de Tui: plaza, calles juntas, se baja andando al bar, se saluda
          sin planearlo. Disperso es otra vida: casas a cientos de metros, finca, parra, el coche
          para el pan. Da igual que el municipio sume seis mil o trece mil habitantes en el
          padrón. Si no hay calle que una, no hay pueblo en el sentido en que muchos lo imaginan.
          Hay paisaje. Y paisaje no es lo mismo.
        </P>
      </section>

      <section>
        <H2>Servicios, hospital, aeropuerto</H2>
        <P>
          No hay ciudad en la comarca. Hay villas y parroquias. A Guarda cubre lo esencial de villa:
          centro de salud con urgencias día y noche, farmacias, supermercados, mercado, lonja,
          instituto, piscina cubierta —una nota alta de vida diaria, sin hospital ni gran
          superficie—. Tui suma tren, Valença enfrente y supermercados grandes: la villa más
          completa. Tomiño se apoya en Goián y en Cerveira a dos minutos. O Rosal resuelve lo
          diario en el pueblo y el resto en A Guarda a diez minutos. Oia vive con consultorio, una
          farmacia y bares; el súper grande queda a un cuarto de hora o veinte minutos.
        </P>
        <P>
          La ciudad de referencia es Vigo: media hora o tres cuartos, según el pueblo. Allí están
          los hospitales, el centro comercial, el aeropuerto. No es la ciudad a cinco minutos del
          campanario; es la ciudad a un trayecto que hay que aceptar o no firmar.
        </P>
        <P>
          El hospital público Álvaro Cunqueiro queda a unos treinta minutos desde Tui, treinta y
          cinco desde Tomiño, cuarenta desde O Rosal y Oia, cuarenta y cinco desde A Guarda. Povisa,
          en privado, en una horquilla parecida. No hay hospital en la comarca. En Portugal, Santa
          Luzia (Viana) queda fuera del sistema español: útil saberlo, no confundirlo con el SNS.
        </P>
        <P>
          Vigo-Peinador acerca Palma en verano —Vueling, pocas frecuencias, junio a septiembre—.
          El resto del año la opción seria es Santiago, a hora y media, con vuelo casi todo el
          año, o Porto por la A28. Quien necesite ir y volver a Baleares con frecuencia debería
          mirar esa logística antes que el color del Atlántico. La fibra llega bien a A Guarda y
          Tui; en O Rosal, Tomiño y Oia es parcial: se comprueba casa a casa, no pueblo a pueblo.
        </P>
      </section>

      <section>
        <H2>Qué cuesta una casa</H2>
        <P>
          Los precios del metro dibujan un gradiente: Tomiño es el más asequible, luego Tui, O
          Rosal, A Guarda; Oia, la más cara, porque aquí se paga el paisaje salvaje más que los
          servicios. Hay obra nueva de verdad en Tui; poca en A Guarda y O Rosal; casi ninguna en
          Oia. Lo habitual es vivienda terminada, reciente o de piedra rehabilitada. Sobre plano
          hay poco y, en general, no hace falta: el mercado ofrece casa ya hecha.
        </P>
        <P>
          Con un presupuesto amplio esta comarca permite pensar en dos viviendas —valle y punta—
          o en una sola bien elegida en Tui si priorizas hospital y ciudad pequeña. Los números
          concretos están abajo; la decisión no es solo el número, es el tipo de vida que compra
          cada pueblo.
        </P>
        <TablaPrecios filas={municipiosBaixoMino} />
        <EnlaceIdealista ambito="zona" zonaId={zona.id} nombre={zona.zona} />
      </section>

      <Encaja
        si={[
          "El paisaje —valle de parras, piedra, monte detrás— y el tiempo para recorrerlo pesan más que tener la ciudad y el hospital a un cuarto de hora. Quien acepte Vigo a unos cuarenta minutos y el hospital público Álvaro Cunqueiro (en Vigo) entre treinta y cuarenta y cinco encontrará en esta comarca un tramo donde el día a día cabe en villa o valle, con Portugal como costumbre semanal: Valença, Cerveira, Caminha a un puente. Un invierno de trece a dieciséis días de lluvia al mes (octubre a marzo) tiene que caber: la terraza se usa la mitad; a cambio, de junio a septiembre el sol se estrecha con Baleares.",
          "El mar a diez minutos desde el valle de O Rosal basta para quien no necesita océano en la puerta —Area Grande, la cala de A Guarda, o O Muíño, la playa del estuario—; o a veinticinco desde Tui, si lo que pesa es el hospital. Quien tenga tiempo libre para el circuito de molinos del Folón (O Rosal), para subir al Monte Santa Trega (castro y mirador sobre la desembocadura), al Monte Aloia (parque natural sobre Tui), para la lonja de A Guarda y la frontera portuguesa sacará de Baixo Miño lo que el folleto no cuenta.",
        ]}
        no={[
          "Hace falta hospital a menos de treinta minutos y ciudad a un cuarto de hora —salvo Tui, y Tui trae el calor de valle en julio—. Quien busque pueblo compacto de plaza, súper y farmacia a pie y mire Oia se equivoca de casilla: ahí hay aldeas colgadas entre sierra y océano, no calle que una.",
          "El verano tiene que ser fresco y se elige Tui o Tomiño: en el fondo del Miño vuelven quince o veinte días por encima de treinta grados. Quien huya del calor debería mirar A Guarda u Oia (punta atlántica) u O Rosal (valle sin ese calor extremo), no la vega de Tomiño ni el ensanche de Tui.",
        ]}
        veredicto="Veredicto de zona: O Rosal es donde el día a día se siente pueblo —valle, plaza de O Calvario, monte detrás, mar a diez minutos—. Tui, solo si el hospital a treinta minutos y la ciudad pequeña pesan más que el mar y el calor. A Guarda funciona como villa de mar y complemento, no siempre como casa única. Tomiño exige aceptar calor de vega; Oia, soledad atlántica. Mejor verlo en noviembre que en agosto: el invierno es lo que se come o se acepta."
      />

      <MunicipiosZonaFin zonaId={zona.id} municipios={municipiosBaixoMino} escalas={ESCALA} />

      <p className="mt-12 max-w-2xl text-xs text-[var(--tinta-suave)]">
        Fotos: Wikimedia Commons. Luis Miguel Bugallo Sánchez (CC BY-SA 4.0 / 3.0).
      </p>
    </article>
  );
}
