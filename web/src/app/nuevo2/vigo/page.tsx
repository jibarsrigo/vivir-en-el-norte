"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/vigo/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/vigo/" />;
}
