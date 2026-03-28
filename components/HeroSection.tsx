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
    : { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate w-full min-h-[calc(100svh-3.25rem)]"
    >
      <Image
        src={heroContent.image.src}
        alt={heroContent.image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_28%]"
      />
      <div
        className="absolute inset-0 bg-blue-950/60"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/50 to-blue-900/30"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-[calc(100svh-3.25rem)] flex-col justify-end px-4 pb-16 pt-24 sm:px-6 sm:pb-20 md:justify-center md:pb-24 md:pt-28">
        <div className="mx-auto w-full max-w-6xl md:flex md:justify-start">
          <motion.div
            className="max-w-xl md:max-w-2xl"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/85 sm:text-sm">
              {site.brand}
            </p>
            <p className="mt-2 text-sm text-white/75 sm:text-base">
              {site.tagline}
            </p>
            <h1
              id="hero-title"
              className="mt-6 text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl sm:leading-[1.1] md:text-5xl md:leading-[1.08]"
            >
              {before}
              {highlight ? (
                <span className="text-sky-200">{highlight}</span>
              ) : null}
              {after}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-blue-50/95 sm:text-lg">
              {heroContent.subtitle}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: reduceMotion ? 0 : 0.1 }}
              >
                <a
                  href={site.urls.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-white px-6 text-sm font-semibold text-blue-950 shadow-lg shadow-blue-950/25 transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
                  aria-label={heroContent.primaryCta.ariaLabel}
                >
                  {heroContent.primaryCta.label}
                </a>
              </motion.div>
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: reduceMotion ? 0 : 0.16 }}
              >
                <a
                  href={heroContent.secondaryCta.href}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-white/35 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
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
