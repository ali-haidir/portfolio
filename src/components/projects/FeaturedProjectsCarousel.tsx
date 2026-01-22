"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";

import "swiper/css";

export type FeaturedProject = {
  slug: string;   // plain slug like "webex-notifier"
  title: string;
  label: string;  // e.g. "MICROSERVICE"
  image: string;
};

export function FeaturedProjectsCarousel({ items }: { items: FeaturedProject[] }) {
  const swiperRef = useRef<SwiperClass | null>(null);
  const isActiveRef = useRef(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const inViewRef = useRef(false);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        inViewRef.current = !!entry?.isIntersecting && (entry.intersectionRatio ?? 0) >= 0.35;
      },
      { threshold: [0, 0.2, 0.35, 0.5, 0.7, 1] }
    );

    io.observe(sectionEl);

    const onWheel = (e: WheelEvent) => {
      const swiper = swiperRef.current;
      if (!swiper) return;

      if (!inViewRef.current && !isActiveRef.current) return;
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
      if (Math.abs(e.deltaY) < 2) return;

      const isAtStart = swiper.isBeginning;
      const isAtEnd = swiper.isEnd;

      if (e.deltaY > 0) {
        if (!isAtEnd) {
          e.preventDefault();
          swiper.slideNext();
        }
      } else {
        if (!isAtStart) {
          e.preventDefault();
          swiper.slidePrev();
        }
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      io.disconnect();
      window.removeEventListener("wheel", onWheel as any);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const swiper = swiperRef.current;
      if (!swiper) return;
      if (!isActiveRef.current) return;

      const el = document.activeElement as HTMLElement | null;
      const tag = el?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea" || el?.isContentEditable) return;

      if (e.key === "ArrowDown") {
        if (!swiper.isEnd) {
          e.preventDefault();
          swiper.slideNext();
        }
        return;
      }

      if (e.key === "ArrowUp") {
        if (!swiper.isBeginning) {
          e.preventDefault();
          swiper.slidePrev();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section ref={sectionRef} className="mt-6 sm:mt-8 lg:mt-10">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="mb-4 sm:mb-5 lg:mb-6 text-center">
          <div className="text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.28em] sm:tracking-[0.32em] text-white/60">
            [{items.length} FEATURED PROJECTS]
          </div>
        </div>

        <div
          className="relative"
          tabIndex={0}
          onMouseEnter={() => (isActiveRef.current = true)}
          onMouseLeave={() => (isActiveRef.current = false)}
          onFocus={() => (isActiveRef.current = true)}
          onBlur={() => (isActiveRef.current = false)}
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(47,230,214,0.14),transparent_62%)] blur-2xl" />

          <Swiper
            onSwiper={(s) => (swiperRef.current = s)}
            slidesPerView="auto"
            initialSlide={Math.min(1, items.length - 1)}
            centeredSlides={true}
            spaceBetween={72}
            speed={1500}
            className="featured-swiper"
          >
            {items.map((p) => (
              <SwiperSlide key={p.slug} className="!w-[280px] sm:!w-[360px] md:!w-[420px] lg:!w-[520px] xl:!w-[640px] 2xl:!w-[760px]">
                <Link href={`/projects/${p.slug}`} className="block">
                  <div className="overflow-hidden rounded-[10px] bg-black/20">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 320px, (max-width: 1024px) 520px, 760px"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),transparent_60%)]" />
                    </div>
                  </div>

                  <div className="mt-3 sm:mt-4 flex items-baseline justify-between gap-3 sm:gap-4 lg:gap-6">
                    <div className="text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.24em] sm:tracking-[0.28em] text-white/45 truncate">{p.label}</div>
                    <div className="text-[11px] sm:text-[12px] md:text-[13px] tracking-[0.16em] sm:tracking-[0.18em] text-white/80 truncate">{p.title}</div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <style jsx global>{`
            .featured-swiper {
              padding-bottom: 12px;
            }
            .featured-swiper .swiper-wrapper {
              align-items: center;
            }
            .featured-swiper .swiper-slide {
              transition: transform 500ms ease, opacity 500ms ease;
              transform: scale(0.86);
              opacity: 0.28;
            }
            .featured-swiper .swiper-slide-active {
              transform: scale(1);
              opacity: 1;
            }
            .featured-swiper .swiper-slide-prev,
            .featured-swiper .swiper-slide-next {
              transform: scale(0.92);
              opacity: 0.55;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}