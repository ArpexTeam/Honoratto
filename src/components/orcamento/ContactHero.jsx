import Link from "next/link";

export default function ContactHero() {
  const whatsappNumber = "5519992090807"; // +55 (19) 99209-0807
  const whatsappMessage = encodeURIComponent(
    "Olá! Quero agendar uma tatuagem. Podemos conversar?"
  );
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="bg-neutral-950">
      <div className="bg-neutral-950 mx-auto max-w-7xl px-6 pt-16 pb-16 sm:pt-20 sm:pb-40">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 lg:items-start">
          {/* Left */}
          <div className="lg:col-span-5">
            <p className="text-[10px] font-semibold tracking-[0.18em] text-white/50 uppercase">
              Contato
            </p>

            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.05]">
              Vamos conversar
            </h1>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55">
              Estamos aqui para ouvir suas ideias e transformá-las em tatuagens memoráveis
            </p>

            <div className="mt-14 space-y-15">
              <ContactItem
                icon={<IconMail />}
                title="Email"
                subtitle="Envie sua mensagem"
                linkLabel="contato@estudio.com.br"
                href="mailto:contato@estudio.com.br"
                external
              />

              <ContactItem
                icon={<IconWhatsApp />}
                title="WhatsApp"
                subtitle="Chame para agendar"
                linkLabel="+55 (19) 99209-0807"
                href={whatsappHref}
                external
              />

              <ContactItem
                icon={<IconPin />}
                title="Endereço"
                subtitle="Av. Joaquim Martarolli, 495"
                linkLabel="Ver localização"
                href="#mapa"
              />
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-7 lg:flex lg:justify-end h-full">
            <div id="mapa" className="w-full h-full max-w-[720px]">
              <MapPlaceholder />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Subcomponents --------------------------- */

function ContactItem({ icon, title, subtitle, linkLabel, href, external }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 text-white/80">{icon}</div>

      <div>
        <div className="text-sm font-semibold text-white">{title}</div>
        <div className="mt-2 text-xs text-white/55">{subtitle}</div>

        <div className="mt-2">
          {external ? (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-white/70 hover:text-white transition underline underline-offset-4 decoration-white/20 hover:decoration-white/50"
            >
              {linkLabel}
            </a>
          ) : (
            <Link
              href={href}
              className="inline-flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-white transition"
            >
              {linkLabel}
              {linkLabel === "Ver localização" ? <span aria-hidden="true">›</span> : null}
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
      className="relative w-full overflow-hidden rounded-md bg-[#dcdcdc] h-full relative"
      role="img"
      aria-label="Mapa do estúdio"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.7538691800743!2d-47.21713343571071!3d-22.874171412294572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8bbfcde9f107b%3A0x9de86cfaf1bd1f5d!2sAv.%20Joaquim%20Martarolli%2C%20495%2C%20Hortol%C3%A2ndia%20-%20SP%2C%2013186-624!5e0!3m2!1spt-BR!2sbr!4v1767465064966!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

/* -------------------------------- Icons ------------------------------ */

function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M6.5 7.5 12 12l5.5-4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 20.5c-1.5 0-2.9-.4-4.2-1.1L4 20l.6-3.6A8.4 8.4 0 0 1 3.5 12
           8.5 8.5 0 1 1 12 20.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M9.1 8.7c.2-.4.4-.4.7-.4h.6c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4 0 .6l-.5.7c-.1.2-.1.4 0 .6
           .5.9 1.5 1.9 2.4 2.4.2.1.4.1.6 0l.7-.5c.2-.1.4-.1.6 0l1.6.7c.3.1.4.3.4.5v.6
           c0 .3 0 .5-.4.7-.5.3-1.3.6-2.2.4-1.5-.3-3.2-1.3-4.6-2.7-1.4-1.4-2.4-3.1-2.7-4.6
           -.2-.9.1-1.7.4-2.2Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

function IconPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s6-5 6-10a6 6 0 1 0-12 0c0 5 6 10 6 10Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 11.2a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4Z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  );
}
