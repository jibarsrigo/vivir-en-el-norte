# Informe de validación · MAPA 2.0

- Filas: **41** · Columnas: **35**
- Errores de estructura: **0**
- Filas con errores: **0** / 41
- Avisos (no bloqueantes): **3**
- Resultado: **VÁLIDA**

## Fila a fila

| Nº | Municipio | Estado | Detalle |
|---:|---|---|---|
| 1 | A Guarda | OK | — |
| 2 | O Rosal | OK | — |
| 3 | Tui | OK | — |
| 4 | Redondela | OK | — |
| 5 | Pontevedra | OK | — |
| 6 | Vilagarcía de Arousa | OK | — |
| 7 | Cambados | OK | — |
| 8 | Vilanova de Arousa | OK | — |
| 9 | Foz | OK | — |
| 10 | Burela | OK | — |
| 11 | Cervo | OK | — |
| 12 | Xove | OK | aviso: aeropuerto a 95 min (> 90) |
| 13 | Viveiro | OK | aviso: aeropuerto a 105 min (> 90) |
| 14 | O Vicedo | OK | aviso: aeropuerto a 115 min (> 90) |
| 15 | Barreiros | OK | — |
| 16 | Ribadeo | OK | — |
| 17 | Cudillero | OK | — |
| 18 | Muros de Nalón | OK | — |
| 19 | Soto del Barco | OK | — |
| 20 | Luanco (Gozón) | OK | — |
| 21 | Candás (Carreño) | OK | — |
| 22 | Villaviciosa | OK | — |
| 23 | Llanes | OK | — |
| 24 | Santoña | OK | — |
| 25 | Laredo | OK | — |
| 26 | Suances | OK | — |
| 27 | Castro-Urdiales | OK | — |
| 28 | Baiona | OK | — |
| 29 | Nigrán | OK | — |
| 30 | Gondomar | OK | — |
| 31 | Tomiño | OK | — |
| 32 | Cangas | OK | — |
| 33 | Moaña | OK | — |
| 34 | Bueu | OK | — |
| 35 | Caminha | OK | — |
| 36 | Moledo (Caminha) | OK | — |
| 37 | Vila Praia de Âncora (Caminha) | OK | — |
| 38 | Viana do Castelo | OK | — |
| 39 | Tapia de Casariego | OK | — |
| 40 | Castropol | OK | — |
| 41 | Navia | OK | — |

## Cobertura por columna

| Columna | Bloque | Tipo | Rellenas | Vacías | Vacíos justificados |
|---|---|---|---:|---:|---|
| n | Identificación | OFICIAL | 41 | 0 | — |
| municipio | Identificación | OFICIAL | 41 | 0 | — |
| provincia | Identificación | OFICIAL | 41 | 0 | — |
| comarca | Identificación | OFICIAL | 41 | 0 | — |
| pais | Identificación | OFICIAL | 41 | 0 | — |
| lat | Técnica | OFICIAL | 41 | 0 | — |
| lon | Técnica | OFICIAL | 41 | 0 | — |
| min_playa | Técnica | DERIVADO | 41 | 0 | — |
| sol_horas_anio | Clima | OFICIAL | 41 | 0 | — |
| sol_dias_equiv | Clima | DERIVADO | 41 | 0 | — |
| lluvia_dias_anio | Clima | OFICIAL | 41 | 0 | — |
| lluvia_mm_anio | Clima | OFICIAL | 41 | 0 | — |
| temp_verano_c | Clima | OFICIAL | 41 | 0 | — |
| temp_invierno_c | Clima | OFICIAL | 41 | 0 | — |
| humedad_pct | Clima | OFICIAL | 41 | 0 | — |
| clase_clima | Clima | DERIVADO | 41 | 0 | — |
| servicios_1_10 | Servicios | CRITERIO | 41 | 0 | — |
| hospital_referencia | Servicios | OFICIAL | 41 | 0 | — |
| min_hospital | Servicios | DERIVADO | 41 | 0 | — |
| aeropuerto_principal | Servicios | OFICIAL | 41 | 0 | — |
| min_aeropuerto | Servicios | DERIVADO | 41 | 0 | — |
| comunicaciones | Servicios | TEXTO | 41 | 0 | — |
| precio_m2_eur | Mercado | MERCADO | 41 | 0 | — |
| viv_2hab_5min_eur | Mercado | DERIVADO | 34 | 7 | sí (columna opcional) |
| viv_2hab_20_30min_eur | Mercado | DERIVADO | 41 | 0 | — |
| viv_3hab_5min_eur | Mercado | DERIVADO | 34 | 7 | sí (columna opcional) |
| viv_3hab_20_30min_eur | Mercado | DERIVADO | 41 | 0 | — |
| prima_terraza_pct | Mercado | MERCADO | 41 | 0 | — |
| prima_vistas_mar_pct | Mercado | MERCADO | 39 | 2 | sí (columna opcional) |
| prima_terraza_vistas_pct | Mercado | MERCADO | 39 | 2 | sí (columna opcional) |
| facilidad_venta_1_10 | Inversión | CRITERIO | 41 | 0 | — |
| revalorizacion_1_10 | Inversión | CRITERIO | 41 | 0 | — |
| dependencia_coche_1_10 | Operativa | CRITERIO | 41 | 0 | — |
| debilidad_principal | Operativa | TEXTO | 41 | 0 | — |
| notas | Operativa | TEXTO | 17 | 24 | sí (columna opcional) |
