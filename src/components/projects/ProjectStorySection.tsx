export function ProjectStorySection({
  eyebrow = "THE STORY",
  paragraphs,
}: {
  eyebrow?: string;
  paragraphs: string[];
}) {
  // Fixed spark positions (no Math.random -> avoids hydration mismatch)
  const sparks = [
    { left: "8%", top: "18%", s: "h-2 w-2", o: "bg-white/25", d: "0.2s" },
    { left: "16%", top: "42%", s: "h-1.5 w-1.5", o: "bg-white/20", d: "0.9s" },
    { left: "24%", top: "26%", s: "h-1 w-1", o: "bg-white/25", d: "1.4s" },
    { left: "33%", top: "12%", s: "h-2 w-2", o: "bg-cyan-200/20", d: "0.6s" },
    { left: "41%", top: "34%", s: "h-1 w-1", o: "bg-white/20", d: "1.1s" },
    { left: "52%", top: "20%", s: "h-1.5 w-1.5", o: "bg-white/18", d: "0.3s" },
    { left: "63%", top: "44%", s: "h-2 w-2", o: "bg-sky-200/18", d: "1.6s" },
    { left: "72%", top: "16%", s: "h-1 w-1", o: "bg-white/22", d: "0.8s" },
    { left: "81%", top: "38%", s: "h-1.5 w-1.5", o: "bg-white/18", d: "1.9s" },
    { left: "90%", top: "22%", s: "h-2 w-2", o: "bg-teal-200/16", d: "1.2s" },
    { left: "12%", top: "70%", s: "h-1 w-1", o: "bg-white/15", d: "1.7s" },
    { left: "29%", top: "78%", s: "h-1.5 w-1.5", o: "bg-white/14", d: "0.5s" },
    { left: "47%", top: "72%", s: "h-1 w-1", o: "bg-white/14", d: "1.3s" },
    { left: "66%", top: "82%", s: "h-1.5 w-1.5", o: "bg-white/13", d: "0.7s" },
    { left: "86%", top: "74%", s: "h-1 w-1", o: "bg-white/13", d: "1.8s" },
  ] as const;

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Midnight background + aurora + grain + stars */}
      <div className="pointer-events-none absolute inset-0">
        {/* base midnight */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_15%,rgba(59,130,246,0.16),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_15%_70%,rgba(20,184,166,0.12),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_85%_65%,rgba(99,102,241,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.35),rgba(0,0,0,0.92))]" />

        {/* subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_55%,transparent_35%,rgba(0,0,0,0.85))]" />

        {/* grain */}
        <div className="absolute inset-0 opacity-[0.10] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22180%22 height=%22180%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22180%22 height=%22180%22 filter=%22url(%23n)%22 opacity=%220.45%22/%3E%3C/svg%3E')]" />

        {/* stars / sparks */}
        <div className="absolute inset-0 opacity-80">
          {sparks.map((sp, i) => (
            <div
              key={i}
              className={`absolute ${sp.s} ${sp.o} rounded-full animate-pulse`}
              style={{ left: sp.left, top: sp.top, animationDelay: sp.d }}
            />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-10">
        <div className="mx-auto max-w-[860px] text-center">
          {/* [THE STORY] */}
          <div className="font-mono text-[12px] sm:text-[13px] tracking-[0.34em] text-white/60">
            [{eyebrow}]
          </div>

          {/* story text */}
          <div className="mt-10 space-y-8 font-mono text-[14px] sm:text-[15px] leading-[2.25] text-white/75">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* small baseline divider (helps it feel less empty) */}
          <div className="mx-auto mt-14 h-px w-[220px] bg-white/10" />
        </div>
      </div>
    </section>
  );
}