WC2.registerWeek({
  id: 3,
  short: 'Law',
  title: 'Medieval to 1450 — Law',
  lens: 'Law',
  epigraph: {
    text: 'The king must not be under man but under God and under the law, because the law makes the king.',
    who: 'Henry de Bracton',
    source: 'De legibus et consuetudinibus Angliae'
  },
  kicker: 'Week 3 · Bologna, canons, a king who is emperor in his own kingdom',
  lede: 'Tamar Herzog, <em>A Short History of European Law</em>, has already given the shape of that law in the Middle Ages. This week watches two political uses of it: a pope’s courts treated as a constitution, and a king’s jurists inventing a language of the state.',
  rooms: [
    {
      id: 'bologna',
      title: 'Why Bologna',
      nav: 'Bologna',
      kind: 'prose',
      type: 'prose',
      blurb: 'A city of doctors and a city of students, not a campus.',
      question: {
        id: 'w03-q-gratian',
        kind: 'mc',
        prompt: 'Gratian’s Decretum (c. 1140) is best described as:',
        options: [
          { id: 'a', text: 'A papal code that abolished custom', correct: false },
          { id: 'b', text: 'A Concord of Discordant Canons — a teaching book that made a curriculum possible', correct: true },
          { id: 'c', text: 'The first constitution of the Holy Roman Empire', correct: false }
        ],
        reveal: '<p>It is a school book. That is why it matters. A generation of men learned to argue with it, then to write letters for popes and kings. The material cause of “European law” includes a city where students hired teachers and rented rooms.</p>'
      },
      html:
        '<p>Irnerius and the civilians recover Justinian’s books as a usable language of power. Gratian, a generation later, does the analogous thing for canons. Neither man is a philosopher on a stamp. Each is a teacher in a town that can feed strangers.</p>' +
        '<p>The student-university (Bologna) and the master-university (Paris) are different political animals. At Bologna the students incorporate to bargain over lodgings and lectures. That corporation is itself a legal fact — one of the medieval world’s new persons that are not men.</p>'
    },
    {
      id: 'tierney',
      title: 'Church law as constitutional thought',
      nav: 'Tierney',
      kind: 'dispute',
      type: 'dispute',
      blurb: 'Brian Tierney: conciliarism and rights do not begin in 1689.',
      positions: [
        {
          scholar: 'Brian Tierney',
          years: 'essays collected as Church Law and Constitutional Thought',
          summary: 'Canonists, facing popes and emperors who might err, developed languages of consent, representation, and (later in his career) subjective rights. The road to modern constitutionalism runs through the Church’s own law.',
          html: '<p>Tierney’s claim is that the Church’s own law taught later Europe how to talk about limited power. Gratian’s <em>Decretum</em> asks what happens if a pope becomes a heretic; conciliar writing asks whether a council might judge; the corporation as a <em>persona ficta</em> outlives its members. These are not decorations on “real” politics. They are the tools with which later men will talk about kings. Locke comes late in a conversation that the canonists had already begun.</p>'
        },
        {
          scholar: 'Gaines Post',
          years: '1964',
          work: 'Studies in Medieval Legal Thought — the emergence of the state',
          summary: 'Roman- and canon-law jurists in the twelfth and thirteenth centuries give kings a vocabulary of status, necessitas, and “the king is emperor in his own kingdom.”',
          html: '<p>Post’s claim is that twelfth- and thirteenth-century jurists gave kings a working vocabulary of public power. <em>Rex in regno suo est imperator</em> — the king is emperor in his own kingdom — is a lawyer’s sentence with a political aim: to stop imperial or papal claims from being the last word inside France, England, or Castile. The “state,” on this view, is not a nineteenth-century surprise. It is a set of maxims about what a fisc, a public good, and an emergency are. Frederick II’s <em>Liber Augustalis</em> puts that vocabulary into a statute-book. Edward I’s inquiries put it into another accent.</p>'
        }
      ],
      ask: 'Tierney is interested in limits on rulers; Post is interested in rulers becoming states. They are not opposites. Where, in Innocent III or in Bracton, do you need both?'
    },
    {
      id: 'ockham',
      title: 'Ockham at Munich',
      nav: 'Ockham',
      kind: 'great man',
      type: 'prose',
      blurb: 'A Franciscan’s philosophy is not the point until you know why he was in Bavaria.',
      html:
        '<p>William of Ockham did not leave Oxford in order to become a textbook on universals. He was called to Avignon over his opinions, became entangled in the Franciscan poverty quarrel with John XXII, and in 1328 fled with Michael of Cesena to the court of Ludwig of Bavaria — the emperor at odds with the same pope.</p>' +
        '<p>At Munich he writes against John XXII: on poverty, on the source of papal power, on the possibility that a pope can fall into heresy. This is politics. He is giving a hunted emperor a clerical language in which to say that the man in Avignon is not the last judge of the Church. Marsilius of Padua is in the same orbit with a more nakedly secular <em>Defensor pacis</em>. Ockham will not go as far as Marsilius. He still wants a Church. He wants it unable to claim full dominion over poor men and emperors.</p>' +
        '<p>The later schoolroom remembers “nominalism.” The books themselves come from a friar writing for Ludwig while John XXII’s sentences hang over him.</p>'
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
        'Tierney, <em>The Crisis of Church and State, 1050–1300</em> — the letters themselves.',
        'Bracton on the king under the law — a few pages, not the whole folio.'
      ]
    }
  ]
});
