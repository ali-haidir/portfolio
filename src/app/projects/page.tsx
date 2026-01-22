"use client";
import { useEffect } from "react";
import { PROJECTS, getFeaturedProjects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { FeaturedProjectsCarousel } from "@/components/projects/FeaturedProjectsCarousel";

export default function ProjectsPage() {
  useEffect(() => {
    const cls = "no-scrollbar";
    document.documentElement.classList.add(cls);
    document.body.classList.add(cls);

    return () => {
      document.documentElement.classList.remove(cls);
      document.body.classList.remove(cls);
    };
  }, []);

  const featured = getFeaturedProjects();
  const featuredItems = featured.map((p) => ({
    slug: p.slug,
    title: p.title,
    label: p.heroMeta?.[0]?.value ?? "PROJECT",
    image: p.image,
  }));

  // --- TRUE CENTERING ON LG (3 columns) ---
  const total = PROJECTS.length;
  const remainderLg = total % 3;

  const cutIndex = remainderLg === 0 ? total : total - remainderLg;
  const mainGrid = PROJECTS.slice(0, cutIndex); // full rows only
  const lastRow = PROJECTS.slice(cutIndex);     // 1 or 2 cards

  return (
    <div className="min-h-screen bg-[var(--bg)] pt-[50px] sm:pt-[60px] lg:pt-[70px] pb-12 sm:pb-16 lg:pb-20">
      <div className="w-full px-4 sm:px-10">
        <div className="mx-auto max-w-[1400px]">
          <header className="text-center">
            <h1 className="text-[32px] sm:text-[40px] lg:text-[46px] font-extrabold text-[var(--text)]">
              Projects
            </h1>
          </header>

          <div className="mt-6 sm:mt-8 lg:mt-10">
            <FeaturedProjectsCarousel items={featuredItems} />
          </div>

          <h2 className="mt-8 sm:mt-9 lg:mt-10 text-[24px] sm:text-[28px] lg:text-[30px] font-extrabold text-center text-[var(--text)]">
            All Projects
          </h2>

          {/* ✅ Mobile + Tablet: normal grid (no special handling) */}
          <section className="mt-12 grid gap-6 sm:grid-cols-2 lg:hidden">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </section>

          {/* ✅ Desktop (lg+): grid for full rows */}
          <section className="mt-12 hidden lg:grid lg:grid-cols-3 gap-6">
            {mainGrid.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </section>

          {/* ✅ Desktop (lg+): TRUE centered last row (1 or 2 cards) */}
          {remainderLg !== 0 && lastRow.length > 0 ? (
            <div className="mt-6 hidden lg:flex justify-center gap-6">
              {lastRow.map((p) => (
                <div key={p.slug} className="w-full max-w-none">
                  <ProjectCard project={p} />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}