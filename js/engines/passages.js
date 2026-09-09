WC2.engines.passages = function (spec, mount) {
  const showOrig = WC2.state.langOrig;
  const grid = WC2.el('div', { class: 'passages' + (spec.positions ? ' dispute-cards' : '') });
  let anyOrig = false;
  (spec.passages || spec.positions || []).forEach(function (p) {
    const card = WC2.el('article', { class: 'passage' + (showOrig && p.original ? ' show-orig' : '') });
    const head = WC2.el('header');
    head.appendChild(WC2.el('h3', { text: p.scholar || p.title || p.who || '' }));
    const who = [p.who, p.years, p.work].filter(Boolean).join(' · ');
    if (who) head.appendChild(WC2.el('div', { class: 'who', text: who }));
    card.appendChild(head);
    if (p.summary) card.appendChild(WC2.el('p', { class: 'who', html: p.summary }));
    if (p.html || p.text) {
      card.appendChild(WC2.el('div', { class: 'body eng', html: p.html || p.text }));
    }
    if (p.original) {
      anyOrig = true;
      card.appendChild(WC2.el('div', { class: 'body orig', html: p.original }));
    }
    if (p.source) card.appendChild(WC2.el('div', { class: 'credit', text: p.source }));
    grid.appendChild(card);
  });
  if (anyOrig) {
    const tog = WC2.el('button', {
      class: 'tbtn toggle-lang',
      type: 'button',
      text: showOrig ? 'Show English' : 'Show original language'
    });
    tog.addEventListener('click', function () {
      WC2.state.langOrig = !WC2.state.langOrig;
      WC2.saveState();
      grid.querySelectorAll('.passage').forEach(function (c) {
        if (c.querySelector('.orig')) c.classList.toggle('show-orig', WC2.state.langOrig);
      });
      tog.textContent = WC2.state.langOrig ? 'Show English' : 'Show original language';
    });
    mount.appendChild(tog);
  }
  mount.appendChild(grid);
  if (spec.ask) {
    mount.appendChild(WC2.el('p', { class: 'note', html: spec.ask }));
  }
};
