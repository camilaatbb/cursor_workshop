import { ExternalLink, Mail, MessageCircle } from "lucide-react";
import {
  footerContent,
  headerNavContent,
  legalContent,
  site,
} from "@/constants/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="pie"
      className="border-t border-zinc-800 bg-zinc-950 px-4 py-14 text-zinc-400 sm:px-6"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p className="text-sm font-semibold text-white">{site.brand}</p>
            <p className="mt-2 text-sm leading-relaxed">
              {footerContent.tagline}
            </p>
            <p className="mt-4 text-xs leading-relaxed text-zinc-500">
              {legalContent.note}
            </p>
          </div>
          <nav aria-label="Pie de página">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Secciones
            </p>
            <ul className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {headerNavContent.links.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-zinc-300 transition hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-zinc-800 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-zinc-300 transition hover:text-white"
            >
              <Mail className="size-4 shrink-0" aria-hidden />
              {site.email}
            </a>
            <a
              href={site.urls.whatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-zinc-300 transition hover:text-white"
            >
              <MessageCircle className="size-4 shrink-0" aria-hidden />
              WhatsApp
            </a>
            <a
              href={site.urls.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-zinc-300 transition hover:text-white"
              aria-label="Abrir LinkedIn en una pestaña nueva"
            >
              <ExternalLink className="size-4 shrink-0" aria-hidden />
              LinkedIn
            </a>
          </div>
          <p className="text-sm text-zinc-500">
            © {year} {footerContent.copyrightHolder}
          </p>
        </div>
      </div>
    </footer>
  );
}
