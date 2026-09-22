# V1 · versión original (archivo congelado)

Copia histórica, literal y verificable de los textos editoriales **anteriores a la revisión 2026**.

## Fuente

- Tag: `baseline-pre-revision-2026-09-21`
- Commit: `5cff55db6c4576476cf4d5ae9ec039d9865ed1aa`
- No usar `main` actual como sustituto.

## Qué contiene

- **83** municipios (`municipios/*.json`)
- **16** zonas (`zonas/*.json`)
- **99** entradas en `manifest.json`
- Fuentes literales en `sources/` (objetos TS / TSX del baseline) para auditoría

## Qué NO es

- No es la capa v15/v16
- No se actualiza al sincronizar master → web
- No mezcla prosa actual con histórica

## Verificar

```bash
python scripts/qa_v1.py
```

Debe reportar 83/83 + 16/16 y 99/99 hashes alineados con `git show 5cff55d:…`.
