import Link from "next/link";

export default function StudioFeelSection() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-24 sm:pt-32 sm:pb-32 lg:pt-40 lg:pb-40">
        {/* Header */}
        <div className="text-center">
          <p className="text-[10px] font-semibold tracking-[0.18em] text-white/50 uppercase">
            Sensação
          </p>

          <h2 className="mt-3 text-2xl sm:text-5xl font-extrabold tracking-tight text-white">
            O que você sente aqui
          </h2>

          <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-white/55">
            Cada detalhe foi pensado para sua tranquilidade.
          </p>
        </div>

        {/* Grid (Figma-like) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:auto-rows-[230px] lg:gap-6">
          {/* Row 1 - left card */}
          <div className="lg:col-span-4">
            <MiniFeatureCard
              icon={<IconLeaf />}
              title={"Privacidade\nabsoluta"}
              desc="Espaço reservado só para você"
            />
          </div>

          {/* Row 1 - middle card */}
          <div className="lg:col-span-4">
            <MiniFeatureCard
              icon={<IconWind />}
              title={"Conforto sem\ncompromissos"}
              desc="Ambiente climatizado e acolhedor"
            />
          </div>

          {/* Right tall block (image + content) - spans 2 rows */}
          <div className="lg:col-span-4 lg:row-span-2">
            <RightComboCard />
          </div>

          {/* Row 2 - left wide combo */}
          <div className="lg:col-span-8">
            <LeftComboCard />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Cards ---------------------------- */

function MiniFeatureCard({ icon, title, desc }) {
  return (
    <div className="h-full rounded-lg border border-white/10 bg-white/5 p-5 sm:p-6">
      <div className="text-white/80">{icon}</div>

      <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight leading-[1.15] text-white whitespace-pre-line">
        {title}
      </h3>

      <p className="mt-4 sm:mt-6 text-sm text-white/55">{desc}</p>
    </div>
  );
}

/* ---------- Right combo (image + content inside same tall card) ---------- */

function RightComboCard() {
  return (
    <div className="h-full overflow-hidden rounded-lg border border-white/10 bg-white/5">
      {/* Top: image area */}
      <div className="h-[240px] sm:h-[320px] lg:h-[62%]">
        <ImageTile
          className="h-full rounded-none border-0"
          label="Imagem do estúdio"
          imgSrc="/images/cadeira.png"
        />
      </div>

      {/* Bottom: content area */}
      <div className="p-5 sm:p-6 lg:h-[38%] lg:p-6 border-t border-white/10">
        <p className="text-xs text-white/60">Seu desenho recebe precisão total</p>

        <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-[1.15]">
          Vamos fechar seu desenho?
        </h3>

        <p className="mt-4 sm:mt-6 text-sm leading-relaxed text-white/55">
          Envie sua ideia e referências.
        </p>
      </div>
    </div>
  );
}

function LeftComboCard() {
  return (
    <div className="h-full overflow-hidden rounded-lg border border-white/10 bg-white/5 flex flex-col lg:flex-row">
      {/* Image */}
      <div className="w-full lg:w-1/2 h-[240px] sm:h-[320px] lg:h-full">
        <ImageTile
          className="h-full rounded-none border-0"
          label="Imagem do estúdio"
          imgSrc="/images/bancada.png"
        />
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 p-5 sm:p-6 lg:p-6">
        <p className="text-xs text-white/60">Higiene</p>

        <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-[1.15]">
          Protocolo rigoroso em cada etapa
        </h3>

        <p className="mt-4 sm:mt-6 text-sm leading-relaxed text-white/55">
          Todo o cuidado dedicado a você.
        </p>
      </div>
    </div>
  );
}

/* -------------------------- Image tile -------------------------- */

function ImageTile({ label, className = "", imgSrc }) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-[#dcdcdc] ${className}`}
      role="img"
      aria-label={label}
    >
      <img
        src={imgSrc}
        alt={label}
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="lazy"
      />
    </div>
  );
}

/* ------------------------------ Icons ------------------------------ */

function IconLeaf() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M19 5c-5 1-9 5-10 10 5-1 9-5 10-10Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 15c-2 0-4 2-4 4 2 0 4-2 4-4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconWind() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 8h11a2 2 0 1 0-2-2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M3 12h15a2 2 0 1 1-2 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M3 16h9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}
