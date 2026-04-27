"use client";

import { motion, useReducedMotion } from "framer-motion";
import { finalSection } from "@/constants/content";

export function FinalCtaSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={finalSection.id}
      aria-labelledby="final-cta-title"
      className="bg-zinc-950 px-4 py-24 text-white sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
          }
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-rose-300">
            {finalSection.eyebrow}
          </p>
          <h2
            id="final-cta-title"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {finalSection.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-300 sm:text-lg">
            {finalSection.description}
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
            <a
              href={finalSection.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label={finalSection.primaryCta.ariaLabel}
            >
              {finalSection.primaryCta.label}
            </a>
            <a
              href={finalSection.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-zinc-600 px-8 text-sm font-semibold text-white transition hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label={finalSection.secondaryCta.ariaLabel}
            >
              {finalSection.secondaryCta.label}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
