WC2.registerWeek({
  id: 8,
  short: 'Search for truth',
  title: '1450–1750 — Search for truth',
  lens: 'Search for truth',
  epigraph: {
    text: 'I do not feel obliged to believe that the same God who has endowed us with sense, reason, and intellect has intended us to forgo their use.',
    who: 'Galileo Galilei',
    source: 'Letter to the Grand Duchess Christina, 1615'
  },
  kicker: 'Week 8 · a groove, four attendants, a draper’s lens, a well at Pompeii',
  lede: 'Rens Bod, <em>World of Patterns</em>, has already surveyed early-modern knowledge. This week works through Galileo’s plane, the moons of Jupiter, Leeuwenhoek’s lens, Pompeii as a hole in the ground, and a dispute about whether there was a Scientific Revolution.',
  rooms: [
    {
      id: 'incline',
      title: 'Galileo’s inclined plane',
      nav: 'Inclined plane',
      kind: 'reconstruction',
      type: 'reconstruction',
      demo: 'incline',
      blurb: 'Odd numbers, a water clock, a groove lined with parchment.',
      question: {
        id: 'w08-q-gal',
        kind: 'mc',
        prompt: 'Galileo’s political trouble with the Holy Office is first of all a trouble about:',
        options: [
          { id: 'a', text: 'Whether balls roll in odd-number distances', correct: false },
          { id: 'b', text: 'How a mathematician-courtier may teach a cosmology that seems to judge Scripture and that has a Medici and then a Barberini as patrons', correct: true },
          { id: 'c', text: 'Leeuwenhoek’s animalcules', correct: false }
        ],
        reveal: '<p>The plane is a Padua and Florence craft. The trial is a Roman political-theological event (1616, then 1632–33) about <em>The Assayer</em>’s tone, the <em>Dialogue</em>’s Simplicio, and a pope who had been a patron. The demonstration and the trial are not the same event, and they are not unrelated. Galileo sought princely protection because cosmology was public.</p>'
      },
      steps: [
        { title: 'The groove', html: '<p>A long beam, a parchment lining to lessen friction, a bronze ball. Time is measured by weight of water. Distances in equal times go 1, 3, 5, 7… so the spaces from rest go 1, 4, 9, 16. That is the law of odd numbers, the mean-speed tradition made into an experiment you can hear if you put bells along the rail.</p>', t: 2 },
        { title: 'Why a plane, not a drop', html: '<p>Free fall is too fast for his clocks. Tilting stretches time. The limit, he argues, is the same law. A craft of slowing is the material cause of a claim about nature.</p>', t: 3 },
        { title: 'The courtier', html: '<p>He leaves Padua for Cosimo de’ Medici’s court after the moons of Jupiter (named Medicean). Later Urban VIII, a Barberini who had been friendly, becomes the pope of the <em>Dialogue</em>’s disgrace. The demonstration and the dedication are one career.</p>', t: 4 }
      ]
    },
    {
      id: 'jupiter',
      title: 'The moons of Jupiter',
      nav: 'Jupiter',
      kind: 'reconstruction',
      type: 'reconstruction',
      demo: 'jupiter',
      blurb: 'Sidereus Nuncius, January 1610: attendants that will not leave their planet.',
      steps: [
        { title: 'A spyglass', html: '<p>A Dutch spectacle-maker’s tube, improved in Venice and Padua. Galileo does not invent lenses. He points them and writes quickly.</p>', night: 0 },
        { title: 'Nights', html: '<p>Stars beside Jupiter change place, disappear, reappear on the other side. They are not fixed. They belong to Jupiter. There is more than one centre of motion.</p>', night: 2 },
        { title: 'The dedication', html: '<p>He names them for the Medici before Cosimo has quite agreed. A discovery is also a gift. That does not stain the observation; it is how a man without a modern laboratory lived.</p>', night: 5 }
      ]
    },
    {
      id: 'leeuwenhoek',
      title: 'Leeuwenhoek’s lens',
      nav: 'Leeuwenhoek',
      kind: 'reconstruction',
      type: 'reconstruction',
      demo: 'leeuwenhoek',
      blurb: 'A Delft draper, almost no Latin, letters to the Royal Society.',
      steps: [
        { title: 'The man', html: '<p>Antony van Leeuwenhoek (1632–1723) is a draper and a chamberlain of Delft. He grinds single lenses harder than compound microscopes of the day. He is not a university. The Royal Society in London becomes his public.</p>', mag: 20 },
        { title: 'Pepper-water', html: '<p>In 1676–77 he writes of tiny animals in infusions. He has already described mould, lice, the tail of a fish. Scale is the shock. A world of living things below the fly is a blow to any habit that treated the visible as the living.</p>', mag: 80 },
        { title: 'Why it convinces', html: '<p>He sends attestations from local worthies. He refuses, often, to send the best lenses. Trust is a social technology: a provincial craftsman and a London fellowship. Hooke and others have to believe a man who writes in Dutch.</p>', mag: 200 }
      ]
    },
    {
      id: 'pompeii',
      title: 'A well at Pompeii',
      nav: 'Pompeii',
      kind: 'reconstruction',
      type: 'reconstruction',
      demo: 'pompeii',
      blurb: '1748: the antique ceases to be only a text.',
      steps: [
        { title: '1748', html: '<p>Under the Bourbons of Naples, Rocque Joaquín de Alcubierre, an engineer, drives shafts. Herculaneum had already yielded finds. Pompeii, shallower, becomes a quarry of statues and then a city-plan. Winckelmann will write a history of ancient art while this is happening — not after a “rediscovery” in the abstract.</p>', stage: 0 },
        { title: 'What it does to a culture', html: '<p>Material cause: a buried town is stuff. Formal cause: Europe’s classicism acquires rooms, graffiti, loaves, a theatre not a treatise. The Grand Tour changes. So does the later Empire style. This is the search for truth as a shovel.</p>', stage: 1 }
      ]
    },
    {
      id: 'revolution',
      title: 'Was there a Scientific Revolution?',
      nav: 'Dispute: science',
      kind: 'dispute',
      type: 'dispute',
      blurb: 'Kuhn, the continuists, Shapin’s suspicion of the name.',
      positions: [
        {
          stance: 'opposing',
          scholar: 'Thomas Kuhn',
          work: 'The Structure of Scientific Revolutions',
          summary: 'Normal science in a paradigm; anomaly; crisis; a new paradigm that is not a simple accumulation. The book is about communities, not lone geniuses.',
          html: '<p>Kuhn’s claim is that Galileo’s plane is not simply more of the Merton mean-speed tradition. It is a new way of disciplining a community of practitioners: a paradigm, then anomaly, then crisis, then a new paradigm that is not a simple accumulation. Whether 1543–1687 is one revolution or several is a later fight among historians. Kuhn’s book describes the shape of that kind of fight, not a calendar of geniuses.</p>'
        },
        {
          stance: 'opposing',
          scholar: 'Continuists (Grant, Hannam, and the medievalists)',
          summary: 'The medieval arts faculty already quantified motion; the seventeenth century is an intensification, not a birth from nothing.',
          html: '<p>The continuists (Edward Grant, James Hannam, and others) point back to the medieval arts faculty, which already quantified motion. You have already seen the mean-speed theorem as a craft. They are not wrong that the tools exist. They may still underplay what is new: patronage, print, instruments, and the public of academies (the Cimento, the Royal Society, the Académie des sciences). On this view the seventeenth century is an intensification, not a birth from nothing.</p>'
        },
        {
          stance: 'opposing',
          scholar: 'Steven Shapin',
          work: 'The Scientific Revolution (the book that begins “there was no such thing”)',
          summary: 'The capital-letter event is a later label. What there was: new practices of trust, witnessing, experiment as a social form.',
          html: '<p>Shapin’s opening line is that there was no such thing as the Scientific Revolution. What there was, he says, were new practices of trust, witnessing, and experiment as a social form. Leeuwenhoek’s letters to the Royal Society are the exhibit: a Delft draper writing in Dutch, and London fellows who have to decide whether to believe him. The capital-letter “revolution” is a story that English and French publics later told themselves.</p>'
        },
        {
          stance: 'complementary',
          scholar: 'Herbert Butterfield and Alexandre Koyr\u00e9',
          years: '1939\u201349',
          work: 'the classic case for a break',
          summary: 'The change was in the mind before it was in the instruments: from a closed cosmos of natures and places to an infinite universe describable by mathematics.',
          html: '<p>Koyr\u00e9 argued that Galileo\u2019s decisive move was metaphysical \u2014 to treat the world as geometry \u2014 and that many of his experiments were thought-experiments. Butterfield, writing for a general audience, called the change the greatest event since the rise of Christianity. This is the position the other three are answering, and it deserves its strong form: not new facts, but a new idea of what an explanation is.</p>'
        },
        {
          stance: 'complementary',
          scholar: 'Peter Dear and the historians of practice',
          years: '1995\u2013',
          work: 'Discipline and Experience',
          summary: 'What changed is what counted as a fact: from the common experience anyone could appeal to, to the contrived event a named person reports.',
          html: '<p>Dear traces the shift from Aristotelian <em>experientia</em> \u2014 what happens always or for the most part, and so needs no witness \u2014 to the singular experiment done at a time, in a place, before named gentlemen. Jesuit mathematicians matter to that story as much as Galileo does. Complementary because it gives Shapin\u2019s social account an intellectual content, and gives Koyr\u00e9\u2019s mathematization a workshop and a witness list.</p>'
        }
      ],
      shifts: '<p>Butterfield and Koyr\u00e9 made the Revolution a change of mind; Kuhn made it a change in a community; the medievalists showed that the tools were older; the social historians asked who had to be believed, and by whom. No one now writes the story as a relay of geniuses. What stays open is whether the word names more than this: that by 1700 a certain kind of question could be settled in a way it could not have been settled in 1500.</p>',
      ask: 'Descartes wanted a physics a gentleman could trust. His life — the army, Dutch towns, Queen Christina — is part of that want, not a footnote to the <em>cogito</em>. On which of these three views does he sit most comfortably, and why?'
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
        'Galileo, <em>Sidereus Nuncius</em> — a night or two of the journal, in an old translation.',
        'A reconstruction of Galileo’s inclined plane, on film if you want to see the bells.'
      ]
    }
  ]
});
