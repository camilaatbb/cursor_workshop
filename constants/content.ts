/**
 * Fuente única de textos y enlaces — Camila Tenesaca · portafolio / servicio local */

export const site = {
  brand: "Camila Tenesaca",
  tagline: "Webs claras para negocios que quieren crecer en su zona",
  meta: {
    title: "Camila Tenesaca — Web para negocios locales",
    description:
      "Diseño y desarrollo front-end para negocios locales: presencia online que genera confianza, contacto fácil y una imagen profesional. Camila Tenesaca.",
  },
  urls: {
    linkedIn: "https://www.linkedin.com/in/camila-tenesaca-568a2b240/",
    /** Ecuador +593; número local 0958887736 → internacional sin 0 inicial */
    whatsApp: "https://wa.me/593958887736",
    email: "mailto:camilatenesaca2002@gmail.com?subject=Consulta%20desde%20tu%20web",
  },
  emailDisplay: "camilatenesaca2002@gmail.com",
  phoneDisplay: "095 888 7736",
} as const;

export const headerContent = {
  nav: [
    { href: "#servicios", label: "Servicios" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#contacto", label: "Contacto" },
  ] as const,
  ctaLabel: "Contáctame",
  ctaHref: "#contacto" as const,
  ctaAriaLabel: "Ir a la sección de contacto",
} as const;

export const heroContent = {
  gradientHighlight: "negocios locales",
  heading:
    "Tu negocio merece una web que los clientes de tu zona entiendan al instante.",
  subtitle:
    "Soy Camila Tenesaca: te ayudo a mostrar lo que ofreces, facilitar reservas o consultas y transmitir confianza desde el primer clic — sin tecnicismos innecesarios.",
  primaryCta: {
    label: "Contáctame",
    href: "#contacto" as const,
    ariaLabel: "Ir a la sección de contacto",
  },
  secondaryCta: {
    label: "Ver proyectos",
    href: "#proyectos" as const,
    ariaLabel: "Ver ejemplos de proyectos",
  },
} as const;

export const aboutContent = {
  id: "sobre-mi",
  eyebrow: "Sobre mí",
  title: "Cercanía y claridad para tu negocio",
  lead:
    "Trabajo con dueños de negocio y equipos pequeños que necesitan resultados visibles: más consultas, mejor imagen y una web que no se queda obsoleta al mes.",
  columns: [
    "Entiendo que tu tiempo es oro. Por eso propongo entregas por fases: primero lo esencial (quién eres, qué ofreces, cómo contactarte), luego lo que haga falta para vender o agendar mejor.",
    "Si tienes un comercio, un servicio profesional o una marca local, podemos alinear tu web con lo que ya haces bien en persona — y que eso se note también online.",
  ],
  photo: {
    src: "/camila-tenesaca.png",
    alt: "Retrato de Camila Tenesaca",
  },
} as const;

export type ValueIconName = "LayoutTemplate" | "Store" | "Rocket";

export const valueGridContent = {
  id: "servicios",
  eyebrow: "Servicios",
  title: "Qué puedo hacer por tu negocio",
  subtitle:
    "Enfoque práctico para negocios locales: menos páginas vacías y más herramientas que te traigan clientes.",
  items: [
    {
      icon: "LayoutTemplate" as ValueIconName,
      title: "Web o página de aterrizaje",
      description:
        "Estructura clara: servicios, precios o llamados a la acción, mapa o zona de cobertura y formulario o WhatsApp a un toque — adaptado a móvil.",
    },
    {
      icon: "Store" as ValueIconName,
      title: "Imagen que vende confianza",
      description:
        "Tipografía, colores y fotos alineados con tu negocio para que quien llega desde Google o Instagram se quede y contacte.",
    },
    {
      icon: "Rocket" as ValueIconName,
      title: "Velocidad y mantenimiento razonable",
      description:
        "Páginas ligeras, buenas prácticas de front-end y handoff claro para que tú o tu equipo podáis actualizar textos sin drama.",
    },
  ],
} as const;

export const projectsContent = {
  id: "proyectos",
  eyebrow: "Proyectos",
  title: "Ejemplos del tipo de soluciones que construyo",
  subtitle:
    "Casos representativos — sustituye por tus trabajos reales o enlaces cuando los tengas.",
  items: [
    {
      title: "Clínica / consultorio local",
      description:
        "Página con servicios, horarios, ubicación y botón directo a WhatsApp para agendar o preguntar.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Recepción de clínica moderna",
      tags: ["Reservas", "Contacto", "Móvil"],
    },
    {
      title: "Restaurante o cafetería",
      description:
        "Carta destacada, enlaces a delivery y CTA para pedir mesa o pedidos del barrio.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Interior de restaurante acogedor",
      tags: ["Menú", "Delivery", "Local SEO"],
    },
    {
      title: "Servicio profesional (taller, estudio, agencia pequeña)",
      description:
        "Propuesta de valor al frente, prueba social y formulario breve para leads cualificados.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Espacio de trabajo de equipo pequeño",
      tags: ["Leads", "Credibilidad", "Rendimiento"],
    },
  ] as const,
} as const;

export const finalCtaContent = {
  title: "Contáctame",
  subtitle:
    "Cuéntame en una línea qué vendes y en qué ciudad o barrio estás. Te respondo por WhatsApp o correo con una propuesta sencilla, sin compromiso.",
  whatsAppLabel: "WhatsApp",
  whatsAppAriaLabel: "Abrir conversación en WhatsApp",
  emailLabel: "Correo",
  emailAriaLabel: "Enviar correo a Camila Tenesaca",
  linkedInLabel: "LinkedIn",
  linkedInAriaLabel: "Ver perfil en LinkedIn (nueva pestaña)",
} as const;

export const footerContent = {
  contactEyebrow: "Canales directos",
  whatsAppLabel: "WhatsApp",
  linkedInLabel: "LinkedIn",
  copyrightName: "Camila Tenesaca",
} as const;
