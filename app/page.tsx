import { AboutSection } from "@/components/AboutSection";
import { FinalCtaAndFooter } from "@/components/FinalCtaAndFooter";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SiteHeader } from "@/components/SiteHeader";
import { ValueGridSection } from "@/components/ValueGridSection";

export default function Home() {
  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-900 antialiased">
      <SiteHeader />
      <main>
        <HeroSection />
        <ValueGridSection />
        <ProjectsSection />
        <AboutSection />
        <FinalCtaAndFooter />
      </main>
    </div>
  );
}
