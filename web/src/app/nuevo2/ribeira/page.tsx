"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/ribeira/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/ribeira/" />;
}
