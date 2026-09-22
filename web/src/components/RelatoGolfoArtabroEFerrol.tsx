import Encaja from "@/components/Encaja";
import Foto from "@/components/Foto";
import TablaPrecios from "@/components/TablaPrecios";
import EnlaceIdealista from "@/components/EnlaceIdealista";
import MunicipiosZonaFin from "@/components/MunicipiosZonaFin";
import { mallorca, type Zona } from "@/lib/zonas";
import { municipiosGolfoArtabroEFerrol } from "@/lib/municipios";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{children}</p>;
}

const ESCALA: Record<string, string> = {
  "A Coruña": "Ciudad atlántica compacta",
  Oleiros: "Urbanizaciones y playas de ría",
  Sada: "Villa con puerto de ría",
  Bergondo: "Parroquias residenciales de ría",
  Miño: "Praia Grande y parroquias",
  Ares: "Villa de ría y Redes",
  Ferrol: "Ciudad naval",
};

export default function RelatoGolfoArtabroEFerrol({ zona }: { zona: Zona }) {
  return (
    <article className="mt-8">
      <section>
        <H2>Dónde está</H2>
        <P>
          Golfo Ártabro e Ferrol es el arco de rías que rodea A Coruña: la ría de O Burgo —la lámina
          de agua entre la ciudad y Oleiros—, la ría de Betanzos —con Sada, Bergondo y Miño—, la ría
          de Ares —con Ares y Redes— y Ferrol al norte. Una ría es un valle fluvial inundado por el
          mar; aquí el agua queda más abrigada que en el Atlántico abierto, salvo en la costa de
          Ferrol y en las playas urbanas de Riazor y Orzán.
        </P>
        <P>
          A Coruña concentra alrededor de doscientos cincuenta mil habitantes en una península
          compacta, con la Torre de Hércules —faro romano declarado patrimonio de la humanidad— y un
          paseo marítimo de unos trece kilómetros. Oleiros reparte urbanizaciones y playas a diez
          minutos del centro; Sada aporta villa y puerto deportivo; Bergondo y Miño bajan la densidad
          hacia parroquias y arenales de ría; Ares guarda Redes, aldea marinera de casas de colores;
          Ferrol es ciudad naval de alrededor de sesenta y cinco mil habitantes. Las dos cifras son
          órdenes de magnitud recientes: conviene contrastarlas en el INE o el IGE antes de darlas
          por buenas.
        </P>
        <P>
          El relieve es de altitud baja y media junto a la orilla —lomas y montes de unos cientos de
          metros— y gana altura hacia el interior; no es igual en todo el arco. La referencia diaria
          es A Coruña para casi todo el tramo este; Ferrol cubre Ares y el norte. Santiago queda a
          unos cuarenta y cinco o setenta y cinco minutos según el pueblo y el tráfico. Es de las
          zonas con más peso urbano y logístico de las rías gallegas, y también de las de invierno
          más gris frente a Baleares.
        </P>
        <Foto
          src="/fotos/golfo-artabro-e-ferrol/zona-hercules.jpg"
          pie="Torre de Hércules: faro romano sobre el Atlántico en A Coruña"
        />
      </section>

      <section>
        <H2>El tiempo comparado con Baleares</H2>
        <P>
          El invierno aquí es de cielo gris y llovizna frecuente: menos sol estable que en Mallorca
          ({mallorca.solHoras.toLocaleString("es-ES")} horas y {mallorca.despejados} jornadas
          claras) y más jornadas húmedas de octubre a marzo ({zona.lluvia.oct_mar} días al mes;
          {zona.lluvia.peor} puede alcanzar {zona.lluvia.peor_n}). Las cifras de sol y despejados
          de la tabla de zona salen del observatorio de Alvedro (aeropuerto de A Coruña), no de una
          media homogénea de los siete municipios: entre la orilla abierta de Ferrol y el fondo de
          la ría de Betanzos hay variación local. Sirven de referencia de estación, no de verdad
          única para todo el arco.
        </P>
        <P>
          Caen unos {zona.lluviaMm.toLocaleString("es-ES")} milímetros en {zona.lluviaDias} días
          (lluvia de observatorio de ciudad, distinta de Alvedro): menos agua acumulada que en las
          Rías Baixas, pero repartida en muchas jornadas grises, también en verano (
          {zona.lluvia.verano} días al mes en julio y agosto). Es de los climas gallegos más
          distintos al de Baleares: se gana invierno suave —mínimas alrededor de 8 °C— y se pierde
          sol estable.
        </P>
        <P>
          El verano compensa en temperatura: la media ronda {zona.tempVerano} °C, las máximas
          habituales unos 23 °C y solo uno o dos días al año superan los 30 °C. Frente al calor
          sostenido balear se duerme fresco. El viento es medio en A Coruña, Oleiros y Ares; la
          niebla, media en A Coruña, Bergondo, Ares y Ferrol.
        </P>
        <P>
          En la ría de Betanzos —Gandarío, Sada, Pedrido— el agua suele moverse en verano en un
          rango orientativo de 18-20 °C; en Riazor, Orzán, Doniños o San Xurxo el Atlántico abierto
          se queda habitualmente en torno a 16-18 °C, con más oleaje. Son franjas de temporada, no
          rasgos fijos de cada playa: cambian con el año, la marea y el viento. Sigue lejos del
          Mediterráneo, y en los días buenos la ría permite baños cortos más cómodos que la costa
          abierta.
        </P>
        <p className="mt-4 max-w-2xl font-semibold text-[var(--calor)]">
          Verano suave: máximas habituales alrededor de 23 °C y muy pocas jornadas por encima de
          30 °C.
        </p>
      </section>

      <section>
        <H2>Cómo se vive</H2>
        <P>
          Un martes de noviembre muestra siete escalas. A Coruña resuelve comercio, cultura,
          sanidad y universidad a pie en una ciudad atlántica densa. Oleiros y Sada cubren la semana
          básica —centro de salud, súper, colegio, comercio— sin entrar cada día en la capital.
          Bergondo, Miño y Ares bajan a lo esencial: el coche enlaza compra y ocio con Betanzos,
          Pontedeume, Ferrol o A Coruña. Ferrol mantiene servicios de ciudad, aunque el tejido
          comercial ha retrocedido.
        </P>
        <P>
          El coche no pesa igual en todas partes. En A Coruña la dependencia es baja; en Oleiros y
          Sada el día a día se resuelve en el municipio y la ciudad queda a diez o quince minutos.
          En Bergondo, Miño y Ares conducir forma parte de la jornada. Quien vive aquí trabaja en
          servicios, puerto, industria naval, administración y pequeño comercio: no es una costa
          cerrada fuera de temporada, aunque Ares y Miño bajan el volumen en invierno.
        </P>
        <P>
          Agosto anima Riazor, Santa Cristina, Gandarío y Praia Grande. Las fiestas de María Pita en
          A Coruña, las hogueras de San Juan en la orilla y el veraneo llenan paseos y aparcamientos.
          En Ferrol, la Semana Santa —de interés turístico— corta calles y concentra gente; el
          carácter naval marca el calendario. Cambia la cantidad de gente y el ruido, pero mercado,
          lonja y ciudad siguen abiertos en enero.
        </P>
        <Foto
          src="/fotos/golfo-artabro-e-ferrol/zona-oleiros-mera.jpg"
          pie="Mera, en Oleiros: faro y playa de ría a minutos de A Coruña"
        />
      </section>

      <section>
        <H2>Mar, ría y camino</H2>
        <P>
          En Oleiros el baño de diario es de ría y costa suave: Santa Cristina con paseo, Mera y
          Espiñeiro junto al faro, Bastiagueiro con oleaje ligero. Sada ofrece playa urbana y Cirro;
          Bergondo, Gandarío —arenal largo de ría, con agua que en verano suele moverse hacia
          18-20 °C— y Pedrido. Miño aporta
          Praia Grande, de más de un kilómetro con dunas, y Perbes.
        </P>
        <P>
          A Coruña mira al Atlántico en Riazor y Orzán, y a orillas más recogidas en Oza o As Lapas.
          Ares suma playa urbana, Seselle y Chanteiro frente a la ciudad; Redes es paseo de aldea
          marinera más que de toalla. Ferrol abre Doniños —con laguna—, San Xurxo y, hacia
          Valdoviño, A Frouxeira: playas bravas y frías.
        </P>
        <Foto
          src="/fotos/golfo-artabro-e-ferrol/zona-sada-puerto.jpg"
          pie="Sada: villa y puerto en la ría de Betanzos"
        />
        <P>
          El paseo marítimo de A Coruña y la Torre de Hércules son el gran recorrido urbano. En
          Oleiros, el Monumento Natural de Dexo-Serantes ofrece acantilados y una senda costera de
          unos diez kilómetros. Desde Miño, las Fragas do Eume —bosque atlántico y parque natural
          hacia Pontedeume— quedan a unos quince minutos. Bergondo aporta el pazo de Mariñán y el
          monasterio; Ferrol, el castillo de San Felipe y Cabo Prior. La montaña queda tierra
          adentro: junto a la orilla el paisaje es de ría, paseo y costa, con relieve de poca
          altitud.
        </P>
        <Foto
          src="/fotos/golfo-artabro-e-ferrol/zona-gandario.jpg"
          pie="Gandarío: arenal largo de ría en Bergondo"
        />
      </section>

      <section>
        <H2>Mercados, fiestas y calendario</H2>
        <P>
          A Coruña concentra mercado, lonja de ambiente, restauración y grandes superficies —
          Marineda City, El Corte Inglés—. Las fiestas de María Pita, en torno a agosto, llenan el
          centro con música, actos y mucha gente: quien viva junto al recorrido nota ruido, cortes y
          aparcamiento difícil. San Juan enciende hogueras en la orilla; las noches de junio piden
          probar la calle antes de comprar.
        </P>
        <P>
          Oleiros y Sada encadenan verbenas de verano y veraneo hacia Santa Cristina, Mera y
          Gandarío. Cerca de Bergondo, Betanzos celebra Os Caneiros —fiesta fluvial en el Mandeo—
          con afluencia y tráfico en fechas concretas. Ferrol marca el año con Semana Santa de
          interés turístico y con el calendario de una ciudad naval: procesiones, cortes y un ritmo
          distinto al de la urbanización de Oleiros.
        </P>
        <P>
          Pulpo, marisco de ría, empanada y pescado de lonja son gastronomía de diario, no solo de
          postcard. El calendario corta calles en fechas concretas; el resto del año las villas y la
          ciudad recuperan escala de trabajo. Conviene probar la calle elegida en una fiesta mayor y
          en un martes de noviembre con llovizna.
        </P>
        <Foto
          src="/fotos/golfo-artabro-e-ferrol/zona-redes.jpg"
          pie="Redes, en Ares: aldea marinera de casas de colores"
        />
      </section>

      <section>
        <H2>Qué cuesta una casa</H2>
        <P>
          El mercado dibuja dos polos: A Coruña y Oleiros concentran la franja cara del arco; Ferrol
          y Bergondo abren la orilla más asequible; Sada, Miño y Ares se mueven en tramos
          intermedios. La tipología cambia de forma: piso en ensanche o casco de A Coruña, chalé en
          urbanización de Oleiros —Santa Cruz, Mera, Perillo pesan distinto— o Costa Miño,
          vivienda con jardín en Bergondo, o piso en el barrio de la Magdalena en Ferrol. Tres
          habitaciones en primera línea de Oleiros o A Coruña suben a tipologías que quedan fuera de
          la orilla habitual del mercado medio. La tabla y Idealista mandan; el anuncio concreto
          manda más que cualquier orden de magnitud.
        </P>
        <P>
          Hay obra nueva en A Coruña, Oleiros y Sada; poca en el resto. La fibra llega bien en las
          ciudades y en Oleiros y Sada; en Bergondo, Miño y Ares la cobertura es parcial y conviene
          comprobarla en la dirección concreta antes de comprar. En costa abierta se revisan salitre
          y viento; en ría, humedad y ocupación de agosto; en Ferrol, la calle y el entorno comercial
          concretos.
        </P>
        <TablaPrecios filas={municipiosGolfoArtabroEFerrol} />
        <EnlaceIdealista ambito="zona" zonaId={zona.id} nombre={zona.zona} />
      </section>

      <section>
        <H2>Servicios, hospital, aeropuerto</H2>
        <P>
          A Coruña concentra comercio, cultura, universidad y vida diaria completa: es la escala
          donde se puede prescindir del coche. Ferrol mantiene servicios de ciudad, aunque el tejido
          comercial ha retrocedido. Oleiros y Sada cubren la semana básica —centro de salud, súper,
          colegio, comercio— sin entrar cada día en la capital. Bergondo, Miño y Ares bajan a lo
          esencial; Betanzos y Pontedeume completan a cinco o diez minutos. Servicios significa vida
          diaria dentro del municipio, no la distancia al hospital.
        </P>
        <P>
          El CHUAC —Complejo Hospitalario Universitario de A Coruña, hospital público de referencia
          del norte de Galicia— queda a unos cinco minutos en coche desde el centro de la ciudad,
          diez desde Oleiros, quince desde Sada y veinte desde Bergondo y Miño: son tiempos
          aproximados desde el núcleo de referencia de cada municipio y cambian según el punto
          exacto y el tráfico, así que no valen igual para todas las parroquias. Los privados HM
          Modelo, Quirónsalud y San Rafael se mueven en una horquilla de 5 a 25 minutos. En Ferrol y
          Ares la referencia es el Arquitecto Marcide (público) y el Juan Cardona (privado), también
          en 5-25. Es de las zonas de la tabla con hospital público y privado más cerca.
        </P>
        <P>
          Alvedro —aeropuerto de A Coruña— queda a unos diez minutos desde la ciudad y Oleiros,
          quince desde Sada y Bergondo, treinta desde Miño y treinta y cinco o cuarenta y cinco desde
          Ferrol y Ares: tiempos aproximados desde el núcleo de referencia y según la ruta.
          Santiago-Lavacolla, con más destinos, queda a unos cuarenta y cinco o setenta y cinco
          minutos según el municipio. La conexión con Palma cambia por temporada y por compañía:
          antes de contar con ella conviene comprobar la programación vigente en Aena o en las
          aerolíneas. La ciudad de referencia para compras grandes es A Coruña; Ferrol cubre el
          norte.
        </P>
        <Foto
          src="/fotos/golfo-artabro-e-ferrol/zona-doninos.jpg"
          pie="Doniños: playa atlántica y laguna cerca de Ferrol"
        />
      </section>

      <Encaja
        si={[
          "Se quiere urbanización ordenada con playa y A Coruña a diez o quince minutos —Oleiros (Santa Cruz, Mera, Perillo) o Sada—, o Praia Grande y golf en Costa Miño a precio más razonable. El verano es mucho más suave que en Mallorca y el hospital público de referencia —CHUAC o Arquitecto Marcide— queda cerca.",
          "Se valora tener Alvedro al lado y Santiago-Lavacolla, con más destinos, a menos de hora y cuarto, con hospital de referencia a menos de media hora en casi todo el arco este —comprobando cada temporada la programación real de vuelos a Palma—. A Coruña da ciudad atlántica completa; Ferrol, precio más bajo y hospital a pocos minutos, con Doniños como salida de Atlántico abierto.",
        ]}
        no={[
          `Se necesita el cielo de Baleares: aquí el invierno es de llovizna y cielo gris —unos ${zona.lluviaDias} días de lluvia frente a ${mallorca.lluviaDias} en Mallorca—, y el verano sigue trayendo algunas jornadas húmedas. Las cifras de sol de la tabla son referencia de Alvedro, no media de cada pueblo.`,
          "Se busca montaña detrás, mar templado en costa abierta y tres habitaciones en primera línea de Oleiros o A Coruña a precio medio. El relieve junto a la orilla se queda en altitudes bajas; el agua de Riazor y Doniños es fresca incluso en verano; la tipología cara de la orilla urbana queda fuera de la franja habitual.",
        ]}
        veredicto="Veredicto de zona: Oleiros (Mera, Santa Cruz) encaja si mandan urbanización limpia, playa y A Coruña a diez minutos; Sada, si se quiere villa, puerto y un metro más amable; Costa Miño, si pesan Praia Grande, golf y precio; Bergondo, jardín y calma a quince o veinte minutos; Ares, aldea de ría y Redes a cambio de coche; A Coruña, ciudad completa junto al mar; Ferrol, si mandan precio y hospital a pocos minutos, con Doniños como salida. Antes de elegir, conviene probar un noviembre de llovizna y la fiesta mayor de la calle concreta."
      />

      <MunicipiosZonaFin
        zonaId={zona.id}
        municipios={municipiosGolfoArtabroEFerrol}
        escalas={ESCALA}
      />

      <p className="mt-12 max-w-2xl text-xs text-[var(--tinta-suave)]">
        Fotos: Wikimedia Commons. Consulta la atribución y licencia en cada imagen.
      </p>
    </article>
  );
}
