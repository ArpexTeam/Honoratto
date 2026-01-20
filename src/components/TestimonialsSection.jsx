"use client";

import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsSection() {
  const testimonials = useMemo(
    () => [
      {
        id: 1,
        quote: "A tatuagem saiu exatamente como imaginei, traço perfeito.",
        name: "Marina Silva",
        meta: "Cliente, São Paulo",
      },
      {
        id: 2,
        quote: "Ambiente acolhedor, profissional atencioso, resultado impecável.",
        name: "Lucas Ferreira",
        meta: "Cliente, Rio de Janeiro",
      },
      {
        id: 3,
        quote: "Minha primeira tatuagem, sem medo, sem arrependimento.",
        name: "Ana Costa",
        meta: "Cliente, Belo Horizonte",
      },
      {
        id: 4,
        quote: "Traço limpo, cuidado total e um resultado muito acima do esperado.",
        name: "Pedro Almeida",
        meta: "Cliente, Campinas",
      },
      {
        id: 5,
        quote: "Processo tranquilo, pós-sessão bem orientado. Voltarei com certeza.",
        name: "Beatriz Lima",
        meta: "Cliente, Curitiba",
      },
    ],
    []
  );

  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 sm:py-40 sm:pt-52">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Avaliações
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-white/55">
            O que nossos clientes dizem
          </p>
        </div>

        {/* Swiper */}
        <div className="mt-10 -mx-6 px-6 overflow-visible">
          <Swiper
            modules={[Pagination, Autoplay]}
            centeredSlides
            loop
            speed={650}
            spaceBetween={14}
            slidesPerView={1.08}
            breakpoints={{
              640: { slidesPerView: 1.4, spaceBetween: 18 },
              1024: { slidesPerView: 3, spaceBetween: 26 },
            }}
            autoplay={{
              delay: 3200,
              disableOnInteraction: false, // continua mesmo se o usuário arrastar
              pauseOnMouseEnter: true,     // pausa no hover (desktop)
            }}
            pagination={{ clickable: true }}
            className="testimonials-swiper"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                {({ isActive }) => <TestimonialCard {...t} active={isActive} />}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ quote, name, meta, active }) {
  return (
    <div
      className={[
        "testimonial-card rounded-2xl px-6 py-7 sm:px-7 sm:py-8 text-center",
        "transition-transform duration-300 ease-out transition-opacity",
        "origin-center will-change-transform",
        active ? "scale-[1.03] sm:scale-[1.06] opacity-100" : "scale-[0.95] opacity-60",
      ].join(" ")}
    >
      <div className="mx-auto mb-5 inline-flex items-center gap-2 text-xs font-semibold text-white/70">
      </div>

      <p className="text-sm sm:text-base font-semibold leading-relaxed text-white">
        “{quote}”
      </p>

      <div className="mt-7 flex justify-center">
        <div className="h-10 w-10 rounded-full border border-white/12 bg-white/10" />
      </div>

      <div className="mt-4">
        <div className="text-xs font-bold text-white/90">{name}</div>
        <div className="mt-1 text-[11px] text-white/45">{meta}</div>
      </div>
    </div>
  );
}
