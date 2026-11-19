import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 max-w-6xl mx-auto px-gutter-mobile md:px-gutter flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-sm">
          <img
            alt="SkateMentor Logo"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/ALJJyrDxpuIwq5vtWr8IpJZAEYMPPJaF_asZV1Z824Uvzz1-uqoZP06Y8Jgkr3rt85SQi1rE55ZzBWGnAUsG9hIWJW8wiEkIY5suBCWbTdSZInOrwTkdV91NUoQMEIDZr5fyqnzjtxWtf82HOHCnOFp42fSYbEWh_HRbmP4kY28WeuMJ_vRNbFqzFzDwAnok5yBivWSAow-GXUT5MemMg5IkcJpm3MD-VaV9oJFjYQ7nQ_O5"
          />
          <Link
            className="font-headline-md text-headline-md font-bold tracking-tight text-on-surface"
            href="/"
          >
            SkateMentor
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-space-lg">
          <Link
            className="font-label-md text-label-md text-primary font-bold transition-colors"
            href="/"
          >
            Catálogo de Skaters
          </Link>
          <Link
            className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors"
            href="/#como-funciona"
          >
            Cómo Funciona
          </Link>
        </nav>

        <div className="flex items-center gap-space-sm md:gap-space-md">
          <Link
            className="inline-flex items-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md px-space-md py-space-sm rounded-lg transition-colors shadow-sm"
            href="/nuevo-skater"
          >
            <span>Añadir Skater</span>
            <span className="material-symbols-outlined text-[16px]">add</span>
          </Link>
          <Link
            aria-label="Iniciar sesión"
            className="w-8 h-8 rounded-full bg-primary hover:bg-primary-container flex items-center justify-center shrink-0 transition-colors"
            href="/login"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}