"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Autoplay, Keyboard, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";

export type ProjectMediaItem =
  | string
  | {
    src: string;
    alt?: string;
  };

export function ProjectMediaCarousel({
  items,
  autoplayMs = 3200,
}: {
  items: ProjectMediaItem[];
  autoplayMs?: number;
}) {
  const swiperRef = useRef<SwiperClass | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  // Only enable keyboard when user is interacting with carousel
  const [keyboardEnabled, setKeyboardEnabled] = useState(false);

  // Track edges to hide arrows
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const media = (items ?? []).map((it) =>
    typeof it === "string" ? { src: it, alt: "Project image" } : it
  );

  // Enable/disable keyboard on interaction
  useEffect(() => {
    const s = swiperRef.current;
    if (!s) return;

    if (keyboardEnabled) s.keyboard.enable();
    else s.keyboard.disable();
  }, [keyboardEnabled]);

  if (!media.length) return null;

  const showNav = media.length > 1;

  return (
    <div className="relative w-full">
      {/* On-screen arrows inside the carousel */}
      {showNav && (
        <>
          <button
            ref={prevRef}
            type="button"
            aria-label="Previous image"
            disabled={atStart}
            className={`pmc-btn absolute left-2 sm:left-4 lg:left-5 top-1/2 z-10 -translate-y-1/2 transition-opacity ${atStart ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          <button
            ref={nextRef}
            type="button"
            aria-label="Next image"
            disabled={atEnd}
            className={`pmc-btn absolute right-2 sm:right-4 lg:right-5 top-1/2 z-10 -translate-y-1/2 transition-opacity ${atEnd ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </>
      )}

      <div
        id="project-media-carousel"
        tabIndex={0}
        onMouseEnter={() => setKeyboardEnabled(true)}
        onMouseLeave={() => setKeyboardEnabled(false)}
        onFocus={() => setKeyboardEnabled(true)}
        onBlur={() => setKeyboardEnabled(false)}
        className="outline-none overflow-hidden rounded-[26px] bg-black/20 ring-1 ring-white/10"
      >
        <Swiper
          modules={[Navigation, Keyboard, Autoplay]}
          onSwiper={(s) => {
            swiperRef.current = s;

            // Start with keyboard OFF until user interacts
            s.keyboard.disable();

            // Initialize edges
            setAtStart(s.isBeginning);
            setAtEnd(s.isEnd);
          }}
          onSlideChange={(s) => {
            setAtStart(s.isBeginning);
            setAtEnd(s.isEnd);
          }}
          slidesPerView={1}
          spaceBetween={24}
          speed={850}
          keyboard={{ enabled: true, onlyInViewport: true }}
          autoplay={
            showNav
              ? {
                delay: autoplayMs,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
              : false
          }
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // @ts-expect-error Swiper allows assigning elements
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-expect-error Swiper allows assigning elements
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {media.map((m, idx) => (
            <SwiperSlide key={`${m.src}-${idx}`}>
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={m.src}
                  alt={m.alt ?? `Project image ${idx + 1}`}
                  fill
                  priority={idx === 0}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.58))]" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .pmc-btn {
          height: 40px;
          width: 40px;
          min-height: 40px;
          min-width: 40px;
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(10, 18, 48, 0.62);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: transform 180ms ease, background 180ms ease, opacity 180ms ease;
        }
        @media (min-width: 640px) {
          .pmc-btn {
            height: 44px;
            width: 44px;
            min-height: 44px;
            min-width: 44px;
          }
        }
        .pmc-btn:hover {
          transform: scale(1.06);
          background: rgba(10, 18, 48, 0.78);
        }
        .pmc-btn:active {
          transform: scale(0.98);
        }
      `}</style>
    </div>
  );
}