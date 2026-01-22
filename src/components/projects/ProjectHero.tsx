import type { ProjectMetaItem } from "@/data/projects";

export function ProjectHero({
    title,
    meta,
}: {
    title: string;
    meta: ProjectMetaItem[];
}) {
    return (
        <section className="relative overflow-hidden">
            {/* background */}
            <div className="absolute inset-0">
                {/* soft vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_30%,rgba(30,64,175,0.18),transparent_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_70%,rgba(20,184,166,0.10),transparent_55%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.65),rgba(0,0,0,0.92))]" />

                {/* subtle grain */}
                <div className="absolute inset-0 opacity-[0.10] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22180%22 height=%22180%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22180%22 height=%22180%22 filter=%22url(%23n)%22 opacity=%220.45%22/%3E%3C/svg%3E')]" />
            </div>

            <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
                <div className="min-h-[calc(100dvh-100px)] sm:min-h-[calc(100dvh-105px)] lg:min-h-[calc(100dvh-110px)] pt-[100px] sm:pt-[105px] lg:pt-[110px] pb-6 sm:pb-8 lg:pb-10 flex flex-col">
                    {/* Title */}
                    <div className="flex-1 flex items-center justify-center px-2">
                        <h1 className="text-center font-extrabold tracking-tight text-[28px] sm:text-[40px] md:text-[48px] lg:text-[60px] xl:text-[72px] 2xl:text-[110px] leading-[0.92] text-[var(--text)] break-words">
                            {title}
                        </h1>
                    </div>

                    {/* Meta row */}
                    <div className="pb-4 sm:pb-5 lg:pb-6">
                        <div className="grid gap-4 sm:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                            {meta.map((item) => (
                                <div key={item.label}>
                                    <div className="text-[10px] sm:text-[11px] lg:text-[12px] tracking-[0.20em] sm:tracking-[0.26em] text-white/55">
                                        [{item.label}]
                                    </div>
                                    <div className="mt-1.5 sm:mt-2 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-extrabold tracking-tight text-white/90 break-words">
                                        {item.value}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* optional divider like the design’s baseline spacing */}
                        <div className="mt-6 sm:mt-7 lg:mt-8 h-px w-full bg-white/10" />
                    </div>
                </div>
            </div>
        </section>
    );
}