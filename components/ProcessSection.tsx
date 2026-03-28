import { processSection } from "@/constants/content";
import { SectionReveal } from "@/components/SectionReveal";

export function ProcessSection() {
  return (
    <section
      id={processSection.id}
      aria-labelledby="process-title"
      className="border-b border-blue-100/80 bg-slate-50 px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">
              {processSection.eyebrow}
            </p>
            <h2
              id="process-title"
              className="mt-3 text-2xl font-semibold tracking-tight text-blue-950 sm:text-3xl md:text-4xl"
            >
              {processSection.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              {processSection.intro}
            </p>
          </div>

          <ol className="mt-16 grid gap-10 md:grid-cols-4 md:gap-6 md:gap-y-14">
            {processSection.steps.map((step, index) => (
              <li key={step.n} className="relative md:pt-2">
                {index < processSection.steps.length - 1 ? (
                  <span
                    className="absolute left-[0.65rem] top-10 hidden h-px w-[calc(100%+1.5rem)] bg-blue-100 md:block"
                    aria-hidden
                  />
                ) : null}
                <span className="text-xs font-semibold tabular-nums text-blue-800">
                  {step.n}
                </span>
                <h3 className="mt-3 text-base font-semibold text-blue-950 sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
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
