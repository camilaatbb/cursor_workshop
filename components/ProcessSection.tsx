import { processSection } from "@/constants/content";
import { SectionReveal } from "@/components/SectionReveal";

export function ProcessSection() {
  return (
    <section
      id={processSection.id}
      aria-labelledby="process-title"
      className="border-b border-zinc-200/80 bg-white px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-rose-600">
              {processSection.eyebrow}
            </p>
            <h2
              id="process-title"
              className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl"
            >
              {processSection.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-600 sm:text-lg">
              {processSection.intro}
            </p>
          </div>

          <ol className="mt-20 grid gap-12 sm:gap-16 md:grid-cols-2 md:gap-x-12 md:gap-y-20 lg:grid-cols-4 lg:gap-x-8">
            {processSection.steps.map((step) => (
              <li key={step.n} className="relative md:pt-1">
                <span className="text-xs font-semibold tabular-nums text-rose-600">
                  {step.n}
                </span>
                <h3 className="mt-3 text-base font-semibold text-zinc-900 sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </SectionReveal>
      </div>
    </section>
  );
}
