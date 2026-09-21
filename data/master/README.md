# Tabla maestra 2026 — referencia de QA

Este directorio guarda la **tabla maestra estructurada** usada para auditoría y contraste con la web. No es un origen que Cursor deba volcar solo a CSV, JSON o relatos.

## Referencia activa: v2 COMPLETA

**Archivo activo:** `TABLA_MAESTRA_VIVIR_EN_EL_NORTE_2026_v2_COMPLETA.xlsx`

- Es la referencia de estructura y trazabilidad.
- Conserva **todas las columnas históricas** disponibles (54) y añade la **capa 2026** (34 columnas nuevas; 88 en total).
- Las columnas históricas sirven para **trazabilidad y contraste**, no como precedencia automática sobre la web ni sobre el MASTER de investigación.
- Un valor vacío, `PENDIENTE`, `n.d.` o equivalente **no se inventa** ni se rellena por inferencia.
- Cursor **no modifica** datos maestros por iniciativa propia.
- **Ninguna propagación a la web** está autorizada solo por existir este archivo: los cambios de producto se harán con instrucciones específicas por bloques.

## Histórico: v1 (superseded)

**Archivo histórico:** `TABLA_MAESTRA_VIVIR_EN_EL_NORTE_2026_v1.xlsx`

- Queda **únicamente** como registro de la primera estructuración (v1 simplificada).
- **No debe usarse** para sincronizar la web ni como fuente de verdad frente a v2.

## Campos legacy / históricos

Proceden de la tabla / CSV histórico. Son trazabilidad, no dato final automático. No deben propagarse como verdad sin instrucción explícita de validación.

## Quién edita el XLSX

Cursor **no debe editar** estos ficheros por iniciativa propia. Los cambios de contenido se hacen fuera (o con instrucciones concretas) y se sustituye el archivo de forma deliberada.

## Contradicciones

Si el QA o un contraste con fichas/JSON/relatos encuentra discrepancias, **se reportan** antes de propagar nada a la web.

## Límites de esta hoja

El MASTER íntegro de investigación y los textos definitivos de zona/municipio tienen contexto (prosa, matices, fuentes) que esta hoja **no pretende sustituir**.

## Cómo se actualiza el producto

Los cambios de datos en JSON, CSV, componentes o relatos se harán **más adelante**, mediante instrucciones específicas por bloques — no desde esta v2 de forma masiva.
