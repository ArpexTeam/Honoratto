"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

export default function GalleryStyleShowcase() {
  const data = useMemo(
    () => [
      {
        key: "oldschool",
        label: "Old school",
        items: [
          {
            label: "Destaque",
            title: "Linhas finas e precisas",
            desc: "Traços delicados que marcam presença sem gritar. Perfeito para quem quer elegância.",
            img: "/images/tatto11.jpg",
          },
          {
            label: "Destaque",
            title: "Detalhe e leveza",
            desc: "Composição minimalista, acabamento limpo e leitura elegante em qualquer parte do corpo.",
            img: "/images/tatto14.jpg",
          },
          {
            label: "Destaque",
            title: "Detalhe e leveza",
            desc: "Composição minimalista, acabamento limpo e leitura elegante em qualquer parte do corpo.",
            img: "/images/tatto15.jpg",
          },
          {
            label: "Destaque",
            title: "Detalhe e leveza",
            desc: "Composição minimalista, acabamento limpo e leitura elegante em qualquer parte do corpo.",
            img: "/images/tatto16.jpg",
          },
          {
            label: "Destaque",
            title: "Detalhe e leveza",
            desc: "Composição minimalista, acabamento limpo e leitura elegante em qualquer parte do corpo.",
            img: "/images/tatto20.jpg",
          },
          {
            label: "Destaque",
            title: "Detalhe e leveza",
            desc: "Composição minimalista, acabamento limpo e leitura elegante em qualquer parte do corpo.",
            img: "/images/tatto21.jpg",
          },
          {
            label: "Destaque",
            title: "Detalhe e leveza",
            desc: "Composição minimalista, acabamento limpo e leitura elegante em qualquer parte do corpo.",
            img: "/images/tatto22.jpg",
          },
        ],
      },
      {
        key: "realismo",
        label: "Realismo",
        items: [
          {
            label: "Destaque",
            title: "Realismo com profundidade",
            desc: "Textura, volume e sombras construídas com cuidado para um resultado convincente.",
            img: "/images/tatto1.jpg",
          },
          {
            label: "Destaque",
            title: "Realismo com profundidade",
            desc: "Textura, volume e sombras construídas com cuidado para um resultado convincente.",
            img: "/images/tatto2.jpg",
          },
          {
            label: "Destaque",
            title: "Realismo com profundidade",
            desc: "Textura, volume e sombras construídas com cuidado para um resultado convincente.",
            img: "/images/tatto3.jpg",
          },
          {
            label: "Destaque",
            title: "Realismo com profundidade",
            desc: "Textura, volume e sombras construídas com cuidado para um resultado convincente.",
            img: "/images/tatto4.jpg",
          },
          {
            label: "Destaque",
            title: "Realismo com profundidade",
            desc: "Textura, volume e sombras construídas com cuidado para um resultado convincente.",
            img: "/images/tatto5.jpg",
          },
          {
            label: "Destaque",
            title: "Realismo com profundidade",
            desc: "Textura, volume e sombras construídas com cuidado para um resultado convincente.",
            img: "/images/tatto6.jpg",
          },
          {
            label: "Destaque",
            title: "Realismo com profundidade",
            desc: "Textura, volume e sombras construídas com cuidado para um resultado convincente.",
            img: "/images/tatto7.jpg",
          },
          {
            label: "Destaque",
            title: "Realismo com profundidade",
            desc: "Textura, volume e sombras construídas com cuidado para um resultado convincente.",
            img: "/images/tatto8.jpg",
          },
          {
            label: "Destaque",
            title: "Realismo com profundidade",
            desc: "Textura, volume e sombras construídas com cuidado para um resultado convincente.",
            img: "/images/tatto9.jpg",
          },
          {
            label: "Destaque",
            title: "Realismo com profundidade",
            desc: "Textura, volume e sombras construídas com cuidado para um resultado convincente.",
            img: "/images/tatto10.jpg",
          },
          {
            label: "Destaque",
            title: "Realismo com profundidade",
            desc: "Textura, volume e sombras construídas com cuidado para um resultado convincente.",
            img: "/images/tatto12.jpg",
          },
          {
            label: "Destaque",
            title: "Realismo com profundidade",
            desc: "Textura, volume e sombras construídas com cuidado para um resultado convincente.",
            img: "/images/tatto13.jpg",
          },
        ],
      },
      {
        key: "lettering",
        label: "Lettering",
        items: [
          {
            label: "Destaque",
            title: "Lettering com personalidade",
            desc: "Tipografia escolhida para o seu estilo, com leitura limpa e proporção bem resolvida.",
            img: "/galeria/lettering/01.jpg",
          },
          {
            label: "Destaque",
            title: "Frases que ficam",
            desc: "Espaçamento e alinhamento refinados para uma composição elegante e durável.",
            img: "/galeria/lettering/02.jpg",
          },
        ],
      },
    ],
    []
  );

  const [activeTab, setActiveTab] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCategory = data[activeTab];
  const activeItem = activeCategory.items[activeIndex];

  function selectTab(i) {
    setActiveTab(i);
    setActiveIndex(0);
  }

  function prev() {
    setActiveIndex((cur) =>
      cur === 0 ? activeCategory.items.length - 1 : cur - 1
    );
  }

  function next() {
    setActiveIndex((cur) =>
      cur === activeCategory.items.length - 1 ? 0 : cur + 1
    );
  }

  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 pt-24 sm:pt-32 lg:pt-[200px] pb-20">
        <div className="overflow-hidden rounded-md border border-black/10 bg-white">
          {/* Tabs */}
          <div className="border-b border-black/10 bg-neutral-50">
            <div className="flex overflow-x-auto">
              <div className="flex min-w-max w-full">
                {data.map((t, i) => {
                  const isActive = i === activeTab;
                  return (
                    <button
                      key={t.key}
                      type="button"
                      onClick={() => selectTab(i)}
                      className={[
                        "h-11 px-4 sm:px-6 text-xs font-semibold whitespace-nowrap",
                        "border-r border-black/10 last:border-r-0",
                        isActive
                          ? "bg-white text-neutral-950"
                          : "bg-neutral-50 text-neutral-700 hover:bg-white/70",
                      ].join(" ")}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 gap-7 sm:gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left image */}
              <div className="lg:col-span-6">
                <ImagePlaceholder
                  key={activeItem.img}
                  src={activeItem.img}
                  label={`Imagem: ${activeCategory.label} (${activeIndex + 1})`}
                  className={[
                    "w-full rounded-sm bg-[#dcdcdc]",
                    "aspect-[4/5] sm:aspect-square",
                  ].join(" ")}
                />
              </div>

              {/* Right text */}
              <div className="lg:col-span-6 text-center lg:text-left">
                <div className="transition-opacity duration-200">
                  <p className="text-[10px] font-semibold tracking-[0.18em] text-neutral-500 uppercase">
                    {activeItem.label}
                  </p>

                  <h3 className="mt-4 text-2xl sm:text-3xl font-medium tracking-tight text-neutral-950">
                    {activeItem.title}
                  </h3>

                  <p className="mt-4 mx-auto lg:mx-0 max-w-md text-sm leading-relaxed text-neutral-600">
                    {activeItem.desc}
                  </p>
                </div>

                {/* Arrows */}
                <div className="mt-8 flex items-center justify-center lg:justify-start gap-3">
                  <button
                    type="button"
                    onClick={prev}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white hover:bg-neutral-50 transition"
                    aria-label="Anterior"
                    title="Anterior"
                  >
                    <ArrowLeft />
                  </button>

                  <button
                    type="button"
                    onClick={next}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white hover:bg-neutral-50 transition"
                    aria-label="Próximo"
                    title="Próximo"
                  >
                    <ArrowRight />
                  </button>

                  <span className="ml-2 text-xs text-neutral-400">
                    {activeIndex + 1}/{activeCategory.items.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* No mobile, tabs já rolam horizontalmente */}
      </div>
    </section>
  );
}

function ImagePlaceholder({ className = "", label, src }) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      role="img"
      aria-label={label}
    >
      {src ? (
        <Image
          src={src}
          alt={label}
          fill
          quality={95}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain sm:object-cover"
          priority={false}
        />
      ) : null}
    </div>
  );
}

function ArrowLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
