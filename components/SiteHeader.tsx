import Link from "next/link";
import { headerContent, site } from "@/constants/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-blue-100/90 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="shrink-0 text-sm font-semibold tracking-tight text-blue-950 sm:text-base"
        >
          {site.brand}
        </Link>
        <nav
          aria-label="Secciones"
          className="min-w-0 flex-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <ul className="flex items-center gap-1 whitespace-nowrap pr-2 sm:gap-3">
            {headerContent.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-md px-2 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-950 sm:text-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={site.urls.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 min-h-10 items-center justify-center rounded-sm bg-blue-950 px-3 text-xs font-medium text-white transition hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950 sm:px-4 sm:text-sm"
          aria-label={headerContent.ctaAriaLabel}
        >
          {headerContent.ctaLabel}
        </a>
      </div>
    </header>
  );
}
