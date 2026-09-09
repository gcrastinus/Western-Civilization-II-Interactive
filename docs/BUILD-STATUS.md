# WC II Interactive — build status

Pickup file. If work stops, read this, then `README.md`, then continue from the first unchecked item.

## Decisions (locked)

- Revised Fall 2026 syllabus only: oral Analyses of History, book notes, integrative oral exam. No Controversiae rooms.
- Calendar-gated on Fall 2026 Mondays (America/Chicago). Review-layer quotes of that week’s assigned PDF unlock when the next Monday begins.
- Static GitHub Pages, Ars-app style. Publish the `app/` folder only (course PDFs are copyrighted; do not publish the parent folder).
- I write all words and code. Grok Bot fills image slots listed in `docs/GROK-IMAGE-SLOTS.md`.
- Lit/art/music: `js/data/arts.js` is the one editable connections file. Historically pointed or less-known first; Dante/Chaucer etc. in small doses, never as “X is like Y.”
- Restate Greco-Roman inheritance only when omitting it would distort.
- Intro teaches culture + four causes + Tocqueville. *The One and the Many* is a quiet overlay.
- Battles: W1 Bouvines, Crécy, Constantinople 1453; W5 Lepanto, Vienna 1683, Blenheim; W9 Austerlitz, Leipzig 1813, Waterloo.
- Reconstructions: W4 mean-speed, computus, astrolabe; W8 inclined plane, Jupiter’s moons, Leeuwenhoek; W12 Lavoisier, Watt indicator, Jones/Sanskrit. Printing, double-entry, Pompeii as short sequences in adjacent weeks.
- Maps from Wikimedia / LoC / similar PD; CSS filter now; Grok restyle later. Draw SVG on maps for armies and routes.
- localStorage for student work. GoatCounter for anonymous paths/events (not on localhost/file/faculty).
- English PD translations; original-language toggle where we have the text and it helps.

## Term dates

Week *n* unlocks Monday `2026-08-31 + (n-1)*7`. Review quotes for week *n* unlock the following Monday. Week 13 (2026-11-23) is Thanksgiving (no new rooms). Week 14 (2026-11-30) is review. Faculty: `?faculty=1`.

## File map

```
app/
  index.html
  serve.command
  css/app.css
  js/namespace.js calendar.js storage.js analytics.js app.js
  js/engines/{question,passages,map,battle,reconstruction,contest}.js
  js/data/intro.js arts.js overlay.js review.js contest-feudalism.js contest-renaissance.js contest-reformation.js w01.js … w12.js
  maps/            public-domain bases + CREDITS.md
  images/          Grok-filled slots (placeholders until then)
  docs/BUILD-STATUS.md  README.md  CITATIONS.md  GROK-IMAGE-SLOTS.md
```

## Checklist

- [x] Decisions recorded
- [x] Shell: html, css, calendar, storage, analytics, router, faculty bar
- [x] Engines
- [x] Public-domain maps downloaded + credited (Waterloo/Leipzig fetched on retry)
- [x] Intro content
- [x] arts.js connections
- [x] Weeks 1–4
- [x] Weeks 5–8
- [x] Week 5 contests: Renaissance (Caferro) and Reformation (Dixon) — topic pills, opposing/complementary filters, chronology, evidence, scholarship shifts
- [x] Weeks 9–12 + review
- [x] GROK-IMAGE-SLOTS.md complete
- [x] CITATIONS.md
- [x] Smoke check (`node --check`, `node scripts/smoke.js`)
- [x] Browser click-through (all 87 routes walked headless; every control clicked; console clean)
- [x] Review pass (Sept 2026): counterfactual banner bug, frozen reconstructions, dispute depth, prose
- [ ] Create the real GoatCounter site and paste the URL into `js/analytics.js`
- [ ] Grok Bot: restyle maps + fill `images/wNN-atmosphere.jpg`

## How to resume

1. Open this file.
2. First unchecked item is the next task.
3. Do not republish parent-folder PDFs.
4. Do not summarize a week’s assigned Reilly / Neal-Cameron / Herzog / Bod in that week’s rooms. Quote them only in rooms with `review: true`.

## Review pass, 9 September 2026

Fixed:

- Counterfactual scenarios were inheriting the historical `result` banner, so "If Philip had refused battle" still announced the French victory and the prisoners taken. Counterfactuals now carry only their own result, are flagged in the beat panel, and render the `premise` field, which had never been displayed at all.
- Seven of the twelve reconstructions ignored their step parameters, so clicking through the steps changed the prose and left the figure frozen: mean-speed, computus, bookkeeping, jones, watt, lavoisier, pompeii (and leeuwenhoek, whose radius clamped at the same value for two of three magnifications). All twelve now respond to their steps; the week files pass the parameters.
- The inclined plane ran uphill. The Jupiter demo showed four moons every night; it now uses the counts and sides Sidereus Nuncius reports, since the changing number is the evidence.
- `js/app.js` was dropping the `of` clause from every `arts.js` entry, so the connections room printed the work and the because and threw away the middle of the sentence.
- `document.title` now names the room; the contents filter survives a re-render; the theme button shows the state it is in.

Content:

- Week 1's feudalism dispute is now a full contest (`contest-feudalism.js`): three topics, an eleven-step chronology from the feudists to Wickham, and the Past & Present exchange over the year 1000.
- Every remaining `dispute` room gained named scholars with `stance` and a `shifts` block; the passages engine renders both.
- Week 6's capitalism room now actually contains the agrarian question its blurb promised (Brenner), plus de Vries and McCloskey.
