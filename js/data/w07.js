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
  lede: 'Tamar Herzog, <em>A Short History of European Law</em>, has already given the early-modern legal map. This week follows Vitoria at Salamanca, Coke against the crown, and the claim that rights have a medieval legal ancestry.',
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
          stance: 'opposing',
          scholar: 'Brian Tierney',
          work: 'The Idea of Natural Rights',
          summary: 'Subjective rights — a faculty belonging to a person — are spoken in medieval canon law and in the Franciscan poverty debates (including Ockham’s world), long before the seventeenth century.',
          html: '<p>Tierney’s claim is that if the story of rights begins with Hobbes and Locke, the plot has already been lost. Medieval canonists and the Franciscan poverty debates spoke of <em>ius</em> as a power belonging to a person, of poverty as a renunciation of rights, and of consent. That vocabulary is the grammar of later “modern” talk. Locke is late in the conversation, not the first speaker.</p>'
        },
        {
          stance: 'opposing',
          scholar: 'The early-modern “absolutist” reading',
          summary: 'Bodin’s République, the French legists, James I’s own tracts: majesty is indivisible; rights are concessions.',
          html: '<p>Against Tierney, this reading says that whatever the canonists said, the sixteenth and seventeenth centuries hardened command: fiscal, military, and confessional. Bodin’s majesty is indivisible; rights look like concessions. Helmut Koenigsberger and others reply that “absolutism” itself covers very uneven reach. A French intendant is not a Russian autocrat, and an English king who cannot tax without Parliament is something else again.</p>'
        },
        {
          stance: 'opposing',
          scholar: 'Michel Villey',
          years: '1946\u201375',
          work: 'the nominalist thesis',
          summary: 'Subjective right is a late medieval mistake. Classical and Thomist <em>ius</em> means the just thing itself \u2014 an objective share \u2014 and Ockham turned it into a power belonging to an individual.',
          html: '<p>Villey is the position Tierney spent a career answering, and the strongest case against him. On Villey\u2019s account Aristotle and Aquinas ask what is due in a relation \u2014 the right thing, not a possession \u2014 and the Franciscan poverty quarrel forced Ockham to invent a subjective faculty in order to describe a friar who used goods without owning them. Everything modern about rights follows from that turn, and follows as a loss. Tierney answers from the canonists that the subjective sense is older than Ockham and does not require nominalism. The question is still live, and it is theological as much as legal.</p>'
        },
        {
          stance: 'complementary',
          scholar: 'Quentin Skinner and the Cambridge school',
          years: '1978\u2013',
          work: 'The Foundations of Modern Political Thought',
          summary: 'Ask what a writer was doing with a text, not only what the text says. Vocabularies are inherited; they are deployed in fights.',
          html: '<p>Skinner\u2019s method tells against both sides here when they are careless: a continuity of words is not a continuity of doctrine, and a later thinker using a scholastic term may be doing something the scholastics would not recognize. Applied to this room, it asks what Vitoria was doing at Salamanca with a crown listening, and what the Huguenot resistance writers were doing with the same conciliar material. Complementary because it does not settle who is right about <em>ius</em>; it changes what would count as evidence for an answer.</p>'
        }
      ],
      shifts: '<p>The textbook once began rights at 1690. Villey moved the origin back to the fourteenth century and called it a fall; Tierney moved it back further, to the twelfth-century canonists, and called it a development; Skinner asked both of them what their writers were doing. The practical result for this week is that Vitoria at Salamanca can be read neither as an early Locke nor as a man without a language of rights.</p>',
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
