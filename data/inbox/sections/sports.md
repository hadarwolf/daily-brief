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
  "away": "Real Madrid",
  "kickoff_utc": "2026-10-25T20:00:00Z"
 },
 {
  "sport": "nba",
  "competition": "NBA",
  "home": "Brooklyn Nets",
  "away": "Indiana Pacers",
  "kickoff_utc": "2026-10-25T22:00:00.000Z"
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
     "kickoff_utc": "2026-10-24T11:30:00Z",
     "home": "Portsmouth",
     "away": "Millwall",
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
     "competition": "Premier League",
     "kickoff_utc": "2026-10-24T11:30:00Z",
     "home": "Aston Villa",
     "away": "Man City",
     "status": "IN_PLAY",
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
     "status": "IN_PLAY",
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
     "home": "RB Leipzig",
     "away": "Elversberg",
     "status": "IN_PLAY",
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
     "home": "1. FC Köln",
     "away": "Schalke",
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
     "home": "SC Paderborn",
     "away": "HSV",
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
     "home": "West Ham",
     "away": "Southampton",
     "status": "TIMED",
     "score": "0-1"
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
     "competition": "Championship",
     "kickoff_utc": "2026-10-24T14:00:00Z",
     "home": "Lincoln City",
     "away": "Burnley",
     "status": "IN_PLAY",
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
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-24T14:30:00Z",
     "home": "Utrecht",
     "away": "Zwolle",
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
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-24T16:30:00Z",
     "home": "Dortmund",
     "away": "Frankfurt",
     "status": "IN_PLAY",
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
     "status": "IN_PLAY",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-24T18:45:00Z",
     "home": "RC Lens",
     "away": "Paris FC",
     "status": "IN_PLAY",
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
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-24T19:00:00Z",
     "home": "Den Haag",
     "away": "Heerenveen",
     "status": "IN_PLAY",
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
     "home": "Mirassol",
     "away": "São Paulo",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-24T19:30:00Z",
     "home": "Gil Vicente",
     "away": "Porto",
     "status": "IN_PLAY",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-24T19:30:00Z",
     "home": "Internacional",
     "away": "Botafogo",
     "status": "TIMED",
     "score": null
    }
   ],
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-24T21:30:00Z",
     "home": "Palmeiras",
     "away": "Bragantino",
     "status": "IN_PLAY",
     "score": null
    },
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
     "kickoff_utc": "2026-10-24T22:30:00Z",
     "home": "Chapecoense",
     "away": "Fluminense",
     "status": "IN_PLAY",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-25T01:00:00Z",
     "home": "Santos",
     "away": "Bahia",
     "status": "IN_PLAY",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-25T11:15:00Z",
     "home": "Sittard",
     "away": "Excelsior",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-25T11:30:00Z",
     "home": "Inter",
     "away": "Fiorentina",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-25T13:00:00Z",
     "home": "Athletic",
     "away": "Getafe",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-25T13:30:00Z",
     "home": "NEC",
     "away": "Groningen",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-25T13:30:00Z",
     "home": "PSV",
     "away": "Feyenoord",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-25T14:00:00Z",
     "home": "Crystal Palace",
     "away": "Newcastle",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-25T14:00:00Z",
     "home": "Genoa",
     "away": "Venezia FC",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-25T14:00:00Z",
     "home": "Hull City",
     "away": "Brentford",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-25T14:00:00Z",
     "home": "Man United",
     "away": "Bournemouth",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-25T14:00:00Z",
     "home": "Monaco",
     "away": "Lille",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-25T14:00:00Z",
     "home": "Atalanta",
     "away": "Frosinone",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-25T14:00:00Z",
     "home": "Liverpool",
     "away": "Brighton Hove",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-25T14:30:00Z",
     "home": "Hoffenheim",
     "away": "Leverkusen",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-25T15:15:00Z",
     "home": "Celta",
     "away": "Real Betis",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-25T15:30:00Z",
     "home": "Estoril Praia",
     "away": "Moreirense",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-25T15:45:00Z",
     "home": "Sparta",
     "away": "Ajax",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-25T16:15:00Z",
     "home": "Toulouse",
     "away": "Troyes",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-25T16:15:00Z",
     "home": "Stade Rennais",
     "away": "Strasbourg",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-25T16:15:00Z",
     "home": "Angers SCO",
     "away": "Lorient",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-25T16:15:00Z",
     "home": "Marseille",
     "away": "Le Havre",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-25T16:15:00Z",
     "home": "Auxerre",
     "away": "Le Mans",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-25T16:30:00Z",
     "home": "Sunderland",
     "away": "Leeds United",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-25T16:30:00Z",
     "home": "Freiburg",
     "away": "Bayern",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-25T17:00:00Z",
     "home": "Lecce",
     "away": "Juventus",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-25T17:30:00Z",
     "home": "Real Sociedad",
     "away": "Levante",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-25T18:00:00Z",
     "home": "CD Nacional",
     "away": "Braga",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-25T18:00:00Z",
     "home": "Rio Ave",
     "away": "Famalicão",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-25T19:00:00Z",
     "home": "AZ",
     "away": "Twente",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-25T19:45:00Z",
     "home": "Udinese",
     "away": "Milan",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-25T20:00:00Z",
     "home": "Barça",
     "away": "Real Madrid",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-25T20:30:00Z",
     "home": "Sporting CP",
     "away": "Acad. Viseu",
     "status": "TIMED",
     "score": null
    }
   ],
   "tomorrow": []
  },
  "standings_top6_plus_favorites": {
   "Premier League": [
    {
     "pos": 1,
     "team": "Man City",
     "played": 8,
     "pts": 21,
     "gd": 11
    },
    {
     "pos": 2,
     "team": "Arsenal",
     "played": 8,
     "pts": 21,
     "gd": 8
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
     "played": 8,
     "pts": 13,
     "gd": 2
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
     "team": "Aston Villa",
     "played": 8,
     "pts": 11,
     "gd": -3
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
     "played": 10,
     "pts": 25,
     "gd": 12
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
     "team": "Dortmund",
     "played": 7,
     "pts": 17,
     "gd": 8
    },
    {
     "pos": 2,
     "team": "Bayern",
     "played": 6,
     "pts": 14,
     "gd": 17
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
     "team": "RB Leipzig",
     "played": 7,
     "pts": 12,
     "gd": 9
    },
    {
     "pos": 6,
     "team": "Bremen",
     "played": 7,
     "pts": 12,
     "gd": 1
    }
   ],
   "Serie A": [
    {
     "pos": 1,
     "team": "Lazio",
     "played": 8,
     "pts": 22,
     "gd": 11
    },
    {
     "pos": 2,
     "team": "Inter",
     "played": 7,
     "pts": 19,
     "gd": 12
    },
    {
     "pos": 3,
     "team": "Roma",
     "played": 8,
     "pts": 18,
     "gd": 13
    },
    {
     "pos": 4,
     "team": "Como 1907",
     "played": 8,
     "pts": 17,
     "gd": 7
    },
    {
     "pos": 5,
     "team": "Milan",
     "played": 7,
     "pts": 15,
     "gd": 7
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
     "team": "Lille",
     "played": 7,
     "pts": 14,
     "gd": 5
    },
    {
     "pos": 4,
     "team": "Paris FC",
     "played": 8,
     "pts": 14,
     "gd": 4
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
     "team": "RC Lens",
     "played": 8,
     "pts": 13,
     "gd": 4
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
    "home": "Charlotte Hornets",
    "away": "Miami Heat",
    "score": "115-110",
    "status": "Final"
   },
   {
    "home": "Cleveland Cavaliers",
    "away": "Brooklyn Nets",
    "score": "125-121",
    "status": "Final"
   },
   {
    "home": "Philadelphia 76ers",
    "away": "Milwaukee Bucks",
    "score": "127-116",
    "status": "Final"
   },
   {
    "home": "Atlanta Hawks",
    "away": "Houston Rockets",
    "score": "114-121",
    "status": "Final"
   },
   {
    "home": "Chicago Bulls",
    "away": "Washington Wizards",
    "score": "120-124",
    "status": "Final"
   },
   {
    "home": "Dallas Mavericks",
    "away": "San Antonio Spurs",
    "score": "106-122",
    "status": "Final"
   },
   {
    "home": "Denver Nuggets",
    "away": "New Orleans Pelicans",
    "score": "141-135",
    "status": "Final"
   },
   {
    "home": "Phoenix Suns",
    "away": "Golden State Warriors",
    "score": "131-122",
    "status": "Final"
   }
  ],
  "games_today": [
   {
    "home": "Utah Jazz",
    "away": "Los Angeles Lakers",
    "score": null,
    "status": "2026-10-25T21:00:00Z"
   },
   {
    "home": "Brooklyn Nets",
    "away": "Indiana Pacers",
    "score": null,
    "status": "2026-10-25T22:00:00Z"
   },
   {
    "home": "New York Knicks",
    "away": "Orlando Magic",
    "score": null,
    "status": "2026-10-25T23:00:00Z"
   },
   {
    "home": "Minnesota Timberwolves",
    "away": "Toronto Raptors",
    "score": null,
    "status": "2026-10-25T23:00:00Z"
   },
   {
    "home": "Oklahoma City Thunder",
    "away": "LA Clippers",
    "score": null,
    "status": "2026-10-25T23:00:00Z"
   },
   {
    "home": "Philadelphia 76ers",
    "away": "Detroit Pistons",
    "score": null,
    "status": "2026-10-25T23:30:00Z"
   },
   {
    "home": "Sacramento Kings",
    "away": "Memphis Grizzlies",
    "score": null,
    "status": "2026-10-26T01:00:00Z"
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
     "kickoff_utc": "2026-10-28T23:30:00",
     "home": "Inter Miami",
     "away": "FC Cincinnati",
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
     "title": "What have Man Utd changed to turn around WSL form?",
     "published": "2026-10-25T07:58:04+00:00",
     "summary": "It's a different picture at Manchester United now than it was last month - so what have they changed to turn around their WSL form?"
    },
    {
     "ref": "bbc_football#1",
     "title": "What have Man Utd changed to turn around WSL form?",
     "published": "2026-10-25T07:58:04+00:00",
     "summary": "It's a different picture at Manchester United now than it was last month - so what have they changed to turn around their WSL form?"
    },
    {
     "ref": "bbc_football#2",
     "title": "'This is the only Clasico' - Mourinho's Real trying to stop Barca's shot at history",
     "published": "2026-10-25T07:55:05+00:00",
     "summary": "Barcelona aim to make La Liga history against Real Madrid, with Jose Mourinho looking to end their winning run."
    },
    {
     "ref": "bbc_football#3",
     "title": "Who am I? Guess WSL star No 9",
     "published": "2026-10-25T07:24:39+00:00",
     "summary": "Work out the identity of today's player in as few attempts as possible."
    },
    {
     "ref": "bbc_football#4",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-10-25T07:21:42+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#5",
     "title": "What Man Utd need now is stability, not more changes - Pulis",
     "published": "2026-10-25T06:34:07+00:00",
     "summary": "BBC Sport columnist Tony Pulis explains why Bruno Fernandes' comments after Manchester United's defeat by Como showed how hard it must be to run the club at the moment."
    },
    {
     "ref": "bbc_football#6",
     "title": "Why are Liverpool struggling for Premier League goals?",
     "published": "2026-10-25T06:26:00+00:00",
     "summary": "Liverpool have scored 15 goals in four cup games this season, but have managed only nine goals in seven Premier League matches."
    },
    {
     "ref": "bbc_football#7",
     "title": "When is Premier League 'sacking season' - and who should be worried?",
     "published": "2026-10-25T06:17:46+00:00",
     "summary": "As pressure builds on Manchester United manager Michael Carrick, BBC Sport looks at when the Premier League 'sacking season' begins."
    },
    {
     "ref": "bbc_football#8",
     "title": "Should Palmer have been sent off earlier than he was?",
     "published": "2026-10-24T22:43:33+00:00",
     "summary": "Match of the Day pundit Martin Keown looks at the red card shown to Cole Palmer during Chelsea's 2-0 defeat to Tottenham, with the former Arsenal defender agreeing with the decision and suggesting Palmer was lucky not to receive a straight red for an early incident."
    },
    {
     "ref": "bbc_football#9",
     "title": "How 'special talent' Jackson inspired Villa to victory over Man City",
     "published": "2026-10-24T22:43:17+00:00",
     "summary": "Match of the Day pundits Martin Keown and Steph Houghton look at the impact Aston Villa forward Nicolas Jackson had with his two goals in their 2-1 victory over Manchester City, with Keown describing him as a \"special talent\"."
    },
    {
     "ref": "bbc_football#10",
     "title": "Watch Match of the Day on iPlayer",
     "published": "2026-10-24T22:40:55+00:00",
     "summary": "With Chelsea v Spurs, Arsenal v Everton, Villa v Man City and Coventry v Fulham"
    },
    {
     "ref": "bbc_football#11",
     "title": "Symonds scores screamer as Brighton beat West Ham",
     "published": "2026-10-24T22:23:48+00:00",
     "summary": "Maisie Symonds scores a 'goal of the season' contender to help Brighton beat West Ham 3-0, securing just their second league win of the season in the Women's Super League."
    },
    {
     "ref": "bbc_football#12",
     "title": "Man Utd not an unmanageable club - Carrick",
     "published": "2026-10-24T21:34:19+00:00",
     "summary": "Michael Carrick says it is possible to manage Manchester United effectively as he clings on to his job with Bournemouth visiting Old Trafford on Sunday."
    },
    {
     "ref": "bbc_football#13",
     "title": "The candid meeting that 'changed' Spurs - are they finally on way back?",
     "published": "2026-10-24T21:14:42+00:00",
     "summary": "Tottenham end Saturday's Premier League action in 12th place, their highest league position since 2 January. Are they finally on their way back?"
    },
    {
     "ref": "bbc_football#14",
     "title": "Liverpool among clubs keen on Vuskovic - Sunday's gossip",
     "published": "2026-10-24T20:20:30+00:00",
     "summary": "Brighton defender Luka Vuskovic is being looked at by high-profile clubs, Liverpool do not intend to bring Trent Alexander-Arnold back, AC Milan are targeting Manchester United's Leny Yoro, plus more."
    },
    {
     "ref": "bbc_football#15",
     "title": "Strikers finding form as Rangers bounce back",
     "published": "2026-10-24T19:54:48+00:00",
     "summary": "Derek McInnes demanded a response from his Rangers team after the disappointment of two dropped points at Dundee - and they delivered in emphatic style against St Johnstone."
    },
    {
     "ref": "bbc_football#16",
     "title": "Strikers finding form as Rangers bounce back",
     "published": "2026-10-24T19:54:48+00:00",
     "summary": "Derek McInnes demanded a response from his Rangers team after the disappointment of two dropped points at Dundee - and they delivered in emphatic style against St Johnstone."
    },
    {
     "ref": "bbc_football#17",
     "title": "Huddersfield on top, but difficult days for Derby - Sam Parkin's EFL takeaways",
     "published": "2026-10-24T19:35:19+00:00",
     "summary": "BBC Final Score pundit Sam Parkin looks at the weekend's talking points in the EFL, including Huddersfield's fine form and QPR's big win over Swansea."
    },
    {
     "ref": "bbc_football#18",
     "title": "'We could have played better' - Alonso disappointed after defeat",
     "published": "2026-10-24T19:25:04+00:00",
     "summary": "Chelsea manager Xabi Alonso admitted he was disappointed by his side's performance, saying they \"could have played better\" following their 2-0 defeat by Tottenham at Stamford Bridge."
    },
    {
     "ref": "bbc_football#19",
     "title": "Spurs clinch rare Stamford Bridge win as Palmer sent off",
     "published": "2026-10-24T19:17:06+00:00",
     "summary": "Tottenham claim just their second victory over Chelsea at Stamford Bridge in 36 years, winning 2-0 as the hosts finish with 10 men after a red card for Cole Palmer."
    },
    {
     "ref": "bbc_football#20",
     "title": "Watch: Sportscene - Saturday's Scottish Premiership highlights",
     "published": "2026-10-24T19:15:08+00:00",
     "summary": "With Rangers v St Johnstone, St Mirren v Dundee and Dundee Utd v Aberdeen"
    },
    {
     "ref": "bbc_football#21",
     "title": "'Best performance since I arrived' - De Zerbi praises Spurs after win",
     "published": "2026-10-24T19:12:19+00:00",
     "summary": "Tottenham manager Roberto De Zerbi describes his side's 2-0 victory over Chelsea at Stamford Bridge as \"the best since he arrived at the club\", adding the win was special given it was against their local rivals."
    },
    {
     "ref": "bbc_football#22",
     "title": "Hayen sacked by Burnley after just 14 games",
     "published": "2026-10-24T19:01:03+00:00",
     "summary": "Nicky Hayen is sacked after just 14 games in charge at Burnley following a poor start to the season."
    },
    {
     "ref": "bbc_football#23",
     "title": "Arsenal beat Everton to go level on points with leaders Man City",
     "published": "2026-10-24T18:59:30+00:00",
     "summary": "Goals from Ezri Konsa, his first for the club, and Gabriel Magalhaes helped Arsenal beat Everton 2-0 at the Emirates to move level on points with league leaders Manchester City."
    },
    {
     "ref": "bbc_football#24",
     "title": "Jackson scores twice as Aston Villa end Man City's perfect start",
     "published": "2026-10-24T18:59:27+00:00",
     "summary": "Nicolas Jackson scores twice as Aston Villa beat Manchester City 2-1 at Villa Park to end their 100% start to the Premier League season."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Inter Miami’s Winning Streak Ends After 2-0 Defeat To New York Red Bulls - TVC News",
     "published": "2026-10-25T06:42:00+00:00",
     "summary": "Inter Miami’s Winning Streak Ends After 2-0 Defeat To New York Red Bulls TVC News"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Adri Mehmeti outshines Lionel Messi as New York Red Bulls upset Inter Miami in tight MLS playoff chase - Yahoo Sports",
     "published": "2026-10-25T05:02:00+00:00",
     "summary": "Adri Mehmeti outshines Lionel Messi as New York Red Bulls upset Inter Miami in tight MLS playoff chase Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "New York RB vs Inter Miami: Major League Soccer stats & head-to-head - BBC",
     "published": "2026-10-25T03:17:28+00:00",
     "summary": "New York RB vs Inter Miami: Major League Soccer stats & head-to-head BBC"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Adri Mehmeti outshines Lionel Messi as New York Red Bulls upset Inter Miami in tight MLS playoff chase - Sporting News",
     "published": "2026-10-25T03:11:12+00:00",
     "summary": "Adri Mehmeti outshines Lionel Messi as New York Red Bulls upset Inter Miami in tight MLS playoff chase Sporting News"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Messi couldn't help Inter Miami win the match despite flying thousands of kilometers to be there in time. - Vietnam.vn",
     "published": "2026-10-25T02:43:58+00:00",
     "summary": "Messi couldn't help Inter Miami win the match despite flying thousands of kilometers to be there in time. Vietnam.vn"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "New York Red Bulls vs Inter Miami player ratings — Messi features off the bench as Herons lose in MLS - Sportstar",
     "published": "2026-10-25T02:07:55+00:00",
     "summary": "New York Red Bulls vs Inter Miami player ratings — Messi features off the bench as Herons lose in MLS Sportstar"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Messi Turns World Cup Heartbreak Into MLS Brilliance - Yahoo Sports",
     "published": "2026-10-25T01:55:00+00:00",
     "summary": "Messi Turns World Cup Heartbreak Into MLS Brilliance Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Red Bulls use own goal to grab lead, then Emil Forsberg to wrap up 2-0 victory over Inter Miami - ABC News - Breaking News, Latest News and Videos",
     "published": "2026-10-25T01:50:19+00:00",
     "summary": "Red Bulls use own goal to grab lead, then Emil Forsberg to wrap up 2-0 victory over Inter Miami ABC News - Breaking News, Latest News and Videos"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Lionel Messi magic missing as Inter Miami win streak snapped by New York Red Bulls defeat - Goal.com",
     "published": "2026-10-25T01:44:59+00:00",
     "summary": "Lionel Messi magic missing as Inter Miami win streak snapped by New York Red Bulls defeat Goal.com"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "MATCH RECAP, pres. by Provident Bank: Red Bull New York Beat Inter Miami CF, 2-0 - Red Bull New York",
     "published": "2026-10-25T01:40:20+00:00",
     "summary": "MATCH RECAP, pres. by Provident Bank: Red Bull New York Beat Inter Miami CF, 2-0 Red Bull New York"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Red Bulls blank Inter Miami as Messi plays limited minutes - Miami Herald",
     "published": "2026-10-25T01:36:22+00:00",
     "summary": "Red Bulls blank Inter Miami as Messi plays limited minutes Miami Herald"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "VIDEO: Catch the highlights of the Red Bulls’ 2-0 win over Miami and Messi - Front Row Soccer",
     "published": "2026-10-25T00:51:44+00:00",
     "summary": "VIDEO: Catch the highlights of the Red Bulls’ 2-0 win over Miami and Messi Front Row Soccer"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "MATCH RECAP: Inter Miami CF Falls On the Road at Red Bull New York - Inter Miami CF",
     "published": "2026-10-25T00:19:49+00:00",
     "summary": "MATCH RECAP: Inter Miami CF Falls On the Road at Red Bull New York Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Highlights: New York Red Bulls 2-0 Inter Miami CF (MLS) - OneFootball",
     "published": "2026-10-25T00:18:30+00:00",
     "summary": "Highlights: New York Red Bulls 2-0 Inter Miami CF (MLS) OneFootball"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Inter Miami CF at New York Red Bulls - MLS Game Summary - Oct 24, 2026 - USA Today",
     "published": "2026-10-25T00:15:25+00:00",
     "summary": "Inter Miami CF at New York Red Bulls - MLS Game Summary - Oct 24, 2026 USA Today"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "%$#[ＬＩＶＥＳｔｒｅａｍ]NOW!!] Tampa Bay Rays vs Milwaukee Brewers Live Free TV - FC東京オフィシャルホームページ",
     "published": "2026-10-25T00:11:25+00:00",
     "summary": "%$#[ＬＩＶＥＳｔｒｅａｍ]NOW!!] Tampa Bay Rays vs Milwaukee Brewers Live Free TV FC東京オフィシャルホームページ"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "[WATCHLIVE]ＴＯＤＡＹ!] Tampa Bay Rays vs Milwaukee Brewers ＬｉｖｅＦｒｅｅ ＯＮ Ｔｖ Ｃｈａｎｎｅｌ 24 October 2026 - FC東京オフィシャルホームページ",
     "published": "2026-10-25T00:11:24+00:00",
     "summary": "[WATCHLIVE]ＴＯＤＡＹ!] Tampa Bay Rays vs Milwaukee Brewers ＬｉｖｅＦｒｅｅ ＯＮ Ｔｖ Ｃｈａｎｎｅｌ 24 October 2026 FC東京オフィシャルホームページ"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "%$#[ＬＩＶＥＳｔｒｅａｍ]NOW!!] Milwaukee Brewers vs Tampa Bay Rays Live Free TV - FC東京オフィシャルホームページ",
     "published": "2026-10-25T00:11:21+00:00",
     "summary": "%$#[ＬＩＶＥＳｔｒｅａｍ]NOW!!] Milwaukee Brewers vs Tampa Bay Rays Live Free TV FC東京オフィシャルホームページ"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "[WATCHLIVE]ＴＯＤＡＹ!] Milwaukee Brewers vs Tampa Bay Rays ＬｉｖｅＦｒｅｅ ＯＮ Ｔｖ Ｃｈａｎｎｅｌ 24 October 2026 - FC東京オフィシャルホームページ",
     "published": "2026-10-25T00:11:21+00:00",
     "summary": "[WATCHLIVE]ＴＯＤＡＹ!] Milwaukee Brewers vs Tampa Bay Rays ＬｉｖｅＦｒｅｅ ＯＮ Ｔｖ Ｃｈａｎｎｅｌ 24 October 2026 FC東京オフィシャルホームページ"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "*&TV~[LIVESTREAMs]!! Milwaukee Brewers VS Tampa Bay Rays Live free stream - FC東京オフィシャルホームページ",
     "published": "2026-10-25T00:11:21+00:00",
     "summary": "*&TV~[LIVESTREAMs]!! Milwaukee Brewers VS Tampa Bay Rays Live free stream FC東京オフィシャルホームページ"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "WATCH: Red Bulls take down Inter Miami for playoff lifeline - MLSsoccer.com",
     "published": "2026-10-25T00:05:53+00:00",
     "summary": "WATCH: Red Bulls take down Inter Miami for playoff lifeline MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Red Bulls use own goal to grab lead, then Emil Forsberg to wrap up 2-0 victory over Inter Miami - Toronto Star",
     "published": "2026-10-25T00:03:22+00:00",
     "summary": "Red Bulls use own goal to grab lead, then Emil Forsberg to wrap up 2-0 victory over Inter Miami Toronto Star"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Red Bulls use own goal to grab lead, then Emil Forsberg to wrap up 2-0 victory over Inter Miami - The Killeen Daily Herald",
     "published": "2026-10-24T23:59:54+00:00",
     "summary": "Red Bulls use own goal to grab lead, then Emil Forsberg to wrap up 2-0 victory over Inter Miami The Killeen Daily Herald"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Red Bulls use own goal to grab lead, then Emil Forsberg to wrap up 2-0 victory over Inter Miami - Eagle-Tribune",
     "published": "2026-10-24T23:59:54+00:00",
     "summary": "Red Bulls use own goal to grab lead, then Emil Forsberg to wrap up 2-0 victory over Inter Miami Eagle-Tribune"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Red Bulls use own goal to grab lead, then Emil Forsberg to wrap up 2-0 victory over Inter Miami - The Daily Gazette",
     "published": "2026-10-24T23:59:54+00:00",
     "summary": "Red Bulls use own goal to grab lead, then Emil Forsberg to wrap up 2-0 victory over Inter Miami The Daily Gazette"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Deni Avdija's 26 propels Portland past Sacramento - NBA.com",
     "published": "2026-10-24T21:25:32+00:00",
     "summary": "Deni Avdija's 26 propels Portland past Sacramento NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Deni Avdija flirts with triple-double in Friday's win over Kings - FantasyPros",
     "published": "2026-10-24T15:23:15+00:00",
     "summary": "Deni Avdija flirts with triple-double in Friday's win over Kings FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Close call vs Kings proves Blazers must put the ball in Deni Avdija’s hands more - Rip City Project",
     "published": "2026-10-24T15:20:36+00:00",
     "summary": "Close call vs Kings proves Blazers must put the ball in Deni Avdija’s hands more Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija Fantasy Outlook & Stats - FantasySP",
     "published": "2026-10-24T14:23:38+00:00",
     "summary": "Deni Avdija Fantasy Outlook & Stats FantasySP"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija with 26/6/6 in win against Kings - NBC Sports",
     "published": "2026-10-24T10:26:07+00:00",
     "summary": "Deni Avdija with 26/6/6 in win against Kings NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Trail Blazers' Deni Avdija: Superb in team's second win - CBS Sports",
     "published": "2026-10-24T08:55:19+00:00",
     "summary": "Trail Blazers' Deni Avdija: Superb in team's second win CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Deni Avdija News: Superb in team's second win - RotoWire",
     "published": "2026-10-24T08:55:19+00:00",
     "summary": "Deni Avdija News: Superb in team's second win RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Taskforce Firewall: Martin at Leila, may comeback? (Episode 110) | GMA Entertainment - GMA Network",
     "published": "2026-10-24T07:40:12+00:00",
     "summary": "Taskforce Firewall: Martin at Leila, may comeback? (Episode 110) | GMA Entertainment GMA Network"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Taskforce Firewall: Full Episode 110 (October 23, 2026) | GMA Entertainment - GMA Network",
     "published": "2026-10-24T07:38:20+00:00",
     "summary": "Taskforce Firewall: Full Episode 110 (October 23, 2026) | GMA Entertainment GMA Network"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Deni Avdija Leads Trail Blazers to Thrilling Comeback Win vs Kings - Wunderfan",
     "published": "2026-10-24T07:31:45+00:00",
     "summary": "Deni Avdija Leads Trail Blazers to Thrilling Comeback Win vs Kings Wunderfan"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Delivery Boi: Full Episode 6 | GMA Entertainment - GMA Network",
     "published": "2026-10-24T07:20:04+00:00",
     "summary": "Delivery Boi: Full Episode 6 | GMA Entertainment GMA Network"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija propels Blazers to comeback victory over Kings - Durham Herald Sun",
     "published": "2026-10-24T07:19:06+00:00",
     "summary": "Deni Avdija propels Blazers to comeback victory over Kings Durham Herald Sun"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija scores 26 points to lead Trail Blazers in win over Kings - myMotherLode.com",
     "published": "2026-10-24T06:37:43+00:00",
     "summary": "Deni Avdija scores 26 points to lead Trail Blazers in win over Kings myMotherLode.com"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "NBA Roundup: Avdija lifts Blazers over Sabonis, Anunoby scores 20 - Eurohoops",
     "published": "2026-10-24T05:29:00+00:00",
     "summary": "NBA Roundup: Avdija lifts Blazers over Sabonis, Anunoby scores 20 Eurohoops"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Deni Avdija scores 26 points to lead Trail Blazers in win over Kings - Times Union",
     "published": "2026-10-24T05:15:55+00:00",
     "summary": "Deni Avdija scores 26 points to lead Trail Blazers in win over Kings Times Union"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija scores 26 points to lead Trail Blazers in win over Kings - Niagara Falls Review",
     "published": "2026-10-24T05:09:09+00:00",
     "summary": "Deni Avdija scores 26 points to lead Trail Blazers in win over Kings Niagara Falls Review"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija scores 26 points to lead Trail Blazers in win over Kings - Traverse City Record-Eagle",
     "published": "2026-10-24T05:07:45+00:00",
     "summary": "Deni Avdija scores 26 points to lead Trail Blazers in win over Kings Traverse City Record-Eagle"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Deni Avdija scores 26 points to lead Trail Blazers in win over Kings - couriernews.com",
     "published": "2026-10-24T05:07:45+00:00",
     "summary": "Deni Avdija scores 26 points to lead Trail Blazers in win over Kings couriernews.com"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "NBA Most Improved Player Odds & Favorites for 2027 - sports.betmgm.com",
     "published": "2026-10-23T07:00:00+00:00",
     "summary": "NBA Most Improved Player Odds & Favorites for 2027 sports.betmgm.com"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Nets' Ben Saraf: No minutes against Charlotte - CBS Sports",
     "published": "2026-10-22T16:27:45+00:00",
     "summary": "Nets' Ben Saraf: No minutes against Charlotte CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Ben Saraf News: No minutes against Charlotte - RotoWire",
     "published": "2026-10-22T16:27:45+00:00",
     "summary": "Ben Saraf News: No minutes against Charlotte RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Bulls quickly learn why Josh Giddey isn't built to recreate Deni Avdija's leap - Rip City Project",
     "published": "2026-10-22T16:04:04+00:00",
     "summary": "Bulls quickly learn why Josh Giddey isn't built to recreate Deni Avdija's leap Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Trail Blazers' Deni Avdija: Double-double in season opener - CBS Sports",
     "published": "2026-10-22T14:46:45+00:00",
     "summary": "Trail Blazers' Deni Avdija: Double-double in season opener CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Deni Avdija — No. 27 in The Ringer's NBA Top 100 - The Ringer",
     "published": "2026-10-22T12:15:38+00:00",
     "summary": "Deni Avdija — No. 27 in The Ringer's NBA Top 100 The Ringer"
    }
   ]
  }
 ]
}
</input>