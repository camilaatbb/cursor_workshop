import { ChevronDown } from "lucide-react";
import { faqSection } from "@/constants/content";
import { SectionReveal } from "@/components/SectionReveal";

export function FaqSection() {
  return (
    <section
      id={faqSection.id}
      aria-labelledby="faq-title"
      className="border-b border-blue-100/80 bg-white px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">
              {faqSection.eyebrow}
            </p>
            <h2
              id="faq-title"
              className="mt-3 text-2xl font-semibold tracking-tight text-blue-950 sm:text-3xl md:text-4xl"
            >
              {faqSection.title}
            </h2>
          </div>

          <div className="mx-auto mt-14 max-w-3xl border-t border-blue-100">
            {faqSection.items.map((item) => (
              <details
                key={item.question}
                className="group border-b border-blue-100"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-semibold text-blue-950 marker:content-none sm:text-lg [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <ChevronDown
                    className="size-5 shrink-0 text-blue-800/70 transition duration-200 group-open:rotate-180"
                    strokeWidth={2}
                    aria-hidden
                  />
                </summary>
                <p className="pb-5 text-base leading-relaxed text-slate-600">
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
