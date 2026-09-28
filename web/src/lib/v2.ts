/**
 * Loaders for the frozen V2 archive (web/src/data/v2).
 * Snapshot of CURRENT at freeze time. Never import live relatos-* or NUEVO2 here.
 */
import fs from "fs";
import path from "path";
import manifestJson from "@/data/v2/manifest.json";
import type { FichaMunicipio } from "@/lib/municipios";

export type V2ManifestEntry = {
  tipo: "municipio" | "zona";
  slug: string;
  nombre: string;
  zonaId: string;
  zonaNombre: string;
  n?: number;
  sourcePath: string;
  sourceKey?: string;
  sourceCommit: string;
  contentHash: string;
  sourceFileHash?: string;
  file: string;
};

export type V2Manifest = {
  version: string;
  title: string;
  sourceTag: string;
  sourceCommit: string;
  counts: { municipios: number; zonas: number; total: number };
  entries: V2ManifestEntry[];
  assetMissing: string[];
  notes: string[];
};

export type V2Foto = { src: string; pie: string };

export type V2RelatoMun = {
  escala: string;
  abrir: string[];
  tiempo: string[];
  vivir?: string[];
  historia: string[];
  fuera: string[];
  casa: string[];
  encaja: { si: string[]; no: string[]; veredicto: string };
  fotoIdentidad?: V2Foto;
  fotosAbrir: V2Foto[];
  fotosClima?: V2Foto[];
  fotosVivir?: V2Foto[];
  fotosHistoria: V2Foto[];
  fotosFuera: V2Foto[];
  fotosCasa?: V2Foto[];
  creditoFotos: string;
};

export type V2MunicipioDoc = {
  tipo: "municipio";
  slug: string;
  nombre: string;
  n: number;
  zonaId: string;
  zonaNombre: string;
  provincia?: string;
  pais?: string;
  sourcePath: string;
  sourceKey: string;
  sourceCommit: string;
  sourceTag: string;
  contentHash: string;
  ficha: FichaMunicipio;
  fichasZona: FichaMunicipio[];
  escalasZona: Record<string, string>;
  idealistaUrl?: string | null;
  resumenZona?: string;
  relato: V2RelatoMun;
};

export type V2ZonaBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "foto"; src: string; pie: string }
  | { type: "encaja"; si: string[]; no: string[]; veredicto: string }
  | { type: "credito"; text: string }
  | { type: "tablaPrecios" }
  | { type: "idealista" }
  | { type: "municipiosFin" };

export type V2ZonaBaseline = {
  id: string;
  zona: string;
  provincia?: string;
  pais?: string;
  lat?: number;
  lon?: number;
  solHoras?: number;
  despejados?: number;
  cubiertos?: number;
  lluviaDias?: number;
  lluviaMm?: number;
  lluvia?: { oct_mar: string; peor: string; peor_n: string; verano: string };
  tempVerano?: number;
  calorAprieta?: string | null;
  viento?: string;
  niebla?: string;
  activa?: boolean;
};

export type V2ZonaDoc = {
  tipo: "zona";
  zonaId: string;
  nombre: string;
  sourcePath: string;
  sourceCommit: string;
  sourceTag: string;
  sourceFileHash: string;
  contentHash: string;
  zonaBaseline: V2ZonaBaseline;
  mallorcaBaseline: Record<string, unknown>;
  fichas: FichaMunicipio[];
  mapaDetalle?: string | null;
  idealistaUrl?: string | null;
  resumen?: string;
  escalas: Record<string, string>;
  blocks: V2ZonaBlock[];
  serializationNote: string;
};

export const v2Manifest = manifestJson as V2Manifest;

export const v2Zonas = v2Manifest.entries.filter((e) => e.tipo === "zona");
export const v2Municipios = v2Manifest.entries.filter((e) => e.tipo === "municipio");

const V2_ROOT = path.join(process.cwd(), "src", "data", "v2");

function readV2Json<T>(rel: string): T {
  const full = path.join(V2_ROOT, rel);
  return JSON.parse(fs.readFileSync(full, "utf8")) as T;
}

export function v2MunicipiosDeZona(zonaId: string): V2ManifestEntry[] {
  return v2Municipios.filter((m) => m.zonaId === zonaId);
}

export function v2ZonaEntry(zonaId: string): V2ManifestEntry | undefined {
  return v2Zonas.find((z) => z.zonaId === zonaId);
}

export function v2MunicipioEntry(slug: string): V2ManifestEntry | undefined {
  return v2Municipios.find((m) => m.slug === slug);
}

export function loadV2Municipio(slug: string): V2MunicipioDoc | null {
  const entry = v2MunicipioEntry(slug);
  if (!entry) return null;
  return readV2Json<V2MunicipioDoc>(entry.file);
}

export function loadV2Zona(zonaId: string): V2ZonaDoc | null {
  const entry = v2ZonaEntry(zonaId);
  if (!entry) return null;
  return readV2Json<V2ZonaDoc>(entry.file);
}

export {
  actualHrefMunicipio,
  actualHrefZona,
  v2HrefMunicipio,
  v2HrefZona,
} from "@/lib/v2-hrefs";
