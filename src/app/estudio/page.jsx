import StudioHero from "@/components/studio/StudioHero";
import StudioEnvironment from "@/components/studio/StudioEnvironment";
import StudioFeelSection from "@/components/studio/StudioFeelSection";
import StudioLocation from "@/components/studio/StudioLocation";
import StudioCtaBar from "@/components/studio/StudioCtaBar";


export const metadata = {
  title: "O Estúdio",
  description: "Conheça o estúdio: calma, privacidade e precisão em cada traço.",
};

export default function EstudioPage() {
  return (
    <main>
      <StudioHero />
      <StudioEnvironment/>
      <StudioFeelSection/>
      <StudioLocation />
      <StudioCtaBar />

    </main>
  );
}
