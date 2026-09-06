WC2.engines.reconstruction = function (spec, mount) {
  let i = 0;
  const steps = spec.steps || [];
  const nav = WC2.el('div', { class: 'steps' });
  const demo = WC2.el('div', { class: 'demo', id: 'demo-' + spec.demo });
  const prose = WC2.el('div', { class: 'prose' });

  function go(n) {
    i = Math.max(0, Math.min(steps.length - 1, n));
    nav.querySelectorAll('button').forEach(function (b, k) {
      b.classList.toggle('on', k === i);
    });
    const st = steps[i];
    WC2.clear(prose);
    prose.appendChild(WC2.el('h3', { text: st.title }));
    prose.appendChild(WC2.el('div', { html: st.html }));
    const fn = WC2.recon[spec.demo];
    if (fn) fn(demo, st, spec, i);
    WC2.track('#/recon/' + spec.demo + '/' + i, spec.title + ' · ' + st.title);
  }

  steps.forEach(function (st, k) {
    const b = WC2.el('button', { type: 'button', text: (k + 1) + '. ' + st.title });
    b.addEventListener('click', function () { go(k); });
    nav.appendChild(b);
  });
  const row = WC2.el('div', { class: 'battle-ui' });
  const prev = WC2.el('button', { class: 'tbtn', type: 'button', text: 'Previous' });
  const next = WC2.el('button', { class: 'tbtn', type: 'button', text: 'Next' });
  prev.addEventListener('click', function () { go(i - 1); });
  next.addEventListener('click', function () { go(i + 1); });
  row.appendChild(prev);
  row.appendChild(next);

  mount.appendChild(nav);
  mount.appendChild(demo);
  mount.appendChild(prose);
  mount.appendChild(row);
  go(0);
};

WC2.recon['mean-speed'] = function (el, step) {
  const T = (step.T != null) ? step.T : 8;
  const vmax = 12;
  const w = 520, h = 280, p = 40;
  const x = function (t) { return p + (t / T) * (w - 2 * p); };
  const y = function (v) { return h - p - (v / vmax) * (h - 2 * p); };
  const mean = vmax / 2;
  el.innerHTML = '<svg viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-label="Oresme triangle of speeds">' +
    '<rect width="' + w + '" height="' + h + '" fill="transparent"/>' +
    '<polygon points="' + x(0) + ',' + y(0) + ' ' + x(T) + ',' + y(0) + ' ' + x(T) + ',' + y(vmax) + '" fill="rgba(123,45,38,.22)" stroke="#7b2d26" />' +
    '<rect x="' + x(0) + '" y="' + y(mean) + '" width="' + (x(T) - x(0)) + '" height="' + (y(0) - y(mean)) + '" fill="rgba(30,58,95,.18)" stroke="#1e3a5f" />' +
    '<text x="' + (w / 2) + '" y="22" text-anchor="middle" font-size="13" fill="currentColor">Triangle of speeds (uniform acceleration) = rectangle at the mean speed</text>' +
    '<text x="' + x(T) + '" y="' + (y(0) + 16) + '" text-anchor="end" font-size="12">time</text>' +
    '<text x="' + (x(0) - 8) + '" y="' + y(vmax) + '" text-anchor="end" font-size="12">speed</text>' +
    '</svg>';
};

WC2.recon.computus = function (el, step, spec) {
  const year = (step.year != null) ? step.year : 1215;
  const golden = (year % 19) + 1;
  const epact = (11 * (golden - 1)) % 30;
  /* Simplified Julian Easter (Dionysian): */
  const a = year % 19, b = year % 4, c = year % 7;
  const d = (19 * a + 15) % 30;
  const e = (2 * b + 4 * c - d + 34) % 7;
  const month = Math.floor((d + e + 114) / 31);
  const day = ((d + e + 114) % 31) + 1;
  const months = { 3: 'March', 4: 'April' };
  el.innerHTML = '<div style="font-family:var(--sans);font-size:15px;padding:8px 10px">' +
    '<p><strong>Year ' + year + '</strong> (Julian tables the computists actually used)</p>' +
    '<ol>' +
    '<li>Golden number = (year mod 19) + 1 = <strong>' + golden + '</strong></li>' +
    '<li>Epact (age of the moon on 22 March) ≈ <strong>' + epact + '</strong></li>' +
    '<li>Sunday letter from the solar cycle (year mod 28)</li>' +
    '<li>Easter Sunday falls on <strong>' + (months[month] || month) + ' ' + day + '</strong></li>' +
    '</ol>' +
    '<p class="who">The tables exist so that a cathedral chapter in York and a convent in Cologne keep the same feast. That is a legal and liturgical unity, not a hobby of arithmetic.</p>' +
    '</div>';
};

WC2.recon.astrolabe = function (el, step) {
  const rot = (step.rot != null) ? step.rot : 25;
  el.innerHTML = '<svg viewBox="0 0 320 320" role="img" aria-label="Simplified astrolabe">' +
    '<circle cx="160" cy="160" r="148" fill="#e8dcc4" stroke="#6e5c45"/>' +
    '<circle cx="160" cy="160" r="132" fill="none" stroke="#1e3a5f" stroke-dasharray="3 4"/>' +
    '<g transform="rotate(' + rot + ' 160 160)" stroke="#7b2d26" fill="none">' +
    '<circle cx="160" cy="160" r="90"/>' +
    '<polygon points="160,70 168,160 160,250 152,160" fill="rgba(123,45,38,.25)" stroke="#7b2d26"/>' +
    '<circle cx="196" cy="108" r="4" fill="#7b2d26"/>' +
    '<text x="202" y="104" font-size="11" fill="#7b2d26">rete star</text>' +
    '</g>' +
    '<line x1="160" y1="20" x2="160" y2="300" stroke="#2a2118" stroke-width="2"/>' +
    '<text x="160" y="16" text-anchor="middle" font-size="12">alidade</text>' +
    '</svg>' +
    '<p class="who" style="padding:6px 10px">You take the altitude of a known star with the alidade. You rotate the rete (the star map) until that star sits on the almucantar of that altitude. The rule then reads the hour. Time is not a feeling; it is a position on an instrument.</p>';
};

WC2.recon.incline = function (el, step) {
  const t = (step.t != null) ? step.t : 0;
  const s = t * t;
  const maxS = 16;
  const x = 40 + (s / maxS) * 440;
  el.innerHTML = '<svg viewBox="0 0 520 200" role="img" aria-label="Inclined plane">' +
    '<polygon points="40,160 480,40 480,160" fill="rgba(30,58,95,.12)" stroke="#1e3a5f"/>' +
    [1, 4, 9, 16].map(function (d, i) {
      const xx = 40 + (d / 16) * 440;
      return '<line x1="' + xx + '" y1="36" x2="' + xx + '" y2="168" stroke="#a67c2e"/><text x="' + xx + '" y="184" text-anchor="middle" font-size="11">' + d + '</text>';
    }).join('') +
    '<circle cx="' + x + '" cy="' + (160 - (s / 16) * 120) + '" r="9" fill="#7b2d26"/>' +
    '</svg>' +
    '<p class="who" style="padding:6px 10px">Distances 1, 4, 9, 16 in equal times — the odd-number rule. Galileo timed with a water clock and a groove lined with parchment, not with a stopwatch.</p>';
};

WC2.recon.jupiter = function (el, step) {
  const nights = [
    { label: '7 Jan 1610', moons: [-38, -18, 16, 34] },
    { label: '8 Jan', moons: [-30, 12, 22, 40] },
    { label: '10 Jan', moons: [-36, -8, 10, 28] },
    { label: '11 Jan', moons: [-22, -6, 18, 32] },
    { label: '12 Jan', moons: [-40, -14, 8, 24] },
    { label: '13 Jan', moons: [-16, 6, 20, 36] }
  ];
  const n = nights[step.night || 0] || nights[0];
  const dots = n.moons.map(function (x) {
    return '<circle cx="' + (160 + x * 2.2) + '" cy="80" r="4" fill="#1e3a5f"/>';
  }).join('');
  el.innerHTML = '<svg viewBox="0 0 320 140" role="img" aria-label="Jupiter and four attendants">' +
    '<rect width="320" height="140" fill="#1a2230"/>' +
    '<circle cx="160" cy="80" r="16" fill="#d4a04a"/>' +
    dots +
    '<text x="160" y="24" text-anchor="middle" fill="#f6efe2" font-size="13">' + n.label + '</text>' +
    '</svg>' +
    '<p class="who" style="padding:6px 10px">Four attendants change place from night to night and never leave Jupiter. A second center of motion exists. That is what Sidereus Nuncius actually showed, before any later quarrel about tides or comets.</p>';
};

WC2.recon.leeuwenhoek = function (el, step) {
  const mag = step.mag || 1;
  const r = 18 * mag;
  el.innerHTML = '<svg viewBox="0 0 320 200" role="img">' +
    '<rect width="320" height="200" fill="#efe4cf"/>' +
    '<circle cx="160" cy="100" r="' + Math.min(r, 90) + '" fill="rgba(72,102,76,.35)" stroke="#48664c"/>' +
    '<text x="160" y="24" text-anchor="middle" font-size="13">single-lens microscope · about ×' + mag + '</text>' +
    (mag < 30 ? '<text x="160" y="104" text-anchor="middle" font-size="12">louse / mold</text>' : '<text x="160" y="104" text-anchor="middle" font-size="12">animalcules in pepper-water</text>') +
    '</svg>';
};

WC2.recon.lavoisier = function (el, step) {
  el.innerHTML = '<svg viewBox="0 0 420 180" role="img" aria-label="Closed-vessel weighing">' +
    '<line x1="40" y1="50" x2="380" y2="50" stroke="#2a2118" stroke-width="3"/>' +
    '<rect x="70" y="70" width="70" height="50" fill="none" stroke="#1e3a5f"/>' +
    '<rect x="280" y="70" width="70" height="50" fill="none" stroke="#7b2d26"/>' +
    '<text x="105" y="160" text-anchor="middle" font-size="12">vessel + mercury calx</text>' +
    '<text x="315" y="160" text-anchor="middle" font-size="12">weights</text>' +
    '<text x="210" y="28" text-anchor="middle" font-size="13">' + (step.caption || 'Nothing is lost; the air has a part that combines.') + '</text>' +
    '</svg>';
};

WC2.recon.watt = function (el, step) {
  el.innerHTML = '<svg viewBox="0 0 420 200" role="img" aria-label="Indicator diagram">' +
    '<line x1="50" y1="170" x2="380" y2="170" stroke="currentColor"/>' +
    '<line x1="50" y1="170" x2="50" y2="30" stroke="currentColor"/>' +
    '<polyline points="50,50 140,50 300,140 360,155" fill="none" stroke="#7b2d26" stroke-width="2"/>' +
    '<text x="210" y="192" text-anchor="middle" font-size="12">volume</text>' +
    '<text x="16" y="100" font-size="12" transform="rotate(-90 16 100)">pressure</text>' +
    '<text x="210" y="22" text-anchor="middle" font-size="13">Watt indicator: work is the area under the curve</text>' +
    '</svg>' +
    '<p class="who" style="padding:6px 10px">The separate condenser (1765/69) keeps the cylinder hot. The indicator later makes the work visible as a closed figure. Engineers could see what a Newcomen engine wasted.</p>';
};

WC2.recon.jones = function (el) {
  const rows = [
    ['Sanskrit', 'pitā', 'mātā', 'bhrātā', 'trayas'],
    ['Latin', 'pater', 'māter', 'frāter', 'trēs'],
    ['Greek', 'patēr', 'mētēr', 'phratēr', 'treis'],
    ['English', 'father', 'mother', 'brother', 'three']
  ];
  let html = '<table style="width:100%;border-collapse:collapse;font-size:15px">';
  rows.forEach(function (r, i) {
    html += '<tr>' + r.map(function (c) {
      return '<td style="border-bottom:1px solid var(--rule);padding:6px 8px">' + (i === 0 ? '<strong>' + c + '</strong>' : c) + '</td>';
    }).join('') + '</tr>';
  });
  html += '</table>';
  el.innerHTML = html;
};

WC2.recon.printing = function (el, step) {
  const labels = ['punch & matrix', 'composing stick', 'locked form', 'press & tympan'];
  el.innerHTML = '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;font-family:var(--sans);font-size:13px;text-align:center">' +
    labels.map(function (l, i) {
      const on = (step.n || 0) === i;
      return '<div style="border:1px solid var(--rule);border-radius:10px;padding:18px 8px;background:' + (on ? 'color-mix(in srgb,var(--gold) 25%,var(--panel))' : 'var(--panel2)') + '">' + (i + 1) + '<br>' + l + '</div>';
    }).join('') + '</div>';
};

WC2.recon.bookkeeping = function (el, step) {
  el.innerHTML = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;font-size:14px">' +
    '<div><h3>Journal</h3><p>Venice, 10 March. Cloth sold to Giovanni for 40 ducats on account.</p></div>' +
    '<div><h3>Ledger</h3><p><strong>Dr</strong> Giovanni 40<br><strong>Cr</strong> Cloth 40</p><p class="who">Every fact is named twice. The books close only if the world of the firm is internally consistent.</p></div>' +
    '</div>';
};

WC2.recon.pompeii = function (el, step) {
  el.innerHTML = '<svg viewBox="0 0 420 160" role="img">' +
    '<rect width="420" height="160" fill="#e7d9bc"/>' +
    '<rect x="0" y="40" width="420" height="50" fill="#c4b08a"/>' +
    '<rect x="0" y="20" width="420" height="22" fill="#9a8b6e"/>' +
    '<rect x="180" y="70" width="18" height="70" fill="#6e5c45"/>' +
    '<text x="210" y="150" text-anchor="middle" font-size="12">1748: a well shaft hits a theatre. The city is not a myth.</text>' +
    '</svg>';
};
