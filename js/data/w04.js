WC2.registerWeek({
  id: 4,
  short: 'Search for truth',
  title: 'Medieval to 1450 — Search for truth',
  lens: 'Search for truth',
  epigraph: {
    text: 'By doubting we come to inquiry, and by inquiry we perceive the truth.',
    who: 'Peter Abelard',
    source: 'Sic et Non, prologue'
  },
  kicker: 'Week 4 · Merton, Easter tables, a brass sky you can hold',
  lede: 'Rens Bod, <em>World of Patterns</em>, has already given a wide view of medieval knowledge. This week works three crafts by hand: the mean-speed theorem, the computus, and the astrolabe, and puts Oresme and Bradwardine back into the careers they actually had.',
  rooms: [
    {
      id: 'mean-speed',
      title: 'The mean-speed theorem',
      nav: 'Mean speed',
      kind: 'reconstruction',
      type: 'reconstruction',
      demo: 'mean-speed',
      blurb: 'A uniformly accelerated motion equals, in distance, a uniform motion at the mean speed.',
      question: {
        id: 'w04-q-mean',
        kind: 'mc',
        prompt: 'The Merton “mean speed” theorem says that a body speeding up uniformly from rest covers, in a given time:',
        options: [
          { id: 'a', text: 'The same distance as if it had moved the whole time at its final speed', correct: false },
          { id: 'b', text: 'The same distance as if it had moved the whole time at half its final speed', correct: true },
          { id: 'c', text: 'A distance that cannot be compared with uniform motion', correct: false }
        ],
        reveal: '<p>Half the final speed — the mean. Oresme later draws it as a triangle of speeds equal in area to a rectangle. Galileo will still be using this configuration. It is not “already the <em>Discorsi</em>.” It is a university art about qualities and motion, practiced by men who also preached and went to war.</p>'
      },
      steps: [
        { title: 'The claim', html: '<p>Heytesbury, Swineshead, and others at Merton College, Oxford, in the 1330s–40s, treat speed as something a body can have more or less of in a time. If the speed increases uniformly, the distances match those of a constant speed equal to the average of the first and last.</p>', stage: 1 },
        { title: 'Oresme’s picture', html: '<p>Nicole Oresme, in Paris, makes the geometry visible: a triangle standing on the time-line. The rectangle of the mean height has the same area. Area here means “total quality,” which in the case of speed is the distance. This is a configuration of qualities, not a laboratory.</p>', stage: 2 },
        { title: 'Who these men were', html: '<p>Bradwardine wrote <em>De proportionibus</em> and also went with Edward III to Crécy and died as archbishop in the plague. Oresme was a royal counsellor and a bishop. The theorem lives in the arts faculty and in the household of kings. That is the search for truth in this culture, not a separate estate of “scientists.”</p>', stage: 3 }
      ]
    },
    {
      id: 'computus',
      title: 'Computus: finding Easter',
      nav: 'Computus',
      kind: 'reconstruction',
      type: 'reconstruction',
      demo: 'computus',
      blurb: 'A cathedral and a convent must keep the same Sunday.',
      steps: [
        { title: 'The problem', html: '<p>Easter is the Sunday after the first full moon on or after the spring equinox. That sentence hides a clash of cycles: the week, the lunar month, the solar year. Dionysius Exiguus and later computists build tables so that a clerk with no Greek can still not split the Church.</p>', year: 1215, reveal: 1 },
        { title: 'Golden number and epact', html: '<p>The nineteen-year Metonic cycle gives each year a golden number. The epact is the moon’s age on a fixed date. Together with the Sunday letter they pick a date. The arithmetic is a peace-treaty between astronomy and liturgy.</p>', year: 1215, reveal: 2 },
        { title: 'Why 1215', html: '<p>Lateran IV meets this year. Innocent III wants a uniform Christendom. Easter tables are one of the quiet machines of that unity — less famous than a crusade, more faithfully obeyed.</p>', year: 1215, reveal: 4 }
      ]
    },
    {
      id: 'astrolabe',
      title: 'The astrolabe',
      nav: 'Astrolabe',
      kind: 'reconstruction',
      type: 'reconstruction',
      demo: 'astrolabe',
      blurb: 'A model of the sky you can hang from a thumb.',
      steps: [
        { title: 'What it is', html: '<p>A plate for your latitude, a rete of star-pointers that rotates, an alidade for sighting. Islamic astronomers perfected the form Latin Europe then used in schools. Chaucer wrote a treatise on it for his son. Without the instrument, “knowing the heavens” is a poem; with it, a clerk can read an hour from a star.</p>', rot: 10 },
        { title: 'A measurement', html: '<p>Sight a known star, read its altitude, turn the rete until that star lies on the right almucantar, read the hour. Time is a position. Night-watches, prayer, and later navigation all drink from this.</p>', rot: 40, alt: 34 },
        { title: 'Material cause', html: '<p>Brass, a workshop, a latitude. Without those, “knowing the heavens” is a poem. With them, a clerk in Oxford and a pilot in Genoa share a craft. The culture can now have habits (hours, fasts, sailings) it could not have had as precisely.</p>', rot: 70 }
      ]
    },
    {
      id: 'humanism',
      title: 'Medieval humanism, evangelical awakening',
      nav: 'Southern / Chenu',
      kind: 'dispute',
      type: 'dispute',
      blurb: 'Not the later “Renaissance,” and not only schools.',
      positions: [
        {
          stance: 'complementary',
          scholar: 'R. W. Southern',
          work: 'Medieval Humanism and Other Studies',
          summary: 'Twelfth-century humanism is a concern with human nature, friendship, letter-writing, the dignity of the person in a Christian cosmos — Abelard, John of Salisbury, the schools — without being a revolt against the sacred.',
          html: '<p>Southern’s claim is that you do not need to wait for Petrarch to find men interested in men. The twelfth century already has a learned culture of the self, of counsel, and of classical quotation used as a living tongue: Abelard, John of Salisbury, the schools. This is not Burckhardt’s modern individual throwing off a medieval veil. It is a clerk’s humanism inside a Christian cosmos.</p>'
        },
        {
          stance: 'complementary',
          scholar: 'M.-D. Chenu',
          work: 'The evangelical awakening',
          summary: 'The same century’s motor is apostolic: poverty, preaching, the gospel as a form of life in towns. The friars are not an extra. They are the religious form of an urban world.',
          html: '<p>Chenu’s claim is that schools without the evangelical awakening are only half the picture. In the same century, men and women try to live the apostolic life in cities that now exist. Francis and Dominic are political as well as holy: they answer heresy and wealth by a new kind of order that can walk a street. That order needs streets. Without towns, the friars have nowhere to preach in the way they did.</p>'
        },
        {
          stance: 'opposing',
          scholar: 'Colin Morris',
          years: '1972',
          work: 'The Discovery of the Individual, 1050\u20131200',
          summary: 'Self-knowledge, intention, and the inner life become subjects in their own right in the twelfth century \u2014 four centuries before Burckhardt says they do.',
          html: '<p>Morris\u2019s exhibits are Anselm\u2019s prayers, Abelard\u2019s <em>Historia calamitatum</em>, the new penitential emphasis on intention, and a literature of friendship and self-examination. The claim was aimed at Burckhardt, and it lands in week 5\u2019s contest as well as in this room: if the individual is discovered here, the Renaissance cannot be the discovery of him.</p>'
        },
        {
          stance: 'opposing',
          scholar: 'Caroline Walker Bynum',
          years: '1980',
          work: 'Did the Twelfth Century Discover the Individual?',
          summary: 'What it discovered was the group and the model. Twelfth-century writers examine the self in order to conform it to a pattern and enter an order.',
          html: '<p>Bynum answers Morris from the religious literature: men and women of that century examine themselves intensely and then ask which <em>ordo</em> they belong to, which rule they will follow, whose life they will imitate. Self-discovery and self-effacement are one movement. The essay is a model of how to answer a large thesis \u2014 not by denying the evidence but by showing what the evidence was for.</p>'
        },
        {
          stance: 'complementary',
          scholar: 'Giles Constable',
          years: '1996',
          work: 'The Reformation of the Twelfth Century',
          summary: 'Schools and friars are two parts of one reform: new orders, new forms of life, and a reordering of what a Christian life could be.',
          html: '<p>Constable puts the Cistercians, the canons regular, the hermits, and the schools in one frame and calls the whole a reformation \u2014 a word chosen to make the point that the sixteenth century did not invent the idea of a return to a purer form. Complementary because it holds Southern\u2019s clerk and Chenu\u2019s friar together without making either the motor of the other.</p>'
        }
      ],
      shifts: '<p>Haskins put a renaissance in the twelfth century; Southern gave it a humanism; Chenu gave it a gospel; Morris gave it an individual, and Bynum took the individual back and returned him to his order. Constable then declined to choose. The result is that no one can now describe the twelfth century as a prelude \u2014 which is why week 5\u2019s quarrel about the Renaissance begins with the medievalists already in the room.</p>',
      ask: 'Southern’s clerk and Chenu’s friar can inhabit one town. When you speak of “medieval thought,” which of the two are you actually describing?'
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
        'James Hannam, <em>The Genesis of Science</em> — a popular continuist case, to set beside later arguments that the seventeenth century is a break.',
        'A museum astrolabe, in the hand or on film.'
      ]
    }
  ]
});
