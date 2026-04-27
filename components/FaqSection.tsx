import { ChevronDown } from "lucide-react";
import { faqSection } from "@/constants/content";
import { SectionReveal } from "@/components/SectionReveal";

export function FaqSection() {
  return (
    <section
      id={faqSection.id}
      aria-labelledby="faq-title"
      className="border-b border-zinc-200/80 bg-zinc-50 px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-rose-600">
              {faqSection.eyebrow}
            </p>
            <h2
              id="faq-title"
              className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl"
            >
              {faqSection.title}
            </h2>
          </div>

          <div className="mx-auto mt-16 max-w-3xl border-t border-zinc-200">
            {faqSection.items.map((item) => (
              <details
                key={item.question}
                className="group border-b border-zinc-200 bg-transparent"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-semibold text-zinc-900 marker:content-none sm:text-lg [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <ChevronDown
                    className="size-5 shrink-0 text-zinc-400 transition duration-200 group-open:rotate-180"
                    strokeWidth={2}
                    aria-hidden
                  />
                </summary>
                <p className="pb-5 text-base leading-relaxed text-zinc-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
