WC2.intro = {
  kicker: 'Before the twelve weeks',
  title: 'Western Europe to the revolutions',
  lede: 'The question is what Western Europe was, from the high Middle Ages to 1848, and why it came to matter for the rest of the world.',
  about: '<p>The work moves through events and powers, economy, law, and the search for truth. Two instruments help: what a culture is, with its four causes; and Tocqueville’s long history of equality in the Introduction to <em>Democracy in America</em>. A third map, <em>The One and the Many</em>, is there when a comparison with Islam, China, or the later West would otherwise float free.</p>',
  rooms: [
    {
      id: 'how',
      title: 'Finding your way',
      kind: 'orientation',
      blurb: 'When doors open; questions at the threshold; what stays on this machine.',
      html: '<p>Weeks open on the Mondays of Fall 2026. Until then a week stays shut.</p><p>At the door of a room you will often be asked something you should already know — from last year’s Rome, from the atlas, or from Kevin Reilly, <em>The Human Journey</em>, Larry Neal and Rondo Cameron, <em>A Concise Economic History of the World</em>, Tamar Herzog, <em>A Short History of European Law</em>, or Rens Bod, <em>World of Patterns</em>. The right answer is given, then you go in.</p><p>What you answer stays on this machine. Nothing about you is sent to the instructor.</p><p>Where a Latin, French, or Italian original is on file and actually helps, a toggle will show it.</p>'
    },
    {
      id: 'culture',
      title: 'What a culture is',
      kind: 'instrument',
      blurb: 'Habits toward a vision of the good life; four causes, especially the material.',
      question: {
        id: 'q-culture',
        kind: 'mc',
        prompt: 'A culture, in the account used here, is primarily:',
        options: [
          { id: 'a', text: 'A set of artworks and monuments a people leaves behind', correct: false },
          { id: 'b', text: 'A set of habits shared among a group, aimed at the good life as that group understands it', correct: true },
          { id: 'c', text: 'The official religion of a state', correct: false },
          { id: 'd', text: 'The language a people speaks', correct: false }
        ],
        reveal: '<p>Art, law, language, and cult are among the things that form and express habits. They are not the definition. If you change the habits, you have changed the culture. If you only change the monuments, you have changed a museum.</p>'
      },
      html:
        '<p>The good life here means flourishing as the group understands flourishing — not a slogan, and not “whatever they happen to like.” That vision is the <strong>final cause</strong> of the culture. It is why the rest is there. The lesson is not subtle: if the vision of the best life is false, the habits will still be real, and they will still form people.</p>' +
        '<p>The habits taken together have a character — what people mean, often unfairly and often accurately, by a national temperament. That character is the <strong>formal cause</strong>. The aim in using it is not to collect stereotypes. It is to see what a people is disposed to do, and then, in one’s own case, to keep the strengths and refuse the vices.</p>' +
        '<p>Habits are acquired by repeated acts. Great deeds, battles, discoveries, and works of art matter because they are exemplary acts: other people take them as pictures of how to live. That is the <strong>efficient cause</strong>. Captains, jurists, and instrument-makers matter, and not only “forces.”</p>' +
        '<p>The <strong>material cause</strong> is what a culture can be made <em>from</em>: land and climate, lineage, and the discourse and arts already practiced. Architecture is named as the master art because it sets bodies in places and assigns the other arts their sites. A fair, a law court, a college, a mill, or a road is usually material cause — the stuff without which a certain habit cannot be had, however sincerely it is preached.</p>' +
        '<p>The four causes earn their keep when they explain something: why a Franciscan can exist in a town with a cloth market; why a standing army changes what a noble is; why a balance and a closed vessel make a new chemistry possible.</p>'
    },
    {
      id: 'tocqueville',
      title: 'Tocqueville’s seven hundred years',
      kind: 'spine',
      blurb: 'Equality of conditions as a long Christian-European fact.',
      question: {
        id: 'q-tocq',
        kind: 'mc',
        prompt: 'In the Introduction to Democracy in America, Tocqueville says equality entered French government first through:',
        options: [
          { id: 'a', text: 'The Revolution of 1789', correct: false },
          { id: 'b', text: 'The clergy, who opened their ranks to villein and lord', correct: true },
          { id: 'c', text: 'English parliamentary reform', correct: false },
          { id: 'd', text: 'The discovery of America', correct: false }
        ],
        reveal: '<p>1789 is late in his story. America is a new path, not the beginning. The clergy are first because baptism and orders are not a blood-right. That is a Greco-Roman-Christian inheritance working inside a feudal order — restated here only because without it Tocqueville’s whole arc is unintelligible.</p>'
      },
      type: 'passages',
      passages: [
        {
          title: 'The fundamental fact',
          who: 'Alexis de Tocqueville',
          years: '1835',
          work: 'Democracy in America, Introduction',
          html: '<p>The more I advanced in the study of American society, the more I perceived that the equality of conditions is the fundamental fact from which all others seem to be derived, and the central point at which all my observations constantly terminated.</p>',
          original: '<p>Plus j’avançais dans l’étude de la société américaine, plus je voyais dans l’égalité des conditions le fait générateur dont chaque fait particulier semblait descendre, et je le retrouvais sans cesse devant moi comme un point central où toutes mes observations venaient aboutir.</p>',
          source: 'Reeve translation (public domain); French from the 1835 text.'
        },
        {
          title: 'The clergy open the ranks',
          who: 'Tocqueville',
          html: '<p>Soon, however, the political power of the clergy was founded, and began to exert itself: the clergy opened its ranks to all classes, to the poor and the rich, the villein and the lord; equality penetrated into the Government through the Church, and the being who as a serf must have vegetated in perpetual bondage took his place as a priest in the midst of nobles, and not infrequently above the heads of kings.</p>',
          original: '<p>Bientôt le pouvoir politique du clergé se fonde et s’étend. Le clergé ouvre ses rangs à tous, au pauvre et au riche, au vilain et au seigneur; l’égalité commence à pénétrer par l’église au sein du gouvernement, et celui qui eût végété comme serf dans un éternel esclavage, se place comme prêtre au milieu des nobles, et va souvent s’asseoir au-dessus des rois.</p>'
        },
        {
          title: 'Seven hundred years of accidents',
          who: 'Tocqueville',
          html: '<p>The Crusades and the wars of the English decimated the nobles and divided their possessions; the erection of communities introduced an element of democratic liberty into the bosom of feudal monarchy; the invention of fire-arms equalized the villein and the noble on the field of battle; printing opened the same resources to the minds of all classes; the post was organized so as to bring the same information to the door of the poor man’s cottage and to the gate of the palace; and Protestantism proclaimed that all men are alike able to find the road to heaven. The discovery of America offered a thousand new paths to fortune…</p><p>The gradual development of the equality of conditions is therefore a providential fact, and it possesses all the characteristics of a divine decree: it is universal, it is durable, it constantly eludes all human interference, and all events as well as all men contribute to its progress.</p>'
        }
      ],
      ask: 'Notice what he does <em>not</em> say. He does not say that 1789 created equality, or that America invented it, or that the Church was a democracy. He says a Christian fact about souls, working through clergy, lawyers, money, letters, gunpowder, print, and vocation, slowly ruined a world of inherited force. The centuries that follow are, among other things, a test of that claim. Keep it, qualify it, or break it — but know what it is.'
    }
  ]
};
