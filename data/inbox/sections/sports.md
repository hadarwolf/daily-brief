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
  "home": "Liverpool",
  "away": "Arsenal",
  "kickoff_utc": "2026-11-01T16:30:00Z"
 },
 {
  "sport": "nba",
  "competition": "NBA",
  "home": "Indiana Pacers",
  "away": "Brooklyn Nets",
  "kickoff_utc": "2026-11-01T22:00:00.000Z"
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
     "competition": "Premier League",
     "kickoff_utc": "2026-10-31T12:30:00Z",
     "home": "Chelsea",
     "away": "Man United",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-31T12:30:00Z",
     "home": "Lincoln City",
     "away": "Birmingham",
     "status": "FINISHED",
     "score": "1-3"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-31T12:30:00Z",
     "home": "Stoke",
     "away": "Preston NE",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-31T12:30:00Z",
     "home": "Norwich",
     "away": "Watford",
     "status": "FINISHED",
     "score": "3-2"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-31T13:00:00Z",
     "home": "Levante",
     "away": "Atleti",
     "status": "FINISHED",
     "score": "0-2"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-31T14:00:00Z",
     "home": "Bologna",
     "away": "Monza",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-31T14:30:00Z",
     "home": "Bremen",
     "away": "Hoffenheim",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-31T14:30:00Z",
     "home": "M'gladbach",
     "away": "SC Paderborn",
     "status": "FINISHED",
     "score": "0-0"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-31T14:30:00Z",
     "home": "Schalke",
     "away": "RB Leipzig",
     "status": "FINISHED",
     "score": "0-2"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-31T14:30:00Z",
     "home": "Leverkusen",
     "away": "Stuttgart",
     "status": "FINISHED",
     "score": "2-4"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-31T14:30:00Z",
     "home": "Augsburg",
     "away": "Freiburg",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-31T15:00:00Z",
     "home": "Middlesbrough",
     "away": "Charlton",
     "status": "FINISHED",
     "score": "3-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-31T15:00:00Z",
     "home": "Swansea",
     "away": "Blackburn",
     "status": "FINISHED",
     "score": "4-0"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-31T15:00:00Z",
     "home": "Bournemouth",
     "away": "Leeds United",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-31T15:00:00Z",
     "home": "Millwall",
     "away": "Derby County",
     "status": "FINISHED",
     "score": "4-1"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-31T15:00:00Z",
     "home": "Brentford",
     "away": "Nottingham",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-31T15:00:00Z",
     "home": "Bolton",
     "away": "Bristol City",
     "status": "FINISHED",
     "score": "2-3"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-31T15:00:00Z",
     "home": "Wolverhampton",
     "away": "Cardiff",
     "status": "FINISHED",
     "score": "3-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-31T15:00:00Z",
     "home": "West Ham",
     "away": "West Brom",
     "status": "FINISHED",
     "score": "1-3"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-31T15:00:00Z",
     "home": "Man City",
     "away": "Brighton Hove",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-31T15:00:00Z",
     "home": "Burnley",
     "away": "Portsmouth",
     "status": "FINISHED",
     "score": "0-0"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-31T15:00:00Z",
     "home": "Hull City",
     "away": "Ipswich Town",
     "status": "FINISHED",
     "score": "2-2"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-31T15:00:00Z",
     "home": "Coventry City",
     "away": "Sunderland",
     "status": "FINISHED",
     "score": "3-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-31T15:00:00Z",
     "home": "Southampton",
     "away": "QPR",
     "status": "FINISHED",
     "score": "4-1"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-31T15:15:00Z",
     "home": "Rayo Vallecano",
     "away": "Celta",
     "status": "FINISHED",
     "score": "3-0"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-31T15:30:00Z",
     "home": "Feyenoord",
     "away": "Sittard",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-31T15:30:00Z",
     "home": "Moreirense",
     "away": "Amadora",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-31T17:00:00Z",
     "home": "Udinese",
     "away": "Roma",
     "status": "FINISHED",
     "score": "2-5"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-31T17:30:00Z",
     "home": "Bayern",
     "away": "Dortmund",
     "status": "FINISHED",
     "score": "2-2"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-31T17:30:00Z",
     "home": "Real Betis",
     "away": "Málaga",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-31T17:30:00Z",
     "home": "Tottenham",
     "away": "Crystal Palace",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-31T17:45:00Z",
     "home": "Heerenveen",
     "away": "NEC",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-31T17:45:00Z",
     "home": "PSV",
     "away": "Willem II",
     "status": "FINISHED",
     "score": "7-0"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-31T19:00:00Z",
     "home": "Coritiba",
     "away": "Vitória",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-31T19:45:00Z",
     "home": "Milan",
     "away": "Inter",
     "status": "FINISHED",
     "score": "3-1"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-31T19:45:00Z",
     "home": "Troyes",
     "away": "Le Mans",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-31T20:00:00Z",
     "home": "Aston Villa",
     "away": "Fulham",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-31T20:00:00Z",
     "home": "Cambuur",
     "away": "Go Ahead",
     "status": "FINISHED",
     "score": "4-0"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-31T20:00:00Z",
     "home": "Barça",
     "away": "Alavés",
     "status": "FINISHED",
     "score": "6-1"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-31T20:00:00Z",
     "home": "Ajax",
     "away": "AZ",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-31T20:30:00Z",
     "home": "Porto",
     "away": "Estoril Praia",
     "status": "FINISHED",
     "score": "4-0"
    }
   ],
   "today": [
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-01T11:15:00Z",
     "home": "Zwolle",
     "away": "Den Haag",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-01T11:30:00Z",
     "home": "Como 1907",
     "away": "Venezia FC",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-01T13:00:00Z",
     "home": "Getafe",
     "away": "Sevilla FC",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-01T13:30:00Z",
     "home": "Telstar",
     "away": "Utrecht",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-01T13:30:00Z",
     "home": "Excelsior",
     "away": "Twente",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-01T14:00:00Z",
     "home": "Lazio",
     "away": "Cagliari",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-01T14:00:00Z",
     "home": "Frosinone",
     "away": "Torino",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-01T14:00:00Z",
     "home": "Strasbourg",
     "away": "Auxerre",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-01T14:30:00Z",
     "home": "Union Berlin",
     "away": "1. FC Köln",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-01T15:15:00Z",
     "home": "Santander",
     "away": "Real Madrid",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-01T15:30:00Z",
     "home": "Arouca",
     "away": "CD Nacional",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-01T15:45:00Z",
     "home": "Groningen",
     "away": "Sparta",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-01T16:15:00Z",
     "home": "Paris FC",
     "away": "Monaco",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-01T16:15:00Z",
     "home": "Olympique Lyon",
     "away": "Angers SCO",
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
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-01T16:30:00Z",
     "home": "Frankfurt",
     "away": "HSV",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-01T17:00:00Z",
     "home": "Lecce",
     "away": "Genoa",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-01T17:30:00Z",
     "home": "Elche",
     "away": "Valencia",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-01T18:00:00Z",
     "home": "Acad. Viseu",
     "away": "Rio Ave",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-01T18:00:00Z",
     "home": "Marítimo",
     "away": "Santa Clara",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-01T19:45:00Z",
     "home": "Marseille",
     "away": "Toulouse",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-01T19:45:00Z",
     "home": "Juventus",
     "away": "Napoli",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-01T20:00:00Z",
     "home": "Athletic",
     "away": "Real Sociedad",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-01T20:30:00Z",
     "home": "Braga",
     "away": "Famalicão",
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
     "played": 9,
     "pts": 21,
     "gd": 10
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
     "played": 9,
     "pts": 19,
     "gd": 17
    },
    {
     "pos": 4,
     "team": "Chelsea",
     "played": 9,
     "pts": 16,
     "gd": 4
    },
    {
     "pos": 5,
     "team": "Liverpool",
     "played": 8,
     "pts": 15,
     "gd": 3
    },
    {
     "pos": 6,
     "team": "Brentford",
     "played": 9,
     "pts": 14,
     "gd": 7
    }
   ],
   "Primera Division": [
    {
     "pos": 1,
     "team": "Barça",
     "played": 11,
     "pts": 30,
     "gd": 34
    },
    {
     "pos": 2,
     "team": "Atleti",
     "played": 11,
     "pts": 28,
     "gd": 14
    },
    {
     "pos": 3,
     "team": "Real Madrid",
     "played": 10,
     "pts": 24,
     "gd": 15
    },
    {
     "pos": 4,
     "team": "Real Betis",
     "played": 11,
     "pts": 23,
     "gd": 3
    },
    {
     "pos": 5,
     "team": "Real Sociedad",
     "played": 10,
     "pts": 19,
     "gd": 1
    },
    {
     "pos": 6,
     "team": "Sevilla FC",
     "played": 10,
     "pts": 17,
     "gd": 0
    }
   ],
   "Bundesliga": [
    {
     "pos": 1,
     "team": "Bayern",
     "played": 8,
     "pts": 18,
     "gd": 19
    },
    {
     "pos": 2,
     "team": "Dortmund",
     "played": 8,
     "pts": 18,
     "gd": 8
    },
    {
     "pos": 3,
     "team": "Freiburg",
     "played": 8,
     "pts": 16,
     "gd": 8
    },
    {
     "pos": 4,
     "team": "RB Leipzig",
     "played": 8,
     "pts": 15,
     "gd": 11
    },
    {
     "pos": 5,
     "team": "Bremen",
     "played": 8,
     "pts": 15,
     "gd": 3
    },
    {
     "pos": 6,
     "team": "Leverkusen",
     "played": 8,
     "pts": 13,
     "gd": 2
    }
   ],
   "Serie A": [
    {
     "pos": 1,
     "team": "Lazio",
     "played": 9,
     "pts": 25,
     "gd": 15
    },
    {
     "pos": 2,
     "team": "Inter",
     "played": 10,
     "pts": 25,
     "gd": 13
    },
    {
     "pos": 3,
     "team": "Roma",
     "played": 10,
     "pts": 24,
     "gd": 18
    },
    {
     "pos": 4,
     "team": "Milan",
     "played": 10,
     "pts": 21,
     "gd": 9
    },
    {
     "pos": 5,
     "team": "Como 1907",
     "played": 9,
     "pts": 20,
     "gd": 9
    },
    {
     "pos": 6,
     "team": "Frosinone",
     "played": 9,
     "pts": 17,
     "gd": 8
    }
   ],
   "Ligue 1": [
    {
     "pos": 1,
     "team": "PSG",
     "played": 9,
     "pts": 20,
     "gd": 11
    },
    {
     "pos": 2,
     "team": "Lille",
     "played": 9,
     "pts": 18,
     "gd": 6
    },
    {
     "pos": 3,
     "team": "Stade Rennais",
     "played": 9,
     "pts": 16,
     "gd": 1
    },
    {
     "pos": 4,
     "team": "Monaco",
     "played": 8,
     "pts": 15,
     "gd": 4
    },
    {
     "pos": 5,
     "team": "Olympique Lyon",
     "played": 8,
     "pts": 14,
     "gd": 6
    },
    {
     "pos": 6,
     "team": "Paris FC",
     "played": 8,
     "pts": 14,
     "gd": 4
    }
   ]
  },
  "favorite_teams": {
   "arsenal": {
    "recent": [
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
     },
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-10-24T14:00:00Z",
      "home": "Arsenal",
      "away": "Everton",
      "status": "FINISHED",
      "score": "2-0"
     }
    ],
    "upcoming": [
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-11-01T16:30:00Z",
      "home": "Liverpool",
      "away": "Arsenal",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-11-04T20:00:00Z",
      "home": "Slavia Praha",
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
      "kickoff_utc": "2026-10-20T19:00:00Z",
      "home": "PSG",
      "away": "Barça",
      "status": "FINISHED",
      "score": "4-2"
     },
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-10-25T20:00:00Z",
      "home": "Barça",
      "away": "Real Madrid",
      "status": "FINISHED",
      "score": "1-2"
     },
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-10-31T20:00:00Z",
      "home": "Barça",
      "away": "Alavés",
      "status": "FINISHED",
      "score": "6-1"
     }
    ],
    "upcoming": [
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-11-03T20:00:00Z",
      "home": "Barça",
      "away": "Aston Villa",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-11-08T20:00:00Z",
      "home": "Atleti",
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
    "home": "Utah Jazz",
    "away": "Portland Trail Blazers",
    "score": "90-112",
    "status": "Final"
   },
   {
    "home": "Charlotte Hornets",
    "away": "Philadelphia 76ers",
    "score": "104-109",
    "status": "Final"
   },
   {
    "home": "New Orleans Pelicans",
    "away": "Atlanta Hawks",
    "score": "121-99",
    "status": "Final"
   },
   {
    "home": "Memphis Grizzlies",
    "away": "Sacramento Kings",
    "score": "136-105",
    "status": "Final"
   },
   {
    "home": "Milwaukee Bucks",
    "away": "Cleveland Cavaliers",
    "score": "111-136",
    "status": "Final"
   },
   {
    "home": "San Antonio Spurs",
    "away": "Minnesota Timberwolves",
    "score": "121-111",
    "status": "Final"
   },
   {
    "home": "Houston Rockets",
    "away": "Oklahoma City Thunder",
    "score": "119-98",
    "status": "Final"
   }
  ],
  "games_today": [
   {
    "home": "Orlando Magic",
    "away": "Boston Celtics",
    "score": null,
    "status": "2026-11-01T20:30:00Z"
   },
   {
    "home": "Indiana Pacers",
    "away": "Brooklyn Nets",
    "score": null,
    "status": "2026-11-01T22:00:00Z"
   },
   {
    "home": "Golden State Warriors",
    "away": "LA Clippers",
    "score": null,
    "status": "2026-11-02T01:30:00Z"
   },
   {
    "home": "Los Angeles Lakers",
    "away": "Toronto Raptors",
    "score": null,
    "status": "2026-11-02T02:00:00Z"
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
     "kickoff_utc": "2026-10-28T23:30:00",
     "home": "Inter Miami",
     "away": "FC Cincinnati",
     "score": "2-2"
    }
   ],
   "upcoming": [
    {
     "competition": "American Major League Soccer",
     "kickoff_utc": "2026-11-02T00:00:00",
     "home": "New England Revolution",
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
     "title": "Third-choice? Inside Alexander-Arnold's struggles in Madrid",
     "published": "2026-11-01T07:42:08+00:00",
     "summary": "Trent Alexander-Arnold is currently third-choice right-back at Real Madrid - where does his future lie?"
    },
    {
     "ref": "bbc_football#1",
     "title": "Anfield, intensity, rotation - how Iraola is improving Liverpool",
     "published": "2026-11-01T07:38:15+00:00",
     "summary": "Liverpool fans are finding joy at Anfield again with a feel-good factor around the club before the visit of reigning champions Arsenal on Sunday."
    },
    {
     "ref": "bbc_football#2",
     "title": "Who am I? Guess WSL star No 10",
     "published": "2026-11-01T06:56:19+00:00",
     "summary": "Work out the identity of today's player in as few attempts as possible."
    },
    {
     "ref": "bbc_football#3",
     "title": "Who am I? Guess WSL star No 10",
     "published": "2026-11-01T06:56:19+00:00",
     "summary": "Work out the identity of today's player in as few attempts as possible."
    },
    {
     "ref": "bbc_football#4",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-11-01T06:54:38+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#5",
     "title": "Fishlock out to keep career alive in NWSL play-offs",
     "published": "2026-11-01T05:15:00+00:00",
     "summary": "On Sunday, 1 November, Jess Fishlock takes to the pitch for Seattle Reign against Orlando Pride, not knowing if it will be her final match."
    },
    {
     "ref": "bbc_football#6",
     "title": "Williams heart warning after career ended at 22",
     "published": "2026-11-01T05:01:19+00:00",
     "summary": "At just 22, Keelan Williams faced the hardest decision of his life as stage one heart failure made him call an end to his football career."
    },
    {
     "ref": "bbc_football#7",
     "title": "Wales in fight to retain rising female stars",
     "published": "2026-11-01T05:00:11+00:00",
     "summary": "Wales face an \"increasingly aggressive\" battle to secure the international futures of talented youngsters tempted to switch to England."
    },
    {
     "ref": "bbc_football#8",
     "title": "How 'brave & balanced' Brighton beat Man City",
     "published": "2026-10-31T23:59:24+00:00",
     "summary": "Match of the Day pundits Danny Murphy and Stephan Warnock analyse Brighton's impressive 1-0 victory over Manchester City, with Warnock praising the balance of the Seagulls squad."
    },
    {
     "ref": "bbc_football#9",
     "title": "Has Martinez become a liability for Man Utd?",
     "published": "2026-10-31T23:59:22+00:00",
     "summary": "Match of the Day pundits Danny Murphy and Stephan Warnock analyse Lisandro Martinez's performance in Manchester United's 2-0 defeat to Chelsea, where the Argentinian defender was sent off."
    },
    {
     "ref": "bbc_football#10",
     "title": "Are Manchester United really at risk of a relegation scrap?",
     "published": "2026-10-31T23:52:28+00:00",
     "summary": "Manchester United's current tally of seven points from nine games would not even get them 30 points if it was continued for the full season."
    },
    {
     "ref": "bbc_football#11",
     "title": "Coventry, Ipswich, Hull - promoted trio enjoy positive starts",
     "published": "2026-10-31T23:08:07+00:00",
     "summary": "The three teams have collected a respectable 31 points in total after nine games, and all currently sit above the relegation zone."
    },
    {
     "ref": "bbc_football#12",
     "title": "Kane misses Bayern penalty before late Dortmund goal earns draw",
     "published": "2026-10-31T23:05:55+00:00",
     "summary": "Harry Kane misses from the spot as Bayern Muich are held to a 2-2 draw with Borussia Dortmund in Der Klassiker after Fabio Silva's late equaliser."
    },
    {
     "ref": "bbc_football#13",
     "title": "McInnes demands more after delivering Rangers' trophy chance",
     "published": "2026-10-31T22:40:38+00:00",
     "summary": "Derek McInnes knows there is room for improvement as he steers in-form Rangers to the Premier Sports Cup final with a 1-0 win over Aberdeen."
    },
    {
     "ref": "bbc_football#14",
     "title": "Chelsea beat 10-man Man Utd to pile more pressure on Carrick",
     "published": "2026-10-31T22:30:16+00:00",
     "summary": "Lisandro Martinez is sent off for Manchester United as they suffer a 2-0 defeat against Chelsea at Stamford Bridge to pile more pressure on under-fire manager Michael Carrick."
    },
    {
     "ref": "bbc_football#15",
     "title": "Brighton pick up first away league victory over Man City",
     "published": "2026-10-31T22:30:05+00:00",
     "summary": "Brighton pick up their first away league victory at Manchester City, winning 1-0 to condemn City to a second successive Premier League defeat."
    },
    {
     "ref": "bbc_football#16",
     "title": "Coventry out of bottom three with win over struggling Sunderland",
     "published": "2026-10-31T22:29:50+00:00",
     "summary": "Frank Lampard's Coventry City lift themselves out of the relegation zone after beating struggling Sunderland, who remain rooted to the bottom of the Premier League table."
    },
    {
     "ref": "bbc_football#17",
     "title": "Enciso's stunning goal earns Ipswich draw at Hull",
     "published": "2026-10-31T22:29:40+00:00",
     "summary": "Julio Enciso scores the equalising goal for Ipswich as they draw 2-2 with Hull at the MKM Stadium."
    },
    {
     "ref": "bbc_football#18",
     "title": "Spurs revival continues with victory over 10-man Crystal Palace",
     "published": "2026-10-31T22:29:29+00:00",
     "summary": "Jean-Philippe Mateta was shown an early red card as Crystal Palace lose 2-0 at Tottenham to increase the pressure on manager Pierre Sage."
    },
    {
     "ref": "bbc_football#19",
     "title": "Evanilson scores again as Bournemouth beat Leeds",
     "published": "2026-10-31T22:29:21+00:00",
     "summary": "Forward Evanilson continues his fine goalscoring form by netting in a fourth Premier League match in a row to help Bournemouth defeat Leeds United at the Vitality Stadium."
    },
    {
     "ref": "bbc_football#20",
     "title": "Thiago on target as Brentford beat Forest",
     "published": "2026-10-31T22:29:11+00:00",
     "summary": "Igor Thiago's second-half goal helps Brentford to their first win in five as they beat Nottingham Forest 2-0 at the Gtech Community Stadium."
    },
    {
     "ref": "bbc_football#21",
     "title": "Suzuki mistake gifts Fulham point at Villa",
     "published": "2026-10-31T22:29:02+00:00",
     "summary": "Aston Villa goalkeeper Zion Suzuki's second-half mistake sees Fulham secure a 1-1 draw at Villa Park after Nicolas Jackson had given the hosts the lead."
    },
    {
     "ref": "bbc_football#22",
     "title": "Man Utd enquire about Toney - Sunday's gossip",
     "published": "2026-10-31T22:14:36+00:00",
     "summary": "Manchester United enquire about Ivan Toney's availability, Barcelona are tracking Chelsea winger Estevao Willian, Jean-Philippe Mateta is set to leave Crystal Palace in January, plus more."
    },
    {
     "ref": "bbc_football#23",
     "title": "AC Milan score three first-half goals to seal derby victory over Inter",
     "published": "2026-10-31T21:58:09+00:00",
     "summary": "Christian Pulisic, Adrien Rabiot and Diego Moreira score in the first-half to help AC Milan to a 3-1 victory over city rivals Inter Milan in the first Milan derby of the season in Serie A."
    },
    {
     "ref": "bbc_football#24",
     "title": "Are De Zerbi's Spurs finding elusive consistency?",
     "published": "2026-10-31T21:16:11+00:00",
     "summary": "Are Spurs finally finding elusive consistency under Roberto de Zerbi after a third successive Premier League win, asks chief football writer Phil McNulty?"
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Lionel Messi benefits from MLS rule that doesn't exist in any other league - SPORTbible",
     "published": "2026-11-01T09:45:36+00:00",
     "summary": "Lionel Messi benefits from MLS rule that doesn't exist in any other league SPORTbible"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "5 Yellow Cards Don’t Suspend Lionel Messi Thanks to This Unusual Rule - شبكة تواصل الإخبارية",
     "published": "2026-11-01T09:33:53+00:00",
     "summary": "5 Yellow Cards Don’t Suspend Lionel Messi Thanks to This Unusual Rule شبكة تواصل الإخبارية"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Lionel Messi's only vote: he surprises Ibrahim Maza in the Ballon d'Or voting - Goal.com",
     "published": "2026-11-01T09:07:49+00:00",
     "summary": "Lionel Messi's only vote: he surprises Ibrahim Maza in the Ballon d'Or voting Goal.com"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Inter Miami - Charlotte - Soccerway",
     "published": "2026-11-01T08:24:05+00:00",
     "summary": "Inter Miami - Charlotte Soccerway"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Inter Miami vs Charlotte FC: Kalshi Promo Code & $25 Bonus - Squawka",
     "published": "2026-11-01T07:05:11+00:00",
     "summary": "Inter Miami vs Charlotte FC: Kalshi Promo Code & $25 Bonus Squawka"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Watch New England Revolution vs. Inter Miami CF live today: Who is broadcasting the match on TV and via live stream? - Goal.com",
     "published": "2026-11-01T06:43:05+00:00",
     "summary": "Watch New England Revolution vs. Inter Miami CF live today: Who is broadcasting the match on TV and via live stream? Goal.com"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "New England Revolution vs Inter Miami CF prediction and betting tips 01 November 2026 - Dailysports",
     "published": "2026-11-01T05:38:16+00:00",
     "summary": "New England Revolution vs Inter Miami CF prediction and betting tips 01 November 2026 Dailysports"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Where to Watch New England Revolution vs. Inter Miami CF: TV Channel, Start Time and Live Stream - Bleacher Nation",
     "published": "2026-11-01T02:23:22+00:00",
     "summary": "Where to Watch New England Revolution vs. Inter Miami CF: TV Channel, Start Time and Live Stream Bleacher Nation"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Revolution host Messi, Inter Miami as they try to seal second place in East - Field Level Media",
     "published": "2026-11-01T01:57:58+00:00",
     "summary": "Revolution host Messi, Inter Miami as they try to seal second place in East Field Level Media"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "MATCHDAY GUIDE | Revs vs. Inter Miami CF (November 1, 2026) - revolutionsoccer.net",
     "published": "2026-11-01T01:45:09+00:00",
     "summary": "MATCHDAY GUIDE | Revs vs. Inter Miami CF (November 1, 2026) revolutionsoccer.net"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Inter Miami vs Charlotte FC: Predictions, Picks, Odds & Lineups - Squawka",
     "published": "2026-11-01T01:35:30+00:00",
     "summary": "Inter Miami vs Charlotte FC: Predictions, Picks, Odds & Lineups Squawka"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Inter Miami vs Charlotte FC: Predictions, Picks, Odds & Lineups - Squawka",
     "published": "2026-11-01T01:19:58+00:00",
     "summary": "Inter Miami vs Charlotte FC: Predictions, Picks, Odds & Lineups Squawka"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "How to watch New England vs Inter Miami match in the USA: Live stream and TV for 2026 MLS season - World Soccer Talk",
     "published": "2026-11-01T00:06:03+00:00",
     "summary": "How to watch New England vs Inter Miami match in the USA: Live stream and TV for 2026 MLS season World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "A strange rule prevents Messi from being suspended despite receiving 5 yellow cards - Goal.com",
     "published": "2026-10-31T23:38:06+00:00",
     "summary": "A strange rule prevents Messi from being suspended despite receiving 5 yellow cards Goal.com"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Lionel Messi’s Inter Miami can clinch 2027 Concacaf Champions Cup spot with a win vs New England - World Soccer Talk",
     "published": "2026-10-31T23:29:59+00:00",
     "summary": "Lionel Messi’s Inter Miami can clinch 2027 Concacaf Champions Cup spot with a win vs New England World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Cristiano Ronaldo vs Lionel Messi: Carlos Tevez reveals how Argentina’s legend predicts his own goals and w... - World Soccer Talk",
     "published": "2026-10-31T23:11:04+00:00",
     "summary": "Cristiano Ronaldo vs Lionel Messi: Carlos Tevez reveals how Argentina’s legend predicts his own goals and w... World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "The Wild Rule That Helped Lionel Messi Escape Suspension for Fifth MLS Yellow Card - Sports Illustrated",
     "published": "2026-10-31T21:30:00+00:00",
     "summary": "The Wild Rule That Helped Lionel Messi Escape Suspension for Fifth MLS Yellow Card Sports Illustrated"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "New England Revolution vs Inter Miami Prediction and Betting Tips | November 1st 2026 - Sportskeeda",
     "published": "2026-10-31T20:04:30+00:00",
     "summary": "New England Revolution vs Inter Miami Prediction and Betting Tips | November 1st 2026 Sportskeeda"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Inter Miami visit New England Revolution on Sunday, kick-off seven p.m. ET - OneFootball",
     "published": "2026-10-31T19:50:23+00:00",
     "summary": "Inter Miami visit New England Revolution on Sunday, kick-off seven p.m. ET OneFootball"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "MATCH PREVIEW: Inter Miami CF Visits the New England Revolution on Sunday - Inter Miami CF",
     "published": "2026-10-31T18:22:41+00:00",
     "summary": "MATCH PREVIEW: Inter Miami CF Visits the New England Revolution on Sunday Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "New England Revolution vs Inter Miami prediction: teams form analysis, possible lineups on November 2, 2026 - RatingBet",
     "published": "2026-10-31T17:41:39+00:00",
     "summary": "New England Revolution vs Inter Miami prediction: teams form analysis, possible lineups on November 2, 2026 RatingBet"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "A fleeting joy and a sad ending! Messi joins a Brazilian club in a stunning surprise - Goal.com",
     "published": "2026-10-31T17:39:49+00:00",
     "summary": "A fleeting joy and a sad ending! Messi joins a Brazilian club in a stunning surprise Goal.com"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "New England Revolution - Inter Miami CF prediction & tips 02.11.2026 - Transfermarkt",
     "published": "2026-10-31T17:24:25+00:00",
     "summary": "New England Revolution - Inter Miami CF prediction & tips 02.11.2026 Transfermarkt"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Who did Lionel Messi vote for in the Kopa Trophy? His ballot and a surprise third pick - World Soccer Talk",
     "published": "2026-10-31T16:43:26+00:00",
     "summary": "Who did Lionel Messi vote for in the Kopa Trophy? His ballot and a surprise third pick World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "New England Revolution vs Inter Miami Betting Tips & Live Stream - Another Shootout Backed in MLS - FreeTips",
     "published": "2026-10-31T16:23:21+00:00",
     "summary": "New England Revolution vs Inter Miami Betting Tips & Live Stream - Another Shootout Backed in MLS FreeTips"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "NBA: Trail Blazers bounce back, roll over Jazz - Inquirer.net",
     "published": "2026-11-01T06:43:00+00:00",
     "summary": "NBA: Trail Blazers bounce back, roll over Jazz Inquirer.net"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Trail Blazers' Deni Avdija: Hits for game-high 24 in win - CBS Sports",
     "published": "2026-11-01T03:46:58+00:00",
     "summary": "Trail Blazers' Deni Avdija: Hits for game-high 24 in win CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija News: Hits for game-high 24 in win - RotoWire",
     "published": "2026-11-01T03:46:58+00:00",
     "summary": "Deni Avdija News: Hits for game-high 24 in win RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Avdija scores 24 and Lillard has 22 as Trail Blazers roll over Jazz - TSN",
     "published": "2026-11-01T03:09:00+00:00",
     "summary": "Avdija scores 24 and Lillard has 22 as Trail Blazers roll over Jazz TSN"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Blazers blow out Jazz with Ja Morant sidelined - FASTBREAK.com.ph",
     "published": "2026-11-01T01:45:17+00:00",
     "summary": "Blazers blow out Jazz with Ja Morant sidelined FASTBREAK.com.ph"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija, Damian Lillard lead Blazers past Utah in easy win - HoopsHype",
     "published": "2026-10-31T22:53:00+00:00",
     "summary": "Deni Avdija, Damian Lillard lead Blazers past Utah in easy win HoopsHype"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Deni Avdija Highlights (24 Points, 5 Rebounds) | Trail Blazers 112, Jazz 90 | Oct. 31, 2026 - NBA.com",
     "published": "2026-10-31T22:03:10+00:00",
     "summary": "Deni Avdija Highlights (24 Points, 5 Rebounds) | Trail Blazers 112, Jazz 90 | Oct. 31, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija finishes through contact - Yahoo Sports",
     "published": "2026-10-31T21:36:33+00:00",
     "summary": "Deni Avdija finishes through contact Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Ja Morant injury makes it clear Blazers need Point Deni back - Rip City Project",
     "published": "2026-10-30T19:59:33+00:00",
     "summary": "Ja Morant injury makes it clear Blazers need Point Deni back Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Trail Blazers' Deni Avdija: Strong start continues - CBS Sports",
     "published": "2026-10-30T17:10:52+00:00",
     "summary": "Trail Blazers' Deni Avdija: Strong start continues CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija News: Strong start continues - RotoWire",
     "published": "2026-10-30T17:10:52+00:00",
     "summary": "Deni Avdija News: Strong start continues RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija leads Blazers in loss to Memphis - FantasyPros",
     "published": "2026-10-30T13:52:16+00:00",
     "summary": "Deni Avdija leads Blazers in loss to Memphis FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Nets Exercise Options For Egor Demin, Drake Powell, Ben Saraf, Nolan Traore, Danny Wolf - RealGM",
     "published": "2026-10-30T12:34:00+00:00",
     "summary": "Nets Exercise Options For Egor Demin, Drake Powell, Ben Saraf, Nolan Traore, Danny Wolf RealGM"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "NBA Notes: Blazers, Deni Avdija, Pelicans, Jeremiah Fears, Hawks - Hoops Wire",
     "published": "2026-10-30T07:38:51+00:00",
     "summary": "NBA Notes: Blazers, Deni Avdija, Pelicans, Jeremiah Fears, Hawks Hoops Wire"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Deni Avdija scores game-high 24 points vs. Utah - NBC Sports",
     "published": "2026-10-30T07:00:00+00:00",
     "summary": "Deni Avdija scores game-high 24 points vs. Utah NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija scores 24 points as Portland suffers first loss of NBA season - Ynetnews",
     "published": "2026-10-30T06:19:28+00:00",
     "summary": "Deni Avdija scores 24 points as Portland suffers first loss of NBA season Ynetnews"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija with the And-1!, 10/29/2026 - Yahoo Sports",
     "published": "2026-10-30T04:31:22+00:00",
     "summary": "Deni Avdija with the And-1!, 10/29/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Deni Avdija's 24 Points Not Enough, Blazers Fall to Grizzlies - Sports Illustrated",
     "published": "2026-10-30T04:24:46+00:00",
     "summary": "Deni Avdija's 24 Points Not Enough, Blazers Fall to Grizzlies Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija with the and-1 bucket - ESPN",
     "published": "2026-10-29T22:31:10+00:00",
     "summary": "Deni Avdija with the and-1 bucket ESPN"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Nets' Ben Saraf: Option picked up - CBS Sports",
     "published": "2026-10-29T17:12:13+00:00",
     "summary": "Nets' Ben Saraf: Option picked up CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Ben Saraf News: Option picked up - RotoWire",
     "published": "2026-10-29T17:12:13+00:00",
     "summary": "Ben Saraf News: Option picked up RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Deni Avdija First Basket Pick & Odds Today (Oct. 29) - Lineups",
     "published": "2026-10-29T15:36:08+00:00",
     "summary": "Deni Avdija First Basket Pick & Odds Today (Oct. 29) Lineups"
    }
   ]
  }
 ]
}
</input>