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
  lede: 'Tamar Herzog, <em>A Short History of European Law</em>, has already traced the path from the 1750s. This week follows Portalis and the Civil Code, the American constitution as a legal event, and the quarrel between Savigny and Thibaut.',
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
        '<p>Napoleon as captain you have already seen. Napoleon sitting on the Conseil and arguing articles is the same career in another room. Austerlitz does not replace the Code.</p>'
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
          stance: 'opposing',
          scholar: 'A. F. J. Thibaut',
          years: '1814',
          summary: 'After the Wars of Liberation, Germany needs a single civil code, on the French model in ambition if not in copy, to be a nation in law.',
          html: '<p>Thibaut’s claim, in 1814, is that after the Wars of Liberation Germany needs a single civil code, on the French model in ambition if not in copy, if it is to be a nation in law. Unity, on this view, is a legal act. Waiting for a “spirit of the people” to ripen is a way of remaining a patchwork while France already has a book.</p>'
        },
        {
          stance: 'opposing',
          scholar: 'Friedrich Carl von Savigny',
          years: '1814',
          work: 'Of the Vocation of Our Age for Legislation and Jurisprudence',
          summary: 'Law is the organic product of a people’s history (the Volksgeist). This age should study, especially Roman law as received in Germany, not manufacture a code.',
          html: '<p>Savigny answers that law is the organic product of a people’s history, the <em>Volksgeist</em>. This age should study, especially Roman law as received in Germany, not manufacture a code. A code now, he says, would be a thin French garment on a German body. The historical school is a politics of delay, and of scholarship as national work. It is also a claim about what law is: not command, but custom with a memory.</p>'
        },
        {
          stance: 'complementary',
          scholar: 'The American contrast',
          summary: 'A written constitution (1787) that is not a civil code; Marshall’s court teaching the country to read it as law.',
          html: '<p>The United States instrument of 1787 is a frame for a federal republic. The Bill of Rights was added as a political bargain. It is not Portalis’s book of private life — families, property, contracts. To compare the two as “two modern codes” is a category error. To compare them as two ways of putting a revolutionary generation on paper is fair.</p>'
        },
        {
          stance: 'complementary',
          scholar: 'Otto von Gierke',
          years: '1868\u20131913',
          work: 'Das deutsche Genossenschaftsrecht',
          summary: 'Savigny\u2019s historical school produced its own critic. Gierke found in German law a real group personality \u2014 the fellowship, the guild, the town \u2014 that Roman law had to reduce to a fiction.',
          html: '<p>Gierke argued that the Romanists had bought their elegance at the price of the association: a corporation in their hands is a fiction the state permits, whereas in the German material the fellowship is a living person with a will. Maitland translated the medieval part of the work into English and thought it explained the trust and the joint-stock company. The line runs straight back to week 3: whether a body that is not a man can be a person in law is the same question the canonists asked about the Church.</p>'
        },
        {
          stance: 'opposing',
          scholar: 'The codes as instruments of rule',
          work: 'the Code outside France',
          summary: 'A code is portable. What travelled with the Napoleonic armies was administrative uniformity, and it outlasted the empire that carried it.',
          html: '<p>The Civil Code went into the Rhineland, the Low Countries, Italy, and Poland behind the French army, and much of it stayed after 1815 because officials found it easier to govern with. Later it was adopted where no French soldier had gone. That is an argument neither Thibaut nor Savigny quite made: a code may win not because a nation was ready for it, nor because it expressed a spirit, but because it is a better tool for a bureaucracy \u2014 the same reason a script won in week 12 of the other course.</p>'
        }
      ],
      shifts: '<p>The 1814 pamphlet war looks like a quarrel about drafting and is a quarrel about what law is: a command a legislature issues, or a custom a nation grows. Savigny won the immediate argument \u2014 Germany had no civil code until 1900 \u2014 and the historical school produced both the Pandectist science that made the eventual code possible and, in Gierke, the objection that the science had lost the group. The American instrument sits outside the quarrel, which is why comparing it to the Code teaches more than lining them up.</p>',
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
