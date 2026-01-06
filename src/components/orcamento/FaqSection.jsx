"use client";

import { useId, useState } from "react";

export default function FaqSection() {
  const items = [
    {
      q: "Quanto custa uma tatuagem?",
      a: "Como funciona orçamento (mínimo, por tamanho/hora) + formas de pagamento via whats e direct, valor variado de acordo com o tamanho, cores e detalhes. Pagamento débito, PIX e parcelo no cartão de crédito em Tattoos a partir de R$300,00",
    },
    {
      q: "Quanto tempo leva o processo?",
      a: "Tatuagens pequenas podem sair em uma sessão. Trabalhos maiores ou mais detalhados exigem múltiplas sessões. Durante a consultoria, definimos um cronograma realista baseado no que você quer.",
    },
    {
      q: "Como funciona a consultoria?",
      a: "Conversamos sobre suas ideias, estilo de vida e significado pessoal. Mostramos referências, esboçamos opções e refinamos até você estar completamente satisfeito com o design final.",
    },
    {
      q: "Qual é o cuidado pós-tatuagem?",
      a: "Fornecemos instruções detalhadas de higiene e cicatrização. Os primeiros dias são críticos. Limpeza suave, hidratação adequada e proteção solar mantêm sua tatuagem vibrante e nítida.",
    },
    {
      q: "Vocês fazem retoques?",
      a: "Sim. Oferecemos sessões de toque para manter sua tatuagem em perfeito estado. Também cobrimos ou renovamos trabalhos antigos com designs que transformam completamente o que já existe.",
    },
  ];

  // No seu print parece tudo “aberto”, mas o padrão de UX melhor é:
  // abrir 1 por vez (comportamento accordion). Começo com o primeiro aberto.
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 pt-30 pb-20">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Dúvidas
          </h2>
          <p className="mt-7 text-xs sm:text-sm text-white/55">
            Respostas para as perguntas que mais recebemos sobre tatuagem
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {items.map((it, idx) => (
            <FaqItem
              key={it.q}
              index={idx}
              question={it.q}
              answer={it.a}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex((cur) => (cur === idx ? -1 : idx))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer, isOpen, onToggle, index }) {
  const contentId = useId();

  return (
    <div className="rounded-md border border-white/10 bg-white/0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full px-6 py-5 text-left flex items-start justify-between gap-6 cursor-pointer"
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <div>
          <div className="text-sm font-semibold text-white">{question}</div>
          {/* No seu print o texto aparece no corpo do card; mantemos abaixo com animação */}
        </div>

        <div className="mt-0.5 text-white/55">
          {isOpen ? <IconClose /> : <IconPlus />}
        </div>
      </button>

      <div
        id={contentId}
        className={[
          "px-6 pb-5",
          "grid transition-[grid-template-rows,opacity] duration-200 ease-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <p className="text-xs sm:text-sm leading-relaxed text-white/55">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

function IconPlus() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
