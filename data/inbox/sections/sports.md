Write the Sports section: 3-5 stories.

- Draw on European soccer (big-5 leagues, Champions League), Inter Miami / MLS, international soccer and the NBA.
- Arsenal and Barcelona always get a story if they played yesterday, play today or tomorrow, or have real news. Even on a quiet day, one story can cover where they stand: table, form and next fixture.
- Other clubs and leagues earn a slot only when their storyline is genuinely big.
- Include an NBA story only if there is meaningful NBA news. It may be the offseason.
- Results, fixtures and tables come from the structured data. Storylines come from the news feeds. Cite "football_data", "balldontlie" or "thesportsdb" as a source_ref when you use their data.
- Today is a match day for the reader's teams: [
 {
  "sport": "soccer",
  "competition": "Primera Division",
  "home": "Barça",
  "away": "Villarreal",
  "kickoff_utc": "2026-11-22T13:00:00Z"
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
     "competition": "Championship",
     "kickoff_utc": "2026-11-21T12:30:00Z",
     "home": "Norwich",
     "away": "Cardiff",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-21T12:30:00Z",
     "home": "Southampton",
     "away": "Derby County",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-21T12:30:00Z",
     "home": "Millwall",
     "away": "QPR",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-21T12:30:00Z",
     "home": "Man City",
     "away": "Fulham",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-21T13:00:00Z",
     "home": "Alavés",
     "away": "Deportivo",
     "status": "FINISHED",
     "score": "3-1"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-21T14:00:00Z",
     "home": "Lazio",
     "away": "Lecce",
     "status": "FINISHED",
     "score": "3-0"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-21T14:00:00Z",
     "home": "Como 1907",
     "away": "Cagliari",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-21T14:30:00Z",
     "home": "Union Berlin",
     "away": "RB Leipzig",
     "status": "FINISHED",
     "score": "1-5"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-21T14:30:00Z",
     "home": "Frankfurt",
     "away": "Hoffenheim",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-21T14:30:00Z",
     "home": "M'gladbach",
     "away": "Dortmund",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-21T14:30:00Z",
     "home": "Leverkusen",
     "away": "SC Paderborn",
     "status": "FINISHED",
     "score": "4-0"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-21T14:30:00Z",
     "home": "Elversberg",
     "away": "Freiburg",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-21T15:00:00Z",
     "home": "Tottenham",
     "away": "Ipswich Town",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-21T15:00:00Z",
     "home": "Aston Villa",
     "away": "Sunderland",
     "status": "FINISHED",
     "score": "0-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-21T15:00:00Z",
     "home": "Middlesbrough",
     "away": "Bristol City",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-21T15:00:00Z",
     "home": "Lincoln City",
     "away": "Wrexham",
     "status": "IN_PLAY",
     "score": "0-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-21T15:00:00Z",
     "home": "Bolton",
     "away": "Portsmouth",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-21T15:00:00Z",
     "home": "Chelsea",
     "away": "Leeds United",
     "status": "FINISHED",
     "score": "1-4"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-21T15:00:00Z",
     "home": "Sheffield Utd",
     "away": "Watford",
     "status": "FINISHED",
     "score": "4-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-21T15:00:00Z",
     "home": "West Ham",
     "away": "Preston NE",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-21T15:00:00Z",
     "home": "Swansea",
     "away": "West Brom",
     "status": "FINISHED",
     "score": "2-2"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-21T15:00:00Z",
     "home": "Wolverhampton",
     "away": "Charlton",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-21T15:00:00Z",
     "home": "Coventry City",
     "away": "Crystal Palace",
     "status": "FINISHED",
     "score": "3-2"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-21T15:00:00Z",
     "home": "Bournemouth",
     "away": "Nottingham",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-21T15:00:00Z",
     "home": "Stoke",
     "away": "Birmingham",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-21T15:15:00Z",
     "home": "Rayo Vallecano",
     "away": "Valencia",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-21T15:30:00Z",
     "home": "NEC",
     "away": "PSV",
     "status": "FINISHED",
     "score": "1-4"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-21T16:15:00Z",
     "home": "Nice",
     "away": "PSG",
     "status": "FINISHED",
     "score": "2-3"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-21T17:00:00Z",
     "home": "Parma",
     "away": "Roma",
     "status": "FINISHED",
     "score": "1-5"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-21T17:30:00Z",
     "home": "Schalke",
     "away": "Stuttgart",
     "status": "FINISHED",
     "score": "0-0"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-21T17:30:00Z",
     "home": "Newcastle",
     "away": "Arsenal",
     "status": "FINISHED",
     "score": "2-2"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-21T17:30:00Z",
     "home": "Sevilla FC",
     "away": "Real Betis",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-21T17:45:00Z",
     "home": "Utrecht",
     "away": "Cambuur",
     "status": "FINISHED",
     "score": "2-3"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-21T17:45:00Z",
     "home": "Feyenoord",
     "away": "Excelsior",
     "status": "FINISHED",
     "score": "2-3"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-21T19:30:00Z",
     "home": "Palmeiras",
     "away": "Flamengo",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-21T19:45:00Z",
     "home": "Monaco",
     "away": "Auxerre",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-21T19:45:00Z",
     "home": "Lille",
     "away": "Olympique Lyon",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-21T19:45:00Z",
     "home": "Strasbourg",
     "away": "Brest",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-21T19:45:00Z",
     "home": "RC Lens",
     "away": "Toulouse",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-21T19:45:00Z",
     "home": "Napoli",
     "away": "Torino",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-21T20:00:00Z",
     "home": "Groningen",
     "away": "Heerenveen",
     "status": "FINISHED",
     "score": "1-3"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-21T20:00:00Z",
     "home": "Real Madrid",
     "away": "Celta",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-21T20:00:00Z",
     "home": "Telstar",
     "away": "Zwolle",
     "status": "FINISHED",
     "score": "1-3"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-21T20:30:00Z",
     "home": "Bahia",
     "away": "Coritiba",
     "status": "FINISHED",
     "score": "0-1"
    }
   ],
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-22T00:00:00Z",
     "home": "Chapecoense",
     "away": "Cruzeiro",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-22T11:15:00Z",
     "home": "Twente",
     "away": "Willem II",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-22T11:30:00Z",
     "home": "Juventus",
     "away": "Venezia FC",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-22T12:00:00Z",
     "home": "Burnley",
     "away": "Blackburn",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-22T13:00:00Z",
     "home": "Barça",
     "away": "Villarreal",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-22T13:30:00Z",
     "home": "Sparta",
     "away": "AZ",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-22T13:30:00Z",
     "home": "Ajax",
     "away": "Den Haag",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-22T14:00:00Z",
     "home": "Sassuolo",
     "away": "Genoa",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-22T14:00:00Z",
     "home": "Hull City",
     "away": "Brighton Hove",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-22T14:00:00Z",
     "home": "Bologna",
     "away": "Udinese",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-22T14:00:00Z",
     "home": "Paris FC",
     "away": "Angers SCO",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-22T14:30:00Z",
     "home": "Augsburg",
     "away": "Mainz",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-22T15:15:00Z",
     "home": "Santander",
     "away": "Real Sociedad",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-22T15:45:00Z",
     "home": "Go Ahead",
     "away": "Sittard",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-22T16:15:00Z",
     "home": "Lorient",
     "away": "Stade Rennais",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-22T16:30:00Z",
     "home": "Bremen",
     "away": "HSV",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-22T16:30:00Z",
     "home": "Liverpool",
     "away": "Man United",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-22T17:00:00Z",
     "home": "Milan",
     "away": "Frosinone",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-22T17:30:00Z",
     "home": "Osasuna",
     "away": "Málaga",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-22T19:00:00Z",
     "home": "Paranaense",
     "away": "Clube do Remo",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-22T19:45:00Z",
     "home": "Atalanta",
     "away": "Inter",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-22T19:45:00Z",
     "home": "Marseille",
     "away": "Le Mans",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-22T20:00:00Z",
     "home": "Getafe",
     "away": "Atleti",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-22T21:30:00Z",
     "home": "Fluminense",
     "away": "Mirassol",
     "status": "TIMED",
     "score": null
    }
   ],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-22T22:30:00Z",
     "home": "Bragantino",
     "away": "Vasco da Gama",
     "status": "TIMED",
     "score": null
    }
   ]
  },
  "standings_top6_plus_favorites": {
   "Premier League": [
    {
     "pos": 1,
     "team": "Arsenal",
     "played": 11,
     "pts": 28,
     "gd": 10
    },
    {
     "pos": 2,
     "team": "Brighton Hove",
     "played": 10,
     "pts": 22,
     "gd": 19
    },
    {
     "pos": 3,
     "team": "Man City",
     "played": 11,
     "pts": 22,
     "gd": 8
    },
    {
     "pos": 4,
     "team": "Bournemouth",
     "played": 11,
     "pts": 18,
     "gd": 4
    },
    {
     "pos": 5,
     "team": "Liverpool",
     "played": 10,
     "pts": 18,
     "gd": 4
    },
    {
     "pos": 6,
     "team": "Leeds United",
     "played": 11,
     "pts": 17,
     "gd": 5
    }
   ],
   "Primera Division": [
    {
     "pos": 1,
     "team": "Barça",
     "played": 12,
     "pts": 33,
     "gd": 35
    },
    {
     "pos": 2,
     "team": "Real Madrid",
     "played": 13,
     "pts": 33,
     "gd": 22
    },
    {
     "pos": 3,
     "team": "Atleti",
     "played": 12,
     "pts": 28,
     "gd": 13
    },
    {
     "pos": 4,
     "team": "Real Betis",
     "played": 13,
     "pts": 27,
     "gd": 5
    },
    {
     "pos": 5,
     "team": "Real Sociedad",
     "played": 12,
     "pts": 22,
     "gd": 1
    },
    {
     "pos": 6,
     "team": "Sevilla FC",
     "played": 13,
     "pts": 19,
     "gd": -2
    }
   ],
   "Bundesliga": [
    {
     "pos": 1,
     "team": "Dortmund",
     "played": 10,
     "pts": 24,
     "gd": 10
    },
    {
     "pos": 2,
     "team": "Bayern",
     "played": 10,
     "pts": 22,
     "gd": 20
    },
    {
     "pos": 3,
     "team": "Freiburg",
     "played": 10,
     "pts": 22,
     "gd": 11
    },
    {
     "pos": 4,
     "team": "RB Leipzig",
     "played": 10,
     "pts": 21,
     "gd": 18
    },
    {
     "pos": 5,
     "team": "Leverkusen",
     "played": 10,
     "pts": 19,
     "gd": 7
    },
    {
     "pos": 6,
     "team": "Bremen",
     "played": 9,
     "pts": 15,
     "gd": 2
    }
   ],
   "Serie A": [
    {
     "pos": 1,
     "team": "Lazio",
     "played": 12,
     "pts": 32,
     "gd": 19
    },
    {
     "pos": 2,
     "team": "Roma",
     "played": 12,
     "pts": 30,
     "gd": 25
    },
    {
     "pos": 3,
     "team": "Inter",
     "played": 11,
     "pts": 28,
     "gd": 15
    },
    {
     "pos": 4,
     "team": "Como 1907",
     "played": 12,
     "pts": 26,
     "gd": 10
    },
    {
     "pos": 5,
     "team": "Milan",
     "played": 11,
     "pts": 24,
     "gd": 10
    },
    {
     "pos": 6,
     "team": "Frosinone",
     "played": 11,
     "pts": 20,
     "gd": 9
    }
   ],
   "Ligue 1": [
    {
     "pos": 1,
     "team": "PSG",
     "played": 11,
     "pts": 26,
     "gd": 13
    },
    {
     "pos": 2,
     "team": "Lille",
     "played": 11,
     "pts": 21,
     "gd": 6
    },
    {
     "pos": 3,
     "team": "Paris FC",
     "played": 10,
     "pts": 20,
     "gd": 7
    },
    {
     "pos": 4,
     "team": "Olympique Lyon",
     "played": 11,
     "pts": 20,
     "gd": 7
    },
    {
     "pos": 5,
     "team": "Marseille",
     "played": 10,
     "pts": 18,
     "gd": 8
    },
    {
     "pos": 6,
     "team": "Brest",
     "played": 11,
     "pts": 18,
     "gd": 7
    }
   ]
  },
  "favorite_teams": {
   "arsenal": {
    "recent": [
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-11-21T17:30:00Z",
      "home": "Newcastle",
      "away": "Arsenal",
      "status": "FINISHED",
      "score": "2-2"
     }
    ],
    "upcoming": [
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-11-24T20:00:00Z",
      "home": "Arsenal",
      "away": "Dortmund",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-11-29T16:30:00Z",
      "home": "Arsenal",
      "away": "Man City",
      "status": "TIMED",
      "score": null
     }
    ]
   },
   "barcelona": {
    "recent": [
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-11-08T20:00:00Z",
      "home": "Atleti",
      "away": "Barça",
      "status": "FINISHED",
      "score": "1-2"
     }
    ],
    "upcoming": [
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-11-22T13:00:00Z",
      "home": "Barça",
      "away": "Villarreal",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-11-25T17:45:00Z",
      "home": "Sabah FK",
      "away": "Barça",
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
    "home": "Philadelphia 76ers",
    "away": "Milwaukee Bucks",
    "score": "132-129",
    "status": "Final"
   },
   {
    "home": "New York Knicks",
    "away": "Portland Trail Blazers",
    "score": "97-96",
    "status": "Final"
   },
   {
    "home": "Dallas Mavericks",
    "away": "LA Clippers",
    "score": "110-100",
    "status": "Final"
   },
   {
    "home": "Minnesota Timberwolves",
    "away": "Memphis Grizzlies",
    "score": "104-95",
    "status": "Final"
   },
   {
    "home": "San Antonio Spurs",
    "away": "New Orleans Pelicans",
    "score": "114-91",
    "status": "Final"
   },
   {
    "home": "Sacramento Kings",
    "away": "Boston Celtics",
    "score": "97-96",
    "status": "Final"
   }
  ],
  "games_today": [
   {
    "home": "Atlanta Hawks",
    "away": "Detroit Pistons",
    "score": null,
    "status": "2026-11-22T20:30:00Z"
   },
   {
    "home": "Miami Heat",
    "away": "Oklahoma City Thunder",
    "score": null,
    "status": "2026-11-22T23:00:00Z"
   },
   {
    "home": "Washington Wizards",
    "away": "Orlando Magic",
    "score": null,
    "status": "2026-11-23T00:00:00Z"
   },
   {
    "home": "Chicago Bulls",
    "away": "Denver Nuggets",
    "score": null,
    "status": "2026-11-23T00:00:00Z"
   },
   {
    "home": "Utah Jazz",
    "away": "Dallas Mavericks",
    "score": null,
    "status": "2026-11-23T00:00:00Z"
   },
   {
    "home": "New York Knicks",
    "away": "Indiana Pacers",
    "score": null,
    "status": "2026-11-23T01:00:00Z"
   },
   {
    "home": "Golden State Warriors",
    "away": "Boston Celtics",
    "score": null,
    "status": "2026-11-23T01:30:00Z"
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
     "kickoff_utc": "2026-11-21T23:00:00",
     "home": "Inter Miami",
     "away": "Columbus Crew",
     "score": "0-3"
    }
   ],
   "upcoming": [
    {
     "competition": "American Major League Soccer",
     "kickoff_utc": "2026-11-28T01:00:00",
     "home": "Columbus Crew",
     "away": "Inter Miami",
     "score": null
    }
   ]
  },
  "israel_national_team": {
   "recent": [
    {
     "competition": "UEFA Nations League",
     "kickoff_utc": "2026-11-17T19:45:00",
     "home": "Israel",
     "away": "Austria",
     "score": "1-1"
    }
   ],
   "upcoming": []
  }
 },
 "news_feeds": [
  {
   "outlet": "BBC Sport — Football",
   "lang": "en",
   "items": [
    {
     "ref": "bbc_football#0",
     "title": "Armstrong plays down talk of Rangers transfer - gossip",
     "published": "2026-11-22T09:10:02+00:00",
     "summary": "Dinamo Bucharest winger Danny Armstrong says he has not talked with Rangers manager Derek McInnes about a move to Ibrox, while the chances of Jack Grealish joining Celtic are played down."
    },
    {
     "ref": "bbc_football#1",
     "title": "'Not the right time' - Fernandes pauses Man Utd contract talks",
     "published": "2026-11-22T08:41:20+00:00",
     "summary": "Manchester United captain Bruno Fernandes says he has been offered a new contract by the club but feels it \"is not the right time\" for discussions about his future."
    },
    {
     "ref": "bbc_football#2",
     "title": "Scottish Football Podcast",
     "published": "2026-11-22T08:00:00+00:00",
     "summary": "Scotland head coach Mel Andreatta on Scotland, Sweden and chasing her World Cup dream."
    },
    {
     "ref": "bbc_football#3",
     "title": "Who am I? Guess WSL star No 13",
     "published": "2026-11-22T07:19:58+00:00",
     "summary": "Work out the identity of today's player in as few attempts as possible."
    },
    {
     "ref": "bbc_football#4",
     "title": "Why Arsenal are behind in race for Champions League spots",
     "published": "2026-11-22T07:17:10+00:00",
     "summary": "Arsenal were open about their aim to win the WSL this season but they find themselves well adrift - where have things gone wrong?"
    },
    {
     "ref": "bbc_football#5",
     "title": "Why Arsenal are behind in race for Champions League spots",
     "published": "2026-11-22T07:17:10+00:00",
     "summary": "Arsenal were open about their aim to win the WSL this season but they find themselves well adrift - where have things gone wrong?"
    },
    {
     "ref": "bbc_football#6",
     "title": "Argentina midfielder Paredes collapses during TV interview",
     "published": "2026-11-22T07:13:34+00:00",
     "summary": "World Cup winning midfielder Leandro Paredes collapses while giving a post-match interview minutes after winning a trophy with Boca Juniors."
    },
    {
     "ref": "bbc_football#7",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-11-22T07:12:55+00:00",
     "summary": "Test your football knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#8",
     "title": "'He will see what Man Utd are made of' - Pulis on Pochettino's first game",
     "published": "2026-11-22T06:21:55+00:00",
     "summary": "BBC Sport columnist Tony Pulis explains how new Manchester United boss Mauricio Pochettino will prepare for Sunday's game against Liverpool after only a few days with his squad."
    },
    {
     "ref": "bbc_football#9",
     "title": "Wales boss Wilkinson rules out Fishlock return",
     "published": "2026-11-22T05:12:04+00:00",
     "summary": "Rhian Wilkinson has not considered asking Jess Fishlock to come out of retirement for the Women's World Cup play-off final against Norway."
    },
    {
     "ref": "bbc_football#10",
     "title": "'Unbelievable' - how Spurs teenager Williams-Barnett impressed on first start",
     "published": "2026-11-22T00:13:01+00:00",
     "summary": "Match of the Day pundit Joe Hart explains how teenager Luca Williams-Barnett caused problems for Ipswich Town on his first Premier League start for Tottenham in their 2-0 home win."
    },
    {
     "ref": "bbc_football#11",
     "title": "I wish referee had opportunity to see 'handball' again - Hart",
     "published": "2026-11-22T00:08:13+00:00",
     "summary": "Match of the Day pundits Joe Hart and Alan Shearer disagree with Morgan Rogers being penalised for handball, as the Chelsea forward \"didn't make himself bigger\" with the use of his arms in his side's 4-1 defeat to Leeds United in the Premier League."
    },
    {
     "ref": "bbc_football#12",
     "title": "Naderi's 'lucky punch' keeps Rangers in touch",
     "published": "2026-11-22T00:01:31+00:00",
     "summary": "On a Saturday laden with Scottish Premiership goals, Ryan Naderi's was far from the most impressive - but vital for Rangers all the same."
    },
    {
     "ref": "bbc_football#13",
     "title": "London City keep up title hunt with emphatic win over Crystal Palace",
     "published": "2026-11-21T23:14:10+00:00",
     "summary": "London City Lionesses stay in the hunt for the Women's Super League title, with a statement second-half performance to give them a 6-2 win over Crystal Palace."
    },
    {
     "ref": "bbc_football#14",
     "title": "'They looked like a team again' - Hearts roar back with Dundee demolition",
     "published": "2026-11-21T22:45:05+00:00",
     "summary": "After a worrying week before the international break, Hearts respond is style by thrashing Dundee 8-0 at Dens Park."
    },
    {
     "ref": "bbc_football#15",
     "title": "Raya set to have scan on injury - how much would Arsenal miss him?",
     "published": "2026-11-21T21:14:08+00:00",
     "summary": "Arsenal goalkeeper David Raya is set to have a scan on his shoulder after going off injured during Saturday's 2-2 draw with Newcastle."
    },
    {
     "ref": "bbc_football#16",
     "title": "Hirst key for Stoke, injuries derail Millwall - Sam Parkin's EFL takeaways",
     "published": "2026-11-21T20:36:43+00:00",
     "summary": "After the last international break of the year, Final score pundit and former Swindon Town, Luton Town and Northampton Town striker selects his takeaways from the Championship, League One and League Two."
    },
    {
     "ref": "bbc_football#17",
     "title": "AC Milan monitoring Man Utd's Fernandes - Sunday's gossip",
     "published": "2026-11-21T20:35:12+00:00",
     "summary": "AC Milan monitoring Manchester United midfielder Bruno Fernandes, Arsenal pair yet to start talks on new deals and Trabzonspor renew interest in Tottenham forward Richarlison, plus more."
    },
    {
     "ref": "bbc_football#18",
     "title": "'We lost two points' - Arteta on 'unacceptable' Newcastle draw",
     "published": "2026-11-21T20:30:50+00:00",
     "summary": "Arsenal manager Mikel Arteta says his side squandered the chance to take all three points after their 2-2 draw against Newcastle United at St James' Park. The result sees the reigning Premier League champions go six points clear at the top of the table."
    },
    {
     "ref": "bbc_football#19",
     "title": "Nine wins in a row - Bournemouth & Evanilson continue to make history",
     "published": "2026-11-21T20:07:56+00:00",
     "summary": "With a ninth successive win, Bournemouth continue to make history under new manager Marco Rose."
    },
    {
     "ref": "bbc_football#20",
     "title": "Arsenal go six points clear after lively draw at Newcastle",
     "published": "2026-11-21T19:59:35+00:00",
     "summary": "Noni Madueke's second-half goal earns Arsenal a 2-2 draw against Newcastle United at St James' Park, as the reigning champions move six points clear at the top of the Premier League table."
    },
    {
     "ref": "bbc_football#21",
     "title": "Evanilson strikes again as Bournemouth beat Forest",
     "published": "2026-11-21T19:59:17+00:00",
     "summary": "Evanilson scores in his sixth consecutive Premier League game, as Bournemouth defeat Nottingham Forest 2-0 at the Vitality Stadium."
    },
    {
     "ref": "bbc_football#22",
     "title": "Leeds dominate Chelsea for first Stamford Bridge win since 1999",
     "published": "2026-11-21T19:59:13+00:00",
     "summary": "Noah Okafor scores twice to deliver Leeds United's first win at Chelsea in 27 years, in an impressive 4-1 victory at Stamford Bridge. They move up to sixth in the Premier League."
    },
    {
     "ref": "bbc_football#23",
     "title": "Man City drop points to Fulham despite superb Anderson volley",
     "published": "2026-11-21T19:59:08+00:00",
     "summary": "Elliot Anderson's fantastic volley earns Manchester City a first Premier League point in over a month as they come from behind to hold Fulham."
    },
    {
     "ref": "bbc_football#24",
     "title": "Teenager Williams-Barnett shines as Spurs beat Ipswich",
     "published": "2026-11-21T19:59:02+00:00",
     "summary": "Tottenham Hotspur teenager Luca Williams-Barnett starres for Roberto de Zerbi's side as they comfortably beat Ipswich Town."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Messi, what are you doing? Inter Miami lose in the playoffs as he hits an opponent with the ball, is booked and now faces elimination by Columbus Crew - LiveScore",
     "published": "2026-11-22T09:48:38+00:00",
     "summary": "Messi, what are you doing? Inter Miami lose in the playoffs as he hits an opponent with the ball, is booked and now faces elimination by Columbus Crew LiveScore"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Lionel Messi and Inter Miami humiliated as Columbus Crew cruise to dominant Game 1 playoff victory - Goal.com",
     "published": "2026-11-22T09:12:10+00:00",
     "summary": "Lionel Messi and Inter Miami humiliated as Columbus Crew cruise to dominant Game 1 playoff victory Goal.com"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "A dark night for Messi.. Inter Miami loses 3-0 to Columbus Crew (video) - صوت الإمارات",
     "published": "2026-11-22T09:01:43+00:00",
     "summary": "A dark night for Messi.. Inter Miami loses 3-0 to Columbus Crew (video) صوت الإمارات"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Inter Miami coach on Messi's yellow card: We can't blame everything on the referee - AllFootball",
     "published": "2026-11-22T08:18:53+00:00",
     "summary": "Inter Miami coach on Messi's yellow card: We can't blame everything on the referee AllFootball"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Messi’s Inter Miami Lose 3-0 to Columbus in MLS Playoffs - Nigerian Bulletin",
     "published": "2026-11-22T08:11:29+00:00",
     "summary": "Messi’s Inter Miami Lose 3-0 to Columbus in MLS Playoffs Nigerian Bulletin"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Inter Miami CF To Win MLS Eastern Conference Odds Drift To +1567 - Oddschecker",
     "published": "2026-11-22T07:56:41+00:00",
     "summary": "Inter Miami CF To Win MLS Eastern Conference Odds Drift To +1567 Oddschecker"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Miami falls to Columbus in MLS Cup, should Messi have been sent off for throw-in incident? - The New York Times",
     "published": "2026-11-22T07:45:59+00:00",
     "summary": "Miami falls to Columbus in MLS Cup, should Messi have been sent off for throw-in incident? The New York Times"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Lionel Messi escapes red card as Inter Miami are humbled by Columbus Crew in MLS playoffs - www.thenationalnews.com",
     "published": "2026-11-22T07:23:45+00:00",
     "summary": "Lionel Messi escapes red card as Inter Miami are humbled by Columbus Crew in MLS playoffs www.thenationalnews.com"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Columbus Crew vs Inter Miami: Kalshi Promo Code & $55 Bonus - Squawka",
     "published": "2026-11-22T07:13:15+00:00",
     "summary": "Columbus Crew vs Inter Miami: Kalshi Promo Code & $55 Bonus Squawka"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Inter Miami vs Columbus Crew: Major League Soccer stats & head-to-head - BBC",
     "published": "2026-11-22T07:10:21+00:00",
     "summary": "Inter Miami vs Columbus Crew: Major League Soccer stats & head-to-head BBC"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Inter Miami CF 0 - 3 Columbus Crew: Final score, results, recap, box score, stats - Yahoo Sports",
     "published": "2026-11-22T06:54:50+00:00",
     "summary": "Inter Miami CF 0 - 3 Columbus Crew: Final score, results, recap, box score, stats Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Black night for Inter Miami! Messi’s team is thrashed 3-0 at home by Columbus Crew and is now on the ropes in the Playoffs - Tribuna.com",
     "published": "2026-11-22T06:11:25+00:00",
     "summary": "Black night for Inter Miami! Messi’s team is thrashed 3-0 at home by Columbus Crew and is now on the ropes in the Playoffs Tribuna.com"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Columbus stun Messi’s Inter 3-0 in playoff opener - Jamaica Gleaner",
     "published": "2026-11-22T06:11:24+00:00",
     "summary": "Columbus stun Messi’s Inter 3-0 in playoff opener Jamaica Gleaner"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "WATCH: Lionel Messi throws ball at opponent’s face during Inter Miami vs Columbus Crew clash, escapes red card - Sports Tiger",
     "published": "2026-11-22T06:09:42+00:00",
     "summary": "WATCH: Lionel Messi throws ball at opponent’s face during Inter Miami vs Columbus Crew clash, escapes red card Sports Tiger"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Messi's Inter Miami suffer 3-0 humbling against Columbus in MLS playoff opener - Big News Network.com",
     "published": "2026-11-22T05:00:00+00:00",
     "summary": "Messi's Inter Miami suffer 3-0 humbling against Columbus in MLS playoff opener Big News Network.com"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Inter Miami suffer 3-0 playoff defeat to Columbus Crew - Daily Observer",
     "published": "2026-11-22T04:51:00+00:00",
     "summary": "Inter Miami suffer 3-0 playoff defeat to Columbus Crew Daily Observer"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Lionel Messi Faces Backlash After Controversial Incident in Inter Miami Loss - Yahoo Sports",
     "published": "2026-11-22T04:46:00+00:00",
     "summary": "Lionel Messi Faces Backlash After Controversial Incident in Inter Miami Loss Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Inter Miami CF vs. Columbus Crew SC - Game Highlights - ESPN",
     "published": "2026-11-22T04:41:33+00:00",
     "summary": "Inter Miami CF vs. Columbus Crew SC - Game Highlights ESPN"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Columbus Crew defeat Inter Miami 3-0 in MLS playoff opener - The News Mill",
     "published": "2026-11-22T04:40:47+00:00",
     "summary": "Columbus Crew defeat Inter Miami 3-0 in MLS playoff opener The News Mill"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Columbus coach says Messi should've got red card in Miami loss: 'Everyone knows' - ESPN",
     "published": "2026-11-22T04:39:00+00:00",
     "summary": "Columbus coach says Messi should've got red card in Miami loss: 'Everyone knows' ESPN"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Inter Miami suffers a heavy defeat and finds itself on the ropes in the MLS playoffs - CiberCuba",
     "published": "2026-11-22T04:34:18+00:00",
     "summary": "Inter Miami suffers a heavy defeat and finds itself on the ropes in the MLS playoffs CiberCuba"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Highlights: Inter Miami CF 0-3 Columbus Crew (MLS) - Yahoo Sports",
     "published": "2026-11-22T04:33:49+00:00",
     "summary": "Highlights: Inter Miami CF 0-3 Columbus Crew (MLS) Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Furore over Lionel Messi after Columbus thrash Inter Miami in MLS Cup: He deserved more than a yellow card | Football News - Hindustan Times",
     "published": "2026-11-22T04:32:55+00:00",
     "summary": "Furore over Lionel Messi after Columbus thrash Inter Miami in MLS Cup: He deserved more than a yellow card | Football News Hindustan Times"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "MLS: Inter Miami 0, Crew 3 - TSN",
     "published": "2026-11-22T04:32:00+00:00",
     "summary": "MLS: Inter Miami 0, Crew 3 TSN"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Are Inter Miami Eliminated After Their MLS Playoff Loss to Columbus Crew? Everything You Need to Know - Yahoo Sports",
     "published": "2026-11-22T04:26:37+00:00",
     "summary": "Are Inter Miami Eliminated After Their MLS Playoff Loss to Columbus Crew? Everything You Need to Know Yahoo Sports"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Deni Avdija Postgame Interview | Portland Trail Blazers 96, New York Knicks 97 | Nov. 21, 2026 - NBA.com",
     "published": "2026-11-22T06:06:38+00:00",
     "summary": "Deni Avdija Postgame Interview | Portland Trail Blazers 96, New York Knicks 97 | Nov. 21, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Trail Blazers' Deni Avdija: Scores 20 points with five dimes - CBS Sports",
     "published": "2026-11-22T03:57:48+00:00",
     "summary": "Trail Blazers' Deni Avdija: Scores 20 points with five dimes CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija News: Scores 20 points with five dimes - RotoWire",
     "published": "2026-11-22T03:57:48+00:00",
     "summary": "Deni Avdija News: Scores 20 points with five dimes RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija finishes through contact, 11/21/2026 - Yahoo Sports",
     "published": "2026-11-22T03:04:18+00:00",
     "summary": "Deni Avdija finishes through contact, 11/21/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Are Karl-Anthony Towns, Deni Avdija playing tonight? Blazers vs. Knicks injury report - ClutchPoints",
     "published": "2026-11-22T01:22:34+00:00",
     "summary": "Are Karl-Anthony Towns, Deni Avdija playing tonight? Blazers vs. Knicks injury report ClutchPoints"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija with the and-1 bucket - ESPN",
     "published": "2026-11-22T01:17:59+00:00",
     "summary": "Deni Avdija with the and-1 bucket ESPN"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Deni Avdija with the and-1 bucket - ESPN",
     "published": "2026-11-22T01:17:59+00:00",
     "summary": "Deni Avdija with the and-1 bucket ESPN"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija questionable as Knicks Vs Trail Blazers matchup arrives at Madison Square Garden - شبكة تواصل الإخبارية",
     "published": "2026-11-22T00:15:48+00:00",
     "summary": "Deni Avdija questionable as Knicks Vs Trail Blazers matchup arrives at Madison Square Garden شبكة تواصل الإخبارية"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Watch | Knicks head coach praises Deni Avdija: You're not going to stop him - Israel National News",
     "published": "2026-11-22T00:06:20+00:00",
     "summary": "Watch | Knicks head coach praises Deni Avdija: You're not going to stop him Israel National News"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Deni Avdija (foot) back in lineup Saturday - FantasyPros",
     "published": "2026-11-21T22:37:53+00:00",
     "summary": "Deni Avdija (foot) back in lineup Saturday FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Trail Blazers' Deni Avdija: Returning Saturday - CBS Sports",
     "published": "2026-11-21T22:23:53+00:00",
     "summary": "Trail Blazers' Deni Avdija: Returning Saturday CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija News: Returning Saturday - RotoWire",
     "published": "2026-11-21T22:23:53+00:00",
     "summary": "Deni Avdija News: Returning Saturday RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija cleared to return after missing last two games - Yahoo Sports",
     "published": "2026-11-21T22:20:59+00:00",
     "summary": "Deni Avdija cleared to return after missing last two games Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Deni Avdija cleared to return after missing last two games - HoopsHype",
     "published": "2026-11-21T22:20:00+00:00",
     "summary": "Deni Avdija cleared to return after missing last two games HoopsHype"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Final Injury Report for Trail Blazers-Knicks: Will Karl-Anthony Towns, Deni Avdija Play? - AOL.com",
     "published": "2026-11-21T20:30:00+00:00",
     "summary": "Final Injury Report for Trail Blazers-Knicks: Will Karl-Anthony Towns, Deni Avdija Play? AOL.com"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija Fantasy Outlook & Stats - FantasySP",
     "published": "2026-11-21T18:44:44+00:00",
     "summary": "Deni Avdija Fantasy Outlook & Stats FantasySP"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Knicks vs Trail Blazers Injury Report: OG Anunoby, Deni Avdija Statuses Revealed - Yahoo Sports",
     "published": "2026-11-21T17:54:28+00:00",
     "summary": "Knicks vs Trail Blazers Injury Report: OG Anunoby, Deni Avdija Statuses Revealed Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Trail Blazers Announce Deni Avdija’s Injury Status for Knicks Game - Yahoo Sports",
     "published": "2026-11-21T04:14:00+00:00",
     "summary": "Trail Blazers Announce Deni Avdija’s Injury Status for Knicks Game Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Trail Blazers Announce Deni Avdija’s Injury Status for Knicks Game - Heavy.com",
     "published": "2026-11-21T01:14:00+00:00",
     "summary": "Trail Blazers Announce Deni Avdija’s Injury Status for Knicks Game Heavy.com"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Avdija Questionable to Play vs Knicks - Blazer's Edge",
     "published": "2026-11-21T00:10:00+00:00",
     "summary": "Avdija Questionable to Play vs Knicks Blazer's Edge"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Deni Avdija (foot) questionable vs. New York - NBC Sports",
     "published": "2026-11-20T22:15:00+00:00",
     "summary": "Deni Avdija (foot) questionable vs. New York NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Trail Blazers' Deni Avdija: Iffy for Saturday - CBS Sports",
     "published": "2026-11-20T22:08:31+00:00",
     "summary": "Trail Blazers' Deni Avdija: Iffy for Saturday CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Deni Avdija Injury: Iffy for Saturday - RotoWire",
     "published": "2026-11-20T22:08:31+00:00",
     "summary": "Deni Avdija Injury: Iffy for Saturday RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Deni Avdija (foot) upgraded to available Saturday - NBC Sports",
     "published": "2026-11-20T08:00:00+00:00",
     "summary": "Deni Avdija (foot) upgraded to available Saturday NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Deni Avdija, Latkes, and a Menorah: Portland’s Latest Zionist Complicity Crises - The Times of Israel",
     "published": "2026-11-20T04:26:00+00:00",
     "summary": "Deni Avdija, Latkes, and a Menorah: Portland’s Latest Zionist Complicity Crises The Times of Israel"
    }
   ]
  }
 ]
}
</input>