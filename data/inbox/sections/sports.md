Write the Sports section: 3-5 stories.

- Draw on European soccer (big-5 leagues, Champions League), Inter Miami / MLS, international soccer and the NBA.
- Arsenal and Barcelona always get a story if they played yesterday, play today or tomorrow, or have real news. Even on a quiet day, one story can cover where they stand: table, form and next fixture.
- Other clubs and leagues earn a slot only when their storyline is genuinely big.
- Include an NBA story only if there is meaningful NBA news. It may be the offseason.
- Results, fixtures and tables come from the structured data. Storylines come from the news feeds. Cite "football_data", "balldontlie" or "thesportsdb" as a source_ref when you use their data.
- Today is a match day for the reader's teams: [
 {
  "sport": "soccer",
  "competition": "Premier League",
  "home": "Arsenal",
  "away": "Everton",
  "kickoff_utc": "2026-10-24T14:00:00Z"
 },
 {
  "sport": "nba",
  "competition": "NBA",
  "home": "Cleveland Cavaliers",
  "away": "Brooklyn Nets",
  "kickoff_utc": "2026-10-24T23:30:00.000Z"
 }
]. Lead with a preview of that game (what's at stake, form, table position).
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
     "competition": "Copa Libertadores",
     "kickoff_utc": "2026-10-23T00:30:00Z",
     "home": "Flamengo",
     "away": "Estudiantes LP",
     "status": "FINISHED",
     "score": "2-3"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-23T18:00:00Z",
     "home": "Go Ahead",
     "away": "Telstar",
     "status": "FINISHED",
     "score": "3-2"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-23T18:30:00Z",
     "home": "Stuttgart",
     "away": "M'gladbach",
     "status": "FINISHED",
     "score": "2-3"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-23T18:45:00Z",
     "home": "Brest",
     "away": "Nice",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-23T18:45:00Z",
     "home": "Torino",
     "away": "Monza",
     "status": "FINISHED",
     "score": "3-2"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-23T19:00:00Z",
     "home": "Bolton",
     "away": "Middlesbrough",
     "status": "FINISHED",
     "score": "1-5"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-23T19:00:00Z",
     "home": "Ipswich Town",
     "away": "Nottingham",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-23T19:00:00Z",
     "home": "Alavés",
     "away": "Málaga",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-23T19:45:00Z",
     "home": "Vitória SC",
     "away": "Marítimo",
     "status": "FINISHED",
     "score": "5-0"
    }
   ],
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-23T23:00:00Z",
     "home": "Cruzeiro",
     "away": "Clube do Remo",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-24T11:30:00Z",
     "home": "Portsmouth",
     "away": "Millwall",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-24T11:30:00Z",
     "home": "Aston Villa",
     "away": "Man City",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-24T11:30:00Z",
     "home": "Sheffield Utd",
     "away": "Derby County",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-24T11:30:00Z",
     "home": "Charlton",
     "away": "Norwich",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-24T12:00:00Z",
     "home": "Rayo Vallecano",
     "away": "Elche",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-24T13:00:00Z",
     "home": "Como 1907",
     "away": "Sassuolo",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-24T13:00:00Z",
     "home": "Cagliari",
     "away": "Bologna",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-24T13:30:00Z",
     "home": "Mainz",
     "away": "Bremen",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-24T13:30:00Z",
     "home": "Augsburg",
     "away": "Union Berlin",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-24T13:30:00Z",
     "home": "RB Leipzig",
     "away": "Elversberg",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-24T13:30:00Z",
     "home": "SC Paderborn",
     "away": "HSV",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-24T13:30:00Z",
     "home": "1. FC Köln",
     "away": "Schalke",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-24T14:00:00Z",
     "home": "West Ham",
     "away": "Southampton",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-24T14:00:00Z",
     "home": "QPR",
     "away": "Swansea",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-24T14:00:00Z",
     "home": "Blackburn",
     "away": "Wrexham",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-24T14:00:00Z",
     "home": "Preston NE",
     "away": "West Brom",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-24T14:00:00Z",
     "home": "Arsenal",
     "away": "Everton",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-24T14:00:00Z",
     "home": "Lincoln City",
     "away": "Burnley",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-24T14:00:00Z",
     "home": "Coventry City",
     "away": "Fulham",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-24T14:00:00Z",
     "home": "Stoke",
     "away": "Bristol City",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-24T14:00:00Z",
     "home": "Cardiff",
     "away": "Birmingham",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-24T14:00:00Z",
     "home": "Wolverhampton",
     "away": "Watford",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-24T14:15:00Z",
     "home": "Santander",
     "away": "Espanyol",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-24T14:30:00Z",
     "home": "Amadora",
     "away": "Casa Pia",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-24T14:30:00Z",
     "home": "Utrecht",
     "away": "Zwolle",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-24T16:00:00Z",
     "home": "Napoli",
     "away": "Roma",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-24T16:30:00Z",
     "home": "Chelsea",
     "away": "Tottenham",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-24T16:30:00Z",
     "home": "Valencia",
     "away": "Villarreal",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-24T16:30:00Z",
     "home": "Dortmund",
     "away": "Frankfurt",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-24T16:45:00Z",
     "home": "Willem II",
     "away": "Cambuur",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-24T17:00:00Z",
     "home": "Alverca",
     "away": "Arouca",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-24T18:45:00Z",
     "home": "Lazio",
     "away": "Parma",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-24T18:45:00Z",
     "home": "RC Lens",
     "away": "Paris FC",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-24T19:00:00Z",
     "home": "Atleti",
     "away": "Deportivo",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-24T19:00:00Z",
     "home": "Den Haag",
     "away": "Heerenveen",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-24T19:30:00Z",
     "home": "Mirassol",
     "away": "São Paulo",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-24T19:30:00Z",
     "home": "Vitória",
     "away": "Paranaense",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-24T19:30:00Z",
     "home": "Internacional",
     "away": "Botafogo",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-24T19:30:00Z",
     "home": "Gil Vicente",
     "away": "Porto",
     "status": "TIMED",
     "score": null
    }
   ],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-24T21:30:00Z",
     "home": "Vasco da Gama",
     "away": "Corinthians",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-24T21:30:00Z",
     "home": "Palmeiras",
     "away": "Bragantino",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-24T22:30:00Z",
     "home": "Chapecoense",
     "away": "Fluminense",
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
     "played": 7,
     "pts": 21,
     "gd": 12
    },
    {
     "pos": 2,
     "team": "Arsenal",
     "played": 7,
     "pts": 18,
     "gd": 6
    },
    {
     "pos": 3,
     "team": "Brighton Hove",
     "played": 7,
     "pts": 16,
     "gd": 18
    },
    {
     "pos": 4,
     "team": "Chelsea",
     "played": 7,
     "pts": 13,
     "gd": 4
    },
    {
     "pos": 5,
     "team": "Liverpool",
     "played": 7,
     "pts": 12,
     "gd": 1
    },
    {
     "pos": 6,
     "team": "Brentford",
     "played": 7,
     "pts": 10,
     "gd": 5
    }
   ],
   "Primera Division": [
    {
     "pos": 1,
     "team": "Barça",
     "played": 9,
     "pts": 27,
     "gd": 30
    },
    {
     "pos": 2,
     "team": "Atleti",
     "played": 9,
     "pts": 22,
     "gd": 11
    },
    {
     "pos": 3,
     "team": "Real Madrid",
     "played": 9,
     "pts": 21,
     "gd": 14
    },
    {
     "pos": 4,
     "team": "Real Betis",
     "played": 9,
     "pts": 19,
     "gd": 2
    },
    {
     "pos": 5,
     "team": "Real Sociedad",
     "played": 9,
     "pts": 16,
     "gd": 0
    },
    {
     "pos": 6,
     "team": "Sevilla FC",
     "played": 9,
     "pts": 14,
     "gd": -2
    }
   ],
   "Bundesliga": [
    {
     "pos": 1,
     "team": "Bayern",
     "played": 6,
     "pts": 14,
     "gd": 17
    },
    {
     "pos": 2,
     "team": "Dortmund",
     "played": 6,
     "pts": 14,
     "gd": 7
    },
    {
     "pos": 3,
     "team": "Freiburg",
     "played": 6,
     "pts": 13,
     "gd": 9
    },
    {
     "pos": 4,
     "team": "Leverkusen",
     "played": 6,
     "pts": 13,
     "gd": 7
    },
    {
     "pos": 5,
     "team": "Mainz",
     "played": 6,
     "pts": 10,
     "gd": 4
    },
    {
     "pos": 6,
     "team": "Elversberg",
     "played": 6,
     "pts": 10,
     "gd": 1
    }
   ],
   "Serie A": [
    {
     "pos": 1,
     "team": "Inter",
     "played": 7,
     "pts": 19,
     "gd": 12
    },
    {
     "pos": 2,
     "team": "Lazio",
     "played": 7,
     "pts": 19,
     "gd": 10
    },
    {
     "pos": 3,
     "team": "Roma",
     "played": 7,
     "pts": 17,
     "gd": 13
    },
    {
     "pos": 4,
     "team": "Milan",
     "played": 7,
     "pts": 15,
     "gd": 7
    },
    {
     "pos": 5,
     "team": "Como 1907",
     "played": 7,
     "pts": 14,
     "gd": 5
    },
    {
     "pos": 6,
     "team": "Frosinone",
     "played": 7,
     "pts": 13,
     "gd": 4
    }
   ],
   "Ligue 1": [
    {
     "pos": 1,
     "team": "Olympique Lyon",
     "played": 7,
     "pts": 14,
     "gd": 8
    },
    {
     "pos": 2,
     "team": "PSG",
     "played": 7,
     "pts": 14,
     "gd": 5
    },
    {
     "pos": 3,
     "team": "Paris FC",
     "played": 7,
     "pts": 14,
     "gd": 5
    },
    {
     "pos": 4,
     "team": "Lille",
     "played": 7,
     "pts": 14,
     "gd": 5
    },
    {
     "pos": 5,
     "team": "Monaco",
     "played": 7,
     "pts": 14,
     "gd": 4
    },
    {
     "pos": 6,
     "team": "Stade Rennais",
     "played": 7,
     "pts": 13,
     "gd": 1
    }
   ]
  },
  "favorite_teams": {
   "arsenal": {
    "recent": [
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-10-13T19:00:00Z",
      "home": "Arsenal",
      "away": "Lille",
      "status": "FINISHED",
      "score": "3-0"
     },
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-10-18T15:30:00Z",
      "home": "Nottingham",
      "away": "Arsenal",
      "status": "FINISHED",
      "score": "0-1"
     },
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-10-21T19:00:00Z",
      "home": "Bayern",
      "away": "Arsenal",
      "status": "FINISHED",
      "score": "2-2"
     }
    ],
    "upcoming": [
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-10-24T14:00:00Z",
      "home": "Arsenal",
      "away": "Everton",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-11-01T16:30:00Z",
      "home": "Liverpool",
      "away": "Arsenal",
      "status": "TIMED",
      "score": null
     }
    ]
   },
   "barcelona": {
    "recent": [
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-10-13T19:00:00Z",
      "home": "Galatasaray",
      "away": "Barça",
      "status": "FINISHED",
      "score": "1-4"
     },
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-10-17T16:30:00Z",
      "home": "Real Betis",
      "away": "Barça",
      "status": "FINISHED",
      "score": "2-5"
     },
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-10-20T19:00:00Z",
      "home": "PSG",
      "away": "Barça",
      "status": "FINISHED",
      "score": "4-2"
     }
    ],
    "upcoming": [
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-10-25T20:00:00Z",
      "home": "Barça",
      "away": "Real Madrid",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-10-31T20:00:00Z",
      "home": "Barça",
      "away": "Alavés",
      "status": "TIMED",
      "score": null
     }
    ]
   }
  }
 },
 "nba_data": {
  "games_last_night": [
   {
    "home": "Boston Celtics",
    "away": "New York Knicks",
    "score": "107-103",
    "status": "Final"
   },
   {
    "home": "San Antonio Spurs",
    "away": "Houston Rockets",
    "score": "110-114",
    "status": "Final"
   },
   {
    "home": "Charlotte Hornets",
    "away": "Atlanta Hawks",
    "score": "81-128",
    "status": "Final"
   },
   {
    "home": "Indiana Pacers",
    "away": "Dallas Mavericks",
    "score": "105-121",
    "status": "Final"
   },
   {
    "home": "Orlando Magic",
    "away": "Minnesota Timberwolves",
    "score": "93-115",
    "status": "Final"
   },
   {
    "home": "Washington Wizards",
    "away": "Toronto Raptors",
    "score": "102-112",
    "status": "Final"
   },
   {
    "home": "Miami Heat",
    "away": "Detroit Pistons",
    "score": "111-128",
    "status": "Final"
   },
   {
    "home": "Milwaukee Bucks",
    "away": "Chicago Bulls",
    "score": "125-132",
    "status": "Final"
   },
   {
    "home": "Utah Jazz",
    "away": "New Orleans Pelicans",
    "score": "120-119",
    "status": "Final"
   },
   {
    "home": "Golden State Warriors",
    "away": "Memphis Grizzlies",
    "score": "108-111",
    "status": "Final"
   },
   {
    "home": "Los Angeles Lakers",
    "away": "LA Clippers",
    "score": "125-117",
    "status": "Final"
   },
   {
    "home": "Sacramento Kings",
    "away": "Portland Trail Blazers",
    "score": "120-128",
    "status": "Final"
   }
  ],
  "games_today": [
   {
    "home": "Charlotte Hornets",
    "away": "Miami Heat",
    "score": null,
    "status": "2026-10-24T22:00:00Z"
   },
   {
    "home": "Cleveland Cavaliers",
    "away": "Brooklyn Nets",
    "score": null,
    "status": "2026-10-24T23:30:00Z"
   },
   {
    "home": "Philadelphia 76ers",
    "away": "Milwaukee Bucks",
    "score": null,
    "status": "2026-10-24T23:30:00Z"
   },
   {
    "home": "Atlanta Hawks",
    "away": "Houston Rockets",
    "score": null,
    "status": "2026-10-25T00:30:00Z"
   },
   {
    "home": "Chicago Bulls",
    "away": "Washington Wizards",
    "score": null,
    "status": "2026-10-25T00:00:00Z"
   },
   {
    "home": "Dallas Mavericks",
    "away": "San Antonio Spurs",
    "score": null,
    "status": "2026-10-25T00:00:00Z"
   },
   {
    "home": "Denver Nuggets",
    "away": "New Orleans Pelicans",
    "score": null,
    "status": "2026-10-25T01:00:00Z"
   },
   {
    "home": "Phoenix Suns",
    "away": "Golden State Warriors",
    "score": null,
    "status": "2026-10-25T02:00:00Z"
   }
  ],
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
     "kickoff_utc": "2026-10-14T23:30:00",
     "home": "Inter Miami",
     "away": "New York City FC",
     "score": "2-0"
    }
   ],
   "upcoming": [
    {
     "competition": "American Major League Soccer",
     "kickoff_utc": "2026-10-24T21:30:00",
     "home": "New York Red Bulls",
     "away": "Inter Miami",
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
     "title": "Carter-Vickers could make Premier League switch - gossip",
     "published": "2026-10-24T07:16:59+00:00",
     "summary": "Star Celtic defender is linked with a Premier League switch, while Rangers are eyeing up a January move for Swedish winger Oskar Fallenius."
    },
    {
     "ref": "bbc_football#1",
     "title": "Why Tottenham v Arsenal could define their seasons - live on BBC One",
     "published": "2026-10-24T06:02:44+00:00",
     "summary": "With Tottenham stuttering and Arsenal floundering, these fierce rivals both need a victory in Saturday's showdown, live on BBC One."
    },
    {
     "ref": "bbc_football#2",
     "title": "Why Tottenham v Arsenal could define their seasons - live on BBC One",
     "published": "2026-10-24T06:02:44+00:00",
     "summary": "With Tottenham stuttering and Arsenal floundering, these fierce rivals both need a victory in Saturday's showdown, live on BBC One."
    },
    {
     "ref": "bbc_football#3",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-10-24T05:41:29+00:00",
     "summary": "Test your football knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#4",
     "title": "'Best team in the Championship' - Boro lay down marker",
     "published": "2026-10-23T23:14:00+00:00",
     "summary": "Middlesbrough thrash Bolton 5-1 to go top of the Championship and confirm their place among the promotion favourites."
    },
    {
     "ref": "bbc_football#5",
     "title": "'We had to scrap' - O'Neil praises Ipswich resilience after Forest draw",
     "published": "2026-10-23T22:21:51+00:00",
     "summary": "Ipswich manager Gary O'Neil praises his side's ability to \"dig in and fight\" as his side come from behind to earn a 1-1 draw against Nottingham Forest at Portman Road in the Premier League."
    },
    {
     "ref": "bbc_football#6",
     "title": "'It doesn't make sense' - Glasner confused after Diop avoids red card",
     "published": "2026-10-23T22:15:29+00:00",
     "summary": "Nottingham Forest manager Oliver Glasner admits he was left confused by the decision to not send off Issa Diop after a VAR check during his side's 1-1 draw at Ipswich Town, but praised his side's performance and urged them to 'stay patient' as Forest's winless run stretched to four matches."
    },
    {
     "ref": "bbc_football#7",
     "title": "Forest left frustrated as winless run goes on after draw at Ipswich",
     "published": "2026-10-23T21:54:54+00:00",
     "summary": "Nottingham Forest ended a run of three successive league defeats but endured another night of missed chances as they drew 1-1 at Ipswich Town in the Premier League, but the result does move the away side out of the relegation zone on goal difference."
    },
    {
     "ref": "bbc_football#8",
     "title": "Borussia M'gladbach finally get first win after five-goal thriller",
     "published": "2026-10-23T21:37:41+00:00",
     "summary": "Bundesliga's bottom side Borussia Monchengladbach come from behind to beat Stuttgart 3-2, as the away side secure their first league win of the season, at the seventh attempt."
    },
    {
     "ref": "bbc_football#9",
     "title": "Villa could reconsider Garnacho deal - Saturday's gossip",
     "published": "2026-10-23T21:32:04+00:00",
     "summary": "Aston Villa have doubts on making Alejandro Garnacho deal a permanent move, Brighton to stand firm on Diego Gomez amid interest, Manchester United managerial candidates concern over players, plus more."
    },
    {
     "ref": "bbc_football#10",
     "title": "Spygate put me in difficult position - Southampton technical director",
     "published": "2026-10-23T17:23:21+00:00",
     "summary": "Southampton group technical director Johannes Spors says that the Spygate scandal put him in a \"difficult position\" over the summer."
    },
    {
     "ref": "bbc_football#11",
     "title": "Kompany taken to hospital after collapsing at training",
     "published": "2026-10-23T16:39:03+00:00",
     "summary": "Bayern Munich manager Vincent Kompany is taken to hospital after collapsing as he watched the club's second team train on Friday."
    },
    {
     "ref": "bbc_football#12",
     "title": "AFC Wimbledon's Skiverton diagnosed with cancer",
     "published": "2026-10-23T15:45:07+00:00",
     "summary": "AFC Wimbledon assistant manager Terry Skiverton is scheduled to begin treatment in the coming weeks after being diagnosed with throat cancer."
    },
    {
     "ref": "bbc_football#13",
     "title": "Premiership preview: Form strikers in focus and will Rangers respond?",
     "published": "2026-10-23T15:39:58+00:00",
     "summary": "An analysis of the key Scottish Premiership questions before Saturday and Sunday's fixtures."
    },
    {
     "ref": "bbc_football#14",
     "title": "Premiership preview: Form strikers in focus and will Rangers respond?",
     "published": "2026-10-23T15:39:58+00:00",
     "summary": "An analysis of the key Scottish Premiership questions before Saturday and Sunday's fixtures."
    },
    {
     "ref": "bbc_football#15",
     "title": "Derby day - when Chelsea and Spurs meet, is chaos guaranteed?",
     "published": "2026-10-23T14:49:59+00:00",
     "summary": "Chelsea face Tottenham Hotspur in the Premier League this weekend - and BBC Sport looks back at five memorable matches between the London rivals."
    },
    {
     "ref": "bbc_football#16",
     "title": "PSG v Lyon moved as Paris prepares for more protests",
     "published": "2026-10-23T14:18:41+00:00",
     "summary": "Paris St-Germain's Ligue 1 match against Lyon at the Parc des Princes is pushed back 24 hours as the French capital prepares for another weekend of protests."
    },
    {
     "ref": "bbc_football#17",
     "title": "Raskin happy at Rangers but unsure about January",
     "published": "2026-10-23T14:11:42+00:00",
     "summary": "Belgium midfielder Nicolas Raskin is \"really happy\" at Rangers but is unsure what might happen in January."
    },
    {
     "ref": "bbc_football#18",
     "title": "Raskin 'very happy' at Rangers but unsure about January",
     "published": "2026-10-23T14:11:42+00:00",
     "summary": "Belgium midfielder Nicolas Raskin is \"really happy\" at Rangers but is unsure what might happen in January."
    },
    {
     "ref": "bbc_football#19",
     "title": "Arsenal fear Saka could be out for two months",
     "published": "2026-10-23T14:09:36+00:00",
     "summary": "Arsenal forward Bukayo Saka could be sidelined for up to eight weeks with the quadriceps injury he suffered against Bayern Munich."
    },
    {
     "ref": "bbc_football#20",
     "title": "Carrick refuses to rule out dropping Fernandes in emotional address",
     "published": "2026-10-23T13:55:37+00:00",
     "summary": "Michael Carrick speaks for five uninterrupted minutes at media briefing to outline what Manchester United means to him, then refuses to rule out dropping Bruno Fernandes."
    },
    {
     "ref": "bbc_football#21",
     "title": "Penicuik v Clyde in Scottish Cup postponed",
     "published": "2026-10-23T12:22:01+00:00",
     "summary": "Friday's Scottish Cup tie between Penicuik Athletic and Clyde has been postponed until Tuesday because of heavy rain."
    },
    {
     "ref": "bbc_football#22",
     "title": "Penicuik v Clyde in Scottish Cup postponed",
     "published": "2026-10-23T12:22:01+00:00",
     "summary": "Friday's Scottish Cup tie between Penicuik Athletic and Clyde has been postponed until Tuesday because of heavy rain."
    },
    {
     "ref": "bbc_football#23",
     "title": "Cost of football regulator double initial estimate",
     "published": "2026-10-23T12:19:33+00:00",
     "summary": "The annual cost to clubs of English football's Independent Regulator (IFR) has risen to £20.3m, around double the amount initially estimated."
    },
    {
     "ref": "bbc_football#24",
     "title": "Conte plays down 'unfounded' Man Utd speculation",
     "published": "2026-10-23T12:15:53+00:00",
     "summary": "Antonio Conte says he is not in advanced talks with any club, in response to speculation he has held talks with Manchester United."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Will Lionel Messi Play in Red Bull New York vs Inter Miami MLS 2026 Match? - LatestLY",
     "published": "2026-10-24T07:00:43+00:00",
     "summary": "Will Lionel Messi Play in Red Bull New York vs Inter Miami MLS 2026 Match? LatestLY"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Barcelona, Inter Miami congratulate Messi on Asturias award win - Chronicle NG",
     "published": "2026-10-24T06:47:51+00:00",
     "summary": "Barcelona, Inter Miami congratulate Messi on Asturias award win Chronicle NG"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Barcelona, Inter Miami hail Messi’s historic Asturias award - Head Topics",
     "published": "2026-10-24T06:28:00+00:00",
     "summary": "Barcelona, Inter Miami hail Messi’s historic Asturias award Head Topics"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Barcelona, Inter Miami hail Messi’s historic Asturias award - Punch Newspapers",
     "published": "2026-10-24T06:13:56+00:00",
     "summary": "Barcelona, Inter Miami hail Messi’s historic Asturias award Punch Newspapers"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Lionel Messi makes history as the first individual footballer to receive the Princess of Asturias Award - t2ONLINE",
     "published": "2026-10-24T05:32:00+00:00",
     "summary": "Lionel Messi makes history as the first individual footballer to receive the Princess of Asturias Award t2ONLINE"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Major League Soccer (MLS) TV Schedule: Upcoming games, dates and kick-off times - Goal.com",
     "published": "2026-10-24T05:13:22+00:00",
     "summary": "Major League Soccer (MLS) TV Schedule: Upcoming games, dates and kick-off times Goal.com"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "MATCH PREVIEW, pres. by Toyota: Red Bull New York Host Inter Miami CF on Saturday Afternoon at Sports Illustrated Stadium - Red Bull New York",
     "published": "2026-10-24T04:13:07+00:00",
     "summary": "MATCH PREVIEW, pres. by Toyota: Red Bull New York Host Inter Miami CF on Saturday Afternoon at Sports Illustrated Stadium Red Bull New York"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Lionel Messi Honored With 2026 Princess of Asturias Sports Award in Spain - LatestLY",
     "published": "2026-10-24T03:42:06+00:00",
     "summary": "Lionel Messi Honored With 2026 Princess of Asturias Sports Award in Spain LatestLY"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "New York Red Bulls v Inter Miami CF Odds - FanDuel Sportsbook",
     "published": "2026-10-24T03:28:29+00:00",
     "summary": "New York Red Bulls v Inter Miami CF Odds FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Inter Miami CF (@InterMiamiCF) on X - Howl.Link",
     "published": "2026-10-24T00:26:37+00:00",
     "summary": "Inter Miami CF (@InterMiamiCF) on X Howl.Link"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Inter Miami congratulate Lionel Messi after receiving Princess of Asturias Award for Sports - World Soccer Talk",
     "published": "2026-10-23T23:06:18+00:00",
     "summary": "Inter Miami congratulate Lionel Messi after receiving Princess of Asturias Award for Sports World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Lionel Messi looks past Ballon d'Or glory as Inter Miami star reveals how he wants to be remembered after retirement - Goal.com",
     "published": "2026-10-23T23:04:54+00:00",
     "summary": "Lionel Messi looks past Ballon d'Or glory as Inter Miami star reveals how he wants to be remembered after retirement Goal.com"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "New York RB vs Inter Miami - Odds, Live Scores and Detailed Stats - BettingOdds.com",
     "published": "2026-10-23T23:04:12+00:00",
     "summary": "New York RB vs Inter Miami - Odds, Live Scores and Detailed Stats BettingOdds.com"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Match preview: Youth in the midfield fueling 5-Stripes before a Chicago Fire matchup to stay in playoff race - Atlanta United FC",
     "published": "2026-10-23T23:01:26+00:00",
     "summary": "Match preview: Youth in the midfield fueling 5-Stripes before a Chicago Fire matchup to stay in playoff race Atlanta United FC"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Inter Miami CF Academy Teams Set for Action-Packed Tournament Weekend - Inter Miami CF",
     "published": "2026-10-23T22:17:09+00:00",
     "summary": "Inter Miami CF Academy Teams Set for Action-Packed Tournament Weekend Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Red Bull New York’s Playoff Hopes on the Line Against Messi’s Inter Miami - Hooligan Soccer",
     "published": "2026-10-23T22:15:00+00:00",
     "summary": "Red Bull New York’s Playoff Hopes on the Line Against Messi’s Inter Miami Hooligan Soccer"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "How to watch Red Bulls vs Inter Miami match in the USA: Live stream and TV for 2026 MLS season - World Soccer Talk",
     "published": "2026-10-23T21:46:17+00:00",
     "summary": "How to watch Red Bulls vs Inter Miami match in the USA: Live stream and TV for 2026 MLS season World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Amid hectic travel plans, Lionel Messi leads Miami vs. Red Bulls - Fort Worth Star-Telegram",
     "published": "2026-10-23T21:41:07+00:00",
     "summary": "Amid hectic travel plans, Lionel Messi leads Miami vs. Red Bulls Fort Worth Star-Telegram"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Lionel Messi receives an impressive ovation upon receiving the Princess of Asturias Award in Spain - Diario AS",
     "published": "2026-10-23T21:35:00+00:00",
     "summary": "Lionel Messi receives an impressive ovation upon receiving the Princess of Asturias Award in Spain Diario AS"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Inter Miami chase fourth successive win at Red Bull New York - OneFootball",
     "published": "2026-10-23T21:34:48+00:00",
     "summary": "Inter Miami chase fourth successive win at Red Bull New York OneFootball"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Paul Pogba Linked With Inter Miami as Lionel Messi Reunion Remains Only a Possibility - Pasión Fútbol",
     "published": "2026-10-23T21:00:00+00:00",
     "summary": "Paul Pogba Linked With Inter Miami as Lionel Messi Reunion Remains Only a Possibility Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "New York Red Bulls vs Inter Miami: Kalshi Promo Code & $25 Bonus - Squawka",
     "published": "2026-10-23T20:59:20+00:00",
     "summary": "New York Red Bulls vs Inter Miami: Kalshi Promo Code & $25 Bonus Squawka"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "MATCH PREVIEW: Inter Miami CF Visits Red Bull New York in Search of Fourth Straight Win - Inter Miami CF",
     "published": "2026-10-23T20:59:06+00:00",
     "summary": "MATCH PREVIEW: Inter Miami CF Visits Red Bull New York in Search of Fourth Straight Win Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "After visiting Spain: will Messi watch El Clasico from the Camp Nou? - Goal.com",
     "published": "2026-10-23T20:53:07+00:00",
     "summary": "After visiting Spain: will Messi watch El Clasico from the Camp Nou? Goal.com"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "After visiting Spain: will Messi watch the Clasico from the Camp Nou? - LiveScore",
     "published": "2026-10-23T20:52:24+00:00",
     "summary": "After visiting Spain: will Messi watch the Clasico from the Camp Nou? LiveScore"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Trail Blazers 128-120 Kings (24 Oct, 2026) Final Score - ESPN India",
     "published": "2026-10-24T05:38:10+00:00",
     "summary": "Trail Blazers 128-120 Kings (24 Oct, 2026) Final Score ESPN India"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Deni Avdija propels Blazers to comeback victory over Kings - KNBR",
     "published": "2026-10-24T05:27:24+00:00",
     "summary": "Deni Avdija propels Blazers to comeback victory over Kings KNBR"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija scores 26 points to lead Trail Blazers in win over Kings - Times Union",
     "published": "2026-10-24T05:15:55+00:00",
     "summary": "Deni Avdija scores 26 points to lead Trail Blazers in win over Kings Times Union"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija with 26/6/6 in win against Kings - NBC Sports",
     "published": "2026-10-24T05:10:07+00:00",
     "summary": "Deni Avdija with 26/6/6 in win against Kings NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija scores 26 points to lead Trail Blazers in win over Kings - Niagara Falls Review",
     "published": "2026-10-24T05:09:09+00:00",
     "summary": "Deni Avdija scores 26 points to lead Trail Blazers in win over Kings Niagara Falls Review"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija scores 26 points to lead Trail Blazers in win over Kings - Oskaloosa Herald",
     "published": "2026-10-24T05:07:45+00:00",
     "summary": "Deni Avdija scores 26 points to lead Trail Blazers in win over Kings Oskaloosa Herald"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Deni Avdija scores 26 points to lead Trail Blazers in win over Kings - The Killeen Daily Herald",
     "published": "2026-10-24T05:07:45+00:00",
     "summary": "Deni Avdija scores 26 points to lead Trail Blazers in win over Kings The Killeen Daily Herald"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "NBA Most Improved Player Odds & Favorites for 2027 - sports.betmgm.com",
     "published": "2026-10-24T03:55:20+00:00",
     "summary": "NBA Most Improved Player Odds & Favorites for 2027 sports.betmgm.com"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Deni Avdija Fantasy Outlook & Stats - FantasySP",
     "published": "2026-10-23T19:07:22+00:00",
     "summary": "Deni Avdija Fantasy Outlook & Stats FantasySP"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Nets' Ben Saraf: No minutes against Charlotte - CBS Sports",
     "published": "2026-10-22T16:27:45+00:00",
     "summary": "Nets' Ben Saraf: No minutes against Charlotte CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Bulls quickly learn why Josh Giddey isn't built to recreate Deni Avdija's leap - Rip City Project",
     "published": "2026-10-22T16:04:04+00:00",
     "summary": "Bulls quickly learn why Josh Giddey isn't built to recreate Deni Avdija's leap Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Trail Blazers' Deni Avdija: Double-double in season opener - CBS Sports",
     "published": "2026-10-22T14:46:45+00:00",
     "summary": "Trail Blazers' Deni Avdija: Double-double in season opener CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija — No. 27 in The Ringer's NBA Top 100 - The Ringer",
     "published": "2026-10-22T12:15:38+00:00",
     "summary": "Deni Avdija — No. 27 in The Ringer's NBA Top 100 The Ringer"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Deni Avdija logs double-double Wednesday - FantasyPros",
     "published": "2026-10-22T06:56:45+00:00",
     "summary": "Deni Avdija logs double-double Wednesday FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Deni Avdija remains questionable before Blazers vs. Suns as Toumani Camara watch looms - شبكة تواصل الإخبارية",
     "published": "2026-10-22T02:45:52+00:00",
     "summary": "Deni Avdija remains questionable before Blazers vs. Suns as Toumani Camara watch looms شبكة تواصل الإخبارية"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija Headlines Today’s NBA Injury Report: Wednesday 10/21/26 - DraftKings Network",
     "published": "2026-10-22T01:31:40+00:00",
     "summary": "Deni Avdija Headlines Today’s NBA Injury Report: Wednesday 10/21/26 DraftKings Network"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Trail Blazers' Deni Avdija: Good to go Wednesday - CBS Sports",
     "published": "2026-10-22T01:06:25+00:00",
     "summary": "Trail Blazers' Deni Avdija: Good to go Wednesday CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Deni Avdija News: Good to go Wednesday - RotoWire",
     "published": "2026-10-22T01:06:25+00:00",
     "summary": "Deni Avdija News: Good to go Wednesday RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija regular season stats: averages by season - BasketNews.com",
     "published": "2026-10-22T00:58:29+00:00",
     "summary": "Deni Avdija regular season stats: averages by season BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Final Injury Report for Suns-Trail Blazers: Will Deni Avdija, Damian Lillard Play? - AOL.com",
     "published": "2026-10-21T22:00:00+00:00",
     "summary": "Final Injury Report for Suns-Trail Blazers: Will Deni Avdija, Damian Lillard Play? AOL.com"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Experts release final Blazers vs. Suns predictions: Deni Avdija injury update, line moves and model best bets - OregonLive.com",
     "published": "2026-10-21T21:09:00+00:00",
     "summary": "Experts release final Blazers vs. Suns predictions: Deni Avdija injury update, line moves and model best bets OregonLive.com"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Fantasy Basketball Week 1 Injury Report: Deni Avdija questionable, AJ Dybantsa out for opener - Yahoo Sports",
     "published": "2026-10-21T16:30:00+00:00",
     "summary": "Fantasy Basketball Week 1 Injury Report: Deni Avdija questionable, AJ Dybantsa out for opener Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Ben Saraf EuroCup stats: averages by season - BasketNews.com",
     "published": "2026-10-21T15:52:16+00:00",
     "summary": "Ben Saraf EuroCup stats: averages by season BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Is Deni Avdija playing tonight? Blazers vs. Suns injury report to open season - ClutchPoints",
     "published": "2026-10-21T14:29:23+00:00",
     "summary": "Is Deni Avdija playing tonight? Blazers vs. Suns injury report to open season ClutchPoints"
    }
   ]
  }
 ]
}
</input>