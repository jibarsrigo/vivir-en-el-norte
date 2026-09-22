import Encaja from "@/components/Encaja";
import Foto from "@/components/Foto";
import TablaPrecios from "@/components/TablaPrecios";
import EnlaceIdealista from "@/components/EnlaceIdealista";
import MunicipiosZonaFin from "@/components/MunicipiosZonaFin";
import { mallorca, type Zona } from "@/lib/zonas";
import { municipiosPontevedraESanxenxo } from "@/lib/municipios";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{children}</p>;
}

const ESCALA: Record<string, string> = {
  Pontevedra: "Ciudad pequeña, compacta y peatonal",
  Poio: "Parroquias de ría pegadas a la ciudad",
  Sanxenxo: "Villa turística, puerto y parroquias de playa",
  "O Grove": "Villa marinera y península turística",
};

export default function RelatoPontevedraESanxenxo({ zona }: { zona: Zona }) {
  return (
    <article className="mt-8">
      <section>
        <H2>Dónde está</H2>
        <P>
          Esta zona sigue la orilla norte de la ría de Pontevedra desde la capital provincial hasta
          el Atlántico. Pontevedra ocupa el fondo de la ría, donde desemboca el río Lérez; Poio
          empieza al cruzar el puente de A Barca y reúne Combarro, Raxó, Samieira y las playas de
          Lourido. Sanxenxo abre la costa hacia Silgar, Portonovo y A Lanzada. O Grove es la
          península final, unida a tierra por el istmo arenoso de A Lanzada y asomada también a la
          ría de Arousa.
        </P>
        <P>
          Los nombres describen escalas distintas. Pontevedra es una ciudad peatonal de unos ochenta
          y cuatro mil habitantes. Poio no tiene un solo centro: San Xoán concentra servicios y
          Combarro conserva hórreos y casas marineras. Sanxenxo —San Ginés en gallego— es villa y
          municipio turístico. O Grove nombra tanto la villa portuaria como la península; A Toxa es
          la isla termal unida por puente.
        </P>
        <Foto src="/fotos/pontevedra-e-sanxenxo/poio-combarro.jpg" pie="Combarro, en Poio: piedra y ría entre la ciudad y el Atlántico" />
        <Foto
          src="/fotos/pontevedra-e-sanxenxo/zona-pontevedra-ferraria.jpg"
          pie="Praza da Leña: piedra y casas del casco histórico de Pontevedra"
        />
      </section>

      <section>
        <H2>El tiempo comparado con Baleares</H2>
        <P>
          La zona promedia unas {zona.solHoras.toLocaleString("es-ES")} horas de sol y {zona.despejados} días
          despejados, frente a {mallorca.solHoras.toLocaleString("es-ES")} horas y {mallorca.despejados} jornadas
          claras en Mallorca. La diferencia se concentra en invierno: caen unos{" "}
          {zona.lluviaMm.toLocaleString("es-ES")} milímetros durante {zona.lluviaDias} días, con trece
          o dieciséis jornadas húmedas al mes entre octubre y marzo.
        </P>
        <P>
          La costa exterior suele notar menos humedad acumulada que el fondo de la ría, pero la
          diferencia no se traduce aquí en milímetros por municipio: la cifra de zona es la
          referencia. El verano ronda {zona.tempVerano} °C, con máximas habituales cercanas a
          25–26 °C. Pontevedra ciudad puede sumar algunos días por encima de 30 °C; junto al
          Atlántico suelen ser menos. Frente a Baleares se pierde agua cálida y se ganan noches
          frescas.
        </P>
      </section>

      <section>
        <H2>Cómo se vive</H2>
        <P>
          Un martes de noviembre, Pontevedra resuelve hospital, mercado, tren y cultura caminando;
          Poio reparte la semana entre parroquias y una ciudad que queda a cinco o diez minutos.
          Portonovo mantiene lonja y comercio aun cuando se vacían los apartamentos de Sanxenxo. O
          Grove sigue oliendo a puerto y marisqueo. Los cuatro tienen vida propia, pero solo la
          capital permite prescindir realmente del coche.
        </P>
        <P>
          Agosto transforma la costa. Sanxenxo pasa de unos diecisiete mil habitantes permanentes a
          una población estacional muy superior, y la presión llega a playas, aparcamientos y
          noches. Combarro recibe excursiones; A Lanzada y O Grove concentran tráfico en el istmo.
          Pontevedra mantiene una escala urbana más estable. Elegir municipio es escoger entre
          peatonalidad, parroquia de ría, temporada intensa o península marinera.
        </P>
      </section>

      <section>
        <H2>Mar, ría y camino</H2>
        <P>
          Poio ofrece Lourido, Cabeceira, Chancelas y Raxó, playas de ría con agua calma entre 18 y
          20 °C. La senda litoral Pontevedra–Combarro recorre unos siete kilómetros junto al agua;
          detrás sube el Monte Castrove, la sierra baja de 613 metros que mira a las rías de
          Pontevedra y Arousa.
        </P>
        <P>
          Sanxenxo encadena Silgar, Areas, Canelas, Montalvo, Major y A Lanzada. Esta última es una
          lengua de dunas de unos 2,5 kilómetros abierta al Atlántico. O Grove permite cambiar de
          costa: Con Negro y Area da Cruz reciben mar abierto; Raeiros y Pipas miran al agua más
          tranquila de Arousa. El Monte Siradella, de 167 metros, explica la forma completa de la
          península.
        </P>
        <Foto src="/fotos/pontevedra-e-sanxenxo/sanxenxo-lanzada.jpg" pie="A Lanzada, arenal e istmo entre Sanxenxo y O Grove" />
        <Foto
          src="/fotos/pontevedra-e-sanxenxo/zona-lanzada-istmo.jpg"
          pie="El istmo de A Lanzada une Sanxenxo con la península de O Grove"
        />
        <Foto
          src="/fotos/pontevedra-e-sanxenxo/zona-combarro-ria.jpg"
          pie="Combarro desde la ría: hórreos y casas marineras sobre el agua"
        />
      </section>

      <section>
        <H2>Mercados, fiestas y calendario</H2>
        <P>
          Pontevedra vive A Peregrina desde el segundo sábado de agosto y la Feira Franca el primer
          fin de semana de septiembre: conciertos, feria y calles tomadas en el centro. Poio celebra
          San Xoán el 24 de junio y el Carmen en sus núcleos marineros el 16 de julio. Combarro añade
          a esas fechas su afluencia diaria de verano.
        </P>
        <P>
          Portonovo celebra San Roque del 14 al 19 de agosto y la Festa da Raia el día 17; Sanxenxo
          reúne Santa Rosalía y el Carmen alrededor del 4 y 5 de septiembre. O Grove convierte el
          puerto en gran comedor durante la Festa do Marisco, en la primera quincena de octubre.
          Cerca de estos recorridos hay música, cortes y aparcamiento difícil. La mesa común es la
          ría: mejillón de batea, almeja, pulpo y pescado de lonja.
        </P>
        <Foto
          src="/fotos/pontevedra-e-sanxenxo/zona-grove-bateas.jpg"
          pie="Bateas frente a O Grove: el mejillón como paisaje y trabajo"
        />
      </section>

      <section>
        <H2>Qué cuesta una casa</H2>
        <P>
          El mercado dibuja un contraste claro: Pontevedra y Poio se mueven en la franja más
          asequible de la zona; Sanxenxo concentra la demanda turística y la orilla más cara; O
          Grove queda entre ambos, más asequible cuanto más se aleja del frente demandado. Una casa
          con vistas en Raxó o Samieira entra en franja media, muy dependiente de terreno, acceso y
          reforma. Los números concretos cambian con el anuncio: la tabla y Idealista mandan.
        </P>
        <P>
          Hay obra nueva en Pontevedra, Poio y Sanxenxo; poca en O Grove. En ciudad pesan piso y
          casco; en Poio, parroquia y acceso; en Sanxenxo y O Grove, temporada, salitre y distancia
          a la primera línea.
        </P>
        <TablaPrecios filas={municipiosPontevedraESanxenxo} />
        <EnlaceIdealista ambito="zona" zonaId={zona.id} nombre={zona.zona} />
      </section>

      <section>
        <H2>Servicios, hospital, aeropuerto</H2>
        <P>
          Pontevedra concentra hospitales, universidad, tren, mercado y cultura: es la única
          escala de la zona donde la vida diaria cabe a pie. Poio cubre lo básico y tiene la capital
          a cinco o diez minutos. Sanxenxo y O Grove resuelven compra, salud primaria, colegio y
          restauración durante todo el año, aunque dependen de Pontevedra o Vilagarcía para
          especialidades y compras mayores.
        </P>
        <P>
          Montecelo y Quirónsalud están a unos cinco minutos desde Pontevedra y diez desde Poio.
          Sanxenxo tarda entre veinte y veinticinco. O Grove tiene el Hospital do Salnés a treinta y
          el privado de Pontevedra a cuarenta y cinco. Vigo-Peinador queda a veinticinco minutos de
          Pontevedra y Poio, cincuenta de Sanxenxo y sesenta de O Grove; Santiago ofrece la conexión
          más continua con Palma a unos cincuenta o sesenta minutos.
        </P>
      </section>

      <Encaja
        si={[
          "Se quiere escoger entre una ciudad peatonal completa y una costa de ría cercana. Pontevedra resuelve hospital, tren y cultura; Poio añade piedra, playa y monte a cinco o diez minutos; Sanxenxo concentra el abanico de arenales de Silgar a A Lanzada; O Grove aporta marisqueo, Arousa y una península para caminar.",
          "Se busca verano más fresco que en Mallorca. El agua está entre 17 y 20 °C y las noches refrescan; la costa exterior suele sentirse menos húmeda que el fondo de la ría.",
        ]}
        no={[
          `Se necesita el cielo balear: aquí hay unos ${zona.lluviaDias} días de lluvia y ${zona.despejados} despejados frente a ${mallorca.despejados} en Mallorca. Pontevedra y Poio exigen revisar humedad y orientación, aunque el verano sea amable.`,
          "Se quieren a la vez silencio de agosto, playa a pie, tres habitaciones asequibles y hospital inmediato. Sanxenxo da playa pero recibe multitud y tiene la vivienda más cara; O Grove da mar pero queda a treinta minutos del hospital; Pontevedra resuelve sanidad sin playa urbana; Poio es el compromiso, no la suma perfecta.",
        ]}
        veredicto="Veredicto de zona: Poio encaja si se quieren ría, casa y Pontevedra a pocos minutos; la capital, si mandan vida peatonal y hospital; Sanxenxo, si playa y mercado turístico justifican precio y agosto; O Grove, si se acepta más distancia al hospital para ganar península, marisqueo y dos costas. En Poio conviene mirar Lourido o San Xoán para lo práctico y Raxó o Samieira para paisaje, siempre después de probar tráfico y humedad."
      />

      <MunicipiosZonaFin zonaId={zona.id} municipios={municipiosPontevedraESanxenxo} escalas={ESCALA} />
      <p className="mt-12 max-w-2xl text-xs text-[var(--tinta-suave)]">Fotos: Wikimedia Commons. Consulta la atribución y licencia en cada imagen.</p>
    </article>
  );
}
