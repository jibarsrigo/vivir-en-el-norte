import Link from "next/link";
import Encaja from "@/components/Encaja";
import Foto from "@/components/Foto";
import TablaPrecios from "@/components/TablaPrecios";
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
          valle de O Rosal (viñedo, molinos, casas de piedra), las vegas de Tomiño con Goián asomado
          a Portugal, y Tui, la ciudad pequeña que se mira en Valença. Detrás, la Serra da Groba y
          el Monte Aloia; sobre A Guarda, el Santa Trega, balcón de la desembocadura.
        </P>
        <P>
          Esta frontera se fijó en el siglo XII. Durante quinientos años el Miño fue línea de
          guerra: por eso hay fortalezas a los dos lados. Hoy se cruza en coche, en bici o a pie
          por tres puentes y un barco. Portugal a cinco minutos multiplica lo que hay a mano:
          Valença los sábados, Cerveira al otro lado de Goián, Caminha y las playas de Âncora.
        </P>
        <P>
          Un apunte de escala, porque aquí un ayuntamiento de diez o dieciocho mil habitantes no se
          siente como un pueblo mallorquín de mil y pico. Allí el casco es compacto: plaza, súper,
          farmacia, y se va andando al bar. Aquí mucha gente vive en casas con finca, a doscientos
          o cuatrocientos metros. A Guarda y Tui son villas: casco, comercio, paseo. O Rosal tiene
          un núcleo compacto —O Calvario— y alrededor casas entre parras. Tomiño y Oia se viven
          sobre todo en disperso.
        </P>
      </section>

      <section>
        <H2>El tiempo, junto a Mallorca</H2>
        <ul className="mt-3 max-w-2xl space-y-1.5 text-[17px] leading-relaxed">
          <li>
            Despejados: {zona.despejados} días al año. En Mallorca, {mallorca.despejados}.
          </li>
          <li>
            Sol: {zona.solHoras.toLocaleString("es-ES")} h al año (Mallorca,{" "}
            {mallorca.solHoras.toLocaleString("es-ES")}). Se pierden sobre todo de noviembre a
            febrero. De junio a septiembre la diferencia es pequeña: en verano la terraza se usa.
          </li>
          <li>
            Lluvia: {zona.lluviaDias} días; de octubre a marzo, {zona.lluvia.oct_mar} días al mes
            (el peor, {zona.lluvia.peor}, {zona.lluvia.peor_n}). En Mallorca, {mallorca.lluvia.oct_mar}{" "}
            en esos meses. Cuando llueve, llueve de verdad. En invierno la terraza se usa la mitad
            o menos. Las temperaturas de enero son casi las de Mallorca: el mar templa.
          </li>
          <li>
            Verano en la costa: unos 25 °C de máxima en A Guarda y Oia, noches de 15 °C. En
            Mallorca julio ronda 29,6 °C y hay 37 días por encima de 30. En la costa el calor que
            se deja atrás desaparece. Vuelve en el valle: Tui y Tomiño, 15–20 días por encima de
            30 °C, con puntas de 36–38.
          </li>
          <li>
            Viento medio en A Guarda —la punta está expuesta al noroeste— y bajo en el valle.
            Niebla baja en la costa; en Tui y Tomiño, mañanas de niebla de río que levantan a media
            mañana.
          </li>
        </ul>
        <p className="mt-4 max-w-2xl font-semibold text-[var(--calor)]">
          El calor aprieta en julio y agosto en el interior (Tui, Tomiño). En A Guarda y Oia, unos
          cinco días al año por encima de 30 °C.
        </p>
      </section>

      <section>
        <H2>Cómo se vive</H2>
        <P>
          Un martes de noviembre en A Guarda: el puerto trabaja, hay café en el paseo, el viento de
          noroeste se nota. En O Rosal el valle está húmedo y verde, las parras desnudas, la plaza
          de O Calvario con cuatro conocidos. En Oia las aldeas se quedan en lo suyo: un bar, el
          océano, el coche para el súper.
        </P>
        <P>
          Un domingo de agosto: A Guarda se llena en Area Grande y el parking junto al paseo se
          queda corto; la PO-552, dos carriles de costa, va lenta. O Rosal no se satura. Tui tiene
          el goteo del Camino todo el año —cafeterías abiertas en enero— y el valle calienta. No es
          una costa de urbanización cerrada: el modelo es piso en villa o casa de piedra con
          terreno.
        </P>
        <Foto src="/fotos/baixo-mino/a-guarda-costa.jpg" pie="A Guarda" />
      </section>

      <section>
        <H2>Agua y paseo</H2>
        <P>
          El paseo cuenta tanto como nadar. La costa de Oia es para mirar el mar, no para
          bañarse: rocas, oleaje, acantilados bajos. El baño con calma está en la desembocadura o
          cruzando a Portugal. El agua en agosto, 17–19 °C: se aguanta con bañador; no es el agua
          de Mallorca (25–27 °C). Más templada en ría y estuario.
        </P>
        <ul className="mt-3 max-w-2xl list-disc space-y-2 pl-5 text-[17px] leading-relaxed">
          <li>
            Area Grande (A Guarda): cala de arena fina, 1,5 km · 4 min, andando. Playa de diario.
            Agua 17–19 °C.
          </li>
          <li>
            O Muíño (Camposancos): 3 km · 6 min. Estuario, Portugal enfrente, sin olas, más
            templada.
          </li>
          <li>
            Mougás (Oia): 6 km · 8 min. Arena y cantos, oleaje. Se va a mirar. Baño real: Baiona,
            14 km · 18 min.
          </li>
          <li>
            Cesantes (Redondela): ría, sin oleaje, 18–20 °C. Unos 25 min desde Tui, 30 desde Goián.
          </li>
          <li>
            Moledo / Vila Praia de Âncora (Portugal): 40–45 min, o barco A Guarda–Caminha
            (estacional: hay que comprobarlo).
          </li>
          <li>Tui: también Areeiros, playa fluvial. Río, no mar.</li>
        </ul>
        <Foto src="/fotos/baixo-mino/monasterio-oia.jpg" pie="Oia" />
        <P>
          Paseos: Santa Trega; la senda litoral A Guarda–Oia–Baiona (el Atlántico a un lado, la
          Groba al otro; cualquier tramo de 5–6 km es una tarde); los molinos del Folón y del Picón
          en O Rosal; la Serra da Groba y sus caballos; el Monte Aloia; el paseo fluvial de Goián y
          de Tui; la Ecopista Valença–Monção.
        </P>
      </section>

      <section>
        <H2>Mesa y gente</H2>
        <P>
          A Guarda tiene mercado municipal diario y mercadillo semanal; Tui, mercado de abastos y
          mercadillo los jueves. El sábado grande es Cerveira, a dos minutos de Goián: fruta, ropa,
          comida; medio Baixo Miño va. En Valença, las tiendas de la fortaleza todos los días.
        </P>
        <P>
          En la mesa: langosta y bogavante de A Guarda, pulpo, almejas y berberechos del Miño,
          lamprea en primavera; vino de O Rosal, más fresco que el del Salnés. En Portugal,
          bacalao, arroz de marisco, el Alvarinho de Monção. Comer bien cuesta menos que en
          Mallorca; al otro lado del puente, todavía menos. En enero hay lonja, café y mercado. En
          agosto hay más gente, no un vaciado de pueblo.
        </P>
      </section>

      <section>
        <H2>Monte</H2>
        <P>
          El Santa Trega (341 m) cae sobre la desembocadura: castro de casas circulares, ermita,
          mirador. Se sube en una hora a pie desde A Guarda o en diez minutos en coche. La Groba es
          meseta de brezo y caballos; el Aloia, pinar y miradores sobre Tui y Valença, el paseo del
          domingo de Tui. En mayo y junio, los curros de Mougás y Torroña.
        </P>
        <Foto src="/fotos/baixo-mino/santa-trega.jpg" pie="Monte Santa Trega" />
      </section>

      <section>
        <H2>Día de lluvia</H2>
        <P>
          De octubre a marzo llueve 13–16 días al mes. Un día así no se queda uno mirando el
          cristal: se cruza a Valença (murallas, café, comercio), a Cerveira, o se baja a Vigo (40
          minutos) a recados que aquí no hay. En casa, la humedad de noviembre se nota en las
          paredes: conviene comprobarlo al visitar. El Folón, con lluvia fina, es musgo y
          regueros; con chaparrón, mejor otro plan.
        </P>
        <Foto src="/fotos/baixo-mino/molinos-folon.jpg" pie="Muíños do Folón" />
      </section>

      <section>
        <H2>Calma</H2>
        <P>
          Ruido de verdad: la PO-552 pegada a la costa en Oia, la A-55 si el piso en Tui está mal
          elegido, la nortada en la punta de A Guarda. Agosto llena Area Grande y atasca la
          carretera de costa; O Rosal sigue siendo valle. Compacto se siente O Calvario y el casco
          de A Guarda o Tui: plaza, calles juntas, se va andando al bar. Disperso —casas a
          cientos de metros, finca, parra— no es pueblo aunque el municipio sume seis mil o trece
          mil habitantes.
        </P>
      </section>

      <section>
        <H2>Servicios, hospital, aeropuerto</H2>
        <P>
          No hay ciudad en la comarca. A Guarda, 6/10: PAC con urgencias 24 h, farmacias,
          supermercados, mercado, lonja, instituto, piscina cubierta. Tui, 7/10: lo de una villa
          completa más tren y Valença enfrente. Tomiño, 5/10. O Rosal, 4/10: lo diario en el
          pueblo, el resto en A Guarda a 10 min. Oia, 3/10: consultorio, una farmacia, bares;
          súper grande a 15–20 min.
        </P>
        <P>
          Ciudad de referencia: Vigo, 30–40 min. Hospitales, centro comercial, aeropuerto. No es la
          ciudad a cinco minutos.
        </P>
        <P>
          Hospital Álvaro Cunqueiro: 30 min desde Tui, 35 desde Tomiño, 40 desde O Rosal y Oia, 45
          desde A Guarda. Povisa, 30–50 min. No hay hospital en la comarca. En Portugal, Santa
          Luzia (Viana) queda fuera del SNS.
        </P>
        <P>
          Vigo-Peinador: 25 min desde Tui, 50 desde A Guarda. Palma solo en verano (Vueling, unas
          cuatro frecuencias por semana, junio–septiembre). El resto del año, Santiago a 90–105 min
          (casi todo el año) o Porto a 90–100. La mejor opción Palma es la conexión anual, luego la
          más cercana: Santiago.
        </P>
        <P>Fibra: sí en A Guarda y Tui; parcial en O Rosal, Tomiño y Oia —comprobar casa a casa.</P>
      </section>

      <section>
        <H2>Qué cuesta una casa</H2>
        <P>
          Los €/m² de la zona: Tomiño 1.100, Tui 1.250, O Rosal 1.350, A Guarda 1.450, Oia 1.600.
          Obra nueva: sí en Tui; poca en A Guarda y O Rosal; no en Oia. Vivienda terminada, reciente
          o nueva. Sobre plano, solo con licencia, aval de las cantidades y promotor con obras
          ya hechas; aquí hay poco y no hace falta.
        </P>
        <TablaPrecios filas={municipiosBaixoMino} />
      </section>

      <Encaja
        si={[
          "El paisaje —valle, parra, piedra, monte— pesa más que tener la ciudad y el hospital a un cuarto de hora.",
          "Se acepta Vigo a unos 40 minutos y el hospital a 30–45.",
          "Un invierno de 13–16 días de lluvia al mes (octubre a marzo) cabe en la vida: la terraza se usa la mitad.",
          "El mar a diez minutos desde el valle basta; o a 25, si lo que pesa es el hospital.",
        ]}
        no={[
          "Hace falta hospital a menos de 30 minutos y ciudad a un cuarto de hora —salvo Tui, y Tui trae el calor de valle.",
          "Se busca un pueblo compacto de plaza, súper y farmacia a pie, y se mira Oia: ahí no lo hay.",
          "El verano tiene que ser fresco y se elige Tui o Tomiño: en el fondo del Miño vuelven 15–20 días por encima de 30 °C.",
        ]}
        veredicto="O Rosal es donde el día a día se siente pueblo: valle, plaza, monte detrás, mar a diez minutos. Tui, solo si el hospital a 30 y la ciudad pequeña pesan más que el mar y el calor. A Guarda funciona como villa de complemento, no como casa única. Tomiño y Oia no. Mejor verlo en noviembre que en agosto: el invierno es lo que se come o se acepta."
      />

      <section>
        <H2>Municipios</H2>
        <P>Cada uno en su página. La escala —villa, pueblo compacto, casas dispersas— importa tanto como el sol.</P>
        <ul className="mt-4 divide-y divide-[var(--linea)] overflow-hidden rounded-xl border border-[var(--linea)] bg-white">
          {municipiosBaixoMino.map((m) => (
            <li key={m.slug}>
              <Link
                href={`/zona/${zona.id}/${m.slug}/`}
                className="flex min-h-[4.5rem] touch-manipulation flex-col gap-1 px-4 py-4 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <span className="font-[family-name:var(--font-serif)] text-xl text-[var(--acento)]">
                  {m.municipio}
                </span>
                <span className="text-sm text-[var(--tinta-suave)]">{ESCALA[m.municipio]}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-12 max-w-2xl text-xs text-[var(--tinta-suave)]">
        Fotos: Wikimedia Commons. Luis Miguel Bugallo Sánchez (CC BY-SA 4.0 / 3.0).
      </p>
    </article>
  );
}
