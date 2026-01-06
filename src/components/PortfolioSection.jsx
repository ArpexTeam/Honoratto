"use client";

import Image from "next/image";
import { useMemo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function PortfolioSection() {
  const swiperRef = useRef(null);
  const pagRef = useRef(null);

  const slides = useMemo(
    () => [
      { id: 1, label: "", src: "/images/tatto12.jpg" },
      { id: 2, label: "", src: "/images/tatto1.jpg" },
      { id: 3, label: "", src: "/images/tatto2.jpg" },
      { id: 4, label: "", src: "/images/tatto15.jpg" },
      { id: 5, label: "", src: "/images/tatto4.jpg" },
    ],
    []
  );

  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-start lg:items-center">
          {/* Texto à esquerda */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <h2 className="text-2xl sm:text-5xl font-extrabold tracking-tight text-white">
              Portfólio
            </h2>
            <p className="mt-4 sm:mt-8 text-xs sm:text-sm text-white/55">
              Trabalhos que falam por si
            </p>
          </div>

          {/* Swiper à direita */}
          <div className="lg:col-span-8">
            <Swiper
              modules={[Pagination]}
              slidesPerView={1.08}
              spaceBetween={16}
              speed={550}
              breakpoints={{
                480: { slidesPerView: 1.15, spaceBetween: 18 },
                640: { slidesPerView: 1.22, spaceBetween: 18 },
                1024: { slidesPerView: 1.32, spaceBetween: 22 },
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onInit={(swiper) => {
                // paginação no container custom
                if (pagRef.current) {
                  swiper.params.pagination.el = pagRef.current;
                  swiper.pagination.init();
                  swiper.pagination.render();
                  swiper.pagination.update();
                }
              }}
              pagination={{ clickable: true }}
              className="portfolio-swiper"
            >
              {slides.map((s) => (
                <SwiperSlide key={s.id}>
                  <PortfolioSlide label={s.label} src={s.src} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Controles */}
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <button
                  type="button"
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="inline-flex h-10 w-10 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white/70 hover:bg-white/10 hover:text-white transition cursor-pointer"
                  aria-label="Anterior"
                >
                  <ArrowLeftIcon />
                </button>

                <button
                  type="button"
                  onClick={() => swiperRef.current?.slideNext()}
                  className="inline-flex h-10 w-10 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white/70 hover:bg-white/10 hover:text-white transition cursor-pointer"
                  aria-label="Próximo"
                >
                  <ArrowRightIcon />
                </button>
              </div>

              <div
                ref={pagRef}
                className="portfolio-pagination flex w-full justify-center sm:w-auto sm:justify-end items-center gap-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioSlide({ label, src }) {
  return (
    <div
      className="relative w-full aspect-[4/5] sm:aspect-square rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-white/5"
      role="img"
      aria-label={label || "Trabalho"}
    >
      {src ? (
        <>
          <Image
            src={src}
            alt={label || "Trabalho"}
            fill
            quality={95}
            sizes="(min-width: 1024px) 560px, (min-width: 640px) 70vw, 92vw"
            className="object-cover object-center"
            priority={false}
          />

          {/* overlay leve */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/10" />
        </>
      ) : (
        <div className="absolute inset-0 bg-[#dcdcdc]" />
      )}

      {/* Label (só se tiver texto) */}
      {label ? (
        <div className="absolute left-5 top-5 rounded-full bg-black/40 px-3 py-1.5 text-[11px] font-semibold text-white/90 backdrop-blur">
          {label}
        </div>
      ) : null}
    </div>
  );
}

function ArrowLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
