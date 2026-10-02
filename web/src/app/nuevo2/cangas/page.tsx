"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/cangas/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/cangas/" />;
}
