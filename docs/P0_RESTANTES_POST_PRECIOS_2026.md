# P0 restantes post-precios (CURSOR_17)

**Bloque:** CURSOR_17 · **rama:** `revision-2026-09-21` · **HEAD base:** `39d4c67`  
**Alcance:** solo auditoría/documentación. Producto intacto. Sin internet.

Tras CURSOR_15/16 (precios alineados / retirados), se reauditaron **83/83** relatos contra la capa factual v15 con definición **estricta** de P0: solo incompatibilidad factual directa. No se inflaron P0 por duplicación, vaguedad, «cerca», minutos hospitalarios aproximados ni frases compatibles con la capa.

---

## 1. Resumen

| Métrica | Valor |
|---|---:|
| Relatos auditados | 83/83 |
| Contradicciones de precio conocidas | **0** (confirmado) |
| Lugares con P0 factual restante (estricto) | **5** |
| Contradicciones individuales | **5** |
| P0 **corregibles** solo con v15 (sin decisión previa) | **0** |
| CLIMA_METODOLOGIA (deuda conocida / dual AEMET↔tabla) | **5** |
| Sanidad / Aeropuerto-Palma / Transporte / Servicios-autonomía / Mar-paseo (P0 estricto) | **0** |

**Lectura:** el barrido automático inicial marcó falsos positivos (playa en negación/redirección; «Palma casi todo el año» donde la propia capa de aeropuerto ya dice lo mismo). Tras revisión manual contra `palmaDirecta2026` / `aeropuertoPractico2026` / `playaCotidiana`, **no quedan P0 de sanidad, aire, transporte, coche ni mar**.

Lo que sí permanece es la **dualidad climática del Golfo Ártabro**: prosa AEMET 1981–2010 (Alvedro ≈ **1.939** h) frente a `solHoras` de ficha (**2.050** / **2.000**). No se decide aquí cuál cifra es «correcta».

---

## 2. Tabla 83/83 — P0 restante

| # | Municipio | Zona | P0 restante | Categoría |
|---:|---|---|---|---|
| 1 | A Guarda | Baixo Miño | no | — |
| 2 | Oia | Baixo Miño | no | — |
| 3 | O Rosal | Baixo Miño | no | — |
| 4 | Tomiño | Baixo Miño | no | — |
| 5 | Tui | Baixo Miño | no | — |
| 6 | Baiona | Val Miñor | no | — |
| 7 | Nigrán | Val Miñor | no | — |
| 8 | Gondomar | Val Miñor | no | — |
| 9 | Vigo | Vigo e ría | no | — |
| 10 | Redondela | Vigo e ría | no | — |
| 11 | Soutomaior | Vigo e ría | no | — |
| 12 | Vilaboa | Vigo e ría | no | — |
| 13 | Cangas | O Morrazo | no | — |
| 14 | Moaña | O Morrazo | no | — |
| 15 | Bueu | O Morrazo | no | — |
| 16 | Marín | O Morrazo | no | — |
| 17 | Pontevedra | Pontevedra e Sanxenxo | no | — |
| 18 | Poio | Pontevedra e Sanxenxo | no | — |
| 19 | Sanxenxo | Pontevedra e Sanxenxo | no | — |
| 20 | O Grove | Pontevedra e Sanxenxo | no | — |
| 21 | Meaño | O Salnés | no | — |
| 22 | Cambados | O Salnés | no | — |
| 23 | A Illa de Arousa | O Salnés | no | — |
| 24 | Vilanova de Arousa | O Salnés | no | — |
| 25 | Vilagarcía de Arousa | O Salnés | no | — |
| 26 | Rianxo | Barbanza e Noia | no | — |
| 27 | Boiro | Barbanza e Noia | no | — |
| 28 | A Pobra do Caramiñal | Barbanza e Noia | no | — |
| 29 | Ribeira | Barbanza e Noia | no | — |
| 30 | Porto do Son | Barbanza e Noia | no | — |
| 31 | Noia | Barbanza e Noia | no | — |
| 32 | A Coruña | Golfo Ártabro e Ferrol | **sí** | CLIMA_METODOLOGIA |
| 33 | Oleiros | Golfo Ártabro e Ferrol | **sí** | CLIMA_METODOLOGIA |
| 34 | Sada | Golfo Ártabro e Ferrol | **sí** | CLIMA_METODOLOGIA |
| 35 | Bergondo | Golfo Ártabro e Ferrol | **sí** | CLIMA_METODOLOGIA |
| 36 | Miño | Golfo Ártabro e Ferrol | **sí** | CLIMA_METODOLOGIA |
| 37 | Ares | Golfo Ártabro e Ferrol | no | — |
| 38 | Ferrol | Golfo Ártabro e Ferrol | no | — |
| 39 | O Vicedo | A Mariña | no | — |
| 40 | Viveiro | A Mariña | no | — |
| 41 | Xove | A Mariña | no | — |
| 42 | Cervo | A Mariña | no | — |
| 43 | Burela | A Mariña | no | — |
| 44 | Foz | A Mariña | no | — |
| 45 | Barreiros | A Mariña | no | — |
| 46 | Ribadeo | A Mariña | no | — |
| 47 | Castropol | Asturias Occidente | no | — |
| 48 | Tapia de Casariego | Asturias Occidente | no | — |
| 49 | Navia | Asturias Occidente | no | — |
| 50 | Luarca (Valdés) | Asturias Occidente | no | — |
| 51 | Cudillero | Asturias Centro | no | — |
| 52 | Muros de Nalón | Asturias Centro | no | — |
| 53 | Soto del Barco | Asturias Centro | no | — |
| 54 | Salinas (Castrillón) | Asturias Centro | no | — |
| 55 | Luanco (Gozón) | Asturias Centro | no | — |
| 56 | Candás (Carreño) | Asturias Centro | no | — |
| 57 | Gijón | Asturias Centro | no | — |
| 58 | Villaviciosa | Asturias Oriente | no | — |
| 59 | Colunga | Asturias Oriente | no | — |
| 60 | Ribadesella | Asturias Oriente | no | — |
| 61 | Llanes | Asturias Oriente | no | — |
| 62 | Ribadedeva | Asturias Oriente | no | — |
| 63 | San Vicente de la Barquera | Cantabria Occidental | no | — |
| 64 | Comillas | Cantabria Occidental | no | — |
| 65 | Suances | Cantabria Occidental | no | — |
| 66 | Liencres (Piélagos) | Cantabria Occidental | no | — |
| 67 | Santander | Cantabria Occidental | no | — |
| 68 | Ribamontán al Mar | Cantabria Oriental | no | — |
| 69 | Noja | Cantabria Oriental | no | — |
| 70 | Santoña | Cantabria Oriental | no | — |
| 71 | Laredo | Cantabria Oriental | no | — |
| 72 | Castro-Urdiales | Cantabria Oriental | no | — |
| 73 | Valença | Alto Minho (PT) | no | — |
| 74 | Vila Nova de Cerveira | Alto Minho (PT) | no | — |
| 75 | Caminha | Alto Minho (PT) | no | — |
| 76 | Moledo (Caminha) | Alto Minho (PT) | no | — |
| 77 | Vila Praia de Âncora (Caminha) | Alto Minho (PT) | no | — |
| 78 | Afife-Carreço (Viana) | Alto Minho (PT) | no | — |
| 79 | Viana do Castelo | Alto Minho (PT) | no | — |
| 80 | Ponte de Lima | Alto Minho (PT) | no | — |
| 81 | Esposende | Litoral Norte (PT) | no | — |
| 82 | Póvoa de Varzim | Litoral Norte (PT) | no | — |
| 83 | Vila do Conde | Litoral Norte (PT) | no | — |

Ares y Ferrol citan **1.950** h, alineado con `solHoras` de ficha → no P0.

---

## 3. Contradicciones individuales

| # | Lugar | Archivo | Categoría | Relato (afirmación) | Capa 2026 | Notas |
|---:|---|---|---|---|---|---|
| 1 | A Coruña | `relatos-golfo-artabro-e-ferrol.ts` | CLIMA_METODOLOGIA | AEMET 1981–2010 Alvedro ≈ **1.939** h de sol (y 49 despejados) | `solHoras=2050` (despejados ficha 49) | Deuda conocida; prosa explica dos estaciones |
| 2 | Oleiros | idem | CLIMA_METODOLOGIA | Misma referencia AEMET ≈ **1.939** h | `solHoras=2050` | Eco zonal explícito |
| 3 | Sada | idem | CLIMA_METODOLOGIA | Misma referencia AEMET ≈ **1.939** h | `solHoras=2000` | Eco zonal; no observatorio propio |
| 4 | Bergondo | idem | CLIMA_METODOLOGIA | Misma referencia AEMET ≈ **1.939** h | `solHoras=2000` | Eco zonal |
| 5 | Miño | idem | CLIMA_METODOLOGIA | Misma referencia AEMET ≈ **1.939** h | `solHoras=2000` | Eco zonal |

**Falsos positivos descartados (no P0):**

- O Rosal / Tui: «mar/playa a la puerta» en *Encaja* como redirección («mirar A Guarda») o contraste («importan más que…»), no afirmación de playa cotidiana local.
- Cantabria / Oriente asturiano: «Palma casi todo el año» vía Santander (o Bilbao «todo el año» en Castro) **coincide** con el texto de `aeropuertoPractico2026` («Palma: casi todo el año» / «todo el año»). La matiz de `palmaDirecta2026` («comprobar temporada») no basta para P0.
- Vigo e ría: Peinador «en verano» + Santiago «casi todo el año» alineado con capa.
- Asturias Centro: «Palma en verano» en Asturias alineado con capa.

---

## 4. Sanidad

**P0:** 0 lugares.

Se observan minutos hospitalarios y nombres públicos/privados en prosa (candidatos **P1** de precisión, no incompatibilidad de circuito práctico). No se detectó hospital práctico afirmado que niegue `hospitalPractico2026` / `hospitalReferencia2026`.

---

## 5. Aeropuerto / Palma

**P0:** 0 lugares (tras filtrar compatibles).

**P1 frecuente (no inventariado como P0):** conviene conservar el «comprobar programación» de capa donde el relato solo dice «casi todo el año» sin hedge — pulido editorial, no contradicción.

Atención especial revisada: Vigo–Palma (limitada/estacional en capa; relato no la presenta como anual en Peinador); Asturias (verano); Santander/Bilbao (casi todo / todo el año en capa); Porto (estacional/variable — relatos PT no marcados P0).

---

## 6. Transporte

**P0:** 0.

No se halló negación de ferry / Metro do Porto / Linha do Minho / rail frente a `transporteRelevante2026`, ni invención clara incompatible. La mera omisión no es P0.

---

## 7. Servicios / autonomía / coche

**P0:** 0.

No hay afirmación de «semana sin coche» incompatible con `dependenciaCocheTexto` alta / `autonomiaCotidiana` baja. «Todos los servicios» con nota baja → como máximo P3/P1, no P0 (regla del bloque).

---

## 8. Mar / paseo / topografía

**P0:** 0 (tras descartar falsos positivos O Rosal/Tui).

No se detectó «playa a la puerta» afirmativa contra `playaCotidiana` NO, ni negación de playa contra SÍ claro. Omitir topografía ≠ P0.

---

## 9. Clima / metodología

| Tipo | Lugares | Acción |
|---|---|---|
| P0 clima corregible automático con v15 | **0** | — |
| CLIMA_METODOLOGIA | A Coruña, Oleiros, Sada, Bergondo, Miño | Requiere **decisión previa** (¿ficha `solHoras` manda en prosa? ¿se mantiene AEMET Alvedro como referencia zonal glosada?) |
| Compatible | Ares, Ferrol (1.950 = ficha) | No tocar por clima |

No se decide en este bloque cuál cifra es correcta. No se usa internet.

---

## 10. Lotes recomendados

Orden ajustado a hallazgos reales (no hay P0 de sanidad/aire/mar):

| Orden | Lote | Contenido | ¿Solo v15? | Ext./decisión |
|---|---|---|---|---|
| — | *(vacío)* Sanidad | 0 P0 | — | — |
| — | *(vacío)* Aeropuerto+Palma+Transporte | 0 P0 | — | — |
| — | *(vacío)* Mar/paseo/autonomía | 0 P0 | — | — |
| **1** | **CLIMA_METODOLOGIA — Golfo** | 5 lugares / 5 contradicciones | No del todo: hace falta criterio editorial antes de editar | Decisión metodológica (no scraping) |
| 2 | P1 Palma hedge (opcional) | Cantabria/Oriente: añadir «comprobar» donde falte | Sí, capa local | No |
| 3 | P1 minutos hospital (opcional) | Precisión, no cambio de hospital | Sí | No |

**Riesgo del lote 1:** alto si se «arregla» 1939→2050 sin criterio: se pierde la explicación AEMET/Alvedro que la prosa ya glosa. Bajo si solo se añade puente explícito «tabla v15 = X; AEMET Alvedro = 1939».

---

## 11. Archivos del PRIMER lote

Solo si se aprueba el criterio metodológico:

| Lugar | Archivo |
|---|---|
| A Coruña | `web/src/lib/relatos-golfo-artabro-e-ferrol.ts` |
| Oleiros | idem |
| Sada | idem |
| Bergondo | idem |
| Miño | idem |

Nº cambios esperados: **5 bloques clima** (posiblemente más de una frase por lugar).  
Investigación externa necesaria: **no** (sí decisión interna AEMET↔`solHoras`).  
No incluir en lote automático sin esa decisión.

---

## 12. Nota EOL (CURSOR_16)

CURSOR_16 generó diffs grandes por renormalización de finales de línea al reescribir objetos completos de relato.

**Recomendación para futuros lotes:** editar solo el fragmento/string concreto (`StrReplace` local o parche por frase); no serializar de nuevo el objeto TS entero; verificar con `git diff -w` antes de commit. No se cambia EOL en este bloque.

---

## Anexo — Método

- Fuentes: fichas JSON v15 + relatos POST-`39d4c67` + `docs/AUDITORIA_EDITORIAL_RELATOS_2026.md` como punto de partida.
- Precios: excluidos; QA mismatch = 0.
- Artefacto local de trabajo (no commit): `output/_cursor17_p0_scan.json` / `scripts/_cursor17_p0_scan.py`.
