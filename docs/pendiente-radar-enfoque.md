# Radar / candidatos — enfoque acordado (no implementar aún)

El prompt original del usuario está en:

`docs/pendiente-radar-prompt-usuario.txt`

Ese documento es un **borrador de ideas**. Tiene el objetivo bien (gestionar viviendas candidatas en familia, no clonar Idealista), pero **muchas partes están mal o sobredimensionadas** para un uso personal 2–5 personas: scraping multi-portal, deduplicación automática, backend complejo vs Pages+JSON, IA, etc. **No construir el sistema tal cual el txt.**

Resumen operativo y crítica viven también en `.cursor/rules/fichas-zona-municipio.mdc` → *Pendiente — Radar inmobiliario*.

## Qué quiere Jose (aclarado en chat)

1. Con pueblos finalistas → listar portales e inmobiliarias de la zona.
2. Pegar URL → ficha candidato en la web (datos útiles + 1 foto para reconocer sin Idealista).
3. Luego, con fuentes conocidas → vigilancia (nuevos, bajadas…) publicada en vivir-en-el-norte.

## Enfoque del agente (conservar)

A. Candidatos en la web (MVP real).  
B. Mapa de fuentes curado por municipio.  
C. Barrido inicial guiado.  
D. Radar después: primero recheck de URLs guardadas / alertas; scrapear búsquedas solo si hace falta.

Utilidad familiar > sofisticación.
