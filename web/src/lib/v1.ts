/**
 * Loaders for the frozen V1 archive (web/src/data/v1).
 * Never import current relatos-* here.
 */
import fs from "fs";
import path from "path";
import manifestJson from "@/data/v1/manifest.json";

export type V1ManifestEntry = {
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

export type V1Manifest = {
  version: string;
  title: string;
  sourceTag: string;
  sourceCommit: string;
  counts: { municipios: number; zonas: number; total: number };
  entries: V1ManifestEntry[];
  assetMissing: string[];
  notes: string[];
};

export type V1Foto = { src: string; pie: string };

export type V1RelatoMun = {
  escala: string;
  abrir: string[];
  tiempo: string[];
  vivir?: string[];
  historia: string[];
  fuera: string[];
  casa: string[];
  encaja: { si: string[]; no: string[]; veredicto: string };
  fotoIdentidad?: V1Foto;
  fotosAbrir: V1Foto[];
  fotosHistoria: V1Foto[];
  fotosFuera: V1Foto[];
  creditoFotos: string;
};

export type V1MunicipioDoc = {
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
  relato: V1RelatoMun;
};

export type V1ZonaBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "foto"; src: string; pie: string }
  | { type: "encaja"; si: string[]; no: string[]; veredicto: string }
  | { type: "credito"; text: string };

export type V1ZonaDoc = {
  tipo: "zona";
  zonaId: string;
  nombre: string;
  sourcePath: string;
  sourceCommit: string;
  sourceTag: string;
  sourceFileHash: string;
  contentHash: string;
  escalas: Record<string, string>;
  blocks: V1ZonaBlock[];
  widgetsOmitidos: string[];
  serializationNote: string;
};

export const v1Manifest = manifestJson as V1Manifest;

export const v1Zonas = v1Manifest.entries.filter((e) => e.tipo === "zona");
export const v1Municipios = v1Manifest.entries.filter((e) => e.tipo === "municipio");

const V1_ROOT = path.join(process.cwd(), "src", "data", "v1");

function readV1Json<T>(rel: string): T {
  const full = path.join(V1_ROOT, rel);
  return JSON.parse(fs.readFileSync(full, "utf8")) as T;
}

export function v1MunicipiosDeZona(zonaId: string): V1ManifestEntry[] {
  return v1Municipios.filter((m) => m.zonaId === zonaId);
}

export function v1ZonaEntry(zonaId: string): V1ManifestEntry | undefined {
  return v1Zonas.find((z) => z.zonaId === zonaId);
}

export function v1MunicipioEntry(slug: string): V1ManifestEntry | undefined {
  return v1Municipios.find((m) => m.slug === slug);
}

export function loadV1Municipio(slug: string): V1MunicipioDoc | null {
  const entry = v1MunicipioEntry(slug);
  if (!entry) return null;
  return readV1Json<V1MunicipioDoc>(entry.file);
}

export function loadV1Zona(zonaId: string): V1ZonaDoc | null {
  const entry = v1ZonaEntry(zonaId);
  if (!entry) return null;
  return readV1Json<V1ZonaDoc>(entry.file);
}

export function v1HrefMunicipio(zonaId: string, slug: string): string {
  return `/v1/zona/${zonaId}/${slug}/`;
}

export function v1HrefZona(zonaId: string): string {
  return `/v1/zona/${zonaId}/`;
}

export function actualHrefMunicipio(zonaId: string, slug: string): string {
  return `/zona/${zonaId}/${slug}/`;
}

export function actualHrefZona(zonaId: string): string {
  return `/zona/${zonaId}/`;
}
