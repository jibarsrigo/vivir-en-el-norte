import Encaja from "@/components/Encaja";
import Foto from "@/components/Foto";
import TablaPrecios from "@/components/TablaPrecios";
import EnlaceIdealista from "@/components/EnlaceIdealista";
import MunicipiosZonaFin from "@/components/MunicipiosZonaFin";
import { mallorca, type Zona } from "@/lib/zonas";
import { municipiosCantabriaOriental } from "@/lib/municipios";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{children}</p>;
}

const ESCALA: Record<string, string> = {
  "Ribamontán al Mar": "Casas bajas y surf",
  Noja: "Veraneo en bloques",
  Santoña: "Villa marinera y monte",
  Laredo: "Playa larga y hospital",
  "Castro-Urdiales": "Ciudad hacia Bilbao",
};

export default function RelatoCantabriaOriental({ zona }: { zona: Zona }) {
  return (
    <article className="mt-8">
      <section>
        <H2>Dónde está</H2>
        <P>
          Cantabria Oriental cubre la costa de Trasmiera hasta Bizkaia: playas largas, marismas,
          el Monte Buciero y, al este, la villa medieval convertida en ciudad hacia Bilbao. No es
          una sola escala: hay casas bajas y surf en Ribamontán al Mar, bloques de veraneo en
          Noja, villa marinera de trabajo en Santoña, playa inmensa con hospital en Laredo y
          ciudad completa en Castro-Urdiales.
        </P>
        <P>
          Ribamontán al Mar reúne Somo, Loredo, Langre —acantilados; naturista—, Galizano, Suesa
          y Carriazo: chalés dispersos, unos siete kilómetros de playa, reserva de surf y lancha
          a Santander en unos treinta minutos. Noja suma unos dos mil setecientos habitantes en
          invierno y ochenta mil a cien mil en agosto, en bloques de apartamentos frente a Ris y
          Trengandín. Santoña es villa marinera de anchoas, Monte Buciero y Marismas de Santoña,
          Victoria y Joyel. Laredo aporta La Salvé —unos cinco kilómetros—, casco medieval y
          torres de los sesenta y setenta. Castro-Urdiales —unos treinta y cuatro mil
          habitantes— es villa medieval convertida en ciudad dormitorio de Bilbao, a unos
          treinta y cinco minutos.
        </P>
        <P>
          Es la zona con el sol más bajo de la tabla y la más conectada con Bilbao —aeropuerto con
          Palma todo el año; hospital de Cruces cerca en distancia, aunque la adscripción sanitaria
          ordinaria sigue siendo cantábrica—. Santander queda a veinte o treinta minutos desde
          Ribamontán, Noja y Santoña; Bilbao, a treinta y cinco o cuarenta y cinco desde Castro y
          Laredo.
        </P>
        <Foto
          src="/fotos/cantabria-oriental/zona-somo.jpg"
          pie="Somo y la costa de Ribamontán al Mar"
        />
      </section>

      <section>
        <H2>El tiempo comparado con Baleares</H2>
        <P>
          Cantabria Oriental suma unas {zona.solHoras.toLocaleString("es-ES")} horas de sol y{" "}
          {zona.despejados} días despejados al año —en la franja de 1.650 a 1.700 horas y unos 40
          despejados; en Castro, el mínimo de sol de toda la tabla—. Mallorca ronda{" "}
          {mallorca.solHoras.toLocaleString("es-ES")} horas y {mallorca.despejados} jornadas
          claras. La diferencia se concentra en el cielo cubierto: de octubre a marzo llueve{" "}
          {zona.lluvia.oct_mar} días al mes y {zona.lluvia.peor} puede alcanzar{" "}
          {zona.lluvia.peor_n}.
        </P>
        <P>
          Caen unos {zona.lluviaMm.toLocaleString("es-ES")} milímetros en {zona.lluviaDias} días —
          en la franja de 1.150 a 1.250 mm y 150 a 155 días—, con unos {zona.cubiertos} cubiertos.
          También en verano llueve {zona.lluvia.verano} días al mes. El viento es medio en
          Ribamontán, Noja y Santoña; bajo en Laredo y Castro. La niebla es baja.
        </P>
        <P>
          El verano es fresco: la media ronda {zona.tempVerano} °C, las máximas habituales unos
          24 °C y apenas dos a seis días superan los 30 °C. Frente al calor sostenido balear se
          duerme fresco —y se acepta el cielo más opuesto a Mallorca de toda la tabla—.
        </P>
        <P>
          El agua anda entre 19 y 21 °C en agosto. Somo, Loredo, Langre, Galizano, Ris, Trengandín,
          Berria, San Martín, La Salvé, Brazomar, Ostende, Oriñón e Islares invitan al paseo y al
          baño cuando el mar lo permite; las playas son largas y abiertas. Para bañarse con más
          calma, Laredo y la bahía de Santoña.
        </P>
        <p className="mt-4 max-w-2xl font-semibold text-[var(--calor)]">
          Verano fresco: media alrededor de 20 °C y apenas dos a seis días por encima de 30 °C.
        </p>
      </section>

      <section>
        <H2>Cómo se vive</H2>
        <P>
          Un martes de noviembre muestra escalas muy distintas. Castro es ciudad completa: comercio,
          farmacias, metro a Bilbao en la práctica y hospital comarcal a unos veinticinco minutos.
          Laredo cubre villa con todo y hospital comarcal. Santoña mantiene lo básico de villa de
          trabajo. Ribamontán reparte lo esencial entre parroquias y mira a Santander a veinte o
          veinticinco minutos. Noja está dimensionada para el verano: de octubre a mayo cierra
          medio comercio y queda casi vacía.
        </P>
        <P>
          Quien vive aquí trabaja en Santander, en Bilbao, en la conserva y la pesca de Santoña —
          incluida la prisión de El Dueso— o en el ritmo de veraneo de Burgos, Bilbao y Madrid.
          Ribamontán es rural-residencial y surfero, de casas bajas y chalés. Noja y Laredo son
          pueblos de veraneo masivo, muy tranquilos de octubre a mayo. Santoña mantiene villa de
          trabajo todo el año. Castro es ciudad de trabajadores de Bilbao.
        </P>
        <P>
          Las patronales locales y el verano en la orilla cortan calles y llenan cascos unas
          semanas: conviene probar esas fechas, no solo un martes gris.
        </P>
        <Foto
          src="/fotos/cantabria-oriental/zona-noja.jpg"
          pie="Noja: bloques y playa de veraneo"
        />
      </section>

      <section>
        <H2>Mar, marisma y camino</H2>
        <P>
          En Ribamontán, Somo —surf, paseo, lancha a Santander—, Loredo, Langre y Galizano cubren
          orilla abierta y acantilado. Noja aporta Ris y Trengandín —largas, con islotes— y las
          marismas de Victoria y Joyel. Santoña une Berria —larga, dunas—, San Martín, el Monte
          Buciero —senda al faro del Caballo, setecientos sesenta y tres escalones— y el Parque
          Natural de las Marismas —observatorio de aves, pasarelas—; en verano hay lancha a
          Laredo.
        </P>
        <P>
          Laredo suma La Salvé —unos cinco kilómetros—, la Puebla Vieja, el Túnel de la Atalaya,
          el puerto deportivo y el paseo. Castro aporta Brazomar y Ostende, Oriñón e Islares a
          unos diez minutos, y la senda costera de Cerdigo a Islares y Sonabia.
        </P>
        <Foto
          src="/fotos/cantabria-oriental/zona-santona.jpg"
          pie="Santoña: villa marinera y bahía"
        />
        <P>
          El Real Golf de Pedreña queda junto a Ribamontán; Cabárceno, a unos veinticinco minutos.
          Montaña: el Buciero es el monte de verdad detrás de Santoña; los Montes de Ordunte y
          Cerredo —Castro— y la Sierra de Hornijo quedan cerca; los Picos, a una hora y media. Es
          orilla de playa larga y marisma más que de sierra pegada a casa.
        </P>
        <Foto
          src="/fotos/cantabria-oriental/zona-laredo.jpg"
          pie="Laredo: La Salvé y el frente de playa"
        />
      </section>

      <section>
        <H2>Mercados, fiestas y calendario</H2>
        <P>
          Santoña y Laredo resuelven mercado, comercio y mesas abiertas con ritmo de villa todo
          el año; Castro, como ciudad. Ribamontán reparte lo básico entre parroquias y mira a
          Santander. Noja vive del verano: en temporada alta los bloques se llenan; de octubre a
          mayo el comercio se estrecha y la calle queda quieta.
        </P>
        <P>
          Las patronales de cada villa y el veraneo en Noja, Laredo y la orilla de Somo marcan el
          impacto al vivir: ruido, afluencia y aparcamiento justo semanas enteras. Las anchoas de
          Santoña, el pescado de lonja y la orilla de marisma y bahía son gastronomía de la costa.
        </P>
        <P>
          Conviene probar la calle elegida en fiestas, en un agosto de Noja o Laredo y en un
          martes de cielo cubierto —el contraste entre temporada y noviembre explica mejor la zona
          que cualquier foto del Buciero—.
        </P>
        <Foto
          src="/fotos/cantabria-oriental/zona-castro.jpg"
          pie="Castro-Urdiales: villa medieval hacia Bilbao"
        />
      </section>

      <section>
        <H2>Qué cuesta una casa</H2>
        <P>
          Cantabria Oriental cubre franjas distintas. Santoña suele situarse en el tramo más
          contenido; Laredo, en media; Ribamontán, Noja y Castro, en orillas más altas —sobre todo
          primera línea de playa o chalés de surf—. Tres habitaciones en primera línea de Castro,
          Noja o Ribamontán suelen quedar fuera de la franja asequible habitual. Los números
          concretos están en la tabla; tipología y reforma pesan más que una cifra única.
        </P>
        <P>
          La franja media cambia de forma: chalé o casa baja en Ribamontán, piso en bloque de
          Noja o Laredo, vivienda de villa en Santoña, o piso hacia Brazomar o el casco de Castro.
          Obra nueva hay en Castro; poca en el resto. La fibra llega en todos menos Ribamontán —
          parcial—.
        </P>
        <P>
          En costa abierta se revisan salitre y viento; en marisma, humedad; en agosto, la
          ocupación real de la calle —sobre todo en Noja y en el frente de La Salvé—.
        </P>
        <TablaPrecios filas={municipiosCantabriaOriental} />
        <EnlaceIdealista ambito="zona" zonaId={zona.id} nombre={zona.zona} />
      </section>

      <section>
        <H2>Servicios, hospital, aeropuerto</H2>
        <P>
          Castro y Laredo cubren la vida diaria de ciudad o villa completa. Santoña resuelve lo
          básico de villa de trabajo. Ribamontán reparte tiendas y farmacia entre parroquias;
          Noja, de octubre a mayo, deja medio comercio cerrado. Servicios significa vida diaria
          dentro del municipio —tiendas, farmacia, centro de salud, súper—, no la distancia al
          hospital. Santander es la ciudad de referencia a unos veinte o treinta minutos desde
          Ribamontán, Noja y Santoña; Bilbao, a treinta y cinco o cuarenta y cinco desde Castro y
          Laredo.
        </P>
        <P>
          El Hospital de Laredo —público, comarcal— queda a unos cinco minutos desde Laredo, diez
          desde Santoña, veinte desde Noja y veinticinco desde Castro. Valdecilla anda alrededor
          de quince o veinte desde Ribamontán, y cuarenta o cuarenta y cinco desde Laredo y
          Castro. Cruces —Barakaldo— queda a unos treinta y cinco o cuarenta desde Castro: útil
          por proximidad si se vive hacia Bizkaia, pero no es el hospital de adscripción cantábrica
          por defecto. Privados: Santa Clotilde —Santander— a unos quince desde Ribamontán y
          treinta y cinco o cuarenta y cinco desde el resto; en Bilbao —Quirónsalud, IMQ— a unos
          cuarenta desde Castro.
        </P>
        <P>
          El aeropuerto de Santander —con Palma casi todo el año— queda a unos quince minutos
          desde Ribamontán, veinticinco desde Noja, treinta desde Santoña y treinta y cinco desde
          Laredo. Bilbao —con Palma todo el año— anda alrededor de treinta y cinco o cuarenta
          desde Castro y cincuenta desde Laredo. Desde Castro, el vuelo a Palma todo el año queda
          a menos de cuarenta minutos de coche.
        </P>
        <Foto
          src="/fotos/cantabria-oriental/zona-buciero.jpg"
          pie="Monte Buciero sobre Santoña"
        />
      </section>

      <Encaja
        si={[
          "Pesan la conexión con Bilbao —Palma todo el año a unos treinta y cinco o cuarenta minutos desde Castro— o casas bajas y calma en Ribamontán —Somo, Loredo, Langre—, aceptando el sol más bajo de la tabla (~1.650–1.700 horas y unos 40 despejados).",
          "Se valora villa de trabajo con monte y marismas en Santoña —tramo más contenido que sus vecinas—, o playa enorme con hospital a pie en Laredo, sin pedir el cielo de Baleares.",
        ]}
        no={[
          `Se necesita el cielo de Baleares: Cantabria Oriental tiene ${zona.lluviaDias} días de lluvia, ${zona.despejados} despejados y ${zona.cubiertos} cubiertos, frente a ${mallorca.lluviaDias} y ${mallorca.despejados} en Mallorca. Aquí el sol es el mínimo de la costa norte.`,
          "Se buscan tres habitaciones en primera línea de Castro, Noja o Ribamontán dentro de la franja asequible habitual, vida de pueblo en Noja de octubre a mayo, casas bajas en Laredo y Noja, o montaña cerca salvo el Buciero.",
        ]}
        veredicto="Veredicto de zona: Cantabria Oriental destaca por Bilbao y por el vuelo a Palma todo el año desde Castro, no por sol. Si el aeropuerto manda, Castro o Ribamontán —Loredo, Langre—; Santoña, villa de trabajo con Buciero y precio más contenido; Laredo, Salvé y hospital a cinco minutos a cambio del urbanismo de torres; Noja, segunda residencia, no para vivir todo el año. Con el sol como prioridad primera, esta zona no. Antes de elegir, probar un noviembre cubierto y un agosto en Noja, Laredo o Somo."
      />

      <MunicipiosZonaFin
        zonaId={zona.id}
        municipios={municipiosCantabriaOriental}
        escalas={ESCALA}
      />

      <p className="mt-12 max-w-2xl text-xs text-[var(--tinta-suave)]">
        Fotos: Wikimedia Commons. Consulta la atribución y licencia en cada imagen.
      </p>
    </article>
  );
}
