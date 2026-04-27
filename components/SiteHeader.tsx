import Link from "next/link";
import { headerContent, site } from "@/constants/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-zinc-50/80 backdrop-blur-xl supports-[backdrop-filter]:bg-zinc-50/65">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/#hero"
          className="shrink-0 text-xs font-semibold tracking-[0.12em] text-zinc-900 sm:text-sm"
        >
          {site.brand}
        </Link>
        <nav
          aria-label="Secciones"
          className="min-w-0 flex-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <ul className="flex items-center justify-end gap-1 sm:justify-center sm:gap-2 md:gap-3">
            {headerContent.nav.map((item) => (
              <li key={item.href} className="shrink-0">
                <a
                  href={item.href}
                  className="rounded-lg px-2 py-1.5 text-[11px] font-medium text-zinc-600 transition hover:bg-zinc-200/50 hover:text-zinc-900 sm:text-xs md:text-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={headerContent.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 min-h-10 items-center justify-center rounded-full bg-zinc-900 px-3 text-[11px] font-semibold text-white transition hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 sm:px-4 sm:text-xs md:text-sm"
          aria-label={headerContent.ctaAriaLabel ?? headerContent.ctaLabel}
        >
          {headerContent.ctaLabel}
        </a>
      </div>
    </header>
  );
}
