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
        <section className="relative py-24 sm:py-32 overflow-hidden">
            {/* midnight continuation bg */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_0%,rgba(20,184,166,0.10),transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55),rgba(0,0,0,0.92))]" />
            </div>

            <div className="relative mx-auto max-w-[1400px] px-4 sm:px-10">
                <div className="mx-auto max-w-[980px]">
                    {/* Header row */}
                    <div className="flex items-start justify-between gap-6">
                        <div>
                            <div className="font-mono text-[16px] tracking-[0.34em] text-white/55">
                                [{title.toUpperCase()}]
                            </div>

                            {description ? (
                                <p className="mt-5 text-[15px] leading-[2] text-white/80">
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
                                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-[12px] tracking-[0.22em] text-white/80 ring-1 ring-white/10 hover:bg-white/10 transition"
                                aria-label="Open GitHub repository"
                                title="GitHub"
                            >
                                <Github className="h-4 w-4" />
                                <span>GITHUB</span>
                            </Link>
                        ) : null}
                    </div>

                    {/* Two columns */}
                    <div className="mt-12 grid gap-10 lg:grid-cols-[380px_1fr]">
                        {/* Languages */}

                        <div className="rounded-[22px] bg-white/[0.04] p-7 ring-1 ring-white/10 flex flex-col min-h-[360px]">
                            <div className="font-mono text-[12px] tracking-[0.32em] text-white/55">
                                [LANGUAGES]
                            </div>

                            {/* Center pills vertically */}
                            <div className=" flex-1 flex items-center">
                                <div className="grid w-full grid-cols-2 gap-5">
                                    {languages.map((lang) => {
                                        const Icon = lang.icon;
                                        return (
                                            <div
                                                key={lang.name}
                                                className="rounded-2xl bg-black/20 p-3 ring-1 ring-white/10 text-[15px] font-semibold text-white/90 flex items-center gap-2"
                                            >
                                                {Icon ? <Icon className="h-4 w-4" /> : null}
                                                <span>{lang.name}</span>
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
                        <div className="rounded-[22px] bg-white/[0.04] p-7 ring-1 ring-white/10">
                            <div className="font-mono text-[12px] tracking-[0.32em] text-white/55">
                                [{specsTitle.toUpperCase()}]
                            </div>

                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                {specs.map((s) => (
                                    <div
                                        key={`${s.label}-${s.value}`}
                                        className="rounded-xl bg-black/20 p-4 ring-1 ring-white/10"
                                    >
                                        <div className="text-[12px] tracking-[0.24em] text-white/55">
                                            {s.label.toUpperCase()}
                                        </div>
                                        <div className="mt-2 text-[15px] leading-[1.6] text-white/85">
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