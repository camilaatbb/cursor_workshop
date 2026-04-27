import { closingCtaContent, site } from "@/constants/content";

export function ClosingCtaSection() {
  return (
    <section
      id={closingCtaContent.id}
      aria-labelledby="closing-cta-title"
      className="bg-zinc-900 px-4 py-20 text-white sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-7xl text-center">
        <h2
          id="closing-cta-title"
          className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl"
        >
          {closingCtaContent.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
          {closingCtaContent.closingLine}
        </p>
        <a
          href={site.urls.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-8 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label={closingCtaContent.primaryCta.ariaLabel}
        >
          {closingCtaContent.primaryCta.label}
        </a>
      </div>
    </section>
  );
}
