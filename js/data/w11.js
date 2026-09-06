WC2.registerWeek({
  id: 11,
  short: 'Law',
  title: '1750–1850 — Law',
  lens: 'Law',
  epigraph: {
    text: 'It is better that ten guilty persons escape than that one innocent suffer.',
    who: 'William Blackstone',
    source: 'Commentaries on the Laws of England, Book IV'
  },
  kicker: 'Week 11 · codes, a discours préliminaire, Savigny against a German code',
  lede: 'You already have, from Tamar Herzog, <em>A Short History of European Law</em>, the path from the 1750s. Here: Portalis and the Civil Code, the American constitution as a legal event, and the Savigny–Thibaut quarrel.',
  rooms: [
    {
      id: 'portalis',
      title: 'Portalis and the Code',
      nav: 'Portalis',
      kind: 'great man',
      type: 'prose',
      blurb: 'A survivor of the Revolution who tells a nation what a code is for.',
      question: {
        id: 'w11-q-code',
        kind: 'mc',
        prompt: 'Portalis’s discours préliminaire warns, among other things, that a civil code should not:',
        options: [
          { id: 'a', text: 'Try to foresee every case, as if the legislator were Providence', correct: true },
          { id: 'b', text: 'Mention property', correct: false },
          { id: 'c', text: 'Be written in French', correct: false }
        ],
        reveal: '<p>He wants a code that a judge can live with — principles, not an infinite statutory list. That is a political lesson from both ancien-régime custom-chaos and Jacobin flood. The man had been exiled; he is not a technician without a memory.</p>'
      },
      html:
        '<p>Jean-Étienne-Marie Portalis (1746–1807) is a Provençal advocate, a moderate in the Revolution, a deportee, then Napoleon’s choice to help draft the Civil Code. His aim is a France in which families, property, and contracts are readable without a local coutume and without a new decree every week. The Code is a weapon against both the old maze and the revolutionary habit of legislation as virtue.</p>' +
        '<p>Napoleon as captain you have seen. Napoleon as a man who sits on the Conseil and argues articles is the same career in another room. Do not let Austerlitz steal the Code.</p>'
    },
    {
      id: 'savigny',
      title: 'Savigny versus a code',
      nav: 'Dispute: codes',
      kind: 'dispute',
      type: 'dispute',
      blurb: 'Thibaut wants a German civil code now; Savigny says the time is not ripe.',
      positions: [
        {
          scholar: 'A. F. J. Thibaut',
          years: '1814',
          summary: 'After the Wars of Liberation, Germany needs a single civil code, on the French model in ambition if not in copy, to be a nation in law.',
          html: '<p>Position (summary): unity is a legal act. Waiting for a “spirit of the people” to ripen is a way of remaining a patchwork while France has a book.</p>'
        },
        {
          scholar: 'Friedrich Carl von Savigny',
          years: '1814',
          work: 'Of the Vocation of Our Age for Legislation and Jurisprudence',
          summary: 'Law is the organic product of a people’s history (the Volksgeist). This age should study, especially Roman law as received in Germany, not manufacture a code.',
          html: '<p>Position (summary): a code now would be a thin French garment on a German body. The historical school is a politics of delay and of scholarship as national work. It is also a claim about what law is — not command, custom-with-a-memory.</p>'
        },
        {
          scholar: 'The American contrast',
          summary: 'A written constitution (1787) that is not a civil code; Marshall’s court teaching the country to read it as law.',
          html: '<p>Position (summary): the US instrument is a frame for a federal republic, with a Bill of Rights added as a political bargain. It is not Portalis’s book of private life. Comparing them as “two modern codes” is a category error. Comparing them as two ways of putting a revolutionary generation on paper is fair.</p>'
        }
      ],
      ask: 'Bentham called natural rights “nonsense upon stilts.” Tierney has already shown you a longer rights-language. In Tamar Herzog, <em>A Short History of European Law</em>, where is the live fight — codes, rights, or the profession of the judge?'
    },
    {
      id: 'connections',
      title: 'Literature, art, music',
      nav: 'Connections',
      kind: 'connections',
      type: 'connections'
    },
    {
      id: 'resources',
      title: 'Further',
      nav: 'Further',
      kind: 'resources',
      type: 'resources',
      items: [
        'Portalis, discours préliminaire — a handful of pages in any old translation.',
        'Savigny’s <em>Vocation</em> pamphlet is short; read it as a political act of 1814, the year after Leipzig.'
      ]
    }
  ]
});
