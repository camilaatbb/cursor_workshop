"use client";

import { motion, useReducedMotion } from "framer-motion";
import { aboutContent } from "@/constants/content";

export function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={aboutContent.id}
      aria-labelledby="about-title"
      className="section-y border-b border-zinc-200/80 bg-zinc-50"
    >
      <div className="section-inner">
        <motion.div
          className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className="eyebrow">{aboutContent.eyebrow}</p>
            <h2
              id="about-title"
              className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl md:leading-tight"
            >
              {aboutContent.title}
            </h2>
          </div>
          <div className="max-w-2xl md:pt-12">
            <p className="text-lg font-medium leading-relaxed text-zinc-800 sm:text-xl">
              {aboutContent.lead}
            </p>
            <div className="mt-7 space-y-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
              {aboutContent.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {aboutContent.proof.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm shadow-zinc-950/[0.03]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
