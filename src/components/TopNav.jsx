"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () => [
      { label: "Início", href: "/" },
      { label: "O estúdio", href: "/estudio" },
      { label: "Galeria", href: "/galeria" },
      { label: "Orçamento", href: "/orcamento" },
    ],
    []
  );

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 inline-flex items-center gap-2 hover:scale-[1.02] transition-transform"
          aria-label="Ir para Início"
        >
          <img
            src="/images/ovelhaLogo_sem_fundo.png"
            alt="Honoratto Tattoo"
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-[52px] md:w-[52px] object-contain"
          />
        </Link>

        {/* Links desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          {links.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={[
                  "transition hover:text-white",
                  active ? "text-white" : "text-white/70",
                ].join(" ")}
                aria-current={active ? "page" : undefined}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Direita */}
        <div className="flex items-center gap-3">
          <Link
            href="/orcamento"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Agende agora
          </Link>

          {/* Botão mobile (burger / close) */}
          <button
            type="button"
            className={[
              "md:hidden inline-flex items-center justify-center",
              "h-10 w-10 rounded-full border border-white/12 bg-white/6",
              "text-white/80 hover:bg-white/10 transition",
              "focus:outline-none focus:ring-2 focus:ring-white/20",
            ].join(" ")}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconBurger />}
          </button>
        </div>
      </div>

      {/* Overlay + Drawer mobile */}
      {open && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 z-40 bg-black/60"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          <div className="fixed right-0 top-0 z-50 h-[100dvh] w-[86%] max-w-sm border-l border-white/10 bg-neutral-950 p-6 pt-[calc(1.25rem+env(safe-area-inset-top))]">
            <div className="flex items-center justify-between">
              <span className="text-sm font-extrabold text-white">Menu</span>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className={[
                  "inline-flex items-center justify-center",
                  "h-10 w-10 rounded-full border border-white/12 bg-white/6",
                  "text-white/80 hover:bg-white/10 transition",
                  "focus:outline-none focus:ring-2 focus:ring-white/20",
                ].join(" ")}
                aria-label="Fechar menu"
              >
                <IconClose />
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              {links.map((l) => {
                const active = isActive(pathname, l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={[
                      "rounded-2xl border px-4 py-3 text-sm transition",
                      active
                        ? "border-white/18 bg-white/10 text-white"
                        : "border-white/10 bg-white/5 text-white/80 hover:bg-white/8",
                    ].join(" ")}
                    aria-current={active ? "page" : undefined}
                  >
                    {l.label}
                  </Link>
                );
              })}

              <Link
                href="/orcamento"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
              >
                Agende agora
              </Link>

              <p className="mt-6 text-xs text-white/45">
                Atendimento com horário marcado. Resposta rápida no orçamento.
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname?.startsWith(href);
}

/* ------------------------------ Icons ------------------------------ */

function IconBurger() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 7h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 12h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M5 17h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}
