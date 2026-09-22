import Encaja from "@/components/Encaja";
import Foto from "@/components/Foto";
import TablaPrecios from "@/components/TablaPrecios";
import EnlaceIdealista from "@/components/EnlaceIdealista";
import MunicipiosZonaFin from "@/components/MunicipiosZonaFin";
import { mallorca, type Zona } from "@/lib/zonas";
import { municipiosAltoMinho } from "@/lib/municipios";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{children}</p>;
}

const ESCALA: Record<string, string> = {
  Valença: "Fortaleza frente a Tui",
  "Vila Nova de Cerveira": "Villa fluvial y arte",
  Caminha: "Villa en la boca del Miño",
  "Moledo (Caminha)": "Pinar y playa elegante",
  "Vila Praia de Âncora (Caminha)": "Villa marinera abrigada",
  "Afife-Carreço (Viana)": "Aldea de granito entre monte y mar",
  "Viana do Castelo": "Ciudad del Lima",
  "Ponte de Lima": "Villa romana sobre el Lima",
};

export default function RelatoAltoMinho({ zona }: { zona: Zona }) {
  return (
    <article className="mt-8">
      <section>
        <H2>Dónde está</H2>
        <P>
          Alto Minho es el norte de Portugal entre el Miño y Viana do Castelo —unos noventa mil
          habitantes en el concelho—, con la Serra d&apos;Arga (825 m) plantada entre el río y el
          mar. No es una sola escala: hay fortaleza frente a Tui en Valença, villa fluvial y de
          arte en Vila Nova de Cerveira, villa en la boca del Miño en Caminha, pinar y playa
          elegante en Moledo, villa marinera abrigada en Vila Praia de Âncora, aldeas de granito
          entre monte y mar en Afife-Carreço, ciudad del Lima en Viana y villa romana sobre el
          Lima en Ponte de Lima.
        </P>
        <P>
          En la costa se suceden Afife, Carreço y Areosa —granito, viñas en pérgola, huertas—, las
          villas de veraneo de Moledo y Vila Praia de Âncora, la desembocadura del Miño en Caminha
          y la ciudad de Viana, con la basílica de Santa Luzia encima. En el río, la fortaleza
          abaluartada de Valença mira a Tui y Cerveira aporta castillo, Bienal de Arte y praia
          fluvial. Tierra adentro, Ponte de Lima —la villa más antigua de Portugal— cruza el Lima
          por su puente romano-medieval.
        </P>
        <P>
          Portugal está entre los cinco o siete países más seguros del mundo; el norte es la
          región más tranquila del país. Muchos portugueses entienden el castellano y lo hablan.
          El coste de vida —restaurantes, vino, pescado, servicios, seguros— es inferior al de
          Galicia; la cesta del supermercado se parece (Mercadona, Lidl, Continente, Pingo Doce).
          Braga queda a unos cincuenta minutos desde Ponte de Lima y Viana; Porto, a una hora.
        </P>
        <Foto
          src="/fotos/alto-minho/zona-valenca.jpg"
          pie="Valença: fortaleza frente a Tui"
        />
      </section>

      <section>
        <H2>El tiempo comparado con Baleares</H2>
        <P>
          Alto Minho suma unas {zona.solHoras.toLocaleString("es-ES")} horas de sol y{" "}
          {zona.despejados} días despejados al año —en la franja de 2.400 a 2.500 horas y unos 78 a
          80 despejados; 2.500 en la costa (Caminha, Moledo, Âncora, Afife, Viana) y algo menos en
          el río y el interior—. Cielo alto de sol, junto con el Litoral Norte.
          Mallorca ronda {mallorca.solHoras.toLocaleString("es-ES")} horas y {mallorca.despejados}{" "}
          jornadas claras. De octubre a marzo llueve {zona.lluvia.oct_mar} días al mes y{" "}
          {zona.lluvia.peor} puede alcanzar {zona.lluvia.peor_n}.
        </P>
        <P>
          Caen unos {zona.lluviaMm.toLocaleString("es-ES")} milímetros en {zona.lluviaDias} días,
          con unos {zona.cubiertos} cubiertos. En verano llueve {zona.lluvia.verano}{" "}
          días al mes: julio y agosto casi tan secos como en Mallorca. El viento es alto en la
          costa —la nortada, viento norte fuerte por las tardes de junio a agosto, marcado en
          Moledo, Afife y Viana— y bajo en el río. La niebla es media; en Ponte de Lima, niebla
          alta de valle en invierno.
        </P>
        <P>
          El verano en la costa ronda {zona.tempVerano} °C, con tres a seis días por encima de 30
          °C. En Ponte de Lima y Valença la media sube a 21–21,5 °C y hay unos 20 a 25 días por
          encima de 30 °C —el calor de valle que muchos dejan atrás—. Frente al calor sostenido
          balear, la costa se duerme fresca; el interior, no.
        </P>
        <P>
          El agua anda entre 16 y 18 °C en agosto: la más fría de la tabla. Moledo —dunas, pinar,
          Forte da Ínsua enfrente—, Vila Praia de Âncora —tramo abrigado por el espigón—, Gelfa,
          Afife, Paçô y Carreço, Praia Norte y Cabedelo en Viana, y Foz do Minho en Caminha
          invitan al paseo; para bañarse con más calma, el espigón de Âncora o las praias
          fluviales de Cerveira y Ponte de Lima. Quien quiera agua templada cruza a Cesantes o a
          la ría de Vigo —unos 40 a 60 minutos desde Valença—.
        </P>
        {zona.calorAprieta ? (
          <p className="mt-4 max-w-2xl font-semibold text-[var(--calor)]">
            El calor aprieta en {zona.calorAprieta} en el interior (Ponte de Lima, Valença). En la
            costa, verano fresco alrededor de 20,5 °C y apenas tres a seis días por encima de 30
            °C.
          </p>
        ) : null}
      </section>

      <section>
        <H2>Cómo se vive</H2>
        <P>
          Un martes de noviembre muestra escalas muy distintas. Viana es ciudad completa: comercio,
          hospital, tren, cultura, mercado y paseo. Valença, Vila Praia de Âncora y Ponte de Lima
          mantienen villa con lo esencial. Cerveira y Caminha cubren plaza y lo básico. Moledo y
          Afife-Carreço son aldeas: Viana o Âncora a unos 10 a 15 minutos.
        </P>
        <P>
          Quien vive aquí trabaja en Viana, en Braga, en Porto, en el ritmo de villa fluvial o
          marinera, o en el veraneo de Porto y Braga que llena Moledo y Âncora en agosto. Las
          aldeas de granito mantienen huerta y viña; Caminha y Cerveira, plaza y río; Viana,
          ciudad limpia y culta. El Camino Portugués de la Costa pasa por todos los pueblos
          costeros todo el año. La población extranjera anda entre el 3 y el 5 % —en Viana, algo
          de comunidad brasileña y de residentes europeos—.
        </P>
        <P>
          El distrito de Viana es de los más tranquilos de Portugal. El tráfico es ligero salvo la
          N-13 en verano. Conviene probar la calle elegida en un agosto de Moledo o Âncora y en un
          martes de cielo cubierto: el contraste entre temporada y noviembre explica mejor la zona
          que cualquier foto de Santa Luzia.
        </P>
        <Foto
          src="/fotos/alto-minho/zona-caminha.jpg"
          pie="Caminha: villa en la desembocadura del Miño"
        />
      </section>

      <section>
        <H2>Mar, río y camino</H2>
        <P>
          Moledo aporta playa larga con dunas, pinar y viento —kite, surf— y el Forte da Ínsua con
          Santa Trega enfrente. Vila Praia de Âncora une puerto, fortaleza de Lagarteira y el
          tramo abrigado por el espigón —la mejor orilla para bañarse con calma de la zona—; Gelfa
          añade pinar y dunas. Afife y Paçô cubren surf; Carreço, farol y molinos de Montedor.
          Viana suma Praia Norte —piscinas de marea— y Cabedelo —surf, kite— al otro lado del
          Lima. Foz do Minho, en Caminha, es estuario más templado.
        </P>
        <P>
          En el río, Cerveira y Ponte de Lima tienen praia fluvial. La fortaleza de Valença se
          pasea por los baluartes; la Ecopista do Minho une Valença y Monção en quince kilómetros
          llanos. La Ecovia do Litoral Norte —pasarelas de madera— enlaza Viana y Caminha; la
          Ecovia do Lima y las Lagoas de Bertiandos completan el arco interior.
        </P>
        <Foto
          src="/fotos/alto-minho/zona-moledo.jpg"
          pie="Moledo: pinar, dunas y playa atlántica"
        />
        <P>
          La Serra d&apos;Arga —Santo João d&apos;Arga, aldeas de piedra, caballos— se sube desde
          Âncora, Caminha o Carreço. El Monte de Santa Luzia, en Viana —basílica, funicular,
          citania celta—, es una de las vistas de mar más citadas de Portugal. Termas de Monção y
          Melgaço quedan a 30–45 minutos desde Valença; Gerês, a 1 h 15 desde Ponte de Lima. Golf:
          Axis Golfe Ponte de Lima. Es zona con monte de verdad detrás de casa en toda la costa
          (Arga) y de granito.
        </P>
        <Foto
          src="/fotos/alto-minho/zona-ancora.jpg"
          pie="Vila Praia de Âncora: villa marinera y playa abrigada"
        />
      </section>

      <section>
        <H2>Mercados, fiestas y calendario</H2>
        <P>
          Viana resuelve mercado, comercio y mesas abiertas con ritmo de ciudad todo el año.
          Âncora, Valença y Ponte de Lima mantienen villa con vida propia; Caminha y Cerveira,
          plaza y río. Moledo y Afife-Carreço miran a Âncora o Viana para el súper y la farmacia.
        </P>
        <P>
          En Ponte de Lima, las Feiras Novas de septiembre y el Festival de Jardines llenan la
          villa: ruido, afluencia y aparcamiento justo unos días. En Cerveira, la Bienal de Arte
          marca el calendario cultural. En Moledo y Âncora, el veraneo de Porto y Braga en agosto
          corta calles y llena la orilla. El Camino Portugués de la Costa trae un flujo constante de
          peregrinos todo el año. Pescado, vino verde y la mesa de villa son gastronomía del Alto
          Minho.
        </P>
        <P>
          Conviene probar la calle elegida en fiestas, en un agosto de costa y en un martes de
          cielo cubierto —el contraste entre temporada y noviembre explica mejor la zona que
          cualquier foto de Arga—.
        </P>
        <Foto
          src="/fotos/alto-minho/zona-viana.jpg"
          pie="Viana do Castelo: ciudad del Lima y Santa Luzia"
        />
      </section>

      <section>
        <H2>Qué cuesta una casa</H2>
        <P>
          Alto Minho cubre franjas distintas. Valença, Cerveira y Ponte de Lima suelen situarse en
          el tramo más contenido —río e interior sin playa marítima—. En costa, Caminha y Moledo
          quedan en franja media; Vila Praia de Âncora y Viana, en orillas más altas. Afife-Carreço
          no tiene precio de metro fiable en capa: el mercado es estrecho y hay que mirar anuncio a
          anuncio, sin inventar una cifra. Los números de los municipios con dato están en la
          tabla; tipología y reforma pesan más que cualquier media de metro.
        </P>
        <P>
          En el interior aparecen quintas con viñedo y casas de granito rehabilitada con terreno
          en Afife, Carreço o Areosa —el precio lo marca el estado de la piedra y el tamaño del
          solar, no una media de zona—. Obra nueva hay en Viana y Valença; poca en el resto;
          ninguna en Moledo. Fibra en todos —Afife-Carreço, parcial—.
        </P>
        <P>
          Impuestos de compra: IMT —unos 4–6 % efectivo en vivienda habitual— más Imposto do Selo
          0,8 %, notaría y registro. En costa abierta se revisan salitre y nortada; en valle,
          humedad y calor de julio–agosto; en agosto, la ocupación real de Moledo y Âncora.
        </P>
        <TablaPrecios filas={municipiosAltoMinho} />
        <EnlaceIdealista ambito="zona" zonaId={zona.id} nombre={zona.zona} />
      </section>

      <section>
        <H2>Servicios, hospital, aeropuerto</H2>
        <P>
          Viana cubre la vida diaria de ciudad. Valença, Âncora y Ponte de Lima mantienen villa con
          lo esencial; Cerveira y Caminha, plaza y lo básico; Moledo y Afife-Carreço miran a Âncora
          o Viana para súper y farmacia. Servicios significa vida diaria dentro del municipio —
          tiendas, farmacia, centro de salud, súper—, no la distancia al hospital. Viana es la
          ciudad de referencia a unos 10–15 minutos desde Afife-Carreço, 20 desde Âncora, 30 desde
          Caminha y Cerveira, 25–30 desde Ponte de Lima.
        </P>
        <P>
          El Hospital de Santa Luzia —Viana, público, ULSAM— queda a unos 5 minutos desde Viana, 15
          desde Afife-Carreço, 20 desde Âncora, 25 desde Moledo y 30 desde Caminha. El Hospital
          Conde de Bertiandos —Ponte de Lima, público, comarcal— anda alrededor de 5 minutos desde
          Ponte de Lima, 35 desde Cerveira y 40 desde Valença. Privados: Trofa Saúde en Braga (40
          desde Ponte de Lima, 50 desde Viana, 60 desde Afife); CUF Porto a 1 h. Desde Valença y
          Cerveira, Álvaro Cunqueiro —Vigo— queda a 35–45 minutos, pero como no residente en
          España solo para urgencias con la tarjeta europea o pagando. Conviene un seguro privado
          portugués con red en Viana, Braga y Porto.
        </P>
        <P>
          El aeropuerto de Porto–Sá Carneiro —Palma en verano; más de 80 destinos directos— queda
          a unos 50 minutos desde Viana, 55 desde Afife y Ponte de Lima, 60 desde Caminha, Moledo
          y Âncora, 75 desde Cerveira. Vigo anda alrededor de 35 desde Valença y 45 desde Cerveira
          —Palma en verano—. Santiago —Palma casi todo el año— a 90–115 minutos: a menudo el
          acceso a Palma más estable fuera de temporada, sin sustituir Porto para el resto de
          viajes.
        </P>
        <Foto
          src="/fotos/alto-minho/zona-arga.jpg"
          pie="Serra d'Arga entre el río y el mar"
        />
      </section>

      <Encaja
        si={[
          "Pesan un cielo alto de sol (~2.500 horas y unos 80 despejados), aldea de granito con monte y mar en Afife-Carreço —Viana a 10–15 minutos— o villa marinera con playa abrigada en Vila Praia de Âncora, aceptando mar frío (16–18 °C), nortada de tarde y seguro privado portugués.",
          "Se valora país muy seguro, coste de vida inferior al de Galicia, Porto a una hora y precio más contenido en el interior —Valença, Cerveira, Ponte de Lima—, con un pie en cada orilla del Miño si se elige la fortaleza frente a Tui.",
        ]}
        no={[
          `Se necesita agua de mar templada, tardes de terraza sin nortada de junio a agosto en la costa, o hospital privado a menos de 40–60 minutos. Alto Minho tiene ${zona.lluviaDias} días de lluvia y ${zona.despejados} despejados —cielo alto frente a Galicia, pero mar atlántico frío—.`,
          "Se buscan tres habitaciones en primera línea de Moledo o Âncora dentro de la franja asequible habitual, verano suave en Ponte de Lima o Valença —20–25 días > 30 °C—, casas bajas en el centro de Viana, el régimen fiscal especial para residentes extranjeros —cerrado en 2024—, o trámites y papeleo en castellano sin esfuerzo (NIF, Finanças, matriculación).",
        ]}
        veredicto="Veredicto de zona: Alto Minho destaca por sol —junto con el Litoral Norte—, granito, monte detrás de la costa (Arga) y precio contenido en río e interior. Afife, Carreço o Areosa —aldea con mar a pocos minutos y Viana cerca— o Vila Praia de Âncora —villa con servicios y playa abrigada— encajan en costa; Valença, quien quiera un pie en cada país. El peaje es sanidad privada, papeleo portugués y nortada de tarde a comprobar en persona en julio. Antes de elegir, probar un noviembre cubierto y un agosto en Moledo, Âncora o Afife."
      />

      <MunicipiosZonaFin
        zonaId={zona.id}
        municipios={municipiosAltoMinho}
        escalas={ESCALA}
      />

      <p className="mt-12 max-w-2xl text-xs text-[var(--tinta-suave)]">
        Fotos: Wikimedia Commons. Consulta la atribución y licencia en cada imagen.
      </p>
    </article>
  );
}
