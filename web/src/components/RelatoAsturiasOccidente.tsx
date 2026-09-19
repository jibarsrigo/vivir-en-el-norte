import Encaja from "@/components/Encaja";
import Foto from "@/components/Foto";
import TablaPrecios from "@/components/TablaPrecios";
import EnlaceIdealista from "@/components/EnlaceIdealista";
import MunicipiosZonaFin from "@/components/MunicipiosZonaFin";
import { mallorca, type Zona } from "@/lib/zonas";
import { municipiosAsturiasOccidente } from "@/lib/municipios";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{children}</p>;
}

const ESCALA: Record<string, string> = {
  Castropol: "Pueblo blanco sobre la ría",
  "Tapia de Casariego": "Villa marinera de surf",
  Navia: "Villa de servicios en su ría",
  "Luarca (Valdés)": "Villa blanca de la Costa Verde",
};

export default function RelatoAsturiasOccidente({ zona }: { zona: Zona }) {
  return (
    <article className="mt-8">
      <section>
        <H2>Dónde está</H2>
        <P>
          Asturias Occidente es la franja verde y marinera del oeste asturiano, entre la ría del Eo
          —el estuario que marca la frontera con Galicia frente a Ribadeo— y el Cabo Busto, ya
          hacia Valdés. Una ría es un valle fluvial inundado por el mar: aquí el Eo y la ría de
          Navia abrigan orillas más calmadas que el Cantábrico abierto, bravo casi siempre.
        </P>
        <P>
          Castropol es el pueblo blanco colgado sobre el Eo, con Figueras —astilleros y el
          palacio de Peñalba— a un paso y Ribadeo a unos diez minutos. Tapia de Casariego es villa
          de puerto, casco marinero y surf. Navia concentra servicios en su ría, con Puerto de
          Vega —uno de los pueblos marineros más bonitos de Asturias— a cinco minutos. Luarca, en
          el concejo de Valdés, es la «villa blanca de la Costa Verde»: puerto, cementerio sobre el
          acantilado, faro y casas de Indianos.
        </P>
        <P>
          La A-8 corre paralela a la costa. No hay ciudad dentro de la zona: Oviedo y Avilés quedan
          a una hora; Ribadeo cubre la frontera gallega desde Castropol. Es costa auténtica,
          asequible y tranquila, con cielo cantábrico cubierto buena parte del año.
        </P>
        <Foto
          src="/fotos/asturias-occidente/zona-luarca.jpg"
          pie="Luarca: villa blanca de la Costa Verde"
        />
      </section>

      <section>
        <H2>El tiempo comparado con Baleares</H2>
        <P>
          Asturias Occidente suma unas {zona.solHoras.toLocaleString("es-ES")} horas de sol y{" "}
          {zona.despejados} días despejados al año —en la franja de 1.850 a 1.950 horas y 40 a 42
          despejados—. Mallorca ronda {mallorca.solHoras.toLocaleString("es-ES")} horas y{" "}
          {mallorca.despejados} jornadas claras. La diferencia se concentra en el cielo cubierto y
          la niebla: de octubre a marzo llueve {zona.lluvia.oct_mar} días al mes y{" "}
          {zona.lluvia.peor} puede alcanzar {zona.lluvia.peor_n}.
        </P>
        <P>
          Caen unos {zona.lluviaMm.toLocaleString("es-ES")} milímetros en {zona.lluviaDias} días —
          cantidad moderada, frecuencia alta—, con unos {zona.cubiertos} cubiertos. También en
          verano llueve {zona.lluvia.verano} días al mes. La niebla es alta en Tapia y Castropol;
          media en Navia y Luarca. El viento es medio.
        </P>
        <P>
          El verano es fresco: la media ronda {zona.tempVerano} °C, las máximas habituales unos
          22-23 °C y apenas uno o dos días superan los 30 °C. Frente al calor sostenido balear se
          duerme fresco siempre.
        </P>
        <P>
          El agua anda entre 18 y 20 °C en agosto. El mar abierto es bravo; para bañarse con más
          calma sirven las rías de Navia y del Eo. Penarronda, Frexulfe, Barayo o las playas de
          Luarca invitan al paseo y al baño corto cuando el Cantábrico lo permite.
        </P>
        <p className="mt-4 max-w-2xl font-semibold text-[var(--calor)]">
          Verano fresco: media alrededor de 18,5 °C y apenas uno o dos días por encima de 30 °C.
        </p>
      </section>

      <section>
        <H2>Cómo se vive</H2>
        <P>
          Un martes de noviembre muestra cuatro escalas distintas. Navia, Tapia y Luarca resuelven
          comercio, centro de salud y recados en villas caminables —servicios 6/10—. Castropol baja
          a 3/10: Ribadeo, a unos diez minutos, organiza muchos recados. La dependencia del coche
          pesa más hacia el extremo occidental; en Luarca y Navia el día a día se resuelve mejor
          dentro del municipio.
        </P>
        <P>
          Quien vive aquí trabaja en pesca, servicios, veraneo asturiano-madrileño y vida de villa
          pequeña: ninguno supera los veinte mil habitantes. Agosto anima playas, puertos y el
          paseo de Luarca con toallas, tráfico y aparcamiento justo. En invierno las villas
          recuperan ritmo local; Castropol se nota más vacío si se depende solo del pueblo.
        </P>
        <P>
          Las fiestas patronales de cada villa —y el verano en la orilla— cortan calles, suben el
          ruido y llenan el casco unos días: conviene probar esas fechas, no solo un martes gris.
          Luarca se conoce sobre todo por su belleza y su puerto, no por un calendario que apague
          la villa el resto del año.
        </P>
        <Foto
          src="/fotos/asturias-occidente/zona-tapia.jpg"
          pie="Tapia de Casariego: villa marinera de puerto y surf"
        />
      </section>

      <section>
        <H2>Mar, ría y camino</H2>
        <P>
          Entre Castropol y Tapia, Penarronda —playa de dunas— marca la orilla compartida. En Tapia
          el surf mira a Arnao, Anguileiro-Represas y Serantes; el paseo costero y la isla del faro
          cierran la foto típica de la costa. La ruta costera Tapia–Figueras y el paseo de la ría del Eo —Reserva de
          la Biosfera Río Eo, Oscos e Terras de Burón— enlazan frontera y acantilado.
        </P>
        <P>
          Navia aporta playa a cinco minutos, Frexulfe —monumento natural—, Barayo —reserva natural
          hacia Valdés— y Puerto de Vega con paseo y mirador. El castro de Coaña queda a unos cinco
          minutos. En Luarca las playas 1ª y 2ª están en la villa; Otur, Cueva y Cadavedo a diez o
          quince minutos. Cabo Busto ofrece senda circular; la ruta de los miradores, el faro y
          los Jardines de la Fonte Baxa completan la tarde.
        </P>
        <Foto
          src="/fotos/asturias-occidente/zona-navia.jpg"
          pie="Navia: villa de servicios junto a su ría"
        />
        <P>
          Tierra adentro, la sierra de la Bobia y los Oscos quedan a unos cuarenta y cinco minutos:
          verde y lluvioso. El paisaje es de acantilado, ría y prado cantábrico, no de Mediterráneo
          ni de sierra seca.
        </P>
        <Foto
          src="/fotos/asturias-occidente/zona-castropol.jpg"
          pie="Castropol: pueblo blanco sobre la ría del Eo"
        />
      </section>

      <section>
        <H2>Mercados, fiestas y calendario</H2>
        <P>
          Navia, Tapia y Luarca concentran mercado, comercio y mesas abiertas todo el año. Luarca
          mantiene mercado y vida de villa blanca; Navia añade cine y el ritmo de villa de
          servicios. En Castropol el comercio diario es fino: Ribadeo cubre gran parte de los
          recados.
        </P>
        <P>
          Las patronales locales y el verano en playa y puerto son lo que más marca al vivir:
          ruido, afluencia y aparcamiento justo unos días o semanas. No hay que inventar fiestas
          oscuras: Luarca se elige por puerto, cementerio sobre el acantilado y faro; el impacto
          cotidiano viene del veraneo y del calendario de villa pequeña.
        </P>
        <P>
          Pescado de lonja, marisco de ría y cocina asturiana de diario son gastronomía de las
          villas. Conviene probar la calle elegida en fiestas locales, en agosto junto a la orilla
          y en un martes de niebla —sobre todo en Tapia y Castropol—.
        </P>
        <Foto
          src="/fotos/asturias-occidente/zona-penarronda.jpg"
          pie="Penarronda: dunas entre Castropol y Tapia"
        />
      </section>

      <section>
        <H2>Qué cuesta una casa</H2>
        <P>
          Asturias Occidente es franja asequible. Castropol ronda 1.050 €/m²; Navia, 1.100; Luarca,
          1.300; Tapia, 1.350. Tres habitaciones en la franja asequible se sitúan aproximadamente
          entre 129.000 euros en Navia y 158.000 en Tapia; Luarca ronda 152.000.
        </P>
        <P>
          La franja media cambia de forma: piso en casco de Luarca o Tapia, vivienda hacia la ría
          en Navia o Castropol, o casas de Indianos rehabilitadas que suben a tramos ya altos de
          la media. Tipologías de primera línea con vistas al puerto o al acantilado encarecen; el
          estado de la reforma y la humedad cantábrica pesan más que una cifra única.
        </P>
        <P>
          Hay poca o ninguna obra nueva —casi ninguna en Castropol—. La fibra llega bien en Tapia,
          Navia y Luarca; es parcial en Castropol. En costa abierta se revisan salitre y viento; en
          ría, humedad; en Tapia y Castropol, niebla frecuente.
        </P>
        <TablaPrecios filas={municipiosAsturiasOccidente} />
        <EnlaceIdealista ambito="zona" zonaId={zona.id} nombre={zona.zona} />
      </section>

      <section>
        <H2>Servicios, hospital, aeropuerto</H2>
        <P>
          Navia, Tapia y Luarca alcanzan 6/10 en servicios —villas con centro de salud, comercio y
          vida diaria—. Castropol queda en 3/10 y se apoya en Ribadeo. Servicios significa vida
          diaria dentro del municipio —tiendas, farmacia, centro de salud, súper—, no la distancia
          al hospital. Oviedo y Avilés quedan a una hora.
        </P>
        <P>
          El Hospital de Jarrio, en Coaña —público comarcal—, queda a unos diez minutos desde
          Navia, veinte desde Tapia y Luarca, y treinta desde Castropol. El privado más usable —
          Centro Médico de Asturias, en Oviedo— anda alrededor de una hora y diez; el HUCA, en
          Oviedo, cubre lo que Jarrio no resuelve a unos sesenta minutos.
        </P>
        <P>
          El aeropuerto de Asturias —con Palma en verano— queda a unos cuarenta minutos desde
          Luarca, cincuenta y cinco desde Navia, setenta desde Tapia y setenta y cinco desde
          Castropol. Santiago-Lavacolla ofrece Palma casi todo el año y queda a unas dos horas. Es
          la mejor logística aeroportuaria de las costas occidentales publicadas hasta aquí, sobre
          todo desde Luarca.
        </P>
        <Foto
          src="/fotos/asturias-occidente/zona-vega.jpg"
          pie="Puerto de Vega: pueblo marinero junto a Navia"
        />
      </section>

      <Encaja
        si={[
          "Se busca costa asturiana auténtica, precio asequible y villas pequeñas con mar delante, aceptando cielo cantábrico, niebla y verano fresco. Luarca gana por encanto y aeropuerto a cuarenta minutos; Navia, por hospital a diez y servicios prácticos.",
          "Se valora ría abrigada —Eo o Navia—, surf en Tapia, Puerto de Vega cerca y un mercado inmobiliario todavía asequible frente a otras costas del norte.",
        ]}
        no={[
          `Se necesita el cielo de Baleares: Asturias Occidente tiene ${zona.lluviaDias} días de lluvia, ${zona.despejados} despejados y ${zona.cubiertos} cubiertos, frente a ${mallorca.lluviaDias} y ${mallorca.despejados} en Mallorca. El verano sigue trayendo lluvia varios días al mes.`,
          "Se busca ciudad a media hora, hospital privado cerca o Palma todo el año a menos de una hora de aeropuerto. Aquí Oviedo queda a una hora, el privado también, y Santiago a dos horas.",
        ]}
        veredicto="Veredicto de zona: Asturias Occidente gana por villa blanca, ría y precio, no por sol ni ciudad. Si la Asturias verde enamora en una visita, Luarca es la apuesta por encanto y aeropuerto a cuarenta minutos; Navia, la práctica por Jarrio a diez; Tapia, surf y casco marinero; Castropol, pueblo blanco con Ribadeo de apoyo. Antes de elegir, probaría un noviembre de niebla en Tapia o Castropol, unas patronales locales y un agosto en el puerto de Luarca."
      />

      <MunicipiosZonaFin
        zonaId={zona.id}
        municipios={municipiosAsturiasOccidente}
        escalas={ESCALA}
      />

      <p className="mt-12 max-w-2xl text-xs text-[var(--tinta-suave)]">
        Fotos: Wikimedia Commons. Consulta la atribución y licencia en cada imagen.
      </p>
    </article>
  );
}
