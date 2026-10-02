"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/marin/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/marin/" />;
}
