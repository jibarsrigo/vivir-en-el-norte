"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/ribadesella/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/ribadesella/" />;
}
