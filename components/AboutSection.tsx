import { aboutContent } from "@/constants/content";
import { SectionReveal } from "@/components/SectionReveal";

export function AboutSection() {
  return (
    <section
      id={aboutContent.id}
      aria-labelledby="about-title"
      className="border-b border-blue-100/80 bg-slate-50 px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <div className="grid gap-12 md:grid-cols-12 md:items-start">
            <div className="md:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">
                {aboutContent.eyebrow}
              </p>
              <h2
                id="about-title"
                className="mt-3 text-2xl font-semibold tracking-tight text-blue-950 sm:text-3xl md:text-4xl md:leading-tight"
              >
                {aboutContent.title}
              </h2>
              <p className="mt-4 text-xl font-semibold leading-snug text-blue-950 sm:text-2xl sm:leading-snug">
                {aboutContent.subtitle}
              </p>
              <p className="mt-6 text-lg font-medium leading-relaxed text-blue-950 sm:text-xl">
                {aboutContent.lead}
              </p>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                {aboutContent.body.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <aside className="md:col-span-4 md:col-start-9">
              <div className="border-l-2 border-blue-800 pl-6 md:pl-8">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {aboutContent.highlight.label}
                </p>
                <p className="mt-3 text-base leading-relaxed text-slate-700">
                  {aboutContent.highlight.value}
                </p>
              </div>
            </aside>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
