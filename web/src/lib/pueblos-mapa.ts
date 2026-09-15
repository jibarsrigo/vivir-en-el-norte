export type PuebloMapa = {
  nombre: string;
  zonaId: string;
  lat: number;
  lon: number;
  dir: "left" | "right" | "top" | "bottom";
};

/** Pueblos que sitúan al que ya conoce el norte, no todos los de la tabla. */
export const PUEBLOS_MAPA: PuebloMapa[] = [
  { nombre: "A Guarda", zonaId: "baixo-mino", lat: 41.902, lon: -8.874, dir: "left" },
  { nombre: "Tui", zonaId: "baixo-mino", lat: 42.047, lon: -8.644, dir: "right" },
  { nombre: "Baiona", zonaId: "val-minor", lat: 42.118, lon: -8.851, dir: "left" },
  { nombre: "Nigrán", zonaId: "val-minor", lat: 42.141, lon: -8.805, dir: "right" },
  { nombre: "Vigo", zonaId: "vigo-e-ria", lat: 42.231, lon: -8.712, dir: "right" },
  { nombre: "Cangas", zonaId: "o-morrazo", lat: 42.264, lon: -8.782, dir: "left" },
  { nombre: "Sanxenxo", zonaId: "pontevedra-e-sanxenxo", lat: 42.401, lon: -8.807, dir: "left" },
  { nombre: "Pontevedra", zonaId: "pontevedra-e-sanxenxo", lat: 42.431, lon: -8.644, dir: "right" },
  { nombre: "Cambados", zonaId: "o-salnes", lat: 42.512, lon: -8.814, dir: "left" },
  { nombre: "Vilagarcía", zonaId: "o-salnes", lat: 42.594, lon: -8.766, dir: "right" },
  { nombre: "Ribeira", zonaId: "barbanza-e-noia", lat: 42.559, lon: -8.991, dir: "left" },
  { nombre: "Noia", zonaId: "barbanza-e-noia", lat: 42.784, lon: -8.888, dir: "right" },
  { nombre: "A Coruña", zonaId: "golfo-artabro-e-ferrol", lat: 43.362, lon: -8.411, dir: "left" },
  { nombre: "Ferrol", zonaId: "golfo-artabro-e-ferrol", lat: 43.484, lon: -8.233, dir: "top" },
  { nombre: "Viveiro", zonaId: "a-marina", lat: 43.662, lon: -7.594, dir: "top" },
  { nombre: "Ribadeo", zonaId: "a-marina", lat: 43.537, lon: -7.041, dir: "left" },
  { nombre: "Luarca", zonaId: "asturias-occidente", lat: 43.545, lon: -6.536, dir: "top" },
  { nombre: "Cudillero", zonaId: "asturias-centro", lat: 43.563, lon: -6.146, dir: "left" },
  { nombre: "Gijón", zonaId: "asturias-centro", lat: 43.532, lon: -5.661, dir: "top" },
  { nombre: "Ribadesella", zonaId: "asturias-oriente", lat: 43.462, lon: -5.059, dir: "left" },
  { nombre: "Llanes", zonaId: "asturias-oriente", lat: 43.421, lon: -4.755, dir: "top" },
  { nombre: "San Vicente", zonaId: "cantabria-occidental", lat: 43.385, lon: -4.399, dir: "top" },
  { nombre: "Comillas", zonaId: "cantabria-occidental", lat: 43.386, lon: -4.291, dir: "right" },
  { nombre: "Santander", zonaId: "cantabria-occidental", lat: 43.462, lon: -3.81, dir: "top" },
  { nombre: "Laredo", zonaId: "cantabria-oriental", lat: 43.41, lon: -3.416, dir: "bottom" },
  { nombre: "Castro-Urdiales", zonaId: "cantabria-oriental", lat: 43.384, lon: -3.219, dir: "right" },
  { nombre: "Caminha", zonaId: "alto-minho", lat: 41.875, lon: -8.838, dir: "right" },
  { nombre: "Viana", zonaId: "alto-minho", lat: 41.694, lon: -8.831, dir: "left" },
  { nombre: "Póvoa", zonaId: "litoral-norte", lat: 41.383, lon: -8.763, dir: "left" },
];
