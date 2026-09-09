WC2.registerWeek({
  id: 9,
  short: 'Events and powers',
  title: '1750–1850 — Events and powers',
  lens: 'Events and powers',
  epigraph: {
    text: 'People will not look forward to posterity, who never look backward to their ancestors.',
    who: 'Edmund Burke',
    source: 'Reflections on the Revolution in France, 1790'
  },
  kicker: 'Week 9 · three Napoleonic afternoons, and a quarrel about what 1776 ignited',
  lede: 'Kevin Reilly, <em>The Human Journey</em>, has already set the first modern societies and the disturbance of empires. This week treats Austerlitz, Leipzig, and Waterloo as captains’ work, and asks what 1776 ignited.',
  rooms: [
    {
      id: 'austerlitz',
      title: 'Austerlitz, 2 December 1805',
      nav: 'Austerlitz',
      kind: 'battle',
      type: 'battle',
      blurb: 'Napoleon gives the Pratzen Heights away, then takes them.',
      duration: 32,
      question: {
        id: 'w09-q-aus',
        kind: 'mc',
        prompt: 'Napoleon’s trap at Austerlitz depends on the Allies doing the “obvious” thing, which was:',
        options: [
          { id: 'a', text: 'To retreat to Olmütz without fighting', correct: false },
          { id: 'b', text: 'To come down from the Pratzen and roll up the French right, which looked weak', correct: true },
          { id: 'c', text: 'To wait for Prussia', correct: false }
        ],
        reveal: '<p>He thins the right (Davout will have to march), invites the Austro-Russian stroke, then puts Soult up the Pratzen into the hinge of their line. The ordinary person’s plan is the Allied plan. The reply is already on the road from Vienna.</p>'
      },
      map: {
        src: 'maps/austerlitz-1805.jpg',
        alt: 'Plan of the battle of Austerlitz, 1805',
        filter: 'modern',
        credit: 'Contemporary plan (Wikimedia). The plateau of the Pratzen is the hinge; the ponds to the south become a later legend of drowning.'
      },
      places: [
        { name: 'Pratzen', x: 52, y: 48 },
        { name: 'Telnitz / right', x: 40, y: 72 },
        { name: 'Santos / north', x: 48, y: 28 }
      ],
      sides: [
        { id: 'fr', name: 'Napoleon', color: '#1a3650' },
        { id: 'al', name: 'Alexander & Francis', color: '#7b2d26' }
      ],
      units: [
        { id: 'soult', side: 'fr', label: 'Soult, up the Pratzen', path: [{ t: 0, x: 44, y: 52 }, { t: 0.45, x: 52, y: 48 }, { t: 1, x: 58, y: 46 }] },
        { id: 'dav', side: 'fr', label: 'Davout, arriving', path: [{ t: 0, x: 28, y: 78 }, { t: 0.5, x: 38, y: 72 }, { t: 1, x: 42, y: 70 }] },
        { id: 'allied', side: 'al', label: 'Allied left, descending', path: [{ t: 0, x: 60, y: 44 }, { t: 0.4, x: 48, y: 60 }, { t: 1, x: 42, y: 68 }] }
      ],
      beats: [
        { t: 0, title: 'The empty height', html: '<p>Napoleon has abandoned the Pratzen. The Allied council — Kutuzov uneasy, the tsar’s entourage eager — sees a chance to cut the French from Vienna and crush a weak right. It is the textbook envelopment.</p>' },
        { t: 0.4, title: 'The hinge', html: '<p>While the Allied left pours south, Soult takes the plateau they have left. Their army is now two armies. Davout, after a brutal march, holds Telnitz just enough.</p>' },
        { t: 1, title: 'Austerlitz as politics', html: '<p>Francis makes peace at Pressburg. Pitt’s Third Coalition is broken. Napoleon is at the height of the imperial title he gave himself the previous year. The captain’s art here is not a charge; it is a refusal to look strong on the piece of ground everyone can see.</p>' }
      ],
      counterfactuals: [
        {
          title: 'If the Allies had stayed on the Pratzen',
          beats: [
            { t: 0, title: 'Kutuzov’s preference', html: '<p>Wait, keep the height, let Napoleon attack uphill, give Prussia time.</p>' },
            { t: 1, title: 'Napoleon’s reply', html: '<p>He cannot wait forever either — supply, the political need for a victory in the season of the new crown. A stay-put Allied army is a worse target. It is also a worse story for a tsar in the field. The “obvious” attack is a courtly need.</p>' }
          ],
          verdict: 'The sensible Allied course was inaction. Their coalition’s honour made it expensive. Napoleon’s trap is built of that honour.'
        },
        {
          title: 'If Davout had been late',
          beats: [
            { t: 0, title: 'The right actually collapses', html: '<p>Then Soult’s stroke is a raid into an army that has already won on the south.</p>' },
            { t: 1, title: 'The march as the battle', html: '<p>Austerlitz is a logistics bet. The counterfactual is a lame horse on the Vienna road.</p>' }
          ],
          verdict: 'The weak right is only a trap if it does not die. Davout’s arrival is the bet’s covering stake.'
        }
      ]
    },
    {
      id: 'leipzig',
      title: 'Leipzig, 16–19 October 1813',
      nav: 'Leipzig',
      kind: 'battle',
      type: 'battle',
      blurb: 'The Battle of the Nations: a coalition that had learned Austerlitz’s lesson.',
      duration: 30,
      map: {
        src: 'maps/leipzig-1813.jpg',
        alt: 'Battle of Leipzig, 1813',
        filter: 'modern',
        credit: 'Historical map of Leipzig 1813 (Wikimedia, if present; otherwise a period Europe map). The city sits on rivers; the French retreat will jam a bridge.'
      },
      places: [
        { name: 'Leipzig', x: 50, y: 48 },
        { name: 'Lindenau bridge', x: 38, y: 50 },
        { name: 'South (Schwarzenberg)', x: 55, y: 70 },
        { name: 'North (Bernadotte / Blücher)', x: 50, y: 28 }
      ],
      sides: [
        { id: 'fr', name: 'Napoleon', color: '#1a3650' },
        { id: 'co', name: 'Austria, Russia, Prussia, Sweden', color: '#7b2d26' }
      ],
      units: [
        { id: 'nap', side: 'fr', label: 'Napoleon', path: [{ t: 0, x: 52, y: 50 }, { t: 0.7, x: 48, y: 50 }, { t: 1, x: 36, y: 50 }] },
        { id: 'bluch', side: 'co', label: 'Blücher', path: [{ t: 0, x: 48, y: 22 }, { t: 1, x: 50, y: 36 }] },
        { id: 'schw', side: 'co', label: 'Schwarzenberg', path: [{ t: 0, x: 60, y: 78 }, { t: 1, x: 54, y: 60 }] }
      ],
      beats: [
        { t: 0, title: 'After Russia', html: '<p>1812 has eaten the Grande Armée. 1813 is a German war of new Prussian levies, Austrian re-entry, Bernadotte (once Napoleon’s marshal) with a Swedish army, and a Trachenberg plan: do not fight Napoleon in person; fight his marshals; converge.</p>' },
        { t: 0.5, title: 'Numbers', html: '<p>For once the coalition has them, and uses them on several roads. Leipzig is not a clever empty height. It is a city ringed until the ring closes. The Saxons’ defection in the line is a political event inside the battle.</p>' },
        { t: 1, title: 'The blown bridge', html: '<p>A corporal, or a panicked engineer, blows the Elster bridge too soon. French rear-guard is trapped. The captain who had made armies live on the march loses a river crossing to haste. Leipzig is the beginning of the end in Germany; it is not yet Waterloo.</p>' }
      ],
      counterfactuals: [
        {
          title: 'If they had fought him one army at a time',
          beats: [
            { t: 0, title: 'The old habit', html: '<p>This is what he wanted. It is Austerlitz’s coalition, again.</p>' },
            { t: 1, title: 'They had learned', html: '<p>The Trachenberg plan is the counterfactual they refused. Learning from 1805 is a political achievement (Metternich, Bernadotte, a tsar who would not go home), not a staff-college slogan.</p>' }
          ],
          verdict: 'The “obvious” heroic march against the emperor in person is how they used to lose. Leipzig is what a coalition looks like when it has stopped being obvious.'
        },
        {
          title: 'If the bridge had stood an hour longer',
          beats: [
            { t: 0, title: 'A cleaner retreat', html: '<p>More of the army reaches the Rhine intact.</p>' },
            { t: 1, title: 'The campaign still lost', html: '<p>Germany is gone either way. The blown bridge makes a disaster picturesque. It does not decide that the 1813 allies have more men and more reasons.</p>' }
          ],
          verdict: 'An hour more of the bridge would have been a tactical salvage, not a reversed war. The coalition’s achievement is the campaign, not the accident of a blown crossing.'
        }
      ]
    },
    {
      id: 'waterloo',
      title: 'Waterloo, 18 June 1815',
      nav: 'Waterloo',
      kind: 'battle',
      type: 'battle',
      blurb: 'Wellington’s ridge, Blücher’s arrival, a captain who had to win before the Prussians came.',
      duration: 32,
      map: {
        src: 'maps/waterloo-1815.png',
        alt: 'Waterloo campaign map',
        filter: 'modern',
        credit: 'Waterloo campaign (Wikimedia). The ridge of Mont-Saint-Jean; Ligny and Quatre Bras are yesterday’s battles, still in the legs of the armies.'
      },
      places: [
        { name: 'Mont-Saint-Jean', x: 50, y: 38 },
        { name: 'Hougoumont', x: 40, y: 48 },
        { name: 'La Haye Sainte', x: 52, y: 46 },
        { name: 'Plancenoit', x: 68, y: 52 }
      ],
      sides: [
        { id: 'al', name: 'Wellington & Blücher', color: '#7b2d26' },
        { id: 'fr', name: 'Napoleon', color: '#1a3650' }
      ],
      units: [
        { id: 'well', side: 'al', label: 'Wellington, reverse slope', path: [{ t: 0, x: 50, y: 36 }, { t: 1, x: 50, y: 36 }] },
        { id: 'bluch', side: 'al', label: 'Blücher / Bülow', path: [{ t: 0, x: 88, y: 70 }, { t: 0.55, x: 72, y: 58 }, { t: 1, x: 64, y: 50 }] },
        { id: 'nap', side: 'fr', label: 'Napoleon', path: [{ t: 0, x: 52, y: 62 }, { t: 0.7, x: 52, y: 50 }, { t: 1, x: 54, y: 48 }] },
        { id: 'imp', side: 'fr', label: 'Imperial Guard', path: [{ t: 0, x: 53, y: 60 }, { t: 0.85, x: 51, y: 42 }, { t: 1, x: 50, y: 40 }] }
      ],
      beats: [
        { t: 0, title: 'A wet morning', html: '<p>Napoleon waits for the ground to dry enough for guns. Wellington has placed himself on the road to Brussels, on a reverse slope, with Hougoumont and La Haye Sainte as breakwaters. He has an agreement with Blücher, who was beaten at Ligny two days ago and promised to come.</p>' },
        { t: 0.4, title: 'The farms', html: '<p>Hougoumont eats a French corps. D’Erlon’s attack on the left is broken by British infantry and the charge of the Household and Union brigades — a charge that then wrecks itself in the French gun-line. Ney’s later cavalry attacks go up a ridge that has not been shattered by a combined assault.</p>' },
        { t: 0.7, title: 'The Prussians at Plancenoit', html: '<p>Grouchy is off chasing what he thinks is the Prussian army. The real Prussian army arrives on Napoleon’s right. He has to peel the Young Guard into Plancenoit. The clock he needed for a single-enemy battle is gone.</p>' },
        { t: 1, title: 'The Guard', html: '<p>The last throw, up the ridge, fails in sight of the army. A retreat becomes a rout. Wellington and Blücher meet. The captain who designed Austerlitz has lost to a coalition that, this time, arrived on the same day.</p>' }
      ],
      counterfactuals: [
        {
          title: 'If he had attacked at dawn despite the mud',
          beats: [
            { t: 0, title: 'The obvious haste', html: '<p>Beat Wellington before Blücher can march.</p>' },
            { t: 1, title: 'The guns', html: '<p>His method is artillery. Dawn mud steals it. The “obvious” early attack is an attack without his arm. He might still have won a messy fight. He would not have had Austerlitz’s instrument.</p>' }
          ],
          verdict: 'Haste against Wellington without guns versus patience against a coming Prussian army: both are bad. That is the real situation, not a missed trick.'
        },
        {
          title: 'If Grouchy had “marched to the guns”',
          beats: [
            { t: 0, title: 'The legend', html: '<p>Hear the cannon, ignore the written order to follow the Prussians east, come in on Wellington’s left.</p>' },
            { t: 1, title: 'The order he had', html: '<p>Napoleon had told him to pursue. A marshal who abandons that pursuit and finds empty roads is also finished. The coalition’s achievement is Blücher’s decision to keep a promise after Ligny — not Grouchy’s failure to be psychic.</p>' }
          ],
          verdict: 'Grouchy is a convenient French memory. The battle is lost when a beaten Prussian army still marches toward the guns rather than away from them.'
        }
      ]
    },
    {
      id: 'blaze',
      title: 'What did 1776 ignite?',
      nav: 'Dispute: 1776',
      kind: 'dispute',
      type: 'dispute',
      blurb: 'Israel’s Expanding Blaze against a more constitutional, less radical America.',
      positions: [
        {
          scholar: 'Jonathan Israel',
          work: 'The Expanding Blaze',
          summary: 'The American Revolution as a transmitter of Radical Enlightenment: a democratic, secularizing, universalist fire that then lights Europe and the Atlantic through 1848.',
          html: '<p>Israel reads 1776 as a transmitter of Radical Enlightenment: a democratic, secularizing, universalist fire that then lights Europe and the Atlantic through 1848. The exhibits are Paine, the more democratic state constitutions, and the Haitian and European aftershocks. On this view the American Revolution is not a conservative tax revolt. It is a philosophy that had armies.</p>'
        },
        {
          scholar: 'Jack P. Greene and the institutional school',
          work: 'The Constitutional Origins of the American Revolution',
          summary: 'The quarrel is first a quarrel about the British constitution in the empire: charters, assemblies, the reach of Parliament. Ideas matter; they are not a Paris salon transplanted.',
          html: '<p>Greene’s claim is that the quarrel began as a quarrel about the British constitution in the empire: charters, assemblies, and the reach of Parliament. Provincial practice, not Spinoza, is the place to begin. Ideas matter; they are not a Paris salon transplanted. The later “blaze” is real in places, but it is not the whole of the American event. Burke can admire 1776 and abominate 1790 because he thinks they are different species of revolution.</p>'
        },
        {
          scholar: 'Contesting the French Revolution (Hanson and the readers in the folder)',
          summary: '1789–94 is itself a field of arguments: political culture, circumstance, ideology, contingency.',
          html: '<p>Readers of the French Revolution (Paul Hanson and others in the course folder) treat 1789–94 as a field of arguments about political culture, circumstance, ideology, and contingency. 1776 and 1789 are not a single flame. The legal and economic machinery of the next two weeks — codes, patents, mills — will not melt into a blaze either.</p>'
        }
      ],
      ask: 'Tocqueville’s equality-arc can host both Israel and Greene. Which one does it actually support once you remember the clergy, the lawyers, and the financiers of the Introduction — not the later chapters on America?'
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
        'Napoleon’s bulletins after Austerlitz — propaganda as a primary source.',
        'A staff-ride of Waterloo, on film if you want the ground.'
      ]
    }
  ]
});
