"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/mino/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/mino/" />;
}
