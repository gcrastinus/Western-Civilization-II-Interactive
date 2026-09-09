WC2.registerWeek({
  id: 6,
  short: 'Economy',
  title: '1450–1750 — Economy',
  lens: 'Economy',
  epigraph: {
    text: 'Beware of little expenses; a small leak will sink a great ship.',
    who: 'Benjamin Franklin',
    source: 'Poor Richard Improved, 1745'
  },
  kicker: 'Week 6 · ledgers, chartered companies, a price revolution',
  lede: 'Larry Neal and Rondo Cameron, <em>A Concise Economic History of the World</em>, have already covered recovery, discovery, and economic nationalism. This week asks how double-entry actually works, and how historians have argued about the origins of capitalism.',
  rooms: [
    {
      id: 'bookkeeping',
      title: 'Double-entry',
      nav: 'Double-entry',
      kind: 'reconstruction',
      type: 'reconstruction',
      demo: 'bookkeeping',
      blurb: 'Pacioli teaches a Venetian craft; every fact named twice.',
      question: {
        id: 'w06-q-de',
        kind: 'mc',
        prompt: 'In double-entry, a sale of cloth on credit is recorded as:',
        options: [
          { id: 'a', text: 'A single line in a diary of goods out', correct: false },
          { id: 'b', text: 'Debit the buyer, credit cloth (or sales) — two equal names of one fact', correct: true },
          { id: 'c', text: 'A royal tax assessment', correct: false }
        ],
        reveal: '<p>What matters is not arithmetic elegance. A firm can now see whether it is consistent with itself. That is a new habit, and it needs paper, literacy, and a teacher. Pacioli, a Franciscan, puts it into print in 1494; the Venetians were already doing it.</p>'
      },
      steps: [
        { title: 'The journal', html: '<p>A day-book in narrative: who, what, how paid. Medieval merchants had books. The new thing is the discipline of the pair.</p>' },
        { title: 'The ledger', html: '<p>Each person and each kind of goods has an account. Debit left, credit right. If the pair does not balance, the world of the shop has a hole — theft, error, or a fact not yet named.</p>' },
        { title: 'Why a friar', html: '<p>Pacioli teaches mathematics to men who live by cargo. The Franciscan and the warehouse share a city. Material cause: print (week 5) can now carry a method that used to travel with a clerk.</p>' }
      ]
    },
    {
      id: 'capitalism',
      title: 'Origins of capitalism',
      nav: 'Dispute: capitalism',
      kind: 'dispute',
      type: 'dispute',
      blurb: 'Weber, Tawney, Braudel, and the agrarian question.',
      positions: [
        {
          scholar: 'Max Weber',
          work: 'The Protestant Ethic (and later economy and society)',
          summary: 'A this-worldly ascetic habit, especially in certain Protestant milieus, that makes methodical acquisition a vocation. Not “Protestants get rich,” a claim about a spirit of rational conduct.',
          html: '<p>Weber is not claiming that Protestants get rich. He is claiming that in certain Protestant milieus a habit of treating work as a calling, and of not spending the surplus on display, became a form of rational conduct. Fortunes are not the evidence; conduct is. Louis Bouyer would add that those “positive principles” have a Catholic prehistory. Weber is a sociologist of that habit, not a church historian.</p>'
        },
        {
          scholar: 'R. H. Tawney',
          work: 'Religion and the Rise of Capitalism',
          summary: 'The Reformation’s loosening of the old moral economy matters, but so do enclosures, the poor law, and the new respectability of interest.',
          html: '<p>Tawney’s picture is more English and more institutional than Weber’s. The Reformation’s loosening of the old moral economy matters, but so do enclosures, the poor law, and the new respectability of interest. The quarrel with the old canon of usury is a legal and moral event, not only a change of spirit.</p>'
        },
        {
          scholar: 'Fernand Braudel / Immanuel Wallerstein (in the background)',
          summary: 'Long duration, world-empires vs world-economies, a European core that sets terms of trade.',
          html: '<p>Braudel and Wallerstein treat capitalism as a world-system whose European core sets terms of trade, with Antwerp, then Amsterdam, then London as successive pivots. The Dutch VOC and the English East India Company are not illustrations of that system. They are how the system worked. Kenneth Pomeranz later asks why China did not go first. That question still has to pass through these European ledgers before it can be answered.</p>'
        }
      ],
      ask: 'Larry Neal and Rondo Cameron, <em>A Concise Economic History of the World</em>, have already given you prices, empires, and mercantilism. Which of these three disputes is actually about those facts, and which is a theory in search of a century?'
    },
    {
      id: 'colbert',
      title: 'Colbert at work',
      nav: 'Colbert',
      kind: 'great man',
      type: 'prose',
      blurb: 'A minister whose aim is a navy, a tariff, and a king who looks like an economy.',
      html:
        '<p>Jean-Baptiste Colbert (1619–1683) is Louis XIV’s controller of finances, builder of royal manufactures, of the Ordonnance de la marine, of a colonial company policy that often failed. His politics are to make the kingdom a single customs-work, to pull the nobility toward court (as Elias later theorized), and to fund a war-state without calling it bankruptcy.</p>' +
        '<p>He does not “invent mercantilism.” He practices a particularly administrative French version: inspectors, quality marks, a hatred of idle money. The material cause is a realm with roads, ports, and a paper bureaucracy that can, in principle, reach a cloth hall. The limit is war. Louvois’s army eats Colbert’s order.</p>'
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
        'Pacioli’s bookkeeping chapters exist in older translations; a few pages beat a business-school explainer.',
        'A VOC ship’s hold reconstructed in a Dutch museum film — after the dispute, not as a substitute for Weber or Braudel.'
      ]
    }
  ]
});
