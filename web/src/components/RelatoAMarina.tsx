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
  "O Vicedo": "Villa marinera cantábrica",
  Viveiro: "Villa de ría con casco",
  Xove: "Costa y parroquias",
  Cervo: "Costa y cerámica",
  Burela: "Villa portuaria pesquera",
  Foz: "Villa de ría y playa",
  Barreiros: "Playas y parroquias",
          Ribadeo: "Villa de frontera sobre el Eo",
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
          Ribadeo y Barreiros— miran al Cantábrico abierto.
        </P>
        <P>
          O Vicedo cierra el extremo oeste junto a la ría do Barqueiro. Viveiro es la villa amurallada
          con casco y puerto de Celeiro. Xove y Cervo comparten costa, parroquias y el complejo
          industrial de San Ciprián —refinería de alúmina y planta de aluminio—, que se reparte entre
          los dos términos municipales: en 2026 Alcoa asumió la propiedad íntegra del complejo y
          reactivó la fábrica de aluminio en abril, mientras sigue señalando dudas de viabilidad en la
          refinería de alúmina por el coste de la energía. Burela concentra el puerto del bonito y el
          hospital comarcal. Foz es villa de ría y playa; Barreiros, playas y parroquias con mucha
          segunda residencia; Ribadeo, villa de frontera frente a Castropol, en Asturias.
        </P>
        <P>
          No hay ciudad dentro de la zona: Lugo queda entre una hora y hora y media según municipio y
          ruta; A Coruña y Oviedo, entre hora y media y dos horas largas. El tramo oeste e industrial
          sigue ofreciendo orilla más contenida; Foz y Ribadeo ya se leen como costa media. Es
          también de las zonas más alejadas de sol estable, hospital privado y aeropuerto cercano. A
          cambio ofrece Cantábrico abierto y villas que van de menos de dos mil habitantes a quince
          mil.
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
          Estas cifras son orientativas del conjunto de la comarca, no la serie de una estación
          concreta: las damos como referencia de zona. Dentro de A Mariña hay variación real —las rías
          de Viveiro, Foz y el Eo no se comportan igual que la costa abierta de Xove o Barreiros, y el
          interior hacia el Xistral es más lluvioso y más frío—, así que no conviene dar por hecho que
          los ocho municipios tienen el mismo clima.
        </P>
        <P>
          Caen unos {zona.lluviaMm.toLocaleString("es-ES")} milímetros en {zona.lluviaDias} días,
          con unos {zona.cubiertos} cubiertos y humedad alta. También en verano llueve{" "}
          {zona.lluvia.verano} días al mes. Es de los climas más grises de Galicia frente a
          Baleares: se gana fresco extremo y se pierde sol estable.
        </P>
        <P>
          El verano es fresco: la media ronda {zona.tempVerano} °C. Frente al calor sostenido balear
          se duerme fresco casi cada noche. El viento es medio; la niebla, frecuente en buena parte
          de la costa de Lugo.
        </P>
        <P>
          El mar abierto es bravo buena parte del año; para bañarse con más calma sirven las rías de
          Viveiro —playa de Covas— y de Foz. As Catedrais, Esteiro o Xilloi invitan más al paseo que
          al baño largo cuando sopla el Cantábrico.
        </P>
        <p className="mt-4 max-w-2xl font-semibold text-[var(--calor)]">
          Verano fresco: media alrededor de {zona.tempVerano} °C frente al calor sostenido de
          Mallorca.
        </p>
      </section>

      <section>
        <H2>Cómo se vive</H2>
        <P>
          Un martes de noviembre muestra ocho escalas. Viveiro y Ribadeo resuelven comercio,
          mercado y centro de salud en villas caminables. Burela aporta puerto y el hospital comarcal
          en el propio municipio.
          Foz cubre la semana básica con paseo y ría. Xove, Cervo y Barreiros bajan a lo esencial:
          el coche enlaza compra y ocio. O Vicedo es el extremo más aislado, con servicios mínimos.
        </P>
        <P>
          El coche no pesa igual en todas partes. En Ribadeo la dependencia es baja; en Viveiro,
          Burela y Foz el día a día se resuelve en el municipio y el hospital o el aeropuerto piden
          trayecto. En O Vicedo, Xove, Cervo y Barreiros conducir forma parte de la jornada. Quien
          vive aquí trabaja en pesca, industria, servicios y veraneo gallego-castellano: no es una
          costa cerrada fuera de temporada en Viveiro, Burela o Ribadeo, aunque en Barreiros la
          segunda residencia es muy elevada y la estacionalidad, notable.
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
          pasarelas sobre el acantilado— y Estaca de Bares, a unos veinte o treinta minutos según
          ruta, cierran el extremo noroeste: el cabo es uno de los extremos septentrionales de la
          península. Viveiro ofrece Covas —playa larga en ría abrigada—, Area y Sacido,
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
          Ribadeo vive del Eo frente a Castropol, de Illa Pancha —faro en un islote— y de la ruta
          costera hacia Rinlo. As Catedrais —los arcos de piedra hacia Barreiros— quedan a unos diez
          minutos: son peaje de agosto y visita, no la playa cotidiana de la villa. Tierra adentro,
          la basílica de San Martiño de Mondoñedo —cerca de Foz, antigua sede episcopal y considerada
          una de las iglesias catedralicias más antiguas de España— y la sierra del Xistral, a
          treinta o cuarenta minutos según ruta, dan patrimonio y monte lluvioso. El paisaje es de
          acantilado, ría y prado: no de sierra seca ni de Mediterráneo.
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
          A Mariña no es uniforme. El tramo oeste e industrial —O Vicedo, Xove, Cervo, Burela—
          suele leerse más contenido; Barreiros ya no es esa orilla barata de hace unos años; Foz y
          Ribadeo se acercan a costa media. En Xove la muestra publicada puede ser escasa: no fijamos
          cifra aquí; la tabla e Idealista del mes mandan.
        </P>
        <P>
          La franja media cambia de forma: piso en casco de Viveiro o Ribadeo, vivienda cerca del
          puerto en Burela, piso de veraneo en Foz o Barreiros, o casa con parcela hacia las
          parroquias. Tipologías de primera línea con vistas espectaculares suben; el estado de la
          reforma y la humedad cantábrica pesan más que una media de zona.
        </P>
        <P>
          Hay poca obra nueva en Viveiro, Burela, Foz, Barreiros y Ribadeo; en el resto, casi
          ninguna. La fibra llega bien en Viveiro, Burela, Foz y Ribadeo; es parcial en O Vicedo,
          Xove, Cervo y Barreiros. En costa abierta se revisan salitre y viento; en ría, humedad; en
          Barreiros, ocupación de agosto y una estacionalidad muy marcada el resto del año. Los
          números concretos están en la tabla; el anuncio concreto manda.
        </P>
        <TablaPrecios filas={municipiosAMarina} />
        <EnlaceIdealista ambito="zona" zonaId={zona.id} nombre={zona.zona} />
      </section>

      <section>
        <H2>Servicios, hospital, aeropuerto</H2>
        <P>
          Ribadeo, Viveiro y Burela resuelven comercio, farmacia y centro de salud en villa
          caminable. Foz cubre la semana básica; Cervo, Xove, Barreiros y O Vicedo bajan a lo
          esencial y el coche organiza muchos recados. Servicios aquí significa vida diaria dentro
          del municipio —tiendas, farmacia, centro de salud, súper—, no la distancia al hospital. No
          hay ciudad de referencia cercana: Lugo, A Coruña u Oviedo quedan, según municipio y ruta,
          alrededor de una hora y cuarto o más.
        </P>
        <P>
          El Hospital da Mariña, en Burela —público comarcal—, queda a unos cinco minutos desde la
          propia villa, diez desde San Cibrao, veinte desde los núcleos de Xove y Foz, veinticinco
          desde Viveiro y Barreiros, y treinta y cinco desde O Vicedo y Ribadeo. Son tiempos desde el
          núcleo de referencia de cada municipio: en términos dispersos como Xove, Cervo o Barreiros,
          desde las parroquias altas hay que sumar minutos. Desde Ribadeo, Jarrio —en Asturias— está a
          unos treinta minutos; conviene comprobar cuál es el hospital de referencia del asegurado según
          el empadronamiento y el convenio vigente, porque la frontera administrativa no siempre
          coincide con el centro más próximo. No hay hospital privado en la comarca.
        </P>
        <P>
          El aeropuerto de Asturias queda a unos sesenta minutos desde Ribadeo, setenta desde
          Barreiros, ochenta desde Foz, ochenta y cinco desde Burela y noventa o cien desde el resto,
          siempre según ruta. Santiago-Lavacolla queda a unos cien o ciento veinte minutos y A Coruña
          cubre otra opción a tiempos similares. Los enlaces con Palma cambian de temporada en
          temporada, así que conviene comprobar la programación vigente el año en que se decida y no
          dar por hecho un vuelo directo. Con todo, la logística aérea es larga frente a otras zonas
          gallegas publicadas.
        </P>
        <Foto
          src="/fotos/a-marina/zona-vicedo.jpg"
          pie="O Vicedo: extremo occidental de A Mariña hacia Estaca de Bares"
        />
      </section>

      <Encaja
        si={[
          "Se busca precio contenido con Cantábrico delante y se acepta cielo gris, niebla y aeropuerto a una hora o más. Viveiro da villa con vida propia todo el año; Ribadeo, frontera sobre el Eo y acceso a As Catedrais a unos diez minutos —visita y peaje de agosto, no playa de diario— más el aeropuerto de Asturias a unos sesenta minutos según ruta; Burela, hospital comarcal en el propio municipio.",
          "Se valora ría abrigada para baño corto —Covas o Foz—, paseos de acantilado y un mercado aún contenido en el tramo oeste, sin necesidad de ciudad a menos de una hora y cuarto. En Foz y Ribadeo, en cambio, hay que contar ya con precios de costa media.",
        ]}
        no={[
          `Se necesita el cielo de Baleares: A Mariña tiene ${zona.lluviaDias} días de lluvia, ${zona.despejados} despejados y ${zona.cubiertos} cubiertos, frente a ${mallorca.lluviaDias} y ${mallorca.despejados} en Mallorca. El verano sigue trayendo lluvia algunos días; la niebla es frecuente.`,
          "Se busca hospital privado cerca, ciudad a media hora o vuelo directo a Palma todo el año desde un aeropuerto próximo. Aquí el comarcal está en Burela, no hay privado en la comarca, Santiago queda a cien o ciento veinte minutos y la programación de vuelos hay que comprobarla cada temporada.",
        ]}
        veredicto="Veredicto de zona: A Mariña ofrece costa cantábrica y orilla más contenida en el tramo oeste, no sol ni logística corta. Viveiro y Ribadeo concentran vida propia todo el año; Burela interesa si pesa el hospital comarcal en el municipio; Foz, veraneo de ría ya con precios de costa media; O Vicedo, Xove, Cervo y Barreiros piden coche y aceptan estacionalidad marcada. Antes de elegir, probaría un noviembre de niebla, la Semana Santa de Viveiro si el casco importa, y un agosto junto a As Catedrais."
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
