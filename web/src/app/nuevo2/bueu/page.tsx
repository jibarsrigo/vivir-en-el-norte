"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/bueu/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/bueu/" />;
}
