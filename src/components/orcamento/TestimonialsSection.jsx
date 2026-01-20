export default function TestimonialsSection() {
  const items = [
    {
      text:
        "A tatuagem que recebi superou tudo que imaginava. Precisava de alguém que entendesse minha visão.",
      name: "Marina Silva",
      role: "Cliente",
      city: "",
    },
    {
      text:
        "Voltei três vezes. A primeira para a tatuagem, as outras duas porque sabia que estava em boas mãos.",
      name: "Carlos Mendes",
      role: "Cliente",
      city: "",
    },
    {
      text:
        "Consultoria de design fez toda diferença. Sabia exatamente o que queria quando entrei na cadeira.",
      name: "Ana Costa",
      role: "Cliente",
      city: "",
    },
  ];

  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 pt-40 pb-20">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Quem fala
          </h2>
          <p className="mt-5 text-xs sm:text-sm text-white/55">
            Histórias de quem já marcou a pele
          </p>
        </div>

        <div className="mt-15 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ text, name, role, city }) {
  return (
    <div className="rounded-md bg-neutral-100 px-6 py-6 shadow-[0_1px_0_rgba(0,0,0,0.06)]">
      <Stars />

      <p className="mt-4 text-sm leading-relaxed text-neutral-800">
        {text}
      </p>

      <div className="mt-6 flex items-center gap-3">
        <Avatar />

        <div className="min-w-0">
          <div className="text-sm font-semibold text-neutral-900 truncate">
            {name}
          </div>
          <div className="text-xs text-neutral-600">
            {role}, {city}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ UI bits ------------------------------ */

function Stars() {
  return (
    <div className="flex items-center gap-1 text-neutral-900" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 17.3 18.2 21l-1.7-7.1L22 9.2l-7.2-.6L12 2 9.2 8.6 2 9.2l5.5 4.7L5.8 21 12 17.3Z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar() {
  return (
    <div className="h-8 w-8 rounded-full bg-neutral-300 overflow-hidden flex items-center justify-center">
      {/* placeholder simples (pode trocar por next/image depois) */}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-neutral-600">
        <path
          d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
          fill="currentColor"
          opacity="0.9"
        />
        <path
          d="M4 20a8 8 0 0 1 16 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
