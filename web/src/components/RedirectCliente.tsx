"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/** Redirección cliente (output: export no soporta redirect() de servidor). */
export default function RedirectCliente({ to }: { to: string }) {
  const router = useRouter();
  useEffect(() => {
    router.replace(to);
  }, [router, to]);
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 text-[17px] text-[var(--tinta-suave)]">
      <p>
        Redirigiendo a{" "}
        <a href={to} className="text-[var(--acento)] underline-offset-2 hover:underline">
          {to}
        </a>
        …
      </p>
    </main>
  );
}
