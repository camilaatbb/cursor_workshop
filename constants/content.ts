/**
 * Fuente de verdad para textos y enlaces de la landing.
 * Los componentes deben importar desde aquí para no duplicar strings.
 */

/** Nombres de ícono válidos en lucide-react (PascalCase). */
export type LucideIconName =
  | "Code2"
  | "Users"
  | "Rocket"
  | "Layers"
  | "Sparkles"
  | "MessageCircle";

export const site = {
  brand: "Camila Tenesaca",

  meta: {
    title: "Camila Tenesaca — Desarrollo web y producto digital",
    description:
      "Desarrollo frontend con foco en resultados: sitios rápidos, equipos alineados y código que se puede mantener. Abierta a roles remotos e híbridos.",
  },

  email: "contacto@tudominio.com",

  urls: {
    linkedIn: "https://www.linkedin.com/in/tu-perfil/",
    /**
     * WhatsApp internacional sin 0 inicial del celular local.
     * Confirma el prefijo de país respecto a tu operador.
     */
    whatsApp: "https://wa.me/593958887736",
  },
} as const;

export const headerNavContent = {
  links: [
    { label: "Acerca", href: "#acerca" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Casos", href: "#portafolio" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ] as const,
} as const;

export const headerContent = {
  ctaLabel: "LinkedIn",
  ctaAriaLabel: "Abrir perfil de LinkedIn en una pestaña nueva",
  menuOpenLabel: "Abrir menú",
  menuCloseLabel: "Cerrar menú",
} as const;

export const heroContent = {
  roleLine: "Desarrollo frontend · Producto digital",
  heading: "Sitios y productos web que tu equipo puede mantener y medir.",
  gradientHighlight: "mantener y medir",
  subtitle:
    "Te ayudo a pasar de diseño a producción sin sorpresas: entregas por etapas, comunicación clara con diseño y stakeholders, y prioridad en rendimiento y accesibilidad.",
  imageSrc: "/camila-tenesaca.png",
  imageAlt:
    "Retrato de Camila Tenesaca, desarrolladora frontend, en un entorno profesional.",
  primaryCta: {
    label: "Ver trayectoria",
    ariaLabel: "Ver perfil y proyectos en LinkedIn",
  },
  secondaryCta: {
    label: "Escribirme",
    href: `mailto:${site.email}?subject=Hola%20Camila%20%E2%80%94%20contacto%20desde%20tu%20web`,
    ariaLabel: "Enviar correo electrónico a Camila",
  },
} as const;

export const aboutContent = {
  id: "acerca",
  title: "Quién está detrás del código",
  lead: "Combino criterio técnico con empatía por el negocio: menos fricción entre diseño, desarrollo y lo que el usuario final necesita.",
  body: [
    "He trabajado en entornos donde el tiempo importa: priorizo acuerdos explícitos (qué se entrega, cuándo y con qué criterio de listo) y código legible para que otras personas puedan retomar sin romper nada.",
    "Me mueve ver impacto medible: tiempos de carga aceptables, flujos que se entienden y equipos que confían en el despliegue. Si buscas una perfil que dialogue con producto y reclutamiento con el mismo lenguaje, encajo bien en squads ágiles.",
  ],
} as const;

export const valueItems: ReadonlyArray<{
  icon: LucideIconName;
  title: string;
  description: string;
}> = [
  {
    icon: "Code2",
    title: "Menos deuda técnica accidental",
    description:
      "Estructura clara, pruebas donde aportan y revisiones que reducen regresiones antes de producción.",
  },
  {
    icon: "Users",
    title: "Un solo ritmo con diseño y producto",
    description:
      "Sincronizo expectativas temprano: prototipos realistas, handoff sin ambigüedad y ajustes cuando cambian prioridades.",
  },
  {
    icon: "Rocket",
    title: "Velocidad con criterio",
    description:
      "Optimizo lo que el usuario nota primero: LCP, interacciones fluidas y accesibilidad que no se degrada en móvil.",
  },
];

export const servicesSection = {
  id: "servicios",
  title: "Qué ganas al trabajar conmigo",
  intro:
    "Tres formas concretas en las que suelo aportar desde el frontend, sin promesas vacías:",
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
  title: "¿Hablamos?",
  closingLine:
    "Si buscas una desarrolladora frontend que una criterio técnico con comunicación clara, escríbeme o mira mi perfil en LinkedIn.",
  primaryCta: {
    label: "Abrir LinkedIn",
    ariaLabel: "Ir al perfil de LinkedIn de Camila Tenesaca",
  },
} as const;

export const footerContent = {
  tagline: "Desarrollo frontend orientado a equipos y resultados.",
  copyrightHolder: site.brand,
} as const;

export const legalContent = {
  note: "Contenido de ejemplo editable; actualiza enlaces y datos de contacto en content.ts.",
} as const;
