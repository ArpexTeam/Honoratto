import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-neutral-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 pt-14 sm:pt-16 pb-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between md:gap-10">
          {/* Logo */}
          <div className="w-full md:w-auto">
            <div className="text-lg font-semibold tracking-tight text-white">
                <img
            src="/images/ovelhaLogo_sem_fundo.png"
            alt="Honoratto Tattoo"
            className="h-24 w-24 object-contain"
          />
            </div>
          </div>

          {/* Navegação */}
          <div className="w-full md:w-auto">
            <h4 className="text-[13px] font-semibold text-white/70">
              Navegação
            </h4>
            <nav className="mt-4 flex flex-col gap-4 text-sm text-white/55">
              <Link className="hover:text-white transition" href="/">
                Início
              </Link>
              <Link className="hover:text-white transition" href="/estudio">
                O estúdio
              </Link>
              <Link className="hover:text-white transition" href="/galeria">
                Galeria
              </Link>
              <Link className="hover:text-white transition" href="/orcamento">
                Orçamento
              </Link>
            </nav>
          </div>

          {/* Redes */}
          <div className="w-full md:w-auto">
            <h4 className="text-[13px] font-semibold text-white/70">Redes</h4>

            <div className="mt-4 flex items-center gap-3 text-white/60 flex-wrap">
              <a
                href="https://www.instagram.com/honoratotattoo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer"
                aria-label="Instagram"
                title="Instagram"
              >
                <SocialIcon label="Instagram" />
              </a>

              <a
                href="https://wa.me/5519992090807"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <SocialIcon label="Whats" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full md:max-w-[420px]">
            <h4 className="text-[13px] font-semibold text-white/70">
              Newsletter
            </h4>

            <p className="mt-4 text-sm leading-relaxed text-white/55">
              Receba novidades sobre trabalhos exclusivos e promoções direto no
              seu email.
            </p>

            <NewsletterForm />

            <p className="mt-3 text-[10px] leading-relaxed text-white/40">
              Ao se inscrever você concorda com nossa política de privacidade e
              consente em receber atualizações.
            </p>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-white/10" />

        <div className="mt-6 text-center text-xs text-white/45">
          © 2026 Honoratto Tatto. Todos os direitos reservados - Desenvolvido por{" "}
          <a className="text-[#00cf77] font-bold" href="https://www.instagram.com/arpextechnology?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">ArpeX</a>.
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------- Social ------------------------------ */

function SocialIcon({ label }) {
  const common =
    "inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/65 hover:bg-white/10 hover:text-white transition";

  return (
    <span aria-hidden="true" className={common}>
      {label === "Instagram" && <IconInstagram />}
      {label === "Whats" && <IconWhatsApp />}
    </span>
  );
}

/* ------------------------------- Icons ------------------------------- */

function IconInstagram() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12 16a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M17.5 6.6h.01"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 11.9a8 8 0 0 1-11.8 7L4 20l1.2-4.1A8 8 0 1 1 20 11.9Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M9.3 8.6c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.4l.7 1.6c.1.3.1.5-.1.7l-.5.6c-.1.2-.2.3 0 .6.2.3.7 1.1 1.5 1.8.8.7 1.6 1 1.9 1.1.3.1.5.1.7-.1l.7-.8c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.3.4.5 0 .2-.1.6-.4 1-.3.4-.9.9-2 .9-1.1 0-2.5-.4-4-1.6-1.6-1.3-2.7-3-3.1-4-.4-1-.1-1.8.2-2.2l.6-.7Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}
