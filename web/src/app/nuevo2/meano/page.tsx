"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/meano/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/meano/" />;
}
