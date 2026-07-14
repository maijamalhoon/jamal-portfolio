"use client";

import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  BadgeCheck,
  Banknote,
  BookOpen,
  BriefcaseBusiness,
  Calculator,
  Check,
  ChevronDown,
  CircleDollarSign,
  Code2,
  Download,
  Landmark,
  Layers3,
  Mail,
  Menu,
  MoonStar,
  Network,
  Phone,
  ReceiptText,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Lenis from "lenis";
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { experience, navigation, projects, skillGroups, themes, type ThemeId } from "@/lib/data";

const iconMap = {
  finance: CircleDollarSign,
  payroll: Calculator,
  operations: Landmark,
};

function GitHubIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.66c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.95.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  );
}

function useThemePalette() {
  const subscribe = (callback: () => void) => {
    window.addEventListener("storage", callback);
    window.addEventListener("jamal-theme-change", callback);
    return () => {
      window.removeEventListener("storage", callback);
      window.removeEventListener("jamal-theme-change", callback);
    };
  };

  const getSnapshot = (): ThemeId => {
    const saved = window.localStorage.getItem("jamal-theme") as ThemeId | null;
    return themes.some((item) => item.id === saved) ? saved! : "noir";
  };

  const theme = useSyncExternalStore<ThemeId>(subscribe, getSnapshot, () => "noir");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const changeTheme = (nextTheme: ThemeId) => {
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("jamal-theme", nextTheme);
    window.dispatchEvent(new Event("jamal-theme-change"));
  };

  return { theme, changeTheme };
}

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}

function CursorAura() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 550, damping: 42, mass: 0.35 });
  const smoothY = useSpring(y, { stiffness: 550, damping: 42, mass: 0.35 });

  useEffect(() => {
    const move = (event: PointerEvent) => {
      x.set(event.clientX - 160);
      y.set(event.clientY - 160);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return <motion.div aria-hidden className="cursor-aura" style={{ x: smoothX, y: smoothY }} />;
}

function MagneticLink({
  href,
  children,
  className = "",
  external = false,
  download = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  download?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 18 });
  const springY = useSpring(y, { stiffness: 260, damping: 18 });

  const onMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((event.clientX - rect.left - rect.width / 2) * 0.2);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      style={{ x: springX, y: springY }}
      onPointerMove={onMove}
      onPointerLeave={reset}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      download={download || undefined}
    >
      {children}
    </motion.a>
  );
}

function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const onMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  };

  return (
    <div className={`spotlight-card ${className}`} onPointerMove={onMove}>
      {children}
    </div>
  );
}

function ThemeSwitcher({ theme, onChange }: { theme: ThemeId; onChange: (theme: ThemeId) => void }) {
  const [open, setOpen] = useState(false);
  const active = themes.find((item) => item.id === theme) ?? themes[0];

  return (
    <div className="theme-switcher">
      <button
        type="button"
        className="theme-trigger"
        aria-label="Choose color theme"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {theme === "ivory" ? <Sun size={16} /> : <MoonStar size={16} />}
        <span>{active.label}</span>
        <ChevronDown size={14} className={open ? "rotate-180" : ""} />
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="theme-menu"
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
          >
            {themes.map((item) => (
              <button
                type="button"
                key={item.id}
                className="theme-option"
                onClick={() => {
                  onChange(item.id);
                  setOpen(false);
                }}
              >
                <span className="theme-swatch" style={{ background: item.swatch }} />
                <span>{item.label}</span>
                {theme === item.id ? <Check size={15} /> : null}
              </button>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function Header({ theme, onThemeChange }: { theme: ThemeId; onThemeChange: (theme: ThemeId) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a href="#home" className="brand" aria-label="Jamal Yaqoob — home">
        <span className="brand-mark">JY</span>
        <span className="brand-copy">
          <strong>Jamal Yaqoob</strong>
          <small>Finance × Systems</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <ThemeSwitcher theme={theme} onChange={onThemeChange} />
        <MagneticLink href="mailto:jamalarain186@gmail.com" className="header-cta">
          Let’s connect <ArrowUpRight size={16} />
        </MagneticLink>
        <button
          className="mobile-menu-button"
          type="button"
          aria-label="Open navigation"
          onClick={() => setOpen(true)}
        >
          <Menu size={21} />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className="mobile-menu-close" onClick={() => setOpen(false)} aria-label="Close navigation">
              <X size={24} />
            </button>
            <div className="mobile-menu-links">
              {navigation.map((item, index) => (
                <motion.a
                  href={item.href}
                  key={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <span>0{index + 1}</span>
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function SectionHeading({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <div className="section-heading">
      <div className="section-kicker">
        <span>{index}</span>
        <span>{label}</span>
      </div>
      <h2>{title}</h2>
    </div>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 120]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 72]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-grid" aria-hidden />
      <motion.div className="hero-copy" style={{ y: copyY, opacity: copyOpacity }}>
        <motion.div
          className="availability-pill"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="availability-dot" />
          Karachi, Pakistan · Accounting & finance
        </motion.div>

        <h1>
          <motion.span
            className="hero-line"
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          >
            Numbers with
          </motion.span>
          <motion.span
            className="hero-line hero-line-accent"
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.2, 0.8, 0.2, 1] }}
          >
            operational intelligence.
          </motion.span>
        </h1>

        <motion.p
          className="hero-intro"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          I’m Jamal Yaqoob — an accounts professional and computer science student building precise finance
          operations, reliable systems and thoughtful digital products.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.58 }}
        >
          <MagneticLink href="#work" className="button button-primary">
            Explore selected work <ArrowDownRight size={18} />
          </MagneticLink>
          <MagneticLink href="/resume/" className="button button-secondary">
            Download résumé <Download size={17} />
          </MagneticLink>
        </motion.div>

        <div className="hero-meta">
          <div>
            <span>Current role</span>
            <strong>Assistant Accountant</strong>
          </div>
          <div>
            <span>Focus</span>
            <strong>Finance operations + systems</strong>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="portrait-stage"
        style={{ y: portraitY }}
        initial={{ opacity: 0, scale: 0.94, rotate: 1.5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.05, delay: 0.18, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="portrait-orbit orbit-one" />
        <div className="portrait-orbit orbit-two" />
        <div className="portrait-frame">
          <Image
            src="https://avatars.githubusercontent.com/u/150429791?v=4"
            alt="Portrait of Jamal Yaqoob"
            fill
            priority
            sizes="(max-width: 900px) 84vw, 38vw"
          />
          <div className="portrait-glass">
            <Sparkles size={18} />
            <span>Accuracy in every layer</span>
          </div>
        </div>
        <div className="floating-chip chip-one">
          <ReceiptText size={17} />
          Reconciliation
        </div>
        <div className="floating-chip chip-two">
          <Code2 size={17} />
          Systems thinking
        </div>
      </motion.div>

      <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
        <span>Scroll to discover</span>
        <ArrowDownRight size={18} />
      </a>
    </section>
  );
}

function SignalMarquee() {
  const items = [
    "Bank reconciliation",
    "ERP systems",
    "Financial reporting",
    "Payroll",
    "DMS operations",
    "Next.js",
    "Process accuracy",
  ];

  return (
    <div className="marquee" aria-label="Capabilities">
      <div className="marquee-track">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}>
            {item} <Sparkles size={14} />
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <SectionHeading index="01" label="About" title="Built at the intersection of finance discipline and technical curiosity." />
      <div className="about-layout">
        <div className="about-copy">
          <p className="lead-copy">
            My work is grounded in the reality of daily finance: every payment must be traceable, every ledger
            must make sense, every report must be useful and every customer interaction must stay clear.
          </p>
          <p>
            Alongside my accounting career, I’m pursuing a Bachelor’s in Computer Science at Allama Iqbal Open
            University. That combination shapes how I work — I don’t just complete a process; I look for the
            structure, system and interface that can make it better.
          </p>
          <div className="about-links">
            <a href="mailto:jamalarain186@gmail.com"><Mail size={17} /> Email me</a>
            <a href="tel:+923282685435"><Phone size={17} /> Call</a>
            <a href="https://github.com/maijamalhoon" target="_blank" rel="noreferrer"><GitHubIcon size={17} /> GitHub</a>
          </div>
        </div>
        <div className="stats-grid">
          {[
            ["2+", "Years in dealership finance"],
            ["03", "Progressive finance roles"],
            ["20+", "Operational capabilities"],
            ["02", "Disciplines: finance + CS"],
          ].map(([value, label]) => (
            <SpotlightCard key={label} className="stat-card">
              <strong>{value}</strong>
              <span>{label}</span>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <SectionHeading index="02" label="Experience" title="Progressive responsibility, grounded in reliable execution." />
      <div className="experience-list">
        {experience.map((item, index) => (
          <motion.article
            className="experience-item"
            key={`${item.company}-${item.role}`}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.65, delay: index * 0.07 }}
          >
            <div className="experience-index">0{index + 1}</div>
            <div className="experience-role">
              <span>{item.period}</span>
              <h3>{item.role}</h3>
              <p>{item.company}</p>
            </div>
            <div className="experience-detail">
              <p>{item.summary}</p>
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}><BadgeCheck size={16} /> {highlight}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const icons = [Banknote, Network, BriefcaseBusiness];

  return (
    <section className="section skills-section">
      <SectionHeading index="03" label="Capabilities" title="A toolkit designed for accuracy, momentum and calm control." />
      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const Icon = icons[index];
          return (
            <SpotlightCard className="skill-card" key={group.title}>
              <div className="skill-card-head">
                <span><Icon size={20} /></span>
                <h3>{group.title}</h3>
              </div>
              <div className="skill-cloud">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.035 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}

function ProjectVisual({ type }: { type: keyof typeof iconMap }) {
  const Icon = iconMap[type];

  if (type === "finance") {
    return (
      <div className="project-visual finance-visual">
        <div className="mini-window">
          <div className="mini-window-top"><i /><i /><i /></div>
          <div className="mini-dashboard">
            <div className="mini-sidebar" />
            <div className="mini-content">
              <div className="mini-heading" />
              <div className="mini-metrics"><i /><i /><i /></div>
              <div className="mini-chart"><span /><span /><span /><span /><span /><span /></div>
            </div>
          </div>
        </div>
        <div className="visual-icon"><Icon size={26} /></div>
      </div>
    );
  }

  if (type === "payroll") {
    return (
      <div className="project-visual payroll-visual">
        <div className="payroll-sheet">
          <div className="sheet-head"><span>PAYROLL</span><strong>06/26</strong></div>
          {[74, 88, 62, 82].map((width, index) => (
            <div className="sheet-row" key={width}>
              <i />
              <span style={{ width: `${width}%` }} />
              <b>{index % 2 ? "✓" : "+"}</b>
            </div>
          ))}
        </div>
        <div className="visual-icon"><Icon size={26} /></div>
      </div>
    );
  }

  return (
    <div className="project-visual operations-visual">
      <div className="ledger-rings">
        <span className="ring ring-a" />
        <span className="ring ring-b" />
        <span className="ring ring-c" />
        <div className="ledger-core"><Icon size={34} /></div>
      </div>
      <div className="ops-ticker">CASH FLOW · BANKS · JOURNALS · REPORTS</div>
    </div>
  );
}

function Work() {
  return (
    <section className="section work-section" id="work">
      <SectionHeading index="04" label="Selected work" title="Products and systems that turn complexity into useful control." />
      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 46 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.75, delay: index * 0.08 }}
          >
            <ProjectVisual type={project.visual as keyof typeof iconMap} />
            <div className="project-content">
              <div className="project-topline">
                <span>{project.eyebrow}</span>
                <span className="project-status">{project.status}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-stack">
                {project.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
              <div className="project-actions">
                {project.href ? (
                  <a href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    {project.href.startsWith("http") ? "Open project" : "View case study"}
                    <ArrowUpRight size={17} />
                  </a>
                ) : (
                  <span className="private-label"><Layers3 size={16} /> Private repository</span>
                )}
                {project.repo ? (
                  <a href={project.repo} target="_blank" rel="noreferrer" className="project-repo">
                    <GitHubIcon size={17} /> Source
                  </a>
                ) : null}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section education-section">
      <div className="education-panel">
        <div className="education-icon"><BookOpen size={25} /></div>
        <div>
          <span>Education · 2025 — Present</span>
          <h2>Bachelor’s in Computer Science</h2>
          <p>Allama Iqbal Open University</p>
        </div>
        <div className="education-note">Building the technical depth to create better financial tools and operational systems.</div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-glow" aria-hidden />
      <div className="contact-copy">
        <span className="contact-eyebrow"><Sparkles size={15} /> Let’s build something precise</span>
        <h2>Need finance discipline with systems thinking?</h2>
        <p>
          Let’s talk about accounting operations, reporting, finance systems or a digital product that deserves a cleaner experience.
        </p>
        <div className="contact-actions">
          <MagneticLink href="mailto:jamalarain186@gmail.com" className="button button-light">
            Start a conversation <Mail size={18} />
          </MagneticLink>
          <MagneticLink href="tel:+923282685435" className="button button-ghost-light">
            +92 328 2685435 <Phone size={17} />
          </MagneticLink>
        </div>
      </div>
      <div className="contact-orbit" aria-hidden>
        <div className="contact-core">JY</div>
        <span className="contact-ring ring-one" />
        <span className="contact-ring ring-two" />
        <span className="contact-node node-one"><Calculator size={17} /></span>
        <span className="contact-node node-two"><Code2 size={17} /></span>
        <span className="contact-node node-three"><ReceiptText size={17} /></span>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>Jamal Yaqoob</strong>
        <span>Accounting, finance and systems.</span>
      </div>
      <div className="footer-links">
        <a href="mailto:jamalarain186@gmail.com">Email</a>
        <a href="https://github.com/maijamalhoon" target="_blank" rel="noreferrer">GitHub</a>
        <a href="/resume/">Résumé</a>
      </div>
      <span>© {new Date().getFullYear()} · Karachi, Pakistan</span>
    </footer>
  );
}

export default function PortfolioPage() {
  const { theme, changeTheme } = useThemePalette();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Jamal Yaqoob",
      jobTitle: "Assistant Accountant",
      email: "mailto:jamalarain186@gmail.com",
      address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
      url: "https://github.com/maijamalhoon",
      sameAs: ["https://github.com/maijamalhoon"],
    }),
    [],
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SmoothScroll />
      <CursorAura />
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <div className="page-shell">
        <Header theme={theme} onThemeChange={changeTheme} />
        <main>
          <Hero />
          <SignalMarquee />
          <About />
          <Experience />
          <Skills />
          <Work />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
