import { aboutContent } from "@/constants/content";
import { SectionReveal } from "@/components/SectionReveal";

export function AboutSection() {
  return (
    <section
      id={aboutContent.id}
      aria-labelledby="about-title"
      className="border-b border-zinc-200/80 bg-white px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <div className="grid gap-12 md:grid-cols-12 md:items-start md:gap-16">
            <div className="md:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-rose-600">
                {aboutContent.eyebrow}
              </p>
              <h2
                id="about-title"
                className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl md:leading-[1.15]"
              >
                {aboutContent.title}
              </h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-zinc-600 sm:text-lg md:col-span-6 md:col-start-7">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="border-l-2 border-rose-600 pl-6 text-base font-medium text-zinc-800 sm:text-lg">
                {aboutContent.pullQuote}
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
