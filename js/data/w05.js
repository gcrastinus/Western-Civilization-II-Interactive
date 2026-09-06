WC2.registerWeek({
  id: 5,
  short: 'Events and powers',
  title: '1450–1750 — Events and powers',
  lens: 'Events and powers',
  epigraph: {
    text: 'Liberty, Sancho, is one of the most precious gifts heaven has bestowed on men.',
    who: 'Miguel de Cervantes',
    source: 'Don Quixote, Part II, ch. 58'
  },
  kicker: 'Week 5 · leagues, a relief army, a captain of the Grand Alliance',
  lede: 'You already know, from Kevin Reilly, <em>The Human Journey</em>, the empires and encounters of 1450–1750. Here three fields on which a Christian-European coalition actually fought, and a dispute about whether “the Renaissance” names a world.',
  rooms: [
    {
      id: 'lepanto',
      title: 'Lepanto, 7 October 1571',
      nav: 'Lepanto',
      kind: 'battle',
      type: 'battle',
      blurb: 'Don John, a papal league, and a harbour fight that did not end the Ottomans.',
      duration: 30,
      question: {
        id: 'w05-q-lepanto',
        kind: 'mc',
        prompt: 'The Holy League fleet at Lepanto was commanded in chief by:',
        options: [
          { id: 'a', text: 'Philip II in person', correct: false },
          { id: 'b', text: 'Don John of Austria, Philip’s half-brother, with Venetian and papal squadrons beside him', correct: true },
          { id: 'c', text: 'The Doge of Venice', correct: false }
        ],
        reveal: '<p>Don John is twenty-four, illegitimate, and politically useful because he is royal enough to command Spaniards and not Spanish enough to be acceptable as a Venetian. Pius V had driven the league; Venice needed it after Cyprus. The battle is a coalition with a very short future.</p>'
      },
      map: {
        src: 'maps/lepanto-1571.jpg',
        alt: 'Contemporary print of the order of battle at Lepanto',
        filter: 'early',
        credit: 'Giovanni Francesco Camocio, 1574 (Wikimedia). A Venetian printed image: the battle as news and as boast.'
      },
      places: [
        { name: 'Gulf of Patras', x: 55, y: 48 },
        { name: 'Ottoman right', x: 70, y: 40 },
        { name: 'League left (Doria)', x: 30, y: 60 }
      ],
      sides: [
        { id: 'hl', name: 'Holy League', color: '#1e3a5f' },
        { id: 'ot', name: 'Ottoman fleet', color: '#3d4f3a' }
      ],
      units: [
        { id: 'center', side: 'hl', label: 'Don John, Real', path: [{ t: 0, x: 40, y: 50 }, { t: 0.5, x: 50, y: 48 }, { t: 1, x: 58, y: 46 }] },
        { id: 'ven', side: 'hl', label: 'Venetian left-centre', path: [{ t: 0, x: 36, y: 40 }, { t: 1, x: 55, y: 38 }] },
        { id: 'doria', side: 'hl', label: 'Doria, right', path: [{ t: 0, x: 38, y: 62 }, { t: 0.6, x: 48, y: 58 }, { t: 1, x: 52, y: 55 }] },
        { id: 'ali', side: 'ot', label: 'Müezzinzade Ali Pasha', path: [{ t: 0, x: 72, y: 48 }, { t: 0.5, x: 62, y: 48 }, { t: 1, x: 58, y: 47 }] },
        { id: 'uluj', side: 'ot', label: 'Uluj Ali', path: [{ t: 0, x: 74, y: 62 }, { t: 0.55, x: 60, y: 64 }, { t: 1, x: 78, y: 58 }] }
      ],
      beats: [
        { t: 0, title: 'Galleys in a gulf', html: '<p>Two fleets of galleys, a few galleasses pushed out in front of the League line as floating batteries. This is still a boarding fight, not Trafalgar. Guns matter; so do soldiers on benches.</p>' },
        { t: 0.4, title: 'The centres lock', html: '<p>Ali Pasha’s flagship meets Don John’s. The Ottoman commander is killed; his head is raised. Cervantes, in the League’s ranks, is wounded in the left hand — a fact he will advertise for the rest of a literary life. That is not the literature course’s <em>Quixote</em>; it is a soldier’s pension claim.</p>' },
        { t: 0.75, title: 'Uluj Ali escapes', html: '<p>On the League right, Gianandrea Doria manoeuvres; Uluj Ali slips out with part of the Ottoman right. A victory can be real and incomplete in the same afternoon.</p>' },
        { t: 1, title: 'What it did not do', html: '<p>Cyprus stayed Ottoman. The league dissolved. Tunis would be taken and lost again. Lepanto matters as a halt, a propaganda of banners, a proof that Ottoman sea-power was not a fate. It does not restore 1453. Anyone who tells you it “saved Europe” in a single day is preaching, not counting ships the following spring.</p>' }
      ],
      counterfactuals: [
        {
          title: 'If Doria had closed instead of manoeuvring',
          beats: [
            { t: 0, title: 'The obvious accusation', html: '<p>Venetians did accuse Doria of caution shading into treachery. A tighter right might have bagged Uluj Ali.</p>' },
            { t: 1, title: 'The reply', html: '<p>Galleys on a wing that over-extends become a second battle. Doria’s job was not to furnish a complete annihilation for Venetian verse. The coalition’s politics are in that caution: Genoese-Spanish interest is not Venetian revenge.</p>' }
          ],
          verdict: 'A more aggressive right could have made the victory tidier. It could also have lost the Spanish squadron. Coalitions fight with a reserve of distrust.'
        },
        {
          title: 'If the league had gone on to the Dardanelles',
          beats: [
            { t: 0, title: 'The preacher’s sequel', html: '<p>Pius V wanted a crusade that continued. Winter, typhus, and unpaid oarsmen are also facts.</p>' },
            { t: 1, title: 'Ottoman recovery', html: '<p>The arsenal at the Horn could replace galleys faster than Western sermons could replace leagues. A pursuit without a landing force is a parade.</p>' }
          ],
          verdict: 'The “why didn’t they finish it?” question ignores what a galley league is: a season, not a state.'
        }
      ]
    },
    {
      id: 'vienna',
      title: 'Vienna, 12 September 1683',
      nav: 'Vienna 1683',
      kind: 'battle',
      type: 'battle',
      blurb: 'Kara Mustafa’s siege; Sobieski’s charge from the Kahlenberg.',
      duration: 30,
      map: {
        src: 'maps/vienna-1683.jpg',
        alt: 'Contemporary plan of Vienna besieged, 1683',
        filter: 'early',
        credit: 'Italian printed plan of the 1683 siege (Wikimedia). The relief comes from the Vienna Woods, not from the river alone.'
      },
      places: [
        { name: 'Vienna', x: 55, y: 48 },
        { name: 'Kahlenberg', x: 40, y: 28 },
        { name: 'Ottoman camp', x: 60, y: 58 }
      ],
      sides: [
        { id: 'rel', name: 'Relief: Empire, Poland, Empire’s Germans', color: '#1e3a5f' },
        { id: 'ot', name: 'Kara Mustafa', color: '#3d4f3a' }
      ],
      units: [
        { id: 'sob', side: 'rel', label: 'Sobieski, Polish horse', path: [{ t: 0, x: 38, y: 26 }, { t: 0.5, x: 48, y: 40 }, { t: 1, x: 60, y: 55 }] },
        { id: 'lor', side: 'rel', label: 'Lorraine, imperial', path: [{ t: 0, x: 42, y: 32 }, { t: 1, x: 54, y: 50 }] },
        { id: 'km', side: 'ot', label: 'Kara Mustafa', path: [{ t: 0, x: 62, y: 58 }, { t: 0.7, x: 64, y: 62 }, { t: 1, x: 72, y: 70 }] }
      ],
      beats: [
        { t: 0, title: 'A siege already in the tunnels', html: '<p>From July the Ottomans have been mining the ravelins. The city is Starhemberg’s. Leopold I has left it. A relief army has to be built from imperial troops, Bavarians, Saxons, and John III Sobieski’s Poles — a coalition as awkward as Lepanto’s, on land.</p>' },
        { t: 0.45, title: 'Down from the woods', html: '<p>12 September: the relief deploys on the Kahlenberg and comes down. The Polish hussars’ charge is real and also immediately myth. It hits a camp that has spent its force on the walls and did not break off the siege in time to form a proper field army.</p>' },
        { t: 1, title: 'Kara Mustafa’s error', html: '<p>He had a choice: keep the trenches, or form to meet the relief. He tried to do both. He will be strangled at Belgrade on the sultan’s order. The Habsburgs will spend the next decades in Hungary. 1683 is not the end of Islam in Europe (see the map). It is the end of Ottoman strategic initiative on the middle Danube.</p>' }
      ],
      counterfactuals: [
        {
          title: 'If Kara Mustafa had met the relief in a formed line',
          beats: [
            { t: 0, title: 'The obvious field', html: '<p>Lift the close siege for two days, choose ground, fight the relief before it comes off the hills.</p>' },
            { t: 1, title: 'Why he did not', html: '<p>A grand vizier who lifts a siege that is about to fall looks like a man who failed. The trenches were his argument at court. The “obvious” military move was a courtly death.</p>' }
          ],
          verdict: 'Forming to meet Sobieski was the better battle. It was the worse dispatch to Edirne. Captains live in two time-scales.'
        },
        {
          title: 'If Sobieski had not come',
          beats: [
            { t: 0, title: 'An imperial army alone', html: '<p>Lorraine might still have fought. Whether he could have broken the camp without the Polish horse is a real question, not a pious one.</p>' },
            { t: 1, title: 'The city’s clock', html: '<p>The ravelins were days from going. Without a relief in that week, Vienna likely falls. The later “bulwark of Christendom” story depends on a Polish king who had his own Baltic problems and came anyway — because Ottoman Hungary on his southern flank was his problem too.</p>' }
          ],
          verdict: 'The counterfactual that drops Sobieski is the one that probably gives Mehmet’s successors a Danube capital. Coalitions have reasons; they are not miracles.'
        }
      ]
    },
    {
      id: 'blenheim',
      title: 'Blenheim, 13 August 1704',
      nav: 'Blenheim',
      kind: 'battle',
      type: 'battle',
      blurb: 'Marlborough and Eugene on the Danube; a captain’s politics as well as his march.',
      duration: 32,
      map: {
        src: 'maps/blenheim-1704.png',
        alt: 'The penetration at Blenheim, 13 August 1704',
        filter: 'early',
        credit: 'Battle of Blenheim, penetration (Wikimedia). The villages of Blenheim (Blindheim) and Oberglau pin the Franco-Bavarian line on the Danube.'
      },
      places: [
        { name: 'Blindheim', x: 72, y: 48 },
        { name: 'Oberglau', x: 48, y: 40 },
        { name: 'Danube', x: 80, y: 70 },
        { name: 'Nebelsbach', x: 50, y: 55 }
      ],
      sides: [
        { id: 'al', name: 'Marlborough & Eugene', color: '#7b2d26' },
        { id: 'fr', name: 'Tallard & Marsin / Bavaria', color: '#1e3a5f' }
      ],
      units: [
        { id: 'marl', side: 'al', label: 'Marlborough, centre', path: [{ t: 0, x: 36, y: 60 }, { t: 0.5, x: 48, y: 55 }, { t: 1, x: 58, y: 50 }] },
        { id: 'eug', side: 'al', label: 'Eugene, right', path: [{ t: 0, x: 30, y: 36 }, { t: 1, x: 44, y: 38 }] },
        { id: 'cutts', side: 'al', label: 'Cutts against Blindheim', path: [{ t: 0, x: 55, y: 58 }, { t: 0.4, x: 68, y: 50 }, { t: 1, x: 70, y: 48 }] },
        { id: 'tall', side: 'fr', label: 'Tallard', path: [{ t: 0, x: 70, y: 52 }, { t: 0.7, x: 66, y: 50 }, { t: 1, x: 74, y: 46 }] }
      ],
      beats: [
        { t: 0, title: 'The march', html: '<p>Marlborough has brought an English-Dutch army from the Low Countries to the Danube — a political act as much as a logistic one. He has to deceive the States-General about his aim, keep Queen Anne’s Tory-leaning court from pulling him back, and meet Eugene of Savoy, who is the imperial brain in the field. The French and Bavarians under Tallard and Marsin are covering Louis XIV’s bid to knock the emperor out of the war.</p>' },
        { t: 0.3, title: 'Pin the villages', html: '<p>Cutts attacks Blindheim and holds a mass of French infantry in the village. Eugene keeps Marsin busy. The Franco-Bavarian centre, between villages, is the hinge.</p>' },
        { t: 0.65, title: 'The centre breaks', html: '<p>Marlborough feeds cavalry through the Nebelsbach ground and breaks Tallard’s centre. Tallard is captured. A large French force in Blindheim is left to surrender because the field around them is gone.</p>' },
        { t: 1, title: 'The captain at home', html: '<p>Blenheim (the English name of Blindheim) makes Marlborough a duke with a house still called Blenheim. It does not make him unsackable. In 1711 the Tories will break him. A great captain in this culture is a courtier with an army. Count the House of Commons as well as the Danube.</p>' }
      ],
      counterfactuals: [
        {
          title: 'If Tallard had not packed so many men into Blindheim',
          beats: [
            { t: 0, title: 'The obvious flexibility', html: '<p>Keep a mobile reserve instead of a stuffed village.</p>' },
            { t: 1, title: 'Why villages eat armies', html: '<p>The Danube anchors the right. A village looks like a fort. It becomes a prison when the centre goes. The “obvious” un-stuffing requires Tallard to trust a field fight against Marlborough, which is what he was trying not to do.</p>' }
          ],
          verdict: 'A thinner Blindheim might have given Tallard a reserve. It would also have given Marlborough an easier march into the same centre. The error is real; it is not a cartoon of French stupidity.'
        },
        {
          title: 'If Marlborough had been ordered back to Flanders in June',
          beats: [
            { t: 0, title: 'The political counterfactual', html: '<p>This is the more important one. Dutch and Tory opinion had reasons to keep the army in the Low Countries.</p>' },
            { t: 1, title: 'Vienna’s year', html: '<p>Without the march, Tallard and the Bavarians remain a knife at the emperor. Blenheim is a battle that only exists because a captain spent his political credit on a road.</p>' }
          ],
          verdict: 'The march is the battle’s true counterfactual. Tactics decide the afternoon; the permission to be on the Danube decides the war’s shape.'
        }
      ]
    },
    {
      id: 'renaissance',
      title: 'What is the Renaissance?',
      nav: 'Dispute: Renaissance',
      kind: 'dispute',
      type: 'dispute',
      blurb: 'Burckhardt, Huizinga, Caferro, and the inventors of the word.',
      positions: [
        {
          scholar: 'Jacob Burckhardt',
          years: '1860',
          work: 'The Civilization of the Renaissance in Italy',
          summary: 'A new individual, a new state as a work of art, a discovery of the world and of man. Medieval veils drop.',
          html: '<p>Position (summary): Italy, especially, becomes a place where men treat the state, the self, and antiquity as things to be shaped. The book is a vision, not a census. It still sets the questions everyone else is answering.</p>'
        },
        {
          scholar: 'Johan Huizinga',
          years: '1919',
          work: 'The Autumn of the Middle Ages',
          summary: 'The same centuries in Burgundy and northern France look like a late medieval autumn: a culture of forms pushed to over-ripeness, not a sunrise.',
          html: '<p>Position (summary): if you start from tournaments, mourning, and religious image, “Renaissance” is the wrong weather. Caferro will later point out that the quarrel is also about which region you stand in.</p>'
        },
        {
          scholar: 'William Caferro',
          years: '2011',
          work: 'Contesting the Renaissance',
          summary: 'The category is a battlefield: period, place, modernity, the state, the individual, the economy. Even “military revolution” and Weber’s bureaucracy get loaded into it.',
          html: '<p>Position (summary): stop treating “Renaissance” as a fact that explains other facts. Ask what is being claimed — a state with a monopoly of force, a standing army (French <em>ordonnances</em> of the 1440s), a new art of describing nature, a new antiquity. Each claim has a different chronology. Ada Palmer’s later <em>Inventing the Renaissance</em> pushes the same unease: the period is something we keep remaking.</p>'
        }
      ],
      ask: 'Witt’s “two Latin cultures” in Italy (legal-notarial versus French-literary) is another way to refuse a single sunrise. Which of these helps you read a Blenheim dispatch? Which only helps you read a Vasari life?'
    },
    {
      id: 'printing',
      title: 'The press as a machine',
      nav: 'Printing',
      kind: 'reconstruction',
      type: 'reconstruction',
      demo: 'printing',
      blurb: 'Punch, matrix, stick, form, tympan — a craft, not a metaphor.',
      steps: [
        { title: 'Punch and matrix', html: '<p>A letter is cut in steel, struck into copper, set in a mould. Type is then cast as a crop. Mainz, the 1450s: this is a goldsmith’s solution to a clerk’s shortage.</p>', n: 0 },
        { title: 'The stick and the form', html: '<p>A compositor sets a line, then a page, then locks the form. Errors become mortal because they multiply. Proof is a new moral habit.</p>', n: 1 },
        { title: 'Impression', html: '<p>Ink, paper, the screw. A shop in Venice or Lyon is a small factory with a publisher’s politics: privileges, piracy, indexes of forbidden books. Tocqueville’s remark that printing opened the same resources to all classes is a final-cause claim built on this material.</p>', n: 3 }
      ]
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
        'Caferro, <em>Contesting the Renaissance</em> — already in the course folder; use a chapter, not the whole polemic, as a second pass.',
        'A museum film of a wooden press.'
      ]
    }
  ]
});
