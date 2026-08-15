import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="project-page-shell">
      <header className="project-detail-header" aria-label="Project navigation">
        <Link href="/" className="project-back-button">
          Back to home <ArrowUpRight size={15} />
        </Link>
      </header>

      <section className="project-detail-page section-shell">
        <div className="project-hero-card">
          <div className="project-hero-image-wrap">
            <img
              src={project.heroImage}
              alt={project.title}
              className="project-hero-image"
            />
          </div>

          <div className="project-hero-content">
            <p className="project-category project-detail-category">{project.category}</p>
            <h1>{project.title}</h1>
            <p className="project-hero-text">{project.heroText}</p>

            <div className="project-actions">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="button button-solid"
              >
                Live Demo <ExternalLink size={16} />
              </a>
              <Link href="/" className="button button-ghost">
                View all work
              </Link>
            </div>
          </div>
        </div>

        <div className="project-content-grid">
          <article className="project-info-panel">
            <h2>Overview</h2>
            <p>{project.overview}</p>
          </article>

          <article className="project-info-panel">
            <h2>Problem Statement</h2>
            <p>{project.problemStatement}</p>
          </article>

          <article className="project-info-panel">
            <h2>Solution</h2>
            <p>{project.solution}</p>
          </article>

          <article className="project-info-panel">
            <h2>Key Features</h2>
            <ul>
              {project.keyFeatures.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </article>

          <article className="project-info-panel tech-panel">
            <h2>Tech Stack</h2>
            <div className="tag-row project-detail-tags">
              {project.techStack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
