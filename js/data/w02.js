WC2.registerWeek({
  id: 2,
  short: 'Economy',
  title: 'Medieval to 1450 — Economy',
  lens: 'Economy',
  epigraph: {
    text: 'It is impossible for man’s happiness to consist in wealth.',
    who: 'Thomas Aquinas',
    source: 'Summa theologiae I–II, q. 2, a. 1'
  },
  kicker: 'Week 2 · fairs, ploughs, plague, ledgers still in the head',
  lede: 'You already have, from Larry Neal and Rondo Cameron, <em>A Concise Economic History of the World</em>, the Eurasian economic story, including the crisis. Here: the Champagne fair cycle, a closing frontier of clearance, and a quarrel about land and population.',
  about: '<p>Double-entry in its printed Italian form comes a little later. Here is the world in which such a method became worth teaching.</p>',
  rooms: [
    {
      id: 'fairs',
      title: 'The Champagne cycle',
      nav: 'Fairs',
      kind: 'map',
      type: 'map',
      blurb: 'Lagny, Bar-sur-Aube, Provins, Troyes — a calendar that made a region a machine.',
      question: {
        id: 'w02-q-fair',
        kind: 'short',
        prompt: 'Name one of the four principal Champagne fair towns.',
        accept: ['troyes', 'provins', 'lagny', 'bar-sur-aube', 'bar sur aube'],
        placeholder: 'A town',
        reveal: '<p>The cycle ran the year: Lagny in January, Bar-sur-Aube in Lent, Provins in May and again in September, Troyes in the hot months and again in the winter. Counts of Champagne sold protection, halls, and justice to men who had come from Flanders, Italy, and the Empire. That justice — the “guard of the fairs” — is part of the material cause of later royal law.</p>'
      },
      src: 'maps/france-1180.png',
      filter: 'medieval',
      credit: 'France c. 1180 (Wikimedia). Champagne sits east of Paris, on the roads toward the Rhine and the Saône.',
      hotspots: [
        { x: 54, y: 48, title: 'Troyes', html: '<p>A count’s town with water, walls, and a cloth hall. Italians coming up from the Rhône and Flemings coming down from the Scheldt can meet here without either of them owning the road.</p>' },
        { x: 52, y: 44, title: 'Provins', html: '<p>Upper and lower town, a fair of wool and money. The walls you can still walk are a commercial instrument: they make a peace in which a man will unpack cloth.</p>' },
        { x: 50, y: 42, title: 'Paris as customer', html: '<p>The fair cycle is not “instead of” a capital. It feeds a capital. Philip’s city eats Champagne’s peace.</p>' }
      ]
    },
    {
      id: 'frontier',
      title: 'Closing a frontier',
      nav: 'Lewis’s frontier',
      kind: 'extract',
      type: 'passages',
      blurb: 'Archibald R. Lewis: the medieval expansion as a frontier that closes around 1300.',
      passages: [
        {
          scholar: 'Archibald R. Lewis',
          years: '1958',
          work: 'The Closing of the Medieval Frontier, 1250–1350',
          summary: 'Lewis (the medieval historian, not C. S. Lewis) treats forest clearance, internal colonization, crusade, reconquista, and the German east as one frontier. When it closes, a society used to extensive growth must live otherwise.',
          html: '<p>Position (summary): for two centuries Latin Europe could grow by taking in more land and more people — assarts in the woods, new towns, the Baltic, Spain. Around the late thirteenth century that extensive margin narrows. What follows is not automatically “decline,” but a change of game: rents, famines, then plague, then a different intensity of use. The point is material cause. A culture of expanding settlement had been living off a supply of new acres. When the acres run out, the habits either change or become cruel.</p>'
        },
        {
          scholar: 'M. M. Postan',
          years: '1950s',
          work: 'Medieval agrarian society in its prime / land and population',
          summary: 'The English (and by extension European) medieval economy is bounded by the ratio of people to land, with diminishing returns on marginal soils.',
          html: '<p>Position (summary): population rises through the thirteenth century onto worse land; yields per head fall; the early fourteenth century is already in trouble before the Black Death. The plague then is a demographic collapse on an overstretched agrarian base, not a bolt from a clear sky. Postan is not “against trade.” He is against telling the medieval story as if the Italian companies were the whole of it.</p>'
        }
      ],
      ask: 'Lewis and Postan can be made to agree (the extensive margin closes). They can also be made to fight (is the motor land-and-people, or a whole frontier including crusade and towns?). Which fight actually helps you see the crisis you already know?'
    },
    {
      id: 'datini',
      title: 'Datini at Prato',
      nav: 'Datini',
      kind: 'great man',
      type: 'prose',
      blurb: 'A merchant whose papers survived; God and profit in one heading.',
      html:
        '<p>Francesco di Marco Datini (c. 1335–1410) was not a Medici. He was a dealer in arms, cloth, and bills, with houses in Avignon, Prato, Florence, Pisa, Genoa, Spain. He left an archive because he could not throw paper away: ledgers, letters, a will that founded a charity.</p>' +
        '<p>His politics are local and sharp. He has to live with Florentine fiscal demands, with papal Avignon as a market, with labour after the plague. He is not a “rising bourgeois” in a cartoon. He wants a rural villa and masses for his soul. The heading “in the name of God and of profit” is not a joke he is in on. It is a man trying to keep two final causes in one firm.</p>' +
        '<p>Later merchants copy such habits because they can see them: paper, couriers, a notary, a wife who can run a house when he is away. Whether that is already “capitalism” is a later quarrel.</p>'
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
        'Iris Origo, <em>The Merchant of Prato</em> — a readable life built from the archive; a book, not a video.',
        'A museum film of a surviving cloth hall, if you want the building itself.'
      ]
    }
  ]
});
