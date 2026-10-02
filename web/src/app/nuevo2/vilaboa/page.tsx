"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/vilaboa/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/vilaboa/" />;
}
