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
    : { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate min-h-[calc(100svh-var(--header-height))] w-full overflow-hidden bg-zinc-950"
    >
      <Image
        src={heroContent.imageSrc}
        alt={heroContent.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_25%]"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-zinc-950/35 md:bg-gradient-to-r md:from-zinc-950 md:via-zinc-950/88 md:to-zinc-950/20"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-var(--header-height))] max-w-7xl flex-col justify-end px-4 pb-16 pt-10 sm:px-6 md:justify-center md:pb-24 md:pt-16">
        <div className="max-w-xl md:max-w-lg">
          <motion.p
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.35rem] md:leading-tight"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
          >
            {site.brand}
          </motion.p>
          <motion.p
            className="eyebrow mt-3 text-[0.65rem] text-violet-300 sm:text-xs"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.04 }}
          >
            {heroContent.roleLine}
          </motion.p>
          <motion.h1
            id="hero-title"
            className="mt-5 text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl sm:leading-snug md:text-[1.65rem] md:leading-snug"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.08 }}
          >
            {before}
            {highlight ? (
              <span className="bg-gradient-to-r from-violet-300 to-indigo-300 bg-clip-text text-transparent">
                {highlight}
              </span>
            ) : null}
            {after}
          </motion.h1>
          <motion.p
            className="mt-5 text-base leading-relaxed text-zinc-300 sm:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.12 }}
          >
            {heroContent.subtitle}
          </motion.p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: reduceMotion ? 0 : 0.16 }}
            >
              <a
                href={site.urls.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-white px-6 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
                aria-label={heroContent.primaryCta.ariaLabel}
              >
                {heroContent.primaryCta.label}
              </a>
            </motion.div>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: reduceMotion ? 0 : 0.2 }}
            >
              <a
                href={heroContent.secondaryCta.href}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-white/25 bg-white/10 px-6 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
                aria-label={heroContent.secondaryCta.ariaLabel}
              >
                {heroContent.secondaryCta.label}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
