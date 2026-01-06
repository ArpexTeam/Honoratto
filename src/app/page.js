import Image from "next/image";
import Hero from "@/components/Hero";
import CollectionsSection from "@/components/CollectionsSection";
import PortfolioSection from "@/components/PortfolioSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StudioSection from "@/components/StudioSection";
import FinalCTASection from "@/components/FinalCTASection";


export default function Home() {
  return (
      <main>
      <Hero />
      <CollectionsSection/>
      <PortfolioSection />
      <BenefitsSection />
      <TestimonialsSection />
      <StudioSection />
      <FinalCTASection />

    </main>
  );
}
