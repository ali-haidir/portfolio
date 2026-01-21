import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/data/projects";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectMediaCarousel } from "@/components/projects/ProjectMediaCarousel";
import { ProjectStorySection } from "@/components/projects/ProjectStorySection";
import { ProjectSolutionSection } from "@/components/projects/ProjectSolutionSection";
import { ProjectUserFlowSection } from "@/components/projects/ProjectUserFlowSection";
import { ProjectDemoVideoSection } from "@/components/projects/ProjectDemoVideoSection";


import { PageScrollMode } from "@/components/projects/PageScrollMode";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  return (
    <div className="bg-[var(--bg)]">


      <PageScrollMode hideScrollbar />
      <ProjectHero title={project.title} meta={project.heroMeta} />

      {/* Carousel section */}
      <section className="mx-auto max-w-[1400px] px-4 sm:px-10 pt-10 pb-10">
        <ProjectMediaCarousel
          items={project.media?.length ? project.media : [project.image]}
          autoplayMs={3200}
        />
      </section>

      {/* THE STORY section */}
      {project.story?.paragraphs?.length ? (
        <ProjectStorySection
          eyebrow={project.story.eyebrow ?? "THE STORY"}
          paragraphs={project.story.paragraphs}
        />
      ) : null}

      {/* SOLUTION section (data-driven) */}
      <ProjectSolutionSection
        description={project.solution?.description}
        languages={project.solution?.languages ?? []}
        specsTitle={project.solution?.specsTitle ?? "Development Specifications"}
        specs={project.solution?.specs ?? []}
        githubUrl={project.solution?.githubUrl}
      />


      {project.userFlow?.image ? (
        <ProjectUserFlowSection
          title={project.userFlow.title ?? "USER FLOW"}
          image={project.userFlow.image}
          description={project.userFlow.description}
          bullets={project.userFlow.bullets ?? []}
        />
      ) : null}


      {project.demoVideo?.video ? (
        <ProjectDemoVideoSection
          title={project.demoVideo.title ?? "WORKING DEMO"}
          video={project.demoVideo.video}
          poster={project.demoVideo.poster}
          description={project.demoVideo.description}
        />
      ) : null}


    </div>
  );
}