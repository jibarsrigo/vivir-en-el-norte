import { COLOR_COMUNIDAD } from "@/lib/mapa-base";
import { municipiosPuntos, type MunicipioPunto } from "@/lib/municipios-puntos";
import { comunidadDeZona, zonas, type ComunidadId } from "@/lib/zonas";

const comPorZona = new Map(zonas.map((z) => [z.id, comunidadDeZona(z)]));

export function municipiosPuntosComunidad(comunidadId: ComunidadId): MunicipioPunto[] {
  return municipiosPuntos.filter((m) => comPorZona.get(m.zonaId) === comunidadId);
}

export function colorPastelComunidad(comunidadId: ComunidadId): string {
  return COLOR_COMUNIDAD.find((c) => c.id === comunidadId)?.color ?? "#ececec";
}

export function nombreComunidad(comunidadId: ComunidadId): string {
  return COLOR_COMUNIDAD.find((c) => c.id === comunidadId)?.nombre ?? comunidadId;
}

/** Natural Earth `region` / `admin` → nuestra CCAA. */
export function geojsonEsComunidad(
  props: { region?: string; admin?: string },
  comunidadId: ComunidadId,
): boolean {
  if (comunidadId === "galicia") return props.region === "Galicia";
  if (comunidadId === "asturias") return props.region === "Asturias";
  if (comunidadId === "cantabria") return props.region === "Cantabria";
  if (comunidadId === "portugal") return props.admin === "Portugal";
  return false;
}
