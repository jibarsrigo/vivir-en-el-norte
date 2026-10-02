"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/caminha/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/caminha/" />;
}
