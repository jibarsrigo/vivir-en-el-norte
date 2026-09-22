# Tabla maestra 2026 — referencia de QA

## Referencia activa: v15 candidata final corregida

**Archivo activo:** `TABLA_MAESTRA_VIVIR_EN_EL_NORTE_2026_v15_CANDIDATA_FINAL_CORREGIDA.xlsx`

- 83 lugares / 16 zonas; 54 columnas históricas + 34 nuevas = 88.
- Fuente maestra de referencia **auditada** y **activa** para hechos estructurados 2026.
- La web (`web/src/data/municipios-*.json`) está sincronizada con v15 vía `scripts/sync_master_v15_to_web.py` (verificar con `--check`). Despejados/cubiertos y algunos agregados de `zonas.json` quedan fuera del sync automático (deuda metodológica documentada).
- Vacío / `PENDIENTE` / `n.d.` no se inventa. Cursor no modifica el XLSX por iniciativa propia.
- Cualquier corrección de contenido se hace **primero** en la tabla maestra y después se propaga con un bloque separado y revisado.
- Distinguir: **v15 master** (XLSX) ≠ **snapshot web V1** (`web/src/data/v1/`, archivo histórico de relatos).

## Histórico (trazabilidad)

| Archivo | Rol |
|---|---|
| `..._v15_CANDIDATA_FINAL_CORREGIDA.xlsx` | Referencia activa / candidata final auditada |
| `..._v2_COMPLETA.xlsx` | Histórica / provisional anterior |
| `..._v1.xlsx` | Prototipo / histórico de la primera estructuración |

No usar v1 ni v2 para sincronizar la web. Las versiones intermedias (v3–v14) no se incorporan al repo.

## Límites

El MASTER íntegro de investigación y los textos de zona/municipio tienen contexto que esta hoja no sustituye. Propagar v15 → JSON es un bloque explícito (`sync_master_v15_to_web.py`); no implica reescritura automática de relatos.
