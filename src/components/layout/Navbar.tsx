// src/components/layout/Navbar.tsx
"use client";
import Link from "next/link";
import { Mail } from "lucide-react";
import { primaryNav, resumeHref, contactEmail } from "@/config/nav";
import { useEffect, useRef, useState } from "react";

function Pill({ children, mobile }: { children: React.ReactNode; mobile?: boolean }) {
  return (
    <div
      className={`
        flex items-center gap-6
        rounded-full px-6 py-4
        bg-[var(--surface)]
        shadow-[var(--shadow-pill)]
        ${mobile ? "px-4 sm:px-5 py-3.5 sm:py-4 w-full max-w-[95%]" : ""}
      `}
    >
      {children}
    </div>
  );
}

function LogoMark() {
  return (
    <span className="text-[var(--text)] font-semibold">AH</span>
  );
}

function SlidingNavLinks() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const [indicator, setIndicator] = useState<{ left: number; width: number; opacity: number }>(
    { left: 0, width: 0, opacity: 0 }
  );

  const moveTo = (index: number) => {
    const container = containerRef.current;
    const el = itemRefs.current[index];
    if (!container || !el) return;

    const c = container.getBoundingClientRect();
    const r = el.getBoundingClientRect();

    setIndicator({
      left: r.left - c.left,
      width: r.width,
      opacity: 1,
    });
  };

  useEffect(() => {
    // position under logo on first paint
    requestAnimationFrame(() => moveTo(0));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center gap-3"
      onMouseLeave={() => moveTo(0)}
    >
      {/* Sliding indicator behind items */}
      <div
        className="absolute top-1/2 -translate-y-1/2 h-11 rounded-full bg-[var(--surface-2)] shadow-[var(--shadow-soft)] transition-all duration-300 ease-out"
        style={{
          left: indicator.left,
          width: indicator.width,
          opacity: indicator.opacity,
        }}
      />

      {/* Logo slot (index 0) */}
      <Link
        href="/"
        ref={(el) => {
          itemRefs.current[0] = el;
        }}
        className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full"
        onMouseEnter={() => moveTo(0)}
        onFocus={() => moveTo(0)}
        aria-label="Home"
        title="Home"
      >
        <LogoMark />
      </Link>

      {/* Nav items (index 1..n) */}
      {primaryNav.map((item, i) => {
        const idx = i + 1;
        return (
          <Link
            key={item.href}
            href={item.href}
            ref={(el) => {
              itemRefs.current[idx] = el;
            }}
            className="relative z-10 flex h-11 items-center justify-center rounded-full px-6 text-[15px] text-[var(--text)] transition-opacity hover:opacity-90"
            onMouseEnter={() => moveTo(idx)}
            onFocus={() => moveTo(idx)}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

function ResumeButton() {
  return (
    <Link
      href={resumeHref}
      className="
  rounded-full bg-[var(--surface)] px-10 py-5
  text-[15px] tracking-[0.20em] text-[var(--text)]
  shadow-[var(--shadow-soft)]
  transition-all duration-200 ease-out
  hover:scale-[1.08] hover:bg-[var(--surface-2)] hover:text-white
"
    >
      RESUME
    </Link>
  );
}

function IconButton({
  href,
  label,
  children,
  className,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      title={label}
      className={
        "h-16 w-16 rounded-full flex items-center justify-center " +
        "bg-[var(--surface)] shadow-[var(--shadow-soft)] " +
        "text-[var(--text)] " +
        "transition-all duration-200 ease-out " +
        "hover:scale-[1.08] hover:bg-[var(--surface-2)] hover:text-white " +
        (className ?? "")
      }
    >
      {children}
    </Link>
  );
}

function MobileSlidingNavLinks() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const [indicator, setIndicator] = useState<{ left: number; width: number; opacity: number }>(
    { left: 0, width: 0, opacity: 0 }
  );

  const moveTo = (index: number) => {
    const container = containerRef.current;
    const el = itemRefs.current[index];
    if (!container || !el) return;

    const c = container.getBoundingClientRect();
    const r = el.getBoundingClientRect();

    setIndicator({
      left: r.left - c.left,
      width: r.width,
      opacity: 1,
    });
  };

  useEffect(() => {
    // position under logo on first paint
    requestAnimationFrame(() => moveTo(0));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center gap-2 sm:gap-3 justify-center w-full"
      onMouseLeave={() => moveTo(0)}
    >
      {/* Sliding indicator behind items */}
      <div
        className="absolute top-1/2 -translate-y-1/2 h-14 sm:h-16 rounded-full bg-[var(--surface-2)] shadow-[var(--shadow-soft)] transition-all duration-300 ease-out"
        style={{
          left: indicator.left,
          width: indicator.width,
          opacity: indicator.opacity,
        }}
      />

      {/* Logo/Home link */}
      <Link
        href="/"
        ref={(el) => {
          itemRefs.current[0] = el;
        }}
        className="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full text-[var(--text)] transition-all duration-200 hover:opacity-90 active:scale-95 active:bg-[var(--surface-2)] shrink-0"
        onMouseEnter={() => moveTo(0)}
        onFocus={() => moveTo(0)}
        aria-label="Home"
        title="Home"
      >
        <LogoMark />
      </Link>

      {/* Nav items */}
      {primaryNav.map((item, i) => {
        const idx = i + 1;
        return (
          <Link
            key={item.href}
            href={item.href}
            ref={(el) => {
              itemRefs.current[idx] = el;
            }}
            className="relative z-10 flex h-14 sm:h-16 items-center justify-center rounded-full px-4 sm:px-6 flex-1 text-center text-[16px] sm:text-[17px] font-semibold text-[var(--text)] transition-all duration-200 hover:opacity-90 active:scale-95 active:bg-[var(--surface-2)] whitespace-nowrap"
            onMouseEnter={() => moveTo(idx)}
            onFocus={() => moveTo(idx)}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

export function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="w-full lg:px-16 pt-3 sm:pt-4 lg:pt-10 pb-2 sm:pb-3 lg:pb-0">
        {/* Desktop Navbar */}
        <div className="hidden lg:flex items-center justify-between px-16">
          {/* Left pill */}
          <Pill>
            <SlidingNavLinks />
          </Pill>

          <div className="flex items-center gap-4">
            <ResumeButton />
            <IconButton href={contactEmail} label="Email">
              <Mail className="h-6 w-6" />
            </IconButton>
          </div>
        </div>

        {/* Mobile Navbar - Centered tabs (no hamburger) */}
        <div className="lg:hidden flex items-center justify-center w-full px-2 sm:px-4">
          <Pill mobile>
            <MobileSlidingNavLinks />
          </Pill>
        </div>
      </div>
    </header>
  );
}