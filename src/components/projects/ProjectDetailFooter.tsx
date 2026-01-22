"use client";

import Link from "next/link";
import { FaArrowUp } from "react-icons/fa6";
import { Github, Linkedin } from "lucide-react";

export function ProjectDetailFooter({
  githubUrl = "https://github.com/ali-haidir",
  linkedinUrl = "https://www.linkedin.com/in/ali-hydir/",
  pillMin = 42, // px
  arrowMin = 36, // px
  mode = "overlay", // IMPORTANT: default to overlay so it blends
}: {
  githubUrl?: string;
  linkedinUrl?: string;
  pillMin?: number;
  arrowMin?: number;
  mode?: "overlay" | "inline";
}) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Transparent, backless
  const pillClass =
    "grid place-items-center rounded-full ring-1 ring-white/12 " +
    "bg-transparent transition hover:ring-white/25";

  const inner = (
    <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
      <div className="relative flex items-center justify-center">
        {/* Center arrow */}
        <button
          type="button"
          onClick={scrollTop}
          aria-label="Back to top"
          title="Back to top"
          className={pillClass}
          style={{ minWidth: Math.max(arrowMin, 44), minHeight: Math.max(arrowMin, 44) }}
        >
          <FaArrowUp className="h-4 w-4 sm:h-5 sm:w-5 text-white/80" />
        </button>

        {/* Right pills */}
        <div className="absolute right-0 flex items-center gap-2 sm:gap-3">
          <Link
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Open LinkedIn"
            title="LinkedIn"
            className={pillClass}
            style={{ minWidth: Math.max(pillMin, 44), minHeight: Math.max(pillMin, 44) }}
          >
            <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-white/80" />
          </Link>

          {githubUrl ? (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Open GitHub repo"
              title="GitHub"
              className={pillClass}
              style={{ minWidth: Math.max(pillMin, 44), minHeight: Math.max(pillMin, 44) }}
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5 text-white/80" />
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );

  // Overlay mode: sits INSIDE demo section with same stars/bg
  if (mode === "overlay") {
    return (
      <div className="pointer-events-none absolute inset-x-0 bottom-8">
        <div className="pointer-events-auto">{inner}</div>
      </div>
    );
  }

  // Inline mode: normal flow (still transparent)
  return <div className="py-10">{inner}</div>;
}