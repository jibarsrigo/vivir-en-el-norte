"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/castropol/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/castropol/" />;
}
