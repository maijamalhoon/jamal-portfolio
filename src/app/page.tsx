/* eslint-disable @next/next/no-img-element */
import { experience, projects, skillGroups } from "@/lib/data";
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
  ["05", "Profiles", "#profiles"],
  ["06", "Contact", "#contact"],
] as const;

function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const paths: Record<string, React.ReactNode> = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    down: <><path d="M12 5v14"/><path d="m6 13 6 6 6-6"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1 .37 1.97.72 2.88a2 2 0 0 1-.45 2.11L8.1 9.99a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.91.35 1.88.59 2.88.72A2 2 0 0 1 22 16.92Z"/>,
    download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/></>,
    external: <><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></>,
    copy: <><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M12 12v.01"/></>,
    calculator: <><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8"/><path d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/></>,
    code: <><path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/></>,
    chart: <><path d="M3 3v18h18"/><path d="m7 16 4-5 4 3 5-7"/></>,
    menu: <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>,
    close: <><path d="M18 6 6 18"/><path d="m6 6 12 12"/></>,
    palette: <><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18c1.1 0 2-.9 2-2 0-.55-.22-1.05-.59-1.41A2 2 0 0 1 14.83 14H17a4 4 0 0 0 4-4c0-3.87-4.03-7-9-7Z"/><circle cx="7.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="10" cy="7.5" r=".5" fill="currentColor"/><circle cx="14" cy="7.5" r=".5" fill="currentColor"/></>,
    refresh: <><path d="M20 11a8 8 0 1 0-2.34 5.66"/><path d="M20 4v7h-7"/></>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
    location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/></>,
  };
  return <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function SectionHead({ index, eyebrow, title, copy }: { index: string; eyebrow: string; title: string; copy?: string }) {
  return <div className="section-head reveal">
    <div className="section-index"><span>{index}</span><span>{eyebrow}</span></div>
    <h2>{title}</h2>
    {copy ? <p>{copy}</p> : null}
  </div>;
}

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>

    <header className="site-header" data-header>
      <a className="brand" href="#home">
        <span className="brand-mark">JY</span>
        <span className="brand-copy"><strong>Jamal Yaqoob</strong><small>Finance × Systems</small></span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {nav.map(([, label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <div className="header-actions">
        <button className="theme-button" type="button" data-theme-button aria-label="Choose color theme: Noir" aria-haspopup="menu" aria-expanded="false" aria-controls="theme-menu"><Icon name="palette" size={17}/><span data-theme-label>Noir</span></button>
        <button className="connect-button" type="button" data-contact-open>Let&apos;s connect <Icon name="arrow" size={17}/></button>
        <button className="menu-button" type="button" data-menu-open aria-label="Open navigation" aria-expanded="false" aria-controls="mobile-menu"><Icon name="menu" size={22}/></button>
      </div>
      <div className="theme-popover" id="theme-menu" data-theme-menu role="menu" aria-label="Color themes" hidden>
        {[['noir','Noir','#caff4a'],['cobalt','Cobalt','#47d7ff'],['ember','Ember','#ff7657'],['ivory','Ivory','#5b57ff']].map(([id,label,color]) => <button key={id} type="button" role="menuitemradio" aria-checked={id==='noir'} data-theme={id}><i style={{background: color}}/><span>{label}</span><b><Icon name="check" size={15}/></b></button>)}
      </div>
    </header>

    <div className="mobile-menu" id="mobile-menu" data-mobile-menu role="dialog" aria-modal="true" aria-label="Navigation menu" hidden>
      <div className="menu-grid" aria-hidden="true"/>
      <div className="menu-portrait" style={{ backgroundImage: `url(${basePath}/jamal-yaqoob.webp)` }} aria-hidden="true"/>
      <button className="menu-close" type="button" data-menu-close aria-label="Close navigation"><Icon name="close" size={25}/></button>
      <div className="mobile-menu-inner">
        <p>Navigation</p>
        <nav aria-label="Mobile navigation">
          {nav.map(([number,label,href]) => <a key={href} href={href} data-menu-link><span>{number}</span><strong>{label}</strong><Icon name="arrow" size={20}/></a>)}
        </nav>
        <div className="menu-contact"><a href={`mailto:${contact.email}`}>{contact.email}</a><a href={`tel:${contact.phoneValue}`}>{contact.phoneDisplay}</a></div>
      </div>
    </div>

    <main id="main">
      <section className="hero" id="home">
        <div className="hero-grid-bg" aria-hidden="true"/>
        <div className="hero-copy">
          <div className="availability"><i/> Karachi, Pakistan · Accounting & finance</div>
          <h1><span>Numbers with</span><strong>operational intelligence.</strong></h1>
          <p>I&apos;m Jamal Yaqoob — an accounts professional and computer science student building precise finance operations, reliable systems and thoughtful digital products.</p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore selected work <Icon name="down" size={18}/></a>
            <a className="button secondary" href={`${basePath}/Jamal_Yaqoob_Resume.pdf`} download>Download résumé <Icon name="download" size={18}/></a>
            <button className="text-button" type="button" data-contact-open>Contact options</button>
          </div>
          <div className="hero-meta"><div><span>Current role</span><strong>Assistant Accountant</strong></div><div><span>Focus</span><strong>Finance operations + systems</strong></div></div>
        </div>
        <div className="portrait-stage" aria-label="Portrait of Jamal Yaqoob">
          <div className="portrait-orbit orbit-a"/><div className="portrait-orbit orbit-b"/>
          <div className="portrait-frame">
            <img src={`${basePath}/jamal-yaqoob.webp`} width="410" height="615" alt="Jamal Yaqoob" loading="eager" fetchPriority="high" decoding="async"/>
            <div className="portrait-label"><span>JY</span><p><strong>Precision-first</strong><small>Finance × Systems</small></p></div>
          </div>
          <span className="float-chip chip-a"><Icon name="calculator" size={17}/> Reconciliation</span>
          <span className="float-chip chip-b"><Icon name="code" size={17}/> Systems thinking</span>
        </div>
        <a className="scroll-cue" href="#about"><span>Scroll to discover</span><Icon name="down" size={18}/></a>
      </section>

      <div className="capability-strip" aria-label="Capabilities"><div>{["Bank reconciliation","ERP systems","Financial reporting","Payroll","DMS operations","Next.js","Process accuracy","Bank reconciliation","ERP systems","Financial reporting","Payroll","DMS operations","Next.js","Process accuracy"].map((item,index)=><span key={`${item}-${index}`}>{item}<i>✦</i></span>)}</div></div>

      <section className="section about" id="about">
        <SectionHead index="01" eyebrow="About" title="Finance discipline. Technical curiosity. Practical results."/>
        <div className="about-grid">
          <div className="about-copy reveal"><p className="lead">Every payment should be traceable, every ledger should make sense, and every report should help someone act with confidence.</p><p>Alongside my accounting career, I&apos;m pursuing Computer Science at Allama Iqbal Open University. That combination shapes how I improve workflows: not only by completing the process, but by understanding the system behind it.</p><div className="inline-links"><a href={`mailto:${contact.email}`}><Icon name="mail" size={17}/>Email</a><a href={`tel:${contact.phoneValue}`}><Icon name="phone" size={17}/>Call</a><a href={contact.github} target="_blank" rel="noreferrer">GitHub<Icon name="external" size={15}/></a><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn<Icon name="external" size={15}/></a></div></div>
          <div className="stats-grid reveal">{[["2+","Years in dealership finance"],["03","Progressive finance roles"],["20+","Operational capabilities"],["02","Disciplines: finance + CS"]].map(([value,label])=><article key={label}><strong>{value}</strong><span>{label}</span></article>)}</div>
        </div>
      </section>

      <section className="section experience" id="experience">
        <SectionHead index="02" eyebrow="Experience" title="Progressive responsibility, grounded in reliable execution."/>
        <div className="timeline">{experience.map((item,index)=><article className="timeline-item reveal" key={`${item.company}-${item.role}`}><div className="timeline-number">0{index+1}</div><div className="timeline-role"><span>{item.period}</span><h3>{item.role}</h3><p>{item.company}</p></div><div className="timeline-detail"><p>{item.summary}</p><ul>{item.highlights.map(highlight=><li key={highlight}><Icon name="check" size={16}/>{highlight}</li>)}</ul></div></article>)}</div>
      </section>

      <section className="section skills">
        <SectionHead index="03" eyebrow="Capabilities" title="A toolkit designed for accuracy, momentum and calm control."/>
        <div className="skills-grid">{skillGroups.map((group,index)=><article className="skill-card reveal" key={group.title}><span className="skill-icon"><Icon name={index===0?'calculator':index===1?'code':'briefcase'} size={21}/></span><h3>{group.title}</h3><div>{group.skills.map(skill=><span key={skill}>{skill}</span>)}</div></article>)}</div>
      </section>

      <section className="section work" id="work">
        <SectionHead index="04" eyebrow="Selected work" title="Products and systems that turn complexity into useful control."/>
        <div className="projects">{projects.map((project,index)=><article className="project-card reveal" key={project.title}>
          <div className={`project-visual visual-${index}`}><div className="visual-grid"/><span className="visual-icon"><Icon name={index===0?'chart':index===1?'calculator':'briefcase'} size={30}/></span><div className="visual-lines"><i/><i/><i/><i/></div></div>
          <div className="project-body"><div className="project-label"><span>{project.eyebrow}</span><b>{project.status}</b></div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.stack.map(item=><span key={item}>{item}</span>)}</div><div className="project-actions">{project.href?<a href={project.href} target={project.href.startsWith('http')?'_blank':undefined} rel={project.href.startsWith('http')?'noreferrer':undefined}>{project.href.startsWith('http')?'Open project':'View case study'}<Icon name="external" size={17}/></a>:<span>Private repository</span>}{project.repo?<a href={project.repo} target="_blank" rel="noreferrer">Source<Icon name="external" size={16}/></a>:null}</div></div>
        </article>)}</div>
      </section>

      <section className="section profiles" id="profiles" data-github-section>
        <SectionHead index="05" eyebrow="Professional presence" title="Verified profiles and live proof of work." copy="The GitHub feed loads only when this section approaches the viewport, keeping the first screen fast."/>
        <div className="profile-grid">
          <article className="profile-card linkedin reveal"><div className="profile-top"><span className="profile-logo">in</span><span>Professional network</span></div><h3>Jamal Yaqoob</h3><p>Assistant Accountant · Finance Operations · Computer Science</p><div className="profile-meta"><span><Icon name="briefcase" size={16}/>Toyota Society Motors</span><span><Icon name="location" size={16}/>Karachi, Pakistan</span></div><div className="profile-actions"><a href={contact.linkedin} target="_blank" rel="noreferrer">Open LinkedIn<Icon name="external" size={16}/></a><button type="button" data-copy={contact.linkedin} data-copy-label="LinkedIn link"><Icon name="copy" size={16}/>Copy link</button></div></article>
          <article className="profile-card github reveal" data-github-profile><div className="profile-skeleton"><i/><i/><i/></div></article>
        </div>
        <div className="repo-shell reveal"><div className="repo-head"><div><span>Selected public repository</span><h3>Live GitHub work</h3></div><button type="button" data-github-refresh><Icon name="refresh" size={16}/>Refresh</button></div><div className="repo-grid" data-github-repos><article className="repo-placeholder"><i/><i/><i/></article></div><p className="repo-note">The current portfolio repository is intentionally excluded to avoid self-reference.</p></div>
      </section>

      <section className="education-section reveal"><div className="education-icon"><Icon name="code" size={24}/></div><div><span>Education · 2025 — Present</span><h2>Bachelor&apos;s in Computer Science</h2><p>Allama Iqbal Open University</p></div><p>Building the technical depth to create better financial tools and operational systems.</p></section>

      <section className="contact" id="contact"><div className="contact-grid-bg" aria-hidden="true"/><div className="contact-copy reveal"><span>✦ Let&apos;s build something precise</span><h2>Need finance discipline with systems thinking?</h2><p>Let&apos;s talk about accounting operations, reporting, finance systems or a digital product that deserves a cleaner experience.</p><div><button className="button light" type="button" data-contact-open>Start a conversation<Icon name="mail" size={18}/></button><a className="button outline" href={`tel:${contact.phoneValue}`}>{contact.phoneDisplay}<Icon name="phone" size={17}/></a></div></div><div className="contact-mark reveal"><span>JY</span><i/><i/><i/></div></section>
    </main>

    <footer><div><strong>Jamal Yaqoob</strong><span>Accounting, finance and systems.</span></div><nav><a href={`mailto:${contact.email}`}>Email</a><a href={contact.github} target="_blank" rel="noreferrer">GitHub</a><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={`${basePath}/resume/`}>Résumé</a></nav><span>© 2026 · Karachi, Pakistan</span></footer>

    <div className="contact-modal" data-contact-modal hidden><button className="modal-backdrop" type="button" data-contact-close aria-label="Close contact panel"/><section role="dialog" aria-modal="true" aria-labelledby="contact-title"><div className="modal-head"><div><span>Quick contact</span><h2 id="contact-title">Choose exactly how to connect.</h2></div><button type="button" data-contact-close aria-label="Close contact panel"><Icon name="close" size={22}/></button></div><div className="contact-options"><button type="button" data-copy={contact.email} data-copy-label="Email address"><Icon name="copy" size={19}/><strong>Copy email</strong><small>{contact.email}</small></button><button type="button" data-copy={contact.phoneValue} data-copy-label="Phone number"><Icon name="phone" size={19}/><strong>Copy phone</strong><small>{contact.phoneDisplay}</small></button><a href={`mailto:${contact.email}`}><Icon name="mail" size={19}/><strong>Open email app</strong><small>Start a new message</small></a><a href={contact.linkedin} target="_blank" rel="noreferrer"><span className="linkedin-mini">in</span><strong>Open LinkedIn</strong><small>Professional profile</small></a><a href={contact.github} target="_blank" rel="noreferrer"><span className="github-mini">GH</span><strong>Open GitHub</strong><small>Projects and source</small></a><a href={`${basePath}/Jamal_Yaqoob.vcf`} download><Icon name="download" size={19}/><strong>Save contact</strong><small>Download vCard</small></a></div></section></div>
    <div className="toast" role="status" aria-live="polite" data-toast hidden><Icon name="check" size={17}/><span/></div>
    <button className="back-top" type="button" data-back-top aria-label="Back to top"><Icon name="down" size={19}/></button>
  </>;
}
