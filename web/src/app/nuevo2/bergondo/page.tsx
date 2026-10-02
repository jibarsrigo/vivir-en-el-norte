"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/bergondo/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/bergondo/" />;
}
