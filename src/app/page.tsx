// /src/app/page.tsx
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-[100dvh] bg-[var(--bg)] text-[var(--text)] overflow-hidden">

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-10">
        {/* subtle midnight glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(1100px_circle_at_20%_20%,rgba(56,189,248,0.10),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_75%_30%,rgba(20,184,166,0.10),transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.10] [background-image:radial-gradient(rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:120px_120px]" />
        </div>

        {/* subtle sparkles */}
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <span className="absolute left-[10%] top-[18%] h-1.5 w-1.5 rounded-full bg-[var(--accent)]/55 blur-[0.3px] animate-pulse" />
          <span className="absolute left-[16%] top-[48%] h-1 w-1 rounded-full bg-white/30 blur-[0.3px] animate-pulse [animation-delay:0.8s]" />
          <span className="absolute left-[38%] top-[22%] h-1 w-1 rounded-full bg-white/30 blur-[0.3px] animate-pulse [animation-delay:1.3s]" />
          <span className="absolute left-[58%] top-[16%] h-1.5 w-1.5 rounded-full bg-[var(--accent)]/45 blur-[0.3px] animate-pulse [animation-delay:1.1s]" />
          <span className="absolute left-[74%] top-[34%] h-1 w-1 rounded-full bg-white/30 blur-[0.3px] animate-pulse [animation-delay:0.4s]" />
          <span className="absolute left-[86%] top-[52%] h-1.5 w-1.5 rounded-full bg-[var(--accent)]/40 blur-[0.3px] animate-pulse [animation-delay:1.8s]" />
        </div>
        {/* left rail (desktop) */}
        <div className="pointer-events-none absolute left-4 top-0 hidden h-full sm:block">
          <div className="relative h-full w-10">
            <div className="absolute left-0 top-28 -rotate-90 origin-left text-[12px] tracking-[0.28em] text-white/40">
              Automation Engineer
            </div>
            <div className="absolute left-4 top-28 h-[62%] w-px bg-white/10" />
            <div className="absolute bottom-10 left-0 -rotate-90 origin-left text-[12px] tracking-[0.28em] text-white/40">
              2022
            </div>
          </div>
        </div>

        <section className="relative grid min-h-[100dvh] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT */}
          <div className="pt-12 sm:pt-16 lg:pt-0">
            {/* stats */}
            <div className="flex items-end gap-10">
              <div>
                <div className="text-[44px] font-light leading-none text-white/85">
                  +20
                </div>
                <div className="mt-2 text-[13px] text-white/45">
                  Project completed
                </div>
              </div>

              <div>
                <div className="text-[44px] font-light leading-none text-white/85">
                  +3
                </div>
                <div className="mt-2 text-[13px] text-white/45">
                Satisfied clients
                </div>
              </div>
            </div>

            {/* big title */}
            <h1 className="mt-14 text-[84px] font-light leading-[0.9] tracking-[-0.02em] sm:text-[120px] lg:text-[150px]">
              Hello
            </h1>

            {/* subtitle (theme-consistent) */}
            <p className="mt-6 flex items-center gap-3 text-[14px] leading-7 text-white/70">
              <span className="h-px w-6 bg-white/20" />
              It&apos;s Ali Haider — building automation, AI experiences, and clean
              systems.
            </p>


          </div>

          {/* RIGHT */}
          <div className="relative flex items-center justify-center pb-10 pt-2 lg:pb-0">
            <div className="relative w-full max-w-[560px]">
              {/* card shell to match your theme */}
              <div className="rounded-[28px] bg-[var(--surface-2)]/55 backdrop-blur-md ring-1 ring-white/10 shadow-[var(--shadow-soft)] p-4 sm:p-5">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[22px] bg-black/20">
                  <Image
                    // src="/ali haider white background.png"
                    src="/ali haider grey.png"
                    alt="Ali Haider"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 560px"
                    className="object-cover grayscale"
                    draggable={false}
                  />

                  {/* vignette / premium fade */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.70)_85%)]" />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.35))]" />
                </div>
              </div>

              {/* soft glow edge */}
              <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[40px] bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.12),transparent_60%)] blur-2xl" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}