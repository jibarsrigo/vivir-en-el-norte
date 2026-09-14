import Encaja from "@/components/Encaja";
import Foto from "@/components/Foto";
import TablaPrecios from "@/components/TablaPrecios";
import type { FichaMunicipio } from "@/lib/municipios";

export type RelatoMun = {
  escala: string;
  presente: string[];
  historia: string;
  playas: string[];
  paseos: string[];
  casa: string;
  encaja: { si: string[]; no: string[]; veredicto: string };
  fotos: { src: string; pie: string }[];
};

export const RELATO_MUNICIPIOS: Record<string, RelatoMun> = {
  "a-guarda": {
    escala: "Villa",
    presente: [
      "A Guarda es una villa de 10.000 habitantes que se siente más grande de lo que es: hay lonja, mercado, restaurantes abiertos en enero y un paseo donde se sale a tomar café. El casco baja en cuesta hasta el puerto; las casas de los marineros, de colores, dan a la dársena; detrás, siempre, el Santa Trega. Portugal está tan cerca que se oyen las campanas de Caminha.",
      "Quien vive aquí es gente local y veraneantes en agosto; no es una urbanización de foráneos. En invierno el puerto sigue trabajando y las terrazas del paseo no se cierran, aunque el viento de noroeste se nota: la villa está en la punta. Para lo diario no hace falta coche; para el hospital, sí. El tráfico es de pueblo salvo julio y agosto en la PO-552.",
    ],
    historia:
      "Antes que la villa existió el castro del Santa Trega, hace más de dos mil años. El nombre —guarda, vigía— viene de su papel de atalaya sobre la boca del río. Vivió de la pesca y, desde el siglo XIX, de la emigración a Puerto Rico: muchos volvieron y dejaron casas de indianos con palmeras y galerías en la Praza do Reló y en la carretera de Camposancos. Hoy vive del puerto —la langosta es su emblema, con fiesta en julio—, de la industria pequeña y del verano. El Museo do Mar está en el antiguo castillo de Santa Cruz.",
    playas: [
      "Area Grande (1,5 km · 4 min, andando): cala de arena fina, abrigada entre rocas, el Santa Trega detrás. Playa de diario. Agua 17–19 °C. En agosto se llena y el aparcamiento junto al paseo se queda corto.",
      "O Muíño (3 km · 6 min): ya en el estuario, arena y agua plana, Portugal enfrente, merendero bajo los pinos. Más templada y sin olas.",
      "Praia da Lamiña: más pequeña, entre rocas, al norte.",
    ],
    paseos: [
      "Santa Trega: una hora a pie desde el casco o 10 min en coche hasta arriba. Se camina entre las casas circulares del castro y se sale al mirador sobre la desembocadura.",
      "Paseo del puerto a Camposancos: 4 km llanos. El paseo de todos los días.",
      "Senda litoral hacia Oia: el océano a la izquierda, la Groba a la derecha. Molinos del Folón a 10 min.",
    ],
    casa: "Piso en edificio bajo (años 90–2010) con terraza al Miño o al puerto, o chalé en las laderas hacia Camposancos, Portugal delante. No hay urbanizaciones cerradas. Fibra sí. Viento medio: conviene la terraza al río o al puerto, no la punta noroeste.",
    encaja: {
      si: [
        "Se busca villa con lonja, mercado y café en enero, y el mar a un paseo.",
        "Encaja como complemento de una casa en el valle, no como única vivienda.",
      ],
      no: [
        "El hospital tiene que estar a menos de 45 minutos: eso no se arregla eligiendo la calle.",
        "Se quiere una casa única y el viento de la punta no se prueba un día de nortada.",
      ],
      veredicto:
        "Encaja como complemento, no como casa única. Piso con terraza al Miño o al puerto, no en la punta noroeste. Comprobar la nortada y el parking de Area Grande un sábado de agosto. El hospital a 45 minutos es el problema que no se mueve.",
    },
    fotos: [
      { src: "/fotos/baixo-mino/a-guarda-costa.jpg", pie: "A Guarda" },
      { src: "/fotos/baixo-mino/santa-trega.jpg", pie: "Monte Santa Trega" },
    ],
  },
  oia: {
    escala: "Casas dispersas",
    presente: [
      "Oia no es un pueblo: son aldeas —unas 3.000 personas— colgadas entre la Serra da Groba y el Atlántico, sin plaza que haga de centro. Se vive con el océano delante y la sierra detrás, y al atardecer el sol se mete en el agua.",
      "En invierno las aldeas se vacían de verdad: el bar de Mougás y el de Oia son el sitio donde hay gente. No hay calle de casas bajas ni urbanización; el modelo es casa aislada de piedra o chalé con vistas. El coche es obligatorio para todo (súper, médico, instituto). La PO-552 pasa pegada a la costa: hay tramos donde se oye. Fibra parcial: hay que comprobarla casa por casa.",
    ],
    historia:
      "Todo gira alrededor del monasterio: los cistercienses llegaron en el siglo XII, roturaron la ladera, plantaron viña y organizaron las aldeas. Es el único monasterio de la orden en Europa a pie de océano. En 1624 rechazaron a cañonazos a una flota turca y el rey les dio el título de Real. Desamortizado en 1835, hoy es privado y se visita con guía. En la sierra, petroglifos y los curros de caballos de Mougás y Torroña.",
    playas: [
      "Praia de Mougás (6 km · 8 min): pequeña, arena y cantos, batida por el oleaje. Se va a mirar el mar, no a nadar.",
      "Para bañarse de verdad, Baiona a 14 km · 18 min: arena fina, bahía abrigada.",
    ],
    paseos: [
      "Senda litoral: pasa por la puerta de las aldeas. Tramos de pasarela de madera sobre las rocas. El océano siempre a un lado.",
      "Alto da Groba (12 km · 20 min): meseta de brezo, caballos sueltos, el océano a un lado y el valle al otro. Los curros, en mayo y junio.",
    ],
    casa: "Casa aislada en aldea. Sin obra nueva. Fibra parcial.",
    encaja: {
      si: ["Se busca vivir solo frente al océano y el silencio de noviembre no pesa."],
      no: [
        "Se quiere un pueblo: plaza, súper, farmacia, y la ciudad a cinco minutos. Aquí no lo hay.",
        "El coche para todo y el súper a 15 minutos no caben en el día a día.",
      ],
      veredicto:
        "No encaja. El paisaje es salvaje y se paga en soledad de noviembre, coche para todo, súper a 15 minutos, hospital a 40. No se parece a un pueblo mallorquín compacto. Solo si se busca vivir solo frente al océano.",
    },
    fotos: [{ src: "/fotos/baixo-mino/monasterio-oia.jpg", pie: "Oia" }],
  },
  "o-rosal": {
    escala: "Pueblo compacto y casas dispersas",
    presente: [
      "O Rosal es un valle interior de 6.000 habitantes a 10 minutos de A Guarda. Se vive entre parras altas —se pasa andando por debajo—, casas de piedra y el monte detrás: la Groba a un lado, el Santa Trega al otro. O Calvario tiene plaza, bares e iglesia; alrededor, Tabagón, San Miguel, Eiras, casas con huerto y viña.",
      "Gente local, pocos foráneos, poco tráfico, agosto sin llenarse. No hay urbanización. En invierno el valle se queda en lo suyo: húmedo, verde, parras desnudas. Lo diario (farmacia, súper pequeño, centro de salud) está en el pueblo; el resto, en A Guarda a 10 minutos. La fibra es parcial: en las casas altas hay que comprobarla.",
    ],
    historia:
      "Valle agrícola desde siempre: viña, maíz, huerta, y molinos comunales donde cada casa tenía sus horas de molienda; de ahí los sesenta y siete molinos del Folón y del Picón. Tierra de emigración a América y de contrabando con Portugal en la posguerra. Desde los años 80 el vino lo cambió: O Rosal es subzona de la D.O. Rías Baixas, con bodegas grandes y una Festa do Viño en julio.",
    playas: [
      "Ninguna en el municipio (franja B). Area Grande, 7 km · 10 min. O Muíño, 8 km · 12 min.",
    ],
    paseos: [
      "Muíños do Folón e do Picón (4 km · 7 min): circuito de 4–5 km entre molinos de piedra, pequeñas cascadas y viña, el valle abajo.",
      "Santa Trega a 12 min. Caminar entre las parras del propio valle, por pistas de tierra.",
    ],
    casa: "Casa de piedra rehabilitada con terreno, o chalé de los 2000 en ladera, orientado al sur, en Tabagón, San Miguel o Eiras, con vistas al valle o al Miño. Poca obra nueva. Fibra parcial. Comprobar la humedad de las paredes en noviembre.",
    encaja: {
      si: [
        "Se quiere valle, parra, piedra, monte detrás y una plaza donde se conocen.",
        "El mar a unos 10 minutos y A Guarda para lo diario bastan. Portugal, los sábados.",
        "El hospital a 40 minutos y Vigo a 40 se aceptan.",
      ],
      no: ["Hace falta hospital a 30 minutos o ciudad a un cuarto de hora."],
      veredicto:
        "Encaja. Casa de piedra rehabilitada o chalé de los 2000 al sur, en Tabagón, San Miguel o Eiras. Comprobar la fibra en esa casa, la humedad en noviembre y cuánto tarda el coche a Area Grande un domingo de agosto.",
    },
    fotos: [{ src: "/fotos/baixo-mino/molinos-folon.jpg", pie: "Muíños do Folón" }],
  },
  tomino: {
    escala: "Casas dispersas",
    presente: [
      "Tomiño es un municipio de 13.000 habitantes extendido por la vega del Miño, con Goián como núcleo, frente a Vila Nova de Cerveira. El río aquí es ancho y manso; se cruza a Portugal en dos minutos por el puente. Goián tiene lo básico; Cerveira, al otro lado, el mercado de los sábados y más restaurantes: los dos funcionan como uno.",
      "En julio y agosto el valle aprieta: 21 °C de media, 15–20 días por encima de 30 °C —el calor que se deja atrás. En otoño e invierno, nieblas de río que levantan a media mañana. El modelo es casa con finca en la vega; poco piso, ninguna urbanización. El coche hace falta para la playa (20 min) y para Tui (15 min).",
    ],
    historia:
      "Tierra de frontera: las fortalezas de San Lourenzo y Medos se levantaron en el siglo XVII, cuando Portugal se independizó y el Miño volvió a ser línea de guerra. Después, siglos de agricultura en la vega y, desde hace treinta años, los viveros —Tomiño es capital gallega de la planta ornamental; se ven los invernaderos desde la carretera. El puente a Cerveira (2004) lo cambió.",
    playas: [
      "Ninguna en el municipio. Area Grande, 17 km · 20 min. Cesantes, 38 km · 30 min por autopista: arena en el fondo de la ría, sin olas, 18–20 °C; la más cómoda desde aquí.",
    ],
    paseos: [
      "Paseo fluvial de Goián: llano, junto al río, la fortaleza a un lado y Cerveira enfrente.",
      "Ecopista portuguesa Valença–Monção a 10 min. Monte Aloia a 20 min.",
    ],
    casa: "Casa con finca en la vega. El €/m² más bajo de la zona. Fibra parcial. Verano cálido y nieblas de río.",
    encaja: {
      si: [
        "La finca es innegociable y se acepta una semana de julio de prueba —y entonces Goián, no el fondo del valle.",
      ],
      no: [
        "El calor de julio es lo que se deja atrás: O Rosal da el paisaje sin ese verano.",
        "La playa a 20 minutos y la niebla de río no caben.",
      ],
      veredicto:
        "No encaja. La casa grande y barata tienta; el calor de valle es el que se deja atrás, la playa está a 20 minutos y O Rosal resuelve el paisaje sin ese verano.",
    },
    fotos: [],
  },
  tui: {
    escala: "Villa",
    presente: [
      "Tui es una ciudad pequeña de 17.000 habitantes sobre el Miño, frente a Valença. Tiene casco de verdad —calles empedradas, soportales, catedral arriba— y un ensanche con supermercados, instituto y pisos nuevos. El Camino Portugués le da un goteo de peregrinos todo el año: hay cafeterías abiertas en enero.",
      "En verano el valle calienta (21 °C de media, 15–20 días por encima de 30 °C) y en invierno hay mañanas de niebla de río. El Aloia está encima; Portugal, al otro lado del puente, a pie. Es el único de la zona con tren y con la A-55 a cinco minutos: Vigo en 25. El mar, a 25 minutos.",
    ],
    historia:
      "Tude fue ciudad romana, capital del reino suevo en el siglo VI y sede episcopal desde entonces; en la Edad Media, una de las siete capitales de Galicia. La catedral se construyó como fortaleza porque la frontera estaba a un tiro de piedra: románica y gótica, almenas, el único claustro medieval completo de las catedrales gallegas. El puente internacional de 1886 (hierro, escuela de Eiffel) la unió a Valença. Hoy Tui y Valença forman una eurociudad. Fiesta grande: San Telmo, Lunes de Pascua.",
    playas: [
      "Ninguna de mar en el municipio (franja B). Cesantes, 30 km · 25 min: arena larga, ría, sin olas, 18–20 °C. Area Grande, 30 km · 30 min. Areeiros, en el propio Miño: agua de río; se usa en verano.",
    ],
    paseos: [
      "Casco y muralla: se sube por calles empedradas hasta la catedral y se recorre el adarve con el Miño y Valença debajo.",
      "Paseo fluvial: llano, bajo la catedral, hasta el puente de hierro.",
      "Monte Aloia (8 km · 15 min): pinar, mesas, miradores. El paseo del domingo. Ecopista de Valença a Monção, a 2 km cruzando el puente.",
    ],
    casa: "Piso nuevo o reciente con ascensor en el ensanche, cerca del casco, no pegado a la A-55; o casa en la ladera del Aloia. Obra nueva sí. Fibra sí. Comprobar el ruido de la autovía según la calle y una mañana de niebla de noviembre.",
    encaja: {
      si: [
        "El hospital a 30 minutos y la ciudad pequeña (casco, Valença, tren, A-55, Vigo 25) pesan más que el mar a 25 minutos.",
      ],
      no: [
        "El calor de julio es lo que se deja atrás: 15–20 días por encima de 30 °C.",
        "El mar tiene que estar a la puerta.",
      ],
      veredicto:
        "Encaja solo si el hospital a 30 y la ciudad pequeña pesan más que el mar y el calor. Piso nuevo de 3 hab con terraza en el ensanche cerca del casco, no pegado a la A-55. Si el calor de julio es lo que se deja atrás, Tui no.",
    },
    fotos: [{ src: "/fotos/baixo-mino/catedral-tui.jpg", pie: "Catedral de Tui" }],
  },
};

export default function RelatoMunicipio({ ficha }: { ficha: FichaMunicipio }) {
  const r = RELATO_MUNICIPIOS[ficha.slug];
  if (!r) return null;

  return (
    <article className="mt-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">{r.escala}</p>
      {r.presente.map((p) => (
        <p key={p.slice(0, 40)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          {p}
        </p>
      ))}
      {r.fotos[0] ? <Foto src={r.fotos[0].src} pie={r.fotos[0].pie} /> : null}

      <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
        De dónde viene
      </h2>
      <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{r.historia}</p>

      <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
        Agua y paseo
      </h2>
      <ul className="mt-3 max-w-2xl list-disc space-y-2 pl-5 text-[17px] leading-relaxed">
        {r.playas.map((t) => (
          <li key={t.slice(0, 48)}>{t}</li>
        ))}
      </ul>
      <ul className="mt-3 max-w-2xl list-disc space-y-2 pl-5 text-[17px] leading-relaxed">
        {r.paseos.map((t) => (
          <li key={t.slice(0, 48)}>{t}</li>
        ))}
      </ul>
      {r.fotos[1] ? <Foto src={r.fotos[1].src} pie={r.fotos[1].pie} /> : null}

      <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">Casa</h2>
      <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{r.casa}</p>
      <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
        Servicios {ficha.servicios}/10 · fibra {ficha.fibra.toLowerCase()} · hospital público{" "}
        {ficha.hospitalMin} min · aeropuerto {ficha.aeropuertoMin} min · Palma: {ficha.palmaMejor}.
        Obra nueva: {ficha.obraNueva.toLowerCase()}.
      </p>
      <TablaPrecios filas={[ficha]} />

      <Encaja si={r.encaja.si} no={r.encaja.no} veredicto={r.encaja.veredicto} />

      {r.fotos.length > 0 ? (
        <p className="mt-12 max-w-2xl text-xs text-[var(--tinta-suave)]">
          {ficha.slug === "tui"
            ? "Fotos: Wikimedia Commons. Grzegorz Polak (CC BY-SA 2.0)."
            : "Fotos: Wikimedia Commons. Luis Miguel Bugallo Sánchez (CC BY-SA 4.0 / 3.0)."}
        </p>
      ) : null}
    </article>
  );
}
