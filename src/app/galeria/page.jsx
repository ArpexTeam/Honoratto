import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryStyleShowcase from "@/components/gallery/GalleryStyleShowcase";
import StudioCtaBar from "@/components/studio/StudioCtaBar";

export const metadata = {
  title: "Galeria",
  description: "Explore trabalhos e encontre inspiração para sua próxima tatuagem.",
};

export default function GaleriaPage() {
  return (
    <main>
      <GalleryHero />
      <GalleryStyleShowcase />
      <StudioCtaBar/>
      {/* Próximas seções (tabs + destaque) você adiciona abaixo depois */}
    </main>
  );
}
