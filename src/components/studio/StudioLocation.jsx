import Link from "next/link";

export default function StudioLocation() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-40">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 lg:items-start">
          {/* Left */}
          <div className="lg:col-span-5">
            <p className="text-[10px] font-semibold tracking-[0.18em] text-white/50 uppercase">
              Localização
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-[1.06]">
              Hortolândia
            </h2>

            <p className="mt-6 sm:mt-7 text-sm leading-relaxed text-white/55">
              Av. Joaquim Martarolle 495, Hortolândia, São Paulo.
            </p>

            <div className="mt-8 sm:mt-10 space-y-7 sm:space-y-8">
              <InfoBlock
                title="Horários"
                body="Terça a sábado, 10h às 18h. Agendamento prévio."
                linkLabel="Agendar"
                href="/orcamento"
              />

              <InfoBlock
                title="Contato"
                body="WhatsApp disponível para dúvidas e marcações."
                linkLabel="Conversar"
                href="https://wa.me/5519992090807"
                external
              />
            </div>
          </div>

          {/* Right map */}
          <div className="lg:col-span-7 lg:flex lg:justify-end">
            <div
              id="mapa"
              className="w-full max-w-[640px]"
            >
              <MapPlaceholder />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Subcomponents ---------------------------- */

function InfoBlock({ title, body, linkLabel, href, external = false }) {
  return (
    <div className="flex gap-5">
      {/* left vertical line */}
      <div className="w-px bg-white/10" />

      <div className="min-w-0">
        <div className="text-base font-extrabold text-white">{title}</div>
        <p className="mt-2 text-sm leading-relaxed text-white/55">{body}</p>

        <div className="mt-3">
          {external ? (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-white/70 hover:text-white transition"
            >
              {linkLabel}
            </a>
          ) : (
            <Link
              href={href}
              className="text-xs font-semibold text-white/70 hover:text-white transition"
            >
              {linkLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function MapPlaceholder() {
  return (
    <div
      className={[
        "relative w-full overflow-hidden rounded-md",
        "border border-white/10 bg-white/5",
        "h-[320px] sm:h-[420px] lg:h-[520px]", // altura real no mobile/tablet/desktop
      ].join(" ")}
      role="img"
      aria-label="Mapa/Foto do local"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.7538691800743!2d-47.21713343571071!3d-22.874171412294572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8bbfcde9f107b%3A0x9de86cfaf1bd1f5d!2sAv.%20Joaquim%20Martarolli%2C%20495%2C%20Hortol%C3%A2ndia%20-%20SP%2C%2013186-624!5e0!3m2!1spt-BR!2sbr!4v1767465064966!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full"
        title="Mapa do estúdio"
      />
    </div>
  );
}
