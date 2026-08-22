"use client";

import { AnimatePresence, motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Briefcase,
  Check,
  Code2,
  Download,
  ExternalLink,
  Globe2,
  GraduationCap,
  Mail,
  Menu,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/projects";

const skills = [
  ["Programming", "Java", "C"],
  [
    "Frontend Development",
    "HTML",
    "CSS",
    "Javascript",
    "React.js",
    "Tailwind",
    "Responsive Web Design",
  ],
  [
    "Backend Development",
    "Node.js",
    "Next.js",
    "Express",
    "SQL",
    "MongoDB",
    "REST API Development",
  ],
  [
    "Generative AI",
    "vector Embedding",
    "RAG",
    "Prompt Engineering",
    "ChatGPT",
    "Google Gemini",
  ],
  [
    "Developer Tools",
    "Git",
    "GitHub",
    "VS Code",
    "npm",
    "Postman",
    "N8N",
    "Docker",
    "Vercel",
    "Render",
  ],
  ["Soft Skills", "Communication", "Teamwork"],
];

/* ── Animation Variants ─────────────────────────── */
const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const revealLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const revealRight = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 0px rgba(239,68,68,0)",
      "0 0 30px rgba(239,68,68,0.3)",
      "0 0 0px rgba(239,68,68,0)",
    ],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

/* ── SectionHeading ─────────────────────────────── */
function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25, margin: "-80px" }}
      className="section-heading"
    >
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, letterSpacing: "0.05em" }}
        whileInView={{ opacity: 1, letterSpacing: "0.18em" }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {eyebrow}
      </motion.p>
      <h2>{title}</h2>
      <p>{text}</p>
    </motion.div>
  );
}

/* ── RedParticles Background ────────────────────── */
const PARTICLES = [
  { w: 2.1, h: 2.1, op: 0.55, left: 12.3, top: 22.7, dur: 5.1, delay: 0.3 },
  { w: 3.2, h: 3.2, op: 0.75, left: 28.6, top: 68.4, dur: 6.3, delay: 1.1 },
  { w: 1.5, h: 1.5, op: 0.45, left: 44.1, top: 11.5, dur: 4.8, delay: 0.7 },
  { w: 2.8, h: 2.8, op: 0.65, left: 61.9, top: 85.2, dur: 7.0, delay: 2.0 },
  { w: 1.8, h: 1.8, op: 0.50, left: 76.4, top: 35.8, dur: 5.5, delay: 0.5 },
  { w: 2.5, h: 2.5, op: 0.70, left: 89.2, top: 57.3, dur: 6.0, delay: 1.5 },
  { w: 3.0, h: 3.0, op: 0.60, left: 5.8,  top: 79.6, dur: 4.5, delay: 0.9 },
  { w: 1.6, h: 1.6, op: 0.40, left: 35.7, top: 43.1, dur: 6.8, delay: 2.2 },
  { w: 2.3, h: 2.3, op: 0.72, left: 53.4, top: 92.0, dur: 5.2, delay: 1.8 },
  { w: 1.9, h: 1.9, op: 0.58, left: 68.0, top: 18.9, dur: 4.9, delay: 0.2 },
  { w: 2.6, h: 2.6, op: 0.68, left: 82.5, top: 72.3, dur: 7.2, delay: 2.5 },
  { w: 3.4, h: 3.4, op: 0.78, left: 95.1, top: 30.1, dur: 5.8, delay: 1.3 },
];

function RedParticles() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
      aria-hidden
    >
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: p.w,
            height: p.h,
            borderRadius: "50%",
            background: `rgba(239,68,68,${p.op})`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            boxShadow: "0 0 6px rgba(239,68,68,0.6)",
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [activeSection, setActiveSection] = useState("home");

  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 80], [0.85, 0.97]);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  const filters = [
    "All",
    "Full Stack Development",
    "Gen AI Full Stack Development",
    "Tools",
  ];
  const filtered =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        root: null,
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: "-20% 0px -45% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <main>
      <RedParticles />

      {/* ── Navigation ── */}
      <motion.nav
        className="site-nav"
        aria-label="Primary navigation"
        style={{ opacity: navOpacity }}
        initial={{ y: -80, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.a
          href="#home"
          className="brand"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          PS<span>.</span>
        </motion.a>
        <div className="desktop-nav">
          {navItems.map((item, i) => {
            const isActive = activeSection === item.id;
            return (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={isActive ? "active" : ""}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                whileHover={{ scale: 1.04 }}
                style={{ position: "relative" }}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBackground"
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "999px",
                      background: "linear-gradient(135deg, #dc2626, #991b1b)",
                      boxShadow:
                        "0 8px 24px rgba(239, 68, 68, 0.4), 0 0 0 1px rgba(239, 68, 68, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                      zIndex: 1,
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span style={{ position: "relative", zIndex: 2 }}>{item.label}</span>
              </motion.a>
            );
          })}
        </div>
        <div className="nav-actions">
          <motion.a
            href="#contact"
            className="nav-cta"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            Let&apos;s talk <ArrowUpRight size={15} />
          </motion.a>
          <motion.button
            className="icon-button menu-button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mobile-menu"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                whileHover={{ x: 4 }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Hero ── */}
      <section id="home" className="hero section-shell">
        <div className="hero-copy">
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="availability"
          >
            <span /> Available for opportunities
          </motion.div>
          <motion.p
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.08 }}
            className="kicker"
          >
            Hello, I&apos;m Pranjal
          </motion.p>
          <motion.h1
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.14 }}
          >
            Building digital
            <br />
            <em>experiences</em> with intent.
          </motion.h1>
          <motion.p
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.22 }}
            className="hero-text"
          >
            Full Stack Developer and Gen AI enthusiast crafting thoughtful
            products at the intersection of technology, design, and people.
          </motion.p>
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="hero-buttons"
          >
            <motion.a
              className="button button-solid"
              href="#projects"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              View selected work <ArrowDown size={17} />
            </motion.a>
            <motion.a
              className="button button-ghost"
              href="https://drive.google.com/file/d/1d0rTbZ4CAFD5yWHFjpnjT4YEkVEH7MB-/view?usp=drivesdk"
              download
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Download CV <Download size={17} />
            </motion.a>
          </motion.div>
        </div>

        {/* Hero Art */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="hero-art"
        >
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <motion.div
            className="art-core"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={42} strokeWidth={1.2} />
            </motion.div>
            <span>01</span>
          </motion.div>
          <div className="art-label top-label">
            Curiosity
            <br />
            <strong>→ always on</strong>
          </div>
          <div className="art-label bottom-label">
            Designing for
            <br />
            <strong>what&apos;s next</strong>
          </div>
        </motion.div>
      </section>

      {/* ── Stats ── */}
      <motion.section
        className="stats section-shell"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {[
          { value: "4+", label: "Projects shipped" },
          { value: "3", label: "Core disciplines" },
          { value: "1", label: "Curious mind" },
          { value: "∞", label: "Ideas in progress" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
            whileHover={{ backgroundColor: "rgba(239,68,68,0.04)" }}
          >
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </motion.div>
        ))}
      </motion.section>

      {/* ── Projects ── */}
      <motion.section
        id="projects"
        className="content-section section-shell"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionHeading
          eyebrow="Selected work"
          title="Ideas into interfaces."
          text="A few projects that reflect how I think, build, and learn."
        />
        <motion.div
          className="filter-row"
          role="group"
          aria-label="Filter projects"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {filters.map((item) => (
            <motion.button
              key={item}
              className={filter === item ? "filter active" : "filter"}
              onClick={() => setFilter(item)}
              variants={cardReveal}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {filter === item && (
                <motion.span
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Check size={14} />
                </motion.span>
              )}
              {item}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="project-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <Link key={project.slug} href={`/project/${project.slug}`}>
                <motion.article
                  layout
                  className={`project-card ${project.accent}`}
                  variants={cardReveal}
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    delay: index * 0.07,
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -8,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                >
                  <div className="project-visual">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                    <span>0{index + 1}</span>
                  </div>
                  <div className="project-info">
                    <p className="project-category">{project.category}</p>
                    <h3>
                      {project.title} <ExternalLink size={16} />
                    </h3>
                    <p>{project.description}</p>
                    <div className="tag-row">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={{ scale: 1.06 }}
                          transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.section>

      {/* ── Experience ── */}
      <motion.section
        id="experience"
        className="content-section section-shell muted-section"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionHeading
          eyebrow="Experience"
          title="Learning by doing."
          text="Building practical experience through collaboration, creative work, and experimentation."
        />
        <motion.div
          className="timeline"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {[
            {
              Icon: Briefcase,
              date: "2024 — Present",
              title: "Full Stack Developer",
              desc: "Creating modern web applications and intelligent product experiences with a focus on clarity, usability, and real-world value.",
            },
            {
              Icon: Sparkles,
              date: "2025 — Present",
              title: "Full Stack & Gen AI Developer",
              desc: "Exploring the intersection of generative AI and full stack development to create innovative solutions that leverage the power of AI in web applications.",
            },
            {
              Icon: Sparkles,
              date: "Present",
              title: "AI Automation Engineer",
              desc: "Designing and implementing AI-driven automation solutions to streamline workflows, enhance productivity, and optimize business processes.",
            },
          ].map(({ Icon, date, title, desc }, i) => (
            <motion.article
              key={title}
              variants={revealLeft}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="timeline-icon">
                <Icon />
              </div>
              <div>
                <p className="timeline-date">{date}</p>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      {/* ── Skills ── */}
      <motion.section
        id="skills"
        className="content-section section-shell"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionHeading
          eyebrow="Toolkit"
          title="Tools for the curious."
          text="Technologies and capabilities I use to turn a blank canvas into something useful."
        />
        <motion.div
          className="skills-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {skills.map(([title, ...items]) => (
            <motion.article
              className="skill-card"
              key={title}
              variants={cardReveal}
              whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <div className="skill-title">
                <motion.span
                  className="skill-dot"
                  animate={{
                    scale: [1, 1.3, 1],
                    boxShadow: [
                      "0 0 12px rgba(239,68,68,0.4)",
                      "0 0 22px rgba(239,68,68,0.8)",
                      "0 0 12px rgba(239,68,68,0.4)",
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <h3>{title}</h3>
              </div>
              <div className="tag-row">
                {items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.06, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      {/* ── Achievements ── */}
      <motion.section
        className="content-section section-shell"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionHeading
          eyebrow="Milestones and certificates"
          title="A few proud moments."
          text="Small wins, meaningful teams, and reminders to keep going."
        />
        <motion.div
          className="achievement-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {[
            [
              "Hackathon Winner",
              "Secured third place for developing an Educational App.",
              Trophy,
            ],
            [
              "Generative AI Certificate",
              "Completed coursework in generative AI and prompt engineering.",
              Sparkles,
            ],
            [
              "Full Stack Development Certificate",
              "Completed comprehensive coursework in full stack development.",
              GraduationCap,
            ],
          ].map(([title, text, Icon], i) => (
            <motion.article
              className="achievement"
              key={title as string}
              variants={cardReveal}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
              >
                {/* @ts-ignore */}
                <Icon />
              </motion.div>
              <h3>{title as string}</h3>
              <p>{text as string}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      {/* ── Contact ── */}
      <motion.section
        id="contact"
        className="contact-section section-shell"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionHeading
          eyebrow="Contact"
          title="Let's make something useful."
          text="Have a project, an idea, or just want to say hello? My inbox is open."
        />
        <motion.div
          className="contact-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {[
            {
              href: "mailto:spranjal0137@gmail.com",
              Icon: Mail,
              label: "Email",
              value: "spranjal0137@gmail.com",
            },
            {
              href: "https://github.com/pranjal01singh",
              Icon: Globe2,
              label: "GitHub",
              value: "github.com/pranjal01singh",
              target: "_blank",
            },
            {
              href: "https://www.linkedin.com/in/pranjal-singh-3b0636343",
              Icon: Mail,
              label: "LinkedIn",
              value: "linkedin.com/in/pranjal-singh-3b0636343",
              target: "_blank",
            },
          ].map(({ href, Icon, label, value, target }) => (
            <motion.a
              key={label}
              href={href}
              target={target}
              rel={target ? "noreferrer" : undefined}
              className="contact-card"
              variants={cardReveal}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon />
              <span>{label}</span>
              <strong>{value}</strong>
              <ArrowUpRight />
            </motion.a>
          ))}
        </motion.div>
      </motion.section>

      {/* ── Footer ── */}
      <motion.footer
        className="footer section-shell"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <motion.a
            className="brand"
            href="#home"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            PS<span>.</span>
          </motion.a>
          <p>Digital products, thoughtfully made.</p>
        </div>
        <div className="footer-links">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <motion.button
          className="back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          Back to top <ArrowUp size={15} />
        </motion.button>
        <div className="footer-bottom">
          <span>© 2026 Pranjal Singh. All rights reserved.</span>
        </div>
      </motion.footer>
    </main>
  );
}
