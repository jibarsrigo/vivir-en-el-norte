"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/pontevedra/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/pontevedra/" />;
}
