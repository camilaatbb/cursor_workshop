"use client";

import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolioContent } from "@/constants/content";

export function PortfolioSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={portfolioContent.id}
      aria-labelledby="portfolio-title"
      className="section-y border-b border-zinc-200/80 bg-white"
    >
      <div className="section-inner">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="portfolio-title"
            className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl"
          >
            {portfolioContent.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
            {portfolioContent.intro}
          </p>
        </div>
        <ul className="mt-16 space-y-20 md:space-y-24">
          {portfolioContent.items.map((item, index) => {
            const reverse = index % 2 === 1;
            return (
              <motion.li
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <article
                  className={`grid items-center gap-10 md:grid-cols-2 md:gap-14 ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}
                >
                  <Link
                    href={item.href}
                    className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-200/80 transition hover:ring-violet-200/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
                    aria-label={`${item.title}: ver detalle`}
                  >
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                    <span className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-sm backdrop-blur-sm transition group-hover:bg-violet-600 group-hover:text-white">
                      <ArrowUpRight className="size-5" aria-hidden />
                    </span>
                  </Link>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-violet-600">
                      {item.tag}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-zinc-900 sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-zinc-600">
                      {item.outcome}
                    </p>
                    <Link
                      href={item.href}
                      className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-violet-600 transition hover:text-violet-700"
                    >
                      Ver más
                      <ArrowUpRight className="size-4" aria-hidden />
                    </Link>
                  </div>
                </article>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
