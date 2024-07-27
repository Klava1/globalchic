const dataClubs = {
  France: {
    "Reading Club": {
      book: "The Little Prince",
      place: "Paris Library, July 30, 2024",
      link: "https://example.com/the-little-prince",
    },
    "Cinema Club": {
      movie: "Amélie",
      place: "Cinéma Gaumont, August 5, 2024",
      link: "https://example.com/amelie",
    },
    "Mafia Club": {
      game: "Mafia",
      place: "Café de Flore, August 10, 2024",
      link: "https://example.com/mafia-game",
    },
    "Dance Club": {
      event: "Salsa Night",
      place: "Le Balajo, August 15, 2024",
      link: "https://example.com/salsa-night",
    },
    "Shooting Club": {
      event: "Target Practice",
      place: "Paris Shooting Range, August 20, 2024",
      link: "https://example.com/target-practice",
    },
    "History Club": {
      topic: "French Revolution",
      place: "Musée Carnavalet, August 25, 2024",
      link: "https://example.com/french-revolution",
    },
    "Art&Culture Club": {
      exhibit: "Impressionist Paintings",
      place: "Musée d'Orsay, August 30, 2024",
      link: "https://example.com/impressionist-exhibit",
    },
    "Kids Club": {
      activity: "Storytelling",
      place: "Jardin des Plantes, September 5, 2024",
      link: "https://example.com/storytelling",
    },
    "Hiking Club": {
      trail: "Montmartre Walk",
      place: "Montmartre, September 10, 2024",
      link: "https://example.com/montmartre-walk",
    },
    "Cycling Club": {
      route: "Seine River Ride",
      place: "Seine River, September 15, 2024",
      link: "https://example.com/seine-ride",
    },
  },
  Italy: {
    "Reading Club": {
      book: "The Name of the Rose",
      place: "Rome Library, July 30, 2024",
      link: "https://example.com/the-name-of-the-rose",
    },
    "Cinema Club": {
      movie: "La Dolce Vita",
      place: "Cinema Adriano, August 5, 2024",
      link: "https://example.com/la-dolce-vita",
    },
    "Mafia Club": {
      game: "Mafia",
      place: "Café Greco, August 10, 2024",
      link: "https://example.com/mafia-game",
    },
    "Dance Club": {
      event: "Tango Night",
      place: "Villa Borghese, August 15, 2024",
      link: "https://example.com/tango-night",
    },
    "Shooting Club": {
      event: "Clay Pigeon Shooting",
      place: "Rome Shooting Range, August 20, 2024",
      link: "https://example.com/clay-pigeon",
    },
    "History Club": {
      topic: "Roman Empire",
      place: "Colosseum, August 25, 2024",
      link: "https://example.com/roman-empire",
    },
    "Art&Culture Club": {
      exhibit: "Renaissance Art",
      place: "Uffizi Gallery, August 30, 2024",
      link: "https://example.com/renaissance-art",
    },
    "Kids Club": {
      activity: "Puppet Show",
      place: "Villa Borghese, September 5, 2024",
      link: "https://example.com/puppet-show",
    },
    "Hiking Club": {
      trail: "Appian Way",
      place: "Appian Way, September 10, 2024",
      link: "https://example.com/appian-way",
    },
    "Cycling Club": {
      route: "Tuscan Countryside",
      place: "Tuscany, September 15, 2024",
      link: "https://example.com/tuscany-ride",
    },
  },
  Spain: {
    "Reading Club": {
      book: "Don Quixote",
      place: "Madrid Library, July 30, 2024",
      link: "https://example.com/don-quixote",
    },
    "Cinema Club": {
      movie: "Pan's Labyrinth",
      place: "Cine Doré, August 5, 2024",
      link: "https://example.com/pans-labyrinth",
    },
    "Mafia Club": {
      game: "Mafia",
      place: "Café Gijón, August 10, 2024",
      link: "https://example.com/mafia-game",
    },
    "Dance Club": {
      event: "Flamenco Night",
      place: "Casa Patas, August 15, 2024",
      link: "https://example.com/flamenco-night",
    },
    "Shooting Club": {
      event: "Skeet Shooting",
      place: "Madrid Shooting Range, August 20, 2024",
      link: "https://example.com/skeet-shooting",
    },
    "History Club": {
      topic: "Spanish Civil War",
      place: "Museo del Prado, August 25, 2024",
      link: "https://example.com/spanish-civil-war",
    },
    "Art&Culture Club": {
      exhibit: "Picasso's Works",
      place: "Museo Picasso, August 30, 2024",
      link: "https://example.com/picasso-exhibit",
    },
    "Kids Club": {
      activity: "Art Workshop",
      place: "Retiro Park, September 5, 2024",
      link: "https://example.com/art-workshop",
    },
    "Hiking Club": {
      trail: "Camino de Santiago",
      place: "Galicia, September 10, 2024",
      link: "https://example.com/camino-de-santiago",
    },
    "Cycling Club": {
      route: "Barcelona Beach Ride",
      place: "Barcelona, September 15, 2024",
      link: "https://example.com/barcelona-ride",
    },
  },
  UAE: {
    "Reading Club": {
      book: "The Sand Fish",
      place: "Dubai Library, July 30, 2024",
      link: "https://example.com/the-sand-fish",
    },
    "Cinema Club": {
      movie: "City of Life",
      place: "VOX Cinemas, August 5, 2024",
      link: "https://example.com/city-of-life",
    },
    "Mafia Club": {
      game: "Mafia",
      place: "Dubai Marina, August 10, 2024",
      link: "https://example.com/mafia-game",
    },
    "Dance Club": {
      event: "Bollywood Night",
      place: "Dubai Opera, August 15, 2024",
      link: "https://example.com/bollywood-night",
    },
    "Shooting Club": {
      event: "Desert Shooting",
      place: "Dubai Desert, August 20, 2024",
      link: "https://example.com/desert-shooting",
    },
    "History Club": {
      topic: "History of UAE",
      place: "Dubai Museum, August 25, 2024",
      link: "https://example.com/uae-history",
    },
    "Art&Culture Club": {
      exhibit: "Islamic Art",
      place: "Louvre Abu Dhabi, August 30, 2024",
      link: "https://example.com/islamic-art",
    },
    "Kids Club": {
      activity: "Science Workshop",
      place: "Children's City, September 5, 2024",
      link: "https://example.com/science-workshop",
    },
    "Hiking Club": {
      trail: "Hatta Mountain",
      place: "Hatta, September 10, 2024",
      link: "https://example.com/hatta-hike",
    },
    "Cycling Club": {
      route: "Jumeirah Beach Ride",
      place: "Jumeirah Beach, September 15, 2024",
      link: "https://example.com/jumeirah-ride",
    },
  },
  Cyprus: {
    "Reading Club": {
      book: "Bitter Lemons",
      place: "Nicosia Library, July 30, 2024",
      link: "https://example.com/bitter-lemons",
    },
    "Cinema Club": {
      movie: "The Immature",
      place: "Rio Cinema, August 5, 2024",
      link: "https://example.com/the-immature",
    },
    "Mafia Club": {
      game: "Mafia",
      place: "Larnaca Café, August 10, 2024",
      link: "https://example.com/mafia-game",
    },
    "Dance Club": {
      event: "Greek Night",
      place: "Limassol Club, August 15, 2024",
      link: "https://example.com/greek-night",
    },
    "Shooting Club": {
      event: "Skeet Shooting",
      place: "Cyprus Shooting Club, August 20, 2024",
      link: "https://example.com/skeet-shooting",
    },
    "History Club": {
      topic: "Ancient Cyprus",
      place: "Cyprus Museum, August 25, 2024",
      link: "https://example.com/ancient-cyprus",
    },
    "Art&Culture Club": {
      exhibit: "Byzantine Art",
      place: "Byzantine Museum, August 30, 2024",
      link: "https://example.com/byzantine-art",
    },
    "Kids Club": {
      activity: "Craft Workshop",
      place: "Limassol Park, September 5, 2024",
      link: "https://example.com/craft-workshop",
    },
    "Hiking Club": {
      trail: "Troodos Mountains",
      place: "Troodos, September 10, 2024",
      link: "https://example.com/troodos-hike",
    },
    "Cycling Club": {
      route: "Paphos Coast Ride",
      place: "Paphos, September 15, 2024",
      link: "https://example.com/paphos-ride",
    },
  },
  Israel: {
    "Reading Club": {
      book: "A Tale of Love and Darkness",
      place: "Tel Aviv Library, July 30, 2024",
      link: "https://example.com/a-tale-of-love-and-darkness",
    },
    "Cinema Club": {
      movie: "Waltz with Bashir",
      place: "Cinema City, August 5, 2024",
      link: "https://example.com/waltz-with-bashir",
    },
    "Mafia Club": {
      game: "Mafia",
      place: "Jerusalem Café, August 10, 2024",
      link: "https://example.com/mafia-game",
    },
    "Dance Club": {
      event: "Israeli Folk Dance",
      place: "Habima Square, August 15, 2024",
      link: "https://example.com/folk-dance",
    },
    "Shooting Club": {
      event: "Target Shooting",
      place: "Tel Aviv Shooting Range, August 20, 2024",
      link: "https://example.com/target-shooting",
    },
    "History Club": {
      topic: "History of Jerusalem",
      place: "Israel Museum, August 25, 2024",
      link: "https://example.com/jerusalem-history",
    },
    "Art&Culture Club": {
      exhibit: "Modern Israeli Art",
      place: "Tel Aviv Museum of Art, August 30, 2024",
      link: "https://example.com/israeli-art",
    },
    "Kids Club": {
      activity: "Animal Encounter",
      place: "Jerusalem Zoo, September 5, 2024",
      link: "https://example.com/animal-encounter",
    },
    "Hiking Club": {
      trail: "Masada Hike",
      place: "Masada, September 10, 2024",
      link: "https://example.com/masada-hike",
    },
    "Cycling Club": {
      route: "Tel Aviv Beach Ride",
      place: "Tel Aviv, September 15, 2024",
      link: "https://example.com/tel-aviv-ride",
    },
  },
  USA: {
    "Reading Club": {
      book: "To Kill a Mockingbird",
      place: "New York Public Library, July 30, 2024",
      link: "https://example.com/to-kill-a-mockingbird",
    },
    "Cinema Club": {
      movie: "The Godfather",
      place: "AMC Empire 25, August 5, 2024",
      link: "https://example.com/the-godfather",
    },
    "Mafia Club": {
      game: "Mafia",
      place: "Central Park, August 10, 2024",
      link: "https://example.com/mafia-game",
    },
    "Dance Club": {
      event: "Swing Dance Night",
      place: "Lincoln Center, August 15, 2024",
      link: "https://example.com/swing-dance",
    },
    "Shooting Club": {
      event: "Skeet Shooting",
      place: "NYC Shooting Range, August 20, 2024",
      link: "https://example.com/skeet-shooting",
    },
    "History Club": {
      topic: "Civil Rights Movement",
      place: "National Museum of African American History, August 25, 2024",
      link: "https://example.com/civil-rights-movement",
    },
    "Art&Culture Club": {
      exhibit: "Modern Art",
      place: "MoMA, August 30, 2024",
      link: "https://example.com/modern-art",
    },
    "Kids Club": {
      activity: "Science Workshop",
      place: "Children's Museum of Manhattan, September 5, 2024",
      link: "https://example.com/science-workshop",
    },
    "Hiking Club": {
      trail: "Appalachian Trail",
      place: "Bear Mountain, September 10, 2024",
      link: "https://example.com/appalachian-trail",
    },
    "Cycling Club": {
      route: "Hudson River Greenway",
      place: "Hudson River, September 15, 2024",
      link: "https://example.com/hudson-ride",
    },
  },
  Germany: {
    "Reading Club": {
      book: "The Metamorphosis",
      place: "Berlin Library, July 30, 2024",
      link: "https://example.com/the-metamorphosis",
    },
    "Cinema Club": {
      movie: "Run Lola Run",
      place: "Kino International, August 5, 2024",
      link: "https://example.com/run-lola-run",
    },
    "Mafia Club": {
      game: "Mafia",
      place: "Cafe Einstein, August 10, 2024",
      link: "https://example.com/mafia-game",
    },
    "Dance Club": {
      event: "Tango Night",
      place: "Clärchens Ballhaus, August 15, 2024",
      link: "https://example.com/tango-night",
    },
    "Shooting Club": {
      event: "Target Practice",
      place: "Berlin Shooting Club, August 20, 2024",
      link: "https://example.com/target-practice",
    },
    "History Club": {
      topic: "World War II",
      place: "German Historical Museum, August 25, 2024",
      link: "https://example.com/ww2-history",
    },
    "Art&Culture Club": {
      exhibit: "Bauhaus Art",
      place: "Bauhaus Archive, August 30, 2024",
      link: "https://example.com/bauhaus-art",
    },
    "Kids Club": {
      activity: "Puppet Theater",
      place: "Grips Theater, September 5, 2024",
      link: "https://example.com/puppet-theater",
    },
    "Hiking Club": {
      trail: "Black Forest",
      place: "Black Forest, September 10, 2024",
      link: "https://example.com/black-forest-hike",
    },
    "Cycling Club": {
      route: "Berlin Wall Trail",
      place: "Berlin, September 15, 2024",
      link: "https://example.com/berlin-wall-ride",
    },
  },
  Latvia: {
    "Reading Club": {
      book: "In the Shadow of Death",
      place: "Riga Library, July 30, 2024",
      link: "https://example.com/in-the-shadow-of-death",
    },
    "Cinema Club": {
      movie: "Dream Team 1935",
      place: "Splendid Palace, August 5, 2024",
      link: "https://example.com/dream-team-1935",
    },
    "Mafia Club": {
      game: "Mafia",
      place: "Cafe Osiris, August 10, 2024",
      link: "https://example.com/mafia-game",
    },
    "Dance Club": {
      event: "Folk Dance Night",
      place: "Vērmanes Garden, August 15, 2024",
      link: "https://example.com/folk-dance",
    },
    "Shooting Club": {
      event: "Target Practice",
      place: "Riga Shooting Range, August 20, 2024",
      link: "https://example.com/target-practice",
    },
    "History Club": {
      topic: "History of Riga",
      place: "Latvian National Museum of Art, August 25, 2024",
      link: "https://example.com/riga-history",
    },
    "Art&Culture Club": {
      exhibit: "Latvian Art",
      place: "Art Museum Riga Bourse, August 30, 2024",
      link: "https://example.com/latvian-art",
    },
    "Kids Club": {
      activity: "Storytelling",
      place: "Esplanade Park, September 5, 2024",
      link: "https://example.com/storytelling",
    },
    "Hiking Club": {
      trail: "Gauja National Park",
      place: "Gauja, September 10, 2024",
      link: "https://example.com/gauja-hike",
    },
    "Cycling Club": {
      route: "Jurmala Beach Ride",
      place: "Jurmala, September 15, 2024",
      link: "https://example.com/jurmala-ride",
    },
  },
  Lithuania: {
    "Reading Club": {
      book: "Vilnius Poker",
      place: "Vilnius Library, July 30, 2024",
      link: "https://example.com/vilnius-poker",
    },
    "Cinema Club": {
      movie: "The Excursionist",
      place: "Forum Cinemas, August 5, 2024",
      link: "https://example.com/the-excursionist",
    },
    "Mafia Club": {
      game: "Mafia",
      place: "Vilnius Café, August 10, 2024",
      link: "https://example.com/mafia-game",
    },
    "Dance Club": {
      event: "Salsa Night",
      place: "Salento Club, August 15, 2024",
      link: "https://example.com/salsa-night",
    },
    "Shooting Club": {
      event: "Skeet Shooting",
      place: "Vilnius Shooting Range, August 20, 2024",
      link: "https://example.com/skeet-shooting",
    },
    "History Club": {
      topic: "Lithuanian Independence",
      place: "National Museum of Lithuania, August 25, 2024",
      link: "https://example.com/independence-history",
    },
    "Art&Culture Club": {
      exhibit: "Modern Lithuanian Art",
      place: "MO Museum, August 30, 2024",
      link: "https://example.com/lithuanian-art",
    },
    "Kids Club": {
      activity: "Craft Workshop",
      place: "Bernardine Park, September 5, 2024",
      link: "https://example.com/craft-workshop",
    },
    "Hiking Club": {
      trail: "Curonian Spit",
      place: "Curonian Spit, September 10, 2024",
      link: "https://example.com/curonian-hike",
    },
    "Cycling Club": {
      route: "Vilnius City Ride",
      place: "Vilnius, September 15, 2024",
      link: "https://example.com/vilnius-ride",
    },
  },
  Austria: {
    "Reading Club": {
      book: "The Radetzky March",
      place: "Vienna Library, July 30, 2024",
      link: "https://example.com/the-radetzky-march",
    },
    "Cinema Club": {
      movie: "The Third Man",
      place: "Burg Kino, August 5, 2024",
      link: "https://example.com/the-third-man",
    },
    "Mafia Club": {
      game: "Mafia",
      place: "Cafe Central, August 10, 2024",
      link: "https://example.com/mafia-game",
    },
    "Dance Club": {
      event: "Viennese Waltz Night",
      place: "Vienna Opera House, August 15, 2024",
      link: "https://example.com/viennese-waltz",
    },
    "Shooting Club": {
      event: "Target Practice",
      place: "Vienna Shooting Club, August 20, 2024",
      link: "https://example.com/target-practice",
    },
    "History Club": {
      topic: "Habsburg Dynasty",
      place: "Hofburg Palace, August 25, 2024",
      link: "https://example.com/habsburg-history",
    },
    "Art&Culture Club": {
      exhibit: "Vienna Secession",
      place: "Belvedere Museum, August 30, 2024",
      link: "https://example.com/secession-exhibit",
    },
    "Kids Club": {
      activity: "Puppet Show",
      place: "Schönbrunn Palace, September 5, 2024",
      link: "https://example.com/puppet-show",
    },
    "Hiking Club": {
      trail: "Vienna Woods",
      place: "Vienna Woods, September 10, 2024",
      link: "https://example.com/vienna-woods-hike",
    },
    "Cycling Club": {
      route: "Danube Bike Path",
      place: "Danube River, September 15, 2024",
      link: "https://example.com/danube-bike-path",
    },
  },
  Netherlands: {
    "Reading Club": {
      book: "The Diary of Anne Frank",
      place: "Amsterdam Library, July 30, 2024",
      link: "https://example.com/diary-of-anne-frank",
    },
    "Cinema Club": {
      movie: "The Fault in Our Stars",
      place: "Pathe Tuschinski, August 5, 2024",
      link: "https://example.com/the-fault-in-our-stars",
    },
    "Mafia Club": {
      game: "Mafia",
      place: "Cafe De Jaren, August 10, 2024",
      link: "https://example.com/mafia-game",
    },
    "Dance Club": {
      event: "Electronic Dance Night",
      place: "Melkweg, August 15, 2024",
      link: "https://example.com/electronic-dance",
    },
    "Shooting Club": {
      event: "Clay Shooting",
      place: "Amsterdam Shooting Range, August 20, 2024",
      link: "https://example.com/clay-shooting",
    },
    "History Club": {
      topic: "Dutch Golden Age",
      place: "Rijksmuseum, August 25, 2024",
      link: "https://example.com/dutch-golden-age",
    },
    "Art&Culture Club": {
      exhibit: "Van Gogh's Works",
      place: "Van Gogh Museum, August 30, 2024",
      link: "https://example.com/van-gogh-exhibit",
    },
    "Kids Club": {
      activity: "Science Workshop",
      place: "NEMO Science Museum, September 5, 2024",
      link: "https://example.com/science-workshop",
    },
    "Hiking Club": {
      trail: "Hoge Veluwe National Park",
      place: "Hoge Veluwe, September 10, 2024",
      link: "https://example.com/hoge-veluwe-hike",
    },
    "Cycling Club": {
      route: "Amsterdam Canal Ride",
      place: "Amsterdam, September 15, 2024",
      link: "https://example.com/canal-ride",
    },
  },
  Switzerland: {
    "Reading Club": {
      book: "Heidi",
      place: "Zurich Library, July 30, 2024",
      link: "https://example.com/heidi",
    },
    "Cinema Club": {
      movie: "The Swissmakers",
      place: "Arena Cinemas, August 5, 2024",
      link: "https://example.com/the-swissmakers",
    },
    "Mafia Club": {
      game: "Mafia",
      place: "Cafe Odeon, August 10, 2024",
      link: "https://example.com/mafia-game",
    },
    "Dance Club": {
      event: "Swing Night",
      place: "Moods, August 15, 2024",
      link: "https://example.com/swing-night",
    },
    "Shooting Club": {
      event: "Rifle Shooting",
      place: "Zurich Shooting Range, August 20, 2024",
      link: "https://example.com/rifle-shooting",
    },
    "History Club": {
      topic: "Swiss Neutrality",
      place: "Swiss National Museum, August 25, 2024",
      link: "https://example.com/swiss-neutrality",
    },
    "Art&Culture Club": {
      exhibit: "Swiss Modern Art",
      place: "Kunsthaus Zurich, August 30, 2024",
      link: "https://example.com/swiss-modern-art",
    },
    "Kids Club": {
      activity: "Craft Workshop",
      place: "Zurich Zoo, September 5, 2024",
      link: "https://example.com/craft-workshop",
    },
    "Hiking Club": {
      trail: "Matterhorn Hike",
      place: "Zermatt, September 10, 2024",
      link: "https://example.com/matterhorn-hike",
    },
    "Cycling Club": {
      route: "Lake Zurich Ride",
      place: "Lake Zurich, September 15, 2024",
      link: "https://example.com/lake-zurich-ride",
    },
  },
  UK: {
    "Reading Club": {
      book: "Pride and Prejudice",
      place: "London Library, July 30, 2024",
      link: "https://example.com/pride-and-prejudice",
    },
    "Cinema Club": {
      movie: "Skyfall",
      place: "BFI IMAX, August 5, 2024",
      link: "https://example.com/skyfall",
    },
    "Mafia Club": {
      game: "Mafia",
      place: "Hyde Park, August 10, 2024",
      link: "https://example.com/mafia-game",
    },
    "Dance Club": {
      event: "Swing Dance",
      place: "The Royal Albert Hall, August 15, 2024",
      link: "https://example.com/swing-dance",
    },
    "Shooting Club": {
      event: "Clay Pigeon Shooting",
      place: "London Shooting Club, August 20, 2024",
      link: "https://example.com/clay-pigeon",
    },
    "History Club": {
      topic: "Victorian Era",
      place: "British Museum, August 25, 2024",
      link: "https://example.com/victorian-era",
    },
    "Art&Culture Club": {
      exhibit: "Turner's Paintings",
      place: "Tate Britain, August 30, 2024",
      link: "https://example.com/turner-exhibit",
    },
    "Kids Club": {
      activity: "Science Show",
      place: "Science Museum, September 5, 2024",
      link: "https://example.com/science-show",
    },
    "Hiking Club": {
      trail: "Lake District",
      place: "Lake District, September 10, 2024",
      link: "https://example.com/lake-district-hike",
    },
    "Cycling Club": {
      route: "Thames Path Ride",
      place: "London, September 15, 2024",
      link: "https://example.com/thames-path-ride",
    },
  },
  Portugal: {
    "Reading Club": {
      book: "Blindness",
      place: "Lisbon Library, July 30, 2024",
      link: "https://example.com/blindness",
    },
    "Cinema Club": {
      movie: "City of God",
      place: "Cinema São Jorge, August 5, 2024",
      link: "https://example.com/city-of-god",
    },
    "Mafia Club": {
      game: "Mafia",
      place: "Lisbon Café, August 10, 2024",
      link: "https://example.com/mafia-game",
    },
    "Dance Club": {
      event: "Fado Night",
      place: "Alfama, August 15, 2024",
      link: "https://example.com/fado-night",
    },
    "Shooting Club": {
      event: "Target Shooting",
      place: "Lisbon Shooting Range, August 20, 2024",
      link: "https://example.com/target-shooting",
    },
    "History Club": {
      topic: "Age of Discoveries",
      place: "Maritime Museum, August 25, 2024",
      link: "https://example.com/age-of-discoveries",
    },
    "Art&Culture Club": {
      exhibit: "Portuguese Tiles",
      place: "National Tile Museum, August 30, 2024",
      link: "https://example.com/portuguese-tiles",
    },
    "Kids Club": {
      activity: "Art Workshop",
      place: "Lisbon Oceanarium, September 5, 2024",
      link: "https://example.com/art-workshop",
    },
    "Hiking Club": {
      trail: "Sintra Mountains",
      place: "Sintra, September 10, 2024",
      link: "https://example.com/sintra-hike",
    },
    "Cycling Club": {
      route: "Douro Valley Ride",
      place: "Douro Valley, September 15, 2024",
      link: "https://example.com/douro-ride",
    },
  },
  Turkey: {
    "Reading Club": {
      book: "My Name is Red",
      place: "Istanbul Library, July 30, 2024",
      link: "https://example.com/my-name-is-red",
    },
    "Cinema Club": {
      movie: "Winter Sleep",
      place: "Atlas Cinema, August 5, 2024",
      link: "https://example.com/winter-sleep",
    },
    "Mafia Club": {
      game: "Mafia",
      place: "Taksim Square, August 10, 2024",
      link: "https://example.com/mafia-game",
    },
    "Dance Club": {
      event: "Turkish Folk Dance",
      place: "Sultanahmet, August 15, 2024",
      link: "https://example.com/folk-dance",
    },
    "Shooting Club": {
      event: "Archery",
      place: "Istanbul Archery Club, August 20, 2024",
      link: "https://example.com/archery",
    },
    "History Club": {
      topic: "Ottoman Empire",
      place: "Topkapi Palace, August 25, 2024",
      link: "https://example.com/ottoman-empire",
    },
    "Art&Culture Club": {
      exhibit: "Turkish Calligraphy",
      place: "Sakıp Sabancı Museum, August 30, 2024",
      link: "https://example.com/calligraphy",
    },
    "Kids Club": {
      activity: "Art Workshop",
      place: "Rahmi M. Koç Museum, September 5, 2024",
      link: "https://example.com/art-workshop",
    },
    "Hiking Club": {
      trail: "Lycian Way",
      place: "Lycian Way, September 10, 2024",
      link: "https://example.com/lycian-way-hike",
    },
    "Cycling Club": {
      route: "Bosporus Ride",
      place: "Istanbul, September 15, 2024",
      link: "https://example.com/bosporus-ride",
    },
  },
};

export default dataClubs;
