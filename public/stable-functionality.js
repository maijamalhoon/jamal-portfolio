(() => {
  'use strict';

  const one = (selector, root = document) => root.querySelector(selector);
  const all = (selector, root = document) => [...root.querySelectorAll(selector)];

  const formatMoney = (value) =>
    new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      maximumFractionDigits: 0,
    }).format(Number.isFinite(value) ? value : 0);

  const readNumber = (selector) => {
    const field = one(selector);
    if (!(field instanceof HTMLInputElement)) return 0;
    const value = Number(field.value.replace(/,/g, ''));
    return Number.isFinite(value) ? value : 0;
  };

  const updateKarachiTime = () => {
    const node = one('[data-jy-karachi-time]');
    if (!node) return;
    node.textContent = new Intl.DateTimeFormat('en-PK', {
      timeZone: 'Asia/Karachi',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).format(new Date());
  };

  const setupProjectFilters = () => {
    const filters = all('[data-jy-filter]');
    const cards = all('[data-jy-project]');
    const count = one('[data-jy-project-count]');
    if (!filters.length || !cards.length) return;

    const applyFilter = (filter) => {
      let visible = 0;
      cards.forEach((card) => {
        const category = card.getAttribute('data-jy-category') || '';
        const show = filter === 'all' || category === filter;
        card.hidden = !show;
        if (show) visible += 1;
      });

      filters.forEach((button) => {
        button.setAttribute('aria-pressed', String(button.getAttribute('data-jy-filter') === filter));
      });

      if (count) count.textContent = String(visible);
    };

    filters.forEach((button) => {
      button.addEventListener('click', () => applyFilter(button.getAttribute('data-jy-filter') || 'all'));
    });

    applyFilter('all');
  };

  const setupReconciliationTool = () => {
    const form = one('[data-jy-reconcile-form]');
    if (!(form instanceof HTMLFormElement)) return;

    const adjustedBankNode = one('[data-jy-adjusted-bank]');
    const adjustedBookNode = one('[data-jy-adjusted-book]');
    const differenceNode = one('[data-jy-difference]');
    const statusNode = one('[data-jy-status]');

    const calculate = () => {
      const bank = readNumber('[data-jy-bank]');
      const deposits = readNumber('[data-jy-deposits]');
      const outstanding = readNumber('[data-jy-outstanding]');
      const ledger = readNumber('[data-jy-ledger]');
      const credits = readNumber('[data-jy-credits]');
      const charges = readNumber('[data-jy-charges]');

      const adjustedBank = bank + deposits - outstanding;
      const adjustedBook = ledger + credits - charges;
      const difference = adjustedBank - adjustedBook;
      const reconciled = Math.abs(difference) < 1;

      if (adjustedBankNode) adjustedBankNode.textContent = formatMoney(adjustedBank);
      if (adjustedBookNode) adjustedBookNode.textContent = formatMoney(adjustedBook);
      if (differenceNode) differenceNode.textContent = formatMoney(difference);
      if (statusNode) {
        statusNode.textContent = reconciled ? 'Reconciled' : 'Review difference';
        statusNode.setAttribute('data-state', reconciled ? 'ok' : 'review');
      }
    };

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      calculate();
    });

    form.addEventListener('reset', () => {
      requestAnimationFrame(calculate);
    });

    all('input', form).forEach((field) => field.addEventListener('input', calculate));
    calculate();
  };

  updateKarachiTime();
  setInterval(updateKarachiTime, 30000);
  setupProjectFilters();
  setupReconciliationTool();
})();
