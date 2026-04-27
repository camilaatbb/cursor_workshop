import { testimonialsSection } from "@/constants/content";
import { SectionReveal } from "@/components/SectionReveal";

export function TestimonialsSection() {
  return (
    <section
      id={testimonialsSection.id}
      aria-labelledby="testimonials-title"
      className="border-b border-zinc-200/80 bg-zinc-50 px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-rose-600">
              {testimonialsSection.eyebrow}
            </p>
            <h2
              id="testimonials-title"
              className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl"
            >
              {testimonialsSection.title}
            </h2>
          </div>

          <div className="mt-20 grid gap-16 md:grid-cols-2 md:gap-12 lg:gap-24">
            {testimonialsSection.items.map((item) => (
              <figure key={item.name} className="flex flex-col">
                <blockquote className="text-xl font-medium leading-snug text-zinc-900 sm:text-2xl sm:leading-snug">
                  <span className="text-rose-600/90" aria-hidden>
                    “
                  </span>
                  {item.quote}
                  <span className="text-rose-600/90" aria-hidden>
                    ”
                  </span>
                </blockquote>
                <figcaption className="mt-10 border-t border-zinc-200 pt-8 text-sm text-zinc-600">
                  <span className="font-semibold text-zinc-900">
                    {item.name}
                  </span>
                  <span className="text-zinc-400"> · </span>
                  {item.role}
                  <span className="mt-1 block text-zinc-500">{item.org}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
