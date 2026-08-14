"use client";

import { AnimatePresence, motion } from "framer-motion";
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
import { useEffect, useState } from "react";

type Project = {
  title: string;
  description: string;
  category: string;
  tags: string[];
  accent: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "AI Employee Digital Twin",
    description:
      "AI-powered digital employee automating emails, workflows, tasks, and daily productivity.",
    category: "Tools ",
    tags: ["MERN", "Gen AI", "N8N"],
    accent: "from-violet-400/30 to-transparent",
    image: "/AI-twin.jpg",
  },
  {
    title: "Intervue",
    description:
      "AI-powered mock interview platform generating personalized questions, feedback, and performance insights",
    category: "Gen AI Full Stack Development",
    tags: ["MERN", "Gen AI"],
    accent: "from-cyan-300/25 to-transparent",
    image: "/ai-interview-bot.webp",
  },
  {
    title: "AI Virtual Assistant",
    description:
      "AI-powered virtual assistant enabling real-time voice interaction, personalization, and intelligent responses.",
    category: "Full Stack Development",
    tags: ["MERN"],
    accent: "from-amber-200/25 to-transparent",
    image: "/virtual.png",
  },
];

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

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

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
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </motion.div>
  );
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [activeSection, setActiveSection] = useState("home");

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
      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#home" className="brand">
          PS<span>.</span>
        </a>
        <div className="desktop-nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "active" : ""}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <a href="#contact" className="nav-cta">
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
          <button
            className="icon-button menu-button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mobile-menu"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

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
            <a className="button button-solid" href="#projects">
              View selected work <ArrowDown size={17} />
            </a>
            <a
              className="button button-ghost"
              href="https://drive.google.com/file/d/1d0rTbZ4CAFD5yWHFjpnjT4YEkVEH7MB-/view?usp=drivesdk"
              download
            >
              Download CV <Download size={17} />
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hero-art"
        >
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-core">
            <Sparkles size={42} strokeWidth={1.2} />
            <span>01</span>
          </div>
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

      <motion.section
        className="stats section-shell"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div>
          <strong>4+</strong>
          <span>Projects shipped</span>
        </div>
        <div>
          <strong>3</strong>
          <span>Core disciplines</span>
        </div>
        <div>
          <strong>1</strong>
          <span>Curious mind</span>
        </div>
        <div>
          <strong>∞</strong>
          <span>Ideas in progress</span>
        </div>
      </motion.section>

      <motion.section
        id="projects"
        className="content-section section-shell"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.18 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <SectionHeading
          eyebrow="Selected work"
          title="Ideas into interfaces."
          text="A few projects that reflect how I think, build, and learn."
        />
        <div className="filter-row" role="group" aria-label="Filter projects">
          {filters.map((item) => (
            <button
              key={item}
              className={filter === item ? "filter active" : "filter"}
              onClick={() => setFilter(item)}
            >
              {filter === item && <Check size={14} />}
              {item}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {filtered.map((project, index) => (
            <motion.article
              layout
              key={project.title}
              className={`project-card ${project.accent}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: index * 0.06, duration: 0.6, ease: "easeOut" }}
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
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="experience"
        className="content-section section-shell muted-section"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.18 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <SectionHeading
          eyebrow="Experience"
          title="Learning by doing."
          text="Building practical experience through collaboration, creative work, and experimentation."
        />
        <div className="timeline">
          <article>
            <div className="timeline-icon">
              <Briefcase />
            </div>
            <div>
              <p className="timeline-date">2024 — Present</p>
              <h3>Full Stack Developer</h3>
              <p>
                Creating modern web applications and intelligent product
                experiences with a focus on clarity, usability, and real-world
                value.
              </p>
            </div>
          </article>
          <article>
            <div className="timeline-icon">
              <Sparkles />
            </div>
            <div>
              <p className="timeline-date">2025 — Present</p>
              <h3>Full Stack & Gen AI Developer</h3>
              <p>
                Exploring the intersection of generative AI and full stack
                development to create innovative solutions that leverage the
                power of AI in web applications.
              </p>
            </div>
          </article>
          <article>
            <div className="timeline-icon">
              <Sparkles />
            </div>
            <div>
              <p className="timeline-date">Present</p>
              <h3>AI Automation Engineer</h3>
              <p>
                Designing and implementing AI-driven automation solutions to
                streamline workflows, enhance productivity, and optimize
                business processes.
              </p>
            </div>
          </article>
        </div>
      </motion.section>

      <motion.section
        id="skills"
        className="content-section section-shell"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.18 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <SectionHeading
          eyebrow="Toolkit"
          title="Tools for the curious."
          text="Technologies and capabilities I use to turn a blank canvas into something useful."
        />
        <div className="skills-grid">
          {skills.map(([title, ...items]) => (
            <article className="skill-card" key={title}>
              <div className="skill-title">
                <span className="skill-dot" />
                <h3>{title}</h3>
              </div>
              <div className="tag-row">
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="content-section section-shell"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <SectionHeading
          eyebrow="Milestones and certificates"
          title="A few proud moments."
          text="Small wins, meaningful teams, and reminders to keep going."
        />
        <div className="achievement-grid">
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
          ].map(([title, text, Icon]) => (
            <article className="achievement" key={title as string}>
              <Icon />
              <h3>{title as string}</h3>
              <p>{text as string}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="contact-section section-shell"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <SectionHeading
          eyebrow="Contact"
          title="Let's make something useful."
          text="Have a project, an idea, or just want to say hello? My inbox is open."
        />
        <div className="contact-grid">
          <a href="mailto:spranjal0137@gmail.com" className="contact-card">
            <Mail />
            <span>Email</span>
            <strong>spranjal0137@gmail.com</strong>
            <ArrowUpRight />
          </a>
          <a
            href="https://github.com/pranjal01singh"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <Globe2 />
            <span>GitHub</span>
            <strong>Explore my code</strong>
            <ArrowUpRight />
          </a>
          <a
            href="https://www.linkedin.com/in/pranjal-singh-3b0636343 "
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <Mail />
            <span>LinkedIn</span>
            <strong>Let&apos;s connect</strong>
            <ArrowUpRight />
          </a>
        </div>
      </motion.section>

      <footer className="footer section-shell">
        <div>
          <a className="brand" href="#home">
            PS<span>.</span>
          </a>
          <p>Digital products, thoughtfully made.</p>
        </div>
        <div className="footer-links">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <button
          className="back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to top <ArrowUp size={15} />
        </button>
        <div className="footer-bottom">
          <span>© 2026 Pranjal Singh. All rights reserved.</span>
        </div>
      </footer>
    </main>
  );
}
