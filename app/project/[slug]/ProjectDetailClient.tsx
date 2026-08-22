"use client";

import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

const cardReveal = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

export default function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <main className="project-page-shell">
      <motion.header
        className="project-detail-header"
        aria-label="Project navigation"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          whileHover={{ x: -3 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <Link href="/" className="project-back-button">
            ← Back to home <ArrowUpRight size={15} />
          </Link>
        </motion.div>
      </motion.header>

      <section className="project-detail-page section-shell">
        <motion.div
          className="project-hero-card"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="project-hero-image-wrap"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.01 }}
          >
            <img
              src={project.heroImage}
              alt={project.title}
              className="project-hero-image"
            />
          </motion.div>

          <motion.div
            className="project-hero-content"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="project-category project-detail-category">
              {project.category}
            </p>
            <h1>{project.title}</h1>
            <p className="project-hero-text">{project.heroText}</p>

            <div className="project-actions">
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="button button-solid"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                Live Demo <ExternalLink size={16} />
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Link href="/" className="button button-ghost">
                  View all work
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="project-content-grid"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.article className="project-info-panel" variants={cardReveal}>
            <h2>Overview</h2>
            <p>{project.overview}</p>
          </motion.article>

          <motion.article className="project-info-panel" variants={cardReveal}>
            <h2>Problem Statement</h2>
            <p>{project.problemStatement}</p>
          </motion.article>

          <motion.article className="project-info-panel" variants={cardReveal}>
            <h2>Solution</h2>
            <p>{project.solution}</p>
          </motion.article>

          <motion.article className="project-info-panel" variants={cardReveal}>
            <h2>Key Features</h2>
            <ul>
              {project.keyFeatures.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            className="project-info-panel tech-panel"
            variants={cardReveal}
          >
            <h2>Tech Stack</h2>
            <div className="tag-row project-detail-tags">
              {project.techStack.map((item) => (
                <motion.span
                  key={item}
                  whileHover={{ scale: 1.07, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.article>
        </motion.div>
      </section>
    </main>
  );
}
