WC2.registerWeek({
  id: 7,
  short: 'Law',
  title: '1450–1750 — Law',
  lens: 'Law',
  epigraph: {
    text: 'Ignorance of the law excuses no man; not that all men know the law, but because it is an excuse every man will plead, and no man can tell how to refute him.',
    who: 'John Selden',
    source: 'Table Talk, “Law”'
  },
  kicker: 'Week 7 · reception, natural rights older than Locke, how absolute was absolutism',
  lede: 'You already have, from Tamar Herzog, <em>A Short History of European Law</em>, the early-modern legal map. Here: Vitoria at Salamanca, Coke against the crown, and the claim that rights have a medieval legal ancestry.',
  rooms: [
    {
      id: 'vitoria',
      title: 'Vitoria and the Indies',
      nav: 'Vitoria',
      kind: 'great man',
      type: 'prose',
      blurb: 'A Dominican’s relectio as a political act in Charles V’s world.',
      question: {
        id: 'w07-q-vit',
        kind: 'mc',
        prompt: 'Vitoria’s lectures on the Indies are best seen as:',
        options: [
          { id: 'a', text: 'A private opinion with no audience', correct: false },
          { id: 'b', text: 'University disputations meant to bind the conscience of a Catholic monarchy that already held lands in America', correct: true },
          { id: 'c', text: 'The Spanish crown’s propaganda', correct: false }
        ],
        reveal: '<p>He is not Las Casas, and he is not a court chaplain reading what he is told. He is a Salamanca master telling a Catholic empire which titles to dominion fail (pure donation, mere unbelief of the inhabitants) and which, in his view, might still hold (protection of the innocent, just war). The school is a tribunal the crown cannot quite ignore.</p>'
      },
      html:
        '<p>Francisco de Vitoria (c. 1483–1546) trained in Paris, taught in Salamanca, and used the <em>relectio</em> — a public re-reading — as a political instrument. <em>De Indis</em> (1532) and <em>De iure belli</em> (1539) take the conquest as a case in the law of nations. His aim is not to give Peru back. It is to force a Christian prince to name a just title or admit sin.</p>' +
        '<p>This is the Greco-Roman inheritance (ius gentium) and the scholastic machine working on a new fact (a world not in Ptolemy). Restated only because without that inheritance Vitoria’s questions have no court to be asked in.</p>'
    },
    {
      id: 'coke',
      title: 'Coke, Bacon, and the English constitution',
      nav: 'Coke',
      kind: 'prose',
      type: 'prose',
      blurb: 'A chief justice who would not treat the king’s word as the last law.',
      html:
        '<p>Edward Coke (1552–1634) is a career: solicitor, then attorney general who prosecuted Essex and Raleigh, then chief justice who collides with James I, then a framer of the 1628 Petition of Right. His politics are the common law as a memory that binds kings — “artificial reason” against a monarch who has been reading Roman-law sovereignty.</p>' +
        '<p>Francis Bacon, his rival, wants law more amenable to a reforming crown. The quarrel is not two personalities. It is whether England is a jurisdiction of old writs or a state that may command. Koenigsberger’s early-modern Europe is full of such half-absolutisms. France looks more complete; even France is not a machine.</p>'
    },
    {
      id: 'rights',
      title: 'Natural rights before Locke',
      nav: 'Dispute: rights',
      kind: 'dispute',
      type: 'dispute',
      blurb: 'Tierney against the textbook that starts in 1690.',
      positions: [
        {
          scholar: 'Brian Tierney',
          work: 'The Idea of Natural Rights',
          summary: 'Subjective rights — a faculty belonging to a person — are spoken in medieval canon law and in the Franciscan poverty debates (including Ockham’s world), long before the seventeenth century.',
          html: '<p>Position (summary): if you begin the story with Hobbes and Locke you have already lost the plot. Jurists talking about <em>ius</em> as a power of the person, about poverty as a renunciation of rights, about consent, give later “modern” talk its grammar. Locke is late.</p>'
        },
        {
          scholar: 'The early-modern “absolutist” reading',
          summary: 'Bodin’s République, the French legists, James I’s own tracts: majesty is indivisible; rights are concessions.',
          html: '<p>Position (summary): whatever the canonists said, the sixteenth and seventeenth centuries are a hardening of command — fiscal, military, confessional. Koenigsberger and others reply that “absolutism” itself is a word covering very uneven reach. A French intendant is not a Russian autocrat; an English king who cannot tax without Parliament is something else again.</p>'
        }
      ],
      ask: 'Tamar Herzog, <em>A Short History of European Law</em>, has already shown you plural laws still living. Does Tierney explain that plurality, or does Bodin explain the attempt to kill it?'
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
        'Vitoria, <em>De Indis</em> — there are older English versions; read the titles he rejects, not a summary of “human rights.”',
        'Coke’s report of <em>Prohibitions del Roy</em> — a few pages.'
      ]
    }
  ]
});
