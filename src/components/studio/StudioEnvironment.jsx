export default function StudioEnvironment() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 sm:pt-32 lg:pt-40">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            O ambiente
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-white/55">
            Espaço que respira cuidado e estilo.
          </p>
        </div>

        {/* Grid images */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <ImageTile src="/images/estudio2.jpg" alt="Ambiente do estúdio 1" />
          <ImageTile src="/images/estudio4.jpg" alt="Ambiente do estúdio 2" />
          <ImageTile src="/images/estudio5.jpg" alt="Ambiente do estúdio 3" />
        </div>
      </div>
    </section>
  );
}

function ImageTile({ src, alt }) {
  return (
    <div
      className="relative w-full aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5"
      role="img"
      aria-label={alt}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* overlay leve opcional (mantém padrão do site) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-black/10" />
    </div>
  );
}
