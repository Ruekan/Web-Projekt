export interface SportSection {
  title: string;
  image: string;
  imageAlt: string;
  text: string;
}

export interface SportOffer {
  id: string;
  name: string;
  teaser: string;
  heroImage: string;
  heroAlt: string;
  slideImage: string;
  slideAlt: string;
  sections: SportSection[];
}

export const SPORT_OFFERS: SportOffer[] = [
  {
    id: 'fussball',
    name: 'Fußball',
    teaser:
      'Fußball verbindet Leidenschaft, Teamgeist und taktisches Denken. Bei uns zählt jeder Lauf, jeder Pass und das gemeinsame Ziel.',
    heroImage: '/Bilder/Fuball1.png',
    heroAlt: 'Fußballmannschaft auf dem Spielfeld',
    slideImage: '/Bilder/slideshow/fussball.png',
    slideAlt: 'Fussballmannschaft des SV Ente Heidenheim',
    sections: [
      {
        title: 'Leidenschaft und Teamgeist',
        image: '/Bilder/fussball-team.png',
        imageAlt: 'Fußballmannschaft des SV Ente Heidenheim',
        text:
          'Unsere Fußballmannschaft lebt von Zusammenhalt und Einsatzbereitschaft. Auf dem Platz unterstützen sich alle gegenseitig, übernehmen Verantwortung und wachsen als Team an jeder Spielsituation.',
      },
      {
        title: 'Kampfgeist bis zum Schluss',
        image: '/Bilder/fussball-player-1.png',
        imageAlt: 'Fußballspieler in Aktion',
        text:
          'Auch wenn ein Spiel schwierig wird, bleiben wir mutig und fokussiert. Diese Mentalität macht unsere Mannschaft stark und sorgt dafür, dass wir bis zur letzten Minute an unsere Chance glauben.',
      },
      {
        title: 'Taktik und Spielverständnis',
        image: '/Bilder/fussball-player-2.png',
        imageAlt: 'Fußballspieler beim Angriff',
        text:
          'Fußball ist für uns nicht nur Bewegung, sondern auch Strategie. Wir lesen das Spiel, passen uns flexibel an und suchen gemeinsam die beste Lösung für jede Situation.',
      },
    ],
  },
  {
    id: 'handball',
    name: 'Handball',
    teaser:
      'Handball steht für Tempo, Kraft und starke Entscheidungen. Unsere Teams verbinden Dynamik mit Fairness und echtem Zusammenhalt.',
    heroImage: '/Bilder/Handball.png',
    heroAlt: 'Handballspieler in dynamischer Aktion',
    slideImage: '/Bilder/slideshow/handball.png',
    slideAlt: 'Handballtraining beim SV Ente Heidenheim',
    sections: [
      {
        title: 'Kraft und Geschwindigkeit',
        image: '/Bilder/handball-team.png',
        imageAlt: 'Handballmannschaft des SV Ente Heidenheim',
        text:
          'Handball fordert schnelle Angriffe, entschlossene Abwehrarbeit und ein gutes Gespür für den richtigen Moment. Genau diese Mischung macht jedes Training intensiv und abwechslungsreich.',
      },
      {
        title: 'Strategie im Team',
        image: '/Bilder/handball-player-1.png',
        imageAlt: 'Handballspieler beim Wurf',
        text:
          'Unsere Spielerinnen und Spieler arbeiten eng zusammen, kommunizieren klar und finden im Zusammenspiel kreative Lösungen. So entsteht ein Team, das auch unter Druck ruhig bleibt.',
      },
      {
        title: 'Ausdauer und Hingabe',
        image: '/Bilder/handball-player-2.png',
        imageAlt: 'Handballspieler in der Abwehr',
        text:
          'In den entscheidenden Minuten zeigt sich unsere Stärke: Wir bleiben konzentriert, laufen weiter und kämpfen gemeinsam um jeden Ball.',
      },
    ],
  },
  {
    id: 'basketball',
    name: 'Basketball',
    teaser:
      'Basketball bringt Tempo, Präzision und Teamrhythmus zusammen. Jeder Pass, jeder Wurf und jede Defense zählt.',
    heroImage: '/Bilder/Basketball.png',
    heroAlt: 'Basketballspieler beim Wurf',
    slideImage: '/Bilder/slideshow/basketball.png',
    slideAlt: 'Basketballtraining beim SV Ente Heidenheim',
    sections: [
      {
        title: 'Rhythmus und Zusammenspiel',
        image: '/Bilder/basketball-team.png',
        imageAlt: 'Basketballmannschaft des SV Ente Heidenheim',
        text:
          'Basketball lebt vom gemeinsamen Timing. Unsere Teams trainieren Laufwege, Pässe und Abschlüsse so, dass aus einzelnen Aktionen ein klarer Spielfluss entsteht.',
      },
      {
        title: 'Sprungkraft und Präzision',
        image: '/Bilder/basketball-ball.png',
        imageAlt: 'Basketball auf dem Spielfeld',
        text:
          'Ob Korbleger, Distanzwurf oder Rebound: Technik und Konzentration entscheiden. Wir fördern saubere Bewegungen, mutige Entscheidungen und ein gutes Gefühl für das Spiel.',
      },
      {
        title: 'Defense und Wille',
        image: '/Bilder/basketball-player.png',
        imageAlt: 'Basketballspieler in Aktion',
        text:
          'Gerade in engen Spielen braucht es Einsatz in der Verteidigung und Vertrauen im Team. Deshalb arbeiten wir an Fitness, Kommunikation und mentaler Stärke.',
      },
    ],
  },
  {
    id: 'badminton',
    name: 'Badminton',
    teaser:
      'Badminton kombiniert Schnelligkeit, Präzision und taktische Finesse. Ideal für alle, die Reaktion und Technik trainieren möchten.',
    heroImage: '/Bilder/Badminton.png',
    heroAlt: 'Badmintonspieler beim Schlag',
    slideImage: '/Bilder/slideshow/badminton.png',
    slideAlt: 'Badmintontraining beim SV Ente Heidenheim',
    sections: [
      {
        title: 'Schnelligkeit und Reaktion',
        image: '/Bilder/badminton-1.jpeg',
        imageAlt: 'Badmintonspieler beim schnellen Ballwechsel',
        text:
          'Badminton gehört zu den schnellsten Rückschlagsportarten. Unsere Spielerinnen und Spieler trainieren kurze Antritte, schnelle Entscheidungen und präzise Bewegungen.',
      },
      {
        title: 'Technik und Kontrolle',
        image: '/Bilder/badminton-2.jpeg',
        imageAlt: 'Badmintontraining mit konzentriertem Spiel',
        text:
          'Clears, Drops, Drives und Smashes verlangen Kontrolle und Timing. Wir arbeiten daran, das Spiel bewusst zu variieren und den Gegner clever unter Druck zu setzen.',
      },
      {
        title: 'Ausdauer und Fokus',
        image: '/Bilder/badminton-3.jpeg',
        imageAlt: 'Badmintonspieler im Training',
        text:
          'Lange Ballwechsel fordern Kraft und Konzentration. Wer bei uns Badminton spielt, stärkt nicht nur Kondition, sondern auch Geduld, Übersicht und mentale Ruhe.',
      },
    ],
  },
  {
    id: 'tennis',
    name: 'Tennis',
    teaser:
      'Tennis verbindet Technik, Ausdauer und mentale Stärke. Ob Einzel oder Doppel: Jeder Punkt fordert volle Aufmerksamkeit.',
    heroImage: '/Bilder/Tennis.png',
    heroAlt: 'Tennisspieler auf dem Court',
    slideImage: '/Bilder/slideshow/tennis.png',
    slideAlt: 'Tennistraining beim SV Ente Heidenheim',
    sections: [
      {
        title: 'Technik und Präzision',
        image: '/Bilder/tennis-player.png',
        imageAlt: 'Tennisspieler beim Schlag',
        text:
          'Tennis lebt von sauberer Technik und klugen Entscheidungen. Im Training verbessern wir Aufschlag, Return, Beinarbeit und das Gespür für den richtigen Moment.',
      },
      {
        title: 'Strategie auf dem Platz',
        image: '/Bilder/tennis-court.png',
        imageAlt: 'Tennisplatz des Vereins',
        text:
          'Jedes Match ist ein kleines Duell aus Geduld, Mut und Übersicht. Wir lernen, Ballwechsel aktiv zu gestalten und Stärken gezielt einzusetzen.',
      },
      {
        title: 'Training mit Ausdauer',
        image: '/Bilder/tennis-training.png',
        imageAlt: 'Tennistraining auf dem Court',
        text:
          'Tennis fordert Konzentration bis zum letzten Punkt. Deshalb gehören Fitness, Beweglichkeit und mentale Stärke genauso zum Training wie Schlägertechnik.',
      },
    ],
  },
  {
    id: 'tischtennis',
    name: 'Tischtennis',
    teaser:
      'Tischtennis ist schnell, präzise und taktisch. Perfekt für Reflexe, Konzentration und clevere Ballwechsel.',
    heroImage: '/Bilder/Tischtennis.png',
    heroAlt: 'Tischtennisspieler am Tisch',
    slideImage: '/Bilder/slideshow/tischtennis.png',
    slideAlt: 'Tischtennistraining beim SV Ente Heidenheim',
    sections: [
      {
        title: 'Reflexe und Tempo',
        image: '/Bilder/tischtennis-1.png',
        imageAlt: 'Tischtennisspieler beim Ballwechsel',
        text:
          'Tischtennis verlangt blitzschnelle Reaktionen und eine gute Wahrnehmung. Schon kurze Ballwechsel trainieren Auge, Hand und Entscheidungskraft.',
      },
      {
        title: 'Spin und Präzision',
        image: '/Bilder/tischtennis-2.png',
        imageAlt: 'Tischtennisschläger und Ball',
        text:
          'Topspin, Block und Schnitt machen Tischtennis taktisch spannend. Wir arbeiten an Kontrolle, Platzierung und sicherem Spielaufbau.',
      },
      {
        title: 'Konzentration im Spiel',
        image: '/Bilder/tischtennis-3.png',
        imageAlt: 'Tischtennistraining im Verein',
        text:
          'Jeder Punkt beginnt neu. Deshalb fördern wir Fokus, Ruhe und Fairness, damit Hobbyspieler und ambitionierte Athleten gemeinsam Freude am Spiel haben.',
      },
    ],
  },
];
