import Encaja from "@/components/Encaja";
import Foto from "@/components/Foto";
import TablaPrecios from "@/components/TablaPrecios";
import EnlaceIdealista from "@/components/EnlaceIdealista";
import MunicipiosZonaFin from "@/components/MunicipiosZonaFin";
import { mallorca, type Zona } from "@/lib/zonas";
import { municipiosBarbanzaENoia } from "@/lib/municipios";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{children}</p>;
}

const ESCALA: Record<string, string> = {
  Rianxo: "Villa literaria de ría",
  Boiro: "Villa completa de ría",
  "A Pobra do Caramiñal": "Villa marinera bajo la sierra",
  Ribeira: "Villa portuaria y capital comarcal",
  "Porto do Son": "Costa atlántica y parroquias",
  Noia: "Villa histórica de ría",
};

export default function RelatoBarbanzaENoia({ zona }: { zona: Zona }) {
  return (
    <article className="mt-8">
      <section>
        <H2>Dónde está</H2>
        <P>
          Barbanza e Noia es la orilla norte de la ría de Arousa y la ría de Muros e Noia, con la
          Serra do Barbanza —una sierra de granito de unos seiscientos metros— levantada a la
          espalda de todos los pueblos. Una ría es un valle fluvial inundado por el mar: aquí Arousa
          ofrece agua calmada hacia el sur, mientras Muros e Noia abre otra lámina al oeste. Desde
          el mirador de A Curota se ven varias rías a la vez.
        </P>
        <P>
          Rianxo, Boiro y A Pobra do Caramiñal miran a Arousa. Ribeira es el gran puerto pesquero y
          la capital práctica, con hospital comarcal, dunas de Corrubedo y el dolmen de Axeitos.
          Porto do Son ya es Atlántico abierto, con el castro de Baroña sobre el mar. Noia es la
          villa histórica al fondo de la otra ría. Barbanza e Noia nombra la comarca, no un
          municipio único.
        </P>
        <P>
          Santiago queda a unos cuarenta o cincuenta minutos; Vilagarcía, al otro lado de Arousa, a
          unos veinticinco o treinta y cinco. No hay ciudad dentro de la zona: la referencia es
          Compostela. A cambio, monte real a diez minutos de casa, ría o Atlántico delante, y el
          precio más bajo de las Rías Baixas.
        </P>
        <Foto src="/fotos/barbanza-e-noia/zona-curota.jpg" pie="A Curota: la sierra mira las rías" />
      </section>

      <section>
        <H2>El tiempo comparado con Baleares</H2>
        <P>
          Barbanza e Noia suma unas {zona.solHoras.toLocaleString("es-ES")} horas de sol y{" "}
          {zona.despejados} días despejados al año. Mallorca ronda{" "}
          {mallorca.solHoras.toLocaleString("es-ES")} horas y {mallorca.despejados} jornadas
          claras. La diferencia se concentra en invierno: de octubre a marzo llueve{" "}
          {zona.lluvia.oct_mar} días al mes y {zona.lluvia.peor} puede alcanzar {zona.lluvia.peor_n}.
        </P>
        <P>
          Caen unos {zona.lluviaMm.toLocaleString("es-ES")} milímetros en {zona.lluviaDias} días.
          Ribeira ronda 1.250 milímetros y es de las franjas más secas; el resto de la comarca se
          mueve alrededor de 1.350. Sigue duplicando ampliamente los días de lluvia de Mallorca. La
          sierra puede recortar sol de tarde en invierno; la piedra y las cubiertas deben
          comprobarse después de un frente.
        </P>
        <P>
          El verano compensa: la media ronda {zona.tempVerano} °C, las máximas habituales 24 o
          25 °C y solo entre dos y seis días al año superan los 30 °C. Frente al calor sostenido
          balear se gana sueño fresco. Ribeira, A Pobra y Porto do Son reciben más viento; al fondo
          de Noia la niebla es media.
        </P>
        <P>
          La ría de Arousa alcanza unos 18-20 °C en verano y suele estar calma. El Atlántico de
          Corrubedo y Porto do Son anda entre 17 y 19 °C, con más oleaje. Sigue lejos del agua
          templada de Mallorca, pero permite baños cortos en Barraña, Tanxil o Cabío, y paseos largos
          cuando el océano no invita a entrar.
        </P>
        <p className="mt-4 max-w-2xl font-semibold text-[var(--calor)]">
          Verano suave: máximas habituales de 24–25 °C y pocas jornadas por encima de 30 °C.
        </p>
      </section>

      <section>
        <H2>Cómo se vive</H2>
        <P>
          Un martes de noviembre muestra seis escalas. Ribeira abre mercado, comercio y hospital
          dentro de una villa portuaria densa. Boiro y Noia cubren la semana básica en cascos
          caminables. A Pobra y Rianxo bajan el volumen con puerto y piedra. Porto do Son reparte la
          vida entre parroquias y costa abierta, donde el coche enlaza casi cada recado.
        </P>
        <P>
          El coche no pesa igual en todas partes. En Ribeira la dependencia es baja; en Boiro y Noia
          el centro se resuelve andando y el hospital o Santiago piden trayecto. En Porto do Son
          conducir forma parte de la jornada. Quien vive aquí trabaja en pesca, conserva, marisqueo,
          servicios y pequeño comercio: no es una costa cerrada fuera de temporada.
        </P>
        <P>
          Agosto llena Barraña, Cabío, Coroso y Portosín. El Carmen anima los puertos; San
          Bartolomeu y la Festa da Empanada ocupan Noia; las verbenas de Boiro y A Pobra llenan
          paseos. Rianxo conserva más calma literaria, aunque Tanxil también recibe veraneo. Cambia
          la cantidad de gente y el ruido, pero lonja, mercado y barcos siguen en enero.
        </P>
        <Foto src="/fotos/barbanza-e-noia/zona-barraña.jpg" pie="Barraña: ría calmada en Boiro" />
      </section>

      <section>
        <H2>Mar, ría y sierra</H2>
        <P>
          En Arousa el baño es de agua protegida: Tanxil y A Torre en Rianxo; Barraña, Carragueiros
          y Mañóns en Boiro; Cabío, A Corna y Lombiña en A Pobra; Coroso, Río Azor y Aguiño en
          Ribeira. Son arenales de marea visible y poca ola, con agua alrededor de 18-20 °C.
        </P>
        <P>
          El Atlántico cambia el registro. Corrubedo ofrece dunas, lagunas y pasarelas en parque
          natural; Area Longa, As Furnas y Aguieira, en Porto do Son, son playas largas y bravas. En
          la ría de Muros e Noia, Testal y Boa piden mirar la marea: en bajamar el fondo puede
          mostrar fango.
        </P>
        <Foto
          src="/fotos/barbanza-e-noia/zona-corrubedo.jpg"
          pie="Corrubedo: dunas y Atlántico en Ribeira"
        />
        <P>
          La Serra do Barbanza es montaña real a diez minutos: pistas, mámoas, dólmenes y A Curota
          como mirador. Las Pozas de Río Pedras, en A Pobra, dan baño de río entre granito. Neixón
          explica los castros sobre la ría; Baroña, el castro sobre el océano. Monte da Enxa mira la
          ría de Muros. Es, con el Val Miñor, de las zonas gallegas donde monte y mar se juntan sin
          viaje largo.
        </P>
        <Foto
          src="/fotos/barbanza-e-noia/zona-baroña.jpg"
          pie="Castro de Baroña: piedra sobre el Atlántico"
        />
      </section>

      <section>
        <H2>Mercados, fiestas y calendario</H2>
        <P>
          Ribeira concentra lonja, mercado y restauración alrededor del puerto. La Virxe do Carme,
          hacia el 16 de julio, baja en procesión marinera con música, cortes y mucha gente junto a
          la dársena. Quien viva cerca del recorrido nota ruido y aparcamiento difícil durante esos
          días.
        </P>
        <P>
          Noia celebra San Martiño en el calendario religioso de la villa y, en agosto, San
          Bartolomeu con la Festa da Empanada en el Campo da Feira: degustación, verbenas y casco
          lleno. Boiro y A Pobra encadenan fiestas de verano y veraneo hacia Barraña y Cabío. Rianxo
          anima el Carmen y actos ligados a su memoria literaria. Portosín y Porto do Son suman
          verbenas y tráfico hacia las playas atlánticas.
        </P>
        <P>
          Empanada, berberecho, pescado de lonja y marisqueo son gastronomía y oficio. El calendario
          corta calles y llena aparcamientos en fechas concretas; el resto del año las villas
          recuperan escala de trabajo. Conviene probar la calle elegida en una fiesta mayor y en un
          martes de noviembre.
        </P>
        <Foto
          src="/fotos/barbanza-e-noia/zona-noia-casco.jpg"
          pie="Noia: casco gótico al fondo de la ría"
        />
      </section>

      <section>
        <H2>Qué cuesta una casa</H2>
        <P>
          Rianxo ronda 1.200 €/m²; A Pobra y Noia, 1.300; Boiro y Porto do Son, 1.350; Ribeira,
          1.500. En la franja asequible, tres habitaciones se sitúan aproximadamente en 140.400
          euros en Rianxo, 152.100 en A Pobra, 158.000 en Boiro y Porto do Son, 175.500 en Ribeira y
          unos 122.800 en Noia en franja B.
        </P>
        <P>
          La franja media cambia de forma: piso en el casco de Noia o Rianxo, casa con terreno hacia
          Abanqueiro o Cespón en Boiro, vivienda bajo A Curota en A Pobra, o piso cerca de servicios
          en Ribeira. El estudio sitúa casas de piedra con finca y vistas a la ría alrededor de
          120.000-200.000 euros; pesan demasiado estado, orientación y parcela para convertir una
          media en promesa.
        </P>
        <P>
          La obra nueva es escasa o inexistente en toda la zona; conviene buscar vivienda reciente
          de décadas anteriores. La fibra llega bien salvo en parte de Porto do Son. En costa se
          revisan salitre y viento; en el casco de piedra, cubierta, humedad y aparcamiento de
          agosto.
        </P>
        <TablaPrecios filas={municipiosBarbanzaENoia} />
        <EnlaceIdealista ambito="zona" zonaId={zona.id} nombre={zona.zona} />
      </section>

      <section>
        <H2>Servicios, hospital, aeropuerto</H2>
        <P>
          Ribeira alcanza 7/10 en servicios: hospital, comercio, mercado, cine y restauración. Boiro
          y Noia llegan a 6/10; Rianxo y A Pobra, a 5/10; Porto do Son, a 4/10. Servicios significa
          vida diaria dentro del municipio, no la distancia al hospital.
        </P>
        <P>
          El Hospital do Barbanza queda a cinco minutos de Ribeira, diez de A Pobra, veinte de
          Boiro, veinticinco de Porto do Son y unos treinta de Rianxo. Noia depende del CHUS en
          Santiago, a unos cuarenta minutos. El privado —HM Rosaleda o La Esperanza— está en
          Compostela, a cuarenta y cinco o sesenta. Cumple un acceso razonable salvo Noia.
        </P>
        <P>
          Santiago-Lavacolla queda entre cuarenta y cincuenta minutos y ofrece la conexión más
          estable a Palma durante el año: junto al Salnés, el mejor acceso de las Rías Baixas. Vigo
          queda a más de una hora. La ciudad de referencia para compras grandes y especialistas es
          Santiago; Vilagarcía cubre una parte al otro lado de la ría.
        </P>
        <Foto
          src="/fotos/barbanza-e-noia/zona-axeitos.jpg"
          pie="Dolmen de Axeitos, cerca de Ribeira"
        />
      </section>

      <Encaja
        si={[
          "Se quiere monte detrás y mar delante al precio más bajo de las Rías Baixas, con verano mucho más suave que en Mallorca. Boiro y A Pobra equilibran villa, ría y sierra; Ribeira aporta hospital y capital comarcal; Rianxo, calma literaria; Noia, casco gótico; Porto do Son, Atlántico abierto.",
          "Se valora Santiago-Lavacolla a cuarenta o cincuenta minutos, con enlace a Palma casi todo el año. Incluso desde las parroquias, el Hospital do Barbanza queda alrededor de media hora salvo en Noia, donde el referente es el CHUS.",
        ]}
        no={[
          `Se necesita el cielo de Baleares: Barbanza e Noia tiene ${zona.lluviaDias} días de lluvia y ${zona.despejados} despejados, frente a ${mallorca.lluviaDias} y ${mallorca.despejados} en Mallorca. El verano es luminoso, pero el invierno exige convivir con humedad, sierra en sombra y semanas grises.`,
          "Se busca a la vez ciudad a quince minutos, hospital privado cerca y vida sin coche en toda la comarca. Santiago queda a cuarenta o cincuenta; el privado, en Compostela. Porto do Son exige coche; Ribeira da servicios a cambio de densidad portuaria.",
        ]}
        veredicto="Veredicto de zona: Boiro o A Pobra son la elección más equilibrada por ría, sierra, precio y hospital a diez o veinte minutos. Ribeira va primero si mandan servicios y sanidad a pie; Rianxo si pesan calma, literatura y el metro más barato; Noia si el casco gótico y Santiago importan más que el hospital comarcal; Porto do Son si el Atlántico debe empezar en la puerta. Antes de elegir, probaría un noviembre húmedo y la fiesta mayor de la calle concreta."
      />

      <MunicipiosZonaFin zonaId={zona.id} municipios={municipiosBarbanzaENoia} escalas={ESCALA} />

      <p className="mt-12 max-w-2xl text-xs text-[var(--tinta-suave)]">
        Fotos: Wikimedia Commons. Consulta la atribución y licencia en cada imagen.
      </p>
    </article>
  );
}
