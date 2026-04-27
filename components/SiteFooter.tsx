import { ExternalLink, Mail, MessageCircle } from "lucide-react";
import { footerContent, site } from "@/constants/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      id={footerContent.id}
      className="border-t border-zinc-200 bg-white px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="text-sm font-semibold tracking-[0.1em] text-zinc-900">
              {site.brand}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-600">
              {footerContent.tagline}
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 md:col-span-4 md:col-start-8">
            {footerContent.columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm font-medium text-zinc-700 transition hover:text-rose-600"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-8 border-t border-zinc-200 pt-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              {footerContent.socialLabel}
            </p>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-zinc-700 transition hover:text-rose-600"
              >
                <Mail className="size-4 shrink-0" aria-hidden />
                {site.email}
              </a>
              <a
                href={site.urls.whatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-zinc-700 transition hover:text-rose-600"
              >
                <MessageCircle className="size-4 shrink-0" aria-hidden />
                WhatsApp · {site.whatsAppNumber}
              </a>
              <a
                href={site.urls.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-zinc-700 transition hover:text-rose-600"
                aria-label="Abrir LinkedIn"
              >
                <ExternalLink className="size-4 shrink-0" aria-hidden />
                LinkedIn
              </a>
            </div>
          </div>
          <p className="text-sm text-zinc-500">
            © {year} {footerContent.copyrightHolder}
          </p>
        </div>
      </div>
    </footer>
  );
}
