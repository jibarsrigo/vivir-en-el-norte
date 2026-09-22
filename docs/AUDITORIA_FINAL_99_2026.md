# Auditoría final transversal 99/99 (2026)

**Bloque:** CURSOR_39  
**Tipo:** auditoría + documentación. **No** reescritura de relatos. **No** merge/deploy.  
**HEAD de partida:** `4cdb743` (Rewrite 2026 zone narratives)  
**Rama:** `revision-2026-09-21` · **main:** `7302494` · **tag baseline:** `baseline-pre-revision-2026-09-21`

Artefacto máquina: `output/_cursor39_audit.json` · script: `scripts/_cursor39_audit.py`

---

## 1. Estado 99/99

| Capa | Cobertura | Estado |
|---|---|---|
| Municipios actuales (relato + ficha JSON) | 83/83 | Coherentes post CURSOR_14–36 |
| Zonas actuales (relato + `zonas.json`) | 16/16 | Coherentes post CURSOR_37–38 |
| V1 histórica (`web/src/data/v1`) | 83 mun + 16 zonas = 99/99 | Intacta (`qa_v1` OK; hashes vs `5cff55d`) |
| Universo revisado actual | 99/99 | Sí (83+16) |

Pertenencia zona→municipios: **exacta 83/83** (0 solo_zonas / 0 solo_json). Santillana **ausente**. IDs/slugs únicos. `web/public/data/zonas.json` ≡ `web/src/data/zonas.json`.

---

## 2. Fuentes de verdad y capas

| Capa | Rol | Semántica |
|---|---|---|
| **A. Autoridad actual 2026** | `data/master/…_v15_….xlsx` → `web/src/data/municipios-*.json` | Precios, A/B, capa cualitativa 2026, clima básico sync |
| **B. Histórico deliberado** | Snapshot `web/src/data/v1/**`; CSV `data/municipios.csv` (MAPA 2.0); columnas mar/comunicaciones “clásicas” en ficha | No autoridad factual vigente |
| **C. Deuda metodológica** | `despejados`/`cubiertos` NO AUTO; agregados `zonas.json` (p.ej. Golfo `solHoras` 1939 Alvedro) | Etiquetar; no “arreglar” inventando media |
| **D. Contradicción real** | Afirmación visible que choca con A sin etiqueta | **Ninguna P0/P1 conocida** tras barrido CURSOR_39 |

Flujo: **v15 → JSON sink → web** (`sync_master_v15_to_web.py --check` OK). Relatos no se regeneran desde v15 automáticamente.

Distinción crítica: **v15 master** ≠ **V1 web archive**.

---

## 3. Resultados por fase

### Fase 1 — Integridad del universo

- Municipios JSON: 83 · Zonas: 16 · Relatos municipales detectados para 83/83 slugs · Relatos zona: 16/16 archivos.
- Rutas estáticas (`web/out`): 83+16 actuales · 83+16 V1.
- Enlaces zona actual → `/v1/zona/{id}/`: **16/16**.
- Huérfanos/duplicados: no detectados.

### Fase 2 — Consistencia factual transversal

| Ámbito | Resultado |
|---|---|
| precios / A-B | sync 83/83; 4 n.d. exactos; A/B no fabricados en n.d. |
| servicios / autonomía / coche / estacionalidad / peaje | 83/83 en JSON; alineados v15 |
| sanidad (primaria/PAC/hospital práctico/referencia) | 83/83 |
| aeropuerto / Palma / transporte | 83/83 |
| mar/playa cotidiana / paseo / microzona | 83/83 |
| casa / reventa | 83/83 |
| clima básico sync | sol/lluvia/temps/etc. OK; despejados/cubiertos excluidos del sync |
| capas históricas (mar minCosta, comunicaciones…) | Semántica distinta; no tratadas como contradicción 2026 |

**Contradicciones reales restantes (D):** ninguna material en producto visible.

### Fase 3 — Barrido de texto (83+16 relatos actuales)

Conteos brutos → revisión semántica:

| Patrón | Hits | Clasificación |
|---|---:|---|
| €/m² / euros el metro | 0 | — |
| X/10 | 0 | — |
| 000 euros / totales | 0 | — |
| jubilado | 0 | — |
| revalorización | 1 | **editorial seguro** (Asturias Oriente: “No deben prometerse revalorizaciones…”) |
| más barato/caro | 4 | **editorial seguro** (contraste tipológico “orilla más cara”, no ranking inventado de €) |
| todos los servicios | 3 | **editorial seguro** (negación en Encaja: “si se quieren todos…”) |
| bien comunicado | 0 | — |
| ideal/perfecto | 1 | **editorial seguro** (Baixo: “ideal si…” en contexto de playa, no veredicto de compra) |

**Conflictos P0/P1 de prosa:** 0.

### Fase 4 — Los 4 n.d.

| Lugar | JSON precioM2 | A/B | Relato mun | Relato zona | UI |
|---|---|---|---|---|---|
| Vilaboa | `null` | null | sin € inventado | sin € inventado | `euros`/`eurosM2` → "—"; FichaCapa “Precio: n.d.” |
| Xove | `null` | null | n.d. explícito | n.d. / sin € | idem |
| Muros de Nalón | `null` | null | n.d. | sin € | idem |
| Afife-Carreço | `null` | null | n.d. | sin € | idem |

Falsos positivos del scanner (rutas `muros-*.jpg`) descartados.

### Fase 5 — UI / navegación / V1

- Home, `/v1/`, `/compara/` presentes en export.
- V1 aislada: `qa_v1` isolation OK; sync no escribe en `v1/`.
- Assets foto referenciados en relatos: **563**; **0 rotos**; Navia: 6 refs, 0 missing.
- Hrefs internos muestreados: **0 rotos** detectables.
- TablaPrecios + FichaCapa2026 en flujo municipio; V1 no usa capa 2026 actual.

### Fase 6 — Responsive / a11y básica

- `TablaPrecios` / tablas zona: `overflow-x-auto` presente.
- Encaja / details en Compara: estructura existente (no rediseñada).
- Headings H1/H2 en páginas zona/municipio: patrón homogéneo.
- Smoke visual browser automatizado: **no ejecutado** (sin sesión browser dedicada en este bloque); HTML estático verificado por build + rutas.

### Fase 7 — Clima (deuda)

1. **Contradicción visible actual:** no (Golfo etiquetado Alvedro; no se presenta 1939 como media de 7 municipios).
2. **Histórico deliberado:** V1 conserva cifras antiguas — aislado.
3. **Estación vs espacial:** Golfo `zonas.json` 1939 vs mun 1950–2050 (A Coruña ficha 2050).
4. **despejados/cubiertos:** NO AUTO — deuda metodológica global (`docs/AUDITORIA_CLIMA_V15_WEB.md`).
5. **Agregados zonas.json:** conservados; prosa usa `{zona.*}` con matices.
6. **Prosa saneada:** CURSOR_38 retiró mm mun injustificados y € hard.

**¿Bloquea cierre?** **NO** — deuda documentable, no afirmación falsa sin etiqueta.

### Fase 8 — Gobernanza

| Ítem | Antes | Acción CURSOR_39 |
|---|---|---|
| README raíz: CSV “fuente de verdad” | Incorrecto vs v15 | **Corregido** (CSV = legado; v15 = activa) |
| `data/master/README.md`: “web no sincronizada” | Obsoleto | **Corregido** (sync activo + distinción V1 archive) |
| Flujo editar CSV | Obsoleto | **Corregido** → editar v15 + sync |

Ambigüedades residuales menores en docs antiguos (`estudio_zonas.md`, columnas MAPA 2.0) = histórico de proyecto, no bloqueantes.

### Fase 9 — Git / higiene

| Clase | Qué |
|---|---|
| **A. Conservar/commit** | `docs/AUDITORIA_FINAL_99_2026.md`, `scripts/_cursor39_audit.py`, fixes README/`data/master/README.md` |
| **B. Temporal seguro** | `output/_cursor*`, `output/_audit*`, logs build, scripts `_cursor36/37/38*` de trabajo previo |
| **C. Investigación local** | `output/identidad_*`, fotos candidatas — no commit |
| **D. Dudoso** | `.bak` de RelatoMunicipio — no borrar automáticamente |

No se borró material dudoso. Baseline/tag intactos. Sin reescritura de historia.

### Fase 10 — Decisión

**READY_FOR_FINALIZATION = YES**

Bloqueantes: **ninguno**.

Deudas no bloqueantes:
- Clima despejados/cubiertos + agregados zona (Golfo Alvedro).
- Pulido editorial opcional (“más cara”, “todos los servicios” en Encaja — ya semánticamente seguros).
- Limpieza de untracked temporales en un bloque de higiene.
- Docs MAPA 2.0 históricos en README (columnas 260k / inversión) — legado descriptivo del pipeline mapa2, no UI.

---

## 4. Alcance recomendado CURSOR_40

Único lote de **cierre de rama / documentación / QA final / preparación merge** (sin merge ni deploy en 39):

1. Confirmar QA + build en HEAD final.
2. Decidir política de higiene (borrar o `.gitignore` temps `_cursor*` / `output/_cursor*`).
3. Checklist pre-merge: main intacta, baseline tag, diff summary 83+16+V1.
4. Texto breve de release notes / PR body.
5. **No** reabrir reescritura de relatos salvo P0 nuevo.
6. Merge/deploy solo tras aprobación humana explícita fuera de Cursor automático.

---

## 5. QA registrado (CURSOR_39)

- `qa_master`: OK  
- `sync --check`: OK  
- `qa_v1`: OK 99/99  
- `build`: OK 207  
- Rutas: 83+16 / 83+16  
- Assets fotos relatos: 0 rotos  
- Producto relatos/JSON/zonas/V1: **no modificados** (solo docs gobernanza)

---

FIN AUDITORIA FINAL 99/99
