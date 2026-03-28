import { testimonialsSection } from "@/constants/content";
import { SectionReveal } from "@/components/SectionReveal";

export function TestimonialsSection() {
  return (
    <section
      id={testimonialsSection.id}
      aria-labelledby="testimonials-title"
      className="border-b border-blue-100/80 bg-white px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">
              {testimonialsSection.eyebrow}
            </p>
            <h2
              id="testimonials-title"
              className="mt-3 text-2xl font-semibold tracking-tight text-blue-950 sm:text-3xl md:text-4xl"
            >
              {testimonialsSection.title}
            </h2>
          </div>

          <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-12 lg:gap-20">
            {testimonialsSection.items.map((item) => (
              <figure key={item.name} className="flex flex-col">
                <blockquote className="text-xl font-medium leading-snug text-blue-950 sm:text-2xl sm:leading-snug">
                  <span className="text-blue-700" aria-hidden>
                    “
                  </span>
                  {item.quote}
                  <span className="text-blue-700" aria-hidden>
                    ”
                  </span>
                </blockquote>
                <figcaption className="mt-8 border-t border-blue-100 pt-8 text-sm text-slate-600">
                  <span className="font-semibold text-blue-950">
                    {item.name}
                  </span>
                  <span className="text-slate-400"> · </span>
                  {item.role}
                  <span className="mt-1 block text-slate-500">{item.org}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
