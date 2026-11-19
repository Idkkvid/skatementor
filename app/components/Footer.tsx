import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low py-space-xl">
      <div className="max-w-6xl mx-auto px-gutter-mobile md:px-gutter flex flex-col md:flex-row items-center justify-between gap-space-md">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight">
            SkateMentor
          </span>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            Proyecto Académico · Corporación Universidad de la Costa (CUC), Barranquilla
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-space-md">
          <Link
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors uppercase"
            href="/"
          >
            Catálogo
          </Link>
          <Link
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors uppercase"
            href="/#como-funciona"
          >
            Cómo Funciona
          </Link>
          <Link
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors uppercase"
            href="/nuevo-skater"
          >
            Registrar Skater
          </Link>
        </div>

        <div className="font-body-sm text-body-sm text-on-surface-variant">
          © 2025 SkateMentor. CUC Barranquilla.
        </div>
      </div>
    </footer>
  );
}