(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const html = document.documentElement;
  const body = document.body;
  let toastTimer = 0;

  const toast = (message) => {
    const node = $('[data-toast]');
    if (!node) return;
    const label = $('span', node);
    if (label) label.textContent = message;
    node.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => { node.hidden = true; }, 2200);
  };

  const copy = async (value, label) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const input = document.createElement('textarea');
      input.value = value;
      input.setAttribute('readonly', '');
      input.style.cssText = 'position:fixed;opacity:0';
      body.append(input);
      input.select();
      document.execCommand('copy');
      input.remove();
    }
    toast(`${label} copied`);
  };

  const themeMenu = $('[data-theme-menu]');
  const themeButton = $('[data-theme-button]');
  const themeLabel = $('[data-theme-label]');
  const themeNames = { noir: 'Noir', cobalt: 'Cobalt', ember: 'Ember', ivory: 'Ivory' };
  const syncTheme = (theme) => {
    html.dataset.theme = theme;
    try { localStorage.setItem('jamal-theme', theme); } catch {}
    if (themeLabel) themeLabel.textContent = themeNames[theme] || 'Noir';
    $$('[data-theme]', themeMenu).forEach((button) => button.setAttribute('aria-checked', String(button.dataset.theme === theme)));
  };
  syncTheme(html.dataset.theme || 'noir');
  themeButton?.addEventListener('click', (event) => {
    event.stopPropagation();
    const open = themeMenu?.hidden ?? true;
    if (themeMenu) themeMenu.hidden = !open;
    themeButton.setAttribute('aria-expanded', String(open));
  });
  $$('[data-theme]', themeMenu).forEach((button) => button.addEventListener('click', () => {
    syncTheme(button.dataset.theme || 'noir');
    if (themeMenu) themeMenu.hidden = true;
    themeButton?.setAttribute('aria-expanded', 'false');
  }));
  document.addEventListener('click', (event) => {
    if (themeMenu && !themeMenu.hidden && !themeMenu.contains(event.target) && !themeButton?.contains(event.target)) {
      themeMenu.hidden = true;
      themeButton?.setAttribute('aria-expanded', 'false');
    }
  });

  const mobileMenu = $('[data-mobile-menu]');
  const menuOpen = $('[data-menu-open]');
  const setMenu = (open) => {
    if (!mobileMenu) return;
    mobileMenu.hidden = !open;
    menuOpen?.setAttribute('aria-expanded', String(open));
    body.style.overflow = open ? 'hidden' : '';
    if (open) window.setTimeout(() => $('[data-menu-close]')?.focus(), 10);
    else menuOpen?.focus();
  };
  menuOpen?.addEventListener('click', () => setMenu(true));
  $('[data-menu-close]')?.addEventListener('click', () => setMenu(false));
  $$('[data-menu-link]').forEach((link) => link.addEventListener('click', () => setMenu(false)));

  const modal = $('[data-contact-modal]');
  let previousFocus = null;
  const setModal = (open) => {
    if (!modal) return;
    if (open) previousFocus = document.activeElement;
    modal.hidden = !open;
    body.style.overflow = open ? 'hidden' : '';
    if (open) window.setTimeout(() => $('[data-contact-close]', modal)?.focus(), 10);
    else if (previousFocus instanceof HTMLElement) previousFocus.focus();
  };
  $$('[data-contact-open]').forEach((button) => button.addEventListener('click', () => setModal(true)));
  $$('[data-contact-close]').forEach((button) => button.addEventListener('click', () => setModal(false)));
  $$('[data-copy]').forEach((button) => button.addEventListener('click', () => copy(button.dataset.copy || '', button.dataset.copyLabel || 'Value')));

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (modal && !modal.hidden) setModal(false);
    else if (mobileMenu && !mobileMenu.hidden) setMenu(false);
    else if (themeMenu && !themeMenu.hidden) { themeMenu.hidden = true; themeButton?.setAttribute('aria-expanded', 'false'); }
  });

  const revealNodes = $$('.reveal');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion && 'IntersectionObserver' in window) {
    revealNodes.forEach((node) => node.classList.add('reveal-pending'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          entry.target.classList.remove('reveal-pending');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8%', threshold: 0.05 });
    revealNodes.forEach((node) => observer.observe(node));
  }

  const navLinks = $$('.desktop-nav a');
  const sectionIds = navLinks.map((link) => link.getAttribute('href')).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver((entries) => {
      const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!current) return;
      navLinks.forEach((link) => {
        if (link.getAttribute('href') === `#${current.target.id}`) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-28% 0px -58%', threshold: [0.05, 0.2, 0.5] });
    sectionIds.forEach((href) => { const section = $(href); if (section) navObserver.observe(section); });
  }

  const backTop = $('[data-back-top]');
  let scrollFrame = 0;
  const updateScroll = () => {
    scrollFrame = 0;
    backTop?.classList.toggle('visible', scrollY > 720);
  };
  addEventListener('scroll', () => { if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll); }, { passive: true });
  updateScroll();
  backTop?.addEventListener('click', () => scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));

  const profileNode = $('[data-github-profile]');
  const repoNode = $('[data-github-repos]');
  const githubSection = $('[data-github-section]');
  const currentRepo = 'maijamalhoon/jamal-portfolio';
  let githubLoaded = false;
  const escapeHtml = (value = '') => String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
  const renderGithub = (profile, repos) => {
    if (profileNode) profileNode.innerHTML = `<div class="profile-top"><span class="github-mini">GH</span><span>Live GitHub profile</span></div><h3>${escapeHtml(profile.name || profile.login)}</h3><p>${escapeHtml(profile.bio || 'Public repositories, technical projects and current proof of work.')}</p><div class="profile-meta"><span>${escapeHtml(profile.location || 'Karachi, Pakistan')}</span><span>${Number(profile.public_repos || 0)} repositories</span><span>${Number(profile.followers || 0)} followers</span></div><div class="profile-actions"><a href="${escapeHtml(profile.html_url)}" target="_blank" rel="noreferrer">Open GitHub ↗</a><button type="button" data-copy="${escapeHtml(profile.html_url)}" data-copy-label="GitHub link">Copy link</button></div>`;
    const visible = repos.filter((repo) => !repo.fork && !repo.archived && repo.full_name.toLowerCase() !== currentRepo).sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at)).slice(0, 4);
    if (repoNode) repoNode.innerHTML = visible.length ? visible.map((repo) => `<article class="repo-card"><h4>${escapeHtml(repo.name)}</h4><p>${escapeHtml(repo.description || 'Public project with source available on GitHub.')}</p><div class="repo-card-meta">${repo.language ? `<span>${escapeHtml(repo.language)}</span>` : ''}<span>★ ${Number(repo.stargazers_count || 0)}</span><span>Updated ${new Date(repo.pushed_at).toLocaleDateString('en-PK',{year:'numeric',month:'short'})}</span></div><a href="${escapeHtml(repo.html_url)}" target="_blank" rel="noreferrer">View source ↗</a></article>`).join('') : '<article class="repo-card"><h4>More work is being prepared</h4><p>Public repositories will appear here automatically when available.</p></article>';
    $$('[data-copy]', profileNode).forEach((button) => button.addEventListener('click', () => copy(button.dataset.copy || '', button.dataset.copyLabel || 'Value')));
  };
  const loadGithub = async (force = false) => {
    if (githubLoaded && !force) return;
    githubLoaded = true;
    try {
      const [profileResponse, repoResponse] = await Promise.all([
        fetch('https://api.github.com/users/maijamalhoon', { headers: { Accept: 'application/vnd.github+json' } }),
        fetch('https://api.github.com/users/maijamalhoon/repos?sort=pushed&direction=desc&per_page=100', { headers: { Accept: 'application/vnd.github+json' } })
      ]);
      if (!profileResponse.ok || !repoResponse.ok) throw new Error('GitHub unavailable');
      renderGithub(await profileResponse.json(), await repoResponse.json());
    } catch {
      if (profileNode) profileNode.innerHTML = `<div class="profile-top"><span class="github-mini">GH</span><span>GitHub profile</span></div><h3>maijamalhoon</h3><p>GitHub is temporarily unavailable. The direct profile remains accessible.</p><div class="profile-actions"><a href="https://github.com/maijamalhoon" target="_blank" rel="noreferrer">Open GitHub ↗</a></div>`;
      if (repoNode) repoNode.innerHTML = '<article class="repo-card"><h4>Jamal’s Finance</h4><p>Personal finance workspace built with Next.js, React, TypeScript and Supabase.</p><a href="https://github.com/maijamalhoon/Jamals-finance" target="_blank" rel="noreferrer">View source ↗</a></article>';
    }
  };
  $('[data-github-refresh]')?.addEventListener('click', () => { githubLoaded = false; loadGithub(true); });
  if (githubSection && 'IntersectionObserver' in window) {
    const githubObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) { loadGithub(); githubObserver.disconnect(); }
    }, { rootMargin: '700px 0px' });
    githubObserver.observe(githubSection);
  } else {
    window.setTimeout(loadGithub, 1800);
  }
})();
