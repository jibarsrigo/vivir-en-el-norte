import Encaja from "@/components/Encaja";
import Foto from "@/components/Foto";
import TablaPrecios from "@/components/TablaPrecios";
import EnlaceIdealista from "@/components/EnlaceIdealista";
import MunicipiosZonaFin from "@/components/MunicipiosZonaFin";
import { mallorca, type Zona } from "@/lib/zonas";
import { municipiosAMarina } from "@/lib/municipios";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{children}</p>;
}

const ESCALA: Record<string, string> = {
  "O Vicedo": "Villa marinera atlántica",
  Viveiro: "Villa de ría con casco",
  Xove: "Costa y parroquias",
  Cervo: "Costa y cerámica",
  Burela: "Villa portuaria pesquera",
  Foz: "Villa de ría y playa",
  Barreiros: "Playas y parroquias",
  Ribadeo: "Villa de frontera y As Catedrais",
};

export default function RelatoAMarina({ zona }: { zona: Zona }) {
  return (
    <article className="mt-8">
      <section>
        <H2>Dónde está</H2>
        <P>
          A Mariña es la costa norte de Lugo, ya en el Cantábrico: acantilados, playas abiertas y
          tres rías pequeñas —Viveiro, Foz y Ribadeo— que abrigan orillas más calmadas que el mar
          bravo. Una ría es un valle fluvial inundado por el mar; aquí el agua queda recogida frente
          a Covas, a la marisma de Foz o al Eo, mientras As Catedrais —los arcos de piedra entre
          Ribadeo y Barreiros— miran al océano abierto.
        </P>
        <P>
          O Vicedo cierra el extremo oeste junto a la ría do Barqueiro. Viveiro es la villa amurallada
          con casco y puerto de Celeiro. Xove y Cervo reparte costa, parroquias y la industria de San
          Cibrao —la planta de aluminio de Alcoa—. Burela concentra el puerto del bonito y el
          hospital comarcal. Foz es villa de ría y playa; Barreiros, playas y bloques de veraneo;
          Ribadeo, villa de frontera frente a Castropol, en Asturias.
        </P>
        <P>
          No hay ciudad dentro de la zona: Lugo queda a una hora y cuarto; A Coruña y Oviedo, a unas
          una hora y cuarenta y cinco. Es la franja más barata de la tabla y la más alejada de sol
          estable, hospital privado y aeropuerto cercano. A cambio ofrece Cantábrico espectacular y
          villas de cuatro mil a quince mil habitantes.
        </P>
        <Foto
          src="/fotos/a-marina/zona-catedrais.jpg"
          pie="As Catedrais: arcos de piedra en la costa de A Mariña"
        />
      </section>

      <section>
        <H2>El tiempo comparado con Baleares</H2>
        <P>
          A Mariña suma unas {zona.solHoras.toLocaleString("es-ES")} horas de sol y{" "}
          {zona.despejados} días despejados al año. Mallorca ronda{" "}
          {mallorca.solHoras.toLocaleString("es-ES")} horas y {mallorca.despejados} jornadas
          claras. La diferencia se concentra en el cielo cubierto y la niebla: de octubre a marzo
          llueve {zona.lluvia.oct_mar} días al mes y {zona.lluvia.peor} puede alcanzar{" "}
          {zona.lluvia.peor_n}.
        </P>
        <P>
          Caen unos {zona.lluviaMm.toLocaleString("es-ES")} milímetros en {zona.lluviaDias} días,
          con unos {zona.cubiertos} cubiertos y humedad alta. También en verano llueve{" "}
          {zona.lluvia.verano} días al mes. Es de los climas más grises de Galicia frente a
          Baleares: se gana fresco extremo y se pierde sol estable.
        </P>
        <P>
          El verano es el más fresco de la tabla: la media ronda {zona.tempVerano} °C, las máximas
          habituales unos 22 °C y casi ningún día supera los 30 °C. Frente al calor sostenido balear
          se duerme fresco siempre. El viento es medio; la niebla, alta en casi toda la costa de
          Lugo.
        </P>
        <P>
          El agua anda entre 17 y 19 °C. El mar abierto es bravo casi siempre; para bañarse con más
          calma sirven las rías de Viveiro —playa de Covas— y de Foz. As Catedrais, Esteiro o Xilloi
          invitan más al paseo que al baño largo cuando sopla el Cantábrico.
        </P>
        <p className="mt-4 max-w-2xl font-semibold text-[var(--calor)]">
          Verano muy fresco: máximas habituales alrededor de 22 °C y casi ningún día por encima de
          30 °C.
        </p>
      </section>

      <section>
        <H2>Cómo se vive</H2>
        <P>
          Un martes de noviembre muestra ocho escalas. Viveiro y Ribadeo resuelven comercio,
          mercado y centro de salud en villas caminables. Burela aporta puerto y hospital a pie.
          Foz cubre la semana básica con paseo y ría. Xove, Cervo y Barreiros bajan a lo esencial:
          el coche enlaza compra y ocio. O Vicedo es el extremo más aislado, con servicios mínimos.
        </P>
        <P>
          El coche no pesa igual en todas partes. En Ribadeo la dependencia es baja; en Viveiro,
          Burela y Foz el día a día se resuelve en el municipio y el hospital o el aeropuerto piden
          trayecto. En O Vicedo, Xove, Cervo y Barreiros conducir forma parte de la jornada. Quien
          vive aquí trabaja en pesca, industria, servicios y veraneo gallego-castellano: no es una
          costa cerrada fuera de temporada en Viveiro, Burela o Ribadeo, aunque Barreiros se vacía
          en invierno.
        </P>
        <P>
          Agosto anima Covas, Foz, Barreiros y As Catedrais con toallas, tráfico y aparcamiento
          justo. En Viveiro, la Semana Santa —declarada de interés turístico internacional— corta
          calles, concentra procesiones y gente, y cambia el ritmo de la villa durante varios días:
          quien viva en el casco debe contar con ruido, cortes y afluencia en esas fechas. El resto
          del año las villas recuperan escala de trabajo.
        </P>
        <Foto
          src="/fotos/a-marina/zona-viveiro.jpg"
          pie="Viveiro: villa de ría con casco y vida todo el año"
        />
      </section>

      <section>
        <H2>Mar, ría y camino</H2>
        <P>
          En O Vicedo el baño y el paseo miran a Xilloi, Arealonga y Vidreiro; Fuciño do Porco —
          pasarelas sobre el acantilado— y Estaca de Bares, a unos veinte minutos, cierran el
          extremo más atlántico. Viveiro ofrece Covas —playa larga en ría abrigada—, Area y Sacido,
          con el puerto de Celeiro como orilla de trabajo.
        </P>
        <P>
          Xove aporta Esteiro —playa de arcos y surf— y Portocelo. Cervo reparte Cubelas y O Torno
          en San Cibrao, con el Museo Provincial do Mar. Burela mira a A Marosa y Ril. Foz junta
          A Rapadoira, Llas y Peizás con la ría y la marisma. Barreiros suma Arealonga, Altar, Coto
          y Remior; As Catedrais quedan a unos cinco minutos.
        </P>
        <Foto
          src="/fotos/a-marina/zona-foz.jpg"
          pie="Foz: villa de ría, paseo y playa cantábrica"
        />
        <P>
          Ribadeo cierra con As Catedrais a unos diez minutos, Illa Pancha —faro en un islote—, la
          ría del Eo frente a Castropol y la ruta costera hacia Rinlo. Tierra adentro, San Martiño
          de Mondoñedo —cerca de Foz— y la sierra del Xistral, a treinta o cuarenta minutos, dan
          patrimonio y monte lluvioso. El paisaje es de acantilado, ría y prado: no de sierra seca
          ni de Mediterráneo.
        </P>
        <Foto
          src="/fotos/a-marina/zona-ribadeo.jpg"
          pie="Ribadeo: villa de frontera sobre la ría del Eo"
        />
      </section>

      <section>
        <H2>Mercados, fiestas y calendario</H2>
        <P>
          Viveiro y Ribadeo concentran mercado, comercio y mesas abiertas todo el año. Burela
          añade lonja y ambiente de puerto pesquero; Foz mantiene ritmo de villa de veraneo con
          vida local fuera de agosto. En Xove, Cervo, Barreiros y O Vicedo el comercio diario es
          más fino: el súper completo o la villa vecina organizan muchos recados.
        </P>
        <P>
          La fiesta que más marca la vida en la comarca es la Semana Santa de Viveiro, de interés
          turístico internacional: procesiones, cortes de tráfico, ruido y mucha gente en el casco
          durante varios días. Quien se decida a vivir cerca del recorrido debe probar esas jornadas, no solo
          un martes gris de noviembre. En verano As Catedrais, Covas y las playas de Barreiros y
          Foz reciben afluencia: aparcamiento, toallas y un volumen que no existe en enero.
        </P>
        <P>
          Merluza del pincho de Celeiro, bonito de Burela, marisco de ría y pescado de lonja son
          gastronomía de diario en las villas portuarias. El calendario corta calles en fechas
          concretas; el resto del año la Mariña recupera tranquilidad de costa de Lugo. Conviene
          probar la calle elegida en Semana Santa —si es Viveiro—, en agosto junto a As Catedrais y
          en un martes de niebla.
        </P>
        <Foto
          src="/fotos/a-marina/zona-burela.jpg"
          pie="Burela: puerto pesquero y villa de servicios"
        />
      </section>

      <section>
        <H2>Qué cuesta una casa</H2>
        <P>
          A Mariña es la franja más asequible de la tabla. O Vicedo ronda 900 €/m²; Xove, 950;
          Cervo, 1.000; Barreiros, 1.150; Burela, 1.200; Viveiro, 1.250; Foz, 1.300; Ribadeo,
          1.400. Tres habitaciones en la franja asequible se sitúan aproximadamente entre 105.000
          euros en O Vicedo y 164.000 en Ribadeo; Viveiro ronda 146.000, Burela 140.000 y Foz
          152.000.
        </P>
        <P>
          La franja media cambia de forma: piso en casco de Viveiro o Ribadeo, vivienda cerca del
          puerto en Burela, piso de veraneo en Foz o Barreiros, o casa con parcela hacia las
          parroquias. Tipologías de primera línea con vistas espectaculares suben; el estado de la
          reforma y la humedad cantábrica pesan más que una cifra única.
        </P>
        <P>
          Hay poca obra nueva en Viveiro, Burela, Foz, Barreiros y Ribadeo; en el resto, casi
          ninguna. La fibra llega bien en Viveiro, Burela, Foz y Ribadeo; es parcial en O Vicedo,
          Xove, Cervo y Barreiros. En costa abierta se revisan salitre y viento; en ría, humedad; en
          Barreiros, ocupación de agosto y vacío de invierno.
        </P>
        <TablaPrecios filas={municipiosAMarina} />
        <EnlaceIdealista ambito="zona" zonaId={zona.id} nombre={zona.zona} />
      </section>

      <section>
        <H2>Servicios, hospital, aeropuerto</H2>
        <P>
          Ribadeo alcanza 7/10 en servicios —la villa más completa—. Viveiro y Burela, 6/10; Foz,
          5/10; Cervo, 4/10; Xove y Barreiros, 3/10; O Vicedo, 2/10. Servicios significa vida diaria
          dentro del municipio —tiendas, farmacia, centro de salud, súper—, no la distancia al
          hospital. No hay ciudad de referencia cercana: Lugo queda a más de una hora.
        </P>
        <P>
          El Hospital da Mariña, en Burela —público comarcal—, queda a unos cinco minutos desde la
          villa, diez desde Cervo, veinte desde Xove y Foz, veinticinco desde Viveiro y Barreiros, y
          treinta y cinco desde O Vicedo y Ribadeo. Desde Ribadeo, Jarrio —en Asturias— está a unos
          treinta minutos, aunque la tarjeta gallega remite a Burela. No hay hospital privado en la
          comarca: el más cercano queda en Lugo u Oviedo, a más de una hora y cuarto.
        </P>
        <P>
          El aeropuerto de Asturias queda a unos sesenta minutos desde Ribadeo, setenta desde
          Barreiros, ochenta desde Foz, ochenta y cinco desde Burela y noventa o cien desde el
          resto, con Palma en verano. Santiago-Lavacolla ofrece enlace a Palma casi todo el año y
          queda a unos cien o ciento veinte minutos. A Coruña cubre otra opción de verano a tiempos
          similares. Es la logística más larga de las zonas gallegas publicadas.
        </P>
        <Foto
          src="/fotos/a-marina/zona-vicedo.jpg"
          pie="O Vicedo: extremo occidental de A Mariña hacia Estaca de Bares"
        />
      </section>

      <Encaja
        si={[
          "Se busca precio bajo con Cantábrico delante y se acepta cielo gris, niebla y aeropuerto a una hora o más. Viveiro da villa con vida todo el año; Ribadeo, frontera, As Catedrais y Asturias a sesenta minutos; Burela, hospital a pie.",
          "Se valora ría abrigada para baño corto —Covas o Foz—, paseos de acantilado y un mercado inmobiliario de los más asequibles de la tabla, sin necesidad de ciudad a menos de una hora y cuarto.",
        ]}
        no={[
          `Se necesita el cielo de Baleares: A Mariña tiene ${zona.lluviaDias} días de lluvia, ${zona.despejados} despejados y ${zona.cubiertos} cubiertos, frente a ${mallorca.lluviaDias} y ${mallorca.despejados} en Mallorca. El verano sigue trayendo lluvia algunos días; la niebla es frecuente.`,
          "Se busca hospital privado cerca, ciudad a media hora o Palma casi todo el año a menos de una hora de aeropuerto. Aquí el comarcal está en Burela, no hay privado en la comarca, y Santiago queda a cien o ciento veinte minutos.",
        ]}
        veredicto="Veredicto de zona: A Mariña gana por precio y costa cantábrica, no por sol ni logística. Si alguna vez se mira, Viveiro o Ribadeo son las únicas villas con vida completa; Burela solo si manda el hospital a pie; Foz, veraneo tranquilo; O Vicedo, Xove, Cervo y Barreiros piden coche y aceptan invierno muy vacío. Antes de elegir, probaría un noviembre de niebla, la Semana Santa de Viveiro si el casco importa, y un agosto junto a As Catedrais."
      />

      <MunicipiosZonaFin
        zonaId={zona.id}
        municipios={municipiosAMarina}
        escalas={ESCALA}
      />

      <p className="mt-12 max-w-2xl text-xs text-[var(--tinta-suave)]">
        Fotos: Wikimedia Commons. Consulta la atribución y licencia en cada imagen.
      </p>
    </article>
  );
}
