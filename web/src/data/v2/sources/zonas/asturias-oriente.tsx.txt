import Encaja from "@/components/Encaja";
import Foto from "@/components/Foto";
import TablaPrecios from "@/components/TablaPrecios";
import EnlaceIdealista from "@/components/EnlaceIdealista";
import MunicipiosZonaFin from "@/components/MunicipiosZonaFin";
import { mallorca, type Zona } from "@/lib/zonas";
import { municipiosAsturiasOriente } from "@/lib/municipios";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{children}</p>;
}

const ESCALA: Record<string, string> = {
  Villaviciosa: "Villa de la sidra",
  Colunga: "Lastres y el Sueve",
  Ribadesella: "Villa del Sella",
  Llanes: "Villa amurallada y playas",
  Ribadedeva: "Frontera e Indianos",
};

export default function RelatoAsturiasOriente({ zona }: { zona: Zona }) {
  return (
    <article className="mt-8">
      <section>
        <H2>Dónde está</H2>
        <P>
          Asturias Oriente es la costa donde la montaña cae al mar: la Sierra del Sueve —1.160
          metros— se alza sobre Colunga; la Sierra del Cuera —unos 1.300 metros— sobre Llanes; y
          detrás, los Picos de Europa quedan a treinta o cuarenta y cinco minutos. No es una
          franja plana de playa: es orilla de acantilado, ría y sierra a un mismo golpe de vista.
        </P>
        <P>
          Villaviciosa es la capital de la sidra, con su ría —reserva natural—, Tazones —pueblo
          marinero donde desembarcó Carlos V— y Rodiles a unos doce minutos. Colunga aporta
          Lastres —pueblo colgado sobre el puerto—, el MUJA —Museo del Jurásico de Asturias— y
          playas como La Griega. Ribadesella es la villa del Sella: puerto en la ría, cueva de
          Tito Bustillo y el paseo de Santa Marina con casas de Indianos —las mansiones de quienes
          volvieron de América—. Llanes es villa amurallada con más de treinta playas en el
          concejo. Ribadedeva, con capital en Colombres, marca la frontera con Cantabria: Archivo
          de Indianos y cueva del Pindal.
        </P>
        <P>
          Es costa de paisaje fuerte —sierra sobre el mar— y de poco sol. Gijón queda a veinticinco
          o cincuenta minutos; Oviedo, a cuarenta o setenta; Torrelavega y Santander, a cuarenta y
          cinco o setenta y cinco desde Ribadedeva. Sanidad y aeropuerto están en el límite de lo
          práctico.
        </P>
        <Foto
          src="/fotos/asturias-oriente/zona-lastres.jpg"
          pie="Lastres: pueblo colgado sobre el puerto, en Colunga"
        />
      </section>

      <section>
        <H2>El tiempo comparado con Baleares</H2>
        <P>
          Asturias Oriente suma unas {zona.solHoras.toLocaleString("es-ES")} horas de sol y{" "}
          {zona.despejados} días despejados al año. Mallorca ronda{" "}
          {mallorca.solHoras.toLocaleString("es-ES")} horas y {mallorca.despejados} jornadas
          claras. La diferencia se concentra en el cielo cubierto: de octubre a marzo llueve{" "}
          {zona.lluvia.oct_mar} días al mes y {zona.lluvia.peor} puede alcanzar{" "}
          {zona.lluvia.peor_n}.
        </P>
        <P>
          Caen unos {zona.lluviaMm.toLocaleString("es-ES")} milímetros en {zona.lluviaDias} días,
          con unos {zona.cubiertos} cubiertos. También en verano llueve {zona.lluvia.verano} días
          al mes. El viento es bajo —la sierra protege—; la niebla es frecuente hacia Villaviciosa.
        </P>
        <P>
          El verano es fresco: la media ronda {zona.tempVerano} °C. Frente al calor sostenido balear
          se duerme fresco —y se acepta un cielo muy lejos de Mallorca—.
        </P>
        <P>
          Rodiles, La Griega, Santa Marina, Toró, Sablón, Barro, Gulpiyuri o La Franca invitan al
          paseo y al baño cuando el mar lo permite; muchas playas son pequeñas y abrigadas entre
          acantilados.
        </P>
        <p className="mt-4 max-w-2xl font-semibold text-[var(--calor)]">
          Verano fresco: media alrededor de {zona.tempVerano} °C frente al calor sostenido de
          Mallorca.
        </p>
      </section>

      <section>
        <H2>Cómo se vive</H2>
        <P>
          Un martes de noviembre muestra escalas distintas. Llanes y Ribadesella son villas
          completas con centro de salud, comercio, mercado y mesas abiertas. Villaviciosa también
          concentra servicios y vida propia. Colunga baja a lo esencial; Ribadedeva, aún más —
          Unquera y Colombres cubren lo básico; Llanes queda a unos quince minutos—.
        </P>
        <P>
          Quien vive aquí trabaja en villa, en servicios locales, en veraneo madrileño o en el
          ritmo de ría y sierra. En julio y agosto Llanes y Ribadesella multiplican por cinco u
          ocho su población: toallas, tráfico, ruido y aparcamiento justo. De octubre a junio las
          villas recuperan calma; Colunga y Ribadedeva se notan más vacías si se depende solo del
          municipio.
        </P>
        <P>
          Las fiestas patronales, el Descenso del Sella —primer sábado de agosto— y el verano en
          la orilla cortan calles y llenan el casco unos días o semanas: conviene probar esas
          fechas, no solo un martes gris. Ningún municipio supera los veinte mil habitantes; el
          ambiente es de villas de piedra e Indianos, muy cuidadas.
        </P>
        <Foto
          src="/fotos/asturias-oriente/zona-llanes.jpg"
          pie="Llanes: villa amurallada y puerto"
        />
      </section>

      <section>
        <H2>Mar, río y camino</H2>
        <P>
          En Villaviciosa la villa vive de la sidra y de la ría —paseo y aves—; la playa de diario
          no está en el casco: Rodiles —playa larga con pinar y surf— queda a unos doce minutos, y
          Tazones —pueblo marinero donde desembarcó Carlos V— también pide trayecto. Valdediós —
          prerrománico— queda tierra adentro a unos diez. Colunga aporta Lastres, La Griega —
          huellas de dinosaurio—, La Isla y el Sueve con el Mirador del Fitu —una de las vistas
          mar-montaña más conocidas de la costa—.
        </P>
        <P>
          Ribadesella une puerto en la ría del Sella, playa urbana de Santa Marina, Vega a diez
          minutos, la Ermita de la Guía y Tito Bustillo. Llanes suma Toró, Sablón, Puerto Chico,
          Ballota, Torimbia, Andrín, Barro, Niembro, Poo, Celorio y Gulpiyuri —playa interior
          circular—, con el Paseo de San Pedro —pradera sobre el acantilado— y los Bufones de
          Pría.
        </P>
        <Foto
          src="/fotos/asturias-oriente/zona-ribadesella.jpg"
          pie="Ribadesella: villa del Sella y paseo de Santa Marina"
        />
        <P>
          Ribadedeva ofrece La Franca —playa entre acantilados—, la ría de Tina Mayor en Bustio,
          la cueva del Pindal y el Desfiladero de La Hermida a unos veinte minutos. Los Picos —
          Cabrales, Cangas de Onís, Covadonga, Lagos— quedan a cuarenta y cinco o sesenta
          minutos. Para quien camina, sierra sobre el mar y montaña real cerca pesan más que en
          otras costas del arco.
        </P>
        <Foto
          src="/fotos/asturias-oriente/zona-rodiles.jpg"
          pie="Rodiles: playa larga con pinar, Villaviciosa"
        />
      </section>

      <section>
        <H2>Mercados, fiestas y calendario</H2>
        <P>
          Llanes, Ribadesella y Villaviciosa concentran mercado, comercio y mesas abiertas casi
          todo el año. Colunga y Ribadedeva viven del coche y de Llanes o Unquera cercanos. La
          sidra —llagares, Fiesta de la Manzana en Villaviciosa— y el pescado de lonja son
          gastronomía de la costa.
        </P>
        <P>
          El Descenso del Sella en Ribadesella —primer sábado de agosto— y el veraneo madrileño
          en Llanes y Ribadesella marcan el impacto al vivir: ruido, afluencia y aparcamiento
          justo semanas enteras. Las patronales locales animan cascos unos días; fuera de julio y
          agosto el oriente recupera ritmo de villa.
        </P>
        <P>
          Conviene probar la calle elegida en fiestas, en un agosto de Llanes o Ribadesella y en
          un martes de cielo cubierto —el contraste entre temporada y noviembre explica mejor la
          zona que cualquier foto de turismo—.
        </P>
        <Foto
          src="/fotos/asturias-oriente/zona-picos.jpg"
          pie="Picos de Europa, a media hora de la costa oriental"
        />
      </section>

      <section>
        <H2>Qué cuesta una casa</H2>
        <P>
          Asturias Oriente cubre franjas distintas. Villaviciosa, Ribadedeva y Colunga suelen
          leerse más contenidas; Llanes y Ribadesella, más demandadas —sobre todo en villa y
          pueblos con playa—. En Llanes, Barro, Niembro o Celorio encarecen respecto a la villa y
          a los pueblos interiores. No fijamos medias de zona: la tabla e Idealista del mes
          mandan.
        </P>
        <P>
          La franja media cambia de forma: piso en casco de Ribadesella o Llanes, casa hacia la
          ría en Villaviciosa, vivienda cerca de Lastres en Colunga, o casona de Indianos en
          Colombres. Tipologías de primera línea o con vistas al puerto mueven el precio; el
          estado de la reforma y la humedad cantábrica pesan más que una cifra única.
        </P>
        <P>
          Hay poca o ninguna obra nueva. La fibra llega en Villaviciosa, Ribadesella y Llanes; es
          parcial en Colunga y Ribadedeva. En costa abierta se revisan salitre y viento; en ría,
          humedad; en agosto, la ocupación real de la calle.
        </P>
        <TablaPrecios filas={municipiosAsturiasOriente} />
        <EnlaceIdealista ambito="zona" zonaId={zona.id} nombre={zona.zona} />
      </section>

      <section>
        <H2>Servicios, hospital, aeropuerto</H2>
        <P>
          Llanes, Ribadesella y Villaviciosa concentran tiendas, farmacia, centro de salud y
          comercio de villa. Colunga y Ribadedeva bajan a lo esencial. Servicios significa vida
          diaria dentro del municipio —tiendas, farmacia, centro de salud, súper—, no la distancia
          al hospital. Gijón cubre desde Villaviciosa; Llanes, desde Ribadedeva; Oviedo queda a
          cuarenta o setenta minutos.
        </P>
        <P>
          El Hospital del Oriente, en Arriondas —público, comarcal—, queda a unos veinte minutos
          desde Colunga y Ribadesella, y a unos treinta y cinco desde Llanes. Cabueñes, en Gijón,
          cubre a unos veinticinco desde Villaviciosa. Sierrallana, en Torrelavega, anda alrededor
          de los cuarenta y cinco desde Ribadedeva. El privado Jove queda a unos treinta desde
          Villaviciosa; desde el resto, a cuarenta y cinco o sesenta. La red queda más lejos que
          en el centro asturiano.
        </P>
        <P>
          El aeropuerto de Asturias —con Palma en verano— queda a unos cuarenta y cinco minutos
          desde Villaviciosa, sesenta desde Colunga y setenta y cinco u ochenta y cinco desde
          Ribadesella y Llanes. Santander —Palma casi todo el año— encaja mejor hacia el este: unos
          cincuenta y cinco minutos desde Ribadedeva, setenta desde Llanes, noventa desde
          Ribadesella.
        </P>
        <Foto
          src="/fotos/asturias-oriente/zona-gulpiyuri.jpg"
          pie="Gulpiyuri: playa interior circular, Llanes"
        />
      </section>

      <Encaja
        si={[
          "Se busca paisaje de sierra sobre el mar y Picos a media hora, aceptando poco sol y sanidad y aeropuerto en el límite. Ribadesella funciona como villa equilibrada; Villaviciosa, como opción práctica con Gijón y Cabueñes a veinticinco minutos —sin playa en la villa: Rodiles a unos doce minutos—.",
          "Se valora caminar ría, playa abrigada y montaña real —Fitu, Cuera, Covadonga—, con villas de piedra e Indianos y orilla más contenida hacia Villaviciosa, Ribadedeva y Colunga.",
        ]}
        no={[
          `Se necesita el cielo de Baleares: Asturias Oriente tiene ${zona.lluviaDias} días de lluvia, ${zona.despejados} despejados y ${zona.cubiertos} cubiertos, frente a ${mallorca.lluviaDias} y ${mallorca.despejados} en Mallorca. El contraste con Mallorca es fuerte.`,
          "Se busca hospital privado cerca, ciudad a menos de veinticinco minutos, obra nueva o calma en Llanes y Ribadesella en julio y agosto. Tampoco si el vuelo a Palma debe quedar a menos de cincuenta y cinco o setenta minutos desde el este.",
        ]}
        veredicto="Veredicto de zona: Asturias Oriente ofrece paisaje —montaña que cae al mar y Picos cerca—, no sol ni logística corta. Si un día los Picos pesan más que el cielo balear, Ribadesella o Villaviciosa equilibran villa y accesos; Llanes concentra villa completa a cambio de agosto lleno y Arriondas a treinta y cinco minutos; Colunga, Lastres y el Fitu con coche; Ribadedeva, Indianos y Santander a cincuenta y cinco. Antes de elegir, probaría un noviembre cubierto, un Descenso del Sella o un agosto en Llanes o Ribadesella."
      />

      <MunicipiosZonaFin
        zonaId={zona.id}
        municipios={municipiosAsturiasOriente}
        escalas={ESCALA}
      />

      <p className="mt-12 max-w-2xl text-xs text-[var(--tinta-suave)]">
        Fotos: Wikimedia Commons. Consulta la atribución y licencia en cada imagen.
      </p>
    </article>
  );
}
