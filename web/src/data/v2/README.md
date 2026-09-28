# V2 · CURRENT congelado

Copia navegable y congelada de la web **CURRENT** tal como existía al crear V2
(antes de que NUEVO2 la sustituya).

## Fuente

- Tag de congelación: `current-freeze-2026-09-26`
- HEAD de referencia: `afaded44aea9026d9167871e60c56aa4b4a82aa8`
- Contenido: working tree CURRENT (no NUEVO2)

## Qué contiene

- **83** municipios (`municipios/*.json`) con ficha + relato + Idealista
- **16** zonas (`zonas/*.json`) con prosa, widgets, fichas y mapa
- Datos compartidos en `freeze/` (zonas, municipios-*, Idealista, resúmenes, mapas)
- **99** entradas en `manifest.json`
- Fuentes literales en `sources/` para auditoría

## Qué NO es

- No es V1
- No es NUEVO2
- No se actualiza al desarrollar fichas NUEVO2
- No mezcla prosa futura con esta congelación

## Rutas públicas

- `/v2/`
- `/v2/zona/[id]/`
- `/v2/zona/[id]/[municipio]/`
