import Link from "next/link";

export default function GalleryHero() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-16 sm:pt-28 sm:pb-20">
        <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Left: title + description */}
          <div className="min-w-0">
            <h1 className="text-white font-extrabold tracking-tight leading-[1.04] text-4xl sm:text-5xl lg:text-6xl">
              Tinta premium
              <br />
              para sua pele
            </h1>

            <p className="mt-5 max-w-lg text-sm sm:text-base leading-relaxed text-white/55">
              Cada traço conta uma história. Explore nosso trabalho e encontre a
              inspiração para sua próxima tatuagem.
            </p>
          </div>

          {/* Right: buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 lg:mt-7 lg:justify-end">
            <Link
              href="/galeria"
              className="inline-flex h-9 items-center justify-center rounded-sm bg-white/5 px-4 text-xs font-semibold text-white/80 hover:bg-white/10 transition"
            >
              Galeria
            </Link>

            <Link
              href="/orcamento"
              className="inline-flex h-9 items-center justify-center rounded-sm bg-white px-4 text-xs font-semibold text-neutral-950 hover:bg-neutral-200 transition"
            >
              Orçamento
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
