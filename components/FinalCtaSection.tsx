import { finalCtaSection, site } from "@/constants/content";
import { SectionReveal } from "@/components/SectionReveal";

export function FinalCtaSection() {
  return (
    <section
      id={finalCtaSection.id}
      aria-labelledby="final-cta-title"
      className="bg-blue-950 px-4 py-20 text-white sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300/95">
              {finalCtaSection.eyebrow}
            </p>
            <h2
              id="final-cta-title"
              className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl"
            >
              {finalCtaSection.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-blue-100/90 sm:text-lg">
              {finalCtaSection.line}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.urls.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-sm bg-white px-6 text-sm font-semibold text-blue-950 transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label={finalCtaSection.primaryAriaLabel}
              >
                {finalCtaSection.primaryLabel}
              </a>
              <a
                href={site.urls.whatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/30 bg-transparent px-6 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label={finalCtaSection.secondaryAriaLabel}
              >
                {finalCtaSection.secondaryLabel}
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
