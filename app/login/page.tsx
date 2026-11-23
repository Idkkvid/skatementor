"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Configura aquí las credenciales autorizadas para entrar a SkateMentor
const CREDENCIALES_VALIDAS = [
  { email: "admin@skatementor.com", password: "Skate2026*" },
  { email: "vidal@cuc.edu.co", password: "cuc2026" },
  { email: "mateo@cuc.edu.co", password: "cuc2026" },
];

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const iniciarSesionYEntrar = (correoUsuario: string) => {
    const maxAge = rememberMe ? 60 * 60 * 24 * 7 : 60 * 60 * 4;
    document.cookie = `skatementor_session=${encodeURIComponent(
      correoUsuario
    )}; path=/; max-age=${maxAge}; SameSite=Lax`;

    router.push("/");
    router.refresh();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");

    const correoNormalizado = email.trim().toLowerCase();
    const usuarioAutorizado = CREDENCIALES_VALIDAS.find(
      (cred) =>
        cred.email.toLowerCase() === correoNormalizado &&
        cred.password === password
    );

    if (!usuarioAutorizado) {
      setErrorMsg("Correo o contraseña incorrectos. Verifica tus credenciales.");
      return;
    }

    iniciarSesionYEntrar(usuarioAutorizado.email);
  };

  const handleGoogleLogin = () => {
    // Usa la primera cuenta autorizada al simular el acceso rápido con Google
    iniciarSesionYEntrar(CREDENCIALES_VALIDAS[0].email);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center py-space-xl px-gutter-mobile md:px-gutter overflow-hidden">
        {/* Background Architectural Skatepark Elements */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary-fixed/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-36 -right-24 w-[28rem] h-[28rem] rounded-full bg-secondary-container/40 blur-3xl pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 rounded-xl shadow-xl overflow-hidden bg-surface-container-lowest relative z-10">
          {/* Left Column: Editorial Skate Culture Showcase */}
          <div className="hidden lg:flex lg:col-span-5 relative flex-col justify-between p-space-xl bg-surface-container text-on-surface overflow-hidden">
            <div
              className="absolute inset-0 z-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4OH3dJiOBitCZP5w-2rWtotj6E6psB0kZWvbc9maW5ot9SdRH8xcrdCdSKRUycRKEH3aNplGXIAKkNwJCEqOsuGHPTtBo1PHRvarZpmQwEKltWO-KYOCkuMBkZBA_Uq15w_VAF1TES89SLQVTQovHqF_XKvyHuIn6Gv2e0tCvcLb9V6eqiNzGbIhYM2JFrc2QA8IiRtHGRlfHhzJ4osr-FBQy35AgXsklQ4M5Y2k')",
              }}
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-inverse-surface/95 via-inverse-surface/60 to-inverse-surface/30" />

            {/* Top Content in Hero Panel */}
            <div className="relative z-20 flex items-center justify-between">
              <span className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-lowest/20 backdrop-blur-md text-surface text-label-sm font-label-sm uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse" />
                Comunidad Activa
              </span>
              <span className="text-surface-variant font-label-sm text-label-sm">
                CUC · 2026
              </span>
            </div>

            {/* Middle Quote / Energy */}
            <div className="relative z-20 my-auto py-space-lg">
              <p className="font-headline-lg text-headline-lg text-surface tracking-tight leading-snug">
                Domina el asfalto con la técnica de los mejores.
              </p>
              <p className="font-body-md text-body-md text-surface-variant mt-space-sm">
                Conecta en minutos con mentores certificados y programa tus sesiones directamente por WhatsApp en tu spot favorito.
              </p>
            </div>

            {/* Bottom Stat / Feature Strip */}
            <div className="relative z-20 pt-space-md bg-surface-container-lowest/10 backdrop-blur-md rounded-lg p-space-md">
              <div className="flex items-center gap-space-md">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 text-on-primary">
                  <span className="material-symbols-outlined text-[20px]">
                    skateboarding
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="font-label-md text-label-md text-surface truncate">
                    Gestión de Clases &amp; Solicitudes
                  </div>
                  <div className="font-body-sm text-body-sm text-surface-variant truncate">
                    Street · Bowl · Grind · Park
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Login Interface */}
          <div className="col-span-1 lg:col-span-7 p-space-lg md:p-space-xl flex flex-col justify-between bg-surface-container-lowest">
            <div>
              <div className="flex items-center justify-between gap-space-sm mb-space-md">
                <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase">
                  <span className="material-symbols-outlined text-[14px]">
                    sports_martial_arts
                  </span>
                  Acceso Obligatorio
                </span>
                <span className="inline-flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">
                    verified_user
                  </span>
                  Conexión SSL
                </span>
              </div>

              <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-xs">
                Inicia sesión en SkateMentor
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                Ingresa con una cuenta autorizada para explorar el catálogo de instructores, ver perfiles completos o registrar un skater.
              </p>

              {/* Quick Social Login */}
              <button
                className="w-full flex items-center justify-center gap-space-sm py-3 px-space-md rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all shadow-sm active:scale-[0.99] group cursor-pointer"
                type="button"
                onClick={handleGoogleLogin}
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                  <path
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.15z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="group-hover:text-primary transition-colors">
                  Continuar con Google
                </span>
              </button>

              {/* Divider */}
              <div className="relative flex items-center justify-center my-space-lg">
                <div className="w-full h-px bg-surface-container-high" />
                <span className="absolute bg-surface-container-lowest px-space-sm font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  o ingresa con tu correo
                </span>
              </div>

              {/* Error Alert Banner */}
              {errorMsg && (
                <div
                  className="mb-space-md p-space-sm rounded-lg bg-error-container text-on-error-container font-body-sm text-body-sm flex items-center gap-2"
                  role="alert"
                >
                  <span className="material-symbols-outlined text-[18px] shrink-0">
                    error
                  </span>
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Credential Login Form */}
              <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-label-md text-label-md text-on-surface flex items-center justify-between"
                    htmlFor="email"
                  >
                    <span>Correo Electrónico</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">
                      Institucional o personal
                    </span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-[20px] pointer-events-none">
                      mail
                    </span>
                    <input
                      autoComplete="email"
                      className="w-full bg-surface rounded-lg py-2.5 pl-10 pr-3.5 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/60 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      id="email"
                      name="email"
                      placeholder="admin@skatementor.com"
                      required
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errorMsg) setErrorMsg("");
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-label-md text-label-md text-on-surface flex items-center justify-between"
                    htmlFor="password"
                  >
                    <span>Contraseña</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-[20px] pointer-events-none">
                      lock
                    </span>
                    <input
                      autoComplete="current-password"
                      className="w-full bg-surface rounded-lg py-2.5 pl-10 pr-12 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/60 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all tracking-wider"
                      id="password"
                      name="password"
                      placeholder="••••••••••••"
                      required
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (errorMsg) setErrorMsg("");
                      }}
                    />
                    <button
                      aria-label="Mostrar u ocultar contraseña"
                      className="absolute right-3 p-1 rounded-full text-on-surface-variant hover:text-on-surface focus:outline-none transition-colors cursor-pointer"
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {showPassword ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      checked={rememberMe}
                      className="w-4 h-4 rounded text-primary focus:ring-primary/40 accent-primary cursor-pointer"
                      id="rememberMe"
                      name="rememberMe"
                      type="checkbox"
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <span className="font-body-sm text-body-sm text-on-surface">
                      Recordar sesión
                    </span>
                  </label>
                  <Link
                    className="font-label-md text-label-md text-primary hover:text-primary-container transition-colors"
                    href="/login"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>

                <button
                  className="w-full mt-2 py-3 px-space-md rounded-lg bg-primary hover:bg-primary-container text-on-primary font-headline-md text-body-lg font-bold flex items-center justify-center gap-space-xs shadow-md transition-all active:scale-[0.99] group cursor-pointer"
                  type="submit"
                >
                  <span>Iniciar Sesión</span>
                  <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </form>
            </div>

            <div className="mt-space-lg pt-space-md text-center">
              <div className="flex items-center justify-center gap-2 text-on-surface-variant/80 font-body-sm text-body-sm">
                <span className="material-symbols-outlined text-[16px]">
                  school
                </span>
                <span>
                  Proyecto académico CUC Barranquilla · Acceso seguro y directo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}