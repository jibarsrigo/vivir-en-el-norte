import { Suspense } from "react";
import Link from "next/link";
import ComparaCliente from "@/components/ComparaCliente";

export default function PaginaCompara() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <p className="text-sm text-[var(--tinta-suave)]">
        <Link href="/" className="underline-offset-2 hover:underline">
          Inicio
        </Link>
        {" · "}
        Busca y compara
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-serif)] text-4xl text-[var(--acento)]">
        Busca y compara
      </h1>
      <Suspense
        fallback={
          <p className="mt-6 text-[var(--tinta-suave)]">Cargando…</p>
        }
      >
        <ComparaCliente />
      </Suspense>
    </main>
  );
}
