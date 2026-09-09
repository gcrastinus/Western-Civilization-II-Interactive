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
  lede: 'Rens Bod, <em>World of Patterns</em>, has already covered the later modern stretch of the same survey. This week works through Lavoisier’s balance, Watt’s indicator, and Jones on Sanskrit.',
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
        { title: 'The closed vessel', html: '<p>Mercury calx heated, a gas collected, weights before and after. The air has a part that combines (oxygen) and a part that does not. Phlogiston is not needed. What is needed is a balance and the refusal to let matter leave the account.</p>', stage: 0 },
        { title: 'A new language', html: '<p>The <em>Méthode de nomenclature chimique</em> (1787) and the <em>Traité</em> (1789) rename the world. A revolution in names in the same year as a revolution in streets. That is not a metaphor the chemistry “expresses.” It is a man of the Academy writing while the Estates-General meet.</p>', stage: 2 },
        { title: '1794', html: '<p>The Terror kills a tax farmer who was also the chemist. Later republican science will still use his names. Efficient cause: a demonstration. Final cause, for him: a rational kingdom of measures, including the fiscal. The Revolution did not want that particular kingdom.</p>', stage: 1 }
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
        { title: 'The condenser', html: '<p>1765/69: keep the cylinder hot, condense steam in another vessel. Newcomen’s engine had cooled its own cylinder every stroke. Watt, instrument-maker to the University of Glasgow, then partner of Boulton in Birmingham, sells a fuel saving to mines and then to mills.</p>', stage: 0 },
        { title: 'The indicator', html: '<p>A later instrument traces pressure against the piston’s travel. The enclosed area is work. Engineers can now see what a bad engine wastes. This is the mean-speed instinct in iron: a quality made into a figure.</p>', stage: 1 },
        { title: 'A firm', html: '<p>Boulton &amp; Watt is a political-economic fact: patents, Soho, a fight to be paid by savings in coal. Arkwright’s mill-time and Watt’s engine-time meet in the same decades. Material cause for week 10’s economy sits here, in a diagram.</p>', stage: 2 }
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
        { title: 'The discourse', html: '<p>Sir William Jones, judge of the Supreme Court at Calcutta, philologist, tells the Asiatick Society that Sanskrit is “more perfect than the Greek, more copious than the Latin,” and of a common ancestry with them. He is not saying Sanskrit is the mother. He is saying there was a source.</p>', stage: 0 },
        { title: 'The table', html: '<p>Father, mother, brother, three: the correspondences are the demonstration. Call this a discovery of India and you have missed it. What Jones found is a grammar that makes Europe’s own languages provincial.</p>', stage: 1 },
        { title: 'The room', html: '<p>The audience is Company men in Hastings’s wake. Orientalism here is a court of law plus a hobby of genius. The later German seminar will forget the courtroom; you should not. A search for truth that happens in an empire is still a search for truth. It is also an empire.</p>', stage: 2 }
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
          stance: 'opposing',
          scholar: 'Jonathan Israel',
          work: 'Radical Enlightenment / A Revolution of the Mind',
          summary: 'A Spinozist underground of equality and secular democracy, versus a moderate Enlightenment (Voltaire, Locke) that keeps God and hierarchy.',
          html: '<p>Israel’s claim is that a Spinozist underground of equality and secular democracy already existed in the seventeenth century, and that the “moderate” Enlightenment of Voltaire and Locke kept God and hierarchy. The blaze of 1776, on this view, has a seventeenth-century fuse. The split is cleaner than many historians will allow. It is still the split he asks you to test.</p>'
        },
        {
          stance: 'opposing',
          scholar: 'Theological and national Enlightenments',
          summary: 'Catholic, Protestant, Jewish, and state-church versions that want useful knowledge without Israel’s radical package.',
          html: '<p>Against Israel, this reading points to Catholic, Protestant, Jewish, and state-church Enlightenments that wanted useful knowledge without his radical package. A Bavarian Benedictine with a cabinet of instruments, or a Scottish moralist, is not a failed philosophe. Louis Bouyer, watching Protestant principles, would look for what remains Christian in the “light.”</p>'
        },
        {
          stance: 'complementary',
          scholar: 'Black, Institutions of Islam and the West (for the edge of the comparison)',
          summary: 'Institutional divergence, not a cartoon of stagnant East and living West.',
          html: '<p>Antony Black’s comparison of Islamic and Western institutions is a warning against answering “why the West became dominant” with “Enlightenment” as a spirit. The better first answer is courts, companies, universities, and armies that could be paid. After that, it is fair to ask what vision of the good life made those habits worth acquiring. Islam and the Latin West share Greek and Roman inheritances and a revealed law; they do not share the same later pairing of corporation, church-and-state split, and city-republic.</p>'
        },
        {
          stance: 'complementary',
          scholar: 'J. G. A. Pocock and John Robertson',
          years: '1999\u20132005',
          work: 'Barbarism and Religion; The Case for the Enlightenment',
          summary: 'Enlightenments in the plural, each in its own state and confession \u2014 or a single project with a common problem: how men may better their lot in this world.',
          html: '<p>Pocock dissolves the capital letter into national and confessional settings, and reads even Gibbon as a product of one of them. Robertson answers that pluralizing to that extent leaves nothing to explain, and proposes a common core \u2014 human betterment in this life \u2014 that Naples and Scotland pursued in parallel. The two positions frame the field: how much unity a period-word may claim before it starts inventing its own subject. The same question was asked of the Renaissance in week 5.</p>'
        },
        {
          stance: 'complementary',
          scholar: 'Robert Darnton',
          years: '1971\u201395',
          work: 'the literary underground; the book trade',
          summary: 'Follow the books people actually bought. Below the philosophes was a trade in libels, pornography, and pirated editions, written by men who never reached the salons.',
          html: '<p>Darnton worked the archives of a Swiss publishing house and reconstructed what the illegal trade shipped into France: not much Spinoza, a great deal of scandal about the court and the clergy. His claim is that the disrepute of authority was manufactured as much by Grub Street as by the <em>Encyclop\u00e9die</em>. Complementary because it does not deny the ideas; it asks which ideas travelled, in whose bags, and to whom.</p>'
        },
        {
          stance: 'opposing',
          scholar: 'Jonathan Sheehan and David Sorkin',
          years: '2005\u201308',
          work: 'The Enlightenment Bible; The Religious Enlightenment',
          summary: 'Religion was not the Enlightenment\u2019s victim but one of its workshops. Scholarly Bible criticism and a reasonable, tolerant piety were produced by believers.',
          html: '<p>Sheehan follows the Bible from a text of revelation to a monument of literature, philology, and culture \u2014 a transformation carried out largely by devout Protestant scholars. Sorkin sets Catholic, Protestant, and Jewish figures side by side and finds a common project of reasonable religion. Against Israel this is the strongest evidence that the moderate Enlightenment was not a failure of nerve: it was a programme, and it had its own dead and its own achievements.</p>'
        }
      ],
      shifts: '<p>Cassirer made the Enlightenment a unity of thought; Peter Gay made it a party of philosophes; Darnton went below them to the trade; Pocock broke it into national Enlightenments; Israel put a radical fuse under all of them; Sorkin and Sheehan gave religion back its own share. The pattern is the same one week 5 shows for the Renaissance: a period-word survives its critics because a course still has to be taught, and the honest response is to say which Enlightenment you mean.</p>',
      ask: 'What material (instruments, print, academies), what exemplary acts, what character of habits, and what vision of flourishing would you actually name for 1750–1850? If those names cannot come from the rooms you have already walked, the four causes have become a fog.'
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
