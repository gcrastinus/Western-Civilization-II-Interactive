WC2.registerWeek({
  id: 12,
  short: 'Search for truth',
  title: '1750–1850 — Search for truth',
  lens: 'Search for truth',
  epigraph: {
    text: 'Sapere aude! Have courage to use your own understanding!',
    who: 'Immanuel Kant',
    source: 'What Is Enlightenment?, 1784'
  },
  kicker: 'Week 12 · a closed vessel, an indicator diagram, a discourse in Calcutta',
  lede: 'You already have, from Rens Bod, <em>World of Patterns</em>, the later modern stretch of the same survey. Here: Lavoisier’s balance, Watt’s indicator, and Jones on Sanskrit.',
  rooms: [
    {
      id: 'lavoisier',
      title: 'Lavoisier’s balance',
      nav: 'Lavoisier',
      kind: 'reconstruction',
      type: 'reconstruction',
      demo: 'lavoisier',
      blurb: 'Conservation as a craft of closed vessels — and a tax farmer’s death.',
      question: {
        id: 'w12-q-lav',
        kind: 'mc',
        prompt: 'Lavoisier’s public career, besides the laboratory, included:',
        options: [
          { id: 'a', text: 'Nothing; he was only a chemist', correct: false },
          { id: 'b', text: 'The Ferme générale (tax farm), gunpowder administration, and a place in the Academy — which is why the Terror could count him as a political enemy', correct: true },
          { id: 'c', text: 'Command at Austerlitz', correct: false }
        ],
        reveal: '<p>He is guillotined in 1794 with other fermiers. The story later attached to Lagrange — that they needed only a moment to cut the head, and a hundred years might not suffice to produce another — is famous and may be apocryphal. The chemistry and the fisc are one life either way. The demonstration of oxygen is not innocent of the state that paid for the instruments.</p>'
      },
      steps: [
        { title: 'The closed vessel', html: '<p>Mercury calx heated, a gas collected, weights before and after. The air has a part that combines (oxygen) and a part that does not. Phlogiston is not needed. What is needed is a balance and the refusal to let matter leave the account.</p>', caption: 'Weigh everything; do not let the air be a ghost.' },
        { title: 'A new language', html: '<p>The <em>Méthode de nomenclature chimique</em> (1787) and the <em>Traité</em> (1789) rename the world. A revolution in names in the same year as a revolution in streets. That is not a metaphor the chemistry “expresses.” It is a man of the Academy writing while the Estates-General meet.</p>' },
        { title: '1794', html: '<p>The Terror kills a tax farmer who was also the chemist. Later republican science will still use his names. Efficient cause: a demonstration. Final cause, for him: a rational kingdom of measures, including the fiscal. The Revolution did not want that particular kingdom.</p>' }
      ]
    },
    {
      id: 'watt',
      title: 'Watt’s indicator',
      nav: 'Watt',
      kind: 'reconstruction',
      type: 'reconstruction',
      demo: 'watt',
      blurb: 'Work made visible as an area; the separate condenser already in the past.',
      steps: [
        { title: 'The condenser', html: '<p>1765/69: keep the cylinder hot, condense steam in another vessel. Newcomen’s engine had cooled its own cylinder every stroke. Watt, instrument-maker to the University of Glasgow, then partner of Boulton in Birmingham, sells a fuel saving to mines and then to mills.</p>' },
        { title: 'The indicator', html: '<p>A later instrument traces pressure against the piston’s travel. The enclosed area is work. Engineers can now see what a bad engine wastes. This is the mean-speed instinct in iron: a quality made into a figure.</p>' },
        { title: 'A firm', html: '<p>Boulton &amp; Watt is a political-economic fact: patents, Soho, a fight to be paid by savings in coal. Arkwright’s mill-time and Watt’s engine-time meet in the same decades. Material cause for week 10’s economy sits here, in a diagram.</p>' }
      ]
    },
    {
      id: 'jones',
      title: 'Jones in Calcutta',
      nav: 'Jones / Sanskrit',
      kind: 'reconstruction',
      type: 'reconstruction',
      demo: 'jones',
      blurb: '1786: a common source for Sanskrit, Greek, and Latin — spoken to the Asiatick Society.',
      steps: [
        { title: 'The discourse', html: '<p>Sir William Jones, judge of the Supreme Court at Calcutta, philologist, tells the Asiatick Society that Sanskrit is “more perfect than the Greek, more copious than the Latin,” and of a common ancestry with them. He is not saying Sanskrit is the mother. He is saying there was a source.</p>' },
        { title: 'The table', html: '<p>Father, mother, brother, three: the correspondences are the demonstration. This is not a “discovery of India” in the tourist sense. It is a grammar that makes Europe’s own languages provincial.</p>' },
        { title: 'The room', html: '<p>The audience is Company men in Hastings’s wake. Orientalism here is a court of law plus a hobby of genius. The later German seminar will forget the courtroom; you should not. A search for truth that happens in an empire is still a search for truth. It is also an empire.</p>' }
      ]
    },
    {
      id: 'enlightenment',
      title: 'What is Enlightenment?',
      nav: 'Dispute: Enlightenment',
      kind: 'dispute',
      type: 'dispute',
      blurb: 'Radical versus moderate; a theological Enlightenment; Israel again.',
      positions: [
        {
          scholar: 'Jonathan Israel',
          work: 'Radical Enlightenment / A Revolution of the Mind',
          summary: 'A Spinozist underground of equality and secular democracy, versus a moderate Enlightenment (Voltaire, Locke) that keeps God and hierarchy.',
          html: '<p>Position (summary): the blaze of 1776 has a seventeenth-century fuse. If you find this too clean a split, say so — but know the split.</p>'
        },
        {
          scholar: 'Theological and national Enlightenments',
          summary: 'Catholic, Protestant, Jewish, and state-church versions that want useful knowledge without Israel’s radical package.',
          html: '<p>Position (summary): a Bavarian Benedictine with a cabinet of instruments, or a Scottish moralist, is not a failed philosophe. Bouyer’s eye on Protestant principles would look for what remains Christian in the “light.”</p>'
        },
        {
          scholar: 'Black, Institutions of Islam and the West (for the edge of the comparison)',
          summary: 'Institutional divergence, not a cartoon of stagnant East and living West.',
          html: '<p>Position (summary): when the course asks why the West became dominant, do not answer “Enlightenment” as a spirit. Answer with courts, companies, universities, and armies that could be paid. Then, if you wish, ask what vision of the good life made those habits worth acquiring.</p>'
        }
      ],
      ask: 'Use the four causes once, here, not as a sermon: what material (instruments, print, academies), what exemplary acts, what character, what vision of flourishing, would you actually name for 1750–1850? If you cannot name them from the rooms you have walked, the scheme has become a fog.'
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
        'Jones, Third Anniversary Discourse — it is short.',
        'Lavoisier’s <em>Traité</em>, the opening pages on method, in any old translation.',
        'A working Watt engine on film.'
      ]
    }
  ]
});
