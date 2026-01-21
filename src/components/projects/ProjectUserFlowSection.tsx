import Image from "next/image";

export function ProjectUserFlowSection({
    title = "USER FLOW",
    image,
    description,
    bullets = [],
}: {
    title?: string;
    image: string;
    description?: string;
    bullets?: string[];
}) {
    return (
        <section className="relative py-24 sm:py-32 overflow-hidden">
            {/* Midnight bg */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_0%,rgba(20,184,166,0.10),transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55),rgba(0,0,0,0.92))]" />
                {/* subtle stars */}
                <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:120px_120px]" />
            </div>

            <div className="relative mx-auto max-w-[1400px] px-4 sm:px-10">
                <div className="mx-auto max-w-[980px]">
                    <div className="text-center">
                        <div className="font-mono text-[16px] tracking-[0.34em] text-white/55">
                            [{title}]
                        </div>


                    </div>

                    {/* Image */}
                    <div className="mt-10 overflow-hidden rounded-[22px] bg-white/[0.04] ring-1 ring-white/10">
                        <div className="relative w-full aspect-[16/9]">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 980px"
                                priority={false}
                            />
                        </div>
                    </div>

                    {/* Description */}
                    {description ? (
                        <p className="mt-6 text-[15px] leading-[2] text-white/75">
                            {description}
                        </p>
                    ) : null}

                    {/* Details */}
                    {bullets.length ? (
                        <div className="mt-10 rounded-[22px] bg-white/[0.04] p-7 ring-1 ring-white/10">
                            <div className="font-mono text-[12px] tracking-[0.32em] text-white/55">
                                [DETAILS]
                            </div>
                            <ul className="mt-6 space-y-3 text-[15px] leading-[1.9] text-white/75">
                                {bullets.map((b, i) => (
                                    <li key={i} className="flex gap-3">
                                        <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : null}
                </div>
            </div>
        </section>
    );
}