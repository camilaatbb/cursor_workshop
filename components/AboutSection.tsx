import { aboutContent } from "@/constants/content";

export function AboutSection() {
  return (
    <section
      id={aboutContent.id}
      aria-labelledby="about-title"
      className="section-y border-b border-zinc-200/80 bg-zinc-50"
    >
      <div className="section-inner">
        <div className="mx-auto max-w-3xl">
          <h2
            id="about-title"
            className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl md:leading-tight"
          >
            {aboutContent.title}
          </h2>
          <p className="mt-5 text-lg font-medium leading-relaxed text-zinc-700 sm:text-xl">
            {aboutContent.lead}
          </p>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-zinc-600 sm:text-lg">
            {aboutContent.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
