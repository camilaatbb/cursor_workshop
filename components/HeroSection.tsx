"use client";

import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
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
    : { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section
      id={heroContent.id}
      aria-labelledby="hero-title"
      className="relative isolate w-full min-h-[calc(100svh-3.25rem)]"
    >
      <Image
        src={heroContent.image.src}
        alt={heroContent.image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-zinc-950/50"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/55 to-zinc-900/35"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-[calc(100svh-3.25rem)] flex-col justify-end px-4 pb-16 pt-20 sm:px-6 sm:pb-20 md:justify-center md:pb-28 md:pt-24">
        <div className="mx-auto w-full max-w-7xl md:flex md:justify-start">
          <motion.div
            className="max-w-xl md:max-w-2xl"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90 sm:text-xs">
              {site.brand}
            </p>
            <p className="mt-3 max-w-md text-sm leading-snug text-white/80 sm:text-base">
              {site.tagline}
            </p>
            <p className="mt-4 inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white/95 backdrop-blur-md sm:text-sm">
              {heroContent.badge}
            </p>
            <h1
              id="hero-title"
              className="mt-6 text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl sm:leading-[1.1] md:text-5xl md:leading-[1.08]"
            >
              {before}
              {highlight ? (
                <span className="bg-gradient-to-r from-rose-200 via-white to-rose-100 bg-clip-text text-transparent">
                  {highlight}
                </span>
              ) : null}
              {after}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-200/95 sm:text-lg">
              {heroContent.subtitle}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: reduceMotion ? 0 : 0.08 }}
                whileHover={reduceMotion ? undefined : { scale: 1.02 }}
              >
                <a
                  href={heroContent.primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-zinc-900 shadow-lg shadow-zinc-950/25 transition hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
                  aria-label={heroContent.primaryCta.ariaLabel}
                >
                  {heroContent.primaryCta.label}
                </a>
              </motion.div>
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: reduceMotion ? 0 : 0.14 }}
                whileHover={reduceMotion ? undefined : { scale: 1.02 }}
              >
                <a
                  href={heroContent.secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/35 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
                  aria-label={heroContent.secondaryCta.ariaLabel}
                >
                  {heroContent.secondaryCta.label}
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
