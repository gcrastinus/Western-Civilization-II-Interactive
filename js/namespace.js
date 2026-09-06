/* WC2 namespace — keep this file tiny and first. */
window.WC2 = window.WC2 || {};
WC2.weeks = WC2.weeks || {};
WC2.engines = WC2.engines || {};
WC2.recon = WC2.recon || {};
WC2.arts = WC2.arts || {};

WC2.registerWeek = function (week) {
  WC2.weeks[week.id] = week;
};

WC2.h = function (html) {
  const t = document.createElement('template');
  t.innerHTML = String(html).trim();
  return t.content;
};

WC2.el = function (tag, attrs, children) {
  const n = document.createElement(tag);
  if (attrs) {
    Object.keys(attrs).forEach(function (k) {
      if (k === 'class') n.className = attrs[k];
      else if (k === 'html') n.innerHTML = attrs[k];
      else if (k === 'text') n.textContent = attrs[k];
      else if (k.slice(0, 2) === 'on' && typeof attrs[k] === 'function') n.addEventListener(k.slice(2), attrs[k]);
      else if (attrs[k] === true) n.setAttribute(k, '');
      else if (attrs[k] !== false && attrs[k] != null) n.setAttribute(k, attrs[k]);
    });
  }
  (children || []).forEach(function (c) {
    if (c == null) return;
    n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  });
  return n;
};

WC2.clear = function (node) {
  while (node.firstChild) node.removeChild(node.firstChild);
};

WC2.periodOf = function (weekId) {
  const n = Number(weekId);
  if (n >= 1 && n <= 4) return 'medieval';
  if (n >= 5 && n <= 8) return 'early';
  if (n >= 9 && n <= 12) return 'modern';
  if (n === 14) return 'modern';
  return 'intro';
};
