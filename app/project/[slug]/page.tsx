import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";

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

  return <ProjectDetailClient project={project!} />;
}
