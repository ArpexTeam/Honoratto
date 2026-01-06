import StylesSection from "@/components/StylesSection";

export default function CollectionsSection() {
  const items = [
    {
      title: "Preto e cinza",
      desc: "Linhas finas, geometria precisa, silhuetas discretas.",
      imageSrc: "/images/tatto13.jpg",
    },
    {
      title: "old school",
      desc: "Profundidade, volume, dramaticidade em cada sessão.",
      imageSrc: "/images/tatto14.jpg",
    },
    {
      title: "Autoral",
      desc: "Criação única, sem referência direta, sua essência.",
      imageSrc: "/images/tatto17.jpg",
    },
  ];

  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 pt-20 sm:pt-28 pb-16 sm:pb-20">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <p className="text-[10px] font-semibold tracking-[0.18em] text-white/50 uppercase">
            Estilos
          </p>

          <h2 className="mt-3 text-2xl sm:text-5xl font-extrabold tracking-tight text-white">
            Coleções curadas para
            <br className="hidden sm:block" />
            sua pele
          </h2>

          <p className="mt-3 max-w-xl text-xs sm:text-sm text-white/55">
            Três universos visuais. Escolha o que fala com você.
          </p>
        </div>

        {/* Conteúdo */}
        <StylesSection items={items} />
      </div>
    </section>
  );
}
