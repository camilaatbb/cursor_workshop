import { AboutSection } from "@/components/AboutSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCtaAndFooter } from "@/components/FinalCtaAndFooter";
import { HeroSection } from "@/components/HeroSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ProcessSection } from "@/components/ProcessSection";
import { SiteHeader } from "@/components/SiteHeader";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ValueGridSection } from "@/components/ValueGridSection";

export default function Home() {
  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-900">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ValueGridSection />
        <ProcessSection />
        <TestimonialsSection />
        <PortfolioSection />
        <FaqSection />
      </main>
      <FinalCtaAndFooter />
    </div>
  );
}
