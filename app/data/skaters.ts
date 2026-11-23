export interface TrickCategory {
  title: string;
  icon: "check_circle" | "bolt" | "architecture";
  highlighted?: boolean;
  items: string[];
}

export interface GalleryPhoto {
  imageUrl: string;
  tag?: string;
  tagColor?: "primary" | "secondary" | "tertiary";
  caption: string;
  wide?: boolean;
}

export interface StudentReview {
  studentName: string;
  subtitle: string;
  avatarUrl: string;
  comment: string;
  achievement: string;
  fullWidth?: boolean;
  rating?: number;
}

export interface PracticeSpot {
  name: string;
  badge: string;
  badgeColor: "tertiary" | "secondary" | "neutral";
  address: string;
  schedule: string;
}

export interface SkaterProfile {
  id: number;
  mentorCode: string;
  name: string;
  headline: string;
  experienceLabel: string;
  experienceYearsText: string;
  badgeTop: string;
  verifiedLabel: string;
  city: string;
  countryCity: string;
  price: number;
  priceFormatted: string;
  responseTime: string;
  rating: string;
  reviewsCount: number;
  modalities: string[];
  level: string;
  recommendedLevels: string;
  sessionDuration: string;
  sessionMode: string;
  bio: string;
  aboutParagraphs: string[];
  metrics: {
    hours: string;
    successLabel: string;
    successValue: string;
    injuries: string;
  };
  tricks: TrickCategory[];
  galleryCityLabel: string;
  galleryDescription: string;
  gallery: GalleryPhoto[];
  reviews: StudentReview[];
  spotsIntro: string;
  mapLocationQuery: string;
  mapPreviewUrl: string;
  spots: PracticeSpot[];
  whatsappUrl: string;
  whatsappScheduleUrl: string;
  imageUrl: string;
}

export const SKATERS: SkaterProfile[] = [
  {
    id: 1,
    mentorCode: "#SKM-BAQ-042",
    name: "Mateo Silva",
    headline: "Especialista en Street, Grind & Slide y Flatground Técnico",
    experienceLabel: "7 años de experiencia técnica",
    experienceYearsText: "7 años",
    badgeTop: "Pro Rider",
    verifiedLabel: "Pro Rider Verificado",
    city: "Barranquilla",
    countryCity: "Barranquilla, Colombia",
    price: 45000,
    priceFormatted: "$45.000",
    responseTime: "Respuesta en menos de 15 min",
    rating: "4.9",
    reviewsCount: 38,
    modalities: ["Street", "Grind & Slide"],
    level: "Intermedio",
    recommendedLevels: "Principiante (desde cero) e Intermedio",
    sessionDuration: "1 a 2 horas (recomendado 90 min por fatiga muscular)",
    sessionMode: "Clase 1 a 1 (Personalizada) o Dúo con amigo",
    bio: "Especialista en pop shuvits, 50-50 grinds y drop-ins con total seguridad en spots urbanos de la Costa.",
    aboutParagraphs: [
      "¡Buenas! Soy Mateo. Llevo más de 7 años rodando por el asfalto caribeño y compitiendo en circuitos urbanos del Atlántico. Mi objetivo como mentor es erradicar el miedo frustrante de las primeras caídas y convertir el aprendizaje en una experiencia segura, técnica y divertida.",
      "Mi método pedagógico no salta etapas: cada sesión de entrenamiento arranca con 15 minutos de movilidad articular y calentamiento específico para tobillos y rodillas, seguido de una lectura postural milimétrica del cuerpo sobre el lija (foot placement).",
      "Enseño la biomecánica de la caída segura (saber rodar y amortiguar sin meter muñecas rígidas) antes de forzar cualquier truco aéreo. A partir de esa confianza de acero, desglosamos cada truco paso a paso mediante video-análisis instantáneo en mi móvil en el mismo skatepark.",
    ],
    metrics: {
      hours: "140+",
      successValue: "98%",
      successLabel: "Ollie en clase 2",
      injuries: "0",
    },
    tricks: [
      {
        title: "Nivel 1: Flatground & Fundamentos",
        icon: "check_circle",
        highlighted: true,
        items: [
          "Ollie básico (Estático & En movimiento)",
          "Tic-Tac & Carving fluido",
          "Pop Shuvit (Frontside & Backside)",
          "Manuals & Control de equilibrio",
        ],
      },
      {
        title: "Nivel 2: Flips & Giros Técnicos",
        icon: "bolt",
        items: ["Kickflip sincronizado", "Heelflip", "Frontside 180 Ollie"],
      },
      {
        title: "Nivel 3: Obstáculos, Grinds & Rampas",
        icon: "architecture",
        items: [
          "Boardslide en riel bajo",
          "50-50 Grind en cajón (Ledge)",
          "Drop-in en bowl y quarters",
          "Rock to Fakie",
        ],
      },
    ],
    galleryCityLabel: "Barranquilla Spots",
    galleryDescription:
      "Sesiones reales impartidas en el Skatepark del Parque Venezuela y el Bowl de Villa Carolina.",
    gallery: [
      {
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC9qAqdnIou04Ubnl7XW3C8xyRhvgGs4rhFEzoqIc_NCUQgCuqyhqrXJX1ak-sg4Y-2vkcb_kvMcWmuWklCfSEXAJ8riC3L24DNY0hhczTde6Iw0-5tecGrCfVEELzmYqyF4eHqS9fb5iO-iBBdfurY7hRvSnL0h08tSsDo3SaRlIq5QatafPWIdEGCsRl4SITEGo1R1BjTMTxkPmdf3TbnGwtpWAIBAH9b6lmnj-A",
        tag: "Street",
        tagColor: "primary",
        caption: "Kickflip over concrete stairs · Parque Venezuela",
        wide: true,
      },
      {
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBkgz2-EZcsBuKL_bbB6IeMOmg8JrxAdds-z4ASkG1QsVu2VfCqy2h33HJDxNQEbGghCdXxcy5l_ztyXmU4lWCSL6OjxLsMTkZ6ifnYGY8j4yrJzI58KkiQKlO_o2gBzUcyoGSHePDt1_fEH5nMR-gZnttKScA51gYyX-TQMLGNOmTnEWaIOLROFEPhnovzbW8g8l2m3tVzINaCudcUVt-U2xnR3y0GpzsV0s3vtz0",
        tag: "Ledge Grind",
        tagColor: "secondary",
        caption: "50-50 en cajón alto",
      },
      {
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDU8d4Hx-IGyYCWpLi7eTYTINJhIbxfYhlm3dk5hp5lXEDLDPN1D0MIcumvkgHqfreP9Q-UzSvMlNz6qm8IsicNg42FSLv_y4AEhoZ5CQYGz3e8muvL67NxyJr1SQh5n4l0u3rK-aEGp7taK8mcW409FFADrd9PgEcVRzyuUOO_N0Ud1vXOPuC0xoiheh7X9727_fL37dU6qU-SKou7Pw8ie-f56cW-2-Nfb6J-t1o",
        caption: "Corrección postural personalizada",
      },
      {
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC6LMl0A0SA0YqS9AmhJJguXyvJHPZu1s3_GWVaO6DkSg4-CQt-hyaGt7TWLg15YCUDEd0YRfeAGUyZVPJG00TfGv3sRh3dlkNEyygtO_WJxnbHgfhWrriW5lGCsXP2hZN72T6YX1GC1c815vQMiA9uJuMcKR27fr1L8o4Eng-Y3YtPboID_YWX9fkqk5LUyVEZtPBNwTOOdlxpryggJBY9LyVU9AEvJzXO03iZQr0",
        tag: "Bowl & Rampa",
        tagColor: "tertiary",
        caption: "Clase práctica de drop-in en Villa Carolina",
        wide: true,
      },
    ],
    reviews: [
      {
        studentName: "Camilo Rojas",
        subtitle: "Estudiante CUC · Feb 2025",
        avatarUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC6WjEHiVmelUOh85XXWKhLH9vhvsRJQ90wsI5vXg0VfqJl0qB8wmskYasOmVjPao6ERu2vjNEAiE-n4WNTpvt6St5dHcYO12TNzwrrfhLV9N2Gigr1F7shIdGjety25MeAyK_SnZNYu866HRqlOUyctA-JVUHVhe2cP-B8URgNI0eScOGXR_hXKWQYDMOBKgK37lofatNho0U1SuNeq818tDcQrB8-PLaM862HuAg",
        comment:
          "Llevaba 6 meses viendo tutoriales en YouTube intentando el Ollie y solo me doblaba los tobillos. En solo dos clases con Mateo entendí el timing del raspado y el salto. ¡100% recomendado su método!",
        achievement: "Ollie limpio de 25cm",
      },
      {
        studentName: "Sofía Mendoza",
        subtitle: "Principiante · Ene 2025",
        avatarUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDH6220bktjOUEnhOB3-VipQ7z2Tk0YhUFAB0WmKDYYklBiJTqdY10ePbHYvXhFugW-2DunHbOkz5s5o5ZaGy4AGbDPsyhszLKGXcu-Ac5PDycZOVRr_zQHwHEpaW6gVT-57iK5mRAUNKjK8Q5p0_q0BvoB9dWx6cL2H72tFlnZhS1aExtOFRN8R5KdDnoHwjfh2hdlnH-JIKTd5H54SzxDLRmmSZuLHYr3llbDbvc",
        comment:
          "Tenía mucho miedo al drop-in en el bowl de Villa Carolina. Mateo me sostuvo la tabla, me enseñó a poner el peso adelante con seguridad y me transmitió una calma brutal. Cero golpes.",
        achievement: "Drop-in en rampa de 1.5m",
      },
      {
        studentName: "Andrés Gómez",
        subtitle: "Nivel Intermedio · Dic 2024",
        avatarUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA5_sZtjfJEPdRYZr734pVVnPdlDwQu4HVdRt24CYN33NjQtNjHkjtKW3HlEGFeTpj2mweAFSQnS-wBC2wR2g1eMzfXKtUQdB6WbQjpa-ATpWOes8epdloMRx1AiQ4a2rxA_uVqZLNGxX2_7ON75Zh3YGCd5J0Y8ZG2P69mUUlEduBlwI0i70WPiAOTqq_K2mgl2PFeLgy_TY3Xwq1-rL4gGRpRVBHz3Kwqs4LeU1U",
        comment:
          "Excelente mentor. Además de técnico, es muy puntual y te orienta sobre qué ruedas y lija comprar para las calles de Barranquilla sin gastar de más. Ya clavo el 50-50 con fluidez.",
        achievement: "50-50 Grind consistente",
        fullWidth: true,
      },
    ],
    spotsIntro:
      "Puntos de encuentro seguros con iluminación y superficie de concreto pulido en Barranquilla:",
    mapLocationQuery: "Parque Venezuela Skatepark, Barranquilla, Colombia",
    mapPreviewUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDa7t92qrxzDX-ru0GxFkmZhnuJSWFN4dvbul8s9Z26tg7GIfAIruqvqedA9gTEbADbtvKHbvVgBkDC-VA4EILfJ8MavaQk2LXeqLOce1m2Z8GDC5j3UZpvE318EEy3PJlHubuANryEf8yPl0j58MoY-i9zvnskPBsUbwLLpMxcPugBjYqMRuw5_OiofhfQnDgewBD98EkD5d49EzLunc-eoHKBoXoRdedDLy0EI1k",
    spots: [
      {
        name: "1. Skatepark Parque Venezuela",
        badge: "Spot Principal",
        badgeColor: "tertiary",
        address: "Cra. 43B con Calle 87 · Grinds, cajones y rampa",
        schedule: "Martes y Jueves: 4:30 PM - 7:00 PM",
      },
      {
        name: "2. Skatepark Villa Carolina",
        badge: "Bowl & Street",
        badgeColor: "secondary",
        address: "Calle 88 con Cra. 72 · Ideal para aprender curvas",
        schedule: "Sábados: 8:00 AM - 11:30 AM",
      },
      {
        name: "3. Plaza de la Paz (Plana)",
        badge: "Flatground",
        badgeColor: "neutral",
        address: "Piso liso ideal para primeros ollies",
        schedule: "Domingos: 4:00 PM - 6:30 PM",
      },
    ],
    whatsappUrl:
      "https://wa.me/573001234567?text=Hola%20Mateo,%20te%20vi%20en%20SkateMentor%20y%20me%20gustar%C3%ADa%20agendar%20una%20clase%20de%20skate",
    whatsappScheduleUrl:
      "https://wa.me/573001234567?text=Hola%20Mateo,%20quisiera%20consultar%20disponibilidad%20de%20horario%20para%20esta%20semana",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA0Gj1uQiQzoI91uZLt7oH4A2NpjL-fnjjaZaFm6Op4lYRFfAEf1S2z3PFrSsTEKZv6AkDhxvjl_EEDqV3hGozrTIMAusNJMhXk9hpNZWaKlG_shaCS_jZQ6WtIDqB38BaApLocvK4TXuHcgPWlR68PwSXwDZxHBlbbf1Ikd4jwNllVu1rRec3upPzCIkBg96r0pecTuZ6gQqozQvMHDFED6ZXw-yeIG5iwMlwWb8Q",
  },
  {
    id: 2,
    mentorCode: "#SKM-BOG-018",
    name: "Camila Rincón",
    headline: "Instructora de Bowl, Transiciones y Iniciación sin Miedo",
    experienceLabel: "Paciencia total con principiantes",
    experienceYearsText: "5 años",
    badgeTop: "5 años exp.",
    verifiedLabel: "Instructora Verificada",
    city: "Bogotá",
    countryCity: "Bogotá, Colombia",
    price: 40000,
    priceFormatted: "$40.000",
    responseTime: "Respuesta en menos de 20 min",
    rating: "4.9",
    reviewsCount: 29,
    modalities: ["Bowl", "Park"],
    level: "Iniciación",
    recommendedLevels: "Iniciación (desde cero) y Transición básica",
    sessionDuration: "1 a 1.5 horas personalizadas",
    sessionMode: "Clase 1 a 1 o Grupos pequeños (máx. 2)",
    bio: "Domina la velocidad, líneas de bowl y bombeo continuo. Metodología progresiva sin miedos ni lesiones.",
    aboutParagraphs: [
      "Hola, soy Camila. Llevo 5 años patinando bowls y parques de transición en Bogotá. Me especializo en acompañar a personas que se suben por primera vez a una tabla y quieren avanzar con seguridad.",
      "Trabajamos desde el equilibrio base, postura de pies (regular o goofy), empuje fluido y frenado controlado antes de entrar a rampas inclinadas.",
      "Cada clase incluye ejercicios de bombeo (pumping) y giros kickturn para que disfrutes el flujo del bowl desde las primeras semanas.",
    ],
    metrics: {
      hours: "110+",
      successValue: "96%",
      successLabel: "Drop-in sin miedo",
      injuries: "0",
    },
    tricks: [
      {
        title: "Nivel 1: Equilibrio & Control Base",
        icon: "check_circle",
        highlighted: true,
        items: [
          "Postura, empuje y frenado seguro",
          "Carving y giros cerrados",
          "Pumping en rampas suaves",
        ],
      },
      {
        title: "Nivel 2: Transiciones & Bowl",
        icon: "architecture",
        items: ["Kickturn Frontside y Backside", "Drop-in asistido", "Líneas continuas de bowl"],
      },
    ],
    galleryCityLabel: "Bogotá Spots",
    galleryDescription: "Clases en Skatepark Fontanar del Río y Parque El Virrey.",
    gallery: [
      {
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA0QHNOi8CVx2FGSOexQMLbuXMWZIcIXqj_36H9KAGfVmgFyF4gTFjw1iI9fyA4dBjPNEm6qN5h_hpGkGkdOTPDXE7ksM_-r5DxDfuFcmutBRh9XBR2w-UJAIal1jOQeNUlkjXzBBumSY02tZ3Am-4hNA6qg8mWlXxwq29rDPGJ-i1Xa60WTqtznIquwXCZW0RB8afzbgj2I0t1tIXGJSp7cmENh9F-7laHkrVh0sw",
        tag: "Bowl",
        tagColor: "primary",
        caption: "Sesión de transición y bombeo · Bogotá",
        wide: true,
      },
      {
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC6LMl0A0SA0YqS9AmhJJguXyvJHPZu1s3_GWVaO6DkSg4-CQt-hyaGt7TWLg15YCUDEd0YRfeAGUyZVPJG00TfGv3sRh3dlkNEyygtO_WJxnbHgfhWrriW5lGCsXP2hZN72T6YX1GC1c815vQMiA9uJuMcKR27fr1L8o4Eng-Y3YtPboID_YWX9fkqk5LUyVEZtPBNwTOOdlxpryggJBY9LyVU9AEvJzXO03iZQr0",
        tag: "Park",
        tagColor: "tertiary",
        caption: "Control de velocidad en rampa",
      },
    ],
    reviews: [
      {
        studentName: "Laura Pineda",
        subtitle: "Principiante · Feb 2025",
        avatarUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDH6220bktjOUEnhOB3-VipQ7z2Tk0YhUFAB0WmKDYYklBiJTqdY10ePbHYvXhFugW-2DunHbOkz5s5o5ZaGy4AGbDPsyhszLKGXcu-Ac5PDycZOVRr_zQHwHEpaW6gVT-57iK5mRAUNKjK8Q5p0_q0BvoB9dWx6cL2H72tFlnZhS1aExtOFRN8R5KdDnoHwjfh2hdlnH-JIKTd5H54SzxDLRmmSZuLHYr3llbDbvc",
        comment:
          "Súper paciente y clara para explicar. En la primera clase ya estaba rodando sola por todo el parque.",
        achievement: "Equilibrio y giros fluidos",
        fullWidth: true,
      },
    ],
    spotsIntro: "Skateparks seguros con zonas de iniciación en Bogotá:",
    mapLocationQuery: "Skatepark Fontanar del Rio, Bogota, Colombia",
    mapPreviewUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDa7t92qrxzDX-ru0GxFkmZhnuJSWFN4dvbul8s9Z26tg7GIfAIruqvqedA9gTEbADbtvKHbvVgBkDC-VA4EILfJ8MavaQk2LXeqLOce1m2Z8GDC5j3UZpvE318EEy3PJlHubuANryEf8yPl0j58MoY-i9zvnskPBsUbwLLpMxcPugBjYqMRuw5_OiofhfQnDgewBD98EkD5d49EzLunc-eoHKBoXoRdedDLy0EI1k",
    spots: [
      {
        name: "1. Skatepark Fontanar del Río",
        badge: "Spot Principal",
        badgeColor: "tertiary",
        address: "Suba · Bowl y zona plana amplia",
        schedule: "Sábados y Domingos: 9:00 AM - 1:00 PM",
      },
      {
        name: "2. Parque El Virrey (Zona Plana)",
        badge: "Iniciación",
        badgeColor: "secondary",
        address: "Calle 88 · Superficie lisa para primeros pasos",
        schedule: "Miércoles y Viernes: 3:30 PM - 6:00 PM",
      },
    ],
    whatsappUrl:
      "https://api.whatsapp.com/send?phone=573007654321&text=Hola%20Camila,%20vi%20tu%20perfil%20en%20SkateMentor%20y%20quisiera%20agendar%20una%20clase",
    whatsappScheduleUrl:
      "https://api.whatsapp.com/send?phone=573007654321&text=Hola%20Camila,%20quisiera%20consultar%20horarios%20disponibles",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA0QHNOi8CVx2FGSOexQMLbuXMWZIcIXqj_36H9KAGfVmgFyF4gTFjw1iI9fyA4dBjPNEm6qN5h_hpGkGkdOTPDXE7ksM_-r5DxDfuFcmutBRh9XBR2w-UJAIal1jOQeNUlkjXzBBumSY02tZ3Am-4hNA6qg8mWlXxwq29rDPGJ-i1Xa60WTqtznIquwXCZW0RB8afzbgj2I0t1tIXGJSp7cmENh9F-7laHkrVh0sw",
  },
  {
    id: 3,
    mentorCode: "#SKM-MDE-009",
    name: "Daniel Mejía",
    headline: "Pro Rider en Grind & Slide, Barandas y Street Técnico",
    experienceLabel: "Finalista nacional en Street League",
    experienceYearsText: "9 años",
    badgeTop: "Pro Rider",
    verifiedLabel: "Pro Rider Verificado",
    city: "Medellín",
    countryCity: "Medellín, Colombia",
    price: 65000,
    priceFormatted: "$65.000",
    responseTime: "Respuesta en menos de 15 min",
    rating: "5.0",
    reviewsCount: 44,
    modalities: ["Grind & Slide", "Street"],
    level: "Avanzado",
    recommendedLevels: "Intermedio y Avanzado / Competencia",
    sessionDuration: "1.5 a 2 horas intensivas",
    sessionMode: "Clase 1 a 1 con análisis en video",
    bio: "Perfecciona boardslides, smith grinds y combos técnicos en barandas con feedback de video en vivo.",
    aboutParagraphs: [
      "Soy Daniel Mejía, patinador profesional en Medellín con más de 9 años compitiendo en circuitos nacionales de Street.",
      "Mis sesiones están diseñadas para riders que ya dominan los fundamentos y quieren desbloquear trucos en rieles, cajones altos y escaleras con técnica limpia y control de caída.",
    ],
    metrics: {
      hours: "210+",
      successValue: "95%",
      successLabel: "Grinds consistentes",
      injuries: "0",
    },
    tricks: [
      {
        title: "Nivel Intermedio: Cajones & Rieles Bajos",
        icon: "architecture",
        highlighted: true,
        items: ["50-50 Grind", "Boardslide", "5-0 Grind", "Noseslide"],
      },
      {
        title: "Nivel Avanzado: Combos & Handrails",
        icon: "bolt",
        items: ["Smith Grind", "Feeble Grind", "Kickflip to Boardslide"],
      },
    ],
    galleryCityLabel: "Medellín Spots",
    galleryDescription: "Entrenamientos en Skatepark Ciudad del Río y Puente de la 4 Sur.",
    gallery: [
      {
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAXdHezLpob1184jtZQwEcOicB89Yr0F4Tq402Lzy-JYMh_v6DbRa0O5nm6r2Gqz-0x1CGitII6arGe-rho85LXIG_rMDSwJWLlz9di9bWNV01w-eimFqXI4UoGuHy41EKOcTfTLXfFOdShh-hivNI8QcCrzkd7uy5oomfMNhovKiWw_rNGU9IYul0UONN-itA8DHEVUMmaSXnkPY8p-sSVLX5hmsVtSaP9M2t1F00",
        tag: "Grind & Slide",
        tagColor: "primary",
        caption: "Handrail session · Medellín",
        wide: true,
      },
      {
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBkgz2-EZcsBuKL_bbB6IeMOmg8JrxAdds-z4ASkG1QsVu2VfCqy2h33HJDxNQEbGghCdXxcy5l_ztyXmU4lWCSL6OjxLsMTkZ6ifnYGY8j4yrJzI58KkiQKlO_o2gBzUcyoGSHePDt1_fEH5nMR-gZnttKScA51gYyX-TQMLGNOmTnEWaIOLROFEPhnovzbW8g8l2m3tVzINaCudcUVt-U2xnR3y0GpzsV0s3vtz0",
        tag: "Ledge",
        tagColor: "secondary",
        caption: "Técnica de encaje en cajón",
      },
    ],
    reviews: [
      {
        studentName: "Mateo Restrepo",
        subtitle: "Rider Intermedio · Ene 2025",
        avatarUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA5_sZtjfJEPdRYZr734pVVnPdlDwQu4HVdRt24CYN33NjQtNjHkjtKW3HlEGFeTpj2mweAFSQnS-wBC2wR2g1eMzfXKtUQdB6WbQjpa-ATpWOes8epdloMRx1AiQ4a2rxA_uVqZLNGxX2_7ON75Zh3YGCd5J0Y8ZG2P69mUUlEduBlwI0i70WPiAOTqq_K2mgl2PFeLgy_TY3Xwq1-rL4gGRpRVBHz3Kwqs4LeU1U",
        comment:
          "Con los videos en cámara lenta que graba Daniel corregí el hombro en el boardslide en una sola tarde.",
        achievement: "Boardslide completo en riel",
        fullWidth: true,
      },
    ],
    spotsIntro: "Spots técnicos de street en Medellín:",
    mapLocationQuery: "Skatepark Puente de la 4 Sur, Medellin, Colombia",
    mapPreviewUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDa7t92qrxzDX-ru0GxFkmZhnuJSWFN4dvbul8s9Z26tg7GIfAIruqvqedA9gTEbADbtvKHbvVgBkDC-VA4EILfJ8MavaQk2LXeqLOce1m2Z8GDC5j3UZpvE318EEy3PJlHubuANryEf8yPl0j58MoY-i9zvnskPBsUbwLLpMxcPugBjYqMRuw5_OiofhfQnDgewBD98EkD5d49EzLunc-eoHKBoXoRdedDLy0EI1k",
    spots: [
      {
        name: "1. Skatepark Puente de la 4 Sur",
        badge: "Spot Principal",
        badgeColor: "tertiary",
        address: "El Poblado · Cajones, rieles y escaleras",
        schedule: "Martes y Jueves: 5:00 PM - 8:00 PM",
      },
      {
        name: "2. Ciudad del Río",
        badge: "Street & Flat",
        badgeColor: "secondary",
        address: "Av. Las Vegas · Piso pulido y ledges",
        schedule: "Sábados: 9:00 AM - 12:00 M",
      },
    ],
    whatsappUrl:
      "https://api.whatsapp.com/send?phone=573119876543&text=Hola%20Daniel,%20vi%20tu%20perfil%20en%20SkateMentor%20y%20quisiera%20agendar%20una%20clase",
    whatsappScheduleUrl:
      "https://api.whatsapp.com/send?phone=573119876543&text=Hola%20Daniel,%20quisiera%20consultar%20horarios%20disponibles",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAXdHezLpob1184jtZQwEcOicB89Yr0F4Tq402Lzy-JYMh_v6DbRa0O5nm6r2Gqz-0x1CGitII6arGe-rho85LXIG_rMDSwJWLlz9di9bWNV01w-eimFqXI4UoGuHy41EKOcTfTLXfFOdShh-hivNI8QcCrzkd7uy5oomfMNhovKiWw_rNGU9IYul0UONN-itA8DHEVUMmaSXnkPY8p-sSVLX5hmsVtSaP9M2t1F00",
  },
  {
    id: 4,
    mentorCode: "#SKM-BAQ-051",
    name: "Valeria Ortiz",
    headline: "Fundamentos de Street, Freestyle y Clases para Niños y Jóvenes",
    experienceLabel: "Fundamentos para niños y jóvenes",
    experienceYearsText: "4 años",
    badgeTop: "4 años exp.",
    verifiedLabel: "Instructora Verificada",
    city: "Barranquilla",
    countryCity: "Barranquilla, Colombia",
    price: 35000,
    priceFormatted: "$35.000",
    responseTime: "Respuesta en menos de 15 min",
    rating: "4.8",
    reviewsCount: 22,
    modalities: ["Street", "Freestyle"],
    level: "Iniciación",
    recommendedLevels: "Niños, jóvenes y adultos principiantes",
    sessionDuration: "1 hora dinámica",
    sessionMode: "Clase 1 a 1 o Familiar",
    bio: "Aprende el Ollie perfecto, equilibrio dinámico y cómo caer correctamente para evitar cualquier golpe.",
    aboutParagraphs: [
      "¡Hola! Soy Valeria. Me apasiona enseñar las bases del skateboarding en Barranquilla con dinámicas divertidas y seguras para niños, jóvenes y principiantes.",
      "Nos enfocamos en perder el miedo, dominar el balance sobre la tabla, hacer tus primeros Ollies y trucos de freestyle en piso plano.",
    ],
    metrics: {
      hours: "95+",
      successValue: "99%",
      successLabel: "Alumnos satisfechos",
      injuries: "0",
    },
    tricks: [
      {
        title: "Nivel 1: Primeros Pasos & Seguridad",
        icon: "check_circle",
        highlighted: true,
        items: ["Equilibrio y empuje", "Giros y frenado", "Ollie estático y rodando", "Caveman y Boneless"],
      },
    ],
    galleryCityLabel: "Barranquilla Spots",
    galleryDescription: "Clases en Parque Venezuela y Malecón del Río.",
    gallery: [
      {
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDt9KTkCFVVyymlbL9gzhHdoo7BLNqy_g5pJ3p171QJjG9f7zICuB0X2wp7WgEwL7-DcxX6uf_oQB4JeW0VAobKjGqQBBlJdidgEusaey4RuO4l-IZSEXGSG46YYvkAhmDsvcBQmE8UqwxCcZ5eyzdk8NvF5z7xfmfEjwwvAejiESogbfngx-cWp78aAR4sdsaUV0y0Mm6w-pVQx_qepno-BE02SHcVWA6H0Drk4Hg",
        tag: "Street",
        tagColor: "primary",
        caption: "Fundamentos en Parque Venezuela",
        wide: true,
      },
    ],
    reviews: [
      {
        studentName: "Carolina Díaz",
        subtitle: "Mamá de alumno · Feb 2025",
        avatarUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDH6220bktjOUEnhOB3-VipQ7z2Tk0YhUFAB0WmKDYYklBiJTqdY10ePbHYvXhFugW-2DunHbOkz5s5o5ZaGy4AGbDPsyhszLKGXcu-Ac5PDycZOVRr_zQHwHEpaW6gVT-57iK5mRAUNKjK8Q5p0_q0BvoB9dWx6cL2H72tFlnZhS1aExtOFRN8R5KdDnoHwjfh2hdlnH-JIKTd5H54SzxDLRmmSZuLHYr3llbDbvc",
        comment:
          "Mi hijo de 10 años avanzó muchísimo con Valeria. Siempre pendiente del casco y las protecciones.",
        achievement: "Primer Ollie en movimiento",
        fullWidth: true,
      },
    ],
    spotsIntro: "Puntos de encuentro seguros en Barranquilla:",
    mapLocationQuery: "Parque Venezuela Skatepark, Barranquilla, Colombia",
    mapPreviewUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDa7t92qrxzDX-ru0GxFkmZhnuJSWFN4dvbul8s9Z26tg7GIfAIruqvqedA9gTEbADbtvKHbvVgBkDC-VA4EILfJ8MavaQk2LXeqLOce1m2Z8GDC5j3UZpvE318EEy3PJlHubuANryEf8yPl0j58MoY-i9zvnskPBsUbwLLpMxcPugBjYqMRuw5_OiofhfQnDgewBD98EkD5d49EzLunc-eoHKBoXoRdedDLy0EI1k",
    spots: [
      {
        name: "1. Skatepark Parque Venezuela",
        badge: "Spot Principal",
        badgeColor: "tertiary",
        address: "Cra. 43B con Calle 87 · Zona plana y rampas bajas",
        schedule: "Lunes, Miércoles y Viernes: 4:00 PM - 6:30 PM",
      },
    ],
    whatsappUrl:
      "https://api.whatsapp.com/send?phone=573003456789&text=Hola%20Valeria,%20vi%20tu%20perfil%20en%20SkateMentor%20y%20quisiera%20agendar%20una%20clase",
    whatsappScheduleUrl:
      "https://api.whatsapp.com/send?phone=573003456789&text=Hola%20Valeria,%20quisiera%20consultar%20horarios%20disponibles",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDt9KTkCFVVyymlbL9gzhHdoo7BLNqy_g5pJ3p171QJjG9f7zICuB0X2wp7WgEwL7-DcxX6uf_oQB4JeW0VAobKjGqQBBlJdidgEusaey4RuO4l-IZSEXGSG46YYvkAhmDsvcBQmE8UqwxCcZ5eyzdk8NvF5z7xfmfEjwwvAejiESogbfngx-cWp78aAR4sdsaUV0y0Mm6w-pVQx_qepno-BE02SHcVWA6H0Drk4Hg",
  },
  {
    id: 5,
    mentorCode: "#SKM-MDE-023",
    name: "Carlos Varela",
    headline: "Especialista en Park, Quarters y Fluidez en Rampas",
    experienceLabel: "8 años de competencia regional",
    experienceYearsText: "8 años",
    badgeTop: "Pro Rider",
    verifiedLabel: "Pro Rider Verificado",
    city: "Medellín",
    countryCity: "Medellín, Colombia",
    price: 50000,
    priceFormatted: "$50.000",
    responseTime: "Respuesta en menos de 20 min",
    rating: "4.9",
    reviewsCount: 31,
    modalities: ["Park", "Bowl"],
    level: "Intermedio",
    recommendedLevels: "Principiante avanzado e Intermedio",
    sessionDuration: "1.5 horas",
    sessionMode: "Clase 1 a 1 en Skatepark",
    bio: "Control de quarters, transferencias entre rampas y velocidad para dominar cualquier Skatepark del país.",
    aboutParagraphs: [
      "Soy Carlos Varela, skater de transición y park en Medellín con 8 años de trayectoria.",
      "Te enseño a leer las líneas del skatepark, ganar velocidad sin perder estabilidad y ejecutar trucos en el coping como Rock to Fakie, Axle Stall y airs básicos.",
    ],
    metrics: {
      hours: "160+",
      successValue: "97%",
      successLabel: "Dominio de quarters",
      injuries: "0",
    },
    tricks: [
      {
        title: "Park & Transiciones",
        icon: "architecture",
        highlighted: true,
        items: ["Drop-in en quarters", "Rock to Fakie", "Axle Stall", "Transferencias entre rampas"],
      },
    ],
    galleryCityLabel: "Medellín Spots",
    galleryDescription: "Sesiones en Skatepark Estadio y Ciudad del Río.",
    gallery: [
      {
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAIeIJwTYUYWsGytwv4I0dSHq2qKXn-lipPy1OFn1U3eataRYyLPk9XFBAhGAjJ4Jdb63N-mUWxikKqHlyT9XzDRgR6J3TjqIoIARh8N57LF1s-EHVHwIncp3LRGOVP8bMI3cZ4VU37l8DH3P-6H1lWZ3d245j6I8BmF2f72TzGO-NDKTH8yH2vSGKsBAg6Ew5AEP0s6WHXlBNYRuksoFCxlq4-mqNGiHHbzFcOnZk",
        tag: "Park",
        tagColor: "primary",
        caption: "Coping y control de quarter · Medellín",
        wide: true,
      },
    ],
    reviews: [
      {
        studentName: "Sebastián López",
        subtitle: "Alumno Park · Ene 2025",
        avatarUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC6WjEHiVmelUOh85XXWKhLH9vhvsRJQ90wsI5vXg0VfqJl0qB8wmskYasOmVjPao6ERu2vjNEAiE-n4WNTpvt6St5dHcYO12TNzwrrfhLV9N2Gigr1F7shIdGjety25MeAyK_SnZNYu866HRqlOUyctA-JVUHVhe2cP-B8URgNI0eScOGXR_hXKWQYDMOBKgK37lofatNho0U1SuNeq818tDcQrB8-PLaM862HuAg",
        comment:
          "Excelente energía y claridad para explicar el Rock to Fakie. Súper recomendado.",
        achievement: "Rock to Fakie limpio",
        fullWidth: true,
      },
    ],
    spotsIntro: "Skateparks con rampas y bowls en Medellín:",
    mapLocationQuery: "Skatepark Estadio, Medellin, Colombia",
    mapPreviewUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDa7t92qrxzDX-ru0GxFkmZhnuJSWFN4dvbul8s9Z26tg7GIfAIruqvqedA9gTEbADbtvKHbvVgBkDC-VA4EILfJ8MavaQk2LXeqLOce1m2Z8GDC5j3UZpvE318EEy3PJlHubuANryEf8yPl0j58MoY-i9zvnskPBsUbwLLpMxcPugBjYqMRuw5_OiofhfQnDgewBD98EkD5d49EzLunc-eoHKBoXoRdedDLy0EI1k",
    spots: [
      {
        name: "1. Skatepark Unidad Deportiva Atanasio",
        badge: "Spot Principal",
        badgeColor: "tertiary",
        address: "Estadio · Bowls y quarters de concreto",
        schedule: "Sábados y Domingos: 8:30 AM - 12:00 M",
      },
    ],
    whatsappUrl:
      "https://api.whatsapp.com/send?phone=573155554321&text=Hola%20Carlos,%20vi%20tu%20perfil%20en%20SkateMentor%20y%20quisiera%20agendar%20una%20clase",
    whatsappScheduleUrl:
      "https://api.whatsapp.com/send?phone=573155554321&text=Hola%20Carlos,%20quisiera%20consultar%20horarios%20disponibles",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIeIJwTYUYWsGytwv4I0dSHq2qKXn-lipPy1OFn1U3eataRYyLPk9XFBAhGAjJ4Jdb63N-mUWxikKqHlyT9XzDRgR6J3TjqIoIARh8N57LF1s-EHVHwIncp3LRGOVP8bMI3cZ4VU37l8DH3P-6H1lWZ3d245j6I8BmF2f72TzGO-NDKTH8yH2vSGKsBAg6Ew5AEP0s6WHXlBNYRuksoFCxlq4-mqNGiHHbzFcOnZk",
  },
  {
    id: 6,
    mentorCode: "#SKM-BOG-034",
    name: "Santiago Giraldo",
    headline: "Especialista en Flip Tricks, Gaps y Control Urbano",
    experienceLabel: "Especialista en flip tricks y gaps",
    experienceYearsText: "6 años",
    badgeTop: "6 años exp.",
    verifiedLabel: "Mentor Verificado",
    city: "Bogotá",
    countryCity: "Bogotá, Colombia",
    price: 55000,
    priceFormatted: "$55.000",
    responseTime: "Respuesta en menos de 15 min",
    rating: "4.9",
    reviewsCount: 27,
    modalities: ["Street", "Grind & Slide"],
    level: "Avanzado",
    recommendedLevels: "Intermedio y Avanzado",
    sessionDuration: "1.5 horas técnicas",
    sessionMode: "Clase 1 a 1",
    bio: "Kickflips consistentes, heelflips y control en desniveles urbanos. Clases intensivas para desbloquear trucos.",
    aboutParagraphs: [
      "Soy Santiago Giraldo, skater bogotano enfocado en técnica de flatground avanzado, flip tricks y gaps urbanos.",
      "Analizamos el flick de tu pie delantero, el pop y la recepción en el aire para que caigas tus trucos con consistencia.",
    ],
    metrics: {
      hours: "130+",
      successValue: "94%",
      successLabel: "Kickflip desbloqueado",
      injuries: "0",
    },
    tricks: [
      {
        title: "Flip Tricks & Desniveles",
        icon: "bolt",
        highlighted: true,
        items: ["Kickflip", "Heelflip", "Varial Kickflip", "Ollie y Kickflip en escaleras"],
      },
    ],
    galleryCityLabel: "Bogotá Spots",
    galleryDescription: "Sesiones en Skatepark Tercera Milenio y El Tunal.",
    gallery: [
      {
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAMAgwq3WW1J5BiAtSIC_zpjLGtkRx5VKw-9P9Y3n1S_f275MCPSI-KpPbOtmtE_eV_5NtPvjMKhW1xuUw60BRy1oaeZyYib0KDoAKgZpuQYJdoWH_HKaa85NEGPAD5V0m8zhnU9d2SthiWz6z0WGrkTHIdkecQ6AtLbqr12DriA1cw3Adw_V2C-KpmCprAzXvNhYUJw6Nl9qh23Bu2OLSH-67VEL7RIIT3ohp6Tdg",
        tag: "Street",
        tagColor: "primary",
        caption: "Ajuste técnico en plaza · Bogotá",
        wide: true,
      },
    ],
    reviews: [
      {
        studentName: "Julián Torres",
        subtitle: "Alumno Street · Feb 2025",
        avatarUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA5_sZtjfJEPdRYZr734pVVnPdlDwQu4HVdRt24CYN33NjQtNjHkjtKW3HlEGFeTpj2mweAFSQnS-wBC2wR2g1eMzfXKtUQdB6WbQjpa-ATpWOes8epdloMRx1AiQ4a2rxA_uVqZLNGxX2_7ON75Zh3YGCd5J0Y8ZG2P69mUUlEduBlwI0i70WPiAOTqq_K2mgl2PFeLgy_TY3Xwq1-rL4gGRpRVBHz3Kwqs4LeU1U",
        comment:
          "Por fin caí el kickflip rodando gracias a las correcciones de postura de Santi.",
        achievement: "Kickflip consistente en movimiento",
        fullWidth: true,
      },
    ],
    spotsIntro: "Spots urbanos y skateparks en Bogotá:",
    mapLocationQuery: "Skatepark El Tunal, Bogota, Colombia",
    mapPreviewUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDa7t92qrxzDX-ru0GxFkmZhnuJSWFN4dvbul8s9Z26tg7GIfAIruqvqedA9gTEbADbtvKHbvVgBkDC-VA4EILfJ8MavaQk2LXeqLOce1m2Z8GDC5j3UZpvE318EEy3PJlHubuANryEf8yPl0j58MoY-i9zvnskPBsUbwLLpMxcPugBjYqMRuw5_OiofhfQnDgewBD98EkD5d49EzLunc-eoHKBoXoRdedDLy0EI1k",
    spots: [
      {
        name: "1. Skatepark Parque El Tunal",
        badge: "Spot Principal",
        badgeColor: "tertiary",
        address: "Sur de Bogotá · Zona de street y gaps",
        schedule: "Sábados: 10:00 AM - 2:00 PM",
      },
    ],
    whatsappUrl:
      "https://api.whatsapp.com/send?phone=573187654321&text=Hola%20Santiago,%20vi%20tu%20perfil%20en%20SkateMentor%20y%20quisiera%20agendar%20una%20clase",
    whatsappScheduleUrl:
      "https://api.whatsapp.com/send?phone=573187654321&text=Hola%20Santiago,%20quisiera%20consultar%20horarios%20disponibles",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAMAgwq3WW1J5BiAtSIC_zpjLGtkRx5VKw-9P9Y3n1S_f275MCPSI-KpPbOtmtE_eV_5NtPvjMKhW1xuUw60BRy1oaeZyYib0KDoAKgZpuQYJdoWH_HKaa85NEGPAD5V0m8zhnU9d2SthiWz6z0WGrkTHIdkecQ6AtLbqr12DriA1cw3Adw_V2C-KpmCprAzXvNhYUJw6Nl9qh23Bu2OLSH-67VEL7RIIT3ohp6Tdg",
  },
];