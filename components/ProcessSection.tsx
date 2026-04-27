import { processContent } from "@/constants/content";

export function ProcessSection() {
  return (
    <section
      id={processContent.id}
      aria-labelledby="process-title"
      className="section-y border-b border-zinc-200/80 bg-white"
    >
      <div className="section-inner">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="process-title"
            className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl"
          >
            {processContent.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
            {processContent.intro}
          </p>
        </div>
        <ol className="relative mx-auto mt-16 max-w-2xl border-l-2 border-zinc-200 pl-8 sm:pl-10">
          {processContent.steps.map((step, index) => (
            <li key={step.title} className="relative pb-14 last:pb-0">
              <span
                className="absolute -left-[calc(0.5rem+1px)] top-0 flex size-4 -translate-x-1/2 items-center justify-center rounded-full bg-violet-600 ring-4 ring-white sm:-left-[calc(0.625rem+1px)]"
                aria-hidden
              />
              <span className="text-xs font-semibold uppercase tracking-widest text-violet-600">
                Paso {index + 1}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-zinc-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
