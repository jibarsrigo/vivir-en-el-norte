# Guion de checks — prosa NUEVO2 (obligatorio)

**Cuándo:** antes de dar por escrita cualquier ficha nueva o retocada en NUEVO2.  
**Quién:** el agente. Jose no debería tener que repetir lo mismo.  
**Referencia de ritmo:** `web/src/app/nuevo2/cudillero/page.tsx` (Cómo se vive + Vivir + Encaja).  
**Detalle largo:** `docs/continuidad-nuevo2.md` → método Cudillero.

Si un check falla → **rehacer el apartado**, no parchear una frase.

---

## 0. Antes de escribir

- [ ] Releí Cómo se vive + Vivir + Encaja de **Cudillero** (no de memoria).
- [ ] El eje **A vs B** cabe en **una frase** y está en el comentario de cabecera de `page.tsx`.
- [ ] Sé a quién hablo: pareja que viene de Mallorca a vivir todo el año (bien de salud); **nunca** la palabra jubilado/a; **nunca** 260.000 € / presupuesto máximo.

---

## 1. Estructura (contrato)

- [ ] Orden: Zona → Mapa (`MapaMunicipioFicha` + capas) → relato en desplegables → Más pueblos → crédito fotos.
- [ ] **Cómo se vive:** ~5 párrafos (esqueleto Cudillero).
- [ ] **Frente a Mallorca:** Clima (~2) + Vivir (~3). Vivir no es checklist médico/vuelos/casa.
- [ ] **De dónde / Mar:** ~4 párrafos cada uno; densos.
- [ ] **Casa:** eje A vs B + precios + Idealista + advertencia / qué revisar / reventa.
- [ ] **Encaja:** si / no / qué comprobar (mismo eje); volcado a `nuevo2-para-decidirte.ts`.
- [ ] Slug en `nuevo2-municipios.ts`.

---

## 2. Densidad hist / mar (medible)

- [ ] Bloque **De dónde** ≥ ~1.700 caracteres (meta Cudillero ~2.500).
- [ ] Bloque **Mar** ≥ ~1.700 caracteres.
- [ ] No hay ≥2 párrafos del bloque con &lt; ~280 caracteres de relleno genérico.
- [ ] Hechos locales: fechas, oficios, edificios, camino, desnivel, aparcamiento, calendario — no inventario corto.

Script útil: `output/_v1_tmp/measure_hist_mar_recent.py` (adaptar slugs) o contar a mano.

---

## 3. Claridad (lector ajeno)

- [ ] Un ajeno entiende el párrafo 1 sin mapa ni Wikipedia.
- [ ] Cada topónimo importante: qué es, dónde queda, cómo se vive (primera vez en el apartado).
- [ ] Términos técnicos glosados donde aparecen: estuario, Ecopista, intramuros, adarve, ría…
- [ ] Si uso rayas `X —…—`, lo de dentro **define X**, no otra cosa.
- [ ] Sin fórmulas telegráficas tipo «No es cala recogida ni bahía de ría» / «es aldea entre monte y mar» / «es villa de…»: escribir castellano completo con artículos («No es como estar en una cala…»; «es una aldea entre el monte y el mar»).
- [ ] Sin usar «toalla» como sinónimo opaco de «playa» («toalla delante», «toalla a pie»). Decir playa / bañarse / bajar a la arena.
- [ ] Sin «habla indio» / telegráfico: «hay arenal largo», «hay plaza, torre…», «delante queda Atlántico» (falta el artículo), «caminar playa y caminos», «hay aldeas; falta comercio…», «ocupación, kite, aparcamiento más difícil». Frase completa: sujeto + verbo + artículos + qué pasa (p. ej. «encontrar aparcamiento se vuelve más difícil»; «se puede caminar por la playa y por los caminos»).
- [ ] Sin enumerar topónimos o oficios en lista seca («Paçô marca…; Areosa queda…») sin decir qué implica vivirlos.
- [ ] Al decir a dónde se va en coche: **separar** qué se hace en cada sitio (p. ej. Viana = súper y hospital; Âncora = villa costera con más comercio), no «Viana o Âncora» como saco único.

---

## 4. Anti-muletillas de lote (prohibido clonar)

Buscar en el archivo y **variar** si aparecen:

- [ ] No: `Algunas salidas merecen el trayecto porque el camino pesa…` (ni «…porque el camino pesa» / «…cambian de registro» como plantilla).
- [ ] No: `Comprar casa en X es decidir primero…` / `la relación con…` en todas las fichas.
- [ ] No: misma apertura de Clima en todo el lote («En X el contraste con Mallorca no es de matiz» / siempre la misma fórmula).
- [ ] No: `se resuelve (casi) toda / buena parte / mucha semana` (ni clones «resolver la semana andando» en todas las fichas). Variar: compra y gestiones caben a pie / el día a día cabe cerca / farmacia y mercado quedan andando. Como mucho una vez por ficha, y no la misma fórmula en el lote.
- [ ] **Cómo se vive:** pocas rayas `—…—`. Preferir frase nueva o dos puntos (como Cudillero). No `En el casco —A, B, C— la semana…`.
- [ ] Minutos en el hilo: `a unos treinta minutos`, no `—unos treinta minutos—`.

---

## 5. Eje y Encaja

- [ ] Cómo / Vivir / Casa / Encaja / Qué comprobar hablan del **mismo** A vs B.
- [ ] Encaja explica en llano (qué se gana, qué falta, a dónde se va); no taquigrafía «aceptando X a cambio de Y a cambio de Z».
- [ ] **No encaja si** dice qué servicios faltan y por qué importan (no solo la nota 1–10).

---

## 6. Fotos

- [ ] Hasta 6; plantilla 2+2+2 si hay material; **omitir** slot si falta foto real distinta.
- [ ] Sin duplicados (archivo o hash) en la misma página ni stand-ins renombrados.
- [ ] Pie = contenido real de la imagen.
- [ ] Al colocar / enriquecer: foto **justo antes o después** del topónimo nombrado en el texto (visión real).

---

## 7. Homogeneización (retomes)

Cuando Jose pida aplicar lo aprendido a fichas ya hechas:

1. Prioridad: fichas **método Cudillero** (comentario en cabecera `docs/continuidad-nuevo2.md — método Cudillero`), no los lotes `CERTIFICADOS` de ChatGPT salvo orden expresa.
2. Pasar este guion check a check; corregir fallos; volver a medir hist/mar.
3. No dar por cerrado el lote hasta que el guion pase en **cada** municipio tocado.

### Lotes Cursor / método Cudillero (prioridad homogenización)

| Zona | Slugs |
|---|---|
| Golfo piloto | oleiros, a-coruna, mino, sada, bergondo, ares, ferrol |
| A Mariña | o-vicedo, viveiro, xove, cervo, burela, foz, barreiros, ribadeo |
| Asturias Occidente | castropol, tapia-de-casariego, navia, luarca-valdes |
| Asturias Oriente | villaviciosa, colunga, ribadesella, llanes, ribadedeva |
| Cantabria Occidental | san-vicente-de-la-barquera, comillas, suances, liencres-pielagos, santander |
| Cantabria Oriental | ribamontan-al-mar, noja, santona, laredo, castro-urdiales |
| Alto Minho PT | valenca, vila-nova-de-cerveira, caminha, moledo-caminha, vila-praia-de-ancora, afife-carreco, viana-do-castelo, ponte-de-lima |
| Litoral Norte PT | esposende, povoa-de-varzim, vila-do-conde |

Referencias (no homogenizar “hacia abajo”): **cudillero**, gijon, candas-carreno.

Lotes `*_CERTIFICADOS_*` / revisión integral ChatGPT: solo si Jose lo pide.

---

## 8. Entrega

- [ ] Guion 0–6 pasado.
- [ ] PARA decidido sincronizado si cambió Encaja.
- [ ] Página responde 200 en localhost.
- [ ] Resumen a Jose: qué eje, qué se corrigió, qué queda pendiente — **sin** pedir que repita reglas ya en este guion.
