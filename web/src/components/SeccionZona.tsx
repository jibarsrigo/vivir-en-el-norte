"use client";

import type { ReactNode } from "react";
import DesplegableNuevo2 from "@/components/DesplegableNuevo2";

/**
 * Títulos de zona alineados con la ficha de municipio cuando el apartado es el mismo.
 * Los solo-de-zona (Dónde está, Mercados…, Monte…) conservan nombre propio.
 */
const TITULO_HOMOGENEO: Record<string, string> = {
  "Dónde está": "Dónde está",
  "El tiempo comparado con Baleares": "Frente a Mallorca",
  "Cómo se vive": "Cómo se vive",
  "Mar, río y camino": "Mar, río y camino",
  "Mar, ría y camino": "Mar, río y camino",
  "Mar, ría y caminos": "Mar, río y camino",
  "Mar, rías y caminos": "Mar, río y camino",
  "Mar, dunas y camino": "Mar, río y camino",
  "Mar, marisma y camino": "Mar, río y camino",
  "Mar, ría y sierra": "Mar, río y camino",
  "Mercados, fiestas y mesa": "Mercados, fiestas y mesa",
  "Mercados, fiestas y calendario": "Mercados, fiestas y mesa",
  "Fiestas, mercados y cultura": "Mercados, fiestas y mesa",
  Monte: "Monte",
  "Día de lluvia": "Día de lluvia",
  Calma: "Calma",
  "Servicios, hospital, aeropuerto": "Servicios, hospital, aeropuerto",
  "Qué cuesta una casa": "Casa",
};

export function tituloSeccionZona(titulo: string): string {
  return TITULO_HOMOGENEO[titulo] ?? titulo;
}

/** Apartado de relato de zona: mismo desplegable/tarjeta que las fichas NUEVO2. */
export default function SeccionZona({
  titulo,
  children,
}: {
  titulo: string;
  children: ReactNode;
}) {
  return (
    <DesplegableNuevo2 titulo={tituloSeccionZona(titulo)} varianteTarjetaV1>
      {children}
    </DesplegableNuevo2>
  );
}
