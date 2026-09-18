import Encaja from "@/components/Encaja";
import Foto from "@/components/Foto";
import TablaPrecios from "@/components/TablaPrecios";
import EnlaceIdealista from "@/components/EnlaceIdealista";
import MunicipiosZonaFin from "@/components/MunicipiosZonaFin";
import { mallorca, type Zona } from "@/lib/zonas";
import { municipiosLitoralNorte } from "@/lib/municipios";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{children}</p>;
}

const ESCALA: Record<string, string> = {
  Esposende: "Villa y dunas residenciales",
  "Póvoa de Varzim": "Ciudad-balneario",
  "Vila do Conde": "Ciudad histórica junto al aeropuerto",
};

export default function RelatoLitoralNorte({ zona }: { zona: Zona }) {
  return (
    <article className="mt-8">
      <section>
        <H2>Dónde está</H2>
        <P>
          Litoral Norte es la costa llana al norte de Porto: Esposende —unos treinta y cuatro mil
          habitantes; Ofir entre pinos, Apúlia con molinos sobre las dunas, el estuario del Cávado y
          el Parque Natural do Litoral Norte—, Póvoa de Varzim —unos sesenta y tres mil;
          ciudad-balneario con casino, paseo y bloques en primera línea— y Vila do Conde —unos
          ochenta mil; casco histórico con el acueducto y el convento de Santa Clara, astilleros
          históricos y Azurara—.
        </P>
        <P>
          El metro de Porto —línea B— llega a Póvoa y Vila do Conde; la A28 lleva a Porto en unos
          treinta a cuarenta minutos; el aeropuerto de Sá Carneiro queda a quince–treinta y cinco.
          Porto —unos doscientos treinta mil habitantes, área de 1,7 millones— anda alrededor de
          cuarenta minutos en coche o sesenta–setenta en metro; Braga, a unos treinta desde
          Esposende.
        </P>
        <P>
          Portugal está entre los países más seguros del mundo; el área de Porto tiene más
          incidencia que el Minho, pero muy inferior a Palma. La población extranjera crece en el
          área metropolitana —brasileños, sobre todo—, alrededor del 5–8 %. Esposende es
          residencial y familiar; Póvoa y Vila do Conde son ciudades de playa vivas todo el año,
          con mucho veraneante de Porto en agosto. La A28 hacia Porto se congestiona en hora
          punta.
        </P>
        <Foto
          src="/fotos/litoral-norte/zona-esposende.jpg"
          pie="Esposende: villa en el estuario del Cávado"
        />
      </section>

      <section>
        <H2>El tiempo comparado con Baleares</H2>
        <P>
          Litoral Norte suma unas {zona.solHoras.toLocaleString("es-ES")} horas de sol y{" "}
          {zona.despejados} días despejados al año —el máximo de toda la tabla—, con unos{" "}
          {zona.cubiertos} cubiertos. Mallorca ronda {mallorca.solHoras.toLocaleString("es-ES")}{" "}
          horas y {mallorca.despejados} jornadas claras. De octubre a marzo llueve{" "}
          {zona.lluvia.oct_mar} días al mes y {zona.lluvia.peor} puede alcanzar{" "}
          {zona.lluvia.peor_n}.
        </P>
        <P>
          Caen unos {zona.lluviaMm.toLocaleString("es-ES")}–1.300 milímetros en {zona.lluviaDias}–
          108 días —los menos días de lluvia de la tabla—, con julio y agosto casi secos (unos dos
          días). El viento es alto: la nortada, viento norte fuerte por las tardes de junio a
          agosto. La niebla es media —nieblas de mar por la mañana en verano—.
        </P>
        <P>
          El verano ronda {zona.tempVerano} °C, con máximas alrededor de 25 °C y tres a seis días
          por encima de 30 °C. Frente a Mallorca: unas 250 horas de sol menos, unos cincuenta días
          de lluvia más de octubre a abril, y un verano igual de seco pero unos 5 °C más fresco.
        </P>
        <P>
          El agua anda entre 16 y 18 °C en agosto: fría. Mar abierto, olas y viento de tarde. Ofir
          y Esposende —estuario del Cávado, la única agua abrigada—, Apúlia, Fão, Cepães, Praia da
          Póvoa —Redonda, Salgueira, Lagoa—, Vila do Conde, Azurara —surf— y Mindelo —reserva
          ornitológica— invitan al paseo; para bañarse con calma, el estuario de Esposende y las
          piscinas.
        </P>
      </section>

      <section>
        <H2>Cómo se vive</H2>
        <P>
          Un martes de noviembre muestra escalas distintas. Póvoa y Vila do Conde alcanzan 8/10 —
          ciudades completas con hospital, metro, mercado, comercio y cultura—. Esposende cubre
          6/10: villa completa; Braga a unos treinta minutos con todo.
        </P>
        <P>
          Quien vive aquí trabaja en Porto, en Braga, en el ritmo de ciudad-balneario o en el
          veraneo que llena la orilla en agosto. Esposende —Ofir, Apúlia, Fão, Marinhas— es la
          opción residencial y tranquila; Póvoa aporta casino, paseo largo y bloques en primera
          línea; Vila do Conde, casco histórico y el aeropuerto a un cuarto de hora. La
          dependencia del coche baja a 3/10 en Póvoa y Vila do Conde gracias al metro.
        </P>
        <P>
          Conviene probar la calle elegida en un agosto de Póvoa o Vila do Conde y en un martes de
          cielo cubierto: el contraste entre temporada y noviembre explica mejor la zona que
          cualquier postal de dunas.
        </P>
        <Foto
          src="/fotos/litoral-norte/zona-ofir.jpg"
          pie="Ofir: pinos y playa en Esposende"
        />
      </section>

      <section>
        <H2>Mar, dunas y camino</H2>
        <P>
          El Parque Natural do Litoral Norte —pasarelas de madera sobre dunas, unos dieciséis
          kilómetros entre Apúlia y la Foz do Cávado— es el paseo de referencia. Los molinos de
          Apúlia marcan la postal de dunas; el estuario del Cávado en Esposende aporta la orilla
          abrigada.
        </P>
        <P>
          El paseo marítimo de Póvoa —uno de los más largos de Portugal— y el de Vila do Conde
          cierran el frente urbano. En Vila do Conde, el acueducto, Santa Clara y la Nau
          Quinhentista completan la tarde de casco; Azurara cubre surf; Mindelo, reserva
          ornitológica a unos diez minutos. Estela Golf —Póvoa, links junto al mar— queda a unos
          diez minutos desde la ciudad.
        </P>
        <Foto
          src="/fotos/litoral-norte/zona-apulia.jpg"
          pie="Apúlia: molinos sobre las dunas"
        />
        <P>
          Montaña: no. Las sierras de Rates y Franqueira son colinas de 300–400 m. Gerês queda a
          1 h 30. Es costa llana de dunas y bloques; el parecido con Mallorca es bajo en general
          (2/5) y sube en Ofir y Apúlia —casas bajas entre pinos y dunas, tipo Sa Ràpita o Es
          Trenc— (3/5).
        </P>
        <Foto
          src="/fotos/litoral-norte/zona-povoa.jpg"
          pie="Póvoa de Varzim: ciudad-balneario y paseo"
        />
      </section>

      <section>
        <H2>Mercados, fiestas y calendario</H2>
        <P>
          Póvoa y Vila do Conde resuelven mercado, comercio y mesas abiertas con ritmo de ciudad
          todo el año. Esposende mantiene villa con vida propia; Ofir y Apúlia miran a la villa o
          a Braga para el súper grande.
        </P>
        <P>
          En agosto, el veraneante de Porto llena paseos y primera línea: ruido, tráfico y
          afluencia unas semanas. El metro —línea B— y la A28 absorben parte del movimiento hacia
          Porto; aun así, conviene probar la calle elegida en temporada y en un martes gris.
          Pescado, marisco y mesa de ciudad de playa son la gastronomía del Litoral Norte.
        </P>
        <P>
          Conviene contrastar un agosto de orilla llena con un noviembre de cielo cubierto —el
          contraste explica mejor la zona que cualquier postal de casino o acueducto—.
        </P>
        <Foto
          src="/fotos/litoral-norte/zona-vila-do-conde.jpg"
          pie="Vila do Conde: casco histórico junto al Ave"
        />
      </section>

      <section>
        <H2>Qué cuesta una casa</H2>
        <P>
          Esposende ronda 2.300 €/m²; Póvoa de Varzim y Vila do Conde, 2.600. Dos habitaciones en
          la franja asequible se sitúan alrededor de 194.000–220.000 euros. Tres habitaciones en
          Esposende rondan 269.000 euros —fuera de la orilla asequible habitual; entran a unos
          cinco–diez minutos de la playa—. En Póvoa y Vila do Conde, tres habitaciones rondan
          304.000 euros —fuera de esa orilla habitual—.
        </P>
        <P>
          Hay obra nueva en los tres —mucha en Póvoa y Vila do Conde—. Fibra en los tres. En los
          frentes de mar de Póvoa y Vila do Conde predominan bloques; en Ofir y Apúlia, pinos,
          dunas y chalés o torres de los setenta.
        </P>
        <P>
          Impuestos de compra: IMT —unos 4–6 % efectivo en vivienda habitual— más Imposto do Selo
          0,8 %, notaría y registro. En costa abierta se revisan salitre y nortada; en agosto, la
          ocupación real de Póvoa y Vila do Conde.
        </P>
        <TablaPrecios filas={municipiosLitoralNorte} />
        <EnlaceIdealista ambito="zona" zonaId={zona.id} nombre={zona.zona} />
      </section>

      <section>
        <H2>Servicios, hospital, aeropuerto</H2>
        <P>
          Póvoa y Vila do Conde alcanzan 8/10; Esposende, 6/10. Servicios significa vida diaria
          dentro del municipio —tiendas, farmacia, centro de salud, súper—, no la distancia al
          hospital. La ciudad de referencia es la propia en Póvoa y Vila do Conde; desde
          Esposende, Braga a unos treinta minutos con todo, y Porto a unos treinta–cuarenta.
        </P>
        <P>
          El Hospital Póvoa de Varzim / Vila do Conde —público, comarcal— queda a unos cinco
          minutos desde Póvoa, diez desde Vila do Conde y veinticinco desde Esposende. El Hospital
          de Braga —público, de referencia— anda alrededor de treinta desde Esposende. Privados:
          CUF Porto a unos treinta desde Vila do Conde y treinta y cinco desde Póvoa; Trofa Saúde
          Braga a unos cuarenta desde Esposende; hospitales de Porto —São João, Santo António— a
          unos cuarenta. Seguro privado recomendable, como en el Alto Minho.
        </P>
        <P>
          El aeropuerto de Porto–Sá Carneiro —Palma en verano; más de ochenta destinos directos
          todo el año— queda a unos quince minutos desde Vila do Conde, veinte desde Póvoa y
          treinta y cinco desde Esposende: el mejor aeropuerto para viajar de toda la tabla, junto
          a Vigo y A Coruña en tiempos cortos. Santiago —Palma casi todo el año— a unas dos horas.
        </P>
        <Foto
          src="/fotos/litoral-norte/zona-dunas.jpg"
          pie="Parque Natural do Litoral Norte: pasarelas sobre dunas"
        />
      </section>

      <Encaja
        si={[
          "Se busca el máximo sol de la tabla (~2.550 horas y unos 85 despejados) y el mejor aeropuerto para viajar —Porto–Sá Carneiro a 15–35 minutos—, aceptando costa llana sin montaña, mar frío (16–18 °C) y nortada de tarde de junio a agosto.",
          "Se valora ciudad de playa con metro a Porto (Póvoa o Vila do Conde) o la opción residencial y tranquila de Esposende —Ofir o Apúlia, dunas y pinos—, con Braga y Porto a 30–40 minutos.",
        ]}
        no={[
          `Se necesita montaña detrás, casas bajas en el frente de mar de Póvoa o Vila do Conde, agua de mar templada o tardes de terraza sin viento en verano. Litoral Norte tiene ${zona.lluviaDias} días de lluvia y ${zona.despejados} despejados —el mejor cielo—, pero Atlántico frío y llano.`,
          "Se buscan tres habitaciones en primera línea dentro de la orilla asequible habitual, hospital privado a menos de 30–40 minutos, vuelo a Palma todo el año desde Sá Carneiro, o sanidad pública española.",
        ]}
        veredicto="Veredicto de zona: Litoral Norte gana por sol —el máximo de la tabla— y aeropuerto. Esposende —Ofir o Apúlia— es la apuesta residencial y tranquila; Póvoa, quien quiera ciudad-balneario con metro; Vila do Conde, ciudad histórica con el aeropuerto a un cuarto de hora. El precio es mar frío, nortada de tarde, sin montaña y bloques en los frentes urbanos. Antes de elegir, probaría un noviembre cubierto y un agosto en Póvoa, Vila do Conde u Ofir."
      />

      <MunicipiosZonaFin
        zonaId={zona.id}
        municipios={municipiosLitoralNorte}
        escalas={ESCALA}
      />

      <p className="mt-12 max-w-2xl text-xs text-[var(--tinta-suave)]">
        Fotos: Wikimedia Commons. Consulta la atribución y licencia en cada imagen.
      </p>
    </article>
  );
}
