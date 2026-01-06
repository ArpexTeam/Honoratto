import Link from "next/link";

export default function StudioHero() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-14 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 lg:items-center">
          {/* Left */}
          <div className="lg:col-span-5">
            <h1 className="text-white font-extrabold tracking-tight leading-[1.03] text-4xl sm:text-5xl lg:text-6xl">
              O Estúdio
            </h1>

            <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-white/55">
              Aqui você encontra calma, privacidade e precisão em cada traço.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/orcamento"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-white px-4 py-2 text-xs font-semibold text-neutral-950 transition hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/25"
              >
                Agendar conversa
              </Link>

              <Link
                href="/galeria"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-white/6 px-4 py-2 text-xs font-semibold text-white/80 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/15"
              >
                Ver galeria
              </Link>
            </div>
          </div>

          {/* Right image */}
          <div className="lg:col-span-7 lg:flex lg:justify-end">
            <div className="w-full max-w-[520px] lg:max-w-[620px]">
              <HeroImage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroImage() {
  return (
    <div
      className={[
        "relative w-full overflow-hidden rounded-md",
        "bg-white/5 border border-white/10",
        "aspect-[4/5] sm:aspect-square", // mobile mais “retrato”, desktop quadrado
      ].join(" ")}
      role="img"
      aria-label="Foto do estúdio"
    >
      <img
        src="/images/estudio1.jpg"
        alt="Foto do estúdio"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="lazy"
      />

      {/* overlay leve pra harmonizar no preto */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/10" />
    </div>
  );
}
