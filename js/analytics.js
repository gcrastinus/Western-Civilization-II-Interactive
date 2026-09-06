/* Anonymous counts only. Never send answers. Skip on local/faculty. */
WC2.GOATCOUNTER = 'https://wc2.goatcounter.com/count';

WC2.analyticsAllowed = function () {
  if (WC2.faculty) return false;
  const h = location.hostname;
  if (location.protocol === 'file:') return false;
  if (h === 'localhost' || h === '127.0.0.1' || h === '') return false;
  return true;
};

WC2.installGoat = function () {
  if (!WC2.analyticsAllowed()) return;
  if (!WC2.GOATCOUNTER || WC2.GOATCOUNTER.indexOf('wc2.goatcounter.com') !== -1) {
    /* Placeholder URL until a real GoatCounter site is created. See README. */
    return;
  }
  window.goatcounter = {
    no_onload: true,
    path: function () { return location.pathname + location.hash.replace('#', '') || '/'; }
  };
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', WC2.GOATCOUNTER);
  document.head.appendChild(s);
};

WC2.track = function (path, title) {
  if (!WC2.analyticsAllowed()) return;
  const p = path || (location.pathname + (location.hash || '#/'));
  if (window.goatcounter && typeof window.goatcounter.count === 'function') {
    window.goatcounter.count({ path: p, title: title || document.title, event: true });
  }
};
