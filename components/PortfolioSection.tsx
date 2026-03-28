import Image from "next/image";
import { portfolioSection } from "@/constants/content";
import { SectionReveal } from "@/components/SectionReveal";

export function PortfolioSection() {
  return (
    <section
      id={portfolioSection.id}
      aria-labelledby="portfolio-title"
      className="border-b border-blue-100/80 bg-slate-50 px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">
              {portfolioSection.eyebrow}
            </p>
            <h2
              id="portfolio-title"
              className="mt-3 text-2xl font-semibold tracking-tight text-blue-950 sm:text-3xl md:text-4xl"
            >
              {portfolioSection.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              {portfolioSection.intro}
            </p>
          </div>

          <ul className="mt-16 space-y-20 md:space-y-28">
            {portfolioSection.projects.map((project, index) => (
              <li key={project.title}>
                <article className="grid items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
                  <div
                    className={`group relative aspect-[4/3] overflow-hidden rounded-sm border border-blue-100/80 bg-slate-100 ${index % 2 === 1 ? "md:order-2" : ""}`}
                  >
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div
                    className={index % 2 === 1 ? "md:order-1" : undefined}
                  >
                    <ul className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li key={tag}>
                          <span className="rounded-sm border border-blue-100 bg-white px-3 py-1 text-xs font-medium text-blue-900">
                            {tag}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <h3 className="mt-5 text-xl font-semibold text-blue-950 sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
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
