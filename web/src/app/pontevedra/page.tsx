import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import BloqueZonaFicha from "@/components/BloqueZonaFicha";
import CabeceraFichaMunicipio from "@/components/CabeceraFichaMunicipio";
import EnlaceIdealista from "@/components/EnlaceIdealista";
import Foto from "@/components/Foto";
import MapaMunicipioFicha from "@/components/MapaMunicipioFicha";
import { RELATO_MUNICIPIOS } from "@/components/RelatoMunicipio";
import TablaComparativaZona from "@/components/TablaComparativaZona";
import { municipiosDeZonaFicha, municipioPorSlug, zonaIdDeFicha } from "@/lib/municipios";
import { zonaPorId } from "@/lib/zonas";
import DesplegableNuevo2 from "@/components/DesplegableNuevo2";

/**
 * NUEVO2 — Pontevedra (Pontevedra e Sanxenxo).
 * Texto: Lote_Pontevedra_e_Sanxenxo_4_CERTIFICADOS_Cursor_NUEVO2.txt
 */

const RESUMEN_ZONA_NUEVO2 = [
  "Esta zona reúne cuatro formas muy distintas de vivir alrededor de las rías de Pontevedra y Arousa: Pontevedra aporta una ciudad pequeña y muy caminable; Poio se extiende por la orilla norte de la ría con parroquias, puertos y costa; Sanxenxo concentra playa, segunda residencia y fuerte estacionalidad; O Grove ocupa una península marinera entre la ría de Arousa y el Atlántico. Las distancias son cortas, pero la dependencia del coche, el acceso al baño y la presión del verano cambian mucho entre municipios.",
  "Pontevedra se vive primero como ciudad. El centro histórico y el ensanche forman una continuidad compacta alrededor del Lérez, con mercado, comercio, colegios, campus, cultura, tren, autobuses y sanidad.",
  "La ciudad está al fondo de la ría y junto al río, pero esa cercanía al agua no equivale a playa marítima a pie. Fuera del núcleo urbano, parroquias como Lérez, Mourente, Marcón o Ponte Sampaio cambian la rutina y aumentan el peso del coche.",
] as const;

const COMO_SE_VIVE_NUEVO2 = [
  "Desde el centro o el ensanche se puede encadenar a pie una parte muy grande de la vida cotidiana: mercado, farmacia, colegio, biblioteca, comercio, cafeterías, estación y paseo del Lérez quedan dentro de recorridos que no obligan a organizar la mañana alrededor del coche.",
  "El casco histórico no funciona como decorado reservado al visitante. Sus plazas, soportales y calles siguen siendo parte de los recorridos ordinarios. A Ferrería, A Verdura, A Leña y el entorno de A Peregrina concentran actividad durante todo el año.",
  "El ensanche ofrece otra forma de residir: edificios más recientes, supermercados, garajes y calles más fáciles para entrar y salir en coche, conservando el centro a una distancia caminable. Para quien no quiera asumir las limitaciones de un edificio histórico, puede resultar una combinación especialmente práctica.",
  "La atención hospitalaria está dentro de la propia ciudad. Montecelo queda aproximadamente a cinco minutos desde la referencia municipal, y Pontevedra cuenta además con atención primaria, especialidades y oferta privada.",
  "La estación de tren y la de autobuses permiten salir de la ciudad sin depender siempre del coche. Hay conexiones ferroviarias hacia Vigo, Santiago y otros destinos. El aeropuerto de Vigo queda en torno a 25 minutos; Santiago, alrededor de 50. La programación directa a Palma cambia por temporada, por lo que conviene comprobarla cuando ese vínculo sea importante.",
  "El verano no vacía Pontevedra. Las oficinas, el comercio y los servicios mantienen una base anual, aunque agosto transforma algunas calles con fiestas y visitantes. Las Festas da Peregrina ocupan el centro durante varios días y la Feira Franca vuelve a cambiarlo a comienzos de septiembre. Vivir junto a A Ferrería o la Alameda significa aceptar ese calendario además de disfrutar de la proximidad peatonal.",
  "Fuera de esas fechas, el centro suele tener un ritmo más estable que una villa de playa. Esa continuidad anual es una de las diferencias más importantes frente a Sanxenxo u O Grove.",
] as const;

const CLIMA_NUEVO2 = [
  "Pontevedra tiene un verano claramente más suave que Mallorca. La media estival ronda los 20,5 °C y la invernal, los 9,5 °C.",
  "La diferencia más importante no es el frío extremo, sino la frecuencia de lluvia, la humedad y la menor continuidad de cielo despejado. Otoño e invierno pueden encadenar varios días húmedos y eso cambia tanto el uso del exterior como el comportamiento de la vivienda.",
  "El centro histórico tiene mucha piedra y calles estrechas. En invierno conviene prestar atención a orientación, ventilación y entrada real de luz. Un piso atractivo por ubicación puede resultar oscuro o húmedo si la fachada recibe poco sol.",
  "El verano, a cambio, permite caminar, sentarse en una terraza o hacer recados a horas que en Mallorca pueden resultar demasiado calurosas. Puede haber días cálidos, pero el calor persistente tiene menos peso.",
  "La lluvia no impide la vida a pie de la misma manera que en un tejido sin refugios. Los soportales del casco ayudan a mantener recorridos cotidianos cuando llueve, aunque no convierten el clima en seco.",
] as const;

const VIVIR_NUEVO2 = [
  "Para quien llega desde Mallorca, el cambio no está solo en el tiempo. En la ciudad compacta muchas necesidades pueden resolverse andando, mientras la lluvia y la humedad pasan a formar parte normal de la semana.",
  "En la ciudad compacta, el coche puede convertirse en herramienta para salir y no en requisito para cada recado. Eso permite que una vivienda sin garaje sea viable para algunos perfiles, aunque el aparcamiento debe estudiarse si se usa coche con frecuencia.",
  "El Lérez ofrece una salida cotidiana sin abandonar la ciudad. La Illa das Esculturas, las sendas de ambas orillas y la Xunqueira de Alba permiten caminar o hacer deporte sin preparar una excursión.",
  "El límite está en el baño marítimo. Tener la ría delante no equivale a tener una playa de mar dentro del centro. Para arena y baño hay que desplazarse hacia Poio, Marín o la costa exterior de la ría.",
  "La ciudad también ofrece una vida cultural y administrativa mucho más continua que las villas turísticas próximas. Universidad, Museo de Pontevedra, teatro, bibliotecas y programación pública hacen que el invierno no dependa de la temporada.",
  "Para quien mantenga relación frecuente con Mallorca, la cercanía de Vigo y la alternativa de Santiago reducen el tramo terrestre respecto a buena parte de la costa de la zona.",
] as const;

const DE_DONDE_VIENE_NUEVO2 = [
  "Pontevedra creció alrededor de un paso sobre el Lérez y de un puerto que durante siglos tuvo una importancia mucho mayor que la que hoy sugiere el fondo de la ría. Pontevedra se entiende como ciudad del Lérez y capital provincial: casco histórico peatonal, administración y una escala urbana completa.",
  "El casco medieval se organizó junto al puente y a la actividad comercial. Durante los siglos XV y XVI la ciudad fue uno de los principales puertos gallegos. El retroceso del calado de la ría y los cambios económicos desplazaron progresivamente la actividad portuaria hacia Marín. La historia de villa fuerte y de comercio fluvial explica un centro denso distinto de las villas de playa de O Salnés.",
  "La Basílica de Santa María la Mayor conserva una huella directa de aquella economía marítima: su construcción estuvo ligada al gremio de mareantes. Aunque hoy el centro no parezca una ciudad portuaria, esa historia explica parte de su patrimonio. El ensanche y los barrios reparte tipologías: no se vive igual en el casco que en A Caeira o en la periferia.",
  "El Santuario de A Peregrina añade otra capa. Su posición en el Camino Portugués mantiene el paso de peregrinos dentro de las calles del centro, no en una periferia separada. La peatonalización contemporánea cambió ruido, comercio y la forma de caminar el centro.",
  "La ciudad contemporánea cambió mucho con la reducción del tráfico en el centro y la recuperación del espacio peatonal. Ese proceso no creó las plazas ni los soportales, pero sí hizo que la estructura histórica volviera a funcionar como red cotidiana a pie. El Lérez y la ría cercana sitúan la ciudad en el sistema de rías sin convertirla en municipio de arenal único.",
  "La Illa das Esculturas representa otra transformación reciente: una isla fluvial próxima al centro se convirtió en espacio de paseo y arte contemporáneo al aire libre. El río dejó de ser solamente borde y pasó a integrarse mucho más en el uso diario de la ciudad. Hoy comprar aquí es decidir barrio con lupa: hospital, tren y servicios están en lógica urbana. El anuncio de zona cambia la semana.",
] as const;

const MAR_RIO_CAMINO_NUEVO2 = [
  "En Pontevedra el agua cotidiana es el Lérez. El agua cotidiana del centro es el Lérez y el paseo fluvial, no A Lanzada.",
  "Desde el centro se llega andando a la Illa das Esculturas, también llamada Illa do Covo. Es un espacio fluvial con caminos, zonas de estancia y obras de arte al aire libre. No hace falta preparar una salida larga para utilizarlo: puede entrar en un paseo de tarde, una carrera o una vuelta corta. La ría se siente hacia Lourizán y salidas cortas; el océano pide coche.",
  "Las sendas del Lérez permiten continuar río arriba. La ruta oficial recorre ambas márgenes desde la ciudad hacia la presa de Bora. La margen izquierda es más sencilla; la derecha tiene tramos algo más agrestes. Se puede recorrer solo una parte y regresar, de modo que no obliga a completar una ruta larga cada vez. Caminar el casco peatonal es la rutina más fiel a la ciudad.",
  "La Xunqueira de Alba añade otro paisaje llano junto a la ciudad, más ligado a humedal y vegetación que al casco de piedra. En verano se sale a playas de Poio, Sanxenxo o Marín según el plan.",
  "El Camino Portugués atraviesa Pontevedra y cruza el centro histórico. Eso hace posible incorporarlo a un paseo urbano sin que la experiencia se convierta necesariamente en una etapa de peregrinación. Un martes de noviembre el casco respira; en fiestas el centro se llena.",
  "Para baño de río existe playa fluvial en el entorno del Lérez, pero debe distinguirse del baño marítimo que motiva muchas mudanzas desde Mallorca. La playa de mar no está en el centro. Marín y Sanxenxo amplían orilla a minutos.",
  "Cuando se quiere arena y agua salada, la salida cambia. Lourido y Cabeceira están en Poio; Portocelo está en Marín; Areas y otras playas de Sanxenxo requieren más desplazamiento. Si la playa va a utilizarse varias veces por semana, ese trayecto conviene probarlo en verano y no imaginarlo solo por kilómetros. Vigo aporta otra ciudad y hospitales de referencia adicional.",
  "Pontevedra permite, por tanto, caminar junto al agua a diario y bañarse en el mar mediante una salida corta. Son dos ventajas distintas y conviene no mezclarlas. Elegir casco o periferia describe mejor Pontevedra que inventariar playas ajenas.",
] as const;

const CASA_NUEVO2 = [
  "Pontevedra ofrece más variedad de piso urbano que el resto de la zona. El centro histórico conserva edificios con carácter y ubicaciones muy caminables; el ensanche añade ascensor, garaje y distribuciones más recientes; las parroquias permiten buscar casa y terreno.",
  "En el casco conviene valorar accesibilidad antes que encanto. Escaleras, ausencia de ascensor, ventanas pequeñas o una orientación poco soleada pueden convertirse en problemas diarios. También hay que comprobar ruido si la vivienda queda junto a plazas, hostelería o recorridos festivos.",
  "El ensanche suele simplificar esas variables, pero puede introducir más tráfico. Una vivienda a diez minutos andando del centro puede ofrecer una vida casi igual de peatonal con menos limitaciones constructivas.",
  "En las parroquias la ecuación cambia. Se puede ganar superficie, jardín y tranquilidad, pero la ventaja de “vivir en Pontevedra” deja de equivaler automáticamente a organizar el día a día a pie.",
  "El precio medio municipal utilizado es 2.596 €/m².",
] as const;

const CASA_ADVERTENCIA_MICROZONA = [
  "Centro histórico, ensanche y parroquias no ofrecen la misma vida.",
  "El centro maximiza caminabilidad y carácter, pero exige comprobar accesibilidad, ruido y luz. El ensanche mantiene servicios a pie y suele facilitar ascensor, garaje y entrada en coche. Las parroquias permiten casa y terreno a cambio de una semana más dependiente del vehículo.",
] as const;

const CASA_QUE_CONVIENE_REVISAR = [
  "Hacer a pie desde el portal los recorridos que realmente se repetirían: mercado o supermercado, farmacia, centro de salud, estación y paseo.",
  "En el casco histórico, comprobar ascensor, escaleras, orientación, horas reales de luz, ventilación y ruido nocturno.",
  "Volver durante Peregrina o Feira Franca si la vivienda está junto a las calles más ocupadas por las fiestas.",
  "En el ensanche, medir tráfico y ruido con las ventanas abiertas y comprobar garaje si se utiliza coche.",
  "En una casa de parroquia, probar el trayecto real hacia el centro y hospital, además de revisar drenaje, cubierta, accesos y mantenimiento de parcela.",
  "Si la playa es importante, conducir desde la vivienda hasta el arenal que se utilizaría habitualmente en una tarde de verano.",
] as const;

const CASA_MERCADO_REVENTA = [
  "Pontevedra tiene una base de demanda residencial permanente apoyada por administración, servicios, universidad, comercio y sanidad.",
  "En una futura venta suelen ayudar las características que hacen una vivienda fácil de utilizar todo el año: ascensor, buena luz, distribución clara, servicios caminables y ausencia de una reforma importante.",
  "En el casco, el valor patrimonial o la ubicación pueden atraer, pero una accesibilidad mala reduce el número de perfiles posibles. En el ensanche, garaje y ascensor pueden ampliar mucho ese público.",
  "Las casas de parroquia compiten con otra lógica: allí importan terreno, acceso, estado, orientación y tiempo real hasta la ciudad.",
] as const;

const ENCAJA_SI_NUEVO2 = [
  "Encaja si se quiere una ciudad pequeña donde compra y gestiones puedan hacerse andando y donde hospital, tren, comercio y cultura formen parte de la misma escala urbana.",
  "También si el paseo junto al río puede cubrir la necesidad cotidiana de exterior y basta con desplazarse cuando se quiere playa de mar.",
  "Puede encajar especialmente si se valora una ciudad plenamente activa durante todo el año, sin depender del calendario turístico para que haya servicios y vida en la calle.",
  "Y encaja si la proximidad al hospital y a las conexiones de Vigo y Santiago pesa más que vivir literalmente junto a un arenal.",
] as const;

const NO_ENCAJA_SI_NUEVO2 = [
  "Encaja peor si el motivo principal de la mudanza es bajar andando a una playa marítima desde casa. El Lérez y la ría están integrados en la ciudad, pero la arena de baño queda fuera del centro.",
  "También si se busca una vivienda amplia con terreno sin aumentar el uso del coche. Esa combinación pertenece más a las parroquias que a la ciudad compacta.",
  "Puede resultar menos adecuada si se quiere una vida completamente silenciosa en las calles centrales durante las grandes fiestas.",
  "Y encaja peor si la lluvia y la humedad invernal son aspectos difíciles de asumir en una vivienda urbana de piedra o con poca orientación solar.",
] as const;

const QUE_COMPROBAR_NUEVO2 = [
  "Pasar un día entero desde la vivienda sin coche: compra, farmacia, mercado, centro, estación y paseo del Lérez.",
  "Recorrer la zona por la noche si la vivienda está cerca de hostelería o plazas.",
  "Hacer un tramo de la senda del Lérez y comprobar si ese tipo de paseo cubriría realmente la necesidad cotidiana de naturaleza.",
  "Conducir hasta la playa que se utilizaría habitualmente y repetir el trayecto en temporada alta.",
  "Hacer el recorrido real al hospital y a la estación.",
  "Y volver a la vivienda con lluvia para comprobar luz, ventilación, accesos y sensación interior.",
] as const;

const CASA_LEYENDA_COMPACTA =
  "A ≈ ≤5 min de la costa · B ≈ 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m².";

const CASA_FILA_PRECIOS = {
  municipio: "Pontevedra",
  a2: "219.362 €",
  a3: "303.732 €",
  b2: "177.177 €",
  b3: "245.322 €",
  m2: "2.596 €/m²",
} as const;

const CASA_PRECIO_NOTA_NUEVO2 = [
  "En Pontevedra, una vivienda situada en A puede estar muy cerca de la costa o de la ría sin tener una playa marítima de baño a pie. El baño de mar sigue requiriendo desplazamiento.",
] as const;

const FOTO_COMO_1 = {
  src: "/fotos/pontevedra-e-sanxenxo/pontevedra-peregrina.jpg",
  pie: "A Peregrina, puerta del casco y centro de las fiestas",
} as const;

const FOTO_HIST_1 = {
  src: "/fotos/pontevedra-e-sanxenxo/pontevedra-santa-maria.jpg",
  pie: "Santa María la Mayor, iglesia del antiguo gremio de mareantes",
} as const;

const FOTO_HIST_2 = {
  src: "/fotos/pontevedra-e-sanxenxo/pontevedra-museo.jpg",
  pie: "Museo de Pontevedra, memoria arqueológica y artística de Galicia",
} as const;

const FOTO_MAR_1 = {
  src: "/fotos/pontevedra-e-sanxenxo/pontevedra-lerez.jpg",
  pie: "El Lérez y la Illa das Esculturas junto al centro",
} as const;

const CREDITO_FOTOS = "Wikimedia Commons (licencias indicadas en los archivos de origen).";


function FilaCasaNuevo2({
  etiqueta,
  cuerpo,
}: {
  etiqueta: string;
  cuerpo: readonly string[];
}) {
  return (
    <div className="border-b border-[var(--linea)] py-3 last:border-b-0">
      <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--tinta-suave)]">
        {etiqueta}
      </p>
      {cuerpo.map((p) => (
        <p key={p.slice(0, 64)} className="mt-1.5 text-[15px] leading-relaxed text-[var(--tinta)]">
          {p}
        </p>
      ))}
    </div>
  );
}

function ConNegritas({ texto, fragmentos }: { texto: string; fragmentos: string[] }) {
  const nodos: ReactNode[] = [];
  let resto = texto;
  fragmentos.forEach((fragmento, idx) => {
    const i = resto.indexOf(fragmento);
    if (i === -1) {
      throw new Error(`Negrita: fragmento no encontrado — ${fragmento.slice(0, 48)}`);
    }
    nodos.push(resto.slice(0, i));
    nodos.push(<strong key={`${idx}-${fragmento.slice(0, 24)}`}>{fragmento}</strong>);
    resto = resto.slice(i + fragmento.length);
  });
  nodos.push(resto);
  return <>{nodos}</>;
}

export default function Nuevo2PontevedraPage() {
  const ficha = municipioPorSlug("pontevedra");
  if (!ficha) notFound();
  const zonaId = zonaIdDeFicha(ficha);
  const z = zonaPorId(zonaId);
  if (!z) notFound();

  const vecinos = municipiosDeZonaFicha(zonaId);
  const escalas = Object.fromEntries(
    vecinos.map((m) => {
      const relato = RELATO_MUNICIPIOS[m.slug];
      return [m.municipio, relato?.escala ?? ""] as const;
    }),
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <CabeceraFichaMunicipio ficha={ficha} zonaId={z.id} zonaNombre={z.zona} />

      <BloqueZonaFicha zonaId={z.id} nombreZona={z.zona} resumen={RESUMEN_ZONA_NUEVO2[0]} />
      {RESUMEN_ZONA_NUEVO2.slice(1).map((p) => (
        <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed text-[var(--tinta)]">
          {p}
        </p>
      ))}

      <MapaMunicipioFicha ficha={ficha} capasPortada={Boolean(ficha.mapa)} />

      <DesplegableNuevo2 titulo="Cómo se vive" varianteTarjetaV1>
        {COMO_SE_VIVE_NUEVO2.map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_COMO_1.src} pie={FOTO_COMO_1.pie} />
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Frente a Mallorca" varianteTarjetaV1>
        <h3 className="mt-1 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Clima
        </h3>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas
            texto={CLIMA_NUEVO2[0]}
            fragmentos={["20,5 °C", "9,5 °C"]}
          />
        </p>
        {CLIMA_NUEVO2.slice(1).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <h3 className="mt-7 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Vivir
        </h3>
        {VIVIR_NUEVO2.map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="De dónde viene" varianteTarjetaV1>
        {DE_DONDE_VIENE_NUEVO2.slice(0, 2).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_HIST_1.src} pie={FOTO_HIST_1.pie} />
        {DE_DONDE_VIENE_NUEVO2.slice(2, 4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_HIST_2.src} pie={FOTO_HIST_2.pie} />
        {DE_DONDE_VIENE_NUEVO2.slice(4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Mar, río y camino" varianteTarjetaV1>
        {MAR_RIO_CAMINO_NUEVO2.slice(0, 5).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <Foto src={FOTO_MAR_1.src} pie={FOTO_MAR_1.pie} />
        {MAR_RIO_CAMINO_NUEVO2.slice(5).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Casa" varianteTarjetaV1>
        {CASA_NUEVO2.slice(0, 4).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={CASA_NUEVO2[4]} fragmentos={["2.596 €/m²"]} />
        </p>
        {CASA_NUEVO2.slice(5).map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}

        <EnlaceIdealista ambito="municipio" slug={ficha.slug} nombre={ficha.municipio} />

        <div className="mt-6 pt-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--tinta-suave)]">
            Precio y bandas
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[var(--linea)] bg-white">
            <table className="min-w-[36rem] w-full text-left text-sm">
              <thead className="border-b border-[var(--linea)] bg-[var(--papel)] text-[var(--tinta-suave)]">
                <tr>
                  <th className="px-3 py-2 font-medium">Municipio</th>
                  <th className="px-3 py-2 font-medium">A · 2 hab</th>
                  <th className="px-3 py-2 font-medium">A · 3 hab</th>
                  <th className="px-3 py-2 font-medium">B · 2 hab</th>
                  <th className="px-3 py-2 font-medium">B · 3 hab</th>
                  <th className="px-3 py-2 font-medium">€/m²</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--linea)]">
                <tr>
                  <th className="px-3 py-2.5 font-medium text-[var(--acento)]">
                    {CASA_FILA_PRECIOS.municipio}
                  </th>
                  <td className="px-3 py-2.5 tabular-nums">{CASA_FILA_PRECIOS.a2}</td>
                  <td className="px-3 py-2.5 tabular-nums">{CASA_FILA_PRECIOS.a3}</td>
                  <td className="px-3 py-2.5 tabular-nums">{CASA_FILA_PRECIOS.b2}</td>
                  <td className="px-3 py-2.5 tabular-nums">{CASA_FILA_PRECIOS.b3}</td>
                  <td className="px-3 py-2.5 tabular-nums">{CASA_FILA_PRECIOS.m2}</td>
                </tr>
              </tbody>
            </table>
            <p className="px-3 py-2 text-xs leading-relaxed text-[var(--tinta-suave)]">
              {CASA_LEYENDA_COMPACTA}
            </p>
            {CASA_PRECIO_NOTA_NUEVO2.map((p) => (
              <p key={p.slice(0, 64)} className="px-3 pb-2 text-xs leading-relaxed text-[var(--tinta-suave)]">
                {p}
              </p>
            ))}
          </div>
        </div>
        <FilaCasaNuevo2 etiqueta="Advertencia de microzona" cuerpo={CASA_ADVERTENCIA_MICROZONA} />
        <FilaCasaNuevo2
          etiqueta="Qué conviene revisar en una vivienda"
          cuerpo={CASA_QUE_CONVIENE_REVISAR}
        />
        <FilaCasaNuevo2 etiqueta="Mercado y reventa" cuerpo={CASA_MERCADO_REVENTA} />
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="¿Encaja?" varianteTarjetaV1>
        <h3 className="mt-1 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Encaja si
        </h3>
        {ENCAJA_SI_NUEVO2.map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <h3 className="mt-7 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          No encaja si
        </h3>
        {NO_ENCAJA_SI_NUEVO2.map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
        <h3 className="mt-7 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Qué comprobar
        </h3>
        {QUE_COMPROBAR_NUEVO2.map((p) => (
          <p key={p.slice(0, 64)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {p}
          </p>
        ))}
      </DesplegableNuevo2>

      <section className="mt-12 max-w-3xl">
        <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
          Más pueblos de{" "}
          <Link href={`/zona/${zonaId}/`} className="underline-offset-2 hover:underline">
            {ficha.zona}
          </Link>
        </h2>
        <TablaComparativaZona
          municipios={vecinos}
          zonaId={zonaId}
          slugActual={ficha.slug}
          escalas={escalas}
        />
      </section>

      <p className="mt-8 max-w-3xl text-sm text-[var(--tinta-suave)]">
        Crédito de las fotografías: {CREDITO_FOTOS}
      </p>
    </main>
  );
}
