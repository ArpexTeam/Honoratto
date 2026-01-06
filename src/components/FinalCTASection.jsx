import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 pb-16 sm:pb-20">
        <div className="rounded-md bg-[#7f7f7f] px-6 sm:px-10 py-12 sm:py-20">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 items-start sm:items-center sm:justify-evenly">
            {/* Left title */}
            <div className="w-full sm:w-auto">
              <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-10 sm:leading-15 text-white">
                Sua tatuagem
                <br className="block" />
                começa aqui
              </h3>
            </div>

            {/* Right compact card */}
            <div className="w-full max-w-md">
              <div className="rounded-md bg-white/0">
                <div className="flex items-start gap-4">
                  {/* Text + button */}
                  <div className="flex-1">
                    <p className="text-sm leading-relaxed text-white/85">
                      Orçamentos: Segunda a Sábado - 9h às 20h e Domingo - 10h às 17h - Av. Joaquim Martarolle 495, Hortolândia
                    </p>

                    <div className="mt-5">
                      <Link
                        href="/orcamento"
                        className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-xs font-semibold text-neutral-950 transition hover:bg-neutral-200"
                      >
                        Orçamento
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end right */}
          </div>
        </div>
      </div>
    </section>
  );
}
