import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 pt-12 sm:pt-16 pb-16 sm:pb-20">
        {/* Top content */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left title */}
          <div className="lg:col-span-6">
            <h1 className="text-white font-extrabold tracking-tight leading-[1.02] text-4xl sm:text-5xl lg:text-6xl">
              Tinta que
              <br />
              marca, estilo
              <br />
              que
              <br />
              permanece
            </h1>
          </div>

          {/* Right copy + CTAs */}
          <div className="lg:col-span-6 lg:flex lg:justify-end lg:items-end">
            <div className="max-w-sm h-fit">
              <p className="text-sm leading-relaxed text-white/65">
                Cada traço é uma assinatura. Trabalho exclusivo, sem cópias,
                apenas sua história na pele.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link
                  href="/orcamento"
                  className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-xs font-semibold text-neutral-950 transition hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/25"
                >
                  Pedir orçamento
                </Link>

                <Link
                  href="/galeria"
                  className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/85 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/15"
                >
                  Ver galeria
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Image blocks */}
        <div className="mt-10 sm:mt-14">
          {/* Mobile/Tablet: grid fluido */}
          <div className="grid grid-cols-2 gap-[18px] sm:grid-cols-3 lg:hidden">
            <HeroImage
              src="/images/estudio5.jpg"
              alt="Estúdio destaque"
              className="w-full aspect-[270/229] rounded-md"
              priority
            />

            <HeroImage
              src="/images/tatuador1.jpg"
              alt="Tatuador em ação"
              className="w-full aspect-[350/502] rounded-md"
              priority
            />

            <HeroImage
              src="/images/tatto10.jpg"
              alt="Tatuagem destaque"
              className="w-full aspect-[279/324] rounded-md"
              priority
            />
          </div>

          {/* Desktop: mantém exatamente seus tamanhos atuais */}
          <div className="hidden lg:flex items-start justify-center" style={{ gap: 18 }}>
            {/* Left (270x229) - lower */}
            <div style={{ width: 270, height: 229, marginTop: 134 }}>
              <HeroImage
                src="/images/estudio5.jpg"
                alt="Estúdio destaque"
                className="w-full h-full rounded-md"
                priority
              />
            </div>

            {/* Center (350x502) */}
            <div style={{ width: 350, height: 502 }}>
              <HeroImage
                src="/images/tatuador1.jpg"
                alt="Tatuador em ação"
                className="w-full h-full rounded-md"
                priority
              />
            </div>

            {/* Right (279x324) */}
            <div style={{ width: 279, height: 324 }}>
              <HeroImage
                src="/images/tatto10.jpg"
                alt="Tatuagem destaque"
                className="w-full h-full rounded-md"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroImage({ src, alt, className = "", priority = false }) {
  return (
    <div className={`relative overflow-hidden bg-[#dcdcdc] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 33vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}
