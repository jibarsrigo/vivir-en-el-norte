/** Texto corto compartido en fichas de municipio (misma zona = mismo bloque). */
export const RESUMEN_ZONA: Record<string, string> = {
  "baixo-mino":
    "La esquina suroeste de Galicia: el último tramo del Miño antes del Atlántico, con Portugal en la otra orilla. A Guarda y Oia miran al mar; tierra adentro, O Rosal, Tomiño y Tui. Frontera viva desde el siglo XII: hoy se cruza en minutos y multiplica lo que hay a mano.",
  "val-minor":
    "El valle del río Miñor, entre la Serra do Galiñeiro y la bahía de Baiona, con las Illas Cíes al oeste y Vigo a un cuarto de hora. Baiona es villa amurallada; Nigrán, playa y urbanizaciones; Gondomar, valle interior con monte detrás.",
  "vigo-e-ria":
    "La ciudad más grande de Galicia y el fondo de su ría: playas de Samil y Canido, Redondela frente a San Simón, Soutomaior y Vilaboa en la ensenada tranquila. Hospital y aeropuerto a minutos; el mar de la ría, no del océano abierto.",
  "o-morrazo":
    "La península entre las rías de Vigo y Pontevedra. Cangas reúne villa, Aldán y la Costa da Vela; Moaña mira a Vigo y llega en barco; Bueu vive frente a Ons; Marín combina puerto, playas y Pontevedra a diez minutos.",
  "pontevedra-e-sanxenxo":
    "Del casco peatonal de Pontevedra al Atlántico por la orilla norte de su ría. Poio reúne Combarro y parroquias de costa; Sanxenxo, playas y verano intenso; O Grove, puerto, marisqueo y la isla termal de A Toxa.",
  "o-salnes":
    "El valle del Albariño se abre a la ría de Arousa entre viñedos, pazos y bateas. Cambados es la villa histórica; A Illa y Vilanova ponen el baño de ría; Vilagarcía reúne hospital y tren; Meaño conserva las parroquias de piedra.",
  "barbanza-e-noia":
    "La orilla norte de Arousa y la ría de Muros e Noia, con la Serra do Barbanza detrás. Ribeira concentra puerto y hospital; Boiro y A Pobra miran a la ría; Porto do Son abre el Atlántico; Noia aporta el casco gótico y Santiago a cuarenta minutos.",
  "golfo-artabro-e-ferrol":
    "El arco de rías alrededor de A Coruña: Oleiros y la ría do Burgo, Sada y Bergondo hacia Betanzos, Miño con la Praia Grande, Ares y Redes, Ferrol al norte. Ciudad, hospital y Alvedro cerca; el cielo más gris de Galicia frente a las Rías Baixas.",
  "a-marina":
    "La costa de Lugo entre O Vicedo y Ribadeo: Viveiro y su ría, Burela pesquera, Foz, Barreiros y As Catedrais, Ribadeo frente a Asturias. Atlántico abierto, más fresco y gris que las Rías; hospital comarcal y aeropuertos a una hora larga.",
  "asturias-occidente":
    "La Costa Verde occidental entre la ría del Eo y Cabo Busto: Castropol frente a Ribadeo, Tapia de surf, Navia con servicios y Jarrio cerca, Luarca la villa blanca. Asturias verde y marinera; aeropuerto a 40–75 minutos; menos sol que Galicia sur.",
  "asturias-centro":
    "La costa metropolitana asturiana: Cudillero, el estuario del Nalón, Salinas junto a Avilés y al aeropuerto, Luanco y Candás hacia Peñas, Gijón al este. Mejor logística del Cantábrico occidental; cielo gris e industria cercana en algunos tramos.",
  "asturias-oriente":
    "La costa donde la montaña cae al mar: Villaviciosa y la sidra, Lastres y el Sueve, Ribadesella y el Sella, Llanes con sus playas, Ribadedeva hacia Cantabria. Picos a media hora; el clima más opuesto a Mallorca de la tabla.",
  "cantabria-occidental":
    "De la ría de San Vicente a la bahía de Santander: Comillas, Suances, Liencres y las dunas, capital con Valdecilla y vuelo a Palma casi todo el año. Mejor hospital, aeropuerto y seguridad de la tabla; el sol más bajo.",
  "cantabria-oriental":
    "Trasmiera hasta Bizkaia: Ribamontán (casas bajas y surf), Noja de veraneo, Santoña y el Buciero, Laredo con hospital, Castro hacia Bilbao. Sol mínimo de la tabla; única zona con Palma todo el año a menos de 40 minutos (desde Castro).",
  "alto-minho":
    "Norte de Portugal entre el Miño y Viana: Valença frente a Tui, Caminha, Moledo, Âncora, Afife-Carreço y Ponte de Lima. Mejor cielo de la tabla junto al Litoral Norte; agua atlántica fría; sanidad privada recomendable.",
  "litoral-norte":
    "Costa llana al norte de Porto: Esposende (Ofir, Apúlia), Póvoa de Varzim y Vila do Conde. Máximo sol de la tabla y aeropuerto Sá Carneiro a 15–35 minutos; mar frío, nortada y poca montaña.",
};

export function resumenZona(zonaId: string): string | undefined {
  return RESUMEN_ZONA[zonaId];
}
