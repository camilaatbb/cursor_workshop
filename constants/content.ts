/**
 * Fuente de verdad para textos y enlaces de la landing.
 * Los componentes deben importar desde aquí para no duplicar strings.
 */

// ACTUALIZA TU INFO AQUÍ

/** Nombres de ícono válidos en lucide-react (PascalCase). */
export type LucideIconName =
  | "Code2"
  | "Users"
  | "Rocket"
  | "Layers"
  | "Sparkles"
  | "MessageCircle";

export type ContactIconName = "Mail" | "MessageCircle" | "Linkedin";

export const site = {
  brand: "CAMILA TENESACA",

  meta: {
    title: "Camila Tenesaca — Sitios web para negocios locales",
    description:
      "Landing page profesional de Camila Tenesaca, desarrolladora web freelance para negocios locales que necesitan presencia digital clara, rápida y confiable.",
  },

  email: "camilatenesaca2002@gmail.com",
  whatsAppDisplay: "0958887736",

  urls: {
    linkedIn: "https://www.linkedin.com/in/camila-tenesaca-568a2b240/",
    whatsApp: "https://wa.me/593958887736",
  },
} as const;

export const headerNavContent = {
  links: [
    { label: "Acerca", href: "#acerca" },
    { label: "Servicios", href: "#servicios" },
    { label: "Contacto", href: "#contacto" },
  ] as const,
} as const;

export const headerContent = {
  ctaLabel: "Ver mi trabajo",
  ctaHref: site.urls.linkedIn,
  ctaAriaLabel: "Ver el trabajo de Camila Tenesaca en LinkedIn",
  navAriaLabel: "Secciones principales",
  mobileNavAriaLabel: "Secciones principales en móvil",
  menuOpenLabel: "Abrir menú",
  menuCloseLabel: "Cerrar menú",
} as const;

export const heroContent = {
  roleLine: "Desarrollo web freelance para negocios locales",
  heading: "Presencia digital clara para negocios que quieren vender mejor.",
  gradientHighlight: "vender mejor",
  subtitle:
    "Diseño e implemento sitios modernos, rápidos y fáciles de actualizar para que tus clientes entiendan lo que ofreces y sepan cómo contactarte.",
  imageSrc: "/camila-tenesaca.png",
  imageAlt:
    "Retrato profesional de Camila Tenesaca, desarrolladora web freelance.",
  primaryCta: {
    label: "Ver mi trabajo",
    href: site.urls.linkedIn,
    ariaLabel: "Ver el trabajo de Camila Tenesaca en LinkedIn",
  },
  secondaryCta: {
    label: "Agendar una idea",
    href: `mailto:${site.email}?subject=Hola%20Camila%20%E2%80%94%20contacto%20desde%20tu%20web`,
    ariaLabel: "Enviar correo electrónico a Camila",
  },
} as const;

export const aboutContent = {
  id: "acerca",
  eyebrow: "Misión",
  title: "Convertir ideas locales en experiencias web simples, elegantes y listas para crecer.",
  lead: "Trabajo con emprendedores, marcas personales y pequeños negocios que necesitan una web profesional sin procesos complicados.",
  body: [
    "Mi enfoque une diseño limpio, contenido directo y desarrollo con buenas prácticas para que tu página no solo se vea bien, también cargue rápido y guíe a la acción correcta.",
    "Cada proyecto empieza con una conversación sobre tus objetivos: qué vendes, a quién ayudas y qué debe hacer una persona después de visitar tu sitio.",
  ],
  proof: ["Sitios responsivos", "CTA claros", "Entrega ordenada"],
} as const;

export const valueItems: ReadonlyArray<{
  icon: LucideIconName;
  title: string;
  description: string;
}> = [
  {
    icon: "Code2",
    title: "Landing pages profesionales",
    description:
      "Páginas de una sola vista con mensaje claro, carga rápida y estructura pensada para convertir visitas en contactos.",
  },
  {
    icon: "Sparkles",
    title: "Identidad visual aplicada",
    description:
      "Uso color, tipografía y ritmo visual para que tu negocio se sienta confiable desde el primer vistazo.",
  },
  {
    icon: "MessageCircle",
    title: "Canales de contacto directos",
    description:
      "Integro email, WhatsApp y redes para que tus clientes puedan escribirte sin perder tiempo buscando información.",
  },
];

export const servicesSection = {
  id: "servicios",
  eyebrow: "Servicios",
  title: "Un sitio que explica tu valor antes de la primera llamada.",
  intro:
    "Me enfoco en lo esencial para negocios locales: presencia clara, confianza visual y caminos de contacto visibles.",
} as const;

export const processContent = {
  id: "proceso",
  title: "Cómo avanzamos juntos",
  intro:
    "Un proceso ligero que puedes adaptar a tu empresa; la idea es reducir incertidumbre en cada entrega.",
  steps: [
    {
      title: "Diagnóstico breve",
      description:
        "Alineamos objetivo, público y restricciones (plazo, stack, accesibilidad). Sales con un plan de entregas realista.",
    },
    {
      title: "Implementación por incrementos",
      description:
        "Entregas revisables en staging: ves avance real, no sorpresas finales. Ajustamos con feedback entre ciclos.",
    },
    {
      title: "Handoff y documentación mínima",
      description:
        "Lo esencial para que otro dev retome: convenciones, puntos de extensión y checklist de despliegue.",
    },
    {
      title: "Mejora continua opcional",
      description:
        "Tras el lanzamiento, priorizamos métricas y quick wins (rendimiento, SEO técnico básico, deuda acotada).",
    },
  ],
} as const;

export const testimonialsContent = {
  id: "testimonios",
  title: "Lo que destacan quienes ya colaboraron",
  intro:
    "Referencias sintéticas basadas en el tipo de feedback que suelo recibir en proyectos reales (nombres y empresas de ejemplo).",
  items: [
    {
      quote:
        "Camila tradujo un diseño complejo en componentes reutilizables sin que el equipo perdiera velocidad. La comunicación en daily fue clara y sin ruido.",
      name: "Andrea Méndez",
      role: "Product Lead",
      company: "Nimbus Analytics (ejemplo)",
      outcome: "Reducción de retrabajo en QA",
    },
    {
      quote:
        "Teníamos deuda en el front y miedo a tocar el CSS legacy. En pocas semanas estabilizamos la base y pudimos shippear features otra vez.",
      name: "Diego Villacrés",
      role: "Engineering Manager",
      company: "Casa Origen (ejemplo)",
      outcome: "Base frontend más predecible",
    },
    {
      quote:
        "Se nota cuando alguien piensa en el usuario final y en el próximo desarrollador que leerá el código. Recomendaría sin dudar para un squad remoto.",
      name: "Laura Ibáñez",
      role: "Head of Design",
      company: "Estudio Brújula (ejemplo)",
      outcome: "Handoff diseño–dev más fluido",
    },
  ],
} as const;

export const portfolioContent = {
  id: "portafolio",
  title: "Casos y ejemplos",
  intro:
    "Selección de líneas de trabajo representativas; sustituye enlaces e imágenes cuando tengas casos publicables.",
  items: [
    {
      title: "Landing de marca personal",
      outcome:
        "Primera impresión clara para reclutadores: CTA directos, buen contraste y carga rápida en móvil.",
      tag: "Next.js · Tailwind",
      href: site.urls.linkedIn,
      imageSrc: "/camila-tenesaca.png",
      imageAlt: "Vista del sitio personal de Camila Tenesaca.",
    },
    {
      title: "Panel interno de operaciones",
      outcome:
        "Tablero con filtros y estados vacíos accesibles; reducción de clics en tareas repetitivas del equipo.",
      tag: "React · TypeScript",
      href: "#portafolio",
      imageSrc: "/camila-tenesaca.png",
      imageAlt: "Detalle de interfaz de panel de operaciones (ejemplo).",
    },
    {
      title: "Flujo de onboarding B2B",
      outcome:
        "Wizard en pasos con validación en línea y mensajes de error comprensibles; menos abandono en el primer acceso.",
      tag: "Frontend · A11y",
      href: "#portafolio",
      imageSrc: "/camila-tenesaca.png",
      imageAlt: "Pantalla de flujo de onboarding (ejemplo).",
    },
  ],
} as const;

export const faqContent = {
  id: "faq",
  title: "Preguntas frecuentes",
  intro: "Respuestas directas para reclutadores y líderes técnicos.",
  items: [
    {
      question: "¿Trabajas remoto o híbrido?",
      answer:
        "Sí. Me adapto a husos compartidos razonables y a ceremonias acordadas; valoro documentación asíncrona para no bloquear al equipo.",
    },
    {
      question: "¿Qué stack dominas?",
      answer:
        "Mi núcleo es JavaScript/TypeScript con React o Next.js, estilos con Tailwind u otras soluciones del proyecto, y integración con APIs REST o GraphQL según lo que ya use el equipo.",
    },
    {
      question: "¿Cómo entregas para que otro dev pueda retomar?",
      answer:
        "Commits y PRs pequeños, README o notas breves donde hace falta, y componentes con interfaces claras. Evito “magia” sin explicar.",
    },
    {
      question: "¿Incluyes pruebas o revisión de accesibilidad?",
      answer:
        "Cuando el proyecto lo permite, sí: pruebas focalizadas en lógica crítica y pasadas básicas de teclado/lector de pantalla en vistas nuevas o refactorizadas.",
    },
    {
      question: "¿Cuánto tardas en incorporarte a un codebase existente?",
      answer:
        "Depende del tamaño y la documentación, pero suelo necesitar pocos días para el primer aporte útil y una o dos semanas para sentirme cómoda con áreas más sensibles.",
    },
    {
      question: "¿Puedo contactarte para una rol concreto?",
      answer:
        "Por supuesto. Envía correo con nombre de empresa, tipo de contrato y stack; respondo con disponibilidad y enlaces relevantes.",
    },
  ],
} as const;

export const closingCtaContent = {
  id: "contacto",
  eyebrow: "Contacto",
  title: "Tu próxima página puede empezar con un mensaje.",
  closingLine:
    "Cuéntame qué negocio quieres mostrar, qué servicio necesitas impulsar y qué acción quieres que tome tu cliente ideal.",
  primaryCta: {
    label: "Ver mi trabajo",
    href: site.urls.linkedIn,
    ariaLabel: "Ver el trabajo de Camila Tenesaca en LinkedIn",
  },
  secondaryCta: {
    label: "Escribirme por WhatsApp",
    href: site.urls.whatsApp,
    ariaLabel: "Escribir a Camila Tenesaca por WhatsApp",
  },
} as const;

export const footerContent = {
  tagline: "Desarrollo web freelance con enfoque en claridad, confianza y conversión.",
  copyrightHolder: site.brand,
  contactTitle: "Contacto",
  socialTitle: "Redes",
  contactLinks: [
    {
      label: site.email,
      href: `mailto:${site.email}`,
      icon: "Mail",
      ariaLabel: "Enviar correo electrónico a Camila Tenesaca",
    },
    {
      label: site.whatsAppDisplay,
      href: site.urls.whatsApp,
      icon: "MessageCircle",
      ariaLabel: "Escribir a Camila Tenesaca por WhatsApp",
    },
  ] as const satisfies ReadonlyArray<{
    label: string;
    href: string;
    icon: ContactIconName;
    ariaLabel: string;
  }>,
  socialLinks: [
    {
      label: "LinkedIn",
      href: site.urls.linkedIn,
      icon: "Linkedin",
      ariaLabel: "Abrir LinkedIn de Camila Tenesaca",
    },
  ] as const satisfies ReadonlyArray<{
    label: string;
    href: string;
    icon: ContactIconName;
    ariaLabel: string;
  }>,
} as const;

export const legalContent = {
  note: "Sitio desarrollado para presentar proyectos y facilitar contacto profesional.",
} as const;
