# MAPA 2.0 · Norte de España + Norte de Portugal

Comparativa de **41 municipios costeros a menos de 30 minutos de una playa** (Pontevedra, Lugo, Asturias, Cantabria y Alto Minho) orientada a compra de vivienda, residencia habitual, jubilación, calidad de vida y potencial inmobiliario.

Este repositorio contiene la **tabla maestra completa** (41 filas × todas las columnas acordadas), el **validador fila a fila** que la comprueba contra el esquema cerrado del proyecto y el **generador de la imagen** final (mapa + tabla).

No hay rankings ni resúmenes: los únicos colores de la imagen son umbrales fijos documentados en `mapa2/esquema.py`.

## Ficheros

| Ruta | Qué es |
|---|---|
| `data/municipios.csv` | **Tabla maestra** (fuente de verdad). 41 filas, separador `;`, UTF-8. |
| `data/diccionario_columnas.csv` | Definición, unidad, tipo de dato y rango válido de cada columna (generado desde el esquema). |
| `data/geo/*.geojson` | Cartografía base (Natural Earth 10 m) recortada al norte peninsular. |
| `mapa2/esquema.py` | Columnas acordadas, tipos de dato, lista de los 41 municipios, hospitales y aeropuertos asignados, umbrales de clima y reglas de precios. |
| `mapa2/validar.py` | Validación fila a fila. Falla si algo no cuadra con el esquema. |
| `mapa2/render.py` | Genera `output/mapa_2_0.png` (mapa + tabla). Se niega a renderizar si la tabla no valida. |
| `mapa2/exportar.py` | Exporta la tabla a Excel (`output/tabla_maestra_mapa_2_0.xlsx`) y regenera el diccionario. |
| `output/mapa_2_0.png` | Imagen final MAPA 2.0 (5.522 × 4.845 px). |
| `output/informe_validacion.md` | Resultado de la última validación, fila a fila y columna a columna. |

## Cómo ejecutarlo

```bash
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt

python -m mapa2.validar --informe   # valida las 41 filas y escribe output/informe_validacion.md
python -m mapa2.render              # genera output/mapa_2_0.png
python -m mapa2.exportar            # genera el Excel y data/diccionario_columnas.csv
```

Para cambiar un dato: edita `data/municipios.csv`, vuelve a ejecutar `validar` y, si está en verde, `render`.

## Columnas de la tabla

**Identificación**: Nº · Municipio · Provincia · Comarca

**Clima**: Sol (h/año + días equivalentes = h/8) · Días de lluvia/año (≥ 1 mm) · Lluvia mm/año (complementaria) · Temperatura media verano / invierno · Humedad

**Servicios y accesibilidad**: Servicios (1-10) · Hospital de referencia · Minutos a hospital · Aeropuerto principal · Minutos a aeropuerto · Comunicaciones

**Mercado inmobiliario**: Precio €/m² · Vivienda 2 hab ≤ 5 min playa · 2 hab 20-30 min playa · 3 hab ≤ 5 min playa · 3 hab 20-30 min playa · Prima terraza · Prima vistas mar · Prima terraza + vistas

**Inversión**: Facilidad de venta (1-10) · Revalorización esperada (1-10)

**Operativa**: Dependencia futura del coche (1-10) · Debilidad principal

Columnas técnicas (no se muestran en la tabla, sirven para el mapa y la condición principal): latitud, longitud, minutos a la playa más cercana, país, clase de clima, notas.

La variable *Encaje inmobiliario* queda eliminada, como se acordó.

## Tipo de dato de cada columna

Para no volver a mezclar datos medidos con estimaciones sin decirlo, cada columna lleva un único tipo:

| Tipo | Significado | Columnas |
|---|---|---|
| `OFICIAL` | Normales climáticas AEMET (1991-2020) / IPMA (1981-2010) de la estación más próxima ajustadas a la costa; geografía; asignaciones acordadas | Identificación, Sol, Días lluvia, mm, Temperaturas, Humedad, Hospital, Aeropuerto |
| `DERIVADO` | Calculado con una regla explícita del esquema | Días equivalentes de sol, Clase clima, Minutos a hospital/aeropuerto/playa, las cuatro viviendas de referencia |
| `MERCADO` | Referencia de portales inmobiliarios (Idealista, Fotocasa, Idealista PT) 2026, redondeada | Precio €/m², primas por terraza / vistas |
| `CRITERIO` | Escala 1-10 asignada con los criterios escritos en el diccionario | Servicios, Facilidad de venta, Revalorización, Dependencia del coche |
| `TEXTO` | Cualitativo | Comunicaciones, Debilidad principal, Notas |

Reglas de las viviendas de referencia: 2 hab = 65 m², 3 hab = 90 m²; franja ≤ 5 min a playa = €/m² × 1,10; franja 20-30 min = €/m² × 0,75; redondeo a 100 €. Las columnas ≤ 5 min quedan en «—» cuando el núcleo no tiene playa a ≤ 5 min (O Rosal, Tui, Pontevedra, Villaviciosa, Gondomar, Tomiño, Castropol); la justificación va en `notas`. Tui y Tomiño no tienen prima de vistas al mar (vistas al Miño).

Clase de clima (leyenda del mapa): *Más favorable* = sol ≥ 2.400 h y ≤ 120 días de lluvia · *Favorable* = sol ≥ 2.200 h y ≤ 130 días · *Intermedio* = sol ≥ 1.850 h · *Más húmedo / nublado* = resto.

## Qué comprueba el validador

- 41 filas, numeración 1-41 consecutiva, nombres y orden exactamente los acordados (27 del MAPA 1.0 + 14 añadidos), sin duplicados.
- Todas las columnas del esquema presentes y ninguna extra; obligatorias rellenas; rangos numéricos válidos.
- Hospital y aeropuerto de cada fila coinciden con la asignación cerrada del proyecto.
- Días equivalentes de sol = horas / 8; clase de clima coherente con la regla; verano > invierno.
- Precios de vivienda coherentes con la regla y con `min_playa`; primas combinadas entre el máximo de las simples y su suma.
- Avisos no bloqueantes (hospital > 45 min, aeropuerto > 90 min, incoherencias servicios/coche).

Los errores concretos del MAPA 1.0 (hospital de Vigo en filas de Lugo, «433 días» de sol, prima combinada menor que las simples, numeración) quedan bloqueados por estas reglas.
