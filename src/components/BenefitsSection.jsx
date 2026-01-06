import Link from "next/link";

export default function BenefitsSection() {
  const features = [
    {
      title: "Precisão em cada\ntraço",
      desc: "Equipamento esterilizado, técnica refinada, resultado impecável.",
      icon: <img src="/images/icon3.svg" alt="" className="h-6 w-6" />,
    },
    {
      title: "Seu espaço\nprivado",
      desc: "Ambiente exclusivo, sem pressa, apenas você e a tinta.",
      icon: <img src="/images/icon2.svg" alt="" className="h-6 w-6" />,
    },
    {
      title: "Conforto\ngarantido",
      desc: "Sessões pensadas para sua tranquilidade e bem-estar.",
      icon: <img src="/images/icon2.svg" alt="" className="h-6 w-6" />,
    },
    {
      title: "Acompanhamento\n pós-sessão",
      desc: "Instruções claras, suporte contínuo, cicatrização perfeita.",
      icon: <img src="/images/icon1.svg" alt="" className="h-6 w-6" />,
    },
  ];

  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Left image */}
          <div className="lg:col-span-5">
            <ImagePlaceholder className="h-[280px] sm:h-[420px] lg:h-[520px] w-full rounded-md" />
          </div>

          {/* Right content */}
          <div className="lg:col-span-7">
            {/* 2x2 features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-12">
              {features.map((f) => (
                <div key={f.title} className="max-w-none sm:max-w-xs">
                  <div className="mb-3 text-white/80">{f.icon}</div>

                  <h3 className="text-xl font-extrabold tracking-tight leading-[1.1] text-white whitespace-pre-line">
                    {f.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom links */}
            <div className="mt-14 flex flex-col sm:flex-row gap-4 sm:gap-10 items-start sm:items-center">
              <Link
                href="/estudio"
                className="inline-flex items-center justify-center rounded-md bg-white/12 px-4 py-2 text-xs font-semibold text-white/85 hover:bg-white/16 transition border border-white/10"
              >
                Saiba mais
              </Link>

              <Link
                href="/orcamento"
                className="inline-flex items-center gap-2 text-xs font-semibold text-white/75 hover:text-white transition"
              >
                Agendar
                <span aria-hidden="true">›</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- Subcomponents -------------------------- */

function ImagePlaceholder({ className = "" }) {
  return (
    <div
      className={`relative overflow-hidden bg-[#dcdcdc] ${className}`}
      role="img"
      aria-label="Imagem"
    >
      <img
        src="/images/estudio1.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
    </div>
  );
}
