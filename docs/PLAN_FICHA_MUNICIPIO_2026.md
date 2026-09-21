# Plan de integración — ficha municipal 2026

**Fecha:** 2026-09-21  
**Rama:** `revision-2026-09-21` · HEAD al planificar: `f64b563`  
**Alcance:** inventario + prototipo técnico en documentación. **No** se modifica UI productiva, JSON, relatos, CSS ni datos.

Capa v15 ya sincronizada en fichas: precios/A-B, servicios/autonomía, logística 2026, mar/paseos/microzona, CASA/reventa, clima básico (sin auto-propagar despejados/cubiertos).

---

## 1. Inventario de la ficha actual

### 1.1 Ruta y composición

| Pieza | Archivo | Rol |
|---|---|---|
| Página | `web/src/app/zona/[id]/[municipio]/page.tsx` | Shell: migas, título, subtítulo, comparar, zona, mapa, relato |
| Cuadro zona | `BloqueZonaFicha.tsx` | Enlace + resumen corto de la zona |
| Mapa | `MapaMunicipioFicha.tsx` | PNG estático + pastilla de capas (= portada `iconosMapaPueblo(..., "todas")`) |
| Relato | `RelatoMunicipio.tsx` + `lib/relatos-*.ts` | Prosa editorial + `TablaPrecios` + Encaja + tabla vecinos |
| Precio | `TablaPrecios.tsx` | A/B + €/m² (una fila) |
| Encaja | `Encaja.tsx` | si / no / veredicto (solo relato) |
| Vecinos | `TablaComparativaZona.tsx` | Notas 1–10 Mar/Baño/Servicios/Hospital/Precio/Conexiones |

**No hay** hoy un bloque estructurado dedicado a servicios/sanidad/casa/reventa 2026 en la página de municipio. Esos campos existen en JSON/tipos y alimentan Compara/mapa/capas, no el cuerpo de la ficha.

### 1.2 Orden real (desktop = móvil: una columna `max-w-6xl`)

Responsive actual: **misma pila vertical** en ambos; tablas con `overflow-x-auto`. No hay layout de dos columnas en ficha.

1. Migas · **H1** municipio · subtítulo `{provincia} · {minCosta} min al mar` · enlace Comparar  
2. **BloqueZonaFicha** (resumen zona)  
3. **MapaMunicipioFicha** + pastilla (clima / mar / servicios / hospital / avión / precio) → globo unificado  
4. **RelatoMunicipio**  
   - escala + foto identidad  
   - Cómo se vive (+ fotos)  
   - Frente a Mallorca → Clima · Vivir (prosa)  
   - De dónde viene (+ fotos)  
   - Mar, río y camino (+ fotos)  
   - Casa (prosa) → **TablaPrecios** → Idealista  
   - Encaja si / No / veredicto  
   - Más pueblos de {zona} → **TablaComparativaZona**  
   - crédito fotos  

### 1.3 Fuentes por bloque

| Bloque visible | Fuente |
|---|---|
| Subtítulo “min al mar” | ficha `minCosta` (histórico) |
| Pastilla mapa | capas derivadas: `clima-municipios`, `mar-municipios`, `servicios`/`hospital`/`avion`/`precio` libs — **no** textos 2026 literales |
| Relato / Encaja / fotos | `RELATO_MUNICIPIOS` (editorial) |
| TablaPrecios | ficha `precioM2`, A/B (v15 sync) |
| TablaComparativaZona | ficha histórica (`minCosta`, `minBano`, `servicios`, `hospitalMin`, `comunicacionesNota10`, precio) |
| Campos 2026 (`radioCotidiano`, `hospitalPractico2026`, `casaQueBuscar`…) | **en JSON, no renderizados en ficha** |

Patrón colapsable existente (reutilizable, no en ficha hoy): acordeones «Para decidirte» en `ComparaCliente.tsx` (`aria-expanded`).

---

## 2. Matriz de campos A / B / C / D

Leyenda:

- **A** — primer vistazo (respuesta rápida, móvil)  
- **B** — bloque expandido / sección secundaria  
- **C** — estructurado en JSON; no mostrar en ficha todavía  
- **D** — apoyo editorial al relato; no UI literal de la celda  

### 2.1 Capa 2026 sincronizada

| Campo | Clase | Bloque propuesto | Notas |
|---|---|---|---|
| `servicios` (nota 1–10) | **A** | Primer vistazo | Ya coherente con mapa/Compara; badge compacto |
| `serviciosEstado` | **B** o **C** | Día a día (pie) | Corto (“VALIDADO — …”); no compite con `serviciosNota` histórico en A |
| `autonomiaCotidiana` | **A** | Primer vistazo | Etiqueta corta (p. ej. FUERTE) |
| `dependenciaCocheTexto` | **A** | Primer vistazo | 1–2 líneas; responde “¿coche?” |
| `playaCotidiana` | **A** | Primer vistazo | Etiqueta (SÍ/PARCIAL/…) |
| `playaCotidianaModo` | **B** | Día a día (o mar, si no está arriba) | Explica la etiqueta |
| `hospitalPractico2026` | **A** | Primer vistazo + Sanidad | Frase corta; no sustituye relato Encaja |
| `radioCotidiano` | **B** | Vivir el día a día | Lista/prosa corta “a pie” |
| `radioSalida` | **B** | Vivir el día a día | Qué exige coche/salida |
| `paseoCotidiano` | **B** | Vivir el día a día | |
| `paseoPendienteTopografia` | **B** | Día a día | **null** → omitir slot |
| `estacionalidad2026` | **B** | Día a día | Verano/invierno |
| `peajeRealidad` | **B** | Día a día (cierre) | Limitaciones reales |
| `sanidadPrimaria2026` | **B** | Sanidad | |
| `urgenciasPAC2026` | **B** | Sanidad | Textos largos OK en B |
| `hospitalReferencia2026` | **B** | Sanidad | Tras práctico |
| `transporteRelevante2026` | **B** | Conexiones | Preferir a `comunicaciones` histórico en UI ficha |
| `aeropuertoPractico2026` | **B** | Conexiones | |
| `palmaDirecta2026` | **B** | Conexiones | Con cautela estacional ya en texto |
| `precioM2` + A/B | **A** (chip) + **B** (tabla) | Primer vistazo €/m²; Casa = TablaPrecios | Mantener tabla en Casa |
| `microzonaPrecio` | **B** | Casa | **null** → omitir |
| `advertenciaMicrozona` | **B** | Casa | **null** → omitir; no alarmismo vacío |
| `casaQueBuscar` | **B** | Casa | Literal; sin scores |
| `mercadoReventa` | **B** | Casa | Literal; sin predicción |
| Campos clima numéricos ficha | **C** / mapa | No amplificar en ficha | Ver §6 |
| `despejados` / `cubiertos` | **C** | — | NO AUTO; no nuevos chips en ficha |
| `tempAgua` | **C** o mapa/mar | — | Ya en capas mar si aplica; no duplicar |

### 2.2 Históricos que siguen visibles hoy

| Campo | Hoy | Propuesta ficha 2026 |
|---|---|---|
| `minCosta` en subtítulo | Visible | Mantener métrica complementaria **o** sustituir subtítulo por chip mar 2026 (`playaCotidiana`); no ambos gritando |
| `minCosta` / `minBano` / `playaBano` | Mapa + tabla vecinos | Conservar para **mapa/capas/tabla zona**; en ficha preferir textos 2026 de playa/paseo |
| `serviciosNota` | Mapa globo servicios | Conservar en mapa; en ficha A usar nota + autonomía 2026, no repetir Tiene/Falta si `radioCotidiano` ya lo cubre |
| `hospitalMin` / `hospitalPub` / `hospitalPriv` | Mapa + tabla | Mapa/tabla: conservar. Ficha: **priorizar** textos 2026; minutos como complemento opcional en Sanidad |
| `aeropuertoMin` / `aeropuertos` / Palma hist. | Mapa avión | Mapa: conservar. Ficha: textos 2026 |
| `comunicaciones` / `comunicacionesNota10` | Tabla vecinos | Tabla: conservar nota. Ficha: `transporteRelevante2026` |
| Clima en relato `tiempo` | Prosa | **D** — no cablear cifras JSON al relato; no mostrar panel “sol exacto” nuevo |

---

## 3. Jerarquía propuesta (ajustar el punto de partida)

Objetivo: responder las 10 preguntas de experiencia **antes** del relato largo, sin convertir la ficha en CRM ni en recomendación personalizada.

### 3.1 Orden de página propuesto

```
[Migas · H1 · Comparar]
[BloqueZonaFicha]          ← sin cambio de rol
[MapaMunicipioFicha]       ← sin cambio de capas

═══ NUEVO: Capa factual 2026 ═══
[1. Primer vistazo]        ← A (chips/líneas cortas)
[2. Vivir el día a día]    ← B (texto; colapsable en móvil)
[3. Sanidad]               ← B
[4. Conexiones]            ← B
[5. Casa — factual]        ← B: microzona + casaQueBuscar + mercadoReventa
                           + TablaPrecios (existente) + Idealista
[6. Clima/mar]             ← mínimo o omitido si 1+2 ya cubren mar;
                           no despejados/cubiertos nuevos

═══ RELATO (editorial, intacto en CURSOR_13 salvo anclar Casas) ═══
[escala · foto · Cómo se vive · Frente a Mallorca · Historia ·
 Mar río camino · Casa prosa · Encaja · Más pueblos · crédito]
```

**Ajuste respecto al boceto del prompt:**

- **Casa factual** (microzona + CASA/reventa + tabla) **antes** del relato “Casa”, para no mezclar números con prosa; la prosa de `r.casa` sigue debajo como editorial.  
- **Clima/mar (6):** no crear panel de precisión; el mar cotidiano ya está en (1)/(2). El mapa sigue mostrando icono clima.  
- **Relato:** no duplicar tarjetas; Encaja permanece editorial.

### 3.2 Wireframe textual — desktop

```
┌─────────────────────────────────────────────────────────────┐
│ Inicio · Zona                                    Comparar…  │
│ MUNICIPIO                                                   │
│ Provincia · [chip mar 2026 o min costa]                     │
│ ┌ Zona …………………… Detalles ┐                                │
│ └ resumen …………………┘                                        │
│ ┌──────── Mapa PNG + pastilla capas ────────┐               │
│ └───────────────────────────────────────────┘               │
│                                                             │
│ PRIMER VISTAZO                                              │
│ ┌ €/m² ┐ ┌ Serv. n ┐ ┌ Autonomía ┐ ┌ Playa cot. ┐         │
│ ┌ Hospital práctico (1 línea) ┐                             │
│ ┌ Dependencia coche (1–2 líneas) ┐                          │
│                                                             │
│ ┌─────────────┐  ┌──────────────────────────────┐           │
│ │ Día a día   │  │ Sanidad                      │           │
│ │ (B textos)  │  │ primaria · PAC · hosp. · ref.│           │
│ └─────────────┘  └──────────────────────────────┘           │
│ ┌ Conexiones (transporte · aero · Palma) ───────┐           │
│ └───────────────────────────────────────────────┘           │
│ CASA (factual)                                              │
│ microzona* · advertencia* · qué casa · reventa              │
│ [TablaPrecios] [Idealista]                                  │
│                                                             │
│ ── Relato (max-w-2xl prosa) ──                              │
│ … sin cambios de contenido en este plan …                   │
└─────────────────────────────────────────────────────────────┘
* omitir si null
```

Dos columnas solo para **Día a día | Sanidad** en viewport ancho; Conexiones y Casa a ancho completo. Relato sigue `max-w-2xl`.

### 3.3 Wireframe textual — móvil

```
H1 · chips Comparar
Zona (compacto)
Mapa (full width)
────────────────
PRIMER VISTAZO (stack vertical, sin grid denso)
  precio · servicios · autonomía · playa · hosp. · coche
────────────────
<details> Vivir el día a día </details>
<details> Sanidad </details>
<details> Conexiones </details>
Casa factual (siempre visible: CASA + tabla; scroll-x solo en TablaPrecios)
────────────────
Relato (igual que hoy)
Tabla vecinos (scroll-x existente)
```

- Sin tabla gigante de “todo v15”.  
- Horizontal scroll **solo** TablaPrecios / TablaComparativaZona.  
- Secciones B con `<details>`/`summary` o el mismo patrón `aria-expanded` de Compara.

---

## 4. Conflictos histórico ↔ 2026 (sin borrar datos)

| Conflicto | Propuesta |
|---|---|
| `hospitalMin` / `hospitalPub` vs `hospitalPractico2026` / PAC / primaria | **Sustituir en UI ficha** por bloque Sanidad 2026; **conservar** minutos en mapa + tabla zona |
| `aeropuertoMin` / capa avión vs `aeropuertoPractico2026` / `palmaDirecta2026` | Ficha: textos 2026; mapa: capa avión histórica |
| `comunicaciones` vs `transporteRelevante2026` | Ficha: 2026; tabla vecinos: nota `comunicacionesNota10` hasta CAPAS |
| `minCosta`/`minBano`/`playaBano` vs `playaCotidiana*` / `paseoCotidiano` | Ficha: 2026 para “cómo se vive el mar”; métricas min en mapa/tabla |
| `servicios` + `serviciosNota` vs `radioCotidiano` / autonomía | Nota 1–10 en A; radios en B; Tiene/Falta **no** repetir en ficha si radio ya detalla |
| Relato (sanidad, mar, casa, clima) vs tarjetas | Relato = **D**; tarjetas = factual. No sincronizar prosa automáticamente |
| Subtítulo `minCosta` vs chip playa 2026 | Elegir uno en cabecera (preferible chip 2026 + minutos solo en mapa) |

---

## 5. Clima — pendiente explícito

No amplificar en la nueva ficha:

- Dualidad A Coruña/Golfo (ficha/capa 2050 vs relato/zona ~1939).  
- `despejados` / `cubiertos` (NO AUTO PROPAGATION).  
- Agregados `zonas.json`.  
- Cifras embebidas en `tiempo` / relatos.

**En CURSOR_13:** no panel climatico nuevo con más dígitos; el icono del mapa basta. «Frente a Mallorca → Clima» sigue siendo prosa editorial.

---

## 6. Plan CURSOR_13 (implementación)

### 6.1 Enfoque: **dos subfases** (una PR o dos commits encadenados)

**13a — Caparazón factual (riesgo bajo)**  
- Insertar entre mapa y relato: Primer vistazo + Día a día + Sanidad + Conexiones.  
- Campos A/B universales; omitir nulls selectivos.  
- No tocar relatos ni `TablaPrecios` ubicación aún (tabla puede quedarse donde está hasta 13b).

**13b — Casa factual + anclaje**  
- Bloque Casa factual (microzona*, advertencia*, `casaQueBuscar`, `mercadoReventa`) **junto a** `TablaPrecios` + Idealista.  
- Opción limpia: mover TablaPrecios+Idealista al bloque factual y dejar `r.casa` solo como prosa debajo (mismo orden visual “Casa”).  
- Ajuste subtítulo cabecera (minCosta vs chip mar) si 13a ya estabilizó chips.

No gran refactor de RelatoMunicipio: el relato sigue recibiendo `ficha` igual; el nuevo bloque es un hermano en `page.tsx` o un wrapper `FichaMunicipio2026` importado por la página.

### 6.2 Componentes

| Acción | Pieza |
|---|---|
| **Nuevo** | `FichaCapa2026.tsx` (o `MunicipioHechos2026.tsx`) — orquesta secciones 1–5 |
| **Nuevo** | `HechosVistazo.tsx` — chips A |
| **Nuevo** | `HechosSeccion.tsx` — título + párrafos/lista; soporta omitir vacío |
| **Adaptar** | `page.tsx` — montar capa entre mapa y `RelatoMunicipio` |
| **Adaptar (13b)** | `RelatoMunicipio.tsx` — solo si se mueve TablaPrecios/Idealista fuera (evitar doble tabla) |
| **Reutilizar** | `TablaPrecios`, `EnlaceIdealista`, patrón colapso de Compara |
| **No tocar** | `lib/relatos-*.ts`, textos `tiempo`/`vivir`/`casa`, `zonas.json`, `clima-municipios.json`, CSS global salvo clases utilitarias existentes |

### 6.3 Tipos / helpers

- Tipos ya en `municipios.ts` — sin refactor general.  
- Helper opcional `textoONull(v)` / `seccionSiHay(...campos)` en `lib/ficha-2026.ts`.  
- **Comportamiento null:** `paseoPendienteTopografia`, `advertenciaMicrozona`, `microzonaPrecio` → no renderizar fila ni título vacío.  
- Textos largos (PAC, hospital referencia, aero): párrafos `text-[15–17px] leading-relaxed`, no chips.

### 6.4 Qué deja de mostrarse en ficha (datos conservados)

- No mostrar en cuerpo factual: `serviciosNota` duplicado, `comunicaciones` histórico, panel de despejados/cubiertos, segunda lista de minutos hospital/avión si el texto 2026 ya los cubre.  
- Siguen en JSON y en mapa/Compara/tabla zona.

### 6.5 Pruebas

- `qa_master` + `sync --check` (regresión datos).  
- Build Next + smoke visual 1–2 municipios (uno con microzona null, uno con advertencia).  
- Accesibilidad: colapsables con teclado/`aria-expanded`.  
- No tests E2E obligatorios salvo que ya existan.

### 6.6 Qué NO tocar en CURSOR_13

- Relatos y Encaja (contenido).  
- Resolución editorial clima A Coruña.  
- CAPAS (fusión a 4 chips).  
- Radar inmobiliario.  
- main / deploy.

### 6.7 Archivos previstos (lista exacta)

```
web/src/app/zona/[id]/[municipio]/page.tsx
web/src/components/FichaCapa2026.tsx          (nuevo; nombre final libre)
web/src/components/HechosVistazo.tsx          (nuevo; o interno al anterior)
web/src/components/HechosSeccion.tsx          (nuevo; opcional)
web/src/lib/ficha-2026.ts                    (nuevo; helpers null/omit)
web/src/components/RelatoMunicipio.tsx        (solo si 13b mueve TablaPrecios)
```

Tipos: solo si hace falta exportar un tipo de vista — preferible no tocar `municipios.ts`.

---

## 7. Criterios de aceptación (para CURSOR_13)

- En móvil, las 10 preguntas del brief tienen respuesta factual **sin** llegar al final del relato.  
- Ningún score/ranking/predicción derivado de CASA/reventa.  
- Nulls selectivos no generan huecos rotos.  
- Relato bit a bit igual (salvo posible relocación de TablaPrecios).  
- No nuevos dígitos climáticos conflictivos en UI.

---

*Documento único autorizado por CURSOR_12. No autoriza implementación hasta CURSOR_13.*
