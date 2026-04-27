import { testimonialsContent } from "@/constants/content";

export function TestimonialsSection() {
  return (
    <section
      id={testimonialsContent.id}
      aria-labelledby="testimonials-title"
      className="section-y border-b border-zinc-200/80 bg-zinc-50"
    >
      <div className="section-inner">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="testimonials-title"
            className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl"
          >
            {testimonialsContent.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
            {testimonialsContent.intro}
          </p>
        </div>
        <ul className="mx-auto mt-16 grid max-w-5xl gap-12 md:grid-cols-3 md:gap-10">
          {testimonialsContent.items.map((item) => (
            <li key={item.name}>
              <figure className="flex h-full flex-col">
                <blockquote className="border-l-4 border-violet-500 pl-5 text-base leading-relaxed text-zinc-800 sm:text-lg">
                  <p>&ldquo;{item.quote}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-6 text-sm text-zinc-600">
                  <span className="font-semibold text-zinc-900">
                    {item.name}
                  </span>
                  <span className="mt-1 block text-zinc-500">
                    {item.role}, {item.company}
                  </span>
                  <span className="mt-2 block text-xs font-medium uppercase tracking-wide text-violet-600">
                    {item.outcome}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
