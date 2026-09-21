# Fuentes para reescribir Asturias Occidental

**Bloque:** CURSOR_26 · **rama:** `revision-2026-09-21` · **HEAD base:** `45c207a`  
**Alcance:** extracción + auditoría documental. **No** reescritura. **No** corrección de producto. **No** internet.  
**Protección:** A Mariña 8/8 intacta (no modificar `relatos-a-marina.ts` ni JSON de A Mariña).

**Lugares (este paquete):** Castropol · Tapia de Casariego · Navia · Luarca / Valdés  
**Archivo relatos:** `web/src/lib/relatos-asturias-occidente.ts`  
**Archivo capa:** `web/src/data/municipios-asturias-occidente.json`

---

## 1. Reglas y jerarquía

1. **Capa estructurada 2026** (`municipios-asturias-occidente.json`, derivada master v15) = autoridad para hechos actuales.
2. **Auditorías 2026** (`AUDITORIA_EDITORIAL_RELATOS_2026.md`, `P0_RESTANTES_POST_PRECIOS_2026.md`) = autoridad sobre problemas detectados.
3. **Relato actual** = P4, escenas, topónimos; **no** autoridad si contradice la capa.
4. **estudio_zonas.md** y precios históricos = trazabilidad/contexto; **no** sustituyen 2026.
5. **No internet.** Ausencias se documentan; no se rellenan por intuición.
6. **No** convertir `null` / textos truncados `…` en cifras históricas.
7. Omisiones de €/m², A/B y notas X/10 que viven en FichaCapa2026/TablaPrecios **no** son conflictos.
8. **No existe** aún un plan editorial tipo CURSOR_19 para Asturias Occidental: este paquete construye fichas de auditoría solo con material ya en repo.

Estados: `ALINEADO` · `OBSOLETO` · `DUPLICA_CAPA` · `P4_PRESERVAR` · `SOPORTADO_PERO_INFRAUSADO` · `NO_SOPORTADO_NO_INVENTAR` · `REQUIERE_VERIFICACION_EXTERNA`

### Extractos de auditoría global (CITA)

Filas CURSOR_14 / auditoría editorial:

```
| 47 | Castropol | Asturias Occidente | precio relato ~1050 vs ficha 1295 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 48 | Tapia de Casariego | Asturias Occidente | precio relato ~1350 vs ficha 2200 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 49 | Navia | Asturias Occidente | precio relato ~1100 vs ficha 1384 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 50 | Luarca (Valdés) | Asturias Occidente | precio relato ~1050 vs ficha 1256 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite €/m² ya en TablaPrecios/capa; repite horas de sol (+5) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
```

Resumen precios conflicto:

```
| Castropol | precio relato ~1050 vs ficha 1295 |
| Tapia de Casariego | precio relato ~1350 vs ficha 2200 |
| Navia | precio relato ~1100 vs ficha 1384 |
| Luarca (Valdés) | precio relato ~1050 vs ficha 1256 |
```

P0 restantes (47–50):

```
| 47 | Castropol | Asturias Occidente | no | — |
| 48 | Tapia de Casariego | Asturias Occidente | no | — |
| 49 | Navia | Asturias Occidente | no | — |
| 50 | Luarca (Valdés) | Asturias Occidente | no | — |
```

### Estudio de zonas §10 (histórico — NO autoridad 2026)

<details><summary>CITA estudio_zonas.md § Asturias Occidente</summary>

## 10. Asturias Occidente (Asturias) · Castropol, Tapia de Casariego, Navia, Luarca (Valdés)

### La zona

La Asturias verde y marinera del oeste, entre la ría del Eo y el Cabo Busto: Castropol (pueblo blanco colgado sobre la ría, frente a Ribadeo), Tapia (villa de puerto con casco marinero y surf), Navia (villa de servicios en su ría, con Puerto de Vega al lado, uno de los pueblos marineros más bonitos de Asturias) y Luarca (la "villa blanca de la Costa Verde": puerto, cementerio sobre el acantilado, faro, palacetes de Indianos). La A-8 corre paralela a la costa; el hospital comarcal está en Jarrio (Coaña) y el aeropuerto de Asturias a 40-75 min.

Es una costa auténtica, barata y tranquila, con cielo cantábrico: cubierto la mitad del año.

### Clima mes a mes

| | Oct-Mar | Abr-May | Jun-Sep | Año |
|---|---|---|---|---|
| Días de lluvia al mes | 14-16 | 12-13 | 7-10 | 138-145 |
| Máxima / mínima típica | 13 / 6 °C (ene.) | 16 / 9 °C | 22-23 / 15 °C (jul.) | |
| Horas de sol al mes | 70-110 | 170-200 | 210-240 | 1.850-1.950 |

Sol 1.850-1.950 h, 40-42 días despejados, 165 cubiertos. Lluvia 950-1.050 mm en 138-145 días (cantidad moderada, frecuencia alta). Verano 18,5 °C de media, 1-2 días > 30 °C. Niebla alta en Tapia y Castropol, media en Navia y Luarca. Viento medio. Comparado con Mancor: 850-950 h de sol menos; días despejados a un tercio.

### Mar y baño

Penarronda (dunas, entre Castropol y Tapia), Arnao, Anguileiro-Represas y Serantes (Tapia; surf), Mexota, Navia, Frexulfe (monumento natural), Barayo (reserva natural, entre Navia y Valdés), Luarca (1ª y 2ª), Otur, Cueva, Cadavedo. Agua 18-20 °C en agosto. Mar abierto, bravo; bañarse con calma en las rías de Navia y del Eo.

### Paseos y montaña

Ruta costera Tapia-Figueras; paseo de la ría del Eo (Reserva de la Biosfera Río Eo, Oscos e Terras de Burón); castro de Coaña (5 min de Navia); ruta de la ría de Navia; Puerto de Vega (paseo, mirador); Cabo Busto (senda circular); Luarca: ruta de los miradores, faro, Jardines de la Fonte Baxa; Cadavedo. Montaña: la sierra de la Bobia y los Oscos a 45 min (verde, lluvioso).

### Servicios y ciudad de referencia

Navia 6/10 (villa completa con centro de salud, comercio, mercado, cine), Tapia 6/10, Luarca 6/10 (villa con vida todo el año), Castropol 3/10. Ciudad: Oviedo (220.000) y Avilés a 1 h; Ribadeo a 10 min desde Castropol.

### Sanidad

Hospital de Jarrio (Coaña, público, comarcal): 10 min desde Navia, 20 desde Tapia y Luarca, 30 desde Castropol. Privado: Centro Médico de Asturias (Oviedo) a 1 h 10. HUCA (Oviedo) a 1 h para lo que Jarrio no cubre.

### Aeropuertos y Palma

Asturias (Palma en verano) a 40 min desde Luarca, 55 desde Navia, 70 desde Tapia, 75 desde Castropol. Santiago (Palma casi todo el año) a 2 h.

### Precios y qué compras con 260.000 €

Castropol 1.050 €/m², Navia 1.100, Luarca 1.300, Tapia 1.350. 3 habitaciones franja A entre 129.000 (Navia) y 158.000 (Tapia). Casas de Indianos rehabilitadas 150.000-260.000. Sin obra nueva (Castropol) o muy poca. Fibra en Tapia, Navia y Luarca; parcial en Castropol.

### Seguridad y ambiente

Ninguno supera 20.000 habitantes; Asturias 36/1.000. Población extranjera baja (4-6 %). Ambiente: villas de pesca y veraneo asturiano-madrileño, tranquilas, con mucha población mayor.

### Parecido con Mancor / Mallorca

2/5: pueblos pequeños y cuidados con mar, pero de piedra oscura, pizarra y prado; sin sol ni piedra seca.

### Lo que no tendrás

- Sol: 165 días cubiertos.
- Hospital privado a menos de 1 h.
- Ciudad a menos de 1 h.
- Vuelo a Palma todo el año (Santiago a 2 h).
- Obra nueva.
- Verano de terraza: 7-10 días de lluvia al mes en julio y agosto.

### Municipio a municipio

**Castropol (nº 47).** 3.400 habitantes; pueblo blanco en un promontorio sobre la ría del Eo, Figueras (astilleros, palacio de Peñalba), Penarronda a 10 min (franja B). Servicios 3/10. Hospital 30. Aeropuerto 75. Precio 1.050. Para quién: quien quiera vistas a la ría desde un pueblo blanco y tenga a Ribadeo (10 min) como villa de servicios.

**Tapia de Casariego (nº 48).** 3.800 habitantes; puerto, casco marinero cuidado, isla del faro, playas de surf a 2 min, paseo costero. Niebla alta. Servicios 6/10. Hospital 20. Aeropuerto 70. Precio 1.350: 3 habitaciones 158.000. Para quién: quien quiera villa marinera pequeña y muy cuidada, con Ribadeo y Navia a 15-20.

**Navia (nº 49).** 8.500 habitantes; villa de servicios en su ría, paseo, playa a 5 min, Puerto de Vega a 5 min, castro de Coaña, A-8. Servicios 6/10. Hospital 10 (el mejor tiempo de la zona). Aeropuerto 55. Precio 1.100: 3 habitaciones 129.000. Para quién: la práctica: hospital, autovía y servicios, menos encanto que Luarca.

**Luarca (nº 50).** 4.500 habitantes (12.000 en el concejo de Valdés); la villa blanca: puerto, siete puentes sobre el río Negro, cementerio y ermita sobre el acantilado, faro, casas de Indianos, mercado. Playas 1ª y 2ª en la villa; Otur, Cueva y Cadavedo a 10-15. Servicios 6/10. Hospital 20. Aeropuerto 40 (el mejor de la zona). Precio 1.300: 3 habitaciones franja A 152.000. Fibra sí. Para quién: la más bonita y la mejor comunicada de la Asturias occidental. Si eliges esta zona, aquí.

### Si yo fuera tú

Luarca, por encanto y aeropuerto a 40 min, si la Asturias verde te enamora en una visita. Por criterios, no es tu zona.

![Mapa de la zona 11](../output/mapas_zonas/zona_11.png)

</details>

---

## 2. Castropol

### 2.1 Relato actual completo

> CITA LITERAL — clave `castropol` en `web/src/lib/relatos-asturias-occidente.ts`.

```ts
castropol: {
 escala: "Pueblo blanco sobre la ría",
 abrir: [
 "Castropol se siente más pequeño de lo que el mapa del Eo promete. Unos tres mil cuatrocientos habitantes en un pueblo blanco sobre un promontorio de la ría, frente a Ribadeo —Galicia al otro lado del agua, tan cerca que el casco gallego se lee sin prismáticos—. Figueras —astilleros y el palacio de Peñalba— forma parte del concejo; Penarronda, playa de dunas entre este municipio y Tapia, queda a unos diez minutos. No es villa completa: es orilla de frontera, Reserva de la Biosfera del Eo, y una escala que pide coche para casi todo lo que no sea pasear la ría.",
 "Quien vive aquí es gente local de toda la vida, vecinos de las parroquias y quien buscó vistas al agua a propósito. Un martes de noviembre los servicios son 3/10: el súper completo y muchos recados se resuelven en Ribadeo, a unos diez minutos. El Hospital de Jarrio, en Coaña, queda a unos treinta minutos. El aeropuerto de Asturias anda alrededor de los setenta y cinco; Santiago-Lavacolla, hacia las dos horas. La fibra es parcial: hay que comprobarla casa por casa, no darla por hecha porque el vecino la tenga.",
 "El tráfico es de pueblo casi todo el año. En julio y agosto la ría, Figueras y Penarronda reciben visitantes, coches en calles estrechas y aparcamiento justo en los días claros. Las patronales locales animan el pueblo unos días con ruido y afluencia; el resto del año Castropol es silencio de orilla blanca. Quien viva solo del municipio notará el vacío de invierno: terrazas quietas, niebla pegada al promontorio, Galicia enfrente como única ciudad a un salto corto.",
 "La semana tiene rutinas distintas a las de Navia o Luarca. Aquí la rutina es el paseo de ría, el mirar Ribadeo y bajar a Penarronda o a la orilla calmada del Eo cuando el Cantábrico abierto esté bravo. Primavera y otoño son buenas épocas para conocerlo: el verde de la Reserva se pone de un verde intenso; en noviembre empieza la niebla alta de verdad. Si solo conoces un sábado de sol de agosto, te llevas la imagen de folleto. Si has visto un martes vacío, ya puedes decidir si de verdad quieres vivir aquí.",
 "Castropol no pretende competir con la villa de servicios ni con la villa blanca. Encaja para quien quiera vistas a la ría desde un pueblo blanco y acepte Ribadeo como comercio y gestos diarios. La A-8 y la N-640 pasan cerca; el tren FEVE en Vegadeo completa el mapa. El resto es agua, frontera Galicia-Asturias y un horizonte de prado y orilla.",
 ],
 tiempo: [
 "Si vienes de Baleares, notará el cielo más gris y con menos sol que en Mallorca, no tanto el frío. Castropol suma unas mil novecientas cincuenta horas de sol y unos cuarenta días despejados, frente a las dos mil ochocientas horas y ciento veinte jornadas claras de Mallorca. Caen alrededor de mil milímetros en unos ciento treinta y ocho días; hay unos ciento sesenta y cinco cubiertos. La niebla es alta; el viento, medio. También en verano llueve con frecuencia: siete a diez días al mes entre julio y agosto no son excepción.",
 "El verano ronda dieciocho grados y medio, con máximas habituales alrededor de veintidós o veintitrés y apenas uno o dos días al año por encima de treinta. El agua anda entre dieciocho y veinte grados; la ría del Eo ofrece baño más calmado que el Cantábrico abierto hacia Penarronda. Conviene venir un día de niebla densa y un noviembre, no solo un sábado de sol de agosto.",
 ],
 vivir: [
 "El invierno aquí se nota en la casa más que en el termómetro. La niebla alta se pega al promontorio y la humedad de estuario entra en paredes y armarios: conviene preguntar por aislamiento, orientación hacia el Eo y rastros de moho, no solo por las vistas a Ribadeo. Una terraza que en agosto parece el centro de la vida, entre noviembre y febrero se usa la mitad o menos. Visitar un día de niebla densa enseña más que mil fotos de sol sobre la ría.",
 "El día a día sin coche casi no existe. Los servicios son 3/10: el súper completo y muchos recados se resuelven en Ribadeo, a unos diez minutos; el tren FEVE en Vegadeo completa el mapa, pero la semana se cose con el volante. En enero el pueblo no se apaga del todo —hay vecinos y orilla—, pero la densidad es de silencio de frontera, no de villa con mesas llenas. Quien elija el promontorio o las parroquias debe asumir el coche como norma, no como excepción.",
 "Llegar de fuera es posible, pero la escala es pequeña: conviven gente local de toda la vida, vecinos de las parroquias y quien buscó vistas al agua a propósito. Se oye asturiano y castellano en la calle; el castellano basta para lo cotidiano, y al otro lado de la ría el gallego de Ribadeo entra en el mapa semanal. La vida social pasa por el paseo de ría y el cruce a Galicia más que por una plaza donde «todo el mundo se ve». Entre semana manda la quietud; en julio y agosto Figueras y Penarronda suben el volumen.",
 "La sanidad de urgencia y especialidades no está en el pueblo: el Hospital de Jarrio, en Coaña, queda a unos treinta minutos. Empadronarse aquí abre lo básico local; para lo demás se baja a Jarrio o se cruza a Ribadeo. No es aislamiento extremo, pero sí asumir que la gran sanidad no está a la vuelta de la esquina del promontorio.",
 "Mantener el vínculo con Mallorca pasa por el avión y un trayecto largo. El aeropuerto de Asturias anda alrededor de los setenta y cinco minutos; Santiago-Lavacolla, hacia las dos horas. En invierno el calendario de vuelos a Palma suele pedir más logística que en agosto: conviene mirar el año real, no solo el de temporada alta.",
 "La vivienda típica es casa o piso en el pueblo blanco, hacia Figueras o en las parroquias: piedra, vistas a la ría, poca o ninguna obra nueva. La fibra es parcial —hay que comprobarla casa por casa—. Reforma frente a llave en mano: hay que contar con humedad de estuario, niebla alta y el estado real de la casa más que el plano del anuncio.",
 ],
 historia: [
 "El promontorio blanco sobre el Eo y la frontera con Ribadeo explican Castropol mejor que un casco monumental denso: pueblo de ría y de mirada al otro país, no de plaza cerrada. Figueras aporta astilleros —oficio vivo a un paso del núcleo— y el palacio de Peñalba, capa indiana plantada junto al agua. La Reserva de la Biosfera Río Eo, Oscos e Terras de Burón convierte el paseo de orilla en dato útil: agua, aves, prado y la línea Galicia-Asturias dibujada en el estuario.",
 "La historia aquí es de frontera vivida y de pueblo blanco, no de ciudad. Se cruza a Ribadeo en minutos para el comercio; se vuelve al promontorio para el silencio. Quien busque Indianos densos y cementerio sobre el acantilado mirará Luarca; quien busque surf y faro, Tapia. Castropol guarda la imagen típica de ría y la dependencia honesta de la villa gallega enfrente.",
 ],
 fuera: [
 "Si solo hay tiempo para una orilla de diario, esa orilla es el paseo de la ría del Eo frente a Ribadeo. Agua plana, horizonte de Galicia, banco y silencio un martes de noviembre. No es playa de toalla mediterránea: es estuario. Cuando el Cantábrico abierto esté bravo, aquí se puede mirar el agua sin pelear con el oleaje.",
 "Figueras permite una tarde de puerto y palacio sin alejarse: astilleros, orilla del concejo y el Peñalba como detalle de piedra y retorno. Un poco más allá, Penarronda —dunas entre Castropol y Tapia— cubre playa abierta a unos diez minutos. Arena, viento y Cantábrico de verdad: se entra con calma, el agua entre dieciocho y veinte grados, y en agosto el aparcamiento se queda corto los días claros.",
 "Los caminos completan el agua. La ruta costera hacia Tapia y Figueras une faro, surf y ría en trayectos cortos. Ribadeo, a diez minutos, aporta casco, comercio y As Catedrais hacia Galicia cuando apetece otra escala. La sierra de la Bobia y los Oscos quedan hacia los cuarenta y cinco minutos: verde, lluvioso, otra Asturias detrás de la costa.",
 ],
 casa: [
 "El modelo de casa aquí no es la urbanización cerrada. Son viviendas en el pueblo blanco, hacia Figueras o en las parroquias: piedra, vistas a la ría, poca o ninguna obra nueva. La fibra es parcial. Hay que contar con humedad de estuario, niebla alta, acceso y la distancia real a un súper completo.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. Conviene venir un día de niebla y comprobar aparcamiento en Penarronda cuando la costa se llena.",
 "Los servicios son 3/10. Jarrio queda a unos treinta minutos. Asturias anda alrededor de los setenta y cinco; Santiago, hacia las dos horas. Eso es Castropol: mucho paisaje de frontera y poco autoservicio; la villa de gestos diarios está al otro lado de la ría.",
 ],
 encaja: {
 si: [
 "La ría del Eo a la puerta importa más que tener el súper a la vuelta de la esquina. Castropol es pueblo blanco sobre un promontorio, frente a Ribadeo —Galicia—, con Figueras —astilleros y el palacio de Peñalba— a un paso y Penarronda —playa de dunas entre este concejo y Tapia— a unos diez minutos. Quien quiera salir al paseo de ría un martes de noviembre, mirar Galicia al otro lado del agua y bajar a Penarronda o a la orilla calmada del Eo cuando el Cantábrico abierto esté bravo encontrará aquí silencio de frontera, no villa completa. En agosto la ría, Figueras y Penarronda reciben visitantes y aparcamiento justo; el resto del año el pueblo se queda en lo suyo. Unas 1.950 horas de sol y unos cuarenta días despejados —frente a las 2.800 horas y ciento veinte jornadas claras de Mallorca— explican el trato: niebla alta, verano alrededor de 18,5 °C y lluvia frecuente también en julio. Quien no conozca el norte debe probar ese cielo antes de comprar.",
 "Funciona si se acepta Ribadeo a unos diez minutos como villa de servicios —comercio grande, casco, recados— y el Hospital de Jarrio, en Coaña, a unos treinta minutos. El aeropuerto de Asturias anda alrededor de los setenta y cinco minutos; Santiago-Lavacolla, hacia las dos horas. A cambio se gana el precio más bajo de Asturias Occidente, vistas reales a la ría y una escala pequeña que no pretende competir con Navia ni con Luarca. Quien priorice orilla, frontera y quietud fuera de temporada, y tenga tiempo para la Reserva del Eo y para cruzar a Ribadeo cuando haga falta, entenderá Castropol sin forzar al municipio a ser lo que no es.",
 ],
 no: [
 "Los servicios son 3/10: la semana no se resuelve andando en el propio pueblo. El súper completo y muchos gestos diarios piden coche hacia Ribadeo; la fibra es parcial y hay que comprobarla casa por casa. Eso no se arregla eligiendo otra calle del promontorio. Si la prioridad absoluta es vivir a pie de farmacia, mercado y comercio sin volante, Castropol no encaja: Navia o Luarca cubren villa más completa; Ribadeo, al otro lado de la ría, es la referencia de servicios, no este núcleo.",
 "Tampoco encaja quien necesite hospital a diez o veinte minutos o aeropuerto cerca de una hora: Jarrio está a unos treinta; Asturias, a unos setenta y cinco. Quien se decida solo tras un sábado de sol de agosto, sin probar niebla densa ni un noviembre vacío, se llevará una sorpresa. Si lo que se busca es cielo de Baleares —días despejados, verano caluroso, baño largo sin pensar en el oleaje—, esta orilla no lo da: el agua anda entre 18 y 20 °C y el Cantábrico abierto pide calma. Mejor mirar Navia (Jarrio a diez minutos) o Luarca (aeropuerto a unos cuarenta) si la logística importa más que la foto de pueblo blanco.",
 ],
 veredicto:
 "Veredicto: Castropol encaja como pueblo blanco de ría y frontera —vivienda con vistas claras al Eo, hacia Figueras o el promontorio, no como villa autosuficiente— sobre todo si la orilla y el precio importan más que los servicios a pie. Apoyarse en Ribadeo para el día a día; comprobar fibra, humedad de ría y un noviembre de niebla antes de comprar. Se ganan silencio, Penarronda a diez minutos y el metro más bajo de la zona; se aceptan servicios 3/10, Jarrio a treinta minutos y Asturias a unos setenta y cinco. Quien priorice sanidad o villa completa, mirar Navia o Luarca.",
 },
 fotoIdentidad: {
 src: "/fotos/asturias-occidente/castropol-identidad.jpg",
 pie: "Castropol: pueblo blanco sobre la ría del Eo, con monte detrás — así se vive mirando a Figueras",
 },
 fotosAbrir: [
 { src: "/fotos/asturias-occidente/castropol-villa.jpg", pie: "Castropol: pueblo blanco sobre la ría" },
 { src: "/fotos/asturias-occidente/castropol-ria.jpg", pie: "Ría del Eo desde Castropol" },
 ],
 fotosHistoria: [
 { src: "/fotos/asturias-occidente/castropol-figueras.jpg", pie: "Figueras: astilleros y orilla del concejo" },
 ],
 fotosFuera: [
 { src: "/fotos/asturias-occidente/castropol-penarronda.jpg", pie: "Penarronda, playa de dunas cerca de Castropol" },
 ],
 creditoFotos: credito,
 }
```

### 2.2 Capa 2026 completa

> CITA LITERAL — fila `slug: "castropol"` en `web/src/data/municipios-asturias-occidente.json`.  
> Autoridad factual. No rellenar null/`…` truncados.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `109428` |
| `A_3hab` | `151515` |
| `B_2hab` | `88384` |
| `B_3hab` | `122378` |
| `advertenciaMicrozona` | Castropol villa y Figueras ofrecen experiencias distintas; no trasladar la vida de una a todo el concejo. |
| `aeropuertoMin` | `75` |
| `aeropuertoPractico2026` | Asturias 98 km · 75 min (Palma: verano); A Coruña 136 km · 100 min (Palma: verano); Santiago 161 km · 120 min (Palma: casi todo el año) Tiempo histórico orientativo: ~75 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Asturias 98 km · 75 min (Palma: verano); A Coruña 136 km · 100 min (Palma: verano); Santiago 161 km · 120 min (Palma: casi todo el año) |
| `autonomiaCotidiana` | MEDIA-BAJA |
| `casaQueBuscar` | Vivienda cómoda y accesible, 2–3 dormitorios, exterior, servicios cotidianos ... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Intermedio |
| `comunicaciones` | A-8 / N-640; tren FEVE (Vegadeo) |
| `comunicacionesNota10` | `6` |
| `cubiertos` | `165` |
| `dependenciaCocheTexto` | Media-alta fuera de los núcleos. |
| `despejados` | `40` |
| `estacionalidad2026` | Vida local anual con escala pequeña. |
| `fibra` | Parcial |
| `franja` | B |
| `hospitalMin` | `30` |
| `hospitalPractico2026` | Hospital de Jarrio |
| `hospitalPriv` |  |
| `hospitalPub` | 25 km · 30 min · Jarrio (Coaña) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 25 km · 30 min · Jarrio (Coaña); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `80` |
| `lat` | `43.526` |
| `lluviaDias` | `138` |
| `lluviaMm` | `1000` |
| `lon` | `-7.032` |
| `mapa` | 47_castropol.png |
| `mercadoReventa` | Mercado intermedio: base residencial propia y/o demanda exterior. Priorizar u... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `10` |
| `minCosta` | `10` |
| `municipio` | Castropol |
| `n` | `47` |
| `niebla` | Alta |
| `obraNueva` | No |
| `pais` | España |
| `palmaDirecta2026` | Asturias: Palma figura entre destinos publicados en 2026; programación/temporada variable, comprobar antes de viajar. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Santiago (casi todo el año) · 120 min |
| `paseoCotidiano` | Frente de la ría y puerto según núcleo. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Ría y paisaje muy próximos, pero servicios superiores y hospital requieren desplazamiento. |
| `playaBano` | Penarronda / Arnao |
| `playaCotidiana` | DEPENDE MICROZONA |
| `playaCotidianaModo` | Ría cotidiana; el baño de playa depende de microzona/salida, no de una gran playa urbana común. |
| `precioM2` | `1295` |
| `provincia` | Asturias |
| `radioCotidiano` | Castropol villa: servicios básicos y ría; Figueras: pequeño núcleo marinero con vida propia al otro lado de la ensenada. |
| `radioSalida` | Costa occidental y Ribadeo; hospital en Jarrio. |
| `sanidadPrimaria2026` | Atención primaria local |
| `servicios` | `3` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | Falta: comercio grande (Ribadeo a 5 min) |
| `slug` | castropol |
| `solHoras` | `1950` |
| `tempAgua` | 18-20 |
| `tempInvierno` | `9.5` |
| `tempVerano` | `18.5` |
| `transporteRelevante2026` | A-8 / N-640; tren FEVE (Vegadeo) Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital de Jarrio. |
| `viento` | Media |
| `zona` | Asturias Occidente |

### 2.3 Auditorías / plan existentes

**No existe** `docs/PLAN_EDITORIAL_ASTURIAS_OCCIDENTAL_2026.md` (ni equivalente CURSOR_19 para esta zona).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n=47): prioridad URGENTE — precio relato~1050 vs ficha 1295; Palma puede sonar permanente; repite horas de sol; hospital también en capa.

**P0_RESTANTES_POST_PRECIOS_2026.md:** Castropol — P0 precio restante: **no**.

**estudio_zonas.md §10** (histórico/contexto, NO sustituye 2026): Castropol 3/10, hospital 30, aero 75, precio histórico 1050; Ribadeo 10 min; Figueras/Penarronda.


### 2.4 Auditoría relato ↔ capa

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | Repite 3/10 (abrir/vivir/casa/encaja) | `servicios` 3; nota: falta comercio grande (Ribadeo a 5 min) | DUPLICA_CAPA | Omitir chip; narrar dependencia de Ribadeo / autonomía MEDIA-BAJA |
| Precio / «más bajo de la zona» | casa remite a capa; encaja/veredicto aún dicen «precio más bajo» / «metro más bajo» | `precioM2` 1295; A_3hab 151515; franja B | OBSOLETO / DUPLICA_CAPA | Omitir ranking de precio; dejar cifras en FichaCapa2026/TablaPrecios. Auditoría: ~1050 histórico vs 1295 |
| Autonomía / coche | «día a día sin coche casi no existe»; súper y recados en Ribadeo ~10′ | `autonomiaCotidiana` MEDIA-BAJA; `dependenciaCocheTexto` Media-alta fuera de núcleos | ALINEADO | Afinar: villa/Figueras vs parroquias; no dramatizar más allá de capa |
| Mar / playa / ría | Paseo ría cotidiano; Penarronda ~10′; baño ría vs Cantábrico abierto | `playaCotidiana` DEPENDE MICROZONA; modo: ría cotidiana; baño playa = microzona/salida | ALINEADO | Separar ría cotidiana vs Penarronda/salida; no vender playa urbana |
| Paseo cotidiano | Paseo de ría; ruta costera Tapia–Figueras | `paseoCotidiano` Frente de la ría y puerto según núcleo; `paseoPendienteTopografia` null | ALINEADO / P4_PRESERVAR | Preservar escena ría/Ribadeo enfrente |
| Microzona Castropol vs Figueras | Figueras y Peñalba presentes; no advertencia explícita de no generalizar | `advertenciaMicrozona` villa y Figueras experiencias distintas | SOPORTADO_PERO_INFRAUSADO | Advertir microzona en vivir/casa/encaja sin inventar |
| Hospital / Galicia vs Asturias | Jarrio Coaña ~30′; también cruza a Ribadeo para gestiones | `hospitalPractico2026` Hospital de Jarrio; hist. 30 min | ALINEADO | Mantener Jarrio asturiano; Ribadeo = comercio, no hospital de referencia |
| Aeropuerto / Palma | Asturias ~75′; Santiago ~2 h; «calendario real» invierno | `aeropuertoMin` 75; `palmaDirecta2026` temporada variable | ALINEADO | No convertir Palma en permanente; omitir repetición de minutos en cascada |
| Ribadeo distancia | ~10 minutos (varios pasajes) | `serviciosNota` Ribadeo a 5 min; estudio también 10 min | REQUIERE_VERIFICACION_EXTERNA | Para v1: tratar como «pocos minutos / villa enfrente»; no fijar 5 vs 10 si no hay fuente única. **NO inventar** |
| Clima cifras + Mallorca | 1950 h sol, 40 despejados, 1000 mm, 138 días, niebla alta… repetido abrir→encaja | Campos clima JSON coinciden; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; no cascada numérica. No corregir clima aquí |
| FEVE Vegadeo | «completa el mapa» | `transporteRelevante2026` FEVE Vegadeo; interpretar utilidad real | SOPORTADO_PERO_INFRAUSADO | Mencionar sin prometer utilidad cotidiana |
| Topónimos P4 | Eo, Ribadeo, Figueras, Peñalba, Penarronda, Reserva Biosfera, Oscos/Bobia | radios + estudio + fotos | P4_PRESERVAR | Glosar función primera vez; Oscos/Bobia = salida |

### 2.5 P4 / identidad

| Elemento | Qué es | Por qué importa | Cotidiano/salida | Soporte repo | Preservar |
|---|---|---|---|---|---|
| Pueblo blanco / promontorio | Núcleo sobre cerro mirando la ría del Eo | Define la imagen y la escala pequeña | Cotidiano (vivir/mirar) | relato + fotos + capa | sí |
| Ría del Eo / Ribadeo enfrente | Estuario frontera Galicia–Asturias | Agua cotidiana + dependencia de villa gallega | Cotidiano / gestiones en Ribadeo | relato + radio + peaje | sí |
| Figueras + palacio de Peñalba | Núcleo marinero/astilleros del concejo | Microzona distinta al promontorio | Cotidiano si se vive allí; si no, salida corta | relato + advertenciaMicrozona | sí |
| Penarronda | Playa de dunas entre Castropol y Tapia | Baño/Cantábrico abierto no urbano | Salida (~10′) | relato + playaBano | sí |
| Reserva Biosfera Eo | Figura de protección del paisaje de ría | Explica paseo/aves/prado | Cotidiano (paseo) / contexto | relato + estudio | sí |
| Oscos / sierra Bobia | Interior verde lluvioso | Otra Asturias detrás de la costa | Salida (~45′) | relato + estudio | sí (como salida) |
| FEVE Vegadeo | Tren métrico en concejo vecino | Comunicación nominal | No cotidiano garantizado | capa transporte | sí (sin promesa) |

### 2.6 Vida cotidiana soportada

Pregunta guía: *Ya vivo aquí. Tengo toda la mañana libre. ¿Qué puedo hacer con mi día sin convertirlo en turismo?*

| Elemento | Clasificación | Base repo |
|---|---|---|
| Paseo de ría frente a Ribadeo | YA SOPORTADO | relato + paseoCotidiano |
| Mirar Galicia / frontera vivida | YA SOPORTADO | relato |
| Café/compra básica en núcleo | YA SOPORTADO (limitado) | radio: básicos; servicios 3 |
| Súper / comercio amplio | YA SOPORTADO (en Ribadeo) | serviciosNota + relato |
| Figueras puerto/Peñalba | YA SOPORTADO | relato |
| Penarronda | YA SOPORTADO (salida) | playa DEPENDE MICROZONA |
| Atención primaria local | YA SOPORTADO | sanidadPrimaria2026 |
| Farmacia con nombre | NO SOPORTADO | — |
| Biblioteca/deporte/mercado nombrado | NO SOPORTADO | — |
| FEVE utilidad diaria | NO SOPORTADO (existencia sí) | transporte: sin garantía |
| Oscos / Bobia | YA SOPORTADO (salida) | relato |

### 2.7 Reality toll

Solo peajes estructurales **soportados** en repo:

- Coche: media-alta fuera de núcleos; Ribadeo para comercio grande
- Hospital: Jarrio ~30′ (fuera)
- Aeropuerto: Asturias ~75′; Palma estacional
- Estacionalidad: verano ría/Figueras/Penarronda; invierno escala mínima
- Humedad/niebla alta / exposición estuario
- Dispersión: villa vs Figueras vs parroquias
- Comercio limitado en núcleo (servicios 3)
- Microzona obligatoria (advertencia capa)
- Fibra parcial

### 2.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | Sin cifra fija en casa; ranking «más bajo» en encaja | **1295** | Auditoría URGENTE ~1050 vs 1295 |
| A_2/A_3/B_2/B_3 | No narrados | 109428 / 151515 / 88384 / 122378 | Dejar en tabla |
| Franja | — | B | |
| Fiabilidad | — | Fila con precio (no n.d.) | Omitir prosa de media |
| microzonaPrecio | — | null | |
| casaQueBuscar | Humedad, fibra, vistas | Texto truncado en JSON («…») | Cualitativo |
| mercadoReventa | — | Truncado intermedio | |

### 2.9 Clima: deuda / duplicación

- Repite sol/despejados/lluvia/niebla/verano en tiempo + encaja (DUPLICA_CAPA).
- Cifras alineadas con JSON municipal (1950/40/1000/138/niebla Alta).
- despejados/cubiertos: deuda metodológica sync (excluidos auto) — **marcar, no corregir**.
- Comparación Mallorca repetitiva.
- No corregir clima en este bloque.

**Sin correcciones en este bloque: sí.**

### 2.10 No soportado / no inventar

- Nombre de café/farmacia/biblioteca/mercado
- Fijar 5 vs 10 min a Ribadeo como hecho único sin unificar fuente
- Convertir FEVE en alternativa cotidiana garantizada
- Precio histórico 1050 o ranking «más barato» como cifra
- Palma permanente
- Inventar pendiente topográfica (capa null)
## 3. Tapia de Casariego

### 3.1 Relato actual completo

> CITA LITERAL — clave `tapia-de-casariego` en `web/src/lib/relatos-asturias-occidente.ts`.

```ts
tapia-de-casariego: {
 escala: "Villa marinera de surf",
 abrir: [
 "Tapia de Casariego se siente cuidada antes que grande. Unos tres mil ochocientos habitantes en una villa marinera compacta: puerto, casco de piedra y color, isla del faro, playas de surf a dos minutos y paseo costero que se camina cualquier día del año. Ribadeo y Navia quedan a unos quince o veinte minutos. No es ciudad ni la villa blanca de Luarca: es orilla de ola, niebla alta y un casco que no se vacía del todo en enero.",
 "Quien vive aquí es gente local, vecinos de oficio del mar y veraneantes que vuelven cada agosto. Un martes de noviembre se compra, se va al centro de salud y se camina el casco. Los servicios de ficha son 4/10 —villa con paseo y vida diaria básica; falta, por ejemplo, instituto de FP—; hay fibra. El Hospital de Jarrio queda a unos veinte minutos. El aeropuerto de Asturias anda alrededor de los setenta; Santiago, hacia las dos horas.",
 "El tráfico es de villa pequeña casi todo el año. En verano Anguileiro, Represas, Serantes y Arnao reciben surfistas, toallas y coches hacia la costa: aparcamiento justo en los días claros. Las patronales y el veraneo animan el puerto unos días con ruido y afluencia. Quien viva junto a la orilla notará agosto; hacia el interior del casco, el silencio vuelve antes.",
 "La semana tiene rutinas de puerto: lonja o pez fresco cuando toca, café junto a la dársena, paseo hacia el faro, bajar a la ola cuando el Cantábrico lo permita. La ruta costera hacia Figueras cierra el trayecto de frontera. Primavera y otoño son buenas épocas para conocerlo: el verde de la costa occidental se pone intenso; en noviembre la niebla alta enseña el trato real. Si solo conoces un sábado de sol en Anguileiro, te llevas la imagen de folleto. Si has visto un día de bruma pegada al faro, ya puedes decidir si de verdad quieres vivir aquí.",
 "Tapia encaja para quien quiera villa marinera pequeña y muy cuidada, con surf delante y el cielo cantábrico como vecino. Oviedo y Avilés siguen hacia la hora; aquí el mapa útil es Ribadeo, Navia, Penarronda y el propio paseo.",
 ],
 tiempo: [
 "Si vienes de Baleares, el cuerpo nota el gris antes que el frío. Tapia suma unas mil novecientas cincuenta horas de sol y unos cuarenta días despejados, lejos de las dos mil ochocientas horas y ciento veinte jornadas claras de Mallorca. Caen alrededor de novecientos cincuenta milímetros en unos ciento treinta y ocho días. La niebla es alta —de las más marcadas de la zona—; el viento, medio. También en verano llueve con frecuencia.",
 "El verano ronda dieciocho grados y medio, fresco frente a Baleares. Las playas de surf tienen agua entre dieciocho y veinte grados; el Cantábrico abierto pide días de mar más llana para un baño cómodo. Penarronda, hacia Castropol, amplía dunas cuando apetece otra orilla. Conviene venir un día de niebla densa y un sábado de afluencia en Anguileiro, no solo un agosto soleado.",
 ],
 vivir: [
 "El invierno en casa se nota por la niebla alta —de las más marcadas de la zona— y el salitre del puerto. En Mallorca muchas viviendas casi no piensan en humedad; aquí conviene mirar orientación menos abierta a la nortada, aislamiento y si la terraza al paseo sigue siendo usable entre noviembre y febrero. Visitar un día de bruma pegada al faro y otro de viento enseña más que un sábado de sol en Anguileiro.",
 "Sin coche se puede resolver más que en Castropol: el casco es compacto, hay centro de salud, se camina el paseo y se compra lo básico. Los servicios son 4/10 —villa con vida diaria básica; falta, por ejemplo, instituto de FP— y hay fibra. En enero la villa no se vacía del todo: hay café junto a la dársena y vecinos en la calle. Ribadeo y Navia, a unos quince o veinte minutos, cubren lo que la villa pequeña no da.",
 "Conviven gente local, vecinos de oficio del mar y veraneantes que vuelven cada agosto. Se oye asturiano en el puerto y en el mercado; el castellano basta para lo cotidiano, pero la vida social pasa por el casco marinero y el ritmo de lonja más que por una plaza de ciudad. Entre semana manda la escala de villa cuidada; en verano Anguileiro, Represas y Serantes suben el volumen con surfistas y toallas.",
 "La sanidad de especialidades no está en Tapia: el Hospital de Jarrio queda a unos veinte minutos. En la villa hay centro de salud para lo diario; para urgencias y pruebas se baja a Coaña. Es asumir hospital comarcal cercano, no edificio a la vuelta del faro.",
 "Ir y volver a Mallorca pide trayecto: el aeropuerto de Asturias anda alrededor de los setenta minutos; Santiago, hacia las dos horas. Palma en verano cabe desde Asturias; en invierno la logística suele alargarse. Conviene mirar el calendario real de vuelos, no solo el de agosto en la orilla.",
 "La vivienda típica es piso o casa de villa marinera junto al puerto o al paseo: edificios bajos, terraza al Cantábrico, poca obra nueva y fibra. Junto a la orilla hay que contar con salitre, niebla y ocupación de verano; hacia el interior del casco, el silencio vuelve antes. Reforma y orientación importan tanto como las vistas al faro.",
 ],
 historia: [
 "El puerto, el casco marinero y la isla del faro explican Tapia: villa de oficio del mar y de costa cuidada, cuidada y compacta. No es un decorado de temporada: la dársena y las calles estrechas cuentan trabajo y salitre. El surf contemporáneo —Anguileiro, Serantes, Represas— añade capa de orilla viva sin borrar el carácter de villa pequeña.",
 "La ruta costera hacia Figueras y la cercanía a la ría del Eo sitúan Tapia en la costa occidental asturiana de frontera. Lo que conviene saber es marinera y de paseo, no de gran casco indiano como Luarca ni de villa de servicios como Navia. Aquí la ficha es faro, ola y casco que se reconoce en una sola tarde.",
 ],
 fuera: [
 "Si solo hay tiempo para un baño o una sesión cerca, esa orilla es Anguileiro —con Represas y Serantes a un paso—. Quedan a unos dos minutos: playa de surf, Cantábrico abierto, agua entre dieciocho y veinte grados. Un martes de junio puedes tener espacio; un domingo de agosto el aparcamiento se queda corto y la gente busca sitio con paciencia. Arnao amplía opciones sin alejarse demasiado.",
 "El paseo y la isla del faro permiten una tarde sin coche: mirar el mar, oír el golpe del agua, volver al casco por calles de villa. No es resort: es orilla de vecinos y de tabla. Cuando el oleaje esté bravo, se mira más de lo que se nada; cuando esté llano, el baño corto despabila la piel.",
 "Penarronda cubre dunas hacia Castropol. Navia aporta villa de servicios y Puerto de Vega a un trayecto corto; Ribadeo, frontera gallega. La costa occidental se lee en tramos: faro, ola, ría del Eo, y otra vez pueblo blanco o villa útil según el día.",
 ],
 casa: [
 "El casco y el entorno del puerto ofrecen pisos y viviendas de villa marinera: edificios bajos, terraza al paseo o al Cantábrico, poca obra nueva y fibra. Junto a la orilla hay que contar con salitre, niebla alta y ocupación de verano. Conviene la orientación menos abierta a la nortada fuerte, y venir un día de viento, no solo un sábado de sol.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. La franja media puede ser vivienda reformada cerca del paseo o con mejores vistas al puerto.",
 "Los servicios son 4/10. Jarrio queda a unos veinte minutos. Asturias está a unos setenta; Santiago-Lavacolla, hacia las dos horas. Eso es Tapia: mucho mar delante y gestos diarios de villa pequeña; el hospital y el vuelo piden trayecto.",
 ],
 encaja: {
 si: [
 "El mar a dos minutos importa más que tener el hospital a la vuelta de la esquina. Tapia de Casariego es villa marinera pequeña y cuidada: puerto, casco, isla del faro, paseo costero y playas de surf —Anguileiro, Represas, Serantes; Arnao cerca— casi en la puerta. Quien quiera caminar el casco un martes de noviembre, tomar café junto al puerto y bajar a la orilla cuando el oleaje lo permita encontrará aquí una villa que no se apaga del todo fuera de temporada, aunque la niebla alta forme parte del trato. En agosto Anguileiro y el resto de playas reciben surfistas, toallas y tráfico; hacia el interior del casco el silencio vuelve antes. Unas 1.950 horas de sol y unos cuarenta días despejados —frente a las 2.800 horas y ciento veinte jornadas claras de Mallorca— marcan el contraste con Baleares: verano alrededor de 18,5 °C, agua entre 18 y 20 °C, y el Cantábrico abierto pidiendo días de mar más llana para un baño cómodo. Penarronda, hacia Castropol, amplía dunas cuando apetece otra orilla.",
 "Funciona si se acepta el Hospital de Jarrio, en Coaña, a unos veinte minutos, y el aeropuerto de Asturias alrededor de los setenta. Ribadeo y Navia quedan a unos quince o veinte minutos como apoyo de comercio o villa mayor; la ruta costera hacia Figueras cierra el paseo de frontera. Los servicios de ficha son 4/10 —villa con paseo y vida diaria básica; falta, por ejemplo, instituto de FP—, con fibra sí. A cambio se gana orilla de surf delante, casco compacto y un carácter más marinero que monumental: no es la villa blanca de Luarca, es la de puerto y ola. Quien tenga tiempo libre para el faro, el paseo y las playas, y pruebe un día de niebla densa antes de comprar, entenderá Tapia sin inventarse otro clima.",
 ],
 no: [
 "El hospital a veinte minutos y el aeropuerto a unos setenta no se acortan eligiendo otra calle junto al puerto. Si la prioridad absoluta es Jarrio a diez minutos, Navia lo cubre; si lo que manda es volar a Palma en verano con el trayecto más corto de la zona, Luarca deja Asturias a unos cuarenta minutos. Tapia no compite en esa logística: compite en orilla y casco marinero. Tampoco encaja quien necesite ciudad grande a media hora —Oviedo o Avilés siguen hacia la hora— ni quien quiera el metro más bajo: aquí, el más alto de Asturias Occidente.",
 "La niebla alta y el verano fresco cortan el trato si se llega del Mediterráneo esperando cielo abierto y calor de terraza. Quien se decida solo tras un sábado de sol de agosto, sin probar el aparcamiento junto a Anguileiro cuando la costa se llena ni un noviembre de bruma pegada al faro, se llevará una sorpresa. Si lo que se busca es imagen típica indiana, cementerio sobre el acantilado y casco de Luarca, esta villa no lo es; si se busca solo precio mínimo, Castropol queda más bajo. Tapia pide aceptar el Cantábrico de verdad —viento medio, lluvia frecuente, baño corto muchos días— a cambio del surf y el paseo.",
 ],
 veredicto:
 "Veredicto: Tapia encaja como villa marinera de surf y casco cuidado —piso o vivienda caminable a puerto y paseo, fuera del tramo más ocupado de Anguileiro o Serantes en agosto— sobre todo si la orilla delante importa más que el aeropuerto cerca. Comprobar niebla densa y un sábado de afluencia en la playa antes de comprar. Se ganan faro, ola a dos minutos y villa viva en noviembre; se aceptan, Jarrio a veinte minutos y Asturias a unos setenta. Quien priorice sanidad a diez minutos, Navia; quien priorice vuelo corto y villa blanca, Luarca.",
 },
 fotosAbrir: [
 { src: "/fotos/asturias-occidente/tapia-puerto.jpg", pie: "Puerto de Tapia de Casariego" },
 { src: "/fotos/asturias-occidente/tapia-casco.jpg", pie: "Casco marinero de Tapia" },
 ],
 fotosHistoria: [
 { src: "/fotos/asturias-occidente/tapia-faro.jpg", pie: "Faro e isla frente a Tapia" },
 { src: "/fotos/asturias-occidente/tapia-paseo.jpg", pie: "Paseo costero de Tapia" },
 ],
 fotosFuera: [
 { src: "/fotos/asturias-occidente/tapia-playa.jpg", pie: "Playa de Tapia hacia el Cantábrico" },
 ],
 creditoFotos: credito,
 }
```

### 3.2 Capa 2026 completa

> CITA LITERAL — fila `slug: "tapia-de-casariego"` en `web/src/data/municipios-asturias-occidente.json`.  
> Autoridad factual. No rellenar null/`…` truncados.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `185900` |
| `A_3hab` | `257400` |
| `B_2hab` | `150150` |
| `B_3hab` | `207900` |
| `advertenciaMicrozona` | `null` *(n.d. / ausente)* |
| `aeropuertoMin` | `70` |
| `aeropuertoPractico2026` | Asturias 89 km · 70 min (Palma: verano); A Coruña 146 km · 110 min (Palma: verano) Tiempo histórico orientativo: ~70 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Asturias 89 km · 70 min (Palma: verano); A Coruña 146 km · 110 min (Palma: verano) |
| `autonomiaCotidiana` | MEDIA-FUERTE |
| `casaQueBuscar` | Accesibilidad, exterior/terraza y distancia realmente caminable a núcleo y pa... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Intermedio |
| `comunicaciones` | A-8 / N-634; bus |
| `comunicacionesNota10` | `6` |
| `cubiertos` | `165` |
| `dependenciaCocheTexto` | Baja-media en villa; coche para hospital y salidas. |
| `despejados` | `40` |
| `estacionalidad2026` | Vida anual, con presión vacacional notable en verano. |
| `fibra` | Sí |
| `franja` | A |
| `hospitalMin` | `20` |
| `hospitalPractico2026` | Hospital de Jarrio |
| `hospitalPriv` |  |
| `hospitalPub` | 16 km · 20 min · Jarrio (Coaña) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 16 km · 20 min · Jarrio (Coaña); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `80` |
| `lat` | `43.57` |
| `lluviaDias` | `138` |
| `lluviaMm` | `950` |
| `lon` | `-6.943` |
| `mapa` | 48_tapia_de_casariego.png |
| `mercadoReventa` | Mercado intermedio con componente turístico/segunda residencia. La liquidez d... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `2` |
| `minCosta` | `1` |
| `municipio` | Tapia de Casariego |
| `n` | `48` |
| `niebla` | Alta |
| `obraNueva` | Poca |
| `pais` | España |
| `palmaDirecta2026` | Asturias: Palma figura entre destinos publicados en 2026; programación/temporada variable, comprobar antes de viajar. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Asturias (verano) · 70 min |
| `paseoCotidiano` | Puerto, faro, piscina de agua de mar y costa hacia Anguileiro. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Mar y paseo excelentes para su tamaño; menor profundidad de servicios y verano más intenso. |
| `playaBano` | Anguileiro / Represas / Serantes |
| `playaCotidiana` | SÍ |
| `playaCotidianaModo` | Anguileiro y pequeñas calas/playas del entorno se integran bien en la vida de la villa. |
| `precioM2` | `2200` |
| `provincia` | Asturias |
| `radioCotidiano` | Villa compacta con puerto, comercio, servicios y costa enlazables a pie. |
| `radioSalida` | Playas y costa occidental; Jarrio para hospital. |
| `sanidadPrimaria2026` | Atención primaria local |
| `servicios` | `6` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | Tiene: villa marinera con paseo. Falta: instituto de FP |
| `slug` | tapia-de-casariego |
| `solHoras` | `1950` |
| `tempAgua` | 18-20 |
| `tempInvierno` | `9.5` |
| `tempVerano` | `18.5` |
| `transporteRelevante2026` | A-8 / N-634; bus Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital de Jarrio. |
| `viento` | Media |
| `zona` | Asturias Occidente |

### 3.3 Auditorías / plan existentes

**No existe plan editorial Asturias** (CURSOR_19-equivalente).

**AUDITORIA:** URGENTE — precio ~1350 vs ficha **2200**; Palma; sol; hospital en capa.

**P0_RESTANTES:** Tapia — P0 precio: **no**.

**estudio_zonas.md:** Tapia 6/10 (¡coincide capa actual, no el 4/10 del relato!), precio histórico 1350, surf, niebla alta.


### 3.4 Auditoría relato ↔ capa

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | **4/10** repetido (abrir/vivir/casa/encaja) + falta instituto FP | `servicios` **6**; nota: Tiene villa marinera con paseo; Falta instituto FP | OBSOLETO | Nunca 4/10. Omitir chip; narrar MEDIA-FUERTE / villa compacta. Nota FP solo si útil sin número |
| Precio / ranking zona | casa remite a capa; encaja.no: «metro más alto de Asturias Occidente» | `precioM2` **2200** (desvío extremo vs ~1350 histórico estudio/auditoría) | OBSOLETO | Omitir cifras y rankings. Capa 2200 es autoridad 2026; tratar con cautela narrativa (fiabilidad: mercado caro / turístico). No reponer 1350 |
| A/B franjas | Sin totales en prosa actual | A_3hab 257400; B_3hab 207900 | ALINEADO (omisión) | Dejar en TablaPrecios; no narrar totales |
| Villa / puerto / playa cotidiana | Surf a 2′; Anguileiro/Represas/Serantes/Arnao; paseo y faro a pie | `playaCotidiana` SÍ; modo Anguileiro + calas; `paseoCotidiano` puerto, faro, piscina agua mar, costa | ALINEADO / P4_PRESERVAR | Distinguir baño/surf cotidiano vs presión agosto; glosar playas |
| Piscina de agua de mar | No aparece en relato | `paseoCotidiano` incluye piscina de agua de mar | SOPORTADO_PERO_INFRAUSADO | Candidato vida cotidiana si se usa sin inventar horarios |
| Autonomía / coche | Casco compacto resuelve más que Castropol; Ribadeo/Navia 15–20′ | `autonomiaCotidiana` MEDIA-FUERTE; dependencia Baja-media en villa | ALINEADO | Narrar sin chip; coche para hospital/salidas |
| Hospital / aero / Palma | Jarrio ~20′; Asturias ~70′; Palma verano + calendario | hospitalMin 20; aeropuertoMin 70; palma variable | ALINEADO | Consecuencia, no cascada; no permanente Palma |
| Estacionalidad | Verano surf/aparcamiento; enero no vacío del todo | `estacionalidad2026` Vida anual + presión vacacional notable | ALINEADO | Sin multiplicadores inventados de afluencia |
| Clima / niebla alta | 1950 h / 40 despejados / niebla alta martilleada | JSON coincide; niebla Alta | DUPLICA_CAPA | Una pasada cualitativa; no corregir metodología |
| Vivienda / reventa | Salitre, niebla, orientación, verano orilla | `casaQueBuscar` accesibilidad/terraza/caminable… (truncado); `mercadoReventa` componente turístico (truncado) | ALINEADO / SOPORTADO_PERO_INFRAUSADO | Cualitativo; no inventar tramos €; usar peaje turístico de capa |

### 3.5 P4 / identidad

| Elemento | Qué es | Por qué importa | Cotidiano/salida | Soporte repo | Preservar |
|---|---|---|---|---|---|
| Puerto / casco marinero | Villa compacta de oficio del mar | Escala cuidada y vida anual | Cotidiano | relato + radio | sí |
| Isla del faro | Faro en isla frente a Tapia | Identidad visual y paseo | Cotidiano (paseo) | relato + fotos + paseoCotidiano | sí |
| Anguileiro / Represas / Serantes | Playas de surf junto a la villa | Mar cotidiano + presión verano | Cotidiano (baño/surf) | relato + playaCotidiana SÍ | sí |
| Arnao | Playa cercana adicional | Amplía orilla | Salida corta | relato | sí |
| Piscina de agua de mar | Equipamiento de costa en capa | Mañana libre no turística | Cotidiano potencial | solo capa paseoCotidiano | sí (si se usa) |
| Ruta costera → Figueras | Sendero/costa hacia Eo | Frontera occidental | Salida | relato + estudio | sí |
| Penarronda | Dunas hacia Castropol | Otra tipología de playa | Salida | relato | sí |

### 3.6 Vida cotidiana soportada

Pregunta guía: *Ya vivo aquí. Tengo toda la mañana libre. ¿Qué puedo hacer con mi día sin convertirlo en turismo?*

| Elemento | Clasificación | Base repo |
|---|---|---|
| Paseo puerto–faro–costa | YA SOPORTADO | relato + paseoCotidiano |
| Compra / CS en casco | YA SOPORTADO | radio + autonomia MEDIA-FUERTE |
| Surf/baño Anguileiro etc. | YA SOPORTADO | playaCotidiana SÍ |
| Piscina agua de mar | SOPORTADO PERO FALTA EN RELATO | paseoCotidiano |
| Café junto a dársena (genérico) | YA SOPORTADO (genérico) | relato |
| Lonja / pez fresco «cuando toca» | YA SOPORTADO (genérico oficio) | relato — no inventar horarios |
| Biblioteca/cultura nombrada | NO SOPORTADO | — |
| Ribadeo / Navia apoyo | YA SOPORTADO (salida) | relato |
| Ruta costera Figueras | YA SOPORTADO (salida) | relato |

### 3.7 Reality toll

Solo peajes estructurales **soportados** en repo:

- Coche: baja-media en villa; necesario para hospital/salidas
- Hospital: Jarrio ~20′
- Aeropuerto: ~70′; Palma estacional
- Estacionalidad: presión vacacional/surf en verano
- Niebla alta / salitre / humedad orilla
- Menor profundidad de servicios vs villas mayores (peaje capa) pese a nota 6
- Precio 2026 alto (2200) — peaje de mercado, no inventar
- Sin inventar defectos «para equilibrar»

### 3.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | Sin cifra; «más alto zona» en encaja | **2200** | Desvío extremo vs ~1350 histórico; **autoridad 2026** |
| A/B | No narrados | A_3 257400; B_3 207900 | No narrar totales |
| Franja | — | A | |
| Fiabilidad | — | Precio alto; mercado con componente turístico | Cautela narrativa; no reponer 1350 |
| casaQueBuscar | Accesibilidad, salitre, verano | Truncado caminable a núcleo/playa | |
| mercadoReventa | — | Truncado turístico/2ª residencia | |

### 3.9 Clima: deuda / duplicación

- Misma cascada 1950/40 + niebla alta enfatizada.
- lluviaMm 950 en JSON vs «novecientos cincuenta» relato — alineado.
- Deuda despejados/cubiertos metodológica — no resolver.
- Sin corrección en CURSOR_26.

**Sin correcciones en este bloque: sí.**

### 3.10 No soportado / no inventar

- Servicios **4/10**
- Precio 1350 histórico o totales A/B en prosa
- Multiplicadores de afluencia inventados
- Horarios lonja/piscina/surf
- Recomendación personalizada («si yo fuera tú»)
- Convertir atractivo turístico en consejo de compra
## 4. Navia

### 4.1 Relato actual completo

> CITA LITERAL — clave `navia` en `web/src/lib/relatos-asturias-occidente.ts`.

```ts
navia: {
 escala: "Villa de servicios en su ría",
 abrir: [
 "Navia se siente útil antes que de foto turística. Unos ocho mil quinientos habitantes en la villa de servicios de la Asturias occidental: ría, paseo, playa a cinco minutos, Puerto de Vega —uno de los pueblos marineros más bonitos de la costa— a cinco, castro de Coaña cerca y la A-8 a mano. Es la opción práctica: hospital, autovía y comercio, con menos marco de villa blanca que Luarca y menos ola en la puerta que Tapia.",
 "Quien vive aquí es gente local, trabajadores de la comarca y quien priorizó Jarrio y gestos diarios. Un martes de noviembre se resuelve centro de salud, mercado, comercio y hasta cine en el municipio. Los servicios de ficha son 5/10 —villa completa para el día a día; el atractivo turístico no es el foco—; hay fibra. El Hospital de Jarrio queda a unos diez minutos —el mejor tiempo de la zona—. El aeropuerto de Asturias anda alrededor de los cincuenta y cinco minutos, con Palma en verano.",
 "El tráfico es de villa casi todo el año. En verano la playa, Frexulfe —monumento natural—, Barayo —reserva hacia Valdés— y Puerto de Vega reciben veraneo: toallas, coches y terrazas. Las patronales locales animan el casco unos días. Vivir junto al paseo o a la orilla significa contar con semanas más ruidosas; hacia el interior de la villa, el ritmo de trabajo sigue.",
 "La semana tiene rutinas claras de villa: mercado, comercio, paseo de ría, bajar a Puerto de Vega cuando apetezca belleza concentrada, Frexulfe o Barayo cuando el día pida orilla más salvaje. Primavera y otoño son buenas épocas para conocerlo: la ría se pone verde e intensa; en noviembre la niebla media —más llevadera que en Tapia o Castropol— enseña el cielo real. Si solo conoces agosto en la playa, te llevas la imagen de folleto de la orilla. Si has visto un martes de gestos resueltos, ya puedes decidir si quieres esa practicidad.",
 "Fuera de temporada Navia es villa completa y útil. Encaja para quien priorice Jarrio a diez minutos y servicios, y acepte que la foto más bonita a menudo está a cinco minutos, no concentrada en cada esquina del casco.",
 ],
 tiempo: [
 "Si vienes de Baleares, el contraste es de cielo gris frecuente, no de invierno glacial. Navia suma unas mil novecientas horas de sol y unos cuarenta días despejados, frente a las dos mil ochocientas horas y ciento veinte jornadas claras de Mallorca. Caen alrededor de mil milímetros en unos ciento cuarenta días. La niebla es media; el viento, medio. También en verano llueve varios días al mes.",
 "El verano ronda dieciocho grados y medio, fresco frente a Baleares. La ría permite baño más usable que el Cantábrico abierto; Frexulfe y Barayo piden días de mar más llana. El agua anda entre dieciocho y veinte grados. Conviene probar un martes de noviembre y un agosto en la orilla antes de comprar solo por el hospital cercano.",
 ],
 vivir: [
 "El invierno en casa se nota por la humedad de ría y un cielo que se cierra con frecuencia, aunque la niebla sea media —más llevadera que en Tapia o Castropol—. Conviene preguntar por calefacción, aislamiento y orientación hacia el paseo: una terraza de agosto no garantiza uso de noviembre. Visitar un martes gris enseña más que firmar solo por el hospital cercano.",
 "Sin coche la semana se resuelve mejor que en el resto del occidente: centro de salud, mercado, comercio y hasta cine en el municipio; los servicios son 5/10 y hay fibra. En enero Navia es villa completa y útil, no pueblo vacío. Puerto de Vega, Frexulfe o Barayo piden coche o trayecto corto cuando se quiere belleza concentrada; el día a día se resuelve en la villa.",
 "Conviven gente local, trabajadores de la comarca y quien priorizó Jarrio y gestos diarios. Se oye asturiano en el mercado y en el ayuntamiento; el castellano basta para lo cotidiano. La vida social pasa por comercio, paseo de ría y ritmos de villa más que por una sola foto típica. Entre semana manda el trabajo; en verano la playa, Frexulfe y Puerto de Vega suben el volumen.",
 "La sanidad es el punto fuerte de la zona: el Hospital de Jarrio queda a unos diez minutos —el mejor tiempo de Asturias Occidente—. Empadronarse aquí abre médico de cabecera y centro de salud en la villa; para especialidades se baja a Jarrio sin el trayecto largo de Castropol. Es sanidad comarcal usable, no hospital en la misma calle que el paseo.",
 "Mantener el vínculo con Mallorca pasa por Asturias a unos cincuenta y cinco minutos, con Palma en verano; Santiago-Lavacolla sigue hacia las dos horas si hace falta casi todo el año. En invierno el coste no es solo el billete: es la logística de ida y vuelta cuando el cielo cantábrico aprieta. Conviene mirar el calendario real, no solo el de agosto.",
 "La vivienda típica es piso o casa de villa práctica junto al paseo o el casco: edificios de uso cotidiano, poca obra nueva y fibra. No es el modelo de Indianos densos de Luarca; es vivienda de semana resuelta. Junto a la ría hay que contar con humedad y ocupación de verano; hacia las afueras, acceso y orientación.",
 ],
 historia: [
 "La ría de Navia y el oficio de villa de servicios explican el municipio mejor que un solo monumento: paseo, comercio, A-8 y una escala que resuelve la semana. Puerto de Vega —pueblo marinero de mirador a cinco minutos— aporta la capa de belleza que el casco no concentra toda en una sola foto.",
 "El castro de Coaña, a unos cinco minutos, añade historia antigua de la comarca: poblado fortificado que se visita en una mañana. Jarrio, en Coaña, convierte la cercanía sanitaria en parte del dato útil de vivir aquí. La historia es de ría, oficio y logística, no de cementerio sobre el acantilado.",
 ],
 fuera: [
 "Si solo hay tiempo para una orilla de diario, el paseo de la ría y la playa a cinco minutos cubren el gesto. Agua más calmada que el Cantábrico abierto, banco, horizonte de estuario. Un martes de junio puedes tener espacio; en agosto hay más toallas y coches hacia la costa.",
 "Puerto de Vega ofrece mirador y casco marinero sin alejarse: la tarde de foto bonita cuando Navia pide belleza concentrada. Frexulfe —monumento natural— y Barayo —reserva hacia Valdés— amplían el paseo con orillas más abiertas y paisaje protegido.",
 "El castro de Coaña cubre una mañana de patrimonio. Luarca queda hacia el este si se busca villa blanca; Tapia, hacia el oeste si lo que apetece es surf. La A-8 convierte la villa en base útil más que en isla.",
 ],
 casa: [
 "El entorno del paseo y el casco ofrecen pisos y viviendas de villa: edificios de uso cotidiano, poca obra nueva y fibra. Junto a la ría hay que contar con humedad y ocupación de verano; hacia las afueras, acceso y orientación. No es el modelo de Indianos densos de Luarca; es vivienda de villa práctica.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. La franja media puede ser piso reformado o vivienda con más espacio.",
 "Los servicios son 5/10. Jarrio queda a unos diez minutos. Asturias está a unos cincuenta y cinco, con Palma en verano; Santiago, hacia las dos horas. Eso es Navia: semana resuelta y orilla cerca; el marco bonito se visita a cinco minutos.",
 ],
 encaja: {
 si: [
 "La logística de la zona importa más que la foto del cementerio sobre el acantilado. Navia es villa de servicios en su ría: paseo, comercio, mercado, centro de salud y hasta cine; playa a unos cinco minutos; Puerto de Vega —pueblo marinero de mirador— a cinco; Frexulfe —monumento natural— y Barayo —reserva hacia Valdés— a un trayecto corto; castro de Coaña cerca. Quien quiera resolver un martes de noviembre sin salir del municipio, bajar a la ría o a la playa cuando apetezca y tener el Hospital de Jarrio, en Coaña, a unos diez minutos —el mejor tiempo de Asturias Occidente— encontrará aquí la opción práctica. En verano la orilla, Frexulfe, Barayo y Puerto de Vega reciben veraneo, tráfico y terrazas; hacia el interior de la villa el ritmo de trabajo sigue. Unas 1.900 horas de sol y unos cuarenta días despejados —frente a las 2.800 horas y ciento veinte de Mallorca— mantienen el cielo cantábrico: niebla media (más llevadera que en Tapia o Castropol), verano alrededor de 18,5 °C y agua entre 18 y 20 °C. La ría permite baño más usable que el Cantábrico abierto.",
 "Funciona si se acepta menos encanto de marco diario que Luarca a cambio de A-8 a mano, precio y aeropuerto de Asturias a unos cincuenta y cinco minutos. Los servicios de ficha son 5/10 —villa completa para el día a día; el atractivo turístico no es el foco—. Quien tenga tiempo libre para Puerto de Vega, el paseo de ría y Frexulfe, y use Navia como base útil más que como foto turística, entenderá el sitio: la belleza se visita a cinco minutos; la semana se vive en la villa. Palma en verano cabe desde Asturias; Santiago-Lavacolla sigue hacia las dos horas si hace falta casi todo el año.",
 ],
 no: [
 "Si lo que se busca es la villa blanca de la Costa Verde —puerto, siete puentes sobre el río Negro, cementerio y ermita sobre el acantilado, faro e Indianos como marco de cada tarde—, Navia no lo es. Luarca cubre ese carácter; aquí la foto más bonita está en Puerto de Vega o en Frexulfe, no concentrada en el casco. Tampoco encaja quien necesite el aeropuerto a cuarenta minutos: Asturias anda alrededor de los cincuenta y cinco; Luarca gana ese trayecto. Quien se decida solo por el hospital cerca, sin probar un agosto en la orilla ni un invierno de cielo cubierto, puede descubrir que la practicidad no compensa si el paisaje diario pedía otra cosa.",
 "El cielo de Baleares no está aquí: llueve con frecuencia, el verano es fresco y Oviedo o Avilés quedan hacia la hora, no a un cuarto de hora. Si la ciudad grande a media hora o el sol mediterráneo son innegociables, esta villa no encaja aunque Jarrio esté a diez minutos. Quien busque solo precio mínimo puede mirar Castropol —más bajo de la zona—, a costa de servicios 3/10 y más distancia a hospital y aeropuerto. Navia pide aceptar menos foto típica a cambio de la semana resuelta.",
 ],
 veredicto:
 "Veredicto: Navia encaja como apuesta práctica de Asturias Occidente —piso o vivienda caminable a paseo y comercio, con Puerto de Vega cerca para el ocio— sobre todo si Jarrio a diez minutos, A-8 y precio importan más que el marco de villa blanca. Probar un martes de noviembre y un agosto en la orilla antes de comprar. Se ganan hospital cercano, villa útil y Frexulfe o Barayo a un salto; se aceptan menos encanto que Luarca, cielo cantábrico y Asturias a unos cincuenta y cinco minutos. Quien priorice la foto típica y el vuelo corto, Luarca; quien priorice orilla de surf cuidada, Tapia.",
 },
 fotosAbrir: [
 { src: "/fotos/asturias-occidente/navia-villa.jpg", pie: "Navia: villa de servicios en su ría" },
 { src: "/fotos/asturias-occidente/navia-ria.jpg", pie: "Ría de Navia" },
 ],
 fotosHistoria: [
 { src: "/fotos/asturias-occidente/navia-coana.jpg", pie: "Castro de Coaña, cerca de Navia" },
 { src: "/fotos/asturias-occidente/navia-paseo.jpg", pie: "Paseo junto a la ría en Navia" },
 ],
 fotosFuera: [
 { src: "/fotos/asturias-occidente/navia-vega.jpg", pie: "Puerto de Vega, a minutos de Navia" },
 { src: "/fotos/asturias-occidente/navia-playa.jpg", pie: "Playa cerca de Navia" },
 ],
 creditoFotos: credito,
 }
```

### 4.2 Capa 2026 completa

> CITA LITERAL — fila `slug: "navia"` en `web/src/data/municipios-asturias-occidente.json`.  
> Autoridad factual. No rellenar null/`…` truncados.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `116948` |
| `A_3hab` | `161928` |
| `B_2hab` | `94458` |
| `B_3hab` | `130788` |
| `advertenciaMicrozona` | `null` *(n.d. / ausente)* |
| `aeropuertoMin` | `55` |
| `aeropuertoPractico2026` | Asturias 68 km · 55 min (Palma: verano); A Coruña 166 km · 120 min (Palma: verano) Tiempo histórico orientativo: ~55 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Asturias 68 km · 55 min (Palma: verano); A Coruña 166 km · 120 min (Palma: verano) |
| `autonomiaCotidiana` | FUERTE |
| `casaQueBuscar` | Vivienda cómoda y accesible, 2–3 dormitorios, exterior, servicios cotidianos ... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Intermedio |
| `comunicaciones` | A-8 / N-634; tren FEVE |
| `comunicacionesNota10` | `6` |
| `cubiertos` | `165` |
| `dependenciaCocheTexto` | Baja para rutina de villa; coche para playa/hospital. |
| `despejados` | `40` |
| `estacionalidad2026` | Villa comarcal anual. |
| `fibra` | Sí |
| `franja` | A |
| `hospitalMin` | `10` |
| `hospitalPractico2026` | Hospital de Jarrio |
| `hospitalPriv` |  |
| `hospitalPub` | 8 km · 10 min · Jarrio (Coaña) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 8 km · 10 min · Jarrio (Coaña); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `80` |
| `lat` | `43.539` |
| `lluviaDias` | `140` |
| `lluviaMm` | `1000` |
| `lon` | `-6.723` |
| `mapa` | 49_navia.png |
| `mercadoReventa` | Mercado intermedio: base residencial propia y/o demanda exterior. Priorizar u... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `5` |
| `minCosta` | `3` |
| `municipio` | Navia |
| `n` | `49` |
| `niebla` | Media |
| `obraNueva` | Poca |
| `pais` | España |
| `palmaDirecta2026` | Asturias: Palma figura entre destinos publicados en 2026; programación/temporada variable, comprobar antes de viajar. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Asturias (verano) · 55 min |
| `paseoCotidiano` | Ría y frente urbano. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Muy funcional en el occidente, aunque la experiencia de playa no está tan integrada como en Tapia. |
| `playaBano` | Navia / Frexulfe / Barayo |
| `playaCotidiana` | PARCIAL |
| `playaCotidianaModo` | Ría cotidiana; playa y costa requieren un pequeño desplazamiento según vivienda. |
| `precioM2` | `1384` |
| `provincia` | Asturias |
| `radioCotidiano` | Villa comarcal con comercio, salud, servicios y vida propia junto a la ría. |
| `radioSalida` | Costa occidental y playas; hospital en Jarrio a corta salida. |
| `sanidadPrimaria2026` | Atención primaria local |
| `servicios` | `6` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | Tiene: hospital a 10 min, villa completa. Falta: atractivo turístico |
| `slug` | navia |
| `solHoras` | `1900` |
| `tempAgua` | 18-20 |
| `tempInvierno` | `9.5` |
| `tempVerano` | `18.5` |
| `transporteRelevante2026` | A-8 / N-634; tren FEVE Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital de Jarrio. |
| `viento` | Media |
| `zona` | Asturias Occidente |

### 4.3 Auditorías / plan existentes

**No existe plan editorial Asturias.**

**AUDITORIA:** URGENTE — precio ~1100 vs 1384; Palma; sol.

**P0_RESTANTES:** Navia — P0 precio: **no**.

**estudio_zonas.md:** Navia 6/10 (capa 6; relato dice 5), hospital 10, cine, Puerto de Vega, precio histórico 1100.


### 4.4 Auditoría relato ↔ capa

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | **5/10** repetido | `servicios` **6**; nota: Tiene hospital 10 min, villa completa; Falta atractivo turístico | OBSOLETO | Nunca 5/10. Omitir chip; narrar autonomía FUERTE / villa comarcal |
| Precio | casa remite a capa; encaja compara «precio» vs Castropol/Luarca sin cifra fija | `precioM2` 1384; A_3hab 161928; auditoría ~1100 vs 1384 | OBSOLETO / DUPLICA_CAPA | Omitir cifras y rankings; TablaPrecios |
| Villa/ría vs playa | Paseo ría + playa ~5′; Frexulfe/Barayo salidas | `playaCotidiana` PARCIAL; modo: ría cotidiana; playa/costa pequeño desplazamiento | ALINEADO | No vender playa pegada a toda vivienda; ría = agua cotidiana |
| Autonomía / servicios | CS, mercado, comercio, cine; enero villa útil | `autonomiaCotidiana` FUERTE; `radioCotidiano` villa comarcal | ALINEADO / P4_PRESERVAR | Preservar practicidad; cine solo si ya en relato/estudio (sí) |
| Hospital práctico | Jarrio ~10′ «mejor tiempo zona» | `hospitalPractico2026` Jarrio; hospitalMin 10 | ALINEADO | No arrastrar hospitales gallegos; Jarrio es la referencia |
| Aeropuerto / Palma / FEVE | Asturias ~55′; Palma verano; FEVE en comunicaciones capa | aeropuertoMin 55; palma variable; transporte FEVE | ALINEADO / SOPORTADO_PERO_INFRAUSADO | FEVE sin promesa; Palma no permanente |
| Puerto de Vega / Coaña / Frexulfe / Barayo | Presentes como salidas/belleza | radioSalida + estudio | P4_PRESERVAR | Glosar: Puerto de Vega = pueblo marinero cercano; no confundir con Navia villa |
| Clima | 1900 h / 40 despejados / niebla media vs Tapia-Castropol | JSON coincide | DUPLICA_CAPA | Una comparación Mallorca cualitativa |
| Chips duplicados hospital/aero/servicios | Cascada en abrir+vivir+casa+encaja | Viven en FichaCapa2026 | DUPLICA_CAPA | Consecuencia narrativa una vez |

### 4.5 P4 / identidad

| Elemento | Qué es | Por qué importa | Cotidiano/salida | Soporte repo | Preservar |
|---|---|---|---|---|---|
| Villa de servicios / ría | Núcleo comarcal útil | Autonomía FUERTE | Cotidiano | relato + capa | sí |
| Mercado / comercio / cine | Vida de villa (genérico + cine) | Semana sin coche | Cotidiano | relato + estudio (cine) | sí (sin inventar nombre/día mercado) |
| Puerto de Vega | Pueblo marinero de mirador a ~5′ | Belleza concentrada fuera del casco | Salida corta | relato + estudio | sí |
| Frexulfe | Monumento natural / playa | Orilla más salvaje | Salida | relato + playaBano | sí |
| Barayo | Reserva natural hacia Valdés | Paisaje protegido | Salida | relato | sí |
| Castro de Coaña | Poblado fortificado cercano | Historia comarcal | Salida (mañana) | relato + estudio | sí |
| Jarrio (Coaña) | Hospital comarcal a ~10′ | Mejor sanidad de la zona | Salida corta necesaria | capa hospital | sí |

### 4.6 Vida cotidiana soportada

Pregunta guía: *Ya vivo aquí. Tengo toda la mañana libre. ¿Qué puedo hacer con mi día sin convertirlo en turismo?*

| Elemento | Clasificación | Base repo |
|---|---|---|
| Comercio / mercado / CS a pie | YA SOPORTADO | relato + autonomia FUERTE |
| Cine | YA SOPORTADO | relato + estudio_zonas |
| Paseo de ría | YA SOPORTADO | paseoCotidiano |
| Playa a ~5′ | YA SOPORTADO (parcial) | playaCotidiana PARCIAL |
| Puerto de Vega | YA SOPORTADO (salida corta) | relato |
| Frexulfe / Barayo | YA SOPORTADO (salida) | relato |
| Castro de Coaña | YA SOPORTADO (salida) | relato |
| Nombre/día concreto de mercado | NO SOPORTADO | — |
| Biblioteca/deporte nombrados | NO SOPORTADO | — |
| FEVE utilidad | SOPORTADO PERO FALTA EN RELATO | transporte (sin promesa) |

### 4.7 Reality toll

Solo peajes estructurales **soportados** en repo:

- Coche: baja en rutina villa; para playa/hospital/salidas
- Hospital: Jarrio ~10′ (mejor de la zona)
- Aeropuerto: ~55′; Palma estacional
- Estacionalidad: villa anual; verano en orilla/Puerto de Vega
- Humedad de ría
- Playa no tan integrada como Tapia (peaje capa)
- «Falta atractivo turístico» es nota de capa, no defecto a dramatizar

### 4.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | Sin cifra fija | **1384** | Auditoría ~1100 vs 1384 |
| A/B | No narrados | A_3 161928; B_3 130788 | Tabla |
| Franja | — | A | |
| casaQueBuscar / reventa | Villa práctica, humedad ría | Truncados genéricos | Cualitativo |

### 4.9 Clima: deuda / duplicación

- Cascada 1900/40/1000/140 + niebla media vs vecinos.
- Mallorca repetida en abrir/tiempo/encaja.
- Deuda metodológica despejados/cubiertos — marcar solo.
- Sin corrección.

**Sin correcciones en este bloque: sí.**

### 4.10 No soportado / no inventar

- Servicios **5/10**
- Precio 1100 histórico / totales
- Nombre/día de mercado
- Hospital distinto de Jarrio por cercanía inventada
- Promesa FEVE diaria
- Presentar Puerto de Vega como el casco de Navia
## 5. Luarca / Valdés

### 5.1 Relato actual completo

> CITA LITERAL — clave `luarca-valdes` en `web/src/lib/relatos-asturias-occidente.ts`.

```ts
luarca-valdes: {
 escala: "Villa blanca de la Costa Verde",
 abrir: [
 "Luarca se siente más villa de foto turística de lo que el mapa del occidente promete. Unos cuatro mil quinientos habitantes en el núcleo —unos doce mil en el concejo de Valdés—: puerto, siete puentes sobre el río Negro, cementerio y ermita sobre el acantilado, faro, casas de Indianos y mercado. Playas primera y segunda en la villa; Otur, Cueva y Cadavedo a diez o quince minutos. Es la villa blanca de la Costa Verde: belleza trabajada y, a la vez, la mejor logística aérea de la zona.",
 "Quien vive aquí es gente local, vecinos de Valdés y veraneantes que vuelven cada agosto. Un martes de noviembre se compra, se va al mercado y se camina el casco. Los servicios alcanzan 6/10; hay fibra. El Hospital de Jarrio queda a unos veinte minutos. El aeropuerto de Asturias está a unos cuarenta —el mejor tiempo de Asturias Occidente—, con Palma en verano.",
 "El tráfico es de villa casi todo el año. En verano el puerto, las playas urbanas y los miradores reciben afluencia, coches y aparcamiento justo. Luarca se conoce por su belleza; las patronales y el veraneo marcan el impacto al vivir —ruido y gente unos días—, sin apagar la villa el resto del año. Quien compre junto al puerto debe probar agosto.",
 "La semana tiene rutinas claras: bajar al puerto, cruzar los puentes del Negro, subir al faro o al cementerio sobre el acantilado, mercado, Jardines de la Fonte Baxa cuando apetezca verde ordenado. Cabo Busto y la ruta de los miradores cierran el paseo de horizonte. Primavera y otoño son buenas épocas para conocerlo: la villa blanca se pone intensa de verde; en noviembre la niebla media enseña el trato cantábrico. Si solo conoces un sábado claro, te llevas la imagen de folleto. Si has visto el puerto lleno y un día gris, ya puedes decidir si de verdad quieres vivir aquí.",
 "Fuera de temporada Luarca sigue siendo villa con vida. Encaja para quien quiera la más bonita y la mejor comunicada de la Asturias occidental, aceptando Jarrio a veinte minutos a cambio del vuelo más corto de la zona.",
 ],
 tiempo: [
 "Si vienes de Baleares, el aeropuerto cerca no trae el cielo de la isla. Luarca registra unas mil ochocientas cincuenta horas de sol y unos cuarenta y dos días despejados —el extremo algo menos duro en despejados—, frente a las dos mil ochocientas horas y ciento veinte jornadas claras de Mallorca. Caen alrededor de mil cincuenta milímetros en unos ciento cuarenta y cinco días. La niebla es media; el viento, medio. También en verano llueve con frecuencia.",
 "El verano ronda dieciocho grados y medio, fresco frente a Baleares. Las playas primera y segunda tienen agua entre dieciocho y veinte grados; Otur, Cueva y Cadavedo amplían opciones. Sigue lejos del Mediterráneo, pero el puerto y los miradores compensan muchos días de baño corto. Conviene probar niebla y un día de afluencia en miradores antes de decidirse solo por la foto.",
 ],
 vivir: [
 "El invierno en casa se nota por la niebla media y la humedad del puerto: las casas blancas e indianas piden aislamiento, estado de galerías y orientación, no solo fachada bonita. Una terraza hacia el río Negro o el Cantábrico que en agosto parece el centro de la vida, entre noviembre y febrero se usa a medias. Visitar un día gris y otro de afluencia en miradores enseña más que firmar solo por el cementerio sobre el acantilado.",
 "Sin coche se resuelve mucho: mercado, casco, farmacia y mesas un martes de noviembre; los servicios alcanzan 6/10 y hay fibra. En enero Luarca sigue siendo villa con vida, no decorado de temporada. Otur, Cueva, Cadavedo o Cabo Busto piden coche cuando se quiere otra orilla; el día a día se camina entre los puentes del Negro y el puerto.",
 "Conviven gente local, vecinos de Valdés y veraneantes que vuelven cada agosto. Se oye asturiano en el mercado y en la calle; el castellano basta para lo cotidiano, pero la vida social pasa por el casco blanco y la vida cotidiana de villa marinera. Entre semana manda la escala cuidada; en verano el puerto y las playas urbanas suben el volumen con tráfico y aparcamiento justo.",
 "La sanidad comarcal pide trayecto: el Hospital de Jarrio queda a unos veinte minutos. En la villa hay servicios de día a día; para urgencias y especialidades se baja a Coaña. No es Jarrio a diez minutos como en Navia: es aceptar hospital usable a cambio del marco de villa blanca.",
 "Ir y volver a Mallorca es el punto fuerte del occidente: el aeropuerto de Asturias está a unos cuarenta minutos —el mejor tiempo de la zona—, con Palma en verano; Santiago-Lavacolla, hacia las dos horas. En invierno el trayecto sigue siendo el más corto del mapa occidental, pero conviene mirar el calendario real de vuelos, no solo el de agosto.",
 "La vivienda típica es piso o casa blanca en el casco, a veces indiana rehabilitada; las afueras dan más espacio. Hay poca obra nueva y fibra. Las casas de Indianos suben de franja: hay que mirar estado, mantenimiento y humedad, no solo la galería. Junto al puerto hay que contar con salitre y afluencia de temporada.",
 ],
 historia: [
 "El cementerio y la ermita sobre el acantilado, el faro y los siete puentes sobre el río Negro explican Luarca como villa de foto turística trabajada: piedra, mar y un casco que se reconoce de lejos. No es adorno: es el carácter que la distingue de Navia o Tapia. El río corta la villa; los puentes la cosen.",
 "Las casas de Indianos —quien volvió de América con fortuna— y el mercado añaden capa de villa con prestigio costero: palacetes, galerías, un lujo traído de lejos plantado junto al Cantábrico. Cabo Busto, la ruta de los miradores y los Jardines de la Fonte Baxa completan la ficha de paseo y horizonte. Lo que conviene saber es de retorno, faro y acantilado, no de industria metropolitana.",
 ],
 fuera: [
 "Si solo hay tiempo para una tarde de diario, el puerto, las playas primera y segunda y el faro cubren el gesto. Orilla urbana, agua entre dieciocho y veinte grados, horizonte de villa blanca. Un martes de junio puedes caminar con calma; en agosto el aparcamiento junto a la orilla se queda corto.",
 "La ruta de los miradores y el cementerio sobre el acantilado cierran la foto típica de la costa sin alejarse: prado, precipicio, mar. Otur, Cueva y Cadavedo amplían playa a diez o quince minutos cuando apetece otra arena.",
 "Cabo Busto ofrece senda circular de horizonte abierto. Navia cubre Jarrio más cerca si hace falta; Tapia, surf hacia el oeste. Luarca concentra belleza; el mapa de apoyo está a un trayecto corto.",
 ],
 casa: [
 "El casco ofrece pisos y viviendas blancas o indianas; las afueras, más espacio. Hay poca obra nueva y fibra. En el centro hay que contar con turismo de verano y humedad; hacia el puerto, salitre y afluencia de temporada. Las casas de Indianos rehabilitadas suben a la franja media-alta: hay que mirar estado, mantenimiento y orientación, no solo la fachada.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. La franja media puede ser piso reformado en casco o vivienda con vistas al puerto.",
 "Los servicios son 6/10. Jarrio queda a unos veinte minutos. El aeropuerto de Asturias está a unos cuarenta, con Palma en verano; Santiago-Lavacolla, hacia las dos horas. Eso es Luarca: mucho marco y la mejor conexión aérea del occidente; la sanidad comarcal pide trayecto.",
 ],
 encaja: {
 si: [
 "La villa blanca a la puerta importa más que tener el hospital a diez minutos. Luarca —núcleo del concejo de Valdés— concentra puerto, siete puentes sobre el río Negro, cementerio y ermita sobre el acantilado, faro, casas de Indianos y mercado: el marco que Navia o Tapia no dan cada tarde. Playas 1ª y 2ª en la villa; Otur, Cueva y Cadavedo a diez o quince minutos; Cabo Busto y la ruta de los miradores cierran el paseo. Quien quiera caminar el casco un martes de noviembre, bajar al puerto y subir al faro o al cementerio sobre el acantilado encontrará aquí villa con vida todo el año, no solo foto de agosto. En verano el puerto, las playas urbanas y los miradores reciben afluencia, tráfico y aparcamiento justo: hay que probarlo antes de comprar junto a la orilla. Unas 1.850 horas de sol y unos cuarenta y dos días despejados —frente a las 2.800 horas y ciento veinte de Mallorca— mantienen el contraste cantábrico: niebla media, verano alrededor de 18,5 °C, agua entre 18 y 20 °C. El baño sigue lejos del Mediterráneo; el horizonte del puerto compensa muchos días cortos.",
 "Funciona si se acepta el Hospital de Jarrio, en Coaña, a unos veinte minutos a cambio de la mejor logística aérea de la zona: el aeropuerto de Asturias a unos cuarenta minutos, con Palma en verano. Los servicios son 6/10 —villa completa, fibra sí—;. Quien tenga tiempo libre para los Jardines de la Fonte Baxa, los miradores y las playas del concejo, y valore belleza y vuelo más corto que la sanidad a diez minutos, entenderá por qué Luarca es la elección si Asturias Occidente se mira en serio. Navia queda hacia el oeste si hace falta Jarrio más cerca; Tapia, si lo que se busca es surf delante.",
 ],
 no: [
 "Jarrio a veinte minutos no es Jarrio a diez: eso es Navia. Si la prioridad absoluta es sanidad comarcal al cuarto de hora, esta villa no encaja aunque el faro esté en la puerta. Tampoco encaja quien busque solo el precio más bajo —Castropol, más bajo de la zona— o quien necesite ciudad grande a media hora: Oviedo y Avilés siguen hacia la hora. Las casas de Indianos rehabilitadas suben de franja; quien compre esperando gangas de pueblo sin mirar estado y humedad se equivoca de opción.",
 "El sol de Baleares no llega con el aeropuerto a cuarenta minutos. Unas 1.850 horas de sol, lluvia frecuente y verano fresco son el trato real; quien descubra Luarca solo en un sábado claro de agosto, sin probar niebla media ni el puerto lleno, se llevará la sorpresa del Cantábrico. Si lo que se quiere es villa práctica sin tanta afluencia de foto turística, Navia cubre hospital y precio más amable; si se quiere surf y casco marinero pequeño, Tapia. Luarca pide aceptar cielo cubierto muchos días a cambio de la villa más bonita y el vuelo más corto de la zona.",
 ],
 veredicto:
 "Veredicto: Luarca encaja como villa blanca de la Costa Verde —piso o vivienda en casco o cerca del puerto, fuera del tramo más ocupado en agosto; Indianas solo si el estado y el precio cuadran— sobre todo si encanto y Asturias a cuarenta minutos importan más que Jarrio a diez. Probar niebla, un día de afluencia en miradores y playas 1ª y 2ª antes de comprar. Se ganan faro, cementerio sobre el acantilado, Otur o Cueva a un salto y la mejor conexión aérea de Asturias Occidente; se aceptan, hospital a veinte minutos y verano fresco frente a Mallorca. Quien priorice sanidad cercana, Navia; quien priorice precio de ría, Castropol.",
 },
 fotosAbrir: [
 { src: "/fotos/asturias-occidente/luarca-puerto.jpg", pie: "Puerto de Luarca" },
 { src: "/fotos/asturias-occidente/luarca-casco.jpg", pie: "Casco blanco de Luarca" },
 ],
 fotosHistoria: [
 { src: "/fotos/asturias-occidente/luarca-cementerio.jpg", pie: "Camino y acantilado sobre Luarca" },
 ],
 fotosFuera: [
 { src: "/fotos/asturias-occidente/luarca-faro.jpg", pie: "Faro de Luarca" },
 { src: "/fotos/asturias-occidente/luarca-playa.jpg", pie: "Playa de Luarca" },
 ],
 creditoFotos: credito,
 }
```

### 5.2 Capa 2026 completa

> CITA LITERAL — fila `slug: "luarca-valdes"` en `web/src/data/municipios-asturias-occidente.json`.  
> Autoridad factual. No rellenar null/`…` truncados.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `106132` |
| `A_3hab` | `146952` |
| `B_2hab` | `85722` |
| `B_3hab` | `118692` |
| `advertenciaMicrozona` | La topografía es estructural: puerto y zona baja, barrios altos y viviendas exteriores no tienen la misma caminabilidad. |
| `aeropuertoMin` | `40` |
| `aeropuertoPractico2026` | Asturias 49 km · 40 min (Palma: verano) Tiempo histórico orientativo: ~40 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Asturias 49 km · 40 min (Palma: verano) |
| `autonomiaCotidiana` | FUERTE EN ZONA BAJA |
| `casaQueBuscar` | Vivienda cómoda y accesible, 2–3 dormitorios, exterior, servicios cotidianos ... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Intermedio |
| `comunicaciones` | A-8 / N-634; tren FEVE |
| `comunicacionesNota10` | `6` |
| `cubiertos` | `165` |
| `dependenciaCocheTexto` | Media: baja en zona baja bien situada, mayor en cotas altas/exteriores. |
| `despejados` | `42` |
| `estacionalidad2026` | Villa comarcal anual con capa turística. |
| `fibra` | Sí |
| `franja` | A |
| `hospitalMin` | `20` |
| `hospitalPractico2026` | Hospital de Jarrio |
| `hospitalPriv` |  |
| `hospitalPub` | 20 km · 20 min · Jarrio (Coaña) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 20 km · 20 min · Jarrio (Coaña); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `80` |
| `lat` | `43.545` |
| `lluviaDias` | `145` |
| `lluviaMm` | `1050` |
| `lon` | `-6.536` |
| `mapa` | 50_luarca.png |
| `mercadoReventa` | Mercado intermedio: base residencial propia y/o demanda exterior. Priorizar u... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `3` |
| `minCosta` | `1` |
| `municipio` | Luarca (Valdés) |
| `n` | `50` |
| `niebla` | Media |
| `obraNueva` | Poca |
| `pais` | España |
| `palmaDirecta2026` | Asturias: Palma figura entre destinos publicados en 2026; programación/temporada variable, comprobar antes de viajar. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Asturias (verano) · 40 min |
| `paseoCotidiano` | Puerto y zona baja; Atalaya/cementerio como extensión con subida. |
| `paseoPendienteTopografia` | Pendientes importantes: no equiparar distancia corta con paseo fácil. |
| `peajeRealidad` | Puerto y paisaje memorables a cambio de una topografía que condiciona la vida diaria. |
| `playaBano` | Luarca (1ª y 2ª) / Otur / Cueva |
| `playaCotidiana` | SÍ/PARCIAL |
| `playaCotidianaModo` | Playas junto a la villa, pero el acceso cotidiano depende mucho de la cota de la vivienda. |
| `precioM2` | `1256` |
| `provincia` | Asturias |
| `radioCotidiano` | Zona baja concentra puerto, comercio y servicios; muchas viviendas implican desnivel. |
| `radioSalida` | Costa de Valdés y hospital de Jarrio. |
| `sanidadPrimaria2026` | Atención primaria local |
| `servicios` | `6` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | Tiene: villa completa, hospital a 20 min. Falta: tren en el núcleo (apeadero) |
| `slug` | luarca-valdes |
| `solHoras` | `1850` |
| `tempAgua` | 18-20 |
| `tempInvierno` | `9.5` |
| `tempVerano` | `18.5` |
| `transporteRelevante2026` | A-8 / N-634; tren FEVE Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital de Jarrio. |
| `viento` | Media |
| `zona` | Asturias Occidente |

### 5.3 Auditorías / plan existentes

**No existe plan editorial Asturias.**

**AUDITORIA:** URGENTE — precio ~1050 vs 1256; repite €/m² + sol (+5).

**P0_RESTANTES:** Luarca — P0 precio: **no**.

**estudio_zonas.md:** Luarca 6/10, 4500/12000 Valdés, aero 40, precio histórico 1300 / A 152k (histórico; capa 1256 / A_3 146952).


### 5.4 Auditoría relato ↔ capa

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | 6/10 repetido | `servicios` 6; falta tren en núcleo (apeadero) | DUPLICA_CAPA | Omitir chip; narrar FUERTE EN ZONA BAJA |
| Precio / Indianos | casa remite a capa; menciona Indianas suben de franja sin €/m² fijo; auditoría ~1050 vs 1256 | `precioM2` 1256; A_3hab 146952 | OBSOLETO (si reaparece cifra) / ALINEADO (omisión actual) | No reponer 1050/1300 estudio; omitir €/m²; Indianas = tipología cualitativa |
| Luarca vs Valdés | 4500 núcleo / 12000 concejo; relato centrado en Luarca | `advertenciaMicrozona` topografía estructural; no generalizar caminabilidad | SOPORTADO_PERO_INFRAUSADO | Advertir: experiencia Luarca ≠ todo Valdés; Otur/Cueva/Cadavedo = salidas del concejo |
| Zona baja / puerto vs Atalaya / pendientes | Subir faro/cementerio; no advierte pendiente como peaje estructural | `paseoCotidiano` puerto zona baja; Atalaya/cementerio con subida; `paseoPendienteTopografia` pendientes importantes; autonomia FUERTE EN ZONA BAJA | SOPORTADO_PERO_INFRAUSADO | Separar paseo cotidiano llano vs subida opcional; peaje topografía en casa/encaja |
| Playa cotidiana | 1ª y 2ª en villa; Otur/Cueva/Cadavedo 10–15′ | `playaCotidiana` SÍ/PARCIAL; depende cota vivienda | ALINEADO | No generalizar playa andando desde cota alta |
| Hospital / aero / Palma | Jarrio ~20′; Asturias ~40′ «mejor zona»; Palma verano | hospitalMin 20; aeropuertoMin 40; palma variable | ALINEADO | Tradeoff sanidad vs vuelo; no permanente Palma; menos martilleo minutos |
| Estacionalidad / foto turística | Verano afluencia puerto/miradores; enero villa con vida | `estacionalidad2026` villa comarcal anual + capa turística | ALINEADO / P4_PRESERVAR | Belleza sin convertir en recomendación personalizada |
| Clima | 1850 h / 42 despejados / 1050 mm / 145 días repetidos | JSON coincide | DUPLICA_CAPA | Una pasada cualitativa; no corregir |
| FEVE | No enfatizado en relato | transporte FEVE; serviciosNota falta tren en núcleo | SOPORTADO_PERO_INFRAUSADO | Sin promesa de utilidad en núcleo |
| P4 identidad | Puentes Negro, cementerio/ermita acantilado, faro, Indianos, Fonte Baxa, Cabo Busto | fotos + estudio + radios | P4_PRESERVAR | Glosar cada topónimo; Fuente Baxa/Busto = paseo/salida |

### 5.5 P4 / identidad

| Elemento | Qué es | Por qué importa | Cotidiano/salida | Soporte repo | Preservar |
|---|---|---|---|---|---|
| Villa blanca / puerto | Núcleo de Valdés sobre el Cantábrico | Identidad y vida anual | Cotidiano (zona baja) | relato + radio | sí |
| Río Negro / siete puentes | Río que corta el casco | Caminar la villa | Cotidiano | relato | sí |
| Cementerio / ermita / Atalaya | Mirador sobre acantilado | Foto típica + **subida** | Extensión con pendiente | relato + paseoPendiente | sí |
| Faro | Faro de Luarca | Horizonte / paseo | Cotidiano o extensión | relato + fotos | sí |
| Casas de Indianos | Arquitectura de retorno de América | Prestigio / tipología cara de mantener | Cotidiano (vivienda) | relato + estudio | sí |
| Playas 1ª y 2ª | Playas urbanas | Baño según cota | Cotidiano parcial | capa playa SÍ/PARCIAL | sí |
| Otur / Cueva / Cadavedo | Playas del concejo | No son «toda Valdés = Luarca» | Salida 10–15′ | relato + capa | sí |
| Cabo Busto / Fonte Baxa / miradores | Senda / jardines / miradores | Paseo de horizonte | Salida / tarde | relato + estudio | sí |

### 5.6 Vida cotidiana soportada

Pregunta guía: *Ya vivo aquí. Tengo toda la mañana libre. ¿Qué puedo hacer con mi día sin convertirlo en turismo?*

| Elemento | Clasificación | Base repo |
|---|---|---|
| Mercado / casco / farmacia a pie (zona baja) | YA SOPORTADO | relato + autonomia FUERTE EN ZONA BAJA |
| Puerto y puentes del Negro | YA SOPORTADO | relato + paseo |
| Faro / cementerio-Atalaya | YA SOPORTADO (con subida) | relato + pendiente capa |
| Playas 1ª/2ª | YA SOPORTADO (según cota) | playa SÍ/PARCIAL |
| Fonte Baxa / miradores / Cabo Busto | YA SOPORTADO (salida/tarde) | relato |
| Otur/Cueva/Cadavedo | YA SOPORTADO (salida) | relato |
| Día lluvia interior concreto | NO SOPORTADO | — |
| Nombre mercado / horarios | NO SOPORTADO | — |
| Generalizar a todo Valdés | NO SOPORTADO | advertenciaMicrozona |

### 5.7 Reality toll

Solo peajes estructurales **soportados** en repo:

- Topografía / pendientes (peaje estructural capa)
- Coche: media según cota; zona baja más autónoma
- Hospital: Jarrio ~20′
- Aeropuerto: ~40′ (mejor zona); Palma estacional
- Estacionalidad: capa turística verano
- Humedad/salitre puerto; mantenimiento Indianas
- No generalizar Luarca a todo Valdés
- FEVE no en núcleo (nota servicios)

### 5.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | Sin cifra; Indianas «suben franja» | **1256** | Auditoría ~1050 vs 1256; no reponer 1300 estudio |
| A/B | No narrados | A_3 146952; B_3 118692 | Tabla |
| Franja | — | A | |
| microzona | Impícita (puerto vs afueras) | advertencia topografía; microzonaPrecio null | Crucial para vivienda |
| casaQueBuscar / reventa | Acceso, humedad, Indianas | Truncados | Enfatizar cota/accesibilidad |

### 5.9 Clima: deuda / duplicación

- Cascada 1850/42/1050/145.
- Relato presenta cifras como de Luarca; son campos de la fila JSON del municipio (ok como capa, no inventar estación local distinta).
- Deuda despejados/cubiertos — no corregir.
- Sin corrección.

**Sin correcciones en este bloque: sí.**

### 5.10 No soportado / no inventar

- €/m² 1050/1300 históricos
- Afirmar caminabilidad idéntica en todo Valdés
- Equiparar Atalaya con paseo llano
- Palma permanente
- Horarios mercado/jardines
- Defectos inventados para «equilibrar» belleza


## 6. Referencia editorial A Mariña

> Cuatro relatos **actuales ya aprobados** (post reescritura A Mariña).  
> Uso: densidad, omisión de chips/€, tradeoffs, casa cualitativa, microzonas. **No** plantilla de frases ni topónimos.

### barreiros

> CITA LITERAL — `web/src/lib/relatos-a-marina.ts` clave `barreiros` (post CURSOR_21/23/25).

```ts
barreiros: {
    escala: "Playas y parroquias",
    abrir: [
      "Barreiros se entiende mejor comparando agosto con enero. La costa se estira entre playas como Arealonga, Altar, Coto y Remior, mientras las parroquias y los bloques de apartamentos de los años 2000 reparten la vida en lugar de concentrarla en una villa. As Catedrais quedan a pocos minutos y atraen una parte importante del movimiento de verano. En invierno, muchas ventanas vuelven a quedar oscuras.",
      "Esa diferencia de estación importa más que cualquier imagen de postal. Aquí se puede vivir muy cerca de la arena y, al mismo tiempo, depender del coche para resolver una compra o llegar a una villa con más actividad. Barreiros ofrece costa delante; Foz y Ribadeo funcionan como apoyos habituales para una parte de la rutina."
    ],
    tiempo: [
      "El cambio respecto a Mallorca se nota menos en una cifra aislada que en la forma de usar la casa y la calle: verano fresco, humedad, niebla y más días en los que apetece caminar la costa con chaqueta. En invierno conviene haber visto la vivienda con tiempo gris, porque orientación, aislamiento y ventilación pesan mucho más que en una visita de agosto.",
      "El Cantábrico también marca el ritmo. Hay días de playa y otros en los que Arealonga o los arcos próximos de As Catedrais son, sobre todo, lugares para caminar y mirar el mar. La marea y el estado del agua forman parte de la rutina costera."
    ],
    vivir: [
      "Un martes de noviembre explica Barreiros mejor que un domingo de agosto. Fuera de temporada baja la actividad, algunos bloques quedan con pocas viviendas ocupadas y la dispersión se hace evidente. La vida diaria depende mucho de dónde esté exactamente la casa: estar junto a una playa no significa estar junto a farmacia, compra o servicios.",
      "Sin coche, la autonomía es limitada en buena parte del municipio. Foz y Ribadeo sirven de apoyo para compras, gestiones y una vida urbana algo más completa; para atención hospitalaria también hay que salir del municipio. El tren de ancho métrico existe, pero su mera presencia no sustituye esa lógica cotidiana.",
      "En verano cambia la escena. Las playas y As Catedrais concentran visitantes, tráfico y búsqueda de aparcamiento, mientras las zonas más interiores recuperan antes la calma. Antes de elegir vivienda aquí merece más la pena comparar una semana de agosto con un día corriente de enero que discutir si una parroquia parece tranquila en una visita breve.",
      "Hay una pregunta sencilla que ayuda a leer una casa en Barreiros: cuántas luces quedan encendidas alrededor en enero. A ella se suman otras más prácticas —fibra real, acceso fácil, humedad, aislamiento y distancia efectiva a la compra— que dicen mucho sobre cómo funcionará la vivienda durante todo el año."
    ],
    historia: [
      "El paisaje inmediato está marcado por As Catedrais y por una costa de playas largas, pero el municipio no se organiza alrededor de un gran casco histórico. Reinante y San Miguel ayudan a entender esa geografía de parroquias y orilla: Barreiros es una suma de núcleos y costa más que una plaza central de la que salga todo.",
      "También pesa el crecimiento residencial de las últimas décadas. Los bloques vinculados al veraneo explican parte del contraste entre la actividad de agosto y el silencio de invierno; no es solo una cuestión de clima, sino de cómo se ocupa el territorio."
    ],
    fuera: [
      "Arealonga, Altar, Coto y Remior forman la imagen de playa larga del municipio. Lóngara y As Pasadas amplían ese mapa de salidas costeras. Según dónde esté la vivienda, alguno de esos paseos puede empezar casi desde casa o exigir coger el coche: en un municipio tan extendido, la dirección concreta importa.",
      "As Catedrais son la salida más conocida y también el mejor recordatorio de la estacionalidad: arcos, marea y mucha más afluencia en los días fuertes. Para la vida ordinaria, el mapa se completa hacia Foz y Ribadeo, que aportan la escala de villa que Barreiros no concentra en un único núcleo."
    ],
    casa: [
      "Aquí importa tanto la microzona como la vivienda. Un apartamento próximo al mar puede ofrecer una relación muy directa con la playa y quedar, a la vez, lejos de servicios cotidianos; una casa en parroquia cambia esa relación por espacio y otra dependencia del coche.",
      "En edificios de uso estacional conviene mirar comunidad, ocupación de invierno, accesibilidad y mantenimiento. En cualquier tipología pesan la humedad, la orientación, el aislamiento y la fibra disponible. La referencia de precio y las estimaciones de tamaño quedan en la capa factual y en la tabla; el relato útil es comprobar cómo funciona esa casa concreta en enero y en agosto."
    ],
    encaja: {
      si: [
        "Encaja si lo que se busca es vivir con mucha costa alrededor y se acepta una rutina repartida: playa cerca de casa en algunas microzonas, coche para buena parte de los servicios y Foz o Ribadeo como villas de apoyo. El atractivo está en disponer de arenales y paseos costeros sin necesitar que el municipio funcione como un casco urbano compacto.",
        "También encaja si el contraste estacional no resulta un problema: más movimiento junto a las playas en verano y bastante menos vecindad visible en algunos edificios durante el invierno. Quien valore esa calma debe comprobar antes que no se convierta, para su forma de vivir, en aislamiento."
      ],
      no: [
        "Encaja peor si se quiere salir de casa y resolver casi toda la semana andando, si se necesita mucha actividad alrededor durante todo el año o si el coche debe ser excepcional. La costa extensa no elimina la dispersión.",
        "Tampoco si una vivienda de playa solo convence con el municipio lleno. Barreiros cambia mucho entre agosto y enero, y esa diferencia forma parte de la decisión tanto como la vista al mar."
      ],
      veredicto:
        "Barreiros es una forma dispersa y estacional de vivir A Mariña: mucha orilla, playas y As Catedrais muy presentes, pero sin una villa densa que concentre la rutina. La vivienda adecuada depende menos de una etiqueta municipal que de comprobar acceso, servicios reales, vecinos de invierno, humedad y cuánto coche exige la microzona."
    },
    fotoIdentidad: {
      src: "/fotos/a-marina/barreiros-identidad.jpg",
      pie: "Barreiros: casas junto al mar, con la sierra detrás",
    },
    fotosAbrir: [
      { src: "/fotos/a-marina/barreiros-catedrais.jpg", pie: "As Catedrais a minutos de Barreiros" },
      { src: "/fotos/a-marina/barreiros-playa.jpg", pie: "Playa larga en Barreiros" },
    ],
    fotosHistoria: [
      { src: "/fotos/a-marina/barreiros-villa.jpg", pie: "Núcleo y escala de Barreiros" },
      { src: "/fotos/a-marina/barreiros-san-miguel.jpg", pie: "San Miguel y orilla en Barreiros" },
    ],
    fotosFuera: [
      { src: "/fotos/a-marina/barreiros-reinante.jpg", pie: "Reinante, playa y costa de Barreiros" },
      { src: "/fotos/a-marina/barreiros-costa.jpg", pie: "Casa de indianos en la costa de Barreiros" },
    ],
    creditoFotos: credito,
  }
```

### viveiro

> CITA LITERAL — `web/src/lib/relatos-a-marina.ts` clave `viveiro` (post CURSOR_21/23/25).

```ts
viveiro: {
    escala: "Villa de ría con casco",
    abrir: [
      "Viveiro se entiende mejor como tres piezas que conviven: el casco amurallado, el puerto de Celeiro y Covas al otro lado de la ría. La Porta de Carlos V da entrada a una villa histórica que sigue teniendo comercio y vida propia; Celeiro recuerda que aquí el mar es también trabajo; Covas añade una playa larga y un paseo que en verano adquieren mucho más protagonismo.",
      "Esa combinación evita que el municipio dependa de una sola temporada. Un martes de enero el casco sigue funcionando como villa, mientras julio y agosto cargan más actividad sobre Covas. La diferencia importante no es elegir entre pueblo turístico o pueblo de trabajo, sino decidir en cuál de esas microzonas encaja mejor la rutina diaria."
    ],
    tiempo: [
      "Frente a Mallorca, Viveiro cambia la manera de usar la calle y la vivienda: más humedad y niebla, verano fresco y muchos más días en los que una terraza deja de ser el centro de la casa. Conviene ver un piso con tiempo gris y comprobar luz, ventilación y aislamiento, especialmente en edificios de piedra o cerca de la ría.",
      "El agua también se vive de otra manera. Covas ofrece la orilla más cotidiana y abrigada; Area y Sacido permiten cambiar de playa, mientras la costa exterior abre otro registro. Aquí el mar puede formar parte de una tarde normal sin que todos los días sean días de baño."
    ],
    vivir: [
      "En el casco se puede resolver buena parte de la semana andando: compra, atención primaria, comercio y paseo caben en una escala de villa. Covas combina esa vida próxima con playa y paseo; Celeiro organiza otra rutina alrededor del puerto. Para el hospital y para ampliar la costa hace falta salir de ese radio cotidiano.",
      "La Semana Santa cambia de verdad el funcionamiento del casco durante varios días. Las procesiones, la afluencia y las dificultades de aparcamiento no son una anécdota para quien viva allí, sino una parte concreta del calendario. En verano el cambio se desplaza sobre todo hacia Covas, con más ocupación, coches y terrazas.",
      "El tren de ancho métrico forma parte de las comunicaciones del municipio, aunque su existencia no debe confundirse con resolver por sí solo los desplazamientos cotidianos. Para vuelos y atención hospitalaria la logística sigue dependiendo en buena medida del coche y de salir de Viveiro.",
      "Una mañana libre no exige convertir el día en excursión. Se puede recorrer el casco, cruzar hacia la ría y Covas o cambiar el paseo por el Souto da Retorta y el Monte San Roque, donde el municipio pasa de piedra y puerto a monte cercano. Esa variedad es una de las formas más claras de entender su escala."
    ],
    historia: [
      "La Porta de Carlos V y el recinto amurallado explican la condición de villa histórica. No son solo un fondo monumental: concentran calles y vida urbana en una parte del municipio muy distinta de la fachada residencial de Covas.",
      "Celeiro aporta la otra historia visible, la del puerto y la lonja, con la merluza del pincho ligada a un oficio que continúa. La Semana Santa añade una capa cultural que, a diferencia de un monumento, altera durante unos días el uso normal de calles y aparcamiento."
    ],
    fuera: [
      "Covas es la playa que mejor se integra en la vida ordinaria si se reside en esa parte del municipio: arena, paseo y ría quedan unidos. Area y Sacido amplían las opciones cuando apetece otra orilla, pero no conviene trasladar esa facilidad automáticamente a cualquier vivienda del casco o de Celeiro.",
      "El Souto da Retorta, conocido por sus grandes eucaliptos, y el Monte San Roque, como mirador, ofrecen salidas cercanas cuando el plan no es playa. Hacia el este, el resto de A Mariña amplía costa y servicios; para atención hospitalaria, Burela forma parte de ese mapa práctico."
    ],
    casa: [
      "En el casco pesan el estado de la reforma, la humedad, las escaleras o el ascensor y cómo afectan la Semana Santa y el aparcamiento a la calle concreta. En Covas cambian las preguntas: ocupación de verano, salitre, orientación y distancia real a los servicios que se usarán durante el invierno.",
      "Casco, Covas y Celeiro no son versiones intercambiables de Viveiro. Una vivienda puede ganar playa y paseo o ganar proximidad al centro y al comercio; por eso la microzona importa más que una impresión general del municipio. Los precios y estimaciones quedan en la capa factual y en la tabla."
    ],
    encaja: {
      si: [
        "Encaja si se busca una villa con vida anual y varios registros a poca distancia: casco histórico para la rutina urbana, Celeiro como puerto de trabajo y Covas para incorporar ría, playa y paseo al día a día. La autonomía cotidiana es fuerte sin necesitar que Viveiro funcione como una ciudad grande.",
        "También encaja si se acepta que verano y Semana Santa cambien temporalmente algunas calles sin vaciar el resto del año. El atractivo está precisamente en combinar actividad local, mar y patrimonio sin que todo dependa del veraneo."
      ],
      no: [
        "Encaja peor si se necesita hospital en el propio municipio, aeropuerto próximo o una vivienda que funcione igual en agosto que en noviembre. Esos desplazamientos y la diferencia estacional forman parte de la vida real, aunque el núcleo resuelva bien muchas necesidades ordinarias.",
        "Tampoco si la humedad, la niebla o varios días de calles muy ocupadas durante la Semana Santa pesan más que la posibilidad de vivir en un casco histórico con ría y playa cercanas."
      ],
      veredicto:
        "Viveiro combina una villa histórica que funciona todo el año con puerto de oficio y una Covas más marítima y estacional. Su equilibrio depende mucho de escoger bien entre casco, Celeiro y Covas: se gana autonomía cotidiana y variedad de paseos, mientras hospital, aeropuerto y algunas salidas quedan fuera del radio inmediato."
    },
    fotosAbrir: [
      { src: "/fotos/a-marina/viveiro-casco.jpg", pie: "Casco de Viveiro hacia la ría" },
      { src: "/fotos/a-marina/viveiro-covas.jpg", pie: "Covas, playa larga en ría abrigada" },
    ],
    fotosHistoria: [
      { src: "/fotos/a-marina/viveiro-porta.jpg", pie: "Porta de Carlos V, arco del casco amurallado" },
    ],
    fotosFuera: [
      { src: "/fotos/a-marina/viveiro-celeiro.jpg", pie: "Puerto de Celeiro, lonja y merluza del pincho" },
      { src: "/fotos/a-marina/viveiro-ria.jpg", pie: "Ría de Viveiro desde Covas" },
    ],
    creditoFotos: credito,
  }
```

### burela

> CITA LITERAL — `web/src/lib/relatos-a-marina.ts` clave `burela` (post CURSOR_21/23/25).

```ts
burela: {
    escala: "Villa portuaria pesquera",
    abrir: [
      "Burela se explica mejor por lo que hace que por lo que enseña. El puerto y la lonja sitúan el trabajo del mar en primer plano, mientras el Hospital da Mariña y una red de comercio, mercado, biblioteca, auditorio, deporte y transporte dan al núcleo una funcionalidad poco habitual para su tamaño. No necesita un casco monumental para tener vida propia.",
      "Un martes de noviembre esa diferencia se nota más que en agosto: hay recados, servicios, actividad sanitaria y puerto sin esperar a la temporada de playa. A Marosa y Ril añaden mar a esa rutina, pero la fortaleza de Burela no es funcionar como un destino de playa, sino permitir que gran parte del día cotidiano ocurra dentro de la propia villa."
    ],
    tiempo: [
      "Frente a Mallorca, la casa y la calle se usan con otro ritmo: verano fresco, humedad, niebla y más jornadas grises. Cerca del mar conviene mirar orientación, aislamiento, ventilación y salitre; cerca del puerto, además, hay que entender que la actividad no desaparece cuando termina agosto.",
      "A Marosa y Ril permiten incorporar el Cantábrico a un paseo normal, aunque el baño depende más del día y del estado del mar que en una costa mediterránea. El frente marítimo sirve tanto para caminar como para recordar que aquí la orilla es también un lugar de trabajo."
    ],
    vivir: [
      "La vida diaria puede concentrarse mucho en el núcleo. Centro de salud, hospital, comercio, mercado, biblioteca, auditorio, estación y deporte forman un radio de servicios que reduce la necesidad de coger el coche para cada recado. Esa autonomía es uno de los rasgos más claros de Burela.",
      "El hospital cambia especialmente la geografía cotidiana: la atención hospitalaria está en el propio municipio, en vez de convertirse de entrada en un desplazamiento a otra villa. No hace falta repetir sus minutos en cada apartado para entender la consecuencia práctica: sanidad y vida urbana comparten el mismo mapa.",
      "El puerto introduce el peaje contrario. La lonja y la actividad pesquera son parte estructural de Burela, no decoración marítima; una vivienda próxima debe valorarse también un día de trabajo, con su movimiento y su ruido. La presencia histórica de una comunidad caboverdiana ligada a la pesca forma parte de esa historia contemporánea, sin necesidad de convertirla en una etiqueta sobre toda la villa.",
      "En verano A Marosa y Ril reciben más gente y la orilla gana actividad, pero Burela no se apaga al terminar la temporada. La cultura, el deporte, los servicios y el trabajo mantienen una base anual fuerte. Para el aeropuerto y para ampliar las salidas por A Mariña sí hace falta asumir desplazamientos fuera del núcleo."
    ],
    historia: [
      "El puerto, la lonja y el bonito del norte explican mejor Burela que una secuencia de monumentos. La villa ha construido buena parte de su identidad alrededor del oficio pesquero, y ese trabajo continúa visible en el presente.",
      "El Hospital da Mariña añade otra función comarcal muy concreta: Burela no solo recibe a quien viene por el puerto o por sus servicios, sino también por la sanidad. Cabo Burela completa el mapa costero, mientras la historia local reciente queda ligada sobre todo al mar, al trabajo y a los servicios."
    ],
    fuera: [
      "A Marosa y Ril son las referencias de playa, pero el paseo cotidiano puede seguir también el puerto y el frente marítimo. La experiencia cambia según el tramo: arena y baño en unos momentos, dársena y actividad pesquera en otros.",
      "Para variar de paisaje, Foz amplía ría y paseo; Cervo y San Cibrao cambian la relación entre industria, patrimonio y costa; Viveiro aporta casco histórico y Covas. Son salidas próximas dentro de A Mariña, mientras Burela conserva como ventaja propia poder volver a una villa muy funcional."
    ],
    casa: [
      "En Burela la vivienda debe leerse con el mapa de actividad delante. Cerca del puerto conviene escuchar una jornada de lonja antes de comprar; junto a la orilla pesan salitre y movimiento de verano. En otras calles, la ventaja puede ser llegar andando a una parte muy amplia de los servicios.",
      "En pisos y viviendas de una villa funcional importan accesibilidad, ascensor o escaleras, orientación, aislamiento y estado de la reforma. La capa factual y la tabla concentran precios y estimaciones; el relato útil es comprobar qué se gana en autonomía y qué ruido o exposición acepta la microzona concreta."
    ],
    encaja: {
      si: [
        "Encaja si se valora poder resolver mucha vida ordinaria dentro de una villa pequeña: sanidad, comercio, mercado, biblioteca, auditorio, deporte y transporte se suman a un puerto que mantiene actividad durante todo el año. A Marosa y Ril permiten además que el mar no quede reservado para una excursión.",
        "También encaja si se prefiere funcionalidad a imagen monumental. Burela no necesita parecer Viveiro o Ribadeo para tener identidad: su carácter está en el puerto de trabajo, la lonja y una escala urbana con servicios comarcales."
      ],
      no: [
        "Encaja peor si se busca ante todo un casco histórico de piedra, una fachada urbana especialmente monumental o una costa concebida como paisaje turístico. El puerto de trabajo y una imagen más funcional forman parte del lugar, no son algo que desaparezca al elegir otra calle.",
        "Tampoco si molesta la actividad pesquera cerca de casa o si el aeropuerto debe quedar muy próximo. La gran autonomía cotidiana reduce muchos desplazamientos, pero no elimina los viajes para volar ni convierte toda la costa en una playa-resort."
      ],
      veredicto:
        "Burela concentra mucha vida práctica en poca escala: hospital, servicios, puerto y frente marítimo funcionan durante todo el año. A cambio ofrece menos imagen monumental y exige escoger vivienda entendiendo el ruido del puerto, el salitre y la calle concreta. Su diferencia está en la funcionalidad cotidiana, no en competir con las postales históricas de otras villas."
    },
    fotosAbrir: [
      { src: "/fotos/a-marina/burela-puerto.jpg", pie: "Puerto de Burela, bonito del norte" },
      { src: "/fotos/a-marina/burela-villa.jpg", pie: "Burela: villa de servicios y pesca" },
    ],
    fotosHistoria: [
      { src: "/fotos/a-marina/burela-lonja.jpg", pie: "Lonja y ambiente portuario de Burela" },
      { src: "/fotos/a-marina/burela-paseo.jpg", pie: "Paseo marítimo de Burela" },
    ],
    fotosFuera: [
      { src: "/fotos/a-marina/burela-playa.jpg", pie: "A Marosa o Ril, playas de Burela" },
      { src: "/fotos/a-marina/burela-costa.jpg", pie: "Orilla urbana de Burela hacia el Cantábrico" },
    ],
    creditoFotos: credito,
  }
```

### ribadeo

> CITA LITERAL — `web/src/lib/relatos-a-marina.ts` clave `ribadeo` (post CURSOR_21/23/25).

```ts
ribadeo: {
    escala: "Villa de frontera y As Catedrais",
    abrir: [
      "Ribadeo funciona primero como villa y después como destino. El casco indiano, el puerto y la ría del Eo forman el escenario cotidiano; al otro lado está Castropol y, cruzando el puente dos Santos, Asturias deja de ser una excursión para convertirse en parte del mapa mental. As Catedrais pertenecen a otro radio: son una salida, no la playa que aparece al bajar andando desde el centro.",
      "Un martes de noviembre se puede resolver mucha vida dentro de la villa. Comercio, atención primaria, farmacias, biblioteca, piscina y gimnasio sostienen actividad durante todo el año. En verano aumenta la presión turística, sobre todo en los accesos a As Catedrais, pero Ribadeo no depende de esa temporada para funcionar."
    ],
    tiempo: [
      "Frente a Mallorca, Ribadeo sigue siendo cantábrico: verano fresco, humedad y muchos más días grises, aunque la niebla pesa algo menos que en el extremo occidental de A Mariña. En una vivienda del casco o próxima a la ría conviene comprobar luz, ventilación y aislamiento durante tiempo húmedo, no solo en agosto.",
      "La ría es el agua cotidiana de la villa. Puerto, miradores y paseo permiten vivirla sin coger el coche; para las playas atlánticas, incluida As Catedrais, hay que salir. Esa diferencia evita confundir tener mucha costa alrededor con tener una playa marítima urbana a la puerta."
    ],
    vivir: [
      "La autonomía cotidiana es fuerte. El centro concentra comercio y servicios suficientes para que el coche no organice cada recado, y una mañana libre puede alternar calles del casco, biblioteca o deporte con el paseo hacia la ría y el puerto. Esa vida anual es una diferencia importante frente a municipios más dispersos de A Mariña.",
      "La frontera se usa, no solo se contempla. La ría del Eo y el puente dos Santos conectan visual y prácticamente Galicia con Asturias; la A-8 refuerza esa posición. El tren de ancho métrico existe, aunque su utilidad concreta debe valorarse sin asumir que sustituye al coche para todos los desplazamientos.",
      "La sanidad hospitalaria obliga a salir de la villa. La capa práctica sitúa el Hospital da Mariña en Burela y conserva Jarrio como referencia histórica próxima, por lo que no conviene simplificar la asignación sanitaria por la mera cercanía asturiana. La consecuencia para la vida diaria es que la atención primaria está en Ribadeo y el hospital requiere desplazamiento.",
      "El aeropuerto de Asturias queda claramente mejor situado aquí que desde el oeste de A Mariña, aunque los vuelos directos a Palma son estacionales y la programación debe comprobarse. Es una ventaja logística real sin necesidad de repetir kilómetros y minutos en cada sección.",
      "As Catedrais cambian el verano. Los arcos y la marea atraen mucha más afluencia que un día ordinario en la ría; vivir en un acceso afectado por ese movimiento exige haber probado la zona durante temporada alta, no solo haber visitado la playa una vez."
    ],
    historia: [
      "El casco indiano explica una parte importante de la personalidad urbana. La Torre dos Moreno y las casas vinculadas a quienes regresaron de América hablan de una villa con historia comercial y de prestigio, no únicamente de un punto de paso hacia una playa famosa.",
      "Illa Pancha, el puerto y la ría del Eo completan esa identidad de frontera marítima. La Reserva de la Biosfera del Eo da contexto al paisaje compartido con Asturias; As Catedrais añaden el gran imán natural, pero no sustituyen la vida de la villa."
    ],
    fuera: [
      "Para el día a día, el paseo villa–ría–puerto y los miradores permiten salir de casa y caminar junto al agua. Illa Pancha amplía esa relación costera. Os Bloques añade otra referencia de orilla, mientras las playas atlánticas quedan fuera del radio peatonal normal del centro.",
      "As Catedrais son una salida deliberada: marea, arcos y mucha más presión de visitantes en fechas fuertes. Castropol ofrece al otro lado de la ría otra escala de villa; hacia el oeste, Barreiros y Foz amplían playas y paseo."
    ],
    casa: [
      "En el casco pesan accesibilidad, ascensor o escaleras, estado de la reforma, humedad y luz. Cerca de la ría cambian vistas y exposición; en las salidas hacia la costa atlántica conviene comprobar cuánto tráfico estacional afecta realmente a la calle.",
      "La vivienda debe elegirse pensando en la ventaja principal de Ribadeo —una villa bastante autónoma— sin pagar con una microzona que obligue a usar el coche para lo que se quería hacer andando. Precio y estimaciones quedan en la capa factual y en la tabla."
    ],
    encaja: {
      si: [
        "Encaja si se valora una villa con actividad anual, bastante autonomía a pie y una relación cotidiana con la ría, además de una conexión sencilla con Asturias. Casco, comercio, servicios y paseo pueden formar parte de la misma rutina.",
        "También encaja si As Catedrais se entienden como una salida extraordinaria y no como la definición completa del municipio. Ribadeo conserva vida propia cuando desaparece la afluencia de los arcos."
      ],
      no: [
        "Encaja peor si el hospital debe estar en el propio municipio o si se quiere una playa atlántica de baño integrada a pie en la villa. La ría es cotidiana; el hospital y las playas abiertas están fuera de ese radio.",
        "Tampoco si la presión turística de verano en los accesos a As Catedrais resulta incompatible con la vivienda elegida. La calle concreta importa mucho más que la fama general de la villa."
      ],
      veredicto:
        "Ribadeo combina una autonomía cotidiana fuerte con casco indiano, puerto y ría del Eo, y suma una conexión especialmente práctica con Asturias. Su peaje está en salir para hospital y playas atlánticas y en gestionar la presión estacional de As Catedrais; por eso conviene distinguir siempre la villa cotidiana del gran destino turístico cercano."
    },
    fotosAbrir: [
      { src: "/fotos/a-marina/ribadeo-catedrais.jpg", pie: "As Catedrais, a unos diez minutos de Ribadeo" },
      { src: "/fotos/a-marina/ribadeo-villa.jpg", pie: "Casco indiano de Ribadeo" },
    ],
    fotosHistoria: [
      { src: "/fotos/a-marina/ribadeo-ilha-pancha.jpg", pie: "Illa Pancha, faro en el islote" },
      { src: "/fotos/a-marina/ribadeo-puente.jpg", pie: "Puente sobre la ría del Eo" },
    ],
    fotosFuera: [
      { src: "/fotos/a-marina/ribadeo-puerto.jpg", pie: "Puerto de Ribadeo" },
      { src: "/fotos/a-marina/ribadeo-paseo.jpg", pie: "Paseo y orilla en Ribadeo" },
    ],
    creditoFotos: credito,
  }
```

---

## 7. Matriz final

| Lugar | Autonomía | Coche | Estacionalidad | Mar cotidiano | Paseo | Hospital | Aeropuerto | Precio/fiabilidad | P4 principal | Reality toll principal | Conflicto viejo principal | Invest. externa obligatoria v1 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Castropol | MEDIA-BAJA | Media-alta | Anual pequeña + verano orilla | Ría sí; playa DEPENDE MICROZONA | Ría/puerto según núcleo | Jarrio ~30′ | Asturias ~75′; Palma variable | 1295 (no n.d.); omitir ranking | Ría Eo + pueblo blanco + Figueras | Dependencia Ribadeo / servicios 3 | Precio histórico~1050; chips 3/10 | **NO** (5 vs 10′ Ribadeo = deseable, no bloquea) |
| Tapia | MEDIA-FUERTE | Baja-media villa | Anual + presión verano | SÍ (Anguileiro…) | Puerto/faro/costa (+ piscina capa) | Jarrio ~20′ | ~70′; Palma variable | **2200** alto; cautela; no 1350 | Faro + surf + casco | Verano/surf + precio alto | Servicios **4≠6**; precio 1350≠2200 | **NO** |
| Navia | FUERTE | Baja rutina | Villa comarcal anual | PARCIAL (ría; playa desplazamiento) | Ría/frente urbano | Jarrio ~10′ | ~55′; Palma variable | 1384; omitir ~1100 | Villa útil + Puerto de Vega | Playa menos integrada que Tapia | Servicios **5≠6**; precio ~1100 | **NO** |
| Luarca/Valdés | FUERTE EN ZONA BAJA | Media según cota | Anual + capa turística | SÍ/PARCIAL según cota | Puerto llano vs Atalaya subida | Jarrio ~20′ | ~40′; Palma variable | 1256; omitir ~1050/1300 | Villa blanca + topografía | Pendientes / no generalizar Valdés | Precio histórico; infrauso pendiente | **NO** |

### Investigación externa (clasificación)

| Tema | Clase | Nota |
|---|---|---|
| Unificar 5 vs 10 min Castropol→Ribadeo | DESEABLE PARA ENRIQUECER | No bloquea v1: «villa enfrente / pocos minutos» |
| Texto completo `casaQueBuscar` / `mercadoReventa` (truncados JSON) | DESEABLE | Relato puede ser cualitativo sin el string completo |
| Nombre día mercado / horarios / cafés | NO NECESARIA | |
| Corregir metodología despejados/cubiertos | NO NECESARIA en este bloque | Deuda marcada; no inventar |
| **Obligatoria para v1** | — | **Ninguna** de las cuatro |

---

## 8. Contrato para la reescritura

- ChatGPT redactará los **cuatro** objetos finales (`castropol`, `tapia-de-casariego`, `navia`, `luarca-valdes`) en un solo paquete.
- **Capa 2026 prevalece** sobre prosa vieja.
- Precio, servicios X/10, A/B, textos hospital/aero/Palma detallados se quedan en capa factual / TablaPrecios / FichaCapa2026.
- Cursor copiará **literalmente** (solo indentación/escapes/coma).
- Conflicto factual **nuevo** texto↔v15 ⇒ **parar**, no corregir por iniciativa, no commit.
- Edición quirúrgica; preservar EOL del `.ts`.
- **No** personalizar para jubilados ni presupuesto personal; **no** nombrar tope 260.000 €.
- **No** tocar A Mariña ni otros relatos/JSON/UI.
- Archivo de implementación futura: solo `web/src/lib/relatos-asturias-occidente.ts` (esas cuatro claves).

---

## Apéndice — Inventario de archivos fuente

| Rol | Ruta |
|---|---|
| Relatos Asturias Occidente | `web/src/lib/relatos-asturias-occidente.ts` |
| Capa JSON | `web/src/data/municipios-asturias-occidente.json` |
| Auditoría editorial | `docs/AUDITORIA_EDITORIAL_RELATOS_2026.md` |
| P0 precios | `docs/P0_RESTANTES_POST_PRECIOS_2026.md` |
| Estudio (histórico) | `docs/estudio_zonas.md` §10 |
| Plan editorial Asturias | **NO EXISTE** |
| Referencia A Mariña | `web/src/lib/relatos-a-marina.ts` (barreiros, viveiro, burela, ribadeo) |
