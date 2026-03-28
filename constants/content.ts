/**
 * Fuente de verdad: Camila Tenesaca — landing profesional.
 * Edita aquí; los componentes solo consumen estos datos.
 */

/** Íconos lucide para filas de servicios (mapa en el componente). */
export type LucideIconName =
  | "Code2"
  | "Users"
  | "Rocket"
  | "Layers"
  | "Sparkles"
  | "MessageCircle";

export const site = {
  brand: "Camila Tenesaca",
  tagline: "Desarrollo frontend orientado a producto",

  meta: {
    title: "Camila Tenesaca — Desarrollo web y producto digital",
    description:
      "Te ayudo a lanzar interfaces rápidas y claras: menos fricción para el usuario, más previsibilidad para tu equipo. Abierta a roles híbridos y colaboración remota.",
  },

  email: "contacto@tudominio.com",

  urls: {
    linkedIn: "https://www.linkedin.com/in/tu-perfil/",
    whatsApp: "https://wa.me/593958887736",
  },
} as const;

export const headerContent = {
  ctaLabel: "LinkedIn",
  ctaAriaLabel: "Abrir perfil de LinkedIn en una pestaña nueva",
  nav: [
    { href: "#acerca", label: "Acerca de mí" },
    { href: "#servicios", label: "Servicios" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#portafolio", label: "Portafolio" },
    { href: "#testimonios", label: "Referencias" },
    { href: "#faq", label: "FAQ" },
    { href: "#contacto", label: "Contacto" },
  ] as const,
} as const;

export const heroContent = {
  /** Imagen de ancla visual (reemplaza por tu foto o proyecto cuando quieras). */
  image: {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=80",
    alt: "Espacio de trabajo con portátil enfocado en desarrollo de producto",
  },
  heading: "Menos fricción en la pantalla. Más claridad para tu equipo.",
  gradientHighlight: "Más claridad",
  subtitle:
    "Transformo prototipos y briefings en interfaces estables que reclutadores y squads pueden evaluar en minutos: rendimiento aceptable, copy legible y código que otro dev puede retomar.",
  primaryCta: {
    label: "Ver trayectoria",
    ariaLabel: "Abrir LinkedIn para ver proyectos y experiencia",
  },
  secondaryCta: {
    label: "Hablemos por correo",
    href: `mailto:${site.email}?subject=Hola%20Camila%20%E2%80%94%20proyecto%20o%20rol`,
    ariaLabel: "Enviar correo a Camila Tenesaca",
  },
} as const;

export const aboutContent = {
  id: "acerca",
  eyebrow: "Sobre el enfoque",
  title: "Acerca de mí",
  subtitle: "Producto primero, código al servicio del usuario",
  lead:
    "No se trata solo de ‘entregar pantallas’: se trata de reducir riesgo en cada release. Eso implica priorizar lo esencial, negociar el alcance con honestidad y dejar rastro claro para quien llegue después.",
  body: [
    "En equipos compactos aporto desde la implementación hasta la traducción técnica para stakeholders: qué cabe en el sprint, qué implica en mantenimiento y qué impacto tiene en accesibilidad o SEO básico.",
    "Si buscas alguien que dialogue con diseño sin perder el hilo comercial —y que documente lo justo para no frenar el ritmo— encajo bien en squads que ya están en producción o a punto de estarlo.",
  ],
  highlight: {
    label: "Disponibilidad",
    value: "Proyectos puntuales · colaboración remota · conversaciones con recruiters",
  },
} as const;

export const valueItems: ReadonlyArray<{
  icon: LucideIconName;
  title: string;
  description: string;
}> = [
  {
    icon: "Code2",
    title: "Interfaces que cargan y se entienden",
    description:
      "Tu usuario no debería adivinar el siguiente paso. Priorizo jerarquía visual, tiempos de interacción razonables y estados vacíos que guían en lugar de bloquear.",
  },
  {
    icon: "Users",
    title: "Un solo lenguaje entre diseño, producto y dev",
    description:
      "Traduzco requisitos ambiguos en tareas cerribles, anticipo dependencias y dejo registradas decisiones para que el equipo no repita las mismas preguntas cada sprint.",
  },
  {
    icon: "Rocket",
    title: "Entregas que se pueden medir",
    description:
      "Definimos juntos qué significa ‘listo’: evento clave desplegado, métrica consultada o reducción de tickets repetitivos. Lo demás es iteración, no sorpresa.",
  },
];

export const servicesSection = {
  id: "servicios",
  eyebrow: "Servicios",
  title: "Qué ganas al trabajar conmigo",
  intro:
    "Tres formas concretas en las que suelo impactar cuando el objetivo es convertir visitantes en acciones claras y mantener el ritmo del roadmap.",
} as const;

export const processSection = {
  id: "experiencia",
  eyebrow: "Experiencia",
  title: "Una forma de trabajo ligera, sin burocracia innecesaria",
  intro:
    "Cuatro fases que puedes seguir en una sola llamada inicial. Sirven para alinear expectativas antes de escribir la primera línea de código.",
  steps: [
    {
      n: "01",
      title: "Diagnóstico en 30 minutos",
      body: "Entiendo el contexto del negocio, el usuario objetivo y qué está fallando hoy: velocidad, claridad o confianza en la marca.",
    },
    {
      n: "02",
      title: "Propuesta de alcance honesta",
      body: "Te devuelvo un alcance priorizado con riesgos visibles: qué entra en la primera entrega, qué queda explícitamente fuera y qué podemos preparar en paralelo.",
    },
    {
      n: "03",
      title: "Implementación iterativa",
      body: "Integraciones cortas con feedback real: ves avances en un entorno estable y decides si seguimos profundizando o ajustamos el rumbo.",
    },
    {
      n: "04",
      title: "Cierre documentado",
      body: "Checklist de handoff: rutas clave probadas, notas para el siguiente dev y enlaces a lo desplegado —para que el valor no dependa de una sola persona.",
    },
  ] as const,
} as const;

export const testimonialsSection = {
  id: "testimonios",
  eyebrow: "Prueba social",
  title: "Lo que destacan quienes ya colaboraron",
  items: [
    {
      quote:
        "Camila entregó la nueva landing en tiempo récord sin sacrificar accesibilidad. El equipo de ventas dejó de recibir mails del tipo ‘no encuentro el botón de contacto’.",
      name: "Andrea Morillo",
      role: "Head of Growth",
      org: "Studio Norte (servicios B2B)",
    },
    {
      quote:
        "Trabajar con alguien que entiende diseño y a la vez cuestiona supuestos técnicos nos ahorró dos semanas de retrabajo. Las demos eran cortas y siempre con datos.",
      name: "Lucas Prieto",
      role: "Lead Product",
      org: "Fintech en expansión LATAM",
    },
  ] as const,
} as const;

export const portfolioSection = {
  id: "portafolio",
  eyebrow: "Portafolio",
  title: "Ejemplos de problemas que me gusta resolver",
  intro:
    "Proyectos representativos —sustituye por tus casos reales o enlaza al detalle en Behance o GitHub cuando los tengas listos.",
  projects: [
    {
      title: "Dashboard de métricas para founders",
      outcome:
        "Reducción del 40% en consultas repetitivas al equipo de datos gracias a vistas guardadas y estados vacíos guiados.",
      image: {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
        alt: "Panel de analíticas con gráficos en pantalla",
      },
      tags: ["React", "Visualización", "SaaS"],
    },
    {
      title: "Flujo de onboarding para app móvil",
      outcome:
        "Tasa de completitud del onboarding al 68% en cuatro semanas; copy y microcopy alineados con legal y diseño.",
      image: {
        src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80",
        alt: "Persona usando aplicación móvil",
      },
      tags: ["Mobile-first", "UX writing", "Iteración"],
    },
    {
      title: "Sitio institucional con enfoque conversión",
      outcome:
        "Formularios segmentados por tipo de cliente y tiempos de carga bajo control para campañas de tráfico de pago.",
      image: {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
        alt: "Diseño web en pantalla de ordenador",
      },
      tags: ["Next.js", "SEO", "CRO"],
    },
  ] as const,
} as const;

export const faqSection = {
  id: "faq",
  eyebrow: "FAQ",
  title: "Respuestas rápidas antes del primer contacto",
  items: [
    {
      question: "¿Trabajas por proyecto cerrado o por horas?",
      answer:
        "Ambos. Para landings o MVPs suele funcionar un alcance cerrado con hitos. Para integración en un squad existente prefiero retainer por horas con techo mensual acordado.",
    },
    {
      question: "¿Qué stack manejas habitualmente?",
      answer:
        "Hoy me muevo con confianza en React y Next.js, TypeScript y CSS moderno (Tailwind u otras utilidades). Me adapto a tu código existente si ya hay convenciones: lo importante es que el bus factor suba, no baje.",
    },
    {
      question: "¿Puedes colaborar con nuestra agencia o equipo in-house?",
      answer:
        "Sí. Participo en dailies cuando aporta, uso tu herramienta de tareas y dejo PRs pequeños con contexto en la descripción. Evito silos entre producto y frontend.",
    },
    {
      question: "¿Entregas diseño además de código?",
      answer:
        "No sustituyo a una diseñadora senior de marca, pero sí aterrizo sistemas en Figma en wireframes de alta fidelidad cuando el presupuesto es ajustado y hace falta velocidad.",
    },
    {
      question: "¿Cómo es tu disponibilidad para una entrevista técnica?",
      answer:
        "Reservo bloques para recruiters con aviso de 48 h. Adjunto enlace a repo o playground cuando el proceso lo requiere; preparo un caso breve alineado al tipo de producto.",
    },
  ] as const,
} as const;

export const finalCtaSection = {
  id: "cta-final",
  eyebrow: "Siguiente paso",
  title: "Si tu siguiente release necesita orden, hablemos",
  line:
    "Cuéntame en dos líneas el contexto del rol o proyecto: stack, plazo y qué decisión estás bloqueando hoy. Respondo con calendario o alternativas.",
  primaryLabel: "Abrir LinkedIn",
  primaryAriaLabel: "Ir al perfil de LinkedIn de Camila Tenesaca",
  secondaryLabel: "WhatsApp",
  secondaryAriaLabel: "Abrir conversación en WhatsApp",
} as const;

export const footerContent = {
  id: "contacto",
  tagline:
    "Frontend con criterio de producto · Quito y remoto · Español e inglés",
  columns: [
    {
      title: "Navegación",
      links: [
        { href: "#acerca", label: "Acerca de mí" },
        { href: "#servicios", label: "Servicios" },
        { href: "#experiencia", label: "Experiencia" },
        { href: "#portafolio", label: "Portafolio" },
      ] as const,
    },
    {
      title: "Más",
      links: [
        { href: "#testimonios", label: "Referencias" },
        { href: "#faq", label: "Preguntas frecuentes" },
        { href: "#cta-final", label: "Contactar" },
      ] as const,
    },
  ] as const,
  socialLabel: "Canales directos",
  copyrightHolder: site.brand,
} as const;
