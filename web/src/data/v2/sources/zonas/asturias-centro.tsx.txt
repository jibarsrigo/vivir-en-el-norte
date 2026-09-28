import Encaja from "@/components/Encaja";
import Foto from "@/components/Foto";
import TablaPrecios from "@/components/TablaPrecios";
import EnlaceIdealista from "@/components/EnlaceIdealista";
import MunicipiosZonaFin from "@/components/MunicipiosZonaFin";
import { mallorca, type Zona } from "@/lib/zonas";
import { municipiosAsturiasCentro } from "@/lib/municipios";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{children}</p>;
}

const ESCALA: Record<string, string> = {
  Cudillero: "Pueblo colgado sobre el puerto",
  "Muros de Nalón": "Estuario y miradores",
  "Soto del Barco": "Estuario del Nalón",
  "Salinas (Castrillón)": "Villa-playa residencial",
  "Luanco (Gozón)": "Villa marinera del cabo Peñas",
  "Candás (Carreño)": "Villa marinera junto a Gijón",
  Gijón: "Ciudad de mar",
};

export default function RelatoAsturiasCentro({ zona }: { zona: Zona }) {
  return (
    <article className="mt-8">
      <section>
        <H2>Dónde está</H2>
        <P>
          Asturias Centro es la costa del área metropolitana asturiana: Gijón —unos doscientos
          setenta mil habitantes—, Avilés —setenta y siete mil— y Oviedo —doscientos veinte mil,
          con el HUCA— quedan a diez o treinta minutos de cualquier punto. El aeropuerto de
          Asturias, en Santiago del Monte (Castrillón), está a unos diez minutos de Salinas.
        </P>
        <P>
          Cudillero es el pueblo colgado de foto turística sobre el puerto. Muros de Nalón y Soto del
          Barco miran el estuario tranquilo del Nalón —valle fluvial inundado por el mar—.
          Salinas, en el concejo de Castrillón, es la villa-playa residencial de chalés y casas
          bajas junto a Avilés. Luanco (Gozón) y Candás (Carreño) son villas marineras del Cabo
          Peñas. Gijón es la ciudad de mar de Asturias.
        </P>
        <P>
          Es zona de logística corta en el Cantábrico occidental —aeropuerto, tres ciudades,
          hospitales públicos en Avilés y Gijón y el HUCA en Oviedo—. Dos matices pesan: el cielo
          cantábrico y la industria pesada —siderurgia de Avilés y, hacia Candás y el oeste de
          Gijón, la central y cementera de Aboño— que se nota en el aire según el viento.
        </P>
        <Foto
          src="/fotos/asturias-centro/zona-cudillero.jpg"
          pie="Cudillero: pueblo colgado sobre el puerto"
        />
      </section>

      <section>
        <H2>El tiempo comparado con Baleares</H2>
        <P>
          Asturias Centro suma unas {zona.solHoras.toLocaleString("es-ES")} horas de sol y{" "}
          {zona.despejados} días despejados al año. Mallorca ronda{" "}
          {mallorca.solHoras.toLocaleString("es-ES")} horas y {mallorca.despejados} jornadas
          claras. La diferencia se concentra en el cielo cubierto: de octubre a marzo llueve{" "}
          {zona.lluvia.oct_mar} días al mes y {zona.lluvia.peor} puede alcanzar{" "}
          {zona.lluvia.peor_n}.
        </P>
        <P>
          Caen unos {zona.lluviaMm.toLocaleString("es-ES")} milímetros en {zona.lluviaDias} días,
          con unos {zona.cubiertos} cubiertos. También en verano llueve {zona.lluvia.verano} días
          al mes. La niebla pesa más hacia Cudillero, Muros y Soto; menos hacia Salinas, Luanco,
          Candás y Gijón. El viento es medio en la costa de Peñas.
        </P>
        <P>
          El verano es fresco: la media ronda {zona.tempVerano} °C. Frente al calor sostenido balear
          se duerme fresco; el ábrego puede traer puntas cálidas unos días al año.
        </P>
        <P>
          Aguilar y Concha de Artedo, El Silencio, Los Quebrantos, Salinas–El Espartal, Xagó, La
          Ribera, Palmera o San Lorenzo invitan al paseo y al baño cuando el mar lo permite.
        </P>
        <p className="mt-4 max-w-2xl font-semibold text-[var(--calor)]">
          Verano fresco: media alrededor de {zona.tempVerano} °C frente al calor sostenido de
          Mallorca.
        </p>
      </section>

      <section>
        <H2>Cómo se vive</H2>
        <P>
          Un martes de noviembre muestra escalas muy distintas. Gijón resuelve todo a pie. Salinas
          es villa con paseo y comercio, Avilés a diez minutos. Candás y Luanco cubren lo básico
          con Gijón a veinte o veinticinco minutos. Cudillero es turístico y de cuestas; Soto y
          Muros se apoyan en Avilés a unos quince minutos.
        </P>
        <P>
          Quien vive aquí trabaja en la ciudad, en servicios de villa, en veraneo ovetense y
          madrileño o en el ritmo de estuario. Agosto anima Cudillero, Salinas, Luanco y el
          paseo de San Lorenzo con toallas, tráfico y aparcamiento justo. En invierno las villas
          recuperan ritmo local; el estuario de Muros y Soto se nota más vacío si se depende solo
          del municipio.
        </P>
        <P>
          Las fiestas patronales y el verano en la orilla cortan calles, suben el ruido y llenan
          el casco unos días: conviene probar esas fechas, no solo un martes gris. En Cudillero
          el turismo de día pesa casi todo el año en el pueblo colgado; El Pito, arriba y llano,
          cambia la ecuación.
        </P>
        <Foto
          src="/fotos/asturias-centro/zona-salinas.jpg"
          pie="Salinas: villa-playa residencial junto a Avilés"
        />
      </section>

      <section>
        <H2>Mar, río y camino</H2>
        <P>
          En Cudillero el pueblo colgado mira al puerto; las playas de diario —Aguilar y Concha de
          Artedo— quedan a unos cinco minutos en coche, y la playa del Silencio, en Castañeras, a
          unos quince; el Cabo Vidio —faro y senda— cierra la costa abierta. Muros aporta la Ruta
          de los Miradores —siete miradores sobre la desembocadura del Nalón— y la Quinta de Selgas
          en El Pito. Soto del Barco ofrece San Juan de la Arena, Los Quebrantos y el castillo de
          San Martín en el estuario.
        </P>
        <P>
          Salinas suma tres kilómetros de playa con El Espartal y dunas, paseo y el Museo de
          Anclas en la Peñona; Bahínas, Arnao y Santa María del Mar amplían Castrillón. Luanco
          tiene La Ribera y Aramar en la villa, Xagó —dunas y surf— a diez minutos y el Cabo
          Peñas —faro, acantilados y senda— al lado. Candás aporta Palmera y Carranques; Xivares
          queda hacia el oeste de Gijón.
        </P>
        <Foto
          src="/fotos/asturias-centro/zona-luanco.jpg"
          pie="Luanco: villa marinera del Cabo Peñas"
        />
        <P>
          En Gijón, San Lorenzo —kilómetro y medio urbano— y Poniente son la orilla de diario; la
          Senda del Cervigón y el Cerro de Santa Catalina, el Jardín Botánico Atlántico y el
          Parque de Isabel la Católica completan el paseo. Tierra adentro, la sierra del Aramo y
          el Sueve quedan a cuarenta y cinco o sesenta minutos; los Picos, a hora y media.
        </P>
        <Foto
          src="/fotos/asturias-centro/zona-gijon.jpg"
          pie="Gijón: ciudad de mar y paseo de San Lorenzo"
        />
      </section>

      <section>
        <H2>Mercados, fiestas y calendario</H2>
        <P>
          Gijón concentra mercado, comercio, cultura y mesas abiertas todo el año. Salinas
          resuelve la semana en villa y se apoya en Avilés —casco histórico, Centro Niemeyer,
          comercio—. Luanco y Candás mantienen vida de villa marinera; Cudillero vive del
          visitante de día; Muros y Soto, del estuario y de Avilés cercano.
        </P>
        <P>
          Las patronales locales y el verano en playa y puerto marcan el impacto al vivir:
          ruido, afluencia y aparcamiento justo unos días o semanas. Cudillero se elige por la
          foto típica del pueblo colgado; Salinas, por el paseo residencial; Luanco y Candás, por
          villa marinera entre Avilés y Gijón.
        </P>
        <P>
          Pescado de lonja, sidra y cocina asturiana de diario son gastronomía de la costa.
          Conviene probar la calle elegida en fiestas locales, en agosto junto a la orilla y en
          un martes de cielo cubierto —y, si se mira cerca de Avilés o Aboño, un día con el
          viento que trae el aire de la industria—.
        </P>
        <Foto
          src="/fotos/asturias-centro/zona-penas.jpg"
          pie="Cabo Peñas: faro y acantilados en Gozón"
        />
      </section>

      <section>
        <H2>Qué cuesta una casa</H2>
        <P>
          Asturias Centro cubre franjas muy distintas. El estuario —Muros y Soto— suele leerse más
          contenido; Candás y Cudillero, de villa; Salinas y Luanco, ya más demandados; Gijón, de
          ciudad de mar. En Muros la muestra publicada puede ser escasa: no fijamos cifra aquí. No
          hay media de zona útil; la tabla e Idealista del mes mandan.
        </P>
        <P>
          La franja media cambia de forma: chalé o casa baja en Salinas, piso en casco de Luanco
          o Candás, vivienda hacia el estuario en Soto, o piso de ciudad en Gijón. Tipologías de
          primera línea con vistas al puerto o al paseo encarecen; el estado de la reforma y la
          humedad cantábrica pesan más que una cifra única.
        </P>
        <P>
          Hay obra nueva en Gijón; poca en Salinas, Luanco y Candás; ninguna en Cudillero, Muros
          y Soto. La fibra llega bien en casi todos; es parcial en Muros y Soto. En costa abierta
          se revisan salitre y viento; en estuario, humedad; cerca de Avilés y Aboño, el aire
          según el viento.
        </P>
        <TablaPrecios filas={municipiosAsturiasCentro} />
        <EnlaceIdealista ambito="zona" zonaId={zona.id} nombre={zona.zona} />
      </section>

      <section>
        <H2>Servicios, hospital, aeropuerto</H2>
        <P>
          Gijón resuelve la vida diaria completa. Salinas cubre villa con paseo; Candás y Luanco,
          lo básico de villa marinera; Cudillero y Soto, lo esencial; Muros, aún menos y se apoya
          en Avilés. Servicios significa vida diaria dentro del municipio —tiendas, farmacia,
          centro de salud, súper—, no la distancia al hospital. Avilés cubre desde Salinas, Soto
          y Muros; Gijón, desde Luanco y Candás; Oviedo queda a treinta o cuarenta y cinco
          minutos desde todos.
        </P>
        <P>
          San Agustín (Avilés, público) queda a unos diez minutos desde Salinas, veinte desde
          Luanco, Muros y Soto, y veinticinco desde Cudillero. Cabueñes y el Hospital de Jove, en
          Gijón, cubren a cinco minutos desde Gijón, diez desde Candás y quince desde Luanco. El
          HUCA, en Oviedo —referencia de Asturias—, anda alrededor de los treinta a cuarenta y
          cinco minutos. La red pública de este arco es densa.
        </P>
        <P>
          El aeropuerto de Asturias —con Palma en verano— queda a unos diez minutos desde
          Salinas, Muros y Soto; quince desde Cudillero; veinte o veinticinco desde Luanco y
          Candás; treinta desde Gijón. Santander ofrece Palma casi todo el año a unas dos horas
          y cuarto. La logística aérea es corta sobre todo desde Salinas.
        </P>
        <Foto
          src="/fotos/asturias-centro/zona-silencio.jpg"
          pie="Playa del Silencio, cerca de Cudillero"
        />
      </section>

      <Encaja
        si={[
          "Se busca logística corta del Cantábrico occidental —aeropuerto a diez o treinta minutos, Avilés, Gijón, Oviedo y hospitales públicos cercanos—, aceptando cielo cantábrico y, según el punto, aire de industria. Salinas funciona como villa-playa residencial práctica; Luanco y Candás, como villas marineras del Cabo Peñas.",
          "Se valora playa usable —Salinas, San Lorenzo, Quebrantos, Ribera—, estuario del Nalón o ciudad de mar completa en Gijón, con orilla más contenida hacia Muros y Soto.",
        ]}
        no={[
          `Se necesita el cielo de Baleares: Asturias Centro tiene ${zona.lluviaDias} días de lluvia, ${zona.despejados} despejados y ${zona.cubiertos} cubiertos, frente a ${mallorca.lluviaDias} y ${mallorca.despejados} en Mallorca. El verano sigue trayendo lluvia varios días al mes.`,
          "Se busca aire limpio garantizado junto a la siderurgia de Avilés o a Aboño, o calma total en el pueblo colgado de Cudillero en temporada. Cudillero encanta para visitar; para vivir suele pesar más la cuesta y el visitante de día que la foto bonita.",
        ]}
        veredicto="Veredicto de zona: Asturias Centro ofrece aeropuerto, hospitales y ciudades a diez o treinta minutos, no sol. Si la logística manda, Salinas funciona como villa de casas bajas junto a la playa, con San Agustín y el aeropuerto a diez minutos —aceptando la siderurgia a unos tres kilómetros según el viento—. Luanco y Candás aportan villa marinera; Gijón, ciudad completa (Somió, si se buscan casas bajas cerca de la playa); Muros y Soto, estuario; Cudillero, pueblo de foto —visitarlo o vivir arriba, en El Pito—. Antes de elegir, probar un noviembre cubierto, un día con viento del sur cerca de Avilés o Aboño y un agosto en Cudillero o San Lorenzo."
      />

      <MunicipiosZonaFin
        zonaId={zona.id}
        municipios={municipiosAsturiasCentro}
        escalas={ESCALA}
      />

      <p className="mt-12 max-w-2xl text-xs text-[var(--tinta-suave)]">
        Fotos: Wikimedia Commons. Consulta la atribución y licencia en cada imagen.
      </p>
    </article>
  );
}
