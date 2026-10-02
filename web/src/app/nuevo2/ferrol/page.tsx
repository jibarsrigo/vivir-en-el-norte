"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/ferrol/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/ferrol/" />;
}
