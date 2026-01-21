import { ProjectDetailFooter } from "@/components/projects/ProjectDetailFooter";
export function ProjectDemoVideoSection({
    title = "WORKING DEMO",
    video,
    poster,
    description,
}: {
    title?: string;
    video: string;
    poster?: string;
    description?: string;
}) {
    return (
        <section className="relative py-24 sm:py-32 overflow-hidden">
            {/* Brighter stars + longer midnight light */}
            <div className="pointer-events-none absolute inset-0">
                {/* longer + brighter beam */}
                <div className="absolute inset-0 bg-[radial-gradient(1100px_circle_at_50%_-10%,rgba(45,212,191,0.22),transparent_62%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_35%,rgba(56,189,248,0.14),transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.45),rgba(0,0,0,0.92))]" />

                {/* brighter stars */}
                <div className="absolute inset-0 opacity-[0.20] [background-image:radial-gradient(rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:90px_90px]" />
                <div className="absolute inset-0 opacity-[0.10] [background-image:radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:55px_55px]" />
            </div>

            <div className="relative mx-auto max-w-[1400px] px-4 sm:px-10">
                <div className="mx-auto max-w-[980px] text-center">
                    <div className="font-mono text-[16px] tracking-[0.34em] text-white/55">
                        [{title}]
                    </div>

                    {/* Video */}
                    <div className="mt-10 overflow-hidden rounded-[22px] bg-white/[0.04] ring-1 ring-white/10">
                        <div className="relative w-full aspect-[16/9]">
                            <video
                                className="h-full w-full object-cover"
                                src={video}
                                poster={poster}
                                controls
                                playsInline
                                preload="metadata"
                            />
                        </div>
                    </div>

                    {description ? (
                        <p className="mx-auto mt-8 max-w-[860px] text-[15px] leading-[2] text-white/75">
                            {description}
                        </p>
                    ) : null}



                </div>
            </div>



            <ProjectDetailFooter mode="overlay" />

        </section>
    );
}