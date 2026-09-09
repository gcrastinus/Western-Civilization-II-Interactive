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
        { title: 'The claim', html: '<p>Heytesbury, Swineshead, and others at Merton College, Oxford, in the 1330s–40s, treat speed as something a body can have more or less of in a time. If the speed increases uniformly, the distances match those of a constant speed equal to the average of the first and last.</p>', T: 6 },
        { title: 'Oresme’s picture', html: '<p>Nicole Oresme, in Paris, makes the geometry visible: a triangle standing on the time-line. The rectangle of the mean height has the same area. Area here means “total quality,” which in the case of speed is the distance. This is a configuration of qualities, not a laboratory.</p>', T: 8 },
        { title: 'Who these men were', html: '<p>Bradwardine wrote <em>De proportionibus</em> and also went with Edward III to Crécy and died as archbishop in the plague. Oresme was a royal counsellor and a bishop. The theorem lives in the arts faculty and in the household of kings. That is the search for truth in this culture, not a separate estate of “scientists.”</p>', T: 8 }
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
        { title: 'The problem', html: '<p>Easter is the Sunday after the first full moon on or after the spring equinox. That sentence hides a clash of cycles: the week, the lunar month, the solar year. Dionysius Exiguus and later computists build tables so that a clerk with no Greek can still not split the Church.</p>', year: 1215 },
        { title: 'Golden number and epact', html: '<p>The nineteen-year Metonic cycle gives each year a golden number. The epact is the moon’s age on a fixed date. Together with the Sunday letter they pick a date. The arithmetic is a peace-treaty between astronomy and liturgy.</p>', year: 1215 },
        { title: 'Why 1215', html: '<p>Lateran IV meets this year. Innocent III wants a uniform Christendom. Easter tables are one of the quiet machines of that unity — less famous than a crusade, more faithfully obeyed.</p>', year: 1215 }
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
        { title: 'A measurement', html: '<p>Sight a known star, read its altitude, turn the rete until that star lies on the right almucantar, read the hour. Time is a position. Night-watches, prayer, and later navigation all drink from this.</p>', rot: 40 },
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
          scholar: 'R. W. Southern',
          work: 'Medieval Humanism and Other Studies',
          summary: 'Twelfth-century humanism is a concern with human nature, friendship, letter-writing, the dignity of the person in a Christian cosmos — Abelard, John of Salisbury, the schools — without being a revolt against the sacred.',
          html: '<p>Southern’s claim is that you do not need to wait for Petrarch to find men interested in men. The twelfth century already has a learned culture of the self, of counsel, and of classical quotation used as a living tongue: Abelard, John of Salisbury, the schools. This is not Burckhardt’s modern individual throwing off a medieval veil. It is a clerk’s humanism inside a Christian cosmos.</p>'
        },
        {
          scholar: 'M.-D. Chenu',
          work: 'The evangelical awakening',
          summary: 'The same century’s motor is apostolic: poverty, preaching, the gospel as a form of life in towns. The friars are not an extra. They are the religious form of an urban world.',
          html: '<p>Chenu’s claim is that schools without the evangelical awakening are only half the picture. In the same century, men and women try to live the apostolic life in cities that now exist. Francis and Dominic are political as well as holy: they answer heresy and wealth by a new kind of order that can walk a street. That order needs streets. Without towns, the friars have nowhere to preach in the way they did.</p>'
        }
      ],
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
