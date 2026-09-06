WC2.registerWeek({
  id: 1,
  short: 'Events and powers',
  title: 'Medieval to 1450 — Events and powers',
  lens: 'Events and powers',
  epigraph: {
    text: 'I would rather a Scot came from Scotland and governed the people of this kingdom well and loyally than that you should govern them ill.',
    who: 'Louis IX',
    source: 'advice to his son, in Joinville, Life of Saint Louis'
  },
  kicker: 'Week 1 · courts, roads, banners, the papal-imperial quarrel',
  lede: 'You already know, from Kevin Reilly, <em>The Human Journey</em>, the larger Eurasian setting of these centuries. Here the question is closer to the ground: who could summon whom, who could interdict a kingdom, who could take a city — Philip Augustus, a Sunday at Bouvines, a chevauchée, the last Roman siege.',
  about: '',
  rooms: [
    {
      id: 'powers',
      title: 'Powers c. 1214',
      nav: 'Map of powers',
      kind: 'map',
      type: 'map',
      blurb: 'Europe and the Mediterranean around 1190.',
      question: {
        id: 'w01-q-powers',
        kind: 'mc',
        prompt: 'In 1214 the man who held the title “Emperor” and fought Philip II of France was:',
        options: [
          { id: 'a', text: 'Frederick Barbarossa', correct: false },
          { id: 'b', text: 'Otto IV of Brunswick, the Welf, backed by King John', correct: true },
          { id: 'c', text: 'Frederick II, already unchallenged in Germany', correct: false },
          { id: 'd', text: 'Innocent III in person', correct: false }
        ],
        reveal: '<p>Otto IV is the Welf emperor, John’s nephew, excommunicated and losing ground to the young Hohenstaufen Frederick. Innocent III had once backed him and then turned. Bouvines is a French, Flemish, English, and imperial event at once.</p>'
      },
      src: 'maps/europe-1190.jpg',
      slot: 'w01-europe-1190',
      filter: 'medieval',
      alt: 'Europe and the Mediterranean lands around 1190',
      credit: 'Public-domain historical map (Wikimedia Commons). CSS-filtered to the medieval palette; Grok Bot will restyle.',
      hotspots: [
        { x: 38, y: 48, title: 'Île-de-France', html: '<p>Philip II “Augustus” is not yet “France” in the later sense. He is a king who has learned to take Angevin castles one by one, to use communes against barons, and to treat the royal demesne as a working estate. Bouvines will make him look inevitable. He was not inevitable in 1190.</p>' },
        { x: 32, y: 42, title: 'Angevin belt', html: '<p>Henry II’s sons still hold a belt from Normandy to Aquitaine at the start of this map’s generation. John will lose the northern part of it (1202–04). That loss is the precondition of Bouvines: John wants it back, and Otto is his instrument.</p>' },
        { x: 48, y: 40, title: 'The papal-imperial road', html: '<p>Innocent III (1198–1216) claims the right to judge between claimants to the empire, to lay kingdoms under interdict, and to summon a general council (Lateran IV, 1215). His politics are not “the Church” in the abstract: they are letters, legates, and the threat to un-king a man.</p>' },
        { x: 62, y: 58, title: 'The Roman empire that still calls itself Roman', html: '<p>Byzantium on this map is already the victim of 1204. The “Latin Empire” at Constantinople is a Frankish accident sitting on a Greek city. When Mehmet II arrives in 1453 he is finishing a long Ottoman replacement of that wreck, not toppling a timeless Byzantium from a textbook illustration.</p>' },
        { x: 58, y: 32, title: 'The Baltic and the German east', html: '<p>Riga, the Sword Brothers, later the Teutonic Order: a frontier of conversion and lordship that Archibald R. Lewis grouped with forest clearance, crusade, and reconquista as one medieval frontier. It is a power system, not a footnote to France.</p>' }
      ]
    },
    {
      id: 'innocent',
      title: 'Innocent III at work',
      nav: 'Innocent III',
      kind: 'great man',
      type: 'prose',
      blurb: 'Interdict, Lateran IV, and the failure to own Frederick II.',
      html:
        '<p>Lotario dei Conti di Segni became pope at thirty-seven. He had studied at Paris and Bologna. He wrote <em>De miseria humanae conditionis</em> before he had a court to run. Then he ran one.</p>' +
        '<p>His aims were concrete. He meant the papacy to be the ordinary court of appeal for Christendom, to decide which Welf or Hohenstaufen wore the imperial crown, to force Philip Augustus to take Ingeborg back, to put England under interdict until John became a papal vassal (1213), and to reform clergy and laity in a single council. Lateran IV (1215) is that program in canons: yearly confession, a definition of the eucharist, rules for Jews and crusaders, a new attempt to make bishops actually visit their dioceses.</p>' +
        '<p>He also meant to launch a crusade that would go to the Holy Land. The Fourth Crusade went to Zara and Constantinople instead. Innocent denounced the sack and then tried to harvest the wreck — a Latin patriarch, a paper suzerainty. That is not hypocrisy in the cheap sense. It is a politician of the keys refusing to admit that the event had escaped him.</p>' +
        '<p>Frederick II was his most important failure. Innocent had backed the Sicilian boy against Otto, had crowned the policy with Bouvines’ outcome, and died in 1216. Frederick lived to fight later popes for thirty years, to write a law-book for Sicily, and to take Jerusalem by treaty. The papal monarchy Innocent built was real. It was not a machine that could hold a Hohenstaufen who had a fleet and a kingdom of his own.</p>' +
        '<p>Material cause, once: Innocent’s power ran on roads, on the ability of a legate to arrive, on the fact that an interdict stopped mass in a parish that already knew what mass was. Without that already-Catholic landscape, the letters are paper.</p>'
    },
    {
      id: 'bouvines',
      title: 'Bouvines, 27 July 1214',
      nav: 'Bouvines',
      kind: 'battle',
      type: 'battle',
      blurb: 'A Sunday in Flanders that unmade an emperor and a recovering Angevin.',
      duration: 32,
      map: {
        credit: 'Schematic of the field at Bouvines: the Marcq, the Tournai–Lille road, the stone bridge. North at the top. Not a kingdom map — the fight is this crossing.'
      },
      fieldSvg: '<svg viewBox="0 0 1000 620" role="img" aria-label="Bouvines field, north at top">' +
        '<rect width="1000" height="620" fill="#e6d5b0"/>' +
        '<path d="M520 390 L980 410 L980 610 L490 600 Z" fill="#c5c99a"/>' +
        '<path d="M580 0 C 555 150 590 280 560 420 C 540 520 565 600 550 620" fill="none" stroke="#4e7a96" stroke-width="36" stroke-linecap="round"/>' +
        '<path d="M580 0 C 555 150 590 280 560 420 C 540 520 565 600 550 620" fill="none" stroke="#8eb4c9" stroke-width="18"/>' +
        '<path d="M1000 255 L 580 285 L 220 215 L 0 155" fill="none" stroke="#c4a574" stroke-width="20"/>' +
        '<rect x="538" y="262" width="70" height="46" rx="5" fill="#6e5436"/>' +
        '<text x="40" y="36" font-size="14" fill="#5a4a38" font-family="ui-sans-serif,sans-serif">NORTH · toward Lille</text>' +
        '<text x="980" y="240" text-anchor="end" font-size="15" fill="#3b2a18" font-family="ui-sans-serif,sans-serif">Tournai →</text>' +
        '<text x="573" y="252" text-anchor="middle" font-size="13" fill="#f6efe2" font-family="ui-sans-serif,sans-serif">bridge</text>' +
        '<text x="40" y="200" font-size="13" fill="#1e3a5f" font-family="ui-sans-serif,sans-serif">FRENCH</text>' +
        '<text x="980" y="200" text-anchor="end" font-size="13" fill="#7b2d26" font-family="ui-sans-serif,sans-serif">COALITION</text>' +
        '<text x="820" y="530" font-size="13" fill="#5a4a38" font-family="ui-sans-serif,sans-serif">marsh</text>' +
        '<text x="600" y="80" font-size="12" fill="#3d5c73" font-family="ui-sans-serif,sans-serif">Marcq</text>' +
        '</svg>',
      sides: [
        { id: 'fr', name: 'Philip II (France)', color: '#1e3a5f' },
        { id: 'imp', name: 'Otto IV, Ferrand, Salisbury', color: '#7b2d26' }
      ],
      resultFrom: 0.78,
      result: {
        short: 'French victory',
        html: 'Ferrand of Flanders and the Earl of Salisbury are prisoners. Otto IV has fled the field. The bridge — and the day — are Philip’s.'
      },
      units: [
        { id: 'fr-left', side: 'fr', label: 'Beauvais (French left)',
          path: [{ t: 0, x: 26, y: 24 }, { t: 0.35, x: 36, y: 28 }, { t: 0.55, x: 42, y: 30 }, { t: 1, x: 38, y: 26 }],
          status: [{ t: 0.78, cls: 'victor' }] },
        { id: 'fr-center', side: 'fr', label: 'Philip, household',
          path: [{ t: 0, x: 24, y: 48 }, { t: 0.35, x: 40, y: 46 }, { t: 0.55, x: 50, y: 45 }, { t: 1, x: 57, y: 44 }],
          labels: [{ t: 0.55, text: 'Philip unhorsed' }, { t: 0.72, text: 'Philip holds the bridge' }],
          status: [{ t: 0.72, cls: 'victor' }] },
        { id: 'fr-right', side: 'fr', label: 'Burgundy / Champagne',
          path: [{ t: 0, x: 28, y: 72 }, { t: 0.35, x: 38, y: 68 }, { t: 0.55, x: 44, y: 64 }, { t: 1, x: 40, y: 68 }],
          status: [{ t: 0.78, cls: 'victor' }] },
        { id: 'salisbury', side: 'imp', label: 'Salisbury',
          path: [{ t: 0, x: 86, y: 22 }, { t: 0.35, x: 70, y: 26 }, { t: 0.6, x: 58, y: 28 }, { t: 1, x: 32, y: 16 }],
          labels: [{ t: 0.72, text: 'Salisbury taken' }],
          status: [{ t: 0.72, cls: 'captured' }] },
        { id: 'ot-center', side: 'imp', label: 'Otto IV',
          path: [{ t: 0, x: 88, y: 46 }, { t: 0.35, x: 72, y: 45 }, { t: 0.55, x: 62, y: 44 }, { t: 0.68, x: 70, y: 32 }, { t: 1, x: 97, y: 12 }],
          labels: [{ t: 0.68, text: 'Otto flees' }],
          status: [{ t: 0.68, cls: 'fleeing' }] },
        { id: 'flanders', side: 'imp', label: 'Ferrand of Flanders',
          path: [{ t: 0, x: 86, y: 74 }, { t: 0.35, x: 70, y: 68 }, { t: 0.6, x: 58, y: 64 }, { t: 1, x: 34, y: 80 }],
          labels: [{ t: 0.72, text: 'Ferrand taken' }],
          status: [{ t: 0.72, cls: 'captured' }] }
      ],
      beats: [
        { t: 0, title: 'Sunday morning', html: '<p>Philip has been raiding toward Tournai. He begins to fall back toward the bridge at Bouvines so as not to be caught with a marsh and a stream behind him. Otto’s coalition — imperial household, Flemings, the Earl of Salisbury with John’s money — is finally close enough to force a battle. It is Sunday. Chroniclers on the French side will make much of that.</p>' },
        { t: 0.25, title: 'The coalition does not strike as one', html: '<p>Ferrand presses the French right. Otto’s knights aim at the cap with the lilies. Salisbury comes in on the other wing. They are not on a single clock. Guillaume le Breton, who was there as Philip’s chaplain, describes a mêlée of small fights, not a plan.</p>' },
        { t: 0.55, title: 'The king on the ground', html: '<p>Philip is unhorsed in the centre. The household closes over him. The imperial eagle is pulled down. This is the sort of moment in which a medieval battle is actually decided: not a map-arrow, a king’s body.</p>' },
        { t: 0.8, title: 'Prisoners, not a heap of dead', html: '<p>Ferrand and Salisbury are taken. Otto leaves the field. The political harvest is ransom, dispossession, and a story. John, still in the west, has already failed on the Loire. The coalition’s point was to fight two wars at once. Both failed.</p>' },
        { t: 1, title: 'After', html: '<p>Philip returns to Paris in a procession. Otto’s imperial cause collapses; Frederick II’s road opens. John’s barons, having paid for a lost war, move toward Magna Carta the next year. A Sunday in Flanders is a French, English, and imperial fact.</p>' }
      ],
      counterfactuals: [
        {
          title: 'If they had charged as one at dawn',
          premise: 'The ordinary thought: hit Philip before he finishes crossing toward the bridge.',
          units: [
            { id: 'fr-center', side: 'fr', label: 'Philip, still crossing', path: [{ t: 0, x: 48, y: 46 }, { t: 1, x: 36, y: 48 }] },
            { id: 'fr-left', side: 'fr', label: 'Beauvais, split', path: [{ t: 0, x: 42, y: 26 }, { t: 1, x: 30, y: 24 }] },
            { id: 'fr-right', side: 'fr', label: 'Burgundy, split', path: [{ t: 0, x: 44, y: 70 }, { t: 1, x: 32, y: 74 }] },
            { id: 'ot-center', side: 'imp', label: 'Otto + Ferrand + Salisbury as one', path: [{ t: 0, x: 82, y: 46 }, { t: 0.45, x: 64, y: 46 }, { t: 1, x: 50, y: 46 }] }
          ],
          beats: [
            { t: 0, title: 'The obvious move', html: '<p>Three allied forces arrive together and ride straight into the French column on the causeway.</p>' },
            { t: 0.5, title: 'What the allies actually lacked', html: '<p>They did not share a command. Ferrand wanted Flemish revenge and towns; Otto wanted a field and a captured king; Salisbury wanted John’s Angevin belt restored. A dawn charge as one body assumes a staff that did not exist.</p>' },
            { t: 1, title: 'The enemy’s reply', html: '<p>Even a cleaner charge meets the same French household that did, in the event, close over an unhorsed king. Philip’s advantage was not the map; it was a core of men who fought as his men. The coalition could have made the day bloodier. It is not clear they could have made it theirs without becoming a single army, which is what they were not.</p>' }
          ],
          verdict: 'The “obvious” concentrated attack was not available to a coalition that had not practiced being one army. That is the point of Bouvines as politics, not as sport.'
        },
        {
          title: 'If Philip had refused battle',
          premise: 'Hold the bridge, fall back on Arras, wait for Otto’s unpaid allies to fray.',
          units: [
            { id: 'fr-center', side: 'fr', label: 'Philip, west of the Marcq', path: [{ t: 0, x: 28, y: 46 }, { t: 1, x: 18, y: 40 }] },
            { id: 'fr-left', side: 'fr', label: 'Beauvais, holding', path: [{ t: 0, x: 26, y: 24 }, { t: 1, x: 18, y: 22 }] },
            { id: 'fr-right', side: 'fr', label: 'Burgundy, holding', path: [{ t: 0, x: 28, y: 70 }, { t: 1, x: 18, y: 72 }] },
            { id: 'ot-center', side: 'imp', label: 'Otto, unpaid, still east', path: [{ t: 0, x: 84, y: 46 }, { t: 1, x: 78, y: 48 }] },
            { id: 'flanders', side: 'imp', label: 'Ferrand, waiting', path: [{ t: 0, x: 84, y: 72 }, { t: 1, x: 80, y: 74 }] },
            { id: 'salisbury', side: 'imp', label: 'Salisbury, waiting', path: [{ t: 0, x: 84, y: 24 }, { t: 1, x: 80, y: 22 }] }
          ],
          beats: [
            { t: 0, title: 'The cautious king', html: '<p>Philip was often cautious. Refusing a Sunday battle would have fit a man who had spent a reign taking castles, not seeking fields.</p>' },
            { t: 1, title: 'The cost', html: '<p>Otto needed a victory to remain emperor in fact. If denied a field, the Flemings still sat on Philip’s north, and John was still a threat in Poitou. Delay was possible. It would have left the coalition in being. Philip fought because the column was already caught, and because a captured emperor was worth a mass.</p>' }
          ],
          verdict: 'Refusing battle preserves the army and postpones the political decision. It does not make Otto go home. The French victory is not proof that battle is always the right instrument; it is proof that this coalition could be broken in an afternoon if it offered one.'
        }
      ]
    },
    {
      id: 'crecy',
      title: 'Crécy, 26 August 1346',
      nav: 'Crécy',
      kind: 'battle',
      type: 'battle',
      blurb: 'Edward III’s hedged line; the political meaning of a chevauchée that stood and fought.',
      duration: 30,
      map: {
        src: 'maps/hyw-1435.png',
        alt: 'France during the Hundred Years’ War',
        filter: 'medieval',
        credit: 'France in the Hundred Years’ War (Wikimedia). Crécy-en-Ponthieu sits in the north, inland from the estuary of the Somme.'
      },
      places: [
        { name: 'Calais', x: 48, y: 18 },
        { name: 'Crécy', x: 50, y: 24 },
        { name: 'Paris', x: 52, y: 40 },
        { name: 'Bordeaux', x: 38, y: 62 }
      ],
      sides: [
        { id: 'en', name: 'Edward III', color: '#7b2d26' },
        { id: 'fr', name: 'Philip VI', color: '#1e3a5f' }
      ],
      units: [
        { id: 'longbow', side: 'en', label: 'Archers (dismounted)', path: [{ t: 0, x: 49, y: 26 }, { t: 1, x: 49, y: 26 }] },
        { id: 'ed', side: 'en', label: 'Edward, dismounted knights', path: [{ t: 0, x: 50, y: 27 }, { t: 1, x: 50, y: 27 }] },
        { id: 'black', side: 'en', label: 'Prince of Wales', path: [{ t: 0, x: 51, y: 28 }, { t: 0.6, x: 51, y: 27 }, { t: 1, x: 51, y: 27 }] },
        { id: 'fr1', side: 'fr', label: 'Genoese crossbows', path: [{ t: 0, x: 58, y: 30 }, { t: 0.3, x: 54, y: 28 }, { t: 0.5, x: 53, y: 29 }, { t: 1, x: 56, y: 32 }] },
        { id: 'fr2', side: 'fr', label: 'French knights, successive mounts', path: [{ t: 0, x: 60, y: 32 }, { t: 0.45, x: 54, y: 28 }, { t: 0.7, x: 52, y: 27 }, { t: 1, x: 55, y: 30 }] }
      ],
      beats: [
        { t: 0, title: 'After the Somme', html: '<p>Edward has marched from the Cotentin, burned a strip of the Île-de-France, and forced the Somme at Blanchetaque. He is not trying to “conquer France” in 1346. He is on a chevauchée: destroy, provoke, perhaps catch a king. He chooses a ridge at Crécy, hedges, wagons, dismounted men-at-arms, archers on the flanks.</p>' },
        { t: 0.3, title: 'Crossbows in the wet', html: '<p>Philip VI’s Genoese open. Their pavises are in the baggage. The ground is soft. Froissart — who was not there, and who writes for courts — still preserves the shape: the crossbows fail, the French horse ride into them, then into the English line in waves, not as one body.</p>' },
        { t: 0.65, title: 'The Black Prince’s division', html: '<p>The boy’s division is hard pressed. Edward, from the windmill, refuses to send the reserve: “let the boy win his spurs.” Whether or not the sentence is authentic, the structure is: three English battles, a king who will not unfix the line.</p>' },
        { t: 1, title: 'Blind king, dead knights, Calais next', html: '<p>John of Bohemia dies among the French. A list of bannerets is the medieval way of saying the political class of a kingdom was hit. Edward then sits down in front of Calais for eleven months. Crécy is the field that makes that siege possible; Calais is the English foothold that outlasts the field.</p>' }
      ],
      counterfactuals: [
        {
          title: 'If Philip had waited for the whole army',
          premise: 'Do not attack at the end of a day’s march, uphill, into stakes.',
          units: [
            { id: 'fr2', side: 'fr', label: 'French host, still forming', path: [{ t: 0, x: 60, y: 32 }, { t: 1, x: 58, y: 30 }] },
            { id: 'ed', side: 'en', label: 'Edward, eating his supplies', path: [{ t: 0, x: 50, y: 27 }, { t: 1, x: 48, y: 22 }] }
          ],
          beats: [
            { t: 0, title: 'The obvious caution', html: '<p>Several of Philip’s advisers said as much. A king of France who waits looks weak to the men who have ridden to be seen charging.</p>' },
            { t: 1, title: 'Edward’s reply', html: '<p>Edward cannot sit on a ridge in Ponthieu forever. Delay forces him toward the sea or toward a riskier move. Waiting was the better French military idea. It was a worse piece of chivalric politics for a Valois who had to look like a suzerain. The “obvious” alternative collides with why the army was there: to ride down an invader in sight of the host.</p>' }
          ],
          verdict: 'Tactical patience was available. The Valois courtly-military habit made it expensive. Crécy is among other things a lesson in formal cause: a nobility whose honor is a charge will charge.'
        },
        {
          title: 'If the French had fought on foot from the start',
          premise: 'Do what the English did: dismount the men-at-arms, make a hedged line of their own.',
          beats: [
            { t: 0, title: 'Copy the instrument', html: '<p>They will in fact learn this — Poitiers is still ten years off, and even then the learning is incomplete. In 1346 the French political advantage is cavalry shock, the thing that makes a noble a noble on a field.</p>' },
            { t: 1, title: 'Why it was not obvious to them', html: '<p>To dismount is to accept that the English have changed what a battle is. That acceptance is a later, bitter acquisition. Instruments (longbow, dismounting, palings) are material cause; using them against one’s own self-image is another matter.</p>' }
          ],
          verdict: 'The counterfactual asks a 1346 nobility to cease, for an afternoon, to be that nobility. Some later did. That is why the war lasts a hundred years, not an afternoon.'
        }
      ]
    },
    {
      id: 'constantinople',
      title: 'Constantinople, 1453',
      nav: '1453',
      kind: 'battle',
      type: 'battle',
      blurb: 'Mehmet II’s guns, a harbour chain, and the last Roman emperor on the walls.',
      duration: 34,
      map: {
        src: 'maps/constantinople-1453.png',
        alt: 'Siege of Constantinople, 1453',
        filter: 'medieval',
        credit: 'Siege map, 1453 (Wikimedia). The land walls face west; the Golden Horn is the harbour the chain was meant to close.'
      },
      places: [
        { name: 'Land walls', x: 28, y: 50 },
        { name: 'Golden Horn', x: 48, y: 28 },
        { name: 'Galata', x: 52, y: 22 },
        { name: 'Hagia Sophia', x: 62, y: 48 }
      ],
      sides: [
        { id: 'ot', name: 'Mehmet II', color: '#3d4f3a' },
        { id: 'byz', name: 'Constantine XI', color: '#1e3a5f' }
      ],
      units: [
        { id: 'guns', side: 'ot', label: 'Orban’s guns', path: [{ t: 0, x: 18, y: 52 }, { t: 1, x: 22, y: 50 }] },
        { id: 'jan', side: 'ot', label: 'Janissaries', path: [{ t: 0, x: 16, y: 48 }, { t: 0.7, x: 26, y: 50 }, { t: 1, x: 40, y: 50 }] },
        { id: 'ships', side: 'ot', label: 'Ships over the hill', path: [{ t: 0, x: 30, y: 10 }, { t: 0.4, x: 40, y: 16 }, { t: 1, x: 50, y: 24 }] },
        { id: 'const', side: 'byz', label: 'Constantine XI', path: [{ t: 0, x: 30, y: 50 }, { t: 0.8, x: 32, y: 50 }, { t: 1, x: 34, y: 52 }] },
        { id: 'gius', side: 'byz', label: 'Giustiniani', path: [{ t: 0, x: 28, y: 48 }, { t: 0.75, x: 30, y: 49 }, { t: 1, x: 36, y: 46 }] }
      ],
      beats: [
        { t: 0, title: 'April', html: '<p>Mehmet II is twenty-one. He has a foundry, a Hungarian or Transylvanian gun-founder (Orban) who had first offered his services to the emperor, and a fleet. Constantine XI Palaiologos has a few thousand men, including Giovanni Giustiniani’s Genoese, and the Theodosian walls that had mocked earlier sieges.</p>' },
        { t: 0.25, title: 'The chain and the hill', html: '<p>A chain closes the Horn. Mehmet has galleys dragged over greased ways behind Galata into the inner harbour. The point is not a trick for its own sake: it is to make the seaward wall a second land wall.</p>' },
        { t: 0.55, title: 'The guns do not “end the Middle Ages” by themselves', html: '<p>They break towers; the defenders fill breaches at night. What the guns do is force a daily labor the small garrison cannot indefinitely repeat. Material cause: powder, oxen, a slope to sit a bombard on. Efficient cause: a sultan who will not lift the siege because his father had, and who will kill to keep the janissaries at the breach.</p>' },
        { t: 0.8, title: '29 May, before dawn', html: '<p>Irregulars first, then more regular troops, then the janissaries. Giustiniani is wounded and withdrawn; the gate he used becomes a rumour of collapse. Constantine is killed in the press — later Greek writing will not let the body be a certainty, which is itself a political fact.</p>' },
        { t: 1, title: 'The city as a capital', html: '<p>Mehmet goes to Hagia Sophia and turns it into a mosque. He also needs the city inhabited: he moves populations in. 1453 is an Ottoman beginning as much as a Roman ending. Western courts treat it as an apocalypse and then hire Ottoman alliances for the next two centuries.</p>' }
      ],
      counterfactuals: [
        {
          title: 'If a Venetian relief fleet had arrived in April',
          premise: 'The obvious Western thought: Christendom should have saved the city.',
          beats: [
            { t: 0, title: 'Venice’s clock', html: '<p>Venice did send ships — late. A commercial republic does not empty its yards because a humanist writes to a pope. The delay is not a mystery of cowardice; it is a state with other wars and a ledger.</p>' },
            { t: 1, title: 'Mehmet’s reply', html: '<p>A fleet in the Horn in April would have made the overland haul less useful and the seaward assault harder. It would not have filled the land walls with men. The city’s disease was numbers. Ships do not become garrison.</p>' }
          ],
          verdict: 'A timely Venetian fleet changes the siege’s shape. It does not by itself reverse a demographic and military inequality that had been building since the fourteenth century.'
        },
        {
          title: 'If Constantine had accepted Mehmet’s earlier terms and yielded the city for a Morea lordship',
          premise: 'Live, rule in the Peloponnese, spare the sack.',
          beats: [
            { t: 0, title: 'The offered lesser life', html: '<p>Ottoman practice often left a local lord in place. Constantine’s refusal is the last act of a man whose title is still “Roman emperor.”</p>' },
            { t: 1, title: 'What yielding would have been', html: '<p>It would have spared some streets. It would also have ended the empire as a claim. Constantine’s politics are the walls. That is not romance; it is what the office had left to do.</p>' }
          ],
          verdict: 'The “sensible” surrender is sensible for a city. It is not available to an emperor whose only remaining capital is the name.'
        }
      ]
    },
    {
      id: 'feudalism',
      title: 'What is feudalism?',
      nav: 'Dispute: feudalism',
      kind: 'dispute',
      type: 'dispute',
      blurb: 'Ganshof, Bloch, and the revolt against the word.',
      question: {
        id: 'w01-q-feud',
        kind: 'mc',
        prompt: 'When a historian says “feudalism,” the most honest first question is:',
        options: [
          { id: 'a', text: 'Whether the people of 1200 used the word of themselves', correct: false },
          { id: 'b', text: 'Which cluster of practices is being named — tenure, lordship, or a whole social order', correct: true },
          { id: 'c', text: 'Whether Marx already explained it', correct: false }
        ],
        reveal: '<p>They did not call their world “feudalism.” That does not settle whether we may name it. It does require us to say what we are naming. The three positions below disagree about that.</p>'
      },
      positions: [
        {
          scholar: 'François-Louis Ganshof',
          years: '1944',
          work: 'Qu’est-ce que la féodalité ?',
          summary: 'A legal-military specialist. Feudalism is a set of institutions: vassalage (a personal bond of service, typically mounted) and the fief (a tenure supporting that service). It is not a synonym for “the Middle Ages.”',
          html: '<p>Position (summary): start from the oath and the fief, as they appear in Frankish and later legal custom. Do not melt the whole of rural life, the Church, and the towns into the word. Bouvines, on this view, is readable as a king using vassalic summons and household knights — the thing Ganshof isolated — not as “feudal society” in the lump.</p>'
        },
        {
          scholar: 'Marc Bloch',
          years: '1939–40',
          work: 'La Société féodale',
          summary: 'A whole social atmosphere: dependence, the weakening of the state, a particular tone of the sacred, a rural world of lords and peasants. Vassalage is one thread in a fabric.',
          html: '<p>Position (summary): you cannot understand the oath if you do not understand the hunger for protection, the habit of living through other men, the way a castle reorganizes a countryside. “Feudalism” names a society, not a contract. Bloch wrote it as Europe’s states were again failing — a fact about the book’s own efficient cause, not a reason to dismiss it.</p>'
        },
        {
          scholar: 'Elizabeth A. R. Brown / Susan Reynolds',
          years: '1974 / 1994',
          work: 'The Tyranny of a Construct; Fiefs and Vassals',
          summary: 'The textbook pyramid is a later legal-historical invention. Medieval people had lords, lands, and loyalties; they did not live inside a coherent “feudal system” reconstructed from sixteenth-century jurists.',
          html: '<p>Position (summary): stop using the word as an explanation. Ask, for a given decade and county, who owed what to whom, in what court, with what documents. Innocent III’s letters and Philip’s accounts will bear that kind of question. They will not bear “because of feudalism.”</p>'
        }
      ],
      ask: 'Where do they actually disagree — about the evidence, or about what a historical word is for? Try the word on Bouvines: which of the three helps, and where does it start to lie?'
    },
    {
      id: 'connections',
      title: 'Literature, art, music',
      nav: 'Connections',
      kind: 'connections',
      type: 'connections',
      blurb: 'Joinville, the Sainte-Chapelle, Villehardouin.'
    },
    {
      id: 'resources',
      title: 'Further',
      nav: 'Further',
      kind: 'resources',
      type: 'resources',
      blurb: 'Optional, after the rooms.',
      items: [
        'Joinville, <em>Life of Saint Louis</em> — any older translation; read the crusade and the canonization testimony, not only the pious stories.',
        'Guillaume le Breton’s account of Bouvines (in the <em>Philippide</em> and the prose chronicle) — a chaplain on the field.',
        'Villehardouin and Nicetas Choniates on the Fourth Crusade, if you want the same wreck from two sides.'
      ]
    },
    {
      id: 'after-reilly',
      title: 'The same generation, farther off',
      nav: 'Eurasia again',
      kind: 'review',
      type: 'passages',
      review: true,
      blurb: 'Song China, the Islamic heartlands, and a Sunday in Flanders.',
      html: '<p>You already hold Song China, the Islamic heartlands, and Latin Europe in one generation’s view. The question is only this: does that wide frame make Bouvines look smaller, or does it look like one of the few places where a Latin king actually concentrated force in a way those other societies, in those years, did not need to?</p>',
      passages: [
        {
          title: 'One generation',
          who: 'High medieval Eurasia',
          html: '<p>A Sunday in Flanders is still a Sunday in Flanders: Ferrand, Otto, Philip, a marsh and a bridge. The wide frame does not excuse not knowing who they were. It asks whether their kind of concentrated royal force was ordinary in that century, or rare.</p>'
        }
      ],
      ask: 'In a sentence: what, if anything, does the Eurasian generation change in the meaning of Bouvines?'
    }
  ]
});
