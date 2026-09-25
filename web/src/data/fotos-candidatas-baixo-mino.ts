import type { SlotFoto } from "@/lib/fotos-plantilla-municipio";

export type CandidataFoto = {
  slot: SlotFoto;
  src: string;
  pie: string;
  motivo: string;
  aviso?: string;
};

/**
 * Fotos NUEVAS para cubrir huecos → plantilla 13 (reparto Nuevo2).
 * Aún no están en el relato. Una por hueco; sin repetir las ya publicadas.
 */
export const CANDIDATAS_BAIXO_MINO: Record<string, CandidataFoto[]> = {
  /** Ahora 7/13. Faltan: clima 1, vivir 1, mar 2, casa 2. */
  "a-guarda": [
    {
      slot: "clima",
      src: "/fotos/baixo-mino/a-guarda-desembocadura.jpg",
      pie: "Desembocadura del Miño desde A Guarda",
      motivo: "Clima / atmósfera atlántica de la punta",
    },
    {
      slot: "vivir",
      src: "/fotos/_candidatas/baixo-mino/a-guarda/vivir-calle-rosalia.jpg",
      pie: "Rúa Rosalía de Castro, A Guarda",
      motivo: "Calle del núcleo",
    },
    {
      slot: "mar",
      src: "/fotos/baixo-mino/a-guarda-darsena.jpg",
      pie: "Dársena de A Guarda",
      motivo: "Mar: frente portuario (3.ª / 4.ª)",
    },
    {
      slot: "mar",
      src: "/fotos/baixo-mino/a-guarda-caminha.jpg",
      pie: "Caminha vista desde A Guarda",
      motivo: "Mar / estuario: Portugal enfrente",
    },
    {
      slot: "casa",
      src: "/fotos/_candidatas/baixo-mino/a-guarda/casa-edificio-vello.jpg",
      pie: "Edificios de A Guarda, de cerca",
      motivo: "Casa: tipología del núcleo",
    },
    {
      slot: "casa",
      src: "/fotos/_candidatas/baixo-mino/a-guarda/casa-costa-g26.jpg",
      pie: "Casas apiladas hacia el monte, A Guarda",
      motivo: "Casa: tipología en ladera sobre el puerto",
    },
  ],

  /** Ahora 7/13. Faltan: clima 1, vivir 1, mar 2, casa 2. */
  oia: [
    {
      slot: "clima",
      src: "/fotos/_candidatas/baixo-mino/oia/clima-near-oia.jpg",
      pie: "Costa cerca de Oia",
      motivo: "Clima: Atlántico abierto, cielo y viento",
    },
    {
      slot: "vivir",
      src: "/fotos/_candidatas/baixo-mino/oia/vivir-mougas-aldea.jpg",
      pie: "Mougás: casas hacia el Atlántico",
      motivo: "Vivir: escala de aldea costera",
    },
    {
      slot: "mar",
      src: "/fotos/_candidatas/baixo-mino/oia/mar-sobreira.jpg",
      pie: "Playa de Sobreira, Oia",
      motivo: "Mar: costa del municipio",
    },
    {
      slot: "mar",
      src: "/fotos/_candidatas/baixo-mino/oia/mar-pozas.jpg",
      pie: "Pozas de Mougás",
      motivo: "Mar / costa: otra salida",
    },
    {
      slot: "casa",
      src: "/fotos/_candidatas/baixo-mino/oia/casa-pedrarrubia.jpg",
      pie: "Casa junto a la sierra en Mougás",
      motivo: "Casa: tipología dispersa entre monte y costa",
    },
    {
      slot: "casa",
      src: "/fotos/_candidatas/baixo-mino/oia/casa-pedornes.jpg",
      pie: "Pedornes: iglesia y casas de parroquia",
      motivo: "Casa: otra tipología de aldea",
    },
  ],

  /** Ahora 7/13. Faltan: clima 1, vivir 1, mar 2, casa 2. */
  "o-rosal": [
    {
      slot: "clima",
      src: "/fotos/baixo-mino/rosal-paisaje.jpg",
      pie: "Valle de O Rosal",
      motivo: "Clima: humedad y verde del valle",
    },
    {
      slot: "vivir",
      src: "/fotos/baixo-mino/rosal-calvario.jpg",
      pie: "O Calvario, núcleo de O Rosal",
      motivo: "Vivir: escala del núcleo",
    },
    {
      slot: "mar",
      src: "/fotos/baixo-mino/rosal-folon-camino.jpg",
      pie: "Camino de los Muíños do Folón",
      motivo: "Mar, río y camino: Folón",
    },
    {
      slot: "mar",
      src: "/fotos/baixo-mino/rosal-folon-baixada.jpg",
      pie: "Baixada del Folón",
      motivo: "Camino / agua dulce del valle",
    },
    {
      slot: "casa",
      src: "/fotos/_candidatas/baixo-mino/o-rosal/casa-tabagon-calle.jpg",
      pie: "Calle en San Miguel de Tabagón",
      motivo: "Casa: tipología de parroquia",
    },
    {
      slot: "casa",
      src: "/fotos/_candidatas/baixo-mino/o-rosal/casa-tabagon-ponte.jpg",
      pie: "Casas y puente del Tamuxe en Tabagón",
      motivo: "Casa: tipología junto al río",
    },
  ],

  /** Ahora 6/13. Faltan: como 1, clima 1, vivir 1, mar 2, casa 2. */
  tomino: [
    {
      slot: "como",
      src: "/fotos/_candidatas/baixo-mino/tomino/como-praza.jpg",
      pie: "Plaza en Goián",
      motivo: "Cómo se vive: núcleo frente al Miño",
    },
    {
      slot: "clima",
      src: "/fotos/baixo-mino/tomino-orilla.jpg",
      pie: "Orilla del Miño en Tomiño",
      motivo: "Clima: niebla / luz de vega",
    },
    {
      slot: "vivir",
      src: "/fotos/baixo-mino/tomino-auditorio.jpg",
      pie: "Auditorio / espacio cotidiano en Tomiño",
      motivo: "Vivir: servicios y escala",
    },
    {
      slot: "mar",
      src: "/fotos/_candidatas/baixo-mino/tomino/mar-desembocadura.jpg",
      pie: "Miño hacia la desembocadura",
      motivo: "Mar / río: el agua cotidiana es el Miño",
    },
    {
      slot: "mar",
      src: "/fotos/baixo-mino/tomino-forte2.jpg",
      pie: "Forte de San Lourenzo, otra toma",
      motivo: "Río / frontera (4.ª de mar-río-camino)",
    },
    {
      slot: "casa",
      src: "/fotos/_candidatas/baixo-mino/tomino/casa-embarcadoiro.jpg",
      pie: "Embarcadero: casas frente al Miño",
      motivo: "Casa: tipología de vega / Goián",
    },
    {
      slot: "casa",
      src: "/fotos/_candidatas/baixo-mino/tomino/casa-correo.jpg",
      pie: "Casa en esquina, Goián",
      motivo: "Casa: tipología del núcleo",
    },
  ],

  /** Ahora 6/13 (sin fotoIdentidad: cab=abrir[0]). Faltan: como 1, clima 1, vivir 1, mar 2, casa 2. */
  tui: [
    {
      slot: "como",
      src: "/fotos/baixo-mino/tui-identidad.jpg",
      pie: "Tui sobre el Miño",
      motivo: "Cómo se vive: 2.ª foto de escala urbana",
    },
    {
      slot: "clima",
      src: "/fotos/baixo-mino/tui-reflejo.jpg",
      pie: "Reflejo del casco en el Miño",
      motivo: "Clima: niebla / luz de río",
    },
    {
      slot: "vivir",
      src: "/fotos/baixo-mino/tui-camino.jpg",
      pie: "Calle del casco / Camino en Tui",
      motivo: "Vivir: pendientes y casco a pie",
    },
    {
      slot: "mar",
      src: "/fotos/baixo-mino/tui-mino.jpg",
      pie: "El Miño a su paso por Tui",
      motivo: "Mar / río: el agua cotidiana",
    },
    {
      slot: "mar",
      src: "/fotos/baixo-mino/tui-valenca-fortaleza.jpg",
      pie: "Fortaleza de Valença desde Tui",
      motivo: "Río / frontera: la otra orilla",
    },
    {
      slot: "casa",
      src: "/fotos/_candidatas/baixo-mino/tui/casa-ruas-tui.jpg",
      pie: "Calle del casco de Tui",
      motivo: "Casa: tipología de piedra en pendiente",
    },
    {
      slot: "casa",
      src: "/fotos/_candidatas/baixo-mino/tui/casa-san-telmo-capilla.jpg",
      pie: "Capilla de San Telmo, fachada",
      motivo: "Casa: entorno del casco junto a San Telmo",
    },
  ],
};
