WC2.KEY = 'wc2-interactive-v1';

WC2.defaultState = function () {
  return {
    answers: {},
    seen: {},
    langOrig: false,
    theme: 'light',
    last: '#/'
  };
};

WC2.loadState = function () {
  try {
    const raw = localStorage.getItem(WC2.KEY);
    WC2.state = raw ? Object.assign(WC2.defaultState(), JSON.parse(raw)) : WC2.defaultState();
  } catch (e) {
    WC2.state = WC2.defaultState();
  }
};

WC2.saveState = function () {
  try {
    localStorage.setItem(WC2.KEY, JSON.stringify(WC2.state));
  } catch (e) { /* private mode */ }
};

WC2.markSeen = function (path) {
  WC2.state.seen[path] = (WC2.state.seen[path] || 0) + 1;
  WC2.state.last = path;
  WC2.saveState();
};

WC2.saveAnswer = function (id, payload) {
  WC2.state.answers[id] = payload;
  WC2.saveState();
};
