import { faqContent } from "@/constants/content";

export function FaqSection() {
  return (
    <section
      id={faqContent.id}
      aria-labelledby="faq-title"
      className="section-y border-b border-zinc-200/80 bg-zinc-50"
    >
      <div className="section-inner">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="faq-title"
            className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl"
          >
            {faqContent.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
            {faqContent.intro}
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-3xl divide-y divide-zinc-200 border-y border-zinc-200">
          {faqContent.items.map((item) => (
            <details
              key={item.question}
              className="group faq-details py-2"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-semibold text-zinc-900 marker:content-none sm:text-lg">
                <span>{item.question}</span>
                <span
                  className="flex size-8 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 transition group-open:rotate-45 group-open:border-violet-200 group-open:text-violet-600"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="pb-4 pl-0 pr-10 text-sm leading-relaxed text-zinc-600 sm:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
