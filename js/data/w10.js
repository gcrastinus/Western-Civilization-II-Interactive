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
  lede: 'Larry Neal and Rondo Cameron, <em>A Concise Economic History of the World</em>, have already covered industry and the institutions around it. This week follows Arkwright’s patent fights and a dispute about why this economy took hold here first.',
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
          stance: 'opposing',
          scholar: 'Robert Allen (and the high-wage / cheap-energy view)',
          summary: 'Britain’s high silver wages and cheap coal make labour-saving machinery rational there first.',
          html: '<p>Allen’s claim is about relative prices. Britain’s high silver wages and cheap coal made labour-saving machinery rational there first. A spinning jenny in a cheap-labour region is a toy. In Lancashire it pays. The argument is material, and it is made with numbers.</p>'
        },
        {
          stance: 'opposing',
          scholar: 'Institutionalists (North, and Neal-Cameron’s own emphasis)',
          summary: 'Property, banks, a state that can borrow, a law of patents that sometimes works.',
          html: '<p>Institutionalists (Douglass North, and Neal and Cameron’s own emphasis) argue that property, banks, a state that can borrow, and a law of patents that sometimes works are what made the machines worth building. Arkwright’s lawsuits are the exhibit. Without courts and credit, coal is just a rock. The legal machinery of patents and codes is the other half of the same story as the mill.</p>'
        },
        {
          stance: 'complementary',
          scholar: 'Karl Polanyi',
          work: 'The Great Transformation',
          summary: 'The attempt to treat land, labour, and money as fictitious commodities; a double movement of market and social protection.',
          html: '<p>Polanyi’s claim is that land, labour, and money were treated as if they were ordinary commodities, which they are not. The result is a double movement: the market expands, and society protects itself. The poor law, Speenhamland, and later factory acts are not extras. They are the other half of the event. William Cobbett belongs here as a witness to that protection and that damage, not as scenery.</p>'
        },
        {
          stance: 'opposing',
          scholar: 'Joel Mokyr',
          years: '2002\u201317',
          work: 'The Gifts of Athena; A Culture of Growth',
          summary: 'What was new was useful knowledge and the traffic between those who knew why and those who could make it work.',
          html: '<p>Mokyr\u2019s objection to Allen is that high wages had occurred before without machines. His candidate is an Industrial Enlightenment: a culture in which natural philosophers and skilled artisans read each other, in which knowledge circulated cheaply through societies, encyclopaedias, and correspondence, and in which improvement had prestige. Britain\u2019s advantage on this account is a supply of instrument-makers, millwrights, and clockmakers who could execute an idea \u2014 Watt was one of them.</p>'
        },
        {
          stance: 'opposing',
          scholar: 'Kenneth Pomeranz',
          years: '2000',
          work: 'The Great Divergence',
          summary: 'The advanced regions of Europe and of China were much alike in 1750. What separated them was coal in the right place and the resources of the New World.',
          html: '<p>Pomeranz compares England with the Yangzi delta and finds similar life expectancy, market development, and land productivity. The divergence then comes from two pieces of luck: British coal near water transport, and colonies supplying sugar, cotton, and timber that would otherwise have required land Britain did not have. Opposing to Mokyr and the institutionalists because it makes the culture and the courts secondary to a geological and imperial accident.</p>'
        }
      ],
      shifts: '<p>The old answer was British genius, then British institutions. Allen made it a matter of relative prices and got numbers into the argument; Mokyr answered with knowledge and the people who could use it; Polanyi keeps asking what it cost the people it was done to; Pomeranz moved the whole question out of Europe and forced every other answer to explain why the Yangzi delta did not do the same thing. The disagreement is now unusually productive because all four sides accept that the others are measuring something real.</p>',
      ask: 'Kenneth Pomeranz’s China comparison — why not the Yangzi delta? — is the global version of Allen’s question. What, from the British mill, would you actually need to know before that comparison could mean anything?'
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
