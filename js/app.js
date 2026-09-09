WC2.parseRoute = function () {
  const raw = (location.hash || '#/').replace(/^#/, '');
  const parts = raw.split('/').filter(Boolean);
  if (!parts.length) return { view: 'intro', room: 'home' };
  if (parts[0] === 'overlay') return { view: 'overlay', room: parts[1] || 'one-many' };
  if (parts[0] === 'review') return { view: 'review', room: parts[1] || 'home' };
  if (parts[0] === 'week') {
    return { view: 'week', week: Number(parts[1]), room: parts[2] || 'home' };
  }
  return { view: 'intro', room: parts[0] };
};

WC2.pathOf = function (r) {
  if (r.view === 'intro') return r.room === 'home' ? '#/' : '#/' + r.room;
  if (r.view === 'overlay') return '#/overlay/' + r.room;
  if (r.view === 'review') return r.room === 'home' ? '#/review' : '#/review/' + r.room;
  if (r.room === 'home') return '#/week/' + r.week;
  return '#/week/' + r.week + '/' + r.room;
};

WC2.findRoom = function (week, id) {
  if (!week) return null;
  if (id === 'home') return { id: 'home', type: 'home', title: week.title };
  return (week.rooms || []).find(function (r) { return r.id === id; }) || null;
};

WC2.renderNav = function (route) {
  const nav = document.getElementById('nav-list');
  WC2.clear(nav);
  function link(href, label, opts) {
    opts = opts || {};
    const a = WC2.el('a', { href: href, class: (opts.class || '') + (location.hash === href || (!location.hash && href === '#/') ? ' active' : '') });
    if (opts.num) a.appendChild(WC2.el('span', { class: 'num', text: String(opts.num) }));
    a.appendChild(document.createTextNode(label));
    if (opts.locked) {
      a.classList.add('locked');
      a.appendChild(WC2.el('span', { class: 'lock', text: ' · opens ' + WC2.unlockLabel(opts.week) }));
    }
    return a;
  }
  nav.appendChild(WC2.el('div', { class: 'nav-kicker', text: 'Begin' }));
  nav.appendChild(link('#/', 'Introduction'));
  nav.appendChild(link('#/overlay/one-many', 'The One and the Many', { class: 'sub' }));

  const bands = [
    { label: 'Medieval to 1450', weeks: [1, 2, 3, 4] },
    { label: '1450 to 1750', weeks: [5, 6, 7, 8] },
    { label: '1750 to 1850', weeks: [9, 10, 11, 12] }
  ];
  bands.forEach(function (b) {
    nav.appendChild(WC2.el('div', { class: 'nav-kicker', text: b.label }));
    b.weeks.forEach(function (id) {
      const w = WC2.weeks[id];
      if (!w) return;
      const locked = !WC2.isUnlocked(id);
      nav.appendChild(link('#/week/' + id, w.short || w.title, { num: id, locked: locked, week: id }));
      if (route.view === 'week' && route.week === id && !locked) {
        (w.rooms || []).forEach(function (r) {
          if (r.nav === false) return;
          if (r.review && !WC2.isReviewUnlocked(id)) return;
          nav.appendChild(link('#/week/' + id + '/' + r.id, r.nav || r.title, { class: 'sub' }));
        });
      }
    });
  });
  nav.appendChild(WC2.el('div', { class: 'nav-kicker', text: 'End' }));
  nav.appendChild(link('#/review', 'Review', { locked: !WC2.isUnlocked(14), week: 14 }));
};

WC2.setPeriod = function (p) {
  document.documentElement.setAttribute('data-period', p || 'intro');
};

WC2.renderFaculty = function () {
  const bar = document.getElementById('faculty');
  if (!WC2.faculty) {
    document.documentElement.classList.remove('faculty-mode');
    return;
  }
  document.documentElement.classList.add('faculty-mode');
  WC2.clear(bar);
  bar.appendChild(WC2.el('strong', { text: 'Faculty preview' }));
  const lab = WC2.el('label', { text: 'View as ' });
  const date = WC2.el('input', { type: 'date', value: WC2.todayISO() });
  date.addEventListener('change', function () {
    WC2._fakeISO = date.value;
    WC2.persistFaculty();
    WC2.render();
  });
  lab.appendChild(date);
  bar.appendChild(lab);
  const all = WC2.el('button', { type: 'button', text: WC2.facultyUnlockAll ? 'Use calendar' : 'Unlock all' });
  all.addEventListener('click', function () {
    WC2.facultyUnlockAll = !WC2.facultyUnlockAll;
    WC2.persistFaculty();
    WC2.render();
  });
  bar.appendChild(all);
  bar.appendChild(WC2.el('span', { text: 'Today (Chicago): ' + WC2.todayISO() + ' · week index ' + WC2.weekIndex() }));
};

WC2.lockedScreen = function (weekNum) {
  const d = WC2.el('div', { class: 'locked-msg' });
  d.appendChild(WC2.el('p', { class: 'kicker', text: 'Not yet' }));
  d.appendChild(WC2.el('h2', { class: 'lesson', text: 'This week opens ' + WC2.unlockLabel(weekNum) }));
  d.appendChild(WC2.el('p', { text: 'This week opens on that Monday. Until then, use the introduction and any weeks already opened.' }));
  return d;
};

WC2.epigraphEl = function (week) {
  if (!week || !week.epigraph || !week.epigraph.text) return null;
  const e = week.epigraph;
  const p = WC2.el('p', { class: 'epigraph' });
  p.appendChild(document.createTextNode('\u201c' + e.text + '\u201d'));
  p.appendChild(WC2.el('cite', { text: '\u2014 ' + e.who + (e.source ? ', ' + e.source : '') }));
  return p;
};

WC2.renderHome = function (week, mount) {
  mount.appendChild(WC2.el('p', { class: 'kicker', text: week.kicker || ('Week ' + week.id) }));
  mount.appendChild(WC2.el('h2', { class: 'lesson', text: week.title }));
  const epi = WC2.epigraphEl(week);
  if (epi) mount.appendChild(epi);
  const pad = (week.id < 10 ? '0' : '') + week.id;
  mount.appendChild(WC2.figure({
    src: 'images/w' + pad + '-atmosphere.jpg',
    slot: 'w' + pad + '-atmosphere',
    alt: week.title,
    className: 'atmosphere'
  }));
  if (week.lede) mount.appendChild(WC2.el('p', { class: 'lede', html: week.lede }));
  if (week.about) mount.appendChild(WC2.el('div', { class: 'prose', html: week.about }));
  const grid = WC2.el('div', { class: 'rooms' });
  (week.rooms || []).forEach(function (r) {
    if (r.review && !WC2.isReviewUnlocked(week.id)) return;
    const a = WC2.el('a', { class: 'door', href: '#/week/' + week.id + '/' + r.id });
    a.appendChild(WC2.el('div', { class: 'k', text: r.kind || r.type }));
    a.appendChild(WC2.el('h3', { text: r.title }));
    if (r.blurb) a.appendChild(WC2.el('p', { text: r.blurb }));
    grid.appendChild(a);
  });
  mount.appendChild(grid);
};

WC2.renderRoom = function (week, room, mount) {
  mount.appendChild(WC2.el('p', { class: 'kicker', text: 'Week ' + week.id + ' · ' + (room.kind || room.type) }));
  mount.appendChild(WC2.el('h2', { class: 'lesson', text: room.title }));
  const epi = WC2.epigraphEl(week);
  if (epi) mount.appendChild(epi);
  if (room.lede) mount.appendChild(WC2.el('p', { class: 'lede', html: room.lede }));

  function body() {
    if (room.html) mount.appendChild(WC2.el('div', { class: 'prose', html: room.html }));
    if (room.type === 'map') WC2.engines.map(Object.assign({ week: week.id, filter: WC2.periodOf(week.id) }, room), mount);
    else if (room.type === 'battle') WC2.engines.battle(room, mount);
    else if (room.type === 'reconstruction') WC2.engines.reconstruction(room, mount);
    else if (room.type === 'passages' || room.type === 'dispute') WC2.engines.passages(room, mount);
    else if (room.type === 'contest') WC2.engines.contest(room, mount);
    else if (room.type === 'connections') {
      const ul = WC2.el('ul', { class: 'connections' });
      (WC2.arts[week.id] || room.items || []).forEach(function (c) {
        ul.appendChild(WC2.el('li', { html: '<strong>' + c.work + '</strong>' + (c.of ? ' is an example of ' + c.of : '') + (c.because ? ' because ' + c.because : '') }));
      });
      mount.appendChild(ul);
    } else if (room.type === 'resources') {
      const ul = WC2.el('ul', { class: 'resources' });
      (room.items || []).forEach(function (it) {
        ul.appendChild(WC2.el('li', { html: it }));
      });
      mount.appendChild(ul);
    }
    if (room.after) mount.appendChild(WC2.el('div', { class: 'prose', html: room.after }));
  }

  if (room.question) {
    WC2.engines.question(room.question, mount, function () {
      const more = mount.querySelector('[data-rest]');
      if (more) more.hidden = false;
    });
    const rest = WC2.el('div', { 'data-rest': '1' });
    if (!WC2.state.answers[room.question.id]) rest.hidden = true;
    mount.appendChild(rest);
    const innerMount = rest;
    const savedMount = mount;
    mount = innerMount;
    body();
    mount = savedMount;
  } else {
    body();
  }
};

WC2.renderIntro = function (room, mount) {
  const intro = WC2.intro;
  if (!intro) {
    mount.appendChild(WC2.el('p', { text: 'Introduction is not loaded.' }));
    return;
  }
  if (room === 'home') {
    mount.appendChild(WC2.el('p', { class: 'kicker', text: intro.kicker }));
    mount.appendChild(WC2.el('h2', { class: 'lesson', text: intro.title }));
    mount.appendChild(WC2.el('p', { class: 'lede', html: intro.lede }));
    mount.appendChild(WC2.el('div', { class: 'prose', html: intro.about }));
    const doors = WC2.el('div', { class: 'rooms' });
    (intro.rooms || []).forEach(function (r) {
      const href = r.overlay ? '#/overlay/' + r.id : '#/' + r.id;
      const a = WC2.el('a', { class: 'door', href: href });
      a.appendChild(WC2.el('div', { class: 'k', text: r.kind || 'intro' }));
      a.appendChild(WC2.el('h3', { text: r.title }));
      if (r.blurb) a.appendChild(WC2.el('p', { text: r.blurb }));
      doors.appendChild(a);
    });
    mount.appendChild(doors);
    mount.appendChild(WC2.el('p', { class: 'period-label', text: 'The twelve weeks' }));
    const grid = WC2.el('div', { class: 'grid-3x4 rooms' });
    for (let i = 1; i <= 12; i++) {
      const w = WC2.weeks[i];
      if (!w) continue;
      const locked = !WC2.isUnlocked(i);
      const a = WC2.el('a', { class: 'door' + (locked ? ' locked' : ''), href: '#/week/' + i });
      a.appendChild(WC2.el('div', { class: 'k', text: 'Week ' + i }));
      a.appendChild(WC2.el('h3', { text: w.short || w.title }));
      a.appendChild(WC2.el('p', { text: locked ? ('Opens ' + WC2.unlockLabel(i)) : (w.lens || '') }));
      grid.appendChild(a);
    }
    mount.appendChild(grid);
    return;
  }
  const r = (intro.rooms || []).find(function (x) { return x.id === room; });
  if (!r) {
    mount.appendChild(WC2.el('p', { text: 'Unknown room.' }));
    return;
  }
  mount.appendChild(WC2.el('p', { class: 'kicker', text: 'Introduction' }));
  mount.appendChild(WC2.el('h2', { class: 'lesson', text: r.title }));
  if (r.question) {
    WC2.engines.question(r.question, mount, function () {
      const rest = mount.querySelector('[data-rest]');
      if (rest) rest.hidden = false;
    });
  }
  const rest = WC2.el('div', { 'data-rest': '1' });
  if (r.question && !WC2.state.answers[r.question.id]) rest.hidden = true;
  if (r.html) rest.appendChild(WC2.el('div', { class: 'prose', html: r.html }));
  if (r.type === 'passages' || r.passages) WC2.engines.passages(r, rest);
  if (r.type === 'map') WC2.engines.map(r, rest);
  mount.appendChild(rest);
};

WC2.renderOverlay = function (id, mount) {
  const o = WC2.overlay && WC2.overlay[id];
  if (!o) {
    mount.appendChild(WC2.el('p', { text: 'Overlay not loaded.' }));
    return;
  }
  mount.appendChild(WC2.el('p', { class: 'kicker', text: 'Quiet overlay' }));
  mount.appendChild(WC2.el('h2', { class: 'lesson', text: o.title }));
  mount.appendChild(WC2.el('div', { class: 'prose one-many', html: o.html }));
};

WC2.renderReview = function (mount) {
  const rev = WC2.review;
  mount.appendChild(WC2.el('p', { class: 'kicker', text: 'Week 14' }));
  mount.appendChild(WC2.el('h2', { class: 'lesson', text: (rev && rev.title) || 'Review' }));
  if (rev && rev.html) mount.appendChild(WC2.el('div', { class: 'prose', html: rev.html }));
  if (rev && (rev.passages || rev.positions)) WC2.engines.passages(rev, mount);
};

WC2.applyNavFilter = function () {
  const find = document.getElementById('find');
  const q = (find && find.value ? find.value : '').toLowerCase();
  document.querySelectorAll('#nav-list a').forEach(function (a) {
    a.style.display = !q || a.textContent.toLowerCase().indexOf(q) !== -1 ? '' : 'none';
  });
};

WC2.titleFor = function (route) {
  const base = 'Western Civilization II';
  if (route.view === 'overlay') {
    const o = WC2.overlay && WC2.overlay[route.room];
    return (o ? o.title : 'Overlay') + ' \u00b7 ' + base;
  }
  if (route.view === 'intro') {
    if (route.room === 'home') return base;
    const r = ((WC2.intro && WC2.intro.rooms) || []).find(function (x) { return x.id === route.room; });
    return (r ? r.title : 'Introduction') + ' \u00b7 ' + base;
  }
  if (route.view === 'week') {
    const w = WC2.weeks[route.week];
    if (!w) return base;
    if (route.room === 'home') return w.title + ' \u00b7 ' + base;
    const room = WC2.findRoom(w, route.room);
    return (room ? room.title + ' \u00b7 ' + w.title : w.title) + ' \u00b7 ' + base;
  }
  return base;
};

WC2.render = function () {
  const route = WC2.parseRoute();
  const main = document.getElementById('main');
  const wrap = WC2.el('div', { class: 'wrap' });
  WC2.clear(main);
  main.appendChild(wrap);

  if (route.view === 'intro') {
    WC2.setPeriod('intro');
    WC2.renderIntro(route.room, wrap);
  } else if (route.view === 'overlay') {
    WC2.setPeriod('intro');
    WC2.renderOverlay(route.room, wrap);
  } else if (route.view === 'review') {
    if (!WC2.isUnlocked(14)) {
      WC2.setPeriod('modern');
      wrap.appendChild(WC2.lockedScreen(14));
    } else {
      WC2.setPeriod('modern');
      WC2.renderReview(wrap);
    }
  } else if (route.view === 'week') {
    const week = WC2.weeks[route.week];
    WC2.setPeriod(WC2.periodOf(route.week));
    if (!week) {
      wrap.appendChild(WC2.el('p', { text: 'Week not loaded.' }));
    } else if (!WC2.isUnlocked(route.week)) {
      wrap.appendChild(WC2.lockedScreen(route.week));
    } else if (route.room === 'home') {
      WC2.renderHome(week, wrap);
    } else {
      const room = WC2.findRoom(week, route.room);
      if (!room) wrap.appendChild(WC2.el('p', { text: 'Room not found.' }));
      else if (room.review && !WC2.isReviewUnlocked(route.week)) wrap.appendChild(WC2.lockedScreen(route.week + 1));
      else WC2.renderRoom(week, room, wrap);
    }
  }

  WC2.renderNav(route);
  WC2.applyNavFilter();
  WC2.renderFaculty();
  document.title = WC2.titleFor(route);
  WC2.markSeen(WC2.pathOf(route));
  WC2.track(WC2.pathOf(route), document.title);
};

WC2.bindChrome = function () {
  document.getElementById('b-nav').addEventListener('click', function () {
    document.documentElement.classList.toggle('nav-open');
  });
  document.getElementById('nav-backdrop').addEventListener('click', function () {
    document.documentElement.classList.remove('nav-open');
  });
  const themeBtn = document.getElementById('b-theme');
  WC2.paintTheme = function () {
    const dark = WC2.state.theme === 'dark';
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    themeBtn.textContent = dark ? '\u263e' : '\u2600';
    themeBtn.setAttribute('aria-label', dark ? 'Switch to light' : 'Switch to dark');
  };
  themeBtn.addEventListener('click', function () {
    WC2.state.theme = WC2.state.theme === 'dark' ? 'light' : 'dark';
    WC2.paintTheme();
    WC2.saveState();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && document.activeElement && document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      document.getElementById('find').focus();
    }
  });
  const find = document.getElementById('find');
  find.addEventListener('input', WC2.applyNavFilter);
  window.addEventListener('hashchange', function () {
    document.documentElement.classList.remove('nav-open');
    WC2.render();
    document.getElementById('main').scrollTop = 0;
  });
};

WC2.boot = function () {
  WC2.loadState();
  WC2.readFacultyFromURL();
  WC2.installGoat();
  WC2.bindChrome();
  WC2.paintTheme();
  WC2.render();
};

document.addEventListener('DOMContentLoaded', WC2.boot);
