import Link from "next/link";

/** Pie global discreto: acceso al archivo V1 desde cualquier página. */
export default function PieGlobal() {
  return (
    <footer className="mt-16 border-t border-[var(--linea)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 text-sm text-[var(--tinta-suave)]">
        <span>Vivir en el norte</span>
        <Link href="/v1/" className="underline-offset-2 hover:underline">
          V1
        </Link>
      </div>
    </footer>
  );
}
