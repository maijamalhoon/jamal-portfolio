/* eslint-disable @next/next/no-img-element */
import { experience, projects, skillGroups } from "@/lib/data";
import { basePath } from "@/lib/site";

const portraitData = "data:image/webp;base64,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";

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
      <a className="brand" href="#home" aria-label="Jamal Yaqoob home">
        <span className="brand-mark">JY</span>
        <span className="brand-copy"><strong>Jamal Yaqoob</strong><small>Finance × Systems</small></span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {nav.map(([, label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <div className="header-actions">
        <button className="theme-button" type="button" data-theme-button aria-label="Choose color theme" aria-haspopup="menu" aria-expanded="false"><Icon name="palette" size={17}/><span data-theme-label>Noir</span></button>
        <button className="connect-button" type="button" data-contact-open>Let&apos;s connect <Icon name="arrow" size={17}/></button>
        <button className="menu-button" type="button" data-menu-open aria-label="Open navigation" aria-expanded="false" aria-controls="mobile-menu"><Icon name="menu" size={22}/></button>
      </div>
      <div className="theme-popover" data-theme-menu role="menu" aria-label="Color themes" hidden>
        {[['noir','Noir','#caff4a'],['cobalt','Cobalt','#47d7ff'],['ember','Ember','#ff7657'],['ivory','Ivory','#5b57ff']].map(([id,label,color]) => <button key={id} type="button" role="menuitemradio" aria-checked={id==='noir'} data-theme={id}><i style={{background: color}}/><span>{label}</span><b><Icon name="check" size={15}/></b></button>)}
      </div>
    </header>

    <div className="mobile-menu" id="mobile-menu" data-mobile-menu hidden>
      <div className="menu-grid" aria-hidden="true"/>
      <img className="menu-portrait" src={portraitData} width="410" height="615" alt="" aria-hidden="true"/>
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
            <img src={portraitData} width="410" height="615" alt="Jamal Yaqoob" loading="eager" fetchPriority="high" decoding="async"/>
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

      <section className="section skills" aria-labelledby="skills-title">
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
