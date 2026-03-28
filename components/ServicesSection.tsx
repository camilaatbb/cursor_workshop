import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Layers,
  MessageCircle,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";
import type { LucideIconName } from "@/constants/content";
import { servicesSection, valueItems } from "@/constants/content";
import { SectionReveal } from "@/components/SectionReveal";

const ICON_MAP: Record<LucideIconName, LucideIcon> = {
  Code2,
  Users,
  Rocket,
  Layers,
  Sparkles,
  MessageCircle,
};

export function ServicesSection() {
  return (
    <section
      id={servicesSection.id}
      aria-labelledby="services-title"
      className="border-b border-blue-100/80 bg-white px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">
              {servicesSection.eyebrow}
            </p>
            <h2
              id="services-title"
              className="mt-3 text-2xl font-semibold tracking-tight text-blue-950 sm:text-3xl md:text-4xl"
            >
              {servicesSection.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              {servicesSection.intro}
            </p>
          </div>

          <ul className="mt-16 divide-y divide-blue-100 border-t border-blue-100">
            {valueItems.map((item) => {
              const Icon = ICON_MAP[item.icon];
              return (
                <li key={item.title} className="grid gap-6 py-12 sm:grid-cols-12 sm:items-start sm:gap-8">
                  <div className="flex items-start gap-4 sm:col-span-1 sm:justify-center sm:pt-1">
                    <Icon
                      className="size-6 shrink-0 text-blue-800"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  </div>
                  <div className="sm:col-span-11">
                    <h3 className="text-lg font-semibold text-blue-950 sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">
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
