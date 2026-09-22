# Cierre de rama `revision-2026-09-21`

**Bloque:** CURSOR_40  
**Tipo:** cierre y validación de rama. **No** reescritura editorial. **No** merge. **No** deploy.  
**Fecha:** 2026-09-22

---

## A. Estado final

| Ítem | Valor |
|---|---|
| Rama | `revision-2026-09-21` |
| HEAD al cerrar | *(ver commit «Close 2026 revision branch»)* — base de producto `e972532` + este documento |
| main base | `7302494` (intacta) |
| Tag baseline | `baseline-pre-revision-2026-09-21` → `9e44b0b` |
| READY_FOR_MERGE | **YES** |

---

## B. Resultado

| Ámbito | Estado |
|---|---|
| Municipios actuales | **83/83** coherentes |
| Zonas actuales | **16/16** coherentes |
| V1 histórica | **99/99** intacta (`qa_v1`; hashes vs `5cff55d`) |
| Capa factual 2026 | Presente en ficha (`FichaCapa2026`); sync v15 OK |
| Precios / bandas A-B | sync 83/83; **4 n.d.**: Vilaboa, Xove, Muros de Nalón, Afife-Carreço |
| Servicios / autonomía | 83/83 alineados v15 |
| Sanidad / logística (aero, Palma, transporte) | 83/83 |
| Mar / paseo / microzona | 83/83 |
| Casa / reventa | 83/83 |
| Relatos municipales + zona | coherentes post CURSOR_14–38; barrido sin €/m² ni X/10 |
| Navegación V1 | `/v1/` + 83+16 rutas; enlaces actual↔V1 en zonas |

P0/P1 conocidos: **0** (CURSOR_39).

---

## C. QA (CURSOR_40)

| Check | Resultado |
|---|---|
| `python scripts/qa_master.py` | OK |
| `python scripts/sync_master_v15_to_web.py --check` | OK |
| `python scripts/qa_v1.py` | OK 99/99 |
| `npm run build` (web) | OK **207/207** |
| Rutas actuales | 83 municipio + 16 zona |
| Rutas V1 | 83 municipio + 16 zona + home `/v1/` |
| Enlaces zona actual → `/v1/zona/{id}/` | 16/16 |
| Assets fotos relatos | **563** refs · **0** rotos · Navia OK |
| 4 n.d. | exactos (slugs arriba) |
| Barrido relatos actuales €/m² · X/10 | 0 archivos |
| `git diff --check` (working tree) | limpio |
| `git diff --check main...HEAD` | whitespace residual en docs históricos de la rama (no producto); no bloqueante |

---

## D. Deudas no bloqueantes

Solo las ya aceptadas:

1. **despejados / cubiertos** — metodología; NO AUTO-propagación.
2. **Golfo / Alvedro** — referencia de estación vs capa espacial, etiquetada (no media inventada de 7 municipios).
3. **Agregados climáticos de zona** en `zonas.json`.
4. **Docs históricas MAPA 2.0** residuales (pipeline legado; no autoridad 2026).
5. **Untracked C/D** conservados fuera del merge (investigación identidad, `.bak`).

No se añaden deudas estéticas nuevas.

---

## E. Protección

- `main` **no** tocada.
- **No** merge en este bloque.
- **No** deploy.
- Tag/baseline V1 y snapshot `web/src/data/v1` independientes de la prosa 2026.
- Producto (relatos, JSON, UI) **no** modificado en CURSOR_40.

---

## F. Cómo volver atrás / comparar

| Mecanismo | Uso |
|---|---|
| Tag `baseline-pre-revision-2026-09-21` (`9e44b0b`) | Estado pre-revisión en git |
| Rama `revision-2026-09-21` | Toda la revisión (42+ commits sobre main) |
| Archivo V1 navegable `/v1/` | Prosa histórica lado a lado con actual |
| Enlaces en páginas de zona | actual ↔ V1 |
| `qa_v1` hashes vs `5cff55d` | Garantiza aislamiento textual del snapshot |

Comparar: `git log main..HEAD`, `git diff main...HEAD`, o navegar `/zona/…` vs `/v1/zona/…`.

---

## G. Siguiente paso

**MERGE CONTROLADO** solo tras **autorización expresa** del usuario.

Este documento no autoriza merge, rebase, squash, force-push ni deploy.

---

FIN CIERRE REVISIÓN 2026-09-21
