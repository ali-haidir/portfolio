import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-[100dvh] overflow-hidden bg-[var(--bg)]">
      {/* sparkles */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <span className="absolute left-[6%] top-[14%] h-1.5 w-1.5 rounded-full bg-white/70 animate-pulse" />
        <span className="absolute left-[14%] top-[42%] h-1 w-1 rounded-full bg-white/55 animate-pulse [animation-delay:0.7s]" />
        <span className="absolute left-[28%] top-[22%] h-1 w-1 rounded-full bg-white/60 animate-pulse [animation-delay:1.4s]" />
        <span className="absolute left-[46%] top-[16%] h-1.5 w-1.5 rounded-full bg-white/55 animate-pulse [animation-delay:1.1s]" />
        <span className="absolute left-[62%] top-[10%] h-1 w-1 rounded-full bg-white/55 animate-pulse [animation-delay:0.4s]" />
        <span className="absolute left-[76%] top-[30%] h-1.5 w-1.5 rounded-full bg-white/65 animate-pulse [animation-delay:1.8s]" />
        <span className="absolute left-[90%] top-[18%] h-1 w-1 rounded-full bg-white/55 animate-pulse [animation-delay:0.9s]" />
        <span className="absolute left-[86%] top-[46%] h-1.5 w-1.5 rounded-full bg-white/55 animate-pulse [animation-delay:0.2s]" />
      </div>
      <div className="flex h-full flex-col">

        {/* Hero text */}
        <section className="pt-[90px] sm:pt-[105px] lg:pt-[110px]">
          <div className="w-full px-4 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-[1400px] text-center">
              <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] leading-[0.92] font-extrabold text-[var(--text)]">
                Ali Haider
              </h1>
              <p className="mt-2 text-[16px] sm:text-[18px] lg:text-[22px] text-[var(--muted)] px-2">
                Software / Automation / AI Engineer
              </p>
            </div>
          </div>
        </section>

        {/* Scene (fills remaining viewport height) */}
        <section className="mt-4 sm:mt-6 lg:mt-8 flex-1 min-h-0">
          <div className="w-full px-4 sm:px-6 lg:px-10 h-full">
            <div className="mx-auto max-w-[1400px] h-full">
              <div className="relative h-full overflow-hidden rounded-[20px] sm:rounded-[28px] lg:rounded-[44px] shadow-[var(--shadow-pill)]">

                <Image
                  src="/images/hero-scene.png"
                  alt="Hero scene"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1400px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}