"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Layers,
  MessageCircle,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";
import type { LucideIconName } from "@/constants/content";
import { servicesSection, valueItems } from "@/constants/content";

const ICON_MAP: Record<LucideIconName, LucideIcon> = {
  Code2,
  Users,
  Rocket,
  Layers,
  Sparkles,
  MessageCircle,
};

export function ValueGridSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={servicesSection.id}
      aria-labelledby="services-title"
      className="section-y border-b border-zinc-200/80 bg-white"
    >
      <div className="section-inner">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{servicesSection.eyebrow}</p>
          <h2
            id="services-title"
            className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl"
          >
            {servicesSection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
            {servicesSection.intro}
          </p>
        </div>
        <motion.ul
          className="mt-16 grid gap-4 md:grid-cols-3"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {valueItems.map((item) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <motion.li
                key={item.title}
                className="group flex min-h-64 flex-col justify-between rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition hover:-translate-y-1 hover:border-zinc-300 hover:bg-white hover:shadow-xl hover:shadow-zinc-950/[0.06]"
                whileHover={reduceMotion ? undefined : { y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <Icon
                  className="size-6 shrink-0 text-violet-600 transition group-hover:scale-110"
                  aria-hidden
                />
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
