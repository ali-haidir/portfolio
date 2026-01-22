import Image from "next/image";
import Link from "next/link";
import type { ProjectDetail } from "@/data/projects";

export function ProjectCard({ project }: { project: ProjectDetail }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="
        group block overflow-hidden
        rounded-[28px] bg-[var(--surface-2)]
        ring-1 ring-white/10
        shadow-[var(--shadow-soft)]
        transition-all duration-200 ease-out
        hover:shadow-[var(--shadow-glow)]
        hover:-translate-y-1
      "
    >
      {/* Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={project.media?.[0] ?? project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
      </div>

      {/* Title + optional subtitle */}
      <div className="p-4 sm:p-5">
        <h3 className="text-[14px] sm:text-[15px] lg:text-[16px] font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--accent)] line-clamp-2">
          {project.title}
        </h3>

        {project.subtitle ? (
          <p className="mt-1 text-[12px] sm:text-[13px] text-[var(--muted)] line-clamp-2">{project.subtitle}</p>
        ) : null}
      </div>
    </Link>
  );
}