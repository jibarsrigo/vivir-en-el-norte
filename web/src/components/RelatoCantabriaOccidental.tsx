import Encaja from "@/components/Encaja";
import Foto from "@/components/Foto";
import TablaPrecios from "@/components/TablaPrecios";
import EnlaceIdealista from "@/components/EnlaceIdealista";
import MunicipiosZonaFin from "@/components/MunicipiosZonaFin";
import { mallorca, type Zona } from "@/lib/zonas";
import { municipiosCantabriaOccidental } from "@/lib/municipios";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{children}</p>;
}

const ESCALA: Record<string, string> = {
  "San Vicente de la Barquera": "Villa marinera y ría",
  Comillas: "Villa modernista",
  Suances: "Villa-playa",
  "Liencres (Piélagos)": "Urbanización junto a dunas",
  Santander: "Ciudad de bahía",
};

export default function RelatoCantabriaOccidental({ zona }: { zona: Zona }) {
  return (
    <article className="mt-8">
      <section>
        <H2>Dónde está</H2>
        <P>
          Cantabria Occidental cubre la costa desde la ría de San Vicente de la Barquera hasta la
          bahía de Santander: playas grandes, acantilados, el Parque Natural de las Dunas de
          Liencres y la Costa Quebrada —acantilados y plataformas rocosas del geoparque—, y
          detrás la primera línea de los Picos de Europa. No es una franja anónima de bloques: es
          villa marinera, villa modernista, villa-playa, urbanización de casas bajas junto a
          dunas y, al este, una capital completa.
        </P>
        <P>
          San Vicente de la Barquera es villa marinera con castillo, puente de la Maza —el
          viaducto sobre la ría— y Merón y Oyambre a un paso. Comillas es villa modernista: El
          Capricho de Gaudí, el palacio de Sobrellano y la Universidad Pontificia. Suances es
          villa-playa junto a Torrelavega —unos cincuenta y dos mil habitantes—, con La Concha y
          Los Locos. Liencres, en el municipio de Piélagos —con Mortera, Boo y Mogro—, es
          urbanización de casas bajas junto a las dunas. Santander —unos ciento setenta y tres
          mil habitantes— es capital elegante de bahía, con el hospital Valdecilla y el
          aeropuerto a unos diez minutos del centro.
        </P>
        <P>
          Es la zona que mejor cumple hospital, aeropuerto y seguridad de toda la tabla —y la de
          sol más bajo, junto con el oriente cántabro—. Los Picos quedan a unos sesenta minutos
          —Potes, Fuente Dé—; Santillana del Mar y Altamira, a diez o quince desde Suances y
          Comillas.
        </P>
        <Foto
          src="/fotos/cantabria-occidental/zona-san-vicente.jpg"
          pie="San Vicente de la Barquera: ría, villa y Picos al fondo"
        />
      </section>

      <section>
        <H2>El tiempo comparado con Baleares</H2>
        <P>
          Cantabria Occidental suma unas {zona.solHoras.toLocaleString("es-ES")} horas de sol y{" "}
          {zona.despejados} días despejados al año —en la franja de 1.680 a 1.700 horas y unos 38
          a 40 despejados, el mínimo de la tabla junto con Asturias Oriente—. Mallorca ronda{" "}
          {mallorca.solHoras.toLocaleString("es-ES")} horas y {mallorca.despejados} jornadas
          claras. La diferencia se concentra en el cielo cubierto: de octubre a marzo llueve{" "}
          {zona.lluvia.oct_mar} días al mes y {zona.lluvia.peor} puede alcanzar{" "}
          {zona.lluvia.peor_n}.
        </P>
        <P>
          Caen unos {zona.lluviaMm.toLocaleString("es-ES")} milímetros en {zona.lluviaDias} días —
          en la franja de 1.150 a 1.200 mm y 148 a 152 días—, con unos {zona.cubiertos} cubiertos.
          También en verano llueve {zona.lluvia.verano} días al mes. El viento es medio; la niebla
          es baja.
        </P>
        <P>
          El verano es fresco: la media ronda {zona.tempVerano} °C, las máximas habituales unos
          24 °C y apenas dos a seis días superan los 30 °C —con viento sur, el «ábrego», pueden
          llegar puntas de 35 °C que duran uno o dos días—. Frente al calor sostenido balear se
          duerme fresco —y se acepta uno de los cielos más opuestos a Mallorca de toda la tabla—.
        </P>
        <P>
          El agua anda entre 19 y 21 °C en agosto. Merón, Oyambre, Comillas, La Concha, Los Locos,
          Valdearenas, Canallave, el Sardinero o la Magdalena invitan al paseo y al baño cuando el
          mar lo permite; las playas son grandes, abiertas y con oleaje. Para bañarse con más
          calma, la bahía de Santander y el Sardinero en días de mar llana.
        </P>
        <p className="mt-4 max-w-2xl font-semibold text-[var(--calor)]">
          Verano fresco: media alrededor de 20 °C y apenas dos a seis días por encima de 30 °C.
        </p>
      </section>

      <section>
        <H2>Cómo se vive</H2>
        <P>
          Un martes de noviembre muestra escalas muy distintas. Santander resuelve todo a pie —
          servicios 10/10—. Liencres alcanza 7/10: centro de salud, supermercados y farmacias en
          Liencres y Mortera; Renedo —capital de Piélagos— y Bezana a unos diez minutos; Santander
          a unos quince. Suances cubre 6/10 —villa con lo básico; Torrelavega a quince minutos con
          todo—. San Vicente baja a 5/10; Comillas, a 4/10 —villas turísticas de tamaño pequeño,
          comercio muy estacional—.
        </P>
        <P>
          Quien vive aquí trabaja en la capital, en Torrelavega, en servicios de villa o en el
          ritmo de veraneo cántabro y madrileño. Liencres y Mortera son residenciales de clase
          media santanderina, con muchas familias y residentes de larga estancia. Suances mantiene
          vida de villa todo el año. Comillas y San Vicente se llenan en julio y agosto —ruido,
          tráfico, afluencia— y recuperan calma de octubre a junio. Santander es ciudad burguesa,
          limpia y cara.
        </P>
        <P>
          Las patronales locales y el verano en la orilla cortan calles y llenan cascos unos días
          o semanas: conviene probar esas fechas, no solo un martes gris. Piélagos registra la
          tasa de criminalidad más baja de todos los municipios medidos en la tabla —31 por mil;
          criminalidad convencional 16—: el dato de seguridad más sólido del estudio.
        </P>
        <Foto
          src="/fotos/cantabria-occidental/zona-comillas.jpg"
          pie="Comillas: villa modernista frente al Cantábrico"
        />
      </section>

      <section>
        <H2>Mar, dunas y camino</H2>
        <P>
          En San Vicente, la ría con los Picos al fondo —la postal más citada de Cantabria—, el
          puente de la Maza, Merón —playa de unos cuatro kilómetros— y Oyambre —parque natural—
          cubren orilla y paseo. Comillas aporta playa a dos minutos del casco, Oyambre cercano y
          Santillana del Mar a unos quince minutos. Suances une La Concha —larga, familiar—, Los
          Locos —surf—, el puerto en la ría de San Martín de la Arena y la Punta del Dichoso.
        </P>
        <P>
          Liencres es el corazón de dunas y acantilado: Parque Natural de las Dunas, Valdearenas,
          Canallave, Portío, Somocuevas y la Costa Quebrada —Los Urros, geoparque, senda costera—.
          Santander suma el Sardinero, la península de la Magdalena, Cabo Mayor, Mataleñas y el
          paseo de Pereda sobre la bahía.
        </P>
        <Foto
          src="/fotos/cantabria-occidental/zona-suances.jpg"
          pie="Suances: villa-playa y orilla abierta"
        />
        <P>
          Los Picos quedan a unos sesenta minutos; Cabárceno —parque de la naturaleza—, a unos
          veinte desde Santander. Hay golf en Abra del Pas —Mogro, Piélagos—, Santa Marina —San
          Vicente—, Mataleñas y Pedreña. Balnearios en Puente Viesgo y Liérganes a unos treinta
          minutos. Para un caminante de costa y dunas es una de las orillas más completas de la
          tabla; la montaña real no queda detrás de casa en Liencres ni en Santander —la costa es
          llana—, sino a una hora.
        </P>
        <Foto
          src="/fotos/cantabria-occidental/zona-liencres.jpg"
          pie="Dunas de Liencres y Costa Quebrada"
        />
      </section>

      <section>
        <H2>Mercados, fiestas y calendario</H2>
        <P>
          Santander concentra mercado, comercio, cultura y mesas abiertas todo el año. Suances y
          Liencres resuelven el día a día con apoyo de Torrelavega o Bezana. Comillas y San
          Vicente viven del verano: en temporada alta el casco se llena de veraneantes; fuera de
          julio y agosto el ritmo baja y el comercio se estrecha.
        </P>
        <P>
          Las patronales de cada villa y el veraneo en Comillas, San Vicente, Suances y el
          Sardinero marcan el impacto al vivir: ruido, afluencia y aparcamiento justo semanas
          enteras. El pescado de lonja, el cocido montañés y la orilla de ría y bahía son
          gastronomía de la costa.
        </P>
        <P>
          Conviene probar la calle elegida en fiestas, en un agosto de Comillas o San Vicente y en
          un martes de cielo cubierto —el contraste entre temporada y noviembre explica mejor la
          zona que cualquier postal de ría con Picos—.
        </P>
        <Foto
          src="/fotos/cantabria-occidental/zona-sardinero.jpg"
          pie="El Sardinero y la bahía de Santander"
        />
      </section>

      <section>
        <H2>Qué cuesta una casa</H2>
        <P>
          Cantabria Occidental cubre franjas distintas. Suances y Liencres rondan 2.000 €/m²; San
          Vicente, 2.100; Comillas, 2.400; Santander, 2.600. Tres habitaciones en la franja
          asequible se sitúan alrededor de 234.000 euros en Suances y Liencres, y unos 246.000 en
          San Vicente. En Comillas y Santander la tipología de tres habitaciones queda por encima
          de la orilla habitual asequible de la tabla; en Santander, dos habitaciones ronda unos
          220.000 euros.
        </P>
        <P>
          La franja media cambia de forma: piso en ensanche o cerca del Sardinero en Santander,
          casa baja en urbanización de Liencres o Mortera, vivienda de villa en Suances, o piso
          en casco de San Vicente o Comillas. Tipologías modernistas o de primera línea mueven el
          precio; el estado de la reforma y la humedad cantábrica pesan más que una cifra única.
        </P>
        <P>
          Hay obra nueva en Piélagos —municipio en crecimiento— y en Santander; poca en el resto.
          La fibra llega en los cinco. En costa abierta se revisan salitre y viento; en ría,
          humedad; en agosto, la ocupación real de la calle.
        </P>
        <TablaPrecios filas={municipiosCantabriaOccidental} />
        <EnlaceIdealista ambito="zona" zonaId={zona.id} nombre={zona.zona} />
      </section>

      <section>
        <H2>Servicios, hospital, aeropuerto</H2>
        <P>
          Santander alcanza 10/10; Liencres, 7/10; Suances, 6/10; San Vicente, 5/10; Comillas,
          4/10. Servicios significa vida diaria dentro del municipio —tiendas, farmacia, centro de
          salud, súper—, no la distancia al hospital. Santander es la ciudad de referencia a unos
          quince o veinte minutos desde Liencres, treinta desde Suances, cuarenta y cinco o
          cincuenta y cinco desde Comillas y San Vicente; Torrelavega cubre a quince desde
          Suances.
        </P>
        <P>
          Valdecilla —Santander, público, de referencia nacional— queda a unos cinco minutos desde
          Santander, quince desde Liencres y treinta desde Suances. Sierrallana —Torrelavega,
          público— anda alrededor de los quince desde Suances, treinta desde Comillas y cuarenta
          desde San Vicente. Privados: Clínica Mompía —Bezana— a unos diez desde Liencres y
          quince desde Suances; Santa Clotilde —Santander— a unos cinco. Cumple el deseable de
          treinta minutos en Santander, Liencres, Suances y Comillas; San Vicente queda en unos
          cuarenta.
        </P>
        <P>
          El aeropuerto de Santander–Seve Ballesteros —con Palma casi todo el año— queda a unos
          diez minutos desde Santander, quince desde Liencres, veinte desde Suances, cuarenta
          desde Comillas y cuarenta y cinco desde San Vicente. Es, con Bilbao, el mejor acceso a
          Palma de toda la tabla.
        </P>
        <Foto
          src="/fotos/cantabria-occidental/zona-oyambre.jpg"
          pie="Oyambre: parque natural entre San Vicente y Comillas"
        />
      </section>

      <Encaja
        si={[
          "Se busca la mejor combinación de hospital, aeropuerto con Palma casi todo el año y seguridad de toda la tabla —Valdecilla, Seve Ballesteros, Piélagos al mínimo de criminalidad—, aceptando el sol más bajo (~1.700 horas y unos 38 despejados). Liencres o Mortera ganan como urbanización de casas bajas junto a dunas; Suances, como villa-playa con vida todo el año.",
          "Se valora caminar dunas, Costa Quebrada, bahía o ría con Picos al fondo, con capital completa a quince o treinta minutos desde Liencres y Suances, y fibra y obra nueva en Piélagos.",
        ]}
        no={[
          `Se necesita el cielo de Baleares: Cantabria Occidental tiene ${zona.lluviaDias} días de lluvia, ${zona.despejados} despejados y ${zona.cubiertos} cubiertos, frente a ${mallorca.lluviaDias} y ${mallorca.despejados} en Mallorca. Es uno de los climas más opuestos a Mallorca de toda la tabla.`,
          "Se buscan tres habitaciones en Comillas o Santander dentro de la franja asequible habitual, calma turística en Comillas y San Vicente en verano, hospital cerca desde San Vicente (unos cuarenta minutos) o montaña detrás de casa en Liencres y Santander —los Picos quedan a una hora—.",
        ]}
        veredicto="Veredicto de zona: Cantabria Occidental gana por logística y seguridad —Valdecilla, vuelo a Palma casi todo el año, Piélagos al mínimo de la tabla—, no por sol. Si un día hospital y aeropuerto pesan más que el cielo balear, Liencres o Mortera son la apuesta más equilibrada; Suances, villa-playa con Torrelavega a quince; San Vicente, la postal de ría y Picos a cambio de hospital y aeropuerto a cuarenta o cuarenta y cinco; Comillas, villa-museo cara y muy cuidada, muy tranquila en invierno; Santander, ciudad de referencia. Antes de elegir, probaría un noviembre cubierto y un agosto en Comillas, San Vicente o el Sardinero."
      />

      <MunicipiosZonaFin
        zonaId={zona.id}
        municipios={municipiosCantabriaOccidental}
        escalas={ESCALA}
      />

      <p className="mt-12 max-w-2xl text-xs text-[var(--tinta-suave)]">
        Fotos: Wikimedia Commons. Consulta la atribución y licencia en cada imagen.
      </p>
    </article>
  );
}
