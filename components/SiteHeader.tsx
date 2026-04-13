import Link from "next/link";
import { headerContent, site } from "@/constants/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6">
        <Link
          href="/"
          className="shrink-0 text-sm font-semibold tracking-tight text-zinc-900 sm:text-base"
        >
          {site.brand}
        </Link>
        <nav
          aria-label="Secciones"
          className="min-w-0 flex-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <ul className="flex items-center gap-1 pr-1 sm:gap-2">
            {headerContent.nav.map((item) => (
              <li key={item.href} className="shrink-0">
                <a
                  href={item.href}
                  className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 sm:text-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={headerContent.ctaHref}
          className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600 px-3 text-xs font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:px-4 sm:text-sm"
          aria-label={headerContent.ctaAriaLabel}
        >
          {headerContent.ctaLabel}
        </a>
      </div>
    </header>
  );
}
