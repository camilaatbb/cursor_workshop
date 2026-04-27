import type { LucideIcon } from "lucide-react";
import {
  Megaphone,
  MonitorSmartphone,
  Store,
} from "lucide-react";
import type { LucideIconName } from "@/constants/content";
import { servicesSection, valueItems } from "@/constants/content";
import { SectionReveal } from "@/components/SectionReveal";

const ICON_MAP: Record<LucideIconName, LucideIcon> = {
  Store,
  MonitorSmartphone,
  Megaphone,
};

export function ServicesSection() {
  return (
    <section
      id={servicesSection.id}
      aria-labelledby="services-title"
      className="border-b border-zinc-200/80 bg-zinc-50 px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-rose-600">
              {servicesSection.eyebrow}
            </p>
            <h2
              id="services-title"
              className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl"
            >
              {servicesSection.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-600 sm:text-lg">
              {servicesSection.intro}
            </p>
          </div>

          <ul className="mt-16 divide-y divide-zinc-200 border-t border-zinc-200">
            {valueItems.map((item) => {
              const Icon = ICON_MAP[item.icon];
              return (
                <li
                  key={item.title}
                  className="group grid gap-6 py-12 transition-colors sm:grid-cols-12 sm:items-start sm:gap-10 md:py-14"
                >
                  <div className="flex items-start gap-3 sm:col-span-1 sm:justify-center sm:pt-1">
                    <Icon
                      className="size-6 shrink-0 text-rose-600 transition group-hover:scale-105 sm:size-7"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  </div>
                  <div className="sm:col-span-11">
                    <h3 className="text-lg font-semibold text-zinc-900 sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-600">
                      {item.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </SectionReveal>
      </div>
    </section>
  );
}
