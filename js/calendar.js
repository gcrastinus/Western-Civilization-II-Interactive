/* Fall 2026 Mondays. Change WC2.TERM.start to reuse the course. */
WC2.TERM = {
  start: '2026-08-31',
  tz: 'America/Chicago',
  weekCount: 14,
  thanksgiving: 13,
  review: 14
};

WC2.faculty = false;
WC2.facultyUnlockAll = false;
WC2._fakeISO = null;

WC2.now = function () {
  return new Date();
};

WC2.todayISO = function () {
  if (WC2._fakeISO) return WC2._fakeISO;
  return WC2.now().toLocaleDateString('en-CA', { timeZone: WC2.TERM.tz });
};

WC2.weekStartISO = function (n) {
  const p = WC2.TERM.start.split('-').map(Number);
  const dt = new Date(Date.UTC(p[0], p[1] - 1, p[2]));
  dt.setUTCDate(dt.getUTCDate() + (n - 1) * 7);
  return dt.toISOString().slice(0, 10);
};

WC2.weekIndex = function (iso) {
  iso = iso || WC2.todayISO();
  if (iso < WC2.TERM.start) return 0;
  const start = Date.parse(WC2.TERM.start + 'T00:00:00Z');
  const cur = Date.parse(iso + 'T00:00:00Z');
  return Math.floor((cur - start) / 604800000) + 1;
};

WC2.isUnlocked = function (weekNum) {
  if (weekNum === 0 || weekNum === 'intro') return true;
  if (WC2.facultyUnlockAll) return true;
  return WC2.weekIndex() >= Number(weekNum);
};

WC2.isReviewUnlocked = function (weekNum) {
  if (WC2.facultyUnlockAll) return true;
  return WC2.weekIndex() > Number(weekNum);
};

WC2.unlockLabel = function (weekNum) {
  const iso = WC2.weekStartISO(weekNum);
  const d = new Date(iso + 'T12:00:00');
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
};

WC2.readFacultyFromURL = function () {
  const q = new URLSearchParams(location.search);
  WC2.faculty = q.has('faculty') || q.get('preview') === '1';
  if (q.get('unlock') === 'all') {
    WC2.faculty = true;
    WC2.facultyUnlockAll = true;
  }
  if (q.get('date')) WC2._fakeISO = q.get('date');
  if (WC2.faculty) {
    const saved = localStorage.getItem('wc2-faculty');
    if (saved) {
      try {
        const s = JSON.parse(saved);
        if (s.unlockAll) WC2.facultyUnlockAll = true;
        if (s.date && !q.get('date')) WC2._fakeISO = s.date;
      } catch (e) { /* ignore */ }
    }
  }
};

WC2.persistFaculty = function () {
  if (!WC2.faculty) return;
  localStorage.setItem('wc2-faculty', JSON.stringify({
    unlockAll: WC2.facultyUnlockAll,
    date: WC2._fakeISO
  }));
};
