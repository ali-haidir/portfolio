"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";



function CompanyLogoTile({
    src,
    alt,
}: {
    src: string;
    alt: string;
}) {
    return (
        <div
            className="
        group
        h-12 w-full
        rounded-[18px]
        bg-white/[0.035]
        ring-1 ring-white/10
        shadow-[var(--shadow-soft)]
        backdrop-blur-md
        grid place-items-center
        transition-all duration-200
        hover:bg-white/[0.06]
        hover:ring-white/15 
      "
        >
            <Image
                src={src}
                alt={alt}
                width={160}
                height={60}
                className="
                h-9 w-[88%]
                object-contain
                select-none
                drop-shadow-[0_10px_22px_rgba(0,0,0,0.35)]
                group-hover:scale-[1.02]
                transition-transform duration-200 
              "
            />
        </div>
    );
}


function IconPill({
    href,
    label,
    children,
}: {
    href: string;
    label: string;
    children: React.ReactNode;
}) {
    const isExternal = href.startsWith("http");

    const className =
        "inline-flex h-10 w-10 items-center justify-center rounded-full " +
        "bg-[var(--surface-2)] ring-1 ring-white/10 shadow-[var(--shadow-soft)] " +
        "transition-all duration-200 hover:scale-[1.04] hover:bg-[var(--accent)] hover:text-black";

    if (isExternal) {
        return (
            <a
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className={className}
            >
                {children}
            </a>
        );
    }

    return (
        <Link href={href} aria-label={label} className={className}>
            {children}
        </Link>
    );
}

function ResumePill({ href }: { href: string }) {
    return (
        <Link
            href={href}
            className="inline-flex h-10 items-center rounded-full bg-[var(--surface-2)] px-5 text-[12px] tracking-[0.28em] text-[var(--text)] ring-1 ring-white/10 shadow-[var(--shadow-soft)] transition-all duration-200 hover:scale-[1.04] hover:bg-[var(--accent)] hover:text-black"
        >
            RESUME
        </Link>
    );
}

export default function AboutPage() {
    useEffect(() => {
        const sb = "no-scrollbar";
        const ns = "no-scroll";

        document.documentElement.classList.add(sb, ns);
        document.body.classList.add(sb, ns);

        return () => {
            document.documentElement.classList.remove(sb, ns);
            document.body.classList.remove(sb, ns);
        };
    }, []);
    return (
        <div className="relative min-h-screen bg-[var(--bg)] pt-[100px] sm:pt-[105px] lg:pt-[90px] pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
            <style jsx global>{`
                html.no-scroll,
                body.no-scroll {
                    height: 100%;
                    overflow: hidden;
                }

                html.no-scrollbar,
                body.no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }

                html.no-scrollbar::-webkit-scrollbar,
                body.no-scrollbar::-webkit-scrollbar {
                    width: 0px;
                    height: 0px;
                    display: none;
                }

                html.no-scrollbar *::-webkit-scrollbar,
                body.no-scrollbar *::-webkit-scrollbar {
                    width: 0px;
                    height: 0px;
                    display: none;
                }
            `}</style>
            {/* subtle sparkles */}
            <div className="pointer-events-none absolute inset-0 opacity-60">
                <span className="absolute left-[10%] top-[18%] h-1.5 w-1.5 rounded-full bg-[var(--accent)]/55 blur-[0.3px] animate-pulse" />
                <span className="absolute left-[16%] top-[48%] h-1 w-1 rounded-full bg-white/30 blur-[0.3px] animate-pulse [animation-delay:0.8s]" />
                <span className="absolute left-[38%] top-[22%] h-1 w-1 rounded-full bg-white/30 blur-[0.3px] animate-pulse [animation-delay:1.3s]" />
                <span className="absolute left-[58%] top-[16%] h-1.5 w-1.5 rounded-full bg-[var(--accent)]/45 blur-[0.3px] animate-pulse [animation-delay:1.1s]" />
                <span className="absolute left-[74%] top-[34%] h-1 w-1 rounded-full bg-white/30 blur-[0.3px] animate-pulse [animation-delay:0.4s]" />
                <span className="absolute left-[86%] top-[52%] h-1.5 w-1.5 rounded-full bg-[var(--accent)]/40 blur-[0.3px] animate-pulse [animation-delay:1.8s]" />
            </div>

            <div className="w-full px-4 sm:px-10">
                <div className="mx-auto max-w-[1400px]">
                    {/* Center content vertically on large screens */}
                    <div className="lg:min-h-[calc(100dvh-110px)] lg:flex lg:items-center">
                        <div className="grid items-center gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-[550px_1fr] w-full">
                            {/* Mobile: Image first (order-1), Desktop: Image second (order-2 on lg) */}
                            <section className="relative flex items-center justify-center order-1 lg:order-2 mt-4 sm:mt-6 lg:mt-0 lg:translate-x-12">
                                <div className="relative h-[240px] w-[240px] sm:h-[300px] sm:w-[300px] md:h-[360px] md:w-[360px] lg:h-[440px] lg:w-[440px] xl:h-[520px] xl:w-[520px]">
                                    {/* Ring light halo + thick luminous ring (design style) */}
                                    <div className="pointer-events-none absolute inset-0">
                                        {/* soft outer halo */}
                                        <div className="absolute inset-[-34px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,240,210,0.22),transparent_62%)] blur-2xl" />

                                        {/* secondary glow to add depth */}
                                        <div className="absolute inset-[-18px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,240,210,0.14),transparent_65%)] blur-xl" />

                                        {/* thick bright ring */}
                                        <div className="absolute inset-[14px] rounded-full ring-[14px] ring-[var(--text)] shadow-[0_0_120px_rgba(255,240,210,0.45)]" />

                                        {/* subtle inner rim */}
                                        <div className="absolute inset-[26px] rounded-full ring-1 ring-white/12" />

                                        {/* inner bloom */}
                                        <div className="absolute inset-[34px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,240,210,0.08),transparent_70%)]" />
                                    </div>

                                    {/* inner content (placeholder for your photo/video later) */}
                                    <div className="absolute inset-[34px] overflow-hidden rounded-full bg-[linear-gradient(180deg,rgba(17,28,47,0.95),rgba(7,10,15,0.95))] ring-1 ring-white/10">
                                        {/* scanlines */}
                                        <div className="pointer-events-none absolute inset-0 opacity-20 [background:repeating-linear-gradient(180deg,rgba(255,255,255,0.14)_0px,rgba(255,255,255,0.14)_1px,transparent_3px,transparent_7px)]" />

                                        {/* Portrait image (place file in: public/images/about-portrait.jpg) */}
                                        <div className="absolute inset-0">
                                            <Image
                                                src="/AliHaider.jpeg"
                                                alt="Ali Haider"
                                                fill
                                                draggable={false}
                                                onContextMenu={(e) => e.preventDefault()}
                                                priority
                                                sizes="(max-width: 640px) 320px, (max-width: 1024px) 440px, 520px"
                                                className="object-cover saturate-90 contrast-105 select-none pointer-events-none"
                                            />

                                            {/* subtle vignette to match premium ring-light look */}
                                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.55)_85%)]" />
                                            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.10),rgba(0,0,0,0.35))]" />
                                        </div>

                                        {/* floating dots */}
                                        <span className="absolute left-[20%] top-[28%] h-2 w-2 rounded-full bg-[var(--accent)]/70 blur-[0.3px]" />
                                        <span className="absolute right-[22%] top-[22%] h-1.5 w-1.5 rounded-full bg-white/40 blur-[0.3px]" />
                                        <span className="absolute right-[30%] bottom-[28%] h-2 w-2 rounded-full bg-[var(--accent-2)]/60 blur-[0.3px]" />
                                    </div>
                                </div>
                            </section>

                            {/* Mobile: Info card second (order-2), Desktop: Info card first (order-1 on lg) */}
                            <section className="rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] bg-[var(--surface-2)]/70 backdrop-blur-md ring-1 ring-white/10 shadow-[var(--shadow-soft)] p-5 sm:p-6 lg:p-7 xl:p-8 order-2 lg:order-1">
                                {/* Header row: Hello + socials */}
                                <div className="flex items-start justify-between gap-3 sm:gap-4 pb-4">
                                    <h1 className="text-[40px] sm:text-[48px] lg:text-[56px] leading-[0.95] font-extrabold text-[var(--text)]">
                                        Hello!
                                    </h1>

                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <IconPill href="https://www.linkedin.com/in/ali-hydir/" label="LinkedIn">
                                            <Linkedin className="h-5 w-5" />
                                        </IconPill>

                                        <IconPill href="https://github.com/ali-haidir" label="GitHub">
                                            <Github className="h-5 w-5" />
                                        </IconPill>

                                        <ResumePill href="/Ali%20Haider.pdf" />
                                    </div>
                                </div>

                                <p className="mt-4 sm:mt-5 text-[13px] sm:text-[14px] leading-[1.75] sm:leading-7 text-white/90">
                                    Ali Haider is a software engineer who builds end-to-end solutions that simplify work and connect systems. He started with backend development and grew into automation and data-focused projects that reduce manual effort.
                                </p>

                                <p className="mt-2 text-[13px] sm:text-[14px] leading-[1.75] sm:leading-7 text-white/90">
                                    My work spans building automation tools, data pipelines, reporting dashboards, and web-based applications with AI capabilities—including enterprise chatbots, RAG-based search, and network automation solutions.
                                </p>

                                <div className="mt-4">
                                    <div className="text-[13px] font-semibold text-[var(--text)]">
                                        Reach me at
                                    </div>
                                    <a
                                        href="mailto:khalihaider9@gmail.com"
                                        className="mt-1 inline-block text-[14px] text-[var(--accent)]  decoration-[var(--accent)]/50 underline-offset-4 hover:decoration-[var(--accent)]"
                                    >
                                        khalihaider9@gmail.com
                                    </a>
                                </div>

                                {/* Friends / companies */}
                                <div className="mt-5">
                                    <div className="text-[13px] font-semibold text-[var(--text)]">
                                        Some of <span className="text-[var(--accent)] great-vibes text-[28px]">my</span> good friends
                                    </div>

                                    {/* Logos row */}
                                    <div className="mt-4 grid grid-cols-3 gap-4">
                                        <CompanyLogoTile
                                            src="/images/about/seco.svg"
                                            alt="Saudi Electricity Company"
                                        />
                                        <CompanyLogoTile
                                            src="/images/about/huawei_notext.svg"
                                            alt="Huawei"
                                        />
                                        <CompanyLogoTile
                                            src="/images/about/stc.svg"
                                            alt="STC"
                                        />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}