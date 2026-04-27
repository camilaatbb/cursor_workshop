import Image from "next/image";
import { portfolioSection } from "@/constants/content";
import { SectionReveal } from "@/components/SectionReveal";

export function PortfolioSection() {
  return (
    <section
      id={portfolioSection.id}
      aria-labelledby="portfolio-title"
      className="border-b border-zinc-200/80 bg-white px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-rose-600">
              {portfolioSection.eyebrow}
            </p>
            <h2
              id="portfolio-title"
              className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl"
            >
              {portfolioSection.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-600 sm:text-lg">
              {portfolioSection.intro}
            </p>
          </div>

          <ul className="mt-20 space-y-24 md:space-y-32">
            {portfolioSection.projects.map((project, index) => (
              <li key={project.title}>
                <article className="grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-20">
                  <div
                    className={`group relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-200 ${index % 2 === 1 ? "md:order-2" : ""}`}
                  >
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      sizes="(min-width: 768px) 42vw, 100vw"
                      className="object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className={index % 2 === 1 ? "md:order-1" : undefined}>
                    <ul className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li key={tag}>
                          <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200/90">
                            {tag}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <h3 className="mt-6 text-xl font-semibold text-zinc-900 sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
                      {project.outcome}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </SectionReveal>
      </div>
    </section>
  );
}
