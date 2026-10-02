"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/ribadeo/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/ribadeo/" />;
}
