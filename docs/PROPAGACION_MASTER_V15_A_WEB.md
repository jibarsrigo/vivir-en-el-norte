# Propagación MASTER v15 → web

Documento de inventario (CURSOR_04). **No autoriza** cambios de producto.
Autoridad de datos auditados: `data/master/TABLA_MAESTRA_VIVIR_EN_EL_NORTE_2026_v15_CANDIDATA_FINAL_CORREGIDA.xlsx`.
HEAD de referencia al inventariar: `bda5c54` (rama `revision-2026-09-21`).

---

## 1. Inventario de fuentes reales

### 1.1 Estructuradas (datos)

| Fuente | Tipo | Lugares | ¿Runtime web? | Consumidores |
|---|---|---|---|---|
| `data/master/..._v15_...xlsx` hoja `MAESTRA_83` | **Autoridad auditada** (aún no cableada a la web) | 83 | No | Solo QA (`scripts/qa_master.py`) |
| `data/municipios.csv` (`;`, 54 cols) | Fuente histórica / mapa2 | 83 | **No** en Next directamente | `mapa2/*`, `scripts/generar_avion_municipios.mjs`, docs/README antiguos |
| `web/src/data/municipios-{zona}.json` (**16 ficheros**) | **Fuente de fichas en runtime** | 83 | **Sí** | `web/src/lib/municipios.ts` → Compara, Busca, `TablaPrecios`, `TablaComparativaZona`, páginas municipio/zona, capas |
| `web/src/data/municipios-puntos.json` | Derivado / mapa portada | 83 | Sí | `municipios-puntos.ts` → `MapaPortada` |
| `web/src/data/zonas.json` | Agregado de zona + Mallorca | 16 zonas | Sí | Relatos de zona, clima de zona, listados |
| `web/public/data/zonas.json` | **Copia idéntica** de `web/src/data/zonas.json` | 16 | Estático/público | Posible consumo estático; duplicación exacta |
| `web/src/data/clima-municipios.json` | Derivado / capa | ~83 | Sí (capas) | `capas-tabla` / clima |
| `web/src/data/mar-municipios.json` | Derivado | ~83 | Sí | capas mar |
| `web/src/data/avion-municipios.json` | Derivado (desde CSV históricamente) | ~83 | Sí | capas avión |

**No existe** un CSV “vivo” distinto del histórico de 54 columnas: el producto Next **no** lee `data/municipios.csv` en build de páginas de ficha; lee los 16 JSON.

### 1.2 Texto editorial

| Fuente | Tipo | Notas |
|---|---|---|
| `web/src/lib/relatos-*.ts` (15) | Editorial municipio | Falta `relatos-baixo-mino.ts`: Baixo Miño va embebido en `RelatoMunicipio.tsx` |
| `web/src/components/RelatoMunicipio.tsx` | Orquestador + textos BM | Une relatos; muestra `TablaPrecios` con ficha JSON |
| `web/src/components/Relato{Zona}.tsx` (16) | Editorial zona | Precios a menudo **reescritos en prosa** además de `TablaPrecios` |

### 1.3 UI / tipado

- `web/src/lib/municipios.ts` — tipo `FichaMunicipio` (campos camelCase del JSON).
- `web/src/components/TablaPrecios.tsx` — muestra `precioM2`, `A_2hab`… **precalculados** (no recalcula).
- Script QA master: `scripts/qa_master.py` (solo lee v15).
- Generadores existentes: `scripts/generar_avion_municipios.mjs`, `scripts/generar_mar_municipios.*`, `mapa2/validar.py` / `exportar.py` / `render.py` (CSV → mapas PDF, no → JSON web de fichas).

### 1.4 Duplicaciones principales

1. **Precio / A/B / servicios / hospital / aeropuerto / clima / mar**: coexisten en CSV histórico, en 16 JSON de ficha, a veces en capas (`clima`/`mar`/`avion`), y otra vez en **prosa** de relatos.
2. **`zonas.json`**: `web/src/data` ≡ `web/public/data` (byte-igual al inventariar).
3. **Coordenadas**: JSON ficha (`lat`/`lon`) + `municipios-puntos.json`.
4. **README raíz** aún presenta `data/municipios.csv` como “fuente de verdad”; tras v15 esa afirmación queda **desfasada** (gobernanza nueva: XLSX v15).

---

## 2. Mapa de campos v15 → producto

Leyenda: **Auto** = sincronizable con script; **Transf.** = mapeo/estructura; **Editorial** = no generar desde tabla; **No auto** = no propagar sin decisión; **Ausente** = no hay campo en producto.

### 2.1 Precio y A/B

| Campo v15 | CSV hist. | JSON ficha | UI | Notas |
|---|---|---|---|---|
| `precio_m2_2026` | `precio_m2_eur` (hist., no 2026) | `precioM2` | `TablaPrecios`, Compara, relatos | **Auto** a JSON. 4 n.d. → decidir `null`/omitir, no inventar |
| `precio_fecha_2026` | — | — | — | **Ausente**. Candidato a campo nuevo o pie de tabla |
| `precio_fuente_metodo` | — | — | — | **Ausente** / metadata |
| `microzona_precio` | — | — | — | Selectivo; **No auto** masivo |
| `fiabilidad_precio` | — | — | — | **Ausente** / metadata |
| `A2_2026`…`B3_2026` | `A_2hab_eur`… | `A_2hab`…`B_3hab` | `TablaPrecios` | **Auto** copiar valores v15 (o recalcular ×84.5/117/68.25/94.5). Web **no** recalcula hoy |
| (leyenda 65/90 m²) | — | — | footnote `TablaPrecios` | **Editorial UI**: explicar prima 1,30/1,05 (ver §4) |

### 2.2 Servicios

| Campo v15 | CSV | JSON | UI | Notas |
|---|---|---|---|---|
| `servicios_2026` | `servicios_1_10` | `servicios` | capas, Compara, globo | **Auto** numérico |
| `servicios_estado` | — | — | — | **Ausente**; no sustituye `serviciosNota` |
| (`servicios_nota` hist.) | sí | `serviciosNota` | globo/tabla | Histórico ≠ nota 2026; **Transf./Editorial** si se revisa texto |

### 2.3 Cotidiano / mar / paseo (capa 2026)

| Campo v15 | Equivalente producto | Propagación |
|---|---|---|
| `radio_cotidiano`, `radio_salida` | No hay campo; relatos `comoSeVive` / Encaja | **Editorial** (bloque futuro) |
| `playa_cotidiana`, `playa_cotidiana_modo` | Parcial: `playaBano` / `minBano` | **Transf.** cuidadosa; no pisar sin QA |
| `paseo_cotidiano`, `paseo_pendiente_topografia` | No | **Editorial** / campo nuevo opcional |

### 2.4 Sanidad / aeropuerto / transporte

| Campo v15 | Equivalente producto | Propagación |
|---|---|---|
| `sanidad_primaria_2026`, `urgencias_PAC_2026` | No | **Ausente** → campos nuevos o solo prosa |
| `hospital_practico_2026`, `hospital_referencia_2026` | Parcial: `hospitalPub`/`hospitalPriv`/`hospitalMin` | **Transf.**; no volcar texto libre a `hospitalPub` sin reglas |
| `aeropuerto_practico_2026`, `palma_directa_2026` | Parcial: `aeropuertos`, `aeropuertoMin`, `palmaMasCercano`, `palmaMejor` | **Transf.** |
| `transporte_relevante_2026` | Parcial: `comunicaciones` | **Transf./Editorial** |

### 2.5 Cualitativa / CASA

| Campo v15 | Producto | Propagación |
|---|---|---|
| `dependencia_coche_texto`, `autonomia_cotidiana` | Parcial numérico hist. `dependencia_coche_1_10` (CSV); no en ficha JSON tipada igual | **Editorial** / decisión de esquema |
| `estacionalidad_2026`, `peaje_realidad` | Relatos | **Editorial** |
| `advertencia_microzona` | — | Selectivo; **No auto** |
| `casa_que_buscar`, `mercado_reventa` | — | **Editorial** (bloque CASA) |

### 2.6 Clima (histórico en v15 + web)

Campos hist. `sol_horas_anio`, `dias_despejados`, `dias_cubiertos`, lluvia, temps → JSON `solHoras`, `despejados`, `cubiertos`, etc. y agregados en `zonas.json`.

**`dias_despejados` / `dias_cubiertos` (y `despejados`/`cubiertos` web): NO PROPAGAR AUTOMÁTICAMENTE** hasta decidir presentación final. La web los muestra hoy en Compara (`capas-tabla`, `compara.ts`) y en prosa de zona.

### 2.7 Conteos de mapeo (aprox. lista CURSOR_04)

| Categoría | Nº (sobre ~32 campos listados + clima) |
|---|---|
| Equivalente directo (precio, A/B, servicios num, varios hist. ya en JSON) | ~12 |
| Requieren transformación (sanidad/aero/playa/comunicaciones textos) | ~10 |
| Editoriales / no automáticos | ~12 |
| Sin equivalente actual (capa 2026 nueva) | ~15+ claves nuevas |

---

## 3. Contradicciones / diferencias (sin corregir)

Comparación: **v15 `MAESTRA_83`** vs **16 JSON de ficha** (match por `n`, 83/83). CSV histórico solo como contraste de duplicación.

| Ámbito | Conteo | Lectura |
|---|---|---|
| Precio `precio_m2_2026` ≠ `precioM2` | **72/83** | Incluye 4 n.d. v15 que en web aún tienen número (Vilaboa 1300, Xove 950, Muros de Nalón 1100, Afife-Carreço 2100) |
| Servicios `servicios_2026` ≠ `servicios` | **37/83** | |
| A/B (alguna de A2/A3/B2/B3) | **83/83** | Casi todos distintos o null en web; solo ~4 filas web cuadran con `precio×factor` Excel |
| `hospital_min` hist. ≠ `hospitalMin` | **3/83** | Vigo, Redondela, Valença |
| `hospital_pub` hist. ≠ `hospitalPub` texto | **39/83** | |
| Capa sanidad 2026 en producto | **83/83 ausente** | No existen claves JSON |
| `aeropuerto_min` hist. ≠ web | **0/83** | |
| `aeropuertos` texto hist. ≠ web | **8/83** | |
| `palma_mejor_opcion` ≠ `palmaMejor` | **0/83** | |
| Capa aero/Palma 2026 | **83/83 ausente** | |
| `comunicaciones` hist. ≠ web | **54/83** | |
| `servicios_nota` hist. ≠ `serviciosNota` | **74/83** | |
| CSV `precio_m2_eur` ≠ JSON `precioM2` | **11/83** | JSON ya diverió del CSV en parte |
| Nueva capa 2026 (radio, CASA, etc.) | **Ausente en producto** | ~25 campos no cableados |

### Ejemplos relevantes

1. **A Guarda**: v15 1117 €/m² / A2 94387 · web 1450 / A2 122500.
2. **Tomiño**: v15 1498 · web 1100 (sentido inverso al resto de Baixo Miño).
3. **Gondomar**: v15 1286 · web 1700.
4. **Nigrán**: v15 2909 · web 2600; servicios 8 vs 7.
5. **O Rosal**: v15 A2 100555 · web `A_2hab` null.
6. **Vilaboa / Xove / Muros de Nalón / Afife-Carreço**: v15 n.d. deliberado · web aún muestra precio y A/B.
7. **Vigo**: `hospital_min` hist. 5 vs web 10.
8. Relatos de zona (p. ej. Golfo / A Mariña) citan €/m² en prosa que pueden desalinear aún más tras sync JSON.

**Importante:** diferencia ≠ “error de producto”. Solo mide distancia a v15.

---

## 4. A/B y `TablaPrecios`

### Cómo funciona hoy

- Valores **almacenados** en cada ficha JSON (`A_2hab`, …).
- `TablaPrecios` solo formatea; **no** multiplica.
- `mapa2/esquema.py` documenta la fórmula antigua:
  - A: `precio × 65 × 1,30` = `precio × 84,5`
  - A3: `precio × 90 × 1,30` = `precio × 117`
  - B: `× 1,05` → 68,25 / 94,5
- v15 usa exactamente esos factores efectivos (`A2_2026` = ROUND(precio×84,5), etc.).

### Contradicción de leyenda: **sí**

Footnote actual (`TablaPrecios.tsx`): habla de 2 hab ≈ 65 m² y 3 hab ≈ 90 m² **sin** mencionar la prima 1,30 / 1,05 (tipología reciente / exterior). Eso sugiere A2 ≈ `precio×65`, pero los números guardados siguen `precio×84,5`.

### Corrección propuesta (NO aplicada)

Actualizar el pie a algo del estilo: bandas geográficas A (≤5 min costa) / B (5–30 min); tipología orientativa 65/90 m² **con factor de tipología reciente** (A ×1,30, B ×1,05), equivalentes a ×84,5 / ×117 / ×68,25 / ×94,5; no son anuncios reales.

---

## 5. Propuesta técnica para CURSOR_05

### Estrategia recomendada: **D = B + C**

1. **Crear un script pequeño de sincronización** (nuevo, p. ej. `scripts/sync_master_v15_a_json.py`) que:
   - lea solo v15 `MAESTRA_83`;
   - actualice los **16** `municipios-*.json` por `n`/`slug`;
   - escriba primero un diff/reporte dry-run;
   - propague en oleadas (precios+A/B → servicios → …), no 83×N a mano.
2. **Actualización controlada** de fuentes actuales (no big-bang de esquema):
   - Oleada 1: `precioM2`, A/B (null si n.d.), quizá fecha en metadata si se añade campo.
   - Oleada 2: `servicios` numérico.
   - Oleadas posteriores: hospital/aero/comunicaciones con reglas de transformación explícitas.
3. **Adaptar generadores** solo si hace falta realinear `avion`/`mar`/`clima` **después** de decidir clima (`despejados`/`cubiertos` = no auto).
4. **No** generar relatos desde la tabla. Narrativa = bloque editorial aparte.
5. **CSV**: o bien actualizarlo en fase mapa2, o dejarlo como histórico hasta decidir; no debe volver a ser “fuente de verdad” frente a v15.
6. Mantener **83 lugares / 16 zonas**.

### Archivos que CURSOR_05 **tendría** que tocar (oleada precios típica)

- `web/src/data/municipios-*.json` (16)
- posiblemente `web/src/components/TablaPrecios.tsx` (solo leyenda)
- posiblemente `web/src/lib/municipios.ts` (si se añaden campos opcionales)
- el script nuevo de sync + su dry-run en `docs/` o `output/`

### Archivos que **NO** debería tocar en la primera oleada

- `relatos-*.ts`, `Relato*.tsx` (salvo typos de precio **después** de sync y con bloque editorial)
- `zonas.json` (clima agregado) hasta política de clima
- CSS, rutas, mapas PNG
- el XLSX v15
- main / deploy

### Cómo evitar duplicaciones futuras

- Una autoridad: **v15** (luego vN).
- Un sink primario web: **16 JSON de ficha**.
- Capas `clima`/`mar`/`avion` regeneradas desde sink o desde master con script, nunca editadas a mano en paralelo.
- Relatos: referencias a cifras vía ficha o revisión editorial consciente; no segunda base de precios.
- Deprecar mentalmente CSV como verdad; usarlo solo para mapa2 hasta migrarlo.

---

## 6. Riesgos y checks

| Riesgo | Check |
|---|---|
| Pisar n.d. con números viejos | Los 4 n.d. deben quedar null / sin A/B |
| Relatos desactualizados tras sync JSON | Lista de prosa con €/m² a revisar en bloque editorial |
| `despejados`/`cubiertos` | Bloqueados para auto-propagación |
| Duplicar `zonas.json` src/public | Si se toca uno, sincronizar el otro o generar ambos |
| Baixo Miño sin `relatos-*.ts` | No olvidar textos embebidos en `RelatoMunicipio.tsx` |
| mapa2/PDF desfasado | Actualizar CSV solo cuando se decida fase mapas |
| Prima A/B mal explicada | Cambiar footnote en mismo PR que sync precios o justo después |

Checks mínimos post-sync (CURSOR_05): 83 filas; 16 zonas; QA v15 verde; diff solo en JSON (+ leyenda); precios 79+4; A/B coherentes; build web.

---

## 7. Checklist exacto potencial CURSOR_05 (precios)

1. Dry-run script v15 → 16 JSON.  
2. Aplicar `precioM2` + A/B.  
3. Nullificar 4 n.d.  
4. Ajustar footnote `TablaPrecios`.  
5. No tocar relatos aún.  
6. Commit en `revision-2026-09-21` únicamente.
