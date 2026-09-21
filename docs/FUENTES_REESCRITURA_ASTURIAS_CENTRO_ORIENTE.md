# Fuentes para reescribir Asturias Centro + Oriente

**Bloque:** CURSOR_28  
**Alcance:** extracción + auditoría documental. **No** reescritura. **No** corrección de producto. **No** internet.  
**Protección (solo lectura):** A Mariña (`relatos-a-marina.ts` + JSON) y Asturias Occidental (`relatos-asturias-occidente.ts` + JSON) — **no modificar**.  
**NO PLAN_EDITORIAL** para Centro/Oriente (no hay equivalente CURSOR_19).

**Lugares (12):** Cudillero · Muros de Nalón · Soto del Barco · Salinas / Castrillón · Luanco / Gozón · Candás / Carreño · Gijón · Villaviciosa · Colunga · Ribadesella · Llanes · Ribadedeva  

**Archivos relatos:** `web/src/lib/relatos-asturias-centro.ts`, `web/src/lib/relatos-asturias-oriente.ts`  
**Archivos capa:** `web/src/data/municipios-asturias-centro.json`, `web/src/data/municipios-asturias-oriente.json`

---

## 1. Reglas y jerarquía

1. **Capa estructurada 2026** (JSON Centro/Oriente, master v15) = autoridad para hechos actuales.
2. **Auditorías 2026** (`AUDITORIA_EDITORIAL_RELATOS_2026.md` filas 51–62, `P0_RESTANTES_POST_PRECIOS_2026.md`) = autoridad sobre problemas detectados.
3. **Relato actual** = P4, escenas, topónimos; **no** autoridad si contradice la capa.
4. **estudio_zonas.md** §11–12 y precios históricos = trazabilidad/contexto; **no** sustituyen 2026.
5. **No internet.** Ausencias se documentan; no se rellenan por intuición.
6. **No** convertir `null` / textos truncados `…` en cifras históricas (especialmente Muros `precioM2` null).
7. Omisiones de €/m², A/B y notas X/10 que viven en FichaCapa2026/TablaPrecios **no** son conflictos si la prosa no las repite.
8. **No existe** plan editorial tipo CURSOR_19 para Asturias Centro ni Oriente: este paquete construye fichas de auditoría solo con material ya en repo. **NO PLAN_EDITORIAL.**

Estados: `ALINEADO` · `OBSOLETO` · `DUPLICA_CAPA` · `P4_PRESERVAR` · `SOPORTADO_PERO_INFRAUSADO` · `NO_SOPORTADO_NO_INVENTAR` · `REQUIERE_VERIFICACION_EXTERNA`

### Extractos de auditoría global (CITA)

Filas n=51–62:

```
| 51 | Cudillero | Asturias Centro | precio relato ~1400 vs ficha 1636 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; repite nota servicios X/10 (+3) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 52 | Muros de Nalón | Asturias Centro | precio n.d. en ficha pero relato cita €/m² [1100, 1100] | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | lenguaje vago/revisar: tranquilo | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 53 | Soto del Barco | Asturias Centro | — | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite €/m² ya en TablaPrecios/capa; repite horas de sol (+5) | lenguaje vago/revisar: tranquilo | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 54 | Salinas (Castrillón) | Asturias Centro | precio relato ~1700 vs ficha 3226 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 55 | Luanco (Gozón) | Asturias Centro | precio relato ~1800 vs ficha 2379 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; repite nota servicios X/10 (+3) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 56 | Candás (Carreño) | Asturias Centro | precio relato ~1650 vs ficha 1840 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; repite nota servicios X/10 (+3) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 57 | Gijón | Asturias Centro | precio relato ~2300 vs ficha 2696 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; repite nota servicios X/10 (+3) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 58 | Villaviciosa | Asturias Oriente | precio relato ~1500 vs ficha 1864 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 59 | Colunga | Asturias Oriente | — | precio relato ~1700 vs ficha 1774 (desvío); usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
| 60 | Ribadesella | Asturias Oriente | precio relato ~2200 vs ficha 2632 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 61 | Llanes | Asturias Oriente | precio relato ~2100 vs ficha 2391 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| 62 | Ribadedeva | Asturias Oriente | — | precio relato ~1600 vs ficha 1700 (desvío); vuelo/Palma puede sonar permanente; capa 2026 matiza (+1) | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
```

Resumen precios conflicto (si aparecen):

```
| 52 | Muros de Nalón | Asturias Centro | precio n.d. en ficha pero relato cita €/m² [1100, 1100] | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | lenguaje vago/revisar: tranquilo | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
| Muros de Nalón (`muros-de-nalon`) | precio n.d. en ficha pero relato cita €/m² [1100, 1100] | n.d. |
| Cudillero | precio relato ~1400 vs ficha 1636 |
| Salinas (Castrillón) | precio relato ~1700 vs ficha 3226 |
| Luanco (Gozón) | precio relato ~1800 vs ficha 2379 |
| Candás (Carreño) | precio relato ~1650 vs ficha 1840 |
| Gijón | precio relato ~2300 vs ficha 2696 |
| Villaviciosa | precio relato ~1500 vs ficha 1864 |
| Ribadesella | precio relato ~2200 vs ficha 2632 |
| Llanes | precio relato ~2100 vs ficha 2391 |
| Muros de Nalón | `web/src/lib/relatos-asturias-centro.ts` |
```

P0 restantes (51–62):

```
| 51 | Cudillero | Asturias Centro | no | — |
| 52 | Muros de Nalón | Asturias Centro | no | — |
| 53 | Soto del Barco | Asturias Centro | no | — |
| 54 | Salinas (Castrillón) | Asturias Centro | no | — |
| 55 | Luanco (Gozón) | Asturias Centro | no | — |
| 56 | Candás (Carreño) | Asturias Centro | no | — |
| 57 | Gijón | Asturias Centro | no | — |
| 58 | Villaviciosa | Asturias Oriente | no | — |
| 59 | Colunga | Asturias Oriente | no | — |
| 60 | Ribadesella | Asturias Oriente | no | — |
| 61 | Llanes | Asturias Oriente | no | — |
| 62 | Ribadedeva | Asturias Oriente | no | — |
```

### Estudio de zonas §11–12 (histórico — NO autoridad 2026)

<details><summary>CITA estudio_zonas.md § Asturias Centro</summary>

## 11. Asturias Centro (Asturias) · Cudillero, Muros de Nalón, Soto del Barco, Salinas (Castrillón), Luanco (Gozón), Candás (Carreño), Gijón

### La zona

La costa del área metropolitana asturiana: Gijón (270.000 hab.), Avilés (77.000) y Oviedo (220.000, con el HUCA) a 10-30 minutos de cualquier punto, y el aeropuerto de Asturias en Santiago del Monte (Castrillón), a 10 min de Salinas. Cudillero es el pueblo colgado de postal; Muros y Soto del Barco, el estuario tranquilo del Nalón; Salinas, la villa-playa residencial de chalés y casas bajas junto a Avilés; Luanco y Candás, villas marineras del Cabo Peñas; Gijón, la ciudad de mar de Asturias.

Es la zona con mejor logística del Cantábrico occidental (aeropuerto, tres ciudades, cuatro hospitales) y con dos matices: cielo cantábrico y una industria pesada (siderurgia de Avilés y Gijón, central y cementera de Aboño) que se nota en el aire según el viento.

### Clima mes a mes

| | Oct-Mar | Abr-May | Jun-Sep | Año |
|---|---|---|---|---|
| Días de lluvia al mes | 14-16 | 12-13 | 8-10 | 145-150 |
| Máxima / mínima típica | 13 / 6 °C (ene.) | 16 / 9 °C | 23 / 16 °C (jul.) | |
| Horas de sol al mes | 70-100 | 160-190 | 200-230 | 1.780-1.850 |

Sol 1.780-1.850 h, 42-45 días despejados, 162-165 cubiertos. Lluvia 1.000-1.150 mm en 145-150 días, con 8-10 días al mes en verano. Verano 19-19,5 °C de media, máximas de 23 °C, 1-3 días > 30 °C (con viento sur pueden llegar puntas de 33-35 °C un par de días al año). Niebla media en Cudillero, Muros, Soto; baja en el resto. Viento medio en la costa de Peñas. Comparado con Mancor: 950-1.000 h de sol menos.

### Mar y baño

Aguilar y Concha de Artedo (Cudillero), Playa del Silencio (Castañeras, 15 min), Los Quebrantos (San Juan de la Arena, Soto), Salinas-El Espartal (3 km con San Juan de Nieva; dunas), Bahínas, Arnao y Santa María del Mar (Castrillón), Xagó (Gozón; dunas, surf), La Ribera y Aramar (Luanco), Palmera y Carranques (Candás), Xivares, San Lorenzo (Gijón; 1,5 km urbana), Poniente. Agua 19-21 °C en agosto, la más templada del Cantábrico en la tabla.

### Paseos y montaña

Cabo Vidio (Cudillero; faro, senda); Ruta de los Miradores de Muros de Nalón (7 miradores sobre la desembocadura); Quinta de Selgas (El Pito); paseo de Salinas y Museo de Anclas (Peñona); Cabo Peñas (Gozón; faro, acantilados, senda); Senda del Cervigón y Cerro de Santa Catalina (Gijón); Jardín Botánico Atlántico; Parque de Isabel la Católica. Montaña: la sierra del Aramo y el Sueve a 45-60 min; Picos a 1 h 30.

### Servicios y ciudad de referencia

Gijón 10/10. Salinas 7/10 (villa con todo, Avilés a 10 con casco histórico y Centro Niemeyer). Luanco 5/10, Candás 6/10 (villas completas en lo básico; Gijón a 20-25). Cudillero 4/10 (turístico, cuestas). Muros 3/10 y Soto del Barco 4/10 (lo básico; Avilés a 15). Ciudad de referencia: Avilés a 10-15 desde Salinas, Soto y Muros; Gijón a 20-25 desde Luanco y Candás; Oviedo a 30-45 desde todos.

### Sanidad

San Agustín (Avilés, público): 10 min desde Salinas, 20 desde Luanco, Muros y Soto, 25 desde Cudillero. Cabueñes (Gijón, público) y Hospital de Jove (Gijón): 5 desde Gijón, 10 desde Candás, 15 desde Luanco. HUCA (Oviedo, de referencia de Asturias, uno de los mejores de España) a 30-45. Privados: Centro Médico de Asturias (Oviedo) a 30-45, Sanatorio Covadonga (Gijón), Jove. La mejor sanidad del Cantábrico occidental.

### Aeropuertos y Palma

Asturias (Palma en verano) a 10 min desde Salinas, Muros y Soto, 15 desde Cudillero, 20-25 desde Luanco y Candás, 30 desde Gijón. Santander (Palma casi todo el año) a 2 h 15.

### Precios y qué compras con 260.000 €

Muros 1.100 €/m², Soto 1.200, Cudillero 1.400, Candás 1.650, Salinas 1.700, Luanco 1.800, Gijón 2.300. 3 habitaciones franja A: Muros 129.000, Salinas 199.000, Luanco 211.000, Gijón 269.000 (fuera en primera línea; entra a 5-10 min). Obra nueva solo en Gijón; poca en Salinas, Luanco y Candás; ninguna en Cudillero, Muros y Soto. Fibra en todos menos Muros y Soto (parcial).

### Seguridad y ambiente

Castrillón 33/1.000, Avilés 30, Gijón 39, Oviedo 35 (toda el área es más segura que Inca). Población extranjera 5-7 %. Ambiente: Salinas residencial de clase media avilesina y ovetense; Luanco y Candás villas marineras con veraneo de Oviedo; Gijón ciudad abierta y de paseo; Cudillero turístico de día. Aire: la siderurgia de Avilés (a 3 km de Salinas, a favor del viento del sur) y Aboño (junto a Candás y Xivares) son un tema real en Castrillón, Carreño y el oeste de Gijón.

### Parecido con Mancor / Mallorca

2/5 en general; 3/5 en Salinas (villa de casas bajas junto a la playa con paseo y ambiente de urbanización, tipo Playa de Palma antigua). Sin montaña cerca ni sol.

### Lo que no tendrás

- Sol: 1.800 h, 165 días cubiertos.
- Aire limpio garantizado cerca de Avilés y Aboño.
- Obra nueva fuera de Gijón.
- Vuelo a Palma todo el año.
- Calma en Cudillero en verano.
- Montaña a menos de 45 min.

### Municipio a municipio

**Cudillero (nº 51).** 5.000 habitantes en el concejo; el pueblo es un anfiteatro de casas colgadas sobre el puerto, precioso y lleno de visitantes de día, con cuestas que a los 70 años pesan. Playas: Aguilar y Concha de Artedo a 5 min, el Silencio a 15. Cabo Vidio. Servicios 4/10. Hospital 25. Aeropuerto 15. Precio 1.400: 3 habitaciones 164.000. Sin obra nueva. Para quién: para visitar; para vivir, solo en El Pito (llano, arriba) y con coche.

**Muros de Nalón (nº 52).** 1.800 habitantes en la orilla oeste de la desembocadura del Nalón: Ruta de los Miradores, playa de Aguilar a 5 min, muy barato (1.100). Servicios 3/10; fibra parcial; coche 8/10. Hospital 20. Aeropuerto 10. Para quién: retiro muy tranquilo a 10 min del aeropuerto por poco dinero.

**Soto del Barco (nº 53).** 4.000 habitantes; San Juan de la Arena (pueblo marinero, Los Quebrantos, angulas), castillo de San Martín, estuario del Nalón. Servicios 4/10; fibra parcial. Hospital 20. Aeropuerto 10. Precio 1.200: 3 habitaciones 140.000. Para quién: quien quiera estuario tranquilo, playa larga y Avilés a 15.

**Salinas (Castrillón) (nº 54).** 5.000 habitantes en la villa (23.000 en el concejo); playa de 3 km con dunas, paseo, Museo de Anclas, casas bajas y chalés de los años 60-2000, ambiente residencial; Avilés a 10 min (casco histórico, Niemeyer, comercio); Piedras Blancas (capital) a 5. Servicios 7/10. Hospital San Agustín 10, Jove 30. Aeropuerto 10. Precio 1.700: 3 habitaciones franja A 199.000. Poca obra nueva; fibra sí. Facilidad de venta 8/10. Seguridad 33. Contra: la siderurgia a 3 km. Para quién: la opción para tu perfil en Asturias: villa-urbanización con playa y la mejor logística de la región.

**Luanco (Gozón) (nº 55).** 5.000 habitantes; villa marinera con casco de piedra, Museo Marítimo, playas urbanas (La Ribera, Aramar) y Xagó a 10; Cabo Peñas a 10. Servicios 5/10. Hospital Jove 15, Avilés 20. Aeropuerto 20. Precio 1.800: 3 habitaciones 211.000. Poca obra nueva. Para quién: quien quiera villa marinera cuidada entre Avilés y Gijón, con el Cabo Peñas al lado.

**Candás (Carreño) (nº 56).** 7.000 habitantes; puerto, faro, playas (Palmera, Carranques), cercanías a Gijón, Museo Antón. Contra: Aboño (central térmica y cementera) al lado. Servicios 6/10. Hospital Jove 10. Aeropuerto 25. Precio 1.650: 3 habitaciones 193.000. Para quién: quien quiera Gijón a 15 min en tren desde una villa marinera, aceptando la industria vecina.

**Gijón (nº 57).** 270.000 habitantes; San Lorenzo con su paseo del Muro, Cimadevilla, Poniente, parques, universidad, cultura, comercio; ciudad de mar completa y abierta. Servicios 10/10. Hospital 5. Aeropuerto 30. Precio 2.300: 2 habitaciones franja A 194.000, 3 habitaciones 269.000 (entra a 5-10 min de la playa). Obra nueva sí. Seguridad 39. Dependencia del coche 2/10. Para quién: quien quiera ciudad; para tu perfil, los barrios de Somió (chalés, casas bajas, a 5 min de la playa) son la versión urbanización, a precio alto.

### Si yo fuera tú

Salinas, si aceptas mil horas menos de sol que en Mancor a cambio de aeropuerto, hospital y ciudad a 10 min y una villa de casas bajas junto a la playa. En Asturias es la que más encaja.

![Mapa de la zona 12](../output/mapas_zonas/zona_12.png)

</details>

<details><summary>CITA estudio_zonas.md § Asturias Oriente</summary>

## 12. Asturias Oriente (Asturias) · Villaviciosa, Colunga, Ribadesella, Llanes, Ribadedeva

### La zona

La costa donde la montaña cae al mar: la Sierra del Sueve (1.160 m) sobre Colunga, la Sierra del Cuera (1.300 m) sobre Llanes, y detrás los Picos de Europa a 30-45 min. Villaviciosa es la capital de la sidra, con su ría (reserva natural) y Tazones; Colunga tiene Lastres (pueblo colgado) y el museo del Jurásico; Ribadesella, el Sella, la cueva de Tito Bustillo y el paseo de Santa Marina con sus casas de Indianos; Llanes, la villa amurallada con decenas de playas y pueblos con playa (Barro, Niembro, Celorio, Poo) muy queridos por Madrid; Ribadedeva (Colombres) es la frontera con Cantabria, con el Archivo de Indianos y la cueva del Pindal.

Es la zona más espectacular de la tabla en paisaje y la peor en sol. Sanidad y aeropuerto están en el límite de lo que aceptas.

### Clima mes a mes

| | Oct-Mar | Abr-May | Jun-Sep | Año |
|---|---|---|---|---|
| Días de lluvia al mes | 15-17 | 13-14 | 9-11 | 153-155 |
| Máxima / mínima típica | 13 / 6 °C (ene.) | 17 / 9 °C | 23-24 / 16 °C (jul.) | |
| Horas de sol al mes | 65-100 | 160-190 | 200-220 | 1.700-1.750 |

Sol 1.700-1.750 h (el mínimo de la tabla junto con Cantabria), 40 días despejados, 168 cubiertos. Lluvia 1.200-1.300 mm en 153-155 días, 9-11 al mes en verano. Verano 19,5 °C, 1-3 días > 30 °C. Viento bajo (la sierra protege), niebla media en Villaviciosa. Comparado con Mancor: 1.050-1.100 h de sol menos; casi 100 días de lluvia más.

### Mar y baño

Rodiles (Villaviciosa; larga, pinar, surf), Tazones, La Griega, La Isla y Lastres (Colunga), Santa Marina y Vega (Ribadesella), Toró, Sablón, Puerto Chico, Ballota, Torimbia, Andrín, Barro, Niembro, Poo, Celorio, Gulpiyuri (Llanes: más de 30 playas), La Franca (Ribadedeva). Agua 19-21 °C en agosto. Playas abrigadas entre acantilados, muchas pequeñas; bañarse con calma en Toró, Sablón, Poo, Barro.

### Paseos y montaña

Paseo de San Pedro (Llanes; pradera sobre el acantilado), Bufones de Pría y Arenillas, Sierra del Cuera (rutas desde Llanes), Picos de Europa (Cabrales, Cangas de Onís, Covadonga, Lagos a 45-60 min), Mirador del Fitu (Sueve; una de las vistas mar-montaña más famosas de España), Ermita de la Guía (Ribadesella), cueva de Tito Bustillo, Descenso del Sella (primer sábado de agosto), ría de Villaviciosa, Valdediós (prerrománico), Colombres y la Quinta Guadalupe, cueva del Pindal, Desfiladero de La Hermida (Ribadedeva, 20 min). Para un caminante es la mejor zona de la tabla.

### Servicios y ciudad de referencia

Llanes 7/10 y Ribadesella 7/10 (villas completas con centro de salud, comercio, mercado, cine, restaurantes); Villaviciosa 7/10 (villa de servicios con vida propia); Colunga 4/10; Ribadedeva 3/10 (Unquera y Colombres tienen lo básico; Llanes a 15). Ciudad: Gijón a 25-50 min; Oviedo a 40-70; Torrelavega y Santander a 45-75 desde Ribadedeva.

### Sanidad

Hospital del Oriente (Arriondas, público, comarcal): 20 min desde Colunga y Ribadesella, 35 desde Llanes. Cabueñes (Gijón) a 25 desde Villaviciosa. Sierrallana (Torrelavega) a 45 desde Ribadedeva. Privado: Jove (Gijón) a 30 desde Villaviciosa; ninguno a menos de 45-60 desde el resto. Es la sanidad más débil de la tabla después de la Mariña.

### Aeropuertos y Palma

Asturias (Palma en verano) a 45 min desde Villaviciosa, 60 desde Colunga, 75-85 desde Ribadesella y Llanes. Santander (Palma casi todo el año) a 55 min desde Ribadedeva, 70 desde Llanes, 90 desde Ribadesella, 105-115 desde Colunga y Villaviciosa.

### Precios y qué compras con 260.000 €

Villaviciosa 1.500 €/m² (franja B; 3 habitaciones 142.000), Ribadedeva 1.600 (3 habitaciones franja A 187.000), Colunga 1.700 (199.000), Llanes 2.100 (246.000), Ribadesella 2.200 (257.000). En Llanes, los pueblos con playa (Barro, Niembro, Celorio) superan el presupuesto para 3 habitaciones; la villa y los pueblos interiores entran. Obra nueva: poca o ninguna. Fibra en Villaviciosa, Ribadesella y Llanes; parcial en Colunga y Ribadedeva.

### Seguridad y ambiente

Ninguno supera 20.000 habitantes; Asturias 36/1.000. Población extranjera baja (4-6 %). Ambiente: villas de piedra e Indianos, muy cuidadas, con veraneo madrileño intenso en Llanes y Ribadesella (julio-agosto multiplican por 5-8 su población) y muy tranquilas de octubre a junio.

### Parecido con Mancor / Mallorca

Paisaje 3/5 (pueblo de piedra con la sierra encima, como Fornalutx o Sóller con el mar a 5 min); clima 1/5.

### Lo que no tendrás

- Sol: el mínimo de la tabla.
- Hospital privado cerca ni público a menos de 20-45.
- Ciudad a menos de 25-50 min.
- Obra nueva.
- Calma en Llanes y Ribadesella en julio-agosto.
- Vuelo a Palma a menos de 55-70 min.

### Municipio a municipio

**Villaviciosa (nº 58).** 14.000 habitantes; villa de la sidra (llagares, Fiesta de la Manzana), casco histórico, ría con paseo y observatorio de aves, Tazones (pueblo marinero donde desembarcó Carlos V) y Rodiles a 12 min (franja B), Valdediós a 10. Servicios 7/10. Hospital Cabueñes 25, Jove 30. Aeropuerto de Asturias 45. Precio 1.500: 3 habitaciones 142.000. Fibra sí. Niebla media. Para quién: la más práctica de la zona: villa con vida, Gijón a 25 y hospital a 25, con la ría y la playa a 12.

**Colunga (nº 59).** 3.200 habitantes; Lastres (pueblo colgado sobre el puerto, mirador de San Roque), MUJA, playas de La Griega (huellas de dinosaurio), La Isla y Lastres a 5 min; el Sueve y el Fitu detrás. Servicios 4/10; fibra parcial; coche 7/10. Hospital Arriondas 20. Aeropuerto 60. Precio 1.700: 3 habitaciones 199.000. Para quién: quien quiera el Fitu y Lastres cada día y no necesite servicios a pie.

**Ribadesella (nº 60).** 5.700 habitantes; puerto en la ría del Sella, casco con soportales, paseo de Santa Marina con casas de Indianos, playa urbana, Tito Bustillo, Vega a 10 min; Picos a 30. Servicios 7/10. Hospital 20. Aeropuerto de Asturias 75, Santander 90. Precio 2.200: 2 habitaciones franja A 186.000, 3 habitaciones 257.000 (justo). Poca obra nueva; fibra sí. Facilidad de venta 8/10. Para quién: la más equilibrada de la zona: villa completa, hospital a 20, paisaje total.

**Llanes (nº 61).** 13.000 habitantes; villa amurallada con puerto, Cubos de la Memoria, Paseo de San Pedro, casco histórico, más de 30 playas en el concejo, Sierra del Cuera encima, Picos a 40. Pueblos con playa: Barro, Niembro, Celorio, Poo, Andrín. Servicios 7/10. Hospital Arriondas 35. Aeropuerto de Santander 70, Asturias 85. Precio 2.100: 3 habitaciones franja A 246.000 (en la villa; los pueblos con playa, fuera). Poca obra nueva; fibra sí. Facilidad de venta 8/10, revalorización 8/10. Para quién: quien quiera la villa más completa y bonita del oriente y acepte agosto lleno y hospital a 35.

**Ribadedeva (nº 62).** 1.800 habitantes; Colombres (Archivo de Indianos, casonas de colores), Bustio (ría de Tina Mayor), La Franca (playa entre acantilados), cueva del Pindal, Unquera a 5 min. Servicios 3/10; fibra parcial; coche 8/10. Hospital Sierrallana 45. Aeropuerto de Santander 55 (el mejor tiempo de la zona a Palma). Precio 1.600: 3 habitaciones 187.000. Sin obra nueva. Para quién: quien quiera casa de Indianos con los Picos a 30 min y el aeropuerto de Santander a 55.

### Si yo fuera tú

Ribadesella o Villaviciosa si un día decides que los Picos pesan más que el sol. Con tus prioridades actuales, no: es el clima más opuesto a Mallorca de toda la tabla, y la sanidad y el aeropuerto están en el límite.

![Mapa de la zona 13](../output/mapas_zonas/zona_13.png)

</details>

---

## 2. Cudillero

### 2.1 Relato actual completo

> CITA LITERAL — clave `cudillero` en `web/src/lib/relatos-asturias-centro.ts`.

```ts
cudillero: {
 escala: "Pueblo colgado sobre el puerto",
 abrir: [
      "Cudillero reúne unos cinco mil habitantes en el concejo, en la costa occidental del área metropolitana asturiana. El pueblo que sale en las fotos típicas es un anfiteatro de casas colgadas sobre el puerto: calles en cuesta, tejados a distintas alturas y el Cantábrico abajo, siempre a la vista. Quien llega de día encuentra el casco lleno de visitantes; quien se queda a vivir descubre que esas mismas cuestas hay que contar con en la compra, en la vuelta con bolsas y en cualquier tarde de lluvia. Arriba, El Pito —llano, hacia Muros de Nalón— cambia la ecuación: el horizonte sigue cerca, pero la calle deja de ser un anfiteatro.",
 "Un martes de noviembre el puerto respira otra escala. Quedan el comercio turístico, lo básico del concejo y un ritmo que no es el de villa completa con súper y mesas a pie. Los servicios son 4/10: se compra lo imprescindible aquí y se organiza el resto hacia Avilés. El hospital público San Agustín, en Avilés, queda a unos veinticinco minutos; el aeropuerto de Asturias, en Santiago del Monte, anda alrededor de los quince, con vuelo a Palma en verano. El coche no es un lujo: es la forma de coser la semana entre el casco colgado, El Pito y la ciudad.",
 "En verano el pueblo colgado recibe afluencia de día, tráfico estrecho y aparcamiento justo. El impacto al vivir no viene de un calendario de fiestas aisladas tanto como de esa ocupación diaria del anfiteatro: conversaciones en la calle, coches buscando hueco y un sábado de agosto que no se parece a un martes gris. Quien compre en el casco debe probar un día de temporada alta; quien mire hacia El Pito debe bajar al puerto ese mismo día y decidir si quiere el paisaje cerca o la calle sin cuestas.",
 "Aguilar y Concha de Artedo —las playas de baño del concejo— quedan a unos cinco minutos; la playa del Silencio, en Castañeras, a unos quince, ya en acantilado más abierto. El Cabo Vidio cierra faro y senda hacia el oeste. La población mezcla vecinos del concejo, gente que trabaja hacia Avilés u Oviedo y quienes eligieron la costa por el horizonte. Cudillero encanta para visitar; para vivir encaja sobre todo arriba, con coche, usando el anfiteatro como paisaje cercano y no como calle diaria sin cuestas.",
 "Las estaciones marcan el sonido más que el mapa. En invierno la niebla media y la lluvia dejan el puerto casi vacío; en primavera vuelven los paseos hacia Vidio; en agosto el casco se llena de día y se vacía de otra manera al atardecer. Quien quiera esta costa debe conocerla en noviembre y en agosto antes de comprar.",
 ],
 tiempo: [
 "Frente a Baleares —y a Mallorca en particular—, Cudillero no compite por cielo despejado. Aquí hay unas 1.800 horas de sol y 42 días despejados al año, frente a las 2.800 horas y 120 jornadas claras de la isla. Caen alrededor de 1.150 milímetros en unos 148 días; la niebla es media y el viento, medio. También en verano llueve con frecuencia: el trato no es frío extremo, sino un cielo que se cierra más veces de las que un visitante de Baleares espera.",
 "El verano ronda 19 °C de media, con máximas habituales alrededor de 23 °C y apenas uno a tres días sobre 30 °C. Se gana frescura frente al calor mediterráneo y se acepta un julio que todavía moja. El agua anda entre 19 y 21 °C; Aguilar, Artedo y El Silencio piden días de mar más llana para un baño cómodo, pero el Cantábrico como vecino no espera al calendario de vacaciones.",
 ],
 vivir: [
 "El invierno en casa se nota en las cuestas y en la humedad del anfiteatro: niebla media, lluvia y un puerto que se queda casi vacío. En el casco colgado las bolsas, la vuelta a casa y cualquier tarde mojada pesan; en El Pito —llano, arriba— la ecuación cambia. Conviene preguntar por aislamiento y orientación, y visitar un noviembre húmedo, no solo un sábado de sol sobre el puerto.",
 "Sin coche la semana no se sostiene. Los servicios son 4/10: comercio turístico y lo básico; el súper y muchos gestos se organizan hacia Avilés. En enero el pueblo colgado respira otra escala —no es villa completa con mesas a pie—. Quien viva arriba, en El Pito, dependerá del vehículo para coser casco, playa y ciudad; quien compre abajo debe aceptar las cuestas como parte del día.",
 "Conviven vecinos del concejo, gente que trabaja hacia Avilés u Oviedo y quienes eligieron la costa por el horizonte. Se oye asturiano en el puerto y en el café; el castellano basta para lo cotidiano, pero la vida social cambia según la hora y la temporada: de día llegan visitantes; entre semana manda otra densidad. Quien busque solo veraneo encontrará ruido de agosto; quien busque vecinos todo el año, también —en otra escala que Mallorca—.",
 "La sanidad no está en el anfiteatro: el hospital público San Agustín, en Avilés, queda a unos veinticinco minutos; el privado Centro Médico de Asturias, en Oviedo, hacia los cuarenta y cinco. En el concejo hay lo básico; para urgencias y especialidades se baja a Avilés. Es costa con hospital cercano, no sanidad a la vuelta de la cuesta.",
 "Mantener el vínculo con Mallorca es el punto fuerte logístico: el aeropuerto de Asturias, en Santiago del Monte, anda alrededor de los quince minutos, con vuelo a Palma en verano. En invierno el trayecto sigue siendo corto, pero conviene mirar el calendario real de vuelos, no solo el de temporada alta.",
 "La vivienda en el pueblo colgado es tipología de encanto y cuesta —muchas pensadas más para el visitante que para una semana sin esfuerzo—, sin obra nueva y con fibra. En El Pito hay más llano y coche en la puerta. Hay que contar con humedad, ocupación de temporada y si se puede aparcar sin pelear el verano.",
 ],
 historia: [
 "El anfiteatro de casas sobre el puerto explica Cudillero mejor que cualquier leyenda: pueblo marinero de foto turística, nacido de la relación con el mar y de una orografía que obliga a subir y bajar. La belleza es el carácter —y también la razón del visitante de día—. No hay un casco residencial llano que absorba la vida cotidiana; hay cuestas, miradas al agua y un puerto que concentra el relato.",
 "Hacia el oeste, el Cabo Vidio —faro y senda sobre el Cantábrico abierto— sitúa el concejo en una costa de acantilado, no de bahía abrigada. Hacia arriba, la Quinta de Selgas, en El Pito —hacia Muros—, añade capa de patrimonio indiano a un paso del núcleo colgado: jardines, memoria de indianos y un paisaje llano que contrasta con el anfiteatro. Faro, quinta y puerto cuentan una lo que conviene saber de horizonte y oficio, no de ciudad.",
 "Lo que queda para quien llega a vivir es esa tensión: el pueblo fotografiado abajo y la vida más practicable arriba. Cudillero no inventa un centro comercial continuo; ofrece puerto, costa abierta y un vecindario que cambia según la hora y la temporada.",
 ],
 fuera: [
 "Aguilar y Concha de Artedo cubren la playa a unos cinco minutos del núcleo: orillas de uso diario cuando el mar lo permite, con agua entre 19 y 21 °C. No son calas de foto turística vacía en agosto; son la costa cercana del concejo, la que se usa entre semana cuando el casco colgado está más calmado.",
 "La playa del Silencio, en Castañeras, queda a unos quince minutos y es la orilla de acantilado más buscada de la zona: arena bajo pared de piedra, luz distinta y más afluencia los días claros. El Cabo Vidio ofrece faro, senda y tarde de costa abierta sin necesidad de llegar a Peñas.",
 "Hacia el este, Avilés y Salinas resuelven comercio, paseo residencial y hospital cuando el concejo no basta. Hacia el estuario, Muros de Nalón aporta los miradores sobre el Nalón. El tiempo libre aquí se reparte entre playa cercana, acantilado y ciudad a un trayecto corto —siempre con coche—.",
 ],
 casa: [
 "En el pueblo colgado predominan viviendas en cuesta, muchas pensadas más para el encanto que para una semana sin esfuerzo: turismo de día, acceso estrecho y sin obra nueva. La fibra llega. En El Pito hay más llano, más coche en la puerta y una lógica distinta de vivienda. Hay que contar con humedad, orientación, ocupación de temporada y si se puede aparcar sin pelear el verano.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros. Vistas al puerto o una reforma completa mueven la franja media; la compra real suele ser encanto y acceso, no calma residencial de villa-paseo.",
 "Los servicios son 4/10: comercio turístico y lo básico, sin la vida de una villa completa. San Agustín queda a unos veinticinco minutos; el privado Centro Médico de Asturias, en Oviedo, hacia los cuarenta y cinco. El aeropuerto de Asturias está a unos quince minutos, con Palma en verano. Quien se quede a vivir aquí asume horizonte y logística de costa, no autosuficiencia a pie.",
 ],
 encaja: {
 si: [
 "Encaja para quien quiera el Cantábrico delante casi todo el año —Aguilar y Concha de Artedo a unos cinco minutos; la playa del Silencio, en Castañeras, a unos quince; el Cabo Vidio con faro y senda como tarde de costa abierta— y acepte que el pueblo colgado es foto típica de día más que calle llana de diario. Un martes de noviembre los servicios son 4/10: comercio turístico y lo básico, sin la vida de una villa completa; el coche organiza la semana hacia El Pito —llano, arriba— o hacia Avilés. Quien priorice horizonte de puerto, casas en anfiteatro y aeropuerto a unos quince minutos (Asturias, con Palma en verano) frente a paseo residencial encontrará aquí la costa más fotografiada de Asturias Centro. El agua anda entre 19 y 21 °C; el baño pide días de mar más llana, pero el mar como vecino no pide calendario.",
 "El clima pide ojos abiertos si se viene de Mallorca: unas 1.800 horas de sol y 42 días despejados frente a las 2.800 horas y 120 jornadas claras de la isla; caen alrededor de 1.150 milímetros en unos 148 días, con niebla media y viento medio. El verano ronda 19 °C, con máximas habituales cerca de 23 °C y apenas uno a tres días sobre 30 °C: se gana frescura frente al calor mediterráneo y se acepta un cielo que también llueve en julio. En verano el casco recibe afluencia de día, tráfico estrecho y aparcamiento justo; arriba, en El Pito, la ecuación se vuelve más habitable. Encaja si has bajado al puerto un martes de noviembre y un sábado de agosto y siga queriendo esa costa —viviendo arriba, con coche, y usando el anfiteatro como paisaje cercano, no como calle sin cuestas—.",
 ],
 no: [
 "No encaja si se busca villa caminable y calmada todo el año, con súper, farmacia y mesas a pie sin pelear cuestas ni turistas de día. Cudillero es mejor visitarlo que tomarlo como marco diario en el casco colgado: las cuestas pesan, el visitante marca el verano y los servicios 4/10 no sustituyen Salinas ni Gijón. El hospital público San Agustín, en Avilés, queda a unos veinticinco minutos; el privado Centro Médico de Asturias, en Oviedo, hacia los cuarenta y cinco. Eso no se arregla eligiendo otra calle junto al puerto.",
 "Tampoco si el hospital debe quedar a diez minutos o si se necesita el cielo de Baleares. Aquí mandan cubierto (unos 165 días), niebla media y verano fresco; y pero la compra real es encanto y acceso, no calma residencial. Quien se decida solo tras un sábado de sol en el anfiteatro, sin probar un día de temporada alta ni un noviembre húmedo en El Pito, se llevará una sorpresa.",
 ],
 veredicto:
 "Veredicto: Cudillero es la foto típica de Asturias Centro, no la opción práctica. Buscaría vivienda en El Pito —llano, con coche— si el encanto de puerto, Aguilar y Vidio mandan, tras probar un agosto en el casco y un martes de noviembre arriba; si mandan servicios y calma, miraría Salinas o el estuario. Se ganan costa abierta y aeropuerto a quince minutos; se aceptan cuestas, turismo de día, servicios 4/10 y San Agustín a veinticinco.",
 },
 fotoIdentidad: {
 src: "/fotos/asturias-centro/cudillero-identidad.jpg",
 pie: "Cudillero: casas de colores subiendo la ladera desde la lonja — pueblo colgado sobre el puerto",
 },
 fotosAbrir: [
 { src: "/fotos/asturias-centro/cudillero-puerto.jpg", pie: "Puerto de Cudillero" },
 { src: "/fotos/asturias-centro/cudillero-pueblo.jpg", pie: "Pueblo colgado de Cudillero" },
 ],
 fotosHistoria: [
 { src: "/fotos/asturias-centro/cudillero-vidio.jpg", pie: "Cabo Vidio, cerca de Cudillero" },
 { src: "/fotos/asturias-centro/cudillero-pito.jpg", pie: "El Pito, arriba de Cudillero" },
 ],
 fotosFuera: [
 { src: "/fotos/asturias-centro/cudillero-playa.jpg", pie: "Playa cerca de Cudillero" },
 { src: "/fotos/asturias-centro/cudillero-cuesta.jpg", pie: "Calles en cuesta de Cudillero" },
 ],
 creditoFotos: credito,
 }
```

### 2.2 Capa 2026 completa

> CITA LITERAL — fila `slug: "cudillero"` en `web/src/data/municipios-asturias-centro.json`.  
> Autoridad factual. No rellenar null/`…` truncados.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `138242` |
| `A_3hab` | `191412` |
| `B_2hab` | `111657` |
| `B_3hab` | `154602` |
| `advertenciaMicrozona` | El anfiteatro portuario es muy pendiente; una vivienda 'cerca' en mapa puede exigir muchas escaleras. |
| `aeropuertoMin` | `15` |
| `aeropuertoPractico2026` | Asturias 11 km · 15 min (Palma: verano) Tiempo histórico orientativo: ~15 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Asturias 11 km · 15 min (Palma: verano) |
| `autonomiaCotidiana` | MEDIA-BAJA |
| `casaQueBuscar` | Acceso con pocas escaleras, luz, aislamiento y conexión cómoda con servicios.... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Más húmedo / nublado |
| `comunicaciones` | A-8 / N-632; tren FEVE |
| `comunicacionesNota10` | `6` |
| `cubiertos` | `165` |
| `dependenciaCocheTexto` | Media-alta, además de la dificultad peatonal por pendiente. |
| `despejados` | `42` |
| `estacionalidad2026` | Turismo muy visible; actividad menor fuera de temporada. |
| `fibra` | Sí |
| `franja` | A |
| `hospitalMin` | `25` |
| `hospitalPractico2026` | 25 km · 25 min · San Agustín (Avilés) Tiempo histórico orientativo: ~25 min. Conservar como referencia práctica orientativa, no como garantía de adscripción. |
| `hospitalPriv` | 40 km · 45 min · Centro Médico de Asturias (Oviedo) |
| `hospitalPub` | 25 km · 25 min · San Agustín (Avilés) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 25 km · 25 min · San Agustín (Avilés); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `80` |
| `lat` | `43.563` |
| `lluviaDias` | `148` |
| `lluviaMm` | `1150` |
| `lon` | `-6.146` |
| `mapa` | 51_cudillero.png |
| `mercadoReventa` | Mercado intermedio: base residencial propia y/o demanda exterior. Priorizar u... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `5` |
| `minCosta` | `2` |
| `municipio` | Cudillero |
| `n` | `51` |
| `niebla` | Media |
| `obraNueva` | No |
| `pais` | España |
| `palmaDirecta2026` | Asturias: Palma figura entre destinos publicados en 2026; programación/temporada variable, comprobar antes de viajar. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Asturias (verano) · 15 min |
| `paseoCotidiano` | Puerto y miradores, con escaleras y desnivel. |
| `paseoPendienteTopografia` | Muy alta relevancia de cuestas/escaleras. |
| `peajeRealidad` | Imagen portuaria excepcional, pero topografía y escala de servicios penalizan la rutina. |
| `playaBano` | Aguilar / Concha de Artedo |
| `playaCotidiana` | NO GENERALIZABLE |
| `playaCotidianaModo` | Puerto cotidiano; playas de baño requieren salida. |
| `precioM2` | `1636` |
| `provincia` | Asturias |
| `radioCotidiano` | Puerto y pequeño núcleo turístico con servicios básicos; para rutina amplia se depende de otras áreas. |
| `radioSalida` | Playas y costa del concejo; Avilés/área central para servicios superiores. |
| `sanidadPrimaria2026` | Atención primaria local |
| `servicios` | `4` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | Tiene: villa marinera muy turística. Falta: instituto de FP, comercio grande |
| `slug` | cudillero |
| `solHoras` | `1800` |
| `tempAgua` | 19-21 |
| `tempInvierno` | `9.5` |
| `tempVerano` | `19.0` |
| `transporteRelevante2026` | A-8 / N-632; tren FEVE Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es 25 km · 25 min · San Agustín (Avilés). |
| `viento` | Media |
| `zona` | Asturias Centro |

### 2.3 Auditorías / plan existentes

**NO existe** `docs/PLAN_EDITORIAL_ASTURIAS_CENTRO_2026.md` ni `PLAN_EDITORIAL_ASTURIAS_ORIENTE_2026.md` (ni equivalente CURSOR_19 para Centro/Oriente).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n correspondiente):

```
| 51 | Cudillero | Asturias Centro | precio relato ~1400 vs ficha 1636 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; repite nota servicios X/10 (+3) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 51 | Cudillero | Asturias Centro | no | — |
```

**estudio_zonas.md** (histórico/contexto — **NO** sustituye capa 2026): extracto de zona en §1; detalle municipal bajo demanda en el estudio. Snippet zona:

<details><summary>Contexto estudio (recorte)</summary>

## 11. Asturias Centro (Asturias) · Cudillero, Muros de Nalón, Soto del Barco, Salinas (Castrillón), Luanco (Gozón), Candás (Carreño), Gijón

### La zona

La costa del área metropolitana asturiana: Gijón (270.000 hab.), Avilés (77.000) y Oviedo (220.000, con el HUCA) a 10-30 minutos de cualquier punto, y el aeropuerto de Asturias en Santiago del Monte (Castrillón), a 10 min de Salinas. Cudillero es el pueblo colgado de postal; Muros y Soto del Barco, el estuario tranquilo del Nalón; Salinas, la villa-playa residencial de chalés y casas bajas junto a Avilés; Luanco y Candás, villas marineras del Cabo Peñas; Gijón, la ciudad de mar de Asturias.

Es la zona con mejor logística del Cantábrico occidental (aeropuerto, tres ciudades, cuatro hospitales) y con dos matices: cielo cantábrico y una industria pesada (siderurgia de Avilés y Gijón, central y cementera de Aboño) que se nota en el aire según el viento.

### Clima mes a mes

| | Oct-Mar | Abr-May | Jun-Sep | Año |
|---|---|---|---|---|
| Días de lluvia al mes | 14-16 | 12-13 | 8-10 | 145-150 |
| Máxima / mínima típica | 13 / 6 °C (ene.) | 16 / 9 °C | 23 / 16 °C (jul.) | |
| Horas de sol al mes | 70-100 | 160-190 | 200-230 | 1.780-1.…

</details>


### 2.4 Auditoría relato ↔ capa

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | **4/10** repetido (abrir/vivir/casa/encaja) | `servicios` **4**; falta FP / comercio grande | DUPLICA_CAPA | Omitir chip; narrar MEDIA-BAJA / dependencia Avilés |
| Precio ~1400 vs capa | casa remite a capa + resto «000 euros»; auditoría ~1400 | `precioM2` **1636**; A_3hab 191412 | OBSOLETO | Omitir cifras/ranking; TablaPrecios. No reponer 1400 |
| Prosa rota «000 euros» | Tras remitir a capa queda fragmento «000 euros» (y a veces totales sueltos) | Cifras viven en `precioM2` / A/B / TablaPrecios | OBSOLETO | Borrar resto roto; no reponer €/m² históricos en prosa |
| Playa cotidiana | Aguilar/Artedo ~5′ como orilla cercana; Silencio ~15′ | `playaCotidiana` **NO GENERALIZABLE**; baño Aguilar/Artedo | SOPORTADO_PERO_INFRAUSADO / ALINEADO | No generalizar playa andando desde cualquier vivienda; glosar salidas |
| Paseo / topografía | Anfiteatro colgado, cuestas; El Pito llano | `paseoPendienteTopografia` **muy alta**; puerto+miradores con escaleras | ALINEADO / P4_PRESERVAR | Separar paseo puerto (con desnivel) ≠ paseo llano El Pito |
| Hospital San Agustín | ~25′ San Agustín (Avilés) | `hospitalMin` 25; San Agustín | ALINEADO / DUPLICA_CAPA | Una mención; no martillar minutos |
| Aeropuerto / Palma | Minutos aero + Palma verano (a veces suena permanente) | `aeropuertoMin` + `palmaDirecta2026` temporada variable | DUPLICA_CAPA / ALINEADO | Consecuencia una vez; no permanente Palma; omitir cascada de minutos |
| Microzona El Pito vs casco | Veredicto sugiere El Pito llano vs casco colgado | `advertenciaMicrozona` anfiteatro pendiente | P4_PRESERVAR / SOPORTADO_PERO_INFRAUSADO | Advertir no generalizar caminabilidad «cerca en mapa» |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos abrir→tiempo→encaja | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| CURSOR_28 control: playa NO GENERALIZABLE + topo muy alta + San Agustín 25′ | Presente en prosa (a veces como chip) | Campos capa citados | ALINEADO (hechos) / DUPLICA_CAPA (forma) | Preservar tradeoff; omitir chips |

### 2.5 P4 / identidad

| Elemento | Qué es | Por qué importa | Cotidiano/salida | Soporte repo | Preservar |
|---|---|---|---|---|---|
| Anfiteatro portuario | Casas colgadas sobre puerto | Identidad foto típica + cuestas | Cotidiano (con pendiente) | relato + paseoPendiente | sí |
| El Pito | Núcleo más llano del concejo | Alternativa caminable/coche | Cotidiano si se vive allí | relato veredicto | sí |
| Aguilar / Concha de Artedo | Playas de baño del concejo | Orilla cercana no generalizable | Salida corta | playaBano + NO GENERALIZABLE | sí |
| Playa del Silencio / Castañeras | Acantilado abierto | Orilla de foto/salida | Salida ~15′ | relato | sí |
| Cabo Vidio | Faro y senda oeste | Tarde de costa abierta | Salida | relato | sí |
| Avilés | Ciudad de apoyo | Comercio/hospital | Salida necesaria | serviciosNota | sí |

### 2.6 Vida cotidiana soportada

Pregunta guía: *Ya vivo aquí. Tengo toda la mañana libre. ¿Qué puedo hacer con mi día sin convertirlo en turismo?*

| Elemento | Clasificación | Base repo |
|---|---|---|
| Puerto / miradores (con escaleras) | YA SOPORTADO | paseo + pendiente muy alta |
| Compra básica en núcleo | YA SOPORTADO (limitado) | servicios 4 / radio |
| Aguilar/Artedo | YA SOPORTADO (salida; no generalizable) | playa NO GENERALIZABLE |
| Silencio / Vidio | YA SOPORTADO (salida) | relato |
| El Pito llano | YA SOPORTADO | relato |
| Café/farmacia con nombre | NO SOPORTADO | — |
| Playa «a la puerta» desde cualquier casa | NO SOPORTADO | capa |

### 2.7 Reality toll

Solo peajes estructurales **soportados** en repo:

- Topografía muy alta / escaleras (peaje estructural)
- Coche media-alta + dependencia Avilés para súper
- Hospital San Agustín ~25′
- Aeropuerto ~15′; Palma estacional
- Turismo muy visible; invierno vacío relativo
- Playa no generalizable desde vivienda «cerca»
- Servicios 4 / MEDIA-BAJA

### 2.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | Auditoría ~1400; prosa remite + «000 euros» | **1636** | OBSOLETO |
| A_3 / B_3 | No narrar | 191412 / 154602 | Tabla |
| casaQueBuscar | Acceso/escaleras | Truncado `…` | DESEABLE texto completo; cualitativo ok |
| microzonaPrecio | — | `null` | |

### 2.9 Clima: deuda / duplicación

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en tiempo + encaja (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `cudillero` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_28.**

**Sin correcciones en este bloque: sí.**

### 2.10 Mar / paseo

- **Mar/baño:** Aguilar / Concha de Artedo (capa); Silencio/Vidio = salidas. `playaCotidiana` = **NO GENERALIZABLE**.
- **Paseo:** puerto y miradores **con escaleras**; no equivale a paseo llano.
- Separar: agua de baño ≠ paseo peatonal del anfiteatro.

### 2.11 No soportado / no inventar

- €/m² 1400 histórico; totales A/B en prosa; resto «000 euros»
- Servicios como chip 4/10 martilleado
- Playa generalizable a toda vivienda «cerca»
- Equiparar anfiteatro con paseo llano
- Palma permanente
- Nombres de café/farmacia
## 3. Muros de Nalón

### 3.1 Relato actual completo

> CITA LITERAL — clave `muros-de-nalon` en `web/src/lib/relatos-asturias-centro.ts`.

```ts
muros-de-nalon: {
 escala: "Estuario y miradores",
 abrir: [
 "Muros de Nalón reúne unos mil ochocientos habitantes en la orilla oeste de la desembocadura del Nalón, el gran río que llega al Cantábrico entre este concejo y Soto del Barco. No es villa de paseo comercial denso ni pueblo colgado de foto turística: es estuario, horizonte y la Ruta de los Miradores —siete miradores sobre la desembocadura— como paseo de diario. La playa de Aguilar queda a unos cinco minutos; el precio es de los más bajos de Asturias Centro. Quien busca ruido de terrazas encontrará poco; quien busca silencio sobre el agua encontrará el tono del lugar.",
 "Un martes de noviembre los servicios son 3/10: lo básico en el municipio; Avilés o Pravia cubren el comercio grande. San Agustín, el hospital público de Avilés, queda a unos veinte minutos. El aeropuerto de Asturias está a unos diez —de los mejores tiempos de la zona—, con Palma en verano. La dependencia del coche es alta: el estuario se camina en tramos, pero la semana completa se cose con el vehículo.",
 "En verano Aguilar y los miradores reciben paseo y algo de afluencia; el ritmo sigue siendo de estuario, no de Cudillero lleno de día. Las patronales locales animan el pueblo unos días —ruido, coches, mesas ocupadas— y después vuelve la calma de ría. Fuera de esos picos, Muros se siente como retiro de orilla: niebla media sobre el Nalón, humedad de desembocadura y vecinos que conocen el silencio de noviembre.",
 "La población es pequeña y el día a día no pretende autosuficiencia. Hay quien trabaja hacia Avilés, quien eligió el precio y el aeropuerto cercano, y quien prioriza mirar el estuario antes que resolver la compra a pie. La Quinta de Selgas, en El Pito —hacia Cudillero—, queda a un paso y añade una tarde de patrimonio indiano sin abandonar la lógica de concejo tranquilo.",
 "Muros encaja para quien quiera silencio sobre el Nalón, aeropuerto a diez minutos y poco dinero, aceptando servicios 3/10, fibra parcial y la dependencia del coche como parte del trato —no como detalle menor—.",
 ],
 tiempo: [
 "Muros comparte el cielo cantábrico central, lejos del de Mallorca: unas 1.800 horas de sol y 42 días despejados frente a las 2.800 horas y 120 jornadas claras de la isla. Caen alrededor de 1.100 milímetros en unos 148 días. La niebla es media; el viento, medio. El invierno no congela la calle, pero sí multiplica las mañanas grises sobre el estuario.",
 "El verano ronda 19 °C, fresco frente a Baleares: se gana frescura y se acepta cielo cubierto frecuente. Aguilar tiene agua entre 19 y 21 °C; el estuario ofrece orilla más calmada que el Cantábrico abierto hacia Cudillero, aunque el baño siga pidiendo días de mar más llana.",
 ],
 vivir: [
 "El invierno en casa se nota por la humedad de desembocadura y la niebla media sobre el Nalón: paredes, armarios y orientación hacia el estuario importan más que la foto típica de los miradores. Una terraza de agosto no garantiza uso de noviembre. Visitar un martes vacío enseña el precio real del silencio.",
 "Sin coche apenas se resuelve la semana. Los servicios son 3/10: lo básico en el municipio; Avilés o Pravia cubren el comercio grande. En enero Muros es retiro de orilla, no villa con mesas. Los miradores se caminan sin volante; el resto —compra, hospital, gestos— pide vehículo casi cada día.",
 "La población es pequeña: hay quien trabaja hacia Avilés, quien eligió el precio y el aeropuerto cercano, y quien prioriza mirar el estuario. Se oye asturiano y castellano; el castellano basta para lo cotidiano, pero la vida social es de concejo tranquilo, no de plaza donde todo el mundo se ve. Entre semana manda el silencio; en verano Aguilar y los miradores reciben paseo y algo de afluencia.",
 "La sanidad pide trayecto: San Agustín, el hospital público de Avilés, queda a unos veinte minutos; el privado Centro Médico de Asturias, en Oviedo, hacia los cuarenta. Empadronarse aquí abre lo básico; para especialidades se baja a Avilés. No es hospital a la puerta del mirador.",
 "Ir y volver a Mallorca es de los trayectos más cortos de la zona: el aeropuerto de Asturias está a unos diez minutos, con Palma en verano. En invierno el aeropuerto sigue cerca, pero conviene mirar el calendario real de vuelos a Palma, no solo el de agosto.",
 "La vivienda típica es casa o piso de concejo pequeño hacia el estuario y las parroquias, sin obra nueva. La fibra es parcial —conviene comprobar casa por casa—. Se compra silencio y cercanía al aeropuerto; hay que contar con humedad de ría, acceso y la distancia real a un súper completo.",
 ],
 historia: [
 "La desembocadura del Nalón y la Ruta de los Miradores explican Muros: concejo de estuario y horizonte, no de casco monumental. Los siete miradores no son adorno turístico aislado; son el dato útil del día a día —paseo, luz sobre el río, frontera visual con Soto al otro lado—.",
 "La Quinta de Selgas, en El Pito, añade patrimonio indiano a un paso: memoria de indianos y jardines cerca de la desembocadura. La historia aquí es de río, mirador y orilla compartida, no de ciudad ni de anfiteatro de puerto.",
 "Vivir en Muros es aceptar esa escala: poca densidad, mucha humedad de ría y un paisaje que se entiende mejor caminando los miradores un martes vacío que leyendo una guía de un sábado soleado.",
 ],
 fuera: [
 "Los miradores sobre el Nalón son el paseo de diario: siete puntos de vista sobre la desembocadura, con el estuario cambiando de color según la marea y la niebla. Es el tiempo libre que no pide coche ni calendario.",
 "Aguilar cubre playa a unos cinco minutos —agua entre 19 y 21 °C—, la misma orilla que usa también quien mira hacia Cudillero, pero aquí llega desde un concejo más silencioso. El estuario ofrece orilla calmada frente al Cantábrico bravo de Peñas.",
 "Al otro lado del Nalón, Soto del Barco aporta San Juan de la Arena y Los Quebrantos. Avilés, a unos quince minutos, resuelve comercio, cultura y hospital cuando el municipio no basta. El mapa de ocio es estuario, playa cercana y ciudad corta —no villa-paseo residencial—.",
 ],
 casa: [
 "Predominan viviendas hacia el estuario y las parroquias: casas y pisos de concejo pequeño, sin obra nueva. La fibra es parcial —conviene comprobar casa por casa—. Hay que contar con humedad de ría, acceso, orientación hacia el Nalón y la distancia real a un súper completo.",
 "No hay una media municipal homogénea actual en la que anclarse: conviene mirar Idealista del mes y la vivienda concreta. Se compra silencio y cercanía al aeropuerto; no se compra autosuficiencia de villa.",
 "Los servicios son 3/10. San Agustín queda a unos veinte minutos; el privado Centro Médico de Asturias, en Oviedo, hacia los cuarenta. El aeropuerto de Asturias está a unos diez minutos, con Palma en verano. Avilés o Pravia cubren lo que el concejo no da.",
 ],
 encaja: {
 si: [
 "Encaja para quien quiera vivir el estuario del Nalón todo el año —Ruta de los Miradores con siete miradores sobre la desembocadura; playa de Aguilar a unos cinco minutos— y priorice silencio de orilla frente a villa completa. Un martes de noviembre los servicios son 3/10: lo básico en el municipio; Avilés o Pravia cubren el comercio grande y el coche organiza la semana. Quien busque retiro asequible de estuario en Asturias Centro y aeropuerto a unos diez minutos (Asturias, con Palma en verano) encontrará aquí orilla de ría, no foto típica de Cudillero ni paseo de Salinas. El agua en Aguilar anda entre 19 y 21 °C; el estuario ofrece orilla más calmada que el Cantábrico abierto hacia el oeste.",
 "El clima es el del Cantábrico central, no el de Mallorca: unas 1.800 horas de sol y 42 días despejados frente a las 2.800 horas y 120 jornadas claras de la isla; caen alrededor de 1.100 milímetros en unos 148 días, con niebla media y viento medio. El verano ronda 19 °C: se gana frescura frente al Mediterráneo y se acepta cielo cubierto frecuente. En verano Aguilar y los miradores reciben paseo y algo de afluencia; el ritmo sigue siendo de estuario, no de pueblo colgado lleno. Encaja si has visto un noviembre de niebla sobre el Nalón y siga queriendo esa calma —con fibra parcial comprobada casa por casa— a cambio de no resolver la semana andando.",
 ],
 no: [
 "No encaja si la semana debe resolverse a pie en el propio municipio o si se busca villa-playa con paseo, casas bajas y mesas de enero como Salinas. Muros no lo es: faltan el comercio grande y la densidad de servicios; Avilés, a unos quince minutos, cubre lo que el concejo no da. El hospital público San Agustín queda a unos veinte minutos; el privado Centro Médico de Asturias, en Oviedo, hacia los cuarenta. Eso no se negocia eligiendo otra parroquia junto al estuario.",
 "Tampoco si se necesita el cielo de Baleares o la vida urbana de Gijón sin trayecto. Aquí mandan cubierto (unos 165 días), niebla media y verano fresco; la dependencia del coche es alta. Quien se decida solo tras un sábado claro en los miradores, sin probar un martes vacío ni la humedad de ría, descubrirá en invierno el precio real del silencio.",
 ],
 veredicto:
 "Veredicto: Muros es la apuesta barata y tranquila del estuario. Buscaría vivienda con vistas claras al Nalón y fibra comprobada —es parcial—, apoyándome en Avilés para el día a día, tras probar un noviembre de niebla y un agosto suave en Aguilar. Se ganan miradores, precio bajo y aeropuerto a diez minutos; se aceptan servicios 3/10, coche casi cada día y San Agustín a veinte.",
 },
 fotoIdentidad: {
 src: "/fotos/asturias-centro/muros-de-nalon-identidad.jpg",
 pie: "San Esteban (Muros de Nalón): casas del puerto frente al estuario, con el monte detrás",
 },
 fotosAbrir: [
 { src: "/fotos/asturias-centro/muros-miradores.jpg", pie: "Miradores de Muros de Nalón" },
 { src: "/fotos/asturias-centro/muros-ria.jpg", pie: "Desembocadura del Nalón desde Muros" },
 ],
 fotosHistoria: [
 { src: "/fotos/asturias-centro/muros-villa.jpg", pie: "Muros de Nalón: villa sobre el estuario" },
 { src: "/fotos/asturias-centro/muros-selgas.jpg", pie: "Quinta de Selgas, en El Pito" },
 ],
 fotosFuera: [
 { src: "/fotos/asturias-centro/muros-paseo.jpg", pie: "Paseo en Muros de Nalón" },
 { src: "/fotos/asturias-centro/muros-nalon.jpg", pie: "Estuario del Nalón" },
 ],
 creditoFotos: credito,
 }
```

### 3.2 Capa 2026 completa

> CITA LITERAL — fila `slug: "muros-de-nalon"` en `web/src/data/municipios-asturias-centro.json`.  
> Autoridad factual. No rellenar null/`…` truncados.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `null` *(n.d. / ausente)* |
| `A_3hab` | `null` *(n.d. / ausente)* |
| `B_2hab` | `null` *(n.d. / ausente)* |
| `B_3hab` | `null` *(n.d. / ausente)* |
| `advertenciaMicrozona` | Muros y San Esteban de Pravia deben distinguirse. |
| `aeropuertoMin` | `10` |
| `aeropuertoPractico2026` | Asturias 7 km · 10 min (Palma: verano) Tiempo histórico orientativo: ~10 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Asturias 7 km · 10 min (Palma: verano) |
| `autonomiaCotidiana` | MEDIA-BAJA |
| `casaQueBuscar` | Vivienda cómoda y accesible, 2–3 dormitorios, exterior, servicios cotidianos ... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Más húmedo / nublado |
| `comunicaciones` | A-8 / N-632; tren FEVE |
| `comunicacionesNota10` | `6` |
| `cubiertos` | `165` |
| `dependenciaCocheTexto` | Media-alta. |
| `despejados` | `42` |
| `estacionalidad2026` | Vida local anual, pequeña escala. |
| `fibra` | Parcial |
| `franja` | A |
| `hospitalMin` | `20` |
| `hospitalPractico2026` | 19 km · 20 min · San Agustín (Avilés) Tiempo histórico orientativo: ~20 min. Conservar como referencia práctica orientativa, no como garantía de adscripción. |
| `hospitalPriv` | 35 km · 40 min · Centro Médico de Asturias (Oviedo) |
| `hospitalPub` | 19 km · 20 min · San Agustín (Avilés) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 19 km · 20 min · San Agustín (Avilés); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `80` |
| `lat` | `43.548` |
| `lluviaDias` | `148` |
| `lluviaMm` | `1100` |
| `lon` | `-6.101` |
| `mapa` | 52_muros_de_nalon.png |
| `mercadoReventa` | Mercado estrecho o de muestra limitada: la salida depende mucho del producto.... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `5` |
| `minCosta` | `4` |
| `municipio` | Muros de Nalón |
| `n` | `52` |
| `niebla` | Media |
| `obraNueva` | No |
| `pais` | España |
| `palmaDirecta2026` | Asturias: Palma figura entre destinos publicados en 2026; programación/temporada variable, comprobar antes de viajar. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Asturias (verano) · 10 min |
| `paseoCotidiano` | San Esteban ofrece paseo portuario e industrial; los miradores y rutas costeras añaden desnivel. |
| `paseoPendienteTopografia` | Las rutas panorámicas no son equivalentes a paseo llano cotidiano. |
| `peajeRealidad` | Interés paisajístico/industrial a cambio de servicios limitados y coche. |
| `playaBano` | Aguilar |
| `playaCotidiana` | NO |
| `playaCotidianaModo` | Puerto/estuario en San Esteban; las playas requieren salida. |
| `precioM2` | `null` *(n.d. / ausente)* |
| `provincia` | Asturias |
| `radioCotidiano` | Servicios básicos de concejo; San Esteban aporta puerto y patrimonio industrial. |
| `radioSalida` | Costa, playas y miradores; Avilés para mayor escala. |
| `sanidadPrimaria2026` | Atención primaria local |
| `servicios` | `3` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | Falta: comercio grande (Avilés / Pravia) |
| `slug` | muros-de-nalon |
| `solHoras` | `1800` |
| `tempAgua` | 19-21 |
| `tempInvierno` | `9.5` |
| `tempVerano` | `19.0` |
| `transporteRelevante2026` | A-8 / N-632; tren FEVE Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es 19 km · 20 min · San Agustín (Avilés). |
| `viento` | Media |
| `zona` | Asturias Centro |

### 3.3 Auditorías / plan existentes

**NO existe** `docs/PLAN_EDITORIAL_ASTURIAS_CENTRO_2026.md` ni `PLAN_EDITORIAL_ASTURIAS_ORIENTE_2026.md` (ni equivalente CURSOR_19 para Centro/Oriente).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n correspondiente):

```
| 52 | Muros de Nalón | Asturias Centro | precio n.d. en ficha pero relato cita €/m² [1100, 1100] | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | lenguaje vago/revisar: tranquilo | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 52 | Muros de Nalón | Asturias Centro | no | — |
```

**estudio_zonas.md** (histórico/contexto — **NO** sustituye capa 2026): extracto de zona en §1; detalle municipal bajo demanda en el estudio. Snippet zona:

<details><summary>Contexto estudio (recorte)</summary>

## 11. Asturias Centro (Asturias) · Cudillero, Muros de Nalón, Soto del Barco, Salinas (Castrillón), Luanco (Gozón), Candás (Carreño), Gijón

### La zona

La costa del área metropolitana asturiana: Gijón (270.000 hab.), Avilés (77.000) y Oviedo (220.000, con el HUCA) a 10-30 minutos de cualquier punto, y el aeropuerto de Asturias en Santiago del Monte (Castrillón), a 10 min de Salinas. Cudillero es el pueblo colgado de postal; Muros y Soto del Barco, el estuario tranquilo del Nalón; Salinas, la villa-playa residencial de chalés y casas bajas junto a Avilés; Luanco y Candás, villas marineras del Cabo Peñas; Gijón, la ciudad de mar de Asturias.

Es la zona con mejor logística del Cantábrico occidental (aeropuerto, tres ciudades, cuatro hospitales) y con dos matices: cielo cantábrico y una industria pesada (siderurgia de Avilés y Gijón, central y cementera de Aboño) que se nota en el aire según el viento.

### Clima mes a mes

| | Oct-Mar | Abr-May | Jun-Sep | Año |
|---|---|---|---|---|
| Días de lluvia al mes | 14-16 | 12-13 | 8-10 | 145-150 |
| Máxima / mínima típica | 13 / 6 °C (ene.) | 16 / 9 °C | 23 / 16 °C (jul.) | |
| Horas de sol al mes | 70-100 | 160-190 | 200-230 | 1.780-1.…

</details>


### 3.4 Auditoría relato ↔ capa

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | **3/10** repetido | `servicios` **3**; falta comercio grande (Avilés/Pravia) | DUPLICA_CAPA | Omitir chip; narrar MEDIA-BAJA |
| Precio / «barato» / más bajos | «poco dinero», «apuesta barata», «el precio»; auditoría histórica citaba €/m² con ficha n.d. | `precioM2` **`null`** (n.d.); A/B null | OBSOLETO (si cifra) / ALINEADO (si omisión) | **Conservar n.d.** No inventar media ni reponer 1100. Cualquier ranking de precio = NO_SOPORTADO |
| Playa cotidiana | Aguilar ~5′ como playa cercana; miradores como paseo diario | `playaCotidiana` **NO**; baño Aguilar | ALINEADO | No vender playa urbana; Aguilar = salida corta |
| Paseo: miradores ≠ llano | Ruta de los Miradores como paseo de diario | `paseoCotidiano` San Esteban puerto; miradores con desnivel; `paseoPendienteTopografia` panorámicas ≠ llano | SOPORTADO_PERO_INFRAUSADO | Separar San Esteban portuario vs miradores con pendiente |
| Microzona Muros vs San Esteban | Poco explícita en relato | `advertenciaMicrozona` Muros y San Esteban deben distinguirse | SOPORTADO_PERO_INFRAUSADO | Advertir microzona sin inventar |
| Hospital / aero | San Agustín ~20′; Asturias ~10′ | hospitalMin 20; aeropuertoMin 10 | ALINEADO / DUPLICA_CAPA | Consecuencia una vez |
| Aeropuerto / Palma | Minutos aero + Palma verano (a veces suena permanente) | `aeropuertoMin` + `palmaDirecta2026` temporada variable | DUPLICA_CAPA / ALINEADO | Consecuencia una vez; no permanente Palma; omitir cascada de minutos |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos abrir→tiempo→encaja | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| CURSOR_28 control: precioM2 null + playa NO + San Esteban | Ranking barato / playa cercana / miradores | null / NO / advertencia microzona | OBSOLETO + ALINEADO | Prioridad: no inventar precio; no vender playa; glosar San Esteban |

### 3.5 P4 / identidad

| Elemento | Qué es | Por qué importa | Cotidiano/salida | Soporte repo | Preservar |
|---|---|---|---|---|---|
| Desembocadura Nalón | Estuario oeste | Silencio de orilla | Cotidiano (mirar/caminar) | relato | sí |
| Ruta de los Miradores | Siete miradores | Paseo con desnivel ≠ llano | Cotidiano/extensión | paseo + pendiente | sí |
| San Esteban de Pravia | Puerto/industrial | Microzona distinta | Cotidiano si se vive allí | advertenciaMicrozona | sí |
| Aguilar | Playa cercana | Baño no urbano en Muros | Salida | playa NO | sí |
| Quinta de Selgas | Patrimonio cercano | Cultura comarcal | Salida | relato | sí |
| Avilés / Pravia | Comercio grande | Autonomía limitada | Salida | servicios 3 | sí |

### 3.6 Vida cotidiana soportada

Pregunta guía: *Ya vivo aquí. Tengo toda la mañana libre. ¿Qué puedo hacer con mi día sin convertirlo en turismo?*

| Elemento | Clasificación | Base repo |
|---|---|---|
| Miradores Nalón | YA SOPORTADO (con desnivel) | paseo + pendiente |
| San Esteban puerto | SOPORTADO PERO FALTA EN RELATO | advertencia + paseo |
| Aguilar | YA SOPORTADO (salida) | playa NO |
| Comercio grande local | NO SOPORTADO | servicios 3 |
| Precio €/m² concreto | NO SOPORTADO | precioM2 null |
| Nombre café/mercado | NO SOPORTADO | — |

### 3.7 Reality toll

Solo peajes estructurales **soportados** en repo:

- Coche media-alta; comercio grande fuera
- Hospital ~20′; aero ~10′
- Playa NO cotidiana en núcleo
- Miradores ≠ paseo llano
- Microzona Muros vs San Esteban
- Precio n.d. — no inventar
- Fibra parcial (relato)

### 3.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | «barato» / precio sin cifra fija actual; histórico auditoría [1100] | `null` **n.d. — conservar** | **MUST keep n.d.** |
| A/B | — | `null` | No derivar |
| Ranking «más bajos» | Impícito | — | NO_SOPORTADO_NO_INVENTAR |

### 3.9 Clima: deuda / duplicación

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en tiempo + encaja (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `muros-de-nalon` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_28.**

**Sin correcciones en este bloque: sí.**

### 3.10 Mar / paseo

- **Mar/baño:** Aguilar (salida). `playaCotidiana` = **NO**.
- **Paseo:** San Esteban portuario vs **miradores con desnivel** (≠ llano).
- No vender «playa + paseo residencial» tipo Salinas.

### 3.11 No soportado / no inventar

- Cualquier `precioM2` inventado o 1100 histórico
- Ranking «más barato de la zona» como hecho
- Playa cotidiana urbana
- Miradores = paseo llano sin desnivel
- Confundir Muros con San Esteban
- Palma permanente
## 4. Soto del Barco

### 4.1 Relato actual completo

> CITA LITERAL — clave `soto-del-barco` en `web/src/lib/relatos-asturias-centro.ts`.

```ts
soto-del-barco: {
    escala: "Estuario del Nalón",
    abrir: [
      "Soto del Barco reúne unos cuatro mil habitantes en el estuario del Nalón, frente a Muros: San Juan de la Arena —pueblo marinero de desembocadura, tradición de angulas—, la playa larga de Los Quebrantos y el castillo de San Martín sobre la orilla. No es ciudad ni villa-paseo residencial tipo Salinas; es orilla de ría con playa usable, Avilés a unos quince minutos y un ritmo que baja cuando acaba agosto.",
      "Un martes de noviembre los servicios son 4/10: lo básico en el municipio; Avilés cubre el resto. San Agustín queda a unos veinte minutos. El aeropuerto de Asturias está a unos diez —junto a Muros y Salinas, de los mejores tiempos de la zona—, con Palma en verano. El coche organiza la semana: estuario para vivir, ciudad para muchos recados.",
      "En verano Los Quebrantos y San Juan de la Arena reciben toallas, tráfico hacia la playa y algo de ruido de temporada. Las patronales locales animan el casco unos días. Fuera de agosto el estuario recupera calma: niebla media, humedad de ría y un silencio que no es el de una urbanización vacía, sino el de una desembocadura que vuelve a su escala.",
      "La población mezcla vecinos del concejo, gente que trabaja hacia Avilés y quienes eligieron playa larga y aeropuerto cercano sin pagar el metro de Gijón. Quien viva solo del municipio notará lo que falta; quien acepte Avilés a quince minutos encontrará una orilla más usable que el Cantábrico bravo de Peñas.",
      "Soto encaja para quien quiera estuario tranquilo, playa larga y aeropuerto a diez minutos, con precio todavía asequible —y con fibra parcial comprobada antes de comprar—.",
    ],
    tiempo: [
      "Soto registra unas 1.780 horas de sol y 42 días despejados, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.050 milímetros en unos 150 días. La niebla es media; el viento, bajo. El cielo sigue siendo cantábrico: se pierden casi mil horas de sol respecto a Baleares, concentradas en los meses grises.",
      "El verano ronda 19 °C, fresco frente a Baleares. Los Quebrantos tienen agua entre 19 y 21 °C; el estuario ofrece baño más usable que el Cantábrico abierto hacia el Cabo Peñas, aunque muchos días el paseo pese más que el chapuzón largo.",
    ],
    vivir: [
      "El invierno en casa se nota por la humedad de ría y la niebla media sobre el estuario: junto a Los Quebrantos o San Juan de la Arena hay que contar con salitre y humedad; hacia el interior, acceso y orientación. Conviene tocar paredes un día húmedo y no firmar solo con sol de folleto en la playa larga.",
      "Sin coche la semana se queda corta. Los servicios son 4/10: lo básico en el municipio; Avilés, a unos quince minutos, cubre el resto. En enero el estuario recupera calma —no es urbanización vacía, sino desembocadura a su escala—. Quien acepte Avilés para muchos recados encontrará orilla usable; quien quiera todo a pie, no.",
      "Conviven vecinos del concejo, gente que trabaja hacia Avilés y quienes eligieron playa larga y aeropuerto cercano. Se oye asturiano en el pueblo marinero y castellano en la compra; el castellano basta para lo cotidiano. La vida social pasa por San Juan de la Arena y el ritmo de estuario más que por una villa-paseo densa. En verano sube el volumen en Quebrantos; fuera de agosto vuelve el silencio de ría.",
      "La sanidad comarcal pide trayecto: San Agustín queda a unos veinte minutos; el privado Centro Médico de Asturias, en Oviedo, hacia los treinta y cinco. En el municipio hay lo básico; para urgencias y especialidades se baja a Avilés. Es estuario con hospital usable, no sanidad a la puerta de la playa.",
      "Mantener el vínculo con Mallorca es cómodo en trayecto: el aeropuerto de Asturias está a unos diez minutos —junto a Muros y Salinas, de los mejores tiempos—, con Palma en verano. En invierno conviene mirar el calendario real de vuelos, no solo el de agosto en Quebrantos.",
      "La vivienda típica es piso o casa de concejo hacia San Juan de la Arena y el estuario, sin obra nueva. La fibra es parcial —hay que comprobarla—. Junto a la playa hay que contar con ocupación de verano, salitre y humedad; se compra orilla usable y logística de aeropuerto, no la densidad de servicios de Salinas.",
    ],
    historia: [
      "San Juan de la Arena y el oficio marinero del estuario explican Soto: pueblo de desembocadura, angulas y playa larga, no de casco indiano denso ni de pueblo de foto turística. La relación con el Nalón —río, marea, oficio— es el hilo útil del lugar.",
      "El castillo de San Martín añade capa de frontera fluvial sobre la desembocadura: piedra y horizonte de estuario, recuerdo de control del paso del río. La historia aquí es de orilla y oficio, no de ciudad.",
      "Lo que queda para quien llega a vivir es esa escala de ría: pueblo marinero, playa larga y Avilés cerca, sin pretender ser la villa residencial de Castrillón ni la urbe de Gijón.",
    ],
    fuera: [
      "Los Quebrantos y San Juan de la Arena son la orilla de diario: playa larga a unos cinco minutos, agua entre 19 y 21 °C, toallas en agosto y espacio más usable fuera de temporada. El estuario permite paseo sin alejarse —marea, luz sobre el Nalón, ritmo de desembocadura—.",
      "Muros aporta la Ruta de los Miradores al otro lado del río: siete miradores sobre la misma boca fluvial, una tarde distinta sin salir del estuario. Salinas y Avilés quedan a un trayecto corto si se buscan paseo residencial, comercio o cultura.",
      "Cuando hay más tiempo, el mapa se abre hacia Cudillero y el Cabo Vidio al oeste, o hacia la costa de Peñas al este. El tiempo libre de Soto es playa de estuario primero; ciudad y costa abierta, después.",
    ],
    casa: [
      "El entorno de San Juan de la Arena y el estuario ofrecen viviendas de villa y parroquia: pisos y casas de concejo, sin obra nueva. La fibra es parcial. Junto a la playa hay que contar con ocupación de verano, salitre y humedad; hacia el interior del estuario, acceso y distancia real a Avilés.",
      "El precio medio ronda 1.200 €/m². Tres habitaciones en la franja asequible se sitúan alrededor de 140.000 euros. Se compra orilla usable y logística de aeropuerto; no se compra la densidad de servicios de Salinas.",
      "Los servicios son 4/10. San Agustín queda a unos veinte minutos; el privado Centro Médico de Asturias, en Oviedo, hacia los treinta y cinco. El aeropuerto de Asturias está a unos diez minutos, con Palma en verano. Avilés, a unos quince, resuelve muchos recados de la semana.",
    ],
    encaja: {
      si: [
        "Encaja para quien quiera vivir el estuario del Nalón con playa larga todo el año —San Juan de la Arena, pueblo marinero de angulas; Los Quebrantos a unos cinco minutos; el castillo de San Martín sobre la desembocadura— y acepte que no es ciudad ni villa-paseo residencial. Un martes de noviembre los servicios son 4/10: lo básico en el municipio; Avilés, a unos quince minutos, cubre el resto. Quien priorice orilla de ría usable, aeropuerto a unos diez minutos (Asturias, con Palma en verano) y precio todavía asequible —alrededor de 1.200 €/m²; tres habitaciones cerca de 140.000 euros— encontrará aquí calma de estuario frente al anfiteatro de Cudillero o la densidad de Gijón. El agua en Los Quebrantos anda entre 19 y 21 °C; el baño es más usable que en el Cantábrico bravo de Peñas.",
        "El clima sigue siendo cantábrico, no balear: unas 1.780 horas de sol y 42 días despejados frente a las 2.800 horas y 120 jornadas claras de Mallorca; caen alrededor de 1.050 milímetros en unos 150 días, con niebla media y viento bajo. El verano ronda 19 °C: se gana frescura y se acepta cielo gris frecuente. En verano Los Quebrantos y San Juan de la Arena reciben toallas, tráfico hacia la playa y algo de ruido de temporada; fuera de agosto el estuario recupera silencio. Encaja si has visto un martes de noviembre vacío y un sábado de agosto en Quebrantos y siga queriendo esa orilla —con fibra parcial comprobada— a cambio de no tener Salinas a la puerta.",
      ],
      no: [
        "No encaja si se busca villa-playa residencial con paseo de casas bajas como Salinas o ciudad completa como Gijón. Soto ofrece estuario y playa larga, no comercio denso ni hospital a la vuelta de la esquina: San Agustín queda a unos veinte minutos; el privado Centro Médico de Asturias, en Oviedo, hacia los treinta y cinco. Los servicios 4/10 y la fibra parcial no se arreglan eligiendo otra calle junto a San Juan de la Arena.",
        "Tampoco si el cielo de Baleares es imprescindible o si se necesita vida diaria sin coche. Aquí mandan cubierto (unos 165 días), niebla media y verano fresco; Avilés resuelve muchos recados. Quien se decida solo tras un día soleado en Los Quebrantos, sin probar ocupación de temporada ni un noviembre de ría, se llevará una sorpresa.",
      ],
      veredicto:
        "Veredicto: Soto es la apuesta de estuario y playa larga. Buscaría tres habitaciones hacia San Juan de la Arena o el estuario, con fibra comprobada —es parcial—, tras probar un agosto en Quebrantos y un martes de noviembre. Se ganan aeropuerto a diez minutos, Avilés a quince y precio asequible; se aceptan servicios 4/10, cielo cantábrico y San Agustín a veinte.",
    },
    fotosAbrir: [
      { src: "/fotos/asturias-centro/soto-arena.jpg", pie: "San Juan de la Arena, Soto del Barco" },
      { src: "/fotos/asturias-centro/soto-villa.jpg", pie: "Soto del Barco hacia el estuario" },
    ],
    fotosHistoria: [
      { src: "/fotos/asturias-centro/soto-castillo.jpg", pie: "Castillo de San Martín, Soto del Barco" },
      { src: "/fotos/asturias-centro/soto-estuario.jpg", pie: "Estuario del Nalón en Soto del Barco" },
    ],
    fotosFuera: [
      { src: "/fotos/asturias-centro/soto-playa.jpg", pie: "Playa en Soto del Barco" },
      { src: "/fotos/asturias-centro/soto-quebrantos.jpg", pie: "Los Quebrantos, San Juan de la Arena" },
    ],
    creditoFotos: credito,
  }
```

### 4.2 Capa 2026 completa

> CITA LITERAL — fila `slug: "soto-del-barco"` en `web/src/data/municipios-asturias-centro.json`.  
> Autoridad factual. No rellenar null/`…` truncados.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `100133` |
| `A_3hab` | `138645` |
| `B_2hab` | `80876` |
| `B_3hab` | `111983` |
| `advertenciaMicrozona` | Soto del Barco y San Juan de la Arena tienen funciones distintas. |
| `aeropuertoMin` | `10` |
| `aeropuertoPractico2026` | Asturias 6 km · 10 min (Palma: verano) Tiempo histórico orientativo: ~10 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Asturias 6 km · 10 min (Palma: verano) |
| `autonomiaCotidiana` | MEDIA |
| `casaQueBuscar` | Vivienda cómoda y accesible, 2–3 dormitorios, exterior, servicios cotidianos ... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Más húmedo / nublado |
| `comunicaciones` | A-8 / N-632; tren FEVE; junto al aeropuerto |
| `comunicacionesNota10` | `7` |
| `cubiertos` | `165` |
| `dependenciaCocheTexto` | Media; menor dentro del núcleo para básicos. |
| `despejados` | `42` |
| `estacionalidad2026` | Vida local anual con verano más activo. |
| `fibra` | Parcial |
| `franja` | A |
| `hospitalMin` | `20` |
| `hospitalPractico2026` | 16 km · 20 min · San Agustín (Avilés) Tiempo histórico orientativo: ~20 min. Conservar como referencia práctica orientativa, no como garantía de adscripción. |
| `hospitalPriv` | 31 km · 35 min · Centro Médico de Asturias (Oviedo) |
| `hospitalPub` | 16 km · 20 min · San Agustín (Avilés) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 16 km · 20 min · San Agustín (Avilés); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `80` |
| `lat` | `43.527` |
| `lluviaDias` | `150` |
| `lluviaMm` | `1050` |
| `lon` | `-6.076` |
| `mapa` | 53_soto_del_barco.png |
| `mercadoReventa` | Mercado intermedio: base residencial propia y/o demanda exterior. Priorizar u... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `5` |
| `minCosta` | `5` |
| `municipio` | Soto del Barco |
| `n` | `53` |
| `niebla` | Media |
| `obraNueva` | No |
| `pais` | España |
| `palmaDirecta2026` | Asturias: Palma figura entre destinos publicados en 2026; programación/temporada variable, comprobar antes de viajar. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Asturias (verano) · 10 min |
| `paseoCotidiano` | Puerto y ribera en San Juan. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Buena escala pequeña, pero la oferta superior y parte de la costa exigen coche. |
| `playaBano` | Los Quebrantos (San Juan de la Arena) |
| `playaCotidiana` | PARCIAL |
| `playaCotidianaModo` | San Juan vive puerto/estuario; el baño de playa depende de salida/microzona. |
| `precioM2` | `1185` |
| `provincia` | Asturias |
| `radioCotidiano` | Ambos núcleos tienen básicos; San Juan añade puerto y relación directa con el Nalón. |
| `radioSalida` | Playas/costa y Avilés; servicios superiores fuera. |
| `sanidadPrimaria2026` | Atención primaria local |
| `servicios` | `4` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | Tiene: aeropuerto a 10 min. Falta: instituto de FP |
| `slug` | soto-del-barco |
| `solHoras` | `1780` |
| `tempAgua` | 19-21 |
| `tempInvierno` | `9.5` |
| `tempVerano` | `19.0` |
| `transporteRelevante2026` | A-8 / N-632; tren FEVE; junto al aeropuerto Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es 16 km · 20 min · San Agustín (Avilés). |
| `viento` | Baja |
| `zona` | Asturias Centro |

### 4.3 Auditorías / plan existentes

**NO existe** `docs/PLAN_EDITORIAL_ASTURIAS_CENTRO_2026.md` ni `PLAN_EDITORIAL_ASTURIAS_ORIENTE_2026.md` (ni equivalente CURSOR_19 para Centro/Oriente).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n correspondiente):

```
| 53 | Soto del Barco | Asturias Centro | — | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite €/m² ya en TablaPrecios/capa; repite horas de sol (+5) | lenguaje vago/revisar: tranquilo | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 53 | Soto del Barco | Asturias Centro | no | — |
```

**estudio_zonas.md** (histórico/contexto — **NO** sustituye capa 2026): extracto de zona en §1; detalle municipal bajo demanda en el estudio. Snippet zona:

<details><summary>Contexto estudio (recorte)</summary>

## 11. Asturias Centro (Asturias) · Cudillero, Muros de Nalón, Soto del Barco, Salinas (Castrillón), Luanco (Gozón), Candás (Carreño), Gijón

### La zona

La costa del área metropolitana asturiana: Gijón (270.000 hab.), Avilés (77.000) y Oviedo (220.000, con el HUCA) a 10-30 minutos de cualquier punto, y el aeropuerto de Asturias en Santiago del Monte (Castrillón), a 10 min de Salinas. Cudillero es el pueblo colgado de postal; Muros y Soto del Barco, el estuario tranquilo del Nalón; Salinas, la villa-playa residencial de chalés y casas bajas junto a Avilés; Luanco y Candás, villas marineras del Cabo Peñas; Gijón, la ciudad de mar de Asturias.

Es la zona con mejor logística del Cantábrico occidental (aeropuerto, tres ciudades, cuatro hospitales) y con dos matices: cielo cantábrico y una industria pesada (siderurgia de Avilés y Gijón, central y cementera de Aboño) que se nota en el aire según el viento.

### Clima mes a mes

| | Oct-Mar | Abr-May | Jun-Sep | Año |
|---|---|---|---|---|
| Días de lluvia al mes | 14-16 | 12-13 | 8-10 | 145-150 |
| Máxima / mínima típica | 13 / 6 °C (ene.) | 16 / 9 °C | 23 / 16 °C (jul.) | |
| Horas de sol al mes | 70-100 | 160-190 | 200-230 | 1.780-1.…

</details>


### 4.4 Auditoría relato ↔ capa

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | **4/10** repetido | `servicios` **4**; tiene aero 10′; falta FP | DUPLICA_CAPA | Omitir chip; narrar MEDIA |
| Precio 1200 + 140k | «precio medio ronda 1.200 €/m²»; «140.000 euros» asequible 3hab | `precioM2` **1185**; A_3hab 138645 | OBSOLETO | Omitir cifras; TablaPrecios. No fijar 1200/140k |
| Playa cotidiana | Los Quebrantos ~5′ como orilla de diario | `playaCotidiana` **PARCIAL**; baño Los Quebrantos (San Juan) | ALINEADO | No generalizar desde todo Soto; depender de San Juan |
| Microzona Soto vs San Juan | San Juan de la Arena enfatizado; poca advertencia explícita | `advertenciaMicrozona` Soto y San Juan funciones distintas | SOPORTADO_PERO_INFRAUSADO | Advertir microzona en vivir/casa |
| Hospital / aero | San Agustín ~20′; Asturias ~10′ | hospitalMin 20; aeropuertoMin 10 | ALINEADO / DUPLICA_CAPA | Una pasada |
| Aeropuerto / Palma | Minutos aero + Palma verano (a veces suena permanente) | `aeropuertoMin` + `palmaDirecta2026` temporada variable | DUPLICA_CAPA / ALINEADO | Consecuencia una vez; no permanente Palma; omitir cascada de minutos |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos abrir→tiempo→encaja | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| CURSOR_28 control: PARCIAL playa + microzona Soto/San Juan | Playa larga diaria + angulas | PARCIAL + advertencia | ALINEADO / P4_PRESERVAR | Preservar San Juan/Quebrantos; no igualar todo el concejo |

### 4.5 P4 / identidad

| Elemento | Qué es | Por qué importa | Cotidiano/salida | Soporte repo | Preservar |
|---|---|---|---|---|---|
| San Juan de la Arena | Pueblo marinero / angulas | Microzona distinta de Soto | Cotidiano si allí | advertenciaMicrozona | sí |
| Los Quebrantos | Playa larga | Orilla usable (PARCIAL) | Cotidiano parcial | playa PARCIAL | sí |
| Estuario Nalón | Boca fluvial frente a Muros | Escala y humedad | Cotidiano | relato | sí |
| Castillo San Martín | Hito sobre desembocadura | Identidad | Salida corta / mirar | relato | sí |
| Aeropuerto cercano | Asturias ~10′ | Logística | Cotidiano (acceso) | capa | sí |

### 4.6 Vida cotidiana soportada

Pregunta guía: *Ya vivo aquí. Tengo toda la mañana libre. ¿Qué puedo hacer con mi día sin convertirlo en turismo?*

| Elemento | Clasificación | Base repo |
|---|---|---|
| San Juan / ribera | YA SOPORTADO | paseo + microzona |
| Los Quebrantos | YA SOPORTADO (parcial) | playa PARCIAL |
| Básicos concejo | YA SOPORTADO (limitado) | servicios 4 |
| Totales A/B en prosa | NO SOPORTADO (viven en tabla) | capa |
| Horarios lonja angulas | NO SOPORTADO | — |

### 4.7 Reality toll

Solo peajes estructurales **soportados** en repo:

- Coche media; Avilés para resto
- Playa PARCIAL (San Juan / Quebrantos)
- Microzona Soto ≠ San Juan
- Hospital ~20′; aero ~10′
- Verano más activo en playa
- Fibra parcial

### 4.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | **1.200** en prosa | **1185** | OBSOLETO (~1185) |
| Asequible 3hab | **140.000** | A_3hab 138645 | OBSOLETO; no narrar totales |
| casaQueBuscar | Truncado genérico | `…` | DESEABLE |

### 4.9 Clima: deuda / duplicación

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en tiempo + encaja (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `soto-del-barco` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_28.**

**Sin correcciones en este bloque: sí.**

### 4.10 Mar / paseo

- **Mar/baño:** Los Quebrantos — `playaCotidiana` = **PARCIAL** (San Juan).
- **Paseo:** puerto/ribera San Juan; pendiente capa `null`.
- Separar Soto núcleo vs San Juan orilla.

### 4.11 No soportado / no inventar

- 1.200 €/m² y 140.000 en prosa
- Chip 4/10
- Igualar Soto = San Juan para playa
- Horarios de angulas/lonja
- Palma permanente
## 5. Salinas / Castrillón

### 5.1 Relato actual completo

> CITA LITERAL — clave `salinas-castrillon` en `web/src/lib/relatos-asturias-centro.ts`.

```ts
salinas-castrillon: {
 escala: "Villa-playa residencial",
 abrir: [
 "Salinas reúne unos cinco mil habitantes en la villa —unos veintitrés mil en el concejo de Castrillón—: playa de tres kilómetros con El Espartal y dunas, paseo caminable, Museo de Anclas en la Peñona, casas bajas y chalés de los años sesenta a dos mil. Es villa-playa residencial, no pueblo marinero de puerto cerrado ni ciudad. Avilés queda a diez minutos —casco histórico, Centro Niemeyer, comercio—; Piedras Blancas, la capital del concejo, a cinco.",
 "Un martes de noviembre se compra, se camina el paseo y se resuelve el día a día. Los servicios alcanzan 7/10: hay fibra, comercio útil y vida de villa que no se apaga fuera de agosto. San Agustín queda a unos diez minutos; el Hospital de Jove, en Gijón, a unos treinta. El aeropuerto de Asturias está a unos diez —el mejor tiempo junto a Muros y Soto—, con Palma en verano.",
 "En verano la playa y el paseo reciben veraneo: toallas, tráfico y aparcamiento justo en los días claros. El resto del año Salinas es villa residencial de clase media avilesina y ovetense: vecinos que trabajan en Avilés, Oviedo o el aeropuerto, familias y quienes eligieron casas bajas junto al mar sin mudarse a Gijón. La siderurgia de Avilés, a unos tres kilómetros, es un tema real a favor del viento del sur: conviene probar un día con ese aire antes de comprar.",
 "Bahínas, Arnao y Santa María del Mar amplían el mapa de Castrillón; la villa de Salinas concentra el carácter de urbanización junto al Cantábrico. Fuera de agosto sigue siendo villa completa y útil. Encaja como la opción práctica de Asturias Centro si se acepta el matiz industrial según el viento.",
 "Las estaciones cambian la densidad más que el funcionamiento. En invierno el paseo sigue abierto; en primavera vuelven las caminatas por El Espartal; en agosto la orilla se llena y el aparcamiento se pelea. Quien quiera esta villa debe conocerla un martes gris y un sábado de sol en la playa.",
 ],
 tiempo: [
 "Salinas suma unas 1.800 horas de sol y 42 días despejados, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.050 milímetros en unos 148 días. La niebla es baja; el viento, medio. Se pierden casi mil horas de sol respecto a Baleares: el trato no es frío extremo, sino cielo cubierto frecuente —unos 165 días—.",
 "El verano ronda 19 °C, fresco frente a Baleares: máximas habituales cerca de 23 °C y apenas uno a tres días sobre 30 °C. Salinas, El Espartal y Bahínas tienen agua entre 19 y 21 °C; la playa larga invita al paseo aunque el baño sea corto muchos días. El verano gana frescura frente al Mediterráneo y pide aceptar un julio que todavía puede mojar.",
 ],
 vivir: [
 "El invierno en casa se nota menos que en el estuario: niebla baja, paseo abierto y casas bajas que piden aislamiento frente a salitre y cielo cubierto frecuente. Conviene mirar orientación, calefacción y si la terraza sigue siendo usable entre noviembre y febrero. Visitar un martes gris y un día con viento del sur —la siderurgia de Avilés queda a unos tres kilómetros— enseña más que un sábado soleado en El Espartal.",
 "Sin coche se sostiene mucho: se compra, se camina el paseo y se resuelve el día a día; los servicios alcanzan 7/10 y hay fibra. En enero Salinas es villa residencial viva, no decorado de agosto. Piedras Blancas a cinco minutos y Avilés a diez cubren lo que la villa no resuelve sola; el coche ayuda, pero no es la única forma de vivir la semana.",
 "Conviven vecinos que trabajan en Avilés, Oviedo o el aeropuerto, familias y quienes eligieron casas bajas junto al mar. Se oye asturiano y castellano en el paseo y en el comercio; el castellano basta para lo cotidiano. La vida social pasa por la villa-playa y el ritmo de clase media avilesina y ovetense. Entre semana manda el ir y venir; en agosto la orilla se llena y el aparcamiento se pelea.",
 "La sanidad es de las mejores de la zona: San Agustín queda a unos diez minutos; el Hospital de Jove, en Gijón, a unos treinta. Empadronarse aquí abre centro de salud y farmacia en villa; para especialidades se baja a Avilés. Es hospital cercano de verdad, no trayecto de media hora forzado.",
 "Ir y volver a Mallorca es corto: el aeropuerto de Asturias está a unos diez minutos —el mejor tiempo junto a Muros y Soto—, con Palma en verano. En invierno el aeropuerto sigue a un salto, pero conviene mirar el calendario real de vuelos a Palma, no solo el de temporada alta.",
 "La vivienda típica es casa baja o chalé de los años sesenta a dos mil, con poca obra nueva y fibra. Junto al paseo hay que contar con ocupación de verano, salitre y aparcamiento; hacia el interior de la villa, orientación y distancia real a la playa. Hay que imaginar la manzana caminable en enero, no solo la foto de agosto.",
 ],
 historia: [
 "El paseo, las dunas de El Espartal y el Museo de Anclas en la Peñona explican Salinas como villa-playa de veraneo y residencia, no como pueblo marinero de puerto cerrado. Las casas bajas y chalés de los años sesenta a dos mil marcan el carácter de urbanización junto al mar: orilla usable, trama residencial y logística cercana.",
 "Avilés cercano —casco histórico y Centro Niemeyer— añade capa de ciudad a diez minutos: comercio, cultura contemporánea y hospital. Lo que conviene saber de Salinas es de orilla residencial y área metropolitana, no de fortaleza ni de pueblo de foto turística.",
 "Lo que queda para quien llega a vivir es esa ecuación: playa de tres kilómetros, villa caminable y Avilés al lado, con la industria como matiz real del aire según el viento del sur.",
 ],
 fuera: [
 "El paseo, la playa de Salinas–El Espartal y el Museo de Anclas son la tarde de diario: tres kilómetros de arena y dunas, agua entre 19 y 21 °C, y una Peñona que concentra memoria marinera sin exigir coche. Es el tiempo libre que justifica la villa.",
 "Bahínas, Arnao y Santa María del Mar amplían Castrillón cuando se quiere otra orilla o otro ritmo dentro del concejo. El Espartal invita a caminar las dunas aunque el baño sea corto: el paseo pesa tanto como el chapuzón.",
 "Avilés cubre comercio y cultura a diez minutos. Soto y Muros aportan estuario del Nalón; Luanco, villa marinera hacia el Cabo Peñas. El mapa de ocio es playa residencial primero; ciudad y costa abierta, a un trayecto corto.",
 ],
 casa: [
 "Predominan casas bajas y chalés; hay poca obra nueva y fibra. Junto al paseo hay que contar con ocupación de verano, salitre y aparcamiento; hacia el interior de la villa, orientación, distancia real a la playa y si la manzana sigue siendo caminable en enero.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros. La franja media puede ser chalé reformado o vivienda más cerca del paseo. La facilidad de venta es alta en el área; el precio compra villa-playa y logística, no silencio garantizado en agosto.",
 "Los servicios son 7/10. San Agustín queda a unos diez minutos; Jove, en Gijón, a unos treinta. El aeropuerto de Asturias está a unos diez minutos, con Palma en verano. Piedras Blancas y Avilés completan lo que la villa no resuelve sola.",
 ],
 encaja: {
 si: [
 "Encaja para quien quiera vivir el mar todo el año en villa-playa residencial —playa de tres kilómetros con El Espartal y dunas; paseo caminable; Museo de Anclas en la Peñona; casas bajas y chalés— y priorice logística frente a foto típica. Un martes de noviembre se compra, se camina el paseo y se resuelve el día a día: los servicios alcanzan 7/10, hay fibra, Avilés queda a unos diez minutos (casco histórico, Centro Niemeyer, comercio) y Piedras Blancas a cinco. Quien busque hospital y aeropuerto a unos diez minutos —San Agustín en Avilés; Asturias con Palma en verano— encontrará aquí la ecuación más completa de Asturias Centro. Salinas, El Espartal y Bahínas tienen agua entre 19 y 21 °C; la playa larga invita al paseo aunque el baño sea corto muchos días.",
 "El clima sigue lejos de Mallorca: unas 1.800 horas de sol y 42 días despejados frente a las 2.800 horas y 120 jornadas claras de la isla; caen alrededor de 1.050 milímetros en unos 148 días, con niebla baja y viento medio. El verano ronda 19 °C: se gana frescura frente al calor mediterráneo y se acepta cielo cubierto frecuente. En verano la playa y el paseo reciben veraneo —toallas, tráfico, aparcamiento justo en los días claros—; el resto del año Salinas es villa residencial de clase media avilesina y ovetense. Encaja quien acepte la siderurgia de Avilés a unos tres kilómetros según el viento del sur a cambio de esa orilla usable y esa logística: ",
 ],
 no: [
 "No encaja si el aire limpio junto a Avilés debe estar garantizado todos los días. La siderurgia a unos tres kilómetros es un tema real a favor del viento del sur; eso no se arregla eligiendo otra manzana del paseo. Tampoco si se busca el pueblo colgado de foto turística como Cudillero o el silencio extremo del estuario de Muros: Salinas es villa útil, no anfiteatro ni retiro mínimo.",
 "Tampoco si se necesita el sol de Baleares. Aquí hay unas 1.800 horas de sol y unos 165 cubiertos frente a Mallorca; el verano es fresco y el baño, a menudo corto. Quien se decida solo tras un sábado soleado en El Espartal, sin probar un día con viento del sur ni un noviembre de paseo gris, descubrirá el trato completo demasiado tarde. El hospital privado Jove, en Gijón, queda a unos treinta minutos si San Agustín no basta.",
 ],
 veredicto:
 "Veredicto: Salinas es la elección práctica de Asturias Centro. Buscaría casa baja o chalé caminable al paseo —franja asequible alrededor de 199.000 euros—, tras probar un día con viento del sur y un agosto en la playa. Se ganan aeropuerto y San Agustín a diez minutos, villa residencial y Avilés cerca; se aceptan cielo cantábrico y la industria cercana como parte del trato.",
 },
 fotoIdentidad: {
 src: "/fotos/asturias-centro/salinas-castrillon-identidad.jpg",
 pie: "Salinas: casas y chalés frente al Cantábrico, con el cabo detrás",
 },
 fotosAbrir: [
 { src: "/fotos/asturias-centro/salinas-playa.jpg", pie: "Playa de Salinas" },
 { src: "/fotos/asturias-centro/salinas-paseo.jpg", pie: "Paseo de Salinas" },
 ],
 fotosHistoria: [
 { src: "/fotos/asturias-centro/salinas-anclas.jpg", pie: "Museo de Anclas, Peñona de Salinas" },
 { src: "/fotos/asturias-centro/salinas-chalets.jpg", pie: "Casas bajas y chalés en Salinas" },
 ],
 fotosFuera: [
 { src: "/fotos/asturias-centro/salinas-dunas.jpg", pie: "El Espartal desde el paseo, Salinas" },
 { src: "/fotos/asturias-centro/salinas-aviles.jpg", pie: "Avilés, a minutos de Salinas" },
 ],
 creditoFotos: credito,
 }
```

### 5.2 Capa 2026 completa

> CITA LITERAL — fila `slug: "salinas-castrillon"` en `web/src/data/municipios-asturias-centro.json`.  
> Autoridad factual. No rellenar null/`…` truncados.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `272597` |
| `A_3hab` | `377442` |
| `B_2hab` | `220175` |
| `B_3hab` | `304857` |
| `advertenciaMicrozona` | Salinas y Piedras Blancas no son intercambiables: playa/paseo frente a mayor concentración de servicios. |
| `aeropuertoMin` | `10` |
| `aeropuertoPractico2026` | Asturias 8 km · 10 min (Palma: verano) Tiempo histórico orientativo: ~10 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Asturias 8 km · 10 min (Palma: verano) |
| `autonomiaCotidiana` | MEDIA-FUERTE SEGÚN MICROZONA |
| `casaQueBuscar` | Ascensor/sin barreras, exterior y acceso realmente caminable a playa/paseo y ... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Más húmedo / nublado |
| `comunicaciones` | A-8 / AS-19; bus frecuente a Avilés |
| `comunicacionesNota10` | `7` |
| `cubiertos` | `165` |
| `dependenciaCocheTexto` | Media: menor para playa en Salinas, pero servicios se reparten con Piedras Blancas. |
| `despejados` | `42` |
| `estacionalidad2026` | Residencial anual con fuerte uso estival de playa. |
| `fibra` | Sí |
| `franja` | A |
| `hospitalMin` | `10` |
| `hospitalPractico2026` | 5 km · 10 min · San Agustín (Avilés) Tiempo histórico orientativo: ~10 min. Conservar como referencia práctica orientativa, no como garantía de adscripción. |
| `hospitalPriv` | 27 km · 30 min · Hospital de Jove (Gijón) |
| `hospitalPub` | 5 km · 10 min · San Agustín (Avilés) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 5 km · 10 min · San Agustín (Avilés); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `80` |
| `lat` | `43.575` |
| `lluviaDias` | `148` |
| `lluviaMm` | `1050` |
| `lon` | `-5.958` |
| `mapa` | 54_salinas.png |
| `mercadoReventa` | Mercado intermedio: base residencial propia y/o demanda exterior. Priorizar u... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | Salinas tiene prima residencial notable frente al conjunto de Castrillón/Piedras Blancas. |
| `minBano` | `2` |
| `minCosta` | `1` |
| `municipio` | Salinas (Castrillón) |
| `n` | `54` |
| `niebla` | Baja |
| `obraNueva` | Poca |
| `pais` | España |
| `palmaDirecta2026` | Asturias: Palma figura entre destinos publicados en 2026; programación/temporada variable, comprobar antes de viajar. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Asturias (verano) · 10 min |
| `paseoCotidiano` | Paseo de Salinas y sistema dunar de El Espartal. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Playa extraordinariamente cotidiana, pero servicios repartidos y transición industrial/portuaria próxima. |
| `playaBano` | Salinas / El Espartal / Bahínas |
| `playaCotidiana` | SÍ |
| `playaCotidianaModo` | Salinas y El Espartal forman una gran playa/duna directamente integrada en la vida local. |
| `precioM2` | `3226` |
| `provincia` | Asturias |
| `radioCotidiano` | Salinas prioriza playa y paseo; Piedras Blancas concentra más comercio y servicios. |
| `radioSalida` | Avilés y servicios mayores; costa de Castrillón. |
| `sanidadPrimaria2026` | Atención primaria en el concejo |
| `servicios` | `7` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | Tiene: Avilés (hospital) a 10 min, aeropuerto a 10 min, paseo largo |
| `slug` | salinas-castrillon |
| `solHoras` | `1800` |
| `tempAgua` | 19-21 |
| `tempInvierno` | `9.5` |
| `tempVerano` | `19.0` |
| `transporteRelevante2026` | A-8 / AS-19; bus frecuente a Avilés Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es 5 km · 10 min · San Agustín (Avilés). |
| `viento` | Media |
| `zona` | Asturias Centro |

### 5.3 Auditorías / plan existentes

**NO existe** `docs/PLAN_EDITORIAL_ASTURIAS_CENTRO_2026.md` ni `PLAN_EDITORIAL_ASTURIAS_ORIENTE_2026.md` (ni equivalente CURSOR_19 para Centro/Oriente).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n correspondiente):

```
| 54 | Salinas (Castrillón) | Asturias Centro | precio relato ~1700 vs ficha 3226 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 54 | Salinas (Castrillón) | Asturias Centro | no | — |
```

**estudio_zonas.md** (histórico/contexto — **NO** sustituye capa 2026): extracto de zona en §1; detalle municipal bajo demanda en el estudio. Snippet zona:

<details><summary>Contexto estudio (recorte)</summary>

## 11. Asturias Centro (Asturias) · Cudillero, Muros de Nalón, Soto del Barco, Salinas (Castrillón), Luanco (Gozón), Candás (Carreño), Gijón

### La zona

La costa del área metropolitana asturiana: Gijón (270.000 hab.), Avilés (77.000) y Oviedo (220.000, con el HUCA) a 10-30 minutos de cualquier punto, y el aeropuerto de Asturias en Santiago del Monte (Castrillón), a 10 min de Salinas. Cudillero es el pueblo colgado de postal; Muros y Soto del Barco, el estuario tranquilo del Nalón; Salinas, la villa-playa residencial de chalés y casas bajas junto a Avilés; Luanco y Candás, villas marineras del Cabo Peñas; Gijón, la ciudad de mar de Asturias.

Es la zona con mejor logística del Cantábrico occidental (aeropuerto, tres ciudades, cuatro hospitales) y con dos matices: cielo cantábrico y una industria pesada (siderurgia de Avilés y Gijón, central y cementera de Aboño) que se nota en el aire según el viento.

### Clima mes a mes

| | Oct-Mar | Abr-May | Jun-Sep | Año |
|---|---|---|---|---|
| Días de lluvia al mes | 14-16 | 12-13 | 8-10 | 145-150 |
| Máxima / mínima típica | 13 / 6 °C (ene.) | 16 / 9 °C | 23 / 16 °C (jul.) | |
| Horas de sol al mes | 70-100 | 160-190 | 200-230 | 1.780-1.…

</details>


### 5.4 Auditoría relato ↔ capa

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | **7/10** repetido | `servicios` **7**; Avilés/aero/paseo | DUPLICA_CAPA | Omitir chip; narrar MEDIA-FUERTE SEGÚN MICROZONA |
| Precio ~1700 vs 3226 EXTREME | casa remite + «000 euros»; veredicto ~199.000 asequible; auditoría ~1700 | `precioM2` **3226**; A_3hab 377442; `microzonaPrecio` prima Salinas | OBSOLETO | Desvío extremo. Omitir cifras históricas; capa es autoridad; narrar cara/prima orilla sin inventar |
| Prosa rota «000 euros» | Tras remitir a capa queda fragmento «000 euros» (y a veces totales sueltos) | Cifras viven en `precioM2` / A/B / TablaPrecios | OBSOLETO | Borrar resto roto; no reponer €/m² históricos en prosa |
| Playa cotidiana | Espartal / 3 km / paseo diario | `playaCotidiana` **SÍ**; Salinas/Espartal/Bahínas | ALINEADO / P4_PRESERVAR | Preservar playa+paseo; peaje verano/aparcamiento |
| Microzona Salinas vs Piedras Blancas | Piedras Blancas a 5′ mencionada; poca advertencia de precio | `advertenciaMicrozona` no intercambiables; `microzonaPrecio` prima Salinas | SOPORTADO_PERO_INFRAUSADO | Separar playa/paseo vs servicios/precio Piedras Blancas |
| Hospital / aero | San Agustín ~10′; Asturias ~10′ | hospitalMin 10; aeropuertoMin 10 | ALINEADO / DUPLICA_CAPA | Consecuencia; no cascada |
| Aeropuerto / Palma | Minutos aero + Palma verano (a veces suena permanente) | `aeropuertoMin` + `palmaDirecta2026` temporada variable | DUPLICA_CAPA / ALINEADO | Consecuencia una vez; no permanente Palma; omitir cascada de minutos |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos abrir→tiempo→encaja | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| CURSOR_28 control: precio EXTREME + playa SÍ Espartal + microzona | ~1700 / 199k / orilla residencial | 3226 + microzonaPrecio | OBSOLETO + ALINEADO | Prioridad P0 precio; preservar Espartal |

### 5.5 P4 / identidad

| Elemento | Qué es | Por qué importa | Cotidiano/salida | Soporte repo | Preservar |
|---|---|---|---|---|---|
| Paseo de Salinas | Frente peatonal | Vida villa-playa | Cotidiano | paseoCotidiano | sí |
| El Espartal | Sistema dunar | Playa SÍ integrada | Cotidiano | playa SÍ | sí |
| Museo de Anclas / Peñona | Hito local | Identidad | Cotidiano/tarde | relato | sí |
| Piedras Blancas | Núcleo de servicios del concejo | Microzona ≠ playa | Cotidiano gestiones | advertencia + microzonaPrecio | sí |
| Avilés / industria | Ciudad + siderurgia cercana | Logística + peaje aire | Salida / peaje | relato | sí |

### 5.6 Vida cotidiana soportada

Pregunta guía: *Ya vivo aquí. Tengo toda la mañana libre. ¿Qué puedo hacer con mi día sin convertirlo en turismo?*

| Elemento | Clasificación | Base repo |
|---|---|---|
| Paseo + Espartal | YA SOPORTADO | playa SÍ + paseo |
| Compra/villa enero | YA SOPORTADO | autonomia + servicios 7 |
| Piedras Blancas servicios | SOPORTADO PERO INFRAUSADO | advertencia |
| Prima precio Salinas | SOPORTADO PERO INFRAUSADO | microzonaPrecio |
| Nombre café concreto | NO SOPORTADO | — |

### 5.7 Reality toll

Solo peajes estructurales **soportados** en repo:

- Precio 2026 muy alto (3226) — peaje de mercado
- Microzona Salinas vs Piedras Blancas (servicios/precio)
- Verano playa/aparcamiento
- Industria Avilés / viento sur (aire)
- Hospital/aero ~10′ (ventaja)
- Servicios repartidos concejo

### 5.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | Auditoría ~1700; «000 euros»; veredicto ~199k | **3226** | **EXTREME** desvío |
| microzonaPrecio | Infrausado | Prima Salinas vs Castrillón/Piedras Blancas | Crucial |
| A_3hab | — | 377442 | Fuera orilla habitual si se narra tipología cara |

### 5.9 Clima: deuda / duplicación

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en tiempo + encaja (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `salinas-castrillon` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_28.**

**Sin correcciones en este bloque: sí.**

### 5.10 Mar / paseo

- **Mar/baño:** Salinas / Espartal / Bahínas — **SÍ**.
- **Paseo:** paseo de Salinas + dunas Espartal (integrados).
- Microzona: playa/paseo Salinas ≠ servicios Piedras Blancas.

### 5.11 No soportado / no inventar

- ~1700 o 199k como media vigente
- Ignorar 3226 / prima Salinas
- Chip 7/10
- Garantizar aire limpio todos los días
- Palma permanente
## 6. Luanco / Gozón

### 6.1 Relato actual completo

> CITA LITERAL — clave `luanco-gozon` en `web/src/lib/relatos-asturias-centro.ts`.

```ts
luanco-gozon: {
 escala: "Villa marinera del cabo Peñas",
 abrir: [
 "Luanco reúne unos cinco mil habitantes en la villa marinera de Gozón, entre Avilés y Gijón: casco de piedra, Museo Marítimo, playas urbanas —La Ribera, Aramar— y Xagó —dunas y surf— a unos diez minutos. El Cabo Peñas —faro, acantilados y senda— queda a unos diez. Es villa de oficio del mar con veraneo ovetense, no paseo residencial de casas bajas tipo Salinas ni ciudad completa.",
 "Un martes de noviembre se camina el casco y se resuelve lo básico. Los servicios alcanzan 5/10: hay fibra y vida de villa cuidada, sin sustituir el comercio denso de Avilés o Gijón. El Hospital de Jove, en Gijón, queda a unos quince minutos; San Agustín, en Avilés, a unos veinte. El aeropuerto de Asturias anda alrededor de los veinte minutos, con Palma en verano.",
 "En verano La Ribera, Aramar y Xagó reciben toallas, tráfico y afluencia de villa marinera. Las patronales y el veraneo marcan ruido y aparcamiento justo unos días. Fuera de temporada Luanco vuelve a ser una villa cuidada: piedra, puerto y vecinos que conocen el viento medio de la costa de Peñas.",
 "La población mezcla familias locales, veraneantes que acabaron quedándose y quienes eligieron casco marinero entre las dos ciudades. Quien priorice hospital a diez minutos y paseo de chalés mirará Salinas; quien quiera oficio de mar y cabo abierto encontrará aquí el carácter que distingue Gozón.",
 "Luanco encaja para quien quiera villa marinera entre Avilés y Gijón, con el Cabo Peñas al lado, aceptando servicios 5/10 y un cielo algo más soleado que el del estuario, pero lejos aún de Mallorca.",
 ],
 tiempo: [
 "Luanco suma unas 1.850 horas de sol y 42 días despejados —el extremo algo más soleado de la zona—, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.000 milímetros en unos 145 días. La niebla es baja; el viento, medio en la costa de Peñas. Se gana algo de claridad respecto a Cudillero o Muros, pero el trato sigue siendo cantábrico: unos 165 cubiertos y un invierno de mañanas grises.",
 "El verano ronda 19 °C, fresco frente a Baleares. La Ribera, Aramar y Xagó tienen agua entre 19 y 21 °C; el cabo pide días de mar más llana para pasear el acantilado con calma. El viento medio no es detalle menor: Peñas no es bahía abrigada.",
 ],
 vivir: [
 "El invierno en casa se nota por el viento medio de la costa de Peñas y el salitre del casco: niebla baja, pero mañanas grises y terraza que se usa a medias entre noviembre y febrero. Conviene mirar orientación hacia La Ribera o calles más interiores, no solo la foto típica de piedra. Visitar un día de viento en el cabo enseña el trato real.",
 "Sin coche se resuelve lo básico en villa: se camina el casco, hay fibra y ritmo cuidado; los servicios alcanzan 5/10. En enero Luanco recupera escala de vecinos —no se apaga—. Avilés y Gijón cubren comercio denso a un trayecto corto; Xagó y el Cabo Peñas piden coche cuando se quiere dunas o faro.",
 "Conviven familias locales, veraneantes que acabaron quedándose y quienes eligieron casco marinero entre las dos ciudades. Se oye asturiano en el puerto y en el Museo Marítimo; el castellano basta para lo cotidiano. La vida social pasa por oficio de mar y veraneo ovetense más que por un paseo de chalés. Entre semana manda la villa cuidada; en verano La Ribera, Aramar y Xagó suben el volumen.",
 "La sanidad se reparte entre las dos ciudades: el Hospital de Jove, en Gijón, queda a unos quince minutos; San Agustín, en Avilés, a unos veinte. En Luanco hay lo básico del día a día; para especialidades se elige una u otra ciudad. No es hospital a diez minutos como en Salinas.",
 "Ir y volver a Mallorca pide unos veinte minutos al aeropuerto de Asturias, con Palma en verano. Es peor trayecto que Salinas o Muros a diez minutos, pero sigue usable. En invierno conviene mirar el calendario real de vuelos, no solo el de agosto en La Ribera.",
 "La vivienda típica es piso o casa de villa marinera en el casco, con poca obra nueva y fibra. Junto a la orilla hay que contar con salitre, viento de cabo y ocupación de verano; hacia calles más interiores, acceso y distancia real a La Ribera. Se compra carácter marinero, no la logística completa de Salinas.",
 ],
 historia: [
 "El casco de piedra y el Museo Marítimo explican Luanco como villa de oficio del mar y de costa cuidada del Cabo Peñas. No es adorno: es el carácter que la distingue de Salinas —villa-paseo residencial— o de Gijón —ciudad—. Puerto, piedra y museo cuentan continuidad marinera.",
 "El faro y los acantilados de Peñas sitúan Gozón en la costa más abierta del área metropolitana: senda, horizonte y oleaje. Lo que conviene saber es marinera y de cabo, no de industria urbana ni de estuario fluvial.",
 "Vivir aquí es habitar esa doble escala: villa caminable en el casco y costa abierta a diez minutos, con Avilés y Gijón siempre a un trayecto corto.",
 ],
 fuera: [
 "La Ribera y Aramar son las orillas de diario: playas urbanas a pie, agua entre 19 y 21 °C, terrazas y vida de villa cuando el verano no las satura. El Museo Marítimo y el casco permiten una tarde sin coche —piedra, puerto, memoria del oficio—.",
 "Xagó cubre dunas y surf a unos diez minutos: otra costa, más abierta, con afluencia propia los días de ola. El Cabo Peñas cierra faro, acantilados y senda; es la tarde de horizonte que justifica Gozón.",
 "Candás y Gijón quedan hacia el este; Avilés, hacia el oeste. El tiempo libre se reparte entre orilla urbana, dunas y cabo —y ciudad cuando hace falta cine, hospital o compra grande—.",
 ],
 casa: [
 "El casco ofrece pisos y viviendas de villa marinera; hay poca obra nueva y fibra. Junto a la orilla hay que contar con salitre, viento de cabo y ocupación de verano; hacia calles más interiores, acceso y distancia real a La Ribera.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros. La franja media puede ser piso reformado en casco o vivienda con mejores vistas. Se compra carácter marinero; no se compra la logística completa de Salinas.",
 "Los servicios son 5/10. Jove queda a unos quince minutos; San Agustín, a unos veinte. El aeropuerto de Asturias está a unos veinte minutos, con Palma en verano. Gijón y Avilés cubren lo que la villa no resuelve sola.",
 ],
 encaja: {
 si: [
 "Encaja para quien quiera villa marinera del Cabo Peñas todo el año —casco de piedra, Museo Marítimo, playas urbanas La Ribera y Aramar a pie; Xagó, dunas y surf, a unos diez minutos; el faro y los acantilados de Peñas a otros diez— y acepte servicios de villa, no de ciudad. Un martes de noviembre se camina el casco y se resuelve lo básico: los servicios alcanzan 5/10 y hay fibra; Gijón y Avilés quedan a un trayecto corto. Quien priorice oficio de mar, orilla urbana y cabo abierto frente al paseo residencial de Salinas encontrará aquí el carácter marinero entre las dos ciudades. La Ribera, Aramar y Xagó tienen agua entre 19 y 21 °C; el cabo pide días de mar más llana para pasear el acantilado con calma.",
 "El clima es el extremo algo más soleado de la zona —unas 1.850 horas de sol y 42 días despejados—, pero sigue lejos de Mallorca (2.800 horas y 120 jornadas claras): caen alrededor de 1.000 milímetros en unos 145 días, con niebla baja y viento medio en la costa de Peñas. El verano ronda 19 °C: se gana frescura y se acepta cielo cubierto frecuente. En verano La Ribera, Aramar y Xagó reciben toallas, tráfico y afluencia de villa marinera con veraneo ovetense; fuera de temporada Luanco vuelve a ser una villa cuidada. Encaja si has probado un día de viento en Peñas y un agosto en La Ribera y siga queriendo ese casco — con aeropuerto a unos veinte minutos.",
 ],
 no: [
 "No encaja si mandan hospital a diez minutos y paseo residencial de casas bajas: Salinas cubre esa prioridad con San Agustín y aeropuerto a diez. Aquí el Hospital de Jove, en Gijón, queda a unos quince minutos; San Agustín, en Avilés, a unos veinte. Los servicios 5/10 resuelven lo básico, no sustituyen ciudad ni la logística completa de Castrillón.",
 "Tampoco si se necesita el sol de Baleares o evitar el viento medio de la costa de Peñas. Aquí mandan cubierto (unos 165 días) y verano fresco; el cabo no es bahía abrigada. Quien se decida solo tras un sábado soleado en el casco de piedra, sin probar oleaje y viento en Peñas ni ocupación de agosto en La Ribera, se llevará una villa distinta de la foto turística.",
 ],
 veredicto:
 "Veredicto: Luanco es la apuesta marinera del cabo. Buscaría tres habitaciones en casco o cerca de La Ribera —alrededor de 211.000 euros en franja asequible—, fuera del tramo más ocupado en agosto, tras probar un día de viento en Peñas. Se ganan villa de piedra, Xagó y cabo; se aceptan servicios 5/10, Jove a quince minutos y Asturias a veinte.",
 },
 fotosAbrir: [
 { src: "/fotos/asturias-centro/luanco-casco.jpg", pie: "Casco de piedra de Luanco" },
 { src: "/fotos/asturias-centro/luanco-puerto.jpg", pie: "Puerto de Luanco" },
 ],
 fotosHistoria: [
 { src: "/fotos/asturias-centro/luanco-museo.jpg", pie: "Museo Marítimo de Luanco" },
 { src: "/fotos/asturias-centro/luanco-penas.jpg", pie: "Cabo Peñas, cerca de Luanco" },
 ],
 fotosFuera: [
 { src: "/fotos/asturias-centro/luanco-playa.jpg", pie: "Playa de La Ribera, Luanco" },
 ],
 creditoFotos: credito,
 }
```

### 6.2 Capa 2026 completa

> CITA LITERAL — fila `slug: "luanco-gozon"` en `web/src/data/municipios-asturias-centro.json`.  
> Autoridad factual. No rellenar null/`…` truncados.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `201026` |
| `A_3hab` | `278343` |
| `B_2hab` | `162367` |
| `B_3hab` | `224816` |
| `advertenciaMicrozona` | `null` *(n.d. / ausente)* |
| `aeropuertoMin` | `20` |
| `aeropuertoPractico2026` | Asturias 25 km · 20 min (Palma: verano) Tiempo histórico orientativo: ~20 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Asturias 25 km · 20 min (Palma: verano) |
| `autonomiaCotidiana` | FUERTE |
| `casaQueBuscar` | Vivienda cómoda y accesible, 2–3 dormitorios, exterior, servicios cotidianos ... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Intermedio |
| `comunicaciones` | AS-238 / A-8 (Avilés); bus |
| `comunicacionesNota10` | `5` |
| `cubiertos` | `165` |
| `dependenciaCocheTexto` | Baja-media en villa; coche para costa exterior y servicios mayores. |
| `despejados` | `42` |
| `estacionalidad2026` | Vida anual con aumento vacacional en verano. |
| `fibra` | Sí |
| `franja` | A |
| `hospitalMin` | `15` |
| `hospitalPractico2026` | 17 km · 20 min · San Agustín (Avilés) Tiempo histórico orientativo: ~15 min. Conservar como referencia práctica orientativa, no como garantía de adscripción. |
| `hospitalPriv` | 14 km · 15 min · Hospital de Jove (Gijón) |
| `hospitalPub` | 17 km · 20 min · San Agustín (Avilés) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 17 km · 20 min · San Agustín (Avilés); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `79` |
| `lat` | `43.615` |
| `lluviaDias` | `145` |
| `lluviaMm` | `1000` |
| `lon` | `-5.793` |
| `mapa` | 55_luanco.png |
| `mercadoReventa` | Mercado intermedio: base residencial propia y/o demanda exterior. Priorizar u... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `2` |
| `minCosta` | `1` |
| `municipio` | Luanco (Gozón) |
| `n` | `55` |
| `niebla` | Baja |
| `obraNueva` | Poca |
| `pais` | España |
| `palmaDirecta2026` | Asturias: Palma figura entre destinos publicados en 2026; programación/temporada variable, comprobar antes de viajar. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Asturias (verano) · 20 min |
| `paseoCotidiano` | Puerto, playa y frente marítimo. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Mar y servicios bien combinados para su tamaño; hospital y gran oferta fuera. |
| `playaBano` | La Ribera / Aramar / Xagó |
| `playaCotidiana` | SÍ |
| `playaCotidianaModo` | Playa de Luanco y puerto se integran directamente en la villa. |
| `precioM2` | `2379` |
| `provincia` | Asturias |
| `radioCotidiano` | Villa con centro de salud/PAC, farmacias, biblioteca, comercio y Museo Marítimo. |
| `radioSalida` | Cabo Peñas y costa de Gozón; Avilés/Gijón para escala mayor. |
| `sanidadPrimaria2026` | Centro de salud/PAC local |
| `servicios` | `5` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | Tiene: villa marinera con paseo. Falta: hospital cercano (Avilés 20 min) |
| `slug` | luanco-gozon |
| `solHoras` | `1850` |
| `tempAgua` | 19-21 |
| `tempInvierno` | `9.5` |
| `tempVerano` | `19.0` |
| `transporteRelevante2026` | AS-238 / A-8 (Avilés); bus Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es 17 km · 20 min · San Agustín (Avilés). |
| `viento` | Media |
| `zona` | Asturias Centro |

### 6.3 Auditorías / plan existentes

**NO existe** `docs/PLAN_EDITORIAL_ASTURIAS_CENTRO_2026.md` ni `PLAN_EDITORIAL_ASTURIAS_ORIENTE_2026.md` (ni equivalente CURSOR_19 para Centro/Oriente).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n correspondiente):

```
| 55 | Luanco (Gozón) | Asturias Centro | precio relato ~1800 vs ficha 2379 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; repite nota servicios X/10 (+3) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 55 | Luanco (Gozón) | Asturias Centro | no | — |
```

**estudio_zonas.md** (histórico/contexto — **NO** sustituye capa 2026): extracto de zona en §1; detalle municipal bajo demanda en el estudio. Snippet zona:

<details><summary>Contexto estudio (recorte)</summary>

## 11. Asturias Centro (Asturias) · Cudillero, Muros de Nalón, Soto del Barco, Salinas (Castrillón), Luanco (Gozón), Candás (Carreño), Gijón

### La zona

La costa del área metropolitana asturiana: Gijón (270.000 hab.), Avilés (77.000) y Oviedo (220.000, con el HUCA) a 10-30 minutos de cualquier punto, y el aeropuerto de Asturias en Santiago del Monte (Castrillón), a 10 min de Salinas. Cudillero es el pueblo colgado de postal; Muros y Soto del Barco, el estuario tranquilo del Nalón; Salinas, la villa-playa residencial de chalés y casas bajas junto a Avilés; Luanco y Candás, villas marineras del Cabo Peñas; Gijón, la ciudad de mar de Asturias.

Es la zona con mejor logística del Cantábrico occidental (aeropuerto, tres ciudades, cuatro hospitales) y con dos matices: cielo cantábrico y una industria pesada (siderurgia de Avilés y Gijón, central y cementera de Aboño) que se nota en el aire según el viento.

### Clima mes a mes

| | Oct-Mar | Abr-May | Jun-Sep | Año |
|---|---|---|---|---|
| Días de lluvia al mes | 14-16 | 12-13 | 8-10 | 145-150 |
| Máxima / mínima típica | 13 / 6 °C (ene.) | 16 / 9 °C | 23 / 16 °C (jul.) | |
| Horas de sol al mes | 70-100 | 160-190 | 200-230 | 1.780-1.…

</details>


### 6.4 Auditoría relato ↔ capa

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | **5/10** repetido | `servicios` **5**; villa marinera; falta hospital cercano | DUPLICA_CAPA | Omitir chip; narrar FUERTE en villa |
| Precio ~1800 vs 2379 | casa remite + «000 euros»; asequible ~211.000 | `precioM2` **2379** | OBSOLETO | Omitir cifras; TablaPrecios |
| Prosa rota «000 euros» | Tras remitir a capa queda fragmento «000 euros» (y a veces totales sueltos) | Cifras viven en `precioM2` / A/B / TablaPrecios | OBSOLETO | Borrar resto roto; no reponer €/m² históricos en prosa |
| Playa cotidiana | La Ribera/Aramar a pie; Xagó ~10′ | `playaCotidiana` **SÍ**; La Ribera/Aramar/Xagó | ALINEADO / P4_PRESERVAR | Preservar orilla urbana + Peñas como salida |
| HospitalMin 15 vs pub 20 | Jove ~15′; San Agustín ~20′ | `hospitalMin` **15**; `hospitalPub`/`hospitalPractico` **20 min** San Agustín; histórico ~15 | REQUIERE_VERIFICACION_EXTERNA (interna capa) | Para v1: narrar hospital en Avilés/Gijón ~15–20′ sin fijar un único minuto; no inventar |
| Gozón vs villa | Luanco villa; Cabo Peñas/Gozón como costa | `advertenciaMicrozona` null; autonomía FUERTE en villa | SOPORTADO_PERO_INFRAUSADO | No generalizar todo Gozón = Luanco caminable |
| Aeropuerto / Palma | Minutos aero + Palma verano (a veces suena permanente) | `aeropuertoMin` + `palmaDirecta2026` temporada variable | DUPLICA_CAPA / ALINEADO | Consecuencia una vez; no permanente Palma; omitir cascada de minutos |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos abrir→tiempo→encaja | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| CURSOR_28 control: playa SÍ + hospitalMin/pub nota + Gozón≠villa | Presente | Campos capa | ALINEADO / REQUIERE_VERIFICACION_EXTERNA | Preservar marinera; matizar hospital |

### 6.5 P4 / identidad

| Elemento | Qué es | Por qué importa | Cotidiano/salida | Soporte repo | Preservar |
|---|---|---|---|---|---|
| Casco / puerto de piedra | Villa marinera | Identidad | Cotidiano | radio + relato | sí |
| Museo Marítimo | Equipamiento local | Cultura a pie | Cotidiano | radioCotidiano | sí |
| La Ribera / Aramar | Playas urbanas | Playa SÍ | Cotidiano | playa SÍ | sí |
| Xagó | Dunas/surf | Orilla distinta | Salida corta | relato | sí |
| Cabo Peñas | Faro/acantilados | Costa abierta Gozón | Salida | relato | sí |

### 6.6 Vida cotidiana soportada

Pregunta guía: *Ya vivo aquí. Tengo toda la mañana libre. ¿Qué puedo hacer con mi día sin convertirlo en turismo?*

| Elemento | Clasificación | Base repo |
|---|---|---|
| Puerto/playa urbana | YA SOPORTADO | playa SÍ |
| Museo Marítimo / biblioteca | YA SOPORTADO (capa radio) | radioCotidiano |
| Cabo Peñas | YA SOPORTADO (salida) | relato |
| Todo Gozón = Luanco | NO SOPORTADO | — |
| Minuto hospital único 15 | NO SOPORTADO sin unificar | hospitalMin vs pub |

### 6.7 Reality toll

Solo peajes estructurales **soportados** en repo:

- Hospital fuera (~15–20′ Avilés/Gijón) — nota capa
- Coche para costa exterior / gran oferta
- Verano vacacional
- No generalizar Gozón entero
- Aero ~20′; Palma estacional

### 6.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | ~1800 aud; «000 euros»; ~211k asequible | **2379** | OBSOLETO |
| A/B | Totales sueltos | 278343 / 224816 | Tabla |

### 6.9 Clima: deuda / duplicación

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en tiempo + encaja (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `luanco-gozon` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_28.**

**Sin correcciones en este bloque: sí.**

### 6.10 Mar / paseo

- **Mar/baño:** La Ribera / Aramar / Xagó — **SÍ**.
- **Paseo:** puerto + frente marítimo (capa).
- Peñas = salida de costa abierta, no paseo de casco.

### 6.11 No soportado / no inventar

- ~1800 / 211k en prosa
- Chip 5/10
- Minuto hospital único sin matiz 15 vs 20
- Todo Gozón = Luanco a pie
- Palma permanente
## 7. Candás / Carreño

### 7.1 Relato actual completo

> CITA LITERAL — clave `candas-carreno` en `web/src/lib/relatos-asturias-centro.ts`.

```ts
candas-carreno: {
 escala: "Villa marinera junto a Gijón",
 abrir: [
 "Candás reúne unos siete mil habitantes en la villa marinera de Carreño, pegada al oeste de Gijón: puerto, faro, playas —Palmera, Carranques—, cercanías en tren hacia la ciudad y Museo Antón. Xivares queda hacia el oeste. Es villa con escala propia y acceso metropolitano; el contra serio es Aboño —central térmica y cementera— al lado, un matiz de aire que conviene probar según el viento antes de comprar.",
 "Un martes de noviembre se resuelve lo básico en villa. Los servicios alcanzan 5/10: hay fibra, tren FEVE hacia Gijón —unos quince minutos— y comercio de villa, sin sustituir la ciudad. El Hospital de Jove queda a unos diez minutos; Cabueñes, el público de Gijón, alrededor de veinte. El aeropuerto de Asturias anda alrededor de los veinticinco minutos, con Palma en verano.",
 "En verano Palmera y Carranques reciben veraneo de villa junto a Gijón: toallas, tráfico y terrazas. Las patronales animan el casco unos días —ruido, aparcamiento justo, mesas llenas—. Fuera de temporada el ritmo vuelve a puerto y tren: vecinos que trabajan en Gijón, familias locales y quienes eligieron orilla marinera sin mudarse al ensanche urbano.",
 "Quien mire casa hacia el oeste debe probar un día con el viento que trae el aire de Aboño; quien mire hacia el puerto y Palmera debe conocer también un martes vacío. Candás no es el silencio del estuario ni el paseo de chalés de Salinas: es villa marinera metropolitana, con industria vecina en el trato.",
 "Encaja para quien quiera Gijón a unos quince minutos en tren desde una villa marinera, aceptando la central y la cementera como vecinos reales —no como detalle del mapa—.",
 ],
 tiempo: [
 "Candás suma unas 1.850 horas de sol y 42 días despejados, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.000 milímetros en unos 145 días. La niebla es baja; el viento, bajo en la ficha climática, aunque el aire de Aboño depende de la dirección más que del número. El cielo sigue lejos de Baleares: unos 165 cubiertos y un invierno de mañanas grises.",
 "El verano ronda 19 °C, fresco frente a Baleares. Palmera, Carranques y Xivares tienen agua entre 19 y 21 °C; el baño corto es usable muchos días de agosto. Se gana frescura frente al Mediterráneo y se acepta un Cantábrico que no promete cielo de isla.",
 ],
 vivir: [
 "El invierno en casa se nota por el salitre del puerto y, hacia el oeste, por el aire de Aboño según el viento: niebla baja, mañanas grises y una terraza que en agosto parece el centro de la vida y en noviembre se usa a medias. Conviene probar un día con el viento que trae la central térmica y la cementera, no solo un sábado soleado en Palmera.",
 "Sin coche se sostiene lo básico en villa y el tren FEVE hacia Gijón —unos quince minutos— organiza muchos días mejor que el volante solo. Los servicios alcanzan 5/10 y hay fibra. En enero el ritmo vuelve a puerto y cercanías: vecinos, comercio de villa, no silencio de estuario. Xivares o la ciudad completa piden trayecto cuando hace falta.",
 "Conviven familias locales, gente que trabaja en Gijón y quienes eligieron orilla marinera sin mudarse al ensanche. Se oye asturiano en el puerto y castellano en el tren; el castellano basta para lo cotidiano. La vida social pasa por villa metropolitana —faro, playa, cercanías— más que por una plaza aislada. Entre semana manda el ir y venir; en verano Palmera y Carranques suben el volumen.",
 "La sanidad es cercana: el Hospital de Jove queda a unos diez minutos; Cabueñes, el público de Gijón, alrededor de veinte. Empadronarse aquí abre lo básico en villa; para especialidades se baja a Gijón en poco tiempo. Es sanidad metropolitana usable, no hospital en la misma calle que el faro.",
 "Ir y volver a Mallorca pide el aeropuerto de Asturias alrededor de los veinticinco minutos, con Palma en verano —peor que Salinas a diez, mejor que Gijón a treinta—. En invierno conviene mirar el calendario real de vuelos, no solo el de agosto en la orilla.",
 "La vivienda típica es piso o casa de villa junto al casco o al puerto, con poca obra nueva y fibra. Junto a la orilla hay que contar con salitre y ocupación de verano; hacia Aboño, el aire según el viento y la distancia real a la industria. Hay que imaginar la rutina con ese vecino industrial, no solo con el faro.",
 ],
 historia: [
 "El puerto, el faro y el Museo Antón explican Candás como villa marinera con capa de cultura local, pegada a Gijón. El oficio del mar y la cercanía a la ciudad marcan el carácter: no es una foto bonita aislada ni barrio dormitorio sin orilla.",
 "Aboño —central térmica y cementera— forma parte de la ficha honesta de vivir aquí: no es una foto bonita, es el vecino industrial del oeste de Carreño y del borde de Gijón. Lo que conviene saber combina puerto, tren y área metropolitana con industria pesada a la vista.",
 "Lo que queda para quien llega es esa tensión: faro y playa de diario, Gijón a quince minutos en cercanías, y un aire que cambia según el viento hacia la central.",
 ],
 fuera: [
 "Palmera y Carranques son las orillas de diario: playas de villa a pocos minutos, agua entre 19 y 21 °C, veraneo en agosto y ritmo más calmado el resto del año. El puerto y el faro permiten una tarde sin alejarse —piedra, barcos, horizonte cercano—.",
 "Xivares amplía playa hacia el oeste, ya en la lógica de costa abierta junto a la industria. Gijón cubre San Lorenzo, cultura y hospitales a un trayecto corto; Luanco aporta el Cabo Peñas hacia el noroeste.",
 "Cuando hay más tiempo, la ciudad de mar completa —Cimadevilla, el Muro, Poniente— queda a unos quince minutos en tren. El tiempo libre de Candás es orilla de villa primero; urbe y cabo, después.",
 ],
 casa: [
 "El casco y el entorno del puerto ofrecen pisos y viviendas de villa; hay poca obra nueva y fibra. Junto a la orilla hay que contar con salitre y ocupación de verano; hacia Aboño, el aire según el viento y la distancia real a la central.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros. Se compra villa marinera junto a Gijón; no se compra aire limpio garantizado todos los días hacia el oeste.",
 "Los servicios son 5/10. Jove queda a unos diez minutos; Cabueñes, alrededor de veinte. El aeropuerto de Asturias está a unos veinticinco minutos, con Palma en verano. El tren hacia Gijón organiza muchos días mejor que el coche solo.",
 ],
 encaja: {
 si: [
 "Encaja para quien quiera villa marinera junto a Gijón todo el año —puerto, faro, playas Palmera y Carranques a pocos minutos; Xivares hacia el oeste; Museo Antón— y priorice tren FEVE hacia la ciudad de mar frente al silencio del estuario. Un martes de noviembre se resuelve lo básico en villa: los servicios alcanzan 5/10 y hay fibra; Gijón queda a unos quince minutos en cercanías. Quien busque hospital cerca —Jove a unos diez minutos; Cabueñes, el público, alrededor de veinte— y orilla usable (agua entre 19 y 21 °C) encontrará aquí escala marinera metropolitana, no foto típica de Cudillero ni villa-paseo de Salinas. ",
 "El clima es cantábrico suave en la costa de Peñas: unas 1.850 horas de sol y 42 días despejados frente a las 2.800 horas y 120 jornadas claras de Mallorca; caen alrededor de 1.000 milímetros en unos 145 días, con niebla baja y viento bajo. El verano ronda 19 °C: se gana frescura frente a Baleares y se acepta cielo cubierto frecuente. En verano Palmera y Carranques reciben veraneo de villa junto a Gijón —toallas, tráfico, terrazas—; el resto del año el ritmo es de puerto y tren. Encaja quien acepte Aboño —central térmica y cementera al lado— como vecino industrial según el viento a cambio de esa cercanía a la ciudad y al mar de diario.",
 ],
 no: [
 "No encaja si el aire limpio junto a Aboño debe estar garantizado todos los días. La industria vecina es un tema real en Carreño y el oeste de Gijón; eso no se arregla eligiendo otra calle hacia Palmera. Tampoco si se busca villa-playa residencial lejos de la industria, como Salinas hacia Avilés, o el silencio barato de Muros: Candás es villa marinera metropolitana, con precio y carácter distintos.",
 "Tampoco si se necesita el cielo de Baleares o el aeropuerto a diez minutos. Aquí mandan cubierto (unos 165 días) y verano fresco; Asturias queda a unos veinticinco minutos, con Palma en verano. Quien se decida solo tras un sábado soleado en el puerto, sin probar un día con el viento de Aboño ni un martes de noviembre en villa, descubrirá el trato completo demasiado tarde.",
 ],
 veredicto:
 "Veredicto: Candás es villa marinera junto a Gijón, con Aboño en el trato. Buscaría tres habitaciones hacia el puerto o Palmera —alrededor de 193.000 euros en franja asequible—, tras probar un día con el viento de la industria y un agosto en la orilla. Se ganan Jove a diez minutos, tren a Gijón y playa de diario; se aceptan cielo cantábrico, servicios 5/10, aeropuerto a veinticinco y la central vecina.",
 },
 fotosAbrir: [
 { src: "/fotos/asturias-centro/candas-puerto.jpg", pie: "Puerto de Candás" },
 { src: "/fotos/asturias-centro/candas-villa.jpg", pie: "Candás: villa marinera de Carreño" },
 ],
 fotosHistoria: [
 { src: "/fotos/asturias-centro/candas-faro.jpg", pie: "Faro de Candás" },
 { src: "/fotos/asturias-centro/candas-paseo.jpg", pie: "Paseo en Candás" },
 ],
 fotosFuera: [
 { src: "/fotos/asturias-centro/candas-playa.jpg", pie: "Playa en Candás" },
 { src: "/fotos/asturias-centro/candas-palmera.jpg", pie: "Costa de Candás hacia el Pedrero" },
 ],
 creditoFotos: credito,
 }
```

### 7.2 Capa 2026 completa

> CITA LITERAL — fila `slug: "candas-carreno"` en `web/src/data/municipios-asturias-centro.json`.  
> Autoridad factual. No rellenar null/`…` truncados.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `155480` |
| `A_3hab` | `215280` |
| `B_2hab` | `125580` |
| `B_3hab` | `173880` |
| `advertenciaMicrozona` | `null` *(n.d. / ausente)* |
| `aeropuertoMin` | `25` |
| `aeropuertoPractico2026` | Asturias 27 km · 25 min (Palma: verano) Tiempo histórico orientativo: ~25 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Asturias 27 km · 25 min (Palma: verano) |
| `autonomiaCotidiana` | FUERTE |
| `casaQueBuscar` | Vivienda cómoda y accesible, 2–3 dormitorios, exterior, servicios cotidianos ... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Intermedio |
| `comunicaciones` | AS-110 / A-8; tren FEVE Gijón–Cudillero |
| `comunicacionesNota10` | `6` |
| `cubiertos` | `165` |
| `dependenciaCocheTexto` | Baja-media en villa; coche para servicios de mayor escala. |
| `despejados` | `42` |
| `estacionalidad2026` | Vida anual con programación cultural propia. |
| `fibra` | Sí |
| `franja` | A |
| `hospitalMin` | `10` |
| `hospitalPractico2026` | 17 km · 20 min · Cabueñes (Gijón) Tiempo histórico orientativo: ~10 min. Conservar como referencia práctica orientativa, no como garantía de adscripción. |
| `hospitalPriv` | 9 km · 10 min · Hospital de Jove (Gijón) |
| `hospitalPub` | 17 km · 20 min · Cabueñes (Gijón) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 17 km · 20 min · Cabueñes (Gijón); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `79` |
| `lat` | `43.588` |
| `lluviaDias` | `145` |
| `lluviaMm` | `1000` |
| `lon` | `-5.759` |
| `mapa` | 56_candas.png |
| `mercadoReventa` | Mercado intermedio: base residencial propia y/o demanda exterior. Priorizar u... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `2` |
| `minCosta` | `1` |
| `municipio` | Candás (Carreño) |
| `n` | `56` |
| `niebla` | Baja |
| `obraNueva` | Poca |
| `pais` | España |
| `palmaDirecta2026` | Asturias: Palma figura entre destinos publicados en 2026; programación/temporada variable, comprobar antes de viajar. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Asturias (verano) · 25 min |
| `paseoCotidiano` | Puerto/frente marítimo y centro. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Muy manejable a pie, pero con escala de servicios menor que Gijón/Avilés. |
| `playaBano` | Palmera / Carranques / Xivares |
| `playaCotidiana` | SÍ/PARCIAL |
| `playaCotidianaModo` | Puerto y playa quedan integrados en la pequeña villa. |
| `precioM2` | `1840` |
| `provincia` | Asturias |
| `radioCotidiano` | Villa compacta con salud, comercio, biblioteca y Teatro Prendes alrededor de La Palmera/centro. |
| `radioSalida` | Costa de Carreño, Avilés y Gijón. |
| `sanidadPrimaria2026` | Atención primaria local |
| `servicios` | `6` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | Tiene: tren a Gijón. Falta: instituto de FP |
| `slug` | candas-carreno |
| `solHoras` | `1850` |
| `tempAgua` | 19-21 |
| `tempInvierno` | `9.5` |
| `tempVerano` | `19.0` |
| `transporteRelevante2026` | AS-110 / A-8; tren FEVE Gijón–Cudillero Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es 17 km · 20 min · Cabueñes (Gijón). |
| `viento` | Baja |
| `zona` | Asturias Centro |

### 7.3 Auditorías / plan existentes

**NO existe** `docs/PLAN_EDITORIAL_ASTURIAS_CENTRO_2026.md` ni `PLAN_EDITORIAL_ASTURIAS_ORIENTE_2026.md` (ni equivalente CURSOR_19 para Centro/Oriente).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n correspondiente):

```
| 56 | Candás (Carreño) | Asturias Centro | precio relato ~1650 vs ficha 1840 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; repite nota servicios X/10 (+3) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 56 | Candás (Carreño) | Asturias Centro | no | — |
```

**estudio_zonas.md** (histórico/contexto — **NO** sustituye capa 2026): extracto de zona en §1; detalle municipal bajo demanda en el estudio. Snippet zona:

<details><summary>Contexto estudio (recorte)</summary>

## 11. Asturias Centro (Asturias) · Cudillero, Muros de Nalón, Soto del Barco, Salinas (Castrillón), Luanco (Gozón), Candás (Carreño), Gijón

### La zona

La costa del área metropolitana asturiana: Gijón (270.000 hab.), Avilés (77.000) y Oviedo (220.000, con el HUCA) a 10-30 minutos de cualquier punto, y el aeropuerto de Asturias en Santiago del Monte (Castrillón), a 10 min de Salinas. Cudillero es el pueblo colgado de postal; Muros y Soto del Barco, el estuario tranquilo del Nalón; Salinas, la villa-playa residencial de chalés y casas bajas junto a Avilés; Luanco y Candás, villas marineras del Cabo Peñas; Gijón, la ciudad de mar de Asturias.

Es la zona con mejor logística del Cantábrico occidental (aeropuerto, tres ciudades, cuatro hospitales) y con dos matices: cielo cantábrico y una industria pesada (siderurgia de Avilés y Gijón, central y cementera de Aboño) que se nota en el aire según el viento.

### Clima mes a mes

| | Oct-Mar | Abr-May | Jun-Sep | Año |
|---|---|---|---|---|
| Días de lluvia al mes | 14-16 | 12-13 | 8-10 | 145-150 |
| Máxima / mínima típica | 13 / 6 °C (ene.) | 16 / 9 °C | 23 / 16 °C (jul.) | |
| Horas de sol al mes | 70-100 | 160-190 | 200-230 | 1.780-1.…

</details>


### 7.4 Auditoría relato ↔ capa

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | **5/10** repetido en relato | `servicios` **6**; tiene tren a Gijón; falta FP | OBSOLETO | Nunca 5/10. Omitir chip; narrar FUERTE + tren |
| Precio ~1650 vs 1840 | casa remite + «000 euros»; asequible ~193.000 | `precioM2` **1840** | OBSOLETO | Omitir cifras; TablaPrecios |
| Prosa rota «000 euros» | Tras remitir a capa queda fragmento «000 euros» (y a veces totales sueltos) | Cifras viven en `precioM2` / A/B / TablaPrecios | OBSOLETO | Borrar resto roto; no reponer €/m² históricos en prosa |
| HospitalMin 10 vs texto Cabueñes 20′ | Jove ~10′; Cabueñes «alrededor de veinte» | `hospitalMin` **10**; `hospitalPub`/`Practico` **20 min Cabueñes**; privado Jove 10′ | REQUIERE_VERIFICACION_EXTERNA (capa interna) | DESEABLE unificar; v1: narrar Gijón cercano (Jove/Cabueñes) sin martillar 10 vs 20 |
| Autonomía / tren | FEVE ~15′ a Gijón enfatizado | `autonomiaCotidiana` **FUERTE**; transporte FEVE Gijón–Cudillero | ALINEADO / P4_PRESERVAR | Preservar tren sin promesa horaria inventada |
| Playa | Palmera/Carranques diarias; Xivares oeste | `playaCotidiana` **SÍ/PARCIAL** | ALINEADO | Integrar puerto/playa; Aboño = peaje aire (ya en relato) |
| Aeropuerto / Palma | Minutos aero + Palma verano (a veces suena permanente) | `aeropuertoMin` + `palmaDirecta2026` temporada variable | DUPLICA_CAPA / ALINEADO | Consecuencia una vez; no permanente Palma; omitir cascada de minutos |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos abrir→tiempo→encaja | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| CURSOR_28 control: FUERTE + tren + hospital 10 vs 20 | 5/10 + 10′/20′ | servicios 6 + hospitalMin 10 vs pub 20 | OBSOLETO + REQUIERE_VERIFICACION_EXTERNA | Corregir nota servicios; no inventar hospital |

### 7.5 P4 / identidad

| Elemento | Qué es | Por qué importa | Cotidiano/salida | Soporte repo | Preservar |
|---|---|---|---|---|---|
| Puerto / faro | Villa marinera pegada a Gijón | Escala | Cotidiano | relato | sí |
| Palmera / Carranques | Playas de villa | Orilla SÍ/PARCIAL | Cotidiano | playa | sí |
| Tren FEVE | Cercanías a Gijón | Autonomía FUERTE | Cotidiano | transporte + serviciosNota | sí |
| Museo Antón | Cultura local | Identidad | Cotidiano/tarde | relato | sí |
| Aboño | Industria oeste | Peaje aire real | Peaje / contexto | relato | sí |
| Xivares | Playa hacia oeste | Salida costa | Salida | playaBano | sí |

### 7.6 Vida cotidiana soportada

Pregunta guía: *Ya vivo aquí. Tengo toda la mañana libre. ¿Qué puedo hacer con mi día sin convertirlo en turismo?*

| Elemento | Clasificación | Base repo |
|---|---|---|
| Puerto/Palmera | YA SOPORTADO | playa SÍ/PARCIAL |
| Tren a Gijón | YA SOPORTADO | transporte + relato |
| Teatro Prendes / biblioteca | SOPORTADO PERO FALTA EN RELATO | radioCotidiano |
| Servicios 5/10 | NO SOPORTADO (obsoleto) | capa 6 |
| Horarios FEVE inventados | NO SOPORTADO | — |

### 7.7 Reality toll

Solo peajes estructurales **soportados** en repo:

- Autonomía FUERTE + tren; escala menor que Gijón
- Hospital: capa interna 10 vs 20 Cabueñes
- Aboño / aire según viento
- Verano playa; enero villa
- Aero ~25′

### 7.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | ~1650 aud; «000 euros»; ~193k | **1840** | OBSOLETO |
| casaQueBuscar | Truncado | `…` | DESEABLE |

### 7.9 Clima: deuda / duplicación

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en tiempo + encaja (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `candas-carreno` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_28.**

**Sin correcciones en este bloque: sí.**

### 7.10 Mar / paseo

- **Mar/baño:** Palmera / Carranques / Xivares — **SÍ/PARCIAL**.
- **Paseo:** puerto/frente + centro.
- Tren ≠ paseo; Aboño = peaje ambiental, no capa mar.

### 7.11 No soportado / no inventar

- Servicios **5/10** (capa 6)
- ~1650 / 193k en prosa
- Fijar hospital 10′ como Cabueñes público sin matiz
- Horarios FEVE inventados
- Palma permanente
## 8. Gijón

### 8.1 Relato actual completo

> CITA LITERAL — clave `gijon` en `web/src/lib/relatos-asturias-centro.ts`.

```ts
gijon: {
 escala: "Ciudad de mar",
 abrir: [
 "Gijón reúne unos doscientos setenta mil habitantes: San Lorenzo con el paseo del Muro, Cimadevilla —el barrio antiguo sobre el cerro—, Poniente, parques, universidad, cultura y comercio. Es la ciudad de mar completa y abierta de Asturias —no una villa—. El Cantábrico no queda al final de una excursión: acompaña el paseo urbano, la compra y la tarde de cualquier martes.",
 "Un martes de noviembre se resuelve todo en el municipio. Los servicios alcanzan 10/10: hospitales, súper, cultura, tren y calle viva sin depender del veraneo. Cabueñes y el Hospital de Jove quedan a unos cinco minutos. El aeropuerto de Asturias anda alrededor de los treinta minutos —el peor tiempo de la zona—, con Palma en verano.",
 "En verano San Lorenzo y Poniente reciben afluencia urbana: toallas, paseo lleno y tráfico. El resto del año Gijón mantiene ritmo de ciudad: familias, gente que trabaja aquí, estudiantes y quienes eligieron urbe junto al mar frente a villa pequeña. En el oeste, hacia Xivares y Aboño, el aire de industria es un matiz real según el viento.",
 "Para escala de casas bajas cerca de la playa, Somió —chalés a unos cinco minutos de la orilla— es la versión urbanización dentro del municipio, a precio alto. Quien quiera ciudad completa encontrará aquí la orilla más densa de Asturias Centro; quien busque silencio de estuario o foto típica de Cudillero mirará otro mapa.",
 "Las estaciones cambian la densidad de la playa más que el funcionamiento urbano. En invierno el Muro sigue abierto; en agosto San Lorenzo se llena; en cualquier mes hay calle, hospital y comercio. Gijón encaja para quien quiera ciudad; el aeropuerto a treinta minutos es el peaje logístico.",
 ],
 tiempo: [
 "Gijón registra unas 1.850 horas de sol y 45 días despejados —el extremo más claro de la zona—, frente a las 2.800 horas y 120 jornadas claras de Mallorca. Caen alrededor de 1.000 milímetros en unos 145 días. La niebla es baja; el viento, bajo. Se gana algo de claridad respecto al estuario, pero siguen faltando casi mil horas de sol frente a Baleares —unos 162 cubiertos—.",
 "El verano ronda 19,5 °C, fresco frente a Baleares: se gana frescura y se acepta cielo cubierto frecuente. San Lorenzo y Poniente tienen agua entre 19 y 21 °C; el paseo urbano compensa muchos días de baño corto. El clima justifica la ciudad de mar, no la promesa de isla mediterránea.",
 ],
 vivir: [
 "El invierno en casa se nota por el salitre urbano y el cielo cubierto frecuente, no por un silencio de pueblo: el Muro sigue abierto, pero la terraza de San Lorenzo se usa a medias entre noviembre y febrero. Conviene preguntar por aislamiento, orientación y humedad en pisos junto a la orilla. Visitar un martes de noviembre urbano enseña más que un agosto soleado en el paseo.",
 "Sin coche la semana se resuelve: servicios 10/10, hospitales, súper, cultura, bus y tren. En enero Gijón mantiene ritmo de ciudad —calle viva, no dependencia del veraneo—. Somió —chalés a unos cinco minutos de la orilla— vuelve a pedir más vehículo; en el ensanche y Cimadevilla se puede vivir a pie.",
 "Conviven familias, gente que trabaja aquí, estudiantes y quienes eligieron urbe junto al mar. Se oye asturiano en el mercado y en Cimadevilla; el castellano basta para lo cotidiano, y la vida social es de ciudad —barrios, asociaciones, calle—, no de una sola plaza. Entre semana manda la densidad urbana; en verano San Lorenzo y Poniente se llenan; hacia Xivares y Aboño el aire de industria es un matiz según el viento.",
 "La sanidad es la más cercana de la zona: Cabueñes y el Hospital de Jove quedan a unos cinco minutos. Empadronarse aquí abre médico de cabecera y especialidades en el propio municipio. No es «lejos de Palma» en sentido de aislamiento sanitario: es ciudad de mar con hospital a la vuelta de la esquina.",
 "Mantener el vínculo con Mallorca es el peaje logístico: el aeropuerto de Asturias anda alrededor de los treinta minutos —el peor tiempo de Asturias Centro—, con Palma en verano. En invierno el trayecto sigue siendo ese; conviene mirar el calendario real de vuelos, no solo el de agosto en el Muro.",
 "La vivienda típica es piso de ciudad —hay obra nueva y fibra—; en Somió, chalé o casa baja a precio alto. Junto a San Lorenzo hay que contar con afluencia y salitre; tres habitaciones en primera línea urbana suelen quedar fuera de la franja asequible y entran a cinco o diez minutos de la playa. Hay que imaginar escaleras, ascensor y terraza de invierno, no solo metros de orilla.",
 ],
 historia: [
 "Cimadevilla —el barrio antiguo sobre el cerro—, San Lorenzo y el carácter de ciudad portuaria explican Gijón: urbe de mar con capas de industria, cultura y paseo. No es villa marinera pequeña ni estuario silencioso; es la escala completa del Cantábrico occidental en esta zona.",
 "La Senda del Cervigón, el Cerro de Santa Catalina, el Jardín Botánico Atlántico y el Parque de Isabel la Católica completan la ficha de ciudad caminable junto al Cantábrico: acantilado urbano, mirador y verde sin salir del municipio.",
 "Lo que queda para quien llega a vivir es esa densidad: playa urbana, barrio antiguo, ensanche y, en Somió, casas bajas a precio alto. Lo que conviene saber es de ciudad de mar, no de concejo pequeño.",
 ],
 fuera: [
 "San Lorenzo, el paseo del Muro y Cimadevilla son la tarde de diario: playa urbana de unos kilómetro y medio, cerro antiguo y calle que no se apaga en noviembre. Poniente amplía orilla hacia el oeste, con otro ritmo de paseo y baño.",
 "La Senda del Cervigón cierra acantilado urbano: caminata sobre el Cantábrico sin abandonar Gijón. El Cerro de Santa Catalina y los parques —Isabel la Católica, Jardín Botánico Atlántico— permiten tarde de verde y mirador dentro de la ciudad.",
 "Candás y Luanco aportan villa marinera a veinte o veinticinco minutos; Somió, casas bajas cerca de la playa dentro del municipio. El tiempo libre aquí puede ser baño urbano, senda de acantilado o tren hacia otra escala de costa —sin renunciar a la urbe—.",
 ],
 casa: [
 "Hay pisos de ciudad, obra nueva y fibra. Junto a San Lorenzo hay que contar con precio, afluencia y salitre; en Somió, chalés y casas bajas a precio alto. Tres habitaciones en primera línea urbana suelen quedar fuera de la franja asequible; entran a cinco o diez minutos de la playa.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros; tres habitaciones, alrededor de 269.000. La compra realista cerca del mar suele ser piso a unos minutos de la orilla, no primera línea barata.",
 "Los servicios son 10/10. Cabueñes y Jove quedan a unos cinco minutos. El aeropuerto de Asturias está a unos treinta minutos, con Palma en verano. La dependencia del coche es baja: la ciudad resuelve la semana a pie, en bus o en tren.",
 ],
 encaja: {
 si: [
 "Encaja para quien quiera ciudad de mar completa todo el año —San Lorenzo con el paseo del Muro, Cimadevilla, Poniente, parques, universidad, cultura y comercio— y priorice servicios 10/10 frente a villa pequeña. Un martes de noviembre se resuelve todo en el municipio: Cabueñes y Jove quedan a unos cinco minutos; la dependencia del coche es baja. Quien busque playa urbana usable (agua entre 19 y 21 °C), vida cultural y hospital a la vuelta de la esquina encontrará aquí la urbe abierta de Asturias, no un estuario silencioso ni un pueblo de foto turística. El precio es el más alto de la zona: suelen entrar a cinco o diez minutos de la playa, no en primera línea.",
 "El clima es el extremo más claro de Asturias Centro —unas 1.850 horas de sol y 45 días despejados—, pero sigue lejos de Mallorca (2.800 horas y 120 jornadas claras): caen alrededor de 1.000 milímetros en unos 145 días, con niebla baja y viento bajo. El verano ronda 19,5 °C: se gana frescura frente a Baleares y se acepta cielo cubierto frecuente; el paseo urbano compensa muchos días de baño corto. En verano San Lorenzo y Poniente reciben afluencia urbana; el resto del año Gijón mantiene ritmo de ciudad. Encaja también en Somió —chalés y casas bajas a unos cinco minutos de la orilla— quien busque escala de urbanización dentro del municipio, a cambio de metro caro y obra nueva disponible.",
 ],
 no: [
 "No encaja si se busca villa pequeña, estuario silencioso o el precio más bajo de estuario (Muros, Soto). Tampoco si tres habitaciones en primera línea de San Lorenzo deben entrar en franja asequible: esa tipología suele quedar fuera; la compra real asequible pide alejarse unos minutos de la orilla. El aeropuerto de Asturias queda a unos treinta minutos —peor tiempo de la zona—; Palma en verano, no todo el año.",
 "Tampoco si se necesita el sol de Baleares o aire limpio garantizado hacia el oeste. Gijón gana por ciudad, no por despejados (unos 162 cubiertos); hacia Xivares y Aboño el aire de industria es un matiz real según el viento. Quien se decida solo tras un agosto soleado en el Muro, sin probar un martes de noviembre urbano ni un día hacia el oeste con viento de Aboño, se llevará una ciudad distinta de la foto turística de playa.",
 ],
 veredicto:
 "Veredicto: Gijón es la ciudad de mar de Asturias Centro. Buscaría piso a cinco o diez minutos de San Lorenzo —o Somió si mandan casas bajas—, tras probar un agosto en el Muro y un día hacia el oeste con viento de Aboño. Se ganan servicios 10/10, hospital a cinco minutos y vida urbana junto al Cantábrico; se aceptan precio alto, cielo cantábrico y Asturias a treinta minutos.",
 },
 fotosAbrir: [
 { src: "/fotos/asturias-centro/gijon-san-lorenzo.jpg", pie: "Playa de San Lorenzo, Gijón" },
 { src: "/fotos/asturias-centro/gijon-cimavilla.jpg", pie: "Cimadevilla, Gijón" },
 ],
 fotosHistoria: [
 { src: "/fotos/asturias-centro/gijon-paseo.jpg", pie: "Paseo del Muro, Gijón" },
 { src: "/fotos/asturias-centro/gijon-cervigon.jpg", pie: "Senda del Cervigón, Gijón" },
 ],
 fotosFuera: [
 { src: "/fotos/asturias-centro/gijon-poniente.jpg", pie: "Playa de Poniente, Gijón" },
 { src: "/fotos/asturias-centro/gijon-somio.jpg", pie: "Somió, Gijón" },
 ],
 creditoFotos: credito,
 }
```

### 8.2 Capa 2026 completa

> CITA LITERAL — fila `slug: "gijon"` en `web/src/data/municipios-asturias-centro.json`.  
> Autoridad factual. No rellenar null/`…` truncados.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `227812` |
| `A_3hab` | `315432` |
| `B_2hab` | `184002` |
| `B_3hab` | `254772` |
| `advertenciaMicrozona` | `null` *(n.d. / ausente)* |
| `aeropuertoMin` | `30` |
| `aeropuertoPractico2026` | Asturias 37 km · 30 min (Palma: verano) Tiempo histórico orientativo: ~30 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Asturias 37 km · 30 min (Palma: verano) |
| `autonomiaCotidiana` | MUY ALTA |
| `casaQueBuscar` | Ascensor o acceso sin barreras, exterior, 2–3 dormitorios y servicios andando... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Intermedio |
| `comunicaciones` | A-8 / A-66; tren; puerto; aeropuerto a 30 min |
| `comunicacionesNota10` | `9` |
| `cubiertos` | `162` |
| `dependenciaCocheTexto` | Baja en barrios centrales bien elegidos. |
| `despejados` | `45` |
| `estacionalidad2026` | Ciudad plenamente anual. |
| `fibra` | Sí |
| `franja` | A |
| `hospitalMin` | `5` |
| `hospitalPractico2026` | Cabueñes/Jove según servicio |
| `hospitalPriv` | 4 km · 5 min · Hospital de Jove (Gijón) |
| `hospitalPub` | 4 km · 5 min · Cabueñes (Gijón) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 4 km · 5 min · Cabueñes (Gijón); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `78` |
| `lat` | `43.532` |
| `lluviaDias` | `145` |
| `lluviaMm` | `1000` |
| `lon` | `-5.661` |
| `mapa` | 57_gijon.png |
| `mercadoReventa` | Mercado relativamente amplio por demanda residencial permanente y servicios. ... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | Centro, La Arena/San Lorenzo y otros barrios cambian precio, playa y aparcamiento. |
| `minBano` | `3` |
| `minCosta` | `1` |
| `municipio` | Gijón |
| `n` | `57` |
| `niebla` | Baja |
| `obraNueva` | Sí |
| `pais` | España |
| `palmaDirecta2026` | Asturias: Palma figura entre destinos publicados en 2026; programación/temporada variable, comprobar antes de viajar. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Asturias (verano) · 30 min |
| `paseoCotidiano` | Muro de San Lorenzo–Cimavilla–Piles, ampliable por costa. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Mar y autonomía urbana juntos, a cambio de precio creciente, tráfico y diferencias de barrio. |
| `playaBano` | San Lorenzo / Poniente (urbanas) |
| `playaCotidiana` | SÍ |
| `playaCotidianaModo` | San Lorenzo está integrada en el tejido urbano y el paseo del Muro. |
| `precioM2` | `2696` |
| `provincia` | Asturias |
| `radioCotidiano` | Ciudad completa: mercados, cultura, deporte, sanidad, comercio y restauración; amplias zonas permiten vida sin coche. |
| `radioSalida` | Costa oriental/occidental asturiana y entorno rural; no necesaria para resolver la rutina. |
| `sanidadPrimaria2026` | Red urbana completa |
| `servicios` | `10` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | Tiene: ciudad completa (270.000 hab), hospitales, playa urbana, tren |
| `slug` | gijon |
| `solHoras` | `1850` |
| `tempAgua` | 19-21 |
| `tempInvierno` | `9.5` |
| `tempVerano` | `19.5` |
| `transporteRelevante2026` | Ferrocarril y bus urbano/interurbano. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Cabueñes/Jove según servicio. |
| `viento` | Baja |
| `zona` | Asturias Centro |

### 8.3 Auditorías / plan existentes

**NO existe** `docs/PLAN_EDITORIAL_ASTURIAS_CENTRO_2026.md` ni `PLAN_EDITORIAL_ASTURIAS_ORIENTE_2026.md` (ni equivalente CURSOR_19 para Centro/Oriente).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n correspondiente):

```
| 57 | Gijón | Asturias Centro | precio relato ~2300 vs ficha 2696 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; repite nota servicios X/10 (+3) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 57 | Gijón | Asturias Centro | no | — |
```

**estudio_zonas.md** (histórico/contexto — **NO** sustituye capa 2026): extracto de zona en §1; detalle municipal bajo demanda en el estudio. Snippet zona:

<details><summary>Contexto estudio (recorte)</summary>

## 11. Asturias Centro (Asturias) · Cudillero, Muros de Nalón, Soto del Barco, Salinas (Castrillón), Luanco (Gozón), Candás (Carreño), Gijón

### La zona

La costa del área metropolitana asturiana: Gijón (270.000 hab.), Avilés (77.000) y Oviedo (220.000, con el HUCA) a 10-30 minutos de cualquier punto, y el aeropuerto de Asturias en Santiago del Monte (Castrillón), a 10 min de Salinas. Cudillero es el pueblo colgado de postal; Muros y Soto del Barco, el estuario tranquilo del Nalón; Salinas, la villa-playa residencial de chalés y casas bajas junto a Avilés; Luanco y Candás, villas marineras del Cabo Peñas; Gijón, la ciudad de mar de Asturias.

Es la zona con mejor logística del Cantábrico occidental (aeropuerto, tres ciudades, cuatro hospitales) y con dos matices: cielo cantábrico y una industria pesada (siderurgia de Avilés y Gijón, central y cementera de Aboño) que se nota en el aire según el viento.

### Clima mes a mes

| | Oct-Mar | Abr-May | Jun-Sep | Año |
|---|---|---|---|---|
| Días de lluvia al mes | 14-16 | 12-13 | 8-10 | 145-150 |
| Máxima / mínima típica | 13 / 6 °C (ene.) | 16 / 9 °C | 23 / 16 °C (jul.) | |
| Horas de sol al mes | 70-100 | 160-190 | 200-230 | 1.780-1.…

</details>


### 8.4 Auditoría relato ↔ capa

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | **10/10** repetido | `servicios` **10**; ciudad completa | DUPLICA_CAPA | Omitir chip; narrar MUY ALTA / ciudad |
| Precio ~2300 vs 2696 | casa remite + «000 euros»; «269.000» 3hab suelto | `precioM2` **2696**; A_3hab 315432 | OBSOLETO | Omitir cifras/totales; TablaPrecios |
| Prosa rota «000 euros» | Tras remitir a capa queda fragmento «000 euros» (y a veces totales sueltos) | Cifras viven en `precioM2` / A/B / TablaPrecios | OBSOLETO | Borrar resto roto; no reponer €/m² históricos en prosa |
| Escala: ciudad not villa | 270k hab; ciudad de mar completa | `autonomiaCotidiana` **MUY ALTA**; serviciosNota ciudad 270.000 | ALINEADO / P4_PRESERVAR | Nunca tratar como villa; barrios importan |
| Playa / San Lorenzo | San Lorenzo + Muro + Poniente | `playaCotidiana` **SÍ**; San Lorenzo/Poniente; paseo Muro–Cimavilla–Piles | ALINEADO / P4_PRESERVAR | Preservar playa urbana; peaje tráfico/precio barrio |
| microzonaPrecio barrios | Somió / primera línea fuera de asequible | `microzonaPrecio` Centro, La Arena/San Lorenzo y otros barrios | SOPORTADO_PERO_INFRAUSADO | Advertir barrios en casa/encaja |
| Hospital / aero | Cabueñes/Jove ~5′; Asturias ~30′ (peor Centro) | hospitalMin 5; aeropuertoMin 30 | ALINEADO / DUPLICA_CAPA | Tradeoff ciudad vs vuelo |
| Aeropuerto / Palma | Minutos aero + Palma verano (a veces suena permanente) | `aeropuertoMin` + `palmaDirecta2026` temporada variable | DUPLICA_CAPA / ALINEADO | Consecuencia una vez; no permanente Palma; omitir cascada de minutos |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos abrir→tiempo→encaja | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| CURSOR_28 control: MUY ALTA + ciudad + San Lorenzo + barrios | Presente | Campos capa | ALINEADO | Preservar densidad urbana; omitir chips/€ |

### 8.5 P4 / identidad

| Elemento | Qué es | Por qué importa | Cotidiano/salida | Soporte repo | Preservar |
|---|---|---|---|---|---|
| San Lorenzo + Muro | Playa urbana | Ciudad-mar | Cotidiano | playa SÍ | sí |
| Cimadevilla | Barrio antiguo | Identidad | Cotidiano | relato | sí |
| Poniente | Segunda orilla urbana | Alternativa | Cotidiano | playaBano | sí |
| Somió | Chalets cerca orilla | Microzona cara | Cotidiano si allí | relato + microzonaPrecio | sí |
| Cabueñes / Jove | Hospitales urbanos | Sanidad MUY ALTA | Cotidiano acceso | hospital | sí |

### 8.6 Vida cotidiana soportada

Pregunta guía: *Ya vivo aquí. Tengo toda la mañana libre. ¿Qué puedo hacer con mi día sin convertirlo en turismo?*

| Elemento | Clasificación | Base repo |
|---|---|---|
| San Lorenzo / Muro | YA SOPORTADO | playa SÍ |
| Ciudad sin coche (barrios centrales) | YA SOPORTADO | autonomia MUY ALTA |
| Somió | YA SOPORTADO | relato |
| Mercado nombrado concreto | NO SOPORTADO (genérico sí) | — |
| Tratar como villa | NO SOPORTADO | — |

### 8.7 Reality toll

Solo peajes estructurales **soportados** en repo:

- Precio creciente / diferencias de barrio
- Tráfico y afluencia San Lorenzo
- Aero ~30′ (peor Centro) vs sanidad 5′
- Ciudad plena anual — no «villa»
- Aire oeste (Aboño) según viento

### 8.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | ~2300 aud; «000 euros»; 269.000 suelto | **2696** | OBSOLETO |
| microzonaPrecio | Somió / 1ª línea | Barrios Centro/Arena/San Lorenzo | Usar |
| A_3hab | — | 315432 | Tabla |

### 8.9 Clima: deuda / duplicación

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en tiempo + encaja (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `gijon` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_28.**

**Sin correcciones en este bloque: sí.**

### 8.10 Mar / paseo

- **Mar/baño:** San Lorenzo / Poniente — **SÍ** urbanas.
- **Paseo:** Muro San Lorenzo–Cimavilla–Piles.
- Ciudad: paseo urbano ≠ «villa-paseo».

### 8.11 No soportado / no inventar

- ~2300 / 269k en prosa
- Chip 10/10
- Tratar como villa
- Primera línea San Lorenzo «asequible» garantizada
- Palma permanente
## 9. Villaviciosa

### 9.1 Relato actual completo

> CITA LITERAL — clave `villaviciosa` en `web/src/lib/relatos-asturias-oriente.ts`.

```ts
villaviciosa: {
 escala: "Villa de la sidra",
 abrir: [
 "Villaviciosa se siente villa completa desde el primer paseo. Unos catorce mil habitantes, casco histórico con mesas y comercio, y el olor a manzana cuando los llagares —bodegas de sidra donde se prensan las manzanas— trabajan a pleno. No es una foto típica de playa: es capital comarcal de la sidra, con la Fiesta de la Manzana como fecha fija del calendario y una vida de villa que no depende del oriente más turístico. Detrás del casco, la ría —reserva natural, paseo y observatorio de aves— abre un paisaje de agua calmada y niebla media; a unos doce minutos, Rodiles —playa larga con pinar y surf— y Tazones —pueblo marinero donde desembarcó Carlos V— cierran la orilla. Valdediós —monasterio prerrománico— queda a unos diez. Gijón, a veinticinco minutos, resuelve ciudad sin renunciar a villa propia.",
 "Quien vive aquí es gente local, vecinos de la comarca y quien eligió sidra, ría y logística frente a muro y treinta playas. Un martes de noviembre se compra en el casco, se camina cualquier día del año y se resuelve el día a día: farmacia, súper, mesas abiertas. Los servicios alcanzan 7/10 y hay fibra. Cabueñes, el hospital público de Gijón, queda a unos veinticinco minutos —el mejor tiempo sanitario del oriente—; Jove, el privado, a unos treinta. El aeropuerto de Asturias anda alrededor de los cuarenta y cinco minutos, con Palma en verano. Ese mapa no se arregla eligiendo otra calle: la apuesta de Villaviciosa es Gijón y Cabueñes, no Arriondas ni el Descenso del Sella.",
 "En verano Rodiles y Tazones reciben toallas, tráfico hacia la playa y algo de ruido de temporada. La villa anima, pero no multiplica población como Llanes o Ribadesella: el veraneo madrileño intenso queda hacia el este. Fuera de agosto Villaviciosa sigue siendo villa completa —casco vivo, ría con niebla media, sidra como oficio y fiesta—. Quien busque silencio absoluto de invierno lo encontrará en las orillas de la ría; quien busque café y recados en enero, también. Las dos cosas conviven aquí.",
 "La semana tiene rutinas claras: casco, llagares, paseo de ría y, cuando apetece, Rodiles o Tazones a doce minutos. Primavera y otoño son buenas épocas para conocerlo: la manzana y las fiestas locales marcan el calendario; un noviembre gris en la ría enseña el trato del cielo cantábrico mejor que cualquier sábado despejado. Si solo conoces agosto en Rodiles, te llevas la imagen de folleto de la playa. Si has visto niebla de ría un martes, ya puedes decidir si de verdad quieres vivir aquí.",
 "El calendario local no es decoración. La Fiesta de la Manzana y las patronales llenan el casco unos días de música, mesas y tráfico de comarca; no son la presión de agosto de Llanes, pero sí semanas en que la villa deja de ser solo de vecinos. Quien viva junto al casco o en el acceso a Rodiles debe contarlas como parte del año, no como sorpresa.",
 ],
 tiempo: [
 "Si vienes de Baleares, notará el cielo más gris y con menos sol que en Mallorca, no tanto el frío. Villaviciosa suma unas 1.700 a 1.750 horas de sol y unos cuarenta días despejados, frente a las 2.800 horas y ciento veinte jornadas claras de Mallorca. Caen alrededor de 1.200 a 1.300 milímetros en unos 153 a 155 días; unos 168 cubiertos marcan el contraste. La niebla es media en la ría; el viento, bajo —la sierra protege—. La diferencia se nota sobre todo entre noviembre y febrero: mañanas grises, terraza que se usa la mitad o menos. De junio a septiembre, en cambio, la orilla se usa.",
 "El verano ronda 19,5 °C, con máximas habituales alrededor de 23-24 °C y apenas uno a tres días sobre 30 °C —fresco frente al calor mediterráneo—. Rodiles y Tazones tienen agua entre 19 y 21 °C; la ría ofrece orilla más calmada que el Cantábrico abierto. También en julio llueve con frecuencia. Conviene venir un día de niebla en la ría y un noviembre, no solo un sábado de sol en Rodiles.",
 ],
 vivir: [
 "El invierno en casa se nota por la niebla media de la ría y la humedad: entre noviembre y febrero las mañanas grises dejan la terraza a medias. Conviene tocar paredes un día húmedo junto a la ría y preguntar por aislamiento, no solo firmar con sol de Rodiles. El olor a manzana de los llagares marca otra estación; el frío interior y la humedad, el trato diario.",
 "Sin coche la villa se sostiene: casco con farmacia, súper y mesas un martes de noviembre; servicios 7/10 y fibra. En enero Villaviciosa sigue siendo villa completa —café y recados—, no silencio absoluto. Rodiles, Tazones o Valdediós piden unos diez o doce minutos cuando se quiere orilla o monasterio; el día a día se camina en el casco.",
 "Conviven gente local, vecinos de la comarca y quien eligió sidra, ría y logística. Se oye asturiano en los llagares y en el mercado; el castellano basta para lo cotidiano. La vida social pasa por la Fiesta de la Manzana, el casco y el ritmo de capital comarcal más que por el veraneo madrileño del oriente turístico. Entre semana manda la villa; en verano Rodiles y Tazones suben el volumen sin multiplicar población como Llanes.",
 "La sanidad mira a Gijón: Cabueñes queda a unos veinticinco minutos —el mejor tiempo sanitario del oriente—; Jove, a unos treinta. Empadronarse aquí abre médico y servicios de villa; para especialidades se baja a la ciudad. No es Arriondas ni el Hospital del Oriente: la apuesta es Cabueñes.",
 "Ir y volver a Mallorca pasa por el aeropuerto de Asturias alrededor de los cuarenta y cinco minutos, con Palma en verano. Santander queda hacia las dos horas si hace falta casi todo el año. En invierno conviene mirar el calendario real de vuelos, no solo el de agosto en Rodiles.",
 "La vivienda típica es piso o casa de villa en el casco y el entorno de la ría: edificios de uso real, poca o ninguna obra nueva, fibra. Junto a la ría hay que contar con humedad y niebla; hacia Rodiles, ocupación de verano y salitre. Reforma y humedad importan tanto como los metros.",
 ],
 historia: [
 "La sidra, los llagares y el casco explican Villaviciosa: capital comarcal de la manzana y villa de servicios, no solo foto de playa. El oficio de la sidra no es adorno turístico: es economía y calendario. Tazones añade la ficha marinero del desembarco de Carlos V —el emperador llegó a esa orilla en el siglo XVI— y fija el concejo en la costa que mira al Cantábrico sin dejar de ser villa de interior de ría.",
 "La ría —reserva natural con paseo y observatorio de aves— y Valdediós —monasterio prerrománico a unos diez minutos— completan capas de paisaje y patrimonio a un paso. No hace falta inventar una historia de ciudad: aquí lo que conviene saber es de sidra, ría, pueblo marinero e Indianos cercanos en el oriente, no de muro amurallado ni de Descenso del Sella.",
 "Gijón a veinticinco minutos y Cabueñes a veinticinco cierran el mapa práctico: Villaviciosa creció como villa de comarca orientada al oeste de la zona, hacia servicios y ciudad, mientras Llanes y Ribadesella miran al veraneo y a los Picos. Ese sesgo —logística frente a imagen turística— es el carácter del sitio.",
 ],
 fuera: [
 "Si solo hay tiempo para una tarde de diario, esa tarde es la ría: paseo, agua calmada, observatorio de aves y niebla media como parte del trato. No es playa de toalla; es orilla de reserva donde se camina y se mira. Un martes de noviembre puedes tener el paseo casi para ti; un domingo de verano hay más gente, pero el carácter no se vuelve de resort.",
 "A unos doce minutos, Tazones cubre pueblo marinero —casas sobre el puerto, olor a sal, la ficha de Carlos V— y Rodiles ofrece playa larga con pinar y surf: la orilla de baño y de tarde completa. El agua anda entre 19 y 21 °C; se entra, se nada un rato, se sale con la piel que se despierta del frío. En agosto el aparcamiento y el tráfico hacia la playa piden paciencia; fuera de temporada, Rodiles vuelve a escala de vecinos.",
 "Valdediós aporta prerrománico a unos diez minutos: piedra y silencio de monasterio como salida distinta al mar. Colunga y Lastres quedan hacia el este; Gijón, a veinticinco, resuelve ciudad, hospital y gestos que la villa no cubre. Aquí el paisaje diario es ría y sidra; la playa larga y el pueblo marinero son salidas cortas, no umbral de cada casa.",
 ],
 casa: [
 "El modelo de casa aquí no es la urbanización cerrada. Es piso o vivienda de villa en el casco y el entorno de la ría: edificios de uso real, poca o ninguna obra nueva, fibra. Junto a la ría hay que contar con humedad y niebla; hacia Rodiles, ocupación de verano y salitre. Conviene tocar paredes un día húmedo y probar el acceso a la playa un sábado de agosto, no solo firmar con sol de folleto.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros. La franja media puede ser piso reformado en casco o vivienda más cerca de la ría. Tres habitaciones pegadas a la orilla de verano no son el trato habitual de esta cifra: hay que mirar casco o entorno de villa.",
 "Los servicios son 7/10: villa con vida propia. Cabueñes queda a unos veinticinco minutos; Jove, a unos treinta. Asturias está a unos cuarenta y cinco, con Palma en verano. Eso es Villaviciosa: sidra, ría y playa a doce minutos, con la logística más usable de la zona y el cielo cantábrico mínimo como precio del trato.",
 ],
 encaja: {
 si: [
 "La ría y Rodiles importan más que el muro de Llanes o el Sella lleno en agosto. Villaviciosa es la villa práctica del oriente: sidra y llagares, casco con vida un martes de noviembre, paseo de ría y observatorio de aves, Tazones —pueblo marinero— y Rodiles —playa larga con pinar y surf— a unos doce minutos. Quien quiera baño o paseo de orilla sin vivir dentro del veraneo madrileño de Llanes y Ribadesella encontrará aquí verano fresco —alrededor de 19,5 °C, agua entre 19 y 21 °C— y niebla media en la ría como parte del trato, no como sorpresa. Unas 1.700 a 1.750 horas de sol y unos cuarenta días despejados —frente a las 2.800 horas y ciento veinte jornadas claras de Mallorca— marcan el contraste: se gana frescura frente al calor mediterráneo y se acepta el cielo más opuesto a Baleares de la tabla. Valdediós a diez minutos y Gijón a veinticinco cierran patrimonio y ciudad sin renunciar a villa propia.",
 "Funciona si se prioriza logística frente a foto de Picos cada tarde. Cabueñes, en Gijón, queda a unos veinticinco minutos —el mejor tiempo sanitario del oriente—; Jove, a unos treinta; el aeropuerto de Asturias, alrededor de los cuarenta y cinco, con Palma en verano. Los servicios alcanzan 7/10 y hay fibra; el más amable de la zona. Agosto anima Rodiles y Tazones con toallas y tráfico hacia la playa, pero la villa no multiplica población como Llanes o Ribadesella. Quien pruebe un martes de niebla en la ría y un sábado de Rodiles en temporada, y siga queriendo sidra, orilla y hospital a media hora de Gijón, entenderá Villaviciosa sin inventarse otra costa.",
 ],
 no: [
 "El cielo de Baleares no está aquí: unos 168 días cubiertos, lluvia frecuente también en julio y un sol mínimo de tabla. Quien se decida solo tras un sábado despejado de agosto, sin probar niebla de ría ni un noviembre gris, se llevará una sorpresa. Si lo que se busca es villa amurallada con más de treinta playas, Llanes lo cubre; si el marco diario debe ser el Sella, Santa Marina y Tito Bustillo, Ribadesella; si Lastres colgado y el Fitu cada tarde, Colunga. Villaviciosa compite en practicidad y ría, no en esa foto típica.",
 "Tampoco encaja quien necesite los Picos a media hora como paseo de diario —aquí Cangas o Covadonga piden más trayecto— ni quien quiera el mejor vuelo a Palma casi todo el año: Santander queda hacia las dos horas; eso es ventaja de Ribadedeva o, en menor medida, de Llanes. El Hospital del Oriente, en Arriondas, no es la referencia de este concejo: quien viva mirando solo al oriente turístico puede preferir Ribadesella (Arriondas a veinte). Aquí la apuesta es Cabueñes y Gijón, no el Descenso del Sella ni el Cuera encima.",
 ],
 veredicto:
 "Veredicto: Villaviciosa encaja como villa de sidra, ría y playa a doce minutos —piso o vivienda en casco o hacia la ría, con fibra y ojo a humedad y niebla— sobre todo si Cabueñes a veinticinco, Asturias a cuarenta y cinco y un metro importan más que el veraneo intenso del oriente turístico. Probar niebla de ría y un agosto en Rodiles antes de comprar. Se ganan servicios 7/10, Tazones, Valdediós y la logística más usable de la zona; se aceptan cielo cantábrico mínimo, verano fresco y Picos más lejos que desde Ribadesella. Quien priorice muro y treinta playas, Llanes; quien priorice Sella y hospital comarcal a veinte, Ribadesella.",
 },
 fotosAbrir: [
 { src: "/fotos/asturias-oriente/villaviciosa-villa.jpg", pie: "Villaviciosa: villa de la sidra" },
 { src: "/fotos/asturias-oriente/villaviciosa-ria.jpg", pie: "Ría de Villaviciosa" },
 ],
 fotosHistoria: [
 { src: "/fotos/asturias-oriente/villaviciosa-valdedios.jpg", pie: "Valdediós, cerca de Villaviciosa" },
 ],
 fotosFuera: [
 { src: "/fotos/asturias-oriente/villaviciosa-tazones.jpg", pie: "Tazones, pueblo marinero" },
 { src: "/fotos/asturias-oriente/villaviciosa-rodiles.jpg", pie: "Rodiles y la ría desde el monte" },
 ],
 creditoFotos: credito,
 }
```

### 9.2 Capa 2026 completa

> CITA LITERAL — fila `slug: "villaviciosa"` en `web/src/data/municipios-asturias-oriente.json`.  
> Autoridad factual. No rellenar null/`…` truncados.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `157508` |
| `A_3hab` | `218088` |
| `B_2hab` | `127218` |
| `B_3hab` | `176148` |
| `advertenciaMicrozona` | La villa interior y Rodiles/costa son experiencias distintas. |
| `aeropuertoMin` | `45` |
| `aeropuertoPractico2026` | Asturias 60 km · 45 min (Palma: verano); Santander 159 km · 115 min (Palma: casi todo el año) Tiempo histórico orientativo: ~45 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Asturias 60 km · 45 min (Palma: verano); Santander 159 km · 115 min (Palma: casi todo el año) |
| `autonomiaCotidiana` | FUERTE |
| `casaQueBuscar` | Vivienda cómoda y accesible, 2–3 dormitorios, exterior, servicios cotidianos ... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Más húmedo / nublado |
| `comunicaciones` | A-8 / N-632 |
| `comunicacionesNota10` | `7` |
| `cubiertos` | `168` |
| `dependenciaCocheTexto` | Baja-media en villa; coche para costa. |
| `despejados` | `40` |
| `estacionalidad2026` | Villa anual; costa más estacional. |
| `fibra` | Sí |
| `franja` | B |
| `hospitalMin` | `25` |
| `hospitalPractico2026` | Hospital de Cabueñes (Gijón), aprox. 25 min; referencia práctica para atención hospitalaria. |
| `hospitalPriv` | 30 km · 30 min · Hospital de Jove (Gijón) |
| `hospitalPub` | 25 km · 25 min · Cabueñes (Gijón) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 20 km · 25 min · Cabueñes (Gijón); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `80` |
| `lat` | `43.481` |
| `lluviaDias` | `153` |
| `lluviaMm` | `1200` |
| `lon` | `-5.435` |
| `mapa` | 58_villaviciosa.png |
| `mercadoReventa` | Mercado intermedio: base residencial propia y/o demanda exterior. Priorizar u... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `12` |
| `minCosta` | `6` |
| `municipio` | Villaviciosa |
| `n` | `58` |
| `niebla` | Media |
| `obraNueva` | No |
| `pais` | España |
| `palmaDirecta2026` | Asturias: Palma figura entre destinos publicados en 2026; programación/temporada variable, comprobar antes de viajar. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Santander (casi todo el año) · 115 min |
| `paseoCotidiano` | Villa y entorno de ría; playa mediante desplazamiento. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Muy buena vida de villa, pero hay que elegir entre servicios a pie y playa a la puerta. |
| `playaBano` | Rodiles |
| `playaCotidiana` | NO DESDE VILLA |
| `playaCotidianaModo` | Rodiles es una salida de playa, no una playa urbana de Villaviciosa. |
| `precioM2` | `1864` |
| `provincia` | Asturias |
| `radioCotidiano` | Villa con comercio, salud y servicios comarcales suficientes para una rutina autónoma. |
| `radioSalida` | Ría y Rodiles para playa; Gijón/Oviedo para escala mayor. |
| `sanidadPrimaria2026` | Atención primaria local |
| `servicios` | `7` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | Tiene: villa de servicios, sidra, casco. Falta: hospital en el municipio |
| `slug` | villaviciosa |
| `solHoras` | `1750` |
| `tempAgua` | 19-21 |
| `tempInvierno` | `9.0` |
| `tempVerano` | `19.5` |
| `transporteRelevante2026` | A-8 / AS-256 / AS-113; bus Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital de Cabueñes (Gijón), aprox. 25 min; referencia práctica para atención hospitalaria.. |
| `viento` | Baja |
| `zona` | Asturias Oriente |

### 9.3 Auditorías / plan existentes

**NO existe** `docs/PLAN_EDITORIAL_ASTURIAS_CENTRO_2026.md` ni `PLAN_EDITORIAL_ASTURIAS_ORIENTE_2026.md` (ni equivalente CURSOR_19 para Centro/Oriente).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n correspondiente):

```
| 58 | Villaviciosa | Asturias Oriente | precio relato ~1500 vs ficha 1864 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 58 | Villaviciosa | Asturias Oriente | no | — |
```

**estudio_zonas.md** (histórico/contexto — **NO** sustituye capa 2026): extracto de zona en §1; detalle municipal bajo demanda en el estudio. Snippet zona:

<details><summary>Contexto estudio (recorte)</summary>

## 12. Asturias Oriente (Asturias) · Villaviciosa, Colunga, Ribadesella, Llanes, Ribadedeva

### La zona

La costa donde la montaña cae al mar: la Sierra del Sueve (1.160 m) sobre Colunga, la Sierra del Cuera (1.300 m) sobre Llanes, y detrás los Picos de Europa a 30-45 min. Villaviciosa es la capital de la sidra, con su ría (reserva natural) y Tazones; Colunga tiene Lastres (pueblo colgado) y el museo del Jurásico; Ribadesella, el Sella, la cueva de Tito Bustillo y el paseo de Santa Marina con sus casas de Indianos; Llanes, la villa amurallada con decenas de playas y pueblos con playa (Barro, Niembro, Celorio, Poo) muy queridos por Madrid; Ribadedeva (Colombres) es la frontera con Cantabria, con el Archivo de Indianos y la cueva del Pindal.

Es la zona más espectacular de la tabla en paisaje y la peor en sol. Sanidad y aeropuerto están en el límite de lo que aceptas.

### Clima mes a mes

| | Oct-Mar | Abr-May | Jun-Sep | Año |
|---|---|---|---|---|
| Días de lluvia al mes | 15-17 | 13-14 | 9-11 | 153-155 |
| Máxima / mínima típica | 13 / 6 °C (ene.) | 17 / 9 °C | 23-24 / 16 °C (jul.) | |
| Horas de sol al mes | 65-100 | 160-190 | 200-220 | 1.700-1.750 |

Sol 1.700-1.750 h (el míni…

</details>


### 9.4 Auditoría relato ↔ capa

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | **7/10** repetido | `servicios` **7**; villa sidra; falta hospital municipio | DUPLICA_CAPA | Omitir chip; narrar FUERTE |
| Precio ~1500 vs 1864 | casa remite + «000 euros»; auditoría ~1500 | `precioM2` **1864** | OBSOLETO | Omitir cifras; TablaPrecios |
| Prosa rota «000 euros» | Tras remitir a capa queda fragmento «000 euros» (y a veces totales sueltos) | Cifras viven en `precioM2` / A/B / TablaPrecios | OBSOLETO | Borrar resto roto; no reponer €/m² históricos en prosa |
| Playa NO DESDE VILLA | Rodiles/Tazones ~12′ como orilla | `playaCotidiana` **NO DESDE VILLA**; baño Rodiles; paseo villa/ría | ALINEADO | Separar ría cotidiana vs Rodiles salida; no vender playa a pie desde casco |
| Hospital Cabueñes 25′ | ~25′ Cabueñes «mejor oriente» | `hospitalMin` 25; Cabueñes | ALINEADO / DUPLICA_CAPA | Una mención |
| Microzona villa vs Rodiles | Presente (ría vs costa) | `advertenciaMicrozona` villa interior ≠ Rodiles/costa | ALINEADO / P4_PRESERVAR | Preservar sidra/ría; costa = salida |
| Aeropuerto / Palma | Minutos aero + Palma verano (a veces suena permanente) | `aeropuertoMin` + `palmaDirecta2026` temporada variable | DUPLICA_CAPA / ALINEADO | Consecuencia una vez; no permanente Palma; omitir cascada de minutos |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos abrir→tiempo→encaja | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| CURSOR_28 control: playa NO DESDE VILLA + Cabueñes 25 + 000 euros | Presente | Campos capa | OBSOLETO (precio) + ALINEADO (playa/hospital) | Quitar 000 euros; no vender Rodiles como urbana |

### 9.5 P4 / identidad

| Elemento | Qué es | Por qué importa | Cotidiano/salida | Soporte repo | Preservar |
|---|---|---|---|---|---|
| Casco / sidra / llagares | Villa de manzana | Autonomía FUERTE | Cotidiano | relato + servicios 7 | sí |
| Ría / reserva | Agua calmada + aves | Paseo NO playa | Cotidiano | paseo + NO DESDE VILLA | sí |
| Rodiles | Playa larga/surf | Baño = salida | Salida ~12′ | playaBano | sí |
| Tazones | Pueblo marinero | Identidad costa | Salida | relato | sí |
| Valdediós | Monasterio | Patrimonio | Salida | relato | sí |

### 9.6 Vida cotidiana soportada

Pregunta guía: *Ya vivo aquí. Tengo toda la mañana libre. ¿Qué puedo hacer con mi día sin convertirlo en turismo?*

| Elemento | Clasificación | Base repo |
|---|---|---|
| Casco / sidra / compra | YA SOPORTADO | autonomia FUERTE |
| Paseo de ría | YA SOPORTADO | paseo |
| Rodiles a pie desde villa | NO SOPORTADO | NO DESDE VILLA |
| Tazones / Valdediós | YA SOPORTADO (salida) | relato |
| Nombre llagar concreto | NO SOPORTADO | — |

### 9.7 Reality toll

Solo peajes estructurales **soportados** en repo:

- Playa no desde villa (Rodiles salida)
- Hospital Cabueñes ~25′ (fuera municipio)
- Aero ~45′; Palma estacional
- Niebla/humedad de ría
- Elegir servicios a pie vs playa a la puerta

### 9.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | ~1500 aud; «000 euros» | **1864** | OBSOLETO |
| A/B | — | 218088 / 176148 | Tabla |

### 9.9 Clima: deuda / duplicación

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en tiempo + encaja (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `villaviciosa` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_28.**

**Sin correcciones en este bloque: sí.**

### 9.10 Mar / paseo

- **Mar/baño:** Rodiles — **NO DESDE VILLA**.
- **Paseo:** villa + ría (aves); playa = desplazamiento.
- No confundir ría cotidiana con playa de toalla.

### 9.11 No soportado / no inventar

- ~1500 / «000 euros»
- Chip 7/10
- Rodiles como playa a pie desde casco
- Nombres de llagares
- Palma permanente
## 10. Colunga

### 10.1 Relato actual completo

> CITA LITERAL — clave `colunga` en `web/src/lib/relatos-asturias-oriente.ts`.

```ts
colunga: {
 escala: "Lastres y el Sueve",
 abrir: [
 "Colunga no se siente villa completa a pie: se siente costa donde la montaña cae al mar. Unos tres mil doscientos habitantes, Lastres —pueblo colgado sobre el puerto, con el mirador de San Roque—, el MUJA —Museo del Jurásico de Asturias—, playas de La Griega —huellas de dinosaurio en la arena—, La Isla y Lastres a unos cinco minutos, y detrás la Sierra del Sueve con el Mirador del Fitu a 1.160 m: una de las vistas mar-montaña más famosas de España. El casco de Colunga cubre lo básico; la foto típica vive en el pueblo colgado y en la sierra. Es concejo de coche y paisaje, no de farmacia y cine a cada esquina.",
 "Quien vive aquí es gente local, quien eligió Lastres o el Fitu a propósito, y visitantes de día que bajan a la orilla cuando el tiempo acompaña. Un martes de noviembre los servicios son 4/10: lo básico en el municipio; el comercio grande y muchos gestos piden coche hacia Villaviciosa, Ribadesella o Arriondas. La fibra es parcial: hay que comprobarla casa por casa. El Hospital del Oriente, en Arriondas, queda a unos veinte minutos —el mismo tiempo sanitario que Ribadesella, sin pagar el metro de villa turística—. El aeropuerto de Asturias anda alrededor de los sesenta minutos.",
 "En verano Lastres, La Griega y La Isla reciben visitantes de día, tráfico estrecho y aparcamiento justo. Las cuestas del pueblo colgado no se aplanan porque haga sol: quien se decida a vivir en Lastres debe probar un día de temporada alta y las piernas del mirador. Las patronales locales animan el casco unos días. Fuera de agosto el concejo vuelve a su escala pequeña: silencio, sierra sobre el mar, orillas entre acantilados casi vacías entre semana.",
 "La semana tiene rutinas distintas a las de una villa: el coche abre el mapa —Lastres, La Griega, el Fitu— y Arriondas resuelve hospital y gestos comarcales. Primavera y otoño son buenas épocas para conocerlo: el Sueve cambia de color y el mirador se ve como es de verdad sin el atasco de agosto. Si solo conoces el Fitu un día despejado, te llevas la imagen de folleto. Si has visto un martes vacío y un sábado de Lastres lleno, ya puedes decidir si de verdad quieres vivir aquí.",
 "El calendario no multiplica la población por cinco como en Llanes o Ribadesella, pero sí marca semanas de afluencia en la orilla y el pueblo colgado. Quien viva en Lastres o en el acceso a La Griega debe contar tráfico estrecho y aparcamiento justo como parte del verano, no como excepción imprevista.",
 ],
 tiempo: [
 "Si vienes de Baleares, el cielo de Colunga pide bajar expectativas de sol: suma unas 1.700 a 1.750 horas de sol y unos cuarenta días despejados, lejos de las 2.800 horas y ciento veinte jornadas claras de Mallorca. Caen alrededor de 1.200 a 1.300 milímetros en unos 153 a 155 días. El viento es bajo; el Sueve marca el microclima de sierra sobre el mar: a veces el Fitu está claro cuando la orilla aún está gris, o al revés.",
 "El verano ronda 19,5 °C, fresco frente a Baleares. La Griega, La Isla y Lastres tienen agua entre 19 y 21 °C; muchas orillas son pequeñas y abrigadas entre acantilados —baño con calma cuando el Cantábrico lo permita—. También en julio llueve varios días. Conviene venir un día de niebla o lluvia en el pueblo colgado y un noviembre vacío, no solo un sábado de sol en el Fitu.",
 ],
 vivir: [
 "El invierno en casa se nota en Lastres por las cuestas, la humedad y un pueblo colgado que se queda casi vacío entre semana: niebla o lluvia en el mirador de San Roque cambian el trato. Conviene probar las piernas un día mojado y el aislamiento de la piedra, no solo firmar con sol en el Fitu. La sierra del Sueve marca microclima: a veces el mirador está claro cuando la orilla aún está gris.",
 "Sin coche la semana no se sostiene. Los servicios son 4/10: lo básico en el municipio; el comercio grande pide Villaviciosa, Ribadesella o Arriondas. La fibra es parcial —casa por casa—. En enero el concejo vuelve a escala pequeña: silencio, sierra sobre el mar. Quien compre en Lastres debe asumir el volante como norma.",
 "Conviven gente local, quien eligió Lastres o el Fitu a propósito, y visitantes de día. Se oye asturiano en el pueblo colgado y castellano en el MUJA; el castellano basta para lo cotidiano. La vida social es de concejo pequeño y paisaje, no de villa densa. Entre semana manda el vacío; en verano Lastres, La Griega y La Isla reciben tráfico estrecho y aparcamiento justo.",
 "La sanidad comarcal es usable: el Hospital del Oriente, en Arriondas, queda a unos veinte minutos —el mismo tiempo que Ribadesella, sin pagar el metro de villa turística—. Empadronarse aquí abre lo básico; para especialidades se baja a Arriondas. No es Cabueñes a veinticinco como en Villaviciosa.",
 "Ir y volver a Mallorca pide trayecto largo: el aeropuerto de Asturias anda alrededor de los sesenta minutos, con Palma en verano; Santander, hacia las dos horas. En invierno la logística suele alargarse. Conviene mirar el calendario real de vuelos, no solo el de un sábado despejado en el Fitu.",
 "La vivienda típica es piedra o casa de uso real hacia Lastres, el casco de Colunga o las parroquias: no hay obra nueva y la fibra es parcial. En el pueblo colgado hay que contar con cuestas, humedad y ocupación de temporada. Hay que probar aparcamiento un sábado de agosto y las piernas un día de lluvia.",
 ],
 historia: [
 "Lastres —pueblo colgado— y el mirador de San Roque explican Colunga: foto marinera típica de cuesta, no de casco residencial llano. Las casas bajan hacia el puerto; el mirador resume el trato: mar abajo, sierra detrás. No es adorno: es la forma en que el concejo se ha visto a sí mismo durante generaciones.",
 "El MUJA añade la capa del Jurásico asturiano a un paso de las huellas de La Griega: museo y playa cuentan la misma costa en dos tiempos —dinosaurios en la arena, visitantes en agosto—. El Sueve y el Fitu sitúan el municipio en la costa donde la montaña cae al mar: 1.160 m de sierra sobre el Cantábrico, una de las vistas mar-montaña más citadas de España.",
 "Lo que conviene saber es de pueblo colgado, museo y mirador, no de ciudad ni de villa amurallada. Villaviciosa cubre sidra y servicios hacia el oeste; Ribadesella, Sella e Indianos hacia el este. Colunga se queda con la imagen de costa jurásica y sierra y el coche como norma.",
 ],
 fuera: [
 "Si solo hay tiempo para una tarde de foto turística, esa tarde es Lastres: el mirador de San Roque, el puerto abajo y las cuestas que marcan el cuerpo. Un martes de noviembre puedes tener el pueblo casi para ti; un domingo de agosto el tráfico estrecho y el aparcamiento justo piden paciencia. Es orilla de mirar y bajar, no de resort.",
 "A unos cinco minutos, La Griega cubre playa con huellas de dinosaurio y La Isla otra orilla abrigada entre acantilados. El agua anda entre 19 y 21 °C; se entra con calma cuando el mar lo permite. En temporada alta hay toallas y coches; fuera de agosto, las calas vuelven a escala de concejo pequeño.",
 "El Fitu ofrece la vista mar-montaña que muchos buscan sin saber nombrarla: sierra del Sueve sobre el Cantábrico. Ribadesella y Arriondas quedan hacia el este; Villaviciosa, hacia el oeste. Aquí el paisaje diario es Lastres y la sierra; el hospital comarcal y el comercio grande son salidas en coche, no umbral a pie.",
 ],
 casa: [
 "Predominan viviendas hacia Lastres, el casco de Colunga y las parroquias: piedra o casa de uso real, no urbanización. No hay obra nueva y la fibra es parcial —hay que preguntar por la línea en esa casa concreta—. En el pueblo colgado hay que contar con cuestas, humedad y ocupación de temporada. Conviene probar las piernas un día de lluvia y el aparcamiento un sábado de agosto.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros. La franja media puede ser vivienda con acceso claro al pueblo o hacia el Fitu, no necesariamente primera línea de mirador en temporada.",
 "Los servicios son 4/10. Arriondas queda a unos veinte minutos. Asturias está a unos sesenta, con Palma en verano. Eso es Colunga: Lastres y el Sueve a cambio de coche diario, fibra a comprobar y una escala que no pretende villa autosuficiente.",
 ],
 encaja: {
 si: [
 "Lastres colgado, el Sueve y el Fitu importan más que resolver la semana a pie en villa completa. Colunga es concejo de foto turística mar-montaña: mirador de San Roque sobre el puerto, MUJA —Museo del Jurásico—, La Griega con huellas de dinosaurio, La Isla y Lastres a unos cinco minutos, y detrás la sierra a 1.160 m con una de las vistas mar-montaña más famosas de España. Quien quiera bajar a orillas pequeñas entre acantilados —agua entre 19 y 21 °C, baño con calma cuando el Cantábrico lo permita— y subir al Fitu la misma tarde encontrará aquí la costa donde la montaña cae al mar, no un casco de servicios densos. El verano ronda 19,5 °C, fresco frente a Mallorca; unas 1.700 a 1.750 horas de sol y unos cuarenta despejados —frente a 2.800 y ciento veinte— explican el trato: se gana frescura y paisaje total; se acepta el sol mínimo de la tabla. En agosto Lastres, La Griega y La Isla reciben visitantes de día, tráfico estrecho y aparcamiento justo; el resto del año el concejo vuelve a su escala pequeña.",
 "Funciona si se acepta el coche como norma y el Hospital del Oriente, en Arriondas, a unos veinte minutos —el mismo tiempo sanitario que Ribadesella, sin pagar el metro de villa turística—. Los servicios son 4/10; la fibra, parcial y a comprobar casa por casa; el aeropuerto de Asturias anda alrededor de los sesenta minutos. A cambio, por debajo de Llanes y Ribadesella, y la vida diaria no depende del Descenso del Sella ni de multiplicar población por cinco en agosto. Quien priorice sierra sobre el mar, playas del Jurásico y Arriondas cerca, y pruebe las cuestas de Lastres en temporada alta antes de comprar, entenderá Colunga sin pedirle lo que dan Villaviciosa o Llanes.",
 ],
 no: [
 "La semana no se resuelve andando: lo básico está en el municipio, el comercio grande y muchos gestos piden coche hacia Villaviciosa, Ribadesella o Arriondas. Eso no se arregla eligiendo otra calle del pueblo colgado. Si la prioridad absoluta es villa completa a pie —farmacia, mercado, cine, mesas en noviembre—, Llanes, Ribadesella o Villaviciosa cubren esa opción; aquí los servicios 4/10 son el trato, no un fallo de calle.",
 "Tampoco encaja quien necesite el cielo de Baleares, aeropuerto cerca de una hora justa hacia Palma en verano con trayecto corto, o calma absoluta en agosto junto al mirador. Asturias queda a unos sesenta minutos; Santander, hacia las dos horas. Quien se decida solo por la foto típica del Fitu, sin probar un martes vacío ni el atasco de Lastres en temporada, se llevará una sorpresa. Si lo que manda es Cabueñes a veinticinco y sidra de villa, Villaviciosa; si muro y treinta playas, Llanes; si Sella e Indianos con villa 7/10, Ribadesella.",
 ],
 veredicto:
 "Veredicto: Colunga encaja como Lastres y el Sueve —vivienda con acceso claro al pueblo colgado o hacia el Fitu, fibra comprobada, no como villa autosuficiente— sobre todo si paisaje Jurásico y Arriondas a veinte minutos importan más que servicios a pie. Probar un agosto en Lastres y un martes de noviembre antes de comprar. Se ganan La Griega, La Isla, el MUJA y sierra sobre el mar a; se aceptan servicios 4/10, coche diario y Asturias a unos sesenta. Quien priorice villa caminable, mirar Villaviciosa o Ribadesella; quien priorice muro y playas sin cuesta, Llanes.",
 },
 fotoIdentidad: {
 src: "/fotos/asturias-oriente/colunga-identidad.jpg",
 pie: "Lastres (Colunga): casas blancas colgadas sobre la bahía — así se vive entre cuesta y mar",
 },
 fotosAbrir: [
 { src: "/fotos/asturias-oriente/colunga-lastres.jpg", pie: "Lastres, pueblo colgado" },
 { src: "/fotos/asturias-oriente/colunga-mirador.jpg", pie: "Mirador de San Roque, Lastres" },
 ],
 fotosHistoria: [
 { src: "/fotos/asturias-oriente/colunga-muja.jpg", pie: "MUJA, Museo del Jurásico de Asturias" },
 { src: "/fotos/asturias-oriente/colunga-sueve.jpg", pie: "Sierra del Sueve sobre Colunga" },
 ],
 fotosFuera: [
 { src: "/fotos/asturias-oriente/colunga-griega.jpg", pie: "Playa de La Griega" },
 { src: "/fotos/asturias-oriente/colunga-isla.jpg", pie: "Playa de La Isla, Colunga" },
 ],
 creditoFotos: credito,
 }
```

### 10.2 Capa 2026 completa

> CITA LITERAL — fila `slug: "colunga"` en `web/src/data/municipios-asturias-oriente.json`.  
> Autoridad factual. No rellenar null/`…` truncados.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `149903` |
| `A_3hab` | `207558` |
| `B_2hab` | `121076` |
| `B_3hab` | `167643` |
| `advertenciaMicrozona` | Colunga villa y Lastres son dos experiencias distintas: servicios/interior frente a puerto, pendiente y turismo. |
| `aeropuertoMin` | `60` |
| `aeropuertoPractico2026` | Asturias 76 km · 60 min (Palma: verano); Santander 143 km · 105 min (Palma: casi todo el año) Tiempo histórico orientativo: ~60 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Asturias 76 km · 60 min (Palma: verano); Santander 143 km · 105 min (Palma: casi todo el año) |
| `autonomiaCotidiana` | MEDIA |
| `casaQueBuscar` | Vivienda cómoda y accesible, 2–3 dormitorios, exterior, servicios cotidianos ... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Más húmedo / nublado |
| `comunicaciones` | A-8 / N-632 |
| `comunicacionesNota10` | `7` |
| `cubiertos` | `168` |
| `dependenciaCocheTexto` | Media-alta, especialmente para combinar servicios y costa. |
| `despejados` | `40` |
| `estacionalidad2026` | Vida anual pequeña; Lastres y costa reciben mayor presión turística. |
| `fibra` | Parcial |
| `franja` | A |
| `hospitalMin` | `20` |
| `hospitalPractico2026` | Hospital del Oriente de Asturias (Arriondas), hospital público comarcal con urgencias; aprox. 20 min desde Colunga/Ribadesella y ~35 min desde Llanes. |
| `hospitalPriv` | 45 km · 45 min · Hospital de Jove (Gijón) |
| `hospitalPub` | 20 km · 20 min · Hospital del Oriente (Arriondas) |
| `hospitalReferencia2026` | Área sanitaria oriental: Cabueñes (Gijón) como referencia superior cuando corresponda; no saltar Arriondas en la explicación cotidiana. |
| `humedad` | `80` |
| `lat` | `43.485` |
| `lluviaDias` | `153` |
| `lluviaMm` | `1200` |
| `lon` | `-5.271` |
| `mapa` | 59_colunga.png |
| `mercadoReventa` | Mercado intermedio: base residencial propia y/o demanda exterior. Priorizar u... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `5` |
| `minCosta` | `1` |
| `municipio` | Colunga |
| `n` | `59` |
| `niebla` | Baja |
| `obraNueva` | No |
| `pais` | España |
| `palmaDirecta2026` | Asturias: Palma figura entre destinos publicados en 2026; programación/temporada variable, comprobar antes de viajar. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Santander (casi todo el año) · 105 min |
| `paseoCotidiano` | Villa o puerto de Lastres; costa/MUJA como salida. |
| `paseoPendienteTopografia` | Lastres tiene pendientes fuertes. |
| `peajeRealidad` | Paisaje y costa atractivos, pero servicios, playa y vivienda no se concentran en un único núcleo. |
| `playaBano` | Lastres / La Griega |
| `playaCotidiana` | DEPENDE MICROZONA |
| `playaCotidianaModo` | La Griega queda próxima a Colunga/Lastres pero normalmente es salida; Lastres vive el puerto más que una playa urbana. |
| `precioM2` | `1774` |
| `provincia` | Asturias |
| `radioCotidiano` | Colunga concentra básicos; Lastres aporta pequeño núcleo marinero con topografía fuerte. |
| `radioSalida` | La Griega y MUJA; costa oriental. |
| `sanidadPrimaria2026` | Atención primaria local |
| `servicios` | `4` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | Tiene: Lastres y servicios básicos. Falta: comercio grande, instituto amplio |
| `slug` | colunga |
| `solHoras` | `1750` |
| `tempAgua` | 19-21 |
| `tempInvierno` | `9.5` |
| `tempVerano` | `19.5` |
| `transporteRelevante2026` | A-8 / N-632; bus Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital del Oriente de Asturias (Arriondas), hospital público comarcal con urgencias; aprox. 20 min desde Colunga/Ribadesella y ~35 min desde Llanes.. |
| `viento` | Baja |
| `zona` | Asturias Oriente |

### 10.3 Auditorías / plan existentes

**NO existe** `docs/PLAN_EDITORIAL_ASTURIAS_CENTRO_2026.md` ni `PLAN_EDITORIAL_ASTURIAS_ORIENTE_2026.md` (ni equivalente CURSOR_19 para Centro/Oriente).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n correspondiente):

```
| 59 | Colunga | Asturias Oriente | — | precio relato ~1700 vs ficha 1774 (desvío); usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 59 | Colunga | Asturias Oriente | no | — |
```

**estudio_zonas.md** (histórico/contexto — **NO** sustituye capa 2026): extracto de zona en §1; detalle municipal bajo demanda en el estudio. Snippet zona:

<details><summary>Contexto estudio (recorte)</summary>

## 12. Asturias Oriente (Asturias) · Villaviciosa, Colunga, Ribadesella, Llanes, Ribadedeva

### La zona

La costa donde la montaña cae al mar: la Sierra del Sueve (1.160 m) sobre Colunga, la Sierra del Cuera (1.300 m) sobre Llanes, y detrás los Picos de Europa a 30-45 min. Villaviciosa es la capital de la sidra, con su ría (reserva natural) y Tazones; Colunga tiene Lastres (pueblo colgado) y el museo del Jurásico; Ribadesella, el Sella, la cueva de Tito Bustillo y el paseo de Santa Marina con sus casas de Indianos; Llanes, la villa amurallada con decenas de playas y pueblos con playa (Barro, Niembro, Celorio, Poo) muy queridos por Madrid; Ribadedeva (Colombres) es la frontera con Cantabria, con el Archivo de Indianos y la cueva del Pindal.

Es la zona más espectacular de la tabla en paisaje y la peor en sol. Sanidad y aeropuerto están en el límite de lo que aceptas.

### Clima mes a mes

| | Oct-Mar | Abr-May | Jun-Sep | Año |
|---|---|---|---|---|
| Días de lluvia al mes | 15-17 | 13-14 | 9-11 | 153-155 |
| Máxima / mínima típica | 13 / 6 °C (ene.) | 17 / 9 °C | 23-24 / 16 °C (jul.) | |
| Horas de sol al mes | 65-100 | 160-190 | 200-220 | 1.700-1.750 |

Sol 1.700-1.750 h (el míni…

</details>


### 10.4 Auditoría relato ↔ capa

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | **4/10** repetido | `servicios` **4**; Lastres + básicos; falta comercio grande | DUPLICA_CAPA | Omitir chip; narrar MEDIA |
| Precio ~1700 vs 1774 | casa remite + «000 euros»; auditoría desvío ~1700 vs 1774 | `precioM2` **1774** | OBSOLETO | Omitir cifras aunque desvío sea menor |
| Prosa rota «000 euros» | Tras remitir a capa queda fragmento «000 euros» (y a veces totales sueltos) | Cifras viven en `precioM2` / A/B / TablaPrecios | OBSOLETO | Borrar resto roto; no reponer €/m² históricos en prosa |
| Lastres microzona + pendiente | Lastres colgado / San Roque; coche abre mapa | `advertenciaMicrozona` Colunga≠Lastres; `paseoPendienteTopografia` Lastres pendientes fuertes; playa DEPENDE MICROZONA | ALINEADO / P4_PRESERVAR | No generalizar Lastres a Colunga villa |
| Hospital Arriondas 20′ | ~20′ Hospital del Oriente | `hospitalMin` 20; Arriondas | ALINEADO / DUPLICA_CAPA | Una mención |
| Aeropuerto / Palma | Minutos aero + Palma verano (a veces suena permanente) | `aeropuertoMin` + `palmaDirecta2026` temporada variable | DUPLICA_CAPA / ALINEADO | Consecuencia una vez; no permanente Palma; omitir cascada de minutos |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos abrir→tiempo→encaja | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| CURSOR_28 control: Lastres+pendiente + Arriondas 20 + 000 euros | Presente | Campos capa | ALINEADO + OBSOLETO | Preservar Jurásico/Lastres/Fitu; limpiar precio roto |

### 10.5 P4 / identidad

| Elemento | Qué es | Por qué importa | Cotidiano/salida | Soporte repo | Preservar |
|---|---|---|---|---|---|
| Lastres | Pueblo colgado/puerto | Microzona + pendiente | Cotidiano si allí | advertencia + pendiente | sí |
| MUJA | Museo Jurásico | Identidad | Salida/corta | relato | sí |
| La Griega | Playa + huellas | Baño depende microzona | Salida | playa DEPENDE | sí |
| El Fitu / Sueve | Mirador mar-montaña | Paisaje | Salida | relato | sí |
| Arriondas | Hospital Oriente | Sanidad | Salida ~20′ | hospital | sí |

### 10.6 Vida cotidiana soportada

Pregunta guía: *Ya vivo aquí. Tengo toda la mañana libre. ¿Qué puedo hacer con mi día sin convertirlo en turismo?*

| Elemento | Clasificación | Base repo |
|---|---|---|
| Lastres (con pendiente) | YA SOPORTADO | microzona + pendiente |
| MUJA / La Griega | YA SOPORTADO (salida) | relato |
| Semana a pie autosuficiente | NO SOPORTADO | servicios 4 + coche |
| Nombre café Lastres | NO SOPORTADO | — |

### 10.7 Reality toll

Solo peajes estructurales **soportados** en repo:

- Coche media-alta estructural
- Lastres pendientes / microzona
- Playa depende microzona
- Arriondas ~20′; aero ~60′
- Servicios 4; fibra parcial

### 10.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | ~1700 vs 1774; «000 euros» | **1774** | OBSOLETO (desvío menor) |
| A/B | — | 207558 / 167643 | Tabla |

### 10.9 Clima: deuda / duplicación

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en tiempo + encaja (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `colunga` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_28.**

**Sin correcciones en este bloque: sí.**

### 10.10 Mar / paseo

- **Mar/baño:** Lastres / La Griega — **DEPENDE MICROZONA**.
- **Paseo:** villa o puerto Lastres; costa/MUJA salida; **pendientes fuertes en Lastres**.
- Separar Colunga servicios vs Lastres puerto.

### 10.11 No soportado / no inventar

- ~1700 / «000 euros»
- Chip 4/10
- Lastres sin pendiente / Colunga=Lastres
- Semana a pie autosuficiente
- Palma permanente
## 11. Ribadesella

### 11.1 Relato actual completo

> CITA LITERAL — clave `ribadesella` en `web/src/lib/relatos-asturias-oriente.ts`.

```ts
ribadesella: {
 escala: "Villa del Sella y playa",
 abrir: [
 "Ribadesella se siente villa equilibrada desde el primer cruce del puente. Unos cinco mil setecientos habitantes, puerto en la ría del Sella —el río que baja de los Picos y desemboca aquí—, casco con soportales, paseo de Santa Marina con casas de Indianos, playa urbana, cueva de Tito Bustillo y Vega a unos diez minutos; Cangas de Onís, Covadonga y los Picos alrededor de los treinta. No es solo la foto de verano: es villa completa con mercado, comercio y mesas un martes de noviembre, y el paisaje total —mar, río y montaña— en un solo mapa.",
 "Quien vive aquí es gente local, vecinos de toda la vida, y veraneantes que vuelven cada julio y agosto. Un martes de noviembre se camina el casco, se compra en villa y se resuelve el día a día. Los servicios alcanzan 7/10 y hay fibra. El Hospital del Oriente, en Arriondas, queda a unos veinte minutos —sanidad comarcal usable—. El aeropuerto de Asturias anda alrededor de los setenta y cinco minutos; Santander, alrededor de los noventa. Ese trayecto a Palma no se acorta eligiendo otra calle del paseo.",
 "En julio y agosto la villa multiplica población con veraneo madrileño: toallas en Santa Marina, tráfico, ruido y aparcamiento justo. El Descenso del Sella —primer sábado de agosto— llena la ría y el casco: miles de piraguas, música y un día que no se parece a ningún otro del año. De octubre a junio Ribadesella vuelve a ser una villa cuidada: soportales, paseo, puerto trabajando a escala local. Quien busque silencio absoluto de temporada alta no lo encontrará aquí; quien busque café y recados en enero, sí.",
 "La semana tiene rutinas claras: casco con soportales, Santa Marina, puerto y, cuando apetece, Vega a diez minutos o los Picos a treinta. Primavera y otoño son buenas épocas para conocerlo: el Sella cambia de color y la villa se ve como es de verdad, sin la presión de agosto. Si solo conoces el Descenso, te llevas la imagen del río lleno. Si has visto un martes gris de noviembre, ya puedes decidir si de verdad quieres vivir aquí.",
 "El calendario local no es decoración. El Descenso del Sella —primer sábado de agosto— y el veraneo madrileño marcan semanas enteras de afluencia, mesas llenas y calles lentas. Quien viva junto al paseo o en el acceso a Santa Marina debe contarlas como parte del año, no como excepción imprevista.",
 ],
 tiempo: [
 "Si vienes de Baleares, el cielo de Ribadesella pide aceptar el sol mínimo de la tabla. Suma unas 1.700 a 1.750 horas de sol y unos cuarenta días despejados, frente a las 2.800 horas y ciento veinte jornadas claras de Mallorca. Caen alrededor de 1.200 a 1.300 milímetros en unos 153 a 155 días. El viento es bajo; también en verano llueve con frecuencia. La diferencia se come sobre todo en invierno: mañanas cubiertas, terraza que se usa a medias.",
 "El verano ronda 19,5 °C, fresco frente a Baleares. Santa Marina y Vega tienen agua entre 19 y 21 °C; la ría del Sella ofrece orilla más abrigada que el Cantábrico abierto. Se gana frescura cantábrica; se aceptan 168 cubiertos y lluvia también en julio. Conviene venir un día de Descenso o de afluencia y un martes de noviembre, no solo un sábado de sol en el paseo.",
 ],
 vivir: [
 "El invierno en casa se nota por el salitre del paseo de Santa Marina y las mañanas cubiertas: la terraza de Indianos se usa a medias entre noviembre y febrero. Conviene probar un día de lluvia en el paseo y el estado de galerías, no solo firmar con sol de folleto. De octubre a junio la villa recupera calma; el frío interior y la humedad siguen siendo el trato cantábrico.",
 "Sin coche se resuelve mucho: casco con soportales, mercado, comercio y mesas un martes de noviembre; servicios 7/10 y fibra. En enero hay café y recados —villa cuidada, no decorado vacío—. Vega, Tito Bustillo o los Picos piden coche; el día a día se camina entre el puerto y Santa Marina.",
 "Conviven gente local, vecinos de toda la vida y veraneantes que vuelven cada julio y agosto. Se oye asturiano en el mercado y en el puerto; el castellano basta para lo cotidiano. La vida social pasa por el Sella, los soportales y la vida de villa —incluido el Descenso del Sella el primer sábado de agosto—. Entre semana manda la escala local; en temporada alta la población se multiplica.",
 "La sanidad comarcal es usable: el Hospital del Oriente, en Arriondas, queda a unos veinte minutos. Empadronarse aquí abre servicios de villa; para especialidades se baja a Arriondas. No es Cabueñes a veinticinco como en Villaviciosa: es hospital del oriente a media hora corta.",
 "Ir y volver a Mallorca es el punto débil: el aeropuerto de Asturias anda alrededor de los setenta y cinco minutos; Santander, alrededor de los noventa. Palma en verano cabe desde Asturias; casi todo el año, a menudo vía Santander. En invierno el coste no es solo el billete: es la logística. Conviene mirar el calendario real, no solo el de agosto en Santa Marina.",
 "La vivienda típica es piso o casa de villa en el casco o el paseo de Santa Marina: poca obra nueva, fibra, facilidad de venta alta. Junto a la playa hay que contar con ocupación de agosto, salitre y precio. Tres habitaciones pegadas a Santa Marina entran con facilidad en franja cara; en casco o hacia la ría hay más margen.",
 ],
 historia: [
 "El paseo de Santa Marina y las casas de Indianos explican Ribadesella: villa de retorno de América y de veraneo, con puerto en la desembocadura del Sella. Las galerías y los colores no son adorno de folleto: son el carácter de la orilla, la ficha de quien marchó y volvió plantando casa frente al mar.",
 "Tito Bustillo —arte paleolítico en cueva— añade una capa de miles de años bajo el mismo municipio. El Descenso del Sella, ya en el siglo XX convertido en fiesta de río, fija Ribadesella en el calendario nacional del primer sábado de agosto. Lo que conviene saber combina Indianos, ría, cueva y Picos a media hora: no hace falta inventar otra costa.",
 "Cangas de Onís y Covadonga, a unos treinta minutos, enlazan la villa con la ficha de los Picos: excursiones, afluencia en temporada y un horizonte de montaña que desde el puerto se intuye más que se toca. Ribadesella vive de ese equilibrio villa-río-montaña, no de un solo gesto.",
 ],
 fuera: [
 "Si solo hay tiempo para una tarde de diario, esa tarde es Santa Marina, el puerto y el casco con soportales: paseo de Indianos, playa urbana y mesas cuando el tiempo acompaña. La Ermita de la Guía cierra mirador sobre la ría. Un martes de noviembre puedes caminar sin prisa; un sábado de agosto en el paseo cuesta aparcar entre toallas y tráfico.",
 "A unos diez minutos, Vega cubre playa distinta: más abierta, otra escala de orilla. El agua anda entre 19 y 21 °C; se entra, se nada, se sale con la piel que se despierta del frío. Tito Bustillo aporta la cueva cuando hay visita posible: otra tarde, otro ambiente. En temporada alta la afluencia hacia playa y Picos se nota en la carretera; fuera de agosto, la villa recupera calma.",
 "Los Picos —Cangas de Onís, Covadonga— quedan a unos treinta minutos: montaña real como salida, no como umbral de cada casa. Aquí el paisaje diario es Sella, Indianos y playa urbana; la sierra y los lagos son trayecto corto cuando se quiere horizonte de piedra.",
 ],
 casa: [
 "El casco y el paseo de Santa Marina ofrecen pisos y viviendas de villa: poca obra nueva, fibra, facilidad de venta alta en el contexto de la zona. Junto a la playa hay que contar con ocupación de agosto, salitre y precio. Conviene probar un sábado de afluencia y un día de lluvia en el paseo, no solo firmar con sol de folleto.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros; tres habitaciones, alrededor de 257.000. La franja media puede ser piso reformado en casco o vivienda hacia la ría; tres habitaciones pegadas a Santa Marina entran con facilidad en franja cara.",
 "Los servicios son 7/10: villa completa. Arriondas queda a unos veinte minutos. Asturias está a unos setenta y cinco; Santander, a unos noventa. Eso es Ribadesella: Sella, Indianos y Picos cerca a cambio de agosto lleno, metro alto y aeropuerto lejos.",
 ],
 encaja: {
 si: [
 "El Sella, Santa Marina y los Picos a media hora importan más que el silencio de agosto. Ribadesella es la villa equilibrada del oriente: puerto en la desembocadura, casco con soportales, paseo de Indianos, playa urbana, Tito Bustillo y Vega a unos diez minutos; Cangas, Covadonga y los Picos alrededor de los treinta. Quien quiera caminar el casco un martes de noviembre —servicios 7/10, fibra, mercado y mesas— y bajar a Santa Marina o a la ría cuando el oleaje lo permita encontrará villa completa todo el año, no solo foto de verano. El verano ronda 19,5 °C, agua entre 19 y 21 °C; unas 1.700 a 1.750 horas de sol y unos cuarenta despejados frente a Mallorca marcan el contraste: se gana frescura cantábrica y se acepta el sol mínimo de la tabla. En julio y agosto el veraneo madrileño multiplica población: toallas, tráfico, ruido y aparcamiento justo; el Descenso del Sella —primer sábado de agosto— llena la ría y el casco. De octubre a junio la villa recupera ritmo cuidado.",
 "Funciona si se acepta el Hospital del Oriente, en Arriondas, a unos veinte minutos —sanidad comarcal usable— y el aeropuerto lejos: Asturias alrededor de setenta y cinco minutos; Santander, alrededor de noventa. A cambio se gana el paisaje total de la zona —mar, río y montaña— en una sola villa, con facilidad de venta alta en el contexto oriental. el más alto de Asturias Oriente: tres habitaciones en primera línea de Santa Marina entran en franja cara; en casco o hacia la ría hay más margen. Quien pruebe el Descenso o un sábado de agosto en el paseo, y un martes gris de noviembre, y siga queriendo Indianos, Sella y Picos cerca, entenderá Ribadesella sin pedirle calma de temporada alta.",
 ],
 no: [
 "Julio y agosto no son noviembre: si la calma en temporada alta es innegociable, esta villa no encaja aunque el casco sea precioso. Llanes sufre el mismo golpe de veraneo; Villaviciosa y Ribadedeva lo viven con menos intensidad. Tampoco encaja quien busque tres habitaciones pegadas a Santa Marina en franja muy asequible: el metro más alto de la zona y la orilla de Indianos empujan el precio. Quien se decida solo por un día de sol en el paseo, sin probar el atasco de coches del Descenso ni un invierno de cielo cubierto, se llevará una sorpresa.",
 "El cielo de Baleares y el vuelo corto no están aquí: 168 cubiertos, lluvia también en verano, Asturias a setenta y cinco minutos y Santander a noventa. Si la prioridad absoluta es Cabueñes a veinticinco y Asturias a cuarenta y cinco, Villaviciosa gana logística; si muro, Cuera y más de treinta playas, Llanes; si Lastres y el Fitu sin pagar villa turística, Colunga. Ribadesella pide aceptar turismo de Picos y río —excursiones, afluencia hacia Cangas y Covadonga en temporada— a cambio del equilibrio villa-hospital-paisaje.",
 ],
 veredicto:
 "Veredicto: Ribadesella encaja como villa del Sella e Indianos —piso o vivienda en casco o cerca del paseo, fuera del tramo más ocupado de Santa Marina en agosto— sobre todo si Arriondas a veinte, Picos a treinta y villa 7/10 todo el año importan más que el silencio de julio. Probar el Descenso o un sábado de afluencia y un martes de noviembre antes de comprar. Se ganan puerto, Tito Bustillo, Vega y el paisaje más completo del oriente; se aceptan, agosto lleno y aeropuerto lejos. Quien priorice sanidad hacia Gijón y metro más bajo, Villaviciosa; quien priorice treinta playas y muro, Llanes.",
 },
 fotoIdentidad: {
 src: "/fotos/asturias-oriente/ribadesella-identidad.jpg",
 pie: "Ribadesella: casas junto a la desembocadura del Sella, con los Picos al fondo",
 },
 fotosAbrir: [
 { src: "/fotos/asturias-oriente/ribadesella-puerto.jpg", pie: "Puerto de Ribadesella" },
 { src: "/fotos/asturias-oriente/ribadesella-santa-marina.jpg", pie: "Paseo de Santa Marina" },
 ],
 fotosHistoria: [
 { src: "/fotos/asturias-oriente/ribadesella-indianos.jpg", pie: "Casas de Indianos en Santa Marina" },
 { src: "/fotos/asturias-oriente/ribadesella-tito.jpg", pie: "Entorno de Tito Bustillo, Ribadesella" },
 ],
 fotosFuera: [
 { src: "/fotos/asturias-oriente/ribadesella-sella.jpg", pie: "Ría del Sella en Ribadesella" },
 { src: "/fotos/asturias-oriente/ribadesella-vega.jpg", pie: "Playa de Vega, cerca de Ribadesella" },
 ],
 creditoFotos: credito,
 }
```

### 11.2 Capa 2026 completa

> CITA LITERAL — fila `slug: "ribadesella"` en `web/src/data/municipios-asturias-oriente.json`.  
> Autoridad factual. No rellenar null/`…` truncados.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `222404` |
| `A_3hab` | `307944` |
| `B_2hab` | `179634` |
| `B_3hab` | `248724` |
| `advertenciaMicrozona` | `null` *(n.d. / ausente)* |
| `aeropuertoMin` | `75` |
| `aeropuertoPractico2026` | Asturias 97 km · 75 min (Palma: verano); Santander 122 km · 90 min (Palma: casi todo el año) Tiempo histórico orientativo: ~75 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Asturias 97 km · 75 min (Palma: verano); Santander 122 km · 90 min (Palma: casi todo el año) |
| `autonomiaCotidiana` | FUERTE |
| `casaQueBuscar` | Accesibilidad, exterior, servicios andando y relación real con ría/playa; com... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Más húmedo / nublado |
| `comunicaciones` | A-8 / N-632 |
| `comunicacionesNota10` | `7` |
| `cubiertos` | `168` |
| `dependenciaCocheTexto` | Baja-media en villa; coche para hospital/salidas. |
| `despejados` | `40` |
| `estacionalidad2026` | Vida anual con presión turística fuerte en verano. |
| `fibra` | Sí |
| `franja` | A |
| `hospitalMin` | `20` |
| `hospitalPractico2026` | Hospital del Oriente de Asturias (Arriondas), hospital público comarcal con urgencias; aprox. 20 min desde Colunga/Ribadesella y ~35 min desde Llanes. |
| `hospitalPriv` | 55 km · 55 min · Hospital de Jove (Gijón) |
| `hospitalPub` | 20 km · 20 min · Hospital del Oriente (Arriondas) |
| `hospitalReferencia2026` | Área sanitaria oriental: Cabueñes (Gijón) como referencia superior cuando corresponda; no saltar Arriondas en la explicación cotidiana. |
| `humedad` | `80` |
| `lat` | `43.462` |
| `lluviaDias` | `153` |
| `lluviaMm` | `1250` |
| `lon` | `-5.059` |
| `mapa` | 60_ribadesella.png |
| `mercadoReventa` | Mercado intermedio con componente turístico/segunda residencia. La liquidez d... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `3` |
| `minCosta` | `3` |
| `municipio` | Ribadesella |
| `n` | `60` |
| `niebla` | Baja |
| `obraNueva` | Poca |
| `pais` | España |
| `palmaDirecta2026` | Asturias: Palma figura entre destinos publicados en 2026; programación/temporada variable, comprobar antes de viajar. |
| `palmaMasCercano` | Verano |
| `palmaMejor` | Santander (casi todo el año) · 90 min |
| `paseoCotidiano` | Ría, puente y paseo de Santa Marina. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Villa y playa encajan muy bien, pero verano, precio y hospital fuera son el coste. |
| `playaBano` | Santa Marina |
| `playaCotidiana` | SÍ |
| `playaCotidianaModo` | Santa Marina forma una gran playa urbana al otro lado del puente, integrada en el paseo de la villa. |
| `precioM2` | `2632` |
| `provincia` | Asturias |
| `radioCotidiano` | Villa con comercio, salud y servicios a ambos lados de la ría. |
| `radioSalida` | Cuevas, costa oriental y Arriondas para hospital. |
| `sanidadPrimaria2026` | Atención primaria local |
| `servicios` | `7` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | Tiene: villa completa, mercado, cine. Falta: hospital en el municipio |
| `slug` | ribadesella |
| `solHoras` | `1750` |
| `tempAgua` | 19-21 |
| `tempInvierno` | `9.5` |
| `tempVerano` | `19.5` |
| `transporteRelevante2026` | A-8 / N-632; tren FEVE Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital del Oriente de Asturias (Arriondas), hospital público comarcal con urgencias; aprox. 20 min desde Colunga/Ribadesella y ~35 min desde Llanes.. |
| `viento` | Baja |
| `zona` | Asturias Oriente |

### 11.3 Auditorías / plan existentes

**NO existe** `docs/PLAN_EDITORIAL_ASTURIAS_CENTRO_2026.md` ni `PLAN_EDITORIAL_ASTURIAS_ORIENTE_2026.md` (ni equivalente CURSOR_19 para Centro/Oriente).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n correspondiente):

```
| 60 | Ribadesella | Asturias Oriente | precio relato ~2200 vs ficha 2632 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 60 | Ribadesella | Asturias Oriente | no | — |
```

**estudio_zonas.md** (histórico/contexto — **NO** sustituye capa 2026): extracto de zona en §1; detalle municipal bajo demanda en el estudio. Snippet zona:

<details><summary>Contexto estudio (recorte)</summary>

## 12. Asturias Oriente (Asturias) · Villaviciosa, Colunga, Ribadesella, Llanes, Ribadedeva

### La zona

La costa donde la montaña cae al mar: la Sierra del Sueve (1.160 m) sobre Colunga, la Sierra del Cuera (1.300 m) sobre Llanes, y detrás los Picos de Europa a 30-45 min. Villaviciosa es la capital de la sidra, con su ría (reserva natural) y Tazones; Colunga tiene Lastres (pueblo colgado) y el museo del Jurásico; Ribadesella, el Sella, la cueva de Tito Bustillo y el paseo de Santa Marina con sus casas de Indianos; Llanes, la villa amurallada con decenas de playas y pueblos con playa (Barro, Niembro, Celorio, Poo) muy queridos por Madrid; Ribadedeva (Colombres) es la frontera con Cantabria, con el Archivo de Indianos y la cueva del Pindal.

Es la zona más espectacular de la tabla en paisaje y la peor en sol. Sanidad y aeropuerto están en el límite de lo que aceptas.

### Clima mes a mes

| | Oct-Mar | Abr-May | Jun-Sep | Año |
|---|---|---|---|---|
| Días de lluvia al mes | 15-17 | 13-14 | 9-11 | 153-155 |
| Máxima / mínima típica | 13 / 6 °C (ene.) | 17 / 9 °C | 23-24 / 16 °C (jul.) | |
| Horas de sol al mes | 65-100 | 160-190 | 200-220 | 1.700-1.750 |

Sol 1.700-1.750 h (el míni…

</details>


### 11.4 Auditoría relato ↔ capa

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | **7/10** repetido | `servicios` **7**; villa completa; falta hospital municipio | DUPLICA_CAPA | Omitir chip; narrar FUERTE |
| Precio ~2200 vs 2632 | casa remite + «000 euros»; «257.000» 3hab | `precioM2` **2632** | OBSOLETO | Omitir cifras/totales |
| Prosa rota «000 euros» | Tras remitir a capa queda fragmento «000 euros» (y a veces totales sueltos) | Cifras viven en `precioM2` / A/B / TablaPrecios | OBSOLETO | Borrar resto roto; no reponer €/m² históricos en prosa |
| Playa SÍ Santa Marina | Santa Marina / Indianos / ría | `playaCotidiana` **SÍ**; Santa Marina; paseo ría+puente+Santa Marina | ALINEADO / P4_PRESERVAR | Preservar; peaje verano/Descenso |
| Verano / Descenso del Sella | Primer sábado agosto; multiplica población | `estacionalidad2026` presión turística fuerte verano | ALINEADO / P4_PRESERVAR | Preservar impacto (ruido/tráfico); sin multiplicadores inventados extra |
| Hospital Arriondas 20′ | ~20′ | `hospitalMin` 20 | ALINEADO / DUPLICA_CAPA | Una mención |
| Aeropuerto / Palma | Minutos aero + Palma verano (a veces suena permanente) | `aeropuertoMin` + `palmaDirecta2026` temporada variable | DUPLICA_CAPA / ALINEADO | Consecuencia una vez; no permanente Palma; omitir cascada de minutos |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos abrir→tiempo→encaja | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| CURSOR_28 control: playa SÍ + Arriondas 20 + verano/Descenso | Presente | Campos capa | ALINEADO | Preservar Sella/Indianos; limpiar € |

### 11.5 P4 / identidad

| Elemento | Qué es | Por qué importa | Cotidiano/salida | Soporte repo | Preservar |
|---|---|---|---|---|---|
| Ría del Sella / puente | Desembocadura | Identidad villa | Cotidiano | relato | sí |
| Santa Marina / Indianos | Playa + casas | Playa SÍ | Cotidiano | playa SÍ | sí |
| Descenso del Sella | 1er sábado agosto | Peaje verano extremo | Estacional | relato + estacionalidad | sí |
| Tito Bustillo | Cueva | Cultura | Salida | relato | sí |
| Vega | Playa abierta | Alternativa | Salida corta | relato | sí |
| Arriondas | Hospital | Sanidad | Salida 20′ | capa | sí |

### 11.6 Vida cotidiana soportada

Pregunta guía: *Ya vivo aquí. Tengo toda la mañana libre. ¿Qué puedo hacer con mi día sin convertirlo en turismo?*

| Elemento | Clasificación | Base repo |
|---|---|---|
| Santa Marina / casco | YA SOPORTADO | playa SÍ |
| Mercado / cine (nota capa) | SOPORTADO PERO INFRAUSADO en detalle | serviciosNota |
| Descenso impacto | YA SOPORTADO | relato |
| Calma garantizada en agosto | NO SOPORTADO | estacionalidad |
| Horario cueva Tito Bustillo | NO SOPORTADO | — |

### 11.7 Reality toll

Solo peajes estructurales **soportados** en repo:

- Verano / Descenso: ruido, tráfico, afluencia
- Precio alto; hospital fuera Arriondas 20′
- Aero lejos (~75′ Asturias)
- Salitre paseo Santa Marina
- Peaje: villa+playa a cambio de agosto

### 11.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | ~2200 aud; «000 euros»; 257.000 | **2632** | OBSOLETO |
| mercadoReventa | Facilidad venta alta | Truncado turístico | Cualitativo; podar promesa |

### 11.9 Clima: deuda / duplicación

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en tiempo + encaja (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `ribadesella` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_28.**

**Sin correcciones en este bloque: sí.**

### 11.10 Mar / paseo

- **Mar/baño:** Santa Marina — **SÍ**.
- **Paseo:** ría, puente, paseo Santa Marina.
- Vega / Tito Bustillo = salidas.

### 11.11 No soportado / no inventar

- ~2200 / 257k / «000 euros»
- Chip 7/10
- Calma en agosto / Descenso «solo fiesta bonita» sin peaje
- Horarios Tito Bustillo
- Palma permanente
## 12. Llanes

### 12.1 Relato actual completo

> CITA LITERAL — clave `llanes` en `web/src/lib/relatos-asturias-oriente.ts`.

```ts
llanes: {
 escala: "Villa amurallada y playas",
 abrir: [
 "Llanes se siente villa estrella del oriente desde el primer tramo de muro. Unos trece mil habitantes, casco amurallado con puerto, Cubos de la Memoria —esculturas de hormigón coloreado en el espigón—, Paseo de San Pedro —pradera sobre el acantilado—, casco histórico y más de treinta playas en el concejo; la Sierra del Cuera encima a unos 1.300 m y los Picos a unos cuarenta minutos. Pueblos con playa —Barro, Niembro, Celorio, Poo, Andrín— son muy queridos por el veraneo madrileño. No es un solo casco: es un municipio de orillas.",
 "Quien vive aquí es gente local, vecinos de toda la vida, y veraneantes que vuelven cada julio y agosto. Un martes de noviembre se camina el casco amurallado y se resuelve el día a día: comercio, mercado, mesas, fibra. Los servicios alcanzan 7/10. El Hospital del Oriente, en Arriondas, queda a unos treinta y cinco minutos —peor que Colunga o Ribadesella a veinte—. Santander anda alrededor de los setenta minutos —puerta a Palma casi todo el año—; Asturias, alrededor de los ochenta y cinco. Ese mapa sanitario no se acorta eligiendo otra calle del muro.",
 "En julio y agosto Llanes multiplica por cinco u ocho su población: toallas, tráfico, ruido y aparcamiento justo en villa y pueblos con playa. Las patronales y el veraneo marcan semanas enteras. De octubre a junio recupera calma de villa cuidada: muro, puerto, paseo sin la presión de temporada. Quien busque silencio absoluto en agosto no lo encontrará en la orilla ni en muchos pueblos con playa; quien busque café y recados en enero, sí.",
 "La semana tiene rutinas claras: casco amurallado, puerto, Paseo de San Pedro y, cuando apetece, Toró, Sablón, Barro o Gulpiyuri. Primavera y otoño son buenas épocas para conocerlo: el Cuera cambia de color y la villa se ve como es de verdad, sin multiplicar población. Si solo conoces Gulpiyuri un día de sol, te llevas la imagen de folleto. Si has visto un agosto saturado y un noviembre vacío, ya puedes decidir si de verdad quieres vivir aquí.",
 "El calendario local no es decoración. El veraneo madrileño y las fiestas de villa y pueblos llenan semanas de música, mesas y coches buscando hueco. Quien viva junto al muro, en el puerto o en Barro, Niembro o Celorio debe contarlas como parte del año, no como excepción imprevista.",
 ],
 tiempo: [
 "Si vienes de Baleares, el cielo de Llanes pide aceptar el sol mínimo de la tabla. Suma unas 1.700 a 1.750 horas de sol y unos cuarenta días despejados, frente a las 2.800 horas y ciento veinte jornadas claras de Mallorca. Caen alrededor de 1.200 a 1.300 milímetros en unos 153 a 155 días. El viento es bajo —el Cuera protege—; también en verano llueve varios días al mes. Se gana frescura y variedad de orilla; se aceptan 168 cubiertos.",
 "El verano ronda 19,5 °C, fresco frente a Baleares. Toró, Sablón, Barro, Torimbia o Gulpiyuri tienen agua entre 19 y 21 °C; muchas playas son pequeñas y abrigadas entre acantilados —baño con calma en Toró, Sablón, Poo o Barro cuando el mar esté llano—. Conviene venir un agosto saturado y un martes de noviembre, no solo un sábado de sol en el Paseo de San Pedro.",
 ],
 vivir: [
 "El invierno en casa se nota por el salitre del muro y un cielo que se cierra con frecuencia: entre noviembre y febrero la terraza del casco amurallado se usa a medias. Conviene probar un martes vacío y el aislamiento frente a humedad, no solo firmar con sol en el Paseo de San Pedro. El Cuera protege del viento; no protege de los cubiertos.",
 "Sin coche se sostiene la villa: comercio, mercado, mesas y fibra un martes de noviembre; servicios 7/10. En enero Llanes recupera calma de villa cuidada —café y recados en el casco—. Barro, Niembro, Celorio, Gulpiyuri o el Cuera piden coche; el día a día del muro se camina. Quien viva en pueblo con playa dependerá más del volante.",
 "Conviven gente local, vecinos de toda la vida y veraneantes que vuelven cada julio y agosto. Se oye asturiano en el mercado y en el puerto; el castellano basta para lo cotidiano. La vida social pasa por el casco amurallado y, en temporada, por el veraneo madrileño que multiplica la población. Entre semana de invierno manda la villa; en agosto el ruido y el aparcamiento son parte del trato.",
 "La sanidad comarcal queda más lejos que en Ribadesella: el Hospital del Oriente, en Arriondas, anda alrededor de los treinta y cinco minutos. Empadronarse aquí abre servicios de villa; para especialidades se baja a Arriondas. Eso no se acorta eligiendo otra calle del muro.",
 "Ir y volver a Mallorca mira a Santander alrededor de los setenta minutos —puerta a Palma casi todo el año—; Asturias, alrededor de los ochenta y cinco. En verano cabe también Asturias; en invierno Santander suele ser la referencia. Conviene mirar el calendario real de vuelos, no solo el de agosto en Toró.",
 "La vivienda típica es piso o casa de villa en el casco amurallado: poca obra nueva, fibra, facilidad de venta alta. En pueblos con playa —Barro, Niembro, Celorio— el metro sube y tres habitaciones suelen quedar fuera de la franja asequible de la villa. Hay que probar un agosto en la orilla y un noviembre en el muro.",
 ],
 historia: [
 "La villa amurallada, el puerto y el casco histórico explican Llanes: plaza fuerte marinera convertida en capital del veraneo oriental. El muro no es decorado: es la forma en que la villa se defendió y se reconoció. Los Cubos de la Memoria y el Paseo de San Pedro añaden capa contemporánea y de acantilado: hormigón coloreado en el espigón, pradera sobre el Cantábrico.",
 "Los pueblos con playa del concejo —Barro, Niembro, Celorio, Poo, Andrín— y la Sierra del Cuera completan el relato: no es solo un casco, es un municipio de orillas con sierra encima y Picos a unos cuarenta minutos. Bufones de Pría y Arenillas, Torimbia, Gulpiyuri y Ballota amplían el mapa de costa. Lo que conviene saber es de muro, playa y sierra, no de una sola calle.",
 "El veraneo madrileño del siglo XX consolidó lo que el muro y el puerto ya eran: villa de destino. Facilidad de venta y revalorización altas en el contexto de la zona hablan de esa demanda sostenida; el precio del metro también.",
 ],
 fuera: [
 "Si solo hay tiempo para una tarde de diario, esa tarde es el casco amurallado, el puerto y el Paseo de San Pedro: pradera sobre el acantilado, mar abajo, villa detrás. Toró y Sablón cubren orilla urbana a un paso. Un martes de noviembre puedes caminar sin prisa; un sábado de agosto el muro y el puerto piden paciencia con gente y coches.",
 "Gulpiyuri —playa interior unida al mar por un túnel natural—, Barro, Torimbia y los Bufones de Pría amplían el concejo: orillas distintas, acantilados, agua entre 19 y 21 °C. En temporada alta hay que contar aparcamiento y afluencia; fuera de agosto, muchas calas vuelven a escala de vecinos. Ballota, Andrín, Niembro, Celorio y Poo cierran un mapa de más de treinta playas.",
 "El Cuera ofrece rutas con la villa abajo; los Picos quedan a unos cuarenta minutos. Aquí el paisaje diario es muro, puerto y elección de orilla; la montaña es salida cuando se quiere horizonte de piedra. Quien priorice hospital a veinte mirará Ribadesella; quien priorice esta costa sin número, Llanes.",
 ],
 casa: [
 "El casco ofrece pisos y viviendas de villa: poca obra nueva, fibra, facilidad de venta y revalorización altas en el contexto de la zona. En los pueblos con playa —Barro, Niembro, Celorio— el metro sube y tres habitaciones suelen quedar fuera de la franja asequible de la villa. Conviene probar un agosto en la orilla y un noviembre en el muro, no solo firmar con sol de folleto.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros en franja asequible; en pueblos con playa, más. La franja media puede ser piso en casco o vivienda interior del concejo. Primera línea de Barro o Celorio en temporada no es el trato de esa cifra de villa.",
 "Los servicios son 7/10: villa amurallada completa. Arriondas queda a unos treinta y cinco minutos. Santander está a unos setenta; Asturias, a unos ochenta y cinco. Eso es Llanes: muro, más de treinta playas y Cuera a cambio de agosto multiplicado, hospital más lejos y sol mínimo de tabla.",
 ],
 encaja: {
 si: [
 "El muro, el puerto y más de treinta playas importan más que el hospital a veinte minutos. Llanes es la villa estrella del oriente: casco amurallado, Cubos de la Memoria, Paseo de San Pedro —pradera sobre el acantilado—, Toró y Sablón a un paso, y un concejo de orillas —Barro, Niembro, Celorio, Poo, Andrín, Torimbia, Gulpiyuri, Ballota— con la Sierra del Cuera encima y los Picos alrededor de los cuarenta minutos. Quien quiera caminar la villa un martes de noviembre —servicios 7/10, fibra, comercio y mercado— y elegir baño o paseo entre acantilados cuando el mar esté llano encontrará la costa más completa de la zona. El verano ronda 19,5 °C, agua entre 19 y 21 °C; unas 1.700 a 1.750 horas de sol y unos cuarenta despejados frente a Mallorca: se gana frescura y variedad de orilla; se acepta el sol mínimo de la tabla. En julio y agosto la población se multiplica por cinco u ocho —veraneo madrileño intenso—: toallas, tráfico, ruido y aparcamiento justo en villa y pueblos con playa. De octubre a junio recupera calma de villa cuidada.",
 "Funciona si se acepta el Hospital del Oriente, en Arriondas, a unos treinta y cinco minutos —peor que Colunga o Ribadesella a veinte— y se mira Santander a unos setenta minutos como puerta a Palma casi todo el año, frente a Asturias alrededor de ochenta y cinco. tres habitaciones en la villa pueden entrar en franja usable; en Barro, Niembro o Celorio el precio de orilla suele saltar de franja. Quien priorice muro, Cuera, bufones y playas sin número, y pruebe un agosto saturado y un noviembre vacío antes de comprar, entenderá Llanes: gana por villa y orillas, no por despejados ni por sanidad cercana.",
 ],
 no: [
 "La calma en julio y agosto no existe en la orilla ni en muchos pueblos con playa. Si eso es innegociable, mirar Villaviciosa o Ribadedeva —menos golpe de veraneo— o un pueblo interior del propio concejo, lejos de Barro y Celorio. El hospital a treinta y cinco minutos no se acorta eligiendo otra calle del muro: quien necesite Arriondas a veinte, Ribadesella o Colunga lo cubren. Tres habitaciones en primera línea de pueblo con playa en franja asequible de villa suelen quedar fuera; hay que mirar casco o interior.",
 "Tampoco encaja quien busque el cielo de Baleares o Cabueñes a veinticinco minutos: aquí mandan cubiertos, lluvia también en verano y Gijón lejos. Quien se decida solo por Gulpiyuri o el Paseo de San Pedro un día de sol, sin probar el atasco de agosto ni el turismo hacia Picos y playas, se llevará una sorpresa. Si lo que manda es Sella e Indianos con hospital a veinte, Ribadesella; si sidra, ría y logística hacia Asturias, Villaviciosa; si frontera y Santander a cincuenta y cinco, Ribadedeva.",
 ],
 veredicto:
 "Veredicto: Llanes encaja como villa amurallada de playas y Cuera —piso o vivienda en casco o pueblo interior, no en primera línea de Barro o Celorio en temporada— sobre todo si la costa más completa del oriente importa más que Arriondas a treinta y cinco. Probar un agosto lleno y un martes de noviembre antes de comprar. Se ganan muro, más de treinta playas, servicios 7/10 y Santander a unos setenta hacia Palma; se aceptan agosto multiplicado, y el sol mínimo de la tabla. Quien priorice hospital a veinte, Ribadesella; quien priorice metro y Cabueñes, Villaviciosa; quien priorice vuelo corto y calma de frontera, Ribadedeva.",
 },
 fotoIdentidad: {
 src: "/fotos/asturias-oriente/llanes-identidad.jpg",
 pie: "Llanes: casas con galerías sobre el puerto — vivir pegado al Cantábrico",
 },
 fotosAbrir: [
 { src: "/fotos/asturias-oriente/llanes-casco.jpg", pie: "Casco amurallado de Llanes" },
 { src: "/fotos/asturias-oriente/llanes-puerto.jpg", pie: "Puerto de Llanes" },
 ],
 fotosHistoria: [
 { src: "/fotos/asturias-oriente/llanes-san-pedro.jpg", pie: "Paseo de San Pedro, Llanes" },
 { src: "/fotos/asturias-oriente/llanes-cuera.jpg", pie: "Sierra del Cuera sobre Llanes" },
 ],
 fotosFuera: [
 { src: "/fotos/asturias-oriente/llanes-gulpiyuri.jpg", pie: "Playa de Gulpiyuri" },
 { src: "/fotos/asturias-oriente/llanes-barro.jpg", pie: "Playa de Torimbia, Llanes" },
 ],
 creditoFotos: credito,
 }
```

### 12.2 Capa 2026 completa

> CITA LITERAL — fila `slug: "llanes"` en `web/src/data/municipios-asturias-oriente.json`.  
> Autoridad factual. No rellenar null/`…` truncados.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `202040` |
| `A_3hab` | `279747` |
| `B_2hab` | `163186` |
| `B_3hab` | `225950` |
| `advertenciaMicrozona` | Llanes villa, Celorio/Poo/Parres, Posada/Barro y Pría tienen precios, servicios y coche muy distintos. |
| `aeropuertoMin` | `70` |
| `aeropuertoPractico2026` | Santander 92 km · 70 min (Palma: casi todo el año); Asturias 127 km · 95 min (Palma: verano) Tiempo histórico orientativo: ~70 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Santander 92 km · 70 min (Palma: casi todo el año); Asturias 127 km · 95 min (Palma: verano) |
| `autonomiaCotidiana` | FUERTE EN VILLA |
| `casaQueBuscar` | Ascensor o acceso cómodo, servicios y paseo realmente a pie, exterior y aparc... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Más húmedo / nublado |
| `comunicaciones` | A-8 / N-634 |
| `comunicacionesNota10` | `7` |
| `cubiertos` | `168` |
| `dependenciaCocheTexto` | Baja en villa; alta o media en muchos pueblos/playas. |
| `despejados` | `40` |
| `estacionalidad2026` | Muy turística en verano, con vida anual real en la villa. |
| `fibra` | Sí |
| `franja` | A |
| `hospitalMin` | `35` |
| `hospitalPractico2026` | Hospital del Oriente de Asturias (Arriondas), hospital público comarcal con urgencias; aprox. 20 min desde Colunga/Ribadesella y ~35 min desde Llanes. |
| `hospitalPriv` | 70 km · 70 min · Hospital de Jove (Gijón) |
| `hospitalPub` | 35 km · 35 min · Hospital del Oriente (Arriondas) |
| `hospitalReferencia2026` | Área sanitaria oriental: Cabueñes (Gijón) como referencia superior cuando corresponda; no saltar Arriondas en la explicación cotidiana. |
| `humedad` | `80` |
| `lat` | `43.421` |
| `lluviaDias` | `155` |
| `lluviaMm` | `1250` |
| `lon` | `-4.755` |
| `mapa` | 61_llanes.png |
| `mercadoReventa` | Mercado intermedio con componente turístico/segunda residencia. La liquidez d... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | Villa ~3239 €/m²; Celorio-Poo-Parres ~2294; Posada-Barro ~2247; Pría ~2100, referencias orientativas de auditoría. |
| `minBano` | `5` |
| `minCosta` | `5` |
| `municipio` | Llanes |
| `n` | `61` |
| `niebla` | Baja |
| `obraNueva` | Poca |
| `pais` | España |
| `palmaDirecta2026` | Asturias: Palma figura entre destinos publicados en 2026; programación/temporada variable, comprobar antes de viajar. |
| `palmaMasCercano` | Casi todo el año |
| `palmaMejor` | Santander (casi todo el año) · 70 min |
| `paseoCotidiano` | Paseo de San Pedro y ruta urbana/costera; itinerario oficial fácil ~7,6 km. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Costa excepcional y villa funcional, pero precio, turismo y dispersión municipal obligan a elegir microzona con cuidado. |
| `playaBano` | Torimbia / Sablón |
| `playaCotidiana` | SÍ EN VILLA/MICROZONAS |
| `playaCotidianaModo` | El Sablón queda pegado al casco; otras microzonas pueden tener playa muy próxima pero menos servicios. |
| `precioM2` | `2391` |
| `provincia` | Asturias |
| `radioCotidiano` | Villa: comercio, salud, cultura, puerto y servicios suficientes para vivir andando. |
| `radioSalida` | Decenas de playas y pueblos costeros del concejo; muchas requieren coche aunque estén en el mismo municipio. |
| `sanidadPrimaria2026` | Atención primaria local |
| `servicios` | `7` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | Tiene: villa amurallada completa, comercio, mercado. Falta: hospital en el municipio |
| `slug` | llanes |
| `solHoras` | `1750` |
| `tempAgua` | 19-21 |
| `tempInvierno` | `9.5` |
| `tempVerano` | `19.5` |
| `transporteRelevante2026` | A-8 / N-634; tren FEVE Santander–Oviedo Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Hospital del Oriente de Asturias (Arriondas), hospital público comarcal con urgencias; aprox. 20 min desde Colunga/Ribadesella y ~35 min desde Llanes.. |
| `viento` | Baja |
| `zona` | Asturias Oriente |

### 12.3 Auditorías / plan existentes

**NO existe** `docs/PLAN_EDITORIAL_ASTURIAS_CENTRO_2026.md` ni `PLAN_EDITORIAL_ASTURIAS_ORIENTE_2026.md` (ni equivalente CURSOR_19 para Centro/Oriente).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n correspondiente):

```
| 61 | Llanes | Asturias Oriente | precio relato ~2100 vs ficha 2391 | vuelo/Palma puede sonar permanente; capa 2026 matiza; usa cerca/a un paso | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | URGENTE | precio/sol conflicto |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 61 | Llanes | Asturias Oriente | no | — |
```

**estudio_zonas.md** (histórico/contexto — **NO** sustituye capa 2026): extracto de zona en §1; detalle municipal bajo demanda en el estudio. Snippet zona:

<details><summary>Contexto estudio (recorte)</summary>

## 12. Asturias Oriente (Asturias) · Villaviciosa, Colunga, Ribadesella, Llanes, Ribadedeva

### La zona

La costa donde la montaña cae al mar: la Sierra del Sueve (1.160 m) sobre Colunga, la Sierra del Cuera (1.300 m) sobre Llanes, y detrás los Picos de Europa a 30-45 min. Villaviciosa es la capital de la sidra, con su ría (reserva natural) y Tazones; Colunga tiene Lastres (pueblo colgado) y el museo del Jurásico; Ribadesella, el Sella, la cueva de Tito Bustillo y el paseo de Santa Marina con sus casas de Indianos; Llanes, la villa amurallada con decenas de playas y pueblos con playa (Barro, Niembro, Celorio, Poo) muy queridos por Madrid; Ribadedeva (Colombres) es la frontera con Cantabria, con el Archivo de Indianos y la cueva del Pindal.

Es la zona más espectacular de la tabla en paisaje y la peor en sol. Sanidad y aeropuerto están en el límite de lo que aceptas.

### Clima mes a mes

| | Oct-Mar | Abr-May | Jun-Sep | Año |
|---|---|---|---|---|
| Días de lluvia al mes | 15-17 | 13-14 | 9-11 | 153-155 |
| Máxima / mínima típica | 13 / 6 °C (ene.) | 17 / 9 °C | 23-24 / 16 °C (jul.) | |
| Horas de sol al mes | 65-100 | 160-190 | 200-220 | 1.700-1.750 |

Sol 1.700-1.750 h (el míni…

</details>


### 12.4 Auditoría relato ↔ capa

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | **7/10** repetido | `servicios` **7**; villa amurallada; falta hospital municipio | DUPLICA_CAPA | Omitir chip; narrar **FUERTE EN VILLA** |
| Precio ~2100 vs 2391 | casa remite + «000 euros»; pueblos playa más caros | `precioM2` **2391**; `microzonaPrecio` villa~3239 / Celorio~2294 / Posada~2247 / Pría~2100 | OBSOLETO / SOPORTADO_PERO_INFRAUSADO | Omitir media única; usar advertencia microzona precio cualitativa |
| Prosa rota «000 euros» | Tras remitir a capa queda fragmento «000 euros» (y a veces totales sueltos) | Cifras viven en `precioM2` / A/B / TablaPrecios | OBSOLETO | Borrar resto roto; no reponer €/m² históricos en prosa |
| Villa vs concejo | Casco + pueblos playa; coche fuera villa | `autonomiaCotidiana` **FUERTE EN VILLA**; `advertenciaMicrozona` villa/Celorio/Posada/Pría | ALINEADO / P4_PRESERVAR | Advertencia obligatoria: no generalizar concejo = villa |
| Paseo 7,6 km | Paseo de San Pedro enfatizado; sin cifra 7,6 | `paseoCotidiano` San Pedro + ruta; itinerario oficial fácil **~7,6 km** | SOPORTADO_PERO_INFRAUSADO | Candidato vida cotidiana si se usa sin inventar dificultad |
| Playa | Toró/Sablón/Gulpiyuri/Barro… | `playaCotidiana` **SÍ EN VILLA/MICROZONAS**; Torimbia/Sablón | ALINEADO | Separar orilla villa vs playas que piden coche |
| Hospital Arriondas 35′ | ~35′ | `hospitalMin` 35 | ALINEADO / DUPLICA_CAPA | Una mención; peor que Colunga/Ribadesella |
| Aeropuerto / Palma | Minutos aero + Palma verano (a veces suena permanente) | `aeropuertoMin` + `palmaDirecta2026` temporada variable | DUPLICA_CAPA / ALINEADO | Consecuencia una vez; no permanente Palma; omitir cascada de minutos |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos abrir→tiempo→encaja | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| CURSOR_28 control: FUERTE EN VILLA + microzonaPrecio + paseo 7,6 + Arriondas 35 | Parcialmente presente | Campos capa completos | SOPORTADO_PERO_INFRAUSADO + OBSOLETO (precio) | Priorizar advertencia concejo/villa; no revalorización promesa |

### 12.5 P4 / identidad

| Elemento | Qué es | Por qué importa | Cotidiano/salida | Soporte repo | Preservar |
|---|---|---|---|---|---|
| Casco amurallado / puerto | Villa | FUERTE EN VILLA | Cotidiano | autonomia | sí |
| Cubos de la Memoria | Espigón arte | Identidad | Cotidiano | relato | sí |
| Paseo de San Pedro | Pradera acantilado | Paseo (+ 7,6 km capa) | Cotidiano | paseoCotidiano | sí |
| Toró / Sablón | Orilla villa | Playa villa | Cotidiano | playa | sí |
| Celorio/Posada/Pría/Barro | Pueblos/playas concejo | Microzona precio/coche | Cotidiano solo si allí | advertencia + microzonaPrecio | sí |
| Gulpiyuri / Bufones Pría | Orillas singulares | Salidas | Salida | relato | sí |
| Cuera / Picos | Sierra | Salida | Salida | relato | sí |

### 12.6 Vida cotidiana soportada

Pregunta guía: *Ya vivo aquí. Tengo toda la mañana libre. ¿Qué puedo hacer con mi día sin convertirlo en turismo?*

| Elemento | Clasificación | Base repo |
|---|---|---|
| Casco amurallado / mercado | YA SOPORTADO | FUERTE EN VILLA |
| Paseo San Pedro | YA SOPORTADO | paseo |
| Itinerario ~7,6 km | SOPORTADO PERO FALTA EN RELATO | paseoCotidiano |
| Gulpiyuri / pueblos playa | YA SOPORTADO (salida/coche) | radioSalida |
| Generalizar concejo = villa | NO SOPORTADO | advertenciaMicrozona |
| Promesa revalorización | NO SOPORTADO (podar) | auditoría |

### 12.7 Reality toll

Solo peajes estructurales **soportados** en repo:

- Turismo verano extremo (×5–8 relato)
- Dispersión concejo: coche fuera villa
- Arriondas ~35′
- Precio/microzonas villa vs pueblos playa
- FUERTE EN VILLA solo

### 12.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | ~2100 aud; «000 euros» | **2391** | OBSOLETO media única |
| microzonaPrecio | Pueblos playa más caros (cualitativo) | villa~3239; Celorio~2294; Posada~2247; Pría~2100 | Usar advertencia; no martillar cifras |
| Revalorización | Citada en historia | — | Podar lenguaje inversión (auditoría) |

### 12.9 Clima: deuda / duplicación

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en tiempo + encaja (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `llanes` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_28.**

**Sin correcciones en este bloque: sí.**

### 12.10 Mar / paseo

- **Mar/baño:** SÍ EN VILLA/MICROZONAS (Torimbia/Sablón…).
- **Paseo:** San Pedro + ruta; capa cita itinerario fácil **~7,6 km**.
- Muchas playas del concejo piden coche aunque «mismo municipio».

### 12.11 No soportado / no inventar

- Media ~2100 única sin microzona
- Chip 7/10
- Generalizar concejo = villa caminable
- Promesa de revalorización/inversión
- Multiplicadores afluencia inventados más allá del relato
- Palma permanente sin matiz
## 13. Ribadedeva

### 13.1 Relato actual completo

> CITA LITERAL — clave `ribadedeva` en `web/src/lib/relatos-asturias-oriente.ts`.

```ts
ribadedeva: {
 escala: "Frontera e Indianos",
 abrir: [
 "Ribadedeva se siente frontera vivida, no villa autosuficiente. Unos mil ochocientos habitantes, Colombres —Archivo de Indianos, Quinta Guadalupe, casonas de colores—, Bustio en la ría de Tina Mayor —la desembocadura fronteriza del Deva—, La Franca —playa entre acantilados— a unos diez minutos, cueva del Pindal y Unquera a cinco. Es el último concejo asturiano hacia Cantabria: Picos a unos treinta minutos, Desfiladero de La Hermida a unos veinte, y el mejor tiempo de la zona al aeropuerto de Santander.",
 "Quien vive aquí es gente local, quien eligió casonas e Indianos a propósito, y quien mira Santander como puerta a Palma casi todo el año. Un martes de noviembre los servicios son 3/10: lo básico en Unquera y Colombres; Llanes cubre villa completa a unos quince minutos. La fibra es parcial: hay que comprobarla casa por casa. Sierrallana, en Torrelavega, queda a unos cuarenta y cinco minutos —la sanidad más débil del oriente en tiempo—. El aeropuerto de Santander anda alrededor de los cincuenta y cinco minutos. Ese mapa no se arregla eligiendo otra casona de Colombres.",
 "En verano La Franca y la frontera reciben algo de afluencia; el ritmo sigue siendo de concejo pequeño, no de Llanes multiplicando por cinco u ocho. Las patronales locales animan Colombres unos días. Fuera de agosto el silencio de casonas y ría pesa de verdad: un martes vacío enseña el trato mejor que cualquier sábado de sol en la Quinta Guadalupe.",
 "La semana tiene rutinas distintas a las de una villa: el coche abre Unquera, Llanes a quince minutos, La Franca, La Hermida y los Picos. Primavera y otoño son buenas épocas para conocerlo: Tina Mayor y el desfiladero cambian de luz sin el tráfico de temporada hacia los Picos. Si solo conoces la Quinta un día despejado, te llevas la imagen de folleto de Indianos. Si has visto un noviembre vacío y la dependencia del volante, ya puedes decidir si de verdad quieres vivir aquí.",
 "El calendario local anima Colombres unos días y la frontera recibe afluencia hacia La Franca y La Hermida en temporada. No es la presión de agosto de Llanes, pero sí hay semanas de coches y mesas. Quien viva solo del municipio notará la dependencia del coche y la fibra parcial como parte del trato, no como fallo de calle.",
 ],
 tiempo: [
 "Si vienes de Baleares, el cielo de Ribadedeva pide el mismo recalibrado que el resto del oriente. Suma unas 1.700 a 1.750 horas de sol y unos cuarenta días despejados, frente a las 2.800 horas y ciento veinte jornadas claras de Mallorca. Caen alrededor de 1.200 a 1.300 milímetros en unos 153 a 155 días. El viento es bajo; el microclima de frontera combina ría y desfiladero cercano. Se gana frescura y quietud relativa; se acepta el cielo mínimo de la tabla.",
 "El verano ronda 19,5 °C, fresco frente a Baleares. La Franca tiene agua entre 19 y 21 °C; la playa entre acantilados pide días de mar más llana para un baño cómodo. Conviene venir un martes de noviembre y un día de tráfico hacia La Hermida en temporada, no solo un sábado de sol en Colombres.",
 ],
 vivir: [
 "El invierno en casa se nota en las casonas: humedad, reforma y un silencio de noviembre que pesa de verdad. Conviene tocar paredes un día húmedo en Colombres y preguntar por aislamiento y mantenimiento, no solo firmar con sol en la Quinta Guadalupe. La fibra es parcial —casa por casa—; la niebla y el microclima de frontera de Tina Mayor entran en el trato.",
 "Sin coche la semana no existe. Los servicios son 3/10: lo básico en Unquera y Colombres; Llanes cubre villa completa a unos quince minutos. En enero el concejo es silencio de casonas y ría, no mercado denso. Quien elija Ribadedeva debe asumir el volante hacia Unquera, Llanes, La Franca o La Hermida como norma.",
 "Conviven gente local, quien eligió Indianos a propósito y quien mira Santander como puerta a Palma. Se oye asturiano y castellano; al otro lado de la frontera, Cantabria entra en el mapa semanal. El castellano basta para lo cotidiano. La vida social es de concejo pequeño y casonas, no de plaza amurallada. Entre semana manda el vacío; en verano La Franca y la frontera suben algo el volumen, sin el golpe de Llanes.",
 "La sanidad es la más débil del oriente en tiempo: Sierrallana, en Torrelavega, queda a unos cuarenta y cinco minutos. Empadronarse aquí abre lo básico en Unquera o Colombres; para especialidades se baja a Torrelavega o se apoya en Llanes. No es Arriondas a veinte ni Cabueñes a veinticinco.",
 "Mantener el vínculo con Mallorca es el punto fuerte: el aeropuerto de Santander anda alrededor de los cincuenta y cinco minutos, con Palma casi todo el año —el mejor acceso del oriente—. En invierno esa ventaja importa más que en agosto. Conviene mirar el calendario real de vuelos, no solo el de un sábado en Colombres.",
 "La vivienda típica es casona de Indianos o casa de uso real hacia Colombres, Bustio y las parroquias: no hay obra nueva y la fibra es parcial. En casonas hay que contar con reforma, humedad y mantenimiento; cerca de La Franca, ocupación de verano. El coste real incluye coche diario y estado de la casa, no solo el metro.",
 ],
 historia: [
 "Colombres y el Archivo de Indianos —Quinta Guadalupe— explican Ribadedeva: concejo de retorno de América y de casonas de colores, no de villa marinera densa. Las casas de indianos no son foto típica suelta: son el carácter del núcleo, la ficha de quien marchó y volvió plantando lujo de lejos en la frontera.",
 "Bustio y Tina Mayor añaden la capa de ría fronteriza: el Deva como línea vivida entre Asturias y Cantabria. La cueva del Pindal —arte paleolítico— y el Desfiladero de La Hermida —a unos veinte minutos— completan patrimonio de cueva y de garganta. Lo que conviene saber es de Indianos, frontera y Picos cercanos.",
 "Unquera a cinco minutos y Llanes a unos quince cierran el mapa práctico: Ribadedeva nunca pretendió resolver la semana a pie. Creció como concejo de casonas y orilla, con Cantabria a un paso y Santander como aeropuerto de referencia. Ese sesgo frontera-versus-villa es el carácter del sitio.",
 ],
 fuera: [
 "Si solo hay tiempo para un paseo de diario, ese paseo es Colombres: la Quinta Guadalupe, el Archivo de Indianos y las casonas de colores. Un martes de noviembre el silencio pesa; un día de fiesta local hay más gente y coches. Es núcleo de mirar y caminar, no de mercado denso.",
 "Bustio cubre la ría de Tina Mayor: agua de frontera, orilla distinta a la playa abierta. A unos diez minutos, La Franca aporta playa entre acantilados —agua entre 19 y 21 °C, baño cuando el mar esté más llano—. En verano hay afluencia; fuera de temporada, la cala vuelve a escala de concejo pequeño.",
 "El Pindal y La Hermida amplían cueva y desfiladero; los Picos quedan a unos treinta minutos. Llanes cubre villa completa a unos quince; Santander, el aeropuerto a trayecto corto. Aquí el paisaje diario es Indianos y frontera; la playa, la garganta y la montaña son salidas en coche, no umbral a pie de cada casa.",
 ],
 casa: [
 "Predominan viviendas hacia Colombres, Bustio y las parroquias: casonas de Indianos, casas de uso real, no urbanización. No hay obra nueva y la fibra es parcial —hay que preguntar por la línea en esa casa concreta—. En casonas hay que contar con reforma, humedad y mantenimiento; cerca de La Franca, ocupación de verano. Conviene tocar paredes un día húmedo y probar el trayecto a Llanes o Unquera un martes cualquiera.",
 "La referencia de precio actual está en la capa factual y en Idealista del mes; aquí no se fija una media municipal en prosa. 000 euros. La franja media puede ser vivienda en Colombres o hacia La Franca, con el coste real de reforma y coche diario en la cuenta.",
 "Los servicios son 3/10. Sierrallana queda a unos cuarenta y cinco minutos. Santander está a unos cincuenta y cinco, con Palma casi todo el año. Eso es Ribadedeva: frontera e Indianos a cambio de coche, sanidad lejos y el mejor acceso a Palma del oriente.",
 ],
 encaja: {
 si: [
 "La frontera, las casonas de Indianos y Santander a menos de una hora importan más que la villa a pie. Ribadedeva es Colombres —Archivo de Indianos, Quinta Guadalupe, casas de colores—, Bustio en la ría de Tina Mayor, La Franca —playa entre acantilados— a unos diez minutos, cueva del Pindal y Unquera a cinco; los Picos alrededor de los treinta y el Desfiladero de La Hermida a unos veinte. Quien quiera orilla y montaña sin vivir el agosto de Llanes encontrará aquí concejo pequeño: en verano La Franca y la frontera reciben afluencia, pero no se multiplica la población como en la villa amurallada. El verano ronda 19,5 °C, agua entre 19 y 21 °C; unas 1.700 horas de sol y unos cuarenta despejados frente a Mallorca: se gana frescura y quietud relativa; se acepta el cielo mínimo de la tabla. Un martes de noviembre es silencio de casonas y ría, no de mercado denso.",
 "Funciona si se acepta el coche, los servicios 3/10 —lo básico en Unquera y Colombres; Llanes cubre villa completa a unos quince minutos— y Sierrallana, en Torrelavega, a unos cuarenta y cinco minutos como hospital de referencia. A cambio se gana el mejor aeropuerto del oriente: Santander alrededor de cincuenta y cinco minutos, con Palma casi todo el año —ventaja clara frente a Asturias a setenta y cinco o más desde Ribadesella y Llanes—. por debajo de las villas turísticas. Quien priorice Indianos, Picos cerca y vuelo usable, con fibra parcial comprobada casa por casa, entenderá Ribadedeva como frontera vivida, no como villa autosuficiente.",
 ],
 no: [
 "La semana no se resuelve andando en el concejo: súper completo, muchas mesas y gestos de villa piden Llanes o Unquera. Si la prioridad absoluta es farmacia, mercado y cine a pie sin volante, Llanes o Ribadesella cubren esa opción. El hospital a cuarenta y cinco minutos —Sierrallana, no Arriondas a veinte ni Cabueñes a veinticinco— no se acorta eligiendo otra casona de Colombres; es la sanidad más débil del oriente en tiempo. Quien necesite Hospital del Oriente cerca, Colunga o Ribadesella; quien necesite Gijón, Villaviciosa.",
 "Tampoco encaja quien busque el cielo de Baleares o el golpe de villa turística con treinta playas delante: aquí se gana por frontera, Indianos y Santander, no por despejados ni por casco amurallado. Quien se decida solo por la Quinta Guadalupe un día de sol, sin probar un noviembre vacío, la dependencia del coche ni un día de tráfico hacia La Hermida y los Picos en temporada, se llevará una sorpresa. Si lo que manda es muro y playas sin número, Llanes; si Sella y villa 7/10 con Arriondas a veinte, Ribadesella.",
 ],
 veredicto:
 "Veredicto: Ribadedeva encaja como frontera e Indianos —vivienda en Colombres o hacia La Franca, con fibra comprobada y apoyo en Llanes o Unquera— sobre todo si Santander a cincuenta y cinco y Picos a treinta importan más que servicios a pie. Probar un martes de noviembre y un día hacia La Hermida en temporada antes de comprar. Se ganan casonas, Tina Mayor, La Franca y el mejor acceso a Palma del oriente a; se aceptan servicios 3/10, Sierrallana a cuarenta y cinco y el sol mínimo de la tabla. Quien priorice villa caminable y Arriondas a veinte, Ribadesella; quien priorice muro y treinta playas, Llanes.",
 },
 fotosAbrir: [
 { src: "/fotos/asturias-oriente/ribadedeva-colombres.jpg", pie: "Colombres, capital de Ribadedeva" },
 { src: "/fotos/asturias-oriente/ribadedeva-guadalupe.jpg", pie: "Quinta Guadalupe, Archivo de Indianos" },
 ],
 fotosHistoria: [
 { src: "/fotos/asturias-oriente/ribadedeva-pindal.jpg", pie: "Cueva del Pindal, Ribadedeva" },
 { src: "/fotos/asturias-oriente/ribadedeva-hermida.jpg", pie: "Desfiladero de La Hermida" },
 ],
 fotosFuera: [
 { src: "/fotos/asturias-oriente/ribadedeva-franca.jpg", pie: "Playa de La Franca" },
 { src: "/fotos/asturias-oriente/ribadedeva-frontera.jpg", pie: "Frontera Asturias–Cantabria en Ribadedeva" },
 ],
 creditoFotos: credito,
 }
```

### 13.2 Capa 2026 completa

> CITA LITERAL — fila `slug: "ribadedeva"` en `web/src/data/municipios-asturias-oriente.json`.  
> Autoridad factual. No rellenar null/`…` truncados.

| Campo | Valor literal (repo) |
|---|---|
| `A_2hab` | `143650` |
| `A_3hab` | `198900` |
| `B_2hab` | `116025` |
| `B_3hab` | `160650` |
| `advertenciaMicrozona` | Colombres concentra servicios/cultura; La Franca y costa son salida o microzona residencial distinta. |
| `aeropuertoMin` | `55` |
| `aeropuertoPractico2026` | Santander 70 km · 55 min (Palma: casi todo el año); Asturias 150 km · 110 min (Palma: verano); Bilbao 160 km · 120 min (Palma: todo el año) Tiempo histórico orientativo: ~55 min. Usar como orientación de acceso, no como tiempo garantizado. |
| `aeropuertos` | Santander 70 km · 55 min (Palma: casi todo el año); Asturias 150 km · 110 min (Palma: verano); Bilbao 160 km · 120 min (Palma: todo el año) |
| `autonomiaCotidiana` | BAJA-MEDIA |
| `casaQueBuscar` | No comprar solo por vistas o €/m²: comprobar farmacia, compra, acceso, pendie... ⚠️ *truncado así en el JSON del repo* |
| `clase` | Más húmedo / nublado |
| `comunicaciones` | A-8 / N-634 |
| `comunicacionesNota10` | `7` |
| `cubiertos` | `168` |
| `dependenciaCocheTexto` | Alta para combinar núcleo, playa y servicios superiores. |
| `despejados` | `40` |
| `estacionalidad2026` | Vida local anual pequeña; costa más estacional. |
| `fibra` | Parcial |
| `franja` | A |
| `hospitalMin` | `45` |
| `hospitalPractico2026` | Sierrallana (Torrelavega), aprox. 45 min según referencia histórica; revisar coordinación sanitaria territorial antes de publicar detalle fino. |
| `hospitalPriv` | 55 km · 55 min · Hospital de Jove (Gijón) |
| `hospitalPub` | 45 km · 45 min · Sierrallana (Torrelavega) |
| `hospitalReferencia2026` | Hospital de referencia superior: no diferenciado con suficiente seguridad en la fuente maestra. La referencia hospitalaria histórica de la fila es 45 km · 45 min · Sierrallana (Torrelavega); verificar circuito de derivación antes de publicar un centro terciario distinto. |
| `humedad` | `80` |
| `lat` | `43.385` |
| `lluviaDias` | `155` |
| `lluviaMm` | `1300` |
| `lon` | `-4.529` |
| `mapa` | 62_ribadedeva.png |
| `mercadoReventa` | Mercado estrecho o de muestra limitada: la salida depende mucho del producto.... ⚠️ *truncado así en el JSON del repo* |
| `microzonaPrecio` | `null` *(n.d. / ausente)* |
| `minBano` | `10` |
| `minCosta` | `8` |
| `municipio` | Ribadedeva |
| `n` | `62` |
| `niebla` | Baja |
| `obraNueva` | No |
| `pais` | España |
| `palmaDirecta2026` | Asturias: Palma figura entre destinos publicados en 2026; programación/temporada variable, comprobar antes de viajar. |
| `palmaMasCercano` | Casi todo el año |
| `palmaMejor` | Santander (casi todo el año) · 55 min |
| `paseoCotidiano` | Colombres y entorno indiano; costa mediante desplazamiento. |
| `paseoPendienteTopografia` | `null` *(n.d. / ausente)* |
| `peajeRealidad` | Patrimonio y costa próximos, pero no concentrados; coche estructural. |
| `playaBano` | La Franca |
| `playaCotidiana` | NO DESDE COLOMBRES |
| `playaCotidianaModo` | La Franca es playa de salida desde el núcleo interior. |
| `precioM2` | `1700` |
| `provincia` | Asturias |
| `radioCotidiano` | Colombres: básicos y Archivo de Indianos/Museo de la Emigración como foco cultural. |
| `radioSalida` | La Franca y costa oriental; Llanes/Unquera para servicios mayores. |
| `sanidadPrimaria2026` | Atención primaria básica/local |
| `servicios` | `3` |
| `serviciosEstado` | VALIDADO CONTRA FUENTE MAESTRA HISTÓRICA; reinterpretado como capacidad cotidiana local |
| `serviciosNota` | Tiene: Colombres y Unquera básicos. Falta: comercio grande (Llanes a 15 min) |
| `slug` | ribadedeva |
| `solHoras` | `1700` |
| `tempAgua` | 19-21 |
| `tempInvierno` | `9.5` |
| `tempVerano` | `19.5` |
| `transporteRelevante2026` | A-8 / N-634; tren FEVE (Colombres) Interpretar por utilidad cotidiana real, no por mera existencia nominal de una línea. |
| `urgenciasPAC2026` | PAC/urgencias extrahospitalarias: no consta un punto diferenciado y auditado en la fuente maestra. Para urgencia hospitalaria, la referencia práctica indicada es Sierrallana (Torrelavega), aprox. 45 min según referencia histórica; revisar coordinación sanitaria territorial antes de publicar detalle fino.. |
| `viento` | Baja |
| `zona` | Asturias Oriente |

### 13.3 Auditorías / plan existentes

**NO existe** `docs/PLAN_EDITORIAL_ASTURIAS_CENTRO_2026.md` ni `PLAN_EDITORIAL_ASTURIAS_ORIENTE_2026.md` (ni equivalente CURSOR_19 para Centro/Oriente).

**AUDITORIA_EDITORIAL_RELATOS_2026.md** (fila n correspondiente):

```
| 62 | Ribadedeva | Asturias Oriente | — | precio relato ~1600 vs ficha 1700 (desvío); vuelo/Palma puede sonar permanente; capa 2026 matiza (+1) | repite horas de sol; menciona hospital también en capa Sanidad (+4) | — | estructura completa vivir/mar/encaja; historia/contexto; bloque Vivir (+1) | ALTA | duplica capa |
```

**P0_RESTANTES_POST_PRECIOS_2026.md:**

```
| 62 | Ribadedeva | Asturias Oriente | no | — |
```

**estudio_zonas.md** (histórico/contexto — **NO** sustituye capa 2026): extracto de zona en §1; detalle municipal bajo demanda en el estudio. Snippet zona:

<details><summary>Contexto estudio (recorte)</summary>

## 12. Asturias Oriente (Asturias) · Villaviciosa, Colunga, Ribadesella, Llanes, Ribadedeva

### La zona

La costa donde la montaña cae al mar: la Sierra del Sueve (1.160 m) sobre Colunga, la Sierra del Cuera (1.300 m) sobre Llanes, y detrás los Picos de Europa a 30-45 min. Villaviciosa es la capital de la sidra, con su ría (reserva natural) y Tazones; Colunga tiene Lastres (pueblo colgado) y el museo del Jurásico; Ribadesella, el Sella, la cueva de Tito Bustillo y el paseo de Santa Marina con sus casas de Indianos; Llanes, la villa amurallada con decenas de playas y pueblos con playa (Barro, Niembro, Celorio, Poo) muy queridos por Madrid; Ribadedeva (Colombres) es la frontera con Cantabria, con el Archivo de Indianos y la cueva del Pindal.

Es la zona más espectacular de la tabla en paisaje y la peor en sol. Sanidad y aeropuerto están en el límite de lo que aceptas.

### Clima mes a mes

| | Oct-Mar | Abr-May | Jun-Sep | Año |
|---|---|---|---|---|
| Días de lluvia al mes | 15-17 | 13-14 | 9-11 | 153-155 |
| Máxima / mínima típica | 13 / 6 °C (ene.) | 17 / 9 °C | 23-24 / 16 °C (jul.) | |
| Horas de sol al mes | 65-100 | 160-190 | 200-220 | 1.700-1.750 |

Sol 1.700-1.750 h (el míni…

</details>


### 13.4 Auditoría relato ↔ capa

| Afirmación / elemento | Relato actual | Capa 2026 | Estado | Tratamiento sugerido |
|---|---|---|---|---|
| Servicios nota X/10 | **3/10** repetido | `servicios` **3**; Colombres/Unquera; falta comercio grande (Llanes 15′) | DUPLICA_CAPA | Omitir chip; narrar **BAJA-MEDIA** |
| Precio ~1600 vs 1700 | casa remite + «000 euros»; auditoría desvío ~1600 vs 1700 | `precioM2` **1700** | OBSOLETO | Omitir cifras |
| Prosa rota «000 euros» | Tras remitir a capa queda fragmento «000 euros» (y a veces totales sueltos) | Cifras viven en `precioM2` / A/B / TablaPrecios | OBSOLETO | Borrar resto roto; no reponer €/m² históricos en prosa |
| Colombres vs La Franca | Colombres Indianos; La Franca ~10′ playa | `playaCotidiana` **NO DESDE COLOMBRES**; `advertenciaMicrozona` Colombres≠La Franca | ALINEADO / P4_PRESERVAR | No inventar playa a pie desde Colombres |
| Hospital Sierrallana ~45′ | Sierrallana Torrelavega ~45′ exactamente | `hospitalMin` **45**; `hospitalPractico2026` Sierrallana ~45′ | ALINEADO | **NO inventar** hospital por frontera (Llanes/Arriondas) distinto de capa |
| Autonomía / coche | Sin coche la semana no existe | `autonomiaCotidiana` **BAJA-MEDIA**; dependencia alta | ALINEADO | Preservar peaje coche estructural |
| Santander / Palma | Santander ~55′ Palma casi todo el año | aeropuertoMin 55; capa Asturias texto variable — relato enfatiza Santander | ALINEADO (tradeoff) / DUPLICA_CAPA | Preservar ventaja Palma vía Santander sin convertir en permanente sin matiz |
| Clima cifras + Mallorca en cascada | sol/despejados/lluvia/niebla repetidos abrir→tiempo→encaja | Campos clima JSON; metodología despejados/cubiertos excluida de sync auto | DUPLICA_CAPA | Una comparación cualitativa Mallorca; **no corregir** clima aquí |
| CURSOR_28 control: BAJA-MEDIA + Colombres/La Franca + Sierrallana 45 exacto | Presente | Campos capa | ALINEADO | No inventar hospital fronterizo; limpiar € |

### 13.5 P4 / identidad

| Elemento | Qué es | Por qué importa | Cotidiano/salida | Soporte repo | Preservar |
|---|---|---|---|---|---|
| Colombres / Indianos | Quinta Guadalupe / Archivo | Núcleo cultural | Cotidiano | radio | sí |
| Bustio / Tina Mayor | Ría frontera Deva | Frontera vivida | Cotidiano/mirar | relato | sí |
| La Franca | Playa acantilados | NO desde Colombres | Salida | playa NO DESDE COLOMBRES | sí |
| Sierrallana | Hospital Torrelavega | Sanidad ~45′ | Salida | hospital exactamente capa | sí |
| Santander aero | Palma casi todo el año | Tradeoff frontera | Salida | relato + aero | sí |
| Llanes | Villa de apoyo ~15′ | Servicios | Salida | serviciosNota | sí |

### 13.6 Vida cotidiana soportada

Pregunta guía: *Ya vivo aquí. Tengo toda la mañana libre. ¿Qué puedo hacer con mi día sin convertirlo en turismo?*

| Elemento | Clasificación | Base repo |
|---|---|---|
| Colombres Indianos | YA SOPORTADO | radio |
| La Franca a pie desde Colombres | NO SOPORTADO | NO DESDE COLOMBRES |
| Llanes apoyo | YA SOPORTADO | serviciosNota |
| Hospital distinto de Sierrallana | NO SOPORTADO | capa 45′ |
| Nombre café Colombres | NO SOPORTADO | — |

### 13.7 Reality toll

Solo peajes estructurales **soportados** en repo:

- Autonomía BAJA-MEDIA; coche estructural
- Hospital Sierrallana ~45′ (no inventar otro)
- Playa no desde Colombres
- Servicios 3; Llanes apoyo
- Reforma/mantenimiento casonas; fibra parcial

### 13.8 Precio / vivienda

| Tema | Relato | Capa 2026 | Nota |
|---|---|---|---|
| €/m² | ~1600 vs 1700; «000 euros» | **1700** | OBSOLETO |
| casaQueBuscar | Reforma casonas | Texto truncado acceso/farmacia | DESEABLE |

### 13.9 Clima: deuda / duplicación

- Cascada numérica sol/despejados/lluvia/niebla/Mallorca en tiempo + encaja (**DUPLICA_CAPA**).
- Cifras del relato alineadas en lo sustancial con campos clima de la fila JSON `ribadedeva` (autoridad capa).
- Deuda metodológica `despejados`/`cubiertos` (sync auto excluida): **marcar, no corregir**.
- **Sin correcciones climáticas en CURSOR_28.**

**Sin correcciones en este bloque: sí.**

### 13.10 Mar / paseo

- **Mar/baño:** La Franca — **NO DESDE COLOMBRES**.
- **Paseo:** Colombres Indianos; costa con desplazamiento.
- Bustio/ría ≠ playa abierta.

### 13.11 No soportado / no inventar

- ~1600 / «000 euros»
- Chip 3/10
- Hospital distinto de Sierrallana ~45′ por «frontera»
- Playa a pie desde Colombres
- Inventar comercio denso local


## 14. Referencia editorial final

> Relatos **ya reescritos / aprobados** usados solo como referencia de densidad, omisión de chips/€, tradeoffs y microzonas.  
> **No** plantilla de frases ni topónimos. **No** modificar estos archivos.

### barreiros

> CITA LITERAL — `web/src/lib/relatos-a-marina.ts` clave `barreiros`.

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

> CITA LITERAL — `web/src/lib/relatos-a-marina.ts` clave `viveiro`.

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
### ribadeo

> CITA LITERAL — `web/src/lib/relatos-a-marina.ts` clave `ribadeo`.

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
### luarca-valdes

> CITA LITERAL — `web/src/lib/relatos-asturias-occidente.ts` clave `luarca-valdes`.

```ts
luarca-valdes: {
    escala: "Villa blanca entre puerto y laderas",
    abrir: [
      "Luarca concentra una imagen muy reconocible: puerto, río Negro, puentes y casas blancas encajados entre laderas. Esa belleza tiene una consecuencia práctica inmediata: la cota importa. La zona baja reúne buena parte del comercio, los servicios y el paseo; subir hacia la Atalaya, el cementerio o viviendas altas cambia la caminabilidad aunque la distancia sobre el mapa parezca corta.",
      "Fuera del verano sigue funcionando como villa comarcal. Se puede hacer bastante vida a pie si la vivienda está bien situada en la zona baja, mientras las cotas altas y otras partes de Valdés aumentan la dependencia del coche. Hablar de Luarca no equivale a describir todo el concejo."
    ],
    tiempo: [
      "El contraste con Mallorca aparece en un verano fresco, humedad y muchos más días grises. Cerca del puerto también cuentan el salitre y la exposición; en casas antiguas o indianas conviene revisar aislamiento, galerías, ventilación y mantenimiento antes de dejarse llevar por la fachada.",
      "Las playas primera y segunda están junto a la villa, pero que sean cotidianas depende de la cota de la vivienda. El mar puede quedar muy cerca en horizontal y exigir una subida importante al volver: aquí distancia y facilidad para caminar no son lo mismo."
    ],
    vivir: [
      "En la zona baja una mañana puede enlazar mercado, comercio, farmacia, puerto y los puentes del río Negro sin necesidad de coche. Esa autonomía cambia al subir de cota, por lo que dos viviendas separadas por poca distancia pueden producir rutinas muy distintas.",
      "El paseo ordinario discurre por el puerto y la parte baja. La Atalaya, el cementerio, la ermita y el faro amplían ese recorrido con subida; son parte esencial de la imagen de Luarca, pero no deben describirse como si fueran una prolongación llana del paseo.",
      "Para atención hospitalaria hay que desplazarse a Jarrio. El aeropuerto de Asturias queda relativamente accesible dentro de la escala occidental, aunque las conexiones con Palma dependen de la programación de temporada. El tren de ancho métrico forma parte de las comunicaciones, sin que eso convierta cualquier vivienda en bien conectada a pie con el ferrocarril.",
      "El verano añade visitantes al puerto, las playas y los miradores, mientras la base comercial y de servicios continúa fuera de temporada. Esa vida anual permite distinguir la villa de un enclave puramente vacacional, pero una casa junto al frente más visitado vivirá agosto de manera distinta a otra en una calle menos expuesta."
    ],
    historia: [
      "El río Negro atraviesa el casco y sus puentes cosen las dos orillas. Sobre la villa, la Atalaya reúne cementerio, ermita y vistas al Cantábrico; el faro completa una silueta que explica buena parte de la identidad de Luarca.",
      "Las casas de Indianos añaden otra capa: arquitectura ligada al retorno de América, atractiva pero también exigente cuando se convierte en vivienda. En el resto de Valdés, lugares como Otur, Cueva o Cadavedo recuerdan que el concejo es bastante más amplio que la villa blanca."
    ],
    fuera: [
      "El puerto y la zona baja permiten un paseo cotidiano fácil de integrar en la rutina. Las playas primera y segunda están próximas, aunque su comodidad real depende de dónde esté la casa y de la pendiente que haya que salvar.",
      "Subir hacia la Atalaya y el cementerio cambia el esfuerzo y también la perspectiva. Para ampliar el día aparecen los Jardines de la Fonte Baxa, los miradores y Cabo Busto; Otur, Cueva y Cadavedo son salidas por la costa de Valdés, no extensiones caminables de cualquier vivienda en Luarca."
    ],
    casa: [
      "La primera pregunta no es solo casco o afueras, sino a qué cota está la vivienda. En la zona baja se aprovechan mejor comercio, puerto y servicios a pie; en barrios altos o viviendas exteriores el coche y las pendientes pueden cambiar por completo la rutina.",
      "En pisos y casas blancas conviene revisar humedad, accesibilidad y orientación. En viviendas indianas se añade el mantenimiento de una tipología más compleja. Los precios y estimaciones quedan en la capa factual y en la tabla; aquí importa comprobar acceso, escaleras, aparcamiento y recorrido real hasta los servicios."
    ],
    encaja: {
      si: [
        "Encaja si se busca una villa con vida anual donde puerto, comercio y paseo puedan formar parte de la rutina, y se elige la vivienda entendiendo bien la topografía. En la zona baja la autonomía cotidiana es fuerte y el mar está integrado en el paisaje urbano.",
        "También encaja si las pendientes no impiden disfrutar de la Atalaya, el faro y los miradores como extensiones del paseo, y si se acepta salir en coche para explorar el resto de Valdés o llegar al hospital."
      ],
      no: [
        "Encaja peor si se necesita una caminabilidad uniforme y sin cuestas. Una vivienda alta puede estar muy cerca del puerto sobre el mapa y resultar mucho menos cómoda en la práctica; esa diferencia no se corrige con una descripción genérica de Luarca.",
        "Tampoco si se espera que todo Valdés funcione como la zona baja de la villa o que Palma sea una conexión permanente. Microzona, pendiente y logística de temporada forman parte de la decisión."
      ],
      veredicto:
        "Luarca combina una villa comarcal activa con un paisaje de puerto y laderas muy reconocible. Su gran variable cotidiana es la topografía: bien situada en la zona baja permite mucha vida a pie; en cotas altas cambia el esfuerzo y la dependencia del coche. Entender esa diferencia es más útil que tratar toda Luarca o todo Valdés como una sola experiencia."
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

---

## 15. Matriz final

| Lugar | Autonomía | Coche | Estacionalidad | Mar cotidiano | Paseo | Hospital | Aeropuerto | Precio/fiabilidad | P4 principal | Reality toll principal | Conflicto viejo principal | Invest. externa obligatoria v1 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Cudillero | MEDIA-BAJA | Media-alta + pendiente | Turismo visible; invierno vacío | NO GENERALIZABLE (Aguilar/Artedo salida) | Puerto/miradores con escaleras | San Agustín ~25′ | ~15′; Palma variable | 1636; omitir ~1400; «000 euros» | Anfiteatro vs El Pito | Topografía + servicios 4 | Precio~1400; chips 4/10; playa generalizada | **NO** |
| Muros de Nalón | MEDIA-BAJA | Media-alta | Anual pequeña | **NO** (Aguilar salida) | San Esteban vs miradores ≠ llano | San Agustín ~20′ | ~10′; Palma variable | **null n.d.** — conservar | Nalón + miradores + San Esteban | Sin precio inventable; coche | n.d. vs prosa barata; playa | **NO** |
| Soto del Barco | MEDIA | Media | Anual + verano playa | **PARCIAL** (Quebrantos/San Juan) | Ribera San Juan | San Agustín ~20′ | ~10′; Palma variable | 1185; omitir 1200/140k | San Juan + Quebrantos | Microzona Soto/San Juan | 1200+140k en prosa | **NO** |
| Salinas / Castrillón | MEDIA-FUERTE SEGÚN MICROZONA | Media (repartido) | Residencial + verano fuerte | **SÍ** Espartal | Paseo + dunas | San Agustín ~10′ | ~10′; Palma variable | **3226 EXTREME** vs ~1700 | Espartal + Peñona | Precio/prima + aire industria | ~1700≠3226 | **NO** |
| Luanco / Gozón | FUERTE (villa) | Baja-media villa | Anual + verano | **SÍ** Ribera/Aramar | Puerto/frente | ~15–20′ (Min 15 vs pub 20) | ~20′; Palma variable | 2379; omitir ~1800 | Marinera + Peñas | Hospital matiz; Gozón≠villa | ~1800; chips 5/10 | **NO** (hospital = DESEABLE) |
| Candás / Carreño | **FUERTE** | Baja-media + tren | Anual + cultura | SÍ/PARCIAL Palmera | Puerto/centro | Min 10 vs Cabueñes 20 | ~25′; Palma variable | 1840; omitir ~1650 | Tren + Aboño | 5≠6 servicios; hospital interno | servicios 5≠6; 10 vs 20 | **NO** (hospital DESEABLE) |
| Gijón | **MUY ALTA** | Baja barrios centrales | Ciudad anual | **SÍ** San Lorenzo | Muro–Cimavilla–Piles | ~5′ Cabueñes/Jove | ~30′; Palma variable | 2696; omitir ~2300 | Ciudad-mar + barrios | Precio/barrio/tráfico | ~2300; chips 10/10 | **NO** |
| Villaviciosa | FUERTE | Baja-media villa; coche costa | Villa anual; costa estacional | **NO DESDE VILLA** (Rodiles salida) | Villa/ría | Cabueñes ~25′ | ~45′; Palma variable | 1864; omitir ~1500; «000 euros» | Sidra + ría | Playa≠villa | ~1500; Rodiles como diaria | **NO** |
| Colunga | MEDIA | Media-alta | Anual; Lastres/costa más turística | DEPENDE MICROZONA | Lastres con pendiente | Arriondas ~20′ | ~60′; Palma variable | 1774; omitir ~1700; «000 euros» | Lastres + MUJA + Fitu | Coche + pendiente | «000 euros»; Lastres | **NO** |
| Ribadesella | FUERTE | Baja-media villa | Verano/Descenso fuerte | **SÍ** Santa Marina | Ría + Santa Marina | Arriondas ~20′ | ~75′; Palma variable | 2632; omitir ~2200 | Sella + Indianos + Descenso | Agosto/Descenso | ~2200; chips 7/10 | **NO** |
| Llanes | **FUERTE EN VILLA** | Baja villa; alta fuera | Muy turística verano | SÍ EN VILLA/MICROZONAS | San Pedro (+7,6 km capa) | Arriondas ~35′ | Santander/Asturias; Palma variable | 2391 + microzonaPrecio | Muro + San Pedro + concejo | Concejo≠villa; verano | ~2100; revalorización | **NO** |
| Ribadedeva | **BAJA-MEDIA** | Alta estructural | Anual pequeña; costa estacional | **NO DESDE COLOMBRES** | Colombres; costa salida | **Sierrallana ~45′ exacto** | Santander ~55′; Palma casi año | 1700; omitir ~1600 | Indianos + frontera | Coche + hospital lejos | «000 euros»; no inventar hospital | **NO** |

### Investigación externa (clasificación)

| Tema | Clase | Nota |
|---|---|---|
| Candás hospitalMin 10 vs Cabueñes texto/pub 20′ (y Luanco 15 vs pub 20) | **DESEABLE** | Capa interna inconsistente; no bloquea v1 si se narra con matiz |
| Texto completo `casaQueBuscar` / `mercadoReventa` truncados | **DESEABLE** | Relato cualitativo sin string completo |
| Nombres de cafés / días de mercado / horarios | **NO NECESARIA** | |
| Corregir metodología despejados/cubiertos | **NO NECESARIA** en este bloque | Deuda marcada; no inventar |
| **Obligatoria para v1** | — | **NO** en los 12 (ninguna) |

---

## 16. Incidencia asset Navia

> Solo documentación. **NO se corrige** en CURSOR_28. Asturias Occidental es **read-only**.

| Hallazgo | Valor |
|---|---|
| Ruta referenciada en objeto `navia` | `/fotos/asturias-occidente/navia-puerto-vega.jpg` |
| ¿Existe `navia-puerto-vega.jpg` en `web/public/fotos/asturias-occidente/`? | **NO — MISSING** |
| ¿Existe `navia-vega.jpg`? | **SÍ — EXISTS** |
| Objeto actual usa `navia-puerto-vega.jpg` | **SÍ** |
| Objeto actual usa `navia-vega.jpg` | **NO** |
| Corrección inequívoca | **SÍ** — renombrar/path a `navia-vega.jpg` **o** copiar el archivo al nombre referenciado |
| ¿Aplicar corrección ahora? | **NO** (fuera de alcance; no tocar Occidente) |

Evidencia de referencia en relato (solo lectura):

```
src contiene navia-puerto-vega.jpg: True
src contiene navia-vega.jpg: False
missing puerto-vega file: True
exists navia-vega.jpg: True
```

---

## 17. Contrato para la reescritura

- ChatGPT redactará los **12** objetos finales (claves Centro + Oriente listadas arriba) en un solo paquete.
- **Capa 2026 prevalece** sobre prosa vieja.
- Precio, servicios X/10, A/B, textos hospital/aero/Palma detallados se quedan en capa factual / TablaPrecios / FichaCapa2026.
- Cursor copiará **literalmente** después (solo indentación/escapes/coma).
- Conflicto factual **nuevo** texto↔capa ⇒ **parar**, no corregir por iniciativa, no commit.
- Edición quirúrgica; preservar EOL (CRLF) del `.ts`.
- **No** personalizar para jubilados ni presupuesto personal; **no** nombrar tope 260.000 €.
- **Proteger** A Mariña y Asturias Occidental: no tocar esos relatos/JSON/UI.
- Archivos de implementación futura: solo `relatos-asturias-centro.ts` y `relatos-asturias-oriente.ts` (las 12 claves).
- Incidencia Navia (§16): documentada; **no** corregir en este bloque.

---

## Apéndice — Inventario de archivos fuente

| Rol | Ruta |
|---|---|
| Relatos Centro | `web/src/lib/relatos-asturias-centro.ts` |
| Relatos Oriente | `web/src/lib/relatos-asturias-oriente.ts` |
| Capa JSON Centro | `web/src/data/municipios-asturias-centro.json` |
| Capa JSON Oriente | `web/src/data/municipios-asturias-oriente.json` |
| Auditoría editorial | `docs/AUDITORIA_EDITORIAL_RELATOS_2026.md` (51–62) |
| P0 precios | `docs/P0_RESTANTES_POST_PRECIOS_2026.md` |
| Estudio (histórico) | `docs/estudio_zonas.md` §11–12 |
| Plan editorial Centro/Oriente | **NO EXISTE** (NO PLAN_EDITORIAL) |
| Referencia A Mariña | `relatos-a-marina.ts` — barreiros, viveiro, ribadeo |
| Referencia Occidente | `relatos-asturias-occidente.ts` — luarca-valdes |
| Asset Navia (solo doc) | `web/public/fotos/asturias-occidente/` |
