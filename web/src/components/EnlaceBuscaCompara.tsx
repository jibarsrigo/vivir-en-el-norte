import Link from "next/link";

/** Lupa: busca pueblos / criterios y compara. */
function IconoLupa({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      width="14"
      height="14"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="7" cy="7" r="4.2" />
      <path d="M10.2 10.2 13.5 13.5" />
    </svg>
  );
}

export default function EnlaceBuscaCompara({ className }: { className?: string }) {
  return (
    <Link
      href="/compara/"
      className={
        className ??
        "inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--acento)] underline-offset-2 hover:underline"
      }
    >
      <IconoLupa className="shrink-0 opacity-80" />
      Busca y compara
    </Link>
  );
}
