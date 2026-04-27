/**
 * ACTUALIZA TU INFO AQUÍ
 * Fuente central de textos, links y contenido de la landing.
 */

export type LucideIconName = "Store" | "MonitorSmartphone" | "Megaphone";

// ACTUALIZA TU INFO AQUÍ
export const site = {
  brand: "CAMILA TENESACA",
  type: "Servicio freelance",
  audience: "Negocios locales",
  goal: "Mostrar proyectos",
  tagline:
    "Webs y landings claras para que más clientes te escriban sin fricción.",
  email: "camilatenesaca2002@gmail.com",
  whatsAppNumber: "0958887736",
  meta: {
    title: "Camila Tenesaca | Desarrollo web para negocios locales",
    description:
      "Diseño y desarrollo de sitios modernos para negocios locales: más confianza, mejor presencia y más consultas por WhatsApp o correo.",
  },
  urls: {
    linkedIn: "https://www.linkedin.com/in/camila-tenesaca-568a2b240/",
    whatsApp: "https://wa.me/593958887736",
  },
} as const;

// ACTUALIZA TU INFO AQUÍ
export const headerContent = {
  ctaLabel: "Ver mi trabajo",
  ctaHref: site.urls.linkedIn,
  ctaAriaLabel: "Abrir LinkedIn para ver el trabajo de Camila",
  nav: [
    { href: "#acerca", label: "Acerca" },
    { href: "#servicios", label: "Servicios" },
    { href: "#proceso", label: "Proceso" },
    { href: "#portafolio", label: "Portafolio" },
    { href: "#testimonios", label: "Clientes" },
    { href: "#faq", label: "FAQ" },
    { href: "#contacto", label: "Contacto" },
  ] as const,
} as const;

// ACTUALIZA TU INFO AQUÍ
export const heroContent = {
  id: "hero",
  badge: "Freelance frontend · negocios locales",
  /** Imagen de ancla (sustituye por tu foto o proyecto). */
  image: {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80",
    alt: "Espacio de trabajo luminoso con detalle de laptop",
  },
  heading: "Tu negocio local, con una web que genera confianza y contactos.",
  gradientHighlight: "confianza y contactos",
  subtitle:
    "Diseño y código enfocados en lo que importa: que el cliente entienda tu oferta en segundos y te escriba por WhatsApp o correo sin dar vueltas.",
  primaryCta: {
    label: "Ver mi trabajo",
    href: site.urls.linkedIn,
    ariaLabel: "Abrir LinkedIn para ver el trabajo de Camila",
  },
  secondaryCta: {
    label: "Escribirme por WhatsApp",
    href: site.urls.whatsApp,
    ariaLabel: "Abrir conversación por WhatsApp con Camila",
  },
} as const;

// ACTUALIZA TU INFO AQUÍ
export const aboutContent = {
  id: "acerca",
  eyebrow: "Acerca de mí",
  title: "Menos páginas decorativas. Más resultados medibles para tu negocio.",
  paragraphs: [
    "Trabajo con cafeterías, tiendas, estudios y marcas locales que necesitan verse profesionales en línea sin complicar el día a día.",
    "Mi foco es el beneficio: una web rápida, clara y fácil de mantener, que guía al visitante hacia una acción concreta (reservar, pedir, llamar o escribir).",
  ],
  pullQuote:
    "Cada sección tiene un propósito: que alguien que no te conoce decida confiar en ti en menos de un minuto.",
} as const;

// ACTUALIZA TU INFO AQUÍ
export const servicesSection = {
  id: "servicios",
  eyebrow: "Servicios",
  title: "Lo que obtienes al trabajar conmigo",
  intro:
    "Tres pilares pensados para negocios que compiten con grandes cadenas y necesitan destacar con autenticidad.",
} as const;

// ACTUALIZA TU INFO AQUÍ
export const valueItems: ReadonlyArray<{
  icon: LucideIconName;
  title: string;
  description: string;
}> = [
  {
    icon: "Store",
    title: "Presencia que vende tu historia local",
    description:
      "Jerarquía clara: qué ofreces, para quién, dónde estás y cómo reservar o comprar. El visitante no se pierde; avanza hacia el contacto.",
  },
  {
    icon: "MonitorSmartphone",
    title: "Rendimiento y lectura impecables en móvil",
    description:
      "La mayoría entra desde el celular. Priorizo velocidad, contraste y botones fáciles de tocar para que nadie abandone por frustración.",
  },
  {
    icon: "Megaphone",
    title: "Mensajes que invitan a actuar",
    description:
      "Titulares y CTAs alineados a tu objetivo: más mensajes, más visitas a tienda o más pedidos. Menos texto genérico, más conversión.",
  },
];

// ACTUALIZA TU INFO AQUÍ
export const processSection = {
  id: "proceso",
  eyebrow: "Cómo funciona",
  title: "Un proceso claro, sin sorpresas",
  intro:
    "Cuatro pasos para pasar de la idea a una web viva, con entregables que puedes revisar en cada etapa.",
  steps: [
    {
      n: "01",
      title: "Diagnóstico express",
      body: "Revisamos tu negocio, público y objetivo (más reservas, más pedidos, más credibilidad). Definimos qué debe ver y hacer el visitante primero.",
    },
    {
      n: "02",
      title: "Propuesta y alcance",
      body: "Te entrego alcance, tiempos y prioridades. Sabes qué incluye la primera versión y qué puede ir en una segunda fase sin romper el presupuesto.",
    },
    {
      n: "03",
      title: "Diseño y desarrollo",
      body: "Implementación con revisiones cortas: ves avances reales, das feedback y ajustamos antes del lanzamiento. Sin cajas negras.",
    },
    {
      n: "04",
      title: "Lanzamiento y handoff",
      body: "Publicación, enlaces de contacto probados y una guía breve para que tú o tu equipo puedan actualizar textos básicos con tranquilidad.",
    },
  ] as const,
} as const;

// ACTUALIZA TU INFO AQUÍ — testimonios de ejemplo; sustituye por clientes reales.
export const testimonialsSection = {
  id: "testimonios",
  eyebrow: "Prueba social",
  title: "Negocios como el tuyo, con mejores resultados en línea",
  items: [
    {
      quote:
        "Pasamos de un PDF en WhatsApp a una web que explica menú, horarios y ubicación en un pantallazo. Subieron las reservas los fines de semana.",
      name: "María Elena Vásquez",
      role: "Propietaria",
      org: "Café barrio La Encina (ejemplo)",
    },
    {
      quote:
        "Necesitábamos credibilidad frente a clientes corporativos. La nueva landing transmitió orden y respuesta en menos de 48 h tras publicar.",
      name: "Diego Armijos",
      role: "Director",
      org: "Servicios B2B locales (ejemplo)",
    },
  ] as const,
} as const;

// ACTUALIZA TU INFO AQUÍ — proyectos de ejemplo; enlaza casos reales cuando los tengas.
export const portfolioSection = {
  id: "portafolio",
  eyebrow: "Portafolio",
  title: "Ejemplos del tipo de problemas que resuelvo",
  intro:
    "Casos representativos de sitios y landings orientadas a claridad y conversión. Sustituye imágenes y textos por tus proyectos reales.",
  projects: [
    {
      title: "Landing para estudio de servicios locales",
      outcome:
        "Estructura en una sola página: servicios, precios orientativos, mapa y CTA a WhatsApp. Menos preguntas repetidas por chat.",
      image: {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
        alt: "Pantalla con diseño web limpio",
      },
      tags: ["Next.js", "Conversión", "Mobile-first"],
    },
    {
      title: "Sitio para marca gastronómica",
      outcome:
        "Galería ligera, menú escaneable y botón fijo de pedido. Tiempo de carga contenido para no perder hambrientos impacientes.",
      image: {
        src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80",
        alt: "Interior de restaurante acogedor",
      },
      tags: ["UI", "Rendimiento", "SEO básico"],
    },
    {
      title: "Página institucional con foco en contacto",
      outcome:
        "Formulario simple y enlaces claros a redes y WhatsApp. Reducción de clics hasta la acción principal.",
      image: {
        src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
        alt: "Oficina moderna con luz natural",
      },
      tags: ["Accesibilidad", "Claridad", "Marca local"],
    },
  ] as const,
} as const;

// ACTUALIZA TU INFO AQUÍ
export const faqSection = {
  id: "faq",
  eyebrow: "FAQ",
  title: "Preguntas frecuentes antes de escribirme",
  items: [
    {
      question: "¿Cuánto tarda un proyecto típico?",
      answer:
        "Una landing enfocada suele llevar entre 2 y 4 semanas según contenido, revisiones y si ya tienes fotos y textos. Te doy un calendario claro al cerrar alcance.",
    },
    {
      question: "¿Necesito tener todo el contenido listo?",
      answer:
        "No es obligatorio. Puedo trabajar con borradores y mejorar titulares y CTAs. Sí necesito al menos una idea clara de a quién quieres atraer y qué acción deseas.",
    },
    {
      question: "¿Incluye hosting o dominio?",
      answer:
        "Puedo orientarte en la compra de dominio y hosting o desplegar en la plataforma que prefieras. Lo acordamos en la propuesta para que no haya costos ocultos.",
    },
    {
      question: "¿Haces mantenimiento después del lanzamiento?",
      answer:
        "Sí, por paquetes puntuales o pequeñas retenciones mensuales: cambios de carta, campañas, mejoras de velocidad o nuevas secciones.",
    },
  ] as const,
} as const;

// ACTUALIZA TU INFO AQUÍ
export const finalSection = {
  id: "cta-final",
  eyebrow: "Siguiente paso",
  title: "¿Listo para una web que trabaje por tu negocio?",
  description:
    "Cuéntame qué vendes, en qué zona estás y qué te gustaría que hiciera el visitante al entrar. Respondo con propuesta o una llamada breve.",
  primaryCta: {
    label: "Ver mi trabajo",
    href: site.urls.linkedIn,
    ariaLabel: "Abrir LinkedIn para ver el trabajo de Camila",
  },
  secondaryCta: {
    label: "WhatsApp",
    href: site.urls.whatsApp,
    ariaLabel: "Abrir WhatsApp para contactar a Camila",
  },
} as const;

// ACTUALIZA TU INFO AQUÍ
export const footerContent = {
  id: "contacto",
  tagline:
    "Desarrollo frontend y diseño UI para negocios locales. Respuesta ágil, procesos claros.",
  columns: [
    {
      title: "Secciones",
      links: [
        { href: "#acerca", label: "Acerca" },
        { href: "#servicios", label: "Servicios" },
        { href: "#proceso", label: "Proceso" },
        { href: "#portafolio", label: "Portafolio" },
      ] as const,
    },
    {
      title: "Más",
      links: [
        { href: "#testimonios", label: "Clientes" },
        { href: "#faq", label: "FAQ" },
        { href: "#cta-final", label: "Contratar" },
      ] as const,
    },
  ] as const,
  socialLabel: "Contacto directo",
  copyrightHolder: site.brand,
} as const;
