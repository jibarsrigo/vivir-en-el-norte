# Notas de merge — `revision-2026-09-21`

Documento de apoyo a PR/merge. **No** crea PR. **No** autoriza merge ni deploy.

**Rama:** `revision-2026-09-21`  
**Base main:** `7302494`  
**Baseline tag:** `baseline-pre-revision-2026-09-21` (`9e44b0b`)  
**Cierre:** `docs/CIERRE_REVISION_2026-09-21.md` (CURSOR_40)

---

## Qué cambia

- **Maestra v15** como autoridad 2026 + sync hacia `web/src/data/municipios-*.json`.
- **Capa factual 2026** en ficha de municipio (servicios, sanidad, conexiones, mar/paseo/microzona, casa/reventa, precios A-B).
- **Relatos municipales** reescritos/alineados (83) y **relatos de zona** (16).
- **Archivo V1 navegable** (`/v1/` + snapshot `web/src/data/v1`) con enlaces actual↔histórico.
- **QA/docs** de auditoría, fuentes de reescritura, propagación v15, cierre de rama.
- Ajustes menores de gobernanza (README: CSV = legado MAPA 2.0; v15 = activa).

Escala orientativa vs `main`: ~42 commits · ~299 archivos · reescrituras editoriales + EOL controlados (el tamaño del diff no es señal de error).

---

## Qué NO cambia

- **No** se toca `main` en el cierre.
- **No** deploy automático.
- Política climática **despejados/cubiertos**: sin auto-propagación.
- Snapshot V1: contenido histórico aislado (no se reescribe con prosa 2026).
- Untracked de investigación (`output/identidad_*`, scripts `_identidad_*` / `_wire_*`, `.bak`) **fuera** del merge.

---

## Validación (reproducible en HEAD de cierre)

```text
python scripts/qa_master.py
python scripts/sync_master_v15_to_web.py --check
python scripts/qa_v1.py
cd web && npm run build
```

Comprobado en CURSOR_40:

- qa_master / sync --check / qa_v1: **OK**
- build: **207/207**
- rutas: 83+16 actuales · 83+16 V1 · `/v1/`
- enlaces zona → V1: 16/16
- fotos relatos: 563 · 0 rotos · Navia OK
- 4 n.d. precio: Vilaboa, Xove, Muros de Nalón, Afife-Carreço
- relatos actuales: sin €/m² ni X/10 accidentales
- P0/P1: **0**

---

## Riesgos / deudas conocidas (no bloqueantes)

1. despejados/cubiertos — deuda metodológica.
2. Golfo/Alvedro — estación vs capa espacial (etiquetado).
3. Agregados climáticos de zona.
4. Docs MAPA 2.0 residuales.
5. Whitespace trailing en algunos docs históricos de la rama (`git diff --check main...HEAD`); no afecta producto.

---

## Rollback

| Opción | Cómo |
|---|---|
| No mergear | Dejar `main` en `7302494`; rama intacta |
| Tras merge, revertir | Revert del merge commit, o reset de `main` solo con acuerdo explícito |
| Comparar pre-revisión | Checkout/tag `baseline-pre-revision-2026-09-21` |
| Comparar prosa | Navegar `/v1/` vs rutas actuales |

---

## Checklist post-merge (humano)

- [ ] Confirmar `main` apunta al merge esperado
- [ ] Smoke: home, 1 zona, 1 municipio, `/v1/`, `/compara/`
- [ ] Confirmar 4 n.d. siguen mostrando "—" / n.d. (no cifras inventadas)
- [ ] Confirmar tag baseline sigue existiendo
- [ ] **No** deploy automático solo por el merge — decidir publicación aparte

---

## NO deploy automático

El merge de esta rama **no** implica publicar en GitHub Pages ni ningún otro entorno. Deploy solo con instrucción explícita posterior.

---

FIN NOTAS MERGE
