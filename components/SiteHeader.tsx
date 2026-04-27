"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { headerContent, headerNavContent, site } from "@/constants/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 h-[var(--header-height)] border-b border-zinc-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="shrink-0 text-sm font-semibold tracking-tight text-zinc-900 sm:text-base"
        >
          {site.brand}
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Secciones principales"
        >
          {headerNavContent.links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.urls.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-10 shrink-0 items-center justify-center rounded-lg bg-zinc-900 px-4 text-sm font-medium text-white transition hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 sm:inline-flex"
            aria-label={headerContent.ctaAriaLabel}
          >
            {headerContent.ctaLabel}
          </a>

          <button
            type="button"
            className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-900 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? headerContent.menuCloseLabel : headerContent.menuOpenLabel}
          >
            {open ? (
              <X className="size-5" aria-hidden />
            ) : (
              <Menu className="size-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 top-[var(--header-height)] z-40 flex justify-end bg-zinc-950/40 lg:hidden"
          aria-hidden={!open}
        >
          <button
            type="button"
            className="absolute inset-0 z-0 cursor-default bg-transparent"
            aria-label={headerContent.menuCloseLabel}
            onClick={() => setOpen(false)}
          />
          <div className="relative z-10 h-full w-[min(100%,20rem)] border-l border-zinc-200 bg-white px-4 py-6 shadow-lg">
            <nav className="flex flex-col gap-1" aria-label="Secciones (móvil)">
              {headerNavContent.links.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-base font-medium text-zinc-800 hover:bg-zinc-50"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={site.urls.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-12 items-center justify-center rounded-lg bg-zinc-900 px-4 text-sm font-medium text-white"
                onClick={() => setOpen(false)}
              >
                {headerContent.ctaLabel}
              </a>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
