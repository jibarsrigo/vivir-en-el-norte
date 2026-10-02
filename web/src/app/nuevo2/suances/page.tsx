"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/suances/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/suances/" />;
}
