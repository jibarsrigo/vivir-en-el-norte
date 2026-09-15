import { Suspense } from "react";
import Link from "next/link";
import NotaCompara from "@/components/NotaCompara";

export default function PaginaCompara() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <p className="text-sm text-[var(--tinta-suave)]">
        <Link href="/" className="underline-offset-2 hover:underline">
          Inicio
        </Link>
        {" · "}
        Compara pueblos
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-serif)] text-4xl text-[var(--acento)]">
        Compara pueblos
      </h1>
      <Suspense>
        <NotaCompara />
      </Suspense>
    </main>
  );
}
