WC2.registerWeek({
  id: 10,
  short: 'Economy',
  title: '1750–1850 — Economy',
  lens: 'Economy',
  epigraph: {
    text: 'Man naturally desires, not only to be loved, but to be lovely.',
    who: 'Adam Smith',
    source: 'The Theory of Moral Sentiments, 1759'
  },
  kicker: 'Week 10 · mills, poor laws, a quarrel about why Britain first',
  lede: 'You already have, from Larry Neal and Rondo Cameron, <em>A Concise Economic History of the World</em>, industry and the institutions around it. Here: Arkwright’s patent fights, and a dispute about why this economy, here.',
  rooms: [
    {
      id: 'arkwright',
      title: 'Arkwright at Cromford',
      nav: 'Arkwright',
      kind: 'great man',
      type: 'prose',
      blurb: 'A barber-turned-millowner whose politics are patents, water, and mill-time.',
      question: {
        id: 'w10-q-ark',
        kind: 'short',
        prompt: 'Arkwright’s first successful mill at Cromford is driven by what power?',
        accept: ['water', 'waterwheel', 'water wheel', 'the derwent'],
        placeholder: 'A source of power',
        reveal: '<p>Water, 1771, on the Derwent. Steam comes later, and not first as Watt’s elegant engine in every mill. The material cause is a river with a fall, a legal enclosure of water-rights, and a building that can hold machines and children on a clock.</p>'
      },
      html:
        '<p>Richard Arkwright (1732–1792) is a taker of other men’s gadgets, a ferocious patentee, a loser of some patent trials, a knighthood, a mill empire. His aim is not “the Industrial Revolution.” It is to own a method of spinning and to make a factory a kingdom of timed work.</p>' +
        '<p>Ure will later praise this kingdom. Cobbett will ride past its consequences in the countryside. Engels will walk its cities. The great man here is a man who changed what a day is for other people.</p>'
    },
    {
      id: 'why-britain',
      title: 'Why this economy, here?',
      nav: 'Dispute: industry',
      kind: 'dispute',
      type: 'dispute',
      blurb: 'Wages and coal, empire, institutions, Polanyi’s great transformation.',
      positions: [
        {
          scholar: 'Robert Allen (and the high-wage / cheap-energy view)',
          summary: 'Britain’s high silver wages and cheap coal make labour-saving machinery rational there first.',
          html: '<p>Position (summary): look at relative prices. A spinning jenny in a cheap-labour region is a toy. In Lancashire it pays. This is material cause with numbers.</p>'
        },
        {
          scholar: 'Institutionalists (North, and Neal-Cameron’s own emphasis)',
          summary: 'Property, banks, a state that can borrow, a law of patents that sometimes works.',
          html: '<p>Position (summary): Arkwright’s lawsuits are the point. Without courts and credit, coal is just a rock. The legal machinery of patents and codes is the other half of the same story.</p>'
        },
        {
          scholar: 'Karl Polanyi',
          work: 'The Great Transformation',
          summary: 'The attempt to treat land, labour, and money as fictitious commodities; a double movement of market and social protection.',
          html: '<p>Position (summary): the poor law, Speenhamland, later factory acts, are not extras. They are the other half of the event. Cobbett belongs here as a witness, not as colour.</p>'
        }
      ],
      ask: 'Pomeranz’s China comparison (why not the Yangzi delta?) is the global version of Allen. Stay inside the British mill long enough to know what you would be comparing.'
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
        'Cobbett, a single ride from <em>Rural Rides</em>.',
        'A surviving mill’s own museum film — after Arkwright’s career, not as “the Industrial Revolution in five minutes.”'
      ]
    }
  ]
});
