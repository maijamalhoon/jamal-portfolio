(() => {
  'use strict';

  const html = document.documentElement;
  const body = document.body;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(pointer: fine)').matches;
  const one = (selector, root = document) => root.querySelector(selector);
  const all = (selector, root = document) => [...root.querySelectorAll(selector)];
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  let commandFocus = null;
  let commandItems = [];
  let activeCommandIndex = 0;
  let pointerFrame = 0;
  let pointerX = -999;
  let pointerY = -999;

  const runAnimation = (node, frames, options) => {
    if (reduceMotion || !node || typeof node.animate !== 'function') return null;
    node.getAnimations().forEach((animation) => animation.cancel());
    return node.animate(frames, {
      fill: 'both',
      easing: 'cubic-bezier(.2,.8,.2,1)',
      ...options,
    });
  };

  const afterAnimation = (animation, callback) => {
    if (!animation) {
      callback();
      return;
    }
    animation.finished.then(callback).catch(callback);
  };

  const syncOverlayState = () => {
    const selectors = ['[data-mobile-menu]', '[data-contact-modal]', '[data-command-modal]'];
    const open = selectors.some((selector) => one(selector)?.hidden === false);
    body.classList.toggle('overlay-open', open);
  };

  const showToast = (message) => {
    const toast = one('[data-toast]');
    if (!toast) return;
    const label = one('span', toast);
    if (label) label.textContent = message;
    toast.hidden = false;
    runAnimation(
      toast,
      [
        { opacity: 0, transform: 'translate3d(-50%,10px,0) scale(.98)' },
        { opacity: 1, transform: 'translate3d(-50%,0,0) scale(1)' },
      ],
      { duration: 180 },
    );
    window.clearTimeout(Number(toast.dataset.hideTimer || 0));
    const timer = window.setTimeout(() => {
      const animation = runAnimation(toast, [{ opacity: 1 }, { opacity: 0 }], { duration: 140 });
      afterAnimation(animation, () => { toast.hidden = true; });
    }, 2200);
    toast.dataset.hideTimer = String(timer);
  };

  const copyValue = async (value, label) => {
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

  const visibleCommandItems = () => commandItems.filter((item) => !item.hidden);

  const setActiveCommand = (index) => {
    const visible = visibleCommandItems();
    if (!visible.length) return;
    activeCommandIndex = (index + visible.length) % visible.length;
    commandItems.forEach((item) => item.classList.remove('is-active'));
    visible[activeCommandIndex].classList.add('is-active');
  };

  const filterCommands = (query = '') => {
    const normalized = query.trim().toLowerCase();
    commandItems.forEach((item) => {
      const searchable = `${item.textContent || ''} ${item.dataset.commandKeywords || ''}`.toLowerCase();
      item.hidden = normalized ? !searchable.includes(normalized) : false;
    });
    const visible = visibleCommandItems();
    const empty = one('[data-command-empty]');
    if (empty) empty.hidden = visible.length > 0;
    activeCommandIndex = 0;
    setActiveCommand(0);
  };

  const setCommandMenu = (open) => {
    const modal = one('[data-command-modal]');
    const input = one('[data-command-input]');
    if (!modal || modal.hidden === !open) return;

    if (open) {
      commandFocus = document.activeElement;
      modal.hidden = false;
      filterCommands('');
      if (input) input.value = '';
      syncOverlayState();
      runAnimation(one('.modal-backdrop', modal), [{ opacity: 0 }, { opacity: 1 }], { duration: 170 });
      runAnimation(
        one('section', modal),
        [
          { opacity: 0, transform: 'translate3d(0,-10px,0) scale(.98)' },
          { opacity: 1, transform: 'translate3d(0,0,0) scale(1)' },
        ],
        { duration: 230 },
      );
      window.setTimeout(() => input?.focus(), 35);
      return;
    }

    const panel = one('section', modal);
    const animation = runAnimation(
      panel,
      [
        { opacity: 1, transform: 'translate3d(0,0,0) scale(1)' },
        { opacity: 0, transform: 'translate3d(0,-8px,0) scale(.985)' },
      ],
      { duration: 145 },
    );
    runAnimation(one('.modal-backdrop', modal), [{ opacity: 1 }, { opacity: 0 }], { duration: 145 });
    afterAnimation(animation, () => {
      modal.hidden = true;
      syncOverlayState();
      if (commandFocus instanceof HTMLElement) commandFocus.focus();
    });
  };

  const executeCommand = (action) => {
    if (action === 'contact') {
      setCommandMenu(false);
      window.setTimeout(() => one('[data-contact-open]')?.click(), reduceMotion ? 0 : 130);
      return;
    }

    if (action === 'theme') {
      const order = ['noir', 'cobalt', 'ember', 'ivory'];
      const current = order.indexOf(html.dataset.theme || 'noir');
      const next = order[(current + 1) % order.length];
      one(`button[data-theme="${next}"]`)?.click();
      showToast(`${next[0].toUpperCase()}${next.slice(1)} theme applied`);
      setCommandMenu(false);
      return;
    }

    if (action === 'copy-email') {
      void copyValue('jamalarain186@gmail.com', 'Email address');
      setCommandMenu(false);
    }
  };

  commandItems = all('[data-command-item]');
  filterCommands('');

  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    if (target.closest('[data-command-open]')) {
      setCommandMenu(true);
      return;
    }

    if (target.closest('[data-command-close]')) {
      setCommandMenu(false);
      return;
    }

    const actionNode = target.closest('[data-command-action]');
    if (actionNode) {
      executeCommand(actionNode.dataset.commandAction || '');
      return;
    }

    const commandLink = target.closest('a[data-command-item]');
    if (commandLink) setCommandMenu(false);
  });

  one('[data-command-input]')?.addEventListener('input', (event) => {
    filterCommands(event.target.value);
  });

  document.addEventListener('keydown', (event) => {
    const modal = one('[data-command-modal]');
    const commandOpen = modal?.hidden === false;

    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      setCommandMenu(!commandOpen);
      return;
    }

    if (!commandOpen) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      setCommandMenu(false);
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveCommand(activeCommandIndex + 1);
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveCommand(activeCommandIndex - 1);
      return;
    }

    if (event.key === 'Enter') {
      const active = visibleCommandItems()[activeCommandIndex];
      if (active && document.activeElement === one('[data-command-input]')) {
        event.preventDefault();
        active.click();
      }
      return;
    }

    if (event.key === 'Tab') {
      const focusable = all('input,a[href],button:not([disabled])', modal).filter((node) => !node.hidden);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  const progress = one('[data-scroll-progress]');
  const updateScrollProgress = () => {
    if (!progress) return;
    const max = Math.max(document.documentElement.scrollHeight - innerHeight, 1);
    const ratio = clamp(scrollY / max, 0, 1);
    progress.style.transform = `scaleX(${ratio})`;
  };
  addEventListener('scroll', updateScrollProgress, { passive: true });
  addEventListener('resize', updateScrollProgress, { passive: true });
  updateScrollProgress();

  if (finePointer) {
    const glow = one('[data-pointer-glow]');
    body.classList.add('has-pointer');
    addEventListener('pointermove', (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (pointerFrame) return;
      pointerFrame = requestAnimationFrame(() => {
        pointerFrame = 0;
        if (glow) glow.style.transform = `translate3d(${pointerX - 210}px,${pointerY - 210}px,0)`;
      });
    }, { passive: true });

    all('[data-spotlight-card]').forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
        card.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
      }, { passive: true });
    });

    if (!reduceMotion) {
      const applyTilt = (node, event, intensity = 5) => {
        const rect = node.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        node.style.transform = `perspective(1000px) rotateX(${-y * intensity}deg) rotateY(${x * intensity}deg) translateY(-3px)`;
      };

      all('[data-project-card]').forEach((card) => {
        card.addEventListener('pointermove', (event) => applyTilt(card, event, 3.2), { passive: true });
        card.addEventListener('pointerleave', () => { card.style.transform = ''; });
      });

      const portrait = one('[data-portrait-tilt]');
      portrait?.addEventListener('pointermove', (event) => applyTilt(portrait, event, 7), { passive: true });
      portrait?.addEventListener('pointerleave', () => { portrait.style.transform = ''; });

      all('.magnetic').forEach((node) => {
        node.addEventListener('pointermove', (event) => {
          const rect = node.getBoundingClientRect();
          const x = (event.clientX - rect.left - rect.width / 2) * 0.1;
          const y = (event.clientY - rect.top - rect.height / 2) * 0.14;
          node.style.transform = `translate3d(${x}px,${y}px,0)`;
        }, { passive: true });
        node.addEventListener('pointerleave', () => { node.style.transform = ''; });
      });
    }
  }

  const counterObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const node = entry.target;
        const target = Number(node.dataset.counter || 0);
        const suffix = node.dataset.suffix || '';
        if (reduceMotion) {
          node.textContent = `${target}${suffix}`;
        } else {
          const started = performance.now();
          const duration = 900;
          const step = (now) => {
            const progressValue = clamp((now - started) / duration, 0, 1);
            const eased = 1 - Math.pow(1 - progressValue, 3);
            node.textContent = `${Math.round(target * eased)}${suffix}`;
            if (progressValue < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
        observer.unobserve(node);
      });
    }, { threshold: 0.45 })
    : null;

  all('[data-counter]').forEach((counter) => {
    if (counterObserver) counterObserver.observe(counter);
    else counter.textContent = `${counter.dataset.counter || 0}${counter.dataset.suffix || ''}`;
  });

  const roleNode = one('[data-role-rotator]');
  if (roleNode && !reduceMotion) {
    const roles = ['Finance operations', 'Systems thinking', 'Product craft', 'Process control'];
    let roleIndex = 0;
    window.setInterval(() => {
      roleIndex = (roleIndex + 1) % roles.length;
      const animation = runAnimation(
        roleNode,
        [
          { opacity: 1, transform: 'translateY(0)' },
          { opacity: 0, transform: 'translateY(-5px)' },
        ],
        { duration: 150 },
      );
      afterAnimation(animation, () => {
        roleNode.textContent = roles[roleIndex];
        runAnimation(
          roleNode,
          [
            { opacity: 0, transform: 'translateY(5px)' },
            { opacity: 1, transform: 'translateY(0)' },
          ],
          { duration: 180 },
        );
      });
    }, 2600);
  }

  const timeNode = one('[data-karachi-time]');
  const updateKarachiTime = () => {
    if (!timeNode) return;
    const formatted = new Intl.DateTimeFormat('en-PK', {
      timeZone: 'Asia/Karachi',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    }).format(new Date());
    timeNode.textContent = `Karachi · ${formatted}`;
  };
  updateKarachiTime();
  window.setInterval(updateKarachiTime, 30000);

  const projectCards = all('[data-project-card]');
  const projectCount = one('[data-project-count]');
  all('[data-project-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.projectFilter || 'all';
      all('[data-project-filter]').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      let visible = 0;
      projectCards.forEach((card) => {
        const matches = filter === 'all' || (card.dataset.category || '').includes(filter);
        card.hidden = !matches;
        if (matches) {
          visible += 1;
          runAnimation(
            card,
            [
              { opacity: 0, transform: 'translate3d(0,12px,0) scale(.985)' },
              { opacity: 1, transform: 'translate3d(0,0,0) scale(1)' },
            ],
            { duration: 260 },
          );
        }
      });
      if (projectCount) projectCount.textContent = String(visible);
    });
  });

  const lab = one('[data-reconcile-lab]');
  if (lab) {
    const defaults = { statement: 1250000, ledger: 1290000, deposits: 65000, payments: 25000 };
    const formatter = new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      maximumFractionDigits: 0,
    });
    const inputs = Object.fromEntries(
      all('[data-reconcile-input]', lab).map((input) => [input.dataset.reconcileInput, input]),
    );
    const adjustedNode = one('[data-reconcile-adjusted]', lab);
    const ledgerNode = one('[data-reconcile-ledger]', lab);
    const differenceNode = one('[data-reconcile-difference]', lab);
    const statusNode = one('[data-reconcile-status]', lab);

    const valueOf = (key) => {
      const value = Number(inputs[key]?.value || 0);
      return Number.isFinite(value) ? Math.max(value, 0) : 0;
    };

    const calculate = () => {
      const statement = valueOf('statement');
      const ledger = valueOf('ledger');
      const deposits = valueOf('deposits');
      const payments = valueOf('payments');
      const adjusted = statement + deposits - payments;
      const difference = adjusted - ledger;
      const balanced = Math.abs(difference) < 0.5;

      if (adjustedNode) adjustedNode.textContent = formatter.format(adjusted);
      if (ledgerNode) ledgerNode.textContent = formatter.format(ledger);
      if (differenceNode) differenceNode.textContent = formatter.format(Math.abs(difference));
      if (statusNode) {
        statusNode.classList.toggle('is-balanced', balanced);
        statusNode.classList.toggle('is-unbalanced', !balanced);
        const title = one('strong', statusNode);
        const copy = one('span', statusNode);
        if (title) title.textContent = balanced ? 'Balanced' : 'Review difference';
        if (copy) copy.textContent = balanced
          ? 'Adjusted bank equals the ledger'
          : `${difference > 0 ? 'Bank is higher' : 'Ledger is higher'} by ${formatter.format(Math.abs(difference))}`;
      }
    };

    Object.values(inputs).forEach((input) => input?.addEventListener('input', calculate));
    one('[data-reconcile-reset]', lab)?.addEventListener('click', () => {
      Object.entries(defaults).forEach(([key, value]) => {
        if (inputs[key]) inputs[key].value = String(value);
      });
      calculate();
      showToast('Reconciliation values reset');
    });
    calculate();
  }
})();
