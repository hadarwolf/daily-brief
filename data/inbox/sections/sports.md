Write the Sports section: 3-5 stories.

- Draw on European soccer (big-5 leagues, Champions League), Inter Miami / MLS, international soccer and the NBA.
- Arsenal and Barcelona always get a story if they played yesterday, play today or tomorrow, or have real news. Even on a quiet day, one story can cover where they stand: table, form and next fixture.
- Other clubs and leagues earn a slot only when their storyline is genuinely big.
- Include an NBA story only if there is meaningful NBA news. It may be the offseason.
- Results, fixtures and tables come from the structured data. Storylines come from the news feeds. Cite "football_data", "balldontlie" or "thesportsdb" as a source_ref when you use their data.
- No favorite team plays today.
- Fill israeli_players with one entry per player listed in nba_data.israeli_players, giving their latest game or news. If the input has nothing new on a player, say so plainly. Never invent stats. Box scores are often unavailable.
- Use kind "news" for everything in this section.

This section opens in English by default, so make the English version your best writing.

Output: write `drafts/sports.json` matching `schemas/sports.schema.json`.

<input>
{
 "european_soccer_data": {
  "matches": {
   "yesterday": [
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-10T11:30:00Z",
     "home": "Swansea",
     "away": "Norwich",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-10T11:30:00Z",
     "home": "Charlton",
     "away": "Bristol City",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-10T11:30:00Z",
     "home": "Arsenal",
     "away": "Leeds United",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-10T11:30:00Z",
     "home": "West Brom",
     "away": "Birmingham",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-10T12:00:00Z",
     "home": "Rayo Vallecano",
     "away": "Athletic",
     "status": "CANCELLED",
     "score": "0-0"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-10T13:00:00Z",
     "home": "Genoa",
     "away": "Fiorentina",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-10T13:30:00Z",
     "home": "Hoffenheim",
     "away": "HSV",
     "status": "FINISHED",
     "score": "2-3"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-10T13:30:00Z",
     "home": "Mainz",
     "away": "Leverkusen",
     "status": "FINISHED",
     "score": "3-4"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-10T13:30:00Z",
     "home": "SC Paderborn",
     "away": "Stuttgart",
     "status": "FINISHED",
     "score": "0-2"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-10T13:30:00Z",
     "home": "Augsburg",
     "away": "Bayern",
     "status": "FINISHED",
     "score": "2-2"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-10T13:30:00Z",
     "home": "Union Berlin",
     "away": "Elversberg",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-10T14:00:00Z",
     "home": "Sheffield Utd",
     "away": "Lincoln City",
     "status": "FINISHED",
     "score": "3-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-10T14:00:00Z",
     "home": "Blackburn",
     "away": "Cardiff",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-10T14:00:00Z",
     "home": "Preston NE",
     "away": "Millwall",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-10T14:00:00Z",
     "home": "Chelsea",
     "away": "Bournemouth",
     "status": "FINISHED",
     "score": "5-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-10T14:00:00Z",
     "home": "Derby County",
     "away": "Wrexham",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-10T14:00:00Z",
     "home": "Bolton",
     "away": "Stoke",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-10T14:00:00Z",
     "home": "Watford",
     "away": "Burnley",
     "status": "FINISHED",
     "score": "0-4"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-10T14:00:00Z",
     "home": "Middlesbrough",
     "away": "Wolverhampton",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-10T14:00:00Z",
     "home": "Ipswich Town",
     "away": "Fulham",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-10T14:00:00Z",
     "home": "Aston Villa",
     "away": "Brentford",
     "status": "FINISHED",
     "score": "2-2"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-10T14:00:00Z",
     "home": "Sunderland",
     "away": "Brighton Hove",
     "status": "FINISHED",
     "score": "0-2"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-10T14:15:00Z",
     "home": "Alavés",
     "away": "Atleti",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-10T14:30:00Z",
     "home": "Go Ahead",
     "away": "Sparta",
     "status": "FINISHED",
     "score": "3-3"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-10T15:15:00Z",
     "home": "Lille",
     "away": "Le Havre",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-10T16:00:00Z",
     "home": "Inter",
     "away": "Parma",
     "status": "FINISHED",
     "score": "3-0"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-10T16:30:00Z",
     "home": "Man United",
     "away": "Tottenham",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-10T16:30:00Z",
     "home": "RB Leipzig",
     "away": "Frankfurt",
     "status": "FINISHED",
     "score": "6-0"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-10T16:30:00Z",
     "home": "Barça",
     "away": "Getafe",
     "status": "FINISHED",
     "score": "3-0"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-10T16:45:00Z",
     "home": "Feyenoord",
     "away": "AZ",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-10T17:00:00Z",
     "home": "Marítimo",
     "away": "Porto",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-10T18:00:00Z",
     "home": "Sittard",
     "away": "Twente",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-10T18:45:00Z",
     "home": "PSG",
     "away": "Le Mans",
     "status": "FINISHED",
     "score": "3-1"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-10T18:45:00Z",
     "home": "Napoli",
     "away": "Frosinone",
     "status": "FINISHED",
     "score": "3-0"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-10T18:45:00Z",
     "home": "Brest",
     "away": "Angers SCO",
     "status": "FINISHED",
     "score": "5-1"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-10T18:45:00Z",
     "home": "Monaco",
     "away": "Toulouse",
     "status": "FINISHED",
     "score": "2-2"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-10T18:45:00Z",
     "home": "Lorient",
     "away": "Paris FC",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-10T19:00:00Z",
     "home": "Real Madrid",
     "away": "Villarreal",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-10T19:00:00Z",
     "home": "Ajax",
     "away": "NEC",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-10T19:30:00Z",
     "home": "Acad. Viseu",
     "away": "Estoril Praia",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-10T19:30:00Z",
     "home": "Casa Pia",
     "away": "Santa Clara",
     "status": "FINISHED",
     "score": "0-1"
    }
   ],
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-10T21:00:00Z",
     "home": "Vasco da Gama",
     "away": "Clube do Remo",
     "status": "FINISHED",
     "score": "0-0"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-11T00:00:00Z",
     "home": "São Paulo",
     "away": "Vitória",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-11T10:15:00Z",
     "home": "Utrecht",
     "away": "Willem II",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-11T10:30:00Z",
     "home": "Como 1907",
     "away": "Roma",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-11T11:00:00Z",
     "home": "Southampton",
     "away": "Portsmouth",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-11T12:00:00Z",
     "home": "Elche",
     "away": "Celta",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-11T12:30:00Z",
     "home": "Telstar",
     "away": "Den Haag",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-11T12:30:00Z",
     "home": "Zwolle",
     "away": "Cambuur",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-11T13:00:00Z",
     "home": "Nice",
     "away": "Strasbourg",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-11T13:00:00Z",
     "home": "Lecce",
     "away": "Bologna",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-11T13:00:00Z",
     "home": "Lazio",
     "away": "Monza",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-11T13:00:00Z",
     "home": "Hull City",
     "away": "Everton",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-11T13:00:00Z",
     "home": "Crystal Palace",
     "away": "Nottingham",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-11T13:30:00Z",
     "home": "1. FC Köln",
     "away": "M'gladbach",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-11T14:15:00Z",
     "home": "Real Sociedad",
     "away": "Deportivo",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-11T14:30:00Z",
     "home": "Rio Ave",
     "away": "CD Nacional",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-11T14:45:00Z",
     "home": "Excelsior",
     "away": "Groningen",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-11T15:15:00Z",
     "home": "Stade Rennais",
     "away": "Auxerre",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-11T15:30:00Z",
     "home": "Freiburg",
     "away": "Schalke",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-11T15:30:00Z",
     "home": "Liverpool",
     "away": "Man City",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-11T16:00:00Z",
     "home": "Sassuolo",
     "away": "Milan",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-11T16:30:00Z",
     "home": "Real Betis",
     "away": "Osasuna",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-11T17:00:00Z",
     "home": "SL Benfica",
     "away": "Vitória SC",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-11T18:45:00Z",
     "home": "Cagliari",
     "away": "Juventus",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-11T18:45:00Z",
     "home": "Troyes",
     "away": "Marseille",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-11T19:00:00Z",
     "home": "Mineiro",
     "away": "Santos",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-11T19:00:00Z",
     "home": "Santander",
     "away": "Valencia",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-11T19:30:00Z",
     "home": "Arouca",
     "away": "Amadora",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-11T20:30:00Z",
     "home": "Flamengo",
     "away": "Fluminense",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-11T20:30:00Z",
     "home": "Palmeiras",
     "away": "Corinthians",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-11T20:30:00Z",
     "home": "Grêmio",
     "away": "Internacional",
     "status": "TIMED",
     "score": null
    }
   ],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-11T22:30:00Z",
     "home": "Bahia",
     "away": "Mirassol",
     "status": "TIMED",
     "score": null
    }
   ]
  },
  "standings_top6_plus_favorites": {
   "Premier League": [
    {
     "pos": 1,
     "team": "Man City",
     "played": 5,
     "pts": 15,
     "gd": 8
    },
    {
     "pos": 2,
     "team": "Arsenal",
     "played": 6,
     "pts": 15,
     "gd": 5
    },
    {
     "pos": 3,
     "team": "Brighton Hove",
     "played": 6,
     "pts": 13,
     "gd": 13
    },
    {
     "pos": 4,
     "team": "Brentford",
     "played": 6,
     "pts": 10,
     "gd": 6
    },
    {
     "pos": 5,
     "team": "Chelsea",
     "played": 6,
     "pts": 10,
     "gd": 2
    },
    {
     "pos": 6,
     "team": "Leeds United",
     "played": 6,
     "pts": 9,
     "gd": 3
    }
   ],
   "Primera Division": [
    {
     "pos": 1,
     "team": "Barça",
     "played": 8,
     "pts": 24,
     "gd": 27
    },
    {
     "pos": 2,
     "team": "Atleti",
     "played": 8,
     "pts": 19,
     "gd": 10
    },
    {
     "pos": 3,
     "team": "Real Madrid",
     "played": 8,
     "pts": 18,
     "gd": 11
    },
    {
     "pos": 4,
     "team": "Real Betis",
     "played": 7,
     "pts": 16,
     "gd": 2
    },
    {
     "pos": 5,
     "team": "Sevilla FC",
     "played": 7,
     "pts": 13,
     "gd": 1
    },
    {
     "pos": 6,
     "team": "Alavés",
     "played": 8,
     "pts": 11,
     "gd": 4
    }
   ],
   "Bundesliga": [
    {
     "pos": 1,
     "team": "Dortmund",
     "played": 5,
     "pts": 13,
     "gd": 7
    },
    {
     "pos": 2,
     "team": "Bayern",
     "played": 5,
     "pts": 11,
     "gd": 12
    },
    {
     "pos": 3,
     "team": "Freiburg",
     "played": 4,
     "pts": 10,
     "gd": 9
    },
    {
     "pos": 4,
     "team": "Leverkusen",
     "played": 5,
     "pts": 10,
     "gd": 6
    },
    {
     "pos": 5,
     "team": "RB Leipzig",
     "played": 5,
     "pts": 9,
     "gd": 10
    },
    {
     "pos": 6,
     "team": "Augsburg",
     "played": 5,
     "pts": 8,
     "gd": 5
    }
   ],
   "Serie A": [
    {
     "pos": 1,
     "team": "Inter",
     "played": 6,
     "pts": 16,
     "gd": 10
    },
    {
     "pos": 2,
     "team": "Roma",
     "played": 5,
     "pts": 13,
     "gd": 11
    },
    {
     "pos": 3,
     "team": "Lazio",
     "played": 5,
     "pts": 13,
     "gd": 5
    },
    {
     "pos": 4,
     "team": "Cagliari",
     "played": 5,
     "pts": 12,
     "gd": 3
    },
    {
     "pos": 5,
     "team": "Milan",
     "played": 5,
     "pts": 11,
     "gd": 6
    },
    {
     "pos": 6,
     "team": "Napoli",
     "played": 6,
     "pts": 10,
     "gd": 4
    }
   ],
   "Ligue 1": [
    {
     "pos": 1,
     "team": "Monaco",
     "played": 6,
     "pts": 14,
     "gd": 5
    },
    {
     "pos": 2,
     "team": "Lille",
     "played": 6,
     "pts": 13,
     "gd": 5
    },
    {
     "pos": 3,
     "team": "Olympique Lyon",
     "played": 6,
     "pts": 11,
     "gd": 7
    },
    {
     "pos": 4,
     "team": "Paris FC",
     "played": 6,
     "pts": 11,
     "gd": 4
    },
    {
     "pos": 5,
     "team": "PSG",
     "played": 6,
     "pts": 11,
     "gd": 3
    },
    {
     "pos": 6,
     "team": "Stade Rennais",
     "played": 5,
     "pts": 10,
     "gd": -1
    }
   ]
  },
  "favorite_teams": {
   "arsenal": {
    "recent": [
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-10-10T11:30:00Z",
      "home": "Arsenal",
      "away": "Leeds United",
      "status": "FINISHED",
      "score": "2-1"
     }
    ],
    "upcoming": [
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-10-13T19:00:00Z",
      "home": "Arsenal",
      "away": "Lille",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-10-18T15:30:00Z",
      "home": "Nottingham",
      "away": "Arsenal",
      "status": "TIMED",
      "score": null
     }
    ]
   },
   "barcelona": {
    "recent": [
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-10-10T16:30:00Z",
      "home": "Barça",
      "away": "Getafe",
      "status": "FINISHED",
      "score": "3-0"
     }
    ],
    "upcoming": [
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-10-13T19:00:00Z",
      "home": "Galatasaray",
      "away": "Barça",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-10-17T16:30:00Z",
      "home": "Real Betis",
      "away": "Barça",
      "status": "TIMED",
      "score": null
     }
    ]
   }
  }
 },
 "nba_data": {
  "games_last_night": [],
  "games_today": [],
  "israeli_players": {
   "Deni Avdija": {
    "team": "Portland Trail Blazers",
    "position": "F"
   },
   "Ben Saraf": {
    "team": "Brooklyn Nets",
    "position": "G"
   }
  },
  "israeli_player_box_scores": null
 },
 "inter_miami_and_israel_national_team": {
  "inter_miami": {
   "recent": [
    {
     "competition": "American Major League Soccer",
     "kickoff_utc": "2026-10-10T23:30:00",
     "home": "Inter Miami",
     "away": "DC United",
     "score": "4-0"
    }
   ],
   "upcoming": [
    {
     "competition": "American Major League Soccer",
     "kickoff_utc": "2026-10-14T23:30:00",
     "home": "Inter Miami",
     "away": "New York City FC",
     "score": null
    }
   ]
  },
  "israel_national_team": {
   "recent": [
    {
     "competition": "UEFA Nations League",
     "kickoff_utc": "2026-10-01T18:45:00",
     "home": "Israel",
     "away": "Kosovo",
     "score": "0-0"
    }
   ],
   "upcoming": [
    {
     "competition": "UEFA Nations League",
     "kickoff_utc": "2026-11-14T14:00:00",
     "home": "Kosovo",
     "away": "Israel",
     "score": null
    }
   ]
  }
 },
 "news_feeds": [
  {
   "outlet": "BBC Sport — Football",
   "lang": "en",
   "items": [
    {
     "ref": "bbc_football#0",
     "title": "'O'Neill unaware of trialist goalkeeper Inzalaco' - gossip",
     "published": "2026-10-11T08:21:44+00:00",
     "summary": "Celtic manager Martin O'Neill plays down training stints for Perth RedStar goalkeeper Sonny Inzalaco and free agent midfielder Tiemoue Bakayoko while the SPFL says it hopes to re-introduce away fans at Old Firm derbies."
    },
    {
     "ref": "bbc_football#1",
     "title": "Highlights and analysis on Match of the Day",
     "published": "2026-10-11T08:00:00+00:00",
     "summary": "With Man Utd v Spurs, Arsenal v Leeds and Chelsea v Bournemouth as the top flight returns"
    },
    {
     "ref": "bbc_football#2",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-10-11T05:42:58+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#3",
     "title": "Top five Liverpool-Man City moments",
     "published": "2026-10-11T05:37:52+00:00",
     "summary": "Relive five classic moments between Liverpool and Manchester City before Sunday's Premier League game at Anfield (16:30 BST)."
    },
    {
     "ref": "bbc_football#4",
     "title": "Toxicity and uncertainty await Man City - will their season even matter?",
     "published": "2026-10-11T05:27:03+00:00",
     "summary": "Manchester City visit Liverpool on Sunday with a lot of uncertainty hanging over them. Phil McNulty looks at what lies ahead."
    },
    {
     "ref": "bbc_football#5",
     "title": "'Absolutely superb' - How Caicedo proved pivotal in Chelsea win",
     "published": "2026-10-10T23:00:14+00:00",
     "summary": "Speaking on Match of the Day, Alan Shearer explains why the performance of Moises Caicedo was pivotal in Chelsea's 5-1 win against Bournemouth in the Premier League."
    },
    {
     "ref": "bbc_football#6",
     "title": "Man Utd midfield can't control games - Murphy",
     "published": "2026-10-10T22:58:38+00:00",
     "summary": "Match of the Day pundit Danny Murphy looks at Manchester United's problems in midfield in their 1-1 draw against 10-man Tottenham."
    },
    {
     "ref": "bbc_football#7",
     "title": "AC Milan keen on Scott - Sunday's gossip",
     "published": "2026-10-10T22:01:20+00:00",
     "summary": "AC Milan are looking at Bournemouth's Alex Scott, Bayern Munich have held fresh talks with Manchester United's JJ Gabriel, Liverpool interested in Barcelona defender Jules Kounde, plus more."
    },
    {
     "ref": "bbc_football#8",
     "title": "'I kissed Rodrigo and said thanks' - De Zerbi 'liked' Spurs red card",
     "published": "2026-10-10T20:58:39+00:00",
     "summary": "Roberto de Zerbi praises Rodrigo Bentancur after he was sent off in a 1-1 draw against Manchester United."
    },
    {
     "ref": "bbc_football#9",
     "title": "Boos, anguish & fading belief -'worrying day' for under-pressure Carrick",
     "published": "2026-10-10T20:54:46+00:00",
     "summary": "It couldn't happen again could it? Another failure to beat 10 men increases pressure on Man Utd boss Michael Carrick after a 1-1 draw against Tottenham Hotspur."
    },
    {
     "ref": "bbc_football#10",
     "title": "Patience needed as new boss Reedijk bemoans Hibs 'imprecision'",
     "published": "2026-10-10T20:51:03+00:00",
     "summary": "Familiar problems remain for Hibernian as Marink Reedijk's first match in charge ends in a 1-0 loss at Dundee United."
    },
    {
     "ref": "bbc_football#11",
     "title": "Patience needed as new boss Reedijk bemoans Hibs 'imprecision'",
     "published": "2026-10-10T20:51:03+00:00",
     "summary": "Familiar problems remain for Hibernian as Marink Reedijk's first match in charge ends in a 1-0 loss at Dundee United."
    },
    {
     "ref": "bbc_football#12",
     "title": "'Reminds me of Muller' - Naderi proving worth in Rangers revival",
     "published": "2026-10-10T20:03:56+00:00",
     "summary": "After a slow start to his Rangers career, striker Ryan Naderi is playing an integral role in the club's title challenge and proving his doubters wrong."
    },
    {
     "ref": "bbc_football#13",
     "title": "'Reminds me of Muller' - Naderi proving worth in Rangers revival",
     "published": "2026-10-10T20:03:56+00:00",
     "summary": "After a slow start to his Rangers career, striker Ryan Naderi is playing an integral role in the club's title challenge and proving his doubters wrong."
    },
    {
     "ref": "bbc_football#14",
     "title": "'Tottenham needs this reaction' - De Zerbi defends Bentancur red",
     "published": "2026-10-10T19:46:19+00:00",
     "summary": "Tottenham Hotspur head coach Roberto De Zerbi says the decision to send off Rodrigo Bentancur was correct, but admitted he liked that his player showed a 'reaction', adding he wants to see more of that attitude from his squad, following their 1-1 draw at Manchester United in the Premier League."
    },
    {
     "ref": "bbc_football#15",
     "title": "'It hurts a lot' - Carrick 'understands' Man Utd boos after draw",
     "published": "2026-10-10T19:35:45+00:00",
     "summary": "Manchester United head coach Michael Carrick says boos from the club's fans 'hurts a lot' but that he and his team 'must cope with it' after they conceded a late equaliser to draw 1-1 with Tottenham in the Premier League."
    },
    {
     "ref": "bbc_football#16",
     "title": "Solanke scores in added time as 10-man Spurs draw with Man Utd",
     "published": "2026-10-10T19:24:23+00:00",
     "summary": "Dominic Solanke scores in stoppage time to salvage a point for 10-man Tottenham as they snatch a draw against Manchester United in a feisty encounter at Old Trafford."
    },
    {
     "ref": "bbc_football#17",
     "title": "Savage success and statement win for Boro - Sam Parkin's EFL Takeaways",
     "published": "2026-10-10T19:19:42+00:00",
     "summary": "BBC Final Score pundit Sam Parkin looks at the weekend's talking points in the EFL, including Robbie Savage's debut as Peterborough manager."
    },
    {
     "ref": "bbc_football#18",
     "title": "Arbeloa 'doesn't feel fear' but pressure increases after loss",
     "published": "2026-10-10T19:03:00+00:00",
     "summary": "Fulham boss Alvaro Arbeloa says he does not 'feel fear' after defeat at Ipswich left his side winless in six games and bottom of the Premier League."
    },
    {
     "ref": "bbc_football#19",
     "title": "Brentford extend unbeaten start as Ajer secures draw at Aston Villa",
     "published": "2026-10-10T19:00:33+00:00",
     "summary": "Brentford extend their unbeaten start to the new Premier League season as Kristoffer Ajer scores late to earn his side a 2-2 draw at Aston Villa, who's wait for a first home Premier League win of the season goes on."
    },
    {
     "ref": "bbc_football#20",
     "title": "Struijk sees red but Brighton march on with win against Sunderland",
     "published": "2026-10-10T19:00:17+00:00",
     "summary": "Brighton maintained their excellent start to the new Premier League season, as they beat Sunderland 2-0 at the Stadium of Light, despite having to play much of the second half with ten men, after Pascal Struijk was shown a controversial red card."
    },
    {
     "ref": "bbc_football#21",
     "title": "Ipswich produce late fightback to stun winless Fulham",
     "published": "2026-10-10T19:00:14+00:00",
     "summary": "Two goals in three minutes sees Ipswich produce a late fightback to snatch a 2-1 victory against Fulham at Portman Road, with the away side still searching for their first Premier League win of the season."
    },
    {
     "ref": "bbc_football#22",
     "title": "Henderson scores twice as five-star Chelsea thrash Bournemouth",
     "published": "2026-10-10T19:00:12+00:00",
     "summary": "Jordan Henderson has a home debut to remember as he scores twice for Chelsea as his side thrash Bournemouth 5-1 at Stamford Bridge, leaving the away side still searching for their first Premier League win this season."
    },
    {
     "ref": "bbc_football#23",
     "title": "Brilliant Guimaraes goal helps Arsenal fight back to beat Leeds",
     "published": "2026-10-10T19:00:08+00:00",
     "summary": "A brilliant goal from Bruno Guimaraes helps Arsenal come from behind to beat Leeds United 2-1 at the Emirates, as the champions get back to winning ways in the Premier League."
    },
    {
     "ref": "bbc_football#24",
     "title": "Tottenham grab a draw but who got 1/10 - Ratings for Man Utd v Spurs",
     "published": "2026-10-10T18:46:40+00:00",
     "summary": "Tottenham score an injury-time equaliser against Manchester United after Rodrigo Bentancur was sent off for headbutting Luke Shaw."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Lionel Messi shines for Inter Miami shortly after his farewell to Argentina - Goal.com",
     "published": "2026-10-11T08:19:39+00:00",
     "summary": "Lionel Messi shines for Inter Miami shortly after his farewell to Argentina Goal.com"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Lionel Messi delivers masterclass following Argentina retirement - MLSsoccer.com",
     "published": "2026-10-11T07:52:30+00:00",
     "summary": "Lionel Messi delivers masterclass following Argentina retirement MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Post-Match Facts | #MCFvDC - D.C. United",
     "published": "2026-10-11T07:19:12+00:00",
     "summary": "Post-Match Facts | #MCFvDC D.C. United"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Video: Messi celebrates in his own way after international retirement - Goal.com",
     "published": "2026-10-11T07:15:16+00:00",
     "summary": "Video: Messi celebrates in his own way after international retirement Goal.com"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Messi, Suarez Score Braces as Inter Miami End Winless Run With 4-0 Victory - TVC News",
     "published": "2026-10-11T06:40:00+00:00",
     "summary": "Messi, Suarez Score Braces as Inter Miami End Winless Run With 4-0 Victory TVC News"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Inter Miami player ratings vs DC United: Luis Suarez and Lionel Messi dismantle visitors in four-goal rout - Goal.com",
     "published": "2026-10-11T06:37:11+00:00",
     "summary": "Inter Miami player ratings vs DC United: Luis Suarez and Lionel Messi dismantle visitors in four-goal rout Goal.com"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Inter Miami vs DC United Standings: Messi and Suarez Lift Miami to 2nd - Aktualita.co",
     "published": "2026-10-11T06:19:05+00:00",
     "summary": "Inter Miami vs DC United Standings: Messi and Suarez Lift Miami to 2nd Aktualita.co"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Lionel Messi, Luis Suarez score braces as Inter Miami beat D.C. United 4-0 in MLS - Telangana Today",
     "published": "2026-10-11T05:41:28+00:00",
     "summary": "Lionel Messi, Luis Suarez score braces as Inter Miami beat D.C. United 4-0 in MLS Telangana Today"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Messi and Suárez roll back the years as Inter Miami thrash DC United - Diario AS",
     "published": "2026-10-11T05:37:09+00:00",
     "summary": "Messi and Suárez roll back the years as Inter Miami thrash DC United Diario AS"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Inter Miami Player Ratings: Messi, Suarez Star in 4-0 Win - The False 9",
     "published": "2026-10-11T05:35:44+00:00",
     "summary": "Inter Miami Player Ratings: Messi, Suarez Star in 4-0 Win The False 9"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Inter Miami vs DC United: Major League Soccer stats & head-to-head - BBC",
     "published": "2026-10-11T05:20:31+00:00",
     "summary": "Inter Miami vs DC United: Major League Soccer stats & head-to-head BBC"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Inter Miami CF - D.C. United 4 - 0 | BUT - Leo Messi - OneFootball",
     "published": "2026-10-11T05:12:42+00:00",
     "summary": "Inter Miami CF - D.C. United 4 - 0 | BUT - Leo Messi OneFootball"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Messi scores twice in first game since Argentina retirement, Inter Miami beats DC United 4-0 - The New Indian Express",
     "published": "2026-10-11T05:11:00+00:00",
     "summary": "Messi scores twice in first game since Argentina retirement, Inter Miami beats DC United 4-0 The New Indian Express"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Lionel Messi Scores Twice For Inter Miami In 1st Game Since Argentina Retirement - FOX Sports",
     "published": "2026-10-11T04:51:09+00:00",
     "summary": "Lionel Messi Scores Twice For Inter Miami In 1st Game Since Argentina Retirement FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Lionel Messi hits 934 career goals: Where does Cristiano Ronaldo stand in the race to 1,000? - Bolavip US",
     "published": "2026-10-11T04:42:59+00:00",
     "summary": "Lionel Messi hits 934 career goals: Where does Cristiano Ronaldo stand in the race to 1,000? Bolavip US"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Inter Miami player ratings vs DC United: Luis Suarez and Lionel Messi dismantle visitors in four-goal rout - Yahoo",
     "published": "2026-10-11T04:37:00+00:00",
     "summary": "Inter Miami player ratings vs DC United: Luis Suarez and Lionel Messi dismantle visitors in four-goal rout Yahoo"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Messi nets two in first win since Argentina departure - Flashscore.com",
     "published": "2026-10-11T04:24:38+00:00",
     "summary": "Messi nets two in first win since Argentina departure Flashscore.com"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Inter Miami CF - D.C. United 3 - 0 | BUT - Leo Messi - OneFootball",
     "published": "2026-10-11T03:49:09+00:00",
     "summary": "Inter Miami CF - D.C. United 3 - 0 | BUT - Leo Messi OneFootball"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Messi scores a double, Inter Miami wins big after leaving Argentina - Laodong.vn",
     "published": "2026-10-11T03:16:27+00:00",
     "summary": "Messi scores a double, Inter Miami wins big after leaving Argentina Laodong.vn"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Messi scores twice on Inter Miami return after Argentina farewell - The Malaysian Reserve",
     "published": "2026-10-11T03:15:44+00:00",
     "summary": "Messi scores twice on Inter Miami return after Argentina farewell The Malaysian Reserve"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Inter Miami CF - D.C. United 2 - 0 | GOL - Luis Suárez - OneFootball",
     "published": "2026-10-11T03:14:28+00:00",
     "summary": "Inter Miami CF - D.C. United 2 - 0 | GOL - Luis Suárez OneFootball"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Messi scores twice in Inter Miami return following final match for Argentina - WION",
     "published": "2026-10-11T03:12:00+00:00",
     "summary": "Messi scores twice in Inter Miami return following final match for Argentina WION"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Inter Miami CF - D.C. United 3 - 0 | TOR - Leo Messi - OneFootball",
     "published": "2026-10-11T03:02:37+00:00",
     "summary": "Inter Miami CF - D.C. United 3 - 0 | TOR - Leo Messi OneFootball"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Inter Miami vs DC United player ratings — Messi nets brace in first match since Argentina retirement - Sportstar",
     "published": "2026-10-11T02:48:44+00:00",
     "summary": "Inter Miami vs DC United player ratings — Messi nets brace in first match since Argentina retirement Sportstar"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "MATCH RECAP: Inter Miami CF Secures 4-0 Shutout of D.C. United - Inter Miami CF",
     "published": "2026-10-11T02:39:54+00:00",
     "summary": "MATCH RECAP: Inter Miami CF Secures 4-0 Shutout of D.C. United Inter Miami CF"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Video - Tyrese Haliburton Wants To Repair Relationship With Trail Blazers' Damian Lillard - roundtable.io",
     "published": "2026-10-11T01:32:54+00:00",
     "summary": "Video - Tyrese Haliburton Wants To Repair Relationship With Trail Blazers' Damian Lillard roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Trail Blaziers' Deni Avdija Gets Overlooked In Latest NBA Player Rankings - roundtable.io",
     "published": "2026-10-10T17:10:54+00:00",
     "summary": "Trail Blaziers' Deni Avdija Gets Overlooked In Latest NBA Player Rankings roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Video - Trail Blaziers' Deni Avdija Gets Overlooked In Latest NBA Player Rankings - roundtable.io",
     "published": "2026-10-10T17:00:10+00:00",
     "summary": "Video - Trail Blaziers' Deni Avdija Gets Overlooked In Latest NBA Player Rankings roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Blazers Center Yang Hansen Gets Concerning News Ahead of New Season - Heavy.com",
     "published": "2026-10-10T15:39:22+00:00",
     "summary": "Blazers Center Yang Hansen Gets Concerning News Ahead of New Season Heavy.com"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Video - Trail Blazers Cannot Let Every Game Become an Audition - roundtable.io",
     "published": "2026-10-10T11:00:40+00:00",
     "summary": "Video - Trail Blazers Cannot Let Every Game Become an Audition roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "What I Changed My Mind About After Blazers Win vs. Warriors - Sports Illustrated",
     "published": "2026-10-09T19:00:01+00:00",
     "summary": "What I Changed My Mind About After Blazers Win vs. Warriors Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Ja Morant’s playmaking is already making Deni Avdija more efficient for Blazers - Rip City Project",
     "published": "2026-10-09T15:03:36+00:00",
     "summary": "Ja Morant’s playmaking is already making Deni Avdija more efficient for Blazers Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Max Fried’s postseason woes continue — but there’s good news - Jewish Telegraphic Agency",
     "published": "2026-10-09T15:00:00+00:00",
     "summary": "Max Fried’s postseason woes continue — but there’s good news Jewish Telegraphic Agency"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "NBA Most Improved Player Odds & Favorites for 2027 - sports.betmgm.com",
     "published": "2026-10-09T07:00:00+00:00",
     "summary": "NBA Most Improved Player Odds & Favorites for 2027 sports.betmgm.com"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Philadelphia 76ers at Brooklyn Nets - NBA Game Summary - Oct 08, 2026 - USA Today",
     "published": "2026-10-09T02:59:03+00:00",
     "summary": "Philadelphia 76ers at Brooklyn Nets - NBA Game Summary - Oct 08, 2026 USA Today"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "LeBron loses in Philadelphia debut in preseason game - against Wolf and Ben Saraf - Ynetnews",
     "published": "2026-10-09T02:50:33+00:00",
     "summary": "LeBron loses in Philadelphia debut in preseason game - against Wolf and Ben Saraf Ynetnews"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Video - Trail Blazers Should Make Deflections a Public Standard - roundtable.io",
     "published": "2026-10-09T01:42:31+00:00",
     "summary": "Video - Trail Blazers Should Make Deflections a Public Standard roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "4 Winners, 2 Losers from Blazers Preseason Opener vs. Warriors - Yahoo",
     "published": "2026-10-08T21:13:41+00:00",
     "summary": "4 Winners, 2 Losers from Blazers Preseason Opener vs. Warriors Yahoo"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Deni Avdija goes for team-high 23 points vs. GSW - NBC Sports",
     "published": "2026-10-08T18:32:36+00:00",
     "summary": "Deni Avdija goes for team-high 23 points vs. GSW NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Trail Blazers' Deni Avdija: Hits for team-high 23 in preseason win - CBS Sports",
     "published": "2026-10-08T14:24:51+00:00",
     "summary": "Trail Blazers' Deni Avdija: Hits for team-high 23 in preseason win CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija News: Hits for team-high 23 in preseason win - RotoWire",
     "published": "2026-10-08T14:24:51+00:00",
     "summary": "Deni Avdija News: Hits for team-high 23 in preseason win RotoWire"
    }
   ]
  }
 ]
}
</input>