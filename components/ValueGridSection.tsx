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

const ICON_MAP: Record<LucideIconName, LucideIcon> = {
  Code2,
  Users,
  Rocket,
  Layers,
  Sparkles,
  MessageCircle,
};

export function ValueGridSection() {
  return (
    <section
      id={servicesSection.id}
      aria-labelledby="services-title"
      className="section-y border-b border-zinc-200/80 bg-white"
    >
      <div className="section-inner">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="services-title"
            className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl"
          >
            {servicesSection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
            {servicesSection.intro}
          </p>
        </div>
        <ul className="mt-16 grid divide-y divide-zinc-200 border-y border-zinc-200 md:grid-cols-3 md:divide-x md:divide-y-0">
          {valueItems.map((item) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <li key={item.title} className="flex flex-col gap-4 px-1 py-12 md:px-8">
                <Icon
                  className="size-5 shrink-0 text-violet-600"
                  aria-hidden
                />
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
