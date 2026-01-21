// src/components/layout/Navbar.tsx
// src/components/layout/Navbar.tsx
"use client";
import Link from "next/link";
import { Mail } from "lucide-react";
import { primaryNav, resumeHref, contactEmail } from "@/config/nav";
import { useEffect, useRef, useState } from "react";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        flex items-center gap-6
        rounded-full px-6 py-4
        bg-[var(--surface)]
        shadow-[var(--shadow-pill)]
      "
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

export function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="w-full px-16 pt-10">
        <div className="flex items-center justify-between">
          {/* Left pill */}
          <Pill>
            <SlidingNavLinks />
          </Pill>

          <div className="flex items-center gap-4">
            <ResumeButton />
            <IconButton href={contactEmail} label="Email">
              <Mail className="h-6 w-6 " />
            </IconButton>
          </div>
        </div>
      </div>
    </header>
  );
}