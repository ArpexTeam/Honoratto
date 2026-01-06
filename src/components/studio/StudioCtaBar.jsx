import Link from "next/link";

export default function StudioCtaBar() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <div className="rounded-2xl bg-[#7f7f7f] px-6 py-10 sm:px-10 sm:py-12 text-center">
          <h3 className="text-2xl sm:text-5xl font-extrabold tracking-tight text-white">
            Pronto para começar?
          </h3>

          <p className="mx-auto mt-6 max-w-xl text-xs sm:mt-8 sm:text-sm text-white/80">
            Envie uma mensagem e vamos conversar sobre sua tatuagem.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <Link
              href="/orcamento"
              className="inline-flex h-10 w-full sm:w-auto items-center justify-center rounded-md bg-white px-5 text-xs font-semibold text-neutral-950 transition hover:bg-neutral-200"
            >
              Agendar
            </Link>

            <Link
              href="/orcamento"
              className="inline-flex h-10 w-full sm:w-auto items-center justify-center rounded-md bg-black/20 px-5 text-xs font-semibold text-white/90 border border-white/10 transition hover:bg-black/25"
            >
              Orçamento
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
