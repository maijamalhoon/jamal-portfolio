/* eslint-disable @next/next/no-img-element */
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Briefcase,
  Calculator,
  Check,
  Clock,
  Code,
  Command,
  Copy,
  Download,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MousePointer,
  Palette,
  Phone,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { experience, projects, skillGroups, themes } from "@/lib/data";
import { basePath } from "@/lib/site";

const contact = {
  email: "jamalarain186@gmail.com",
  phoneDisplay: "+92 328 2685435",
  phoneValue: "+923282685435",
  github: "https://github.com/maijamalhoon",
  linkedin: "https://pk.linkedin.com/in/jamalarain-it",
};

const nav = [
  ["01", "Home", "#home"],
  ["02", "About", "#about"],
  ["03", "Experience", "#experience"],
  ["04", "Work", "#work"],
  ["05", "Lab", "#lab"],
  ["06", "Contact", "#contact"],
] as const;

const projectCategories = [
  "product live finance",
  "systems private payroll",
  "operations professional finance",
] as const;

function SectionHead({
  index,
  eyebrow,
  title,
  copy,
}: {
  index: string;
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="section-head reveal">
      <div className="section-index">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="scroll-progress" aria-hidden="true">
        <i data-scroll-progress />
      </div>
      <div className="pointer-glow" data-pointer-glow aria-hidden="true" />

      <header className="site-header" data-header>
        <a className="brand" href="#home" aria-label="Jamal Yaqoob, back to home">
          <span className="brand-mark">JY</span>
          <span className="brand-copy">
            <strong>Jamal Yaqoob</strong>
            <small>Finance × Systems</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map(([, label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="command-button"
            type="button"
            data-command-open
            aria-label="Open command menu"
            aria-haspopup="dialog"
            aria-controls="command-menu"
          >
            <Command size={16} aria-hidden="true" />
            <span>Explore</span>
            <kbd>⌘ K</kbd>
          </button>
          <button
            className="theme-button"
            type="button"
            data-theme-button
            aria-label="Choose color theme: Noir"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-controls="theme-menu"
          >
            <Palette size={17} aria-hidden="true" />
            <span data-theme-label>Noir</span>
          </button>
          <button className="connect-button" type="button" data-contact-open>
            Let&apos;s connect <ArrowRight size={17} aria-hidden="true" />
          </button>
          <button
            className="menu-button"
            type="button"
            data-menu-open
            aria-label="Open navigation"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
        <div
          className="theme-popover"
          id="theme-menu"
          data-theme-menu
          role="menu"
          aria-label="Color themes"
          hidden
        >
          <div className="theme-popover-head">
            <span>Interface palette</span>
            <small>Saved on this device</small>
          </div>
          {themes.map((theme) => (
            <button
              key={theme.id}
              type="button"
              role="menuitemradio"
              aria-checked={theme.id === "noir"}
              data-theme={theme.id}
            >
              <i style={{ background: theme.swatch }} />
              <span>{theme.label}</span>
              <b>
                <Check size={15} aria-hidden="true" />
              </b>
            </button>
          ))}
        </div>
      </header>

      <div
        className="mobile-menu"
        id="mobile-menu"
        data-mobile-menu
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        hidden
      >
        <div className="menu-grid" aria-hidden="true" />
        <div
          className="menu-portrait"
          style={{ backgroundImage: `url(${basePath}/jamal-yaqoob.webp)` }}
          aria-hidden="true"
        />
        <button className="menu-close" type="button" data-menu-close aria-label="Close navigation">
          <X size={25} aria-hidden="true" />
        </button>
        <div className="mobile-menu-inner">
          <p>Navigation</p>
          <nav aria-label="Mobile navigation">
            {nav.map(([number, label, href]) => (
              <a key={href} href={href} data-menu-link>
                <span>{number}</span>
                <strong>{label}</strong>
                <ArrowRight size={20} aria-hidden="true" />
              </a>
            ))}
          </nav>
          <div className="menu-contact">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`tel:${contact.phoneValue}`}>{contact.phoneDisplay}</a>
          </div>
        </div>
      </div>

      <main id="main">
        <section className="hero" id="home">
          <div className="hero-grid-bg" aria-hidden="true" />
          <div className="hero-aurora" aria-hidden="true" />
          <div className="hero-copy">
            <div className="availability">
              <i />
              <span>Open to meaningful opportunities</span>
              <b aria-hidden="true">·</b>
              <span data-karachi-time>Karachi · PKT</span>
            </div>
            <div className="hero-kicker">
              <Sparkles size={15} aria-hidden="true" />
              Accounting precision meets product thinking
            </div>
            <h1>
              <span>Finance accuracy.</span>
              <strong>Systems intelligence.</strong>
            </h1>
            <p>
              I&apos;m Jamal Yaqoob — an accounts professional and computer science student designing
              dependable finance operations, clearer workflows and thoughtful digital products.
            </p>
            <div className="hero-actions">
              <a className="button primary magnetic" href="#work">
                Explore selected work <ArrowDown size={18} aria-hidden="true" />
              </a>
              <a className="button secondary magnetic" href={`${basePath}/Jamal_Yaqoob_Resume.pdf`} download>
                Download résumé <Download size={18} aria-hidden="true" />
              </a>
              <button className="text-button" type="button" data-command-open>
                <Command size={16} aria-hidden="true" /> Quick explore
              </button>
            </div>
            <div className="hero-meta">
              <div>
                <span>Current role</span>
                <strong>Assistant Accountant</strong>
              </div>
              <div>
                <span>Working mode</span>
                <strong data-role-rotator>Finance operations</strong>
              </div>
              <div>
                <span>Location</span>
                <strong>Karachi, Pakistan</strong>
              </div>
            </div>
          </div>

          <div className="portrait-stage" aria-label="Portrait of Jamal Yaqoob">
            <div className="portrait-orbit orbit-a" />
            <div className="portrait-orbit orbit-b" />
            <div className="portrait-frame" data-portrait-tilt>
              <img
                src={`${basePath}/jamal-yaqoob.webp`}
                width="410"
                height="615"
                alt="Jamal Yaqoob"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="portrait-label">
                <span>JY</span>
                <p>
                  <strong>Precision-first</strong>
                  <small>Finance × Systems</small>
                </p>
              </div>
            </div>
            <span className="float-chip chip-a">
              <Calculator size={17} aria-hidden="true" /> Reconciliation
            </span>
            <span className="float-chip chip-b">
              <Code size={17} aria-hidden="true" /> Systems thinking
            </span>
            <div className="signal-card" data-spotlight-card>
              <div>
                <span className="signal-dot" />
                <small>Operational signal</small>
              </div>
              <strong>Accuracy before speed. Then automate both.</strong>
              <div className="signal-footer">
                <ShieldCheck size={15} aria-hidden="true" /> Control-minded execution
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#about">
            <span>Scroll to discover</span>
            <ArrowDown size={18} aria-hidden="true" />
          </a>
        </section>

        <div className="capability-strip" aria-label="Capabilities">
          <div>
            {[
              "Bank reconciliation",
              "ERP systems",
              "Financial reporting",
              "Payroll",
              "DMS operations",
              "Next.js",
              "Process accuracy",
              "Bank reconciliation",
              "ERP systems",
              "Financial reporting",
              "Payroll",
              "DMS operations",
              "Next.js",
              "Process accuracy",
            ].map((item, index) => (
              <span key={`${item}-${index}`}>
                {item}<i>✦</i>
              </span>
            ))}
          </div>
        </div>

        <section className="section about" id="about">
          <SectionHead
            index="01"
            eyebrow="About"
            title="Finance discipline. Technical curiosity. Practical results."
          />
          <div className="about-grid">
            <div className="about-copy reveal">
              <p className="lead">
                Every payment should be traceable, every ledger should make sense, and every report
                should help someone act with confidence.
              </p>
              <p>
                Alongside my accounting career, I&apos;m pursuing Computer Science at Allama Iqbal Open
                University. That combination shapes how I improve workflows: not only by completing
                the process, but by understanding the system behind it.
              </p>
              <div className="inline-links">
                <a href={`mailto:${contact.email}`}>
                  <Mail size={17} aria-hidden="true" /> Email
                </a>
                <a href={`tel:${contact.phoneValue}`}>
                  <Phone size={17} aria-hidden="true" /> Call
                </a>
                <a href={contact.github} target="_blank" rel="noreferrer">
                  <Github size={17} aria-hidden="true" /> GitHub
                </a>
                <a href={contact.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={17} aria-hidden="true" /> LinkedIn
                </a>
              </div>
            </div>
            <div className="stats-grid reveal">
              {[
                [2, "+", "Years in dealership finance"],
                [3, "", "Progressive finance roles"],
                [20, "+", "Operational capabilities"],
                [2, "", "Disciplines: finance + CS"],
              ].map(([value, suffix, label]) => (
                <article key={String(label)} data-spotlight-card>
                  <strong data-counter={value} data-suffix={suffix}>0{suffix}</strong>
                  <span>{label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section experience" id="experience">
          <SectionHead
            index="02"
            eyebrow="Experience"
            title="Progressive responsibility, grounded in reliable execution."
          />
          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item reveal" key={`${item.company}-${item.role}`} data-spotlight-card>
                <div className="timeline-number">0{index + 1}</div>
                <div className="timeline-role">
                  <span>{item.period}</span>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>
                <div className="timeline-detail">
                  <p>{item.summary}</p>
                  <ul>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>
                        <Check size={16} aria-hidden="true" /> {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills">
          <SectionHead
            index="03"
            eyebrow="Capabilities"
            title="A toolkit designed for accuracy, momentum and calm control."
          />
          <div className="skills-grid">
            {skillGroups.map((group, index) => {
              const SkillIcon = [Calculator, Code, Briefcase][index] ?? Sparkles;
              return (
                <article className="skill-card reveal" key={group.title} data-spotlight-card>
                  <span className="skill-icon">
                    <SkillIcon size={21} aria-hidden="true" />
                  </span>
                  <h3>{group.title}</h3>
                  <div>
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section work" id="work">
          <SectionHead
            index="04"
            eyebrow="Selected work"
            title="Products and systems that turn complexity into useful control."
            copy="Filter the work by context, then open the live product or inspect the source."
          />
          <div className="project-toolbar reveal" aria-label="Filter projects">
            <div className="project-filters">
              {[
                ["all", "All work"],
                ["product", "Products"],
                ["systems", "Systems"],
                ["operations", "Operations"],
              ].map(([filter, label], index) => (
                <button
                  key={filter}
                  type="button"
                  data-project-filter={filter}
                  aria-pressed={index === 0}
                >
                  {label}
                </button>
              ))}
            </div>
            <span><b data-project-count>{projects.length}</b> selected projects</span>
          </div>
          <div className="projects">
            {projects.map((project, index) => {
              const ProjectIcon = [BarChart3, Calculator, Briefcase][index] ?? Zap;
              return (
                <article
                  className="project-card reveal"
                  key={project.title}
                  data-project-card
                  data-category={projectCategories[index] ?? "work"}
                  data-spotlight-card
                >
                  <div className={`project-visual visual-${index}`}>
                    <div className="visual-grid" />
                    <span className="visual-icon">
                      <ProjectIcon size={30} aria-hidden="true" />
                    </span>
                    <div className="visual-lines"><i /><i /><i /><i /></div>
                    <span className="project-index">0{index + 1}</span>
                  </div>
                  <div className="project-body">
                    <div className="project-label">
                      <span>{project.eyebrow}</span>
                      <b>{project.status}</b>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tags">
                      {project.stack.map((item) => <span key={item}>{item}</span>)}
                    </div>
                    <div className="project-actions">
                      {project.href ? (
                        <a
                          href={project.href}
                          target={project.href.startsWith("http") ? "_blank" : undefined}
                          rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                        >
                          {project.href.startsWith("http") ? "Open project" : "View case study"}
                          <ExternalLink size={17} aria-hidden="true" />
                        </a>
                      ) : <span>Private repository</span>}
                      {project.repo ? (
                        <a href={project.repo} target="_blank" rel="noreferrer">
                          Source <Github size={16} aria-hidden="true" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section interaction-lab" id="lab">
          <SectionHead
            index="05"
            eyebrow="Interactive lab"
            title="Try the finance logic, not just the visual design."
            copy="A lightweight bank-reconciliation demo that recalculates instantly in your browser. No data is saved or transmitted."
          />
          <div className="lab-shell reveal" data-reconcile-lab data-spotlight-card>
            <div className="lab-copy">
              <span className="lab-badge"><Zap size={15} aria-hidden="true" /> Live calculation</span>
              <h3>Bank reconciliation simulator</h3>
              <p>
                Adjust the statement balance, ledger balance, deposits in transit and uncleared
                payments. The control panel will show whether the adjusted bank balance reconciles.
              </p>
              <div className="lab-form">
                <label>
                  <span>Bank statement balance</span>
                  <div><small>PKR</small><input type="number" inputMode="decimal" min="0" step="1000" defaultValue="1250000" data-reconcile-input="statement" /></div>
                </label>
                <label>
                  <span>Ledger balance</span>
                  <div><small>PKR</small><input type="number" inputMode="decimal" min="0" step="1000" defaultValue="1290000" data-reconcile-input="ledger" /></div>
                </label>
                <label>
                  <span>Deposits in transit</span>
                  <div><small>PKR</small><input type="number" inputMode="decimal" min="0" step="1000" defaultValue="65000" data-reconcile-input="deposits" /></div>
                </label>
                <label>
                  <span>Uncleared payments</span>
                  <div><small>PKR</small><input type="number" inputMode="decimal" min="0" step="1000" defaultValue="25000" data-reconcile-input="payments" /></div>
                </label>
              </div>
            </div>
            <div className="lab-panel" aria-live="polite">
              <div className="lab-panel-head">
                <span>Control result</span>
                <button type="button" data-reconcile-reset><RefreshCw size={15} aria-hidden="true" /> Reset</button>
              </div>
              <div className="lab-status is-balanced" data-reconcile-status>
                <Check size={22} aria-hidden="true" />
                <div><strong>Balanced</strong><span>Adjusted bank equals the ledger</span></div>
              </div>
              <dl>
                <div><dt>Adjusted bank</dt><dd data-reconcile-adjusted>PKR 1,290,000</dd></div>
                <div><dt>Ledger balance</dt><dd data-reconcile-ledger>PKR 1,290,000</dd></div>
                <div><dt>Difference</dt><dd data-reconcile-difference>PKR 0</dd></div>
              </dl>
              <div className="lab-formula">
                <span>Statement</span><b>+</b><span>Deposits</span><b>−</b><span>Payments</span><b>=</b><strong>Adjusted bank</strong>
              </div>
              <p><ShieldCheck size={15} aria-hidden="true" /> Client-side only · No financial data leaves this page.</p>
            </div>
          </div>
        </section>

        <section className="section profiles" id="profiles" data-github-section>
          <SectionHead
            index="06"
            eyebrow="Professional presence"
            title="Verified profiles and live proof of work."
            copy="The GitHub feed loads only when this section approaches the viewport, keeping the first screen fast."
          />
          <div className="profile-grid">
            <article className="profile-card linkedin reveal" data-spotlight-card>
              <div className="profile-top"><span className="profile-logo">in</span><span>Professional network</span></div>
              <h3>Jamal Yaqoob</h3>
              <p>Assistant Accountant · Finance Operations · Computer Science</p>
              <div className="profile-meta">
                <span><Briefcase size={16} aria-hidden="true" /> Toyota Society Motors</span>
                <span><MapPin size={16} aria-hidden="true" /> Karachi, Pakistan</span>
              </div>
              <div className="profile-actions">
                <a href={contact.linkedin} target="_blank" rel="noreferrer">Open LinkedIn <ExternalLink size={16} aria-hidden="true" /></a>
                <button type="button" data-copy={contact.linkedin} data-copy-label="LinkedIn link"><Copy size={16} aria-hidden="true" /> Copy link</button>
              </div>
            </article>
            <article className="profile-card github reveal" data-github-profile data-spotlight-card>
              <div className="profile-skeleton"><i /><i /><i /></div>
            </article>
          </div>
          <div className="repo-shell reveal" data-spotlight-card>
            <div className="repo-head">
              <div><span>Selected public repository</span><h3>Live GitHub work</h3></div>
              <button type="button" data-github-refresh><RefreshCw size={16} aria-hidden="true" /> Refresh</button>
            </div>
            <div className="repo-grid" data-github-repos><article className="repo-placeholder"><i /><i /><i /></article></div>
            <p className="repo-note">The current portfolio repository is intentionally excluded to avoid self-reference.</p>
          </div>
        </section>

        <section className="education-section reveal" data-spotlight-card>
          <div className="education-icon"><Code size={24} aria-hidden="true" /></div>
          <div><span>Education · 2025 — Present</span><h2>Bachelor&apos;s in Computer Science</h2><p>Allama Iqbal Open University</p></div>
          <p>Building the technical depth to create better financial tools and operational systems.</p>
        </section>

        <section className="contact" id="contact">
          <div className="contact-grid-bg" aria-hidden="true" />
          <div className="contact-copy reveal">
            <span>✦ Let&apos;s build something precise</span>
            <h2>Need finance discipline with systems thinking?</h2>
            <p>Let&apos;s talk about accounting operations, reporting, finance systems or a digital product that deserves a cleaner experience.</p>
            <div>
              <button className="button light magnetic" type="button" data-contact-open>Start a conversation <Mail size={18} aria-hidden="true" /></button>
              <a className="button outline magnetic" href={`tel:${contact.phoneValue}`}>{contact.phoneDisplay} <Phone size={17} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="contact-mark reveal"><span>JY</span><i /><i /><i /></div>
        </section>
      </main>

      <footer>
        <div><strong>Jamal Yaqoob</strong><span>Accounting, finance and systems.</span></div>
        <nav>
          <a href={`mailto:${contact.email}`}>Email</a>
          <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`${basePath}/resume/`}>Résumé</a>
        </nav>
        <span>© 2026 · Karachi, Pakistan</span>
      </footer>

      <div className="command-modal" id="command-menu" data-command-modal hidden>
        <button className="modal-backdrop" type="button" data-command-close aria-label="Close command menu" />
        <section role="dialog" aria-modal="true" aria-labelledby="command-title">
          <div className="command-search">
            <Search size={19} aria-hidden="true" />
            <input data-command-input type="search" placeholder="Search sections and actions…" aria-label="Search commands" autoComplete="off" />
            <kbd>Esc</kbd>
          </div>
          <div className="command-head"><span id="command-title">Quick explore</span><small>Navigate or run an action</small></div>
          <div className="command-list" data-command-list>
            <p>Navigate</p>
            {[
              ["#about", "About Jamal", "Story, values and background", Briefcase],
              ["#experience", "Experience", "Roles and operational responsibilities", Clock],
              ["#work", "Selected work", "Products, systems and case studies", BarChart3],
              ["#lab", "Reconciliation lab", "Interactive finance calculation", Calculator],
              ["#profiles", "Professional profiles", "LinkedIn and live GitHub work", Github],
            ].map(([href, title, description, ItemIcon]) => (
              <a key={String(href)} href={String(href)} data-command-item data-command-keywords={`${title} ${description}`}>
                <span><ItemIcon size={18} aria-hidden="true" /></span>
                <div><strong>{String(title)}</strong><small>{String(description)}</small></div>
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            ))}
            <p>Actions</p>
            <button type="button" data-command-item data-command-action="contact" data-command-keywords="contact email phone connect">
              <span><Mail size={18} aria-hidden="true" /></span><div><strong>Open contact options</strong><small>Email, phone, LinkedIn or vCard</small></div><ArrowRight size={17} aria-hidden="true" />
            </button>
            <button type="button" data-command-item data-command-action="theme" data-command-keywords="theme palette color appearance">
              <span><Palette size={18} aria-hidden="true" /></span><div><strong>Switch colour theme</strong><small>Cycle through the premium palettes</small></div><ArrowRight size={17} aria-hidden="true" />
            </button>
            <button type="button" data-command-item data-command-action="copy-email" data-command-keywords="copy email address">
              <span><Copy size={18} aria-hidden="true" /></span><div><strong>Copy email address</strong><small>{contact.email}</small></div><ArrowRight size={17} aria-hidden="true" />
            </button>
            <a href={`${basePath}/Jamal_Yaqoob_Resume.pdf`} download data-command-item data-command-keywords="resume cv download pdf">
              <span><FileText size={18} aria-hidden="true" /></span><div><strong>Download résumé</strong><small>Save the latest PDF version</small></div><Download size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="command-empty" data-command-empty hidden>No matching command found.</div>
          <div className="command-footer"><span><Command size={14} aria-hidden="true" /> Ctrl/⌘ K to open</span><span><MousePointer size={14} aria-hidden="true" /> Select an item</span></div>
        </section>
      </div>

      <div className="contact-modal" data-contact-modal hidden>
        <button className="modal-backdrop" type="button" data-contact-close aria-label="Close contact panel" />
        <section role="dialog" aria-modal="true" aria-labelledby="contact-title">
          <div className="modal-head">
            <div><span>Quick contact</span><h2 id="contact-title">Choose exactly how to connect.</h2></div>
            <button type="button" data-contact-close aria-label="Close contact panel"><X size={22} aria-hidden="true" /></button>
          </div>
          <div className="contact-options">
            <button type="button" data-copy={contact.email} data-copy-label="Email address"><Copy size={19} aria-hidden="true" /><strong>Copy email</strong><small>{contact.email}</small></button>
            <button type="button" data-copy={contact.phoneValue} data-copy-label="Phone number"><Phone size={19} aria-hidden="true" /><strong>Copy phone</strong><small>{contact.phoneDisplay}</small></button>
            <a href={`mailto:${contact.email}`}><Mail size={19} aria-hidden="true" /><strong>Open email app</strong><small>Start a new message</small></a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={19} aria-hidden="true" /><strong>Open LinkedIn</strong><small>Professional profile</small></a>
            <a href={contact.github} target="_blank" rel="noreferrer"><Github size={19} aria-hidden="true" /><strong>Open GitHub</strong><small>Projects and source</small></a>
            <a href={`${basePath}/Jamal_Yaqoob.vcf`} download><Download size={19} aria-hidden="true" /><strong>Save contact</strong><small>Download vCard</small></a>
          </div>
        </section>
      </div>

      <div className="toast" role="status" aria-live="polite" data-toast hidden><Check size={17} aria-hidden="true" /><span /></div>
      <button className="back-top" type="button" data-back-top aria-label="Back to top"><ArrowDown size={19} aria-hidden="true" /></button>
    </>
  );
}
