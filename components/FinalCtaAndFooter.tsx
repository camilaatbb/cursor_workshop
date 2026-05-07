"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Linkedin, Mail, MessageCircle } from "lucide-react";
import type { ContactIconName } from "@/constants/content";
import {
  closingCtaContent,
  footerContent,
  legalContent,
  site,
} from "@/constants/content";

const CONTACT_ICON_MAP: Record<ContactIconName, LucideIcon> = {
  Mail,
  MessageCircle,
  Linkedin,
};

export function FinalCtaAndFooter() {
  const year = new Date().getFullYear();
  const reduceMotion = useReducedMotion();

  return (
    <div id={closingCtaContent.id} className="mt-auto bg-zinc-950 text-white">
      <section
        aria-labelledby="closing-cta-title"
        className="px-4 py-20 sm:px-6 sm:py-28"
      >
        <motion.div
          className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-12 text-center shadow-2xl shadow-black/20 sm:px-10 md:py-16"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow text-violet-300">{closingCtaContent.eyebrow}</p>
          <h2
            id="closing-cta-title"
            className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-6xl"
          >
            {closingCtaContent.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            {closingCtaContent.closingLine}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={closingCtaContent.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-8 text-sm font-medium text-zinc-950 transition hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label={closingCtaContent.primaryCta.ariaLabel}
            >
              {closingCtaContent.primaryCta.label}
            </a>
            <a
              href={closingCtaContent.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 px-8 text-sm font-medium text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label={closingCtaContent.secondaryCta.ariaLabel}
            >
              {closingCtaContent.secondaryCta.label}
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 px-4 py-12 text-zinc-400 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <p className="text-sm font-semibold tracking-[0.24em] text-white">
                {site.brand}
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed">
                {footerContent.tagline}
              </p>
              <p className="mt-4 text-xs leading-relaxed text-zinc-600">
                {legalContent.note}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                {footerContent.contactTitle}
              </p>
              <ul className="mt-4 space-y-3">
                {footerContent.contactLinks.map((item) => {
                  const Icon = CONTACT_ICON_MAP[item.icon];
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-white"
                        aria-label={item.ariaLabel}
                      >
                        <Icon className="size-4 shrink-0" aria-hidden />
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                {footerContent.socialTitle}
              </p>
              <ul className="mt-4 space-y-3">
                {footerContent.socialLinks.map((item) => {
                  const Icon = CONTACT_ICON_MAP[item.icon];
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-white"
                        aria-label={item.ariaLabel}
                      >
                        <Icon className="size-4 shrink-0" aria-hidden />
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <p className="mt-10 border-t border-white/10 pt-8 text-sm text-zinc-600">
            © {year} {footerContent.copyrightHolder}
          </p>
        </div>
      </footer>
    </div>
  );
}
