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

/* ---------------------------------------------------------------------------
   Demonstrations. Each one reads its step so that walking the steps changes
   the figure, not only the paragraph beside it.
   --------------------------------------------------------------------------- */

/* Merton and Oresme: a uniformly increasing speed covers the same distance as a
   steady speed at the mean. The proof is a swap of two equal triangles. */
WC2.recon['mean-speed'] = function (el, step) {
  const stage = step.stage != null ? step.stage : 3;
  const w = 540, h = 300, p = 52;
  const x0 = p, x1 = w - p, y0 = h - p, y1 = p;
  const xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
  const red = '#7b2d26', blue = '#1e3a5f', gold = '#a67c2e';

  const axes =
    '<line x1="' + x0 + '" y1="' + y0 + '" x2="' + x1 + '" y2="' + y0 + '" stroke="currentColor"/>' +
    '<line x1="' + x0 + '" y1="' + y0 + '" x2="' + x0 + '" y2="' + (y1 - 14) + '" stroke="currentColor"/>' +
    '<text x="' + x1 + '" y="' + (y0 + 20) + '" text-anchor="end" font-size="12">time</text>' +
    '<text x="' + (x0 - 6) + '" y="' + (y1 - 18) + '" font-size="12">speed</text>';

  const triangle =
    '<polygon points="' + x0 + ',' + y0 + ' ' + x1 + ',' + y0 + ' ' + x1 + ',' + y1 + '" fill="rgba(123,45,38,.16)" stroke="' + red + '" stroke-width="2"/>' +
    '<text x="' + (x1 - 10) + '" y="' + (y1 - 8) + '" text-anchor="end" font-size="12" fill="' + red + '">final speed</text>';

  const rect = stage >= 2
    ? '<rect x="' + x0 + '" y="' + ym + '" width="' + (x1 - x0) + '" height="' + (y0 - ym) + '" fill="rgba(30,58,95,.16)" stroke="' + blue + '" stroke-width="2"/>' +
      '<line x1="' + x0 + '" y1="' + ym + '" x2="' + x1 + '" y2="' + ym + '" stroke="' + blue + '" stroke-dasharray="4 3"/>' +
      '<text x="' + (x0 + 8) + '" y="' + (ym - 8) + '" font-size="12" fill="' + blue + '">mean speed</text>'
    : '';

  /* The two triangles the argument trades: what the rectangle lends on the left,
     the rectangle is repaid on the right. */
  const swap = stage >= 3
    ? '<polygon points="' + x0 + ',' + y0 + ' ' + x0 + ',' + ym + ' ' + xm + ',' + ym + '" fill="rgba(166,124,46,.55)" stroke="' + gold + '"/>' +
      '<polygon points="' + xm + ',' + ym + ' ' + x1 + ',' + ym + ' ' + x1 + ',' + y1 + '" fill="rgba(166,124,46,.55)" stroke="' + gold + '"/>' +
      '<text x="' + (x0 + 34) + '" y="' + (ym - 26) + '" font-size="12" fill="' + gold + '">lent</text>' +
      '<text x="' + (x1 - 30) + '" y="' + (ym + 30) + '" text-anchor="end" font-size="12" fill="' + gold + '">repaid</text>'
    : '';

  const caption = stage >= 3
    ? 'The two shaded triangles are equal. Take one, give the other: the triangle of speeds and the rectangle at the mean cover the same distance.'
    : (stage >= 2
      ? 'Lay a rectangle at half the final speed over the same time.'
      : 'Speed rising evenly from rest. The area under the line is the distance travelled.');

  el.innerHTML = '<svg viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-label="Triangle of speeds and the rectangle at the mean speed">' +
    triangle + rect + swap + axes +
    '</svg>' +
    '<p class="who" style="padding:6px 10px">' + caption + '</p>';
};

/* Finding Easter: a nineteen-year moon-cycle, an epact, and a Sunday. */
WC2.recon.computus = function (el, step) {
  const year = (step.year != null) ? step.year : 1215;
  const reveal = (step.reveal != null) ? step.reveal : 4;
  const golden = (year % 19) + 1;
  const epact = (11 * (golden - 1)) % 30;
  /* Julian (Dionysian) Easter — the reckoning the computists actually used. */
  const a = year % 19, b = year % 4, c = year % 7;
  const d = (19 * a + 15) % 30;
  const e = (2 * b + 4 * c - d + 34) % 7;
  const month = Math.floor((d + e + 114) / 31);
  const day = ((d + e + 114) % 31) + 1;
  const months = { 3: 'March', 4: 'April' };
  const moonMonth = (d + 21) > 31 ? 4 : 3;
  const moonDay = (d + 21) > 31 ? (d + 21 - 31) : (d + 21);

  /* the nineteen-year dial */
  let dial = '';
  for (let i = 1; i <= 19; i++) {
    const th = (i - 1) / 19 * Math.PI * 2 - Math.PI / 2;
    const R = 52;
    const x = 70 + R * Math.cos(th), y = 78 + R * Math.sin(th);
    const on = i === golden;
    dial += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="' + (on ? 11 : 7) + '" fill="' + (on ? '#7b2d26' : '#e0d6c0') + '" stroke="#6e5c45"/>' +
      (on ? '<text x="' + x.toFixed(1) + '" y="' + (y + 4).toFixed(1) + '" text-anchor="middle" font-size="10" fill="#fff">' + i + '</text>' : '');
  }
  dial += '<text x="70" y="74" text-anchor="middle" font-size="11" fill="#5a4a38">golden</text>' +
    '<text x="70" y="88" text-anchor="middle" font-size="11" fill="#5a4a38">number</text>';

  /* the paschal strip: 22 March to 25 April, the only days Easter can fall on */
  let strip = '';
  const days = [];
  for (let m = 3, dd = 22; !(m === 4 && dd > 25); dd++) {
    days.push([m, dd]);
    if (m === 3 && dd === 31) { m = 4; dd = 0; }
  }
  const sw = 10.6;
  days.forEach(function (md, i) {
    const x = 190 + i * sw;
    const isMoon = reveal >= 2 && md[0] === moonMonth && md[1] === moonDay;
    const isEaster = reveal >= 4 && md[0] === month && md[1] === day;
    strip += '<rect x="' + x.toFixed(1) + '" y="52" width="' + (sw - 1.4).toFixed(1) + '" height="26" ' +
      'fill="' + (isEaster ? '#7b2d26' : (isMoon ? '#d9c89a' : '#f1e8d6')) + '" stroke="#c3b393"/>';
    const tick = (md[0] === 3 && md[1] === 22) ? '22 Mar'
      : ((md[0] === 4 && md[1] === 1) ? '1 Apr'
        : ((md[0] === 4 && md[1] === 25) ? '25 Apr' : null));
    if (tick) {
      strip += '<text x="' + (x + 2).toFixed(1) + '" y="94" font-size="10" fill="#5a4a38" text-anchor="' + (tick === '25 Apr' ? 'end' : 'start') + '">' + tick + '</text>';
    }
    if (isMoon) strip += '<text x="' + (x + 3).toFixed(1) + '" y="44" text-anchor="middle" font-size="12">○</text>';
    if (isEaster) strip += '<text x="' + (x + 3).toFixed(1) + '" y="44" text-anchor="middle" font-size="12" fill="#7b2d26">†</text>';
  });
  strip += '<text x="190" y="26" font-size="12" fill="#5a4a38">22 March – 25 April: the only window Easter may fall in</text>';

  const lines = [
    'Golden number = (' + year + ' mod 19) + 1 = <strong>' + golden + '</strong>',
    'Epact, the moon’s age on 22 March ≈ <strong>' + epact + '</strong>',
    'Sunday letter, from the solar cycle (' + year + ' mod 28)',
    'Easter Sunday: <strong>' + (months[month] || month) + ' ' + day + '</strong>'
  ].slice(0, reveal).map(function (t) { return '<li>' + t + '</li>'; }).join('');

  el.innerHTML = '<svg viewBox="0 0 560 130" role="img" aria-label="Golden-number dial and the paschal window">' +
    '<rect width="560" height="130" fill="transparent"/>' + dial + strip + '</svg>' +
    '<div style="font-family:var(--sans);font-size:14.5px;padding:4px 10px 8px">' +
    '<p style="margin:0 0 6px"><strong>Year ' + year + '</strong>, by the Julian tables</p><ol style="margin:0">' + lines + '</ol>' +
    '<p class="who">The tables exist so that a cathedral chapter in York and a convent in Cologne keep the same feast. That is a legal and liturgical unity before it is arithmetic.</p></div>';
};

WC2.recon.astrolabe = function (el, step) {
  const rot = (step.rot != null) ? step.rot : 25;
  const alt = (step.alt != null) ? step.alt : null;
  el.innerHTML = '<svg viewBox="0 0 320 340" role="img" aria-label="Simplified astrolabe">' +
    '<circle cx="160" cy="170" r="148" fill="#e8dcc4" stroke="#6e5c45"/>' +
    '<circle cx="160" cy="170" r="132" fill="none" stroke="#1e3a5f" stroke-dasharray="3 4"/>' +
    '<circle cx="160" cy="170" r="104" fill="none" stroke="#1e3a5f" stroke-dasharray="2 5"/>' +
    '<circle cx="160" cy="170" r="72" fill="none" stroke="#1e3a5f" stroke-dasharray="2 5"/>' +
    '<text x="160" y="298" text-anchor="middle" font-size="10" fill="#1e3a5f">almucantars · circles of equal altitude for this latitude</text>' +
    '<g transform="rotate(' + rot + ' 160 170)" stroke="#7b2d26" fill="none">' +
    '<circle cx="160" cy="170" r="90"/>' +
    '<polygon points="160,80 168,170 160,260 152,170" fill="rgba(123,45,38,.25)" stroke="#7b2d26"/>' +
    '<circle cx="196" cy="118" r="4" fill="#7b2d26"/>' +
    '<text x="204" y="114" font-size="11" fill="#7b2d26">rete star</text>' +
    '</g>' +
    '<line x1="160" y1="30" x2="160" y2="310" stroke="#2a2118" stroke-width="2"/>' +
    '<text x="160" y="24" text-anchor="middle" font-size="12">alidade</text>' +
    (alt != null ? '<text x="16" y="40" font-size="13" fill="#7b2d26">altitude read: ' + alt + '°</text>' : '') +
    '</svg>' +
    '<p class="who" style="padding:6px 10px">Sight a known star along the alidade and read its altitude. Turn the rete — the star map — until that star sits on the almucantar of that altitude. The rule then gives the hour. Time is not a feeling; it is a position on an instrument.</p>';
};

WC2.recon.incline = function (el, step) {
  const t = (step.t != null) ? step.t : 4;
  const marks = [1, 4, 9, 16];
  const x0 = 50, x1 = 490, yTop = 46, yBot = 168;
  const px = function (d) { return x0 + (d / 16) * (x1 - x0); };
  const py = function (d) { return yTop + (d / 16) * (yBot - yTop); };
  const s = Math.min(16, t * t);

  let ticks = '';
  marks.forEach(function (d, i) {
    const on = s >= d - 0.001;
    ticks += '<line x1="' + px(d) + '" y1="' + (py(d) - 8) + '" x2="' + px(d) + '" y2="' + (yBot + 14) + '" stroke="' + (on ? '#a67c2e' : '#cbbf9f') + '"/>' +
      '<text x="' + px(d) + '" y="' + (yBot + 30) + '" text-anchor="middle" font-size="11" fill="' + (on ? '#6b4f18' : '#a2957a') + '">' + d + '</text>';
    if (i > 0) {
      const prev = marks[i - 1];
      const mid = (px(prev) + px(d)) / 2;
      ticks += '<text x="' + mid + '" y="' + (yBot + 48) + '" text-anchor="middle" font-size="11" fill="#7b2d26">' + (d - prev) + '</text>';
    }
  });
  ticks += '<text x="' + ((px(0) + px(1)) / 2) + '" y="' + (yBot + 48) + '" text-anchor="middle" font-size="11" fill="#7b2d26">1</text>' +
    '<text x="' + x0 + '" y="' + (yBot + 66) + '" font-size="11" fill="#5a4a38">equal times → distances 1, 3, 5, 7: the odd numbers</text>';

  el.innerHTML = '<svg viewBox="0 0 540 250" role="img" aria-label="Ball released down an inclined plane">' +
    '<polygon points="' + x0 + ',' + yTop + ' ' + x1 + ',' + yBot + ' ' + x0 + ',' + yBot + '" fill="rgba(30,58,95,.10)" stroke="#1e3a5f"/>' +
    '<line x1="' + x0 + '" y1="' + yTop + '" x2="' + x1 + '" y2="' + yBot + '" stroke="#1e3a5f" stroke-width="2"/>' +
    ticks +
    '<circle cx="' + px(s) + '" cy="' + (py(s) - 9) + '" r="9" fill="#7b2d26"/>' +
    '<text x="' + x0 + '" y="' + (yTop - 12) + '" font-size="12" fill="#5a4a38">release</text>' +
    '</svg>' +
    '<p class="who" style="padding:6px 10px">From rest the ball covers 1, then 3, then 5, then 7 — so 1, 4, 9, 16 in all. Galileo timed it with a water clock and a groove lined with parchment, and set little frets along the rail so the ear could hear the beats fall evenly.</p>';
};

/* The nights of January 1610 as Sidereus Nuncius reports them: the number of
   attendants visible changes, which is the whole of the evidence. */
WC2.recon.jupiter = function (el, step) {
  const nights = [
    { label: '7 January 1610', stars: [-30, 14, 26], note: 'Three small stars in a line with Jupiter. Galileo takes them for fixed stars.' },
    { label: '8 January', stars: [22, 34, 46], note: 'All three now west of the planet. Fixed stars do not do this.' },
    { label: '10 January', stars: [-34, -18], note: 'Only two, and on the other side. One is hidden behind Jupiter.' },
    { label: '11 January', stars: [-38, -20], note: 'Two again, the farther one much brighter. They are keeping station with Jupiter.' },
    { label: '12 January', stars: [-36, -14, 30], note: 'Three: two east, one west. The planet carries them along.' },
    { label: '13 January', stars: [-40, -22, 18, 32], note: 'Four at once — the full set. Jupiter has attendants of its own.' }
  ];
  const n = nights[step.night || 0] || nights[0];
  const dots = n.stars.map(function (x) {
    return '<circle cx="' + (160 + x * 2.6) + '" cy="86" r="3.4" fill="#f6efe2"/>';
  }).join('');
  el.innerHTML = '<svg viewBox="0 0 320 160" role="img" aria-label="Jupiter and its attendants on one night">' +
    '<rect width="320" height="160" fill="#141b26"/>' +
    '<line x1="20" y1="86" x2="300" y2="86" stroke="#2c3646"/>' +
    '<circle cx="160" cy="86" r="13" fill="#d4a04a"/>' +
    dots +
    '<text x="160" y="30" text-anchor="middle" fill="#f6efe2" font-size="13">' + n.label + '</text>' +
    '<text x="160" y="48" text-anchor="middle" fill="#9aa7b8" font-size="11">' + n.stars.length + ' visible · east ← · → west</text>' +
    '</svg>' +
    '<p class="who" style="padding:6px 10px">' + n.note + ' Four bodies that change place from night to night and never leave Jupiter: a second centre of motion exists. That is what <em>Sidereus Nuncius</em> showed, before any later quarrel about tides or comets.</p>';
};

WC2.recon.leeuwenhoek = function (el, step) {
  const mag = step.mag || 20;
  /* the eye needs a log scale here; ×120 is not six times the picture of ×20 */
  const r = Math.round(26 + 46 * Math.log(mag / 10) / Math.log(14));
  const field = mag < 40
    ? { fill: 'rgba(110,92,69,.55)', label: 'a louse’s leg, a mould', body: '<ellipse cx="160" cy="100" rx="' + (r * 0.72) + '" ry="' + (r * 0.3) + '" fill="#6e5c45" opacity=".8"/>' }
    : (mag < 100
      ? { fill: 'rgba(72,102,76,.35)', label: 'the stinger of a bee, a blood corpuscle', body: '<circle cx="150" cy="94" r="7" fill="#7b2d26" opacity=".8"/><circle cx="176" cy="110" r="6" fill="#7b2d26" opacity=".7"/>' }
      : { fill: 'rgba(72,102,76,.30)', label: 'animalcules in pepper-water', body: (function () {
          let d = '';
          const pts = [[-42, -18], [-16, 26], [22, -30], [38, 14], [4, 4], [-30, 8], [16, 34], [30, -8], [-6, -34], [46, -24]];
          pts.forEach(function (q) { d += '<ellipse cx="' + (160 + q[0]) + '" cy="' + (100 + q[1]) + '" rx="4.5" ry="2.4" transform="rotate(' + (q[0] * 2) + ' ' + (160 + q[0]) + ' ' + (100 + q[1]) + ')" fill="#2f4a34"/>'; });
          return d;
        })() });
  el.innerHTML = '<svg viewBox="0 0 320 210" role="img" aria-label="Field of a single-lens microscope">' +
    '<rect width="320" height="210" fill="#efe4cf"/>' +
    '<circle cx="160" cy="100" r="' + r + '" fill="' + field.fill + '" stroke="#48664c"/>' +
    field.body +
    '<text x="160" y="24" text-anchor="middle" font-size="13">single lens · about ×' + mag + '</text>' +
    '<text x="160" y="196" text-anchor="middle" font-size="12" fill="#3d4f3a">' + field.label + '</text>' +
    '</svg>';
};

WC2.recon.lavoisier = function (el, step) {
  const stage = step.stage != null ? step.stage : 0;
  if (stage >= 2) {
    const rows = [
      ['dephlogisticated air', 'oxygen'],
      ['phlogiston', '— (there is no such thing)'],
      ['inflammable air', 'hydrogen'],
      ['mercurius calcinatus', 'oxide of mercury'],
      ['vital air + charcoal', 'carbonic acid gas']
    ];
    el.innerHTML = '<div style="font-family:var(--sans);font-size:14px;padding:8px 10px">' +
      '<p style="margin:0 0 8px"><strong>Méthode de nomenclature chimique</strong>, 1787 — renaming as an argument</p>' +
      '<table style="width:100%;border-collapse:collapse">' +
      '<tr><th style="text-align:left;border-bottom:1px solid var(--rule);padding:6px 8px">old name</th>' +
      '<th style="text-align:left;border-bottom:1px solid var(--rule);padding:6px 8px">new name</th></tr>' +
      rows.map(function (r) {
        return '<tr><td style="border-bottom:1px solid var(--rule);padding:6px 8px;color:var(--muted)">' + r[0] + '</td>' +
          '<td style="border-bottom:1px solid var(--rule);padding:6px 8px"><strong>' + r[1] + '</strong></td></tr>';
      }).join('') + '</table>' +
      '<p class="who">A name that carries no theory of a fiery principle is already a claim about what there is. Same year as the Assembly of Notables; two years before the Estates-General.</p></div>';
    return;
  }
  const after = stage >= 1;
  const inside = after
    ? '<rect x="86" y="96" width="60" height="34" fill="rgba(123,45,38,.30)" stroke="#7b2d26"/>' +
      '<text x="116" y="118" text-anchor="middle" font-size="10">red calx</text>' +
      '<text x="116" y="150" text-anchor="middle" font-size="11" fill="#7b2d26">air inside: less by the part that combined</text>'
    : '<rect x="86" y="110" width="60" height="20" fill="rgba(30,58,95,.18)" stroke="#1e3a5f"/>' +
      '<text x="116" y="124" text-anchor="middle" font-size="10">mercury</text>' +
      '<text x="116" y="150" text-anchor="middle" font-size="11" fill="#1e3a5f">sealed: nothing may enter or leave</text>';
  el.innerHTML = '<svg viewBox="0 0 420 210" role="img" aria-label="Sealed vessel weighed before and after heating">' +
    '<line x1="40" y1="52" x2="380" y2="52" stroke="#2a2118" stroke-width="3"/>' +
    '<line x1="210" y1="30" x2="210" y2="52" stroke="#2a2118" stroke-width="2"/>' +
    '<polygon points="204,30 216,30 210,20" fill="#2a2118"/>' +
    '<line x1="116" y1="52" x2="116" y2="88" stroke="#2a2118"/>' +
    '<line x1="304" y1="52" x2="304" y2="88" stroke="#2a2118"/>' +
    '<rect x="80" y="88" width="72" height="52" fill="none" stroke="#1e3a5f" stroke-width="2"/>' + inside +
    '<rect x="286" y="96" width="36" height="18" fill="#8a7a5e"/><rect x="292" y="114" width="24" height="14" fill="#8a7a5e"/>' +
    '<text x="304" y="150" text-anchor="middle" font-size="11">the same weights</text>' +
    '<text x="210" y="176" text-anchor="middle" font-size="13">' + (after ? 'After heating: the beam has not moved.' : 'Before heating: vessel, mercury, and air, sealed.') + '</text>' +
    '<text x="210" y="196" text-anchor="middle" font-size="12" fill="#5a4a38">' + (after ? 'Matter was rearranged, not created or lost. The air had a part that combines.' : 'Weigh everything, and do not let the air be a ghost.') + '</text>' +
    '</svg>';
};

WC2.recon.watt = function (el, step) {
  const stage = step.stage != null ? step.stage : 1;

  if (stage === 0) {
    el.innerHTML = '<svg viewBox="0 0 480 220" role="img" aria-label="Newcomen cylinder and Watt\'s separate condenser">' +
      '<text x="120" y="24" text-anchor="middle" font-size="13">Newcomen, 1712</text>' +
      '<rect x="86" y="44" width="68" height="120" fill="rgba(123,45,38,.18)" stroke="#7b2d26" stroke-width="2"/>' +
      '<text x="120" y="110" text-anchor="middle" font-size="11">cylinder</text>' +
      '<text x="120" y="186" text-anchor="middle" font-size="11" fill="#7b2d26">heated, then chilled, every stroke</text>' +
      '<text x="340" y="24" text-anchor="middle" font-size="13">Watt, 1765/69</text>' +
      '<rect x="270" y="44" width="68" height="120" fill="rgba(123,45,38,.28)" stroke="#7b2d26" stroke-width="2"/>' +
      '<text x="304" y="110" text-anchor="middle" font-size="11">cylinder, kept hot</text>' +
      '<line x1="338" y1="104" x2="382" y2="104" stroke="#1e3a5f" stroke-width="3"/>' +
      '<rect x="382" y="80" width="52" height="48" fill="rgba(30,58,95,.22)" stroke="#1e3a5f" stroke-width="2"/>' +
      '<text x="408" y="108" text-anchor="middle" font-size="10">condenser</text>' +
      '<text x="352" y="186" text-anchor="middle" font-size="11" fill="#1e3a5f">the cold is moved into a second vessel</text>' +
      '</svg>' +
      '<p class="who" style="padding:6px 10px">The saving is coal, and Boulton &amp; Watt were paid a share of it. That royalty is why the improvement had to be measurable.</p>';
    return;
  }

  function card(ox, oy, w, h, pts, label, fill) {
    return '<g transform="translate(' + ox + ' ' + oy + ')">' +
      '<line x1="0" y1="' + h + '" x2="' + w + '" y2="' + h + '" stroke="currentColor"/>' +
      '<line x1="0" y1="' + h + '" x2="0" y2="0" stroke="currentColor"/>' +
      '<polygon points="' + pts + '" fill="' + fill + '" stroke="#7b2d26" stroke-width="2"/>' +
      '<text x="' + (w / 2) + '" y="' + (h + 20) + '" text-anchor="middle" font-size="12">volume</text>' +
      '<text x="' + (w / 2) + '" y="-8" text-anchor="middle" font-size="12.5">' + label + '</text>' +
      '</g>';
  }
  const good = '14,14 150,14 186,96 14,96';
  const poor = '14,44 120,44 150,96 14,96';

  if (stage >= 2) {
    el.innerHTML = '<svg viewBox="0 0 480 190" role="img" aria-label="Two indicator cards compared">' +
      card(30, 40, 190, 96, poor, 'a wasteful engine', 'rgba(123,45,38,.16)') +
      card(268, 40, 190, 96, good, 'a good engine', 'rgba(123,45,38,.34)') +
      '<text x="16" y="100" font-size="12" transform="rotate(-90 16 100)">pressure</text>' +
      '</svg>' +
      '<p class="who" style="padding:6px 10px">Two cards from two engines. The enclosed area is the work done in one stroke, so a fault is no longer a matter of opinion between the engineer and the mine owner — it is a smaller figure on paper.</p>';
    return;
  }
  el.innerHTML = '<svg viewBox="0 0 480 190" role="img" aria-label="A Watt indicator card">' +
    card(140, 40, 210, 96, '14,14 168,14 206,96 14,96', 'one stroke, drawn by the engine itself', 'rgba(123,45,38,.30)') +
    '<text x="126" y="100" font-size="12" transform="rotate(-90 126 100)">pressure</text>' +
    '<text x="248" y="108" text-anchor="middle" font-size="12" fill="#7b2d26">work = this area</text>' +
    '</svg>' +
    '<p class="who" style="padding:6px 10px">A pencil rides with the piston while a spring records the pressure. The closed figure it draws is the work of one stroke — a quality made into an area, which is the mean-speed instinct of week 4 in iron.</p>';
};

WC2.recon.jones = function (el, step) {
  const stage = step.stage != null ? step.stage : 2;
  const head = ['', 'father', 'mother', 'brother', 'three'];
  const rows = [
    ['Sanskrit', 'pitā', 'mātā', 'bhrātā', 'trayas'],
    ['Latin', 'pater', 'māter', 'frāter', 'trēs'],
    ['Greek', 'patēr', 'mētēr', 'phratēr', 'treis'],
    ['Gothic / English', 'fadar / father', 'mother', 'brōthar / brother', 'threis / three']
  ];
  const cols = stage === 0 ? 2 : 5;
  let html = '<table style="width:100%;border-collapse:collapse;font-size:15px">';
  html += '<tr>' + head.slice(0, cols).map(function (c) {
    return '<th style="text-align:left;border-bottom:1px solid var(--rule);padding:6px 8px;font-family:var(--sans);font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)">' + c + '</th>';
  }).join('') + '</tr>';
  rows.forEach(function (r) {
    html += '<tr>' + r.slice(0, cols).map(function (c, i) {
      let cell = c;
      if (stage >= 2 && i === 1) {
        cell = c.replace(/^(pit|pat|f)/, function (m) { return '<span style="color:#7b2d26;font-weight:600">' + m + '</span>'; });
      }
      return '<td style="border-bottom:1px solid var(--rule);padding:6px 8px">' + (i === 0 ? '<strong>' + cell + '</strong>' : cell) + '</td>';
    }).join('') + '</tr>';
  });
  html += '</table>';
  const note = stage >= 2
    ? '<p class="who" style="padding:8px 4px">The correspondence is regular, not picturesque: where Sanskrit, Latin and Greek have <em>p</em>, the Germanic branch has <em>f</em> — and the same shift holds for <em>t</em>/<em>th</em>. A rule that does not fail is what turns a resemblance into a demonstration. Rask and Grimm will state it as a law within forty years.</p>'
    : (stage === 0
      ? '<p class="who" style="padding:8px 4px">One word, four languages. A resemblance is not yet an argument.</p>'
      : '<p class="who" style="padding:8px 4px">Four words, four languages. Borrowing could explain one column. It does not easily explain the words a household uses about itself, or the low numerals.</p>');
  el.innerHTML = html + note;
};

WC2.recon.printing = function (el, step) {
  const labels = [
    ['punch &amp; matrix', 'a letter cut in steel, struck into copper'],
    ['composing stick', 'a line set by hand, letter by letter'],
    ['locked form', 'a page wedged tight in an iron chase'],
    ['press &amp; tympan', 'ink, damp paper, one pull of the screw']
  ];
  const n = step.n || 0;
  el.innerHTML = '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;font-family:var(--sans);font-size:13px;text-align:center">' +
    labels.map(function (l, i) {
      const on = n === i;
      return '<div style="border:1px solid ' + (on ? 'var(--accent2)' : 'var(--rule)') + ';border-radius:10px;padding:14px 8px;' +
        'background:' + (on ? 'var(--accent2)' : 'var(--panel2)') + ';color:' + (on ? '#fff' : 'inherit') + '">' +
        '<div style="font-size:11px;opacity:.75">' + (i + 1) + '</div><strong>' + l[0] + '</strong>' +
        '<div style="font-size:11.5px;margin-top:6px;opacity:' + (on ? '.9' : '.7') + '">' + l[1] + '</div></div>';
    }).join('') + '</div>' +
    '<p class="who" style="padding:8px 4px">Four crafts, not one invention. The goldsmith’s part is the mould that casts identical type by the thousand; the rest a printing shop shares with older trades.</p>';
};

WC2.recon.bookkeeping = function (el, step) {
  const stage = step.stage != null ? step.stage : 0;
  const journal = [
    ['10 March', 'Cloth sold to Giovanni for 40 ducats, on account.'],
    ['2 April', 'Giovanni pays 25 ducats in cash.']
  ].slice(0, stage >= 2 ? 2 : 1);

  const accounts = stage >= 1
    ? [
      ['Giovanni', [['Dr', 40]], stage >= 2 ? [['Cr', 25]] : []],
      ['Cloth', [], [['Cr', 40]]],
      ['Cash', stage >= 2 ? [['Dr', 25]] : [], []]
    ].filter(function (a) { return a[1].length || a[2].length; })
    : [];

  const acctHtml = accounts.map(function (a) {
    const dr = a[1].map(function (x) { return x[0] + ' ' + x[1]; }).join('<br>') || '&nbsp;';
    const cr = a[2].map(function (x) { return x[0] + ' ' + x[1]; }).join('<br>') || '&nbsp;';
    return '<div style="border:1px solid var(--rule);border-radius:8px;overflow:hidden">' +
      '<div style="background:var(--panel2);padding:4px 8px;font-family:var(--sans);font-size:12px"><strong>' + a[0] + '</strong></div>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr">' +
      '<div style="padding:6px 8px;border-right:1px solid var(--rule)">' + dr + '</div>' +
      '<div style="padding:6px 8px">' + cr + '</div></div></div>';
  }).join('');

  const totals = stage >= 2
    ? '<p style="margin:10px 0 0;font-family:var(--sans);font-size:13px">Debits 40 + 25 = <strong>65</strong> · Credits 40 + 25 = <strong>65</strong>. The books close.</p>'
    : '';

  el.innerHTML = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;font-size:14px">' +
    '<div><h3 style="margin:0 0 8px">Journal</h3>' +
    journal.map(function (j) { return '<p style="margin:0 0 8px"><strong>' + j[0] + '.</strong> ' + j[1] + '</p>'; }).join('') +
    (stage === 0 ? '<p class="who">A day-book in narrative. Merchants had these long before Pacioli.</p>' : '') +
    '</div>' +
    '<div><h3 style="margin:0 0 8px">Ledger</h3>' +
    (stage >= 1 ? '<div style="display:grid;gap:8px">' + acctHtml + '</div>' + totals : '<p class="who">Nothing here yet.</p>') +
    (stage === 1 ? '<p class="who">Every fact is named twice: debit left, credit right.</p>' : '') +
    (stage >= 2 ? '<p class="who">If the two columns do not agree, the world of the firm has a hole in it — theft, error, or a fact not yet written down.</p>' : '') +
    '</div></div>';
};

WC2.recon.pompeii = function (el, step) {
  const stage = step.stage != null ? step.stage : 0;
  if (stage >= 1) {
    el.innerHTML = '<svg viewBox="0 0 460 220" role="img" aria-label="A street plan emerging from the excavation">' +
      '<rect width="460" height="220" fill="#e7d9bc"/>' +
      '<rect x="30" y="26" width="400" height="168" fill="#efe6d2" stroke="#b6a483"/>' +
      '<line x1="30" y1="104" x2="430" y2="104" stroke="#9a8b6e" stroke-width="8"/>' +
      '<line x1="220" y1="26" x2="220" y2="194" stroke="#9a8b6e" stroke-width="8"/>' +
      '<g fill="#d8cbaa" stroke="#8a7a5e">' +
      '<rect x="46" y="40" width="70" height="52"/><rect x="128" y="40" width="76" height="52"/>' +
      '<rect x="238" y="40" width="66" height="52"/><rect x="318" y="40" width="94" height="52"/>' +
      '<rect x="46" y="118" width="88" height="60"/><rect x="150" y="118" width="54" height="60"/>' +
      '<rect x="238" y="118" width="60" height="60"/></g>' +
      '<path d="M318 118 a52 52 0 0 1 94 0 z" fill="#c4a35a" stroke="#6e5436"/>' +
      '<text x="365" y="150" text-anchor="middle" font-size="11">theatre</text>' +
      '<text x="122" y="100" text-anchor="middle" font-size="11" fill="#5a4a38">street</text>' +
      '<text x="230" y="212" text-anchor="middle" font-size="12">Not statues in a cabinet: a town with blocks, doors, shops, and a bakery.</text>' +
      '</svg>' +
      '<p class="who" style="padding:6px 10px">Once the plan appears, antiquity acquires rooms, graffiti, loaves, and a theatre — things a treatise cannot supply. The Grand Tour changes; so, later, does the Empire style.</p>';
    return;
  }
  el.innerHTML = '<svg viewBox="0 0 460 220" role="img" aria-label="Section through the volcanic deposits at Pompeii">' +
    '<rect width="460" height="220" fill="#eae2d0"/>' +
    '<rect x="0" y="34" width="460" height="16" fill="#6f7d55"/>' +
    '<rect x="0" y="50" width="460" height="42" fill="#c9bda0"/>' +
    '<rect x="0" y="92" width="460" height="38" fill="#a89madd" />' +
    '<rect x="0" y="92" width="460" height="38" fill="#a8977a"/>' +
    '<rect x="0" y="130" width="460" height="54" fill="#cbb891"/>' +
    '<rect x="214" y="34" width="20" height="118" fill="#5b4a33"/>' +
    '<path d="M150 152 a64 30 0 0 1 148 0 z" fill="#c4a35a" stroke="#6e5436"/>' +
    '<text x="12" y="46" font-size="11" fill="#f2f0e6">1748 ground level, vines</text>' +
    '<text x="12" y="76" font-size="11" fill="#5a4a38">lapilli — pumice that fell for hours</text>' +
    '<text x="12" y="116" font-size="11" fill="#f2f0e6">ash and surge deposits</text>' +
    '<text x="248" y="146" font-size="11" fill="#3b2a18">the seats of a theatre</text>' +
    '<text x="230" y="30" text-anchor="middle" font-size="12">a well shaft, driven for water</text>' +
    '<text x="230" y="206" text-anchor="middle" font-size="12">1748: the shaft goes down through AD 79 and comes out inside a city.</text>' +
    '</svg>' +
    '<p class="who" style="padding:6px 10px">Under the Bourbons of Naples an engineer, Rocque Joaquín de Alcubierre, drove shafts. Herculaneum had already yielded finds; Pompeii is shallower and becomes first a quarry of statues, then a plan.</p>';
};
