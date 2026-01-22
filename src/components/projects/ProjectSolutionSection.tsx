import Link from "next/link";
import { Github } from "lucide-react";
import type { IconType } from "react-icons";

export type ProjectSpecItem = {
    label: string;
    value: string;
};

export function ProjectSolutionSection({
    title = "Solution",
    description,
    languages = [],
    specsTitle = "Development Specifications",
    specs = [],
    githubUrl,
}: {
    title?: string;
    description?: string;
    languages?: { name: string; icon?: IconType }[];
    specsTitle?: string;
    specs?: ProjectSpecItem[];
    githubUrl?: string;
}) {
    return (
        <section className="relative py-12 sm:py-16 lg:py-24 xl:py-32 overflow-hidden">
            {/* midnight continuation bg */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_0%,rgba(20,184,166,0.10),transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55),rgba(0,0,0,0.92))]" />
            </div>

            <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
                <div className="mx-auto max-w-[980px]">
                    {/* Header row */}
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-6">
                        <div className="flex-1">
                            <div className="font-mono text-[12px] sm:text-[14px] lg:text-[16px] tracking-[0.30em] sm:tracking-[0.34em] text-white/55">
                                [{title.toUpperCase()}]
                            </div>

                            {description ? (
                                <p className="mt-4 sm:mt-5 text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.75] sm:leading-[1.9] lg:leading-[2] text-white/80">
                                    {description}
                                </p>
                            ) : null}
                        </div>

                        {/* Optional GitHub pill */}
                        {githubUrl ? (
                            <Link
                                href={githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 sm:px-4 py-2 text-[10px] sm:text-[11px] lg:text-[12px] tracking-[0.20em] sm:tracking-[0.22em] text-white/80 ring-1 ring-white/10 hover:bg-white/10 transition min-h-[44px] sm:min-h-0"
                                aria-label="Open GitHub repository"
                                title="GitHub"
                            >
                                <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                <span>GITHUB</span>
                            </Link>
                        ) : null}
                    </div>

                    {/* Two columns */}
                    <div className="mt-8 sm:mt-10 lg:mt-12 grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-[380px_1fr]">
                        {/* Languages */}

                        <div className="rounded-[18px] sm:rounded-[20px] lg:rounded-[22px] bg-white/[0.04] p-5 sm:p-6 lg:p-7 ring-1 ring-white/10 flex flex-col min-h-[280px] sm:min-h-[320px] lg:min-h-[360px]">
                            <div className="font-mono text-[10px] sm:text-[11px] lg:text-[12px] tracking-[0.28em] sm:tracking-[0.32em] text-white/55">
                                [LANGUAGES]
                            </div>

                            {/* Center pills vertically */}
                            <div className=" flex-1 flex items-center">
                                <div className="grid w-full grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
                                    {languages.map((lang) => {
                                        const Icon = lang.icon;
                                        return (
                                            <div
                                                key={lang.name}
                                                className="rounded-xl sm:rounded-2xl bg-black/20 p-2.5 sm:p-3 ring-1 ring-white/10 text-[12px] sm:text-[13px] lg:text-[15px] font-semibold text-white/90 flex items-center gap-1.5 sm:gap-2"
                                            >
                                                {Icon ? <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" /> : null}
                                                <span className="truncate">{lang.name}</span>
                                            </div>
                                        );
                                    })}

                                    {languages.length === 0 ? (
                                        <div className="text-sm text-white/50">
                                            Add languages for this project.
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>

                        {/* Specs */}
                        <div className="rounded-[18px] sm:rounded-[20px] lg:rounded-[22px] bg-white/[0.04] p-5 sm:p-6 lg:p-7 ring-1 ring-white/10">
                            <div className="font-mono text-[10px] sm:text-[11px] lg:text-[12px] tracking-[0.28em] sm:tracking-[0.32em] text-white/55">
                                [{specsTitle.toUpperCase()}]
                            </div>

                            <div className="mt-4 sm:mt-5 lg:mt-6 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                                {specs.map((s) => (
                                    <div
                                        key={`${s.label}-${s.value}`}
                                        className="rounded-lg sm:rounded-xl bg-black/20 p-3 sm:p-4 ring-1 ring-white/10"
                                    >
                                        <div className="text-[10px] sm:text-[11px] lg:text-[12px] tracking-[0.20em] sm:tracking-[0.24em] text-white/55">
                                            {s.label.toUpperCase()}
                                        </div>
                                        <div className="mt-1.5 sm:mt-2 text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.5] sm:leading-[1.6] text-white/85 break-words">
                                            {s.value}
                                        </div>
                                    </div>
                                ))}

                                {specs.length === 0 ? (
                                    <div className="text-sm text-white/50">
                                        Add project specs (chunk size, strategy, etc.).
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}