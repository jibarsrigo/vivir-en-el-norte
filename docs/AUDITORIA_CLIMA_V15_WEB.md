# Auditoría de clima v15 ↔ web (CURSOR_10)

**Fecha de auditoría:** 2026-09-21  
**Rama:** `revision-2026-09-21` · HEAD al auditar: `0b6c493`  
**Maestra:** `data/master/TABLA_MAESTRA_VIVIR_EN_EL_NORTE_2026_v15_CANDIDATA_FINAL_CORREGIDA.xlsx` hoja `MAESTRA_83`  
**Alcance:** inspección + documentación. **No se modificó** ningún dato climático de producto, XLSX, CSV, JSON, TS/TSX ni relatos.

Referencias internas ya existentes (no sustituidas): `docs/PROPAGACION_MASTER_V15_A_WEB.md` (§2.6 clima; despejados/cubiertos = no auto), `docs/estudio_zonas.md` (lectura de cifras; AEMET/IPMA para series mensuales aún no tabuladas).

---

## 1. Inventario climático real

### 1.1 Campos en v15 / MAESTRA_83 (históricos)

| Campo v15 | Unidad / tipo | Cobertura | Notas desde el repo |
|---|---|---|---|
| `sol_horas_anio` | h/año | 83/83 | Histórico; alineado con CSV |
| `sol_dias_equiv` | días (equiv.) | 83/83 | Histórico; **no** está en fichas ni en `clima-municipios.json` |
| `dias_despejados` | días/año | 83/83 | **NO AUTO PROPAGATION** |
| `dias_cubiertos` | días/año | 83/83 | **NO AUTO PROPAGATION** |
| `lluvia_dias_anio` | días/año | 83/83 | |
| `lluvia_mm_anio` | mm/año | 83/83 | |
| `temp_verano_c` | °C | 83/83 | |
| `temp_invierno_c` | °C | 83/83 | |
| `humedad_pct` | % | 83/83 | |
| `viento` | cualitativo (`Baja`/`Media`/`Alta`…) | 83/83 | |
| `niebla` | cualitativo | 83/83 | |
| `clase_clima` | etiqueta de clase | 83/83 | También rederivable en mapa por umbrales sol+lluvia (`clima.ts`) |
| `temp_agua_verano` | rango texto (`17-19`…) | 83/83 | Campo marino/climático limítrofe |

No hay en v15 columnas de días de lluvia mensuales, días > 30 °C ni series mensuales de temperatura (el estudio las menciona como AEMET/IPMA redondeadas **aún no en la tabla**).

### 1.2 `data/municipios.csv`

Mismos nombres de columna climática que v15 (separador `;`). Comparación numérica/textual **v15 ↔ CSV: 83/83 iguales** en los 13 campos de la tabla anterior.  
Runtime Next **no** lee este CSV para fichas; es fuente histórica / herramientas (`mapa2`, generadores).

### 1.3 `web/src/data/clima-municipios.json`

83 filas. Campos: `zonaId`, `nombre`, `solHoras`, `despejados`, `cubiertos`, `lluviaDias`, `lluviaMm`, `tempVerano`, `tempInvierno`, `humedad`, `viento`, `niebla`, `clase`.  
**No incluye** `sol_dias_equiv` ni `tempAgua`.  
No hay copia en `web/public/data/`.

### 1.4 Dieciséis JSON de ficha (`municipios-*.json`)

Misma capa climática top-level que `clima-municipios` **más** `tempAgua` (string). Tipado en `web/src/lib/municipios.ts` (`FichaMunicipio`).

### 1.5 Agregados de zona / Mallorca — `web/src/data/zonas.json`

Por zona: `solHoras`, `solDias`, `despejados`, `cubiertos`, `lluviaDias`, `lluviaMm`, `lluvia` (objeto oct–mar / peor / verano), `tempVerano`, `viento`, `niebla`, `clase`, `calorAprieta`.  
`mallorca`: `despejados`, `solHoras`, `lluviaDias`, `lluvia`, `viento`, `niebla` (sin `cubiertos` en el objeto Mallorca).  
`solDias` de zona ≈ `solHoras/8` en 15/16 zonas; **Golfo Ártabro** no cuadra (`solHoras` 1939 → h/8≈242, `solDias` 250) y usa cifras tipo estación A Coruña (1939/49), no el promedio de los municipios v15 del golfo.

### 1.6 Tipos / helpers

| Archivo | Rol |
|---|---|
| `web/src/lib/municipios.ts` | Tipos ficha incl. clima embebido |
| `web/src/lib/zonas.ts` | Tipos zona + `mallorca` |
| `web/src/lib/clima.ts` | Carga `clima-municipios.json`; iconos de cielo; `cuerpoClima` / `textoClima`; tramos y zonas de mapa; `climaDeMunicipio` |
| `web/src/lib/capas-mapa-pueblo.ts` | Capa mapa «clima» vía `climaDeMunicipio` |
| `web/src/lib/capas-tabla.ts` | Columnas capa clima: sol, despejados, lluvia (días) — **sin cubiertos** |
| `web/src/lib/compara.ts` | Prefiere `climaDeMunicipio` y cae a ficha; filas Sol / Despejados / Lluvia / % vs Mallorca |

### 1.7 Componentes que muestran clima (públicamente)

| Superficie | Qué muestra | Fuente típica |
|---|---|---|
| Mapa portada (chip Clima) | Icono por clase + globo con sol, despejados, lluvia, verano, viento, niebla | `clima-municipios.json` |
| Tabla de capas / busca | Sol, Despejados, Lluvia (días) | `clima-municipios.json` |
| Busca y compara (mesa) | Sol, Despejados, Lluvia anual, Lluvia oct–mar (días/mes), % sol·despejados vs Mallorca | `clima` preferente + `zonas.lluvia` para oct–mar |
| Página zona (lista / relatos) | `zona.despejados`, `solHoras`, `lluvia*`, a menudo `cubiertos` en prosa | `zonas.json` |
| Relatos de municipio (`tiempo` / Frente a Mallorca) | Cifras **escritas en prosa** (no leen el JSON en runtime) | `relatos-*.ts` / bloques en `RelatoMunicipio` |
| Ficha JSON | Campos climáticos disponibles para UI futura; Compara/mapa **priorizan** capa clima | 16 JSON |

**No** se usan despejados/cubiertos como filtros de búsqueda ni como scores de ranking de inversión; sí entran en comparación tabular (mejor = más sol/despejados) y en el porcentaje frente a Mallorca (`compara.ts`).

### 1.8 Mapeo de nombres (tabla de mapeo)

| v15 | CSV | Ficha JSON | `clima-municipios.json` | `zonas.json` |
|---|---|---|---|---|
| `sol_horas_anio` | igual | `solHoras` | `solHoras` | `solHoras` (agregado) |
| `sol_dias_equiv` | igual | — | — | `solDias` (agregado; relación ≈ h/8, no copia municipal) |
| `dias_despejados` | igual | `despejados` | `despejados` | `despejados` |
| `dias_cubiertos` | igual | `cubiertos` | `cubiertos` | `cubiertos` |
| `lluvia_dias_anio` | igual | `lluviaDias` | `lluviaDias` | `lluviaDias` + objeto `lluvia` |
| `lluvia_mm_anio` | igual | `lluviaMm` | `lluviaMm` | `lluviaMm` |
| `temp_verano_c` | igual | `tempVerano` | `tempVerano` | `tempVerano` |
| `temp_invierno_c` | igual | `tempInvierno` | `tempInvierno` | — |
| `humedad_pct` | igual | `humedad` | `humedad` | — |
| `viento` | igual | `viento` | `viento` | `viento` |
| `niebla` | igual | `niebla` | `niebla` | `niebla` |
| `clase_clima` | igual | `clase` | `clase` | `clase` |
| `temp_agua_verano` | igual | `tempAgua` | — | — |

Granularidad aparente desde el repo (sin inventar estación si no está documentada):

- **Municipal en apariencia** (un valor por lugar en ficha/clima/CSV/v15), pero con **muchas huellas idénticas** entre vecinos → plausible valor **zonal/compartido** copiado a municipios.
- **Zonal explícito** en `zonas.json` y tramos de `clima.ts`.
- **Estación citada en prosa** (no en columnas): relatos del Golfo Ártabro mencionan normales AEMET 1981-2010 (Alvedro / ciudad) para A Coruña y como referencia para Oleiros.
- `sol_dias_equiv` / `solDias`: **derivado o histórico**; el repo no documenta la metodología de “días equivalentes” más allá de la coincidencia h/8 en casi todas las zonas.

---

## 2. Comparación v15 ↔ web (conteos)

Match por `n` (fichas) o por `municipio` (`clima-municipios`). Comparación **numérica** (20.0 ≡ 20).

### 2.1 v15 ↔ CSV

| Campo | Coinciden | Difieren | Vacíos |
|---|---:|---:|---:|
| Todos los 13 climáticos listados | **83** | 0 | 0 |

### 2.2 v15 ↔ `clima-municipios.json`

| Campo | Coinciden | Difieren | No comparable / ausente |
|---|---:|---:|---|
| `sol_horas_anio` → `solHoras` | 83 | 0 | — |
| `dias_despejados` → `despejados` | 83 | 0 | — |
| `dias_cubiertos` → `cubiertos` | 83 | 0 | — |
| `lluvia_dias_anio` → `lluviaDias` | 83 | 0 | — |
| `lluvia_mm_anio` → `lluviaMm` | 83 | 0 | — |
| `temp_verano_c` → `tempVerano` | 83 | 0 | — |
| `temp_invierno_c` → `tempInvierno` | 83 | 0 | — |
| `humedad_pct` → `humedad` | 83 | 0 | — |
| `viento` / `niebla` / `clase_clima` | 83 | 0 | — |
| `sol_dias_equiv` | — | — | **ausente en clima.json** |
| `temp_agua_verano` | — | — | **ausente en clima.json** |

**Lectura:** la capa `clima-municipios.json` es **copia fiel** de la capa climática municipal de v15 (salvo campos no modelados).

### 2.3 v15 ↔ 16 JSON de ficha

| Campo | Coinciden | Difieren | Ejemplos |
|---|---:|---:|---|
| `solHoras` | 82 | **1** | A Coruña: v15/clima **2050** · ficha **1939** |
| `despejados` | 82 | **1** | A Coruña: **50** vs **49** |
| `cubiertos` | 83 | 0 | — |
| `lluviaDias` | 82 | **1** | A Coruña: **128** vs **130** |
| `lluviaMm` | 82 | **1** | A Coruña: **1000** vs **1014** |
| `tempVerano` / `tempInvierno` | 83 | 0 | — |
| `humedad` | 82 | **1** | Ponte de Lima: **79** vs **80** |
| `viento` / `niebla` / `clase` | 83 | 0 | — |
| `tempAgua` | 77 | **6** | Cangas/Bueu `17-19`→`17-20`; Sanxenxo/O Grove/Meaño `18-20`→`17-20`; Valença `16-19`→`16-18` |

### 2.4 `clima-municipios.json` ↔ ficha

Mismas divergencias que §2.3 (A Coruña sol/lluvia/despejados; Ponte de Lima humedad). El resto 82/83 alineado campo a campo en clima numérico.

### 2.5 Representaciones no 1:1 (no “diff de celda”)

| Par | Situación |
|---|---|
| v15 municipal ↔ `zonas.json` | Agregado editorial; Golfo usa 1939/49 (tipo ficha A Coruña / relato AEMET), distinto de varios municipios v15 del golfo (p. ej. 2000/50). |
| Relatos `tiempo` ↔ JSON | Prosa fija; puede citar estación (1939…) mientras Compara/mapa leen clima.json (2050 en A Coruña vía capa). |
| `lluvia` oct–mar en zona | Solo en `zonas.json`; **no** hay columnas equivalentes en v15 MAESTRA_83. |
| `% sol · % despejados` en Compara | **Derivado** en UI respecto a `mallorca` de `zonas.json`, no columna maestra. |

---

## 3. Días despejados / cubiertos — **NO AUTO PROPAGATION**

### 3.1 Dónde existen

| Sitio | `despejados` / `dias_despejados` | `cubiertos` / `dias_cubiertos` |
|---|---|---|
| v15 / CSV | sí 83/83 | sí 83/83 |
| `clima-municipios.json` | sí | sí |
| 16 fichas | sí | sí |
| `zonas.json` | sí | sí (Mallorca: solo despejados) |
| Relatos zona/municipio | cifras en prosa o vía `{zona.despejados/cubiertos}` | igual |

### 3.2 Trazabilidad documentada en el repo

- `docs/estudio_zonas.md`: explica **cómo leer** horas de sol, despejados y cubiertos; atribuye números de sol/lluvia de la guía a `data/municipios.csv`; no fija la fórmula de despejados/cubiertos ni la estación por municipio.
- `docs/PROPAGACION_MASTER_V15_A_WEB.md`: marca explícitamente despejados/cubiertos como **no propagar automáticamente**.
- Relatos del Golfo: citan **normales AEMET 1981-2010** (Alvedro / ciudad) para algunas cifras; eso **no** está cableado como metadato de columna en JSON/v15.

No se inventa aquí metodología adicional.

### 3.3 Uso actual

| Uso | despejados | cubiertos |
|---|---|---|
| Globo mapa / `cuerpoClima` | sí | **no** |
| Columnas `capas-tabla` clima | sí | **no** |
| Mesa Compara + % vs Mallorca | sí | **no** |
| Relatos de zona (varios) | sí | sí (prosa) |
| Cálculos / filtros de cribado | no (salvo resaltar “mejor” en tabla) | no |
| Scores de inversión / predicción | no | no |

### 3.4 Opciones de presentación futura (**sin ejecutar**)

| Opción | Qué implica | Claridad | Técnico |
|---|---|---|---|
| **A) Retirar de la UI** | Quitar despejados (y cubiertos en prosa de zona) de Compara, capas-tabla y globos; dejar solo sol±lluvia±temps | Evita falsa precisión municipal | Cambios en `compara.ts`, `capas-tabla.ts`, `clima.ts` (`cuerpoClima`), relatos de zona que interpolan `{zona.*}`; datos pueden quedar en JSON |
| **B) Redefinir con etiqueta/metodología** | Mantener cifras pero etiquetar “referencia de tabla / no estación municipal” y documentar origen | Alta si hay texto de método estable | UI + docs; **sigue sin autorizar** sync mecánica hasta tener método |
| **C) Sustituir por indicadores más trazables** | p. ej. solo `solHoras` + `lluviaDias/Mm` (+ temps) con fuente explícita | Mejor trazabilidad si hay fuente por zona/estación | Requiere decisión editorial de qué mostrar; posible regeneración de capa clima **después** |
| **D) Mantener histórico claramente etiquetado** | Conservar despejados/cubiertos como capa histórica “de la tabla 2026”, no como medición puntual | Media: el usuario debe leer la etiqueta | Mínimo cambio de datos; cambios de copy/UI; **sigue NO AUTO** sync desde v15 “para corregir” sin política |

**Implicación común:** mientras no haya decisión A–D, **CURSOR_11 no debe** sobrescribir `despejados`/`cubiertos` en fichas ni regenerar `clima-municipios.json` / `zonas.json` solo porque v15 “mande”.

---

## 4. Granularidad y falsa precisión

### 4.1 Duplicaciones (misma huella climática completa en ficha)

11 grupos con ≥2 municipios **idénticos** en `(solHoras, despejados, cubiertos, lluviaDias, lluviaMm, tempVerano, tempInvierno, humedad, viento, niebla, clase)`, p. ej.:

- Baixo Miño: A Guarda = Oia  
- Val Miñor: Baiona = Nigrán  
- O Morrazo: Cangas = Bueu  
- Cantabria Oriental: Ribamontán = Noja = Santoña  
- Alto Minho: varios pares costa 2500/80/108/112/1450  

Solo **62** tuplas distintas en los cinco campos sol/despejados/cubiertos/lluviaD/lluviaMm sobre 83 lugares.  
Valores muy repetidos: `despejados=40` (22 lugares), `cubiertos=165` (24), `solHoras=1700` (9).

### 4.2 Exactitud / apariencia municipal

- Enteros redondeados (sol a 50 h, mm a 50…) en la mayoría de filas.  
- Contraste: A Coruña en **ficha** usa 1939 / 1014 / 49 / 130 (aspecto de estación), mientras v15/clima.json usan 2050 / 1000 / 50 / 128.  
- Relatos del mismo arco citan 1939/49/1014/130 como AEMET; Compara/mapa para A Coruña leen **clima.json → 2050/50/128/1000** (preferencia `climaDeMunicipio`). **Contradicción UI ↔ prosa** en el mismo municipio.

### 4.3 Otras contradicciones detectadas (sin corregir)

| Caso | Detalle |
|---|---|
| A Coruña ficha ≠ v15/clima | sol, despejados, lluvia días/mm |
| Ponte de Lima humedad | 79 (v15/clima) vs 80 (ficha) |
| `tempAgua` | 6 municipios desalineados v15↔ficha |
| Golfo `zonas.json` | 1939/49 alineado a estación/prosa, no a media de municipios v15 |
| Oleiros relato | Cita 1939/49 (A Coruña AEMET) mientras ficha/clima tienen 2000/50 |

---

## 5. Propuesta CURSOR_11 (plan seguro, sin ejecutar)

Mantener **83 lugares / 16 zonas**. Sin gran refactor.

### 5.1 Separación de datos

1. **Sincronizables directamente** (tras QA de igualdad y sin tocar despejados/cubiertos):  
   candidatos razonables si se decide un sink único: `solHoras`, `lluviaDias`, `lluviaMm`, `tempVerano`, `tempInvierno`, `humedad`, `viento`, `niebla`, `clase` — **solo** donde se elija explícitamente “v15 manda” o “ficha estación manda”. Hoy v15≡clima.json; las fichas casi igual salvo A Coruña/humedad/tempAgua.

2. **Requieren decisión editorial/metodológica:**  
   `dias_despejados` / `dias_cubiertos`; agregados `zonas.json` (sobre todo Golfo); `sol_dias_equiv`/`solDias`; objeto `lluvia` mensuales de zona; % vs Mallorca; si la capa mapa debe seguir derivando `clase` por umbrales.

3. **Retirar o etiquetar:**  
   presentación de despejados/cubiertos (opciones A–D); evitar mostrar dos “verdades” (1939 en relato vs 2050 en Compara) sin etiqueta.

4. **Narrativa después:**  
   `relatos-*.ts`, bloques `tiempo` / Encaja que citan horas y despejados; `docs/estudio_zonas.md` solo si se actualiza la guía. **No** reescribir prosa en el mismo bloque que el sync numérico.

### 5.2 Orden de trabajo recomendado para CURSOR_11

1. Decidir política A–D para despejados/cubiertos y **una** autoridad por campo (v15 vs ficha-estación vs zona).  
2. Resolver el caso **A Coruña / Golfo** (triple: v15, ficha, zona, prosa) con decisión explícita, sin “promediar en silencio”.  
3. Alinear `tempAgua` y humedad Ponte de Lima si se elige autoridad.  
4. Regenerar o no `clima-municipios.json` **después** de la política (hoy ya = v15).  
5. Revisar `zonas.json` agregados.  
6. Solo entonces pasar lista de relatos a revisar (Golfo primero).

### 5.3 Archivos que CURSOR_11 tendría que tocar según opción

| Opción / tramo | Archivos previstos |
|---|---|
| Sync numérico municipal (sin despejados/cubiertos) | `scripts/sync_master_v15_to_web.py` (nueva oleada o flags), 16× `web/src/data/municipios-*.json`, posiblemente `web/src/data/clima-municipios.json` |
| Incluir despejados/cubiertos (solo si se rompe el veto) | mismos + confirmación en `docs/PROPAGACION_…` / esta auditoría |
| UI Compara / capas / mapa (A o B o C) | `web/src/lib/compara.ts`, `web/src/lib/capas-tabla.ts`, `web/src/lib/clima.ts`, `web/src/lib/capas-mapa-pueblo.ts`, textos en `MapaPortadaBloque.tsx` |
| Agregados zona | `web/src/data/zonas.json` (+ copia `web/public/data/zonas.json` si sigue duplicada) |
| tempAgua | 16 JSON ficha (campo `tempAgua`); no está en clima.json |
| Narrativa posterior | `web/src/lib/relatos-*.ts`, componentes `Relato*.tsx` que interpolan zona, bloques `tiempo` |
| CSV / XLSX | **no** salvo tarea explícita distinta; CURSOR_10/11 de presentación no reescriben maestra |
| Fuera de alcance habitual | `clima-municipios` no está en public; `mar-municipios` / `avion-municipios` no son clima |

---

## 6. Resumen ejecutivo

- La capa **`clima-municipios.json` = v15** en clima municipal (83/83).  
- Las **fichas** casi igual; excepciones reales: **A Coruña** (estación vs tabla), **Ponte de Lima** humedad, **6× tempAgua**.  
- **Despejados/cubiertos:** ubicuos en datos; visibles en Compara/mapa (despejados) y prosa (ambos); **NO AUTO PROPAGATION**.  
- Riesgo principal de falsa precisión: valores zonales repetidos como municipales + dualidad AEMET-en-relato vs redondeo-en-capa en el Golfo.  
- CURSOR_11 debe ser **política + alineación selectiva**, no un sync ciego de toda la columna clima.

---

*Documento único autorizado por CURSOR_10. No constituye autorización para propagar clima.*
