import Link from "next/link";

/** Pie global discreto: acceso a archivos V1 y V2. */
export default function PieGlobal() {
  return (
    <footer className="mt-16 border-t border-[var(--linea)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 text-sm text-[var(--tinta-suave)]">
        <span>Vivir en el norte</span>
        <nav className="flex items-center gap-3 text-xs text-[var(--tinta-suave)]">
          <Link href="/v1/" className="underline-offset-2 hover:underline">
            V1
          </Link>
          <Link href="/v2/" className="underline-offset-2 hover:underline">
            V2
          </Link>
        </nav>
      </div>
    </footer>
  );
}
