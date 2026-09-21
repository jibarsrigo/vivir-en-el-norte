# Tabla maestra 2026 — referencia de QA

Este directorio guarda la **tabla maestra estructurada** usada para auditoría y contraste con la web. No es un origen que Cursor deba volcar solo a CSV, JSON o relatos.

## Qué es `TABLA_MAESTRA_VIVIR_EN_EL_NORTE_2026_v1.xlsx`

- Referencia de QA: 83 lugares y 16 zonas, con precios consolidados cuando la investigación dejó una cifra usable, fórmulas A/B acordadas y servicios de Galicia ya validados en master.
- **No autoriza** una sincronización masiva automática con el producto.

## Campos `*_legacy`

Proceden de la tabla / CSV histórico. **No son datos finales.** Sirven para detectar contradicciones frente a lo que hay en la web o en el MASTER de investigación. No deben propagarse como verdad sin una instrucción explícita de validación.

## Pendientes y no comparables

Un valor `PENDIENTE`, `n.d.` o «no comparable» **no se inventa** ni se rellena por inferencia. Se deja marcado hasta que haya fuente.

## Quién edita el XLSX

Cursor **no debe editar** este fichero por iniciativa propia. Los cambios de contenido se hacen fuera (o con instrucciones concretas) y se sustituye el archivo de forma deliberada.

## Contradicciones

Si el QA o un contraste con fichas/JSON/relatos encuentra discrepancias, **se reportan** antes de propagar nada a la web.

## Límites de esta hoja

El MASTER íntegro de investigación y los textos definitivos de zona/municipio tienen contexto (prosa, matices, fuentes) que esta hoja **no pretende sustituir**.

## Cómo se actualiza el producto

Los cambios de datos en JSON, CSV, componentes o relatos se harán **más adelante**, mediante instrucciones específicas por bloques — no desde esta v1 de forma masiva.
