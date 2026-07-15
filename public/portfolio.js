(() => {
  'use strict';

  const html = document.documentElement;
  const body = document.body;
  const themeNames = { noir: 'Noir', cobalt: 'Cobalt', ember: 'Ember', ivory: 'Ivory' };
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let previousFocus = null;
  let toastTimer = 0;
  let githubLoaded = false;
  let scrollFrame = 0;

  const one = (selector, root = document) => root.querySelector(selector);

  const showToast = (message) => {
    const node = one('[data-toast]');
    if (!node) return;
    const text = one('span', node);
    if (text) text.textContent = message;
    node.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { node.hidden = true; }, 2200);
  };

  const copyText = async (value, label) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const field = document.createElement('textarea');
      field.value = value;
      field.readOnly = true;
      field.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
      body.append(field);
      field.select();
      document.execCommand('copy');
      field.remove();
    }
    showToast(`${label} copied`);
  };

  const setMenu = (open) => {
    const menu = one('[data-mobile-menu]');
    const trigger = one('[data-menu-open]');
    if (!menu) return;
    menu.hidden = !open;
    trigger?.setAttribute('aria-expanded', String(open));
    body.style.overflow = open ? 'hidden' : '';
    if (open) setTimeout(() => one('[data-menu-close]')?.focus(), 0);
    else trigger?.focus();
  };

  const setModal = (open) => {
    const modal = one('[data-contact-modal]');
    if (!modal) return;
    if (open) previousFocus = document.activeElement;
    modal.hidden = !open;
    body.style.overflow = open ? 'hidden' : '';
    if (open) setTimeout(() => one('.modal-head [data-contact-close]', modal)?.focus(), 0);
    else if (previousFocus instanceof HTMLElement) previousFocus.focus();
  };

  const setTheme = (theme) => {
    const selected = themeNames[theme] ? theme : 'noir';
    html.dataset.theme = selected;
    try { localStorage.setItem('jamal-theme', selected); } catch {}
    const label = one('[data-theme-label]');
    if (label) label.textContent = themeNames[selected];
    document.querySelectorAll('[data-theme]').forEach((button) => {
      button.setAttribute('aria-checked', String(button.dataset.theme === selected));
    });
  };

  const closeThemeMenu = () => {
    const menu = one('[data-theme-menu]');
    const trigger = one('[data-theme-button]');
    if (menu) menu.hidden = true;
    trigger?.setAttribute('aria-expanded', 'false');
  };

  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    const themeTrigger = target.closest('[data-theme-button]');
    if (themeTrigger) {
      const menu = one('[data-theme-menu]');
      if (!menu) return;
      const opening = menu.hidden;
      menu.hidden = !opening;
      themeTrigger.setAttribute('aria-expanded', String(opening));
      return;
    }

    const themeOption = target.closest('[data-theme]');
    if (themeOption) {
      setTheme(themeOption.dataset.theme || 'noir');
      closeThemeMenu();
      return;
    }

    if (target.closest('[data-menu-open]')) { setMenu(true); return; }
    if (target.closest('[data-menu-close], [data-menu-link]')) { setMenu(false); return; }
    if (target.closest('[data-contact-open]')) { setModal(true); return; }
    if (target.closest('[data-contact-close]')) { setModal(false); return; }

    const copyButton = target.closest('[data-copy]');
    if (copyButton) {
      void copyText(copyButton.dataset.copy || '', copyButton.dataset.copyLabel || 'Value');
      return;
    }

    if (target.closest('[data-back-top]')) {
      scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
      return;
    }

    if (target.closest('[data-github-refresh]')) {
      githubLoaded = false;
      void loadGithub(true);
      return;
    }

    const themeMenu = one('[data-theme-menu]');
    if (themeMenu && !themeMenu.hidden && !themeMenu.contains(target)) closeThemeMenu();
  }, { passive: false });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    const modal = one('[data-contact-modal]');
    const menu = one('[data-mobile-menu]');
    const themes = one('[data-theme-menu]');
    if (modal && !modal.hidden) setModal(false);
    else if (menu && !menu.hidden) setMenu(false);
    else if (themes && !themes.hidden) closeThemeMenu();
  });

  const escapeHtml = (value = '') => String(value).replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  }[character]));

  const renderGithub = (profile, repos) => {
    const profileNode = one('[data-github-profile]');
    const repoNode = one('[data-github-repos]');
    if (profileNode) {
      profileNode.innerHTML = `<div class="profile-top"><span class="github-mini">GH</span><span>Live GitHub profile</span></div><h3>${escapeHtml(profile.name || profile.login)}</h3><p>${escapeHtml(profile.bio || 'Public repositories, technical projects and current proof of work.')}</p><div class="profile-meta"><span>${escapeHtml(profile.location || 'Karachi, Pakistan')}</span><span>${Number(profile.public_repos || 0)} repositories</span><span>${Number(profile.followers || 0)} followers</span></div><div class="profile-actions"><a href="${escapeHtml(profile.html_url)}" target="_blank" rel="noreferrer">Open GitHub ↗</a><button type="button" data-copy="${escapeHtml(profile.html_url)}" data-copy-label="GitHub link">Copy link</button></div>`;
    }
    const selected = repos
      .filter((repo) => !repo.fork && !repo.archived && repo.full_name.toLowerCase() !== 'maijamalhoon/jamal-portfolio')
      .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
      .slice(0, 4);
    if (repoNode) {
      repoNode.innerHTML = selected.length ? selected.map((repo) => `<article class="repo-card"><h4>${escapeHtml(repo.name)}</h4><p>${escapeHtml(repo.description || 'Public project with source available on GitHub.')}</p><div class="repo-card-meta">${repo.language ? `<span>${escapeHtml(repo.language)}</span>` : ''}<span>★ ${Number(repo.stargazers_count || 0)}</span><span>Updated ${new Date(repo.pushed_at).toLocaleDateString('en-PK', { year: 'numeric', month: 'short' })}</span></div><a href="${escapeHtml(repo.html_url)}" target="_blank" rel="noreferrer">View source ↗</a></article>`).join('') : '<article class="repo-card"><h4>More work is being prepared</h4><p>Public repositories will appear here automatically when available.</p></article>';
    }
  };

  async function loadGithub(force = false) {
    if (githubLoaded && !force) return;
    githubLoaded = true;
    const profileNode = one('[data-github-profile]');
    const repoNode = one('[data-github-repos]');
    try {
      const [profileResponse, repoResponse] = await Promise.all([
        fetch('https://api.github.com/users/maijamalhoon', { headers: { Accept: 'application/vnd.github+json' } }),
        fetch('https://api.github.com/users/maijamalhoon/repos?sort=pushed&direction=desc&per_page=100', { headers: { Accept: 'application/vnd.github+json' } })
      ]);
      if (!profileResponse.ok || !repoResponse.ok) throw new Error('GitHub unavailable');
      renderGithub(await profileResponse.json(), await repoResponse.json());
    } catch {
      if (profileNode) profileNode.innerHTML = '<div class="profile-top"><span class="github-mini">GH</span><span>GitHub profile</span></div><h3>maijamalhoon</h3><p>GitHub is temporarily unavailable. The direct profile remains accessible.</p><div class="profile-actions"><a href="https://github.com/maijamalhoon" target="_blank" rel="noreferrer">Open GitHub ↗</a></div>';
      if (repoNode) repoNode.innerHTML = '<article class="repo-card"><h4>Jamal’s Finance</h4><p>Personal finance workspace built with Next.js, React, TypeScript and Supabase.</p><a href="https://github.com/maijamalhoon/Jamals-finance" target="_blank" rel="noreferrer">View source ↗</a></article>';
    }
  }

  const activateScrollFeatures = () => {
    const backTop = one('[data-back-top]');
    if (backTop) backTop.classList.toggle('visible', scrollY > 720);

    const profileSection = one('[data-github-section]');
    if (profileSection && profileSection.getBoundingClientRect().top < innerHeight + 800) void loadGithub();

    const links = document.querySelectorAll('.desktop-nav a');
    let current = '';
    links.forEach((link) => {
      const section = one(link.getAttribute('href'));
      if (section && section.getBoundingClientRect().top <= innerHeight * 0.42) current = link.getAttribute('href');
    });
    links.forEach((link) => {
      if (link.getAttribute('href') === current) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  };

  addEventListener('scroll', () => {
    if (scrollFrame) return;
    scrollFrame = requestAnimationFrame(() => {
      scrollFrame = 0;
      activateScrollFeatures();
    });
  }, { passive: true });
})();
