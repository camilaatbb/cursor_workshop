"use client";

import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import { heroContent, site } from "@/constants/content";

function splitHeading(heading: string, highlight: string) {
  const i = heading.indexOf(highlight);
  if (i === -1) {
    return { before: heading, highlight: null as string | null, after: "" };
  }
  return {
    before: heading.slice(0, i),
    highlight,
    after: heading.slice(i + highlight.length),
  };
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const { before, highlight, after } = splitHeading(
    heroContent.heading,
    heroContent.gradientHighlight,
  );
  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-zinc-200/80 bg-zinc-50 px-4 py-20 sm:px-6 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(79,70,229,0.12),transparent)]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-2xl lg:text-left">
          <motion.p
            className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-600"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
          >
            {site.brand}
          </motion.p>
          <motion.p
            className="mt-2 text-sm text-zinc-600 sm:text-base"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.04 }}
          >
            {site.tagline}
          </motion.p>
          <motion.h1
            id="hero-title"
            className="mt-8 text-3xl font-semibold leading-[1.15] tracking-tight text-zinc-900 sm:text-4xl sm:leading-[1.12] md:text-5xl md:leading-[1.1]"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.08 }}
          >
            {before}
            {highlight ? (
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-500 bg-clip-text text-transparent">
                {highlight}
              </span>
            ) : null}
            {after}
          </motion.h1>
          <motion.p
            className="mt-6 text-base leading-relaxed text-zinc-600 sm:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.12 }}
          >
            {heroContent.subtitle}
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.18 }}
          >
            <a
              href={heroContent.primaryCta.href}
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-indigo-600 px-8 text-sm font-semibold text-white shadow-md shadow-indigo-600/20 transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              aria-label={heroContent.primaryCta.ariaLabel}
            >
              {heroContent.primaryCta.label}
            </a>
            <a
              href={heroContent.secondaryCta.href}
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-zinc-300 bg-white/80 px-8 text-sm font-semibold text-zinc-800 backdrop-blur-sm transition hover:border-zinc-400 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
              aria-label={heroContent.secondaryCta.ariaLabel}
            >
              {heroContent.secondaryCta.label}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
