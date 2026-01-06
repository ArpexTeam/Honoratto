"use client";

import { useEffect, useRef } from "react";

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

export default function TattooBackground() {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = Array.from(svg.querySelectorAll("path"));
    const items = paths.map((p) => {
      const len = p.getTotalLength();
      p.style.strokeDasharray = `${len}`;
      p.style.strokeDashoffset = `${len}`;
      return { p, len };
    });

    // desenha progressivamente conforme o scroll
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const t = max > 0 ? window.scrollY / max : 0;

      const n = items.length;

      items.forEach(({ p, len }, i) => {
        // cada path ocupa uma "fatia" do scroll, dando efeito de sequência
        const start = i / n;
        const end = (i + 1) / n;
        const local = clamp((t - start) / (end - start), 0, 1);

        p.style.strokeDashoffset = `${len * (1 - local)}`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-1">
      {/* um leve “fade” pra ficar elegante no preto */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-950" />

      <svg
        ref={svgRef}
        className="absolute inset-0 h-full w-full text-white/10"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#softGlow)"
          opacity="0.9"
        >
          {/* ---------------- Rose (top-left) ---------------- */}
          <g transform="translate(120 120) scale(1.05)">
            <path d="M0 40c25-40 70-40 95 0c-25 40-70 40-95 0z" />
            <path d="M10 40c18-26 50-26 68 0c-18 26-50 26-68 0z" />
            <path d="M22 40c12-16 33-16 45 0c-12 16-33 16-45 0z" />
            <path d="M48 56c-4 24-18 44-42 58" />
            <path d="M48 56c4 24 18 44 42 58" />
            <path d="M48 64c0 30-8 54-24 82" />
            <path d="M48 64c0 30 8 54 24 82" />
          </g>

          {/* ---------------- Dagger (top-right) ---------------- */}
          <g transform="translate(860 105) scale(1.0)">
            <path d="M60 0L90 30L72 48L95 185L60 210L25 185L48 48L30 30L60 0z" />
            <path d="M25 185h70" />
            <path d="M42 232c12-10 24-10 36 0" />
            <path d="M30 230h60" />
          </g>

          {/* ---------------- Snake (mid-left) ---------------- */}
          <g transform="translate(120 380) scale(1.05)">
            <path d="M0 30c40-40 90-40 130 0c35 35 70 25 95 0c25-25 60-25 75 0c15 25-5 55-35 55c-25 0-38-18-28-33" />
            <path d="M210 40c-10 14-2 28 16 28" />
            <path d="M10 30c10 14 26 18 40 10" />
            <path d="M52 12c8 8 8 18 0 26" />
          </g>

          {/* ---------------- Moon + stars (mid-right) ---------------- */}
          <g transform="translate(860 380) scale(1.0)">
            <path d="M95 10c-38 20-52 66-28 102c12 18 30 28 52 30c-40 25-95 0-110-48C-8 66 22 18 62 6c12-4 24-3 33 4z" />
            <path d="M170 30l8 18l20 3l-15 13l4 20l-17-10l-17 10l4-20l-15-13l20-3l8-18z" />
            <path d="M210 110l5 11l12 2l-9 8l2 12l-10-6l-10 6l2-12l-9-8l12-2l5-11z" />
          </g>

          {/* ---------------- Minimal flash lines (bottom) ---------------- */}
          <g transform="translate(160 650)">
            <path d="M0 0c90-40 170-40 260 0" />
            <path d="M320 0c110-50 220-50 330 0" />
            <path d="M710 0c90-35 170-35 260 0" />
          </g>

          {/* ---------------- Small sparkles (scattered) ---------------- */}
          <path d="M540 150l8 18l20 3l-15 13l4 20l-17-10l-17 10l4-20l-15-13l20-3l8-18z" />
          <path d="M630 610l6 14l16 2l-12 10l3 16l-13-8l-13 8l3-16l-12-10l16-2l6-14z" />
          <path d="M310 250l5 11l12 2l-9 8l2 12l-10-6l-10 6l2-12l-9-8l12-2l5-11z" />
        </g>
      </svg>
    </div>
  );
}
