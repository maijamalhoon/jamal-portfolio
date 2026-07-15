(() => {
  'use strict';

  const html = document.documentElement;
  const body = document.body;
  const themeNames = { noir: 'Noir', cobalt: 'Cobalt', ember: 'Ember', ivory: 'Ivory' };
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canAnimate = !reduceMotion && typeof Element.prototype.animate === 'function';
  let menuFocus = null;
  let modalFocus = null;
  let toastTimer = 0;
  let githubLoaded = false;
  let scrollFrame = 0;
  let resizeFrame = 0;
  let sectionMetrics = [];
  let profileTop = Number.POSITIVE_INFINITY;

  const one = (selector, root = document) => root.querySelector(selector);
  const all = (selector, root = document) => [...root.querySelectorAll(selector)];

  const runAnimation = (node, frames, options) => {
    if (!canAnimate || !(node instanceof Element)) return null;
    node.getAnimations().forEach((animation) => animation.cancel());
    return node.animate(frames, { fill: 'both', easing: 'cubic-bezier(.2,.8,.2,1)', ...options });
  };

  const afterAnimation = (animation, callback) => {
    if (!animation) { callback(); return; }
    let completed = false;
    const finish = () => {
      if (completed) return;
      completed = true;
      callback();
    };
    animation.finished.then(finish).catch(finish);
  };

  const syncOverlayState = () => {
    const menuOpen = one('[data-mobile-menu]')?.hidden === false;
    const modalOpen = one('[data-contact-modal]')?.hidden === false;
    body.classList.toggle('overlay-open', Boolean(menuOpen || modalOpen));
  };

  const showToast = (message) => {
    const node = one('[data-toast]');
    if (!node) return;
    const text = one('span', node);
    if (text) text.textContent = message;
    node.hidden = false;
    runAnimation(node, [{ opacity: 0, transform: 'translate3d(-50%,10px,0) scale(.98)' }, { opacity: 1, transform: 'translate3d(-50%,0,0) scale(1)' }], { duration: 180 });
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      const animation = runAnimation(node, [{ opacity: 1 }, { opacity: 0 }], { duration: 140 });
      afterAnimation(animation, () => { node.hidden = true; });
    }, 2200);
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
    if (!menu || menu.hidden === !open) return;

    if (open) {
      menuFocus = document.activeElement;
      menu.hidden = false;
      trigger?.setAttribute('aria-expanded', 'true');
      syncOverlayState();
      runAnimation(menu, [{ opacity: 0 }, { opacity: 1 }], { duration: 180 });
      runAnimation(one('.mobile-menu-inner', menu), [{ transform: 'translate3d(0,-14px,0)' }, { transform: 'translate3d(0,0,0)' }], { duration: 260 });
      runAnimation(one('.menu-portrait', menu), [{ transform: 'translate3d(18px,10px,0) scale(1.025)' }, { transform: 'translate3d(0,0,0) scale(1)' }], { duration: 420 });
      setTimeout(() => one('[data-menu-close]', menu)?.focus(), 40);
      return;
    }

    trigger?.setAttribute('aria-expanded', 'false');
    const animation = runAnimation(menu, [{ opacity: 1 }, { opacity: 0 }], { duration: 150 });
    afterAnimation(animation, () => {
      menu.hidden = true;
      syncOverlayState();
      if (menuFocus instanceof HTMLElement) menuFocus.focus();
      else trigger?.focus();
    });
  };

  const setModal = (open) => {
    const modal = one('[data-contact-modal]');
    if (!modal || modal.hidden === !open) return;

    if (open) {
      modalFocus = document.activeElement;
      modal.hidden = false;
      syncOverlayState();
      runAnimation(one('.modal-backdrop', modal), [{ opacity: 0 }, { opacity: 1 }], { duration: 180 });
      runAnimation(one('section', modal), [{ opacity: 0, transform: 'translate3d(0,16px,0) scale(.985)' }, { opacity: 1, transform: 'translate3d(0,0,0) scale(1)' }], { duration: 240 });
      setTimeout(() => one('.modal-head [data-contact-close]', modal)?.focus(), 40);
      return;
    }

    const panelAnimation = runAnimation(one('section', modal), [{ opacity: 1, transform: 'translate3d(0,0,0) scale(1)' }, { opacity: 0, transform: 'translate3d(0,10px,0) scale(.99)' }], { duration: 150 });
    runAnimation(one('.modal-backdrop', modal), [{ opacity: 1 }, { opacity: 0 }], { duration: 150 });
    afterAnimation(panelAnimation, () => {
      modal.hidden = true;
      syncOverlayState();
      if (modalFocus instanceof HTMLElement) modalFocus.focus();
    });
  };

  const setTheme = (theme) => {
    const selected = themeNames[theme] ? theme : 'noir';
    html.dataset.theme = selected;
    try { localStorage.setItem('jamal-theme', selected); } catch {}
    const label = one('[data-theme-label]');
    const trigger = one('[data-theme-button]');
    if (label) label.textContent = themeNames[selected];
    trigger?.setAttribute('aria-label', `Choose color theme: ${themeNames[selected]}`);
    all('button[data-theme]').forEach((button) => {
      button.setAttribute('aria-checked', String(button.dataset.theme === selected));
    });
  };

  const closeThemeMenu = (animated = true) => {
    const menu = one('[data-theme-menu]');
    const trigger = one('[data-theme-button]');
    trigger?.setAttribute('aria-expanded', 'false');
    if (!menu || menu.hidden) return;
    const animation = animated ? runAnimation(menu, [{ opacity: 1, transform: 'translate3d(0,0,0) scale(1)' }, { opacity: 0, transform: 'translate3d(0,-6px,0) scale(.98)' }], { duration: 110 }) : null;
    afterAnimation(animation, () => { menu.hidden = true; });
  };

  const openThemeMenu = () => {
    const menu = one('[data-theme-menu]');
    const trigger = one('[data-theme-button]');
    if (!menu) return;
    menu.hidden = false;
    trigger?.setAttribute('aria-expanded', 'true');
    runAnimation(menu, [{ opacity: 0, transform: 'translate3d(0,-8px,0) scale(.98)' }, { opacity: 1, transform: 'translate3d(0,0,0) scale(1)' }], { duration: 160 });
  };

  setTheme(html.dataset.theme || 'noir');

  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    const themeTrigger = target.closest('[data-theme-button]');
    if (themeTrigger) {
      const menu = one('[data-theme-menu]');
      if (menu?.hidden) openThemeMenu();
      else closeThemeMenu();
      return;
    }

    const themeOption = target.closest('button[data-theme]');
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
  });

  const trapFocus = (event, container) => {
    if (event.key !== 'Tab' || !(container instanceof Element)) return;
    const focusable = all('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])', container).filter((node) => !node.hidden && node.getAttribute('aria-hidden') !== 'true');
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  };

  document.addEventListener('keydown', (event) => {
    const modal = one('[data-contact-modal]');
    const menu = one('[data-mobile-menu]');
    const themes = one('[data-theme-menu]');

    if (modal && !modal.hidden) trapFocus(event, modal);
    else if (menu && !menu.hidden) trapFocus(event, menu);

    if (event.key !== 'Escape') return;
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

  const refreshSectionMetrics = () => {
    const links = all('.desktop-nav a');
    sectionMetrics = links.map((link) => {
      const href = link.getAttribute('href');
      const section = href ? one(href) : null;
      return section ? { href, top: section.offsetTop, link } : null;
    }).filter(Boolean);
    const profileSection = one('[data-github-section]');
    profileTop = profileSection ? profileSection.offsetTop : Number.POSITIVE_INFINITY;
  };

  const activateScrollFeatures = () => {
    const backTop = one('[data-back-top]');
    if (backTop) backTop.classList.toggle('visible', scrollY > 720);

    if (profileTop < scrollY + innerHeight + 800) void loadGithub();

    const marker = scrollY + innerHeight * 0.42;
    let current = sectionMetrics[0]?.href || '';
    sectionMetrics.forEach((section) => { if (section.top <= marker) current = section.href; });
    sectionMetrics.forEach((section) => {
      if (section.href === current) section.link.setAttribute('aria-current', 'page');
      else section.link.removeAttribute('aria-current');
    });
  };

  const refreshLayout = () => {
    refreshSectionMetrics();
    activateScrollFeatures();
  };

  addEventListener('scroll', () => {
    if (scrollFrame) return;
    scrollFrame = requestAnimationFrame(() => {
      scrollFrame = 0;
      activateScrollFeatures();
    });
  }, { passive: true });

  addEventListener('resize', () => {
    if (resizeFrame) return;
    resizeFrame = requestAnimationFrame(() => {
      resizeFrame = 0;
      refreshLayout();
    });
  }, { passive: true });

  requestAnimationFrame(refreshLayout);
})();