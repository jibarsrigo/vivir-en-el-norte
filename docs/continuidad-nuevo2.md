# Continuidad NUEVO2

Documento corto y vivo. Si más adelante hace falta ampliarlo, se amplía.
Fecha de acuerdo: 2026-09-30. **Muros de Nalón** queda cerrado como referencia reciente de ajustes (Casa en cuadro, Mar explicado, fotos sin duplicar).

## Autoridad si chocan fuentes

1. Lo que diga Jose en el chat.
2. Este documento.
3. Referencias de prosa: **Cudillero** (más mimo) → **Gijón** / **Candás** → resto NUEVO2 ya montado.
4. Paquetes Desktop / manifiesto antiguo / chat5: contexto e historial de errores; no mandan sobre (1)–(3).

## Objetivo editorial

Cada ficha debe permitir imaginar vivir allí con información verdadera:

**verdad + explicación + imaginación residencial.**

Los datos informan; el relato transporta. Sin “habla indio” (abstracciones de auditoría en el texto público). Sin cocina metodológica visible.

## Contrato de ficha de municipio (NUEVO2)

Orden tras título / comparar:

1. Cuadro **Zona** (`BloqueZonaFicha`) — igual que Muros y el resto NUEVO2: párrafo de comarca en el cuadro + 1–2 párrafos debajo con el encaje de **este** municipio + enlace Detalles a `/zona/{id}/`.
2. **Mapa** del municipio (`MapaMunicipioFicha`, capas portada).
3. Relato en desplegables:
   - Cómo se vive
   - Frente a Mallorca (Clima + Vivir)
   - De dónde viene
   - Mar, río y camino
   - Casa
   - ¿Encaja?
4. **Más pueblos de {zona}** + `TablaComparativaZona`.
5. Crédito de fotos.

### Encaja

Siempre:

- **Encaja si**
- **No encaja si**
- **Qué comprobar** ← lo que antes llamábamos Veredicto; no inventar un Veredicto aparte.

Volcar Encaja a `nuevo2-para-decidirte` al implementar.

### Mar, río y camino

No basta nombrar. Cada sitio debe situarse: qué es, qué lo diferencia, qué paseo o uso permite imaginar. Norma cerrada tras revisión de Muros; aplica a **todas** las fichas nuevas.

### Casa

Seguir el patrón de **Cudillero / Gijón / Candás** (y Oia/Muros para bandas + Idealista cuando existan): prosa de vivir la casa y la microzona; Idealista; precios A/B literales del mercado cuando haya dato fiable (sin inventar tabla). Bloques Advertencia / Qué conviene / Mercado: **dentro de Casa**, preferible en cuadro separado del enlace Idealista (como en Muros).

### Fotos

- Pie = contenido real. Sin stand-ins ni el mismo hash dos veces en la misma página (ni entre municipios de la zona salvo misma escena deliberada).
- Preferir omitir un slot a rellenar mal.
- Ideal: la foto aparece en el apartado que habla de esa escena.
- En el piloto: lo más práctico (V1/CURRENT/Wikimedia si encaja). **Pasada fuerte de fotos al final del proyecto** (cantidad, leyendas, colocación).

## Páginas de zona

Misma línea editorial que los municipios (preguntas reales, topónimos explicados, prosa que transporte).  
Se escriben **después** de cerrar los municipios de esa comarca.

## Flujo de calidad

Investigar → escribir → checklist interno (lector cero, suficiencia por apartado, factual, fotos) → **«lista para tu lectura»**.  
**«Certificada»** solo cuando Jose lo diga.  
No declarar cerrado por impresión. Misma profundidad en lote que en municipio suelto; si la calidad cae, parar y avisar.

Error puntual de dato → corregir el hecho, no reescribir toda la ficha.

## Pendiente (no implementar hasta orden)

- **Compara:** Encaja ya vía PARA; Clima/Vivir/fotoIdentidad pueden seguir leyendo CURRENT. Revisar más adelante.
- **Cutover:** cuando toque, NUEVO2 → CURRENT y la CURRENT de hoy → V2 (junto a V1 abajo a la derecha). Sin fecha ahora.

## Orden de trabajo restante

Piloto (calidad primero):

1. **Oleiros**
2. A Coruña
3. Miño  

Si el piloto pasa: zonas enteras, sin bajar profundidad.

| Zona | Municipios |
|---|---|
| Golfo Ártabro e Ferrol | A Coruña, Oleiros, Sada, Bergondo, Miño, Ares, Ferrol |
| A Mariña | O Vicedo, Viveiro, Xove, Cervo, Burela, Foz, Barreiros, Ribadeo |
| Asturias Occidente | Castropol, Tapia de Casariego, Navia, Luarca (Valdés) |
| Asturias Oriente | Villaviciosa, Colunga, Ribadesella, Llanes, Ribadedeva |
| Cantabria Occidental | San Vicente de la Barquera, Comillas, Suances, Liencres (Piélagos), Santander |
| Cantabria Oriental | Ribamontán al Mar, Noja, Santoña, Laredo, Castro-Urdiales |
| Alto Minho (PT) | Valença, Vila Nova de Cerveira, Caminha, Moledo, Vila Praia de Âncora, Afife-Carreço, Viana do Castelo, Ponte de Lima |
| Litoral Norte (PT) | Esposende, Póvoa de Varzim, Vila do Conde |

Solo trabajar en **NUEVO2** hasta orden expresa de cutover. No tocar V1 / V2 / CURRENT al implementar fichas.
