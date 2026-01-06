"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

export default function StylesSection({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = useMemo(() => {
    return items?.[activeIndex] ?? items?.[0];
  }, [items, activeIndex]);

  return (
    <>
      {/* Tabs */}
      <div className="mt-24 mx-auto max-w-6xl">
        {/* Mobile: scroll horizontal | SM+: grid 3 colunas */}
        <div className="sm:hidden -mx-6 px-6 overflow-x-auto">
          <div className="flex gap-4 min-w-max snap-x snap-mandatory">
            {items.map((it, idx) => {
              const isActive = idx === activeIndex;

              return (
                <button
                  key={it.title}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={[
                    "group snap-start",
                    "w-[78vw] max-w-[360px] text-left",
                    "rounded-md border border-white/10 bg-white/[0.03] px-4 py-4",
                    "outline-none cursor-pointer transition",
                    "focus-visible:ring-2 focus-visible:ring-white/20",
                    isActive ? "bg-white/[0.06]" : "hover:bg-white/[0.05]",
                  ].join(" ")}
                  aria-pressed={isActive}
                >
                  <h3
                    className={[
                      "text-base font-bold transition-colors",
                      isActive ? "text-white" : "text-white/80 group-hover:text-white",
                    ].join(" ")}
                  >
                    {it.title}
                  </h3>

                  <p
                    className={[
                      "mt-2 text-[13px] leading-relaxed transition-colors",
                      isActive ? "text-white/60" : "text-white/45 group-hover:text-white/55",
                    ].join(" ")}
                  >
                    {it.desc}
                  </p>

                  <div
                    className={[
                      "mt-4 h-px w-full transition-opacity duration-200",
                      isActive ? "bg-white/35 opacity-100" : "bg-transparent opacity-0",
                    ].join(" ")}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* SM+: layout original em grid */}
        <div className="hidden sm:grid grid-cols-3 gap-6">
          {items.map((it, idx) => {
            const isActive = idx === activeIndex;

            return (
              <button
                key={it.title}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={[
                  "group text-center outline-none cursor-pointer",
                  "focus-visible:ring-2 focus-visible:ring-white/20 rounded-md",
                ].join(" ")}
                aria-pressed={isActive}
              >
                <h3
                  className={[
                    "text-lg font-bold transition-colors",
                    isActive ? "text-white" : "text-white/80 group-hover:text-white",
                  ].join(" ")}
                >
                  {it.title}
                </h3>

                <p
                  className={[
                    "mt-2 text-[13px] leading-relaxed transition-colors",
                    isActive ? "text-white/60" : "text-white/45 group-hover:text-white/55",
                  ].join(" ")}
                >
                  {it.desc}
                </p>

                <div
                  className={[
                    "mx-auto mt-5 h-px w-[85%] transition-opacity duration-200",
                    isActive ? "bg-white/35 opacity-100" : "bg-transparent opacity-0",
                  ].join(" ")}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Big image */}
      <div className="mt-10 mx-auto max-w-6xl">
        <BigImage title={activeItem?.title} src={activeItem?.imageSrc} />
      </div>
    </>
  );
}

function BigImage({ title, src }) {
  return (
    <div
      className={[
        "relative w-full overflow-hidden rounded-2xl",
        "border border-white/10 bg-white/5",
        "shadow-[0_30px_90px_-60px_rgba(0,0,0,0.9)]",
      ].join(" ")}
      role="img"
      aria-label="Imagem destaque"
    >
      {/* Mobile: proporcional via aspect | SM+: mantém sua altura */}
      <div className="relative bg-neutral-950 aspect-[4/5] sm:aspect-auto sm:h-[520px]">
        {src ? (
          <>
            <Image
              src={src}
              alt={title ?? "Imagem destaque"}
              fill
              priority
              quality={95}
              sizes="(min-width: 1280px) 1152px, 100vw"
              className="object-contain object-center"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/20" />
          </>
        ) : (
          <div className="absolute inset-0 bg-[#dcdcdc]" />
        )}

        <div className="absolute left-4 top-4 sm:left-6 sm:top-6 rounded-full bg-black/40 px-3 py-1.5 text-[11px] font-semibold text-white/90 backdrop-blur">
          {title ?? "Destaque"}
        </div>
      </div>
    </div>
  );
}
