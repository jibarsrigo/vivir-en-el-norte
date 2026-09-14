# MAPA 2.0 · Norte de España + Norte de Portugal

La guía en web se llama **Vivir en el norte** (`web/`): portada con el mapa de zonas y el tiempo. Se publica en GitHub Pages o Vercel desde esa carpeta.

Base de datos comparativa de **83 municipios costeros del norte de España y del norte de Portugal a ≤ 30 minutos de una playa de baño**, ordenados en **16 zonas** (de sur a norte y de oeste a este, Portugal al final), para comprar una vivienda de residencia habitual y jubilación.

El repositorio contiene la **tabla maestra completa** (83 filas × 54 columnas), el **validador fila a fila** que la comprueba contra el esquema cerrado del proyecto y el **generador de las tres hojas** finales: hoja 1 mapa, hoja 2 tabla maestra (columnas de decisión) y hoja 3 tabla 2 (comparativa, Palma, presupuesto, sobreprecios y detalle).

No hay rankings ni resúmenes: los únicos colores de las hojas son umbrales fijos documentados en `mapa2/esquema.py`.

## Ficha de búsqueda (criterios acordados)

| Apartado | Criterio |
|---|---|
| Comprador | Vive en Mallorca; compra en ≤ 6 meses y se traslada de inmediato. Jubilación a los 63; muchos años con coche. |
| Presupuesto | 260.000 € máximo, impuestos y gastos aparte. Opción secundaria poco probable: dos viviendas de ~130.000 € con los mismos criterios. El precio es un límite, no una prioridad. |
| Vivienda | Piso o casa. 2 dormitorios mínimo (≥ 65 m²), idealmente 3. Vistas abiertas (mar, montaña o ambas), sin edificios delante. Terraza o exterior. Ascensor imprescindible por encima de 1º. Reciente o nueva, sin reforma o mínima. Eficiencia energética deseable. Internet en casa (fibra o similar). |
| Opcionales | Garaje, piscina comunitaria, urbanización cerrada, ausencia de ruido. |
| Franjas | **A** = ≤ 5 min en coche de la costa. **B** = de 5 a 20-30 min de la costa. |
| Entorno | Servicios mínimos (farmacia, centro de salud, supermercado, cafeterías) a ≤ 10-15 min. Vida todo el año; la estacionalidad turística no importa. Tamaño del núcleo indiferente. |
| Mar | Costa abierta cerca para pasear; baño a ≤ 30 min en agua apta y tranquila (ría o playa abrigada). |
| Clima | Prioridad máxima al sol y a pocos días de lluvia/nublados. Viento y niebla aceptados si son poco frecuentes. |
| Sanidad y conexiones | Hospital (público o privado) a ≤ 45-60 min; **deseable ≤ 30 min**. Aeropuerto entre 1 y 2 h aceptable; **deseable ≤ 60 min**. Interesa vuelo directo a Palma. |
| Prioridades | 1 sol · 2 servicios · 3 hospital · 4 aeropuerto. |
| Obra nueva sobre plano | Solo con licencia concedida, aval bancario de las cantidades y promotor con obras terminadas; si no, vivienda terminada nueva o reciente. |
| Regla | No se descarta ningún municipio por sol, hospital ni aeropuerto: la tabla muestra las diferencias. |

## Zonas y municipios (Nº de la tabla)

| Nº | Zona | Municipios |
|---|---|---|
| 1-5 | Baixo Miño | A Guarda, Oia, O Rosal, Tomiño, Tui |
| 6-8 | Val Miñor | Baiona, Nigrán, Gondomar |
| 9-12 | Vigo e ría | Vigo (litoral sur y Canido), Redondela, Soutomaior, Vilaboa |
| 13-16 | O Morrazo | Cangas, Moaña, Bueu, Marín |
| 17-20 | Pontevedra e Sanxenxo | Pontevedra, Poio, Sanxenxo, O Grove |
| 21-25 | O Salnés | Meaño, Cambados, A Illa de Arousa, Vilanova de Arousa, Vilagarcía de Arousa |
| 26-31 | Barbanza e Noia | Rianxo, Boiro, A Pobra do Caramiñal, Ribeira, Porto do Son, Noia |
| 32-38 | Golfo Ártabro e Ferrol | A Coruña, Oleiros, Sada, Bergondo, Miño, Ares, Ferrol |
| 39-46 | A Mariña | O Vicedo, Viveiro, Xove, Cervo, Burela, Foz, Barreiros, Ribadeo |
| 47-50 | Asturias Occidente | Castropol, Tapia de Casariego, Navia, Luarca (Valdés) |
| 51-57 | Asturias Centro | Cudillero, Muros de Nalón, Soto del Barco, Salinas (Castrillón), Luanco (Gozón), Candás (Carreño), Gijón |
| 58-62 | Asturias Oriente | Villaviciosa, Colunga, Ribadesella, Llanes, Ribadedeva |
| 63-67 | Cantabria Occidental | San Vicente de la Barquera, Comillas, Suances, Liencres (Piélagos), Santander |
| 68-72 | Cantabria Oriental | Ribamontán al Mar, Noja, Santoña, Laredo, Castro-Urdiales |
| 73-80 | Alto Minho (PT) | Valença, Vila Nova de Cerveira, Caminha, Moledo, Vila Praia de Âncora, Afife-Carreço, Viana do Castelo, Ponte de Lima |
| 81-83 | Litoral Norte (PT) | Esposende, Póvoa de Varzim, Vila do Conde |

Columna `origen`: **MAPA 1.0** (27 municipios de la versión anterior), **MAPA 2.0** (14 añadidos en la primera revisión) y **Ampliación** (42 añadidos en esta versión por cumplir la ficha). Ningún valor del MAPA 1.0 se ha copiado sin revisar.

## Ficheros

| Ruta | Qué es |
|---|---|
| `data/municipios.csv` | **Tabla maestra** (fuente de verdad). 83 filas × 54 columnas, separador `;`, UTF-8. |
| `data/diccionario_columnas.csv` | Definición, unidad, tipo de dato, rango y valores admitidos de cada columna (generado desde el esquema). |
| `data/geo/*.geojson` | Cartografía base recortada al norte peninsular: países y provincias (Natural Earth 10 m), términos municipales de España y Portugal (GADM 4.1, para la costa detallada de los mapas de zona), ríos y carreteras (Natural Earth). |
| `mapa2/esquema.py` | Ficha de búsqueda, columnas, zonas, hospitales (33, públicos y privados), aeropuertos (7) con su situación de vuelo a Palma, umbrales y reglas de cálculo, resumen Portugal. |
| `mapa2/validar.py` | Validación fila a fila. Falla si algo no cuadra con el esquema. |
| `mapa2/render.py` | Genera las tres hojas (PNG y, con `--pdf`, PDF vectorial por hoja + PDF completo). Se niega a renderizar si la tabla no valida. |
| `mapa2/exportar.py` | Exporta a Excel (`output/tabla_maestra_mapa_2_0.xlsx`, 7 hojas) y regenera el diccionario. |
| `output/mapa_2_0_mapa.png` | **Hoja 1**: mapa numerado, leyenda, zonas, ficha de búsqueda, aeropuertos-Palma y mini resumen para comprar en Portugal. |
| `output/mapa_2_0_tabla.png` | **Hoja 2**: tabla maestra compacta (83 filas, 32 columnas de decisión, cabeceras por zona, explicación de columnas al pie). |
| `output/mapa_2_0_tabla2.png` | **Hoja 3**: tabla 2 con la comparativa frente al mejor, vuelo a Palma, qué entra en 260.000 €, sobreprecios y detalle de comunicaciones y hospitales. |
| `output/mapa_2_0_completo.pdf` | Las tres hojas en un solo **PDF vectorial** (3 páginas, zoom sin pérdida). También una por una: `mapa_2_0_mapa.pdf`, `mapa_2_0_tabla.pdf`, `mapa_2_0_tabla2.pdf`. |
| `output/informe_validacion.md` | Resultado de la última validación, fila a fila y columna a columna. |
| `docs/estudio_zonas.md` | **Estudio detallado por zonas** (tercer documento, tras mapa y tablas): las 16 zonas en el orden de la tabla, cada una con clima mes a mes, mar y baño, paseos y montaña, servicios, sanidad, aeropuertos, precios, seguridad, parecido con Mancor de la Vall, lo que no tendrás, y los 83 municipios uno a uno. Cierra con el orden "si yo fuera tú" y los datos pendientes de añadir a la tabla. |
| `output/mapa_2_0_estudio.pdf` | El estudio anterior en PDF A4 paginado con índice (marcadores) por zona, generado por `mapa2/estudio.py`. |
| `mapa2/estudio.py` | Convierte `docs/estudio_zonas.md` en `output/mapa_2_0_estudio.pdf` (`python -m mapa2.estudio`). |
| `mapa2/osm.py` | Descarga de OpenStreetMap (Overpass) y guarda en `data/osm/` los elementos de cada término municipal: playas, puertos, tren, centros de salud, farmacias, supermercados, miradores, montes, monumentos, mercados, golf, termas y carreteras. |
| `mapa2/mapas_municipio.py` | Mapa detallado + ficha visual por municipio (`output/mapas_municipios/NN_slug.png`): término municipal con los elementos OSM, y ficha con sol, lluvia, verano, mar, hospital, aeropuerto, servicios y precio comparados con Mancor. Se insertan en "Municipio a municipio". |
| `mapa2/mapas_zona.py` | Genera un mapa por zona en `output/mapas_zonas/zona_XX.png` (municipios numerados, hospitales, aeropuertos, autopistas, playas, montes, paseos y lugares nombrados en el estudio; localizador y leyenda comunes). Se insertan al inicio de cada zona del estudio (`python -m mapa2.mapas_zona`). |

## Cómo ejecutarlo

```bash
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt

python -m mapa2.validar --informe   # valida las 83 filas y escribe output/informe_validacion.md
python -m mapa2.render              # genera las tres hojas PNG en output/
python -m mapa2.render --pdf        # además, PDF vectorial por hoja y output/mapa_2_0_completo.pdf (3 páginas)
python -m mapa2.exportar            # genera el Excel y data/diccionario_columnas.csv
python -m mapa2.mapas_zona          # genera los 16 mapas de zona en output/mapas_zonas/
python -m mapa2.osm "A Guarda"      # descarga (o lee de caché) los elementos OSM del municipio
python -m mapa2.mapas_municipio "A Guarda"   # mapa detallado + ficha del municipio en output/mapas_municipios/
python -m mapa2.estudio             # convierte docs/estudio_zonas.md (con sus mapas) en output/mapa_2_0_estudio.pdf
```

Para cambiar un dato: edita `data/municipios.csv`, vuelve a ejecutar `validar` y, si está en verde, `render`.

## Columnas de la tabla

**Identificación**: Nº · Zona · Municipio · Provincia/distrito · País · Origen · (lat, lon técnicas)

**Clima**: Sol h/año (+ días equivalentes = h/8) · Días despejados · Días cubiertos · Días de lluvia · Lluvia mm · T. verano / invierno · Humedad · Viento (Baja/Media/Alta) · Niebla (Baja/Media/Alta) · Clase clima

**Mar**: Minutos a costa abierta · Playa de baño (agua apta y tranquila) · Minutos a la playa de baño (≤ 30) · Temperatura del agua en verano · Franja A/B

**Servicios**: Servicios (1-10) · Qué falta / qué añade (solo lo relevante) · Fibra (Sí/Parcial/No) · Comunicaciones (1-10: 9-10 autopista + tren/metro + aeropuerto; 7-8 autopista ≤ 10 min y tren o bus frecuente; 5-6 autopista a 10-20 min o tren regional; 3-4 nacional/comarcal; 1-2 aislado) · Comunicaciones (detalle)

**Sanidad**: Hospital público más cercano (km · min · nombre) · Hospital privado más cercano a ≤ 60 min (km · min · nombre; vacío si no hay) · Lista completa de hospitales con urgencias a ≤ 60 min, públicos [Púb] y privados [Priv] (hasta 4) · Km y minutos al más cercano del propio país

**Aeropuertos**: 2-3 aeropuertos a ≤ 120 min con km, minutos y vuelo directo a Palma · Minutos al más cercano · Palma desde el más cercano · Mejor opción Palma (conexión anual primero, luego el más cercano)

**Mercado**: Precio €/m² · A 2 hab · A 3 hab · B 2 hab · B 3 hab · Entra en 260.000 € · Obra nueva (Sí/Poca/No) · Primas por terraza / vistas al mar / ambas

**Inversión**: Facilidad de venta (1-10) · Revalorización esperada (1-10)

**Operativa**: Dependencia del coche (1-10) · Puntos débiles y observaciones (juicio principal + explicación de la franja B + «Además:» con los hechos de la fila que juegan en contra) · Comparado con el mejor

### Vuelo directo a Palma (horarios publicados 2026)

| Aeropuerto | Situación | Detalle |
|---|---|---|
| Bilbao (BIO) | Todo el año | Vueling y Air Europa, diario |
| Santiago (SCQ) | Casi todo el año | Vueling salvo semanas de invierno; Ryanair estacional |
| Santander (SDR) | Casi todo el año | Vueling marzo-noviembre |
| Vigo (VGO) | Verano | Vueling ~4/semana junio-septiembre; Air Nostrum julio-agosto |
| A Coruña (LCG) | Verano | Vueling verano (sin horario confirmado) |
| Asturias (OVD) | Verano | Volotea marzo-octubre; Vueling junio-septiembre |
| Porto (OPO) | Verano | Ryanair marzo-octubre; easyJet verano |

## Tipo de dato de cada columna

| Tipo | Significado |
|---|---|
| `OFICIAL` | Normales climáticas AEMET (1991-2020) / IPMA (1981-2010) de la estación más próxima ajustadas a la costa; geografía; horarios publicados |
| `DERIVADO` | Calculado con una regla explícita del esquema (días de sol, clase clima, franja, precios A/B, producto en presupuesto, km/min a hospitales y aeropuertos, mejor opción Palma, comparado con el mejor) |
| `MERCADO` | Referencia de portales inmobiliarios (Idealista, Fotocasa, Idealista PT) 2026, redondeada |
| `CRITERIO` | Escala o categoría asignada con los criterios escritos en el diccionario (servicios, fibra, viento, niebla, obra nueva, facilidad de venta, revalorización, dependencia del coche) |
| `TEXTO` | Cualitativo |

### Reglas de cálculo

- **Clase clima**: *Más favorable* = sol ≥ 2.400 h y ≤ 120 días de lluvia · *Favorable* = sol ≥ 2.200 h y ≤ 130 días · *Intermedio* = sol ≥ 1.850 h · *Más húmedo / nublado* = resto.
- **Franja**: A si el núcleo está a ≤ 5 min de la costa; B entre 5 y 30 min. Las columnas de precio A quedan en «—» en franja B y la explicación («Franja B: …») va en «Puntos débiles y observaciones».
- **Precios de referencia**: 2 hab = 65 m², 3 hab = 90 m². Franja A = €/m² × m² × 1,30 (reciente, vistas, exterior, a ≤ 5 min de la costa); franja B = €/m² × m² × 1,05. Redondeo a 100 €. **Entra en 260.000 €**: *Sí, en ambas franjas* si A 3 hab ≤ 260.000; *Sí en B; en A solo 2 hab*; *Solo 2 hab*; *Difícil*.
- **Km y minutos por carretera**: estimados desde la distancia en línea recta (hospital ×1,30 a 60 km/h + 3 min; aeropuerto ×1,22 a 85 km/h + 5 min), redondeados a 5 min, con correcciones manuales donde una ría o la frontera alargan el trayecto. Los hospitales de otro país se muestran marcados «fuera del SNS» y no cuentan como más cercano.
- **Comparado con el mejor**: diferencia frente al mejor valor de toda la tabla en sol (h), días de lluvia, minutos a hospital y minutos a aeropuerto.
- Sin prima de vistas al mar (municipios sin mar visible): Tui, Tomiño, Valença, Vila Nova de Cerveira, Ponte de Lima.

### Qué hay en cada hoja

- **Hoja 2 · Tabla maestra**: Nº y municipio; clima (sol, despejados, cubiertos, lluvia, temperaturas, humedad, viento, niebla); mar (costa abierta con franja A/B y minutos, playa de baño, minutos, agua); servicios (1-10, qué falta / añade, fibra, comunicaciones 1-10); hospital público y privado más cercanos (km · min); aeropuertos a ≤ 2 h con vuelo a Palma (★ = mejor opción Palma); precios A/B; obra nueva; facilidad de venta; revalorización; dependencia del coche; puntos débiles y observaciones. Al pie, cómo leer cada columna y el resumen de sobreprecios.
- **Hoja 3 · Tabla 2**: provincia y origen; clase clima; diferencia frente al mejor de la tabla en sol, lluvia, hospital y aeropuerto; Palma desde el aeropuerto más cercano y mejor opción Palma; qué entra en 260.000 €; sobreprecios por terraza / vistas / ambas; comunicaciones (detalle); todos los hospitales a ≤ 60 min.

## Qué comprueba el validador

- 83 filas, numeración 1-83 consecutiva, orden y nombres exactamente los de las zonas acordadas, sin duplicados; zona, origen y país coherentes.
- Todas las columnas del esquema y ninguna extra; obligatorias rellenas; rangos numéricos y valores cerrados válidos.
- Derivadas recalculadas: días de sol, clase clima, franja, precios A/B, producto en presupuesto, comparado con el mejor.
- Lista de hospitales legible, ordenada por minutos, con hospitales del esquema, tipo correcto, marca «fuera del SNS» coherente, al menos un público; km/min del más cercano coinciden con la lista; ≤ 60 min.
- Lista de aeropuertos legible (1-3, ≤ 120 min), situación Palma coherente con el esquema; minutos al más cercano y mejor opción Palma coinciden con la lista.
- Baño a ≤ 30 min; primas coherentes; explicación «Franja B: …» obligatoria en franja B; nota de servicios obligatoria cuando servicios ≤ 4 y prohibido «Falta: nada»; hospital público/privado más cercano coherentes con la lista; bloque «Además:» presente cuando el hospital está a > 30 min.
- Avisos no bloqueantes: hospital > 30 min o aeropuerto > 60 min (fuera de lo deseable, no descartan).

## Comprar en Portugal (mini resumen)

NIF portugués y cuenta bancaria · IMT (~4-6 % efectivo en 260.000 €) + Imposto do Selo 0,8 % + notaría y registro · IMI anual 0,3-0,45 % · CPCV con señal 10-20 % y escritura ante notario, revisando caderneta predial, licença de utilização y certificado energético · Obra nueva solo con licença y garantía bancaria · Tras 3 meses, CRUE en la Câmara y acceso al SNS; hasta entonces seguro privado · Residente fiscal si > 183 días (pensión tributa en Portugal con convenio; NHR cerrado) · Alquiler turístico con licencia de Alojamento Local · Coche con matrícula española hasta 183 días.

## Siguiente fase

Con los conceptos cerrados, la siguiente fase es la búsqueda intensiva en portales (Idealista, Fotocasa, Idealista PT, Imovirtual) por municipio y franja, aplicando la ficha de búsqueda.
