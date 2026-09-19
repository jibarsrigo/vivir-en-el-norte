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
          A Coruña concentra unos doscientos cincuenta mil habitantes en una península compacta,
          con la Torre de Hércules —faro romano declarado patrimonio de la humanidad— y un paseo
          marítimo de unos trece kilómetros. Oleiros reparte urbanizaciones y playas a diez minutos
          del centro; Sada aporta villa y puerto deportivo; Bergondo y Miño bajan la densidad hacia
          parroquias y arenales de ría; Ares guarda Redes, aldea marinera de casas de colores;
          Ferrol es ciudad naval de unos sesenta y cuatro mil habitantes.
        </P>
        <P>
          No hay una sierra que cierre el horizonte: el relieve es suave, de doscientos a cuatrocientos
          metros. La referencia diaria es A Coruña para casi todo el arco este; Ferrol cubre Ares y
          el norte. Santiago queda a unos cuarenta y cinco o setenta y cinco minutos según el pueblo.
          Es la zona de urbanismo y logística más fuerte de las rías gallegas, con el cielo más gris.
        </P>
        <Foto
          src="/fotos/golfo-artabro-e-ferrol/zona-hercules.jpg"
          pie="Torre de Hércules: faro romano sobre el Atlántico en A Coruña"
        />
      </section>

      <section>
        <H2>El tiempo comparado con Baleares</H2>
        <P>
          Golfo Ártabro e Ferrol suma unas {zona.solHoras.toLocaleString("es-ES")} horas de sol y{" "}
          {zona.despejados} días despejados al año. Mallorca ronda{" "}
          {mallorca.solHoras.toLocaleString("es-ES")} horas y {mallorca.despejados} jornadas
          claras. La diferencia se concentra en el cielo cubierto y la llovizna: de octubre a marzo
          llueve {zona.lluvia.oct_mar} días al mes y {zona.lluvia.peor} puede alcanzar{" "}
          {zona.lluvia.peor_n}.
        </P>
        <P>
          Caen unos {zona.lluviaMm.toLocaleString("es-ES")} milímetros en {zona.lluviaDias} días:
          menos agua acumulada que en las Rías Baixas, pero repartida en muchas jornadas grises,
          también en verano ({zona.lluvia.verano} días al mes en julio y agosto). Es de los climas
          gallegos más distintos al de Baleares: se gana invierno suave —mínimas alrededor de 8 °C—
          y se pierde sol estable.
        </P>
        <P>
          El verano compensa en temperatura: la media ronda {zona.tempVerano} °C, las máximas
          habituales unos 23 °C y solo uno o dos días al año superan los 30 °C. Frente al calor
          sostenido balear se duerme fresco. El viento es medio en A Coruña, Oleiros y Ares; la
          niebla, media en A Coruña, Bergondo, Ares y Ferrol.
        </P>
        <P>
          En la ría de Betanzos —Gandarío, Sada, Pedrido— el agua llega aproximadamente a 18-20 °C
          en verano, de las franjas más templadas de la tabla. En Riazor, Orzán, Doniños o San Xurxo
          el Atlántico anda entre 16 y 18 °C, con más oleaje. Sigue lejos del Mediterráneo, pero la
          ría permite baños cortos más cómodos que la costa abierta.
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
          Bergondo, Gandarío —arenal largo de ría con agua hacia 18-20 °C— y Pedrido. Miño aporta
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
          monasterio; Ferrol, el castillo de San Felipe y Cabo Prior. No hay montaña de verdad: el
          paisaje es de ría, paseo y costa.
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
          A Coruña ronda 2.600 €/m² y Oleiros, 2.500: la franja cara de la zona. Sada baja a unos
          2.100; Bergondo, a 1.700; Miño, a 1.600; Ares, a 1.500; Ferrol, a 1.200, el metro más
          asequible del arco. En la franja asequible, dos habitaciones se sitúan aproximadamente en
          211.000-220.000 euros en Oleiros y A Coruña, y unos 177.000 en Sada; tres habitaciones
          rondan 246.000 en Sada, 199.000 en Bergondo, 187.000 en Miño, 176.000 en Ares y 140.000
          en Ferrol.
        </P>
        <P>
          La franja media cambia de forma: piso en ensanche o casco de A Coruña, chalé en urbanización
          de Oleiros o Costa Miño, vivienda con jardín en Bergondo, o piso en el barrio de la
          Magdalena en Ferrol. Tres habitaciones en primera línea de Oleiros o A Coruña suben a
          tipologías que quedan fuera de la orilla habitual del mercado medio. Pesan demasiado estado,
          orientación y parcela para convertir una media en promesa.
        </P>
        <P>
          Hay obra nueva en A Coruña, Oleiros y Sada; poca en el resto. La fibra llega bien en las
          ciudades y en Oleiros y Sada; es parcial en Bergondo, Miño y Ares. En costa abierta se
          revisan salitre y viento; en ría, humedad y ocupación de agosto; en Ferrol, revalorización
          y calle concreta.
        </P>
        <TablaPrecios filas={municipiosGolfoArtabroEFerrol} />
        <EnlaceIdealista ambito="zona" zonaId={zona.id} nombre={zona.zona} />
      </section>

      <section>
        <H2>Servicios, hospital, aeropuerto</H2>
        <P>
          A Coruña alcanza 10/10 en servicios: comercio, cultura, universidad y vida diaria completa.
          Ferrol llega a 9/10 sobre el papel, con comercio en retroceso. Oleiros y Sada, a 7/10;
          Bergondo, Miño y Ares, a 4/10 o 5/10 —lo básico; Betanzos y Pontedeume completan a cinco o
          diez minutos—. Servicios significa vida diaria dentro del municipio, no la distancia al
          hospital.
        </P>
        <P>
          El CHUAC —Complejo Hospitalario Universitario de A Coruña, referencia del norte de Galicia—
          queda a unos cinco minutos desde la ciudad, diez desde Oleiros, quince desde Sada y veinte
          desde Bergondo y Miño. Los privados HM Modelo, Quirónsalud y San Rafael cubren 5-25
          minutos. Ferrol y Ares dependen del Arquitecto Marcide (público) y del Juan Cardona
          (privado), a 5-25. Es, junto a Vigo, de las mejores sanidades de la tabla.
        </P>
        <P>
          Alvedro —aeropuerto de A Coruña— queda a unos diez minutos desde la ciudad y Oleiros,
          quince desde Sada y Bergondo, treinta desde Miño y treinta y cinco o cuarenta y cinco desde
          Ferrol y Ares: vuelo a Palma en verano. Santiago-Lavacolla ofrece enlace a Palma casi todo
          el año y queda a unos cuarenta y cinco o setenta y cinco minutos según el municipio. La
          ciudad de referencia para compras grandes es A Coruña; Ferrol cubre el norte.
        </P>
        <Foto
          src="/fotos/golfo-artabro-e-ferrol/zona-doninos.jpg"
          pie="Doniños: playa atlántica y laguna cerca de Ferrol"
        />
      </section>

      <Encaja
        si={[
          "Se quiere urbanización ordenada con playa y A Coruña a diez o quince minutos —Oleiros o Sada—, o Praia Grande y golf en Costa Miño a precio más razonable. El verano es mucho más suave que en Mallorca y la sanidad del CHUAC o de Ferrol está cerca.",
          "Se valora Alvedro para Palma en verano y Santiago-Lavacolla para el resto del año, con hospital de referencia a menos de media hora en casi todo el arco este. A Coruña da ciudad completa junto al mar; Ferrol, precio bajo y sanidad a pie.",
        ]}
        no={[
          `Se necesita el cielo de Baleares: Golfo Ártabro e Ferrol tiene ${zona.lluviaDias} días de lluvia y ${zona.despejados} despejados, frente a ${mallorca.lluviaDias} y ${mallorca.despejados} en Mallorca. El verano sigue trayendo llovizna algunos días; el invierno pide convivir con cielo gris y humedad.`,
          "Se busca montaña detrás, mar templado en costa abierta y tres habitaciones en primera línea de Oleiros o A Coruña a precio medio. El relieve es suave; Riazor y Doniños están fríos; la tipología cara de la orilla urbana queda fuera de la franja habitual.",
        ]}
        veredicto="Veredicto de zona: Oleiros (Mera, Santa Cruz) es la elección si mandan urbanización limpia, playa y A Coruña a diez minutos; Sada equilibra villa, puerto y metro algo más amable; Costa Miño gana si pesan Praia Grande, golf y precio; Bergondo, jardín y calma a quince o veinte minutos; Ares, aldea de ría y Redes a cambio de coche; A Coruña, ciudad completa; Ferrol, solo si mandan precio y hospital a pie. Antes de elegir, probaría un noviembre de llovizna y la fiesta mayor de la calle concreta."
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
