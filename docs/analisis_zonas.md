# MAPA 2.0 · Análisis de zonas "si yo fuera tú"

Análisis de las 16 zonas y 83 municipios de la tabla maestra, escrito desde el punto de vista del comprador: qué tendrás y qué no tendrás en cada zona respecto a tu vida actual en Mancor de la Vall. Los números (sol, lluvia, hospital, aeropuerto, precios, servicios) salen de `data/municipios.csv`. La tasa de criminalidad es la del Balance de Criminalidad 2025 del Ministerio del Interior (solo se publica para municipios de más de 20.000 habitantes; para el resto se indica la de la comunidad). Los días al año por encima de 30 °C son una estimación climatológica que todavía no está en la tabla.

## 0. La referencia: Mancor de la Vall

| Dato | Mancor | Qué buscamos replicar |
|---|---|---|
| Habitantes | 1.700 (85 hab/km²) | Pueblo o parroquia de casas bajas, baja densidad |
| Ciudad de servicios | Inca (36.000 hab.) a 5 min | Ciudad media a 5-15 min |
| Montaña | Tramuntana a la espalda (Massanella 1.364 m) | Monte o sierra detrás del pueblo, rutas a pie |
| Mar | 40 min | Mejorar: costa a ≤ 5-15 min |
| Sol | 2.800 h/año, ~120 días despejados | El máximo posible del norte |
| Lluvia | 455-700 mm, ~55 días | Se asume que llueve más; minimizar |
| Calor | Máx. media julio 29,6 °C, 37 días > 30 °C | Bajar: es lo único que quieres perder |
| Hospital | Inca 5 min (comarcal); Son Espases 45-60 min con tráfico | ≤ 30 min deseable |
| Aeropuerto | Palma 40 min | ≤ 60 min deseable, vuelo a Palma |
| Seguridad | Inca 36 infracciones/1.000 hab. (Palma 88, Calvià 100) | Igual o menor que Inca |
| Población extranjera | Baleares 21,7 % (la más alta de España) | Galicia 6,4 %, Asturias 6,8 %, Cantabria 8,2 %: en todos los candidatos será baja |
| Cesta de la compra | Baleares, comunidad más cara (OCU 2025) | Galicia entre las 5 más baratas; Asturias y Cantabria en la media |

Lo que ninguna zona del norte te va a dar: el sol de invierno y el aire seco mediterráneo. Lo que te van a dar todas las zonas costeras: veranos sin calor (de 3 a 8 días > 30 °C en Rías Baixas, de 1 a 3 en el Cantábrico). Solo el interior del Miño (Tui, Tomiño, Valença, Ponte de Lima) se acerca al calor de Mancor.

## 1. Tabla resumen por zonas

| Zona | Sol h | Días lluvia | Verano °C | Días > 30 °C (est.) | Hospital público min | Aeropuerto min | Vuelo Palma | 2 hab. franja A | "Inca" equivalente | Parecido a Mancor |
|---|---|---|---|---|---|---|---|---|---|---|
| Baixo Miño | 2.350-2.450 | 118-122 | 19,5-21 | 5 (costa) / 15-20 (Tui, Tomiño) | 30-45 (Vigo) | 25-50 | Santiago casi todo el año 90-105 min | 122-135 k | Vigo 40 min / Tui-Valença | 4/5 paisaje · 2/5 logística |
| Val Miñor | 2.450-2.500 | 115-118 | 20-20,5 | 3-8 | 15-20 (Vigo) | 20-25 | Santiago 80-85; Vigo verano | 211-220 k | Vigo 15-20 min; Nigrán/Baiona | 4/5 |
| Vigo e ría | 2.250-2.350 | 128-130 | 20,5 | 3-8 | 5-20 | 10-15 | Santiago 60-70; Vigo verano | 110-228 k | Vigo mismo | 2/5 (3/5 Coruxo-Canido) |
| O Morrazo | 2.250-2.300 | 125-128 | 20 | 3-6 | 10-35 (Pontevedra) | 35-45 | Santiago 55-70 | 127-148 k | Pontevedra 15-35 / Vigo en barco | 3/5 |
| Pontevedra e Sanxenxo | 2.250-2.400 | 115-130 | 19,5-20,5 | 3-8 | 5-30 | 25-60 | Santiago 50-60 | 161-245 k | Pontevedra 5-10 min | 4/5 (Poio) |
| O Salnés | 2.300-2.350 | 118-122 | 19,5 | 3-8 | 5-20 (Salnés) | 30-40 | Santiago 45-55 | 114-161 k | Vilagarcía 10-15 / Pontevedra 25 | 3/5 |
| Barbanza e Noia | 2.150-2.250 | 118-128 | 19,5 | 2-6 | 5-40 (Barbanza) | 40-50 | Santiago 40-50 | 101-127 k | Ribeira / Santiago 45 | 3/5 |
| Golfo Ártabro e Ferrol | 1.950-2.050 | 128-132 | 19 | 1-2 | 5-25 (CHUAC) | 10-45 | Santiago 45-50; Coruña verano | 127-220 k | A Coruña 10-20 min | 4/5 urbanismo · 1/5 clima |
| A Mariña | 1.850-1.950 | 140-150 | 18-18,5 | 0-1 | 5-35 (Burela) | 60-100 | Santiago 100-120 | 76-118 k | Viveiro / Burela / Ribadeo (pequeñas) | 1/5 |
| Asturias Occidente | 1.850-1.950 | 138-145 | 18,5 | 1-2 | 10-30 (Jarrio) | 40-75 | Asturias verano 40-70 | 93-114 k | Navia / Luarca (pequeñas); Oviedo 1 h | 2/5 |
| Asturias Centro | 1.780-1.850 | 145-150 | 19-19,5 | 1-3 | 5-25 (Avilés/Gijón) | 10-30 | Asturias verano 10-30 | 93-194 k | Avilés 10 / Gijón 20 / Oviedo 30 | 2/5 (3/5 Salinas) |
| Asturias Oriente | 1.700-1.750 | 153-155 | 19,5 | 1-3 | 20-45 (Arriondas) | 45-75 | Santander 55-115 | 135-186 k | Gijón 30-50 / Torrelavega | 3/5 paisaje · 1/5 clima |
| Cantabria Occidental | 1.680-1.700 | 148-152 | 20 | 2-6 | 5-40 (Valdecilla/Sierrallana) | 10-45 | Santander casi todo el año 10-45 | 169-220 k | Santander 15-20 / Torrelavega 15 | 3/5 (Liencres 4/5 urbanismo) |
| Cantabria Oriental | 1.650-1.700 | 150-155 | 20 | 2-6 | 5-25 (Laredo) | 15-35 | Santander casi todo el año; Bilbao todo el año | 161-203 k | Santander 20-30 / Bilbao 35 | 2/5 |
| Alto Minho (PT) | 2.400-2.500 | 112-120 | 20,5-21,5 | 3-6 (costa) / 20-25 (Ponte de Lima) | 5-40 (Viana / Ponte de Lima) | 35-60 | Porto verano 50-60; Santiago 90-115 | 161-194 k | Viana do Castelo 5-15 min | 4/5 (Afife-Carreço) |
| Litoral Norte (PT) | 2.550 | 105-108 | 20 | 3-6 | 5-25 (Póvoa/V. do Conde) | 15-35 | Porto verano 15-35 | 194-220 k | Póvoa / Vila do Conde mismo; Porto 40 | 2/5 (3/5 Esposende) |

## 2. Zona a zona

### 2.1 Baixo Miño (A Guarda, Oia, O Rosal, Tomiño, Tui)

**Cómo es.** El rincón suroeste de Galicia, entre la desembocadura del Miño y la Serra da Groba, con Portugal al otro lado del río. Parroquias dispersas de casas de piedra, viñedo de Albariño en el valle de O Rosal, el monte Santa Trega sobre A Guarda y una costa abierta y rocosa en Oia. Es la zona de la tabla que más se parece a Mancor en textura: granito, bancales, pueblo bajo con monte detrás. Es también rural de verdad: la ciudad está lejos.

**Tendrás.**
- Sol: 2.350-2.450 h, 75-78 días despejados, 118-122 días de lluvia. Segundo mejor grupo de la tabla.
- Verano sin calor en la costa (A Guarda, Oia: 19,5 °C de media estival, 5 días > 30 °C).
- Los precios más bajos de las Rías Baixas: 1.100-1.600 €/m². Con 260.000 € compras casa con terreno en O Rosal o Tomiño, o piso nuevo de 3 habitaciones con vistas en A Guarda o Tui.
- Portugal a 5 minutos (puente de Tui-Valença, ferry A Guarda-Caminha): compras, restaurantes y una segunda red de servicios.
- Tui: casco histórico monumental, AP-9 y A-55, 7/10 en servicios, hospital de Vigo a 30 min, obra nueva disponible.
- Baño en Area Grande y O Muíño (A Guarda, agua de ría del Miño, más templada que Oia) y en Cesantes (Redondela) desde Tui.
- Seguridad: municipios pequeños no medidos; Galicia 35/1.000 (la segunda comunidad más segura de España).

**No tendrás.**
- Hospital a menos de 30 min: Álvaro Cunqueiro (Vigo) a 30-45 min, Povisa 30-50. Es la peor sanidad de las Rías Baixas.
- Ciudad a 5 minutos: Vigo está a 40 min. A Guarda (10.000 hab.) y Tui (17.000) hacen de "Inca pequeña".
- Aeropuerto con vuelo anual a Palma cerca: Vigo a 25-50 min solo en verano; Santiago a 90-105 min.
- Fibra garantizada en todas las parroquias (Oia, O Rosal, Tomiño: parcial).
- Urbanizaciones: prácticamente no existen; el modelo es casa aislada en parroquia.
- En Tui y Tomiño, el verano de Mancor: 21 °C de media, 15-20 días > 30 °C y menos brisa. En Oia, lo contrario: viento medio y costa muy expuesta.

**Municipio a municipio.**
- *A Guarda*: villa marinera con puerto, servicios 6/10, Santa Trega encima, Area Grande a 5 min. Buen candidato para piso nuevo con vistas al Miño. Hospital 45 min, su debilidad.
- *Oia*: la costa más salvaje y solitaria; servicios 3/10, dependencia total del coche, sin obra nueva. Solo para quien quiera vivir mirando al Atlántico.
- *O Rosal*: el "Mancor gallego" en paisaje (valle de viñedos, monte, casas de piedra). Servicios 4/10, mar a 10 min, hospital 40. Franja B.
- *Tomiño*: valle interior junto al Miño, el más barato (1.100 €/m²). Servicios 5/10 (Goián). Más caluroso. Franja B.
- *Tui*: el más completo de la zona: servicios 7/10, comunicaciones 8/10, hospital 30, aeropuerto 25, obra nueva. Pero a 25 min del mar (franja B) y con verano cálido.

**Si yo fuera tú.** Solo si el paisaje pesa más que la logística. O Rosal para vivir "como en Mancor", Tui para no renunciar a servicios. Aceptas hospital a 30-45 min y ciudad a 40.

**Parecido a Mancor:** paisaje 4/5 · logística 2/5.

### 2.2 Val Miñor (Baiona, Nigrán, Gondomar)

**Cómo es.** El valle que baja desde la Serra do Galiñeiro y la Groba hasta la bahía de Baiona y las playas de Nigrán. Es la comarca más soleada de España dentro de la tabla, a 15-20 minutos del hospital de referencia de Galicia sur (Álvaro Cunqueiro) y a 20-25 del aeropuerto de Vigo. Nigrán es municipio de parroquias y urbanizaciones de casas bajas (Praia América, Panxón, Monteferro); Gondomar es el valle interior con las parroquias de Vincios, Donas y Chaín a los pies del monte; Baiona es la villa amurallada con puerto deportivo y Parador.

**Tendrás.**
- El mejor clima de la tabla en España: 2.450-2.500 h de sol, 78 días despejados, 110 días cubiertos, 115-118 días de lluvia. 3-8 días > 30 °C al año.
- Hospital público a 15-20 min y privado (Povisa) a 20-25. Aeropuerto a 20-25 min.
- Vigo (297.000 hab., servicios 10/10, AVE a Madrid, todo el comercio) a 15-25 min. Vigo tiene 39 infracciones/1.000, la mitad que Palma.
- Baño a 2-3 min en la bahía de Baiona (Ladeira, Barbeira), Panxón, Patos, Praia América; agua 17-19 °C.
- Montaña real detrás: Galiñeiro (700 m) y Groba con rutas señalizadas y vistas a las Cíes.
- Fibra en los tres (Gondomar parcial en parroquias altas). Obra nueva en los tres.
- Urbanizaciones de casas bajas en Nigrán, y casas con terreno y vistas en Gondomar.
- Balneario de Mondariz a 40 min; golf en Peinador y Domaio; puerto deportivo en Baiona.

**No tendrás.**
- El precio de Galicia: Nigrán 2.600 €/m² y Baiona 2.500. Con 260.000 € entran 2 habitaciones nuevas en franja A (211.000-220.000 €), pero no 3 habitaciones en primera línea (292.000-304.000 €). Gondomar sí: 3 habitaciones por 160.000 € en franja B.
- Tranquilidad en Baiona en julio y agosto: pasa de 12.000 a 40.000 personas; la PO-552 hacia Vigo se atasca en verano y en hora punta.
- Vuelo a Palma todo el año a menos de una hora: Vigo solo en verano; Santiago (casi todo el año) a 80-85 min.
- Invierno seco: 1.400-1.500 mm de lluvia al año, concentrados de octubre a marzo.

**Municipio a municipio.**
- *Baiona*: la más bonita y la más turística. Servicios 6/10, casco histórico de piedra, paseo marítimo, hospital 20. Franja A, 1 min del mar. Alquiler vacacional fácil si vas a la opción de dos viviendas.
- *Nigrán*: la de mejor logística (hospital 15, aeropuerto 20, servicios 7/10, facilidad de venta 9/10). Sin casco urbano fuerte: son parroquias con playa. Urbanizaciones de chalés y adosados en Praia América y Panxón.
- *Gondomar*: el valle. Casas bajas, piedra, monte detrás, precio 1.700 €/m², mar a 15 min, hospital a 15. El más parecido a Mancor de toda la tabla si le sumas la playa a un cuarto de hora. Servicios 6/10 en el centro de la villa.

**Si yo fuera tú.** Aquí iría primero. Gondomar si quieres casa con terreno y monte; Nigrán si quieres urbanización y playa a pie; Baiona si aceptas el verano lleno a cambio de una villa con vida todo el año.

**Parecido a Mancor:** 4/5.

### 2.3 Vigo e ría (Vigo, Redondela, Soutomaior, Vilaboa)

**Cómo es.** La ciudad más grande de Galicia y el fondo de su ría, donde el agua es tranquila y templada (Cesantes, Arcade). Vigo es una ciudad de cuestas, tráfico y actividad industrial; pero sus parroquias costeras del suroeste (Coruxo, Canido, Saiáns, Oia-Vigo) son barrios bajos con vistas a las Cíes, a 10 min del hospital. Redondela es una villa de 29.000 habitantes con la tasa de criminalidad más baja de todos los municipios medidos en Galicia (29/1.000). Soutomaior y Vilaboa son rurales y tranquilas junto al fondo de la ría.

**Tendrás.**
- La mejor logística de toda la tabla: hospital a 5-20 min (público y privado), aeropuerto a 10-15 min, AP-9, AVE Vigo-Madrid, servicios 10/10.
- Baño en agua de ría tranquila y templada: Cesantes y Arcade 18-20 °C.
- Precios muy distintos según dónde: Vigo 2.700 €/m² (el más caro de Galicia en la tabla), Redondela 1.450, Soutomaior y Vilaboa 1.300. En Redondela compras 3 habitaciones en franja A por 170.000 €.
- Sol razonable: 2.250-2.350 h, 118 días cubiertos, 128-130 días de lluvia.
- Verano suave: 20,5 °C, 3-8 días > 30 °C.
- Seguridad medida: Vigo 39, Redondela 29.

**No tendrás.**
- El sol del Val Miñor o del Salnés (100-250 h menos).
- Pueblo tranquilo en Vigo: es una ciudad de tráfico denso; el "Mancor" solo existe en las parroquias del suroeste, y a precio de Vigo.
- Obra nueva en Vilaboa; poca en Redondela y Soutomaior.
- Silencio total en Redondela: AP-9, ferrocarril y el puente de Rande están cerca.
- Servicios en Vilaboa (3/10) y Soutomaior (4/10): dependes del coche para todo.

**Municipio a municipio.**
- *Vigo*: solo tiene sentido en Coruxo, Canido, Saiáns u Oia-Vigo (casas bajas, vistas a las Cíes, playas de O Vao y Canido). Todo a 10 min. Caro.
- *Redondela*: el chollo logístico de la tabla: hospital 15-20, aeropuerto 10, servicios 7/10, Cesantes a 5 min, precio bajo, tasa de criminalidad mínima. Villa de trabajo, no de postal.
- *Soutomaior*: castillo, Arcade (ostras), ría al fondo, tranquilo, franja B a 8 min. Hospital de Pontevedra a 15.
- *Vilaboa*: parroquias rurales sobre la ría, precio mínimo, servicios mínimos.

**Si yo fuera tú.** Redondela como opción "práctica": no es la más bonita, pero compras bien y tienes hospital, aeropuerto y agua templada a un cuarto de hora. Vigo-Coruxo si prefieres pagar por vistas y ciudad.

**Parecido a Mancor:** 2/5 (3/5 en las parroquias del suroeste de Vigo).

### 2.4 O Morrazo (Cangas, Moaña, Bueu, Marín)

**Cómo es.** La península entre las rías de Vigo y Pontevedra. Costa da Vela, Cabo Home, las playas de Nerga, Barra y Lapamán, la isla de Ons enfrente. Villas marineras con vida propia (Cangas 26.000, Moaña 19.000, Bueu 12.000, Marín 24.000) y parroquias interiores altas con vistas a las dos rías (Aldán, Hío, Domaio). Barco a Vigo desde Cangas y Moaña en 20 minutos.

**Tendrás.**
- Sol 2.250-2.300 h, 125-128 días de lluvia, 1.500 mm. Verano de 20 °C, 3-6 días > 30 °C.
- Agua de ría templada (18-20 °C en Moaña y Marín) y playas atlánticas abiertas (Nerga, Barra) para pasear.
- Precios medios: 1.500-1.750 €/m². 3 habitaciones en franja A por 175.000-205.000 €.
- Servicios buenos en Cangas y Marín (7/10), fibra en los cuatro.
- Marín: hospital de Pontevedra a 10-15 min (público y Quirónsalud).
- Seguridad medida: Marín 31, Cangas 37 (ambas por debajo de Inca).
- Senderismo costero de primera (Costa da Vela, Monte Facho), golf en Domaio.

**No tendrás.**
- Hospital cerca desde Cangas, Moaña y Bueu: 25-35 min a Pontevedra o Vigo por el puente de Rande, que se atasca en hora punta.
- Aeropuerto a menos de 35-45 min.
- Ciudad a 5 minutos: Pontevedra a 15-35, Vigo en barco.
- Calma en Cangas en agosto: es destino de veraneo de Vigo y Madrid.
- Silencio en Marín: puerto comercial y escuela naval.
- Obra nueva salvo en Cangas.

**Municipio a municipio.**
- *Cangas*: la más completa y la más bonita; parroquias de Aldán e Hío son casas bajas con vistas. Hospital 35, su debilidad.
- *Moaña*: la más cercana a Vigo (barco y puente), ría tranquila, 1.600 €/m². Hospital 30.
- *Bueu*: la más tranquila, con Ons enfrente; servicios 5/10; hospital 25-30; aeropuerto 45.
- *Marín*: la práctica: hospital 10, servicios 7, precio 1.500; pero es villa portuaria e industrial.

**Si yo fuera tú.** Cangas (Aldán, Hío) si el mar y las rutas costeras te importan más que el hospital a 30 min. Marín si el hospital manda y no te molesta el puerto.

**Parecido a Mancor:** 3/5.

### 2.5 Pontevedra e Sanxenxo (Pontevedra, Poio, Sanxenxo, O Grove)

**Cómo es.** La ciudad peatonal modelo de España (Pontevedra, 84.000 hab.) y la ría que se abre hacia Sanxenxo y O Grove. Poio es el municipio que rodea Pontevedra por el norte de la ría: Combarro (hórreos y calles de piedra sobre el agua), Raxó, Samieira, Lourido. Sanxenxo es el gran destino de veraneo gallego; O Grove es la península del marisco y del balneario de A Toxa, con A Lanzada, la playa abierta más famosa de Galicia.

**Tendrás.**
- Pontevedra como "Inca" a 5-10 min: centro peatonal limpio y seguro (39 infracciones/1.000), servicios 10/10, hospital Montecelo y Quirónsalud a 5-10 min, estación de tren, comercio completo.
- Sol 2.250-2.400 h (Sanxenxo y O Grove 2.400 h, 115-118 días de lluvia, 1.250-1.300 mm: el rincón más seco de Galicia).
- Agua de ría templada (18-20 °C) a 2-5 min en Poio, Sanxenxo y O Grove.
- Fibra y obra nueva en Pontevedra, Poio y Sanxenxo.
- Aeropuerto de Vigo a 25 min desde Pontevedra y Poio; Santiago (Palma casi todo el año) a 50-60.
- Balnearios de Caldas de Reis y Cuntis a 20-30 min y A Toxa en O Grove.
- Precios: Poio y Pontevedra 1.900 €/m² (2 hab. franja A en Poio 161.000; 3 hab. 222.000). O Grove 2.300. Sanxenxo 2.900, el más caro de la tabla.

**No tendrás.**
- Tranquilidad en Sanxenxo de julio a septiembre: pasa de 17.000 a más de 100.000 personas. Fuera de temporada es una villa agradable de servicios 6/10.
- 3 habitaciones nuevas en Sanxenxo dentro de presupuesto (339.000 € en franja A). Sí 2 habitaciones (245.000).
- Hospital cerca desde O Grove: 30 min al Hospital do Salnés; privado a 45. Aeropuerto a 60.
- Vistas de montaña alta: el monte Castrove y el Xiabre son suaves; el paisaje es de ría, no de sierra.
- Menos de 120-130 días de lluvia en Pontevedra y Poio (1.500-1.600 mm).

**Municipio a municipio.**
- *Pontevedra*: la ciudad que mejor funciona para un jubilado en Galicia; franja B (mar a 12-15 min). Dependencia del coche 2/10, la más baja de la tabla junto a Vigo, A Coruña, Gijón y Santander.
- *Poio*: la mejor combinación pueblo + ciudad + mar de la tabla: Combarro y Raxó son piedra y ría, Pontevedra está a 10 min, el hospital a 10, el aeropuerto a 25. Servicios 7/10, fibra, obra nueva, facilidad de venta 8/10.
- *Sanxenxo*: la más cara y soleada; la eliges por el sol y por la facilidad de alquilar y vender (9/10), no por la calma.
- *O Grove*: la más marinera y seca; servicios 6/10; su punto débil es la distancia a hospital (30) y aeropuerto (60).

**Si yo fuera tú.** Poio (Raxó, Samieira, Combarro) es mi segunda opción de toda la tabla: es lo más parecido a vivir en un pueblo de piedra a 5 minutos de una Inca mejor que Inca.

**Parecido a Mancor:** 4/5 (Poio).

### 2.6 O Salnés (Meaño, Cambados, A Illa de Arousa, Vilanova de Arousa, Vilagarcía de Arousa)

**Cómo es.** La comarca del Albariño: viñedos en pérgola, pazos de piedra, villas marineras sobre la ría de Arousa (la más grande y calmada de Galicia). Cambados es la capital del vino y una de las villas más bonitas de Galicia (plaza de Fefiñáns); Vilagarcía es la ciudad de servicios (37.000 hab.), con puerto y estación; A Illa de Arousa es una isla unida por puente con el parque natural de Carreirón; Meaño y Vilanova son parroquias rurales y de viñedo con la ría a 5-10 min.

**Tendrás.**
- La ría más seca y calmada: 2.300-2.350 h de sol, 118-122 días de lluvia, 1.350-1.450 mm, agua 18-20 °C. Verano de 19,5 °C, 3-8 días > 30 °C.
- Hospital do Salnés (público, Vilagarcía) a 5-20 min; Quirónsalud Pontevedra a 20-35.
- Aeropuerto de Santiago (Palma casi todo el año) a 45-55 min: el mejor acceso a Palma de Galicia junto al Barbanza.
- Precios bajos: Meaño y Vilanova 1.350 €/m², Cambados 1.500, Vilagarcía 1.700, A Illa 1.900. 3 habitaciones en franja A por 158.000-222.000 €.
- Paisaje de viñedo, pazos y piedra: es lo más parecido a los bancales de Mallorca que hay en Galicia costera.
- Fibra en todos menos Meaño (parcial).

**No tendrás.**
- Una ciudad media de calidad a 5 minutos: Vilagarcía tiene servicios 8/10 pero es una ciudad portuaria con la tasa de criminalidad más alta de las medidas en Pontevedra (48/1.000); Pontevedra está a 25-30 min.
- Montaña detrás: el Salnés es un valle amplio de colinas suaves.
- Obra nueva salvo en Vilagarcía; en Meaño ninguna.
- Servicios en Meaño (3/10) y A Illa (4/10): coche para casi todo.
- Vuelo a Palma en verano a menos de 30-40 min (Vigo).

**Municipio a municipio.**
- *Meaño*: viñedo puro, casas de piedra, Dena como núcleo pequeño; ría y A Lanzada a 10 min; hospital 20. El "Mancor del Albariño", pero con servicios mínimos (3/10) y dependencia del coche 9/10.
- *Cambados*: la villa más bella y con vida todo el año; servicios 6/10; hospital 15; playa de ría a 3 min. Mi elección en la zona.
- *A Illa de Arousa*: isla, viento medio, muy tranquila en invierno y llena en agosto; hospital 20.
- *Vilanova de Arousa*: la más barata, casas bajas, ría tranquila, servicios 5/10; hospital 15.
- *Vilagarcía*: servicios, hospital a 5 min, tren, obra nueva; ambiente urbano-portuario y peor seguridad.

**Si yo fuera tú.** Cambados o una parroquia de Meaño con vistas a la ría, por presupuesto y paisaje, sabiendo que la "ciudad buena" está a 25 min y no a 5.

**Parecido a Mancor:** 3/5.

### 2.7 Barbanza e Noia (Rianxo, Boiro, A Pobra do Caramiñal, Ribeira, Porto do Son, Noia)

**Cómo es.** La otra orilla de la ría de Arousa y la ría de Muros e Noia, con la Serra do Barbanza (600 m, mirador de A Curota, dólmenes) a la espalda de todos los pueblos. Ribeira (27.000) es el gran puerto pesquero y tiene el hospital comarcal; Boiro y A Pobra son villas de veraneo gallego con playas de ría; Rianxo mira a Padrón y Santiago; Porto do Son ya es Atlántico abierto (castro de Baroña); Noia es la villa histórica del fondo de la ría.

**Tendrás.**
- Montaña de verdad a la espalda, con el mar a 3 min: la combinación más "Mancor con playa" del norte de Galicia.
- Sol 2.150-2.250 h, 118-128 días de lluvia, 1.250-1.500 mm (Ribeira la más seca).
- Precios de los más bajos de la tabla en Rías Baixas: 1.200-1.500 €/m². 3 habitaciones en franja A desde 140.000 €.
- Hospital do Barbanza (público) a 5-30 min.
- Aeropuerto de Santiago (Palma casi todo el año) a 40-50 min.
- Agua de ría 18-20 °C en Boiro, A Pobra, Rianxo; Atlántico abierto en Porto do Son.
- Seguridad: Ribeira 48/1.000 (la más alta medida en la zona); el resto no medidos, Galicia 35.

**No tendrás.**
- Hospital privado a menos de 45-60 min (HM Rosaleda, Santiago).
- Ciudad media: Ribeira tiene servicios 7/10 pero es un puerto; Santiago está a 45 min.
- Obra nueva (poca o ninguna en toda la zona).
- Sol como el Salnés o el Val Miñor: 150-300 h menos.
- Fibra completa en Porto do Son (parcial) ni servicios (4/10).
- Vuelo a Palma en verano cerca (Vigo a más de 1 h).

**Municipio a municipio.**
- *Rianxo*: villa de piedra sobre la ría, la más cercana a Santiago (40 min), precio mínimo 1.200. Hospital 30.
- *Boiro*: la más completa de las pequeñas (servicios 6/10, playas de Barraña y Carragueiros, hospital 20, aeropuerto 45). Mi elección en la zona.
- *A Pobra do Caramiñal*: la más bonita y la más cercana al hospital (10 min); A Curota encima.
- *Ribeira*: servicios, hospital a 5 min, dunas de Corrubedo; ambiente portuario y peor seguridad.
- *Porto do Son*: Atlántico abierto, viento y niebla media, casi sin servicios.
- *Noia*: casco histórico notable, ría de marisqueo (fango), franja B; hospital y aeropuerto a 40 en Santiago.

**Si yo fuera tú.** Boiro o A Pobra, como "Mancor de presupuesto": monte, mar templado, casa de 3 habitaciones por 150.000 € y Palma a 45 min de aeropuerto. Sabiendo que la ciudad y el privado están a 45-60.

**Parecido a Mancor:** 3/5.

### 2.8 Golfo Ártabro e Ferrol (A Coruña, Oleiros, Sada, Bergondo, Miño, Ares, Ferrol)

**Cómo es.** El arco de rías alrededor de A Coruña. Oleiros es el municipio más rico de Galicia y el modelo de urbanización que describes: calles limpias, casas bajas y chalés en Santa Cruz, Mera, Perillo, Bastiagueiro, a 10 min del centro de A Coruña y del CHUAC. Sada tiene puerto deportivo; Bergondo es rural-residencial junto a la ría de Betanzos; Miño tiene la Praia Grande y la urbanización con golf de Costa Miño; Ares es una aldea de ría; Ferrol es una ciudad naval en declive con playas atlánticas frías.

**Tendrás.**
- Urbanismo de urbanización, el mejor de la tabla: Oleiros, Sada y Costa Miño. Ambiente ordenado, limpio y seguro (Oleiros 36/1.000, Culleredo 37).
- A Coruña (250.000 hab., servicios 10/10, cultura, comercio, AVE) a 10-20 min. Hospital CHUAC y HM Modelo a 5-25 min.
- Aeropuerto de Alvedro a 10-15 min (Palma en verano); Santiago a 45-50 (casi todo el año).
- Verano fresco: 19 °C de media, 1-2 días > 30 °C.
- Lluvia moderada en cantidad (1.000-1.100 mm, menos que las Rías Baixas) y agua de ría templada en Sada, Bergondo y Miño (18-20 °C).
- Obra nueva en A Coruña, Oleiros y Sada.

**No tendrás.**
- Sol: 1.950-2.050 h, 150 días cubiertos y solo 50 días despejados al año (Mancor ~120). Es el clima gris-suave del norte gallego: no diluvia, pero el cielo está cubierto la mitad del año.
- Precio gallego: Oleiros 2.500 €/m² y A Coruña 2.600. 2 habitaciones nuevas en franja A por 211.000-220.000; 3 habitaciones no (292.000-304.000). Sada 2.100, Bergondo 1.700, Miño 1.600, Ares y Ferrol 1.200-1.500.
- Montaña detrás: el relieve es suave.
- Mar cálido para nadar en Ferrol (16-18 °C, playas abiertas y frías).
- Vida en Ares y Miño en invierno (servicios 4/10, fibra parcial).
- Vuelo a Palma todo el año desde Alvedro (solo verano).

**Municipio a municipio.**
- *A Coruña*: ciudad compacta y muy vivible, la de mejor logística junto a Vigo; barrio bajo con vistas casi no existe dentro de presupuesto.
- *Oleiros*: la urbanización de referencia: Mera y Santa Cruz son pueblos de casas bajas con playa y vistas a la ciudad. Hospital 10, aeropuerto 10, servicios 7/10, facilidad de venta 9/10. Caro.
- *Sada*: villa con puerto deportivo y ría templada, 2.100 €/m², hospital 15.
- *Bergondo*: rural-residencial, casas con terreno, ría a 5 min, precio 1.700; servicios 4/10 y coche 8/10.
- *Miño*: Praia Grande y la urbanización Costa Miño (golf, casas bajas); servicios 4/10; hospital 20; aeropuerto 30.
- *Ares*: aldea de ría tranquila; hospital y servicios en Ferrol a 25.
- *Ferrol*: la más barata; ciudad con problemas, seguridad 48/1.000, mar frío. No para tu perfil.

**Si yo fuera tú.** Oleiros (Mera, Santa Cruz) o Costa Miño si la urbanización limpia y segura te importa más que el sol; es la zona donde más "urbanización mallorquina" vas a sentir, con el cielo más gris de las Rías.

**Parecido a Mancor:** urbanismo 4/5 · clima 1/5.

### 2.9 A Mariña (O Vicedo, Viveiro, Xove, Cervo, Burela, Foz, Barreiros, Ribadeo)

**Cómo es.** La costa norte de Lugo, ya cantábrica: acantilados, playas espectaculares (As Catedrais, Esteiro, Covas), rías pequeñas y villas marineras. Viveiro es una villa amurallada con ría abrigada; Burela el puerto y el hospital; Foz y Ribadeo villas turísticas de verano; Barreiros una costa de segundas residencias construidas en los 2000; Cervo y Xove viven de la planta de aluminio de San Cibrao.

**Tendrás.**
- Los precios más bajos de toda la tabla: 900-1.400 €/m². 3 habitaciones en franja A desde 105.000 €; con 260.000 € compras dos viviendas sin esfuerzo.
- Cero calor: 18-18,5 °C de media estival, 0-1 días > 30 °C.
- Paisaje costero de primera y pueblos con vida propia (Viveiro, Ribadeo).
- Hospital público (Hospital da Mariña, Burela) a 5-35 min; A-8 a lo largo de toda la costa.
- Seguridad alta: Lugo es una de las provincias más tranquilas de España.

**No tendrás.**
- Sol: 1.850-1.950 h, 165 días cubiertos, 40 días despejados, 140-150 días de lluvia, niebla alta y humedad 81-83 %. Es el clima opuesto al de Mancor.
- Hospital privado: ninguno en la comarca.
- Aeropuerto a menos de 60-100 min; vuelo a Palma a 100-120 min (Santiago).
- Ciudad media: Viveiro (15.000) y Ribadeo (10.000) son villas; Lugo y A Coruña a más de 1 h.
- Vistas de ría templada para nadar: agua 17-19 °C y mar abierto.
- Obra nueva.

**Municipio a municipio.**
- *Viveiro*: la villa con más vida y encanto; ría abrigada de Covas; servicios 6/10; hospital 25. Mejor opción si eliges la Mariña.
- *Ribadeo*: A-8, aeropuerto de Asturias a 60 min, servicios 7/10, As Catedrais. Hospital de Jarrio (Asturias) a 30.
- *Foz*, *Burela*: villas de servicios; Burela con el hospital a 5 min.
- *Barreiros*: apartamentos de veraneo, vacíos en invierno.
- *Cervo*, *Xove*, *O Vicedo*: dependen de la fábrica o están aisladas; servicios 2-4/10.

**Si yo fuera tú.** No. Es la zona que más se aleja de lo que buscas (sol, ciudad cerca, hospital privado, aeropuerto). Solo tendría sentido si el precio fuese prioridad, y has dicho que no lo es.

**Parecido a Mancor:** 1/5.

### 2.10 Asturias Occidente (Castropol, Tapia de Casariego, Navia, Luarca)

**Cómo es.** La Asturias verde y marinera del oeste: Tapia (surf, casco marinero), Luarca (la villa blanca de la Costa Verde, puerto y cementerio sobre el acantilado), Navia (villa de servicios junto a la ría) y Castropol (el balcón blanco sobre la ría del Eo). A-8 junto a la costa; hospital comarcal de Jarrio; aeropuerto de Asturias a 40-75 min.

**Tendrás.**
- Pueblos auténticos, baratos (1.050-1.350 €/m²) y con playa a 1-5 min. 3 habitaciones en franja A por 130.000-160.000 €.
- Verano fresco (18,5 °C, 1-2 días > 30 °C) y lluvia moderada en cantidad (950-1.050 mm).
- Aeropuerto de Asturias a 40 min desde Luarca (Palma en verano).
- Hospital público (Jarrio) a 10-30 min.
- Seguridad alta: Asturias 36/1.000.

**No tendrás.**
- Sol: 1.850-1.950 h, 165 días cubiertos, niebla alta en Tapia y Castropol.
- Hospital privado (Oviedo a más de 1 h).
- Ciudad media: Navia (8.000) y Luarca (4.000) hacen de núcleo; Oviedo y Gijón a 1 h.
- Obra nueva.
- Vuelo a Palma todo el año (Asturias solo en verano; Santiago a 2 h).

**Municipio a municipio.**
- *Luarca*: la más bonita y con mejor aeropuerto (40 min); hospital 20; servicios 6/10.
- *Tapia*: villa marinera pequeña y cuidada, servicios 6/10, hospital 20.
- *Navia*: la práctica (hospital 10, A-8, servicios 6/10), menos encanto.
- *Castropol*: franja B, pueblo blanco sobre la ría, servicios 3/10.

**Si yo fuera tú.** Luarca por encanto, si la Asturias occidental te enamora; no por criterios.

**Parecido a Mancor:** 2/5.

### 2.11 Asturias Centro (Cudillero, Muros de Nalón, Soto del Barco, Salinas, Luanco, Candás, Gijón)

**Cómo es.** El área metropolitana asturiana vista desde la costa: Gijón (270.000 hab.), Avilés (77.000) y Oviedo (220.000, con el HUCA) a 10-30 min de cualquier punto. Salinas es una villa-playa residencial de chalés y casas bajas junto a Avilés; Luanco y Candás son villas marineras del Cabo Peñas; Cudillero el pueblo colgado de postal; Muros y Soto del Barco el estuario tranquilo del Nalón.

**Tendrás.**
- La mejor logística de Asturias: aeropuerto a 10-30 min (Palma en verano), hospitales de Avilés, Gijón (Cabueñes, Jove) y Oviedo (HUCA, Centro Médico) a 5-45 min, tres ciudades a menos de media hora.
- Verano fresco (19-19,5 °C, 1-3 días > 30 °C), agua 19-21 °C, la más templada del Cantábrico en la tabla.
- Salinas: la urbanización asturiana de casas bajas junto a la playa, 1.700 €/m², Avilés a 10 min, seguridad 33/1.000 (Castrillón), facilidad de venta 8/10.
- Precios razonables fuera de Gijón: 1.100-1.800 €/m².
- Gijón: ciudad de mar completa, servicios 10/10, 39/1.000 de criminalidad, 2.300 €/m².

**No tendrás.**
- Sol: 1.780-1.850 h, 162-165 días cubiertos, 42 días despejados.
- Aire limpio garantizado cerca de Avilés y Aboño: la siderurgia y la central-cementera pesan en Castrillón, Carreño y Gijón oeste según el viento.
- Obra nueva salvo en Gijón.
- Vuelo a Palma todo el año.
- Calma turística en Cudillero en verano.

**Municipio a municipio.**
- *Salinas*: la opción para tu perfil: casas bajas, paseo, playa, Avilés a 10, aeropuerto a 10, hospital a 10. Mi elección en Asturias.
- *Luanco*, *Candás*: villas marineras con vida todo el año, Gijón a 20 min, 1.650-1.800 €/m²; hospital 10-20.
- *Gijón*: si prefieres ciudad; caro para 3 habitaciones en primera línea (269.000).
- *Cudillero*: para visitar, no para vivir (cuestas, turistas, sin llano).
- *Muros*, *Soto del Barco*: estuario tranquilo, baratos, servicios 3-4/10, aeropuerto a 10 min.

**Si yo fuera tú.** Salinas, si aceptas 1.000 horas menos de sol que en Mancor a cambio de la mejor logística del Cantábrico occidental.

**Parecido a Mancor:** 2/5 (3/5 Salinas).

### 2.12 Asturias Oriente (Villaviciosa, Colunga, Ribadesella, Llanes, Ribadedeva)

**Cómo es.** La costa donde los Picos de Europa y la Sierra del Cuera caen casi al mar. Llanes (13.000) y Ribadesella (6.000) son villas de piedra e Indianos muy queridas por el veraneante madrileño; Villaviciosa es la capital de la sidra con su ría y Tazones; Colunga tiene Lastres y el museo del Jurásico; Ribadedeva (Colombres) es la frontera con Cantabria.

**Tendrás.**
- La montaña más espectacular de toda la tabla a la espalda del pueblo, y el mar a 1-5 min: Sueve, Cuera, Picos a 30-45 min.
- Pueblos de piedra y casas de Indianos, de gran calidad urbana.
- Agua 19-21 °C y playas abrigadas (Toró, Sablón, Santa Marina).
- Verano fresco (19,5 °C, 1-3 días > 30 °C).
- Aeropuerto de Santander (Palma casi todo el año) a 55-70 min desde Ribadedeva y Llanes.

**No tendrás.**
- Sol: el peor de la tabla junto a Cantabria: 1.700-1.750 h, 168 días cubiertos, 40 despejados, 153-155 días de lluvia.
- Hospital cerca ni privado: Arriondas (comarcal) a 20-45 min; Gijón a 30-50; ningún privado a menos de 30 salvo desde Villaviciosa.
- Ciudad media a 15 min (Gijón a 30-50, Torrelavega a 45).
- Precio bajo en Llanes y Ribadesella (2.100-2.200 €/m²; 3 habitaciones en franja A 245.000-257.000).
- Tranquilidad en Llanes en agosto.
- Obra nueva.

**Municipio a municipio.**
- *Llanes*: la villa más completa (servicios 7/10) y la más turística; hospital 35, aeropuerto 70. Revalorización 8/10.
- *Ribadesella*: la más equilibrada: hospital 20, servicios 7/10, Sella y Santa Marina; aeropuerto a 75-90.
- *Villaviciosa*: villa con vida propia y ría, franja B (mar a 12), Gijón a 25, precio 1.500; la más práctica.
- *Colunga*: Lastres es el pueblo colgado más bonito de Asturias; servicios 4/10.
- *Ribadedeva*: aldeas de Indianos, aeropuerto de Santander a 55, hospital 45.

**Si yo fuera tú.** Ribadesella o Villaviciosa si un día decides que los Picos pesan más que el sol. Con tus prioridades actuales, no.

**Parecido a Mancor:** paisaje 3/5 · clima 1/5.

### 2.13 Cantabria Occidental (San Vicente de la Barquera, Comillas, Suances, Liencres (Piélagos), Santander)

**Cómo es.** De la ría de San Vicente a la bahía de Santander: playas grandes, acantilados, el Parque de las Dunas de Liencres, y detrás la primera línea de los Picos. Santander (173.000 hab.) es una capital elegante y de servicios completos; Piélagos (Liencres, Mortera, Boo) es el municipio residencial de urbanizaciones de casas bajas de la capital, con la tasa de criminalidad más baja de todos los municipios medidos en la tabla (31/1.000, criminalidad convencional 16); Suances es villa-playa junto a Torrelavega; Comillas y San Vicente son villas históricas de veraneo.

**Tendrás.**
- Aeropuerto de Santander con vuelo a Palma casi todo el año a 10-20 min desde Santander, Liencres y Suances (45 desde San Vicente).
- Hospital Valdecilla (uno de los mejores de España) a 5-20 min; privados Mompía (Bezana, 10 min desde Liencres) y Santa Clotilde.
- Urbanizaciones de casas bajas, limpias y seguras en Liencres, Mortera y Boo; obra nueva en Piélagos y Santander.
- Verano suave (20 °C, 2-6 días > 30 °C con viento sur), agua 19-21 °C.
- Santander como ciudad: servicios 10/10, Sardinero, cultura, comercio; criminalidad 51/1.000 (ciudad, algo superior a Inca).
- Fibra en los cinco.

**No tendrás.**
- Sol: 1.680-1.700 h, 165-168 días cubiertos, 38-40 despejados, 148-152 días de lluvia. Es el extremo opuesto a Mancor.
- Precios gallegos: 2.000-2.600 €/m². 2 habitaciones nuevas en franja A por 169.000-220.000; 3 habitaciones en Liencres y Suances 234.000 (entra), en Santander 304.000 (no).
- Calma turística en Comillas y San Vicente en verano.
- Hospital cerca desde San Vicente (40) y Comillas (30).
- Montaña detrás en Liencres y Santander (la costa es llana; los Picos están a 1 h).

**Municipio a municipio.**
- *Liencres (Piélagos)*: la urbanización cantábrica de referencia: dunas, acantilados, casas bajas, Santander a 15, Valdecilla a 15, Mompía a 10, aeropuerto a 15, obra nueva, seguridad máxima. Mi elección en el Cantábrico.
- *Suances*: villa-playa con vida todo el año, Torrelavega (hospital Sierrallana) a 15, aeropuerto a 20; 2.000 €/m².
- *Santander*: si prefieres ciudad elegante y no te importa pagar.
- *Comillas*: universidad, Gaudí, ambiente cuidado y caro (2.400); hospital 30.
- *San Vicente de la Barquera*: la vista de los Picos desde la ría; hospital 40, aeropuerto 45.

**Si yo fuera tú.** Liencres/Mortera es la mejor combinación de seguridad, hospital y aeropuerto con vuelo anual a Palma de toda la tabla. La descarta solo el sol: casi la mitad de días despejados que en el Val Miñor.

**Parecido a Mancor:** 3/5 (Liencres 4/5 en urbanismo, 1/5 en clima).

### 2.14 Cantabria Oriental (Ribamontán al Mar, Noja, Santoña, Laredo, Castro-Urdiales)

**Cómo es.** La costa trasmerana y oriental: Somo y Loredo (surf, chalés dispersos en Ribamontán), Noja (bloques de apartamentos que multiplican por 30 su población en agosto), Santoña (anchoas y monte Buciero), Laredo (4 km de playa y torres de los 60-70) y Castro-Urdiales (34.000 hab., villa medieval convertida en ciudad dormitorio de Bilbao).

**Tendrás.**
- Bilbao a 35 min desde Castro: aeropuerto con vuelo a Palma todo el año, hospital de Cruces, gran ciudad.
- Aeropuerto de Santander a 15-35 min (Palma casi todo el año) desde el resto.
- Hospital de Laredo (público) a 5-25 min; privados de Santander a 15-45.
- Verano suave (20 °C), agua 19-21 °C.
- Ribamontán: urbanizaciones de chalés en Loredo y Langre con Santander en barco o a 15 min por carretera.
- Castro: servicios 8/10, obra nueva, seguridad 46/1.000.

**No tendrás.**
- Sol: 1.650-1.700 h, el mínimo de la tabla.
- Pueblos vivos en invierno en Noja (servicios 4/10 fuera de temporada) ni calma en verano en Noja y Laredo.
- Precios: 1.900-2.400 €/m²; 3 habitaciones en primera línea entre 222.000 y 281.000.
- Hospital privado cerca desde Santoña y Laredo (40-45).
- Montaña detrás salvo el Buciero en Santoña.
- Casas bajas en Laredo y Noja (bloques).

**Municipio a municipio.**
- *Ribamontán al Mar*: la única con perfil de urbanización tranquila; servicios 5/10, fibra parcial, hospital 15.
- *Noja*: no para vivir todo el año.
- *Santoña*: villa con vida propia, hospital 10, servicios 6/10, 1.900 €/m².
- *Laredo*: servicios 7/10, hospital 5; urbanismo de torres.
- *Castro-Urdiales*: ciudad completa con Bilbao al lado; precios vascos crecientes.

**Si yo fuera tú.** Solo Castro (por Bilbao) o Ribamontán (Loredo/Langre) y solo si el vuelo anual a Palma manda; con tu prioridad de sol, no.

**Parecido a Mancor:** 2/5.

### 2.15 Alto Minho (PT) (Valença, Vila Nova de Cerveira, Caminha, Moledo, Vila Praia de Âncora, Afife-Carreço, Viana do Castelo, Ponte de Lima)

**Cómo es.** El norte de Portugal entre el Miño y Viana do Castelo (90.000 hab.). Aldeas de granito entre la Serra d'Arga y el mar (Afife, Carreço, Areosa), villas de veraneo elegante (Moledo, Vila Praia de Âncora), la fortaleza de Valença frente a Tui, la villa de artistas de Cerveira sobre el río, y Ponte de Lima, la villa más antigua de Portugal, en el interior. Portugal está entre los 5-7 países más seguros del mundo y su norte es la región más tranquila del país.

**Tendrás.**
- El mejor cielo de la tabla junto al Litoral Norte: 2.400-2.500 h de sol, 80 días despejados, 108-112 días cubiertos, 112-120 días de lluvia.
- Aldeas de piedra con monte detrás y playa a 2-5 min: Afife-Carreço es, con Gondomar y O Rosal, lo más parecido a Mancor de toda la tabla.
- Viana do Castelo como "Inca": servicios 9/10, hospital Santa Luzia a 5-15 min, casco histórico, paseo, estación de tren, seguridad 8/10 en facilidad de venta.
- Porto (aeropuerto con 80+ destinos, Palma en verano) a 50-60 min; Santiago (Palma casi todo el año) a 90-115.
- Precios: Viana, Afife, Caminha 1.900-2.100 €/m²; Vila Praia de Âncora 2.000; Cerveira y Ponte de Lima 1.500; Valença 1.300. 3 habitaciones en franja A por 222.000-246.000 (entran).
- Coste de vida: restaurantes, vino, pescado y servicios más baratos que en Galicia; cesta similar.
- Fibra en todos (Afife-Carreço parcial). Golf en Ponte de Lima; termas de Monção y Gerês.

**No tendrás.**
- Mar templado ni tarde de terraza sin viento en verano: agua 16-18 °C (la más fría de la tabla) y "nortada" (viento norte fuerte por las tardes de junio a agosto, marcado como viento alto en Moledo, Afife y Viana).
- Hospital privado cerca: Trofa Saúde Braga a 40-60 min; CUF Porto a 1 h.
- Sanidad pública española: el SNS portugués es más lento; conviene seguro privado (100-150 €/mes a los 63) y saber que hasta obtener el CRUE solo tienes urgencias con la Tarjeta Sanitaria Europea.
- Régimen fiscal ventajoso para pensionistas: el RNH se cerró; tributas la pensión en Portugal como residente.
- Vuelo a Palma todo el año a menos de 90 min.
- Verano fresco en el interior: Ponte de Lima y Valença 21-21,5 °C de media, 20-25 días > 30 °C y niebla alta de valle en invierno (Ponte de Lima).
- Casas bajas en el centro de Viana (bloques); sí en las freguesias.

**Municipio a municipio.**
- *Valença*: fortaleza y Tui a 5 min; interior, franja B; hospital de Ponte de Lima a 40. Barata.
- *Vila Nova de Cerveira*: villa cuidada sobre el río, arte, franja B (mar a 20); hospital 35.
- *Caminha*: desembocadura del Miño, ferry a A Guarda, casco histórico; servicios 5/10; hospital 30.
- *Moledo*: veraneo elegante de Porto, pinar, viento alto; servicios 3/10, sin obra nueva.
- *Vila Praia de Âncora*: villa marinera con vida todo el año, playa abrigada por el espigón, servicios 6/10, hospital 20, 2.000 €/m².
- *Afife-Carreço*: aldeas de granito, Serra d'Arga detrás, playas abiertas; Viana a 10-15 min; servicios 3/10, coche 7/10. El "Mancor portugués".
- *Viana do Castelo*: la ciudad; servicios 9/10, hospital 5, Porto a 50, obra nueva, revalorización 8/10.
- *Ponte de Lima*: la más bonita del interior; hospital a 5 min; caluroso y con niebla; franja B.

**Si yo fuera tú.** Afife-Carreço (o Areosa, entre Carreço y Viana) para vivir en aldea de piedra a 10 min de una ciudad completa; Vila Praia de Âncora si quieres servicios a pie. Es mi tercera opción de la tabla, con la sanidad privada y el papeleo como precio.

**Parecido a Mancor:** 4/5 (Afife-Carreço).

### 2.16 Litoral Norte (PT) (Esposende, Póvoa de Varzim, Vila do Conde)

**Cómo es.** La costa llana al norte de Porto: Esposende (Ofir, Apúlia, estuario del Cávado y parque litoral), Póvoa de Varzim (63.000 hab., ciudad-balneario con casino y paseo) y Vila do Conde (80.000, casco histórico, acueducto, astilleros). Metro de Porto (línea B) desde Póvoa y Vila do Conde; A28 a Porto en 30-40 min.

**Tendrás.**
- El máximo sol de la tabla: 2.550 h, 85 días despejados, 105 días cubiertos, 105-108 días de lluvia, 1.200-1.300 mm.
- Aeropuerto de Porto a 15-35 min: el mejor aeropuerto de toda la tabla para viajar en la jubilación (Palma solo en verano).
- Hospital público Póvoa/Vila do Conde a 5-25 min; CUF Porto (privado, referencia) a 30-40; hospitales de Porto (São João, Santo António) a 40.
- Metro a Porto: ciudad grande, cultura y sanidad sin coche.
- Servicios 8-9/10 en Póvoa y Vila do Conde; obra nueva en los tres.
- Verano suave: 20 °C, 3-6 días > 30 °C.
- Precios: Esposende 2.300, Póvoa y Vila do Conde 2.600 €/m². 2 habitaciones nuevas en franja A por 194.000-220.000; 3 habitaciones en Esposende 269.000 (justo fuera), en Póvoa 304.000 (no).

**No tendrás.**
- Montaña detrás: llanura costera (las sierras de Rates y Franqueira son colinas).
- Casas bajas en los frentes marítimos de Póvoa y Vila do Conde (bloques); sí en Ofir, Apúlia y las freguesias interiores.
- Mar templado ni tarde sin viento en verano: agua 16-18 °C y nortada alta.
- Calma en agosto en Póvoa; tráfico fluido en la A28 en hora punta hacia Porto.
- Hospital privado a menos de 30 min ni sanidad pública española (ver Alto Minho).
- Vuelo a Palma todo el año (Porto solo en verano; Santiago a 2 h).

**Municipio a municipio.**
- *Esposende*: la más tranquila y residencial (Ofir entre pinos, Apúlia con molinos), servicios 6/10, hospital 25, aeropuerto 35. Mi elección en la zona.
- *Póvoa de Varzim*: ciudad de playa con todo (servicios 8/10, hospital 5, metro, casino); urbanismo de bloques.
- *Vila do Conde*: la más histórica y con mejores comunicaciones (9/10), aeropuerto a 15; también bloques en el frente.

**Si yo fuera tú.** Esposende (Ofir o Apúlia) si quieres el máximo sol y el mejor aeropuerto de la tabla y no te importa que la montaña quede lejos y el mar esté frío.

**Parecido a Mancor:** 2/5 (Esposende 3/5).

## 3. Si yo fuera tú: orden final de zonas

1. **Val Miñor (Gondomar, Nigrán, Baiona).** Máximo sol de España en la tabla, hospital y aeropuerto a 15-25, Vigo a 20, monte detrás, urbanizaciones y parroquias de casas bajas. Renuncias: precio en Nigrán/Baiona, verano lleno en Baiona, Palma anual a 85 min.
2. **Poio (Pontevedra e Sanxenxo).** Pueblo de piedra sobre la ría, Pontevedra a 5-10, hospital a 10, aeropuerto a 25. Renuncias: 200 h menos de sol que el Val Miñor, montaña suave.
3. **Alto Minho costa (Afife-Carreço, Vila Praia de Âncora).** Aldeas de granito con monte y mar, Viana a 10-15, cielo de 2.500 h, Porto a 1 h, país muy seguro y barato. Renuncias: mar frío, nortada, sanidad privada obligatoria, papeleo portugués.
4. **O Salnés y Barbanza (Cambados, Meaño, Boiro, A Pobra).** Viñedo o sierra, ría templada, Santiago (Palma casi todo el año) a 45-55 min, 3 habitaciones por 150.000-180.000. Renuncias: ciudad buena a 25-45, sin privado cerca en el Barbanza.
5. **Vigo e ría (Redondela, Vigo-Coruxo).** La mejor logística de la tabla. Renuncias: entorno más urbano, menos sol.
6. **Litoral Norte (Esposende).** El máximo sol y el mejor aeropuerto para viajar. Renuncias: sin montaña, mar frío, viento.
7. **Golfo Ártabro (Oleiros, Costa Miño).** La urbanización perfecta con A Coruña a 10 min. Renuncias: 50 días despejados al año.
8. **Cantabria Occidental (Liencres, Suances).** Seguridad máxima, Valdecilla, Palma casi todo el año a 15 min. Renuncias: 1.700 h de sol.
9. **Baixo Miño (O Rosal, Tui).** El paisaje más parecido a Mancor. Renuncias: hospital a 30-45, ciudad a 40.
10. **O Morrazo (Cangas, Marín).** Mar y rutas de costa. Renuncias: puente de Rande para todo.
11. **Asturias Centro (Salinas).** Logística asturiana completa. Renuncias: 1.800 h de sol, industria cercana.
12. **Asturias Oriente (Ribadesella, Villaviciosa).** Los Picos sobre el mar. Renuncias: el sol más bajo, sin privado.
13. **Cantabria Oriental (Ribamontán, Castro).** Bilbao y Palma todo el año. Renuncias: sol mínimo, urbanismo de bloques.
14. **Asturias Occidente (Luarca).** Encanto. Renuncias: todo lo demás.
15. **A Mariña.** Precio. Renuncias: todo lo que has puesto como prioridad.

## 4. Lo que aún no mide la tabla y decidiría entre las cinco primeras

- Días > 30 °C y máxima media de julio por municipio (AEMET / IPMA).
- Tasa de criminalidad por municipio (Interior; provincial para los de menos de 20.000 hab.) y % de población extranjera (INE).
- Ciudad de referencia y minutos en hora punta y hora valle.
- Densidad de población y tipo de edificación predominante en las parroquias costeras.
- Plazas turísticas por habitante (saturación de agosto) y evolución de población 2015-2025.
- Índice OCU de la cesta de la compra de la ciudad de referencia y cadenas a ≤ 10 min.
- Fiscalidad autonómica al comprar y vivir (ITP, IBI, sucesiones; IMT e IMI en Portugal).
- Golf, puerto deportivo, piscina climatizada, rutas señalizadas y balneario más cercano.
- Aseguradoras con cuadro médico en el hospital privado más cercano.
- Zona de radón (CSN), riesgo de incendio forestal y coste real de calefacción/deshumidificación.
