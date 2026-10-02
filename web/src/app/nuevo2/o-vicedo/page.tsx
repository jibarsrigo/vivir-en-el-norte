"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/o-vicedo/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/o-vicedo/" />;
}
