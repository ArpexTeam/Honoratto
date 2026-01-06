import Link from "next/link";

export default function StudioSection() {
  const bullets = [
    { icon: <IconAlert />, text: "Higiene rigorosa em cada detalhe." },
    { icon: <IconPrivacy />, text: "Privacidade garantida durante toda sessão." },
    { icon: <IconComfort />, text: "Conforto e bem-estar em primeiro lugar." },
  ];

  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 pb-24 sm:pb-32 lg:pb-[216px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left image */}
          <div className="lg:col-span-6">
            <ImagePlaceholder className="h-[320px] sm:h-[420px] lg:h-[440px] w-full rounded-md" />
          </div>

          {/* Right content */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <p className="text-[10px] font-semibold tracking-[0.18em] text-white/50 uppercase">
              Estúdio
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-[1.08]">
              Conheça nosso
              <br />
              espaço
            </h2>

            <p className="mt-4 mx-auto lg:mx-0 max-w-md text-sm leading-relaxed text-white/55">
              Ambiente pensado para sua segurança e conforto absoluto.
            </p>

            <ul className="mt-6 space-y-3 text-left mx-auto lg:mx-0 max-w-md">
              {bullets.map((b) => (
                <li key={b.text} className="flex items-start gap-3">
                  <span className="mt-[2px] text-white/75">{b.icon}</span>
                  <span className="text-sm text-white/60">{b.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                href="/estudio"
                className="inline-flex items-center justify-center rounded-sm bg-white/12 px-4 py-2 text-xs font-semibold text-white/85 hover:bg-white/16 transition"
              >
                Conheça o estúdio
              </Link>

              <Link
                href="/orcamento"
                className="inline-flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-white/70 hover:text-white transition"
              >
                Agendar <span aria-hidden="true">›</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------ Placeholder (imagem) ------------------------ */

function ImagePlaceholder({ className = "" }) {
  return (
    <div
      className={`relative overflow-hidden bg-[#dcdcdc] ${className}`}
      role="img"
      aria-label="Foto do estúdio"
    >
      <img
        src="/images/estudio4.jpg"
        alt="Foto do estúdio"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

/* ------------------------------- Icons ------------------------------- */

function IconAlert() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 9v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M12 17h.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M10.3 4.8a2 2 0 0 1 3.4 0l7.2 12.6A2 2 0 0 1 19.2 20H4.8a2 2 0 0 1-1.7-2.6l7.2-12.6Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  );
}

function IconPrivacy() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3l8 4v6c0 5-3.5 8-8 8s-8-3-8-8V7l8-4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12a2.5 2.5 0 0 1 5 0v2.2c0 .6-.4 1-1 1h-3c-.6 0-1-.4-1-1V12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        opacity="0.85"
      />
    </svg>
  );
}

function IconComfort() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s-7-4.4-9.2-8.6C1 8.2 3.1 5.7 6 5.7c1.7 0 3 1 3.8 2.1C10.6 6.7 11.9 5.7 13.6 5.7c2.9 0 5 2.5 3.2 5.7C19 15.6 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
