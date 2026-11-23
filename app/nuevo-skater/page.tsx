"use client";

import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { isValidAccountEmail } from "../../lib/auth";

const DISCIPLINE_OPTIONS = [
  { value: "street", label: "Street", icon: "stairs" },
  { value: "bowl", label: "Bowl / Rampa", icon: "waves" },
  { value: "grind", label: "Grind & Slide", icon: "linear_scale" },
  { value: "park", label: "Park Transition", icon: "terrain" },
  { value: "basic", label: "Trucos Básicos / Ollie", icon: "accessibility_new" },
];

const DEFAULT_AVATAR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAKv4o8YklNlVIVdWT6vEbHL6CLScJ6F5HFvt8bEYiM3KfCj734yYJ_7YnVho4OucGKim6HyM0YRZVqb-_VFeUIsJJijrB6_N_5cNaAg6kspl4TdXcPoIvDy_EadHZAdZA6MY1C5RqA5NEcNYYIwzjXEgvjpDEUjIQ8x1k6_Cxd5RTiZ1svWz0eFAkz305PT-1vqgxFRW-q23nG5JvOahqJ1XavJMijJiQ2Fp99wnk";

export default function NuevoSkaterPage() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [locationSpots, setLocationSpots] = useState("");
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([
    "street",
    "bowl",
    "basic",
  ]);
  const [experienceYears, setExperienceYears] = useState("");
  const [studentLevel, setStudentLevel] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [bio, setBio] = useState("");
  const [socialVideoUrl, setSocialVideoUrl] = useState("");

  const [fileName, setFileName] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>(DEFAULT_AVATAR);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const session = document.cookie
      .split("; ")
      .find((item) => item.startsWith("skatementor_session="))
      ?.split("=")[1];

    let authorized = false;
    if (session) {
      try {
        authorized = isValidAccountEmail(decodeURIComponent(session));
      } catch {
        authorized = false;
      }
    }

    if (!authorized) {
      router.replace("/login?next=/nuevo-skater/");
      return;
    }

    setIsAuthorized(true);
  }, [router]);

  const toggleDiscipline = (value: string) => {
    setSelectedDisciplines((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        setPreviewUrl(event.target.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting || isSubmitted) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      document
        .getElementById("statusAlert")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 1200);
  };

  const formattedPrice = hourlyRate
    ? `$${Number(hourlyRate).toLocaleString("es-CO")}`
    : "$45.000";

  if (!isAuthorized) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <p className="font-body-md text-body-md text-secondary">
          Verificando sesión...
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full max-w-6xl mx-auto px-gutter-mobile md:px-gutter py-space-xl">
        {/* Title & Narrative Header */}
        <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-space-lg mb-space-xl">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider mb-space-sm">
              <span className="material-symbols-outlined text-[14px]">
                sports_score
              </span>
              <span>Red de Instructores Urbanos</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
              Únete como Instructor en SkateMentor
            </h1>
            <p className="font-body-lg text-body-lg text-secondary mt-space-sm max-w-xl">
              Crea tu perfil público, muestra tu experiencia y recibe solicitudes directas de estudiantes en tu ciudad sin intermediarios.
            </p>
          </div>

          <div className="flex items-center gap-space-md bg-surface-container-lowest p-space-md rounded-xl shadow-sm self-start md:self-auto">
            <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[24px]">
                verified
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm uppercase text-secondary">
                Integración API Ready
              </span>
              <span className="font-headline-md text-headline-md text-on-surface">
                REST + S3 Upload
              </span>
            </div>
          </div>
        </div>

        {/* Main Grid: 8-cols Form, 4-cols Strategic Guidance Sidecar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* Primary Form Container */}
          <div className="lg:col-span-8 flex flex-col gap-space-lg">
            <form className="flex flex-col gap-space-lg" onSubmit={handleSubmit}>
              {/* SECTION 1: Información Básica */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md relative overflow-hidden">
                <div className="flex items-center gap-space-sm pb-space-sm">
                  <span className="w-7 h-7 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-headline-md text-headline-md">
                    1
                  </span>
                  <div>
                    <h2 className="font-headline-md text-headline-md text-on-surface">
                      Información Básica
                    </h2>
                    <p className="font-body-sm text-body-sm text-secondary">
                      Tus datos principales para que los alumnos de tu ciudad te reconozcan y te ubiquen en el mapa.
                    </p>
                  </div>
                </div>

                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-label-md text-label-md text-on-surface"
                    htmlFor="fullName"
                  >
                    Nombre completo <span className="text-primary">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3.5 text-secondary text-[20px] pointer-events-none">
                      badge
                    </span>
                    <input
                      className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md pl-11 pr-4 py-2.5 rounded-lg focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all placeholder:text-secondary/60"
                      id="fullName"
                      name="fullName"
                      placeholder="ej. Santiago 'Santi' Rendón"
                      required
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                </div>

                {/* Email & WhatsApp Direct */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-label-md text-label-md text-on-surface"
                      htmlFor="email"
                    >
                      Correo electrónico <span className="text-primary">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-3.5 text-secondary text-[20px] pointer-events-none">
                        mail
                      </span>
                      <input
                        className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md pl-11 pr-4 py-2.5 rounded-lg focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all placeholder:text-secondary/60"
                        id="email"
                        name="email"
                        placeholder="santi@skatementor.co"
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <label
                        className="font-label-md text-label-md text-on-surface"
                        htmlFor="whatsapp"
                      >
                        Número de WhatsApp <span className="text-primary">*</span>
                      </label>
                      <span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-tertiary inline-block animate-pulse" />
                        Contacto directo
                      </span>
                    </div>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-3.5 text-tertiary text-[20px] pointer-events-none">
                        chat
                      </span>
                      <input
                        className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md pl-11 pr-4 py-2.5 rounded-lg focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-tertiary transition-all placeholder:text-secondary/60"
                        id="whatsapp"
                        name="whatsapp"
                        placeholder="+57 300 123 4567"
                        required
                        type="tel"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                      />
                    </div>
                    <span className="font-body-sm text-body-sm text-secondary">
                      Incluye código de país para habilitar el enlace directo{" "}
                      <code>wa.me</code>.
                    </span>
                  </div>
                </div>

                {/* Location & Spots */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-label-md text-label-md text-on-surface"
                    htmlFor="locationSpots"
                  >
                    Ciudad y Spots habituales{" "}
                    <span className="text-primary">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3.5 text-secondary text-[20px] pointer-events-none">
                      pin_drop
                    </span>
                    <input
                      className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md pl-11 pr-4 py-2.5 rounded-lg focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all placeholder:text-secondary/60"
                      id="locationSpots"
                      name="locationSpots"
                      placeholder="ej. Barranquilla - Skatepark Villa Carolina, Parque Venezuela, Malecón"
                      required
                      type="text"
                      value={locationSpots}
                      onChange={(e) => setLocationSpots(e.target.value)}
                    />
                  </div>
                  <span className="font-body-sm text-body-sm text-secondary">
                    Escribe las plazas, bowls o parques públicos donde dictas tus sesiones prácticas.
                  </span>
                </div>
              </div>

              {/* SECTION 2: Características y Especialidad */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                <div className="flex items-center gap-space-sm pb-space-sm">
                  <span className="w-7 h-7 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-headline-md text-headline-md">
                    2
                  </span>
                  <div>
                    <h2 className="font-headline-md text-headline-md text-on-surface">
                      Características y Especialidad
                    </h2>
                    <p className="font-body-sm text-body-sm text-secondary">
                      Define tus disciplinas fuertes, target de alumnos y el valor por hora de instrucción.
                    </p>
                  </div>
                </div>

                {/* Modalidades */}
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-md text-label-md text-on-surface">
                    Modalidades que enseñas (marca todas las que apliquen){" "}
                    <span className="text-primary">*</span>
                  </label>
                  <div className="flex flex-wrap gap-space-xs pt-1">
                    {DISCIPLINE_OPTIONS.map((item) => {
                      const isChecked = selectedDisciplines.includes(item.value);
                      return (
                        <label key={item.value} className="cursor-pointer">
                          <input
                            checked={isChecked}
                            className="sr-only"
                            name="disciplines"
                            type="checkbox"
                            value={item.value}
                            onChange={() => toggleDiscipline(item.value)}
                          />
                          <div
                            className={`px-space-md py-2 rounded-lg font-label-md text-label-md transition-colors flex items-center gap-1.5 shadow-sm ${
                              isChecked
                                ? "bg-primary-fixed text-on-primary-fixed-variant"
                                : "bg-surface-container-low text-secondary hover:bg-surface-container"
                            }`}
                          >
                            <span className="material-symbols-outlined text-[16px]">
                              {item.icon}
                            </span>
                            <span>{item.label}</span>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Experience & Target Level & Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-xs">
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-label-md text-label-md text-on-surface"
                      htmlFor="experienceYears"
                    >
                      Años patinando <span className="text-primary">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <select
                        className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md px-3.5 py-2.5 rounded-lg focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
                        id="experienceYears"
                        name="experienceYears"
                        required
                        value={experienceYears}
                        onChange={(e) => setExperienceYears(e.target.value)}
                      >
                        <option disabled value="">
                          Seleccionar...
                        </option>
                        <option value="1-3">1 a 3 años</option>
                        <option value="4-6">4 a 6 años</option>
                        <option value="7+">7+ años (Veterano)</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 text-secondary text-[20px] pointer-events-none">
                        expand_more
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-label-md text-label-md text-on-surface"
                      htmlFor="studentLevel"
                    >
                      Nivel aceptado <span className="text-primary">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <select
                        className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md px-3.5 py-2.5 rounded-lg focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
                        id="studentLevel"
                        name="studentLevel"
                        required
                        value={studentLevel}
                        onChange={(e) => setStudentLevel(e.target.value)}
                      >
                        <option disabled value="">
                          Seleccionar...
                        </option>
                        <option value="all">Todos los niveles</option>
                        <option value="beginner">Solo Principiantes</option>
                        <option value="intermediate">
                          Intermedio y Perfeccionamiento
                        </option>
                        <option value="advanced">Avanzado / Pro Prep</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 text-secondary text-[20px] pointer-events-none">
                        expand_more
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-label-md text-label-md text-on-surface"
                      htmlFor="hourlyRate"
                    >
                      Tarifa por hora (COP){" "}
                      <span className="text-primary">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-3.5 font-headline-md text-headline-md text-secondary select-none">
                        $
                      </span>
                      <input
                        className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md pl-9 pr-4 py-2.5 rounded-lg focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all placeholder:text-secondary/60"
                        id="hourlyRate"
                        max={150000}
                        min={15000}
                        name="hourlyRate"
                        placeholder="45.000"
                        required
                        step={5000}
                        type="number"
                        value={hourlyRate}
                        onChange={(e) => setHourlyRate(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 3: Perfil y Presentación */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                <div className="flex items-center gap-space-sm pb-space-sm">
                  <span className="w-7 h-7 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-headline-md text-headline-md">
                    3
                  </span>
                  <div>
                    <h2 className="font-headline-md text-headline-md text-on-surface">
                      Perfil y Presentación
                    </h2>
                    <p className="font-body-sm text-body-sm text-secondary">
                      Describe tu enfoque didáctico y carga tu fotografía para almacenamiento en bucket S3.
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label
                      className="font-label-md text-label-md text-on-surface"
                      htmlFor="bio"
                    >
                      Breve biografía y metodología de enseñanza{" "}
                      <span className="text-primary">*</span>
                    </label>
                    <span className="font-label-sm text-label-sm text-secondary">
                      {bio.length} / 450
                    </span>
                  </div>
                  <textarea
                    className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md p-3.5 rounded-lg focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all placeholder:text-secondary/60 resize-none"
                    id="bio"
                    maxLength={450}
                    name="bio"
                    placeholder="Cuéntale a tus estudiantes cómo es una sesión contigo: calentamiento, postura, equilibrio, pérdida del miedo a caer y progreso técnico paso a paso..."
                    required
                    rows={4}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                </div>

                {/* S3 Photo Upload */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-label-md text-label-md text-on-surface"
                    htmlFor="fileInput"
                  >
                    Foto de Perfil / Foto patinando en spot{" "}
                    <span className="text-primary">*</span>
                  </label>
                  <label
                    className="relative bg-surface-container-low hover:bg-surface-container transition-colors rounded-xl p-space-lg flex flex-col items-center justify-center text-center cursor-pointer group"
                    htmlFor="fileInput"
                  >
                    <input
                      accept="image/jpeg,image/png,image/webp"
                      className="hidden"
                      id="fileInput"
                      name="avatarPhoto"
                      type="file"
                      onChange={handleFileSelect}
                    />
                    <div className="w-14 h-14 rounded-full bg-surface-container-highest group-hover:bg-primary-fixed flex items-center justify-center text-primary transition-colors mb-space-sm shadow-sm">
                      <span className="material-symbols-outlined text-[28px]">
                        cloud_upload
                      </span>
                    </div>
                    <p className="font-headline-md text-headline-md text-on-surface">
                      Haz clic o arrastra tu foto aquí
                    </p>
                    <p className="font-body-sm text-body-sm text-secondary mt-1">
                      Formatos permitidos: JPG, PNG, WEBP (Máx. 5MB)
                    </p>

                    <div className="mt-space-md inline-flex items-center gap-1.5 px-space-md py-1 rounded-full bg-surface-container-lowest text-secondary font-label-sm text-label-sm shadow-sm">
                      <span className="material-symbols-outlined text-[14px] text-tertiary">
                        lock
                      </span>
                      <span>Subida optimizada directa a Amazon S3 Bucket</span>
                    </div>

                    {fileName && (
                      <div className="mt-space-md flex flex-col items-center gap-2">
                        <div className="w-20 h-20 rounded-full overflow-hidden shadow-md">
                          <img
                            alt="Vista previa de foto subida"
                            className="w-full h-full object-cover"
                            src={previewUrl}
                          />
                        </div>
                        <span className="font-label-sm text-label-sm text-primary font-bold">
                          {fileName}
                        </span>
                      </div>
                    )}
                  </label>
                </div>

                {/* Instagram / Trick Video URL */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-label-md text-label-md text-on-surface"
                    htmlFor="socialVideoUrl"
                  >
                    Enlace a video de trucos o perfil de Instagram{" "}
                    <span className="text-secondary font-normal">(Opcional)</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3.5 text-secondary text-[20px] pointer-events-none">
                      smart_display
                    </span>
                    <input
                      className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md pl-11 pr-4 py-2.5 rounded-lg focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all placeholder:text-secondary/60"
                      id="socialVideoUrl"
                      name="socialVideoUrl"
                      placeholder="https://instagram.com/tu_usuario o YouTube reel"
                      type="url"
                      value={socialVideoUrl}
                      onChange={(e) => setSocialVideoUrl(e.target.value)}
                    />
                  </div>
                  <span className="font-body-sm text-body-sm text-secondary">
                    Añadir tu contenido en acción duplica la tasa de contacto de alumnos.
                  </span>
                </div>
              </div>

              {/* Actions & CTA Row */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-xs">
                <Link
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-3 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container-low font-headline-md text-headline-md transition-all shadow-sm order-2 sm:order-1 text-center"
                  href="/"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    arrow_back
                  </span>
                  <span>Cancelar / Volver al catálogo</span>
                </Link>

                <button
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-space-xl py-3.5 rounded-lg text-on-primary font-headline-md text-headline-md transition-all shadow-md hover:shadow-lg order-1 sm:order-2 cursor-pointer ${
                    isSubmitted
                      ? "bg-tertiary"
                      : "bg-primary hover:bg-primary-container"
                  } ${isSubmitting ? "opacity-75" : ""}`}
                  disabled={isSubmitting || isSubmitted}
                  type="submit"
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined animate-spin text-[20px]">
                        progress_activity
                      </span>
                      <span>Guardando en MySQL &amp; S3...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <span>¡Perfil Publicado!</span>
                      <span className="material-symbols-outlined text-[20px]">
                        done_all
                      </span>
                    </>
                  ) : (
                    <>
                      <span>Publicar mi perfil de Skater</span>
                      <span className="material-symbols-outlined text-[20px]">
                        check_circle
                      </span>
                    </>
                  )}
                </button>
              </div>

              {/* Async Success Indicator Banner */}
              {isSubmitted && (
                <div
                  className="rounded-xl bg-tertiary-container p-space-md text-on-tertiary-container flex items-center gap-space-md shadow-md animate-pulse"
                  id="statusAlert"
                >
                  <span className="material-symbols-outlined text-[28px]">
                    rocket_launch
                  </span>
                  <div className="flex flex-col">
                    <span className="font-headline-md text-headline-md font-bold">
                      ¡Registro Exitoso!
                    </span>
                    <span className="font-body-sm text-body-sm">
                      Tu información ha sido sincronizada con el motor MySQL y tu foto está en S3. Redirigiendo a tu perfil...
                    </span>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Strategic Sidecar */}
          <div className="lg:col-span-4 flex flex-col gap-space-lg lg:sticky lg:top-24">
            {/* Quick Preview Card Mockup */}
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                  Vista previa en Catálogo
                </span>
                <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">
                  Borrador
                </span>
              </div>

              <div className="bg-surface-container-low rounded-lg p-space-md flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-md">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-highest shrink-0 shadow-sm">
                    <img
                      alt="Vista previa del instructor"
                      className="w-full h-full object-cover"
                      src={previewUrl}
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="font-headline-md text-headline-md text-on-surface truncate">
                        {fullName.trim() || "Tu Nombre Aquí"}
                      </span>
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        verified
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-secondary truncate">
                      {locationSpots.trim() || "Barranquilla, Spot principal"}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mt-1">
                  <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm">
                    Street
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm">
                    Ollie Mastery
                  </span>
                </div>

                <div className="flex items-center justify-between pt-space-xs mt-1">
                  <span className="font-headline-md text-headline-md text-on-surface">
                    {formattedPrice}{" "}
                    <span className="font-body-sm text-body-sm text-secondary font-normal">
                      /hr
                    </span>
                  </span>
                  <button
                    className="px-3 py-1 rounded bg-tertiary text-on-tertiary font-label-md text-label-md flex items-center gap-1 shadow-sm"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      chat
                    </span>
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Instructor Advantages Bento */}
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
              <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[22px]">
                  lightbulb
                </span>
                <span>Consejos para Skaters</span>
              </h3>

              <div className="flex items-start gap-space-sm">
                <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center shrink-0 text-primary mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">
                    bolt
                  </span>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-on-surface">
                    Contacto 100% Directo
                  </h4>
                  <p className="font-body-sm text-body-sm text-secondary mt-0.5">
                    Los alumnos te contactan directamente al chat de WhatsApp. Puedes coordinar horarios y pagos sin demoras.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-space-sm">
                <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center shrink-0 text-tertiary mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">
                    money_off
                  </span>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-on-surface">
                    0% Comisión en Fase Beta
                  </h4>
                  <p className="font-body-sm text-body-sm text-secondary mt-0.5">
                    Como proyecto de impacto comunitario de la Universidad de la Costa (CUC), el 100% de la tarifa va para ti.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-space-sm">
                <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center shrink-0 text-primary mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">
                    photo_camera
                  </span>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-on-surface">
                    Fotos en Acción
                  </h4>
                  <p className="font-body-sm text-body-sm text-secondary mt-0.5">
                    Los perfiles con fotos patinando en rampas o escaleras reciben un 70% más de mensajes que fotos genéricas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-space-sm">
                <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center shrink-0 text-secondary mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">
                    verified_user
                  </span>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-on-surface">
                    Verificación Segura
                  </h4>
                  <p className="font-body-sm text-body-sm text-secondary mt-0.5">
                    Revisamos la consistencia de los datos para garantizar un ambiente seguro tanto para ti como para tus futuros alumnos.
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Accreditation Footer Badge */}
            <div className="rounded-xl p-space-md bg-surface-container-high text-on-surface-variant flex items-center gap-space-md shadow-sm">
              <span className="material-symbols-outlined text-[28px] text-primary shrink-0">
                school
              </span>
              <div className="flex flex-col">
                <span className="font-label-md text-label-md font-bold text-on-surface">
                  Iniciativa CUC Barranquilla
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Promoviendo el deporte urbano y la cultura del skateboarding en el Caribe.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}