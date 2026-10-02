"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/tui/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/tui/" />;
}
